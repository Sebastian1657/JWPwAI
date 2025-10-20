const currency1 = require('./currency1');

console.log('Currency1 Object Reference Test:');
console.log('10zł na korony czeskie: ', currency1.PLNToCZK(10));
console.log('11zł na dolary amerykańskie: ', currency1.PLNToUSD(11));
console.log('12zł na euro: ', currency1.PLNToEUR(12));
console.log('13zł na funty szterlingi: ', currency1.PLNToGBP(13));
console.log('14zł na ruble rosyjskie: ', currency1.PLNToRUB(14));
console.log('20 koron czeskich na złote: ', currency1.CZKToPLN(20));
console.log('21 dolarów amerykańskich na złote: ', currency1.USDToPLN(21));
console.log('22 euro na złote: ', currency1.EURToPLN(22));
console.log('23 funty szterlingi na złote: ', currency1.GBPToPLN(23));
console.log('24 ruble rosyjskie na złote: ', currency1.RUBToPLN(24));

console.log('\nCurrency2 Object Oriented Test:');
const Currency = require('./currency2');
const currency2CZK = new Currency(5.73); // CZK
const currency2USD = new Currency(0.27); // USD
const currency2EUR = new Currency(0.24); // EUR
const currency2GBP = new Currency(0.20); // GBP
const currency2RUB = new Currency(22.38); // RUB
console.log('30zł na korony czeskie: ', currency2CZK.PLNToCZK(30));
console.log('31zł na dolary amerykańskie: ', currency2USD.PLNToUSD(31));
console.log('32zł na euro: ', currency2EUR.PLNToEUR(32));
console.log('33zł na funty szterlingi: ', currency2GBP.PLNToGBP(33));
console.log('34zł na ruble rosyjskie: ', currency2RUB.PLNToRUB(34));
console.log('40 koron czeskich na złote: ', currency2CZK.CZKToPLN(40));
console.log('41 dolarów amerykańskich na złote: ', currency2USD.USDToPLN(41));
console.log('42 euro na złote: ', currency2EUR.EURToPLN(42));
console.log('43 funty szterlingi na złote: ', currency2GBP.GBPToPLN(43));
console.log('44 ruble rosyjskie na złote: ', currency2RUB.RUBToPLN(44));
