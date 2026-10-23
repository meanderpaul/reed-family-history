# Reed Family History

A working record of the Reed family, from Thomas Read of Chelmsford (c. 1656) to the present day. The site keeps what is proven apart from what is still a lead: every person and claim is marked **documented**, **research line / open lead**, or **disputed**.

## Running it

```sh
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
```

Pushing to `main` builds and deploys the site to GitHub Pages (`.github/workflows/deploy.yml`). In the repository settings, **Pages → Source** must be set to **GitHub Actions**.

## Where things live

Almost every edit is a content edit in `src/data/`:

| File | What it holds |
| --- | --- |
| `src/data/people.jsx` | Everyone in the line and the kin beside it: dates, status, register summary, biography, spouse note, service record |
| `src/data/research.jsx` | Open questions, disputed claims, settled links, the evidence hunt, and the unrelated Stoddard Reeds |
| `src/data/documents.jsx` | Every document image, defined once, with its caption and the people it concerns |
| `src/data/sources.jsx` | The bibliography on the Documents page |

Document images go in `public/assets/`. Pages are in `src/pages/`, shared pieces in `src/components/`, and all styling in `src/styles.css`.

### Common edits

- **Change someone's status**: set `status` in `people.jsx` to `documented`, `research`, `open` or `disputed`. The chip, lineage line and home-page timeline all follow.
- **Add a document**: drop the image in `public/assets/`, add an entry to `documents.jsx` with the `people` it concerns. It then shows on the Documents page and on each of those people's pages.
- **Open or close a research question**: add or move an entry in `research.jsx`. Its `people` list puts it on the matching person pages automatically.
- **Link to a person or section in text**: `<P id="john-reed">John Reed</P>` or `<To page="research" section="reeds-pond">…</To>`.

Old links from the single-page version (such as `#documents` or `#elnathan-read`) are redirected to their new pages by `src/legacyLinks.js`.
