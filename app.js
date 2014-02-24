
var request = require('request'),
    api     = '62295455d4475a849cd5b956d5bf0323',
    url     = 'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=egoist&api_key='+api+'&format=json';

var option = {
    url: url,
    json: true
};

request.get(option, function (err, res, body) {
    if(!err && res.statusCode == 200) {
        var artists = body.similarartists.artist;
        for(var i in artists) {
            console.log(artists[i].name);
            console.log(artists[i].match);
            console.log(artists[i].url);
        }
    } else {
        console.log('error: ' + res.statusCode);
    }
});
