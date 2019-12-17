import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: null
    }
  }

  login = () => {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({error: 'THE USERNAME OR PASSWORD IS INCORECT'})
    }
  }

  render(){
    return (
      <article className='login'>
        <label for='username'>USERNAME</label>
        <input name='username' type='text' placeholder='USERNAME' onChange={(event) => this.setState({username:event.target.value})}/>
        <label for='username'>PASSWORD</label>
        <input name='username' type='text' placeholder='PASSWORD' onChange={(event) => this.setState({password:event.target.value})}/>
        <button className='login-button' onClick={this.login}>LOG IN</button>
        {this.state.error}
      </article>
    )
  }
}

export default Form
