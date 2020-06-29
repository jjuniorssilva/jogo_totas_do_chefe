let num = []
let num_select_triple = []
let num_select_double = []
let ocorrencia = [];
let valores_selecionados = [0, 0, 0, 0, 0];
let valores_multiplicacao = [0, 0, 0, 0, 0];
let valores_divisao = [0, 0, 0, 0, 0];
let posicao_m_x = [470, 570, 650, 410, 520, 650, 750, 450, 600, 750];
let posicao_m_y = [100, 130, 90, 200, 230, 200, 180, 300, 280, 290];
let posicao_m_x_2 = [10, 50, 130, 140, 250, 250, 390, 350, 490, 440];
let posicao_m_y_2 = [450, 520, 460, 530, 450, 530, 455, 530, 460, 530];
let cronometro = [0, 0];

let fase = 0,fase_intro = 0;
let vidas = 3, config = 0, control_34 = 0, control_view_5 = 0;
let img_logo,img_sound,img_nosound,img_bk_perdeu,img_bk_final, img_bk, img_m_r, img_pie, img_bk_fase_2, img_bk_fase_3, img_bk_fase_4, img_bk_intro_1, img_bk_intro_2, img_bk_intro_fase_3, img_bk_intro_3, img_bk_intro_4, img_bk_menu;
let numero_objetivo, valores_selecionados_resultado, numero_de_tortas, dividendo=0,status_sound_fundo=1;
let intervalId;
let canvas;
let sound_fundo,sound_vence,sound_perdeu,sound_acertou,sound_errou;

function preload() {
	sound_fundo = loadSound('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/fundo.mp3');
	sound_venceu = loadSound('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/venceu.mp3');
	sound_perdeu = loadSound('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/perdeu.mp3');
	sound_acertou = loadSound('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/acertou.mp3');
	sound_errou = loadSound('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/errado.mp3');

	img_bk = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/bk.jpg');
	img_bk_fase_2 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/bk_fase3.jpg');
	img_bk_fase_3 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/bk_fase_3.jpg');
	img_bk_fase_4 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/bk_fase_4.jpg');

	img_logo = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/logo.png');
	img_bk_menu = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/menu.jpg');
	img_bk_intro_1 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/intro_1.jpg');
	img_bk_intro_2 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/intro_2.jpg');
	img_bk_intro_3 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/intro_3.jpg');
	img_bk_intro_4 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/intro_4.jpg');
	img_bk_intro_fase_3 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/intro_fase_3.jpg');
	img_bk_final = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/final.jpg');
	img_bk_perdeu = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/perdeu.jpg');

	img_m_r = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/m_red.png');
	img_m_b = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/m_black.png');
	img_pie = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/pie_of_apple.png');
	img_sound = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/icon_sound.png'); 
	img_nosound = loadImage('https://raw.githubusercontent.com/jjuniorssilva/teste_lop/master/icon_nosound.png'); 
}

function setup() {
	canvas = createCanvas(1000, 600);
	canvas.parent('canvas1');
	sound_fundo.setVolume(0.1);
	sound_errou.setVolume(0.1);
	sound_acertou.setVolume(0.5);
	sound_perdeu.setVolume(0.1);
	sound_venceu.setVolume(0.2);
	sound_fundo.loop();
}

function draw() {
		clear();
		if (config == 0 && fase>0) {
			gerar_numeros();
			config = 1;
		}
		gerar_layout();
		verificacao_fase();
}

