<template>
  <div class="about">
    <p class="main">current team:{{ teamName }}</p>
    <button @click="count">counter</button>
    <p class="main">{{ $store.state.sum }}</p>
    <p>Last team name clicked:{{ teamName }}</p>
    <router-link to ="/">戻る</router-link>
  </div>
</template>


<script>
export default {
  props:['teamName'],
  methods:{
    count(){
      this.$store.commit('countUP');
    }
  }
};
</script>

<style scoped>
  .main{
    font-weight: bold;
    font-size:20px;
  }
</style>