export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            hello: (msg:string)=> `hello ${msg}`
        }
    }
})