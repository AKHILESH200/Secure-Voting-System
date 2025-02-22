<template>
    <div class="container">
        <div class="row">
            <div class="card-group">
                <div class="card" v-for="(candidate,i) in candidates" :key="candidate._id">
                    <img :src="candidate.partyLogoUrl" alt="Party Logo" height="200" />
                    <div class="card-body">
                        <h4 class="card-title">{{ i+1 }}</h4>
                        <h5 class="card-title">{{ candidate.name }}</h5>
                        <p class="card-text">Aadhar Number: {{ candidate.aadharNumber }}</p>
                        <p class="card-text">Phone Number: {{ candidate.phoneNumber }}</p>
                        <p class="card-text">Party: {{ candidate.party }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CandidatesList",
    data() {
        return {
            candidates: []
        };
    },
    mounted() {
        fetch(this.$url+"createCandidates")
            .then(response => response.json())
            .then(data => {
                this.candidates = data;
            });
    },
    methods: {
        bringToFront(event) {
            const card = event.currentTarget;
            card.style.zIndex = "1";
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
        },
        resetCardStyles(event) {
            const card = event.currentTarget;
            card.style.zIndex = "0";
            card.style.transform = "scale(1)";
            card.style.boxShadow = "";
        }
    }
};
</script>
<style>
/* Bootstrap styling */
.container {
    margin-top: 50px;
    background-color: #ffffff00;
}

.card-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 200px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: transform 0.3s ease;
    background-color: rgba(200, 197, 197, 0.716);
}
.card:hover {
  /* set hover styles */
  transform: scale(1.1);
}

.card img {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border-radius: 5px 5px 0 0;
}

.card-body {
    padding: 10px;

}

.card-title {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 10px;
}
.card-title h4{
    font-size: 18px;
    font-weight: bolder;
}

.card-text {
    font-size: 10px;
    line-height: 1.5;
    font-weight: bold;
    color: black;
}
</style>

  