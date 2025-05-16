import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (app: INestApplication, environment: string) => {
  if (environment !== 'development') return;

  const docOptions = new DocumentBuilder()
    .setTitle('MicroService Notifications')
    .setDescription('MicroService Notifications API documentation')
    .setVersion('1.0')
    .addTag('notifications')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('docs', app, document);
};
