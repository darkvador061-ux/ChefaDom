<script setup>
import { etapes } from '../data/site.js'
</script>

<template>
  <section id="deroule">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">Comment ça se passe</span>
          <h2>Simple, <i>du début à la fin</i>.</h2>
        </div>
      </div>
      <ol class="steps">
        <li v-for="e in etapes" :key="e.titre"><b>{{ e.titre }}</b><p>{{ e.texte }}</p></li>
      </ol>
    </div>
  </section>
</template>
