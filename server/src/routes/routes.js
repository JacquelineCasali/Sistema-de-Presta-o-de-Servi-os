const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agendaController")
// const servicesController = require("../controllers/servicesController")




//  router.get("/service", servicesController.lista);
//  router.get("/service/:id", servicesController.show);
//  router.post("/service", servicesController.create);
//  router.delete("/service/:id", servicesController.delete);
router.get("/", agendaController.lista);
router.get("/:id", agendaController.show);
router.post("/", agendaController.create);
router.put("/:id", agendaController.update);

router.delete("/:id", agendaController.delete);
 module.exports = router;
