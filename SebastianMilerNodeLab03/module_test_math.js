const math1 = require('./math1');
const readline = require('readline');

const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('math1 Object Reference Test:');
rl1.question('Wybierz obliczenia: \n1 - Objętość kuli\n2 - Pole powierzchni kuli\n3 - Prędkość\n4 - Pole trapezu\n5 - Objętość stożka\n', (answer) => {
    console.clear();
    console.log(`Wybrałeś opcję: ${answer}`);
    switch(answer) {
        case "1":
            rl1.question('Podaj promień kuli: ', (r) => {
                console.log(`Objętość kuli o promieniu ${r} wynosi: ${math1.volumeOfSphere(r)}`);
                rl1.clearAfter();
                rl1.close();
                secondMethod();
            });
            break;
        case "2":
            rl1.question('Podaj promień kuli: ', (r) => {
                console.log(`Pole powierzchni kuli o promieniu ${r} wynosi: ${math1.surfaceOfSphere(r)}`);
                rl1.close();
                rl1.clear();
                secondMethod();
            });
            break;
        case "3":
            rl1.question('Podaj drogę (s): ', (s) => {
                rl1.question('Podaj czas (t): ', (t) => {
                    console.log(`Prędkość wynosi: ${math1.valueOfSpeed(s, t)}`);
                    rl1.close();
                    rl1.clear();
                    secondMethod();
                });
            });
            break;
        case "4":
            rl1.question('Podaj bok a: ', (a) => {
                rl1.question('Podaj bok b: ', (b) => {
                    rl1.question('Podaj wysokość h: ', (h) => {
                        console.log(`Pole trapezu wynosi: ${math1.surfaceOfTrapezium(a,b,h)}`);
                        rl1.close();
                        rl1.clear();
                        secondMethod();
                    });
                });
            });
            break;
        case "5":
            rl1.question('Podaj promień podstawy stożka: ', (r) => {
                rl1.question('Podaj wysokość h: ', (h) => {
                    console.log(`Objętość stożka wynosi: ${math1.volumeOfCone(r,h)}`);
                    rl1.close();
                    rl1.clear();
                    secondMethod();
                });
            });
            break;
        default:
            console.log('Nieprawidłowy wybór. Proszę spróbować ponownie.');
            rl1.close();
            break;
    }
});
function secondMethod() {
    console.log('\nmath2 Object Oriented Test:');
    const MyMathModule = require('./math2');
    rl2.question('Wybierz obliczenia: \n1 - Objętość kuli\n2 - Pole powierzchni kuli\n3 - Prędkość\n4 - Pole trapezu\n5 - Objętość stożka\n', (answer) => {
        console.clear();
        console.log(`Wybrałeś opcję: ${answer}`);
        switch(answer) {
            case "1":
                rl2.question('Podaj promień kuli: ', (r) => {
                    const math2Sphere = new MyMathModule(r);
                    console.log(`Objętość kuli o promieniu ${r} wynosi: ${math2Sphere.volumeOfSphere(r)}`);
                    rl2.close();
                });
                break;
            case "2":
                rl2.question('Podaj promień kuli: ', (r) => {
                    const math2Sphere = new MyMathModule(r);
                    console.log(`Pole powierzchni kuli o promieniu ${r} wynosi: ${math2Sphere.surfaceOfSphere(r)}`);
                    rl2.close();
                });
                break;
            case "3":
                rl2.question('Podaj drogę (s): ', (s) => {
                    rl2.question('Podaj czas (t): ', (t) => {
                        const math2Speed = new MyMathModule(s, t);
                        console.log(`Prędkość wynosi: ${math2Speed.valueOfSpeed(s, t)}`);
                        rl2.close();
                    });
                });
                break;
            case "4":
                rl2.question('Podaj bok a: ', (a) => {
                    rl2.question('Podaj bok b: ', (b) => {
                        rl2.question('Podaj wysokość h: ', (h) => {
                            const math2Trapezium = new MyMathModule(a, b, h);
                            console.log(`Pole trapezu wynosi: ${math2Trapezium.surfaceOfTrapezium(a,b,h)}`);
                            rl2.close();
                        });
                    });
                });
                break;
            case "5":
                rl2.question('Podaj promień podstawy stożka: ', (r) => {
                    rl2.question('Podaj wysokość h: ', (h) => {
                        const math2Cone = new MyMathModule(r, h);
                        console.log(`Objętość stożka wynosi: ${math2Cone.volumeOfCone(r,h)}`);
                        rl2.close();
                    });
                });
                break;
            default:
                console.log('Nieprawidłowy wybór. Proszę spróbować ponownie.');
                rl2.close();
                break;
        }
    });
}