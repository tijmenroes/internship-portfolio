<template>
    <div>

            <v-layout row>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
                <v-flex xs12>
        <div ref="normal">

            <v-container>
                <v-layout row wrap >
                    <v-flex xs12 md12 lg4 class="border pa-4" v-for="(item, index) in cards" :key="item.titel"  v-scroll-reveal>

                        <v-card  height="40rem" v-if="index === $store.state.researchNr" class="kaart selectedCard" @mouseenter="changeImg(index)" @click="showResearch(index)"
                                 @mouseleave="changeImgBack(index) ">
                            <v-container fill-height>
                                <v-layout row wrap>

                                    <div class="text text-xs-center" style="margin: auto;" >
                                        <img :src="item.src" style="width: 100px; display:block" >
                                        <div class="fadingEffect"></div>
                                    </div>

                                    <v-card-text primary-title pt-4 mt-5 ml-3>

                                        <v-layout row wrap>
                                            <div  class="title">
                                                <h1 mb-2><span>{{item.hoofdtitel}}</span>{{item.titel}} </h1>
                                                <p class="subtext">
                                                    {{item.subtext}}
                                                </p>
                                                <v-btn depressed flat small class="button text-none text-xs-right">
                                                    Bekijk het proces
                                                    <v-icon class="icoon">
                                                        arrow_right_alt
                                                    </v-icon>
                                                </v-btn>
                                            </div>
                                        </v-layout>
                                    </v-card-text>
                                </v-layout>
                            </v-container>
                        </v-card>



                        <v-card  height="40rem" v-else class="kaart" @mouseenter="changeImg(index)" @click="showResearch(index)"
                                @mouseleave="changeImgBack(index) ">
                            <v-container fill-height>
                                <v-layout row wrap>

                                        <div class="text text-xs-center" style="margin: auto;" >
                                            <img :src="item.src" style="width: 100px; display:block" >
                                            <div class="fadingEffect"></div>
                                        </div>

                                    <v-card-text primary-title pt-4 mt-5 ml-3>

                                        <v-layout row wrap>
                                            <div  class="title">
                                                <h1 mb-2><span>{{item.hoofdtitel}}</span>{{item.titel}}  </h1>
                                                <p class="subtext">
                                                    {{item.subtext}}
                                                </p>
                                                <v-btn depressed flat small class="button text-none text-xs-right">
                                                Bekijk het proces
                                                <v-icon class="icoon">
                                                    arrow_right_alt
                                                </v-icon>
                                            </v-btn>
                                            </div>
                                        </v-layout>
                                    </v-card-text>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>

                </v-layout>

            </v-container>

        </div>


                </v-flex>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
            </v-layout>

        <div ref="research"></div>
        <div v-if="$store.state.researchNr === 0" class="conclusies" >
            <v-layout row wrap>
            <v-flex xs1 class="hidden-md-and-down"></v-flex>
                <v-flex xs12>
 <v-container>
            <h1 class="text-xs-center hoofdvraag pa-4">{{cards[0].hoofdtitel +  cards[0].titel}}</h1>
 </v-container>
                </v-flex>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
            </v-layout>
            <Research1></Research1>
        </div>
        <div v-else-if="$store.state.researchNr === 1" class="conclusies" >
            <v-layout row wrap>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
                <v-flex xs12>
                    <v-container>
                        <h1 class="text-xs-center hoofdvraag pa-4">{{cards[1].hoofdtitel +  cards[1].titel}}</h1>
                    </v-container>
                </v-flex>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
            </v-layout>
            <Research2></Research2>
        </div>
        <div v-else-if="$store.state.researchNr === 2" class="conclusies" >
            <v-layout row wrap>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
                <v-flex xs12>
                    <v-container>
                        <h1 class="text-xs-center hoofdvraag pa-4">{{cards[2].hoofdtitel +  cards[2].titel}}</h1>
                    </v-container>
                </v-flex>
                <v-flex xs1 class="hidden-md-and-down"></v-flex>
            </v-layout>
            <Research3></Research3>
        </div>
    </div>
