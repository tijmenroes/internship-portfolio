<template>
  <div class="home" >
    <div class="menu">
      <ul>
        <li> <div class="menuItem" @click="scrollTo(1)" :style="{background: menuItems[0]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(2)" :style="{background: menuItems[1]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(3)" :style="{background: menuItems[2]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(4)" :style="{background: menuItems[3]}"></div></li>
        <li> <div class="menuItem" @click="scrollTo(5)" :style="{background: menuItems[4]}"></div></li>
      </ul>
    </div>
    <div class="lgdiv" >
        <v-layout row wrap align-center>
          <v-flex md0 lg1></v-flex>
           <v-flex sm12 md6 lg5 pr-4 pt-4 shrink>
             <v-container>
              <h1 class="superTitel" ref="page1">Reporting</h1>
             <p>
              Hoi! Ik ben Tijmen een student van Fontys ICT-media design. Deze site laat het proces zien van mijn stage bij The Cre8ion.Lab.
                 Hier heb ik een data dashboard ontwikkeld die data uit formulieren visualiseert. Op deze manier wordt de data niet simpelweg
               als een lijst gedisplayd, maar worden ze ook omgezet naar grafieken. Zo heeft de gebruiker meteen een overzicht van de data.
               <br>
               <a @click="testeroonie" >
                 <v-card class="hiddenText">
                   Bekijk Leeswijzer
                 </v-card>
               </a>
             </p>
             </v-container>
           </v-flex>
          <v-flex sm12 md6 style="min-height: 500px" class="hidden-sm-and-down ">



            <v-container>
              <img :src="mockup" alt="Bekijk Demo" style="width: 65%; left: 10%; position: relative; top: 100px;" >
            </v-container>

          </v-flex>
        </v-layout>

    </div>

    <span ref="page2"></span>
    <!--Opdracht omschrijving en aanpak-->
      <OpdrachtDesc></OpdrachtDesc>
    <div class="bigdiv">
      <h1 class="text-xs-center titel" ref="page3">Producten </h1>
      <keep-alive>
      <starter :researchNumber="researchNumber"> </starter>
      </keep-alive>
      <Kringel ></Kringel>
      <!--Features pagina-->
      <v-container>
        <v-layout row wrap>
          <v-flex xs1></v-flex>
          <v-flex xs10>
            <h1 class="text-xs-center titel" ref="page4">Eindproduct</h1>
            <features></features>
          </v-flex>

        </v-layout>

      </v-container>
      <Kringel ></Kringel>
    </div>

    <div class="reddiv">


      <h1 class="text-xs-center reflectieTitel pa-5" ref="page5">Resultaten</h1>
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

     researchNumber: -1,
     width: '100%',
     kringel: kringel,
     cursor: 'url(' + Cursor + ')',
     cursorlit: Cursor,
     mockup: mockup,
     scrollPos: 0,
     menuItems: ['red','white','white', 'white', 'white'],
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
    testeroonie(){
      console.log(this.$route.params.id);

    },
    scrollTo(number){
      if(number === 1){
        this.$vuetify.goTo(this.$refs.page1, this.options);

      } else if( number ===2 ){
        this.$vuetify.goTo(this.$refs.page2, this.options);

      }else if( number ===3 ){
        this.$vuetify.goTo(this.$refs.page3, this.options);

      }else if( number ===4 ){
        this.$vuetify.goTo(this.$refs.page4, this.options);
      }else if( number ===5 ){
        this.$vuetify.goTo(this.$refs.page5, this.options);
      }

    },
    handleScroll () {

      this.scrollPos = window.scrollY;
      this.$store.commit('scrollPos', this.scrollPos);
      var page2 = this.$refs.page2;
      var page1 = this.$refs.page1;
      var page3 = this.$refs.page3;
      var page4 = this.$refs.page4;
      var page5 = this.$refs.page5;
      const distance = 500;

      if(this.scrollPos < page2.offsetTop + page2.offsetHeight -distance ) {
        this.location = 0;
      }
      else if(this.scrollPos > page2.offsetTop - distance + page2.offsetHeight && this.scrollPos < page3.offsetTop + page3.offsetHeight -distance) {
        this.location = 1;
      } else if(this.scrollPos > page3.offsetTop + page3.offsetHeight -distance && this.scrollPos < page4.offsetTop + page4.offsetHeight -distance) {
        this.location = 2;
      }  else if(this.scrollPos > page4.offsetTop + page4.offsetHeight -800 && this.scrollPos < page5.offsetTop + page5.offsetHeight -800 ) {
        this.location = 3;
      } else {
        this.location = 4;
      }
    },
    changeMenu(index){
  console.log(index);
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
  mounted(){
    const param =  this.$route.params.id;
    if(param === "research"){
      this.scrollTo(3);
    } else if(param === "research1"){
      this.scrollTo(3);
      this.$store.state.researchNr = 0;
    } else if(param === "research2"){
      this.scrollTo(3);
      this.$store.state.researchNr = 1;
    } else if(param === "research3"){
      this.scrollTo(3);
      this.$store.state.researchNr = 2;
    }
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
      color: #FF4C42;
    }
    .hiddenText{
      background-color: #FF4C42;
      color: white;
      display: inline-block;
      font-size: 16px;
      margin: 5% 30%;
      padding: 10px 20px;
    }
.titel {
  font-weight: bold;
  color: #FF4C42;
}
.reflectieTitel {
  font-weight: bold;
  color: white;
}
.bigdiv {
    min-height: 1000px;
    background: white;
}
.lgdiv {
  min-height: 500px;
}
.frontpager {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 3%);
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

  .reddiv {
    background-color: #ff4c42;
  }
</style>

