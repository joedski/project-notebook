const path = require('path')
const projectPath = (...parts) => path.resolve(__dirname, '..', ...parts)
const clientPath = (...parts) => projectPath('src', 'node_modules', '@@client', ...parts)
const distPath = (...parts) => projectPath('dist', ...parts)

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: projectPath(),

  entry: {
    'app': clientPath('app'),
    'event-bus': clientPath('event-bus'),
  },

  output: {
    path: projectPath('dist'),
    filename: 'js/[name].bundle.js',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        context: clientPath('assets'),
        from: clientPath('assets', '**', '*'),
        to: distPath(),
      },
    ]),
  ],
}
