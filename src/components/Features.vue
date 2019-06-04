<template>
    <div>
    <v-container fill-height>
    <v-layout row wrap align-center>
        <v-flex xs12 md6 >
            <div class="imgDiv" >
                <video ref="videoRef2" src="" width="70%" muted loop autoplay controls ></video>
            </div>
    </v-flex>
        <v-flex xs12 md5>
            <h3 class="text-xs-center" v-scroll-reveal> Filter</h3>
            <p v-scroll-reveal="{delay: 100}">
                Met het filter kan de gebruiker gemakkelijk filters instellen die over het hele dashboard gelden. Wanneer een filter is aangemaakt, komt deze als een chip tevoorschijn vlak boven het dashboard.
                De gebruiker kan dan de filter anders instellen of verwijderen.

            </p>
        </v-flex>
    </v-layout>
    </v-container>
        <img :src="Arrow" class="arrow text-xs-center" v-scroll-reveal>
        <v-container fill-height>
            <v-layout row wrap align-center>
                       <v-flex xs12 md5>
        <h3 class="text-xs-center" v-scroll-reveal> Edit chart</h3>
                           <p v-scroll-reveal="{delay: 100}">
                               De gebruiker kan de grafiek aanpassen tot hij ziet, wat hij wilt zien. <br>
                               Het aanpassen menu heeft twee tabs, Grafiektype en weergave. Bij het grafiektype menu kan de gebruiker het grafiektype aanpassen, hier zijn 5 keuzes voor. Met het weergave menu
                               kan de gebruiker aanpassingen maken aan de grafiek zelf en het vak.

        </p>
        </v-flex>
        <v-flex xs12 md6>
            <div class="imgDiv" >
                <!--<img :src="Knipsel" alt="" style="float:right;">-->
                <video ref="videoRef" src="" style="float:right;" width="70%" muted loop autoplay controls ></video>
            </div>
        </v-flex>


    </v-layout>
    </v-container>
    </div>
</template>

<script>
    import Arrow from "../assets/Arrow.svg"
    import Knipsel from "../assets/knipseltest.jpg"

    export default {

        data(){
            return {
                Arrow: Arrow,
                Knipsel: Knipsel,

            }
        }, mounted(){
            this.$refs.videoRef.src = "http://i367471.hera.fhict.nl/stageFiles/chartedit.mp4";
            this.$refs.videoRef2.src = "http://i367471.hera.fhict.nl/stageFiles/chartedit.mp4";
        }
    }
</script>

<style scoped>
img {
    width: 80%;
    padding: 5%;
    }
    .arrow {
    width:80%;
    padding-top:0;
    padding-bottom:0;
    padding-left:26%
    }
    video  {
        /*padding: 80px;*/
    }

</style>
