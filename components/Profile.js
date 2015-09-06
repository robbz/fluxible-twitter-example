import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import UserStore from '../stores/UserStore';
import { Row, Col, Panel } from 'react-bootstrap';

class Profile extends React.Component {
    render() {
        if(!this.props.profile) {
            return null;
        }
        const src = this.props.profile.profile_image_url_https.replace('_normal', '');
        return (
            <Panel>
                <Row>
                    <Col lg={6}><img width='100%' src={src} /></Col>
                    <Col lg={6}>
                        <h2>{this.props.profile.screen_name}</h2>
                        <h3>{this.props.profile.location}</h3>
                        <p>{this.props.profile.friends_count} Following</p>
                        <p>{this.props.profile.followers_count} Followers</p>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

Profile.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

// You can (and should) pass the profile from the home-page-component.
// This is just an example to demonstrate multiple components connected to one store.. :-)
export default connectToStores(
    Profile,
    [ UserStore ],
    function (context) {
        var userStore = context.getStore(UserStore);
        return {
            profile: userStore.getUserProfile()
        };
    }
);
