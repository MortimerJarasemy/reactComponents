var path = require('path');
var entryPath = path.join(__dirname,'src'),
	outPath = path.join(__dirname,'dist');

module.exports = {
	entry: [path.join(entryPath,'app.js')],
	output:{
		path:outPath,
		filename:'bundle.js'
	},

		module:{
			loaders:[
				{
					test:/\js$/,
					include:entryPath,
					loaders:['babel']
				},
				{
				  test: /\.scss$/,
				  loaders: ["style-loader", "css-loader", "sass-loader"]
				}
			]
		},
		devServer:{
			contentBase: outPath
		}
	}