</template>
<script>
    import Research1 from './Research/Research1.vue'
    import Research2 from './Research/Research2.vue'
    import Research3 from './Research/Research3.vue'


    import kringel from "../assets/kringel.svg"
    import image from "../assets/whiteTimeline.png"
    import image2 from "../assets/redTimeline.png"
    import Design1 from "../assets/redDesign.png"
    import Design2 from "../assets/whiteDesign.png"
    import Code1 from "../assets/redCode.png"
    import Code2 from "../assets/whiteCode.png"
    export default {
        props: ["researchNumber"],
        components:{
            Research1, Research2, Research3
        },
        methods:{
            showResearch(index){
                this.$store.state.researchNr = index;
                // this.$vuetify.goTo(this.$refs.research, this.options);
            },
            changeImg(index){
                this.cards[index].src = this.cards[index].image[1];
            },
            changeImgBack(index){
                this.cards[index].src = this.cards[index].image[0];
            }
        },

        data() {
            return {
                lolWidth: '400px',
                width: '100%',
                kringel: kringel,
                imgRef: image2,
                researchnr: -1,
                imgRef2: image,
                imgRefOG: image2,
                options: [{
                    duration: 300,
                    offset: 0,
                    easing: 'easeInOutCubic',
                }],
                expand: false,
                // researchnr: -1,
                cards: [
                    {hoofdtitel:'Proto', titel: 'type 1', subtext: 'Onderzoeken en informatie opdoen om tot een prototype te komen', path: '/research',
                        image: [image2, image], src: image2, iconColor: '#ff4c42'},
                    {hoofdtitel:'Vue', titel: ' Testomgeving', subtext: 'Testomgeving om erachter te komen wat voor technische benodigheden nodig zijn', path: '/research',
                        image: [Code1, Code2], src: Code1},
                    {hoofdtitel:'Eind', titel: 'product', subtext: 'Het implementeren van eerdere conclusies tot een laatste prototype en eindproduct', path: '/research',
                        image: [Design1, Design2], src: Design1},
                ]
            }
        },
        computed: {
          researchNumber(){

              this.researchnr = this.researchNumber;
              return this.researchnr
          }
        }, mounted() {
            this.$store.watch(this.$store.getters.getresearchNumber, researchnr =>{
                this.$vuetify.goTo(this.$refs.research, this.options);
            })

        }
    }
</script>

<style scoped>
    .button {
        float:right;
        position:absolute;
        bottom: 0;
        right: 0;
        font-weight: 300;
    }

    .text {
        position:relative;
    }
    .hoofdvraag {
        font-weight: 600;
        padding: 5%;
    }
    h3 {
        font-size: 28px;
    }
    .conclusies span {
        color: #ff4c42;
    }
    .subvraagNummer{
        color: #ff4c42;
        font-size: 15px;
        font-weight:400;
        margin-bottom: -2px;
    }
    .subvraag {
        font-weight:400;
        font-size: 30px;
    }
    .onderzoekTekst {
        font-size: 18px;
    }
    .subvraagDiv {
        margin-left: 20%;
    }
    .fadingEffect {
        position:absolute;
        top:0; bottom:0; right:0;
        width:0%;
        background:white;
        transition: 0.2s;
    }
    .kringel {
        height: 30%;
        width: 50%;
    }
    .fadeKringel {
        position:absolute;
        top:0; bottom:0; right:0;
        width:80%;
        background:white;
        transition: 1s;
        /*-webkit-animation: showHide 4s alternate infinite; !* Safari and Chrome *!*/
        /*animation: showHide 4s alternate infinite;*/
    }
    .kaart:hover  .fadingEffect {
        background:#ff4c42;
        -webkit-animation: showHide 2s; /* Safari and Chrome */
        animation: showHide 2s;
    }
    .kaart {
        transition: 0.2s;
        border-radius:10px;
    }
    .icoon {
        color: #ff4c42
    }
    .selectedCard {
        border: 0.07rem solid rgba(0,0,0, 0.4);
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
        padding-bottom: 100px;
    }
    .kaart:hover button {
        color: white !important;
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
