<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <p class="subvraagNummer">Subvraag 1</p>
                <h3 class="subvraag">
                    Waarom een prototype?
                </h3>
                <p>
                    Ik heb dit <span>eerste prototype</span> gemaakt om achter belangrijke <span>design keuzes</span> te
                    komen voor hoe mijn uiteindelijke applicatie eruit komt te zien. Dit prototype
                    is gemaakt met de insteek dat het een <span>'standalone app'</span> wordt. Hiermee heb
                    ik dus geen rekening gehouden met een bestaande huisstijl van The Ce8ion.Lab.
                </p>


                <dotted_line></dotted_line>
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Bestaande data dashboards</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Ik heb een <span>best, good and worse practices</span> onderzoek gedaan naar bestaande data dashboards. Hier heb ik naar positieve
                            en negatieve aspecten aan de bestaande dashboards gekeken, zo had ik een beter beeld van wat ik wel en niet moest toepassen bij mijn
                            eigen oplossing. Door dit onderzoek heb ik een paar
                            <span>functionaliteiten</span> en <span>design keuzes</span> kunnen vaststellen, ook heb ik conclusies kunnen gebruiken
                            in het onderzoek over 'Uiterlijk van grafieken'. <br>
                            <i>{{info}}</i>


                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>

                        <div class="imageDiv" v-scroll-reveal>
                          <img class="image" :src="Dashboard">
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
                <img :src="Arrow" class="arrow text-xs-center" v-scroll-reveal>
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
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Uiterlijk van grafieken</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Na een <span>biebonderzoek</span> over het kiezen van het grafiektype en een daaropvolgend <span>biebonderzoek</span> over waar
                            je op moet letten bij het visualiseren met data en het vaststellen van een <span>kleurenpalet</span> voor de grafieken. Heb ik een
                            aantal conclusies kunnen trekken die ik kan gebruiken om de basis van de grafieken op te bouwen. Hoe de grafieken er uiteindelijk uit
                            gaan zien is nog afhankelijk van de library en de data die ik aangeleverd krijg.
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
    import PieChart from '../../assets/pieChart.png'
    import DonutChart from '../../assets/donutChart.jpg'
    import Palet from '../../assets/colorpalette.png'
    import Dashboard from '../../assets/dashboard.jpg'




    export default {

        data(){
            return {
                info: "klik op de afbeelding om het onderzoek te lezen.",
                Arrow: Arrow,
                PieChart: PieChart,
                DonutChart: DonutChart,
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
    width:80%;
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
