/* GET Homepage */
const index = (req, res) => {
    res.render('index', {title: "travlr Getaways"});
};

module.exports = {
    index
}