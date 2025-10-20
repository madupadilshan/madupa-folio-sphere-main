# CI/CD Project Screenshot Instructions

## 📸 CI/CD Pipeline Project එකට Image එකක් Add කරන්න

### Option 1: Screenshot එකක් ගන්න

ඔබේ CI/CD project එකෙන් screenshot එකක් capture කරන්න:

**Recommended Screenshots:**
1. **Jenkins Dashboard** - Pipeline build history
2. **AWS EC2 Console** - Running instance with Docker
3. **GitHub Webhook** - Configured webhook
4. **Architecture Diagram** - Draw.io හෝ Lucidchart use කරලා workflow diagram එකක්

**Best Screenshot:**
- Jenkins Pipeline view with successful builds (green checkmarks)
- Shows: Build history, stages (Pull → Build → Deploy)

---

### Option 2: Create Architecture Diagram

ඔබ දුන්න workflow එක use කරලා diagram එකක් create කරන්න:

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│  Developer  │──────▶│   GitHub    │──────▶│   Jenkins   │
│  (git push) │       │  (Webhook)  │       │   (Build)   │
└─────────────┘       └─────────────┘       └─────────────┘
                                                    │
                                                    ▼
                                            ┌─────────────┐
                                            │   Docker    │
                                            │   (Image)   │
                                            └─────────────┘
                                                    │
                                                    ▼
                                            ┌─────────────┐
                                            │   AWS EC2   │
                                            │  (Deploy)   │
                                            └─────────────┘
                                                    │
                                                    ▼
                                            ┌─────────────┐
                                            │  End User   │
                                            │  (Access)   │
                                            └─────────────┘
```

**Tools to Create Diagram:**
- https://app.diagrams.net/ (Draw.io)
- https://www.lucidchart.com/
- https://excalidraw.com/

---

### Option 3: Use Provided AWS Screenshot

ඔබ දුන්න AWS EC2 screenshot එක use කරන්න පුළුවන්:
- Instance summary page
- Shows: Jenkins Server, Running state, Public IP

---

## 📁 File Placement

Screenshot එක ගත්තාම:

1. **File name**: `cicd-pipeline.jpg` හෝ `cicd-pipeline.png`
2. **Location**: `public/projects/` folder එකට copy කරන්න

**Full path:**
```
c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main\public\projects\cicd-pipeline.jpg
```

---

## 🎨 Screenshot Tips

**Good Screenshot Includes:**
- ✅ Jenkins dashboard with successful builds
- ✅ Pipeline stages visible
- ✅ Clear, high resolution (1920x1080 or 1280x720)
- ✅ Professional looking (crop unnecessary parts)

**Avoid:**
- ❌ Blurry or low-resolution images
- ❌ Personal/sensitive information visible
- ❌ Error messages or failed builds (unless showing debugging)

---

## 🚀 Quick Steps

### If you have Jenkins running:

1. Open Jenkins in browser
2. Navigate to your CI/CD pipeline
3. Take screenshot (Windows: `Win + Shift + S`)
4. Save as `cicd-pipeline.jpg`
5. Copy to `public/projects/` folder

### If Jenkins is stopped:

**Option A:** Take AWS EC2 Console screenshot showing:
- Instance details
- Docker containers running
- Security groups configured

**Option B:** Create architecture diagram using Draw.io

---

## 📋 Current Project Code

Project already added to `Projects.tsx`:
```tsx
{
  category: "DevOps/Cloud",
  title: "Automated CI/CD Pipeline on AWS",
  description: "Fully automated CI/CD pipeline with Jenkins, Docker, and AWS EC2...",
  tags: ["AWS", "Jenkins", "Docker", "CI/CD"],
  liveUrl: "", // No live demo (correctly configured)
  githubUrl: "https://github.com/madupadilshan/cicd-project",
  image: getAssetPath("/projects/cicd-pipeline.jpg"),
}
```

---

## ✅ After Adding Image

1. Copy image to `public/projects/cicd-pipeline.jpg`
2. Commit changes:
```cmd
cd "c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main"
git add .
git commit -m "Add CI/CD Pipeline project with screenshot"
git push
```

3. Wait 2-3 minutes for deployment
4. Check https://madupadilshan.live

---

## 🆘 Need Help?

**මට screenshot එක capture කරන්න අමාරුයි:**
- AWS EC2 screenshot එක use කරන්න
- හෝ architecture diagram එකක් create කරන්න
- හෝ මම temporary placeholder image එකක් create කරන්න පුළුවන්

**කියන්න අවශ්‍ය නම්!** 😊
