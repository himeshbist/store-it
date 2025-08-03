import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// The final configuration array
const eslintConfig = [
    // Use the 'compat' utility to extend all the required configs
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "standard",
        "plugin:tailwindcss/recommended",
        "prettier"
    ),

    // Add your custom rules object
    {
        rules: {
            "no-undef": "off",
        },
    },
];

export default eslintConfig;