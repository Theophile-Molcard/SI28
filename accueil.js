const nb_sections = 3;
const vitesse = 30;

var defileur;
var i;

function defilement(signe) {
    i = 0;

    defileur = setInterval(function () {
        if (i < 1)
            i += 0.1;
        window.scrollBy(signe * vitesse * i, 0);
        out_borders();

    }, 50); 
}

function out_borders() {
    
    console.log(window.innerWidth)
    
    document.getElementById("selecteur").style.left = (6 + 31.4*window.scrollX / window.innerWidth)+"vw";
}

function stop() {
    clearInterval(defileur);
}


var section_id = null;
var section_id_image = null;

var dir_scroll;
var grossir = 1;
var grossir_images;

function zoomer(event) {
    
    if (section_id != null) {
        section_id_image = section_id+"_img";
    }
    
    dir_scroll = event.deltaY/Math.abs(event.deltaY)/100
    
    if (grossir > (100/60)) {
        if (dir_scroll < 0)
            grossir += dir_scroll;
    }
    else if (grossir < 1 ) {
        if (dir_scroll > 0)
            grossir += dir_scroll;
    }
    else
        grossir += dir_scroll;
        
    
    document.getElementById(section_id).style.transform = "scale("+grossir+")";
    document.getElementById(section_id).style.opacity = (((100/60)-grossir) / 60) * 100;
    
    grossir_images = grossir/1.5;
    document.getElementById(section_id_image).style.transform = "scale("+grossir_images+")";
    document.getElementById(section_id_image).style.opacity = ((grossir-1) / 60) * 100;
    
    if(grossir >= (100/60)) {
        document.getElementById(section_id).style.zIndex = 3;
        document.getElementById(section_id_image).style.zIndex = 4;
    }
    else {
        document.getElementById(section_id).style.zIndex = 4;
        document.getElementById(section_id_image).style.zIndex = 3;
    }
}

function zoom_total(event) {
    grossir = (100/60);
    grossir_images = grossir/1.5;
    document.getElementById(section_id).style.transform = "scale("+grossir+")";
    document.getElementById(section_id).style.opacity = 0;
    document.getElementById(section_id_image).style.transform = "scale("+grossir_images+")";
    document.getElementById(section_id_image).style.opacity = 1;
}


function zoom0(active) {
    
    if (active == 1) {
        
        grossir = 1;
        grossir_images = grossir/1.5;
    
        if (section_id != null) {
            document.getElementById(section_id).style.zIndex = 4;
            document.getElementById(section_id).style.transform = "scale(1)";
            document.getElementById(section_id).style.opacity = 1;
        }


        if (section_id_image != null) {
            document.getElementById(section_id_image).style.zIndex = 3;
            document.getElementById(section_id_image).style.transform = "scale("+grossir_images+")";
            document.getElementById(section_id_image).style.opacity = 0;
        }
    }
    else 
        console.log("nope");
}



/*
function zoomer_maj() {
    
    section_id_image = section_id+"_img";
    console.log("yo");
    document.getElementById(section_id).style.transform = "scale("+grossir+")";
    document.getElementById(section_id).style.opacity = (((100/60)-grossir) / 60) * 100;;
    
    if (section_id_image != null) {
        grossir_images = grossir/1.5;
        document.getElementById(section_id_image).style.transform = "scale("+grossir_images+")";
        document.getElementById(section_id_image).style.opacity = ((grossir-1) / 60) * 100;
    }
}


/*



/*
var num_sect;
var sections = document.getElementsByClassName("section");

function sect_num(num)
{
    num_sect = num;
}

for(i=0 ; i<nb_sections ; i++)
    sections[2].onwheel = zommer;

function zommer(event) {
}

function putain(event)
{
    console.log("bordel");
}

        /*document.getElementById("bord_droit").onclick = click;
        document.getElementById("bord_gauche").onclick = click; */