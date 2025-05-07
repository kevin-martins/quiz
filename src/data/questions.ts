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
    id: "e2c12df4-7c76-43dc-a13b-0c47233d435b",
    category: "Sciences Sociales",
    gameMode: "Classique",
    difficulty: "Moyen",
    question: "Quel philosophe a écrit 'Le Contrat Social' ?",
    choices: ["Voltaire", "Montesquieu", "Rousseau", "Descartes"],
    answer: "Rousseau",
    explanation: "Jean-Jacques Rousseau a écrit 'Du contrat social' en 1762, une œuvre majeure de la philosophie politique."
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
    explanation: "'Le Contrat social' est une œuvre politique majeure écrite par Rousseau en 1762."
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
    id: "73d9c4d2-b597-43b4-b5f9-514f10b994e2",
    category: "Sciences Sociales",
    gameMode: "Classique",
    difficulty: "Difficile",
    question: "Quel philosophe est l’auteur du 'Contrat social' ?",
    choices: ["John Locke", "Voltaire", "Jean-Jacques Rousseau", "Montesquieu"],
    answer: "Jean-Jacques Rousseau",
    explanation: "Rousseau a écrit 'Du contrat social', une œuvre majeure sur la démocratie et la souveraineté du peuple."
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
  }
]
