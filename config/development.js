module.exports = {
	sourcemaps : true,
	scripts : {
		dest : 'public/scripts',
		app : './client/scripts/main.js',
		file : 'main.js',
		mangle : false
	},
	styles : {
		dest : 'public/css',
		app  : 'client/styles/app.less'
	},
	fonts : {
		src : ['./node_modules/bootstrap/fonts/*'],
		dest : 'public/fonts/'
	}
}