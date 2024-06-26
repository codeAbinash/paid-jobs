const fs = require('fs');


fs.readFile('./payments.json', { encoding: 'utf8', flag: 'r' }, display);



function display(err, data) {
    if (err)
        console.log(err)
    else {
        let jsonData = JSON.parse(data)
        let total = 0, numberOfPayments;
        let lastPayment = jsonData[0];


        jsonData.forEach(payment => { total += payment.payment })
        numberOfPayments = jsonData.length
        
        console.log(`Last Payment ${lastPayment.payment}\nby ${lastPayment.client} on ${lastPayment.date}`)
        console.log("Total Payment : " + total)
        console.log("Number of Payments : " + numberOfPayments)

    }
}
