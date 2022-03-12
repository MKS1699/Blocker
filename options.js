$(() => {
    // elements of the HTML
    $blockBtn = $('.btn');
    $blockBtn.click(() => {
        $urlToblock = $('#newurl').val();
        block($urlToblock)
        $('#newurl').val('');
    });

    // functions below
    // function for the BLOCK button
    function block(url) {
        BLOCKER.data.blocked_urls[BLOCKER.data.blocked_urls.length] = url;
        BLOCKER.methods.alert(url, 'add'); 
    }
});