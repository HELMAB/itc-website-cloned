<template>
  <div class="space-y-3 py-2 p-2 bg-gray-100">
    <div class="border h-32 overflow-hidden">
      <img :src="image" class="object-cover"/>
    </div>
    <h3 class="text-sm font-bold uppercase">
      <a href="#">{{ blog.title }}</a>
    </h3>
    <p class="text-xs text-gray-500">{{ blog.date }}</p>
    <p class="text-justify text-xs">{{ blog.description }}</p>
    <div class="text-right text-xs">
      <a href="#">[Read More]</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
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
};
</script>

<style lang="scss" scoped>
</style>
