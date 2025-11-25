/** @type {import('next').NextConfig} */
const nextConfig = {
    // FIX: Set swcMinify to true to solve the "Legacy JavaScript" audit.
    swcMinify: true,
    
    // GSC Optimization: Trailing slash consistency for canonical URLs
    trailingSlash: false,
    
    // FIX: Removing the problematic experimental block entirely to prevent the "Cannot find module 'critters'" build failure
    // The previous flags (optimizeCss: true) introduced an unstable, complex dependency.
    experimental: {
        // Keeping a blank experimental block is safest for build stability.
    },
};

export default nextConfig;