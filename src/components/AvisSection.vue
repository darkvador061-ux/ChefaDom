<script setup>
import { avis, contact } from '../data/site.js'
</script>

<template>
  <section id="avis">
    <div class="w avis">
      <div class="sc">
        <span class="lbl">Ils recommandent</span>
        <b>{{ avis.score }}</b>
        <span>{{ avis.detail }}</span><br>
        <a :href="contact.facebook">Voir la page Facebook</a>
      </div>
      <blockquote v-for="c in avis.citations" :key="c.auteur">
        « {{ c.texte }} »<cite>{{ c.auteur }}</cite>
      </blockquote>
    </div>
  </section>
</template>
