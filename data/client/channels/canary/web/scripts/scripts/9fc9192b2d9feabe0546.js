"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91134"],
  {
    673223: function (e) {
      e.exports = "/assets/093f68d713db91ced3af.png";
    },
    576184: function (e, s, r) {
      r.r(s);
      var o = r(735250),
        t = r(470079),
        c = r(120356),
        a = r.n(c),
        i = r(613828),
        n = r(481060),
        b = r(710845),
        d = r(361207),
        w = r(954824),
        l = r(981631),
        m = r(689938),
        p = r(420706);
      let f = [
          {
            id: "discord",
            getName: () => m.Z.Messages.DESKTOP_APP,
            url: (0, d.t3)(),
          },
          {
            id: "chrome",
            getName: () => m.Z.Messages.BROWSER_CHROME,
            url: "https://www.google.com/chrome/browser/desktop/",
          },
          {
            id: "firefox",
            getName: () => m.Z.Messages.BROWSER_FIREFOX,
            url: "https://www.mozilla.org/en-US/firefox/new/?scene=2",
          },
        ],
        h = {
          discord: "browserDiscord",
          firefox: "browserFirefox",
          chrome: "browserChrome",
        };
      class x extends t.Component {
        render() {
          let e;
          let { id: s, getName: r, url: t } = this.props.browser;
          return (
            (e =
              null != t
                ? (0, o.jsx)(n.Anchor, {
                    className: p.btn,
                    href: t,
                    children: m.Z.Messages.DOWNLOAD,
                  })
                : (0, o.jsx)(i.rU, {
                    className: p.btn,
                    to: l.Z5c.APPS,
                    children: m.Z.Messages.DOWNLOAD,
                  })),
            (0, o.jsxs)("li", {
              className: p.browserItem,
              children: [
                (0, o.jsx)("div", {
                  className: a()(p.browserItemText, p.browser, p[h[s]]),
                }),
                (0, o.jsx)("div", {
                  className: p.browserItemText,
                  children: r(),
                }),
                e,
              ],
            })
          );
        }
      }
      class u extends t.Component {
        componentDidMount() {
          w.Z.launch("discord://" + this.props.location.pathname, (e) => {
            new b.Z("UnsupportedBrowser").log("discord://", e);
          });
        }
        render() {
          let e = f.map((e) => (0, o.jsx)(x, { browser: e }, e.id));
          return (0, o.jsx)("div", {
            className: p.unsupportedBrowser,
            children: (0, o.jsxs)("div", {
              className: p.wrap,
              children: [
                (0, o.jsx)(n.H, {
                  className: p.title,
                  children: m.Z.Messages.UNSUPPORTED_BROWSER_TITLE,
                }),
                (0, o.jsx)("p", {
                  className: p.message,
                  children: m.Z.Messages.UNSUPPORTED_BROWSER_BODY,
                }),
                (0, o.jsx)("ul", { className: p.browserList, children: e }),
              ],
            }),
          });
        }
      }
      s.default = u;
    },
    420706: function (e, s, r) {
      r.r(
        (e.exports = {
          unsupportedBrowser: "unsupportedBrowser_be70cf",
          wrap: "wrap_be70cf",
          title: "title_be70cf",
          message: "message_be70cf",
          browserList: "browserList_be70cf",
          browserItem: "browserItem_be70cf",
          browser: "browser_be70cf",
          btn: "btn_be70cf",
          browserItemText: "browserItemText_be70cf",
          browserDiscord: "browserDiscord_be70cf",
          browserOpera: "browserOpera_be70cf",
          browserFirefox: "browserFirefox_be70cf",
          browserChrome: "browserChrome_be70cf",
        }),
      );
    },
  },
]);
//# sourceMappingURL=9fc9192b2d9feabe0546.js.map
