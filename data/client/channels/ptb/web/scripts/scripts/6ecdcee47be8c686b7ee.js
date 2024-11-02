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
        s = n(857595),
        r = n(607070),
        d = n(886036),
        b = n(877794),
        p = n(695346),
        f = n(626135),
        h = n(358085),
        m = n(998502),
        E = n(887490),
        g = n(981631),
        x = n(388032);
      function k(t) {
        var e, n, k, M, C, v, S, I, T;
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
          [_, O] = (0, b.Z)({ text: j, target: Z, onHeightUpdate: G }),
          A = (0, c.e7)([r.Z], () => r.Z.isSubmitButtonEnabled),
          D = (0, d.Z)(),
          P = p.Xk.useSetting();
        if (!h.isPlatformEmbedded) return null;
        let R =
            null !==
              (S =
                null === (n = L.chatInputType) || void 0 === n
                  ? void 0
                  : null === (e = n.commands) || void 0 === e
                    ? void 0
                    : e.enabled) &&
            void 0 !== S &&
            S,
          H =
            null !==
              (I =
                null === (M = L.chatInputType) || void 0 === M
                  ? void 0
                  : null === (k = M.stickers) || void 0 === k
                    ? void 0
                    : k.autoSuggest) &&
            void 0 !== I &&
            I,
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
                      label: x.intl.string(x.t.OpuAlJ),
                      hint: (0, h.isMac)() ? "⌘C" : "Ctrl+C",
                      action: () => setTimeout(() => m.ZP.copy(), 0),
                    },
                    "copy",
                  ),
                  (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "cut",
                      label: x.intl.string(x.t.pNPVhY),
                      hint: (0, h.isMac)() ? "⌘X" : "Ctrl+X",
                      action: () => setTimeout(() => m.ZP.cut(), 0),
                    },
                    "cut",
                  ),
                ]
              : null,
          W = (0, i.jsx)(o.MenuCheckboxItem, {
            id: "command-suggestions",
            label: x.intl.string(x.t["9rJKFx"]),
            checked: P,
            action: () => {
              let t = !P;
              p.Xk.updateSetting(t),
                f.default.track(g.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                  enabled: t,
                  location: { object: g.qAy.CONTEXT_MENU },
                });
            },
          });
        return (0, i.jsxs)(o.Menu, {
          navId: "textarea-context",
          onClose: y,
          "aria-label": x.intl.string(x.t.NWlDSE),
          onSelect: N,
          children: [
            K &&
              (0, i.jsxs)(o.MenuItem, {
                id: "suggestions",
                label: x.intl.string(x.t.zgxg7u),
                children: [H && D, R && W],
              }),
            X &&
              (0, i.jsx)(o.MenuCheckboxItem, {
                id: "submit-button",
                label: x.intl.string(x.t.G8XDys),
                checked: A,
                action: () => {
                  (0, s.eN)();
                },
              }),
            (0, i.jsx)(o.MenuGroup, { children: _ }),
            (0, i.jsx)(o.MenuGroup, { children: O }),
            (0, i.jsxs)(o.MenuGroup, {
              children: [
                U,
                (0, i.jsx)(o.MenuItem, {
                  id: "paste",
                  label: x.intl.string(x.t.lMUxVl),
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
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        u = n(906732),
        c = n(695346),
        o = n(626135),
        a = n(981631),
        s = n(388032);
      function r() {
        let t = c.up.useSetting(),
          { analyticsLocations: e } = (0, u.ZP)();
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: s.intl.string(s.t.rIzKh4),
          checked: t,
          action: () => {
            o.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
              enabled: !t,
              location: { object: a.qAy.CONTEXT_MENU },
              location_stack: e,
            }),
              c.up.updateSetting(!t);
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
        u = n(374470),
        c = n(442837),
        o = n(481060),
        a = n(295866),
        s = n(398327),
        r = n(63063),
        d = n(601993),
        b = n(981631),
        p = n(388032);
      function f(t) {
        let { text: e = "", target: n } = t,
          f = (0, c.e7)([s.Z], () => s.Z.isEnabled()),
          h = (0, c.e7)([s.Z], () => s.Z.hasLearnedWord(e), [e]),
          m = l.useRef({ ...t, spellcheckEnabled: f });
        m.current = { ...t, spellcheckEnabled: f };
        let E = l.useRef(!1),
          [g, x] = l.useState(!1),
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
                E.current && (x(e), M(i), n());
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
        let S = k.map((t, e) =>
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
          S,
          (0, i.jsxs)(i.Fragment, {
            children: [
              g
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
                      window.open(r.Z.getArticleURL(b.BhN.SPELLCHECK)),
                  })
                : null,
            ],
          }),
        ];
      }
    },
  },
]);
//# sourceMappingURL=6ecdcee47be8c686b7ee.js.map
