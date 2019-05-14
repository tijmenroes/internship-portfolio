<template>
  <v-app>

        <v-content>

   <router-view></router-view>

    </v-content>


    
  </v-app>
</template>

<script>



export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  },
}
</script>

<style>
    html,body {
        height: 100%;
        margin: 0;
    }
.link {
  color: rgba(0,0,0,0) !important;
  border: none !important
}
h1 {
  font-weight: 400;
  font-size: 4vw;
    letter-spacing: -0.13rem;
}
h1 span {
  font-weight: 600
}
p {
     margin: 0 0 1.5em 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.9;
}
    h3 {
        font-size: 28px;
        padding: 16px 16px;
        color: #FF4C42;
    }

</style>
