
const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "devhakiHQ" //ur yt chanel name
global.socialm = "GitHub: hakisolos" //ur github or insta name
global.location = "Nigeria, Edo, Benin" //ur location

//new
global.botname = 'NIKKA-V2' //ur bot name
global.ownernumber = ['2349112171078'] //ur owner number, dont add more than one
global.ownername = 'KING HAKI' //ur owner name
global.websitex = "haki.us.kg"
global.wagc = "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L"
global.themeemoji = '⛩'
global.wm = "NIKKA-V2"
global.botscript = 'https://github.com/hakisolos/nikka-v2' //script link
global.packname = "KING"
global.author = "HAKI"
global.creator = "2349112171078@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349112171078"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '39' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
