const sqlite3 = require("sqlite3").verbose();
const filepath = "./lavhec.db";

const getAllAnimalsOng = (request, response) => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      response.status(500).send({
        message: "Erro ao conectar no banco",
      });
    } else {
      db.all("SELECT * FROM animals_ong", function(error, rows) {
        response.status(202).send(rows);         
      });
    }
  });
};

const getAllAnimalsOwner = (request, response) => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      response.status(500).send({
        message: "Erro ao conectar no banco",
      });
    } else {
      db.all("SELECT * FROM animals_owner", function(error, rows) {
        response.send(rows);         
      });
    }
  });
};

const getAllAnimalsLostFound = (request, response) => {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      response.status(500).send({
        message: "Erro ao conectar no banco",
      });
    } else {
      db.all("SELECT * FROM animals_lost_found", function(err, rows) {
        response.status(202).send(rows);         
      });
    }
  });
};

const getAnimalsFiltered = (request, response) => {
  const bodyData = request.body;
  
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      response.status(500).send({
        message: "Erro ao conectar no banco",
      });
    } else {
      db.all(`SELECT * FROM animals_ong WHERE tag = '${bodyData.type}'`, function(error, rows) {
        response.status(202).send(rows);              
      });
    }
  });
};

const createAdoptionOrder = (request, response) => {
  const bodyData = request.body;
  
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      response.status(500).send({
        message: "Erro ao conectar no banco",
      });
    } else {
      db.all(`UPDATE ${bodyData.tableName} SET inAdoptionProcess = 1 WHERE id = ${bodyData.id}`, function(error) {
        response.status(201).send({
          message: "Ordem de adoção criada com sucesso!",
        });       
      });
    }
  });
};

const resetAdoptionOrders = (request, response) => { 
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      console.error(error.message);
    } else {
      for (let i = 0; i <= 30; i++) {
        db.all(`UPDATE animals_ong SET inAdoptionProcess = 0 WHERE id = ${i}`, function(error) {
          if (i == 30) {
            response.status(201).send({
              message: "Ordens resetadas!",
            });            
          }                
        });        
      }
      
      for (let i = 0; i <= 15; i++) {
        db.all(`UPDATE animals_owner SET inAdoptionProcess = 0 WHERE id = ${i}`, function(error) {
          if (i == 30) {
            response.status(201).send({
              message: "Ordens resetadas!",
            });            
          }                
        });        
      }
    }
  });
};


module.exports = {
  getAllAnimalsOng,
  getAllAnimalsOwner,
  getAnimalsFiltered,
  createAdoptionOrder,
  resetAdoptionOrders,
  getAllAnimalsLostFound,
};
