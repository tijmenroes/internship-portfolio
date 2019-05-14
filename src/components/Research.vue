<template>
    <div>
        <div v-if="researchnr === -1 || researchnr === 0" ref="normal">
        <h1 class="text-xs-center">Research</h1>
        <p class="text-xs-center">{{researchnr}}</p>
            <v-container>
            <v-layout row wrap align-center>
                <v-flex xs12 md4 class="border pa-3" v-for="(item, index) in cards" :key="item.titel" @click="researchnr = index">
                    <v-card height="35rem" class="kaart">
                        <v-container fill-height>
                            <!--<v-layout row wrap>-->

                            <!--</v-layout>-->
                            <v-layout justify-center align-center>
                        <v-card-title primary-title pt-4 mt-5 ml-3>
                            <v-layout row wrap>
                            <div class="text text-xs-center" style="background-color: grey">
                                <img :src="imgRef" style="width: 100px; color: red" >
                                <div class="fadingEffect"></div>
                            </div>
                            <hr>
                            </v-layout>
                            <v-layout row wrap>
                            <div  class="title">
                           <h1 mb-2><span>{{item.hoofdtitel}}</span>{{item.titel}} </h1>
                   <p class="subtext" >
                        {{item.subtext}}
                    </p>

                            </div>
                            </v-layout>
                   </v-card-title>
                           </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>

            </v-layout>
            </v-container>

        </div>
        <div v-else-if="researchnr === 1">
            <research1 @reset="researchnr =-1"></research1>
        </div>
        <div v-for="poepje in 30">
            haha
        </div>
    </div>
</template>
<script>
   import Research1 from './Research1.vue'
 //  import goTo from 'vuetify/lib/components/Vuetify/goTo'
   import image from "../assets/whiteTimeline.png"
   import image2 from "../assets/baseline-timeline-24px.svg"
export default {
    components:{
      Research1

    },
    watch: {
        researchnr(){
            if(this.researchnr === -1 ){
                console.log('ldjklfajlks')
                this.$vuetify.goTo(this.$refs.normal, this.options)
            } else {
                this.$vuetify.goTo(this.$refs.normal, this.options)
            }
        }
    },
    data() {
        return {
            imgRef: image2,
            options: [{
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic',
            }],
            expand: false,
            researchnr: -1,
            cards: [
                {hoofdtitel:'Data', titel: 'visualisatie', subtext: 'hoe moet ik data gaan visualiseren?', path: '/research'},
                {hoofdtitel:'design', titel: ' & ux', subtext: 'hoe moet het...?', path: '/research'},
                {hoofdtitel:'Technische', titel: ' Benodigheden', subtext: 'hoe moet het...?', path: '/research'},
            ]
        }
    },

}
</script>

<style scoped>
    .text {
        position:relative;
    }
    .fadingEffect {
        position:absolute;
        top:0; bottom:0; right:0;
        width:0%;
        background:red;
    }
    .kaart:hover  .fadingEffect {

        -webkit-animation: showHide 2s; /* Safari and Chrome */
        animation: showHide 2s;
    }
.kaart {
    transition: 0.2s;
}
.title {
    margin-top: 100px;
    transition: 0.2s;
}
   .kaart:hover {
       background:#ff4c42 ;
       transition: 0.2s;
   }
   .kaart:hover .title {
       color: white !important;
       margin-top: -100px;

   }
   .subtext {
       margin-top: 10px;
       font-size: 14px;
       font-weight:300;

   }
    @-webkit-keyframes showHide { /* Chrome, Safari */
        0% {width:100%}
        100% {width:0%}
    }

</style>
