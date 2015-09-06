import { user as twitterUser } from './lib/twitter';

const users = {
    name: 'users',
    // at least one of the CRUD methods is required
    read: function(req, resource, params, config, callback) {
        twitterUser(params.user_id, function(profile) {
            callback(null, profile);
        });
    }

    // create: function(req, resource, params, body, config, callback) {},
    // update: function(resource, params, body, config, callback) {},
    // delete: function(resource, params, config, callback) {}

};

export default users;
