/**
 * GET /browse
 * Browse page.
 */
exports.getBrowse = (req, res) => {
    res.render('browse/index', {
        title: 'Browse'
    });
};
