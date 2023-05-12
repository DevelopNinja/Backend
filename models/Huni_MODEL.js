const mongoose = require("mongoose");

const OthuSchema = new mongoose.Schema({

    College_Name: {
        type: String,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    Percentage_GOPENS: {
        type: Number,
        required: true
    },
    Rank_GOPENS: {
        type: Number,
        required: true
    },
    Percentage_GSCS: {
        type: Number,
        required: true
    },
    Rank_GSCS: {
        type: Number,
        required: true
    },
    Percentage_GSTS: {
        type: Number,
        required: true
    },
    Rank_GSTS: {
        type: Number,
        required: true
    },
    Percentage_GVJS: {
        type: Number,
        required: true
    },
    Rank_GVJS: {
        type: Number,
        required: true
    },
    Percentage_GNT1S: {
        type: Number,
        required: true
    },
    Rank_GNT1S: {
        type: Number,
        required: true
    },
    Percentage_GNT2S: {
        type: Number,
        required: true
    },
    Rank_GNT2S: {
        type: Number,
        required: true
    },
    Percentage_GNT3S: {
        type: Number,
        required: true
    },
    Rank_GNT3S: {
        type: Number,
        required: true
    },
    Percentage_GOBCS: {
        type: Number,
        required: true
    },
    Rank_GOBCS: {
        type: Number,
        required: true
    },
    Percentage_LOPENS: {
        type: Number,
        required: true
    },
    Rank_LOPENS: {
        type: Number,
        required: true
    },
    Percentage_LSCS: {
        type: Number,
        required: true
    },
    Rank_LSCS: {
        type: Number,
        required: true
    },
    Percentage_LSTS: {
        type: Number,
        required: true
    },
    Rank_LSTS: {
        type: Number,
        required: true
    },
    Percentage_LVJS: {
        type: Number,
        required: true
    },
    Rank_LVJS: {
        type: Number,
        required: true
    },
    Percentage_LNT2S: {
        type: Number,
        required: true
    },
    Rank_LNT2S: {
        type: Number,
        required: true
    },
    Percentage_LOBCS: {
        type: Number,
        required: true
    },
    Rank_LOBCS: {
        type: Number,
        required: true
    },
    Percentage_DEFOPENS: {
        type: Number,
        required: true
    },
    Rank_DEFOPENS: {
        type: Number,
        required: true
    },
    Percentage_TFWS: {
        type: Number,
        required: true
    },
    Rank_TFWS: {
        type: Number,
        required: true
    },
    Percentage_DEFROBCS: {
        type: Number,
        required: true
    },
    Rank_DEFROBCS: {
        type: Number,
        required: true
    },
    Percentage_EWS: {
        type: Number,
        required: true
    },
    Rank_EWS: {
        type: Number,
        required: true
    },
    Percentage_LNT1S: {
        type: Number,
        required: true
    },
    Rank_LNT1S: {
        type: Number,
        required: true
    },
    Percentage_PWDOPENS: {
        type: Number,
        required: true
    },
    Rank_PWDOPENS: {
        type: Number,
        required: true
    },
    Percentage_PWDRSCS: {
        type: Number,
        required: true
    },
    Rank_PWDRSCS: {
        type: Number,
        required: true
    },
    Percentage_LNT3S: {
        type: Number,
        required: true
    },
    Rank_LNT3S: {
        type: Number,
        required: true
    },
    Percentage_DEFRSCS: {
        type: Number,
        required: true
    },
    Rank_DEFRSCS: {
        type: Number,
        required: true
    },
    Percentage_GOPENH: {
        type: Number,
        required: true
    },
    Rank_GOPENH: {
        type: Number,
        required: true
    },
    Percentage_GSCH: {
        type: Number,
        required: true
    },
    Rank_GSCH: {
        type: Number,
        required: true
    },
    Percentage_GSTH: {
        type: Number,
        required: true
    },
    Rank_GSTH: {
        type: Number,
        required: true
    },
    Percentage_GOBCH: {
        type: Number,
        required: true
    },
    Rank_GOBCH: {
        type: Number,
        required: true
    },
    Percentage_LOPENH: {
        type: Number,
        required: true
    },
    Rank_LOPENH: {
        type: Number,
        required: true
    },
    Percentage_LSCH: {
        type: Number,
        required: true
    },
    Rank_LSCH: {
        type: Number,
        required: true
    },
    Percentage_LOBCH: {
        type: Number,
        required: true
    },
    Rank_LOBCH: {
        type: Number,
        required: true
    },
    Percentage_GOPENO: {
        type: Number,
        required: true
    },
    Rank_GOPENO: {
        type: Number,
        required: true
    },
    Percentage_GOBCO: {
        type: Number,
        required: true
    },
    Rank_GOBCO: {
        type: Number,
        required: true
    },
    Percentage_GVJH: {
        type: Number,
        required: true
    },
    Rank_GVJH: {
        type: Number,
        required: true
    },
    Percentage_GNT1H: {
        type: Number,
        required: true
    },
    Rank_GNT1H: {
        type: Number,
        required: true
    },
    Percentage_GNT2H: {
        type: Number,
        required: true
    },
    Rank_GNT2H: {
        type: Number,
        required: true
    },
    Percentage_GNT3H: {
        type: Number,
        required: true
    },
    Rank_GNT3H: {
        type: Number,
        required: true
    },
    Percentage_LSTH: {
        type: Number,
        required: true
    },
    Rank_LSTH: {
        type: Number,
        required: true
    },
    Percentage_LNT2H: {
        type: Number,
        required: true
    },
    Rank_LNT2H: {
        type: Number,
        required: true
    },
    Percentage_GSCO: {
        type: Number,
        required: true
    },
    Rank_GSCO: {
        type: Number,
        required: true
    },
    Percentage_GSTO: {
        type: Number,
        required: true
    },
    Rank_GSTO: {
        type: Number,
        required: true
    },
    Percentage_GVJO: {
        type: Number,
        required: true
    },
    Rank_GVJO: {
        type: Number,
        required: true
    },
    Percentage_GNT2O: {
        type: Number,
        required: true
    },
    Rank_GNT2O: {
        type: Number,
        required: true
    },
    Percentage_LOPENO: {
        type: Number,
        required: true
    },
    Rank_LOPENO: {
        type: Number,
        required: true
    },
    Percentage_LSCO: {
        type: Number,
        required: true
    },
    Rank_LSCO: {
        type: Number,
        required: true
    },
    Percentage_LOBCO: {
        type: Number,
        required: true
    },
    Rank_LOBCO: {
        type: Number,
        required: true
    },
    Percentage_LNT1H: {
        type: Number,
        required: true
    },
    Rank_LNT1H: {
        type: Number,
        required: true
    },
    Percentage_PWDOPENH: {
        type: Number,
        required: true
    },
    Rank_PWDOPENH: {
        type: Number,
        required: true
    },
    Percentage_PWDROBCH: {
        type: Number,
        required: true
    },
    Rank_PWDROBCH: {
        type: Number,
        required: true
    },
    Percentage_LNT1O: {
        type: Number,
        required: true
    },
    Rank_LNT1O: {
        type: Number,
        required: true
    },
    Percentage_LVJH: {
        type: Number,
        required: true
    },
    Rank_LVJH: {
        type: Number,
        required: true
    },
    Percentage_GNT1O: {
        type: Number,
        required: true
    },
    Rank_GNT1O: {
        type: Number,
        required: true
    },
    Percentage_MI: {
        type: Number,
        required: true
    },
    Rank_MI: {
        type: Number,
        required: true
    },
    Percentage_PWDROBCS: {
        type: Number,
        required: true
    },
    Rank_PWDROBCS: {
        type: Number,
        required: true
    },
    Percentage_DEFOBCS: {
        type: Number,
        required: true
    },
    Rank_DEFOBCS: {
        type: Number,
        required: true
    },
    Percentage_DEFRNT1S: {
        type: Number,
        required: true
    },
    Rank_DEFRNT1S: {
        type: Number,
        required: true
    },
    Percentage_LNT3H: {
        type: Number,
        required: true
    },
    Rank_LNT3H: {
        type: Number,
        required: true
    },
    Percentage_LNT2O: {
        type: Number,
        required: true
    },
    Rank_LNT2O: {
        type: Number,
        required: true
    },
    Percentage_GNT3O: {
        type: Number,
        required: true
    },
    Rank_GNT3O: {
        type: Number,
        required: true
    },
    Percentage_DEFRNT2S: {
        type: Number,
        required: true
    },
    Rank_DEFRNT2S: {
        type: Number,
        required: true
    },
    Percentage_LSTO: {
        type: Number,
        required: true
    },
    Rank_LSTO: {
        type: Number,
        required: true
    },
    Percentage_LVJO: {
        type: Number,
        required: true
    },
    Rank_LVJO: {
        type: Number,
        required: true
    },
    Percentage_PWDRSCH: {
        type: Number,
        required: true
    },
    Rank_PWDRSCH: {
        type: Number,
        required: true
    },
    Percentage_PWDRVJS: {
        type: Number,
        required: true
    },
    Rank_PWDRVJS: {
        type: Number,
        required: true
    },
    Percentage_LNT3O: {
        type: Number,
        required: true
    },
    Rank_LNT3O: {
        type: Number,
        required: true
    },
    Percentage_PWDOBCS: {
        type: Number,
        required: true
    },
    Rank_PWDOBCS: {
        type: Number,
        required: true
    },
    Percentage_ORPHAN: {
        type: Number,
        required: true
    },
    Rank_ORPHAN: {
        type: Number,
        required: true
    },
    Percentage_PWDRNT1S: {
        type: Number,
        required: true
    },
    Rank_PWDRNT1S: {
        type: Number,
        required: true
    },
    Percentage_DEFRNT3S: {
        type: Number,
        required: true
    },
    Rank_DEFRNT3S: {
        type: Number,
        required: true
    },
    Percentage_DEFRVJS: {
        type: Number,
        required: true
    },
    Rank_DEFRVJS: {
        type: Number,
        required: true
    },
    Percentage_DEFSCS: {
        type: Number,
        required: true
    },
    Rank_DEFSCS: {
        type: Number,
        required: true
    },
    Percentage_PWDOBCH: {
        type: Number,
        required: true
    },
    Rank_PWDOBCH: {
        type: Number,
        required: true
    },
    Percentage_PWDRNT2H: {
        type: Number,
        required: true
    },
    City: {
        type: String,
        required: true,
    },
    Round: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('huni', OthuSchema);