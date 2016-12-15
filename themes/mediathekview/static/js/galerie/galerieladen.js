$(".galerie > ul > li > img").each(function() { 
 $(this).attr("rel", "group1");
 $(this).attr("title", $(this).attr("alt"));
 $(this).attr("data-glisse-big", $(this).attr("src").replace(/_klein/g, ""));
 $(this).addClass("pics");
});
$(".galerie > ul").each(function() {
	$(this).addClass("list-group");
});
$(".galerie > ul > li").each(function() {
	$(this).addClass("list-group-item");
});
$(function () {
    $('.pics').glisse({
        changeSpeed: 550, 
        speed: 500,
        effect: 'bounce',
        fullscreen: true,
        mobile: true,
        bootstrap: true,
        bootstrapl18nNext: "Nächstes",
        bootstrapl18nPrevious: "Vorheriges",
        bootstrapl18nClose: "Schließen"
    }); 
});