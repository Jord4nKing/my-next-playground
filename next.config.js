/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  
  // ✅ Optimize bundle and JS output
  experimental: {
    esmExternals: 'loose', // Serve modern JS to modern browsers
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Strip console.logs
  },

  reactStrictMode: true, // helps detect issues early (optional)
  swcMinify: true,       // ensure minimal bundle size
}



module.exports = nextConfig
