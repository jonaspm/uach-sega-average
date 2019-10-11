/*
  getAverage: return average
  arguments:
    rows: tr elements that contain the required information for
    the average calculation.
*/
function getAverage(rows) {
  let sum = 0,
    average = 0,
    invalidRows = 0

  try {
    for (let row of rows) {
      let status = row.children[8].innerText
      
      // Scores
      let CO = Number.parseFloat(row.children[3].innerText),
      CNO = Number.parseFloat(row.children[4].innerText)
      
      // If not approved or approved but score 0
      if (
        status == 'NA' ||
        (status == 'AP' && CO == 0 && CNO == 0)
        ) {
        invalidRows++
        continue
      }
      
      // If CNO is more than zero then use that
      if (
        status == 'AC' &&
        CNO > 0.00 &&
        CO < 6.00
      ) {
        sum += CNO
        continue
      }

      // accredited and default score
      sum += CO
    }

    average = sum / (rows.length - invalidRows)

  } catch (ex) {
    console.error(ex)
    alert('Error: No se pudo calcular el promedio')
    return 0
  }
  
  return average.toFixed(3);
}
