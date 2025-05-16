import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericPost(value: string, modelType: Type<unknown>) {
  return applyDecorators(
    ApiCreatedResponse({
      description: `The ${value} successfully created`,
      type: modelType,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Create a new ${value}` }),
  );
}
