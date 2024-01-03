 let player = 1;
        let items = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
        document.getElementById("playerDisplay").innerHTML = `player ${player}`;

        let elements = document.querySelectorAll("#dooz .item");

        for (let i = 0; i < elements.length; i++) {
            elements[i].onclick = function () {
                if (items[this.getAttribute("data-id")] == 0) {
                    // if (player == 1) this.style.backgroundColor = "#E21818";
                    if (player == 1) this.style.color = "#E21818";
                    if (player == 1) this.style.fontSize = "52px";
                    if (player == 1) this.innerHTML = " O ";
                    if (player == 2) document.getElementById("playerDisplay").style.color = "#fff"
                    if (player == 1) document.getElementById("playerDisplay").style.backgroundColor = "#00235B";
                    // else if (player == 2) this.style.backgroundColor = "#00235B";
                    if (player == 2) this.style.color = "#00235B";
                    if (player == 2) this.style.fontSize = "52px";
                    if (player == 2) this.innerHTML = " X ";
                    if (player == 2) document.getElementById("playerDisplay").style.color = "#fff"
                    if (player == 2) document.getElementById("playerDisplay").style.backgroundColor = "#E21818";

                    items[this.getAttribute("data-id")] = player;
                    console.log(items);

                    changePlayer();
                }

                if (
                    (items[0] == 1 && items[1] == 1 && items[2] == 1) ||
                    (items[3] == 1 && items[4] == 1 && items[5] == 1) ||
                    (items[6] == 1 && items[7] == 1 && items[8] == 1) ||
                    (items[0] == 1 && items[3] == 1 && items[6] == 1) ||
                    (items[1] == 1 && items[4] == 1 && items[7] == 1) ||
                    (items[2] == 1 && items[5] == 1 && items[8] == 1) ||
                    (items[0] == 1 && items[4] == 1 && items[8] == 1) ||
                    (items[2] == 1 && items[4] == 1 && items[6] == 1)
                ) {
                    Swal.fire({
                        border: "5px solid red",
                        background: "#F3CCF3",
                        title: "Good Job!",
                        text: "player 1 is winner",
                        imageUrl: "https://s6.uupload.ir/files/victory-gif(8)_zufo.gif",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image 10"
                    });
                    // reloadPage();
                } else if (
                    (items[0] == 2 && items[1] == 2 && items[2] == 2) ||
                    (items[3] == 2 && items[4] == 2 && items[5] == 2) ||
                    (items[6] == 2 && items[7] == 2 && items[8] == 2) ||
                    (items[0] == 2 && items[3] == 2 && items[6] == 2) ||
                    (items[1] == 2 && items[4] == 2 && items[7] == 2) ||
                    (items[2] == 2 && items[5] == 1 && items[8] == 2) ||
                    (items[0] == 2 && items[4] == 2 && items[8] == 2) ||
                    (items[2] == 2 && items[4] == 2 && items[6] == 2)
                ) {
                    Swal.fire({
                        border: "5px solid red",
                        background: "#F3CCF3",
                        title: "Good Job!",
                        text: "player 2 is winner",
                        imageUrl: "https://s6.uupload.ir/files/victory-gif(8)_zufo.gif",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image 10"
                    });
                    // reloadPage();
                }
            };
        }

        function changePlayer() {
            if (player == 1) player = 2;
            else if (player == 2) player = 1;
            document.getElementById("playerDisplay").innerHTML = `player ${player}`;
        }
        function reloadPage() {
            setTimeout(function () {
                location.reload();
            });
        }