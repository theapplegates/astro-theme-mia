// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
	ignores: ["node_modules", "dist", "build", "*.min.js", "example/**"], // Add your ignored patterns here
  },
];