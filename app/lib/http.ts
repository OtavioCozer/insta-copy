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

export async function getFeed(page: number, page_size: number) {
    return fetch(`${document.location.origin}/api/feed?page=${page}&page_size=${page_size}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            "Content-Type": 'application/json'
        },

    })
}