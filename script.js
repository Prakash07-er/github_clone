
const searchForm = document.querySelector('form');
const container = document.querySelector('.container');



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI();
    RepofetchAPI();
    RepoFilesfetchAPI();
});

async function fetchAPI (){
    searchQuery = document.querySelector('input').value;
    const baseURL = `https://api.github.com/search/users?q=${searchQuery}`;
 
    const response = await fetch(baseURL); 
    const data = await response.json();
    console.log(data.items[0]);
    const dataItems = data.items ;

    if(dataItems.length >0){
        var temp = "";

        dataItems.forEach((element) => {
            temp += "<tr>";
            temp += "<td>" + element.login + "</td>"
            temp += `<td> <a target=_blank href="https://github.com/${element.login}"> ${element.url}</a> </td>`
        });
        document.getElementById("data").innerHTML = temp;
    }

}

async function RepofetchAPI (){
    searchQuery = document.querySelector('input').value;

    const repobaseURL = `https://api.github.com/users/${searchQuery}/repos`;
    

    const response = await fetch(repobaseURL); 
    const dataItems = await response.json();
    console.log(dataItems);

    if(dataItems.length >0){
        var temp = "";

        dataItems.forEach((element) => {
            temp += "<tr>";
            temp += "<td>" + element.name + "</a></td>"
        });
        document.getElementById("dataitems").innerHTML = temp;
    }

}


async function RepoFilesfetchAPI (){
    searchQuery = document.querySelector('input').value;
    // console.log(searchQuery);
    
    // const baseURL = `https://api.github.com/search/users?q=${searchQuery}`;
    // const  baseURL=  `https://api.github.com/search/repositories?q=${searchQuery}` ; 
    const repobaseURL = `https://api.github.com/users/${searchQuery}/repos`;
    

    const response = await fetch(repobaseURL); 
    const dataItems = await response.json();
    console.log(dataItems);

    if(dataItems.length >0){
        var temp = "";

        dataItems.forEach((element) => {
            temp += "<tr>";
            temp += `<td> <a target=_blank href="https://github.com/${searchQuery}/${element.name}"> ${element.name}</a> </td>`
        });
        document.getElementById("repo_files").innerHTML = temp;
    }

}