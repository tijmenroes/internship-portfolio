<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>
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


                <Kringel></Kringel>
                <!--<dotted_line></dotted_line>-->
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Charting library</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            <span>Grafieken</span> maken een groot deel van mijn opdracht uit, eerst met het visualiseren van data uit surveys, later uit Google Analytics data.
                            Het is dus de taak om de beste library te kiezen voor mijn project. Na een <span>comparison chart</span> en <span>Proof Of Concepts</span> van verschillende
                            libraries heb ik zelf wat conclusies kunnen trekken. Deze heb ik <span>gepresenteerd</span> aan de stakeholders en hieruit is de library 'eCharts' uit gekomen.
                            <br>
                            <i>klik op de afbeelding om het adviesrapport te lezen.</i>


                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>

                        <div class="imageDiv" v-scroll-reveal>
                          <img class="image" :src="Chart">
                                <div class="middle">
                                    <a href="http://i367471.hera.fhict.nl/stageFiles/dashboardresearch.pdf" target="_blank">

                                        <v-card class="hiddenText">

                                            Bekijk adviesrapport

                                    </v-card>
                                    </a>
                                </div>

                        </div>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down flip" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg4 >
                    <div class="imageDiv" v-scroll-reveal>
                        <img class="image" :src="Logo">
                        <div class="middle">
                            <a href="http://i367471.hera.fhict.nl/stageFiles/vuerouter_research.pdf" target="_blank">

                                <v-card class="hiddenText">

                                    Bekijk adviesrapport

                                </v-card>
                            </a>
                        </div>
                    </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Vue-routing</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                             De stakeholders en ik hadden een discussie over hoe we de <span>routing</span> moesten aanpakken in het uiteindelijke product. We konden namelijk de routing gebruiken
                            die al in Elocus zit, of dit de plugin 'vue-router' laten doen. Ik heb dus een <span>literatuuronderzoek</span> gedaan naar vue-router en de voor- en nadelen hiervan. Hierbij
                            heb ik ook deze functies <span>getest</span> op de testomgeving. Op deze manier kon ik namelijk zien of de voordelen wel gemakkelijk te implementeren zijn of niet.
                            <br>
                            Uit dit onderzoek is een voorstel uit voort gekomen dat we beter de routing van Elocus kunnen gebruiken.
                            <br><i>klik op de afbeelding om het adviesrapport te lezen.</i>

                        </p>
                    </v-flex>

                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Supporting libraries(ontbreekt)</span></h3>
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
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down flip" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg4 >
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="galogo">
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
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Google analytics(ontbreekt)</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Aangezien ik al grafieken had kunnen maken, waar de gebruiker ook wat aanpassingen op kon doen. Leek het ons een goede <span>uitbreiding</span> om dit ook met
                            <span>Google Analytics </span> data te kunnen. Daarom heb ik eerst een onderzoek gedaan naar wat data goed is om te displayen. Aangezien elke klant van The
                            Cre8ion.Lab anders is, is mij gevraagd om de data een beetje globaal te houden, zo kon elke klant er gebruik van maken.
                            <br>
                            Nadat bekend was wat voor data gevisualiseerd moest gaan worden, kon ik aan de slag met het <span>testen</span> hiervan op de testomgeving.
                            <br><i>{{info}}</i>


                        </p>
                    </v-flex>

                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down flip" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Vue testomgeving</span></h3>
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
                            <img class="image" :src="Logo">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/vue-testomgeving/#/tools" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk Testomgeving

                                    </v-card>
                                </a>
                            </div>

                        </div>
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

    import galogo from '../../assets/galogoo.png'
    import Dashboard from '../../assets/dashboard.jpg'
    import Chart from '../../assets/lineChart.png'
    import Plugin from '../../assets/vuePlugins.jpg'
    import Logo from '../../assets/logo.png'




    export default {

        data(){
            return {
                info: "klik op de afbeelding om het onderzoek te lezen.",
                Arrow: Arrow,
                Dotted: dotted,
                Chart: Chart,
                DonutChart: Chart,
                Plugin: Plugin,
                galogo: galogo,
                Dashboard: Dashboard,
                Logo: Logo,
               // onderzoek1: onderzoek1,

            }
        }
    }
</script>

<style scoped>
    .hiddenText {
        background-color: #FF4C42;
        color: white;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.5px;
        padding: 16px 32px;
    }
    .hiddenText:hover{
        background-color: #a53029;
    }
span {
    color: #FF4C42;
    font-weight: 600;

}

 a{

      text-decoration: none;
  }
</style>
