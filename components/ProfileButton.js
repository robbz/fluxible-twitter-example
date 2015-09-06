import React from 'react';
import { navigateAction } from 'fluxible-router';
import { Button } from 'react-bootstrap';

class ProfileButton extends React.Component {
    loadProfilePage() {
        this.context.executeAction(navigateAction, { url: '/users/' + this.props.userId });
    }
    render() {
        return (
            <Button style={{float: 'right'}} onClick={this.loadProfilePage.bind(this)}>
                Profile Page
            </Button>
        );
    }
}

ProfileButton.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default ProfileButton;
