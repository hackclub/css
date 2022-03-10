let productionRedirects = [
  {
    source: "/:file.css",
    destination: `https://cdn.jsdelivr.net/gh/hackclub/css@${
      process.env.VERCEL_GIT_COMMIT_SHA
        ? process.env.VERCEL_GIT_COMMIT_SHA
        : "main"
    }/:file.css`,
    permanent: false,
  },
  {
    source: "/:slug/:file.css",
    destination: "https://cdn.jsdelivr.net/gh/hackclub/css@:slug/:file.css",
    permanent: false,
  },
];

const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return process.env.VERCEL_GIT_COMMIT_SHA ? productionRedirects : [];
  },
  async rewrites() {
    return [{ source: "/", destination: "/index.html" }];
  },
};

module.exports = nextConfig;
