"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40216"],
  {
    749280: function (e, n, t) {
      t.d(n, {
        w: function () {
          return r;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(709014);
      let o = {
          hover: { name: "hover", start: 0, duration: 59 },
          click: { name: "click", start: 68, duration: 26 },
        },
        r = () => {
          let e = l.useRef(null),
            n = l.useCallback(() => {
              null != e.current && e.current.play("click");
            }, []),
            r = l.useCallback(() => {
              null != e.current && e.current.play("hover");
            }, []),
            c = l.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("hover");
            }, []);
          return {
            events: { onMouseEnter: r, onMouseLeave: c },
            play: n,
            Component: l.useCallback(
              (n) =>
                (0, i.jsx)(a.L, {
                  ...n,
                  src: () => t.e("56855").then(t.t.bind(t, 206509, 19)),
                  ref: e,
                  markers: o,
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
        a = t(706454),
        o = t(70956),
        r = t(844439),
        c = t(981631);
      let d = 10 * o.Z.Millis.MINUTE;
      async function u(e) {
        let { channelId: n, location: t, withCommands: o } = e,
          u = Date.now(),
          s = r.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: o,
          }),
          m = r.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: o,
          });
        if (s !== r.M.FETCHING && (null == m || !(m + d > u))) {
          l.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: t,
            channelId: n,
            withCommands: o,
          });
          try {
            var E;
            let e = await i.tn.get({
              url: c.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: a.default.locale,
                channel_id: n,
                location: t,
                with_commands: o,
              },
            });
            l.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: t,
              channelId: n,
              recommendations: null !== (E = e.body) && void 0 !== E ? E : [],
              withCommands: o,
            });
          } catch (e) {
            l.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: t,
              channelId: n,
              withCommands: o,
            });
          }
        }
      }
    },
    619895: function (e, n, t) {
      t.d(n, {
        Qm: function () {
          return E;
        },
        hR: function () {
          return p;
        },
        yJ: function () {
          return s;
        },
      });
      var i = t(192379),
        l = t(892814),
        a = t(442837),
        o = t(895924),
        r = t(581364),
        c = t(823379),
        d = t(399654),
        u = t(844439);
      let s = {
          "1181475143340539995": {
            imageOption: "image",
            overrideSendCommandInfo: {
              commandId: "1272485059353640963",
              imageOption: "image",
            },
          },
          "991195178360635431": { imageOption: "image", onlyAllowEdit: !0 },
          "1091213298818613408": { imageOption: "image" },
          "1029794689932611625": { imageOption: "image" },
          "1238332854602043454": { imageOption: "image" },
        },
        m = Object.keys(s);
      function E(e) {
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
      function p(e) {
        let { channelId: n } = e,
          { fetchState: t, recommendationsSections: E } = (function (e) {
            let { channelId: n } = e,
              t = l.I.CONTEXTUAL_IMAGE,
              o = i.useMemo(
                () => ({ channelId: n, location: t, withCommands: !0 }),
                [n, t],
              );
            i.useEffect(() => {
              (0, d.a)(o);
            }, [o]);
            let { fetchState: r, recommendationsSections: c } = (0, a.cj)(
              [u.ZP],
              () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o),
              }),
            );
            return { fetchState: r, recommendationsSections: c };
          })({ channelId: n });
        return {
          fetchState: t,
          imageRecCommandContexts: i.useMemo(() => {
            let e = E.length > 0 ? E[0].items : void 0;
            return void 0 === e
              ? []
              : m
                  .map((n) => {
                    var t, i, l, a;
                    let c, d;
                    let u = e.find((e) => {
                      var t;
                      return (
                        null !=
                        (c =
                          null === (t = e.commands) || void 0 === t
                            ? void 0
                            : t.find((e) => e.id === n))
                      );
                    });
                    if (null == u) return null;
                    let { application: m } = u;
                    if (null == c) return null;
                    let E = (0, r.Z8)({
                        rootCommand: c,
                        command: c,
                        applicationId: m.id,
                      }),
                      p =
                        null === (t = s[n].overrideSendCommandInfo) ||
                        void 0 === t
                          ? void 0
                          : t.commandId;
                    if (null != p) {
                      let e =
                        null != p
                          ? null === (l = u.commands) || void 0 === l
                            ? void 0
                            : l.find((e) => e.id === p)
                          : void 0;
                      null != e &&
                        (d = (0, r.Z8)({
                          rootCommand: e,
                          command: e,
                          applicationId: m.id,
                        }));
                    }
                    return {
                      command: {
                        ...E,
                        displayName: E.displayName
                          .split(/[_ ]/)
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" "),
                      },
                      overrideSendCommand: d,
                      section: {
                        type: o.Qi.APPLICATION,
                        id: m.id,
                        icon: m.icon,
                        name:
                          null !==
                            (a =
                              null == m
                                ? void 0
                                : null === (i = m.bot) || void 0 === i
                                  ? void 0
                                  : i.username) && void 0 !== a
                            ? a
                            : m.name,
                        application: m,
                      },
                    };
                  })
                  .filter(c.lm);
          }, [E]),
        };
      }
    },
    844439: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      });
      var i,
        l,
        a,
        o,
        r,
        c,
        d = t(442837),
        u = t(570140);
      ((i = r || (r = {}))[(i.FETCHING = 0)] = "FETCHING"),
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
      let g = Object.freeze([]);
      class C extends (c = d.ZP.Store) {
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
            : g;
        }
      }
      (o = void 0),
        (a = "displayName") in (l = C)
          ? Object.defineProperty(l, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = o),
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
              a = p({ location: t, channelId: i, withCommands: l });
            (s = { ...s, [a]: n }), (m = { ...m, [a]: 1 });
            let o = Date.now();
            E = { ...E, [a]: o };
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
        a = t(442837),
        o = t(749280),
        r = t(481060),
        c = t(166459),
        d = t(911969),
        u = t(476326),
        s = t(827498),
        m = t(555573),
        E = t(213459),
        p = t(998698),
        g = t(895924),
        C = t(581364),
        f = t(667204),
        h = t(873387),
        _ = t(809090),
        v = t(147391),
        M = t(583027),
        I = t(978983),
        S = t(592125),
        N = t(703558),
        A = t(430824),
        T = t(626135),
        O = t(585483),
        P = t(619895),
        b = t(844439),
        R = t(981631),
        x = t(388032),
        U = t(973335);
      function y(e) {
        let {
            toggleShowMenu: n,
            showMenu: t,
            className: c,
            channelId: d,
            imageUrl: u,
            mimeType: s,
          } = e,
          m = (0, a.e7)([S.Z], () => S.Z.getChannel(d)),
          { Component: E, events: p, play: g } = (0, o.w)(),
          [C, f] = l.useState(!1);
        return null == m
          ? null
          : (!C && g(),
            (0, i.jsx)(r.Popout, {
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
              animation: r.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(r.Tooltip, {
                  text: x.intl.string(x.t.emnnEB),
                  children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                      ...e,
                      className: c,
                      focusProps: { offset: 2 },
                      onClick: n,
                      onMouseEnter: () => {
                        f(!0), p.onMouseEnter();
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
            channel: o,
            imageUrl: S,
            mimeType: y,
          } = e,
          w = (0, a.e7)([A.Z], () => A.Z.getGuild(o.guild_id)),
          { fetchState: j, imageRecCommandContexts: Z } = (0, P.hR)({
            channelId: o.id,
          }),
          D = j === b.M.FETCHING,
          F = (0, h.g)(o),
          L = (0, E.PL)(!0, !0),
          k = (0, E.LD)(o.guild_id, !0);
        l.useEffect(() => {
          (j === b.M.ERROR || (j === b.M.FETCHED && 0 === Z.length)) && t();
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
                  null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (n = null == o ? void 0 : o.id) && void 0 !== n
                    ? n
                    : "",
                application_ids: [
                  ...Z.map((e) => Number(e.command.applicationId)),
                ],
                command_ids: t,
              });
          }, [Z, o, D]);
        let H = l.useCallback(
            async (e) => {
              let n = await fetch(S),
                t = await n.arrayBuffer(),
                i = y.join("/"),
                l = new File(
                  [t],
                  "image".concat((0, P.Qm)({ contentType: i })),
                  { type: i },
                );
              c.Z.setFile({
                channelId: o.id,
                id: e,
                file: { id: e, file: l, platform: u.ow.WEB },
                draftType: N.d.SlashCommand,
              });
            },
            [S, o.id, y],
          ),
          G = l.useCallback(
            async (e, n, t, i) => {
              var l, a;
              if (!F) return;
              let r = e.applicationId,
                c =
                  (null === (l = L.result) || void 0 === l
                    ? void 0
                    : l.sections[r]) != null,
                u =
                  (null === (a = k.result) || void 0 === a
                    ? void 0
                    : a.sections[r]) != null;
              await H(i),
                null != p.Z.getActiveCommand(o.id) &&
                  m.Po({ channelId: o.id, command: null, section: null }),
                c || u || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                m.Po({
                  channelId: o.id,
                  command: e,
                  section: n,
                  location: t,
                  source: s._b.TEXT,
                  initialValues: {
                    [i]: { type: d.jw.ATTACHMENT, name: i, value: "image" },
                  },
                  commandOrigin:
                    t === g.Vh.IMAGE_RECS_SUBMENU
                      ? g.bB.IMAGE_RECS_SUBMENU
                      : g.bB.IMAGE_RECS_MENU,
                }),
                (0, M.Mo)({ command: e, location: t, sectionName: n.name }),
                O.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: o.id,
                });
            },
            [o.id, H, F, L, k],
          ),
          B = l.useCallback(
            async (e, n, t) => {
              var i, l;
              let a = e.applicationId,
                r =
                  (null === (i = L.result) || void 0 === i
                    ? void 0
                    : i.sections[a]) != null,
                c =
                  (null === (l = k.result) || void 0 === l
                    ? void 0
                    : l.sections[a]) != null;
              r || c || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
              let d = await (0, v.L)({
                applicationId: a,
                userIndexState: L,
                guildIndexState: k,
                location: n,
                source: s._b.TEXT,
              });
              (0, C.qJ)({ command: e, location: n, source: s._b.TEXT }),
                d &&
                  (await H(t),
                  await (0, f.Z)({
                    command: { ...e },
                    optionValues: { [t]: [{ text: "image", type: "text" }] },
                    context: { channel: o, guild: w },
                    commandOrigin:
                      n === g.Vh.IMAGE_RECS_SUBMENU
                        ? g.bB.IMAGE_RECS_SUBMENU
                        : g.bB.IMAGE_RECS_MENU,
                  }));
            },
            [o, w, L, k, H],
          );
        return (0, i.jsxs)(r.Menu, {
          onSelect: n,
          navId: "image-context-commands-popout",
          onClose: t,
          "aria-label": x.intl.string(x.t.P3ShV1),
          children: [
            (0, i.jsx)(
              r.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(r.Text, {
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
            (0, i.jsx)(r.MenuSeparator, {}),
            D
              ? (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, i.jsx)(I.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: Z.map((e) => {
                    let n = P.yJ[e.command.id],
                      t = e.overrideSendCommand,
                      l = n.overrideSendCommandInfo,
                      a = null != t && null != l,
                      c = n.onlyAllowEdit || (null != l && null == t);
                    return (0, i.jsx)(
                      r.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          c
                            ? G(
                                e.command,
                                e.section,
                                g.Vh.IMAGE_RECS_MENU,
                                n.imageOption,
                              )
                            : B(
                                a ? t : e.command,
                                g.Vh.IMAGE_RECS_MENU,
                                a ? l.imageOption : n.imageOption,
                              );
                        },
                        label: e.command.displayName,
                        subtext: e.command.displayDescription,
                        subtextLineClamp: 1,
                        icon: c ? r.PencilIcon : a ? void 0 : r.SendMessageIcon,
                        iconLeft: () =>
                          (0, i.jsx)(_.Z, {
                            channel: o,
                            section: e.section,
                            width: 32,
                            height: 32,
                            isSquircle: !0,
                            selectable: !1,
                          }),
                        iconLeftSize: "lg",
                        showImageFirst: !0,
                        disabled: !F && c,
                        children: a
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(
                                  r.MenuItem,
                                  {
                                    id: "".concat(e.command.id, "-send"),
                                    label: x.intl.string(x.t["M+BhUV"]),
                                    subtext: x.intl.string(x.t.zXFjJS),
                                    action: () =>
                                      B(
                                        t,
                                        g.Vh.IMAGE_RECS_SUBMENU,
                                        l.imageOption,
                                      ),
                                    icon: r.SendMessageIcon,
                                  },
                                  "".concat(e.command.id, "-send"),
                                ),
                                (0, i.jsx)(
                                  r.MenuItem,
                                  {
                                    id: "".concat(e.command.id, "-edit"),
                                    label: x.intl.string(x.t["wTaN+P"]),
                                    subtext: x.intl.string(x.t.bIB3bm),
                                    action: () =>
                                      G(
                                        e.command,
                                        e.section,
                                        g.Vh.IMAGE_RECS_SUBMENU,
                                        n.imageOption,
                                      ),
                                    icon: r.PencilIcon,
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
        a = t(665906),
        o = t(271383),
        r = t(496675),
        c = t(594174),
        d = t(981631);
      function u(e) {
        let n = e.getGuildId(),
          t = (0, l.e7)([o.ZP, c.default], () => {
            var e, t;
            let i = c.default.getCurrentUser();
            return (
              null !==
                (t =
                  null != n && null != i
                    ? null === (e = o.ZP.getMember(n, i.id)) || void 0 === e
                      ? void 0
                      : e.isPending
                    : null) &&
              void 0 !== t &&
              t
            );
          }),
          { messagesDisabled: u } = (0, l.cj)(
            [r.Z],
            () => {
              let n = e.isPrivate(),
                l = r.Z.computePermissions(e),
                o = i.e$(l, d.Plq.SEND_MESSAGES),
                c = (0, a.xl)(e);
              return { messagesDisabled: t || (!n && !o) || c };
            },
            [e, t],
          );
        return !u;
      }
    },
    147391: function (e, n, t) {
      t.d(n, {
        L: function () {
          return d;
        },
      });
      var i = t(373793),
        l = t(367907),
        a = t(69580),
        o = t(812206),
        r = t(981631),
        c = t(689079);
      function d(e) {
        var n, t, d, u, s;
        let {
          applicationId: m,
          userIndexState: E,
          guildIndexState: p,
          sectionName: g,
          location: C,
          source: f,
        } = e;
        if (
          m === c.bi.BUILT_IN ||
          (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) !=
            null ||
          (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) !=
            null
        )
          return Promise.resolve(!0);
        (0, l.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: C,
          application_id: m,
          section_name: g,
          source: f,
        });
        let h = o.Z.getApplication(m),
          _ = i.Y.USER_INSTALL,
          v =
            null == h
              ? void 0
              : null === (s = h.integrationTypesConfig) || void 0 === s
                ? void 0
                : null === (u = s[_]) || void 0 === u
                  ? void 0
                  : null === (d = u.oauth2InstallParams) || void 0 === d
                    ? void 0
                    : d.scopes;
        return new Promise((e) => {
          (0, a.openOAuth2Modal)(
            {
              clientId: m,
              integrationType: _,
              scopes: v,
              callback: (n) => {
                let { location: t } = n;
                null != t
                  ? ((0, l.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      location: C,
                      application_id: m,
                      section_name: g,
                      source: f,
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
          return r;
        },
        SC: function () {
          return d;
        },
        _U: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(905837),
        l = t(280836),
        a = t(731965);
      let o = (0, i.Ue)(
        (0, l.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function r(e) {
        let { command: n, location: t, sectionName: i } = e,
          { commandAnalyticsContext: l } = o.getState(),
          r = l.get(n);
        if (null == r || r.location !== t || r.sectionName !== i) {
          let e = new Map(l);
          e.set(n, { location: t, sectionName: i }),
            (0, a.j)(() => o.setState({ commandAnalyticsContext: e }));
        }
      }
      function c(e) {
        let { commandAnalyticsContext: n } = o.getState();
        return n.get(e);
      }
      function d(e) {
        let { commandAnalyticsContext: n } = o.getState();
        if (n.has(e)) {
          let t = new Map(n);
          t.delete(e),
            (0, a.j)(() => o.setState({ commandAnalyticsContext: t }));
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
        a = t(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, i.jsx)(l.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    587906: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(200651),
        l = t(657707),
        a = t(481060),
        o = t(388032);
      function r(e) {
        let { className: n, onClick: t } = e;
        return (0, i.jsx)(a.Tooltip, {
          text: o.intl.string(o.t.rTQZY2),
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: n,
              focusProps: { offset: 2 },
              onClick: t,
              "aria-label": o.intl.string(o.t.rTQZY2),
              children: (0, i.jsx)(l.bJT, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
              }),
            }),
        });
      }
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
    892814: function (e, n, t) {
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
//# sourceMappingURL=1835c49e89223007fb6e.js.map
