const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256774856806";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_59_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3d2NZS0E3M3lDK3EyeERCbkk0WDdMRHVYdEJsOHRNallFVUREVE13NGtNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrcGR6ZzJoSVJMR0ZQdlNtSDB0eE1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1NzI0ODNhLWEyOWUtNDgyNS05MzljLWU0ZjRlMjYzMDhmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDEwOCxcbiAgICAgIDM0LFxuICAgICAgMzQsXG4gICAgICA1OSxcbiAgICAgIDIxNyxcbiAgICAgIDE4NSxcbiAgICAgIDM2LFxuICAgICAgMTU2LFxuICAgICAgMTM0LFxuICAgICAgMTU2LFxuICAgICAgMTA3LFxuICAgICAgODUsXG4gICAgICAxNzksXG4gICAgICAxNzQsXG4gICAgICA3MSxcbiAgICAgIDI5LFxuICAgICAgMjE5LFxuICAgICAgMTcwLFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMjEzLFxuICAgICAgMjM3LFxuICAgICAgMzIsXG4gICAgICAxODQsXG4gICAgICA4LFxuICAgICAgMTMzLFxuICAgICAgMTkxLFxuICAgICAgMTczLFxuICAgICAgMTMyLFxuICAgICAgMTgzLFxuICAgICAgMjU1LFxuICAgICAgNjcsXG4gICAgICA1OSxcbiAgICAgIDIwOSxcbiAgICAgIDEwMixcbiAgICAgIDEwMixcbiAgICAgIDIxNSxcbiAgICAgIDE5OCxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWEdRRE5IUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzc0ODU2ODA2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJkYXZpXCIsXG4gICAgXCJsaWRcIjogXCIxOTUwMDA2NTg4Nzg1NjQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVGQ3NjhERU95SnQ3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFmOCttOHdtNVBlOURRaWpqeVQ1MFpQTy82UjNDa29QbDZHd0pTejJhVFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzR1S1VpZ0hodnZKcVhpN0MyMVN3VHhJeUp3Rm9KSFFTc1BzelZwUFVnbEJUVmJKVDJNZVNwNmlwSkJFRVRrN1ZCc0ZOUnlkbEs5Y2NUZWM2dFhRRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWkNsZkVDZlZEam1iVUJzekFUMzdXb1o2bkpVaVFnajhTaHVKdUNUdFUzeHVGMGt1UkRXVTgyYTE3OWM3RFVpQktpaWU5VGxYRlhoVmk5SmFUZko0aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzc0ODU2ODA2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwNTI3ODVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LAUNCHER-MD",
  ownername:process.env.OWNER_NAME|| "LAUNCHER-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
