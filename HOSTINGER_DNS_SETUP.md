# 🌐 Hostinger DNS Setup Instructions for gezelligroyal.com

Copy and paste the message below directly to your client:

---

### 📩 Client Message Template

Hi [Client Name],

Please log into your Hostinger account and add the following DNS records to connect your domain **gezelligroyal.com** to the new website.

#### 📋 Instructions for Hostinger:
1. Log in to **Hostinger** and go to **Domains**.
2. Click on **`gezelligroyal.com`** and select **DNS / Nameservers** (or **DNS Zone Editor**).
3. Delete any existing **A** records for `@` or **CNAME** records for `www` pointing to default Hostinger IP addresses.
4. Add the following **5 DNS Records**:

#### 1️⃣ Add 4 A-Records (for `gezelligroyal.com`):
| Type | Name / Host | Points to / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | Auto / 3600 |
| **A** | `@` | `185.199.109.153` | Auto / 3600 |
| **A** | `@` | `185.199.110.153` | Auto / 3600 |
| **A** | `@` | `185.199.111.153` | Auto / 3600 |

#### 2️⃣ Add 1 CNAME Record (for `www.gezelligroyal.com`):
| Type | Name / Host | Points to / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `pavandange007.github.io` | Auto / 3600 |

---

Once added, please let me know so I can verify and enable free SSL (HTTPS) for the site. Note: DNS changes can take anywhere from 15 minutes up to 24 hours to take full effect globally.

---

## ⚙️ Steps for Developer (After Client Adds DNS):

1. **Commit & Push GitHub Changes**:
   ```bash
   git add .
   git commit -m "Add custom domain setup"
   git push
   ```

2. **Configure GitHub Pages Custom Domain**:
   - Go to GitHub Repository: `https://github.com/Pavandange007/gezelligroyal`
   - Navigate to **Settings** -> **Pages**.
   - Under **Custom domain**, type `www.gezelligroyal.com` (or `gezelligroyal.com`) and click **Save**.

3. **Enforce HTTPS**:
   - Once DNS propagation is complete (usually 15-30 minutes), check **Enforce HTTPS** in **Settings** -> **Pages**.
