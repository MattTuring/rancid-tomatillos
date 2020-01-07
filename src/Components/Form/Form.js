import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserState, addRatings, changeLoading } from '../../actions';
import { postUser, getRatings } from '../../fetchcalls';
import PropTypes from 'prop-types';

export class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id:'',
      username: '',
      passwordLength: '',
      error: null,
      loggedIn: false,
      password: null
    }
  }

  login = () => {
    if (this.state.username === '' || this.state.passwordLength > 0) {
      this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
    }
    this.props.changeLoading();
    postUser('https://rancid-tomatillos.herokuapp.com/api/v1/login', {email: this.state.username, password: this.state.password})
      .then(data => {
        this.setState({ id: data.user.id, loggedIn: true },() =>this.props.addUserState({
          id: this.state.id,
          username: this.state.username,
          ratings: [],
          loggedIn: this.state.loggedIn,
          password: null
        }))
        this.props.history.push(`/users/${data.user.id}`)
        getRatings(this.state.id)
          .then(data => {
            this.props.addRatings(data);
            this.props.changeLoading();
          })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <article className='login'>
        <label htmlFor='username'>USERNAME</label>
        <input name='username' id='username' type='text' placeholder='USERNAME' onChange={(event) => this.setState({username:event.target.value})}/>
        <label htmlFor='password'>PASSWORD</label>
        <input name='password' id='password' type='password' placeholder='PASSWORD' onChange={(event) => {this.setState({password:event.target.value}); this.setState({passwordLength:event.target.value.length});}}/>
        <button className='login-button' onClick={this.login}>LOG IN</button>
        {this.state.error}
      </article>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addUserState: userinfo => dispatch(addUserState(userinfo)),
  addRatings: (ratings) => dispatch(addRatings( ratings )),
  changeLoading: () => dispatch(changeLoading())
})

export default connect(null, mapDispatchToProps)(withRouter(Form))

Form.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  passwordLength: PropTypes.number,
  error: PropTypes.string,
  loggedIn: PropTypes.bool,
  password: PropTypes.string,
}
