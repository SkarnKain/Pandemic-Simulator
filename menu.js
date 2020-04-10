function menu_init() {

    radio_lang = createRadio();
    radio_lang.option('Français ', 0);
    radio_lang.option('English', 1);
    radio_lang.value('1');
    radio_lang.position(title_menu_pos[0] - 70, title_menu_pos[1] + 70);
    radio_lang.style('color', color(255));

    slider_capa_hop = createSlider(0, 500, 15);
    slider_capa_hop.position(capa_hop_menu_pos[0] - 90, capa_hop_menu_pos[1] - 8);
    slider_capa_hop.style('width', '200px');

    slider_delai_immun = createSlider(0, 100, 50);
    slider_delai_immun.position(delai_immun_menu_pos[0] - 90, delai_immun_menu_pos[1] - 8);
    slider_delai_immun.style('width', '200px');

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
    button_start_sim.size(300, 40);
    button_start_sim.style('font-size', 18);
    button_start_sim.style('color', color(255, 0, 0));
    button_start_sim.style('background-color', color(255, 255, 0));
    button_start_sim.style('fontWeight', 900);
    button_start_sim.mousePressed(start_sim);

    checkbox_dev = createCheckbox("Developer mode");
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

    if (radio_lang.value() == 0) {
        text("Par Skarn Kain", title_menu_pos[0], title_menu_pos[1] + 30);
        button_start_sim.html("Lancer la simulation");

    } else if (radio_lang.value() == 1) {
        text("By Skarn Kain", title_menu_pos[0], title_menu_pos[1] + 30);
        button_start_sim.html("Launch simulation");
    }

    menu_capa_hop();
    menu_delai_immun();
    menu_sd();
    menu_sd2();
    menu_resp_sd();
    menu_capa_qt();
    menu_qt_sf();
    menu_qt_sl();
}

function menu_capa_hop() {

    if (radio_lang.value() == 0) {
        var menu_capa_hop_txt = ["Capacité maximum d'hospitalisation", "Taille : ", " pers.", "Soit : ", " % de la population"];
    } else if (radio_lang.value() == 1) {
        var menu_capa_hop_txt = ["Maximum hospitalization capacity", "Size : ", " pers.", "Either : ", " % of the population"];
    }

    noFill();
    stroke(255);
    rect(capa_hop_menu_pos[0] - 250, capa_hop_menu_pos[1] - 70, 460, 110)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_capa_hop_txt[0], capa_hop_menu_pos[0] - 10, capa_hop_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_capa_hop_txt[1], capa_hop_menu_pos[0] - 100, capa_hop_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_capa_hop.value() + menu_capa_hop_txt[2], capa_hop_menu_pos[0] + 110, capa_hop_menu_pos[1]);


    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_capa_hop_txt[3], capa_hop_menu_pos[0] - 100, capa_hop_menu_pos[1] + 20);

    textAlign(LEFT);
    fill(255);
    text((slider_capa_hop.value() / 10) + menu_capa_hop_txt[4], capa_hop_menu_pos[0] - 95, capa_hop_menu_pos[1] + 20);

    capa_hop = slider_capa_hop.value();
}

function menu_delai_immun() {

    if (radio_lang.value() == 0) {
        var menu_delai_immun_txt = ["Conservation de l'immunité après rémission", "Taille : ", " jours"];
    } else if (radio_lang.value() == 1) {
        var menu_delai_immun_txt = ["Retention of immunity after remission", "Size : ", " days"];
    }

    noFill();
    stroke(255);
    rect(delai_immun_menu_pos[0] - 250, delai_immun_menu_pos[1] - 70, 460, 110)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_delai_immun_txt[0], delai_immun_menu_pos[0] - 10, delai_immun_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_delai_immun_txt[1], delai_immun_menu_pos[0] - 100, delai_immun_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_delai_immun.value() + menu_delai_immun_txt[2], delai_immun_menu_pos[0] + 110, delai_immun_menu_pos[1]);

    delai_immun = slider_delai_immun.value();
}

