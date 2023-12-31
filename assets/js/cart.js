

        let cart = [];
        let products = [
            { id: 125, url: 'https://s6.uupload.ir/files/7c1c17c262412ed239550c38da2405a4_0l4x.jpg', price: 25000 },
            { id: 57, url: 'https://s6.uupload.ir/files/a7fa5e45b5a8bb355b8d4ca9f142e58e_lmv.jpg', price: 75000 },
            { id: 179, url: 'https://s6.uupload.ir/files/ca584d6f367691db32bc9cbb9de235c9_i53j.jpg', price: 10000 },
            { id: 100, url: 'https://s6.uupload.ir/files/7c1c17c262412ed239550c38da2405a4_0l4x.jpg', price: 125000 },
        ];

        function fillBox(filterProducts) {
            let parent = document.getElementById("product");
            parent.innerHTML = "";
            for (let i = 0; i < filterProducts.length; i++) {
                parent.innerHTML += ` <div class="item col-lg-4 col-md-7 col-sm-8">
            <span>${filterProducts[i].id}</span>
            <img class='img-fluid' src=${filterProducts[i].url}
            <br>
            
            <span>${filterProducts[i].price}</span>
            <br>
            <div class='btn d-flex justify-content-evenly'>
                <button onclick="addToCart(${filterProducts[i].id})" class='btn-success'> + </button>
            <span data-count-id="${filterProducts[i].id}" >0</span>
            <button onclick="minusFromCart(${filterProducts[i].id})" class='btn-danger'> - </button>
            </div>
        </div>`;
            }
        }

        fillBox(products);

        function updateBox() {
            let minP = Number(document.getElementById("min").value);
            let maxP = Number(document.getElementById("max").value);
            console.log(minP);
            console.log(maxP);
            let pf = products.filter(function (item) {
                if (minP == 0 && maxP == 0) return true;
                else if (minP == 0 && maxP != 0) return item.price < maxP;
                else if (maxP == 0 && minP != 0) return item.price > minP;
                else return item.price < maxP && item.price > minP;
            });

            fillBox(pf);
        }


        function addToCart(id) {
            showsidebar();
            document.getElementById('cart').style.display = "block";

            let productIndex = products.findIndex(function (item) {
                return item.id == id;
            });

            let cartIndex = cart.findIndex(function (item) {
                return item.product_id == id;
            });
            if (cartIndex == -1) {
                cart.push({
                    count: 1,
                    product_id: products[productIndex].id,
                    product_price: products[productIndex].price,
                });
                document.querySelector(`[data-count-id="${id}"]`).innerHTML = 1;
            } else {
                cart[cartIndex].count += 1;
                document.querySelector(`[data-count-id="${id}"]`).innerHTML =
                    cart[cartIndex].count;
            }

            updateCart();
        }

        function minusFromCart(id) {
            let cartIndex = cart.findIndex(function (item) {
                return item.product_id == id;
            });
            if (cartIndex == -1) {
                alert("mahsool mored nazar vojod nadarad");
            } else {
                if (cart[cartIndex].count > 1) {
                    cart[cartIndex].count -= 1;
                    document.querySelector(`[data-count-id="${id}"]`).innerHTML =
                        cart[cartIndex].count;
                } else if (cart[cartIndex].count == 1) {
                    cart.splice(cartIndex, 1);
                    document.querySelector(`[data-count-id="${id}"]`).innerHTML = 0;
                }
            }
            updateCart();
        }

        function updateCart() {
            document.getElementById("cart").innerHTML = "";
            let totalPrice = 0;
            cart.forEach((item) => {
                document.getElementById("cart").innerHTML += `<li>${item.product_id}  = ${item.count}
                    <br>
                     ${item.product_price} ==> ${item.product_price * item.count
                    } </li>`;
                totalPrice += item.product_price * item.count;
            });
            document.getElementById(
                "cart"
            ).innerHTML += `<li>total price : ${totalPrice}</li>`;
        }
        let showsidebar = function () {
            document.getElementById('sidebar').style.left = '0px';
        }
        let hidesidebar = function () {
            document.getElementById('sidebar').style.left = '-260px';
        }

        // const select = document.querySelector('.select');
        // const input = document.querySelector('');

        // select.addEventListener('change', () => {
        //     input.value = select.value;
        // });