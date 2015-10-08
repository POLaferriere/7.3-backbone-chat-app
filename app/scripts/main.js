import AppRouter from 'router';

$(document).ready(function(){
  var appRouter = new AppRouter();
  Backbone.history.start();
        setTimeout(function(){$('#login-input').focus(); console.log("focus");}, 2000);
  
});
