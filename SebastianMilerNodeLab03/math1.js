function roundFourDecimals(value) {
    return Math.round(value * 10000) / 10000;
}

exports.volumeOfSphere = function(r) {
    return roundFourDecimals((4/3) * Math.PI * Math.pow(r, 3));
}
exports.surfaceOfSphere = function(r) {
    return roundFourDecimals(4 * Math.PI * Math.pow(r, 2));
}
exports.valueOfSpeed = function(s, t) {
    return roundFourDecimals(s / t);
}
exports.surfaceOfTrapezium = function(a,b,h) {
    return roundFourDecimals(((a + b) / 2) * h);
}
exports.volumeOfCone = function(r,h) {
    return roundFourDecimals((1/3) * Math.PI * Math.pow(r, 2) * h);
}