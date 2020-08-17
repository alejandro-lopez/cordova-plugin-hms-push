"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const utils_1 = require("./utils");
let HMSPush = "HMSPush";
function turnOnPush(args) {
    return run("turnOnPush", args);
}
exports.turnOnPush = turnOnPush;
function turnOffPush(args) {
    return run("turnOffPush", args);
}
exports.turnOffPush = turnOffPush;
function getID(args) {
    return run("getID", args);
}
exports.getID = getID;
function getAAID(args) {
    return run("getAAID", args);
}
exports.getAAID = getAAID;
function getToken(args) {
    return run("getToken", args);
}
exports.getToken = getToken;
function getCreationTime(args) {
    return run("getCreationTime", args);
}
exports.getCreationTime = getCreationTime;
function deleteAAID(args) {
    return run("deleteAAID", args);
}
exports.deleteAAID = deleteAAID;
function deleteToken(args) {
    return run("deleteToken", args);
}
exports.deleteToken = deleteToken;
function subscribe(args) {
    return run("subscribe", args);
}
exports.subscribe = subscribe;
function unsubscribe(args) {
    return run("unsubscribe", args);
}
exports.unsubscribe = unsubscribe;
function disableAutoInit(args) {
    return run("disableAutoInit", args);
}
exports.disableAutoInit = disableAutoInit;
function enableAutoInit(args) {
    return run("enableAutoInit", args);
}
exports.enableAutoInit = enableAutoInit;
function isAutoInitEnabled(args) {
    return run("isAutoInitEnabled", args);
}
exports.isAutoInitEnabled = isAutoInitEnabled;
function test(args) {
    return run("test", args);
}
exports.test = test;
function onMessageReceived(args) {
    return run("onMessageReceived", args);
}
exports.onMessageReceived = onMessageReceived;
function run(funcName, args) {
    return utils_1.asyncExec(HMSPush, funcName, [args]);
}
//# sourceMappingURL=HMSPush.js.map