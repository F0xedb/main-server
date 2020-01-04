const manipulator = require('../factory/data');

module.exports = function(app){
    // expected url is api.pbfp.xyz/api/v1/user?hostname=name&version=version 
    app.get('/api/v1/user', async function (req, res) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let saved = await manipulator.write(req.query.hostname, req.query.version, req.query.mac, ip);
        if (saved == manipulator.SAVED)
            res.send({state:"Saved statistics"})
        if (saved == manipulator.EXISTS)
            res.send({state:"Data is already present"})
        if (saved == manipulator.ERROR)
            res.send({state:"Error uploading statistics"})
    });

    app.get('/api/v1/user/dump', async function (req, res){
        let file = await manipulator.read();
        res.send(file);
    });

    app.get('/api/v1/user/count', async function (req, res){
        let count = await manipulator.count();
        res.send(count);
    });
}
 
