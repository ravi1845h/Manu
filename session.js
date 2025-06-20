//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VzUG9iQWt1UGZaQ3ViZFRrMXIwNFVrZUJQcnZvV3BGbFhGajEyeW9tVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hIWUJGbExNdXBCZkkzdHo5enJJM09hc1liejFFaVpUTU5nQkprdk1pZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQVFKaGpCZjd5L3B0bk1KYkZpcnF2ZWVsQ1NOOEE2R013TEFqNTl5MUgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxOXlESVc3RGsxVG5NKzgvU3NXTTRRSzlnaERRbCs4SGU1ZTZTbEtoUG44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNESlgwek83SkJrTDl2TTlDMUc1YzdOL2kzYlFhNW9XL3Vra3c3M0dGVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCRTVIN3BROHNxaUk2ZXo5eEl0VEl3QTQzV1RqdWF5VlpGNVEva3VwaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RCaUxQbmF2TjhPNmNPUWh6TjI0ZkVtdTRNY093M3Baa0ZTbjJ4R0ZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE5ONGtqdVd2eWpEZE8waXFFdTlWRjJpZys4MThPUGpTZngvSlIwT0ZSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjSnlKbEZlREtvUDN4UzQwbkZKWXlabHNQL28xS0Q0dERjRjc3VHZaSTBycjQ0Mzg2YU5icEtHYno5aWF1VExxN1V4c1YydUZvekMrblprZE9VM2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IjY3WjhwR0RGcVoxREIyYkIvTXl6bEZRWTlud3E2dU0vUURTUmJHeGdxTWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDIwNzM0NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjlCM0MwMTBBN0EyOEU1QUY0OTM0ODdCMjQ1MUMzRTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDM5MjY1M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDIwNzM0NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODE2NzZCRTMwQTVCQkE1MTE3QkM4N0NFNzIwOTE3RjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDM5MjY1M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiellkRlNPNkdRc1doS1hqWHNWUXhfUSIsInBob25lSWQiOiJmNTg2NWJmZi1kODdkLTQzZjktOGNkOC0wNDQ2ZmI1NjY4YjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDU3WU0rNVpNSHNqTVRkSWtFUDlKeFBKZzdFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HL0JESy8vZ1RzTS9QTGYxV1VQR2tOalA5ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDWEhDTjZCQSIsIm1lIjp7ImlkIjoiOTQ3NDIwNzM0NDk6MjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjU5MjgwNTg3OTAwNzc6MjRAbGlkIiwibmFtZSI6Ik9yIE1vdmllIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYUd3TmtIRUwyKzA4SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2V2VJS2xFOGY3d1p6REN5Wm9Xd1o0YXVTUS9zZzZha2FqTDNnRXhwL1V3PSIsImFjY291bnRTaWduYXR1cmUiOiIxRWplWGVzbVJZcU1GdW00Y2x0NjRSNDY5amdyV0tNL1MwSFhPNy96RTlBd2JGZC9xTWpQNCtEZ3lQK3YxRzdEZ0haa043cG1iSmR5Z09VSGdwK05CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRVk5aGNQcE1oUFk1eUlqM0FscnhTWWdTWWJzck1NZlZtVWtGVnBnVFNzR2JUakNMMTVuakVNQ0wxOWtXNU5lN0lrbTMzSXJjUXkzMDBwUDVMV005Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MjA3MzQ0OToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlbG5pQ3BSUEgrOEdjd3dzbWFGc0dlR3Jra1A3SU9tcEdveTk0Qk1hZjFNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzOTI2NTAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmJnIn0= ",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94 74 207 3449",
  PASSWORD: 
    process.env.PASSWORD || "oshada2007",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
