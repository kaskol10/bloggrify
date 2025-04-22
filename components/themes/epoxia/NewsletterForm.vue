<template>
  <div class="newsletter-form">
    <div class="ml-form-embed"
      data-account="1455323"
      data-form="151766576435037399">
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Cargar el script de MailerLite
  const script = document.createElement('script')
  script.src = "https://static.mailerlite.com/js/w/webforms.min.js"
  script.type = "text/javascript"
  document.body.appendChild(script)
})
</script>

<style scoped>
.newsletter-form {
  @apply max-w-xl mx-auto my-8 p-4;
}
</style> 