# Movement Studios Landing

Movement Studios Landing is a frontend project inspired by a dance studio concept from the Figma Community and adapted into a polished Next.js website. The project focuses on responsive UI, visual storytelling, animation details, and a cleaner deployment workflow with Netlify.

Base design: [Moody Dance Studio Figma Community Template](https://www.figma.com/site/k0QnEnpTm9bneFM0b5gHRX/Moody-Dance-Studio--Community-?node-id=0-1&p=f&t=60ASKd1N13MXZzd9-0)

## 📚 Index

- [Goal](#-goal)
- [Current Stack](#-current-stack)
- [Development](#-development)
- [Build](#️-build)
- [Deployment](#-deployment)
- [Notes](#-notes)
- [AI-Assisted Development](#-ai-assisted-development)

## 🎯 Goal

This project is used to practice and refine:

- Responsive layout work with modern CSS and Tailwind utilities.
- Component-driven UI with Next.js App Router.
- Visual polish across navigation, hero sections, cards, footer, and error states.
- Production deployment flows using Netlify preview and production deploys.

## 🧰 Current Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Prettier

## 🚀 Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

## 🏗️ Build

Create a production build locally:

```bash
npm run build
```

## 🌐 Deployment

This project is intended to be deployed on Netlify.

Recommended Netlify settings:

- Base directory: leave empty
- Build command: `npm run build`
- Publish directory: `.next`

This project is not configured around Vercel as the primary deployment target.

## 📝 Notes

- The app uses the Next.js App Router.
- Netlify deploy previews are useful for validating changes before merging to production.
- Large hero images may still benefit from additional compression for the best production performance.

## 🤖 AI-Assisted Development

This project was developed with AI-assisted iteration as part of the workflow, especially for UI refinement, responsive behavior, documentation, and implementation support.
