setTimeout(() => {
    console.log ('Two seconds are up!');
}, 2000)

const names = ['Zahra', 'Budi', 'Dibu']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const url = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback (data)
    }, 2000)
}


url('Sarijadi', (data) => {
    console.log(data)
})

// const data = url ('Sarijadi')
// console.log = (data)