<template>
  <div class="container" :style="`--img-background-color: ${getBGColor}`">

    <div v-for="index in totalQuestionCount" :key="index" >
      <transition name="sunrise">
        <img class="sun-img"
        v-if="progress === index"
        :src="getSunOrMoon"
        alt="sun"
        :style="`--img-left: ${sunXPosTo}vw;
                 --img-top: ${sunYPosTo}vh;
                 --sunTranslateX: ${(sunXPosFrom - sunXPosTo)}vw;
                 --sunTranslateY: ${(sunYPosFrom - sunYPosTo)}vh;
                 --img-rotate: ${sunRotate}turn;
                 --sunRotate: ${sunRotate - 0.1}turn;`">
      </transition>
    </div>

    <div class="title" :style="`--title-color: ${getTitleColor}`">{{question}}</div>
    <div class="answers">
      <div v-for="(answer, index) in answers" :key="answer._id" >
        <button class="btn-answer" :style="`--btn-color: ${getBtnColor}`" @click="() => onClickBtn(index, answer)">{{answer}}</button>
      </div>
    </div>
    <transition name="stary-night">
      <div class="stars" v-if="progress > 7">
        <img src="@/assets/star.png" alt="star" class="star" style="width: 14px; top: 10%; left: 21%; transform: rotate(0.1turn);">
        <img src="@/assets/star.png" alt="star" class="star" style="width: 14px; top: 5.5%; left: 75%; transform: rotate(0.1turn)">
        <img src="@/assets/star.png" alt="star" class="star" style="width: 20px; top: 11%; left: 56%; transform: rotate(0.2turn)">
        <img src="@/assets/star.png" alt="star" class="star" style="width: 20px; top: 3.5%; left: 32%; transform: rotate(0.1turn)">
      </div>
    </transition>
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
        this.$router.push('/loading')
      }
      console.log(screen.width)
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
      return this.progress <= 5 ? require('@/assets/sun3.png') : require('@/assets/moon.png')
    },
    getBGColor: function () {
      return this.questions[this.progress - 1].style.backgroundColor
    },
    getTitleColor: function () {
      return this.progress <= 4 ? '#2C3E50' : '#EBEBEB'
    },
    getBtnColor: function () {
      return this.progress <= 5 ? '#FFFFFF' : '#E7E9FF'
    }
  }
}
</script>

<style>
.container {
  background-color: var(--img-background-color);
  min-height: 100vh;
  position: relative;
}

.title {
  font-size: 22px;
  font-weight: bold;
  padding: 36% 10% 10% 10%;
  color: var(--title-color);
  white-space: pre-line;
}

.answers {
  padding-bottom: 30px;
}

.btn-answer {
  width: 82%;
  height: 50px;
  border-radius: 12px;
  border: 0px;
  color: black;
  font-size: 15px;
  font-weight: normal;
  background-color: var(--btn-color);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
  margin: 10px;
  outline: none;
  white-space: pre-line;
  line-height: 1.25;
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

.star {
  position: absolute;
  filter: invert(94%) sepia(13%) saturate(1159%) hue-rotate(1deg) brightness(125%) contrast(101%);
}

.stars {
  top: 0px;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  pointer-events: none;
}

.stary-night-enter {
  transform: translateY(-100px)
}

.stary-night-enter-active {
  transition: all 1s cubic-bezier(.41,.27,.53,1.57)
}
/* fix width for tablets & laptop*/
@media screen and (min-width: 480px){
  .title {
    font-size: 30px;
    font-weight: bold;
    padding: 40% 10% 20% 10%;
    color: var(--title-color);
    white-space: pre-line;
  }
  .btn-answer {
    width: 82%;
    height: 70px;
    border-radius: 12px;
    border: 0px;
    color: black;
    font-size: 20px;
    font-weight: normal;
    background-color: var(--btn-color);
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
    margin: 10px;
    outline: none;
    white-space: pre-line;
    line-height: 1.25;
  }
}
</style>
