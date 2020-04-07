function menu_init() {

    slider_capa_hop = createSlider(0, 500, 15);
    slider_capa_hop.position(capa_hop_menu_pos[0] - 90, capa_hop_menu_pos[1] - 8);
    slider_capa_hop.style('width', '200px');

    slider_sd_date_on = createSlider(0, 100, 20);
    slider_sd_date_on.position(sd_menu_pos[0] - 90, sd_menu_pos[1] - 8);
    slider_sd_date_on.style('width', '200px');
    slider_sd_date_off = createSlider(0, 100, 50);
    slider_sd_date_off.position(sd_menu_pos[0] - 90, sd_menu_pos[1] - 8 + 20);
    slider_sd_date_off.style('width', '200px');
    
    slider_sd2_date_on = createSlider(0, 100, 60);
    slider_sd2_date_on.position(sd2_menu_pos[0] - 90, sd2_menu_pos[1] - 8);
    slider_sd2_date_on.style('width', '200px');
    slider_sd2_date_off = createSlider(0, 100, 70);
    slider_sd2_date_off.position(sd2_menu_pos[0] - 90, sd2_menu_pos[1] - 8 + 20);
    slider_sd2_date_off.style('width', '200px');

    slider_resp_sd = createSlider(0, 100, 70);
    slider_resp_sd.position(resp_sd_menu_pos[0] - 90, resp_sd_menu_pos[1] - 8);
    slider_resp_sd.style('width', '200px');

    slider_capa_qt = createSlider(0, 500, 50);
    slider_capa_qt.position(capa_qt_menu_pos[0] - 90, capa_qt_menu_pos[1] - 8);
    slider_capa_qt.style('width', '200px');

    slider_qt_sf_date_on = createSlider(0, 100, 00);
    slider_qt_sf_date_on.position(qt_sf_menu_pos[0] - 90, qt_sf_menu_pos[1] - 8);
    slider_qt_sf_date_on.style('width', '200px');
    slider_qt_sf_date_off = createSlider(0, 100, 0);
    slider_qt_sf_date_off.position(qt_sf_menu_pos[0] - 90, qt_sf_menu_pos[1] - 8 + 20);
    slider_qt_sf_date_off.style('width', '200px');

    slider_qt_sl_date_on = createSlider(0, 100, 0);
    slider_qt_sl_date_on.position(qt_sl_menu_pos[0] - 90, qt_sl_menu_pos[1] - 8);
    slider_qt_sl_date_on.style('width', '200px');
    slider_qt_sl_date_off = createSlider(0, 100, 0);
    slider_qt_sl_date_off.position(qt_sl_menu_pos[0] - 90, qt_sl_menu_pos[1] - 8 + 20);
    slider_qt_sl_date_off.style('width', '200px');

    button_start_sim = createButton('Lancer la simulation');
    button_start_sim.position(title_menu_pos[0] - 150, height - 100);
    button_start_sim.size(300,40);
    button_start_sim.style('font-size', 18);
    button_start_sim.style('color', color(255, 0, 0));
    button_start_sim.style('background-color', color(255, 255, 0));
    button_start_sim.style('fontWeight', 900);
    button_start_sim.mousePressed(start_sim);
    
    checkbox_dev = createCheckbox("Mode développeur");
    checkbox_dev.style('color', color(255));
    checkbox_dev.position(title_menu_pos[0] - 150, height - 50);
}


function menu() {
    background(0);

    textAlign(CENTER);
    fill(255, 255, 0);
    stroke(255, 255, 0);
    textSize(60);
    text("PANDEMIC SIMULATOR", title_menu_pos[0], title_menu_pos[1]);

    textAlign(CENTER);
    fill(150);
    stroke(150);
    textSize(20);
    text("Par Skarn Kain", title_menu_pos[0], title_menu_pos[1] + 30);

    menu_capa_hop();
    menu_sd();
    menu_sd2();
    menu_resp_sd();
    menu_capa_qt();
    menu_qt_sf();
    menu_qt_sl();
}


function menu_capa_hop() {
    noFill();
    stroke(255);
    rect(capa_hop_menu_pos[0] - 250, capa_hop_menu_pos[1] - 70, 460, 110)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Capacité maximum d'hospitalisation", capa_hop_menu_pos[0] - 10, capa_hop_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Taille : ", capa_hop_menu_pos[0] - 100, capa_hop_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_capa_hop.value() + " pers.", capa_hop_menu_pos[0] + 110, capa_hop_menu_pos[1]);


    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Soit : ", capa_hop_menu_pos[0] - 100, capa_hop_menu_pos[1] + 20);

    textAlign(LEFT);
    fill(255);
    text((slider_capa_hop.value() / 10) + " % de la population", capa_hop_menu_pos[0] - 95, capa_hop_menu_pos[1] + 20);

    capa_hop = slider_capa_hop.value();
}


