const express = require('express')
const shortUrl = require("node-url-shortener");
const router = express.Router()

router.get('/api', (req, res) => {
    shortUrl.short(req.body,  (err, url) => {
        try {
            res.status(200).json({message: 'success', url })
        }
        catch {
            res.status(400).json({message: 'erro', err})
        }
    });
})

module.exports = router