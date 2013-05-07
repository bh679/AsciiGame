
window.onload = function() {
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Game = new Object();
Game.fps = 30;
Game.frames = 0;
Game.increment = 1;
Game.data = 9;
Game.Shop = new Object();
Game.Shop.ASCII = false;
Game.Shop.base10 = false;

Game.Initialise = function ()
{
    //$('#myspace').css("visibility", "hidden");
    
};

function disableButtons()
{
    
}

Game.update = function()
{
   //reset data
    $('#data').html("");
    
    //display data type
    if (Game.Shop.ASCII)
      $('#data').append("data: ");
    
    //display data
    if (!Game.Shop.base10)
      $('#data').append(dec2bin(this.data));
    else
      $('#data').append(this.data);
    
    if (this.data >= 10)
    {
        $('#ASCII').css("visibility","visible");
    }
    
    disableButtons();
    
    this.frames++;
    if (this.frames % 30 == 0)
    {
        this.data += this.increment;
    }
    return;
}
;

Game.run = (function() 
{
  var loops = 0, skipTicks = 1000 / Game.fps,
      maxFrameSkip = 10,
      nextGameTick = (new Date).getTime();
      
      //Game.Initialise();
  
  return function() {
    loops = 0;
    
    while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
      Game.update();
      nextGameTick += skipTicks;
      loops++;
      //console.log(loops);
    }
    
    
   // Game.draw();
  };
})();

    
function needMoreMoney()
{
  $("#console").append("<br/> get more money fag");
}


function dec2bin(x) {
  if (x == 0)
     return 0;
   
  if ((/[^0-9]/g.test(x)) || x == "") 
  {
    alert ("You must enter an integer decimal number!");
    document.getElementById("deci").value = "";
    document.getElementById("deci").focus();
    return false;
  }
  x = parseInt(x);
  var bin = x.toString(2);
  var hex = x.toString(16).toUpperCase();
  var octal = x.toString(8);


  var figs = "The binary representation of " + x + " is " + bin + "<br>";
  figs = figs + "The hexadecimal representation of " + x + " is " + hex + "<br>";
  figs = figs + "The octal representation of " + x + " is " + octal + "<br>";

  return bin;
}
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

// Start the game loop
Game._intervalId = setInterval(Game.run, 0);

};




