"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27601"],
  {
    869614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      let a = new Set(["nvidia"]);
      function l(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && a.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(553813),
        l = n.n(a),
        r = n(358085);
      let i = {
        [r.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function u(e) {
        let t = i[(0, r.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let a = e[n],
            r = t[n];
          if (null == a || null == r || null != a.error) continue;
          let i = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(a);
          if (!l().satisfies(i, r)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var a = n(553813),
        l = n.n(a),
        r = n(358085);
      let i = { [r.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function u(e) {
        let t = i[(0, r.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let a = e[n],
            r = t[n];
          if (null == a || null == r || null != a.error) continue;
          let i = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(a);
          if (!l().satisfies(i, r)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, n) {
      var a,
        l,
        r,
        i,
        u = n(442837),
        s = n(570140),
        o = n(358085),
        c = n(998502),
        d = n(869614),
        g = n(281083),
        Z = n(672598);
      let f = !1,
        m = !0,
        S = !1;
      class v extends (i = u.ZP.Store) {
        initialize() {
          !(!o.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
              (f = (0, Z.Z)(e)),
                (m = (0, d.Z)(e)),
                (S = (0, g.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return f;
        }
        get canUseHardwareAcceleration() {
          return m;
        }
        get problematicGPUDriver() {
          return S;
        }
        getState() {
          return {
            GPUDriversOutdated: f,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: S,
          };
        }
      }
      (r = "StreamingCapabilitiesStore"),
        (l = "displayName") in (a = v)
          ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = r),
        (t.Z = new v(s.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (f = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
          },
        }));
    },
    746532: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Y;
          },
        }),
        n(177593),
        n(47120);
      var a = n(392711),
        l = n.n(a),
        r = n(261470),
        i = n(524437),
        u = n(812206),
        s = n(339085),
        o = n(353926),
        c = n(653255),
        d = n(810788),
        g = n(355298),
        Z = n(763296),
        f = n(569471),
        m = n(260483),
        S = n(144140),
        v = n(581883),
        p = n(48481),
        I = n(199902),
        P = n(314897),
        y = n(523746),
        A = n(592125),
        b = n(757266),
        O = n(831506),
        h = n(77498),
        w = n(486472),
        G = n(650774),
        j = n(271383),
        C = n(430824),
        U = n(293273),
        R = n(131951),
        _ = n(158776),
        k = n(19780),
        D = n(306680),
        V = n(699516),
        E = n(944486),
        L = n(9156),
        T = n(594174),
        M = n(979651),
        N = n(853872),
        H = n(695103),
        W = n(449224),
        q = n(181106),
        z = n(237997),
        F = n(145597);
      async function Y(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new r.Z();
        await new Promise((e) => setImmediate(e));
        let a = T.default.getCurrentUser();
        if (null == a)
          return new Promise((a) => {
            n.fail(() => {
              a(Y(e, t, n));
            });
          });
        n.succeed();
        let x = Object.values(T.default.getUsers()),
          J = Object.values(C.Z.getGuilds()),
          Q = C.Z.getAllGuildsRoles(),
          B = l().values(A.Z.getInitialOverlayState()),
          K = j.ZP.getMutableAllGuildsAndMembers(),
          X = D.ZP.getAllReadStates(!0),
          $ = M.Z.getAllVoiceStates(),
          ee = _.Z.getState(),
          et = w.Z.unavailableGuilds,
          en = l().mapValues(s.ZP.getGuilds(), (e) => e.emojis),
          ea = L.ZP.getAllSettings(),
          el = y.Z.getInternalState(),
          er = q.Z.getStates(),
          ei = b.Z.getAllConnections(),
          eu = U.Z.getApplicationActivities(),
          es = O.Z.getParties(),
          eo = O.Z.getUserParties(),
          ec = P.default.getSessionId(),
          ed = P.default.getAnalyticsToken(),
          eg = W.Z.getGameForPID(t),
          eZ = G.Z.getMemberCounts(),
          ef = V.Z.getRelationships(),
          em = Array.from(g.Z.getMessageRequestChannelIds()),
          eS = E.Z.getVoiceChannelId(),
          ev = z.Z.getFocusedPID(),
          ep = z.Z.getSelectedGuildId(),
          eI = z.Z.getSelectedChannelId(),
          eP = R.Z.getState(),
          ey = h.Z.games,
          eA = Object.values(N.Z.paymentSources).map((e) => e.toJS()),
          eb = N.Z.defaultPaymentSourceId,
          eO = N.Z.hasFetchedPaymentSources,
          eh = I.Z.getState(),
          ew = u.Z._getAllApplications().map((e) => e.toJS()),
          eG = H.Z.testModeApplicationId,
          ej = {
            null: {
              state: k.Z.getState(),
              pings: k.Z.getPings(),
              quality: k.Z.getQuality(),
              hostname: k.Z.getHostname(),
              lossRate: k.Z.getOutboundLossRate(),
            },
          },
          eC = Array.from(d.Z.getState().hiddenHotspots),
          eU = o.Z.getSerializedState(),
          eR = c.Z.getState(),
          e_ = f.Z.getInitialOverlayState(),
          ek = m.Z.getInitialOverlayState(),
          eD = S.Z.getInitialOverlayState(),
          eV = (0, p.xU)(i.o8, v.Z.settings),
          eE = Z.Z.getOverlaySerializedState();
        return {
          type: "OVERLAY_INITIALIZE",
          version: F.Tq,
          users: x,
          guilds: J,
          allGuildsRoles: Q,
          channels: B,
          guildMembers: K,
          readStates: X,
          voiceStates: $,
          unavailableGuilds: et,
          emojis: en,
          allUserGuildSettings: ea,
          callStoreInternalState: el,
          activityLauncherStates: er,
          connectedApps: ei,
          localActivities: eu,
          parties: es,
          userParties: eo,
          user: a,
          messageRequestChannelIds: em,
          token: e,
          sessionId: ec,
          analyticsToken: ed,
          presences: ee,
          currentGame: eg,
          selectedVoiceChannelId: eS,
          selectedChannelId: eI,
          selectedGuildId: ep,
          guildMemberCounts: eZ,
          relationships: ef,
          mediaEngineState: eP,
          rtcConnectionStates: ej,
          focusedPID: ev,
          applications: ew,
          paymentSources: eA,
          defaultPaymentSourceId: eb,
          hasFetchedPaymentSources: eO,
          testModeApplicationId: eG,
          applicationStreamState: eh,
          hiddenHotspots: eC,
          serializedExperimentStore: eU,
          streamingCapabilitiesStoreState: eR,
          joinedThreads: e_,
          threadMembers: ek,
          threadMessages: eD,
          userSettingsProto: eV,
          soundboardStoreState: eE,
          detectableApplications: ey,
        };
      }
    },
  },
]);
//# sourceMappingURL=a023ecd7528fea8f507b.js.map
