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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSPushOriginal = /** @class */ (function (_super) {
    __extends(HMSPushOriginal, _super);
    function HMSPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
      
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.turnOnPush = function () { return cordova(this, "turnOnPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable or disable data messaging.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.turnOffPush = function () { return cordova(this, "turnOffPush", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.getID = function () { return cordova(this, "getID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain an AAID in asynchronous mode.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.getAAID = function () { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.getToken = function () { return cordova(this, "getToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to obtain the generation timestamp of an AAID.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.getCreationTime = function () { return cordova(this, "getCreationTime", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a local AAID and its generation timestamp.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.deleteAAID = function () { return cordova(this, "deleteAAID", { "otherPromise": true }, arguments); };
    /**
     * This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.deleteToken = function () { return cordova(this, "deleteToken", { "otherPromise": true }, arguments); };
    /**
     * This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.
     * @param {string} arg Topic to be subscribed to.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.subscribe = function (arg) { return cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to unsubscribe from topics that are subscribed to through the subscribe method.
     * @param {string} arg Topic to be unsubscribed to.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.unsubscribe = function (arg) { return cordova(this, "unsubscribe", { "otherPromise": true }, arguments); };
    /**
     * This method is used to disable automatic initialization.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.disableAutoInit = function () { return cordova(this, "disableAutoInit", { "otherPromise": true }, arguments); };
    /**
     * This method is used to enable automatic initialization.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.enableAutoInit = function () { return cordova(this, "enableAutoInit", { "otherPromise": true }, arguments); };
    /**
     * This method is used to check whether automatic initialization is enabled.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.isAutoInitEnabled = function () { return cordova(this, "isAutoInitEnabled", { "otherPromise": true }, arguments); };
    /** This method is used to test.
     * @returns Promise<string>
     */
    HMSPushOriginal.prototype.test = function () { return cordova(this, "test", { "otherPromise": true }, arguments); };
    /**
     * This method is used to receive data messages.
     * @returns Promise<PushData>
     */
    HMSPushOriginal.prototype.onMessageReceived = function () { return cordova(this, "onMessageReceived", { "otherPromise": true }, arguments); };
    HMSPushOriginal.pluginName = "HMSPush";
    HMSPushOriginal.plugin = "com-plugin-hms-push";
    HMSPushOriginal.pluginRef = "HMSPush";
    HMSPushOriginal.platforms = ["Android"];
    return HMSPushOriginal;
}(IonicNativePlugin));
var HMSPush = new HMSPushOriginal();
export { HMSPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9GLDJCQUFpQjs7OztJQUc1Qzs7OztPQUlHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7T0FHRztJQUNILHVCQUFLO0lBS0w7OztPQUdHO0lBQ0gseUJBQU87SUFLUDs7O09BR0c7SUFDSCwwQkFBUTtJQUtSOzs7T0FHRztJQUNILGlDQUFlO0lBS2Y7OztPQUdHO0lBQ0gsNEJBQVU7SUFLVjs7O09BR0c7SUFDSCw2QkFBVztJQUtYOzs7O09BSUc7SUFDSCwyQkFBUyxhQUFDLEdBQVc7SUFLckI7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsR0FBVztJQUt2Qjs7O09BR0c7SUFDSCxpQ0FBZTtJQUtmOzs7T0FHRztJQUNILGdDQUFjO0lBS2Q7OztPQUdHO0lBQ0gsbUNBQWlCO0lBS2pCOztPQUVHO0lBQ0gsc0JBQUk7SUFLSjs7O09BR0c7SUFDSCxtQ0FBaUI7Ozs7O2tCQXZMbkI7RUFnRDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSE1TUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIENvcmRvdmEgUHVzaCBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gSHVhd2VpIFB1c2ggS2l0IFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZXhwb3NlcyBhbGwgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBieSBIdWF3ZWkgUHVzaCBLaXQgU0RLLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBITVNQdXNoIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9obXMtcHVzaCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaE1TUHVzaDogSE1TUHVzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhNU1B1c2gudHVybk9uUHVzaCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNQdXNoJyxcclxuICBwbHVnaW46ICdjb20tcGx1Z2luLWhtcy1wdXNoJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TUHVzaCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNQdXNoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIFxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkaXNhYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgIFxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPiBcclxuICAgKi9cclxuICB0dXJuT25QdXNoKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBkaXNwbGF5IG9mIG5vdGlmaWNhdGlvbiBtZXNzYWdlcy4gSWYgeW91IHdhbnQgdG8gY29udHJvbCB0aGUgZGlzcGxheSBvZiBub3RpZmljYXRpb24gbWVzc2FnZXMgaW4gYW4gYXBwLCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QuIFRoaXMgbWV0aG9kIGFwcGxpZXMgdG8gbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGJ1dCBub3QgZGF0YSBtZXNzYWdlcy4gSXQgaXMgdGhlIGFwcCB0aGF0IGRldGVybWluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSBkYXRhIG1lc3NhZ2luZy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICB0dXJuT2ZmUHVzaCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiBhbiBBQUlEIGluIHN5bmNocm9ub3VzIG1vZGUuIEJlZm9yZSBhcHBseWluZyBmb3IgYSB0b2tlbiwgYW4gYXBwIGNhbGxzIHRoaXMgbWV0aG9kIHRvIG9idGFpbiBpdHMgdW5pcXVlIEFBSUQuIFRoZSBIVUFXRUkgUHVzaCBzZXJ2ZXIgZ2VuZXJhdGVzIGEgdG9rZW4gZm9yIHRoZSBhcHAgYmFzZWQgb24gdGhlIEFBSUQuIElmIHRoZSBBQUlEIG9mIHRoZSBhcHAgY2hhbmdlcywgYSBuZXcgdG9rZW4gd2lsbCBiZSBnZW5lcmF0ZWQgbmV4dCB0aW1lIHdoZW4gdGhlIGFwcCBhcHBsaWVzIGZvciBhIHRva2VuLiBJZiBhbiBhcHAgbmVlZHMgdG8gcmVwb3J0IHN0YXRpc3RpY3MgZXZlbnRzLCBpdCBtdXN0IGNhcnJ5IHRoZSBBQUlEIGFzIGl0cyB1bmlxdWUgSUQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZ2V0SUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBvYnRhaW4gYW4gQUFJRCBpbiBhc3luY2hyb25vdXMgbW9kZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRBQUlEKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gb2J0YWluIGEgdG9rZW4gcmVxdWlyZWQgZm9yIGFjY2Vzc2luZyBIVUFXRUkgUHVzaCBLaXQuIElmIHRoZXJlIGlzIG5vIGxvY2FsIEFBSUQsIHRoaXMgbWV0aG9kIHdpbGwgYXV0b21hdGljYWxseSBnZW5lcmF0ZSBhbiBBQUlEIHdoZW4gaXQgaXMgY2FsbGVkIGJlY2F1c2UgdGhlIEhVQVdFSSBQdXNoIEtpdCBzZXJ2ZXIgbmVlZHMgdG8gZ2VuZXJhdGUgYSB0b2tlbiBiYXNlZCBvbiB0aGUgQUFJRC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIG9idGFpbiB0aGUgZ2VuZXJhdGlvbiB0aW1lc3RhbXAgb2YgYW4gQUFJRC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBnZXRDcmVhdGlvblRpbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBkZWxldGUgYSBsb2NhbCBBQUlEIGFuZCBpdHMgZ2VuZXJhdGlvbiB0aW1lc3RhbXAuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZGVsZXRlQUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGRlbGV0ZSBhIHRva2VuLiBBZnRlciBhIHRva2VuIGlzIGRlbGV0ZWQsIHRoZSBjb3JyZXNwb25kaW5nIEFBSUQgd2lsbCBub3QgYmUgZGVsZXRlZC4gVGhpcyBtZXRob2QgaXMgYSBzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZGVsZXRlVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzdWJzY3JpYmUgdG8gdG9waWNzIGluIGFzeW5jaHJvbm91cyBtb2RlLiBUaGUgSFVBV0VJIFB1c2ggS2l0IHRvcGljIG1lc3NhZ2luZyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNlbmQgbWVzc2FnZXMgdG8gbXVsdGlwbGUgZGV2aWNlcyB3aG9zZSB1c2VycyBoYXZlIHN1YnNjcmliZWQgdG8gYSBzcGVjaWZpYyB0b3BpYy4gWW91IGNhbiB3cml0ZSBtZXNzYWdlcyBhYm91dCB0aGUgdG9waWMgYXMgcmVxdWlyZWQsIGFuZCBIVUFXRUkgUHVzaCBLaXQgZGV0ZXJtaW5lcyB0aGUgcmVsZWFzZSBwYXRoIGFuZCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgY29ycmVjdCBkZXZpY2VzIGluIGEgcmVsaWFibGUgbWFubmVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcmcgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0by5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBzdWJzY3JpYmUoYXJnOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHVuc3Vic2NyaWJlIGZyb20gdG9waWNzIHRoYXQgYXJlIHN1YnNjcmliZWQgdG8gdGhyb3VnaCB0aGUgc3Vic2NyaWJlIG1ldGhvZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJnIFRvcGljIHRvIGJlIHVuc3Vic2NyaWJlZCB0by5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICB1bnN1YnNjcmliZShhcmc6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZGlzYWJsZSBhdXRvbWF0aWMgaW5pdGlhbGl6YXRpb24uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxzdHJpbmc+XHJcbiAgICovXHJcbiAgZGlzYWJsZUF1dG9Jbml0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZW5hYmxlIGF1dG9tYXRpYyBpbml0aWFsaXphdGlvbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBlbmFibGVBdXRvSW5pdCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgYXV0b21hdGljIGluaXRpYWxpemF0aW9uIGlzIGVuYWJsZWQuICBcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz5cclxuICAgKi9cclxuICBpc0F1dG9Jbml0RW5hYmxlZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKiogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB0ZXN0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPlxyXG4gICAqL1xyXG4gIHRlc3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byByZWNlaXZlIGRhdGEgbWVzc2FnZXMuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxQdXNoRGF0YT5cclxuICAgKi9cclxuICBvbk1lc3NhZ2VSZWNlaXZlZCgpOiBQcm9taXNlPFB1c2hEYXRhPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW50ZXJmYWNlIFB1c2hEYXRhIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn0iXX0=