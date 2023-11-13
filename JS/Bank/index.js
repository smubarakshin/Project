let card1 = {
    type: 'debit',
    networkType: 'visa',
    currencyType: 1,
    balance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
     }
}

let card2 = {
    type: 'credit',
    networkType: 'Mastercard',
    currencyType: 1,
    balance: 10000.50,
    number: 2323454567678989,
    expirationYear: 2027,
    expirationMonth: 10,
    transaction: {
        title: 'Order Revenue',
        amount: -874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
     }
};

let card3 = {
    type: 'credit',
    networkType: 'Discover',
    currencyType: 1,
    balance: 500.00,
    number: 1234567891011213,
    expirationYear: 2026,
    expirationMonth: 5,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
     }
};

// function renderCard(card) {
//     for(data in card){
//         document.write('<h2>', `${data}: `, `${card[data]}`, '<h2>')
//     }
// }



// renderCard(card1);
// renderCard(card2);



let cards = [card1, card2, card3];

cards.forEach(card => { 

    let color = '';
    card.transaction.amount > 0 ? color = 'green' : color = 'red'
    console.log(color)

    document.write(
    '<h2>', `Type: `,`${card.type}`, '</h2>',
    '<h2>', 'Network Type: ', `${card.networkType}`, '</h2>',
    '<h2>', 'Currency Type: ', `${card.currencyType}`, '</h2>',
    '<h2>', 'Balance: ', `${card.balance}`, '</h2>',
    '<h2>', 'Number: ', `${card.number}`, '</h2>',
    '<h2>', 'Expiration Year: ', `${card.expirationYear}`, '</h2>',
    '<h2>', 'Expiration Month: ', `${card.expirationMonth}`, '</h2>',
    '<h2>', 'Transaction History:', '</h2>',
    '<ul>',
    '<h3>', '<li>','Title: ', `${card.transaction.title}`,'</li>', '</h3>',
    '<h3>', '<li>','Amount: ', `<span style='color:${color}'>`,`${card.transaction.amount}`, '</span>', '</li>','</h3>',
    '<h3>', '<li>','Date: ', `${card.transaction.date}`,'</li>','</h3>',
    '</ul>',
    '<br>'
)
})



