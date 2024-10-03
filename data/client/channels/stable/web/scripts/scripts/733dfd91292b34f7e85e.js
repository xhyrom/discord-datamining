"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47321"],
  {
    983008: function (e) {
      e.exports = "/assets/eb3bf32fdaa61a5ecc53.svg";
    },
    478408: function (e) {
      e.exports = "/assets/03afde423124b81bde24.svg";
    },
    445392: function (e, n, t) {
      var i,
        a = t(442837),
        l = t(570140);
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
      class c extends (i = a.ZP.PersistedStore) {
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
        new c(l.Z, {
          APPLICATION_COMMAND_USED: function (e) {
            let { command: n } = e;
            (s.lastUsedCommandId = n.id), (s.lastUsedTimeMs = Date.now());
          },
        });
    },
    87005: function (e, n, t) {
      t.d(n, {
        f: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(243814),
        l = t(442837),
        o = t(384275),
        r = t(911969),
        s = t(10718),
        c = t(812236),
        d = t(148958),
        u = t(881998);
      t(445392);
      var m = t(783097),
        p = t(689079);
      let _ = { commandTypes: [r.yU.CHAT, r.yU.PRIMARY_ENTRY_POINT] },
        C = { placeholderCount: 0, limit: p.tn, includeFrecency: !0 };
      function h(e, n) {
        let { sectionDescriptors: t, loading: r } = s.wi(e, _, C);
        return {
          loading: r,
          frecentApps: (function (e, n, t) {
            i.useEffect(() => {
              o.Z.fetch();
            }, []);
            let r = (0, l.Wu)([u.Z], () => {
                var e, n;
                return null !==
                  (n =
                    null === (e = u.Z.getApps()) || void 0 === e
                      ? void 0
                      : e.filter((e) =>
                          e.scopes.includes(a.x.APPLICATIONS_COMMANDS),
                        )) && void 0 !== n
                  ? n
                  : [];
              }),
              s = e.filter(
                (e) => e.id !== p.bi.FRECENCY && e.id !== p.bi.BUILT_IN,
              ),
              _ = (0, d.h)(s, r);
            return i.useMemo(
              () =>
                t
                  ? _.filter(
                      (e) =>
                        null != e.application &&
                        (0, m.ye)(e.application) &&
                        null != (0, c.Xu)(n, e.id),
                    )
                  : _,
              [_, n, t],
            );
          })(t, e, n),
        };
      }
    },
    106066: function (e, n, t) {
      t.d(n, {
        s: function () {
          return l;
        },
      });
      var i = t(695346),
        a = t(424602);
      function l(e) {
        let n = i.Sb.useSetting();
        return (
          a.aq.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .clickOnHomeActivityOpensAppDetail || n
        );
      }
    },
    496158: function (e, n, t) {
      t.d(n, {
        D: function () {
          return l;
        },
      });
      var i = t(470079),
        a = t(430824);
      function l(e) {
        return i.useMemo(() => {
          var n;
          return {
            channel: (n = e),
            guild: null != n.guild_id ? a.Z.getGuild(n.guild_id) : null,
          };
        }, [e]);
      }
    },
    346683: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(542094);
      function l(e) {
        let [n, t] = i.useState(e);
        return (
          i.useLayoutEffect(() => {
            if (e === a.JS.LEAVE) {
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
      var i = t(470079),
        a = t(700089),
        l = t(654455),
        o = t(496158);
      function r(e) {
        let { channel: n, commands: t, limit: r = t.length } = e,
          s = (0, o.D)(n),
          c = (0, a.R)(s),
          d = i.useMemo(() => t.reduce((e, n) => ((e[n.id] = n), e), {}), [t]);
        return i.useMemo(
          () =>
            c
              .map((e) => d[e])
              .filter((e) => null != e)
              .sort((e, n) => {
                let t = l.ZP.getScoreWithoutLoadingLatest(s, e);
                return l.ZP.getScoreWithoutLoadingLatest(s, n) - t;
              })
              .slice(0, r),
          [c, d, s, r],
        );
      }
    },
    160973: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(442837),
        a = t(595519),
        l = t(374065),
        o = t(761122),
        r = t(542094),
        s = t(973616),
        c = t(592125),
        d = t(496675),
        u = t(358085),
        m = t(231338),
        p = t(689938);
      function _(e) {
        let { channelId: n, application: t, activityAction: _ } = e,
          C = (0, i.e7)([c.Z], () => c.Z.getChannel(n)),
          h = (0, i.e7)([d.Z], () => d.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, C)),
          f = (0, l.KF)(null == C ? void 0 : C.id),
          A = !1,
          E = p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START;
        switch (_) {
          case r.JS.LEAVE:
            A = !1;
            break;
          case r.JS.START:
            (null == C ? void 0 : C.isGuildVoice())
              ? f !== l.jy.CAN_LAUNCH && (A = !0)
              : !(0, a.WS)(C) && (A = !0);
            break;
          case r.JS.JOIN:
            (null == C ? void 0 : C.isGuildVoice())
              ? (A = !h)
              : !(0, a.WS)(C) && (A = !0);
        }
        if (_ !== r.JS.LEAVE) {
          let e =
              t instanceof s.Z
                ? t.embeddedActivityConfig
                : t.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
          null == e || e.supported_platforms.includes(n)
            ? (null == C ? void 0 : C.isThread()) &&
              ((A = !0),
              (E = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_IN_THREAD))
            : ((A = !0),
              (E = p.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_ON_DEVICE));
        }
        return { disabled: A, reason: E };
      }
    },
    660090: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(674588),
        l = t(70956),
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
          a.i6(n, { dontRefetchMs: l.Z.Millis.DAY });
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
          return S;
        },
        pe: function () {
          return L;
        },
      }),
        t(47120),
        t(653041),
        t(536091);
      var i = t(470079),
        a = t(392711),
        l = t.n(a),
        o = t(373793),
        r = t(288385),
        s = t(442837),
        c = t(911969),
        d = t(127255),
        u = t(654455),
        m = t(213459),
        p = t(807169),
        _ = t(104793),
        C = t(674588),
        h = t(809547),
        f = t(822245),
        A = t(631827),
        E = t(827498),
        N = t(783097),
        x = t(689079),
        v = t(665692);
      function I(e, n) {
        let t = f.Z.getScoreWithoutLoadingLatest(e.id);
        return f.Z.getScoreWithoutLoadingLatest(n.id) - t;
      }
      function g(e, n) {
        let t = (0, N.$d)(e),
          i = (0, N.$d)(n);
        return (0, m.un)(t, i);
      }
      function P(e, n) {
        return (0, m.un)(e.displayName, n.displayName);
      }
      function L(e) {
        let {
          channel: n,
          query: t,
          commandLimit: a,
          applicationLimit: o,
          searchesCommands: r = !0,
          searchesBots: s = !0,
          searchesActivities: C = !0,
        } = e;
        t.startsWith("".concat(v.GI)) && (t = t.substring(1));
        let {
            commands: h,
            commandSectionMap: f,
            loading: E,
          } = (function (e) {
            var n, t;
            let { channel: a, includeBuiltIn: l = !0, allowFetch: o = !0 } = e,
              r = (0, m.em)(a, !0, o),
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
              l && u.push(x.bi.BUILT_IN);
              let p = [],
                _ = {};
              for (let e of u) {
                let n = (0, m.If)(a, e),
                  t = null !== (o = n.sectionCommands) && void 0 !== o ? o : [];
                p.push(...t),
                  t.forEach((e) => {
                    null != n.descriptor && (_[e.id] = n.descriptor);
                  });
              }
              return {
                commands: p,
                commandSectionMap: _,
                loading:
                  !0 === r.fetchState.fetching || !0 === s.fetchState.fetching,
              };
            }, [
              a,
              l,
              r.fetchState.fetching,
              null === (n = r.result) || void 0 === n ? void 0 : n.sections,
              s.fetchState.fetching,
              null === (t = s.result) || void 0 === t ? void 0 : t.sections,
            ]);
          })({ channel: n, includeBuiltIn: !0 }),
          { apps: L } = (function (e) {
            let {
                channel: n,
                onlyWithCommands: t,
                includeBuiltIn: a,
                allowFetch: l = !0,
                includeEmbeddedApps: o,
                includeNonEmbeddedApps: r,
              } = e,
              s = (0, p.Hs)(n, [c.yU.CHAT]).hasBaseAccessPermissions,
              d = (0, m.em)(n, s, l),
              u = (0, m.PL)(s, l),
              _ = i.useCallback(
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
              h = new Set();
            if (null != d.result)
              for (let e of Object.values(d.result.sections)) {
                let n = e.descriptor.application;
                null != n && _(e) && (C.push(n), h.add(n.id));
              }
            if (null != u.result)
              for (let e of Object.values(u.result.sections)) {
                let n = e.descriptor.application;
                null != n && !h.has(n.id) && _(e) && C.push(n);
              }
            return (
              r && a && C.push(N.Wx),
              {
                apps: C,
                loading:
                  (null == d ? void 0 : d.fetchState.fetching) === !0 ||
                  (null == u ? void 0 : u.fetchState.fetching) === !0,
              }
            );
          })({
            channel: n,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: C,
            includeNonEmbeddedApps: s,
          }),
          S = (0, d.Z)({ guildId: n.getGuildId() }),
          b = i.useMemo(() => {
            var e;
            if (!r) return [];
            return (0, A.N)(h, {
              limit: a,
              filterPredicates: [
                (function (e) {
                  let n = (0, p.k)(e, [c.yU.CHAT]),
                    t = {};
                  return (i) => {
                    let {
                      context: a,
                      userId: l,
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
                          null != a.guild_id
                            ? _.ML(
                                null == n ? void 0 : n.permissions,
                                a.guild_id,
                                l,
                                o,
                                r,
                              )
                            : null,
                        u =
                          null != a.guild_id
                            ? _.ZJ(
                                null == n ? void 0 : n.permissions,
                                a,
                                a.guild_id,
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
                      _.Ft(i, n, {
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: c,
                        commandBotId: null == s ? void 0 : s.botId,
                        isGuildInstalled: u,
                        isUserInstalled: p,
                      }) === _.mF.ALLOWED
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
                      a = e.displayName;
                    return (
                      !!(
                        (n.startsWith(t) &&
                          n.split(" ").slice(1).join(" ").startsWith(i)) ||
                        (a.startsWith(t) &&
                          a.split(" ").slice(1).join(" ").startsWith(i))
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
                    for (let { name: i, serverLocalizedName: a } of null !==
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
                        (null != a &&
                          (a.startsWith(e) ||
                            ""
                              .concat(n.untranslatedName, " ")
                              .concat(a)
                              .startsWith(e) ||
                            (null != n.displayName &&
                              ""
                                .concat(n.displayName, " ")
                                .concat(a)
                                .startsWith(e))))
                      )
                        return !0;
                    return !1;
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    var t;
                    for (let { name: i, serverLocalizedName: a } of null !==
                      (t = n.options) && void 0 !== t
                      ? t
                      : [])
                      if (i.includes(e) || (null == a ? void 0 : a.includes(e)))
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
                })({ channel: n }),
                P,
              ],
            });
          }, [r, h, a, n, t]),
          T = i.useMemo(() => {
            if (0 === b.length) return [];
            let e = new Map(L.map((e) => [e.id, e]));
            return l().compact(
              b.map((n) => {
                var t;
                let i = e.get(n.applicationId);
                if (null == i) return null;
                let a = null !== (t = f[n.id]) && void 0 !== t ? t : null;
                return { command: n, application: i, section: a };
              }),
            );
          }, [L, b, f]),
          R = i.useMemo(() => {
            var e;
            let i = [];
            if (C) {
              let e = new Set(
                L.map((e) => {
                  let { id: n } = e;
                  return n;
                }),
              );
              i.push(...L),
                i.push(
                  ...S.filter((n) => {
                    let {
                      application: { id: t },
                    } = n;
                    return !e.has(t);
                  }).map((e) => {
                    let { application: n } = e;
                    return n;
                  }),
                );
            } else s && (i = L);
            return (0, A.N)(i, {
              limit: o,
              filterPredicates: [
                (function (e) {
                  let n = (0, p.k)(e, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
                  return (t) => {
                    let {
                        context: i,
                        userId: a,
                        roleIds: l,
                        isImpersonating: o,
                      } = n,
                      {
                        descriptor: r,
                        sectionCommands: s,
                        isGuildInstalled: c,
                        isUserInstalled: d,
                      } = (0, m.If)(e, t.id),
                      u =
                        null != i.guild_id
                          ? _.ML(
                              null == r ? void 0 : r.permissions,
                              i.guild_id,
                              a,
                              l,
                              o,
                            )
                          : null,
                      p =
                        null != i.guild_id
                          ? _.ZJ(
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
                          _.Ft(e, n, {
                            applicationAllowedForUser: u,
                            applicationAllowedForChannel: p,
                            commandBotId: null == r ? void 0 : r.botId,
                            isGuildInstalled: c,
                            isUserInstalled: d,
                          }) === _.mF.ALLOWED,
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
                    let a =
                      null === (t = (0, N.jD)(n)) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase();
                    return (
                      null !==
                        (i =
                          null == a
                            ? void 0
                            : a.startsWith(e.toLocaleLowerCase())) &&
                      void 0 !== i &&
                      i
                    );
                  };
                })(e),
                (function (e) {
                  return (n) => {
                    var t, i;
                    let a =
                      null === (t = (0, N.jD)(n)) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase();
                    return (
                      null !==
                        (i =
                          null == a
                            ? void 0
                            : a.includes(e.toLocaleLowerCase())) &&
                      void 0 !== i &&
                      i
                    );
                  };
                })(e),
              ],
              sortComparers: [I, g],
            });
          }, [s, C, o, n, t, L, S]),
          M = T.length > 0,
          j = R.length > 0;
        return {
          commandResults: T,
          hasCommandResults: M,
          applicationResults: R,
          hasApplicationResults: j,
          isEmptyState: !M && !j,
          loading: E && r,
        };
      }
      function S(e) {
        let {
          channel: n,
          query: t,
          fetches: a = !0,
          pageLimit: l = 1 / 0,
          entrypoint: c,
        } = e;
        t.startsWith("".concat(v.GI)) && (t = t.substring(1));
        let d = c === E._b.VOICE,
          [u, m] = i.useState(1),
          p = i.useRef(u);
        p.current = u;
        let { fetchState: _, totalPages: f } = (0, s.cj)(
            [h.Z],
            () => {
              var e, i;
              return {
                fetchState: h.Z.getFetchState({
                  query: t,
                  guildId: n.guild_id,
                  page: u,
                  integrationType: o.Y.USER_INSTALL,
                  minUserInstallCommandCount: 1,
                  excludeAppsWithCustomInstallUrl: !0,
                  excludeNonEmbeddedApps: d,
                  excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                  source: r.F.APP_LAUNCHER,
                }),
                totalPages:
                  null !==
                    (i =
                      null ===
                        (e = h.Z.getSearchResults({
                          query: t,
                          guildId: n.guild_id,
                          page: u,
                          integrationType: o.Y.USER_INSTALL,
                          minUserInstallCommandCount: 1,
                          excludeAppsWithCustomInstallUrl: !0,
                          excludeNonEmbeddedApps: d,
                          excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:
                            !0,
                          source: r.F.APP_LAUNCHER,
                        })) || void 0 === e
                        ? void 0
                        : e.totalPages) && void 0 !== i
                    ? i
                    : 0,
              };
            },
            [n.guild_id, u, t, d],
          ),
          A = i.useMemo(
            () =>
              Array.from(
                { length: _ === h.M.FETCHED || _ === h.M.ERROR ? u : u - 1 },
                (e, i) => {
                  var a, l;
                  return null !==
                    (l =
                      null ===
                        (a = h.Z.getSearchResults({
                          query: t,
                          guildId: n.guild_id,
                          page: i + 1,
                          integrationType: o.Y.USER_INSTALL,
                          minUserInstallCommandCount: 1,
                          excludeAppsWithCustomInstallUrl: !0,
                          excludeNonEmbeddedApps: d,
                          excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:
                            !0,
                          source: r.F.APP_LAUNCHER,
                        })) || void 0 === a
                        ? void 0
                        : a.results) && void 0 !== l
                    ? l
                    : [];
                },
              ),
            [_, n.guild_id, t, u, d],
          ),
          N = i.useCallback(() => {
            let e = A.length;
            _ === h.M.FETCHED &&
              e === p.current &&
              e > 0 &&
              e < f &&
              e < l &&
              A[e - 1].length > 0 &&
              (p.current++, m((e) => e + 1));
          }, [_, l, A, f]),
          x = i.useCallback(
            (e) => {
              let { query: n, page: t, guildId: i } = e;
              C.yC({
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
            if (!!a) x({ query: t, page: u, guildId: n.guild_id });
          }, [t, n.guild_id, x, u, a]),
          i.useEffect(() => {
            m(1);
          }, [n.guild_id, t]),
          { fetchState: _, applicationResults: A.flat(), fetchNextPage: N }
        );
      }
    },
    890280: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(470079),
        a = t(442837),
        l = t(110924),
        o = t(317381);
      function r(e) {
        let {
            applicationId: n,
            channelId: t,
            launchingComponentId: r,
            onSubmissionComplete: s,
          } = e,
          c = (0, a.e7)([o.ZP], () => o.ZP.getLaunchState(n, t)),
          d = null != c && c.isLaunching && c.componentId === r,
          u = (0, l.Z)(d);
        return (
          i.useEffect(() => {
            !d && u && (null == s || s());
          }, [d, u, s]),
          { submitting: d, wasSubmitting: u }
        );
      }
    },
    695676: function (e, n, t) {
      t.d(n, {
        gc: function () {
          return a;
        },
        hH: function () {
          return r;
        },
        uX: function () {
          return o;
        },
      });
      var i,
        a,
        l = t(470079);
      ((i = a || (a = {})).HOME = "home"),
        (i.LIST = "list"),
        (i.APPLICATION = "application");
      let o = l.createContext({
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
        return l.useContext(o);
      }
    },
    421591: function (e, n, t) {
      t(47120), t(852437);
      var i = t(735250),
        a = t(470079),
        l = t(481060),
        o = t(100527),
        r = t(367907),
        s = t(906732),
        c = t(541099),
        d = t(695676),
        u = t(173790),
        m = t(361917),
        p = t(684256),
        _ = t(314734),
        C = t(981631),
        h = t(559103);
      let f = { width: _.Gy, height: _.lv },
        A = { height: _.lv };
      function E(e) {
        let { initHistory: n, children: t } = e,
          [l, o] = a.useState(null != n ? n : [{ type: d.gc.HOME }]),
          [r, s] = a.useState({}),
          c = l[l.length - 1],
          [u, m] = a.useState(!1),
          p = a.useCallback((e) => {
            o((n) => [...n, e]);
          }, []),
          _ = a.useCallback(() => {
            let e = null;
            o((n) =>
              n.length <= 1 ? n : ((e = n[n.length - 1]), n.slice(0, -1)),
            ),
              s((n) => (null == e ? n : { ...n, [e.type]: e }));
          }, []),
          C = a.useCallback(
            (e) => {
              var n;
              return null !== (n = l.findLast((n) => n.type === e)) &&
                void 0 !== n
                ? n
                : r[e];
            },
            [l, r],
          );
        return (0, i.jsx)(d.uX.Provider, {
          value: {
            history: l,
            discard: r,
            currentView: c,
            pushHistory: p,
            goBack: _,
            getMostRecentHistoryItemByType: C,
            isSlideReady: u,
            setSlideReady: m,
          },
          children: t,
        });
      }
      function N(e) {
        let { channel: n, entrypoint: t } = e,
          [o, r] = a.useState(""),
          { setScroller: s, isCloseToBottom: c } = (function (e) {
            let [n, t] = a.useState(null),
              [i, l] = a.useState(!1),
              o = a.useRef(0);
            return (
              a.useEffect(() => {
                null == n || n.scrollTo(0, 0);
              }, [n, e]),
              a.useEffect(() => {
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
                      l(
                        n.scrollHeight - (n.scrollTop + n.clientHeight) <
                          0.5 * _.K7,
                      );
                }
              }, [n]),
              { setScroller: t, isCloseToBottom: i }
            );
          })(o),
          {
            currentView: C,
            getMostRecentHistoryItemByType: f,
            setSlideReady: E,
          } = (0, d.hH)();
        a.useEffect(() => {
          E(!1);
        }, [null == C ? void 0 : C.type, E]);
        let N = a.useCallback(() => {
          E(!0);
        }, [E]);
        if (null == C) return null;
        let x = f(d.gc.LIST),
          v = f(d.gc.APPLICATION);
        return (0, i.jsxs)(l.Slides, {
          activeSlide: C.type,
          width: _.Gy,
          onSlideReady: N,
          children: [
            (0, i.jsx)(l.Slide, {
              id: d.gc.HOME,
              children: (0, i.jsx)("div", {
                className: h.slideContent,
                style: A,
                children: (0, i.jsx)(m.Z, {
                  isScrollCloseToBottom: c,
                  setScroller: s,
                  channel: n,
                  entrypoint: t,
                  searchQuery: o,
                  setSearchQuery: r,
                }),
              }),
            }),
            (0, i.jsx)(l.Slide, {
              id: d.gc.LIST,
              children: (0, i.jsx)("div", {
                className: h.slideContent,
                style: A,
                children:
                  null != x &&
                  (0, i.jsx)(p.Z, {
                    channel: n,
                    entrypoint: t,
                    title: x.title,
                    look: x.look,
                    items: x.items,
                    sectionName: x.sectionName,
                  }),
              }),
            }),
            (0, i.jsx)(l.Slide, {
              id: d.gc.APPLICATION,
              children: (0, i.jsx)("div", {
                className: h.slideContent,
                style: A,
                children:
                  null != v &&
                  (0, i.jsx)(u.Z, {
                    channel: n,
                    application: v.application,
                    sectionName: v.sectionName,
                  }),
              }),
            }),
          ],
        });
      }
      n.Z = a.memo(
        a.forwardRef(function (e, n) {
          let { channel: t, entrypoint: l, initHistory: d } = e,
            { analyticsLocations: u } = (0, s.ZP)(o.Z.APP_LAUNCHER);
          return (
            a.useEffect(() => {
              (0, r.yw)(C.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
                source: l,
                location: "app_launcher",
              });
            }, [l]),
            a.useEffect(() => {
              let e = Date.now();
              return () => {
                (0, r.yw)(C.rMx.APP_LAUNCHER_CLOSED, {
                  reason: c.Z.closeReason(),
                  time_spent: Date.now() - e,
                  source: l,
                });
              };
            }, [l]),
            (0, i.jsx)("div", {
              className: h.drawerSizingWrapper,
              ref: n,
              style: f,
              children: (0, i.jsx)("div", {
                className: h.contentWrapper,
                children: (0, i.jsx)(s.Gt, {
                  value: u,
                  children: (0, i.jsx)(E, {
                    initHistory: d,
                    children: (0, i.jsx)(N, { channel: t, entrypoint: l }),
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
          return L;
        },
        ae: function () {
          return P;
        },
      });
      var i = t(470079),
        a = t(392711),
        l = t.n(a),
        o = t(442837),
        r = t(25209),
        s = t(481060),
        c = t(2052),
        d = t(542094),
        u = t(513202),
        m = t(367907),
        p = t(895924),
        _ = t(691424),
        C = t(428595),
        h = t(364458),
        f = t(499254),
        A = t(541099),
        E = t(827498),
        N = t(346683),
        x = t(981631),
        v = t(689938);
      let I = {
          ...C.Z.RULES.commandMention,
          parse: (e, n, t) => ({
            content: C.Z.RULES.commandMention.parse(e, n, t).content,
          }),
        },
        g = l().pick(
          (0, h.Z)([
            C.Z.RULES,
            { commandMention: I },
            (0, _.Z)({ enableBuildOverrides: !1, enableEmojiClick: !1 }),
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
        P = r.w4(g);
      function L(e) {
        let {
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            commandName: l,
            autoDismissOnClick: r = !0,
            launchingComponentId: _,
            submitting: C = !1,
          } = e,
          h = (0, c.O)(),
          I = (0, d.Qv)({ channelId: n.id, applicationId: t.id }),
          g = (0, N.Q)(I),
          P = (0, o.e7)([A.Z], () => A.Z.entrypoint()),
          L = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: h.location,
            onActivityItemSelectedProp: (e) => {
              let { applicationId: n } = e;
              r && f.y(E.ti.ACTIVITY),
                (0, m.yw)(x.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                  location: i,
                  application_id: n,
                  section_name: a,
                  action: g,
                  source: P,
                });
            },
            launchingComponentId: _,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: P,
          }),
          S = s.ButtonColors.BRAND,
          b = null != l ? l : v.Z.Messages.LAUNCH;
        return (
          g === d.JS.JOIN
            ? ((S = s.ButtonColors.GREEN), (b = v.Z.Messages.JOIN_ACTIVITY))
            : g === d.JS.LEAVE &&
              !C &&
              ((S = s.ButtonColors.RED), (b = v.Z.Messages.LEAVE)),
          {
            onActivityItemSelected: L,
            activityAction: g,
            buttonColor: S,
            buttonText: b,
          }
        );
      }
      function S(e, n) {
        let t = A.Z.entrypoint(),
          l = i.useMemo(
            () =>
              (0, a.debounce)(
                (e, n) => {
                  (0, m.yw)(x.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
          null != e && l(e, t);
        }, [e, n, t, l]);
      }
    },
    98880: function (e, n, t) {
      t.d(n, {
        U4: function () {
          return i;
        },
        cG: function () {
          return Q;
        },
        kA: function () {
          return K;
        },
        qR: function () {
          return $;
        },
      }),
        t(47120),
        t(411104);
      var i,
        a,
        l = t(735250),
        o = t(470079),
        r = t(120356),
        s = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(239091),
        m = t(110924),
        p = t(607070),
        _ = t(115130),
        C = t(317381),
        h = t(361213),
        f = t(542094),
        A = t(778569),
        E = t(182906),
        N = t(823531),
        x = t(367907),
        v = t(220082),
        I = t(70097),
        g = t(695346),
        P = t(973616),
        L = t(695103),
        S = t(880448),
        b = t(768581),
        T = t(541099),
        R = t(783097),
        M = t(695676),
        j = t(176412),
        y = t(226026),
        O = t(753972),
        Z = t(981631),
        H = t(217702),
        U = t(689938),
        B = t(127935),
        D = t(413097),
        k = t(969728);
      function w(e) {
        var n;
        let {
            application: t,
            look: i = "large_banner",
            onClick: a,
            imageStyle: o,
            enableVideoBanner: r = !0,
            children: s,
            sectionName: c,
            resultsPosition: d,
            tracksImpression: u = !0,
            disabled: p = !1,
          } = e,
          _ = null !== (n = (0, m.Z)(p)) && void 0 !== n ? n : p;
        return (0, l.jsx)(V, {
          application: t,
          onClick: a,
          sectionName: c,
          resultsPosition: d,
          disabled: p,
          tracksImpression: u,
          look: i,
          children:
            "icon" === i
              ? (0, l.jsx)(W, { application: t, imageStyle: o, children: s })
              : (0, l.jsx)(F, {
                  application: t,
                  look: i,
                  imageStyle: o,
                  enableVideoBanner: r,
                  disableBannerFadeIn: _ !== p,
                  children: s,
                }),
        });
      }
      function V(e) {
        let {
            application: n,
            onClick: t,
            children: i,
            sectionName: a,
            resultsPosition: r,
            tracksImpression: c,
            disabled: m,
            containerStyle: p,
            look: _,
          } = e,
          C = g.Sb.useSetting(),
          h = o.useCallback(
            (e) => {
              if ((0, R.BQ)(n) && C) {
                let t = n instanceof P.Z ? n : P.Z.createFromServer(n);
                (0, u.vq)(e, (e) => (0, l.jsx)(N.Z, { application: t, ...e }));
              }
            },
            [n, C],
          ),
          { name: f, description: A } = o.useMemo(
            () => (0, R.sl)(n, { fakeAppIconURL: D }),
            [n],
          ),
          { trackItemImpressionRef: E } = (0, y.Z)({
            applicationId: n.id,
            sectionName: a,
            sectionPosition: r,
          }),
          x = o.useMemo(() => {
            let e = m ? B.containerDisabled : B.container;
            return s()(
              e,
              {
                [B.containerBorderRadius]: "row" !== _,
                [B.rowContainer]: "row" === _,
                [B.iconCard]: "icon" === _,
              },
              p,
            );
          }, [p, m, _]);
        return m
          ? (0, l.jsx)("div", {
              ref: c ? E : void 0,
              className: x,
              children: i,
            })
          : (0, l.jsx)(d.Clickable, {
              innerRef: c ? E : void 0,
              className: x,
              onClick: t,
              onContextMenu: h,
              "aria-label":
                U.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
                  applicationName: f,
                  applicationDescription: A,
                }),
              children: (0, l.jsx)(d.FocusBlock, { children: i }),
            });
      }
      function W(e) {
        let { application: n, imageStyle: t, children: i } = e,
          { name: a, iconURL: r } = o.useMemo(
            () => (0, R.sl)(n, { fakeAppIconURL: D }),
            [n],
          );
        return (0, l.jsx)(d.Tooltip, {
          tooltipContentClassName: B.tooltipContent,
          text: a,
          children: (e) => {
            let { ...n } = e;
            return (0, l.jsxs)("div", {
              className: s()(B.iconContainer, t),
              ...n,
              children: [
                (0, l.jsx)(O.Z, {
                  src: r,
                  className: B.iconCard,
                  "aria-hidden": !0,
                  rendersPlaceholder: !0,
                }),
                i,
              ],
            });
          },
        });
      }
      function F(e) {
        let {
            application: n,
            look: t,
            imageStyle: i,
            enableVideoBanner: a,
            disableBannerFadeIn: r,
            children: u,
          } = e,
          {
            iconURL: m,
            name: p,
            description: C,
          } = o.useMemo(() => (0, R.sl)(n, { fakeAppIconURL: D }), [n]),
          h = o.useMemo(() => (null == C ? null : (0, j.ae)(C)), [C]),
          f = (0, v.ZP)(m, ""),
          [A, E] = o.useState(!1),
          N = o.useCallback(() => {
            !0 === a && E(!0);
          }, [a]),
          x = (0, R.lf)(n),
          I = "large_banner" === t || "medium_banner" === t,
          g = o.useCallback(() => E(!1), []),
          P = (0, c.e7)(
            [_.Z, L.Z],
            () =>
              _.Z.inDevModeForApplication(n.id) ||
              L.Z.inTestModeForApplication(n.id),
            [n.id],
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: g,
              onBlur: g,
              className: s()(B.bannerImageContainer, {
                [B.mediumBanner]: "medium_banner" === t,
                [B.largeBanner]: "large_banner" === t,
              }),
              children: [
                (0, l.jsx)("span", {
                  className: i,
                  children: (0, l.jsx)(z, {
                    application: n,
                    fallbackColor: f,
                    showVideo: A,
                    disableFadeIn: r,
                  }),
                }),
                I
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        P || x
                          ? (0, l.jsxs)("div", {
                              className: B.bannerUpperRightContainer,
                              children: [
                                x &&
                                  (0, l.jsx)("div", {
                                    className: B.promotedLabelWrapperBanner,
                                    children: (0, l.jsx)(d.Heading, {
                                      variant: "text-xxs/medium",
                                      color: "header-primary",
                                      children:
                                        U.Z.Messages.APP_LAUNCHER_PROMOTED,
                                    }),
                                  }),
                                P && (0, l.jsx)(Y, {}),
                              ],
                            })
                          : null,
                        (0, l.jsx)("div", {
                          className: B.bannerImageChildContainer,
                          children: u,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, l.jsxs)("div", {
              className: s()(B.appDetailsContainer, {
                [B.appDetailsRowContainer]: "row" === t,
              }),
              children: [
                (0, l.jsx)(O.Z, {
                  src: m,
                  className: s()(B.icon, { [B.rowIcon]: "row" === t }),
                  "aria-hidden": !0,
                  rendersPlaceholder: !0,
                }),
                (0, l.jsxs)("div", {
                  className: B.appDetails,
                  children: [
                    (0, l.jsxs)("div", {
                      className: B.appDetailsHeaderContainer,
                      children: [
                        (0, l.jsx)(d.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          lineClamp: 1,
                          children: p,
                        }),
                        !I && x
                          ? (0, l.jsx)("div", {
                              className: B.promotedLabelWrapperNonBanner,
                              children: (0, l.jsx)(d.Text, {
                                variant: "text-xxs/semibold",
                                color: "text-muted",
                                children: U.Z.Messages.APP_LAUNCHER_PROMOTED,
                              }),
                            })
                          : null,
                        (0, l.jsx)(G, { application: n }),
                      ],
                    }),
                    (0, l.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: "text-secondary",
                      lineClamp: 1,
                      children: h,
                    }),
                  ],
                }),
                "row" === t
                  ? (0, l.jsx)("div", { className: B.rowDivider })
                  : null,
              ],
            }),
          ],
        });
      }
      function Y() {
        return (0, l.jsx)(d.Tooltip, {
          text: U.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
          children: (e) =>
            (0, l.jsx)("div", {
              className: B.devShelfBadge,
              ...e,
              children: (0, l.jsx)(S.Z, { className: B.devShelfIcon }),
            }),
        });
      }
      function G(e) {
        let { application: n } = e,
          t = (0, R.yJ)(n);
        if (null == t) return null;
        let i = (0, f.fD)(t);
        return null == i
          ? null
          : (0, l.jsx)(d.Tooltip, {
              text: i,
              children: (e) =>
                (0, l.jsx)("img", {
                  className: B.staffBadge,
                  alt: i,
                  src: k,
                  ...e,
                }),
            });
      }
      function z(e) {
        let {
          application: n,
          fallbackColor: t,
          showVideo: i,
          disableFadeIn: a,
        } = e;
        if ((0, R.BQ)(n)) {
          if ((0, R.ye)(n))
            return (0, l.jsx)(J, {
              application: n,
              showVideo: i,
              disableFadeIn: a,
            });
          if (null != n.bot)
            return (0, l.jsx)(X, {
              bot: n.bot,
              fallbackColor: t,
              disableFadeIn: a,
            });
        }
        return (0, l.jsx)(q, { fallbackColor: t, disableFadeIn: a });
      }
      function J(e) {
        let { application: n, showVideo: t, disableFadeIn: i } = e,
          a = (0, A.Z)({
            applicationId: n.id,
            size: 600,
            names: ["embedded_cover"],
          }),
          r = o.useMemo(() => {
            let e = (0, R.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id
              ? (0, h.Z)(n.id, e.activity_preview_video_asset_id)
              : null;
          }, [n]),
          [c, d] = o.useState(t);
        o.useEffect(() => {
          t && d(!0);
        }, [t]);
        let u = s()(B.bannerImage, { [B.disableFadeIn]: i });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            null != r && c
              ? (0, l.jsx)("div", {
                  className: B.activityVideoContainer,
                  children: (0, l.jsx)("div", {
                    className: s()(B.activityVideo, { [B.videoFadeOut]: !t }),
                    onAnimationEnd: () => (t ? null : d(!1)),
                    children: (0, l.jsx)(I.Z, {
                      src: r,
                      mediaLayoutType: H.hV.MOSAIC,
                      loop: !0,
                      autoPlay: !0,
                      muted: !0,
                    }),
                  }),
                })
              : null,
            (0, l.jsx)(E.Z, {
              imageBackground: a,
              applicationName: n.name,
              imageClassName: u,
              imageNotFoundClassName: u,
            }),
          ],
        });
      }
      function X(e) {
        let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
          a = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
          o = (0, b.aN)({
            id: n.id,
            banner: n.banner,
            canAnimate: !a,
            size: 600,
          });
        return null == o
          ? (0, l.jsx)(q, { fallbackColor: t, disableFadeIn: i })
          : (0, l.jsx)("img", {
              src: o,
              alt: "",
              className: s()(B.bannerImage, { [B.disableFadeIn]: i }),
            });
      }
      function q(e) {
        let { fallbackColor: n, disableFadeIn: t } = e;
        return (0, l.jsx)("div", {
          className: s()(B.bannerImage, { [B.disableFadeIn]: t }),
          style: { backgroundColor: n },
        });
      }
      function Q(e) {
        let {
            application: n,
            sectionName: t,
            resultsPosition: i,
            query: a,
            installOnDemand: l,
            location: r,
          } = e,
          { pushHistory: s } = (0, M.hH)();
        return o.useCallback(
          (e) => {
            e.stopPropagation(),
              (0, x.yw)(Z.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                application_id: n.id,
                section_name: t,
                search_results_position: i,
                source: T.Z.entrypoint(),
                location: r,
                query: a,
              }),
              s({
                type: M.gc.APPLICATION,
                application: n,
                installOnDemand: l,
                sectionName: t,
              });
          },
          [n, l, r, s, a, i, t],
        );
      }
      function K(e) {
        let n = Q(e);
        return (0, l.jsx)(w, { ...e, onClick: n });
      }
      function $(e) {
        let {
          channel: n,
          application: t,
          location: i,
          sectionName: a,
          isOneClickCTA: r,
          ...s
        } = e;
        if (!(0, R.BQ)(t))
          throw Error(
            "PerformActivityActionAppCard was passed the Built-in App, which is not supported.",
          );
        let u = o.useId(),
          [m, p] = (0, c.Wu)([C.ZP], () => [
            C.ZP.isLaunchingActivity(),
            C.ZP.getLaunchState(t.id, n.id),
          ]),
          _ = null != p && p.isLaunching && p.componentId === u,
          {
            onActivityItemSelected: h,
            activityAction: A,
            buttonColor: E,
            buttonText: N,
          } = (0, j.P7)({
            channel: n,
            application: t,
            location: i,
            sectionName: a,
            launchingComponentId: u,
          });
        if (A === f.JS.START || A === f.JS.JOIN)
          return r
            ? (0, l.jsx)(w, {
                ...s,
                sectionName: a,
                application: t,
                onClick: h,
                disabled: m,
                enableVideoBanner: !_,
                children: _
                  ? (0, l.jsx)(d.Spinner, {
                      type: d.Spinner.Type.PULSING_ELLIPSIS,
                      className: B.spinner,
                    })
                  : null,
              })
            : (0, l.jsx)(K, {
                ...s,
                sectionName: a,
                application: t,
                location: i,
              });
        return (0, l.jsx)(w, {
          ...s,
          sectionName: a,
          application: t,
          onClick: (e) => {
            e.stopPropagation();
          },
          imageStyle: B.darkenImage,
          enableVideoBanner: !1,
          disabled: !0,
          children: (0, l.jsx)("div", {
            className: B.voiceLauncherAppCardContainer,
            children: (0, l.jsx)(d.Button, {
              className: B.voiceLauncherAppCardButton,
              type: "submit",
              size: d.Button.Sizes.LARGE,
              color: E,
              disabled: m,
              onClick: h,
              "aria-label":
                U.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format(
                  { buttonText: N, applicationName: t.name },
                ),
              submitting: _,
              children: N,
            }),
          }),
        });
      }
      ((a = i || (i = {})).ICON = "icon"),
        (a.ROW = "row"),
        (a.NO_BANNER = "no_banner"),
        (a.MEDIUM_BANNER = "medium_banner"),
        (a.LARGE_BANNER = "large_banner");
    },
    772606: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(481060),
        s = t(695676),
        c = t(689938),
        d = t(322541);
      function u(e) {
        let { className: n } = e,
          { goBack: t } = (0, s.hH)(),
          l = a.useCallback(() => {
            t();
          }, [t]);
        return (0, i.jsx)(r.Clickable, {
          onClick: l,
          className: o()(d.clickable, n),
          "aria-label": c.Z.Messages.BACK_ACCESSIBILITY_HINT,
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
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(442837),
        s = t(481060),
        c = t(607070),
        d = t(98880),
        u = t(32950);
      function m(e) {
        let { look: n = d.U4.LARGE_BANNER } = e,
          t = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
          { styleLarge: l, styleSmall: m } = a.useMemo(
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
                      style: l,
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
          return l;
        },
      });
      var i = t(470079),
        a = t(434650);
      function l(e) {
        let { onVisible: n, threshold: t, minTimeVisibleMs: l } = e,
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
          (0, a.O)((e) => {
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
            null != l ? (r.current = setTimeout(t, l)) : t();
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
        a = t(442837),
        l = t(213609),
        o = t(541099),
        r = t(312871);
      function s(e) {
        let { applicationId: n, sectionName: t, sectionPosition: s } = e,
          c = (0, a.e7)([o.Z], () => o.Z.entrypoint());
        return {
          trackItemImpressionRef: (0, r.Z)({
            onVisible: () => {
              (0, l.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                  application_id: n,
                  section_name: t,
                  section_position: s,
                  source: c,
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
        a = t(442837),
        l = t(213609),
        o = t(541099),
        r = t(312871);
      function s(e) {
        let {
            applicationId: n,
            commandId: t,
            searchResultsPosition: s,
            query: c,
          } = e,
          d = (0, a.e7)([o.Z], () => o.Z.entrypoint());
        return {
          trackSearchResultsItemImpressionRef: (0, r.Z)({
            onVisible: () => {
              (0, l.h)({
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
        a = t(213609),
        l = t(541099),
        o = t(312871);
      function r(e) {
        let { sectionName: n, numItems: t, numVisibleItems: r } = e;
        return {
          trackSectionImpressionRef: (0, o.Z)({
            onVisible: () => {
              (0, a.h)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                properties: {
                  section_name: n,
                  num_items: t,
                  num_visible_items: r,
                  source: l.Z.entrypoint(),
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
          return k;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(140835),
        s = t(246521),
        c = t(442837),
        d = t(481060),
        u = t(911969),
        m = t(607070),
        p = t(555573),
        _ = t(213459),
        C = t(10718),
        h = t(895924),
        f = t(583027),
        A = t(585483),
        E = t(499254),
        N = t(541099),
        x = t(827498),
        v = t(496158),
        I = t(676161),
        g = t(660090),
        P = t(783097),
        L = t(845936),
        S = t(176412),
        b = t(870205),
        T = t(981631),
        R = t(689079),
        M = t(689938),
        j = t(32950),
        y = t(818931);
      let O = "placeholder",
        Z = [, , , , ,].fill(O);
      function H(e) {
        var n, t;
        let { channel: l, command: o, section: s, sectionName: c } = e,
          u = a.useCallback(() => {
            let e = N.Z.entrypoint();
            E.y(x.ti.COMMAND),
              (0, f.Mo)({
                command: o,
                location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                sectionName: c,
              }),
              p.Po({
                channelId: l.id,
                command: o,
                section: s,
                location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                sectionName: c,
                source: e,
                commandOrigin: h.bB.APPLICATION_LAUNCHER,
              }),
              A.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
          }, [l.id, o, s, c]),
          m =
            (null !==
              (t =
                null === (n = o.options) || void 0 === n ? void 0 : n.length) &&
            void 0 !== t
              ? t
              : 0) > 0,
          _ = a.useMemo(
            () => (0, S.ae)(o.displayDescription, void 0),
            [o.displayDescription],
          ),
          C = a.useMemo(
            () =>
              (0, i.jsxs)("div", {
                className: y.commandTextContainer,
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
                    children: _,
                  }),
                ],
              }),
            [o.displayName, _],
          );
        return (0, i.jsxs)(d.Clickable, {
          className: y.command,
          onClick: u,
          children: [
            (0, i.jsx)(d.FocusBlock, {
              className: y.commandFocusBlock,
              children: C,
            }),
            m
              ? (0, i.jsx)(r.F, {})
              : (0, i.jsx)(B, { channel: l, command: o, sectionName: c }),
          ],
        });
      }
      function U() {
        let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
          { styleLarge: n, styleSmall: t } = a.useMemo(
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
          l = a.useMemo(
            () =>
              (0, i.jsxs)("div", {
                className: y.commandTextContainerPlaceholder,
                children: [
                  (0, i.jsx)("div", {
                    className: j.textPlaceholder,
                    style: n,
                    children: (0, i.jsx)(d.Text, {
                      className: j.hidden,
                      variant: "text-sm/semibold",
                      color: "header-primary",
                      lineClamp: 1,
                      children: "_",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: j.textPlaceholder,
                    style: t,
                    children: (0, i.jsx)(d.Text, {
                      className: j.hidden,
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
          className: o()(y.command, j.loadingAnimation, { [j.noAnimation]: e }),
          children: l,
        });
      }
      function B(e) {
        let { channel: n, command: t, sectionName: l } = e,
          o = (0, _.PL)(!0, !0),
          r = (0, _.LD)(n.guild_id, !0),
          c = (0, v.D)(n),
          [u, m] = a.useState(!1),
          p = a.useCallback(
            async (e) => {
              e.stopPropagation();
              let n = N.Z.lastShownEntrypoint();
              try {
                (await (0, L.L)({
                  applicationId: t.applicationId,
                  userIndexState: o,
                  guildIndexState: r,
                  sectionName: l,
                  location: h.Vh.APP_LAUNCHER_APPLICATION_VIEW,
                  entrypoint: n,
                })) &&
                  (await (0, P.Y$)({
                    command: t,
                    optionValues: {},
                    context: c,
                    sectionName: l,
                  }),
                  E.y(x.ti.COMMAND));
              } finally {
                m(!1);
              }
            },
            [t, o, r, l, c],
          );
        return (0, i.jsxs)(d.Button, {
          type: "submit",
          onClick: p,
          disabled: u,
          size: d.ButtonSizes.ICON,
          color: d.Button.Colors.PRIMARY,
          className: y.commandSentCTAButton,
          innerClassName: y.commandSentCTAButtonInner,
          "aria-label":
            M.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
              commandName: t.untranslatedName,
            }),
          children: [
            (0, i.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "currentColor",
              children: M.Z.Messages.SEND,
            }),
            (0, i.jsx)(s.U, { size: "xs", color: "currentColor" }),
          ],
        });
      }
      function D(e) {
        let {
          channel: n,
          commands: t,
          section: a,
          headerName: l,
          sectionName: o,
          children: r,
        } = e;
        return 0 === t.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  className: y.commandListHeader,
                  children: [
                    (0, i.jsx)(d.Heading, {
                      variant: "heading-sm/semibold",
                      children: l,
                    }),
                    r,
                  ],
                }),
                (0, i.jsx)("ul", {
                  className: y.commandContainer,
                  "aria-label": l,
                  children: t.map((e, t) =>
                    e === O
                      ? (0, i.jsx)(U, {}, e + t)
                      : (0, i.jsx)(
                          H,
                          {
                            channel: n,
                            command: e,
                            section: a,
                            sectionName: o,
                          },
                          e.id,
                        ),
                  ),
                }),
              ],
            });
      }
      function k(e) {
        var n;
        let {
            channel: t,
            application: l,
            sectionName: o,
            installOnDemand: r,
            setHasCommands: s,
          } = e,
          {
            filterSection: c,
            commandsByActiveSection: d,
            sectionDescriptors: m,
            loading: p,
          } = C.wi(
            t,
            { commandTypes: [u.yU.CHAT] },
            {
              placeholderCount: 0,
              limit: R.tn,
              includeFrecency: !0,
              allowApplicationState: r,
              installOnDemand: r,
              applicationId: l.id,
            },
          ),
          _ =
            null !== (n = m.find((e) => e.id === l.id)) && void 0 !== n
              ? n
              : null,
          {
            sortOrder: h,
            setSortOrder: f,
            commands: A,
            canSort: E,
          } = (0, g.Z)({ sectionId: l.id, commandsByActiveSection: d });
        a.useEffect(() => {
          c(l.id);
        }, [l.id, c]);
        let N = (0, I.Z)({ channel: t, commands: A, limit: 5 });
        return (a.useEffect(() => {
          s(A.length > 0);
        }, [s, A]),
        p.current || 0 !== A.length)
          ? (0, i.jsxs)("ul", {
              className: y.contentContainer,
              children: [
                (0, i.jsx)(D, {
                  channel: t,
                  section: _,
                  commands: N,
                  headerName:
                    M.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
                  sectionName: o,
                }),
                (0, i.jsx)(D, {
                  channel: t,
                  section: _,
                  commands: p.current ? Z : A,
                  headerName: M.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
                  sectionName: o,
                  children:
                    E &&
                    (0, i.jsx)(b.Z, { sortOrder: h, onSortOptionClick: f }),
                }),
              ],
            })
          : null;
      }
    },
    536650: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(392711),
        o = t(780384),
        r = t(481060),
        s = t(410030),
        c = t(220082),
        d = t(564334),
        u = t(302221),
        m = t(424602),
        p = t(783097),
        _ = t(772606),
        C = t(488977),
        h = t(289760);
      function f(e, n, t) {
        return e + (n - e) * t;
      }
      function A(e) {
        let [n, t] = a.useState(void 0);
        return (
          a.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
          }, [e]),
          n
        );
      }
      function E(e) {
        let {
            application: n,
            name: t,
            iconURL: f,
            scrollerRef: E,
            sectionName: N,
          } = e,
          x = m.zQ.useExperiment(
            { location: "AppLauncherAppHeader" },
            { autoTrackExposure: !1 },
          ).enabled,
          v = (0, o.ap)((0, s.ZP)()),
          I = a.useRef(null),
          g = a.useRef(null),
          P = a.useRef(null),
          L = a.useRef(null),
          S = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
          b = (0, c.ZP)("number" == typeof f ? "" : f, null != S ? S : ""),
          T = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([
              d.Z.parseHexString(b),
              d.Z.parseHexString(v ? "#000000" : "#ffffff"),
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
              : b;
          }, [b, v]),
          R = A(I),
          M = A(g),
          j = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c, d;
            let u = E.current,
              m = I.current,
              p = P.current,
              _ = null == L ? void 0 : L.current,
              C = parseInt(
                null !== (e = null == R ? void 0 : R.height) && void 0 !== e
                  ? e
                  : "",
              ),
              h = parseInt(
                null !== (n = null == M ? void 0 : M.height) && void 0 !== n
                  ? n
                  : "",
              );
            if (null != u && null != m && null != p && !isNaN(C) && !isNaN(h)) {
              let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                n = 0 !== u.scrollHeight ? u.scrollHeight : h + 20,
                f = 0 !== u.clientHeight ? u.clientHeight : h + 20,
                A = h - C,
                E = (0, l.clamp)(n - f, A + 1, h + 20);
              let N =
                ((i = e),
                (a = A) === (o = E)
                  ? 1
                  : (0, l.clamp)((i - a) / (o - a), 0, 1));
              if (
                ((m.style.filter = "brightness(".concat(
                  1 + ((v ? 1.4 : 0.6) - (r = 1)) * N,
                  ")",
                )),
                (m.style.backgroundColor = "color-mix(in oklab,"
                  .concat(b, " ")
                  .concat((1 - N) * 100, "%, ")
                  .concat(T, ")")),
                (p.style.opacity = "".concat(0 + (1 - (s = 0)) * N)),
                (p.style.transform = "translateY(".concat(
                  (c = C / 4) + (0 - c) * N,
                  "px)",
                )),
                null != _)
              ) {
                _.style.opacity = "".concat(1 + (0 - (d = 1)) * N);
              }
            }
          }, [
            T,
            b,
            null == M ? void 0 : M.height,
            v,
            E,
            null == R ? void 0 : R.height,
          ]);
        return (
          a.useEffect(() => {
            j();
          }, [j, v]),
          a.useEffect(() => {
            let e = E.current,
              n = () => {
                j();
              };
            return (
              null == e || e.addEventListener("scroll", n),
              () => {
                null == e || e.removeEventListener("scroll", n);
              }
            );
          }, [E, j]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: h.stickyContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: h.stickyBannerContainer,
                    children: (0, i.jsx)("div", {
                      className: h.stickyBanner,
                      ref: I,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: h.backButtonContainer,
                    children: (0, i.jsx)(_.Z, { className: h.headerButton }),
                  }),
                  (0, i.jsx)("div", {
                    className: h.nameContainer,
                    children: (0, i.jsx)(r.Heading, {
                      ref: P,
                      className: h.textApplicationName,
                      variant: "heading-md/extrabold",
                      children: t,
                    }),
                  }),
                ],
              }),
              (0, p.BQ)(n) && x
                ? (0, i.jsx)("div", {
                    ref: L,
                    className: h.moreMenuButtonContainer,
                    children: (0, i.jsx)(C.Z, {
                      application: n,
                      className: h.headerButton,
                      sectionName: N,
                    }),
                  })
                : null,
              (0, i.jsx)("div", {
                ref: g,
                className: h.bannerBackground,
                style: { backgroundColor: b },
              }),
            ],
          })
        );
      }
    },
    675993: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(442837),
        s = t(481060),
        c = t(115130),
        d = t(147865),
        u = t(427996),
        m = t(812236),
        p = t(70097),
        _ = t(240991),
        C = t(973616),
        h = t(783097),
        f = t(695676),
        A = t(520315),
        E = t(29380),
        N = t(689938),
        x = t(131242),
        v = t(554034);
      function I(e) {
        let {
            channel: n,
            application: t,
            videoUrl: l,
            imageCoverUrl: s,
            sectionName: d,
            hasCommands: m,
          } = e,
          _ = a.useMemo(() => {
            var e;
            return null !== (e = (0, h.jD)(t)) && void 0 !== e ? e : "";
          }, [t]),
          C = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
          A = null != l,
          { isSlideReady: E } = (0, f.hH)(),
          [v, I] = a.useState(!1);
        return (
          a.useEffect(() => {
            E && I(!0);
          }, [E]),
          (0, i.jsxs)("div", {
            className: x.container,
            children: [
              (0, i.jsxs)("div", {
                className: x.profileAndVideoContainer,
                children: [
                  A
                    ? (0, i.jsxs)("div", {
                        className: x.videoContainer,
                        children: [
                          v
                            ? (0, i.jsx)(p.Z, {
                                className: o()(x.videoCover, x.video),
                                loop: !0,
                                muted: !0,
                                autoPlay: !0,
                                src: l,
                                poster: s,
                              })
                            : null,
                          (0, i.jsx)("img", {
                            className: x.videoCover,
                            src: s,
                            "aria-label": N.Z.Messages.IMAGE,
                          }),
                        ],
                      })
                    : null,
                  (0, i.jsxs)("div", {
                    className: A
                      ? x.overviewContainerWithVideo
                      : x.overviewContainerNoVideo,
                    children: [
                      (0, i.jsx)(P, { application: t }),
                      (0, i.jsx)(L, { application: t }),
                      _.length > 0 ? (0, i.jsx)(T, { description: _ }) : null,
                      C
                        ? (0, i.jsx)("div", {
                            className: x.developerShelfControlsContainer,
                            children: (0, i.jsx)(u.W, {
                              hideSearch: !0,
                              className: x.developerShelfControls,
                            }),
                          })
                        : null,
                      (0, i.jsx)(b, {
                        channel: n,
                        application: t,
                        sectionName: d,
                        isDeveloperOfThisApp: C,
                        hasCommands: m,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(g, { application: t }),
            ],
          })
        );
      }
      function g(e) {
        let { application: n } = e,
          t = (0, h.Cb)(n),
          a = (0, h.Hu)(n);
        return t || a
          ? (0, i.jsxs)("div", {
              className: x.monetizationDisclosureContainerStyle,
              children: [
                t
                  ? (0, i.jsxs)("div", {
                      className: x.monetizationDisclosureStyle,
                      children: [
                        (0, i.jsx)(s.ShopIcon, {
                          size: "sm",
                          color: s.tokens.colors.INTERACTIVE_MUTED,
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: N.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE,
                        }),
                      ],
                    })
                  : null,
                a
                  ? (0, i.jsxs)("div", {
                      className: x.monetizationDisclosureStyle,
                      children: [
                        (0, i.jsx)(s.BillIcon, {
                          size: "sm",
                          color: s.tokens.colors.INTERACTIVE_MUTED,
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: N.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE,
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null;
      }
      function P(e) {
        var n;
        let { application: t } = e,
          a = (0, h.BQ)(t)
            ? t.name
            : null !== (n = (0, h.$d)(t)) && void 0 !== n
              ? n
              : "",
          l = (0, h.vJ)(t);
        return (0, i.jsxs)("div", {
          className: x.titleContainer,
          children: [
            (0, i.jsx)(s.Heading, {
              variant: "heading-xl/extrabold",
              lineClamp: 1,
              children: a,
            }),
            l
              ? (0, i.jsx)("div", {
                  className: x.partnerLabelContainer,
                  children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-normal",
                    children: N.Z.Messages.APP_DIRECTORY_PARTNER,
                  }),
                })
              : null,
          ],
        });
      }
      function L(e) {
        let { application: n } = e,
          t = a.useMemo(() => {
            var e;
            return (0, h.BQ)(n) &&
              null !== (e = null == n ? void 0 : n.tags) &&
              void 0 !== e
              ? e
              : [];
          }, [n]);
        return (0, h.ye)(n)
          ? (0, i.jsxs)("div", {
              className: x.tagsContainer,
              children: [
                (0, i.jsx)(S, { application: n }),
                t.map((e, n) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: x.tagContainer,
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
      function S(e) {
        var n;
        let { application: t } = e;
        if (!(0, h.ye)(t)) return null;
        let a =
          null !==
            (n = (0, h.BQ)(t)
              ? t instanceof C.Z
                ? t.maxParticipants
                : t.max_participants
              : 0) && void 0 !== n
            ? n
            : 0;
        return (0, i.jsxs)("div", {
          className: x.tagContainer,
          children: [
            (0, i.jsx)(s.GroupIcon, {
              size: "xs",
              color: s.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              color: "interactive-normal",
              children: (0, d.lY)(a),
            }),
          ],
        });
      }
      function b(e) {
        let {
            channel: n,
            application: t,
            sectionName: a,
            hasCommands: l,
            isDeveloperOfThisApp: o,
          } = e,
          r = (0, m.Fs)(n, t.id);
        return (0, h.BQ)(t)
          ? null != r
            ? (0, i.jsx)("div", {
                className: x.entrypointContainer,
                children: (0, i.jsx)(E.Z, {
                  channel: n,
                  application: t,
                  sectionName: a,
                  primaryEntryPointCommand: r,
                  buttonSize: s.ButtonSizes.MAX,
                }),
              })
            : o && !l && (0, h.ye)(t)
              ? (0, i.jsx)(s.HelpMessage, {
                  className: x.primaryEntryPointWarningMessage,
                  messageType: s.HelpMessageTypes.WARNING,
                  children:
                    N.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_MISSING_WARNING.format(),
                })
              : null
          : null;
      }
      function T(e) {
        let { description: n } = e,
          [t, l] = a.useState(!0);
        a.useLayoutEffect(() => l(!1), []);
        let o = a.useMemo(() => (0, _.parseBioReact)(n), [n]),
          {
            ref: r,
            lineHeight: c,
            lineCount: d,
          } = (function () {
            let e = a.useRef(null),
              [n, t] = a.useState(null),
              [i, l] = a.useState(null);
            return (
              a.useLayoutEffect(() => {
                let n = e.current;
                if (null === n || 0 === n.clientHeight) return;
                let i = parseInt(getComputedStyle(n).lineHeight);
                if (!isNaN(i)) t(i), l(Math.floor(n.clientHeight / i));
              }, []),
              { ref: e, lineHeight: n, lineCount: i }
            );
          })(),
          u = a.useMemo(() => {
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
            onTransitionEnd: C,
          } = (0, A.Z)({ isExpanded: t, ...u }),
          h = t || p;
        return (0, i.jsxs)("div", {
          className: x.descriptionContainer,
          children: [
            (0, i.jsx)("div", {
              ref: m,
              className: x.overflowHidden,
              onTransitionEnd: C,
              children: (0, i.jsx)(s.Text, {
                ref: r,
                className: v.markup,
                variant: "text-sm/medium",
                lineClamp: h ? void 0 : 1,
                style: { maxHeight: h ? void 0 : u.minHeightOverride },
                children: o,
              }),
            }),
            null != d && d > 1
              ? (0, i.jsxs)(s.Clickable, {
                  className: x.expandableDescriptionClickable,
                  onClick: () => l((e) => !e),
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-sm/semibold",
                      color: "text-brand",
                      children: h
                        ? N.Z.Messages.APP_LAUNCHER_SHOW_LESS
                        : N.Z.Messages.APP_LAUNCHER_SHOW_MORE,
                    }),
                    h
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
          return I;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(442837),
        o = t(218061),
        r = t(481060),
        s = t(361213),
        c = t(778569),
        d = t(213459),
        u = t(835473),
        m = t(541099),
        p = t(827498),
        _ = t(783097),
        C = t(753972),
        h = t(387658),
        f = t(536650),
        A = t(675993),
        E = t(689079),
        N = t(689938),
        x = t(804978),
        v = t(413097);
      function I(e) {
        var n;
        let { channel: t, application: s, sectionName: c } = e,
          I = (0, l.e7)([m.Z], () => m.Z.entrypoint()),
          P =
            null !== (n = (0, u.q)(s.id === E.bi.BUILT_IN ? null : s.id)) &&
            void 0 !== n
              ? n
              : s,
          L = (0, _.ye)(P) ? g : A.Z,
          S = a.useRef(null),
          [b, T] = a.useState(!1),
          { iconURL: R, name: M } = a.useMemo(
            () => (0, _.sl)(P, { fakeAppIconURL: v, size: 84 }),
            [P],
          ),
          j = (0, d.PL)(!0, !0),
          y = (0, d.LD)(t.guild_id, !0),
          O = a.useMemo(() => (0, d.If)(t, P.id), [j, y, t, P.id]),
          Z = !O.isGuildInstalled && !O.isUserInstalled;
        return (
          a.useEffect(() => {
            Z && d.ZP.queryInstallOnDemandApp(P.id, t.id);
          }, [P.id, t.id, Z]),
          (0, i.jsxs)(r.ScrollerNone, {
            className: x.container,
            fade: !0,
            ref: S,
            role: "region",
            "aria-label":
              N.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format(
                { applicationName: M },
              ),
            children: [
              (0, i.jsx)(f.Z, {
                application: P,
                name: M,
                iconURL: R,
                scrollerRef: S,
                sectionName: c,
              }),
              null != R && (0, i.jsx)(C.Z, { src: R, className: x.appIcon }),
              (0, i.jsx)(o.Z, { size: 54 }),
              (0, i.jsx)(L, {
                channel: t,
                application: P,
                sectionName: c,
                hasCommands: b,
              }),
              I === p._b.TEXT
                ? (0, i.jsx)(h.Z, {
                    channel: t,
                    application: P,
                    sectionName: c,
                    installOnDemand: Z,
                    setHasCommands: T,
                  })
                : null,
            ],
          })
        );
      }
      function g(e) {
        let { channel: n, application: t, sectionName: a, hasCommands: l } = e,
          o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ["embedded_cover"],
          }),
          r = (0, _.yJ)(t),
          d =
            null != r && null != r.activity_preview_video_asset_id
              ? (0, s.Z)(t.id, r.activity_preview_video_asset_id)
              : null;
        return (0, i.jsx)(A.Z, {
          channel: n,
          application: t,
          imageCoverUrl: o.url,
          videoUrl: d,
          sectionName: a,
          hasCommands: l,
        });
      }
    },
    488977: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        o = t(481060),
        r = t(367907),
        s = t(895924),
        c = t(311819),
        d = t(572004),
        u = t(135431),
        m = t(541099),
        p = t(783097),
        _ = t(314734),
        C = t(981631),
        h = t(689938),
        f = t(500257);
      function A(e) {
        let { application: n, className: t, sectionName: a } = e,
          A = (0, p.L1)(n),
          E = (0, u.Eb)(A),
          N = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: a,
            source: m.Z.lastShownEntrypoint(),
          };
        return (0, i.jsx)(o.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsxs)(o.Menu, {
              className: _.NN,
              navId: "app-details-more-menu",
              onClose: t,
              "aria-label": h.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
              onSelect: void 0,
              children: [
                E
                  ? (0, i.jsx)(o.MenuItem, {
                      id: "add-app",
                      label: h.Z.Messages.APPLICATION_ADD_BUTTON,
                      action: () => {
                        null == A.customInstallUrl &&
                          (0, r.yw)(
                            C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED,
                            N,
                          ),
                          (0, u.LO)({
                            ...A,
                            oauth2Callback: (e) => {
                              let { location: n } = e;
                              null != n &&
                                (0, r.yw)(
                                  C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                  N,
                                );
                            },
                            source: "app_launcher_app_details",
                          });
                      },
                    })
                  : null,
                (0, i.jsx)(o.MenuItem, {
                  id: "copy",
                  label: h.Z.Messages.COPY_LINK,
                  action: () => {
                    (0, d.JG)((0, c.J)({ id: n.id, ...A }));
                  },
                }),
              ],
            });
          },
          align: "right",
          position: "bottom",
          children: (e) =>
            (0, i.jsx)(o.Clickable, {
              onClick: e.onClick,
              className: l()(f.clickable, t),
              "aria-label": h.Z.Messages.MORE,
              children: (0, i.jsx)(o.MoreHorizontalIcon, {
                size: "sm",
                color: o.tokens.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    29380: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(481060),
        o = t(542094),
        r = t(895924),
        s = t(499254),
        c = t(827498),
        d = t(160973),
        u = t(783097),
        m = t(890280),
        p = t(176412),
        _ = t(689938),
        C = t(94958);
      function h(e) {
        let {
            channel: n,
            application: t,
            sectionName: h,
            primaryEntryPointCommand: f,
            buttonSize: A = l.ButtonSizes.MEDIUM,
          } = e,
          E = a.useId(),
          N = a.useCallback(() => {
            s.y(c.ti.ACTIVITY);
          }, []),
          { submitting: x, wasSubmitting: v } = (0, m.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: E,
            onSubmissionComplete: N,
          }),
          [I, g] = a.useState(!1),
          P = (0, o.Qv)({ applicationId: t.id, channelId: n.id }),
          L = a.useMemo(() => (0, u.XZ)(f.displayName), [f.displayName]),
          {
            onActivityItemSelected: S,
            buttonColor: b,
            buttonText: T,
          } = (0, p.P7)({
            channel: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: h,
            commandName: L,
            autoDismissOnClick: P === o.JS.LEAVE,
            launchingComponentId: E,
            submitting: null != v ? v : x,
          }),
          { disabled: R, reason: M } = (0, d.Z)({
            channelId: n.id,
            application: t,
            activityAction: P,
          });
        return (0, i.jsx)(l.Tooltip, {
          shouldShow: R,
          tooltipContentClassName: C.tooltipContent,
          text: M,
          children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(l.Button, {
              ...a,
              type: "submit",
              size: A,
              color: b,
              disabled: R,
              submitting: I,
              onClick: () => {
                g(!0), S(), null == n || n();
              },
              "aria-label":
                _.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format(
                  { buttonText: T, applicationName: t.name },
                ),
              children: T,
            });
          },
        });
      }
    },
    870205: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250),
        a = t(481060),
        l = t(984168),
        o = t(314734),
        r = t(689938),
        s = t(984177);
      function c(e) {
        let n,
          { sortOrder: t, onSortOptionClick: c } = e;
        switch (t) {
          case o.bS.POPULAR:
            n = r.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
            break;
          case o.bS.ALPHABETICAL:
            n = r.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL;
        }
        return (0, i.jsx)(a.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(l.Z, {
              sortOrder: t,
              onSortOptionClick: c,
              closePopout: n,
            });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsxs)(a.Button, {
              ...e,
              size: a.Button.Sizes.MIN,
              color: a.Button.Colors.CUSTOM,
              className: s.sortDropdown,
              innerClassName: s.sortDropdownInner,
              "aria-label": r.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
              children: [
                (0, i.jsx)(a.ArrowsUpDownIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: s.sortIconMargin,
                }),
                (0, i.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: n,
                }),
                l
                  ? (0, i.jsx)(a.ChevronSmallUpIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    })
                  : (0, i.jsx)(a.ChevronSmallDownIcon, {
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
      var i = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        o = t(481060),
        r = t(314734),
        s = t(689938),
        c = t(84390);
      function d(e) {
        let { sortOrder: n, onSortOptionClick: t, closePopout: a } = e,
          d = (e) => {
            t(e), a();
          };
        return (0, i.jsx)("div", {
          className: l()(r.Jh, c.container),
          children: (0, i.jsx)(o.Menu, {
            navId: "command-list-sort",
            "aria-label":
              s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
            hideScroller: !0,
            onClose: a,
            onSelect: a,
            children: (0, i.jsxs)(o.MenuGroup, {
              label: s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
              children: [
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "sort-by-popular",
                  group: "sort-by",
                  label:
                    s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
                  action: () => d(r.bS.POPULAR),
                  checked: n === r.bS.POPULAR,
                }),
                (0, i.jsx)(o.MenuRadioItem, {
                  id: "sort-by-alphabetical",
                  group: "sort-by",
                  label:
                    s.Z.Messages
                      .APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
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
      var i = t(735250);
      t(470079);
      var a = t(780384),
        l = t(481060),
        o = t(410030),
        r = t(176412),
        s = t(98793),
        c = t(983008),
        d = t(478408);
      function u(e) {
        let { searchQuery: n, textContent: t, type: u } = e,
          m = (0, o.ZP)(),
          p = (0, a.ap)(m) ? d : c;
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
              (0, i.jsx)(l.Text, {
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
          return Y;
        },
      }),
        t(47120),
        t(653041),
        t(724458);
      var i = t(735250),
        a = t(470079),
        l = t(392711),
        o = t.n(l),
        r = t(892814),
        s = t(79411),
        c = t(442837),
        d = t(481060),
        u = t(911969),
        m = t(115130),
        p = t(566620),
        _ = t(127255),
        C = t(880308),
        h = t(427996),
        f = t(367907),
        A = t(399654),
        E = t(844439),
        N = t(254711),
        x = t(213459),
        v = t(10718),
        I = t(895924),
        g = t(148958),
        P = t(541099),
        L = t(827498),
        S = t(87005),
        b = t(106066),
        T = t(783097),
        R = t(695676),
        M = t(98880),
        j = t(804307),
        y = t(888617),
        O = t(561160),
        Z = t(41558),
        H = t(105862),
        U = t(28147),
        B = t(981631),
        D = t(689079),
        k = t(689938),
        w = t(597976);
      let V = [],
        W = [, , , ,].fill(0).map((e, n) => n),
        F = [
          {
            cards: [, , , ,].fill(0).map((e, n) => n),
            look: M.U4.MEDIUM_BANNER,
          },
          { cards: [, , , ,].fill(0).map((e, n) => n), look: M.U4.ROW },
          { cards: [, , , ,].fill(0).map((e, n) => n), look: M.U4.ROW },
        ];
      function Y(e) {
        let {
            channel: n,
            entrypoint: t,
            searchQuery: l,
            setSearchQuery: o,
            setScroller: r,
            isScrollCloseToBottom: s,
          } = e,
          u = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []),
          _ = t === L._b.TEXT && !n.isPrivate(),
          C = (0, T.Yn)(t),
          h = !(0, T.Yn)(t),
          f = t === L._b.TEXT,
          [A, E] = $(!0),
          [N, x] = $(_),
          [v, I] = $(C),
          [g, P] = $(h),
          S = A && N && v && g,
          b = (C || _) && !S,
          R = h && u;
        a.useEffect(() => {
          (0, p.w1)({ guildId: n.guild_id, force: !0 });
        }, [n.guild_id]),
          a.useEffect(() => {
            t === L._b.VOICE && p.ux();
          }, [t]);
        let M = l.length > 0;
        return (0, i.jsxs)("div", {
          className: w.container,
          children: [
            R ? (0, i.jsx)(G, {}) : null,
            (0, i.jsx)(z, {
              searchQuery: l,
              setSearchQuery: o,
              placeholder: f
                ? k.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER
                : k.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER,
            }),
            (0, i.jsx)(d.Scroller, {
              ref: r,
              className: w.scrollableContent,
              fade: !0,
              children: M
                ? (0, i.jsx)(U.Z, {
                    channel: n,
                    query: l,
                    entrypoint: t,
                    isScrollCloseToBottom: s,
                  })
                : (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(J, {
                        channel: n,
                        entrypoint: t,
                        onEmptyState: E,
                      }),
                      _ && (0, i.jsx)(q, { channel: n, onEmptyState: x }),
                      C &&
                        (0, i.jsx)(Q, {
                          channel: n,
                          entrypoint: t,
                          onEmptyState: I,
                        }),
                      h && (0, i.jsx)(X, { channel: n, onEmptyState: P }),
                      S &&
                        (0, i.jsx)(O.A, {
                          type: L.LG.HOME_EMPTY,
                          textContent:
                            t === L._b.TEXT
                              ? k.Z.Messages
                                  .APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY
                              : k.Z.Messages
                                  .APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY,
                        }),
                      b && (0, i.jsx)(H.Z, {}),
                    ],
                  }),
            }),
          ],
        });
      }
      function G() {
        return (0, i.jsxs)("div", {
          className: w.developerShelfControlsContainer,
          children: [
            (0, i.jsx)(d.Text, {
              className: w.developerShelfControlsLabel,
              variant: "text-sm/normal",
              children:
                k.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE,
            }),
            (0, i.jsx)(h.W, { hideSearch: !0 }),
          ],
        });
      }
      function z(e) {
        let { searchQuery: n, setSearchQuery: t, placeholder: l } = e,
          r = a.useRef(null),
          [s, c] = a.useState(!1),
          u = a.useMemo(
            () =>
              o().debounce(
                (e) => {
                  (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                    query: e,
                    source: P.Z.entrypoint(),
                    location: I.Vh.APP_LAUNCHER_HOME,
                  });
                },
                400,
                { leading: !1, trailing: !0 },
              ),
            [],
          ),
          m = a.useCallback(() => t(""), [t]),
          p = a.useCallback(() => {
            c(!0),
              (0, f.yw)(B.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
                source: P.Z.entrypoint(),
                location: I.Vh.APP_LAUNCHER_HOME,
              });
          }, []),
          _ = a.useCallback(() => {
            c(!1);
          }, []),
          C = a.useCallback(
            (e) => {
              !s && p(), t(e), u(e);
            },
            [s, t, p, u],
          );
        return (
          a.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let n = () => {
              !s && p();
            };
            return (
              e.addEventListener("click", n),
              () => {
                e.removeEventListener("click", n);
              }
            );
          }, [s, p]),
          (0, i.jsx)("div", {
            className: w.searchBarContainer,
            children: (0, i.jsx)(d.SearchBar, {
              ref: (e) => {
                var n;
                r.current =
                  null !== (n = null == e ? void 0 : e.containerRef.current) &&
                  void 0 !== n
                    ? n
                    : null;
              },
              placeholder: l,
              query: n,
              onChange: C,
              onClear: m,
              size: d.SearchBar.Sizes.MEDIUM,
              onFocus: _,
              autoFocus: !0,
            }),
          })
        );
      }
      function J(e) {
        let { channel: n, entrypoint: t, onEmptyState: l } = e,
          o = t === L._b.VOICE,
          { frecentApps: r, loading: s } = (0, S.f)(n, o),
          c = a.useMemo(() => {
            let e = [];
            for (let n of r)
              null != n.application && e.push({ application: n.application });
            return e;
          }, [r]),
          d = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER,
          u = d;
        o && (u = k.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_ACTIVITIES);
        let { items: m, handleViewMore: p } = ee(
          u,
          t === L._b.VOICE ? M.U4.LARGE_BANNER : M.U4.ROW,
          c,
          8,
          L.L3.RECENT_APPS,
        );
        a.useEffect(() => {
          if (!0 !== s.current)
            0 !== m.length &&
              (0, f.yw)(B.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
                num: m.length,
                section_name: L.L3.RECENT_APPS,
                location: L.G0.HOME,
                source: t,
              });
        }, [m.length, t, s]);
        let _ = s.current,
          C = !_ && 0 === m.length;
        return (a.useEffect(() => {
          l(C);
        }, [C, l]),
        _ || C)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(Z.Z, {
                  title: d,
                  buttonType: Z.Z.buttonTypes.VIEW_MORE,
                  onClickViewButton: p,
                }),
                (0, i.jsx)("div", {
                  className: w.sectionContentContainer,
                  children: (0, i.jsx)("div", {
                    className: w.frecentList,
                    children: m.map((e, t) => {
                      let { application: a } = e;
                      return o
                        ? (0, i.jsx)(
                            M.qR,
                            {
                              channel: n,
                              application: a,
                              look: M.U4.ICON,
                              location: L.G0.HOME,
                              sectionName: L.L3.RECENT_APPS,
                              resultsPosition: t,
                              isOneClickCTA: !0,
                            },
                            a.id,
                          )
                        : (0, i.jsx)(
                            M.kA,
                            {
                              application: a,
                              look: M.U4.ICON,
                              location: L.G0.HOME,
                              sectionName: L.L3.RECENT_APPS,
                              resultsPosition: t,
                            },
                            a.id,
                          );
                    }),
                  }),
                }),
              ],
            });
      }
      function X(e) {
        let { channel: n, onEmptyState: t } = e;
        (0, C.g)();
        let l = (0, _.Z)({ guildId: n.getGuildId() }),
          o = M.U4.LARGE_BANNER,
          { trackSectionImpressionRef: r } = (0, y.Z)({
            sectionName: L.L3.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length,
          }),
          s = (0, b.s)("ActivitiesShelfSection"),
          c = 0 === l.length;
        return (a.useEffect(() => {
          t(c);
        }, [t, c]),
        c)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  ref: (e) => (r.current = e),
                  children: (0, i.jsx)(Z.Z, {
                    title: k.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: w.sectionTwoColumnContentContainer,
                  children: l.map((e, t) => {
                    let { application: a } = e;
                    return (0, i.jsx)(
                      M.qR,
                      {
                        channel: n,
                        application: a,
                        look: o,
                        location: I.Vh.APP_LAUNCHER_HOME,
                        sectionName: L.L3.ACTIVITIES,
                        resultsPosition: t,
                        isOneClickCTA: !s,
                      },
                      a.id,
                    );
                  }),
                }),
              ],
            });
      }
      function q(e) {
        var n;
        let { channel: t, onEmptyState: l } = e,
          r = (0, x.LD)(t.guild_id, !0),
          { commandsByActiveSection: s, loading: c } = v.wi(
            t,
            { commandTypes: [u.yU.CHAT, u.yU.PRIMARY_ENTRY_POINT] },
            { placeholderCount: 0, limit: D.tn, includeFrecency: !0 },
          ),
          d = a.useMemo(
            () =>
              s.reduce((e, n) => {
                let { section: t, data: i } = n;
                return i.length > 0 && e.add(t.id), e;
              }, new Set()),
            [s],
          ),
          m = a.useMemo(() => {
            var e, n;
            return Object.values(
              null !==
                (n =
                  null === (e = r.result) || void 0 === e
                    ? void 0
                    : e.sections) && void 0 !== n
                ? n
                : {},
            )
              .map((e) => {
                let { descriptor: n } = e;
                return n;
              })
              .filter((e) => !(e.id in N.Tm) && d.has(e.id));
          }, [
            null === (n = r.result) || void 0 === n ? void 0 : n.sections,
            d,
          ]),
          p = (0, g.h)(m),
          _ = L.L3.APPS_IN_THIS_SERVER,
          C = a.useMemo(
            () =>
              o()
                .compact(
                  p.map((e) => {
                    let { application: n } = e;
                    return n;
                  }),
                )
                .map((e) => ({ application: e })),
            [p],
          ),
          { items: h, handleViewMore: f } = ee(
            k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
            M.U4.ROW,
            C,
            4,
            _,
          ),
          { trackSectionImpressionRef: A } = (0, y.Z)({
            sectionName: _,
            numItems: C.length,
            numVisibleItems: h.length,
          }),
          E = r.fetchState.fetching || c.current,
          P = !E && 0 === h.length;
        return (a.useEffect(() => {
          l(P);
        }, [P, l]),
        P)
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  ref: (e) => (A.current = e),
                  children: (0, i.jsx)(Z.Z, {
                    title: k.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
                    buttonType: Z.Z.buttonTypes.VIEW_MORE,
                    onClickViewButton: f,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: w.sectionRowsContentContainer,
                  children: E
                    ? W.map((e) => (0, i.jsx)(j.Z, { look: M.U4.ROW }, e))
                    : h.map((e, n) => {
                        let { application: t } = e;
                        return null != t
                          ? (0, i.jsx)(
                              M.kA,
                              {
                                application: t,
                                look: M.U4.ROW,
                                sectionName: _,
                                resultsPosition: n,
                                location: I.Vh.APP_LAUNCHER_HOME,
                              },
                              t.id,
                            )
                          : null;
                      }),
                }),
              ],
            });
      }
      function Q(e) {
        let { channel: n, entrypoint: t, onEmptyState: l } = e,
          {
            fetchState: o,
            recommendationsSections: s,
            isInstallOnDemand: d,
          } = (function (e) {
            let { channel: n, location: t } = e,
              i = n.id;
            a.useEffect(() => {
              (0, A.a)({ channelId: i, location: t, withCommands: !1 });
            }, [i, t]);
            let { sectionDescriptors: l } = v.wi(
                n,
                { commandTypes: [u.yU.CHAT] },
                { placeholderCount: 0, limit: D.tn, includeFrecency: !0 },
              ),
              o = a.useCallback(
                (e) => !(null != l.find((n) => n.id === e.id)),
                [l],
              ),
              { fetchState: s, recommendationsSections: d } = (0, c.cj)(
                [E.ZP],
                () => ({
                  fetchState: E.ZP.getFetchState({
                    channelId: i,
                    location: t,
                    withCommands: !1,
                  }),
                  recommendationsSections: E.ZP.getRecommendations({
                    channelId: i,
                    location: t,
                    withCommands: !1,
                  }),
                }),
              ),
              m = t === r.I.APP_LAUNCHER_VOICE;
            return {
              fetchState: s,
              recommendationsSections: a.useMemo(
                () => (m ? (0, T.pF)(d) : d),
                [d, m],
              ),
              isInstallOnDemand: o,
            };
          })({
            channel: n,
            location:
              t === L._b.TEXT ? r.I.APP_LAUNCHER_TEXT : r.I.APP_LAUNCHER_VOICE,
          }),
          m = (function (e) {
            let { channel: n, recommendationsSections: t } = e;
            (0, C.g)();
            let i = (0, _.Z)({ guildId: n.getGuildId() });
            return a.useMemo(() => {
              if (!t.some((e) => e.appends_remaining_activities)) return V;
              let e = new Set();
              return (
                t.forEach((n) => {
                  n.items.forEach((n) => {
                    null != n.application && e.add(n.application.id);
                  });
                }),
                i.filter((n) => !e.has(n.application.id))
              );
            }, [t, i]);
          })({ channel: n, recommendationsSections: s }),
          p = o === E.M.FETCHING,
          h = !p && 0 === s.length;
        return (a.useEffect(() => {
          l(h);
        }, [h, l]),
        h)
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: p
                ? F.map((e, n) => {
                    let { cards: t, look: a } = e;
                    return (0, i.jsxs)(
                      "div",
                      {
                        children: [
                          (0, i.jsx)(Z.Z.Loading, {}),
                          (0, i.jsx)("div", {
                            className:
                              a === M.U4.ROW
                                ? w.sectionRowsContentContainer
                                : w.sectionTwoColumnContentContainer,
                            children: t.map((e) =>
                              (0, i.jsx)(j.Z, { look: a }, e),
                            ),
                          }),
                        ],
                      },
                      n,
                    );
                  })
                : s.map((e) =>
                    (0, i.jsx)(
                      K,
                      {
                        recommendationsSection: e,
                        remainingActivities: m,
                        isInstallOnDemand: d,
                      },
                      e.key,
                    ),
                  ),
            });
      }
      function K(e) {
        let n,
          t,
          {
            recommendationsSection: l,
            remainingActivities: o,
            isInstallOnDemand: r,
          } = e,
          c = l.section_title;
        switch (l.type) {
          case s.i.BANNER_CARDS:
            n = M.U4.LARGE_BANNER;
            break;
          case s.i.SMALL_BANNER_CARDS:
            n = M.U4.MEDIUM_BANNER;
            break;
          default:
            n = M.U4.ROW;
        }
        let d = a.useMemo(() => {
            let e = l.items.map((e) => {
              let { application: n } = e;
              return { application: n, installOnDemand: r(n) };
            });
            return (
              l.appends_remaining_activities &&
                e.push(
                  ...o.map((e) => {
                    let { application: n } = e;
                    return { application: n, installOnDemand: !0 };
                  }),
                ),
              e
            );
          }, [l.items, l.appends_remaining_activities, r, o]),
          u = l.key;
        switch (l.type) {
          case s.i.BANNER_CARDS:
          case s.i.SMALL_BANNER_CARDS:
            t = 6;
            break;
          case s.i.EXPANDABLE_LIST:
          default:
            t = 4;
        }
        let { items: m, handleViewMore: p } = ee(c, n, d, t, u),
          { trackSectionImpressionRef: _ } = (0, y.Z)({
            sectionName: u,
            numItems: d.length,
            numVisibleItems: m.length,
          }),
          C = l.type !== s.i.SMALL_BANNER_CARDS;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", {
              ref: (e) => (_.current = e),
              children: (0, i.jsx)(Z.Z, {
                title: l.section_title,
                buttonType: Z.Z.buttonTypes.VIEW_MORE,
                onClickViewButton: p,
              }),
            }),
            (0, i.jsx)("div", {
              className:
                n === M.U4.ROW
                  ? w.sectionRowsContentContainer
                  : w.sectionTwoColumnContentContainer,
              children: m.map((e, t) => {
                let { application: a, installOnDemand: l } = e;
                return (0, i.jsx)(
                  M.kA,
                  {
                    application: a,
                    look: n,
                    sectionName: u,
                    resultsPosition: t,
                    location: I.Vh.APP_LAUNCHER_HOME,
                    installOnDemand: l,
                    enableVideoBanner: C,
                  },
                  a.id,
                );
              }),
            }),
          ],
        });
      }
      function $(e) {
        let [n, t] = a.useState(!e);
        return [
          n,
          a.useCallback(function () {
            let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            t(e);
          }, []),
        ];
      }
      function ee(e, n, t, i, l) {
        let { pushHistory: o } = (0, R.hH)();
        return a.useMemo(
          () =>
            t.length <= i
              ? { items: t, handleViewMore: void 0 }
              : {
                  items: t.slice(0, i),
                  handleViewMore: () => {
                    (0, f.yw)(B.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
                      section_name: l,
                      source: P.Z.entrypoint(),
                      num: t.length,
                    }),
                      o({
                        type: R.gc.LIST,
                        title: e,
                        look: n,
                        items: t,
                        sectionName: l,
                      });
                  },
                },
          [t, i, l, o, e, n],
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
        a,
        l = t(735250),
        o = t(470079),
        r = t(481060),
        s = t(689938),
        c = t(633236);
      function d(e) {
        let { title: n, buttonType: t, onClickViewButton: i } = e;
        return (0, l.jsxs)("div", {
          className: c.header,
          children: [
            (0, l.jsx)(r.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: n,
            }),
            null != t &&
              null != i &&
              (0, l.jsx)(r.Clickable, {
                className: c.viewMore,
                onClick: i,
                "aria-label":
                  s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW_ARIA_LABEL.format({
                    title: n,
                  }),
                children: (0, l.jsx)(r.Text, {
                  variant: "text-md/medium",
                  color: "text-brand",
                  children:
                    0 === t
                      ? s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW
                      : s.Z.Messages.APP_LAUNCHER_VIEW_LESS_ROW,
                }),
              }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.VIEW_MORE = 0)] = "VIEW_MORE"),
        (i[(i.VIEW_LESS = 1)] = "VIEW_LESS"),
        (d.buttonTypes = a),
        (d.Loading = function () {
          let e = o.useMemo(
            () => ({ width: "".concat(10 + 20 * Math.random(), "%") }),
            [],
          );
          return (0, l.jsx)("div", {
            className: c.loadingHeader,
            style: e,
            children: (0, l.jsx)(r.Text, {
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
          return f;
        },
      });
      var i = t(735250),
        a = t(470079),
        l = t(780384),
        o = t(481060),
        r = t(410030),
        s = t(782568),
        c = t(63063),
        d = t(827498),
        u = t(888617),
        m = t(981631),
        p = t(689938),
        _ = t(597397),
        C = t(983008),
        h = t(478408);
      function f() {
        let e = (0, r.ZP)(),
          n = (0, l.ap)(e) ? h : C,
          t = a.useCallback(() => {
            (0, s.Z)(
              c.Z.getArticleURL(m.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON),
            );
          }, []),
          { trackSectionImpressionRef: f } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1,
          });
        return (0, i.jsxs)("div", {
          ref: (e) => (f.current = e),
          className: _.container,
          children: [
            (0, i.jsx)("img", {
              className: _.image,
              src: n,
              alt: "",
              "aria-hidden": !0,
            }),
            (0, i.jsxs)("div", {
              className: _.body,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children:
                    p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-normal",
                  children:
                    p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY,
                }),
              ],
            }),
            (0, i.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              "aria-label":
                p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE_ARIA_LABEL.format(
                  {
                    sectionTitle:
                      p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_TITLE,
                    sectionBody:
                      p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_BODY,
                  },
                ),
              onClick: t,
              children:
                p.Z.Messages.APP_LAUNCHER_HOME_LEARN_MORE_SECTION_LEARN_MORE,
            }),
          ],
        });
      }
    },
    106771: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(735250),
        a = t(470079),
        l = t(481060),
        o = t(239091),
        r = t(823531),
        s = t(695346),
        c = t(973616),
        d = t(783097),
        u = t(176412),
        m = t(753972),
        p = t(532309),
        _ = t(686356),
        C = t(413097);
      function h(e) {
        var n;
        let {
            command: t,
            application: h,
            onClick: f,
            query: A,
            searchResultsPosition: E,
          } = e,
          N = s.Sb.useSetting(),
          x = a.useCallback(
            (e) => {
              if ((0, d.BQ)(h) && N) {
                let n = h instanceof c.Z ? h : c.Z.createFromServer(h);
                (0, o.vq)(e, (e) => (0, i.jsx)(r.Z, { application: n, ...e }));
              }
            },
            [h, N],
          ),
          {
            iconURL: v,
            name: I,
            description: g,
          } = a.useMemo(() => (0, d.sl)(h, { fakeAppIconURL: C }), [h]),
          P = a.useMemo(() => {
            var e;
            let n =
              null !== (e = null == t ? void 0 : t.displayDescription) &&
              void 0 !== e
                ? e
                : g;
            return null == n ? null : (0, u.ae)(n, void 0);
          }, [g, null == t ? void 0 : t.displayDescription]),
          { trackSearchResultsItemImpressionRef: L } = (0, p.Z)({
            applicationId: h.id,
            commandId: null == t ? void 0 : t.id,
            query: A,
            searchResultsPosition: E,
          });
        return (0, i.jsx)(l.Clickable, {
          className: _.clickable,
          innerRef: (e) => (L.current = e),
          onClick: f,
          onContextMenu: x,
          children: (0, i.jsxs)(l.FocusBlock, {
            className: _.focusBlock,
            children: [
              (0, i.jsx)(m.Z, {
                src: v,
                className: _.icon,
                "aria-hidden": !0,
                rendersPlaceholder: !0,
              }),
              (0, i.jsxs)("div", {
                className: _.cmdDetails,
                children: [
                  (0, i.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    lineClamp: 1,
                    children:
                      null !== (n = null == t ? void 0 : t.displayName) &&
                      void 0 !== n
                        ? n
                        : I,
                  }),
                  (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    lineClamp: 1,
                    children: P,
                  }),
                ],
              }),
              null != t
                ? (0, i.jsx)(l.Text, {
                    className: _.cmdAppName,
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: I,
                  })
                : null,
              (0, i.jsx)("div", { className: _.underline }),
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
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(442837),
        s = t(481060),
        c = t(607070),
        d = t(919071);
      function u() {
        let e = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
          { styleLarge: n, styleSmall: t } = a.useMemo(
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
          return O;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(392711),
        o = t.n(l),
        r = t(209173),
        s = t(110924),
        c = t(367907),
        d = t(555573),
        u = t(895924),
        m = t(809547),
        p = t(583027),
        _ = t(585483),
        C = t(499254),
        h = t(541099),
        f = t(827498),
        A = t(392370),
        E = t(98880),
        N = t(804307),
        x = t(520315),
        v = t(532309),
        I = t(561160),
        g = t(41558),
        P = t(106771),
        L = t(79984),
        S = t(314734),
        b = t(981631),
        T = t(689938),
        R = t(454093);
      let M = Array(6)
          .fill(0)
          .map((e, n) => n),
        j = [, , ,].fill(0).map((e, n) => n),
        y = [, , , ,].fill(0).map((e, n) => n);
      function O(e) {
        return (0, i.jsx)(Z, { ...e });
      }
      function Z(e) {
        let {
            channel: n,
            query: t,
            entrypoint: l,
            isScrollCloseToBottom: s,
          } = e,
          c = l === f._b.TEXT,
          d = l === f._b.TEXT,
          {
            loading: u,
            isEmptyState: p,
            commandResults: _,
            hasCommandResults: C,
            applicationResults: h,
          } = (0, A.pe)({
            channel: n,
            query: t,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: d,
          }),
          {
            fetchState: E,
            applicationResults: N,
            fetchNextPage: x,
          } = (0, A.Q2)({
            query: t,
            channel: n,
            fetches: !0,
            pageLimit: 5,
            entrypoint: l,
          });
        a.useEffect(() => {
          s && E === m.M.FETCHED && x();
        }, [x, E, s]);
        let v = null == E || E === m.M.FETCHING,
          g = a.useMemo(() => {
            let e = h.map((e) => ({ application: e, installOnDemand: !0 })),
              n = new Set(
                h.map((e) => {
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
          }, [N, h]),
          P = g.length > 0,
          L = p && !P && !v;
        return u
          ? (0, i.jsx)(k, {})
          : L
            ? (0, i.jsx)(I.A, {
                type: f.LG.SEARCH_EMPTY,
                searchQuery: t,
                textContent:
                  l === f._b.TEXT
                    ? T.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY
                    : T.Z.Messages
                        .APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY,
              })
            : (0, i.jsxs)("div", {
                children: [
                  C &&
                    (0, i.jsx)(H, { channel: n, commandResults: _, query: t }),
                  (P || v) &&
                    (0, i.jsx)(B, {
                      applicationResults: g,
                      includePlaceholder: v,
                      query: t,
                      searchesBots: d,
                    }),
                ],
              });
      }
      function H(e) {
        var n, t;
        let { channel: l, commandResults: o, query: r } = e,
          m = o.length > 4,
          A = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
          [E, N] = a.useState(!1),
          v = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E,
          I = a.useCallback(() => N((e) => !e), []),
          L = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
          M = E && !L;
        a.useLayoutEffect(() => N(!1), [L]);
        let {
          ref: j,
          isTransitioning: y,
          onTransitionEnd: O,
        } = (0, x.Z)({
          key: r,
          isExpanded: M,
          durationMs: 200,
          maxAnimationHeight: S.K7,
        });
        a.useEffect(() => {
          !v &&
            E &&
            (0, c.yw)(b.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
              section_name: f.L3.SEARCH,
              source: h.Z.entrypoint(),
              num: o.length,
            });
        }, [o.length, v, E]);
        let Z = M || y,
          H = M ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
          U = Z ? o : A;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(g.Z, {
              title: T.Z.Messages.COMMANDS,
              buttonType: H,
              onClickViewButton: m ? I : void 0,
            }),
            (0, i.jsx)("div", {
              className: R.sectionContentContainer,
              ref: j,
              onTransitionEnd: O,
              children: U.map((e, n) => {
                let { command: t, application: a, section: o } = e;
                return (0, i.jsx)(
                  P.Z,
                  {
                    command: t,
                    application: a,
                    query: r,
                    searchResultsPosition: n,
                    onClick: () => {
                      let e = h.Z.entrypoint();
                      C.y(f.ti.DISMISSED),
                        (0, p.Mo)({
                          command: t,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: f.L3.SEARCH,
                        }),
                        d.Po({
                          channelId: l.id,
                          command: t,
                          section: o,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          triggerSection: void 0,
                          queryLength: r.length,
                          sectionName: f.L3.SEARCH,
                          query: r,
                          searchResultsPosition: n,
                          source: e,
                        }),
                        _.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                          channelId: l.id,
                        });
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
        let { trackSearchResultsItemImpressionRef: n } = (0, v.Z)({
          applicationId: e.application.id,
          query: e.query,
          searchResultsPosition: e.resultsPosition,
        });
        return (0, i.jsx)("div", {
          className: R.searchOpenAppDetailAppCard,
          ref: (e) => (n.current = e),
          children: (0, i.jsx)(E.kA, {
            ...e,
            tracksImpression: !1,
            enableVideoBanner: !0,
          }),
        });
      }
      function B(e) {
        let {
          applicationResults: n,
          includePlaceholder: t,
          query: a,
          searchesBots: l,
        } = e;
        return l
          ? (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(g.Z, { title: T.Z.Messages.APPS }),
                (0, i.jsxs)("div", {
                  className: R.sectionContentContainer,
                  children: [
                    n.map((e, n) => {
                      let { application: t, installOnDemand: l } = e;
                      return (0, i.jsx)(
                        D,
                        {
                          application: t,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: f.L3.SEARCH,
                          resultsPosition: n,
                          installOnDemand: l,
                          query: a,
                        },
                        t.id,
                      );
                    }),
                    t && j.map((e) => (0, i.jsx)(L.Z, {}, e)),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(g.Z, {
                  title: T.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                }),
                (0, i.jsxs)("div", {
                  className: R.sectionActivitiesContentContainer,
                  children: [
                    n.map((e, n) => {
                      let { application: t, installOnDemand: l } = e;
                      return (0, i.jsx)(
                        U,
                        {
                          application: t,
                          look: E.U4.LARGE_BANNER,
                          location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
                          sectionName: f.L3.SEARCH,
                          resultsPosition: n,
                          installOnDemand: l,
                          query: a,
                        },
                        t.id,
                      );
                    }),
                    t &&
                      y.map((e) =>
                        (0, i.jsx)(N.Z, { look: E.U4.LARGE_BANNER }, e),
                      ),
                  ],
                }),
              ],
            });
      }
      function D(e) {
        let n = (0, E.cG)(e);
        return (0, i.jsx)(P.Z, {
          application: e.application,
          onClick: n,
          query: e.query,
          searchResultsPosition: e.resultsPosition,
        });
      }
      function k() {
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(g.Z, { title: T.Z.Messages.COMMANDS }),
            (0, i.jsx)("div", {
              className: R.sectionContentContainer,
              children: M.map((e) => (0, i.jsx)(L.Z, {}, e)),
            }),
            (0, i.jsx)(g.Z, { title: T.Z.Messages.APPS }),
            (0, i.jsx)("div", {
              className: R.sectionContentContainer,
              children: j.map((e) => (0, i.jsx)(L.Z, {}, e)),
            }),
          ],
        });
      }
    },
    684256: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        o = t.n(l),
        r = t(481060),
        s = t(895924),
        c = t(827498),
        d = t(106066),
        u = t(98880),
        m = t(772606),
        p = t(689938),
        _ = t(400963);
      function C(e) {
        let {
            channel: n,
            entrypoint: t,
            title: l,
            look: C,
            items: h,
            sectionName: f,
          } = e,
          A = (0, d.s)("AppLauncherApplicationListViewScreen"),
          E = a.useMemo(() => (t === c._b.TEXT ? u.kA : u.qR), [t]);
        return (0, i.jsxs)("section", {
          className: _.container,
          "aria-label":
            p.Z.Messages.APP_LAUNCHER_SECTION_VIEW_MORE_ARIA_LABEL.format({
              sectionTitle: l,
            }),
          children: [
            (0, i.jsxs)("div", {
              className: _.header,
              children: [
                (0, i.jsx)(m.Z, { className: _.backButton }),
                (0, i.jsx)(r.Heading, {
                  variant: "heading-md/medium",
                  color: "header-primary",
                  children: l,
                }),
              ],
            }),
            (0, i.jsx)(r.Scroller, {
              children: (0, i.jsx)("div", {
                className: o()({
                  [_.appGrid]: C !== u.U4.ROW,
                  [_.rows]: C === u.U4.ROW,
                }),
                children: h.map((e, t) => {
                  let { application: a, installOnDemand: l } = e;
                  return (0, i.jsx)(
                    E,
                    {
                      channel: n,
                      application: a,
                      look: C,
                      sectionName: f,
                      resultsPosition: t,
                      location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                      installOnDemand: l,
                      isOneClickCTA: A,
                    },
                    a.id,
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
          return c;
        },
      }),
        t(47120),
        t(653041);
      var i = t(470079),
        a = t(442837),
        l = t(581364),
        o = t(675478),
        r = t(709054),
        s = t(822245);
      function c(e, n) {
        i.useEffect(() => {
          o.DZ.loadIfNecessary();
        }, []);
        let t = (0, a.e7)([s.Z], () =>
            s.Z.getApplicationFrecencyWithoutLoadingLatest(),
          ),
          c = i.useMemo(
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
          d = i.useMemo(
            () =>
              null == n
                ? void 0
                : n.filter((n) => !e.some((e) => e.id === n.application.id)),
            [e, n],
          ),
          u = i.useMemo(() => {
            var e;
            null == d ||
              d.forEach((e) => {
                let n = r.default.extractTimestamp(e.id);
                null == t.getEntry(e.application.id) &&
                  t.track(e.application.id, n);
              }),
              t.compute();
            let n =
                null !==
                  (e =
                    null == d
                      ? void 0
                      : d.map((e) => (0, l.X0)(e.application, !0))) &&
                void 0 !== e
                  ? e
                  : [],
              i = [...c];
            return (
              i.push(...n),
              i.sort((e, n) => {
                var i, a;
                let l =
                  (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) -
                  (null !== (a = t.getScore(e.id)) && void 0 !== a ? a : 0);
                return 0 !== l ? l : e.name.localeCompare(n.name);
              }),
              i
            );
          }, [c, t, d]);
        return i.useMemo(() => {
          var e, i;
          let a, l;
          null == n ||
            n.forEach((e) => {
              let n = r.default.extractTimestamp(e.id);
              (null == l || n > l) && ((a = e), (l = n));
            }),
            c.forEach((e) => {
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
              (null == l || o > l) && ((a = e), (l = o));
            });
          let o =
              null !==
                (i =
                  null == a
                    ? void 0
                    : null === (e = a.application) || void 0 === e
                      ? void 0
                      : e.id) && void 0 !== i
                ? i
                : "",
            s = u.filter((e) => e.id === o);
          return [...s, ...u.filter((e) => e.id !== o)];
        }, [u, c, t, n]);
      }
    },
    631827: function (e, n, t) {
      function i(e, n) {
        var t, i, a, l, o;
        let r;
        let s = null !== (t = n.limit) && void 0 !== t ? t : 1 / 0,
          c = (function (e, n) {
            return e.filter((e) => n.every((n) => n(e)));
          })(e, null !== (i = n.filterPredicates) && void 0 !== i ? i : []);
        return (function (e, n, t) {
          let i = [];
          for (let a of e) {
            let e = (function (e, n) {
              return e.sort((e, t) => {
                for (let i of n) {
                  let n = i(e, t);
                  if (0 !== n) return n;
                }
                return 0;
              });
            })(a, n);
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
                    null !== (a = n.bucketPredicates) && void 0 !== a ? a : [],
                  )
                : (function (e, n, t) {
                    let i = [],
                      a = e;
                    for (let e of n) {
                      let n = [],
                        l = [];
                      for (let t of a) e(t) ? l.push(t) : n.push(t);
                      if (
                        (i.push(l),
                        (a = n),
                        i.reduce((e, n) => n.length + e, 0) >= t)
                      )
                        break;
                    }
                    return i;
                  })(
                    c,
                    null !== (l = n.bucketPredicates) && void 0 !== l ? l : [],
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
    79411: function (e, n, t) {
      var i, a;
      t.d(n, {
        i: function () {
          return i;
        },
      }),
        ((a = i || (i = {}))[(a.EXPANDABLE_LIST = 1)] = "EXPANDABLE_LIST"),
        (a[(a.BANNER_CARDS = 2)] = "BANNER_CARDS"),
        (a[(a.SMALL_BANNER_CARDS = 3)] = "SMALL_BANNER_CARDS"),
        (a[(a.MODAL_LIST = 4)] = "MODAL_LIST");
    },
    209173: function (e, n, t) {
      var i, a;
      t.d(n, {
        s: function () {
          return i;
        },
      }),
        ((a = i || (i = {}))[(a.APPLICATION = 1)] = "APPLICATION"),
        (a[(a.ACTIVITY_APPLICATION = 2)] = "ACTIVITY_APPLICATION"),
        (a[(a.CONNECTION = 3)] = "CONNECTION");
    },
    828018: function (e, n, t) {
      e.exports = {
        container: "container_c4a3bb",
        searchBar: "searchBar_c4a3bb",
      };
    },
    559103: function (e, n, t) {
      e.exports = {
        drawerSizingWrapper: "drawerSizingWrapper_f7506e",
        contentWrapper: "contentWrapper_f7506e",
        slideContent: "slideContent_f7506e",
      };
    },
    127935: function (e, n, t) {
      e.exports = {
        rowIcon: "rowIcon_e5da8b",
        rowDivider: "rowDivider_e5da8b",
        appDetailsRowContainer: "appDetailsRowContainer_e5da8b",
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
    322541: function (e, n, t) {
      e.exports = { clickable: "clickable_e82700" };
    },
    32950: function (e, n, t) {
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
    818931: function (e, n, t) {
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
    289760: function (e, n, t) {
      e.exports = {
        stickyBanner: "stickyBanner_e46a21",
        nameContainer: "nameContainer_e46a21",
        stickyContainer: "stickyContainer_e46a21",
        stickyBannerContainer: "stickyBannerContainer_e46a21",
        bannerBackground: "bannerBackground_e46a21",
        backButtonContainer: "backButtonContainer_e46a21",
        moreMenuButtonContainer: "moreMenuButtonContainer_e46a21",
        headerButton: "headerButton_e46a21",
        textApplicationName: "textApplicationName_e46a21",
      };
    },
    131242: function (e, n, t) {
      e.exports = {
        container: "container_e80fe9",
        monetizationDisclosureContainerStyle:
          "monetizationDisclosureContainerStyle_e80fe9",
        profileAndVideoContainer: "profileAndVideoContainer_e80fe9",
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
        expandableDescriptionClickable: "expandableDescriptionClickable_e80fe9",
        overflowHidden: "overflowHidden_e80fe9",
        developerShelfControls: "developerShelfControls_e80fe9",
        monetizationDisclosureStyle: "monetizationDisclosureStyle_e80fe9",
      };
    },
    804978: function (e, n, t) {
      e.exports = { container: "container_ec8cd2", appIcon: "appIcon_ec8cd2" };
    },
    500257: function (e, n, t) {
      e.exports = { clickable: "clickable_e33430" };
    },
    94958: function (e, n, t) {
      e.exports = { tooltipContent: "tooltipContent_d1928d" };
    },
    984177: function (e, n, t) {
      e.exports = {
        sortDropdown: "sortDropdown_fd3eaf",
        sortDropdownInner: "sortDropdownInner_fd3eaf",
        sortIconMargin: "sortIconMargin_fd3eaf",
      };
    },
    84390: function (e, n, t) {
      e.exports = { container: "container_cf2302" };
    },
    98793: function (e, n, t) {
      e.exports = {
        emptyStateContainer: "emptyStateContainer_d9d1c9",
        emptyStateImage: "emptyStateImage_d9d1c9",
      };
    },
    597976: function (e, n, t) {
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
    633236: function (e, n, t) {
      e.exports = {
        header: "header_b7ba1b",
        viewMore: "viewMore_b7ba1b",
        loadingHeader: "loadingHeader_b7ba1b",
        hidden: "hidden_b7ba1b",
      };
    },
    597397: function (e, n, t) {
      e.exports = {
        container: "container_fb1469",
        image: "image_fb1469",
        body: "body_fb1469",
      };
    },
    686356: function (e, n, t) {
      e.exports = {
        icon: "icon_b78bb6",
        underline: "underline_b78bb6",
        focusBlock: "focusBlock_b78bb6",
        clickable: "clickable_b78bb6",
        cmdDetails: "cmdDetails_b78bb6",
        cmdAppName: "cmdAppName_b78bb6",
      };
    },
    919071: function (e, n, t) {
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
    454093: function (e, n, t) {
      e.exports = {
        sectionContentContainer: "sectionContentContainer_d193fc",
        sectionActivitiesContentContainer:
          "sectionActivitiesContentContainer_d193fc",
        searchOpenAppDetailAppCard: "searchOpenAppDetailAppCard_d193fc",
      };
    },
    400963: function (e, n, t) {
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
//# sourceMappingURL=733dfd91292b34f7e85e.js.map
