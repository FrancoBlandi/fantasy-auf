const teams = [
  { name: "Racing", short: "RAC", rank: 1, color: "#128149", source: "https://www.sofascore.com/es/football/team/racing-de-montevideo/25010", roster: {
    DEL: "Rodrigo Dudok, Sebastián da Silva, Bautista Tomatis, Hugo Silveira, Tomas Habib, Franco Suárez, Ivan Manzur, Agustin Angel Kahl, Thiago Fernandez",
    MED: "Agustín Álvarez, Axel Atum, Yury Oyarzo, Felipe Cairus, Erik De Los Santos, Esteban Da Silva, Nicolás Sosa, Juan Bosca Fraquelli, Álex Vázquez, Rodrigo Teliz, Juan Antonio Pérez, Jose Varela, Lucca Loprete",
    DEF: "Facundo González, Guillermo Cotugno, Ramiro Brazionis, Felipe Alvarez, Martín Ferreira, Facundo Parada, Diego Cheuquepal",
    POR: "Facundo Machado, Federico Varese"
  }},
  { name: "Dep. Maldonado", short: "MAL", rank: 2, color: "#d04730", source: "https://www.sofascore.com/es/football/team/deportivo-maldonado/3234", roster: {
    DEL: "Bruno Mendes, Elías de León, Emiliano Mozzone, Renato Cesar, Agustín Fernández",
    MED: "Maximiliano González, Christian Tabó, Guillermo López, Santiago Cartagena, Matías Espíndola, Santiago Ramírez, Maximiliano Noble, Lucas Núñez, Adrián Vila, Gonzalo Larrazabal, Sebastián González, Bautista Biffi, Thiago Correa",
    DEF: "Joaquín Fernández, Nicolás Fuica, Juan Ramos, Juan Martin Ginzo, Hernan Menosse, Hernán Petrik, Sebastian Tormo, Franco Marino, Bruno Centeno, Facundo Tealde, Juan Martin Pirota",
    POR: "Diego Segovia, Adriano Freitas, Felipe Ortiz, Alan Correa",
    UNK: "F Marino, Thiago Ortega, Lucas Espindola, Agustin Vidal"
  }},
  { name: "Albion", short: "ALB", rank: 3, color: "#d83b43", source: "https://www.sofascore.com/es/football/team/albion-fc/278204", roster: {
    DEL: "Tobias Figueroa, Álvaro López, Carlos Airala, Mateo Alcoba, Nahuel Roldán",
    MED: "Agustín Vera, Francisco Ginella, Pablo Alcoba, Leonardo Pais, Lucas Rodríguez, Tomás Moschión, Hernán Toledo, Briam Acosta, Santiago Costa, Octavio Perdomo, Roman Gutierrez, Kevin Bitancourt, Fabricio Santos, Lucas Sanchez",
    DEF: "Matias De los Santos, Ezequiel Burdin, Agustín Pereira, José Álvarez, Pablo Lacoste, Andrés Romero, Francisco Couture, Federico Puente, Sebastian Fernando Fernandez Caches, Bautista Perez del Castillo",
    POR: "Danilo Lerda, Sebastián Jaume, Pedro Ramallo"
  }},
  { name: "Peñarol", short: "PEÑ", rank: 4, color: "#f4c430", source: "https://www.sofascore.com/es/football/team/penarol/3227", roster: {
    DEL: "Matías Arezo, Luis Miguel Angulo, Facundo Batista, Abel Hernández, Franco González, Leandro Umpierrez, Brandon Alvarez, Facundo Martínez, Tomás Gemelli",
    MED: "Leonardo Fernández, Diego Laxalt, Gastón Togni, Jesús Trindade, Eric Remedi, Nicolás Fernández, German Barbas, Stiven Muhlethaler, Javier Cabrera, Eduardo Darias, Julio Daguer, Lorenzo Couture, Lautaro Larrosa",
    DEF: "Mauricio Lemos, Nahuel Herrera, Emanuel Gularte, Maximiliano Olivera, Franco Escobar, Lucas Hernández, Lucas Ferreira, Andrés Madruga, Matías González, Kevin Rodríguez, Ignacio Alegre, Facundo Maximiliano Alvez",
    POR: "Washington Aguerre, Sebastian Britos, Luis Díaz"
  }},
  { name: "Defensor", short: "DEF", rank: 5, color: "#7c4aa5", source: "https://www.sofascore.com/es/football/team/defensor-sporting/3229", roster: {
    DEL: "Diego Abreu, Alexander Machado, Augusto Cambón, Lautaro Navarro, Alan Torterolo, Diego Toma",
    MED: "Brian Lozano, Xavier Biscayzacu, Mauricio Amaro, Lucas Paul De los Santos, Nicolás Wunsch, Germán Barrios, Lukas König, Nicolás Medina, Lukas Agustin Konig, Nahuel Sena",
    DEF: "Patricio Pacifico, Lucas Agazzi, Marco Saravia, Juan Viacava, Guillermo De Los Santos, José Álvarez, Joaquín Robatto Irsanskas, Ariel Lima, Geanfranco Rodríguez, Jonathan González",
    POR: "Kevin Dawson, Lucas Machado"
  }},
  { name: "Central Español", short: "CES", rank: 6, color: "#b32128", source: "https://www.sofascore.com/es/football/team/central-espanol/3232", roster: {
    DEL: "Facundo Milán, Diego Vera, Matias Kusmanis, Rodrigo Muñiz, Raul Tarragona, Nicolás Campos, Mariano Fernando Aguilera, Ignacio Gonella, Facundo Sosa, Santiago Sequeira, Facundo Borges, Moises, Gollena I",
    MED: "Máximo Alonso, Lucas Pino, Fernando Camarda, Marcos Montiel, Lucas Wasilewsky, Sebastián Sánchez, Ignacio González, Guillermo Gandolfo, Franco Muñoz, Facundo Yocco, Franco Mederos, Isaac Méndez, Juan Rivera, Juber Pereira, Emiliano Tracchia, Santiago Romero, Martin Lencina, Nicolas Gomez, Facundo Salazar",
    DEF: "Sander Navarro, Ignacio Rodríguez, César Nunes, Alejandro Villoldo, Nicolas Correa, Luciano Fernández, Logan Ponce, Mateo Urrutia, Mateo Cantera, Juan Herrera, Lautaro Gandulfo, Ernesto Aramburu, Axel Maximiliano Vargas Chagas",
    POR: "Samuel Rodriguez, Rodolfo, Emiliano Marquez, Luis Cartes, Axel Alzogaray",
    UNK: "Juan Ignacio Dupont"
  }},
  { name: "Torque", short: "TOR", rank: 7, color: "#63b7df", source: "https://www.sofascore.com/es/football/team/montevideo-city-torque/174972", roster: {
    DEL: "Salomón Rodríguez, Facundo Martinez, Luka Andrade, Nahuel Da Silva, Ramiro Lecchini, Munoz",
    MED: "Gonzalo Montes, Bautista Kociubinski, Pablo Siles, Esteban Obregón, Diogo Guzmán, Juan Ignacio Quintana Silva, Lucas Duré, Sebastián Cáceres, Ignacio Melian",
    DEF: "Franco Romero, Gary Kagelmacher, Ezequiel Busquets, Eduardo Agüero, Franco Pizzichillo, Nahuel Leivas, Kevin Silva, Facundo Silvera, José Tarán, Valentino Wurth, Jean Lopez",
    POR: "Franco Torgnascioli, Gaston Rodriguez"
  }},
  { name: "Liverpool", short: "LIV", rank: 8, color: "#171717", source: "https://www.sofascore.com/es/football/team/liverpool-uy/6879", roster: {
    DEL: "Renzo Machado, Rubén Bentancourt, Federico Martínez, Facundo Barceló, Ramiro Degregorio, Felipe Barrenechea Acuña, Alfonso de Luca",
    MED: "Kevin Amaro, Diego Zabala, Nicolás Garayalde, Matías Mir, Martín Rabuñal, Lucas Acosta, Ezequiel Olivera, Matias Silva, Gonzalo de Mello, Santiago Milano, Yordi López",
    DEF: "Diego Romero, Kevin Lewis, Enzo Castillo, Santiago Laquidaín, Agustín Cayetano, Facundo Perdomo, Santiago Strasorier, Jean Rosso, Jorge Castillo",
    POR: "Martin Campana, Mathias Bernatene, Diego Cabrera"
  }},
  { name: "Nacional", short: "NAC", rank: 9, color: "#1d5ca8", source: "https://www.sofascore.com/es/football/team/club-nacional-de-football/3230", roster: {
    DEL: "Maximiliano Gómez, Nicolás López, Maximiliano Silvera, Gonzalo Carneiro, Tomas Veron Lupi, Pavel Núñez, Exequiel Méndez, Thomas Giraldez",
    MED: "Nicolás Lodeiro, Juan Cruz De los Santos, Luciano Boggio, Bruno Arady, Agustín Dos Santos, Baltasar Barcia, Lucas Rodríguez, Exequiel Mereles, Rodrigo Martinez, Mauricio Vera, Jhon Guzmán, Luciano Gonzalez, Federico Bais, Juan García",
    DEF: "Sebastián Coates, Agustín Rogel, Camilo Cándido, Paolo Calione, Juan Pintado, Emiliano Ancheta, Tomás Viera, Nicolas Rodriguez, Federico Pedrouzo, Nahuel Pérez",
    POR: "Luis Mejia, Ignacio Suárez, Federico Bonilla Gonzalez, Juan Bianchi",
    UNK: "Santiago Gonzalez"
  }},
  { name: "Danubio", short: "DAN", rank: 10, color: "#1c1c1c", source: "https://www.sofascore.com/es/football/team/danubio/3228", roster: {
    DEL: "Nicolas Azambuja, Sebastián Fernández, Enzo Cabrera, Ivo Costantino, Maicol Ferreira, Diego Piriz, Benjamin Azambuja Vargas",
    MED: "Sebastián Rodríguez, Mateo Peralta, Camilo Mayada, Iván Rossi, Alexander Velazquez, Axel Montaña, Luis Femia, Juan Millán, Máximo Cabral",
    DEF: "Emiliano Velazquez, Tomás Cavanagh, Facundo Balatti, Mateo Rinaldi, Santiago Sosa, Joaquin Pereyra, Martín Jourdan, Facundo Saravia, Emiliano Figueroa, Bautista Pereira, Leandro Sosa, Felipe Cabrera",
    POR: "Kevin Martínez, Mauro Goicoechea",
    UNK: "Damian Garcia"
  }},
  { name: "Cerro Largo", short: "CLA", rank: 11, color: "#224d91", source: "https://www.sofascore.com/es/football/team/cerro-largo/25009", roster: {
    DEL: "Ihojan Pérez, Tiziano Correa, Federico Sellechia, Thomas González, Diego Daguerre, Álex Da Costa, Borys Barone",
    MED: "Maximiliano Añasco, Nicolas Bertocchi, Gustavo Viera, Axel Pandiani, Sebastián Assis, Jeremías Gallard, Mario García, Bruno Hernandez, Emiliano Jourdan, Santiago Marcel, Alexander Hernandez, Tomas Gonzalez",
    DEF: "Matías Fracchia, Nicolás Ramos, Lucas Correa, Gabriel Chocobar, Alexis Piegas, Facundo Alvez, Mateo Monserrat, Santiago Franca, Julián Pou, Fernando Souza",
    POR: "Juan Moreno, Pedro Gonzalez, Lukas González"
  }},
  { name: "Boston River", short: "BOS", rank: 12, color: "#d33f31", source: "https://www.sofascore.com/es/football/team/boston-river/174970", roster: {
    DEL: "Brayan Alcocer, Francisco Bonfiglio, Gonzalo Reyna, Alexander González, Facundo Rodríguez, Francisco Martinicorena",
    MED: "Gaston Ramirez, Andrés Romero, Yair González, Leandro Suhr, Agustín Amado, Francisco Barrios, Facundo Muñoa, Franco Pérez, Federico Dafonte, Marcelo Hornos",
    DEF: "Rafael Haller, Fredy Martínez, Ignacio Fernandez, Jairo O'Neil, Mateo Rivero, Lautaro Vazquez, Marco Mancebo, Kevin Sotto, Martín González, Juan Manuel Acosta, Agustín Aguirre",
    POR: "Bruno Antúnez, Juan Ignacio González"
  }},
  { name: "Wanderers", short: "WAN", rank: 13, color: "#111111", source: "https://www.sofascore.com/es/football/team/montevideo-wanderers/3240", roster: {
    DEL: "Esteban Crucci, Jonás Luna, Pablo Suarez, Joaquín Zeballos, Mateo Levato, Juan Ignacio Rodriguez Sevilla, Roque Ricca",
    MED: "Facundo Labandeira, Jonathan Urretaviscaya, Gonzalo Freitas, Luciano Cosentino, Rodrigo Rivero, José Alberti, Sergi Oriol, Nicolás Queiroz, Martin Bertola, Santiago Guzman, Mateo Martínez",
    DEF: "Fabricio Formiliano, Darlin Mencía, Lisandro Bajú, Santiago Benítez, Mateo Acosta, Nahuel Furtado, Nicolás Olivera, Alan Garcia, Paulo Lima, Guillermo Borthagaray, Leandro Zazpe",
    POR: "Gerónimo Govea, José Rio, Agustín Buffa"
  }},
  { name: "Juventud", short: "JUV", rank: 14, color: "#69a94d", source: "https://www.sofascore.com/es/football/team/juventud-de-las-piedras/3224", roster: {
    DEL: "Marcelo Perez, Gastón Pereiro, Renzo Sánchez, Agustín Alaniz, Sebastian Guerrero, Fernando Mimbacas, Bruno Larregui, Facundo Dominguez, Bruno Airaldi",
    MED: "Alejo Cruz, Rodrigo Chagas, Leonel Roldán, Pablo Lago, Emanuel Cecchini, Ramiro Peralta, Juan Boselli, Gonzalo Gomez, Facundo Perez, Mateo Izaguirre, Lautaro Vázquez, Diego Simões, Michael Flores",
    DEF: "Martín Cáceres, Emmanuel Mas, Patricio Pernicone, Federico Barrandeguy, David Morosini, Axel Prado, Ignacio Mujica, Renzo Rabino, Franco Risso, Ivan Rodriguez, Agustin Perez, Mauricio Rodriguez, Valentín Barrios, Valentin Barrios Figueredo",
    POR: "Sebastian Sosa, Nicolás Rossi, Manuel Idiarte, Nicolas Ruotola"
  }},
  { name: "Progreso", short: "PRO", rank: 15, color: "#e0c83f", source: "https://www.sofascore.com/es/football/team/progreso/3238", roster: {
    DEL: "Jonathan Dos Santos, Nahuel López, Matteo Copelotti, Diego Sánchez Richieri, José Vanetta, Gary Silva, Federico Ruiz Lavecchia, Jose Segundo Vanetta, Joaquin Solleiro",
    MED: "Nicolas Fernandez, Santiago Viera, Facundo de León, Ignacio Lemmo, Adrian Colombino, Agustin Pinheiro, Fabricio Fernandez Pertusso, Gonzalo Silva, Augustin Paz, Alexis Cuadro, Juan Rivero, Agustín Codagnone",
    DEF: "Federico Andueza, Ayrton Cougo, Sebastian Cardozo, Hernan Carroso, Gianfranco Trasante Medina, Marcos Paolini, Facundo Kidd, Mauro Martín, Federico García, Federico López",
    POR: "Andres Mehring, Agustín Requena"
  }},
  { name: "Cerro", short: "CER", rank: 16, color: "#7eb3dc", source: "https://www.sofascore.com/es/football/team/cerro/22011", roster: {
    DEL: "Alejandro Severo, Augusto Cambón, Bruno Morales, Santiago Paiva, Nahuel Soria, Tiago Rijo, Axel Mendez, Jeison Ivan Cubas Tarrillo, Rodolfo Nahuel Sena Aguirre, Mariano Nichele, Alan Zamurio",
    MED: "Brahian Aleman, Jairo Amaro, Rodrigo Mederos, Cristian Barros, Alejo Macelli, Pablo Nongoy, Emiliano Sosa, Pablo Javier da Silveira Coitiño, Agustín Miranda, Nahuel Sena, Brian Quinteros",
    DEF: "Damián Suárez, Juan Cruz Guasone, Francisco Bregante, Gianni Rodríguez, Ariel Lima, Mateo Argüello, Facundo Butti, Ivan Valenzuela, Martin Farias, Emanuel Carlos, Facundo Martin Butti",
    POR: "Fabrizio Correa, Diego Capdevila, Yonatan Irrázabal",
    UNK: "Tomas Capdevila"
  }}
];

