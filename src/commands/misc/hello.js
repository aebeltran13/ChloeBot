module.exports = {
  name:'hello',
  description:'I\'ll respond with a random greeting.',
  //Options[]

  callback: async (client, interaction) => {
    const greetings = [
      "Hey Pookie 💋",
      "Hi sweety 💕",
      "Hola lola 🧍🏼‍♀️",
      "Whats up queerzilla! 🦎",
      "Hey guuwrrrl! 💗",
      "Hiiiii 🥰",
      "Hey gay! 🦄",
      "Heyyy, how r u!",
      "Oh wow... ok. Hiiii",
      "Oi!",
      "Howdy!",
      "Guid mornin",
      "Guid eenin",
      "How's it gauin?",
    ]

    const randomGreeting = greetings[Math.floor(
      Math.random() * greetings.length
      )];
    
    interaction.reply(randomGreeting);
  }
}