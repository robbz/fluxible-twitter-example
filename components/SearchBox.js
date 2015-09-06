import React from 'react';
import { Row, Col, Input, Button } from 'react-bootstrap';
import fetchTweets from '../actions/fetchTweets';

class SearchBox extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            query: ''
        };
    }

    handleSearch() {
        this.context.executeAction(fetchTweets, { q: this.state.query });
    }

    handleChange() {
        this.setState({ query: this.refs.search.getValue()});
    }

    render() {
        return (
            <Row>
                <Col sm={10}>
                    <Input type='text' bsSize='large' ref='search' defaultValue='beer' onChange={this.handleChange.bind(this)}/>
                </Col>
                <Col sm={2}>
                    <Button bsSize='large' bsStyle='success' onClick={this.handleSearch.bind(this)}>Search</Button>
                </Col>
            </Row>
        );
    }
}

SearchBox.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default SearchBox;
