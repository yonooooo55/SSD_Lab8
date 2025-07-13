// === IMPORTS ===
import js from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";
import pluginSecurityNode from "eslint-plugin-security-node";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";

// === CONFIG EXPORT ===
export default [

  // Base ESLint recommended rules
  js.configs.recommended,

  {
    // Apply to all JS files
    files: ["**/*.js"],

    // Enable ESLint security plugins
    plugins: {
      security: pluginSecurity,
      "security-node": pluginSecurityNode,
      "no-unsanitized": pluginNoUnsanitized
    },

    // Rules to enforce
    rules: {
      // Plugin: eslint-plugin-security
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "error",

      // Plugin: eslint-plugin-security-node
      "security-node/detect-disable-must-revalidate": "warn",
      "security-node/detect-crlf": "warn",

      // Plugin: eslint-plugin-no-unsanitized
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",

      // Core ESLint rules
      "no-unused-vars": "warn",
      "no-var": "error",
      "quotes": ["error", "single"],
      "no-console": "off"
    }
  }
];
