// const redis = require('redis')
// const client = redis.createClient()
// const client = redis.createClient(port, host)
// client.on('connect', function () {
//   console.log('Redis client connected')
// })
// client.on('error', function (err) {
//   console.log('Something went wrong ' + err)
// })

const redis = require('redis')
const config = require('./config')

const client = redis.createClient(config.redis)

module.exports = client

// client.set('my test key', 'my test value', redis.print);
// client.get('my test key', function (error, result) {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     console.log('GET result ->' + result);
// })
