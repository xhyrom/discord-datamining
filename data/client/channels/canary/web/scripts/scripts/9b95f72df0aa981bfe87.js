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
    372123: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      }),
        e(411104);
      var i = e(570140),
        l = e(710845),
        o = e(209492),
        r = e(981631);
      let a = new l.Z("CloudSync");
      class s {
        constructor(t) {
          var n, e, i;
          (n = this),
            (i = void 0),
            (e = "message") in n
              ? Object.defineProperty(n, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[e] = i),
            (this.message = t);
        }
      }
      async function c(t, n) {
        let e,
          l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        i.Z.dispatch({
          type: "GAME_CLOUD_SYNC_START",
          applicationId: t,
          branchId: n,
        });
        try {
          if ((e = await o.j(t, n, l)).type === r.QCD.CONFLICT)
            throw (
              (i.Z.dispatch({
                type: "GAME_CLOUD_SYNC_CONFLICT",
                applicationId: t,
                branchId: n,
                next: e.next,
                remote: e.remote,
              }),
              new s("Conflict in cloud sync."))
            );
          (e.type === r.QCD.PULL || e.type === r.QCD.PUSH) &&
            a.info("Sync complete", e);
        } catch (e) {
          if (e instanceof s) throw e;
          throw (
            (i.Z.dispatch({
              type: "GAME_CLOUD_SYNC_ERROR",
              applicationId: t,
              branchId: n,
            }),
            a.error("Failed to cloud sync:", e),
            Error("Failed to cloud sync."))
          );
        }
        return (
          i.Z.dispatch({
            type: "GAME_CLOUD_SYNC_COMPLETE",
            applicationId: t,
            branchId: n,
          }),
          e
        );
      }
    },
    696748: function (t, n, e) {
      e.d(n, {
        a: function () {
          return O;
        },
      }),
        e(411104),
        e(47120);
      var i = e(200651),
        l = e(192379),
        o = e(913527),
        r = e.n(o),
        a = e(442837),
        s = e(481060),
        c = e(372123),
        d = e(224706),
        u = e(812206),
        p = e(600164),
        h = e(293245),
        f = e(626135),
        C = e(981631),
        y = e(388032),
        N = e(681230),
        m = e(275477);
      function g(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      class T extends l.PureComponent {
        renderConflictButton(t, n, e, l) {
          return (0, i.jsxs)(s.Button, {
            className: N.conflictButton,
            innerClassName: N.conflictButtonInner,
            onClick: l,
            children: [
              (0, i.jsx)("div", { className: e }),
              (0, i.jsxs)("div", {
                className: N.buttonBody,
                children: [
                  (0, i.jsx)("div", {
                    className: N.conflictTitle,
                    children: t,
                  }),
                  (0, i.jsx)("div", { children: y.intl.string(y.t.gflHOz) }),
                  (0, i.jsx)("div", {
                    className: N.timestamp,
                    children: r()(n).calendar(),
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
                    children: (0, i.jsx)("div", { className: N.errorArt }),
                  }),
                  (0, i.jsx)("div", {
                    className: N.description,
                    children: y.intl.format(y.t.RAaWyc, {
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
                      className: N.linkButton,
                      size: N.linkButtonSize,
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: this.onClose,
                      children: y.intl.string(y.t["ETE/oK"]),
                    }),
                    (0, i.jsxs)(p.Z, {
                      direction: p.Z.Direction.HORIZONTAL,
                      justify: p.Z.Justify.END,
                      children: [
                        (0, i.jsx)(s.Button, {
                          look: s.Button.Looks.LINK,
                          color: s.Button.Colors.PRIMARY,
                          onClick: () => this.handlePlay(),
                          className: N.retryButton,
                          children: y.intl.string(y.t["5911LS"]),
                        }),
                        (0, i.jsx)(s.Button, {
                          onClick: () => this.handlePlay(!1),
                          children: y.intl.string(y.t["359PbW"]),
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
          let { application: t, cloudSyncState: n } = this.props;
          if (n.type !== C.TzF.CONFLICT)
            throw Error("Cannot render conflict for non conflict type");
          return (0, i.jsxs)(s.ModalContent, {
            className: m.marginBottom20,
            children: [
              (0, i.jsx)("div", {
                className: N.description,
                children: y.intl.format(y.t.eyXUPz, {
                  applicationName: t.name,
                }),
              }),
              this.renderConflictButton(
                y.intl.string(y.t.AQUmkp),
                n.remote.timestamp,
                N.conflictDownloadArt,
                this.handleChooseDownload,
              ),
              (0, i.jsxs)(p.Z, {
                className: N.choiceWrapper,
                align: p.Z.Align.CENTER,
                children: [
                  (0, i.jsx)("div", { className: N.choiceLine }),
                  (0, i.jsx)("div", {
                    className: N.choiceTitle,
                    children: y.intl.string(y.t.WUsA2N),
                  }),
                  (0, i.jsx)("div", { className: N.choiceLine }),
                ],
              }),
              this.renderConflictButton(
                y.intl.string(y.t.AXVws7),
                n.next.timestamp,
                N.conflictUploadArt,
                this.handleChooseUpload,
              ),
            ],
          });
        }
        render() {
          let { cloudSyncState: t, transitionState: n } = this.props,
            e =
              t.type === C.TzF.CONFLICT
                ? y.intl.string(y.t.oNbO1d)
                : y.intl.string(y.t.as4Tgo);
          return (0, i.jsxs)(s.ModalRoot, {
            transitionState: n,
            className: N.modal,
            "aria-label": e,
            children: [
              (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(s.ModalCloseButton, {
                    className: N.closeButton,
                    onClick: this.onClose,
                  }),
                  (0, i.jsx)(s.FormTitle, {
                    tag: "h2",
                    className: m.marginReset,
                    children: e,
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
          var n;
          super(...t),
            (n = this),
            g(this, "onClose", () => {
              this.props.onClose();
            }),
            g(this, "handlePlay", function () {
              let t =
                  !(arguments.length > 0) ||
                  void 0 === arguments[0] ||
                  arguments[0],
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                { libraryApplication: i, analyticsParams: l } = n.props;
              n.onClose(),
                O(i.id, i, {
                  analyticsParams: l,
                  cloudSync: t,
                  cloudSyncForceHash: e,
                });
            }),
            g(this, "handleChooseDownload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            g(this, "handleChooseUpload", () => {
              let { cloudSyncState: t } = this.props;
              t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
        }
      }
      let A = a.ZP.connectStores([h.Z, u.Z], (t) => {
        let { libraryApplication: n, branchId: e } = t;
        return {
          cloudSyncState: h.Z.getState(n.id, e),
          application: u.Z.getApplication(n.id),
        };
      })(T);
      async function O(t, n, e) {
        let l = u.Z.getApplication(t);
        if (null == l) return;
        let {
          cloudSync: o = !0,
          cloudSyncForceHash: r = null,
          analyticsParams: a,
        } = e;
        if (o && null != n) {
          let t = n.branchId;
          try {
            await c.Z(n.id, t, r);
          } catch (e) {
            (0, s.openModal)((e) =>
              (0, i.jsx)(A, {
                libraryApplication: n,
                analyticsParams: a,
                branchId: t,
                ...e,
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
            distributor: null != n ? n.getDistributor() : null,
            ...a,
          }),
          d.Z.launch({
            applicationId: l.id,
            branchId: null == n ? void 0 : n.branchId,
          })
        );
      }
    },
    293245: function (t, n, e) {
      let i, l, o;
      e(47120);
      var r,
        a,
        s,
        c,
        d = e(442837),
        u = e(570140),
        p = e(372123),
        h = e(594190),
        f = e(283595),
        C = e(780570),
        y = e(358085),
        N = e(209492),
        m = e(981631);
      class g extends (r = d.ZP.Store) {
        initialize() {
          y.isPlatformEmbedded && N.S(), (i = {}), (l = new Set()), (o = []);
        }
        getState(t, n) {
          return i[(0, C.Tu)(t, n)];
        }
        isSyncing(t, n) {
          let e = (0, C.Tu)(t, n);
          return l.has(e);
        }
      }
      (c = "CloudSyncStore"),
        (s = "displayName") in (a = g)
          ? Object.defineProperty(a, s, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = c),
        (n.Z = new g(u.Z, {
          GAME_CLOUD_SYNC_START: function (t) {
            let { applicationId: n, branchId: e } = t,
              i = (0, C.Tu)(n, e);
            l.add(i);
          },
          GAME_CLOUD_SYNC_UPDATE: function (t) {
            let { state: n } = t;
            for (let t of Object.keys(n)) i[t] = n[t];
          },
          GAME_CLOUD_SYNC_COMPLETE: function (t) {
            let { applicationId: n, branchId: e } = t,
              o = (0, C.Tu)(n, e);
            return (
              l.delete(o),
              (i[o] = { type: m.TzF.DONE, timestamp: Date.now() }),
              !0
            );
          },
          GAME_CLOUD_SYNC_CONFLICT: function (t) {
            let { applicationId: n, branchId: e, next: o, remote: r } = t,
              a = (0, C.Tu)(n, e);
            (i[a] = { type: m.TzF.CONFLICT, next: o, remote: r }), l.delete(a);
          },
          GAME_CLOUD_SYNC_ERROR: function (t) {
            let { applicationId: n, branchId: e } = t,
              o = (0, C.Tu)(n, e);
            (i[o] = { type: m.TzF.ERROR }), l.delete(o);
          },
          RUNNING_GAMES_CHANGE: function () {
            let t = h.ZP.getRunningDiscordApplicationIds();
            for (let n of o.filter((n) => !t.includes(n))) {
              let t = f.Z.getActiveLibraryApplication(n);
              if (null != t)
                u.Z.wait(() => {
                  try {
                    p.Z(t.id, t.branchId);
                  } catch (t) {}
                });
            }
            return (o = t), !1;
          },
        }));
    },
    209492: function (t, n, e) {
      let i;
      e.d(n, {
        S: function () {
          return f;
        },
        j: function () {
          return C;
        },
      }),
        e(411104);
      var l = e(544891),
        o = e(570140),
        r = e(710845),
        a = e(893988),
        s = e(314897),
        c = e(417363),
        d = e(780570),
        u = e(358085),
        p = e(998502),
        h = e(981631);
      async function f() {
        if (null == i) {
          if (
            !(u.isPlatformEmbedded && ((0, u.isMac)() || (0, u.isWindows)()))
          ) {
            new r.Z("CloudSyncUtils").warn(
              "CloudSync is not supported on this platform",
            );
            return;
          }
          await p.ZP.ensureModule("discord_cloudsync"),
            (i = new (p.ZP.getCloudSync())()).on("state", (t) =>
              o.Z.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: t }),
            );
        }
      }
      function C(t, n) {
        var e;
        let o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!c.Z.supportsCloudSync(t, n))
          return Promise.resolve({ type: h.QCD.NONE });
        let r = (function () {
            if (null == i)
              throw Error("Initialize cloud sync module before syncing.");
            return i;
          })(),
          u = c.Z.getState(t, n);
        if (null == u)
          throw Error("No dispatch state for ".concat(t, ":").concat(n));
        let p = null !== (e = u.storage) && void 0 !== e ? e : {},
          f = (0, d.Tu)(t, n),
          C = s.default.getToken();
        if (null == C)
          throw Error("Cannot use cloud sync when not authenticated.");
        let y = null != u.installPath ? (0, a.Z)(u.installPath) : null;
        if (null == y)
          throw Error("No install path for ".concat(t, ":").concat(n));
        let N = s.default.getId(),
          m = {
            forceHash: o,
            manifestPath: h.SRg.STORAGE_MANIFEST(y, N),
            roots:
              null != p.roots
                ? p.roots
                : [
                    {
                      id: h.SRg.ROOT_ID,
                      paths: Object.keys(h.SRg.ROOT_PLATFORMS).map((t) => ({
                        platform: t,
                        path: h.SRg.ROOT_STORAGE_PATH(y, N),
                      })),
                      patterns: h.SRg.ROOT_PATTERN,
                    },
                  ],
            storage: {
              baseURL: ""
                .concat((0, l.K0)())
                .concat(h.ANM.APPLICATION_STORAGE(t, n)),
              token: C,
            },
            replacements: {
              INSTALLDIR: h.SRg.INSTALL_DIR(y),
              USERID: N,
              BRANCHID: n,
            },
          };
        return r.sync(f, m);
      }
    },
    702523: function (t, n, e) {
      e.d(n, {
        L: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(481060),
        o = e(51025),
        r = e(850840),
        a = e(391690);
      function s(t, n, s, c, d) {
        let u = a.Z.getInstallationPath(t.id, n),
          p = null != t.eulaId && !r.Z.hasAcceptedEULA(t.eulaId);
        null == u || p
          ? (0, l.openModalLazy)(async () => {
              let { default: l } = await e.e("226").then(e.bind(e, 472064));
              return (e) =>
                (0, i.jsx)(l, {
                  ...e,
                  applicationId: t.id,
                  branchId: n,
                  analyticsLocation: d,
                });
            })
          : (0, o.LO)({
              application: t,
              branchId: n,
              buildId: s,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d,
            });
      }
    },
    346329: function (t, n, e) {
      e.r(n),
        e.d(n, {
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
      var i = e(51025),
        l = e(696748),
        o = e(812206),
        r = e(173747),
        a = e(7956),
        s = e(417363),
        c = e(941128),
        d = e(702523),
        u = e(981631);
      function p(t, n, e) {
        let i = o.Z.getApplication(t);
        if (null == i) return;
        let l = r.Z.getTargetBuildId(i.id, n),
          a = r.Z.getTargetManifests(i.id, n);
        null != l && null != a && null != d.L && (0, d.L)(i, n, l, a, e);
      }
      function h(t, n) {
        let e = o.Z.getApplication(t);
        if (null != e)
          return i.li(
            e,
            n,
            r.Z.getTargetBuildId(e.id, n),
            r.Z.getTargetManifests(e.id, n),
          );
      }
      function f(t, n, e) {
        let l = o.Z.getApplication(t);
        if (null != l) return i.cG(l, n, e);
      }
      function C(t, n) {
        let e = (0, a.i)(t, s.Z, c.Z),
          { analyticsParams: i } = n;
        switch (e) {
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
//# sourceMappingURL=9b95f72df0aa981bfe87.js.map
