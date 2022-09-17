const router = require('express').Router();
const {postClaim,getClaim,updateClaim,deleteClaim,getClaimByPolicy}  = require('../controller/claim');
router.route("/").post(postClaim);
router.route('/').get(getClaim);
router.route('/:id').get(getClaim);
router.route('/policy/:id').get(getClaimByPolicy)
router.route('/:id').put(updateClaim);
router.route("/:id").delete(deleteClaim);

module.exports = router
