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
 import { asyncExec as exec } from './utils'

 let HMSPush: string = "HMSPush";
 
 export function turnOnPush(args: string): Promise<string> {
     return run("turnOnPush", args);
 }
 
 export function turnOffPush(args: string): Promise<string> {
     return run("turnOffPush", args);
 }
 
 export function getID(args: string): Promise<string> {
     return run("getID", args);
 }
 
 export function getAAID(args: string): Promise<string> {
     return run("getAAID", args);
 }
 
 export function getToken(args: string): Promise<string> {
     return run("getToken", args);
 }
 
 export function getCreationTime(args: string): Promise<string> {
     return run("getCreationTime", args);
 }
 
 export function deleteAAID(args: string): Promise<string> {
     return run("deleteAAID", args);
 }
 
 export function deleteToken(args: string): Promise<string> {
     return run("deleteToken", args);
 }
 
 export function subscribe(args: string): Promise<string> {
     return run("subscribe", args);
 }
 
 export function unsubscribe(args: string): Promise<string> {
     return run("unsubscribe", args);
 }
 
 export function disableAutoInit(args: string): Promise<string> {
     return run("disableAutoInit", args);
 }
 
 export function enableAutoInit(args: string): Promise<string> {
     return run("enableAutoInit", args);
 }
 
 export function isAutoInitEnabled(args: string): Promise<string> {
     return run("isAutoInitEnabled", args);
 }
 
 export function test(args: string): Promise<string> {
     return run("test", args)
 }
 
 export function onMessageReceived(args: string):Promise<PushData> {
     return run("onMessageReceived", args)
 }
 
 
 
 function run(funcName: string, args: string) {
     return exec(HMSPush, funcName, [args])
 }
 
 
 interface PushData{
     [key:string]:any;
 }