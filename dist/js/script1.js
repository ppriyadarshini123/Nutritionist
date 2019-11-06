
(function(){

    /* const openNavigation = document.getElementById("openNav");
     const closeNavigation = document.getElementById("closeNav");*/

    const pic = document.getElementsByClassName("pic");

    const cPic1 = document.getElementsByClassName("cPic1");
    const cPic2 = document.getElementsByClassName("cPic2");
    const cPic3 = document.getElementsByClassName("cPic3");

    const imgPic1 = document.getElementsByClassName("imgPic1");
    const imgPic2 = document.getElementsByClassName("imgPic2");
    const imgPic3 = document.getElementsByClassName("imgPic3");

    const workshops = document.getElementsByClassName("workshops");
    const consultancy = document.getElementsByClassName("consultancy");
    const corporateNutrition = document.getElementsByClassName("corporateNutrition");

    const tabWorkshop = document.getElementsByClassName("tabWorkshop");
    const tabConsultancy = document.getElementsByClassName("tabConsultancy");
    const tabCorporateNutrition = document.getElementsByClassName("tabCorporateNutrition");

    const submit = document.getElementsByClassName("submitBtn");

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
     * @name tabClicked
     * @desc code for the changing picture in the Big Picture section when the tabs are clicked
     */
    function tabClicked(tabName)
    {
        /* tabName.addEventListener("mouseleave", function(){
             tabName.style.backgroundColor = "#E6842E";
         });*/

        /*.getElementByClassName returns an Array like objects of the elements matching the criteria*/
        for(let i=0; i< tabName.length; i++) {
            tabName[i].addEventListener("click", function (e) {
                e.preventDefault();
                if ((tabName[i].classList[0] == "tabWorkshop") || (tabName[i].classList[0] == "workshops")) {
                    /*For tablet size*/
                    if (tabName[i].classList[0] == "tabWorkshop") {
                        tabWorkshop[0].style.backgroundColor = "#402005";
                        tabConsultancy[0].style.backgroundColor = "#E6842E";
                        tabCorporateNutrition[0].style.backgroundColor = "#E6842E";
                        pic[1].srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";
                    }//if tabWorkshop

                    if (tabName[i].classList[0] == "workshops") {

                        workshops[0].style.backgroundColor = "#402005";
                        consultancy[0].style.backgroundColor = "#E6842E";
                        corporateNutrition[0].style.backgroundColor = "#E6842E";

                        pic[2].srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";
                        pic[3].srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";
                        /*  imgPic1.style.display = "block";*/
                    }//if workshops
                }//if((tabName.id == "tabWorkshop") || (tabName.id == "workshops"))
                else if ((tabName[i].classList[0] == "tabConsultancy") || (tabName[i].classList[0] == "consultancy")) {
                    /*For tablet size*/
                    if (tabName[i].classList[0] == "tabConsultancy") {
                        tabConsultancy[0].style.backgroundColor = "#402005";
                        tabWorkshop[0].style.backgroundColor = "#E6842E";
                        tabCorporateNutrition[0].style.backgroundColor = "#E6842E";
                        pic[1].srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                    }//if(tabName.id == "tabConsultancy")
                    if (tabName[i].classList[0] == "consultancy") {
                        consultancy[0].style.backgroundColor = "#402005";
                        workshops[0].style.backgroundColor = "#E6842E";
                        corporateNutrition[0].style.backgroundColor = "#E6842E";
                        pic[2].srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                        pic[3].srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                    }//if(tabName.id == "consultancy")
                }//else if((tabName.id == "tabConsultancy")|| (tabName.id == "consultancy"))
                else if ((tabName[i].classList[0] == "tabCorporateNutrition") || (tabName[i].classList[0] == "corporateNutrition")) {
                    /*For tablet size*/
                    if (tabName[i].classList[0] == "tabCorporateNutrition") {
                        tabCorporateNutrition[0].style.backgroundColor = "#402005";
                        tabWorkshop[0].style.backgroundColor = "#E6842E";
                        tabConsultancy[0].style.backgroundColor = "#E6842E";
                        pic[1].srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                    }//if(tabName.id == "tabCorporateNutrition")
                    if (tabName[i].classList[0] == "corporateNutrition") {
                        consultancy[0].style.backgroundColor = "#E6842E";
                        workshops[0].style.backgroundColor = "#E6842E";
                        corporateNutrition[0].style.backgroundColor = "#402005";
                        pic[2].srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                        pic[3].srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                    }// if(tabName.id == "corporateNutrition")
                }// else if((tabName.id == "tabCorporateNutrition") || (tabName.id == "corporateNutrition"))

                //Display inline, there is no change in the height and width property of image, Display block starts a new line and takes up the whole width
                cPic1[0].display = "inline";
                cPic2[0].display = "none";
                cPic3[0].display = "none";
            }, false);//tabName.addEventListener("click", function(e)
        }
        /*or else*/
       /* Array.from(tabName).forEach(function(element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();
                if ((tabName.class == "tabWorkshop") || (tabName.class == "workshops")) {

                    /!*For tablet size*!/
                    if (tabName.class == "tabWorkshop") {
                        tabWorkshop.backgroundColor = "#402005";
                        tabConsultancy.backgroundColor = "#E6842E";
                        tabCorporateNutrition.backgroundColor = "#E6842E";
                        pic2.srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";

                    }//if tabWorkshop
                    if (tabName.class == "workshops") {
                        workshops.backgroundColor = "#402005";
                        consultancy.backgroundColor = "#E6842E";
                        corporateNutrition.backgroundColor = "#E6842E";

                        pic1.srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";
                        pic6.srcset = "dist/imgs/home/optimized/workshops-new-700x810.png";
                        /!*  imgPic1.style.display = "block";*!/
                    }//if workshops
                }//if((tabName.id == "tabWorkshop") || (tabName.id == "workshops"))
                else if ((tabName.class == "tabConsultancy") || (tabName.class == "consultancy")) {
                    /!*For tablet size*!/
                    if (tabName.class == "tabConsultancy") {
                        tabConsultancy.backgroundColor = "#402005";
                        tabWorkshop.backgroundColor = "#E6842E";
                        tabCorporateNutrition.backgroundColor = "#E6842E";
                        pic2.srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                    }//if(tabName.id == "tabConsultancy")
                    if (tabName.class == "consultancy") {
                        consultancy.backgroundColor = "#402005";
                        workshops.backgroundColor = "#E6842E";
                        corporateNutrition.backgroundColor = "#E6842E";
                        pic1.srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                        pic6.srcset = "dist/imgs/home/optimized/consultancy-new-700x810.png";
                    }//if(tabName.id == "consultancy")
                }//else if((tabName.id == "tabConsultancy")|| (tabName.id == "consultancy"))
                else if ((tabName.class == "tabCorporateNutrition") || (tabName.class == "corporateNutrition")) {
                    /!*For tablet size*!/
                    if (tabName.class == "tabCorporateNutrition") {
                        tabCorporateNutrition.backgroundColor = "#402005";
                        tabWorkshop.backgroundColor = "#E6842E";
                        tabConsultancy.backgroundColor = "#E6842E";
                        pic2.srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                    }//if(tabName.id == "tabCorporateNutrition")
                    if (tabName.class == "corporateNutrition") {
                        consultancy.backgroundColor = "#E6842E";
                        workshops.backgroundColor = "#E6842E";
                        corporateNutrition.backgroundColor = "#402005";
                        pic1.srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                        pic6.srcset = "dist/imgs/home/optimized/corporateNutritionNew-700x810.png";
                    }// if(tabName.id == "corporateNutrition")
                }// else if((tabName.id == "tabCorporateNutrition") || (tabName.id == "corporateNutrition"))

                //Display inline, there is no change in the height and width property of image, Display block starts a new line and takes up the whole width
                cPic1[0].display = "inline";
                cPic2[0].display = "none";
                cPic3[0].display = "none";
            });
        });*/
    }//tabClicked

    /**
     * @name mobile
     * @desc code for the changing picture when the tabs are clicked, for the mobile viewport
     */
    function mobile()
    {
        enquire.register("screen and (max-width:360px)", {
            match: function(){
                /*old code*/
                /* $menuIcon.click(function(){
                     $('.topNav').slideToggle("fast");
                 });*/
                /*new code*/
                $menuIcon.on('click', function () {
                    $('.topNav').slideToggle("fast", "linear");
                });

                /*const sPath = window.location.pathname;
                const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
                if(sPage == "index.html")*/
                if(imgPic2){
                    /*Injecting HTML in the picture element to add img tag*/
                    let imgText1 = `<img class="pic"  alt="changingpic" src="dist/imgs/home/optimized/consultancy-new-180x200.png">`;
                    imgPic2.innerHTML = imgText1;

                    /*Injecting HTML in the picture element to add img tag*/
                    let imgText2 = `<img class="pic"  alt="changingpic" src="dist/imgs/home/optimized/corporateNutritionNew-180x200.png">`;
                    imgPic3.innerHTML = imgText2;

                    imgPic2.display = "block";
                    imgPic3.display = "block";
                }
            },
            unmatch: function(){

            }
        });
    }//mobile

    /**
     * @name tablet
     * @desc code for the changing picture when the tabs are clicked, for the tablet viewport
     */
    function tablet()
    {
        enquire.register("screen and (min-width: 361px) and (max-width: 768px)", {
            match: function() {
                //To check which page we are in
               /* const sPath = window.location.pathname;
                const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
                if (sPage == "index.html") {*/

               if(tabWorkshop.length > 0){

                    /*With getElementByClassName, we get a a HTML collection, therefore we use imgPic2[0]*/
                    imgPic2[0].style.display = "none";
                    imgPic3[0].style.display = "none";

                    tabClicked(tabWorkshop);
                    tabClicked(tabConsultancy);
                    tabClicked(tabCorporateNutrition);
                }


                /*old and repetitive code*/
                /*  /!*tabWorkshop*!/
                  tabWorkshop.addEventListener("mouseleave", function(){
                      tabWorkshop.style.backgroundColor = "#E6842E";
                  });/!*MouseLeave event tabWorkshop*!/

                  tabWorkshop.addEventListener("click", function () {
                      tabWorkshop.style.backgroundColor = "#402005";
                      tabWorkshop.style.color = "#ffffff";
                      pic2.srcset = "dist/imgs/home/optimized/workshops-700x810.png";
                      cPic2.style.display = "none";
                      cPic3.style.display = "none";
                      cPic1.style.display = "block";
                  });/!*Click event tabWorkshop*!/

                  /!*tabConsultancy*!/
                  tabConsultancy.addEventListener("mouseleave", function(){
                      tabConsultancy.style.backgroundColor = "#E6842E";
                  });/!*Mouseleave event tabConsultancy*!/

                  tabConsultancy.addEventListener("click", function () {
                      tabConsultancy.style.backgroundColor = "#402005";
                      tabConsultancy.style.color = "#ffffff";
                      pic2.srcset = "dist/imgs/home/optimized/consultancy-700x810.png";
                      cPic1.style.display = "none";
                      cPic3.style.display = "none";
                      cPic2.style.display = "block";
          });/!*Click event tabConsultancy*!/

          /!*tabCorporate Nutrition*!/
          tabCorporateNutrition.addEventListener("mouseleave", function(){
              tabCorporateNutrition.style.backgroundColor = "#E6842E";
          });/!*Mouseleave event tabCorporateNutrition*!/

          tabCorporateNutrition.addEventListener("click", function () {
              tabCorporateNutrition.style.backgroundColor = "#402005";
              tabCorporateNutrition.style.color = "#ffffff";
              pic2.srcset = "dist/imgs/home/optimized/apple-700x810.png";
              cPic1.style.display = "none";
              cPic2.style.display = "none";
              cPic3.style.display = "block";
          });*//*Click event tabCorporateNutrition*/
            },
            unmatch: function(){

            }
        });
    }//tablet

    /**
     * @name laptop
     * @desc code for the changing picture when the tabs are clicked, for the laptop viewport
     */
    function laptop()
    {
        enquire.register("screen and (min-width: 769px) and (max-width: 1200px)", {
            match: function(){
                if(workshops.length > 0) {
                    tabClicked(workshops);
                    tabClicked(consultancy);
                    tabClicked(corporateNutrition);
                }
                /*old and repetitive code*/
                /*/!*Workshops*!/
                workshops.addEventListener("mouseleave", function(){
                    workshops.style.backgroundColor = "#E6842E";
                });/!*MouseLeave event Workshops*!/

                workshops.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    workshops.style.backgroundColor = "#402005";
                    workshops.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!*  let htmlForPic;*!/
                    //Old code
                    /!*htmlForPic = " <img class=\"pic\" id=\"pic1\" alt=\"changingpic\" src=\"dist/imgs/home/optimized/workshops-700x810.png\">'>";*!/
                    //New code using template literals, when you write html in a string
                    /!*htmlForPic = `<img class="pic" id="pic1" alt="changingpic" src="dist/imgs/home/optimized/workshops-700x810.png">`;*!/
                    //old code
                    /!* htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/workshops-700x810.png" id="pic1" class="pic">`;
                     pic1.innerHTML = htmlForPic;*!/
                    //new code trial
                    // did not work
                    /!* $('pic1').attr('srcset','dist/imgs/home/optimized/workshops-700x810.png');
                     console.log(pic1.src)*!/
                    pic1.srcset = "dist/imgs/home/optimized/workshops-700x810.png";
                    cPic2.style.display = "none";
                    cPic3.style.display = "none";
                    cPic1.style.display = "block";
                });/!*Click event Workshops*!/

                /!*Consultancy*!/
                consultancy.addEventListener("mouseleave", function(){
                    consultancy.style.backgroundColor = "#E6842E";
                });/!*Mouseleave event tabConsultancy*!/

                consultancy.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    consultancy.style.backgroundColor = "#402005";
                    consultancy.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!* let htmlForPic;
                     htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/consultancy-700x810.png" id="pic1" class="pic">`;
                     pic1.innerHTML = htmlForPic;*!/
                    // did not work
                    /!*$('pic1').attr('srcset','dist/imgs/home/optimized/consultancy-700x810.png');*!/
                    pic1.srcset = "dist/imgs/home/optimized/consultancy-700x810.png";
                    cPic2.style.display = "block";
                    cPic3.style.display = "none";
                    cPic1.style.display = "none";
                });/!*Click event consultancy*!/

                /!*corporate Nutrition*!/
                corporateNutrition.addEventListener("mouseleave", function(){
                    corporateNutrition.style.backgroundColor = "#E6842E";
                });/!*Mouseleave event corporateNutrition*!/

                corporateNutrition.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    corporateNutrition.style.backgroundColor = "#402005";
                    corporateNutrition.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!*let htmlForPic;
                    htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/apple-700x810.png" id="pic1" class="pic">`;
                    pic1.innerHTML = htmlForPic;*!/

                    // did not work
                    /!*$('pic1').attr('srcset','dist/imgs/home/optimized/apple-700x810.png');*!/

                    pic1.srcset = "dist/imgs/home/optimized/apple-700x810.png";
                    cPic1.style.display = "none";
                    cPic2.style.display = "none";
                    cPic3.style.display = "block";
                });/!*Click event corporateNutrition*!/*/


            },
            unmatch: function(){

            }
        });
    }//laptop

    /**
     * @name desktop
     * @desc code for the changing picture when the tabs are clicked, for the desktop viewport
     */
    function desktop()
    {
        enquire.register("screen and (min-width: 1200px)", {
            match: function(){
                /*const sPath = window.location.pathname;
                const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
                if(sPage == "index.html")*/
                if(workshops.length > 0){
                    tabClicked(workshops);
                    tabClicked(consultancy);
                    tabClicked(corporateNutrition);
                }
                /*/!*Workshops*!/
                workshops.addEventListener("mouseleave", function(){
                    workshops.style.backgroundColor = "#E6842E";
                });/!*MouseLeave event Workshops*!/

                workshops.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    workshops.style.backgroundColor = "#402005";
                    workshops.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!*  let htmlForPic;*!/
                    //Old code
                    /!*htmlForPic = " <img class=\"pic\" id=\"pic1\" alt=\"changingpic\" src=\"dist/imgs/home/optimized/workshops-700x810.png\">'>";*!/
                    //New code using template literals, when you write html in a string
                    /!*htmlForPic = `<img class="pic" id="pic1" alt="changingpic" src="dist/imgs/home/optimized/workshops-700x810.png">`;*!/
                    //old code
                    /!* htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/workshops-700x810.png" id="pic1" class="pic">`;
                     pic1.innerHTML = htmlForPic;*!/
                    //new code trial
                    // did not work
                    /!* $('pic1').attr('srcset','dist/imgs/home/optimized/workshops-700x810.png');
                     console.log(pic1.src)*!/
                    pic6.srcset = "dist/imgs/home/optimized/workshops-700x810.png";
                    cPic2.style.display = "none";
                    cPic3.style.display = "none";
                    cPic1.style.display = "block";
                });/!*Click event Workshops*!/

                /!*Consultancy*!/
                consultancy.addEventListener("mouseleave", function(){
                    consultancy.style.backgroundColor = "#E6842E";
                });/!*Mouseleave event tabConsultancy*!/

                consultancy.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    consultancy.style.backgroundColor = "#402005";
                    consultancy.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!* let htmlForPic;
                     htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/consultancy-700x810.png" id="pic1" class="pic">`;
                     pic1.innerHTML = htmlForPic;*!/
                    // did not work
                    /!*$('pic1').attr('srcset','dist/imgs/home/optimized/consultancy-700x810.png');*!/
                    pic6.srcset = "dist/imgs/home/optimized/consultancy-700x810.png";
                    cPic2.style.display = "block";
                    cPic3.style.display = "none";
                    cPic1.style.display = "none";
                });/!*Click event consultancy*!/

                /!*corporate Nutrition*!/
                corporateNutrition.addEventListener("mouseleave", function(){
                    corporateNutrition.style.backgroundColor = "#E6842E";
                });/!*Mouseleave event corporateNutrition*!/

                corporateNutrition.addEventListener("click", function (e) {
                    /!*To prevent the anchor from working*!/
                    e.preventDefault();
                    corporateNutrition.style.backgroundColor = "#402005";
                    corporateNutrition.style.color = "#ffffff";

                    /!*Since the img tag is inside the picture element*!/
                    /!*let htmlForPic;
                    htmlForPic = `<source media="(max-width: 1200px)" srcset="dist/imgs/home/optimized/apple-700x810.png" id="pic1" class="pic">`;
                    pic1.innerHTML = htmlForPic;*!/

                    // did not work
                    /!*$('pic1').attr('srcset','dist/imgs/home/optimized/apple-700x810.png');*!/

                    pic6.srcset = "dist/imgs/home/optimized/apple-700x810.png";
                    cPic1.style.display = "none";
                    cPic2.style.display = "none";
                    cPic3.style.display = "block";
                });/*Click event corporateNutrition*/

                /*To display tooltip in 'Feel good factor section'*/
             /*   $('picLP1').mousemove(function(e){
                   $('span', this).css({left: e.pageX - 100, top: e.pageY + 10});
                });*/
            },
            unmatch: function(){

            }
        });
    }//desktop

    /**
     * @name validation
     * @desc CONTACT FORM SUBMIT BUTTON VALIDATION - validation for name, phone and email
     */
    function validation()
    {
        /*const sPath = window.location.pathname;
        const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        if(sPage == "index.html")*/
        if(submit){
            /*CONTACT FORM SUBMIT BUTTON VALIDATION*/
            for(let j=0; j< submit.length; j++) {
                submit[j].addEventListener("click", function () {
                        const txtBox = document.getElementsByClassName("txtBox");

                        /*const fName = document.getElementsByClassName("name");
                        const phone = document.getElementById("phone");
                        const email = document.getElementById("email");*/

                        if (!txtBox[0].checkValidity()) {
                            if (txtBox.name.validity.valueMissing)
                                document.getElementsByClassName("formMessage")[0].innerHTML = txtBox.name.validationMessage;
                            else if (!isNaN(parseInt(document.getElementsByClassName("txtBox")[0].value)))
                                document.getElementsByClassName("formMessage")[0].innerHTML = "Please enter characters only.";
                        }/*if(!fName.checkValidity())*/

                        if (!txtBox[1].checkValidity()) {
                            if (txtBox[1].validity.valueMissing)
                                document.getElementsByClassName("formMessage")[1].innerHTML = txtBox[1].validationMessage;
                            else if (isNaN(parseInt(txtBox[1].value))) {
                                document.getElementsByClassName("formMessage")[1].innerHTML = "Please enter numbers only.";
                            }/*else if*/
                        }/* if(!phone.checkValidity())*/

                        if (!txtBox[2].checkValidity()) {
                            if (txtBox[2].validity.valueMissing)
                                document.getElementsByClassName("formMessage")[2].innerHTML = txtBox[2].validationMessage;
                            else if (txtBox[2].validity.patternMismatch)
                                document.getElementsByClassName("formMessage")[2].innerHTML = "Please enter a valid email address.";
                        }/*if(!email.checkValidity())*/
                        else document.getElementsByClassName("formMessage")[2].innerHTML = "";
                    }/* if(!fName.checkValidity())*/
                )/*submit.addEventListener*/
            }/*For tabName*/
        }
    }//validation

    /**
     * @name bindBtns
     * @desc this will bind all the elements to their events
     */
    function bindBtns() {

        mobile();

        tablet();

        laptop();

        desktop();

        /*if (openNavigation != null) openNavigation.addEventListener("click", openNav);
        if (closeNavigation != null) closeNavigation.addEventListener("click", closeNav);
*/
        validation();

    }//bindBtns

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
})();//close iffy
