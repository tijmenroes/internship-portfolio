<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <h3 class="subvraag">
                    Waarom een prototype?
                </h3>
                <!--<p>-->
                    <!--Ik wou een proto-->
                <!--</p>-->
                <p>
                    Ik heb dit <span>eerste prototype</span> gemaakt om achter belangrijke <span>design keuzes</span> te
                    komen voor hoe mijn uiteindelijke applicatie eruit komt te zien. Dit prototype
                    is gemaakt met de insteek dat het een <span>'standalone app'</span> wordt. Hiermee heb
                    ik dus geen rekening gehouden met een bestaande huisstijl van The Ce8ion.Lab.
                </p>

                <Kringel></Kringel>

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
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Bestaande survey tools</span></h3>
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
                            <img class="image" :src="surveyLogo">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/stageFiles/surveytool_research.pdf" target="_blank">
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
                    <v-flex lg4>
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="Ontwerp">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/stageFiles/ontwerpproces.pdf" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk proces

                                    </v-card>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Ontwerpfase</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Na alle onderzoeken had ik al een goed beeld van wat ik wou maken. Ik heb besloten hier <span>schetsen</span> van te maken, op deze manier kon ik het idee al vast visualiseren en
                            kijken wat wel en niet zou werken.
                            Hierna heb ik <span> digitale ontwerpen</span> gemaakt in Photoshop.
                            Op deze digitale ontwerpen heb ik feedback gevraagd van de stage begeleiders, zij hebben namelijk voldoende ervaring met het creëren van front-end applicaties.
                            <br><i>klik op de afbeelding om het proces te bekijken</i>
                        </p>
                    </v-flex>

                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Prototype</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Na over alles <span>feedback</span> gekregen te hebben, kreeg ik het advies om Adobe XD te gebruiken voor een prototype. Daar ben ik
                            mee aan de slag gegaan. Hieruit is een <span>clickable prototype </span>gekomen waarin ik een aantal <span>a/b testjes</span> doe met het menu en de stijl. Ook hoopte ik met
                            dit prototype een duidelijker beeld te krijgen over wat wel en niet duidelijk is van het ontwerp. Door het te testen op mensen die wat verstand hadden
                            van front-end development en grafisch design, hoopte ik ook extra feedback te krijgen over het ontwerp. Aangezien uit een ander onderzoek is gebleken dat ik een
                            material design library ga gebruiken voor de front-end, is dit prototype ook met de principes van material design gemaakt.
                            <br><i>klik op de afbeelding om het prototype te bekijken</i>
                        </p>
                    </v-flex>
                    <v-flex lg4 >
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="Proto1">
                            <div class="middle">
                                <a href="https://xd.adobe.com/view/b4490747-9eb8-4ff4-6bf1-f0d0a0f73453-c278/?fullscreen" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk Prototype

                                    </v-card>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>

                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down flip" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >

                <v-layout wrap row>
                    <v-flex lg4  order-sm1>
                    <div class="imageDiv" v-scroll-reveal>
                        <img class="image" :src="Proto1">
                        <div class="middle">
                            <a href="http://i367471.hera.fhict.nl/stageFiles/testdocument1.pdf" target="_blank">
                                <v-card class="hiddenText">
                                    Bekijk testdocument
                                </v-card>
                            </a>
                        </div>
                    </div>
                </v-flex>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Usertests prototype 1</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Met het prototype wilde ik onderzoeken of de gebruiker  <span>intuïtief</span> met het prototype kan omgaan. Daarbij heb ik een aantal <span>a/b testjes</span> opgesteld om de gebruiker  verschillende manieren te laten zien van filter en stijl. Op deze manier hoopte ik een duidelijk beeld te krijgen over wat een geschikte stijl is voor het dashboard.
                            <i>{{info}}</i>
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
    import Dotted from '../../assets/dotted_line.svg'

    import DonutChart from '../../assets/donutChart.jpg'

    import Dashboard from '../../assets/dashboard.jpg'
    import Proto1 from '../../assets/proto1.jpg'
    import Ontwerp from '../../assets/monitor.jpg'
    import surveyLogo from '../../assets/surveymonkey-logo.png'

    export default {

        data(){
            return {
                info: "klik op de afbeelding om het onderzoek te lezen.",
                Arrow: Arrow,
                Dotted:Dotted,
                DonutChart: DonutChart,
                Dashboard: Dashboard,
                Ontwerp: Ontwerp,
                surveyLogo: surveyLogo,
                Proto1: Proto1,
             }
        }
    }
</script>
<style>
    .flip{
        -moz-transform: scaleX(-1) !important;
        -o-transform: scaleX(-1) !important;;
        -webkit-transform: scaleX(-1) !important;;
        transform: scaleX(-1) !important;;
        filter: FlipH;
        padding-left: 0% !important;
        padding-right: 26%;
        -ms-filter: "FlipH";
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
    .subvraag {
        padding: 0;
    }
    .arrow {
        width:70%;
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
    }
</style>
<style scoped>

span {
    color: #FF4C42;
    font-weight: 600;
}
 a{
      text-decoration: none;
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
</style>
