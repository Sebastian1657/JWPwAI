const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

function runWorker(limit) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./sumWorker.js", {workerData: {limit}});
        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

(async () => {
    console.time("async");
    const results = await Promise.all([
        runWorker(10),
        runWorker(20),
        runWorker(50),
        runWorker(100)
    ]);
    console.log("Wyniki:", results);
    console.timeEnd("async");
})();