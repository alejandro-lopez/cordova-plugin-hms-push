# CORDOVA-PLUGIN-HMS-PUSH


- Contents
- Introduction
- Installation Guide
- Cordova SDK API Method Definition
- Configure description
- Licensing and Terms

## 1. Introduction
The Cordova SDK code encapsulates the Huawei push client interface. It provides many APIs for your reference or use.

The Cordova SDK code package is described as follows:

**src/main/:** core layer, bridging PushSDK bottom-layer code;

**www/HMSPush.js:** external interface definition layer, which is used to define interface classes or reference files.

## 2. Installation Guide

### Cordova

1. Download the Cordova Push SDK Plugin.
2. Add Platform To Project.

     ***```cordova platform add android```***

3. You can either install the plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-sdk-download-0000001050133798-V1).

    a. Run the following command in the root directory of your Cordova project to install it through npm.

    ***```cordova plugin add @hmscore/cordova-plugin-hms-push```***
    

    b. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin. <br>
        
    ***```cordova plugin add <CORDOVA_PUSH_PLUGIN_PATH>```***
    

4. Check whether the Cordova Push SDK is successfully added to Plugin folder in the root directory of the Cordova project.

5. Download **agconnect-services.json** file from AppGallery Connect.
   
6. Add **agconnect-services.json** and **jks** file to root directory.
   
7. Add **build.json** file to your project's root.

8. Make sure widget id is same as your package name in config.xml. Otherwise demo project will not work properly.
 
9. Then run the Cordova app 

     ***```cordova run android```***

### Ionic

1. Download the Cordova Push SDK Plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-sdk-download-0000001050133798-V1). <br><br>

    a. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin. <br>
    
    ***```npm install <CORDOVA_PUSH_PLUGIN_PATH>```***
    <br>

    b. Run the following command in the root directory of your Cordova project to install it through npm.

    ***`npm install @hmscore/cordova-plugin-hms-push`***
     

2. Check whether the Cordova Push SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save-dev`***

4. Copy the "ionic/dist/hms-push" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`*** 
    
    > ***NOTE*** <br>
    > where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and agconnect service dependencies.

8. Add the plug-in configuration to the build.gradle file in the app directory. And add push service implementation into to dependencies.

9. Add agconnect-services.json and jks file to the app directory in your Android project.

10. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

11. Then run the Ionic app.
        
    ***`ionic capacitor run android`***

    After this command, the demo will be opened android studio. Just run it.
	


## 3. Cordova SDK API Methods & Constant Definitions
   
    HMSPush   
        turnOffPush():promise<string>
        turnOnPush():promise<string>
        getID():promise<string>
        getAAID():promise<string>
        getToken():promise<string>
        sendToken(String token):promise<string>
        getCreationTime():promise<string>
        deleteAAID():promise<string>
        deleteToken():promise<string>
        subscribe(String topic):promise<string>
        unsubscribe(String topic):promise<string>
        disableAutoInit():promise<string>
        enableAutoInit():promise<string>
        isAutoInitEnabled():promise<string>
        onMessageReceived():promise<PushData>
        
    CordovaHmsMessageService    
        onMessageReceived(): promise<PushData>    
        onDeletedMessages():void 
        onMessageSent(String msgId):void  
        onSendError(String msgId, Exception exception):void  
        onNewToken(String token):void 
        
    Constants
        RESULT_SUCESS   
        RESULT_FAIL    
        PARAMETR_IS_EMPTY 
        TOKEN_NOT_EXISTS
 


## 4. Configure parameters.    
No.

## 5. Licensing and Terms  
Apache 2.0 license.
