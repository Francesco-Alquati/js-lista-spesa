// ARRAY CON LA LISTA DELLA SPESA
const spesa = ['pasta', 'mozzarella', 'limone', 'pane', 'banane', 'yogurt', 'latte', 'uova'];

// RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA LISTA DELLA SPESA
let lista_spesa = document.getElementById('lista-spesa');

// CREO LA VARIABILE INDICE
let i = 0;

// CICLO L'ARRAY
while(i<spesa.length){
    // CREO  UN NUOVO LIST ITEM
    const li = document.createElement('li');

    // GLI METTO IL TESTO ALL'INTERNO
    li.innerText = spesa[i];

    // INCREMENTO LA VARIABILE INDICE
    i++;

    
}