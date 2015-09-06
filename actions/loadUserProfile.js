function loadUserProfile(context, payload, done) {
    context.service.read('users', payload, {}, function (err, user) {
        if (err) {
            context.dispatch('RECEIVE_USER_FAILURE', err);
            return done();
        }

        context.dispatch('RECEIVE_USER_PROFILE', user);
        done();
    });
}

export default loadUserProfile;
