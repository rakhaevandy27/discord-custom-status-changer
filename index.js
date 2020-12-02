const { request } = require('gaxios');
const config = require('./config.json');

const statuses = config.statuses;
var status_index = 0;

setInterval(() => {
    const settings = {
        method: 'PATCH',
        url: 'https://discordapp.com/api/v6/users/@me/settings',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            'Authorization': config.token,
            'Content-Type': 'application/json'
        },
        data: {
            'custom_status': {
                'text': statuses[status_index++ % statuses.length],
                'expires_at': null
            }
        }
    }
    request(settings);
    console.log('status updated')
}, 15000)


