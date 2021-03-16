// start by creating data so we don't have to type it in each time
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

    document.getElementById("buttonAdd").addEventListener("click", function() {
        PlantArray.push(new PlantObject(document.getElementById("pname").value, document.getElementById("sciname").value,
            document.getElementById("pfamily").value, document.getElementById("climate").value, document.getElementById("pcolor").value));
        document.location.href = "index.html#ListAll";
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
    while (divPlantList.firstChild) { // remove any old data so don't get duplicates
        divPlantList.removeChild(divPlantList.firstChild);
    };

    var ul = document.createElement('ul');

    PlantArray.forEach(function(element, ) { // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.name + "  (" + element.pfamily + ")";
        ul.appendChild(li);
    });
    divPlantList.appendChild(ul)

};

function AddPlant() {
    //code goes here but your tired so you'll come back at the last minute like a champion//
}