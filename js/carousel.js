$(function() {
    $('#carousel').carousel({
        interval: 100,
        pause:false
    })
});

function moverCarousel(){
    $('#carousel').carousel('cycle');
}

function pararCarousel(){
    $('#carousel').carousel('pause');
}

function moverXCarousel(){
    $('#carousel').carousel(2);
}

function moverAnteriorCarousel(){
    $('#carousel').carousel('prev');
}

function moverSiguienteCarousel(){
    $('#carousel').carousel('next');
}

$(function() {
    $('#carousel').on('slide.bs.carousel', function (event) {
        alert(
            "Se va a mostrar la siguiente imagen"+
            "\n Direccion:"+event.direction+
            "\n RelatedTarget:"+event.relatedTarget.id+
            "\n From:"+event.from +
            "\n To:"+event.to
        )
    })

    $('#carousel7').on('slid.bs.carousel', function (event) {
       alert(
            "Se ha mostrado la imagen"+
            "\n Direccion:"+event.direction+
            "\n RelatedTarget:"+event.relatedTarget.id+
            "\n From:"+event.from +
            "\n To:"+event.to
        )
    })
});