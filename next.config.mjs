/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the `experimental` object if not present
  experimental: {
    // Add the following lines inside the object
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@appsignal/nodejs"],
  },
}

export default nextConfig;
