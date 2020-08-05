# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2020-08-05

### Added 

- ESLint and ESLint basic configuration
- Changelog

### Changed

- Dependencies updated

## [1.0.2] - 2020-08-05

### Fixed 

- wrong path resolution in `cmd.js`, solved by using `path.join` instead of `resolve-from`
- wrong require in `index.js` for the `babel-plugin-esx-browser` plugin
