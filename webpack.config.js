const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'textbox.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/, 
            use: [
                "style-loader",
                'css-modules-typescript-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                }, 
            ]
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};