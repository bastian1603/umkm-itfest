import argon2 from "argon2";
import { get_user } from "./auth.service.js";
import { generate_token } from "../../config/jwt.js";


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await get_user(email);
        if(!user) res.status(404).json({
            message: "Email tidak terdaftar"
        });

        const valid_password = await argon2.verify(user.password, password);
        if (!valid_password) res.status(401).json({
            message: "Password salah"
        });

        const token = generate_token({
            id: user.id,
            email: user.email, 
            username: user.username
        });

        return res.json({
            token: token, 
            message: "Berhasil Login"
        })

    } catch (e) {
        return res.status(500).json({
            message: `Gagal Login: ${e.message}`
        })
    }
}