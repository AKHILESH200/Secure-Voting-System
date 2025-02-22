const express = require('express')

const router  = express.Router()


const Voter = require('../models/voteStat')
//Getting all

router.get('/',async (req,res)=>{
    try{
        const voters = await Voter.find()
        res.json(voters)
    }catch (err){
        res.status(500).json({message:err.message})
    }

})

//updating one
router.patch('/:id',getVoter,async (req,res)=>{
        
        console.log(res.voter.votestatus)
        if(res.voter.votestatus == true)
        {
            console.log("if true")
            res.voter.votestatus = false
        }else{
            console.log("not true")
            res.voter.votestatus = true
        }
    try {
        const updateVoteStat = await res.voter.save()
        res.json(updateVoteStat)

    }catch(err){
        res.status(400).json({message:err.message})
    }

    
})
async function getVoter (req,res,next){
    let voter
    try{
        voter = await Voter.findById(req.params.id)
        if (voter == null){
            return res.status(404).json({message:'Cannot find voter'})
        }
    }catch (err){
        return res.status(500).json({message:"user not found"})
    }
    res.voter = voter
    next()
}
module.exports= router