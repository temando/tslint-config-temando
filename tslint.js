module.exports = {
  "extends":[
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-config-standard"
  ],
  "rules": {
    /** Lock down indentation */
    "indent": [true, "spaces", 2],
    "ter-indent": [true, 2],

    /** Typescripts vscode tmlanguage actually needs semicolons ;( */
    "semicolon": [true, "always"],
    
    /** Using ter's line length to ignore comments */
    "max-line-length": [false],
    "ter-max-len": [true, 130, { ignoreComments: true }],
    
    /** Laxer tslint */
    "no-angle-bracket-type-assertion": false,
    "no-object-literal-type-assertion": [false],

    /** Disabled, because pointless */
    "object-literal-sort-keys": false,

    "no-default-export": true,

    /** Aesthetic & consistancy */
    "ter-func-call-spacing": [true],
    "curly": true,
    "trailing-comma": [true, { multiline: "always", singleline: "never" }],
    "object-literal-key-quotes": [ true, "consistent-as-needed" ],
    "object-curly-spacing": [ true, "always" ],
    "array-bracket-spacing": [true, "never"],
    "space-in-parens": [true, "never"],

    /** Disabled because sub-module imports are useful when you don't want to import the whole universe */
    "no-submodule-imports": false,

    "return-undefined": false,

    "await-promise": [true, "Thenable", "Bluebird"]    
  }
}
