import { UseState } from 'react'

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoresValue] = UseState( () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = value => {
        try {
            setStoresValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
}