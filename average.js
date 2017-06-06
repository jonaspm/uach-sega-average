$(document).ready(function() {
    $('#content-title')
        .append(`<strong title="Presióname" id="average">Promedio: Presiona Aquí</strong>`)
    $('#average')
        .css('float', 'right')
        .click(getAverage)
    return;
})

function getAverage(e) {
    e.preventDefault()
    let sum = 0,
        average = 0,
        cells = $('tr.trKardexGris td:nth-child(4)')
    cells.each(function() {
        sum += Number.parseFloat($(this).text())
    })
    average = sum / cells.length
    $('#average').text(`Promedio: ${average.toFixed(2)}`)
    return;
}
