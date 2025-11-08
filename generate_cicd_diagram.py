from PIL import Image, ImageDraw, ImageFont
import os

# Create image with better dimensions for workflow
width, height = 1400, 900
img = Image.new('RGB', (width, height), color='#0f172a')
draw = ImageDraw.Draw(img)

# Modern color scheme
bg_dark = '#0f172a'
bg_card = '#1e293b'
primary = '#06b6d4'
accent = '#8b5cf6'
success = '#10b981'
text_color = '#f1f5f9'
text_muted = '#94a3b8'

# Load fonts
try:
    title_font = ImageFont.truetype("arial.ttf", 40)
    heading_font = ImageFont.truetype("arialbd.ttf", 20)
    text_font = ImageFont.truetype("arial.ttf", 16)
    small_font = ImageFont.truetype("arial.ttf", 13)
except:
    title_font = ImageFont.load_default()
    heading_font = ImageFont.load_default()
    text_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# Title with gradient effect
draw.text((700, 40), "Full Automated CI/CD Pipeline", fill=primary, font=title_font, anchor="mm")
draw.text((700, 85), "Node.js Application → AWS ECS Fargate", fill=text_muted, font=text_font, anchor="mm")

# Enhanced rounded rectangle with shadow
def draw_card(x, y, w, h, r, fill, outline, title, items=None):
    # Shadow effect
    shadow_offset = 4
    draw.rectangle([x+shadow_offset, y+shadow_offset, x+w+shadow_offset, y+h+shadow_offset], 
                   fill='#00000050')
    
    # Main card
    draw.rectangle([x+r, y, x+w-r, y+h], fill=fill, outline=outline, width=3)
    draw.rectangle([x, y+r, x+w, y+h-r], fill=fill, outline=outline, width=3)
    draw.ellipse([x, y, x+2*r, y+2*r], fill=fill, outline=outline, width=3)
    draw.ellipse([x+w-2*r, y, x+w, y+2*r], fill=fill, outline=outline, width=3)
    draw.ellipse([x, y+h-2*r, x+2*r, y+h], fill=fill, outline=outline, width=3)
    draw.ellipse([x+w-2*r, y+h-2*r, x+w, y+h], fill=fill, outline=outline, width=3)
    
    # Title
    draw.text((x+w//2, y+25), title, fill=outline, font=heading_font, anchor="mm")
    
    # Items
    if items:
        y_offset = y + 55
        for item in items:
            draw.text((x+15, y_offset), f"• {item}", fill=text_color, font=small_font, anchor="lm")
            y_offset += 25

# Workflow stages - horizontal flow
stage_y = 180

# Stage 1: Code & Commit
draw_card(50, stage_y, 250, 160, 12, bg_card, primary, "1. Developer",
          ["Write Node.js code", "Git commit & push", "Trigger GitHub Actions"])

# Stage 2: Build & Test
draw_card(380, stage_y, 280, 160, 12, bg_card, accent, "2. GitHub Actions CI/CD",
          ["Build Docker image", "Run automated tests", "Push image to ECR", "Update ECS task"])

# Stage 3: AWS Infrastructure
draw_card(740, stage_y, 250, 160, 12, bg_card, primary, "3. Terraform IaC",
          ["Provision VPC", "Setup ECR registry", "Configure ECS cluster", "Deploy ALB"])

# Stage 4: Deployment
draw_card(1070, stage_y, 250, 160, 12, bg_card, success, "4. Live Deployment",
          ["ECS Fargate runs app", "ALB routes traffic", "Auto-scaling enabled", "✓ Production ready"])

# AWS Services section
aws_y = 420
draw.text((700, aws_y), "AWS Infrastructure Components", fill=primary, font=heading_font, anchor="mm")

# AWS service boxes - 2 rows
services = [
    ("VPC", "Private Network\nIsolation", 180, 470),
    ("ECR", "Container\nRegistry", 420, 470),
    ("ECS Fargate", "Serverless\nContainers", 660, 470),
    ("ALB", "Application\nLoad Balancer", 900, 470),
]

for name, desc, x, y in services:
    # Service box
    draw.rectangle([x, y, x+200, y+120], fill='#1e293b', outline=accent, width=2)
    draw.text((x+100, y+35), name, fill=accent, font=heading_font, anchor="mm")
    draw.text((x+100, y+75), desc, fill=text_muted, font=small_font, anchor="mm")

# Enhanced arrow with gradient effect
def draw_workflow_arrow(x1, y1, x2, y2, color=primary, label=""):
    # Main line
    draw.line([(x1, y1), (x2, y2)], fill=color, width=4)
    
    # Arrowhead
    arrow_size = 15
    if x2 > x1:  # Right arrow
        draw.polygon([(x2, y2), (x2-arrow_size, y2-8), (x2-arrow_size, y2+8)], fill=color)
    
    # Label
    if label:
        mid_x, mid_y = (x1 + x2) // 2, (y1 + y2) // 2 - 15
        draw.text((mid_x, mid_y), label, fill=text_muted, font=small_font, anchor="mm")

# Workflow arrows with labels
draw_workflow_arrow(300, 260, 380, 260, primary, "Push")
draw_workflow_arrow(660, 260, 740, 260, accent, "Build")
draw_workflow_arrow(990, 260, 1070, 260, primary, "Deploy")

# Connection from workflow to AWS services
draw.line([(700, 340), (700, 420)], fill=accent, width=4)
draw.polygon([(700, 420), (695, 405), (705, 405)], fill=accent)

# Tech stack footer
footer_y = 850
tech_items = [
    "Node.js", "Express", "Docker", "Terraform", 
    "GitHub Actions", "AWS ECS", "AWS ECR", "AWS VPC", "AWS ALB"
]
tech_text = " • ".join(tech_items)
draw.text((700, footer_y), f"Tech Stack: {tech_text}", 
          fill=text_muted, font=small_font, anchor="mm")

# Border frame
draw.rectangle([10, 10, width-10, height-10], outline=primary, width=2)

# Save
output_path = os.path.join('public', 'projects', 'nodejs-cicd-pipeline.png')
os.makedirs(os.path.dirname(output_path), exist_ok=True)
img.save(output_path, quality=95)
print(f"✓ Enhanced CI/CD workflow diagram saved to: {output_path}")

