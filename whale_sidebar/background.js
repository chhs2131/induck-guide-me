/*
whale.browserAction.onClicked.addListener(() => {
    whale.tabs.create({
        url: 'http://news.naver.com/'
    });
})
*/

/*
//사이트 Redirect 관련 예제
var host = "https://learn.inha.ac.kr/theme/switchdevice.php?url=https%3A%2F%2Flearn.inha.ac.kr%2Flogin%2Findex.php&device=default&sesskey=KZ9qiJoSct";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         //return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
         return {redirectUrl: host};
    },
    {
        urls: [
            "https://learn.inha.ac.kr/test123"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
*/
