import Twit from 'twit';

const T = new Twit({
    consumer_key:         'N6KQkQD1dQTSpx4rO4P9ligYe',
    consumer_secret:      'UQ14ijIQVB9pb6e87Z4G8jRUUNGCgtay1z8UAthIIez4Hdc6fl',
    access_token:         '2305206038-DJlphfOQZSQRC5n6hS7ffdSMErfrn9dGyC7iqn8',
    access_token_secret:  '7BBJgWOigsmESmowF2NRnwak2iBOotPWz6BMk01VxKvaO'
})


const search = function(q, callback) {
    q += ' since:2015-07-08';
    T.get('search/tweets', { q, count: 25 }, function(error, tweets, response){
        if (!error) {
            return callback(tweets.statuses);
        }
        return console.log(error);
    });
}

const user = function(user_id, callback) {
    T.get('users/show', { user_id  }, function(error, profile, response){
        if (!error) {
            return callback(profile);
        }
        return console.log(error);
    });
}


export default {
    search,
    user
}
