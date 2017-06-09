function getAverage() {
  let sum = 0,
      average = 0,
      invalidRows = 0,
      rows = document.querySelectorAll('tr.trKardexGris')

  try {
    for(let row of rows) {
      let status = row.children[8].innerText
//      console.log('Status', status)
      if (status == 'NA') {
        invalidRows++
        continue
      }

      let CO = Number.parseFloat(row.children[3].innerText),
          CNO = Number.parseFloat(row.children[4].innerText)
//      console.log('CO', CO)
//      console.log('CNO', CNO)
      if (
        status == 'AC' &&
        CNO > 0.00 &&
        CO < 6.00
      ) {
        sum += CNO
        continue
      }

        sum += CO
    }

    average = sum / (rows.length - invalidRows)

  } catch (ex) {
    console.log(ex)
    alert('Error: No se pudo calcular el promedio')
    return 0
  }
  averageElement.innerText = `Promedio: ${average.toFixed(3)}`
}
