module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 15,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    settings: {
        // 自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    // "rules": {
    //     quotes: [
    //         2,
    //         'single',
    //         {
    //             avoidEscape: true,
    //             allowTemplateLiterals: true
    //         }
    //     ],
    //     // 数组内部有换行符，中括号单独一行
    //     'array-bracket-newline': [2, {"multiline": true}],
    //     // 数组内部有换行符，每个元素单独一行
    //     'array-element-newline': [2, 'consistent'],
    //     'indent': 2,
    //     "react/jsx-max-props-per-line": [
    //         "error",
    //         {
    //             "maximum": 1, // 设置为 1 来确保每行只有一个属性
    //             "when": "multiline"
    //         }
    //     ]
    // }
};
