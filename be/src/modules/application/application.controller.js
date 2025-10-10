import { app } from "../../app";
import * as application_service from "./application.service.js";

export const index = async (req, res) =>{
    try {
        const user_id = req.user.id;
        const applications = application_service.index(req.body.query)
    }catch (e) {
        return res.status(500).json({
            message: `Gagal mengambil data application: ${e.message}`
        })
    }
}

export const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const application = await application_service.show(id);
        const user_id = req.user.id;

        if (!application.requested_id === user_id && application.is_readed) {
            const applicatoin_update = await application_service.update({
                where: {
                    id: id
                }, 
                data: {
                    is_readed: true
                }
            });
        }

        return res.json({
            result: application
        });

    }catch (e) {
        return res.status(500).json({
            message: "Gagal mengirim application"
        });
    }
}

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
        });
    }
}

export const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;

         
        const application = application_service.update(id, data);
        
        return res.json({
            message: "Berhasil mengubah application"
        });

    } catch (e) {
        return res.status(500).json({
            message: "Gagal mengubah application"
        });        
    }
}

export const destroy = async () => {
    try {
        const id = parseInt(req.params.id);       
    
        return res.json({
            message: "Berhasil menghapus application"
        })
    } catch (e) {
        return res.status(500).json({
            message: "Gagal menghapus application"
        });
    }
}