<template>
  <div class="mb-4">
    <div class="p-2" :class="bgClass" :style="bgColor ? `background-color: ${bgColor}` : ''">
      <div class="flex items-center justify-between text-white w-full">
        <h3 class="text-white font-display">{{ title }}</h3>
        <slot name="tools"></slot>
      </div>
    </div>
    <div class="bg-gray-100">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
    title: {
      type: String,
      default: "",
    },
    bgClass: {
      type: String,
      default: "bg-itccolor",
    },
    bgColor: {
      type: String,
      required: false
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
