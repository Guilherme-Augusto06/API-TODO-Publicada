// index.js
const tabela = document.querySelector('.tabela-js');

axios.get('http://127.0.0.1:5000/list')
    .then(function (resposta) {
        getData(resposta.data);
    })
    .catch(function (error) {
        console.log(error);
    });

function getData(data) {
    data.forEach(element => {
        tabela.innerHTML += `
            <tr>
                <td>${element.ID}</td>
                <td>${element.Tarefa}</td>
                <td>${element.Ação}</td>
            </tr>
        `;
    });
}
