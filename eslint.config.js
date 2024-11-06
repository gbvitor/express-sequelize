const globals = require("globals");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "commonjs",
        },

        rules: {
            "no-undef": "error",
            "no-unused-vars": ["error", { args: "none" }],
            "no-console": ["error", { allow: ["warn", "error"] }],
            "linebreak-style": ["error", "windows"],
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
];
