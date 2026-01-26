# FlyQuest Landing Page

The navigation system you never got. A coming-soon landing page for FlyQuest—bridging the gap between higher education and professional integration for South African students and graduates.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Email:** Resend
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## Getting Started

### 1. Clone and Install

```bash
cd flyquest-landing
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Then add your Resend API key:

1. Go to [resend.com](https://resend.com) and create an account
2. Generate an API key from the dashboard
3. Add it to `.env.local`:

```
RESEND_API_KEY=re_your_api_key_here
```

### 3. Add Fonts

The site uses Instrument Sans as the body font. You'll need to download it:

1. Go to [Google Fonts - Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)
2. Download the font files
3. Convert to WOFF2 format if needed
4. Place in `public/fonts/`:
   - `InstrumentSans-Regular.woff2`
   - `InstrumentSans-Medium.woff2`
   - `InstrumentSans-SemiBold.woff2`

Alternatively, you can switch to a Google Font by updating `app/layout.tsx`.

### 4. Add Your Logo

Export your logo from Canva as SVG (preferred) or PNG with transparency. Place it in `public/` and update the header in `app/page.tsx`.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Configuration

### Resend Audience (Optional)

To track subscribers in a list:

1. Create an audience in Resend dashboard
2. Copy the audience ID
3. Add to `.env.local`: `RESEND_AUDIENCE_ID=your_audience_id`

### Custom Domain Email

Once you have a domain:

1. Verify it in Resend dashboard
2. Update `RESEND_FROM_EMAIL` in `.env.local`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
npm run build
```

### Other Platforms

The site is a standard Next.js app and can be deployed anywhere that supports Node.js.

## Project Structure

```
flyquest-landing/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts      # Email subscription endpoint
│   ├── globals.css           # Tailwind + custom styles
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Landing page component
├── public/
│   └── fonts/                # Local font files
├── .env.example              # Environment variables template
├── next.config.ts            # Next.js configuration
├── package.json
├── postcss.config.mjs        # PostCSS for Tailwind v4
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Customisation

### Colours

Update the CSS variables in `app/globals.css`:

```css
@theme {
  --color-flyquest-gold: #ffcf00;
  --color-flyquest-black: #000000;
  --color-flyquest-white: #ffffff;
}
```

### Content

All copy is in `app/page.tsx`. Key sections:
- Hero headline and tagline
- Problem statistics
- "What's Coming" features
- Footer links

### Links

Update your personal links in the footer:
- LinkedIn profile
- TEDx talk URL

## Production Checklist

- [ ] Resend API key configured
- [ ] Custom domain verified in Resend
- [ ] Logo added
- [ ] Fonts installed
- [ ] Footer links updated
- [ ] Environment variables set in deployment platform
- [ ] Analytics added (optional: Vercel Analytics, Plausible, etc.)

## Support

Built by TK for FlyQuest. Questions? Connect on [LinkedIn](https://www.linkedin.com/in/tkmatshaba/).

---

*"Education is free. Learning is priceless."*
