import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericGetAll<T>(value: string, modelType: new () => T) {
  return applyDecorators(
    ApiOkResponse({
      description: `Returns all data from ${value}`,
      type: modelType,
      isArray: true,
    }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Return all from ${value}` }),
    ApiBearerAuth('JWT'),
  );
}
