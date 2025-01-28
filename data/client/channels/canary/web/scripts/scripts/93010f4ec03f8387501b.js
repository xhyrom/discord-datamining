"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90225"],
  {
    983008: function (e) {
      e.exports = "/assets/eb3bf32fdaa61a5ecc53.svg";
    },
    478408: function (e) {
      e.exports = "/assets/03afde423124b81bde24.svg";
    },
    706302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(812236),
        l = t(989573);
      function a(e) {
        let { context: n, applicationId: t, botUserId: a } = e,
          o = (0, i.ms)({ context: n, applicationId: t, botUserId: a }),
          r = (0, l.Z)({ context: n });
        return o && null != a && !r;
      }
    },
    445392: function (e, n, t) {
      var i,
        l = t(442837),
        a = t(570140);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let r = 10 * t(70956).Z.Millis.MINUTE,
        s = { lastUsedCommandId: null, lastUsedTimeMs: null };
      class c extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            ((s.lastUsedCommandId = e.lastUsedCommandId),
            (s.lastUsedTimeMs = e.lastUsedTimeMs));
        }
        getState() {
          return s;
        }
        getLastUsedCommandId() {
          let e = Date.now();
          return null == s.lastUsedTimeMs || null == s.lastUsedCommandId
            ? null
            : (e > s.lastUsedTimeMs + r &&
                ((s.lastUsedCommandId = null), (s.lastUsedTimeMs = null)),
              s.lastUsedCommandId);
        }
      }
      o(c, "displayName", "AppLauncherLastUsedCommandStore"),
        o(c, "persistKey", "AppLauncherLastUsedCommandStore"),
        new c(a.Z, {
          APPLICATION_COMMAND_USED: function (e) {
            let { command: n } = e;
            (s.lastUsedCommandId = n.id), (s.lastUsedTimeMs = Date.now());
          },
        });
    },
    87005: function (e, n, t) {
      t.d(n, {
        f: function () {
          return C;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(243814),
        a = t(442837),
        o = t(384275),
        r = t(911969),
        s = t(10718),
        c = t(812236),
        d = t(148958),
        u = t(881998);
      t(445392);
      var m = t(783097),
        p = t(689079);
      let h = { commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT] },
        f = { placeholderCount: 0, limit: p.tn, includeFrecency: !0 };
      function C(e) {
        let {
            context: n,
            onlyActivityApps: t,
            allowCommandFetch: r,
            includeAuthorizedAppsAndFetch: C,
          } = e,
          { sectionDescriptors: v, loading: x } = s.wi({
            context: n,
            filters: h,
            options: f,
            allowFetch: r,
          });
        return {
          loading: x,
          frecentApps: (function (e) {
            let {
                sectionDescriptors: n,
                context: t,
                onlyActivityApps: r,
                includeAuthorizedAppsAndFetch: s,
              } = e,
              h = (0, a.e7)([u.Z], () => u.Z.getFetchState());
            i.useEffect(() => {
              s && h === u.M.NOT_FETCHED && o.Z.fetch();
            }, [s, h]);
            let f = (0, a.Wu)([u.Z], () => {
                var e, n;
                return s &&
                  null !==
                    (n =
                      null === (e = u.Z.getApps()) || void 0 === e
                        ? void 0
                        : e.filter((e) =>
                            e.scopes.includes(l.x.APPLICATIONS_COMMANDS),
                          )) &&
                  void 0 !== n
                  ? n
                  : [];
              }),
              C = n.filter(
                (e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN,
              ),
              v = (0, d.h)(C, f);
            return i.useMemo(
              () =>
                r
                  ? v.filter(
                      (e) =>
                        null != e.application &&
                        (0, m.ye)(e.application) &&
                        null != (0, c.Xu)(t, e.id),
                    )
                  : v,
              [v, t, r],
            );
          })({
            sectionDescriptors: v,
            context: n,
            onlyActivityApps: t,
            includeAuthorizedAppsAndFetch: C,
          }),
        };
      }
    },
    219066: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(724458),
        t(47120);
      var i = t(192379),
        l = t(392711),
        a = t.n(l),
        o = t(911969),
        r = t(254711),
        s = t(213459),
        c = t(10718),
        d = t(148958),
        u = t(689079);
      function m(e) {
        var n;
        let { context: t } = e,
          l = "channel" === t.type ? t.channel : void 0,
          m = (0, s.LD)(null == l ? void 0 : l.guild_id, !0),
          { commandsByActiveSection: p, loading: h } = c.wi({
            context: t,
            filters: { commandTypes: [o.yU.CHAT, o.yU.PRIMARY_ENTRY_POINT] },
            options: { placeholderCount: 0, limit: u.tn, includeFrecency: !0 },
            allowFetch: !0,
          }),
          f = i.useMemo(
            () =>
              p.reduce((e, n) => {
                let { section: t, data: i } = n;
                return i.length > 0 && e.add(t.id), e;
              }, new Set()),
            [p],
          ),
          C = i.useMemo(() => {
            var e, n;
            return Object.values(
              null !==
                (n =
                  null === (e = m.result) || void 0 === e
                    ? void 0
                    : e.sections) && void 0 !== n
                ? n
                : {},
            )
              .map((e) => {
                let { descriptor: n } = e;
                return n;
              })
              .filter((e) => !(e.id in r.Tm) && f.has(e.id));
          }, [
            null === (n = m.result) || void 0 === n ? void 0 : n.sections,
            f,
          ]),
          v = (0, d.h)(C),
          x = i.useMemo(
            () =>
              a()
                .compact(
                  v.map((e) => {
                    let { application: n } = e;
                    return n;
                  }),
                )
                .map((e) => ({ application: e })),
            [v],
          );
        return {
          appsInThisServer: x,
          isLoading: m.fetchState.fetching || h.current,
        };
      }
    },
    106066: function (e, n, t) {
      t.d(n, {
        s: function () {
          return a;
        },
      });
      var i = t(695346),
        l = t(424602);
      function a(e) {
        let n = i.Sb.useSetting();
        return (
          l.aq.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .clickOnHomeActivityOpensAppDetail || n
        );
      }
    },
    496158: function (e, n, t) {
      t.d(n, {
        D: function () {
          return a;
        },
      });
      var i = t(192379),
        l = t(430824);
      function a(e) {
        return i.useMemo(() => {
          var n;
          return "contextless" === (n = e).type
            ? { channel: void 0, guild: void 0 }
            : { channel: n.channel, guild: l.Z.getGuild(n.channel.guild_id) };
        }, [e]);
      }
    },
    346683: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return a;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(542094);
      function a(e) {
        let [n, t] = i.useState(e);
        return (
          i.useLayoutEffect(() => {
            if (e === l.JS.LEAVE) {
              let n = setTimeout(() => t(e), 100);
              return () => clearTimeout(n);
            }
            t(e);
          }, [e]),
          n
        );
      }
    },
    676161: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(724458);
      var i = t(192379),
        l = t(700089),
        a = t(654455),
        o = t(496158);
      function r(e) {
        let { context: n, commands: t, limit: r = t.length } = e,
          s = (0, o.D)(n),
          c = (0, l.R)(s),
          d = i.useMemo(() => t.reduce((e, n) => ((e[n.id] = n), e), {}), [t]);
        return i.useMemo(
          () =>
            c
              .map((e) => d[e])
              .filter((e) => null != e)
              .sort((e, n) => {
                let t = a.ZP.getScoreWithoutLoadingLatest(s, e);
                return a.ZP.getScoreWithoutLoadingLatest(s, n) - t;
              })
              .slice(0, r),
          [c, d, s, r],
        );
      }
    },
    160973: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = t(442837),
        l = t(595519),
        a = t(374065),
        o = t(761122),
        r = t(542094),
        s = t(973616),
        c = t(496675),
        d = t(358085),
        u = t(231338),
        m = t(388032);
      function p(e) {
        let n,
          { context: t, application: p, activityAction: h } = e,
          f = "channel" === t.type ? t.channel : void 0,
          C = (0, i.e7)([c.Z], () => c.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, f)),
          v = (0, a.KF)(null == f ? void 0 : f.id),
          x = !1;
        switch (h) {
          case r.JS.LEAVE:
            x = !1;
            break;
          case r.JS.START:
            null == f
              ? (x = !1)
              : (null == f ? void 0 : f.isGuildVoice())
                ? v !== a.jy.CAN_LAUNCH && (x = !0)
                : !(0, l.WS)(f) && (x = !0);
            break;
          case r.JS.JOIN:
            (null == f ? void 0 : f.isGuildVoice())
              ? (x = !C)
              : !(0, l.WS)(f) && (x = !0);
        }
        if (h !== r.JS.LEAVE) {
          let e =
              p instanceof s.ZP
                ? p.embeddedActivityConfig
                : p.embedded_activity_config,
            t = (0, o.Z)((0, d.getOS)());
          null == e || e.supported_platforms.includes(t)
            ? (null == f ? void 0 : f.isThread()) &&
              ((x = !0), (n = m.intl.string(m.t.ddSR3t)))
            : ((x = !1), (n = m.intl.string(m.t.z2YTgI)));
        }
        return (
          x && null == n && (n = m.intl.string(m.t.f41E1t)),
          { disabled: x, reason: n }
        );
      }
    },
    660090: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(674588),
        a = t(70956),
        o = t(314734);
      function r(e) {
        let { sectionId: n, commandsByActiveSection: t } = e,
          [r, s] = i.useState(o.bS.ALPHABETICAL),
          c = i.useMemo(() => {
            var e, i;
            return null !==
              (i =
                null === (e = t.find((e) => e.section.id === n)) || void 0 === e
                  ? void 0
                  : e.data) && void 0 !== i
              ? i
              : [];
          }, [t, n]),
          { popularSortedCommands: d, canSort: u } = (function (e) {
            let { alphabeticalSortedCommands: n } = e;
            return i.useMemo(() => {
              if (n.length <= 1)
                return { popularSortedCommands: n, canSort: !1 };
              let e = !1,
                t = n.map(
                  (n, t) => (
                    (e = e || null != n.global_popularity_rank),
                    { command: n, alphabeticalSortIndex: t }
                  ),
                );
              return e
                ? (t.sort((e, n) => {
                    let t = e.command.global_popularity_rank,
                      i = n.command.global_popularity_rank;
                    if (null != t && null != i) {
                      if (t !== i) return t - i;
                    } else if (null != t) return -1;
                    else if (null != i) return 1;
                    return e.alphabeticalSortIndex - n.alphabeticalSortIndex;
                  }),
                  {
                    popularSortedCommands: t.map((e) => {
                      let { command: n } = e;
                      return n;
                    }),
                    canSort: !0,
                  })
                : { popularSortedCommands: n, canSort: !1 };
            }, [n]);
          })({ alphabeticalSortedCommands: c });
        i.useEffect(() => {
          l.i6(n, { dontRefetchMs: a.Z.Millis.DAY });
        }, [n]),
          i.useLayoutEffect(() => {
            if (!!u) s(o.bS.POPULAR);
          }, [u]);
        let m = c;
        switch (r) {
          case o.bS.POPULAR:
            m = d;
            break;
          case o.bS.ALPHABETICAL:
            m = c;
        }
        return { sortOrder: r, setSortOrder: s, commands: m, canSort: u };
      }
    },
    392370: function (e, n, t) {
      t.d(n, {
        Q2: function () {
          return y;
        },
        pe: function () {
          return P;
        },
      }),
        t(47120),
        t(653041),
        t(536091);
      var i = t(192379),
        l = t(392711),
        a = t.n(l),
        o = t(373793),
        r = t(288385),
        s = t(442837),
        c = t(911969),
        d = t(127255),
        u = t(654455),
        m = t(213459),
        p = t(807169),
        h = t(104793),
        f = t(674588),
        C = t(809547),
        v = t(822245),
        x = t(631827),
        _ = t(827498),
        N = t(783097),
        A = t(689079),
        I = t(665692);
      function E(e, n) {
        let t = v.Z.getScoreWithoutLoadingLatest(e.id);
        return v.Z.getScoreWithoutLoadingLatest(n.id) - t;
      }
      function g(e, n) {
        let t = (0, N.$d)(e),
          i = (0, N.$d)(n);
        return (0, m.un)(t, i);
      }
      function b(e, n) {
        return (0, m.un)(e.displayName, n.displayName);
      }
      function P(e) {
        let {
          context: n,
          query: t,
          commandLimit: l,
          applicationLimit: o,
          searchesCommands: r = !0,
          searchesBots: s = !0,
          searchesActivities: f = !0,
        } = e;
        t.startsWith("".concat(I.GI)) && (t = t.substring(1));
        let {
            commands: C,
            commandSectionMap: v,
            loading: _,
          } = (function (e) {
            var n, t;
            let { context: l, includeBuiltIn: a = !0, allowFetch: o = !0 } = e,
              r = (0, m.em)(l, !0, o),
              s = (0, m.PL)(!0, o);
            return i.useMemo(() => {
              var e, n, t, i, o;
              let c =
                  null !==
                    (t =
                      null === (e = r.result) || void 0 === e
                        ? void 0
                        : e.sections) && void 0 !== t
                    ? t
                    : {},
                d =
                  null !==
                    (i =
                      null === (n = s.result) || void 0 === n
                        ? void 0
                        : n.sections) && void 0 !== i
                    ? i
                    : {},
                u = [
                  ...Object.keys(c),
                  ...Object.keys(d).filter((e) => !(e in c)),
                ];
              a && u.push(A.bi.BUILT_IN);
              let p = [],
                h = {};
              for (let e of u) {
                let n = (0, m.If)(l, e),
                  t = null !== (o = n.sectionCommands) && void 0 !== o ? o : [];
                p.push(...t),
                  t.forEach((e) => {
                    null != n.descriptor && (h[e.id] = n.descriptor);
                  });
              }
              return {
                commands: p,
                commandSectionMap: h,
                loading:
                  !0 === r.fetchState.fetching || !0 === s.fetchState.fetching,
              };
            }, [
              l,
              a,
              r.fetchState.fetching,
              null === (n = r.result) || void 0 === n ? void 0 : n.sections,
              s.fetchState.fetching,
              null === (t = s.result) || void 0 === t ? void 0 : t.sections,
            ]);
          })({ context: n, includeBuiltIn: !0 }),
          { apps: P } = (function (e) {
            let {
                context: n,
                onlyWithCommands: t,
                includeBuiltIn: l,
                allowFetch: a = !0,
                includeEmbeddedApps: o,
                includeNonEmbeddedApps: r,
              } = e,
              s = "channel" === n.type ? n.channel : void 0,
              d = (0, p.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions,
              u = (0, m.em)(n, d, a),
              h = (0, m.PL)(d, a),
              f = i.useCallback(
                (e) => {
                  let n = e.descriptor.application;
                  return (
                    null != n &&
                    (!!(o && (0, N.ye)(n)) ||
                      (null != n &&
                        r &&
                        !(0, N.ye)(n) &&
                        (!t || Object.keys(e.commands).length > 0)))
                  );
                },
                [o, r, t],
              ),
              C = [],
              v = new Set();
            if (null != u.result)
              for (let e of Object.values(u.result.sections)) {
                let n = e.descriptor.application;
                null != n && f(e) && (C.push(n), v.add(n.id));
              }
            if (null != h.result)
              for (let e of Object.values(h.result.sections)) {
                let n = e.descriptor.application;
                null != n && !v.has(n.id) && f(e) && C.push(n);
              }
            return (
              r && l && C.push(N.Wx),
              {
                apps: C,
                loading:
                  (null == u ? void 0 : u.fetchState.fetching) === !0 ||
                  (null == h ? void 0 : h.fetchState.fetching) === !0,
              }
            );
          })({
            context: n,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: f,
            includeNonEmbeddedApps: s,
          }),
          y = (0, d.Z)({
            guildId: "channel" === n.type ? n.channel.guild_id : null,
          }),
          S = i.useMemo(() => {
            var e;
            if (!r) return [];
            return (0, x.N)(C, {
              limit: l,
              filterPredicates: [
                (function (e) {
                  let n = (0, p.k)("channel" === e.type ? e.channel : void 0, [
                      c.yU.CHAT,
                    ]),
                    t = {};
                  return (i) => {
                    let {
                      context: l,
                      userId: a,
                      roleIds: o,
                      isImpersonating: r,
                    } = n;
                    if (!(i.applicationId in t)) {
                      let {
                          descriptor: n,
                          isGuildInstalled: s,
                          isUserInstalled: c,
                        } = (0, m.If)(e, i.applicationId),
                        d =
                          (null == l ? void 0 : l.guild_id) != null
                            ? h.ML(
                                null == n ? void 0 : n.permissions,
                                l.guild_id,
                                a,
                                o,
                                r,
                              )
                            : null,
                        u =
                          (null == l ? void 0 : l.guild_id) != null
                            ? h.ZJ(
                                null == n ? void 0 : n.permissions,
                                l,
                                l.guild_id,
                              )
                            : null;
                      t[i.applicationId] = {
                        descriptor: n,
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: u,
                        isGuildInstalled: s,
                        isUserInstalled: c,
                      };
                    }
                    let {
                      descriptor: s,
                      applicationAllowedForChannel: c,
                      applicationAllowedForUser: d,
                      isGuildInstalled: u,
                      isUserInstalled: p,
                    } = t[i.applicationId];
                    return (
                      h.Ft(i, n, {
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: c,
                        commandBotId: null == s ? void 0 : s.botId,
                        isGuildInstalled: u,
                        isUserInstalled: p,
                      }) === h.mF.ALLOWED
                    );
                  };
                })(n),
              ],
              bucketPredicates: [
                (function (e) {
                  return (n) => {
                    let t = n.untranslatedName,
                      i = n.displayName;
                    return t.startsWith(e) || i.startsWith(e);
                  };
                })((e = t)),
                (function (e) {
                  let n = null == e ? void 0 : e.split(" "),
                    t = n[0],
                    i = n.slice(1).join(" ");
                  return (e) => {
                    let n = e.untranslatedName,
                      l = e.displayName;
                    return (
                      !!(
                        (n.startsWith(t) &&
                          n.split(" ").slice(1).join(" ").startsWith(i)) ||
                        (l.startsWith(t) &&
                          l.split(" ").slice(1).join(" ").startsWith(i))
                      ) || !1
                    );
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    let t = n.untranslatedName,
                      i = n.displayName;
                    return t.includes(e) || i.includes(e);
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    var t;
                    for (let { name: i, serverLocalizedName: l } of null !==
                      (t = n.options) && void 0 !== t
                      ? t
                      : [])
                      if (
                        i.startsWith(e) ||
                        ""
                          .concat(n.untranslatedName, " ")
                          .concat(i)
                          .startsWith(e) ||
                        (null != n.displayName &&
                          ""
                            .concat(n.displayName, " ")
                            .concat(i)
                            .startsWith(e)) ||
                        (null != l &&
                          (l.startsWith(e) ||
                            ""
                              .concat(n.untranslatedName, " ")
                              .concat(l)
                              .startsWith(e) ||
                            (null != n.displayName &&
                              ""
                                .concat(n.displayName, " ")
                                .concat(l)
                                .startsWith(e))))
                      )
                        return !0;
                    return !1;
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    var t;
                    for (let { name: i, serverLocalizedName: l } of null !==
                      (t = n.options) && void 0 !== t
                      ? t
                      : [])
                      if (i.includes(e) || (null == l ? void 0 : l.includes(e)))
                        return !0;
                    return !1;
                  };
                })(e),
              ],
              sortComparers: [
                (function (e) {
                  return (n, t) => {
                    let i = u.ZP.getScoreWithoutLoadingLatest(e, n);
                    return u.ZP.getScoreWithoutLoadingLatest(e, t) - i;
                  };
                })({ channel: "channel" === n.type ? n.channel : void 0 }),
                b,
              ],
            });
          }, [r, C, l, n, t]),
          j = i.useMemo(() => {
            if (0 === S.length) return [];
            let e = new Map(P.map((e) => [e.id, e]));
            return a().compact(
              S.map((n) => {
                var t;
                let i = e.get(n.applicationId);
                if (null == i) return null;
                let l = null !== (t = v[n.id]) && void 0 !== t ? t : null;
                return { command: n, application: i, section: l };
              }),
            );
          }, [P, S, v]),
          T = i.useMemo(() => {
            var e;
            let i = [];
            if (f) {
              let e = new Set(
                P.map((e) => {
                  let { id: n } = e;
                  return n;
                }),
              );
              i.push(...P),
                i.push(
                  ...y
                    .filter((n) => {
                      let {
                        application: { id: t },
                      } = n;
                      return !e.has(t);
                    })
                    .map((e) => {
                      let { application: n } = e;
                      return n;
                    }),
                );
            } else s && (i = P);
            return (0, x.N)(i, {
              limit: o,
              filterPredicates: [
                (function (e) {
                  let n = (0, p.k)("channel" === e.type ? e.channel : void 0, [
                    c.yU.CHAT,
                    c.yU.PRIMARY_ENTRY_POINT,
                  ]);
                  return (t) => {
                    let {
                        context: i,
                        userId: l,
                        roleIds: a,
                        isImpersonating: o,
                      } = n,
                      {
                        descriptor: r,
                        sectionCommands: s,
                        isGuildInstalled: c,
                        isUserInstalled: d,
                      } = (0, m.If)(e, t.id),
                      u =
                        (null == i ? void 0 : i.guild_id) != null
                          ? h.ML(
                              null == r ? void 0 : r.permissions,
                              i.guild_id,
                              l,
                              a,
                              o,
                            )
                          : null,
                      p =
                        (null == i ? void 0 : i.guild_id) != null
                          ? h.ZJ(
                              null == r ? void 0 : r.permissions,
                              i,
                              i.guild_id,
                            )
                          : null;
                    return (
                      null == s ||
                      !(s.length > 0) ||
                      s.some(
                        (e) =>
                          h.Ft(e, n, {
                            applicationAllowedForUser: u,
                            applicationAllowedForChannel: p,
                            commandBotId: null == r ? void 0 : r.botId,
                            isGuildInstalled: c,
                            isUserInstalled: d,
                          }) === h.mF.ALLOWED,
                      )
                    );
                  };
                })(n),
              ],
              bucketPredicates: [
                (function (e) {
                  return (n) =>
                    (0, N.$d)(n)
                      .toLocaleLowerCase()
                      .startsWith(e.toLocaleLowerCase());
                })((e = t)),
                (function (e) {
                  return (n) =>
                    (0, N.$d)(n)
                      .toLocaleLowerCase()
                      .includes(e.toLocaleLowerCase());
                })(e),
                (function (e) {
                  return (n) => {
                    var t, i;
                    let l =
                      null === (t = (0, N.jD)(n)) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase();
                    return (
                      null !==
                        (i =
                          null == l
                            ? void 0
                            : l.startsWith(e.toLocaleLowerCase())) &&
                      void 0 !== i &&
                      i
                    );
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    var t, i;
                    let l =
                      null === (t = (0, N.jD)(n)) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase();
                    return (
                      null !==
                        (i =
                          null == l
                            ? void 0
                            : l.includes(e.toLocaleLowerCase())) &&
                      void 0 !== i &&
                      i
                    );
                  };
                })(e),
              ],
              sortComparers: [E, g],
            });
          }, [s, f, o, n, t, P, y]),
          L = j.length > 0,
          R = T.length > 0;
        return {
          commandResults: j,
          hasCommandResults: L,
          applicationResults: T,
          hasApplicationResults: R,
          isEmptyState: !L && !R,
          loading: _ && r,
        };
      }
      function y(e) {
        let {
          context: n,
          query: t,
          fetches: l = !0,
          pageLimit: a = 1 / 0,
          entrypoint: c,
        } = e;
        t.startsWith("".concat(I.GI)) && (t = t.substring(1));
        let d = c === _._b.VOICE,
          u = "channel" === n.type ? n.channel.guild_id : void 0,
          [m, p] = i.useState(1),
          h = i.useRef(m);
        h.current = m;
        let { fetchState: v, totalPages: x } = (0, s.cj)(
            [C.Z],
            () => {
              var e, n;
              return {
                fetchState: C.Z.getFetchState({
                  query: t,
                  guildId: u,
                  page: m,
                  integrationType: o.Y.USER_INSTALL,
                  minUserInstallCommandCount: 1,
                  excludeAppsWithCustomInstallUrl: !0,
                  excludeNonEmbeddedApps: d,
                  excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                  source: r.F.APP_LAUNCHER,
                }),
                totalPages:
                  null !==
                    (n =
                      null ===
                        (e = C.Z.getSearchResults({
                          query: t,
                          guildId: u,
                          page: m,
                          integrationType: o.Y.USER_INSTALL,
                          minUserInstallCommandCount: 1,
                          excludeAppsWithCustomInstallUrl: !0,
                          excludeNonEmbeddedApps: d,
                          excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:
                            !0,
                          source: r.F.APP_LAUNCHER,
                        })) || void 0 === e
                        ? void 0
                        : e.totalPages) && void 0 !== n
                    ? n
                    : 0,
              };
            },
            [t, u, m, d],
          ),
          N = i.useMemo(
            () =>
              Array.from(
                { length: v === C.M.FETCHED || v === C.M.ERROR ? m : m - 1 },
                (e, n) => {
                  var i, l;
                  return null !==
                    (l =
                      null ===
                        (i = C.Z.getSearchResults({
                          query: t,
                          guildId: u,
                          page: n + 1,
                          integrationType: o.Y.USER_INSTALL,
                          minUserInstallCommandCount: 1,
                          excludeAppsWithCustomInstallUrl: !0,
                          excludeNonEmbeddedApps: d,
                          excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:
                            !0,
                          source: r.F.APP_LAUNCHER,
                        })) || void 0 === i
                        ? void 0
                        : i.results) && void 0 !== l
                    ? l
                    : [];
                },
              ),
            [v, u, t, m, d],
          ),
          A = i.useCallback(() => {
            let e = N.length;
            v === C.M.FETCHED &&
              e === h.current &&
              e > 0 &&
              e < x &&
              e < a &&
              N[e - 1].length > 0 &&
              (h.current++, p((e) => e + 1));
          }, [v, a, N, x]),
          E = i.useCallback(
            (e) => {
              let { query: n, page: t, guildId: i } = e;
              f.yC({
                query: n,
                guildId: i,
                options: {
                  page: t,
                  integrationType: o.Y.USER_INSTALL,
                  minUserInstallCommandCount: 1,
                  excludeAppsWithCustomInstallUrl: !0,
                  excludeNonEmbeddedApps: d,
                  excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                  source: r.F.APP_LAUNCHER,
                },
              });
            },
            [d],
          );
        return (
          i.useEffect(() => {
            if (!!l) E({ query: t, page: m, guildId: u });
          }, [t, u, E, m, l]),
          i.useEffect(() => {
            p(1);
          }, [u, t]),
          { fetchState: v, applicationResults: N.flat(), fetchNextPage: A }
        );
      }
    },
    695676: function (e, n, t) {
      t.d(n, {
        gc: function () {
          return l;
        },
        hH: function () {
          return r;
        },
        uX: function () {
          return o;
        },
      });
      var i,
        l,
        a = t(192379);
      ((i = l || (l = {})).HOME = "home"),
        (i.LIST = "list"),
        (i.APPLICATION = "application");
      let o = a.createContext({
        history: [],
        discard: {},
        currentView: void 0,
        pushHistory: () => {},
        goBack: () => {},
        getMostRecentHistoryItemByType: () => void 0,
        isSlideReady: !1,
        setSlideReady: () => {},
      });
      function r() {
        return a.useContext(o);
      }
    },
    421591: function (e, n, t) {
      t(47120), t(852437);
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        o = t(100527),
        r = t(367907),
        s = t(906732),
        c = t(541099),
        d = t(695676),
        u = t(173790),
        m = t(361917),
        p = t(684256),
        h = t(314734),
        f = t(981631),
        C = t(814894);
      let v = { width: h.Gy, height: h.lv },
        x = { height: h.lv };
      function _(e) {
        let { initHistory: n, children: t } = e,
          [a, o] = l.useState(null != n ? n : [{ type: d.gc.HOME }]),
          [r, s] = l.useState({}),
          c = a[a.length - 1],
          [u, m] = l.useState(!1),
          p = l.useCallback((e) => {
            o((n) => [...n, e]);
          }, []),
          h = l.useCallback(() => {
            let e = null;
            o((n) =>
              n.length <= 1 ? n : ((e = n[n.length - 1]), n.slice(0, -1)),
            ),
              s((n) => (null == e ? n : { ...n, [e.type]: e }));
          }, []),
          f = l.useCallback(
            (e) => {
              var n;
              return null !== (n = a.findLast((n) => n.type === e)) &&
                void 0 !== n
                ? n
                : r[e];
            },
            [a, r],
          );
        return (0, i.jsx)(d.uX.Provider, {
          value: {
            history: a,
            discard: r,
            currentView: c,
            pushHistory: p,
            goBack: h,
            getMostRecentHistoryItemByType: f,
            isSlideReady: u,
            setSlideReady: m,
          },
          children: t,
        });
      }
      function N(e) {
        let { context: n, entrypoint: t } = e,
          [o, r] = l.useState(""),
          { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [n, t] = l.useState(null),
              [i, a] = l.useState(!1),
              o = l.useRef(0);
            return (
              l.useEffect(() => {
                null == n || n.scrollTo(0, 0);
              }, [n, e]),
              l.useEffect(() => {
                if (null != n)
                  return (
                    n.scrollTo(0, o.current),
                    n.addEventListener("scroll", e),
                    () => {
                      n.removeEventListener("scroll", e, !1);
                    }
                  );
                function e() {
                  if (null != n)
                    (o.current = n.scrollTop),
                      a(
                        n.scrollHeight - (n.scrollTop + n.clientHeight) <
                          0.5 * h.K7,
                      );
                }
              }, [n]),
              { setScroller: t, isCloseToBottom: i }
            );
          })(o),
          {
            currentView: f,
            getMostRecentHistoryItemByType: v,
            setSlideReady: _,
          } = (0, d.hH)();
        l.useEffect(() => {
          _(!1);
        }, [null == f ? void 0 : f.type, _]);
        let N = l.useCallback(() => {
          _(!0);
        }, [_]);
        if (null == f) return null;
        let A = v(d.gc.LIST),
          I = v(d.gc.APPLICATION);
        return (0, i.jsxs)(a.Slides, {
          activeSlide: f.type,
          width: h.Gy,
          onSlideReady: N,
          children: [
            (0, i.jsx)(a.Slide, {
              id: d.gc.HOME,
              children: (0, i.jsx)("div", {
                className: C.slideContent,
                style: x,
                children: (0, i.jsx)(m.Z, {
                  isScrollCloseToBottom: c,
                  setScroller: s,
                  context: n,
                  entrypoint: t,
                  searchQuery: o,
                  setSearchQuery: r,
                }),
              }),
            }),
            (0, i.jsx)(a.Slide, {
              id: d.gc.LIST,
              children: (0, i.jsx)("div", {
                className: C.slideContent,
                style: x,
                children:
                  null != A &&
                  (0, i.jsx)(p.Z, {
                    context: n,
                    entrypoint: t,
                    title: A.title,
                    look: A.look,
                    items: A.items,
                    sectionName: A.sectionName,
                    sectionOverallPosition: A.sectionOverallPosition,
                  }),
              }),
            }),
            (0, i.jsx)(a.Slide, {
              id: d.gc.APPLICATION,
              children: (0, i.jsx)("div", {
                className: C.slideContent,
                style: x,
                children:
                  null != I &&
                  (0, i.jsx)(u.Z, {
                    context: n,
                    application: I.application,
                    sectionName: I.sectionName,
                  }),
              }),
            }),
          ],
        });
      }
      n.Z = l.memo(
        l.forwardRef(function (e, n) {
          let { context: t, entrypoint: a, initHistory: d } = e,
            { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_LAUNCHER);
          return (
            l.useEffect(() => {
              (0, r.yw)(f.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                source: a,
                location: "app_launcher",
              });
            }, [a]),
            l.useEffect(() => {
              let e = Date.now();
              return () => {
                (0, r.yw)(f.rMx.APP_LAUNCHER_CLOSED, {
                  reason: c.Z.closeReason(),
                  time_spent: Date.now() - e,
                  source: a,
                });
              };
            }, [a]),
            (0, i.jsx)("div", {
              className: C.drawerSizingWrapper,
              ref: n,
              style: v,
              children: (0, i.jsx)("div", {
                className: C.contentWrapper,
                children: (0, i.jsx)(s.Gt, {
                  value: u,
                  children: (0, i.jsx)(_, {
                    initHistory: d,
                    children: (0, i.jsx)(N, { context: t, entrypoint: a }),
                  }),
                }),
              }),
            })
          );
        }),
      );
    },
    176412: function (e, n, t) {
      t.d(n, {
        Bm: function () {
          return S;
        },
        P7: function () {
          return y;
        },
        ae: function () {
          return P;
        },
      });
      var i = t(192379),
        l = t(392711),
        a = t.n(l),
        o = t(442837),
        r = t(25209),
        s = t(481060),
        c = t(2052),
        d = t(542094),
        u = t(513202),
        m = t(367907),
        p = t(213459),
        h = t(895924),
        f = t(691424),
        C = t(428595),
        v = t(364458),
        x = t(499254),
        _ = t(541099),
        N = t(827498),
        A = t(346683),
        I = t(981631),
        E = t(388032);
      let g = {
          ...C.Z.RULES.commandMention,
          parse: (e, n, t) => ({
            content: C.Z.RULES.commandMention.parse(e, n, t).content,
          }),
        },
        b = a().pick(
          (0, v.Z)([
            C.Z.RULES,
            { commandMention: g },
            (0, f.Z)({ enableBuildOverrides: !1, enableEmojiClick: !1 }),
          ]),
          [
            "commandMention",
            "customEmoji",
            "em",
            "emoji",
            "emoticon",
            "highlight",
            "inlineCode",
            "looseEm",
            "s",
            "strong",
            "text",
            "timestamp",
            "u",
            "spoiler",
          ],
        ),
        P = r.w4(b);
      function y(e) {
        let {
            context: n,
            application: t,
            location: l,
            sectionName: a,
            commandName: r,
            autoDismissOnClick: f = !0,
            launchingComponentId: C,
            submitting: v = !1,
            fetchesApplication: g = !0,
          } = e,
          b = (0, c.O)(),
          P = (0, d.Qv)({
            context: n,
            applicationId: t.id,
            fetchesApplication: g,
          }),
          y = (0, A.Q)(P),
          S = (0, o.e7)([_.Z], () => _.Z.entrypoint()),
          j = i.useMemo(() => {
            var e, i, l;
            if ("channel" !== n.type)
              return null !==
                (l = null === (e = t.bot) || void 0 === e ? void 0 : e.id) &&
                void 0 !== l
                ? l
                : null === (i = (0, p.If)(n, t.id).descriptor) || void 0 === i
                  ? void 0
                  : i.botId;
          }, [n, t.id, t.bot]),
          T = (0, d.w1)({
            applicationId: t.id,
            botUserIdForAppDM: j,
            embeddedActivitiesManager: u.Z,
            context: n,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
              let { applicationId: n } = e;
              f && x.yT(N.ti.ACTIVITY),
                (0, m.yw)(I.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                  location: l,
                  application_id: n,
                  section_name: a,
                  action: y,
                  source: S,
                });
            },
            launchingComponentId: C,
            commandOrigin: h.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: S,
            fetchesApplication: g,
          }),
          L = s.ButtonColors.BRAND,
          R = null != r ? r : E.intl.string(E.t.zKX8Nj);
        return (
          y === d.JS.JOIN
            ? ((L = s.ButtonColors.GREEN), (R = E.intl.string(E.t.d9PsMj)))
            : y === d.JS.LEAVE &&
              !v &&
              ((L = s.ButtonColors.RED), (R = E.intl.string(E.t["Hi1/aW"]))),
          {
            onActivityItemSelected: T,
            activityAction: y,
            buttonColor: L,
            buttonText: R,
          }
        );
      }
      function S(e, n) {
        let t = _.Z.entrypoint(),
          a = i.useMemo(
            () =>
              (0, l.debounce)(
                (e, n) => {
                  (0, m.yw)(I.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                    type: e,
                    source: n,
                  });
                },
                400,
                { leading: !1, trailing: !0 },
              ),
            [],
          );
        i.useEffect(() => {
          null != e && a(e, t);
        }, [e, n, t, a]);
      }
    },
    570949: function (e, n, t) {
      t.d(n, {
        P: function () {
          return h;
        },
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(481060),
        a = t(239091),
        o = t(299206),
        r = t(276022),
        s = t(695346),
        c = t(914010),
        d = t(499254),
        u = t(827498),
        m = t(314734),
        p = t(388032);
      function h(e) {
        var n;
        let { application: t } = e,
          i = null !== (n = c.Z.getGuildId()) && void 0 !== n ? n : void 0;
        return (0, r.Z)({
          application: t,
          guildId: i,
          onItemClick: () => {
            (0, l.closeModal)(m.e9), (0, d.yT)(u.ti.DISMISSED);
          },
        });
      }
      function f(e) {
        let { application: n, onSelect: t } = e,
          r = s.Sb.useSetting(),
          c = (0, o.Z)({ id: n.id, label: p.intl.string(p.t["+NP/b2"]) }),
          d = h({ application: n });
        return (0, i.jsxs)(l.Menu, {
          navId: "activity-shelf-item-context",
          onClose: a.Zy,
          "aria-label": p.intl.string(p.t.WkcHT0),
          onSelect: t,
          children: [
            null != d &&
              (0, i.jsxs)(
                l.MenuGroup,
                { children: [...d] },
                "manage-app-actions",
              ),
            r && (0, i.jsx)(l.MenuGroup, { children: c }, "developer-actions"),
          ],
        });
      }
    },
    98880: function (e, n, t) {
      t.d(n, {
        U4: function () {
          return i;
        },
        cG: function () {
          return J;
        },
        kA: function () {
          return Q;
        },
        qR: function () {
          return K;
        },
      }),
        t(47120),
        t(411104);
      var i,
        l,
        a = t(200651),
        o = t(192379),
        r = t(120356),
        s = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(239091),
        m = t(110924),
        p = t(607070),
        h = t(115130),
        f = t(317381),
        C = t(361213),
        v = t(542094),
        x = t(778569),
        _ = t(182906),
        N = t(367907),
        A = t(220082),
        I = t(70097),
        E = t(973616),
        g = t(695103),
        b = t(880448),
        P = t(768581),
        y = t(541099),
        S = t(783097),
        j = t(695676),
        T = t(176412),
        L = t(226026),
        R = t(570949),
        M = t(753972),
        Z = t(981631),
        k = t(217702),
        O = t(388032),
        U = t(330962),
        B = t(413097),
        D = t(969728);
      function w(e) {
        var n;
        let {
            application: t,
            look: i = "large_banner",
            onClick: l,
            imageStyle: o,
            enableVideoBanner: r = !0,
            children: s,
            sectionName: c,
            resultsPosition: d,
            sectionOverallPosition: u,
            tracksImpression: p = !0,
            disabled: h = !1,
            overrideImageUrl: f,
            showsPromoted: C,
          } = e,
          v = null !== (n = (0, m.Z)(h)) && void 0 !== n ? n : h;
        return (0, a.jsx)(H, {
          application: t,
          onClick: l,
          sectionName: c,
          resultsPosition: d,
          disabled: h,
          tracksImpression: p,
          look: i,
          sectionOverallPosition: u,
          children:
            "icon" === i
              ? (0, a.jsx)(V, { application: t, imageStyle: o, children: s })
              : (0, a.jsx)(W, {
                  application: t,
                  look: i,
                  imageStyle: o,
                  enableVideoBanner: r,
                  disableBannerFadeIn: v !== h,
                  overrideImageUrl: f,
                  showsPromoted: C,
                  children: s,
                }),
        });
      }
      function H(e) {
        let {
            application: n,
            onClick: t,
            children: i,
            sectionName: l,
            resultsPosition: r,
            sectionOverallPosition: c,
            tracksImpression: m,
            disabled: p,
            containerStyle: h,
            look: f,
          } = e,
          C = o.useCallback(
            (e) => {
              if ((0, S.BQ)(n)) {
                let t = n instanceof E.ZP ? n : E.ZP.createFromServer(n);
                (0, u.vq)(e, (e) => (0, a.jsx)(R.Z, { application: t, ...e }));
              }
            },
            [n],
          ),
          { name: v, description: x } = o.useMemo(
            () => (0, S.sl)(n, { fakeAppIconURL: B }),
            [n],
          ),
          { trackItemImpressionRef: _ } = (0, L.Z)({
            applicationId: n.id,
            sectionName: l,
            sectionPosition: r,
            sectionOverallPosition: c,
          }),
          N = o.useMemo(() => {
            let e = p ? U.containerDisabled : U.container;
            return s()(
              e,
              {
                [U.containerBorderRadius]: "row" !== f,
                [U.rowContainer]: "row" === f,
                [U.iconCard]: "icon" === f,
              },
              h,
            );
          }, [h, p, f]);
        return p
          ? (0, a.jsx)("div", {
              ref: m ? _ : void 0,
              className: N,
              children: i,
            })
          : (0, a.jsx)(d.Clickable, {
              innerRef: m ? _ : void 0,
              className: N,
              onClick: t,
              onContextMenu: C,
              "aria-label": O.intl.formatToPlainString(O.t["zLhr9/"], {
                applicationName: v,
                applicationDescription: x,
              }),
              children: (0, a.jsx)(d.FocusBlock, { children: i }),
            });
      }
      function V(e) {
        let { application: n, imageStyle: t, children: i } = e,
          { name: l, iconURL: r } = o.useMemo(
            () => (0, S.sl)(n, { fakeAppIconURL: B }),
            [n],
          );
        return (0, a.jsx)(d.Tooltip, {
          tooltipContentClassName: U.tooltipContent,
          text: l,
          children: (e) => {
            let { ...n } = e;
            return (0, a.jsxs)("div", {
              className: s()(U.iconContainer, t),
              ...n,
              children: [
                (0, a.jsx)(M.Z, {
                  src: r,
                  className: U.iconCard,
                  "aria-hidden": !0,
                  rendersPlaceholder: !0,
                }),
                i,
              ],
            });
          },
        });
      }
      function W(e) {
        let {
            application: n,
            look: t,
            imageStyle: i,
            enableVideoBanner: l,
            disableBannerFadeIn: r,
            children: u,
            overrideImageUrl: m,
            showsPromoted: p,
          } = e,
          {
            iconURL: f,
            name: C,
            description: v,
          } = o.useMemo(() => (0, S.sl)(n, { fakeAppIconURL: B }), [n]),
          x = o.useMemo(() => (null == v ? null : (0, T.ae)(v)), [v]),
          _ = (0, A.ZP)(f, ""),
          [N, I] = o.useState(!1),
          E = o.useCallback(() => {
            !0 === l && I(!0);
          }, [l]),
          b = p || (0, S.lf)(n),
          P = "large_banner" === t || "medium_banner" === t,
          y = o.useCallback(() => I(!1), []),
          j = (0, c.e7)(
            [h.Z, g.Z],
            () =>
              h.Z.inDevModeForApplication(n.id) ||
              g.Z.inTestModeForApplication(n.id),
            [n.id],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            P
              ? (0, a.jsxs)("div", {
                  onMouseEnter: E,
                  onFocus: E,
                  onMouseLeave: y,
                  onBlur: y,
                  className: s()(U.bannerImageContainer, {
                    [U.mediumBanner]: "medium_banner" === t,
                    [U.largeBanner]: "large_banner" === t,
                  }),
                  children: [
                    (0, a.jsx)("span", {
                      className: i,
                      children: (0, a.jsx)(z, {
                        application: n,
                        fallbackColor: _,
                        showVideo: N,
                        disableFadeIn: r,
                        overrideImageUrl: m,
                      }),
                    }),
                    j || b
                      ? (0, a.jsxs)("div", {
                          className: U.bannerUpperRightContainer,
                          children: [
                            b &&
                              (0, a.jsx)("div", {
                                className: U.promotedLabelWrapperBanner,
                                children: (0, a.jsx)(d.Heading, {
                                  variant: "text-xxs/medium",
                                  color: "header-primary",
                                  children: O.intl.string(O.t["/eVltr"]),
                                }),
                              }),
                            j && (0, a.jsx)(F, {}),
                          ],
                        })
                      : null,
                    (0, a.jsx)("div", {
                      className: U.bannerImageChildContainer,
                      children: u,
                    }),
                  ],
                })
              : null,
            (0, a.jsxs)("div", {
              className: s()(U.appDetailsContainer, {
                [U.appDetailsRowContainer]: "row" === t,
              }),
              children: [
                (0, a.jsx)(M.Z, {
                  src: f,
                  className: s()(U.icon, { [U.rowIcon]: "row" === t }),
                  "aria-hidden": !0,
                  rendersPlaceholder: !0,
                }),
                (0, a.jsxs)("div", {
                  className: U.appDetails,
                  children: [
                    (0, a.jsxs)("div", {
                      className: U.appDetailsHeaderContainer,
                      children: [
                        (0, a.jsx)(d.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          children: C,
                        }),
                        !P && b
                          ? (0, a.jsx)("div", {
                              className: U.promotedLabelWrapperNonBanner,
                              children: (0, a.jsx)(d.Text, {
                                variant: "text-xxs/semibold",
                                color: "text-muted",
                                children: O.intl.string(O.t["/eVltr"]),
                              }),
                            })
                          : null,
                        (0, a.jsx)(G, { application: n }),
                      ],
                    }),
                    (0, a.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "text-secondary",
                      lineClamp: 1,
                      children: x,
                    }),
                  ],
                }),
                "row" === t
                  ? (0, a.jsx)("div", { className: U.rowDivider })
                  : null,
              ],
            }),
          ],
        });
      }
      function F() {
        return (0, a.jsx)(d.Tooltip, {
          text: O.intl.string(O.t.CfTySU),
          children: (e) =>
            (0, a.jsx)("div", {
              className: U.devShelfBadge,
              ...e,
              children: (0, a.jsx)(b.Z, { className: U.devShelfIcon }),
            }),
        });
      }
      function G(e) {
        let { application: n } = e,
          t = (0, S.yJ)(n);
        if (null == t || !(0, S.BQ)(n)) return null;
        let i = (0, v.fD)(n, t);
        return null == i
          ? null
          : (0, a.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                (0, a.jsx)("img", {
                  className: U.staffBadge,
                  alt: i,
                  src: D,
                  ...e,
                }),
            });
      }
      function z(e) {
        let {
          application: n,
          fallbackColor: t,
          showVideo: i,
          disableFadeIn: l,
          overrideImageUrl: o,
        } = e;
        if (null != o)
          return (0, a.jsx)("img", {
            src: o,
            alt: (0, S.BQ)(n) ? n.name : "",
            className: s()(U.bannerImage, { [U.disableFadeIn]: l }),
          });
        if ((0, S.BQ)(n)) {
          if ((0, S.ye)(n))
            return (0, a.jsx)(Y, {
              application: n,
              showVideo: i,
              disableFadeIn: l,
            });
          if (null != n.bot)
            return (0, a.jsx)(X, {
              bot: n.bot,
              fallbackColor: t,
              disableFadeIn: l,
            });
        }
        return (0, a.jsx)(q, { fallbackColor: t, disableFadeIn: l });
      }
      function Y(e) {
        let { application: n, showVideo: t, disableFadeIn: i } = e,
          l = (0, x.Z)({
            applicationId: n.id,
            size: 600,
            names: ["embedded_cover"],
          }),
          r = o.useMemo(() => {
            let e = (0, S.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id
              ? (0, C.Z)(n.id, e.activity_preview_video_asset_id)
              : null;
          }, [n]),
          [c, d] = o.useState(t);
        o.useEffect(() => {
          t && d(!0);
        }, [t]);
        let u = s()(U.bannerImage, { [U.disableFadeIn]: i });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            null != r && c
              ? (0, a.jsx)("div", {
                  className: U.activityVideoContainer,
                  children: (0, a.jsx)("div", {
                    className: s()(U.activityVideo, { [U.videoFadeOut]: !t }),
                    onAnimationEnd: () => (t ? null : d(!1)),
                    children: (0, a.jsx)(I.Z, {
                      src: r,
                      mediaLayoutType: k.hV.MOSAIC,
                      loop: !0,
                      autoPlay: !0,
                      muted: !0,
                    }),
                  }),
                })
              : null,
            (0, a.jsx)(_.Z, {
              imageBackground: l,
              applicationName: n.name,
              imageClassName: u,
              imageNotFoundClassName: u,
            }),
          ],
        });
      }
      function X(e) {
        let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
          l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
          o = (0, P.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !l,
            size: 600,
          });
        return null == o
          ? (0, a.jsx)(q, { fallbackColor: t, disableFadeIn: i })
          : (0, a.jsx)("img", {
              src: o,
              alt: "",
              className: s()(U.bannerImage, { [U.disableFadeIn]: i }),
            });
      }
      function q(e) {
        let { fallbackColor: n, disableFadeIn: t } = e;
        return (0, a.jsx)("div", {
          className: s()(U.bannerImage, { [U.disableFadeIn]: t }),
          style: { backgroundColor: n },
        });
      }
      function J(e) {
        let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: l,
            installOnDemand: a,
            location: r,
          } = e,
          { pushHistory: s } = (0, j.hH)();
        return o.useCallback(
          (e) => {
            e.stopPropagation(),
              (0, N.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                application_id: n.id,
                section_name: t,
                search_results_position: i,
                source: y.Z.entrypoint(),
                location: r,
                query: l,
              }),
              s({
                type: j.gc.APPLICATION,
                application: n,
                installOnDemand: a,
                sectionName: t,
              });
          },
          [n, a, r, s, l, i, t],
        );
      }
      function Q(e) {
        let n = J(e);
        return (0, a.jsx)(w, { ...e, onClick: n });
      }
      function K(e) {
        let {
          context: n,
          application: t,
          location: i,
          sectionName: l,
          isOneClickCTA: r,
          fetchesApplication: s = !0,
          ...u
        } = e;
        if (!(0, S.BQ)(t))
          throw Error(
            "PerformActivityActionAppCard was passed the Built-in App, which is not supported.",
          );
        let m = o.useId(),
          [p, h] = (0, c.Wu)([f.ZP], () => [
            f.ZP.isLaunchingActivity(),
            f.ZP.getLaunchState(
              t.id,
              "channel" === n.type ? n.channel.id : void 0,
            ),
          ]),
          C = null != h && h.isLaunching && h.componentId === m,
          {
            onActivityItemSelected: x,
            activityAction: _,
            buttonColor: N,
            buttonText: A,
          } = (0, T.P7)({
            context: n,
            application: t,
            location: i,
            sectionName: l,
            launchingComponentId: m,
            fetchesApplication: s,
          });
        if (_ === v.JS.START || _ === v.JS.JOIN)
          return r
            ? (0, a.jsx)(w, {
                ...u,
                sectionName: l,
                application: t,
                onClick: x,
                disabled: p,
                enableVideoBanner: !C,
                children: C
                  ? (0, a.jsx)(d.Spinner, {
                      type: d.Spinner.Type.PULSING_ELLIPSIS,
                      className: U.spinner,
                    })
                  : null,
              })
            : (0, a.jsx)(Q, {
                ...u,
                context: n,
                sectionName: l,
                application: t,
                location: i,
              });
        return (0, a.jsx)(w, {
          ...u,
          sectionName: l,
          application: t,
          onClick: (e) => {
            e.stopPropagation();
          },
          imageStyle: U.darkenImage,
          enableVideoBanner: !1,
          disabled: !0,
          children: (0, a.jsx)("div", {
            className: U.voiceLauncherAppCardContainer,
            children: (0, a.jsx)(d.Button, {
              className: U.voiceLauncherAppCardButton,
              type: "submit",
              size: d.Button.Sizes.LARGE,
              color: N,
              disabled: p,
              onClick: x,
              "aria-label": O.intl.formatToPlainString(O.t["XjP/R0"], {
                buttonText: A,
                applicationName: t.name,
              }),
              submitting: C,
              children: A,
            }),
          }),
        });
      }
      ((l = i || (i = {})).ICON = "icon"),
        (l.ROW = "row"),
        (l.NO_BANNER = "no_banner"),
        (l.MEDIUM_BANNER = "medium_banner"),
        (l.LARGE_BANNER = "large_banner");
    },
    772606: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(481060),
        s = t(695676),
        c = t(388032),
        d = t(660954);
      function u(e) {
        let { className: n } = e,
          { goBack: t } = (0, s.hH)(),
          a = l.useCallback(() => {
            t();
          }, [t]);
        return (0, i.jsx)(r.Clickable, {
          onClick: a,
          className: o()(d.clickable, n),
          "aria-label": c.intl.string(c.t.ybUZqq),
          children: (0, i.jsx)(r.ArrowLargeLeftIcon, {
            size: "sm",
            color: r.tokens.colors.INTERACTIVE_ACTIVE,
          }),
        });
      }
    },
    804307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(442837),
        s = t(481060),
        c = t(607070),
        d = t(98880),
        u = t(61474);
      function m(e) {
        let { look: n = d.U4.LARGE_BANNER } = e,
          t = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
          { styleLarge: a, styleSmall: m } = l.useMemo(
            () => ({
              styleLarge: { width: "".concat(10 + 50 * Math.random(), "%") },
              styleSmall: { width: "".concat(30 + 60 * Math.random(), "%") },
            }),
            [],
          );
        return (0, i.jsxs)("div", {
          className: o()(u.container, u.loadingAnimation, {
            [u.noAnimation]: t,
            [u.containerBorderRadius]: n !== d.U4.ROW,
            [u.rowContainer]: n === d.U4.ROW,
          }),
          children: [
            (0, i.jsx)("div", {
              className: o()(u.bannerImage, {
                [u.mediumBanner]: n === d.U4.MEDIUM_BANNER,
                [u.largeBanner]: n === d.U4.LARGE_BANNER,
              }),
            }),
            (0, i.jsxs)("div", {
              className: o()(u.appDetailsContainer, {
                [u.appDetailsRowContainer]: n === d.U4.ROW,
              }),
              children: [
                (0, i.jsx)("div", {
                  className: o()(u.iconPlaceholder, {
                    [u.rowIconPlaceholder]: n === d.U4.ROW,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: u.textContainer,
                  children: [
                    (0, i.jsx)("div", {
                      className: u.textPlaceholder,
                      style: a,
                      children: (0, i.jsx)(s.Heading, {
                        className: u.hidden,
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        lineClamp: 1,
                        children: "_",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: u.textPlaceholder,
                      style: m,
                      children: (0, i.jsx)(s.Text, {
                        className: u.hidden,
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        lineClamp: 1,
                        children: "_",
                      }),
                    }),
                  ],
                }),
                n === d.U4.ROW &&
                  (0, i.jsx)("div", { className: u.rowDivider }),
              ],
            }),
          ],
        });
      }
    },
    312871: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(192379),
        l = t(434650);
      function a(e) {
        let { onVisible: n, threshold: t, minTimeVisibleMs: a } = e,
          o = i.useRef(!1),
          r = i.useRef(null);
        return (
          i.useEffect(
            () => () => {
              null != r.current &&
                (clearTimeout(r.current), (r.current = null));
            },
            [],
          ),
          (0, l.O)((e) => {
            if (
              (null != r.current &&
                !e &&
                !1 === o.current &&
                (clearTimeout(r.current), (r.current = null)),
              !e || !0 === o.current)
            )
              return;
            let t = () => {
              n(), (o.current = !0), (r.current = null);
            };
            null != a ? (r.current = setTimeout(t, a)) : t();
          }, t)
        );
      }
    },
    226026: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(990547),
        l = t(442837),
        a = t(213609),
        o = t(541099),
        r = t(312871);
      function s(e) {
        let {
            applicationId: n,
            sectionName: t,
            sectionPosition: s,
            sectionOverallPosition: c,
          } = e,
          d = (0, l.e7)([o.Z], () => o.Z.entrypoint());
        return {
          trackItemImpressionRef: (0, r.Z)({
            onVisible: () => {
              (0, a.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                  application_id: n,
                  section_name: t,
                  section_position: s,
                  section_overall_position: c,
                  source: d,
                },
              });
            },
            threshold: 0.5,
            minTimeVisibleMs: 1e3,
          }),
        };
      }
    },
    532309: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(990547),
        l = t(442837),
        a = t(213609),
        o = t(541099),
        r = t(312871);
      function s(e) {
        let {
            applicationId: n,
            commandId: t,
            searchResultsPosition: s,
            query: c,
          } = e,
          d = (0, l.e7)([o.Z], () => o.Z.entrypoint());
        return {
          trackSearchResultsItemImpressionRef: (0, r.Z)({
            onVisible: () => {
              (0, a.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                properties: {
                  application_id: n,
                  command_id: t,
                  search_results_position: s,
                  query: c,
                  source: d,
                },
              });
            },
            threshold: 1,
          }),
        };
      }
    },
    888617: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(990547),
        l = t(213609),
        a = t(541099),
        o = t(312871);
      function r(e) {
        let { sectionName: n, numItems: t, numVisibleItems: r } = e;
        return {
          trackSectionImpressionRef: (0, o.Z)({
            onVisible: () => {
              (0, l.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                properties: {
                  section_name: n,
                  num_items: t,
                  num_visible_items: r,
                  source: a.Z.entrypoint(),
                },
              });
            },
            threshold: 1,
          }),
        };
      }
    },
    387658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(140835),
        s = t(246521),
        c = t(442837),
        d = t(481060),
        u = t(911969),
        m = t(607070),
        p = t(555573),
        h = t(213459),
        f = t(10718),
        C = t(895924),
        v = t(583027),
        x = t(585483),
        _ = t(499254),
        N = t(541099),
        A = t(827498),
        I = t(496158),
        E = t(676161),
        g = t(660090),
        b = t(783097),
        P = t(46332),
        y = t(176412),
        S = t(870205),
        j = t(981631),
        T = t(689079),
        L = t(388032),
        R = t(61474),
        M = t(616362);
      let Z = "placeholder",
        k = [, , , , ,].fill(Z);
      function O(e) {
        var n, t;
        let { context: a, command: o, section: s, sectionName: c } = e,
          u = l.useCallback(() => {
            let e = N.Z.entrypoint();
            _.yT(A.ti.COMMAND),
              (0, v.Mo)({
                command: o,
                location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                sectionName: c,
              }),
              "channel" === a.type &&
                (p.Po({
                  channelId: a.channel.id,
                  command: o,
                  section: s,
                  location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                  sectionName: c,
                  source: e,
                  commandOrigin: C.bB.APPLICATION_LAUNCHER,
                }),
                x.S.dispatch(j.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: a.channel.id,
                }));
          }, [a, o, s, c]),
          m =
            (null !==
              (t =
                null === (n = o.options) || void 0 === n ? void 0 : n.length) &&
            void 0 !== t
              ? t
              : 0) > 0,
          h = l.useMemo(
            () => (0, y.ae)(o.displayDescription, void 0),
            [o.displayDescription],
          ),
          f = l.useMemo(
            () =>
              (0, i.jsxs)("div", {
                className: M.commandTextContainer,
                children: [
                  (0, i.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: o.displayName,
                  }),
                  (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: h,
                  }),
                ],
              }),
            [o.displayName, h],
          );
        return (0, i.jsxs)(d.Clickable, {
          className: M.command,
          onClick: u,
          children: [
            (0, i.jsx)(d.FocusBlock, {
              className: M.commandFocusBlock,
              children: f,
            }),
            m
              ? (0, i.jsx)(r.F, {})
              : (0, i.jsx)(B, { context: a, command: o, sectionName: c }),
          ],
        });
      }
      function U() {
        let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
          { styleLarge: n, styleSmall: t } = l.useMemo(
            () => ({
              styleLarge: {
                width: "".concat(10 + 20 * Math.random(), "%"),
                height: "auto",
              },
              styleSmall: {
                width: "".concat(30 + 60 * Math.random(), "%"),
                height: "auto",
              },
            }),
            [],
          ),
          a = l.useMemo(
            () =>
              (0, i.jsxs)("div", {
                className: M.commandTextContainerPlaceholder,
                children: [
                  (0, i.jsx)("div", {
                    className: R.textPlaceholder,
                    style: n,
                    children: (0, i.jsx)(d.Text, {
                      className: R.hidden,
                      variant: "text-sm/semibold",
                      color: "header-primary",
                      lineClamp: 1,
                      children: "_",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: R.textPlaceholder,
                    style: t,
                    children: (0, i.jsx)(d.Text, {
                      className: R.hidden,
                      variant: "text-xs/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: "_",
                    }),
                  }),
                ],
              }),
            [n, t],
          );
        return (0, i.jsx)("div", {
          className: o()(M.command, R.loadingAnimation, { [R.noAnimation]: e }),
          children: a,
        });
      }
      function B(e) {
        let { context: n, command: t, sectionName: a } = e;
        (0, h.PL)(!0, !0), (0, h.em)(n, !0, !0);
        let o = (0, I.D)(n),
          [r, c] = l.useState(!1),
          u = l.useCallback(
            async (e) => {
              if ("channel" !== n.type) return;
              e.stopPropagation();
              let i = N.Z.lastShownEntrypoint();
              try {
                (await (0, P.L)({
                  applicationId: t.applicationId,
                  channel: n.channel,
                  sectionName: a,
                  location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                  entrypoint: i,
                  commandIntegrationTypes: t.integration_types,
                })) &&
                  (await (0, b.Y$)({
                    command: t,
                    optionValues: {},
                    context: o,
                    sectionName: a,
                    commandOrigin: C.bB.APP_LAUNCHER_APPLICATION_VIEW,
                  }),
                  _.yT(A.ti.COMMAND));
              } finally {
                c(!1);
              }
            },
            [t, n, a, o],
          );
        return (0, i.jsxs)(d.Button, {
          type: "submit",
          onClick: u,
          disabled: r,
          size: d.ButtonSizes.ICON,
          color: d.Button.Colors.PRIMARY,
          className: M.commandSentCTAButton,
          innerClassName: M.commandSentCTAButtonInner,
          "aria-label": L.intl.formatToPlainString(L.t.UXw6W1, {
            commandName: t.untranslatedName,
          }),
          children: [
            (0, i.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: L.intl.string(L.t.TXNS7e),
            }),
            (0, i.jsx)(s.U, { size: "xs", color: "currentColor" }),
          ],
        });
      }
      function D(e) {
        let {
          context: n,
          commands: t,
          section: l,
          headerName: a,
          sectionName: o,
          children: r,
        } = e;
        return 0 === t.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  className: M.commandListHeader,
                  children: [
                    (0, i.jsx)(d.Heading, {
                      variant: "heading-sm/semibold",
                      children: a,
                    }),
                    r,
                  ],
                }),
                (0, i.jsx)("ul", {
                  className: M.commandContainer,
                  "aria-label": a,
                  children: t.map((e, t) =>
                    e === Z
                      ? (0, i.jsx)(U, {}, e + t)
                      : (0, i.jsx)(
                          O,
                          {
                            context: n,
                            command: e,
                            section: l,
                            sectionName: o,
                          },
                          e.id,
                        ),
                  ),
                }),
              ],
            });
      }
      function w(e) {
        var n;
        let {
            context: t,
            application: a,
            sectionName: o,
            installOnDemand: r,
            setHasCommands: s,
          } = e,
          {
            filterSection: c,
            commandsByActiveSection: d,
            sectionDescriptors: m,
            loading: p,
          } = f.wi({
            context: t,
            filters: { commandTypes: [u.yU.CHAT] },
            options: {
              placeholderCount: 0,
              limit: T.tn,
              includeFrecency: !0,
              allowApplicationState: r,
              installOnDemand: r,
              applicationId: a.id,
            },
            allowFetch: !0,
          }),
          h =
            null !== (n = m.find((e) => e.id === a.id)) && void 0 !== n
              ? n
              : null,
          {
            sortOrder: C,
            setSortOrder: v,
            commands: x,
            canSort: _,
          } = (0, g.Z)({ sectionId: a.id, commandsByActiveSection: d });
        l.useEffect(() => {
          c(a.id);
        }, [a.id, c]);
        let N = (0, E.Z)({ context: t, commands: x, limit: 5 });
        return (l.useEffect(() => {
          s(x.length > 0);
        }, [s, x]),
        p.current || 0 !== x.length)
          ? (0, i.jsxs)("ul", {
              className: M.contentContainer,
              children: [
                (0, i.jsx)(D, {
                  context: t,
                  section: h,
                  commands: N,
                  headerName: L.intl.string(L.t.acSE0t),
                  sectionName: o,
                }),
                (0, i.jsx)(D, {
                  context: t,
                  section: h,
                  commands: p.current ? k : x,
                  headerName: L.intl.string(L.t.DUU9Ly),
                  sectionName: o,
                  children:
                    _ &&
                    (0, i.jsx)(S.Z, { sortOrder: C, onSortOptionClick: v }),
                }),
              ],
            })
          : null;
      }
    },
    536650: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(392711),
        o = t(780384),
        r = t(481060),
        s = t(410030),
        c = t(220082),
        d = t(564334),
        u = t(302221),
        m = t(783097),
        p = t(772606),
        h = t(488977),
        f = t(867020);
      function C(e, n, t) {
        return e + (n - e) * t;
      }
      function v(e) {
        let [n, t] = l.useState(void 0);
        return (
          l.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
          }, [e]),
          n
        );
      }
      function x(e) {
        let {
            application: n,
            context: t,
            name: C,
            iconURL: x,
            scrollerRef: _,
            sectionName: N,
          } = e,
          A = (0, o.ap)((0, s.ZP)()),
          I = l.useRef(null),
          E = l.useRef(null),
          g = l.useRef(null),
          b = l.useRef(null),
          P = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
          y = (0, c.ZP)("number" == typeof x ? "" : x, null != P ? P : ""),
          S = l.useMemo(() => {
            var e, n;
            let t = (0, a.compact)([
              d.Z.parseHexString(y),
              d.Z.parseHexString(A ? "#000000" : "#ffffff"),
            ]);
            return null !==
              (n =
                null ===
                  (e = (0, u.k8)({
                    colors: t,
                    ratio: 5,
                    saturationFactor: 0.6,
                  })) || void 0 === e
                  ? void 0
                  : e.toHexString()) && void 0 !== n
              ? n
              : y;
          }, [y, A]),
          j = v(I),
          T = v(E),
          L = l.useCallback(() => {
            var e, n, t, i, l, o, r, s, c, d;
            let u = _.current,
              m = I.current,
              p = g.current,
              h = null == b ? void 0 : b.current,
              f = parseInt(
                null !== (e = null == j ? void 0 : j.height) && void 0 !== e
                  ? e
                  : "",
              ),
              C = parseInt(
                null !== (n = null == T ? void 0 : T.height) && void 0 !== n
                  ? n
                  : "",
              );
            if (null != u && null != m && null != p && !isNaN(f) && !isNaN(C)) {
              let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                n = 0 !== u.scrollHeight ? u.scrollHeight : C + 20,
                v = 0 !== u.clientHeight ? u.clientHeight : C + 20,
                x = C - f,
                _ = (0, a.clamp)(n - v, x + 1, C + 20);
              let N =
                ((i = e),
                (l = x) === (o = _)
                  ? 1
                  : (0, a.clamp)((i - l) / (o - l), 0, 1));
              if (
                ((m.style.filter = "brightness(".concat(
                  1 + ((A ? 1.4 : 0.6) - (r = 1)) * N,
                  ")",
                )),
                (m.style.backgroundColor = "color-mix(in oklab,"
                  .concat(y, " ")
                  .concat((1 - N) * 100, "%, ")
                  .concat(S, ")")),
                (p.style.opacity = "".concat(0 + (1 - (s = 0)) * N)),
                (p.style.transform = "translateY(".concat(
                  (c = f / 4) + (0 - c) * N,
                  "px)",
                )),
                null != h)
              ) {
                h.style.opacity = "".concat(1 + (0 - (d = 1)) * N);
              }
            }
          }, [
            S,
            y,
            null == T ? void 0 : T.height,
            A,
            _,
            null == j ? void 0 : j.height,
          ]);
        return (
          l.useEffect(() => {
            L();
          }, [L, A]),
          l.useEffect(() => {
            let e = _.current,
              n = () => {
                L();
              };
            return (
              null == e || e.addEventListener("scroll", n),
              () => {
                null == e || e.removeEventListener("scroll", n);
              }
            );
          }, [_, L]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: f.stickyContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: f.stickyBannerContainer,
                    children: (0, i.jsx)("div", {
                      className: f.stickyBanner,
                      ref: I,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: f.backButtonContainer,
                    children: (0, i.jsx)(p.Z, { className: f.headerButton }),
                  }),
                  (0, i.jsx)("div", {
                    className: f.nameContainer,
                    children: (0, i.jsx)(r.Heading, {
                      ref: g,
                      className: f.textApplicationName,
                      variant: "heading-lg/extrabold",
                      children: C,
                    }),
                  }),
                ],
              }),
              (0, m.BQ)(n)
                ? (0, i.jsx)("div", {
                    ref: b,
                    className: f.moreMenuButtonContainer,
                    children: (0, i.jsx)(h.Z, {
                      application: n,
                      context: t,
                      className: f.headerButton,
                      sectionName: N,
                    }),
                  })
                : null,
              (0, i.jsx)("div", {
                ref: E,
                className: f.bannerBackground,
                style: { backgroundColor: y },
              }),
            ],
          })
        );
      }
    },
    675993: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(442837),
        s = t(481060),
        c = t(115130),
        d = t(147865),
        u = t(427996),
        m = t(906732),
        p = t(706302),
        h = t(812236),
        f = t(835473),
        C = t(70097),
        v = t(240991),
        x = t(973616),
        _ = t(592125),
        N = t(783097),
        A = t(695676),
        I = t(520315),
        E = t(29380),
        g = t(783685),
        b = t(388032),
        P = t(580062),
        y = t(665162);
      function S(e) {
        let {
            context: n,
            application: t,
            videoUrl: a,
            imageCoverUrl: s,
            sectionName: d,
            hasCommands: m,
          } = e,
          p = l.useMemo(() => {
            var e;
            return null !== (e = (0, N.jD)(t)) && void 0 !== e ? e : "";
          }, [t]),
          h = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
          f = null != a,
          v = l.useMemo(() => {
            if ("contextless" === n.type && (0, N.BQ)(t)) {
              var e;
              let n = _.Z.getDMFromUserId(
                null === (e = t.bot) || void 0 === e ? void 0 : e.id,
              );
              return null != n ? _.Z.getChannel(n) : void 0;
            }
            return n.channel;
          }, [n, t]),
          { isSlideReady: x } = (0, A.hH)(),
          [I, E] = l.useState(!1);
        l.useEffect(() => {
          x && E(!0);
        }, [x]);
        let g = null != v ? { channel: v, type: "channel" } : void 0;
        return (0, i.jsxs)("div", {
          className: P.container,
          children: [
            (0, i.jsxs)("div", {
              children: [
                f
                  ? (0, i.jsxs)("div", {
                      className: P.videoContainer,
                      children: [
                        I
                          ? (0, i.jsx)(C.Z, {
                              className: o()(P.videoCover, P.video),
                              loop: !0,
                              muted: !0,
                              autoPlay: !0,
                              src: a,
                              poster: s,
                            })
                          : null,
                        (0, i.jsx)("img", {
                          className: P.videoCover,
                          src: s,
                          "aria-label": b.intl.string(b.t.X4IxWF),
                        }),
                      ],
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: f
                    ? P.overviewContainerWithVideo
                    : P.overviewContainerNoVideo,
                  children: [
                    (0, i.jsx)(T, { application: t }),
                    (0, i.jsx)(L, { application: t }),
                    p.length > 0 ? (0, i.jsx)(Z, { description: p }) : null,
                    h
                      ? (0, i.jsx)("div", {
                          className: P.developerShelfControlsContainer,
                          children: (0, i.jsx)(u.W, {
                            hideSearch: !0,
                            className: P.developerShelfControls,
                          }),
                        })
                      : null,
                    null != g
                      ? (0, i.jsx)(M, {
                          context: g,
                          application: t,
                          sectionName: d,
                          isDeveloperOfThisApp: h,
                          hasCommands: m,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, i.jsx)(j, { application: t }),
          ],
        });
      }
      function j(e) {
        let { application: n } = e,
          t = (0, N.Cb)(n),
          l = (0, N.Hu)(n);
        return t || l
          ? (0, i.jsxs)("div", {
              className: P.monetizationDisclosureContainerStyle,
              children: [
                t
                  ? (0, i.jsxs)("div", {
                      className: P.monetizationDisclosureStyle,
                      children: [
                        (0, i.jsx)(s.ShopIcon, {
                          size: "sm",
                          color: s.tokens.colors.INTERACTIVE_MUTED,
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: b.intl.string(b.t["8z5B2d"]),
                        }),
                      ],
                    })
                  : null,
                l
                  ? (0, i.jsxs)("div", {
                      className: P.monetizationDisclosureStyle,
                      children: [
                        (0, i.jsx)(s.BillIcon, {
                          size: "sm",
                          color: s.tokens.colors.INTERACTIVE_MUTED,
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: b.intl.string(b.t["5khEk5"]),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null;
      }
      function T(e) {
        var n;
        let { application: t } = e,
          l = (0, N.BQ)(t)
            ? t.name
            : null !== (n = (0, N.$d)(t)) && void 0 !== n
              ? n
              : "",
          a = (0, N.vJ)(t);
        return (0, i.jsxs)("div", {
          className: P.titleContainer,
          children: [
            (0, i.jsx)(s.Heading, {
              variant: "heading-xl/extrabold",
              lineClamp: 1,
              children: l,
            }),
            a
              ? (0, i.jsx)("div", {
                  className: P.partnerLabelContainer,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-normal",
                    children: b.intl.string(b.t.LO4f0N),
                  }),
                })
              : null,
          ],
        });
      }
      function L(e) {
        let { application: n } = e,
          t = l.useMemo(() => {
            var e;
            return (0, N.BQ)(n) &&
              null !== (e = null == n ? void 0 : n.tags) &&
              void 0 !== e
              ? e
              : [];
          }, [n]);
        return (0, N.ye)(n)
          ? (0, i.jsxs)("div", {
              className: P.tagsContainer,
              children: [
                (0, i.jsx)(R, { application: n }),
                t.map((e, n) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: P.tagContainer,
                      children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "interactive-normal",
                        children: e,
                      }),
                    },
                    e + n,
                  ),
                ),
              ],
            })
          : null;
      }
      function R(e) {
        var n;
        let { application: t } = e;
        if (!(0, N.ye)(t)) return null;
        let l =
          null !==
            (n = (0, N.BQ)(t)
              ? t instanceof x.ZP
                ? t.maxParticipants
                : t.max_participants
              : 0) && void 0 !== n
            ? n
            : 0;
        return (0, i.jsxs)("div", {
          className: P.tagContainer,
          children: [
            (0, i.jsx)(s.GroupIcon, {
              size: "xs",
              color: s.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              color: "interactive-normal",
              children: (0, d.lY)(l),
            }),
          ],
        });
      }
      function M(e) {
        var n;
        let {
            context: t,
            application: l,
            sectionName: a,
            hasCommands: o,
            isDeveloperOfThisApp: r,
          } = e,
          c = (0, h.Fs)(t, l.id),
          d = (0, f.q)(l.id),
          u =
            null == d
              ? void 0
              : null === (n = d.bot) || void 0 === n
                ? void 0
                : n.id,
          C = (0, p.Z)({ context: t, applicationId: l.id, botUserId: u }),
          { analyticsLocations: v } = (0, m.ZP)();
        if (!(0, N.BQ)(l) || !(0, N.ye)(l)) return null;
        let x = s.ButtonSizes.MAX;
        return null != c && null != u
          ? (0, i.jsxs)("div", {
              className: P.entrypointContainer,
              children: [
                (0, i.jsx)("div", {
                  className: P.entryPointContainerFlexChild,
                  children: (0, i.jsx)(E.Z, {
                    context: t,
                    application: l,
                    sectionName: a,
                    primaryEntryPointCommand: c,
                    buttonSize: x,
                  }),
                }),
                C && null != u
                  ? (0, i.jsx)("div", {
                      className: P.entryPointContainerFlexChild,
                      children: (0, i.jsx)(g.Z, {
                        botUserId: u,
                        applicationId: l.id,
                        buttonSize: x,
                        analyticsLocations: v,
                      }),
                    })
                  : null,
              ],
            })
          : r && !o && (0, N.ye)(l)
            ? (0, i.jsx)(s.HelpMessage, {
                className: P.primaryEntryPointWarningMessage,
                messageType: s.HelpMessageTypes.WARNING,
                children: b.intl.format(b.t["s/3hjI"], {}),
              })
            : null;
      }
      function Z(e) {
        let { description: n } = e,
          [t, a] = l.useState(!0);
        l.useLayoutEffect(() => a(!1), []);
        let o = l.useMemo(() => (0, v.parseBioReact)(n), [n]),
          {
            ref: r,
            lineHeight: c,
            lineCount: d,
          } = (function () {
            let e = l.useRef(null),
              [n, t] = l.useState(null),
              [i, a] = l.useState(null);
            return (
              l.useLayoutEffect(() => {
                let n = e.current;
                if (null === n || 0 === n.clientHeight) return;
                let i = parseInt(getComputedStyle(n).lineHeight);
                if (!isNaN(i)) t(i), a(Math.floor(n.clientHeight / i));
              }, []),
              { ref: e, lineHeight: n, lineCount: i }
            );
          })(),
          u = l.useMemo(() => {
            if (null == c || null == d) return { key: 0 };
            let e = c * d;
            return {
              key: 1,
              minHeightOverride: Math.min(e, 1 * c),
              maxHeightOverride: e,
            };
          }, [d, c]),
          {
            ref: m,
            isTransitioning: p,
            onTransitionEnd: h,
          } = (0, I.Z)({ isExpanded: t, ...u }),
          f = t || p;
        return (0, i.jsxs)("div", {
          className: P.descriptionContainer,
          children: [
            (0, i.jsx)("div", {
              ref: m,
              className: P.overflowHidden,
              onTransitionEnd: h,
              children: (0, i.jsx)(s.Text, {
                ref: r,
                className: y.markup,
                variant: "text-sm/medium",
                lineClamp: f ? void 0 : 1,
                style: { maxHeight: f ? void 0 : u.minHeightOverride },
                children: o,
              }),
            }),
            null != d && d > 1
              ? (0, i.jsxs)(s.Clickable, {
                  className: P.expandableDescriptionClickable,
                  onClick: () => a((e) => !e),
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: f
                        ? b.intl.string(b.t.u4YJ8v)
                        : b.intl.string(b.t["N/tajI"]),
                    }),
                    f
                      ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                          size: "sm",
                          color: s.tokens.colors.TEXT_BRAND,
                        })
                      : (0, i.jsx)(s.ChevronSmallDownIcon, {
                          size: "sm",
                          color: s.tokens.colors.TEXT_BRAND,
                        }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    173790: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        o = t(218061),
        r = t(481060),
        s = t(361213),
        c = t(778569),
        d = t(213459),
        u = t(835473),
        m = t(541099),
        p = t(827498),
        h = t(783097),
        f = t(753972),
        C = t(387658),
        v = t(536650),
        x = t(675993),
        _ = t(689079),
        N = t(388032),
        A = t(370913),
        I = t(413097);
      function E(e) {
        var n;
        let { context: t, application: s, sectionName: c } = e,
          E = "channel" === t.type ? t.channel : void 0,
          b = (0, a.e7)([m.Z], () => m.Z.entrypoint()),
          P =
            null !== (n = (0, u.q)(s.id === _.bi.BUILT_IN ? null : s.id)) &&
            void 0 !== n
              ? n
              : s,
          y = (0, h.ye)(P) ? g : x.Z,
          S = l.useRef(null),
          [j, T] = l.useState(!1),
          { iconURL: L, name: R } = l.useMemo(
            () => (0, h.sl)(P, { fakeAppIconURL: I, size: 84 }),
            [P],
          ),
          M = (0, d.PL)(!0, !0),
          Z = (0, d.LD)(null == E ? void 0 : E.guild_id, !0),
          k = l.useMemo(() => (0, d.If)(t, P.id), [M, Z, t, P.id]),
          O = !k.isGuildInstalled && !k.isUserInstalled;
        return (
          l.useEffect(() => {
            O && d.ZP.queryInstallOnDemandApp(P.id, null == E ? void 0 : E.id);
          }, [P.id, null == E ? void 0 : E.id, O]),
          (0, i.jsxs)(r.ScrollerNone, {
            className: A.container,
            fade: !0,
            ref: S,
            role: "region",
            "aria-label": N.intl.formatToPlainString(N.t["4OP4Ul"], {
              applicationName: R,
            }),
            children: [
              (0, i.jsx)(v.Z, {
                application: P,
                context: t,
                name: R,
                iconURL: L,
                scrollerRef: S,
                sectionName: c,
              }),
              null != L && (0, i.jsx)(f.Z, { src: L, className: A.appIcon }),
              (0, i.jsx)(o.Z, { size: 54 }),
              (0, i.jsx)(y, {
                context: t,
                application: P,
                sectionName: c,
                hasCommands: j,
              }),
              b === p._b.TEXT
                ? (0, i.jsx)(C.Z, {
                    context: t,
                    application: P,
                    sectionName: c,
                    installOnDemand: O,
                    setHasCommands: T,
                  })
                : null,
            ],
          })
        );
      }
      function g(e) {
        let { context: n, application: t, sectionName: l, hasCommands: a } = e,
          o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ["embedded_cover"],
          }),
          r = (0, h.yJ)(t),
          d =
            null != r && null != r.activity_preview_video_asset_id
              ? (0, s.Z)(t.id, r.activity_preview_video_asset_id)
              : null;
        return (0, i.jsx)(x.Z, {
          context: n,
          application: t,
          imageCoverUrl: o.url,
          videoUrl: d,
          sectionName: l,
          hasCommands: a,
        });
      }
    },
    488977: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(789020);
      var i = t(200651),
        l = t(120356),
        a = t.n(l),
        o = t(442837),
        r = t(481060),
        s = t(367907),
        c = t(895924),
        d = t(311819),
        u = t(299206),
        m = t(726721),
        p = t(726521),
        h = t(973616),
        f = t(594174),
        C = t(626135),
        v = t(572004),
        x = t(630388),
        _ = t(135431),
        N = t(541099),
        A = t(783097),
        I = t(570949),
        E = t(314734),
        g = t(981631),
        b = t(388032),
        P = t(472033);
      function y(e) {
        var n;
        let { application: t, context: l, className: y, sectionName: S } = e,
          j = (0, o.e7)([N.Z], () => N.Z.entrypoint()),
          T = (0, A.L1)(t),
          L = (0, _.Eb)(T),
          R = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: S,
            source: N.Z.lastShownEntrypoint(),
          },
          M = f.default.getCurrentUser(),
          Z = m.Z.useExperiment(
            { location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU },
            { autoTrackExposure: !0 },
          ).enabled,
          k = (0, u.Z)({ id: t.id, label: b.intl.string(b.t["+NP/b2"]) }),
          O = (0, I.P)({ application: t }),
          U = (0, x.yE)(
            null !== (n = t.flags) && void 0 !== n ? n : 0,
            g.udG.EMBEDDED,
          ),
          B = "channel" === l.type ? l.channel : void 0;
        return (0, i.jsxs)("div", {
          className: P.container,
          children: [
            (0, i.jsx)(r.Clickable, {
              onClick: () => {
                let e = U
                  ? (0, d.H)({
                      applicationId: t.id,
                      referrerId: null == M ? void 0 : M.id,
                    })
                  : (0, d.J)({ id: t.id, ...T });
                (0, v.JG)(e),
                  C.default.track(g.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                    application_id: t.id,
                    source: j,
                  }),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      b.intl.string(b.t["L/PwZW"]),
                      r.ToastType.SUCCESS,
                    ),
                  );
              },
              className: a()(P.clickable, y),
              "aria-label": b.intl.string(b.t.WqhZsr),
              children: (0, i.jsx)(r.LinkIcon, {
                size: "sm",
                color: r.tokens.colors.INTERACTIVE_ACTIVE,
              }),
            }),
            (0, i.jsx)(r.Popout, {
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsxs)(r.Menu, {
                  className: E.NN,
                  navId: "app-details-more-menu",
                  onClose: n,
                  "aria-label": b.intl.string(b.t.AXIHpa),
                  onSelect: void 0,
                  children: [
                    (0, i.jsxs)(r.MenuGroup, {
                      children: [
                        L
                          ? (0, i.jsx)(r.MenuItem, {
                              id: "add-app",
                              label: b.intl.string(b.t.NgXl3N),
                              action: () => {
                                null == T.customInstallUrl &&
                                  (0, s.yw)(
                                    g.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED,
                                    R,
                                  ),
                                  (0, _.LO)({
                                    ...T,
                                    oauth2Callback: (e) => {
                                      let { location: n } = e;
                                      null != n &&
                                        (0, s.yw)(
                                          g.rMx
                                            .APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                          R,
                                        );
                                    },
                                    source: "app_launcher_app_details",
                                  });
                              },
                            })
                          : null,
                        Z && t instanceof h.ZP
                          ? (0, i.jsx)(r.MenuItem, {
                              id: "report-app",
                              color: "danger",
                              label: b.intl.string(b.t.jhJze3),
                              action: () => {
                                var e;
                                (0, p.uu)({
                                  application: t,
                                  entrypoint: "app_launcher",
                                  contextualGuildId:
                                    null !==
                                      (e =
                                        null == B ? void 0 : B.getGuildId()) &&
                                    void 0 !== e
                                      ? e
                                      : void 0,
                                  contextualChannelId:
                                    null == B ? void 0 : B.id,
                                });
                              },
                            })
                          : null,
                        O,
                      ],
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: k }),
                  ],
                });
              },
              align: "right",
              position: "bottom",
              children: (e) =>
                (0, i.jsx)(r.Clickable, {
                  onClick: e.onClick,
                  className: a()(P.clickable, y),
                  "aria-label": b.intl.string(b.t.UKOtz8),
                  children: (0, i.jsx)(r.MoreHorizontalIcon, {
                    size: "sm",
                    color: r.tokens.colors.INTERACTIVE_ACTIVE,
                  }),
                }),
            }),
          ],
        });
      }
    },
    29380: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        o = t(542094),
        r = t(895924),
        s = t(626135),
        c = t(499254),
        d = t(827498),
        u = t(160973),
        m = t(783097),
        p = t(890280),
        h = t(176412),
        f = t(981631),
        C = t(388032),
        v = t(129571);
      function x(e) {
        let {
            context: n,
            application: t,
            sectionName: x,
            primaryEntryPointCommand: _,
            buttonSize: N = a.ButtonSizes.MEDIUM,
          } = e,
          A = l.useId(),
          I = l.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
          }, []),
          { submitting: E, wasSubmitting: g } = (0, p.Z)({
            applicationId: t.id,
            context: n,
            launchingComponentId: A,
            onSubmissionComplete: I,
          }),
          [b, P] = l.useState(!1),
          y = (0, o.Qv)({ applicationId: t.id, context: n }),
          S = l.useMemo(() => (0, m.XZ)(_.displayName), [_.displayName]),
          {
            onActivityItemSelected: j,
            buttonColor: T,
            buttonText: L,
          } = (0, h.P7)({
            context: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: x,
            commandName: S,
            autoDismissOnClick: y === o.JS.LEAVE,
            launchingComponentId: A,
            submitting: null != g ? g : E,
          }),
          { disabled: R, reason: M } = (0, u.Z)({
            context: n,
            application: t,
            activityAction: y,
          });
        return (0, i.jsx)(a.Tooltip, {
          shouldShow: null != M,
          tooltipContentClassName: v.tooltipContent,
          text: M,
          children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, i.jsx)(a.Button, {
              ...l,
              type: "submit",
              size: N,
              color: T,
              disabled: R,
              submitting: b,
              onClick: () => {
                P(!0),
                  j(),
                  null == n || n(),
                  s.default.track(
                    f.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
                    {
                      application_id: t.id,
                      button_action: d._y.USE_APP_COMMAND,
                    },
                  );
              },
              "aria-label": C.intl.formatToPlainString(C.t["XjP/R0"], {
                buttonText: L,
                applicationName: t.name,
              }),
              children: L,
            });
          },
        });
      }
    },
    783685: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        o = t(626135),
        r = t(827498),
        s = t(606192),
        c = t(981631),
        d = t(388032);
      function u(e) {
        let {
            botUserId: n,
            applicationId: t,
            buttonSize: u,
            analyticsLocations: m,
          } = e,
          [p, h] = l.useState(!1),
          f = l.useRef(null),
          C = l.useCallback(async () => {
            o.default.track(
              c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED,
              { application_id: t, button_action: r._y.OPEN_APP_DM },
            ),
              h(!0);
            try {
              await (0, s.W)({ appId: t, botId: n, analyticsLocations: m });
            } catch (e) {}
            clearTimeout(f.current), h(!1);
          }, [n, t, m]);
        return (0, i.jsx)(a.Button, {
          type: "submit",
          size: u,
          color: a.Button.Colors.PRIMARY,
          submitting: p,
          onClick: C,
          "aria-label": d.intl.string(d.t.AUM8hY),
          children: d.intl.string(d.t.AUM8hY),
        });
      }
    },
    870205: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651),
        l = t(481060),
        a = t(984168),
        o = t(314734),
        r = t(388032),
        s = t(853936);
      function c(e) {
        let n,
          { sortOrder: t, onSortOptionClick: c } = e;
        switch (t) {
          case o.bS.POPULAR:
            n = r.intl.string(r.t.SzxiqK);
            break;
          case o.bS.ALPHABETICAL:
            n = r.intl.string(r.t.m8xstr);
        }
        return (0, i.jsx)(l.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(a.Z, {
              sortOrder: t,
              onSortOptionClick: c,
              closePopout: n,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: a } = t;
            return (0, i.jsxs)(l.Button, {
              ...e,
              size: l.Button.Sizes.MIN,
              color: l.Button.Colors.CUSTOM,
              className: s.sortDropdown,
              innerClassName: s.sortDropdownInner,
              "aria-label": r.intl.string(r.t.yeYaHR),
              children: [
                (0, i.jsx)(l.ArrowsUpDownIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: s.sortIconMargin,
                }),
                (0, i.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: n,
                }),
                a
                  ? (0, i.jsx)(l.ChevronSmallUpIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    })
                  : (0, i.jsx)(l.ChevronSmallDownIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    }),
              ],
            });
          },
        });
      }
    },
    984168: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        a = t.n(l),
        o = t(481060),
        r = t(314734),
        s = t(388032),
        c = t(283437);
      function d(e) {
        let { sortOrder: n, onSortOptionClick: t, closePopout: l } = e,
          d = (e) => {
            t(e), l();
          };
        return (0, i.jsx)("div", {
          className: a()(r.Jh, c.container),
          children: (0, i.jsx)(o.Menu, {
            navId: "command-list-sort",
            "aria-label": s.intl.string(s.t.Ugo9ub),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, i.jsxs)(o.MenuGroup, {
              label: s.intl.string(s.t.yeYaHR),
              children: [
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "sort-by-popular",
                  group: "sort-by",
                  label: s.intl.string(s.t.SzxiqK),
                  action: () => d(r.bS.POPULAR),
                  checked: n === r.bS.POPULAR,
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "sort-by-alphabetical",
                  group: "sort-by",
                  label: s.intl.string(s.t.m8xstr),
                  action: () => d(r.bS.ALPHABETICAL),
                  checked: n === r.bS.ALPHABETICAL,
                }),
              ],
            }),
          }),
        });
      }
    },
    561160: function (e, n, t) {
      t.d(n, {
        A: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(780384),
        a = t(481060),
        o = t(410030),
        r = t(176412),
        s = t(48097),
        c = t(983008),
        d = t(478408);
      function u(e) {
        let { searchQuery: n, textContent: t, type: u } = e,
          m = (0, o.ZP)(),
          p = (0, l.ap)(m) ? d : c;
        return (
          (0, r.Bm)(u, n),
          (0, i.jsxs)("div", {
            className: s.emptyStateContainer,
            children: [
              (0, i.jsx)("img", {
                className: s.emptyStateImage,
                src: p,
                alt: "empty state",
              }),
              (0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: t,
              }),
            ],
          })
        );
      }
    },
    361917: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return en;
        },
      }),
        t(47120),
        t(653041),
        t(789020);
      var i = t(200651),
        l = t(192379),
        a = t(392711),
        o = t.n(a),
        r = t(228458),
        s = t(535655),
        c = t(754738),
        d = t(727241),
        u = t(973693),
        m = t(912370),
        p = t(873199),
        h = t(442837),
        f = t(481060),
        C = t(911969),
        v = t(115130),
        x = t(566620),
        _ = t(127255),
        N = t(880308),
        A = t(427996),
        I = t(367907),
        E = t(10718),
        g = t(895924),
        b = t(674588),
        P = t(368862),
        y = t(34674),
        S = t(835473),
        j = t(857192),
        T = t(630388),
        L = t(823379),
        R = t(541099),
        M = t(827498),
        Z = t(87005),
        k = t(219066),
        O = t(106066),
        U = t(783097),
        B = t(695676),
        D = t(98880),
        w = t(804307),
        H = t(888617),
        V = t(561160),
        W = t(41558),
        F = t(105862),
        G = t(28147),
        z = t(314734),
        Y = t(981631),
        X = t(689079),
        q = t(388032),
        J = t(105328);
      let Q = [],
        K = [, , , ,].fill(0).map((e, n) => n),
        $ = [
          {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: D.U4.MEDIUM_BANNER,
          },
          { cards: [, , , ,].fill(0).map((e, n) => n), look: D.U4.ROW },
          { cards: [, , , ,].fill(0).map((e, n) => n), look: D.U4.ROW },
        ],
        ee = u.Y.APP_LAUNCHER_IN_TEXT;
      function en(e) {
        let {
            context: n,
            entrypoint: t,
            searchQuery: a,
            setSearchQuery: o,
            setScroller: r,
            isScrollCloseToBottom: s,
          } = e,
          c = (0, h.e7)([v.Z], () => v.Z.getIsEnabled(), []),
          d =
            t === M._b.TEXT &&
            "channel" === n.type &&
            null != n.channel &&
            !n.channel.isPrivate(),
          u = (0, U.Yn)(t),
          m = !(0, U.Yn)(t),
          p = t === M._b.TEXT,
          [C, _] = ec(!0),
          [N, A] = ec(d),
          [I, E] = ec(u),
          [g, b] = ec(m),
          P = C && N && I && g,
          y = (u || d) && !P,
          S = m && c;
        l.useEffect(() => {
          var e;
          let t =
            "channel" === n.type
              ? null === (e = n.channel) || void 0 === e
                ? void 0
                : e.guild_id
              : void 0;
          (0, x.w1)({ guildId: t, force: !0 });
        }, [n]),
          l.useEffect(() => {
            t === M._b.VOICE && x.ux();
          }, [t]);
        let j = a.length > 0;
        return (0, i.jsxs)("div", {
          className: J.container,
          children: [
            S ? (0, i.jsx)(et, {}) : null,
            (0, i.jsx)(ei, {
              searchQuery: a,
              setSearchQuery: o,
              placeholder: p
                ? q.intl.string(q.t.ziyFv7)
                : q.intl.string(q.t["pw+r5e"]),
            }),
            (0, i.jsx)(f.Scroller, {
              ref: r,
              className: J.scrollableContent,
              fade: !0,
              children: j
                ? (0, i.jsx)(G.Z, {
                    context: n,
                    query: a,
                    entrypoint: t,
                    isScrollCloseToBottom: s,
                  })
                : (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(el, {
                        context: n,
                        entrypoint: t,
                        onEmptyState: _,
                      }),
                      d &&
                        "channel" === n.type &&
                        (0, i.jsx)(eo, { context: n, onEmptyState: A }),
                      u &&
                        (0, i.jsx)(er, {
                          context: n,
                          entrypoint: t,
                          onEmptyState: E,
                        }),
                      m && (0, i.jsx)(ea, { context: n, onEmptyState: b }),
                      P &&
                        (0, i.jsx)(V.A, {
                          type: M.LG.HOME_EMPTY,
                          textContent:
                            t === M._b.TEXT
                              ? q.intl.string(q.t.iKZctb)
                              : q.intl.string(q.t.RL7Ncn),
                        }),
                      y && (0, i.jsx)(F.Z, {}),
                    ],
                  }),
            }),
          ],
        });
      }
      function et() {
        return (0, i.jsxs)("div", {
          className: J.developerShelfControlsContainer,
          children: [
            (0, i.jsx)(f.Text, {
              className: J.developerShelfControlsLabel,
              variant: "text-sm/normal",
              children: q.intl.string(q.t.tZ3FNj),
            }),
            (0, i.jsx)(A.W, { hideSearch: !0 }),
          ],
        });
      }
      function ei(e) {
        let { searchQuery: n, setSearchQuery: t, placeholder: a } = e,
          r = l.useRef(null),
          [s, c] = l.useState(!1),
          d = l.useMemo(
            () =>
              o().debounce(
                (e) => {
                  (0, I.yw)(Y.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                    query: e,
                    source: R.Z.entrypoint(),
                    location: g.Vh.APP_LAUNCHER_HOME,
                  });
                },
                400,
                { leading: !1, trailing: !0 },
              ),
            [],
          ),
          u = l.useCallback(() => t(""), [t]),
          m = l.useCallback(() => {
            c(!0),
              (0, I.yw)(Y.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                source: R.Z.entrypoint(),
                location: g.Vh.APP_LAUNCHER_HOME,
              });
          }, []),
          p = l.useCallback(() => {
            c(!1);
          }, []),
          h = l.useCallback(
            (e) => {
              !s && m(), t(e), d(e);
            },
            [s, t, m, d],
          );
        return (
          l.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
              !s && m();
            };
            return (
              e.addEventListener("click", n),
              () => {
                e.removeEventListener("click", n);
              }
            );
          }, [s, m]),
          (0, i.jsx)("div", {
            className: J.searchBarContainer,
            children: (0, i.jsx)(f.SearchBar, {
              ref: (e) => {
                var n;
                r.current =
                  null !== (n = null == e ? void 0 : e.containerRef.current) &&
                  void 0 !== n
                    ? n
                    : null;
              },
              placeholder: a,
              query: n,
              onChange: h,
              onClear: u,
              size: f.SearchBar.Sizes.MEDIUM,
              onFocus: p,
              autoFocus: !0,
            }),
          })
        );
      }
      function el(e) {
        let { context: n, entrypoint: t, onEmptyState: a } = e,
          o = t === M._b.VOICE,
          { frecentApps: r, loading: s } = (0, Z.f)({
            context: n,
            onlyActivityApps: o,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
          }),
          c = l.useMemo(() => {
            let e = [];
            for (let n of r)
              null != n.application && e.push({ application: n.application });
            return e;
          }, [r]),
          d = q.intl.string(q.t["s+UQpa"]),
          u = d;
        o && (u = q.intl.string(q.t["2pFD8P"]));
        let { items: m, handleViewMore: p } = ed({
          title: u,
          look: t === M._b.VOICE ? D.U4.LARGE_BANNER : D.U4.ROW,
          items: c,
          limit: 8,
          sectionName: M.L3.RECENT_APPS,
        });
        l.useEffect(() => {
          if (!0 !== s.current)
            0 !== m.length &&
              (0, I.yw)(Y.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: m.length,
                section_name: M.L3.RECENT_APPS,
                location: M.G0.HOME,
                source: t,
              });
        }, [m.length, t, s]);
        let h = s.current,
          f = !h && 0 === m.length;
        return (l.useEffect(() => {
          a(f);
        }, [f, a]),
        !(function (e) {
          let { apps: n, onlyActivityApps: t } = e,
            i = l.useMemo(
              () =>
                t
                  ? n.map((e) => {
                      let { application: n } = e;
                      return n.id;
                    })
                  : [],
              [n, t],
            );
          (0, S.Z)(i);
        })({ apps: m, onlyActivityApps: o }),
        h || f)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(W.Z, {
                  title: d,
                  buttonType: W.Z.buttonTypes.VIEW_MORE,
                  onClickViewButton: p,
                }),
                (0, i.jsx)("div", {
                  className: J.sectionContentContainer,
                  children: (0, i.jsx)("div", {
                    className: J.frecentList,
                    children: m.map((e, t) => {
                      let { application: l } = e;
                      return o
                        ? (0, i.jsx)(
                            D.qR,
                            {
                              context: n,
                              application: l,
                              look: D.U4.ICON,
                              location: M.G0.HOME,
                              sectionName: M.L3.RECENT_APPS,
                              resultsPosition: t,
                              isOneClickCTA: !0,
                              fetchesApplication: !1,
                            },
                            l.id,
                          )
                        : (0, i.jsx)(
                            D.kA,
                            {
                              context: n,
                              application: l,
                              look: D.U4.ICON,
                              location: M.G0.HOME,
                              sectionName: M.L3.RECENT_APPS,
                              resultsPosition: t,
                            },
                            l.id,
                          );
                    }),
                  }),
                }),
              ],
            });
      }
      function ea(e) {
        var n;
        let { context: t, onEmptyState: a } = e;
        (0, N.g)();
        let o = (0, _.Z)({
            guildId:
              "channel" === t.type
                ? null === (n = t.channel) || void 0 === n
                  ? void 0
                  : n.getGuildId()
                : void 0,
          }),
          r = D.U4.LARGE_BANNER,
          { trackSectionImpressionRef: s } = (0, H.Z)({
            sectionName: M.L3.ACTIVITIES,
            numItems: o.length,
            numVisibleItems: o.length,
          }),
          c = (0, O.s)("ActivitiesShelfSection"),
          d = 0 === o.length;
        return (l.useEffect(() => {
          a(d);
        }, [a, d]),
        d)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  ref: (e) => (s.current = e),
                  children: (0, i.jsx)(W.Z, {
                    title: q.intl.string(q.t.shUONj),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: J.sectionTwoColumnContentContainer,
                  children: o.map((e, n) => {
                    let { application: l } = e;
                    return (0, i.jsx)(
                      D.qR,
                      {
                        context: t,
                        application: l,
                        look: r,
                        location: g.Vh.APP_LAUNCHER_HOME,
                        sectionName: M.L3.ACTIVITIES,
                        resultsPosition: n,
                        sectionOverallPosition: 0,
                        isOneClickCTA: !c,
                        fetchesApplication: !1,
                      },
                      l.id,
                    );
                  }),
                }),
              ],
            });
      }
      function eo(e) {
        let { context: n, onEmptyState: t } = e,
          a = M.L3.APPS_IN_THIS_SERVER,
          { appsInThisServer: o, isLoading: r } = (0, k.Z)({ context: n }),
          { items: s, handleViewMore: c } = ed({
            title: q.intl.string(q.t.KfkuGR),
            look: D.U4.ROW,
            items: o,
            limit: 4,
            sectionName: a,
          }),
          { trackSectionImpressionRef: d } = (0, H.Z)({
            sectionName: a,
            numItems: o.length,
            numVisibleItems: s.length,
          }),
          u = !r && 0 === s.length;
        return (l.useEffect(() => {
          t(u);
        }, [u, t]),
        u)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  ref: (e) => (d.current = e),
                  children: (0, i.jsx)(W.Z, {
                    title: q.intl.string(q.t.KfkuGR),
                    buttonType: W.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: c,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: J.sectionRowsContentContainer,
                  children: r
                    ? K.map((e) => (0, i.jsx)(w.Z, { look: D.U4.ROW }, e))
                    : s.map((e, t) => {
                        let { application: l } = e;
                        return null != l
                          ? (0, i.jsx)(
                              D.kA,
                              {
                                context: n,
                                application: l,
                                look: D.U4.ROW,
                                sectionName: a,
                                resultsPosition: t,
                                location: g.Vh.APP_LAUNCHER_HOME,
                              },
                              l.id,
                            )
                          : null;
                      }),
                }),
              ],
            });
      }
      function er(e) {
        let { context: n, entrypoint: t, onEmptyState: a } = e,
          {
            fetchState: o,
            recommendationsSections: d,
            isInstallOnDemand: u,
          } = (function (e) {
            let { context: n, location: t } = e,
              i = (0, h.e7)(
                [j.default],
                () => j.default.onlyShowPreviewAppCollections,
              )
                ? s.E.PREVIEW
                : s.E.ACTIVE;
            l.useEffect(() => {
              (0, b.XK)({ surface: ee, activeState: i });
            }, [i]);
            let { sectionDescriptors: a } = E.wi({
                context: n,
                filters: { commandTypes: [C.yU.CHAT] },
                options: {
                  placeholderCount: 0,
                  limit: X.tn,
                  includeFrecency: !0,
                },
                allowFetch: !0,
              }),
              o = l.useCallback(
                (e) => !(null != a.find((n) => n.id === e.id)),
                [a],
              ),
              c = (0, h.e7)([P.Z], () =>
                P.Z.getFetchState({ surface: ee, activeState: i }),
              ),
              d = (0, h.e7)([P.Z], () =>
                P.Z.getCollections({ surface: ee, activeState: i }),
              ),
              u = t === r.I.APP_LAUNCHER_VOICE;
            return {
              fetchState: c,
              recommendationsSections: l.useMemo(
                () => (u ? (0, U.pF)(d) : d),
                [d, u],
              ),
              isInstallOnDemand: o,
            };
          })({
            context: n,
            location:
              t === M._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE,
          }),
          p = (function (e) {
            var n;
            let { context: t, recommendationsSections: i } = e;
            (0, N.g)();
            let a = (0, _.Z)({
              guildId:
                "channel" === t.type
                  ? null === (n = t.channel) || void 0 === n
                    ? void 0
                    : n.getGuildId()
                  : void 0,
            });
            return l.useMemo(() => {
              if (
                !i.some((e) =>
                  (0, T.yE)(e.flags, c.b.APPENDS_REMAINING_ACTIVITIES),
                )
              )
                return Q;
              let e = new Set();
              return (
                i.forEach((n) => {
                  n.application_directory_collection_items.forEach((n) => {
                    n.type === m.C.APPLICATION && e.add(n.application.id);
                  });
                }),
                a.filter((n) => !e.has(n.application.id))
              );
            }, [i, a]);
          })({ context: n, recommendationsSections: d }),
          f = o === P.M.FETCHING,
          v = !f && 0 === d.length;
        return (l.useEffect(() => {
          a(v);
        }, [v, a]),
        v)
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: f
                ? $.map((e, n) => {
                    let { cards: t, look: l } = e;
                    return (0, i.jsxs)(
                      "div",
                      {
                        children: [
                          (0, i.jsx)(W.Z.Loading, {}),
                          (0, i.jsx)("div", {
                            className:
                              l === D.U4.ROW
                                ? J.sectionRowsContentContainer
                                : J.sectionTwoColumnContentContainer,
                            children: t.map((e) =>
                              (0, i.jsx)(w.Z, { look: l }, e),
                            ),
                          }),
                        ],
                      },
                      n,
                    );
                  })
                : d.map((e, t) =>
                    (0, i.jsx)(
                      es,
                      {
                        recommendationsSection: e,
                        remainingActivities: p,
                        isInstallOnDemand: u,
                        position: t,
                        context: n,
                      },
                      e.id,
                    ),
                  ),
            });
      }
      function es(e) {
        let n,
          t,
          {
            recommendationsSection: a,
            remainingActivities: o,
            isInstallOnDemand: r,
            position: s,
            context: u,
          } = e,
          h = a.title;
        switch (a.type) {
          case p.o.BANNER_CARDS:
            n = D.U4.LARGE_BANNER;
            break;
          case p.o.SMALL_BANNER_CARDS:
            n = D.U4.MEDIUM_BANNER;
            break;
          default:
            n = D.U4.ROW;
        }
        let f = l.useMemo(() => {
            let e = a.application_directory_collection_items
              .map((e) => {
                if (e.type === m.C.APPLICATION)
                  return {
                    collectionItemId: e.id,
                    collectionItemImageHash: e.image_hash,
                    showsPromoted: (0, T.yE)(e.flags, d.q.PROMOTED),
                    application: e.application,
                    installOnDemand: r(e.application),
                  };
              })
              .filter(L.lm);
            return (
              (0, T.yE)(a.flags, c.b.APPENDS_REMAINING_ACTIVITIES) &&
                e.push(
                  ...o.map((e) => {
                    let { application: n } = e;
                    return {
                      collectionItemId: void 0,
                      collectionItemImageHash: void 0,
                      showsPromoted: !1,
                      application: n,
                      installOnDemand: !0,
                    };
                  }),
                ),
              e
            );
          }, [r, a.application_directory_collection_items, a.flags, o]),
          C = a.id;
        switch (a.type) {
          case p.o.BANNER_CARDS:
          case p.o.SMALL_BANNER_CARDS:
            t = 6;
            break;
          case p.o.EXPANDABLE_LIST:
          default:
            t = 4;
        }
        let { items: v, handleViewMore: x } = ed({
            title: h,
            look: n,
            items: f,
            limit: t,
            sectionName: C,
            sectionOverallPosition: s,
          }),
          { trackSectionImpressionRef: _ } = (0, H.Z)({
            sectionName: C,
            numItems: f.length,
            numVisibleItems: v.length,
          }),
          N = a.type !== p.o.SMALL_BANNER_CARDS;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", {
              ref: (e) => (_.current = e),
              children: (0, i.jsx)(W.Z, {
                title: a.title,
                buttonType: W.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: x,
              }),
            }),
            (0, i.jsx)("div", {
              className:
                n === D.U4.ROW
                  ? J.sectionRowsContentContainer
                  : J.sectionTwoColumnContentContainer,
              children: v.map((e, t) => {
                let l,
                  {
                    collectionItemId: a,
                    collectionItemImageHash: o,
                    application: r,
                    installOnDemand: c,
                    showsPromoted: d,
                  } = e;
                return (
                  null != a &&
                    null != o &&
                    (l = (0, y.$_)({
                      itemId: a,
                      hash: o,
                      containerWidth: z.Gy,
                    })),
                  (0, i.jsx)(
                    D.kA,
                    {
                      context: u,
                      application: r,
                      look: n,
                      sectionName: C,
                      resultsPosition: t,
                      location: g.Vh.APP_LAUNCHER_HOME,
                      installOnDemand: c,
                      enableVideoBanner: N,
                      sectionOverallPosition: s,
                      overrideImageUrl: l,
                      showsPromoted: d,
                    },
                    "".concat(t, "-").concat(r.id),
                  )
                );
              }),
            }),
          ],
        });
      }
      function ec(e) {
        let [n, t] = l.useState(!e);
        return [
          n,
          l.useCallback(function () {
            let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            t(e);
          }, []),
        ];
      }
      function ed(e) {
        let {
            title: n,
            look: t,
            items: i,
            limit: a,
            sectionName: o,
            sectionOverallPosition: r,
          } = e,
          { pushHistory: s } = (0, B.hH)();
        return l.useMemo(
          () =>
            i.length <= a
              ? { items: i, handleViewMore: void 0 }
              : {
                  items: i.slice(0, a),
                  handleViewMore: () => {
                    (0, I.yw)(Y.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                      section_name: o,
                      source: R.Z.entrypoint(),
                      num: i.length,
                    }),
                      s({
                        type: B.gc.LIST,
                        title: n,
                        look: t,
                        items: i,
                        sectionName: o,
                        sectionOverallPosition: r,
                      });
                  },
                },
          [i, a, o, s, n, t, r],
        );
      }
    },
    41558: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i,
        l,
        a = t(200651),
        o = t(192379),
        r = t(481060),
        s = t(388032),
        c = t(138133);
      function d(e) {
        let { title: n, buttonType: t, onClickViewButton: i } = e;
        return (0, a.jsxs)("div", {
          className: c.header,
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: n,
            }),
            null != t &&
              null != i &&
              (0, a.jsx)(r.Clickable, {
                className: c.viewMore,
                onClick: i,
                "aria-label": s.intl.formatToPlainString(s.t["bj/2kZ"], {
                  title: n,
                }),
                children: (0, a.jsx)(r.Text, {
                  variant: "text-md/medium",
                  color: "text-brand",
                  children:
                    0 === t
                      ? s.intl.format(s.t.gVw57u, {})
                      : s.intl.string(s.t.nPGLFR),
                }),
              }),
          ],
        });
      }
      ((i = l || (l = {}))[(i.VIEW_MORE = 0)] = "VIEW_MORE"),
        (i[(i.VIEW_LESS = 1)] = "VIEW_LESS"),
        (d.buttonTypes = l),
        (d.Loading = function () {
          let e = o.useMemo(
            () => ({ width: "".concat(10 + 20 * Math.random(), "%") }),
            [],
          );
          return (0, a.jsx)("div", {
            className: c.loadingHeader,
            style: e,
            children: (0, a.jsx)(r.Text, {
              className: c.hidden,
              variant: "text-md/medium",
              color: "header-primary",
              children: "_",
            }),
          });
        });
    },
    105862: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(780384),
        o = t(481060),
        r = t(410030),
        s = t(782568),
        c = t(63063),
        d = t(827498),
        u = t(888617),
        m = t(981631),
        p = t(388032),
        h = t(860156),
        f = t(983008),
        C = t(478408);
      function v(e) {
        let { showImage: n = !0, padding: t = !1 } = e,
          v = (0, r.ZP)(),
          x = (0, a.ap)(v) ? C : f,
          _ = l.useCallback(() => {
            (0, s.Z)(c.Z.getAppsSupportURL(m.BhN.APPS_LEARN_MORE));
          }, []),
          { trackSectionImpressionRef: N } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
          });
        return (0, i.jsx)("div", {
          className: t ? h.containerPadding : void 0,
          children: (0, i.jsxs)("div", {
            ref: (e) => (N.current = e),
            className: h.container,
            children: [
              n &&
                (0, i.jsx)("img", {
                  className: h.image,
                  src: x,
                  alt: "",
                  "aria-hidden": !0,
                }),
              (0, i.jsxs)("div", {
                className: h.body,
                children: [
                  (0, i.jsx)(o.Heading, {
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: p.intl.string(p.t["kw8/ER"]),
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    children: p.intl.string(p.t.GZoV1N),
                  }),
                ],
              }),
              (0, i.jsx)(o.Button, {
                size: o.Button.Sizes.MEDIUM,
                "aria-label": p.intl.formatToPlainString(p.t.xx5Sur, {
                  sectionTitle: p.intl.string(p.t["kw8/ER"]),
                  sectionBody: p.intl.string(p.t.GZoV1N),
                }),
                onClick: _,
                children: p.intl.string(p.t.Ye51oa),
              }),
            ],
          }),
        });
      }
    },
    106771: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        o = t(239091),
        r = t(973616),
        s = t(783097),
        c = t(176412),
        d = t(570949),
        u = t(753972),
        m = t(532309),
        p = t(51688),
        h = t(413097);
      function f(e) {
        var n;
        let {
            command: t,
            application: f,
            onClick: C,
            query: v,
            searchResultsPosition: x,
          } = e,
          _ = l.useCallback(
            (e) => {
              if ((0, s.BQ)(f)) {
                let n = f instanceof r.ZP ? f : r.ZP.createFromServer(f);
                (0, o.vq)(e, (e) => (0, i.jsx)(d.Z, { application: n, ...e }));
              }
            },
            [f],
          ),
          {
            iconURL: N,
            name: A,
            description: I,
          } = l.useMemo(() => (0, s.sl)(f, { fakeAppIconURL: h }), [f]),
          E = l.useMemo(() => {
            var e;
            let n =
              null !== (e = null == t ? void 0 : t.displayDescription) &&
              void 0 !== e
                ? e
                : I;
            return null == n ? null : (0, c.ae)(n, void 0);
          }, [I, null == t ? void 0 : t.displayDescription]),
          { trackSearchResultsItemImpressionRef: g } = (0, m.Z)({
            applicationId: f.id,
            commandId: null == t ? void 0 : t.id,
            query: v,
            searchResultsPosition: x,
          });
        return (0, i.jsx)(a.Clickable, {
          className: p.clickable,
          innerRef: (e) => (g.current = e),
          onClick: C,
          onContextMenu: _,
          children: (0, i.jsxs)(a.FocusBlock, {
            className: p.focusBlock,
            children: [
              (0, i.jsx)(u.Z, {
                src: N,
                className: p.icon,
                "aria-hidden": !0,
                rendersPlaceholder: !0,
              }),
              (0, i.jsxs)("div", {
                className: p.cmdDetails,
                children: [
                  (0, i.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    lineClamp: 1,
                    children:
                      null !== (n = null == t ? void 0 : t.displayName) &&
                      void 0 !== n
                        ? n
                        : A,
                  }),
                  (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: E,
                  }),
                ],
              }),
              null != t
                ? (0, i.jsx)(a.Text, {
                    className: p.cmdAppName,
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: A,
                  })
                : null,
              (0, i.jsx)("div", { className: p.underline }),
            ],
          }),
        });
      }
    },
    79984: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(442837),
        s = t(481060),
        c = t(607070),
        d = t(14596);
      function u() {
        let e = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
          { styleLarge: n, styleSmall: t } = l.useMemo(
            () => ({
              styleLarge: { width: "".concat(10 + 50 * Math.random(), "%") },
              styleSmall: { width: "".concat(30 + 60 * Math.random(), "%") },
            }),
            [],
          );
        return (0, i.jsxs)("div", {
          className: o()(d.container, { [d.noAnimation]: e }),
          children: [
            (0, i.jsx)("div", { className: d.iconPlaceholder }),
            (0, i.jsxs)("div", {
              className: d.textContainer,
              children: [
                (0, i.jsx)("div", {
                  className: d.textPlaceholder,
                  style: n,
                  children: (0, i.jsx)(s.Heading, {
                    className: d.hidden,
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: "_",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: d.textPlaceholder,
                  style: t,
                  children: (0, i.jsx)(s.Text, {
                    className: d.hidden,
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: "_",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", { className: d.underline }),
          ],
        });
      }
    },
    28147: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(392711),
        o = t.n(a),
        r = t(209173),
        s = t(110924),
        c = t(367907),
        d = t(555573),
        u = t(895924),
        m = t(809547),
        p = t(583027),
        h = t(585483),
        f = t(499254),
        C = t(541099),
        v = t(827498),
        x = t(392370),
        _ = t(98880),
        N = t(804307),
        A = t(520315),
        I = t(532309),
        E = t(561160),
        g = t(41558),
        b = t(106771),
        P = t(79984),
        y = t(314734),
        S = t(981631),
        j = t(388032),
        T = t(722029);
      let L = Array(6)
          .fill(0)
          .map((e, n) => n),
        R = [, , ,].fill(0).map((e, n) => n),
        M = [, , , ,].fill(0).map((e, n) => n);
      function Z(e) {
        return (0, i.jsx)(k, { ...e });
      }
      function k(e) {
        let {
            context: n,
            query: t,
            entrypoint: a,
            isScrollCloseToBottom: s,
          } = e,
          c = a === v._b.TEXT,
          d = a === v._b.TEXT,
          {
            loading: u,
            isEmptyState: p,
            commandResults: h,
            hasCommandResults: f,
            applicationResults: C,
          } = (0, x.pe)({
            context: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d,
          }),
          {
            fetchState: _,
            applicationResults: N,
            fetchNextPage: A,
          } = (0, x.Q2)({
            query: t,
            context: n,
            fetches: !0,
            pageLimit: 5,
            entrypoint: a,
          });
        l.useEffect(() => {
          s && _ === m.M.FETCHED && A();
        }, [A, _, s]);
        let I = null == _ || _ === m.M.FETCHING,
          g = l.useMemo(() => {
            let e = C.map((e) => ({ application: e, installOnDemand: !0 })),
              n = new Set(
                C.map((e) => {
                  let { id: n } = e;
                  return n;
                }),
              );
            return [
              ...e,
              ...o().compact(
                N.map((e) =>
                  e.type === r.s.CONNECTION || n.has(e.data.id)
                    ? null
                    : { application: e.data, installOnDemand: !0 },
                ),
              ),
            ];
          }, [N, C]),
          b = g.length > 0,
          P = p && !b && !I;
        return u
          ? (0, i.jsx)(w, {})
          : P
            ? (0, i.jsx)(E.A, {
                type: v.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent:
                  a === v._b.TEXT
                    ? j.intl.string(j.t.LSNOYW)
                    : j.intl.string(j.t.Clu7Qk),
              })
            : (0, i.jsxs)("div", {
                children: [
                  f &&
                    (0, i.jsx)(O, { context: n, commandResults: h, query: t }),
                  (b || I) &&
                    (0, i.jsx)(B, {
                      context: n,
                      applicationResults: g,
                      includePlaceholder: I,
                      query: t,
                      searchesBots: d,
                    }),
                ],
              });
      }
      function O(e) {
        var n, t;
        let { context: a, commandResults: o, query: r } = e,
          m = o.length > 4,
          x = l.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
          [_, N] = l.useState(!1),
          I = null !== (n = (0, s.Z)(_)) && void 0 !== n ? n : _,
          E = l.useCallback(() => N((e) => !e), []),
          P = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
          L = _ && !P;
        l.useLayoutEffect(() => N(!1), [P]);
        let {
          ref: R,
          isTransitioning: M,
          onTransitionEnd: Z,
        } = (0, A.Z)({
          key: r,
          isExpanded: L,
          durationMs: 200,
          maxAnimationHeight: y.K7,
        });
        l.useEffect(() => {
          !I &&
            _ &&
            (0, c.yw)(S.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
              section_name: v.L3.SEARCH,
              source: C.Z.entrypoint(),
              num: o.length,
            });
        }, [o.length, I, _]);
        let k = L || M,
          O = L ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
          U = k ? o : x;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(g.Z, {
              title: j.intl.string(j.t["0hKkS0"]),
              buttonType: O,
              onClickViewButton: m ? E : void 0,
            }),
            (0, i.jsx)("div", {
              className: T.sectionContentContainer,
              ref: R,
              onTransitionEnd: Z,
              children: U.map((e, n) => {
                let { command: t, application: l, section: o } = e;
                return (0, i.jsx)(
                  b.Z,
                  {
                    command: t,
                    application: l,
                    query: r,
                    searchResultsPosition: n,
                    onClick: () => {
                      let e = C.Z.entrypoint();
                      f.yT(v.ti.DISMISSED),
                        (0, p.Mo)({
                          command: t,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: v.L3.SEARCH,
                        }),
                        "channel" === a.type &&
                          (d.Po({
                            channelId: a.channel.id,
                            command: t,
                            section: o,
                            location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                            triggerSection: void 0,
                            queryLength: r.length,
                            sectionName: v.L3.SEARCH,
                            query: r,
                            searchResultsPosition: n,
                            source: e,
                          }),
                          h.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: a.channel.id,
                          }));
                    },
                  },
                  t.id,
                );
              }),
            }),
          ],
        });
      }
      function U(e) {
        let { trackSearchResultsItemImpressionRef: n } = (0, I.Z)({
          applicationId: e.application.id,
          query: e.query,
          searchResultsPosition: e.resultsPosition,
        });
        return (0, i.jsx)("div", {
          className: T.searchOpenAppDetailAppCard,
          ref: (e) => (n.current = e),
          children: (0, i.jsx)(_.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0,
          }),
        });
      }
      function B(e) {
        let {
          context: n,
          applicationResults: t,
          includePlaceholder: l,
          query: a,
          searchesBots: o,
        } = e;
        return o
          ? (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(g.Z, { title: j.intl.string(j.t.PHjkRE) }),
                (0, i.jsxs)("div", {
                  className: T.sectionContentContainer,
                  children: [
                    t.map((e, t) => {
                      let { application: l, installOnDemand: o } = e;
                      return (0, i.jsx)(
                        D,
                        {
                          context: n,
                          application: l,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: v.L3.SEARCH,
                          resultsPosition: t,
                          installOnDemand: o,
                          query: a,
                        },
                        l.id,
                      );
                    }),
                    l && R.map((e) => (0, i.jsx)(P.Z, {}, e)),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(g.Z, { title: j.intl.string(j.t.shUONj) }),
                (0, i.jsxs)("div", {
                  className: T.sectionActivitiesContentContainer,
                  children: [
                    t.map((e, t) => {
                      let { application: l, installOnDemand: o } = e;
                      return (0, i.jsx)(
                        U,
                        {
                          context: n,
                          application: l,
                          look: _.U4.LARGE_BANNER,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: v.L3.SEARCH,
                          resultsPosition: t,
                          installOnDemand: o,
                          query: a,
                        },
                        l.id,
                      );
                    }),
                    l &&
                      M.map((e) =>
                        (0, i.jsx)(N.Z, { look: _.U4.LARGE_BANNER }, e),
                      ),
                  ],
                }),
              ],
            });
      }
      function D(e) {
        let n = (0, _.cG)(e);
        return (0, i.jsx)(b.Z, {
          application: e.application,
          onClick: n,
          query: e.query,
          searchResultsPosition: e.resultsPosition,
        });
      }
      function w() {
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(g.Z, { title: j.intl.string(j.t["0hKkS0"]) }),
            (0, i.jsx)("div", {
              className: T.sectionContentContainer,
              children: L.map((e) => (0, i.jsx)(P.Z, {}, e)),
            }),
            (0, i.jsx)(g.Z, { title: j.intl.string(j.t.PHjkRE) }),
            (0, i.jsx)("div", {
              className: T.sectionContentContainer,
              children: R.map((e) => (0, i.jsx)(P.Z, {}, e)),
            }),
          ],
        });
      }
    },
    684256: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        o = t.n(a),
        r = t(481060),
        s = t(895924),
        c = t(827498),
        d = t(106066),
        u = t(98880),
        m = t(772606),
        p = t(388032),
        h = t(661630);
      function f(e) {
        let {
            context: n,
            entrypoint: t,
            title: a,
            look: f,
            items: C,
            sectionName: v,
            sectionOverallPosition: x,
          } = e,
          _ = (0, d.s)("AppLauncherApplicationListViewScreen"),
          N = l.useMemo(() => (t === c._b.TEXT ? u.kA : u.qR), [t]);
        return (0, i.jsxs)("section", {
          className: h.container,
          "aria-label": p.intl.formatToPlainString(p.t.iobNIC, {
            sectionTitle: a,
          }),
          children: [
            (0, i.jsxs)("div", {
              className: h.header,
              children: [
                (0, i.jsx)(m.Z, { className: h.backButton }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/medium",
                  color: "header-primary",
                  children: a,
                }),
              ],
            }),
            (0, i.jsx)(r.Scroller, {
              children: (0, i.jsx)("div", {
                className: o()({
                  [h.appGrid]: f !== u.U4.ROW,
                  [h.rows]: f === u.U4.ROW,
                }),
                children: C.map((e, t) => {
                  let {
                    application: l,
                    installOnDemand: a,
                    showsPromoted: o,
                  } = e;
                  return (0, i.jsx)(
                    N,
                    {
                      context: n,
                      application: l,
                      look: f,
                      sectionName: v,
                      resultsPosition: t,
                      location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                      installOnDemand: a,
                      isOneClickCTA: _,
                      sectionOverallPosition: x,
                      showsPromoted: o,
                    },
                    l.id,
                  );
                }),
              }),
            }),
          ],
        });
      }
    },
    148958: function (e, n, t) {
      t.d(n, {
        h: function () {
          return d;
        },
      }),
        t(47120),
        t(653041);
      var i = t(192379),
        l = t(442837),
        a = t(581364),
        o = t(675478),
        r = t(709054),
        s = t(822245),
        c = t(526761);
      function d(e, n) {
        i.useEffect(() => {
          o.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
        }, []);
        let t = (0, l.e7)([s.Z], () =>
            s.Z.getApplicationFrecencyWithoutLoadingLatest(),
          ),
          d = i.useMemo(
            () =>
              null == n || 0 === n.length
                ? e
                : e.map((e) => {
                    var t;
                    return {
                      ...e,
                      isUserApp:
                        null !==
                          (t =
                            null == n
                              ? void 0
                              : n.some((n) => n.application.id === e.id)) &&
                        void 0 !== t &&
                        t,
                    };
                  }),
            [e, n],
          ),
          u = i.useMemo(
            () =>
              null == n
                ? void 0
                : n.filter((n) => !e.some((e) => e.id === n.application.id)),
            [e, n],
          ),
          m = i.useMemo(() => {
            var e;
            null == u ||
              u.forEach((e) => {
                let n = r.default.extractTimestamp(e.id);
                null == t.getEntry(e.application.id) &&
                  t.track(e.application.id, n);
              }),
              t.compute();
            let n =
                null !==
                  (e =
                    null == u
                      ? void 0
                      : u.map((e) => (0, a.X0)(e.application, !0))) &&
                void 0 !== e
                  ? e
                  : [],
              i = [...d];
            return (
              i.push(...n),
              i.sort((e, n) => {
                var i, l;
                let a =
                  (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) -
                  (null !== (l = t.getScore(e.id)) && void 0 !== l ? l : 0);
                return 0 !== a ? a : e.name.localeCompare(n.name);
              }),
              i
            );
          }, [d, t, u]);
        return i.useMemo(() => {
          var e, i;
          let l, a;
          null == n ||
            n.forEach((e) => {
              let n = r.default.extractTimestamp(e.id);
              (null == a || n > a) && ((l = e), (a = n));
            }),
            d.forEach((e) => {
              var n, i;
              let o = Math.max(
                ...(null !==
                  (i =
                    null === (n = t.getEntry(e.id)) || void 0 === n
                      ? void 0
                      : n.recentUses) && void 0 !== i
                  ? i
                  : []),
              );
              (null == a || o > a) && ((l = e), (a = o));
            });
          let o =
              null !==
                (i =
                  null == l
                    ? void 0
                    : null === (e = l.application) || void 0 === e
                      ? void 0
                      : e.id) && void 0 !== i
                ? i
                : "",
            s = m.filter((e) => e.id === o);
          return [...s, ...m.filter((e) => e.id !== o)];
        }, [m, d, t, n]);
      }
    },
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(653041);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        o = t(481060),
        r = t(139387),
        s = t(230711),
        c = t(213459),
        d = t(434404),
        u = t(795594),
        m = t(430824),
        p = t(496675),
        h = t(981631),
        f = t(388032);
      function C(e) {
        var n;
        let {
            user: C,
            application: v,
            guildId: x,
            context: _,
            onItemClick: N,
          } = e,
          A =
            null !== (n = null == v ? void 0 : v.id) && void 0 !== n
              ? n
              : null == C
                ? void 0
                : C.id,
          I = m.Z.getGuild(x),
          E = (0, a.e7)([p.Z], () =>
            null != I ? p.Z.can(h.Plq.MANAGE_GUILD, I) : null,
          ),
          g = (0, c.LD)(x, !0),
          b = (0, c.PL)(!0, !0),
          { isUserApp: P, isGuildApp: y } = l.useMemo(() => {
            var e, n, t, i;
            if (null == A) return { isGuildApp: !1, isUserApp: !1 };
            let l = Object.values(
                null !==
                  (t =
                    null === (e = g.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              a = Object.values(
                null !==
                  (i =
                    null === (n = b.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: l.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === A
                );
              }),
              isUserApp: a.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === A
                );
              }),
            };
          }, [g, b, A]);
        l.useEffect(() => {
          t(360606);
        }, []);
        let S = l.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              d.Z.open(I.id, h.pNK.INTEGRATIONS),
                r.Z.setSection(h.b4C.APPLICATION, A),
                null == N || N();
          }, [A, null == I ? void 0 : I.id, N]),
          j = l.useCallback(() => {
            s.Z.open(h.oAB.AUTHORIZED_APPS);
            let e = "";
            null != v ? (e = v.name) : null != C && (e = C.username),
              "" !== e && u.J.setState({ searchQuery: e }),
              null == N || N();
          }, [v, N, C]);
        if (_ === h.IlC.POPOUT) return null;
        let T = [];
        return (
          y &&
            E &&
            T.push(
              (0, i.jsx)(
                o.MenuItem,
                {
                  id: "manage-server-integration",
                  label: f.intl.string(f.t.IuSJT0),
                  action: S,
                },
                "manage-server-integration",
              ),
            ),
          P &&
            T.push(
              (0, i.jsx)(
                o.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: f.intl.string(f.t.V8ruv7),
                  action: j,
                },
                "manage-authorized-app",
              ),
            ),
          T
        );
      }
    },
    631827: function (e, n, t) {
      function i(e, n) {
        var t, i, l, a, o;
        let r;
        let s = null !== (t = n.limit) && void 0 !== t ? t : 1 / 0,
          c = (function (e, n) {
            return e.filter((e) => n.every((n) => n(e)));
          })(e, null !== (i = n.filterPredicates) && void 0 !== i ? i : []);
        return (function (e, n, t) {
          let i = [];
          for (let l of e) {
            let e = (function (e, n) {
              return e.sort((e, t) => {
                for (let i of n) {
                  let n = i(e, t);
                  if (0 !== n) return n;
                }
                return 0;
              });
            })(l, n);
            if ((i.push(...e), i.length >= t)) break;
          }
          return i;
        })(
          (r =
            null != n.bucketPredicates && n.bucketPredicates.length > 0
              ? s >= c.length
                ? (function (e, n) {
                    let t = Array(n.length)
                      .fill(null)
                      .map(() => []);
                    for (let i of e)
                      for (let e = 0; e < n.length; e++)
                        if (n[e](i)) {
                          t[e].push(i);
                          break;
                        }
                    return t;
                  })(
                    c,
                    null !== (l = n.bucketPredicates) && void 0 !== l ? l : [],
                  )
                : (function (e, n, t) {
                    let i = [],
                      l = e;
                    for (let e of n) {
                      let n = [],
                        a = [];
                      for (let t of l) e(t) ? a.push(t) : n.push(t);
                      if (
                        (i.push(a),
                        (l = n),
                        i.reduce((e, n) => n.length + e, 0) >= t)
                      )
                        break;
                    }
                    return i;
                  })(
                    c,
                    null !== (a = n.bucketPredicates) && void 0 !== a ? a : [],
                    s,
                  )
              : [c]),
          null !== (o = n.sortComparers) && void 0 !== o ? o : [],
          s,
        ).slice(0, s);
      }
      t.d(n, {
        N: function () {
          return i;
        },
      }),
        t(653041),
        t(47120),
        t(724458);
    },
    754738: function (e, n, t) {
      var i, l;
      t.d(n, {
        b: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.APPENDS_REMAINING_ACTIVITIES = 1)] =
          "APPENDS_REMAINING_ACTIVITIES"),
        (l[(l.DEFAULT = 0)] = "DEFAULT");
    },
    727241: function (e, n, t) {
      var i, l;
      t.d(n, {
        q: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.PROMOTED = 1)] = "PROMOTED"),
        (l[(l.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2)] =
          "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION"),
        (l[(l.DEFAULT = 0)] = "DEFAULT");
    },
    873199: function (e, n, t) {
      var i, l;
      t.d(n, {
        o: function () {
          return i;
        },
      }),
        t(47120),
        ((l = i || (i = {}))[(l.LIST = 1)] = "LIST"),
        (l[(l.LIST_WITH_IMAGE = 2)] = "LIST_WITH_IMAGE"),
        (l[(l.GALLERY = 3)] = "GALLERY"),
        (l[(l.EXPANDABLE_LIST = 4)] = "EXPANDABLE_LIST"),
        (l[(l.BANNER_CARDS = 5)] = "BANNER_CARDS"),
        (l[(l.SMALL_BANNER_CARDS = 6)] = "SMALL_BANNER_CARDS");
    },
    209173: function (e, n, t) {
      var i, l;
      t.d(n, {
        s: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.APPLICATION = 1)] = "APPLICATION"),
        (l[(l.ACTIVITY_APPLICATION = 2)] = "ACTIVITY_APPLICATION"),
        (l[(l.CONNECTION = 3)] = "CONNECTION");
    },
    114228: function (e, n, t) {
      e.exports = {
        container: "container_c4a3bb",
        searchBar: "searchBar_c4a3bb",
      };
    },
    814894: function (e, n, t) {
      e.exports = {
        drawerSizingWrapper: "drawerSizingWrapper_f7506e",
        contentWrapper: "contentWrapper_f7506e",
        slideContent: "slideContent_f7506e",
      };
    },
    330962: function (e, n, t) {
      e.exports = {
        rowIcon: "rowIcon_e5da8b",
        appDetailsRowContainer: "appDetailsRowContainer_e5da8b",
        rowDivider: "rowDivider_e5da8b",
        container: "container_e5da8b",
        containerBorderRadius: "containerBorderRadius_e5da8b",
        rowContainer: "rowContainer_e5da8b",
        containerDisabled: "containerDisabled_e5da8b",
        icon: "icon_e5da8b",
        iconContainer: "iconContainer_e5da8b",
        iconCard: "iconCard_e5da8b",
        darkenImage: "darkenImage_e5da8b",
        bannerImageContainer: "bannerImageContainer_e5da8b",
        mediumBanner: "mediumBanner_e5da8b",
        largeBanner: "largeBanner_e5da8b",
        bannerImage: "bannerImage_e5da8b",
        disableFadeIn: "disableFadeIn_e5da8b",
        bannerUpperRightContainer: "bannerUpperRightContainer_e5da8b",
        promotedLabelWrapperBanner: "promotedLabelWrapperBanner_e5da8b",
        promotedLabelWrapperNonBanner: "promotedLabelWrapperNonBanner_e5da8b",
        appDetailsContainer: "appDetailsContainer_e5da8b",
        appDetails: "appDetails_e5da8b",
        appDetailsHeaderContainer: "appDetailsHeaderContainer_e5da8b",
        bannerImageChildContainer: "bannerImageChildContainer_e5da8b",
        voiceLauncherAppCardContainer: "voiceLauncherAppCardContainer_e5da8b",
        voiceLauncherAppCardButton: "voiceLauncherAppCardButton_e5da8b",
        activityVideoContainer: "activityVideoContainer_e5da8b",
        activityVideo: "activityVideo_e5da8b",
        videoFadeOut: "videoFadeOut_e5da8b",
        tooltipContent: "tooltipContent_e5da8b",
        spinner: "spinner_e5da8b",
        devShelfBadge: "devShelfBadge_e5da8b",
        devShelfIcon: "devShelfIcon_e5da8b",
        staffBadge: "staffBadge_e5da8b",
      };
    },
    660954: function (e, n, t) {
      e.exports = { clickable: "clickable_e82700" };
    },
    61474: function (e, n, t) {
      e.exports = {
        rowDivider: "rowDivider_f8c206",
        rowIconPlaceholder: "rowIconPlaceholder_f8c206",
        appDetailsRowContainer: "appDetailsRowContainer_f8c206",
        loadingAnimation: "loadingAnimation_f8c206",
        noAnimation: "noAnimation_f8c206",
        container: "container_f8c206",
        containerBorderRadius: "containerBorderRadius_f8c206",
        rowContainer: "rowContainer_f8c206",
        bannerImage: "bannerImage_f8c206",
        mediumBanner: "mediumBanner_f8c206",
        largeBanner: "largeBanner_f8c206",
        iconPlaceholder: "iconPlaceholder_f8c206",
        appDetailsContainer: "appDetailsContainer_f8c206",
        textContainer: "textContainer_f8c206",
        textPlaceholder: "textPlaceholder_f8c206",
        hidden: "hidden_f8c206",
      };
    },
    616362: function (e, n, t) {
      e.exports = {
        contentContainer: "contentContainer_f37ac2",
        commandListHeader: "commandListHeader_f37ac2",
        commandContainer: "commandContainer_f37ac2",
        command: "command_f37ac2",
        commandFocusBlock: "commandFocusBlock_f37ac2",
        commandSentCTAButton: "commandSentCTAButton_f37ac2",
        commandTextContainer: "commandTextContainer_f37ac2",
        commandTextContainerPlaceholder:
          "commandTextContainerPlaceholder_f37ac2",
        commandSentCTAButtonInner: "commandSentCTAButtonInner_f37ac2",
      };
    },
    867020: function (e, n, t) {
      e.exports = {
        stickyContainer: "stickyContainer_e46a21",
        stickyBannerContainer: "stickyBannerContainer_e46a21",
        stickyBanner: "stickyBanner_e46a21",
        bannerBackground: "bannerBackground_e46a21",
        backButtonContainer: "backButtonContainer_e46a21",
        moreMenuButtonContainer: "moreMenuButtonContainer_e46a21",
        headerButton: "headerButton_e46a21",
        nameContainer: "nameContainer_e46a21",
        textApplicationName: "textApplicationName_e46a21",
      };
    },
    580062: function (e, n, t) {
      e.exports = {
        container: "container_e80fe9",
        monetizationDisclosureContainerStyle:
          "monetizationDisclosureContainerStyle_e80fe9",
        videoContainer: "videoContainer_e80fe9",
        videoCover: "videoCover_e80fe9",
        video: "video_e80fe9",
        overviewContainerWithVideo: "overviewContainerWithVideo_e80fe9",
        overviewContainerNoVideo: "overviewContainerNoVideo_e80fe9",
        titleContainer: "titleContainer_e80fe9",
        partnerLabelContainer: "partnerLabelContainer_e80fe9",
        tagsContainer: "tagsContainer_e80fe9",
        tagContainer: "tagContainer_e80fe9",
        descriptionContainer: "descriptionContainer_e80fe9",
        primaryEntryPointWarningMessage:
          "primaryEntryPointWarningMessage_e80fe9",
        entrypointContainer: "entrypointContainer_e80fe9",
        developerShelfControlsContainer:
          "developerShelfControlsContainer_e80fe9",
        entryPointContainerFlexChild: "entryPointContainerFlexChild_e80fe9",
        expandableDescriptionClickable: "expandableDescriptionClickable_e80fe9",
        overflowHidden: "overflowHidden_e80fe9",
        developerShelfControls: "developerShelfControls_e80fe9",
        monetizationDisclosureStyle: "monetizationDisclosureStyle_e80fe9",
      };
    },
    370913: function (e, n, t) {
      e.exports = { container: "container_ec8cd2", appIcon: "appIcon_ec8cd2" };
    },
    472033: function (e, n, t) {
      e.exports = {
        clickable: "clickable_e33430",
        container: "container_e33430",
      };
    },
    129571: function (e, n, t) {
      e.exports = { tooltipContent: "tooltipContent_d1928d" };
    },
    853936: function (e, n, t) {
      e.exports = {
        sortDropdown: "sortDropdown_fd3eaf",
        sortDropdownInner: "sortDropdownInner_fd3eaf",
        sortIconMargin: "sortIconMargin_fd3eaf",
      };
    },
    283437: function (e, n, t) {
      e.exports = { container: "container_cf2302" };
    },
    48097: function (e, n, t) {
      e.exports = {
        emptyStateContainer: "emptyStateContainer_d9d1c9",
        emptyStateImage: "emptyStateImage_d9d1c9",
      };
    },
    105328: function (e, n, t) {
      e.exports = {
        container: "container_c7c1c7",
        developerShelfControlsContainer:
          "developerShelfControlsContainer_c7c1c7",
        developerShelfControlsLabel: "developerShelfControlsLabel_c7c1c7",
        searchBarContainer: "searchBarContainer_c7c1c7",
        scrollableContent: "scrollableContent_c7c1c7",
        sectionContentContainer: "sectionContentContainer_c7c1c7",
        sectionTwoColumnContentContainer:
          "sectionTwoColumnContentContainer_c7c1c7 sectionContentContainer_c7c1c7",
        sectionRowsContentContainer:
          "sectionRowsContentContainer_c7c1c7 sectionContentContainer_c7c1c7",
        frecentList: "frecentList_c7c1c7",
      };
    },
    138133: function (e, n, t) {
      e.exports = {
        header: "header_b7ba1b",
        viewMore: "viewMore_b7ba1b",
        loadingHeader: "loadingHeader_b7ba1b",
        hidden: "hidden_b7ba1b",
      };
    },
    860156: function (e, n, t) {
      e.exports = {
        container: "container_fb1469",
        containerPadding: "containerPadding_fb1469",
        image: "image_fb1469",
        body: "body_fb1469",
      };
    },
    51688: function (e, n, t) {
      e.exports = {
        icon: "icon_b78bb6",
        focusBlock: "focusBlock_b78bb6",
        clickable: "clickable_b78bb6",
        underline: "underline_b78bb6",
        cmdDetails: "cmdDetails_b78bb6",
        cmdAppName: "cmdAppName_b78bb6",
      };
    },
    14596: function (e, n, t) {
      e.exports = {
        iconPlaceholder: "iconPlaceholder_a46f56",
        underline: "underline_a46f56",
        container: "container_a46f56",
        noAnimation: "noAnimation_a46f56",
        textContainer: "textContainer_a46f56",
        textPlaceholder: "textPlaceholder_a46f56",
        hidden: "hidden_a46f56",
      };
    },
    722029: function (e, n, t) {
      e.exports = {
        sectionContentContainer: "sectionContentContainer_d193fc",
        sectionActivitiesContentContainer:
          "sectionActivitiesContentContainer_d193fc",
        searchOpenAppDetailAppCard: "searchOpenAppDetailAppCard_d193fc",
      };
    },
    661630: function (e, n, t) {
      e.exports = {
        container: "container_bedaeb",
        header: "header_bedaeb",
        backButton: "backButton_bedaeb",
        appGrid: "appGrid_bedaeb",
        rows: "rows_bedaeb",
      };
    },
  },
]);
//# sourceMappingURL=93010f4ec03f8387501b.js.map
