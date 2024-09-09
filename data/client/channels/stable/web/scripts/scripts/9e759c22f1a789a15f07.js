"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33217"],
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
          return m;
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
        I = s(981631),
        _ = s(689938),
        E = s(682242);
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
      class x extends (t = o.PureComponent) {
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
              } else e.which === I.yXg.SPACE && e.stopPropagation();
            });
        }
      }
      function m(e) {
        let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
          s = (0, d.Z)(e.userId);
        return (0, i.jsx)(x, { ...e, ...s, hideNote: n });
      }
      f(x, "defaultProps", { autoFocus: !1 });
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
        I = s(689938),
        _ = s(91941);
      function E(e) {
        let { userId: n, guildId: s, textClassName: E, tooltipDelay: f } = e,
          x = (0, i.e7)([a.default], () => a.default.locale),
          m = (0, i.e7)([d.Z], () => (null != s ? d.Z.getGuild(s) : null)),
          Z = (0, i.e7)([c.ZP], () =>
            null != s ? c.ZP.getMember(s, n) : null,
          ),
          p = (0, l.FI)(u.default.extractTimestamp(n), x),
          h = (0, l.FI)(null == Z ? void 0 : Z.joinedAt, x);
        return null == m || null == Z
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
                      text: m.name,
                      delay: f,
                      children: (e) =>
                        (0, t.jsx)(r.Z, {
                          ...e,
                          guild: m,
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
        a = s(138201),
        c = s(785717),
        d = s(221292),
        u = s(687158),
        I = s(471879),
        _ = s(502762),
        E = s(475413),
        f = s(228168),
        x = s(981631),
        m = s(689938),
        Z = s(493248),
        p = s(161068);
      function h(e) {
        let {
            user: n,
            guildId: s,
            channelId: h,
            messageId: S,
            roleId: v,
            transitionState: T,
            onViewBlockedProfileClick: g,
            showGuildProfile: A = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          j = s === x.ME ? void 0 : s,
          { analyticsLocations: R } = (0, r.ZP)([
            ...N,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          L = (0, c.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: j,
            channelId: h,
            messageId: S,
            roleId: v,
            showGuildProfile: A,
          }),
          b = [
            {
              icon: o.BellSlashIcon,
              description:
                m.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED,
            },
            {
              icon: o.DenyIcon,
              description:
                m.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED,
            },
          ],
          M = (0, u.ZP)(n.id, A ? j : void 0),
          O = i.createRef();
        return (0, t.jsx)(r.Gt, {
          value: R,
          children: (0, t.jsx)(c.Mt, {
            value: L,
            children: (0, t.jsx)(o.ModalRoot, {
              transitionState: T,
              className: Z.root,
              hideShadow: !0,
              "aria-label": m.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsx)(_.Z, {
                user: n,
                displayProfile: M,
                profileType: f.y0.FULL_SIZE,
                ref: O,
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
                            m.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            m.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, t.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            m.Z.Messages
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
                          text: m.Z.Messages.VIEW_PROFILE,
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == g || g(),
                              (0, d.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: R,
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
          return R;
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
        I = s(867176),
        _ = s(438163),
        E = s(681837),
        f = s(502762),
        x = s(530),
        m = s(303674),
        Z = s(952124),
        p = s(53558),
        h = s(544989),
        S = s(934861),
        v = s(740628),
        T = s(398145),
        g = s(228168),
        A = s(981631),
        N = s(689938),
        j = s(419758);
      function R(e) {
        let {
            user: n,
            currentUser: s,
            guildId: R,
            channelId: L,
            messageId: b,
            roleId: M,
            sessionId: O,
            initialSection: C,
            initialSubsection: P,
            transitionState: y,
            onClose: U,
            sourceAnalyticsLocations: D = [],
          } = e,
          F = R === A.ME ? void 0 : R,
          B = (0, c.ZP)(n.id, F),
          { analyticsLocations: w } = (0, l.ZP)([
            ...D,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          G = (0, a.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: O,
            guildId: F,
            channelId: L,
            messageId: b,
            roleId: M,
          }),
          V = (0, T.Z)(n);
        return (0, t.jsx)(l.Gt, {
          value: w,
          children: (0, t.jsx)(a.Mt, {
            value: G,
            children: (0, t.jsx)(i.ModalRoot, {
              transitionState: y,
              className: j.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, t.jsxs)(f.Z, {
                user: n,
                displayProfile: B,
                profileType: g.y0.FULL_SIZE,
                children: [
                  (0, t.jsx)(h.Z, {
                    profileType: g.y0.FULL_SIZE,
                    children: (0, t.jsx)(Z.Z, { user: n, guildId: F }),
                  }),
                  (0, t.jsxs)("header", {
                    children: [
                      (0, t.jsx)(I.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: g.y0.FULL_SIZE,
                      }),
                      (0, t.jsxs)("div", {
                        className: j.headerInner,
                        children: [
                          (0, t.jsx)(d.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: F,
                            channelId: L,
                            profileType: g.y0.FULL_SIZE,
                          }),
                          (0, t.jsxs)("div", {
                            className: j.headerButtons,
                            children: [
                              (0, t.jsx)(S.c, {
                                userId: n.id,
                                onClose: U,
                                className: j.messageTextButton,
                              }),
                              (0, t.jsx)(S.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: j.messageIconButton,
                              }),
                              (0, t.jsx)(p.Z, { user: n, guildId: F }),
                              (0, t.jsx)(m.Z, { user: n }),
                            ],
                          }),
                          (0, t.jsx)(_.Z, {
                            user: n,
                            profileType: g.y0.FULL_SIZE,
                            hasEntered: y === i.ModalTransitionState.ENTERED,
                            onClose: U,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: j.body,
                    children: [
                      (0, t.jsx)(x.Z, {
                        user: n,
                        profileType: g.y0.FULL_SIZE,
                        nickname: r.ZP.getName(F, L, n),
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
                        className: j.overlay,
                        children: (0, t.jsx)(v.Z, {
                          user: n,
                          currentUser: s,
                          displayProfile: B,
                          items: V,
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
        a = s(621853),
        c = s(689938),
        d = s(687298);
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
          s = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e
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
                title: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            _ &&
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
          return h;
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
        I = s(172351),
        _ = s(280885),
        E = s(900927),
        f = s(678738),
        x = s(179828),
        m = s(228168),
        Z = s(689938),
        p = s(642411);
      function h(e) {
        var n;
        let {
            user: s,
            currentUser: h,
            displayProfile: S,
            subsection: v,
            onClose: T,
          } = e,
          { trackUserProfileAction: g } = (0, d.KZ)(),
          A = (0, i.e7)([a.Z], () =>
            (null == S ? void 0 : S.guildId) != null
              ? a.Z.getGuild(S.guildId)
              : null,
          ),
          N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          j = (0, i.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: p.scroller,
          children: [
            (null == S ? void 0 : S.bio) != null &&
              (null == S ? void 0 : S.bio) !== "" &&
              (0, t.jsx)(_.Z, { userBio: S.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != j &&
              (0, t.jsx)(I.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: j,
                guildId:
                  null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: T,
              }),
            null != A &&
              (0, t.jsx)(x.Z, {
                user: s,
                currentUser: h,
                guild: A,
                scrollIntoView: v === m.Tb.ROLES,
              }),
            (0, t.jsx)(f.Z, {
              heading: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, t.jsx)(E.Z, {
                userId: s.id,
                guildId: null == S ? void 0 : S.guildId,
                tooltipDelay: m.vB,
              }),
            }),
            (0, t.jsx)(f.Z, {
              heading: Z.Z.Messages.NOTE,
              scrollIntoView: v === m.Tb.NOTE,
              children: (0, t.jsx)(l.Z, {
                userId: s.id,
                className: p.note,
                autoFocus: v === m.Tb.NOTE,
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
        a = s(906732),
        c = s(680295),
        d = s(5192),
        u = s(785717),
        I = s(687158),
        _ = s(899007),
        E = s(648052),
        f = s(867176),
        x = s(280885),
        m = s(900927),
        Z = s(678738),
        p = s(502762),
        h = s(530),
        S = s(679332),
        v = s(544989),
        T = s(228168),
        g = s(981631),
        A = s(689938),
        N = s(419758),
        j = s(642411),
        R = s(523438);
      function L(e) {
        let {
            user: n,
            guildId: s,
            channelId: L,
            messageId: b,
            roleId: M,
            sessionId: O,
            transitionState: C,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = s === g.ME ? void 0 : s,
          D = (0, I.ZP)(n.id, U),
          { analyticsLocations: F } = (0, a.ZP)([
            ...y,
            r.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          B = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: O,
            guildId: U,
            channelId: L,
            messageId: b,
            roleId: M,
          }),
          w = i.createRef(),
          G = (0, l.Z)(w);
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
                (0, t.jsxs)(p.Z, {
                  user: n,
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  ref: w,
                  children: [
                    (0, t.jsx)(v.Z, {
                      profileType: T.y0.FULL_SIZE,
                      children: (0, t.jsx)(S.Z, { user: n }),
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
                            className: R.container,
                            children: [
                              (0, t.jsx)(o.TabBar, {
                                className: R.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: g.dG4,
                                children: (0, t.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: R.tabBarItem,
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
                                  (0, t.jsx)(x.Z, {
                                    userId: n.id,
                                    userBio: null == D ? void 0 : D.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, t.jsx)(Z.Z, {
                                    heading:
                                      A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, t.jsx)(m.Z, {
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
                    isHovering: G,
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
        I = s(699516),
        _ = s(5192),
        E = s(785717),
        f = s(221292),
        x = s(910128),
        m = s(687158),
        Z = s(326094),
        p = s(113557),
        h = s(867176),
        S = s(169979),
        v = s(119096),
        T = s(502762),
        g = s(544989),
        A = s(705556),
        N = s(481932),
        j = s(195387),
        R = s(272510),
        L = s(171368),
        b = s(62154),
        M = s(412317),
        O = s(228168),
        C = s(981631),
        P = s(689938),
        y = s(419758);
      function U(e) {
        let {
            user: n,
            currentUser: s,
            guildId: U,
            channelId: D,
            messageId: F,
            roleId: B,
            sessionId: w,
            friendToken: G,
            initialSection: V,
            initialSubsection: k,
            transitionState: W,
            onClose: Y,
            showGuildProfile: K = !0,
            sourceAnalyticsLocations: H = [],
          } = e,
          z = U === C.ME ? void 0 : U,
          { analyticsLocations: q } = (0, d.ZP)([
            ...H,
            c.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          Q = (0, Z.Z)({
            user: n,
            currentUser: s,
            location: C.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          X = (0, E.ZB)({
            layout: Q
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: w,
            guildId: z,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K,
          }),
          { persistentCallCtaEnabled: J, activeInviteToCallCtaEnabled: $ } = (0,
          x.l)({ location: "UserProfileModalHeader" }),
          [ee, en] = i.useState(),
          [es, et] = i.useState(),
          ei = (e) => {
            en(e.interactionType), et(e.interactionSourceType);
          },
          eo = (0, m.ZP)(n.id, K ? z : void 0),
          el = (0, m.ZP)(n.id, z),
          er = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
          ea = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
        (0, a.$)(ea);
        let ec = i.createRef(),
          ed = (0, r.Z)(ec),
          [eu, eI] = i.useState(!1),
          [e_, eE] = i.useState(!1),
          [ef, ex] = i.useState(!1),
          em = () =>
            (null == el ? void 0 : el.guildId) == null
              ? null
              : (null == eo ? void 0 : eo.guildId) != null
                ? (0, t.jsx)(l.MenuItem, {
                    id: "view-main-profile",
                    label: P.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: _.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      Y(),
                        (0, L.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !1,
                          friendToken: G,
                          sourceAnalyticsLocations: H,
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
                      displayName: _.ZP.getName(z, D, n),
                    }),
                    action: () => {
                      Y(),
                        (0, L.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !0,
                          friendToken: G,
                          sourceAnalyticsLocations: H,
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
            children: (0, t.jsxs)(l.ModalRoot, {
              transitionState: W,
              className: y.root,
              hideShadow: !0,
              "aria-label": P.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, t.jsxs)(T.Z, {
                  user: n,
                  displayProfile: eo,
                  profileType: O.y0.FULL_SIZE,
                  ref: ec,
                  children: [
                    (0, t.jsxs)(g.Z, {
                      profileType: O.y0.FULL_SIZE,
                      children: [
                        (0, t.jsx)(j.Z, {
                          user: n,
                          guildId: z,
                          channelId: D,
                          onClose: Y,
                        }),
                        (0, t.jsx)(N.Z, {
                          profileType: O.y0.FULL_SIZE,
                          user: n,
                          friendToken: G,
                        }),
                        (0, t.jsx)(R.Z, {
                          user: n,
                          guildId: z,
                          viewProfileItem: em(),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("header", {
                      children: [
                        (0, t.jsx)(h.Z, {
                          user: n,
                          displayProfile: eo,
                          profileType: O.y0.FULL_SIZE,
                        }),
                        (0, t.jsx)(v.Z, {
                          isReply: ef,
                          sent: e_,
                          shown: eu,
                          userId: n.id,
                          onClose: Y,
                          className: y.toast,
                        }),
                        null != ee &&
                          (0, t.jsx)("div", { className: y.backdrop }),
                        (0, t.jsxs)("div", {
                          className: y.headerInner,
                          children: [
                            (0, t.jsx)(p.Z, {
                              location: "UserProfileModal",
                              user: n,
                              displayProfile: eo,
                              guildId: z,
                              channelId: D,
                              profileType: O.y0.FULL_SIZE,
                              isInteractionSource:
                                es === O.n_.AVATAR || es === O.n_.STATUS,
                              onInteraction: ei,
                              showReplyPopout:
                                ee === O.P.REPLY && es === O.n_.AVATAR,
                              setInteractionToastShown: eI,
                              setInteractionSent: eE,
                              setIsReplyInteraction: ex,
                            }),
                            (0, t.jsxs)("div", {
                              className: y.headerButtons,
                              children: [
                                (0, t.jsx)(M.Z, {
                                  user: n,
                                  isCurrentUser: n.id === s.id,
                                  relationshipType: er,
                                  persistentCallCtaEnabled: J,
                                  activeInviteToCallCtaEnabled: $,
                                  friendToken: G,
                                  onClose: Y,
                                }),
                                (0, t.jsx)(A.Z, {
                                  user: n,
                                  guildId: z,
                                  onClose: Y,
                                }),
                              ],
                            }),
                            (0, t.jsx)(S.Z, {
                              location: "SimplifiedUserProfileModal",
                              user: n,
                              displayProfile: eo,
                              guildId: z,
                              channelId: D,
                              profileType: O.y0.FULL_SIZE,
                              hasEntered: W === l.ModalTransitionState.ENTERED,
                              isInteractionSource: es === O.n_.STATUS,
                              onInteraction: ei,
                              showReplyPopout:
                                ee === O.P.REPLY && es === O.n_.STATUS,
                              onClose: Y,
                              setInteractionToastShown: eI,
                              setInteractionSent: eE,
                              setIsReplyInteraction: ex,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(b.Z, {
                      user: n,
                      currentUser: s,
                      channelId: D,
                      displayProfile: eo,
                      initialSection: V,
                      initialSubsection: k,
                      friendToken: G,
                      onClose: Y,
                    }),
                  ],
                }),
                (null == eo ? void 0 : eo.profileEffectId) != null &&
                  (0, t.jsx)(u.Z, {
                    profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                    isHovering: ed,
                  }),
              ],
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
        I = s(527790),
        _ = s(304042),
        E = s(981631),
        f = s(921944),
        x = s(689938),
        m = s(949968);
      function Z(e) {
        let { user: n, currentUser: s, onClose: Z } = e,
          { live: p, recent: h, stream: S } = (0, c.Z)(n.id),
          v = n.id === s.id,
          T = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          i.useEffect(() => {
            if (!!v && !T)
              (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: f.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [v, T]),
          (0, t.jsxs)(l.ScrollerThin, {
            className: m.scroller,
            fade: !0,
            children: [
              (0, t.jsxs)(d.Z, {
                children: [
                  null != S &&
                    (0, t.jsx)(_.Z, {
                      user: n,
                      currentUser: s,
                      stream: S,
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
                heading: x.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                subheading: v
                  ? x.Z.Messages.USER_RECENT_ACTIVITY_LEARN_MORE.format({
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
        a = s(648052),
        c = s(681837),
        d = s(91433),
        u = s(502762),
        I = s(530),
        _ = s(740628),
        E = s(643518),
        f = s(228168),
        x = s(981631),
        m = s(419758);
      function Z(e) {
        var n;
        let {
            user: s,
            currentUser: Z,
            channelId: p,
            displayProfile: h,
            initialSection: S,
            initialSubsection: v,
            friendToken: T,
            onClose: g,
          } = e,
          A = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(s.id)),
          N = (0, E.Z)({ user: s, currentUser: Z });
        return (0, t.jsxs)("div", {
          className: m.body,
          children: [
            (0, t.jsx)(I.Z, {
              user: s,
              profileType: f.y0.FULL_SIZE,
              nickname: r.ZP.getName(null == h ? void 0 : h.guildId, p, s),
              pronouns: null == h ? void 0 : h.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, t.jsx)(c.Z, { userId: s.id }),
              tags: (0, t.jsx)(a.Z, {
                displayProfile: h,
                profileType: f.y0.FULL_SIZE,
                onClose: g,
              }),
            }),
            (0, t.jsx)(o.ZP, { userId: s.id }),
            A === x.OGo.PENDING_INCOMING &&
              (0, t.jsx)(u.Z.Overlay, {
                className: m.friendRequestBannerOverlay,
                children: (0, t.jsx)(d.Z, {
                  user: s,
                  guildId:
                    null !== (n = null == h ? void 0 : h.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: p,
                  friendToken: T,
                  className: m.friendRequestBanner,
                }),
              }),
            (0, t.jsx)(u.Z.Overlay, {
              className: m.overlay,
              children: (0, t.jsx)(_.Z, {
                user: s,
                currentUser: Z,
                displayProfile: h,
                items: N,
                initialSection: S,
                initialSubsection: v,
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
          return E;
        },
      });
      var t = s(735250);
      s(470079);
      var i = s(481060),
        o = s(194359),
        l = s(906732),
        r = s(475413),
        a = s(261253),
        c = s(7242),
        d = s(934861),
        u = s(981631),
        I = s(689938),
        _ = s(9654);
      function E(e) {
        let {
            isCurrentUser: n,
            user: s,
            relationshipType: E,
            friendToken: f,
            persistentCallCtaEnabled: x = !1,
            activeInviteToCallCtaEnabled: m = !1,
            onClose: Z,
          } = e,
          { newestAnalyticsLocation: p } = (0, l.ZP)();
        if (n || E === u.OGo.BLOCKED) return null;
        let h = x ? (0, t.jsx)(a.Z, { user: s, onClose: Z }) : null,
          S = (0, t.jsx)(c.Z, { user: s, onClose: Z });
        if (E === u.OGo.FRIEND && m && null != S)
          return (0, t.jsxs)("div", {
            className: _.multipleButtons,
            children: [(0, t.jsx)(d.v, { userId: s.id, onClose: Z }), S],
          });
        if (E === u.OGo.FRIEND || s.bot)
          return (0, t.jsxs)("div", {
            className: _.multipleButtons,
            children: [h, (0, t.jsx)(d.c, { userId: s.id, onClose: Z })],
          });
        if (E === u.OGo.PENDING_OUTGOING || E === u.OGo.PENDING_INCOMING)
          return m && null != S
            ? (0, t.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, t.jsx)(r.ef, {
                    icon: i.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  (0, t.jsx)(d.v, { userId: s.id, onClose: Z }),
                  S,
                ],
              })
            : (0, t.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, t.jsx)(r.ef, {
                    icon: i.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  h,
                  (0, t.jsx)(d.c, { userId: s.id, onClose: Z }),
                ],
              });
        return m && null != S
          ? (0, t.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                (0, t.jsx)(r.ef, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: i.UserPlusIcon,
                  tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: s.id,
                      context: { location: p },
                      friendToken: f,
                    });
                  },
                }),
                (0, t.jsx)(d.v, { userId: s.id, onClose: Z }),
                S,
              ],
            })
          : (0, t.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                h,
                (0, t.jsx)(d.v, { userId: s.id, onClose: Z }),
                (0, t.jsx)(r.tG, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: i.UserPlusIcon,
                  text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  color: i.Button.Colors.BRAND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: s.id,
                      context: { location: p },
                      friendToken: f,
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
          return v;
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
        I = s(771362),
        _ = s(280885),
        E = s(819602),
        f = s(900927),
        x = s(678738),
        m = s(652853),
        Z = s(179828),
        p = s(228168),
        h = s(689938),
        S = s(642411);
      function v(e) {
        let {
            user: n,
            currentUser: s,
            displayProfile: v,
            subsection: T,
            onClose: g,
          } = e,
          { theme: A } = (0, m.z)(),
          { trackUserProfileAction: N } = (0, d.KZ)(),
          j = null == v ? void 0 : v.guildId,
          R = (0, i.e7)([a.Z], () => (null != j ? a.Z.getGuild(j) : null)),
          L = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
          b = (0, i.e7)([r.default], () => r.default.locale),
          M = (0, I.Z)(n.id),
          O = (0, u.Z)(n.id);
        return (0, t.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: S.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, t.jsx)(_.Z, { userBio: v.bio, setLineClamp: !1 }),
            null != R &&
              (0, t.jsx)(Z.Z, {
                user: n,
                currentUser: s,
                guild: R,
                scrollIntoView: T === p.Tb.ROLES,
              }),
            (0, t.jsx)(x.Z, {
              heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, t.jsx)(f.Z, {
                userId: n.id,
                guildId: null == v ? void 0 : v.guildId,
                tooltipDelay: p.vB,
              }),
            }),
            M.length > 0 &&
              (0, t.jsx)(x.Z, {
                heading: h.Z.Messages.CONNECTIONS,
                scrollIntoView: T === p.Tb.CONNECTIONS,
                children: (0, t.jsx)(E.OA, {
                  connectedAccounts: M,
                  className: S.connections,
                  userId: n.id,
                  theme: A,
                  locale: b,
                }),
              }),
            O.length > 0 &&
              (0, t.jsx)(x.Z, {
                heading: h.Z.Messages.APPS,
                children: O.map((e) =>
                  (0, t.jsx)(
                    E.tH,
                    {
                      className: S.appsConnections,
                      applicationRoleConnection: e,
                      locale: b,
                      onApplicationClicked: () => {
                        N({ action: "PRESS_APP_CONNECTION" }), g();
                      },
                      selectedGuildId: null != L ? L : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, t.jsx)(x.Z, {
              heading: h.Z.Messages.NOTE,
              scrollIntoView: T === p.Tb.NOTE,
              children: (0, t.jsx)(l.Z, {
                userId: n.id,
                className: S.note,
                autoFocus: T === p.Tb.NOTE,
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
        I = s(430824),
        _ = s(496675),
        E = s(700785),
        f = s(785717),
        x = s(256226),
        m = s(678738),
        Z = s(314172),
        p = s(981631),
        h = s(689938),
        S = s(646474);
      function v(e) {
        let {
            user: n,
            currentUser: s,
            guild: a,
            guildMember: c,
            roles: d,
            highestRole: u,
            canManageRoles: I,
            onAddRole: _,
            onRemoveRole: f,
          } = e,
          m = I && null != c,
          v = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: v,
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
              x.Z,
              {
                role: e,
                guildId: a.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: I
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
                className: S.root,
                "aria-label": A,
                ref: n,
                ...s,
                children: [
                  N,
                  m &&
                    (0, t.jsx)(Z.Z, {
                      guild: a,
                      guildMember: c,
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
          x = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          Z = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
          S = null == x ? void 0 : x.roles,
          T = i.useMemo(
            () =>
              null == S || 0 === S.length
                ? []
                : Object.values(Z)
                    .filter((e) => S.includes(e.id))
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
            [Z, S],
          ),
          g = E.e9(o, s.id),
          [A] = (0, a.Wu)([_.Z], () => [
            _.Z.can(p.Plq.MANAGE_ROLES, o),
            null != o ? _.Z.getGuildVersion(o.id) : null,
          ]),
          N = i.useCallback(
            (e) => {
              var s, t;
              r({ action: "REMOVE_ROLE" });
              let i =
                null !==
                  (t = null == S ? void 0 : S.filter((n) => n !== e.id)) &&
                void 0 !== t
                  ? t
                  : [];
              (null === (s = e.tags) || void 0 === s
                ? void 0
                : s.guild_connections) === null
                ? c.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [S, o.id, n.id, r],
          ),
          j = i.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let s = null != S ? S : [];
              -1 === s.indexOf(e) && (s = s.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, s, [e], []);
            },
            [S, o.id, n.id, r],
          ),
          R = A && null != x;
        return 0 !== T.length || R
          ? (0, t.jsx)(m.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, t.jsx)(v, {
                user: n,
                currentUser: s,
                guild: o,
                guildMember: x,
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
          return m;
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
        I = s(171368),
        _ = s(981631),
        E = s(689938),
        f = s(542926);
      let x = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function m(e) {
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
                s.e("46611"),
              ]).then(s.bind(s, 881351));
              return (s) => (0, t.jsx)(e, { ...s, user: n });
            });
          },
          children: [
            (0, t.jsx)(o.Avatar, {
              src: n.getAvatarURL(void 0, x),
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
                      m,
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
          return v;
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
        I = s(565138),
        _ = s(769654),
        E = s(51144),
        f = s(200634),
        x = s(228168),
        m = s(981631),
        Z = s(689938),
        p = s(542926),
        h = s(632207);
      let S = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function v(e) {
        let { user: n, guild: i, nick: c, theme: d, onSelect: _ } = e,
          f = n.hasAvatarForGuild(i.id);
        return (0, t.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: p.listRow,
          onClick: _,
          onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
              let { default: e } = await Promise.all([
                s.e("96427"),
                s.e("23755"),
                s.e("89350"),
                s.e("11751"),
                s.e("33053"),
                s.e("37581"),
                s.e("65840"),
                s.e("7654"),
                s.e("90508"),
                s.e("18146"),
                s.e("44156"),
                s.e("59743"),
                s.e("14203"),
                s.e("85552"),
                s.e("98926"),
                s.e("58227"),
                s.e("1187"),
                s.e("75531"),
                s.e("22036"),
                s.e("92557"),
                s.e("64679"),
                s.e("23693"),
                s.e("87713"),
                s.e("33213"),
                s.e("30045"),
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
                p.listAvatar,
                null == i.icon ? h.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? m.Ilk.PRIMARY_600 : m.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: x.vB,
              size: I.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, t.jsxs)("div", {
              className: p.listRowContent,
              children: [
                (0, t.jsx)("div", {
                  className: p.listName,
                  children: i.toString(),
                }),
                f || null != c
                  ? (0, t.jsxs)("div", {
                      className: h.guildNick,
                      children: [
                        f &&
                          (0, t.jsx)(r.Avatar, {
                            src: n.getAvatarURL(i.id, S),
                            size: r.AvatarSizes.SIZE_16,
                            className: h.guildAvatar,
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
            (0, _.X)(e), s(), (0, c.xf)();
          };
        return (0, t.jsx)(r.ScrollerThin, {
          className: p.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, t.jsx)("div", {
                  className: p.empty,
                  children: (0, t.jsx)(r.Spinner, {}),
                })
              : 0 === i.length
                ? (0, t.jsxs)("div", {
                    className: p.empty,
                    children: [
                      (0, t.jsx)("div", { className: p.emptyIconGuilds }),
                      (0, t.jsx)("div", {
                        className: p.emptyText,
                        children: Z.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { guild: s, nick: i } = e;
                    return (0, t.jsx)(
                      v,
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
          return S;
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
        I = s(296391),
        _ = s(384816),
        E = s(389190),
        f = s(428927),
        x = s(228168),
        m = s(689938),
        Z = s(542926),
        p = s(523438);
      function h(e) {
        let {
          section: n,
          subsection: s,
          user: i,
          currentUser: o,
          displayProfile: l,
          onClose: r,
        } = e;
        return n === x.oh.ACTIVITY
          ? (0, t.jsx)(I.Z, { user: i, currentUser: o, onClose: r })
          : n === x.oh.MUTUAL_FRIENDS
            ? (0, t.jsx)(E.Z, { user: i, onClose: r })
            : n === x.oh.MUTUAL_GUILDS
              ? (0, t.jsx)(f.Z, { user: i, onClose: r })
              : n === x.oh.BOT_DATA_ACCESS
                ? (0, t.jsx)(d.Z, { user: i })
                : n === x.oh.BOT_INFO
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
      function S(e) {
        var n, s, d;
        let {
            user: u,
            currentUser: I,
            displayProfile: _,
            items: E,
            initialSection: f = x.oh.USER_INFO,
            initialSubsection: S,
            onClose: v,
          } = e,
          { trackUserProfileAction: T } = (0, c.KZ)(),
          g = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
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
            subsection: S,
          });
        i.useEffect(() => {
          if (null == E.find((e) => e.section === A))
            j({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let R = i.useCallback(
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
                    children: m.Z.Messages.STREAMER_MODE_ENABLED,
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
                  onItemSelect: R,
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
                  onClose: v,
                }),
              ],
            });
      }
    },
    533835: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return m;
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
        I = s(787018),
        _ = s(752342),
        E = s(886794),
        f = s(910364);
      let x = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
      function m(e) {
        let { user: n, ...s } = e,
          o = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let a = (0, r.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          [m, Z] = i.useState(a),
          p = (0, u.sS)({ location: "UserProfileModalWrapper" });
        i.useEffect(() => {
          Z(a);
        }, [a]);
        let h = !x.some((e) => {
          var n;
          return (
            null !== (n = s.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return m && p && h
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
        let { user: u, currentUser: I } = e,
          { live: _, recent: E, stream: f } = (0, l.Z)(u.id),
          x =
            null ===
              (n = (0, i.Z)(
                u.id,
                u.id !== (null == I ? void 0 : I.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          m =
            null ===
              (s = (0, o.Z)(
                u.id,
                u.id !== (null == I ? void 0 : I.id),
              ).mutualGuilds) || void 0 === s
              ? void 0
              : s.length,
          Z = (0, r.Z)({
            user: u,
            currentUser: I,
            location: c.Sbl.PROFILE_MODAL_TABS,
          }),
          p = [
            {
              section: a.oh.USER_INFO,
              text: d.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (_.length > 0 || E.length > 0 || null != f) &&
            p.push({
              section: a.oh.ACTIVITY,
              text: d.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          u.id !== (null == I ? void 0 : I.id) &&
            Z &&
            (p.push({
              section: a.oh.MUTUAL_FRIENDS,
              text: (0, t.EQ)(x)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }),
                ),
            }),
            p.push({
              section: a.oh.MUTUAL_GUILDS,
              text: (0, t.EQ)(m)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }),
                ),
            })),
          p
        );
      }
    },
    682242: function (e, n, s) {
      e.exports = { textarea: "textarea_dde0a8 " + s("787223").inputDefault };
    },
    83661: function (e, n, s) {
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
    866030: function (e, n, s) {
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
    91941: function (e, n, s) {
      e.exports = {
        memberSinceWrapper: "memberSinceWrapper_b06bc5",
        memberSince: "memberSince_b06bc5",
        discordIcon: "discordIcon_b06bc5",
        divider: "divider_b06bc5",
      };
    },
    493248: function (e, n, s) {
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
    687298: function (e, n, s) {
      e.exports = {
        scroller: "scroller_bbc4ce",
        row: "row_bbc4ce",
        rowIcon: "rowIcon_bbc4ce",
        rowText: "rowText_bbc4ce",
      };
    },
    419758: function (e, n, s) {
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
    949968: function (e, n, s) {
      e.exports = { scroller: "scroller_c0721c" };
    },
    9654: function (e, n, s) {
      e.exports = { multipleButtons: "multipleButtons_e9f973" };
    },
    642411: function (e, n, s) {
      e.exports = {
        scroller: "scroller_d53fbd",
        connections: "connections_d53fbd",
        appsConnections: "appsConnections_d53fbd",
        note: "note_d53fbd",
      };
    },
    542926: function (e, n, s) {
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
    646474: function (e, n, s) {
      e.exports = { root: "root_d1ae73" };
    },
    632207: function (e, n, s) {
      e.exports = {
        guildAvatar: "guildAvatar_c5a773",
        guildAvatarWithoutIcon: "guildAvatarWithoutIcon_c5a773",
        guildNick: "guildNick_c5a773",
      };
    },
    523438: function (e, n, s) {
      e.exports = {
        container: "container_ecc04c",
        tabBar: "tabBar_ecc04c",
        tabBarItem: "tabBarItem_ecc04c",
      };
    },
    24701: function (e, n, s) {
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
//# sourceMappingURL=9e759c22f1a789a15f07.js.map
