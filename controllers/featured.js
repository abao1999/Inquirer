/**
 * GET featured
 * Browse page.
 */
exports.getFeatured = function(req, res)  {
    res.render('featured', {
        title: 'Featured'
    });
};
