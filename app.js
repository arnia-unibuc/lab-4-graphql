const express = require('express');

const app = express();

app.use(express.json());

const db = {
    users: [],
};

/* E1 - Create Users
 * Definiti o ruta care sa primeasca un request de tip POST la adresa /users.
 * Ruta va primi un obiect de forma { name: String, email: String }.
 * Daca obiectul nu are ambele proprietati, se va returna un mesaj de eroare.
 * Daca obiectul are ambele proprietati, se va adauga in array-ul users din memorie.
 * Ruta va returna obiectul adaugat impreuna cu un id generat automat.
 */

/* E2 - Update Users
 * Definiti o ruta care sa primeasca un request de tip PUT la adresa /users/:id.
 * Ruta va primi un obiect de forma { name: String, email: String }.
 * Daca obiectul nu are ambele proprietati, se va returna un mesaj de eroare.
 * Daca obiectul are ambele proprietati, se va cauta in array-ul users din memorie user-ul cu id-ul primit in ruta.
 * Daca user-ul nu exista, se va returna un mesaj de eroare.
 * Daca user-ul exista, i se vor actualiza proprietatile cu valorile din obiect si se va returna obiectul actualizat.
 */

/* E3 - List Users
 * Definiti o ruta care sa primeasca un request de tip GET la adresa /users.
 * Ruta poate accepta doua query params optionale: page si limit.
 * Daca exista, page si limit trebuie sa fie numere pozitive.
 * Daca nu exista, page si limit vor avea valorile implicite 0 si 10.
 * Ruta va returna un array de useri care respecta pagina si limita specificate.
 * Daca nu exista useri care sa respecte pagina si limita, se va returna un array gol.
 */

/* E4 - Delete Users
 * Definiti o ruta care sa primeasca un request de tip DELETE la adresa /users/:id.
 * Ruta va cauta in array-ul users din memorie user-ul cu id-ul primit in ruta.
 * Daca user-ul nu exista, se va returna un mesaj de eroare.
 * Daca user-ul exista, se va sterge din array.
 */



module.exports = app;
