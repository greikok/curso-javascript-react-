function render(element, container) {
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element)
  }
  function reRender(newChild) {
    container.replaceChild(newChild, childElement);
    childElement = newChild;
    console.log(newChild);
  }

  element.updater = reRender
  let childElement = element.build();
  container.append(childElement);
  element.componentDidMount();
}



export {
  render
}