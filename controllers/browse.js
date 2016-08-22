/**
 * GET /browse
 * Browse page.
 */
exports.getBrowse = (req, res) => {
    res.render('browse/index', {
        title: 'Browse'
    });
};

exports.getTech = (req, res) => {
  res.render('browse/tech/index', {
    title: 'Tech'
  });
};
