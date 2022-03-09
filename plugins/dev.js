function handler(m) {
  this.sendContact(m.chat, '62895369318181@s.whatsapp.net', this.getName('62895369318181@s.whatsapp.net'), m)
  //return m.reply (`Halo kak @${m.sender.split`@`[0]} ini nomor developer botku jangan diapa apain ya kak 😖`)
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^((creator|dev(eloper)?)(bot)?)$/i

module.exports = handler
