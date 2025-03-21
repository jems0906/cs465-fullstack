/* GET Homepage */
const index = (req, res) => {
    res.render('travel', {title: "travlr Getaways"});
};

module.exports = {
    index
};