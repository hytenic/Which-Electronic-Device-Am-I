<template>
  <div id="intro-container" @click="checked = !checked">
    <div class="img-status">
      <img src="../assets/status_bar.png" alt="status bar" id="status-bar" style="">
    </div>
    <Clock id="clock"/>
    <img  class="message" src="../assets/message_light_new.png" alt="text message" v-show=!checked>
    <img  class="message" src="../assets/message_dark_new.png" alt="text message" v-show=checked>
    <!-- <transition name="fade"> -->
      <div id="modal" v-show=checked>
        <div id="notice">
          !!! 갑자기 생긴 꿀같은 휴식
          <br> 오늘 하루 어떻게 보내볼까?
          <router-link to="/question">
            <button id="btn-start-questions">휴식 START!</button>
          </router-link>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import Clock from '../components/Clock'
export default {
  name: 'Intro',
  data () {
    return {
      checked: false
    }
  },
  components: {
    Clock
  }
}
</script>

<style>
#intro-container {
  background-color: #585858;
  min-height: 100vh;
}
.img-status {
  text-align: right;
}
#status-bar {
  margin-top: 4px;
  margin-right: 4px;
  width: 25%;
}
#clock {
  margin-top: 20%;
  width: 100%;
  color: #000000;
}
.message {
  width: 96%;
  margin-top: 15%;
}
#modal {
  width: 94%;
  height: 205px;
  background-color: white;
  border-radius: 12px;
  margin: 15% auto;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#notice {
  font-size: 20px;
  color: #000000;
}
#btn-start-questions {
  margin-top: 10%;
  border: 0px;
  color: #3DADFF;
  font-size: 22px;
  font-weight: bold;
  background-color: transparent;
}
</style>
