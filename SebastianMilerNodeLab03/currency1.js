let CZK = 5.73;
let USD = 0.27;
let EUR = 0.24;
let GBP = 0.20;
let RUB = 22.38;

function roundFourDecimals(value) {
    return Math.round(value * 10000) / 10000;
}

exports.PLNToCZK = function(PLNAmount) {
    return roundFourDecimals(PLNAmount * CZK);
}
exports.PLNToUSD = function(PLNAmount) {
    return roundFourDecimals(PLNAmount * USD);
}
exports.PLNToEUR = function(PLNAmount) {
    return roundFourDecimals(PLNAmount * EUR);
}
exports.PLNToGBP = function(PLNAmount) {
    return roundFourDecimals(PLNAmount * GBP);
}
exports.PLNToRUB = function(PLNAmount) {
    return roundFourDecimals(PLNAmount * RUB);
}
exports.CZKToPLN = function(CZKAmount) {
    return roundFourDecimals(CZKAmount / CZK);
}
exports.USDToPLN = function(USDAmount) {
    return roundFourDecimals(USDAmount / USD);
}
exports.EURToPLN = function(EURAmount) {
    return roundFourDecimals(EURAmount / EUR);
}
exports.GBPToPLN = function(GBPAmount) {
    return roundFourDecimals(GBPAmount / GBP);
}
exports.RUBToPLN = function(RUBAmount) {
    return roundFourDecimals(RUBAmount / RUB);
}