/**
 * GET featured
 * Browse page.
 */
exports.getFeatured = (req, res) => {
    res.render('featured', {
        title: 'Featured'
    });
};
