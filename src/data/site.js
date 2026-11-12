// Toutes les données éditables du site : coordonnées, carte, galerie, avis, FAQ.
// Modifier ici suffit, les composants se mettent à jour.

export const contact = {
  nom: 'Chef à Dom',
  signature: 'by Dylan',
  telephone: '06 34 02 26 60',
  telephoneLien: '+33634022660',
  // À confirmer avec le client : la carte Instagram indique societeenna@hotmail.com,
  // la page Facebook indique lequipepaella@hotmail.com.
  email: 'societeenna@hotmail.com',
  instagram: 'https://www.instagram.com/chefadom06/',
  instagramNom: '@chefadom06',
  facebook: 'https://www.facebook.com/chefadom06/',
  facebookNom: 'Chefàdom',
  secteur: 'Toute la région PACA',
}

export const formules = [
  {
    titre: 'Paella géante',
    prix: 'dès 13 € par personne',
    texte: 'Cuite sur place dans de grandes poêles, servie à la louche. Aussi en fideuà.',
    image: 'paellas-jardin.webp',
    alt: 'Deux paellas géantes servies lors d’une réception en plein air',
    position: '62% center',
  },
  {
    titre: 'Pizza party',
    prix: '40 € la pizza',
    texte: 'Pâte maison, pizzas et pissaladières cuites devant vos invités.',
    image: 'pizza.webp',
    alt: 'Pizza jambon champignons sortie du four',
  },
  {
    titre: 'Brasero',
    prix: 'sur devis',
    texte: 'Viandes et légumes grillés au feu, en direct. Idéal en villa ou en jardin.',
    image: 'brasero-nuit.webp',
    alt: 'Brasero allumé la nuit au bord d’une piscine',
  },
  {
    titre: 'Cocktail & buffets',
    prix: 'dès 2 € la pièce',
    texte: 'Verrines, canapés, mini-burgers, plateaux. Buffet froid, chaud ou mixte.',
    image: 'verrines-2024.webp',
    alt: 'Plateau de verrines guacamole et crevette',
  },
]

// La carte en vigueur (story Instagram « Notre carte »).
export const carte = [
  {
    titre: 'Nos plats',
    items: [
      { nom: 'Paella', prix: '13 € / pers.', image: 'paella-moules.webp', legende: 'Paella aux fruits de mer' },
      { nom: 'Fideuà', prix: '14 € / pers.', image: 'paella-cuisson.webp', legende: 'En cuisson, sur place' },
      { nom: 'Couscous', detail: 'légumes fondants, viandes mijotées', prix: 'dès 16 € / pers.' },
      { nom: 'Rougail saucisse', prix: '14 € / pers.' },
      { nom: 'Poulet basquaise', prix: '13 € / pers.' },
      { nom: 'Tartiflette', prix: '14 € / pers.' },
      { nom: 'Pizza & pissaladière', prix: '40 € l’unité', image: 'pizza-2.webp', legende: 'Pizza maison' },
      { nom: 'Petits farcis niçois', detail: 'nouveauté', prix: 'sur devis', image: 'tomates-farcies.webp', legende: 'Tomates farcies' },
    ],
  },
  {
    titre: 'Cocktail & desserts',
    items: [
      { nom: 'Mignardises & verrines', prix: '2 € l’unité', image: 'verrines.webp', legende: 'Verrines crevette' },
      { nom: 'Verrine sucrée', prix: '2 € l’unité', image: 'desserts.webp', legende: 'Verrines sucrées' },
      { nom: 'Dessert', prix: '2 € l’unité' },
      { nom: 'Gâteau', prix: 'sur devis' },
    ],
  },
  {
    titre: 'Sur devis',
    items: [
      { nom: 'Brasero', prix: 'devis', image: 'brasero-flammes.webp', legende: 'Brasero' },
      { nom: 'Buffet froid, chaud, mixte', prix: 'devis', image: 'verrines-buffet.webp', legende: 'Buffet de verrines' },
      { nom: 'Cocktail dînatoire', prix: 'devis', image: 'plateau-fromages.webp', legende: 'Plateau de fromages' },
    ],
  },
]

// Pour le simulateur de budget (prix par personne).
export const platsEstimation = [
  { nom: 'Paella', prix: 13 },
  { nom: 'Fideuà', prix: 14 },
  { nom: 'Couscous', prix: 16, des: true },
  { nom: 'Rougail', prix: 14 },
  { nom: 'Poulet basquaise', prix: 13 },
  { nom: 'Tartiflette', prix: 14 },
  { nom: 'Aucun', prix: 0 },
]

export const extrasEstimation = [
  { nom: 'Pizzas ou pissaladières', info: '40 € l’unité', prix: 40, pas: 1 },
  { nom: 'Verrines & mignardises', info: '2 € la pièce', prix: 2, pas: 10 },
  { nom: 'Desserts ou verrines sucrées', info: '2 € la pièce', prix: 2, pas: 10 },
]

