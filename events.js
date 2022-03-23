import eventEmitter from 'events'

const customEmitter = new eventEmitter();

customEmitter.on('response', (message, ...other) => {
    console.log('data recived ', message, other);
})
customEmitter.on('response', (message) => {
    console.log('Some other logic here...');
})
customEmitter.emit('response', 'join', 34, 56, 'hihi')

