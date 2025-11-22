import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // 💡 Write the spec to the root directory
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

  await app.close();
}
bootstrap();
