"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2535"],
  {
    108843: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(906732);
      function l(e, t) {
        return function (n) {
          let { analyticsLocations: l } = (0, i.ZP)(t);
          return (0, r.jsx)(i.Gt, {
            value: l,
            children: (0, r.jsx)(e, { ...n }),
          });
        };
      }
    },
    923422: function (e, t, n) {
      n.r(t), n(47120), n(757143);
      var r = n(200651),
        i = n(192379),
        l = n(481060),
        a = n(239091),
        u = n(230711),
        o = n(493544),
        c = n(108843),
        s = n(100527),
        d = n(906732),
        p = n(386506),
        g = n(366953),
        h = n(991346),
        m = n(606669),
        x = n(53432),
        M = n(74869),
        f = n(45570),
        b = n(308512),
        j = n(594791),
        Z = n(393431),
        S = n(69021),
        C = n(981631),
        I = n(388032);
      t.default = (0, c.Z)(
        function (e) {
          let { webBuildOverride: t, onSelect: n } = e,
            [c, s] = i.useState(!1),
            E = (0, f.Z)(),
            v = (0, b.Z)(),
            y = (0, x.Z)(),
            k = (0, m.Z)(),
            R = (0, Z.Z)(),
            P = (0, j.Z)(),
            D = (0, M.Z)(),
            O = (0, S.Z)(),
            { analyticsLocations: T } = (0, d.ZP)(),
            A = i.useMemo(() => (0, g.j)(), []);
          async function G() {
            try {
              s(!0), await (0, p.bF)(), window.location.reload(!0);
            } catch (e) {
              s(!1);
            }
          }
          let N = (e) => {
              switch (e) {
                case C.oAB.GAMES:
                  return E;
                case C.oAB.STREAMER_MODE:
                  return v;
                case C.oAB.APPEARANCE:
                  return y;
                case C.oAB.ACCESSIBILITY:
                  return k;
                case C.oAB.VOICE:
                  return R;
                case C.oAB.TEXT:
                  return P;
                case C.oAB.EXPERIMENTS:
                  return D;
                case C.oAB.DEVELOPER_OPTIONS:
                  return O;
                default:
                  return null;
              }
            },
            B = (0, h.VO)()
              .filter((e) => {
                let { section: t } = e;
                return (
                  t !== o.ID.HEADER &&
                  t !== o.ID.CUSTOM &&
                  t !== o.ID.DIVIDER &&
                  "logout" !== t
                );
              })
              .filter((e) => null == e.predicate || e.predicate());
          return (0, r.jsx)(d.Gt, {
            value: T,
            children: (0, r.jsxs)(l.Menu, {
              navId: "user-settings-cog",
              onClose: a.Zy,
              "aria-label": I.intl.string(I.t.opYYHh),
              onSelect: n,
              children: [
                B.map((e) => {
                  let { section: t, label: n, onClick: i } = e,
                    a = t.replace(/\W/gi, "_");
                  return (0, r.jsx)(
                    l.MenuItem,
                    {
                      id: a,
                      label: n,
                      action: () =>
                        null != i
                          ? i()
                          : (function (e, t) {
                              let n = Object.values(C.oAB).filter(
                                (t) => t === e,
                              )[0];
                              null != n &&
                                u.Z.open(n, void 0, { analyticsLocations: t });
                            })(t, T),
                      children: N(t),
                    },
                    a,
                  );
                }),
                e.user.isStaff() && A.length > 0
                  ? (0, r.jsx)(l.MenuItem, {
                      label: "Build overrides",
                      id: "build_overrides",
                      children: (0, r.jsx)(l.MenuGroup, {
                        children: A.map((e) =>
                          (0, r.jsx)(
                            l.MenuRadioItem,
                            {
                              id: "input-".concat(e.payload),
                              group: "build_overrides",
                              label: e.id,
                              checked: (null == t ? void 0 : t.id) === e.id,
                              action: async () => {
                                if ((null == t ? void 0 : t.id) !== e.id)
                                  200 === (await (0, p.f0)(e.payload)).status &&
                                    window.location.reload(!0);
                              },
                            },
                            "input-".concat(e.payload),
                          ),
                        ),
                      }),
                    })
                  : null,
                null != t
                  ? (0, r.jsx)(l.MenuGroup, {
                      children: (0, r.jsx)(l.MenuItem, {
                        id: "clear-build-override",
                        disabled: c,
                        label: I.intl.string(I.t["/Nz9ra"]),
                        action: G,
                        color: "danger",
                      }),
                    })
                  : null,
              ],
            }),
          });
        },
        [s.Z.CONTEXT_MENU, s.Z.USER_SETTINGS_MENU],
      );
    },
    606669: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(442837),
        l = n(481060),
        a = n(857595),
        u = n(607070),
        o = n(388032);
      function c() {
        let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
          } = (0, i.cj)([u.Z], () => ({
            saturation: u.Z.saturation,
            useReducedMotion: u.Z.useReducedMotion,
            roleStyle: u.Z.roleStyle,
          })),
          c = [
            { name: o.intl.string(o.t.YEOEi4), value: "username" },
            { name: o.intl.string(o.t.mQaro6), value: "dot" },
            { name: o.intl.string(o.t.Ji2EVF), value: "hidden" },
          ];
        return [
          (0, r.jsx)(
            l.MenuGroup,
            {
              children: (0, r.jsx)(l.MenuCheckboxItem, {
                id: "reduced-motion",
                label: o.intl.string(o.t.b3XBzs),
                checked: t,
                action: () => (0, a.Zt)(t ? "no-preference" : "reduce"),
              }),
            },
            "reduced-motion",
          ),
          (0, r.jsx)(
            l.MenuGroup,
            {
              children: (0, r.jsx)(l.MenuControlItem, {
                id: "input",
                label: o.intl.string(o.t["5PWWCQ"]),
                control: (t, n) =>
                  (0, r.jsx)(l.MenuSliderControl, {
                    ...t,
                    ref: n,
                    value: 100 * e,
                    onChange: (e) => (0, a.o2)(e / 100),
                    "aria-label": o.intl.string(o.t["5PWWCQ"]),
                  }),
              }),
            },
            "input",
          ),
          (0, r.jsx)(
            l.MenuGroup,
            {
              children: (0, r.jsx)(l.MenuItem, {
                id: "role-colors",
                label: o.intl.string(o.t.uSOPWl),
                children: c.map((e) => {
                  let { name: t, value: i } = e;
                  return (0, r.jsx)(
                    l.MenuRadioItem,
                    {
                      id: i,
                      group: "role-colors",
                      checked: i === n,
                      label: t,
                      action: () => (0, a.u1)(i),
                    },
                    i,
                  );
                }),
              }),
            },
            "role-colors",
          ),
        ];
      }
    },
    53432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(653041);
      var r = n(200651);
      n(192379);
      var i = n(442837),
        l = n(524437),
        a = n(481060),
        u = n(153867),
        o = n(857595),
        c = n(607070),
        s = n(906732),
        d = n(705262),
        p = n(540059),
        g = n(210887),
        h = n(740492),
        m = n(695346),
        x = n(874893),
        M = n(981631),
        f = n(388032);
      function b() {
        let e = m.jU.useSetting(),
          { analyticsLocations: t } = (0, s.ZP)(),
          {
            theme: n,
            useSystemTheme: b,
            useForcedColors: j,
          } = (0, i.cj)([g.Z, h.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: h.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
          })),
          Z = m.YC.useSetting(),
          S = (0, p.Q3)("appearance_settings"),
          C = (0, p.o9)("appearance_settings"),
          I = (e, i) =>
            (0, r.jsx)(a.MenuRadioItem, {
              id: e,
              group: "input-modes",
              label: i,
              disabled: j,
              checked: b === x.K.ON ? "system" === e : e === n,
              action: () => {
                (0, d.Yk)({
                  isPersisted: !0,
                  analyticsLocations: t,
                  themeName: "default ".concat(e),
                }),
                  (0, u.ZI)({ theme: e });
              },
            }),
          E = [
            (0, r.jsxs)(
              a.MenuGroup,
              {
                children: [
                  I(M.BRd.DARK, f.intl.string(f.t.b8Cei4)),
                  I(M.BRd.LIGHT, f.intl.string(f.t.K2sFfn)),
                  S &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        I(M.BRd.DARKER, "Darker"),
                        I(M.BRd.MIDNIGHT, f.intl.string(f.t.pQwSpa)),
                      ],
                    }),
                  I("system", f.intl.string(f.t["7rOU6u"])),
                ],
              },
              "theme-items",
            ),
            ,
          ];
        return (
          C
            ? (E.push(
                (0, r.jsxs)(
                  a.MenuGroup,
                  {
                    label: "UI Density",
                    children: [
                      (0, r.jsx)(a.MenuRadioItem, {
                        id: "cozy-ui",
                        group: "list-density",
                        label: "Cozy",
                        checked: Z === l.Pi.COZY,
                        action: () => {
                          m.YC.updateSetting(l.Pi.COZY);
                        },
                      }),
                      (0, r.jsx)(a.MenuRadioItem, {
                        id: "compact-ui",
                        group: "list-density",
                        label: "Compact",
                        checked: Z === l.Pi.COMPACT,
                        action: () => {
                          m.YC.updateSetting(l.Pi.COMPACT);
                        },
                      }),
                      (0, r.jsx)(a.MenuRadioItem, {
                        id: "auto-ui",
                        group: "list-density",
                        label: "Auto",
                        checked: Z === l.Pi.RESPONSIVE,
                        action: () => {
                          m.YC.updateSetting(l.Pi.RESPONSIVE);
                        },
                      }),
                    ],
                  },
                  "list-density",
                ),
              ),
              E.push(
                (0, r.jsxs)(
                  a.MenuGroup,
                  {
                    label: "Message Display",
                    children: [
                      (0, r.jsx)(a.MenuRadioItem, {
                        id: "cozy-chat",
                        group: "chat-density",
                        label: "Cozy",
                        checked: !e,
                        action: () => {
                          m.jU.updateSetting(!1), (0, o.ZZ)();
                        },
                      }),
                      (0, r.jsx)(a.MenuRadioItem, {
                        id: "compact-chat",
                        group: "chat-density",
                        label: "Compact",
                        checked: e,
                        action: () => {
                          m.jU.updateSetting(!0), (0, o.ZZ)();
                        },
                      }),
                    ],
                  },
                  "chat-density",
                ),
              ),
              E.push(
                (0, r.jsx)(
                  a.MenuGroup,
                  {
                    children: (0, r.jsx)(a.MenuCheckboxItem, {
                      id: "desktop-refresh-override",
                      label: "Enable Desktop Refresh",
                      action: () => {
                        u.ZP.updatedUnsyncedSettings({
                          disableVisualRefresh: S,
                        });
                      },
                      checked: S,
                    }),
                  },
                  "refresh-experiment",
                ),
              ))
            : E.push(
                (0, r.jsx)(
                  a.MenuGroup,
                  {
                    children: (0, r.jsx)(a.MenuItem, {
                      id: "compact-mode",
                      label: e
                        ? f.intl.string(f.t.CTpwDw)
                        : f.intl.string(f.t["J/FISU"]),
                      action: () => {
                        m.jU.updateSetting(!e), (0, o.ZZ)();
                      },
                    }),
                  },
                  "compact-mode",
                ),
              ),
          E
        );
      }
    },
    74869: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(348327),
        a = n.n(l),
        u = n(658722),
        o = n.n(u),
        c = n(442837),
        s = n(481060),
        d = n(492435),
        p = n(353926),
        g = n(102687),
        h = n(388032);
      function m(e) {
        let { id: t, experiment: n, currentBucket: i } = e;
        return (0, r.jsxs)(
          s.MenuItem,
          {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
              n.buckets.map((e) =>
                (0, r.jsx)(
                  s.MenuCheckboxItem,
                  {
                    id: "".concat(e),
                    label: g.Z.getExperimentBucketName(e),
                    checked: e === i,
                    action: () => (0, d.rX)(t, e),
                  },
                  "".concat(e),
                ),
              ),
              (0, r.jsx)(s.MenuGroup, {
                children:
                  -1 !== i &&
                  (0, r.jsx)(s.MenuItem, {
                    id: "clear-override",
                    label: "Clear Override",
                    color: "danger",
                    icon: s.TrashIcon,
                    action: () => (0, d.rX)(t, null),
                  }),
              }),
            ],
          },
          t,
        );
      }
      function x() {
        let e = (0, c.e7)(
            [p.Z, p.Z],
            () => {
              let e = p.Z.getRegisteredExperiments();
              return Object.keys(e).map((t) => {
                let n = e[t],
                  r = p.Z.getExperimentOverrideDescriptor(t);
                return {
                  id: t,
                  experiment: n,
                  currentBucket: null != r ? r.bucket : -1,
                };
              });
            },
            [],
            a(),
          ),
          [t, n] = i.useState(""),
          [l, u] = i.useState([]);
        i.useEffect(() => {
          if (0 === t.trim().length) {
            u(e);
            return;
          }
          u(e.filter((e) => o()(t, e.experiment.title.toLowerCase())));
        }, [e, t]);
        let d = i.useMemo(
            () =>
              l.filter((e) => {
                let { currentBucket: t } = e;
                return -1 !== t;
              }),
            [l],
          ),
          g = i.useMemo(
            () =>
              l.filter((e) => {
                let { currentBucket: t } = e;
                return -1 === t;
              }),
            [l],
          ),
          x = i.useMemo(() => d.map(m), [d]),
          M = i.useMemo(() => g.map(m), [g]);
        return [
          (0, r.jsx)(
            s.MenuControlItem,
            {
              id: "experiments-search",
              control: (e, i) =>
                (0, r.jsx)(s.MenuSearchControl, {
                  ...e,
                  query: t,
                  onChange: n,
                  ref: i,
                  placeholder: h.intl.string(h.t["5h0QOD"]),
                }),
            },
            "experiments-search",
          ),
          (0, r.jsx)(s.MenuSeparator, {}, "separator"),
          ...x,
          x.length > 0 ? (0, r.jsx)(s.MenuSeparator, {}, "separator-2") : null,
          ...M,
        ];
      }
    },
    45570: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(547972),
        a = n(326528);
      function u() {
        let e = (0, a.b)().map((e) =>
          (0, r.jsx)(
            i.MenuItem,
            { id: e.id, label: e.title, action: () => (0, l.Z)(e.id) },
            e.id,
          ),
        );
        return (0, r.jsx)(r.Fragment, { children: e });
      }
    },
    308512: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(442837),
        l = n(481060),
        a = n(223245),
        u = n(246946),
        o = n(388032);
      function c() {
        let e = (0, i.e7)([u.Z], () => u.Z.enabled, []);
        return (0, r.jsx)(l.MenuCheckboxItem, {
          id: "streamer-mode-toggle",
          label: o.intl.string(o.t.p9ZAJS),
          action: () => {
            a.Z.setEnabled(!e);
          },
          checked: e,
        });
      }
    },
    594791: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(626135),
        a = n(695346),
        u = n(981631),
        o = n(388032);
      function c() {
        let e = a.dN.useSetting(),
          t = a.R$.useSetting();
        return e
          ? null
          : (0, r.jsx)(i.MenuCheckboxItem, {
              id: "preview-markdown-toggle",
              label: o.intl.string(o.t.sHJ9wc),
              action: () => {
                let e = !t;
                l.default.track(u.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: { section: u.jXE.SETTINGS_CONTEXT_MENU },
                }),
                  a.R$.updateSetting(e);
              },
              checked: t,
            });
      }
    },
    393431: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(906732),
        a = n(453925),
        u = n(821564),
        o = n(632304);
      function c() {
        let { analyticsLocations: e } = (0, l.ZP)();
        return [
          (0, r.jsx)(
            i.MenuGroup,
            { children: (0, u.Z)(e) },
            "input-mode-items",
          ),
          (0, r.jsxs)(
            i.MenuGroup,
            { children: [(0, a.Z)(e), (0, o.Z)(e)] },
            "input-output",
          ),
        ];
      }
    },
    69021: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(653041);
      var r = n(200651);
      n(192379);
      var i = n(442837),
        l = n(481060),
        a = n(179658),
        u = n(482215),
        o = n(906467),
        c = n(857192),
        s = n(594174);
      function d() {
        let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n,
          } = (0, i.cj)([c.default, s.default, o.Z], () => {
            var e;
            return {
              layoutDebuggingEnabled: c.default.layoutDebuggingEnabled,
              isStaff:
                (null === (e = s.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.isStaff()) === !0,
              isDeveloper: o.Z.isDeveloper,
            };
          }),
          {
            horizontalSpacing: d,
            verticalSpacing: p,
            maxHorizontalSpacing: g,
            maxVerticalSpacing: h,
          } = (0, u.i)(),
          { setHorizontalSpacing: m, setVerticalSpacing: x } = u.i.getState(),
          M = [];
        return (
          t &&
            n &&
            (M.push(
              (0, r.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "layout-debugging",
                  label: "Enable Layout Debugging",
                  checked: e,
                  action: () => {
                    (0, a.y)({ layoutDebuggingEnabled: !e });
                  },
                },
                "layout-debugging",
              ),
            ),
            e &&
              (M.push(
                (0, r.jsx)(
                  l.MenuControlItem,
                  {
                    id: "horizontal-spacing",
                    label: "Horizontal Spacing",
                    control: (e, t) =>
                      (0, r.jsx)(l.MenuSliderControl, {
                        ...e,
                        ref: t,
                        value: d,
                        minValue: 0,
                        maxValue: g,
                        onChange: (e) => m(e),
                        renderValue: (e) => "".concat(Math.round(e), "px"),
                        "aria-label": "Horizontal Spacing",
                      }),
                  },
                  "horizontal-spacing",
                ),
              ),
              M.push(
                (0, r.jsx)(
                  l.MenuControlItem,
                  {
                    id: "vertical-spacing",
                    label: "Vertical Spacing",
                    control: (e, t) =>
                      (0, r.jsx)(l.MenuSliderControl, {
                        ...e,
                        ref: t,
                        value: p,
                        minValue: 0,
                        maxValue: h,
                        onChange: (e) => x(e),
                        "aria-label": "Horizontal Spacing",
                        renderValue: (e) => "".concat(Math.round(e), "px"),
                      }),
                  },
                  "vertical-spacing",
                ),
              ))),
          0 === M.length ? null : (0, r.jsx)(r.Fragment, { children: M })
        );
      }
    },
  },
]);
//# sourceMappingURL=719d03e93ff4c2028729.js.map
