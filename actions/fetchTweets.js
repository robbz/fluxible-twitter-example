function fetchTweets(context, payload, done) {
    context.service.read('tweets', payload, {}, function (err, tweets) {
        if (err) {
            context.dispatch('RECEIVE_TWEETS_FAILURE', err);
            return done();
        }

        context.dispatch('RECEIVE_TWEETS_SUCCESS', tweets);
        done();
    });
}

export default fetchTweets;
