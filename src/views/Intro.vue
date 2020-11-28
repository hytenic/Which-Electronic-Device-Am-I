<template>
  <div id="intro-container" @click="checked = !checked">
    <div class="img-status">
      <img src="../assets/status_bar.png" alt="status bar" id="status-bar" style="">
    </div>
    <Clock id="clock"/>
      <img  class="message" src="../assets/message_light_new.png" alt="text message" v-show=!checked>
      <img  class="message" src="../assets/message_dark_new.png" alt="text message" v-show=checked>
      <!-- <transition name="fade"> -->
      <div id="pop-up" v-show=checked>
        <div id="notice">
          갑자기 생긴 꿀같은 휴식
          <br> 오늘 하루 어떻게 보내볼까?
          <div>
            <router-link to="/question">
              <button id="btn-start-questions">휴식 START!</button>
            </router-link>
          </div>
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
  position: relative;
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
  border-radius: 12px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
}
#pop-up {
  width: 80%;
  height: 220px;
  background-color: white;
  border-radius: 12px;
  position: absolute;
  top: 40%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
}
#notice {
  font-size: 22px;
  color: #000000;
}
#btn-start-questions {
  margin-top: 10%;
  border: 0px;
  color: #2c3e50;
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  line-height: 50px;
  padding: 0 30px;
  border-radius: 25px;
}
#btn-start-questions:hover {
  background-color: #2c3e50;
  color: white;
  transition-duration: 0.5s;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
}
</style>
