<template>
  <div class="container">

    <div v-for="index in totalQuestionCount" :key="index" >
      <transition name="sunrise">
        <img class="sun-img" v-if="progress === index" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + sunXPosTo + 'px; --img-top: ' + sunYPosTo + 'px;' + '--sunTranslateX: ' + (sunXPosFrom - sunXPosTo) + 'px; --sunTranslateY: ' + (sunYPosFrom - sunYPosTo) + 'px'">
      </transition>
      <!-- 여기서 progress마다 정해진 좌표를 data에 정의하고 거기서 가져온 것을 --img-left에 집어 넣어. 회전 값도 집어 넣어. 그다음에 sunrise enter할 때 다음 목표값을 넣는거지. show는 안 쓸 거니까 지우자 -->
    </div>

    <!-- <transition name="sunrise">
      <img class="sun-img" v-if="progress === 1" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 2" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 3" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 4" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 5" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 6" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 7" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition>
    <transition name="sunrise">
      <img class="sun-img" v-if="progress === 8" src="../assets/sun.png" alt="sun" :style="'--img-left: ' + (progress - 1) * 60 + 'px'">
    </transition> -->

    <div class="title">{{question}}</div>
    <div v-for="(answer, index) in answers" :key="answer._id" >
      <button class="btn-answer" @click="() => onClickBtn(index, answer)">
        {{answer}}
      </button>
    </div>
  </div>
</template>

<script>
import questions from '../data/Questions.json'
export default {
  name: 'Question',
  data () {
    return {
      show: false,
      progress: 1,
      totalQuestionCount: 8,
      questions: questions,
      result: {}
    }
  },
  methods: {
    onClickBtn (index, answer) {
      let curQuestionScores = this.questions[this.progress - 1]['score']
      for (let device in curQuestionScores[index]) {
        if (this.result[device]) {
          this.result[device] += curQuestionScores[index][device]
        } else {
          this.result[device] = curQuestionScores[index][device]
        }
      }

      if (this.progress++ >= this.totalQuestionCount) {
        this.$store.state.result = this.result
        this.$router.push('/result')
      }
    }
  },
  computed: {
    question: function () {
      return this.questions[this.progress - 1].question
    },
    answers: function () {
      return this.questions[this.progress - 1].answers
    },
    sunXPosFrom: function () {
      return this.questions[this.progress - 1].animation.sunXPosFrom
    },
    sunXPosTo: function () {
      return this.questions[this.progress - 1].animation.sunXPosTo
    },
    sunYPosFrom: function () {
      return this.questions[this.progress - 1].animation.sunYPosFrom
    },
    sunYPosTo: function () {
      return this.questions[this.progress - 1].animation.sunYPosTo
    }
  },
  watch: {
    progress: function (val) {
      this.show = true
    }
  },
  mounted: function () {
    this.show = true
  }
}
</script>

<style>
.container {
  background-color: white;
  max-height: 100vh;
  position: relative;
  padding: 30% 0 0;
}

.title {
  font-size: 25px;
  font-weight: bold;
  padding: 0 10%;
  padding-bottom: 10%;
}

.btn-answer {
  width: 80%;
  height: 70px;
  border-radius: 20px;
  border: 0px;
  color: white;
  font-size: 20px;
  font-weight: normal;
  padding: 10px;
  background-color: #2e4f67;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
}

.sun-img {
  width: 70px;
  position: absolute;
  left: var(--img-left);
  top: var(--img-top);
}

.sunrise-enter {
  transform: translateX(var(--sunTranslateX)) translateY(var(--sunTranslateY));
}
/* rotate(-0.1turn) */

.sunrise-enter-active {
  transition: all 1.5s ease;
}

</style>
