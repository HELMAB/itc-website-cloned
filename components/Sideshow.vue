<template>
  <div class="bg-itccolor grid grid-cols-12">
    <div class="col-span-8">
      <div class="w-full relative">
        <img src="/img/sideshow/01.png" class="w-full" alt="slideshow"/>
        <div class="absolute -bottom-0 bg-gray-900 w-full p-4 text-white">
          <h3>ឯកឧត្តមបណ្ឌិត ហង់ ជួន ណារ៉ុន អញ្ជើញក្នុងពិធីទិវាគ្រូបង្រៀន</h3>
          <p class="text-gray-500">ទិវាគ្រូបង្រៀននៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា</p>
          <p class="text-xs text-gray-500">(Show - 2014-03-29 04:06:12)</p>
        </div>
      </div>
    </div>
    <div class="col-span-4">
      <div class="w-full">
        <a href="">
          <div class="grid grid-cols-12 p-2"
               :class="key === 3 ? 'bg-blue-500' : ''"
               v-for="(item, key) in 5">
            <div class="col-span-4 w-full rounded-lg">
              <img src="/img/sideshow/01.png" class="object-contain rounded-lg" alt=""/>
            </div>
            <div class="col-span-8 space-y-2 pl-2">
              <h3 class="text-xs text-white">ឯកឧត្តមបណ្ឌិត ហង់ ជួន ណារ៉ុន អញ្ជើញក្នុងពិធីទិវាគ្រូបង្រៀន</h3>
              <p class="text-xs" :class="key === 3 ? 'text-gray-800' : 'text-gray-500'">ទិវាគ្រូបង្រៀននៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sideshow"
}
</script>

<style scoped>

</style>
