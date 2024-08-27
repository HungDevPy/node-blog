class SiteController {

    // GET  /home
    index(req, res) {
        res.render('home'); 
    }
    // GET /search
    search(req,res){
        res.send("new Search")
    }
}

module.exports = new SiteController();