function menu_sd() {
    noFill();
    stroke(255);
    rect(sd_menu_pos[0] - 250, sd_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Distanciation sociale - Initiale", sd_menu_pos[0] - 10, sd_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Date de début : ", sd_menu_pos[0] - 100, sd_menu_pos[1]);
    text("Date de fin : ", sd_menu_pos[0] - 100, sd_menu_pos[1] + 20);
    text("Soit durée : ", sd_menu_pos[0] - 100, sd_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(": Jour " + slider_sd_date_on.value(), sd_menu_pos[0] + 110, sd_menu_pos[1]);
    text(": Jour " + slider_sd_date_off.value(), sd_menu_pos[0] + 110, sd_menu_pos[1] + 20);
    var sd_duree = slider_sd_date_off.value() - slider_sd_date_on.value();
    if (sd_duree < 0) {
        sd_duree = 0
    }
    text(sd_duree + " jours", sd_menu_pos[0] - 95, sd_menu_pos[1] + 40);

    sd_date_on = slider_sd_date_on.value();
    sd_date_off = slider_sd_date_off.value();
}

function menu_sd2() {
    noFill();
    stroke(255);
    rect(sd2_menu_pos[0] - 250, sd2_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Distanciation sociale - Secondaire", sd2_menu_pos[0] - 10, sd2_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Date de début : ", sd2_menu_pos[0] - 100, sd2_menu_pos[1]);
    text("Date de fin : ", sd2_menu_pos[0] - 100, sd2_menu_pos[1] + 20);
    text("Soit durée : ", sd2_menu_pos[0] - 100, sd2_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(": Jour " + slider_sd2_date_on.value(), sd2_menu_pos[0] + 110, sd2_menu_pos[1]);
    text(": Jour " + slider_sd2_date_off.value(), sd2_menu_pos[0] + 110, sd2_menu_pos[1] + 20);
    var sd2_duree = slider_sd2_date_off.value() - slider_sd2_date_on.value();
    if (sd2_duree < 0) {
        sd2_duree = 0
    }
    text(sd2_duree + " jours", sd2_menu_pos[0] - 95, sd2_menu_pos[1] + 40);

    sd2_date_on = slider_sd2_date_on.value();
    sd2_date_off = slider_sd2_date_off.value();
}


function menu_resp_sd() {
    noFill();
    stroke(255);
    rect(resp_sd_menu_pos[0] - 250, resp_sd_menu_pos[1] - 70, 460, 100)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Respect de la distanciation sociale", resp_sd_menu_pos[0] - 10, resp_sd_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("% de respect : ", resp_sd_menu_pos[0] - 100, resp_sd_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_resp_sd.value() + " %", resp_sd_menu_pos[0] + 110, resp_sd_menu_pos[1]);

    resp_sd = slider_resp_sd.value();
}


function menu_capa_qt() {
    noFill();
    stroke(255);
    rect(capa_qt_menu_pos[0] - 250, capa_qt_menu_pos[1] - 70, 460, 110)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Capacité maximum de quarantaine", capa_qt_menu_pos[0] - 10, capa_qt_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Taille : ", capa_qt_menu_pos[0] - 100, capa_qt_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_capa_qt.value() + " pers.", capa_qt_menu_pos[0] + 110, capa_qt_menu_pos[1]);


    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Soit : ", capa_qt_menu_pos[0] - 100, capa_qt_menu_pos[1] + 20);

    textAlign(LEFT);
    fill(255);
    text((slider_capa_qt.value() / 10) + " % de la population", capa_qt_menu_pos[0] - 95, capa_qt_menu_pos[1] + 20);

    capa_qt = slider_capa_qt.value();
}


function menu_qt_sf() {
    noFill();
    stroke(255);
    rect(qt_sf_menu_pos[0] - 250, qt_sf_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Quarantaine - Symptômes forts et extrêmes", qt_sf_menu_pos[0] - 10, qt_sf_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Date de début : ", qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1]);
    text("Date de fin : ", qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1] + 20);
    text("Soit durée : ", qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(": Jour " + slider_qt_sf_date_on.value(), qt_sf_menu_pos[0] + 110, qt_sf_menu_pos[1]);
    text(": Jour " + slider_qt_sf_date_off.value(), qt_sf_menu_pos[0] + 110, qt_sf_menu_pos[1] + 20);
    var qt_sf_duree = slider_qt_sf_date_off.value() - slider_qt_sf_date_on.value();
    if (qt_sf_duree < 0) {
        qt_sf_duree = 0
    }
    text(qt_sf_duree + " jours", qt_sf_menu_pos[0] - 95, qt_sf_menu_pos[1] + 40);

    qt_sf_date_on = slider_qt_sf_date_on.value();
    qt_sf_date_off = slider_qt_sf_date_off.value();
}


function menu_qt_sl() {
    noFill();
    stroke(255);
    rect(qt_sl_menu_pos[0] - 250, qt_sl_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text("Quarantaine - Symptômes légers", qt_sl_menu_pos[0] - 10, qt_sl_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text("Date de début : ", qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1]);
    text("Date de fin : ", qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1] + 20);
    text("Soit durée : ", qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(": Jour " + slider_qt_sl_date_on.value(), qt_sl_menu_pos[0] + 110, qt_sl_menu_pos[1]);
    text(": Jour " + slider_qt_sl_date_off.value(), qt_sl_menu_pos[0] + 110, qt_sl_menu_pos[1] + 20);
    var qt_sl_duree = slider_qt_sl_date_off.value() - slider_qt_sl_date_on.value();
    if (qt_sl_duree < 0) {
        qt_sl_duree = 0
    }
    text(qt_sl_duree + " jours", qt_sl_menu_pos[0] - 95, qt_sl_menu_pos[1] + 40);

    qt_sl_date_on = slider_qt_sl_date_on.value();
    qt_sl_date_off = slider_qt_sl_date_off.value();
}
