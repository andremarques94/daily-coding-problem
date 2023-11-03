const times = require('./times.json'); 

const current = {
    people: 0,
    timestamp: 0
};

const max = {
    people: 0,
    timestamp : 0,
    next: 0
};

times.forEach((registry, index) => {

    (registry.type === 'in') ? current.people += registry.people : current.people -= registry.people
    current.timestamp = registry.timestamp;
    
    if(current.people > max.people) {
        max.people = current.people;
        max.timestamp = current.timestamp;
        max.next = times[index + 1].timestamp;
    }
});

const timePeriod = {
    people: max.people,
    timestamp: new Date(max.timestamp * 1000).toLocaleString(),
    nextStamp: new Date(max.next * 1000).toLocaleString()
}


console.log(timePeriod);

