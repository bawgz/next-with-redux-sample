import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../store';
import { startClock, serverRenderClock } from '../ducks/clock'
import { addCount } from '../ducks/count'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Page title='Index Page' linkTo='/other' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
