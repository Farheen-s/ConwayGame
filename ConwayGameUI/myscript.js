var pageMode = 1;

function InputGridData() {
    pageMode = 1;

    if (!(!isNaN($('#rows').val()) && parseInt($('#rows').val()) > 0 && !isNaN($('#columns').val()) && parseInt($('#columns').val()) > 0))
        return;

    var rows = parseInt($('#rows').val());
    var columns = parseInt($('#columns').val());
    CreateGrid(rows, columns);
}


function CreateGrid(rows, columns)
{
    var table = document.getElementById("conwayGrid");
    $(table).html('');
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < columns; j++) {
            var cell1 = row.insertCell(j);
        }
    }

    $('#conwayGrid tr td').click(function () {
        if (pageMode == 1)
            $(this).toggleClass('cellColor');
    });
    $('#simulateConway').show();
}

function SimulateGrid()
{
    pageMode = 2;
    $('#simulateConway').prop('disabled', true);
    var grid = getGridInfo();
    $('#conwayGrid tr td').removeClass('cellColor');
    simulateNext(grid);
}

function simulateNext(grid) {


}