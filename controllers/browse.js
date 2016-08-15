/**
 * GET /browse
 * Browse page.
 */
exports.getApi = (req, res) => {
    res.render('browse/index', {
        title: 'Browse'
    });
};
