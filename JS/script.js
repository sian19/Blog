
let open1 = false;
let open2 = false;
let open3 = false;

function minimenu1(){
    let minibox2 = document.getElementsByClassName("minibox")[1];
    let minibox3 = document.getElementsByClassName("minibox")[2];
    let minibox1 = document.getElementsByClassName("minibox")[0];
    let p1 = document.getElementById("pm1");
    let p2 = document.getElementById("pm2");
    let p3 = document.getElementById("pm3");
    let imgSeta1 = document.getElementsByTagName("img")[0];
    let imgSeta2 = document.getElementsByTagName("img")[1];
    let imgSeta3 = document.getElementsByTagName("img")[2];

    if(open1 == false){
        minibox2.style.display = "none";
        minibox3.style.display = "none";
        minibox1.style.display = "block";
        imgSeta2.style.transform = "rotateX(0)";
        imgSeta3.style.transform = "rotateX(0)";
        imgSeta1.style.transform = "rotateX(180deg)";
        p2.style.textDecoration = "none";
        p3.style.textDecoration = "none";
        p1.style.textDecoration = "underline";

        open1 = true;
        open2 = false;
        open3 = false;
    }  
    
    else{
        minibox1.style.display = "none";
        imgSeta1.style.transform = "rotateX(0)";
        p1.style.textDecoration = "none";

        open1 = false;
    }
}

function minimenu2(){
    let minibox2 = document.getElementsByClassName("minibox")[1];
    let minibox3 = document.getElementsByClassName("minibox")[2];
    let minibox1 = document.getElementsByClassName("minibox")[0];
    let p1 = document.getElementById("pm1");
    let p2 = document.getElementById("pm2");
    let p3 = document.getElementById("pm3");
    let imgSeta1 = document.getElementsByTagName("img")[0];
    let imgSeta2 = document.getElementsByTagName("img")[1];
    let imgSeta3 = document.getElementsByTagName("img")[2];

    if(open2 == false){
        minibox1.style.display = "none";
        minibox3.style.display = "none";
        minibox2.style.display = "block";
        imgSeta1.style.transform = "rotateX(0)";
        imgSeta3.style.transform = "rotateX(0)";
        imgSeta2.style.transform = "rotateX(180deg)";
        p1.style.textDecoration = "none";
        p3.style.textDecoration = "none";
        p2.style.textDecoration = "underline";


        open2 = true;
        open1 = false;
        open3 = false;
    }

    else{
        minibox2.style.display = "none";
        imgSeta2.style.transform = "rotateX(0)";
        p2.style.textDecoration = "none";

        open2 = false;
    }
}

function minimenu3(){
    let minibox2 = document.getElementsByClassName("minibox")[1];
    let minibox3 = document.getElementsByClassName("minibox")[2];
    let minibox1 = document.getElementsByClassName("minibox")[0];
    let p1 = document.getElementById("pm1");
    let p2 = document.getElementById("pm2");
    let p3 = document.getElementById("pm3");
    let imgSeta1 = document.getElementsByTagName("img")[0];
    let imgSeta2 = document.getElementsByTagName("img")[1];
    let imgSeta3 = document.getElementsByTagName("img")[2];

    if(open3 == false){
        minibox1.style.display = "none";
        minibox2.style.display = "none";
        minibox3.style.display = "block";
        imgSeta1.style.transform = "rotateX(0)";
        imgSeta2.style.transform = "rotateX(0)";
        imgSeta3.style.transform = "rotateX(180deg)";
        p1.style.textDecoration = "none";
        p2.style.textDecoration = "none";
        p3.style.textDecoration = "underline";


        open3 = true;
        open1 = false;
        open2 = false;
    }

    else{
        minibox3.style.display = "none";
        imgSeta3.style.transform = "rotateX(0)";
        p3.style.textDecoration = "none";

        open3 = false;
    }
}

// Abaixo os códigos do menu mobile //
var openMenu = false;

