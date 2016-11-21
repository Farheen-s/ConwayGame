var pageMode = 1;

function inputdata() {
    pageMode = 1;

    if (!(!isNaN($('#rows').val()) && parseInt($('#rows').val()) > 0 && !isNaN($('#columns').val()) && parseInt($('#columns').val()) > 0))
        return;

    var rows = parseInt($('#rows').val());
    var columns = parseInt($('#columns').val());
    CreateGrid(rows, columns);
}


function CreateGrid(rows, columns)
{

}
