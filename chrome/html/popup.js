document.addEventListener('DOMContentLoaded', function() {
    let dropdownLinks = document.querySelectorAll('.dropdown-content a.shortcutHref');
    let dropbtn = document.querySelector('.dropbtn .dropbtn_icon');

    dropdownLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            let linkData = {
                'href': this.getAttribute('href'),
                'text': this.innerText
            };

            chrome.storage.sync.set({'selectedLink': linkData}, function() {
                console.log('Link data is set to ' + JSON.stringify(linkData));
                dropbtn.innerText = linkData.text;
            });
        });
    });

    document.querySelector('.dropbtn').addEventListener('click', function(event) {
        event.preventDefault();
        chrome.storage.sync.get(['selectedLink'], function(result) {
            if(result.selectedLink) {
                window.open(result.selectedLink.href, '_blank');
            }
        });
    });

    chrome.storage.sync.get(['selectedLink'], function(result) {
        if(result.selectedLink) {
            dropbtn.innerText = result.selectedLink.text;
        }
    });
});
