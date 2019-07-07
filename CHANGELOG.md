# Changelog

## [Unreleased]

### Changed
- `no-use-before-declare` disabled
  - Disabled because when defining types it errors when they are out of order, which ruins readability and cannot affect runtime

## [1.5.0] - 2017-08-29

### Added

- `"await-promise": [true, "Thenable", "Bluebird"]`

## [1.4.0] - 2017-08-29

### Added
- `return-undefined: false`

## [1.3.0] - 2017-08-28

### Added
- `no-submodule-imports` disabled
  - Disabled because sub-module imports are useful when you don't want to import the whole universe

## [1.2.0] - 2017-08-07 

### Added
- Added `"no-default-export": true` because default exports are bad
  - If necessary, disable the rule on a per-case basis, or on a project basis if diciplined enough

## [1.1.1] - 2017-05-23

### Added
- `object-curly-spacing`

## [1.1.0] - 2017-05-23

### Changed
- Made semiclons mandatory :(, overriding `tslint-config-standard`
  - This is because in typescript, types actually fail to syntax highlight corrrectly without delimiter characters

## [1.0.0]

Initial release