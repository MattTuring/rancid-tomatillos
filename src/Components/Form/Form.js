import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLoginState } from '../../actions';
import {postUser} from '../../fetchcalls';



export class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id:'',
      username: '',
      password: '',
      error: null,
      loggedIn: false
    }
  }

  login = () => {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ error: 'THE USERNAME OR PASSWORD IS INCORECT' })
    }
    postUser('https://rancid-tomatillos.herokuapp.com/api/v1/login')
      .then(data => { 
        this.setState({ id: data.user.id, loggedIn: true },() =>this.props.addLoginState(this.state))
        this.props.history.push(`/users/${data.user.id}/ratings`)
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <article className='login'>
        <label htmlFor='username'>USERNAME</label>
        <input name='username' id='username' type='text' placeholder='USERNAME' onChange={(event) => this.setState({username:event.target.value})}/>
        <label htmlFor='password'>PASSWORD</label>
        <input name='password' id='password' type='text' placeholder='PASSWORD' onChange={(event) => this.setState({password:event.target.value})}/>
        <button className='login-button' onClick={this.login}>LOG IN</button>
        {this.state.error}
      </article>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addLoginState: login => dispatch(addLoginState(login))
})

export default connect(null, mapDispatchToProps)(withRouter(Form))

