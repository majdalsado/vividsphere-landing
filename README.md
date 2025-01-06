# VividSphere Landing Pages

This repository contains the landing pages for VividSphere's tech consultancy and B2B Shipping app.

## Structure
- `index.html` - Main consultancy landing page
- `better-b2b-shipping.html` - B2B Shipping app landing page
- `assets/` - Images and other static files

## Deployment
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Under "Source", select "main" branch
4. Select "/ (root)" as the folder
5. Click Save

Your site will be published at `https://<username>.github.io/<repository-name>/`

## Local Development
To test locally, you can use any static file server. For example:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.