function addusser() {
    var player1_name = document.getElementById("player_1_input").value;
    var player2_name = document.getElementById("player_2_input").value;
    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);
    window.location = "gamepage.html";
}