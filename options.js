$(() => {
    // elements of the HTML
    $add = $('#add');
    $add.hide();
    $blockBtn = $('.btn');
    $blockBtn.click(() => {
        $urlToblock = $('#newurl').val();
        block($urlToblock)
        $('#newurl').val('');
    });

    $blockList = $('#list');
    $blockList.click(() => {
        enableList();
    })

    // function for the BLOCK button
    function block(url) {
        BLOCKER.data.blocked_urls[BLOCKER.data.blocked_urls.length] = url;
        BLOCKER.methods.alertUSER(url, 'add');
        // method for syncing / storing the blocked urls within the user browser goes below 
    }

    // function for showing blocked urls
    function enableList() {
        $('.content').children().hide();
        $('.nav').children('#list').hide();
        $add.css({
            'grid-area' : 'block',
            'font-size': '1.8rem',
            'margin-top': '20%',
            'cursor': 'pointer'
        })
        $add.show();
        $add.click(()=>{
            addURL();
        });
        
        // todo code to show the blocked urls
        BLOCKER.methods.showDATA(BLOCKER.data.blocked_urls, '.content');
    }

    function addURL(){
        // todo code to back to block URL list
    }
});