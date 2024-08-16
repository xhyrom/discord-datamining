"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99989"],
  {
    295866: function (e, t, n) {
      n.d(t, {
        D0: function () {
          return c;
        },
        kY: function () {
          return u;
        },
        lE: function () {
          return a;
        },
      });
      var s = n(570140);
      function u() {
        s.Z.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function c(e) {
        s.Z.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: e });
      }
      function a(e) {
        s.Z.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: e });
      }
    },
    889662: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n(47120);
      var s = n(735250),
        u = n(470079),
        c = n(374470),
        a = n(481060),
        l = n(239091),
        i = n(886036),
        r = n(877794),
        o = n(358085),
        d = n(998502),
        E = n(689938);
      function M(e) {
        let {
            text: t,
            target: n,
            onHeightUpdate: M,
            onSelect: f,
            isChannelTextArea: p = !1,
          } = e,
          C = u.useCallback(() => {
            (0, l.Zy)(),
              (0, c.k)(n, HTMLElement) &&
                (n.focus(), setTimeout(() => n.focus(), 0));
          }, [n]),
          [T, Z] = (0, r.Z)({ text: t, target: n, onHeightUpdate: M }),
          h = (0, i.Z)();
        if (
          !o.isPlatformEmbedded ||
          !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement))
        )
          return null;
        let m =
          "" !== t
            ? [
                (0, s.jsx)(
                  a.MenuItem,
                  {
                    id: "copy",
                    label: E.Z.Messages.COPY,
                    hint: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => d.ZP.copy(t),
                  },
                  "copy",
                ),
                (0, s.jsx)(
                  a.MenuItem,
                  {
                    id: "cut",
                    label: E.Z.Messages.CUT,
                    hint: (0, o.isMac)() ? "⌘X" : "Ctrl+X",
                    action: () => setTimeout(() => d.ZP.cut(), 0),
                  },
                  "cut",
                ),
              ]
            : null;
        return (0, s.jsxs)(a.Menu, {
          navId: "textarea-context",
          onClose: C,
          "aria-label": E.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
          onSelect: f,
          children: [
            p && (0, s.jsx)(a.MenuGroup, { children: h }),
            (0, s.jsx)(a.MenuGroup, { children: T }),
            (0, s.jsx)(a.MenuGroup, { children: Z }),
            (0, s.jsxs)(a.MenuGroup, {
              children: [
                m,
                (0, s.jsx)(a.MenuItem, {
                  id: "paste",
                  label: E.Z.Messages.PASTE,
                  hint: (0, o.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => d.ZP.paste(), 0),
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
          return o;
        },
      });
      var s = n(735250);
      n(470079);
      var u = n(481060),
        c = n(906732),
        a = n(695346),
        l = n(626135),
        i = n(981631),
        r = n(689938);
      function o() {
        let e = a.up.useSetting(),
          { analyticsLocations: t } = (0, c.ZP)();
        return (0, s.jsx)(u.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: r.Z.Messages.SUGGEST_STICKERS,
          checked: e,
          action: () => {
            l.default.track(i.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
              enabled: !e,
              location: { object: i.qAy.CONTEXT_MENU },
              location_stack: t,
            }),
              a.up.updateSetting(!e);
          },
        });
      }
    },
    877794: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var s = n(735250),
        u = n(470079),
        c = n(374470),
        a = n(442837),
        l = n(481060),
        i = n(295866),
        r = n(398327),
        o = n(63063),
        d = n(601993),
        E = n(981631),
        M = n(689938);
      function f(e) {
        let { text: t = "", target: n } = e,
          f = (0, a.e7)([r.Z], () => r.Z.isEnabled()),
          p = (0, a.e7)([r.Z], () => r.Z.hasLearnedWord(t), [t]),
          C = u.useRef({ ...e, spellcheckEnabled: f });
        C.current = { ...e, spellcheckEnabled: f };
        let T = u.useRef(!1),
          [Z, h] = u.useState(!1),
          [m, L] = u.useState([]),
          b = u.useCallback(() => {
            let {
              spellcheckEnabled: e,
              text: t,
              onHeightUpdate: n,
            } = C.current;
            e &&
              (0, d.Gb)() &&
              Promise.all([(0, d.f5)(t, !0), (0, d.WA)(t, !0)]).then((e) => {
                let [t, s] = e;
                T.current && (h(t), L(s), n());
              });
          }, []),
          k = u.useCallback(() => {
            if (
              (0, c.k)(n, HTMLInputElement) ||
              (0, c.k)(n, HTMLTextAreaElement)
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
            let e = (0, d.RD)(b);
            return (
              (T.current = !0),
              () => {
                (T.current = !1), e();
              }
            );
          }, [b]),
          u.useEffect(() => {
            b();
          }, [t, f, b]),
          !(0, d.Gb)())
        )
          return [null, null];
        let x = m.map((e, t) =>
          (0, s.jsx)(
            l.MenuItem,
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
          x,
          (0, s.jsxs)(s.Fragment, {
            children: [
              Z
                ? (0, s.jsx)(l.MenuItem, {
                    id: "add-to-dictionary",
                    label: M.Z.Messages.ADD_TO_DICTIONARY,
                    action: () => {
                      (0, i.D0)(t), k();
                    },
                  })
                : null,
              p &&
                (0, s.jsx)(l.MenuItem, {
                  id: "remove-from-dictionary",
                  label: M.Z.Messages.REMOVE_FROM_DICTIONARY,
                  action: () => {
                    (0, i.lE)(t), k();
                  },
                }),
              (0, s.jsx)(l.MenuCheckboxItem, {
                id: "spellcheck",
                label: M.Z.Messages.SPELLCHECK,
                checked: f,
                action: () => {
                  (0, i.kY)(), k();
                },
              }),
              f
                ? (0, s.jsx)(l.MenuItem, {
                    id: "languages",
                    label: M.Z.Messages.LANGUAGES,
                    action: () =>
                      window.open(o.Z.getArticleURL(E.BhN.SPELLCHECK)),
                  })
                : null,
            ],
          }),
        ];
      }
    },
  },
]);
//# sourceMappingURL=36eb3ad01fc39f808816.js.map
