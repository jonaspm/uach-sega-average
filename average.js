$(document).ready(function() {
  $('#content-title')
    .append(`<strong title="Presióname" id="average">Promedio: Presiona Aquí</strong>`)
  $('#average')
    .css('float', 'right')
    .click(getAverage)
})

function getAverage(e) {
  e.preventDefault()
  let sum = 0,
      average = 0,
      invalidRows = 0,
      rows = $('tr.trKardexGris')

  try {

    rows.each(function() {
      const status = this.children[8].innerText
//      console.log('Status', status)
      if (status == 'NA') return invalidRows++;

      const CO = Number.parseFloat(this.children[3].innerText),
            CNO = Number.parseFloat(this.children[4].innerText)
//      console.log('CO', CO)
//      console.log('CNO', CNO)
      if (
        status == 'AC' &&
        CNO > 0.00 &&
        CO < 6.00
      )
        return sum += CNO

        return sum += CO
    })

    average = sum / (rows.length - invalidRows)

  } catch (ex) {
    console.log(ex)
    alert('Error: No se pudo calcular el promedio')
    return 0
  }
  $('#average').text(`Promedio: ${average.toFixed(2)}`)
}
