<template>
  <HeaderAll></HeaderAll>
  <h1>Vankkam {{ user }} </h1>
  <h2>Welcome to the Secure Voting Portal using Blockchain</h2>
  <div class="home-screen">
    <div class="button-container">
      <button class="voting-buttona" @click="this.$router.push({name:'UserVoting'});" >
        <span class="button-text">Go to Voting</span>
      </button>
    </div>
    <div class="serv">
      <h2>Other Services</h2>
      <img src="../../assets/other_serv.png">
    </div>
  </div>
</template>

<script>
import HeaderAll from './HeaderAll.vue';
export default {
  name: "HomeScreen",
  data() {
    return {
      user: '',
    }
  },
  components: {
    HeaderAll
  },
  mounted(){
    let logged=JSON.parse(localStorage.getItem("user-info"));
    if (!logged)
    {
      this.$router.push({name:"GeneralLogin"});
    }
  this.user=logged.name;
  }
}
</script>
<style>
.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.serv h2 {
  margin-top: 2%;
  color: rgb(9, 148, 49);
}

.serv img {
  width: 100%;
  height: 85vh;
  object-fit: cover;
}

.button-container {
  width: 100%;
}

.voting-buttona {
  display: inline-block;
  width: 100%;
  height: 200px;
  background: url('../../assets/button_bg.png') no-repeat center fixed;
  background-size: cover;
  transition: all 0.3s ease-in-out;
}

.voting-buttona:hover {
  transform: scale(1.1);
  filter: brightness(90%);
}

.button-text {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 30px;
}

.button-text:hover {
  color: #000;
  background-color: #fff;
}
</style>