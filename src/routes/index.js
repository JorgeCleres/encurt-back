const express = require('express')
const shortUrl = require("node-url-shortener");
const router = express.Router()

router.post('/api', (req, res) => {
    console.log(req.query.url);
    shortUrl.short(req.query.url, (err, url) => {
        try {
            res.status(200).json({message: 'url', url})
        }
        catch {
            res.status(400).json({message: 'erro', err})
        }
    });
})

module.exports = router