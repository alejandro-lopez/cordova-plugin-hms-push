/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name HMSPush
 * @description
 * The Cordova Push Plugin enables communication between Huawei Push Kit SDK and Cordova platform. This plugin exposes all functionality provided by Huawei Push Kit SDK.
 *
 * @usage
 * ```typescript
 * import { HMSPush } from '@ionic-native/hms-push';
 *
 *
 * constructor(private hMSPush: HMSPush) { }
 *
 * ...
 *
 *
 * this.hMSPush.turnOnPush()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'HMSPush',
  plugin: 'com-plugin-hms-push', // npm package name, example: cordova-plugin-camera
  pluginRef: 'HMSPush', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSPush extends IonicNativePlugin {
  
  @Cordova({ otherPromise: true })
  /**
   * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
    
   * @returns Promise<string> 
   */
  turnOnPush(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
   * @returns Promise<string>
   */
  turnOffPush(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
   * @returns Promise<string>
   */
  getID(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to obtain an AAID in asynchronous mode.
   * @returns Promise<string>
   */
  getAAID(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
   * @returns Promise<string>
   */
  getToken(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to obtain the generation timestamp of an AAID.
   * @returns Promise<string>
   */
  getCreationTime(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to delete a local AAID and its generation timestamp.
   * @returns Promise<string>
   */
  deleteAAID(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
   * @returns Promise<string>
   */
  deleteToken(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
   * @param {string} arg Topic to be subscribed to.
   * @returns Promise<string>
   */
  subscribe(arg: string): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
   * @param {string} arg Topic to be unsubscribed to.
   * @returns Promise<string>
   */
  unsubscribe(arg: string): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to disable automatic initialization.
   * @returns Promise<string>
   */
  disableAutoInit(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to enable automatic initialization.
   * @returns Promise<string>
   */
  enableAutoInit(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to check whether automatic initialization is enabled.  
   * @returns Promise<string>
   */
  isAutoInitEnabled(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /** This method is used to test.
   * @returns Promise<string>
   */
  test(): Promise<string> {
    return;
  }

  @Cordova({ otherPromise: true })
  /**
   * This method is used to receive data messages.
   * @returns Promise<PushData>
   */
  onMessageReceived(): Promise<PushData> {
    return;
  }

}

interface PushData {
  [key: string]: any;
}