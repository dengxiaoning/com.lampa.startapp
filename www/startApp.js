/**
	com.lampa.startapp
	https://github.com/lampaa/com.lampa.startapp
	
	Phonegap plugin for check or launch other application in android device (iOS support).
	bug tracker: https://github.com/lampaa/com.lampa.startapp/issues
*/

var exec = require('cordova/exec');

module.exports = {
	/** 
	 * Set application params
	 *
	 * @param {Mixed} params				params, view documentation https://github.com/dengxiaoning/com.lampa.startapp
	 * @param {Mixed} extra   				Extra fields
	 * @param {Function} errorCallback		The callback that is called when an error occurred when the program starts.
	 * WARNING:
	 *In IOS，Use getExtras method, must be in you Called project 'AppDelegate.m' file of the
	 *'- (BOOL)application:(UIApplication*)application openURL:(NSURL*)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation{}'
	 * method add the following code
	 *example code:
	 *  NSString *URLString= [url absoluteString]; 
  	 *[[NSUserDefaults standardUserDefaults] setObject:URLString forKey:@"url"];
     *[[NSUserDefaults standardUserDefaults] synchronize]; 
	 *  
	 *
	 */
	 
	set: function(params, extra) {
		var output = [params];
		if(extra != undefined) {
			output.push(extra);
		}
		else {
			output.push(null);
		}
		
		return {
			start: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "start", output);
			},
			check: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "check", output);
			},
			go: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "go", output);
			}
		}
	},
	/**
	 * extra values
	 */
	getExtras: function(completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "getExtras", []);
	},
	getExtra: function(extraValue, completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "getExtra", [extraValue]);
	},
	hasExtra: function(extraValue, completeCallback, errorCallback) {
		this.getExtra(extraValue, completeCallback, errorCallback);
	},
	downloadApps:function(packageVal, completeCallback, errorCallback){
		exec(completeCallback, errorCallback, "startApp", "downloadApps", [packageVal]);
	},
	exitApplication: function(completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "exitApplication", []);
	}
}
