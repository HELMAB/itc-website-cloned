<template>
  <div class="bg-white py-2">
    <div class="container m-auto">
      <div class="flex justify-between items-center">
        <div class="flex space-x-1">
          <img src="/img/flag/en.png" class="h-6" alt=""/>
          <img src="/img/flag/fr.png" class="h-6" alt=""/>
        </div>
        <div class="flex items-center">
          <label for="search" class="flex items-center border pr-2 rounded-lg">
            <input type="text"
                   class="py-1 px-3 focus:border-none w-40 lg:w-45"
                   placeholder="Search..."
                   id="search">
            <svg class="h-6 w-6 text-gray-300"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>

</style>
