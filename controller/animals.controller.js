const sqlite3 = require("sqlite3").verbose();
const filepath = "./lavhec.db";

const getAllAnimalsOng = (request, response) => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      console.error(error.message);
    } else {
      db.all("SELECT * FROM animals_ong", function(err, rows) {
        response.send(rows);         
      });
    }
  });
};

const getAllAnimalsOwner = (request, response) => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      console.error(error.message);
    } else {
      db.all("SELECT * FROM animals_owner", function(error, rows) {
        response.send(rows);         
      });
    }
  });
};

const createAdoptionOrder = (request, response) => {
  const bodyData = request.body;
  console.log(bodyData.id)
  console.log(bodyData.tableName)
  
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      console.error(error.message);
    } else {
      db.all(`UPDATE ${bodyData.tableName} SET inAdoptionProcess = 1 WHERE id = ${bodyData.id}`, function(error) {
        response.status(201).send({
          message: "Ordem de adoção criada com sucesso!",
        });       
      });
    }
  });
};


module.exports = {
  getAllAnimalsOng,
  getAllAnimalsOwner,
  createAdoptionOrder,
};
