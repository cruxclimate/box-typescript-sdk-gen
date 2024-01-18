import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { serializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkByIdRequestBody } from '../managers/webLinks.generated.js';
import { deserializeUpdateWebLinkByIdRequestBody } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkByIdRequestBodySharedLinkField } from '../managers/webLinks.generated.js';
import { deserializeUpdateWebLinkByIdRequestBodySharedLinkField } from '../managers/webLinks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { CreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { UpdateWebLinkByIdRequestBody } from '../managers/webLinks.generated.js';
import { UpdateWebLinkByIdRequestBodySharedLinkField } from '../managers/webLinks.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: any = getDefaultClient();
test('test_create_get_delete_weblink', async function test_create_get_delete_weblink(): Promise<any> {
  const url: any = 'https://www.box.com';
  const parent: any = await client.folders.getFolderById('0');
  const name: any = getUuid();
  const description: any = 'Weblink description';
  const sharedAccess: any = 'open';
  const password: any = 'super-secret-password';
  const weblink: any = await client.webLinks.createWebLink({
    url: url,
    parent: { id: parent.id } satisfies CreateWebLinkRequestBodyParentField,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBody);
  if (!(weblink.url == url)) {
    throw 'Assertion failed';
  }
  if (!(weblink.parent!.id == parent.id)) {
    throw 'Assertion failed';
  }
  if (!(weblink.name == name)) {
    throw 'Assertion failed';
  }
  if (!(weblink.description == description)) {
    throw 'Assertion failed';
  }
  const weblinkById: any = await client.webLinks.getWebLinkById(weblink.id);
  if (!(weblinkById.id == weblink.id)) {
    throw 'Assertion failed';
  }
  if (!(weblinkById.url == url)) {
    throw 'Assertion failed';
  }
  const updatedName: any = getUuid();
  const updatedWeblink: any = await client.webLinks.updateWebLinkById(
    weblink.id,
    {
      name: updatedName,
      sharedLink: {
        access: sharedAccess,
        password: password,
      } satisfies UpdateWebLinkByIdRequestBodySharedLinkField,
    } satisfies UpdateWebLinkByIdRequestBody
  );
  if (!(updatedWeblink.name == updatedName)) {
    throw 'Assertion failed';
  }
  if (!(updatedWeblink.sharedLink!.access! == sharedAccess)) {
    throw 'Assertion failed';
  }
  await client.webLinks.deleteWebLinkById(weblink.id);
  const deletedWeblink: any = await client.webLinks.getWebLinkById(weblink.id);
  if (!(deletedWeblink.itemStatus! == 'trashed')) {
    throw 'Assertion failed';
  }
});
export {};