# RetentionPolicyAssignmentsManager

- [List retention policy assignments](#list-retention-policy-assignments)
- [Assign retention policy](#assign-retention-policy)
- [Get retention policy assignment](#get-retention-policy-assignment)
- [Remove retention policy assignment](#remove-retention-policy-assignment)
- [Get files under retention](#get-files-under-retention)
- [Get file versions under retention](#get-file-versions-under-retention)

## List retention policy assignments

Returns a list of all retention policy assignments associated with a specified
retention policy.

This operation is performed by calling function `getRetentionPolicyAssignments`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policies-id-assignments/).

_Currently we don't have an example for calling `getRetentionPolicyAssignments` in integration tests_

### Arguments

- retentionPolicyId `string`
  - The ID of the retention policy. Example: "982312"
- queryParams `GetRetentionPolicyAssignmentsQueryParams`
  - Query parameters of getRetentionPolicyAssignments method
- headers `GetRetentionPolicyAssignmentsHeaders`
  - Headers of getRetentionPolicyAssignments method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `RetentionPolicyAssignments`.

Returns a list of the retention policy assignments associated with the
specified retention policy.

## Assign retention policy

Assigns a retention policy to an item.

This operation is performed by calling function `createRetentionPolicyAssignment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-retention-policy-assignments/).

_Currently we don't have an example for calling `createRetentionPolicyAssignment` in integration tests_

### Arguments

- requestBody `CreateRetentionPolicyAssignmentRequestBody`
  - Request body of createRetentionPolicyAssignment method
- headers `CreateRetentionPolicyAssignmentHeaders`
  - Headers of createRetentionPolicyAssignment method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `RetentionPolicyAssignment`.

Returns a new retention policy assignment object.

## Get retention policy assignment

Retrieves a retention policy assignment

This operation is performed by calling function `getRetentionPolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id/).

_Currently we don't have an example for calling `getRetentionPolicyAssignmentById` in integration tests_

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment. Example: "1233123"
- queryParams `GetRetentionPolicyAssignmentByIdQueryParams`
  - Query parameters of getRetentionPolicyAssignmentById method
- headers `GetRetentionPolicyAssignmentByIdHeaders`
  - Headers of getRetentionPolicyAssignmentById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `RetentionPolicyAssignment`.

Returns the retention policy assignment object.

## Remove retention policy assignment

Removes a retention policy assignment
applied to content.

This operation is performed by calling function `deleteRetentionPolicyAssignmentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-retention-policy-assignments-id/).

_Currently we don't have an example for calling `deleteRetentionPolicyAssignmentById` in integration tests_

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment. Example: "1233123"
- headers `DeleteRetentionPolicyAssignmentByIdHeaders`
  - Headers of deleteRetentionPolicyAssignmentById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the policy assignment
is successfully deleted.

## Get files under retention

Returns a list of files under retention for a retention policy assignment.

This operation is performed by calling function `getFilesUnderRetentionPolicyAssignment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id-files-under-retention/).

_Currently we don't have an example for calling `getFilesUnderRetentionPolicyAssignment` in integration tests_

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment. Example: "1233123"
- queryParams `GetFilesUnderRetentionPolicyAssignmentQueryParams`
  - Query parameters of getFilesUnderRetentionPolicyAssignment method
- headers `GetFilesUnderRetentionPolicyAssignmentHeaders`
  - Headers of getFilesUnderRetentionPolicyAssignment method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FilesUnderRetention`.

Returns a list of files under retention that are associated with the
specified retention policy assignment.

## Get file versions under retention

Returns a list of file versions under retention for a retention policy
assignment.

This operation is performed by calling function `getFileVersionsUnderRetentionPolicyAssignment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-retention-policy-assignments-id-file-versions-under-retention/).

_Currently we don't have an example for calling `getFileVersionsUnderRetentionPolicyAssignment` in integration tests_

### Arguments

- retentionPolicyAssignmentId `string`
  - The ID of the retention policy assignment. Example: "1233123"
- queryParams `GetFileVersionsUnderRetentionPolicyAssignmentQueryParams`
  - Query parameters of getFileVersionsUnderRetentionPolicyAssignment method
- headers `GetFileVersionsUnderRetentionPolicyAssignmentHeaders`
  - Headers of getFileVersionsUnderRetentionPolicyAssignment method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `FilesUnderRetention`.

Returns a list of file versions under retention that are associated with
the specified retention policy assignment.