import React, { Component } from 'react'
import Header from '../header/Header'
import Slider from './Slider'
import FeatureSection from './FeatureSection'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <FeatureSection />
      </div>
    )
  }
}

export default Home
