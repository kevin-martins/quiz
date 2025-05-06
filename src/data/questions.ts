import { QuestionModel } from "../models/questions";

export const questions: QuestionModel[] = [
  {
    id: "c98a4b82-0e43-4c64-9a07-1efae0c8a9b1",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "En quelle année a eu lieu la Révolution française ?",
    choices: ["1789", "1815", "1848", "1917"],
    answer: "1789",
    explanation: "La Révolution française a commencé en 1789, marquant la fin de la monarchie absolue et le début d'une période de profonds bouleversements sociaux et politiques."
  },
  {
    id: "f1d39fa6-c179-4e63-a1c0-7a7b8f1466b4",
    category: "Géographie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "L’Australie est plus grande que l’Europe.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "L’Europe est plus grande que l’Australie en superficie, même si l’Australie est un immense pays-continent."
  },
  {
    id: "3f0d06e7-5b57-4385-99b9-8328ebd8193e",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le carré de 15 ?",
    choices: ["215", "220", "225", "235"],
    answer: "225",
    explanation: "15 x 15 = 225. Le carré d’un nombre est obtenu en le multipliant par lui-même."
  },
  {
    id: "7b71b8aa-b2fb-4d91-aad5-e2fae1ec0c73",
    category: "Physique",
    gameMode: "Contre la montre",
    difficulty: "Difficile",
    question: "Quelle est la valeur approximative de la vitesse de la lumière dans le vide ?",
    choices: ["300 000 km/s", "150 000 km/s", "1 000 000 km/s", "299 000 km/s"],
    answer: "300 000 km/s",
    explanation: "La lumière se déplace à environ 299 792 km/s dans le vide, souvent arrondie à 300 000 km/s."
  },
  {
    id: "e909c8ff-3b4b-4e55-bcf7-7d81936a5933",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui a écrit 'Le Rouge et le Noir' ?",
    choices: ["Stendhal", "Balzac", "Flaubert", "Zola"],
    answer: "Stendhal",
    explanation: "'Le Rouge et le Noir' est un roman de Stendhal publié en 1830. Il raconte l’ascension sociale de Julien Sorel."
  },
  {
    id: "be6a6f3d-8f42-47f5-b14f-982bcb3e74c7",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel groupe a chanté 'Bohemian Rhapsody' ?",
    choices: ["Queen", "The Beatles", "Pink Floyd", "Led Zeppelin"],
    answer: "Queen",
    explanation: "'Bohemian Rhapsody' est une chanson emblématique du groupe Queen, sortie en 1975."
  },
  {
    id: "a849e939-f9ea-4c68-9706-15a07de1de5e",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Que signifie l'acronyme 'HTML' ?",
    choices: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language",
    explanation: "HTML signifie HyperText Markup Language. C’est le langage standard utilisé pour créer des pages web."
  },
  {
    id: "d19889ef-f3e5-4d92-8752-df3e217f6b0b",
    category: "Cinéma",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le film 'Titanic' a été réalisé par Steven Spielberg.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "C’est James Cameron qui a réalisé 'Titanic', sorti en 1997, et non Steven Spielberg."
  },
  {
    id: "14926c85-25c5-4e4f-8d95-5903d93916e0",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est l’organe principal de la photosynthèse chez les plantes ?",
    choices: ["La racine", "La tige", "La feuille", "La fleur"],
    answer: "La feuille",
    explanation: "C’est la feuille qui capte la lumière et permet à la plante de produire de l’énergie grâce à la photosynthèse."
  },
  {
    id: "dc3e6d63-79fd-44ad-b0a2-8e6823b99ad5",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien y a-t-il de joueurs dans une équipe de football (soccer) ?",
    choices: ["9", "10", "11", "12"],
    answer: "11",
    explanation: "Une équipe de football compte 11 joueurs sur le terrain, y compris le gardien de but."
  },
  {
    id: "a4763b18-81f6-4230-8d74-7a39b7ab8b0e",
    category: "Géographie",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel est le plus long fleuve du monde ?",
    choices: ["Nil", "Amazone", "Yangtsé", "Mississippi"],
    answer: "Amazone",
    explanation: "L’Amazone est considéré comme le fleuve le plus long du monde, avec environ 7 000 km, devant le Nil selon les dernières études."
  },
  {
    id: "c2a0671a-4fc1-4f45-ae0f-b96b23714cf3",
    category: "Physique",
    gameMode: "Vrai ou Faux",
    difficulty: "Moyen",
    question: "Le son se propage plus rapidement dans l’eau que dans l’air.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le son voyage plus vite dans l’eau (environ 1 500 m/s) que dans l’air (environ 340 m/s) en raison de la densité du milieu."
  },
  {
    id: "e63547d1-c79b-4528-964b-fd294f19a3cd",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien font 8 × 7 ?",
    choices: ["54", "56", "58", "60"],
    answer: "56",
    explanation: "8 multiplié par 7 donne 56. C’est une des opérations classiques à connaître."
  },
  {
    id: "23c3a7df-3ed9-4c85-9e59-1b49a3cd8321",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Qui était le dernier roi de France ?",
    choices: ["Louis XVI", "Louis XVIII", "Charles X", "Louis-Philippe Ier"],
    answer: "Louis-Philippe Ier",
    explanation: "Louis-Philippe Ier, roi des Français, a régné de 1830 à 1848, avant la proclamation de la Deuxième République."
  },
  {
    id: "d185e95e-49bc-456c-bc80-82699e088368",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel langage est principalement utilisé pour créer des pages web dynamiques côté client ?",
    choices: ["Python", "PHP", "JavaScript", "Java"],
    answer: "JavaScript",
    explanation: "JavaScript est le langage de script standard pour le développement web côté client."
  },
  {
    id: "9ab00b44-f1de-4bfb-8852-ef9a50d7e8fa",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel compositeur est connu pour sa Symphonie n°9 'Choral' ?",
    choices: ["Mozart", "Brahms", "Beethoven", "Chopin"],
    answer: "Beethoven",
    explanation: "La Neuvième symphonie de Beethoven est célèbre pour son 'Hymne à la joie'."
  },
  {
    id: "f676d85a-7b1c-4fd3-a86c-2d46a1262ed4",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel pays a remporté la Coupe du Monde de football en 2006 ?",
    choices: ["France", "Allemagne", "Italie", "Brésil"],
    answer: "Italie",
    explanation: "L’Italie a remporté la Coupe du Monde 2006 en Allemagne, battant la France en finale aux tirs au but."
  },
  {
    id: "92a9ed5b-8c61-4e58-a62b-6c9d47e42b7f",
    category: "Biologie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "L’oxygène est l’élément chimique le plus abondant dans l’air.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "L’azote est l’élément le plus abondant dans l’atmosphère terrestre (environ 78 %), devant l’oxygène (environ 21 %)."
  },
  {
    id: "3f7dcbd2-8261-4ae0-a5f9-daf7de2df632",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Expert",
    question: "Qui a écrit le roman 'À la recherche du temps perdu' ?",
    choices: ["André Gide", "Paul Valéry", "Marcel Proust", "Albert Camus"],
    answer: "Marcel Proust",
    explanation: "C’est Marcel Proust qui a écrit 'À la recherche du temps perdu', une œuvre monumentale en sept volumes."
  },
  {
    id: "5cdce982-bc43-4307-aabb-d41d2a92c012",
    category: "Cinéma",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel acteur incarne Indiana Jones ?",
    choices: ["Tom Hanks", "Harrison Ford", "Brad Pitt", "George Clooney"],
    answer: "Harrison Ford",
    explanation: "Harrison Ford est mondialement connu pour son rôle d’Indiana Jones dans la série de films d’aventure."
  },
  {
    id: "20cfe8fc-0d34-40b6-933a-6d6099cb2631",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel roi de France a été guillotiné pendant la Révolution française ?",
    choices: ["Louis XIV", "Louis XVI", "Charles X", "Louis-Philippe"],
    answer: "Louis XVI",
    explanation: "Louis XVI a été exécuté en 1793 pendant la Révolution française pour trahison."
  },
  {
    id: "5af8f002-eef4-4c8f-bc56-f54c56db94be",
    category: "Géographie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le Nil est le fleuve le plus long du monde.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le Nil, avec environ 6 650 km, est souvent considéré comme le fleuve le plus long du monde, bien que certaines sources mentionnent l’Amazone."
  },
  {
    id: "fbe28567-d61c-40cf-9f3a-ff0a69b169ae",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le résultat de 12 × 13 ?",
    choices: ["146", "156", "166", "176"],
    answer: "156",
    explanation: "12 multiplié par 13 donne 156."
  },
  {
    id: "79689f67-b60f-4b55-bbdf-0e71e1e2a07e",
    category: "Physique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quelle est l’unité de mesure de la force dans le système international ?",
    choices: ["Joule", "Pascal", "Newton", "Watt"],
    answer: "Newton",
    explanation: "La force se mesure en Newtons (N) dans le système international d’unités."
  },
  {
    id: "34762a30-66aa-4d1f-a933-cdd7dfb3e31f",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel est le symbole chimique de l’eau ?",
    choices: ["O2", "H2", "H2O", "HO2"],
    answer: "H2O",
    explanation: "La molécule d’eau est composée de deux atomes d’hydrogène et un atome d’oxygène, soit H2O."
  },
  {
    id: "fd985b32-7ce5-4fc0-9bd3-5500b2637f4d",
    category: "Biologie",
    gameMode: "Vrai ou Faux",
    difficulty: "Moyen",
    question: "Le cœur humain possède quatre cavités.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le cœur humain comporte deux oreillettes et deux ventricules, soit quatre cavités."
  },
  {
    id: "a944b700-3ae9-4c16-8412-ccba62ad2db4",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel auteur a écrit 'À la recherche du temps perdu' ?",
    choices: ["Marcel Proust", "André Gide", "Paul Valéry", "Albert Camus"],
    answer: "Marcel Proust",
    explanation: "Marcel Proust est l’auteur de cette œuvre monumentale composée de sept volumes."
  },
  {
    id: "3be6f2b0-27f7-41e5-a06c-ec3e987b0ab0",
    category: "Art",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Qui a peint la Joconde ?",
    choices: ["Raphaël", "Michel-Ange", "Léonard de Vinci", "Caravage"],
    answer: "Léonard de Vinci",
    explanation: "La Joconde est une peinture célèbre de Léonard de Vinci, exposée au Louvre à Paris."
  },
  {
    id: "7b517315-0c3e-48b8-a6d6-43e222b1b727",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Expert",
    question: "Quel algorithme est utilisé pour chiffrer les connexions HTTPS ?",
    choices: ["RSA", "MD5", "SHA-256", "DES"],
    answer: "RSA",
    explanation: "Le protocole HTTPS utilise des algorithmes asymétriques comme RSA pour chiffrer les échanges entre client et serveur."
  },
  {
    id: "3d3fc13b-8452-47d6-89e3-d0f738fd25a2",
    category: "Sport",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Un match de rugby oppose deux équipes de 15 joueurs.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Au rugby à XV, chaque équipe est composée de 15 joueurs sur le terrain."
  }
]