const scoring = [
  ["Titular", 2],
  ["Entra desde el banco", 1],
  ["Gol arquero/defensor", 6],
  ["Gol mediocampista", 5],
  ["Gol delantero", 4],
  ["Asistencia", 3],
  ["Valla invicta arquero/defensor", 4],
  ["Valla invicta mediocampista", 1],
  ["Atajada arquero", 0.5],
  ["Penal atajado", 5],
  ["Penal errado", -3],
  ["Tarjeta amarilla", -1],
  ["Tarjeta roja", -4],
  ["Gol en contra", -2],
  ["Figura del partido", 3]
];

// Fecha 15 — resultados finales (8–11 may 2026)
// Fuentes: La Oral Deportiva / Caras y Caretas / El Observador / FootballDatabase
const nextRoundStart = new Date("2026-05-08T19:30:00-03:00");
const currentRoundMatches = [
  { home: "Wanderers",      away: "Liverpool",     day: "Vie 8",  time: "19:30", venue: "Alfredo Víctor Viera",                homeGoals: 1, awayGoals: 0 },
  { home: "Danubio",        away: "Albion",         day: "Sáb 9",  time: "15:30", venue: "Jardines del Hipódromo",             homeGoals: 0, awayGoals: 1 },
  { home: "Central Español",away: "Racing",         day: "Sáb 9",  time: "18:30", venue: "Parque Palermo",                     homeGoals: 2, awayGoals: 0 },
  { home: "Defensor",       away: "Juventud",       day: "Dom 10", time: "11:00", venue: "Luis Franzini",                      homeGoals: 1, awayGoals: 2 },
  { home: "Torque",         away: "Progreso",       day: "Dom 10", time: "16:00", venue: "Estadio Charrúa",                    homeGoals: 2, awayGoals: 1 },
  { home: "Nacional",       away: "Cerro",          day: "Dom 10", time: "19:30", venue: "Gran Parque Central",                homeGoals: 4, awayGoals: 0 },
  { home: "Dep. Maldonado", away: "Boston River",   day: "Lun 11", time: "17:00", venue: "Domingo Burgueño Miguel",            homeGoals: 2, awayGoals: 1 },
  { home: "Cerro Largo",    away: "Peñarol",        day: "Lun 11", time: "20:30", venue: "Estadio Municipal Arq. Antonio Ubilla", homeGoals: 2, awayGoals: 3 },
];

