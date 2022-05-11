// console.log('hello world');

// function browserFinder() {
//     if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
//         return 'Opera';
//     } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//         return 'Chrome';
//     } else if (navigator.userAgent.indexOf("Safari") != -1) {
//         return 'Safari';
//     } else if (navigator.userAgent.indexOf("Firefox") != -1) {
//         return 'Firefox';
//     } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
//         return 'Internet Explorer';
//     } else {
//         return 'Not sure!';
//     }
// };

// tempData for the extension
let openTabs = 0;

// function for getting the tabs in the current window of the browser
function getTabs() {
    return browser.tabs.query({currentWindow : true});
}

// getting the number of tabs opened
getTabs().then((tabs)=>{
    openTabs = tabs.length;
})

// function for the checking of newTab opened.
function checkNewTab(){
    getTabs().then((tabs)=>{
        let cTabs = tabs.length;
        // checking for a new tab opened if any
        if(openTabs > cTabs ) {
            console.log('Tab(s) is/are closed.');
            openTabs = cTabs;
        }
        else if(openTabs < cTabs) {
            console.log('A new tab is opened.');
            console.log(tabs[cTabs-1]);
            openTabs = cTabs;
        }
    })
}


checkNewTab();
setInterval(checkNewTab, 1000);