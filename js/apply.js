$(document).ready(function () {
    
    var arr_submit = new Array();
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function getTemplateAlertMessage(title, msg) {
        var str = '<div class="panel panel-default ">';
        str += '<div class="panel-heading" style="background-image: linear-gradient(#3b97d2, #3a97d2);">';
        str += '<h3 class="panel-title" style="color:white">' + title + '</h3>';
        str += '<span class="pull-right btn-dialog-close" type="submit"><a onclick="$.unblockUI();return false;"><font style="color:#fff">X</font></a></span>';
        str += '</div>';
        str += '<div class="panel-body">';
        str += msg;
        str += '<div style="margin-top:10px;"><input style="margin:0 auto; width:50%;" class="form-control" type="button" value="Close" onclick="$.unblockUI();return false;"/></div>';
        str += '</div></div>';
        return str;
    }

    
    function displayTableRow(arr_submit){
        var str = '';
        for (var i = 0; i < arr_submit.length; ++i) {
            str += '<tr>';
            str += '<td>'+ arr_submit[i].subject + '</td>';
            str += '<td><button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-remove delete" aria-hidden="true"></span></button></td>';
        }
        $('#table-ctn').html(str);
    }
    
    function isRowExist(obj){
        var is_exist = false;
        if(arr_submit.length==0){
            return false;
        }
        for (var i = 0; i < arr_submit.length; ++i) {
            if(arr_submit[i].subject==obj.subject){
                is_exist = true;
                break;
            }
        }
        return is_exist;
    }
    
    $('#btn-submit').click(function (event) {
        
        var client_fname = $('#form-visa-client-first-name').val();
        var client_lname = $('#form-visa-client-last-name').val();
        var nationality = $('#form-visa-client-nationality').val();
        var gender = $('#form-visa-client-gender').val();
        var dob = $('#form-visa-client-dob').val();
        var status = $('#form-visa-client-status').val();
        var placeofbirth = $('#form-visa-client-birth-place').val();
        var address = $('#form-visa-client-permanent-address').val();
		var currjob = $('#form-visa-client-current-job').val();
        var phone = $('#form-visa-client-phone-number').val();
        var email = $('#form-visa-client-email').val();
 

        if ($.trim(client_fname) == '') {
            alert('Please input your first name!!');
            $('#form-visa-client-first-name').focus();
            return;
        }

        if ($.trim(client_lname) == '') {
            alert('Please input your last name!!');
            $('#form-visa-client-last-name').focus();
            return;
        }

        if ($.trim(nationality) == '') {
            alert('Please input your nationality!!');
            $('#form-visa-client-nationality').focus();
            return;
        }

        if ($.trim(dob) == '') {
            alert('Please input your date of birth!!');
            $('#form-visa-client-dob').focus();
            return;
        }

        if ($.trim(status) == '') {
            alert('Please input your status!!');
            $('#form-visa-client-status').focus();
            return;
        }

        if ($.trim(placeofbirth) == '') {
            alert('Please input your place of birth!!');
            $('#form-visa-client-birth-place').focus();
            return;
        }
        
        if ($.trim(address) == ''){
            alert('Please input your address!!');
            $('#form-visa-client-permanent-address').focus();
            return;
        }
        
        if ($.trim(currjob) == ''){
            alert('Please input your current job!!');
            $('#form-visa-client-current-job').focus();
            return;
        }

        if ($.trim(phone) == ''){
            alert('Please input your phone number!!');
            $('#form-visa-client-phone-number').focus();
            return;
        }        

        if ($.trim(email) == '') {
            alert('Please input your email!!');
            $('#form-visa-client-email').focus();
            return;
        }

        if (validateEmail(email) == false) {
            alert('Warning!! Your email is not valid.');
            $('#form-visa-client-email').focus();
            return;
        }

        
        var param = {
            app:'save',
            client_fname:client_fname,
            client_lname:client_lname,
            gender:gender,
            nationality:nationality,
            dob:dob,
            status:status,
            placeofbirth:placeofbirth,
            address:address,
            currjob:currjob,
            phone: phone,
            email: email
        };        
        // alert('Saving Please wait...');
        apply(param);
    });

    function apply(param) {
        
            $.ajax({
                url: 'apply.php',
                type: 'POST',
                data: param,
            success: function (data) {
                   //$.unblockUI();
                    alert('You have successfully apply.');
                },
                error: function(result){
                    //$.unblockUI();
                    alert('Error during registration. Please try again.');
                }
            });
        
    }

    function clearControlWarning() {
        var class_improve_ways = $('#class_improve_ways');
        var about_class = $('#about_class');

        class_improve_ways.css('border', '1px solid #E6E6E6');
        about_class.css('border', '1px solid #E6E6E6');
    }    
    
    
//    function sendMail(){
//    $.ajax({
//    type: "POST",
//    url: "https://api.mailchimp.com/schema/3.0/Root.json",
//    data: {
//      'key': 'e589877258f5e876f0429e37734ed059-us13',
//      'message': {
//        'from_email': 'its@cam-ed.com',
//        'to': [
//          {
//            'email': ''+document.getElementById('email').value+'',
//            'name': 'Dear participant,',
//            'type': 'to'
//          }
//        ],
//        'subject': 'Student-Employer Roundtable "Careers in Public Auditing, Accounting and Tax"',
//        'html': '<p>You have successfully register with the Student-Employer Roundtable</p>'
//      }
//    }
//  });
//}
    
});