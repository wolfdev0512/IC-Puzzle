const DFXWebPackConfig = require("./dfx.webpack.config")
DFXWebPackConfig.initCanisterIds()

const webpack = require("webpack")

// Make DFX_NETWORK available to Web Browser with default "local" if DFX_NETWORK is undefined
const EnvPlugin = new webpack.EnvironmentPlugin({
  DFX_NETWORK: "local"
})

/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins([[optimizedImages]], {
  images: {
    disableStaticImages: true
  },
  devIndicators: {
    autoPrerender: false
  },
  experimental: {
    esmExternals: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Plugin
    config.plugins.push(EnvPlugin)

    // Important: return the modified config
    return config
  }
})
