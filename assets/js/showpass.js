        
        
        
        //   document.getElementById('showPass').onclick = function () {
        //     document.getElementById('password').type = 'text';
        //     document.getElementById('showPass').style.display = 'none';
        //     document.getElementById('hidePass').style.display = 'inline';
        // }

        // document.getElementById('hidePass').onclick = function () {
        //     document.getElementById('password').type = 'password';
        //     document.getElementById('showPass').style.display = 'inline';
        //     document.getElementById('hidePass').style.display = 'none';
        // }
        
        
        
        
        
        function changeToPass(){
            document.getElementById('password').type = 'password';
            document.getElementById('ShowPass').classList.add('fa-eye');
            document.getElementById('ShowPass').classList.remove('fa-eye-slash');

        }
        function changeToText(){
            document.getElementById('password').type = 'text';
            document.getElementById('ShowPass').classList.remove('fa-eye');
            document.getElementById('ShowPass').classList.add('fa-eye-slash');
        }

        document.getElementById('showPass').onmousedown = function () {
            changeToText()
        }
        document.getElementById('showPass').onmouseup=function () {
            changeToPass()
        }
        document.getElementById('showPass').onmouseleave=function () {
            changeToPass()
        }