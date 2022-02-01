import {StatusCodes} from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: "Something went wrong, Try again later"
    }
    res.status(defaultError.statusCode).json({msg: err})
}

export default errorHandlerMiddleware;