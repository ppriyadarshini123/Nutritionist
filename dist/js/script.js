
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

    const showHomePage = document.getElementById("showHomeP");
    const openNavigation = document.getElementById("openNav");
    const closeNavigation = document.getElementById("closeNav");

    /* FUNCTIONS */

    /**
     *  Goto Home Page when the logo is clicked
     */
    function showHome()
    {
        window.open("index.html", "_self");
    }//showHome

    /**
     *  Open Navigation when Hamburger is clicked
     */
    function openNav()
    {
        document.getElementById("nav1").style.width = "50%";
        document.getElementById("top").style.marginLeft = "50%";
    }//openNav

    /**
     *  Close Navigation when Cross is clicked
     */
    function closeNav() {
        document.getElementById("nav1").style.width = "0";
        document.getElementById("top").style.marginLeft= "0";
    }//closeNav

    /**
     *  Bind fields to event handler
     */
    function bindBtns() {

         if(showHomePage != null) showHomePage.addEventListener("click", showHome);
         if(openNavigation != null) openNavigation.addEventListener("click", openNav)
         if(closeNavigation != null) closeNavigation.addEventListener("click", closeNav)

    }// bindBtns


    /**
     * initialising function
     */
    function init() {
        bindBtns();

    }//end init

    //onload initialiser
    window.onload = init;
})();
