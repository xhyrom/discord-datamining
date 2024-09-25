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
        a = s(481060),
        c = s(34854),
        d = s(531301),
        u = s(246946),
        _ = s(981631),
        I = s(689938),
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
                children: (0, i.jsx)(a.TextAreaAutosize, {
                  ref: this.noteRef,
                  className: E.textarea,
                  disabled: n,
                  placeholder: n
                    ? I.Z.Messages.LOADING_NOTE
                    : I.Z.Messages.NOTE_PLACEHOLDER,
                  "aria-label": I.Z.Messages.NOTE,
                  onBlur: this.handleBlur,
                  onKeyPress: this.handleKeyPress,
                  defaultValue: null != s ? s : void 0,
                  maxLength: _.vuo,
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
                null == i || i(), c.Z.updateNote(t, n);
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
          return c;
        },
      });
      var t = s(470079),
        i = s(442837),
        o = s(726542),
        l = s(122021),
        r = s(621853);
      let a = [];
      function c(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          s = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
        return (0, t.useMemo)(
          () =>
            (null == s ? void 0 : s.connectedAccounts) == null
              ? a
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
        a = s(706454),
        c = s(271383),
        d = s(430824),
        u = s(709054),
        _ = s(689938),
        I = s(45844);
      function E(e) {
        let { userId: n, guildId: s, textClassName: E, tooltipDelay: f } = e,
          m = (0, i.e7)([a.default], () => a.default.locale),
          x = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
          Z = (0, i.e7)([c.ZP], () =>
            null != s ? c.ZP.getMember(s, n) : null,
          ),
          h = (0, l.FI)(u.default.extractTimestamp(n), m),
          p = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, m);
        return null == x || null == Z
          ? (0, t.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: E,
              children: h,
            })
          : (0, t.jsxs)("div", {
              className: I.memberSinceWrapper,
              children: [
                (0, t.jsxs)("div", {
                  className: I.memberSince,
                  children: [
                    (0, t.jsx)(o.Tooltip, {
                      text: _.Z.Messages.DISCORD_NAME,
                      delay: f,
                      children: (e) =>
                        (0, t.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: I.discordIcon,
                        }),
                    }),
                    (0, t.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: E,
                      children: h,
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: I.divider }),
                (0, t.jsxs)("div", {
                  className: I.memberSince,
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
                      children: p,
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
          return a;
        },
        v: function () {
          return c;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(493683),
        l = s(475413),
        r = s(689938);
      function a(e) {
        let { userId: n, onClose: s, ...a } = e;
        return (0, t.jsx)(l.tG, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          text: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
          },
          ...a,
        });
      }
      function c(e) {
        let { userId: n, onClose: s, ...a } = e;
        return (0, t.jsx)(l.ef, {
          action: "SEND_MESSAGE",
          icon: i.ChatIcon,
          tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
          },
          ...a,
        });
      }
    },
    787018: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return p;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(481060),
        l = s(100527),
        r = s(906732),
        a = s(138201),
        c = s(785717),
        d = s(221292),
        u = s(687158),
        _ = s(471879),
        I = s(502762),
        E = s(475413),
        f = s(228168),
        m = s(981631),
        x = s(689938),
        Z = s(226691),
        h = s(161068);
      function p(e) {
        let {
            user: n,
            guildId: s,
            channelId: p,
            messageId: v,
            roleId: S,
            transitionState: T,
            onViewBlockedProfileClick: g,
            showGuildProfile: A = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          L = s === m.ME ? void 0 : s,
          { analyticsLocations: j } = (0, r.ZP)([
            ...N,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          M = (0, c.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: L,
            channelId: p,
            messageId: v,
            roleId: S,
            showGuildProfile: A,
          }),
          b = [
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
          R = (0, u.ZP)(n.id, A ? L : void 0),
          O = i.createRef();
        return (0, t.jsx)(r.Gt, {
          value: j,
          children: (0, t.jsx)(c.Mt, {
            value: M,
            children: (0, t.jsx)(o.ModalRoot, {
              transitionState: T,
              className: Z.root,
              hideShadow: !0,
              "aria-label": x.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsx)(I.Z, {
                user: n,
                displayProfile: R,
                profileType: f.y0.FULL_SIZE,
                ref: O,
                children: (0, t.jsxs)("div", {
                  className: Z.container,
                  children: [
                    (0, t.jsx)("img", {
                      alt: "",
                      src: h,
                      className: Z.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, t.jsxs)("div", {
                      className: Z.body,
                      children: [
                        (0, t.jsx)(_.Z, { user: n, guildId: L }),
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
                          children: b.map((e, n) => {
                            let { icon: s, description: i } = e;
                            return (0, t.jsx)(
                              a.Z,
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
                                analyticsLocations: j,
                                ...M,
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
          return j;
        },
      }),
        s(47120);
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(100527),
        l = s(906732),
        r = s(5192),
        a = s(785717),
        c = s(687158),
        d = s(899007),
        u = s(648052),
        _ = s(867176),
        I = s(438163),
        E = s(681837),
        f = s(502762),
        m = s(530),
        x = s(303674),
        Z = s(952124),
        h = s(53558),
        p = s(544989),
        v = s(934861),
        S = s(740628),
        T = s(398145),
        g = s(228168),
        A = s(981631),
        N = s(689938),
        L = s(272216);
      function j(e) {
        let {
            user: n,
            currentUser: s,
            guildId: j,
            channelId: M,
            messageId: b,
            roleId: R,
            sessionId: O,
            initialSection: C,
            initialSubsection: P,
            transitionState: y,
            onClose: U,
            sourceAnalyticsLocations: D = [],
          } = e,
          F = j === A.ME ? void 0 : j,
          B = (0, c.ZP)(n.id, F),
          { analyticsLocations: G } = (0, l.ZP)([
            ...D,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          w = (0, a.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: O,
            guildId: F,
            channelId: M,
            messageId: b,
            roleId: R,
          }),
          k = (0, T.Z)(n);
        return (0, t.jsx)(l.Gt, {
          value: G,
          children: (0, t.jsx)(a.Mt, {
            value: w,
            children: (0, t.jsx)(i.ModalRoot, {
              transitionState: y,
              className: L.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsxs)(f.Z, {
                user: n,
                displayProfile: B,
                profileType: g.y0.FULL_SIZE,
                children: [
                  (0, t.jsx)(p.Z, {
                    profileType: g.y0.FULL_SIZE,
                    children: (0, t.jsx)(Z.Z, { user: n, guildId: F }),
                  }),
                  (0, t.jsxs)("header", {
                    children: [
                      (0, t.jsx)(_.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: g.y0.FULL_SIZE,
                      }),
                      (0, t.jsxs)("div", {
                        className: L.headerInner,
                        children: [
                          (0, t.jsx)(d.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: F,
                            channelId: M,
                            profileType: g.y0.FULL_SIZE,
                          }),
                          (0, t.jsx)(I.Z, {
                            user: n,
                            profileType: g.y0.FULL_SIZE,
                            hasEntered: y === i.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, t.jsxs)("div", {
                            className: L.headerButtons,
                            children: [
                              (0, t.jsx)(v.c, {
                                userId: n.id,
                                onClose: U,
                                className: L.messageTextButton,
                              }),
                              (0, t.jsx)(v.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: L.messageIconButton,
                              }),
                              (0, t.jsx)(h.Z, { user: n, guildId: F }),
                              (0, t.jsx)(x.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: L.body,
                    children: [
                      (0, t.jsx)(m.Z, {
                        user: n,
                        profileType: g.y0.FULL_SIZE,
                        nickname: r.ZP.getName(F, M, n),
                        pronouns: null == B ? void 0 : B.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, t.jsx)(E.Z, { userId: n.id }),
                        tags: (0, t.jsx)(u.Z, {
                          displayProfile: B,
                          profileType: g.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, t.jsx)(f.Z.Overlay, {
                        className: L.overlay,
                        children: (0, t.jsx)(S.Z, {
                          user: n,
                          currentUser: s,
                          displayProfile: B,
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
          return _;
        },
      }),
        s(789020);
      var t = s(735250);
      s(470079);
      var i = s(597312),
        o = s(442837),
        l = s(481060),
        r = s(860719),
        a = s(621853),
        c = s(689938),
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
      function _(e) {
        let { user: n } = e,
          s = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: _,
            hasGuildPresences: I,
            hasGuildMembers: E,
          } = (0, r.w)({ flags: null == s ? void 0 : s.flags });
        return (0, t.jsxs)(i.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            _ &&
              (0, t.jsx)(u, {
                icon: l.ChatIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            I &&
              (0, t.jsx)(u, {
                icon: l.GameControllerIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            E &&
              (0, t.jsx)(u, {
                icon: l.GroupIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, t.jsx)(l.Text, {
              variant: "text-xs/normal",
              children: c.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
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
          return p;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        l = s(666520),
        r = s(592125),
        a = s(430824),
        c = s(944486),
        d = s(785717),
        u = s(621853),
        _ = s(172351),
        I = s(280885),
        E = s(900927),
        f = s(678738),
        m = s(179828),
        x = s(228168),
        Z = s(689938),
        h = s(11633);
      function p(e) {
        var n;
        let {
            user: s,
            currentUser: p,
            displayProfile: v,
            subsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: g } = (0, d.KZ)(),
          A = (0, i.e7)([a.Z], () =>
            (null == v ? void 0 : v.guildId) != null
              ? a.Z.getGuild(v.guildId)
              : null,
          ),
          N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          L = (0, i.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: h.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, t.jsx)(I.Z, { userBio: v.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != L &&
              (0, t.jsx)(_.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: L,
                guildId:
                  null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: T,
              }),
            null != A &&
              (0, t.jsx)(m.Z, {
                user: s,
                currentUser: p,
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
                className: h.note,
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
          return M;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(481060),
        l = s(727637),
        r = s(100527),
        a = s(906732),
        c = s(680295),
        d = s(5192),
        u = s(785717),
        _ = s(687158),
        I = s(899007),
        E = s(648052),
        f = s(867176),
        m = s(280885),
        x = s(900927),
        Z = s(678738),
        h = s(502762),
        p = s(530),
        v = s(679332),
        S = s(544989),
        T = s(228168),
        g = s(981631),
        A = s(689938),
        N = s(272216),
        L = s(11633),
        j = s(722849);
      function M(e) {
        let {
            user: n,
            guildId: s,
            channelId: M,
            messageId: b,
            roleId: R,
            sessionId: O,
            transitionState: C,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = s === g.ME ? void 0 : s,
          D = (0, _.ZP)(n.id, U),
          { analyticsLocations: F } = (0, a.ZP)([
            ...y,
            r.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          B = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: O,
            guildId: U,
            channelId: M,
            messageId: b,
            roleId: R,
          }),
          G = i.createRef(),
          w = (0, l.Z)(G);
        return (0, t.jsx)(a.Gt, {
          value: F,
          children: (0, t.jsx)(u.Mt, {
            value: B,
            children: (0, t.jsxs)(o.ModalRoot, {
              transitionState: C,
              className: N.root,
              hideShadow: !0,
              "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, t.jsxs)(h.Z, {
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
                          children: (0, t.jsx)(I.Z, {
                            user: n,
                            displayProfile: D,
                            guildId: U,
                            channelId: M,
                            profileType: T.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, t.jsx)(p.Z, {
                          user: n,
                          profileType: T.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, M, n),
                          pronouns: null == D ? void 0 : D.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, t.jsx)(E.Z, {
                            displayProfile: D,
                            profileType: T.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, t.jsx)(h.Z.Overlay, {
                          className: N.overlay,
                          children: (0, t.jsxs)("div", {
                            className: j.container,
                            children: [
                              (0, t.jsx)(o.TabBar, {
                                className: j.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: g.dG4,
                                children: (0, t.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: j.tabBarItem,
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
                                className: L.scroller,
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
                  (0, t.jsx)(c.Z, {
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
          return U;
        },
      }),
        s(47120);
      var t = s(735250),
        i = s(470079),
        o = s(442837),
        l = s(481060),
        r = s(727637),
        a = s(58540),
        c = s(100527),
        d = s(906732),
        u = s(680295),
        _ = s(699516),
        I = s(5192),
        E = s(785717),
        f = s(221292),
        m = s(687158),
        x = s(326094),
        Z = s(510659),
        h = s(113557),
        p = s(867176),
        v = s(169979),
        S = s(119096),
        T = s(502762),
        g = s(544989),
        A = s(705556),
        N = s(481932),
        L = s(195387),
        j = s(272510),
        M = s(171368),
        b = s(62154),
        R = s(412317),
        O = s(228168),
        C = s(981631),
        P = s(689938),
        y = s(272216);
      function U(e) {
        let {
            user: n,
            currentUser: s,
            guildId: U,
            channelId: D,
            messageId: F,
            roleId: B,
            sessionId: G,
            friendToken: w,
            initialSection: k,
            initialSubsection: V,
            transitionState: W,
            onClose: Y,
            showGuildProfile: K = !0,
            sourceAnalyticsLocations: z = [],
          } = e,
          H = U === C.ME ? void 0 : U,
          { analyticsLocations: q } = (0, d.ZP)([
            ...z,
            c.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          Q = (0, x.Z)({
            user: n,
            currentUser: s,
            location: C.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          X = (0, E.ZB)({
            layout: Q
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: G,
            guildId: H,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K,
          }),
          J = (0, Z.$m)(),
          $ = (0, m.ZP)(n.id, K ? H : void 0),
          ee = (0, m.ZP)(n.id, H),
          en = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(n.id)),
          es = i.useMemo(() => (null != H ? { [H]: [n.id] } : {}), [H, n.id]);
        (0, a.$)(es);
        let et = i.createRef(),
          ei = (0, r.Z)(et),
          eo = () =>
            (null == ee ? void 0 : ee.guildId) == null
              ? null
              : (null == $ ? void 0 : $.guildId) != null
                ? (0, t.jsx)(l.MenuItem, {
                    id: "view-main-profile",
                    label: P.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: I.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      Y(),
                        (0, M.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !1,
                          friendToken: w,
                          sourceAnalyticsLocations: z,
                        }),
                        (0, f.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: q,
                          ...X,
                        });
                    },
                  })
                : (0, t.jsx)(l.MenuItem, {
                    id: "view-server-profile",
                    label: P.Z.Messages.VIEW_SERVER_PROFILE,
                    subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: I.ZP.getName(H, D, n),
                    }),
                    action: () => {
                      Y(),
                        (0, M.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !0,
                          friendToken: w,
                          sourceAnalyticsLocations: z,
                        }),
                        (0, f.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: q,
                          ...X,
                        });
                    },
                  });
        return (0, t.jsx)(d.Gt, {
          value: q,
          children: (0, t.jsx)(E.Mt, {
            value: X,
            children: (0, t.jsx)(Z.NJ, {
              value: J,
              children: (0, t.jsxs)(l.ModalRoot, {
                transitionState: W,
                className: y.root,
                hideShadow: !0,
                "aria-label": P.Z.Messages.USER_PROFILE_MODAL,
                children: [
                  (0, t.jsxs)(T.Z, {
                    user: n,
                    displayProfile: $,
                    profileType: O.y0.FULL_SIZE,
                    ref: et,
                    children: [
                      (0, t.jsxs)(g.Z, {
                        profileType: O.y0.FULL_SIZE,
                        children: [
                          (0, t.jsx)(L.Z, {
                            user: n,
                            guildId: H,
                            channelId: D,
                            onClose: Y,
                          }),
                          (0, t.jsx)(N.Z, {
                            profileType: O.y0.FULL_SIZE,
                            user: n,
                            friendToken: w,
                          }),
                          (0, t.jsx)(j.Z, {
                            user: n,
                            guildId: H,
                            viewProfileItem: eo(),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("header", {
                        children: [
                          (0, t.jsx)(p.Z, {
                            user: n,
                            displayProfile: $,
                            profileType: O.y0.FULL_SIZE,
                          }),
                          (0, t.jsx)(S.Z, {
                            userId: n.id,
                            onClose: Y,
                            className: y.toast,
                          }),
                          null != J.interactionType &&
                            (0, t.jsx)("div", { className: y.backdrop }),
                          (0, t.jsxs)("div", {
                            className: y.headerInner,
                            children: [
                              (0, t.jsx)(h.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: $,
                                guildId: H,
                                channelId: D,
                                profileType: O.y0.FULL_SIZE,
                              }),
                              (0, t.jsx)(v.Z, {
                                location: "SimplifiedUserProfileModal",
                                user: n,
                                displayProfile: $,
                                guildId: H,
                                channelId: D,
                                profileType: O.y0.FULL_SIZE,
                                hasEntered:
                                  W === l.ModalTransitionState.ENTERED,
                                onCloseProfile: Y,
                              }),
                              (0, t.jsxs)("div", {
                                className: y.headerButtons,
                                children: [
                                  (0, t.jsx)(R.Z, {
                                    user: n,
                                    isCurrentUser: n.id === s.id,
                                    relationshipType: en,
                                    friendToken: w,
                                    onClose: Y,
                                  }),
                                  (0, t.jsx)(A.Z, {
                                    user: n,
                                    guildId: H,
                                    onClose: Y,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(b.Z, {
                        user: n,
                        currentUser: s,
                        channelId: D,
                        displayProfile: $,
                        initialSection: k,
                        initialSubsection: V,
                        friendToken: w,
                        onClose: Y,
                      }),
                    ],
                  }),
                  (null == $ ? void 0 : $.profileEffectId) != null &&
                    (0, t.jsx)(u.Z, {
                      profileEffectId: null == $ ? void 0 : $.profileEffectId,
                      isHovering: ei,
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
        a = s(63063),
        c = s(369566),
        d = s(678738),
        u = s(151545),
        _ = s(527790),
        I = s(304042),
        E = s(981631),
        f = s(921944),
        m = s(689938),
        x = s(505865);
      function Z(e) {
        let { user: n, currentUser: s, onClose: Z } = e,
          { live: h, recent: p, stream: v } = (0, c.Z)(n.id),
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
                    (0, t.jsx)(I.Z, {
                      user: n,
                      currentUser: s,
                      stream: v,
                      onClose: Z,
                    }),
                  h.map((e, i) =>
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
                            href: a.Z.getArticleURL(
                              E.BhN.ACTIVITY_STATUS_SETTINGS,
                            ),
                            children: e,
                          },
                          n,
                        ),
                    })
                  : null,
                children: p.map((e) =>
                  (0, t.jsx)(_.Z, { user: n, entry: e, onClose: Z }, e.id),
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
        a = s(648052),
        c = s(681837),
        d = s(91433),
        u = s(502762),
        _ = s(530),
        I = s(740628),
        E = s(643518),
        f = s(228168),
        m = s(981631),
        x = s(272216);
      function Z(e) {
        var n;
        let {
            user: s,
            currentUser: Z,
            channelId: h,
            displayProfile: p,
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
            (0, t.jsx)(_.Z, {
              user: s,
              profileType: f.y0.FULL_SIZE,
              nickname: r.ZP.getName(null == p ? void 0 : p.guildId, h, s),
              pronouns: null == p ? void 0 : p.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, t.jsx)(c.Z, { userId: s.id }),
              tags: (0, t.jsx)(a.Z, {
                displayProfile: p,
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
                    null !== (n = null == p ? void 0 : p.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: h,
                  friendToken: T,
                  className: x.friendRequestBanner,
                }),
              }),
            (0, t.jsx)(u.Z.Overlay, {
              className: x.overlay,
              children: (0, t.jsx)(I.Z, {
                user: s,
                currentUser: Z,
                displayProfile: p,
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
          return _;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(194359),
        l = s(906732),
        r = s(475413),
        a = s(934861),
        c = s(981631),
        d = s(689938),
        u = s(266580);
      function _(e) {
        let {
            isCurrentUser: n,
            user: s,
            relationshipType: _,
            friendToken: I,
            onClose: E,
          } = e,
          { newestAnalyticsLocation: f } = (0, l.ZP)();
        return n || _ === c.OGo.BLOCKED
          ? null
          : _ === c.OGo.FRIEND || s.bot
            ? (0, t.jsx)("div", {
                className: u.multipleButtons,
                children: (0, t.jsx)(a.c, { userId: s.id, onClose: E }),
              })
            : _ === c.OGo.PENDING_OUTGOING || _ === c.OGo.PENDING_INCOMING
              ? (0, t.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, t.jsx)(r.ef, {
                      icon: i.UserClockIcon,
                      tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0,
                    }),
                    (0, t.jsx)(a.c, { userId: s.id, onClose: E }),
                  ],
                })
              : (0, t.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, t.jsx)(a.v, { userId: s.id, onClose: E }),
                    (0, t.jsx)(r.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: i.UserPlusIcon,
                      text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: i.Button.Colors.BRAND,
                      onClick: () => {
                        o.Z.addRelationship({
                          userId: s.id,
                          context: { location: f },
                          friendToken: I,
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
          return S;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(442837),
        o = s(481060),
        l = s(666520),
        r = s(706454),
        a = s(430824),
        c = s(914010),
        d = s(785717),
        u = s(250822),
        _ = s(771362),
        I = s(280885),
        E = s(819602),
        f = s(900927),
        m = s(678738),
        x = s(652853),
        Z = s(179828),
        h = s(228168),
        p = s(689938),
        v = s(11633);
      function S(e) {
        let {
            user: n,
            currentUser: s,
            displayProfile: S,
            subsection: T,
            onClose: g,
          } = e,
          { theme: A } = (0, x.z)(),
          { trackUserProfileAction: N } = (0, d.KZ)(),
          L = null == S ? void 0 : S.guildId,
          j = (0, i.e7)([a.Z], () => (null != L ? a.Z.getGuild(L) : null)),
          M = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
          b = (0, i.e7)([r.default], () => r.default.locale),
          R = (0, _.Z)(n.id),
          O = (0, u.Z)(n.id);
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: v.scroller,
          children: [
            (null == S ? void 0 : S.bio) != null &&
              (null == S ? void 0 : S.bio) !== "" &&
              (0, t.jsx)(I.Z, { userBio: S.bio, setLineClamp: !1 }),
            null != j &&
              (0, t.jsx)(Z.Z, {
                user: n,
                currentUser: s,
                guild: j,
                scrollIntoView: T === h.Tb.ROLES,
              }),
            (0, t.jsx)(m.Z, {
              heading: p.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, t.jsx)(f.Z, {
                userId: n.id,
                guildId: null == S ? void 0 : S.guildId,
                tooltipDelay: h.vB,
              }),
            }),
            R.length > 0 &&
              (0, t.jsx)(m.Z, {
                heading: p.Z.Messages.CONNECTIONS,
                scrollIntoView: T === h.Tb.CONNECTIONS,
                children: (0, t.jsx)(E.OA, {
                  connectedAccounts: R,
                  className: v.connections,
                  userId: n.id,
                  theme: A,
                  locale: b,
                }),
              }),
            O.length > 0 &&
              (0, t.jsx)(m.Z, {
                heading: p.Z.Messages.APPS,
                children: O.map((e) =>
                  (0, t.jsx)(
                    E.tH,
                    {
                      className: v.appsConnections,
                      applicationRoleConnection: e,
                      locale: b,
                      onApplicationClicked: () => {
                        N({ action: "PRESS_APP_CONNECTION" }), g();
                      },
                      selectedGuildId: null != M ? M : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, t.jsx)(m.Z, {
              heading: p.Z.Messages.NOTE,
              scrollIntoView: T === h.Tb.NOTE,
              children: (0, t.jsx)(l.Z, {
                userId: n.id,
                className: v.note,
                autoFocus: T === h.Tb.NOTE,
                onUpdate: () => N({ action: "SET_NOTE" }),
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
        a = s(442837),
        c = s(749210),
        d = s(434404),
        u = s(271383),
        _ = s(430824),
        I = s(496675),
        E = s(700785),
        f = s(785717),
        m = s(256226),
        x = s(678738),
        Z = s(314172),
        h = s(981631),
        p = s(689938),
        v = s(726769);
      function S(e) {
        let {
            user: n,
            currentUser: s,
            guild: a,
            guildMember: c,
            roles: d,
            highestRole: u,
            canManageRoles: _,
            onAddRole: I,
            onRemoveRole: f,
          } = e,
          x = _ && null != c,
          S = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: h.Cyb,
            scrollToEnd: h.Cyb,
            wrap: !0,
          }),
          g = d.length,
          A =
            0 === g
              ? p.Z.Messages.ROLE_LIST_EMPTY
              : p.Z.Messages.ROLES_LIST.format({ numRoles: g }),
          N = d.map((e) => {
            var i;
            return (0, t.jsx)(
              m.Z,
              {
                role: e,
                guildId: a.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: _
                  ? E.r6(a, s.id, u, e)
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
                      guild: a,
                      guildMember: c,
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
      function T(e) {
        let { user: n, currentUser: s, guild: o, scrollIntoView: l } = e,
          { trackUserProfileAction: r } = (0, f.KZ)(),
          m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          Z = (0, a.e7)([_.Z], () => _.Z.getRoles(o.id)),
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
          [A] = (0, a.Wu)([I.Z], () => [
            I.Z.can(h.Plq.MANAGE_ROLES, o),
            null != o ? I.Z.getGuildVersion(o.id) : null,
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
                ? c.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [v, o.id, n.id, r],
          ),
          L = i.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let s = null != v ? v : [];
              -1 === s.indexOf(e) && (s = s.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, s, [e], []);
            },
            [v, o.id, n.id, r],
          ),
          j = A && null != m;
        return 0 !== T.length || j
          ? (0, t.jsx)(x.Z, {
              heading: p.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, t.jsx)(S, {
                user: n,
                currentUser: s,
                guild: o,
                guildMember: m,
                roles: T,
                highestRole: g,
                canManageRoles: A,
                onAddRole: L,
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
        a = s(906732),
        c = s(158776),
        d = s(785717),
        u = s(697927),
        _ = s(171368),
        I = s(981631),
        E = s(689938),
        f = s(519294);
      let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function x(e) {
        let { user: n, status: a, onSelect: d } = e,
          u = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(n.id));
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
              status: a,
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
          { analyticsLocations: l } = (0, a.ZP)(),
          { context: r } = (0, d.KZ)(),
          c = (e) => {
            s(),
              (0, _.openUserProfileModal)({
                ...r,
                userId: e,
                sourceAnalyticsLocations: l,
                analyticsLocation: {
                  section: I.jXE.USER_PROFILE_MUTUAL_FRIENDS,
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
                      { user: s, status: i, onSelect: () => c(s.id) },
                      n,
                    );
                  }),
        });
      }
    },
    428927: function (e, n, s) {
      s.d(n, {
        D: function () {
          return S;
        },
        Z: function () {
          return T;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(120356),
        o = s.n(i),
        l = s(780384),
        r = s(481060),
        a = s(239091),
        c = s(37234),
        d = s(410030),
        u = s(44315),
        _ = s(565138),
        I = s(769654),
        E = s(51144),
        f = s(200634),
        m = s(228168),
        x = s(981631),
        Z = s(689938),
        h = s(519294),
        p = s(581958);
      let v = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function S(e) {
        let { user: n, guild: i, nick: c, theme: d, onSelect: I } = e,
          f = n.hasAvatarForGuild(i.id);
        return (0, t.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: h.listRow,
          onClick: I,
          onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
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
            (0, t.jsx)(_.Z, {
              tabIndex: -1,
              guild: i,
              showBadge: !0,
              className: o()(
                h.listAvatar,
                null == i.icon ? p.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? x.Ilk.PRIMARY_600 : x.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: m.vB,
              size: _.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, t.jsxs)("div", {
              className: h.listRowContent,
              children: [
                (0, t.jsx)("div", {
                  className: h.listName,
                  children: i.toString(),
                }),
                f || null != c
                  ? (0, t.jsxs)("div", {
                      className: p.guildNick,
                      children: [
                        f &&
                          (0, t.jsx)(r.Avatar, {
                            src: n.getAvatarURL(i.id, v),
                            size: r.AvatarSizes.SIZE_16,
                            className: p.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != c ? c : E.ZP.getName(n),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function T(e) {
        let { user: n, onClose: s } = e,
          { mutualGuilds: i } = (0, f.Z)(n.id),
          o = (0, d.ZP)(),
          l = (e) => {
            (0, I.X)(e), s(), (0, c.xf)();
          };
        return (0, t.jsx)(r.ScrollerThin, {
          className: h.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, t.jsx)("div", {
                  className: h.empty,
                  children: (0, t.jsx)(r.Spinner, {}),
                })
              : 0 === i.length
                ? (0, t.jsxs)("div", {
                    className: h.empty,
                    children: [
                      (0, t.jsx)("div", { className: h.emptyIconGuilds }),
                      (0, t.jsx)("div", {
                        className: h.emptyText,
                        children: Z.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { guild: s, nick: i } = e;
                    return (0, t.jsx)(
                      S,
                      {
                        user: n,
                        guild: s,
                        nick: i,
                        theme: o,
                        onSelect: () => l(s.id),
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
        a = s(246946),
        c = s(785717),
        d = s(786366),
        u = s(323090),
        _ = s(296391),
        I = s(384816),
        E = s(389190),
        f = s(428927),
        m = s(228168),
        x = s(689938),
        Z = s(519294),
        h = s(722849);
      function p(e) {
        let {
          section: n,
          subsection: s,
          user: i,
          currentUser: o,
          displayProfile: l,
          onClose: r,
        } = e;
        return n === m.oh.ACTIVITY
          ? (0, t.jsx)(_.Z, { user: i, currentUser: o, onClose: r })
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
                  : (0, t.jsx)(I.Z, {
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
            currentUser: _,
            displayProfile: I,
            items: E,
            initialSection: f = m.oh.USER_INFO,
            initialSubsection: v,
            onClose: S,
          } = e,
          { trackUserProfileAction: T } = (0, c.KZ)(),
          g = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
          [{ section: A, subsection: N }, L] = i.useState({
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
            L({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let j = i.useCallback(
          (e) => {
            T({ action: "PRESS_SECTION", section: e }),
              L({ section: e, subsection: void 0 });
          },
          [T, L],
        );
        return g
          ? (0, t.jsx)("div", {
              className: h.container,
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
              className: h.container,
              children: [
                (0, t.jsx)(l.n, {
                  className: h.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: j,
                  children: E.map((e) => {
                    let { section: n, text: s } = e;
                    return (0, t.jsx)(
                      l.n.Item,
                      {
                        className: h.tabBarItem,
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
                (0, t.jsx)(p, {
                  items: E,
                  section: A,
                  subsection: N,
                  user: u,
                  currentUser: _,
                  displayProfile: I,
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
        a = s(100527),
        c = s(699516),
        d = s(594174),
        u = s(971393),
        _ = s(787018),
        I = s(752342),
        E = s(886794),
        f = s(910364);
      let m = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
      function x(e) {
        let { user: n, ...s } = e,
          o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let a = (0, r.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          [x, Z] = i.useState(a),
          h = (0, u.sS)({ location: "UserProfileModalWrapper" });
        i.useEffect(() => {
          Z(a);
        }, [a]);
        let p = !m.some((e) => {
          var n;
          return (
            null !== (n = s.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return x && h && p
          ? (0, t.jsx)(_.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => Z(!1),
              ...s,
            })
          : n.isNonUserBot()
            ? (0, t.jsx)(E.Z, { ...s, user: n, currentUser: o })
            : n.bot
              ? (0, t.jsx)(I.Z, { ...s, user: n, currentUser: o })
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
          return u;
        },
      }),
        s(653041),
        s(627341);
      var t = s(278074),
        i = s(697927),
        o = s(200634),
        l = s(369566),
        r = s(326094),
        a = s(228168),
        c = s(981631),
        d = s(689938);
      function u(e) {
        var n, s;
        let { user: u, currentUser: _ } = e,
          { live: I, recent: E, stream: f } = (0, l.Z)(u.id),
          m =
            null ===
              (n = (0, i.Z)(
                u.id,
                u.id !== (null == _ ? void 0 : _.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          x =
            null ===
              (s = (0, o.Z)(
                u.id,
                u.id !== (null == _ ? void 0 : _.id),
              ).mutualGuilds) || void 0 === s
              ? void 0
              : s.length,
          Z = (0, r.Z)({
            user: u,
            currentUser: _,
            location: c.Sbl.PROFILE_MODAL_TABS,
          }),
          h = [
            {
              section: a.oh.USER_INFO,
              text: d.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (I.length > 0 || E.length > 0 || null != f) &&
            h.push({
              section: a.oh.ACTIVITY,
              text: d.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          u.id !== (null == _ ? void 0 : _.id) &&
            Z &&
            (h.push({
              section: a.oh.MUTUAL_FRIENDS,
              text: (0, t.EQ)(m)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }),
                ),
            }),
            h.push({
              section: a.oh.MUTUAL_GUILDS,
              text: (0, t.EQ)(x)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }),
                ),
            })),
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
//# sourceMappingURL=c5fdfe621fb1a1a8b528.js.map
