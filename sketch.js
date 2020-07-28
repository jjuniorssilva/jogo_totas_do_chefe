// Video explicativo: https://youtu.be/qr90P7CiTrs
// Video do jogo:  https://youtu.be/Jl_1XNgUqQc

let num = []
let num_test = [6,10,2,3,4,5,1,7,9,8]
let num_select_triple = []
let num_select_double = []
let ocorrencia = [];
let valores_selecionados = [0, 0, 0, 0];
let valores_multiplicacao = [0, 0, 0, 0, 0];
let valores_divisao = [0, 0, 0, 0, 0];
let posicao_m_x = [550, 650, 730, 490, 600, 750, 850, 540, 700, 840];
let posicao_m_y = [90, 120, 80, 190, 220, 190, 170, 290, 270, 280];
let posicao_m_x_2 = [10, 50, 130, 140, 250, 250, 390, 350, 490, 440];
let posicao_m_y_2 = [450, 520, 460, 530, 450, 530, 455, 530, 460, 530];
let cronometro = [0, 0];

let fase = 105, fase_intro = 0, fase_intro_etapa=0;
let vidas = 3, config = 0, control_34 = 0, control_view_5 = 0;numero_objetivo_us=0;loading_file=0;
let img_porf,img_dev,img_bk_inst,img_bk_credt,img_logo,img_sound,img_nosound,img_bk_perdeu,img_bk_final, img_bk, img_m_r, img_pie, img_bk_fase_2, img_bk_fase_3, img_bk_fase_4, img_bk_intro_1, img_bk_intro_fase_3, img_bk_intro_3, img_bk_intro_4, img_bk_menu,img_boneco_1,img_boneco_2,img_boneco_3,img_boneco_1_i,img_boneco_2_i,img_boneco_5,img_boneco_6;
let numero_us=0,numero_objetivo, valores_selecionados_resultado, numero_de_tortas, dividendo=0;
let intervalId,status_cont=1,time=0;
let canvas;
let sound_fundo,sound_vence,sound_perdeu,sound_acertou,sound_errou,status_sound_fundo=1, audio_Context=0;

