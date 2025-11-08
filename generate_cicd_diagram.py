from PIL import Image, ImageDraw, ImageFont
import os

# Create image
width, height = 1200, 800
img = Image.new('RGB', (width, height), color='#1a1f2e')
draw = ImageDraw.Draw(img)

# Colors
bg_dark = '#1a1f2e'
primary = '#00bfff'
secondary = '#1e293b'
text_color = '#e2e8f0'
accent = '#0ea5e9'

# Draw title
try:
    title_font = ImageFont.truetype("arial.ttf", 32)
    text_font = ImageFont.truetype("arial.ttf", 16)
    small_font = ImageFont.truetype("arial.ttf", 14)
except:
    title_font = ImageFont.load_default()
    text_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# Title
draw.text((600, 30), "Full Automated CI/CD Pipeline", fill=primary, font=title_font, anchor="mm")
draw.text((600, 70), "Node.js Application on AWS", fill=text_color, font=text_font, anchor="mm")

# Draw boxes with labels
def draw_rounded_rect(x, y, w, h, r, fill, outline):
    draw.rectangle([x+r, y, x+w-r, y+h], fill=fill, outline=outline, width=2)
    draw.rectangle([x, y+r, x+w, y+h-r], fill=fill, outline=outline, width=2)
    draw.ellipse([x, y, x+2*r, y+2*r], fill=fill, outline=outline, width=2)
    draw.ellipse([x+w-2*r, y, x+w, y+2*r], fill=fill, outline=outline, width=2)
    draw.ellipse([x, y+h-2*r, x+2*r, y+h], fill=fill, outline=outline, width=2)
    draw.ellipse([x+w-2*r, y+h-2*r, x+w, y+h], fill=fill, outline=outline, width=2)

# Stage 1: Developer
draw_rounded_rect(50, 150, 200, 120, 15, secondary, primary)
draw.text((150, 180), "Developer", fill=primary, font=text_font, anchor="mm")
draw.text((150, 210), "Code Push", fill=text_color, font=small_font, anchor="mm")
draw.text((150, 230), "Git Commit", fill=text_color, font=small_font, anchor="mm")

# Stage 2: GitHub Actions
draw_rounded_rect(320, 150, 200, 120, 15, secondary, accent)
draw.text((420, 170), "GitHub Actions", fill=accent, font=text_font, anchor="mm")
draw.text((420, 195), "• Build Docker Image", fill=text_color, font=small_font, anchor="mm")
draw.text((420, 215), "• Run Tests", fill=text_color, font=small_font, anchor="mm")
draw.text((420, 235), "• Push to ECR", fill=text_color, font=small_font, anchor="mm")

# Stage 3: AWS Infrastructure
draw_rounded_rect(50, 350, 470, 380, 15, secondary, primary)
draw.text((285, 375), "AWS Infrastructure (Terraform IaC)", fill=primary, font=text_font, anchor="mm")

# ECR
draw_rounded_rect(80, 420, 180, 80, 10, '#0f172a', accent)
draw.text((170, 445), "AWS ECR", fill=accent, font=text_font, anchor="mm")
draw.text((170, 470), "Container Registry", fill=text_color, font=small_font, anchor="mm")

# VPC
draw_rounded_rect(310, 420, 180, 80, 10, '#0f172a', accent)
draw.text((400, 445), "VPC", fill=accent, font=text_font, anchor="mm")
draw.text((400, 470), "Private Network", fill=text_color, font=small_font, anchor="mm")

# ECS Fargate
draw_rounded_rect(80, 540, 180, 80, 10, '#0f172a', accent)
draw.text((170, 560), "ECS Fargate", fill=accent, font=text_font, anchor="mm")
draw.text((170, 585), "Serverless", fill=text_color, font=small_font, anchor="mm")
draw.text((170, 605), "Containers", fill=text_color, font=small_font, anchor="mm")

# ALB
draw_rounded_rect(310, 540, 180, 80, 10, '#0f172a', accent)
draw.text((400, 560), "ALB", fill=accent, font=text_font, anchor="mm")
draw.text((400, 585), "Load Balancer", fill=text_color, font=small_font, anchor="mm")

# Stage 4: Deployment
draw_rounded_rect(320, 660, 200, 80, 15, secondary, primary)
draw.text((420, 685), "Live Application", fill=primary, font=text_font, anchor="mm")
draw.text((420, 710), "✓ Auto-Deployed", fill='#22c55e', font=small_font, anchor="mm")

# Draw arrows
def draw_arrow(x1, y1, x2, y2, color=primary):
    draw.line([(x1, y1), (x2, y2)], fill=color, width=3)
    # Arrowhead
    if x2 > x1:
        draw.polygon([(x2, y2), (x2-10, y2-5), (x2-10, y2+5)], fill=color)
    elif y2 > y1:
        draw.polygon([(x2, y2), (x2-5, y2-10), (x2+5, y2-10)], fill=color)

# Arrows connecting stages
draw_arrow(250, 210, 320, 210)  # Developer to GitHub Actions
draw_arrow(420, 270, 420, 350)  # GitHub Actions to AWS
draw_arrow(420, 350, 170, 420)  # To ECR
draw_arrow(260, 460, 310, 460)  # ECR to VPC
draw_arrow(400, 500, 400, 540)  # VPC to ALB
draw_arrow(260, 580, 310, 580)  # Fargate to ALB
draw_arrow(420, 620, 420, 660)  # ALB to Deployment

# Tech stack labels at bottom
draw.text((600, 760), "Tech Stack: Node.js • Express • Docker • Terraform • GitHub Actions • AWS", 
          fill=text_color, font=small_font, anchor="mm")

# Save
output_path = os.path.join('public', 'projects', 'nodejs-cicd-pipeline.png')
os.makedirs(os.path.dirname(output_path), exist_ok=True)
img.save(output_path)
print(f"✓ Diagram saved to: {output_path}")
