const request = require('request');
const config = require('./config.json');

const statuses = config.statuses;
var status_index = 0;

setInterval(() => {
    request({
        method: 'PATCH',
        url: 'https://discordapp.com/api/v6/users/@me/settings',
        json: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            'Authorization': config.token,
            'Content-Type': 'application/json'
        },
        body: {
            'custom_status': {
                'text': statuses[status_index++ % statuses.length],
                'expires_at': null
            }
        }
    })
}, 15000)
