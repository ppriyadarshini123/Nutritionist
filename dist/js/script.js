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

    const openNavigation = document.getElementById("openNav");
    const closeNavigation = document.getElementById("closeNav");


    /* FUNCTIONS */
   /* function bindTopNavToggle() {
        $menuIcon.on('click', function(){
            $(topUl).slideToggle();
        });
    } // bindTopNavToggle

      function toggleNavigation() {
        enquire.register("screen and (min-width: 360px)", {

            // OPTIONAL
            // If supplied, triggered when a media query matches.
            match: function () {
                $(topUl)
                    .show()
                ;

            },

            // OPTIONAL
            // If supplied, triggered when the media query transitions
            // *from a matched state to an unmatched state*.
            unmatch: function () {
                $(topUl).hide();
            }
        });
    }// toggleNavigation*/


    /**
     *  Open Navigation when Hamburger is clicked
     */
    function openNav()
    {
        document.getElementById("nav1").style.width = "100%";
        document.getElementById("top").style.marginLeft = "100%";
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

         if(openNavigation != null) openNavigation.addEventListener("click", openNav)
         if(closeNavigation != null) closeNavigation.addEventListener("click", closeNav)

    }// bindBtns


    /**
     * initialising function
     */
    function init() {
        bindBtns();
        toggleNavigation();
        bindTopNavToggle();
    }//end init

    //onload initialiser
    window.onload = init;
})();
