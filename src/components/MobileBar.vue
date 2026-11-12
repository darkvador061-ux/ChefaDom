<script setup>
import { contact } from '../data/site.js'
</script>

<template>
  <nav class="bar" aria-label="Actions rapides">
    <a :href="`tel:${contact.telephoneLien}`">Appeler</a>
    <a href="#contact">Demander un devis</a>
  </nav>
</template>
