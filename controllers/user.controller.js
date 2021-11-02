
const getUsers = ( req, res ) => {
    const { q, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'Metodo get',
        q,
        page,
        limit
    });
}

const postUser = ( req, res ) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Metodo post',
        nombre,
        edad
    });
}

const deleteUser = ( req, res ) => {
    res.json({
        msg: 'Metodo delete'
    });
}

const putUser = ( req, res ) => {
    const { id } = req.params;

    res.json({
        msg: 'Metodo put',
        id
    });
}

const patchUser = ( req, res ) => {
    res.json({
        msg: 'Metodo patch'
    });
}

module.exports = {
    getUsers,
    postUser,
    deleteUser,
    putUser,
    patchUser
}