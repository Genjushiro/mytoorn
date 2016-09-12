var mysql = require("mysql");
var bcrypt = require("bcrypt-nodejs");


module.exports = function(router, connection) {

    router.route("/signup")
        // get all clients
        .post(function(req, res) {

            var nom = req.body.nom;
            var prenom = req.body.prenom;
            var email = req.body.email;
            var login = req.body.login;
            var password = req.body.password;
            var age = req.body.age;
            var adress = req.body.adresse;


            if (!nom || !prenom || !email || !login || !password || !age || !adress) {
                return res.status(500).send({
                    "success": false,
                    "error": "element manquant"
                });
            }

            password = bcrypt.hashSync(password);


            var request = "SELECT * FROM ?? WHERE ?? = ?";
            var table = ['Utilisateur', 'email', email];
            request = mysql.format(request, table);
            connection.query(request, function(err, data) {
                if (err) {
                    res.status(500).send({
                        "success": false,
                        "error": err
                    });
                } else {

                    if (data.length == 0) {
                        var request = "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)";
                        var table = ['Utilisateur','nom', 'prenom', 'email', 'pseudo', 'mdp', 'age', 'adresse', nom, prenom, email, login, password, age, adress ];
                        request = mysql.format(request, table);
                        connection.query(request, function(err, data) {
                            if (err) {
                                res.status(500).send({
                                    "success": false,
                                    "error": err
                                });
                            }
                            else {
                                res.status(200).send({
                                    "success": true,
                                    "data": data
                                });
                            }
                        });
                    } else {
                        res.status(401).send({
                            "success": false,
                            "error": "User exists"
                        });
                    }
                }
            });

        });


    router.route("/signin")

        .post(function(req, res) {

            var login = req.body.login;
            var password = req.body.password;

            if (!login || !password) {
                return res.status(500).send({
                    "success": false,
                    "error": "login and password are required"
                });
            }


            var request = "SELECT * FROM ?? WHERE ?? = ?";
            var table = ['Utilisateur', 'pseudo', login ];
            request = mysql.format(request, table);
            console.log(request);
            connection.query(request, function(err, data) {
                if (err) {
                    res.status(500).send({
                        "success": false,
                        "error": err
                    });
                } else {

                    if (data.length == 1) {

                        if(bcrypt.compareSync(password, data[0].mdp)) {
                            res.status(200).send({
                                "success": true,
                                "data": data
                            });
                        } else {
                            res.status(400).send({
                                "success": false,
                                "error": "Password is incorrect"
                            });
                        }

                    } else {
                        res.status(401).send({
                            "success": false,
                            "error": "User inexists"
                        });
                    }

                }
            });
        });
}