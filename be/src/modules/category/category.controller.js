import * as category_service from "./category.service.js"

export const index = async (req, res) => {
    try{
        const categories = await category_service.get_all();

        return res.json({
            result: categories
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  Category: ${e.message}`
        });
    }
}

export const create = async (req, res) => {
    try{
        const data = req.body;
        const category = await category_service.create(data);

        return res.json({
            message: "Berhasil menambahkan kategori baru.",
            result: category
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  Category: ${e.message}`
        });
    }
}

export const update = async (req, res) => {
    try{
        const data = req.body;
        const id = parseInt(req.params.id);

        const category = category_service.update(id, data);

        return res.json({
            message: "Berhasil mengubah kategori."
        })
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  Category: ${e.message}`
        });
    }
}

export const destroy = async (req, res) => {
    try{
        const id = parseInt(req.params.id);

        const category = await category_service.destroy(id);

        return res.json({
            message: "Berhasil menghapus kategori."
        })

    }catch (e) {
        return res.status(500).json({
            message: `Gagal  Category: ${e.message}`
        });
    }
}