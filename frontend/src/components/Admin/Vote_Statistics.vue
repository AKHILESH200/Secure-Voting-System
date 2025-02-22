<template>
    <HeaderAll></HeaderAll>
    <div class="stat">
    <h1>Voting Control</h1>
    <div class="opt"><h1>Current Voting Status: </h1>
    <label>
        <button @click="changeStat" variant="outline-danger">{{ printStat }}</button>
        </label>
        </div>
    <h2>Candidate List</h2>
    <CandidateList></CandidateList>
    <h2 v-if="!voteStat">Stats</h2>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderAll from './AdminHeader.vue';
import CandidateList from "./CandidatesList.vue";
export default{
    name:"VoteStats",
    data(){
        return{
            voteStat:false
        };
    },
    computed: {
    printStat() {
      return this.voteStat ? "Start" : "Stop";
    },
  },

    components:{
        HeaderAll,
        CandidateList
    },
    methods:{
        async changeStat(){
            let uri=this.$url+"voteStats/6431b50915ec9d5db3eca86b";
            await axios.patch(uri)
            this.getStat();
        },
         async getStat(){
          let uri=this.$url+"voteStats";
          const result = await axios.get(uri)
          this.voteStat= result.data[0].votestatus;
        }
    },
    mounted()
    {
    this.getStat();
    let user =localStorage.getItem("user-info");
    if (!user)
    {
        this.$router.push({name: 'GeneralLogin'})
    }
    }
}
</script>
<style>
    .stat h2 {
  text-align: left;
  margin-left: 5%;
}
.opt{
    display: inline-flex;
    align-items: center; 
}
.opt h1{
    margin-right: 10px;
}
.opt button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.opt button:hover {
  background-color: #3e8e41;
}

.opt button:active {
  background-color:#2e6737;
}
</style>