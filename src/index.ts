// Polyfill DOM env for mithril
import m, { RouteResolver } from "mithril";

import Resolver from "./mithril-zeroframe-router";
import zeroframe from "./ZeroFrame"

// Route components
import Maps from "./components/maps";
import About from "./components/about";

/*
m.render(document.body, [
    m("ZAME!"),
    m("a", {href: "/", config: m.route}, "Browse"),
    m("a", {href: "/about", config: m.route}, "About"),
    m("div", {"id": "main-body"}),
]);*/

// Set mithril's default RouteResolver to zeroframeRouter, which allows
// interoperability with ZeroNet's iframe-based design. (See
// mithril-zeroframe-router.ts for more details)
zeroframe.cmd("wrapperInnerLoaded", []);
m.route(document.body, "/", {
    "/": Resolver(Maps),
    "/about": Resolver(About),
});
