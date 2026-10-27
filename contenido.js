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
      { segundo: 18.0, texto: "fue limpio y encontrado." },
      { segundo: 21.5, texto: "Momentos definidos" },
      { segundo: 23.0, texto: "para estar siempre unidos," },
      { segundo: 25.5, texto: "vivir cómodamente juntos" },
      { segundo: 28.5, texto: "y no encontrarnos en el olvido." }
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
            { archivo: "foto_carrusel_3.jpg", texto: "Desliza para ver más recuerdos hermosos." },
            { archivo: "foto_carrusel_3.0.jpg", texto: "Aquí nos veíamos guapísimos." },
            { archivo: "foto_carrusel_3.1.jpg", texto: "Momentos inolvidables." }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_bb.jpg",
        texto: "Desde siempre tan preciosa. Eres mi mayor tesoro.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_beso.png",
        texto: "Un beso que me llena el alma y me hace volar.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_camisa_roja.jpg",
        texto: "Ese color te queda espectacular, iluminas todo a tu paso.",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_unica_vieja01.jpg", texto: "Recordando nuestros inicios." },
            { archivo: "foto_unica_vieja1.jpg", texto: "Tantos momentos lindos juntos." },
            { archivo: "foto_unica_vieja2.jpg", texto: "El tiempo pasa pero el cariño crece." },
            { archivo: "foto_unica_vieja3.jpg", texto: "Nuestras primeras aventuras." },
            { archivo: "foto_unica_vieja4.jpg", texto: "Siempre con una sonrisa." },
            { archivo: "foto_unica_vieja5.jpg", texto: "Recuerdos que valen oro." },
            { archivo: "foto_unica_vieja07.jpg", texto: "Inolvidable." },
            { archivo: "foto_unica_vieja08.jpg", texto: "Nuestra historia." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_astetick1.jpg", texto: "Estilo puro." },
            { archivo: "foto_carrusel_astetick2.jpg", texto: "Capturando el momento." },
            { archivo: "foto_carrusel_astetick3.jpg", texto: "Vibras estéticas." },
            { archivo: "foto_carrusel_astetick4.jpg", texto: "Arte en cada foto." },
            { archivo: "foto_carrusel_astetick5.jpg", texto: "Luces y sombras." },
            { archivo: "foto_carrusel_astetick6.jpg", texto: "Simplemente perfecto." }
        ],
    },

    // --- 1 VIDEO ---
    {
        tipo: "video",
        archivo: "miedocamara.mp4",
        texto: "Amo esa carita de pena ante la cámara, eres la más hermosa del mundo.",
        audio: ""
    },


    // ================= BLOQUE 2 =================
    // --- 2 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_chiquita_ft.jpg",
        texto: "Un recuerdo muy tierno que guardo en mi corazón.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_chiquita.jpg",
        texto: "Mi chiquita hermosa, gracias por existir.",
        audio: ""
    },

    // --- 1 CARRUSEL ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_colegio1.jpg", texto: "Días de colegio." },
            { archivo: "foto_carrusel_colegio2.jpg", texto: "Compañeros de aventuras." },
            { archivo: "foto_carrusel_colegio3.jpg", texto: "Recuerdos de clases." },
            { archivo: "foto_carrusel_colegio4.jpg", texto: "Esas fotos" }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_colas.jpg",
        texto: "Tan linda, cada detalle tuyo me enamora más.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_colores_dedos.png",
        texto: "Pintando juntos nuestra propia historia de amor.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_cuadro_familiar.png",
        texto: "Momentos invaluables que siempre atesoraré.",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_con_billy1.jpg", texto: "Con Billy." },
            { archivo: "foto_carrusel_con_billy2.jpg", texto: "Grandes momentos." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_corte.jpg", texto: "Nuevo look." },
            { archivo: "foto_carrusel_corte1.jpg", texto: "Siempre con estilo." }
        ],
    },

    // --- 1 VIDEO ---
    {
        tipo: "video",
        archivo: "videobrrrsss.mp4",
        texto: "Tus locuras y ocurrencias son mi parte favorita de cada día. Te amo muchísimo.",
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
            { archivo: "foto_carrusel_cumple2.jpg", texto: "Celebrando a lo grande." },
            { archivo: "foto_carrusel_cumple3.jpg", texto: "Un año más de vida." },
            { archivo: "foto_carrusel_cumple4.jpg", texto: "Alegría y fiesta." },
            { archivo: "foto_carrusel_cumple5.jpg", texto: "Momentos especiales." },
            { archivo: "foto_carrusel_cumple6.jpg", texto: "Rodeados de cariño." },
            { archivo: "foto_carrusel_cumple7.jpg", texto: "Sonrisas inolvidables." },
            { archivo: "foto_carrusel_cumple8.jpg", texto: "Pidiendo un deseo." },
            { archivo: "foto_carrusel_cumple9.jpg", texto: "Festejando." },
            { archivo: "foto_carrusel_cumple10.jpg", texto: "El mejor día." },
            { archivo: "foto_carrusel_cumple11.jpg", texto: "Gracias por estar aquí." },
            { archivo: "foto_carrusel_cumple12.jpg", texto: "Recuerdos del cumple." },
            { archivo: "foto_carrusel_cumple13.jpg", texto: "Hasta el próximo año." }
        ],
    },

    // --- 3 ÚNICAS ---
    {
        tipo: "unica",
        archivo: "foto_unica_flor.jpg",
        texto: "Una flor hermosa para la mujer que alegra mi vida.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_gancho.png",
        texto: "Cada pequeño momento contigo es muy especial.",
        audio: ""
    },
    {
        tipo: "unica",
        archivo: "foto_unica_golpe.jpg",
        texto: "Hasta en nuestros momentos graciosos me doy cuenta de cuánto te amo.",
        audio: ""
    },

    // --- 2 CARRUSELES ---
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_elegante_billy1.jpg", texto: "Poniéndonos elegantes." },
            { archivo: "foto_carrusel_elegante_billy2.jpg", texto: "Con mucha clase." },
            { archivo: "foto_carrusel_elegante_billy3.jpg", texto: "Estilo único." },
            { archivo: "foto_carrusel_elegante_billy4.jpg", texto: "De gala." },
            { archivo: "foto_carrusel_elegante_billy5.jpg", texto: "Noche especial." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_tom1.jpg", texto: "Poniéndonos elegantes." },
            { archivo: "foto_carrusel_tom2.jpg", texto: "Con mucha clase." },
            { archivo: "foto_carrusel_tom3.jpg", texto: "Estilo único." }
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
            { archivo: "foto_carrusel_ella_ropa2.jpg", texto: "El mejor outfit." }
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
            { archivo: "foto_carrusel_ojos_juntos1.png", texto: "Nuestras miradas." },
            { archivo: "foto_carrusel_ojos_juntos2.png", texto: "Conexión única." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_playa1.jpg", texto: "Días de sol y arena." },
            { archivo: "foto_carrusel_playa2.jpg", texto: "El mar de fondo." },
            { archivo: "foto_carrusel_playa3.jpg", texto: "Relajándonos." },
            { archivo: "foto_carrusel_playa4.jpg", texto: "Brisas de verano." },
            { archivo: "foto_carrusel_playa5.jpg", texto: "Aventuras costeras." },
            { archivo: "foto_carrusel_playa6.jpg", texto: "Atardeceres mágicos." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_prueba.jpg", texto: "Haciendo pruebas." },
            { archivo: "foto_carrusel_prueba2.jpg", texto: "Segunda prueba." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_uniforme.jpg", texto: "Con el uniforme." },
            { archivo: "foto_carrusel_uniforme1.jpg", texto: "Días académicos." }
        ],
    },
    {
        tipo: "carrusel",
        audio: "", 
        diapositivas: [
            { archivo: "foto_carrusel_venta1.png", texto: "Día de ventas." },
            { archivo: "foto_carrusel_venta2.png", texto: "Trabajando duro." }
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
      { segundo: 2.5,  texto: "decidí estar con ella sola." },
      { segundo: 4.5,  texto: "Fue un momento cálido," },
      { segundo: 6.5,  texto: "mis colores pálidos." },
      { segundo: 8.5,  texto: "Un camino decidí," },
      { segundo: 10.5, texto: "y sus ojos quiero ver," },
      { segundo: 12.0, texto: "mi corazón palpitó," },
      { segundo: 14.0, texto: "aceptando tu amor." },
      { segundo: 16.0, texto: "Momentos inolvidables," },
      { segundo: 18.5, texto: "unen nuestro amor indomable." },
      { segundo: 21.0, texto: "Mi corazón amable," },
      { segundo: 23.0, texto: "dice: te amo, mi liriable." }
      ],
    },
  },
];

// No toques esto: expone el contenido para que script.js lo use.
window.CONTENIDO = { PLAYLIST, HISTORIA };
