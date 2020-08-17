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

export declare function turnOnPush(args: string): Promise<string>;
export declare function turnOffPush(args: string): Promise<string>;
export declare function getID(args: string): Promise<string>;
export declare function getAAID(args: string): Promise<string>;
export declare function getToken(args: string): Promise<string>;
export declare function getCreationTime(args: string): Promise<string>;
export declare function deleteAAID(args: string): Promise<string>;
export declare function deleteToken(args: string): Promise<string>;
export declare function subscribe(args: string): Promise<string>;
export declare function unsubscribe(args: string): Promise<string>;
export declare function disableAutoInit(args: string): Promise<string>;
export declare function enableAutoInit(args: string): Promise<string>;
export declare function isAutoInitEnabled(args: string): Promise<string>;
export declare function test(args: string): Promise<string>;
export declare function onMessageReceived(args: string): Promise<PushData>;
interface PushData {
    [key: string]: any;
}
export {};
