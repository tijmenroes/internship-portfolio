<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <p class="subvraagNummer">Subvraag 1</p>
                <h3 class="subvraag">
                    Waarom een tweede prototype?
                </h3>
                <p>
                    Na het <span>eerste prototype</span> was er nog heel wat werk aan de winkel. Hieruit bleek bijvoorbeeld dat de filter functie
                    te lastig was voor de gebruikers, deze zou dus veranderd moeten worden. Ook is de hele stijl omgegooid, het werd namelijk toch geen
                    <span>standalone</span> applicatie. Genoeg redenen om nog een prototype te maken dus.
                </p>
                <p>
                    Hieronder kan je het proces bekijken hoe ik van de eerste stijl en eerste prototype ben gegaan naar een tweede versie van het prototype, dit is ook
                    de versie die uiteindelijk gebruikt word in Elocus.
                </p>


                <Kringel></Kringel>
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Usertests prototype 1</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            De <span>usertests</span> van het eerste prototype heb ik erg goed kunnen gebruiken bij het maken van het tweede prototype 2.
                            Er komen hierin namelijk een aantal problemen en oplossingen naar boven, die ik vervolgens kan toepassen in het ontwerp van het
                            tweede prototype.
                            <i>{{info}}</i>

                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>
                        <div class="imageDiv" v-scroll-reveal>
                          <img class="image" :src="Chart">
                                <div class="middle">
                                    <a href="http://i367471.hera.fhict.nl/stageFiles/testdocument1.pdf" target="_blank">
                                        <v-card class="hiddenText">
                                            Bekijk testdocument
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
                        <img class="image" :src="DonutChart">
                        <div class="middle">
                            <a href="http://i367471.hera.fhict.nl/stageFiles/graphbaseresearch.pdf" target="_blank">

                                <v-card class="hiddenText">

                                    Bekijk onderzoeksproces

                                </v-card>
                            </a>
                        </div>
                    </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Vernieuwd kleurenpalet</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            <span>Grafieken</span> maken een groot deel van mijn opdracht uit, eerst met het visualiseren van data uit surveys, later uit Google Analytics data.
                            Het is dus de taak om de beste library te kiezen voor mijn project. Na een <span>comparison chart</span> en <span>Proof Of Concepts</span> van verschillende
                            libraries heb ik zelf wat conclusies kunnen trekken. Deze heb ik <span>gepresenteerd</span> aan de stakeholders en hieruit is de library 'eCharts' uit gekomen.
                            <br><i>{{info}}</i>
                        </p>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Usertests prototype 2</span></h3>
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
                                <a href="http://i367471.hera.fhict.nl/stageFiles/testdocument2.pdf" target="_blank">
                                    <v-card class="hiddenText">
                                        Bekijk testdocument
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

            }
        }
    }
</script>

<style scoped>
span {
    color: #FF4C42;
    font-weight: 600;

}
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
a{

      text-decoration: none;
  }
</style>
