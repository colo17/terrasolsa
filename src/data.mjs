// Contenido del sitio. Todo el texto proviene del material recuperado del
// sitio original (ver ../INFORMACION-RECUPERADA.md y ../FUENTES-WAYBACK.md).

export const empresa = {
  nombre: 'TERRASOL S.A.',
  marca: 'GREEN HORSE',
  fundacion: 1983,
  desdeGreenHorse: 2004,
  tagline: 'Maquinaria agroindustrial para el procesamiento de granos',
  claim: 'Representante e importador oficial de GREEN HORSE en Uruguay',
  descripcionCorta:
    'Fundada en 1983, TERRASOL S.A. representa, importa y vende maquinaria agroindustrial y equipos procedentes de Asia, Brasil y Europa.',
  descripcionLarga: [
    'Fundada en 1983, TERRASOL S.A. representa, importa y vende maquinaria Agroindustrial y equipos procedentes de Asia, Brasil y Europa.',
    'Desde 2004 comercializamos Maquinaria GREEN HORSE de procedencia China con tecnología Japonesa y Alemana, para las industrias de arroz, trigo, soja, maíz, leguminosas y raciones.',
    'Con amplia presencia en Mercosur hemos ampliado nuestro mercado ofreciendo soluciones en el sector del Agro a nivel de América Latina y Europa.',
  ],
  especialidades:
    'Maximizamos la capacidad de producción de los granos, todo ello con una buena relación coste-rendimiento.',
  presencia: [
    'Contamos con la experiencia de más de cuatro décadas junto al sector productivo agricultor, ofreciendo diseño de Layout, asistencia técnica, instalaciones y servicio post venta. Contamos con un amplio stock de repuestos que nos permiten brindar rápida asistencia.',
    'Brindamos abastecimiento integral a la Industria, desde Almacenamiento de Granos y sus derivados (Almacenamiento en Silos Galvanizados Fondo Cónico y plano o Silos Acero INOX Cónicos), Transporte (Elevadores, Redlers, Roscas Helicoides, etc), Maquinaria de Prelimpieza, Zarandas Clasificadoras, Selectoras Ópticas, Balanzas de embolse electrónicas, Robots de enfardados y Paletizados así como Etiquetadoras.',
  ],
  cifras: [
    { valor: '1983', label: 'Año de fundación' },
    { valor: '2004', label: 'Representantes GREEN HORSE' },
    { valor: '+40', label: 'Años junto al productor' },
    { valor: '5', label: 'Marcas representadas' },
    { valor: '6', label: 'Granos y derivados que procesamos' },
    { valor: '2', label: 'Oficinas: Montevideo y Málaga' },
  ],
};

export const contacto = {
  oficinas: [
    {
      ciudad: 'Montevideo',
      pais: 'Uruguay',
      rol: 'Casa central · Representante e importador',
      direccion: 'Juncal 1408, oficina 602 — Montevideo 11000',
      telefonos: [
        { label: '+598 2 902 2632', href: 'tel:+59829022632' },
        { label: '+598 95 845 801', href: 'tel:+59895845801' },
      ],
      email: 'terrasol.greenhorse@gmail.com',
      principal: true,
    },
    {
      ciudad: 'Málaga',
      pais: 'España',
      rol: 'Oficina comercial Europa',
      direccion: 'Málaga, España',
      telefonos: [{ label: '+34 665 207 165', href: 'tel:+34665207165' }],
      email: 'leticiasabatino.terrasolgh@gmail.com',
      principal: false,
    },
  ],
  emailPrincipal: 'terrasol.greenhorse@gmail.com',
  whatsapp: '59895845801',
  linkedin: 'https://uy.linkedin.com/company/terrasol-sa',
};

export const representadas = [
  {
    nombre: 'GREEN HORSE',
    origen: 'China · tecnología japonesa y alemana',
    rubro: 'Procesamiento de granos',
    desde: 2004,
    logo: 'logo-green-horse.jpg',
    destacada: true,
    texto:
      'Línea principal de TERRASOL desde 2004. Maquinaria completa para molinos de arroz y trigo: prelimpieza, despedrado, descascarado, separado, blanqueado, clasificado y molienda. Fabricación con corte láser, aceros y rulemanes de origen alemán, y control electrónico.',
  },
  {
    nombre: 'ENESVAL',
    origen: 'España · Ciempozuelos, Madrid',
    rubro: 'Pesaje, ensacado y paletizado',
    logo: 'logo-enesval.png',
    texto:
      'Fabricante español con más de 25 años diseñando maquinaria industrial: balanzas y sistemas de pesaje, ensacadoras automáticas, llenadoras de big bag, paletizadores de arrastre, robóticos y cartesianos, y enfardadoras. Sectores alimentario, agroalimentario, nutrición animal, materiales de construcción, farmacéutico y químico.',
    web: 'https://enesval.es',
  },
  {
    nombre: 'TECNOTOK',
    origen: 'Envasado y paletizado',
    rubro: 'Envasado, enfardado y paletizado',
    logo: null,
    imagen: 'assets/img/maquinas/tecnotok.jpg',
    texto:
      'Soluciones completas de envasado, enfardado y paletizado. Equipos totalmente automatizados de operación simple para funcionamiento continuo, con alta productividad y bajo costo operativo, cubriendo un rango de pesos de 5 gramos a 2 toneladas.',
  },
  {
    nombre: 'YONGXIANG',
    origen: 'China · Anlu, Hubei',
    rubro: 'Maquinaria agrícola',
    logo: 'logo-yongxiang.png',
    web: 'https://www.agro-yongxiang.com',
    texto:
      'Hubei YongXiang Agricultural Machinery Equipment, radicada en Anlu, provincia de Hubei — conocida como la capital china de la maquinaria de granos y aceites. Desarrollo y fabricación de maquinaria agrícola inteligente: sembradoras neumáticas, fertilizadoras y sistemas de control de siembra.',
  },
  {
    nombre: 'CSI',
    origen: 'Por confirmar',
    rubro: 'Equipamiento agroindustrial',
    logo: null,
    texto:
      'Marca representada por TERRASOL. Consultanos por disponibilidad y líneas de producto.',
  },
];

export const servicios = [
  {
    icono: 'layout',
    titulo: 'Diseño de layout',
    texto:
      'Proyectamos la distribución completa de la planta: flujo del grano, ubicación de equipos, elevadores y transportes, previendo capacidad futura y espacio de mantenimiento.',
  },
  {
    icono: 'soporte',
    titulo: 'Asistencia técnica',
    texto:
      'Acompañamiento técnico en la selección del equipo según el tipo de grano, la variedad y el rendimiento buscado. Enviamos muestras de producto para configurar los equipos a medida.',
  },
  {
    icono: 'instalacion',
    titulo: 'Instalaciones',
    texto:
      'Montaje y puesta en marcha de equipos individuales o de la línea completa, desde el silo de recepción hasta la máquina de envasado.',
  },
  {
    icono: 'postventa',
    titulo: 'Servicio post venta',
    texto:
      'Seguimiento después de la instalación, ajustes de proceso y soporte durante la vida útil del equipo.',
  },
  {
    icono: 'repuestos',
    titulo: 'Stock de repuestos',
    texto:
      'Amplio stock de repuestos y accesorios en plaza que nos permite brindar asistencia rápida y minimizar la parada de planta.',
  },
  {
    icono: 'integral',
    titulo: 'Abastecimiento integral',
    texto:
      'Desde almacenamiento y transporte de granos hasta prelimpieza, clasificación, selección óptica, pesaje, embolsado, paletizado y etiquetado.',
  },
];

