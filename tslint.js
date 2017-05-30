module.exports = {
	"extends":[
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-config-standard"
  ],
  "rules": {
    // Asthetic
    "ter-indent": [true, 2],
    "ter-func-call-spacing": [true],
    "max-line-length": [false],
    "ter-max-len": [true, 130, { ignoreComments: true }],
    "curly": true,
    "trailing-comma": [true, { "multiline": "always", "singleline": "never" }],
    "semicolon": [true, "always"],
    "object-curly-spacing": [ true, "always" ],
    "array-bracket-spacing": [true, "never"],
    "space-in-parens": [true, "never"],
    
    // Overrides
    "no-angle-bracket-type-assertion": false,
    "no-object-literal-type-assertion": [false],
    "object-literal-sort-keys": false,
    "object-literal-key-quotes": [ true, "consistent-as-needed" ]
  }
}
