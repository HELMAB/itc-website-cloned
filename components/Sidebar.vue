<template>
  <div>
    <Box title="Latest">
      <div class="grid grid-cols-12 p-2 mb-2"
           v-for="item in 5">
        <div class="col-span-4 h-24 w-full">
          <img :src="image" class="object-contain" alt=""/>
        </div>
        <div class="col-span-8 space-y-2 pl-2">
          <h3 class="text-xs">The 28th Meeting Board of Trustee</h3>
          <p class="text-xs text-gray-500">(Board of Trustee Meeting)</p>
          <p class="text-xs text-gray-500">16/01/2020</p>
        </div>
      </div>
    </Box>

    <div class="mt-4 border bg-gray-100 rounded p-2">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fitckh&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
        width="340"
        height="130"
        style="border:none;overflow:hidden;width: 100%;"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      images: [
        "/img/blog-item-01.png",
        "/img/g-02.JPG",
        "/img/g-03.JPG",
        "/img/g-04.JPG",
      ],
    };
  },
  computed: {
    image() {
      return this.images[Array.from({length: 1}, () => Math.floor(Math.random() * this.images.length))]
    },
  },
}
</script>

<style scoped>

</style>
