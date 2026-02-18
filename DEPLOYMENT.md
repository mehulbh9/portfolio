# Deployment Guide for mehulbhardwaj.ca

This guide will help you deploy your portfolio to your custom domain `mehulbhardwaj.ca`.

**Domain Registrar**: GoDaddy ✅

## Quick Start for GoDaddy Users

1. **Deploy to Vercel** (easiest option):
   ```bash
   npm install -g vercel
   cd portfolio
   vercel
   ```

2. **Add domain in Vercel Dashboard**:
   - Go to project → Settings → Domains
   - Add `mehulbhardwaj.ca` and `www.mehulbhardwaj.ca`

3. **Update DNS in GoDaddy**:
   - Log in to GoDaddy → My Products → DNS
   - Edit A record for `@`: Change value to Vercel's IP (shown in Vercel dashboard)
   - Edit CNAME for `www`: Change value to `cname.vercel-dns.com` (or what Vercel shows)

4. **Wait 1-2 hours** for DNS to propagate

See detailed GoDaddy instructions below ↓

## Option 1: Deploy with Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your React portfolio.

### Steps:

1. **Install Vercel CLI** (optional, you can also use the web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   cd portfolio
   vercel
   ```
   - Follow the prompts to link your project
   - Or visit [vercel.com](https://vercel.com) and import your GitHub repository

3. **Configure Custom Domain**:
   - Go to your project settings in Vercel dashboard
   - Navigate to "Domains" section
   - Add `mehulbhardwaj.ca` and `www.mehulbhardwaj.ca`
   - Vercel will provide DNS records to add

4. **Update DNS Records**:
   - Go to your domain registrar (where you manage DNS)
   - Add an A record:
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   - Or add a CNAME record:
     - Type: `CNAME`
     - Name: `@`
     - Value: `cname.vercel-dns.com` (check Vercel dashboard for exact value)
   - For www subdomain:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`

5. **Wait for DNS Propagation** (can take up to 48 hours, usually much faster)

## Option 2: Deploy with Netlify

### Steps:

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site**:
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**:
   ```bash
   netlify deploy --prod
   ```
   - Or visit [netlify.com](https://netlify.com) and drag & drop your `dist` folder

4. **Configure Custom Domain**:
   - In Netlify dashboard, go to Site settings > Domain management
   - Add `mehulbhardwaj.ca` and `www.mehulbhardwaj.ca`
   - Netlify will provide DNS records

5. **Update DNS Records**:
   - Add A record pointing to Netlify's IP (check Netlify dashboard)
   - Or use CNAME records as provided by Netlify

## Option 3: Deploy with GitHub Pages

### Steps:

1. **Update vite.config.js** (already done - base is set to `/`)

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Set source to `gh-pages` branch
   - Add custom domain `mehulbhardwaj.ca`

6. **Update DNS**:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME: `www` -> `yourusername.github.io`

## GoDaddy DNS Configuration (Step-by-Step)

Since your domain is registered with GoDaddy, here's how to configure DNS:

### Accessing DNS Settings in GoDaddy:

1. **Log in to GoDaddy**:
   - Go to [godaddy.com](https://godaddy.com) and sign in
   - Click on "My Products" or "Domains"

2. **Open DNS Management**:
   - Find `mehulbhardwaj.ca` in your domain list
   - Click on the domain name
   - Click on "DNS" or "Manage DNS" tab

### For Vercel Deployment:

1. **First, deploy to Vercel** (see Option 1 above)

2. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add `mehulbhardwaj.ca` and `www.mehulbhardwaj.ca`
   - Vercel will show you the exact DNS records needed

3. **In GoDaddy DNS Management**:
   
   **For the root domain (`@`):**
   - Find the existing A record with Name `@` (or blank)
   - Click "Edit" (or delete and create new)
   - **Type**: A
   - **Name**: `@` (or leave blank)
   - **Value**: `76.76.21.21` (or the IP Vercel shows you)
   - **TTL**: 1 Hour (or 600 seconds)
   - Click "Save"
   
   **For www subdomain:**
   - Find the existing CNAME record for `www`
   - Click "Edit"
   - **Type**: CNAME
   - **Name**: `www`
   - **Value**: `cname.vercel-dns.com` (or the CNAME Vercel shows you)
   - **TTL**: 1 Hour
   - Click "Save"

4. **Keep these records unchanged**:
   - NS records (ns33.domaincontrol.com, ns34.domaincontrol.com)
   - SOA record
   - TXT records (like _dmarc)

### For Netlify Deployment:

1. **Deploy to Netlify** (see Option 2 above)

2. **In Netlify Dashboard**:
   - Go to Site settings → Domain management
   - Add `mehulbhardwaj.ca` and `www.mehulbhardwaj.ca`
   - Netlify will provide DNS records

3. **In GoDaddy DNS Management**:
   - Update A record for `@` to Netlify's IP (shown in Netlify dashboard)
   - Update CNAME for `www` to Netlify's CNAME target

### Important Notes for GoDaddy:

- **A Record for Root Domain**: GoDaddy may show `@` or leave it blank - both mean the root domain
- **DNS Propagation**: Changes can take 1-48 hours, but usually work within 1-2 hours
- **SSL Certificate**: Vercel/Netlify will automatically provision SSL certificates once DNS is configured
- **Don't Delete**: Keep NS, SOA, and TXT records unless instructed otherwise

## DNS Configuration Summary

Based on your current DNS records, you'll need to:

1. **Update the A record** for `@` to point to your hosting provider's IP
2. **Update the CNAME** for `www` to point to your hosting provider's CNAME
3. **Keep NS records** as they are (managed by GoDaddy)
4. **Keep SOA and TXT records** as they are

### For Vercel:
- A record: `@` -> `76.76.21.21` (check Vercel dashboard for current IP)
- CNAME: `www` -> `cname.vercel-dns.com`

### For Netlify:
- A record: `@` -> Netlify IP (check dashboard)
- CNAME: `www` -> Netlify CNAME

## Testing Your Deployment

1. Build locally first:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Check that all routes work correctly (especially `/projects`, `/resume`, `/contact`)

## Troubleshooting

- **404 errors on routes**: Make sure your hosting provider supports SPA routing (Vercel and Netlify handle this automatically)
- **DNS not resolving**: Wait up to 48 hours for DNS propagation, or check DNS propagation tools online
- **SSL certificate**: Vercel and Netlify provide free SSL certificates automatically

## Quick Start (Vercel - Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd portfolio

# Deploy
vercel

# Follow prompts, then add domain in Vercel dashboard
```

Your site will be live at `mehulbhardwaj.ca` once DNS propagates!
