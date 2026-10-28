# Tom Craven Photography

A static portfolio for Cloudflare Workers with four galleries: Nature, City, Nightlife and Weddings. Full-size photos are stored separately in Cloudflare R2. The gallery grid asks Cloudflare for a smaller preview; selecting a photo loads the original.

## Photo folders and filenames

Upload JPEGs to the matching folder in the R2 bucket connected to `photos.tomcraven.uk`. Keep the exact filenames so the pages find them automatically.

| Gallery | R2 folder | File names |
| --- | --- | --- |
| Nature | `images/nature/` | `nature-01.jpg` to `nature-09.jpg` |
| City | `images/city/` | `city-01.jpg` to `city-09.jpg` |
| Nightlife | `images/nightlife/` | `nightlife-01.jpg` to `nightlife-09.jpg` |
| Weddings | `images/weddings/` | `weddings-01.jpg` to `weddings-09.jpg` |

For example, upload a file named `nature-01.jpg` into `images/nature/`. It appears in that gallery and as the featured nature photo on the home page. Replace a photo by uploading a new file with the same name. The website code and photos are managed separately, so adding photos does not require editing HTML or committing large images to GitHub.

## Preparing photos

Upload a high-quality JPEG as the original. Cloudflare creates a 1,200-pixel-wide grid preview automatically. When a visitor opens a photo, the browser loads the original from R2. Keep filenames lowercase and use hyphens exactly as shown above.

The R2 bucket must be connected to the `photos.tomcraven.uk` custom domain, and Cloudflare Image Transformations must be enabled for the domain. Only portfolio photographs should be placed in that publicly served bucket: files in it can be viewed by anyone with the URL.

## Galleries

Each gallery has nine numbered spaces. The pages live in `galleries/`; the shared layout and photo-viewer behavior are in `assets/`. To add more spaces later, add another numbered photo tile to the matching gallery page and upload its image to the corresponding R2 folder.
