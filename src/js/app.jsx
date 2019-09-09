import React, { Component } from 'react';
import './../styles/appStyles.scss';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='grid-container'>
          <div className='row'>

              <h1>San Diego Top Spots</h1>
              <div>A list of the top 30 places to see in San Diego, California.</div>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
