const storagePrefix = "twitter-clone"

const storage = {
    getToken: () => {
        JSON.parse(window.localStorage.getItem(`${storagePrefix}token`));
    },
    setToken: (token) => {
        window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
    },
    clearAccessToken: () => {
        window.localStorage.removeItem(`${storagePrefix}token`)
    }
}

export default storage;