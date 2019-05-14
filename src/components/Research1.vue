<template>
    <div class="researchContainer">
        <div class="researchContent">
    <div class="researchBegin" :style="{height: startupHeight}">
        <v-icon big right dark @click="emit">close</v-icon>
        <div class="content">
         <v-container class="content text-xs-center">
        <v-layout row wrap>
        <v-flex xs3></v-flex>
         <v-flex xs6>
             <h1 class="pa-4 hoofdvraag" :style="{opacity: opacity, marginTop: margin}">Hoe moet ik de data visualiseren?</h1>
           <div class="subvragen mt-4" :style="{opacity: opacity2, marginTop: margin2}">
    <p>• Welke aspecten bepalen wat voor visualisatie ik moet gebruiken om mijn data te laten zien?</p>
    <p>• Wat zijn veelgemaakte fouten bij het visualiseren van data en hoe zorg ik ervoor dat ik deze niet maak?</p>
      </div>
             <hr class="lithr">
        </v-flex>
        <v-flex xs3></v-flex>
        </v-layout>
         </v-container>
        </div>
            </div>
        <v-container :style="opacityAll">
            <v-layout row wrap v-for="poep in 15">
                <v-flex xs10>
                    <h3 class="headline">Welke aspecten bepalen wat voor visualisatie ik moet gebruiken om mijn data te laten zien?</h3>
                    <div class="subvragen mt-4">
                    </div>
                </v-flex>
                <v-flex xs1></v-flex>
            </v-layout>
        </v-container>
        </div>
</div>
</template>

<script>


export default {
    methods:{
        emit(){
            this.$emit('reset')
        }
    },
    data(){
        return {
            // startupHeight: '0px',
            // opacity: 0,
            // margin: '0px',
            // opacity2: 0,
            // margin2:0,
            // opacityAll: 0

        }
    },
    mounted() {
        //
        // setTimeout(() => this.startupHeight = '650px', 50);
        // setTimeout(() => this.opacity = 1, 800);
        // setTimeout(() => this.margin = '20px', 800);
        // setTimeout(() => this.opacity2 = 1, 900);
        // setTimeout(() => this.margin2 = '20px', 900);
    }
}
</script>

<style>
    .researchContainer {
        width:100%;
        height: 100%;
        position:fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }
    .researchContent {
        position: relative;
        width:100%;
    }
    .researchBegin {
        background-color: #212121;;
        padding-top: 5%;
        width:100%;

        color: white;


    }
    .content {
        transition: .8s ease-out;
    }
    .hoofdvraag {
        transition: .4s ease-out;
    }
    .subvragen {
        transition: .4s ease-out;
    }
    .researchBegin {
        transition: 0.8s ease-out;
    }
    .researchContent {
        position: relative;
        margin: auto;
        top:50%;
    }
    .caption {
        color: #ff4c42;
    }
    h1 {
        font-size: 3.125rem;
        font-weight: 300;
    }
    .lithr {
        display: block;
        width: 100px;
        margin: auto;
        transform: rotate(90deg);
        margin-top: 42%;
        position: relative;
        background-color: #ff4c42;

        border: 1px solid #ff4c42;
    }
</style>
