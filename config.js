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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_16_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTanJjMytGZTJGazBQdDdBTFo2Q2tnejRiUUFJTFdLUCthNFp3MjJGL3NJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDU0Mzk5NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjczOUM3RDUyQUJFODQzNjFDREJFRTI4NkU1MjcxMjcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY3MjE1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuN2JGaVBoc1NRQ1BaVGYzaFV3eU53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyYWMwM2RiLWU2ZWYtNDU2Zi04MjY4LWVmODAyMzU4MmViMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA5LFxuICAgICAgMTQyLFxuICAgICAgMTcwLFxuICAgICAgMjEzLFxuICAgICAgNzIsXG4gICAgICAxMzcsXG4gICAgICA2NyxcbiAgICAgIDQ1LFxuICAgICAgMTgyLFxuICAgICAgODIsXG4gICAgICAyNTQsXG4gICAgICAyMjMsXG4gICAgICAxNTksXG4gICAgICAyNDcsXG4gICAgICAyMzcsXG4gICAgICAxNzcsXG4gICAgICA4MSxcbiAgICAgIDYxLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDE5NSxcbiAgICAgIDY3LFxuICAgICAgMjAyLFxuICAgICAgMTk5LFxuICAgICAgNixcbiAgICAgIDMwLFxuICAgICAgNzYsXG4gICAgICAyMDUsXG4gICAgICA2MSxcbiAgICAgIDIxMixcbiAgICAgIDMwLFxuICAgICAgMTE3LFxuICAgICAgMzIsXG4gICAgICAyMTIsXG4gICAgICAxMTIsXG4gICAgICA0NSxcbiAgICAgIDE1NSxcbiAgICAgIDIxMixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW16NzZ3RUVOWEQrclFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwS2FLUEpSdittdmtkY0NwVkpUeTNzbDhoMnpNVzZyTWs0a2tLblo1WEJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN6cXJOWXk0dEh5NVlza0pNeEdRYmExQUhwZktLS0ZETEZ4c1lTNCsxaGkyUVpZTEhTT3F2NVNKaE02RVg3OFJMMW51SDh4NVJPYkRadG1ndHJBdENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhkRDZrQ0NZWitIbWNxOTR4Y0YxZE5mQVpGNlJORkdwZWxUcnJwR1VNYWFvRkQwRnRIWTZrNTNhWHBhUVJ4UlRKOER4QTdPOGg2TXBqSWU5Rjd6VWp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNTQzOTk2NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI2MDg4MjUyOTA5NDM6MjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA1NDM5OTY3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NzIxNTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFbTNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVtMy5qc29uIjogIntcImtleURhdGFcIjpcIjg4Mk1KeXhlTi9DU2ZFcXphSFNlUWExcDUvdDgyLzJvdVBmSkErWUlaZ0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2Nzg0MTczNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW00Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib0JiYWhyKzR6MDM2MHFkMkRNRHlrS3EyVHhZMUp0Tmh3RjJPRllsbk1qYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY3ODQxNzM3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbTUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlSFdNM2ErUmtwT2FyVDR4Y3RuUHpnM01TRm90VFZSL2FyY2k3RFBtekZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjc4NDE3MzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY3MTgzNzk2MFwifSIKfQ=="  // PUT your SESSION_ID 


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