// Etapas del proceso — usadas en el scrollytelling y como filtro del catálogo.
export const etapas = [
  {
    id: 'almacenaje',
    nombre: 'Almacenaje',
    titulo: 'El grano llega y se guarda',
    texto:
      'Silos galvanizados de fondo cónico o plano y silos de acero inoxidable. El grano se recibe, se pesa y queda almacenado en condiciones controladas hasta el inicio del proceso.',
  },
  {
    id: 'transporte',
    nombre: 'Transporte',
    titulo: 'Se mueve por la planta',
    texto:
      'Elevadores de cangilones, redlers, roscas helicoidales y cintas transportadoras conectan cada etapa. Un buen layout de transporte define el rendimiento real de la planta.',
  },
  {
    id: 'limpieza',
    nombre: 'Prelimpieza',
    titulo: 'Se separa lo que no es grano',
    texto:
      'Zarandas y columnas de aire retiran impurezas más grandes y más chicas que el grano, además del polvo. Es la etapa que protege todos los equipos que vienen después.',
  },
  {
    id: 'despedrado',
    nombre: 'Despedrado',
    titulo: 'Fuera piedras y metales',
    texto:
      'Los stoners usan succión y gravedad para eliminar piedras, partes metálicas y todo contaminante de peso específico mayor al del grano. Sin esta etapa, se destruyen los rodillos.',
  },
  {
    id: 'descascarado',
    nombre: 'Descascarado',
    titulo: 'Se quita la cáscara',
    texto:
      'Rodillos de goma enfrentados abren el grano de arroz sin quebrarlo. El tubo móvil acompaña el desgaste de los rodillos para mantener parejo el porcentaje de quebrado.',
  },
  {
    id: 'separado',
    nombre: 'Separado',
    titulo: 'Descascarado va por un lado, paddy por el otro',
    texto:
      'Mesas oscilantes con alvéolos separan el arroz descascarado del que todavía tiene cáscara, y lo devuelven al descascarador. Menos marineros en el producto final.',
  },
  {
    id: 'blanqueado',
    nombre: 'Blanqueado',
    titulo: 'Se pule el grano',
    texto:
      'Blanqueadores verticales y horizontales, y pulidoras de agua, retiran el afrechillo trabajando a baja temperatura y presión controlada para reducir el grano partido.',
  },
  {
    id: 'clasificado',
    nombre: 'Clasificado',
    titulo: 'Enteros, medios y quebrados',
    texto:
      'Zarandas clasificadoras y trieurs de alta precisión separan por tamaño. Los cilindros se fabrican con el alvéolo adecuado a la muestra real del cliente.',
  },
  {
    id: 'molienda',
    nombre: 'Molienda',
    titulo: 'El trigo se convierte en harina',
    texto:
      'Bancos de cilindros y plansifters trabajan en pasadas sucesivas: se muele, se tamiza, se purifica y se vuelve a moler hasta obtener la harina.',
  },
  {
    id: 'envasado',
    nombre: 'Pesaje y envasado',
    titulo: 'Sale envasado y paletizado',
    texto:
      'Balanzas de flujo y de embolse electrónicas, embolsadoras al vacío, cosedoras, robots de enfardado y paletizado, y etiquetadoras cierran el ciclo.',
  },
];

const IMG = 'assets/img/maquinas/';

