function start() { // Inicio da função start()

    // Ocultar inicio
	$("#inicio").hide();
	
    // Inseri divs com personagem dos jogos
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
}