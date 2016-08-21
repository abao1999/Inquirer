/**
 * GET featured
 * Browse page.
 */
exports.getBrowse = (req, res) => {
    res.render('featured', {
        title: 'Featured'
    });
};
