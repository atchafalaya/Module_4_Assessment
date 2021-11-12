const houses =require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id ===+req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL} = req.body
        let newHouse = {
            id: houseId, 
            address, 
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId ++
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        // console.log(id)
        let {type} = req.body
        // console.log(type)
        let index = houses.findIndex(elem => +elem.id === +id)
        // console.log(index)
        // if (houses[index].price === 5000000 && type === 'plus'){
        //     res.status(400).send('cannot go above $5000000')
        // } else if (houses[index].price === 0 && type === 'minus'){
        //     res.status(400).send('cannot go below zero dollars')
        // } else
         if (type === 'plus'){
            houses[index].price+=10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price-=10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}