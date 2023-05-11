const AI_Model = require("../models/AI_MODEL");

const AI_ctrl = {
    Get_AI: async (req, res) => {
        try {
            console.log(req.query)
            if (req.query['Rank']['gte'] == '' && req.query['Score']['lte'] != '') {
                delete req.query['Rank'];
                let queryStr = JSON.stringify(req.query);
                queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
                console.log(JSON.parse(queryStr));
                const AI_Data = await AI_Model.find(JSON.parse(queryStr)).sort({ "Score": -1 });
                res.json(AI_Data);
            } else if (req.query['Rank']['gte'] != '' && req.query['Score']['lte'] == '') {
                delete req.query['Score'];
                let queryStr = JSON.stringify(req.query);
                queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
                console.log(JSON.parse(queryStr));
                const AI_Data = await AI_Model.find(JSON.parse(queryStr)).sort({ "Rank": 1 });
                res.json(AI_Data);
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = AI_ctrl;


//To find greater than
// http://localhost:8000/AI/Info?Rank[$lte]=257

// resourse
// https://www.youtube.com/watch?v=efoUO5xZ2W4