function setup() {
	canvas = createCanvas(1000, 600);
	canvas.parent('canvas1');
	
	sound_fundo = loadSound('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/music/fundo.mp3',loading_files);
	sound_venceu = loadSound('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/music/venceu.mp3',loading_files);
	sound_perdeu = loadSound('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/music/perdeu.mp3',loading_files);
	sound_acertou = loadSound('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/music/acertou.mp3',loading_files);
	sound_errou = loadSound('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/music/errado.mp3',loading_files);

	img_bk = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/bk.jpg',loading_files);
	img_bk_fase_2 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/bk_fase_2.jpg',loading_files);
	img_bk_fase_3 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/bk_fase_3_1.jpg',loading_files);
	img_bk_fase_4 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/bk_fase_4.jpg',loading_files);
	img_bk_menu = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/menu.jpg',loading_files);
	img_bk_intro_1 = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/intro_1.jpg',loading_files);
	img_bk_inst = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/b5.jpg',loading_files);
	img_bk_credt = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/b7.jpg',loading_files);
	img_bk_final = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/final.jpg',loading_files);
	img_bk_perdeu = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/perdeu.jpg',loading_files);
	
	img_logo = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/logo.png',loading_files);
	img_m_r = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/m_red.png',loading_files);
	img_m_b = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/m_black.png',loading_files);
	img_pie = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/pie_of_apple.png',loading_files);
	img_sound = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/icon_sound.png',loading_files); 
	img_nosound = loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/icon_nosound.png',loading_files); 
	
	img_boneco_1=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_1.png',loading_files);
	img_boneco_2=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_2.png',loading_files);
	img_boneco_5=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_5.png',loading_files);
	img_boneco_6=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_6.png',loading_files);
	img_boneco_5_i=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_5_i.png',loading_files);
	img_boneco_6_i=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_6_i.png',loading_files);
	img_boneco_1_i=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_1_i.png',loading_files);
	img_boneco_2_i=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/boneco_2_i.png',loading_files);
	img_porf=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/prof.jpg',loading_files);
	img_dev=loadImage('https://raw.githubusercontent.com/jjuniorssilva/jogo_totas_do_chefe/master/img/dev.jpg',loading_files);

	sound_fundo.setVolume(0.1);
	sound_errou.setVolume(0.1);
	sound_acertou.setVolume(0.5);
	sound_perdeu.setVolume(0.1);
	sound_venceu.setVolume(0.2);
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
function loading_files(){
	loading_file++;
	//console.log("carregou "+parseInt(loading_file*(100/34))+"%");
	if(loading_file>30){
		//console.log("Todos carregados");
		setTimeout(function() { fase=0; }, 1000);
	}
}
function mouseClicked() {
	if (fase == 0) {
		if (fase_intro == 0) {
			if(audio_Context==0){
				if ((mouseX>670 && mouseX<970) && (mouseY>500 && mouseY<575)) {
					if (getAudioContext().state !== 'running') {
						getAudioContext().resume();
					}
					sound_fundo.loop();	
					audio_Context=1;
				}
			}else{
				if ((mouseX > 520 && mouseX < 520+300) && (mouseY > 130 && mouseY < 130+75)) {
					next_fase_intro();
				}
				if ((mouseX > 520 && mouseX < 520+300) && (mouseY > 220 && mouseY < 220+75)) {
					fase=103;
					
				} 
				if ((mouseX > 520 && mouseX < 520+300) && (mouseY > 310 && mouseY < 310+75)) {
					fase=104;
				} 
			}
		}else if (fase_intro == 1) {
			if ((mouseX > 740 && mouseX < 940) && (mouseY > 520 && mouseY < 595)) {
				next_fase_intro();
			}
		}else{
			if(fase_intro_etapa==0){
				if ((mouseX > posicao_m_x[2] && mouseX < (posicao_m_x[2] + 60)) && (mouseY > posicao_m_y[2] && mouseY < (posicao_m_y[2] + 65))) {
					fase_intro_etapa=1;
					numero_selecionado(2);
				}
			}else if(fase_intro_etapa==1){
				if ((mouseX > posicao_m_x[7] && mouseX < (posicao_m_x[7] + 60)) && (mouseY > posicao_m_y[7] && mouseY < (posicao_m_y[7] + 65))) {
					fase_intro_etapa=2;
					numero_selecionado(7);
				}
				
			}else if(fase_intro_etapa==2){
				if ((mouseX > posicao_m_x[4] && mouseX < (posicao_m_x[4] + 60)) && (mouseY > posicao_m_y[4] && mouseY < (posicao_m_y[4] + 65))) {
					fase_intro_etapa=3
					numero_selecionado(4);
				}

			}else if(fase_intro_etapa==3){
				if ((mouseX > 110 && mouseX < (110 + 60)) && (mouseY > 510 && mouseY < 510 + 65)) {
					fase_intro_etapa=4;
					numero_desselecionado(1);
				}
			}else if(fase_intro_etapa==4){
				if ((mouseX > 740 && mouseX < 940) && (mouseY > 520 && mouseY < 595)){
					next_fase_intro();
				}
			}
		}
	} else if (fase >= 1 && fase <= 3 && status_cont==1) {
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
	} else if (fase >= 4 && fase <= 6 && status_cont==1) {
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
	} else if (fase == 7 && control_view_5 == 0 && status_cont==1) {
		if ((mouseX > 740 && mouseX < 940) && (mouseY > 520 && mouseY < 595)) {
			control_view_5 = 1;
			contagem_regreciva(1);
		}
	} else if (fase >= 7 && fase <= 9 && control_view_5 == 1 && status_cont==1) {
		if ((mouseX > 670 && mouseX < (670+150)) && (mouseY > 265 && mouseY < 265 + 50)) {
			numero_selecionado(0);
		} else if ((mouseX > 670 && mouseX < (670+150)) && (mouseY > 327.5 && mouseY < 327.5 + 50)) {
			numero_selecionado(1);
		} else if ((mouseX > 670 && mouseX < (670+150)) && (mouseY > 390 && mouseY < 390 + 50)) {
			numero_selecionado(2);
		} else if ((mouseX > 670 && mouseX < (670+150)) && (mouseY > 452.5 && mouseY < 452.5 + 50)) {
			numero_selecionado(3);
		} else if ((mouseX > 670 && mouseX < (670+150)) && (mouseY > 515 && mouseY < 515 + 50)) {
			numero_selecionado(4);
		}
	} else if (fase >= 10 && fase <=12 && status_cont==1) {
		if ((mouseX > 285 && mouseX < (285 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(0);
		} else if ((mouseX > 420 && mouseX < (420 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(1);
		} else if ((mouseX > 555 && mouseX < (555 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(2);
		} else if ((mouseX > 690 && mouseX < (690 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(3);
		} else if ((mouseX > 825 && mouseX < (825 + 110)) && (mouseY > 275 && mouseY < 275 + 125)) {
			numero_selecionado(4);
		}	
	}else if(fase==102 || fase ==101){
		if ((mouseX > 450 && mouseX < (450 + 250)) && (mouseY > 350 && mouseY < 350 + 50)) {
			recomeçar();
			sound_fundo.play();
		}
	}else if(fase==103 || fase==104){
		if ((mouseX > 20 && mouseX < 20+130) && (mouseY >10 && mouseY < 10 + 50)) {
			fase=0;
		}
	}
	if ((mouseX > 945 && mouseX < (995)) && (mouseY > 560 && mouseY < 595) && audio_Context!=0) {
		if(sound_fundo.isPlaying()){
			sound_fundo.stop();
			status_sound_fundo=0;
		}else{
			sound_fundo.play();
			status_sound_fundo=1;
		}
	}
	if(fase!=102 && fase!=101 && fase>=0){
		if((mouseX > 945 && mouseX < (995)) && (mouseY > 520 && mouseY < 555)) {
			if(status_cont==1){
				contagem_regreciva(2);
				status_cont=0;
			}else{
				contagem_regreciva(1);
				status_cont=1;
			}
		}
	}
}
function numero_selecionado(posi) {
	if (fase >= 0 && fase <= 6) {
		if (valores_selecionados.indexOf(0) > -1) {
			for (let index = 0; index < 4; index++) {
				if (valores_selecionados[index] == 0) {
					if(fase==0){
						valores_selecionados[index] = posi;
						num_test[posi] = 0;
					}else{
						valores_selecionados[index] = num[posi];
						num[posi] = 0;
					}
					break;
				}
			}
		} else {
			console.log("cheio");
		}
	} else if (fase >= 7 && fase <= 9) {
		if (valores_multiplicacao[posi] == (numero_objetivo / numero_de_tortas)) {
			next_fase();
		} else {
			perdeu_vida();
		}
	} else if (fase >= 10 && fase <= 12) {
		if (valores_divisao[posi] == (numero_objetivo / dividendo)) {
			next_fase();
		} else {
			perdeu_vida();
		}
	}
}
function numero_desselecionado(posi) {
	if(fase>=1){
		if (valores_selecionados[posi] != 0) {
			if (num.indexOf(0) > -1) {
				for (let index = 0; index < num.length; index++) {
					if (num[index] == 0) {
						num[index] = valores_selecionados[posi];
						valores_selecionados[posi] = 0;
						break;
					}
				}
			}
		}
	}else if(fase==0){
		if (valores_selecionados[posi] != 0) {
			for (let index = 0; index < num_test.length; index++) {
				if (num_test[index] == 0) {
					num_test[index] = valores_selecionados[posi];
					valores_selecionados[posi] = 0;
					break;
				}
			}
		}
	}
	
}
function contagem_regreciva(mode) {
	if (mode == 1) {
		if(time<=0){
			time = 89;
			cronometro[0] = parseInt(90 / 60);
			cronometro[1] = 90 % 60;
		}else{
			cronometro[0] = parseInt(time / 60);
			cronometro[1] = time % 60;
		}
		
		intervalId = setInterval(function () {
			if (time-- < 1) {
				cronometro[0] = 0;
				cronometro[1] = 0;
				perdeu_vida();
			} else {
				cronometro[0] = parseInt(time / 60);
				cronometro[1] = time % 60;
			};
		}, 1000);
	} else if (mode == 2) {
		return clearInterval(intervalId);
	}
}
function next_fase() {
	if(fase==12){
		fase=102;
		sound_fundo.stop();
		sound_venceu.play();
		contagem_regreciva(2);	
	}else{
		sound_acertou.play();
		recomeçar();
		fase = fase + 1;
		config = 0;
	}	
}
function next_fase_intro() {
	if (fase_intro >=2) {
		recomeçar();
		fase = 1;
		config = 0;	
	} else {
		fase_intro = fase_intro + 1;
	}
}
function verificacao_fase() {
	if(fase>=1 && fase<=6){
		if (valores_selecionados_resultado > numero_objetivo) {
			perdeu_vida();
		} else if (valores_selecionados_resultado == numero_objetivo) {
			next_fase();
		}
	}
}
function recomeçar() {
	contagem_regreciva(2);
	time=0;
	contagem_regreciva(1);
	if(fase==0){
		for (let i = 0; i < valores_selecionados.length; i++) {
			valores_selecionados[i]=0;
		}
	}else if (fase > 0 && fase <= 6) {
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
	}else if(fase==102 || fase==101){
		contagem_regreciva(2);
		vidas=3;
		fase=0;
		time=0;
		fase_intro=0
		fase_intro_etapa=0
		num_test[2]=2;
		num_test[4]=4;
		num_test[7]=7;
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

//-------------------------------------------------------- bloco do layout do jogo ----------------//
function gerar_layout() {
	fill(255);
	if (fase == 0) {
		if (fase_intro == 0) {
			background(img_bk_menu);
			image(img_logo, 100,60,350,300);
			textSize(40);
			stroke(0);
			strokeWeight(3);
			if((mouseX>520 && mouseX<820) && (mouseY>130 && mouseY<130+75) && audio_Context==1){
				fill('powderblue');
			}else{
				fill(255);
			}
			rect(520, 130, 300, 75);
			if((mouseX>520 && mouseX<820)&& (mouseY>220 && mouseY<220+75) && audio_Context==1 ){
				fill('powderblue');
			}else{
				fill(255);
			}
			rect(520, 220, 300, 75);
			if((mouseX>520 && mouseX<820)&& (mouseY>310 && mouseY<310+75) && audio_Context==1){
				fill('powderblue');
			}else{
				fill(255);
			}
			rect(520, 310, 300, 75);
			noStroke();
			fill(0);
			text("Começar", 580, 180)
			text("Instruções", 570, 270)
			text("Créditos", 580, 360)
			if(audio_Context==0){
				fill('rgba(0,0,0, 0.9)');
				rect(0, 0, 1000, 600);
				fill(255);
				noStroke();
				rect(30, 50, 600, 140, 10);
				triangle(400, 180, 380, 250, 450, 180);
				image(img_boneco_1, 100, 220, 300, 380);
				if((mouseX>670 && mouseX<970) && (mouseY>500 && mouseY<575)){
					fill('powderblue');
				}else{
					fill(255);
				}
				stroke(0);
				strokeWeight(4);
				rect(670, 500, 300, 75);
				noStroke();
				fill(0);
				textSize(25);
				text("Olá, esse jogo é totalmente educacional, sem fins\nlucrativos, espero que goste. Vamos lá!", 40, 100);
				textSize(30);
				text("Vamos lá!",750, 550)
				stroke(0);
				strokeWeight(0);
			}
			
		} else if (fase_intro == 1) {
			background(img_bk_intro_1);
			textSize(30);
			stroke(0);
			strokeWeight(4);
			if((mouseX>740 && mouseX<740+200) && (mouseY>520 && mouseY<520+75) && audio_Context==1){
				fill('powderblue');
			}else{
				fill(255);
			}
			rect(740, 520, 200, 75);
			noStroke();
			fill(0);
			text("Próximo", 780, 570);
		} else if (fase_intro == 2) {
			textSize(30);
			background(img_bk);
			// gera as macâs na árvore
			for (let index = 0; index < 10; index++) {
				if (num_test[index] > 0) {
					image(img_m_r, posicao_m_x[index], posicao_m_y[index], 60, 65);
					if (num_test[index] > 9) {
						text(num_test[index], (posicao_m_x[index] + 10), posicao_m_y[index] + 50);
					} else {
						text("0" + num_test[index], (posicao_m_x[index] + 10), posicao_m_y[index] + 50);
					}
				} else {
					image(img_m_b, posicao_m_x[index], posicao_m_y[index], 60, 65);
				}
			}
			// gera os sinais do menu de macâs
			for (let index = 0; index < 3; index++) {
				fill(255);
				textSize(30);
				text("+", 85 + (index * 90), 550)
			}
			// gera o menu de macâs
			for (let index = 0; index < 4; index++) {
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
			// gera torta
			image(img_pie, 800, 500, 120, 60)
			textSize(50);
			fill(255);
			text("|06", 850, 480);
			fill(226, 4, 19);
			valores_selecionados_resultado = valores_selecionados[0] + valores_selecionados[1] + valores_selecionados[2] + valores_selecionados[3];
			if (valores_selecionados_resultado < 10) {
				text("0" + valores_selecionados_resultado, 790, 480);
			} else {
				text(valores_selecionados_resultado, 790, 480);
			}
			// gera o boneco e frases a cada etapa
			if(fase_intro_etapa==0){
				image(img_boneco_1, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Olá, vamos aprender como pegar maças? \nPara começar tente clicar na maçã\nselecionada.", 40, 100);
				noStroke();
				strokeWeight(4);
				stroke(255, 204, 0);
				noFill();
				circle(posicao_m_x[2]+30, posicao_m_y[2]+35, 90);
				noStroke();
				
			}else if(fase_intro_etapa==1 || fase_intro_etapa==2){
				image(img_boneco_1, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Otimo! olhe a maça está aqui em baixo\nagora e ali no canto o numero vermeho\naumentou. Adicine maçâs até o numero\nficar igual.", 50, 90);
				noStroke();
				if(fase_intro_etapa==1){
					strokeWeight(4);
					stroke(255, 204, 0);
					noFill();
					circle(posicao_m_x[7]+30, posicao_m_y[7]+35, 90);
					noStroke();
				}else{
					strokeWeight(4);
					stroke(255, 204, 0);
					noFill();
					circle(posicao_m_x[4]+30, posicao_m_y[4]+35, 90);
					noStroke();
				}
				
			}else if(fase_intro_etapa==3){
				image(img_boneco_1, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Perceba que o número vermelho estar\nmaior que a meta, se isso acontecer voce\nperde uma vida, mas caso não tenha\npassado voce pode clicar em baixo e\nremover a maçã que achar melhor.", 50, 75);
				noStroke();
				strokeWeight(4);
				stroke(255, 204, 0);
				noFill();
				circle(140, 545, 90);
				noStroke();	
			}else if(fase_intro_etapa==4){
				image(img_boneco_1, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Excelente! Você está pronto para começar,\nclique em continuar!", 40, 100);
				textSize(30);
				stroke(0);
				strokeWeight(4);
				if((mouseX>740 && mouseX<740+200) && (mouseY>520 && mouseY<520+75) && audio_Context==1){
					fill('powderblue');
				}else{
					fill(255);
				}
				rect(740, 520, 200, 75);
				noStroke();
				fill(0);
				text("Próximo", 780, 570);
			}
		}
	}else if (fase >= 1 && fase <= 3) {
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
		for (let index = 0; index < 3; index++) {
			if (index < 4) {
				fill(255);
				textSize(30);
				text("+", 85 + (index * 90), 550)
			}
		}
		// gera o menu de macâs
		for (let index = 0; index < 4; index++) {
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
		//gera o boneco com dicas
		if(vidas==3){
				image(img_boneco_2, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Agora é valendo!\nSe você achar difícil, pause o jogo e faça\nem um papel a continha!\nLembre-se que aqui você vai somar os\nnumeros das mançâs.", 50, 75);
				noStroke();
		}else if(vidas==2){
				image(img_boneco_5, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text(" Cuidado com o tempo!\nVocê tem mais duas vidas.", 50, 100);
				noStroke();
		}else{
				image(img_boneco_6, 0, 200, 230, 300);
				fill(255);
				noStroke();
				rect(30, 50, 400, 140, 10);
				triangle(300, 180, 250, 250, 350, 180);
				fill(0);
				textSize(20);
				text("Nossas vidas estão baixas!\nPause o jogo e tente fazer na folha de\npapel as contas!", 50, 75);
				noStroke();
			}
		image(img_pie, 800, 500, 120, 60)
		textSize(50);
		fill(255);
		text("|" + numero_objetivo, 850, 480);
		fill(226, 4, 19);
		valores_selecionados_resultado = valores_selecionados[0] + valores_selecionados[1] + valores_selecionados[2] + valores_selecionados[3];
		if (valores_selecionados_resultado < 10) {
			text("0" + valores_selecionados_resultado, 790, 480);
		} else {
			text(valores_selecionados_resultado, 790, 480);
		}
	} else if (fase >= 4 && fase <= 6) {
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
		for (let index = 0; index < 4; index++) {
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
		if(vidas==3){
			image(img_boneco_2_i, 530, 220, 290, 380);
			fill(255);
			noStroke();
			rect(550, 80, 400, 140, 10);
			triangle(800, 180, 700, 250, 700, 180);
			fill(0);
			textSize(20);
			text("Você é fera nisso!\nSe você achar difícil, pause o jogo e faça\nem um papel a continha!\nLembre-se que aqui você vai subtrair os\nnumeros das mançâs.", 560, 105);
			noStroke();
		}else if(vidas==2){
			image(img_boneco_5_i, 530, 220, 290, 380);
			fill(255);
			noStroke();
			rect(550, 80, 400, 140, 10);
			triangle(800, 180, 700, 250, 700, 180);
			fill(0);
			textSize(20);
			text("Cuidado com o tempo!\nVocê tem mais duas vidas.\nLembre-se que aqui você vai subtrair os\nnumeros das mançâs", 580, 120);
			noStroke();
		}else{
			image(img_boneco_6_i, 530, 220, 290, 380);
			fill(255);
			noStroke();
			rect(550, 80, 400, 140, 10);
			triangle(800, 180, 700, 250, 700, 180);
			fill(0);
			textSize(20);
			text("Nossas vidas estão baixas!\nPause o jogo e tente fazer na folha de\npapel as contas!\nLembre-se que aqui você vai subtrair os\nnumeros das mançâs", 560, 105);
			noStroke();
		}
		image(img_pie, 800, 500, 120, 60)
		textSize(50);
		fill(255);
		text("|0" + (control_34 - numero_objetivo), 850, 480);
		fill(226, 4, 19);
		valores_selecionados_resultado = valores_selecionados[0] + valores_selecionados[1] + valores_selecionados[2] + valores_selecionados[3];
		if ((control_34 - valores_selecionados_resultado) < 10) {
			text("0" + (control_34 - valores_selecionados_resultado), 790, 480);
		} else {
			text((control_34 - valores_selecionados_resultado), 790, 480);
		}
	} else if (fase >= 7 && fase <= 9) {
		if (control_view_5 == 0) {
			clear();
			contagem_regreciva(2);
			background(img_bk_fase_3);
			image(img_boneco_2, 0, 200, 310, 400);
			
			noStroke();
			fill(255);
			rect(100, 80, 550, 140, 10);
			triangle(310, 200, 280, 250, 360, 200);
			textSize(25);
			fill(0)
			text("Você realmente tem o dom para a cozinha!\nAgora vamos usar minha maquinha secreta,\no multiplicador de tortas.", 120,120);		
			stroke(0);
			strokeWeight(2);
			if((mouseX>750 && mouseX<950) && (mouseY>520 && mouseY<520+75)){
				fill('powderblue');
			}else{
				fill(255);
			}
			textSize(30);
			rect(740, 520, 200, 75);
			noStroke();
			fill(0);
			text("Proximo", 780, 570);
	
		}else{
			background(img_bk_fase_3);
			for (let index = 0; index < 5; index++) {
				noStroke();
				if((mouseX>670 && mouseX<670+150) && (mouseY>(265 + (index * 62.5)) && mouseY<(265 + (index * 62.5))+50)){
					fill(10, 80, 10)
				}else{
					fill(146, 208, 80);
				}
				textSize(30);
				rect(670, 265 + (index * 62.5), 150, 50);
				fill(0);
				text("x" + valores_multiplicacao[index], 720, 300 + (index * 62.5));
			}
			if(vidas==3){
				image(img_boneco_2, 0, 200, 310, 400);
				fill(255);
				noStroke();
				rect(100, 80, 800, 140, 10);
				triangle(310, 200, 280, 250, 360, 200);
				textSize(25);
				fill(0);
				text("Para essa maquina funcionar você precisa escolher um dos botões\ncom valores para a multiplicação, ela é muito precisa, então não\nsaia clicando em todos. Nós precisamos de " + numero_objetivo + " tortas. Vamos lá!?", 120, 120);
			}else if(vidas==2){
				image(img_boneco_5, 0, 200, 310, 400);
				fill(255);
				noStroke();
				rect(100, 80, 800, 140, 10);
				triangle(310, 200, 280, 250, 360, 200);
				textSize(25);
				fill(0);
				text("Cuidado com o tempo!\nVocê tem mais duas vidas. Nós precisamos de " + numero_objetivo + " tortas.\nVamos lá!?", 120, 130);	
			}else{
				image(img_boneco_6,0, 200, 310, 400);
				fill(255);
				noStroke();
				rect(100, 80, 800, 140, 10);
				triangle(310, 200, 280, 250, 360, 200);
				textSize(25);
				fill(0);
				text("Nossas vidas estão baixas!\nPause o jogo e tente fazer na folha de papel as contas!\nNós precisamos de " + numero_objetivo + " tortas. Vamos lá!?", 120, 120);
			}
			fill(255);
			textSize(40);
			image(img_pie, 440, 420, 120, 60);
			text("0" + numero_de_tortas, 475, 410);
			text("Tortas", 445, 520);
		}
	} else if (fase >= 10 && fase <= 12) {
		background(img_bk_fase_4);
		fill(255)
		textSize(23);
		text("Nossas tortas ficaram ótimas! Agora vamos dividi-las para\nos integrantes do jantar. Temos "+numero_objetivo+" tortas e vamos dividir\npara "+dividendo+" pessoas. Cada Pessoa comerá quantas tortas?", 280, 100);
		for (let index = 0; index < 5; index++) {
			stroke(0);
			strokeWeight(2);
			if((mouseX>(285+(index*135)) && mouseX<(285+(index*135))+110) && (mouseY>275 && mouseY<275+125)){
				fill(90, 0, 0);
			}else{	
				fill(134, 0, 1);
			}
			rect(285+(index*135), 275 , 110, 125);
			noStroke();
			image(img_pie, 290+(index*135), 300, 100, 45);
			fill(255);
			textSize(30);
			text(valores_divisao[index], 325+(index*135), 380);
		}
	}else if(fase==101){
		background(img_bk_perdeu);
		if((mouseX>450 && mouseX<450+250) && (mouseY>350 && mouseY<350+50)){
			fill('powderblue');
		}else{
			fill(255);
		}
		rect(450, 350 , 250, 50);
		fill(0);
		textSize(30);
		text("Jogar Novamente", 455, 385);
	}else if(fase==102){
		background(img_bk_final);
		if((mouseX>450 && mouseX<450+250) && (mouseY>350 && mouseY<350+50)){
			fill('powderblue');
		}else{
			fill(255);
		}
		rect(450, 350 , 250, 50);
		fill(0);
		textSize(30);
		text("Jogar Novamente", 455, 385);
	}else if(fase==103){
		background(img_bk_inst);
		fill(255);
		rect(20, 10 , 130, 50);
		fill(0);
		textSize(30);
		text("voltar", 45, 45);
		text("Púbico Alvo", 440, 100);
		textSize(25);
		text("Crianças do 4º Ano em diante", 350, 150);
		text("Diciplina: Matematica", 400, 200);
		text("Categoria do colabeduc.org:(EF04MA03)(EF04MA06)(EF04MA07)", 130, 250);
		textSize(30);
		text("Descrição do jogo", 400, 300);
		textSize(25);
		text("Tortas do chefe é um jogo educativo que tem o objetivo fazer crianças treinarem as\nquatro operações matemáticas, porém fugindo da velha forma de tabuada dos jogos,\npor meio de cenários coloridos e uma historinha estimulante.", 30, 350);	
	}else if(fase==104){
		background(img_bk_credt);
		fill(255);
		rect(20, 10 , 130, 50);
		fill(0);
		textSize(30);
		text("voltar", 45, 45);
		image(img_boneco_5_i, 640, 150, 340, 450);
		fill(57,87,35);
		rect(95, 75, 160, 170);
		image(img_porf, 100, 80, 150, 160);
		fill(0); 
		text("Orientadora:", 280, 110);
		textSize(25);
		text("Josidalva Raimunda de Sousa", 280, 140);
		text("Professora de Língua Portuguesa e Espanhol", 280, 170);
		fill(57,87,35);
		rect(95, 265, 160, 170);
		fill(0);
		image(img_dev, 100, 270, 150, 160);
		textSize(30);
		text("Desenvolvedor:", 280, 300);
		textSize(25);
		text("Deusimar Teixeira da Silva Junior", 280, 330);
		text("Graduando em Ciência e Tecnologia ", 280, 360);
	}else if(fase==105){
		background('cornflowerblue');
		fill(0);
		textSize(40);
		text("Carregando... "+parseInt(loading_file*(100/34))+"%", 330, 180);
		textSize(25);
		if(loading_file<12){
			text("Escolhendo a árvore certa...", 350, 320);
		}else if(loading_file<20){
			text("Olhando as maçâs...", 380, 320);
		}else{
			text("Vamos começar!!", 400, 320);
		}
		noStroke();
		fill(255,100);
		rect(50, 210 , loading_file*(900/34) , 70);
		stroke(0);
		strokeWeight(4);
		noFill();
		rect(50, 210 , 900, 70);
		strokeWeight(0);
	}
	if(fase>=1 && fase<=12){
		stroke(0);
		strokeWeight(2);
		if((mouseX>945 && mouseX<945+50) && (mouseY>520 && mouseY<520+35) && audio_Context==1){
			fill('powderblue');
		}else{
			fill(255);
		}
		rect(945, 520 , 50, 35);
		noStroke();
		if(status_cont==1){
			fill(0);
			rect(962, 525 , 5, 25);
			rect(973, 525 , 5, 25);
		}else{
			fill(0);
			triangle(962, 525, 962 ,550, 980, 537);
		}
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

	if(audio_Context==1 && (fase>=0 && fase<=12)){
		stroke(0);
		strokeWeight(2);
		if((mouseX>945 && mouseX<945+50) && (mouseY>560 && mouseY<560+35) && audio_Context==1){
			fill('powderblue');
		}else{
			fill(255);
		}
		rect(945, 560 , 50, 35);
		noStroke();
		if(status_sound_fundo==0){	
			image(img_nosound, 955, 562, 30, 30);
		}else{
			image(img_sound, 955, 562, 30, 30);
		}
	}
}
// -------------------------------------bloco lógico de geração de padroes numericos usados -------------------------------
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
function verifica(numero) {
	let verif = 0;
	if (fase => 0 && fase <= 6) {
		for (var x = num.length - 1; x >= 0; x--) {
			if (numero == num[x]) {
				verif = 1;
				break;
			}
		}
		if (verif != 0 ) {
			return false;
		} else {
			return true;
		}
			
	} else if (fase >= 7 && fase <= 9) {
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
	} else if (fase >= 10 && fase <= 12) {
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
	if (fase >= 1 && fase <=6) {
		
		for (var i = 9; i >= 0; i--) {
			let numero22 = getRandomInt(1, 20);
			while (verifica(numero22) == false) {
				numero22 = getRandomInt(1, 20);
			}
			num[i] = numero22;
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
		while(numero_objetivo==numero_us){
			ocorrencia[ocorrencia.indexOf(Math.max.apply(null, ocorrencia))]=0;
			numero_objetivo = ocorrencia.indexOf(Math.max.apply(null, ocorrencia));
		}
		numero_us=numero_objetivo;
		if(fase==4 || fase==5 || fase==6){
			control_34 = getRandomInt(numero_objetivo + 5, numero_objetivo + 20);
		}
	} else if (fase >= 7 && fase <=9) {
		numero_objetivo = getRandomInt(10, 25);
		while (numero_objetivo % 2 != 0 && numero_objetivo % 3 != 0 && numero_objetivo % 4 != 0 && numero_objetivo % 5 != 0 && numero_objetivo % 6 != 0 && numero_objetivo % 7 != 0 && numero_objetivo % 8 != 0 && numero_objetivo % 9 != 0) {
			numero_objetivo = getRandomInt(10, 25);
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
				while (numero_v==(numero_objetivo / numero_de_tortas)) {
					numero_v = (index + 1) * getRandomInt(1, 5);
				}
				valores_multiplicacao[index] = numero_v;
			}
		}
	} else if (fase>=10 && fase<=12) {
		if(fase==10){
			numero_objetivo = getRandomInt(10, 20);
		}else{
			numero_objetivo = getRandomInt(30, 50);
		}
		while(numero_objetivo %2!=0 && numero_objetivo %3!=0 && numero_objetivo %5!=0 &&numero_objetivo %7!=0 && numero_us!=numero_objetivo){
			numero_objetivo = getRandomInt(10, 40);
		}
		numero_us = numero_objetivo;
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
				while (numero_v==(numero_objetivo / dividendo)) {
					numero_v = (index + 1) * getRandomInt(1, 4);
				}
				valores_divisao[index] = numero_v;
			}
		}
	}
}

