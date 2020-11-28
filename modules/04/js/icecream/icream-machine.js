import { isRequired } from './validations.js'

function makeIceCream(flavor1 = isRequired('flavor1'), flavor2 = isRequired('flavor2')) {
  alert(`Tienes un rico Helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}`)
}

export {
  makeIceCream
}