---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

---
id: "modules"
title: "Wind Waker"
---

# Wind Waker

## Table of contents

### Classes

- [App](classes/app.md)
- [\_Pipeline](classes/_pipeline.md)

### Interfaces

- [InputOptions](interfaces/inputoptions.md)

## Type aliases

### Context

Ƭ **Context**: { `req`: IncomingMessage & *Record*<*string*, *unknown*\> ; `res`: ServerResponse & *Record*<*string*, *unknown*\>  } & *Record*<*string*, *unknown*\>

___

### Pipe

Ƭ **Pipe**: (`ctx`: [*Context*](modules.md#context)) => *void* \| *Promise*<*any*\>

## Functions

### Action

▸ `Const`**Action**(...`pipes`: [*Pipe*](modules.md#pipe)[]): *function*

#### Parameters:

Name | Type |
------ | ------ |
`...pipes` | [*Pipe*](modules.md#pipe)[] |

**Returns:** *function*

___

### Ctx

▸ `Const`**Ctx**(`path?`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`path?` | *string* |

**Returns:** *function*

___

### Headers

▸ `Const`**Headers**(`path?`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`path?` | *string* |

**Returns:** *function*

___

### Input

▸ `Const`**Input**(`arg?`: *undefined* \| *string* \| [*InputOptions*](interfaces/inputoptions.md)): *function*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`arg` | *undefined* \| *string* \| [*InputOptions*](interfaces/inputoptions.md) | ... |

**Returns:** *function*

___

### Pipeline

▸ `Const`**Pipeline**(...`pipes`: [*Pipe*](modules.md#pipe)[]): *function*

#### Parameters:

Name | Type |
------ | ------ |
`...pipes` | [*Pipe*](modules.md#pipe)[] |

**Returns:** *function*

___

### Req

▸ `Const`**Req**(`path?`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`path?` | *string* |

**Returns:** *function*

___

### Res

▸ `Const`**Res**(`path?`: *string*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`path?` | *string* |

**Returns:** *function*

___

### Service

▸ `Const`**Service**(): *function*

**Returns:** *function*

___

### action

▸ `Const`**action**(`name`: *any*, `fn`: *any*, `options?`: *any*): *object*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | *any* | - |
`fn` | *any* | - |
`options` | *any* | ... |

**Returns:** *object*

Name | Type |
------ | ------ |
`pipe` | (`pipe`: *any*) => *any* |

___

### code

▸ `Const`**code**(`statusCode`: *number*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`statusCode` | *number* |

**Returns:** *function*

___

### cors

▸ `Const`**cors**(`options?`: CorsOptions): [*Pipe*](modules.md#pipe)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | CorsOptions | ... |

**Returns:** [*Pipe*](modules.md#pipe)

___

### decorate

▸ `Const`**decorate**(`pipe`: *any*): *function*

#### Parameters:

Name | Type |
------ | ------ |
`pipe` | *any* |

**Returns:** *function*

___

### express

▸ `Const`**express**(`pipe`: ExpressMiddleware): [*Pipe*](modules.md#pipe)

Provides compatibility with express middlewares

#### Parameters:

Name | Type |
------ | ------ |
`pipe` | ExpressMiddleware |

**Returns:** [*Pipe*](modules.md#pipe)

___

### helmet

▸ `Const`**helmet**(`options?`: HelmetOptions): [*Pipe*](modules.md#pipe)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | HelmetOptions | ... |

**Returns:** [*Pipe*](modules.md#pipe)

___

### parse

▸ `Const`**parse**(`options?`: Options): *function*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | Options | ... |

**Returns:** *function*

___

### useService

▸ `Const`**useService**<T\>(`service`: () => T): T

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *any* |

#### Parameters:

Name | Type |
------ | ------ |
`service` | () => T |

**Returns:** T
