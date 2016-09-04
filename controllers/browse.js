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

exports.getHealth = function(req, res)  {
  res.render('browse/health/index', {
    title: 'Health'
  });
};

exports.getEnvironment = function(req, res)  {
  res.render('browse/environment/index', {
    title: 'Environment'
  });
};

exports.getPhysics = function(req, res)  {
  res.render('browse/physics/index', {
    title: 'Physics'
  });
};

exports.getNature = function(req, res)  {
  res.render('browse/nature/index', {
    title: 'Nature'
  });
};

exports.getFuturism = function(req, res)  {
  res.render('browse/futurism/index', {
    title: 'Futurism'
  });
};
