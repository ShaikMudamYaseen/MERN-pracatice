const Claim = require('../model/claimSchema')

const postClaim = async(req, res) => {
    console.log(req.body);
    const claim = await Claim.create(req.body)
    res.status(200).json({ claim });
};
const getClaim = async(req, res) => {
    if(req.query.hospital){
        const hospital=req.query.hospital
        const date=req.query.date
        const userClaim = await Claim.find({$or:[{hospital:hospital},{date:date}]})
        res.status(200).json({ userClaim });



    }else{
        console.log(req.params.id);

        const userClaim = await Claim.findById(req.params.id);
        res.status(200).json({ userClaim });
    }
}
const updateClaim = async(req, res) => {
    const upclaim = await Claim.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({ upclaim })
}
const deleteClaim = async(req, res) => {
    await Claim.findByIdAndDelete(req.params.id)
    res.send("claim is deleted");
}
const getClaimByPolicy=async(req,res)=>{
    const userClaim = await Claim.find({$or:[{policy:req.params.id}]})
        res.status(200).json({ userClaim });
}
module.exports = {
    postClaim,
    getClaim,
    updateClaim,
    deleteClaim,
    getClaimByPolicy
}