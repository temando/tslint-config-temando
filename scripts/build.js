#!/usr/bin/env node

require('fs').writeFileSync(
  require('path').join(__dirname, '../tslint.json'),
  JSON.stringify(
    require('../tslint.js'), null, 2
  )
)