// backend/server/api/session/foo.get.ts

import { useSessionX } from "../../utils/sessionHelpers";

export default eventHandler(async (event) => {
  const session = await useSessionX(event);

  await session.update({ ctr: 20 });

  console.log("/api/session/foo", event.context.sessions?.id);
  return {
    route: "/api/session/foo",
    session,
    sessId: event.context.sessions?.id,
  };
});
