"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99989"],
  {
    295866: function (t, e, n) {
      n.d(e, {
        D0: function () {
          return c;
        },
        kY: function () {
          return i;
        },
        lE: function () {
          return r;
        },
      });
      var l = n(570140);
      function i() {
        l.Z.dispatch({ type: "SPELLCHECK_TOGGLE" });
      }
      function c(t) {
        l.Z.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t });
      }
      function r(t) {
        l.Z.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t });
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
      var l = n(200651),
        i = n(192379),
        c = n(513431),
        r = n(481060),
        u = n(239091),
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
          m = i.useCallback(() => {
            (0, u.Zy)(),
              (0, c.k)(n, HTMLElement) &&
                (n.focus(), setTimeout(() => n.focus(), 0));
          }, [n]),
          [M, b] = (0, s.Z)({ text: e, target: n, onHeightUpdate: p }),
          x = (0, a.Z)();
        if (
          !o.isPlatformEmbedded ||
          !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement))
        )
          return null;
        let k =
          "" !== e
            ? [
                (0, l.jsx)(
                  r.MenuItem,
                  {
                    id: "copy",
                    label: f.intl.string(f.t.OpuAlJ),
                    hint: (0, o.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => d.ZP.copy(e),
                  },
                  "copy",
                ),
                (0, l.jsx)(
                  r.MenuItem,
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
        return (0, l.jsxs)(r.Menu, {
          navId: "textarea-context",
          onClose: m,
          "aria-label": f.intl.string(f.t.NWlDSE),
          onSelect: E,
          children: [
            h && (0, l.jsx)(r.MenuGroup, { children: x }),
            (0, l.jsx)(r.MenuGroup, { children: M }),
            (0, l.jsx)(r.MenuGroup, { children: b }),
            (0, l.jsxs)(r.MenuGroup, {
              children: [
                k,
                (0, l.jsx)(r.MenuItem, {
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
      var l = n(200651);
      n(192379);
      var i = n(481060),
        c = n(906732),
        r = n(278754),
        u = n(626135),
        a = n(981631),
        s = n(388032);
      function o() {
        let t = (0, r.pR)(),
          { analyticsLocations: e } = (0, c.ZP)();
        return (0, l.jsx)(i.MenuCheckboxItem, {
          id: "sticker-suggestions",
          label: s.intl.string(s.t.rIzKh4),
          checked: t,
          action: () => {
            u.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
              enabled: !t,
              location: { object: a.qAy.CONTEXT_MENU },
              location_stack: e,
            }),
              (0, r.AW)(!t);
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
      var l = n(200651),
        i = n(192379),
        c = n(513431),
        r = n(442837),
        u = n(481060),
        a = n(295866),
        s = n(398327),
        o = n(63063),
        d = n(601993),
        f = n(981631),
        p = n(388032);
      function E(t) {
        let { text: e = "", target: n } = t,
          E = (0, r.e7)([s.Z], () => s.Z.isEnabled()),
          h = (0, r.e7)([s.Z], () => s.Z.hasLearnedWord(e), [e]),
          m = i.useRef({ ...t, spellcheckEnabled: E });
        m.current = { ...t, spellcheckEnabled: E };
        let M = i.useRef(!1),
          [b, x] = i.useState(!1),
          [k, C] = i.useState([]),
          L = i.useCallback(() => {
            let {
              spellcheckEnabled: t,
              text: e,
              onHeightUpdate: n,
            } = m.current;
            t &&
              (0, d.Gb)() &&
              Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                let [e, l] = t;
                M.current && (x(e), C(l), n());
              });
          }, []),
          T = i.useCallback(() => {
            if (
              (0, c.k)(n, HTMLInputElement) ||
              (0, c.k)(n, HTMLTextAreaElement)
            ) {
              let { selectionStart: t, selectionEnd: e, value: l } = n;
              (n.value = ""),
                (n.value = l),
                "email" !== n.type &&
                  ((n.selectionStart = t), (n.selectionEnd = e));
            }
          }, [n]);
        if (
          (i.useEffect(() => {
            let t = (0, d.RD)(L);
            return (
              (M.current = !0),
              () => {
                (M.current = !1), t();
              }
            );
          }, [L]),
          i.useEffect(() => {
            L();
          }, [e, E, L]),
          !(0, d.Gb)())
        )
          return [null, null];
        let Z = k.map((t, e) =>
          (0, l.jsx)(
            u.MenuItem,
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
          Z,
          (0, l.jsxs)(l.Fragment, {
            children: [
              b
                ? (0, l.jsx)(u.MenuItem, {
                    id: "add-to-dictionary",
                    label: p.intl.string(p.t.HJmG1N),
                    action: () => {
                      (0, a.D0)(e), T();
                    },
                  })
                : null,
              h &&
                (0, l.jsx)(u.MenuItem, {
                  id: "remove-from-dictionary",
                  label: p.intl.string(p.t.xXqIX1),
                  action: () => {
                    (0, a.lE)(e), T();
                  },
                }),
              (0, l.jsx)(u.MenuCheckboxItem, {
                id: "spellcheck",
                label: p.intl.string(p.t.TKkotb),
                checked: E,
                action: () => {
                  (0, a.kY)(), T();
                },
              }),
              E
                ? (0, l.jsx)(u.MenuItem, {
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
//# sourceMappingURL=f3b8be06bd728279204e.js.map
