const baseConfig = require('./webpack.base.config.js')

// TODO: find that webpack config merge thingy.
module.exports = {
  ...baseConfig,

  mode: 'development',
}
