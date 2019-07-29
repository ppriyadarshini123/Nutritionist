
(function(){

    const openNavigation = document.getElementById("openNav");
    const closeNavigation = document.getElementById("closeNav");

    let pic1 = document.getElementById("pic1");
    let pic2 = document.getElementById("pic2");
    let pic3 = document.getElementById("pic3");

    const tabWorkshop = document.getElementById("tabWorkshop");
    const tabConsultancy = document.getElementById("tabConsultancy");
    const tabCorporateNutrition = document.getElementById("tabCorporateNutrition");

    const submit = document.getElementById("submit");

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

        if (openNavigation != null) openNavigation.addEventListener("click", openNav);
        if (closeNavigation != null) closeNavigation.addEventListener("click", closeNav);

        /*  enquire.register("screen and (min-width: 361px) and (max-width: 768px)",
              {
                  match: function () {
                      if (tabWorkshop) {
                          tabWorkshop.addEventListener("click", function () {
                              document.getElementById("pic1").src = pic1;
                          })
                      }//if
                      if (tabConsultancy) {
                          tabConsultancy.addEventListener("click", function () {
                              document.getElementById("pic2").src = pic2;
                          })
                      }//if
                      if (tabCorporateNutrition) {
                          tabCorporateNutrition.addEventListener("click", function () {
                              document.getElementById("pic3").src = pic2;
                          })
                      }//if
                  },
                  unmatch: function(){

                  }
              },true
          )ASK EMILIANO*/

        /*tabWorkshop*/

        tabWorkshop.addEventListener("mouseleave", function(){
            tabWorkshop.style.backgroundColor = "#E6842E";

        })
        tabWorkshop.addEventListener("click", function () {
            tabWorkshop.style.backgroundColor = "#402005";
            tabWorkshop.style.color = "#ffffff";
            pic2.parentElement.style.display = "none";
            pic3.parentElement.style.display = "none";
            pic1.src = "../Nutritionist/dist/imgs/home/optimized/workshops-700x810.png";
            pic1.parentElement.style.display = "block";

        })

        /*tabConsultancy*/

        tabConsultancy.addEventListener("mouseleave", function(){
            tabConsultancy.style.backgroundColor = "#E6842E";
        })
        tabConsultancy.addEventListener("click", function () {
            tabConsultancy.style.backgroundColor = "#402005";
            tabConsultancy.style.color = "#ffffff";
            pic1.parentElement.style.display = "none";
            pic3.parentElement.style.display = "none";
            pic2.src = "../Nutritionist/dist/imgs/home/optimized/consultancy-700x810.png";
            pic2.parentElement.style.display = "block";
        })

        /*tabCorporate Nutrition*/
        tabCorporateNutrition.addEventListener("mouseleave", function(){
            tabCorporateNutrition.style.backgroundColor = "#E6842E";

        })
        tabCorporateNutrition.addEventListener("click", function () {
            tabCorporateNutrition.style.backgroundColor = "#402005";
            tabCorporateNutrition.style.color = "#ffffff";
            pic1.parentElement.style.display = "none";
            pic2.parentElement.style.display = "none";
            pic3.src = "../Nutritionist/dist/imgs/home/optimized/apple-700x810.png";
            pic3.parentElement.style.display = "block";

        })

        submit.addEventListener("click", function()
            {
                let fName = document.getElementById("name");
                let phone = document.getElementById("phone");
                let email = document.getElementById("email");

                if(!fName.checkValidity()) {
                    if(fName.validity.valueMissing)
                    document.getElementById("nameMessage").innerHTML = fName.validationMessage;
                    else if (!isNaN(fName.value))
                        document.getElementById("nameMessage").innerHTML = "Please enter characters only.";

                }
                if(!phone.checkValidity()) {

                    if(phone.validity.valueMissing)
                        document.getElementById("phoneMessage").innerHTML = phone.validationMessage;
                    else if (isNaN(parseInt(phone.value))) {
                        document.getElementById("phoneMessage").innerHTML = "Please enter numbers only.";
                    }

                }
                if(!email.checkValidity()) {
                    if (email.validity.valueMissing)
                        document.getElementById("emailMessage").innerHTML = email.validationMessage;
                    else if (email.validity.patternMismatch)
                        document.getElementById("emailMessage").innerHTML = "Please enter a valid email address.";

                }
            }
        )


    };//bindBtns

    /**
     * initialising function
     */
    function init() {
        bindBtns();
        /* toggleNavigation();
         bindTopNavToggle();*/
    }//end init

    //onload initialiser
    window.onload = init;
})();
