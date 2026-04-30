"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88256"],
  {
    785796(e, t, l) {
      l.d(t, { A: () => u });
      var n = l(636537),
        i = l(228366),
        r = l(652215);
      let s = `${r.Joy}/api/v2/scheduled-maintenances`,
        a = `${r.Joy}/api/v2/incidents/unresolved.json`,
        u = {
          checkIncidents() {
            Promise.all([
              n.Bo.get({ url: `${s}/active.json`, rejectWithError: !0 }),
              n.Bo.get(a),
            ]).then((e) => {
              let [t, l] = e,
                [n] = t.body.scheduled_maintenances,
                [r] = l.body.incidents;
              i.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: r || n });
            });
          },
          checkScheduledMaintenances() {
            n.Bo.get({ url: `${s}/upcoming.json`, rejectWithError: !0 }).then(
              (e) => {
                let [t] = e.body.scheduled_maintenances;
                i.h.dispatch({
                  type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                  maintenance: t,
                });
              },
            );
          },
          ackScheduledMaintenance() {
            i.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
          },
        };
    },
    55619(e, t, l) {
      l.d(t, { A: () => i });
      var n = l(228366);
      let i = {
        setEnabled(e) {
          this.update({ enabled: e });
        },
        update(e) {
          for (let t of Object.keys(e))
            n.h.dispatch({ type: "STREAMER_MODE_UPDATE", key: t, value: e[t] });
        },
      };
    },
    271866(e, t, l) {
      l.d(t, { SH: () => T, cL: () => _, q1: () => h });
      var n = l(228366),
        i = l(795816),
        r = l(627363),
        s = l(587895),
        a = l(20015),
        u = l(793943),
        o = l(395671),
        c = l(998218),
        d = l(110782),
        E = l(652215);
      async function h(e, t) {
        n.h.dispatch({
          applicationId: e,
          type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START",
        });
        try {
          if (!(await (0, i.Ir)(e))) throw Error("Do not have access!");
          let l = s.A.getApplication(e);
          null == l &&
            (l = o.Ay.createFromServer(await r.Ay.fetchApplication(e)));
          let u = (0, a.n)(l, E.gfo.EMBEDDED);
          if (u && (null == t || !c.A.URL_REGEX.test(t)))
            throw Error("Invalid Origin URL for embedded application");
          return (
            u || d.Cd(l),
            n.h.dispatch({
              type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
              applicationId: e,
              originURL: u ? t : null,
            }),
            l
          );
        } catch (t) {
          return (
            n.h.dispatch({
              type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
              applicationId: e,
              error: t.message,
            }),
            null
          );
        }
      }
      function _() {
        u.fy.getState().activePanel === u.HP.APPLICATION_TEST_MODE_DEBUG &&
          (0, u.Jp)(),
          n.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
      }
      function T() {
        u.fy.getState().activePanel === u.HP.APPLICATION_TEST_MODE_DEBUG &&
          (0, u.Jp)(),
          n.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
      }
    },
    145643(e, t, l) {
      l.d(t, { A: () => u });
      var n = l(17928),
        i = l(228366),
        r = l(71393);
      let s = new Map();
      class a extends n.Ay.Store {
        static displayName = "GuildRoleConnectionsConfigurationStore";
        initialize() {
          this.waitFor(r.A);
        }
        getGuildRoleConnectionsConfiguration(e) {
          return s.get(e);
        }
      }
      let u = new a(i.h, {
        GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
          let { roleId: t, roleConnectionConfigurations: l } = e;
          s.set(t, l);
        },
      });
    },
    585510(e, t, l) {
      l.d(t, { Li: () => A, _g: () => I, dj: () => S });
      var n = l(136722),
        i = l(702841),
        r = l(617617),
        s = l(71393),
        a = l(576705),
        u = l(967198),
        o = l(287809),
        c = l(488926),
        d = l(935208),
        E = l(974103),
        h = l(903093),
        _ = l(610136),
        T = l(218113);
      function A(e) {
        let t = (0, i.bG)([s.A, a.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let l = a.A.getGuildPermissions(t);
            return null != l && n.X8(l, T.Sz);
          }),
          l = (0, i.bG)([_.A], () =>
            null != e ? _.A.getGuildIncident(e) : null,
          ),
          r = null != l && (0, h._J)(l);
        return {
          shouldShowIncidentActions: t,
          incidentData: l,
          isUnderLockdown: r,
        };
      }
      function S() {
        let e = (function (e) {
            let t = o.default.getCurrentUser(),
              l = _.A.getIncidentsByGuild();
            for (let i of d.default.keys(l).map((e) => s.A.getGuild(e))) {
              if (null == i) continue;
              let r = l[i.id];
              if (
                !(
                  null == r ||
                  (!(0, h.k$)(r) && !(0, h._J)(r)) ||
                  ((0, h._J)(r) && i.id !== e)
                ) &&
                n.X8(c.cc({ user: t, context: i, checkElevated: !1 }), T.Sz)
              )
                return i.id;
            }
            return null;
          })(u.A.getGuildId()),
          t = r.A.getGuildsProto() ?? {},
          l = null != e ? t[e] : null,
          i = null != l && l.disableRaidAlertNag;
        return { show: null != e && !i, guildId: e };
      }
      function I(e) {
        return (0, i.bG)([a.A, s.A], () => {
          let t = s.A.getGuild(e);
          return (0, E.nc)(t, a.A);
        });
      }
      l(652215);
    },
    93474(e, t, l) {
      l.d(t, { A: () => N });
      var n = l(17928),
        i = l(228366),
        r = l(884384),
        s = l(320095),
        a = l(734057),
        u = l(232835),
        o = l(935208),
        c = l(753738),
        d = l(877133),
        E = l(652215);
      let h = {},
        _ = 0,
        T = {},
        A = {},
        S = (e) => {
          null != h[e] && delete h[e], _++;
        };
      function I(e) {
        let t,
          l,
          { messageData: n, errorResponseBody: i } = e;
        return (
          (l = {
            id: (t = (0, r.cR)(n)),
            isBlockedEdit: (0, r.Qn)(n),
            messageData: n,
            errorMessage: (0, c.PD)(n, i),
          }),
          (h[t] = l),
          _++,
          !0
        );
      }
      function p(e) {
        let { channelId: t, messages: l } = e,
          n = a.A.getChannel(t)?.getGuildId();
        if (null == n) return !1;
        let i = A[n],
          r = l.reduce(
            (e, t) =>
              t.type === E.lAJ.AUTO_MODERATION_ACTION &&
              t.embeds?.some((e) => {
                let { type: t } = e;
                return t === E.Auw.AUTO_MODERATION_NOTIFICATION;
              })
                ? null == e || -1 === o.default.compare(e, t.id)
                  ? t.id
                  : void 0
                : e,
            i,
          );
        return null != r && A[n] !== r && ((A[n] = r), !0);
      }
      class f extends n.Ay.PersistedStore {
        static displayName = "GuildAutomodMessageStore";
        static persistKey = "GuildAutomodMessages";
        initialize(e) {
          this.waitFor(a.A, u.A),
            null != e &&
              ((h = e.automodFailedMessages),
              (T = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: h,
            mentionRaidDetectionByGuild: T,
            lastIncidentAlertMessage: A,
          };
        }
        getMessage(e) {
          return null == e ? null : (h[e] ?? null);
        }
        getMessagesVersion() {
          return _;
        }
        getMentionRaidDetected(e) {
          return T[e] ?? null;
        }
        getLastIncidentAlertMessage(e) {
          return A[e] ?? null;
        }
      }
      let N = new f(i.h, {
        CONNECTION_OPEN: function (e) {
          return 0 !== Object.keys(h).length && ((h = {}), _++, !0);
        },
        LOAD_MESSAGES_SUCCESS: p,
        LOCAL_MESSAGES_LOADED: p,
        MESSAGE_CREATE: function (e) {
          let { guildId: t, message: l } = e;
          if (null == t || l.type !== E.lAJ.AUTO_MODERATION_ACTION) return !1;
          let n = (0, s.rh)(l);
          return !!(0, d.ER)(n) && !!(0, d.de)(n) && ((A[t] = n.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: I,
        MESSAGE_EDIT_FAILED_AUTOMOD: I,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
          let { messageId: t } = e;
          return S(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
          let { response: t } = e;
          if (t?.body == null || t.body.code === E.t02.AUTOMOD_MESSAGE_BLOCKED)
            return !1;
          let l = t.body.id;
          if (null == l) return !1;
          S(l);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
          let {
            guildId: t,
            decisionId: l,
            suspiciousMentionActivityUntil: n,
          } = e;
          return (
            (T[t] = {
              guildId: t,
              decisionId: l,
              suspiciousMentionActivityUntil: n,
            }),
            !0
          );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
          let { guildId: t } = e;
          return delete T[t], !0;
        },
      });
    },
    624458(e, t, l) {
      l.d(t, { A: () => _ });
      var n = l(636537),
        i = l(228366),
        r = l(157559),
        s = l(956793),
        a = l(95701),
        u = l(51271),
        o = l(844944),
        c = l(513461),
        d = l(212455),
        E = l(652215),
        h = l(985018);
      let _ = {
        fetchGuildJoinRequest: async (e) => {
          let t = await n.Bo.get({
              url: E.Rsh.GUILD_JOIN_REQUEST_BY_ID(e),
              rejectWithError: !1,
            }),
            l = (0, d.j)(t.body);
          return (
            i.h.dispatch({
              type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
              joinRequest: l,
            }),
            t
          );
        },
        fetchGuildJoinRequests: async (e) => {
          let {
              guildId: t,
              status: l = c.B5.SUBMITTED,
              before: r,
              after: s,
              limit: a = 25,
              force: u = !1,
            } = e,
            h = u || !o.A.hasFetched(t);
          if (!o.A.isFetching() && h) {
            i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_START" });
            try {
              let e = await n.Bo.get({
                  url: E.Rsh.GUILD_JOIN_REQUESTS(t),
                  query: { status: l, limit: a, before: r, after: s },
                  rejectWithError: !1,
                }),
                u = e.body.total,
                o = (e.body.guild_join_requests ?? []).map(d.j);
              return (
                i.h.dispatch({
                  type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                  status: l,
                  requests: o,
                  total: u,
                  limit: a,
                  guildId: t,
                }),
                e
              );
            } catch (e) {
              throw (
                (i.h.dispatch({ type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE" }), e)
              );
            }
          }
        },
        ackUserGuildJoinRequest: async (e, t) => {
          try {
            return await n.Bo.post({
              url: E.Rsh.GUILD_JOIN_REQUEST_ACK(e, t),
              rejectWithError: !1,
            });
          } catch (e) {
          } finally {
            i.h.dispatch({
              type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
              id: t,
              guildId: e,
            });
          }
        },
        removeGuildJoinRequest: async (e) => {
          try {
            let t = await n.Bo.del({
              url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
              rejectWithError: !1,
            });
            return (
              i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: null,
              }),
              t
            );
          } catch (e) {
            throw e;
          }
        },
        updateGuildJoinRequest: async function (e, t, l) {
          let s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : c.B5.APPROVED,
            a = arguments.length > 4 ? arguments[4] : void 0;
          (0, u.iN)({ guildId: e, actionType: s, applicationUserId: t });
          let o = await n.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUEST_ID(e, l),
            body: { action: s, rejection_reason: a },
            rejectWithError: !1,
          }).catch(
            (e) => (
              e &&
                e.body &&
                e.body.code === E.t02.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                r.A.show({
                  title: h.intl.string(h.t.DxJj4e),
                  body: h.intl.string(h.t.rSAOk9),
                }),
              Promise.reject(e)
            ),
          );
          i.h.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: o.body.application_status,
            request: o.body,
          });
        },
        actionAllPendingJoinRequests: async (e, t) => {
          let l = await n.Bo.patch({
            url: E.Rsh.GUILD_JOIN_REQUESTS(e),
            body: { action: t },
            rejectWithError: !1,
          });
          return (
            i.h.dispatch({
              type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
              guildId: e,
              action: t,
            }),
            l.body
          );
        },
        resetGuildJoinRequest: async (e) => {
          try {
            let { body: t } = await n.Bo.post({
              url: E.Rsh.GUILD_MEMBER_REQUEST_TO_JOIN(e),
              rejectWithError: !1,
            });
            return (
              i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: t,
              }),
              t
            );
          } catch (e) {
            throw e;
          }
        },
        fetchRequestToJoinGuilds: async () => {
          let e = await n.Bo.get({
            url: E.Rsh.USER_JOIN_REQUEST_GUILDS,
            rejectWithError: !1,
          });
          i.h.dispatch({
            type: "USER_JOIN_REQUEST_GUILDS_FETCH",
            guilds: e.body,
          });
        },
        setSelectedApplicationTab: (e, t) => {
          i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
            guildId: e,
            applicationTab: t,
          });
        },
        setSelectedSortOrder: (e, t) => {
          i.h.dispatch({
            type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
            guildId: e,
            sortOrder: t,
          });
        },
        setSelectedGuildJoinRequest: (e, t) => {
          null != t &&
            (0, u.gH)({
              guildId: e,
              applicationStatus: t.applicationStatus,
              applicationUserId: t.userId,
            }),
            i.h.dispatch({
              type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
              guildId: e,
              request: t,
            });
        },
        createOrEnterJoinRequestInterview: async function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            l = await n.Bo.post({
              url: E.Rsh.GUILD_JOIN_REQUEST_INTERVIEW(e),
              rejectWithError: !1,
            }),
            r = (0, a.UE)(l.body);
          return (
            i.h.dispatch({ type: "CHANNEL_CREATE", channel: r }),
            t && s.default.selectPrivateChannel(r.id),
            r.id
          );
        },
        fetchJoinRequestCooldown: async (e) => {
          try {
            let t = await n.Bo.get({
              url: E.Rsh.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e),
              rejectWithError: !1,
            });
            return (
              i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: t.body.cooldown,
              }),
              t
            );
          } catch (t) {
            throw (
              (i.h.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH",
                guildId: e,
                cooldown: null,
              }),
              t)
            );
          }
        },
      };
    },
    221950(e, t, l) {
      l.d(t, {
        Cw: () => h,
        Ld: () => _,
        UD: () => E,
        aZ: () => T,
        jo: () => A,
        uO: () => d,
      });
      var n = l(228366),
        i = l(997509),
        r = l(976860),
        s = l(71393),
        a = l(134413),
        u = l(11541),
        o = l(652215),
        c = l(746080);
      async function d(e) {
        await n.h.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: e,
        });
      }
      function E(e) {
        n.h.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: e,
        });
      }
      function h(e, t) {
        let { continuationToken: l, ...i } = t;
        n.h.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: i,
        });
      }
      async function _(e, t) {
        await n.h.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function T(e) {
        let t = (0, a.Ml)(e),
          l = s.A.getGuild(e);
        return (
          !!t &&
          null != l &&
          (l.features.has(
            o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
          ) ||
          l.features.has(o.GuildFeatures.COMMUNITY) ||
          l.features.has(
            o.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY,
          )
            ? (0, r.pX)(o.BVt.CHANNEL(e, c.VV.MEMBER_SAFETY))
            : i.A.open(l.id, o.BEX.MEMBERS),
          !0)
        );
      }
      async function A(e, t) {
        let l = await (0, u.vk)(e, t);
        return 0 === l.length
          ? []
          : (await n.h.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: e,
              memberSupplementals: l,
            }),
            l);
      }
    },
    311127(e, t, l) {
      l.d(t, { A: () => C }), l(321073);
      var n = l(627968),
        i = l(64700),
        r = l(136722),
        s = l(44482),
        a = l(17928),
        u = l(834730),
        o = l(732771),
        c = l(260509),
        d = l(34457),
        E = l(696451),
        h = l(317525),
        _ = l(71393),
        T = l(287809),
        A = l(488926),
        S = l(935208),
        I = l(529942),
        p = l(164956),
        f = l(209700),
        N = l(652215),
        g = l(985018),
        O = l(59742);
      function C(e) {
        let { guildId: t } = e,
          l = (0, a.bG)([T.default], () => T.default.getCurrentUser()),
          C = (0, a.bG)([_.A], () => _.A.getGuild(t)),
          y = (0, a.bG)([h.A], () => h.A.getRolesSnapshot(t)),
          U = (0, a.bG)([h.A], () => h.A.getSortedRoles(t)),
          { impersonateType: D, viewingRoles: m } = (0, a.cf)([p.A], () => ({
            impersonateType: p.A.getImpersonateType(t),
            viewingRoles: p.A.getViewingRoles(t),
          })),
          L = D === f._.SERVER_SHOP,
          M = (0, a.bG)([E.Ay], () =>
            null != l ? E.Ay.getTrueMember(t, l.id) : null,
          ),
          v = null != C ? y[(0, c.af)(C)] : null,
          [b, x] = i.useState(() => {
            let e = null == m ? [] : S.default.keys(m);
            return null != v && e.push(v.id), e;
          }),
          G = i.useRef(C);
        i.useEffect(() => {
          let e = {},
            t = G.current;
          if (null != t && null != D) {
            for (let t of b) {
              let l = y[t];
              null != l && (e[t] = l);
            }
            (0, I.IA)(t.id, { type: D, roles: e });
          }
        }, [b, D, y]);
        let w =
            null != C && null != l && null != M
              ? U.find((e) => M.roles.includes(e.id))
              : void 0,
          P = i.useMemo(
            () =>
              null != C && null != l
                ? U.filter((e) => !(0, d.Oy)(e))
                    .filter(
                      (e) => !L || e.tags?.subscription_listing_id != null,
                    )
                    .filter((e) => w?.id === e.id || A.wO(C, l.id, w, e))
                : [],
            [C, l, L, w, U],
          ),
          j = i.useMemo(() => {
            let e = Array.from(P).map((e) => ({
              leading: R(e),
              value: e.id,
              label: e.name,
              id: e.id.toString(),
              disabled: !1,
            }));
            return (
              null != C &&
                null != v &&
                e.push({
                  leading: R(v),
                  value: v.id,
                  label: v.name,
                  id: v.id.toString(),
                  disabled: !0,
                }),
              e
            );
          }, [P, C, v]);
        if (null == l || null == C || null == M) return null;
        let k = {};
        return (M.roles.forEach((e) => {
          let t = y[e];
          null != t && (k[t.id] = t);
        }),
        r.zy(
          A.aH({ forceRoles: k, context: C }),
          r.kg(N.xBc.MANAGE_GUILD, N.xBc.MANAGE_ROLES),
        ) || (0, c.bM)(C, l))
          ? (0, n.jsx)("div", {
              className: O.kL,
              children: (0, n.jsxs)(o.iS, {
                selectionMode: "multiple",
                options: j,
                value: b,
                onSelectionChange: (e) => {
                  x(e);
                },
                children: [
                  (0, n.jsx)(o.a3, {
                    hideTags: !0,
                    autoFocus: !0,
                    placeholder: g.intl.string(g.t.Sojqsr),
                  }),
                  (0, n.jsx)(o.X2, {
                    renderListItem: (e) => (0, n.jsx)(s.c, { ...e }),
                  }),
                ],
              }),
            })
          : (0, n.jsx)(u.E, {
              variant: "text-md/medium",
              children: g.intl.string(g.t.MNSTbY),
            });
      }
      function R(e) {
        return () =>
          (0, n.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("circle", {
              cx: "6",
              cy: "6",
              r: "6",
              fill: e.colorString ?? "currentColor",
            }),
          });
      }
    },
    869968(e, t, l) {
      l.d(t, { A: () => o });
      var n = l(17928),
        i = l(228366);
      let r = !1,
        s = !1,
        a = !1;
      class u extends n.Ay.Store {
        static displayName = "CheckoutRecoveryStore";
        getIsTargeted() {
          return a;
        }
        shouldFetchCheckoutRecovery() {
          return !r && !s;
        }
      }
      let o = new u(i.h, {
        CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
          (s = !0), (r = !1), (a = e.isTargeted);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
          (s = !0), (r = !1);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH: function () {
          r = !0;
        },
        LOGOUT: function () {
          (r = !1), (s = !1), (a = !1);
        },
      });
    },
    923349(e, t, l) {
      l.d(t, { A: () => E });
      var n = l(989349),
        i = l.n(n),
        r = l(17928),
        s = l(228366),
        a = l(243217),
        u = l(287809),
        o = l(927578);
      let c = !1;
      class d extends r.Ay.Store {
        initialize() {
          this.waitFor(u.default);
        }
        static displayName = "SubscriptionRemindersStore";
        shouldShowReactivateNotice() {
          let e = u.default.getCurrentUser();
          return !(0, o.TW)(e) && c;
        }
      }
      let E = new d(s.h, {
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
          let { subscription: t } = e;
          if (null != t) {
            let e = a.A.createFromServer(t);
            if (null == (0, o.EL)(e) || e.metadata?.ended_at == null) return;
            let l = i()(e.metadata.ended_at);
            i()().isBetween(
              l.clone().add(4, "days"),
              l.clone().add(11, "days"),
            ) && (c = !0);
          }
        },
      });
    },
    894374(e, t, l) {
      l.d(t, { A: () => i });
      let n = (0, l(945810).mj)({
        name: "2026-02-referral-reminder-dc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      function i(e) {
        let { location: t } = e;
        return n.useConfig({ location: t }).enabled;
      }
    },
    468035(e, t, l) {
      function n(e, t) {
        let {
          Operator: l,
          QuestionID: n,
          ChoiceLocator: i,
          LeftOperand: r,
          RightOperand: s,
        } = e;
        if (null == n) return !0;
        let a = t[n];
        if (null == a || "" === a) return !1;
        let u = i?.match(/SelectableChoice\/(\d+)/),
          o = u?.[1];
        switch (l) {
          case "Selected":
            return null != o && a.split(",").includes(o);
          case "NotSelected":
            return null != o && !a.split(",").includes(o);
          case "EqualTo":
            return a === (s ?? r);
          case "NotEqualTo":
            return a !== (s ?? r);
          case "GreaterThan":
            return Number(a) > Number(s ?? r ?? 0);
          case "LessThan":
            return Number(a) < Number(s ?? r ?? 0);
          case "GreaterThanOrEqualTo":
            return Number(a) >= Number(s ?? r ?? 0);
          case "LessThanOrEqualTo":
            return Number(a) <= Number(s ?? r ?? 0);
          case "Contains":
            return a.includes(s ?? r ?? "");
          case "DoesNotContain":
            return !a.includes(s ?? r ?? "");
          default:
            return !0;
        }
      }
      function i(e) {
        let t = [];
        for (let l of e.SurveyFlow.Flow)
          ("Block" === l.Type || "Standard" === l.Type) &&
            null != l.ID &&
            t.push(l.ID);
        return t;
      }
      function r(e) {
        let t = [],
          l = [];
        for (let n of e.BlockElements)
          "Page Break" === n.Type
            ? l.length > 0 && (t.push(l), (l = []))
            : "Question" === n.Type &&
              null != n.QuestionID &&
              l.push(n.QuestionID);
        return l.length > 0 && t.push(l), t;
      }
      function s(e) {
        for (let t of i(e)) {
          let l = r(e.Blocks[t]);
          if (l.length > 0 && l[0].length > 0)
            return {
              blockId: t,
              pageIndex: 0,
              questionIds: l[0],
              isComplete: !1,
            };
        }
        return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
      }
      function a(e, t) {
        let { blockId: l, pageIndex: i, responses: s } = t,
          a = e.Blocks[l];
        if (null == a) return [];
        let u = r(a);
        return i >= u.length
          ? []
          : u[i].filter((t) =>
              (function (e, t) {
                if (null == e.DisplayLogic) return !0;
                let { DisplayLogic: l } = e;
                for (let e in l)
                  if (
                    "Type" !== e &&
                    "inPage" !== e &&
                    "object" == typeof l[e]
                  ) {
                    let i = l[e];
                    if ("If" === i.Type || "ElseIf" === i.Type) {
                      if (
                        (function (e, t) {
                          let l = [];
                          for (let t in e)
                            "Type" !== t &&
                              "object" == typeof e[t] &&
                              l.push(e[t]);
                          if (0 === l.length) return !0;
                          let i = n(l[0], t);
                          for (let e = 1; e < l.length; e++) {
                            let r = l[e],
                              s = n(r, t);
                            i =
                              "Or" === (r.Conjuction ?? r.Conjunction ?? "And")
                                ? i || s
                                : i && s;
                          }
                          return i;
                        })(i, t)
                      )
                        return !0;
                    } else if ("Else" === i.Type) return !0;
                  }
                return !1;
              })(e.Questions[t], s),
            );
      }
      function u(e, t) {
        let { blockId: l, pageIndex: n, responses: s } = t,
          a = i(e),
          u = e.Blocks[l];
        if (null == u)
          return {
            blockId: null,
            pageIndex: 0,
            questionIds: [],
            isComplete: !0,
          };
        let o = r(u),
          c = o[n];
        if (null != c && c.length > 0)
          for (let t = c.length - 1; t >= 0; t--) {
            let l = c[t];
            if (null != e.Questions[l] && null != s[l]) {
              let t = u.BlockElements.find((e) => e.QuestionID === l);
              if (null != t) {
                let l = (function (e, t) {
                  if (null == e.SkipLogic || 0 === e.SkipLogic.length)
                    return null;
                  for (let l of e.SkipLogic) {
                    let {
                        QuestionID: e,
                        Condition: n,
                        Value: i,
                        SkipToDestination: r,
                        ChoiceLocator: s,
                      } = l,
                      a = t[e];
                    if (null == a || "" === a) continue;
                    let u = s?.match(/SelectableChoice\/(\d+)/),
                      o = u?.[1],
                      c = !1;
                    switch (n) {
                      case "Selected":
                        c = null != o && a.split(",").includes(o);
                        break;
                      case "NotSelected":
                        c = null != o && !a.split(",").includes(o);
                        break;
                      case "EqualTo":
                        c = a === i?.toString();
                        break;
                      case "NotEqualTo":
                        c = a !== i?.toString();
                        break;
                      case "GreaterThan":
                        c = Number(a) > Number(i ?? 0);
                        break;
                      case "LessThan":
                        c = Number(a) < Number(i ?? 0);
                        break;
                      case "GreaterThanOrEqualTo":
                        c = Number(a) >= Number(i ?? 0);
                        break;
                      case "LessThanOrEqualTo":
                        c = Number(a) <= Number(i ?? 0);
                        break;
                      case "Contains":
                        c = a.includes(i?.toString() ?? "");
                        break;
                      case "DoesNotContain":
                        c = !a.includes(i?.toString() ?? "");
                    }
                    if (c) {
                      if ("ENDOFSURVEY" === r?.trim().toUpperCase())
                        return "ENDOFSURVEY";
                      return r;
                    }
                  }
                  return null;
                })(t, s);
                if ("ENDOFSURVEY" === l)
                  return {
                    blockId: null,
                    pageIndex: 0,
                    questionIds: [],
                    isComplete: !0,
                  };
                if (null != l)
                  for (let t of a) {
                    let n = r(e.Blocks[t]);
                    for (let e = 0; e < n.length; e++)
                      if (n[e].includes(l))
                        return {
                          blockId: t,
                          pageIndex: e,
                          questionIds: n[e],
                          isComplete: !1,
                        };
                  }
              }
            }
          }
        if (n + 1 < o.length)
          return {
            blockId: l,
            pageIndex: n + 1,
            questionIds: o[n + 1],
            isComplete: !1,
          };
        let d = a.indexOf(l);
        for (let t = d + 1; t < a.length; t++) {
          let l = a[t],
            n = r(e.Blocks[l]);
          if (n.length > 0 && n[0].length > 0)
            return {
              blockId: l,
              pageIndex: 0,
              questionIds: n[0],
              isComplete: !1,
            };
        }
        return { blockId: null, pageIndex: 0, questionIds: [], isComplete: !0 };
      }
      l.d(t, { i: () => s, uy: () => a, vt: () => u }), l(321073);
    },
    198778(e, t, l) {
      l.d(t, { A: () => O });
      var n = l(627968);
      l(64700);
      var i = l(503698),
        r = l.n(i),
        s = l(834730);
      l(321073);
      var a = l(939249),
        u = l(144228),
        o = l(658675),
        c = l(292666),
        d = l(793361);
      function E(e) {
        let {
            choiceId: t,
            choice: l,
            isSelected: i,
            onSelectionChange: r,
            inputType: E,
            textInputValue: h,
            onTextInputChange: _,
          } = e,
          T = "true" === l.TextEntry,
          A = `choice-label-${t}`;
        return (0, n.jsxs)("div", {
          className: d.NV,
          children: [
            (0, n.jsxs)(a.D, {
              className: d.d,
              onClick: () => {
                r(t);
              },
              role: E,
              "aria-checked": i,
              "aria-labelledby": A,
              children: [
                (0, n.jsx)("div", {
                  className: d.jl,
                  children:
                    "radio" === E
                      ? (0, n.jsx)(u.T, { disabled: !1, checked: i })
                      : (0, n.jsx)(o.P, { disabled: !1, checked: i }),
                }),
                (0, n.jsx)(s.E, {
                  id: A,
                  variant: "text-md/normal",
                  color: "text-subtle",
                  children: (0, n.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: l.Display },
                  }),
                }),
              ],
            }),
            T &&
              (0, n.jsx)("div", {
                className: d.Vi,
                children: (0, n.jsx)(c.k, {
                  value: h ?? "",
                  onChange: (e) => {
                    i || r(t), _?.(t, e);
                  },
                  disabled: !i,
                }),
              }),
          ],
        });
      }
      var h = l(880652),
        _ = l(225460);
      function T(e) {
        let { question: t, questionId: l, value: i, onValueChange: r } = e,
          { selectedChoice: a, textInputs: u } = ((e) => {
            if (null == e || "" === e)
              return { selectedChoice: null, textInputs: {} };
            let t = e.split(":TEXT:", 2),
              l = t[0],
              n = {};
            return (
              t.length > 1 && (n[l] = t[1]),
              { selectedChoice: l, textInputs: n }
            );
          })(i),
          o = (e) => {
            let n = u[e];
            null == n || "" === n
              ? r(l, e)
              : null != t.Choices && t.Choices[e]?.TextEntry === "true"
                ? r(l, `${e}:TEXT:${n}`)
                : r(l, e);
          },
          c = (e, t) => {
            r(l, null != t && "" !== t ? `${e}:TEXT:${t}` : e);
          };
        return null == t.Choices
          ? (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)(s.E, {
                variant: "text-sm/medium",
                className: _.WN,
                children: "No choices available for this question",
              }),
            })
          : (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)("div", {
                className: _.Me,
                children: Object.entries(t.Choices).map((e) => {
                  let [t, l] = e;
                  return (0, n.jsx)(
                    E,
                    {
                      choiceId: t,
                      choice: l,
                      isSelected: a === t,
                      onSelectionChange: o,
                      inputType: "radio",
                      textInputValue: u[t],
                      onTextInputChange: c,
                    },
                    t,
                  );
                }),
              }),
            });
      }
      function A(e) {
        let { question: t, questionId: l, value: i, onValueChange: r } = e,
          { selectedChoices: a, textInputs: u } = ((e) => {
            if (null == e || "" === e)
              return { selectedChoices: [], textInputs: {} };
            let t = e.split(","),
              l = [],
              n = {};
            return (
              t.forEach((e) => {
                let t = e.split(":TEXT:", 2),
                  i = t[0];
                l.push(i), t.length > 1 && (n[i] = t[1]);
              }),
              { selectedChoices: l, textInputs: n }
            );
          })(i),
          o = (e, t) =>
            e
              .map((e) => {
                let l = t[e];
                return null != l && "" !== l ? `${e}:TEXT:${l}` : e;
              })
              .join(","),
          c = (e) => {
            let t = a.includes(e) ? a.filter((t) => t !== e) : [...a, e],
              n = { ...u };
            t.includes(e) || delete n[e], r(l, o(t, n));
          },
          d = (e, t) => {
            r(l, o(a, { ...u, [e]: t }));
          };
        return null == t.Choices || 0 === Object.keys(t.Choices).length
          ? (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)(s.E, {
                variant: "text-sm/medium",
                className: _.WN,
                children: "No choices available for this question",
              }),
            })
          : (0, n.jsx)("div", {
              className: _.kL,
              children: (0, n.jsx)("div", {
                className: _.Me,
                children: Object.entries(t.Choices).map((e) => {
                  let [t, l] = e;
                  return (0, n.jsx)(
                    E,
                    {
                      choiceId: t,
                      choice: l,
                      isSelected: a.includes(t),
                      onSelectionChange: c,
                      inputType: "checkbox",
                      textInputValue: u[t],
                      onTextInputChange: d,
                    },
                    t,
                  );
                }),
              }),
            });
      }
      function S(e) {
        let { question: t, questionId: l, value: i, onValueChange: r } = e;
        return t.Selector === h.BO.SINGLE_ANSWER
          ? (0, n.jsx)(T, {
              question: t,
              questionId: l,
              value: i,
              onValueChange: r,
            })
          : (0, n.jsx)(A, {
              question: t,
              questionId: l,
              value: i,
              onValueChange: r,
            });
      }
      var I = l(260598),
        p = l(434122);
      function f(e) {
        let { question: t, questionId: l, value: i, onValueChange: r } = e,
          s = t.Selector !== h.BO.SINGLE_LINE;
        return (0, n.jsx)("div", {
          className: p.k,
          children: s
            ? (0, n.jsx)(I.f, {
                value: i,
                onChange: (e) => r(l, e),
                placeholder: "Enter your response...",
                rows: 4,
              })
            : (0, n.jsx)(c.k, {
                value: i,
                onChange: (e) => r(l, e),
                placeholder: "Enter your response...",
              }),
        });
      }
      var N = l(724368),
        g = l(992595);
      function O(e) {
        let {
            question: t,
            questionId: l,
            responses: i,
            onResponseChange: a,
          } = e,
          u = (() => {
            switch (t.QuestionType) {
              case h.SQ.TEXT_ENTRY:
                return (0, n.jsx)(f, {
                  question: t,
                  questionId: l,
                  value: i[l] ?? "",
                  onValueChange: a,
                });
              case h.SQ.MULTIPLE_CHOICE:
                return (0, n.jsx)(S, {
                  question: t,
                  questionId: l,
                  value: i[l] ?? "",
                  onValueChange: a,
                });
              case h.SQ.DESCRIPTIVE_BLOCK:
                return (0, n.jsx)("div", {});
              default:
                return null;
            }
          })();
        return null == u
          ? null
          : (0, n.jsxs)("div", {
              className: r()(g.PT, N.k),
              children: [
                (0, n.jsx)(s.E, {
                  variant: "text-lg/normal",
                  color: "text-strong",
                  children: (0, n.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.QuestionText_Unsafe ?? "",
                    },
                  }),
                }),
                u,
              ],
            });
      }
    },
    831502(e, t, l) {
      l.d(t, { q: () => n });
      let n = "https://dis.gd/appeal";
    },
    160394(e, t, l) {
      l.d(t, { A: () => n });
      let n = (0, l(945810).mj)({
        name: "2026-02-android-app-upsell-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
    },
    584584(e, t, l) {
      l.d(t, { A: () => O }), l(321073);
      var n = l(735438),
        i = l.n(n),
        r = l(17928),
        s = l(506774),
        a = l(228366),
        u = l(339048),
        o = l(830382),
        c = l(627363),
        d = l(587895),
        E = l(328153),
        h = l(287809),
        _ = l(469778),
        T = l(67480),
        A = l(652215);
      let S = "DetectedOffPlatformPremiumPerksStore",
        I = {},
        p = {},
        f = [];
      function N() {
        let e = !1;
        for (let { skuId: t, applicationId: l } of i().values(p)) {
          if (f.includes(t)) continue;
          let n = d.A.getApplication(l);
          if (null == n) {
            d.A.isFetchingApplication(l) ||
              d.A.didFetchingApplicationFail(l) ||
              c.Ay.fetchApplication(l);
            continue;
          }
          let i = T.A.get(t);
          if (null == i) {
            T.A.isFetching(t) || T.A.didFetchingSkuFail(t) || o.EX(n.id, t);
            continue;
          }
          _.A.applicationIdsFetching.has(n.id) ||
          _.A.isEntitledToSku(h.default.getCurrentUser(), t, n.id, n.id) ||
          !i.available
            ? null != I[t] && (delete I[t], (e = !0))
            : ((I[t] = { skuId: t, applicationId: l }), (e = !0));
        }
        return e;
      }
      class g extends r.Ay.Store {
        static displayName = "DetectedOffPlatformPremiumPerksStore";
        initialize() {
          this.waitFor(d.A, _.A, E.Ay, T.A, h.default), (f = s.w.get(S) ?? f);
        }
        getDetectedOffPlatformPremiumPerks() {
          return i().values(I);
        }
      }
      let O = new g(a.h, {
        LOGOUT: function () {
          (I = {}), (p = {});
        },
        SKU_FETCH_SUCCESS: N,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: N,
        ENTITLEMENT_CREATE: N,
        APPLICATION_FETCH_SUCCESS: N,
        DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function (e) {
          let { skuId: t } = e;
          if ((delete I[t], f.includes(t))) return !1;
          f.push(t), s.w.set(S, f);
        },
        RUNNING_GAMES_CHANGE: function () {
          let e = !1;
          for (let { id: t, distributor: l } of E.Ay.getRunningGames())
            if (null != t && l !== A.d3x.DISCORD)
              for (let { skuId: l, applicationId: n } of A.m_i)
                n !== t ||
                  f.includes(l) ||
                  (null == p[l] &&
                    (_.A.applicationIdsFetched.has(n) ||
                      _.A.applicationIdsFetching.has(n) ||
                      null != _.A.getForSku(l) ||
                      u.LM(n),
                    (p[l] = { skuId: l, applicationId: n }),
                    (e = !0)));
          return e && N(), e;
        },
      });
    },
    362790(e, t, l) {
      l.d(t, { A: () => E });
      var n = l(17928),
        i = l(228366),
        r = l(927813),
        s = l(935208),
        a = l(495544),
        u = l(994500);
      let o = 180 * r.A.Millis.DAY,
        c = !1;
      class d extends n.Ay.Store {
        static displayName = "PremiumPromoStore";
        initialize() {
          this.waitFor(u.A, a.default);
        }
        isEligible() {
          return c;
        }
      }
      let E = new d(i.h, {
        CONNECTION_OPEN: function () {
          return (
            c !==
            (c =
              u.A.getFriendIDs().length >= 10 &&
              s.default.extractTimestamp(a.default.getId()) < Date.now() - o)
          );
        },
      });
    },
    437959(e, t, l) {
      l.d(t, { A: () => E });
      var n = l(17928),
        i = l(506774),
        r = l(228366),
        s = l(785796);
      let a = "MaintenanceStore",
        u = null,
        o = null,
        c = null;
      class d extends n.Ay.Store {
        static displayName = "MaintenanceStore";
        initialize() {
          c = i.w.get(a);
        }
        getIncident() {
          return u;
        }
        getScheduledMaintenance() {
          let e = o?.scheduled_until ?? o?.scheduled_for;
          return null != o &&
            o.id !== c &&
            (null == e || Date.now() < new Date(e).getTime())
            ? o
            : null;
        }
      }
      let E = new d(r.h, {
        CONNECTION_OPEN: function () {
          (u = null), s.A.checkScheduledMaintenances();
        },
        STATUS_PAGE_INCIDENT: function (e) {
          u = e.incident;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
          o = e.maintenance;
        },
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
          if (null == o) return !1;
          (c = o.id), i.w.set(a, c);
        },
      });
    },
    755439(e, t, l) {
      l.d(t, { A: () => c });
      var n = l(17928),
        i = l(228366),
        r = l(613057);
      let s = null,
        a = [
          r.Hi.REDISTRIBUTABLE_INSTALL_FAILED,
          r.Hi.POST_INSTALL_FAILED,
          r.Hi.POST_INSTALL_CANCELLED,
        ],
        u = [
          r.Hi.APPLICATION_NOT_FOUND,
          r.Hi.APPLICATION_LOAD_FAILED,
          r.Hi.INTERRUPTED,
          r.Hi.DESERIALIZATION_FAILED,
        ];
      class o extends n.Ay.Store {
        static displayName = "DispatchApplicationErrorStore";
        getLastError() {
          return s;
        }
      }
      let c = new o(i.h, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
          null != s && null != s.code && a.includes(s.code) && (s = null);
        },
        DISPATCH_APPLICATION_ERROR: function (e) {
          let { error: t } = e;
          s = null != t.code && u.includes(t.code) ? null : t;
        },
      });
    },
    953822(e, t, l) {
      l.d(t, { E: () => a });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        r = l(996682),
        s = l(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: l,
            height: a,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, s.J)(t),
          E = d?.width ?? l,
          h = d?.height ?? a;
        return (0, n.jsxs)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: E,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M12.03 21.5c-.05.28-.27.5-.54.5H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61 10 10 0 1 1 18.32-3.77c-.01.12-.17.14-.22.04a3.06 3.06 0 0 0-5.3 0l-3.95 6.9c-.19.32-.3.65-.37.98Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
    117723(e, t, l) {
      l.d(t, { L: () => a });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        r = l(996682),
        s = l(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: l,
            height: a,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, s.J)(t),
          E = d?.width ?? l,
          h = d?.height ?? a;
        return (0, n.jsxs)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: E,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "m19.7.3 4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L20.58 6H15a1 1 0 1 1 0-2h5.59l-2.3-2.3A1 1 0 0 1 19.71.3Z",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
            (0, n.jsx)("path", {
              d: "M12.62 2.05c.41.06.46.61.17.92A3 3 0 0 0 15 8h.51c.28 0 .5.22.5.5V10a4 4 0 1 1-8 0V6a4 4 0 0 1 4.62-3.95Z",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
            (0, n.jsx)("path", {
              d: "M17.56 12.27a.63.63 0 0 1 .73-.35c.21.05.43.08.65.08.38 0 .72.35.6.7A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 11.56 2.27Z",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
          ],
        });
      };
    },
    848847(e, t, l) {
      l.d(t, { H: () => a });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        r = l(996682),
        s = l(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: l,
            height: a,
            color: u = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, s.J)(t),
          E = d?.width ?? l,
          h = d?.height ?? a;
        return (0, n.jsxs)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: E,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 1.82.08c.38 0 .58-.43.4-.77a6.97 6.97 0 0 1-.35-5.63c.1-.28-.14-.59-.43-.59a4 4 0 1 1 4-4c0 .3.31.53.59.43a6.99 6.99 0 0 1 5.63.35c.34.18.76-.02.77-.4a11.39 11.39 0 0 0-.08-1.82c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0Z",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm1-4a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Zm0-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
              clipRule: "evenodd",
              fill: "string" == typeof u ? u : u.css,
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=88256.4b704619a8dec7a4.js.map
