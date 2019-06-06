<template>
    <v-container justify-space-around>
        <v-layout wrap row>

            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <h3 class="subvraag">
                    Waarom een tweede prototype?
                </h3>
                <p>
                    Na het <span>eerste prototype</span> was er nog heel wat werk aan de winkel. Hieruit bleek bijvoorbeeld dat de filter functie
                    te lastig was voor de gebruikers, deze zou dus veranderd moeten worden. Ook is de hele stijl omgegooid, het werd namelijk toch geen
                    <span>standalone</span> applicatie. Genoeg redenen om nog een prototype te maken dus.
                </p>
                <p>
                    Hieronder kan je het proces bekijken hoe ik van de eerste stijl en eerste prototype ben gegaan naar een tweede versie van het prototype, de resultaten van dit prototype
                    heb ik kunnen verwerken in het eindproduct.
                </p>


                <Kringel></Kringel>


                <v-layout wrap row>
                    <v-flex lg4 >
                    <div class="imageDiv" v-scroll-reveal>
                        <img class="image" :src="kleurenPalet">
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
                            Aangezien het eindproduct op Elocus komt te staan, was er een nieuw <span>kleurenpalet</span> nodig. Samen met een paar grafische experts van The Cre8ion.Lab, zijn wij gaan kijken naar inspiratie online, hierna heb ik met wat online tools een kleurenpalet kunnen samenstellen. Na wat iteraties, is deze ook goedgekeurd door de grafische afdeling, en komt deze nu meer overeen met de stijl van Elocus.
                            <br><i>{{info}}</i>
                        </p>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Prototype 2</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Met de <span>testresultaten</span> van het prototype en de daarbij horende feedback plus een nieuw kleurenpalet, had ik al heel wat informatie die nodig was om een nieuw prototype te maken. Met dit prototype heb ik veel afgekeken van Elocus, ik wou namelijk dat dit prototype <span>consistent</span> was met de stijl van Elocus.
                            Met dit prototype wou ik testen of de problemen die voortkwamen uit de resultaten van de usertesten van prototype 1, waren opgelost. Ook was dit een mooi
                            moment om de nieuwe functies te testen, en of deze duidelijk zijn voor de gebruiker.
                            <br>
                            <i>Klik op de afbeelding om het prototype te bekijken</i>
                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="Proto2">
                            <div class="middle">
                                <a href="https://xd.adobe.com/view/01f466a7-fd36-4bfd-41de-3ced529508c1-77c5/?fullscreen&hints=off" target="_blank">
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
                    <v-flex lg4 >
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="DonutChart">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/stageFiles/prototype_testdocument2.pdf" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk testdocument

                                    </v-card>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Usertests prototype 2</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Ik heb het prototype op acht mensen getest, dit waren testpersonen met en zonder verstand van Elocus. Het voornaamste <span>pijnpunt</span> was het niet kunnen vinden
                            van bepaalde knoppen. Vaak hadden de gebruikers deze simpelweg niet gezien, of hadden ze het op een andere plek verwacht. Ze gaven wel aan na het één keer gedaan te hebben, het wel logische plek vonden. Om deze pijnpunten tegen te gaan heb ik een aantal veranderingen gemaakt aan het eindproduct.
                            <br><i>Klik op de afbeelding om de testresultaten te bekijken</i>
                        </p>
                    </v-flex>
                </v-layout>
                <img :src="Arrow" class="arrow text-xs-center hidden-md-and-down" v-scroll-reveal >
                <img :src="Dotted" class="arrow text-xs-center hidden-lg-and-up" v-scroll-reveal >
                <v-layout wrap row>
                    <v-flex lg8 order-xs2 order-md2 order-lg1 >
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span>Eindproduct  </span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>

                            Alle voorgaande stappen hebben uiteindelijk tot het <span>eindproduct</span> geleid. In dit eindproduct is het mogelijk om een dashboard zo in te stellen
                            als je wilt. Mijn oplossing werkt als je kijkt naar de tijd die het nodig heeft, sneller dan bekende oplossingen zoals "SurveyMonkey" of "Survio". Voor veiligheidsredenen heb ik alleen een demo online gezet, hierin is het enige verschil dat de data niet uit een API komt, maar vooraf geset wordt.
                            <br>
                            <i>Klik op de afbeelding om de demo te bekijken</i>
                        </p>
                    </v-flex>
                    <v-flex lg4  order-sm1>
                        <div class="imageDiv" v-scroll-reveal>
                            <img class="image" :src="Eind">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/reporter/" target="_blank">
                                    <v-card class="hiddenText">
                                        Bekijk demo
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
                            <img class="image" :src="Docs">
                            <div class="middle">
                                <a href="http://i367471.hera.fhict.nl/documentation/docs/install.html" target="_blank">

                                    <v-card class="hiddenText">

                                        Bekijk documentatie

                                    </v-card>
                                </a>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3" v-scroll-reveal><span> Documentatie</span></h3>
                        <p class="onderzoekTekst" v-scroll-reveal>
                            Om het overhandigen van mijn product wat vlotter te laten verlopen heb ik <span>documentatie</span> geschreven voor mijn eindproduct. Hierbij heb ik vooral naar de belangrijkste aspecten van mijn applicatie gekeken, dit zijn de onderdelen die zij misschien later moeten gaan aanpassen. Zoals bijvoorbeeld wanneer de API is veranderd.
                            <br><i>Klik op de afbeelding om de documentatie te bekijken.</i>


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

    import Docs from '../../assets/documentation.jpg'
    import Proto2 from '../../assets/prototype2ss.jpg'
    import Eind from '../../assets/eindproduct.jpg'


    import kleurenPalet from  '../../assets/kleurenpalet.jpg'
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
                Proto2: Proto2,
                Plugin: Plugin,

                Eind: Eind,
                Docs: Docs,
                kleurenPalet: kleurenPalet,

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
