const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config();

//Responses
const {handleGreeting} = require('./responses/greetings');
const {handleGoodbye} = require('./responses/goodbye');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.once('ready', (c) => {
    console.log(`${c.user.tag} has awoken... 👧🏼`);
})

client.on('messageCreate', (message) =>{
    // Check if message is by human
    if(message.author.bot){
        return;
    }

    handleGreeting(message);
    handleGoodbye(message);
})

client.login(process.env.DISCORD_BOT_TOKEN);
