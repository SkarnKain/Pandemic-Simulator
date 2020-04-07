function Zone(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.list_ag = [];
    this.num_list_ag = [];

    this.display = function () {
        noFill();
        stroke(255, 0, 212, 50);
        strokeWeight(1);
        rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }

    this.listing_agents = function () {
        for (var i = agents.length - 1; i >= 0; i--) {
            if ((agents[i].position.x >= this.x1) & (agents[i].position.x <= this.x2) & (agents[i].position.y >= this.y1) & (agents[i].position.y <= this.y2)) {
                this.list_ag.push(agents[i])
                this.num_list_ag.push(i);
            }
        }
    }

    this.trans_zone = function () {
        for (var i = this.list_ag.length - 1; i >= 0; i--) {
            if (this.list_ag[i].santé == "I") {
                for (var j = this.list_ag.length - 1; j >= 0; j--) {
                    var distance = this.list_ag[i].position.dist(this.list_ag[j].position)
                    if ((distance < this.list_ag[i].virus_distance) & (this.list_ag[j].santé == "S") & (random(0, 100) < this.list_ag[i].virus_transmission)) {
                        agents[this.num_list_ag[j]].santé = "I"
                        agents[this.num_list_ag[i]].nb_conta += 1;
                    }
                }
            }

        }
    }

    this.sd_zone = function (social_distance) {
        if (sd_value == true) {
            for (var i = this.list_ag.length - 1; i >= 0; i--) {
                if (this.list_ag[i].dna[2]) {
                    var desired = null;
                    for (var j = this.list_ag.length - 1; j >= 0; j--) {
                        var distance = this.list_ag[i].position.dist(this.list_ag[j].position)
                        if ((distance < social_distance) & (distance != 0)) {
                            desired = p5.Vector.sub(this.list_ag[i].position, this.list_ag[j].position)
                            desired.normalize();
                            desired.mult(this.list_ag[i].maxspeed);
                            var steer = p5.Vector.sub(desired, this.list_ag[i].velocity);
                            agents[this.num_list_ag[i]].applyForce(steer);
                        }
                    }
                }
            }
        }
    }
}
