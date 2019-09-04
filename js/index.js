var t = (n = 0),
  count;

// 轮播图切换
function showAuto() {
  if (n < count - 1) {
    n = n + 1;
  } else {
    n = 0;
  }
  $('#banner li')
    .eq(n)
    .trigger('click');
}

$(function() {
  count = $('.banner-list a').length;
  $('.banner-list a:not(:first-child)').hide();
  $('.banner-info').html(
    $('.banner-list a:first-child')
      .find('img')
      .attr('alt')
  );
  $('.banner-info').attr({
    title: $('.banner-list a:first-child')
      .find('img')
      .attr('alt')
  });
  $('.banner-info').click(function() {
    window.open($('.banner-list a:first-child').attr('href'), '_blank');
  });

  $('#banner li').click(function() {
    //获取Li元素内的值，即1，2，3，4
    var i = $(this).text() - 1;
    n = i;
    if (i >= count) return;
    $('.banner-info').html(
      $('.banner-list a')
        .eq(i)
        .find('img')
        .attr('alt')
    );
    $('.banner-info')
      .unbind()
      .click(function() {
        window.open(
          $('.banner-list a')
            .eq(i)
            .attr('href'),
          '_blank'
        );
      });
    $('.banner-list a')
      .filter(':visible')
      .fadeOut(500)
      .parent()
      .children()
      .eq(i)
      .fadeIn(1000);
    document.getElementById('banner').style.background = '';
    $(this).toggleClass('on');
    $(this)
      .siblings()
      .removeAttr('class');
  });

  t = setInterval('showAuto()', 4000);
  $('#banner').hover(
    function() {
      clearInterval(t);
    },
    function() {
      t = setInterval('showAuto()', 4000);
    }
  );
});
