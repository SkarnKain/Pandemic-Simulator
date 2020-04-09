function start_sim() {

    slider_capa_hop.hide();
    slider_delai_immun.hide();
    slider_sd_date_on.hide();
    slider_sd_date_off.hide();
    slider_sd2_date_on.hide();
    slider_sd2_date_off.hide();
    slider_resp_sd.hide();
    slider_capa_qt.hide();
    slider_qt_sf_date_on.hide();
    slider_qt_sf_date_off.hide();
    slider_qt_sl_date_on.hide();
    slider_qt_sl_date_off.hide();
    button_start_sim.hide();
    checkbox_dev.hide();

    frame_deb_sim = frameCount + 1;
    simulation_on = true;

    colors = new Colors();
    graph = new Graph(nb_agents, capa_hop, 50);
    virus = new Virus();

    var ville_dim = [0, 0, 900, 900]; // X début - Y début - X taille - Y taille
    var hopital_dim = [925, 400, 300, 150];
    var quarantaine_dim = [925, 570, 300, 250];
    ville = new Boite("Ville", ville_dim[0], ville_dim[1], ville_dim[2], ville_dim[3], 20, nb_agents, nb_agents);
    hopital = new Boite("Hopital", hopital_dim[0], hopital_dim[1], hopital_dim[2], hopital_dim[3], 10, capa_hop, 0);
    quarantaine = new Boite("Quarantaine", quarantaine_dim[0], quarantaine_dim[1], quarantaine_dim[2], quarantaine_dim[3], 10, capa_qt, 0);

    // Création des zones pour la ville    
    var nb_z_vil = 8;
    var z_vi_os = max([social_distance, virus.A_D_T, virus.SL_D_T, virus.SF_D_T, virus.SE_D_T]);
    var x_s = ((ville.x2 - ville.x1) / nb_z_vil) + z_vi_os;
    var y_s = ((ville.y2 - ville.y1) / nb_z_vil) + z_vi_os;
    for (var i = 0; i < nb_z_vil; i++) {
        for (var j = 0; j < nb_z_vil; j++) {
            var x1_z = ville.x1 + (x_s - ((1 + 1 / nb_z_vil) * z_vi_os)) * i;
            var y1_z = ville.y1 + (y_s - ((1 + 1 / nb_z_vil) * z_vi_os)) * j;
            var x2_z = x1_z + x_s;
            var y2_z = y1_z + y_s;
            zones[j + (i * nb_z_vil)] = new Zone(x1_z, y1_z, x2_z, y2_z);
        }
    }
    // Création de la zone hopital
    zones[(nb_z_vil * nb_z_vil)] = new Zone(hopital.x1, hopital.y1, hopital.x2, hopital.y2);
    // Création de la zone quarantaine
    zones[((nb_z_vil * nb_z_vil) + 1)] = new Zone(quarantaine.x1, quarantaine.y1, quarantaine.x2, quarantaine.y2);

    var x = random(ville.x1, ville.x2);
    var y = random(ville.y1, ville.y2);
    agents[0] = new Agent(x, y, "I", [1, 0, false]);

    for (var i = 1; i < ville.capa; i++) {
        var x = random(ville.x1, ville.x2);
        var y = random(ville.y1, ville.y2);
        agents[i] = new Agent(x, y, "S");
    }

    checkbox_visu_depl = createCheckbox("Visualisation des déplacements - A désactiver pour accelérer la vitesse", true);
    if (checkbox_dev.checked()) {
        checkbox_visu_status = createCheckbox("Visualisation - Status");
        checkbox_sd = createCheckbox("Forcer la distanciation sociale");
        checkbox_qt_sf = createCheckbox("Forcer la quarantaine pour les personnes présentant des symptômes forts ou extrêmes");
        checkbox_qt_sl = createCheckbox("Forcer la quarantaine pour les personnes présentant des symptômes légers");
    }

    radio_graph_visu = createRadio();
    radio_graph_visu.option('Visuation linéaire ----', 0);
    radio_graph_visu.option(' Visuation logarithmique', 1);
    radio_graph_visu.value('0');
    radio_graph_visu.position(width - 460, 525);
    radio_graph_visu.style('color', color(255));
}

