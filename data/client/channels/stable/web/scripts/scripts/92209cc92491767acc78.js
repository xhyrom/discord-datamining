"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72181"],
  {
    749280: function (e, n, t) {
      t.d(n, {
        w: function () {
          return c;
        },
      });
      var i = t(735250),
        a = t(470079),
        l = t(709014);
      let o = {
          hover: { name: "hover", start: 0, duration: 59 },
          click: { name: "click", start: 68, duration: 26 },
        },
        c = () => {
          let e = a.useRef(null),
            n = a.useCallback(() => {
              null != e.current && e.current.play("click");
            }, []),
            c = a.useCallback(() => {
              null != e.current && e.current.play("hover");
            }, []),
            d = a.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("hover");
            }, []);
          return {
            events: { onMouseEnter: c, onMouseLeave: d },
            play: n,
            Component: a.useCallback(
              (n) =>
                (0, i.jsx)(l.L, {
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
        a = t(570140),
        l = t(706454),
        o = t(70956),
        c = t(844439),
        d = t(981631);
      let r = 10 * o.Z.Millis.MINUTE;
      async function u(e) {
        let { channelId: n, location: t, withCommands: o } = e,
          u = Date.now(),
          s = c.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: o,
          }),
          m = c.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: o,
          });
        if (s !== c.M.FETCHING && (null == m || !(m + r > u))) {
          a.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: t,
            channelId: n,
            withCommands: o,
          });
          try {
            let e = await i.tn.get({
              url: d.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: l.default.locale,
                channel_id: n,
                location: t,
                with_commands: o,
              },
            });
            a.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: t,
              channelId: n,
              recommendations: e.body,
              withCommands: o,
            });
          } catch (e) {
            a.Z.dispatch({
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
          return _;
        },
        yJ: function () {
          return s;
        },
      });
      var i = t(470079),
        a = t(892814),
        l = t(442837),
        o = t(895924),
        c = t(581364),
        d = t(823379),
        r = t(399654),
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
      function _(e) {
        let { channelId: n } = e,
          { fetchState: t, recommendationsSections: E } = (function (e) {
            let { channelId: n } = e,
              t = a.I.CONTEXTUAL_IMAGE,
              o = i.useMemo(
                () => ({ channelId: n, location: t, withCommands: !0 }),
                [n, t],
              );
            i.useEffect(() => {
              (0, r.a)(o);
            }, [o]);
            let { fetchState: c, recommendationsSections: d } = (0, l.cj)(
              [u.ZP],
              () => ({
                fetchState: u.ZP.getFetchState(o),
                recommendationsSections: u.ZP.getRecommendations(o),
              }),
            );
            return { fetchState: c, recommendationsSections: d };
          })({ channelId: n });
        return {
          fetchState: t,
          imageRecCommandContexts: i.useMemo(() => {
            let e = E.length > 0 ? E[0].items : void 0;
            return void 0 === e
              ? []
              : m
                  .map((n) => {
                    var t, i, a, l;
                    let d, r;
                    let u = e.find((e) => {
                      var t;
                      return (
                        null !=
                        (d =
                          null === (t = e.commands) || void 0 === t
                            ? void 0
                            : t.find((e) => e.id === n))
                      );
                    });
                    if (null == u) return null;
                    let { application: m } = u;
                    if (null == d) return null;
                    let E = (0, c.Z8)({
                        rootCommand: d,
                        command: d,
                        applicationId: m.id,
                      }),
                      _ =
                        null === (t = s[n].overrideSendCommandInfo) ||
                        void 0 === t
                          ? void 0
                          : t.commandId;
                    if (null != _) {
                      let e =
                        null != _
                          ? null === (a = u.commands) || void 0 === a
                            ? void 0
                            : a.find((e) => e.id === _)
                          : void 0;
                      null != e &&
                        (r = (0, c.Z8)({
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
                      overrideSendCommand: r,
                      section: {
                        type: o.Qi.APPLICATION,
                        id: m.id,
                        icon: m.icon,
                        name:
                          null !==
                            (l =
                              null == m
                                ? void 0
                                : null === (i = m.bot) || void 0 === i
                                  ? void 0
                                  : i.username) && void 0 !== l
                            ? l
                            : m.name,
                        application: m,
                      },
                    };
                  })
                  .filter(d.lm);
          }, [E]),
        };
      }
    },
    844439: function (e, n, t) {
      t.d(n, {
        M: function () {
          return c;
        },
      });
      var i,
        a,
        l,
        o,
        c,
        d,
        r = t(442837),
        u = t(570140);
      ((i = c || (c = {}))[(i.FETCHING = 0)] = "FETCHING"),
        (i[(i.FETCHED = 1)] = "FETCHED"),
        (i[(i.ERROR = 2)] = "ERROR");
      let s = {},
        m = {},
        E = {};
      function _(e) {
        let { location: n, channelId: t, withCommands: i } = e;
        return "location:"
          .concat(n, " channelId:")
          .concat("0", " withCommands:")
          .concat(i);
      }
      let p = Object.freeze([]);
      class M extends (d = r.ZP.Store) {
        getLastFetchTimeMs(e) {
          let { location: n, channelId: t, withCommands: i } = e;
          return E[_({ location: n, channelId: t, withCommands: i })];
        }
        getFetchState(e) {
          let { location: n, channelId: t, withCommands: i } = e;
          return m[_({ location: n, channelId: t, withCommands: i })];
        }
        getRecommendations(e) {
          var n;
          let { location: t, channelId: i, withCommands: a } = e;
          return null !==
            (n = s[_({ location: t, channelId: i, withCommands: a })]) &&
            void 0 !== n
            ? n
            : p;
        }
      }
      (o = void 0),
        (l = "displayName") in (a = M)
          ? Object.defineProperty(a, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = o),
        (n.ZP = new M(u.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
              ...m,
              [_({ location: n, channelId: t, withCommands: i })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let {
                recommendations: n,
                location: t,
                channelId: i,
                withCommands: a,
              } = e,
              l = _({ location: t, channelId: i, withCommands: a });
            (s = { ...s, [l]: n }), (m = { ...m, [l]: 1 });
            let o = Date.now();
            E = { ...E, [l]: o };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: n, channelId: t, withCommands: i } = e;
            m = {
              ...m,
              [_({ location: n, channelId: t, withCommands: i })]: 2,
            };
          },
        }));
    },
    370298: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120),
        t(653041);
      var i = t(735250),
        a = t(470079),
        l = t(442837),
        o = t(749280),
        c = t(481060),
        d = t(166459),
        r = t(911969),
        u = t(476326),
        s = t(827498),
        m = t(555573),
        E = t(213459),
        _ = t(998698),
        p = t(895924),
        M = t(581364),
        C = t(667204),
        g = t(873387),
        A = t(809090),
        f = t(147391),
        I = t(583027),
        v = t(978983),
        h = t(592125),
        N = t(703558),
        S = t(430824),
        P = t(626135),
        R = t(585483),
        T = t(619895),
        O = t(844439),
        b = t(981631),
        U = t(689938),
        Z = t(973335);
      function x(e) {
        let {
            toggleShowMenu: n,
            showMenu: t,
            className: d,
            channelId: r,
            imageUrl: u,
            mimeType: s,
          } = e,
          m = (0, l.e7)([h.Z], () => h.Z.getChannel(r)),
          { Component: E, events: _, play: p } = (0, o.w)(),
          [M, C] = a.useState(!1);
        return null == m
          ? null
          : (!M && p(),
            (0, i.jsx)(c.Popout, {
              renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(y, {
                  onClose: n,
                  channel: m,
                  imageUrl: u,
                  mimeType: s,
                });
              },
              position: "right",
              align: "top",
              animation: c.Popout.Animation.NONE,
              onRequestClose: n,
              shouldShow: t,
              children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(c.Tooltip, {
                  text: U.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, i.jsx)(c.Clickable, {
                      ...e,
                      className: d,
                      focusProps: { offset: 2 },
                      onClick: n,
                      onMouseEnter: () => {
                        C(!0), _.onMouseEnter();
                      },
                      onMouseLeave: _.onMouseLeave,
                      "aria-label": U.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
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
      function y(e) {
        let {
            onSelect: n,
            onClose: t,
            channel: o,
            imageUrl: h,
            mimeType: x,
          } = e,
          y = (0, l.e7)([S.Z], () => S.Z.getGuild(o.guild_id)),
          { fetchState: w, imageRecCommandContexts: D } = (0, T.hR)({
            channelId: o.id,
          }),
          j = w === O.M.FETCHING,
          L = (0, g.g)(o),
          G = (0, E.PL)(!0, !0),
          F = (0, E.LD)(o.guild_id, !0);
        a.useEffect(() => {
          (w === O.M.ERROR || (w === O.M.FETCHED && 0 === D.length)) && t();
        }, [w, D.length, t]),
          a.useEffect(() => {
            var e, n;
            if (j || 0 === D.length) return;
            let t = [];
            D.forEach((e) => {
              t.push(Number(e.command.id)),
                null != e.overrideSendCommand &&
                  t.push(Number(e.overrideSendCommand.id));
            }),
              P.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (n = null == o ? void 0 : o.id) && void 0 !== n
                    ? n
                    : "",
                application_ids: [
                  ...D.map((e) => Number(e.command.applicationId)),
                ],
                command_ids: t,
              });
          }, [D, o, j]);
        let H = a.useCallback(
            async (e) => {
              let n = await fetch(h),
                t = await n.arrayBuffer(),
                i = x.join("/"),
                a = new File(
                  [t],
                  "image".concat((0, T.Qm)({ contentType: i })),
                  { type: i },
                );
              d.Z.setFile({
                channelId: o.id,
                id: e,
                file: { id: e, file: a, platform: u.ow.WEB },
                draftType: N.d.SlashCommand,
              });
            },
            [h, o.id, x],
          ),
          k = a.useCallback(
            async (e, n, t, i) => {
              var a, l;
              if (!L) return;
              let c = e.applicationId,
                d =
                  (null === (a = G.result) || void 0 === a
                    ? void 0
                    : a.sections[c]) != null,
                u =
                  (null === (l = F.result) || void 0 === l
                    ? void 0
                    : l.sections[c]) != null;
              await H(i),
                null != _.Z.getActiveCommand(o.id) &&
                  m.Po({ channelId: o.id, command: null, section: null }),
                d || u || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id),
                m.Po({
                  channelId: o.id,
                  command: e,
                  section: n,
                  location: t,
                  source: s._b.TEXT,
                  initialValues: {
                    [i]: { type: r.jw.ATTACHMENT, name: i, value: "image" },
                  },
                  commandOrigin:
                    t === p.Vh.IMAGE_RECS_SUBMENU
                      ? p.bB.IMAGE_RECS_SUBMENU
                      : p.bB.IMAGE_RECS_MENU,
                }),
                (0, I.Mo)({ command: e, location: t, sectionName: n.name }),
                R.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: o.id,
                });
            },
            [o.id, H, L, G, F],
          ),
          B = a.useCallback(
            async (e, n, t) => {
              var i, a;
              let l = e.applicationId,
                c =
                  (null === (i = G.result) || void 0 === i
                    ? void 0
                    : i.sections[l]) != null,
                d =
                  (null === (a = F.result) || void 0 === a
                    ? void 0
                    : a.sections[l]) != null;
              c || d || E.ZP.queryInstallOnDemandApp(e.applicationId, o.id);
              let r = await (0, f.L)({
                applicationId: l,
                userIndexState: G,
                guildIndexState: F,
                location: n,
                source: s._b.TEXT,
              });
              (0, M.qJ)({ command: e, location: n, source: s._b.TEXT }),
                r &&
                  (await H(t),
                  await (0, C.Z)({
                    command: { ...e },
                    optionValues: { [t]: [{ text: "image", type: "text" }] },
                    context: { channel: o, guild: y },
                    commandOrigin:
                      n === p.Vh.IMAGE_RECS_SUBMENU
                        ? p.bB.IMAGE_RECS_SUBMENU
                        : p.bB.IMAGE_RECS_MENU,
                  }));
            },
            [o, y, G, F, H],
          );
        return (0, i.jsxs)(c.Menu, {
          onSelect: n,
          navId: "image-context-commands-popout",
          onClose: t,
          "aria-label": U.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
          children: [
            (0, i.jsx)(
              c.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(c.Text, {
                    className: Z.title,
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: U.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  }),
                navigable: !1,
                disabled: !0,
              },
              "menu-image-rec-header",
            ),
            (0, i.jsx)(c.MenuSeparator, {}),
            j
              ? (0, i.jsx)(
                  c.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, i.jsx)(v.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: D.map((e) => {
                    let n = T.yJ[e.command.id],
                      t = e.overrideSendCommand,
                      a = n.overrideSendCommandInfo,
                      l = null != t && null != a,
                      d = n.onlyAllowEdit || (null != a && null == t);
                    return (0, i.jsx)(
                      c.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          d
                            ? k(
                                e.command,
                                e.section,
                                p.Vh.IMAGE_RECS_MENU,
                                n.imageOption,
                              )
                            : B(
                                l ? t : e.command,
                                p.Vh.IMAGE_RECS_MENU,
                                l ? a.imageOption : n.imageOption,
                              );
                        },
                        label: e.command.displayName,
                        subtext: e.command.displayDescription,
                        subtextLineClamp: 1,
                        icon: d ? c.PencilIcon : l ? void 0 : c.SendMessageIcon,
                        iconLeft: () =>
                          (0, i.jsx)(A.Z, {
                            channel: o,
                            section: e.section,
                            width: 32,
                            height: 32,
                            isSquircle: !0,
                            selectable: !1,
                          }),
                        iconLeftSize: "lg",
                        showImageFirst: !0,
                        disabled: !L && d,
                        children: l
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(
                                  c.MenuItem,
                                  {
                                    id: "".concat(e.command.id, "-send"),
                                    label:
                                      U.Z.Messages
                                        .APP_IMAGE_REC_MENU_SEND_LABEL,
                                    subtext:
                                      U.Z.Messages
                                        .APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                    action: () =>
                                      B(
                                        t,
                                        p.Vh.IMAGE_RECS_SUBMENU,
                                        a.imageOption,
                                      ),
                                    icon: c.SendMessageIcon,
                                  },
                                  "".concat(e.command.id, "-send"),
                                ),
                                (0, i.jsx)(
                                  c.MenuItem,
                                  {
                                    id: "".concat(e.command.id, "-edit"),
                                    label:
                                      U.Z.Messages
                                        .APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                    subtext:
                                      U.Z.Messages
                                        .APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                    action: () =>
                                      k(
                                        e.command,
                                        e.section,
                                        p.Vh.IMAGE_RECS_SUBMENU,
                                        n.imageOption,
                                      ),
                                    icon: c.PencilIcon,
                                    disabled: !L,
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
        a = t(442837),
        l = t(665906),
        o = t(271383),
        c = t(496675),
        d = t(594174),
        r = t(981631);
      function u(e) {
        let n = e.getGuildId(),
          t = (0, a.e7)([o.ZP, d.default], () => {
            var e, t;
            let i = d.default.getCurrentUser();
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
          { messagesDisabled: u } = (0, a.cj)(
            [c.Z],
            () => {
              let n = e.isPrivate(),
                a = c.Z.computePermissions(e),
                o = i.e$(a, r.Plq.SEND_MESSAGES),
                d = (0, l.xl)(e);
              return { messagesDisabled: t || (!n && !o) || d };
            },
            [e, t],
          );
        return !u;
      }
    },
    147391: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var i = t(373793),
        a = t(367907),
        l = t(69580),
        o = t(812206),
        c = t(981631),
        d = t(689079);
      function r(e) {
        var n, t, r, u, s;
        let {
          applicationId: m,
          userIndexState: E,
          guildIndexState: _,
          sectionName: p,
          location: M,
          source: C,
        } = e;
        if (
          m === d.bi.BUILT_IN ||
          (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) !=
            null ||
          (null === (t = _.result) || void 0 === t ? void 0 : t.sections[m]) !=
            null
        )
          return Promise.resolve(!0);
        (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: M,
          application_id: m,
          section_name: p,
          source: C,
        });
        let g = o.Z.getApplication(m),
          A = i.Y.USER_INSTALL,
          f =
            null == g
              ? void 0
              : null === (s = g.integrationTypesConfig) || void 0 === s
                ? void 0
                : null === (u = s[A]) || void 0 === u
                  ? void 0
                  : null === (r = u.oauth2InstallParams) || void 0 === r
                    ? void 0
                    : r.scopes;
        return new Promise((e) => {
          (0, l.openOAuth2Modal)(
            {
              clientId: m,
              integrationType: A,
              scopes: f,
              callback: (n) => {
                let { location: t } = n;
                null != t
                  ? ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      location: M,
                      application_id: m,
                      section_name: p,
                      source: C,
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
          return c;
        },
        SC: function () {
          return r;
        },
        _U: function () {
          return d;
        },
      }),
        t(47120);
      var i = t(652874),
        a = t(868888),
        l = t(731965);
      let o = (0, i.Z)(
        (0, a.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function c(e) {
        let { command: n, location: t, sectionName: i } = e,
          { commandAnalyticsContext: a } = o.getState(),
          c = a.get(n);
        if (null == c || c.location !== t || c.sectionName !== i) {
          let e = new Map(a);
          e.set(n, { location: t, sectionName: i }),
            (0, l.j)(() => o.setState({ commandAnalyticsContext: e }));
        }
      }
      function d(e) {
        let { commandAnalyticsContext: n } = o.getState();
        return n.get(e);
      }
      function r(e) {
        let { commandAnalyticsContext: n } = o.getState();
        if (n.has(e)) {
          let t = new Map(n);
          t.delete(e),
            (0, l.j)(() => o.setState({ commandAnalyticsContext: t }));
        }
      }
    },
    947849: function (e, n, t) {
      t.d(n, {
        h: function () {
          return i;
        },
      });
      let i = t(470079).createContext(() => null);
    },
    978983: function (e, n, t) {
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(53304);
      n.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(a.Dots, { dotRadius: 4, themed: !0 }),
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
    892814: function (e, n, t) {
      var i, a;
      t.d(n, {
        I: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (a.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (a.CONTEXTUAL_IMAGE = "contextual_image");
    },
  },
]);
//# sourceMappingURL=92209cc92491767acc78.js.map
