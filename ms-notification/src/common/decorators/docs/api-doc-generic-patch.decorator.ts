import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

export function ApiDocGenericPatch<
  T extends string | (() => any) | [() => any] | Type<unknown> | undefined,
  R extends string | (() => any) | Type<unknown> | [() => any] | undefined,
>(value: string, modelType: T, modelResponse?: R) {
  return applyDecorators(
    ApiOperation({ summary: `Update the ${value} by id` }),
    ApiBody({ type: modelType }),
    ApiOkResponse({
      description: `Data from ${value} requested`,
      type: modelResponse,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Access Denied.' }),
    ApiBearerAuth('JWT'),
  );
}
