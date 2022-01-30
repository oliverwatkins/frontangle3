module.exports = function override(config, env) {
    config.module.rules.push(
        {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {loader: 'html-loader',
                // options: {
                //     attrs: [':data-src']
                // }
            }
        }
        // {
        //     test: /\.jpe?g$|\.gif$|\.png$|\.txt$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
        //     use: "file-loader?name=[path][name].[ext]"
        //     // loader: "file-loader"
        // },
    );

    //continue to do stuff with the webpack config...
    return config;
}