<script setup>
import { contact, img } from '../data/site.js'
</script>

<template>
  <div class="w hero">
    <div>
      <span class="lbl">Traiteur à domicile · Région PACA</span>
      <h1>Le restaurant<br><i>s’invite</i> chez vous.</h1>
      <p class="sub">
        Paella géante, pizzas, brasero, buffets et cocktails, cuisinés sur place pour vos mariages,
        anniversaires et soirées d’entreprise. Tout est fait maison.
      </p>
      <div class="ctas">
        <a class="btn plein" href="#estimation">Estimer mon budget</a>
        <a class="btn" :href="`tel:${contact.telephoneLien}`">Appeler le {{ contact.telephone }}</a>
      </div>
      <div class="proofs">
        <div><b>100 %</b>recommandé sur Facebook</div>
        <div><b>Fait maison</b>produits frais</div>
        <div><b>Gratuit</b>devis personnalisé</div>
      </div>
    </div>
    <figure class="hero-ph deco">
      <img
        :src="img('brasero-soiree.webp')"
        alt="Brasero allumé pendant une soirée en villa, invités en arrière-plan"
        width="1400" height="1867" fetchpriority="high"
      >
      <figcaption>Brasero, soirée en villa</figcaption>
    </figure>
  </div>
</template>
