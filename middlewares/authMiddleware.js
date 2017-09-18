module.exports = {
  isAdm: (req, res, next) => {
    if(req.user && req.user.role == 'Admin') {
      next();
    } else {
      res.redirect('/');
    }
  }
};
