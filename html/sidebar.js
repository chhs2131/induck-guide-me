document.addEventListener('DOMContentLoaded', function() {
    /*
    var link_button = document.querySelectorAll('.link_button');
    [].forEach.call(link_button, function(lb) {
        lb.addEventListener("click",function(){makeNewTab(lb.innerTEXT)});
    });

    function makeNewTab(link_url) {
        alert(String(link_url));
        whale.tabs.create({
            //url: String(link_url)
            url: `https://www.naver.com/`
        })
    }
    */

    var link_homepage = document.getElementById("l_homepage");
    var link_iclass = document.getElementById("l_iclass");
    var link_mail = document.getElementById("l_mail");
    var link_click = document.getElementById("l_click");
    var link_grade = document.getElementById("l_grade");
    var link_money = document.getElementById("l_money");
    var link_calendar = document.getElementById("l_calendar");
    var link_certification = document.getElementById("l_certification");
    var link_library = document.getElementById("l_library");
    var link_map = document.getElementById("l_map");
    var link_meal = document.getElementById("l_meal");
    var link_everytime = document.getElementById("l_everytime");

    link_homepage.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_iclass.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_mail.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_click.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_grade.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_money.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_calendar.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_certification.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_library.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_map.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_meal.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });
    link_everytime.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.naver.com/`
        });
    });

}) 
          