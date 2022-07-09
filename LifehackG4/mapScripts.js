var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
}

function filterCategoryAppear(ev){
    categoryName = ev.id.substring(3,);
    cb = document.querySelector(`#cat${categoryName}`);
    filterCategory = `${categoryName}filterCriteria`;
    catDropDown = document.getElementById(filterCategory);

	if (cb.checked === false){
        
		catDropDown.classList.add("displayNone");
	}
	else {
		catDropDown.classList.remove("displayNone");
	}
}

function filterCategories(ev, category){
    //category selected
    //amenitycategory, sector, blocknumber, etc.
    catName = ev.slice(0, -14);
   
    //actual value chosen
    //1-200
    catValue = document.getElementById(ev).value;

    parentContainer = document.getElementById("locationGridContainer");
    container = parentContainer.querySelectorAll('.wipEntry');
    //CONTAINER OF ALL CHILD ENTRIES DONT TOUCH DONT TOUCH

    for (i=0;i<(container.length);i++){
      childElement = container[i];
      classcatValue = `.${catName}`;  
      value = childElement.querySelector(classcatValue).innerHTML;
      if (catName === "amenitycategory"){

      }
      else if (catName === "blkNumber"){
          if (parseInt(value) > 800){
            value = "801-999";
          }
          else if (parseInt(value) > 800){
            value = "601-800";
          }
          else if (parseInt(value) > 800){
            value = "401-600";
          }
          else if (parseInt(value) > 800){
            value = "201-400";
          }
          else{
            value = "1-200";
          }
      }
      else if (catName === "town"){
  
      }

      if (value != catValue){
        console.log(value);
        element = document.getElementById(`wipEntry${i+1}`);
        //THIS IS THE IMPORTANT LINE 
        element.parentNode.removeChild(element);
      }
    }
  }




/*const wipEntry1 = {lat: 1.4349, long: 103.8309}
const marker = new google.maps.Marker({
	position: wipEntry1,
	map: map,
  });*/