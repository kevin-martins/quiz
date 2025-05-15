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
    answer: "Nil",
    explanation: "Le Nil est le plus long fleuve du monde avec 6 650 km."
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
  },
  {
    id: "63f71a22-4b67-4eec-a2f7-d1d4b0c38f5b",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien y a-t-il de continents sur Terre ?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe, Océanie."
  },
  {
    id: "8f426cc6-361b-4c3e-8c9e-7db388089243",
    category: "Musique",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Mozart était un compositeur du XXe siècle.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Mozart était un compositeur du XVIIIe siècle, principalement associé à la période classique."
  },
  {
    id: "b155d997-1292-4964-a1b5-bbe4776ac85e",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel organe humain est principalement responsable de la filtration du sang ?",
    choices: ["Le foie", "Le cœur", "Le rein", "La rate"],
    answer: "Le rein",
    explanation: "Les reins filtrent le sang pour éliminer les déchets et produire l’urine."
  },
  {
    id: "edb49014-9355-4f8e-b2c3-7481e237c4a2",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien de côtés possède un hexagone ?",
    choices: ["5", "6", "7", "8"],
    answer: "6",
    explanation: "Un hexagone est un polygone à 6 côtés."
  },
  {
    id: "0c33f1bc-d14d-4f2e-9304-574b1d22131d",
    category: "Cinéma",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel film a remporté l’Oscar du meilleur film en 1994 ?",
    choices: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Quatre mariages et un enterrement"],
    answer: "Forrest Gump",
    explanation: "Forrest Gump a remporté l’Oscar du meilleur film en 1994, surpassant des films cultes comme Pulp Fiction."
  },
  {
    id: "c3fa7628-1cb2-4f8d-8a4d-e808cf9e5e41",
    category: "Physique",
    gameMode: "Vrai ou Faux",
    difficulty: "Moyen",
    question: "La température de zéro Kelvin correspond au zéro absolu.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Zéro Kelvin représente la température la plus basse possible, où les particules cessent tout mouvement thermique."
  },
  {
    id: "7f27885e-9f2e-4990-9dc6-91cc0649bfc3",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Expert",
    question: "Quel écrivain français a obtenu le prix Nobel de littérature en 1957 ?",
    choices: ["Albert Camus", "Jean-Paul Sartre", "André Gide", "Romain Gary"],
    answer: "Albert Camus",
    explanation: "Albert Camus a reçu le prix Nobel de littérature en 1957 pour l'ensemble de son œuvre, notamment 'L'Étranger'."
  },
  {
    id: "76bd7c0a-dc87-4a5b-b2e7-c0a3e9df9d35",
    category: "Art",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Dans quel musée est exposée la Joconde ?",
    choices: ["Musée d'Orsay", "Le Louvre", "Le Prado", "Le MET"],
    answer: "Le Louvre",
    explanation: "La Joconde, peinte par Léonard de Vinci, est exposée au musée du Louvre à Paris."
  },
  {
    id: "da0f3fcd-e837-4be0-9f5b-09b3ef07e0e2",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel pays a remporté la Coupe du Monde de football en 2014 ?",
    choices: ["Argentine", "Brésil", "Allemagne", "Espagne"],
    answer: "Allemagne",
    explanation: "L'Allemagne a remporté la Coupe du Monde de la FIFA en 2014 au Brésil, battant l’Argentine en finale."
  },
  {
    id: "4c7b36fc-365d-4ec3-b22e-bf2b6dfdb8b3",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Qui était le premier empereur de France ?",
    choices: ["Napoléon Bonaparte", "Louis XIV", "Charlemagne", "Henri IV"],
    answer: "Napoléon Bonaparte",
    explanation: "Napoléon Bonaparte est devenu le premier empereur de France en 1804."
  },
  {
    id: "57f9ac35-e314-4fc9-861f-f0f893c80c60",
    category: "Géographie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le fleuve Amazone traverse le Brésil.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le fleuve Amazone traverse une grande partie du Brésil avant de se jeter dans l’océan Atlantique."
  },
  {
    id: "cab8cf18-2e78-43b5-881f-7cb016d32764",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Combien font 12 x 12 ?",
    choices: ["124", "134", "144", "154"],
    answer: "144",
    explanation: "12 multiplié par 12 donne 144."
  },
  {
    id: "87a2f1da-d1fd-47c0-9a3f-1fa2c1df34e3",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le symbole chimique du sodium ?",
    choices: ["Na", "So", "Sn", "S"],
    answer: "Na",
    explanation: "Le symbole chimique du sodium est Na, dérivé du latin 'Natrium'."
  },
  {
    id: "8cd5b729-5e33-4c71-acc0-74974aa7cd02",
    category: "Physique",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel scientifique a formulé la loi de la gravitation universelle ?",
    choices: ["Einstein", "Galilée", "Newton", "Kepler"],
    answer: "Newton",
    explanation: "Isaac Newton a formulé la loi de la gravitation universelle au XVIIe siècle."
  },
  {
    id: "4736ea3d-6842-4714-9e3d-384c74a0f020",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quelle molécule transporte l’oxygène dans le sang ?",
    choices: ["Globuline", "Hémoglobine", "Insuline", "Adrénaline"],
    answer: "Hémoglobine",
    explanation: "L’hémoglobine est une protéine contenue dans les globules rouges qui transporte l’oxygène dans le corps."
  },
  {
    id: "967a65b1-b653-4299-8666-052c01bfe1a7",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel système d’exploitation est développé par Microsoft ?",
    choices: ["Linux", "macOS", "Windows", "Ubuntu"],
    answer: "Windows",
    explanation: "Windows est un système d’exploitation développé par Microsoft depuis les années 80."
  },
  {
    id: "f20648da-4b60-4e57-937c-f5ec865df43e",
    category: "Littérature",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Victor Hugo a écrit 'Les Misérables'.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Victor Hugo est l’auteur du célèbre roman 'Les Misérables', publié en 1862."
  },
  {
    id: "bb78f5e7-b662-4356-88e7-3d3cf16c4c06",
    category: "Art",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui a peint 'La Nuit étoilée' ?",
    choices: ["Claude Monet", "Vincent Van Gogh", "Pablo Picasso", "Paul Cézanne"],
    answer: "Vincent Van Gogh",
    explanation: "'La Nuit étoilée' est une célèbre toile peinte par Van Gogh en 1889."
  },
  {
    id: "a646e9db-53c5-4e91-b579-24a11e348fcf",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel est le symbole chimique de l’eau ?",
    choices: ["O2", "H2", "H2O", "CO2"],
    answer: "H2O",
    explanation: "La molécule d’eau est composée de deux atomes d’hydrogène et d’un atome d’oxygène, soit H2O."
  },
  {
    id: "e87d5ec0-c7b6-4c94-8b25-cb33e5a7d40f",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel sport est pratiqué à Roland-Garros ?",
    choices: ["Tennis", "Football", "Basketball", "Rugby"],
    answer: "Tennis",
    explanation: "Roland-Garros est un tournoi de tennis du Grand Chelem qui se tient chaque année à Paris."
  },
  {
    id: "1e13d41a-95ee-44ec-b9ff-93f7408fdb16",
    category: "Cinéma",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le film 'Avatar' est sorti avant l’an 2000.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "'Avatar' est sorti en 2009, réalisé par James Cameron."
  },
  {
    id: "2f6fcf21-4c82-4f8d-bcc5-00ff3277a82d",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui est l’auteur-compositeur de la chanson 'Imagine' ?",
    choices: ["Elton John", "John Lennon", "Paul McCartney", "Bob Dylan"],
    answer: "John Lennon",
    explanation: "'Imagine' est une chanson emblématique de John Lennon sortie en 1971."
  },
  {
    id: "f233ea1a-30fb-4190-b6a0-e171f46ce7f0",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le résultat de l’intégrale de x² dx ?",
    choices: ["x³ + C", "(1/3)x³ + C", "(1/2)x² + C", "x² + C"],
    answer: "(1/3)x³ + C",
    explanation: "L’intégrale de x² par rapport à x est (1/3)x³ + C, où C est une constante d’intégration."
  },
  {
    id: "b858bc0e-bd56-49a0-b169-d6d6fa0bb88a",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien de continents existe-t-il sur Terre ?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe et Océanie."
  },
  {
    id: "9a642355-1794-497b-a56d-1c2caaae444a",
    category: "Sciences Sociales",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le système politique des États-Unis ?",
    choices: ["Monarchie", "République parlementaire", "République fédérale", "Dictature"],
    answer: "République fédérale",
    explanation: "Les États-Unis sont une république fédérale composée de 50 États et gouvernée par une constitution."
  },
  {
    id: "4f24cb52-5d17-40e5-956d-138f2489f1bb",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui a écrit 'L’Étranger' ?",
    choices: ["Albert Camus", "Jean-Paul Sartre", "André Gide", "Boris Vian"],
    answer: "Albert Camus",
    explanation: "'L’Étranger' est un roman d’Albert Camus, publié en 1942, emblématique de l’absurde."
  },
  {
    id: "12aef66b-23b4-40e7-9e50-36dd7f6d25c1",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel langage est principalement utilisé pour les pages web ?",
    choices: ["Python", "C++", "HTML", "Java"],
    answer: "HTML",
    explanation: "HTML est le langage de balisage standard pour créer des pages web."
  },
  {
    id: "6b2c80e3-8489-45e3-9c3c-00f5de68256c",
    category: "Biologie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "L’ADN est présent uniquement chez les êtres humains.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "L’ADN est une molécule présente dans tous les êtres vivants, pas seulement chez les humains."
  },
  {
    id: "6e5429e3-8491-441e-94dc-3e8ef9d7f624",
    category: "Physique",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quelle unité mesure la fréquence ?",
    choices: ["Newton", "Watt", "Hertz", "Joule"],
    answer: "Hertz",
    explanation: "La fréquence, c’est-à-dire le nombre de cycles par seconde, se mesure en hertz (Hz)."
  },
  {
    id: "0199dc27-0b1c-43e2-89e4-d3481f7d9dc6",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le symbole chimique de l’or ?",
    choices: ["O", "Ag", "Au", "Fe"],
    answer: "Au",
    explanation: "Le symbole chimique de l’or est 'Au', dérivé du mot latin 'Aurum'."
  },
  {
    id: "1acace3a-763f-4b60-917a-207a3a18a5b8",
    category: "Art",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Qui a peint 'La Joconde' ?",
    choices: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Rembrandt"],
    answer: "Léonard de Vinci",
    explanation: "'La Joconde' est une œuvre célèbre peinte par Léonard de Vinci entre 1503 et 1506."
  },
  {
    id: "c2ff08e2-027b-441e-bace-0e607e7e0a39",
    category: "Géographie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le Nil est le plus long fleuve du monde.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le Nil est souvent considéré comme le plus long fleuve du monde, avec environ 6 650 km."
  },
  {
    id: "c1d74ef5-529a-41fd-91e7-25b9d570f7ff",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui était le premier président de la Cinquième République française ?",
    choices: ["Georges Pompidou", "Charles de Gaulle", "François Mitterrand", "Jacques Chirac"],
    answer: "Charles de Gaulle",
    explanation: "Charles de Gaulle fut le premier président de la Cinquième République, élu en 1958."
  },
  {
    id: "fe442a95-2a3a-4396-9312-7e3529c1b7d4",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien de côtés a un hexagone ?",
    choices: ["5", "6", "7", "8"],
    answer: "6",
    explanation: "Un hexagone est une figure géométrique à six côtés."
  },
  {
    id: "47d3c01d-60a0-4a15-97c3-4dc7bcf8c3a5",
    category: "Sciences Sociales",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel philosophe a écrit 'Le Contrat social' ?",
    choices: ["Voltaire", "Montesquieu", "Jean-Jacques Rousseau", "Diderot"],
    answer: "Jean-Jacques Rousseau",
    explanation: "'Le Contrat social' est une œuvre politique majeure sur la démocratie et la souveraineté du peuple écrit par Rousseau en 1762."
  },
  {
    id: "3b3ffb60-193f-4e0e-8e61-0d7a3605c2c1",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel organe du corps humain est responsable de la production d’insuline ?",
    choices: ["Le foie", "Le pancréas", "Les reins", "L’estomac"],
    answer: "Le pancréas",
    explanation: "Le pancréas produit l’insuline, une hormone essentielle à la régulation du glucose sanguin."
  },
  {
    id: "b1a56f3d-8f15-4215-9476-92b982b3e3fc",
    category: "Informatique",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le système d’exploitation Linux est payant.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Linux est un système d’exploitation libre et gratuit, bien que certaines distributions puissent être payantes."
  },
  {
    id: "65fd5b2e-4c8a-44a2-b7a0-dc4df8f0e3ef",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel compositeur est connu pour ses neuf symphonies ?",
    choices: ["Mozart", "Beethoven", "Chopin", "Bach"],
    answer: "Beethoven",
    explanation: "Ludwig van Beethoven a composé neuf célèbres symphonies, dont la Neuvième avec l’Ode à la Joie."
  },
  {
    id: "38bc14d7-23e2-4be4-8e3c-34846e083ace",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel auteur a écrit 'Les Misérables' ?",
    choices: ["Émile Zola", "Victor Hugo", "Gustave Flaubert", "Albert Camus"],
    answer: "Victor Hugo",
    explanation: "'Les Misérables' est un roman emblématique de Victor Hugo, publié en 1862."
  },
  {
    id: "0d203bd9-fef0-4173-b5e3-ea2db41fc0f3",
    category: "Physique",
    gameMode: "Classique",
    difficulty: "Expert",
    question: "Quelle est la formule de l’énergie cinétique ?",
    choices: ["E = mc²", "E = ½mv²", "E = mgh", "E = Fd"],
    answer: "E = ½mv²",
    explanation: "L’énergie cinétique d’un objet est calculée avec la formule E = ½mv², où m est la masse et v la vitesse."
  },
  {
    id: "ecf91ec2-c694-4b6d-a579-f35c86cd31fa",
    category: "Culture Générale",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le fromage roquefort est fabriqué à base de lait de vache.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Le roquefort est un fromage à base de lait de brebis."
  },
  {
    id: "22f25cfc-e1b7-457b-b7e7-11f6bafc3cd4",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Combien vaut la somme des angles d’un triangle ?",
    choices: ["90°", "180°", "270°", "360°"],
    answer: "180°",
    explanation: "La somme des angles d’un triangle est toujours égale à 180 degrés."
  },
  {
    id: "0e2d27df-39c3-422e-bd36-621e9a07d708",
    category: "Cinéma",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel film a remporté l’Oscar du meilleur film en 1994 ?",
    choices: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Quatre mariages et un enterrement"],
    answer: "Forrest Gump",
    explanation: "'Forrest Gump' a remporté l’Oscar du meilleur film en 1994."
  },
  {
    id: "a765e763-88b7-4f21-9947-e2a63f7c376e",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le nom de la molécule qui transporte l’oxygène dans le sang ?",
    choices: ["Insuline", "Hémoglobine", "Chlorophylle", "Adénosine"],
    answer: "Hémoglobine",
    explanation: "L’hémoglobine est la protéine des globules rouges qui transporte l’oxygène dans le sang."
  },
  {
    id: "1ffef47b-5e1e-4997-9a93-f1b9b7790bd7",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel langage est principalement utilisé pour le développement web côté client ?",
    choices: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    explanation: "JavaScript est le langage de script utilisé pour rendre les pages web interactives côté client."
  },
  {
    id: "fdf2f254-00c4-4603-8d40-169ae790cb79",
    category: "Sport",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le Tour de France est une compétition de ski.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Le Tour de France est une célèbre course cycliste qui a lieu chaque été."
  },
  {
    id: "6a9bd537-2958-4065-b0cc-b7635e9cb2e7",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Expert",
    question: "Quel est le numéro atomique du carbone ?",
    choices: ["6", "8", "12", "14"],
    answer: "6",
    explanation: "Le carbone a pour symbole C et son numéro atomique est 6."
  },
  {
    id: "e07364eb-0dc9-4c91-91e4-e02dc9a3a017",
    category: "Géographie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quelle est la capitale de l’Australie ?",
    choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
    explanation: "Contrairement à une idée reçue, la capitale de l’Australie est Canberra et non Sydney."
  },
  {
    id: "b58d4be4-7262-4df9-a37d-7f27b1d21645",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui est le chanteur principal du groupe U2 ?",
    choices: ["Bono", "Sting", "Mick Jagger", "Freddie Mercury"],
    answer: "Bono",
    explanation: "Bono est le chanteur principal du groupe de rock irlandais U2."
  },
  {
    id: "ef1a3cc3-61ee-4433-a9e3-8993d117b3e6",
    category: "Art",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "La Joconde est exposée au Louvre.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "La Joconde, peinte par Léonard de Vinci, est exposée au musée du Louvre à Paris."
  },
  {
    id: "8451970f-62df-4d73-9f38-3e5e4d91d99e",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel célèbre mur est tombé en 1989 ?",
    choices: ["Mur d’Atlantique", "Mur de Berlin", "Mur des Lamentations", "Mur de Chine"],
    answer: "Mur de Berlin",
    explanation: "Le Mur de Berlin est tombé en 1989, marquant la fin de la division entre l’Est et l’Ouest de l’Allemagne."
  },
  {
    id: "2fa6e9a0-cd3f-49b7-9185-15ea119a6a47",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel organe produit l’insuline dans le corps humain ?",
    choices: ["Le foie", "Le pancréas", "L’estomac", "Les reins"],
    answer: "Le pancréas",
    explanation: "L’insuline est produite par le pancréas pour réguler le taux de sucre dans le sang."
  },
  {
    id: "c4d05d4e-f2c2-4f10-aace-f1a3a981ddfc",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien y a-t-il de continents sur Terre ?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Les 7 continents sont : l’Europe, l’Asie, l’Afrique, l’Amérique du Nord, l’Amérique du Sud, l’Océanie et l’Antarctique."
  },
  {
    id: "cf4f7792-161c-4e80-8f8e-f3e0f08356d7",
    category: "Informatique",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Linux est un système d’exploitation.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Linux est un système d’exploitation libre et open source utilisé dans de nombreux domaines informatiques."
  },
  {
    id: "ec429aa2-5389-4c8e-8b8c-37b4901d18d1",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le nombre premier immédiatement supérieur à 100 ?",
    choices: ["101", "103", "107", "109"],
    answer: "101",
    explanation: "101 est le plus petit nombre premier strictement supérieur à 100."
  },
  {
    id: "73cbe152-e0c1-4dcd-a0d5-b5c445f4786f",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel joueur de tennis a remporté le plus de tournois du Grand Chelem en simple ?",
    choices: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    answer: "Novak Djokovic",
    explanation: "Novak Djokovic détient le record du nombre de titres en Grand Chelem en simple chez les hommes."
  },
  {
    id: "39436a10-9494-4348-a022-6213d2c14f3f",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel gaz est produit lors de la photosynthèse ?",
    choices: ["Carbone", "Hydrogène", "Oxygène", "Azote"],
    answer: "Oxygène",
    explanation: "La photosynthèse produit de l’oxygène comme sous-produit de la conversion du dioxyde de carbone."
  },
  {
    id: "f83f1ae6-f86f-47b5-867e-0c79a2e81b3c",
    category: "Physique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel scientifique a découvert la loi de la gravitation universelle ?",
    choices: ["Galilée", "Einstein", "Newton", "Copernic"],
    answer: "Newton",
    explanation: "Isaac Newton a formulé la loi de la gravitation universelle au XVIIe siècle."
  },
  {
    id: "c504e730-1a3a-40a1-a6eb-5e33c6b364d7",
    category: "Cinéma",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le film 'Le Parrain' a été réalisé par Martin Scorsese.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "'Le Parrain' a été réalisé par Francis Ford Coppola, pas Martin Scorsese."
  },
  {
    id: "a10fc6d4-9405-4cb2-b6a4-b08dbf623ac2",
    category: "Culture Générale",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le plus ancien alphabet connu ?",
    choices: ["Alphabet latin", "Alphabet grec", "Alphabet phénicien", "Alphabet arabe"],
    answer: "Alphabet phénicien",
    explanation: "L’alphabet phénicien, apparu vers 1050 av. J.-C., est le plus ancien connu à ce jour."
  },
  {
    id: "df85e2e8-dfe4-4c91-b74f-9c5b87aa5082",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui a écrit 'Les Misérables' ?",
    choices: ["Victor Hugo", "Émile Zola", "Alphonse Daudet", "Guy de Maupassant"],
    answer: "Victor Hugo",
    explanation: "Victor Hugo est l’auteur du roman 'Les Misérables', publié en 1862."
  },
  {
    id: "d82d7a2d-57cb-40ef-84b3-1596612e3d86",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien d’os composent le squelette humain adulte ?",
    choices: ["206", "201", "210", "190"],
    answer: "206",
    explanation: "Le squelette humain adulte est constitué de 206 os."
  },
  {
    id: "f3938eae-6e4b-4dfc-bd1e-245c364e3ef0",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quelle nation a remporté le plus de médailles aux Jeux Olympiques d’été ?",
    choices: ["Russie", "Allemagne", "États-Unis", "Chine"],
    answer: "États-Unis",
    explanation: "Les États-Unis sont la nation ayant remporté le plus de médailles dans l’histoire des JO d’été."
  },
  {
    id: "f8c3cc90-c6e5-4b95-8aa5-18c56dbbe3a1",
    category: "Chimie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Le symbole chimique du fer est Fe.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "Le fer est représenté par le symbole Fe, issu du latin *ferrum*."
  },
  {
    id: "8d6d1794-1be3-4701-840b-f37c83e8a84d",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel langage est principalement utilisé pour développer des applications iOS ?",
    choices: ["Java", "Kotlin", "Swift", "C#"],
    answer: "Swift",
    explanation: "Swift est le langage moderne développé par Apple pour remplacer Objective-C dans le développement iOS."
  },
  {
    id: "13de1647-85ae-4b3e-9de3-00bcfc67faeb",
    category: "Art",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Qui a peint 'La Nuit étoilée' ?",
    choices: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Édouard Manet"],
    answer: "Vincent van Gogh",
    explanation: "Van Gogh a peint 'La Nuit étoilée' en 1889 depuis l’asile où il était interné."
  },
  {
    id: "ac3b758e-b7f7-42e7-b9c5-b57e7e3561e7",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel organe du corps humain produit l’insuline ?",
    choices: ["Le foie", "Le pancréas", "L’estomac", "Les reins"],
    answer: "Le pancréas",
    explanation: "Le pancréas produit l’insuline, une hormone essentielle à la régulation du glucose dans le sang."
  },
  {
    id: "99bbbd7a-84cc-49a4-a7b0-f8c0c0e4f812",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel traité a mis fin à la Première Guerre mondiale ?",
    choices: ["Traité de Versailles", "Traité de Tordesillas", "Traité de Rome", "Traité de Paris"],
    answer: "Traité de Versailles",
    explanation: "Signé en 1919, le traité de Versailles a officiellement mis fin à la Première Guerre mondiale."
  },
  {
    id: "f9163a2d-1dd2-4c4a-ae9b-712e50b3f0e5",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel compositeur est connu pour la 'Symphonie n°9' dite 'du Nouveau Monde' ?",
    choices: ["Mozart", "Dvořák", "Beethoven", "Haydn"],
    answer: "Dvořák",
    explanation: "Antonín Dvořák a composé la célèbre 'Symphonie du Nouveau Monde' en 1893."
  },
  {
    id: "6ce48d1f-2747-4b36-a62b-6eecb4ce07ee",
    category: "Culture Générale",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "La langue la plus parlée au monde est l’anglais.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Le mandarin est la langue la plus parlée au monde en nombre de locuteurs natifs."
  },
  {
    id: "77659d3f-f5d0-4c91-9d17-0b432ed2025a",
    category: "Géographie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le plus haut sommet d’Afrique ?",
    choices: ["Kilimandjaro", "Mont Kenya", "Rwenzori", "Simien"],
    answer: "Kilimandjaro",
    explanation: "Le Kilimandjaro, situé en Tanzanie, est le point culminant de l’Afrique avec ses 5 895 mètres."
  },
  {
    id: "f342b3e6-0387-45aa-a6f5-e2c2f601c9fd",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel système d’exploitation a été développé par Microsoft ?",
    choices: ["Linux", "Windows", "macOS", "Ubuntu"],
    answer: "Windows",
    explanation: "Windows est un système d’exploitation développé par Microsoft depuis 1985."
  },
  {
    id: "58024683-5f86-4d2f-b276-1938df8042fa",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel gaz est essentiel à la respiration humaine ?",
    choices: ["Hydrogène", "Oxygène", "Azote", "Carbone"],
    answer: "Oxygène",
    explanation: "L’oxygène est le gaz nécessaire à la respiration des cellules humaines."
  },
  {
    id: "5b2bcb94-5e0c-456d-bdf2-10ec3943a742",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel personnage est associé à la phrase 'Je suis ton père' ?",
    choices: ["Dumbledore", "Voldemort", "Dark Vador", "Gandalf"],
    answer: "Dark Vador",
    explanation: "Cette phrase emblématique est prononcée par Dark Vador dans 'Star Wars, épisode V'."
  },
  {
    id: "af3f7e55-3532-4db8-9a9e-96786d34c72d",
    category: "Sciences Sociales",
    gameMode: "Vrai ou Faux",
    difficulty: "Moyen",
    question: "Le PIB est un indicateur du niveau de bonheur dans un pays.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Le PIB mesure la production économique, mais pas le bien-être ou le bonheur de la population."
  },
  {
    id: "cd39f6c7-8f36-45c4-9c8e-1fd9b9b3030e",
    category: "Culture Générale",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "La tour Eiffel a été construite pour l'Exposition universelle de 1889.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "La tour Eiffel a été construite pour l'Exposition universelle de Paris en 1889."
  },
  {
    id: "5b38a46d-7cb0-4e6a-b848-79ec56b369f2",
    category: "Cinéma",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel film a remporté l’Oscar du meilleur film en 1994 ?",
    choices: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Quatre mariages et un enterrement"],
    answer: "Forrest Gump",
    explanation: "Forrest Gump a remporté l’Oscar du meilleur film en 1994, avec Tom Hanks dans le rôle principal."
  },
  {
    id: "cf935d29-fd25-4e50-97a7-ef51cfe01301",
    category: "Biologie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le rôle principal des globules rouges ?",
    choices: ["Combattre les infections", "Transporter l’oxygène", "Produire des hormones", "Digérer les aliments"],
    answer: "Transporter l’oxygène",
    explanation: "Les globules rouges transportent l’oxygène des poumons vers les tissus du corps."
  },
  {
    id: "bfcf165a-4325-4a4c-a01a-00b67f6d7d41",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel compositeur est célèbre pour ses neuf symphonies ?",
    choices: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
    answer: "Beethoven",
    explanation: "Ludwig van Beethoven est connu pour avoir composé neuf symphonies majeures."
  },
  {
    id: "2918d2ff-d870-4b15-b2c1-d5fa624a4c87",
    category: "Sciences Sociales",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "La sociologie est l’étude des sociétés humaines.",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
    explanation: "La sociologie est une discipline qui étudie les comportements et structures sociales humaines."
  },
  {
    id: "a75f18c2-c979-4d90-9a03-0100c186afde",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel langage est principalement utilisé pour développer des applications Android ?",
    choices: ["Java", "Python", "Swift", "Ruby"],
    answer: "Java",
    explanation: "Java est le langage principal utilisé pour développer des applications Android."
  },
  {
    id: "dc41f2cf-78b4-46a5-b4a6-e011f1ae5b2d",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le vrai nom de Voltaire ?",
    choices: ["François-Marie Arouet", "Jean-Jacques Rousseau", "Denis Diderot", "Charles Baudelaire"],
    answer: "François-Marie Arouet",
    explanation: "Voltaire est le nom de plume de François-Marie Arouet, écrivain et philosophe du XVIIIe siècle."
  },
  {
    id: "18c2de78-5f61-4f33-a783-e8a9d66059d2",
    category: "Géographie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le plus grand désert chaud du monde ?",
    choices: ["Désert de Gobi", "Sahara", "Désert d’Atacama", "Désert du Kalahari"],
    answer: "Sahara",
    explanation: "Le Sahara est le plus grand désert chaud du monde, situé en Afrique du Nord."
  },
  {
    id: "7f23b9f1-64f1-4977-83b6-52940e9798e3",
    category: "Sport",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Combien de points vaut un essai au rugby ?",
    choices: ["3", "5", "7", "10"],
    answer: "5",
    explanation: "Un essai vaut 5 points en rugby, auxquels peuvent s'ajouter 2 points si la transformation est réussie."
  },
  {
    id: "c63a1772-4457-4b9a-b10d-e6d7e16fd94a",
    category: "Culture Générale",
    gameMode: "Vrai ou Faux",
    difficulty: "Moyen",
    question: "La Terre est plus proche du Soleil en été qu’en hiver.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Les saisons sont dues à l’inclinaison de la Terre et non à sa distance par rapport au Soleil."
  },
  {
    id: "2cc03e36-7ed7-47df-82b6-2c2e91c008e7",
    category: "Chimie",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel est le symbole chimique de l’or ?",
    choices: ["Ag", "Au", "Fe", "Pb"],
    answer: "Au",
    explanation: "Le symbole chimique de l’or est 'Au', issu du mot latin 'Aurum'."
  },
  {
    id: "ea8fc038-7007-480a-9a63-bb4df53a6a4d",
    category: "Histoire",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quelle civilisation a construit la cité de Machu Picchu ?",
    choices: ["Aztèque", "Maya", "Inca", "Olmèque"],
    answer: "Inca",
    explanation: "Machu Picchu a été construite par les Incas au XVe siècle dans les Andes péruviennes."
  },
  {
    id: "0937ad23-2f27-43c2-a124-bd655b7f6ed5",
    category: "Musique",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel artiste est surnommé 'le Roi de la Pop' ?",
    choices: ["Prince", "Michael Jackson", "Elvis Presley", "Justin Timberlake"],
    answer: "Michael Jackson",
    explanation: "Michael Jackson est mondialement reconnu comme 'le Roi de la Pop'."
  },
  {
    id: "763d8657-e7b9-474a-96cf-442cb96e1a29",
    category: "Biologie",
    gameMode: "Vrai ou Faux",
    difficulty: "Facile",
    question: "Les champignons sont des plantes.",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
    explanation: "Les champignons ne sont pas des plantes ; ils appartiennent à un règne distinct."
  },
  {
    id: "f6f4d1c0-4ec2-4fbe-9c3c-442f08e318df",
    category: "Cinéma",
    gameMode: "Classique",
    difficulty: "Facile",
    question: "Quel personnage est célèbre pour la réplique : 'Je suis ton père' ?",
    choices: ["Yoda", "Dark Vador", "Obi-Wan Kenobi", "Han Solo"],
    answer: "Dark Vador",
    explanation: "Dark Vador prononce cette phrase dans 'Star Wars: L’Empire contre-attaque'."
  },
  {
    id: "d3bfa1bc-fc8c-4aa3-b5e4-2f8b4a3c967a",
    category: "Mathématiques",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Combien de côtés possède un dodécagone ?",
    choices: ["10", "12", "14", "16"],
    answer: "12",
    explanation: "Un dodécagone est un polygone à 12 côtés."
  },
  {
    id: "04f12184-bb8b-4263-b999-bcb0fa9b00bb",
    category: "Informatique",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel est le nom du créateur de Linux ?",
    choices: ["Linus Torvalds", "Bill Gates", "Steve Jobs", "Dennis Ritchie"],
    answer: "Linus Torvalds",
    explanation: "Linus Torvalds a créé le noyau Linux en 1991, aujourd’hui utilisé dans de nombreux systèmes."
  },
  {
    id: "3b46391a-bd8f-49a4-90f3-3d0ecf76926d",
    category: "Littérature",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel écrivain a créé le personnage de Sherlock Holmes ?",
    choices: ["Agatha Christie", "Arthur Conan Doyle", "Jules Verne", "Stephen King"],
    answer: "Arthur Conan Doyle",
    explanation: "Le détective Sherlock Holmes est un personnage imaginé par l’auteur britannique Arthur Conan Doyle."
  },
  {
  id: "17cf38ae-fd20-4f27-8bd2-16eaa909a321",
  category: "Géographie",
  gameMode: "Trouve l'erreur",
  difficulty: "Moyen",
  question: "Lequel de ces pays ne fait pas partie de l'Union européenne ?",
  choices: ["Espagne", "Pologne", "Norvège", "Italie"],
  answer: "Norvège",
  explanation: "La Norvège ne fait pas partie de l’Union européenne, contrairement à l’Espagne, l’Italie et la Pologne."
  },
  {
    id: "3d2ebfaa-6e10-45b4-9780-7b6391e2cf6e",
    category: "Sciences Sociales",
    gameMode: "Trouve l'erreur",
    difficulty: "Facile",
    question: "Lequel de ces droits n’est pas un droit fondamental de l’homme selon la Déclaration universelle des droits de l’homme ?",
    choices: ["Droit à la vie", "Droit à l'éducation", "Droit de vote pour les animaux", "Droit à la liberté"],
    answer: "Droit de vote pour les animaux",
    explanation: "La Déclaration universelle des droits de l’homme ne fait aucunement mention du droit de vote pour les animaux."
  },
  {
    id: "b064b50f-7f85-4b8e-9a7f-0f1f45c132f2",
    category: "Physique",
    gameMode: "Trouve l'erreur",
    difficulty: "Difficile",
    question: "Laquelle de ces particules n’est pas un fermion ?",
    choices: ["Électron", "Neutrino", "Proton", "Photon"],
    answer: "Photon",
    explanation: "Le photon est un boson, tandis que l’électron, le neutrino et le proton sont des fermions."
  },
  {
    id: "b715254b-1c9e-4cf3-a161-b3a8195f9306",
    category: "Informatique",
    gameMode: "Trouve l'erreur",
    difficulty: "Moyen",
    question: "Lequel de ces langages n’est pas utilisé pour le développement web ?",
    choices: ["HTML", "CSS", "Python", "Photoshop"],
    answer: "Photoshop",
    explanation: "Photoshop est un logiciel de graphisme, pas un langage de programmation pour le web."
  },
  {
    id: "abf0c8b9-0142-4c18-b6c3-348fc1f6bff5",
    category: "Histoire",
    gameMode: "Trouve l'erreur",
    difficulty: "Moyen",
    question: "Laquelle de ces personnalités n’a pas été un président de la République française ?",
    choices: ["François Mitterrand", "Charles de Gaulle", "Jacques Chirac", "Napoléon Bonaparte"],
    answer: "Napoléon Bonaparte",
    explanation: "Napoléon Bonaparte était empereur, et non président de la République française."
  }
]
