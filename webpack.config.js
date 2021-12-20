	const path = require('path');
	const HTMLWebpackPlugin = require('html-webpack-plugin');
	
	module.exports = {
	    mode:"development",
	    entry: {
	        main: {
	            import : "./src/index.js",
	            dependOn:"shared"
	        },
	        shared: ['react', 'react-dom']
	    },
	    output: {
	        path : path.resolve(__dirname,"dist"),
	        filename: '[name].bundle.js',
			libraryTarget: 'umd',
	        clean: true			
	    },
	    plugins:[
	        new HTMLWebpackPlugin({
	            template:'./src/index.html'
	        })
	    ],
	    module: {
	        rules: [
	            {
	                test: /\.js$/,
	                exclude: /node_modules/,
	                use: ["babel-loader"]
	            }
	        ]
	    },
	    devServer:{
	        static:path.join(__dirname,"dist"),
	        port:5555,
	        hot:true
	    }
	}
