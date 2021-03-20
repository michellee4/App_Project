let PlantArray = [];

// define a constructor to create movie objects
let PlantObject = function(pname, psciname, _family, pclimate, pcolor, pURL) {
    this.name = pname;
    this.sciname = psciname;
    this.ID = PlantArray.length + 1;
    this.pfamily = _family;
    this.climate = pclimate;
    this.color = pcolor;
    this.URL = pURL;
}

plantArray.push(new PlantObject("Eucalyptus", "Eucalyptus Globulus", "Myrtle family", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Aloe Vera", "Alpe Barbadensis Miller", "Asphodelaceae", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Christmas Cactus", "Schlumbergera Truncata", "Cactaceae", "Green/Pink", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Zebra Plant", "Aphelandra Squarrosa", "Acanthaceae", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Peace Lily", "Spathiphyllum", "Arums", "White/Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))

document.addEventListener("DOMContentLoaded", function() {

    createList();

    // add button events ************************************************************************

    document.getElementById("buttonAdd").addEventListener("click", function () {
        PlantArray.push(new PlantObject(document.getElementById("pname").value, document.getElementById("sciname").value, document.getElementById("pfamily").value, document.getElementById("climate").value));
        document.location.href = "index.html#ListPlants";
        // also add the URL value
    });

    document.getElementById("buttonClear").addEventListener("click", function() {
        document.getElementById("pname").value = "";
        document.getElementById("sciname").value = "";
        document.getElementById("pfamily").value = "";
        document.getElementById("climate").value = "";
        document.getElementById("pcolor").value = "";
    });

    $(document).bind("change", "#psize", function(event, ui) {
        selectedGenre = $('#psize').val();
    });

    $(document).bind("change", "#mlevel", function(event, ui) {
        selectedGenre = $('#mlevel').val();
    });


    // end of add button events ************************************************************************



    // page before show code *************************************************************************
    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListPlants", function(event) { // have to use jQuery 
        createList();
    });


    // end of page before show code *************************************************************************

});
// end of wait until document has loaded event  *************************************************************************

function createList() {
    // clear prior data
    var divPlantList = document.getElementById("divPlantList");
    while (divPlantList.firstChild) {    // remove any old data so don't get duplicates
        divPlantList.removeChild(divPlantList.firstChild);
    };

    var ul = document.createElement('ul');

    Array.from(PlantArray).forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        // adding a class name to each one as a way of creating a collection
        li.classList.add('oneMovie'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        li.setAttribute("data-parm", element.ID);
        li.innerHTML = element.pname + element.pfamily;
        ul.appendChild(li);
    });
    divPlantList.appendChild(ul)

    // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var liArray = document.getElementsByClassName("oneMovie");
    Array.from(liArray).forEach(function (element) {
        element.addEventListener('click', function () {
        // get that data-parm we added for THIS particular li as we loop thru them
        var parm = this.getAttribute("data-parm");  // passing in the record.Id
        // get our hidden <p> and write THIS ID value there
        document.getElementById("IDparmHere").innerHTML = parm;
        // now jump to our page that will use that one item
        document.location.href = "index.html#details";
        });
    });

};
