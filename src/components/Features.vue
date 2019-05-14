<template>
    <div>
    <v-container fill-height>
    <v-layout row wrap align-center>
        <v-flex xs12 md6 >
            <div class="imgDiv" >
                <img :src="Knipsel" alt="">
            </div>
    </v-flex>
        <v-flex xs12 md6>
            <h3 class="text-xs-center" v-scroll-reveal> Filter</h3>
            <p v-scroll-reveal="{delay: 500}">
                Met het filter kan de gebruiker Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat

            </p>

        </v-flex>

    </v-layout>
    </v-container>
        <img :src="Arrow" class="arrow text-xs-center" v-scroll-reveal>
        <v-container fill-height>
            <v-layout row wrap align-center>
                       <v-flex xs12 md6>
        <h3 class="text-xs-center" v-scroll-reveal> Edit chart</h3>
                           <p v-scroll-reveal="{delay: 500}">
            Met het filter kan de gebruiker Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat

        </p>
        </v-flex>
        <v-flex xs6>
            <div class="imgDiv" >
                <img :src="Knipsel" alt="" style="float:right;">
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
                Knipsel: Knipsel
            }
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

</style>
