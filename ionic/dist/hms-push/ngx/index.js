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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSPush = /** @class */ (function (_super) {
    __extends(HMSPush, _super);
    function HMSPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
      
     * @returns Promise<string>
     */
    HMSPush.prototype.turnOnPush = function () { return cordova(this, "turnOnPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HMSPush.prototype.turnOffPush = function () { return cordova(this, "turnOffPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HMSPush.prototype.getID = function () { return cordova(this, "getID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HMSPush.prototype.getAAID = function () { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     */
    HMSPush.prototype.getToken = function () { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HMSPush.prototype.getCreationTime = function () { return cordova(this, "getCreationTime", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HMSPush.prototype.deleteAAID = function () { return cordova(this, "deleteAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     */
    HMSPush.prototype.deleteToken = function () { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} arg Topic to be subscribed to.
     * @returns Promise<string>
     */
    HMSPush.prototype.subscribe = function (arg) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} arg Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HMSPush.prototype.unsubscribe = function (arg) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to disable automatic initialization.
     * @returns Promise<string>
     */
    HMSPush.prototype.disableAutoInit = function () { return cordova(this, "disableAutoInit", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable automatic initialization.
     * @returns Promise<string>
     */
    HMSPush.prototype.enableAutoInit = function () { return cordova(this, "enableAutoInit", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HMSPush.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    /** This method is used to test.
     * @returns Promise<string>
     */
    HMSPush.prototype.test = function () { return cordova(this, "test", { "otherPromise": true }, arguments); };
    /**
     * This method is used to receive data messages.
     * @returns Promise<PushData>
     */
    HMSPush.prototype.onMessageReceived = function () { return cordova(this, "onMessageReceived", { "otherPromise": true }, arguments); };
    HMSPush.pluginName = "HMSPush";
    HMSPush.plugin = "com-plugin-hms-push";
    HMSPush.pluginRef = "HMSPush";
    HMSPush.platforms = ["Android"];
    HMSPush = __decorate([
        Injectable()
    ], HMSPush);
    return HMSPush;
}(IonicNativePlugin));
export { HMSPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBK0IvRiwyQkFBaUI7Ozs7SUFHNUM7Ozs7T0FJRztJQUNILDRCQUFVO0lBS1Y7OztPQUdHO0lBQ0gsNkJBQVc7SUFLWDs7O09BR0c7SUFDSCx1QkFBSztJQUtMOzs7T0FHRztJQUNILHlCQUFPO0lBS1A7OztPQUdHO0lBQ0gsMEJBQVE7SUFLUjs7O09BR0c7SUFDSCxpQ0FBZTtJQUtmOzs7T0FHRztJQUNILDRCQUFVO0lBS1Y7OztPQUdHO0lBQ0gsNkJBQVc7SUFLWDs7OztPQUlHO0lBQ0gsMkJBQVMsYUFBQyxHQUFXO0lBS3JCOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLEdBQVc7SUFLdkI7OztPQUdHO0lBQ0gsaUNBQWU7SUFLZjs7O09BR0c7SUFDSCxnQ0FBYztJQUtkOzs7T0FHRztJQUNILG1DQUFpQjtJQUtqQjs7T0FFRztJQUNILHNCQUFJO0lBS0o7OztPQUdHO0lBQ0gsbUNBQWlCOzs7OztJQXZJTixPQUFPO1FBRG5CLFVBQVUsRUFBRTtPQUNBLE9BQU87a0JBaERwQjtFQWdENkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5Db3B5cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBITVNQdXNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQ29yZG92YSBQdXNoIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiBIdWF3ZWkgUHVzaCBLaXQgU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBleHBvc2VzIGFsbCBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGJ5IEh1YXdlaSBQdXNoIEtpdCBTREsuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhNU1B1c2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL2htcy1wdXNoJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoTVNQdXNoOiBITVNQdXNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaE1TUHVzaC50dXJuT25QdXNoKClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1B1c2gnLFxyXG4gIHBsdWdpbjogJ2NvbS1wbHVnaW4taG1zLXB1c2gnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNQdXNoJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1B1c2ggZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRpc2FibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAgXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+IFxyXG4gICAqL1xyXG4gIHR1cm5PblB1c2goKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbmFibGUgdGhlIGRpc3BsYXkgb2Ygbm90aWZpY2F0aW9uIG1lc3NhZ2VzLiBJZiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBpbiBhbiBhcHAsIHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2QgYXBwbGllcyB0byBub3RpZmljYXRpb24gbWVzc2FnZXMgYnV0IG5vdCBkYXRhIG1lc3NhZ2VzLiBJdCBpcyB0aGUgYXBwIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIGRhdGEgbWVzc2FnaW5nLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHR1cm5PZmZQdXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGFuIEFBSUQgaW4gc3luY2hyb25vdXMgbW9kZS4gQmVmb3JlIGFwcGx5aW5nIGZvciBhIHRva2VuLCBhbiBhcHAgY2FsbHMgdGhpcyBtZXRob2QgdG8gb2J0YWluIGl0cyB1bmlxdWUgQUFJRC4gVGhlIEhVQVdFSSBQdXNoIHNlcnZlciBnZW5lcmF0ZXMgYSB0b2tlbiBmb3IgdGhlIGFwcCBiYXNlZCBvbiB0aGUgQUFJRC4gSWYgdGhlIEFBSUQgb2YgdGhlIGFwcCBjaGFuZ2VzLCBhIG5ldyB0b2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBuZXh0IHRpbWUgd2hlbiB0aGUgYXBwIGFwcGxpZXMgZm9yIGEgdG9rZW4uIElmIGFuIGFwcCBuZWVkcyB0byByZXBvcnQgc3RhdGlzdGljcyBldmVudHMsIGl0IG11c3QgY2FycnkgdGhlIEFBSUQgYXMgaXRzIHVuaXF1ZSBJRC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIGFzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYSB0b2tlbiByZXF1aXJlZCBmb3IgYWNjZXNzaW5nIEhVQVdFSSBQdXNoIEtpdC4gSWYgdGhlcmUgaXMgbm8gbG9jYWwgQUFJRCwgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGFuIEFBSUQgd2hlbiBpdCBpcyBjYWxsZWQgYmVjYXVzZSB0aGUgSFVBV0VJIFB1c2ggS2l0IHNlcnZlciBuZWVkcyB0byBnZW5lcmF0ZSBhIHRva2VuIGJhc2VkIG9uIHRoZSBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIHRoZSBnZW5lcmF0aW9uIHRpbWVzdGFtcCBvZiBhbiBBQUlELlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGdldENyZWF0aW9uVGltZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIGxvY2FsIEFBSUQgYW5kIGl0cyBnZW5lcmF0aW9uIHRpbWVzdGFtcC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkZWxldGVBQUlEKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGVsZXRlIGEgdG9rZW4uIEFmdGVyIGEgdG9rZW4gaXMgZGVsZXRlZCwgdGhlIGNvcnJlc3BvbmRpbmcgQUFJRCB3aWxsIG5vdCBiZSBkZWxldGVkLiBUaGlzIG1ldGhvZCBpcyBhIHN5bmNocm9ub3VzIG1ldGhvZC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkZWxldGVUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHN1YnNjcmliZSB0byB0b3BpY3MgaW4gYXN5bmNocm9ub3VzIG1vZGUuIFRoZSBIVUFXRUkgUHVzaCBLaXQgdG9waWMgbWVzc2FnaW5nIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2VuZCBtZXNzYWdlcyB0byBtdWx0aXBsZSBkZXZpY2VzIHdob3NlIHVzZXJzIGhhdmUgc3Vic2NyaWJlZCB0byBhIHNwZWNpZmljIHRvcGljLiBZb3UgY2FuIHdyaXRlIG1lc3NhZ2VzIGFib3V0IHRoZSB0b3BpYyBhcyByZXF1aXJlZCwgYW5kIEhVQVdFSSBQdXNoIEtpdCBkZXRlcm1pbmVzIHRoZSByZWxlYXNlIHBhdGggYW5kIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBjb3JyZWN0IGRldmljZXMgaW4gYSByZWxpYWJsZSBtYW5uZXIuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFyZyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHN1YnNjcmliZShhcmc6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gdW5zdWJzY3JpYmUgZnJvbSB0b3BpY3MgdGhhdCBhcmUgc3Vic2NyaWJlZCB0byB0aHJvdWdoIHRoZSBzdWJzY3JpYmUgbWV0aG9kLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIHRvLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKGFyZzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNhYmxlIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBkaXNhYmxlQXV0b0luaXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBlbmFibGUgYXV0b21hdGljIGluaXRpYWxpemF0aW9uLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGVuYWJsZUF1dG9Jbml0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24gaXMgZW5hYmxlZC4gIFxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIGlzQXV0b0luaXRFbmFibGVkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHRlc3QuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgdGVzdCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHJlY2VpdmUgZGF0YSBtZXNzYWdlcy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFB1c2hEYXRhPlxyXG4gICAqL1xyXG4gIG9uTWVzc2FnZVJlY2VpdmVkKCk6IFByb21pc2U8UHVzaERhdGE+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHVzaERhdGEge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufSJdfQ==