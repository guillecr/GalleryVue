<template>
    <div class="lightbox" @click.self="atras()">
        <img :src="photoUrl(photo.nameFire)">
        <div class="lightbox-info">
            <div class="lightbox-info-inner">
                <p v-if="photo.titulo">Título: {{ photo.titulo }} </p>
                <p v-if="photo.autor">Autor: {{ photo.autor }} </p>
                <p v-if="photo.fecha">Fecha de creación: {{ photo.fecha }} </p>
            </div>
        </div>
    </div>
</template>


<script>
import photos from '@/cuadro.json'
export default {
    name: 'cuadro',
    data(){
        return{
            photos
        };
    },
    computed: {
        photo(){
            return this.photos.find(p =>{return p.id===Number(this.$route.params.id)});
        }
    },
    methods:{
        photoUrl(name){
            return require(`../assets/img/${name}`);
        },
        atras(){
            this.$router.push('/')
        }
    }
};
</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .lightbox img {
    margin: auto;
    width: 50vw;
    height: auto;
    grid-column-start: 2;
  }
  .lightbox-info {
    margin: auto 2rem auto 0;
  }
  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
    text-align: left;
  }
</style>