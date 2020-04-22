class Beers {
  constructor(ircMsg, tgMsg, ircConfig, isEnabled) {
    this.name = 'beer';
    this._ircMsg = ircMsg;
    this._tgMsg = tgMsg;
    this.Enabled = isEnabled;
    this.beers = [
      'rubia Volcánica Belgian Blonde Ale refrescante con un leve aroma frutado, un delicado amargor. ABV 5,5%.',
      'roja Volcánica Dubbel Cerveza Roja de color cobrizo muy atractiva con un aroma frutado producto del clavo de olor y su alta fermentación, de gusto refrescante por las ligeras notas de amargura. ABV 6,9%.',
      'oscura Volcánica Belgian Dark Strong Ale de alta graduación alcohólica, dulce maltosa, con aroma fuerte producto de las levaduras utilizadas y una espuma intensa y duradera. ABV 9,0%.',
      'rubia amarga Volcánica Belgian Ipa de alta graduación alcohólica, con leves notas frutadas producto de su fermentación, con un perfil cítrico en sabor y aroma provenientes de los lúpulos empleados en su fabricación. ABV 7,2%',
      'rubia de trigo Volcánica White IPA amarga, de espuma blanca y consistente con un perfil cítrico en sabor y aroma proveniente de los lúpulos empleados en su fabricación. ABV 6,4%.',
      'oscura Volcánica Belgian Strong Ale intensa y alcohólica, con gran presencia de esteres frutados, pensada para los amantes de la cerveza y el vino, con agregado de remolacha y mosto de uva que le aportan gran personalidad y complejidad. ABV 9,0%.',
      'blanca Mastra Witbier con aroma a naranja, y un sabor fresco y final especiado con comino y cilantro. ABV 5,0%.',
      'rubia Mastra Belgian Blond Ale con buena claridad y una espuma cremosa blanca, un aroma dulce a malta y perfume cítrico, un sabor fresco con dulzura en el paladar a miel o a caramelo, y una tibieza de alcohol en el final. ABV 7,2%.',
      'dorada Mastra Golden Ale con buena claridad y moderada espuma blanca con aroma a malta medio y a lúpulo moderado con suaves notas a alcohol, un sabor a malta evidente con dulzura a malta caramelo, y un balance parejo entre la malta y el lúpulo. ABV 5,7%.',
      'dorada Mastra Strong Golden Ale con buena claridad y espuma blanca con aroma a malta medio y a lúpulo moderado con notas a alcohol, un sabor a malta evidente con dulzura a malta caramelo, y una tibieza a alcohol en el final. ABV 8,4%.',
      'ambar de espuma blanca Mastra "La del Mercado", con Aroma fuerte a canela, un sabor fresco con dulzura a malta caramelo y a manzanas, con un finish refrescante, sabrosa, maltosa y refrescante. ABV 5,3%.',
      'ambar Mastra Honey Amber Ale de espuma blanca, aroma a naranja y sabor fresco con dulzura a malta caramelo y miel. ABV 5,3%.',
      'ambar Mastra American IPA de espuma blanca, un aroma frutal con perfume a frutas tropicales, de sabor fresco con amargor en el paladar y cuerpo medio con un final fresco. ABV 5,7%.',
      'rojiza Mastra English IPA con discreta turbiedad y espuma blanca, un aroma vegetal con perfume a pino, de sabor fresco con mucho amargor en el paladar y cuerpo pleno con un final astringente. ABV 5,8%.',
      'cobriza Mastra Scottish Ale con reflejos rubíes de gran espuma tostada. Aroma profundo a malta, aparente a caramelo. Sabor a malta tostada (terroso o ahumado). Sabrosa, maltosa y usualmente dulce, pudiendo sugerir un postre. ABV 6,2%.',
      'color tostado Mastra Brown Ale con intensa espuma. Leve aroma a grano ahumado y a maltas de chocolate. Bajo amargor y un sabor dulce otorgado por el azúcar moreno. Cuerpo pleno con notas de alcohol que hace de esta cerveza ideal para amenizar los primeros fríos. ABV 6,2%.',
      'azabache Mastra American Stout con espuma persistente de color tostado. Fuerte aroma a grano tostado. Sabor a maltas chocolate pareciendo café o chocolate oscuro. Amargor alto y sabor a lúpulo bajo. Cuerpo pleno cremoso con una pizca de astringencia. ABV 6,2%.',
      'de zapallo Cabesas Bier "Cabutiña" de estilo pumpkin Ale, elaborada con zapallo cabutiá, variedad local que le da a la cerveza un caracter típico del lugar. Aroma a especias. Sabor delicadamente dulce con un final que nos recuerda al dulce de zapallo de nuestras abuelas. ABV 5,6%.',
      'blanca de trigo Cabesas Bier BÁRBARA estilo Weizen, originario de Bavaria. Color amarillo pálido, con turbidez pronunciada, producto de la levadura especial y de no ser filtrada. Aroma a clavo de olor y banana. Sabor dulce y frutado. Muy refrescante. ABV 4,9%.',
      'Oatmeal Stout Cabesas Bier SABOTAJE estilo Oatmeal Stout, originario de las Islas Británicas. Color negro intenso. Espuma sumamente cremosa. Aroma a café y chocolate amargo. Cuerpo pleno y sedoso. El sabor dulce de la malta contrasta con el amargo del grano tostado y el calor del alcohol. ABV 6,1%.',
      'Indian Pale Ale Cabesas Bier IPA ATÓMICA fuerte, estilo India Pale Ale, originario de Inglaterra. De color cobre. Espuma cremosa y persistente. Aroma cítríco y frutado. Sabor amargo balanceado por el dulzor de la malta acentuado por el proceso de decocción. Su prolongada maduración le otroga un final amargo suave no astringente. ABV 6,7%.',
      'Cabesas Bier Scottish Ale de estilo originario de Escocia. De color ámbar profundo. Aroma dulce, maltoso con un toque de frutos secos. Dominante sabor a malta y caramelo, balanceado por el ligero amargor del lúpulo. ABV 5,6%.',
      'Cabesas Bier Blonde Ale de estilo de origen americano. Color dorado, aroma frutado con notas cítricas. Redondeado sabor a malta, equilibrado por el toque amargo del lúpulo, destacándose un final cítrico que la hace muy refrescante y agradable al paladar. ABV 5%.',
      'Cabesas Bier Brown Porter de estilo originario de Inglaterra. De color marrón con reflejos cobrizos. Espuma cremosa. Sutil aroma a malta tostada, con notas a chocolate. Sabor maltoso y algo dulce, con marcada presencia de caramelo. Final levemente amargo. ABV 4,9%.',
      'American Pale Ale Cabesas Bier APA REVOLUTION de color ambar claro, espuma blanca y voluminosa. Cuerpo medio. Sabor suave con marcados caracteres cítricos y baja maltosidad. Aroma citrico y tropical intenso. ABV 5%.',
      'rubia Bimba Brüder Blonde Ale de caracter suave y refrescante. Aroma suave a malta. Sabor ligeramente amargo, con notas citricas aportados por el lupulo que duran hasta el final. ABV 4,7%.',
      'roja Bimba Brüder Scottish Ale originaria de escocia. Aroma dulce, terroso. Sabor neutro, en balance tendiente a malta. Suave en paladar. ABV 3,6%.',
      'negra Bimba Brüder Oatmeal Stout robusta. Aroma a cafe. Sabor tostado fuerte, tambien con notas caramelo y chocolate amargo. Sedosa en paladar. ABV 5,8%',
      'refrescante de trigo Bimba Brüder Witbier color amarillo pálido con turbidez. Aromatizada con el agregado de cáscara de naranja. Acentuado sabor a grano que confiere el trigo sin maltear.  ABV 3,7%.',
      'BeerBros American Amber Ale suave con un toque frutal lupulado y de tonos ambar. ABV 5,6%.',
      'BeerBros Choco IPA con notas de chocolate y café, lupulada, cítrica. ABV 6,5%.',
      'negra Ariscona Stout con un perfil de sabor tostado producto de la utilización de maltas oscuras pero que no se queda ahí, van apareciendo al final sabores a café y cacao incorporados. Con el agregado de avena logramos que tenga cuerpo y espuma cremosa. Una cerveza ideal para el invierno, acompaña platos calientes, guisos, cazuelas, carnes y reducciones. Postre de chocolate. También ideal para tomarla sola al calor de una estufa de leña. ABV 5,2%.',
      'roja Ariscona Irish Red Ale de cuerpo medio y alcohol moderado. Es su sabor predomina la malta y el caramelo. Aparecen notas dulces y frutales. Termina con un ligero gusto a grano tostado. Amargor medio producto de la utilización de lúpulos suaves, terrosos y herbales. Ideal para acompañar pastas a la carusso, carbonara, asados, quesos de masa blanda, pizas con jamón crudo, cuatro quesos. Postres con helado a la crema, jaleas de higo y membrillo, tartas de manzana y crema. ABV 5,2%.',
      'de intenso color dorado y muy bebible Ariscona Original Blonde Ale, con un buscado balance entre maltas y lúpulos con el objetivo que sea fresca, pero a la vez gustosa. Lleva 4 maltas y 3 lúpulos distintos, de sabor y aroma frutal, floral y resinoso. Es una receta propia por eso lo de “Original”, es ideal para acompañar festejos donde gustara a todo independientemente de la trayectoria cervecera que se tenga. Perfecta para acompañar chivitos canadienses, pizzas con mozzarella a la leña,  picadas, parrillas, tapas, gramajes, fish&chips. ABV 5,2%.',
      'rubia ocre de espuma firme Ariscona Strong Blonde Ale con mayor graduación alcohólica, más lupulada y con mayor presencia de maltas caramelo, más amarga sin llegar a ser una IPA y de sabor especiado con notas de uva y ciruela. Acompaña sabores intensos, carnes asadas quesos azules, gorgonzola, jamón crudo, olivas negras, facturas de jabalí. En invierno es ideal para cazuelas, busecas y guisos. ABV 6,5%.',
      'rubia Palermo Beer West Coast American Ipa extremadamente aromatica, con notas a pomelo rosado y frutos tropicales. De amargor intenso y muy bajo cuerpo. ABV 6,8%.',
      'Palermo Beer Pacific Pale Ale una interpretación más ligera de la American Pale Ale, utilizándose lúpulos provenientes del pacífico, como los son los Australianos y Neocelandeses, que brindan perfiles más frescos, con frutados tropicales, cítricos y resinosos. Se destaca por la utilización del lúpulo Australiano Ella, que le aporta aroma a pomelo y melón. ABV 4,8%.'
    ];
  }

  Exec() {
    var beer = this.beers[Math.floor(Math.random() * this.beers.length)];
    var msg = "Sirviendo una jarra de cerveza ";
    msg += beer;
    this._ircMsg(msg);
    this._tgMsg(msg);
  }

  Help() {
    var helpTxt = "!" + this.name;
    this._ircMsg(helpTxt);
    this._tgMsg(helpTxt);
  }
}

module.exports = Beers;
