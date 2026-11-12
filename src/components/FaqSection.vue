<script setup>
import { faq } from '../data/site.js'
</script>

<template>
  <section id="faq">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">Questions fréquentes</span>
          <h2>Avant de <i>réserver</i>.</h2>
        </div>
      </div>
      <div class="faq">
        <details v-for="f in faq" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.r }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
