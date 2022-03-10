const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/:file.css', destination: process.env.VERCEL_GIT_COMMIT_SHA ? `https://cdn.jsdelivr.net/gh/hackclub/css@${process.env.VERCEL_GIT_COMMIT_SHA ? process.env.VERCEL_GIT_COMMIT_SHA : 'main'}/:file.css` : ':file.css', permanent: false },
      { source: '/:slug/:file.css', destination: 'https://cdn.jsdelivr.net/gh/hackclub/css@:slug/:file.css', permanent: false },
    ]
  },
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
    ]
  },
}

module.exports = nextConfig