import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchUserDetail } from './module/actions'

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchUserDetail: id => dispatch(fetchUserDetail(id)),
});


class User extends Component {
  componentWillMount(){
    const { fetchUserDetail, match: { params } } = this.props;
    if(params.user_id){
      fetchUserDetail(params.user_id);
    }
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div className="App">
        <header className="User">
          <h1 className="App-title">User: {params.user_id}</h1>
        </header>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(User);
