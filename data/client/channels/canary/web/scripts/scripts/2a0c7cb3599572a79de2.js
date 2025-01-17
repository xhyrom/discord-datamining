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
      var l = n(209739),
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
      var l = n(209739),
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
        d = n(998502),
        c = n(869614),
        f = n(281083),
        Z = n(672598);
      let g = !1,
        S = !0,
        E = !1;
      class P extends (a = u.ZP.Store) {
        initialize() {
          !(!s.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
              (g = (0, Z.Z)(e)),
                (S = (0, c.Z)(e)),
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
        d = n(653255),
        c = n(810788),
        f = n(355298),
        Z = n(763296),
        g = n(569471),
        S = n(260483),
        E = n(144140),
        P = n(581883),
        m = n(48481),
        v = n(199902),
        I = n(314897),
        p = n(523746),
        A = n(592125),
        y = n(757266),
        O = n(831506),
        b = n(77498),
        h = n(486472),
        _ = n(650774),
        R = n(271383),
        T = n(430824),
        N = n(293273),
        D = n(131951),
        L = n(158776),
        U = n(19780),
        w = n(306680),
        C = n(699516),
        M = n(944486),
        G = n(9156),
        j = n(594174),
        k = n(979651),
        H = n(853872),
        V = n(695103),
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
          X = w.ZP.getAllReadStates(!0),
          $ = k.Z.getAllVoiceStates(),
          ee = L.Z.getState(),
          et = h.Z.unavailableGuilds,
          en = r().mapValues(o.ZP.getGuilds(), (e) => e.emojis),
          el = G.ZP.getAllSettings(),
          er = p.Z.getInternalState(),
          ei = z.Z.getStates(),
          ea = y.Z.getAllConnections(),
          eu = N.Z.getApplicationActivities(),
          eo = O.Z.getParties(),
          es = O.Z.getUserParties(),
          ed = I.default.getSessionId(),
          ec = I.default.getAnalyticsToken(),
          ef = F.Z.getGameForPID(t),
          eZ = _.Z.getMemberCounts(),
          eg = C.Z.getRelationships(),
          eS = Array.from(f.Z.getMessageRequestChannelIds()),
          eE = M.Z.getVoiceChannelId(),
          eP = W.Z.getFocusedPID(),
          em = W.Z.getSelectedGuildId(),
          ev = W.Z.getSelectedChannelId(),
          eI = D.Z.getState(),
          ep = b.Z.games,
          eA = Object.values(H.Z.paymentSources).map((e) => e.toJS()),
          ey = H.Z.defaultPaymentSourceId,
          eO = H.Z.hasFetchedPaymentSources,
          eb = v.Z.getStreamingState(),
          eh = u.Z._getAllApplications().map((e) => e.toJS()),
          e_ = V.Z.testModeApplicationId,
          eR = {
            null: {
              state: U.Z.getState(),
              pings: U.Z.getPings(),
              quality: U.Z.getQuality(),
              hostname: U.Z.getHostname(),
              lossRate: U.Z.getOutboundLossRate(),
            },
          },
          eT = Array.from(c.Z.getState().hiddenHotspots),
          eN = s.Z.getSerializedState(),
          eD = d.Z.getState(),
          eL = g.Z.getInitialOverlayState(),
          eU = S.Z.getInitialOverlayState(),
          ew = E.Z.getInitialOverlayState(),
          eC = (0, m.xU)(a.o8, P.Z.settings),
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
          sessionId: ed,
          analyticsToken: ec,
          presences: ee,
          currentGame: ef,
          selectedVoiceChannelId: eE,
          selectedChannelId: ev,
          selectedGuildId: em,
          guildMemberCounts: eZ,
          relationships: eg,
          mediaEngineState: eI,
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
          streamingCapabilitiesStoreState: eD,
          joinedThreads: eL,
          threadMembers: eU,
          threadMessages: ew,
          userSettingsProto: eC,
          soundboardStoreState: eM,
          detectableApplications: ep,
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
        d = n(570140),
        c = n(314897),
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
          if (
            (null == r && (r = S[e] = {}),
            (r[t] = n),
            f.Z.isBlocked(e) || f.Z.isIgnored(e))
          )
            return;
          let i = null !== (l = E[n]) && void 0 !== l ? l : new Set();
          (E[n] = i), i.add(e);
        })(t, e, i);
      }
      function I(e) {
        let { guild: t } = e,
          n = !1;
        for (let { user: e, status: l, activities: r } of t.presences)
          !1 !== v(t.id, e.id, r, l) && (n = !0);
        return n;
      }
      function p(e, t) {
        let n = !1;
        return (
          t.forEach((t) => {
            null != t && v(e, t.user.id, t.activities, t.status) && (n = !0);
          }),
          n
        );
      }
      function A() {
        let e = c.default.getId(),
          t = Z.Z.getActivities();
        return v(g.ME, e, t);
      }
      function y(e) {
        let { relationship: t } = e;
        if (!f.Z.isBlocked(t.id) && !f.Z.isIgnored(t.id)) return !1;
        let n = S[t.id];
        if (null == n) return !1;
        for (let e of o().values(n)) {
          let n = E[e];
          null != n && n.delete(t.id);
        }
      }
      class O extends (l = s.ZP.Store) {
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
        (i = "displayName") in (r = O)
          ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = a),
        (t.Z = new O(d.Z, {
          CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
              l = !1;
            for (let { user: e, status: t, activities: r } of n)
              null != e && !1 !== v(g.ME, e.id, r, t) && (l = !0);
            for (let e of t) !1 !== I({ guild: e }) && (l = !0);
            return l;
          },
          OVERLAY_INITIALIZE: function (e) {
            let { parties: t, userParties: n } = e;
            (E = {}),
              (S = { ...n }),
              Object.keys(t).forEach((e) => (E[e] = new Set(t[e])));
          },
          GUILD_CREATE: I,
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
            return p(
              t,
              n.map((e) => e.presence),
            );
          },
          THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return (
              null != n &&
              p(
                t,
                n.map((e) => e.presence),
              )
            );
          },
          RELATIONSHIP_ADD: y,
          RELATIONSHIP_UPDATE: y,
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
//# sourceMappingURL=2a0c7cb3599572a79de2.js.map
