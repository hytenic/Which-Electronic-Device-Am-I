<template>
  <div class="container-loading">
    <img class="sun-img-loading" src="@/assets/moon.png" />
    <div class="stars-loading">
      <img src="@/assets/star.png" alt="star" class="star-loading" style="width: 14px; top: 10vh; left: 21vw; transform: rotate(0.1turn);">
      <img src="@/assets/star.png" alt="star" class="star-loading" style="width: 14px; top: 5.5vh; left: 75vw; transform: rotate(0.1turn)">
      <img src="@/assets/star.png" alt="star" class="star-loading" style="width: 20px; top: 11vh; left: 56vw; transform: rotate(0.2turn)">
      <img src="@/assets/star.png" alt="star" class="star-loading" style="width: 20px; top: 3.5vh; left: 32vw; transform: rotate(0.1turn)">
    </div>
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
.container-loading {
  background-color: #080E41;
  height: 100vh;
  position: relative;
}

#loading-msg {
  top: 50%;
  font-size: 30px;
  font-weight: bold;
  color: white;
  position: relative;
}

.sun-img-loading {
  width: 70px;
  left: 40%;
  top: 30%;
  position: absolute;
}

.star-loading {
  position: absolute;
  filter: invert(94%) sepia(13%) saturate(1159%) hue-rotate(1deg) brightness(125%) contrast(101%);
}

.stars-loading {
  top: 25%;
  position: absolute;
}

</style>
