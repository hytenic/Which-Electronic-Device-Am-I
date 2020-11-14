<template>
  <div>
    <div id="textBox">
      <div id="textMessage">발신: 1004 - 1004 오전 6:00
        <div>그동안 수고한 당신 오늘 하루 쉬세요 :)</div>
      </div>
    </div>
    <div style="width: 80%; margin: 0 auto">
      별안간 꿀같은 휴식이 주어졌다. 오늘 하루 어떻게 보낼까?
    </div>
    <router-link to="/question">
      <button id="btn-start">시작하기</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {

    }
  }
}
</script>

<style>
#textBox {
  border:1px solid #2e4f67;
  width: 80%;
  height: 150px;
  margin: 0 auto;
}

#textMessage {
  margin-top: 10px;
  font-size: 15px;
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
</style>
