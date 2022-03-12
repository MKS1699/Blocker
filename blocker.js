const BLOCKER = {
    'data': {
        'blocked_urls': [
            'https://www.google.com',
            'https://www.youtube.com',
            'https://www.instagram.com'
        ],
        'icons': {
            'edit': {
                'type': 'svg',
                'name': 'edit',
                'html': '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cursor-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 12h4"></path><path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3"></path><path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3"></path></svg>'
            },
            'delete': {
                'type': 'svg',
                'name': 'delete',
                'html': '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path><path d="M12 10l4 4m0 -4l-4 4"></path></svg>'
            },
            'check': {
                'type': 'svg',
                'name': 'check',
                'html': '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>'
            }
        }
    },
    'methods': {
        'chrome': {

        },
        'firefox': {

        },
        'alert': (data, alertFor = null) => {
            // removing previous notifications if any
            $('body').children('.noti').remove();
            
            // creating element for showing notification
            $noti = $('<div class="noti">');
            $noti.css({
                'font-size': '1rem',
                'color': 'white',
                'background-color': 'grey',
                'padding': '2%',
                'z-index': '1',
                'position': 'absolute',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%, -50%)',
                'width': '100%',
                'height': 'auto',
                'text-align': 'center',
                'cursor': 'help',
                'opacity': '1 !important'
            });

            // message according to the alert type
            if (alertFor == 'add') {
                $msg = '<span style="font-size: 1.5rem; font-style: italic;">' + data + '</span> has been added to the block list, to update or remove the url' + ' check the <a style="text-decoration: none; cursor: click;" href="#list">BLOCK List</a>.'
            }

            // appending elements
            $noti.append($msg);
            $('body').append($noti);

            // hiding the notification after 3 second
            setTimeout(() => {
                $noti.remove();
            }, 3000);
        }
    }
}