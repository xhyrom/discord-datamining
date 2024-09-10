"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51868"],
  {
    668274: function (e, n, t) {
      t.d(n, {
        N: function () {
          return o;
        },
      });
      var r = t(544891),
        l = t(570140),
        a = t(981631);
      async function o(e) {
        let n = await r.tn.get({ url: a.ANM.STORE_EULA(e), oldFormErrors: !0 });
        l.Z.dispatch({ type: "EULA_FETCH_SUCCESS", eula: n.body });
      }
    },
    796504: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var r = t(735250),
        l = t(470079),
        a = t(442837),
        o = t(481060),
        i = t(668274),
        c = t(600164),
        s = t(241209),
        u = t(807693),
        d = t(689938),
        h = t(75620);
      function f(e) {
        var n;
        let { eulaId: t, transitionState: f, onClose: p } = e,
          g = (0, a.e7)([u.Z], () => u.Z.getEULA(t));
        l.useEffect(() => {
          (0, i.N)(t);
        }, [t]);
        let m =
            null !== (n = null == g ? void 0 : g.name) && void 0 !== n
              ? n
              : d.Z.Messages.LOADING,
          b =
            null != g
              ? (0, r.jsx)(s.Z, { children: g.content, className: h.markdown })
              : (0, r.jsx)(o.Spinner, { className: h.spinner });
        return (0, r.jsxs)(o.ModalRoot, {
          transitionState: f,
          size: o.ModalSize.SMALL,
          "aria-label": m,
          children: [
            (0, r.jsxs)(o.ModalHeader, {
              justify: c.Z.Justify.BETWEEN,
              children: [
                (0, r.jsx)(o.Heading, {
                  variant: "heading-lg/semibold",
                  children: m,
                }),
                (0, r.jsx)(o.ModalCloseButton, { onClick: p }),
              ],
            }),
            (0, r.jsx)(o.ModalContent, { children: b }),
          ],
        });
      }
    },
    770146: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(735250);
      t(470079);
      var l = t(120356),
        a = t.n(l),
        o = t(353947);
      function i(e) {
        let { children: n, tag: t, className: l } = e;
        return (
          (t = null != t ? t : "h3"),
          (0, r.jsx)(t, { className: a()(o.title, l), children: n })
        );
      }
    },
    241209: function (e, n, t) {
      var r,
        l,
        a = t(735250),
        o = t(470079),
        i = t(120356),
        c = t.n(i),
        s = t(302454),
        u = t.n(s),
        d = t(663993),
        h = t(770146),
        f = t(772096),
        p = t(428595),
        g = t(532901),
        m = t(207533),
        b = t(112864);
      function k(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let x = new RegExp(
        "https?://".concat(
          null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : "",
        ),
      );
      function j(e) {
        return "string" == typeof e.content ? e.content : E(e.content);
      }
      let y = {
          ...u().defaultRules,
          heading: {
            ...u().defaultRules.heading,
            react(e, n, t) {
              let r = "h".concat(e.level);
              return (0, a.jsx)(
                h.Z,
                { tag: r, children: n(e.content, t) },
                t.key,
              );
            },
          },
          paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, n, t) =>
              (0, a.jsx)(
                "div",
                { className: m.paragraph, children: n(e.content, t) },
                t.key,
              ),
          },
          strong: { ...u().defaultRules.strong, order: 6 },
          em: { ...u().defaultRules.em, order: 6 },
          u: { ...u().defaultRules.u, order: 5 },
          del: { ...u().defaultRules.del, order: 6 },
          link: {
            ...f.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, n, t) =>
              (0, a.jsx)(
                "blockquote",
                { className: m.blockquote, children: j(e) },
                t.key,
              ),
          },
          image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, n, t) {
              let r = u().defaultRules.image;
              if (null == r || null == r.match) return !1;
              let l = r.match(e, n, t);
              if (null != l && Array.isArray(l) && l.length >= 3) {
                let e = l[2];
                if ("string" == typeof e) return null != e.match(x) ? l : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...p.Z.RULES.inlineCode,
            order: 6,
            react: (e, n, t) =>
              (0, a.jsx)(
                "code",
                { className: m.codeInline, children: j(e) },
                t.key,
              ),
          },
          codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, n, r) {
              let l = () =>
                (0, a.jsx)(
                  "pre",
                  {
                    children: (0, a.jsx)("code", {
                      className: c()(b.scrollbarGhostHairline, "hljs"),
                      children: j(e),
                    }),
                  },
                  r.key,
                );
              return (0, a.jsx)(
                d.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(t.bind(t, 364964)),
                  webpackId: 364964,
                  renderFallback: l,
                  render: (n) => {
                    if (
                      !(e.lang && n.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return l();
                    {
                      let t = n.highlight(e.lang, e.content, !0);
                      return null == t
                        ? l()
                        : (0, a.jsx)(
                            "pre",
                            {
                              children: (0, a.jsx)("code", {
                                className: c()(
                                  b.scrollbarGhostHairline,
                                  "hljs",
                                  t.language,
                                ),
                                dangerouslySetInnerHTML: { __html: t.value },
                              }),
                            },
                            r.key,
                          );
                    }
                  },
                },
                r.key,
              );
            },
          },
        },
        v = u().parserFor(y),
        E = u().reactFor(u().ruleOutput(y, "react"));
      class _ extends (l = o.PureComponent) {
        render() {
          let {
              className: e,
              children: n,
              state: t,
              parser: r,
              output: l,
            } = this.props,
            o = l(r("".concat(n, "\n\n"), { inline: !1, ...t }));
          return (0, a.jsx)("div", {
            className: c()(m.markdown, e),
            children: o,
          });
        }
      }
      k(_, "rules", y),
        k(_, "defaultProps", { parser: v, output: E }),
        (n.Z = _);
    },
    807693: function (e, n, t) {
      var r,
        l,
        a,
        o,
        i = t(442837),
        c = t(570140);
      let s = {};
      class u extends (o = i.ZP.Store) {
        getEULA(e) {
          return s[e];
        }
      }
      (a = "EULAStore"),
        (l = "displayName") in (r = u)
          ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = a),
        (n.Z = new u(c.Z, {
          EULA_FETCH_SUCCESS: function (e) {
            let { eula: n } = e;
            s[n.id] = n;
          },
        }));
    },
    75620: function (e, n, t) {
      e.exports = { spinner: "spinner_abbc33", markdown: "markdown_abbc33" };
    },
    353947: function (e, n, t) {
      e.exports = { title: "title_eaa702" };
    },
    207533: function (e, n, t) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
  },
]);
//# sourceMappingURL=a7457f868de6d34847dd.js.map
