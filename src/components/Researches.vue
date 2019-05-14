<template>
    <v-container justify-space-around>
        <v-layout wrap row>
            <v-flex lg2 ></v-flex>
            <v-flex xs10 lg8>

                <p class="subvraagNummer">Subvraag 1</p>
                <h3 class="subvraag">
                    Welke aspecten bepalen wat voor <span>visualisatie</span> ik moet
                    gebruiken om mijn <span>data</span> te laten zien?
                </h3>
                <p>
                    Om erachter te komen hoe ik op de beste manier de data visualiseer ben ik een <span>bieb-onderzoek</span> begonnen.
                </p>


                <dotted_line :scrollPos="scrollPos"></dotted_line>
                <v-layout wrap row>
                    <v-flex lg8>
                        <h3 class="text-xs-center pa-3"><span>Grafiek keuze</span></h3>
                        <p class="onderzoekTekst" v-html="Searcheroonie">
                        </p>
                    </v-flex>
                    <v-flex lg4>
                        <div style="float: right">afbeelding</div>
                    </v-flex>
                </v-layout>

            </v-flex>
            <v-flex lg2 ></v-flex>

        </v-layout>
    </v-container>
</template>
<script>
    import dotted_line from './dotted.vue'
    export default {
        components:{
            dotted_line
        },

        data(){
            return{
                Searcheroonie: "Het zelf manipuleren van data met behulp van <span class='lit'>filters</span> of <span>aanpassingen in de grafiek</span> kwam erg vaak voor. Vaak kon je ook specifieke antwoorden aan of uit zetten, deze kwamen dan niet meer in de grafieken terecht. <span>Exporteren</span> van de data naar Excel, PDF of een afbeelding is ook een functionaliteit die bijna elke tool had.",
                Research: {research1: [{title: "Juiste keuze grafieken", text: "Het zelf manipuleren van data met behulp van <span>filters</span> of <span>aanpassingen in de grafiek</span> kwam erg vaak voor. Vaak kon je ook specifieke antwoorden aan of uit zetten, deze kwamen dan niet meer in de grafieken terecht. <span>Exporteren</span> van de data naar Excel, PDF of een afbeelding is ook een functionaliteit die bijna elke tool had."}]},
                specialColor: 'red'
            }

        }
    }
</script>

<style scoped>
    span {
        color: red;
    }
    .lit {
        color: red;
    }
</style>
