let MyMathModule = function(a=0, b=0, c=0) {
    this.a = a;
    this.b = b;
    this.c = c;
};

function roundFourDecimals(value) {
    return Math.round(value * 10000) / 10000;
}

MyMathModule.prototype.volumeOfSphere = function() {
    return roundFourDecimals((4/3) * Math.PI * Math.pow(this.a, 3));
}
MyMathModule.prototype.surfaceOfSphere = function() {
    return roundFourDecimals(4 * Math.PI * Math.pow(this.a, 2));
}
MyMathModule.prototype.valueOfSpeed = function() {
    return roundFourDecimals(this.a / this.b);
}
MyMathModule.prototype.surfaceOfTrapezium = function() {
    return roundFourDecimals(((this.a + this.b) / 2) * this.c);
}
MyMathModule.prototype.volumeOfCone = function() {
    return roundFourDecimals((1/3) * Math.PI * Math.pow(this.a, 2) * this.b);
}

module.exports = exports = MyMathModule;