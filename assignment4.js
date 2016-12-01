// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {

  $('.flexsearch-input').on('keyup', function(){
    var val = this.value;
    $.ajax({
      url: 'http://www.mattbowytz.com/simple_api.json?data=programming',
      success: function(result) {
        var predict = [];
        if(val.length > 0){
          for(var i = 0; i < result.data.length; i++){
            if(result.data[i].substring(0, val.length).toLowerCase() === val.toLowerCase()){
              predict.push(result.data[i]);
            }
          }
        }
        if(predict.length > 0) {
          $('#result ul').children().remove();
          for(var i = 0; i < predict.length; i++) {
            $('#result ul').append('<li><a href="https://www.google.com/search?q='
            + predict[i] + '" target="_blank">' + predict[i] + '</a></li>');
          }
          $('#result ul').slideDown();
        }
        else {
          $('#result ul').slideUp();
        }
      }
    });
  });

})();
