import "../_runtime.mjs";
import {
  N as require_react,
  c as HeadContent,
  d as createRouter,
  f as Outlet,
  g as require_jsx_runtime,
  h as createRootRouteWithContext,
  l as ScrollRestoration,
  m as createFileRoute,
  p as lazyRouteComponent,
  s as Scripts,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Route$1 = createRootRouteWithContext()({ component: RootComponent });
function RootComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
            charSet: "utf-8",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
            children: "TanStack Start App",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
        ],
      }),
    ],
  });
}
var $$splitComponentImporter = () => import("./routes-Dw6rdccP.mjs");
var rootRouteChildren = {
  IndexRoute: createFileRoute("/")({
    component: lazyRouteComponent($$splitComponentImporter, "component"),
  }).update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$1,
  }),
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
