module.exports = {
    getIndex: (req,res) => {
        res.render('index.ejs')
    },
    getData: (req,res) => {
        res.render('data.ejs')
    },
}