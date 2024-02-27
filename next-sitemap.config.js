import('next-sitemap').IConfig;

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kaiser-ulrich.de',
  generateRobotsTxt: true,
  generateRobotsTxt: true,
  outDir: 'out'
}