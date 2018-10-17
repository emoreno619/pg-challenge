import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { createUser, fetchUser } from './module/actions';
import { getUsers } from './module/selectors';

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  createUser: id => dispatch(createUser(id)),
  fetchUser: id => dispatch(fetchUser(id)),
});


class User extends Component {
  componentWillMount(){
    const { createUser, fetchUser, match: { params } } = this.props;
    if(params.user_id){
      // createUser();
      fetchUser(params.user_id);
    }
  }

  render() {
    const { match: { params }, users } = this.props;
    return (
      <div className="App">
        <header className="User">
          <h1 className="App-title">User: {params.user_id}</h1>
        </header>
        <Link to="/">Home</Link>
        <p>
        Current Number of Users: {Object.keys(users).length}
        </p>
      </div>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(User);
