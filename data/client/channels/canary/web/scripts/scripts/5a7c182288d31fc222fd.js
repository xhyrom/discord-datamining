"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86473"],
  {
    161068: function (e) {
      e.exports = "/assets/ef0320755a461d5998ff.svg";
    },
    545505: function (e) {
      e.exports = "/assets/691c0b9237eebf2df1e5.svg";
    },
    184269: function (e) {
      e.exports = "/assets/18433a47992348f39c32.svg";
    },
    769928: function (e) {
      e.exports = "/assets/5a539d8a63649052172a.svg";
    },
    12e3: function (e) {
      e.exports = "/assets/dba60598ea89725ccc0b.svg";
    },
    98021: function (e) {
      e.exports = "/assets/3e6e1d634be03ec9a5c4.svg";
    },
    661745: function (e) {
      e.exports = "/assets/d471416be79dc0e5b746.svg";
    },
    34854: function (e, n, s) {
      var t = s(544891),
        i = s(981631);
      n.Z = {
        updateNote(e, n) {
          t.tn.put({
            url: i.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
          });
        },
      };
    },
    666520: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return x;
        },
      }),
        s(47120);
      var t,
        i = s(735250),
        o = s(470079),
        l = s(699581),
        r = s(442837),
        c = s(481060),
        a = s(34854),
        d = s(531301),
        u = s(246946),
        I = s(981631),
        _ = s(689938),
        E = s(605258);
      function f(e, n, s) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = s),
          e
        );
      }
      class m extends (t = o.PureComponent) {
        componentDidMount() {
          if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e &&
              null != e.selectionStart &&
              (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
          }
        }
        render() {
          let { className: e, loading: n, note: s, hideNote: t } = this.props;
          return t
            ? null
            : (0, i.jsx)("div", {
                className: e,
                children: (0, i.jsx)(c.TextAreaAutosize, {
                  ref: this.noteRef,
                  className: E.textarea,
                  disabled: n,
                  placeholder: n
                    ? _.Z.Messages.LOADING_NOTE
                    : _.Z.Messages.NOTE_PLACEHOLDER,
                  "aria-label": _.Z.Messages.NOTE,
                  onBlur: this.handleBlur,
                  onKeyPress: this.handleKeyPress,
                  defaultValue: null != s ? s : void 0,
                  maxLength: I.vuo,
                }),
              });
        }
        constructor(...e) {
          super(...e),
            f(this, "noteRef", o.createRef()),
            f(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: s, userId: t, onUpdate: i } = this.props;
              if ((null != s ? s : "") !== n)
                null == i || i(), a.Z.updateNote(t, n);
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
              } else e.which === I.yXg.SPACE && e.stopPropagation();
            });
        }
      }
      function x(e) {
        let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
          s = (0, d.Z)(e.userId);
        return (0, i.jsx)(m, { ...e, ...s, hideNote: n });
      }
      f(m, "defaultProps", { autoFocus: !1 });
    },
    860719: function (e, n, s) {
      s.d(n, {
        w: function () {
          return i;
        },
      }),
        s(789020);
      var t = s(85025);
      function i(e) {
        let { flags: n } = e,
          s = (0, t.O)(n),
          i =
            null != s &&
            ((null == s ? void 0 : s.messageContent) ||
              (null == s ? void 0 : s.messageContentLimited)),
          o =
            null != s &&
            ((null == s ? void 0 : s.guildPresences) ||
              (null == s ? void 0 : s.guildPresencesLimited)),
          l =
            null != s &&
            ((null == s ? void 0 : s.guildMembers) ||
              (null == s ? void 0 : s.guildMembersLimited));
        return {
          hasMessageContent: i,
          hasGuildPresences: o,
          hasGuildMembers: l,
          hasIntents: i || o || l,
        };
      }
    },
    85025: function (e, n, s) {
      s.d(n, {
        O: function () {
          return o;
        },
      });
      var t = s(630388),
        i = s(981631);
      function o(e) {
        if (null != e)
          return {
            guildPresences: (0, t.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, t.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, t.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, t.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, t.yE)(
              e,
              i.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, t.yE)(
              e,
              i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    250822: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = s(470079),
        i = s(442837),
        o = s(621853);
      let l = [];
      function r(e) {
        let n = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e));
        return (0, t.useMemo)(
          () =>
            (null == n ? void 0 : n.applicationRoleConnections) == null
              ? l
              : n.applicationRoleConnections,
          [null == n ? void 0 : n.applicationRoleConnections],
        );
      }
    },
    771362: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = s(470079),
        i = s(442837),
        o = s(726542),
        l = s(122021),
        r = s(621853);
      let c = [];
      function a(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          s = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
        return (0, t.useMemo)(
          () =>
            (null == s ? void 0 : s.connectedAccounts) == null
              ? c
              : s.connectedAccounts.filter((e) => {
                  let { type: s } = e,
                    t = o.Z.get(s);
                  return null != t && n(t);
                }),
          [null == s ? void 0 : s.connectedAccounts, n],
        );
      }
    },
    900927: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(399606),
        o = s(481060),
        l = s(275759),
        r = s(565138),
        c = s(706454),
        a = s(271383),
        d = s(430824),
        u = s(709054),
        I = s(689938),
        _ = s(45844);
      function E(e) {
        let { userId: n, guildId: s, textClassName: E, tooltipDelay: f } = e,
          m = (0, i.e7)([c.default], () => c.default.locale),
          x = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
          Z = (0, i.e7)([a.ZP], () =>
            null != s ? a.ZP.getMember(s, n) : null,
          ),
          p = (0, l.FI)(u.default.extractTimestamp(n), m),
          h = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, m);
        return null == x || null == Z
          ? (0, t.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: E,
              children: p,
            })
          : (0, t.jsxs)("div", {
              className: _.memberSinceWrapper,
              children: [
                (0, t.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, t.jsx)(o.Tooltip, {
                      text: I.Z.Messages.DISCORD_NAME,
                      delay: f,
                      children: (e) =>
                        (0, t.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: _.discordIcon,
                        }),
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: E,
                      children: p,
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: _.divider }),
                (0, t.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, t.jsx)(o.Tooltip, {
                      text: x.name,
                      delay: f,
                      children: (e) =>
                        (0, t.jsx)(r.Z, {
                          ...e,
                          guild: x,
                          size: r.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: E,
                      children: h,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    934861: function (e, n, s) {
      s.d(n, {
        c: function () {
          return c;
        },
        v: function () {
          return a;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(493683),
        l = s(475413),
        r = s(689938);
      function c(e) {
        let { userId: n, onClose: s, ...c } = e;
        return (0, t.jsx)(l.tG, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          text: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
          },
          ...c,
        });
      }
      function a(e) {
        let { userId: n, onClose: s, ...c } = e;
        return (0, t.jsx)(l.ef, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
          },
          ...c,
        });
      }
    },
    787018: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return h;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(481060),
        l = s(100527),
        r = s(906732),
        c = s(138201),
        a = s(785717),
        d = s(221292),
        u = s(687158),
        I = s(471879),
        _ = s(502762),
        E = s(475413),
        f = s(228168),
        m = s(981631),
        x = s(689938),
        Z = s(226691),
        p = s(161068);
      function h(e) {
        let {
            user: n,
            guildId: s,
            channelId: h,
            messageId: v,
            roleId: S,
            transitionState: T,
            onViewBlockedProfileClick: g,
            showGuildProfile: A = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          j = s === m.ME ? void 0 : s,
          { analyticsLocations: b } = (0, r.ZP)([
            ...N,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          L = (0, a.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: j,
            channelId: h,
            messageId: v,
            roleId: S,
            showGuildProfile: A,
          }),
          M = [
            {
              icon: o.BellSlashIcon,
              description:
                x.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED,
            },
            {
              icon: o.DenyIcon,
              description:
                x.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED,
            },
          ],
          O = (0, u.ZP)(n.id, A ? j : void 0),
          R = i.createRef();
        return (0, t.jsx)(r.Gt, {
          value: b,
          children: (0, t.jsx)(a.Mt, {
            value: L,
            children: (0, t.jsx)(o.ModalRoot, {
              transitionState: T,
              className: Z.root,
              hideShadow: !0,
              "aria-label": x.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsx)(_.Z, {
                user: n,
                displayProfile: O,
                profileType: f.y0.FULL_SIZE,
                ref: R,
                children: (0, t.jsxs)("div", {
                  className: Z.container,
                  children: [
                    (0, t.jsx)("img", {
                      alt: "",
                      src: p,
                      className: Z.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, t.jsxs)("div", {
                      className: Z.body,
                      children: [
                        (0, t.jsx)(I.Z, { user: n, guildId: j }),
                        (0, t.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          className: Z.header,
                          children:
                            x.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            x.Z.Messages
                              .USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION,
                        }),
                        (0, t.jsx)("div", {
                          className: Z.safetyTable,
                          children: M.map((e, n) => {
                            let { icon: s, description: i } = e;
                            return (0, t.jsx)(
                              c.Z,
                              {
                                icon: s,
                                title: i,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, t.jsx)(E.tG, {
                          className: Z.centeredButton,
                          action: "VIEW_BLOCKED_PROFILE",
                          text: x.Z.Messages.VIEW_PROFILE,
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == g || g(),
                              (0, d.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: b,
                                ...L,
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
    752342: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return b;
        },
      }),
        s(47120);
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(100527),
        l = s(906732),
        r = s(5192),
        c = s(785717),
        a = s(687158),
        d = s(899007),
        u = s(648052),
        I = s(867176),
        _ = s(438163),
        E = s(681837),
        f = s(502762),
        m = s(530),
        x = s(303674),
        Z = s(952124),
        p = s(53558),
        h = s(544989),
        v = s(934861),
        S = s(740628),
        T = s(398145),
        g = s(228168),
        A = s(981631),
        N = s(689938),
        j = s(272216);
      function b(e) {
        let {
            user: n,
            currentUser: s,
            guildId: b,
            channelId: L,
            messageId: M,
            roleId: O,
            sessionId: R,
            initialSection: C,
            initialSubsection: P,
            transitionState: y,
            onClose: U,
            sourceAnalyticsLocations: D = [],
          } = e,
          B = b === A.ME ? void 0 : b,
          F = (0, a.ZP)(n.id, B),
          { analyticsLocations: G } = (0, l.ZP)([
            ...D,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          w = (0, c.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: B,
            channelId: L,
            messageId: M,
            roleId: O,
          }),
          k = (0, T.Z)(n);
        return (0, t.jsx)(l.Gt, {
          value: G,
          children: (0, t.jsx)(c.Mt, {
            value: w,
            children: (0, t.jsx)(i.ModalRoot, {
              transitionState: y,
              className: j.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsxs)(f.Z, {
                user: n,
                displayProfile: F,
                profileType: g.y0.FULL_SIZE,
                children: [
                  (0, t.jsx)(h.Z, {
                    profileType: g.y0.FULL_SIZE,
                    children: (0, t.jsx)(Z.Z, { user: n, guildId: B }),
                  }),
                  (0, t.jsxs)("header", {
                    children: [
                      (0, t.jsx)(I.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: g.y0.FULL_SIZE,
                      }),
                      (0, t.jsxs)("div", {
                        className: j.headerInner,
                        children: [
                          (0, t.jsx)(d.Z, {
                            user: n,
                            displayProfile: F,
                            guildId: B,
                            channelId: L,
                            profileType: g.y0.FULL_SIZE,
                          }),
                          (0, t.jsx)(_.Z, {
                            user: n,
                            profileType: g.y0.FULL_SIZE,
                            hasEntered: y === i.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, t.jsxs)("div", {
                            className: j.headerButtons,
                            children: [
                              (0, t.jsx)(v.c, {
                                userId: n.id,
                                onClose: U,
                                className: j.messageTextButton,
                              }),
                              (0, t.jsx)(v.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: j.messageIconButton,
                              }),
                              (0, t.jsx)(p.Z, { user: n, guildId: B }),
                              (0, t.jsx)(x.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: j.body,
                    children: [
                      (0, t.jsx)(m.Z, {
                        user: n,
                        profileType: g.y0.FULL_SIZE,
                        nickname: r.ZP.getName(B, L, n),
                        pronouns: null == F ? void 0 : F.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, t.jsx)(E.Z, { userId: n.id }),
                        tags: (0, t.jsx)(u.Z, {
                          displayProfile: F,
                          profileType: g.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, t.jsx)(f.Z.Overlay, {
                        className: j.overlay,
                        children: (0, t.jsx)(S.Z, {
                          user: n,
                          currentUser: s,
                          displayProfile: F,
                          items: k,
                          initialSection: null != C ? C : g.oh.BOT_INFO,
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
    786366: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return I;
        },
      }),
        s(789020);
      var t = s(735250);
      s(470079);
      var i = s(597312),
        o = s(442837),
        l = s(481060),
        r = s(860719),
        c = s(621853),
        a = s(689938),
        d = s(834585);
      function u(e) {
        let { icon: n, title: s, description: i } = e;
        return (0, t.jsxs)("div", {
          className: d.row,
          children: [
            (0, t.jsx)("div", {
              className: d.rowIcon,
              children: (0, t.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
              }),
            }),
            (0, t.jsxs)("div", {
              className: d.rowText,
              children: [
                (0, t.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  children: s,
                }),
                (0, t.jsx)(l.Text, { variant: "text-sm/normal", children: i }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let { user: n } = e,
          s = (0, o.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: I,
            hasGuildPresences: _,
            hasGuildMembers: E,
          } = (0, r.w)({ flags: null == s ? void 0 : s.flags });
        return (0, t.jsxs)(i.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            I &&
              (0, t.jsx)(u, {
                icon: l.ChatIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            _ &&
              (0, t.jsx)(u, {
                icon: l.GameControllerIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            E &&
              (0, t.jsx)(u, {
                icon: l.GroupIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, t.jsx)(l.Text, {
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
    323090: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return h;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        l = s(666520),
        r = s(592125),
        c = s(430824),
        a = s(944486),
        d = s(785717),
        u = s(621853),
        I = s(172351),
        _ = s(280885),
        E = s(900927),
        f = s(678738),
        m = s(179828),
        x = s(228168),
        Z = s(689938),
        p = s(11633);
      function h(e) {
        var n;
        let {
            user: s,
            currentUser: h,
            displayProfile: v,
            subsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: g } = (0, d.KZ)(),
          A = (0, i.e7)([c.Z], () =>
            (null == v ? void 0 : v.guildId) != null
              ? c.Z.getGuild(v.guildId)
              : null,
          ),
          N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          j = (0, i.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: p.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, t.jsx)(_.Z, { userBio: v.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != j &&
              (0, t.jsx)(I.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: j,
                guildId:
                  null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: T,
              }),
            null != A &&
              (0, t.jsx)(m.Z, {
                user: s,
                currentUser: h,
                guild: A,
                scrollIntoView: S === x.Tb.ROLES,
              }),
            (0, t.jsx)(f.Z, {
              heading: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, t.jsx)(E.Z, {
                userId: s.id,
                guildId: null == v ? void 0 : v.guildId,
                tooltipDelay: x.vB,
              }),
            }),
            (0, t.jsx)(f.Z, {
              heading: Z.Z.Messages.NOTE,
              scrollIntoView: S === x.Tb.NOTE,
              children: (0, t.jsx)(l.Z, {
                userId: s.id,
                className: p.note,
                autoFocus: S === x.Tb.NOTE,
                onUpdate: () => g({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    886794: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return L;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(481060),
        l = s(727637),
        r = s(100527),
        c = s(906732),
        a = s(680295),
        d = s(5192),
        u = s(785717),
        I = s(687158),
        _ = s(899007),
        E = s(648052),
        f = s(867176),
        m = s(280885),
        x = s(900927),
        Z = s(678738),
        p = s(502762),
        h = s(530),
        v = s(679332),
        S = s(544989),
        T = s(228168),
        g = s(981631),
        A = s(689938),
        N = s(272216),
        j = s(11633),
        b = s(722849);
      function L(e) {
        let {
            user: n,
            guildId: s,
            channelId: L,
            messageId: M,
            roleId: O,
            sessionId: R,
            transitionState: C,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = s === g.ME ? void 0 : s,
          D = (0, I.ZP)(n.id, U),
          { analyticsLocations: B } = (0, c.ZP)([
            ...y,
            r.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          F = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: U,
            channelId: L,
            messageId: M,
            roleId: O,
          }),
          G = i.createRef(),
          w = (0, l.Z)(G);
        return (0, t.jsx)(c.Gt, {
          value: B,
          children: (0, t.jsx)(u.Mt, {
            value: F,
            children: (0, t.jsxs)(o.ModalRoot, {
              transitionState: C,
              className: N.root,
              hideShadow: !0,
              "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, t.jsxs)(p.Z, {
                  user: n,
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  ref: G,
                  children: [
                    (0, t.jsx)(S.Z, {
                      profileType: T.y0.FULL_SIZE,
                      children: (0, t.jsx)(v.Z, { user: n }),
                    }),
                    (0, t.jsxs)("header", {
                      children: [
                        (0, t.jsx)(f.Z, {
                          user: n,
                          displayProfile: D,
                          profileType: T.y0.FULL_SIZE,
                        }),
                        (0, t.jsx)("div", {
                          className: N.headerInner,
                          children: (0, t.jsx)(_.Z, {
                            user: n,
                            displayProfile: D,
                            guildId: U,
                            channelId: L,
                            profileType: T.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, t.jsx)(h.Z, {
                          user: n,
                          profileType: T.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, L, n),
                          pronouns: null == D ? void 0 : D.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, t.jsx)(E.Z, {
                            displayProfile: D,
                            profileType: T.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, t.jsx)(p.Z.Overlay, {
                          className: N.overlay,
                          children: (0, t.jsxs)("div", {
                            className: b.container,
                            children: [
                              (0, t.jsx)(o.TabBar, {
                                className: b.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: g.dG4,
                                children: (0, t.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: b.tabBarItem,
                                    id: T.oh.BOT_INFO,
                                    "aria-label":
                                      A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    children: (0, t.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children:
                                        A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    }),
                                  },
                                  T.oh.BOT_INFO,
                                ),
                              }),
                              (0, t.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: j.scroller,
                                children: [
                                  (0, t.jsx)(m.Z, {
                                    userId: n.id,
                                    userBio: null == D ? void 0 : D.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, t.jsx)(Z.Z, {
                                    heading:
                                      A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, t.jsx)(x.Z, {
                                      userId: n.id,
                                      guildId: U,
                                      tooltipDelay: T.vB,
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
                (null == D ? void 0 : D.profileEffectId) != null &&
                  (0, t.jsx)(a.Z, {
                    profileEffectId: null == D ? void 0 : D.profileEffectId,
                    isHovering: w,
                  }),
              ],
            }),
          }),
        });
      }
    },
    910364: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return D;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(526629),
        l = s(442837),
        r = s(481060),
        c = s(727637),
        a = s(58540),
        d = s(100527),
        u = s(906732),
        I = s(680295),
        _ = s(699516),
        E = s(5192),
        f = s(785717),
        m = s(221292),
        x = s(687158),
        Z = s(326094),
        p = s(510659),
        h = s(113557),
        v = s(867176),
        S = s(169979),
        T = s(119096),
        g = s(502762),
        A = s(544989),
        N = s(705556),
        j = s(481932),
        b = s(195387),
        L = s(272510),
        M = s(171368),
        O = s(62154),
        R = s(412317),
        C = s(228168),
        P = s(981631),
        y = s(689938),
        U = s(272216);
      function D(e) {
        let {
            user: n,
            currentUser: s,
            guildId: D,
            channelId: B,
            messageId: F,
            roleId: G,
            sessionId: w,
            friendToken: k,
            initialSection: V,
            initialSubsection: W,
            transitionState: Y,
            onClose: K,
            showGuildProfile: z = !0,
            sourceAnalyticsLocations: H = [],
          } = e,
          q = D === P.ME ? void 0 : D,
          { analyticsLocations: Q } = (0, u.ZP)([
            ...H,
            d.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          X = (0, Z.Z)({
            user: n,
            currentUser: s,
            location: P.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          J = (0, f.ZB)({
            layout: X
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: w,
            guildId: q,
            channelId: B,
            messageId: F,
            roleId: G,
            showGuildProfile: z,
          }),
          $ = (0, p.$m)(),
          ee = (0, r.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 },
          }),
          en = (0, x.ZP)(n.id, z ? q : void 0),
          es = (0, x.ZP)(n.id, q),
          et = (0, l.e7)([_.Z], () => _.Z.getRelationshipType(n.id)),
          ei = i.useMemo(() => (null != q ? { [q]: [n.id] } : {}), [q, n.id]);
        (0, a.$)(ei);
        let eo = i.createRef(),
          el = (0, c.Z)(eo),
          er = () =>
            (null == es ? void 0 : es.guildId) == null
              ? null
              : (null == en ? void 0 : en.guildId) != null
                ? (0, t.jsx)(r.MenuItem, {
                    id: "view-main-profile",
                    label: y.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: E.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      K(),
                        (0, M.openUserProfileModal)({
                          ...J,
                          showGuildProfile: !1,
                          friendToken: k,
                          sourceAnalyticsLocations: H,
                        }),
                        (0, m.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: Q,
                          ...J,
                        });
                    },
                  })
                : (0, t.jsx)(r.MenuItem, {
                    id: "view-server-profile",
                    label: y.Z.Messages.VIEW_SERVER_PROFILE,
                    subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: E.ZP.getName(q, B, n),
                    }),
                    action: () => {
                      K(),
                        (0, M.openUserProfileModal)({
                          ...J,
                          showGuildProfile: !0,
                          friendToken: k,
                          sourceAnalyticsLocations: H,
                        }),
                        (0, m.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: Q,
                          ...J,
                        });
                    },
                  });
        return (0, t.jsx)(u.Gt, {
          value: Q,
          children: (0, t.jsx)(f.Mt, {
            value: J,
            children: (0, t.jsx)(p.NJ, {
              value: $,
              children: (0, t.jsxs)(r.ModalRoot, {
                transitionState: Y,
                className: U.root,
                hideShadow: !0,
                "aria-label": y.Z.Messages.USER_PROFILE_MODAL,
                children: [
                  (0, t.jsxs)(g.Z, {
                    user: n,
                    displayProfile: en,
                    profileType: C.y0.FULL_SIZE,
                    ref: eo,
                    children: [
                      (0, t.jsxs)(A.Z, {
                        profileType: C.y0.FULL_SIZE,
                        children: [
                          (0, t.jsx)(b.Z, {
                            user: n,
                            guildId: q,
                            channelId: B,
                            onClose: K,
                          }),
                          (0, t.jsx)(j.Z, {
                            profileType: C.y0.FULL_SIZE,
                            user: n,
                            friendToken: k,
                          }),
                          (0, t.jsx)(L.Z, {
                            user: n,
                            guildId: q,
                            viewProfileItem: er(),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("header", {
                        children: [
                          (0, t.jsx)(v.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: C.y0.FULL_SIZE,
                          }),
                          (0, t.jsx)(T.Z, {
                            userId: n.id,
                            onClose: K,
                            className: U.toast,
                          }),
                          null != $.interactionType &&
                            (0, t.jsx)(o.animated.div, {
                              style: ee,
                              className: U.backdrop,
                            }),
                          (0, t.jsxs)("div", {
                            className: U.headerInner,
                            children: [
                              (0, t.jsx)(h.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: en,
                                guildId: q,
                                channelId: B,
                                profileType: C.y0.FULL_SIZE,
                              }),
                              (0, t.jsx)(S.Z, {
                                location: "SimplifiedUserProfileModal",
                                user: n,
                                displayProfile: en,
                                guildId: q,
                                channelId: B,
                                profileType: C.y0.FULL_SIZE,
                                hasEntered:
                                  Y === r.ModalTransitionState.ENTERED,
                                onCloseProfile: K,
                              }),
                              (0, t.jsxs)("div", {
                                className: U.headerButtons,
                                children: [
                                  (0, t.jsx)(R.Z, {
                                    user: n,
                                    isCurrentUser: n.id === s.id,
                                    relationshipType: et,
                                    friendToken: k,
                                    onClose: K,
                                  }),
                                  (0, t.jsx)(N.Z, {
                                    user: n,
                                    guildId: q,
                                    onClose: K,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(O.Z, {
                        user: n,
                        currentUser: s,
                        channelId: B,
                        displayProfile: en,
                        initialSection: V,
                        initialSubsection: W,
                        friendToken: k,
                        onClose: K,
                      }),
                    ],
                  }),
                  (null == en ? void 0 : en.profileEffectId) != null &&
                    (0, t.jsx)(I.Z, {
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
    296391: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return Z;
        },
      });
      var t = s(735250),
        i = s(470079),
        o = s(704215),
        l = s(481060),
        r = s(605236),
        c = s(63063),
        a = s(369566),
        d = s(678738),
        u = s(151545),
        I = s(527790),
        _ = s(304042),
        E = s(981631),
        f = s(921944),
        m = s(689938),
        x = s(505865);
      function Z(e) {
        let { user: n, currentUser: s, onClose: Z } = e,
          { live: p, recent: h, stream: v } = (0, a.Z)(n.id),
          S = n.id === s.id,
          T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          i.useEffect(() => {
            if (!!S && !T)
              (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: f.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [S, T]),
          (0, t.jsxs)(l.ScrollerThin, {
            className: x.scroller,
            fade: !0,
            children: [
              (0, t.jsxs)(d.Z, {
                children: [
                  null != v &&
                    (0, t.jsx)(_.Z, {
                      user: n,
                      currentUser: s,
                      stream: v,
                      onClose: Z,
                    }),
                  p.map((e, i) =>
                    (0, t.jsx)(
                      u.Z,
                      { user: n, currentUser: s, activity: e, onClose: Z },
                      "live-".concat(i),
                    ),
                  ),
                ],
              }),
              (0, t.jsx)(d.Z, {
                heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                subheading: S
                  ? m.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                      learnMoreHook: (e, n) =>
                        (0, t.jsx)(
                          l.Anchor,
                          {
                            href: c.Z.getArticleURL(
                              E.BhN.ACTIVITY_STATUS_SETTINGS,
                            ),
                            children: e,
                          },
                          n,
                        ),
                    })
                  : null,
                children: h.map((e) =>
                  (0, t.jsx)(I.Z, { user: n, entry: e, onClose: Z }, e.id),
                ),
              }),
            ],
          })
        );
      }
    },
    62154: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return Z;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(979264),
        l = s(699516),
        r = s(5192),
        c = s(648052),
        a = s(681837),
        d = s(91433),
        u = s(502762),
        I = s(530),
        _ = s(740628),
        E = s(643518),
        f = s(228168),
        m = s(981631),
        x = s(272216);
      function Z(e) {
        var n;
        let {
            user: s,
            currentUser: Z,
            channelId: p,
            displayProfile: h,
            initialSection: v,
            initialSubsection: S,
            friendToken: T,
            onClose: g,
          } = e,
          A = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(s.id)),
          N = (0, E.Z)({ user: s, currentUser: Z });
        return (0, t.jsxs)("div", {
          className: x.body,
          children: [
            (0, t.jsx)(I.Z, {
              user: s,
              profileType: f.y0.FULL_SIZE,
              nickname: r.ZP.getName(null == h ? void 0 : h.guildId, p, s),
              pronouns: null == h ? void 0 : h.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, t.jsx)(a.Z, { userId: s.id }),
              tags: (0, t.jsx)(c.Z, {
                displayProfile: h,
                profileType: f.y0.FULL_SIZE,
                onClose: g,
              }),
            }),
            (0, t.jsx)(o.ZP, { userId: s.id }),
            A === m.OGo.PENDING_INCOMING &&
              (0, t.jsx)(u.Z.Overlay, {
                className: x.friendRequestBannerOverlay,
                children: (0, t.jsx)(d.Z, {
                  user: s,
                  guildId:
                    null !== (n = null == h ? void 0 : h.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: p,
                  friendToken: T,
                  className: x.friendRequestBanner,
                }),
              }),
            (0, t.jsx)(u.Z.Overlay, {
              className: x.overlay,
              children: (0, t.jsx)(_.Z, {
                user: s,
                currentUser: Z,
                displayProfile: h,
                items: N,
                initialSection: v,
                initialSubsection: S,
                onClose: g,
              }),
            }),
          ],
        });
      }
    },
    412317: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return I;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(194359),
        l = s(906732),
        r = s(475413),
        c = s(934861),
        a = s(981631),
        d = s(689938),
        u = s(266580);
      function I(e) {
        let {
            isCurrentUser: n,
            user: s,
            relationshipType: I,
            friendToken: _,
            onClose: E,
          } = e,
          { newestAnalyticsLocation: f } = (0, l.ZP)();
        return n || I === a.OGo.BLOCKED
          ? null
          : I === a.OGo.FRIEND || s.bot
            ? (0, t.jsx)("div", {
                className: u.multipleButtons,
                children: (0, t.jsx)(c.c, { userId: s.id, onClose: E }),
              })
            : I === a.OGo.PENDING_OUTGOING || I === a.OGo.PENDING_INCOMING
              ? (0, t.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, t.jsx)(r.ef, {
                      icon: i.UserClockIcon,
                      tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0,
                    }),
                    (0, t.jsx)(c.c, { userId: s.id, onClose: E }),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, t.jsx)(c.v, { userId: s.id, onClose: E }),
                    (0, t.jsx)(r.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: i.UserPlusIcon,
                      text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: i.Button.Colors.BRAND,
                      onClick: () => {
                        o.Z.addRelationship({
                          userId: s.id,
                          context: { location: f },
                          friendToken: _,
                        });
                      },
                    }),
                  ],
                });
      }
    },
    384816: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return T;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        l = s(666520),
        r = s(189156),
        c = s(706454),
        a = s(430824),
        d = s(914010),
        u = s(785717),
        I = s(250822),
        _ = s(771362),
        E = s(280885),
        f = s(819602),
        m = s(900927),
        x = s(678738),
        Z = s(652853),
        p = s(179828),
        h = s(228168),
        v = s(689938),
        S = s(11633);
      function T(e) {
        let {
            user: n,
            currentUser: s,
            displayProfile: T,
            subsection: g,
            onClose: A,
          } = e,
          { theme: N } = (0, Z.z)(),
          { trackUserProfileAction: j } = (0, u.KZ)(),
          b = null == T ? void 0 : T.guildId,
          L = (0, i.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
          M = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
          O = (0, i.e7)([c.default], () => c.default.locale),
          R = (0, _.Z)(n.id),
          C = (0, I.Z)(n.id);
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: S.scroller,
          children: [
            (null == T ? void 0 : T.bio) != null &&
              (null == T ? void 0 : T.bio) !== "" &&
              (0, t.jsx)(E.Z, { userBio: T.bio, setLineClamp: !1 }),
            null != L &&
              (0, t.jsx)(p.Z, {
                user: n,
                currentUser: s,
                guild: L,
                scrollIntoView: g === h.Tb.ROLES,
              }),
            n.isProvisional && (0, t.jsx)(r.Z, { look: "profile_modal" }),
            (0, t.jsx)(x.Z, {
              heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, t.jsx)(m.Z, {
                userId: n.id,
                guildId: null == T ? void 0 : T.guildId,
                tooltipDelay: h.vB,
              }),
            }),
            R.length > 0 &&
              (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.CONNECTIONS,
                scrollIntoView: g === h.Tb.CONNECTIONS,
                children: (0, t.jsx)(f.OA, {
                  connectedAccounts: R,
                  className: S.connections,
                  userId: n.id,
                  theme: N,
                  locale: O,
                }),
              }),
            C.length > 0 &&
              (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.APPS,
                children: C.map((e) =>
                  (0, t.jsx)(
                    f.tH,
                    {
                      className: S.appsConnections,
                      applicationRoleConnection: e,
                      locale: O,
                      onApplicationClicked: () => {
                        j({ action: "PRESS_APP_CONNECTION" }), A();
                      },
                      selectedGuildId: null != M ? M : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, t.jsx)(x.Z, {
              heading: v.Z.Messages.NOTE,
              scrollIntoView: g === h.Tb.NOTE,
              children: (0, t.jsx)(l.Z, {
                userId: n.id,
                className: S.note,
                autoFocus: g === h.Tb.NOTE,
                onUpdate: () => j({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    179828: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return T;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(772848),
        l = s(924826),
        r = s(91192),
        c = s(442837),
        a = s(749210),
        d = s(434404),
        u = s(271383),
        I = s(430824),
        _ = s(496675),
        E = s(700785),
        f = s(785717),
        m = s(256226),
        x = s(678738),
        Z = s(314172),
        p = s(981631),
        h = s(689938),
        v = s(726769);
      function S(e) {
        let {
            user: n,
            currentUser: s,
            guild: c,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: I,
            onAddRole: _,
            onRemoveRole: f,
          } = e,
          x = I && null != a,
          S = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: p.Cyb,
            scrollToEnd: p.Cyb,
            wrap: !0,
          }),
          g = d.length,
          A =
            0 === g
              ? h.Z.Messages.ROLE_LIST_EMPTY
              : h.Z.Messages.ROLES_LIST.format({ numRoles: g }),
          N = d.map((e) => {
            var i;
            return (0, t.jsx)(
              m.Z,
              {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: I
                  ? E.r6(c, s.id, u, e)
                  : (null === (i = e.tags) || void 0 === i
                      ? void 0
                      : i.guild_connections) === null && n.id === s.id,
              },
              e.id,
            );
          });
        return (0, t.jsx)(r.bG, {
          navigator: T,
          children: (0, t.jsx)(r.SJ, {
            children: (e) => {
              let { ref: n, ...s } = e;
              return (0, t.jsxs)("div", {
                className: v.root,
                "aria-label": A,
                ref: n,
                ...s,
                children: [
                  N,
                  x &&
                    (0, t.jsx)(Z.Z, {
                      guild: c,
                      guildMember: a,
                      numRoles: g,
                      highestRole: u,
                      onAddRole: _,
                    }),
                ],
              });
            },
          }),
        });
      }
      function T(e) {
        let { user: n, currentUser: s, guild: o, scrollIntoView: l } = e,
          { trackUserProfileAction: r } = (0, f.KZ)(),
          m = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          Z = (0, c.e7)([I.Z], () => I.Z.getRoles(o.id)),
          v = null == m ? void 0 : m.roles,
          T = i.useMemo(
            () =>
              null == v || 0 === v.length
                ? []
                : Object.values(Z)
                    .filter((e) => v.includes(e.id))
                    .sort((e, n) => {
                      var s, t;
                      let i =
                          (null === (s = e.tags) || void 0 === s
                            ? void 0
                            : s.guild_connections) !== null,
                        o =
                          (null === (t = n.tags) || void 0 === t
                            ? void 0
                            : t.guild_connections) !== null;
                      return i && !o ? 1 : !i && o ? -1 : 0;
                    }),
            [Z, v],
          ),
          g = E.e9(o, s.id),
          [A] = (0, c.Wu)([_.Z], () => [
            _.Z.can(p.Plq.MANAGE_ROLES, o),
            null != o ? _.Z.getGuildVersion(o.id) : null,
          ]),
          N = i.useCallback(
            (e) => {
              var s, t;
              r({ action: "REMOVE_ROLE" });
              let i =
                null !==
                  (t = null == v ? void 0 : v.filter((n) => n !== e.id)) &&
                void 0 !== t
                  ? t
                  : [];
              (null === (s = e.tags) || void 0 === s
                ? void 0
                : s.guild_connections) === null
                ? a.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [v, o.id, n.id, r],
          ),
          j = i.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let s = null != v ? v : [];
              -1 === s.indexOf(e) && (s = s.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, s, [e], []);
            },
            [v, o.id, n.id, r],
          ),
          b = A && null != m;
        return 0 !== T.length || b
          ? (0, t.jsx)(x.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, t.jsx)(S, {
                user: n,
                currentUser: s,
                guild: o,
                guildMember: m,
                roles: T,
                highestRole: g,
                canManageRoles: A,
                onAddRole: j,
                onRemoveRole: N,
              }),
            })
          : null;
      }
    },
    389190: function (e, n, s) {
      s.d(n, {
        T: function () {
          return x;
        },
        Z: function () {
          return Z;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        l = s(239091),
        r = s(129861),
        c = s(906732),
        a = s(158776),
        d = s(785717),
        u = s(697927),
        I = s(171368),
        _ = s(981631),
        E = s(689938),
        f = s(519294);
      let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function x(e) {
        let { user: n, status: c, onSelect: d } = e,
          u = (0, i.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
        return (0, t.jsxs)(o.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: f.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                s.e("79695"),
                s.e("69220"),
              ]).then(s.bind(s, 881351));
              return (s) => (0, t.jsx)(e, { ...s, user: n });
            });
          },
          children: [
            (0, t.jsx)(o.Avatar, {
              src: n.getAvatarURL(void 0, m),
              "aria-label": n.username,
              size: o.AvatarSizes.SIZE_40,
              status: c,
              isMobile: u,
              className: f.listAvatar,
            }),
            (0, t.jsx)(r.Z, {
              user: n,
              className: f.listName,
              discriminatorClass: f.listDiscriminator,
            }),
          ],
        });
      }
      function Z(e) {
        let { user: n, onClose: s } = e,
          { mutualFriends: i } = (0, u.Z)(n.id),
          { analyticsLocations: l } = (0, c.ZP)(),
          { context: r, trackUserProfileAction: a } = (0, d.KZ)(),
          m = (e) => {
            s(),
              (0, I.openUserProfileModal)({
                ...r,
                userId: e,
                sourceAnalyticsLocations: l,
                analyticsLocation: {
                  section: _.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, t.jsx)(o.ScrollerThin, {
          className: f.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, t.jsx)("div", {
                  className: f.empty,
                  children: (0, t.jsx)(o.Spinner, {}),
                })
              : 0 === i.length
                ? (0, t.jsxs)("div", {
                    className: f.empty,
                    children: [
                      (0, t.jsx)("div", { className: f.emptyIconFriends }),
                      (0, t.jsx)("div", {
                        className: f.emptyText,
                        children: E.Z.Messages.NO_MUTUAL_FRIENDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { key: n, user: s, status: i } = e;
                    return (0, t.jsx)(
                      x,
                      {
                        user: s,
                        status: i,
                        onSelect: () => {
                          a({ action: "PRESS_MUTUAL_FRIEND" }), m(s.id);
                        },
                      },
                      n,
                    );
                  }),
        });
      }
    },
    428927: function (e, n, s) {
      s.d(n, {
        D: function () {
          return T;
        },
        Z: function () {
          return g;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(120356),
        o = s.n(i),
        l = s(780384),
        r = s(481060),
        c = s(239091),
        a = s(37234),
        d = s(410030),
        u = s(44315),
        I = s(565138),
        _ = s(769654),
        E = s(51144),
        f = s(785717),
        m = s(200634),
        x = s(228168),
        Z = s(981631),
        p = s(689938),
        h = s(519294),
        v = s(581958);
      let S = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function T(e) {
        let { user: n, guild: i, nick: a, theme: d, onSelect: _ } = e,
          f = n.hasAvatarForGuild(i.id);
        return (0, t.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: h.listRow,
          onClick: _,
          onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                s.e("96427"),
                s.e("11751"),
                s.e("33053"),
                s.e("37581"),
                s.e("65840"),
                s.e("7654"),
                s.e("18146"),
                s.e("44156"),
                s.e("44294"),
                s.e("85552"),
                s.e("58227"),
                s.e("67564"),
                s.e("36897"),
                s.e("22036"),
                s.e("92557"),
                s.e("64679"),
                s.e("1187"),
                s.e("36362"),
                s.e("2293"),
                s.e("33213"),
                s.e("48915"),
              ]).then(s.bind(s, 545135));
              return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
          },
          children: [
            (0, t.jsx)(I.Z, {
              tabIndex: -1,
              guild: i,
              showBadge: !0,
              className: o()(
                h.listAvatar,
                null == i.icon ? v.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? Z.Ilk.PRIMARY_600 : Z.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: x.vB,
              size: I.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, t.jsxs)("div", {
              className: h.listRowContent,
              children: [
                (0, t.jsx)("div", {
                  className: h.listName,
                  children: i.toString(),
                }),
                f || null != a
                  ? (0, t.jsxs)("div", {
                      className: v.guildNick,
                      children: [
                        f &&
                          (0, t.jsx)(r.Avatar, {
                            src: n.getAvatarURL(i.id, S),
                            size: r.AvatarSizes.SIZE_16,
                            className: v.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != a ? a : E.ZP.getName(n),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function g(e) {
        let { user: n, onClose: s } = e,
          { trackUserProfileAction: i } = (0, f.KZ)(),
          { mutualGuilds: o } = (0, m.Z)(n.id),
          l = (0, d.ZP)(),
          c = (e) => {
            (0, _.X)(e), s(), (0, a.xf)();
          };
        return (0, t.jsx)(r.ScrollerThin, {
          className: h.listScroller,
          fade: !0,
          children:
            null == o
              ? (0, t.jsx)("div", {
                  className: h.empty,
                  children: (0, t.jsx)(r.Spinner, {}),
                })
              : 0 === o.length
                ? (0, t.jsxs)("div", {
                    className: h.empty,
                    children: [
                      (0, t.jsx)("div", { className: h.emptyIconGuilds }),
                      (0, t.jsx)("div", {
                        className: h.emptyText,
                        children: p.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : o.map((e) => {
                    let { guild: s, nick: o } = e;
                    return (0, t.jsx)(
                      T,
                      {
                        user: n,
                        guild: s,
                        nick: o,
                        theme: l,
                        onSelect: () => {
                          i({ action: "PRESS_MUTUAL_GUILD" }), c(s.id);
                        },
                      },
                      s.id,
                    );
                  }),
        });
      }
    },
    740628: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return v;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(442837),
        l = s(706898),
        r = s(481060),
        c = s(246946),
        a = s(785717),
        d = s(786366),
        u = s(323090),
        I = s(296391),
        _ = s(384816),
        E = s(389190),
        f = s(428927),
        m = s(228168),
        x = s(689938),
        Z = s(519294),
        p = s(722849);
      function h(e) {
        let {
          section: n,
          subsection: s,
          user: i,
          currentUser: o,
          displayProfile: l,
          onClose: r,
        } = e;
        return n === m.oh.ACTIVITY
          ? (0, t.jsx)(I.Z, { user: i, currentUser: o, onClose: r })
          : n === m.oh.MUTUAL_FRIENDS
            ? (0, t.jsx)(E.Z, { user: i, onClose: r })
            : n === m.oh.MUTUAL_GUILDS
              ? (0, t.jsx)(f.Z, { user: i, onClose: r })
              : n === m.oh.BOT_DATA_ACCESS
                ? (0, t.jsx)(d.Z, { user: i })
                : n === m.oh.BOT_INFO
                  ? (0, t.jsx)(u.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: s,
                      onClose: r,
                    })
                  : (0, t.jsx)(_.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: s,
                      onClose: r,
                    });
      }
      function v(e) {
        var n, s, d;
        let {
            user: u,
            currentUser: I,
            displayProfile: _,
            items: E,
            initialSection: f = m.oh.USER_INFO,
            initialSubsection: v,
            onClose: S,
          } = e,
          { trackUserProfileAction: T } = (0, a.KZ)(),
          g = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: A, subsection: N }, j] = i.useState({
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
                : null === (s = E[0]) || void 0 === s
                  ? void 0
                  : s.section,
            subsection: v,
          });
        i.useEffect(() => {
          if (null == E.find((e) => e.section === A))
            j({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let b = i.useCallback(
          (e) => {
            T({ action: "PRESS_SECTION", section: e }),
              j({ section: e, subsection: void 0 });
          },
          [T, j],
        );
        return g
          ? (0, t.jsx)("div", {
              className: p.container,
              children: (0, t.jsxs)("div", {
                className: Z.empty,
                children: [
                  (0, t.jsx)("div", { className: Z.emptyIconStreamerMode }),
                  (0, t.jsx)("div", {
                    className: Z.emptyText,
                    children: x.Z.Messages.STREAMER_MODE_ENABLED,
                  }),
                ],
              }),
            })
          : (0, t.jsxs)("div", {
              className: p.container,
              children: [
                (0, t.jsx)(l.n, {
                  className: p.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: b,
                  children: E.map((e) => {
                    let { section: n, text: s } = e;
                    return (0, t.jsx)(
                      l.n.Item,
                      {
                        className: p.tabBarItem,
                        id: n,
                        "aria-label": s,
                        children: (0, t.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children: s,
                        }),
                      },
                      n,
                    );
                  }),
                }),
                (0, t.jsx)(h, {
                  items: E,
                  section: A,
                  subsection: N,
                  user: u,
                  currentUser: I,
                  displayProfile: _,
                  onClose: S,
                }),
              ],
            });
      }
    },
    533835: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return x;
          },
        }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(512722),
        l = s.n(o),
        r = s(442837),
        c = s(100527),
        a = s(699516),
        d = s(594174),
        u = s(971393),
        I = s(787018),
        _ = s(752342),
        E = s(886794),
        f = s(910364);
      let m = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
      function x(e) {
        let { user: n, ...s } = e,
          o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let c = (0, r.e7)([a.Z], () => a.Z.isBlocked(n.id)),
          [x, Z] = i.useState(c),
          p = (0, u.sS)({ location: "UserProfileModalWrapper" });
        i.useEffect(() => {
          Z(c);
        }, [c]);
        let h = !m.some((e) => {
          var n;
          return (
            null !== (n = s.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return x && p && h
          ? (0, t.jsx)(I.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => Z(!1),
              ...s,
            })
          : n.isNonUserBot()
            ? (0, t.jsx)(E.Z, { ...s, user: n, currentUser: o })
            : n.bot
              ? (0, t.jsx)(_.Z, { ...s, user: n, currentUser: o })
              : (0, t.jsx)(f.Z, { ...s, user: n, currentUser: o });
      }
    },
    398145: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return r;
        },
      }),
        s(627341);
      var t = s(278074),
        i = s(200634),
        o = s(228168),
        l = s(689938);
      function r(e) {
        var n;
        let s =
          null === (n = (0, i.Z)(e.id, !0).mutualGuilds) || void 0 === n
            ? void 0
            : n.length;
        return [
          { section: o.oh.BOT_INFO, text: l.Z.Messages.USER_PROFILE_ABOUT_ME },
          {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, t.EQ)(s)
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
            section: o.oh.BOT_DATA_ACCESS,
            text: l.Z.Messages.BOTS_DATA_ACCESS_TAB,
          },
        ];
      }
    },
    643518: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return I;
        },
      }),
        s(653041);
      var t = s(697927),
        i = s(200634),
        o = s(369566),
        l = s(326094),
        r = s(708108),
        c = s(146078),
        a = s(228168),
        d = s(981631),
        u = s(689938);
      function I(e) {
        var n, s;
        let { user: I, currentUser: _ } = e,
          { live: E, recent: f, stream: m } = (0, o.Z)(I.id),
          x =
            null ===
              (n = (0, t.Z)(
                I.id,
                I.id !== (null == _ ? void 0 : _.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          Z =
            null ===
              (s = (0, i.Z)(
                I.id,
                I.id !== (null == _ ? void 0 : _.id),
              ).mutualGuilds) || void 0 === s
              ? void 0
              : s.length,
          p = (0, l.Z)({
            user: I,
            currentUser: _,
            location: d.Sbl.PROFILE_MODAL_TABS,
          }),
          h = [
            {
              section: a.oh.USER_INFO,
              text: u.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (E.length > 0 || f.length > 0 || null != m) &&
            h.push({
              section: a.oh.ACTIVITY,
              text: u.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          I.id !== (null == _ ? void 0 : _.id) &&
            p &&
            (h.push({ section: a.oh.MUTUAL_FRIENDS, text: (0, r.Z)(x) }),
            h.push({ section: a.oh.MUTUAL_GUILDS, text: (0, c.Z)(Z) })),
          h
        );
      }
    },
    605258: function (e, n, s) {
      e.exports = { textarea: "textarea_dde0a8 " + s("803636").inputDefault };
    },
    473522: function (e, n, s) {
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
    962586: function (e, n, s) {
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
    45844: function (e, n, s) {
      e.exports = {
        memberSinceWrapper: "memberSinceWrapper_b06bc5",
        memberSince: "memberSince_b06bc5",
        discordIcon: "discordIcon_b06bc5",
        divider: "divider_b06bc5",
      };
    },
    226691: function (e, n, s) {
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
    834585: function (e, n, s) {
      e.exports = {
        scroller: "scroller_bbc4ce",
        row: "row_bbc4ce",
        rowIcon: "rowIcon_bbc4ce",
        rowText: "rowText_bbc4ce",
      };
    },
    272216: function (e, n, s) {
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
    505865: function (e, n, s) {
      e.exports = { scroller: "scroller_c0721c" };
    },
    266580: function (e, n, s) {
      e.exports = { multipleButtons: "multipleButtons_e9f973" };
    },
    11633: function (e, n, s) {
      e.exports = {
        scroller: "scroller_d53fbd",
        connections: "connections_d53fbd",
        appsConnections: "appsConnections_d53fbd",
        note: "note_d53fbd",
      };
    },
    519294: function (e, n, s) {
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
    726769: function (e, n, s) {
      e.exports = { root: "root_d1ae73" };
    },
    581958: function (e, n, s) {
      e.exports = {
        guildAvatar: "guildAvatar_c5a773",
        guildAvatarWithoutIcon: "guildAvatarWithoutIcon_c5a773",
        guildNick: "guildNick_c5a773",
      };
    },
    722849: function (e, n, s) {
      e.exports = {
        container: "container_ecc04c",
        tabBar: "tabBar_ecc04c",
        tabBarItem: "tabBarItem_ecc04c",
      };
    },
  },
]);
//# sourceMappingURL=5a7c182288d31fc222fd.js.map
