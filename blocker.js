const BLOCKER = {
    'data': {
        'blocked_urls': [
            'https://www.google.com',
            'https://www.youtube.com',
            'https://www.instagram.com'
        ],
        'block_counter': 0,
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
            'store': (data, propName = 'BlockerExt-data') => {
                // function for storing data on firefox browser
                // data = data to store
                // propName = variable for storing data if not present will be made as null
                // if type of data is object making it every key as a single variable and storing it as such
                if (propName !== 'BlockerExt-data') {
                    propName = 'BlockerExt-data-' + propName;
                }
                if (typeof data === 'object') {
                    let keys = Object.keys(data); // getting all the keys of the data
                    let values = Object.values(data); // getting all the values of the data
                    //looping all the keys
                    for (key of keys) {
                        //looping all the values
                        for (value of values) {
                            // specific value for specific key
                            if (data[key] === value) {
                                let newProp = ('BlockerExt-' + propName + '-' + key); // creating new key title  for the value of values
                                let propValue = data[key].toString(); // getting value of that speccific key
                                window.localStorage[newProp] = propValue; // storing exact value to its exact key
                            }
                        }
                    }
                }
                // if data is string 
                else if (typeof data === 'string') {
                    // storing as is it.
                    window.localStorage[propName] = data;
                }
            },
            'get': (key) => {
                // function for getting stored data on firefox
                return window.localStorage.getItem(key);
            }
        },
        'alertUSER': (data, alertFor = null, odata = null) => {
            // data = which is add/edited/deleted.
            // alertfor = type of alert [add/edit or update/delete]
            // odata = other data if any {mainly the old data which was updated}
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
            // for adding the urls
            if (alertFor == 'add') {
                $msg = '<span style="font-size: 1.5rem; font-style: italic;">' + data + '</span> has been added to the block list, to update or remove the url check the <a style="text-decoration: none; cursor: click;" href="#list">BLOCK List</a>.'
            }
            // for deleting the data
            if (alertFor == 'delete') {
                $msg = '<span style="font-size: 1.5rem; font-style: italic;">' + data + '</span> has been deleted from the block list, check the <a style="text-decoration: none; cursor: click;" href="#list">BLOCK List</a>.'
            }
            //for edit/update of the data 
            if (alertFor == 'update') {
                $msg = '<span style="font-size: 1.5rem; font-style: italic;">' + odata + '</span> has been updated to ' + '<span style="font-size: 1.5rem; font-style: italic;">' + data + '</span>' + ' see the <a style="text-decoration: none; cursor: click;" href="#list">BLOCK List</a>.'
            }
            // appending elements
            $noti.append($msg);
            $('body').append($noti);

            // hiding the notification after 3 second
            setTimeout(() => {
                $noti.remove();
            }, 2500);
        },
        // function for showing the data [blocked urls] on the page
        'showDATA': (what, where = null) => {
            // what as in what to show on the page.
            // where as in which element to show the data 
            // where needs to be an ID/class
            // currently made to show the urls on the options page for editing and/or correction , deleting
            $listel = $('<div id="data-list">'); //creating the element to show the blocked urls {parent element}
            //css for the list element
            $listel.css({
                'width': '90%',
                'grid-area': 'data-list'
            });
            // loop to get all the blocked urls
            for (data of what) {
                $dataindex = what.indexOf(data); //index of the blocked url
                $datael = $('<div id="data-list-' + $dataindex + '">'); // element for each blocked url for text and icons/buttons
                $dataelID = $datael.attr('id'); //getting the ID created for each blocked url
                $datatextel = $('<div id="' + $dataelID + '-text">'); // creating element to show the text 
                // text element css
                $datatextel.css({
                    'grid-area': 'text',
                    'padding-top': '10px',
                    'text-align': 'center'
                });
                $datatextel.append(data); // appending text to the text element
                $datael.append($datatextel); //appending the text element to the blocked url element
                // css for each blocked url element
                $datael.css({
                    'display': 'grid',
                    'grid-template-columns': '.6fr .2fr .2fr',
                    'grid-template-rows': '1fr',
                    'grid-template-areas': '"text edit delete"',
                    'height': '50px',
                    'border-bottom': 'solid 3px red',
                    'margin-top': '10px'
                });
                // appending icons to the each blocked url element
                $datael.append(BLOCKER.methods.createICON($dataelID, 'edit')); // edit icon
                $datael.append(BLOCKER.methods.createICON($dataelID, 'delete')); // delete icon
                $listel.append($datael); // appending each blocked url element to the list element
            }
            $(where).append($listel); // appending the list element to the page for display
        },
        // function for creating the icons/with their respective events
        'createICON': (elID, type) => {
            $iconel = $('<div id="' + elID + '-' + type + '">'); // element for creating the icons
            $iconel.append(BLOCKER.data.icons[type].html); // appending the html for the icon which is svg
            //css for the icon element
            $iconel.css({
                'grid-area': type,
                'height': '40px',
                'border-right': 'solid 3px red',
                'cursor': 'pointer'
            });
            // icon specific css
            if (type === 'edit' || type === 'check') {
                $iconel.css({
                    'border-left': 'solid 3px red'
                });
            }
            if (type === 'check') {
                $('#' + elID).css({
                    'grid-template-areas': '"text check delete"'
                });
            }
            if (type === 'edit') {
                $('#' + elID).css({
                    'grid-template-areas': '"text edit delete"'
                });
            }
            // asssigning respective event to the icons
            $iconel.click(() => {
                BLOCKER.methods.iconEvents(elID, type);
            });
            return $iconel; // returning the icon created
        },
        // function for icon respective to their type
        'iconEvents': (elID, eventType) => {
            // elID = ID of the element where the icon specific event is to be done
            // eventType = type of the event to be done
            $arr = BLOCKER.data.blocked_urls; // array of blocked urls
            $el = $('#' + elID); // element containing url and its buttons/icons for function
            $eventElID = elID + '-' + eventType; // ID of the element in which the even is attached 
            $eventEL = $('#' + $eventElID); // icon element of the event
            $urlel = $('#' + elID + '-text'); // element of the url
            $url = $('#' + elID + '-text').text(); // blocked url/data/text of the element
            $urlindex = $arr.indexOf($url); // index of the url in the blocked urls array
            //event specific actions
            // delete action
            if (eventType === 'delete') {
                $el.remove(); // removing the current element
                $arr.splice($urlindex, 1); // deleting the same url from the array list
                BLOCKER.methods.alertUSER($url, 'delete') // alerting the user for deletion of the url
                // todo code for syncing the current data with the stored data on browser.
            }
            // edit action
            if (eventType === 'edit') {
                $urlel.html('<input type = "text" id="newVal" style="text-align : center; border : red solid 3px; height : 30px; width: 80%;" value="' + $url + '">'); // changing the element to input for editing
                $eventEL.replaceWith(BLOCKER.methods.createICON(elID, 'check')); // replacing the edit icon with the check icon for action after editing
            }
            // check action
            if (eventType === 'check') {
                $newVal = $urlel.children('#newVal').val(); // getting the new value / editied url
                $('#newVal').remove(); // removing the input tag created by edit icon
                $urlel.text($newVal); // showing the new url
                $split = elID.split(''); // splitting the elID to get the index of the old url which was edited
                $index = $split[$split.length - 1]; //getting the index value from the splitted array above
                $oldVal = $arr[$index]; // getting the old value
                $arr[$index] = $newVal; // changing old url/value with the new url/value
                $eventEL.replaceWith(BLOCKER.methods.createICON(elID, 'edit')); // replacing the check icon with edit icon for further editing
                // alerting the user for the edit/update of the urls
                BLOCKER.methods.alertUSER($newVal, 'update', $oldVal);
            }
        }
    }
}