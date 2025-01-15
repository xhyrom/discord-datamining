"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72181"],
  {
    749280: function (e, n, t) {
      t.d(n, {
        w: function () {
          return d;
        },
      });
      var i = t(200651),
        l = t(192379),
        o = t(709014);
      let a = {
          hover: { name: "hover", start: 0, duration: 59 },
          click: { name: "click", start: 68, duration: 26 },
        },
        d = () => {
          let e = l.useRef(null),
            n = l.useCallback(() => {
              null != e.current && e.current.play("click");
            }, []),
            d = l.useCallback(() => {
              null != e.current && e.current.play("hover");
            }, []),
            r = l.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("hover");
            }, []);
          return {
            events: { onMouseEnter: d, onMouseLeave: r },
            play: n,
            Component: l.useCallback(
              (n) =>
                (0, i.jsx)(o.L, {
                  ...n,
                  src: () => t.e("56855").then(t.t.bind(t, 206509, 19)),
                  ref: e,
                  markers: a,
                }),
              [],
            ),
          };
        };
    },
    399654: function (e, n, t) {
      t.d(n, {
        a: function () {
          return u;
        },
      });
      var i = t(544891),
        l = t(570140),
        o = t(706454),
        a = t(70956),
        d = t(844439),
        r = t(981631);
      let c = 10 * a.Z.Millis.MINUTE;
      async function u(e) {
        let { channelId: n, location: t, withCommands: a } = e,
          u = Date.now(),
          s = d.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: a,
          }),
          m = d.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: a,
          });
        if (s !== d.M.FETCHING && (null == m || !(m + c > u))) {
          l.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: t,
            channelId: n,
            withCommands: a,
          });
          try {
            var E;
            let e = await i.tn.get({
              url: r.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: o.default.locale,
                channel_id: n,
                location: t,
                with_commands: a,
              },
              rejectWithError: !1,
            });
            l.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: t,
              channelId: n,
              recommendations: null !== (E = e.body) && void 0 !== E ? E : [],
              withCommands: a,
            });
          } catch (e) {
            l.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: t,
              channelId: n,
              withCommands: a,
            });
          }
        }
      }
    },
    619895: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return s;
        },
        h: function () {
          return m;
        },
      });
      var i = t(192379),
        l = t(228458),
        o = t(442837),
        a = t(895924),
        d = t(581364),
        r = t(823379),
        c = t(399654),
        u = t(844439);
      function s(e) {
        let { contentType: n } = e;
        switch (n) {
          case "image/jpeg":
          case "image/jpg":
            return ".jpg";
          case "image/png":
          case "image/apng":
            return ".png";
          case "image/webp":
            return ".webp";
          default:
            return "";
        }
      }
      function m(e) {
        let { channelId: n } = e,
          { fetchState: t, recommendationsSections: s } = (function (e) {
            let { channelId: n } = e,
              t = l.I.CONTEXTUAL_IMAGE,
              a = i.useMemo(
                () => ({ channelId: n, location: t, withCommands: !0 }),
                [n, t],
              );
            i.useEffect(() => {
              (0, c.a)(a);
            }, [a]);
            let { fetchState: d, recommendationsSections: r } = (0, o.cj)(
              [u.ZP],
              () => ({
                fetchState: u.ZP.getFetchState(a),
                recommendationsSections: u.ZP.getRecommendations(a),
              }),
            );
            return { fetchState: d, recommendationsSections: r };
          })({ channelId: n });
        return {
          fetchState: t,
          imageRecCommandContexts: i.useMemo(() => {
            let e = s.length > 0 ? s[0].items : void 0;
            if (void 0 === e) return [];
            let n = {};
            return (
              e.forEach((e) => {
                var t;
                let i =
                  null !== (t = e.command_metadata) && void 0 !== t ? t : {};
                Object.keys(i).forEach((e) => {
                  n[e] = i[e];
                });
              }),
              Object.keys(n)
                .map((n) => {
                  var t, i, l, o, r, c, u, s, m, E, p, v;
                  let C, _;
                  let f = e.find((e) => {
                    var t;
                    return (
                      null !=
                      (C =
                        null === (t = e.commands) || void 0 === t
                          ? void 0
                          : t.find((e) => e.id === n))
                    );
                  });
                  if (null == f) return null;
                  let { application: h } = f;
                  if (null == C) return null;
                  let M = (0, d.Z8)({
                      rootCommand: C,
                      command: C,
                      applicationId: h.id,
                    }),
                    g =
                      null === (l = f.command_metadata) || void 0 === l
                        ? void 0
                        : null === (i = l[n]) || void 0 === i
                          ? void 0
                          : null === (t = i.overrideSendCommandInfo) ||
                              void 0 === t
                            ? void 0
                            : t.commandId;
                  if (null != g) {
                    let e =
                      null != g
                        ? null === (p = f.commands) || void 0 === p
                          ? void 0
                          : p.find((e) => e.id === g)
                        : void 0;
                    null != e &&
                      (_ = (0, d.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: h.id,
                      }));
                  }
                  return {
                    command: {
                      ...M,
                      displayName: M.displayName
                        .split(/[_ ]/)
                        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                        .join(" "),
                    },
                    imageOption:
                      null === (r = f.command_metadata) || void 0 === r
                        ? void 0
                        : null === (o = r[n]) || void 0 === o
                          ? void 0
                          : o.imageOption,
                    overrideSendCommand: _,
                    overrideSendCommandInfo:
                      null === (u = f.command_metadata) || void 0 === u
                        ? void 0
                        : null === (c = u[n]) || void 0 === c
                          ? void 0
                          : c.overrideSendCommandInfo,
                    onlyAllowEdit:
                      null === (m = f.command_metadata) || void 0 === m
                        ? void 0
                        : null === (s = m[n]) || void 0 === s
                          ? void 0
                          : s.onlyAllowEdit,
                    section: {
                      type: a.Qi.APPLICATION,
                      id: h.id,
                      icon: h.icon,
                      name:
                        null !==
                          (v =
                            null == h
                              ? void 0
                              : null === (E = h.bot) || void 0 === E
                                ? void 0
                                : E.username) && void 0 !== v
                          ? v
                          : h.name,
                      application: h,
                    },
                  };
                })
                .filter(r.lm)
            );
          }, [s]),
        };
      }
    },
    844439: function (e, n, t) {
      t.d(n, {
        M: function () {
          return d;
        },
      });
      var i,
        l,
        o,
        a,
        d,
        r,
        c = t(442837),
        u = t(570140);
      ((i = d || (d = {}))[(i.FETCHING = 0)] = "FETCHING"),
        (i[(i.FETCHED = 1)] = "FETCHED"),
        (i[(i.ERROR = 2)] = "ERROR");
      let s = {},
        m = {},
        E = {};
      function p(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return "location:"
          .concat(n, " channelId:")
          .concat("0", " withCommands:")
          .concat(i);
      }
      let v = Object.freeze([]);
      class C extends (r = c.ZP.Store) {
        getLastFetchTimeMs(e) {
          let { location: n, channelId: t, withCommands: i } = e;
          return E[p({ location: n, channelId: t, withCommands: i })];
        }
        getFetchState(e) {
          let { location: n, channelId: t, withCommands: i } = e;
          return m[p({ location: n, channelId: t, withCommands: i })];
        }
        getRecommendations(e) {
          var n;
          let { location: t, channelId: i, withCommands: l } = e;
          return null !==
            (n = s[p({ location: t, channelId: i, withCommands: l })]) &&
            void 0 !== n
            ? n
            : v;
        }
      }
      (a = void 0),
        (o = "displayName") in (l = C)
          ? Object.defineProperty(l, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = a),
        (n.ZP = new C(u.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
              ...m,
              [p({ location: n, channelId: t, withCommands: i })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let {
                recommendations: n,
                location: t,
                channelId: i,
                withCommands: l,
              } = e,
              o = p({ location: t, channelId: i, withCommands: l });
            (s = { ...s, [o]: n }), (m = { ...m, [o]: 1 });
            let a = Date.now();
            E = { ...E, [o]: a };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
              ...m,
              [p({ location: n, channelId: t, withCommands: i })]: 2,
            };
          },
        }));
    },
    370298: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120),
        t(653041);
      var i = t(200651),
        l = t(192379),
        o = t(442837),
        a = t(749280),
        d = t(481060),
        r = t(166459),
        c = t(911969),
        u = t(476326),
        s = t(827498),
        m = t(555573),
        E = t(213459),
        p = t(998698),
        v = t(895924),
        C = t(581364),
        _ = t(667204),
        f = t(873387),
        h = t(809090),
        M = t(147391),
        g = t(583027),
        I = t(978983),
        S = t(592125),
        A = t(703558),
        N = t(430824),
        T = t(626135),
        P = t(585483),
        b = t(619895),
        O = t(844439),
        R = t(981631),
        x = t(388032),
        U = t(413956);
      function y(e) {
        let {
            toggleShowMenu: n,
            showMenu: t,
            className: r,
            channelId: c,
            imageUrl: u,
            mimeType: s,
          } = e,
          m = (0, o.e7)([S.Z], () => S.Z.getChannel(c)),
          { Component: E, events: p, play: v } = (0, a.w)(),
          [C, _] = l.useState(!1);
        return null == m
          ? null
          : (!C && v(),
            (0, i.jsx)(d.Popout, {
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(w, {
                  onClose: n,
                  channel: m,
                  imageUrl: u,
                  mimeType: s,
                });
              },
              position: "right",
              align: "top",
              animation: d.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(d.Tooltip, {
                  text: x.intl.string(x.t.emnnEB),
                  children: (e) =>
                    (0, i.jsx)(d.Clickable, {
                      ...e,
                      className: r,
                      focusProps: { offset: 2 },
                      onClick: n,
                      onMouseEnter: () => {
                        _(!0), p.onMouseEnter();
                      },
                      onMouseLeave: p.onMouseLeave,
                      "aria-label": x.intl.string(x.t.emnnEB),
                      children: (0, i.jsx)(E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                      }),
                    }),
                });
              },
            }));
      }
      function w(e) {
        let {
            onSelect: n,
            onClose: t,
            channel: a,
            imageUrl: S,
            mimeType: y,
          } = e,
          w = (0, o.e7)([N.Z], () => N.Z.getGuild(a.guild_id)),
          { fetchState: j, imageRecCommandContexts: Z } = (0, b.h)({
            channelId: a.id,
          }),
          D = j === O.M.FETCHING,
          F = (0, f.g)(a),
          L = (0, E.PL)(!0, !0),
          k = (0, E.LD)(a.guild_id, !0);
        l.useEffect(() => {
          (j === O.M.ERROR || (j === O.M.FETCHED && 0 === Z.length)) && t();
        }, [j, Z.length, t]),
          l.useEffect(() => {
            var e, n;
            if (D || 0 === Z.length) return;
            let t = [];
            Z.forEach((e) => {
              t.push(Number(e.command.id)),
                null != e.overrideSendCommand &&
                  t.push(Number(e.overrideSendCommand.id));
            }),
              T.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (n = null == a ? void 0 : a.id) && void 0 !== n
                    ? n
                    : "",
                application_ids: [
                  ...Z.map((e) => Number(e.command.applicationId)),
                ],
                command_ids: t,
              });
          }, [Z, a, D]);
        let H = l.useCallback(
            async (e) => {
              let n = await fetch(S),
                t = await n.arrayBuffer(),
                i = y.join("/"),
                l = new File(
                  [t],
                  "image".concat((0, b.Q)({ contentType: i })),
                  { type: i },
                );
              r.Z.setFile({
                channelId: a.id,
                id: e,
                file: { id: e, file: l, platform: u.ow.WEB },
                draftType: A.d.SlashCommand,
              });
            },
            [S, a.id, y],
          ),
          G = l.useCallback(
            async (e, n, t, i) => {
              var l, o;
              if (!F) return;
              let d = e.applicationId,
                r =
                  (null === (l = L.result) || void 0 === l
                    ? void 0
                    : l.sections[d]) != null,
                u =
                  (null === (o = k.result) || void 0 === o
                    ? void 0
                    : o.sections[d]) != null;
              await H(i),
                null != p.Z.getActiveCommand(a.id) &&
                  m.Po({ channelId: a.id, command: null, section: null }),
                r || u || E.ZP.queryInstallOnDemandApp(e.applicationId, a.id),
                m.Po({
                  channelId: a.id,
                  command: e,
                  section: n,
                  location: t,
                  source: s._b.TEXT,
                  initialValues: {
                    [i]: { type: c.jw.ATTACHMENT, name: i, value: "image" },
                  },
                  commandOrigin:
                    t === v.Vh.IMAGE_RECS_SUBMENU
                      ? v.bB.IMAGE_RECS_SUBMENU
                      : v.bB.IMAGE_RECS_MENU,
                }),
                (0, g.Mo)({ command: e, location: t, sectionName: n.name }),
                P.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: a.id,
                });
            },
            [a.id, H, F, L, k],
          ),
          B = l.useCallback(
            async (e, n, t) => {
              var i, l;
              let o = e.applicationId,
                d =
                  (null === (i = L.result) || void 0 === i
                    ? void 0
                    : i.sections[o]) != null,
                r =
                  (null === (l = k.result) || void 0 === l
                    ? void 0
                    : l.sections[o]) != null;
              d || r || E.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
              let c = await (0, M.L)({
                applicationId: o,
                userIndexState: L,
                guildIndexState: k,
                location: n,
                source: s._b.TEXT,
              });
              (0, C.qJ)({ command: e, location: n, source: s._b.TEXT }),
                c &&
                  (await H(t),
                  await (0, _.Z)({
                    command: { ...e },
                    optionValues: { [t]: [{ text: "image", type: "text" }] },
                    context: { channel: a, guild: w },
                    commandOrigin:
                      n === v.Vh.IMAGE_RECS_SUBMENU
                        ? v.bB.IMAGE_RECS_SUBMENU
                        : v.bB.IMAGE_RECS_MENU,
                  }));
            },
            [a, w, L, k, H],
          );
        return (0, i.jsxs)(d.Menu, {
          onSelect: n,
          navId: "image-context-commands-popout",
          onClose: t,
          "aria-label": x.intl.string(x.t.P3ShV1),
          children: [
            (0, i.jsx)(
              d.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(d.Text, {
                    className: U.title,
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: x.intl.string(x.t.emnnEB),
                  }),
                navigable: !1,
                disabled: !0,
              },
              "menu-image-rec-header",
            ),
            (0, i.jsx)(d.MenuSeparator, {}),
            D
              ? (0, i.jsx)(
                  d.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, i.jsx)(I.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: Z.filter((e) => null != e.imageOption).map((e) => {
                    let n = e.overrideSendCommand,
                      t = null == e ? void 0 : e.overrideSendCommandInfo,
                      l = null != n && null != t,
                      o = e.onlyAllowEdit || (null != t && null == n),
                      r = e.imageOption;
                    return null == r
                      ? null
                      : (0, i.jsx)(
                          d.MenuItem,
                          {
                            id: e.command.id,
                            action: () => {
                              o
                                ? G(
                                    e.command,
                                    e.section,
                                    v.Vh.IMAGE_RECS_MENU,
                                    r,
                                  )
                                : B(
                                    l ? n : e.command,
                                    v.Vh.IMAGE_RECS_MENU,
                                    l ? t.imageOption : r,
                                  );
                            },
                            label: e.command.displayName,
                            subtext: e.command.displayDescription,
                            subtextLineClamp: 1,
                            icon: o
                              ? d.PencilIcon
                              : l
                                ? void 0
                                : d.SendMessageIcon,
                            iconLeft: () =>
                              (0, i.jsx)(h.Z, {
                                channel: a,
                                section: e.section,
                                width: 32,
                                height: 32,
                                isSquircle: !0,
                                selectable: !1,
                              }),
                            iconLeftSize: "lg",
                            showImageFirst: !0,
                            disabled: !F && o,
                            children: l
                              ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsx)(
                                      d.MenuItem,
                                      {
                                        id: "".concat(e.command.id, "-send"),
                                        label: x.intl.string(x.t["M+BhUV"]),
                                        subtext: x.intl.string(x.t.zXFjJS),
                                        action: () =>
                                          B(
                                            n,
                                            v.Vh.IMAGE_RECS_SUBMENU,
                                            t.imageOption,
                                          ),
                                        icon: d.SendMessageIcon,
                                      },
                                      "".concat(e.command.id, "-send"),
                                    ),
                                    (0, i.jsx)(
                                      d.MenuItem,
                                      {
                                        id: "".concat(e.command.id, "-edit"),
                                        label: x.intl.string(x.t["wTaN+P"]),
                                        subtext: x.intl.string(x.t.bIB3bm),
                                        action: () => {
                                          G(
                                            e.command,
                                            e.section,
                                            v.Vh.IMAGE_RECS_SUBMENU,
                                            r,
                                          );
                                        },
                                        icon: d.PencilIcon,
                                        disabled: !F,
                                      },
                                      "".concat(e.command.id, "-edit"),
                                    ),
                                  ],
                                })
                              : null,
                          },
                          e.command.id,
                        );
                  }),
                }),
          ],
        });
      }
    },
    873387: function (e, n, t) {
      t.d(n, {
        g: function () {
          return u;
        },
      });
      var i = t(149765),
        l = t(442837),
        o = t(665906),
        a = t(271383),
        d = t(496675),
        r = t(594174),
        c = t(981631);
      function u(e) {
        let n = e.getGuildId(),
          t = (0, l.e7)([a.ZP, r.default], () => {
            var e, t;
            let i = r.default.getCurrentUser();
            return (
              null !==
                (t =
                  null != n && null != i
                    ? null === (e = a.ZP.getMember(n, i.id)) || void 0 === e
                      ? void 0
                      : e.isPending
                    : null) &&
              void 0 !== t &&
              t
            );
          }),
          { messagesDisabled: u } = (0, l.cj)(
            [d.Z],
            () => {
              let n = e.isPrivate(),
                l = d.Z.computePermissions(e),
                a = i.e$(l, c.Plq.SEND_MESSAGES),
                r = (0, o.xl)(e);
              return { messagesDisabled: t || (!n && !a) || r };
            },
            [e, t],
          );
        return !u;
      }
    },
    147391: function (e, n, t) {
      t.d(n, {
        L: function () {
          return c;
        },
      });
      var i = t(373793),
        l = t(367907),
        o = t(69580),
        a = t(812206),
        d = t(981631),
        r = t(689079);
      function c(e) {
        var n, t, c, u, s;
        let {
          applicationId: m,
          userIndexState: E,
          guildIndexState: p,
          sectionName: v,
          location: C,
          source: _,
        } = e;
        if (
          m === r.bi.BUILT_IN ||
          (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) !=
            null ||
          (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) !=
            null
        )
          return Promise.resolve(!0);
        (0, l.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: C,
          application_id: m,
          section_name: v,
          source: _,
        });
        let f = a.Z.getApplication(m),
          h = i.Y.USER_INSTALL,
          M =
            null == f
              ? void 0
              : null === (s = f.integrationTypesConfig) || void 0 === s
                ? void 0
                : null === (u = s[h]) || void 0 === u
                  ? void 0
                  : null === (c = u.oauth2InstallParams) || void 0 === c
                    ? void 0
                    : c.scopes;
        return new Promise((e) => {
          (0, o.openOAuth2Modal)(
            {
              clientId: m,
              integrationType: h,
              scopes: M,
              callback: (n) => {
                let { location: t } = n;
                null != t
                  ? ((0, l.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      location: C,
                      application_id: m,
                      section_name: v,
                      source: _,
                    }),
                    e(!0))
                  : e(!1);
              },
            },
            () => {
              e(!1);
            },
          );
        });
      }
    },
    583027: function (e, n, t) {
      t.d(n, {
        Mo: function () {
          return d;
        },
        SC: function () {
          return c;
        },
        _U: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(15729),
        l = t(877124),
        o = t(731965);
      let a = (0, i.U)(
        (0, l.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function d(e) {
        let { command: n, location: t, sectionName: i } = e,
          { commandAnalyticsContext: l } = a.getState(),
          d = l.get(n);
        if (null == d || d.location !== t || d.sectionName !== i) {
          let e = new Map(l);
          e.set(n, { location: t, sectionName: i }),
            (0, o.j)(() => a.setState({ commandAnalyticsContext: e }));
        }
      }
      function r(e) {
        let { commandAnalyticsContext: n } = a.getState();
        return n.get(e);
      }
      function c(e) {
        let { commandAnalyticsContext: n } = a.getState();
        if (n.has(e)) {
          let t = new Map(n);
          t.delete(e),
            (0, o.j)(() => a.setState({ commandAnalyticsContext: t }));
        }
      }
    },
    947849: function (e, n, t) {
      t.d(n, {
        h: function () {
          return i;
        },
      });
      let i = t(192379).createContext(() => null);
    },
    978983: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var l = t(481060),
        o = t(666350);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, i.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    52824: function (e, n, t) {
      t.d(n, {
        q: function () {
          return i;
        },
      });
      function i(e) {
        let { proxyURL: n, url: t } = e;
        return null != n && "" !== n ? n : t;
      }
    },
    228458: function (e, n, t) {
      var i, l;
      t.d(n, {
        I: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (l.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (l.CONTEXTUAL_IMAGE = "contextual_image");
    },
  },
]);
//# sourceMappingURL=9fce64f1ff9fdb7a81ca.js.map
