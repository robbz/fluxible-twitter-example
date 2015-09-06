import BaseStore from 'fluxible/addons/BaseStore';

class UserStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.userProfile = null;
    }

    receiveUserProfile(userProfile) {
        this.userProfile = userProfile;
        this.emitChange();
    }

    getUserProfile() {
        return this.userProfile;
    }

    dehydrate() {
        return {
            userProfile: this.userProfile
        };
    }

    rehydrate(state) {
        this.userProfile = state.userProfile;
    }
}

UserStore.storeName = 'UserStore';
UserStore.handlers = {
    RECEIVE_USER_PROFILE: 'receiveUserProfile'
};

export default UserStore;
