  
    
    // fonction titre animé hero 
    
    document.addEventListener("DOMContentLoaded", function () {
        const title = document.querySelector(".animated-title");
      
        setTimeout(function () {
          title.classList.add("show");
        }, 500);
      });
        
      
      // menu burger
    document.addEventListener("DOMContentLoaded", function () {
        var header = document.getElementById("header");
        var mobileNavToggle = document.getElementById("mobile-nav-toggle");
        var navbarMobile = document.getElementById("navbar-mobile");
        var navbarMobileList = navbarMobile.querySelector("ul");

        function closeMobileMenu() {
            navbarMobile.classList.remove("active");
        }

        mobileNavToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            navbarMobile.classList.toggle("active");
        });

        navbarMobileList.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                closeMobileMenu();
            }
        });

        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 991) {
                closeMobileMenu();
            }
        });
    });

      

   
  // scroll navbar 
  
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });
});


   // indicateur de défilement 
   function mettreAJourIndicateurDefilement() {
    const hauteurDefilable = document.documentElement.scrollHeight - window.innerHeight;
    const positionDefilement = window.scrollY;
    const progression = (positionDefilement / hauteurDefilable) * 100;
    document.getElementById('indicateur-defilement').style.width = `${progression}%`;
  }

  window.addEventListener('scroll', mettreAJourIndicateurDefilement);

  mettreAJourIndicateurDefilement();


  //  survol des compétences 
  document.addEventListener('DOMContentLoaded', function () {
    var skillInfo = document.getElementById('skillInfo');

    function showSkillInfo(skill) {
        var skillData = {
            html: "Langage de balisage utilisé pour créer des pages web.",
            css: "Langage de style permettant de styliser les pages web.",
            javascript: "Langage de programmation utilisé pour rendre les pages web interactives."
        };

        skillInfo.textContent = skillData[skill];
    }

    var skills = document.querySelectorAll('.skill');

    skills.forEach(function (skill) {
        skill.addEventListener('mouseover', function () {
            showSkillInfo(skill.id);
        });

        skill.addEventListener('mouseout', function () {
            skillInfo.textContent = '';
        });
    });
});


// bouton haut de page 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
 
    var mybutton = document.getElementById("btnhdp");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}