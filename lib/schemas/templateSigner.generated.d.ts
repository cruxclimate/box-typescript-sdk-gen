import { TemplateSignerInput } from './templateSignerInput.generated.js';
import { SerializedData } from '../serialization/json.js';
export type TemplateSignerRoleField = 'signer' | 'approver' | 'final_copy_reader';
export interface TemplateSigner {
    readonly inputs?: readonly TemplateSignerInput[];
    /**
     * Email address of the signer */
    readonly email?: string | null;
    /**
     * Defines the role of the signer in the signature request. A role of
     * `signer` needs to sign the document, a role `approver`
     * approves the document and
     * a `final_copy_reader` role only
     * receives the final signed document and signing log. */
    readonly role?: TemplateSignerRoleField;
    /**
     * Used in combination with an embed URL for a sender.
     * After the sender signs, they will be
     * redirected to the next `in_person` signer. */
    readonly isInPerson?: boolean;
    /**
     * Order of the signer */
    readonly order?: number;
    /**
     * If provided, this value points signers that are assigned the same inputs and belongs to same signer group.
     * A signer group is not a Box Group. It is an entity that belongs to the template itself and can only be used
     * within Box Sign requests created from it. */
    readonly signerGroupId?: string | null;
    /**
     * A placeholder label for the signer set by the template creator to differentiate between signers. */
    readonly label?: string | null;
    /**
     * An identifier for the signer. This can be used to identify a signer within the template. */
    readonly publicId?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeTemplateSignerRoleField(val: TemplateSignerRoleField): SerializedData;
export declare function deserializeTemplateSignerRoleField(val: SerializedData): TemplateSignerRoleField;
export declare function serializeTemplateSigner(val: TemplateSigner): SerializedData;
export declare function deserializeTemplateSigner(val: SerializedData): TemplateSigner;
