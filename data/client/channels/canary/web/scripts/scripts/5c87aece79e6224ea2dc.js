"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72181"],
  {
    399654: function (e, t, n) {
      n.d(t, {
        a: function () {
          return m;
        },
      });
      var i = n(544891),
        a = n(570140),
        o = n(706454),
        l = n(70956),
        d = n(844439),
        r = n(981631);
      let c = 10 * l.Z.Millis.MINUTE;
      async function m(e) {
        let { channelId: t, location: n, withCommands: l } = e,
          m = Date.now(),
          u = d.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l,
          }),
          s = d.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l,
          });
        if (u !== d.M.FETCHING && (null == s || !(s + c > m))) {
          a.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: t,
            withCommands: l,
          });
          try {
            let e = await i.tn.get({
              url: r.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: o.default.locale,
                channel_id: t,
                location: n,
                with_commands: l,
              },
            });
            a.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: n,
              channelId: t,
              recommendations: e.body,
              withCommands: l,
            });
          } catch (e) {
            a.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
              location: n,
              channelId: t,
              withCommands: l,
            });
          }
        }
      }
    },
    619895: function (e, t, n) {
      n.d(t, {
        Id: function () {
          return u;
        },
        Qm: function () {
          return p;
        },
        hR: function () {
          return _;
        },
      });
      var i = n(470079),
        a = n(892814),
        o = n(442837),
        l = n(581364),
        d = n(768581),
        r = n(823379),
        c = n(399654),
        m = n(844439);
      let u = {
          "1181475143340539995": {
            imageOption: "image",
            additionalOptions: [
              {
                motion_prompt: [
                  { text: "$dimi_deadpool_bye_bye_bye", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$simone_biles_floor_routine", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$fortnite_starlit_emote", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [{ text: "$apple_guy_running", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [{ text: "$man_in_finance", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$lil_yachty_stage_entrance", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$anthony_edwards_score", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$beyonce_single_ladies", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$rickroll_never_gonna_give_you_up", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [{ text: "$gimme_head_top", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$hugo_hilaire_goofy_dance", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
            ],
          },
          "991195178360635431": { imageOption: "image", onlyAllowEdit: !0 },
          "1091213298818613408": { imageOption: "image" },
          "1029794689932611625": { imageOption: "image" },
          "1238332854602043454": { imageOption: "image" },
        },
        s = Object.keys(u);
      function p(e) {
        let { contentType: t } = e;
        switch (t) {
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
        let { channelId: t } = e,
          { fetchState: n, recommendationsSections: u } = (function (e) {
            let { channelId: t } = e,
              n = a.I.CONTEXTUAL_IMAGE,
              l = i.useMemo(
                () => ({ channelId: t, location: n, withCommands: !0 }),
                [t, n],
              );
            i.useEffect(() => {
              (0, c.a)(l);
            }, [l]);
            let { fetchState: d, recommendationsSections: r } = (0, o.cj)(
              [m.ZP],
              () => ({
                fetchState: m.ZP.getFetchState(l),
                recommendationsSections: m.ZP.getRecommendations(l),
              }),
            );
            return { fetchState: d, recommendationsSections: r };
          })({ channelId: t });
        return {
          fetchState: n,
          imageRecCommandContexts: i.useMemo(() => {
            let e = u.length > 0 ? u[0].items : void 0;
            return void 0 === e
              ? []
              : s
                  .map((t) => {
                    let n;
                    let i = e.find((e) => {
                      var i;
                      return (
                        null !=
                        (n =
                          null === (i = e.commands) || void 0 === i
                            ? void 0
                            : i.find((e) => e.id === t))
                      );
                    });
                    if (null == i) return null;
                    let { application: a } = i;
                    if (null == n) return null;
                    let o = (0, l.Z8)({
                      rootCommand: n,
                      command: n,
                      applicationId: a.id,
                    });
                    return {
                      command: {
                        ...o,
                        name: o.name
                          .split(/[_ ]/)
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" "),
                      },
                      applicationImageURL: d.ZP.getApplicationIconURL({
                        id: a.id,
                        icon: a.icon,
                        bot: a.bot,
                      }),
                      application: a,
                    };
                  })
                  .filter(r.lm);
          }, [u]),
        };
      }
    },
    844439: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var i,
        a,
        o,
        l,
        d,
        r,
        c = n(442837),
        m = n(570140);
      ((i = d || (d = {}))[(i.FETCHING = 0)] = "FETCHING"),
        (i[(i.FETCHED = 1)] = "FETCHED"),
        (i[(i.ERROR = 2)] = "ERROR");
      let u = {},
        s = {},
        p = {};
      function _(e) {
        let { location: t, channelId: n, withCommands: i } = e;
        return "location:"
          .concat(t, " channelId:")
          .concat("0", " withCommands:")
          .concat(i);
      }
      let E = Object.freeze([]);
      class g extends (r = c.ZP.Store) {
        getLastFetchTimeMs(e) {
          let { location: t, channelId: n, withCommands: i } = e;
          return p[_({ location: t, channelId: n, withCommands: i })];
        }
        getFetchState(e) {
          let { location: t, channelId: n, withCommands: i } = e;
          return s[_({ location: t, channelId: n, withCommands: i })];
        }
        getRecommendations(e) {
          var t;
          let { location: n, channelId: i, withCommands: a } = e;
          return null !==
            (t = u[_({ location: n, channelId: i, withCommands: a })]) &&
            void 0 !== t
            ? t
            : E;
        }
      }
      (l = void 0),
        (o = "displayName") in (a = g)
          ? Object.defineProperty(a, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[o] = l),
        (t.ZP = new g(m.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: t, channelId: n, withCommands: i } = e;
            s = {
              ...s,
              [_({ location: t, channelId: n, withCommands: i })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let {
                recommendations: t,
                location: n,
                channelId: i,
                withCommands: a,
              } = e,
              o = _({ location: n, channelId: i, withCommands: a });
            (u = { ...u, [o]: t }), (s = { ...s, [o]: 1 });
            let l = Date.now();
            p = { ...p, [o]: l };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: t, channelId: n, withCommands: i } = e;
            s = {
              ...s,
              [_({ location: t, channelId: n, withCommands: i })]: 2,
            };
          },
        }));
    },
    370298: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(735250),
        a = n(470079),
        o = n(442837),
        l = n(481060),
        d = n(166459),
        r = n(911969),
        c = n(476326),
        m = n(827498),
        u = n(555573),
        s = n(213459),
        p = n(998698),
        _ = n(895924),
        E = n(581364),
        g = n(667204),
        M = n(873387),
        A = n(147391),
        C = n(978983),
        I = n(592125),
        x = n(703558),
        h = n(430824),
        f = n(626135),
        N = n(585483),
        P = n(619895),
        v = n(844439),
        T = n(981631),
        O = n(689938),
        b = n(834033);
      function R(e) {
        let {
            toggleShowMenu: t,
            showMenu: n,
            className: a,
            channelId: d,
            imageUrl: r,
            mimeType: c,
          } = e,
          m = (0, o.e7)([I.Z], () => I.Z.getChannel(d));
        return null == m
          ? null
          : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(y, {
                  onClose: t,
                  channel: m,
                  imageUrl: r,
                  mimeType: c,
                });
              },
              position: "right",
              align: "top",
              animation: l.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(l.Tooltip, {
                  text: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, i.jsx)(l.Clickable, {
                      ...e,
                      className: a,
                      focusProps: { offset: 2 },
                      onClick: t,
                      "aria-label": O.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (0, i.jsx)(l.AppsIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                      }),
                    }),
                });
              },
            });
      }
      function y(e) {
        let {
            onSelect: t,
            onClose: n,
            channel: I,
            imageUrl: R,
            mimeType: y,
          } = e,
          S = (0, o.e7)([h.Z], () => h.Z.getGuild(I.guild_id)),
          { fetchState: U, imageRecCommandContexts: Z } = (0, P.hR)({
            channelId: I.id,
          }),
          F = U === v.M.FETCHING,
          D = (0, M.g)(I),
          L = (0, s.PL)(!0, !0),
          w = (0, s.LD)(I.guild_id, !0);
        a.useEffect(() => {
          (U === v.M.ERROR || (U === v.M.FETCHED && 0 === Z.length)) && n();
        }, [U, Z.length, n]),
          a.useEffect(() => {
            var e, t;
            if (!F && 0 !== Z.length)
              f.default.track(T.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (t = null == I ? void 0 : I.id) && void 0 !== t
                    ? t
                    : "",
                application_ids: [...Z.map((e) => Number(e.application.id))],
                command_ids: [...Z.map((e) => Number(e.command.id))],
              });
          }, [Z, I, F]);
        let j = a.useCallback(
            async (e) => {
              let t = await fetch(R),
                n = await t.arrayBuffer(),
                i = y.join("/"),
                a = new File(
                  [n],
                  "image".concat((0, P.Qm)({ contentType: i })),
                  { type: i },
                );
              d.Z.setFile({
                channelId: I.id,
                id: e,
                file: { id: e, file: a, platform: c.ow.WEB },
                draftType: x.d.SlashCommand,
              });
            },
            [R, I.id, y],
          ),
          H = a.useCallback(
            async (e, t, n) => {
              var i, a;
              if (!D) return;
              let o = P.Id[e.id];
              await j(o.imageOption),
                null != p.Z.getActiveCommand(I.id) &&
                  u.Po({ channelId: I.id, command: null, section: null });
              let l = {
                type: _.Qi.APPLICATION,
                id: t.id,
                icon: t.icon,
                name:
                  null !==
                    (a =
                      null == t
                        ? void 0
                        : null === (i = t.bot) || void 0 === i
                          ? void 0
                          : i.username) && void 0 !== a
                    ? a
                    : t.name,
                application: t,
              };
              u.Po({
                channelId: I.id,
                command: e,
                section: l,
                location: n,
                source: m._b.TEXT,
                initialValues: {
                  [o.imageOption]: {
                    type: r.jw.ATTACHMENT,
                    name: o.imageOption,
                    value: "image",
                  },
                },
                commandOrigin: _.bB.APPLICATION_LAUNCHER,
              }),
                N.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: I.id,
                });
            },
            [I.id, j, D],
          ),
          k = a.useCallback(
            async (e, t) => {
              var n, i;
              let a = e.applicationId,
                o =
                  (null === (n = L.result) || void 0 === n
                    ? void 0
                    : n.sections[a]) != null,
                l =
                  (null === (i = w.result) || void 0 === i
                    ? void 0
                    : i.sections[a]) != null;
              o || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
              let d = await (0, A.L)({
                applicationId: a,
                userIndexState: L,
                guildIndexState: w,
                location: t,
                source: m._b.TEXT,
              });
              if (
                ((0, E.qJ)({ command: e, location: t, source: m._b.TEXT }), d)
              ) {
                let t = P.Id[e.id],
                  n = t.additionalOptions;
                await j(t.imageOption),
                  await (0, g.Z)({
                    command: { ...e },
                    optionValues: {
                      [t.imageOption]: [{ text: "image", type: "text" }],
                      ...(null == n
                        ? {}
                        : n[Math.floor(Math.random() * n.length)]),
                    },
                    context: { channel: I, guild: S },
                    commandOrigin: _.bB.IMAGE_RECS_MENU,
                  });
              }
            },
            [I, S, L, w, j],
          );
        return (0, i.jsxs)(l.Menu, {
          onSelect: t,
          navId: "image-context-commands-popout",
          onClose: n,
          "aria-label": O.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
          children: [
            (0, i.jsx)(
              l.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(l.Text, {
                    className: b.title,
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  }),
                navigable: !1,
                disabled: !0,
              },
              "menu-image-rec-header",
            ),
            (0, i.jsx)(l.MenuSeparator, {}),
            F
              ? (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, i.jsx)(C.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: Z.map((e) => {
                    var t;
                    let n = null != P.Id[e.command.id].additionalOptions,
                      a = P.Id[e.command.id].onlyAllowEdit;
                    return (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          a
                            ? H(e.command, e.application, _.Vh.IMAGE_RECS_MENU)
                            : k(e.command, _.Vh.IMAGE_RECS_MENU);
                        },
                        label:
                          null !==
                            (t = P.Id[e.command.id].overrideCommandName) &&
                          void 0 !== t
                            ? t
                            : e.command.name,
                        subtext: e.command.description,
                        subtextLineClamp: 1,
                        icon: a ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                        imageUrl: e.applicationImageURL,
                        imageClassName: b.appIcon,
                        showImageFirst: !0,
                        disabled: !D && a,
                        children:
                          n && !a
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(
                                    l.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-send"),
                                      label:
                                        O.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_LABEL,
                                      subtext:
                                        O.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                      action: () =>
                                        k(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                      icon: l.SendMessageIcon,
                                    },
                                    "".concat(e.command.id, "-send"),
                                  ),
                                  (0, i.jsx)(
                                    l.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-edit"),
                                      label:
                                        O.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                      subtext:
                                        O.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                      action: () =>
                                        H(
                                          e.command,
                                          e.application,
                                          _.Vh.IMAGE_RECS_SUBMENU,
                                        ),
                                      icon: l.PencilIcon,
                                      disabled: !D,
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
    873387: function (e, t, n) {
      n.d(t, {
        g: function () {
          return m;
        },
      });
      var i = n(149765),
        a = n(442837),
        o = n(665906),
        l = n(271383),
        d = n(496675),
        r = n(594174),
        c = n(981631);
      function m(e) {
        let t = e.getGuildId(),
          n = (0, a.e7)([l.ZP, r.default], () => {
            var e, n;
            let i = r.default.getCurrentUser();
            return (
              null !==
                (n =
                  null != t && null != i
                    ? null === (e = l.ZP.getMember(t, i.id)) || void 0 === e
                      ? void 0
                      : e.isPending
                    : null) &&
              void 0 !== n &&
              n
            );
          }),
          { messagesDisabled: m } = (0, a.cj)(
            [d.Z],
            () => {
              let t = e.isPrivate(),
                a = d.Z.computePermissions(e),
                l = i.e$(a, c.Plq.SEND_MESSAGES),
                r = (0, o.xl)(e);
              return { messagesDisabled: n || (!t && !l) || r };
            },
            [e, n],
          );
        return !m;
      }
    },
    147391: function (e, t, n) {
      n.d(t, {
        L: function () {
          return c;
        },
      });
      var i = n(373793),
        a = n(367907),
        o = n(69580),
        l = n(812206),
        d = n(981631),
        r = n(689079);
      function c(e) {
        var t, n, c, m, u;
        let {
          applicationId: s,
          userIndexState: p,
          guildIndexState: _,
          sectionName: E,
          location: g,
          source: M,
        } = e;
        if (
          s === r.bi.BUILT_IN ||
          (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) !=
            null ||
          (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) !=
            null
        )
          return Promise.resolve(!0);
        (0, a.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: g,
          application_id: s,
          section_name: E,
          source: M,
        });
        let A = l.Z.getApplication(s),
          C = i.Y.USER_INSTALL,
          I =
            null == A
              ? void 0
              : null === (u = A.integrationTypesConfig) || void 0 === u
                ? void 0
                : null === (m = u[C]) || void 0 === m
                  ? void 0
                  : null === (c = m.oauth2InstallParams) || void 0 === c
                    ? void 0
                    : c.scopes;
        return new Promise((e) => {
          (0, o.openOAuth2Modal)(
            {
              clientId: s,
              integrationType: C,
              scopes: I,
              callback: (t) => {
                let { location: n } = t;
                null != n
                  ? ((0, a.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      location: g,
                      application_id: s,
                      section_name: E,
                      source: M,
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
    947849: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      let i = n(470079).createContext(() => null);
    },
    978983: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var a = n(481060),
        o = n(882441);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: o.loadingWrapper,
          children: (0, i.jsx)(a.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    52824: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      function i(e) {
        let { proxyURL: t, url: n } = e;
        return null != t && "" !== t ? t : n;
      }
    },
    892814: function (e, t, n) {
      var i, a;
      n.d(t, {
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
//# sourceMappingURL=5c87aece79e6224ea2dc.js.map
