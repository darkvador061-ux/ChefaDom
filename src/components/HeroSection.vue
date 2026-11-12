<script setup>
import { img } from '../data/site.js'
</script>
<template>
  <section class="signature-hero">
    <img class="signature-background" :src="img('brasero-soiree.webp')" alt="Brasero allumé lors d’une réception privée en soirée" fetchpriority="high" width="1400" height="1867">
    <div class="signature-shade"></div>
    <div class="w signature-content"><span class="lbl">CHEF À DOM · BY DYLAN</span><h1>L’art de recevoir.<br>Le plaisir de <i>partager.</i></h1><p>Une cuisine généreuse, préparée chez vous.<br>Des réceptions à votre image, en région PACA.</p><a class="btn plein" href="#contact">Imaginons votre réception <span>↗</span></a></div>
    <div class="w signature-foot"><span>MARIAGES & RÉCEPTIONS PRIVÉES</span><a href="#formules">Découvrir notre cuisine ↓</a><span>PROVENCE · CÔTE D’AZUR</span></div>
  </section>
  <div class="w signature-intro"><span class="lbl">LE GOÛT DES MOMENTS ENSEMBLE</span><h2>Vous profitez de l’instant.<br>Nous nous occupons <i>de la table.</i></h2><p>Une paella cuisinée devant vos invités, un brasero à la nuit tombée, un cocktail pour se retrouver. Dylan et son équipe vous accompagnent, du choix du menu au jour de votre réception.</p></div>
</template>
