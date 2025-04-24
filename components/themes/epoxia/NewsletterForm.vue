<template>
  <div class="newsletter-form">
    <div class="ml-embedded" data-form="151766576435037399"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Crear y cargar el script de MailerLite
  const script = document.createElement('script')
  script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
  script.async = true
  document.body.appendChild(script)
})
</script>

<style scoped>
.newsletter-form {
  @apply max-w-xl mx-auto my-8 p-4;
}
</style> 