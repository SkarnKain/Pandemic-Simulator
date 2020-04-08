var simulation_on = false; // Etat de lancement de la simulation

var nb_agents = 1000; // Nombre total d'agent
var capa_hop = 0; // Capacité de l'hopital (redéfinie ultérieurement via menu)
var delai_immun = 100; // Nombre de jours de conservation de l'immunité après rémission (redéfini ultérieurement via menu)


//Position des différents menus
var posY_t = 100;
var posX_t = 900;
var posY_m = posY_t + 200;
var posX_C1 = 350;
var posX_C2 = 900;
var posX_C3 = 1450;

var title_menu_pos = [posX_t, posY_t];

var capa_hop_menu_pos = [posX_C1, posY_m];
var delai_immun_menu_pos = [posX_C1, posY_m + 150];

var sd_menu_pos = [posX_C2, posY_m];
var sd2_menu_pos = [posX_C2, posY_m + 150];
var resp_sd_menu_pos = [posX_C2, posY_m + 300];

var capa_qt_menu_pos = [posX_C3, posY_m];
var qt_sf_menu_pos = [posX_C3, posY_m + 130];
var qt_sl_menu_pos = [posX_C3, posY_m + 280];


var agents = []; // Liste des objets-agents
var zones = []; // Liste des objets-zones
var graph; // Objet-Graphique


var social_distance = 15; // Distance respectée en cas de distanciation sociale
var sd_value = false; // Activation (true) ou non (false) de la distanciation sociale
var sd_date_on = 0; // Date de début de la distanciation sociale initiale (redéfinie ultérieurement via menu)
var sd_date_off = 0; // Date de fin de la distanciation sociale initiale (redéfinie ultérieurement via menu)
var sd2_date_on = 0; // Date de début de la distanciation sociale secondaire (redéfinie ultérieurement via menu)
var sd2_date_off = 0; // Date de fin de la distanciation sociale secondaire (redéfinie ultérieurement via menu)
var resp_sd = 0; // % des agents respectant la distanciation sociale (redéfinie ultérieurement via menu)


var capa_qt = 0; // Capacité de la quarantaine (redéfinie ultérieurement via menu)
var qt_sf_value = false; // Activation (true) ou non (false) de la mise en quarantaine des agents avec symptômes forts ou extrêmes
var qt_sf_date_on = 0; // Date de début de la mise en quarantaine des agents avec symptômes forts ou extrêmes (redéfinie ultérieurement via menu)
var qt_sf_date_off = 0; // Date de fin de la mise en quarantaine des agents avec symptômes forts ou extrêmes (redéfinie ultérieurement via menu)
var qt_sl_value = false; // Activation (true) ou non (false) de la mise en quarantaine des agents avec symptômes légers
var qt_sl_date_on = 0; // Date de début de la mise en quarantaine des agents avec symptômes légers (redéfinie ultérieurement via menu)
var qt_sl_date_off = 0; // Date de fin de la mise en quarantaine des agents avec symptômes légers (redéfinie ultérieurement via menu)

var frame_deb_sim = 0; // N° de frame du début de la simulation (après lancement via menu)
var frame_cur_sim = 0; // N° de frame courante de la simulation
var frames_jour = 60; // Nombre de frames pour passage d'un jour
var jour = -1; // Jour courant


function setup() {
    createCanvas(1800, 900);
    menu_init(); // Lancement du menu
}


function draw() {
    if (simulation_on) {
        frame_cur_sim = frameCount - frame_deb_sim;
        checkbox_visu_depl.show();
        if (checkbox_dev.checked()) {
            checkbox_sd.show();
            checkbox_qt_sf.show();
            checkbox_qt_sl.show();
            checkbox_visu_status.show();
        }
        simulation();
        radio_graph_visu.show();
    } else {
        menu();
    }
    textSize(20);
    textAlign(RIGHT);
    fill(255, 15);
    stroke(255, 15);
    text("FrameRate : " + round(frameRate()), width - 10, height - 10)
}
