console.log("Welcome to music web");

// Initialize the variables
var songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let currentTimeDisplay = document.getElementById('currentTime');
let totalDurationDisplay = document.getElementById('totalDuration');
let lyricsDisplay = document.getElementById('lyricsDisplay'); // Lyrics display container
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { 
        songName: "Mi Amor", 
        filePath: "songs/1.mp3", 
        coverPath: "covers/cover1.jpg", 
        lyrics: [
            {time:22,text:"Haye sachi kure dassa tere nakhre da tor ni"},
            {time:26,text:"Oh aashiq banaya sanu layi kadi lorr ni"},
            {time:29,text:"Bulliya te hassa tera kure maar janda ae ni "},
            {time:32,text:"Sanu dass janda gall lambi challu hor ni"},
            {time:35,text:"Oh gabru nu billo kehre chakra ch paya"},
            {time:38,text:"Haye sachi tainu sama laake rabb ne banaya"},
            {time:41,text:"Ni kada sanu ishq ch apne tu laya"},
            {time:44,text:"Oh naina naal sooli utte chade goriye"},
            {time:47,text:"Haye langdi ne akh c jo mari goriye"},
            {time:50,text:"Ni sachi odo disde c taare goriye"},
            {time:52,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:55,text:"Haye poora ni tu kehar guzare goriye"},
            {time:58,text:"Haan langdi ne akh c jo mari goriye"},
            {time:61,text:"Ni sachi odo disde c taare goriye"},
            {time:64,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:67,text:"Haye poora ni tu kehar guzare goriye"},
            {time:82,text:"Oh piche piche aava tere nitt ni"},
            {time:85,text:"Haye pairi tere jhanjra v paun sanu khich ni"},
            {time:88,text:"Haye khich jo tu pauni ae ni pyar ch fasauni ae"},
            {time:91,text:"Ni kinj lava naina de ishareye to jitt ni"},
            {time:94,text:"Haye billo tere karke maade kam c mai shadte"},
            {time:99,text:"Ni jehra karda c ungla te town run"},
            {time:102,text:"Takkya jo tainu fr bhule kamm sare goriye"},
            {time:105,text:"Haye langdi ne akh c jo mari goriye"},
            {time:108,text:"Te sachi odo disde c taare goriye"},
            {time:111,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:114,text:"Haye poora ni tu kehar guzare goriye"},
            {time:117,text:"Haan langdi ne akh c jo mari goriye"},
            {time:119,text:"Ni sachi odo disde c taare goriye"},
            {time:122,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:126,text:"Haye poora ni tu kehar guzare goriye"},
            {time:141,text:"Oh khichdi ae photoan te pave jo storiyan"},
            {time:144,text:"Haye dil kare tainu baar baar takkla"},
            {time:147,text:"Kite ho na java door is gall to daran ni"},
            {time:150,text:"Tainu sohniya mai dil ch lukka ke rakhla"},
            {time:153,text:"Meet diya likhtan ch tera hi zikar"},
            {time:155,text:"Sachi khud naalo zaada kare tera hi fikar"},
            {time:158,text:"Jehra bachda c billo ina kamma to ni bass"},
            {time:161,text:"Teri sang kolo haare goriye"},
            {time:164,text:"Haye langdi ne akh c jo mari goriye"},
            {time:167,text:"Ni sachi odo disde c taare goriye"},
            {time:170,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:173,text:"Haye poora ni tu kehar guzare goriye"},
            {time:176,text:"Haan langdi ne akh c jo mari goriye"},
            {time:178,text:"Ni sachi odo disde c taare goriye"},
            {time:181,text:"Oh sangdi te zulfa naa firre kheddi"},
            {time:284,text:"Haye poora ni tu kehar guzare goriye"},
        ] 
    },
    { 
        songName: "Brown Rang", 
        filePath: "songs/2.mp3", 
        coverPath: "covers/cover2.jpeg", 
        lyrics: [
            {time: 5, text: "Kudiye ni tere, brown rang ne."},
            {time: 8, text: "Munde patt te ni saare mere town de."},
            {time: 12, text: "Kudiye ni tere, brown rang ne."},
            {time: 15, text: "Munde patt te ni saare mere town de."},
            {time: 18, text: "Koi kam utte jaave na."},
            {time: 20, text: "Roti paani khaave na."},
            {time: 23, text: "Gori gori kudiya nu."},
            {time: 26, text: "Koi muh laave na (x2)."},
            {time: 30, text: "Kudiye ni tere brown rang ne."},
            {time: 33, text: "Munde patt te ni saare mere town de..."},
            {time: 37, text: "Mere town de, mere town de, mere town de ni billo."},
            {time: 43, text: "Mere town de..."},
            {time: 44, text: "Mere town de, mere town de..."},
            {time: 46, text: "Excuse me miss..."},
            {time: 47, text: "Kiss kiss kiss."},
            {time: 49, text: "Kis se tu bhaage gi hun bach bach ke."},
            {time: 52, text: "Tenu rabb ne husan ditta raj raj ke."},
            {time: 55, text: "Mai kiha kaali Teri Gucci te Prada tera laal."},
            {time: 58, text: "Kitthe challe o soniyo saj dhaj ke ke..."},
            {time: 61, text: "Tere vargi naar ni huni mainu munde kehnde si."},
            {time: 64, text: "Ho gye ni tere charche star news to BBC."},
            {time: 67, text: "Brown brown skin vaali let me tell you one thing."},
            {time: 70, text: "Rabb di sauhn you're so sexy."},
            {time: 73, text: "Kudiye ni tere brown rang ne."},
            {time: 76, text: "Munde patt te ni saare mere town de."},
            {time: 79, text: "Koi kam utte jaave na."},
            {time: 81, text: "Roti paani khaave na."},
            {time: 83, text: "Gori gori kudiya nu."},
            {time: 85, text: "Koi muh laave na."},
            {time: 86, text: "Kudiye ni tere brown rang ne."},
            {time: 89, text: "Munde patt te ni saare mere town de..."},
            {time: 92, text: "Mere town de, mere town de, mere town de ni billo."},
            {time: 98, text: "Urre aa tenu ek gal samjaava."},
            {time: 101, text: "Maare purze nu kadi hath mai na paava aa."},
            {time: 104, text: "Vase ta mitran da bahut vadda score."},
            {time: 107, text: "But white chicks na I don't like them anymore."},
            {time: 110, text: "Ban mitran di whore."},
            {time: 113, text: "I mean mitran di ho."},
            {time: 114, text: "Tu vi tedha tedha takkein saanu."},
            {time: 115, text: "I know..."},
            {time: 116, text: "Now don't say no no."},
            {time: 118, text: "Mai ta tera yo yo.."},
            {time: 120, text: "Tu haan ta kar saambh lu mai tera pyo hoye."},
            {time: 123, text: "Kudie ni tere brown rang ne."},
            {time: 126, text: "Munde patt te ni saare mere town de."},
            {time: 128, text: "Koi kam utte jaave na."},
            {time: 130, text: "Roti paani khaave na."},
            {time: 132, text: "Gori gori kudiya nu koi muh laave na."},
            {time: 134, text: "Koi kam utte jaave na."},
            {time: 136, text: "Roti paani khaave na."},
            {time: 138, text: "Gori gori kudiya nu koi muh laave na."},
            {time: 141, text: "Kudiye ni tere brown rang ne."},
            {time: 144, text: "Munde patt te ni saare mere town de..."},
            {time: 146, text: "Koi kam utte jaave na."},
            {time: 148, text: "Roti paani khaave na."},
            {time: 150, text: "Gori gori kudiya nu koi muh laave na."},
        ]
    },
    // Add other songs with their lyrics similarly
    { 
        songName: "Check Kar", 
        filePath: "songs/3.mp3", 
        coverPath: "covers/cover3.webp", 
        lyrics: [
            {time: 0, text: "Check Kar Khabbe Hath Rollie Check Kar"},
            {time: 13, text: "Check Kar Gabbru Di Boli Check Kar"},
            {time: 29, text: "Check Kar Ankh Chon Tu Lehar Check Kar"},
            {time: 32, text: "Check Kar Kithe Kithe Vair Check Kar"},

            {time: 36, text: "Kar Panic Na Vailiyan Naal Yaari Check Kar"},
            {time: 39, text: "Rehnda Asle Naal Less Tu Taiyari Check Kar"},
            {time: 42, text: "Rehndi Thalle Kaali Wagon Sawari Check Kar"},
            {time: 45, text: "Main Keha Mitran Di Billo"},

            {time: 50, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 53, text: "Main Keha Mitran Di Billo"},
            {time: 56, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 59, text: "Main Keha Mitran Di Billo"},

            {time: 64, text: "Check Kar Pump Hunde Daule Check Kar"},
            {time: 67, text: "Check Kar Hath Hunde Haule Check Kar"},
            {time: 70, text: "Check Kar Hundi Sahib Sahib Goriye Ni"},
            {time: 73, text: "Check Kar Shehar Vich Raule Check Kar"},

            {time: 78, text: "Check Kar Yaar Beli Gabbru De"},
            {time: 81, text: "Check Kar Naal Jo Bithaye Check Kar"},
            {time: 84, text: "Check Kar Attention Jo Gain Karde Check Kar"},
            {time: 87, text: "Raano De Alloy Check Kar"},

            {time: 92, text: "Jehde Ghoor’de Aa Vairi Vaari Vaari Check Kar"},
            {time: 95, text: "Khutti Paun Di Layi Aa Jimmevaari Check Kar"},
            {time: 98, text: "Surry Aaleyan Di Fassdi Garaari Check Kar"},
            {time: 101, text: "Main Keha Mitran Di Billo"},

            {time: 106, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 109, text: "Main Keha Mitran Di Billo"},
            {time: 112, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 115, text: "Main Keha Mitran Di Billo"},

            {time: 120, text: "Check Kar Munde Di Tu Age Check Kar"},
            {time: 123, text: "Check Kar Munde Di Tu Range Check Kar"},
            {time: 126, text: "Check Kar Kihde Naal Behni Uthni Ni"},
            {time: 129, text: "Check Kar Kinne Karde Aa Chase Check Kar"},

            {time: 134, text: "Check Kar Kithe Karde Ne Jehde Rees"},
            {time: 137, text: "Check Kar Enna Nu Maar Gayi Ae Jealousy"},
            {time: 140, text: "Check Kar Kivein Aappan Karde Fly"},
            {time: 143, text: "Check Kar Aappan Rehnde Aa Grounded Pher Vi"},

            {time: 148, text: "Padhe Likhe Nu Vi Appan Karde Dictate"},
            {time: 151, text: "Teddi Buddhi Landua Nu Kare Educate"},
            {time: 154, text: "Diggde Na Sidhe Kardi Aa Levitate"},
            {time: 157, text: "Respect Police Nu Baapu Nu Dendi Respect"},

            {time: 162, text: "Jinna Pyar Charo Paase Munda Bada Ghaint"},
            {time: 165, text: "Asla Khel Main Khindavan Aaja Kol Sadde Beh"},
            {time: 168, text: "Utte Utte Vair Rakhe Jithe Jithe Pair"},
            {time: 171, text: "Mujhme Na Ainth Na Mujhse Jaana Ainth"},

            {time: 176, text: "Gaadi Check Peya Cheque"},
            {time: 179, text: "Rabb Di Aa Den Yeah I’m Blessed"},
            {time: 182, text: "Yaari Check Jimmevaari Check"},
            {time: 185, text: "It’s Way To Defend That We’re Flex"},

            {time: 190, text: "Mitran Di Billo Sar"},
            {time: 192, text: "Mitran Di Billo Sar"},
            {time: 194, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 197, text: "Main Keha Mitran Di Billo"},
            {time: 202, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 205, text: "Main Keha Mitran Di Billo"},
            {time: 210, text: "Check Kar Dubbi Ch Malai Check Kar"},
            {time: 213, text: "Check Kar Muchh Di Kadhai Check Kar"},
            {time: 216, text: "Check Kar Jawani Jamma Kehar Di Kude"},
            {time: 219, text: "Check Kar Chobbra Te Aayi Check Kar"},
            {time: 224, text: "Check Kar Zehri Jehi Ankh Te Kude"},
            {time: 227, text: "Check Kar Ferragamo Layi Check Kar"},
            {time: 230, text: "Check Kar Tyre Gith Gith Baahar Nu Kude"},
            {time: 233, text: "Check Kar Gaddi Di Chalai Check Kar"},
            {time: 238, text: "Uth Chah Naal Khaadi Maadi Maadi Check Kar"},
            {time: 241, text: "Kaadon Phirde Aa Phullan Utte Jhadi Check Kar"},
            {time: 244, text: "Mic Hath Ch Te Wajjdi Tu Taali Check Kar"},
            {time: 247, text: "Main Keha Mitran Di Billo"},
            {time: 252, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 255, text: "Main Keha Mitran Di Billo"},
            {time: 258, text: "Mitran Di Billo Sardari Check Kar"},
            {time: 261, text: "Main Keha Mitran Di Billo"},
            {time: 264, text: "Main Keha Mitran Di Billo"}
        ] 
    },
    { 
        songName: "Gasolina", 
        filePath: "songs/4.mp3", 
        coverPath: "covers/cover4.jpeg", 
        lyrics: [
                {time: 0, text: "Zumbale el mambo pa' q mis gatas prendan los motores,"},
                {time: 4, text: "Zumbale el mambo pa' q mis gatas prendan los motores,"},
                {time: 8, text: "Zumbale el mambo pa' q mis gatas prendan los motores,"},
                {time: 12, text: "Que se preparen q lo q viene es pa q le den, duro!"},
                {time: 16, text: "Mamita yo se que tu no te me va' a quitar (duro!)"},
                {time: 20, text: "Lo que me gusta es q tu te dejas llevar (duro!!)"},
                {time: 24, text: "To los weekenes ella sale a vacilar (duro!!)"},
                {time: 28, text: "Mi gata no para de janguiar porq"},
                {time: 32, text: "A ella le gusta la gasolina (dame mas gasolina)"},
                {time: 36, text: "Como le encanta la gasolina (dame mas gasolina)"},
                {time: 40, text: "Ella prende las turbinas,"},
                {time: 44, text: "No discrimina,"},
                {time: 48, text: "No se pierde ni un party de marquesina,"},
                {time: 52, text: "Se acicala hasta pa la esquina,"},
                {time: 56, text: "Luce tan bien q hasta la sombra le combina,"},
                {time: 60, text: "Asesina, me domina,"},
                {time: 64, text: "Anda en carro, motoras y limosinas,"},
                {time: 68, text: "Llena su tanque de adrenalina,"},
                {time: 72, text: "Cuando escucha el reggaeton en la cocina."},
                {time: 76, text: "A ella le gusta la gasolina (dame mas gasolina!!)"},
                {time: 80, text: "Como le encanta la gasolina (dame mas gasolina!!)"},
                {time: 84, text: "Aqui nosotros somos los mejores,"},
                {time: 88, text: "No te me ajores,"},
                {time: 92, text: "En la pista nos llaman los matadores,"},
                {time: 96, text: "Haces q cualquiera se enamore,"},
                {time: 100, text: "Cuando bailas al ritmo de los tambores,"},
                {time: 104, text: "Esto va pa las gatas de to colores,"},
                {time: 108, text: "Pa las mayores, pa las menores,"},
                {time: 112, text: "Pa las que son mas zorras que los cazadores,"},
                {time: 116, text: "Pa las mujeres que no apagan sus motores."},
                {time: 120, text: "Tenemo' tu y yo algo pendiente,"},
                {time: 124, text: "Tu me debes algo y lo sabes,"},
                {time: 128, text: "Conmigo ella se pierde,"},
                {time: 132, text: "No le rinde cuentas a nadie."},
                {time: 136, text: "Subele el mambo pa' q mis gatas prendan los motores,"},
                {time: 140, text: "Subele el mambo pa' q mis gatas prendan los motores,"},
                {time: 144, text: "Subele el mambo pa' q mis gatas prendan los motores,"},
                {time: 148, text: "Que se preparen q lo q viene es pa q le den, duro!"},
                {time: 152, text: "Mamita yo se que tu no te me va' a quitar (duro!)"},
                {time: 156, text: "Lo que me gusta es q tu te dejas llevar (duro!!)"},
                {time: 160, text: "To los weekenes ella sale a vacilar (duro!!)"},
                {time: 164, text: "Mi gata no para de janguiar porq"},
                {time: 168, text: "A ella le gusta la gasolina (dame mas gasolina!!)"},
                {time: 172, text: "Como le encanta la gasolina (dame mas gasolina!!)"},
                {time: 176, text: "A ella le gusta la gasolina (dame mas gasolina!!)"},
                {time: 180, text: "Como le encanta la gasolina (dame mas gasolina!!)"},
                {time: 184, text: "Aqui nosotros somos los mejores,"},
                {time: 188, text: "No te me ajores,"},
                {time: 192, text: "En la pista nos llaman los matadores,"},
                {time: 196, text: "Haces q cualquiera se enamore,"},
                {time: 200, text: "Cuando bailas al ritmo de los tambores,"},
                {time: 204, text: "Esto va pa las gatas de to colores,"},
                {time: 208, text: "Pa las mayores, pa las menores,"},
                {time: 212, text: "Pa las que son mas zorras que los cazadores,"},
                {time: 216, text: "Pa las mujeres que no apagan sus motores."},
            
        ]
    },
    { 
        songName: "Jaguar", 
        filePath: "songs/5.mp3", 
        coverPath: "covers/cover5.jpeg", 
        lyrics: [
                {time: 0, text: "kudi kehndi, kudi kehndi (kudi kehndi)"},
                {time: 4, text: "Sukh E, Muzical Doctorz"},
                {time: 8, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 12, text: "kehndi bahli main shakin, ikk week ikk jean"},
                {time: 15, text: "soot patiala shahi char lai lavo"},
                {time: 18, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 22, text: "fer jinna maraji pyaar lai lavo"},
                {time: 25, text: "pyaar lai lavo"},
                {time: 28, text: "pyaar lai lavo"},
                {time: 32, text: "kehndi ona chir main vi ha nahi karni"},
                {time: 36, text: "akhe uddh wichkaar tainu chhadd jaaungi"},
                {time: 40, text: "mainu kisey chiiz ton vi naanh nahi karni"},
                {time: 44, text: "mere nakhria wala sir bhaar lai lavo"},
                {time: 48, text: "fer jinna maraji pyaar lai lavo"},
                {time: 52, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 56, text: "kudi kehndi, kudi kehndi"},
                {time: 60, text: "kudi kehndi, kudi kehndi"},
                {time: 64, text: "oh, chhote-mote locals naal naa mile"},
                {time: 68, text: "naale chhoti-moti gaddi 'ch nahi bahindi (chhoti-moti gaddi 'ch nahi bahindi)"},
                {time: 72, text: "naale nazar nahi aaundi, ohnu meri hor koi kamyaabi"},
                {time: 76, text: "oeso kitthon lai ke aavaan main Jaguar di chaabi?"},
                {time: 80, text: "binaas led, headlights te tainu pyaar mera dise naa zara vi"},
                {time: 84, text: "hun main athru chupa ke odas dil bhars lahuu mein dol ke"},
                {time: 88, text: "sohniye ve, sanu ki laggey Jaguar ton ve"},
                {time: 92, text: "jats da dil wadda hunda kisi vi car ton (kisi vi car ton)"},
                {time: 96, text: "ve chhadd mera dil di, tainu meri saunh"},
                {time: 100, text: "kehndi suneya jats da dil wadda hunda ayy"},
                {time: 104, text: "main lagda nahi jatt, agg la ke turgi"},
                {time: 108, text: "iss gal di si der, saali vechati zameen"},
                {time: 112, text: "Jaani leti Jaguar, eh naa launga pyaar"},
                {time: 116, text: "fer kisey nu naa kahu Jaguar lai lavo (Jaguar lai lavo)"},
                {time: 120, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 124, text: "fer jinna maraji pyaar lai lavo"},
                {time: 128, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 132, text: "fer jinna maraji pyaar lai lavo"},
                {time: 136, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
                {time: 140, text: "kudi kehndi, baby, pehlaan Jaguar lai lavo"},
        ] 
    },
    { 
        songName: "Gani", 
        filePath: "songs/6.mp3", 
        coverPath: "covers/cover6.jpg", 
        lyrics: [
                {time:0,text:"Chihara masoom jeha ni tere dil ch shaitani"},
                {time:10,text:"Mera dil leati jaave ni tere gal waali gaani"},
                {time:23,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:32,text:"Akhiyan ch nasha dise bulhia te narmi"},
                {time:35,text:"Pus de mahiney minuun aayi jaave garmi"},
                {time:38,text:"Chhadd duniya main saari ho bana tera diljaani"},
                {time:41,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:44,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:47,text:"Duddh naalon chita rang uttey kaala til ni"},
                {time:50,text:"Nakk waala koka tera leate mera dil ni"},
                {time:52,text:"Duddh naalon chita rang uttey kaala til ni"},
                {time:55,text:"Nakk waala koka tera leate mera dil ni"},
                {time:58,text:"Labhana nahi jag uttey ni tere roop da koi saani"},
                {time:61,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:64,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:67,text:"Nafara vi tainu haaye oach-oach penda ni"},
                {time:82,text:"Takna vi tera billo jaan kachh lenda ni"},
                {time:85,text:"Vekh tere pichchey minuun ni hove sab nu hairaani"},
                {time:88,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:91,text:"Chihara masoom jeha ni tere dil ch shaitani"},
                {time:94,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:117,text:"Chihara masoom jeha ni tere dil ch shaitani"},
                {time:119,text:"Mera dil leati jaave ni tere gal waali gaani oh"},
                {time:122,text:"Ni tere gal waali gaani oh"},
                {time:126,text:"Mera dil leati jaave oh"},
                {time:141,text:"Tere tere tere tere"},
                {time:144,text:"Tere tere tere tere"}

        ]
    },
    { 
        songName: "Gora Gora Rang Remix", 
        filePath: "songs/7.mp3", 
        coverPath: "covers/cover7.webp", 
        lyrics: [
            { time: 0, text: "Lyrics for this song is not available!!!" },
        ]
    },
];

