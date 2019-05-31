<template>
  <div class="home" >
    <div class="menu">
      <ul>
        <li> <div class="menuItem" @click="scrollTo(1)" :style="{background: menuItems[0]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(2)" :style="{background: menuItems[1]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(3)" :style="{background: menuItems[2]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(4)" :style="{background: menuItems[3]}"></div></li>
      </ul>
    </div>
    <div class="bigdiv covered" :style="{backgroundImage: 'url(' + Background + ')'}" >

      <v-container fill-height style="min-height: 1000px">
        <v-layout row wrap align-center>
           <v-flex md6>
              <h1 class="superTitel">Reporting</h1>
             <p>
               Een reporting tool die ik heb gemaakt voor mijn stage opdracht bij TheCre8ion.Lab. Op deze site is mijn proces naar het eindproduct te zien.
             </p>
           </v-flex>
          <v-flex md6>
              <img :src="mockup" alt="" style="width: 75%">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <span ref="page2"></span>
    <!--Opdracht omschrijving en aanpak-->
      <OpdrachtDesc></OpdrachtDesc>
    <div class="bigdiv">
      <h1 class="text-xs-center titel" ref="page1">Onderzoek </h1>

      <starter > </starter>
      <Kringel ></Kringel>
      <!--Features pagina-->
      <v-container>
        <v-layout row wrap>
          <v-flex xs1></v-flex>
          <v-flex xs10>
            <h1 class="text-xs-center titel" ref="page3">Eindproduct</h1>
            <features></features>
          </v-flex>

        </v-layout>

      </v-container>

    </div>
    <div class="bigdiv greydiv">

      <Kringel ></Kringel>
    <h1 class="text-xs-center titel">Reflectie</h1>

      <reflectie></reflectie>
      <!--<Kringeltje :scrollPos="scrollPos"></Kringeltje>-->
    </div>

  </div>
</template>

<script>
import OpdrachtDesc from '../components/OpdrachtDesc.vue'

import Starter from '../components/Starter.vue'
import kringel from "../assets/kringel.svg"
import mockup from "../assets/mockups.png"


import Background from '../assets/achtergrondske.jpg'
import Cursor from '../assets/cursor.svg'
import Reflectie from '../components/Reflectie.vue'
import Features from '../components/Features.vue'


export default {
 data(){
   return {
     Background: Background,
     width: '100%',
     kringel: kringel,
     cursor: 'url(' + Cursor + ')',
     cursorlit: Cursor,
     mockup: mockup,
     scrollPos: 0,
     menuItems: ['red','white','white', 'white'],
     location: 0,
     options: [{
       duration: 300,
       offset: 0,
       easing: 'easeInOutCubic',
     }],

   }
 },
  components: {
    Starter,
    OpdrachtDesc,

    Reflectie,
    Features
  },methods:{
    scrollTo(number){
      if(number === 1){
        this.$vuetify.goTo(this.$refs.page1, this.options);

      } else if( number ===2 ){
        this.$vuetify.goTo(this.$refs.page2, this.options);

      }else if( number ===3 ){
        this.$vuetify.goTo(this.$refs.page3, this.options);

      }else if( number ===4 ){
        this.$vuetify.goTo(this.$refs.page4, this.options);

      }

    },
    handleScroll () {

      this.scrollPos = window.scrollY;
      this.$store.commit('scrollPos', this.scrollPos);
      var page2 = this.$refs.page2;
      var page1 = this.$refs.page1;
      var page3 = this.$refs.page3;
      //
      // console.log(page2.offsetTop + page2.offsetHeight );
      // console.log(page3.offsetTop + page3.offsetHeight -100);
      if(this.scrollPos > page1.offsetTop + page1.offsetHeight  && this.scrollPos < page2.offsetTop + page2.offsetHeight -300 ) {
        this.location = 0;
      }
      else if(this.scrollPos > page2.offsetTop -300 + page2.offsetHeight && this.scrollPos < page3.offsetTop + page3.offsetHeight -300) {
        this.location = 1;
      } else if(this.scrollPos > page3.offsetTop + page3.offsetHeight -300) {
        this.location = 2;
      }
    },
    changeMenu(index){
  console.log(index);
  // this.menuItems = [];
      this.menuItems =  ['white', 'white', 'white', 'white'];

  console.log(this.menuItems);
  this.menuItems.splice(index, 1, 'red')

}
  },watch :{
   location(){
     console.log('changed');
     this.changeMenu(this.location);
   },

  },
  beforeMount(){
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
    .superTitel {
        font-size: 48px;
        font-weight: bold;
    }
.titel {
  font-weight: bold;
  color: #FF4C42;
}
.bigdiv {
    min-height: 1000px;
    background: white;
}
.covered {
    background-size: cover;
}
.menu {
  position: fixed;
  left: 3%;
  top: 50%;
  z-index:9999;
}
.menu li {
  list-style-type: none;

}
@media screen and (max-width: 600px) {
  .menu li {
    display: none;
  }
}
.menu li:hover  .menuItem {
  width: 25px;
  height:25px;
  border-color: black;
  -webkit-box-shadow: 0px 6px 18px 10px rgba(0,0,0,0.24);
  -moz-box-shadow: 0px 6px 18px 10px rgba(0,0,0,0.24);
  box-shadow: 0px 6px 18px 10px rgba(0,0,0,0.24);
}
  .menuItem {
    position:relative;
    border-radius: 50%;
    margin-top: 20px;
    opacity: 0.7;
    border: 1px solid white;
    z-index:9999;
    background: white;
    width: 18px;
    height: 18px;
    transition: .3s;
    -webkit-box-shadow: 0px 6px 18px 2px rgba(0,0,0,0.24);
    -moz-box-shadow: 0px 6px 18px 2px rgba(0,0,0,0.24);
    box-shadow: 0px 6px 18px 2px rgba(0,0,0,0.24);
  }

  .home {
      /*cursor: url('../assets/cursor.svg')*/
  }
  .greydiv {
    background-color: #F9F9F9;
  }
</style>

