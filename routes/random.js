const Router = require("express")
const helpers = require("../helpers/getRandom")

const { fork } = require("child_process")

const router = new Router()

router.get("/", (req, res) =>{
  const numbers = 10
  let getNum = 0
  if(numbers){
		getNum = helpers.pushNumbers(numbers)
		res.send({claves: getNum})
	}
}) 



module.exports = router