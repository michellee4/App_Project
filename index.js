// start by creating data so we don't have to type it in each time
let movieArray = [];

// define a constructor to create movie objects
let MovieObject = function (pTitle, pYear, pGenre, pMan, pWoman, pURL) {
    this.Title = pTitle;
    this.Year = pYear;
    this.ID = movieArray.length + 1;
    this.Genre = pGenre;  // action  comedy  drama  horrow scifi  musical  western
    this.Man = pMan;
    this.Woman = pWoman;
    this.URL = pURL;
}


movieArray.push(new MovieObject("Phylum Filicinophyta", "[Fern family]", ", Fern family, etc.", "Cher"));
movieArray.push(new MovieObject("Phylum Cycadophyta", "[Cycads family]", ", Cycads family, etc.", "Laura VanDern", "https://www.youtube.com/watch?v=7uRJartX79Q"));
movieArray.push(new MovieObject("Phylum Coniferophyta", "[Pines family]", ", Pines family, etc.", "Holly Hunter", "https://www.youtube.com/watch?v=NoXJKArYi1g"));
movieArray.push(new MovieObject("Phylum Angiospermophyta (flowering plants)", "[Flowering family]", ", Flowering family, etc.", "Emily Tennant", "https://youtu.be/ZDPE-NronKk"));


let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function () {

    createList();

// add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        movieArray.push(new MovieObject(document.getElementById("title").value, document.getElementById("year").value,
            selectedGenre, document.getElementById("man").value, document.getElementById("woman").value));
        document.location.href = "index.html#ListAll";
        // also add the URL value
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("pname").value = "";
        document.getElementById("sciname").value = "";
        document.getElementById("pfamily").value = "";
        document.getElementById("climate").value = "";
        document.getElementById("pcolor").value = "";
    });

    $(document).bind("change", "#psize", function (event, ui) {
        selectedGenre = $('#psize').val();
    });

    $(document).bind("change", "#mlevel", function (event, ui) {
        selectedGenre = $('#mlevel').val();
    });


    document.getElementById("buttonSortpName").addEventListener("click", function () {
        movieArray.sort(dynamicSort("pname"));
        createList();
        document.location.href = "index.html#ListAll";
    });

  
// end of add button events ************************************************************************

  
  
// page before show code *************************************************************************
    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListPlants", function (event) {   // have to use jQuery 
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

    movieArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML =  element.ID + ":  " + element.Title + "  " + element.Genre;
        ul.appendChild(li);
    });
    divPlantList.appendChild(ul)

};
  

/**
 *  https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
* Function to sort alphabetically an array of objects by some specific key.
* 
* @param {String} property Key of the object to sort.
*/
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
