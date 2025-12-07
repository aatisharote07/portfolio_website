# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your information:

```env
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Getting a GitHub Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo`, `read:user`
4. Copy the token to your `.env.local`

## 3. Customize Your Information

Edit `src/config/site.ts` with your personal information:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all fields
}
```

## 4. Add Your Resume

Replace the placeholder resume file:

```bash
npm run update-resume
# Or manually copy your resume to: public/resume.pdf
```

## 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

## 6. Add Your Projects

You can add projects in two ways:

### Using the CLI tool:
```bash
npm run add-project
```

### Manually:
Create markdown files in `content/projects/` following the format in the sample project.

## 7. Deploy to Vercel

1. Push your code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Add environment variables in Vercel settings
5. Deploy!

## Next Steps

- Replace placeholder content in `content/about.md`
- Add your project images to `public/images/`
- Customize colors in `src/styles/globals.css`
- Update metadata in `src/app/layout.tsx`

For more details, see the full README.md
