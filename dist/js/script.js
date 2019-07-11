
/*

function showPic1()
{
    document.getElementById("bigPic").style.backgroundImage='url("./img/newLayout/trump.jpg")';
    document.getElementById("p1").innerHTML = "Trump says he may visit Jerusalem.";
    document.getElementById("ht").innerHTML = "US President Trump says he may visit Jerusalem..";
    document.getElementById("time").innerHTML = "3 hrs";
    document.getElementById("place").innerHTML = "US";
}

 /**
     *  To goto Home Page when the logo is clicked
     */
function showHome()
{
    window.open("index.html", "_self");
}
/**
 * Open the Navigation sidebar when Hamburger icon is clicked.
 */
function openNav() {
    document.getElementById("nav1").style.width = "360px";
    document.getElementById("top").style.marginLeft = "360px";
}

/**
 * Close the Navigation sidebar when cross symbol is clicked.
 */
function closeNav() {
    document.getElementById("nav1").style.width = "0";
    document.getElementById("top").style.marginLeft= "0";
}



/*
-----------------------------------------------
1) 	create your iffy
2) 	fetch DOM elements and store them into const variables
2.1) 	store other values into let variables
3) 	set up your initialising pattern
4) 	subscribe handlers to events on elements
5) 	implement handlers
-----------------------------------------------
*/

(function(){

    /* const ht = document.getElementById("ht");*/



    /**
     *  Bind fields to event handler
     */
    function bindBtns() {
        /* //Checking if button exists on page and then add eventhandler
         /!*Open Trump page when pic is clicked*!/
         if(bigPic != null) bigPic.addEventListener("click", openTrumpPage );*/
    }// bindBtns

    //Functions

    /**
     *  To Display the chosen destination on
     *  displaydestination.html page
     */
    /* function openTrumpPage()
     {
        /!* window.open("trump.html", "_self");*!/
     }*/






    /**
     * initialising function
     */
    function init() {
        bindBtns();

    }//end init

    //onload initialiser
    window.onload = init;
})();

