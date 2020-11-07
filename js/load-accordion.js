$(document).ready(function () {
    $(".panel-heading").click(function() {
        var $this = $(this);

        if(!$this.hasClass('panel-collapsed')) {
            $this.addClass('panel-collapsed');
            $this.find('b').removeClass('fa-chevron-down').addClass('fa fa-chevron-up');
        } else {
            $this.removeClass('panel-collapsed');
            $this.find('b').removeClass('fa fa-chevron-up').addClass('fa-chevron-down');
        }
    });
});
