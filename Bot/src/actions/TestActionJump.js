function execute(bot) {
    bot.setControlState('jump', true)

    setTimeout(() => {
        bot.setControlState('jump', false)
    }, 500)
}

module.exports = {
    execute
}
