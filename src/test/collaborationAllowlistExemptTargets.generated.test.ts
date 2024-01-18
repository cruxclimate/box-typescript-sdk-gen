import { serializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBody } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBody } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { BoxClient } from '../client.generated.js';
import { CollaborationAllowlistExemptTargets } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { CollaborationAllowlistExemptTarget } from '../schemas.generated.js';
import { CreateCollaborationWhitelistExemptTargetRequestBody } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { CreateCollaborationWhitelistExemptTargetRequestBodyUserField } from '../managers/collaborationAllowlistExemptTargets.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('collaborationAllowlistExemptTargets', async function collaborationAllowlistExemptTargets(): Promise<any> {
  const exemptTargets: CollaborationAllowlistExemptTargets =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
  if (!(exemptTargets.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  const user: UserFull = await client.users.createUser({
    name: getUuid(),
    login: ''.concat(getUuid(), '@boxdemo.com') as string,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const newExemptTarget: CollaborationAllowlistExemptTarget =
    await client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget(
      {
        user: {
          id: user.id,
        } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyUserField,
      } satisfies CreateCollaborationWhitelistExemptTargetRequestBody
    );
  if (
    !(
      (toString(newExemptTarget.type) as string) ==
      'collaboration_whitelist_exempt_target'
    )
  ) {
    throw 'Assertion failed';
  }
  if (!(newExemptTarget.user!.id == user.id)) {
    throw 'Assertion failed';
  }
  const exemptTarget: CollaborationAllowlistExemptTarget =
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      newExemptTarget.id!
    );
  if (!(exemptTarget.id == newExemptTarget.id)) {
    throw 'Assertion failed';
  }
  if (!(exemptTarget.user!.id == user.id)) {
    throw 'Assertion failed';
  }
  await client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(
    exemptTarget.id!
  );
  await expect(async () => {
    await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(
      exemptTarget.id!
    );
  }).rejects.toThrow();
  await client.users.deleteUserById(user.id);
});
export {};