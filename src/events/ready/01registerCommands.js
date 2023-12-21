// require("dotenv").config();
// const { REST, Routes } = require("discord.js");
const { testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = (client) => {
  
  try {
    const localCommands = getLocalCommands();
    // Stopped
    const applicationCommands = 
    // This is the last part of makng a logical registering commands part of the 
    // 'Under Ctrl' youtubr chnnel tutorial on how to make a bot.
    // Creating new file for utilts to get application commmandss
    // TODO: 18:50 video. This is a tutorial break. Tutorial going fast asf so im stoping here to 
    // to continue tomeeo which is another day to do Chloe bot basis. I will do separate 
    // commands to make chloe my bot and not just a copy paste tutorial.
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
};

// const commands = [
//   {
//     name: "ping",
//     description: "Pong!",
//   },
// ];

// const rest = new REST({ version: "10" }).setToken(
//   process.env.DISCORD_BOT_TOKEN
// );

// (async () => {
//   try {
//     await rest.put(
//       Routes.applicationGuildCommands(
//         process.env.CLIENT_ID,
//         process.env.GUILD_ID 
//       ),
//       { body: commands }
//     );

//     console.log("Slash commmands were registered succesfully");
//   } catch (error) {
//     console.log(`There was an error: ${error}`);
//   }
// })();
