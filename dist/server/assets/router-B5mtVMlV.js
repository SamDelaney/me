import { Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Menu, X, Home, SquareFunction, Network, StickyNote, ChevronDown, ChevronRight } from "lucide-react";
import { c as createServerFn, a as createServerRpc, j as json } from "../server.js";
import fs from "node:fs";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [groupedExpanded, setGroupedExpanded] = useState({});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "p-4 flex items-center bg-gray-800 text-white shadow-lg", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(true),
          className: "p-2 hover:bg-gray-700 rounded-lg transition-colors",
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "ml-4 mt-2 text-4xl font-semibold font-bitcount text-green-300", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("h1", { children: "Sam Delaney" }) }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-700", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Navigation" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "p-2 hover:bg-gray-800 rounded-lg transition-colors",
                "aria-label": "Close menu",
                children: /* @__PURE__ */ jsx(X, { size: 24 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "flex-1 p-4 overflow-y-auto", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/",
                onClick: () => setIsOpen(false),
                className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                activeProps: {
                  className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                },
                children: [
                  /* @__PURE__ */ jsx(Home, { size: 20 }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Home" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/demo/start/server-funcs",
                onClick: () => setIsOpen(false),
                className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                activeProps: {
                  className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                },
                children: [
                  /* @__PURE__ */ jsx(SquareFunction, { size: 20 }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Writings" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/demo/start/api-request",
                onClick: () => setIsOpen(false),
                className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                activeProps: {
                  className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                },
                children: [
                  /* @__PURE__ */ jsx(Network, { size: 20 }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Qualifications" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/demo/start/ssr",
                  onClick: () => setIsOpen(false),
                  className: "flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                  activeProps: {
                    className: "flex-1 flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                  },
                  children: [
                    /* @__PURE__ */ jsx(StickyNote, { size: 20 }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "My Work" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "p-2 hover:bg-gray-800 rounded-lg transition-colors",
                  onClick: () => setGroupedExpanded((prev) => ({
                    ...prev,
                    StartSSRDemo: !prev.StartSSRDemo
                  })),
                  children: groupedExpanded.StartSSRDemo ? /* @__PURE__ */ jsx(ChevronDown, { size: 20 }) : /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
                }
              )
            ] }),
            groupedExpanded.StartSSRDemo && /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-4", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/demo/start/ssr/spa-mode",
                  onClick: () => setIsOpen(false),
                  className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                  activeProps: {
                    className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                  },
                  children: [
                    /* @__PURE__ */ jsx(SquareFunction, { size: 20 }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Blockchain" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/demo/start/ssr/full-ssr",
                  onClick: () => setIsOpen(false),
                  className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                  activeProps: {
                    className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                  },
                  children: [
                    /* @__PURE__ */ jsx(StickyNote, { size: 20 }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Language Software" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/demo/start/ssr/data-only",
                  onClick: () => setIsOpen(false),
                  className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
                  activeProps: {
                    className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
                  },
                  children: [
                    /* @__PURE__ */ jsx(StickyNote, { size: 20 }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Cryptography" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const appCss = "/me/assets/styles-9_6Vv-uc.css";
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./index-Buz5WAL6.js");
const Route$7 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./start.server-funcs-CEGQsrHR.js");
const TODOS_FILE = "todos.json";
async function readTodos() {
  return JSON.parse(await fs.promises.readFile(TODOS_FILE, "utf-8").catch(() => JSON.stringify([{
    id: 1,
    name: "Get groceries"
  }, {
    id: 2,
    name: "Buy a new phone"
  }], null, 2)));
}
const getTodos_createServerFn_handler = createServerRpc("c9d51a5243700889c80f82ed57a4ce74b25f188e5ebd534c9c64965dc44e8e8d", (opts, signal) => {
  return getTodos.__executeServer(opts, signal);
});
const getTodos = createServerFn({
  method: "GET"
}).handler(getTodos_createServerFn_handler, async () => await readTodos());
const Route$6 = createFileRoute("/demo/start/server-funcs")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: async () => await getTodos()
});
const $$splitComponentImporter$4 = () => import("./start.api-request-DhPN1_Dc.js");
const Route$5 = createFileRoute("/demo/start/api-request")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const Route$4 = createFileRoute("/demo/api/names")({
  server: {
    handlers: {
      GET: () => json(["Alice", "Bob", "Charlie"])
    }
  }
});
const $$splitComponentImporter$3 = () => import("./start.ssr.index-BmCCCK3g.js");
const Route$3 = createFileRoute("/demo/start/ssr/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./start.ssr.spa-mode-DKE-AfXl.js");
const Route$2 = createFileRoute("/demo/start/ssr/spa-mode")({
  ssr: false,
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getPunkSongs_createServerFn_handler = createServerRpc("f74da881407a186b78a7af058df21dafb0126eb11e5a4d54fd322e8feb5038f1", (opts, signal) => {
  return getPunkSongs.__executeServer(opts, signal);
});
const getPunkSongs = createServerFn({
  method: "GET"
}).handler(getPunkSongs_createServerFn_handler, async () => [{
  id: 1,
  name: "Teenage Dirtbag",
  artist: "Wheatus"
}, {
  id: 2,
  name: "Smells Like Teen Spirit",
  artist: "Nirvana"
}, {
  id: 3,
  name: "The Middle",
  artist: "Jimmy Eat World"
}, {
  id: 4,
  name: "My Own Worst Enemy",
  artist: "Lit"
}, {
  id: 5,
  name: "Fat Lip",
  artist: "Sum 41"
}, {
  id: 6,
  name: "All the Small Things",
  artist: "blink-182"
}, {
  id: 7,
  name: "Beverly Hills",
  artist: "Weezer"
}]);
const $$splitComponentImporter$1 = () => import("./start.ssr.full-ssr-BL5SG67r.js");
const Route$1 = createFileRoute("/demo/start/ssr/full-ssr")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => await getPunkSongs()
});
const $$splitComponentImporter = () => import("./start.ssr.data-only-BMs9SA93.js");
const Route = createFileRoute("/demo/start/ssr/data-only")({
  ssr: "data-only",
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async () => await getPunkSongs()
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const DemoStartServerFuncsRoute = Route$6.update({
  id: "/demo/start/server-funcs",
  path: "/demo/start/server-funcs",
  getParentRoute: () => Route$8
});
const DemoStartApiRequestRoute = Route$5.update({
  id: "/demo/start/api-request",
  path: "/demo/start/api-request",
  getParentRoute: () => Route$8
});
const DemoApiNamesRoute = Route$4.update({
  id: "/demo/api/names",
  path: "/demo/api/names",
  getParentRoute: () => Route$8
});
const DemoStartSsrIndexRoute = Route$3.update({
  id: "/demo/start/ssr/",
  path: "/demo/start/ssr/",
  getParentRoute: () => Route$8
});
const DemoStartSsrSpaModeRoute = Route$2.update({
  id: "/demo/start/ssr/spa-mode",
  path: "/demo/start/ssr/spa-mode",
  getParentRoute: () => Route$8
});
const DemoStartSsrFullSsrRoute = Route$1.update({
  id: "/demo/start/ssr/full-ssr",
  path: "/demo/start/ssr/full-ssr",
  getParentRoute: () => Route$8
});
const DemoStartSsrDataOnlyRoute = Route.update({
  id: "/demo/start/ssr/data-only",
  path: "/demo/start/ssr/data-only",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  DemoApiNamesRoute,
  DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute,
  DemoStartSsrDataOnlyRoute,
  DemoStartSsrFullSsrRoute,
  DemoStartSsrSpaModeRoute,
  DemoStartSsrIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$6 as R,
  Route$1 as a,
  Route as b,
  getPunkSongs as g,
  router as r
};
