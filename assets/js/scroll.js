let lastPosition = document.body.scrollY;

        function scrollHandler(element) {
            // if (element.scrollY > 300) {
            //     document.getElementById('header').style.top = '-55px'
            // } else {
            //     document.getElementById('header').style.top = 0
            // }

            let direction = element.scrollY - lastPosition;
            lastPosition = element.scrollY

            if (direction > 0) {
                document.getElementById('header').style.top = '-75px'
                document.getElementById('btnup').style.display = 'block'
                document.getElementById('btnup').style.height = '50px'
                document.getElementById('btnup').style.width = '50px'
                document.getElementById('btnup').style.bottom = '50px'

            }
            else {
                document.getElementById('header').style.top = 0
            }
        }