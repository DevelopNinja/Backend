const Huni_Model = require("../models/Huni_MODEL");

const Huni_ctrl = {
    Get_Huni: async (req, res) => {
        try {
            let cat = String(req.query.Category);
            let value = req.query;
            delete value.Category;
            var key = "Rank_".concat("", cat);
            var marks = "Percentage_".concat("", cat);
            var obj = {};
            if (value[key]['gte'] != '' && value[marks]['lte'] != '') {
                obj[key] = 1;
                obj[marks] = -1;
            } else if (value[key]['gte'] == '' && value[marks]['lte'] != '') {
                delete req.query[key];
                obj[marks] = -1;
            } else {
                delete req.query[marks];
                obj[key] = 1;
            }
            console.log(req.query);
            console.log(obj);
            let Query = JSON.stringify(req.query);
            Query = Query.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
            // console.log(JSON.parse(Query));
            const Huni_Data = await Huni_Model.find(JSON.parse(Query)).sort(obj);
            // console.log(Huni_Data);
            res.json(Huni_Data);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = Huni_ctrl;