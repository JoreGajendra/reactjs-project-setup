React.js Project setup from Scratch
	1. Create empty directory for project
	2. Open command prompt
	3. Run the command npm create <enter> to create project
	4. Fill the project information to create the package.json file.
	5.  Install module dependencies for React
		a. React - 
			npm install react 
		b. React-DOM - 
			npm install react-dom
		c. Other Dev Dependencies
			i. Babel & Babel Loader -
				 npm install -D babel babel-loader
			ii. Babel Presets - 
				npm install -D @babel/preset-env @babel/preset-react
		d. Create .babelrc file at the level of package.json file.
		Content of .babelrc file:
			{
			    "presets": [
			        "@babel/preset-env",
			        "@babel/preset-react"
			    ]
			}
		
	6. Create a directory src for project source code
	7. Create a index.html 
		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <title>React Demo</title>
		</head>
		<body>
		    <div id="app"></div>
		</body>
		</html>
		
	8. Create a index.js for as a entry point of our project
		import React, { Component } from "react";
		import ReactDOM from "react-dom";
		
		class App extends Component {
		    render() {
		        return (
		            <h1>Welcome From React</h1>
		        );
		    }
		}
		
		ReactDOM.render(<App />, document.getElementById('app'));
		
		export default App;
		
		
	9. Now install modules required for packaging i.e. webpack dependencies
		a. Webpack, Wepack CLI
			 npm install -D webpack webpack-cli
		b. Webpack Dev server 
			 npm install -D webpack-dev-server
		
	10. Install the html-webpack-plugin to access the src/index.html as a template
		npm install -D html-webpack-plugin
	
	11. Create webpack.config.js configuration file for project packaging
		
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
		        contentBase:path.join(__dirname,"dist"),
		        port:7000,
		        hot:true
		    }
		}
		
	12. To build the project run following command
		npx webpack
	13. To execute the project on Webpack-Dev-Server
		npx webpack serve
