//http://localhost:3000/api/party/201/requests
let qu = []

setInterval(() => {
    axios.get('http://localhost:3000/api/party/201/requests')
    .then(res => {
        for(req of res.data) {
            if(!qu.includes(req.song.title)){
                qu.push(req.song.title);
                document.getElementById('queuebox').innerHTML += `<li class="request-box-li">
                ${req.song.title}
                <div class="links">
                <i class="fa fa-spotify"></i>
                <i class="fa fa-youtube"></i>
                </div>
                </li>`;
            }
        }
    })
}, 1000)