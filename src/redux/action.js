export const countr = {
    text:'COUNT_TEXT'
}

export const banner = {
    text:'BANNER_TEXT'
}




export const addCounter = (number) => {
    return {
        type: countr.text,
        number
    }
} 

export const addbanner = (list) => {
    return {
        type: banner.text,
        list
    }
} 