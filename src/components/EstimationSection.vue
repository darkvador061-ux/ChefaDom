<script setup>
import { ref, reactive, computed } from 'vue'
import { contact, platsEstimation, extrasEstimation, surDevis, euros, mailto } from '../data/site.js'

const invites = ref(30)
const plat = ref(0)
const quantites = reactive(extrasEstimation.map(() => 0))
const devis = ref([])
const pret = ref(false)

const nbInvites = computed(() => Math.max(1, Number(invites.value) || 1))

const lignes = computed(() => {
  const l = []
  const p = platsEstimation[plat.value]
  if (p.prix) l.push({ label: `${p.nom} × ${nbInvites.value}`, montant: p.prix * nbInvites.value })
  extrasEstimation.forEach((e, i) => {
    const q = Math.max(0, Number(quantites[i]) || 0)
    if (q) l.push({ label: `${e.nom} × ${q}`, montant: e.prix * q })
  })
  return l
})

const total = computed(() => lignes.value.reduce((s, l) => s + l.montant, 0))
const parInvite = computed(() => (total.value / nbInvites.value).toFixed(2).replace('.', ','))

const lienMail = computed(() => {
  const corps =
    `Bonjour Dylan,\n\nEstimation faite sur votre site pour ${nbInvites.value} invités :\n` +
    lignes.value.map((l) => `- ${l.label} : ${euros(l.montant)}`).join('\n') +
    (devis.value.length ? '\n' + devis.value.map((d) => `- ${d} : sur devis`).join('\n') : '') +
    `\nTotal estimé : ${euros(total.value)}\n\nDate :\nLieu :\nTéléphone :\n`
  return mailto('Demande de devis', corps)
})

function changerInvites(delta) {
  invites.value = Math.max(1, nbInvites.value + delta)
}
function changerExtra(i, sens) {
  quantites[i] = Math.max(0, (Number(quantites[i]) || 0) + sens * extrasEstimation[i].pas)
}
</script>

<template>
  <section id="estimation">
    <div class="w">
      <div class="head">
        <div>
          <span class="lbl">Estimer mon budget</span>
          <h2>Un ordre de prix<br><i>en 30 secondes</i>.</h2>
        </div>
        <p>Calculé avec la carte ci-dessus. Pour un devis exact, envoyez-nous le résultat : la réponse est gratuite.</p>
      </div>
      <div class="est">
        <div>
          <div class="q">
            <span id="lbl-invites">Nombre d’invités</span>
            <div class="stepper" role="group" aria-labelledby="lbl-invites">
              <button type="button" aria-label="5 invités de moins" @click="changerInvites(-5)">−</button>
              <input v-model.number="invites" type="number" min="1" inputmode="numeric" aria-label="Nombre d’invités">
              <button type="button" aria-label="5 invités de plus" @click="changerInvites(5)">+</button>
            </div>
          </div>

          <div class="q">
            <span>Le plat principal</span>
            <div class="chips">
              <label v-for="(p, i) in platsEstimation" :key="p.nom">
                <input v-model="plat" type="radio" name="plat" :value="i">
                <span>{{ p.nom }}<small v-if="p.prix">{{ p.des ? 'dès ' : '' }}{{ p.prix }} €</small></span>
              </label>
            </div>
          </div>

          <div class="q">
            <span>En plus</span>
            <div v-for="(e, i) in extrasEstimation" :key="e.nom" class="ext">
              <div>{{ e.nom }}<small>{{ e.info }}</small></div>
              <div class="stepper">
                <button type="button" :aria-label="`Retirer : ${e.nom}`" @click="changerExtra(i, -1)">−</button>
                <input v-model.number="quantites[i]" type="number" min="0" inputmode="numeric" :aria-label="e.nom">
                <button type="button" :aria-label="`Ajouter : ${e.nom}`" @click="changerExtra(i, 1)">+</button>
              </div>
            </div>
          </div>

          <div class="q">
            <span>Sur devis (ajouté à la demande)</span>
            <div class="chips">
              <label v-for="d in surDevis" :key="d">
                <input v-model="devis" type="checkbox" :value="d">
                <span>{{ d }}</span>
              </label>
            </div>
          </div>
        </div>

        <aside class="recap deco" aria-live="polite">
          <span class="lbl">Votre estimation</span>
          <ul>
            <li v-for="l in lignes" :key="l.label"><span>{{ l.label }}</span><span>{{ euros(l.montant) }}</span></li>
            <li v-for="d in devis" :key="d"><span>{{ d }}</span><span>sur devis</span></li>
            <li v-if="!lignes.length && !devis.length"><span>Choisissez un plat ou des extras</span></li>
          </ul>
          <div class="tot"><span>Total estimé</span><b>{{ euros(total) }}</b></div>
          <div class="pp">{{ total ? `environ ${parInvite} € par invité` : '' }}</div>
          <p class="fine">Indicatif. Hors déplacement, service et prestations sur devis. Les prix peuvent varier selon la saison et le marché.</p>
          <a class="btn plein" href="#" @click.prevent="pret = true">Envoyer cette estimation</a>
          <a class="btn" :href="`tel:${contact.telephoneLien}`">Ou appeler : {{ contact.telephone }}</a>
          <div v-if="pret" class="msg" style="display:block">
            Votre demande est prête : <a :href="lienMail">l’ouvrir dans votre messagerie</a>.
            Ajoutez la date et le lieu avant d’envoyer.
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
