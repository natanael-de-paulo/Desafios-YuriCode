import { showDataOnScreen } from '../index.js'
function getApi() {
  fetch('http://servicodados.ibge.gov.br/api/v3/noticias')
    .then(response => response.json())
    .then(data => {
      const dataFiltered = data.items.slice(0, 10)
      showDataOnScreen(dataFiltered)
    })
    .catch(error => console.error(error))
}

getApi()
