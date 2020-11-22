<template>
  <Gallery/>
  <Photo/>
</template>
<script>
  import Gallery from '@/components/Galerry.vue'
  import Photo from '@/components/Photo.vue'
  export default {
    name:'photo',
    components: {
      Photo,
      Gallery
      }
  }
</script>