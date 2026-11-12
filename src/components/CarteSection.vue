<script setup>
import { ref } from 'vue'
import { carte, img } from '../data/site.js'

const photo = ref({ image: 'paella-moules.webp', legende: 'Paella aux fruits de mer' })
const visible = ref(true)

function apercu(item) {
  if (!item.image || item.image === photo.value.image) return
  visible.value = false
  setTimeout(() => {
    photo.value = { image: item.image, legende: item.legende }
    visible.value = true
  }, 180)
}
</script>

<template>
  <section id="carte">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">La carte</span>
          <h2>Les prix,<br><i>sans détour</i>.</h2>
        </div>
        <p>La carte en vigueur. Les buffets, le brasero et le cocktail se font sur devis, selon votre nombre d’invités.</p>
      </div>
      <div class="carte">
        <div class="panel deco">
          <h3>{{ carte[0].titre }}</h3>
          <div v-for="it in carte[0].items" :key="it.nom" class="it" @mouseenter="apercu(it)">
            <span class="n">{{ it.nom }}<small v-if="it.detail">{{ it.detail }}</small></span>
            <span class="dots"></span>
            <span class="p">{{ it.prix }}</span>
          </div>
        </div>
        <div>
          <div v-for="(bloc, i) in carte.slice(1)" :key="bloc.titre" class="panel deco" :style="i ? { marginTop: '1.6rem' } : null">
            <h3>{{ bloc.titre }}</h3>
            <div v-for="it in bloc.items" :key="it.nom" class="it" @mouseenter="apercu(it)">
              <span class="n">{{ it.nom }}<small v-if="it.detail">{{ it.detail }}</small></span>
              <span class="dots"></span>
              <span class="p">{{ it.prix }}</span>
            </div>
          </div>
          <p class="note">Les prix peuvent varier selon la saison et le marché.</p>
        </div>
        <figure class="carte-ph deco" aria-hidden="true">
          <img :src="img(photo.image)" alt="" :style="{ opacity: visible ? 1 : 0 }">
          <p>{{ photo.legende }}</p>
        </figure>
      </div>
    </div>
  </section>
</template>
