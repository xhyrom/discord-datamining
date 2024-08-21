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
        o = n(570140),
        a = n(706454),
        l = n(70956),
        r = n(844439),
        d = n(981631);
      let c = 10 * l.Z.Millis.MINUTE;
      async function m(e) {
        let { channelId: t, location: n, withCommands: l } = e,
          m = Date.now(),
          u = r.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l,
          }),
          s = r.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l,
          });
        if (u !== r.M.FETCHING && (null == s || !(s + c > m))) {
          o.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: t,
            withCommands: l,
          });
          try {
            let e = await i.tn.get({
              url: d.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: a.default.locale,
                channel_id: t,
                location: n,
                with_commands: l,
              },
            });
            o.Z.dispatch({
              type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
              location: n,
              channelId: t,
              recommendations: e.body,
              withCommands: l,
            });
          } catch (e) {
            o.Z.dispatch({
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
        o = n(892814),
        a = n(442837),
        l = n(895924),
        r = n(581364),
        d = n(823379),
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
                motion_prompt: [
                  { text: "$ishowspeed_jumps_over_the_car", type: "text" },
                ],
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
                motion_prompt: [{ text: "$ronaldo_skill", type: "text" }],
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
              {
                motion_prompt: [{ text: "$paqueta_dance", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [{ text: "$tauba_tauba", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$masbondit_suara_asli", type: "text" },
                ],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [{ text: "$rock_your_hips", type: "text" }],
                background: [{ text: "From template", type: "text" }],
              },
              {
                motion_prompt: [
                  { text: "$jojo_siwa_guilty_pleasure", type: "text" },
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
              n = o.I.CONTEXTUAL_IMAGE,
              l = i.useMemo(
                () => ({ channelId: t, location: n, withCommands: !0 }),
                [t, n],
              );
            i.useEffect(() => {
              (0, c.a)(l);
            }, [l]);
            let { fetchState: r, recommendationsSections: d } = (0, a.cj)(
              [m.ZP],
              () => ({
                fetchState: m.ZP.getFetchState(l),
                recommendationsSections: m.ZP.getRecommendations(l),
              }),
            );
            return { fetchState: r, recommendationsSections: d };
          })({ channelId: t });
        return {
          fetchState: n,
          imageRecCommandContexts: i.useMemo(() => {
            let e = u.length > 0 ? u[0].items : void 0;
            return void 0 === e
              ? []
              : s
                  .map((t) => {
                    var n, i;
                    let o;
                    let a = e.find((e) => {
                      var n;
                      return (
                        null !=
                        (o =
                          null === (n = e.commands) || void 0 === n
                            ? void 0
                            : n.find((e) => e.id === t))
                      );
                    });
                    if (null == a) return null;
                    let { application: d } = a;
                    if (null == o) return null;
                    let c = (0, r.Z8)({
                      rootCommand: o,
                      command: o,
                      applicationId: d.id,
                    });
                    return {
                      command: {
                        ...c,
                        name: c.name
                          .split(/[_ ]/)
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" "),
                      },
                      section: {
                        type: l.Qi.APPLICATION,
                        id: d.id,
                        icon: d.icon,
                        name:
                          null !==
                            (i =
                              null == d
                                ? void 0
                                : null === (n = d.bot) || void 0 === n
                                  ? void 0
                                  : n.username) && void 0 !== i
                            ? i
                            : d.name,
                        application: d,
                      },
                    };
                  })
                  .filter(d.lm);
          }, [u]),
        };
      }
    },
    844439: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      var i,
        o,
        a,
        l,
        r,
        d,
        c = n(442837),
        m = n(570140);
      ((i = r || (r = {}))[(i.FETCHING = 0)] = "FETCHING"),
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
      class g extends (d = c.ZP.Store) {
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
          let { location: n, channelId: i, withCommands: o } = e;
          return null !==
            (t = u[_({ location: n, channelId: i, withCommands: o })]) &&
            void 0 !== t
            ? t
            : E;
        }
      }
      (l = void 0),
        (a = "displayName") in (o = g)
          ? Object.defineProperty(o, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[a] = l),
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
                withCommands: o,
              } = e,
              a = _({ location: n, channelId: i, withCommands: o });
            (u = { ...u, [a]: t }), (s = { ...s, [a]: 1 });
            let l = Date.now();
            p = { ...p, [a]: l };
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
        o = n(470079),
        a = n(442837),
        l = n(481060),
        r = n(166459),
        d = n(911969),
        c = n(476326),
        m = n(827498),
        u = n(555573),
        s = n(213459),
        p = n(998698),
        _ = n(895924),
        E = n(581364),
        g = n(667204),
        x = n(873387),
        M = n(809090),
        A = n(147391),
        C = n(978983),
        I = n(592125),
        h = n(703558),
        f = n(430824),
        N = n(626135),
        P = n(585483),
        y = n(619895),
        v = n(844439),
        b = n(981631),
        T = n(689938),
        O = n(834033);
      function R(e) {
        let {
            toggleShowMenu: t,
            showMenu: n,
            className: o,
            channelId: r,
            imageUrl: d,
            mimeType: c,
          } = e,
          m = (0, a.e7)([I.Z], () => I.Z.getChannel(r));
        return null == m
          ? null
          : (0, i.jsx)(l.Popout, {
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(S, {
                  onClose: t,
                  channel: m,
                  imageUrl: d,
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
                  text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, i.jsx)(l.Clickable, {
                      ...e,
                      className: o,
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
            imageUrl: R,
            mimeType: S,
          } = e,
          U = (0, a.e7)([f.Z], () => f.Z.getGuild(I.guild_id)),
          { fetchState: Z, imageRecCommandContexts: F } = (0, y.hR)({
            channelId: I.id,
          }),
          w = Z === v.M.FETCHING,
          j = (0, x.g)(I),
          D = (0, s.PL)(!0, !0),
          k = (0, s.LD)(I.guild_id, !0);
        o.useEffect(() => {
          (Z === v.M.ERROR || (Z === v.M.FETCHED && 0 === F.length)) && n();
        }, [Z, F.length, n]),
          o.useEffect(() => {
            var e, t;
            if (!w && 0 !== F.length)
              N.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == I ? void 0 : I.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (t = null == I ? void 0 : I.id) && void 0 !== t
                    ? t
                    : "",
                application_ids: [
                  ...F.map((e) => Number(e.command.applicationId)),
                ],
                command_ids: [...F.map((e) => Number(e.command.id))],
              });
          }, [F, I, w]);
        let L = o.useCallback(
            async (e) => {
              let t = await fetch(R),
                n = await t.arrayBuffer(),
                i = S.join("/"),
                o = new File(
                  [n],
                  "image".concat((0, y.Qm)({ contentType: i })),
                  { type: i },
                );
              r.Z.setFile({
                channelId: I.id,
                id: e,
                file: { id: e, file: o, platform: c.ow.WEB },
                draftType: h.d.SlashCommand,
              });
            },
            [R, I.id, S],
          ),
          H = o.useCallback(
            async (e, t, n) => {
              var i, o;
              if (!j) return;
              let a = y.Id[e.id],
                l = e.applicationId,
                r =
                  (null === (i = D.result) || void 0 === i
                    ? void 0
                    : i.sections[l]) != null,
                c =
                  (null === (o = k.result) || void 0 === o
                    ? void 0
                    : o.sections[l]) != null;
              await L(a.imageOption),
                null != p.Z.getActiveCommand(I.id) &&
                  u.Po({ channelId: I.id, command: null, section: null }),
                r || c || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id),
                u.Po({
                  channelId: I.id,
                  command: e,
                  section: t,
                  location: n,
                  source: m._b.TEXT,
                  initialValues: {
                    [a.imageOption]: {
                      type: d.jw.ATTACHMENT,
                      name: a.imageOption,
                      value: "image",
                    },
                  },
                  commandOrigin: _.bB.APPLICATION_LAUNCHER,
                }),
                P.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: I.id,
                });
            },
            [I.id, L, j, D, k],
          ),
          G = o.useCallback(
            async (e, t) => {
              var n, i;
              let o = e.applicationId,
                a =
                  (null === (n = D.result) || void 0 === n
                    ? void 0
                    : n.sections[o]) != null,
                l =
                  (null === (i = k.result) || void 0 === i
                    ? void 0
                    : i.sections[o]) != null;
              a || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
              let r = await (0, A.L)({
                applicationId: o,
                userIndexState: D,
                guildIndexState: k,
                location: t,
                source: m._b.TEXT,
              });
              if (
                ((0, E.qJ)({ command: e, location: t, source: m._b.TEXT }), r)
              ) {
                let t = y.Id[e.id],
                  n = t.additionalOptions;
                await L(t.imageOption),
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
            [I, U, D, k, L],
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
                    render: () => (0, i.jsx)(C.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: F.map((e) => {
                    var t;
                    let n = null != y.Id[e.command.id].additionalOptions,
                      o = y.Id[e.command.id].onlyAllowEdit;
                    return (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          o
                            ? H(e.command, e.section, _.Vh.IMAGE_RECS_MENU)
                            : G(e.command, _.Vh.IMAGE_RECS_MENU);
                        },
                        label:
                          null !==
                            (t = y.Id[e.command.id].overrideCommandName) &&
                          void 0 !== t
                            ? t
                            : e.command.name,
                        subtext: e.command.description,
                        subtextLineClamp: 1,
                        icon: o ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                        iconLeft: () =>
                          (0, i.jsx)(M.Z, {
                            channel: I,
                            section: e.section,
                            width: 32,
                            height: 32,
                            isSquircle: !0,
                            selectable: !1,
                          }),
                        iconLeftSize: "lg",
                        showImageFirst: !0,
                        disabled: !j && o,
                        children:
                          n && !o
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
                                        G(e.command, _.Vh.IMAGE_RECS_SUBMENU),
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
                                        H(
                                          e.command,
                                          e.section,
                                          _.Vh.IMAGE_RECS_SUBMENU,
                                        ),
                                      icon: l.PencilIcon,
                                      disabled: !j,
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
        o = n(442837),
        a = n(665906),
        l = n(271383),
        r = n(496675),
        d = n(594174),
        c = n(981631);
      function m(e) {
        let t = e.getGuildId(),
          n = (0, o.e7)([l.ZP, d.default], () => {
            var e, n;
            let i = d.default.getCurrentUser();
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
          { messagesDisabled: m } = (0, o.cj)(
            [r.Z],
            () => {
              let t = e.isPrivate(),
                o = r.Z.computePermissions(e),
                l = i.e$(o, c.Plq.SEND_MESSAGES),
                d = (0, a.xl)(e);
              return { messagesDisabled: n || (!t && !l) || d };
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
        o = n(367907),
        a = n(69580),
        l = n(812206),
        r = n(981631),
        d = n(689079);
      function c(e) {
        var t, n, c, m, u;
        let {
          applicationId: s,
          userIndexState: p,
          guildIndexState: _,
          sectionName: E,
          location: g,
          source: x,
        } = e;
        if (
          s === d.bi.BUILT_IN ||
          (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) !=
            null ||
          (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) !=
            null
        )
          return Promise.resolve(!0);
        (0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: g,
          application_id: s,
          section_name: E,
          source: x,
        });
        let M = l.Z.getApplication(s),
          A = i.Y.USER_INSTALL,
          C =
            null == M
              ? void 0
              : null === (u = M.integrationTypesConfig) || void 0 === u
                ? void 0
                : null === (m = u[A]) || void 0 === m
                  ? void 0
                  : null === (c = m.oauth2InstallParams) || void 0 === c
                    ? void 0
                    : c.scopes;
        return new Promise((e) => {
          (0, a.openOAuth2Modal)(
            {
              clientId: s,
              integrationType: A,
              scopes: C,
              callback: (t) => {
                let { location: n } = t;
                null != n
                  ? ((0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                      location: g,
                      application_id: s,
                      section_name: E,
                      source: x,
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
      var o = n(481060),
        a = n(882441);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: a.loadingWrapper,
          children: (0, i.jsx)(o.Dots, { dotRadius: 4, themed: !0 }),
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
      var i, o;
      n.d(t, {
        I: function () {
          return i;
        },
      }),
        ((o = i || (i = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (o.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (o.CONTEXTUAL_IMAGE = "contextual_image");
    },
  },
]);
//# sourceMappingURL=21ad40e18e7f7d845ca4.js.map
