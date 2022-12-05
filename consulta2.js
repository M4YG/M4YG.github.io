var dataRef = new Firebase('https://marcos-5491e-default-rtdb.firebaseio.com/escritorio_de_advocacia/salas');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'funcionario') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
                
                $("#tbfuncionarios tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.telefone}</td> +
    
                        <td>${value2.email}</td> +

                        <td>${value2.cpf}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
