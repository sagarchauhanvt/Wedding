# Aakash weds Nivedita — wedding invitation

Two invitations sharing one set of images.

| File | Who it's for | Live URL after deploy |
|---|---|---|
| `index.html` | Landing page, lets guests pick a side | `/` |
| `groom.html` | Groom's side | `/groom` |
| `bride.html` | Bride's side | `/bride` |
| `assets/` | Background artwork used by all pages | — |

## Deploying with Vercel

1. Create a new GitHub repo and upload every file in this folder, keeping `assets/` as a folder.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick the repo.
3. Framework preset: **Other**. Leave build command and output directory blank. Click **Deploy**.
4. You get a URL like `https://aakash-nivedita.vercel.app`. Share `/groom` and `/bride`.

Every push to GitHub redeploys automatically.

## Editing later

Everything is plain HTML — open the file, use Find, change the text, commit.

Things you may want to change:
- **RSVP WhatsApp number** — near the bottom of each file, `const WHATSAPP_NUMBER`. Country code first, no `+`.
- **RSVP deadline** — search for `RSVP date` in each file.
- **Countdown target** — search for `const target`.
- **Contact numbers** — search for `tel:+91`.

## Link previews

`og:image` currently uses a relative path. Once you have the real domain, replace it in all
three files with the full URL, e.g. `https://your-site.vercel.app/assets/hero.jpg`, so
WhatsApp and iMessage show the artwork in the preview card.
