class CustomApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const custom_Error = (message,statusCode) => {
    return new CustomApiError(message,statusCode)
}



module.exports = {custom_Error,CustomApiError}