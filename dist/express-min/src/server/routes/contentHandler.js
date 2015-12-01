function contentHandler() {
  this.landingPage = function(req, res, next) {
    return res.render('landing-page');
  };
}

module.exports = contentHandler;
