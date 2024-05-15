/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the `experimental` object if not present
  experimental: {
    // Add the following lines inside the object
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@appsignal/nodejs"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.node$/i,
      loader: 'node-loader',
    })
    return config
  },  
}

export default nextConfig;
