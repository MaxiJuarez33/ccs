


export const regularExps = {
    phone: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    time: /^([01]\d|2[0-3]):[0-5]\d$/,
    currecy: /^\$[1-9][0-9]{0,2}(,[0-9]{3})*(\.[0-9]{1,2})?$/,
}