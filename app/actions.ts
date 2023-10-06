'use server'

import {sign} from 'jsonwebtoken'

export default async function create(formData: FormData) {
 
    const login = formData.get("login")
    const password = formData.get("password")
    if(login === 'otavio' && password === "otavio"){
        const payload = {
            name: 'otavio',
        }
        const secret = process.env.KEY
        if (typeof secret === 'string') {
            return sign(payload, secret)
        }
    }

  }
