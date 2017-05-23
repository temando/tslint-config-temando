module.exports = {
	"extends":[
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-config-standard"
  ],
  "rules": {
    "ter-indent": [true, 2],
    "trailing-comma": [true, { "multiline": "always", "singleline": "never" }],
    "semicolon": [true, "always"],

    "no-angle-bracket-type-assertion": false,
    "no-object-literal-type-assertion": [false],

    "curly": true,
    "object-literal-sort-keys": false,
    "object-literal-key-quotes": [ true, "consistent-as-needed" ]
  }
}