export const productos = [
  // ─────────────────────────── LÍNEA ARROZ ───────────────────────────
  {
    slug: 'tqlz-maquina-seguridad-arroz',
    modelo: 'TQLZ',
    nombre: 'Máquina de seguridad aire/zaranda',
    subtitulo: 'Para grano seco, con columna de aire',
    linea: 'arroz',
    etapa: 'limpieza',
    imagen: IMG + 'TQLZt.jpg',
    destacado: true,
    resumen:
      'Limpieza y limpieza de seguridad en un solo equipo. Retira impurezas grandes, finas y polvo inmediatamente antes del envasado.',
    parrafos: [
      'Este equipo fue desarrollado para trabajar en dos funciones distintas e importantes en la industria arrocera y de otros cereales y granos.',
      'Actúa como eficiente MÁQUINA DE LIMPIEZA, retirando impurezas más grandes y más chicas que un grano de arroz y el polvo. Cada equipo podrá venir de fábrica configurado de acuerdo con las necesidades de cada industria.',
      'Como LIMPIEZA DE SEGURIDAD, es usada antes del empaquetado del producto, asegurando total ausencia de grandes y menores impurezas del producto seleccionado, inclusive polvo. Retira del arroz pulido los eventuales grumos de afrechillo y otras impurezas como insectos, piedras y otros cuerpos extraños más grandes que un grano de arroz.',
      'Usado inmediatamente antes de las máquinas de empaquetado, este equipo elimina también impurezas finas como polvo, pequeños granos quebrados de arroz, puntas de arroz e insectos pequeños entre otros. Es el mejor, más compacto, más eficiente y más económico equipo para que su industria tenga la seguridad de una eficaz eliminación de elementos extraños en sus paquetes.',
    ],
    caracteristicas: [
      'Construcción extremadamente robusta y con muy buena terminación, aspecto elegante que valoriza su industria.',
      'Equipo sellado, inmune a la producción de polvo en el ambiente en que está instalado.',
      'Funcionamiento extremadamente silencioso, bajo consumo de energía.',
      'Movimientos estables, sistema de autolimpieza de zarandas.',
      'Alta producción y eficiencia de selección.',
      'Equipados con dos motorreductores, poseen ajuste de inclinación, de dirección de la inclinación, de vibración y de alimentación.',
      'Separación perfecta de grandes y pequeñas impurezas: remueve grumos de afrechillo, polvo y pequeños granos quebrados sin causar pérdida o partido de granos enteros, manteniendo el brillo del arroz.',
      'De fácil instalación: equipo compacto, liviano y de fácil manejo, sin vibraciones, puede ser instalado arriba de los silos de empaquetado o próximo al elevador que los alimenta.',
      'Fácil mantenimiento: sólida estructura y pocas piezas movibles, lo que garantiza muy baja manutención y gastos de operador.',
    ],
    tabla: {
      columnas: ['Modelo', 'Producción', 'Potencia', 'Aire m³/h', 'Peso', 'Dimensiones mm'],
      filas: [
        ['TQLZ 150×200', '9 ~ 15 t/h', '0,75 kW ×2', '4.800 ~ 7.200', '1.100 kg', '2616 × 1995'],
        ['TQLZ 125×200', '9 ~ 12 t/h', '0,75 kW ×2', '4.500 ~ 2.550', '1.000 kg', '2703 × 2324'],
        ['TQLZ 100×200', '8 ~ 12 t/h', '0,38 kW ×2', '3.600 ~ 4.500', '900 kg', '2640 × 1610'],
        ['TQLZ 80×150', '5 ~ 8 t/h', '0,20 kW ×2', '2.600 ~ 3.000', '650 kg', '2455 × 1286'],
      ],
    },
  },
  {
    slug: 'tqlm-125-prelimpieza-rotativa',
    modelo: 'TQLM 125',
    nombre: 'Prelimpieza rotativa',
    linea: 'arroz',
    etapa: 'limpieza',
    imagen: IMG + 'TQLM.jpg',
    destacado: true,
    resumen:
      'Prelimpieza compacta bajo norma ISO 9001. Elimina impurezas grandes y pequeñas, semillas chicas y polvo en un solo paso.',
    parrafos: [
      'Esta prelimpieza de elegante diseño y construcción robusta está fabricada bajo las normas de calidad ISO 9001.',
      'Sustituye a las prelimpiezas que se adaptaban para el uso de prelimpieza final, que ocupaban un espacio muy grande, generando ruido y polvo, afeando y contaminando las industrias de granos, y dejando además mucho que desear en cuanto a su funcionalidad.',
      'Combinada con captor de polvo, disponible para el modelo, estos equipos tienen varias funciones al mismo tiempo: eliminan las impurezas grandes, las pequeñas, las semillas chicas, el polvo y otras impurezas del producto seleccionado.',
      'Hay una gran variedad de zarandas que se seleccionan según el producto que se limpiará, y permite el ajuste de la rotación y del peso del block de balanceo, modificando la amplitud y logrando una óptima limpieza del producto.',
    ],
    caracteristicas: [
      'Construcción compacta, funcionamiento estable y silencioso.',
      'Efectiva limpieza y poco ruido en trabajo.',
      'Bajo consumo de energía.',
      'Ocupa poco espacio físico.',
      'Moderno y agradable diseño, construcción robusta y excelente terminación.',
    ],
    fichas: [
      ['Capacidad', '8 ~ 25 t/h'],
      ['Ancho de la zaranda', '1.250 mm'],
      ['Ángulo de inclinación', '7,5°'],
      ['Rotaciones por minuto', '300 – 400 – 500'],
      ['Potencia', '0,75 kW'],
      ['Volumen de aire', '55 m³/min'],
      ['Peso', '800 kg'],
      ['Dimensiones', '2.140 × 1.650 × 1.460 mm'],
    ],
  },
  {
    slug: 'tqs-stoner-eliminador-piedras',
    modelo: 'TQS',
    nombre: 'Stoner — eliminador de piedras',
    linea: 'arroz',
    etapa: 'despedrado',
    imagen: null,
    resumen:
      'Succión y gravedad para eliminar piedras, metales y contaminantes de mayor peso específico. Sirve también para poroto, soja, trigo y maní.',
    parrafos: [
      'Los eliminadores de piedras GREEN HORSE usan succión y gravedad para hacer perfecto el trabajo.',
      'Además de arroz, pueden ser utilizados en otros granos o productos granulados como poroto, soja, trigo, maní, plástico granulado, etc. Son de gran importancia en el procesado de estos productos, eliminando piedras y otros contaminantes de peso específico más elevado que el producto seleccionado.',
    ],
    caracteristicas: [
      'Alta eficiencia en la remoción de piedras, partes metálicas y otras impurezas, garantizando al producto seleccionado la pureza y la integridad de los equipos que lo preceden.',
      'La variación de la inclinación de estos equipos varía de 10° a 14° dependiendo del producto seleccionado. Este regulado permite el mejor efecto para cada producto.',
      'Equipos totalmente sellados, con ventilador externo, garantizando su total limpieza en el local donde será instalado.',
      'El polvo que se genera en el manejo es ciclonado y retirado para su destino final.',
      'Los sistemas de articulación provienen de los rodillos, lo que garantiza la durabilidad y el trabajo estable, además de poco ruido.',
    ],
    tabla: {
      columnas: ['Modelo', 'Capacidad', 'Potencia', 'Dimensiones mm', 'Peso'],
      filas: [
        ['TQS ×85', '4,0 ~ 6,0 t/h', '0,75 kW', '1545 × 980 × 1982', '350 kg'],
        ['TQS ×100', '5,0 ~ 7,0 t/h', '0,75 kW', '1545 × 1130 × 1982', '380 kg'],
        ['TQS ×125', '6,0 ~ 8,0 t/h', '1,1 kW', '1545 × 1380 × 1982', '450 kg'],
      ],
    },
  },
  {
    slug: 'tqsf-stoner-motor-vibrador',
    modelo: 'TQSF',
    nombre: 'Stoner con motor vibrador',
    linea: 'arroz',
    etapa: 'despedrado',
    imagen: IMG + 'TQSF.jpg',
    destacado: true,
    resumen:
      'Eliminador de piedras accionado por motores vibradores. Modelos para todas las necesidades, de 5 a 15 t/h.',
    parrafos: [
      'Los eliminadores de piedras GREEN HORSE usan succión y gravedad para hacer perfecto el trabajo.',
      'Además de arroz, pueden ser utilizados en otros granos o productos granulados como poroto, soja, trigo, maní, plástico granulado, etc. Son de gran importancia en el procesado de estos productos, eliminando piedras y otros contaminantes de peso específico más elevado que el producto seleccionado.',
    ],
    caracteristicas: [
      'Alta eficiencia en la remoción de piedras, partes metálicas y otras impurezas.',
      'Inclinación regulable de 10° a 14° según el producto seleccionado.',
      'Equipos totalmente sellados, con ventilador externo.',
      'El polvo generado es ciclonado y retirado para su destino final.',
      'Sistemas de articulación sobre rodillos: durabilidad, trabajo estable y poco ruido.',
    ],
    tabla: {
      columnas: ['Modelo', 'Capacidad', 'Potencia', 'Dimensiones mm', 'Peso'],
      filas: [
        ['TQSF 100 × 2', '5,0 ~ 12 t/h', '0,3 kW ×2', '1580 × 1316 × 1875', '500 kg'],
        ['TQSF 120 × 2', '6,0 ~ 15 t/h', '0,3 kW ×2', '1580 × 1516 × 1875', '600 kg'],
      ],
    },
  },
  {
    slug: 'mlgq-25-descascarador',
    modelo: 'MLGQ 25',
    nombre: 'Descascarador de arroz',
    linea: 'arroz',
    etapa: 'descascarado',
    imagen: null,
    destacado: true,
    resumen:
      'Descascarador con tubo móvil que acompaña el desgaste de los rodillos, manteniendo bajo el porcentaje de grano quebrado.',
    parrafos: [
      'El nuevo descascarador de arroz modelo MLGQ 25 acompaña la tendencia mundial, iniciada en Alemania, de un sistema alimentador que posee caja para acondicionamiento de los granos y controlar mayor velocidad de los mismos.',
      'Como la mayoría de los descascaradores de esta tendencia, utiliza rodillos descascaradores de 10" × 10" y, como opción si el cliente así lo deseara, los rodillos descascaradores N.º 5.',
      'El modelo GREEN HORSE MLGQ 25 muestra como diferencial la calidad de los materiales empleados en su producción y la moderna tecnología de fabricación con el uso de corte láser, balanceado electrónico y pintura en epoxi fundido, con mayor robustez que se puede verificar por la diferencia de peso entre este modelo y los otros que están en el mercado.',
      'Lo que hace la gran diferencia es el tubo, que es movible, acompañando de esta manera el desgaste de los rodillos descascaradores, tirando siempre los granos de arroz en el espacio entre los dos rodillos, disminuyendo el porcentaje de granos quebrados.',
    ],
    fichas: [
      ['Capacidad de producción', '5 ~ 6 t/h'],
      ['Dimensiones', '1.500 × 1.780 × 2.800 mm'],
      ['Potencia', '7,5 kW + 3,7 kW'],
      ['Rodillos de goma', '10" × 10" o N.º 5'],
      ['Peso líquido', '1.230 kg'],
    ],
  },
  {
    slug: 'mgcz-separador-paddy',
    modelo: 'MGCZ 40×20',
    nombre: 'Separador de paddy de alta eficiencia',
    linea: 'arroz',
    etapa: 'separado',
    imagen: null,
    resumen:
      'Mesas oscilantes con alvéolos patentados para grano largo y súper largo. Menos retornos y menos marineros en el descascarado.',
    parrafos: [
      'Separador de paddy de tableros oscilantes, con mecánica de alta calidad y excelente balanceado, que lo hacen un producto diferente a los equipos tradicionales disponibles en el mercado.',
      'Las piezas más importantes son fabricadas en acero alemán en una fábrica moderna con equipos de corte láser y balanceado electrónico.',
      'Las nuevas bandejas patentadas, con alvéolos con el tamaño especial para el grano largo y súper largo, aumentan su capacidad y eficiencia de separación, reduciendo los retornos y disminuyendo en gran cantidad el número de marineros junto al arroz descascarado.',
      'Se pueden suministrar bandejas (zarandas) con alvéolos para grano corto o grano medio, como extras, para lograr mayor eficiencia de acuerdo al tipo de grano.',
    ],
    caracteristicas: [
      'Construcción mecánica robusta y acabado impecable.',
      'Nuevo sistema constructivo que evita el desbalanceo común de los equipos tradicionales.',
      'Adopta patrones de calidad internacionales; su fabricación es realizada en su mayoría en aceros alemanes de la más alta calidad.',
      'Provistos de sistema automático de parada y partida y sistema de control de flujo.',
      'Ocupa menor área en relación con la productividad alcanzada.',
    ],
    fichas: [
      ['Modelo', 'MGCZ 40 × 20 × 2'],
      ['Producción', '6,0 ~ 8,0 t/h'],
      ['Consumo', '2,2 kW'],
      ['Dimensiones', '1805 × 2230 × 2240 mm'],
      ['Peso', '1.160 kg'],
    ],
  },
  {
    slug: 'mjxh-clasificador-perfil',
    modelo: 'MJXH 29×6',
    nombre: 'Clasificador de perfil de cilindro ondulado',
    linea: 'arroz',
    etapa: 'clasificado',
    imagen: IMG + 'MJXH.jpg',
    resumen:
      'Elimina mecánicamente los granos yesados, reduciendo hasta un 50% la necesidad de selectores electrónicos.',
    parrafos: [
      'La característica principal de un buen clasificador de perfil es que tenga sus cilindros de clasificación ondulados. Estas ondulaciones ubican los granos de arroz de forma de permitir una ubicación perfecta para su selección.',
      'Si el cilindro de selección de un equipo similar fuera liso, descarte la oferta: es una imitación grosera e ineficiente. Es verdad que seleccionan algunos granos, pero también es verdad que dejan pasar la mayoría de los granos yesados.',
      'La función principal de este equipo es eliminar mecánicamente los granos yesados, disminuyendo así la necesidad de selectores electrónicos en hasta 50% o más, dependiendo del producto que se seleccione.',
    ],
    caracteristicas: [
      'Construcción mecánica perfecta, excelente terminación y apariencia.',
      'Zaranda realizada en material de alta resistencia, con cortes realizados con precisión al nivel de décima de milímetro.',
      'Distintas aberturas disponibles, ya que los granos de arroz varían su tamaño de acuerdo con la variedad y las variaciones climáticas de la zafra.',
      'Sistema autolimpiante equipado con rubber strips de alta duración.',
      'Funcionamiento suave, poco ruido, con sistema de recogida de polvo entrelazado en el sistema general de la industria.',
    ],
    fichas: [
      ['Capacidad', '6,00 t/h'],
      ['Potencia', '1,10 + 0,55 kW'],
      ['Dimensiones', '2.000 × 1.050 × 2.350 mm'],
      ['Peso', '850 kg'],
    ],
  },
  {
    slug: 'mnml-40-blanqueador-vertical',
    modelo: 'MNML 40',
    nombre: 'Blanqueador vertical de alta eficiencia',
    linea: 'arroz',
    etapa: 'blanqueado',
    imagen: null,
    destacado: true,
    resumen:
      'Aceros y rulemanes de origen alemán, presión controlada y menor calentamiento del grano. Garantiza el menor porcentaje de quebrados.',
    parrafos: [
      'Diseñado y producido dentro de las mejores técnicas y equipos disponibles, estos equipos de muy linda apariencia y muy buena calidad emplean los mejores materiales para su fabricación, como aceros y rulemanes de origen alemán. Su excelente terminación garantiza por sí misma la mejor calidad entre los equipos semejantes.',
    ],
    caracteristicas: [
      'Excelente durabilidad, adoptando normas de calidad internacionales, complementado con partes importadas de la mejor calidad.',
      'Piezas de desgaste de alta calidad, fabricadas con los mejores equipos y las mejores materias primas.',
      'Equipado con eficientes controles de amperaje y condiciones de trabajo como presión negativa.',
      'Controles visibles con la posibilidad de la automatización total.',
      'El diseño interno permite remover con facilidad el salvado; trabaja con presión controlada realizando menor esfuerzo sobre los granos y menor calentamiento de los mismos.',
      'Garantiza el menor porcentaje de granos quebrados.',
    ],
    fichas: [
      ['Capacidad', '4,0 ~ 5,0 t/h'],
      ['Potencia', '37 ~ 45 kW'],
      ['Dimensiones', '1665 × 1028 × 1990 mm'],
      ['Peso', '1.200 kg'],
    ],
  },
  {
    slug: 'mnml-46-separador-alta-eficiencia',
    modelo: 'MNML 46',
    nombre: 'Separador de alta eficiencia',
    linea: 'arroz',
    etapa: 'blanqueado',
    imagen: null,
    resumen:
      'Versión de mayor capacidad de la línea MNML, de 5 a 7 t/h, con control de presión negativa.',
    parrafos: [
      'Diseñado y producido dentro de las mejores técnicas y equipos disponibles, emplea los mejores materiales para su fabricación, como aceros y rulemanes de origen alemán, con una terminación que garantiza la mejor calidad entre los equipos semejantes.',
    ],
    caracteristicas: [
      'Excelente durabilidad, adoptando normas de calidad internacionales.',
      'Piezas de desgaste de alta calidad.',
      'Eficientes controles de amperaje y de presión negativa.',
      'Controles visibles con posibilidad de automatización total.',
      'Presión controlada: menor esfuerzo sobre los granos y menor calentamiento.',
    ],
    fichas: [
      ['Capacidad', '5,0 ~ 7,0 t/h'],
      ['Potencia', '45 ~ 55 kW'],
      ['Velocidad del eje principal', '455 – 580 rpm'],
      ['Presión negativa', '100 – 150 mmH₂O'],
      ['Volumen de aire', '50 m³/min'],
      ['Peso', '1.300 kg aprox.'],
    ],
  },
  {
    slug: 'mnms-30a-blanqueadora-horizontal',
    modelo: 'MNMS 30A',
    nombre: 'Blanqueadora horizontal',
    linea: 'arroz',
    etapa: 'blanqueado',
    imagen: null,
    resumen:
      'Blanqueado a baja temperatura con fuerte presión negativa. El equipo ideal para plantas de hasta 100 toneladas por día.',
    parrafos: [
      'El nuevo blanqueador horizontal MNMS 30A proviene de una línea tradicional de blanqueadores desarrollada inicialmente en Japón, compuesta con nueva tecnología de producción en conjunción con materiales nobles como los aceros alemanes.',
      'Su construcción es robusta, compacta, con excelente terminación y muy linda apariencia, lo que valoriza su industria y la de sus clientes.',
      'Baja temperatura de blanqueado: con una fuerte presión negativa, este equipo funciona con baja temperatura en los granos, lo que genera una menor cantidad de granos partidos y la extracción integral del afrechillo/salvado producido. Es el equipo ideal para unidades de producción de hasta 100 toneladas/día, por su precio, productividad y fácil manejo.',
    ],
    caracteristicas: [
      'Excelente apariencia.',
      'Mecánicamente estable, de construcción compacta, fácil manejo y mantenimiento.',
      'Con su fuerte presión negativa se ve una disminución de granos quebrados; el arroz producido es de la más alta calidad y la retirada del afrechillo es también muy potente.',
      'Display que indica la presión negativa y permite su ajuste.',
      'Su rotación puede ser ajustada para obtener el mejor bruñido de todas las variedades del arroz.',
    ],
    fichas: [
      ['Capacidad', '4 ~ 5 t/h'],
      ['Potencia', '37 ~ 45 kW'],
      ['Velocidad del eje principal', '630 – 930 rpm'],
      ['Presión negativa', '150 – 200 mmH₂O'],
    ],
  },
  {
    slug: 'cm-pulidora-agua-horizontal',
    modelo: 'CM',
    nombre: 'Pulidora de agua horizontal simple y doble',
    linea: 'arroz',
    etapa: 'blanqueado',
    imagen: null,
    destacado: true,
    resumen:
      'Nueve modelos de 1 a 5 t/h. El pulidor doble hace el trabajo de tres pulidores convencionales usando 70 cv en vez de 120.',
    parrafos: [
      'Estos modelos horizontales de alta capacidad de producción, construidos dentro de las técnicas de última generación y desarrollados por el departamento de ingeniería, son la mejor noticia para el industrial arrocero surgida en los últimos años.',
      'Producidos en dos modelos, con una y dos cámaras de pulido y dos preacondicionadores.',
    ],
    caracteristicas: [
      'Diseño de última generación, atractiva apariencia, construcción robusta, fácil y seguro manejo.',
      'La existencia de humidificadores permite el uso de la cámara de pulido en su totalidad, a diferencia de los equipos tradicionales tipo KB y otros, en que parte de la cámara es usada para la humidificación y parte para el pulido propiamente dicho, sin la necesaria homogeneización.',
      'Zarandas de 12 caras, diferentes de las tradicionales de 8 caras. Esto hace que la cámara de pulido sea menos agresiva, dañando menos los granos. Zarandas de acero inoxidable alemán endurecido de alta calidad.',
      'Economiza energía: el pulidor doble realiza el trabajo de tres pulidores horizontales convencionales usando apenas 70 cv, mientras que tres pulidores tradicionales usarían 120 cv.',
      'Economiza área construida y equipos de elevación y tempering. El pulidor doble ocupa el espacio de un pulidor convencional y realiza un pulido equivalente a 3 pasadas.',
      'La existencia de humidificadores elimina el uso de silos de tempering y de varios equipos de movimiento: un proyecto más compacto, más económico y de más fácil manejo.',
      'Inyectores de agua accionados por bomba de alta presión, evitando el uso de aire comprimido y por consecuencia sus costos y riesgos.',
      'Sistema de sensores de seguridad que cortan el agua en el momento exacto de carencia de arroz en el sistema.',
      'Equipos completos: cuadro de comando y controles, sistema de filtrado y bombeado de agua, sistema de regulado de picos inyectores en los humidificadores y en los ejes, y control de temperatura de salida del grano.',
    ],
    tabla: {
      columnas: ['Modelo', 'Producción', 'Potencia kW', 'Dimensiones mm'],
      filas: [
        ['CM 14 × 1', '1,0 ~ 1,5 t/h', '22 ~ 30 + 5,5', '1480 × 740 × 2150'],
        ['CM 16 × 1', '1,5 ~ 2,0 t/h', '30 ~ 37 + 7,5', '1700 × 850 × 2420'],
        ['CM 17 × 1', '2,0 ~ 3,0 t/h', '37 + 7,5', '2130 × 720 × 2170'],
        ['CM 18 × 1', '2,5 ~ 3,5 t/h', '37 ~ 45 + 7,5', '2070 × 1440 × 1990'],
        ['CM 21 × 1', '3,5 ~ 4,5 t/h', '45 ~ 55 + 7,5', '2940 × 1540 × 2070'],
        ['CM 12 × 2', '1,5 ~ 2,0 t/h', '30 ~ 37 + 5,5', '1620 × 1300 × 2420'],
        ['CM 16 × 2', '2,5 ~ 3,2 t/h', '37 ~ 55 + 7,5', '1800 × 1450 × 2670'],
        ['CM 18 × 2', '2,8 ~ 3,5 t/h', '45 ~ 55 + 11,0', '2130 × 1620 × 2800'],
        ['CM 21 × 2', '3,5 ~ 5,0 t/h', '55 ~ 75 + 11,0', '2035 × 1470 × 2605'],
      ],
      nota:
        'x1 = una cámara de pulido · x2 = dos cámaras de pulido. Potencia de aspiración 200 – 300 mmH₂O · Volumen 3.500 – 4.000 m³/hora · Velocidad 19 – 20 m/segundo.',
    },
  },
  {
    slug: 'mmjp-clasificador-vibratorio',
    modelo: 'MMJP',
    nombre: 'Clasificador vibratorio de arroz y otros granos',
    linea: 'arroz',
    etapa: 'clasificado',
    imagen: null,
    resumen:
      'Acumula las funciones de las zarandas de clasificación y de los trieurs. Ideal para empresas de pequeño y medio porte.',
    parrafos: [
      'Se trata de un clasificador vibratorio que acumula las funciones de las zarandas de clasificación y de los trieurs. Es ideal para empresas de pequeño y medio porte porque reduce en gran cantidad la inversión en equipos, además de ocupar una pequeña área construida, eliminando varios equipos de transporte y reduciendo los costos operacionales y de mantenimiento.',
      'Dispone de centenas de telas de especificaciones diferentes, pudiendo instalarse personalizado para su industria.',
      'La separación de enteros y quebrados es excelente: no se encuentran más del 5% de granos quebrados junto a los granos enteros seleccionados (arroz tipo 1, grano premium). De esta manera no se encontrarán ½ granos ni granos enteros junto a los quebrados chicos.',
      'En la búsqueda de un producto con 100% de granos enteros, puede ser instalado antes de un trieur.',
    ],
    caracteristicas: [
      'Compacto y de buena construcción. Ajustes precisos, rotación variable y fácil manejo.',
      'Alta performance.',
      'Sistema automático de limpieza de zarandas.',
      'Dispone de 4 capas de zarandas, con bajo nivel de granos quebrados grandes junto a los enteros (menos de 5%).',
      'Trabajo estable y silencioso.',
      'Tres modelos a su disposición.',
    ],
    tabla: {
      columnas: ['Modelo', 'Capacidad', 'Potencia', 'Peso'],
      filas: [
        ['MMJP 100 × 3', '2,0 ~ 3,0 t/h', '1,10 kW', '620 kg'],
        ['MMJP 100 × 4', '2,5 ~ 3,5 t/h', '1,10 kW', '656 kg'],
        ['MMJP 120 × 4', '3,5 ~ 4,5 t/h', '1,10 kW', '720 kg'],
      ],
    },
  },
  {
    slug: 'mdjy-trieur-alta-precision',
    modelo: 'MDJY 50×3',
    nombre: 'Trieur de alta precisión',
    linea: 'arroz',
    etapa: 'clasificado',
    imagen: IMG + 'MDJY.jpg',
    destacado: true,
    resumen:
      'Se fabrica a medida: enviamos muestras de su producto para definir el alvéolo exacto de los cilindros de clasificación.',
    parrafos: [
      'Disponemos de varios modelos de trieurs de alta precisión, con un gran número de tamaños de alvéolos para ejecutar con perfección la selección deseada.',
      'Al principio trabajamos enviando muestras de los productos que el comprador del trieur seleccione (granos enteros, ¾, ½ y quebrados chicos); de esa forma su equipo es fabricado de acuerdo con su producto, personalizado.',
    ],
    caracteristicas: [
      'Construcción sólida y elegante, excelente apariencia y mecánica de alta calidad.',
      'Diseño moderno, ocupa poco espacio en su industria.',
      'Sistema de alimentación de los cilindros de clasificación especialmente diseñado para permitir mayor productividad y homogeneidad en la alimentación.',
      'Cilindros con superficie endurecida para su mayor durabilidad.',
      'Accionado individual de los cilindros con motorreductores.',
    ],
    fichas: [
      ['Producción', '3,3 t/h'],
      ['Potencia', '0,75 kW × 3'],
      ['Peso', '1.000 kg'],
      ['Dimensiones', '3000 × 640 × 2265 mm'],
    ],
  },

  // ─────────────────────────── LÍNEA TRIGO ───────────────────────────
  {
    slug: 'tqlz-limpieza-automatica-trigo',
    modelo: 'TQLZ',
    nombre: 'Limpieza automática',
    linea: 'trigo',
    etapa: 'limpieza',
    imagen: null,
    resumen: 'Dos pisos de zarandas y doble motor vibrador. Bajo costo y bajo nivel sonoro de operación.',
    parrafos: [],
    caracteristicas: [
      'Excelente diseño de avanzada que garantiza una vida útil de muchos años.',
      'Dos pisos de zarandas dan a la máquina los mejores efectos de limpieza.',
      'La oblicuidad de la red de tamiz es ajustable al flujo del material.',
      'Dos motores vibradores dirigen la máquina de manera simple y de función suave.',
      'Bajo costo y bajo sonido de operación.',
    ],
  },
  {
    slug: 'tqlmz-limpieza-automatica-trigo',
    modelo: 'TQLMZ',
    nombre: 'Limpieza automática de tres movimientos',
    linea: 'trigo',
    etapa: 'limpieza',
    imagen: IMG + 'limpieza_trigo.jpg',
    resumen:
      'Movimiento en círculo, en elipse y en línea recta combinada, con dos mallas de tamizado de hoyos redondos.',
    parrafos: [],
    caracteristicas: [
      'Diseño de avanzada y de manufactura excelente.',
      'Tres movimientos: en círculo, en elipse y en línea recta combinada.',
      'Dos mallas de tamizado con hoyos redondos hacen que la máquina separe las impurezas gruesas y finas de manera eficiente.',
      'El dispositivo de presión firme en el cuello en ambos lados del tamiz permite hacerlo de manera uniforme hacia arriba, abajo, derecha e izquierda.',
      'El sistema de suspensión con cable de acero reduce la resistencia del movimiento, ajustándose libremente.',
      'Con el hueco mirador en el techo se hace más fácil observar y limpiar la superficie del tamiz.',
    ],
  },
  {
    slug: 'tqsf-saca-piedras-trigo',
    modelo: 'TQSF',
    nombre: 'Saca piedras / selector de gravedad',
    linea: 'trigo',
    etapa: 'despedrado',
    imagen: null,
    resumen:
      'Doble función: clasifica el cereal en piezas ligeras y pesadas, y separa piedras, vidrio o metal.',
    parrafos: [
      'El selector de gravedad TQSF realiza una separación continua de la piedra de la corriente de granos y califica el cereal en piezas ligeras y pesadas. Esta máquina tiene una superficie de trabajo con dos tamices: el primero divide el flujo en piezas ligeras y pesadas; el segundo separa los cuerpos extraños con pesos mayores que el del grano, tales como piedras o partes de cristal o metal.',
    ],
    caracteristicas: [
      'Doble función: clasificador y sacador de piedras, separa el grano en pesados y ligeros.',
      'Sin escape del polvo hacia fuera y bajo nivel de sonido operacional; es eficiente y seguro.',
      'Su diseño moderno hace que la máquina trabaje suave y con un mínimo de mantenimiento.',
    ],
  },
  {
    slug: 'fsfj-mono-plansifter',
    modelo: 'FSFJ Mono',
    nombre: 'Plansifter mono',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: IMG + 'tamizado_trigo.jpg',
    resumen: 'Tamizado con motor de auto-balance bajo el cuerpo de la máquina. Instalación y desmontaje libres.',
    parrafos: [],
    caracteristicas: [
      'Diseño razonable de excelente fabricación, el mejor equipo para testeo del material.',
      'Tamiz de marco de metal y plástico en las dos superficies.',
      'Manejo del motor con auto-balance bajo el cuerpo de la máquina.',
      'Marco ajustado al tamiz en sentido vertical y horizontal, previene la pérdida de material hacia fuera.',
      'Motor de alta velocidad y ciclo circular de pequeño diámetro permiten un alto efecto de tamizado.',
      'Sin suspensión: instalado y desmantelado libre.',
    ],
  },
  {
    slug: 'fsfj-doble-plansifter',
    modelo: 'FSFJ Doble',
    nombre: 'Plansifter doble',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: null,
    resumen: 'Dos o cuatro secciones para un área de tamizado mayor, con presurización confiable.',
    parrafos: [],
    caracteristicas: [
      'Diseño razonable de excelente fabricación, el mejor equipo para testeo del material.',
      'Tamiz de marco de metal y plástico en las dos superficies.',
      'Manejo del motor con auto-balance bajo el cuerpo de la máquina.',
      'Presurización confiable que previene la pérdida de material hacia fuera.',
      'Máquina con dos o cuatro secciones que provee un área de tamizado grande, permitiendo un buen efecto de tamizado.',
      'Sin suspensión: instalado y desmantelado libre.',
    ],
  },
  {
    slug: 'fsfg-plansifter',
    modelo: 'FSFG',
    nombre: 'Plansifter',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: null,
    resumen: 'Marco de acero cortado con láser y compactado con prensa de freno, soldadura con gas CO₂.',
    parrafos: [],
    caracteristicas: [
      'Técnica de absorción avanzada hace de nuestro plansifter el mejor diseño.',
      'Diseño compacto: marco del tamiz de acero, tablero superior e inferior de acero compactado por prensa de freno. Marco de base del tamiz formado con poste de aleación de acero.',
      'Todo el marco de acero cortado con rayo láser y compactado con prensa de freno.',
      'Sistema de soldadura de gas CO₂.',
      'Test de vibración de grado rápido en el método de soldado.',
    ],
  },
  {
    slug: 'ms-roller-miller',
    modelo: 'MS',
    nombre: 'Roller Miller — banco de cilindros',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: null,
    resumen: 'Rodillos de 250 o 350 mm de diámetro, 4 u 8 por unidad, con control neumático.',
    parrafos: [],
    caracteristicas: [
      'Las planchas de acero han sido cortadas con láser y ensambladas en una prensa CNC.',
      'Construido en dos partes, incluyendo una base de hierro moldeado y una estructura de acero.',
      'Superficie pintada con pintura de spray electrostática. Capa externa de acero finalizada con cocción en horno.',
      'Diseño modular removible de los rodillos de alimentación.',
      'Ajuste manual de rueda, proveyendo un control de los rodillos de molido usando cilindros de aire.',
      'Doble canal de aspiración para reducir el calor y maximizar el flujo del producto.',
      'El molino de rodillo puede ser diseñado y ajustado a sus requerimientos.',
      'Controles eléctricos neumáticos.',
    ],
    fichas: [
      ['Tamaños de rodillo', '250 mm o 350 mm de diámetro'],
      ['Rodillos por unidad', '4 u 8'],
    ],
  },
  {
    slug: 'msd-roller-miller',
    modelo: 'MSD',
    nombre: 'Roller Miller — banco de cilindros',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: IMG + 'MSD.jpg',
    destacado: true,
    resumen:
      'Diseñado en CAD, cuerpo de acero inoxidable y base de acero fundido sólido. Rulemanes SKF, neumática SMC y electrónica Siemens.',
    parrafos: [
      'El rollermill ha sido diseñado en sistemas CAD. Las planchas de acero han sido cortadas con láser y el ensamblado de los componentes se ha hecho con centros de control numérico.',
    ],
    caracteristicas: [
      'Cuerpo de planchas de acero inoxidable y base de una pieza entera de acero fundido sólido.',
      'Los rodillos de alimentación están dirigidos por un motor electrónico controlado vía un inversor de variación automática de la velocidad.',
      'Diseño del sistema de alimentación removible.',
      'La transmisión entre los dos rodillos de moler se realiza por medio de una correa dentada.',
      'Remover los rodillos de moler se realiza en un simple bloque, de manera simple y rápida.',
      'Cojinetes SKF, cilindros neumáticos SMC y elementos electrónicos Siemens.',
    ],
  },
  {
    slug: 'lsm20-roller-miller',
    modelo: 'LSM20',
    nombre: 'Roller Miller — banco de cilindros',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: IMG + 'bancocilindros_trigo.jpg',
    resumen: 'Banco de cilindros con doble canal de aspiración y ajuste neumático de los rodillos de molido.',
    parrafos: [],
    caracteristicas: [
      'Las planchas de acero han sido cortadas con láser y ensambladas en una prensa CNC.',
      'Construido en dos partes, incluyendo una base de hierro moldeado y una estructura de acero.',
      'Superficie pintada con pintura de spray electrostática. Capa externa de acero finalizada con cocción en horno.',
      'Diseño modular removible de los rodillos de alimentación.',
      'Ajuste manual de rueda, proveyendo un control de los rodillos de molido usando cilindros de aire.',
      'Doble canal de aspiración para reducir el calor y maximizar el flujo del producto.',
      'Controles eléctricos neumáticos.',
    ],
    fichas: [
      ['Tamaños de rodillo', '250 mm o 350 mm de diámetro'],
      ['Rodillos por unidad', '4 u 8'],
    ],
  },
  {
    slug: 'fqfd-purificador-mesa-densimetrica',
    modelo: 'FQFD',
    nombre: 'Purificador de mesa densimétrica',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: IMG + 'purificadores_trigo.jpg',
    resumen: 'Cuatro tipos a elección: 750, 590, 490 y 380. Estructura en aleación de aluminio.',
    parrafos: [],
    caracteristicas: [
      'Diseño de avanzada. Varios modelos a elección del cliente: tipo 750, 590, 490, 380.',
      'Todas las planchas de acero cortadas con máquina cortadora láser, plegadas en prensa de doble.',
      'Soldadas con sistema de protección con gas CO₂ y técnica especial de ensamblado y soldado.',
      'Tablero de aleación de aluminio, en lugar de acero, para una mayor calidad.',
      'Superficie principal resbaladiza y marco de tamiz con aleación de aluminio adaptada.',
      'Poste de cepillo de plástico y poste deslizante de acero inoxidable.',
      'Pecho de entrada y canal de transporte de aleación de aluminio.',
      'Caña de caucho de importación. Resortes importados y adaptados.',
      'Hélice de aspiración entera y motor vibrador doble con modo de conducción.',
    ],
  },
  {
    slug: 'fslz-disgregador',
    modelo: 'FSLZ',
    nombre: 'Disgregador',
    linea: 'trigo',
    etapa: 'molienda',
    imagen: null,
    resumen: 'Versiones verticales y horizontales, con rotor testeado por balance.',
    parrafos: [],
    caracteristicas: [
      'Excelente diseño de avanzada que garantiza una vida útil de muchos años.',
      'Testeo de rotor por balance hace a la máquina operar suavemente.',
      'Perno redondo y cuadrado hechos con tratamientos especiales de calor hacen que la máquina funcione de forma óptima durante muchos años.',
      'Varios tipos (verticales y horizontales) a elegir según necesidades del cliente.',
    ],
  },
  {
    slug: 'tblm-filtro-de-manga',
    modelo: 'TBLM',
    nombre: 'Filtro de manga',
    linea: 'trigo',
    etapa: 'filtrado',
    imagen: IMG + 'quitaimpuresas_trigo.jpg',
    resumen: 'De 26 a 156 tubos de envestidura, en largos de 1800, 2000 y 2400 mm.',
    parrafos: [],
    caracteristicas: [
      'Método de fabricación avanzada. Todo el tablero de acero fue cortado con láser, con tubos de paño asegurados y ordenados de manera igualitaria para una fácil instalación.',
      'Protectores de soldadura con gas CO₂.',
      'Planchas de acero de alta calidad.',
      'Válvula sopladora eléctrica y partes de control de mejor calidad.',
      'Envestidura de filtro de la mejor calidad. Motor y bolsa de aire de la mejor calidad.',
      'Filtro inyector de aire de alta calidad con instrumentación anti-presión.',
      'Diseño acorde a las exigencias del cliente (como presión alta y baja del ventilador).',
    ],
    fichas: [
      ['Modelos disponibles', '26, 39, 52, 78, 104, 130 y 156 tubos de envestidura'],
      ['Largos', '1800, 2000 y 2400 mm'],
    ],
  },
  {
    slug: 'fdmw-quitador-impurezas',
    modelo: 'FDMW',
    nombre: 'Quitador de impurezas',
    linea: 'trigo',
    etapa: 'limpieza',
    imagen: null,
    resumen: 'Red de tamiz en acero inoxidable y tablero de forma especial para gran capacidad.',
    parrafos: [],
    caracteristicas: [
      'Diseño de avanzada: rotor de testeo por balance hace que la máquina opere de manera suave.',
      'Superficie del tablero con tratamiento de calor: buena terminación de la superficie.',
      'Red del tamiz hecha en acero inoxidable, favoreciendo un funcionamiento eficiente.',
      'Tablero con forma especial que le brinda a la máquina una gran capacidad y eficiencia.',
      'Ajuste y manejo sencillo.',
    ],
  },
];

