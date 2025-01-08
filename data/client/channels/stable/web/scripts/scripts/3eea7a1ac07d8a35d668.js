"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41984"],
  {
    295866: function (t, e, n) {
      n.d(e, {
        D0: function () {
          return u;
        },
        kY: function () {
          return l;
        },
        lE: function () {
          return c;
        },
      });
      var i = n(570140);
      function l() {
        i.Z.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function u(t) {
        i.Z.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
      }
      function c(t) {
        i.Z.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
      }
    },
    343602: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return k;
          },
        }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        u = n(270445),
        c = n(442837),
        o = n(481060),
        a = n(239091),
        r = n(857595),
        s = n(607070),
        d = n(886036),
        b = n(877794),
        p = n(695346),
        f = n(626135),
        h = n(358085),
        m = n(998502),
        E = n(887490),
        x = n(981631),
        g = n(388032);
      function k(t) {
        var e, n, k, M, C, v, I, S, T;
        let {
            text: j,
            editor: L,
            target: Z,
            onHeightUpdate: G,
            onSelect: N,
          } = t,
          y = l.useCallback(() => {
            (0, a.Zy)(() => {
              u.F3.focus(L), setTimeout(() => E.bN.focus(L), 0);
            });
          }, [L]),
          [_, A] = (0, b.Z)({ text: j, target: Z, onHeightUpdate: G }),
          O = (0, c.e7)([s.Z], () => s.Z.isSubmitButtonEnabled),
          D = (0, d.Z)(),
          P = p.Xk.useSetting();
        if (!h.isPlatformEmbedded) return null;
        let R =
            null !==
              (I =
                null === (n = L.chatInputType) || void 0 === n
                  ? void 0
                  : null === (e = n.commands) || void 0 === e
                    ? void 0
                    : e.enabled) &&
            void 0 !== I &&
            I,
          H =
            null !==
              (S =
                null === (M = L.chatInputType) || void 0 === M
                  ? void 0
                  : null === (k = M.stickers) || void 0 === k
                    ? void 0
                    : k.autoSuggest) &&
            void 0 !== S &&
            S,
          X =
            null !==
              (T =
                null === (v = L.chatInputType) || void 0 === v
                  ? void 0
                  : null === (C = v.submit) || void 0 === C
                    ? void 0
                    : C.button) &&
            void 0 !== T &&
            T,
          K = R || H,
          U =
            "" !== j
              ? [
                  (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "copy",
                      label: g.intl.string(g.t.OpuAlJ),
                      hint: (0, h.isMac)() ? "⌘C" : "Ctrl+C",
                      action: () => setTimeout(() => m.ZP.copy(), 0),
                    },
                    "copy",
                  ),
                  (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "cut",
                      label: g.intl.string(g.t.pNPVhY),
                      hint: (0, h.isMac)() ? "⌘X" : "Ctrl+X",
                      action: () => setTimeout(() => m.ZP.cut(), 0),
                    },
                    "cut",
                  ),
                ]
              : null,
          W = (0, i.jsx)(o.MenuCheckboxItem, {
            id: "command-suggestions",
            label: g.intl.string(g.t["9rJKFx"]),
            checked: P,
            action: () => {
              let t = !P;
              p.Xk.updateSetting(t),
                f.default.track(x.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                  enabled: t,
                  location: { object: x.qAy.CONTEXT_MENU },
                });
            },
          });
        return (0, i.jsxs)(o.Menu, {
          navId: "textarea-context",
          onClose: y,
          "aria-label": g.intl.string(g.t.NWlDSE),
          onSelect: N,
          children: [
            K &&
              (0, i.jsxs)(o.MenuItem, {
                id: "suggestions",
                label: g.intl.string(g.t.zgxg7u),
                children: [H && D, R && W],
              }),
            X &&
              (0, i.jsx)(o.MenuCheckboxItem, {
                id: "submit-button",
                label: g.intl.string(g.t.G8XDys),
                checked: O,
                action: () => {
                  (0, r.eN)();
                },
              }),
            (0, i.jsx)(o.MenuGroup, { children: _ }),
            (0, i.jsx)(o.MenuGroup, { children: A }),
            (0, i.jsxs)(o.MenuGroup, {
              children: [
                U,
                (0, i.jsx)(o.MenuItem, {
                  id: "paste",
                  label: g.intl.string(g.t.lMUxVl),
                  hint: (0, h.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => m.ZP.paste(), 0),
                }),
              ],
            }),
          ],
        });
      }
    },
    886036: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        u = n(906732),
        c = n(278754),
        o = n(626135),
        a = n(981631),
        r = n(388032);
      function s() {
        let t = (0, c.pR)(),
          { analyticsLocations: e } = (0, u.ZP)();
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: r.intl.string(r.t.rIzKh4),
          checked: t,
          action: () => {
            o.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
              enabled: !t,
              location: { object: a.qAy.CONTEXT_MENU },
              location_stack: e,
            }),
              (0, c.AW)(!t);
          },
        });
      }
    },
    877794: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        u = n(513431),
        c = n(442837),
        o = n(481060),
        a = n(295866),
        r = n(398327),
        s = n(63063),
        d = n(601993),
        b = n(981631),
        p = n(388032);
      function f(t) {
        let { text: e = "", target: n } = t,
          f = (0, c.e7)([r.Z], () => r.Z.isEnabled()),
          h = (0, c.e7)([r.Z], () => r.Z.hasLearnedWord(e), [e]),
          m = l.useRef({ ...t, spellcheckEnabled: f });
        m.current = { ...t, spellcheckEnabled: f };
        let E = l.useRef(!1),
          [x, g] = l.useState(!1),
          [k, M] = l.useState([]),
          C = l.useCallback(() => {
            let {
              spellcheckEnabled: t,
              text: e,
              onHeightUpdate: n,
            } = m.current;
            t &&
              (0, d.Gb)() &&
              Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                let [e, i] = t;
                E.current && (g(e), M(i), n());
              });
          }, []),
          v = l.useCallback(() => {
            if (
              (0, u.k)(n, HTMLInputElement) ||
              (0, u.k)(n, HTMLTextAreaElement)
            ) {
              let { selectionStart: t, selectionEnd: e, value: i } = n;
              (n.value = ""),
                (n.value = i),
                "email" !== n.type &&
                  ((n.selectionStart = t), (n.selectionEnd = e));
            }
          }, [n]);
        if (
          (l.useEffect(() => {
            let t = (0, d.RD)(C);
            return (
              (E.current = !0),
              () => {
                (E.current = !1), t();
              }
            );
          }, [C]),
          l.useEffect(() => {
            C();
          }, [e, f, C]),
          !(0, d.Gb)())
        )
          return [null, null];
        let I = k.map((t, e) =>
          (0, i.jsx)(
            o.MenuItem,
            {
              id: "correction-".concat(e),
              label: t,
              action: () => {
                (0, d.Rs)(t), n.focus();
              },
            },
            "correction-".concat(e),
          ),
        );
        return [
          I,
          (0, i.jsxs)(i.Fragment, {
            children: [
              x
                ? (0, i.jsx)(o.MenuItem, {
                    id: "add-to-dictionary",
                    label: p.intl.string(p.t.HJmG1N),
                    action: () => {
                      (0, a.D0)(e), v();
                    },
                  })
                : null,
              h &&
                (0, i.jsx)(o.MenuItem, {
                  id: "remove-from-dictionary",
                  label: p.intl.string(p.t.xXqIX1),
                  action: () => {
                    (0, a.lE)(e), v();
                  },
                }),
              (0, i.jsx)(o.MenuCheckboxItem, {
                id: "spellcheck",
                label: p.intl.string(p.t.TKkotb),
                checked: f,
                action: () => {
                  (0, a.kY)(), v();
                },
              }),
              f
                ? (0, i.jsx)(o.MenuItem, {
                    id: "languages",
                    label: p.intl.string(p.t.OlOHDA),
                    action: () =>
                      window.open(s.Z.getArticleURL(b.BhN.SPELLCHECK)),
                  })
                : null,
            ],
          }),
        ];
      }
    },
  },
]);
//# sourceMappingURL=3eea7a1ac07d8a35d668.js.map
