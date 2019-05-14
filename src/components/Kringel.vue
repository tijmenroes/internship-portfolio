<template>
    <div class="text" style="position: relative" ref="kringel1">
        <img :src="kringel" class="kringel" >
        <div class="fadeKringel" :style="{width: width}"></div>

    </div>
</template>

<script>
    import kringel from "../assets/kringel.svg"
    export default {
        props: ['scrollPos'],
        name: "Kringel",
        data() {
            return {
                width: '100%',
                kringel: kringel
            }
        }, watch: {

        },    mounted() {
            this.$store.watch(this.$store.getters.getscrollPos, scrollPos => {

                var lit = this.$refs.kringel1;

                if (scrollPos + 850 > lit.offsetHeight + lit.offsetTop) {

                    this.width = '0%'
                }
            })
        }
    }
</script>

<style scoped>
    .kringel {
        max-width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 5%;
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
