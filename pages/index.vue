<template>
  <div class="container shadow-lg m-auto mb-4">
    <Sideshow/>
    <div class="grid grid-cols-1 sm:grid-cols-12">
      <div class="col-span-8 p-4">
        <Box title="វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា">
          <div class="w-full p-2">
            <div class="grid grid-cols-1 sm:grid-cols-2">
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
            <div class="grid grid-cols-1 sm:grid-cols-2">
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
      <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-2">
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
  head() {
    return {
      title: 'Home',
      titleTemplate: '%s | ITC',
      meta: [
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។'
        },
        {hid: 'twitter:site', name: 'twitter:site', content: '@itckh'},
        {hid: 'twitter:creator', name: 'twitter:creator', content: '@itckh'},
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/itc-website.png'
        },
        {
          hid: 'description',
          name: 'description',
          content: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/itc-website.png'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"
        }
      ]
    }
  },
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
