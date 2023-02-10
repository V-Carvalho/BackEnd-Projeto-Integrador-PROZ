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




// const findCompany = (request, response) => {
//   let foundCompanyId = false;
//   const parameterId = request.params.id;

//   empresas.map((value) => {
//     if (value.id == parameterId) {
//       foundCompanyId = true;
//       return response.send(value);
//     }
//   });

//   if (!foundCompanyId) {
//     response.status(404).send({
//       message: "Empresa não encontrada",
//     });
//   }
// };

// const updateCompany = (request, response) => {
//   let foundCompanyId = false;
//   const bodyData = request.body;
//   const parameterId = request.params.id;

//   if (Object.keys(bodyData).length === 0) {
//     return response.status(400).send({
//       message: "Corpo da msg vazio, dados da empresa não foram atualizados!",
//     });
//   }

//   if (bodyData.id == undefined || bodyData.name == undefined) {
//     return response.status(400).send({
//       message: "Todos os campos são obrigatórios",
//     });
//   } else {
//     empresas.map((value, index) => {
//       if (value.id == parameterId) {
//         foundCompanyId = true;
//         empresas[index] = bodyData;
//         return response.send(empresas[index]);
//       }
//     });

//     if (!foundCompanyId) {
//       response.status(404).send({
//         message: "Empresa não encontrada",
//       });
//     }
//   }
// };

// const deleteCompany = (request, response) => {
//   let foundCompanyId = false;
//   const parameterId = request.params.id;

//   empresas.map((value, index) => {
//     if (value.id == parameterId) {
//       foundCompanyId = true;
//       empresas.splice(index, 1);
//       return response.send(value);
//     }
//   });

//   if (!foundCompanyId) {
//     response.status(404).send({
//       message: "Empresa não encontrada",
//     });
//   }
// };

module.exports = {
  getAllAnimalsOng,
  getAllAnimalsOwner,
  createAdoptionOrder,
};
