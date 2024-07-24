const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348105439967";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_44_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicloxRG1vMUNuNG1GOVFxMk52elBIWVJGc0ZNd2FNMjZZbkZLT1h3U1orWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA1NDM5OTY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTIzNUJBMUJCRDMwRkQ3NzFBM0JGNEExQUZCQTc5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MzIyODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA1NDM5OTY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MzUzQzJEMzlCMTQ5RUJERjk4NjZGMDM3RDlCMUQwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MzIyODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUJQY1ZWQlNRd3VoOUYybTJMVzBGZ1wiLFxuICBcInBob25lSWRcIjogXCI2MzEwYWQ2Mi1mMjBlLTQ2M2EtODczNy1jZjlmZDkwYmRmMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTg1LFxuICAgICAgNTgsXG4gICAgICA5NCxcbiAgICAgIDE0LFxuICAgICAgNDYsXG4gICAgICAxOTAsXG4gICAgICAxNTksXG4gICAgICA5OCxcbiAgICAgIDEzNCxcbiAgICAgIDE4MCxcbiAgICAgIDY5LFxuICAgICAgMTYxLFxuICAgICAgMTc2LFxuICAgICAgMTg3LFxuICAgICAgMTkwLFxuICAgICAgMTAyLFxuICAgICAgMTMyLFxuICAgICAgNTksXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDExNSxcbiAgICAgIDI1MSxcbiAgICAgIDI0OCxcbiAgICAgIDE2OSxcbiAgICAgIDIzLFxuICAgICAgMTgxLFxuICAgICAgNTksXG4gICAgICAxNTEsXG4gICAgICA3NSxcbiAgICAgIDQxLFxuICAgICAgMjQ2LFxuICAgICAgNDcsXG4gICAgICAxNzQsXG4gICAgICAxODUsXG4gICAgICAxNTQsXG4gICAgICAyNDYsXG4gICAgICAxNzEsXG4gICAgICAxMTYsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXc3daVUNFTlNtaExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3kwa1FDTWZFTFlZc1RGeUNsMGRlWEtjRmM1dXh4TFoveVRlUzZwT01Uaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5RWpwNCs3eUVaYXI2R0NDUEw5RjJkbjJiNkpTV0tHOExFRlFwc1NaUlI3L2FLZlFGRmxLK2x5UklHU0ZjbXhHTnF4VUoySllIZExaVVM1blBkN2JDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4ME15OVhaeVN4aVdyTWFGZmVQYytDa0liNE53MVpaTlBGZjc5bTJXeittV2UxdWFSQ0swN1A3ckM3cGtMOXpSZENGUGN4NW0wZGZVSWE0YlRCYjBoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDU0Mzk5Njc6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjA4ODI1MjkwOTQzOjI2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlonwnZaL8J2WnH7wnZWw8J2VvfCdlbDwnZW58J+MgFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNTQzOTk2NzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODMyMjgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFJVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCMDlHaVVmS3lTRGNzSGV6bEJIVlBMcmRpMUNiSWdDZS9qK1EzbjNNZGZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU4MTk4MTcwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODMyMjgzODU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
