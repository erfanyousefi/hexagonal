export interface S3Port {
    uploadFile(file: Express.Multer.File, folder?: string): Promise<string>
}
export const S3_PORT = Symbol("S3_PORT")