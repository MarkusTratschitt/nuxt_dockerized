import { e as eventHandler, u as useSessionX } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

const bar_get = eventHandler(async (event) => {
  var _a, _b;
  const session = await useSessionX(event);
  await session.update({ ctr: Number(session.data.ctr || 0) - 1 });
  console.log("/api/session/bar", (_a = event.context.sessions) == null ? void 0 : _a.id);
  return {
    route: "/api/session/bar",
    session,
    sessId: (_b = event.context.sessions) == null ? void 0 : _b.id
  };
});

export { bar_get as default };
//# sourceMappingURL=bar.get.mjs.map
