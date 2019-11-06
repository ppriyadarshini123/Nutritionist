
(function(){
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

    /**
     * @name tabClicked
     * @desc code for the changing picture in the Big Picture section when the tabs are clicked
     */
    function tabClicked(tabName)
    {
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
        }/*for loop*/
    }//tabClicked

    /**
     * @name mobile
     * @desc code for the changing picture when the tabs are clicked, for the mobile viewport
     */
    function mobile()
    {
        enquire.register("screen and (max-width:360px)", {
            match: function(){

                $menuIcon.on('click', function () {
                    $('.topNav').slideToggle("fast", "linear");
                });

                if(imgPic2){
                    /*Injecting HTML in the picture element to add img tag*/
                    let imgText1 = `<img class="pic"  alt="changingpic" src="dist/imgs/home/optimized/consultancy-new-180x200.png">`;
                    imgPic2[0].innerHTML = imgText1;

                    /*Injecting HTML in the picture element to add img tag*/
                    let imgText2 = `<img class="pic"  alt="changingpic" src="dist/imgs/home/optimized/corporateNutritionNew-180x200.png">`;
                    imgPic3[0].innerHTML = imgText2;

                    imgPic2[0].style.display = "block";
                    imgPic3[0].style.display = "block";
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
               if(tabWorkshop.length > 0)
               {
                    /*With getElementByClassName, we get a a HTML collection, therefore we use imgPic2[0]*/
                    imgPic2[0].style.display = "none";
                    imgPic3[0].style.display = "none";

                    tabClicked(tabWorkshop);
                    tabClicked(tabConsultancy);
                    tabClicked(tabCorporateNutrition);
                }/*if*/
            },
            unmatch: function(){

            }
        });/*enquire.register*/
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
            },
            unmatch: function(){

            }
        });/*enquire.register*/
    }//laptop

    /**
     * @name desktop
     * @desc code for the changing picture when the tabs are clicked, for the desktop viewport
     */
    function desktop()
    {
        enquire.register("screen and (min-width: 1200px)", {
            match: function(){
                if(workshops.length > 0){
                    tabClicked(workshops);
                    tabClicked(consultancy);
                    tabClicked(corporateNutrition);
                }/*if*/
            },
            unmatch: function(){

            }
        });/*enquire.register*/
    }//desktop

    /**
     * @name validation
     * @desc CONTACT FORM SUBMIT BUTTON VALIDATION - validation for name, phone and email
     */
    function validation()
    {
        console.log(submit);
        if(submit){
            /*CONTACT FORM SUBMIT BUTTON VALIDATION*/
            for(let j=0; j< submit.length; j++) {
                submit[j].addEventListener("click", function () {
                        const txtBox = document.getElementsByClassName("txtBox");

                        if (!txtBox[0].checkValidity()) {
                            if (txtBox[0].validity.valueMissing)
                                document.getElementsByClassName("formMessage")[0].innerHTML = txtBox[0].validationMessage;
                            else if (!isNaN(parseInt(document.getElementsByClassName("txtBox")[0].value)))
                                document.getElementsByClassName("formMessage")[0].innerHTML = "Please enter characters only.";
                            else document.getElementsByClassName("formMessage")[0].innerHTML = "";
                        }/*if(!fName.checkValidity())*/

                        if (!txtBox[1].checkValidity()) {
                            if (txtBox[1].validity.valueMissing)
                                document.getElementsByClassName("formMessage")[1].innerHTML = txtBox[1].validationMessage;
                            else if (isNaN(parseInt(txtBox[1].value)))
                                document.getElementsByClassName("formMessage")[1].innerHTML = "Please enter numbers only.";
                            else document.getElementsByClassName("formMessage")[1].innerHTML = "";
                        }/* if(!phone.checkValidity())*/

                        if (!txtBox[2].checkValidity()) {
                            console.log(txtBox[2].validity);
                            if (txtBox[2].validity.valueMissing)
                                document.getElementsByClassName("formMessage")[2].innerHTML = txtBox[2].validationMessage;
                            else if (txtBox[2].validity.patternMismatch)
                                document.getElementsByClassName("formMessage")[2].innerHTML = "Please enter a valid email address.";
                            else document.getElementsByClassName("formMessage")[2].innerHTML = "";
                        }/*if(!email.checkValidity())*/
                    }/* if(!fName.checkValidity())*/
                )/*submit.addEventListener*/
            }/*For tabName*/
        }/*if*/
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

        validation();

    }//bindBtns

    /**
     * @name init
     * @desc Initializing function
     */
    function init() {
        bindBtns();
    }//end init

    window.addEventListener("load", init);
})();//close iffy
