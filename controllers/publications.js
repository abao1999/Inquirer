/**
 * GET /
 * Publications page.
 */
exports.getPublications = (req, res) => {
    res.render('publications', {
        title: 'Publications'
    });
};
