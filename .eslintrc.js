module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": [
        "airbnb-base",
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
        "mongodb",
        "optimize-regex",
        "node",
        "markdown",
        "mocha",
        "json",
        "promise",
        "no-loops"
    ],
    "rules": {
        "indent": [
          "warn",
          2,
          {
            "SwitchCase": 1,
            "VariableDeclarator": { "var": 2, "let": 2, "const": 3 },
            "outerIIFEBody": 1,
            "MemberExpression": 0,
            "FunctionDeclaration": { "body": 1, "parameters": 2 },
            "FunctionExpression": { "body": 1, "parameters": 2 },
            "CallExpression": { "arguments": "first" },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "flatTernaryExpressions": false
          }
        ],
        "no-magic-numbers": [
          "warn",
          {
            "ignore": [0, 1, 10, 100, 1000],
            "enforceConst": true
          }
        ],
        "react/jsx-uses-vars": "warn",
        "complexity": ["warn", 15],
        "dot-location": ["error", "property"],
        "comma-dangle": ["warn", "never"],
        "linebreak-style": [
            "warn",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "max-len": [
            "warn",
            130
        ],
        "no-control-regex": "off",
        "function-paren-newline": "off",
        "no-return-assign": "off",
        "prefer-destructuring": "warn",
        "no-plusplus": "warn",
        "func-names": "off",
        "eqeqeq": ["warn", "smart"],
        "linebreak-style": "off",
        "one-var": ["error", "never"],
        "no-underscore-dangle": "off",
        "optimize-regex/optimize-regex": "warn",
        "space-before-blocks": [
            "warn",
            {
                "functions": "never",
                "keywords": "always",
                "classes": "always"
            }
        ],
        "node/no-unsupported-features": "off",
        "class-methods-use-this": "off",
        "no-unused-vars": "warn",
        "arrow-parens": "off",
        "import/prefer-default-export": "off",
        "import/no-dynamic-require": "off",
        "import/first": "off",
        "node/no-unpublished-require": [
          "error",
          { "allowModules": ["mocha", "sinon", "chai", "hippie"] }
        ],
        "import/extensions": ["warn", {
            "js": "never",
            "json": "never"
        }]
    }
}
