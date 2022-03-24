const express = require('express')
const shortUrl = require("node-url-shortener");
const router = express.Router()

router.get('/api', (req, res) => {
    shortUrl.short("https://www.empiric.com.br", function (err, url) {
        res.status(200).send({
            success: true,
            message: url
        })
    });
})

module.exports = router