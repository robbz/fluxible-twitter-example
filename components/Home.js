import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import TweetStore from '../stores/TweetStore';
import UserStore from '../stores/UserStore';
import Tweet from './Tweet';
import Profile from './Profile';
import SearchBox from './SearchBox';
import { ListGroup, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
    renderTweets(tweets) {
        return tweets.map((tweet) => <Tweet {...tweet} />);
    }

    renderProfile() {
        if(this.props.user) {
            return <Col lg={6}><Profile /></Col>;
        }
        return null;
    }

    render() {
        return (
            <div>
                <SearchBox />
                <Row>
                    <Col lg={this.props.user ? 6 : 12}>
                        {this.renderTweets(this.props.tweets)}
                    </Col>
                    {this.renderProfile()}
                </Row>
            </div>
        );
    }
}

Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default connectToStores(
    Home,
    [TweetStore, UserStore],
    function (context) {
        const tweetStore = context.getStore(TweetStore);
        const userStore = context.getStore(UserStore);
        return {
            tweets: tweetStore.getTweets(),
            user: userStore.getUserProfile()
        };
    }
);
