"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98335"],
  {
    731646: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var i = t(735250),
        a = t(470079),
        l = t(481060),
        r = t(239091),
        d = t(299206),
        s = t(689938);
      function u(n) {
        var e;
        let t = (0, d.Z)({ id: n.id, label: n.label, shiftId: n.shiftId });
        return (
          a.useEffect(() => {
            null == t && (0, r.Zy)();
          }, [t]),
          (0, i.jsx)(l.Menu, {
            onSelect: n.onSelect,
            navId: "dev-context",
            "aria-label":
              null !== (e = n["aria-label"]) && void 0 !== e
                ? e
                : s.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
            onClose: r.Zy,
            children: t,
          })
        );
      }
    },
    485292: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return P;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(239091),
        d = t(812206),
        s = t(731646),
        u = t(283595),
        c = t(499502),
        I = t(955809),
        o = t(332845),
        A = t(78874),
        _ = t(350758),
        T = t(149835),
        E = t(38346),
        N = t(683609),
        Z = t(679879),
        M = t(981631),
        b = t(689938);
      function C(n) {
        let {
            application: e,
            libraryApplication: t,
            analyticsContext: a,
            onSelect: d,
          } = n,
          s = {
            ...(null != a ? a.location : null),
            object: M.qAy.CONTEXT_MENU,
          },
          u = (0, A.Z)(t, s),
          C = (0, _.Z)(t),
          P = (0, E.Z)(t),
          O = (0, Z.Z)(t),
          f = (0, N.Z)(t),
          L = (0, o.Z)(t, e),
          h = (0, T.Z)(t, e),
          p = (0, c.Z)(t, e),
          g = (0, I.Z)(e);
        return (0, i.jsxs)(l.Menu, {
          navId: "game-context",
          onClose: r.Zy,
          "aria-label": b.Z.Messages.APPLICATION_ACTIONS_MENU_LABEL,
          onSelect: d,
          children: [
            u,
            C,
            P,
            O,
            f,
            L,
            h,
            (0, i.jsx)(l.MenuGroup, { children: p }),
            (0, i.jsx)(l.MenuGroup, { children: g }),
          ],
        });
      }
      function P(n) {
        let { applicationId: e, branchId: t } = n,
          l = (0, a.e7)([d.Z], () => d.Z.getApplication(e), [e]),
          r = (0, a.e7)(
            [u.Z],
            () =>
              null != t
                ? u.Z.getLibraryApplication(e, t)
                : u.Z.getActiveLibraryApplication(e),
            [e, t],
          );
        return null == l || null == r
          ? (0, i.jsx)(s.default, {
              ...n,
              id: e,
              label: b.Z.Messages.COPY_ID_APPLICATION,
            })
          : (0, i.jsx)(C, { ...n, application: l, libraryApplication: r });
      }
    },
    499502: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(695346),
        r = t(572004),
        d = t(689938);
      function s(n, e) {
        let t = e.primarySkuId,
          s = l.Sb.useSetting();
        return !__OVERLAY__ && s && r.wS
          ? (0, i.jsxs)(a.MenuItem, {
              id: "application-dev",
              label: d.Z.Messages.COPY,
              action: () => (0, r.JG)(e.id),
              children: [
                (0, i.jsx)(a.MenuItem, {
                  id: "app-id",
                  label: d.Z.Messages.APPLICATION_CONTEXT_MENU_APPLICATION_ID,
                  action: () => (0, r.JG)(e.id),
                }),
                null != n
                  ? (0, i.jsx)(a.MenuItem, {
                      id: "branch-id",
                      label: d.Z.Messages.APPLICATION_CONTEXT_MENU_BRANCH_ID,
                      action: () => (0, r.JG)(n.branchId),
                    })
                  : null,
                null != t
                  ? (0, i.jsx)(a.MenuItem, {
                      id: "sku-id",
                      label: d.Z.Messages.APPLICATION_CONTEXT_MENU_SKU_ID,
                      action: () => (0, r.JG)(t),
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    955809: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(131951),
        d = t(689938);
      function s(n) {
        return (0, a.e7)([r.Z], () => r.Z.hasContext(n.id), [n.id])
          ? (0, i.jsx)(l.MenuItem, {
              id: "ingame-voice",
              label: d.Z.Messages.IN_GAME_VOICE_SETTINGS,
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("66063")
                    .then(t.bind(t, 344516));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      mediaEngineContext: n.id,
                      title: n.name,
                    });
                }),
            })
          : null;
      }
    },
    332845: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(417363),
        d = t(877481),
        s = t(358085),
        u = t(689938);
      function c(n, e) {
        let t = n.getBranchedName(e),
          c = (0, a.e7)(
            [r.Z],
            () => {
              let e = r.Z.getState(n.id, n.branchId);
              return null == e ? void 0 : e.installPath;
            },
            [n.branchId, n.id],
          );
        return null != c && (0, s.isDesktop)()
          ? (0, i.jsx)(l.MenuItem, {
              id: "create-shortcut",
              label:
                u.Z.Messages.APPLICATION_CONTEXT_MENU_CREATE_DESKTOP_SHORTCUT,
              action: () => d.Z.createShortcuts(!0, !1, t, n.id, c),
            })
          : null;
      }
    },
    78874: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(594190),
        d = t(757266),
        s = t(283595),
        u = t(417363),
        c = t(804739),
        I = t(346329),
        o = t(592745),
        A = t(689938);
      function _(n, e) {
        let t = (0, a.e7)(
            [r.ZP],
            () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          _ = (0, a.e7)(
            [s.Z, o.Z, u.Z, d.Z],
            () =>
              (0, c.t)({
                LibraryApplicationStore: s.Z,
                LaunchableGameStore: o.Z,
                DispatchApplicationStore: u.Z,
                ConnectedAppsStore: d.Z,
                applicationId: n.id,
                branchId: n.branchId,
              }),
            [n.branchId, n.id],
          );
        return t || !_
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "launch",
              label: A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
              action: () =>
                I.playApplication(n.id, n, {
                  analyticsParams: { location: e },
                }),
            });
      }
    },
    350758: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(594190),
        d = t(417363),
        s = t(346329),
        u = t(981631),
        c = t(689938);
      function I(n) {
        let e = (0, a.e7)(
            [r.ZP],
            () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          [t, I] = (0, a.Wu)(
            [d.Z],
            () => [
              d.Z.isUpToDate(n.id, n.branchId),
              d.Z.shouldPatch(n.id, n.branchId),
            ],
            [n.branchId, n.id],
          );
        return t && !e && I
          ? (0, i.jsx)(l.MenuItem, {
              id: "repair",
              label: c.Z.Messages.APPLICATION_CONTEXT_MENU_REPAIR,
              action: () =>
                s.repairApplication(
                  n.id,
                  n.branchId,
                  u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                ),
            })
          : null;
      }
    },
    149835: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return A;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(58642),
        d = t(283595),
        s = t(417363),
        u = t(626135),
        c = t(630388),
        I = t(981631),
        o = t(689938);
      function A(n, e) {
        let t = (0, a.e7)([s.Z], () => s.Z.isInstalled(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]),
          A = (0, a.e7)(
            [d.Z],
            () => !d.Z.hasRemovedLibraryApplicationThisSession,
          );
        if (t && !n.isHidden()) return null;
        function _() {
          let e = (0, c.x9)(n.getFlags(), I.eHb.HIDDEN);
          r.h(n.id, n.branchId, e),
            u.default.track(I.rMx.APPLICATION_SETTINGS_UPDATED, {
              hidden_enabled: (0, c.yE)(e, I.eHb.HIDDEN),
              ...n.getAnalyticsData(),
            });
        }
        return (0, i.jsx)(l.MenuItem, {
          id: "in-library",
          label: n.isHidden()
            ? o.Z.Messages.APPLICATION_CONTEXT_MENU_SHOW
            : o.Z.Messages.APPLICATION_CONTEXT_MENU_HIDE,
          action: function () {
            null != n &&
              null != e &&
              (n.isHidden() || !A
                ? _()
                : (0, l.openModal)((n) =>
                    (0, i.jsx)(l.ConfirmModal, {
                      header:
                        o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_HEADER,
                      confirmText:
                        o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_CONFIRM,
                      cancelText: o.Z.Messages.CANCEL,
                      onConfirm: () => _(),
                      confirmButtonColor: l.Button.Colors.BRAND,
                      ...n,
                      children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children:
                          o.Z.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_BODY.format(
                            { name: e.name },
                          ),
                      }),
                    }),
                  ));
          },
        });
      }
    },
    38346: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return A;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(943094),
        d = t(594190),
        s = t(173747),
        u = t(417363),
        c = t(346329),
        I = t(981631),
        o = t(689938);
      function A(n) {
        let e = (0, a.e7)(
            [d.ZP],
            () => d.ZP.getRunningVerifiedApplicationIds().includes(n.id),
            [n.id],
          ),
          t = (0, a.e7)([u.Z], () => u.Z.isInstalled(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]),
          A = (0, a.e7)([s.Z], () => s.Z.getTargetManifests(n.id, n.branchId), [
            n.branchId,
            n.id,
          ]);
        if (t)
          return e
            ? null
            : (0, i.jsx)(l.MenuItem, {
                id: "uninstall",
                label: o.Z.Messages.APPLICATION_CONTEXT_MENU_UNINSTALL,
                action: () =>
                  (0, r.W)(
                    n.id,
                    n.branchId,
                    I.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                  ),
              });
        return null == A
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "install",
              label: o.Z.Messages.APPLICATION_CONTEXT_MENU_INSTALL,
              action: () =>
                c.installApplication(
                  n.id,
                  n.branchId,
                  I.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL,
                ),
            });
      }
    },
    683609: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(58642),
        r = t(626135),
        d = t(630388),
        s = t(981631),
        u = t(689938);
      function c(n) {
        return null == n
          ? null
          : (0, i.jsx)(a.MenuCheckboxItem, {
              id: "on-overlay",
              label:
                u.Z.Messages.APPLICATION_CONTEXT_MENU_TOGGLE_OVERLAY_DISABLE,
              action: function () {
                if (null == n) return;
                let e = (0, d.x9)(n.getFlags(), s.eHb.OVERLAY_DISABLED);
                l.h(n.id, n.branchId, e),
                  r.default.track(s.rMx.APPLICATION_SETTINGS_UPDATED, {
                    overlay_disabled: (0, d.yE)(e, s.eHb.OVERLAY_DISABLED),
                    ...n.getAnalyticsData(),
                  });
              },
              checked: n.hasFlag(s.eHb.OVERLAY_DISABLED),
            });
      }
    },
    679879: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(58642),
        r = t(626135),
        d = t(630388),
        s = t(981631),
        u = t(689938);
      function c(n) {
        return null == n
          ? null
          : (0, i.jsx)(a.MenuCheckboxItem, {
              id: "private",
              label: u.Z.Messages.APPLICATION_CONTEXT_MENU_PRIVATE_STATUS,
              action: function () {
                if (null == n) return;
                let e = (0, d.x9)(n.getFlags(), s.eHb.PRIVATE);
                l.h(n.id, n.branchId, e),
                  r.default.track(s.rMx.APPLICATION_SETTINGS_UPDATED, {
                    private_enabled: (0, d.yE)(e, s.eHb.PRIVATE),
                    ...n.getAnalyticsData(),
                  });
              },
              checked: n.hasFlag(s.eHb.PRIVATE),
            });
      }
    },
  },
]);
//# sourceMappingURL=4389b0aced81f90be571.js.map
