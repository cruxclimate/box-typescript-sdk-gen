import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { serializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { serializeUpdateMetadataTemplateRequestBodyOpField } from '../managers/metadataTemplates.generated.js';
import { deserializeUpdateMetadataTemplateRequestBodyOpField } from '../managers/metadataTemplates.generated.js';
import { serializeGetMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeGetMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { deserializeDeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeMetadataFull } from '../schemas.generated.js';
import { deserializeMetadataFull } from '../schemas.generated.js';
import { serializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeCreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { serializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { deserializeDeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { BoxClient } from '../client.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { CreateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsField } from '../managers/metadataTemplates.generated.js';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateRequestBody } from '../managers/metadataTemplates.generated.js';
import { UpdateMetadataTemplateRequestBodyOpField } from '../managers/metadataTemplates.generated.js';
import { GetMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { DeleteMetadataTemplateScope } from '../managers/metadataTemplates.generated.js';
import { FileFull } from '../schemas.generated.js';
import { MetadataFull } from '../schemas.generated.js';
import { CreateFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { GetMetadataTemplatesByInstanceIdQueryParams } from '../managers/metadataTemplates.generated.js';
import { DeleteFileMetadataByIdScope } from '../managers/fileMetadata.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: any = getDefaultClient();
test('testMetadataTemplates', async function testMetadataTemplates(): Promise<any> {
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBody);
  if (!(template.templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(template.displayName == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(template.fields!.length == 1)) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].key == 'testName')) {
    throw 'Assertion failed';
  }
  if (!(template.fields![0].displayName == 'testName')) {
    throw 'Assertion failed';
  }
  const updatedTemplate: any =
    await client.metadataTemplates.updateMetadataTemplate(
      'enterprise' as UpdateMetadataTemplateScope,
      templateKey,
      [
        {
          op: 'addField' as UpdateMetadataTemplateRequestBodyOpField,
          fieldKey: 'newfieldname',
          data: { ['type']: 'string', ['displayName']: 'newFieldName' },
        } satisfies UpdateMetadataTemplateRequestBody,
      ]
    );
  if (!(updatedTemplate.fields!.length == 2)) {
    throw 'Assertion failed';
  }
  if (!(updatedTemplate.fields![1].key == 'newfieldname')) {
    throw 'Assertion failed';
  }
  if (!(updatedTemplate.fields![1].displayName == 'newFieldName')) {
    throw 'Assertion failed';
  }
  const getMetadataTemplate: any =
    await client.metadataTemplates.getMetadataTemplateById(template.id);
  if (!(getMetadataTemplate.id == template.id)) {
    throw 'Assertion failed';
  }
  const getMetadataTemplateSchema: any =
    await client.metadataTemplates.getMetadataTemplate(
      'enterprise' as GetMetadataTemplateScope,
      template.templateKey!
    );
  if (!(getMetadataTemplateSchema.id == template.id)) {
    throw 'Assertion failed';
  }
  const enterpriseMetadataTemplates: any =
    await client.metadataTemplates.getEnterpriseMetadataTemplates();
  if (!(enterpriseMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const globalMetadataTemplates: any =
    await client.metadataTemplates.getGlobalMetadataTemplates();
  if (!(globalMetadataTemplates.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!
  );
  await expect(async () => {
    await client.metadataTemplates.deleteMetadataTemplate(
      'enterprise' as DeleteMetadataTemplateScope,
      template.templateKey!
    );
  }).rejects.toThrow();
});
test('testGetMetadataTemplateByInstance', async function testGetMetadataTemplateByInstance(): Promise<any> {
  const file: any = await uploadNewFile();
  const templateKey: any = ''.concat('key', getUuid()) as string;
  const template: any = await client.metadataTemplates.createMetadataTemplate({
    scope: 'enterprise',
    displayName: templateKey,
    templateKey: templateKey,
    fields: [
      {
        type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        key: 'testName',
        displayName: 'testName',
      } satisfies CreateMetadataTemplateRequestBodyFieldsField,
    ],
  } satisfies CreateMetadataTemplateRequestBody);
  const createdMetadataInstance: any =
    await client.fileMetadata.createFileMetadataById(
      file.id,
      'enterprise' as CreateFileMetadataByIdScope,
      templateKey,
      { ['testName']: 'xyz' }
    );
  const metadataTemplates: any =
    await client.metadataTemplates.getMetadataTemplatesByInstanceId({
      metadataInstanceId: createdMetadataInstance.id!,
    } satisfies GetMetadataTemplatesByInstanceIdQueryParams);
  if (!(metadataTemplates.entries!.length == 1)) {
    throw 'Assertion failed';
  }
  if (!(metadataTemplates.entries![0].displayName == templateKey)) {
    throw 'Assertion failed';
  }
  if (!(metadataTemplates.entries![0].templateKey == templateKey)) {
    throw 'Assertion failed';
  }
  await client.fileMetadata.deleteFileMetadataById(
    file.id,
    'enterprise' as DeleteFileMetadataByIdScope,
    templateKey
  );
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!
  );
  await client.files.deleteFileById(file.id);
});
export {};