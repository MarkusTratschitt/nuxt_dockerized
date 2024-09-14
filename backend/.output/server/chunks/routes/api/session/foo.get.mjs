import { e as eventHandler, u as useSessionX } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

const foo_get = eventHandler(async (event) => {
  var _a, _b;
  const session = await useSessionX(event);
  await session.update({ ctr: 20 });
  console.log("/api/session/foo", (_a = event.context.sessions) == null ? void 0 : _a.id);
  return {
    route: "/api/session/foo",
    session,
    sessId: (_b = event.context.sessions) == null ? void 0 : _b.id
  };
});

export { foo_get as default };
//# sourceMappingURL=foo.get.mjs.map
