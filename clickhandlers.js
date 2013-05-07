window.onload = function() {
$("#ASCII").click(function(){
      var cost = 9;
      if (Game.data < cost)
        needMoreMoney();
      else
      { 
        Game.data -= cost;
        Game.Shop.ASCII = true;
        $("#console").append("<br/> ASCII obtained");
        $("#createfile").css("visibility", "visible");
        $("#base10").css("visibility", "visible");
        $("#costs").css("visibility", "visible");
        $("#asciiwrapper").html("");
      }
      
      return;
    });
    
$("#base10").click(function(){
      var cost = 10;
      if (Game.data < cost)
        needMoreMoney();
      else
      { 
        Game.data -= cost;
        Game.Shop.base10 = true; 
        $("#console").append("<br/> base10 obtained");
        $("#base10wrapper").html("");
      }
      return;
    });
    
$("#createfile").click(function(){
      var cost = 2;
      if (Game.data < cost)
        needMoreMoney();
      else
      { 
        Game.data -= cost;
        $("#console").append("<br/> empty file created");
      }
      return;
    });
    
    
    
$("#myspace").click(function(){
      Game.data -= 10;
      Game.increment *= 2; 
      $('#mespacediv').css("visibility","visible");
      $('#myspace').css("visibility", "hidden");
      return;
    });
    
$("#band").click(function(){
  Game.data -= 30;
  Game.increment += 2;
});
};