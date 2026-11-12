<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { galerie, filtresGalerie, img } from '../data/site.js'

const filtre = ref('all')
const visibles = computed(() =>
  filtre.value === 'all' ? galerie : galerie.filter((g) => g.cat.includes(filtre.value))
)

const index = ref(-1)
const courante = computed(() => visibles.value[index.value])

function ouvrir(i) {
  index.value = i
  document.body.style.overflow = 'hidden'
}
function fermer() {
  index.value = -1
  document.body.style.overflow = ''
}
function aller(delta) {
  const n = visibles.value.length
  index.value = (index.value + delta + n) % n
}
function clavier(e) {
  if (index.value < 0) return
  if (e.key === 'Escape') fermer()
  if (e.key === 'ArrowLeft') aller(-1)
  if (e.key === 'ArrowRight') aller(1)
}

let departX = 0
function toucheDebut(e) { departX = e.touches[0].clientX }
function toucheFin(e) {
  const d = e.changedTouches[0].clientX - departX
  if (Math.abs(d) > 50) aller(d < 0 ? 1 : -1)
}

onMounted(() => window.addEventListener('keydown', clavier))
onBeforeUnmount(() => window.removeEventListener('keydown', clavier))
</script>

<template>
  <section id="galerie">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">Galerie</span>
          <h2>Nos <i>réceptions</i>.</h2>
        </div>
        <p>Des photos prises pendant nos prestations, telles quelles.</p>
      </div>
      <div class="filt" role="group" aria-label="Filtrer les photos">
        <button
          v-for="f in filtresGalerie"
          :key="f.id"
          type="button"
          :aria-pressed="filtre === f.id"
          @click="filtre = f.id"
        >{{ f.label }}</button>
      </div>
      <div class="gal">
        <figure v-for="(g, i) in visibles" :key="g.image" @click="ouvrir(i)">
          <img :src="img(g.image)" :alt="g.legende" loading="lazy">
          <figcaption>{{ g.legende }}</figcaption>
        </figure>
      </div>
    </div>

    <div
      v-if="courante"
      class="lb on"
      role="dialog"
      aria-modal="true"
      aria-label="Photo agrandie"
      @click.self="fermer"
      @touchstart.passive="toucheDebut"
      @touchend="toucheFin"
    >
      <button class="x" type="button" aria-label="Fermer" @click="fermer">✕</button>
      <button class="pv" type="button" aria-label="Photo précédente" @click="aller(-1)">‹</button>
      <button class="nx" type="button" aria-label="Photo suivante" @click="aller(1)">›</button>
      <img :src="img(courante.image)" :alt="courante.legende">
      <p>{{ courante.legende }}</p>
    </div>
  </section>
</template>
