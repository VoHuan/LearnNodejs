const UserService = require('../services/UserService');



class HomeController{
     getHomePage = async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.render('home.ejs', { users });
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error');
        }
    }
    
    
     getCreatePage = (req, res) => {
        res.render('create.ejs');
    }
    
    
     postCreateUser = async (req, res) => {
        const { name, email, city } = req.body;
        //console.log({ name, email, city })
        try {
            const result = await UserService.postCreateUser([name, email, city]);
            res.redirect('/');
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error');
        }
    
    };
}


module.exports = new HomeController();