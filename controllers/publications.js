/**
 * GET /
 * Publications page.
 */
exports.index = (req, res) => {
    res.render('publications', {
        title: 'Publications'
    });
};
