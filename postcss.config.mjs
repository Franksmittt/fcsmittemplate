/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // Autoprefixer is optional but highly recommended for cross-browser compatibility
    // You should ensure it's installed as a devDependency in package.json
    autoprefixer: {},
  },
};
export default config;