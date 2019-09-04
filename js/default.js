$(function() {
  $('.tabs-container .tabs-item').bind('click', function(e) {
    var index = $(this).index();
    var parentNode = e.currentTarget.parentNode;
    $('.tabs-item', $(parentNode)).removeClass('active');
    $($(parentNode).children()[index]).addClass('active');
    var $tabsContainer = $(parentNode).parent();
    var $tabsContent = $('.tabs-content', $tabsContainer);
    $tabsContent.children().removeClass('active');
    $($tabsContent.children()[index]).addClass('active');
  });
});
