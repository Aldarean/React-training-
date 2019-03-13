import React from 'react';

class App extends React.Component { 
  render() {
    var isLoading = false;
    var data = {
      name: "Rodney",
      age: 32,
      job: 'Software developer'
    }

    return (
      <div>
        <p>
          Is the component loading? 
          {isLoading ? 'yes' : 'No'}
        </p>
        <p>
          Hi my name is {data.name}, 
          I'm {data.age} years old 
          and I'm employed as a {data.job}
        </p>

      </div>
    )
  }
}

export default App;
