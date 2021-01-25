class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }
  updater() { }
  #updater() {
    this.updater(this.render());
    this.componentDidUpdate();
  }

  // Se llama antes que se renderice el coponente

  componentWillMount() {

  }

  componentDidMount() {

  }

  // cuando el componente se actualizo

  componentDidUpdate() {

  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater();
  }

  build() {
    this.componentWillMount();
    return this.render();
  }

}

export {
  Component
}