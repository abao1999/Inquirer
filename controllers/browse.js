/**
 * GET /browse
 * Browse page.
 */
exports.getBrowse = function(req, res)  {
    res.render('browse/index', {
        title: 'Browse'
    });
};

exports.getTech = function(req, res)  {
  res.render('browse/tech/index', {
    title: 'Tech'
  });
};
