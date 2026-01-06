import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [new URL('https://res.cloudinary.com/**')]
	}
}

export default nextConfig