function menu(){
    const menuOb = {
        span: [ document.getElementsByTagName("span")[0], 
        document.getElementsByTagName("span")[1], 
        document.getElementsByTagName("span")[2]],

        box: document.getElementsByClassName("sub-menu-mobile")[0],

        text: document.getElementsByClassName("text-header")[0]
    }

    let loginSign = document.getElementsByClassName("login-sign")[0];

    if(openMenu == false){
        menuOb.span[0].style.transform = "rotate(-45deg)";
        menuOb.span[2].style.transform = "rotate(45deg)";
        menuOb.span[1].style.opacity = "0";

        menuOb.span[0].style.top = "8px";
        menuOb.span[2].style.top = "8px";

        menuOb.text.style.display = "none";

        menuOb.box.style.display = "block";

        loginSign.style.display = "none";

        openMenu = true;
    }

   
    else{
        menuOb.span[0].style.transform = "rotate(0)";
        menuOb.span[2].style.transform = "rotate(0)";
        menuOb.span[1].style.opacity = "1";

        menuOb.span[0].style.top = "0";
        menuOb.span[2].style.top = "16px";

        menuOb.text.style.display = "block";

        menuOb.box.style = "none";

        

        openMenu = false;

    }

    
}

var openMini1 = false;
var openMini2 = false;
var openMini3 = false;

function menuMobile1(){
    const mobileOb = {
        minibox: [document.getElementsByClassName("minibox-mobile")[0],
        document.getElementsByClassName("minibox-mobile")[1],
        document.getElementsByClassName("minibox-mobile")[2]],

        seta: [document.getElementsByTagName("img")[3],
        document.getElementsByTagName("img")[4],
        document.getElementsByTagName("img")[5]],

        p: [document.getElementById("p1"),
        document.getElementById("p2"),
        document.getElementById("p3")]
    }


    if(openMini1 == false){
        mobileOb.minibox[1].style.display = "none";
        mobileOb.minibox[2].style.display = "none";
        mobileOb.minibox[0].style.display = "block";

        mobileOb.seta[1].style.transform = "rotateX(0)";
        mobileOb.seta[2].style.transform = "rotateX(0)";
        mobileOb.seta[0].style.transform = "rotateX(180deg)";

        mobileOb.p[1].style.color = "rgb(31, 63, 91)";
        mobileOb.p[2].style.color = "rgb(31, 63, 91)";
        mobileOb.p[0].style.color = "rgba(31, 63, 91, 0.7)";

        openMini1 = true;
        openMini3 = false;
        openMini2 = false;
    }

    else{
        mobileOb.minibox[0].style.display = "none";
        mobileOb.seta[0].style.transform = "rotateX(0)";
        mobileOb.p[0].style.color = "rgb(31, 63, 91)";

        openMini1 = false;
    }

}

function menuMobile2(){
    const mobileOb = {
        minibox: [document.getElementsByClassName("minibox-mobile")[0],
        document.getElementsByClassName("minibox-mobile")[1],
        document.getElementsByClassName("minibox-mobile")[2]],

        seta: [document.getElementsByTagName("img")[3],
        document.getElementsByTagName("img")[4],
        document.getElementsByTagName("img")[5]],

        p: [document.getElementById("p1"),
        document.getElementById("p2"),
        document.getElementById("p3")]
    }

    

    if(openMini2 == false){
        mobileOb.minibox[0].style.display = "none";
        mobileOb.minibox[2].style.display = "none";
        mobileOb.minibox[1].style.display = "block";

        mobileOb.seta[0].style.transform = "rotate(0)";
        mobileOb.seta[2].style.transform = "rotate(0)";
        mobileOb.seta[1].style.transform = "rotate(180deg)";

        mobileOb.p[0].style.color = "rgb(31, 63, 91)";
        mobileOb.p[2].style.color = "rgb(31, 63, 91)";
        mobileOb.p[1].style.color = "rgba(31, 63, 91, 0.7)";

        openMini1 = false;
        openMini3 = false;
        openMini2 = true;
    }

    else{
        mobileOb.seta[1].style.transform = "rotate(0)";
        mobileOb.minibox[1].style.display = "none";
        mobileOb.p[1].style.color = "rgb(31, 63, 91)";

        openMini2 = false;
    }

}

