"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72181"],
  {
    749280: function (e, t, n) {
      n.d(t, {
        w: function () {
          return r;
        },
      });
      var o = n(735250),
        a = n(470079),
        i = n(709014);
      let l = {
          hover: { name: "hover", start: 0, duration: 59 },
          click: { name: "click", start: 68, duration: 26 },
        },
        r = () => {
          let e = a.useRef(null),
            t = a.useCallback(() => {
              null != e.current && e.current.play("click");
            }, []),
            r = a.useCallback(() => {
              null != e.current && e.current.play("hover");
            }, []),
            c = a.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("hover");
            }, []);
          return {
            events: { onMouseEnter: r, onMouseLeave: c },
            play: t,
            Component: a.useCallback(
              (t) =>
                (0, o.jsx)(i.L, {
                  ...t,
                  src: () => n.e("56855").then(n.t.bind(n, 206509, 19)),
                  ref: e,
                  markers: l,
                }),
              [],
            ),
          };
        };
    },
    399654: function (e, t, n) {
      n.d(t, {
        a: function () {
          return u;
        },
      });
      var o = n(544891),
        a = n(570140),
        i = n(706454),
        l = n(70956),
        r = n(844439),
        c = n(981631);
      let d = 10 * l.Z.Millis.MINUTE;
      async function u(e) {
        let { channelId: t, location: n, withCommands: l } = e,
          u = Date.now(),
          m = r.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l,
          }),
          s = r.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l,
          });
        if (m !== r.M.FETCHING && (null == s || !(s + d > u))) {
          a.Z.dispatch({
            type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
            location: n,
            channelId: t,
            withCommands: l,
          });
          try {
            let e = await o.tn.get({
              url: c.ANM.APP_RECOMMENDATIONS,
              query: {
                locale: i.default.locale,
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
          return m;
        },
        Qm: function () {
          return p;
        },
        hR: function () {
          return _;
        },
      });
      var o = n(470079),
        a = n(892814),
        i = n(442837),
        l = n(895924),
        r = n(581364),
        c = n(823379),
        d = n(399654),
        u = n(844439);
      let m = {
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
        s = Object.keys(m);
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
          { fetchState: n, recommendationsSections: m } = (function (e) {
            let { channelId: t } = e,
              n = a.I.CONTEXTUAL_IMAGE,
              l = o.useMemo(
                () => ({ channelId: t, location: n, withCommands: !0 }),
                [t, n],
              );
            o.useEffect(() => {
              (0, d.a)(l);
            }, [l]);
            let { fetchState: r, recommendationsSections: c } = (0, i.cj)(
              [u.ZP],
              () => ({
                fetchState: u.ZP.getFetchState(l),
                recommendationsSections: u.ZP.getRecommendations(l),
              }),
            );
            return { fetchState: r, recommendationsSections: c };
          })({ channelId: t });
        return {
          fetchState: n,
          imageRecCommandContexts: o.useMemo(() => {
            let e = m.length > 0 ? m[0].items : void 0;
            return void 0 === e
              ? []
              : s
                  .map((t) => {
                    var n, o;
                    let a;
                    let i = e.find((e) => {
                      var n;
                      return (
                        null !=
                        (a =
                          null === (n = e.commands) || void 0 === n
                            ? void 0
                            : n.find((e) => e.id === t))
                      );
                    });
                    if (null == i) return null;
                    let { application: c } = i;
                    if (null == a) return null;
                    let d = (0, r.Z8)({
                      rootCommand: a,
                      command: a,
                      applicationId: c.id,
                    });
                    return {
                      command: {
                        ...d,
                        displayName: d.displayName
                          .split(/[_ ]/)
                          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                          .join(" "),
                      },
                      section: {
                        type: l.Qi.APPLICATION,
                        id: c.id,
                        icon: c.icon,
                        name:
                          null !==
                            (o =
                              null == c
                                ? void 0
                                : null === (n = c.bot) || void 0 === n
                                  ? void 0
                                  : n.username) && void 0 !== o
                            ? o
                            : c.name,
                        application: c,
                      },
                    };
                  })
                  .filter(c.lm);
          }, [m]),
        };
      }
    },
    844439: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      var o,
        a,
        i,
        l,
        r,
        c,
        d = n(442837),
        u = n(570140);
      ((o = r || (r = {}))[(o.FETCHING = 0)] = "FETCHING"),
        (o[(o.FETCHED = 1)] = "FETCHED"),
        (o[(o.ERROR = 2)] = "ERROR");
      let m = {},
        s = {},
        p = {};
      function _(e) {
        let { location: t, channelId: n, withCommands: o } = e;
        return "location:"
          .concat(t, " channelId:")
          .concat("0", " withCommands:")
          .concat(o);
      }
      let E = Object.freeze([]);
      class g extends (c = d.ZP.Store) {
        getLastFetchTimeMs(e) {
          let { location: t, channelId: n, withCommands: o } = e;
          return p[_({ location: t, channelId: n, withCommands: o })];
        }
        getFetchState(e) {
          let { location: t, channelId: n, withCommands: o } = e;
          return s[_({ location: t, channelId: n, withCommands: o })];
        }
        getRecommendations(e) {
          var t;
          let { location: n, channelId: o, withCommands: a } = e;
          return null !==
            (t = m[_({ location: n, channelId: o, withCommands: a })]) &&
            void 0 !== t
            ? t
            : E;
        }
      }
      (l = void 0),
        (i = "displayName") in (a = g)
          ? Object.defineProperty(a, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = l),
        (t.ZP = new g(u.Z, {
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function (e) {
            let { location: t, channelId: n, withCommands: o } = e;
            s = {
              ...s,
              [_({ location: t, channelId: n, withCommands: o })]: 0,
            };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function (e) {
            let {
                recommendations: t,
                location: n,
                channelId: o,
                withCommands: a,
              } = e,
              i = _({ location: n, channelId: o, withCommands: a });
            (m = { ...m, [i]: t }), (s = { ...s, [i]: 1 });
            let l = Date.now();
            p = { ...p, [i]: l };
          },
          APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function (e) {
            let { location: t, channelId: n, withCommands: o } = e;
            s = {
              ...s,
              [_({ location: t, channelId: n, withCommands: o })]: 2,
            };
          },
        }));
    },
    370298: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      }),
        n(47120);
      var o = n(735250),
        a = n(470079),
        i = n(442837),
        l = n(749280),
        r = n(481060),
        c = n(166459),
        d = n(911969),
        u = n(476326),
        m = n(827498),
        s = n(555573),
        p = n(213459),
        _ = n(998698),
        E = n(895924),
        g = n(581364),
        M = n(667204),
        x = n(873387),
        C = n(809090),
        A = n(147391),
        I = n(583027),
        f = n(978983),
        h = n(592125),
        y = n(703558),
        N = n(430824),
        v = n(626135),
        b = n(585483),
        P = n(619895),
        S = n(844439),
        R = n(981631),
        T = n(689938),
        O = n(973335);
      function U(e) {
        let {
            toggleShowMenu: t,
            showMenu: n,
            className: c,
            channelId: d,
            imageUrl: u,
            mimeType: m,
          } = e,
          s = (0, i.e7)([h.Z], () => h.Z.getChannel(d)),
          { Component: p, events: _, play: E } = (0, l.w)(),
          [g, M] = a.useState(!1);
        return null == s
          ? null
          : (!g && E(),
            (0, o.jsx)(r.Popout, {
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, o.jsx)(Z, {
                  onClose: t,
                  channel: s,
                  imageUrl: u,
                  mimeType: m,
                });
              },
              position: "right",
              align: "top",
              animation: r.Popout.Animation.NONE,
              onRequestClose: t,
              shouldShow: n,
              children: (e) => {
                let { onClick: n } = e;
                return (0, o.jsx)(r.Tooltip, {
                  text: T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                  children: (e) =>
                    (0, o.jsx)(r.Clickable, {
                      ...e,
                      className: c,
                      focusProps: { offset: 2 },
                      onClick: t,
                      onMouseEnter: () => {
                        M(!0), _.onMouseEnter();
                      },
                      onMouseLeave: _.onMouseLeave,
                      "aria-label": T.Z.Messages.APP_IMAGE_REC_MENU_HEADER,
                      children: (0, o.jsx)(p, {
                        size: "sm",
                        color: "currentColor",
                        className: O.buttonIcon,
                      }),
                    }),
                });
              },
            }));
      }
      function Z(e) {
        let {
            onSelect: t,
            onClose: n,
            channel: l,
            imageUrl: h,
            mimeType: U,
          } = e,
          Z = (0, i.e7)([N.Z], () => N.Z.getGuild(l.guild_id)),
          { fetchState: F, imageRecCommandContexts: k } = (0, P.hR)({
            channelId: l.id,
          }),
          w = F === S.M.FETCHING,
          j = (0, x.g)(l),
          D = (0, p.PL)(!0, !0),
          L = (0, p.LD)(l.guild_id, !0);
        a.useEffect(() => {
          (F === S.M.ERROR || (F === S.M.FETCHED && 0 === k.length)) && n();
        }, [F, k.length, n]),
          a.useEffect(() => {
            var e, t;
            if (!w && 0 !== k.length)
              v.default.track(R.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
                guild_id:
                  null !== (e = null == l ? void 0 : l.guild_id) && void 0 !== e
                    ? e
                    : "",
                channel_id:
                  null !== (t = null == l ? void 0 : l.id) && void 0 !== t
                    ? t
                    : "",
                application_ids: [
                  ...k.map((e) => Number(e.command.applicationId)),
                ],
                command_ids: [...k.map((e) => Number(e.command.id))],
              });
          }, [k, l, w]);
        let G = a.useCallback(
            async (e) => {
              let t = await fetch(h),
                n = await t.arrayBuffer(),
                o = U.join("/"),
                a = new File(
                  [n],
                  "image".concat((0, P.Qm)({ contentType: o })),
                  { type: o },
                );
              c.Z.setFile({
                channelId: l.id,
                id: e,
                file: { id: e, file: a, platform: u.ow.WEB },
                draftType: y.d.SlashCommand,
              });
            },
            [h, l.id, U],
          ),
          H = a.useCallback(
            async (e, t, n) => {
              var o, a;
              if (!j) return;
              let i = P.Id[e.id],
                r = e.applicationId,
                c =
                  (null === (o = D.result) || void 0 === o
                    ? void 0
                    : o.sections[r]) != null,
                u =
                  (null === (a = L.result) || void 0 === a
                    ? void 0
                    : a.sections[r]) != null;
              await G(i.imageOption),
                null != _.Z.getActiveCommand(l.id) &&
                  s.Po({ channelId: l.id, command: null, section: null }),
                c || u || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id),
                s.Po({
                  channelId: l.id,
                  command: e,
                  section: t,
                  location: n,
                  source: m._b.TEXT,
                  initialValues: {
                    [i.imageOption]: {
                      type: d.jw.ATTACHMENT,
                      name: i.imageOption,
                      value: "image",
                    },
                  },
                  commandOrigin:
                    n === E.Vh.IMAGE_RECS_SUBMENU
                      ? E.bB.IMAGE_RECS_SUBMENU
                      : E.bB.IMAGE_RECS_MENU,
                }),
                (0, I.Mo)({ command: e, location: n, sectionName: t.name }),
                b.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                  channelId: l.id,
                });
            },
            [l.id, G, j, D, L],
          ),
          B = a.useCallback(
            async (e, t) => {
              var n, o;
              let a = e.applicationId,
                i =
                  (null === (n = D.result) || void 0 === n
                    ? void 0
                    : n.sections[a]) != null,
                r =
                  (null === (o = L.result) || void 0 === o
                    ? void 0
                    : o.sections[a]) != null;
              i || r || p.ZP.queryInstallOnDemandApp(e.applicationId, l.id);
              let c = await (0, A.L)({
                applicationId: a,
                userIndexState: D,
                guildIndexState: L,
                location: t,
                source: m._b.TEXT,
              });
              if (
                ((0, g.qJ)({ command: e, location: t, source: m._b.TEXT }), c)
              ) {
                let n = P.Id[e.id],
                  o = n.additionalOptions;
                await G(n.imageOption),
                  await (0, M.Z)({
                    command: { ...e },
                    optionValues: {
                      [n.imageOption]: [{ text: "image", type: "text" }],
                      ...(null == o
                        ? {}
                        : o[Math.floor(Math.random() * o.length)]),
                    },
                    context: { channel: l, guild: Z },
                    commandOrigin:
                      t === E.Vh.IMAGE_RECS_SUBMENU
                        ? E.bB.IMAGE_RECS_SUBMENU
                        : E.bB.IMAGE_RECS_MENU,
                  });
              }
            },
            [l, Z, D, L, G],
          );
        return (0, o.jsxs)(r.Menu, {
          onSelect: t,
          navId: "image-context-commands-popout",
          onClose: n,
          "aria-label": T.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
          children: [
            (0, o.jsx)(
              r.MenuItem,
              {
                id: "menu-image-rec-header",
                render: () =>
                  (0, o.jsx)(r.Text, {
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
            (0, o.jsx)(r.MenuSeparator, {}),
            w
              ? (0, o.jsx)(
                  r.MenuItem,
                  {
                    id: "menu-image-recs-placeholder",
                    render: () => (0, o.jsx)(f.Z, {}),
                    navigable: !1,
                    disabled: !0,
                  },
                  "menu-image-recs-placeholder",
                )
              : (0, o.jsx)(o.Fragment, {
                  children: k.map((e) => {
                    var t;
                    let n = null != P.Id[e.command.id].additionalOptions,
                      a = P.Id[e.command.id].onlyAllowEdit;
                    return (0, o.jsx)(
                      r.MenuItem,
                      {
                        id: e.command.id,
                        action: () => {
                          a
                            ? H(e.command, e.section, E.Vh.IMAGE_RECS_MENU)
                            : B(e.command, E.Vh.IMAGE_RECS_MENU);
                        },
                        label:
                          null !==
                            (t = P.Id[e.command.id].overrideCommandName) &&
                          void 0 !== t
                            ? t
                            : e.command.displayName,
                        subtext: e.command.displayDescription,
                        subtextLineClamp: 1,
                        icon: a ? r.PencilIcon : n ? void 0 : r.SendMessageIcon,
                        iconLeft: () =>
                          (0, o.jsx)(C.Z, {
                            channel: l,
                            section: e.section,
                            width: 32,
                            height: 32,
                            isSquircle: !0,
                            selectable: !1,
                          }),
                        iconLeftSize: "lg",
                        showImageFirst: !0,
                        disabled: !j && a,
                        children:
                          n && !a
                            ? (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)(
                                    r.MenuItem,
                                    {
                                      id: "".concat(e.command.id, "-send"),
                                      label:
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_LABEL,
                                      subtext:
                                        T.Z.Messages
                                          .APP_IMAGE_REC_MENU_SEND_SUBTEXT,
                                      action: () =>
                                        B(e.command, E.Vh.IMAGE_RECS_SUBMENU),
                                      icon: r.SendMessageIcon,
                                    },
                                    "".concat(e.command.id, "-send"),
                                  ),
                                  (0, o.jsx)(
                                    r.MenuItem,
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
                                          E.Vh.IMAGE_RECS_SUBMENU,
                                        ),
                                      icon: r.PencilIcon,
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
          return u;
        },
      });
      var o = n(149765),
        a = n(442837),
        i = n(665906),
        l = n(271383),
        r = n(496675),
        c = n(594174),
        d = n(981631);
      function u(e) {
        let t = e.getGuildId(),
          n = (0, a.e7)([l.ZP, c.default], () => {
            var e, n;
            let o = c.default.getCurrentUser();
            return (
              null !==
                (n =
                  null != t && null != o
                    ? null === (e = l.ZP.getMember(t, o.id)) || void 0 === e
                      ? void 0
                      : e.isPending
                    : null) &&
              void 0 !== n &&
              n
            );
          }),
          { messagesDisabled: u } = (0, a.cj)(
            [r.Z],
            () => {
              let t = e.isPrivate(),
                a = r.Z.computePermissions(e),
                l = o.e$(a, d.Plq.SEND_MESSAGES),
                c = (0, i.xl)(e);
              return { messagesDisabled: n || (!t && !l) || c };
            },
            [e, n],
          );
        return !u;
      }
    },
    147391: function (e, t, n) {
      n.d(t, {
        L: function () {
          return d;
        },
      });
      var o = n(373793),
        a = n(367907),
        i = n(69580),
        l = n(812206),
        r = n(981631),
        c = n(689079);
      function d(e) {
        var t, n, d, u, m;
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
        (0, a.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
          location: g,
          application_id: s,
          section_name: E,
          source: M,
        });
        let x = l.Z.getApplication(s),
          C = o.Y.USER_INSTALL,
          A =
            null == x
              ? void 0
              : null === (m = x.integrationTypesConfig) || void 0 === m
                ? void 0
                : null === (u = m[C]) || void 0 === u
                  ? void 0
                  : null === (d = u.oauth2InstallParams) || void 0 === d
                    ? void 0
                    : d.scopes;
        return new Promise((e) => {
          (0, i.openOAuth2Modal)(
            {
              clientId: s,
              integrationType: C,
              scopes: A,
              callback: (t) => {
                let { location: n } = t;
                null != n
                  ? ((0, a.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
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
    583027: function (e, t, n) {
      n.d(t, {
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
        n(47120);
      var o = n(652874),
        a = n(868888),
        i = n(731965);
      let l = (0, o.Z)(
        (0, a.XR)(() => ({ commandAnalyticsContext: new Map() })),
      );
      function r(e) {
        let { command: t, location: n, sectionName: o } = e,
          { commandAnalyticsContext: a } = l.getState(),
          r = a.get(t);
        if (null == r || r.location !== n || r.sectionName !== o) {
          let e = new Map(a);
          e.set(t, { location: n, sectionName: o }),
            (0, i.j)(() => l.setState({ commandAnalyticsContext: e }));
        }
      }
      function c(e) {
        let { commandAnalyticsContext: t } = l.getState();
        return t.get(e);
      }
      function d(e) {
        let { commandAnalyticsContext: t } = l.getState();
        if (t.has(e)) {
          let n = new Map(t);
          n.delete(e),
            (0, i.j)(() => l.setState({ commandAnalyticsContext: n }));
        }
      }
    },
    947849: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      let o = n(470079).createContext(() => null);
    },
    978983: function (e, t, n) {
      var o = n(735250);
      n(470079);
      var a = n(481060),
        i = n(53304);
      t.Z = () =>
        (0, o.jsx)("div", {
          className: i.loadingWrapper,
          children: (0, o.jsx)(a.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    52824: function (e, t, n) {
      n.d(t, {
        q: function () {
          return o;
        },
      });
      function o(e) {
        let { proxyURL: t, url: n } = e;
        return null != t && "" !== t ? t : n;
      }
    },
    892814: function (e, t, n) {
      var o, a;
      n.d(t, {
        I: function () {
          return o;
        },
      }),
        ((a = o || (o = {})).APP_LAUNCHER_TEXT = "app_launcher_text"),
        (a.APP_LAUNCHER_VOICE = "app_launcher_voice"),
        (a.CONTEXTUAL_IMAGE = "contextual_image");
    },
  },
]);
//# sourceMappingURL=a69e2f2f751e2bc0cc7c.js.map
