module.exports = {
	"extends":[
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-config-standard"
  ],
  "rules": {
    // Asthetic
    "ter-indent": [true, 2],
    "curly": true,
    "trailing-comma": [true, { "multiline": "always", "singleline": "never" }],
    "semicolon": [true, "always"],
    "object-curly-spacing": [ true, "always" ],

    // Rules
    "no-extra-boolean-cast": true,
    
    // Overrides
    "no-angle-bracket-type-assertion": false,
    "no-object-literal-type-assertion": [false],
    "object-literal-sort-keys": false,
    "object-literal-key-quotes": [ true, "consistent-as-needed" ]
  }
}
