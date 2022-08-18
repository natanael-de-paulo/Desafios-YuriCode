import { viewData } from '../index.js'
function getApi() {
  fetch('http://servicodados.ibge.gov.br/api/v3/noticias')
    .then(response => response.json())
    .then(viewData)
    .catch(error => console.error(error))
}

getApi()
