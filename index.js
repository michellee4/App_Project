// start by creating data so we don't have to type it in each time
let plantArray = [];

// define a constructor to create movie objects
let PlantObject = function(pName, pScientific, pFamily, pClimate, pColor, pURL, pSize, pMaintenance) {
    this.ID = plantArray.length + 1;
    this.Name = pName;
    this.Scientific = pScientific;
    this.Family = pFamily;
    this.Climate = pClimate;
    this.Color = pColor;
    this.Size = pSize;
    this.Maintenance = pMaintenance;
    this.URL = pURL;
    
}

plantArray.push(new PlantObject("Eucalyptus", "Eucalyptus Globulus", "Myrtle family", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Aloe Vera", "Alpe Barbadensis Miller", "Asphodelaceae", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Christmas Cactus", "Schlumbergera Truncata", "Cactaceae", "Green/Pink", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Zebra Plant", "Aphelandra Squarrosa", "Acanthaceae", "Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))
plantArray.push(new PlantObject("Peace Lily", "Spathiphyllum", "Arums", "White/Green", "https://www.thespruce.com/how-to-grow-and-use-eucalyptus-1762354"))

let selectedSize = "not selected";
let selectedMaintenanceLevel = "not selected";

document.addEventListener("DOMContentLoaded", function() {

    createList();

    // add button events ************************************************************************

    document.getElementById("buttonAdd").addEventListener("click", function() {
        plantArray.push(new PlantObject(document.getElementById("pname").value, document.getElementById("scientific").value,
            document.getElementById("family").value, document.getElementById("climate").value, document.getElementById("color").value));
        document.location.href = "index.html#ListPlants";
        // also add the URL value
    });

    document.getElementById("buttonClear").addEventListener("click", function() {
        document.getElementById("pname").value = "";
        document.getElementById("scientific").value = "";
        document.getElementById("family").value = "";
        document.getElementById("climate").value = "";
        document.getElementById("color").value = "";
    });

    $(document).bind("change", "#select-size", function(event, ui) {
        selectedSize = $('#select-size').val();
    });

    $(document).bind("change", "#maintenance-level", function(event, ui) {
        selectedMaintenanceLevel = $('#maintenance-level').val();
    });

    document.getElementById("delete").addEventListener("click", function() {
        deletePlant(document.getElementById("IDparmHere").innerHTML);
        createList();
        document.location.href = "index.html#ListPlants";
    });


    // end of add button events ************************************************************************


    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListPlants", function(event) { // have to use jQuery 
        createList();
    });

    $(document).on("pagebeforeshow", "#details", function (event) {   // have to use jQuery 
        let localID = document.getElementById("IDparmHere").innerHTML;
        let arrayPointer = GetArrayPointer(localID);
        document.getElementById("oneName").innerHTML = "The plant name is: " + plantArray[arrayPointer].Name;
        document.getElementById("oneScientific").innerHTML = "The scientific name of the plant is: " + plantArray[arrayPointer].Scientific;
        document.getElementById("oneFamily").innerHTML = "The plant family is: " + plantArray[arrayPointer].Family;
        document.getElementById("oneNativeClimate").innerHTML = "The native climate of the plant is: " + plantArray[arrayPointer].NativeClimate;
        document.getElementById("oneColor").innerHTML = "The color of the plant is: " + plantArray[arrayPointer].Color;
        document.getElementById("oneSize").innerHTML = "The size of the plant is: " + plantArray[arrayPointer].Size;
        document.getElementById("oneMaintenance").innerHTML = "The maintenance level of the plant is: " + plantArray[arrayPointer].Maintenace;
    });

// end of wait until document has loaded event  *************************************************************************

function createList() {
    // clear prior data
    var divPlantList = document.getElementById("divPlantList");
    while (divPlantList.firstChild) { // remove any old data so don't get duplicates
        divPlantList.removeChild(divPlantList.firstChild);
    };

    var ul = document.createElement('ul');

    plantArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        // adding a class name to each one as a way of creating a collection
        li.classList.add('onePlant'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        li.setAttribute("data-parm", element.ID);
        li.innerHTML = element.Name + "  (" + element.Family + ")";;
        ul.appendChild(li);
    });
    divPlantList.appendChild(ul)

      // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var liArray = document.getElementsByClassName("onePlant");
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


function deletePlant(which) {
    console.log(which);
    let arrayPointer = GetArrayPointer(which);
    plantArray.splice(arrayPointer, 1);  // remove 1 element at index 
}

function GetArrayPointer(localID) {
    for (let i = 0; i < plantArray.length; i++) {
        if (localID === plantArray[i].ID) {
            return i;
        }
    }
}

function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}
});


function AddPlant() {
    //code goes here but your tired so you'll come back at the last minute like a champion//
}