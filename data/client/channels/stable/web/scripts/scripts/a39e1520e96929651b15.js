"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17373"],
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
      var s = t(544891),
        i = t(981631);
      n.Z = {
        updateNote(e, n) {
          s.tn.put({
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
          return p;
        },
      }),
        t(47120);
      var s,
        i = t(735250),
        o = t(470079),
        l = t(699581),
        r = t(442837),
        a = t(481060),
        c = t(34854),
        d = t(702557),
        u = t(246946),
        I = t(981631),
        _ = t(689938),
        E = t(682242);
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
      class m extends (s = o.PureComponent) {
        componentDidMount() {
          if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e &&
              null != e.selectionStart &&
              (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
          }
        }
        render() {
          let { className: e, loading: n, note: t, hideNote: s } = this.props;
          return s
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
                  defaultValue: null != t ? t : void 0,
                  maxLength: I.vuo,
                }),
              });
        }
        constructor(...e) {
          super(...e),
            f(this, "noteRef", o.createRef()),
            f(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: t, userId: s, onUpdate: i } = this.props;
              if ((null != t ? t : "") !== n)
                null == i || i(), c.Z.updateNote(s, n);
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
      function p(e) {
        let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
          t = (0, d.Z)(e.userId);
        return (0, i.jsx)(m, { ...e, ...t, hideNote: n });
      }
      f(m, "defaultProps", { autoFocus: !1 });
    },
    860719: function (e, n, t) {
      t.d(n, {
        w: function () {
          return i;
        },
      }),
        t(789020);
      var s = t(85025);
      function i(e) {
        let { flags: n } = e,
          t = (0, s.O)(n),
          i =
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
          hasMessageContent: i,
          hasGuildPresences: o,
          hasGuildMembers: l,
          hasIntents: i || o || l,
        };
      }
    },
    85025: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o;
        },
      });
      var s = t(630388),
        i = t(981631);
      function o(e) {
        if (null != e)
          return {
            guildPresences: (0, s.yE)(e, i.udG.GATEWAY_PRESENCE),
            guildMembers: (0, s.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, s.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, s.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, s.yE)(
              e,
              i.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, s.yE)(
              e,
              i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    359607: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var s = t(470079),
        i = t(442837),
        o = t(621853);
      let l = [];
      function r(e) {
        let n = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e));
        return (0, s.useMemo)(
          () =>
            (null == n ? void 0 : n.applicationRoleConnections) == null
              ? l
              : n.applicationRoleConnections,
          [null == n ? void 0 : n.applicationRoleConnections],
        );
      }
    },
    642820: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(470079),
        i = t(442837),
        o = t(726542),
        l = t(122021),
        r = t(621853);
      let a = [];
      function c(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          t = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
        return (0, s.useMemo)(
          () =>
            (null == t ? void 0 : t.connectedAccounts) == null
              ? a
              : t.connectedAccounts.filter((e) => {
                  let { type: t } = e,
                    s = o.Z.get(t);
                  return null != s && n(s);
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
      var s = t(735250);
      t(470079);
      var i = t(399606),
        o = t(481060),
        l = t(275759),
        r = t(565138),
        a = t(706454),
        c = t(271383),
        d = t(430824),
        u = t(709054),
        I = t(689938),
        _ = t(91941);
      function E(e) {
        let { userId: n, guildId: t, textClassName: E, tooltipDelay: f } = e,
          m = (0, i.e7)([a.default], () => a.default.locale),
          p = (0, i.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
          x = (0, i.e7)([c.ZP], () =>
            null != t ? c.ZP.getMember(t, n) : null,
          ),
          Z = (0, l.FI)(u.default.extractTimestamp(n), m),
          h = (0, l.FI)(null == x ? void 0 : x.joinedAt, m);
        return null == p || null == x
          ? (0, s.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: E,
              children: Z,
            })
          : (0, s.jsxs)("div", {
              className: _.memberSinceWrapper,
              children: [
                (0, s.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, s.jsx)(o.Tooltip, {
                      text: I.Z.Messages.DISCORD_NAME,
                      delay: f,
                      children: (e) =>
                        (0, s.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: _.discordIcon,
                        }),
                    }),
                    (0, s.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: E,
                      children: Z,
                    }),
                  ],
                }),
                (0, s.jsx)("div", { className: _.divider }),
                (0, s.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, s.jsx)(o.Tooltip, {
                      text: p.name,
                      delay: f,
                      children: (e) =>
                        (0, s.jsx)(r.Z, {
                          ...e,
                          guild: p,
                          size: r.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, s.jsx)(o.Text, {
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
    787018: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(481060),
        l = t(100527),
        r = t(906732),
        a = t(138201),
        c = t(785717),
        d = t(221292),
        u = t(318661),
        I = t(299261),
        _ = t(502762),
        E = t(475413),
        f = t(228168),
        m = t(981631),
        p = t(689938),
        x = t(493248),
        Z = t(161068);
      function h(e) {
        let {
            user: n,
            guildId: t,
            channelId: h,
            messageId: v,
            roleId: S,
            transitionState: T,
            onViewBlockedProfileClick: A,
            showGuildProfile: g = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          L = t === m.ME ? void 0 : t,
          { analyticsLocations: j } = (0, r.ZP)([
            ...N,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          R = (0, c.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: L,
            channelId: h,
            messageId: v,
            roleId: S,
            showGuildProfile: g,
          }),
          O = [
            {
              icon: o.BellSlashIcon,
              description:
                p.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_NOTIFIED,
            },
            {
              icon: o.DenyIcon,
              description:
                p.Z.Messages
                  .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_STILL_BLOCKED,
            },
          ],
          b = (0, u.ZP)(n.id, g ? L : void 0),
          C = i.createRef();
        return (0, s.jsx)(r.Gt, {
          value: j,
          children: (0, s.jsx)(c.Mt, {
            value: R,
            children: (0, s.jsx)(o.ModalRoot, {
              transitionState: T,
              className: x.root,
              hideShadow: !0,
              "aria-label": p.Z.Messages.USER_PROFILE_MODAL,
              children: (0, s.jsx)(_.Z, {
                user: n,
                displayProfile: b,
                profileType: f.y0.FULL_SIZE,
                ref: C,
                children: (0, s.jsxs)("div", {
                  className: x.container,
                  children: [
                    (0, s.jsx)("img", {
                      alt: "",
                      src: Z,
                      className: x.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, s.jsxs)("div", {
                      className: x.body,
                      children: [
                        (0, s.jsx)(I.Z, { user: n, guildId: L }),
                        (0, s.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          className: x.header,
                          children:
                            p.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, s.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            p.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, s.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            p.Z.Messages
                              .USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION,
                        }),
                        (0, s.jsx)("div", {
                          className: x.safetyTable,
                          children: O.map((e, n) => {
                            let { icon: t, description: i } = e;
                            return (0, s.jsx)(
                              a.Z,
                              {
                                icon: t,
                                title: i,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, s.jsx)(E.tG, {
                          className: x.centeredButton,
                          action: "VIEW_BLOCKED_PROFILE",
                          text: p.Z.Messages.VIEW_PROFILE,
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == A || A(),
                              (0, d.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: j,
                                ...R,
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
    100849: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var s = t(735250),
        i = t(470079),
        o = t(120356),
        l = t.n(o),
        r = t(442837),
        a = t(481060),
        c = t(717881),
        d = t(387903),
        u = t(906732),
        I = t(199902),
        _ = t(158776),
        E = t(785717),
        f = t(221292),
        m = t(981631),
        p = t(711298),
        x = t(431776);
      function Z(e) {
        let { user: n, type: t, showActions: o, onClose: Z } = e,
          h = (0, r.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)),
          v = (0, r.e7)([_.Z], () => _.Z.getActivities(n.id)),
          S = i.useMemo(
            () => v.filter((e) => e.type !== m.IIU.CUSTOM_STATUS),
            [v],
          ),
          T = i.useMemo(
            () => (h ? S.find((e) => e.type === m.IIU.PLAYING) : null),
            [S, h],
          ),
          A = i.useMemo(() => S.filter((e) => e !== T), [T, S]),
          { analyticsLocations: g, newestAnalyticsLocation: N } = (0, u.ZP)(),
          { context: L, trackUserProfileAction: j } = (0, E.KZ)(),
          R = {
            location: {
              page: m.ZY5.USER_PROFILE,
              section: m.jXE.PROFILE_MODAL,
            },
          };
        return (0, s.jsxs)(a.ScrollerThin, {
          className: x.listScroller,
          fade: !0,
          children: [
            h
              ? (0, s.jsx)(c.Z, {
                  type: t,
                  user: n,
                  source: N,
                  className: p.userProfileActivity,
                  showChannelDetails: t === d.Y.SIMPLIFIED_PROFILE,
                  activity: T,
                  actionColor: p.actionColor,
                  analyticsParams: R,
                  showActions: o,
                  onClose: Z,
                  onAction: () => {
                    j({ action: "JOIN_ACTIVITY" }),
                      (0, f.Ac)({
                        activityType: m.IIU.STREAMING,
                        activityName: null == T ? void 0 : T.name,
                        activityPlatform: null == T ? void 0 : T.platform,
                        activitySessionId: null == T ? void 0 : T.session_id,
                        applicationId: null == T ? void 0 : T.application_id,
                        analyticsLocations: g,
                        ...L,
                      });
                  },
                })
              : null,
            A.map((e) =>
              (0, s.jsx)(
                c.Z,
                {
                  type: t,
                  activity: e,
                  user: n,
                  useStoreStream: !1,
                  source: N,
                  className: l()(
                    p.userProfileActivity,
                    t === d.Y.SIMPLIFIED_PROFILE && p.simplifiedProfileActivity,
                  ),
                  showChannelDetails: t === d.Y.SIMPLIFIED_PROFILE,
                  actionColor: p.actionColor,
                  analyticsParams: R,
                  showActions: o,
                  onClose: Z,
                  onAction: () => {
                    j({ action: "JOIN_ACTIVITY" }),
                      (0, f.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: g,
                        ...L,
                      });
                  },
                },
                ""
                  .concat(e.application_id, "-")
                  .concat(e.session_id, "-")
                  .concat(e.name),
              ),
            ),
          ],
        });
      }
    },
    225714: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(481060),
        o = t(194359),
        l = t(906732),
        r = t(475413),
        a = t(261253),
        c = t(7242),
        d = t(934861),
        u = t(981631),
        I = t(689938),
        _ = t(353040);
      function E(e) {
        let {
            isCurrentUser: n,
            user: t,
            relationshipType: E,
            friendToken: f,
            persistentCallCtaEnabled: m = !1,
            activeInviteToCallCtaEnabled: p = !1,
            onClose: x,
          } = e,
          { newestAnalyticsLocation: Z } = (0, l.ZP)();
        if (n || E === u.OGo.BLOCKED) return null;
        let h = m ? (0, s.jsx)(a.Z, { user: t, onClose: x }) : null,
          v = (0, s.jsx)(c.Z, { user: t, onClose: x });
        if (E === u.OGo.FRIEND && p && null != v)
          return (0, s.jsxs)("div", {
            className: _.multipleButtons,
            children: [(0, s.jsx)(d.v, { userId: t.id, onClose: x }), v],
          });
        if (E === u.OGo.FRIEND || t.bot)
          return (0, s.jsxs)("div", {
            className: _.multipleButtons,
            children: [h, (0, s.jsx)(d.c, { userId: t.id, onClose: x })],
          });
        if (E === u.OGo.PENDING_OUTGOING || E === u.OGo.PENDING_INCOMING)
          return p && null != v
            ? (0, s.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, s.jsx)(r.ef, {
                    icon: i.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  (0, s.jsx)(d.v, { userId: t.id, onClose: x }),
                  v,
                ],
              })
            : (0, s.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, s.jsx)(r.ef, {
                    icon: i.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  h,
                  (0, s.jsx)(d.c, { userId: t.id, onClose: x }),
                ],
              });
        return p && null != v
          ? (0, s.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                (0, s.jsx)(r.ef, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: i.UserPlusIcon,
                  tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: t.id,
                      context: { location: Z },
                      friendToken: f,
                    });
                  },
                }),
                (0, s.jsx)(d.v, { userId: t.id, onClose: x }),
                v,
              ],
            })
          : (0, s.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                h,
                (0, s.jsx)(d.v, { userId: t.id, onClose: x }),
                (0, s.jsx)(r.tG, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: i.UserPlusIcon,
                  text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  color: i.Button.Colors.BRAND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: t.id,
                      context: { location: Z },
                      friendToken: f,
                    });
                  },
                }),
              ],
            });
      }
    },
    304113: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(512722),
        l = t.n(o),
        r = t(442837),
        a = t(100527),
        c = t(699516),
        d = t(594174),
        u = t(971393),
        I = t(787018),
        _ = t(853825),
        E = t(41527),
        f = t(107889);
      let m = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
      function p(e) {
        let { location: n, user: t, ...o } = e,
          a = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != a,
          "UserProfileModalExperimentWrapper: currentUser cannot be undefined",
        );
        let p = (0, r.e7)([c.Z], () => c.Z.isBlocked(t.id)),
          [x, Z] = i.useState(p),
          h = (0, u.sS)({ location: n });
        i.useEffect(() => {
          Z(p);
        }, [p]);
        let v = !m.some((e) => {
          var n;
          return (
            null !== (n = o.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return x && h && v
          ? (0, s.jsx)(I.Z, {
              user: t,
              currentUser: a,
              onViewBlockedProfileClick: () => Z(!1),
              ...o,
            })
          : t.isNonUserBot()
            ? (0, s.jsx)(_.Z, { ...o, user: t, currentUser: a })
            : t.bot
              ? (0, s.jsx)(E.Z, { ...o, user: t, currentUser: a })
              : (0, s.jsx)(f.Z, { ...o, user: t, currentUser: a });
      }
    },
    944546: function (e, n, t) {
      t.d(n, {
        T: function () {
          return p;
        },
        Z: function () {
          return x;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        o = t(481060),
        l = t(239091),
        r = t(129861),
        a = t(906732),
        c = t(158776),
        d = t(785717),
        u = t(726059),
        I = t(171368),
        _ = t(981631),
        E = t(689938),
        f = t(431776);
      let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function p(e) {
        let { user: n, status: a, onSelect: d } = e,
          u = (0, i.e7)([c.Z], () => c.Z.isMobileOnline(n.id));
        return (0, s.jsxs)(o.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: f.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("79695"),
                t.e("69220"),
                t.e("46611"),
              ]).then(t.bind(t, 881351));
              return (t) => (0, s.jsx)(e, { ...t, user: n });
            });
          },
          children: [
            (0, s.jsx)(o.Avatar, {
              src: n.getAvatarURL(void 0, m),
              "aria-label": n.username,
              size: o.AvatarSizes.SIZE_40,
              status: a,
              isMobile: u,
              className: f.listAvatar,
            }),
            (0, s.jsx)(r.Z, {
              user: n,
              className: f.listName,
              discriminatorClass: f.listDiscriminator,
            }),
          ],
        });
      }
      function x(e) {
        let { user: n, onClose: t } = e,
          { mutualFriends: i } = (0, u.Z)(n.id),
          { analyticsLocations: l } = (0, a.ZP)(),
          { context: r } = (0, d.KZ)(),
          c = (e) => {
            t(),
              (0, I.openUserProfileModal)({
                ...r,
                userId: e,
                sourceAnalyticsLocations: l,
                analyticsLocation: {
                  section: _.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, s.jsx)(o.ScrollerThin, {
          className: f.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, s.jsx)("div", {
                  className: f.empty,
                  children: (0, s.jsx)(o.Spinner, {}),
                })
              : 0 === i.length
                ? (0, s.jsxs)("div", {
                    className: f.empty,
                    children: [
                      (0, s.jsx)("div", { className: f.emptyIconFriends }),
                      (0, s.jsx)("div", {
                        className: f.emptyText,
                        children: E.Z.Messages.NO_MUTUAL_FRIENDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { key: n, user: t, status: i } = e;
                    return (0, s.jsx)(
                      p,
                      { user: t, status: i, onSelect: () => c(t.id) },
                      n,
                    );
                  }),
        });
      }
    },
    470900: function (e, n, t) {
      t.d(n, {
        D: function () {
          return S;
        },
        Z: function () {
          return T;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(780384),
        r = t(481060),
        a = t(239091),
        c = t(37234),
        d = t(410030),
        u = t(44315),
        I = t(565138),
        _ = t(769654),
        E = t(51144),
        f = t(162267),
        m = t(228168),
        p = t(981631),
        x = t(689938),
        Z = t(431776),
        h = t(712215);
      let v = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function S(e) {
        let { user: n, guild: i, nick: c, theme: d, onSelect: _ } = e,
          f = n.hasAvatarForGuild(i.id);
        return (0, s.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: Z.listRow,
          onClick: _,
          onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("96427"),
                t.e("23755"),
                t.e("89350"),
                t.e("11751"),
                t.e("29549"),
                t.e("33053"),
                t.e("31605"),
                t.e("37581"),
                t.e("65840"),
                t.e("7654"),
                t.e("90508"),
                t.e("18146"),
                t.e("44156"),
                t.e("59743"),
                t.e("14203"),
                t.e("85552"),
                t.e("48804"),
                t.e("58227"),
                t.e("1187"),
                t.e("75531"),
                t.e("22036"),
                t.e("92557"),
                t.e("64679"),
                t.e("23693"),
                t.e("87713"),
                t.e("33213"),
                t.e("30045"),
              ]).then(t.bind(t, 545135));
              return (n) => (0, s.jsx)(e, { ...n, guild: i });
            });
          },
          children: [
            (0, s.jsx)(I.Z, {
              tabIndex: -1,
              guild: i,
              showBadge: !0,
              className: o()(
                Z.listAvatar,
                null == i.icon ? h.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: m.vB,
              size: I.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, s.jsxs)("div", {
              className: Z.listRowContent,
              children: [
                (0, s.jsx)("div", {
                  className: Z.listName,
                  children: i.toString(),
                }),
                f || null != c
                  ? (0, s.jsxs)("div", {
                      className: h.guildNick,
                      children: [
                        f &&
                          (0, s.jsx)(r.Avatar, {
                            src: n.getAvatarURL(i.id, v),
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
        let { user: n, onClose: t } = e,
          { mutualGuilds: i } = (0, f.Z)(n.id),
          o = (0, d.ZP)(),
          l = (e) => {
            (0, _.X)(e), t(), (0, c.xf)();
          };
        return (0, s.jsx)(r.ScrollerThin, {
          className: Z.listScroller,
          fade: !0,
          children:
            null == i
              ? (0, s.jsx)("div", {
                  className: Z.empty,
                  children: (0, s.jsx)(r.Spinner, {}),
                })
              : 0 === i.length
                ? (0, s.jsxs)("div", {
                    className: Z.empty,
                    children: [
                      (0, s.jsx)("div", { className: Z.emptyIconGuilds }),
                      (0, s.jsx)("div", {
                        className: Z.emptyText,
                        children: x.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : i.map((e) => {
                    let { guild: t, nick: i } = e;
                    return (0, s.jsx)(
                      S,
                      {
                        user: n,
                        guild: t,
                        nick: i,
                        theme: o,
                        onSelect: () => l(t.id),
                      },
                      t.id,
                    );
                  }),
        });
      }
    },
    988246: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(689938),
        o = t(431776);
      function l() {
        return (0, s.jsxs)("div", {
          className: o.empty,
          children: [
            (0, s.jsx)("div", { className: o.emptyIconStreamerMode }),
            (0, s.jsx)("div", {
              className: o.emptyText,
              children: i.Z.Messages.STREAMER_MODE_ENABLED,
            }),
          ],
        });
      }
    },
    853825: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(481060),
        l = t(727637),
        r = t(100527),
        a = t(906732),
        c = t(680295),
        d = t(5192),
        u = t(785717),
        I = t(318661),
        _ = t(78675),
        E = t(741308),
        f = t(588822),
        m = t(899007),
        p = t(900927),
        x = t(678738),
        Z = t(502762),
        h = t(530),
        v = t(679332),
        S = t(544989),
        T = t(228168),
        A = t(981631),
        g = t(689938),
        N = t(392214),
        L = t(408277),
        j = t(455749);
      function R(e) {
        let {
            user: n,
            guildId: t,
            channelId: R,
            messageId: O,
            roleId: b,
            sessionId: C,
            transitionState: M,
            onClose: P,
            sourceAnalyticsLocations: y = [],
          } = e,
          U = t === A.ME ? void 0 : t,
          D = (0, I.ZP)(n.id, U),
          { analyticsLocations: F } = (0, a.ZP)([
            ...y,
            r.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          B = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: C,
            guildId: U,
            channelId: R,
            messageId: O,
            roleId: b,
          }),
          w = i.createRef(),
          G = (0, l.Z)(w);
        return (0, s.jsx)(a.Gt, {
          value: F,
          children: (0, s.jsx)(u.Mt, {
            value: B,
            children: (0, s.jsxs)(o.ModalRoot, {
              transitionState: M,
              className: N.root,
              hideShadow: !0,
              "aria-label": g.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, s.jsxs)(Z.Z, {
                  user: n,
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  ref: w,
                  children: [
                    (0, s.jsx)(S.Z, {
                      profileType: T.y0.FULL_SIZE,
                      children: (0, s.jsx)(v.Z, { user: n }),
                    }),
                    (0, s.jsxs)("header", {
                      children: [
                        (0, s.jsx)(_.Z, {
                          user: n,
                          displayProfile: D,
                          profileType: T.y0.FULL_SIZE,
                        }),
                        (0, s.jsx)("div", {
                          className: N.headerInner,
                          children: (0, s.jsx)(m.Z, {
                            user: n,
                            displayProfile: D,
                            guildId: U,
                            channelId: R,
                            profileType: T.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, s.jsx)(h.Z, {
                          user: n,
                          profileType: T.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, R, n),
                          pronouns: null == D ? void 0 : D.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, s.jsx)(E.Z, {
                            displayProfile: D,
                            profileType: T.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, s.jsx)(Z.Z.Overlay, {
                          className: N.overlay,
                          children: (0, s.jsxs)("div", {
                            className: j.container,
                            children: [
                              (0, s.jsx)(o.TabBar, {
                                className: j.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: A.dG4,
                                children: (0, s.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: j.tabBarItem,
                                    id: T.oh.BOT_INFO,
                                    "aria-label":
                                      g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    children: (0, s.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children:
                                        g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    }),
                                  },
                                  T.oh.BOT_INFO,
                                ),
                              }),
                              (0, s.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: L.scroller,
                                children: [
                                  (0, s.jsx)(f.Z, {
                                    userId: n.id,
                                    userBio: null == D ? void 0 : D.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, s.jsx)(x.Z, {
                                    heading:
                                      g.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, s.jsx)(p.Z, {
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
                  (0, s.jsx)(c.Z, {
                    profileEffectId: null == D ? void 0 : D.profileEffectId,
                    isHovering: G,
                  }),
              ],
            }),
          }),
        });
      }
    },
    970041: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(789020);
      var s = t(735250);
      t(470079);
      var i = t(597312),
        o = t(442837),
        l = t(481060),
        r = t(860719),
        a = t(621853),
        c = t(689938),
        d = t(116604);
      function u(e) {
        let { icon: n, title: t, description: i } = e;
        return (0, s.jsxs)("div", {
          className: d.row,
          children: [
            (0, s.jsx)("div", {
              className: d.rowIcon,
              children: (0, s.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
              }),
            }),
            (0, s.jsxs)("div", {
              className: d.rowText,
              children: [
                (0, s.jsx)(l.Heading, {
                  variant: "text-xs/semibold",
                  children: t,
                }),
                (0, s.jsx)(l.Text, { variant: "text-sm/normal", children: i }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        let { user: n } = e,
          t = (0, o.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: I,
            hasGuildPresences: _,
            hasGuildMembers: E,
          } = (0, r.w)({ flags: null == t ? void 0 : t.flags });
        return (0, s.jsxs)(i.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            I &&
              (0, s.jsx)(u, {
                icon: l.ChatIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            _ &&
              (0, s.jsx)(u, {
                icon: l.GameControllerIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            E &&
              (0, s.jsx)(u, {
                icon: l.GroupIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, s.jsx)(l.Text, {
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
    41527: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
        },
      }),
        t(47120);
      var s = t(735250);
      t(470079);
      var i = t(481060),
        o = t(100527),
        l = t(906732),
        r = t(5192),
        a = t(785717),
        c = t(318661),
        d = t(78675),
        u = t(741308),
        I = t(899007),
        _ = t(438163),
        E = t(681837),
        f = t(502762),
        m = t(530),
        p = t(645410),
        x = t(437758),
        Z = t(357836),
        h = t(544989),
        v = t(934861),
        S = t(616140),
        T = t(29530),
        A = t(228168),
        g = t(981631),
        N = t(689938),
        L = t(392214);
      function j(e) {
        let {
            user: n,
            currentUser: t,
            guildId: j,
            channelId: R,
            messageId: O,
            roleId: b,
            sessionId: C,
            initialSection: M,
            initialSubsection: P,
            transitionState: y,
            onClose: U,
            sourceAnalyticsLocations: D = [],
          } = e,
          F = j === g.ME ? void 0 : j,
          B = (0, c.ZP)(n.id, F),
          { analyticsLocations: w } = (0, l.ZP)([
            ...D,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          G = (0, a.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: C,
            guildId: F,
            channelId: R,
            messageId: O,
            roleId: b,
          }),
          V = (0, T.Z)(n);
        return (0, s.jsx)(l.Gt, {
          value: w,
          children: (0, s.jsx)(a.Mt, {
            value: G,
            children: (0, s.jsx)(i.ModalRoot, {
              transitionState: y,
              className: L.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, s.jsxs)(f.Z, {
                user: n,
                displayProfile: B,
                profileType: A.y0.FULL_SIZE,
                children: [
                  (0, s.jsx)(h.Z, {
                    profileType: A.y0.FULL_SIZE,
                    children: (0, s.jsx)(x.Z, { user: n, guildId: F }),
                  }),
                  (0, s.jsxs)("header", {
                    children: [
                      (0, s.jsx)(d.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: A.y0.FULL_SIZE,
                      }),
                      (0, s.jsxs)("div", {
                        className: L.headerInner,
                        children: [
                          (0, s.jsx)(I.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: F,
                            channelId: R,
                            profileType: A.y0.FULL_SIZE,
                          }),
                          (0, s.jsxs)("div", {
                            className: L.headerButtons,
                            children: [
                              (0, s.jsx)(v.c, {
                                userId: n.id,
                                onClose: U,
                                className: L.messageTextButton,
                              }),
                              (0, s.jsx)(v.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: L.messageIconButton,
                              }),
                              (0, s.jsx)(Z.Z, { user: n, guildId: F }),
                              (0, s.jsx)(p.Z, { user: n }),
                            ],
                          }),
                          (0, s.jsx)(_.Z, {
                            user: n,
                            profileType: A.y0.FULL_SIZE,
                            hasEntered: y === i.ModalTransitionState.ENTERED,
                            onClose: U,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: L.body,
                    children: [
                      (0, s.jsx)(m.Z, {
                        user: n,
                        profileType: A.y0.FULL_SIZE,
                        nickname: r.ZP.getName(F, R, n),
                        pronouns: null == B ? void 0 : B.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, s.jsx)(E.Z, { userId: n.id }),
                        tags: (0, s.jsx)(u.Z, {
                          displayProfile: B,
                          profileType: A.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, s.jsx)(f.Z.Overlay, {
                        className: L.overlay,
                        children: (0, s.jsx)(S.Z, {
                          user: n,
                          currentUser: t,
                          displayProfile: B,
                          items: V,
                          initialSection: null != M ? M : A.oh.BOT_INFO,
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
    715388: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(592125),
        a = t(430824),
        c = t(944486),
        d = t(785717),
        u = t(621853),
        I = t(588822),
        _ = t(940730),
        E = t(900927),
        f = t(678738),
        m = t(351707),
        p = t(228168),
        x = t(689938),
        Z = t(408277);
      function h(e) {
        var n;
        let {
            user: t,
            currentUser: h,
            displayProfile: v,
            subsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: A } = (0, d.KZ)(),
          g = (0, i.e7)([a.Z], () =>
            (null == v ? void 0 : v.guildId) != null
              ? a.Z.getGuild(v.guildId)
              : null,
          ),
          N = (0, i.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          L = (0, i.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
        return (0, s.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: Z.scroller,
          children: [
            (null == v ? void 0 : v.bio) != null &&
              (null == v ? void 0 : v.bio) !== "" &&
              (0, s.jsx)(I.Z, { userBio: v.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != L &&
              (0, s.jsx)(_.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: L,
                guildId:
                  null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: T,
              }),
            null != g &&
              (0, s.jsx)(m.Z, {
                user: t,
                currentUser: h,
                guild: g,
                scrollIntoView: S === p.Tb.ROLES,
              }),
            (0, s.jsx)(f.Z, {
              heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, s.jsx)(E.Z, {
                userId: t.id,
                guildId: null == v ? void 0 : v.guildId,
                tooltipDelay: p.vB,
              }),
            }),
            (0, s.jsx)(f.Z, {
              heading: x.Z.Messages.NOTE,
              scrollIntoView: S === p.Tb.NOTE,
              children: (0, s.jsx)(l.Z, {
                userId: t.id,
                className: Z.note,
                autoFocus: S === p.Tb.NOTE,
                onUpdate: () => A({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    29530: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(627341);
      var s = t(278074),
        i = t(162267),
        o = t(228168),
        l = t(689938);
      function r(e) {
        var n;
        let t =
          null === (n = (0, i.Z)(e.id, !0).mutualGuilds) || void 0 === n
            ? void 0
            : n.length;
        return [
          { section: o.oh.BOT_INFO, text: l.Z.Messages.USER_PROFILE_ABOUT_ME },
          {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, s.EQ)(t)
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
    107889: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return U;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(442837),
        l = t(481060),
        r = t(727637),
        a = t(58540),
        c = t(100527),
        d = t(906732),
        u = t(680295),
        I = t(699516),
        _ = t(5192),
        E = t(785717),
        f = t(221292),
        m = t(910128),
        p = t(318661),
        x = t(428785),
        Z = t(78675),
        h = t(113557),
        v = t(169979),
        S = t(119096),
        T = t(502762),
        A = t(544989),
        g = t(705556),
        N = t(481932),
        L = t(195387),
        j = t(272510),
        R = t(225714),
        O = t(171368),
        b = t(806926),
        C = t(228168),
        M = t(981631),
        P = t(689938),
        y = t(392214);
      function U(e) {
        let {
            user: n,
            currentUser: t,
            guildId: U,
            channelId: D,
            messageId: F,
            roleId: B,
            sessionId: w,
            friendToken: G,
            initialSection: V,
            initialSubsection: k,
            transitionState: Y,
            onClose: W,
            showGuildProfile: K = !0,
            sourceAnalyticsLocations: z = [],
          } = e,
          H = U === M.ME ? void 0 : U,
          { analyticsLocations: q } = (0, d.ZP)([
            ...z,
            c.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          Q = (0, x.Z)({
            user: n,
            currentUser: t,
            location: M.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          X = (0, E.ZB)({
            layout: Q
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: w,
            guildId: H,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K,
          }),
          { persistentCallCtaEnabled: J, activeInviteToCallCtaEnabled: $ } = (0,
          m.l)({ location: "SimplifiedUserProfileModalHeader" }),
          [ee, en] = i.useState(),
          [et, es] = i.useState(),
          ei = (e) => {
            en(e.interactionType), es(e.interactionSourceType);
          },
          eo = (0, p.ZP)(n.id, K ? H : void 0),
          el = (0, p.ZP)(n.id, H),
          er = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
          ea = i.useMemo(() => (null != H ? { [H]: [n.id] } : {}), [H, n.id]);
        (0, a.$)(ea);
        let ec = i.createRef(),
          ed = (0, r.Z)(ec),
          [eu, eI] = i.useState(!1),
          [e_, eE] = i.useState(!1),
          [ef, em] = i.useState(!1),
          ep = () =>
            (null == el ? void 0 : el.guildId) == null
              ? null
              : (null == eo ? void 0 : eo.guildId) != null
                ? (0, s.jsx)(l.MenuItem, {
                    id: "view-main-profile",
                    label: P.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: _.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      W(),
                        (0, O.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !1,
                          friendToken: G,
                          sourceAnalyticsLocations: z,
                        }),
                        (0, f.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: q,
                          ...X,
                        });
                    },
                  })
                : (0, s.jsx)(l.MenuItem, {
                    id: "view-server-profile",
                    label: P.Z.Messages.VIEW_SERVER_PROFILE,
                    subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: _.ZP.getName(H, D, n),
                    }),
                    action: () => {
                      W(),
                        (0, O.openUserProfileModal)({
                          ...X,
                          showGuildProfile: !0,
                          friendToken: G,
                          sourceAnalyticsLocations: z,
                        }),
                        (0, f.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: q,
                          ...X,
                        });
                    },
                  });
        return (0, s.jsx)(d.Gt, {
          value: q,
          children: (0, s.jsx)(E.Mt, {
            value: X,
            children: (0, s.jsxs)(l.ModalRoot, {
              transitionState: Y,
              className: y.root,
              hideShadow: !0,
              "aria-label": P.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, s.jsxs)(T.Z, {
                  user: n,
                  displayProfile: eo,
                  profileType: C.y0.FULL_SIZE,
                  ref: ec,
                  children: [
                    (0, s.jsxs)(A.Z, {
                      profileType: C.y0.FULL_SIZE,
                      children: [
                        (0, s.jsx)(L.Z, {
                          user: n,
                          guildId: H,
                          channelId: D,
                          onClose: W,
                        }),
                        (0, s.jsx)(N.Z, {
                          profileType: C.y0.FULL_SIZE,
                          user: n,
                          friendToken: G,
                        }),
                        (0, s.jsx)(j.Z, {
                          user: n,
                          guildId: H,
                          viewProfileItem: ep(),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("header", {
                      children: [
                        (0, s.jsx)(Z.Z, {
                          user: n,
                          displayProfile: eo,
                          profileType: C.y0.FULL_SIZE,
                        }),
                        (0, s.jsx)(S.Z, {
                          isReply: ef,
                          sent: e_,
                          shown: eu,
                          className: y.toast,
                        }),
                        null != ee &&
                          (0, s.jsx)("div", { className: y.backdrop }),
                        (0, s.jsxs)("div", {
                          className: y.headerInner,
                          children: [
                            (0, s.jsx)(h.Z, {
                              location: "SimplifiedUserProfileModal",
                              user: n,
                              displayProfile: eo,
                              guildId: H,
                              channelId: D,
                              profileType: C.y0.FULL_SIZE,
                              isInteractionSource:
                                et === C.n_.AVATAR || et === C.n_.STATUS,
                              onInteraction: ei,
                              showReplyPopout:
                                ee === C.P.REPLY && et === C.n_.AVATAR,
                              setInteractionToastShown: eI,
                              setInteractionSent: eE,
                              setIsReplyInteraction: em,
                            }),
                            (0, s.jsxs)("div", {
                              className: y.headerButtons,
                              children: [
                                (0, s.jsx)(R.Z, {
                                  user: n,
                                  isCurrentUser: n.id === t.id,
                                  relationshipType: er,
                                  persistentCallCtaEnabled: J,
                                  activeInviteToCallCtaEnabled: $,
                                  friendToken: G,
                                  onClose: W,
                                }),
                                (0, s.jsx)(g.Z, {
                                  user: n,
                                  guildId: H,
                                  onClose: W,
                                }),
                              ],
                            }),
                            (0, s.jsx)(v.Z, {
                              location: "SimplifiedUserProfileModal",
                              user: n,
                              displayProfile: eo,
                              guildId: H,
                              channelId: D,
                              profileType: C.y0.FULL_SIZE,
                              hasEntered: Y === l.ModalTransitionState.ENTERED,
                              isInteractionSource: et === C.n_.STATUS,
                              onInteraction: ei,
                              showReplyPopout:
                                ee === C.P.REPLY && et === C.n_.STATUS,
                              onClose: W,
                              setInteractionToastShown: eI,
                              setInteractionSent: eE,
                              setIsReplyInteraction: em,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(b.Z, {
                      user: n,
                      currentUser: t,
                      channelId: D,
                      displayProfile: eo,
                      initialSection: V,
                      initialSubsection: k,
                      friendToken: G,
                      onClose: W,
                    }),
                  ],
                }),
                (null == eo ? void 0 : eo.profileEffectId) != null &&
                  (0, s.jsx)(u.Z, {
                    profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                    isHovering: ed,
                  }),
              ],
            }),
          }),
        });
      }
    },
    879828: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var s = t(735250),
        i = t(470079),
        o = t(704215),
        l = t(481060),
        r = t(605236),
        a = t(929498),
        c = t(678738),
        d = t(151545),
        u = t(527790),
        I = t(304042),
        _ = t(921944),
        E = t(689938),
        f = t(694842);
      function m(e) {
        let { user: n, currentUser: t, onClose: m } = e,
          { live: p, recent: x, stream: Z } = (0, a.Z)(n.id),
          h = n.id === t.id,
          v = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          i.useEffect(() => {
            if (!!h && !v)
              (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: _.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [h, v]),
          (0, s.jsxs)(l.ScrollerThin, {
            className: f.scroller,
            fade: !0,
            children: [
              (0, s.jsxs)(c.Z, {
                children: [
                  null != Z &&
                    (0, s.jsx)(I.Z, {
                      user: n,
                      currentUser: t,
                      stream: Z,
                      onClose: m,
                    }),
                  p.map((e, i) =>
                    (0, s.jsx)(
                      d.Z,
                      { user: n, currentUser: t, activity: e, onClose: m },
                      "live-".concat(i),
                    ),
                  ),
                ],
              }),
              (0, s.jsx)(c.Z, {
                heading: (0, s.jsxs)("div", {
                  className: f.heading,
                  children: [
                    E.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    (0, s.jsx)(l.Tooltip, {
                      tooltipContentClassName: f.tooltipContent,
                      text: E.Z.Messages
                        .USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
                      children: (e) =>
                        (0, s.jsx)(l.CircleInformationIcon, {
                          ...e,
                          size: "xxs",
                          color: "currentColor",
                        }),
                    }),
                  ],
                }),
                children: x.map((e) =>
                  (0, s.jsx)(u.Z, { user: n, entry: e, onClose: m }, e.id),
                ),
              }),
            ],
          })
        );
      }
    },
    806926: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        o = t(979264),
        l = t(699516),
        r = t(5192),
        a = t(741308),
        c = t(681837),
        d = t(91433),
        u = t(502762),
        I = t(530),
        _ = t(616140),
        E = t(107194),
        f = t(228168),
        m = t(981631),
        p = t(392214);
      function x(e) {
        var n;
        let {
            user: t,
            currentUser: x,
            channelId: Z,
            displayProfile: h,
            initialSection: v,
            initialSubsection: S,
            friendToken: T,
            onClose: A,
          } = e,
          g = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
          N = (0, E.Z)({ user: t, currentUser: x });
        return (0, s.jsxs)("div", {
          className: p.body,
          children: [
            (0, s.jsx)(I.Z, {
              user: t,
              profileType: f.y0.FULL_SIZE,
              nickname: r.ZP.getName(null == h ? void 0 : h.guildId, Z, t),
              pronouns: null == h ? void 0 : h.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, s.jsx)(c.Z, { userId: t.id }),
              tags: (0, s.jsx)(a.Z, {
                displayProfile: h,
                profileType: f.y0.FULL_SIZE,
                onClose: A,
              }),
            }),
            (0, s.jsx)(o.ZP, { userId: t.id }),
            g === m.OGo.PENDING_INCOMING &&
              (0, s.jsx)(u.Z.Overlay, {
                className: p.friendRequestBannerOverlay,
                children: (0, s.jsx)(d.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == h ? void 0 : h.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: Z,
                  friendToken: T,
                  className: p.friendRequestBanner,
                }),
              }),
            (0, s.jsx)(u.Z.Overlay, {
              className: p.overlay,
              children: (0, s.jsx)(_.Z, {
                user: t,
                currentUser: x,
                displayProfile: h,
                items: N,
                initialSection: v,
                initialSubsection: S,
                onClose: A,
              }),
            }),
          ],
        });
      }
    },
    834534: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(706454),
        a = t(430824),
        c = t(914010),
        d = t(785717),
        u = t(359607),
        I = t(642820),
        _ = t(588822),
        E = t(900927),
        f = t(678738),
        m = t(652853),
        p = t(335191),
        x = t(351707),
        Z = t(228168),
        h = t(689938),
        v = t(408277);
      function S(e) {
        let {
            user: n,
            currentUser: t,
            displayProfile: S,
            subsection: T,
            onClose: A,
          } = e,
          { theme: g } = (0, m.z)(),
          { trackUserProfileAction: N } = (0, d.KZ)(),
          L = null == S ? void 0 : S.guildId,
          j = (0, i.e7)([a.Z], () => (null != L ? a.Z.getGuild(L) : null)),
          R = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
          O = (0, i.e7)([r.default], () => r.default.locale),
          b = (0, I.Z)(n.id),
          C = (0, u.Z)(n.id);
        return (0, s.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: v.scroller,
          children: [
            (null == S ? void 0 : S.bio) != null &&
              (null == S ? void 0 : S.bio) !== "" &&
              (0, s.jsx)(_.Z, { userBio: S.bio, setLineClamp: !1 }),
            null != j &&
              (0, s.jsx)(x.Z, {
                user: n,
                currentUser: t,
                guild: j,
                scrollIntoView: T === Z.Tb.ROLES,
              }),
            (0, s.jsx)(f.Z, {
              heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, s.jsx)(E.Z, {
                userId: n.id,
                guildId: null == S ? void 0 : S.guildId,
                tooltipDelay: Z.vB,
              }),
            }),
            b.length > 0 &&
              (0, s.jsx)(f.Z, {
                heading: h.Z.Messages.CONNECTIONS,
                scrollIntoView: T === Z.Tb.CONNECTIONS,
                children: (0, s.jsx)(p.OA, {
                  connectedAccounts: b,
                  className: v.connections,
                  userId: n.id,
                  theme: g,
                  locale: O,
                }),
              }),
            C.length > 0 &&
              (0, s.jsx)(f.Z, {
                heading: h.Z.Messages.APPS,
                children: C.map((e) =>
                  (0, s.jsx)(
                    p.tH,
                    {
                      className: v.appsConnections,
                      applicationRoleConnection: e,
                      locale: O,
                      onApplicationClicked: () => {
                        N({ action: "PRESS_APP_CONNECTION" }), A();
                      },
                      selectedGuildId: null != R ? R : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, s.jsx)(f.Z, {
              heading: h.Z.Messages.NOTE,
              scrollIntoView: T === Z.Tb.NOTE,
              children: (0, s.jsx)(l.Z, {
                userId: n.id,
                className: v.note,
                autoFocus: T === Z.Tb.NOTE,
                onUpdate: () => N({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    351707: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(772848),
        l = t(924826),
        r = t(91192),
        a = t(442837),
        c = t(749210),
        d = t(434404),
        u = t(271383),
        I = t(430824),
        _ = t(496675),
        E = t(700785),
        f = t(785717),
        m = t(256226),
        p = t(678738),
        x = t(314172),
        Z = t(981631),
        h = t(689938),
        v = t(328156);
      function S(e) {
        let {
            user: n,
            currentUser: t,
            guild: a,
            guildMember: c,
            roles: d,
            highestRole: u,
            canManageRoles: I,
            onAddRole: _,
            onRemoveRole: f,
          } = e,
          p = I && null != c,
          S = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0,
          }),
          A = d.length,
          g =
            0 === A
              ? h.Z.Messages.ROLE_LIST_EMPTY
              : h.Z.Messages.ROLES_LIST.format({ numRoles: A }),
          N = d.map((e) => {
            var i;
            return (0, s.jsx)(
              m.Z,
              {
                role: e,
                guildId: a.id,
                disableBorderColor: !0,
                onRemove: () => f(e),
                canRemove: I
                  ? E.r6(a, t.id, u, e)
                  : (null === (i = e.tags) || void 0 === i
                      ? void 0
                      : i.guild_connections) === null && n.id === t.id,
              },
              e.id,
            );
          });
        return (0, s.jsx)(r.bG, {
          navigator: T,
          children: (0, s.jsx)(r.SJ, {
            children: (e) => {
              let { ref: n, ...t } = e;
              return (0, s.jsxs)("div", {
                className: v.root,
                "aria-label": g,
                ref: n,
                ...t,
                children: [
                  N,
                  p &&
                    (0, s.jsx)(x.Z, {
                      guild: a,
                      guildMember: c,
                      numRoles: A,
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
        let { user: n, currentUser: t, guild: o, scrollIntoView: l } = e,
          { trackUserProfileAction: r } = (0, f.KZ)(),
          m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          x = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
          v = null == m ? void 0 : m.roles,
          T = i.useMemo(
            () =>
              null == v || 0 === v.length
                ? []
                : Object.values(x)
                    .filter((e) => v.includes(e.id))
                    .sort((e, n) => {
                      var t, s;
                      let i =
                          (null === (t = e.tags) || void 0 === t
                            ? void 0
                            : t.guild_connections) !== null,
                        o =
                          (null === (s = n.tags) || void 0 === s
                            ? void 0
                            : s.guild_connections) !== null;
                      return i && !o ? 1 : !i && o ? -1 : 0;
                    }),
            [x, v],
          ),
          A = E.e9(o, t.id),
          [g] = (0, a.Wu)([_.Z], () => [
            _.Z.can(Z.Plq.MANAGE_ROLES, o),
            null != o ? _.Z.getGuildVersion(o.id) : null,
          ]),
          N = i.useCallback(
            (e) => {
              var t, s;
              r({ action: "REMOVE_ROLE" });
              let i =
                null !==
                  (s = null == v ? void 0 : v.filter((n) => n !== e.id)) &&
                void 0 !== s
                  ? s
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? c.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [v, o.id, n.id, r],
          ),
          L = i.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let t = null != v ? v : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [v, o.id, n.id, r],
          ),
          j = g && null != m;
        return 0 !== T.length || j
          ? (0, s.jsx)(p.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, s.jsx)(S, {
                user: n,
                currentUser: t,
                guild: o,
                guildMember: m,
                roles: T,
                highestRole: A,
                canManageRoles: g,
                onAddRole: L,
                onRemoveRole: N,
              }),
            })
          : null;
      }
    },
    616140: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120);
      var s = t(735250),
        i = t(470079),
        o = t(442837),
        l = t(706898),
        r = t(481060),
        a = t(387903),
        c = t(246946),
        d = t(785717),
        u = t(27144),
        I = t(100849),
        _ = t(944546),
        E = t(470900),
        f = t(988246),
        m = t(970041),
        p = t(715388),
        x = t(879828),
        Z = t(834534),
        h = t(228168),
        v = t(455749);
      function S(e) {
        let {
            section: n,
            subsection: t,
            user: i,
            currentUser: o,
            displayProfile: l,
            onClose: r,
          } = e,
          { newActivityCardsEnabled: c } = (0, u.z)({
            location: "SimplifiedUserProfileModalTabs",
          });
        return n === h.oh.ACTIVITY && c
          ? (0, s.jsx)(x.Z, { user: i, currentUser: o, onClose: r })
          : n === h.oh.ACTIVITY
            ? (0, s.jsx)(I.Z, {
                showActions: (null == o ? void 0 : o.id) !== i.id,
                user: i,
                type: a.Y.SIMPLIFIED_PROFILE,
                onClose: r,
              })
            : n === h.oh.MUTUAL_FRIENDS
              ? (0, s.jsx)(_.Z, { user: i, onClose: r })
              : n === h.oh.MUTUAL_GUILDS
                ? (0, s.jsx)(E.Z, { user: i, onClose: r })
                : n === h.oh.BOT_DATA_ACCESS
                  ? (0, s.jsx)(m.Z, { user: i })
                  : n === h.oh.BOT_INFO
                    ? (0, s.jsx)(p.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r,
                      })
                    : (0, s.jsx)(Z.Z, {
                        user: i,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r,
                      });
      }
      function T(e) {
        var n, t, a;
        let {
            user: u,
            currentUser: I,
            displayProfile: _,
            items: E,
            initialSection: m = h.oh.USER_INFO,
            initialSubsection: p,
            onClose: x,
          } = e,
          { trackUserProfileAction: Z } = (0, d.KZ)(),
          T = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: A, subsection: g }, N] = i.useState({
            section:
              null !==
                (a =
                  null ===
                    (n = E.find((e) => {
                      let { section: n } = e;
                      return n === m;
                    })) || void 0 === n
                    ? void 0
                    : n.section) && void 0 !== a
                ? a
                : null === (t = E[0]) || void 0 === t
                  ? void 0
                  : t.section,
            subsection: p,
          });
        i.useEffect(() => {
          if (null == E.find((e) => e.section === A))
            N({ section: E[0].section, subsection: void 0 });
        }, [E, A]);
        let L = i.useCallback(
          (e) => {
            Z({ action: "PRESS_SECTION", section: e }),
              N({ section: e, subsection: void 0 });
          },
          [Z, N],
        );
        return T
          ? (0, s.jsx)("div", {
              className: v.container,
              children: (0, s.jsx)(f.Z, {}),
            })
          : (0, s.jsxs)("div", {
              className: v.container,
              children: [
                (0, s.jsx)(l.n, {
                  className: v.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: L,
                  children: E.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, s.jsx)(
                      l.n.Item,
                      {
                        className: v.tabBarItem,
                        id: n,
                        "aria-label": t,
                        children: (0, s.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children: t,
                        }),
                      },
                      n,
                    );
                  }),
                }),
                (0, s.jsx)(S, {
                  items: E,
                  section: A,
                  subsection: g,
                  user: u,
                  currentUser: I,
                  displayProfile: _,
                  onClose: x,
                }),
              ],
            });
      }
    },
    107194: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(653041),
        t(627341);
      var s = t(278074),
        i = t(726059),
        o = t(162267),
        l = t(428785),
        r = t(929498),
        a = t(228168),
        c = t(981631),
        d = t(689938);
      function u(e) {
        var n, t;
        let { user: u, currentUser: I } = e,
          { live: _, recent: E, stream: f } = (0, r.Z)(u.id),
          m =
            null ===
              (n = (0, i.Z)(
                u.id,
                u.id !== (null == I ? void 0 : I.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          p =
            null ===
              (t = (0, o.Z)(
                u.id,
                u.id !== (null == I ? void 0 : I.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          x = (0, l.Z)({
            user: u,
            currentUser: I,
            location: c.Sbl.PROFILE_MODAL_TABS,
          }),
          Z = [
            {
              section: a.oh.USER_INFO,
              text: d.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (_.length > 0 || E.length > 0 || null != f) &&
            Z.push({
              section: a.oh.ACTIVITY,
              text: d.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          u.id !== (null == I ? void 0 : I.id) &&
            x &&
            (Z.push({
              section: a.oh.MUTUAL_FRIENDS,
              text: (0, s.EQ)(m)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }),
                ),
            }),
            Z.push({
              section: a.oh.MUTUAL_GUILDS,
              text: (0, s.EQ)(p)
                .with(
                  void 0,
                  () => d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
                )
                .with(0, () => d.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) =>
                  d.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }),
                ),
            })),
          Z
        );
      }
    },
    682242: function (e, n, t) {
      e.exports = { textarea: "textarea_dde0a8 " + t("787223").inputDefault };
    },
    83661: function (e, n, t) {
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
    91941: function (e, n, t) {
      e.exports = {
        memberSinceWrapper: "memberSinceWrapper_b06bc5",
        memberSince: "memberSince_b06bc5",
        discordIcon: "discordIcon_b06bc5",
        divider: "divider_b06bc5",
      };
    },
    493248: function (e, n, t) {
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
    711298: function (e, n, t) {
      e.exports = {
        userProfileActivity: "userProfileActivity_fc39e7",
        actionColor: "actionColor_fc39e7",
        simplifiedProfileActivity: "simplifiedProfileActivity_fc39e7",
      };
    },
    740458: function (e, n, t) {
      e.exports = {
        connectedAccounts: "connectedAccounts_f3eb60",
        connectedAccountsColumn: "connectedAccountsColumn_f3eb60",
        connectedAccountContainer: "connectedAccountContainer_f3eb60",
        connectedAccountContainerWithMetadata:
          "connectedAccountContainerWithMetadata_f3eb60",
        connectedAccount: "connectedAccount_f3eb60",
        connectedAccountChildren: "connectedAccountChildren_f3eb60",
        connectedAccountChildrenNoIcon: "connectedAccountChildrenNoIcon_f3eb60",
        connectedAccountPoweredBy: "connectedAccountPoweredBy_f3eb60",
        connectedAccountPoweredByText: "connectedAccountPoweredByText_f3eb60",
        connectedAccountIcon: "connectedAccountIcon_f3eb60",
        connectedAccountNameContainer: "connectedAccountNameContainer_f3eb60",
        connectedAccountNameContainerClickable:
          "connectedAccountNameContainerClickable_f3eb60",
        connectedAccountName: "connectedAccountName_f3eb60",
        connectedAccountNameTextContainer:
          "connectedAccountNameTextContainer_f3eb60",
        connectedAccountNameText: "connectedAccountNameText_f3eb60",
        connectedAccountVerifiedIcon: "connectedAccountVerifiedIcon_f3eb60",
        connectedAccountHideIcon: "connectedAccountHideIcon_f3eb60",
        connectedAccountOpenIcon: "connectedAccountOpenIcon_f3eb60",
      };
    },
    353040: function (e, n, t) {
      e.exports = { multipleButtons: "multipleButtons_fcef98" };
    },
    431776: function (e, n, t) {
      e.exports = {
        listRow: "listRow_e4be58",
        listRowContent: "listRowContent_e4be58",
        listName: "listName_e4be58",
        listAvatar: "listAvatar_e4be58",
        listDiscriminator: "listDiscriminator_e4be58",
        empty: "empty_e4be58",
        emptyText: "emptyText_e4be58",
        listScroller: "listScroller_e4be58",
        emptyIconFriends: "emptyIconFriends_e4be58 emptyIcon_e4be58",
        emptyIconGuilds: "emptyIconGuilds_e4be58 emptyIcon_e4be58",
        emptyIconStreamerMode: "emptyIconStreamerMode_e4be58 emptyIcon_e4be58",
      };
    },
    712215: function (e, n, t) {
      e.exports = {
        guildAvatar: "guildAvatar_b26403",
        guildAvatarWithoutIcon: "guildAvatarWithoutIcon_b26403",
        guildNick: "guildNick_b26403",
      };
    },
    116604: function (e, n, t) {
      e.exports = {
        scroller: "scroller_b56b8b",
        row: "row_b56b8b",
        rowIcon: "rowIcon_b56b8b",
        rowText: "rowText_b56b8b",
      };
    },
    392214: function (e, n, t) {
      e.exports = {
        root: "root_bc9cc2",
        headerInner: "headerInner_bc9cc2",
        headerButtons: "headerButtons_bc9cc2",
        messageTextButton: "messageTextButton_bc9cc2",
        messageIconButton: "messageIconButton_bc9cc2",
        body: "body_bc9cc2",
        overlay: "overlay_bc9cc2",
        friendRequestBannerOverlay: "friendRequestBannerOverlay_bc9cc2",
        friendRequestBanner: "friendRequestBanner_bc9cc2",
        backdrop: "backdrop_bc9cc2",
        toast: "toast_bc9cc2",
      };
    },
    694842: function (e, n, t) {
      e.exports = {
        scroller: "scroller_fb646f",
        heading: "heading_fb646f",
        tooltipContent: "tooltipContent_fb646f",
      };
    },
    408277: function (e, n, t) {
      e.exports = {
        scroller: "scroller_c2dcc6",
        connections: "connections_c2dcc6",
        appsConnections: "appsConnections_c2dcc6",
        note: "note_c2dcc6",
      };
    },
    328156: function (e, n, t) {
      e.exports = { root: "root_f88b1e" };
    },
    455749: function (e, n, t) {
      e.exports = {
        container: "container_c1519f",
        tabBar: "tabBar_c1519f",
        tabBarItem: "tabBarItem_c1519f",
      };
    },
    24701: function (e, n, t) {
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
//# sourceMappingURL=a39e1520e96929651b15.js.map
