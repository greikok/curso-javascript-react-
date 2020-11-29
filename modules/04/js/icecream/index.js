import { makeIceCream } from './icream-machine.js'

const $flavor = document.querySelectorAll('.flavor')
$flavor.forEach(($elemento) => {
  $elemento.addEventListener('click', selectFlavor)
})

function selectFlavor() {
  this.classList.toggle('is-active')
}


window.btn.addEventListener('click', () => {
  const $flavors = document.querySelectorAll('.flavor.is-active')

  try {
    makeIceCream($flavors[0], $flavors[1])
  } catch {
    alert('Aun no completa los sabores para preparar tu helado')
  }
})
