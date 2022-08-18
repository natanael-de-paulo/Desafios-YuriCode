export function viewDatas(data) {
  const section = document.querySelector('#dataSection')
  let items = data.items
  let itemsFilteredForIndex = items.slice(0, 50)
  let dataObjects = itemsFilteredForIndex
  console.log(dataObjects)
  dataObjects.map(item => {
    section.innerHTML += `
      <article class="cardItem" id=${item.id}>
        <div>
          <time datetime="10-06-2022">${item.data_publicacao}</time>
          <button onClick=''>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 100% 100%"
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
        <a href=${item.link}>${item.titulo}</a>
        <p>
         ${item.introducao}
        </p>
      </article>
      `
  })
}
