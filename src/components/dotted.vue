<template>
    <div class="text" style="position: relative;   max-height: 200px;" ref="kringel1">
        <img :src="kringel" class="kringel" >
        <div class="fadeKringel" :style="{width: width}"></div>

    </div>
</template>

<script>
    import dotted from "../assets/dotted_line.svg"
    export default {
        props: ['scrollPos'],
        name: "Kringel",
        data() {
            return {
                width: '100%',
                kringel: dotted
            }
        // }, watch: {
        //     scrollPos() {
        //         var lit = this.$refs.kringel1;
        //
        //         if (this.scrollPos + 850 > lit.offsetHeight + lit.offsetTop) {
        //
        //             this.width = '0%'
        //         }
        //     }
        // }
    },   mounted() {
        this.$store.watch(this.$store.getters.getscrollPos, scrollPos => {

            var lit = this.$refs.kringel1;

                    if (scrollPos + 850 > lit.offsetHeight + lit.offsetTop) {

                        this.width = '0%'
                    }
        })
    }, destroyed(){
            console.log('WOWWWWMAN');
        }
    }
</script>

<style scoped>
    .kringel {
        max-width: 65%;

        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5%;
        padding-bottom: 10%;
    }
    .fadeKringel {
        position:absolute;
        top:0; bottom:0; right:0;
        background:white;
        transition: 1s;
        /*-webkit-animation: showHide 4s alternate infinite; !* Safari and Chrome *!*/
        /*animation: showHide 4s alternate infinite;*/
    }
</style>
