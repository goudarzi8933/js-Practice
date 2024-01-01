        document.getElementById('showPass').onclick = function () {
            document.getElementById('pass').type = 'text';
            document.getElementById('showPass').style.display = 'none';
            document.getElementById('hidePass').style.display = 'inline';
        }

        document.getElementById('hidePass').onclick = function () {
            document.getElementById('pass').type = 'password';
            document.getElementById('showPass').style.display = 'inline';
            document.getElementById('hidePass').style.display = 'none';
        }