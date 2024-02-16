/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Agrega una regla para manejar archivos mp4
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: `${isServer ? '../' : ''}static/videos/`,
                    name: '[name].[hash].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};

module.exports = nextConfig
// module.exports = 