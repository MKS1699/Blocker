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
        'debug': (what, val) => {
            if (what === 'print' || 'log') {
                console.log(val);
            }
            else if(what === 'type') {
                console.log(typeof val);
            }
        }
    }
}