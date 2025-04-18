<template>
  <form
    action="https://formspree.io/f/YOUR_FORM_ID"
    method="POST"
    class="max-w-2xl mx-auto my-8 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
  >
    <!-- Name Field -->
    <div class="space-y-2">
      <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Your name"
      />
    </div>

    <!-- Email Field -->
    <div class="space-y-2">
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Email <span class="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="your.email@example.com"
      />
    </div>

    <!-- Subject Field -->
    <div class="space-y-2">
      <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Subject <span class="text-red-500">*</span>
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
        required
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="What would you like to discuss?"
      />
    </div>

    <!-- Message Field -->
    <div class="space-y-2">
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Message <span class="text-red-500">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows="4"
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Your message here..."
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
    >
      Send Message
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script> 