function menuMobile3(){
    const mobileOb = {
        minibox: [document.getElementsByClassName("minibox-mobile")[0],
        document.getElementsByClassName("minibox-mobile")[1],
        document.getElementsByClassName("minibox-mobile")[2]],

        seta: [document.getElementsByTagName("img")[3],
        document.getElementsByTagName("img")[4],
        document.getElementsByTagName("img")[5]],

        p: [document.getElementById("p1"),
        document.getElementById("p2"),
        document.getElementById("p3")]
    }


    if(openMini3 == false){
        mobileOb.minibox[0].style.display = "none";
        mobileOb.minibox[1].style.display = "none";
        mobileOb.minibox[2].style.display = "block";

        mobileOb.seta[0].style.transform = "rotate(0)";
        mobileOb.seta[1].style.transform = "rotate(0)";
        mobileOb.seta[2].style.transform = "rotate(180deg)";

        mobileOb.p[0].style.color = "rgb(31, 63, 91)";
        mobileOb.p[1].style.color = "rgb(31, 63, 91)";
        mobileOb.p[2].style.color = "rgba(31, 63, 91, 0.7)";

        openMini1 = false;
        openMini2 = false;
        openMini3 = true;
    }

    else{
        mobileOb.minibox[2].style.display = "none";
        mobileOb.seta[2].style.transform = "rotate(0)";
        mobileOb.p[2].style.color = "rgb(31, 63, 91)";

        openMini3 = false;
    }

}

// Abaixo os códigos do login //
var openEx = false;

function login(){
    const background = {
        tela: document.getElementsByClassName("background")[0],
        logIcon: document.getElementById("log"),
        menuMobile: document.getElementsByClassName("menu-mobile")[0]
    }
    
    if(openEx == false){
        background.logIcon.style.display = "none";
        background.menuMobile.style.display = "none";
        background.tela.style.display = "block";

        openEx = true;
    }

}

// Abaixo função pra retirar a tela de login //
function logBack(){
    const background = {
        tela: document.getElementsByClassName("background")[0],
        logIcon: document.getElementById("log"),
        menuMobile: document.getElementsByClassName("menu-mobile")[0],
        logMobile: document.getElementsByClassName("login-sign-mobile")[0],
        profileMob: document.getElementsByClassName("profile-mobile")[0]
    }

    if(document.body.clientWidth >= 450 && openEx == true){
        background.logIcon.style.display = "block";
        background.tela.style.display = "none";
        background.menuMobile.style.display = "block";

        openEx = false;
    }

    else if(document.body.clientWidth < 450 && openEx == true && openLog == false && openMenu == true){
        background.tela.style.display = "none";
        background.menuMobile.style.display = "block";
        background.logMobile.display = "block";
        background.profileMob.style.display = "none";

        openEx = false;
    }

    

}

// Abaixo função pra retirar a tela de login mobile //
function loginMobile(){
    const backgroundMobile = {
        menuMobile: document.getElementsByClassName("menu-mobile")[0],
        tela: document.getElementsByClassName("background")[0],
        logMobile: document.getElementsByClassName("login-sign-mobile")[0],
        profileMob: document.getElementsByClassName("profile-mobile")[0]
    }

    if(document.body.clientWidth < 450 && openEx == false){
        backgroundMobile.tela.style.display = "block";
        backgroundMobile.menuMobile.style.display = "none";
        backgroundMobile.profileMob.style.display = "block";

        openEx = true;
    }
    
}

// Abaixo a função para logar como admin //
var openLog = false;

function log(){
    const input = [document.getElementById("input1"), document.getElementById("input2")];
    let ul = document.getElementById("ul");
    let profile = document.getElementsByClassName("profile")[0];
    let background = document.getElementsByClassName("background")[0];
    let menuMob = document.getElementsByClassName("menu-mobile")[0];
    let logMobile = document.getElementsByClassName("login-sign-mobile")[0];

    if(input[0].value == "admin" && input[1].value == "admin" && openLog == false){
        ul.style.display = "none";
        profile.style.display = "block";
        background.style.display = "none";
        menuMob.style.display = "block";
        logMobile.style.display = "none";

        openLog = true;
    }

    else{
        alert("wrong password or login");
    }
}

