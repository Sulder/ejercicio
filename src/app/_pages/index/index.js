fetch('https://jsonplaceholder.typicode.com/user/1/todos')
  .then(response => response.json())
  .then(data => {
    let cad = '<tr class="tr-color"><th><h5 class="mb-0">ID</h5></th><th><h5 class="mb-0">Tittle</h5></th><th><h5 class="mb-0">Status</h5></th></tr>';
    for (let tools of data) {
      if (tools.completed === true){
        cad += `<tr>
                        <td class="td-color"><h6 class="mb-0">${tools.id}</h6></td>
                        <td>${tools.title}</td>
                        <td class="text-white td-status-true" >${tools.completed}</td>
                    </tr>`;

      } else
        if(tools.completed === false) {
        cad += `<tr>
                        <td class="td-color"><h6 class="mb-0">${tools.id}</h6></td>
                        <td>${tools.title}</td>
                        <td class="text-white td-status-false">${tools.completed}</td>
                    </tr>`;
      }

    }
    document.getElementById("tabla1").innerHTML = cad;
  });


