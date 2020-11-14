<template>
  <div>
    <h2>당신은 라디오!</h2>
    <img src="../assets/radio_character.png" alt="radio character" class="character_icon">
    <div class="description">
      느림의 미학을 아는 당신! 일상의 소소한 즐거움을 알아차릴 수 있는 분이군요.
      <br> 어쩌구 저쩌구 그러합니다.
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
export default {
  name: 'Result',
  data () {
    return {

    }
  },
  methods: {
    onClickBtnShare () {
      alert('YAYYYYYY')
    }
  }
}
</script>

<style>
  .description {
    width: 85%;
    margin: 30px;
    font-size: 24px;
    line-height: 1.3;
  }
  .character_icon {
    width:150px;
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
</style>
