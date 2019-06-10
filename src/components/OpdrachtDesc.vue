<template>
    <div class="fulldiv">
        <div class="schuin2">
        </div>
    <div class="OpdrachtDiv">

    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 md1>
            </v-flex>

               <v-flex xs12 md5 pa-3 v-scroll-reveal>

                   <h1 class="descTitel mt-5 text-xs-center">De opdracht</h1>
               </v-flex>
            <v-flex xs12 md4 pa-3 v-scroll-reveal>
                    <p>
                        The Cre8ion.Lab heeft al een applicatie die het mogelijk maakt om formulieren op te stellen en in te vullen. Nu hebben zij aan mij de opdracht gegeven om een tool te maken die de output van deze formulieren visualiseert. Dat zouden zij graag in een dashboard vorm zien.
                    </p>
                <p>
                    Tijdens het realiseren van deze tool wil ik een vraag vinden op de onderzoeksvraag “Wat is de juiste manier van het visualiseren van de binnenkomende data en wat voor functionaliteiten heeft de gebruiker nodig?“.
                </p>
                <p>
                    Het is mijn doel om een eindproduct te maken met de benodigde functies, dat sneller werkt dan bekende concurrenten "SurveyMonkey" en "Survio".
                </p>
            </v-flex>
          </v-layout>
    </v-container>
    </div>
        <div class="schuin">

        </div>
        <v-container fluid grid-list-md class="AanpakDiv">
            <v-layout row wrap>
                <v-flex xs12 md1>
                </v-flex>

                <v-flex xs12 md5 pa-3 v-scroll-reveal order-xs2 >
                    <p>
                        Mijn stage periode begon vooral met het oriënteren van de opdracht. Hiervoor heb ik personae gemaakt en onderzoek gedaan naar bestaande
                        oplossingen die op de mijne lijken. Hieruit zijn nog twee onderzoeken gekomen en dit heeft uiteindelijk geleid tot het eerste prototype.

                    </p>
                    <p>
                        Nu de opdracht duidelijk was ben ik begonnen met het leren van het javascript framework 'vue'. Dit was namelijk een requirement van het
                        stage bedrijf.
                        Na hiermee een aantal weken te hebben gewerkt heb ik een testomgeving opgezet. Op deze testomgeving kon ik allerlei plugins testen en de skills
                        die ik met de tutorials had geleerd toepassen.
                    </p>
                    <p>
                        Deze twee eerste onderdelen hebben geleid tot het uiteindelijke product, dit ging gepaard met een tweede versie van het prototype. Dit
                        keer was het ook volledig geïmplementeerd in het CMS-systeem van The Cre8ion.Lab, op deze manier was er zekerheid dat ze ook goed gebruik
                        gaan maken van mijn oplossing.
                    </p>


                </v-flex>
                <v-flex xs12 md5 pa-3 v-scroll-reveal order-lg2>
                    <h1 class="descTitel mt-5 text-xs-center">De aanpak</h1>
                </v-flex>

            </v-layout>
            <dotted_line></dotted_line>
        </v-container>
    </div>

</template>

<script>

</script>

<style scoped>
.fulldiv {
    background-color: white;
    min-height: 800px;
    color: white;

}
.OpdrachtDiv {
    background-color: #ff4c42;
    min-height: 300px;

}
.schuin {
    margin-top: -1px;
    min-height: 50px;
    background-color: #ff4c42;
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 3%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 3%);
}
.schuin2 {
    /*min-height: 10px;*/
    /*background-color: #ff4c42;*/
    /*-webkit-clip-path: polygon(0 0, 3% 0%, 100% 100%, 0 100%);*/
    /*clip-path: polygon(0 0, 2% 0%, 100% 100%, 0 100%);*/
}
    .descTitel {
        font-size: 65px;
        font-weight: 600;
    }
    .AanpakDiv {

        color: #303030;
    }

</style>

