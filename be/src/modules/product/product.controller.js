import * as product_service from "./product.service.js";


export const index = async (req, res) => {
    try{
        const result = await product_service.get_by_filter();
        res.json(result);
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  product: ${e.message}`
        })
    }
}

export const show = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const items = await product_service.get_by_id(id);

        return res.json({
            result: items
        });

    }catch (e) {
        return res.status(500).json({
            message: `Gagal  product: ${e.message}`
        })
    }
}

export const create = async (req, res) => {
    try{
        const data = req.body;

        const user_id = req.user.id;
        data.producer_id = parseInt(user_id);
        console.log(user_id);

        const result = await product_service.create(data);

        return res.json({
            message: "Berhasil menambahkan produk baru",
            result: result
        });
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  product: ${e.message}`
        })
    }
}

export const update = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const data = req.body;

        const product = product_service.update(id, data);
        
        return res.json({
            message: "Berhasil mengubah data produk"
        })

    }catch (e) {
        return res.status(500).json({
            message: `Gagal  product: ${e.message}`
        })
    }
}

export const destroy = async (req, res) => {
    try{
        const id = parseInt(req.params.id)

        const product = await product_service.destroy(id);

        return res.json({
            message: "Berhasil menghapus produk"
        });
    }catch (e) {
        return res.status(500).json({
            message: `Gagal  product: ${e.message}`
        })
    }
}
