
Template.convert.events({
  'click input#button' : function () {
    var words = document.getElementById("convert").value;
    var spintax = "{";
    if(document.getElementById("commatolist").checked) {
      var list = "";
      var array = words.split(', ');
      if(array.length < 2) {
        var array = words.split(",");
      }
      list += array[0]; 
      for(var i = 1; i < array.length; i++) {
        list += "\n" + array[i];
      }
      document.getElementById("result").value = list;
    } else {
      if(document.getElementById("list").checked) {
        var array = words.split('\n');
      } else if (document.getElementById("comma").checked) {
        var array = words.split(', ');
        if(array.length < 2) {
          var array = words.split(",");
        }
      }
      spintax += array[0];
      for(var i = 1; i < array.length; i++) {
          spintax += "|" + array[i];
      }
      spintax += "}";
      document.getElementById("result").value = spintax;
    }
  }
});