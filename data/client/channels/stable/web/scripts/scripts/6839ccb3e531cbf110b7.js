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
        s = n(710845),
        a = n(209492),
        o = n(981631);
      let l = new s.Z("CloudSync");
      class r {
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
          s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        i.Z.dispatch({
          type: "GAME_CLOUD_SYNC_START",
          applicationId: t,
          branchId: e,
        });
        try {
          if ((n = await a.j(t, e, s)).type === o.QCD.CONFLICT)
            throw (
              (i.Z.dispatch({
                type: "GAME_CLOUD_SYNC_CONFLICT",
                applicationId: t,
                branchId: e,
                next: n.next,
                remote: n.remote,
              }),
              new r("Conflict in cloud sync."))
            );
          (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) &&
            l.info("Sync complete", n);
        } catch (n) {
          if (n instanceof r) throw n;
          throw (
            (i.Z.dispatch({
              type: "GAME_CLOUD_SYNC_ERROR",
              applicationId: t,
              branchId: e,
            }),
            l.error("Failed to cloud sync:", n),
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
      var i = n(735250),
        s = n(470079),
        a = n(913527),
        o = n.n(a),
        l = n(442837),
        r = n(481060),
        c = n(372123),
        d = n(224706),
        u = n(812206),
        p = n(600164),
        h = n(293245),
        C = n(626135),
        f = n(981631),
        A = n(689938),
        O = n(621839),
        N = n(113207);
      function _(t, e, n) {
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
      class T extends s.PureComponent {
        renderConflictButton(t, e, n, s) {
          return (0, i.jsxs)(r.Button, {
            className: O.conflictButton,
            innerClassName: O.conflictButtonInner,
            onClick: s,
            children: [
              (0, i.jsx)("div", { className: n }),
              (0, i.jsxs)("div", {
                className: O.buttonBody,
                children: [
                  (0, i.jsx)("div", {
                    className: O.conflictTitle,
                    children: t,
                  }),
                  (0, i.jsx)("div", {
                    children:
                      A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED,
                  }),
                  (0, i.jsx)("div", {
                    className: O.timestamp,
                    children: o()(e).calendar(),
                  }),
                ],
              }),
            ],
          });
        }
        renderError() {
          let { application: t } = this.props;
          return (0, i.jsxs)(s.Fragment, {
            children: [
              (0, i.jsxs)(r.ModalContent, {
                children: [
                  (0, i.jsx)(p.Z, {
                    justify: p.Z.Justify.CENTER,
                    children: (0, i.jsx)("div", { className: O.errorArt }),
                  }),
                  (0, i.jsx)("div", {
                    className: O.description,
                    children:
                      A.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
                        applicationName: t.name,
                      }),
                  }),
                ],
              }),
              (0, i.jsx)(r.ModalFooter, {
                children: (0, i.jsxs)(p.Z, {
                  justify: p.Z.Justify.BETWEEN,
                  children: [
                    (0, i.jsx)(r.Button, {
                      className: O.linkButton,
                      size: O.linkButtonSize,
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: this.onClose,
                      children: A.Z.Messages.CANCEL,
                    }),
                    (0, i.jsxs)(p.Z, {
                      direction: p.Z.Direction.HORIZONTAL,
                      justify: p.Z.Justify.END,
                      children: [
                        (0, i.jsx)(r.Button, {
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          onClick: () => this.handlePlay(),
                          className: O.retryButton,
                          children: A.Z.Messages.RETRY,
                        }),
                        (0, i.jsx)(r.Button, {
                          onClick: () => this.handlePlay(!1),
                          children: A.Z.Messages.GAME_ACTION_BUTTON_PLAY,
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
          if (e.type !== f.TzF.CONFLICT)
            throw Error("Cannot render conflict for non conflict type");
          return (0, i.jsxs)(r.ModalContent, {
            className: N.marginBottom20,
            children: [
              (0, i.jsx)("div", {
                className: O.description,
                children:
                  A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
                    applicationName: t.name,
                  }),
              }),
              this.renderConflictButton(
                A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD,
                e.remote.timestamp,
                O.conflictDownloadArt,
                this.handleChooseDownload,
              ),
              (0, i.jsxs)(p.Z, {
                className: O.choiceWrapper,
                align: p.Z.Align.CENTER,
                children: [
                  (0, i.jsx)("div", { className: O.choiceLine }),
                  (0, i.jsx)("div", {
                    className: O.choiceTitle,
                    children: A.Z.Messages.CLOUD_SYNC_MODAL_OR,
                  }),
                  (0, i.jsx)("div", { className: O.choiceLine }),
                ],
              }),
              this.renderConflictButton(
                A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD,
                e.next.timestamp,
                O.conflictUploadArt,
                this.handleChooseUpload,
              ),
            ],
          });
        }
        render() {
          let { cloudSyncState: t, transitionState: e } = this.props,
            n =
              t.type === f.TzF.CONFLICT
                ? A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER
                : A.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
          return (0, i.jsxs)(r.ModalRoot, {
            transitionState: e,
            className: O.modal,
            "aria-label": n,
            children: [
              (0, i.jsxs)(r.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(r.ModalCloseButton, {
                    className: O.closeButton,
                    onClick: this.onClose,
                  }),
                  (0, i.jsx)(r.FormTitle, {
                    tag: "h2",
                    className: N.marginReset,
                    children: n,
                  }),
                ],
              }),
              t.type === f.TzF.CONFLICT
                ? this.renderConflict()
                : this.renderError(),
            ],
          });
        }
        constructor(...t) {
          var e;
          super(...t),
            (e = this),
            _(this, "onClose", () => {
              this.props.onClose();
            }),
            _(this, "handlePlay", function () {
              let t =
                  !(arguments.length > 0) ||
                  void 0 === arguments[0] ||
                  arguments[0],
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { libraryApplication: i, analyticsParams: s } = e.props;
              e.onClose(),
                E(i.id, i, {
                  analyticsParams: s,
                  cloudSync: t,
                  cloudSyncForceHash: n,
                });
            }),
            _(this, "handleChooseDownload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            _(this, "handleChooseUpload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
        }
      }
      let L = l.ZP.connectStores([h.Z, u.Z], (t) => {
        let { libraryApplication: e, branchId: n } = t;
        return {
          cloudSyncState: h.Z.getState(e.id, n),
          application: u.Z.getApplication(e.id),
        };
      })(T);
      async function E(t, e, n) {
        let s = u.Z.getApplication(t);
        if (null == s) return;
        let {
          cloudSync: a = !0,
          cloudSyncForceHash: o = null,
          analyticsParams: l,
        } = n;
        if (a && null != e) {
          let t = e.branchId;
          try {
            await c.Z(e.id, t, o);
          } catch (n) {
            (0, r.openModal)((n) =>
              (0, i.jsx)(L, {
                libraryApplication: e,
                analyticsParams: l,
                branchId: t,
                ...n,
              }),
            );
            return;
          }
        }
        return (
          C.default.track(f.rMx.APPLICATION_OPENED, {
            application_id: s.id,
            application_name: s.name,
            type: f.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...l,
          }),
          d.Z.launch({
            applicationId: s.id,
            branchId: null == e ? void 0 : e.branchId,
          })
        );
      }
    },
    850840: function (t, e, n) {
      let i;
      n(653041);
      var s,
        a = n(442837),
        o = n(570140);
      function l(t, e, n) {
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
      let r = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class c extends (s = a.ZP.PersistedStore) {
        initialize(t) {
          i = null != t ? t : r;
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
      l(c, "displayName", "ApplicationStoreUserSettingsStore"),
        l(c, "persistKey", "ApplicationStoreUserSettingsStore"),
        l(c, "migrations", [
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
      let i, s, a;
      n(47120);
      var o,
        l,
        r,
        c,
        d = n(442837),
        u = n(570140),
        p = n(372123),
        h = n(594190),
        C = n(283595),
        f = n(780570),
        A = n(358085),
        O = n(209492),
        N = n(981631);
      class _ extends (o = d.ZP.Store) {
        initialize() {
          A.isPlatformEmbedded && O.S(), (i = {}), (s = new Set()), (a = []);
        }
        getState(t, e) {
          return i[(0, f.Tu)(t, e)];
        }
        isSyncing(t, e) {
          let n = (0, f.Tu)(t, e);
          return s.has(n);
        }
      }
      (c = "CloudSyncStore"),
        (r = "displayName") in (l = _)
          ? Object.defineProperty(l, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = c),
        (e.Z = new _(u.Z, {
          GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: e, branchId: n } = t,
              i = (0, f.Tu)(e, n);
            s.add(i);
          },
          GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: e } = t;
            for (let t of Object.keys(e)) i[t] = e[t];
          },
          GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: e, branchId: n } = t,
              a = (0, f.Tu)(e, n);
            return (
              s.delete(a),
              (i[a] = { type: N.TzF.DONE, timestamp: Date.now() }),
              !0
            );
          },
          GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: e, branchId: n, next: a, remote: o } = t,
              l = (0, f.Tu)(e, n);
            (i[l] = { type: N.TzF.CONFLICT, next: a, remote: o }), s.delete(l);
          },
          GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: e, branchId: n } = t,
              a = (0, f.Tu)(e, n);
            (i[a] = { type: N.TzF.ERROR }), s.delete(a);
          },
          RUNNING_GAMES_CHANGE: function () {
            let t = h.ZP.getRunningDiscordApplicationIds();
            for (let e of a.filter((e) => !t.includes(e))) {
              let t = C.Z.getActiveLibraryApplication(e);
              if (null != t)
                u.Z.wait(() => {
                  try {
                    p.Z(t.id, t.branchId);
                  } catch (t) {}
                });
            }
            return (a = t), !1;
          },
        }));
    },
    209492: function (t, e, n) {
      let i;
      n.d(e, {
        S: function () {
          return C;
        },
        j: function () {
          return f;
        },
      }),
        n(411104);
      var s = n(544891),
        a = n(570140),
        o = n(710845),
        l = n(893988),
        r = n(314897),
        c = n(417363),
        d = n(780570),
        u = n(358085),
        p = n(998502),
        h = n(981631);
      async function C() {
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
              a.Z.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: t }),
            );
        }
      }
      function f(t, e) {
        var n;
        let a =
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
          C = (0, d.Tu)(t, e),
          f = r.default.getToken();
        if (null == f)
          throw Error("Cannot use cloud sync when not authenticated.");
        let A = null != u.installPath ? (0, l.Z)(u.installPath) : null;
        if (null == A)
          throw Error("No install path for ".concat(t, ":").concat(e));
        let O = r.default.getId(),
          N = {
            forceHash: a,
            manifestPath: h.SRg.STORAGE_MANIFEST(A, O),
            roots:
              null != p.roots
                ? p.roots
                : [
                    {
                      id: h.SRg.ROOT_ID,
                      paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                        platform: t,
                        path: h.SRg.ROOT_STORAGE_PATH(A, O),
                      })),
                      patterns: h.SRg.ROOT_PATTERN,
                    },
                  ],
            storage: {
              baseURL: ""
                .concat((0, s.K0)())
                .concat(h.ANM.APPLICATION_STORAGE(t, e)),
              token: f,
            },
            replacements: {
              INSTALLDIR: h.SRg.INSTALL_DIR(A),
              USERID: O,
              BRANCHID: e,
            },
          };
        return o.sync(C, N);
      }
    },
    702523: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var s = n(481060),
        a = n(51025),
        o = n(850840),
        l = n(391690);
      function r(t, e, r, c, d) {
        let u = l.Z.getInstallationPath(t.id, e),
          p = null != t.eulaId && !o.Z.hasAcceptedEULA(t.eulaId);
        null == u || p
          ? (0, s.openModalLazy)(async () => {
              let { default: s } = await n.e("226").then(n.bind(n, 472064));
              return (n) =>
                (0, i.jsx)(s, {
                  ...n,
                  applicationId: t.id,
                  branchId: e,
                  analyticsLocation: d,
                });
            })
          : (0, a.LO)({
              application: t,
              branchId: e,
              buildId: r,
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
            return f;
          },
          playApplication: function () {
            return s.a;
          },
          repairApplication: function () {
            return C;
          },
          updateApplication: function () {
            return h;
          },
        });
      var i = n(51025),
        s = n(696748),
        a = n(812206),
        o = n(173747),
        l = n(7956),
        r = n(417363),
        c = n(941128),
        d = n(702523),
        u = n(981631);
      function p(t, e, n) {
        let i = a.Z.getApplication(t);
        if (null == i) return;
        let s = o.Z.getTargetBuildId(i.id, e),
          l = o.Z.getTargetManifests(i.id, e);
        null != s && null != l && null != d.L && (0, d.L)(i, e, s, l, n);
      }
      function h(t, e) {
        let n = a.Z.getApplication(t);
        if (null != n)
          return i.li(
            n,
            e,
            o.Z.getTargetBuildId(n.id, e),
            o.Z.getTargetManifests(n.id, e),
          );
      }
      function C(t, e, n) {
        let s = a.Z.getApplication(t);
        if (null != s) return i.cG(s, e, n);
      }
      function f(t, e) {
        let n = (0, l.i)(t, r.Z, c.Z),
          { analyticsParams: i } = e;
        switch (n) {
          case u.apO.PLAY:
            return (0, s.a)(t.id, t, { analyticsParams: i });
          case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
          case u.apO.UPDATE:
            return h(t.id, t.branchId);
        }
      }
    },
  },
]);
//# sourceMappingURL=6839ccb3e531cbf110b7.js.map
