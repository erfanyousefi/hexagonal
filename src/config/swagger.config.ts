import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {SecuritySchemeObject} from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

const SwaggerConfigInit = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle("Botostart")
    .setDescription("backend api for Botostart")
    .setVersion("v3.0.0")
    .addBearerAuth(SwaggerAuthConfig(), "Authorization")
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/swagger", app, swaggerDocument);
};

function SwaggerAuthConfig(): SecuritySchemeObject {
  return {
    type: "http",
    bearerFormat: "JWT",
    in: "header",
    scheme: "bearer",
  };
}

export default SwaggerConfigInit;
