const section = document.querySelector('#dataSection')
const inputSearch = document.querySelector('#inputSearch')

let filters = []
let arrayFilter = []
export function setArrayData(data) {
  arrayFilter = data
}

export function showDataOnScreen(filters) {
  let arr = []

  arr = arrayFilter

  if (inputSearch.value != '') {
    arr = arr.filter(item => cleanString(item.titulo).includes(filters.titulo))
  }

  let cardsDisplay = arr.map(item => {
    return `
      <article class="cardItem" id=${item.id}>
        <div>
          <time datetime="10-06-2022">${item.data_publicacao}</time>
          <button aria-label="Butão de favoritar noticia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 30 20"
              stroke="#574AE8"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <h2>${item.titulo}</h2>
        <p>
         ${item.introducao}
        </p>
        <a href=${item.link} target="_blank">Notícia completa aqui!</a>
      </article>
    `
  })

  section.innerHTML = cardsDisplay
}

inputSearch.addEventListener('input', e => {
  let valueReceived = cleanString(e.target.value)
  console.log(valueReceived)

  showDataOnScreen({
    ...filters,
    titulo: valueReceived
  })
})

function cleanString(value) {
  return value
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
