"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21757"],
  {
    161068: function (e) {
      e.exports = "/assets/ef0320755a461d5998ff.svg";
    },
    34854: function (e, n, t) {
      var o = t(544891),
        i = t(981631);
      n.Z = {
        updateNote(e, n) {
          o.tn.put({
            url: i.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
          });
        },
      };
    },
    666520: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(47120);
      var o,
        i = t(735250),
        s = t(470079),
        l = t(699581),
        c = t(442837),
        r = t(481060),
        a = t(34854),
        d = t(531301),
        u = t(246946),
        _ = t(981631),
        I = t(689938),
        E = t(605258);
      function f(e, n, t) {
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
      class p extends (o = s.PureComponent) {
        componentDidMount() {
          if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e &&
              null != e.selectionStart &&
              (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
          }
        }
        render() {
          let { className: e, loading: n, note: t, hideNote: o } = this.props;
          return o
            ? null
            : (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(r.TextAreaAutosize, {
                  ref: this.noteRef,
                  className: E.textarea,
                  disabled: n,
                  placeholder: n
                    ? I.Z.Messages.LOADING_NOTE
                    : I.Z.Messages.NOTE_PLACEHOLDER,
                  "aria-label": I.Z.Messages.NOTE,
                  onBlur: this.handleBlur,
                  onKeyPress: this.handleKeyPress,
                  defaultValue: null != t ? t : void 0,
                  maxLength: _.vuo,
                }),
              });
        }
        constructor(...e) {
          super(...e),
            f(this, "noteRef", s.createRef()),
            f(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: t, userId: o, onUpdate: i } = this.props;
              if ((null != t ? t : "") !== n)
                null == i || i(), a.Z.updateNote(o, n);
            }),
            f(this, "handleKeyPress", (e) => {
              if (13 === e.which) {
                if (e.shiftKey) {
                  var n;
                  (null !== (n = e.currentTarget.value.match(/\n/g)) &&
                  void 0 !== n
                    ? n
                    : []
                  ).length >= 5 && e.preventDefault();
                } else e.preventDefault(), e.currentTarget.blur();
              } else e.which === _.yXg.SPACE && e.stopPropagation();
            });
        }
      }
      function Z(e) {
        let n = (0, c.e7)([u.Z], () => u.Z.hidePersonalInformation),
          t = (0, d.Z)(e.userId);
        return (0, i.jsx)(p, { ...e, ...t, hideNote: n });
      }
      f(p, "defaultProps", { autoFocus: !1 });
    },
    860719: function (e, n, t) {
      t.d(n, {
        w: function () {
          return i;
        },
      }),
        t(789020);
      var o = t(85025);
      function i(e) {
        let { flags: n } = e,
          t = (0, o.O)(n),
          i =
            null != t &&
            ((null == t ? void 0 : t.messageContent) ||
              (null == t ? void 0 : t.messageContentLimited)),
          s =
            null != t &&
            ((null == t ? void 0 : t.guildPresences) ||
              (null == t ? void 0 : t.guildPresencesLimited)),
          l =
            null != t &&
            ((null == t ? void 0 : t.guildMembers) ||
              (null == t ? void 0 : t.guildMembersLimited));
        return {
          hasMessageContent: i,
          hasGuildPresences: s,
          hasGuildMembers: l,
          hasIntents: i || s || l,
        };
      }
    },
    85025: function (e, n, t) {
      t.d(n, {
        O: function () {
          return s;
        },
      });
      var o = t(630388),
        i = t(981631);
      function s(e) {
        if (null != e)
          return {
            guildPresences: (0, o.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, o.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, o.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, o.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, o.yE)(
              e,
              i.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, o.yE)(
              e,
              i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    250822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var o = t(470079),
        i = t(442837),
        s = t(621853);
      let l = [];
      function c(e) {
        let n = (0, i.e7)([s.Z], () => s.Z.getUserProfile(e));
        return (0, o.useMemo)(
          () =>
            (null == n ? void 0 : n.applicationRoleConnections) == null
              ? l
              : n.applicationRoleConnections,
          [null == n ? void 0 : n.applicationRoleConnections],
        );
      }
    },
    771362: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var o = t(470079),
        i = t(442837),
        s = t(726542),
        l = t(122021),
        c = t(621853);
      let r = [];
      function a(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          t = (0, i.e7)([c.Z], () => c.Z.getUserProfile(e));
        return (0, o.useMemo)(
          () =>
            (null == t ? void 0 : t.connectedAccounts) == null
              ? r
              : t.connectedAccounts.filter((e) => {
                  let { type: t } = e,
                    o = s.Z.get(t);
                  return null != o && n(o);
                }),
          [null == t ? void 0 : t.connectedAccounts, n],
        );
      }
    },
    934861: function (e, n, t) {
      t.d(n, {
        c: function () {
          return r;
        },
        v: function () {
          return a;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        s = t(493683),
        l = t(475413),
        c = t(689938);
      function r(e) {
        let { userId: n, onClose: t, ...r } = e;
        return (0, o.jsx)(l.tG, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          text: c.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            s.Z.openPrivateChannel(n), null == t || t();
          },
          ...r,
        });
      }
      function a(e) {
        let { userId: n, onClose: t, ...r } = e;
        return (0, o.jsx)(l.ef, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          tooltipText: c.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            s.Z.openPrivateChannel(n), null == t || t();
          },
          ...r,
        });
      }
    },
    787018: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(481060),
        l = t(100527),
        c = t(906732),
        r = t(138201),
        a = t(785717),
        d = t(221292),
        u = t(687158),
        _ = t(471879),
        I = t(502762),
        E = t(475413),
        f = t(228168),
        p = t(981631),
        Z = t(689938),
        h = t(226691),
        x = t(161068);
      function m(e) {
        let {
            user: n,
            guildId: t,
            channelId: m,
            messageId: S,
            roleId: T,
            transitionState: v,
            onViewBlockedProfileClick: g,
            showGuildProfile: A = !0,
            sourceAnalyticsLocations: O = [],
          } = e,
          L = t === p.ME ? void 0 : t,
          { analyticsLocations: b } = (0, c.ZP)([
            ...O,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          N = (0, a.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: L,
            channelId: m,
            messageId: S,
            roleId: T,
            showGuildProfile: A,
          }),
          M = [
            {
              icon: s.BellSlashIcon,
              description:
                Z.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED,
            },
            {
              icon: s.DenyIcon,
              description:
                Z.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED,
            },
          ],
          C = (0, u.ZP)(n.id, A ? L : void 0),
          R = i.createRef();
        return (0, o.jsx)(c.Gt, {
          value: b,
          children: (0, o.jsx)(a.Mt, {
            value: N,
            children: (0, o.jsx)(s.ModalRoot, {
              transitionState: v,
              className: h.root,
              hideShadow: !0,
              "aria-label": Z.Z.Messages.USER_PROFILE_MODAL,
              children: (0, o.jsx)(I.Z, {
                user: n,
                displayProfile: C,
                profileType: f.y0.FULL_SIZE,
                ref: R,
                children: (0, o.jsxs)("div", {
                  className: h.container,
                  children: [
                    (0, o.jsx)("img", {
                      alt: "",
                      src: x,
                      className: h.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, o.jsxs)("div", {
                      className: h.body,
                      children: [
                        (0, o.jsx)(_.Z, { user: n, guildId: L }),
                        (0, o.jsx)(s.Heading, {
                          variant: "heading-xl/bold",
                          className: h.header,
                          children:
                            Z.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, o.jsx)(s.Text, {
                          variant: "text-md/medium",
                          children:
                            Z.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, o.jsx)(s.Text, {
                          variant: "text-md/medium",
                          children:
                            Z.Z.Messages
                              .USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION,
                        }),
                        (0, o.jsx)("div", {
                          className: h.safetyTable,
                          children: M.map((e, n) => {
                            let { icon: t, description: i } = e;
                            return (0, o.jsx)(
                              r.Z,
                              {
                                icon: t,
                                title: i,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, o.jsx)(E.tG, {
                          className: h.centeredButton,
                          action: "VIEW_BLOCKED_PROFILE",
                          text: Z.Z.Messages.VIEW_PROFILE,
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == g || g(),
                              (0, d.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: b,
                                ...N,
                              });
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    752342: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120);
      var o = t(735250);
      t(470079);
      var i = t(481060),
        s = t(100527),
        l = t(906732),
        c = t(5192),
        r = t(785717),
        a = t(687158),
        d = t(899007),
        u = t(648052),
        _ = t(867176),
        I = t(438163),
        E = t(681837),
        f = t(502762),
        p = t(530),
        Z = t(871604),
        h = t(952124),
        x = t(53558),
        m = t(544989),
        S = t(934861),
        T = t(740628),
        v = t(398145),
        g = t(228168),
        A = t(981631),
        O = t(689938),
        L = t(272216);
      function b(e) {
        let {
            user: n,
            currentUser: t,
            guildId: b,
            channelId: N,
            messageId: M,
            roleId: C,
            sessionId: R,
            initialSection: j,
            initialSubsection: P,
            transitionState: y,
            onClose: U,
            sourceAnalyticsLocations: B = [],
          } = e,
          D = b === A.ME ? void 0 : b,
          F = (0, a.ZP)(n.id, D),
          { analyticsLocations: G } = (0, l.ZP)([
            ...B,
            s.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          w = (0, r.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: D,
            channelId: N,
            messageId: M,
            roleId: C,
          }),
          V = (0, v.Z)(n);
        return (0, o.jsx)(l.Gt, {
          value: G,
          children: (0, o.jsx)(r.Mt, {
            value: w,
            children: (0, o.jsx)(i.ModalRoot, {
              transitionState: y,
              className: L.root,
              hideShadow: !0,
              "aria-label": O.Z.Messages.USER_PROFILE_MODAL,
              children: (0, o.jsxs)(f.Z, {
                user: n,
                displayProfile: F,
                profileType: g.y0.FULL_SIZE,
                children: [
                  (0, o.jsx)(m.Z, {
                    profileType: g.y0.FULL_SIZE,
                    children: (0, o.jsx)(h.Z, { user: n, guildId: D }),
                  }),
                  (0, o.jsxs)("header", {
                    children: [
                      (0, o.jsx)(_.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: g.y0.FULL_SIZE,
                      }),
                      (0, o.jsxs)("div", {
                        className: L.headerInner,
                        children: [
                          (0, o.jsx)(d.Z, {
                            user: n,
                            displayProfile: F,
                            guildId: D,
                            channelId: N,
                            profileType: g.y0.FULL_SIZE,
                          }),
                          (0, o.jsx)(I.Z, {
                            user: n,
                            profileType: g.y0.FULL_SIZE,
                            hasEntered: y === i.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, o.jsxs)("div", {
                            className: L.headerButtons,
                            children: [
                              (0, o.jsx)(S.c, {
                                userId: n.id,
                                onClose: U,
                                className: L.messageTextButton,
                              }),
                              (0, o.jsx)(S.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: L.messageIconButton,
                              }),
                              (0, o.jsx)(x.Z, { user: n, guildId: D }),
                              (0, o.jsx)(Z.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: L.body,
                    children: [
                      (0, o.jsx)(p.Z, {
                        user: n,
                        profileType: g.y0.FULL_SIZE,
                        nickname: c.ZP.getName(D, N, n),
                        pronouns: null == F ? void 0 : F.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, o.jsx)(E.Z, { userId: n.id }),
                        tags: (0, o.jsx)(u.Z, {
                          displayProfile: F,
                          profileType: g.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, o.jsx)(f.Z.Overlay, {
                        className: L.overlay,
                        children: (0, o.jsx)(T.Z, {
                          user: n,
                          currentUser: t,
                          displayProfile: F,
                          items: V,
                          initialSection: null != j ? j : g.oh.BOT_INFO,
                          initialSubsection: P,
                          onClose: U,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    786366: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(789020);
      var o = t(735250);
      t(470079);
      var i = t(597312),
        s = t(442837),
        l = t(481060),
        c = t(860719),
        r = t(621853),
        a = t(689938),
        d = t(834585);
      function u(e) {
        let { icon: n, title: t, description: i } = e;
        return (0, o.jsxs)("div", {
          className: d.row,
          children: [
            (0, o.jsx)("div", {
              className: d.rowIcon,
              children: (0, o.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
              }),
            }),
            (0, o.jsxs)("div", {
              className: d.rowText,
              children: [
                (0, o.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  children: t,
                }),
                (0, o.jsx)(l.Text, { variant: "text-sm/normal", children: i }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let { user: n } = e,
          t = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: _,
            hasGuildPresences: I,
            hasGuildMembers: E,
          } = (0, c.w)({ flags: null == t ? void 0 : t.flags });
        return (0, o.jsxs)(i.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            _ &&
              (0, o.jsx)(u, {
                icon: l.ChatIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            I &&
              (0, o.jsx)(u, {
                icon: l.GameControllerIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            E &&
              (0, o.jsx)(u, {
                icon: l.GroupIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, o.jsx)(l.Text, {
              variant: "text-xs/normal",
              children: a.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                helpCenterUrl:
                  "https://support.discord.com/hc/articles/7933951485975",
              }),
            }),
          ],
        });
      }
    },
    323090: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(666520),
        c = t(592125),
        r = t(430824),
        a = t(944486),
        d = t(785717),
        u = t(621853),
        _ = t(172351),
        I = t(280885),
        E = t(900927),
        f = t(678738),
        p = t(179828),
        Z = t(228168),
        h = t(689938),
        x = t(11633);
      function m(e) {
        var n;
        let {
            user: t,
            currentUser: m,
            displayProfile: S,
            subsection: T,
            onClose: v,
          } = e,
          { trackUserProfileAction: g } = (0, d.KZ)(),
          A = (0, i.e7)([r.Z], () =>
            (null == S ? void 0 : S.guildId) != null
              ? r.Z.getGuild(S.guildId)
              : null,
          ),
          O = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          L = (0, i.e7)([c.Z, a.Z], () => c.Z.getChannel(a.Z.getChannelId()));
        return (0, o.jsxs)(s.ScrollerThin, {
          fade: !0,
          className: x.scroller,
          children: [
            (null == S ? void 0 : S.bio) != null &&
              (null == S ? void 0 : S.bio) !== "" &&
              (0, o.jsx)(I.Z, { userBio: S.bio, setLineClamp: !1 }),
            (null == O ? void 0 : O.popularApplicationCommandIds) != null &&
              null != L &&
              (0, o.jsx)(_.Z, {
                applicationId: O.id,
                commandIds: O.popularApplicationCommandIds,
                channel: L,
                guildId:
                  null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: v,
              }),
            null != A &&
              (0, o.jsx)(p.Z, {
                user: t,
                currentUser: m,
                guild: A,
                scrollIntoView: T === Z.Tb.ROLES,
              }),
            (0, o.jsx)(f.Z, {
              heading: h.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, o.jsx)(E.Z, {
                userId: t.id,
                guildId: null == S ? void 0 : S.guildId,
                tooltipDelay: Z.vB,
              }),
            }),
            (0, o.jsx)(f.Z, {
              heading: h.Z.Messages.NOTE,
              scrollIntoView: T === Z.Tb.NOTE,
              children: (0, o.jsx)(l.Z, {
                userId: t.id,
                className: x.note,
                autoFocus: T === Z.Tb.NOTE,
                onUpdate: () => g({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    886794: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(481060),
        l = t(727637),
        c = t(100527),
        r = t(906732),
        a = t(680295),
        d = t(5192),
        u = t(785717),
        _ = t(687158),
        I = t(899007),
        E = t(648052),
        f = t(867176),
        p = t(280885),
        Z = t(900927),
        h = t(678738),
        x = t(502762),
        m = t(530),
        S = t(679332),
        T = t(544989),
        v = t(228168),
        g = t(981631),
        A = t(689938),
        O = t(272216),
        L = t(11633),
        b = t(722849);
      function N(e) {
        let {
            user: n,
            guildId: t,
            channelId: N,
            messageId: M,
            roleId: C,
            sessionId: R,
            transitionState: j,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = t === g.ME ? void 0 : t,
          B = (0, _.ZP)(n.id, U),
          { analyticsLocations: D } = (0, r.ZP)([
            ...y,
            c.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          F = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: U,
            channelId: N,
            messageId: M,
            roleId: C,
          }),
          G = i.createRef(),
          w = (0, l.Z)(G);
        return (0, o.jsx)(r.Gt, {
          value: D,
          children: (0, o.jsx)(u.Mt, {
            value: F,
            children: (0, o.jsxs)(s.ModalRoot, {
              transitionState: j,
              className: O.root,
              hideShadow: !0,
              "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, o.jsxs)(x.Z, {
                  user: n,
                  displayProfile: B,
                  profileType: v.y0.FULL_SIZE,
                  ref: G,
                  children: [
                    (0, o.jsx)(T.Z, {
                      profileType: v.y0.FULL_SIZE,
                      children: (0, o.jsx)(S.Z, { user: n }),
                    }),
                    (0, o.jsxs)("header", {
                      children: [
                        (0, o.jsx)(f.Z, {
                          user: n,
                          displayProfile: B,
                          profileType: v.y0.FULL_SIZE,
                        }),
                        (0, o.jsx)("div", {
                          className: O.headerInner,
                          children: (0, o.jsx)(I.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: U,
                            channelId: N,
                            profileType: v.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: O.body,
                      children: [
                        (0, o.jsx)(m.Z, {
                          user: n,
                          profileType: v.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, N, n),
                          pronouns: null == B ? void 0 : B.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, o.jsx)(E.Z, {
                            displayProfile: B,
                            profileType: v.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, o.jsx)(x.Z.Overlay, {
                          className: O.overlay,
                          children: (0, o.jsxs)("div", {
                            className: b.container,
                            children: [
                              (0, o.jsx)(s.TabBar, {
                                className: b.tabBar,
                                type: "top",
                                selectedItem: v.oh.BOT_INFO,
                                onItemSelect: g.dG4,
                                children: (0, o.jsx)(
                                  s.TabBar.Item,
                                  {
                                    className: b.tabBarItem,
                                    id: v.oh.BOT_INFO,
                                    "aria-label":
                                      A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    children: (0, o.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children:
                                        A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    }),
                                  },
                                  v.oh.BOT_INFO,
                                ),
                              }),
                              (0, o.jsxs)(s.ScrollerThin, {
                                fade: !0,
                                className: L.scroller,
                                children: [
                                  (0, o.jsx)(p.Z, {
                                    userId: n.id,
                                    userBio: null == B ? void 0 : B.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, o.jsx)(h.Z, {
                                    heading:
                                      A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, o.jsx)(Z.Z, {
                                      userId: n.id,
                                      guildId: U,
                                      tooltipDelay: v.vB,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (null == B ? void 0 : B.profileEffectId) != null &&
                  (0, o.jsx)(a.Z, {
                    profileEffectId: null == B ? void 0 : B.profileEffectId,
                    isHovering: w,
                  }),
              ],
            }),
          }),
        });
      }
    },
    910364: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return B;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(212433),
        l = t(442837),
        c = t(481060),
        r = t(727637),
        a = t(58540),
        d = t(100527),
        u = t(906732),
        _ = t(680295),
        I = t(699516),
        E = t(5192),
        f = t(785717),
        p = t(221292),
        Z = t(687158),
        h = t(326094),
        x = t(510659),
        m = t(113557),
        S = t(867176),
        T = t(169979),
        v = t(451834),
        g = t(502762),
        A = t(544989),
        O = t(705556),
        L = t(481932),
        b = t(195387),
        N = t(272510),
        M = t(171368),
        C = t(62154),
        R = t(412317),
        j = t(228168),
        P = t(981631),
        y = t(689938),
        U = t(272216);
      function B(e) {
        let {
            user: n,
            currentUser: t,
            guildId: B,
            channelId: D,
            messageId: F,
            roleId: G,
            sessionId: w,
            friendToken: V,
            initialSection: k,
            initialSubsection: W,
            transitionState: Y,
            onClose: K,
            showGuildProfile: H = !0,
            sourceAnalyticsLocations: q = [],
          } = e,
          z = B === P.ME ? void 0 : B,
          { analyticsLocations: Q } = (0, u.ZP)([
            ...q,
            d.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          J = (0, h.Z)({
            user: n,
            currentUser: t,
            location: P.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          X = (0, f.ZB)({
            layout: J
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: w,
            guildId: z,
            channelId: D,
            messageId: F,
            roleId: G,
            showGuildProfile: H,
          }),
          $ = (0, x.$m)(),
          ee = (0, c.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 },
          }),
          en = (0, Z.ZP)(n.id, H ? z : void 0),
          et = (0, Z.ZP)(n.id, z),
          eo = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
          ei = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
        (0, a.$)(ei);
        let es = i.createRef(),
          el = (0, r.Z)(es),
          ec = () =>
            (null == et ? void 0 : et.guildId) == null
              ? null
              : (null == en ? void 0 : en.guildId) != null
                ? (0, o.jsx)(c.MenuItem, {
                    id: "view-main-profile",
                    label: y.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: E.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      K(),
                        (0, M.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !1,
                          friendToken: V,
                          sourceAnalyticsLocations: q,
                        }),
                        (0, p.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: Q,
                          ...X,
                        });
                    },
                  })
                : (0, o.jsx)(c.MenuItem, {
                    id: "view-server-profile",
                    label: y.Z.Messages.VIEW_SERVER_PROFILE,
                    subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: E.ZP.getName(z, D, n),
                    }),
                    action: () => {
                      K(),
                        (0, M.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !0,
                          friendToken: V,
                          sourceAnalyticsLocations: q,
                        }),
                        (0, p.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: Q,
                          ...X,
                        });
                    },
                  });
        return (0, o.jsx)(u.Gt, {
          value: Q,
          children: (0, o.jsx)(f.Mt, {
            value: X,
            children: (0, o.jsx)(x.NJ, {
              value: $,
              children: (0, o.jsxs)(c.ModalRoot, {
                transitionState: Y,
                className: U.root,
                hideShadow: !0,
                "aria-label": y.Z.Messages.USER_PROFILE_MODAL,
                children: [
                  (0, o.jsxs)(g.Z, {
                    user: n,
                    displayProfile: en,
                    profileType: j.y0.FULL_SIZE,
                    ref: es,
                    children: [
                      (0, o.jsxs)(A.Z, {
                        profileType: j.y0.FULL_SIZE,
                        children: [
                          (0, o.jsx)(b.Z, {
                            shouldShowTooltip: null === $.interactionType,
                            user: n,
                            guildId: z,
                            channelId: D,
                            onClose: K,
                          }),
                          (0, o.jsx)(L.Z, {
                            shouldShowTooltip: null === $.interactionType,
                            profileType: j.y0.FULL_SIZE,
                            user: n,
                            friendToken: V,
                          }),
                          (0, o.jsx)(N.Z, {
                            user: n,
                            guildId: z,
                            viewProfileItem: ec(),
                          }),
                        ],
                      }),
                      (0, o.jsxs)("header", {
                        children: [
                          (0, o.jsx)(S.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: j.y0.FULL_SIZE,
                          }),
                          (0, o.jsx)(v.Z, {
                            userId: n.id,
                            onClose: K,
                            className: U.toast,
                          }),
                          null != $.interactionType &&
                            (0, o.jsx)(s.animated.div, {
                              style: ee,
                              className: U.backdrop,
                            }),
                          (0, o.jsxs)("div", {
                            className: U.headerInner,
                            children: [
                              (0, o.jsx)(m.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: en,
                                guildId: z,
                                channelId: D,
                                profileType: j.y0.FULL_SIZE,
                              }),
                              (0, o.jsx)(T.Z, {
                                location: "SimplifiedUserProfileModal",
                                user: n,
                                displayProfile: en,
                                guildId: z,
                                channelId: D,
                                profileType: j.y0.FULL_SIZE,
                                hasEntered:
                                  Y === c.ModalTransitionState.ENTERED,
                                onCloseProfile: K,
                              }),
                              (0, o.jsxs)("div", {
                                className: U.headerButtons,
                                children: [
                                  (0, o.jsx)(R.Z, {
                                    user: n,
                                    isCurrentUser: n.id === t.id,
                                    relationshipType: eo,
                                    friendToken: V,
                                    onClose: K,
                                  }),
                                  (0, o.jsx)(O.Z, {
                                    user: n,
                                    guildId: z,
                                    onClose: K,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsx)(C.Z, {
                        user: n,
                        currentUser: t,
                        channelId: D,
                        displayProfile: en,
                        initialSection: k,
                        initialSubsection: W,
                        friendToken: V,
                        onClose: K,
                      }),
                    ],
                  }),
                  (null == en ? void 0 : en.profileEffectId) != null &&
                    (0, o.jsx)(_.Z, {
                      profileEffectId: null == en ? void 0 : en.profileEffectId,
                      isHovering: el,
                    }),
                ],
              }),
            }),
          }),
        });
      }
    },
    296391: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var o = t(735250),
        i = t(470079),
        s = t(704215),
        l = t(481060),
        c = t(605236),
        r = t(63063),
        a = t(369566),
        d = t(678738),
        u = t(151545),
        _ = t(527790),
        I = t(304042),
        E = t(981631),
        f = t(921944),
        p = t(689938),
        Z = t(505865);
      function h(e) {
        let { user: n, currentUser: t, onClose: h } = e,
          { live: x, recent: m, stream: S } = (0, a.Z)(n.id),
          T = n.id === t.id,
          v = (0, c.wE)(s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          i.useEffect(() => {
            if (!!T && !v)
              (0, c.EW)(s.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: f.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [T, v]),
          (0, o.jsxs)(l.ScrollerThin, {
            className: Z.scroller,
            fade: !0,
            children: [
              (0, o.jsxs)(d.Z, {
                children: [
                  null != S &&
                    (0, o.jsx)(I.Z, {
                      user: n,
                      currentUser: t,
                      stream: S,
                      onClose: h,
                    }),
                  x.map((e, i) =>
                    (0, o.jsx)(
                      u.Z,
                      { user: n, currentUser: t, activity: e, onClose: h },
                      "live-".concat(i),
                    ),
                  ),
                ],
              }),
              (0, o.jsx)(d.Z, {
                heading: p.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                subheading: T
                  ? p.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                      learnMoreHook: (e, n) =>
                        (0, o.jsx)(
                          l.Anchor,
                          {
                            href: r.Z.getArticleURL(
                              E.BhN.ACTIVITY_STATUS_SETTINGS,
                            ),
                            children: e,
                          },
                          n,
                        ),
                    })
                  : null,
                children: m.map((e) =>
                  (0, o.jsx)(
                    _.Z,
                    { user: n, entry: e, onClose: h, hideHeader: !0 },
                    e.id,
                  ),
                ),
              }),
            ],
          })
        );
      }
    },
    62154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(442837),
        s = t(699516),
        l = t(5192),
        c = t(648052),
        r = t(681837),
        a = t(91433),
        d = t(502762),
        u = t(530),
        _ = t(740628),
        I = t(643518),
        E = t(228168),
        f = t(981631),
        p = t(272216);
      function Z(e) {
        var n;
        let {
            user: t,
            currentUser: Z,
            channelId: h,
            displayProfile: x,
            initialSection: m,
            initialSubsection: S,
            friendToken: T,
            onClose: v,
          } = e,
          g = (0, i.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
          A = (0, I.Z)({ user: t, currentUser: Z });
        return (0, o.jsxs)("div", {
          className: p.body,
          children: [
            (0, o.jsx)(u.Z, {
              user: t,
              profileType: E.y0.FULL_SIZE,
              nickname: l.ZP.getName(null == x ? void 0 : x.guildId, h, t),
              pronouns: null == x ? void 0 : x.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, o.jsx)(r.Z, { userId: t.id }),
              tags: (0, o.jsx)(c.Z, {
                displayProfile: x,
                profileType: E.y0.FULL_SIZE,
                onClose: v,
              }),
            }),
            g === f.OGo.PENDING_INCOMING &&
              (0, o.jsx)(d.Z.Overlay, {
                className: p.friendRequestBannerOverlay,
                children: (0, o.jsx)(a.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == x ? void 0 : x.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: h,
                  friendToken: T,
                  className: p.friendRequestBanner,
                }),
              }),
            (0, o.jsx)(d.Z.Overlay, {
              className: p.overlay,
              children: (0, o.jsx)(_.Z, {
                user: t,
                currentUser: Z,
                displayProfile: x,
                items: A,
                initialSection: m,
                initialSubsection: S,
                onClose: v,
              }),
            }),
          ],
        });
      }
    },
    412317: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        s = t(194359),
        l = t(906732),
        c = t(475413),
        r = t(934861),
        a = t(981631),
        d = t(689938),
        u = t(266580);
      function _(e) {
        let {
            isCurrentUser: n,
            user: t,
            relationshipType: _,
            friendToken: I,
            onClose: E,
          } = e,
          { newestAnalyticsLocation: f } = (0, l.ZP)();
        return n || _ === a.OGo.BLOCKED
          ? null
          : _ === a.OGo.FRIEND || t.bot
            ? (0, o.jsx)("div", {
                className: u.multipleButtons,
                children: (0, o.jsx)(r.c, { userId: t.id, onClose: E }),
              })
            : _ === a.OGo.PENDING_OUTGOING || _ === a.OGo.PENDING_INCOMING
              ? (0, o.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, o.jsx)(c.ef, {
                      icon: i.UserClockIcon,
                      tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0,
                    }),
                    (0, o.jsx)(r.c, { userId: t.id, onClose: E }),
                  ],
                })
              : (0, o.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, o.jsx)(r.v, { userId: t.id, onClose: E }),
                    (0, o.jsx)(c.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: i.UserPlusIcon,
                      text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: i.Button.Colors.BRAND,
                      onClick: () => {
                        s.Z.addRelationship({
                          userId: t.id,
                          context: { location: f },
                          friendToken: I,
                        });
                      },
                    }),
                  ],
                });
      }
    },
    384816: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(666520),
        c = t(189156),
        r = t(706454),
        a = t(430824),
        d = t(914010),
        u = t(785717),
        _ = t(250822),
        I = t(771362),
        E = t(280885),
        f = t(819602),
        p = t(900927),
        Z = t(678738),
        h = t(652853),
        x = t(179828),
        m = t(228168),
        S = t(689938),
        T = t(11633);
      function v(e) {
        let {
            user: n,
            currentUser: t,
            displayProfile: v,
            subsection: g,
            onClose: A,
          } = e,
          { theme: O } = (0, h.z)(),
          { trackUserProfileAction: L } = (0, u.KZ)(),
          b = null == v ? void 0 : v.guildId,
          N = (0, i.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
          M = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
          C = (0, i.e7)([r.default], () => r.default.locale),
          R = (0, I.Z)(n.id),
          j = (0, _.Z)(n.id);
        return (0, o.jsxs)(s.ScrollerThin, {
          fade: !0,
          className: T.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, o.jsx)(E.Z, { userBio: v.bio, setLineClamp: !1 }),
            null != N &&
              (0, o.jsx)(x.Z, {
                user: n,
                currentUser: t,
                guild: N,
                scrollIntoView: g === m.Tb.ROLES,
              }),
            n.isProvisional && (0, o.jsx)(c.Z, { look: "profile_modal" }),
            (0, o.jsx)(Z.Z, {
              heading: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, o.jsx)(p.Z, {
                userId: n.id,
                guildId: null == v ? void 0 : v.guildId,
                tooltipDelay: m.vB,
              }),
            }),
            R.length > 0 &&
              (0, o.jsx)(Z.Z, {
                heading: S.Z.Messages.CONNECTIONS,
                scrollIntoView: g === m.Tb.CONNECTIONS,
                children: (0, o.jsx)(f.OA, {
                  connectedAccounts: R,
                  className: T.connections,
                  userId: n.id,
                  theme: O,
                  locale: C,
                }),
              }),
            j.length > 0 &&
              (0, o.jsx)(Z.Z, {
                heading: S.Z.Messages.APPS,
                children: j.map((e) =>
                  (0, o.jsx)(
                    f.tH,
                    {
                      className: T.appsConnections,
                      applicationRoleConnection: e,
                      locale: C,
                      onApplicationClicked: () => {
                        L({ action: "PRESS_APP_CONNECTION" }), A();
                      },
                      selectedGuildId: null != M ? M : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, o.jsx)(Z.Z, {
              heading: S.Z.Messages.NOTE,
              scrollIntoView: g === m.Tb.NOTE,
              children: (0, o.jsx)(l.Z, {
                userId: n.id,
                className: T.note,
                autoFocus: g === m.Tb.NOTE,
                onUpdate: () => L({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    179828: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(772848),
        l = t(924826),
        c = t(91192),
        r = t(442837),
        a = t(749210),
        d = t(434404),
        u = t(271383),
        _ = t(430824),
        I = t(496675),
        E = t(700785),
        f = t(785717),
        p = t(256226),
        Z = t(678738),
        h = t(314172),
        x = t(981631),
        m = t(689938),
        S = t(726769);
      function T(e) {
        let {
            user: n,
            currentUser: t,
            guild: r,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: _,
            onAddRole: I,
            onRemoveRole: f,
          } = e,
          Z = _ && null != a,
          T = i.useMemo(() => "roles-".concat((0, s.Z)()), []),
          v = (0, l.ZP)({
            id: T,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0,
          }),
          g = d.length,
          A =
            0 === g
              ? m.Z.Messages.ROLE_LIST_EMPTY
              : m.Z.Messages.ROLES_LIST.format({ numRoles: g }),
          O = d.map((e) => {
            var i;
            return (0, o.jsx)(
              p.Z,
              {
                role: e,
                guildId: r.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: _
                  ? E.r6(r, t.id, u, e)
                  : (null === (i = e.tags) || void 0 === i
                      ? void 0
                      : i.guild_connections) === null && n.id === t.id,
              },
              e.id,
            );
          });
        return (0, o.jsx)(c.bG, {
          navigator: v,
          children: (0, o.jsx)(c.SJ, {
            children: (e) => {
              let { ref: n, ...t } = e;
              return (0, o.jsxs)("div", {
                className: S.root,
                "aria-label": A,
                ref: n,
                ...t,
                children: [
                  O,
                  Z &&
                    (0, o.jsx)(h.Z, {
                      guild: r,
                      guildMember: a,
                      numRoles: g,
                      highestRole: u,
                      onAddRole: I,
                    }),
                ],
              });
            },
          }),
        });
      }
      function v(e) {
        let { user: n, currentUser: t, guild: s, scrollIntoView: l } = e,
          { trackUserProfileAction: c } = (0, f.KZ)(),
          p = (0, r.e7)([u.ZP], () => u.ZP.getMember(s.id, n.id)),
          h = (0, r.e7)([_.Z], () => _.Z.getRoles(s.id)),
          S = null == p ? void 0 : p.roles,
          v = i.useMemo(
            () =>
              null == S || 0 === S.length
                ? []
                : Object.values(h)
                    .filter((e) => S.includes(e.id))
                    .sort((e, n) => {
                      var t, o;
                      let i =
                          (null === (t = e.tags) || void 0 === t
                            ? void 0
                            : t.guild_connections) !== null,
                        s =
                          (null === (o = n.tags) || void 0 === o
                            ? void 0
                            : o.guild_connections) !== null;
                      return i && !s ? 1 : !i && s ? -1 : 0;
                    }),
            [h, S],
          ),
          g = E.e9(s, t.id),
          [A] = (0, r.Wu)([I.Z], () => [
            I.Z.can(x.Plq.MANAGE_ROLES, s),
            null != s ? I.Z.getGuildVersion(s.id) : null,
          ]),
          O = i.useCallback(
            (e) => {
              var t, o;
              c({ action: "REMOVE_ROLE" });
              let i =
                null !==
                  (o = null == S ? void 0 : S.filter((n) => n !== e.id)) &&
                void 0 !== o
                  ? o
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? a.Z.unassignGuildRoleConnection(s.id, e.id)
                : d.Z.updateMemberRoles(s.id, n.id, i, [], [e.id]);
            },
            [S, s.id, n.id, c],
          ),
          L = i.useCallback(
            (e) => {
              c({ action: "ADD_ROLE" });
              let t = null != S ? S : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(s.id, n.id, t, [e], []);
            },
            [S, s.id, n.id, c],
          ),
          b = A && null != p;
        return 0 !== v.length || b
          ? (0, o.jsx)(Z.Z, {
              heading: m.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, o.jsx)(T, {
                user: n,
                currentUser: t,
                guild: s,
                guildMember: p,
                roles: v,
                highestRole: g,
                canManageRoles: A,
                onAddRole: L,
                onRemoveRole: O,
              }),
            })
          : null;
      }
    },
    740628: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(442837),
        l = t(706898),
        c = t(481060),
        r = t(246946),
        a = t(785717),
        d = t(786366),
        u = t(323090),
        _ = t(296391),
        I = t(384816),
        E = t(389190),
        f = t(428927),
        p = t(228168),
        Z = t(689938),
        h = t(519294),
        x = t(722849);
      function m(e) {
        let {
          section: n,
          subsection: t,
          user: i,
          currentUser: s,
          displayProfile: l,
          onClose: c,
        } = e;
        return n === p.oh.ACTIVITY
          ? (0, o.jsx)(_.Z, { user: i, currentUser: s, onClose: c })
          : n === p.oh.MUTUAL_FRIENDS
            ? (0, o.jsx)(E.Z, { user: i, onClose: c })
            : n === p.oh.MUTUAL_GUILDS
              ? (0, o.jsx)(f.Z, { user: i, onClose: c })
              : n === p.oh.BOT_DATA_ACCESS
                ? (0, o.jsx)(d.Z, { user: i })
                : n === p.oh.BOT_INFO
                  ? (0, o.jsx)(u.Z, {
                      user: i,
                      currentUser: s,
                      displayProfile: l,
                      subsection: t,
                      onClose: c,
                    })
                  : (0, o.jsx)(I.Z, {
                      user: i,
                      currentUser: s,
                      displayProfile: l,
                      subsection: t,
                      onClose: c,
                    });
      }
      function S(e) {
        var n, t, d;
        let {
            user: u,
            currentUser: _,
            displayProfile: I,
            items: E,
            initialSection: f = p.oh.USER_INFO,
            initialSubsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: v } = (0, a.KZ)(),
          g = (0, s.e7)([r.Z], () => r.Z.hidePersonalInformation),
          [{ section: A, subsection: O }, L] = i.useState({
            section:
              null !==
                (d =
                  null ===
                    (n = E.find((e) => {
                      let { section: n } = e;
                      return n === f;
                    })) || void 0 === n
                    ? void 0
                    : n.section) && void 0 !== d
                ? d
                : null === (t = E[0]) || void 0 === t
                  ? void 0
                  : t.section,
            subsection: S,
          });
        i.useEffect(() => {
          if (null == E.find((e) => e.section === A))
            L({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let b = i.useCallback(
          (e) => {
            v({ action: "PRESS_SECTION", section: e }),
              L({ section: e, subsection: void 0 });
          },
          [v, L],
        );
        return g
          ? (0, o.jsx)("div", {
              className: x.container,
              children: (0, o.jsxs)("div", {
                className: h.empty,
                children: [
                  (0, o.jsx)("div", { className: h.emptyIconStreamerMode }),
                  (0, o.jsx)("div", {
                    className: h.emptyText,
                    children: Z.Z.Messages.STREAMER_MODE_ENABLED,
                  }),
                ],
              }),
            })
          : (0, o.jsxs)("div", {
              className: x.container,
              children: [
                (0, o.jsx)(l.n, {
                  className: x.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: b,
                  children: E.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, o.jsx)(
                      l.n.Item,
                      {
                        className: x.tabBarItem,
                        id: n,
                        "aria-label": t,
                        children: (0, o.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: t,
                        }),
                      },
                      n,
                    );
                  }),
                }),
                (0, o.jsx)(m, {
                  items: E,
                  section: A,
                  subsection: O,
                  user: u,
                  currentUser: _,
                  displayProfile: I,
                  onClose: T,
                }),
              ],
            });
      }
    },
    533835: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Z;
          },
        }),
        t(47120);
      var o = t(735250),
        i = t(470079),
        s = t(512722),
        l = t.n(s),
        c = t(442837),
        r = t(100527),
        a = t(699516),
        d = t(594174),
        u = t(971393),
        _ = t(787018),
        I = t(752342),
        E = t(886794),
        f = t(910364);
      let p = [r.Z.BITE_SIZE_PROFILE_POPOUT, r.Z.PROFILE_PANEL];
      function Z(e) {
        let { user: n, ...t } = e,
          s = (0, c.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != s,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let r = (0, c.e7)([a.Z], () => a.Z.isBlocked(n.id)),
          [Z, h] = i.useState(r),
          x = (0, u.sS)({ location: "UserProfileModalWrapper" });
        i.useEffect(() => {
          h(r);
        }, [r]);
        let m = !p.some((e) => {
          var n;
          return (
            null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return Z && x && m
          ? (0, o.jsx)(_.Z, {
              user: n,
              currentUser: s,
              onViewBlockedProfileClick: () => h(!1),
              ...t,
            })
          : n.isNonUserBot()
            ? (0, o.jsx)(E.Z, { ...t, user: n, currentUser: s })
            : n.bot
              ? (0, o.jsx)(I.Z, { ...t, user: n, currentUser: s })
              : (0, o.jsx)(f.Z, { ...t, user: n, currentUser: s });
      }
    },
    398145: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(627341);
      var o = t(278074),
        i = t(200634),
        s = t(228168),
        l = t(689938);
      function c(e) {
        var n;
        let t =
          null === (n = (0, i.Z)(e.id, !0).mutualGuilds) || void 0 === n
            ? void 0
            : n.length;
        return [
          { section: s.oh.BOT_INFO, text: l.Z.Messages.USER_PROFILE_ABOUT_ME },
          {
            section: s.oh.MUTUAL_GUILDS,
            text: (0, o.EQ)(t)
              .with(
                void 0,
                () => l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
              )
              .with(0, () => l.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
              .otherwise((e) =>
                l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }),
              ),
          },
          {
            section: s.oh.BOT_DATA_ACCESS,
            text: l.Z.Messages.BOTS_DATA_ACCESS_TAB,
          },
        ];
      }
    },
    643518: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(653041);
      var o = t(697927),
        i = t(200634),
        s = t(369566),
        l = t(326094),
        c = t(708108),
        r = t(146078),
        a = t(228168),
        d = t(981631),
        u = t(689938);
      function _(e) {
        var n, t;
        let { user: _, currentUser: I } = e,
          { live: E, recent: f, stream: p } = (0, s.Z)(_.id),
          Z =
            null ===
              (n = (0, o.Z)(
                _.id,
                _.id !== (null == I ? void 0 : I.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          h =
            null ===
              (t = (0, i.Z)(
                _.id,
                _.id !== (null == I ? void 0 : I.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          x = (0, l.Z)({
            user: _,
            currentUser: I,
            location: d.Sbl.PROFILE_MODAL_TABS,
          }),
          m = [
            {
              section: a.oh.USER_INFO,
              text: u.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (E.length > 0 || f.length > 0 || null != p) &&
            m.push({
              section: a.oh.ACTIVITY,
              text: u.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          _.id !== (null == I ? void 0 : I.id) &&
            x &&
            (m.push({ section: a.oh.MUTUAL_FRIENDS, text: (0, c.Z)(Z) }),
            m.push({ section: a.oh.MUTUAL_GUILDS, text: (0, r.Z)(h) })),
          m
        );
      }
    },
    605258: function (e, n, t) {
      e.exports = { textarea: "textarea_dde0a8 " + t("803636").inputDefault };
    },
    473522: function (e, n, t) {
      e.exports = {
        connectedAccountVanityMetadata: "connectedAccountVanityMetadata_a1f026",
        connectedAccountVanityMetadataTag:
          "connectedAccountVanityMetadataTag_a1f026",
        connectedAccountVanityMetadataItem:
          "connectedAccountVanityMetadataItem_a1f026",
        connectedAccountVanityMetadataItemIcon:
          "connectedAccountVanityMetadataItemIcon_a1f026",
        paypalVerifiedTag: "paypalVerifiedTag_a1f026",
      };
    },
    494399: function (e, n, t) {
      e.exports = {
        container: "container_c64476",
        contentTitle: "contentTitle_c64476",
        additionalParticipantBadge: "additionalParticipantBadge_c64476",
        openOnHover: "openOnHover_c64476",
        selected: "selected_c64476",
        infoSection: "infoSection_c64476",
        userSection: "userSection_c64476",
        userName: "userName_c64476",
        facePile: "facePile_c64476",
        facePileItem: "facePileItem_c64476",
        additionalParticipantBadgeText: "additionalParticipantBadgeText_c64476",
        thumbnail: "thumbnail_c64476",
      };
    },
    962586: function (e, n, t) {
      e.exports = {
        connectedAccounts: "connectedAccounts_ab12c6",
        connectedAccountsColumn: "connectedAccountsColumn_ab12c6",
        connectedAccountContainer: "connectedAccountContainer_ab12c6",
        connectedAccountContainerWithMetadata:
          "connectedAccountContainerWithMetadata_ab12c6",
        connectedAccount: "connectedAccount_ab12c6",
        connectedAccountChildren: "connectedAccountChildren_ab12c6",
        connectedAccountChildrenNoIcon: "connectedAccountChildrenNoIcon_ab12c6",
        connectedAccountPoweredBy: "connectedAccountPoweredBy_ab12c6",
        connectedAccountPoweredByText: "connectedAccountPoweredByText_ab12c6",
        connectedAccountIcon: "connectedAccountIcon_ab12c6",
        connectedAccountNameContainer: "connectedAccountNameContainer_ab12c6",
        connectedAccountNameContainerClickable:
          "connectedAccountNameContainerClickable_ab12c6",
        connectedAccountName: "connectedAccountName_ab12c6",
        connectedAccountNameTextContainer:
          "connectedAccountNameTextContainer_ab12c6",
        connectedAccountNameText: "connectedAccountNameText_ab12c6",
        connectedAccountVerifiedIcon: "connectedAccountVerifiedIcon_ab12c6",
        connectedAccountHideIcon: "connectedAccountHideIcon_ab12c6",
        connectedAccountOpenIcon: "connectedAccountOpenIcon_ab12c6",
      };
    },
    45844: function (e, n, t) {
      e.exports = {
        memberSinceWrapper: "memberSinceWrapper_b06bc5",
        memberSince: "memberSince_b06bc5",
        discordIcon: "discordIcon_b06bc5",
        divider: "divider_b06bc5",
      };
    },
    226691: function (e, n, t) {
      e.exports = {
        root: "root_fb9b39",
        previewForCollected: "previewForCollected_fb9b39 preview_fb9b39",
        container: "container_fb9b39",
        header: "header_fb9b39",
        body: "body_fb9b39",
        centeredButton: "centeredButton_fb9b39",
        safetyTable: "safetyTable_fb9b39",
      };
    },
    834585: function (e, n, t) {
      e.exports = {
        scroller: "scroller_bbc4ce",
        row: "row_bbc4ce",
        rowIcon: "rowIcon_bbc4ce",
        rowText: "rowText_bbc4ce",
      };
    },
    272216: function (e, n, t) {
      e.exports = {
        root: "root_b9fccc",
        headerInner: "headerInner_b9fccc",
        headerButtons: "headerButtons_b9fccc",
        messageTextButton: "messageTextButton_b9fccc",
        messageIconButton: "messageIconButton_b9fccc",
        body: "body_b9fccc",
        overlay: "overlay_b9fccc",
        friendRequestBannerOverlay: "friendRequestBannerOverlay_b9fccc",
        friendRequestBanner: "friendRequestBanner_b9fccc",
        backdrop: "backdrop_b9fccc",
        toast: "toast_b9fccc",
      };
    },
    505865: function (e, n, t) {
      e.exports = { scroller: "scroller_c0721c" };
    },
    266580: function (e, n, t) {
      e.exports = { multipleButtons: "multipleButtons_e9f973" };
    },
    11633: function (e, n, t) {
      e.exports = {
        scroller: "scroller_d53fbd",
        connections: "connections_d53fbd",
        appsConnections: "appsConnections_d53fbd",
        note: "note_d53fbd",
      };
    },
    519294: function (e, n, t) {
      e.exports = {
        listRow: "listRow_d2d6cb",
        listRowContent: "listRowContent_d2d6cb",
        listName: "listName_d2d6cb",
        listAvatar: "listAvatar_d2d6cb",
        listDiscriminator: "listDiscriminator_d2d6cb",
        empty: "empty_d2d6cb",
        emptyText: "emptyText_d2d6cb",
        listScroller: "listScroller_d2d6cb",
        emptyIconFriends: "emptyIconFriends_d2d6cb emptyIcon_d2d6cb",
        emptyIconGuilds: "emptyIconGuilds_d2d6cb emptyIcon_d2d6cb",
        emptyIconStreamerMode: "emptyIconStreamerMode_d2d6cb emptyIcon_d2d6cb",
      };
    },
    726769: function (e, n, t) {
      e.exports = { root: "root_d1ae73" };
    },
    581958: function (e, n, t) {
      e.exports = {
        guildAvatar: "guildAvatar_c5a773",
        guildAvatarWithoutIcon: "guildAvatarWithoutIcon_c5a773",
        guildNick: "guildNick_c5a773",
      };
    },
    722849: function (e, n, t) {
      e.exports = {
        container: "container_ecc04c",
        tabBar: "tabBar_ecc04c",
        tabBarItem: "tabBarItem_ecc04c",
      };
    },
    865244: function (e, n, t) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=c03ee01981b82ed7b313.js.map
