<template>
  <div class="container-result">
    <div class="stars-result">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 18px; top: 4.3%; left: 13%; transform: rotate(0.1turn);">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 14px; top: 2%; left: 40%; transform: rotate(0.2turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 12px; top: 4.5%; left: 94%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 20px; top: 2%; left: 85%; transform: rotate(0.2turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 16px; top: 19%; left: 80%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 20px; top: 21%; left: 21%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 16px; top: 16%; left: 2%; transform: rotate(0.2turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 18px; top: 31%; left: 93%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 14px; top: 37%; left: 80%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 12px; top: 28.5%; left: 16%; transform: rotate(0.2turn)">
        <img src="@/assets/star.png" alt="star" class="star-result" style="width: 14px; top: 27%; left: 88%; transform: rotate(0.1turn)">
    </div>

    <div id="device-description">{{deviceDescription[resultDevice]}}</div>
    <div id="result-device">{{deviceKorean[resultDevice]}}</div>
    <img v-bind:src="require('@/assets/' + pictureEachDevice[resultDevice])" v-bind:alt="resultDevice" class="character_icon">
    <div class="description">
      <pre class="result-masseage">
        {{resultMsg[resultDevice]}}
      </pre>
    </div>
    <div>
      <span>
        <router-link to="/home">
          <button class="btn">
            <img src="../assets/sun-white-border.png" alt="icon share" class="btn-img">
            <div class="btn-text">다시하기</div>
          </button>
        </router-link>
      </span>
      <span>
        <button class="btn">
          <img src="../assets/moon-white-border.png" alt="icon share" class="btn-img" @click="onClickBtnShare">
          <div class="btn-text">공유하기</div>
        </button>
      </span>
    </div>
    <!-- <img class="logo-img-result" src="../assets/logo-white.png" alt="logo"> -->
    <footer>
      <img class="logo-img-result" src="../assets/logo-white.png" alt="logo">
    </footer>
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
      deviceDescription: {
        radio: '감성충만',
        phone: '핵인싸',
        ps: '저세상 텐션',
        watch: '자기관리 끝판왕',
        airpod: '트렌디',
        calculator: '철두철미',
        headphone: '4차원',
        drone: '신출귀몰',
        keyboard: '행복한 덕후',
        vacuum: 'FM',
        speaker: '척척박사'
      },
      deviceKorean: {
        radio: '라디오',
        phone: '스마트폰',
        ps: '플레이스테이션',
        watch: '스마트워치',
        airpod: '에어팟',
        calculator: '계산기',
        headphone: '헤드폰',
        drone: '드론',
        keyboard: '키보드',
        vacuum: '로봇청소기',
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
    this.result = this.$store.state.result

    this.calculateResultScore()
    this.getResultDevice()
  },
  methods: {
    onClickBtnShare () {
      let dummy = document.createElement('input')
      let text = location.href
      text = text.split('#')[0]
      console.log(text)
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
      for (let device in this.result) {
        this.result[device] = (this.result[device] / this.deviceTotalScroe[device]).toFixed(3) // 세번째 소수점 자리에서 반올림
      }
    }
  }
}
</script>

<style>
  .container-result {
    background-color: #080E41;
    min-height: 100vh;
    position: relative;
  }

  #device-description {
    color: white;
    font-size: 22px;
    font-weight: bold;
    padding-top: 30px;
  }
  #result-device{
    font-size: 32px;
    padding-bottom: 30px;
    color: white;
    font-weight: bold;
  }

  .description {
    width: 85%;
    margin: 30px;
    font-size: 14px;
    line-height: 1.3;
    color: white;
  }

  .character_icon {
    width:150px;
  }

  .result-masseage {
    white-space: pre-line;
  }

  .btn {
    background-color: #080E41;
    border-style: none;
    width: 30%;
    margin: 10px;
  }

  .btn-text {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  .btn-img {
    width: 62px;
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
    height: 50px;
    background-color: #2e4f67;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    border-width: 0px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
  }

  .logo-img-result {
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .star-result {
    position: absolute;
    /* filter: invert(40%) sepia(18%) saturate(452%) hue-rotate(159deg) brightness(94%) contrast(92%) blur(2px); */
    filter: invert(94%) sepia(13%) saturate(1159%) hue-rotate(1deg) brightness(125%) contrast(101%);
  }

  .stars-result {
    top: 0px;
    width: 100%;
    min-height: 100vh;
    position: absolute;
    pointer-events: none;
  }

  @media(min-width:400px){
    #device-description {
      font-size: 22px;
      font-weight: bold;
      padding-top: 40px;
    }
    .description {
      width: 85%;
      margin: 30px;
      font-size: 18px;
      line-height: 1.3;
      color: white;
    }
    .btn-text {
      color: white;
      font-size: 22px;
      font-weight: bold;
    }
    .btn-img {
      width: 70px;
    }
}
</style>
