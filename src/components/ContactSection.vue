<script setup>
import { reactive, ref, computed } from 'vue'
import { contact, occasions, mailto } from '../data/site.js'

const f = reactive({ occasion: occasions[0], date: '', invites: '', ville: '', nom: '', tel: '', projet: '' })
const etat = ref('')

const lien = computed(() => {
  const corps =
    `Bonjour Dylan,\n\nOccasion : ${f.occasion}\nDate : ${f.date || 'à définir'}\n` +
    `Invités : ${f.invites || 'à définir'}\nVille : ${f.ville || 'à définir'}\n\n${f.projet}\n\n${f.nom} · ${f.tel}`
  return mailto(`Devis – ${f.occasion}`, corps)
})

function envoyer() {
  etat.value = f.nom.trim() && f.tel.trim() ? 'pret' : 'incomplet'
}
</script>

<template>
  <section id="contact">
    <div class="w ct">
      <div>
        <span class="lbl">Contact &amp; devis</span>
        <h2>Parlons de<br>votre <i>événement</i>.</h2>
        <a class="big" :href="`tel:${contact.telephoneLien}`">{{ contact.telephone }}</a>
        <dl>
          <div><dt>E-mail</dt><dd><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></dd></div>
          <div><dt>Instagram</dt><dd><a :href="contact.instagram">{{ contact.instagramNom }}</a></dd></div>
          <div><dt>Facebook</dt><dd><a :href="contact.facebook">{{ contact.facebookNom }}</a></dd></div>
          <div><dt>Secteur</dt><dd>{{ contact.secteur }}</dd></div>
        </dl>
      </div>

      <form class="dv deco" novalidate @submit.prevent="envoyer">
        <div class="full">
          <span class="t">L’occasion</span>
          <div class="chips">
            <label v-for="o in occasions" :key="o">
              <input v-model="f.occasion" type="radio" name="occasion" :value="o">
              <span>{{ o }}</span>
            </label>
          </div>
        </div>
        <div><label class="t" for="f-date">Date</label><input id="f-date" v-model="f.date" type="date"></div>
        <div><label class="t" for="f-inv">Nombre d’invités</label><input id="f-inv" v-model="f.invites" type="number" min="1" inputmode="numeric" placeholder="40"></div>
        <div><label class="t" for="f-ville">Ville</label><input id="f-ville" v-model="f.ville" autocomplete="address-level2" placeholder="Nice, Cannes…"></div>
        <div><label class="t" for="f-nom">Nom *</label><input id="f-nom" v-model="f.nom" autocomplete="name" required></div>
        <div class="full"><label class="t" for="f-tel">Téléphone *</label><input id="f-tel" v-model="f.tel" type="tel" autocomplete="tel" required></div>
        <div class="full"><label class="t" for="f-projet">Votre projet</label><textarea id="f-projet" v-model="f.projet" placeholder="Formule envisagée, lieu, envies particulières…"></textarea></div>
        <div class="full"><button class="btn plein" type="submit" style="width:100%">Préparer ma demande de devis</button></div>
        <div v-if="etat" class="full msg" style="display:block" role="status">
          <template v-if="etat === 'incomplet'">Merci d’indiquer votre nom et votre téléphone.</template>
          <template v-else>
            Votre demande est prête : <a :href="lien">l’ouvrir dans votre messagerie</a> pour l’envoyer.
            Vous pouvez aussi appeler le {{ contact.telephone }}.
          </template>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.t{display:block;font-size:.8rem;color:var(--gris);margin-bottom:.35rem}
</style>
