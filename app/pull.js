const axios = require('axios');
const QRCode = require('qrcode')

setInterval(() => {
    QRCode.toDataURL(`http://jockey.dance/party/${document.getElementById('partyname').value}/`)
    .then(url => {
        document.getElementById('qrimg').src = url;
        console.log(url)
    })
    .catch(err => {
        console.error(err)
    })
}, 20)

const createParty = () => {
    axios.get(`http://jockey.dance/api/party/${document.getElementById('partyname').value}/create`)
    .then(res => {
        document.getElementById('pin').innerText += res.data.pin;
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
}



// const fetchRequests = () => {
//     return axios.get('http://')
// }