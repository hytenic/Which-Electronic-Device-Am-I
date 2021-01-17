<template>
  <div>
    <div id="result-device">당신은 {{deviceKorean[resultDevice]}}!</div>
    <img v-bind:src="require('@/assets/' + pictureEachDevice[resultDevice])" v-bind:alt="resultDevice" class="character_icon">
    <div class="description">
      <pre class="result-masseage">
        {{resultMsg[resultDevice]}}
      </pre>
      <!-- 느림의 미학을 아는 당신! 일상의 소소한 즐거움을 알아차릴 수 있는 분이군요.
      <br> 어쩌구 저쩌구 그러합니다. -->
    </div>
    <div>
      <button class="btn-share" @click="onClickBtnShare">
        <img src="../assets/icon_share.png" alt="icon share">
        공유하기
      </button>
    </div>
    <div>
      <router-link to="/home">
        <button class="btn-retry">
          <div class="btn-text">
            또 다른 결과가 궁금하다면?
          </div>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import results from '../data/Result.json'
export default {
  name: 'Result',
  data () {
    return {
      result: {},
      resultDevice: '',
      resultMsg: results,
      deviceKorean: {
        radio: '라디오',
        phone: '스마트폰',
        ps: '플레이스테이션',
        watch: '스마트 워치',
        airpod: '에어팟',
        calculator: '계산기',
        headphone: '헤드폰',
        drone: '드론',
        keyboard: '키보드',
        vacuum: '청소기',
        speaker: 'AI스피커'
      },
      deviceTotalScroe: {
        radio: 14,
        phone: 17,
        ps: 13,
        watch: 16,
        airpod: 16,
        calculator: 17,
        headphone: 16,
        drone: 13,
        keyboard: 17,
        vacuum: 15,
        speaker: 13
      },
      pictureEachDevice: {
        radio: 'radio.png',
        phone: 'smartphone.png',
        ps: 'playstation.png',
        watch: 'smartwatch.png',
        airpod: 'airpods.png',
        calculator: 'calculator.png',
        headphone: 'headphone.png',
        drone: 'drone.png',
        keyboard: 'keyboard.png',
        vacuum: 'robot.png',
        speaker: 'ai.png'
      }
    }
  },
  created () {
    console.log(this.$store.state.result)
    this.result = this.$store.state.result

    this.calculateResultScore()
    this.getResultDevice()
    console.log(this.resultDevice)
  },
  methods: {
    onClickBtnShare () {
      let dummy = document.createElement('input')
      let text = location.href
      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      alert('클립보드로 URL이 복사되었습니다.')
    },
    getResultDevice () {
      for (let key in this.result) {
        if (this.resultDevice === '') {
          this.resultDevice = key
        } else {
          if (this.result[this.resultDevice] < this.result[key]) {
            this.resultDevice = key
          }
        }
      }
    },
    calculateResultScore () {
      console.log(this.result)
      for (let device in this.result) {
        this.result[device] = (this.result[device] / this.deviceTotalScroe[device]).toFixed(3) // 세번째 소수점 자리에서 반올림
      }
      console.log(this.result)
    }
  }
}
</script>

<style>
  .description {
    width: 85%;
    margin: 30px;
    font-size: 16px;
    line-height: 1.3;
  }
  .character_icon {
    width:150px;
  }

  .result-masseage {
    white-space: pre-line;
  }

  .btn-share {
    width: 40%;
    height: 43px;
    background-color: white;
    font-size: 24px;
    border-radius: 10px;
    border-width: 1px;
    border-color: black;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
  }
  .btn-retry {
    width: 80%;
    height: 90px;
    background-color: #2e4f67;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border-radius: 20px;
    border-width: 0px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
  }
  .btn-text {
    margin-left: 20%;
    margin-right: 20%;
  }
  #result-device{
    font-size: 28px;
    margin: 30px auto;
  }
</style>
