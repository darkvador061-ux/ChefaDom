<script setup>
import { ref, watch } from 'vue'
import { contact } from '../data/site.js'

const liens = [
  { href: '#formules', label: 'Formules' },
  { href: '#carte', label: 'La carte' },
  { href: '#estimation', label: 'Estimer mon budget' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
]

const ouvert = ref(false)
watch(ouvert, (v) => { document.body.style.overflow = v ? 'hidden' : '' })
</script>

<template>
  <header>
    <div class="w hd">
      <a href="#top" class="logo" aria-label="Chef à Dom by Dylan, accueil" @click="ouvert = false">
        <span class="m deco">D</span>
        <span><b>{{ contact.nom }}</b><small>{{ contact.signature }}</small></span>
      </a>
      <nav class="nav-desk" aria-label="Navigation principale">
        <a v-for="l in liens" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
      <a class="tel" :href="`tel:${contact.telephoneLien}`">{{ contact.telephone }}</a>
      <button
        class="burger"
        type="button"
        :aria-expanded="ouvert"
        aria-controls="menu-mobile"
        :aria-label="ouvert ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="ouvert = !ouvert"
      >
        <span :class="{ x: ouvert }"></span>
      </button>
    </div>
    <nav id="menu-mobile" class="nav-mob" :class="{ on: ouvert }" aria-label="Menu">
      <a v-for="l in liens" :key="l.href" :href="l.href" @click="ouvert = false">{{ l.label }}</a>
      <a class="mob-tel" :href="`tel:${contact.telephoneLien}`">{{ contact.telephone }}</a>
    </nav>
  </header>
</template>

<style scoped>
.burger{display:none;width:46px;height:46px;border:1px solid var(--ligne);background:none;cursor:pointer;place-items:center}
.burger span,.burger span::before,.burger span::after{display:block;width:20px;height:1.5px;background:var(--creme);position:relative;transition:transform .25s,background .25s}
.burger span::before,.burger span::after{content:"";position:absolute;left:0}
.burger span::before{top:-6px}.burger span::after{top:6px}
.burger span.x{background:transparent}
.burger span.x::before{transform:translateY(6px) rotate(45deg)}
.burger span.x::after{transform:translateY(-6px) rotate(-45deg)}
.nav-mob{display:none}
@media (max-width:980px){
  .burger{display:grid}
  .nav-mob{position:fixed;inset:72px 0 0 0;z-index:49;background:var(--noir);flex-direction:column;padding:1rem 4vw 2rem;overflow-y:auto}
  .nav-mob.on{display:flex}
  .nav-mob a{font-family:var(--disp);font-size:1.7rem;padding:1rem 0;border-bottom:1px solid var(--ligne)}
  .nav-mob .mob-tel{color:var(--or-2);border:0;margin-top:1rem}
}
</style>
