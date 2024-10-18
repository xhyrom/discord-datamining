"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8576"],
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
    34854: function (e, n, t) {
      var i = t(544891),
        s = t(981631);
      n.Z = {
        updateNote(e, n) {
          i.tn.put({
            url: s.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
          });
        },
      };
    },
    666520: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var i,
        s = t(735250),
        o = t(470079),
        l = t(699581),
        r = t(442837),
        c = t(481060),
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
      class m extends (i = o.PureComponent) {
        componentDidMount() {
          if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e &&
              null != e.selectionStart &&
              (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
          }
        }
        render() {
          let { className: e, loading: n, note: t, hideNote: i } = this.props;
          return i
            ? null
            : (0, s.jsx)("div", {
                className: e,
                children: (0, s.jsx)(c.TextAreaAutosize, {
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
            f(this, "noteRef", o.createRef()),
            f(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: t, userId: i, onUpdate: s } = this.props;
              if ((null != t ? t : "") !== n)
                null == s || s(), a.Z.updateNote(i, n);
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
          t = (0, d.Z)(e.userId);
        return (0, s.jsx)(m, { ...e, ...t, hideNote: n });
      }
      f(m, "defaultProps", { autoFocus: !1 });
    },
    860719: function (e, n, t) {
      t.d(n, {
        w: function () {
          return s;
        },
      }),
        t(789020);
      var i = t(85025);
      function s(e) {
        let { flags: n } = e,
          t = (0, i.O)(n),
          s =
            null != t &&
            ((null == t ? void 0 : t.messageContent) ||
              (null == t ? void 0 : t.messageContentLimited)),
          o =
            null != t &&
            ((null == t ? void 0 : t.guildPresences) ||
              (null == t ? void 0 : t.guildPresencesLimited)),
          l =
            null != t &&
            ((null == t ? void 0 : t.guildMembers) ||
              (null == t ? void 0 : t.guildMembersLimited));
        return {
          hasMessageContent: s,
          hasGuildPresences: o,
          hasGuildMembers: l,
          hasIntents: s || o || l,
        };
      }
    },
    85025: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o;
        },
      });
      var i = t(630388),
        s = t(981631);
      function o(e) {
        if (null != e)
          return {
            guildPresences: (0, i.yE)(e, s.udG.GATEWAY_PRESENCE),
            guildMembers: (0, i.yE)(e, s.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, i.yE)(e, s.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, i.yE)(e, s.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, i.yE)(
              e,
              s.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, i.yE)(
              e,
              s.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    250822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(470079),
        s = t(442837),
        o = t(621853);
      let l = [];
      function r(e) {
        let n = (0, s.e7)([o.Z], () => o.Z.getUserProfile(e));
        return (0, i.useMemo)(
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
      var i = t(470079),
        s = t(442837),
        o = t(726542),
        l = t(122021),
        r = t(621853);
      let c = [];
      function a(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          t = (0, s.e7)([r.Z], () => r.Z.getUserProfile(e));
        return (0, i.useMemo)(
          () =>
            (null == t ? void 0 : t.connectedAccounts) == null
              ? c
              : t.connectedAccounts.filter((e) => {
                  let { type: t } = e,
                    i = o.Z.get(t);
                  return null != i && n(i);
                }),
          [null == t ? void 0 : t.connectedAccounts, n],
        );
      }
    },
    900927: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(399606),
        o = t(481060),
        l = t(275759),
        r = t(565138),
        c = t(706454),
        a = t(271383),
        d = t(430824),
        u = t(709054),
        _ = t(689938),
        I = t(45844);
      function E(e) {
        let { userId: n, guildId: t, textClassName: E, tooltipDelay: f } = e,
          m = (0, s.e7)([c.default], () => c.default.locale),
          x = (0, s.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
          p = (0, s.e7)([a.ZP], () =>
            null != t ? a.ZP.getMember(t, n) : null,
          ),
          Z = (0, l.FI)(u.default.extractTimestamp(n), m),
          h = (0, l.FI)(null == p ? void 0 : p.joinedAt, m);
        return null == x || null == p
          ? (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: E,
              children: Z,
            })
          : (0, i.jsxs)("div", {
              className: I.memberSinceWrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: I.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: _.Z.Messages.DISCORD_NAME,
                      delay: f,
                      children: (e) =>
                        (0, i.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: I.discordIcon,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: E,
                      children: Z,
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: I.divider }),
                (0, i.jsxs)("div", {
                  className: I.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: x.name,
                      delay: f,
                      children: (e) =>
                        (0, i.jsx)(r.Z, {
                          ...e,
                          guild: x,
                          size: r.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
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
    934861: function (e, n, t) {
      t.d(n, {
        c: function () {
          return c;
        },
        v: function () {
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        o = t(493683),
        l = t(475413),
        r = t(689938);
      function c(e) {
        let { userId: n, onClose: t, ...c } = e;
        return (0, i.jsx)(l.tG, {
          action: "SEND_MESSAGE",
          icon: s.ChatIcon,
          text: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
          },
          ...c,
        });
      }
      function a(e) {
        let { userId: n, onClose: t, ...c } = e;
        return (0, i.jsx)(l.ef, {
          action: "SEND_MESSAGE",
          icon: s.ChatIcon,
          tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
          onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
          },
          ...c,
        });
      }
    },
    787018: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(481060),
        l = t(100527),
        r = t(906732),
        c = t(138201),
        a = t(785717),
        d = t(221292),
        u = t(687158),
        _ = t(471879),
        I = t(502762),
        E = t(475413),
        f = t(228168),
        m = t(981631),
        x = t(689938),
        p = t(226691),
        Z = t(161068);
      function h(e) {
        let {
            user: n,
            guildId: t,
            channelId: h,
            messageId: v,
            roleId: S,
            transitionState: T,
            onViewBlockedProfileClick: g,
            showGuildProfile: A = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          j = t === m.ME ? void 0 : t,
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
          R = s.createRef();
        return (0, i.jsx)(r.Gt, {
          value: b,
          children: (0, i.jsx)(a.Mt, {
            value: L,
            children: (0, i.jsx)(o.ModalRoot, {
              transitionState: T,
              className: p.root,
              hideShadow: !0,
              "aria-label": x.Z.Messages.USER_PROFILE_MODAL,
              children: (0, i.jsx)(I.Z, {
                user: n,
                displayProfile: O,
                profileType: f.y0.FULL_SIZE,
                ref: R,
                children: (0, i.jsxs)("div", {
                  className: p.container,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: Z,
                      className: p.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: p.body,
                      children: [
                        (0, i.jsx)(_.Z, { user: n, guildId: j }),
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          className: p.header,
                          children:
                            x.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            x.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            x.Z.Messages
                              .USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION,
                        }),
                        (0, i.jsx)("div", {
                          className: p.safetyTable,
                          children: M.map((e, n) => {
                            let { icon: t, description: s } = e;
                            return (0, i.jsx)(
                              c.Z,
                              {
                                icon: t,
                                title: s,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsx)(E.tG, {
                          className: p.centeredButton,
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
    752342: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var s = t(481060),
        o = t(100527),
        l = t(906732),
        r = t(5192),
        c = t(785717),
        a = t(687158),
        d = t(899007),
        u = t(648052),
        _ = t(867176),
        I = t(438163),
        E = t(681837),
        f = t(502762),
        m = t(530),
        x = t(871604),
        p = t(952124),
        Z = t(53558),
        h = t(544989),
        v = t(934861),
        S = t(740628),
        T = t(398145),
        g = t(228168),
        A = t(981631),
        N = t(689938),
        j = t(272216);
      function b(e) {
        let {
            user: n,
            currentUser: t,
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
        return (0, i.jsx)(l.Gt, {
          value: G,
          children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(s.ModalRoot, {
              transitionState: y,
              className: j.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, i.jsxs)(f.Z, {
                user: n,
                displayProfile: F,
                profileType: g.y0.FULL_SIZE,
                children: [
                  (0, i.jsx)(h.Z, {
                    profileType: g.y0.FULL_SIZE,
                    children: (0, i.jsx)(p.Z, { user: n, guildId: B }),
                  }),
                  (0, i.jsxs)("header", {
                    children: [
                      (0, i.jsx)(_.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: g.y0.FULL_SIZE,
                      }),
                      (0, i.jsxs)("div", {
                        className: j.headerInner,
                        children: [
                          (0, i.jsx)(d.Z, {
                            user: n,
                            displayProfile: F,
                            guildId: B,
                            channelId: L,
                            profileType: g.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(I.Z, {
                            user: n,
                            profileType: g.y0.FULL_SIZE,
                            hasEntered: y === s.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, i.jsxs)("div", {
                            className: j.headerButtons,
                            children: [
                              (0, i.jsx)(v.c, {
                                userId: n.id,
                                onClose: U,
                                className: j.messageTextButton,
                              }),
                              (0, i.jsx)(v.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: j.messageIconButton,
                              }),
                              (0, i.jsx)(Z.Z, { user: n, guildId: B }),
                              (0, i.jsx)(x.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: j.body,
                    children: [
                      (0, i.jsx)(m.Z, {
                        user: n,
                        profileType: g.y0.FULL_SIZE,
                        nickname: r.ZP.getName(B, L, n),
                        pronouns: null == F ? void 0 : F.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, i.jsx)(E.Z, { userId: n.id }),
                        tags: (0, i.jsx)(u.Z, {
                          displayProfile: F,
                          profileType: g.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, i.jsx)(f.Z.Overlay, {
                        className: j.overlay,
                        children: (0, i.jsx)(S.Z, {
                          user: n,
                          currentUser: t,
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
    786366: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(789020);
      var i = t(735250);
      t(470079);
      var s = t(597312),
        o = t(442837),
        l = t(481060),
        r = t(860719),
        c = t(621853),
        a = t(689938),
        d = t(834585);
      function u(e) {
        let { icon: n, title: t, description: s } = e;
        return (0, i.jsxs)("div", {
          className: d.row,
          children: [
            (0, i.jsx)("div", {
              className: d.rowIcon,
              children: (0, i.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
              }),
            }),
            (0, i.jsxs)("div", {
              className: d.rowText,
              children: [
                (0, i.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  children: t,
                }),
                (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: s }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let { user: n } = e,
          t = (0, o.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: _,
            hasGuildPresences: I,
            hasGuildMembers: E,
          } = (0, r.w)({ flags: null == t ? void 0 : t.flags });
        return (0, i.jsxs)(s.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            _ &&
              (0, i.jsx)(u, {
                icon: l.ChatIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            I &&
              (0, i.jsx)(u, {
                icon: l.GameControllerIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            E &&
              (0, i.jsx)(u, {
                icon: l.GroupIcon,
                title: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: a.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, i.jsx)(l.Text, {
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
          return h;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(592125),
        c = t(430824),
        a = t(944486),
        d = t(785717),
        u = t(621853),
        _ = t(172351),
        I = t(280885),
        E = t(900927),
        f = t(678738),
        m = t(179828),
        x = t(228168),
        p = t(689938),
        Z = t(11633);
      function h(e) {
        var n;
        let {
            user: t,
            currentUser: h,
            displayProfile: v,
            subsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: g } = (0, d.KZ)(),
          A = (0, s.e7)([c.Z], () =>
            (null == v ? void 0 : v.guildId) != null
              ? c.Z.getGuild(v.guildId)
              : null,
          ),
          N = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          j = (0, s.e7)([r.Z, a.Z], () => r.Z.getChannel(a.Z.getChannelId()));
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: Z.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, i.jsx)(I.Z, { userBio: v.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != j &&
              (0, i.jsx)(_.Z, {
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
              (0, i.jsx)(m.Z, {
                user: t,
                currentUser: h,
                guild: A,
                scrollIntoView: S === x.Tb.ROLES,
              }),
            (0, i.jsx)(f.Z, {
              heading: p.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, i.jsx)(E.Z, {
                userId: t.id,
                guildId: null == v ? void 0 : v.guildId,
                tooltipDelay: x.vB,
              }),
            }),
            (0, i.jsx)(f.Z, {
              heading: p.Z.Messages.NOTE,
              scrollIntoView: S === x.Tb.NOTE,
              children: (0, i.jsx)(l.Z, {
                userId: t.id,
                className: Z.note,
                autoFocus: S === x.Tb.NOTE,
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
          return L;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(481060),
        l = t(727637),
        r = t(100527),
        c = t(906732),
        a = t(680295),
        d = t(5192),
        u = t(785717),
        _ = t(687158),
        I = t(899007),
        E = t(648052),
        f = t(867176),
        m = t(280885),
        x = t(900927),
        p = t(678738),
        Z = t(502762),
        h = t(530),
        v = t(679332),
        S = t(544989),
        T = t(228168),
        g = t(981631),
        A = t(689938),
        N = t(272216),
        j = t(11633),
        b = t(722849);
      function L(e) {
        let {
            user: n,
            guildId: t,
            channelId: L,
            messageId: M,
            roleId: O,
            sessionId: R,
            transitionState: C,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = t === g.ME ? void 0 : t,
          D = (0, _.ZP)(n.id, U),
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
          G = s.createRef(),
          w = (0, l.Z)(G);
        return (0, i.jsx)(c.Gt, {
          value: B,
          children: (0, i.jsx)(u.Mt, {
            value: F,
            children: (0, i.jsxs)(o.ModalRoot, {
              transitionState: C,
              className: N.root,
              hideShadow: !0,
              "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, i.jsxs)(Z.Z, {
                  user: n,
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  ref: G,
                  children: [
                    (0, i.jsx)(S.Z, {
                      profileType: T.y0.FULL_SIZE,
                      children: (0, i.jsx)(v.Z, { user: n }),
                    }),
                    (0, i.jsxs)("header", {
                      children: [
                        (0, i.jsx)(f.Z, {
                          user: n,
                          displayProfile: D,
                          profileType: T.y0.FULL_SIZE,
                        }),
                        (0, i.jsx)("div", {
                          className: N.headerInner,
                          children: (0, i.jsx)(I.Z, {
                            user: n,
                            displayProfile: D,
                            guildId: U,
                            channelId: L,
                            profileType: T.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, i.jsx)(h.Z, {
                          user: n,
                          profileType: T.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, L, n),
                          pronouns: null == D ? void 0 : D.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, i.jsx)(E.Z, {
                            displayProfile: D,
                            profileType: T.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, i.jsx)(Z.Z.Overlay, {
                          className: N.overlay,
                          children: (0, i.jsxs)("div", {
                            className: b.container,
                            children: [
                              (0, i.jsx)(o.TabBar, {
                                className: b.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: g.dG4,
                                children: (0, i.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: b.tabBarItem,
                                    id: T.oh.BOT_INFO,
                                    "aria-label":
                                      A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    children: (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children:
                                        A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    }),
                                  },
                                  T.oh.BOT_INFO,
                                ),
                              }),
                              (0, i.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: j.scroller,
                                children: [
                                  (0, i.jsx)(m.Z, {
                                    userId: n.id,
                                    userBio: null == D ? void 0 : D.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, i.jsx)(p.Z, {
                                    heading:
                                      A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, i.jsx)(x.Z, {
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
                  (0, i.jsx)(a.Z, {
                    profileEffectId: null == D ? void 0 : D.profileEffectId,
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
          return D;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(212433),
        l = t(442837),
        r = t(481060),
        c = t(727637),
        a = t(58540),
        d = t(100527),
        u = t(906732),
        _ = t(680295),
        I = t(699516),
        E = t(5192),
        f = t(785717),
        m = t(221292),
        x = t(687158),
        p = t(326094),
        Z = t(510659),
        h = t(113557),
        v = t(867176),
        S = t(169979),
        T = t(451834),
        g = t(502762),
        A = t(544989),
        N = t(705556),
        j = t(481932),
        b = t(195387),
        L = t(272510),
        M = t(171368),
        O = t(62154),
        R = t(412317),
        C = t(228168),
        P = t(981631),
        y = t(689938),
        U = t(272216);
      function D(e) {
        let {
            user: n,
            currentUser: t,
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
            showGuildProfile: H = !0,
            sourceAnalyticsLocations: z = [],
          } = e,
          q = D === P.ME ? void 0 : D,
          { analyticsLocations: Q } = (0, u.ZP)([
            ...z,
            d.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          X = (0, p.Z)({
            user: n,
            currentUser: t,
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
            showGuildProfile: H,
          }),
          $ = (0, Z.$m)(),
          ee = (0, r.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 },
          }),
          en = (0, x.ZP)(n.id, H ? q : void 0),
          et = (0, x.ZP)(n.id, q),
          ei = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
          es = s.useMemo(() => (null != q ? { [q]: [n.id] } : {}), [q, n.id]);
        (0, a.$)(es);
        let eo = s.createRef(),
          el = (0, c.Z)(eo),
          er = () =>
            (null == et ? void 0 : et.guildId) == null
              ? null
              : (null == en ? void 0 : en.guildId) != null
                ? (0, i.jsx)(r.MenuItem, {
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
                          sourceAnalyticsLocations: z,
                        }),
                        (0, m.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: Q,
                          ...J,
                        });
                    },
                  })
                : (0, i.jsx)(r.MenuItem, {
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
                          sourceAnalyticsLocations: z,
                        }),
                        (0, m.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: Q,
                          ...J,
                        });
                    },
                  });
        return (0, i.jsx)(u.Gt, {
          value: Q,
          children: (0, i.jsx)(f.Mt, {
            value: J,
            children: (0, i.jsx)(Z.NJ, {
              value: $,
              children: (0, i.jsxs)(r.ModalRoot, {
                transitionState: Y,
                className: U.root,
                hideShadow: !0,
                "aria-label": y.Z.Messages.USER_PROFILE_MODAL,
                children: [
                  (0, i.jsxs)(g.Z, {
                    user: n,
                    displayProfile: en,
                    profileType: C.y0.FULL_SIZE,
                    ref: eo,
                    children: [
                      (0, i.jsxs)(A.Z, {
                        profileType: C.y0.FULL_SIZE,
                        children: [
                          (0, i.jsx)(b.Z, {
                            shouldShowTooltip: null === $.interactionType,
                            user: n,
                            guildId: q,
                            channelId: B,
                            onClose: K,
                          }),
                          (0, i.jsx)(j.Z, {
                            shouldShowTooltip: null === $.interactionType,
                            profileType: C.y0.FULL_SIZE,
                            user: n,
                            friendToken: k,
                          }),
                          (0, i.jsx)(L.Z, {
                            user: n,
                            guildId: q,
                            viewProfileItem: er(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("header", {
                        children: [
                          (0, i.jsx)(v.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: C.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(T.Z, {
                            userId: n.id,
                            onClose: K,
                            className: U.toast,
                          }),
                          null != $.interactionType &&
                            (0, i.jsx)(o.animated.div, {
                              style: ee,
                              className: U.backdrop,
                            }),
                          (0, i.jsxs)("div", {
                            className: U.headerInner,
                            children: [
                              (0, i.jsx)(h.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: en,
                                guildId: q,
                                channelId: B,
                                profileType: C.y0.FULL_SIZE,
                              }),
                              (0, i.jsx)(S.Z, {
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
                              (0, i.jsxs)("div", {
                                className: U.headerButtons,
                                children: [
                                  (0, i.jsx)(R.Z, {
                                    user: n,
                                    isCurrentUser: n.id === t.id,
                                    relationshipType: ei,
                                    friendToken: k,
                                    onClose: K,
                                  }),
                                  (0, i.jsx)(N.Z, {
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
                      (0, i.jsx)(O.Z, {
                        user: n,
                        currentUser: t,
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
                    (0, i.jsx)(_.Z, {
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
          return p;
        },
      });
      var i = t(735250),
        s = t(470079),
        o = t(704215),
        l = t(481060),
        r = t(605236),
        c = t(63063),
        a = t(369566),
        d = t(678738),
        u = t(151545),
        _ = t(527790),
        I = t(304042),
        E = t(981631),
        f = t(921944),
        m = t(689938),
        x = t(505865);
      function p(e) {
        let { user: n, currentUser: t, onClose: p } = e,
          { live: Z, recent: h, stream: v } = (0, a.Z)(n.id),
          S = n.id === t.id,
          T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          s.useEffect(() => {
            if (!!S && !T)
              (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: f.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [S, T]),
          (0, i.jsxs)(l.ScrollerThin, {
            className: x.scroller,
            fade: !0,
            children: [
              (0, i.jsxs)(d.Z, {
                children: [
                  null != v &&
                    (0, i.jsx)(I.Z, {
                      user: n,
                      currentUser: t,
                      stream: v,
                      onClose: p,
                    }),
                  Z.map((e, s) =>
                    (0, i.jsx)(
                      u.Z,
                      { user: n, currentUser: t, activity: e, onClose: p },
                      "live-".concat(s),
                    ),
                  ),
                ],
              }),
              S &&
                h.length > 0 &&
                (0, i.jsx)(d.Z, {
                  heading: m.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                  subheading:
                    m.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
                      learnMoreHook: (e, n) =>
                        (0, i.jsx)(
                          l.Anchor,
                          {
                            href: c.Z.getArticleURL(
                              E.BhN.ACTIVITY_STATUS_SETTINGS,
                            ),
                            children: e,
                          },
                          n,
                        ),
                    }),
                  children: h.map((e) =>
                    (0, i.jsx)(
                      _.Z,
                      { user: n, entry: e, onClose: p, hideHeader: !0 },
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
          return x;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(699516),
        l = t(5192),
        r = t(648052),
        c = t(681837),
        a = t(91433),
        d = t(502762),
        u = t(530),
        _ = t(740628),
        I = t(643518),
        E = t(228168),
        f = t(981631),
        m = t(272216);
      function x(e) {
        var n;
        let {
            user: t,
            currentUser: x,
            channelId: p,
            displayProfile: Z,
            initialSection: h,
            initialSubsection: v,
            friendToken: S,
            onClose: T,
          } = e,
          g = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
          A = (0, I.Z)({ user: t, currentUser: x });
        return (0, i.jsxs)("div", {
          className: m.body,
          children: [
            (0, i.jsx)(u.Z, {
              user: t,
              profileType: E.y0.FULL_SIZE,
              nickname: l.ZP.getName(null == Z ? void 0 : Z.guildId, p, t),
              pronouns: null == Z ? void 0 : Z.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, i.jsx)(c.Z, { userId: t.id }),
              tags: (0, i.jsx)(r.Z, {
                displayProfile: Z,
                profileType: E.y0.FULL_SIZE,
                onClose: T,
              }),
            }),
            g === f.OGo.PENDING_INCOMING &&
              (0, i.jsx)(d.Z.Overlay, {
                className: m.friendRequestBannerOverlay,
                children: (0, i.jsx)(a.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == Z ? void 0 : Z.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: p,
                  friendToken: S,
                  className: m.friendRequestBanner,
                }),
              }),
            (0, i.jsx)(d.Z.Overlay, {
              className: m.overlay,
              children: (0, i.jsx)(_.Z, {
                user: t,
                currentUser: x,
                displayProfile: Z,
                items: A,
                initialSection: h,
                initialSubsection: v,
                onClose: T,
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
      var i = t(735250);
      t(470079);
      var s = t(481060),
        o = t(194359),
        l = t(906732),
        r = t(475413),
        c = t(934861),
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
            ? (0, i.jsx)("div", {
                className: u.multipleButtons,
                children: (0, i.jsx)(c.c, { userId: t.id, onClose: E }),
              })
            : _ === a.OGo.PENDING_OUTGOING || _ === a.OGo.PENDING_INCOMING
              ? (0, i.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, i.jsx)(r.ef, {
                      icon: s.UserClockIcon,
                      tooltipText: d.Z.Messages.FRIENDS_SECTION_PENDING,
                      disabled: !0,
                    }),
                    (0, i.jsx)(c.c, { userId: t.id, onClose: E }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, i.jsx)(c.v, { userId: t.id, onClose: E }),
                    (0, i.jsx)(r.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: s.UserPlusIcon,
                      text: d.Z.Messages.USER_PROFILE_ADD_FRIEND,
                      color: s.Button.Colors.BRAND,
                      onClick: () => {
                        o.Z.addRelationship({
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
          return T;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(189156),
        c = t(706454),
        a = t(430824),
        d = t(914010),
        u = t(785717),
        _ = t(250822),
        I = t(771362),
        E = t(280885),
        f = t(819602),
        m = t(900927),
        x = t(678738),
        p = t(652853),
        Z = t(179828),
        h = t(228168),
        v = t(689938),
        S = t(11633);
      function T(e) {
        let {
            user: n,
            currentUser: t,
            displayProfile: T,
            subsection: g,
            onClose: A,
          } = e,
          { theme: N } = (0, p.z)(),
          { trackUserProfileAction: j } = (0, u.KZ)(),
          b = null == T ? void 0 : T.guildId,
          L = (0, s.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
          M = (0, s.e7)([d.Z], () => d.Z.getGuildId()),
          O = (0, s.e7)([c.default], () => c.default.locale),
          R = (0, I.Z)(n.id),
          C = (0, _.Z)(n.id);
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: S.scroller,
          children: [
            (null == T ? void 0 : T.bio) != null &&
              (null == T ? void 0 : T.bio) !== "" &&
              (0, i.jsx)(E.Z, { userBio: T.bio, setLineClamp: !1 }),
            null != L &&
              (0, i.jsx)(Z.Z, {
                user: n,
                currentUser: t,
                guild: L,
                scrollIntoView: g === h.Tb.ROLES,
              }),
            n.isProvisional && (0, i.jsx)(r.Z, { look: "profile_modal" }),
            (0, i.jsx)(x.Z, {
              heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, i.jsx)(m.Z, {
                userId: n.id,
                guildId: null == T ? void 0 : T.guildId,
                tooltipDelay: h.vB,
              }),
            }),
            R.length > 0 &&
              (0, i.jsx)(x.Z, {
                heading: v.Z.Messages.CONNECTIONS,
                scrollIntoView: g === h.Tb.CONNECTIONS,
                children: (0, i.jsx)(f.OA, {
                  connectedAccounts: R,
                  className: S.connections,
                  userId: n.id,
                  theme: N,
                  locale: O,
                }),
              }),
            C.length > 0 &&
              (0, i.jsx)(x.Z, {
                heading: v.Z.Messages.APPS,
                children: C.map((e) =>
                  (0, i.jsx)(
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
            (0, i.jsx)(x.Z, {
              heading: v.Z.Messages.NOTE,
              scrollIntoView: g === h.Tb.NOTE,
              children: (0, i.jsx)(l.Z, {
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
    179828: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(772848),
        l = t(924826),
        r = t(91192),
        c = t(442837),
        a = t(749210),
        d = t(434404),
        u = t(271383),
        _ = t(430824),
        I = t(496675),
        E = t(700785),
        f = t(785717),
        m = t(256226),
        x = t(678738),
        p = t(314172),
        Z = t(981631),
        h = t(689938),
        v = t(726769);
      function S(e) {
        let {
            user: n,
            currentUser: t,
            guild: c,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: _,
            onAddRole: I,
            onRemoveRole: f,
          } = e,
          x = _ && null != a,
          S = s.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0,
          }),
          g = d.length,
          A =
            0 === g
              ? h.Z.Messages.ROLE_LIST_EMPTY
              : h.Z.Messages.ROLES_LIST.format({ numRoles: g }),
          N = d.map((e) => {
            var s;
            return (0, i.jsx)(
              m.Z,
              {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: _
                  ? E.r6(c, t.id, u, e)
                  : (null === (s = e.tags) || void 0 === s
                      ? void 0
                      : s.guild_connections) === null && n.id === t.id,
              },
              e.id,
            );
          });
        return (0, i.jsx)(r.bG, {
          navigator: T,
          children: (0, i.jsx)(r.SJ, {
            children: (e) => {
              let { ref: n, ...t } = e;
              return (0, i.jsxs)("div", {
                className: v.root,
                "aria-label": A,
                ref: n,
                ...t,
                children: [
                  N,
                  x &&
                    (0, i.jsx)(p.Z, {
                      guild: c,
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
      function T(e) {
        let { user: n, currentUser: t, guild: o, scrollIntoView: l } = e,
          { trackUserProfileAction: r } = (0, f.KZ)(),
          m = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          p = (0, c.e7)([_.Z], () => _.Z.getRoles(o.id)),
          v = null == m ? void 0 : m.roles,
          T = s.useMemo(
            () =>
              null == v || 0 === v.length
                ? []
                : Object.values(p)
                    .filter((e) => v.includes(e.id))
                    .sort((e, n) => {
                      var t, i;
                      let s =
                          (null === (t = e.tags) || void 0 === t
                            ? void 0
                            : t.guild_connections) !== null,
                        o =
                          (null === (i = n.tags) || void 0 === i
                            ? void 0
                            : i.guild_connections) !== null;
                      return s && !o ? 1 : !s && o ? -1 : 0;
                    }),
            [p, v],
          ),
          g = E.e9(o, t.id),
          [A] = (0, c.Wu)([I.Z], () => [
            I.Z.can(Z.Plq.MANAGE_ROLES, o),
            null != o ? I.Z.getGuildVersion(o.id) : null,
          ]),
          N = s.useCallback(
            (e) => {
              var t, i;
              r({ action: "REMOVE_ROLE" });
              let s =
                null !==
                  (i = null == v ? void 0 : v.filter((n) => n !== e.id)) &&
                void 0 !== i
                  ? i
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? a.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, s, [], [e.id]);
            },
            [v, o.id, n.id, r],
          ),
          j = s.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let t = null != v ? v : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [v, o.id, n.id, r],
          ),
          b = A && null != m;
        return 0 !== T.length || b
          ? (0, i.jsx)(x.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, i.jsx)(S, {
                user: n,
                currentUser: t,
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
    389190: function (e, n, t) {
      t.d(n, {
        T: function () {
          return x;
        },
        Z: function () {
          return p;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(239091),
        r = t(129861),
        c = t(906732),
        a = t(158776),
        d = t(785717),
        u = t(697927),
        _ = t(171368),
        I = t(981631),
        E = t(689938),
        f = t(519294);
      let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function x(e) {
        let { user: n, status: c, onSelect: d } = e,
          u = (0, s.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
        return (0, i.jsxs)(o.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: f.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("79695"),
                t.e("69220"),
                t.e("50261"),
              ]).then(t.bind(t, 881351));
              return (t) => (0, i.jsx)(e, { ...t, user: n });
            });
          },
          children: [
            (0, i.jsx)(o.Avatar, {
              src: n.getAvatarURL(void 0, m),
              "aria-label": n.username,
              size: o.AvatarSizes.SIZE_40,
              status: c,
              isMobile: u,
              className: f.listAvatar,
            }),
            (0, i.jsx)(r.Z, {
              user: n,
              className: f.listName,
              discriminatorClass: f.listDiscriminator,
            }),
          ],
        });
      }
      function p(e) {
        let { user: n, onClose: t } = e,
          { mutualFriends: s } = (0, u.Z)(n.id),
          { analyticsLocations: l } = (0, c.ZP)(),
          { context: r, trackUserProfileAction: a } = (0, d.KZ)(),
          m = (e) => {
            t(),
              (0, _.openUserProfileModal)({
                ...r,
                userId: e,
                sourceAnalyticsLocations: l,
                analyticsLocation: {
                  section: I.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, i.jsx)(o.ScrollerThin, {
          className: f.listScroller,
          fade: !0,
          children:
            null == s
              ? (0, i.jsx)("div", {
                  className: f.empty,
                  children: (0, i.jsx)(o.Spinner, {}),
                })
              : 0 === s.length
                ? (0, i.jsxs)("div", {
                    className: f.empty,
                    children: [
                      (0, i.jsx)("div", { className: f.emptyIconFriends }),
                      (0, i.jsx)("div", {
                        className: f.emptyText,
                        children: E.Z.Messages.NO_MUTUAL_FRIENDS,
                      }),
                    ],
                  })
                : s.map((e) => {
                    let { key: n, user: t, status: s } = e;
                    return (0, i.jsx)(
                      x,
                      {
                        user: t,
                        status: s,
                        onSelect: () => {
                          a({ action: "PRESS_MUTUAL_FRIEND" }), m(t.id);
                        },
                      },
                      n,
                    );
                  }),
        });
      }
    },
    428927: function (e, n, t) {
      t.d(n, {
        D: function () {
          return T;
        },
        Z: function () {
          return g;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(120356),
        o = t.n(s),
        l = t(780384),
        r = t(481060),
        c = t(239091),
        a = t(37234),
        d = t(410030),
        u = t(44315),
        _ = t(565138),
        I = t(769654),
        E = t(51144),
        f = t(785717),
        m = t(200634),
        x = t(228168),
        p = t(981631),
        Z = t(689938),
        h = t(519294),
        v = t(581958);
      let S = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function T(e) {
        let { user: n, guild: s, nick: a, theme: d, onSelect: I } = e,
          f = n.hasAvatarForGuild(s.id);
        return (0, i.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: h.listRow,
          onClick: I,
          onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("96427"),
                t.e("23755"),
                t.e("11751"),
                t.e("33053"),
                t.e("15669"),
                t.e("65840"),
                t.e("7654"),
                t.e("90508"),
                t.e("76439"),
                t.e("44156"),
                t.e("59743"),
                t.e("35994"),
                t.e("85552"),
                t.e("50104"),
                t.e("58227"),
                t.e("1187"),
                t.e("28377"),
                t.e("22036"),
                t.e("92557"),
                t.e("64679"),
                t.e("79220"),
                t.e("17423"),
                t.e("33213"),
                t.e("88578"),
              ]).then(t.bind(t, 545135));
              return (n) => (0, i.jsx)(e, { ...n, guild: s });
            });
          },
          children: [
            (0, i.jsx)(_.Z, {
              tabIndex: -1,
              guild: s,
              showBadge: !0,
              className: o()(
                h.listAvatar,
                null == s.icon ? v.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: x.vB,
              size: _.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, i.jsxs)("div", {
              className: h.listRowContent,
              children: [
                (0, i.jsx)("div", {
                  className: h.listName,
                  children: s.toString(),
                }),
                f || null != a
                  ? (0, i.jsxs)("div", {
                      className: v.guildNick,
                      children: [
                        f &&
                          (0, i.jsx)(r.Avatar, {
                            src: n.getAvatarURL(s.id, S),
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
        let { user: n, onClose: t } = e,
          { trackUserProfileAction: s } = (0, f.KZ)(),
          { mutualGuilds: o } = (0, m.Z)(n.id),
          l = (0, d.ZP)(),
          c = (e) => {
            (0, I.X)(e), t(), (0, a.xf)();
          };
        return (0, i.jsx)(r.ScrollerThin, {
          className: h.listScroller,
          fade: !0,
          children:
            null == o
              ? (0, i.jsx)("div", {
                  className: h.empty,
                  children: (0, i.jsx)(r.Spinner, {}),
                })
              : 0 === o.length
                ? (0, i.jsxs)("div", {
                    className: h.empty,
                    children: [
                      (0, i.jsx)("div", { className: h.emptyIconGuilds }),
                      (0, i.jsx)("div", {
                        className: h.emptyText,
                        children: Z.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : o.map((e) => {
                    let { guild: t, nick: o } = e;
                    return (0, i.jsx)(
                      T,
                      {
                        user: n,
                        guild: t,
                        nick: o,
                        theme: l,
                        onSelect: () => {
                          s({ action: "PRESS_MUTUAL_GUILD" }), c(t.id);
                        },
                      },
                      t.id,
                    );
                  }),
        });
      }
    },
    740628: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(442837),
        l = t(706898),
        r = t(481060),
        c = t(246946),
        a = t(785717),
        d = t(786366),
        u = t(323090),
        _ = t(296391),
        I = t(384816),
        E = t(389190),
        f = t(428927),
        m = t(228168),
        x = t(689938),
        p = t(519294),
        Z = t(722849);
      function h(e) {
        let {
          section: n,
          subsection: t,
          user: s,
          currentUser: o,
          displayProfile: l,
          onClose: r,
        } = e;
        return n === m.oh.ACTIVITY
          ? (0, i.jsx)(_.Z, { user: s, currentUser: o, onClose: r })
          : n === m.oh.MUTUAL_FRIENDS
            ? (0, i.jsx)(E.Z, { user: s, onClose: r })
            : n === m.oh.MUTUAL_GUILDS
              ? (0, i.jsx)(f.Z, { user: s, onClose: r })
              : n === m.oh.BOT_DATA_ACCESS
                ? (0, i.jsx)(d.Z, { user: s })
                : n === m.oh.BOT_INFO
                  ? (0, i.jsx)(u.Z, {
                      user: s,
                      currentUser: o,
                      displayProfile: l,
                      subsection: t,
                      onClose: r,
                    })
                  : (0, i.jsx)(I.Z, {
                      user: s,
                      currentUser: o,
                      displayProfile: l,
                      subsection: t,
                      onClose: r,
                    });
      }
      function v(e) {
        var n, t, d;
        let {
            user: u,
            currentUser: _,
            displayProfile: I,
            items: E,
            initialSection: f = m.oh.USER_INFO,
            initialSubsection: v,
            onClose: S,
          } = e,
          { trackUserProfileAction: T } = (0, a.KZ)(),
          g = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: A, subsection: N }, j] = s.useState({
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
            subsection: v,
          });
        s.useEffect(() => {
          if (null == E.find((e) => e.section === A))
            j({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let b = s.useCallback(
          (e) => {
            T({ action: "PRESS_SECTION", section: e }),
              j({ section: e, subsection: void 0 });
          },
          [T, j],
        );
        return g
          ? (0, i.jsx)("div", {
              className: Z.container,
              children: (0, i.jsxs)("div", {
                className: p.empty,
                children: [
                  (0, i.jsx)("div", { className: p.emptyIconStreamerMode }),
                  (0, i.jsx)("div", {
                    className: p.emptyText,
                    children: x.Z.Messages.STREAMER_MODE_ENABLED,
                  }),
                ],
              }),
            })
          : (0, i.jsxs)("div", {
              className: Z.container,
              children: [
                (0, i.jsx)(l.n, {
                  className: Z.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: b,
                  children: E.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, i.jsx)(
                      l.n.Item,
                      {
                        className: Z.tabBarItem,
                        id: n,
                        "aria-label": t,
                        children: (0, i.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children: t,
                        }),
                      },
                      n,
                    );
                  }),
                }),
                (0, i.jsx)(h, {
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
    533835: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(512722),
        l = t.n(o),
        r = t(442837),
        c = t(100527),
        a = t(699516),
        d = t(594174),
        u = t(971393),
        _ = t(787018),
        I = t(752342),
        E = t(886794),
        f = t(910364);
      let m = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
      function x(e) {
        let { user: n, ...t } = e,
          o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let c = (0, r.e7)([a.Z], () => a.Z.isBlocked(n.id)),
          [x, p] = s.useState(c),
          Z = (0, u.sS)({ location: "UserProfileModalWrapper" });
        s.useEffect(() => {
          p(c);
        }, [c]);
        let h = !m.some((e) => {
          var n;
          return (
            null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return x && Z && h
          ? (0, i.jsx)(_.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => p(!1),
              ...t,
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(E.Z, { ...t, user: n, currentUser: o })
            : n.bot
              ? (0, i.jsx)(I.Z, { ...t, user: n, currentUser: o })
              : (0, i.jsx)(f.Z, { ...t, user: n, currentUser: o });
      }
    },
    398145: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(627341);
      var i = t(278074),
        s = t(200634),
        o = t(228168),
        l = t(689938);
      function r(e) {
        var n;
        let t =
          null === (n = (0, s.Z)(e.id, !0).mutualGuilds) || void 0 === n
            ? void 0
            : n.length;
        return [
          { section: o.oh.BOT_INFO, text: l.Z.Messages.USER_PROFILE_ABOUT_ME },
          {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, i.EQ)(t)
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
    643518: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(653041);
      var i = t(697927),
        s = t(200634),
        o = t(369566),
        l = t(326094),
        r = t(708108),
        c = t(146078),
        a = t(228168),
        d = t(981631),
        u = t(689938);
      function _(e) {
        var n, t;
        let { user: _, currentUser: I } = e,
          { live: E, recent: f, stream: m } = (0, o.Z)(_.id),
          x =
            null ===
              (n = (0, i.Z)(
                _.id,
                _.id !== (null == I ? void 0 : I.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          p =
            null ===
              (t = (0, s.Z)(
                _.id,
                _.id !== (null == I ? void 0 : I.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          Z = _.id === (null == I ? void 0 : I.id),
          h = (0, l.Z)({
            user: _,
            currentUser: I,
            location: d.Sbl.PROFILE_MODAL_TABS,
          }),
          v = [
            {
              section: a.oh.USER_INFO,
              text: u.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (E.length > 0 || (Z && f.length > 0) || null != m) &&
            v.push({
              section: a.oh.ACTIVITY,
              text: u.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          !Z &&
            h &&
            (v.push({ section: a.oh.MUTUAL_FRIENDS, text: (0, r.Z)(x) }),
            v.push({ section: a.oh.MUTUAL_GUILDS, text: (0, c.Z)(p) })),
          v
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
//# sourceMappingURL=63fda09d697192c9b525.js.map
