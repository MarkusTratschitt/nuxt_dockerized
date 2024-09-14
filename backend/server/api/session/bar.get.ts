// backend/server/api/session/bar.get.ts

import { useSessionX } from "../../utils/sessionHelpers";

export default eventHandler(async (event) => {
  /*
  const session = await useSession<iSessionrRet>(
    event,
    useRuntimeConfig().session
  );*/
  const session = await useSessionX(event);

  await session.update({ ctr: Number(session.data.ctr || 0) - 1 });

  console.log("/api/session/bar", event.context.sessions?.id);
  return {
    route: "/api/session/bar",
    session,
    sessId: event.context.sessions?.id,
  };
});
