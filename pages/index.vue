<template>
  <div class="container shadow-lg m-auto mb-4">
    <Sideshow/>
    <div class="grid grid-cols-12">
      <div class="col-span-8 p-4">
        <Box title="វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា">
          <div class="w-full p-2">
            <div class="grid grid-cols-2">
              <template v-for="(blog, key) in blogs">
                <BlogItem :blog="blog" :key="key"/>
              </template>
            </div>
          </div>
        </Box>

        <Box title="ព័ត៌មាននិងព្រឹត្តិការណ៍">
          <template slot="tools">
            <a href="" class="text-xs">[View All]</a>
          </template>
          <div class="w-full p-2">
            <div class="grid grid-cols-2">
              <template v-for="(event, key) in events">
                <BlogItem :blog="event" :key="key"/>
              </template>
            </div>
          </div>
        </Box>

        <div>
          <div class="mb-2">
            <img src="/img/g-01.png" alt=""/>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <img src="/img/g-02.JPG" class="object-contain" alt=""/>
            <img src="/img/g-03.JPG" class="object-contain" alt=""/>
            <img src="/img/g-04.JPG" class="object-contain" alt=""/>
          </div>
        </div>
      </div>
      <div class="col-span-4 p-4">
        <div class="w-full">
          <Sidebar/>
        </div>
      </div>
    </div>

    <div class="mt-4 p-4">
      <div class="grid grid-cols-4 gap-2">
        <Box title="ផ្នែកសិក្សា" bg-color="#0a86ca">
          <template slot="tools">
            <a href="" class="text-xs">[View All]</a>
          </template>
          <BlogItem :blog="events[0]"/>
        </Box>

        <Box title="ការស្រាវជ្រាវ" bg-color="#ff634c">
          <template slot="tools">
            <a href="" class="text-xs">[View All]</a>
          </template>
          <BlogItem :blog="events[0]"/>
        </Box>

        <Box title="ការសហការ" bg-color="#4a4745">
          <BlogItem :blog="events[0]"/>
        </Box>

        <Box title="រូបភាពនៃសកម្មភាពផ្សេងៗ">
          <BlogItem :blog="events[0]"/>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("ui", {
      blogs: "getBlogs",
      events: "getEvents",
    }),
  },
};
</script>

<style>
</style>
