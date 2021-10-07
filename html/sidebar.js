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

    var link_iclass = document.getElementById("l_iclass");
    var link_mail = document.getElementById("l_mail");
    var link_library = document.getElementById("l_library");
    var link_meal = document.getElementById("l_meal");

    var link_click = document.getElementById("l_click");
    var link_certification = document.getElementById("l_certification");
    var link_portal = document.getElementById("l_portal");
    var link_calendar = document.getElementById("l_calendar");

    var link_hire = document.getElementById("l_hire");
    var link_map = document.getElementById("l_map");
    var link_temple = document.getElementById("l_temple");
    var link_everytime = document.getElementById("l_everytime");

    link_iclass.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://learn.inha.ac.kr/`
        });
    });
    link_mail.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://cloud.inha.ac.kr/t/inha.ac.kr`
        });
    });
    link_library.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://lib.inha.ac.kr/kor/`
        });
    });
    link_meal.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.inha.ac.kr/kr/1072/subview.do`
        });
    });


    link_click.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://sugang.inha.ac.kr/sugang/`
        });
    });
    link_certification.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://cert.inha.ac.kr`
        });
    });
    link_portal.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://portal.inha.ac.kr/`
        });
    });
    link_calendar.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.inha.ac.kr/kr/1908/subview.do`
        });
    });
    

    link_hire.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://job.inha.ac.kr/`
        });
    });
    link_map.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://www.inha.ac.kr/kr/964/subview.do`
        });
    });
    link_temple.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://plaza.inha.ac.kr/plaza/index.do`
        });
    });
    link_everytime.addEventListener("click", function() {     
        whale.tabs.create({
            url: `https://everytime.kr/`
        });
    });


    /*
        "현재 사용안함"
    var link_homepage = document.getElementById("l_homepage");
    var link_grade = document.getElementById("l_grade");
    var link_money = document.getElementById("l_money");

    link_homepage.addEventListener("click", function() {     
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
    */
}) 
          