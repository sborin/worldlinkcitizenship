var LoadContent = (function() {

    var active_menu = function(page) {
        //window.location.reload();
    };
    /*
     * Change the content of each menu
     */
    var load_menu_content = function(elm) {
        var currentUrl = window.location.href;
        var page = currentUrl.split('#')[1];


        if (elm !== undefined) {
            page = $(elm).attr('href').split('#')[1];
        }

        // Load default page
        if (page === undefined) {
            page = 'home';
        }

        if (page == 'home') {
           $('#contents').load(page+'.html');
        } else if (page == 'visa') {
            $('#contents').load(page+'.html');
        } else if (page == 'visa-app') {
            $('#contents').load(page+'.php');
        } else if (page == 'citizenship') {
            $('#contents').load(page+'.html');     
        } else {
            window.location.href = '#'+page;
            $('#contents').load(page+'.html');
        }
    }


    return {
        load_menu_content: load_menu_content,
        
    };
}());

document.addEventListener('DOMContentLoaded', function(){
    LoadContent.load_menu_content();
}, false);
    