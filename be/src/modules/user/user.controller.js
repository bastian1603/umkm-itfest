import * as user_service from "./user.service.js"
import argon2 from "argon2";

const hash = async (plain) => {
    return await argon2.hash(plain);
};

const verify = async (hashed, plain) => {
    return await argon2.verify(hashed, plain)
}


export const get_users = async (req, res) => {
    try {
        const users = await   user_service.get_all_users();
        res.json(users);
    }catch (e) {
        res.status(500).json({ message: e.message });
    }
};


export const create = async (req, res) => {
    try {
        const body = req.body;

        if (body.password !== body.password_confirm) {
            throw new Error("password dan konfirmasi password tidak sama")
        }

        const user_email = user_service.check_email(body.email);

        if (!user_email) throw new Error("Email sudah digunakan");

        const datas = {
            username: body.username,
            email: body.email,
            password: await hash(body.password),
            website: body.website,
            address: body.address,
            profile_pic: body.profile_pic, 
            detail: body.detail,
            is_producer: body.is_producer
        }

        const user = await user_service.regist(datas);
        res.status(201).json(user);
    }catch (e) {
        res.status(400).json({ message: e.message });
    }
}


export const update = async (req, res) => {
    try {
        const user_id = parseInt(req.params.id);
        const body = req.body;
        const datas = {
            username: body.username,
            email: body.email,
            website: body.website,
            address: body.address,
            profile_pic: body.profile_pic, 
            detail: body.detail
        }
        const user = await user_service.update(user_id, datas);

        res.json({
            message: "Berhasil mengubah data user",
            result: user 
        });
    }catch (e) {
        res.status(500).json({
            message: `Gagal mengubah data user: ${e.message}`
        });
    }
}


export const destroy = async (req, res) => {
    try {
        const user_id = parseInt(req.params.id)
        const result = await user_service.destroy({
            where: {id: user_id}
        });

        res.json({
            message: "Berhasil menghapus akun",
            result: result
        })
    }catch (e) {
        res.status(500).json({
            message: `Gagal menghapus akun: ${e.message}`
        });
    }
}


export const login = async (req, res) => {
    try {
        
    }catch (e) {
        res.status(500).json({
            message: `Gagal Login : ${e}`
        });
    }
}


export const logout = async (req, res) => {
    try {
        
    }catch (e) {
        res.status(500).json({
            message: `Gagal Login : ${e}`
        });
    }
}

