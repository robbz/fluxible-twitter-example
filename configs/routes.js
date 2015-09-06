import fetchTweets from '../actions/fetchTweets';
import loadUserProfile from '../actions/loadUserProfile';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home'),
        action: function(context, payload, done) {
            const params = {q: 'beer'};
            context.executeAction(fetchTweets, params, done);
        }
    },
    profile: {
        path: '/users/:id',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/Profile'),
        action: function(context, payload, done) {
            const params = { 'user_id': payload.get('params').get('id')};
            context.executeAction(loadUserProfile, params, done);
        }
    }
};
