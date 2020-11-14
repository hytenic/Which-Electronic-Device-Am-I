<template>
  <div>
    <div id="textBox">
      <div id="textMessage">발신: 1004 - 1004 오전 6:00
        <div>그동안 수고한 당신 오늘 하루 쉬세요 :)</div>
      </div>
    </div>
    <div style="width: 50%">
      별안간 꿀같은 휴식이 주어졌다. 오늘 하루 어떻게 보낼까?
    </div>
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
  width: 50%;
  height: 150px;
}

#textMessage {
  margin-top: 10px;
  font-size: 15px;
}
</style>
