$(document).ready(function(){$(window).width();var e=window.innerHeight,t=e-$(".default-header").height();$(".fullscreen").css("height",e),$(".fitscreen").css("height",t),$("select").niceSelect(),$(".active-project-carousel").owlCarousel({center:!0,items:1,loop:!0,margin:100,nav:!0,navText:['<i class="fa fa-caret-left""></i>','<i class="fa fa-caret-right""></i>']})});