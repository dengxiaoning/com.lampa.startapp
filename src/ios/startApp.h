#import <Cordova/CDV.h>

@interface startApp : CDVPlugin

- (void)check:(CDVInvokedUrlCommand*)command;
- (void)start:(CDVInvokedUrlCommand*)command;
- (void)go:(CDVInvokedUrlCommand*)command;
- (void)getExtras:(CDVInvokedUrlCommand*)command;
- (void)downloadApps:(CDVInvokedUrlCommand*)command;
- (void)exitApplication:(CDVInvokedUrlCommand*)command;
@end