function menu_sd() {

    if (radio_lang.value() == 0) {
        var menu_sd_txt = ["Distanciation sociale - Période initiale", "Date de début : ", "Date de fin : ", "Soit durée : ", ": Jour ", " jours"];
    } else if (radio_lang.value() == 1) {
        var menu_sd_txt = ["Social distancing - Initial period", "Start date : ", "End date : ", "Either duration : ", ": Day ", " days"];
    }

    noFill();
    stroke(255);
    rect(sd_menu_pos[0] - 250, sd_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_sd_txt[0], sd_menu_pos[0] - 10, sd_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_sd_txt[1], sd_menu_pos[0] - 100, sd_menu_pos[1]);
    text(menu_sd_txt[2], sd_menu_pos[0] - 100, sd_menu_pos[1] + 20);
    text(menu_sd_txt[3], sd_menu_pos[0] - 100, sd_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(menu_sd_txt[4] + slider_sd_date_on.value(), sd_menu_pos[0] + 110, sd_menu_pos[1]);
    text(menu_sd_txt[4] + slider_sd_date_off.value(), sd_menu_pos[0] + 110, sd_menu_pos[1] + 20);
    var sd_duree = slider_sd_date_off.value() - slider_sd_date_on.value();
    if (sd_duree < 0) {
        sd_duree = 0
    }
    text(sd_duree + menu_sd_txt[5], sd_menu_pos[0] - 95, sd_menu_pos[1] + 40);

    sd_date_on = slider_sd_date_on.value();
    sd_date_off = slider_sd_date_off.value();
}

function menu_sd2() {

    if (radio_lang.value() == 0) {
        var menu_sd2_txt = ["Distanciation sociale - Période initiale", "Date de début : ", "Date de fin : ", "Soit durée : ", ": Jour ", " jours"];
    } else if (radio_lang.value() == 1) {
        var menu_sd2_txt = ["Social distancing - Second period", "Start date : ", "End date : ", "Either duration : ", ": Day ", " days"];
    }

    noFill();
    stroke(255);
    rect(sd2_menu_pos[0] - 250, sd2_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_sd2_txt[0], sd2_menu_pos[0] - 10, sd2_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_sd2_txt[1], sd2_menu_pos[0] - 100, sd2_menu_pos[1]);
    text(menu_sd2_txt[2], sd2_menu_pos[0] - 100, sd2_menu_pos[1] + 20);
    text(menu_sd2_txt[3], sd2_menu_pos[0] - 100, sd2_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(menu_sd2_txt[4] + slider_sd2_date_on.value(), sd2_menu_pos[0] + 110, sd2_menu_pos[1]);
    text(menu_sd2_txt[4] + slider_sd2_date_off.value(), sd2_menu_pos[0] + 110, sd2_menu_pos[1] + 20);
    var sd2_duree = slider_sd2_date_off.value() - slider_sd2_date_on.value();
    if (sd2_duree < 0) {
        sd2_duree = 0
    }
    text(sd2_duree + menu_sd2_txt[5], sd2_menu_pos[0] - 95, sd2_menu_pos[1] + 40);

    sd2_date_on = slider_sd2_date_on.value();
    sd2_date_off = slider_sd2_date_off.value();
}


function menu_resp_sd() {

    if (radio_lang.value() == 0) {
        var menu_resp_sd_txt = ["Respect de la distanciation sociale", "% de respect : "];
    } else if (radio_lang.value() == 1) {
        var menu_resp_sd_txt = ["Respect of social distancing", "% of respect : "];
    }

    noFill();
    stroke(255);
    rect(resp_sd_menu_pos[0] - 250, resp_sd_menu_pos[1] - 70, 460, 100)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_resp_sd_txt[0], resp_sd_menu_pos[0] - 10, resp_sd_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_resp_sd_txt[1], resp_sd_menu_pos[0] - 100, resp_sd_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_resp_sd.value() + " %", resp_sd_menu_pos[0] + 110, resp_sd_menu_pos[1]);

    resp_sd = slider_resp_sd.value();
}


function menu_capa_qt() {

    if (radio_lang.value() == 0) {
        var menu_capa_qt_txt = ["Capacité maximum de quarantaine", "Taille : ", " pers.", "Soit : ", " % de la population"];
    } else if (radio_lang.value() == 1) {
        var menu_capa_qt_txt = ["Maximum quarantine capacity", "Size : ", " pers.", "Either : ", " % of the population"];
    }

    noFill();
    stroke(255);
    rect(capa_qt_menu_pos[0] - 250, capa_qt_menu_pos[1] - 70, 460, 110)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_capa_qt_txt[0], capa_qt_menu_pos[0] - 10, capa_qt_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_capa_qt_txt[1], capa_qt_menu_pos[0] - 100, capa_qt_menu_pos[1]);
    textAlign(LEFT);
    fill(255);
    text(slider_capa_qt.value() + menu_capa_qt_txt[2], capa_qt_menu_pos[0] + 110, capa_qt_menu_pos[1]);


    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_capa_qt_txt[3], capa_qt_menu_pos[0] - 100, capa_qt_menu_pos[1] + 20);

    textAlign(LEFT);
    fill(255);
    text((slider_capa_qt.value() / 10) + menu_capa_qt_txt[4], capa_qt_menu_pos[0] - 95, capa_qt_menu_pos[1] + 20);

    capa_qt = slider_capa_qt.value();
}


