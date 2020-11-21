<template>
  <div>
    <img src="../assets/status_bar.png" alt="status bar" id="status-bar">
    <Clock id="clock"/>
    <img  id="message" src="../assets/message_light_new.png" alt="text message">

    <div id="modal" v-show=checked>
      <div id="notice">
        !!! 갑자기 생긴 꿀같은 휴식
        <br> 오늘 하루 어떻게 보내볼까?
        <router-link to="/question">
          <button id="btn-start-questions">휴식 START!</button>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import Clock from '../components/Clock'
export default {
  name: 'Intro',
  data () {
    return {
      checked: true
    }
  },
  components: {
    Clock
  },
  methods: {// on click, change img & show modal
  }
}
</script>

<style>
body {
  background-color: #787878;
}
#status-bar {
  width: 25%;
  float: right;
  margin-top: -50px; /*app style 바꿔야하지 않을까.. */
}
#clock {
  margin-top: 20%;
  width: 100%;
  color: #000000;
}
#message {
  width: 96%;
  margin-top: 15%;
}
#modal {
  width: 94%;
  height: 205px;
  background-color: white;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
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
