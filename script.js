$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

// <!--ハンバーガーメニューとタブメニューでそれぞれのJSを入れるときはどうやって書くの？？？-->
// function内に書いてもダメ、外に新しくfunction作ってもダメだった
// ファイルを別で作成して読み込む？？