function menu_qt_sf() {

    if (radio_lang.value() == 0) {
        var menu_qt_sf_txt = ["Quarantaine - Symptômes forts et extrêmes", "Date de début : ", "Date de fin : ", "Soit durée : ", ": Jour ", " jours"];
    } else if (radio_lang.value() == 1) {
        var menu_qt_sf_txt = ["Quarantine - Strong and Extreme Symptoms", "Start date : ", "End date : ", "Either duration : ", ": Day ", " days"];
    }

    noFill();
    stroke(255);
    rect(qt_sf_menu_pos[0] - 250, qt_sf_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_qt_sf_txt[0], qt_sf_menu_pos[0] - 10, qt_sf_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_qt_sf_txt[1], qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1]);
    text(menu_qt_sf_txt[2], qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1] + 20);
    text(menu_qt_sf_txt[3], qt_sf_menu_pos[0] - 100, qt_sf_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(menu_qt_sf_txt[4] + slider_qt_sf_date_on.value(), qt_sf_menu_pos[0] + 110, qt_sf_menu_pos[1]);
    text(menu_qt_sf_txt[4] + slider_qt_sf_date_off.value(), qt_sf_menu_pos[0] + 110, qt_sf_menu_pos[1] + 20);
    var qt_sf_duree = slider_qt_sf_date_off.value() - slider_qt_sf_date_on.value();
    if (qt_sf_duree < 0) {
        qt_sf_duree = 0
    }
    text(qt_sf_duree + menu_qt_sf_txt[5], qt_sf_menu_pos[0] - 95, qt_sf_menu_pos[1] + 40);

    qt_sf_date_on = slider_qt_sf_date_on.value();
    qt_sf_date_off = slider_qt_sf_date_off.value();
}


function menu_qt_sl() {

    if (radio_lang.value() == 0) {
        var menu_qt_sl_txt = ["Quarantaine - Symptômes légers", "Date de début : ", "Date de fin : ", "Soit durée : ", ": Jour ", " jours"];
    } else if (radio_lang.value() == 1) {
        var menu_qt_sl_txt = ["Quarantine - Mild Symptoms", "Start date : ", "End date : ", "Either duration : ", ": Day ", " days"];
    }

    noFill();
    stroke(255);
    rect(qt_sl_menu_pos[0] - 250, qt_sl_menu_pos[1] - 70, 460, 130)

    textAlign(CENTER);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    textSize(20);
    text(menu_qt_sl_txt[0], qt_sl_menu_pos[0] - 10, qt_sl_menu_pos[1] - 35);

    fill(150);
    noStroke();
    textSize(15);
    textAlign(RIGHT);
    text(menu_qt_sl_txt[1], qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1]);
    text(menu_qt_sl_txt[2], qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1] + 20);
    text(menu_qt_sl_txt[3], qt_sl_menu_pos[0] - 100, qt_sl_menu_pos[1] + 40);
    textAlign(LEFT);
    fill(255);
    text(menu_qt_sl_txt[4] + slider_qt_sl_date_on.value(), qt_sl_menu_pos[0] + 110, qt_sl_menu_pos[1]);
    text(menu_qt_sl_txt[4] + slider_qt_sl_date_off.value(), qt_sl_menu_pos[0] + 110, qt_sl_menu_pos[1] + 20);
    var qt_sl_duree = slider_qt_sl_date_off.value() - slider_qt_sl_date_on.value();
    if (qt_sl_duree < 0) {
        qt_sl_duree = 0
    }
    text(qt_sl_duree + menu_qt_sl_txt[5], qt_sl_menu_pos[0] - 95, qt_sl_menu_pos[1] + 40);

    qt_sl_date_on = slider_qt_sl_date_on.value();
    qt_sl_date_off = slider_qt_sl_date_off.value();
}
