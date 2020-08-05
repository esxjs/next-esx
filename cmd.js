#!/usr/bin/env node
const resolve = require('resolve-from')
const { dirname } = require('path')
const cwd = process.cwd()

const optimize = loadOptimizer()

optimize.install({
  exclude: (filename) => {
    return !/node_modules/.test(filename)
  }
})

loadNextCmd()


function loadNextCmd () {
  const pkg = resolve(cwd, 'next/package.json')
  const dir = dirname(pkg)
  const { bin } = require(pkg)
  require(resolve(dir, bin.next))
}

function loadOptimizer () {
  try { 
    return require(resolve(cwd, 'esx/optimize'))
  } catch (e) {
    return require(resolve(cwd, 'esx/experimental-optimize'))
  }
}
