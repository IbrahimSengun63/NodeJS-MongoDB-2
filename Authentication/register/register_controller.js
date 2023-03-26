const User = require('../../DB/user_db').User;
const bcrypt = require('bcrypt');




async function findUser(filter) {
    return await User.findOne(filter);
}

async function deleteUser(filter) {
    return await User.findByIdAndRemove(filter);
}

async function createUser(filter) {
    const user = new User(filter);
    await user.save();
    return user;
}





const register = async (req, res, next) => {

    try {
        const _user = await findUser({ email: req.body.email });

        if ((_user) || _user == null) {

            if (_user) {
                deleteUser({ _id: _user._id })
            }

            const newUser = createUser({
                email: req.body.email,
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, 10)
            });


            res.redirect('/login');
        }
    } catch (error) {
        throw error;
    }

};













const showRegisterPage = (req, res, next) => {
    res.render('register', { layout: 'layout/register_layout' });
};





module.exports = {
    showRegisterPage,
    register

}