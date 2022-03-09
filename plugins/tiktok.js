let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSwWCk5o/`
    if (!/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(text)) throw `url salah!`
    let res = await fetch(API('lolhum', '/tiktok', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.videoHD, 'tiktok.mp4', json.deksripsi, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt)$/i

module.exports = handler
