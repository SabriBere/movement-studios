# Movement Studios Landing

Movement Studios is a responsive dance studio landing page built with Next.js. Starting from a Figma Community reference, I adapted the interface into a component-based production site with responsive layouts, route-level error handling, accessible navigation, and a Netlify deployment workflow.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Movement%20Studios-00d7d7?style=for-the-badge&logo=netlify&logoColor=white)](https://movementstudios.netlify.app/)

## 📚 Index

- [Implementation](#-implementation)
- [Stack](#-stack)
- [Development](#-development)
- [Build](#️-build)
- [Deployment](#-deployment)
- [Credits and license](#-credits-and-license)

## ✨ Implementation

Key implementation decisions include:

- Component-driven UI with Next.js App Router and TypeScript.
- Responsive layouts tailored across mobile, tablet, and desktop breakpoints.
- Reusable navigation, hero, card, footer, and booking components.
- Route-level not-found state and semantic, descriptive image alternatives.
- Production builds and deploy previews through Netlify.

## 🧰 Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Prettier
- pnpm

## 🚀 Development

Install dependencies and start the local server:

```bash
pnpm install
pnpm dev
```

## 🏗️ Build

Create a production build locally:

```bash
pnpm build
```

## 🌐 Deployment

This project is intended to be deployed on Netlify.

Live site: [https://movementstudios.netlify.app/](https://movementstudios.netlify.app/)

Recommended Netlify settings:

- Base directory: leave empty
- Build command: `pnpm build`
- Publish directory: `.next`

This project is not configured around Vercel as the primary deployment target.

## 📜 Credits and license

- The visual reference is the [Moody Dance Studio Figma Community Template](https://www.figma.com/site/k0QnEnpTm9bneFM0b5gHRX/Moody-Dance-Studio--Community-?node-id=0-1&p=f&t=60ASKd1N13MXZzd9-0). Third-party designs and assets retain their respective licenses and attribution requirements.
- The source code in this repository is available under the [MIT License](LICENSE).
