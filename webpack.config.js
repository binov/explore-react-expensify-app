const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    console.log('env', env);
    const isProduction = env === 'production';
    //const CSSExtract = new ExtractTextPlugin('styles.css');
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

    return {
        entry: './src/app.js',
        //entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        // loader - lets u customize the behavior when it loads a file
        // how we can transfom a file when webpack sees it - jsx, scss etc
        // setting up of loader happens via the module property on our object 
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                // use: CSSExtract.extract({
                //     use: [
                //         'css-loader',
                //         'sass-loader'
                //     ] 
                // })
                use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
            }]

        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inlines-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true

        }
    }
}
// entry -> output

//console.log("dirname:",__dirname);
//console.log("joined path:",path.join(__dirname,'public'));


