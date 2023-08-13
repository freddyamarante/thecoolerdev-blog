import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}

const millionConfig = {
  auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
