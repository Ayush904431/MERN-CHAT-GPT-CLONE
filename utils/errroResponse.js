class errorResponse extends Error{
    constructor(message, statuscode){
        super(message);
        this.statusCode = statusCode;
    }
}
module.exports = errorResponse;