// Líneas de equipamiento sin ficha técnica publicada. Se listan porque forman
// parte de la oferta según el catálogo original y el texto de "Nuestra Presencia".
export const lineasConsulta = [
  {
    slug: 'silos-fondo-conico',
    modelo: 'Silos',
    nombre: 'Silos galvanizados de fondo cónico',
    linea: 'almacenaje',
    etapa: 'almacenaje',
    resumen: 'Almacenamiento de granos y derivados en silos galvanizados de fondo cónico.',
  },
  {
    slug: 'silos-fondo-plano',
    modelo: 'Silos',
    nombre: 'Silos galvanizados de fondo plano',
    linea: 'almacenaje',
    etapa: 'almacenaje',
    resumen: 'Almacenamiento de gran volumen en silos galvanizados de fondo plano.',
  },
  {
    slug: 'silos-inox',
    modelo: 'Silos INOX',
    nombre: 'Silos de acero inoxidable cónicos',
    linea: 'almacenaje',
    etapa: 'almacenaje',
    resumen: 'Silos cónicos en acero inoxidable para productos que exigen mayor higiene.',
  },
  {
    slug: 'elevadores',
    modelo: 'Elevadores',
    nombre: 'Elevadores de cangilones',
    linea: 'almacenaje',
    etapa: 'transporte',
    resumen: 'Transporte vertical del grano entre etapas del proceso.',
  },
  {
    slug: 'redlers-roscas',
    modelo: 'Redlers',
    nombre: 'Redlers y roscas helicoidales',
    linea: 'almacenaje',
    etapa: 'transporte',
    resumen: 'Transporte horizontal e inclinado de granos y derivados.',
  },
  {
    slug: 'cintas-transportadoras',
    modelo: 'Cintas',
    nombre: 'Cintas transportadoras',
    linea: 'almacenaje',
    etapa: 'transporte',
    resumen: 'Transporte continuo de grano a lo largo de la planta.',
  },
  {
    slug: 'selectoras-opticas',
    modelo: 'Selectoras',
    nombre: 'Selectoras ópticas y electrónicas',
    linea: 'arroz',
    etapa: 'clasificado',
    resumen: 'Selección electrónica por color y defecto, como etapa final de calidad.',
  },
  {
    slug: 'balanzas-de-flujo',
    modelo: 'Balanzas',
    nombre: 'Balanzas de flujo',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Pesaje continuo en línea del caudal de grano.',
  },
  {
    slug: 'balanzas-embolse',
    modelo: 'Balanzas',
    nombre: 'Balanzas de embolse electrónicas',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Pesaje y llenado electrónico de bolsas. Línea ENESVAL.',
  },
  {
    slug: 'embolsadora-vacio',
    modelo: 'Embolsadora',
    nombre: 'Embolsadora al vacío',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Envasado al vacío para producto terminado.',
  },
  {
    slug: 'cosedoras',
    modelo: 'Cosedora',
    nombre: 'Cosedoras de bolsa',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Cierre de bolsa en línea a la salida del embolse.',
  },
  {
    slug: 'robots-paletizado',
    modelo: 'Robots',
    nombre: 'Robots de enfardado y paletizado',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Paletizadores de arrastre, robóticos y cartesianos, y enfardadoras. Líneas ENESVAL y TECNOTOK.',
  },
  {
    slug: 'etiquetadoras',
    modelo: 'Etiquetadoras',
    nombre: 'Etiquetadoras',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Etiquetado automático de bolsa y pallet.',
  },
  {
    slug: 'big-bag',
    modelo: 'Big Bag',
    nombre: 'Llenadoras de big bag',
    linea: 'envasado',
    etapa: 'envasado',
    resumen: 'Estaciones de llenado de big bag. Línea ENESVAL.',
  },
  {
    slug: 'repuestos-accesorios',
    modelo: 'Repuestos',
    nombre: 'Repuestos y accesorios',
    linea: 'servicio',
    etapa: 'servicio',
    resumen:
      'Amplio stock de repuestos en plaza: rodillos de goma, zarandas, telas, rubber strips, rulemanes y piezas de desgaste.',
  },
];

