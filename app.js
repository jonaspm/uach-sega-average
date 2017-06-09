if ( !document.querySelector('#average') )
  document.querySelector('#content-title').innerHTML +=
  '<strong title="Presióname" id="average">Promedio: Presiona Aquí</strong>'

const averageElement = document.querySelector('#average')

averageElement.setAttribute('style', 'float:right;')

averageElement.addEventListener('click', getAverage, false)
