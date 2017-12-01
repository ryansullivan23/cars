(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework



   var  cars = document.querySelectorAll('.data-ref');
        models = document.querySelector('.modelName');
        price = document.querySelector('.priceInfo');
        description = document.querySelector('.modelDetails');


        cars.forEach(function(element, index){
        element.addEventListener('click', changeElements, false); });

  function changeElements() {
    //debugger;
    let objectIndex = carData[this.id];

    models.firstChild.nodeValue = objectIndex.model;
    price.firstChild.nodeValue = objectIndex.price;
    description.firstChild.nodeValue = objectIndex.description;

    if (this.classList.contains('data-ref')) {

 //this.classList.remove('fadeOut');
 this.classList.add('fadeOut');

}

else {
  
}



  };

})();
