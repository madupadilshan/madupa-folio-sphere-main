"""
Generate CI/CD Pipeline PNG Image
Creates a professional image for the Automated CI/CD Pipeline project
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Image dimensions
WIDTH = 1200
HEIGHT = 800

# Color palette
BG_DARK_BLUE = (30, 58, 138)
BG_MID_BLUE = (30, 64, 175)
BG_LIGHT_BLUE = (37, 99, 235)
CARD_BG = (255, 255, 255, 25)
CARD_BORDER = (96, 165, 250)
WHITE = (255, 255, 255)
LIGHT_BLUE = (147, 197, 253)
GREEN = (34, 197, 94)
BLUE = (59, 130, 246)
PURPLE = (139, 92, 246)
ORANGE = (245, 158, 11)
RED = (211, 56, 51)
DOCKER_BLUE = (36, 150, 237)
AWS_ORANGE = (255, 153, 0)
GITHUB_DARK = (36, 41, 47)

def create_gradient_background(draw, width, height):
    """Create a gradient background"""
    for y in range(height):
        # Calculate color for this row
        ratio = y / height
        r = int(BG_DARK_BLUE[0] + (BG_LIGHT_BLUE[0] - BG_DARK_BLUE[0]) * ratio)
        g = int(BG_DARK_BLUE[1] + (BG_LIGHT_BLUE[1] - BG_DARK_BLUE[1]) * ratio)
        b = int(BG_DARK_BLUE[2] + (BG_LIGHT_BLUE[2] - BG_DARK_BLUE[2]) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

def draw_rounded_rectangle(draw, xy, radius, fill, outline=None, width=1):
    """Draw a rounded rectangle"""
    x1, y1, x2, y2 = xy
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline, width=width)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline, width=width)
    draw.pieslice([x1, y1, x1 + radius * 2, y1 + radius * 2], 180, 270, fill=fill, outline=outline)
    draw.pieslice([x2 - radius * 2, y1, x2, y1 + radius * 2], 270, 360, fill=fill, outline=outline)
    draw.pieslice([x1, y2 - radius * 2, x1 + radius * 2, y2], 90, 180, fill=fill, outline=outline)
    draw.pieslice([x2 - radius * 2, y2 - radius * 2, x2, y2], 0, 90, fill=fill, outline=outline)

def main():
    # Create image
    img = Image.new('RGB', (WIDTH, HEIGHT), BG_DARK_BLUE)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Create gradient background
    create_gradient_background(draw, WIDTH, HEIGHT)
    
    # Draw grid pattern
    grid_spacing = 40
    grid_color = (255, 255, 255, 20)
    for x in range(0, WIDTH, grid_spacing):
        draw.line([(x, 0), (x, HEIGHT)], fill=grid_color, width=1)
    for y in range(0, HEIGHT, grid_spacing):
        draw.line([(0, y), (WIDTH, y)], fill=grid_color, width=1)
    
    # Try to load fonts, fall back to default if not available
    try:
        title_font = ImageFont.truetype("arial.ttf", 48)
        subtitle_font = ImageFont.truetype("arial.ttf", 24)
        heading_font = ImageFont.truetype("arialbd.ttf", 22)
        text_font = ImageFont.truetype("arial.ttf", 16)
        small_font = ImageFont.truetype("arial.ttf", 14)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        heading_font = ImageFont.load_default()
        text_font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Title
    title = "Automated CI/CD Pipeline"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text((WIDTH // 2 - title_width // 2, 40), title, font=title_font, fill=WHITE)
    
    # Subtitle
    subtitle = "AWS • Jenkins • Docker • GitHub"
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    draw.text((WIDTH // 2 - subtitle_width // 2, 95), subtitle, font=subtitle_font, fill=LIGHT_BLUE)
    
    # GitHub Box
    draw_rounded_rectangle(draw, (50, 180, 250, 320), 12, CARD_BG, CARD_BORDER, 2)
    draw.ellipse([120, 200, 180, 260], fill=GITHUB_DARK)
    draw.text((150, 275), "GitHub", font=heading_font, fill=WHITE, anchor="mm")
    draw.text((150, 300), "Code Repository", font=small_font, fill=LIGHT_BLUE, anchor="mm")
    
    # Arrow 1
    draw.line([(250, 250), (340, 250)], fill=GREEN, width=4)
    draw.polygon([(340, 250), (330, 245), (330, 255)], fill=GREEN)
    draw.text((295, 235), "Webhook", font=text_font, fill=GREEN, anchor="mm")
    
    # Jenkins Box
    draw_rounded_rectangle(draw, (340, 180, 540, 320), 12, CARD_BG, CARD_BORDER, 2)
    draw.ellipse([410, 200, 470, 260], fill=RED)
    draw.ellipse([430, 215, 450, 235], fill=WHITE)
    draw.rectangle([425, 235, 455, 255], fill=WHITE)
    draw.text((440, 275), "Jenkins", font=heading_font, fill=WHITE, anchor="mm")
    draw.text((440, 300), "CI/CD Server", font=small_font, fill=LIGHT_BLUE, anchor="mm")
    
    # Arrow 2
    draw.line([(540, 250), (630, 250)], fill=BLUE, width=4)
    draw.polygon([(630, 250), (620, 245), (620, 255)], fill=BLUE)
    draw.text((585, 235), "Build", font=text_font, fill=BLUE, anchor="mm")
    
    # Docker Box
    draw_rounded_rectangle(draw, (630, 180, 830, 320), 12, CARD_BG, CARD_BORDER, 2)
    draw.ellipse([700, 200, 760, 260], fill=DOCKER_BLUE)
    for i in range(3):
        y = 218 + i * 15
        draw.rectangle([710, y, 750, y + 8], fill=WHITE)
    draw.text((730, 275), "Docker", font=heading_font, fill=WHITE, anchor="mm")
    draw.text((730, 300), "Containerization", font=small_font, fill=LIGHT_BLUE, anchor="mm")
    
    # Arrow 3
    draw.line([(830, 250), (920, 250)], fill=ORANGE, width=4)
    draw.polygon([(920, 250), (910, 245), (910, 255)], fill=ORANGE)
    draw.text((875, 235), "Deploy", font=text_font, fill=ORANGE, anchor="mm")
    
    # AWS EC2 Box
    draw_rounded_rectangle(draw, (920, 180, 1150, 320), 12, CARD_BG, CARD_BORDER, 2)
    draw.rectangle([1010, 205, 1060, 255], fill=AWS_ORANGE)
    draw.polygon([(1020, 220), (1035, 212), (1050, 220), (1050, 238), (1035, 246), (1020, 238)], fill=(35, 47, 62))
    draw.text((1035, 275), "AWS EC2", font=heading_font, fill=WHITE, anchor="mm")
    draw.text((1035, 300), "Cloud Deployment", font=small_font, fill=LIGHT_BLUE, anchor="mm")
    
    # Process Flow Stages
    draw_rounded_rectangle(draw, (150, 400, 1050, 720), 16, (255, 255, 255, 15), CARD_BORDER, 2)
    
    # Stage circles and labels
    stages = [
        (250, 480, "1", "Git Push", "Developer commits", GREEN),
        (450, 480, "2", "Webhook Trigger", "Auto-trigger build", BLUE),
        (650, 480, "3", "Build & Test", "Jenkins pipeline", PURPLE),
        (850, 480, "4", "Deploy", "AWS EC2 container", ORANGE)
    ]
    
    for i, (x, y, num, title, desc, color) in enumerate(stages):
        # Outer glow circle
        draw.ellipse([x-42, y-42, x+42, y+42], fill=(*color, 50))
        # Main circle
        draw.ellipse([x-35, y-35, x+35, y+35], fill=color)
        # Number
        draw.text((x, y+5), num, font=title_font, fill=WHITE, anchor="mm")
        # Title
        draw.text((x, y+70), title, font=text_font, fill=WHITE, anchor="mm")
        # Description
        draw.text((x, y+90), desc, font=small_font, fill=LIGHT_BLUE, anchor="mm")
        
        # Connecting lines
        if i < len(stages) - 1:
            next_x = stages[i+1][0]
            draw.line([(x+35, y), (next_x-35, y)], fill=(255, 255, 255, 80), width=3)
    
    # Monitoring section
    draw_rounded_rectangle(draw, (200, 620, 1000, 690), 8, (16, 185, 129, 25), GREEN, 2)
    draw.ellipse([235, 640, 265, 670], fill=GREEN)
    draw.line([(240, 655), (245, 660), (260, 645)], fill=WHITE, width=3)
    draw.text((280, 655), "Continuous Monitoring & Automated Rollback", font=text_font, fill=GREEN, anchor="lm")
    
    # Footer
    draw.text((600, 755), "Fully automated pipeline: Code → Build → Test → Deploy", 
              font=small_font, fill=LIGHT_BLUE, anchor="mm")
    
    # Save the image
    output_path = os.path.join(os.path.dirname(__file__), "public", "projects", "cicd-pipeline.png")
    img.save(output_path, "PNG", quality=95)
    print(f"✓ Image created successfully: {output_path}")
    print(f"  Size: {WIDTH}x{HEIGHT}px")
    print(f"  Format: PNG")

if __name__ == "__main__":
    main()
