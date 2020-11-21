<template>
  <div>
    <div id="title">나는 어떤 전자기기일까?</div>
    <router-link to="/intro">
        <button id="btn-start" @click="onClickBtnStart">시작하기</button>
    </router-link>
    <footer>
    <img class="logo-img" src="../assets/logo.png" alt="logo">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    onClickBtnStart: () => {
      console.log('hello')
    }
  }
}
</script>

<style>
#title {
  padding-top: 100px;
  font-size: 25px;
  margin-bottom: 500px;
  font-weight: bold;
}

#btn-start {
  width: 65%;
  height: 70px;
  border-radius: 20px;
  border: 0px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  background-color: #2e4f67;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
}

.logo-img {
  margin: 50px;
}
</style>
