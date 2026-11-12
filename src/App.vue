<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FormulesSection from './components/FormulesSection.vue'
import CarteSection from './components/CarteSection.vue'
import EstimationSection from './components/EstimationSection.vue'
import DerouleSection from './components/DerouleSection.vue'
import GalerieSection from './components/GalerieSection.vue'
import AvisSection from './components/AvisSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import MobileBar from './components/MobileBar.vue'
</script>

<template>
  <AppHeader />
  <main id="top">
    <HeroSection />
    <FormulesSection />
    <CarteSection />
    <EstimationSection />
    <DerouleSection />
    <GalerieSection />
    <AvisSection />
    <FaqSection />
    <ContactSection />
  </main>
  <AppFooter />
  <MobileBar />
</template>
