let Currency = function(currencyAmount){
    this.currencyAmount = currencyAmount;
}

Currency.prototype.roundFourDecimals = function(value) {
    return Math.round(value * 10000) / 10000;
}

Currency.prototype.PLNToCZK = function(PLNAmount) {
    return this.roundFourDecimals(PLNAmount * this.currencyAmount);
}
Currency.prototype.PLNToUSD = function(PLNAmount) {
    return this.roundFourDecimals(PLNAmount * this.currencyAmount);
}
Currency.prototype.PLNToEUR = function(PLNAmount) {
    return this.roundFourDecimals(PLNAmount * this.currencyAmount);
}
Currency.prototype.PLNToGBP = function(PLNAmount) {
    return this.roundFourDecimals(PLNAmount * this.currencyAmount);
}
Currency.prototype.PLNToRUB = function(PLNAmount) {
    return this.roundFourDecimals(PLNAmount * this.currencyAmount);
}
Currency.prototype.CZKToPLN = function(CZKAmount) {
    return this.roundFourDecimals(CZKAmount / this.currencyAmount);
}
Currency.prototype.USDToPLN = function(USDAmount) {
    return this.roundFourDecimals(USDAmount / this.currencyAmount);
}
Currency.prototype.EURToPLN = function(EURAmount) {
    return this.roundFourDecimals(EURAmount / this.currencyAmount);
}
Currency.prototype.GBPToPLN = function(GBPAmount) {
    return this.roundFourDecimals(GBPAmount / this.currencyAmount);
}
Currency.prototype.RUBToPLN = function(RUBAmount) {
    return this.roundFourDecimals(RUBAmount / this.currencyAmount);
}

module.exports = exports = Currency;