"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98335"],
  {
    731646: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        });
      var e = i(200651),
        l = i(192379),
        a = i(481060),
        r = i(239091),
        d = i(299206),
        u = i(388032);
      function c(n) {
        var t;
        let i = (0, d.Z)({ id: n.id, label: n.label, shiftId: n.shiftId });
        return (
          l.useEffect(() => {
            null == i && (0, r.Zy)();
          }, [i]),
          (0, e.jsx)(a.Menu, {
            onSelect: n.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (t = n["aria-label"]) && void 0 !== t
                ? t
                : u.intl.string(u.t.ogxXGh),
            onClose: r.Zy,
            children: i,
          })
        );
      }
    },
    485292: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return v;
          },
        });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(239091),
        d = i(812206),
        u = i(731646),
        c = i(283595),
        o = i(499502),
        s = i(955809),
        I = i(332845),
        b = i(78874),
        f = i(350758),
        h = i(149835),
        p = i(38346),
        Z = i(683609),
        g = i(679879),
        A = i(981631),
        T = i(388032);
      function x(n) {
        let {
            application: t,
            libraryApplication: i,
            analyticsContext: l,
            onSelect: d,
          } = n,
          u = {
            ...(null != l ? l.location : null),
            object: A.qAy.CONTEXT_MENU,
          },
          c = (0, b.Z)(i, u),
          x = (0, f.Z)(i),
          v = (0, p.Z)(i),
          E = (0, g.Z)(i),
          m = (0, Z.Z)(i),
          _ = (0, I.Z)(i, t),
          L = (0, h.Z)(i, t),
          S = (0, o.Z)(i, t),
          M = (0, s.Z)(t);
        return (0, e.jsxs)(a.Menu, {
          navId: "game-context",
          onClose: r.Zy,
          "aria-label": T.intl.string(T.t.tKobzc),
          onSelect: d,
          children: [
            c,
            x,
            v,
            E,
            m,
            _,
            L,
            (0, e.jsx)(a.MenuGroup, { children: S }),
            (0, e.jsx)(a.MenuGroup, { children: M }),
          ],
        });
      }
      function v(n) {
        let { applicationId: t, branchId: i } = n,
          a = (0, l.e7)([d.Z], () => d.Z.getApplication(t), [t]),
          r = (0, l.e7)(
            [c.Z],
            () =>
              null != i
                ? c.Z.getLibraryApplication(t, i)
                : c.Z.getActiveLibraryApplication(t),
            [t, i],
          );
        return null == a || null == r
          ? (0, e.jsx)(u.default, {
              ...n,
              id: t,
              label: T.intl.string(T.t["FfCL+/"]),
            })
          : (0, e.jsx)(x, { ...n, application: a, libraryApplication: r });
      }
    },
    499502: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(481060),
        a = i(695346),
        r = i(572004),
        d = i(388032);
      function u(n, t) {
        let i = t.primarySkuId,
          u = a.Sb.useSetting();
        return !__OVERLAY__ && u && r.wS
          ? (0, e.jsxs)(l.MenuItem, {
              id: "application-dev",
              label: d.intl.string(d.t.OpuAlJ),
              action: () => (0, r.JG)(t.id),
              children: [
                (0, e.jsx)(l.MenuItem, {
                  id: "app-id",
                  label: d.intl.string(d.t.qSHsho),
                  action: () => (0, r.JG)(t.id),
                }),
                null != n
                  ? (0, e.jsx)(l.MenuItem, {
                      id: "branch-id",
                      label: d.intl.string(d.t.g7oyys),
                      action: () => (0, r.JG)(n.branchId),
                    })
                  : null,
                null != i
                  ? (0, e.jsx)(l.MenuItem, {
                      id: "sku-id",
                      label: d.intl.string(d.t.hReUdH),
                      action: () => (0, r.JG)(i),
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    955809: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(131951),
        d = i(388032);
      function u(n) {
        return (0, l.e7)([r.Z], () => r.Z.hasContext(n.id), [n.id])
          ? (0, e.jsx)(a.MenuItem, {
              id: "ingame-voice",
              label: d.intl.string(d.t["pOul5+"]),
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await i
                    .e("45406")
                    .then(i.bind(i, 344516));
                  return (i) =>
                    (0, e.jsx)(t, {
                      ...i,
                      mediaEngineContext: n.id,
                      title: n.name,
                    });
                }),
            })
          : null;
      }
    },
    332845: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(417363),
        d = i(877481),
        u = i(358085),
        c = i(388032);
      function o(n, t) {
        let i = n.getBranchedName(t),
          o = (0, l.e7)(
            [r.Z],
            () => {
              let t = r.Z.getState(n.id, n.branchId);
              return null == t ? void 0 : t.installPath;
            },
            [n.branchId, n.id],
          );
        return null != o && (0, u.isDesktop)()
          ? (0, e.jsx)(a.MenuItem, {
              id: "create-shortcut",
              label: c.intl.string(c.t.T4tecH),
              action: () => d.Z.createShortcuts(!0, !1, i, n.id, o),
            })
          : null;
      }
    },
    78874: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return f;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(594190),
        d = i(757266),
        u = i(283595),
        c = i(417363),
        o = i(804739),
        s = i(346329),
        I = i(592745),
        b = i(388032);
      function f(n, t) {
        let i = (0, l.e7)(
            [r.ZP],
            () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          f = (0, l.e7)(
            [u.Z, I.Z, c.Z, d.Z],
            () =>
              (0, o.t)({
                LibraryApplicationStore: u.Z,
                LaunchableGameStore: I.Z,
                DispatchApplicationStore: c.Z,
                ConnectedAppsStore: d.Z,
                applicationId: n.id,
                branchId: n.branchId,
              }),
            [n.branchId, n.id],
          );
        return i || !f
          ? null
          : (0, e.jsx)(a.MenuItem, {
              id: "launch",
              label: b.intl.string(b.t.XKUw8v),
              action: () =>
                s.playApplication(n.id, n, {
                  analyticsParams: { location: t },
                }),
            });
      }
    },
    350758: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return s;
        },
      }),
        i(47120);
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(594190),
        d = i(417363),
        u = i(346329),
        c = i(981631),
        o = i(388032);
      function s(n) {
        let t = (0, l.e7)(
            [r.ZP],
            () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          [i, s] = (0, l.Wu)(
            [d.Z],
            () => [
              d.Z.isUpToDate(n.id, n.branchId),
              d.Z.shouldPatch(n.id, n.branchId),
            ],
            [n.branchId, n.id],
          );
        return i && !t && s
          ? (0, e.jsx)(a.MenuItem, {
              id: "repair",
              label: o.intl.string(o.t.CKCcd3),
              action: () =>
                u.repairApplication(
                  n.id,
                  n.branchId,
                  c.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                ),
            })
          : null;
      }
    },
    149835: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return b;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(58642),
        d = i(283595),
        u = i(417363),
        c = i(626135),
        o = i(630388),
        s = i(981631),
        I = i(388032);
      function b(n, t) {
        let i = (0, l.e7)([u.Z], () => u.Z.isInstalled(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]),
          b = (0, l.e7)(
            [d.Z],
            () => !d.Z.hasRemovedLibraryApplicationThisSession,
          );
        if (i && !n.isHidden()) return null;
        function f() {
          let t = (0, o.x9)(n.getFlags(), s.eHb.HIDDEN);
          r.h(n.id, n.branchId, t),
            c.default.track(s.rMx.APPLICATION_SETTINGS_UPDATED, {
              hidden_enabled: (0, o.yE)(t, s.eHb.HIDDEN),
              ...n.getAnalyticsData(),
            });
        }
        return (0, e.jsx)(a.MenuItem, {
          id: "in-library",
          label: n.isHidden()
            ? I.intl.string(I.t["0dnEUF"])
            : I.intl.string(I.t.TuJXLy),
          action: function () {
            null != n &&
              null != t &&
              (n.isHidden() || !b
                ? f()
                : (0, a.openModal)((n) =>
                    (0, e.jsx)(a.ConfirmModal, {
                      header: I.intl.string(I.t.oB7isr),
                      confirmText: I.intl.string(I.t.OWjIiY),
                      cancelText: I.intl.string(I.t["ETE/oK"]),
                      onConfirm: () => f(),
                      confirmButtonColor: a.Button.Colors.BRAND,
                      ...n,
                      children: (0, e.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: I.intl.format(I.t.HXfjKi, { name: t.name }),
                      }),
                    }),
                  ));
          },
        });
      }
    },
    38346: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return b;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(442837),
        a = i(481060),
        r = i(943094),
        d = i(594190),
        u = i(173747),
        c = i(417363),
        o = i(346329),
        s = i(981631),
        I = i(388032);
      function b(n) {
        let t = (0, l.e7)(
            [d.ZP],
            () => d.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          i = (0, l.e7)([c.Z], () => c.Z.isInstalled(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]),
          b = (0, l.e7)([u.Z], () => u.Z.getTargetManifests(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]);
        if (i)
          return t
            ? null
            : (0, e.jsx)(a.MenuItem, {
                id: "uninstall",
                label: I.intl.string(I.t.DwgfOD),
                action: () =>
                  (0, r.W)(
                    n.id,
                    n.branchId,
                    s.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                  ),
              });
        return null == b
          ? null
          : (0, e.jsx)(a.MenuItem, {
              id: "install",
              label: I.intl.string(I.t["N+XVnp"]),
              action: () =>
                o.installApplication(
                  n.id,
                  n.branchId,
                  s.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                ),
            });
      }
    },
    683609: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(481060),
        a = i(58642),
        r = i(626135),
        d = i(630388),
        u = i(981631),
        c = i(388032);
      function o(n) {
        return null == n
          ? null
          : (0, e.jsx)(l.MenuCheckboxItem, {
              id: "on-overlay",
              label: c.intl.string(c.t.rgZKg4),
              action: function () {
                if (null == n) return;
                let t = (0, d.x9)(n.getFlags(), u.eHb.OVERLAY_DISABLED);
                a.h(n.id, n.branchId, t),
                  r.default.track(u.rMx.APPLICATION_SETTINGS_UPDATED, {
                    overlay_disabled: (0, d.yE)(t, u.eHb.OVERLAY_DISABLED),
                    ...n.getAnalyticsData(),
                  });
              },
              checked: n.hasFlag(u.eHb.OVERLAY_DISABLED),
            });
      }
    },
    679879: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var e = i(200651);
      i(192379);
      var l = i(481060),
        a = i(58642),
        r = i(626135),
        d = i(630388),
        u = i(981631),
        c = i(388032);
      function o(n) {
        return null == n
          ? null
          : (0, e.jsx)(l.MenuCheckboxItem, {
              id: "private",
              label: c.intl.string(c.t.fHDNJi),
              action: function () {
                if (null == n) return;
                let t = (0, d.x9)(n.getFlags(), u.eHb.PRIVATE);
                a.h(n.id, n.branchId, t),
                  r.default.track(u.rMx.APPLICATION_SETTINGS_UPDATED, {
                    private_enabled: (0, d.yE)(t, u.eHb.PRIVATE),
                    ...n.getAnalyticsData(),
                  });
              },
              checked: n.hasFlag(u.eHb.PRIVATE),
            });
      }
    },
  },
]);
//# sourceMappingURL=a81c8334ccd0b4ed214a.js.map
