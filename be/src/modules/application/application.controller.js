import { app } from "../../app";
import * as application_service from "./application.service.js";

export const create = async (req, res) => {
    try {
        const data = req.body;
        data.requester_id = req.user.id;

        const application = await application_service.create(data);

        return res.json({
            message: "Berhasil mengirimkan application",
            result: application
        })
    } catch (e) {
        return res.status(500).json({
            message: "Gagal mengirim application"
        })
    }
}

export const update = async () => {
    try {
        
    } catch (e) {
        
    }
}

export const destroy = async () => {
    try {
        
    } catch (e) {
        
    }
}