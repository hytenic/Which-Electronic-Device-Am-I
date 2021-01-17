<template>
  <div>
    <img class="sun-img-loading" src="@/assets/sun3.png" />
    <div id="loading-msg">
      두구두구두구...!!!
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {

    }
  },
  methods: {
  },
  mounted: function () {
    const route = () => { this.$router.push('/result') }
    setTimeout(route, 2000)
  }
}
</script>

<style>

#loading-msg {
  margin: 100% auto 50% auto;
  font-size: 30px;
  font-weight: bold;
}

.sun-img-loading {
  width: 70px;
  left: 40%;
  top: 30%;
  position: absolute;
}

</style>
