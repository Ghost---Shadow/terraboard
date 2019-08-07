import React from 'react';
import './App.css';
import RendererWindow from './components/RenderWindow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  componentDidMount() {
    const loadGraph = async () => {
      const response = await fetch('/api/graph');
      const elements = await response.json();
      this.setState({ elements });
    };
    loadGraph();
  }

  render() {
    const { elements } = this.state;

    return (
      <RendererWindow elements={elements} />
    );
  }
}

export default App;
