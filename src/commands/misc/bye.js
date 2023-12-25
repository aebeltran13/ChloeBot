module.exports = {
  name:'bye',
  description:'I\'ll reply with a random goodbye message.',
  // options: []

  callback: async ( client, interaction ) => {
    const goodbyes = [
      "Bye *Muah* 💋",
      "See you later sweety 💋",
      "Goodbye pookie 💋",
      "Bye twinkie 💋",
      "Have a good one zaddy 💋",
      "Cheerio! ☕",
      "Have a good one",
      "Until next time!",
      "Bon voyage les fwee 🍒",
      "Toodaloo ❣",
      "Live, Laugh, Love",
      "Toodles!",
      "Take care luv 💖",
      "Peace out gurl.",
      "You havent seen the last of me! 😈",
      "Maybe in another lifetime...",
      "xoxo gossip girl",
      "You know you love me XOXO 💋",
      "Adios",
      "Sayonara",
      "Go piss girl!",
    ]

    const randomGoodbye = goodbyes[Math.floor(
      Math.random() * goodbyes.length
    )];

    interaction.reply(randomGoodbye);
  }
}