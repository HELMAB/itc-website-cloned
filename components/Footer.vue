<template>
  <div class="bg-itccolor text-white">
    <div class="container shadow-sm m-auto">
      <div class="grid grid-cols-2 p-4 sm:grid sm:grid-cols-5 py-8">
        <div class="mb-2">
          <h3 class="font-bold font-display">ដេប៉ាតឺម៉ង់</h3>
          <ul class="space-y-1">
            <li
              v-for="(item, key) in departments"
              :key="key"
              class="text-gray-300 text-xs"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <h3 class="font-bold font-display">ទំព័រដើម</h3>
          <ul class="space-y-1">
            <li
              v-for="(item, key) in about"
              :key="key"
              class="text-gray-300 text-xs"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <h3 class="font-bold font-display">សមាគមអតីតនិសិ្សត</h3>
          <ul class="space-y-1">
            <li
              v-for="(item, key) in association"
              :key="key"
              class="text-gray-300 text-xs"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <h3 class="font-bold font-display">មជ្ឈមណ្ឌលនិងផ្នែកភាសា</h3>
          <ul class="space-y-1">
            <li
              v-for="(item, key) in section"
              :key="key"
              class="text-gray-300 text-xs"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div class="mb-2">
          <h3 class="font-bold font-display">ទំនាក់ទំនង</h3>
          <ul class="space-y-1">
            <li
              v-for="(item, key) in contact"
              :key="key"
              class="text-gray-300 text-xs"
            >
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center py-8 border-opacity-10 border-line-top text-sm">
      <p>
        ITC Center &copy; | 2015 |
        <a href="https://itc.edu.kh">www.itc.edut.kh</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters("ui", {
      departments: "getDepartments",
      about: "getFooterAbout",
      association: "getFooterAssociation",
      section: "getFooterSection",
      contact: "getFooterContact",
    }),
  },
};
</script>

<style scoped>
.border-line-top {
  border-top: 0.5px solid #0b0b61;
}
</style>
