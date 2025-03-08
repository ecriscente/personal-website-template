# Next.js Personal Website Template with JSON Resume

A modern, customizable personal website template built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This template originated from my personal website project, which was developed in collaboration with AI assistance. As someone who benefited from AI pair programming, I wanted to give back to the community by sharing this template that combines best practices, modern technologies, and an excellent developer experience.

This template uses the JSON Resume standard for easy resume management and includes features like theme customization, analytics integration, and a "Buy Me a Coffee" button. If you're a developer looking to quickly set up a professional online presence this template provides a solid foundation.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📝 JSON Resume standard support
- 🎨 Customizable theming
- 📱 Fully responsive design
- 🔍 SEO optimized
- 📊 Optional analytics integration (Google Analytics and Plausible)
- ☕ Optional "Buy Me a Coffee" button
- 📅 Optional Google Calendar scheduling integration
- 🌙 Modern UI with smooth animations
- 🛠️ TypeScript for type safety
- 🎯 Easy deployment to Vercel

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/personal-website-template.git
cd personal-website-template
```

2. Install dependencies:
```bash
npm install
```

3. Update the configuration:
   - Edit `src/config/site.ts` with your information
   - Update `resume.json` with your resume data (follows JSON Resume schema)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see your website.

## Customization

### Site Configuration

The site configuration is located in `src/config/site.ts`. You can customize:

- Site metadata (title, description, etc.)
- Social media links
- Theme colors
- Navigation items
- Analytics settings

### Resume Data

The resume data follows the [JSON Resume](https://jsonresume.org) schema. Edit `resume.json` to update your resume information. You can also use the JSON Resume CLI to validate your resume:

```bash
npm install -g resume-cli
resume validate
```

To export your resume as a PDF:
```bash
npm run export-pdf
```

### Theming

The theme configuration is handled through the site config and Tailwind CSS. To customize the theme:

1. Update colors in `src/config/site.ts`
2. Modify `tailwind.config.ts` for advanced customization
3. Edit component styles in their respective files

### Analytics

The template supports both Google Analytics and Plausible Analytics. To enable:

1. Update `src/config/site.ts` with your analytics IDs:
```typescript
analytics: {
  googleAnalyticsId: 'G-XXXXXXXXXX',
  plausibleDomain: 'yourdomain.com'
}
```

2. Analytics will be automatically injected into your pages.

## External Services Integration

### Google Calendar Scheduling

This template includes integration with Google Calendar's appointment scheduling feature, which is available through Google One or Google Workspace plans.

To set up your scheduling page:

1. Access your [Google Calendar](https://calendar.google.com)
2. Click the "+" button next to "Other calendars"
3. Select "Create new appointment schedule"
4. Configure your availability and appointment types
5. Click the "Share" button and select "Copy embed code"
6. From the embed code, copy only the `src` URL
7. Create or update your `.env.local` file:

```bash
NEXT_PUBLIC_CALENDAR_URL="your_google_calendar_embed_url"
```

Note: Appointment scheduling requires either:
- Google Workspace Individual subscription ($7.99/month)
- Google Workspace Business Standard or higher
- Google One Premium Plan (2TB or higher)

### Stripe Buy Button Integration

The "Buy Me a Coffee" button uses Stripe's Buy Button feature. To set up your own:

1. Create a [Stripe](https://stripe.com) account
2. Go to the [Payment Links](https://dashboard.stripe.com/payment-links) section
3. Click "Create payment link"
4. Configure your product/price
5. Click "Get Buy Button"
6. Customize the button appearance
7. Click "Create Buy Button"
8. Add the provided configuration to your `.env.local`:

```bash
NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID="your_buy_button_id"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_publishable_key"
```

Requirements:
- Stripe account
- Valid payment method for verification

Pricing:
- Stripe charges a small fee per successful transaction
- No monthly fees for basic accounts

### Alternative Options

If you don't have access to these services:

#### Calendar Alternatives:
- [Calendly](https://calendly.com) (Free tier available)
- [Cal.com](https://cal.com) (Open source alternative)
- [YouCanBook.me](https://youcanbook.me)

#### Payment Button Alternatives:
- [Ko-fi](https://ko-fi.com)
- [Buy Me a Coffee](https://www.buymeacoffee.com)
- [PayPal Buttons](https://www.paypal.com/buttons)

To use alternatives, modify the relevant components in `src/components/` to integrate your preferred service.

## Deployment

The easiest way to deploy your website is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

If you have any questions or suggestions, feel free to reach out to me at [me@erion.dev](mailto:me@erion.dev).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [JSON Resume](https://jsonresume.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
