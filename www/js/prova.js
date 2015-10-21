
     // Defaults to sessionStorage for storing the Facebook token
     openFB.init({appId: '867006893383189'});
    //  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
    //  openFB.init({appId: 'YOUR_FB_APP_ID', tokenStore: window.localStorage});
    function login() {
        openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
    }
    function getInfo() {
        openFB.api({
            path: '/me',
            success: function(data) {
                console.log(JSON.stringify(data));
                document.getElementById("userName").innerHTML = data.name;
                document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
            },
            error: errorHandler});
    }
    function share() {
        openFB.api({
            method: 'POST',
            path: '/me/feed',
            params: {
                message: document.getElementById('Message').value || 'Testing Facebook APIs'
            },
            success: function() {
                alert('the item was posted on Facebook');
            },
            error: errorHandler});
    }
    function readPermissions() {
        openFB.api({
            method: 'GET',
            path: '/me/permissions',
            success: function(result) {
                alert(JSON.stringify(result.data));
            },
            error: errorHandler
        });
    }
    function revoke() {
        openFB.revokePermissions(
                function() {
                    alert('Permissions revoked');
                },
                errorHandler);
    }
    function logout() {
        openFB.logout(
                function() {
                    alert('Logout successful');
                },
                errorHandler);
    }
    function errorHandler(error) {
        alert(error.message);
    }


//$(document).ready(login);
//$(document).domain = 'www.facebook.com';

/*function login(){
    console.log("dentro login");

    /*$.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true,
        url: "http://rentme.altervista.org/1353/fbconfig.php", //Relative or absolute path to file.php file
        //url : "http://hypermediabiggym.altervista.org/Location/getLocation.php",
        //data: {email:emailLogin , pw:pwLogin},
        success: function(response) {
            console.log("dentro ajax");
            //  console.log(response);
            var loca=JSON.parse(response);
            $(".prova").html(loca[0].prova);

          /*  var fbId=user[0].id;
            var fbFirst=user[0].first;
            var fbLast=user[0].last;
            var fbMail=user[0].mail;

//*//*
        },
        error: function(request,error)
        {
            console.log("ERRORE");
            console.log(request+":"+error);
        }
    });
    *//*
    console.log("fine login");
    return false;
}*/


