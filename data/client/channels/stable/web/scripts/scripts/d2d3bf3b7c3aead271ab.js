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
        c = n(981631);
      let r = 10 * l.Z.Millis.MINUTE;
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
        if (u !== d.M.FETCHING && (null == s || !(s + r > m))) {
          a.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: t,
            withCommands: l,
          });
          try {
            let e = await i.tn.get({
              url: c.ANM.APP_RECOMMENDATIONS,
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
    162609: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-07_contextual_image_recs_user",
        label: "Contextual Image Recommendations",
        defaultConfig: { imageRecsEnabled: !1, optionsEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable the Contextual Image Recommendations",
            config: { imageRecsEnabled: !0, optionsEnabled: !0 },
          },
          {
            id: 2,
            label: "Enable the Contextual Image Recommendations with Options",
            config: { imageRecsEnabled: !0, optionsEnabled: !0 },
          },
        ],
      });
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
        c = n(823379),
        r = n(399654),
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
              (0, r.a)(l);
            }, [l]);
            let { fetchState: d, recommendationsSections: c } = (0, o.cj)(
              [m.ZP],
              () => ({
                fetchState: m.ZP.getFetchState(l),
                recommendationsSections: m.ZP.getRecommendations(l),
              }),
            );
            return { fetchState: d, recommendationsSections: c };
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
                  .filter(c.lm);
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
        c,
        r = n(442837),
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
      class g extends (c = r.ZP.Store) {
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
          return y;
        },
      }),
        n(47120);
      var i = n(735250),
        a = n(470079),
        o = n(442837),
        l = n(481060),
        d = n(166459),
        c = n(911969),
        r = n(476326),
        m = n(827498),
        u = n(555573),
        s = n(213459),
        p = n(998698),
        _ = n(895924),
        E = n(581364),
        g = n(667204),
        M = n(873387),
        C = n(147391),
        A = n(978983),
        I = n(592125),
        x = n(703558),
        f = n(430824),
        h = n(626135),
        P = n(585483),
        N = n(162609),
        b = n(619895),
        R = n(844439),
        v = n(981631),
        T = n(689938),
        O = n(834033);
      function y(e) {
        let {
            toggleShowMenu: t,
            showMenu: n,
            className: a,
            channelId: d,
            imageUrl: c,
            mimeType: r,
          } = e,
          m = (0, o.e7)([I.Z], () => I.Z.getChannel(d));
        return null == m
          ? null
          : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(S, {
                  onClose: t,
                  channel: m,
                  imageUrl: c,
                  mimeType: r,
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
                  text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, i.jsx)(l.Clickable, {
                      ...e,
                      className: a,
                      focusProps: { offset: 2 },
                      onClick: t,
                      "aria-label": T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
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
      function S(e) {
        let {
            onSelect: t,
            onClose: n,
            channel: I,
            imageUrl: y,
            mimeType: S,
          } = e,
          U = (0, o.e7)([f.Z], () => f.Z.getGuild(I.guild_id)),
          { fetchState: Z, imageRecCommandContexts: F } = (0, b.hR)({
            channelId: I.id,
          }),
          w = Z === R.M.FETCHING,
          D = (0, M.g)(I),
          L = (0, s.PL)(!0, !0),
          j = (0, s.LD)(I.guild_id, !0),
          k = N.P.useExperiment({
            location: "ContextualImageRecsMenu",
          }).optionsEnabled;
        a.useEffect(() => {
          (Z === R.M.ERROR || (Z === R.M.FETCHED && 0 === F.length)) && n();
        }, [Z, F.length, n]),
          a.useEffect(() => {
            var e, t;
            if (!w && 0 !== F.length)
              h.default.track(v.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (t = null == I ? void 0 : I.id) && void 0 !== t
                    ? t
                    : "",
                application_ids: [...F.map((e) => Number(e.application.id))],
                command_ids: [...F.map((e) => Number(e.command.id))],
              });
          }, [F, I, w]);
        let H = a.useCallback(
            async (e) => {
              let t = await fetch(y),
                n = await t.arrayBuffer(),
                i = S.join("/"),
                a = new File(
                  [n],
                  "image".concat((0, b.Qm)({ contentType: i })),
                  { type: i },
                );
              d.Z.setFile({
                channelId: I.id,
                id: e,
                file: { id: e, file: a, platform: r.ow.WEB },
                draftType: x.d.SlashCommand,
              });
            },
            [y, I.id, S],
          ),
          G = a.useCallback(
            async (e, t, n) => {
              var i, a;
              if (!D) return;
              let o = b.Id[e.id];
              await H(o.imageOption),
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
                    type: c.jw.ATTACHMENT,
                    name: o.imageOption,
                    value: "image",
                  },
                },
                commandOrigin: _.bB.APPLICATION_LAUNCHER,
              }),
                P.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: I.id,
                });
            },
            [I.id, H, D],
          ),
          B = a.useCallback(
            async (e, t) => {
              var n, i;
              let a = e.applicationId,
                o =
                  (null === (n = L.result) || void 0 === n
                    ? void 0
                    : n.sections[a]) != null,
                l =
                  (null === (i = j.result) || void 0 === i
                    ? void 0
                    : i.sections[a]) != null;
              o || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
              let d = await (0, C.L)({
                applicationId: a,
                userIndexState: L,
                guildIndexState: j,
                location: t,
                source: m._b.TEXT,
              });
              if (
                ((0, E.qJ)({ command: e, location: t, source: m._b.TEXT }), d)
              ) {
                let t = b.Id[e.id],
                  n = t.additionalOptions;
                await H(t.imageOption),
                  await (0, g.Z)({
                    command: { ...e },
                    optionValues: {
                      [t.imageOption]: [{ text: "image", type: "text" }],
                      ...(null == n
                        ? {}
                        : n[Math.floor(Math.random() * n.length)]),
                    },
                    context: { channel: I, guild: U },
                    commandOrigin: _.bB.IMAGE_RECS_MENU,
                  });
              }
            },
            [I, U, L, j, H],
          );
        return (0, i.jsxs)(l.Menu, {
          onSelect: t,
          navId: "image-context-commands-popout",
          onClose: n,
          "aria-label": T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
          children: [
            (0, i.jsx)(
              l.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(l.Text, {
                    className: O.title,
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  }),
                navigable: !1,
                disabled: !0,
              },
              "menu-image-rec-header",
            ),
            (0, i.jsx)(l.MenuSeparator, {}),
            w
              ? (0, i.jsx)(
                  l.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, i.jsx)(A.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: F.map((e) => {
                    var t;
                    let n = k && null != b.Id[e.command.id].additionalOptions,
                      a = b.Id[e.command.id].onlyAllowEdit;
                    return (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          a
                            ? G(e.command, e.application, _.Vh.IMAGE_RECS_MENU)
                            : B(e.command, _.Vh.IMAGE_RECS_MENU);
                        },
                        label:
                          null !==
                            (t = b.Id[e.command.id].overrideCommandName) &&
                          void 0 !== t
                            ? t
                            : e.command.name,
                        subtext: e.command.description,
                        subtextLineClamp: 1,
                        icon: a ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                        imageUrl: e.applicationImageURL,
                        imageClassName: O.appIcon,
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
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_LABEL,
                                      subtext:
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                      action: () =>
                                        B(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                      icon: l.SendMessageIcon,
                                    },
                                    "".concat(e.command.id, "-send"),
                                  ),
                                  (0, i.jsx)(
                                    l.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-edit"),
                                      label:
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                      subtext:
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                      action: () =>
                                        G(
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
        c = n(594174),
        r = n(981631);
      function m(e) {
        let t = e.getGuildId(),
          n = (0, a.e7)([l.ZP, c.default], () => {
            var e, n;
            let i = c.default.getCurrentUser();
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
                l = i.e$(a, r.Plq.SEND_MESSAGES),
                c = (0, o.xl)(e);
              return { messagesDisabled: n || (!t && !l) || c };
            },
            [e, n],
          );
        return !m;
      }
    },
    147391: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(373793),
        a = n(367907),
        o = n(69580),
        l = n(812206),
        d = n(981631),
        c = n(689079);
      function r(e) {
        var t, n, r, m, u;
        let {
          applicationId: s,
          userIndexState: p,
          guildIndexState: _,
          sectionName: E,
          location: g,
          source: M,
        } = e;
        if (
          s === c.bi.BUILT_IN ||
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
        let C = l.Z.getApplication(s),
          A = i.Y.USER_INSTALL,
          I =
            null == C
              ? void 0
              : null === (u = C.integrationTypesConfig) || void 0 === u
                ? void 0
                : null === (m = u[A]) || void 0 === m
                  ? void 0
                  : null === (r = m.oauth2InstallParams) || void 0 === r
                    ? void 0
                    : r.scopes;
        return new Promise((e) => {
          (0, o.openOAuth2Modal)(
            {
              clientId: s,
              integrationType: A,
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
//# sourceMappingURL=d2d3bf3b7c3aead271ab.js.map
