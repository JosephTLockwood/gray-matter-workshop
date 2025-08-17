# Gray Matter Coding Workshop #1 Website

A responsive website built with Next.js and Tailwind CSS that converts the Gray Matter Coding Workshop #1 Canva presentation into an accessible markdown-based learning platform.

## 🎯 About

This website transforms the FRC programming workshop content into an interactive web experience, covering:

- **Introduction & Prerequisites** - Getting started with FRC programming
- **Hardware Setup** - CTRE motors, CANivore, and device configuration  
- **Project Setup** - Creating and organizing WPILib projects
- **Command Framework** - Understanding triggers, subsystems, and commands
- **Programming** - ARM and Flywheel mechanism implementation
- **Control Systems** - PID and Feedforward control theory
- **Tuning** - Real-world mechanism tuning with Phoenix Tuner X

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── introduction/       # Workshop introduction
│   ├── prerequisites/      # Required software & hardware
│   ├── hardware/          # Hardware setup guide
│   ├── project-setup/     # Project creation & organization
│   ├── command-framework/ # Command-based programming
│   ├── programming/       # ARM & Flywheel implementation
│   ├── control-systems/   # PID & Feedforward theory
│   └── tuning/           # Mechanism tuning guide
└── components/            # Reusable React components
    ├── Sidebar.tsx        # Collapsible navigation sidebar
    ├── PageTemplate.tsx   # Shared page layout  
    ├── CodeBlock.tsx      # IDE-style syntax highlighted code
    ├── GitHubPR.tsx       # Live GitHub pull request display
    ├── GitHubPage.tsx     # Live GitHub file display
    └── ImageBlock.tsx     # Optimized image display
```

## 🤖 GitHub Actions CI/CD

This project includes automated workflows for quality assurance and deployment:

### CI Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically:

- ✅ **Lints code** with ESLint for style consistency
- 🔍 **Type checks** with TypeScript for type safety  
- 🏗️ **Builds project** to ensure compilation success
- 📦 **Uploads artifacts** for deployment verification

### Workflow Triggers

- **Push to main/master** - Full CI pipeline + deployment readiness check
- **Pull Requests** - CI pipeline for code quality verification
- **Manual trigger** - Can be run manually from GitHub Actions tab

### Status Badges

Add these to your forked repository:

```markdown
![CI/CD Pipeline](https://github.com/yourusername/gray-matter-workshop/workflows/CI/CD%20Pipeline/badge.svg)
```

## 🌐 Deploy on Vercel

### Automatic Deployment (Recommended)

1. **Fork this repository** to your GitHub account
2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your forked repository
   - Deploy automatically

3. **Automatic Updates:**
   - Every push to `main` triggers a new deployment
   - Pull requests create preview deployments
   - GitHub Actions ensure code quality before deployment

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Environment Setup

No environment variables required for basic deployment.

## 📝 Content Management

The workshop content is organized into themed pages that can be easily extended:

- Each section has its own route under `/src/app/`
- Content is written in JSX with Tailwind styling
- Navigation is automatically generated from the route structure
- Links between sections provide a guided learning experience

## 🎨 Design Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Clean Typography** - Easy-to-read content with proper hierarchy
- **Interactive Navigation** - Smooth transitions between sections
- **Progress Tracking** - Clear next/previous navigation
- **Code-Friendly** - Optimized for technical content display

## 🔧 Customization

To add new sections:

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your content
3. Update the navigation in `src/components/Sidebar.tsx`
4. Link from previous/next pages as needed

## 📱 Mobile Optimization

The site includes:
- Responsive navigation menu
- Touch-friendly buttons and links
- Optimized font sizes for mobile reading
- Fast loading times

## 🤝 Contributing

This project was generated from Canva presentation content. To extend or modify:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Educational content based on Gray Matter Coding Workshop materials.
