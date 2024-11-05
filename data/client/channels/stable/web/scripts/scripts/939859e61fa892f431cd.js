"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99989"],
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
    889662: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        u = n(374470),
        c = n(481060),
        r = n(239091),
        a = n(886036),
        s = n(877794),
        o = n(358085),
        d = n(998502),
        f = n(388032);
      function p(t) {
        let {
            text: e,
            target: n,
            onHeightUpdate: p,
            onSelect: E,
            isChannelTextArea: h = !1,
          } = t,
          m = l.useCallback(() => {
            (0, r.Zy)(),
              (0, u.k)(n, HTMLElement) &&
                (n.focus(), setTimeout(() => n.focus(), 0));
          }, [n]),
          [M, b] = (0, s.Z)({ text: e, target: n, onHeightUpdate: p }),
          x = (0, a.Z)();
        if (
          !o.isPlatformEmbedded ||
          !((0, u.k)(n, HTMLInputElement) || (0, u.k)(n, HTMLTextAreaElement))
        )
          return null;
        let k =
          "" !== e
            ? [
                (0, i.jsx)(
                  c.MenuItem,
                  {
                    id: "copy",
                    label: f.intl.string(f.t.OpuAlJ),
                    hint: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => d.ZP.copy(e),
                  },
                  "copy",
                ),
                (0, i.jsx)(
                  c.MenuItem,
                  {
                    id: "cut",
                    label: f.intl.string(f.t.pNPVhY),
                    hint: (0, o.isMac)() ? "⌘X" : "Ctrl+X",
                    action: () => setTimeout(() => d.ZP.cut(), 0),
                  },
                  "cut",
                ),
              ]
            : null;
        return (0, i.jsxs)(c.Menu, {
          navId: "textarea-context",
          onClose: m,
          "aria-label": f.intl.string(f.t.NWlDSE),
          onSelect: E,
          children: [
            h && (0, i.jsx)(c.MenuGroup, { children: x }),
            (0, i.jsx)(c.MenuGroup, { children: M }),
            (0, i.jsx)(c.MenuGroup, { children: b }),
            (0, i.jsxs)(c.MenuGroup, {
              children: [
                k,
                (0, i.jsx)(c.MenuItem, {
                  id: "paste",
                  label: f.intl.string(f.t.lMUxVl),
                  hint: (0, o.isMac)() ? "⌘V" : "Ctrl+V",
                  action: () => setTimeout(() => d.ZP.paste(), 0),
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
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        u = n(906732),
        c = n(695346),
        r = n(626135),
        a = n(981631),
        s = n(388032);
      function o() {
        let t = c.up.useSetting(),
          { analyticsLocations: e } = (0, u.ZP)();
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: s.intl.string(s.t.rIzKh4),
          checked: t,
          action: () => {
            r.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
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
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        u = n(374470),
        c = n(442837),
        r = n(481060),
        a = n(295866),
        s = n(398327),
        o = n(63063),
        d = n(601993),
        f = n(981631),
        p = n(388032);
      function E(t) {
        let { text: e = "", target: n } = t,
          E = (0, c.e7)([s.Z], () => s.Z.isEnabled()),
          h = (0, c.e7)([s.Z], () => s.Z.hasLearnedWord(e), [e]),
          m = l.useRef({ ...t, spellcheckEnabled: E });
        m.current = { ...t, spellcheckEnabled: E };
        let M = l.useRef(!1),
          [b, x] = l.useState(!1),
          [k, C] = l.useState([]),
          L = l.useCallback(() => {
            let {
              spellcheckEnabled: t,
              text: e,
              onHeightUpdate: n,
            } = m.current;
            t &&
              (0, d.Gb)() &&
              Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                let [e, i] = t;
                M.current && (x(e), C(i), n());
              });
          }, []),
          g = l.useCallback(() => {
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
            let t = (0, d.RD)(L);
            return (
              (M.current = !0),
              () => {
                (M.current = !1), t();
              }
            );
          }, [L]),
          l.useEffect(() => {
            L();
          }, [e, E, L]),
          !(0, d.Gb)())
        )
          return [null, null];
        let T = k.map((t, e) =>
          (0, i.jsx)(
            r.MenuItem,
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
          T,
          (0, i.jsxs)(i.Fragment, {
            children: [
              b
                ? (0, i.jsx)(r.MenuItem, {
                    id: "add-to-dictionary",
                    label: p.intl.string(p.t.HJmG1N),
                    action: () => {
                      (0, a.D0)(e), g();
                    },
                  })
                : null,
              h &&
                (0, i.jsx)(r.MenuItem, {
                  id: "remove-from-dictionary",
                  label: p.intl.string(p.t.xXqIX1),
                  action: () => {
                    (0, a.lE)(e), g();
                  },
                }),
              (0, i.jsx)(r.MenuCheckboxItem, {
                id: "spellcheck",
                label: p.intl.string(p.t.TKkotb),
                checked: E,
                action: () => {
                  (0, a.kY)(), g();
                },
              }),
              E
                ? (0, i.jsx)(r.MenuItem, {
                    id: "languages",
                    label: p.intl.string(p.t.OlOHDA),
                    action: () =>
                      window.open(o.Z.getArticleURL(f.BhN.SPELLCHECK)),
                  })
                : null,
            ],
          }),
        ];
      }
    },
  },
]);
//# sourceMappingURL=939859e61fa892f431cd.js.map
