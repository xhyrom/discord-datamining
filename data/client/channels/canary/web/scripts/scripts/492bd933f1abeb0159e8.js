"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27601"],
  {
    869614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      let l = new Set(["nvidia"]);
      function r(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && l.has(t)) return !0;
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
      var l = n(553813),
        r = n.n(l),
        i = n(358085);
      let a = {
        [i.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function u(e) {
        let t = a[(0, i.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let l = e[n],
            i = t[n];
          if (null == l || null == i || null != l.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(l);
          if (!r().satisfies(a, i)) return !0;
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
      var l = n(553813),
        r = n.n(l),
        i = n(358085);
      let a = { [i.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function u(e) {
        let t = a[(0, i.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let l = e[n],
            i = t[n];
          if (null == l || null == i || null != l.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(l);
          if (!r().satisfies(a, i)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, n) {
      var l,
        r,
        i,
        a,
        u = n(442837),
        o = n(570140),
        s = n(358085),
        c = n(998502),
        d = n(869614),
        f = n(281083),
        Z = n(672598);
      let g = !1,
        S = !0,
        E = !1;
      class P extends (a = u.ZP.Store) {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
              (g = (0, Z.Z)(e)),
                (S = (0, d.Z)(e)),
                (E = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return g;
        }
        get canUseHardwareAcceleration() {
          return S;
        }
        get problematicGPUDriver() {
          return E;
        }
        getState() {
          return {
            GPUDriversOutdated: g,
            canUseHardwareAcceleration: S,
            problematicGPUDriver: E,
          };
        }
      }
      (i = "StreamingCapabilitiesStore"),
        (r = "displayName") in (l = P)
          ? Object.defineProperty(l, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = i),
        (t.Z = new P(o.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (g = t.GPUDriversOutdated), (S = t.canUseHardwareAcceleration);
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
      var l = n(392711),
        r = n.n(l),
        i = n(261470),
        a = n(524437),
        u = n(812206),
        o = n(339085),
        s = n(353926),
        c = n(653255),
        d = n(810788),
        f = n(355298),
        Z = n(763296),
        g = n(569471),
        S = n(260483),
        E = n(144140),
        P = n(581883),
        m = n(48481),
        v = n(199902),
        p = n(314897),
        I = n(523746),
        A = n(592125),
        y = n(757266),
        O = n(831506),
        b = n(77498),
        h = n(486472),
        _ = n(650774),
        R = n(271383),
        T = n(430824),
        N = n(293273),
        w = n(131951),
        C = n(158776),
        D = n(19780),
        L = n(306680),
        U = n(699516),
        M = n(944486),
        G = n(9156),
        j = n(594174),
        k = n(979651),
        V = n(853872),
        H = n(695103),
        F = n(449224),
        z = n(181106),
        W = n(237997),
        B = n(145597);
      async function Y(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new i.Z();
        await new Promise((e) => setImmediate(e));
        let l = j.default.getCurrentUser();
        if (null == l)
          return new Promise((l) => {
            n.fail(() => {
              l(Y(e, t, n));
            });
          });
        n.succeed();
        let q = Object.values(j.default.getUsers()),
          x = Object.values(T.Z.getGuilds()),
          J = T.Z.getAllGuildsRoles(),
          Q = r().values(A.Z.getInitialOverlayState()),
          K = R.ZP.getMutableAllGuildsAndMembers(),
          X = L.ZP.getAllReadStates(!0),
          $ = k.Z.getAllVoiceStates(),
          ee = C.Z.getState(),
          et = h.Z.unavailableGuilds,
          en = r().mapValues(o.ZP.getGuilds(), (e) => e.emojis),
          el = G.ZP.getAllSettings(),
          er = I.Z.getInternalState(),
          ei = z.Z.getStates(),
          ea = y.Z.getAllConnections(),
          eu = N.Z.getApplicationActivities(),
          eo = O.Z.getParties(),
          es = O.Z.getUserParties(),
          ec = p.default.getSessionId(),
          ed = p.default.getAnalyticsToken(),
          ef = F.Z.getGameForPID(t),
          eZ = _.Z.getMemberCounts(),
          eg = U.Z.getRelationships(),
          eS = Array.from(f.Z.getMessageRequestChannelIds()),
          eE = M.Z.getVoiceChannelId(),
          eP = W.Z.getFocusedPID(),
          em = W.Z.getSelectedGuildId(),
          ev = W.Z.getSelectedChannelId(),
          ep = w.Z.getState(),
          eI = b.Z.games,
          eA = Object.values(V.Z.paymentSources).map((e) => e.toJS()),
          ey = V.Z.defaultPaymentSourceId,
          eO = V.Z.hasFetchedPaymentSources,
          eb = v.Z.getState(),
          eh = u.Z._getAllApplications().map((e) => e.toJS()),
          e_ = H.Z.testModeApplicationId,
          eR = {
            null: {
              state: D.Z.getState(),
              pings: D.Z.getPings(),
              quality: D.Z.getQuality(),
              hostname: D.Z.getHostname(),
              lossRate: D.Z.getOutboundLossRate(),
            },
          },
          eT = Array.from(d.Z.getState().hiddenHotspots),
          eN = s.Z.getSerializedState(),
          ew = c.Z.getState(),
          eC = g.Z.getInitialOverlayState(),
          eD = S.Z.getInitialOverlayState(),
          eL = E.Z.getInitialOverlayState(),
          eU = (0, m.xU)(a.o8, P.Z.settings),
          eM = Z.Z.getOverlaySerializedState();
        return {
          type: "OVERLAY_INITIALIZE",
          version: B.Tq,
          users: q,
          guilds: x,
          allGuildsRoles: J,
          channels: Q,
          guildMembers: K,
          readStates: X,
          voiceStates: $,
          unavailableGuilds: et,
          emojis: en,
          allUserGuildSettings: el,
          callStoreInternalState: er,
          activityLauncherStates: ei,
          connectedApps: ea,
          localActivities: eu,
          parties: eo,
          userParties: es,
          user: l,
          messageRequestChannelIds: eS,
          token: e,
          sessionId: ec,
          analyticsToken: ed,
          presences: ee,
          currentGame: ef,
          selectedVoiceChannelId: eE,
          selectedChannelId: ev,
          selectedGuildId: em,
          guildMemberCounts: eZ,
          relationships: eg,
          mediaEngineState: ep,
          rtcConnectionStates: eR,
          focusedPID: eP,
          applications: eh,
          paymentSources: eA,
          defaultPaymentSourceId: ey,
          hasFetchedPaymentSources: eO,
          testModeApplicationId: e_,
          applicationStreamState: eb,
          hiddenHotspots: eT,
          serializedExperimentStore: eN,
          streamingCapabilitiesStoreState: ew,
          joinedThreads: eC,
          threadMembers: eD,
          threadMessages: eL,
          userSettingsProto: eU,
          soundboardStoreState: eM,
          detectableApplications: eI,
        };
      }
    },
    831506: function (e, t, n) {
      n(47120);
      var l,
        r,
        i,
        a,
        u = n(392711),
        o = n.n(u),
        s = n(442837),
        c = n(570140),
        d = n(314897),
        f = n(699516),
        Z = n(885110),
        g = n(981631);
      let S = {},
        E = {};
      function P(e, t) {
        var n;
        return (null !== (n = S[e]) && void 0 !== n ? n : {})[t];
      }
      function m(e, t) {
        let n = P(e, t);
        if (null == n) return;
        let l = S[e];
        delete l[t], o().isEmpty(l) && delete S[e];
        let r = E[n];
        null != r && (r.delete(e), 0 === r.size && delete E[n]);
      }
      function v(e, t, n, l) {
        let r = n.find((e) => null != e.party && e.party.id),
          i = null != r && null != r.party ? r.party.id : null,
          a = P(t, e);
        if (null == i || l === g.Skl.OFFLINE)
          return null != a && (m(t, e), void 0);
        if (null != a) {
          if (a === i) return !1;
          m(t, e);
        }
        !(function (e, t, n) {
          var l;
          let r = S[e];
          if ((null == r && (r = S[e] = {}), (r[t] = n), f.Z.isBlocked(e)))
            return;
          let i = null !== (l = E[n]) && void 0 !== l ? l : new Set();
          (E[n] = i), i.add(e);
        })(t, e, i);
      }
      function p(e) {
        let { guild: t } = e,
          n = !1;
        for (let { user: e, status: l, activities: r } of t.presences)
          !1 !== v(t.id, e.id, r, l) && (n = !0);
        return n;
      }
      function I(e, t) {
        let n = !1;
        return (
          t.forEach((t) => {
            null != t && v(e, t.user.id, t.activities, t.status) && (n = !0);
          }),
          n
        );
      }
      function A() {
        let e = d.default.getId(),
          t = Z.Z.getActivities();
        return v(g.ME, e, t);
      }
      class y extends (l = s.ZP.Store) {
        initialize() {
          this.syncWith([Z.Z], A), this.waitFor(Z.Z, f.Z);
        }
        getParty(e) {
          return null != e && null != E[e] ? E[e] : null;
        }
        getUserParties() {
          return S;
        }
        getParties() {
          return E;
        }
      }
      (a = "GamePartyStore"),
        (i = "displayName") in (r = y)
          ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = a),
        (t.Z = new y(c.Z, {
          CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
              l = !1;
            for (let { user: e, status: t, activities: r } of n)
              null != e && !1 !== v(g.ME, e.id, r, t) && (l = !0);
            for (let e of t) !1 !== p({ guild: e }) && (l = !0);
            return l;
          },
          OVERLAY_INITIALIZE: function (e) {
            let { parties: t, userParties: n } = e;
            (E = {}),
              (S = { ...n }),
              Object.keys(t).forEach((e) => (E[e] = new Set(t[e])));
          },
          GUILD_CREATE: p,
          PRESENCES_REPLACE: function (e) {
            let { presences: t } = e,
              n = !1;
            for (let { user: e, activities: l } of t)
              null != e && !1 !== v(g.ME, e.id, l) && (n = !0);
            return n;
          },
          PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
              .map((e) => {
                let { guildId: t, user: n, status: l, activities: r } = e;
                return v(null != t ? t : g.ME, n.id, r, l);
              })
              .some((e) => e);
          },
          THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return I(
              t,
              n.map((e) => e.presence),
            );
          },
          THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return (
              null != n &&
              I(
                t,
                n.map((e) => e.presence),
              )
            );
          },
          RELATIONSHIP_ADD: function (e) {
            let { relationship: t } = e;
            if (!f.Z.isBlocked(t.id)) return !1;
            let n = S[t.id];
            if (null == n) return !1;
            for (let e of o().values(n)) {
              let n = E[e];
              null != n && n.delete(t.id);
            }
          },
          RELATIONSHIP_REMOVE: function (e) {
            let { relationship: t } = e,
              n = S[t.id];
            if (null == n) return !1;
            for (let e of o().values(n)) {
              let n = E[e];
              null != n && n.add(t.id);
            }
          },
        }));
    },
  },
]);
//# sourceMappingURL=492bd933f1abeb0159e8.js.map
