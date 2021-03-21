<template>
  <div class="navbar shadow-md mb-4">
    <div class="container m-auto py-2">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="/img/logo.png"/>
          <img src="/img/logo.gif"/>
        </div>
        <div>
          <div>
            <ul class="flex items-center space-x-6">
              <li class="bg-itccolor py-1 px-2 rounded text-white"><a href="" class="font-display">ទំព័រដើម</a></li>
              <li class="hover:bg-itccolor py-1 px-2 rounded hover:text-white"><a href="" class="font-display">អំពីយើង</a></li>
              <li class="hover:bg-itccolor py-1 px-2 rounded hover:text-white"><a href="" class="font-display">ព្រឹត្តិការណ៍ថ្មីៗ</a></li>
              <li class="hover:bg-itccolor py-1 px-2 rounded hover:text-white"><a href="" class="font-display">សមាគមអតីទនិស្សិត</a></li>
              <li class="hover:bg-itccolor py-1 px-2 rounded hover:text-white"><a href="" class="font-display">អ៊ីម៉ែល</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue"
}
</script>

<style scoped>
.navbar {
  background-color: #f1f1f1;
}
</style>
