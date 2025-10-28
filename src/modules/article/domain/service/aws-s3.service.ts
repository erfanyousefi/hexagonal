import {Injectable} from '@nestjs/common';
import {S3} from 'aws-sdk';
import {S3Port} from '../port/s3.port';


@Injectable()
export class AwsS3Service implements S3Port {
    private s3 = new S3({region: process.env.AWS_REGION});

    async uploadFile(file: Express.Multer.File, folder = 'uploads'): Promise<string> {
        const key = `${folder}/${Date.now()}-${file.originalname}`;
        await this.s3
            .upload({
                Bucket: process.env.AWS_BUCKET_NAME!,
                Key: key,
                Body: file.buffer,
                ACL: 'private',
                ContentType: file.mimetype,
            })
            .promise();

        return `s3://${process.env.AWS_BUCKET_NAME}/${key}`;
    }
}
