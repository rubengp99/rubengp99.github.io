# Ruben D. Garcia - Portfolio

Professional portfolio website showcasing my experience as a Senior Software Engineer.

## About

This portfolio highlights my 5+ years of experience with Go, AWS, and distributed systems. It features my work at Cadana, Esusu, and Somos Sistemas, along with my technical skills and key projects in fintech.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/rubengp99/rubengp99.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages (under Code and automation)
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to main

3. **Access Your Site**
   - Your site will be available at: `https://rubengp99.github.io`
   - The deployment typically takes 1-2 minutes

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Contact

- Email: rubendariogp99@gmail.com
- LinkedIn: [linkedin.com/in/rubengp99](https://www.linkedin.com/in/rubengp99/)
- GitHub: [github.com/rubengp99](https://github.com/rubengp99)

## License

MIT
