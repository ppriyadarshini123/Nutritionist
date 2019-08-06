
(function(){

    /* const openNavigation = document.getElementById("openNav");
     const closeNavigation = document.getElementById("closeNav");*/

    let pic1 = document.getElementById("pic1");
    let pic2 = document.getElementById("pic2");
    let pic3 = document.getElementById("pic3");

    let idPic1 = document.getElementById("idPic1");
    let idPic2 = document.getElementById("idPic2");
    let idPic3 = document.getElementById("idPic3");

    const tabWorkshop = document.getElementById("tabWorkshop");
    const tabConsultancy = document.getElementById("tabConsultancy");
    const tabCorporateNutrition = document.getElementById("tabCorporateNutrition");

    const submit = document.getElementById("submit");

    const $menuIcon = $('#openNav');
    /*  const topUI = $('.topNav').find('.wrapper')[0];*/

    /* FUNCTIONS */
    /*
       /!**
        *  Open Navigation when Hamburger is clicked
        *!/
       function openNav()
       {
           document.getElementById("nav1").style.width = "100%";
           document.getElementById("top").style.marginLeft = "100%";
       }//openNav

       /!**
        *  Close Navigation when Cross is clicked
        *!/
       function closeNav() {
           document.getElementById("nav1").style.width = "0";
           document.getElementById("top").style.marginLeft= "0";
       }//closeNav
   */
    /**
     *  Bind fields to event handler
     */
    function bindBtns() {

        enquire.register("screen and (max-width:360px)", {
           match: function(){
               $menuIcon.click(function(){
                   $('.topNav').slideToggle("fast");
               });
           },
           unmatch: function(){
               $('.topNav').show();
           }
        });

        enquire.register("screen and (min-width: 361px) and (max-width: 768px)", {
            match: function(){
                /*tabWorkshop*/
                tabWorkshop.addEventListener("mouseleave", function(){
                    tabWorkshop.style.backgroundColor = "#E6842E";
                });/*MouseLeave event tabWorkshop*/

                tabWorkshop.addEventListener("click", function () {
                    tabWorkshop.style.backgroundColor = "#402005";
                    tabWorkshop.style.color = "#ffffff";
                    idPic2.style.display = "none";
                    idPic3.style.display = "none";
                    pic1.src = "dist/imgs/home/optimized/workshops-700x810.png";
                    idPic1.style.display = "block";
                });/*Click event tabWorkshop*/

                /*tabConsultancy*/
                tabConsultancy.addEventListener("mouseleave", function(){
                    tabConsultancy.style.backgroundColor = "#E6842E";
                });/*Mouseleave event tabConsultancy*/

                tabConsultancy.addEventListener("click", function () {
                    tabConsultancy.style.backgroundColor = "#402005";
                    tabConsultancy.style.color = "#ffffff";
                    idPic1.style.display = "none";
                    idPic3.style.display = "none";
                    pic2.src = "dist/imgs/home/optimized/consultancy-700x810.png";
                    idPic2.style.display = "block";
                });/*Click event tabConsultancy*/

                /*tabCorporate Nutrition*/
                tabCorporateNutrition.addEventListener("mouseleave", function(){
                    tabCorporateNutrition.style.backgroundColor = "#E6842E";
                });/*Mouseleave event tabCorporateNutrition*/

                tabCorporateNutrition.addEventListener("click", function () {
                    tabCorporateNutrition.style.backgroundColor = "#402005";
                    tabCorporateNutrition.style.color = "#ffffff";
                    idPic1.style.display = "none";
                    idPic2.style.display = "none";
                    pic3.src = "dist/imgs/home/optimized/apple-700x810.png";
                    idPic3.style.display = "block";
                });/*Click event tabCorporateNutrition*/
            },
            unmatch: function(){

            }
        });


        /*if (openNavigation != null) openNavigation.addEventListener("click", openNav);
        if (closeNavigation != null) closeNavigation.addEventListener("click", closeNav);
*/


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
                }/*if(!fName.checkValidity())*/

                if(!phone.checkValidity()) {

                    if(phone.validity.valueMissing)
                        document.getElementById("phoneMessage").innerHTML = phone.validationMessage;
                    else if (isNaN(parseInt(phone.value))) {
                        document.getElementById("phoneMessage").innerHTML = "Please enter numbers only.";
                    }
                }/* if(!phone.checkValidity())*/

                if(!email.checkValidity()) {
                    if (email.validity.valueMissing)
                        document.getElementById("emailMessage").innerHTML = email.validationMessage;
                    else if (email.validity.patternMismatch)
                        document.getElementById("emailMessage").innerHTML = "Please enter a valid email address.";
                }/*if(!email.checkValidity())*/
            }/* if(!fName.checkValidity())*/
        )/*submit.addEventListener*/

    };//bindBtns

    /**
     * initialising function
     */
    function init() {
        bindBtns();
    }//end init

    //onload initialiser
    window.onload = init;
})();
