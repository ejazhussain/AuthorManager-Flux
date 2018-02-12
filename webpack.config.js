const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        //__dirname is taking us to root and and we are calling folder name as build
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",
    //devtool: "source-map",
    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                //enable debugging in the browser
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                //find every file which ends with .tsx
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                //find every css file and load
                // test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader'] ,
                //find every sass file
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        "sass-loader"
                    ]
                })

            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                    publicPath: '../'       // override the default path
                  }
                }]
              },
            // {
            //     test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name]-[hash:8].[ext]'
            //             },
            //         },
            //     ]
            // },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ExtractTextPlugin("style.css")
    ]
}