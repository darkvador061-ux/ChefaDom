<script setup>
import { formules, img } from '../data/site.js'
</script>

<template>
  <section id="formules">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">Nos formules</span>
          <h2>Quatre façons<br>de <i>recevoir</i>.</h2>
        </div>
        <p>Chaque formule se combine avec les autres. On adapte les quantités et le menu à votre événement.</p>
      </div>
      <div class="forms">
        <article v-for="f in formules" :key="f.titre" class="fm">
          <div class="im">
            <img :src="img(f.image)" :alt="f.alt" loading="lazy" :style="f.position ? { objectPosition: f.position } : null">
          </div>
          <h3>{{ f.titre }}</h3>
          <div class="px">{{ f.prix }}</div>
          <p>{{ f.texte }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
