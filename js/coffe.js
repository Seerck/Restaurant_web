$(function(){
    //Efecto menu
    $(".menu a").each(function(index, elemento){                //each sirve para poder agragar algo a todos los elementos que halla, en este caso es para agregar una animacion a todos los a de menu
        $(this).css({
            "top": "-200px"
        });

        $(this).animate({
            top: "0"
        }, 2000 + (index * 500));
    });

    //Efecto header
    if($(window).width() > 800){                             //window.weadth es para averiguar el tamaño del la ventana en donde se abrio la aplicacion
        $("header .textos").css({
            opacity: 0,
            marginTop: 0
        });

        $("header .textos").animate({
            opacity: 1,
            marginTop: "-52px"
        }, 2000);
    }

    //Scroll Elementos Menu
    var menu = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,                  //offset().top() nos ayuda al calcular la posicion correspondiente del scroll para llegar hay
        ubicacion = $("#ubicacion").offset().top;

    $("#btn-acerca-de").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 380                                  //scrolltop sirve para mover el scroll, esto lo usamos para que cuando le demos al enlace de acerca de nos lleve hay
        }, 500);
    });

    $("#btn-menu").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: menu
        }, 500);
    });

    $("#btn-galeria").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria
        }, 500);
    });

    $("#btn-ubicacion").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion
        }, 500);
    });
});