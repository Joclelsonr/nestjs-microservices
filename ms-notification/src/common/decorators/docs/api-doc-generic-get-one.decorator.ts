import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericGetOne<T>(value: string, modelType: new () => T) {
  return applyDecorators(
    ApiOkResponse({
      description: `Data from ${value} requested`,
      type: modelType,
    }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Return the ${value} by id` }),
    ApiBearerAuth('JWT'),
  );
}
