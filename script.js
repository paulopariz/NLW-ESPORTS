var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
});


let texto = "Conecte-se comigo!";
document.getElementById("addtext").innerHTML = `<p>${texto}</p>`;



var perfil = document.querySelector("#imgperfil");
    perfil.setAttribute('src', 'assets/perfil.jpg');



document.body.style.backgroundImage = "url('assets/fundo.gif')";
document.body.style.backgroundColor = "#000";



//ICONS REDES SOCIAS
var iconTwitter = document.querySelector("#iconTwitter");
iconTwitter.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/01f6ff/twitter--v1.png');
iconTwitter.style.width =  '30px';


var iconInstagram = document.querySelector("#iconInstagram");
iconInstagram.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/f222c4/instagram-new.png');
iconInstagram.style.width =  '30px';


var iconGithub = document.querySelector("#iconGithub");
iconGithub.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/1644b6/github.png');
iconGithub.style.width =  '30px';


var iconLinkedin = document.querySelector("#iconLinkedin");
iconLinkedin.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/a659ff/linkedin-circled--v1.png');
iconLinkedin.style.width =  '30px';




