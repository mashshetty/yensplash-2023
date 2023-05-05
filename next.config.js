// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  webpack: (config, { isServer }) => {
    // Add the file-loader and url-loader for mp4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    })

    return config
  },
}
