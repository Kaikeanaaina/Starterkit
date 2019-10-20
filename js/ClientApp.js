const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

var MyFirstComponent = function () {
  return (
      <div>
        <MyTitle title='whatevs' color='rebeccapurple' />
        <MyTitle title='LOL' color='papayawhip' />
        <MyTitle title='OMGLOLWTFBBQ' color='#f06d06' />

      </div>
    )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
