<template>
    <div class="gallery">
        <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
            <router-link :to="`/photo/${photo.id}`"> <!--Comillas dobles para la función :to= y comillas tumbadas para expandir las variables-->
                <img :src="complitURL(photo.nameFire)">
            </router-link>
        </div>
    </div>
</template>

<script>
    import photos from '@/cuadro.json';

    export default {
        name:"gallery",
        data(){
            return { photos };
        },
        methods:{
            complitURL(name){
                return require(`../assets/img/${name}`)
            }
        }
    };
</script>

<style  lang="scss" scoped>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding:0 2rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 22vw;
    //height: minmax(20vw,22vw);
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>