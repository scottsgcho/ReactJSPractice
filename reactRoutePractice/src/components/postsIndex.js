import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                aaa
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {fetchPosts},
        dispatch
    );
}

export default connect(null,mapDispatchToProps)(PostIndex);
