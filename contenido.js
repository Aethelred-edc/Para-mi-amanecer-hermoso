// ==========================================================
// 💌 CONTENIDO DEL REGALO — Edita SOLO este archivo
// ==========================================================
// Regla de oro: TODOS los archivos (fotos, videos, audios .mp3)
// van sueltos en la MISMA carpeta que index.html (la raíz).
// Aquí solo escribes el NOMBRE del archivo, nada más.
//
// No necesitas tocar script.js NUNCA para agregar o cambiar
// fotos, textos, audios o canciones. Solo edita este archivo.
// ==========================================================


// 🎵 PLAYLIST DE LA ROCOLA
const PLAYLIST = [
    { archivo: "yoko.mp3",             nombre: "Yoko" },
    { archivo: "el_ultimo_baile.mp3",  nombre: "El Último Baile" },
    { archivo: "babysita.mp3",         nombre: "Babysita" },
    { archivo: "paranormal.mp3",       nombre: "Paranormal" },
    { archivo: "reina_pepiada.mp3",    nombre: "Reina Pepiada" },
    { archivo: "jpn.mp3",              nombre: "JPN" },
    { archivo: "super_estrella.mp3",   nombre: "Super Estrella" },
];


// 📖 ESCENAS DE LA GALERÍA
const HISTORIA = [
    
    // ================= BLOQUE 1 =================
    // --- 2 ÚNICAS ---
{
  tipo: "unica",
  archivo: "tu_foto_1.png",
  texto: "Mi amor... feliz cumpleaños, te deseo un dia especial. Para empezar, mira esta foto una de sus favoritas...",
  audio: "audio2_foto_unica.mp3",
  sobre: {
    bottom: "6px",
    right: "6px",
    colorTema: "#ff66b2",
    titulo: "Destino o Decision", // Parte 1 del poema
    audioPoema: "audio3_recitacion.mp3",
    karaoke: [
      { segundo: 0.0,  texto: "Entre millones de personas," },
      { segundo: 2.5,  texto: "me encontré con una sola." },
      { segundo: 5.5,  texto: "Un momento que enamora," },
      { segundo: 8.0,  texto: "el destino que no demora." },
      { segundo: 11.0, texto: "Un sendero me marcaron" },
      { segundo: 13.0, texto: "y sus ojos me atraparon," },
      { segundo: 15.5, texto: "mi corazón empolvado" },
      { segundo: 17.0, texto: "fue limpio y encontrado." },
      { segundo: 19.5, texto: "Momentos definidos" },
      { segundo: 21.0, texto: "para estar siempre unidos," },
      { segundo: 23.5, texto: "vivir cómodamente juntos" },
      { segundo: 25.5, texto: "y no encontrarnos en el olvido." }
    ],
  },
},
    {
        tipo: "unica",
        archivo: "foto_unica_barco.png",
        texto: "Ese dia inicie un nuevo hobby para poder regalarle no solo algo de que hablar si no tambien un pequeño detalle",
        audio: ""
    },

    // --- 1 CARRUSEL ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_3.jpg", texto: "Oh, de nuestras primeras fts, quien diria que habrian más. Desliza para ver más recuerdos hermosos." },
            { archivo: "foto_carrusel_3.0.jpg", texto: "Aquí nos veíamos guapísimos y si notas no la apretaba mucho" },
            { archivo: "foto_carrusel_3.1.jpg", texto: "Aun no tenia tanta confianza pero son momentos inolvidables" }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_bb.jpg",
        texto: "Que bella la niña, al ver esa ft siempre te veo como una madre muy dulce",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_beso.png",
        texto: "De nuestras primeras fts. Un beso que me llena el alma y me hace volar.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_camisa_roja.jpg",
        texto: "Ya tienes varias camisas mias, poco a poco la mitad de su ropero sera mio. Me gusta darle un poco de mi.",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_unica_vieja01.jpg", texto: "Recordando nuestros inicios." },
            { archivo: "foto_unica_vieja1.jpg", texto: "Donde unas fts no significaban mucho pero a la vez lo eran todo" },
            { archivo: "foto_unica_vieja2.jpg", texto: "El tiempo pasa pero el cariño crece." },
            { archivo: "foto_unica_vieja3.jpg", texto: "Yo las guarde jajaja, aunque no eramos nada me gustaba verte" },
            { archivo: "foto_unica_vieja4.jpg", texto: "Siempre con una silueta atractiva" },
            { archivo: "foto_unica_vieja5.jpg", texto: "Recuerdos que valen oro o incluso un poco más, mucho más." },
            { archivo: "foto_unica_vieja07.jpg", texto: "Eres inolvidable." },
            { archivo: "foto_unica_vieja08.jpg", texto: "No tengas pena, ya eres mia." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_astetick1.jpg", texto: "De las fts mas recientes con estilo puro." },
            { archivo: "foto_carrusel_astetick2.jpg", texto: "Capturando el momento con esos ojos hermosos." },
            { archivo: "foto_carrusel_astetick3.jpg", texto: "¿Vibras estéticas? Yo diria que deslumbras puro arte." },
            { archivo: "foto_carrusel_astetick4.jpg", texto: "Arte en cada foto, y arte debo darle." },
            { archivo: "foto_carrusel_astetick5.jpg", texto: "Te parece ¿amarte? ¿besarte? ¿cuidarte?" },
            { archivo: "foto_carrusel_astetick6.jpg", texto: "Simplemente perfecto." }
        ],
    },

    // --- 1 VIDEO ---
    {
        tipo: "video",
        archivo: "miedocamara.mp4",
        texto: "Amo esa carita de pena ante la cámara, sabes eso me hace saber que los nuestros seran grabados por ti y no se perdera ningun momento.",
        audio: ""
    },


    // ================= BLOQUE 2 =================
    // --- 2 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_chiquita_ft.jpg",
        texto: "Un recuerdo muy tierno que guardo en mi corazón. Ayyyyy tan chiquita mi niña, tan inocente. ¿Donde estara?",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_chiquita.jpg",
        texto: "Mi chiquita hermosa, gracias por existir. Eres linda y siempre has sido linda.",
        audio: ""
    },

    // --- 1 CARRUSEL ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_colegio1.jpg", texto: "Aunque fue corto me gusto la rutina de mandarme una ft antes de irse a sus días de colegio." },
            { archivo: "foto_carrusel_colegio2.jpg", texto: "Absolutamente hermosa, te ves espectacular." },
            { archivo: "foto_carrusel_colegio3.jpg", texto: "Ay mi vida, en esa ft sus ojos se ven cristalinos pense que habia estando llorando." },
            { archivo: "foto_carrusel_colegio4.jpg", texto: "Una de las mas recientes, siempre me gusta verte gracias." }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_colas.jpg",
        texto: "jajjajajj, cuando empezo a decorar su arbolito de navidad. Es lindo que compartas conmigo no lo olvido.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_colores_dedos.png",
        texto: "Waoo, que fachas ¿eres artista? es un lindo recuerdo y muy importante que lo vieras.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_cuadro_familiar.png",
        texto: "Tengo el cuadro desactualizado falta que este Tom. Momentos invaluables que siempre atesoraré.",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_con_billy1.jpg", texto: "Tu dices que es nuestro hijo, pero yo no he hecho nada por el y no me conoce, no se si deberia sentirme asi" },
            { archivo: "foto_carrusel_con_billy2.jpg", texto: "Pero no hay que negar lo bello que es." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_corte.jpg", texto: "No recuerdo muy bien si estan son las fts de cuando se corto el cabello y tuvo un nuevo look." },
            { archivo: "foto_carrusel_corte1.jpg", texto: "Pero siempre con estilo." }
        ],
    },

    // --- 1 VIDEO ---
    {
        tipo: "video",
        archivo: "videobrrrsss.mp4",
        texto: "Tus locuras y ocurrencias son mi parte favorita de cada día aunque en este caso la protagonista fue otra pequeña. Te amo muchísimo.",
        audio: ""
    },


    // ================= BLOQUE 3 =================
    // --- 2 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_ella_lentes.jpg",
        texto: "Te ves hermosa e inteligente, eres perfecta para mí.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_estrella.jpg",
        texto: "Eres la estrella que ilumina todos mis días.",
        audio: ""
    },

    // --- 1 CARRUSEL ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_cumple1.jpg", texto: "Feliz cumpleaños." },
            { archivo: "foto_carrusel_cumple2.jpg", texto: "Probablemente muchas de las fts encontradas en esta Galeria no sean de su agrado pero solo es para ti" },
            { archivo: "foto_carrusel_cumple3.jpg", texto: "Yyyyy siiiii en ese cuello estuviera un poquito de mi, ¿Si le pegan?" },
            { archivo: "foto_carrusel_cumple4.jpg", texto: "Que bellaaa mi reinaaa." },
            { archivo: "foto_carrusel_cumple5.jpg", texto: "Oye eres muy alta, y si me saltas?" },
            { archivo: "foto_carrusel_cumple6.jpg", texto: "jajaja eres la sonrica mas escondida y hermosa que he visto." },
            { archivo: "foto_carrusel_cumple7.jpg", texto: "Sonrisa inolvidable." },
            { archivo: "foto_carrusel_cumple8.jpg", texto: "Pidiendo un deseo... oseaaa mi beso." },
            { archivo: "foto_carrusel_cumple9.jpg", texto: "Mirada que conquistan" },
            { archivo: "foto_carrusel_cumple10.jpg", texto: "El mejor día y la mejor vista por Diosss." },
            { archivo: "foto_carrusel_cumple11.jpg", texto: "Gracias por estar aquí." },
            { archivo: "foto_carrusel_cumple12.jpg", texto: "Eres hermosa, ¿Ya te lo habia dicho?" },
            { archivo: "foto_carrusel_cumple13.jpg", texto: "Pues se lo vuelvo a decir eres hermosa." }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_flor.jpg",
        texto: "Una flor hermosa para la mujer que alegra mi vida y combina con su cabello. Fue una ft simple pero que me gusto que la compartieras conmigo.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_gancho.png",
        texto: "Cada pequeño momento contigo es muy especial y este fue uno de ellos, yoooo? el mero, mero, indomable con ganchooos? jajja estoy enamorado.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_golpe.jpg",
        texto: "Hasta en momentos cotidianos me doy cuenta de cuánto te amo. Ey la ft se me hace tierna punto OK?",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_elegante_billy1.jpg", texto: "Poniéndonos elegantes por que las gatitas asi me quieren." },
            { archivo: "foto_carrusel_elegante_billy2.jpg", texto: "La mirada de es personita me descontra de ver a nuesto hijo" },
            { archivo: "foto_carrusel_elegante_billy3.jpg", texto: "¿Tienes fiesta? Hay mucha belleza en una sola imagen." },
            { archivo: "foto_carrusel_elegante_billy4.jpg", texto: "Billy no esta un poco enojado? Sera que no me quiere y se pone celoso que me tire besos." },
            { archivo: "foto_carrusel_elegante_billy5.jpg", texto: "Waooo, todo un cazador y conquistador" }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_tom1.jpg", texto: "Claramente iba estar estrella que no es estrella, osea TOM." },
            { archivo: "foto_carrusel_tom2.jpg", texto: "No tengo muchas fts de el, pero segun tambien es mi hijo." },
            { archivo: "foto_carrusel_tom3.jpg", texto: "Que no sea muy confiansudo, soy un tanto celoso. jaajja." }
        ],
    },


    // ================= BLOQUE 4 =================
    // --- 2 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_labios.jpg",
        texto: "Esa sonrisa es mi refugio favorito.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_mascarilla.jpg",
        texto: "Incluso cuando no se ve toda tu carita, tus ojos brillan con magia.",
        audio: ""
    },

    // --- 1 CARRUSEL ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_ella_ropa1.jpg", texto: "Hermosa como siempre." },
            { archivo: "foto_carrusel_ella_ropa2.jpg", texto: "Le falta un poco de brazos, y no para que vayas al Gym, si no para que me invites." }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_ojos.jpg",
        texto: "Esos ojos en los que me pierdo y encuentro mi paz.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_unas.jpg",
        texto: "Siempre tan detallista y perfecta en todo lo que haces.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica2.jpg",
        texto: "Simplemente tú. La dueña de todo mi amor.",
        audio: ""
    },

    // --- RESTO DE CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_ella1.jpg", texto: "La dueña de mi inspiración." },
            { archivo: "foto_carrusel_ella2.jpg", texto: "Preciosa." },
            { archivo: "foto_carrusel_ella3.jpg", texto: "Mi lugar favorito." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_ojos_juntos1.png", texto: "Nuestras miradas, son fotos muy bellas." },
            { archivo: "foto_carrusel_ojos_juntos2.png", texto: "Tenemos una conexion unica, y oye que guapos los 2." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_playa1.jpg", texto: "Días de sol y arena, se que no lo disfruto como lo queria." },
            { archivo: "foto_carrusel_playa2.jpg", texto: "Perooo yo si lo disfrute con esa vista, por diooos" },
            { archivo: "foto_carrusel_playa3.jpg", texto: "Que bella sonrisa." },
            { archivo: "foto_carrusel_playa4.jpg", texto: "Esos ojos me dan nervios pero aun asi los amo." },
            { archivo: "foto_carrusel_playa5.jpg", texto: "Ayy amor, de casualida no eres una sirena?" },
            { archivo: "foto_carrusel_playa6.jpg", texto: "Absolutamente ya se por que no gano en rifas es que mi suerte se fue en estar contigo." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_prueba.jpg", texto: "2 fts, fue un dia en el cual queria acompañarte por que se acercaba la hora de irme y queria estar cerca de ti" },
            { archivo: "foto_carrusel_prueba2.jpg", texto: "jjajajja, tu me tomastes fts tambien no?" }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_uniforme.jpg", texto: "Con el uniforme te ves bella, como seras sin el, ayyy sera como dormir todas mis horas." },
            { archivo: "foto_carrusel_uniforme1.jpg", texto: "Ponte de nuevo ese uniforme, aun me falta comprobar unas cosas." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_venta1.png", texto: "Ultimo dia en verte, quise estar lo mas que pude contigo." },
            { archivo: "foto_carrusel_venta2.png", texto: "No le compre nada, bueno le invite a mi prima no mas, pero estaba todo muy rico y de todo me refiero a ti." }
        ],
    },
    {
        tipo: "unica",
        archivo: "foto_carrusel_juntos_coreano.jpg",
        texto: "Desde siempre tan preciosa. Eres mi mayor tesoro.",
        audio: ""
    },

    // ================= GRAN FINAL =================
    // --- ÚNICA FINAL CON POEMA Y SOBRE ---
{
  tipo: "unica",
  archivo: "mi_ft_final.jpg",
  texto: "Mi amor... hemos llegado al final de este recorrido. Solo me queda decirte que te amo.",
  audio: "audio2_foto_unica_final.mp3", // O el nombre del audio que uses para esta foto
  sobre: {
    bottom: "6px",
    right: "6px",
    colorTema: "#ff66b2",
    titulo: "Destino o Decision", // Parte 2 del poema
    audioPoema: "audio3_recitacion_final.mp3", // Tu audio recitando esta segunda parte
    karaoke: [
      { segundo: 0.0,  texto: "Conocí a una persona," },
      { segundo: 2.7,  texto: "decidí estar con ella sola." },
      { segundo: 4.7,  texto: "Fue un momento cálido," },
      { segundo: 6.7,  texto: "En mis colores pálidos." },
      { segundo: 8.7,  texto: "Un camino decidí," },
      { segundo: 10.7, texto: "y sus ojos quiero ver," },
      { segundo: 12.2, texto: "mi corazón palpitó," },
      { segundo: 14.2, texto: "aceptando tu amor." },
      { segundo: 16.2, texto: "Momentos inolvidables," },
      { segundo: 18.7, texto: "unen nuestro amor indomable." },
      { segundo: 21.2, texto: "Mi corazón amable," },
      { segundo: 23.2, texto: "dice: te amo, mi liriable." }
      ],
    },
  },
];

// No toques esto: expone el contenido para que script.js lo use.
window.CONTENIDO = { PLAYLIST, HISTORIA };
