//INLIST NOW

$('.button-enlist-now').click(function (e) {
    $('html, body').animate({
		scrollTop: $(".enlist-now").offset().top
	},500);

});

//SPECS
$('.list-specs li').click(function (e) {
    e.preventDefault();

    var items = $('.list-specs').children();
    var dItems = $('.list-specs-description').children();
    var index = items.index(this);

    for (var i = 0; i < items.length; i++) {
        $(items[i]).removeClass('selected');
        $(dItems[i]).removeClass('selected');
    }

    $(items[index]).addClass('selected');
    $(dItems[index]).addClass('selected');

});

//SLIDER
var currentSlide = 0;

$('.button-left').click(function (e) {
    currentSlide++;
    Slide();
});

function Slide()
{
     var items = $('.slider .items').children();

     if (currentSlide < 0)
        currentSlide = items.length - 1;
     if (currentSlide > items.length - 1)
        currentSlide = 0;

      for (var i = 0; i < items.length; i++) {
        $(items[i]).removeClass('selected');
    }

    $(items[currentSlide]).addClass('selected');
    
}