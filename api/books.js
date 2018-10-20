const express = require('express')
const axios = require('axios')

const router = express.Router()

const BN_URL = "http://data.bn.org.pl/api/bibs.json";

router.get('/', (req, res) => {
  const isbn = req.query.isbn
  axios.get(BN_URL, {
    params: {
      isbnIssn: isbn
    }
  })
    .then(Response => {
      res.json(Response.data)
    })
    .catch(Error => {
      console.log(Error)
    })
})

module.exports = router;
