/* global pageFunctions */

pageFunctions.sessionControl = (function(){
    var init = (function(){
        validateSession();
        listeners();
    });
    
    var validateSession = (function(){
        if(checkSession(false) != true){
            myAlert('Session expired, please log in again.','logout');
        } 
    });
    
    var logout = (function(){
        myAlert("Log off.", 'logout');
    });
    
    var listeners = (function(){
        $(document).on('click' ,function(event){
            if(event.target){
                window.localStorage.setItem('check', 1);
            }
        });
        $('#logout').on('click', function(){
            logout();
        });
    });
    
    var checkSession = (function(isReloading){
        var ans = false;
        var param = {};
        var time = new Date().getTime();
        param['id'] = window.localStorage.getItem('id');
        param['token'] = window.localStorage.getItem('token');
        param['valid'] = time;
        if(isReloading == false){
            param['check'] = window.localStorage.getItem('check');
            window.localStorage.setItem('check', 0);
        } else {
            param['check'] = 1;
        }
        $.ajax({       
            type: 'post',
            async: false,
            data: param,
            dataType: 'json',
            url: 'PHP/checkToken.php',      
            success: function(data){
                    if(data[0].isValid != 0){
                        ans = true;
                    }
            }
        });
        return ans;
    });
    var myAlert = (function(message,action){
        if(action == 'doNothing'){
            $('#myAlertMessage').html(message);
            $('#myAlertContainer').removeClass('hidden');
            $('#myAlertConfirm').on('click', function(){
                $('#myAlertContainer').addClass('hidden');
            });
        } else if(action == 'logout'){
            $('#myAlertMessage').html(message);
            $('#myAlertContainer').removeClass('hidden');
            $('#myAlertConfirm').on('click', function(){        
                window.location.replace('index.html');
                window.localStorage.setItem('id', null);
                window.localStorage.setItem('token', null);
            });
        }
    });
    
    $(document).ready(function(){
        init();
        checkSession(true);
        setInterval(validateSession, 60000); 
    });
}());