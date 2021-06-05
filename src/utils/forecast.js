const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c1cd39607775825e3b6e000afc97d0e3&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '°C with a thermal sensation of ' + body.current.feelslike + '°C. The humidity is ' + body.current.humidity + '%.'
            )
        }
    })
}

module.exports = forecast