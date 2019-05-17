<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <p class="subvraagNummer">Subvraag 1</p>
                <h3 class="subvraag">
                    Waarom een testomgeving?
                </h3>
                <p>
                    Aangezien deze opdracht vrij groot is, was het handig om de <span>functionaliteiten</span>
                    in losse delen te maken, voordat ik het uiteindelijk samen voeg
                    als één groot geheel. <br>
                    Dit gaf mij ook gelijk de kans om bepaalde <span>libraries</span> uit testen, binnen in
                    een vue-project. Door alles in één project te hebben is het gemakkelijker
                    om later samen te voegen.
                    Met deze <span>Proof Of Concept</span> kon ik ook kleine functionaliteiten <span>showcasen</span>
                    aan de stakeholders, voordat ik deze dan samenvoeg. Op deze manier
                    kan ik feedback verkrijgen voordat ik het samenvoeg.

                </p>


                <!--<dotted_line></dotted_line>-->
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Charting library</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            <span>Grafieken</span> maken een groot deel van mijn opdracht uit, eerst met het visualiseren van data uit surveys, later uit Google Analytics data.
                            Het is dus de taak om de beste library te kiezen voor mijn project. Na een <span>comparison chart</span> en <span>Proof Of Concepts</span> van verschillende
                            libraries heb ik zelf wat conclusies kunnen trekken. Deze heb ik <span>gepresenteerd</span> aan de stakeholders en hieruit is de library 'eCharts' uit gekomen.
                            <i>{{info}}</i>


                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>

                        <div class="imageDiv" v-scroll-reveal>
                          <img class="image" :src="Chart">
                                <div class="middle">
                                    <a href="http://i367471.hera.fhict.nl/stageFiles/dashboardresearch.pdf" target="_blank">

                                        <v-card class="hiddenText">

                                            Bekijk onderzoek

                                    </v-card>
                                    </a>
                                </div>

                        </div>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg4 >
                    <div class="imageDiv" v-scroll-reveal>
                        <img class="image" :src="DonutChart">
                        <div class="middle">
                            <a href="http://i367471.hera.fhict.nl/stageFiles/graphbaseresearch.pdf" target="_blank">

                                <v-card class="hiddenText">

                                    Bekijk onderzoek

                                </v-card>
                            </a>
                        </div>
                    </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Vue-routing</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                             De stakeholders en ik hadden een discussie over hoe we de routing moesten aanpakken in het uiteindelijke product. We konden namelijk de routing gebruiken
                            die al in Elocus zit, of dit de plugin 'vue-router' laten doen. Ik heb dus een biebonderzoek gedaan naar vue-router en de voor- en nadelen hiervan. Hierbij
                            heb ik ook deze functies getest op de testomgeving. Op deze manier wist ik ook of de voordelen wel gemakkelijk te implementeren zijn of niet.
                            <br>
                            Uit dit onderzoek is een voorstel uit voort gekomen dat we beter de routing van Elocus kunnen gebruiken.

                            <br><i>{{info}}</i>


                        </p>
                    </v-flex>

                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Supporting libraries</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Na een <span>best, good and worse practices,</span> en een presentatie waarbij mijn stagebegeleiders en opdrachtgever <span>co-reflectie</span>
                            hebben kunnen geven, ben ik tot een paar belangrijke keuzes gekomen voor mijn concept. Ik heb hier gekeken naar wat voor <span>functionaliteiten</span>
                            deze tools hebben en wat voor  <span>keuzes</span> zij maken in het displayen van bepaalde dingen.
                            <br>
                            Deze conclusies heb ik kunnen gebruiken bij het maken van het prototype.


                            <i>{{info}}</i>


                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>

                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="Plugin">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/stageFiles/dashboardresearch.pdf" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk onderzoek

                                    </v-card>
                                </a>
                            </div>

                        </div>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg4 >
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="DonutChart">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/stageFiles/graphbaseresearch.pdf" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk onderzoek

                                    </v-card>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Google analytics</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            <span>Grafieken</span> maken een groot deel van mijn opdracht uit, eerst met het visualiseren van data uit surveys, later uit Google Analytics data.
                            Het is dus de taak om de beste library te kiezen voor mijn project. Na een <span>comparison chart</span> en <span>Proof Of Concepts</span> van verschillende
                            libraries heb ik zelf wat conclusies kunnen trekken. Deze heb ik <span>gepresenteerd</span> aan de stakeholders en hieruit is de library 'eCharts' uit gekomen.
                            <br><i>{{info}}</i>


                        </p>
                    </v-flex>

                </v-layout>

            </v-flex>
            <v-flex lg2 ></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Arrow from '../../assets/Arrow.svg'
    import dotted from '../../assets/dotted_line.svg'

    import Palet from '../../assets/colorpalette.png'
    import Dashboard from '../../assets/dashboard.jpg'
    import Chart from '../../assets/lineChart.png'
    import Plugin from '../../assets/vuePlugins.jpg'




    export default {

        data(){
            return {
                info: "klik op de afbeelding om het onderzoek te lezen.",
                Arrow: Arrow,
                Dotted: dotted,
                Chart: Chart,
                DonutChart: Chart,
                Plugin: Plugin,
                Palet: Palet,
                Dashboard: Dashboard
               // onderzoek1: onderzoek1,

            }
        }
    }
</script>

<style scoped>
span {
    color: #FF4C42;
    font-weight: 600;

}
.image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    margin: auto;
    backface-visibility: hidden;
}
@media only screen and (max-width: 1263px)  {
    .image {
        width: 30%;
    }
}
.imageDiv{
    /*border: 1px solid black;*/
    width:80%;
    height: 80%;
    margin:auto;
    position:relative;

} .imageDiv:hover .image {
    opacity: 0.4;

  }
  .imageDiv:hover .middle {
      opacity: 1;
  }
.hiddenText {
    background-color: #FF4C42;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
}
    .subvraagNummer {
        margin-bottom: -2px;

    }
    .subvraag {
        padding: 0;
    }
.arrow {
    width:70%;
    padding-top:2%;
    padding-bottom:2%;
    padding-left:26%
}
.middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
} a{

      text-decoration: none;
  }
</style>
