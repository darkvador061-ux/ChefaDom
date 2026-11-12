# Chef à Dom by Dylan

Site vitrine du traiteur à domicile Chef à Dom (région PACA) : formules, carte et prix, estimation de budget, galerie, avis, FAQ et demande de devis.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite
- CSS natif (variables, responsive mobile, tablette, ordinateur)

## Démarrer

```bash
npm install
npm run dev
```

## Mettre en ligne (Hostinger)

```bash
npm run build
```

Envoyer le contenu du dossier `dist/` dans `public_html/` (le fichier `.htaccess` est inclus).

## Modifier le contenu

Tout le contenu éditable est dans `src/data/site.js` : coordonnées, carte et prix, formules, galerie, avis, FAQ.
Les photos sont dans `public/images/` (format WebP, 1400 px max).

## Structure

```
src/
  App.vue
  main.js
  assets/main.css
  data/site.js
  components/
    AppHeader.vue        en-tête + menu mobile
    HeroSection.vue
    FormulesSection.vue
    CarteSection.vue     carte avec aperçu photo au survol
    EstimationSection.vue  calcul du budget en direct
    DerouleSection.vue
    GalerieSection.vue   filtres + visionneuse
    AvisSection.vue
    FaqSection.vue
    ContactSection.vue   formulaire de demande de devis
    AppFooter.vue
    MobileBar.vue        barre Appeler / Devis sur mobile
```
