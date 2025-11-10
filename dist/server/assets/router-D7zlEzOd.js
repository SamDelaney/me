import { Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Menu, X, Home, SquareFunction, Network, StickyNote, ChevronDown, ChevronRight } from "lucide-react";
import { j as json } from "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [groupedExpanded, setGroupedExpanded] = useState({});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "relative z-50 p-4 flex items-center bg-gray-800 text-white shadow-lg", children: [
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
                to: "/writings",
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
                to: "/qualifications",
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
                  to: "/work",
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
                  to: "/work/blockchain",
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
                  to: "/work/blockchain",
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
                  to: "/work/language-software",
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
const appCss = "/me/assets/styles-zBCbQ_Aq.css";
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
const $$splitComponentImporter$6 = () => import("./writings-BrSmi35u.js");
const Route$7 = createFileRoute("/writings")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./work-DtgufYS1.js");
const Route$6 = createFileRoute("/work")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./qualifications-DqWw5Usr.js");
const Route$5 = createFileRoute("/qualifications")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-DMhiiHWB.js");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./language-software-lEDadmK9.js");
const Route$3 = createFileRoute("/work/language-software")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cryptography-BbQ7RJZo.js");
const Route$2 = createFileRoute("/work/cryptography")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./blockchain-BEc22Sl8.js");
const Route$1 = createFileRoute("/work/blockchain")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Route = createFileRoute("/work/api/names")({
  server: {
    handlers: {
      GET: () => json(["Alice", "Bob", "Charlie"])
    }
  }
});
const WritingsRoute = Route$7.update({
  id: "/writings",
  path: "/writings",
  getParentRoute: () => Route$8
});
const WorkRoute = Route$6.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$8
});
const QualificationsRoute = Route$5.update({
  id: "/qualifications",
  path: "/qualifications",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const WorkLanguageSoftwareRoute = Route$3.update({
  id: "/language-software",
  path: "/language-software",
  getParentRoute: () => WorkRoute
});
const WorkCryptographyRoute = Route$2.update({
  id: "/cryptography",
  path: "/cryptography",
  getParentRoute: () => WorkRoute
});
const WorkBlockchainRoute = Route$1.update({
  id: "/blockchain",
  path: "/blockchain",
  getParentRoute: () => WorkRoute
});
const WorkApiNamesRoute = Route.update({
  id: "/api/names",
  path: "/api/names",
  getParentRoute: () => WorkRoute
});
const WorkRouteChildren = {
  WorkBlockchainRoute,
  WorkCryptographyRoute,
  WorkLanguageSoftwareRoute,
  WorkApiNamesRoute
};
const WorkRouteWithChildren = WorkRoute._addFileChildren(WorkRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  QualificationsRoute,
  WorkRoute: WorkRouteWithChildren,
  WritingsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};
export {
  getRouter
};
