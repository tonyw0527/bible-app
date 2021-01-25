const isProd = process.env.VERCEL_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.histime.ga' : '',
}