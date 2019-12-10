//communicste b/w localserver to githyb server
const api="https://api.github.com/users";
window.fetch(api).then(data=>{
data.json()
.then(getData=>{
{
    var op=[];
    for(let user of getData)
    op+=`<div class="container"><table class="table tble-borderd mt-4"><tr>
    <th>Id</th>
    <th>Name</th>
    <th>photo</th>
    <th>Repo</th>
    <th>url</th>
    
    </tr>
    <tr>
    <td>${user.id}</td>
    <td>${user.login}</td>
    <td><img style="width:100px;height:100px;border-radius:100%" src="${user.avatar_url}"/></td>
    <td>${user.repos_url}</td>
    <td><a href=>${user.url}</td>
    </tr></table></div>`;
  document.getElementById("template").innerHTML=op;
}
})
.catch(err=>console.log(err))

}


)

.catch(err=>console.log(err));