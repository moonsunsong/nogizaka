

module.exports={
    entry:'./main.js',
    output:{
        path:__dirname+'/dist',
        filename:'build.js'
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    }
}