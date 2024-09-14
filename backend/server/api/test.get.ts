//backend/server/api/test.get.ts

import { useSessionX } from "../utils/sessionHelpers";  // Import custom session helper for session management

export default eventHandler(async (event) => {
  // Retrieve the session data using the custom session helper
  const session = await useSessionX(event);

  // Update the session by incrementing the 'ctr' property by 1
  // If 'ctr' does not exist, it initializes it to 0 before incrementing
  await session.update({ ctr: Number(session.data.ctr || 0) + 1 });
  
  // Return the updated session data
  return { data: session.data };
});
