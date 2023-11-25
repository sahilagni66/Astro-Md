const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '923184474176';
global.mongodb = process.env.MONGODB_URI  || "mongodb+srv://danielpeter:beka10beka10@cluster0.ef032ix.mongodb.net/?retryWrites=true&w=majority"; // replace this with you own monogo db ;
global.DATABASE_URI = process.env.DATABASE_URI || "" ; // link toyour online database, if you don't have one then ignore";
global.port= false //i recommend you use false to avoid boot loops, and errors, you can use if your server is 24hrs up time ; 
global.audio = '' ; //link to your audio, file
global.video = '' ; //link to your video file
global.blockJids = process.env.BLOCK_JID || "120363023983262391@g.us" ;
global.allowJids = process.env.ALLOW_JID || "null" ;//'120363022922797633@g.us' ;
global.email = 'soccerboys01@hotmail.com' ; //you can replace you email if you want;
global.location = 'Africa Lagos' ; //make sure to research your accurate timezone, if not the bot won't boot at all;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos' //the same thing here, espcially this one;
global.gurl =  process.env.GURL || 'https://github.com/Dannnyy0' ; //you can replace this with your username or anything that's a webite link;
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '2348039607375,2349027862116'; //put the numbers you want to have more bot features working for;
global.devs = "2348039607375"; //Dont change it, this is needed to recive errors and reports
global.github  = process.env.YOUR_GITHUB || 'https://github.com/Dannnyy0'; //you can replace it lol
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1'; //the place to scan for your seesion id lol
global.website = 'https://github.com/Dannnyy0' ; //wa.me/+2348039607375
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://fidgety-header.000webhostapp.com/_208c5944-7922-4286-87fd-90d89f1400e3.jfif' ; //don't touch this!!!!!!!

module.exports = {
  sessionName: process.env.SESSION_ID || "", //put the session id you recived in your dm here!!
  botname: process.env.BOT_NAME || 'ᴀꜱᴛʀᴏ ᴍᴅ', //for the bot name
  ownername: process.env.OWNER_NAME || `Astro-Md`, //your name
  author: process.env.PACK_AUTHER || '*Atro-Md*', //sticker pack author
  packname: process.env.PACK_NAME || "astro bot",  //sticker pack name
  style: process.env.STYLE || '1',  // put '1' & "2" here to check bot styles
  errorChat: process.env.ERROR_CHAT || 'server error', // put 'chat' here to send error in chat ,anytime something goes wrong
  read_status: process.env.AUTO_READ_STATUS || 'true', //to auto view status
  save_status: process.env.AUTO_SAVE_STATUS || 'false', //to auto save status

  autoreaction: process.env.AUTO_REACTION || 'cmd',  //  | 'cmd' | 'true' | 'all' |
  //antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || 'available', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  //antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212', //put country code to always kick from group example: .kik 234
  readmessage: process.env.READ_MESSAGE || 'true',   //  | 'false' | 'true' | //this will read all your chats
  readcmds: process.env.READ_COMMANDS || 'true',    //  | 'false' | 'true' |  //this will only read commands not your chats
  HANDLERS: process.env.PREFIX || '.', //this is the your code to use the bot || . , ! $ / ||
  warncount: process.env.WARN_COUNT || '3', //this to warn a spammer
  disablepm: process.env.DISABLE_PM || "true", // this is to disable dm
  MsgsInLog: process.env.MSGS_IN_LOG || 'log', // "true"  to see messages , "log" to open logs messages , "false" to hide logs messages
  // pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'true',
  // levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',  //  | 'false' | 'true' | 
  antilink_values: process.env.ANTILINK_VALUES || 'https://.chat.whatsapp.com', //for antilink
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "", //removebacground api key
  caption: process.env.CAPTION || "```ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀꜱᴛʀᴏ²²¹-ᴍᴅ```",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY, //get your chatgpt openai api key
  userImages: process.env.USER_IMAGES || "https://fidgety-header.000webhostapp.com/_208c5944-7922-4286-87fd-90d89f1400e3.jfif",// 'https://i.imgur.com/NpA3ZsJ.jpeg,https://telegra.ph/file/d9a63ef4f8110a6d87167.mp4,https://telegra.ph/file/41c41e73c1c5f11bdb1df.mp4,https://telegra.ph/file/acaba47a11c6975248c84.mp4' ,
  // antiDelete: process.env.ANTIDELETE ||  'true' ,
   antiCallMessage: process.env.ANTICALL_MESSAGE ||  "\`\`\`Hello this is Astro-Md a Personal Assistant!!\n\n\tSorry for now, we cannot receive calls, whether in a group or personal \n\n if you need help or request features please chat owner.`" ,
  VERSION: process.env.VERSION || 'v.1.2.3',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'ASTRO',
  menu: process.env.MENU || 'Suhail-Md Default', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
  KOYEB_API: process.env.KOYEB_API || '',

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY && process.env.DATABASE_URI,

  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || 'c7ba2eb2143e5904569fd7f8363ed886',
  aitts_Voice_Id: process.env.AITTS_ID || '37',
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update'${__filename}'`)
    delete require.cache[file]
  require(file)
})

