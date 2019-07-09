

function showPic1()
{
    document.getElementById("bigPic").style.backgroundImage='url("./img/newLayout/trump.jpg")';
    document.getElementById("p1").innerHTML = "Trump says he may visit Jerusalem.";
    document.getElementById("ht").innerHTML = "US President Trump says he may visit Jerusalem..";
    document.getElementById("time").innerHTML = "3 hrs";
    document.getElementById("place").innerHTML = "US";
}


function showPic2()
{
    document.getElementById("bigPic").style.backgroundImage='url("./img/newLayout/news2.jpg")';
    document.getElementById("p1").innerHTML = "Chancellor-Commandant nomination";
    document.getElementById("ht").innerHTML = "Polish President grants generals nominations - wsosp.pl";
    document.getElementById("time").innerHTML = "4 hrs";
    document.getElementById("place").innerHTML = "Poland";
}


function showPic3()
{
    document.getElementById("bigPic").style.backgroundImage='url("./img/newLayout/news3.jpg")';
    document.getElementById("p1").innerHTML = "Deepika turns down film with Shahrukh";
    document.getElementById("ht").innerHTML = "The pair will not be starring in next film - BritAsia TV";
    document.getElementById("time").innerHTML = "3 hrs";
    document.getElementById("place").innerHTML = "Mumbai";
}

function showHome()
{
    window.open("index.html", "_self");

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
    const bigPic = document.getElementById("bigPic");
    const p1 = document.getElementById("p1");
    const ht = document.getElementById("ht");

    //onload initialiser
    window.onload = init;

    /**
     * initialising function
     */
    function init() {
        bindBtns();

    }//end init

    /**
     *  Bind fields to event handler
     */
    function bindBtns() {
        //Checking if button exists on page and then add eventhandler
        /*Open Trump page when pic is clicked*/
        if(bigPic != null) bigPic.addEventListener("click", openTrumpPage );

        /*Open Trump page when headline is clicked*/
        if(p1 != null) p1.addEventListener("click", openTrumpPage );
        /*Open Trump page when headlinetext is clicked*/
        if(ht != null) ht.addEventListener("click",openTrumpPage );
    }// bindBtns

    //Functions

    /**
     *  To Display the chosen destination on
     *  displaydestination.html page
     */
    function openTrumpPage()
    {
        window.open("trump.html", "_self");

    }

})();

