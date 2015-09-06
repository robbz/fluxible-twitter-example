import BaseStore from 'fluxible/addons/BaseStore';

class TweetStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.tweets = [];
    }

    handleReceiveTweets(tweets) {
        this.tweets = tweets;
        this.emitChange();
    }

    getTweets() {
        return this.tweets;
    }

    dehydrate() {
        return {
            tweets: this.tweets
        };
    }

    rehydrate(state) {
        this.tweets = state.tweets;
    }
}

TweetStore.storeName = 'TweetStore';
TweetStore.handlers = {
    'RECEIVE_TWEETS_SUCCESS': 'handleReceiveTweets'
};

export default TweetStore;