// Abaixo a função que desloga do admin no desktop e mobile //
function exit(){
        const logs = {
            ul: document.getElementById("ul"),
            profile: document.getElementsByClassName("profile")[0],
            loginSign: document.getElementsByClassName("login-sign")[0],
            deslog: document.getElementById("log"),
            loginMobile: document.getElementsByClassName("login-sign-mobile")[0],
            profileMob: document.getElementsByClassName("profile-mobile")[0]
        }

    if(openLog == true && document.body.clientWidth >= 770){ 
        logs.deslog.style.display = "block";
        logs.ul.style.display = "block";
        logs.ul.style.display = "flex";
        logs.profile.style.display = "none";
        logs.loginSign.style.display = "block";
        logs.loginMobile.style.display = "block";
        logs.loginMobile.style.paddingBottom = "35px";
        logs.loginMobile.style.paddingtop = "35px";
        logs.profileMob.style.display = "none";

        openLog = false;
        openEx = false;
    }

    else if(openLog == true && document.body.clientWidth < 770 && document.body.clientWidth >= 450){
        logs.deslog.style.display = "block";
        logs.ul.style.display = "block";
        logs.ul.style.display = "block";
        logs.profile.style.display = "none";
        logs.loginSign.style.display = "block";
        logs.loginMobile.style.display = "block";
        logs.loginMobile.style.paddingBottom = "35px";
        logs.loginMobile.style.paddingtop = "35px";
        logs.profileMob.style.display = "none";

        openLog = false;
        openEx = false;
    }

    else if(openLog == true && openMenu == false && document.body.clientWidth < 450){
        logs.profileMob.style.display = "none";
        logs.ul.style.display = "none";
        logs.profile.style.display = "none";
        logs.loginMobile.style.display = "block";

        openLog = false;
        openEx = false;
    }

    else if(openLog == true && openMenu == true && document.body.clientWidth < 450){
        logs.profileMob.style.display = "none";
        logs.ul.style.display = "none";
        logs.profile.style.display = "none";
        logs.loginMobile.style.display = "block";

        openLog = false;
        openEx = false;

    }
}


onload = function(){
document.body.onresize = function(){ // script usado para verificar o tamanho da tela do computador e alterar o elemento de texto para corrigir o bug dele sumir ao mudar o tamanho da tela //
    let text = document.getElementsByClassName("text-header")[0];
    if(document.body.clientWidth >= 450 && openMenu == true){ // aqui se definiu o clientwidth como maior ou igual a 450 e a no css se definiu a mediaqueries em 459px sempre 9 pixels a mais que o clientwidth para funcionar o código //
        text.style.display = "block";
    }

    else if(document.body.clientWidth < 450 && openMenu == true){
        text.style.display = "none";
    }


    //Códigos do profile //
    
    let loginSign = document.getElementsByClassName("login-sign")[0];
    let logMobile = document.getElementsByClassName("login-sign-mobile")[0];
    let subMobile = document.getElementsByClassName("sub-menu-mobile")[0];
    let profileMobile = document.getElementsByClassName("profile-mobile")[0];
    let ul = document.getElementById("ul");
    let logid = document.getElementById("log");
    
   

    if(openLog == true && document.body.clientWidth < 450){
        logMobile.style.display = "none";
        loginSign.style.display = "none";
        profileMobile.style.display = "block";
    }

    else if(openLog == true && document.body.clientWidth >= 450){
        loginSign.style.display = "block";
        profileMobile.style.display = "none";
    }

    if(openLog == true && openMenu == true && document.body.clientWidth < 450){
        subMobile.style.paddingBottom = "35px";
        subMobile.style.display = "block";
    }

    else if(openLog == true && openMenu == false && document.body.clientWidth >= 450){
        subMobile.style.paddingBottom = "35px";
    }

    // Abaixo códigos depois que desloga //
    else if(openLog == false && document.body.clientWidth >= 450 && document.body.clientWidth < 753){
        ul.style.display = "block";
    }

    if(openLog == false && document.body.clientWidth >= 753){
        ul.style.display = "flex";
    }

    if(openLog == false && openMenu == false && document.body.clientWidth < 450){
        ul.style.display = "none";
        logMobile.style.paddingBottom = "35px";
        logMobile.style.paddingtop = "35px";
        logMobile.style.display = "block";
    }

    else if(openMenu == true && openLog == false && document.body.clientWidth < 450){
        loginSign.style.display = "none";
        logMobile.style.display = "block";
        subMobile.style.display = "block";
    }


    if(openMenu == true && openLog == false && document.body.clientWidth >= 450){
        loginSign.style.display = "block";
        logMobile.style.display = "none";
        subMobile.style.display = "none";
        ul.style.display = "block";
        logid.style.display = "block";
    }

    else if(openMenu == false && openLog == false & document.body.clientWidth >= 450){
        loginSign.style.display = "block";
        logMobile.style.display = "none";
        ul.style.display = "block";
        logid.style.display = "block";
    }
    
    if(openMenu == true && openLog == true && document.body.clientWidth >= 450){
        subMobile.style.display = "none";
    }

    if(openMenu == true && openLog == false && document.body.clientWidth >= 753){
        ul.style.display = "flex";
    }
    else if(document.body.clientWidth >= 753 && openMenu == false && openLog == false){
        ul.style.display = "flex";
    }

   
    


}
} 






