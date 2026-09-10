# GateMate — Premium Learning Platform Website

A modern, professional, and highly attractive static website inspired by [gatemate.co.in](https://gatemate.co.in).  
Built for **GitHub Pages** — fully responsive, dynamic, dark/light theme, zero backend required.

## Features

- **Stunning Hero** with live-class card, floating badges & animated gradients
- **Course Catalog** with filter tabs (Competitive Exams / Tech & AI / Free)
- **Feature Highlights** — Live classes, AI tracker, mock tests, doubt support
- **Teacher Grid** with specialty tags
- **Testimonials** & success stats
- **Contact Form** (front-end only — ready to connect to Formspree / EmailJS)
- **Dark / Light theme** toggle (persists in localStorage)
- **Mobile-first** responsive design + smooth animations
- **SEO-friendly** meta tags & semantic HTML

## Tech Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Inter + Outfit)
- Font Awesome 6 icons (CDN)
- No frameworks — super lightweight & fast

## How to Deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `gatemate-website` or `username.github.io`)
2. Upload **all files** from this folder (keep the folder structure)
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose branch `main` (or `master`) and folder `/ (root)`
6. Click **Save**
7. Your site will be live at:  
   `https://your-username.github.io/gatemate-website/`  
   (or `https://your-username.github.io/` if you used the special repo name)

### Alternative: GitHub CLI

```bash
git init
git add .
git commit -m "Initial commit - GateMate website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable Pages as described above.

## Folder Structure

```
gatemate-website/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactivity
├── assets/
│   └── images/         # (optional extra images)
└── README.md
```

## Customization Tips

- Change colors in `css/style.css` → `:root` variables
- Update contact phone/email in the Contact section
- Add real teacher photos by replacing the avatar icons
- Connect the contact form to Formspree or similar for real submissions
- Replace the Play Store link with your actual app link if different

## Credits

Designed as an enhanced, more attractive version of the GateMate learning platform concept.  
All rights to the original GateMate brand belong to GATEMATE LEARNING PRIVATE LIMITED.

---

Made with ❤️ for aspirants who never stop learning.
