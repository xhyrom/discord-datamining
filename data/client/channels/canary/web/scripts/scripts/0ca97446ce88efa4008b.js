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
        l = n(581364),
        r = n(768581),
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
                    let { application: o } = i;
                    if (null == n) return null;
                    let a = (0, l.Z8)({
                      rootCommand: n,
                      command: n,
                      applicationId: o.id,
                    });
                    return {
                      command: {
                        ...a,
                        name: a.name
                          .split(/[_ ]/)
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" "),
                      },
                      applicationImageURL: r.ZP.getApplicationIconURL({
                        id: o.id,
                        icon: o.icon,
                        bot: o.bot,
                      }),
                      application: o,
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
          return O;
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
        M = n(147391),
        A = n(978983),
        I = n(592125),
        C = n(703558),
        h = n(430824),
        f = n(626135),
        N = n(585483),
        P = n(619895),
        y = n(844439),
        b = n(981631),
        v = n(689938),
        T = n(834033);
      function O(e) {
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
                return (0, i.jsx)(R, {
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
                  text: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, i.jsx)(l.Clickable, {
                      ...e,
                      className: o,
                      focusProps: { offset: 2 },
                      onClick: t,
                      "aria-label": v.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
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
      function R(e) {
        let {
            onSelect: t,
            onClose: n,
            channel: I,
            imageUrl: O,
            mimeType: R,
          } = e,
          S = (0, a.e7)([h.Z], () => h.Z.getGuild(I.guild_id)),
          { fetchState: U, imageRecCommandContexts: Z } = (0, P.hR)({
            channelId: I.id,
          }),
          F = U === y.M.FETCHING,
          w = (0, x.g)(I),
          D = (0, s.PL)(!0, !0),
          j = (0, s.LD)(I.guild_id, !0);
        o.useEffect(() => {
          (U === y.M.ERROR || (U === y.M.FETCHED && 0 === Z.length)) && n();
        }, [U, Z.length, n]),
          o.useEffect(() => {
            var e, t;
            if (!F && 0 !== Z.length)
              f.default.track(b.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
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
        let k = o.useCallback(
            async (e) => {
              let t = await fetch(O),
                n = await t.arrayBuffer(),
                i = R.join("/"),
                o = new File(
                  [n],
                  "image".concat((0, P.Qm)({ contentType: i })),
                  { type: i },
                );
              r.Z.setFile({
                channelId: I.id,
                id: e,
                file: { id: e, file: o, platform: c.ow.WEB },
                draftType: C.d.SlashCommand,
              });
            },
            [O, I.id, R],
          ),
          L = o.useCallback(
            async (e, t, n) => {
              var i, o, a, l;
              if (!w) return;
              let r = P.Id[e.id],
                c = e.applicationId,
                E =
                  (null === (i = D.result) || void 0 === i
                    ? void 0
                    : i.sections[c]) != null,
                g =
                  (null === (o = j.result) || void 0 === o
                    ? void 0
                    : o.sections[c]) != null;
              await k(r.imageOption),
                null != p.Z.getActiveCommand(I.id) &&
                  u.Po({ channelId: I.id, command: null, section: null });
              let x = {
                type: _.Qi.APPLICATION,
                id: t.id,
                icon: t.icon,
                name:
                  null !==
                    (l =
                      null == t
                        ? void 0
                        : null === (a = t.bot) || void 0 === a
                          ? void 0
                          : a.username) && void 0 !== l
                    ? l
                    : t.name,
                application: t,
              };
              E || g || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id),
                u.Po({
                  channelId: I.id,
                  command: e,
                  section: x,
                  location: n,
                  source: m._b.TEXT,
                  initialValues: {
                    [r.imageOption]: {
                      type: d.jw.ATTACHMENT,
                      name: r.imageOption,
                      value: "image",
                    },
                  },
                  commandOrigin: _.bB.APPLICATION_LAUNCHER,
                }),
                N.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: I.id,
                });
            },
            [I.id, k, w, D, j],
          ),
          H = o.useCallback(
            async (e, t) => {
              var n, i;
              let o = e.applicationId,
                a =
                  (null === (n = D.result) || void 0 === n
                    ? void 0
                    : n.sections[o]) != null,
                l =
                  (null === (i = j.result) || void 0 === i
                    ? void 0
                    : i.sections[o]) != null;
              a || l || s.ZP.queryInstallOnDemandApp(e.applicationId, I.id);
              let r = await (0, M.L)({
                applicationId: o,
                userIndexState: D,
                guildIndexState: j,
                location: t,
                source: m._b.TEXT,
              });
              if (
                ((0, E.qJ)({ command: e, location: t, source: m._b.TEXT }), r)
              ) {
                let t = P.Id[e.id],
                  n = t.additionalOptions;
                await k(t.imageOption),
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
            [I, S, D, j, k],
          );
        return (0, i.jsxs)(l.Menu, {
          onSelect: t,
          navId: "image-context-commands-popout",
          onClose: n,
          "aria-label": v.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
          children: [
            (0, i.jsx)(
              l.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, i.jsx)(l.Text, {
                    className: T.title,
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
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
                    render: () => (0, i.jsx)(A.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, i.jsx)(i.Fragment, {
                  children: Z.map((e) => {
                    var t;
                    let n = null != P.Id[e.command.id].additionalOptions,
                      o = P.Id[e.command.id].onlyAllowEdit;
                    return (0, i.jsx)(
                      l.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          o
                            ? L(e.command, e.application, _.Vh.IMAGE_RECS_MENU)
                            : H(e.command, _.Vh.IMAGE_RECS_MENU);
                        },
                        label:
                          null !==
                            (t = P.Id[e.command.id].overrideCommandName) &&
                          void 0 !== t
                            ? t
                            : e.command.name,
                        subtext: e.command.description,
                        subtextLineClamp: 1,
                        icon: o ? l.PencilIcon : n ? void 0 : l.SendMessageIcon,
                        imageUrl: e.applicationImageURL,
                        imageClassName: T.appIcon,
                        showImageFirst: !0,
                        disabled: !w && o,
                        children:
                          n && !o
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(
                                    l.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-send"),
                                      label:
                                        v.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_LABEL,
                                      subtext:
                                        v.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                      action: () =>
                                        H(e.command, _.Vh.IMAGE_RECS_SUBMENU),
                                      icon: l.SendMessageIcon,
                                    },
                                    "".concat(e.command.id, "-send"),
                                  ),
                                  (0, i.jsx)(
                                    l.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-edit"),
                                      label:
                                        v.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_LABEL,
                                      subtext:
                                        v.Z.Messages
                                          .APP_IMAGE_REC_MENU_CUSTOMIZE_SUBTEXT,
                                      action: () =>
                                        L(
                                          e.command,
                                          e.application,
                                          _.Vh.IMAGE_RECS_SUBMENU,
                                        ),
                                      icon: l.PencilIcon,
                                      disabled: !w,
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
          I =
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
              scopes: I,
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
//# sourceMappingURL=0ca97446ce88efa4008b.js.map
