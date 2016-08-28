/**
 * GET /
 * About Us page.
 */
exports.getAbout = (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
};
