<template>
  <div>
    <div id="title">나는 어떤 전자기기일까?</div>
    <button id="btn-start">시작하기</button>
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
  }
}
</script>

<style>
#title {
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
}

.logo-img {
  margin: 50px;
}
</style>