const coaches = [
  { id: "RAC-cristian-chambian",    name: "Cristian Chambian",   team: "Racing",          source: "https://www.sofascore.com/football/team/racing-de-montevideo/25010" },
  { id: "MAL-gabriel-di-noia",      name: "Gabriel Di Noia",     team: "Dep. Maldonado",  source: "https://www.sofascore.com/es/football/manager/gabriel-di-noia/796033" },
  { id: "ALB-federico-nieves",      name: "Federico Nieves",     team: "Albion",          source: "https://www.sofascore.com/football/team/albion-fc/278204" },
  { id: "PEN-diego-aguirre",        name: "Diego Aguirre",       team: "Peñarol",         source: "https://www.sofascore.com/football/manager/diego-aguirre/784656" },
  { id: "DEF-roman-cuello",         name: "Roman Cuello",        team: "Defensor",        source: "https://www.sofascore.com/football/team/defensor-sporting/3229" },
  { id: "CES-pablo-de-ambrosio",    name: "Pablo De Ambrosio",   team: "Central Español", source: "https://www.sofascore.com/football/team/central-espanol/3232" },
  { id: "TOR-marcelo-mendez",       name: "Marcelo Mendez",      team: "Torque",          source: "https://www.sofascore.com/football/team/montevideo-city-torque/174972" },
  { id: "LIV-camilo-speranza",      name: "Camilo Speranza",     team: "Liverpool",       source: "https://www.sofascore.com/football/team/liverpool-uy/6879" },
  { id: "NAC-jorge-bava",           name: "Jorge Bava",          team: "Nacional",        source: "https://www.sofascore.com/football/team/club-nacional-de-football/3230" },
  { id: "DAN-diego-monarriz",       name: "Diego Monarriz",      team: "Danubio",         source: "https://www.sofascore.com/team/football/danubio/3228" },
  { id: "CLA-danielo-nunez",        name: "Danielo Núñez",       team: "Cerro Largo",     source: "https://www.sofascore.com/football/team/cerro-largo/25009" },
  { id: "BOS-ignacio-ithurralde",   name: "Ignacio Ithurralde",  team: "Boston River",    source: "https://www.sofascore.com/football/team/boston-river/174970" },
  { id: "WAN-mathias-corujo",       name: "Mathias Corujo",      team: "Wanderers",       source: "https://www.sofascore.com/football/team/montevideo-wanderers/3240" },
  { id: "JUV-sergio-blanco",        name: "Sergio Blanco",       team: "Juventud",        source: "https://www.sofascore.com/football/team/juventud-de-las-piedras/3224" },
  { id: "PRO-leonel-rocco",         name: "Leonel Rocco",        team: "Progreso",        source: "https://www.sofascore.com/football/team/progreso/3238" },
  { id: "CER-alejandro-apud",       name: "Alejandro Apud",      team: "Cerro",           source: "https://www.sofascore.com/football/team/cerro/22011" }
];

