'use client'

export async function postData(url = "", data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export async function getData(url = "", params = {}) {
    // url += '?'
    // for (const [key, value] of Object.entries(params)) {
    //     url += url + `${key}=${value}`
    // }
    return fetch(document.location.origin + url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            "Content-Type": 'application/json'
        },
    })
}