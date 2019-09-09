
(function(){

    /* const openNavigation = document.getElementById("openNav");
     const closeNavigation = document.getElementById("closeNav");*/

    const pic1 = document.getElementById("pic1");
    const pic2 = document.getElementById("pic2");
    const pic3 = document.getElementById("pic3");

    const cPic1 = document.getElementsByClassName("cPic1");
    const cPic2 = document.getElementsByClassName("cPic2");
    const cPic3 = document.getElementsByClassName("cPic3");

    const workshops = document.getElementById("workshops");
    const consultancy = document.getElementById("consultancy");
    const corporateNutrition = document.getElementById("corporateNutrition");
    const changingPic = document.getElementById("changingPic");
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    const row3 = document.getElementById("row3");


    const tabWorkshop = document.getElementById("tabWorkshop");
    const tabConsultancy = document.getElementById("tabConsultancy");
    const tabCorporateNutrition = document.getElementById("tabCorporateNutrition");

    const submit = document.getElementById("submit");

    const $menuIcon = $('#openNav');
    /*  const topUI = $('.topNav').find('.wrapper')[0];*/

    /* FUNCTIONS */
    /* This is old way of implementing opening and closing of navigation.
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
     * @name bindBtns
     * @desc this will bind all the elements to their events
     */
    function bindBtns() {

        enquire.register("screen and (max-width:360px)", {
            match: function(){

                /*old code*/
               /* $menuIcon.click(function(){
                    $('.topNav').slideToggle("fast");
                });*/
               /*new code*/
                $menuIcon.on('click',function(){
                    $('.topNav').slideToggle("fast");
                });
            },
            unmatch: function(){

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
                    cPic2.style.display = "none";
                    cPic3.style.display = "none";
                    pic1.src = "dist/imgs/home/optimized/workshops-700x810.png";
                    cPic1.style.display = "block";
                });/*Click event tabWorkshop*/

                /*tabConsultancy*/
                tabConsultancy.addEventListener("mouseleave", function(){
                    tabConsultancy.style.backgroundColor = "#E6842E";
                });/*Mouseleave event tabConsultancy*/

                tabConsultancy.addEventListener("click", function () {
                    tabConsultancy.style.backgroundColor = "#402005";
                    tabConsultancy.style.color = "#ffffff";
                    cPic1.style.display = "none";
                    cPic3.style.display = "none";
                    pic2.src = "dist/imgs/home/optimized/consultancy-700x810.png";
                    cPic2.style.display = "block";
                });/*Click event tabConsultancy*/

                /*tabCorporate Nutrition*/
                tabCorporateNutrition.addEventListener("mouseleave", function(){
                    tabCorporateNutrition.style.backgroundColor = "#E6842E";
                });/*Mouseleave event tabCorporateNutrition*/

                tabCorporateNutrition.addEventListener("click", function () {
                    tabCorporateNutrition.style.backgroundColor = "#402005";
                    tabCorporateNutrition.style.color = "#ffffff";
                    cPic1.style.display = "none";
                    cPic2.style.display = "none";
                    pic3.src = "dist/imgs/home/optimized/apple-700x810.png";
                    cPic3.style.display = "block";
                });/*Click event tabCorporateNutrition*/
            },
            unmatch: function(){

            }
        });

        enquire.register("screen and (min-width: 769px) and (max-width: 1200px)", {
            match: function(){
                /*Workshops*/
                workshops.addEventListener("mouseleave", function(){
                    workshops.style.backgroundColor = "#E6842E";
                });/*MouseLeave event Workshops*/

                workshops.addEventListener("click", function (e) {
                    /*To prevent the anchor from working*/
                    e.preventDefault();
                    workshops.style.backgroundColor = "#402005";
                    workshops.style.color = "#ffffff";

                    /*Since the img tag is inside the picture element*/
                    let htmlForPic;
                    htmlForPic = " <img class=\"pic\" id=\"pic1\" alt=\"changingpic\" src=\"dist/imgs/home/optimized/workshops-700x810.png\">'>";
                    changingPic.innerHTML = htmlForPic;
                    cPic2.style.display = "none";
                    cPic3.style.display = "none";
                    cPic1.style.display = "block";
                });/*Click event Workshops*/

                /*Consultancy*/
                consultancy.addEventListener("mouseleave", function(){
                    consultancy.style.backgroundColor = "#E6842E";
                });/*Mouseleave event tabConsultancy*/

                consultancy.addEventListener("click", function (e) {
                    /*To prevent the anchor from working*/
                    e.preventDefault();
                    consultancy.style.backgroundColor = "#402005";
                    consultancy.style.color = "#ffffff";

                    /*Since the img tag is inside the picture element*/
                    let htmlForPic;
                    htmlForPic = " <img class=\"pic\" id=\"pic1\" alt=\"changingpic\" src=\"dist/imgs/home/optimized/consultancy-700x810.png\">";
                    changingPic.innerHTML = htmlForPic;
                    cPic2.style.display = "block";
                    cPic3.style.display = "none";
                    cPic1.style.display = "none";
                });/*Click event consultancy*/

                /*corporate Nutrition*/
                corporateNutrition.addEventListener("mouseleave", function(){
                    corporateNutrition.style.backgroundColor = "#E6842E";
                });/*Mouseleave event corporateNutrition*/

                corporateNutrition.addEventListener("click", function (e) {
                    /*To prevent the anchor from working*/
                    e.preventDefault();
                    corporateNutrition.style.backgroundColor = "#402005";
                    corporateNutrition.style.color = "#ffffff";

                    /*Since the img tag is inside the picture element*/
                    let htmlForPic;
                    htmlForPic = " <img class=\"pic\" id=\"pic1\" alt=\"changingpic\" src=\"dist/imgs/home/optimized/apple-700x810.png\">";
                    changingPic.innerHTML = htmlForPic;
                    cPic1.style.display = "none";
                    cPic2.style.display = "none";
                    cPic3.style.display = "block";


                });/*Click event corporateNutrition*/
            },
            unmatch: function(){

            }
        });


        /*if (openNavigation != null) openNavigation.addEventListener("click", openNav);
        if (closeNavigation != null) closeNavigation.addEventListener("click", closeNav);
*/

        /*CONTACT FORM SUBMIT BUTTON VALIDATION*/
        submit.addEventListener("click", function()
            {
                const fName = document.getElementById("name");
                const phone = document.getElementById("phone");
                const email = document.getElementById("email");

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
     * @name init
     * @desc Initializing function
     */
    function init() {
        bindBtns();
    }//end init

    //onload initialiser
    //oldcode
    /*window.onload = init;*/
    //new code
    window.addEventListener("load", init);
})();
