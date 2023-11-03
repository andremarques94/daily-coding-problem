const fs = require('fs');

fs.readFile('./election.txt', 'utf-8', (err, data_str) => {

    if(err) {
        console.log('file not found');
        return;
    }

    const data = data_str.split('\n').map(vote => {

        if(vote === '') return;

        const elector = vote.split(',')[0].substring(1);
        const jedi = vote.split(',')[1].slice(0,-1);
        
        return ({
            elector,
            jedi
        })
    });

    
    data.pop(); //not so cool way of removing the last line of the file that is undefined, should check it later

    
    const voteCounter = data.filter(elem => {
        var checker = 0;

        data.forEach(comparator_elem => {
            if(elem.elector === comparator_elem.elector) {
                checker++;
            }
        })
        return checker === 1;
    });

    const table = voteCounter.reduce((acc, vote) => {

       acc[vote.jedi] = acc[vote.jedi] === undefined ? 1 : acc[vote.jedi] + 1; 
       return acc;
    }, {});


    const final = Object.keys(table).sort((a,b) => table[b] - table[a]).slice(0,3).reduce((acc,key) => {
        acc[key] = table[key];
        return acc;
    }, {})
    
    console.log(final);
});
