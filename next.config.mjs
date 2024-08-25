/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      resendKey: process.env.RESEND_API_KEY  
    }
};

export default nextConfig;
