import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import Button from './ProfileButton';
import ShowProfile from './ShowProfile';

class Tweet extends React.Component {
    render() {
        return (
            <Panel>
                <Row>
                    <Col sm={8}>{this.props.text}</Col>
                    <Col sm={2}>
                        <Button userId={this.props.user.id} />
                    </Col>
                    <Col sm={2}>
                        <ShowProfile userId={this.props.user.id} />
                    </Col>
                </Row>
            </Panel>
        );
    }
}

Tweet.propTypes = {
    text: React.PropTypes.string.isRequired
};

Tweet.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Tweet;
