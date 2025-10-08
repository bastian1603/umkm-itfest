import * as uom_service from "./uom.service.js"

export const index = async (req, res) => {
    try{
        const uom = await uom_service.get_all();

        return res.json({
            result: uom
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  uom: ${e.message}`
        });
    }
}

export const create = async (req, res) => {
    try{
        const data = req.body;
        const uom = await uom_service.create(data);

        return res.json({
            message: "Berhasil menambahkan uom baru."
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  uom: ${e.message}`
        });
    }
}

export const update = async (req, res) => {
    try{
        const data = req.body;
        const id = req.params.id;

        const uom = uom_service.update(id, data);

        return res.json({
            message: "Berhasil mengubah uom."
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  uom: ${e.message}`
        });
    }
}

export const destroy = async (req, res) => {
    try{
        const id = req.params.id;

        await uom_service.destroy(id);

        return res.json({
            message: "Berhasil menghapus uom."
        })

    }catch (e) {
        return res.status(500).json({
            message: `Gagal  uom: ${e.message}`
        });
    }
}