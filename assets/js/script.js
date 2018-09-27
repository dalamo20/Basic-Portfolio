function myFunction(x) {
    x.classList.toggle("change");
}

//THIS IS PRACTICE 

let toggleNavStatus = false;

let toggleNav = function() {
    let getBarOne = document.querySelector(".bar1");
    let getBarTwo = document.querySelector(".bar2");
    let getBarThree = document.querySelector(".bar3");
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); //querySelectorAll puts list in array

    if (toggleNavStatus === false) {
        getBarOne.style.background = "white";
        getBarTwo.style.background = "white";
        getBarThree.style.background = "white";
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";
        
        let arrayLength = getSidebarLinks.length;
        
        for (let i=0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;

    }
    else if (toggleNavStatus === true) {
        getBarOne.style.background = "#333";
        getBarTwo.style.background = "#333";
        getBarThree.style.background = "#333";
        getSidebar.style.width = "0";
        getSidebar.style.padding = "0;"
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;

        for (let i=0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    };
};
