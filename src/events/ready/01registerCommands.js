// require("dotenv").config();
// const { REST, Routes } = require("discord.js");
const { testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = (client) => {
  const localCommands = getLocalCommands();

  console.log(localCommands); 
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
