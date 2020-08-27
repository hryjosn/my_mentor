const withImages = require('next-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports =
    withImages({
            trailingSlash: false,

            webpack: config => {
                config.node = {
                    fs: 'empty'
                }
                config.plugins = config.plugins || [];
                config.plugins = [
                    ...config.plugins,
                    // Read the .env file
                    new Dotenv({
                        path: path.join(__dirname, '.env'),
                        systemvars: true,
                    }),
                ];
                return config;
            },
        },
    )
;
