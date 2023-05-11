const Othu_Model = require("../models/Login_MODEL");

const Othu_ctrl = {
    Get_Othu: async (req, res) => {
        try {
            let Query = JSON.stringify(req.query);
            Query = Query.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
            console.log(JSON.parse(Query));
            const Data = await Othu_Model.find(JSON.parse(Query));
            console.log(Data);
            res.json(Data);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    Save_Othu: async (req, res) => {
        try {
            var data = {};
            data["password"] = req.query.password;
            data["email"] = req.query.email;
            data["rank"] = req.query.rank;
            data["rollno"] = req.query.rollno;
            delete req.query.password
            delete req.query.rank
            delete req.query.rollno
            let Query = JSON.stringify(req.query);
            const exist = await Othu_Model.findOne(JSON.parse(Query));
            console.log(exist == null);
            if (exist != null) {
                res.json({ msg: "account exists" });
            } else if (exist == null) {
                const Othu_Data = new Othu_Model(data);
                console.log(Othu_Data);
                Othu_Data.save();
                res.json({ msg: "account created" });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    Update_Othu: async (req, res) => {
        try {

            try {
                const password = { password: req.query.password }
                const user = { email: req.query.email }
                delete req.query.password
                let Query = JSON.stringify(req.query);
                Query = Query.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
                console.log(JSON.parse(Query));
                var Data = await Othu_Model.find(JSON.parse(Query));
                console.log(Data);
                if (Data == null) {
                    res.json(null)
                } else {
                    console.log("p")
                    await Othu_Model.updateOne(user, password);
                    res.json({ msg: "Password Changed" });
                }

            } catch (error) {
                return res.status(500).json({ msg: error.message });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
}

module.exports = Othu_ctrl;