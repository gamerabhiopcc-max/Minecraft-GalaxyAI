const mineflayer = require('mineflayer')
const config = require('../config.json')
const TestActionJump = require('./actions/TestActionJump')

const bot = mineflayer.createBot({
  host: config.host,
  port: config.port,
  username: config.username,
  version: config.version
})

bot.on('spawn', () => {
  console.log('✅ Bot joined the server!')
})

bot.on('end', () => {
  console.log('❌ Bot disconnected')
})

bot.on('error', (err) => {
  console.log('⚠️ Error:', err.message)
})
bot.on('chat', (username, message) => {

    if (username === bot.username) return

    if (message === '!jump') {
        TestActionJump.execute(bot)
    }

})
