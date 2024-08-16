"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41984"],
  {
    295866: function (e, t, n) {
      n.d(t, {
        D0: function () {
          return i;
        },
        kY: function () {
          return u;
        },
        lE: function () {
          return l;
        },
      });
      var s = n(570140);
      function u() {
        s.Z.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function i(e) {
        s.Z.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: e });
      }
      function l(e) {
        s.Z.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: e });
      }
    },
    343602: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var s = n(735250),
        u = n(470079),
        i = n(519953),
        l = n(442837),
        a = n(481060),
        c = n(239091),
        o = n(857595),
        r = n(607070),
        d = n(886036),
        E = n(877794),
        M = n(695346),
        S = n(626135),
        T = n(358085),
        b = n(998502),
        C = n(887490),
        p = n(981631),
        f = n(689938);
      function m(e) {
        var t, n, m, h, Z, _, I, g, A;
        let {
            text: k,
            editor: x,
            target: v,
            onHeightUpdate: L,
            onSelect: N,
          } = e,
          G = u.useCallback(() => {
            (0, c.Zy)(() => {
              i.F3.focus(x), setTimeout(() => C.bN.focus(x), 0);
            });
          }, [x]),
          [O, j] = (0, E.Z)({ text: k, target: v, onHeightUpdate: L }),
          R = (0, l.e7)([r.Z], () => r.Z.isSubmitButtonEnabled),
          y = (0, d.Z)(),
          D = M.Xk.useSetting();
        if (!T.isPlatformEmbedded) return null;
        let U =
            null !==
              (I =
                null === (n = x.chatInputType) || void 0 === n
                  ? void 0
                  : null === (t = n.commands) || void 0 === t
                    ? void 0
                    : t.enabled) &&
            void 0 !== I &&
            I,
          P =
            null !==
              (g =
                null === (h = x.chatInputType) || void 0 === h
                  ? void 0
                  : null === (m = h.stickers) || void 0 === m
                    ? void 0
                    : m.autoSuggest) &&
            void 0 !== g &&
            g,
          H =
            null !==
              (A =
                null === (_ = x.chatInputType) || void 0 === _
                  ? void 0
                  : null === (Z = _.submit) || void 0 === Z
                    ? void 0
                    : Z.button) &&
            void 0 !== A &&
            A,
          X = U || P,
          K =
            "" !== k
              ? [
                  (0, s.jsx)(
                    a.MenuItem,
                    {
                      id: "copy",
                      label: f.Z.Messages.COPY,
                      hint: (0, T.isMac)() ? "⌘C" : "Ctrl+C",
                      action: () => setTimeout(() => b.ZP.copy(), 0),
                    },
                    "copy",
                  ),
                  (0, s.jsx)(
                    a.MenuItem,
                    {
                      id: "cut",
                      label: f.Z.Messages.CUT,
                      hint: (0, T.isMac)() ? "⌘X" : "Ctrl+X",
                      action: () => setTimeout(() => b.ZP.cut(), 0),
                    },
                    "cut",
                  ),
                ]
              : null,
          B = (0, s.jsx)(a.MenuCheckboxItem, {
            id: "command-suggestions",
            label: f.Z.Messages.SUGGEST_SLASH_COMMANDS,
            checked: D,
            action: () => {
              let e = !D;
              M.Xk.updateSetting(e),
                S.default.track(p.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                  enabled: e,
                  location: { object: p.qAy.CONTEXT_MENU },
                });
            },
          });
        return (0, s.jsxs)(a.Menu, {
          navId: "textarea-context",
          onClose: G,
          "aria-label": f.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
          onSelect: N,
          children: [
            X &&
              (0, s.jsxs)(a.MenuItem, {
                id: "suggestions",
                label: f.Z.Messages.TEXTAREA_ACTIONS_SUGGESTIONS,
                children: [P && y, U && B],
              }),
            H &&
              (0, s.jsx)(a.MenuCheckboxItem, {
                id: "submit-button",
                label: f.Z.Messages.TEXTAREA_ACTIONS_SUBMIT_BUTTON,
                checked: R,
                action: () => {
                  (0, o.eN)();
                },
              }),
            (0, s.jsx)(a.MenuGroup, { children: O }),
            (0, s.jsx)(a.MenuGroup, { children: j }),
            (0, s.jsxs)(a.MenuGroup, {
              children: [
                K,
                (0, s.jsx)(a.MenuItem, {
                  id: "paste",
                  label: f.Z.Messages.PASTE,
                  hint: (0, T.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => b.ZP.paste(), 0),
                }),
              ],
            }),
          ],
        });
      }
    },
    886036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(735250);
      n(470079);
      var u = n(481060),
        i = n(906732),
        l = n(695346),
        a = n(626135),
        c = n(981631),
        o = n(689938);
      function r() {
        let e = l.up.useSetting(),
          { analyticsLocations: t } = (0, i.ZP)();
        return (0, s.jsx)(u.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: o.Z.Messages.SUGGEST_STICKERS,
          checked: e,
          action: () => {
            a.default.track(c.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
              enabled: !e,
              location: { object: c.qAy.CONTEXT_MENU },
              location_stack: t,
            }),
              l.up.updateSetting(!e);
          },
        });
      }
    },
    877794: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var s = n(735250),
        u = n(470079),
        i = n(374470),
        l = n(442837),
        a = n(481060),
        c = n(295866),
        o = n(398327),
        r = n(63063),
        d = n(601993),
        E = n(981631),
        M = n(689938);
      function S(e) {
        let { text: t = "", target: n } = e,
          S = (0, l.e7)([o.Z], () => o.Z.isEnabled()),
          T = (0, l.e7)([o.Z], () => o.Z.hasLearnedWord(t), [t]),
          b = u.useRef({ ...e, spellcheckEnabled: S });
        b.current = { ...e, spellcheckEnabled: S };
        let C = u.useRef(!1),
          [p, f] = u.useState(!1),
          [m, h] = u.useState([]),
          Z = u.useCallback(() => {
            let {
              spellcheckEnabled: e,
              text: t,
              onHeightUpdate: n,
            } = b.current;
            e &&
              (0, d.Gb)() &&
              Promise.all([(0, d.f5)(t, !0), (0, d.WA)(t, !0)]).then((e) => {
                let [t, s] = e;
                C.current && (f(t), h(s), n());
              });
          }, []),
          _ = u.useCallback(() => {
            if (
              (0, i.k)(n, HTMLInputElement) ||
              (0, i.k)(n, HTMLTextAreaElement)
            ) {
              let { selectionStart: e, selectionEnd: t, value: s } = n;
              (n.value = ""),
                (n.value = s),
                "email" !== n.type &&
                  ((n.selectionStart = e), (n.selectionEnd = t));
            }
          }, [n]);
        if (
          (u.useEffect(() => {
            let e = (0, d.RD)(Z);
            return (
              (C.current = !0),
              () => {
                (C.current = !1), e();
              }
            );
          }, [Z]),
          u.useEffect(() => {
            Z();
          }, [t, S, Z]),
          !(0, d.Gb)())
        )
          return [null, null];
        let I = m.map((e, t) =>
          (0, s.jsx)(
            a.MenuItem,
            {
              id: "correction-".concat(t),
              label: e,
              action: () => {
                (0, d.Rs)(e), n.focus();
              },
            },
            "correction-".concat(t),
          ),
        );
        return [
          I,
          (0, s.jsxs)(s.Fragment, {
            children: [
              p
                ? (0, s.jsx)(a.MenuItem, {
                    id: "add-to-dictionary",
                    label: M.Z.Messages.ADD_TO_DICTIONARY,
                    action: () => {
                      (0, c.D0)(t), _();
                    },
                  })
                : null,
              T &&
                (0, s.jsx)(a.MenuItem, {
                  id: "remove-from-dictionary",
                  label: M.Z.Messages.REMOVE_FROM_DICTIONARY,
                  action: () => {
                    (0, c.lE)(t), _();
                  },
                }),
              (0, s.jsx)(a.MenuCheckboxItem, {
                id: "spellcheck",
                label: M.Z.Messages.SPELLCHECK,
                checked: S,
                action: () => {
                  (0, c.kY)(), _();
                },
              }),
              S
                ? (0, s.jsx)(a.MenuItem, {
                    id: "languages",
                    label: M.Z.Messages.LANGUAGES,
                    action: () =>
                      window.open(r.Z.getArticleURL(E.BhN.SPELLCHECK)),
                  })
                : null,
            ],
          }),
        ];
      }
    },
  },
]);
//# sourceMappingURL=6eadea1895c857d27970.js.map
