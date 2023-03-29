document.getElementById("myBtn").addEventListener('click', getUser);

function getUser(){
    // console.log('test');

    // Get API
    fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then(info => {
        // console.log(data);

        let user = info.data;
        // console.log(user);

        // Get Info
        let output = "<h1><center></center></h1>";

        // Get info loop Through
        user.forEach(function(lists){
            output += `
            <div class="container">
                <div class="card">
                    <ul class="list-group">
                    <li type="none" class="list-group-item"><img src="${lists.avatar}"></li>
                    <li class="list-group-item"><h2>User Id: ${lists.id}</h2></li>
                    <li class="list-group-item"><h2>Name: ${lists.first_name} ${lists.last_name}</h2></li>
                    <li class="list-group-item"><h2>Email Id: ${lists.email}</h2></li>
                    </ul>
                </div>
            </div>
            
            `;
        });

        // show on our screen
        document.getElementById('output').innerHTML = output;
    });
};

