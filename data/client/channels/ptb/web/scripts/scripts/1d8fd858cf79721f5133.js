"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44889"],
  {
    108843: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(906732);
      function r(e, t) {
        return function (n) {
          let { analyticsLocations: r } = (0, o.ZP)(t);
          return (0, i.jsx)(o.Gt, {
            value: r,
            children: (0, i.jsx)(e, { ...n }),
          });
        };
      }
    },
    923422: function (e, t, n) {
      n.r(t), n(47120), n(757143);
      var i = n(200651),
        o = n(192379),
        r = n(481060),
        a = n(239091),
        l = n(230711),
        c = n(493544),
        u = n(108843),
        s = n(100527),
        d = n(906732),
        g = n(386506),
        m = n(366953),
        b = n(991346),
        p = n(606669),
        f = n(53432),
        h = n(74869),
        _ = n(45570),
        S = n(308512),
        x = n(594791),
        M = n(393431),
        C = n(69021),
        Z = n(981631),
        j = n(388032);
      t.default = (0, u.Z)(
        function (e) {
          let { webBuildOverride: t, onSelect: n } = e,
            [u, s] = o.useState(!1),
            k = (0, _.Z)(),
            I = (0, S.Z)(),
            v = (0, f.Z)(),
            B = (0, p.Z)(),
            E = (0, M.Z)(),
            R = (0, x.Z)(),
            y = (0, h.Z)(),
            T = (0, C.Z)(),
            { analyticsLocations: D } = (0, d.ZP)(),
            G = o.useMemo(() => (0, m.j)(), []);
          async function U() {
            try {
              s(!0), await (0, g.bF)(), window.location.reload(!0);
            } catch (e) {
              s(!1);
            }
          }
          let O = (e) => {
              switch (e) {
                case Z.oAB.GAMES:
                  return k;
                case Z.oAB.STREAMER_MODE:
                  return I;
                case Z.oAB.APPEARANCE:
                  return v;
                case Z.oAB.ACCESSIBILITY:
                  return B;
                case Z.oAB.VOICE:
                  return E;
                case Z.oAB.TEXT:
                  return R;
                case Z.oAB.EXPERIMENTS:
                  return y;
                case Z.oAB.DEVELOPER_OPTIONS:
                  return T;
                default:
                  return null;
              }
            },
            w = (0, b.VO)()
              .filter((e) => {
                let { section: t } = e;
                return (
                  t !== c.ID.HEADER &&
                  t !== c.ID.CUSTOM &&
                  t !== c.ID.DIVIDER &&
                  "logout" !== t
                );
              })
              .filter((e) => null == e.predicate || e.predicate());
          return (0, i.jsx)(d.Gt, {
            value: D,
            children: (0, i.jsxs)(r.Menu, {
              navId: "user-settings-cog",
              onClose: a.Zy,
              "aria-label": j.intl.string(j.t.opYYHh),
              onSelect: n,
              children: [
                w.map((e) => {
                  let { section: t, label: n, onClick: o } = e,
                    a = t.replace(/\W/gi, "_");
                  return (0, i.jsx)(
                    r.MenuItem,
                    {
                      id: a,
                      label: n,
                      action: () =>
                        null != o
                          ? o()
                          : (function (e, t) {
                              let n = Object.values(Z.oAB).filter(
                                (t) => t === e,
                              )[0];
                              null != n &&
                                l.Z.open(n, void 0, { analyticsLocations: t });
                            })(t, D),
                      children: O(t),
                    },
                    a,
                  );
                }),
                e.user.isStaff() && G.length > 0
                  ? (0, i.jsx)(r.MenuItem, {
                      label: "Build overrides",
                      id: "build_overrides",
                      children: (0, i.jsx)(r.MenuGroup, {
                        children: G.map((e) =>
                          (0, i.jsx)(
                            r.MenuRadioItem,
                            {
                              id: "input-".concat(e.payload),
                              group: "build_overrides",
                              label: e.id,
                              checked: (null == t ? void 0 : t.id) === e.id,
                              action: async () => {
                                if ((null == t ? void 0 : t.id) !== e.id)
                                  200 === (await (0, g.f0)(e.payload)).status &&
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
                  ? (0, i.jsx)(r.MenuGroup, {
                      children: (0, i.jsx)(r.MenuItem, {
                        id: "clear-build-override",
                        disabled: u,
                        label: j.intl.string(j.t["/Nz9ra"]),
                        action: U,
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(857595),
        l = n(607070),
        c = n(388032);
      function u() {
        let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n,
          } = (0, o.cj)([l.Z], () => ({
            saturation: l.Z.saturation,
            useReducedMotion: l.Z.useReducedMotion,
            roleStyle: l.Z.roleStyle,
          })),
          u = [
            { name: c.intl.string(c.t.YEOEi4), value: "username" },
            { name: c.intl.string(c.t.mQaro6), value: "dot" },
            { name: c.intl.string(c.t.Ji2EVF), value: "hidden" },
          ];
        return [
          (0, i.jsx)(
            r.MenuGroup,
            {
              children: (0, i.jsx)(r.MenuCheckboxItem, {
                id: "reduced-motion",
                label: c.intl.string(c.t.b3XBzs),
                checked: t,
                action: () => (0, a.Zt)(t ? "no-preference" : "reduce"),
              }),
            },
            "reduced-motion",
          ),
          (0, i.jsx)(
            r.MenuGroup,
            {
              children: (0, i.jsx)(r.MenuControlItem, {
                id: "input",
                label: c.intl.string(c.t["5PWWCQ"]),
                control: (t, n) =>
                  (0, i.jsx)(r.MenuSliderControl, {
                    ...t,
                    ref: n,
                    value: 100 * e,
                    onChange: (e) => (0, a.o2)(e / 100),
                    "aria-label": c.intl.string(c.t["5PWWCQ"]),
                  }),
              }),
            },
            "input",
          ),
          (0, i.jsx)(
            r.MenuGroup,
            {
              children: (0, i.jsx)(r.MenuItem, {
                id: "role-colors",
                label: c.intl.string(c.t.uSOPWl),
                children: u.map((e) => {
                  let { name: t, value: o } = e;
                  return (0, i.jsx)(
                    r.MenuRadioItem,
                    {
                      id: o,
                      group: "role-colors",
                      checked: o === n,
                      label: t,
                      action: () => (0, a.u1)(o),
                    },
                    o,
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
          return _;
        },
      }),
        n(653041);
      var i = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(153867),
        l = n(857595),
        c = n(607070),
        u = n(906732),
        s = n(705262),
        d = n(540059),
        g = n(210887),
        m = n(740492),
        b = n(695346),
        p = n(874893),
        f = n(981631),
        h = n(388032);
      function _() {
        let e = b.jU.useSetting(),
          { analyticsLocations: t } = (0, u.ZP)(),
          {
            theme: n,
            useSystemTheme: _,
            useForcedColors: S,
          } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
          })),
          x = b.N5.useSetting(),
          M = (0, d.Q3)("appearance_settings"),
          C = (0, d.o9)("appearance_settings"),
          Z = (e, o) =>
            (0, i.jsx)(r.MenuRadioItem, {
              id: e,
              group: "input-modes",
              label: o,
              disabled: S,
              checked: _ === p.K.ON ? "system" === e : e === n,
              action: () => {
                (0, s.Yk)({
                  isPersisted: !0,
                  analyticsLocations: t,
                  themeName: "default ".concat(e),
                }),
                  (0, a.ZI)({ theme: e });
              },
            }),
          j = [
            (0, i.jsxs)(
              r.MenuGroup,
              {
                children: [
                  Z(f.BRd.DARK, h.intl.string(h.t.b8Cei4)),
                  Z(f.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
                  M &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        Z(f.BRd.DARKER, "Darker"),
                        Z(f.BRd.MIDNIGHT, h.intl.string(h.t.pQwSpa)),
                      ],
                    }),
                  Z("system", h.intl.string(h.t["7rOU6u"])),
                ],
              },
              "theme-items",
            ),
            ,
          ];
        return (
          C
            ? (j.push(
                (0, i.jsxs)(
                  r.MenuGroup,
                  {
                    label: "UI Density",
                    children: [
                      (0, i.jsx)(r.MenuRadioItem, {
                        id: "cozy-ui",
                        group: "list-density",
                        label: "Cozy",
                        checked: "cozy" === x,
                        action: () => {
                          b.N5.updateSetting("cozy");
                        },
                      }),
                      (0, i.jsx)(r.MenuRadioItem, {
                        id: "compact-ui",
                        group: "list-density",
                        label: "Compact",
                        checked: "compact" === x,
                        action: () => {
                          b.N5.updateSetting("compact");
                        },
                      }),
                    ],
                  },
                  "list-density",
                ),
              ),
              j.push(
                (0, i.jsxs)(
                  r.MenuGroup,
                  {
                    label: "Message Display",
                    children: [
                      (0, i.jsx)(r.MenuRadioItem, {
                        id: "cozy-chat",
                        group: "chat-density",
                        label: "Cozy",
                        checked: !e,
                        action: () => {
                          b.jU.updateSetting(!1), (0, l.ZZ)();
                        },
                      }),
                      (0, i.jsx)(r.MenuRadioItem, {
                        id: "compact-chat",
                        group: "chat-density",
                        label: "Compact",
                        checked: e,
                        action: () => {
                          b.jU.updateSetting(!0), (0, l.ZZ)();
                        },
                      }),
                    ],
                  },
                  "chat-density",
                ),
              ),
              j.push(
                (0, i.jsx)(
                  r.MenuGroup,
                  {
                    children: (0, i.jsx)(r.MenuCheckboxItem, {
                      id: "desktop-refresh-override",
                      label: "Enable Desktop Refresh",
                      action: () => {
                        a.ZP.updatedUnsyncedSettings({
                          disableVisualRefresh: M,
                        });
                      },
                      checked: M,
                    }),
                  },
                  "refresh-experiment",
                ),
              ))
            : j.push(
                (0, i.jsx)(
                  r.MenuGroup,
                  {
                    children: (0, i.jsx)(r.MenuItem, {
                      id: "compact-mode",
                      label: e
                        ? h.intl.string(h.t.CTpwDw)
                        : h.intl.string(h.t["J/FISU"]),
                      action: () => {
                        b.jU.updateSetting(!e), (0, l.ZZ)();
                      },
                    }),
                  },
                  "compact-mode",
                ),
              ),
          j
        );
      }
    },
    74869: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        r = n(348327),
        a = n.n(r),
        l = n(658722),
        c = n.n(l),
        u = n(442837),
        s = n(481060),
        d = n(492435),
        g = n(353926),
        m = n(499533),
        b = n(388032);
      function p(e) {
        let { id: t, experiment: n, currentBucket: o } = e;
        return (0, i.jsxs)(
          s.MenuItem,
          {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
              n.buckets.map((e) =>
                (0, i.jsx)(
                  s.MenuCheckboxItem,
                  {
                    id: "".concat(e),
                    label: m.Z.getExperimentBucketName(e),
                    checked: e === o,
                    action: () => (0, d.rX)(t, e),
                  },
                  "".concat(e),
                ),
              ),
              (0, i.jsx)(s.MenuGroup, {
                children:
                  -1 !== o &&
                  (0, i.jsx)(s.MenuItem, {
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
      function f() {
        let e = (0, u.e7)(
            [g.Z, g.Z],
            () => {
              let e = g.Z.getRegisteredExperiments();
              return Object.keys(e).map((t) => {
                let n = e[t],
                  i = g.Z.getExperimentOverrideDescriptor(t);
                return {
                  id: t,
                  experiment: n,
                  currentBucket: null != i ? i.bucket : -1,
                };
              });
            },
            [],
            a(),
          ),
          [t, n] = o.useState(""),
          [r, l] = o.useState([]);
        o.useEffect(() => {
          if (0 === t.trim().length) {
            l(e);
            return;
          }
          l(e.filter((e) => c()(t, e.experiment.title.toLowerCase())));
        }, [e, t]);
        let d = o.useMemo(
            () =>
              r.filter((e) => {
                let { currentBucket: t } = e;
                return -1 !== t;
              }),
            [r],
          ),
          m = o.useMemo(
            () =>
              r.filter((e) => {
                let { currentBucket: t } = e;
                return -1 === t;
              }),
            [r],
          ),
          f = o.useMemo(() => d.map(p), [d]),
          h = o.useMemo(() => m.map(p), [m]);
        return [
          (0, i.jsx)(
            s.MenuControlItem,
            {
              id: "experiments-search",
              control: (e, o) =>
                (0, i.jsx)(s.MenuSearchControl, {
                  ...e,
                  query: t,
                  onChange: n,
                  ref: o,
                  placeholder: b.intl.string(b.t["5h0QOD"]),
                }),
            },
            "experiments-search",
          ),
          (0, i.jsx)(s.MenuSeparator, {}, "separator"),
          ...f,
          f.length > 0 ? (0, i.jsx)(s.MenuSeparator, {}, "separator-2") : null,
          ...h,
        ];
      }
    },
    45570: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(547972),
        a = n(326528);
      function l() {
        let e = (0, a.b)().map((e) =>
          (0, i.jsx)(
            o.MenuItem,
            { id: e.id, label: e.title, action: () => (0, r.Z)(e.id) },
            e.id,
          ),
        );
        return (0, i.jsx)(i.Fragment, { children: e });
      }
    },
    308512: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(223245),
        l = n(246946),
        c = n(388032);
      function u() {
        let e = (0, o.e7)([l.Z], () => l.Z.enabled, []);
        return (0, i.jsx)(r.MenuCheckboxItem, {
          id: "streamer-mode-toggle",
          label: c.intl.string(c.t.p9ZAJS),
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(626135),
        a = n(695346),
        l = n(981631),
        c = n(388032);
      function u() {
        let e = a.dN.useSetting(),
          t = a.R$.useSetting();
        return e
          ? null
          : (0, i.jsx)(o.MenuCheckboxItem, {
              id: "preview-markdown-toggle",
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                let e = !t;
                r.default.track(l.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                  enabled: e,
                  location: { section: l.jXE.SETTINGS_CONTEXT_MENU },
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        r = n(906732),
        a = n(453925),
        l = n(821564),
        c = n(632304);
      function u() {
        let { analyticsLocations: e } = (0, r.ZP)();
        return [
          (0, i.jsx)(
            o.MenuGroup,
            { children: (0, l.Z)(e) },
            "input-mode-items",
          ),
          (0, i.jsxs)(
            o.MenuGroup,
            { children: [(0, a.Z)(e), (0, c.Z)(e)] },
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
      var i = n(200651);
      n(192379);
      var o = n(442837),
        r = n(481060),
        a = n(179658),
        l = n(482215),
        c = n(906467),
        u = n(857192),
        s = n(594174);
      function d() {
        let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: n,
          } = (0, o.cj)([u.default, s.default, c.Z], () => {
            var e;
            return {
              layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
              isStaff:
                (null === (e = s.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.isStaff()) === !0,
              isDeveloper: c.Z.isDeveloper,
            };
          }),
          {
            horizontalSpacing: d,
            verticalSpacing: g,
            maxHorizontalSpacing: m,
            maxVerticalSpacing: b,
          } = (0, l.i)(),
          { setHorizontalSpacing: p, setVerticalSpacing: f } = l.i.getState(),
          h = [];
        return (
          t &&
            n &&
            (h.push(
              (0, i.jsx)(
                r.MenuCheckboxItem,
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
              (h.push(
                (0, i.jsx)(
                  r.MenuControlItem,
                  {
                    id: "horizontal-spacing",
                    label: "Horizontal Spacing",
                    control: (e, t) =>
                      (0, i.jsx)(r.MenuSliderControl, {
                        ...e,
                        ref: t,
                        value: d,
                        minValue: 0,
                        maxValue: m,
                        onChange: (e) => p(e),
                        renderValue: (e) => "".concat(Math.round(e), "px"),
                        "aria-label": "Horizontal Spacing",
                      }),
                  },
                  "horizontal-spacing",
                ),
              ),
              h.push(
                (0, i.jsx)(
                  r.MenuControlItem,
                  {
                    id: "vertical-spacing",
                    label: "Vertical Spacing",
                    control: (e, t) =>
                      (0, i.jsx)(r.MenuSliderControl, {
                        ...e,
                        ref: t,
                        value: g,
                        minValue: 0,
                        maxValue: b,
                        onChange: (e) => f(e),
                        "aria-label": "Horizontal Spacing",
                        renderValue: (e) => "".concat(Math.round(e), "px"),
                      }),
                  },
                  "vertical-spacing",
                ),
              ))),
          0 === h.length ? null : (0, i.jsx)(i.Fragment, { children: h })
        );
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return f;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return m;
        },
        ac: function () {
          return h;
        },
        bL: function () {
          return p;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return g;
        },
        rr: function () {
          return b;
        },
        xH: function () {
          return _;
        },
      }),
        n(47120);
      var i,
        o,
        r = n(695346),
        a = n(486472),
        l = n(430824);
      n(626135);
      var c = n(981631),
        u = n(388032);
      let s = 864e5 * c.eBq;
      function d() {
        let e = r.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g() {
        let e = r.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function m() {
        let e = r.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function b() {
        let e = r.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function p(e) {
        return (e & c.HGf) === c.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS,
            };
      }
      function f(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = i || (i = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
      let h = { 0: void 0, 1: !0, 2: !1 };
      function _() {
        return [
          {
            name: u.intl.string(u.t["/yLMRU"]),
            desc: u.intl.string(u.t["3fzkPj"]),
            value: 1,
          },
          {
            name: u.intl.string(u.t["21fP2d"]),
            desc: u.intl.string(u.t.ggJ9jY),
            value: 2,
          },
          {
            name: u.intl.string(u.t["OWIo8/"]),
            desc: u.intl.string(u.t.HqYXp6),
            value: 0,
          },
        ];
      }
    },
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    840814: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    776394: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, t, n) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    913074: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
  },
]);
//# sourceMappingURL=1d8fd858cf79721f5133.js.map
