# Website for Sophia Dignam

🎻 Viola and violin session musician.

🛜 Live at http://www.sophiadignam.co.uk

## Running the project locally

*Drop me a message for the environment variables* 👌

1. Clone the repo
2. Run `npm install`
3. Create an `.env.local` file, add the environment variables
4. Run `npm run dev` and it should load the project

## Hosting & Deployment

Hosted on Vercel, they make deployment mega easy. Any pushes to `main` branch trigger a new production build.

Pushes to any other branch will tigger a preview build, and a private URL (requires Vercel account) will be commented on the PR. 

## CMS

For the CMS we're using DatoCMS. It has a friendly interface for adding content, is free and doesn't require a second project to maintain.

Follow this guide on data fetching:
✅ https://www.datocms.com/docs/next-js

Data fetching is done on the server via HTTP. 

## Domain & Email

The domain is registered with Cloudflare.

Email routing with `contact@sophiadignam.co.uk` protects a personal email address. Postmark can be configured for SMTP. 

Details on the closed issue: https://github.com/tom-ai/session-musician-sd/issues/7

## CSS, UI and Color

Styling is done with Tailwind CSS and the NextUI library (https://github.com/nextui-org/nextui)

Could probably revert to vanilla UI components in the future, but the input elements are really nice (although a bit broken in some places!) 

Colors and such are being injected to a custom NextUI theme via the NextUI config. This theme extends the out-of-the-box dark theme.

We're using the Harmony Color Palette by Evil Martians (https://github.com/evilmartians/harmony) as a replacement for NextUI/Tailwind.

Follow the steps here to change colors: https://github.com/tom-ai/session-musician-sd/issues/22

## Contact Form

Form uses the free https://formspree.io. 

___

Best of all, the entire thing is running for free!
