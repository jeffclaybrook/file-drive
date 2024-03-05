/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "steady-schnauzer-423.convex.cloud"
   }
  ]
 }
}

export default nextConfig