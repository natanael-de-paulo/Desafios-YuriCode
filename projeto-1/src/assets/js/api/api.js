import { showDataOnScreen, setArrayData } from '../index.js'
function getApi() {
  fetch('http://servicodados.ibge.gov.br/api/v3/noticias')
    .then(response => response.json())
    .then(data => {
      const dataFiltered = data.items.slice(0, 10)

      setArrayData(dataFiltered)
      showDataOnScreen()
    })
    .catch(error => console.error(error))
}

getApi()
