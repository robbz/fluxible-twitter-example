import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import TweetStore from './stores/TweetStore';
import UserStore from './stores/UserStore';
import fetchrPlugin from 'fluxible-plugin-fetchr';
// create new fluxible instance
const app = new Fluxible({
    component: Application
});

//register fethr plugin
app.plug(fetchrPlugin({
    xhrPath: '/api' // Path for XHR to be served from
}));

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(TweetStore);
app.registerStore(UserStore);

module.exports = app;
