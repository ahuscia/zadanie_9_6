
  var list = document.getElementById('list');
  var add = document.getElementById('addElem');
  
  add.addEventListener('click', function(element) { 

    var element = document.createElement('li'); 
    var liNumber = list.getElementsByTagName('li');
    element.innerHTML = 'item ' + liNumber.length;
    list.appendChild(element);
  });
    
