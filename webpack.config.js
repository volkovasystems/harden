var webpack = require( "webpack" );

module.exports = {
	"entry": "./harden.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"output": {
		"library": "harden",
		"libraryTarget": "umd",
		"filename": "harden.deploy.js"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		//new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
	]
};