export const surDevis = ['Brasero', 'Buffet', 'Cocktail dînatoire', 'Gâteau']

export const etapes = [
  { titre: 'Vous nous contactez', texte: 'Une date, un lieu, un nombre d’invités. Par téléphone ou par message.' },
  { titre: 'On compose le menu', texte: 'Un devis gratuit et sur mesure, selon vos envies et votre budget.' },
  { titre: 'On se déplace', texte: 'Partout en région PACA, avec le matériel et les produits frais.' },
  { titre: 'On cuisine sur place', texte: 'Paella, pizzas ou brasero devant vos invités. Vous profitez.' },
]

export const filtresGalerie = [
  { id: 'all', label: 'Tout' },
  { id: 'paella', label: 'Paella' },
  { id: 'feu', label: 'Brasero & pizza' },
  { id: 'cocktail', label: 'Cocktail & buffets' },
  { id: 'recep', label: 'Réceptions' },
]

export const galerie = [
  { image: 'paellas-jardin.webp', legende: 'Paellas géantes, garden party', cat: ['paella', 'recep'] },
  { image: 'brasero-soiree.webp', legende: 'Brasero en soirée', cat: ['feu', 'recep'] },
  { image: 'verrines.webp', legende: 'Verrines crevette', cat: ['cocktail'] },
  { image: 'paella-nuit.webp', legende: 'Paella, service du soir', cat: ['paella'] },
  { image: 'pizza.webp', legende: 'Pizza maison', cat: ['feu'] },
  { image: 'mini-burgers.webp', legende: 'Mini-burgers', cat: ['cocktail'] },
  { image: 'table-mariage.webp', legende: 'Mariage, sous la tente', cat: ['recep'] },
  { image: 'brasero-flammes.webp', legende: 'Le brasero en chauffe', cat: ['feu'] },
  { image: 'paella-moules.webp', legende: 'Paella aux fruits de mer', cat: ['paella'] },
  { image: 'plateau-fromages.webp', legende: 'Plateau de fromages', cat: ['cocktail'] },
  { image: 'tomates-farcies.webp', legende: 'Tomates farcies', cat: ['cocktail'] },
  // À confirmer avec le client : identité et accord des personnes sur la photo.
  { image: 'equipe-paella.webp', legende: 'En cuisine, sur place', cat: ['recep', 'paella'] },
  { image: 'verrines-buffet.webp', legende: 'Buffet de verrines', cat: ['cocktail'] },
  { image: 'brasero.webp', legende: 'Brasero, terrasse de villa', cat: ['feu'] },
  { image: 'plateau-fruits.webp', legende: 'Plateau de fruits frais', cat: ['cocktail'] },
  { image: 'paella-geante.webp', legende: 'Paella géante', cat: ['paella', 'recep'] },
  { image: 'desserts.webp', legende: 'Desserts maison', cat: ['cocktail'] },
  { image: 'poivrons-farcis.webp', legende: 'Poivrons farcis', cat: ['cocktail'] },
  { image: 'tente-reception.webp', legende: 'Réception sous tente', cat: ['recep'] },
  { image: 'mini-sandwiches.webp', legende: 'Canapés', cat: ['cocktail'] },
]

// Avis réels de la page Facebook (prénom + initiale). Penser à en récolter de plus récents.
export const avis = {
  score: '100 %',
  detail: 'de recommandations sur 7 avis Facebook',
  citations: [
    { texte: 'Excellent service du début jusqu’à la fin, produits de qualité et en bonne quantité.', auteur: 'Jérôme T.' },
    { texte: 'Paella et pizza pour mon anniversaire… Équipe au top, je recommande et je reprendrais sans hésiter.', auteur: 'Annabel F.' },
  ],
}

export const faq = [
  { q: 'Où vous déplacez-vous ?', r: 'Dans toute la région PACA. Le déplacement est chiffré dans le devis.' },
  { q: 'Le devis est-il payant ?', r: 'Non. Il est gratuit et personnalisé : appelez le 06 34 02 26 60 ou envoyez votre estimation depuis ce site.' },
  { q: 'Les prix de la carte sont-ils fixes ?', r: 'Ce sont les prix de la carte en vigueur. Ils peuvent varier selon la saison et le marché, le devis fait foi.' },
  { q: 'Pouvez-vous seulement livrer, sans cuisiner sur place ?', r: 'Oui pour certaines prestations, comme les verrines, les buffets ou les farcis niçois : livraison et installation sur place sont possibles.' },
  { q: 'Peut-on combiner plusieurs formules ?', r: 'Oui, par exemple un cocktail de verrines à l’apéritif puis une paella ou une pizza party. On compose le menu avec vous.' },
]

export const occasions = ['Mariage', 'Anniversaire', 'Baptême', 'Entreprise / CE', 'Soirée privée']

export const img = (nom) => `${import.meta.env.BASE_URL}images/${nom}`
export const euros = (n) => n.toLocaleString('fr-FR') + ' €'
export const mailto = (sujet, corps) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`
