export function saveToStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key: string) {
    const data = sessionStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}

export function removeFromStorage(key: string) {
    sessionStorage.removeItem(key)
}