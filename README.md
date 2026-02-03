# Personal Portfolio Website

A modern, responsive, and easily maintainable portfolio website built with Next.js 14, TypeScript, and TailwindCSS. Features GitHub integration, markdown-based content management, and automated deployment to Vercel.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **GitHub Integration**: Automatically fetches and displays your GitHub projects
- **Easy Content Management**: Markdown-based content system
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Optimized images, code splitting, caching

- **Analytics Ready**: Built-in support for Vercel Analytics

## 📋 Prerequisites

- Node.js 18.17 or later
- GitHub account (for repository integration)
- Vercel account (for deployment)

## 🛠️ Installation

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# GitHub Integration (Required)
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id



EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
```

#### Getting a GitHub Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `public_repo`, `read:user`
4. Copy the token to your `.env.local`

### 3. Configure Your Information

Edit the configuration file at `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  leetcode: "https://leetcode.com/yourprofile",
  // Add other social links as needed
}
```

## 📂 Project Structure

```
portfolio-website/
├── content/              # Markdown content files
│   ├── projects/        # Manual project entries
│   ├── experience/      # Work experience
│   ├── skills/          # Skills data
│   └── about.md         # About page content
├── public/              # Static assets
│   ├── images/          # Images
│   └── resume.pdf       # Your resume file
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── about/       # About page
│   │   ├── projects/    # Projects pages
│   │   ├── experience/  # Experience page
│   │   └── contact/     # Contact page
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── scripts/             # Helper scripts
│   ├── add-project.js   # Add new project
│   └── update-resume.js 
└── package.json
```

## 🎯 Quick Start Guide

### Running Locally

```bash
# Start development server
npm run dev
# or
yarn dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build the application
npm run build

# Run production build locally
npm run start
```

## 📝 Content Management

### Adding a New Project

#### Method 1: Using the Script (Recommended)

```bash
npm run add-project
```

Follow the prompts to enter:
- Project title
- Description

- GitHub URL (optional)
- Live demo URL (optional)
- Image URL (optional)

#### Method 2: Manual Creation

Create a new markdown file in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description of your project"

featured: true
image: "/images/project-screenshot.png"
tags: ["React", "TypeScript", "Node.js"]
github: "https://github.com/username/repo"
demo: "https://project-demo.com"
---



## Features

- Feature 1
- Feature 2


## Technologies Used

- React 18
- TypeScript
- TailwindCSS
```

### Adding Work Experience

Create a markdown file in `content/experience/`:

```markdown
---
title: "Software Engineer"
company: "Tech Company"
location: "San Francisco, CA"
startDate: "2022-01-01"
---

- Developed and maintained React applications
- Collaborated with cross-functional teams
- Improved application performance by 40%
```

### Updating Skills

Edit `content/skills.json`:

```json
{
  "categories": [
    {
      "name": "Frontend",
      "skills": [
        { "name": "React", "level": 90 },
   
        { "name": "Next.js", "level": 80 }
      ]
    },
    {
      "name": "Backend",
      "skills": [
        { "name": "Node.js", "level": 85 },
        { "name": "Python", "level": 75 }
      ]
    }
  ]
}
```

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure environment variables:
   - Add all variables from `.env.local`
   - Click "Deploy"

### Manual Deployment

```bash
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Environment Variables in Vercel

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the following variables:

| Variable | Value | Required |
|----------|-------|----------|
| `GITHUB_TOKEN` | Your GitHub personal access token | ✅ |
| `GITHUB_USERNAME` | Your GitHub username | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Your production URL | ✅ |
| `EMAIL_SERVER_HOST` | SMTP server host | ❌ 
| `EMAIL_FROM` | Sender email address | ❌ |

| `EMAIL_SERVER_PASSWORD` | SMTP password | ❌ |

## 🎨 Customization

### Changing Colors

Edit `src/styles/globals.css` to modify the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* Modify these values */
}
```

### Modifying Fonts

Edit `src/app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
})
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to the appropriate page
3. Update navigation if needed

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```
## 🔧 Troubleshooting

### Common Issues

**GitHub projects not showing:**
- Check if `GITHUB_TOKEN` is set correctly
- Verify token has required permissions
- Check console for API errors

**Build fails on Vercel:**
- Ensure all environment variables are set
- Check build logs for specific errors
- Verify Node.js version compatibility

**Images not loading:**
- Check image paths are correct
- Ensure images are in `public` directory
- Verify Next.js image domains configuration

**Contact form not working:**
- Verify email server credentials
- Check spam folder
- Test with different email providers

## 📦 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run add-project` | Add new project interactively |
| `npm run update-resume` | Update resume file |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors


---

Built with ❤️ using Next.js and TypeScript
