import { search as twitterSearch } from './lib/twitter';

const tweets = {
    name: 'tweets',
    // at least one of the CRUD methods is required
    read: function(req, resource, params, config, callback) {
        twitterSearch(params.q, function(tweets) {
            callback(null, tweets);
        });
    }

    // create: function(req, resource, params, body, config, callback) {},
    // update: function(resource, params, body, config, callback) {},
    // delete: function(resource, params, config, callback) {}

};

export default tweets;
