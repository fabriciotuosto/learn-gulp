var noop = function(){
	return;
}
var logger = console || { log : noop, debug: noop, error : noop}
    
module.exports = {
    	log : function(...msg){
    		return logger.log(...msg);
    	},
    	debug: function(...msg){
    		return logger.debug(...msg);
    	},
    	error: function(...msg){
    		return logger.error(...msg);
    	}

};