export const lineas = [
  {
    id: 'arroz',
    nombre: 'Arroz',
    descripcion:
      'Línea completa de molino arrocero: desde la prelimpieza y el despedrado hasta el blanqueado, el clasificado y la selección electrónica.',
    imagen: 'assets/img/lineas/arroz-planta.jpg',
    detalle: 'assets/img/lineas/arroz-grano.jpg',
  },
  {
    id: 'trigo',
    nombre: 'Trigo',
    descripcion:
      'Molienda de trigo: limpieza, plansifters de tamizado, bancos de cilindros, purificadores densimétricos y filtros de manga.',
    imagen: 'assets/img/lineas/trigo-espigas.jpg',
    detalle: 'assets/img/lineas/trigo-grano.jpg',
  },
  {
    id: 'maiz',
    nombre: 'Maíz',
    descripcion:
      'Equipamiento de limpieza, clasificación, almacenaje y envasado adaptado al maíz y a las fábricas de raciones.',
    imagen: 'assets/img/lineas/maiz-planta.jpg',
    detalle: 'assets/img/lineas/maiz-choclo.jpg',
  },
  {
    id: 'legumbres',
    nombre: 'Soja y legumbres',
    descripcion:
      'Soja, poroto y leguminosas: despedrado, clasificación por tamaño y selección óptica, con equipos configurados a la muestra.',
    imagen: 'assets/img/lineas/legumbres.jpg',
    detalle: null,
  },
];