//------------------------------------------- funções de manutenção da jogatina-------------------------------
function mouseClicked() {
	if (fase == 0) {
		if (fase_intro == 0) {
			if ((mouseX > 350 && mouseX < 650) && (mouseY > 360 && mouseY < 435)) {
				next_fase_intro();
			} else if ((mouseX > 650 && mouseX < 850) && (mouseY > 325 && mouseY < 400)) {
			}
		} else {
			if ((mouseX > 740 && mouseX < 940) && (mouseY > 520 && mouseY < 595)) {
				next_fase_intro();
			}
		}
	} else if (fase >= 1 && fase <= 2) {
		if ((mouseX > posicao_m_x[0] && mouseX < (posicao_m_x[0] + 60)) && (mouseY > posicao_m_y[0] && mouseY < (posicao_m_y[0] + 65))) {
			numero_selecionado(0);
		} else if ((mouseX > posicao_m_x[1] && mouseX < (posicao_m_x[1] + 60)) && (mouseY > posicao_m_y[1] && mouseY < (posicao_m_y[1] + 65))) {
			numero_selecionado(1);
		} else if ((mouseX > posicao_m_x[2] && mouseX < (posicao_m_x[2] + 60)) && (mouseY > posicao_m_y[2] && mouseY < (posicao_m_y[2] + 65))) {
			numero_selecionado(2);
		} else if ((mouseX > posicao_m_x[3] && mouseX < (posicao_m_x[3] + 60)) && (mouseY > posicao_m_y[3] && mouseY < (posicao_m_y[3] + 65))) {
			numero_selecionado(3);
		} else if ((mouseX > posicao_m_x[4] && mouseX < (posicao_m_x[4] + 60)) && (mouseY > posicao_m_y[4] && mouseY < (posicao_m_y[4] + 65))) {
			numero_selecionado(4);
		} else if ((mouseX > posicao_m_x[5] && mouseX < (posicao_m_x[5] + 60)) && (mouseY > posicao_m_y[5] && mouseY < (posicao_m_y[5] + 65))) {
			numero_selecionado(5);
		} else if ((mouseX > posicao_m_x[6] && mouseX < (posicao_m_x[6] + 60)) && (mouseY > posicao_m_y[6] && mouseY < (posicao_m_y[6] + 65))) {
			numero_selecionado(6);
		} else if ((mouseX > posicao_m_x[7] && mouseX < (posicao_m_x[7] + 60)) && (mouseY > posicao_m_y[7] && mouseY < (posicao_m_y[7] + 65))) {
			numero_selecionado(7);
		} else if ((mouseX > posicao_m_x[8] && mouseX < (posicao_m_x[8] + 60)) && (mouseY > posicao_m_y[8] && mouseY < (posicao_m_y[8] + 65))) {
			numero_selecionado(8);
		} else if ((mouseX > posicao_m_x[9] && mouseX < (posicao_m_x[9] + 60)) && (mouseY > posicao_m_y[9] && mouseY < (posicao_m_y[9] + 65))) {
			numero_selecionado(9);
		} else if ((mouseX > 20 && mouseX < (20 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
			numero_desselecionado(0);
		} else if ((mouseX > 110 && mouseX < (110 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
			numero_desselecionado(1);
		} else if ((mouseX > 200 && mouseX < (200 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
			numero_desselecionado(2);
		} else if ((mouseX > 290 && mouseX < (290 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
			numero_desselecionado(3);
		} else if ((mouseX > 380 && mouseX < (380 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
			numero_desselecionado(4);
		}
	} else if (fase >= 3 && fase <= 4) {
		if ((mouseX > posicao_m_x_2[0] && mouseX < (posicao_m_x_2[0] + 60)) && (mouseY > posicao_m_y_2[0] && mouseY < (posicao_m_y_2[0] + 65))) {
			numero_selecionado(0);
		} else if ((mouseX > posicao_m_x_2[1] && mouseX < (posicao_m_x_2[1] + 60)) && (mouseY > posicao_m_y_2[1] && mouseY < (posicao_m_y_2[1] + 65))) {
			numero_selecionado(1);
		} else if ((mouseX > posicao_m_x_2[2] && mouseX < (posicao_m_x_2[2] + 60)) && (mouseY > posicao_m_y_2[2] && mouseY < (posicao_m_y_2[2] + 65))) {
			numero_selecionado(2);
		} else if ((mouseX > posicao_m_x_2[3] && mouseX < (posicao_m_x_2[3] + 60)) && (mouseY > posicao_m_y_2[3] && mouseY < (posicao_m_y_2[3] + 65))) {
			numero_selecionado(3);
		} else if ((mouseX > posicao_m_x_2[4] && mouseX < (posicao_m_x_2[4] + 60)) && (mouseY > posicao_m_y_2[4] && mouseY < (posicao_m_y_2[4] + 65))) {
			numero_selecionado(4);
		} else if ((mouseX > posicao_m_x_2[5] && mouseX < (posicao_m_x_2[5] + 60)) && (mouseY > posicao_m_y_2[5] && mouseY < (posicao_m_y_2[5] + 65))) {
			numero_selecionado(5);
		} else if ((mouseX > posicao_m_x_2[6] && mouseX < (posicao_m_x_2[6] + 60)) && (mouseY > posicao_m_y_2[6] && mouseY < (posicao_m_y_2[6] + 65))) {
			numero_selecionado(6);
		} else if ((mouseX > posicao_m_x_2[7] && mouseX < (posicao_m_x_2[7] + 60)) && (mouseY > posicao_m_y_2[7] && mouseY < (posicao_m_y_2[7] + 65))) {
			numero_selecionado(7);
		} else if ((mouseX > posicao_m_x_2[8] && mouseX < (posicao_m_x_2[8] + 60)) && (mouseY > posicao_m_y_2[8] && mouseY < (posicao_m_y_2[8] + 65))) {
			numero_selecionado(8);
		} else if ((mouseX > posicao_m_x_2[9] && mouseX < (posicao_m_x_2[9] + 60)) && (mouseY > posicao_m_y_2[9] && mouseY < (posicao_m_y_2[9] + 65))) {
			numero_selecionado(9);
		} else if ((mouseX > 150 && mouseX < (150 + 60)) && (mouseY > 205 && mouseY < 205 + 65)) {
			numero_desselecionado(0);
		} else if ((mouseX > 240 && mouseX < (240 + 60)) && (mouseY > 205 && mouseY < 205 + 65)) {
			numero_desselecionado(1);
		} else if ((mouseX > 330 && mouseX < (330 + 60)) && (mouseY > 205 && mouseY < 205 + 65)) {
			numero_desselecionado(2);
		} else if ((mouseX > 420 && mouseX < (420 + 60)) && (mouseY > 205 && mouseY < 205 + 65)) {
			numero_desselecionado(3);
		} else if ((mouseX > 510 && mouseX < (510 + 60)) && (mouseY > 205 && mouseY < 205 + 65)) {
			numero_desselecionado(4);
		}
	} else if (fase == 5 && control_view_5 == 0) {
		if ((mouseX > 770 && mouseX < (770 + 200)) && (mouseY > 480 && mouseY < 480 + 75)) {
			control_view_5 = 1;
			contagem_regreciva(1);
		}
	} else if (fase >= 5 && fase <= 6 && control_view_5 == 1) {
		if ((mouseX > 640 && mouseX < (640 + 130)) && (mouseY > 280 && mouseY < 280 + 50)) {
			numero_selecionado(valores_multiplicacao[0]);
		} else if ((mouseX > 640 && mouseX < (640 + 130)) && (mouseY > 340 && mouseY < 340 + 50)) {
			numero_selecionado(valores_multiplicacao[1]);
		} else if ((mouseX > 640 && mouseX < (640 + 130)) && (mouseY > 400 && mouseY < 400 + 50)) {
			numero_selecionado(valores_multiplicacao[2]);
		} else if ((mouseX > 640 && mouseX < (640 + 130)) && (mouseY > 460 && mouseY < 460 + 50)) {
			numero_selecionado(valores_multiplicacao[3]);
		} else if ((mouseX > 640 && mouseX < (640 + 130)) && (mouseY > 520 && mouseY < 520 + 50)) {
			numero_selecionado(valores_multiplicacao[4]);
		}
	} else if (fase >= 7 && fase <=8) {
		if ((mouseX > 285 && mouseX < (285 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(valores_divisao[0]);
		} else if ((mouseX > 420 && mouseX < (420 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(valores_divisao[1]);
		} else if ((mouseX > 555 && mouseX < (555 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(valores_divisao[2]);
		} else if ((mouseX > 690 && mouseX < (690 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(valores_divisao[3]);
		} else if ((mouseX > 825 && mouseX < (825 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(valores_divisao[4]);
		}	
	}else if(fase==9 || fase ==101){
		if ((mouseX > 450 && mouseX < (450 + 250)) && (mouseY > 350 && mouseY < 350 + 50)) {
			recomeçar();
			sound_fundo.play();
		}
	}
	if ((mouseX > 945 && mouseX < (995)) && (mouseY > 560 && mouseY < 595)) {
		if(sound_fundo.isPlaying()){
			sound_fundo.stop();
			status_sound_fundo=0;
		}else{
			sound_fundo.play();
			status_sound_fundo=1;
		}
	}
}
function numero_selecionado(posi) {
	if (fase >= 1 && fase <= 4) {
		if (valores_selecionados.indexOf(0) > -1) {
			for (let index = 0; index < valores_selecionados.length; index++) {
				if (valores_selecionados[index] == 0) {
					valores_selecionados[index] = num[posi];
					num[posi] = 0;
					break;
				}
			}
		} else {
			console.log("cheio");
		}
	} else if (fase >= 5 && fase <= 6) {
		if (posi == (numero_objetivo / numero_de_tortas)) {
			next_fase();
		} else {
			perdeu_vida();
		}
	} else if (fase >= 7 && fase <= 8) {
		if (posi == (numero_objetivo / dividendo)) {
			next_fase();
		} else {
			perdeu_vida();
		}
	}
}
function numero_desselecionado(posi) {
	if (valores_selecionados[posi] != 0) {
		for (let index = 0; index < num.length; index++) {
			if (num[index] == 0) {
				num[index] = valores_selecionados[posi];
				valores_selecionados[posi] = 0;
				break;
			}
		}
	}
}
function contagem_regreciva(mode) {
	var i = 89;
	if (mode == 1) {
		cronometro[0] = parseInt(90 / 60);
		cronometro[1] = 90 % 60;
		intervalId = setInterval(function () {
			if (i-- < 1) {
				cronometro[0] = 0;
				cronometro[1] = 0;
				perdeu_vida();
			} else {
				cronometro[0] = parseInt(i / 60);
				cronometro[1] = i % 60;
			};
		}, 1000);
	} else if (mode == 2) {
		return clearInterval(intervalId);
	}
}
function next_fase() {
	sound_acertou.play();
	recomeçar();
	fase = fase + 1;
	config = 0;
	if(fase==9){
		sound_fundo.stop();
		sound_venceu.play();
		contagem_regreciva(2);	
	}
}
function next_fase_intro() {
	if (fase_intro >3) {
		fase = 1;
		config = 0;
		contagem_regreciva(1);
	} else {
		fase_intro = fase_intro + 1;
	}
}
function verificacao_fase() {
	if(fase>=1 && fase<=4){
		if (valores_selecionados_resultado > numero_objetivo) {
			perdeu_vida();
		} else if (valores_selecionados_resultado == numero_objetivo) {
			next_fase();
		}
	}
}
function recomeçar() {
	contagem_regreciva(2);
	contagem_regreciva(1);
	if (fase >= 1 && fase <= 4) {
		for (let index = 0; index < valores_selecionados.length; index++) {
			if (valores_selecionados[index] != 0) {
				for (let i = 0; i < num.length; i++) {
					if (num[i] == 0) {
						num[i] = valores_selecionados[index];
						valores_selecionados[index] = 0;
					}
				}
			}
		}
	}else if(fase==9 || fase==101){
		contagem_regreciva(2);
		vidas=3;
		fase=0;
		fase_intro=0
		valores_selecionados_resultado=0;
		numero_objetivo=0;
		for (let index = 0; index < valores_selecionados.length; index++) {
			valores_selecionados[index]=0;
			valores_multiplicacao[index]=0;
			valores_divisao[index]=0;
		}
		for (let index = 0; index < num.length; index++) {
			num[index]=0;
			
		}
	}
}
function perdeu_vida() {
	sound_errou.play();
	vidas = vidas - 1;
	if (vidas < 1) {
		fase = 101;
		config = 0
		sound_fundo.stop();
		sound_perdeu.play();
		contagem_regreciva(2);
	} else {
		recomeçar();
	}
}
//-------------------------------------------------------- bloco dos layout do jogo ----------------//
function gerar_layout() {
	fill(255);
	if (fase == 0) {
		if (fase_intro == 0) {
			background(img_bk_menu);
			image(img_logo, 325,40,350,300);
			textSize(40);
			fill(255);
			rect(350, 360, 300, 75);
			fill(0);
			text("Começar", 415, 410)
			
		} else if (fase_intro == 1) {
			background(img_bk_intro_1);
			textSize(30);
			fill(255);
			rect(740, 520, 200, 75);
			fill(0);
			text("Proximo", 780, 570);
		} else if (fase_intro == 2) {
			background(img_bk_intro_2);
			textSize(30);
			fill(255);
			rect(740, 520, 200, 75);
			fill(0);
			text("Proximo", 780, 570);
		} else if (fase_intro == 3) {
			background(img_bk_intro_3);
			textSize(30);
			fill(255);
			rect(740, 520, 200, 75);
			fill(0);
			text("Proximo", 780, 570);
		} else if (fase_intro == 4) {
			background(img_bk_intro_4);
			textSize(30);
			fill(255);
			rect(740, 520, 200, 75);
			fill(0);
			text("Proximo", 780, 570);
		}
	}else if (fase >= 1 && fase <= 2) {
		background(img_bk);
		// gera as macâs na arvore 
		for (let index = 0; index < 10; index++) {
			if (num[index] > 0) {
				image(img_m_r, posicao_m_x[index], posicao_m_y[index], 60, 65);
				if (num[index] > 9) {
					text(num[index], (posicao_m_x[index] + 10), posicao_m_y[index] + 50);
				} else {
					text("0" + num[index], (posicao_m_x[index] + 10), posicao_m_y[index] + 50);
				}
			} else {
				image(img_m_b, posicao_m_x[index], posicao_m_y[index], 60, 65);
			}
		}
		// gera os sinais do menu de macâs
		for (let index = 0; index < 5; index++) {
			if (index < 4) {
				fill(255);
				textSize(30);
				text("+", 85 + (index * 90), 550)
			}
		}
		// gera o menu de macâs
		for (let index = 0; index < 5; index++) {
			if (valores_selecionados[index] > 0) {
				image(img_m_r, 20 + (index * 90), 510, 60, 65);
				if (valores_selecionados[index] > 9) {
					text(valores_selecionados[index], 30 + (index * 90), 560);
				} else {
					text("0" + valores_selecionados[index], 30 + (index * 90), 560);
				}
			} else {
				image(img_m_b, 20 + (index * 90), 510, 60, 65);
			}
		}
		image(img_pie, 800, 500, 120, 60)
		textSize(50);
		fill(255);
		text("|" + numero_objetivo, 850, 480);
		fill(226, 4, 19);
		valores_selecionados_resultado = valores_selecionados[0] + valores_selecionados[1] + valores_selecionados[2] + valores_selecionados[3] + valores_selecionados[4];
		if (valores_selecionados_resultado < 10) {
			text("0" + valores_selecionados_resultado, 790, 480);
		} else {
			text(valores_selecionados_resultado, 790, 480);
		}
	} else if (fase >= 3 && fase <= 4) {
		background(img_bk_fase_2);
		// gera as macâs na mesa
		for (let index = 0; index < 10; index++) {
			if (num[index] > 0) {
				image(img_m_r, posicao_m_x_2[index], posicao_m_y_2[index], 60, 65);
				if (num[index] > 9) {
					text(num[index], (posicao_m_x_2[index] + 10), posicao_m_y_2[index] + 50);
				} else {
					text("0" + num[index], (posicao_m_x_2[index] + 10), posicao_m_y_2[index] + 50);
				}
			} else {
				image(img_m_b, posicao_m_x_2[index], posicao_m_y_2[index], 60, 65);
			}
		}
		// gera os sinais do menu de macâs
		image(img_m_r, 50, 200, 70, 75);
		text(control_34, 65, 255);
		for (let index = 0; index < 5; index++) {
			if (index < 4) {
				fill(255);
				textSize(30);
				text("-", 130 + (index * 90), 250)
			}
		}
		// gera o menu de macâs
		for (let index = 0; index < 4; index++) {
			if (valores_selecionados[index] > 0) {
				image(img_m_r, 150 + (index * 90), 205, 60, 65);
				if (valores_selecionados[index] > 9) {
					text(valores_selecionados[index], 160 + (index * 90), 255);
				} else {
					text("0" + valores_selecionados[index], 160 + (index * 90), 255);
				}
			} else {
				image(img_m_b, 150 + (index * 90), 205, 60, 65);
			}
		}
		image(img_pie, 800, 500, 120, 60)
		textSize(50);
		fill(255);
		text("|" + (control_34 - numero_objetivo), 850, 480);
		fill(226, 4, 19);
		valores_selecionados_resultado = valores_selecionados[0] + valores_selecionados[1] + valores_selecionados[2] + valores_selecionados[3] + valores_selecionados[4];
		if ((control_34 - valores_selecionados_resultado) < 10) {
			text("0" + (control_34 - valores_selecionados_resultado), 790, 480);
		} else {
			text((control_34 - valores_selecionados_resultado), 790, 480);
		}
	} else if (fase >= 5 && fase <= 6) {
		if (control_view_5 == 0) {
			clear();
			contagem_regreciva(2);
			background(img_bk_intro_fase_3);
			fill(255);
			rect(770, 480, 200, 75);
			fill(0);
			text("Proximo", 810, 530);
		} else {
			background(img_bk_fase_3);
			fill(0);
			textSize(23);
			text("Para essa maquina funcionar você precisa escolher um dos botões\ncom valores para a multiplicação, ela é muito precisa, então não\nsaia clicando em todos. Nos precisamos de " + numero_objetivo + " tortas. Vamos lá!?", 60, 100);
			for (let index = 0; index < 5; index++) {
				textSize(28);
				fill(146, 208, 80);
				rect(640, 280 + (index * 60), 130, 50);
				fill(255);
			}
			for (let index = 0; index < 5; index++) {
				text("x" + valores_multiplicacao[index], 685, 315 + (index * 60));
			}
			textSize(40);
			image(img_pie, 400, 468, 120, 60);
			text("0" + numero_de_tortas, 435, 450);
		}
	} else if (fase >= 7 && fase <= 8) {
		background(img_bk_fase_4);
		fill(255)
		textSize(23);
		text("Nossas tortas ficaram ótimas! Agora vamos dividi-las para\nos integrantes do jantar. Temos "+numero_objetivo+" tortas e vamos dividir\npara "+dividendo+" pessoas. Cada Pessoa comerá quantas tortas?", 280, 100);
		for (let index = 0; index < 5; index++) {
			fill(134, 0, 1);
			rect(285+(index*135), 275 , 110, 125);
			image(img_pie, 290+(index*135), 300, 100, 45);
			fill(255);
			textSize(30);
			text(valores_divisao[index], 325+(index*135), 380);
		}
	}else if(fase==101){
		background(img_bk_perdeu);
		fill(255);
		rect(450, 350 , 250, 50);
		fill(0);
		textSize(30);
		text("Jogar Novamente", 455, 385);
	}else if(fase==9){
		background(img_bk_final);
		fill(255);
		rect(450, 350 , 250, 50);
		fill(0);
		textSize(30);
		text("Jogar Novamente", 455, 385);
	}
	if(fase>=1 && fase<=8){
		fill(255);
		textSize(30);
		text("Level: "+fase+"", 20, 42);
		text("vidas:", 150, 42);
		for (let index = 0; index < vidas; index++) {
			image(img_m_r, 235 + (index * 40), 12, 35, 35);
		}
		if (cronometro[1] > 9) {
			text("Tempo: 0" + cronometro[0] + ":" + cronometro[1], 800, 40);
		} else {
			if (cronometro[0] == 0) {
				fill(226, 4, 19);
			}
			text("Tempo: 0" + cronometro[0] + ":0" + cronometro[1], 800, 40);
		}
	}	
	fill(255);
	rect(945, 560 , 50, 35);
	if(status_sound_fundo==0){
		image(img_nosound, 955, 562, 30, 30);
	}else{
		image(img_sound, 955, 562, 30, 30);
	}
	
}
// -------------------------------------bloco lógico de geração de padroes numericos usados -------------------------------
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
function verifica(numero) {
	verif = 0;
	if (fase > 0 && fase < 5) {
		for (var x = num.length - 1; x >= 0; x--) {
			if (numero == num[x]) {
				verif = 1;
				break;
			}
		}
		if (verif != 0 || numero == numero_objetivo) {
			return false;
		} else {
			return true;
		}
	} else if (fase > 4 && fase < 7) {
		for (var x = valores_multiplicacao.length - 1; x >= 0; x--) {

			if (numero == valores_multiplicacao[x]) {
				verif = 1;
				break;
			}
		}
		if (verif == 0) {
			return false;
		} else {
			return true;
		}
	} else if (fase > 6 && fase < 9) {
		for (var x = valores_divisao.length - 1; x >= 0; x--) {

			if (numero == valores_divisao[x]) {
				verif = 1;
				break;
			}
		}
		if (verif == 0) {
			return false;
		} else {
			return true;
		}
	}
}
function gerar_numeros() {
	if (fase >= 1 && fase < 5) {
		if (fase == 1) {
			//console.log("Carregamento inciado modo facil");
			numero_objetivo = getRandomInt(5, 10)
			for (var i = 7; i >= 0; i--) {
				let numero22 = getRandomInt(1, 10);
				while (verifica(numero22) == false) {
					numero22 = getRandomInt(1, 10);	
				}
				num[i] = numero22;
			}
		} else {
			//console.log("Carregamento inciado modo normal");
			for (var i = 9; i >= 0; i--) {
				let numero22 = getRandomInt(1, 20);
				while (verifica(numero22) == false) {
					numero22 = getRandomInt(1, 20);
				}
				num[i] = numero22;
			}	
		}
		for (var x = 9; x >= 0; x--) {
			for (var y = 9; y >= 0; y--) {
				for (var z = 9; z >= 0; z--) {
					num_select_triple.push(num[x] + num[y] + num[z]);
				}
				num_select_double.push(num[x] + num[y]);
			}
		}
		for (var i = 80 - 1; i >= 0; i--) {
			ocorrencia[i] = 0;
		}
		for (var x = num_select_double.length - 1; x >= 0; x--) {
			for (var y = num_select_triple.length - 1; y >= 0; y--) {
				if (num_select_double[x] == num_select_triple[y]) {
					let posicao = num_select_double[x];
					ocorrencia[posicao] = ocorrencia[posicao] + 1;
				}
			}
		}
		numero_objetivo = ocorrencia.indexOf(Math.max.apply(null, ocorrencia));
		if(fase==3 || fase==4){
			control_34 = getRandomInt(numero_objetivo + 5, numero_objetivo + 20);
		}
	} else if (fase > 4 && fase < 7) {
		numero_objetivo = getRandomInt(10, 30);
		while (numero_objetivo % 2 != 0 && numero_objetivo % 3 != 0 && numero_objetivo % 4 != 0 && numero_objetivo % 5 != 0 && numero_objetivo % 6 != 0 && numero_objetivo % 7 != 0 && numero_objetivo % 8 != 0 && numero_objetivo % 9 != 0) {
			numero_objetivo = getRandomInt(30, 50);
		}
		numero_de_tortas = getRandomInt(2, 9);
		while (numero_objetivo % numero_de_tortas != 0) {
			numero_de_tortas = getRandomInt(2, 9);
		}
		let posi_certa = getRandomInt(0, 4);
		valores_multiplicacao[posi_certa] = numero_objetivo / numero_de_tortas;
		//console.log("o certo está em: " + posi_certa);

		for (let index = 0; index < 5; index++) {
			if(index!=posi_certa){
				let numero_v = (index + 1) * getRandomInt(1, 5);
				while (verifica(numero_v)) {
					numero_v = (index + 1) * getRandomInt(1, 5);
				}
				valores_multiplicacao[index] = numero_v;
			}
		}
	} else if (fase>=7 && fase<=8) {
		if(fase==7){
			numero_objetivo = getRandomInt(10, 30);
		}else{
			numero_objetivo = getRandomInt(30, 70);
		}
		while(numero_objetivo %2!=0 && numero_objetivo %3!=0 && numero_objetivo %5!=0 &&numero_objetivo %7!=0){
			numero_objetivo = getRandomInt(10, 40);
		}
		dividendo = getRandomInt(2, 9);
		while(numero_objetivo % dividendo!=0){
			dividendo = getRandomInt(2, 9);
		}
		let posi_certa = getRandomInt(0, 4);
		valores_divisao[posi_certa] = numero_objetivo / dividendo;
		//console.log("o certo está em: " + posi_certa);

		for (let index = 0; index < 5; index++) {
			if(index!=posi_certa){
				let numero_v = (index + 1) * getRandomInt(1, 4);
				while (verifica(numero_v)) {
					numero_v = (index + 1) * getRandomInt(1, 4);
				}
				valores_divisao[index] = numero_v;
			}
		}
	}
}

