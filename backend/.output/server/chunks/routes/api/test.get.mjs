import { e as eventHandler, u as useSessionX } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

const test_get = eventHandler(async (event) => {
  const session = await useSessionX(event);
  await session.update({ ctr: Number(session.data.ctr || 0) + 1 });
  return { data: session.data };
});

export { test_get as default };
//# sourceMappingURL=test.get.mjs.map
