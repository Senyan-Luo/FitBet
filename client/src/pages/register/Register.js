import React, { Component } from 'react'
import styled from 'react-emotion'
import FormItem from '../../components/FormItem'

const ContactWrapper = styled('div')({
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  boxShadow: '1px 1px 2px 2px rgba(0,0,0,.3)',
  display: 'flex',
  flexDirection: 'column',
  padding: 20
})

const WelcomeMessage = styled('div')({
  padding: 24
})

const SubmitButton = styled('button')({
  padding: 15,
  textTransform: 'uppercase',
  border: '1px solid black',
  borderRadius: 5
})

class Register extends Component {

  state = {
    name: '',
    occupation: '',
    email: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    // post my state to the api to save the contact form,
    // then set the state to some kind of success message
    // and show the user some feedback
    alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <ContactWrapper>
        <WelcomeMessage>
          Hello {this.state.nickname ? this.state.nickname : 'there' }!
        </WelcomeMessage>
        <FormItem
          name="email"
          label="Email"
          onChangeFn={this.handleChange}
          value={this.state.email}
        />
        <FormItem
          name="password"
          label="Password"
          onChangeFn={this.handleChange}
          value={this.state.password}
        />
        <FormItem
          name="nickname"
          label="Nickname"
          onChangeFn={this.handleChange}
          value={this.state.nickname}
        />
        <FormItem
          name="cellphone"
          label="Cellphone"
          onChangeFn={this.handleChange}
          value={this.state.cellphone}
        />
        <FormItem
          name="device"
          label="Device Type"
          onChangeFn={this.handleChange}
          value={this.state.device}
        />
        <SubmitButton onClick={this.handleSubmit}>
          Submit!
        </SubmitButton>
      </ContactWrapper>
    )
  }
}

export default Register