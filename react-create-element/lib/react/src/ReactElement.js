import { render } from '../../react-dom.js'

function renderChilren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container));
  }
  return render(children, container)
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback)
}

function setProperties(prop, value, element) {
  //events support 
  if (prop.startsWith('on')) {
    const event = prop.replace('on', '').toLowerCase();
    return setEvents(element, 'click', value);
  }
  //support for children
  if (prop === 'children') {
    renderChilren(value, element)
  }
  // support for attributes
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  //Creando tipo de elemento
  const element = document.createElement(type);

  //Contenido
  if (content) {
    element.textContent = content;
  }

  // Propiedades
  if (props) {
    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element));
  }
  return element;
} 