function mostrarPestana(pestana){
    $('#myTab2 a[href="#'+pestana+'2"]').tab('show');
}

$(function() {
    $('#myTab3 a').on('show.bs.tab', function (e) {
        alert("Se va mostrar la pestaña"+e.target);
    })

    $('#myTab3 a').on('shown.bs.tab', function (e) {
        alert("Se ha mostrado la pestaña"+e.target);
    })

    $('#myTab3 a').on('hide.bs.tab', function (e) {
        alert("Se va a quitar la pestaña actual"+ e.relatedTarget);
    })

    $('#myTab3 a').on('hidden.bs.tab', function (e) {
        alert("Se ha quitado la pestaña actual"+ e.relatedTarget);
    })
});