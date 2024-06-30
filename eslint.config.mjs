import js from "@eslint/js";
import airbnb from "eslint-config-airbnb";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
    {
        files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            reactHooks,
            jsxA11y,
            import: importPlugin,
            "@typescript-eslint": typescript,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...airbnb.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...typescript.configs.recommended.rules,
            "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
            "react/jsx-uses-vars": "error",
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [
                1,
                {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            ],
            "react/jsx-props-no-spreading": "off",
            quotes: ["warn", "double"],
            "jsx-a11y/media-has-caption": [
                "error",
                {
                    audio: ["Audio"],
                    video: ["Video"],
                    track: ["Track"],
                },
            ],
            "react/display-name": "warn",
            "no-alert": "off",
            "no-duplicate-imports": "warn",
            "jsx-a11y/no-static-element-interactions": "off",
            "react/jsx-no-useless-fragment": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            "jsx-a11y/mouse-events-have-key-events": "off",
            "max-len": "off",
            "no-shadow": "off",
            "react/prop-types": "off",
            "no-unused-expressions": "off",
            "no-use-before-define": "off",
            "no-param-reassign": "off",
            "no-unused-vars": "off",
            "no-console": "off",
            "no-return-assign": "off",
            "react-hooks/exhaustive-deps": "warn",
            "import/prefer-default-export": "off",
            "no-multiple-empty-lines": "warn",
            "no-nested-ternary": "warn",
            "no-trailing-spaces": "off",
            "lines-between-class-members": "off",
            "object-curly-newline": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
        ignores: ["node_modules/", "build/"],
        overrideConfig: {
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
        },
    },
];
