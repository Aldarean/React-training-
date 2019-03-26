import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Hello'
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Bye'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
      console.log('render wordt uitgevoerd')
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default App;


shouldComponentUpdate(nextProps, nextState) {
    return this.state.value != nextState.value;
  }