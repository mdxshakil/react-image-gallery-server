const express = require("express");
const router = express.Router();
const { ImageRoutes } = require("../modules/image/image.routes.js")

const moduleRoutes = [
    {
        path: "/image",
        route: ImageRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

module.exports = router