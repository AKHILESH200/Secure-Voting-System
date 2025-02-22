<template>
    <HeaderAll></HeaderAll>
    <div class="stat">
        <h1>Place your Vote</h1>
        <div class="opt">
            <h1>Current Voting Status: </h1>
            <label>
                <h2>{{ printStat }}</h2>
            </label>
        </div>
        <div v-if="printStat == 'Opened'">
            <h3>Choose Wisely and enter the Candidate Number from the list below</h3>
            <div class="cast">
                <input type="number"  v-model.number="candiChoose" placeholder="Enter candidate number">
                <button v-on:click="voteBlock">Cast Vote using Blockchain</button>
            </div>
            <h2>Candidate List</h2>
            <CandidateList></CandidateList>

        </div>
        <h1 v-else>Come After Opening the Vote, Thank You </h1>
    </div>
</template>
<script>
import axios from 'axios';
import HeaderAll from './HeaderAll.vue';
import CandidateList from "../Admin/CandidatesList.vue";
export default {
    name: "UserVoting",
    data() {
        return {
            printStat: "Closed",
            voteStat: false,
            candiChoose:'',
            candidateSelected:''
        };
    },
    computed: {

    },

    components: {
        HeaderAll,
        CandidateList
    },
    methods: {
        async getStat() {
            let uri = this.$url + "voteStats";
            const result = await axios.get(uri)
            this.voteStat = result.data[0].votestatus;
            if (this.voteStat) this.printStat = "Opened"
            else this.printStat = "Closed"
        },
        voteBlock()
        {
            this.candidateSelected=this.candiChoose
            console.log("Selected Candidate:",this.candidateSelected);
        }
    },
    mounted() {
        this.getStat();
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'GeneralLogin' })
        }
    }
}
</script>
<style>
.stat h2 {
    text-align: left;
    margin-left: 5%;
}

.opt {
    display: inline-flex;
    align-items: center;
}

.opt h1 {
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
    background-color: #2e6737;
}


.cast input {
    width: 300px;
    height: 40px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #8B0304;
    text-align: center;
}

.cast button {
    width: 320px;
    height: 40px;
    background: #8B0304;
    color: white;
    border-color: #8B0304;
}


</style>