/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['travelui-bucket-new.s3.eu-central-1.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path((?!coming-soon$).*)',
          destination: '/coming-soon',
          permanent: false,
        },
      ]
    }
    return [
      // {
      //   source: '/coming-soon/:path*',
      //   destination: '/',
      //   permanent: false,
      // },
    ];
  }
}

module.exports = nextConfig
