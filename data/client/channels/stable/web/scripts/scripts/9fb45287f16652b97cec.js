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
        o = n(710845),
        s = n(209492),
        a = n(981631);
      let l = new o.Z("CloudSync");
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
          o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        i.Z.dispatch({
          type: "GAME_CLOUD_SYNC_START",
          applicationId: t,
          branchId: e,
        });
        try {
          if ((n = await s.j(t, e, o)).type === a.QCD.CONFLICT)
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
          (n.type === a.QCD.PULL || n.type === a.QCD.PUSH) &&
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
          return y;
        },
      }),
        n(411104),
        n(47120);
      var i = n(200651),
        o = n(192379),
        s = n(913527),
        a = n.n(s),
        l = n(442837),
        r = n(481060),
        c = n(372123),
        d = n(224706),
        u = n(812206),
        p = n(600164),
        C = n(293245),
        h = n(626135),
        f = n(981631),
        N = n(689938),
        O = n(621839),
        _ = n(113207);
      function L(t, e, n) {
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
      class A extends o.PureComponent {
        renderConflictButton(t, e, n, o) {
          return (0, i.jsxs)(r.Button, {
            className: O.conflictButton,
            innerClassName: O.conflictButtonInner,
            onClick: o,
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
                      N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED,
                  }),
                  (0, i.jsx)("div", {
                    className: O.timestamp,
                    children: a()(e).calendar(),
                  }),
                ],
              }),
            ],
          });
        }
        renderError() {
          let { application: t } = this.props;
          return (0, i.jsxs)(o.Fragment, {
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
                      N.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
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
                      children: N.Z.Messages.CANCEL,
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
                          children: N.Z.Messages.RETRY,
                        }),
                        (0, i.jsx)(r.Button, {
                          onClick: () => this.handlePlay(!1),
                          children: N.Z.Messages.GAME_ACTION_BUTTON_PLAY,
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
            className: _.marginBottom20,
            children: [
              (0, i.jsx)("div", {
                className: O.description,
                children:
                  N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
                    applicationName: t.name,
                  }),
              }),
              this.renderConflictButton(
                N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD,
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
                    children: N.Z.Messages.CLOUD_SYNC_MODAL_OR,
                  }),
                  (0, i.jsx)("div", { className: O.choiceLine }),
                ],
              }),
              this.renderConflictButton(
                N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD,
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
                ? N.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER
                : N.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
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
                    className: _.marginReset,
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
            L(this, "onClose", () => {
              this.props.onClose();
            }),
            L(this, "handlePlay", function () {
              let t =
                  !(arguments.length > 0) ||
                  void 0 === arguments[0] ||
                  arguments[0],
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { libraryApplication: i, analyticsParams: o } = e.props;
              e.onClose(),
                y(i.id, i, {
                  analyticsParams: o,
                  cloudSync: t,
                  cloudSyncForceHash: n,
                });
            }),
            L(this, "handleChooseDownload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            L(this, "handleChooseUpload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
        }
      }
      let T = l.ZP.connectStores([C.Z, u.Z], (t) => {
        let { libraryApplication: e, branchId: n } = t;
        return {
          cloudSyncState: C.Z.getState(e.id, n),
          application: u.Z.getApplication(e.id),
        };
      })(A);
      async function y(t, e, n) {
        let o = u.Z.getApplication(t);
        if (null == o) return;
        let {
          cloudSync: s = !0,
          cloudSyncForceHash: a = null,
          analyticsParams: l,
        } = n;
        if (s && null != e) {
          let t = e.branchId;
          try {
            await c.Z(e.id, t, a);
          } catch (n) {
            (0, r.openModal)((n) =>
              (0, i.jsx)(T, {
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
          h.default.track(f.rMx.APPLICATION_OPENED, {
            application_id: o.id,
            application_name: o.name,
            type: f.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...l,
          }),
          d.Z.launch({
            applicationId: o.id,
            branchId: null == e ? void 0 : e.branchId,
          })
        );
      }
    },
    293245: function (t, e, n) {
      let i, o, s;
      n(47120);
      var a,
        l,
        r,
        c,
        d = n(442837),
        u = n(570140),
        p = n(372123),
        C = n(594190),
        h = n(283595),
        f = n(780570),
        N = n(358085),
        O = n(209492),
        _ = n(981631);
      class L extends (a = d.ZP.Store) {
        initialize() {
          N.isPlatformEmbedded && O.S(), (i = {}), (o = new Set()), (s = []);
        }
        getState(t, e) {
          return i[(0, f.Tu)(t, e)];
        }
        isSyncing(t, e) {
          let n = (0, f.Tu)(t, e);
          return o.has(n);
        }
      }
      (c = "CloudSyncStore"),
        (r = "displayName") in (l = L)
          ? Object.defineProperty(l, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = c),
        (e.Z = new L(u.Z, {
          GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: e, branchId: n } = t,
              i = (0, f.Tu)(e, n);
            o.add(i);
          },
          GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: e } = t;
            for (let t of Object.keys(e)) i[t] = e[t];
          },
          GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: e, branchId: n } = t,
              s = (0, f.Tu)(e, n);
            return (
              o.delete(s),
              (i[s] = { type: _.TzF.DONE, timestamp: Date.now() }),
              !0
            );
          },
          GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: e, branchId: n, next: s, remote: a } = t,
              l = (0, f.Tu)(e, n);
            (i[l] = { type: _.TzF.CONFLICT, next: s, remote: a }), o.delete(l);
          },
          GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: e, branchId: n } = t,
              s = (0, f.Tu)(e, n);
            (i[s] = { type: _.TzF.ERROR }), o.delete(s);
          },
          RUNNING_GAMES_CHANGE: function () {
            let t = C.ZP.getRunningDiscordApplicationIds();
            for (let e of s.filter((e) => !t.includes(e))) {
              let t = h.Z.getActiveLibraryApplication(e);
              if (null != t)
                u.Z.wait(() => {
                  try {
                    p.Z(t.id, t.branchId);
                  } catch (t) {}
                });
            }
            return (s = t), !1;
          },
        }));
    },
    209492: function (t, e, n) {
      let i;
      n.d(e, {
        S: function () {
          return h;
        },
        j: function () {
          return f;
        },
      }),
        n(411104);
      var o = n(544891),
        s = n(570140),
        a = n(710845),
        l = n(893988),
        r = n(314897),
        c = n(417363),
        d = n(780570),
        u = n(358085),
        p = n(998502),
        C = n(981631);
      async function h() {
        if (null == i) {
          if (
            !(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))
          ) {
            new a.Z("CloudSyncUtils").warn(
              "CloudSync is not supported on this platform",
            );
            return;
          }
          await p.ZP.ensureModule("discord_cloudsync"),
            (i = new (p.ZP.getCloudSync())()).on("state", (t) =>
              s.Z.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: t }),
            );
        }
      }
      function f(t, e) {
        var n;
        let s =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!c.Z.supportsCloudSync(t, e))
          return Promise.resolve({ type: C.QCD.NONE });
        let a = (function () {
            if (null == i)
              throw Error("Initialize cloud sync module before syncing.");
            return i;
          })(),
          u = c.Z.getState(t, e);
        if (null == u)
          throw Error("No dispatch state for ".concat(t, ":").concat(e));
        let p = null !== (n = u.storage) && void 0 !== n ? n : {},
          h = (0, d.Tu)(t, e),
          f = r.default.getToken();
        if (null == f)
          throw Error("Cannot use cloud sync when not authenticated.");
        let N = null != u.installPath ? (0, l.Z)(u.installPath) : null;
        if (null == N)
          throw Error("No install path for ".concat(t, ":").concat(e));
        let O = r.default.getId(),
          _ = {
            forceHash: s,
            manifestPath: C.SRg.STORAGE_MANIFEST(N, O),
            roots:
              null != p.roots
                ? p.roots
                : [
                    {
                      id: C.SRg.ROOT_ID,
                      paths: Object.keys(C.SRg.ROOT_PLATFORMS).map((t) => ({
                        platform: t,
                        path: C.SRg.ROOT_STORAGE_PATH(N, O),
                      })),
                      patterns: C.SRg.ROOT_PATTERN,
                    },
                  ],
            storage: {
              baseURL: ""
                .concat((0, o.K0)())
                .concat(C.ANM.APPLICATION_STORAGE(t, e)),
              token: f,
            },
            replacements: {
              INSTALLDIR: C.SRg.INSTALL_DIR(N),
              USERID: O,
              BRANCHID: e,
            },
          };
        return a.sync(h, _);
      }
    },
    702523: function (t, e, n) {
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060),
        s = n(51025),
        a = n(850840),
        l = n(391690);
      function r(t, e, r, c, d) {
        let u = l.Z.getInstallationPath(t.id, e),
          p = null != t.eulaId && !a.Z.hasAcceptedEULA(t.eulaId);
        null == u || p
          ? (0, o.openModalLazy)(async () => {
              let { default: o } = await n.e("226").then(n.bind(n, 472064));
              return (n) =>
                (0, i.jsx)(o, {
                  ...n,
                  applicationId: t.id,
                  branchId: e,
                  analyticsLocation: d,
                });
            })
          : (0, s.LO)({
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
            return o.a;
          },
          repairApplication: function () {
            return h;
          },
          updateApplication: function () {
            return C;
          },
        });
      var i = n(51025),
        o = n(696748),
        s = n(812206),
        a = n(173747),
        l = n(7956),
        r = n(417363),
        c = n(941128),
        d = n(702523),
        u = n(981631);
      function p(t, e, n) {
        let i = s.Z.getApplication(t);
        if (null == i) return;
        let o = a.Z.getTargetBuildId(i.id, e),
          l = a.Z.getTargetManifests(i.id, e);
        null != o && null != l && null != d.L && (0, d.L)(i, e, o, l, n);
      }
      function C(t, e) {
        let n = s.Z.getApplication(t);
        if (null != n)
          return i.li(
            n,
            e,
            a.Z.getTargetBuildId(n.id, e),
            a.Z.getTargetManifests(n.id, e),
          );
      }
      function h(t, e, n) {
        let o = s.Z.getApplication(t);
        if (null != o) return i.cG(o, e, n);
      }
      function f(t, e) {
        let n = (0, l.i)(t, r.Z, c.Z),
          { analyticsParams: i } = e;
        switch (n) {
          case u.apO.PLAY:
            return (0, o.a)(t.id, t, { analyticsParams: i });
          case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
          case u.apO.UPDATE:
            return C(t.id, t.branchId);
        }
      }
    },
  },
]);
//# sourceMappingURL=9fb45287f16652b97cec.js.map
