import React from 'react';
import loadUserProfile from '../actions/loadUserProfile';
import { Button } from 'react-bootstrap';

class ShowProfile extends React.Component {
    loadProfilePage() {
        this.context.executeAction(loadUserProfile, { 'user_id': this.props.userId });
    }
    render() {
        return (
            <Button bsStyle='primary' style={{float: 'right'}} onClick={this.loadProfilePage.bind(this)}>
                Profile right-side
            </Button>
        );
    }
}

ShowProfile.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default ShowProfile;
