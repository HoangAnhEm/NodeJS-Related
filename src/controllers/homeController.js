
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('aboutPage.ejs');
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}