// Update song item elements
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-pause');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update time and seekbar
audioElement.addEventListener('loadedmetadata', () => {
    let durationMinutes = Math.floor(audioElement.duration / 60);
    let durationSeconds = Math.floor(audioElement.duration % 60);
    totalDurationDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});



audioElement.addEventListener("timeupdate", () => {
    // Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    // Update current time
    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentSeconds = Math.floor(audioElement.currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds}`;

    // Update lyrics display
    updateLyrics(audioElement.currentTime);
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Reset all play icons to play
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Handle song item click
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        displayLyrics(songs[songIndex].lyrics);
    });
});

document.getElementById('next').addEventListener('click', () => {
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-pause');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-play');
    
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    displayLyrics(songs[songIndex].lyrics);
});

document.getElementById('previous').addEventListener('click', () => {
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-pause');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-play');
    
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    displayLyrics(songs[songIndex].lyrics);
});

// Display lyrics
const displayLyrics = (lyrics) => {
    lyricsDisplay.innerHTML = '';
    lyrics.forEach(line => {
        let span = document.createElement('span');
        span.innerText           = line.text;
        span.setAttribute('data-time', line.time);
        lyricsDisplay.appendChild(span);
    });
}

// Update lyrics display based on current time
const updateLyrics = (currentTime) => {
    let lyricsLines = lyricsDisplay.querySelectorAll('span');
    lyricsLines.forEach(line => {
        let lineTime = parseFloat(line.getAttribute('data-time'));
        if (currentTime >= lineTime) {
            lyricsLines.forEach(l => l.classList.remove('active'));
            line.classList.add('active');
        }
    });
}
