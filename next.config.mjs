/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/resume", destination: "/armaan-zeyad-resume.pdf" }];
  },
};

export default nextConfig;
