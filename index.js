'use strict'
/* eslint-disable no-unused-vars */
const ssr = require('babel-plugin-esx-ssr')
const browser = require('babel-plugin-esx-browser')
/* eslint-enable no-unused-vars */

module.exports = (pluginOptions = {}) => {
  return (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack (config, options) {
        if (!options.defaultLoaders) {
          throw new Error(
            'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
          )
        }
        if (options.isServer) {
          options.defaultLoaders.babel.options.plugins = [
            'esx-ssr'
          ]
          options.defaultLoaders.babel.options.presets = [
            [
              'next/babel',
              {
                'preset-env': {
                  targets: {
                    node: true
                  }
                }
              }
            ]
          ]
        } else {
          options.defaultLoaders.babel.options.plugins = [
            'esx-browser'
          ]
        }
        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options)
        }
        return config
      }
    })
  }
}
