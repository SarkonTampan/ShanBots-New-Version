
const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\

global.ownerlen = "إحسان"
global.owner = ['6283146993017'] 
global.ownername = "إحسان"
global.ytname = "FB: X Shan"
global.socialm = "IG: malasnulisnamapengguna"
global.location = "Indonesia, Jawatimur, Tuban"
global.ownernomer = "6283146993017"
global.premium = ['6283146993017']
global.botname = 'ShanBots' 
global.linkz = "https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg"
global.websitex = "-"
global.botscript = '-'
global.themeemoji = "☞"
global.packname = "Sticker By"
global.author = "ShanBots × إحسان"
global.wm = "ShanBots × إحسان"
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done ✓ Ya kak 🙏', //ubah aja make bhs indo terserahhh karepmu
    admin: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin',
    botAdmin: '< ❗ > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin',
    premime: '< ❗ > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
    owner: '< ❗ > [ Anda Bukan Owner Saya -_- ] jangan Menggunakan Fitur ini !!!!!!',
    group: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!',
    private: '< ❗ > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat',
    bot: '< ❗ > Fitur Khusus Bot',
    wait: 'Permintaan mu sedang diproses, Sabar yakak, Jika bot tidak merespon berarti bot terjadi error!',
    linkm: '< ❗ > Linknya mana kak?',
    endLimit: '< ❗ > Limit Kamu Telah Habis!! Tunggu jam 12 Jam Atau bisa membeli paket Limit',
    nsfw: '< ❗ > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 12, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
