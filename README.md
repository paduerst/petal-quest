# Petal Quest

The website for Petal Quest.

## Developing

To start a development server:

```bash
npm run dev

# or start the server and open the website in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the website:

```bash
npm run build
```

You can preview the production build with `npm run preview`. Then you can make it available on other devices using `cloudflared tunnel --url localhost:4173/` (assuming you have `cloudflared` installed).
