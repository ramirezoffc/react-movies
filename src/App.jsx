import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'

export default class App extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
