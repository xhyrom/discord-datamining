"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6380"],
  {
    715941: function (t) {
      t.exports = "/assets/c488a45014a69f51323f.svg";
    },
    317192: function (t) {
      t.exports = "/assets/fe1c3b678488680ac1d9.svg";
    },
    309509: function (t) {
      t.exports = "/assets/fb424939519866d6b315.svg";
    },
    264298: function (t) {
      t.exports = "/assets/c0b33a7d96167730c5b4.svg";
    },
    969315: function (t) {
      t.exports = "/assets/47d49d61d38df603f2b5.svg";
    },
    157118: function (t) {
      t.exports = "/assets/700e46ddbc342b127c51.svg";
    },
    372123: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      }),
        n(411104);
      var i = n(570140),
        l = n(710845),
        r = n(209492),
        o = n(981631);
      let a = new l.Z("CloudSync");
      class s {
        constructor(t) {
          var e, n, i;
          (e = this),
            (i = void 0),
            (n = "message") in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i),
            (this.message = t);
        }
      }
      async function c(t, e) {
        let n,
          l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        i.Z.dispatch({
          type: "GAME_CLOUD_SYNC_START",
          applicationId: t,
          branchId: e,
        });
        try {
          if ((n = await r.j(t, e, l)).type === o.QCD.CONFLICT)
            throw (
              (i.Z.dispatch({
                type: "GAME_CLOUD_SYNC_CONFLICT",
                applicationId: t,
                branchId: e,
                next: n.next,
                remote: n.remote,
              }),
              new s("Conflict in cloud sync."))
            );
          (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) &&
            a.info("Sync complete", n);
        } catch (n) {
          if (n instanceof s) throw n;
          throw (
            (i.Z.dispatch({
              type: "GAME_CLOUD_SYNC_ERROR",
              applicationId: t,
              branchId: e,
            }),
            a.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
          );
        }
        return (
          i.Z.dispatch({
            type: "GAME_CLOUD_SYNC_COMPLETE",
            applicationId: t,
            branchId: e,
          }),
          n
        );
      }
    },
    696748: function (t, e, n) {
      n.d(e, {
        a: function () {
          return E;
        },
      }),
        n(411104),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(913527),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        c = n(372123),
        d = n(224706),
        u = n(812206),
        p = n(600164),
        h = n(293245),
        f = n(626135),
        C = n(981631),
        A = n(388032),
        T = n(621839),
        y = n(113207);
      function m(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class N extends l.PureComponent {
        renderConflictButton(t, e, n, l) {
          return (0, i.jsxs)(s.Button, {
            className: T.conflictButton,
            innerClassName: T.conflictButtonInner,
            onClick: l,
            children: [
              (0, i.jsx)("div", { className: n }),
              (0, i.jsxs)("div", {
                className: T.buttonBody,
                children: [
                  (0, i.jsx)("div", {
                    className: T.conflictTitle,
                    children: t,
                  }),
                  (0, i.jsx)("div", { children: A.intl.string(A.t.gflHOz) }),
                  (0, i.jsx)("div", {
                    className: T.timestamp,
                    children: o()(e).calendar(),
                  }),
                ],
              }),
            ],
          });
        }
        renderError() {
          let { application: t } = this.props;
          return (0, i.jsxs)(l.Fragment, {
            children: [
              (0, i.jsxs)(s.ModalContent, {
                children: [
                  (0, i.jsx)(p.Z, {
                    justify: p.Z.Justify.CENTER,
                    children: (0, i.jsx)("div", { className: T.errorArt }),
                  }),
                  (0, i.jsx)("div", {
                    className: T.description,
                    children: A.intl.format(A.t.RAaWyc, {
                      applicationName: t.name,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsxs)(p.Z, {
                  justify: p.Z.Justify.BETWEEN,
                  children: [
                    (0, i.jsx)(s.Button, {
                      className: T.linkButton,
                      size: T.linkButtonSize,
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: this.onClose,
                      children: A.intl.string(A.t["ETE/oK"]),
                    }),
                    (0, i.jsxs)(p.Z, {
                      direction: p.Z.Direction.HORIZONTAL,
                      justify: p.Z.Justify.END,
                      children: [
                        (0, i.jsx)(s.Button, {
                          look: s.Button.Looks.LINK,
                          color: s.Button.Colors.PRIMARY,
                          onClick: () => this.handlePlay(),
                          className: T.retryButton,
                          children: A.intl.string(A.t["5911LS"]),
                        }),
                        (0, i.jsx)(s.Button, {
                          onClick: () => this.handlePlay(!1),
                          children: A.intl.string(A.t["359PbW"]),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        renderConflict() {
          let { application: t, cloudSyncState: e } = this.props;
          if (e.type !== C.TzF.CONFLICT)
            throw Error("Cannot render conflict for non conflict type");
          return (0, i.jsxs)(s.ModalContent, {
            className: y.marginBottom20,
            children: [
              (0, i.jsx)("div", {
                className: T.description,
                children: A.intl.format(A.t.eyXUPz, {
                  applicationName: t.name,
                }),
              }),
              this.renderConflictButton(
                A.intl.string(A.t.AQUmkp),
                e.remote.timestamp,
                T.conflictDownloadArt,
                this.handleChooseDownload,
              ),
              (0, i.jsxs)(p.Z, {
                className: T.choiceWrapper,
                align: p.Z.Align.CENTER,
                children: [
                  (0, i.jsx)("div", { className: T.choiceLine }),
                  (0, i.jsx)("div", {
                    className: T.choiceTitle,
                    children: A.intl.string(A.t.WUsA2N),
                  }),
                  (0, i.jsx)("div", { className: T.choiceLine }),
                ],
              }),
              this.renderConflictButton(
                A.intl.string(A.t.AXVws7),
                e.next.timestamp,
                T.conflictUploadArt,
                this.handleChooseUpload,
              ),
            ],
          });
        }
        render() {
          let { cloudSyncState: t, transitionState: e } = this.props,
            n =
              t.type === C.TzF.CONFLICT
                ? A.intl.string(A.t.oNbO1d)
                : A.intl.string(A.t.as4Tgo);
          return (0, i.jsxs)(s.ModalRoot, {
            transitionState: e,
            className: T.modal,
            "aria-label": n,
            children: [
              (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(s.ModalCloseButton, {
                    className: T.closeButton,
                    onClick: this.onClose,
                  }),
                  (0, i.jsx)(s.FormTitle, {
                    tag: "h2",
                    className: y.marginReset,
                    children: n,
                  }),
                ],
              }),
              t.type === C.TzF.CONFLICT
                ? this.renderConflict()
                : this.renderError(),
            ],
          });
        }
        constructor(...t) {
          var e;
          super(...t),
            (e = this),
            m(this, "onClose", () => {
              this.props.onClose();
            }),
            m(this, "handlePlay", function () {
              let t =
                  !(arguments.length > 0) ||
                  void 0 === arguments[0] ||
                  arguments[0],
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { libraryApplication: i, analyticsParams: l } = e.props;
              e.onClose(),
                E(i.id, i, {
                  analyticsParams: l,
                  cloudSync: t,
                  cloudSyncForceHash: n,
                });
            }),
            m(this, "handleChooseDownload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            m(this, "handleChooseUpload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
        }
      }
      let g = a.ZP.connectStores([h.Z, u.Z], (t) => {
        let { libraryApplication: e, branchId: n } = t;
        return {
          cloudSyncState: h.Z.getState(e.id, n),
          application: u.Z.getApplication(e.id),
        };
      })(N);
      async function E(t, e, n) {
        let l = u.Z.getApplication(t);
        if (null == l) return;
        let {
          cloudSync: r = !0,
          cloudSyncForceHash: o = null,
          analyticsParams: a,
        } = n;
        if (r && null != e) {
          let t = e.branchId;
          try {
            await c.Z(e.id, t, o);
          } catch (n) {
            (0, s.openModal)((n) =>
              (0, i.jsx)(g, {
                libraryApplication: e,
                analyticsParams: a,
                branchId: t,
                ...n,
              }),
            );
            return;
          }
        }
        return (
          f.default.track(C.rMx.APPLICATION_OPENED, {
            application_id: l.id,
            application_name: l.name,
            type: C.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...a,
          }),
          d.Z.launch({
            applicationId: l.id,
            branchId: null == e ? void 0 : e.branchId,
          })
        );
      }
    },
    850840: function (t, e, n) {
      let i;
      n(653041);
      var l,
        r = n(442837),
        o = n(570140);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (l = r.ZP.PersistedStore) {
        initialize(t) {
          i = null != t ? t : s;
        }
        getState() {
          return i;
        }
        get hasAcceptedStoreTerms() {
          return i.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(t) {
          return i.hasAcceptedEulaIds.includes(t);
        }
      }
      a(c, "displayName", "ApplicationStoreUserSettingsStore"),
        a(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        a(c, "migrations", [
          (t) =>
            null == t.hasAcceptedEulaIds ? { ...t, hasAcceptedEulaIds: [] } : t,
        ]),
        (e.Z = new c(o.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            i.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (t) {
            let { eulaId: e } = t;
            if (i.hasAcceptedEulaIds.includes(e)) return !1;
            i.hasAcceptedEulaIds.push(e);
          },
        }));
    },
    293245: function (t, e, n) {
      let i, l, r;
      n(47120);
      var o,
        a,
        s,
        c,
        d = n(442837),
        u = n(570140),
        p = n(372123),
        h = n(594190),
        f = n(283595),
        C = n(780570),
        A = n(358085),
        T = n(209492),
        y = n(981631);
      class m extends (o = d.ZP.Store) {
        initialize() {
          A.isPlatformEmbedded && T.S(), (i = {}), (l = new Set()), (r = []);
        }
        getState(t, e) {
          return i[(0, C.Tu)(t, e)];
        }
        isSyncing(t, e) {
          let n = (0, C.Tu)(t, e);
          return l.has(n);
        }
      }
      (c = "CloudSyncStore"),
        (s = "displayName") in (a = m)
          ? Object.defineProperty(a, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = c),
        (e.Z = new m(u.Z, {
          GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: e, branchId: n } = t,
              i = (0, C.Tu)(e, n);
            l.add(i);
          },
          GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: e } = t;
            for (let t of Object.keys(e)) i[t] = e[t];
          },
          GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: e, branchId: n } = t,
              r = (0, C.Tu)(e, n);
            return (
              l.delete(r),
              (i[r] = { type: y.TzF.DONE, timestamp: Date.now() }),
              !0
            );
          },
          GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: e, branchId: n, next: r, remote: o } = t,
              a = (0, C.Tu)(e, n);
            (i[a] = { type: y.TzF.CONFLICT, next: r, remote: o }), l.delete(a);
          },
          GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: e, branchId: n } = t,
              r = (0, C.Tu)(e, n);
            (i[r] = { type: y.TzF.ERROR }), l.delete(r);
          },
          RUNNING_GAMES_CHANGE: function () {
            let t = h.ZP.getRunningDiscordApplicationIds();
            for (let e of r.filter((e) => !t.includes(e))) {
              let t = f.Z.getActiveLibraryApplication(e);
              if (null != t)
                u.Z.wait(() => {
                  try {
                    p.Z(t.id, t.branchId);
                  } catch (t) {}
                });
            }
            return (r = t), !1;
          },
        }));
    },
    209492: function (t, e, n) {
      let i;
      n.d(e, {
        S: function () {
          return f;
        },
        j: function () {
          return C;
        },
      }),
        n(411104);
      var l = n(544891),
        r = n(570140),
        o = n(710845),
        a = n(893988),
        s = n(314897),
        c = n(417363),
        d = n(780570),
        u = n(358085),
        p = n(998502),
        h = n(981631);
      async function f() {
        if (null == i) {
          if (
            !(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))
          ) {
            new o.Z("CloudSyncUtils").warn(
              "CloudSync is not supported on this platform",
            );
            return;
          }
          await p.ZP.ensureModule("discord_cloudsync"),
            (i = new (p.ZP.getCloudSync())()).on("state", (t) =>
              r.Z.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: t }),
            );
        }
      }
      function C(t, e) {
        var n;
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!c.Z.supportsCloudSync(t, e))
          return Promise.resolve({ type: h.QCD.NONE });
        let o = (function () {
            if (null == i)
              throw Error("Initialize cloud sync module before syncing.");
            return i;
          })(),
          u = c.Z.getState(t, e);
        if (null == u)
          throw Error("No dispatch state for ".concat(t, ":").concat(e));
        let p = null !== (n = u.storage) && void 0 !== n ? n : {},
          f = (0, d.Tu)(t, e),
          C = s.default.getToken();
        if (null == C)
          throw Error("Cannot use cloud sync when not authenticated.");
        let A = null != u.installPath ? (0, a.Z)(u.installPath) : null;
        if (null == A)
          throw Error("No install path for ".concat(t, ":").concat(e));
        let T = s.default.getId(),
          y = {
            forceHash: r,
            manifestPath: h.SRg.STORAGE_MANIFEST(A, T),
            roots:
              null != p.roots
                ? p.roots
                : [
                    {
                      id: h.SRg.ROOT_ID,
                      paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                        platform: t,
                        path: h.SRg.ROOT_STORAGE_PATH(A, T),
                      })),
                      patterns: h.SRg.ROOT_PATTERN,
                    },
                  ],
            storage: {
              baseURL: ""
                .concat((0, l.K0)())
                .concat(h.ANM.APPLICATION_STORAGE(t, e)),
              token: C,
            },
            replacements: {
              INSTALLDIR: h.SRg.INSTALL_DIR(A),
              USERID: T,
              BRANCHID: e,
            },
          };
        return o.sync(f, y);
      }
    },
    702523: function (t, e, n) {
      n.d(e, {
        L: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(51025),
        o = n(850840),
        a = n(391690);
      function s(t, e, s, c, d) {
        let u = a.Z.getInstallationPath(t.id, e),
          p = null != t.eulaId && !o.Z.hasAcceptedEULA(t.eulaId);
        null == u || p
          ? (0, l.openModalLazy)(async () => {
              let { default: l } = await n.e("226").then(n.bind(n, 472064));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  applicationId: t.id,
                  branchId: e,
                  analyticsLocation: d,
                });
            })
          : (0, r.LO)({
              application: t,
              branchId: e,
              buildId: s,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d,
            });
      }
    },
    346329: function (t, e, n) {
      n.r(e),
        n.d(e, {
          installApplication: function () {
            return p;
          },
          performDefaultLibraryApplicationAction: function () {
            return C;
          },
          playApplication: function () {
            return l.a;
          },
          repairApplication: function () {
            return f;
          },
          updateApplication: function () {
            return h;
          },
        });
      var i = n(51025),
        l = n(696748),
        r = n(812206),
        o = n(173747),
        a = n(7956),
        s = n(417363),
        c = n(941128),
        d = n(702523),
        u = n(981631);
      function p(t, e, n) {
        let i = r.Z.getApplication(t);
        if (null == i) return;
        let l = o.Z.getTargetBuildId(i.id, e),
          a = o.Z.getTargetManifests(i.id, e);
        null != l && null != a && null != d.L && (0, d.L)(i, e, l, a, n);
      }
      function h(t, e) {
        let n = r.Z.getApplication(t);
        if (null != n)
          return i.li(
            n,
            e,
            o.Z.getTargetBuildId(n.id, e),
            o.Z.getTargetManifests(n.id, e),
          );
      }
      function f(t, e, n) {
        let l = r.Z.getApplication(t);
        if (null != l) return i.cG(l, e, n);
      }
      function C(t, e) {
        let n = (0, a.i)(t, s.Z, c.Z),
          { analyticsParams: i } = e;
        switch (n) {
          case u.apO.PLAY:
            return (0, l.a)(t.id, t, { analyticsParams: i });
          case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
          case u.apO.UPDATE:
            return h(t.id, t.branchId);
        }
      }
    },
  },
]);
//# sourceMappingURL=d067bb28a5a888ac060c.js.map
