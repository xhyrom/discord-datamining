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
            return q;
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
        O = n(480294),
        b = n(831506),
        h = n(77498),
        _ = n(486472),
        R = n(650774),
        T = n(271383),
        N = n(430824),
        D = n(293273),
        L = n(131951),
        U = n(158776),
        w = n(19780),
        C = n(306680),
        M = n(699516),
        G = n(944486),
        j = n(9156),
        k = n(594174),
        H = n(979651),
        V = n(853872),
        F = n(695103),
        z = n(449224),
        W = n(181106),
        B = n(237997),
        Y = n(145597);
      async function q(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new i.Z();
        await new Promise((e) => setImmediate(e));
        let l = k.default.getCurrentUser();
        if (null == l)
          return new Promise((l) => {
            n.fail(() => {
              l(q(e, t, n));
            });
          });
        n.succeed();
        let x = Object.values(k.default.getUsers()),
          J = Object.values(N.Z.getGuilds()),
          Q = N.Z.getAllGuildsRoles(),
          K = r().values(A.Z.getInitialOverlayState()),
          X = T.ZP.getMutableAllGuildsAndMembers(),
          $ = C.ZP.getAllReadStates(!0),
          ee = H.Z.getAllVoiceStates(),
          et = U.Z.getState(),
          en = _.Z.unavailableGuilds,
          el = r().mapValues(o.ZP.getGuilds(), (e) => e.emojis),
          er = j.ZP.getAllSettings(),
          ei = p.Z.getInternalState(),
          ea = W.Z.getStates(),
          eu = y.Z.getAllConnections(),
          eo = D.Z.getApplicationActivities(),
          es = b.Z.getParties(),
          ed = b.Z.getUserParties(),
          ec = I.default.getSessionId(),
          ef = I.default.getAnalyticsToken(),
          eZ = z.Z.getGameForPID(t),
          eg = R.Z.getMemberCounts(),
          eS = M.Z.getRelationships(),
          eE = Array.from(f.Z.getMessageRequestChannelIds()),
          eP = G.Z.getVoiceChannelId(),
          em = B.Z.getFocusedPID(),
          ev = B.Z.getSelectedGuildId(),
          eI = B.Z.getSelectedChannelId(),
          ep = L.Z.getState(),
          eA = h.Z.games,
          ey = Object.values(V.Z.paymentSources).map((e) => e.toJS()),
          eO = V.Z.defaultPaymentSourceId,
          eb = V.Z.hasFetchedPaymentSources,
          eh = v.Z.getStreamingState(),
          e_ = u.Z._getAllApplications().map((e) => e.toJS()),
          eR = F.Z.testModeApplicationId,
          eT = {
            null: {
              state: w.Z.getState(),
              pings: w.Z.getPings(),
              quality: w.Z.getQuality(),
              hostname: w.Z.getHostname(),
              lossRate: w.Z.getOutboundLossRate(),
            },
          },
          eN = Array.from(c.Z.getState().hiddenHotspots),
          eD = s.Z.getSerializedState(),
          eL = d.Z.getState(),
          eU = g.Z.getInitialOverlayState(),
          ew = S.Z.getInitialOverlayState(),
          eC = E.Z.getInitialOverlayState(),
          eM = (0, m.xU)(a.o8, P.Z.settings),
          eG = Z.Z.getOverlaySerializedState(),
          ej = O.Z.consents;
        return {
          type: "OVERLAY_INITIALIZE",
          version: Y.Tq,
          users: x,
          guilds: J,
          allGuildsRoles: Q,
          channels: K,
          guildMembers: X,
          readStates: $,
          voiceStates: ee,
          unavailableGuilds: en,
          emojis: el,
          allUserGuildSettings: er,
          callStoreInternalState: ei,
          activityLauncherStates: ea,
          connectedApps: eu,
          localActivities: eo,
          parties: es,
          userParties: ed,
          user: l,
          messageRequestChannelIds: eE,
          token: e,
          sessionId: ec,
          analyticsToken: ef,
          presences: et,
          currentGame: eZ,
          selectedVoiceChannelId: eP,
          selectedChannelId: eI,
          selectedGuildId: ev,
          guildMemberCounts: eg,
          relationships: eS,
          mediaEngineState: ep,
          rtcConnectionStates: eT,
          focusedPID: em,
          applications: e_,
          paymentSources: ey,
          defaultPaymentSourceId: eO,
          hasFetchedPaymentSources: eb,
          testModeApplicationId: eR,
          applicationStreamState: eh,
          hiddenHotspots: eN,
          serializedExperimentStore: eD,
          streamingCapabilitiesStoreState: eL,
          joinedThreads: eU,
          threadMembers: ew,
          threadMessages: eC,
          userSettingsProto: eM,
          soundboardStoreState: eG,
          detectableApplications: eA,
          consents: ej,
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
//# sourceMappingURL=f95626ec43e7d3cbcc45.js.map
