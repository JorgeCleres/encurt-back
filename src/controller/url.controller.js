const shortUrl = require("node-url-shortener");

exports.returnUrl = async(req, res) => { 
    try {
        shortUrl.short(req.query.url, (err, url) => {
            res.status(200).json({message: 'url', url})
        })
    } catch {
        res.status(400).json({message: 'erro', err})
    }
}

module.exports = router