function simulation() {

    var count_santé = [0, 0, 0, 0]; // Sain = "S" - Infecté = "I" - Mort = "M" / Remis = "R"
    var count_symptome = [0, 0, 0, 0]; // Asyptomatique = "A" - Symptomes légers = "SL" - Symptomes forts = "SF" - Symptomes extrême = "SE"
    var count_status_depl = [0, 0, 0]; // Libre = "L" - Hospitalisé = "H" - Quarantaine = "Q"
    var count_conta = 0;

    if (frame_cur_sim % frames_jour == 0) {
        jour += 1;
    }

    if (checkbox_dev.checked()) {
        if ((checkbox_sd.checked()) | ((jour >= sd_date_on) & (jour < sd_date_off)) | ((jour >= sd2_date_on) & (jour < sd2_date_off))) {
            sd_value = true;
        } else {
            sd_value = false;
        }

        if ((checkbox_qt_sf.checked()) | ((jour >= qt_sf_date_on) & (jour < qt_sf_date_off))) {
            qt_sf_value = true;
        } else {
            qt_sf_value = false;
        }

        if ((checkbox_qt_sl.checked()) | ((jour >= qt_sl_date_on) & (jour < qt_sl_date_off))) {
            qt_sl_value = true;
        } else {
            qt_sl_value = false;
        }
    } else {
        if (((jour >= sd_date_on) & (jour < sd_date_off)) | ((jour >= sd2_date_on) & (jour < sd2_date_off))) {
            sd_value = true;
        } else {
            sd_value = false;
        }

        if (((jour >= qt_sf_date_on) & (jour < qt_sf_date_off))) {
            qt_sf_value = true;
        } else {
            qt_sf_value = false;
        }

        if (((jour >= qt_sl_date_on) & (jour < qt_sl_date_off))) {
            qt_sl_value = true;
        } else {
            qt_sl_value = false;
        }
    }

    background(0);
    ville.display();
    hopital.display();
    quarantaine.display();


    for (var i = zones.length - 1; i >= 0; i--) {
        zones[i].list_ag = [];
        zones[i].num_list_ag = [];
        if (checkbox_dev.checked()) {
            zones[i].display();
        }
        zones[i].listing_agents();
        zones[i].sd_zone(social_distance);
        zones[i].trans_zone();
    }


    for (var i = agents.length - 1; i >= 0; i--) {
        //if (sd_value == true) {
        //    agents[i].social_distancing(social_distance);
        //}
        agents[i].evol_maladie();
        //agents[i].transmission();
        agents[i].ho_qt(i);
        agents[i].behaviour();
        agents[i].boundaries();
        agents[i].update();
        if (checkbox_visu_depl.checked()) {
            agents[i].display_depl();
        }

        if (checkbox_dev.checked()) {
            if (checkbox_visu_status.checked()) {
                agents[i].display_status(i);
            }
        }

        switch (agents[i].santé) {
            case "S":
                count_santé[0] += 1;
                break;
            case "I":
                count_santé[1] += 1;
                break;
            case "M":
                count_santé[2] += 1;
                count_conta += agents[i].nb_conta;
                break;
            case "R":
                count_santé[3] += 1;
                count_conta += agents[i].nb_conta;
                break;
        }
        switch (agents[i].symptome) {
            case "A":
                count_symptome[0] += 1;
                break;
            case "SL":
                count_symptome[1] += 1;
                break;
            case "SF":
                count_symptome[2] += 1;
                break;
            case "SE":
                count_symptome[3] += 1;
                break;
        }
        switch (agents[i].status_depl) {
            case "L":
                count_status_depl[0] += 1;
                break;
            case "H":
                count_status_depl[1] += 1;
                break;
            case "Q":
                count_status_depl[2] += 1;
                break;
        }
    }

    var Rzero = count_conta / (count_santé[2] + count_santé[3]);


    if (frame_cur_sim % frames_jour == 0) {
        graph.pts[jour] = new Pt_graph(count_santé[0], count_santé[1], count_santé[2], count_santé[3], count_symptome[0], count_symptome[1], count_symptome[2], count_symptome[3], count_status_depl[1]);
    }
    graph.display();


    var decal_txt = 40;
    
    strokeWeight(1);
    
    textSize(20);
    fill(255);
    stroke(255);
    textAlign(LEFT);
    text('Jour', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(jour, ville.x2 + 300 - 20, decal_txt);

    decal_txt += 70;
    textSize(20);
    fill(colors.S);
    stroke(colors.S);
    textAlign(LEFT);
    text('Sains - Non-immunisés :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_santé[0], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 50;
    textSize(20);
    fill(colors.I);
    stroke(colors.I);
    textAlign(LEFT);
    text('Total infectés :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_santé[1], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 25;
    textSize(15);
    fill(colors.A);
    stroke(colors.A);
    textAlign(LEFT);
    text('Assymptomatique :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_symptome[0], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 25;
    textSize(15);
    fill(colors.SL);
    stroke(colors.SL);
    textAlign(LEFT);
    text('Symptômes légers :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_symptome[1], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 25;
    textSize(15);
    fill(colors.SF);
    stroke(colors.SF);
    textAlign(LEFT);
    text('Symptômes forts :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_symptome[2], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 25;
    textSize(15);
    fill(colors.SE);
    stroke(colors.SE);
    textAlign(LEFT);
    text('Symptômes extrêmes :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_symptome[3], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 40;
    textSize(20);
    fill(colors.M);
    stroke(colors.M);
    textAlign(LEFT);
    text('Morts :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_santé[2], ville.x2 + 300 - 20, decal_txt);

    decal_txt += 50;
    textSize(20);
    fill(colors.R);
    stroke(colors.R);
    textAlign(LEFT);
    text('Remis - Immunisée :', ville.x2 + 20, decal_txt);
    textAlign(RIGHT);
    text(count_santé[3], ville.x2 + 300 - 20, decal_txt);

    textSize(20);
    fill(colors.I);
    stroke(colors.I);
    textAlign(LEFT);
    text('R0 :', ville.x2 + 20, ville.y2 - 20);
    textAlign(RIGHT);
    text(round(Rzero * 100) / 100, ville.x2 + 300 - 20, ville.y2 - 20);

}