const budgetLimit = 125;
const benchPositions = ["POR", "DEF", "MED", "DEL"];
const formationOptions = {
  "5-4-1": { DEF: 5, MED: 4, DEL: 1 },
  "5-3-2": { DEF: 5, MED: 3, DEL: 2 },
  "5-2-3": { DEF: 5, MED: 2, DEL: 3 },
  "4-5-1": { DEF: 4, MED: 5, DEL: 1 },
  "4-4-2": { DEF: 4, MED: 4, DEL: 2 },
  "4-3-3": { DEF: 4, MED: 3, DEL: 3 },
  "3-5-2": { DEF: 3, MED: 5, DEL: 2 },
  "3-4-3": { DEF: 3, MED: 4, DEL: 3 },
  "3-3-4": { DEF: 3, MED: 3, DEL: 4 },
  "2-5-3": { DEF: 2, MED: 5, DEL: 3 }
};

function buildFormation(name) {
  const shape = formationOptions[name] || formationOptions["3-4-3"];
  return [
    ...Array(shape.DEL).fill("DEL"),
    ...Array(shape.MED).fill("MED"),
    ...Array(shape.DEF).fill("DEF"),
    "POR"
  ];
}

function slotGroupsFor(formation) {
  return formation.reduce((groups, position, index) => {
    groups[position] = groups[position] || [];
    groups[position].push(index);
    return groups;
  }, {});
}