export const lineasCatalogo = [
  { id: 'arroz', nombre: 'Arroz' },
  { id: 'trigo', nombre: 'Trigo' },
  { id: 'maiz', nombre: 'Maíz' },
  { id: 'legumbres', nombre: 'Soja y legumbres' },
  { id: 'almacenaje', nombre: 'Almacenaje y transporte' },
  { id: 'envasado', nombre: 'Pesaje y envasado' },
  { id: 'servicio', nombre: 'Repuestos' },
];

/* Equipos que sirven para cualquier grano, no solo para el de su línea
   principal. Sale del propio texto del catálogo original: los stoners dicen
   "además de arroz, pueden ser utilizados en otros granos o productos
   granulados como poroto, soja, trigo, maní"; el clasificador MMJP es "de
   arroz y otros granos"; la limpieza TQLZ es "para la industria arrocera y de
   otros cereales y granos". Almacenaje, transporte, pesaje, envasado,
   selección óptica y repuestos aplican a todas las líneas por definición. */
const TODOS_LOS_GRANOS = ['arroz', 'trigo', 'maiz', 'legumbres'];
const MULTIGRANO = new Set([
  'tqlz-maquina-seguridad-arroz',
  'tqlm-125-prelimpieza-rotativa',
  'tqs-stoner-eliminador-piedras',
  'tqsf-stoner-motor-vibrador',
  'mmjp-clasificador-vibratorio',
  'tqlz-limpieza-automatica-trigo',
  'tqlmz-limpieza-automatica-trigo',
  'tqsf-saca-piedras-trigo',
  'fdmw-quitador-impurezas',
]);

