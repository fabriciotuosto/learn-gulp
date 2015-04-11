module.exports = {
	sourcemaps : false,
	scripts : {
		dest : 'public/scripts',
		app : './client/scripts/main.js',
		file : 'main.js',
		mangle : true
	},
	styles : {
		dest : 'public/css',
		app  : 'client/styles/app.less'
	},
	fonts : {
		src : ['./node_modules/bootstrap/fonts/*'],
		dest : 'public/fonts/'
	}
};