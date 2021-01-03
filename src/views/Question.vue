<template>
  <div class="container" :style="`--img-background-color: ${getBGColor}`">

    <div v-for="index in totalQuestionCount" :key="index" >
      <transition name="sunrise">
        <img class="sun-img"
        v-if="progress === index"
        :src="getSunOrMoon"
        alt="sun"
        :style="`--img-left: ${sunXPosTo}px;
                 --img-top: ${sunYPosTo}px;
                 --sunTranslateX: ${(sunXPosFrom - sunXPosTo)}px;
                 --sunTranslateY: ${(sunYPosFrom - sunYPosTo)}px;
                 --img-rotate: ${sunRotate}turn;
                 --sunRotate: ${sunRotate - 0.1}turn;`">
      </transition>
    </div>

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
    },
    sunRotate: function () {
      return this.questions[this.progress - 1].animation.sunRotate
    },
    getSunOrMoon: function () {
      return this.progress <= 5 ? require('@/assets/sun2.png') : require('@/assets/moon.png')
    },
    getBGColor: function () {
      return this.questions[this.progress - 1].style.backgroundColor
    }
  }
}
</script>

<style>
.container {
  background-color: var(--img-background-color);
  height: 100vh;
  position: relative;
  padding: 30% 0 0;
}

.title {
  color: white;
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
  transform: rotate(var(--img-rotate));
}

.sunrise-enter {
  transform: translateX(var(--sunTranslateX)) translateY(var(--sunTranslateY)) rotate(var(--sunRotate));
}

.sunrise-enter-active {
  transition: all 1s ease;
}

</style>
