import { HttpException, HttpStatus } from "@nestjs/common";

export interface ResponseUtilOptions {
    message?: string;
    data?: any;
    estado: boolean;
    statusCode: HttpStatus;
}

export function responseUtil({
    message = "",
    data = null,
    estado,
    statusCode,
}: ResponseUtilOptions): ResponseUtilOptions {
    if (statusCode >= 400) {
        throw new HttpException(
            {
                message,
                data,
                estado,
            },
            statusCode
        );
    }
    return {
        message,
        data,
        estado,
        statusCode,
    }
}
