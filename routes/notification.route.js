const notificationController = require("../controllers/notification.controller")

module.exports = (app) => {
  app.get("/api/v1/notifications/:id", notificationController.getNotificationById)
  app.post("/api/v1/notifications", notificationController.createNotification)
}
