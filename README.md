# Tyler Rossitto - Cybersecurity Portfolio

An interactive cybersecurity-themed portfolio website showcasing Tyler's unique journey from chef to security professional, featuring an embedded Python/Pygame JezzBall game.

## 🚀 Quick Deploy to GitHub Pages

### 1. Upload to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Deployment starts automatically

### 3. Access Your Site
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## ✨ Features

- **Cybersecurity Theme**: Terminal-inspired design with animations
- **Embedded Python Game**: Playable DragonBall JezzBall clone
- **Responsive Design**: Works on all devices
- **Static Site**: No server required, fast loading

## 🛠️ Local Development

```bash
npm install
npm run dev
```

## 🎮 Game Access

Your DragonBall JezzBall game: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/jezzball/`

## 📧 Contact Configuration

Update the email in `src/components/contact-form.tsx` line 27:
```javascript
const mailtoLink = `mailto:YOUR_EMAIL@domain.com?subject=${subject}&body=${body}`;
```

Built with React, TypeScript, Tailwind CSS, and Vite.