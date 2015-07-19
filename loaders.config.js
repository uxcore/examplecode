module.exports = [
    {
        test: /\.jsx$/,
        //exclude: /node_modules/,
        loaders: [
            // 'react-hot',
            'babel-loader'
        ]
    },
    {
        test: /\.js$/,
       // exclude: /node_modules/,
        loaders: [
            // 'react-hot',
            'babel-loader'
        ]
    }
]