function hash(text) {
  return [...text].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) >>> 0, 7);
}

function normalize(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function splitNames(text = "") {
  return text.split(",").map((name) => name.trim()).filter(Boolean);
}

const players = teams.flatMap((team) => {
  const entries = Object.entries(team.roster).flatMap(([position, names]) => {
    const finalPosition = position === "UNK" ? "MED" : position;
    return splitNames(names).map((name, index) => {
      const h = hash(`${team.short}-${name}-${position}`);
      const baseByPos = { POR: 5.2, DEF: 5.6, MED: 6.4, DEL: 7.0 }[finalPosition];
      const rankBoost = (17 - team.rank) * 0.08;
      const price = +(baseByPos + rankBoost + (h % 24) / 10).toFixed(1);
      const form = +((h % 41) / 10 + 5).toFixed(1);
      const points = Math.round(form * 9 + (17 - team.rank) * 2 + (position === "UNK" ? -3 : 0) + index % 7);
      return {
        id: `${team.short}-${normalize(name).replace(/[^a-z0-9]+/g, "-")}`,
        name,
        team: team.name,
        short: team.short,
        color: team.color,
        position: finalPosition,
        price,
        form,
        points,
        source: team.source
      };
    });
  });
  const unique = new Map();
  entries.forEach((player) => unique.set(player.id, player));
  return [...unique.values()];
});

const storedSelected = JSON.parse(localStorage.getItem("aufSelected") || "[]");
const storedBench = JSON.parse(localStorage.getItem("aufBench") || "{}");
const storedStats = JSON.parse(localStorage.getItem("aufStats") || "{\"players\":{},\"captains\":{},\"coaches\":{}}");
const savedFormation = localStorage.getItem("aufFormation") || "3-4-3";
let formation = buildFormation(savedFormation);
let slotGroups = slotGroupsFor(formation);
const state = {
  formationName: savedFormation,
  selected: alignSelectionToFormation(storedSelected, formation),
  bench: benchPositions.reduce((acc, position) => {
    const id = storedBench[position];
    acc[position] = players.find((player) => player.id === id && player.position === position) ? id : null;
    return acc;
  }, {}),
  captain: localStorage.getItem("aufCaptain") || "",
  vice: localStorage.getItem("aufVice") || "",
  coach: localStorage.getItem("aufCoach") || "",
  stats: storedStats,
  activeSlot: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function alignSelectionToFormation(selection, targetFormation) {
  return targetFormation.map((position, index) => {
    if (selection.length === targetFormation.length) {
      const direct = players.find((player) => player.id === selection[index]);
      if (direct?.position === position) return direct.id;
    }
    const samePosition = selection.filter((id) => players.find((player) => player.id === id)?.position === position);
    const samePositionIndex = targetFormation.slice(0, index).filter((item) => item === position).length;
    return samePosition[samePositionIndex] || null;
  });
}

function starterPlayers() {
  return state.selected.map((id) => players.find((player) => player.id === id)).filter(Boolean);
}

function benchPlayers() {
  return benchPositions.map((position) => players.find((player) => player.id === state.bench[position])).filter(Boolean);
}

function selectedPlayers() {
  return [...starterPlayers(), ...benchPlayers()];
}

function save() {
  localStorage.setItem("aufSelected", JSON.stringify(state.selected));
  localStorage.setItem("aufBench", JSON.stringify(state.bench));
  localStorage.setItem("aufFormation", state.formationName);
  localStorage.setItem("aufCaptain", state.captain);
  localStorage.setItem("aufVice", state.vice);
  localStorage.setItem("aufCoach", state.coach);
  localStorage.setItem("aufStats", JSON.stringify(state.stats));
}

function recordStat(group, id) {
  if (!id) return;
  state.stats[group] = state.stats[group] || {};
  state.stats[group][id] = (state.stats[group][id] || 0) + 1;
}

function teamCounts(list = selectedPlayers()) {
  return list.reduce((acc, player) => {
    acc[player.team] = (acc[player.team] || 0) + 1;
    return acc;
  }, {});
}

function canAdd(player) {
  if (state.selected.includes(player.id)) return false;
  const current = selectedPlayers();
  if (current.length >= 11) return false;
  const positionNeed = formation.filter((pos) => pos === player.position).length;
  const positionHave = current.filter((p) => p.position === player.position).length;
  if (positionHave >= positionNeed) return false;
  const spent = current.reduce((sum, p) => sum + p.price, 0);
  return spent + player.price <= budgetLimit;
}

function activePlayer() {
  if (!state.activeSlot) return null;
  const id = state.activeSlot.type === "bench"
    ? state.bench[state.activeSlot.position]
    : state.selected[state.activeSlot.slotIndex];
  return players.find((player) => player.id === id) || null;
}

function canPickForActiveSlot(player) {
  if (!state.activeSlot || player.position !== state.activeSlot.position) return false;
  const replacing = activePlayer();
  if (replacing?.id === player.id) return false;
  const currentStarters = state.selected
    .filter((id, index) => state.activeSlot.type !== "starter" || index !== state.activeSlot.slotIndex)
    .map((id) => players.find((item) => item.id === id))
    .filter(Boolean);
  const currentBench = benchPositions
    .filter((position) => state.activeSlot.type !== "bench" || position !== state.activeSlot.position)
    .map((position) => players.find((item) => item.id === state.bench[position]))
    .filter(Boolean);
  const current = [...currentStarters, ...currentBench];
  if (current.some((item) => item.id === player.id)) return false;
  const spent = current.reduce((sum, item) => sum + item.price, 0);
  return spent + player.price <= budgetLimit;
}

function pickForActiveSlot(id) {
  const player = players.find((item) => item.id === id);
  if (!player || !canPickForActiveSlot(player)) return;
  const replacing = activePlayer();
  if (replacing) {
    if (state.captain === replacing.id) state.captain = player.id;
    if (state.vice === replacing.id) state.vice = player.id;
  }
  if (state.activeSlot.type === "bench") {
    state.bench[state.activeSlot.position] = player.id;
  } else {
    state.selected[state.activeSlot.slotIndex] = player.id;
  }
  if (!state.captain) state.captain = player.id;
  if (!state.vice && state.captain !== player.id) state.vice = player.id;
  recordStat("players", player.id);
  save();
  render();
}

function addPlayer(id) {
  const player = players.find((item) => item.id === id);
  if (!player || !canAdd(player)) return;
  const slotIndex = formation.findIndex((position, index) => position === player.position && !state.selected[index]);
  if (slotIndex === -1) return;
  state.selected[slotIndex] = id;
  if (!state.captain) state.captain = id;
  if (!state.vice && state.captain !== id) state.vice = id;
  recordStat("players", id);
  save();
  render();
}

function removePlayer(id) {
  state.selected = state.selected.map((item) => item === id ? null : item);
  benchPositions.forEach((position) => {
    if (state.bench[position] === id) state.bench[position] = null;
  });
  if (state.captain === id) state.captain = state.selected.find(Boolean) || "";
  if (state.vice === id) state.vice = state.selected.find((item) => item && item !== state.captain) || "";
  save();
  render();
}

function budgetLeft() {
  const spent = selectedPlayers().reduce((sum, player) => sum + player.price, 0);
  return +(budgetLimit - spent).toFixed(1);
}

function coachPoints() {
  const coach = coaches.find((item) => item.id === state.coach);
  if (!coach) return 0;
  const match = currentRoundMatches.find((item) => item.home === coach.team || item.away === coach.team);
  if (!match || typeof match.homeGoals !== "number") return 0;
  if (match.homeGoals === match.awayGoals) return 0;
  const won = match.home === coach.team ? match.homeGoals > match.awayGoals : match.awayGoals > match.homeGoals;
  return won ? 1 : -1;
}

function projectedRoundPoints() {
  const playerPoints = starterPlayers().reduce((sum, player) => {
    const multiplier = player.id === state.captain ? 2 : player.id === state.vice ? 1.5 : 1;
    return sum + Math.round((player.points / 4) * multiplier);
  }, 0);
  return playerPoints + coachPoints();
}

function renderSlot({ position, slotIndex = null, type = "starter" }) {
  const player = type === "bench"
    ? players.find((item) => item.id === state.bench[position])
    : players.find((item) => item.id === state.selected[slotIndex]);
  const isActive = type === "bench"
    ? state.activeSlot?.type === "bench" && state.activeSlot?.position === position
    : state.activeSlot?.type === "starter" && state.activeSlot?.slotIndex === slotIndex;
  const slot = document.createElement("article");
  slot.className = `slot ${type === "bench" ? "bench-slot" : ""} ${player ? "filled" : ""} ${isActive ? "active-slot" : ""}`;
  slot.dataset.slotPosition = position;
  slot.dataset.slotType = type;
  if (slotIndex !== null) slot.dataset.slotIndex = slotIndex;
  if (player) {
    slot.innerHTML = `
      <span class="chip">${player.position}</span>
      <strong>${player.name}</strong>
      <span>${player.team} · $${player.price}M · ${player.points} pts</span>
      <button class="remove" data-remove="${player.id}">Quitar</button>
    `;
  } else {
    slot.innerHTML = `<span class="chip">${position}</span><strong>${type === "bench" ? "Suplente" : "Vacante"}</strong><span>Elegí un jugador</span>`;
  }
  return slot;
}

function renderPitch() {
  const pitch = $("#pitch");
  pitch.innerHTML = "";
  [
    ["DEL", slotGroups.DEL?.length || 0, "del"],
    ["MED", slotGroups.MED?.length || 0, "med"],
    ["DEF", slotGroups.DEF?.length || 0, "def"],
    ["POR", 1, "por"]
  ].forEach(([pos, count, cls]) => {
    const line = document.createElement("div");
    line.className = `line ${cls}`;
    line.style.setProperty("--slot-count", count);
    for (let index = 0; index < count; index += 1) {
      const slotIndex = slotGroups[pos][index];
      line.appendChild(renderSlot({ position: pos, slotIndex, type: "starter" }));
    }
    pitch.appendChild(line);
  });
}

function renderBench() {
  const bench = $("#bench");
  bench.innerHTML = "";
  benchPositions.forEach((position) => {
    bench.appendChild(renderSlot({ position, type: "bench" }));
  });
}

function renderPlayerPicker() {
  if (!state.activeSlot) {
    $("#pickerTitle").textContent = "Elegí una posición";
    $("#playerList").innerHTML = `<p class="meta" style="padding:16px;text-align:center;">Tocá un casillero del campo para ver jugadores de ese puesto.</p>`;
    return;
  }
  const query = normalize($("#search").value || "");
  const team = $("#teamFilter").value;
  const label = { POR: "arquero", DEF: "defensor", MED: "mediocampista", DEL: "delantero" }[state.activeSlot.position];
  const replacing = activePlayer();
  const prefix = state.activeSlot.type === "bench" ? "suplente" : label;
  $("#pickerTitle").textContent = replacing ? `Cambiar ${prefix}` : `Elegir ${prefix}`;
  const rows = players
    .filter((player) => player.position === state.activeSlot.position)
    .filter((player) => team === "all" || player.team === team)
    .filter((player) => normalize(`${player.name} ${player.team}`).includes(query))
    .sort((a, b) => b.points - a.points)
    .map((player) => `
      <article class="player-card">
        <div>
          <strong class="player-name">${player.name}</strong>
          <span class="meta"><span class="chip" style="background:${player.color}22;color:${player.color}">${player.short}</span> ${player.team} · ${player.position}</span>
          <span class="meta">$${player.price}M · Forma ${player.form} · ${player.points} pts · <a href="${player.source}" target="_blank" rel="noreferrer">SofaScore</a></span>
        </div>
        <button class="add-btn" data-pick="${player.id}" ${canPickForActiveSlot(player) ? "" : "disabled"}>${selectedPlayers().some((item) => item.id === player.id) ? "Elegido" : replacing ? "Cambiar" : "Sumar"}</button>
      </article>
    `).join("");
  $("#playerList").innerHTML = rows || `<p class="meta" style="padding:16px;text-align:center;">No hay jugadores para esos filtros.</p>`;
}

function renderSelectors() {
  const options = selectedPlayers().map((player) => `<option value="${player.id}">${player.name} · ${player.team}</option>`).join("");
  $("#captainSelect").innerHTML = `<option value="">Sin capitán</option>${options}`;
  $("#viceSelect").innerHTML = `<option value="">Sin vice</option>${options}`;
  $("#captainSelect").value = state.captain;
  $("#viceSelect").value = state.vice;
  $("#coachSelect").innerHTML = `<option value="">Sin director técnico</option>${coaches.map((coach) => `<option value="${coach.id}">${coach.name} · ${coach.team}</option>`).join("")}`;
  $("#coachSelect").value = state.coach;
  const coach = coaches.find((item) => item.id === state.coach);
  const coachMatch = coach ? currentRoundMatches.find((m) => m.home === coach.team || m.away === coach.team) : null;
  let coachInfo = "Elegí un DT de la Liga AUF Uruguaya.";
  if (coach && coachMatch && typeof coachMatch.homeGoals === "number") {
    const isHome = coachMatch.home === coach.team;
    const teamGoals = isHome ? coachMatch.homeGoals : coachMatch.awayGoals;
    const rivalGoals = isHome ? coachMatch.awayGoals : coachMatch.homeGoals;
    const rival = isHome ? coachMatch.away : coachMatch.home;
    const result = teamGoals > rivalGoals ? "Victoria" : teamGoals < rivalGoals ? "Derrota" : "Empate";
    const pts = coachPoints();
    coachInfo = `${coach.team} ${teamGoals}–${rivalGoals} ${rival} · ${result} · <strong style="color:${pts > 0 ? "#c3f400" : pts < 0 ? "#ef4444" : "#8e9379"}">${pts > 0 ? "+" : ""}${pts} pts</strong> · <a href="${coach.source}" target="_blank" rel="noreferrer">fuente</a>`;
  } else if (coach) {
    coachInfo = `${coach.team} · +1 victoria, 0 empate, -1 derrota · <a href="${coach.source}" target="_blank" rel="noreferrer">fuente</a>`;
  }
  $("#coachStatus").innerHTML = coachInfo;
}

function renderStats() {
  $("#totalPlayers").textContent = players.length;
  $("#teamCount").textContent = teams.length;
  $("#budgetLeft").textContent = `$${budgetLeft().toFixed(1)}M`;
  $("#roundPoints").textContent = `${projectedRoundPoints()} pts`;
}

function renderRanking() {
  const mine = projectedRoundPoints();
  const ranking = [
    ["Bolso del Parque", mine + 21],
    ["Mi AUF Fantasy", mine],
    ["La Maquina del Prado", Math.max(0, mine - 7)],
    ["Carbonero Data", Math.max(0, mine - 19)],
    ["Cantera Charrúa", Math.max(0, mine - 27)]
  ].sort((a, b) => b[1] - a[1]);
  $("#rankingList").innerHTML = ranking.map(([name, pts]) => `<li>${name} <span class="meta">${pts} pts</span></li>`).join("");

  const counts = teamCounts();
  const max = Math.max(1, ...Object.values(counts));
  $("#clubBreakdown").innerHTML = Object.entries(counts).map(([club, count]) => `
    <div class="bar"><strong>${club}</strong><span style="width:${Math.max(12, count / max * 100)}%"></span><em>${count}</em></div>
  `).join("") || `<p class="meta" style="padding:8px;">Todavía no elegiste jugadores.</p>`;
}

function renderTrendList(target, items, formatter) {
  if (!items.length) {
    $(target).innerHTML = `<article class="empty-state">Todavía no hay datos registrados.</article>`;
    return;
  }
  $(target).innerHTML = items.map((item, index) => {
    const data = formatter(item, index);
    return `
      <article class="trend-row">
        <span class="trend-rank">${index + 1}</span>
        <div>
          <strong>${data.name}</strong>
          <small>${data.detail}</small>
          <span class="trend-bar"><span style="width:${data.percent}%"></span></span>
        </div>
        <b>${data.percent}%</b>
      </article>
    `;
  }).join("");
}

function rankedStats(group, collection = players) {
  return Object.entries(state.stats[group])
    .map(([id, count]) => ({ item: collection.find((entry) => entry.id === id), count }))
    .filter((item) => item.item && item.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function renderHome() {
  $("#matchList").innerHTML = currentRoundMatches.map((match) => {
    const hasResult = typeof match.homeGoals === "number";
    const score = hasResult ? `${match.homeGoals}–${match.awayGoals}` : "vs";
    return `
      <article class="match-card">
        <span>${match.day} · ${match.time}</span>
        <strong>${match.home} <em>${score}</em> ${match.away}</strong>
        <small>${match.venue}</small>
      </article>
    `;
  }).join("");

  const popular = rankedStats("players");
  const popularMax = Math.max(1, ...popular.map((item) => item.count));
  renderTrendList("#popularPlayers", popular, (player) => ({
    name: player.item.name,
    detail: `${player.item.team} · ${player.item.position} · ${player.count} selecciones`,
    percent: Math.round((player.count / popularMax) * 100)
  }));

  const captains = rankedStats("captains");
  const captainMax = Math.max(1, ...captains.map((item) => item.count));
  renderTrendList("#popularCaptains", captains, (player) => ({
    name: player.item.name,
    detail: `${player.item.team} · ${player.item.position} · ${player.count} capitanías`,
    percent: Math.round((player.count / captainMax) * 100)
  }));

  const coachStats = rankedStats("coaches", coaches);
  const coachMax = Math.max(1, ...coachStats.map((item) => item.count));
  renderTrendList("#popularCoaches", coachStats, (coach) => ({
    name: coach.item.name,
    detail: `${coach.item.team} · ${coach.count} selecciones`,
    percent: Math.round((coach.count / coachMax) * 100)
  }));
}

function updateCountdown() {
  const diff = nextRoundStart.getTime() - Date.now();
  const safeDiff = Math.max(0, diff);
  const days = Math.floor(safeDiff / 86400000);
  const hours = Math.floor((safeDiff % 86400000) / 3600000);
  const minutes = Math.floor((safeDiff % 3600000) / 60000);
  const seconds = Math.floor((safeDiff % 60000) / 1000);
  $("#countDays").textContent = String(days).padStart(2, "0");
  $("#countHours").textContent = String(hours).padStart(2, "0");
  $("#countMinutes").textContent = String(minutes).padStart(2, "0");
  $("#countSeconds").textContent = String(seconds).padStart(2, "0");
  if (diff <= 0) $("#nextRoundLabel").textContent = "Apertura 2026 finalizado — viene el Torneo Intermedio.";
}

function renderPoints() {
  $("#pointsList").innerHTML = scoring.map(([label, value]) => `<dt>${label}</dt><dd>${value > 0 ? "+" : ""}${value}</dd>`).join("");
}

function render() {
  renderHome();
  $("#formationTitle").textContent = state.formationName;
  renderPitch();
  renderBench();
  renderPlayerPicker();
  renderSelectors();
  renderStats();
  renderRanking();
}

function autoPick() {
  const picked = Array(formation.length).fill(null);
  for (const [slotIndex, pos] of formation.entries()) {
    const candidate = players
      .filter((player) => player.position === pos && !picked.includes(player.id))
      .sort((a, b) => (b.points / b.price) - (a.points / a.price))
      .find((player) => {
        const current = picked.map((id) => players.find((p) => p.id === id)).filter(Boolean);
        const spent = current.reduce((sum, item) => sum + item.price, 0);
        return spent + player.price <= budgetLimit;
      });
    if (candidate) picked[slotIndex] = candidate.id;
  }
  const bench = {};
  for (const pos of benchPositions) {
    const currentIds = [...picked.filter(Boolean), ...Object.values(bench).filter(Boolean)];
    const spent = currentIds
      .map((id) => players.find((player) => player.id === id))
      .filter(Boolean)
      .reduce((sum, player) => sum + player.price, 0);
    const candidate = players
      .filter((player) => player.position === pos && !currentIds.includes(player.id))
      .sort((a, b) => (b.points / b.price) - (a.points / a.price))
      .find((player) => spent + player.price <= budgetLimit);
    bench[pos] = candidate?.id || null;
  }
  state.selected = picked;
  state.bench = bench;
  state.captain = picked.find(Boolean) || "";
  state.vice = picked.find((id) => id && id !== state.captain) || "";
  picked.filter(Boolean).forEach((id) => recordStat("players", id));
  Object.values(bench).filter(Boolean).forEach((id) => recordStat("players", id));
  recordStat("captains", state.captain);
  recordStat("coaches", state.coach);
  save();
  render();
}

function initFilters() {
  $("#teamFilter").innerHTML = `<option value="all">Todos los clubes</option>${teams.map((team) => `<option value="${team.name}">${team.name}</option>`).join("")}`;
  $("#formationSelect").innerHTML = Object.keys(formationOptions).map((name) => `<option value="${name}">${name}</option>`).join("");
  $("#formationSelect").value = state.formationName;
}

function changeFormation(name) {
  state.formationName = name;
  formation = buildFormation(name);
  slotGroups = slotGroupsFor(formation);
  state.selected = alignSelectionToFormation(state.selected, formation);
  const ids = selectedPlayers().map((player) => player.id);
  if (!ids.includes(state.captain)) state.captain = state.selected.find(Boolean) || "";
  if (!ids.includes(state.vice) || state.vice === state.captain) state.vice = state.selected.find((id) => id && id !== state.captain) || "";
  if (state.activeSlot?.type === "starter") state.activeSlot = null;
  save();
  render();
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-view]");
  if (tab) {
    $$(".tab").forEach((button) => button.classList.toggle("active", button === tab));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === tab.dataset.view));
  }

  const pick = event.target.closest("[data-pick]");
  if (pick) pickForActiveSlot(pick.dataset.pick);

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    event.stopPropagation();
    removePlayer(remove.dataset.remove);
  }

  const slot = event.target.closest("[data-slot-position]");
  if (slot && !event.target.closest("[data-remove]")) {
    state.activeSlot = {
      position: slot.dataset.slotPosition,
      type: slot.dataset.slotType,
      slotIndex: Number(slot.dataset.slotIndex)
    };
    render();
  }
});

$("#search").addEventListener("input", renderPlayerPicker);
$("#teamFilter").addEventListener("change", renderPlayerPicker);
$("#formationSelect").addEventListener("change", (event) => changeFormation(event.target.value));
$("#captainSelect").addEventListener("change", (event) => {
  state.captain = event.target.value;
  recordStat("captains", state.captain);
  save();
  render();
});
$("#viceSelect").addEventListener("change", (event) => {
  state.vice = event.target.value;
  save();
  render();
});
$("#coachSelect").addEventListener("change", (event) => {
  state.coach = event.target.value;
  recordStat("coaches", state.coach);
  save();
  render();
});
$("#autoPick").addEventListener("click", autoPick);
$("#clearTeam").addEventListener("click", () => {
  state.selected = Array(formation.length).fill(null);
  state.bench = benchPositions.reduce((acc, position) => {
    acc[position] = null;
    return acc;
  }, {});
  state.captain = "";
  state.vice = "";
  state.coach = "";
  save();
  render();
});

initFilters();
renderPoints();
render();
updateCountdown();
setInterval(updateCountdown, 1000);
