// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function () {
   // $('div.content').css('visibility','hidden');
   // $('input[type="submit"]').css('visibility','hidden');
    
    $('input[type="text"].title').focus(function () {
       // $('article.entry').css('height', 'auto');
        $('article.entry').animate({height:'200px'}, 300);
        $('div.content').css('visibility','visible');
        $('input[type="submit"]').css('visibility','visible');
    });
});
