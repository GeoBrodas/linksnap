<img src="/public/images/cover.png" alt="cover-image" width="100%" align="center">

### Linksnap - The LinkTree for developers

Free, Open source, and built for the community❤️

---

#### What's Linksnap?

Linksnap is a LinkTree alternative for developers to showcase their activity across different platforms like GitHub, Hashnode, Dev.to.

#### ✨ Features

- 🕊️Lightweight and Easy to use!
- 🔗Create shareable links.
- 😺Fetch Stats from your favourite platforms.

#### 🔨 Roadmap

- [ ] Fetch stats from Dev.to
- [ ] Customize the theme on your profile.
- [ ] PWA Support
- [ ] Implement likes on Profile Page
- [ ] See Profile Insights (views, likes, etc)
- [ ] Modify your profile URL.
- [ ] Dynamic Og images
- [ ] Grab stats from more platforms (Youtube, etc.)
- [x] Fetch Stats from Hashnode
- [x] Fetch Stats from GitHub

#### 🚀 Tech Stack

- PlanetScale
- Next.js
- Chakra-UI

#### Developement

- Fork the repository

```bash
git clone https://github.com/GeoBrodas/linksnap.git
```

- Install dependencies

```bash
npm install
```

- Create a file called `.env` and add the following lines:

```bash
PLANETSCALE_PRISMA_DATABASE_URL=
NEXT_PUBLIC_MY_SECRET_TOKEN=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_BASE_URL=
```

- Create the secret keys for NEXTAUTH_SECRET by running the following command:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

- Finally, run the following command to spin up the server:

```bash
npm run dev
```

#### Contributing

For contributing, please visit the [Contributing Guide]()
