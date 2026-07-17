//#region node_modules/.nitro/vite/services/ssr/index.js
var lastError = null;
function consumeLastCapturedError() {
  const err = lastError;
  lastError = null;
  return err;
}
function renderErrorPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Application Error</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; padding: 3rem; text-align: center; background-color: #f7f7f7; color: #171717; }
        h1 { color: #dc2626; font-size: 2rem; margin-bottom: 1rem; }
        p { color: #666; font-size: 1.1rem; }
      </style>
    </head>
    <body>
      <h1>An unexpected error occurred</h1>
      <p>Please check the server logs for more details.</p>
    </body>
    </html>
  `;
}
var serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise)
    serverEntryPromise = import("./server-GPRYwans.mjs").then(
      (m) => m.default ?? m,
    );
  return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
  if (response.status < 500) return response;
  if (
    !(response.headers.get("content-type") ?? "").includes("application/json")
  )
    return response;
  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;
  console.error(
    consumeLastCapturedError() ??
      /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`),
  );
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
function isH3SwallowedErrorBody(body) {
  try {
    const payload = JSON.parse(body);
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}
var server_default = {
  async fetch(request, env, ctx) {
    try {
      return await normalizeCatastrophicSsrResponse(
        await (await getServerEntry()).fetch(request, env, ctx),
      );
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
//#endregion
export { server_default as default, renderErrorPage as t };
