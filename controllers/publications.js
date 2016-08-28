/**
 * GET /
 * Publications page.
 */
exports.getPublications = function(req, res)  {
    res.render('publications', {
        title: 'Publications'
    });
};