/* ------------------------------------------------------------------
   Imágenes de cada equipo.

   Las seis que llevan nombre en MAYÚSCULAS son fotos reales rescatadas
   del sitio anterior. El resto son imágenes de referencia generadas para
   ilustrar el TIPO de equipo — no son fotos del modelo exacto. Reemplazar
   por fotos reales del cliente en cuanto estén disponibles.
------------------------------------------------------------------- */
const IMAGENES = {
  // línea arroz
  'tqlz-maquina-seguridad-arroz': IMG + 'TQLZt.jpg',
  'tqlm-125-prelimpieza-rotativa': IMG + 'TQLM.jpg',
  'tqs-stoner-eliminador-piedras': IMG + 'tqs.jpg',
  'tqsf-stoner-motor-vibrador': IMG + 'TQSF.jpg',
  'mlgq-25-descascarador': IMG + 'mlgq-25.jpg',
  'mgcz-separador-paddy': IMG + 'mgcz.jpg',
  'mjxh-clasificador-perfil': IMG + 'MJXH.jpg',
  'mnml-40-blanqueador-vertical': IMG + 'mnml-40.jpg',
  'mnml-46-separador-alta-eficiencia': IMG + 'mnml-46.jpg',
  'mnms-30a-blanqueadora-horizontal': IMG + 'mnms-30a.jpg',
  'cm-pulidora-agua-horizontal': IMG + 'cm.jpg',
  'mmjp-clasificador-vibratorio': IMG + 'mmjp.jpg',
  'mdjy-trieur-alta-precision': IMG + 'MDJY.jpg',
  // línea trigo
  'tqlz-limpieza-automatica-trigo': IMG + 'tqlz-trigo.jpg',
  'tqlmz-limpieza-automatica-trigo': IMG + 'tqlmz.jpg',
  'tqsf-saca-piedras-trigo': IMG + 'tqsf-trigo.jpg',
  'fsfj-mono-plansifter': IMG + 'fsfj-mono.jpg',
  'fsfj-doble-plansifter': IMG + 'fsfj-doble.jpg',
  'fsfg-plansifter': IMG + 'fsfg.jpg',
  'ms-roller-miller': IMG + 'ms-roller.jpg',
  'msd-roller-miller': IMG + 'MSD.jpg',
  'lsm20-roller-miller': IMG + 'lsm20.jpg',
  'fqfd-purificador-mesa-densimetrica': IMG + 'fqfd.jpg',
  'fslz-disgregador': IMG + 'fslz.jpg',
  'tblm-filtro-de-manga': IMG + 'tblm.jpg',
  'fdmw-quitador-impurezas': IMG + 'fdmw.jpg',
  // almacenaje, transporte, envasado y repuestos
  'silos-fondo-conico': IMG + 'silos-conico.jpg',
  'silos-fondo-plano': IMG + 'silos-plano.jpg',
  'silos-inox': IMG + 'silos-inox.jpg',
  elevadores: IMG + 'elevadores.jpg',
  'redlers-roscas': IMG + 'redlers.jpg',
  'cintas-transportadoras': IMG + 'cintas.jpg',
  'selectoras-opticas': IMG + 'selectoras.jpg',
  'balanzas-de-flujo': IMG + 'balanzas-flujo.jpg',
  'balanzas-embolse': IMG + 'balanzas-embolse.jpg',
  'embolsadora-vacio': IMG + 'embolsadora-vacio.jpg',
  cosedoras: IMG + 'cosedora.jpg',
  'robots-paletizado': IMG + 'robots-paletizado.jpg',
  etiquetadoras: IMG + 'etiquetadoras.jpg',
  'big-bag': IMG + 'big-bag.jpg',
  'repuestos-accesorios': IMG + 'repuestos.jpg',
};

// Fotos reales del sitio anterior — el resto son imágenes de referencia.
const FOTOS_REALES = new Set([
  IMG + 'TQLZt.jpg', IMG + 'TQLM.jpg', IMG + 'TQSF.jpg',
  IMG + 'MJXH.jpg', IMG + 'MSD.jpg', IMG + 'MDJY.jpg',
]);

for (const p of [...productos, ...lineasConsulta]) {
  p.imagen = IMAGENES[p.slug] || null;
  p.fotoReal = FOTOS_REALES.has(p.imagen);

  // Líneas por las que se puede filtrar el equipo. Todo lo que no es
  // específico de un grano (almacenaje, transporte, envasado, repuestos y los
  // equipos multigrano) queda disponible en las cuatro líneas.
  const esDeGrano = p.linea === 'arroz' || p.linea === 'trigo';
  if (!esDeGrano) {
    p.lineas = [...TODOS_LOS_GRANOS, p.linea];
  } else if (MULTIGRANO.has(p.slug)) {
    p.lineas = [...TODOS_LOS_GRANOS];
  } else {
    p.lineas = [p.linea];
  }
}

export const todosLosProductos = [...productos, ...lineasConsulta];
