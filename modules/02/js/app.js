import store from './store.js'
import { BURN } from './actions/index.js'

store.subscribe(() => {
  window.result.textContent = `Haz quemado ${store.getState().burn.toFixed(2)} calorías`
  window.click.textContent = `Te faltan ${store.getState().click} clicks para quemar las 1932kCalorías de la cena`
})

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  })
}
window.burn.addEventListener('click', burn)
