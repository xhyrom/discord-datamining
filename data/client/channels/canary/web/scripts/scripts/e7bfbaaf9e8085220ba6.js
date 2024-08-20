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
          return p;
        },
      }),
        t(47120);
      var i,
        s = t(735250),
        o = t(470079),
        l = t(699581),
        r = t(442837),
        a = t(481060),
        c = t(34854),
        d = t(702557),
        u = t(246946),
        I = t(981631),
        _ = t(689938),
        f = t(682242);
      function E(e, n, t) {
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
                children: (0, s.jsx)(a.TextAreaAutosize, {
                  ref: this.noteRef,
                  className: f.textarea,
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
            E(this, "noteRef", o.createRef()),
            E(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: t, userId: i, onUpdate: s } = this.props;
              if ((null != t ? t : "") !== n)
                null == s || s(), c.Z.updateNote(i, n);
            }),
            E(this, "handleKeyPress", (e) => {
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
        return (0, s.jsx)(m, { ...e, ...t, hideNote: n });
      }
      E(m, "defaultProps", { autoFocus: !1 });
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
    184242: function (e, n, t) {
      t.d(n, {
        Ac: function () {
          return s;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-08_user_profile_blockee_hide_mutuals",
        label: "User Profile Blockee Hide Mutuals",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable User Profile Blockee Hide Mutuals",
            config: { enabled: !0 },
          },
        ],
      });
      function s(e) {
        let { location: n, autoTrackExposure: t = !0 } = e,
          { enabled: s } = i.useExperiment(
            { location: n },
            { autoTrackExposure: t },
          );
        return s;
      }
    },
    932699: function (e, n, t) {
      t.d(n, {
        G: function () {
          return o;
        },
      }),
        t(789020);
      var i = t(442837),
        s = t(621853);
      let o = (e) => {
        var n;
        let t = (0, i.e7)([s.Z], () => s.Z.getUserProfile(e.id));
        return (
          (null == t ? void 0 : t.bio) === "" &&
          (null == t ? void 0 : t.pronouns) === "" &&
          (null == t ? void 0 : t.banner) === void 0 &&
          (null == t ? void 0 : t.accentColor) === void 0 &&
          (null == t ? void 0 : t.banner) === void 0 &&
          e.flags === e.publicFlags &&
          ((null == t ? void 0 : t.badges) == null ||
            (null == t
              ? void 0
              : null === (n = t.badges) || void 0 === n
                ? void 0
                : n.length) === 0)
        );
      };
    },
    900927: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(399606),
        o = t(481060),
        l = t(275759),
        r = t(565138),
        a = t(706454),
        c = t(271383),
        d = t(430824),
        u = t(709054),
        I = t(689938),
        _ = t(91941);
      function f(e) {
        let { userId: n, guildId: t, textClassName: f, tooltipDelay: E } = e,
          m = (0, s.e7)([a.default], () => a.default.locale),
          p = (0, s.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
          x = (0, s.e7)([c.ZP], () =>
            null != t ? c.ZP.getMember(t, n) : null,
          ),
          v = (0, l.FI)(u.default.extractTimestamp(n), m),
          Z = (0, l.FI)(null == x ? void 0 : x.joinedAt, m);
        return null == p || null == x
          ? (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: f,
              children: v,
            })
          : (0, i.jsxs)("div", {
              className: _.memberSinceWrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: I.Z.Messages.DISCORD_NAME,
                      delay: E,
                      children: (e) =>
                        (0, i.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: _.discordIcon,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: f,
                      children: v,
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: _.divider }),
                (0, i.jsxs)("div", {
                  className: _.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: p.name,
                      delay: E,
                      children: (e) =>
                        (0, i.jsx)(r.Z, {
                          ...e,
                          guild: p,
                          size: r.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: f,
                      children: Z,
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
          return Z;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(481060),
        l = t(100527),
        r = t(906732),
        a = t(138201),
        c = t(785717),
        d = t(221292),
        u = t(318661),
        I = t(299261),
        _ = t(502762),
        f = t(475413),
        E = t(228168),
        m = t(981631),
        p = t(689938),
        x = t(493248),
        v = t(161068);
      function Z(e) {
        let {
            user: n,
            guildId: t,
            channelId: Z,
            messageId: h,
            roleId: S,
            transitionState: T,
            onViewBlockedProfileClick: A,
            showGuildProfile: g = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          b = t === m.ME ? void 0 : t,
          { analyticsLocations: j } = (0, r.ZP)([
            ...N,
            l.Z.BLOCKED_PROFILE_MODAL,
          ]),
          L = (0, c.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: b,
            channelId: Z,
            messageId: h,
            roleId: S,
            showGuildProfile: g,
          }),
          R = [
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
          C = (0, u.ZP)(n.id, g ? b : void 0),
          M = s.createRef();
        return (0, i.jsx)(r.Gt, {
          value: j,
          children: (0, i.jsx)(c.Mt, {
            value: L,
            children: (0, i.jsx)(o.ModalRoot, {
              transitionState: T,
              className: x.root,
              hideShadow: !0,
              "aria-label": p.Z.Messages.USER_PROFILE_MODAL,
              children: (0, i.jsx)(_.Z, {
                user: n,
                displayProfile: C,
                profileType: E.y0.FULL_SIZE,
                ref: M,
                children: (0, i.jsxs)("div", {
                  className: x.container,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: v,
                      className: x.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: x.body,
                      children: [
                        (0, i.jsx)(I.Z, { user: n, guildId: b }),
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          className: x.header,
                          children:
                            p.Z.Messages
                              .USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE,
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            p.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format(
                              { username: n.username },
                            ),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children:
                            p.Z.Messages
                              .USER_PROFILE_BLOCKED_MODAL_BODY_CONFIRMATION,
                        }),
                        (0, i.jsx)("div", {
                          className: x.safetyTable,
                          children: R.map((e, n) => {
                            let { icon: t, description: s } = e;
                            return (0, i.jsx)(
                              a.Z,
                              {
                                icon: t,
                                title: s,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsx)(f.tG, {
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
    100849: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(735250),
        s = t(470079),
        o = t(120356),
        l = t.n(o),
        r = t(442837),
        a = t(481060),
        c = t(717881),
        d = t(387903),
        u = t(906732),
        I = t(199902),
        _ = t(158776),
        f = t(785717),
        E = t(221292),
        m = t(981631),
        p = t(711298),
        x = t(431776);
      function v(e) {
        let { user: n, type: t, showActions: o, onClose: v } = e,
          Z = (0, r.e7)([I.Z], () => null != I.Z.getAnyStreamForUser(n.id)),
          h = (0, r.e7)([_.Z], () => _.Z.getActivities(n.id)),
          S = s.useMemo(
            () => h.filter((e) => e.type !== m.IIU.CUSTOM_STATUS),
            [h],
          ),
          T = s.useMemo(
            () => (Z ? S.find((e) => e.type === m.IIU.PLAYING) : null),
            [S, Z],
          ),
          A = s.useMemo(() => S.filter((e) => e !== T), [T, S]),
          { analyticsLocations: g, newestAnalyticsLocation: N } = (0, u.ZP)(),
          { context: b, trackUserProfileAction: j } = (0, f.KZ)(),
          L = {
            location: {
              page: m.ZY5.USER_PROFILE,
              section: m.jXE.PROFILE_MODAL,
            },
          };
        return (0, i.jsxs)(a.ScrollerThin, {
          className: x.listScroller,
          fade: !0,
          children: [
            Z
              ? (0, i.jsx)(c.Z, {
                  type: t,
                  user: n,
                  source: N,
                  className: p.userProfileActivity,
                  showChannelDetails: t === d.Y.SIMPLIFIED_PROFILE,
                  activity: T,
                  actionColor: p.actionColor,
                  analyticsParams: L,
                  showActions: o,
                  onClose: v,
                  onAction: () => {
                    j({ action: "JOIN_ACTIVITY" }),
                      (0, E.Ac)({
                        activityType: m.IIU.STREAMING,
                        activityName: null == T ? void 0 : T.name,
                        activityPlatform: null == T ? void 0 : T.platform,
                        activitySessionId: null == T ? void 0 : T.session_id,
                        applicationId: null == T ? void 0 : T.application_id,
                        analyticsLocations: g,
                        ...b,
                      });
                  },
                })
              : null,
            A.map((e) =>
              (0, i.jsx)(
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
                  analyticsParams: L,
                  showActions: o,
                  onClose: v,
                  onAction: () => {
                    j({ action: "JOIN_ACTIVITY" }),
                      (0, E.Ac)({
                        activityType: e.type,
                        activityName: e.name,
                        activityPlatform: e.platform,
                        activitySessionId: e.session_id,
                        applicationId: e.application_id,
                        analyticsLocations: g,
                        ...b,
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
          return f;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(481060),
        o = t(194359),
        l = t(906732),
        r = t(475413),
        a = t(261253),
        c = t(7242),
        d = t(934861),
        u = t(981631),
        I = t(689938),
        _ = t(353040);
      function f(e) {
        let {
            isCurrentUser: n,
            user: t,
            relationshipType: f,
            friendToken: E,
            persistentCallCtaEnabled: m = !1,
            activeInviteToCallCtaEnabled: p = !1,
            onClose: x,
          } = e,
          { newestAnalyticsLocation: v } = (0, l.ZP)();
        if (n || f === u.OGo.BLOCKED) return null;
        let Z = m ? (0, i.jsx)(a.Z, { user: t, onClose: x }) : null,
          h = (0, i.jsx)(c.Z, { user: t, onClose: x });
        if (f === u.OGo.FRIEND && p && null != h)
          return (0, i.jsxs)("div", {
            className: _.multipleButtons,
            children: [(0, i.jsx)(d.v, { userId: t.id, onClose: x }), h],
          });
        if (f === u.OGo.FRIEND || t.bot)
          return (0, i.jsxs)("div", {
            className: _.multipleButtons,
            children: [Z, (0, i.jsx)(d.c, { userId: t.id, onClose: x })],
          });
        if (f === u.OGo.PENDING_OUTGOING || f === u.OGo.PENDING_INCOMING)
          return p && null != h
            ? (0, i.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, i.jsx)(r.ef, {
                    icon: s.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  (0, i.jsx)(d.v, { userId: t.id, onClose: x }),
                  h,
                ],
              })
            : (0, i.jsxs)("div", {
                className: _.multipleButtons,
                children: [
                  (0, i.jsx)(r.ef, {
                    icon: s.UserClockIcon,
                    tooltipText: I.Z.Messages.FRIENDS_SECTION_PENDING,
                    disabled: !0,
                  }),
                  Z,
                  (0, i.jsx)(d.c, { userId: t.id, onClose: x }),
                ],
              });
        return p && null != h
          ? (0, i.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                (0, i.jsx)(r.ef, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: s.UserPlusIcon,
                  tooltipText: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: t.id,
                      context: { location: v },
                      friendToken: E,
                    });
                  },
                }),
                (0, i.jsx)(d.v, { userId: t.id, onClose: x }),
                h,
              ],
            })
          : (0, i.jsxs)("div", {
              className: _.multipleButtons,
              children: [
                Z,
                (0, i.jsx)(d.v, { userId: t.id, onClose: x }),
                (0, i.jsx)(r.tG, {
                  action: "SEND_FRIEND_REQUEST",
                  icon: s.UserPlusIcon,
                  text: I.Z.Messages.USER_PROFILE_ADD_FRIEND,
                  color: s.Button.Colors.BRAND,
                  onClick: () => {
                    o.Z.addRelationship({
                      userId: t.id,
                      context: { location: v },
                      friendToken: E,
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
      var i = t(735250),
        s = t(470079),
        o = t(512722),
        l = t.n(o),
        r = t(442837),
        a = t(100527),
        c = t(699516),
        d = t(594174),
        u = t(971393),
        I = t(787018),
        _ = t(853825),
        f = t(41527),
        E = t(107889);
      let m = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
      function p(e) {
        let { location: n, user: t, ...o } = e,
          a = (0, r.e7)([d.default], () => d.default.getCurrentUser());
        l()(
          null != a,
          "UserProfileModalExperimentWrapper: currentUser cannot be undefined",
        );
        let p = (0, r.e7)([c.Z], () => c.Z.isBlocked(t.id)),
          [x, v] = s.useState(p),
          Z = (0, u.sS)({ location: n });
        s.useEffect(() => {
          v(p);
        }, [p]);
        let h = !m.some((e) => {
          var n;
          return (
            null !== (n = o.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return x && Z && h
          ? (0, i.jsx)(I.Z, {
              user: t,
              currentUser: a,
              onViewBlockedProfileClick: () => v(!1),
              ...o,
            })
          : t.isNonUserBot()
            ? (0, i.jsx)(_.Z, { ...o, user: t, currentUser: a })
            : t.bot
              ? (0, i.jsx)(f.Z, { ...o, user: t, currentUser: a })
              : (0, i.jsx)(E.Z, { ...o, user: t, currentUser: a });
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
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(239091),
        r = t(129861),
        a = t(906732),
        c = t(158776),
        d = t(785717),
        u = t(726059),
        I = t(171368),
        _ = t(981631),
        f = t(689938),
        E = t(431776);
      let m = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function p(e) {
        let { user: n, status: a, onSelect: d } = e,
          u = (0, s.e7)([c.Z], () => c.Z.isMobileOnline(n.id));
        return (0, i.jsxs)(o.Clickable, {
          className: E.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("79695"),
                t.e("69220"),
                t.e("46611"),
              ]).then(t.bind(t, 881351));
              return (t) => (0, i.jsx)(e, { ...t, user: n });
            });
          },
          children: [
            (0, i.jsx)(o.Avatar, {
              src: n.getAvatarURL(void 0, m),
              "aria-label": n.username,
              size: o.AvatarSizes.SIZE_40,
              status: a,
              isMobile: u,
              className: E.listAvatar,
            }),
            (0, i.jsx)(r.Z, {
              user: n,
              className: E.listName,
              discriminatorClass: E.listDiscriminator,
            }),
          ],
        });
      }
      function x(e) {
        let { user: n, onClose: t } = e,
          { mutualFriends: s } = (0, u.Z)(n.id),
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
        return (0, i.jsx)(o.ScrollerThin, {
          className: E.listScroller,
          fade: !0,
          children:
            null == s
              ? (0, i.jsx)("div", {
                  className: E.empty,
                  children: (0, i.jsx)(o.Spinner, {}),
                })
              : 0 === s.length
                ? (0, i.jsxs)("div", {
                    className: E.empty,
                    children: [
                      (0, i.jsx)("div", { className: E.emptyIconFriends }),
                      (0, i.jsx)("div", {
                        className: E.emptyText,
                        children: f.Z.Messages.NO_MUTUAL_FRIENDS,
                      }),
                    ],
                  })
                : s.map((e) => {
                    let { key: n, user: t, status: s } = e;
                    return (0, i.jsx)(
                      p,
                      { user: t, status: s, onSelect: () => c(t.id) },
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
      var i = t(735250);
      t(470079);
      var s = t(120356),
        o = t.n(s),
        l = t(780384),
        r = t(481060),
        a = t(239091),
        c = t(37234),
        d = t(410030),
        u = t(44315),
        I = t(565138),
        _ = t(769654),
        f = t(51144),
        E = t(162267),
        m = t(228168),
        p = t(981631),
        x = t(689938),
        v = t(431776),
        Z = t(712215);
      let h = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
      function S(e) {
        let { user: n, guild: s, nick: c, theme: d, onSelect: _ } = e,
          E = n.hasAvatarForGuild(s.id);
        return (0, i.jsxs)(r.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: v.listRow,
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
                t.e("41127"),
              ]).then(t.bind(t, 545135));
              return (n) => (0, i.jsx)(e, { ...n, guild: s });
            });
          },
          children: [
            (0, i.jsx)(I.Z, {
              tabIndex: -1,
              guild: s,
              showBadge: !0,
              className: o()(
                v.listAvatar,
                null == s.icon ? Z.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, l.wj)(d) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500,
              ),
              badgeTooltipColor: r.TooltipColors.PRIMARY,
              badgeTooltipDelay: m.vB,
              size: I.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, i.jsxs)("div", {
              className: v.listRowContent,
              children: [
                (0, i.jsx)("div", {
                  className: v.listName,
                  children: s.toString(),
                }),
                E || null != c
                  ? (0, i.jsxs)("div", {
                      className: Z.guildNick,
                      children: [
                        E &&
                          (0, i.jsx)(r.Avatar, {
                            src: n.getAvatarURL(s.id, h),
                            size: r.AvatarSizes.SIZE_16,
                            className: Z.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != c ? c : f.ZP.getName(n),
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
          { mutualGuilds: s } = (0, E.Z)(n.id),
          o = (0, d.ZP)(),
          l = (e) => {
            (0, _.X)(e), t(), (0, c.xf)();
          };
        return (0, i.jsx)(r.ScrollerThin, {
          className: v.listScroller,
          fade: !0,
          children:
            null == s
              ? (0, i.jsx)("div", {
                  className: v.empty,
                  children: (0, i.jsx)(r.Spinner, {}),
                })
              : 0 === s.length
                ? (0, i.jsxs)("div", {
                    className: v.empty,
                    children: [
                      (0, i.jsx)("div", { className: v.emptyIconGuilds }),
                      (0, i.jsx)("div", {
                        className: v.emptyText,
                        children: x.Z.Messages.NO_MUTUAL_GUILDS,
                      }),
                    ],
                  })
                : s.map((e) => {
                    let { guild: t, nick: s } = e;
                    return (0, i.jsx)(
                      S,
                      {
                        user: n,
                        guild: t,
                        nick: s,
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
      var i = t(735250);
      t(470079);
      var s = t(689938),
        o = t(431776);
      function l() {
        return (0, i.jsxs)("div", {
          className: o.empty,
          children: [
            (0, i.jsx)("div", { className: o.emptyIconStreamerMode }),
            (0, i.jsx)("div", {
              className: o.emptyText,
              children: s.Z.Messages.STREAMER_MODE_ENABLED,
            }),
          ],
        });
      }
    },
    853825: function (e, n, t) {
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
        a = t(906732),
        c = t(680295),
        d = t(5192),
        u = t(785717),
        I = t(318661),
        _ = t(78675),
        f = t(741308),
        E = t(588822),
        m = t(899007),
        p = t(900927),
        x = t(678738),
        v = t(502762),
        Z = t(530),
        h = t(679332),
        S = t(544989),
        T = t(228168),
        A = t(981631),
        g = t(689938),
        N = t(392214),
        b = t(408277),
        j = t(455749);
      function L(e) {
        let {
            user: n,
            guildId: t,
            channelId: L,
            messageId: R,
            roleId: C,
            sessionId: M,
            transitionState: O,
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
            sourceSessionId: M,
            guildId: U,
            channelId: L,
            messageId: R,
            roleId: C,
          }),
          w = s.createRef(),
          G = (0, l.Z)(w);
        return (0, i.jsx)(a.Gt, {
          value: F,
          children: (0, i.jsx)(u.Mt, {
            value: B,
            children: (0, i.jsxs)(o.ModalRoot, {
              transitionState: O,
              className: N.root,
              hideShadow: !0,
              "aria-label": g.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, i.jsxs)(v.Z, {
                  user: n,
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  ref: w,
                  children: [
                    (0, i.jsx)(S.Z, {
                      profileType: T.y0.FULL_SIZE,
                      children: (0, i.jsx)(h.Z, { user: n }),
                    }),
                    (0, i.jsxs)("header", {
                      children: [
                        (0, i.jsx)(_.Z, {
                          user: n,
                          displayProfile: D,
                          profileType: T.y0.FULL_SIZE,
                          hasProfileEffect:
                            (null == D ? void 0 : D.profileEffectId) != null,
                        }),
                        (0, i.jsx)("div", {
                          className: N.headerInner,
                          children: (0, i.jsx)(m.Z, {
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
                        (0, i.jsx)(Z.Z, {
                          user: n,
                          profileType: T.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, L, n),
                          pronouns: null == D ? void 0 : D.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, i.jsx)(f.Z, {
                            displayProfile: D,
                            profileType: T.y0.FULL_SIZE,
                            onClose: P,
                          }),
                        }),
                        (0, i.jsx)(v.Z.Overlay, {
                          className: N.overlay,
                          children: (0, i.jsxs)("div", {
                            className: j.container,
                            children: [
                              (0, i.jsx)(o.TabBar, {
                                className: j.tabBar,
                                type: "top",
                                selectedItem: T.oh.BOT_INFO,
                                onItemSelect: A.dG4,
                                children: (0, i.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: j.tabBarItem,
                                    id: T.oh.BOT_INFO,
                                    "aria-label":
                                      g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    children: (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children:
                                        g.Z.Messages.USER_PROFILE_ABOUT_ME,
                                    }),
                                  },
                                  T.oh.BOT_INFO,
                                ),
                              }),
                              (0, i.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: b.scroller,
                                children: [
                                  (0, i.jsx)(E.Z, {
                                    userId: n.id,
                                    userBio: null == D ? void 0 : D.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, i.jsx)(x.Z, {
                                    heading:
                                      g.Z.Messages.BOT_PROFILE_CREATED_ON,
                                    children: (0, i.jsx)(p.Z, {
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
                  (0, i.jsx)(c.Z, {
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
      var i = t(735250);
      t(470079);
      var s = t(597312),
        o = t(442837),
        l = t(481060),
        r = t(860719),
        a = t(621853),
        c = t(689938),
        d = t(116604);
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
            hasGuildMembers: f,
          } = (0, r.w)({ flags: null == t ? void 0 : t.flags });
        return (0, i.jsxs)(s.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            I &&
              (0, i.jsx)(u, {
                icon: l.ChatIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY,
              }),
            _ &&
              (0, i.jsx)(u, {
                icon: l.GameControllerIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY,
              }),
            f &&
              (0, i.jsx)(u, {
                icon: l.GroupIcon,
                title: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                description: c.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY,
              }),
            (0, i.jsx)(l.Text, {
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
      var i = t(735250);
      t(470079);
      var s = t(481060),
        o = t(100527),
        l = t(906732),
        r = t(5192),
        a = t(785717),
        c = t(318661),
        d = t(78675),
        u = t(741308),
        I = t(899007),
        _ = t(438163),
        f = t(681837),
        E = t(502762),
        m = t(530),
        p = t(645410),
        x = t(437758),
        v = t(357836),
        Z = t(544989),
        h = t(934861),
        S = t(616140),
        T = t(29530),
        A = t(228168),
        g = t(981631),
        N = t(689938),
        b = t(392214);
      function j(e) {
        let {
            user: n,
            currentUser: t,
            guildId: j,
            channelId: L,
            messageId: R,
            roleId: C,
            sessionId: M,
            initialSection: O,
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
            sourceSessionId: M,
            guildId: F,
            channelId: L,
            messageId: R,
            roleId: C,
          }),
          k = (0, T.Z)(n);
        return (0, i.jsx)(l.Gt, {
          value: w,
          children: (0, i.jsx)(a.Mt, {
            value: G,
            children: (0, i.jsx)(s.ModalRoot, {
              transitionState: y,
              className: b.root,
              hideShadow: !0,
              "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
              children: (0, i.jsxs)(E.Z, {
                user: n,
                displayProfile: B,
                profileType: A.y0.FULL_SIZE,
                children: [
                  (0, i.jsx)(Z.Z, {
                    profileType: A.y0.FULL_SIZE,
                    children: (0, i.jsx)(x.Z, { user: n, guildId: F }),
                  }),
                  (0, i.jsxs)("header", {
                    children: [
                      (0, i.jsx)(d.Z, {
                        user: n,
                        displayProfile: B,
                        profileType: A.y0.FULL_SIZE,
                        hasProfileEffect:
                          (null == B ? void 0 : B.profileEffectId) != null,
                      }),
                      (0, i.jsxs)("div", {
                        className: b.headerInner,
                        children: [
                          (0, i.jsx)(I.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: F,
                            channelId: L,
                            profileType: A.y0.FULL_SIZE,
                          }),
                          (0, i.jsxs)("div", {
                            className: b.headerButtons,
                            children: [
                              (0, i.jsx)(h.c, {
                                userId: n.id,
                                onClose: U,
                                className: b.messageTextButton,
                              }),
                              (0, i.jsx)(h.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: b.messageIconButton,
                              }),
                              (0, i.jsx)(v.Z, { user: n, guildId: F }),
                              (0, i.jsx)(p.Z, { user: n }),
                            ],
                          }),
                          (0, i.jsx)(_.Z, {
                            user: n,
                            profileType: A.y0.FULL_SIZE,
                            hasEntered: y === s.ModalTransitionState.ENTERED,
                            onClose: U,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: b.body,
                    children: [
                      (0, i.jsx)(m.Z, {
                        user: n,
                        profileType: A.y0.FULL_SIZE,
                        nickname: r.ZP.getName(F, L, n),
                        pronouns: null == B ? void 0 : B.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, i.jsx)(f.Z, { userId: n.id }),
                        tags: (0, i.jsx)(u.Z, {
                          displayProfile: B,
                          profileType: A.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, i.jsx)(E.Z.Overlay, {
                        className: b.overlay,
                        children: (0, i.jsx)(S.Z, {
                          user: n,
                          currentUser: t,
                          displayProfile: B,
                          items: k,
                          initialSection: null != O ? O : A.oh.BOT_INFO,
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
          return Z;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(592125),
        a = t(430824),
        c = t(944486),
        d = t(785717),
        u = t(621853),
        I = t(588822),
        _ = t(940730),
        f = t(900927),
        E = t(678738),
        m = t(351707),
        p = t(228168),
        x = t(689938),
        v = t(408277);
      function Z(e) {
        var n;
        let {
            user: t,
            currentUser: Z,
            displayProfile: h,
            subsection: S,
            onClose: T,
          } = e,
          { trackUserProfileAction: A } = (0, d.KZ)(),
          g = (0, s.e7)([a.Z], () =>
            (null == h ? void 0 : h.guildId) != null
              ? a.Z.getGuild(h.guildId)
              : null,
          ),
          N = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          b = (0, s.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: v.scroller,
          children: [
            (null == h ? void 0 : h.bio) != null &&
              (null == h ? void 0 : h.bio) !== "" &&
              (0, i.jsx)(I.Z, { userBio: h.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != b &&
              (0, i.jsx)(_.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: b,
                guildId:
                  null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: T,
              }),
            null != g &&
              (0, i.jsx)(m.Z, {
                user: t,
                currentUser: Z,
                guild: g,
                scrollIntoView: S === p.Tb.ROLES,
              }),
            (0, i.jsx)(E.Z, {
              heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
              children: (0, i.jsx)(f.Z, {
                userId: t.id,
                guildId: null == h ? void 0 : h.guildId,
                tooltipDelay: p.vB,
              }),
            }),
            (0, i.jsx)(E.Z, {
              heading: x.Z.Messages.NOTE,
              scrollIntoView: S === p.Tb.NOTE,
              children: (0, i.jsx)(l.Z, {
                userId: t.id,
                className: v.note,
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
      var i = t(278074),
        s = t(162267),
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
    107889: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120);
      var i = t(735250),
        s = t(470079),
        o = t(442837),
        l = t(481060),
        r = t(727637),
        a = t(58540),
        c = t(100527),
        d = t(906732),
        u = t(680295),
        I = t(699516),
        _ = t(5192),
        f = t(785717),
        E = t(221292),
        m = t(910128),
        p = t(318661),
        x = t(78675),
        v = t(113557),
        Z = t(169979),
        h = t(119096),
        S = t(502762),
        T = t(544989),
        A = t(705556),
        g = t(481932),
        N = t(195387),
        b = t(272510),
        j = t(225714),
        L = t(171368),
        R = t(806926),
        C = t(228168),
        M = t(981631),
        O = t(689938),
        P = t(392214);
      function y(e) {
        let {
            user: n,
            currentUser: t,
            guildId: y,
            channelId: U,
            messageId: D,
            roleId: F,
            sessionId: B,
            friendToken: w,
            initialSection: G,
            initialSubsection: k,
            transitionState: V,
            onClose: Y,
            showGuildProfile: W = !0,
            sourceAnalyticsLocations: K = [],
          } = e,
          z = y === M.ME ? void 0 : y,
          { analyticsLocations: H } = (0, d.ZP)([
            ...K,
            c.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          q = (0, f.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: B,
            guildId: z,
            channelId: U,
            messageId: D,
            roleId: F,
            showGuildProfile: W,
          }),
          { persistentCallCtaEnabled: Q, activeInviteToCallCtaEnabled: X } = (0,
          m.l)({ location: "SimplifiedUserProfileModalHeader" }),
          [J, $] = s.useState(),
          [ee, en] = s.useState(),
          et = (e) => {
            $(e.interactionType), en(e.interactionSourceType);
          },
          ei = (0, p.ZP)(n.id, W ? z : void 0),
          es = (0, p.ZP)(n.id, z),
          eo = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
          el = s.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
        (0, a.$)(el);
        let er = s.createRef(),
          ea = (0, r.Z)(er),
          [ec, ed] = s.useState(!1),
          [eu, eI] = s.useState(!1),
          [e_, ef] = s.useState(!1),
          eE = () =>
            (null == es ? void 0 : es.guildId) == null
              ? null
              : (null == ei ? void 0 : ei.guildId) != null
                ? (0, i.jsx)(l.MenuItem, {
                    id: "view-main-profile",
                    label: O.Z.Messages.VIEW_MAIN_PROFILE,
                    subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: _.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      Y(),
                        (0, L.openUserProfileModal)({
                          ...q,
                          showGuildProfile: !1,
                          friendToken: w,
                          sourceAnalyticsLocations: K,
                        }),
                        (0, E.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: H,
                          ...q,
                        });
                    },
                  })
                : (0, i.jsx)(l.MenuItem, {
                    id: "view-server-profile",
                    label: O.Z.Messages.VIEW_SERVER_PROFILE,
                    subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({
                      displayName: _.ZP.getName(z, U, n),
                    }),
                    action: () => {
                      Y(),
                        (0, L.openUserProfileModal)({
                          ...q,
                          showGuildProfile: !0,
                          friendToken: w,
                          sourceAnalyticsLocations: K,
                        }),
                        (0, E.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: H,
                          ...q,
                        });
                    },
                  });
        return (0, i.jsx)(d.Gt, {
          value: H,
          children: (0, i.jsx)(f.Mt, {
            value: q,
            children: (0, i.jsxs)(l.ModalRoot, {
              transitionState: V,
              className: P.root,
              hideShadow: !0,
              "aria-label": O.Z.Messages.USER_PROFILE_MODAL,
              children: [
                (0, i.jsxs)(S.Z, {
                  user: n,
                  displayProfile: ei,
                  profileType: C.y0.FULL_SIZE,
                  ref: er,
                  children: [
                    (0, i.jsxs)(T.Z, {
                      profileType: C.y0.FULL_SIZE,
                      children: [
                        (0, i.jsx)(N.Z, {
                          user: n,
                          guildId: z,
                          channelId: U,
                          onClose: Y,
                        }),
                        (0, i.jsx)(g.Z, {
                          profileType: C.y0.FULL_SIZE,
                          user: n,
                          friendToken: w,
                        }),
                        (0, i.jsx)(b.Z, {
                          user: n,
                          guildId: z,
                          viewProfileItem: eE(),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("header", {
                      children: [
                        (0, i.jsx)(x.Z, {
                          user: n,
                          displayProfile: ei,
                          profileType: C.y0.FULL_SIZE,
                          hasProfileEffect:
                            (null == ei ? void 0 : ei.profileEffectId) != null,
                        }),
                        (0, i.jsx)(h.Z, {
                          isReply: e_,
                          sent: eu,
                          shown: ec,
                          className: P.toast,
                        }),
                        null != J &&
                          (0, i.jsx)("div", { className: P.backdrop }),
                        (0, i.jsxs)("div", {
                          className: P.headerInner,
                          children: [
                            (0, i.jsx)(v.Z, {
                              location: "SimplifiedUserProfileModal",
                              user: n,
                              displayProfile: ei,
                              guildId: z,
                              channelId: U,
                              profileType: C.y0.FULL_SIZE,
                              isInteractionSource:
                                ee === C.n_.AVATAR || ee === C.n_.STATUS,
                              onInteraction: et,
                              showReplyPopout:
                                J === C.P.REPLY && ee === C.n_.AVATAR,
                              setInteractionToastShown: ed,
                              setInteractionSent: eI,
                              setIsReplyInteraction: ef,
                            }),
                            (0, i.jsxs)("div", {
                              className: P.headerButtons,
                              children: [
                                (0, i.jsx)(j.Z, {
                                  user: n,
                                  isCurrentUser: n.id === t.id,
                                  relationshipType: eo,
                                  persistentCallCtaEnabled: Q,
                                  activeInviteToCallCtaEnabled: X,
                                  friendToken: w,
                                  onClose: Y,
                                }),
                                (0, i.jsx)(A.Z, {
                                  user: n,
                                  guildId: z,
                                  onClose: Y,
                                }),
                              ],
                            }),
                            (0, i.jsx)(Z.Z, {
                              location: "SimplifiedUserProfileModal",
                              user: n,
                              displayProfile: ei,
                              guildId: z,
                              channelId: U,
                              profileType: C.y0.FULL_SIZE,
                              hasEntered: V === l.ModalTransitionState.ENTERED,
                              isInteractionSource: ee === C.n_.STATUS,
                              onInteraction: et,
                              showReplyPopout:
                                J === C.P.REPLY && ee === C.n_.STATUS,
                              onClose: Y,
                              setInteractionToastShown: ed,
                              setInteractionSent: eI,
                              setIsReplyInteraction: ef,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(R.Z, {
                      user: n,
                      currentUser: t,
                      channelId: U,
                      displayProfile: ei,
                      initialSection: G,
                      initialSubsection: k,
                      friendToken: w,
                      onClose: Y,
                    }),
                  ],
                }),
                (null == ei ? void 0 : ei.profileEffectId) != null &&
                  (0, i.jsx)(u.Z, {
                    profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                    isHovering: ea,
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
      var i = t(735250),
        s = t(470079),
        o = t(704215),
        l = t(481060),
        r = t(605236),
        a = t(929498),
        c = t(678738),
        d = t(151545),
        u = t(527790),
        I = t(304042),
        _ = t(921944),
        f = t(689938),
        E = t(694842);
      function m(e) {
        let { user: n, currentUser: t, onClose: m } = e,
          { live: p, recent: x, stream: v } = (0, a.Z)(n.id),
          Z = n.id === t.id,
          h = (0, r.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          s.useEffect(() => {
            if (!!Z && !h)
              (0, r.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: _.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [Z, h]),
          (0, i.jsxs)(l.ScrollerThin, {
            className: E.scroller,
            fade: !0,
            children: [
              (0, i.jsxs)(c.Z, {
                children: [
                  null != v &&
                    (0, i.jsx)(I.Z, {
                      user: n,
                      currentUser: t,
                      stream: v,
                      onClose: m,
                    }),
                  p.map((e, s) =>
                    (0, i.jsx)(
                      d.Z,
                      { user: n, currentUser: t, activity: e, onClose: m },
                      "live-".concat(s),
                    ),
                  ),
                ],
              }),
              (0, i.jsx)(c.Z, {
                heading: (0, i.jsxs)("div", {
                  className: E.heading,
                  children: [
                    f.Z.Messages.USER_PROFILE_ACTIVITY_RECENT_ACTIVITY,
                    (0, i.jsx)(l.Tooltip, {
                      tooltipContentClassName: E.tooltipContent,
                      text: f.Z.Messages
                        .USER_PROFILE_RECENT_ACTIVITY_INFORMATION_TOOLTIP,
                      children: (e) =>
                        (0, i.jsx)(l.CircleInformationIcon, {
                          ...e,
                          size: "xxs",
                          color: "currentColor",
                        }),
                    }),
                  ],
                }),
                children: x.map((e) =>
                  (0, i.jsx)(u.Z, { user: n, entry: e, onClose: m }, e.id),
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
          return p;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(699516),
        l = t(5192),
        r = t(741308),
        a = t(681837),
        c = t(91433),
        d = t(502762),
        u = t(530),
        I = t(616140),
        _ = t(107194),
        f = t(228168),
        E = t(981631),
        m = t(392214);
      function p(e) {
        var n;
        let {
            user: t,
            currentUser: p,
            channelId: x,
            displayProfile: v,
            initialSection: Z,
            initialSubsection: h,
            friendToken: S,
            onClose: T,
          } = e,
          A = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
          g = (0, _.Z)({ user: t, currentUser: p });
        return (0, i.jsxs)("div", {
          className: m.body,
          children: [
            (0, i.jsx)(u.Z, {
              user: t,
              profileType: f.y0.FULL_SIZE,
              nickname: l.ZP.getName(null == v ? void 0 : v.guildId, x, t),
              pronouns: null == v ? void 0 : v.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, i.jsx)(a.Z, { userId: t.id }),
              tags: (0, i.jsx)(r.Z, {
                displayProfile: v,
                profileType: f.y0.FULL_SIZE,
                onClose: T,
              }),
            }),
            A === E.OGo.PENDING_INCOMING &&
              (0, i.jsx)(d.Z.Overlay, {
                className: m.friendRequestBannerOverlay,
                children: (0, i.jsx)(c.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == v ? void 0 : v.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: x,
                  friendToken: S,
                  className: m.friendRequestBanner,
                }),
              }),
            (0, i.jsx)(d.Z.Overlay, {
              className: m.overlay,
              children: (0, i.jsx)(I.Z, {
                user: t,
                currentUser: p,
                displayProfile: v,
                items: g,
                initialSection: Z,
                initialSubsection: h,
                onClose: T,
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
      var i = t(735250);
      t(470079);
      var s = t(442837),
        o = t(481060),
        l = t(666520),
        r = t(706454),
        a = t(430824),
        c = t(914010),
        d = t(785717),
        u = t(532776),
        I = t(648067),
        _ = t(588822),
        f = t(900927),
        E = t(678738),
        m = t(652853),
        p = t(335191),
        x = t(351707),
        v = t(228168),
        Z = t(689938),
        h = t(408277);
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
          b = null == S ? void 0 : S.guildId,
          j = (0, s.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
          L = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
          R = (0, s.e7)([r.default], () => r.default.locale),
          C = (0, I.Z)(n.id),
          M = (0, u.Z)(n.id);
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: h.scroller,
          children: [
            (null == S ? void 0 : S.bio) != null &&
              (null == S ? void 0 : S.bio) !== "" &&
              (0, i.jsx)(_.Z, { userBio: S.bio, setLineClamp: !1 }),
            null != j &&
              (0, i.jsx)(x.Z, {
                user: n,
                currentUser: t,
                guild: j,
                scrollIntoView: T === v.Tb.ROLES,
              }),
            (0, i.jsx)(E.Z, {
              heading: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
              children: (0, i.jsx)(f.Z, {
                userId: n.id,
                guildId: null == S ? void 0 : S.guildId,
                tooltipDelay: v.vB,
              }),
            }),
            C.length > 0 &&
              (0, i.jsx)(E.Z, {
                heading: Z.Z.Messages.CONNECTIONS,
                scrollIntoView: T === v.Tb.CONNECTIONS,
                children: (0, i.jsx)(p.OA, {
                  connectedAccounts: C,
                  className: h.connections,
                  userId: n.id,
                  theme: g,
                  locale: R,
                }),
              }),
            M.length > 0 &&
              (0, i.jsx)(E.Z, {
                heading: Z.Z.Messages.APPS,
                children: M.map((e) =>
                  (0, i.jsx)(
                    p.tH,
                    {
                      className: h.appsConnections,
                      applicationRoleConnection: e,
                      locale: R,
                      onApplicationClicked: () => {
                        N({ action: "PRESS_APP_CONNECTION" }), A();
                      },
                      selectedGuildId: null != L ? L : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, i.jsx)(E.Z, {
              heading: Z.Z.Messages.NOTE,
              scrollIntoView: T === v.Tb.NOTE,
              children: (0, i.jsx)(l.Z, {
                userId: n.id,
                className: h.note,
                autoFocus: T === v.Tb.NOTE,
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
      var i = t(735250),
        s = t(470079),
        o = t(772848),
        l = t(924826),
        r = t(91192),
        a = t(442837),
        c = t(749210),
        d = t(434404),
        u = t(271383),
        I = t(430824),
        _ = t(496675),
        f = t(700785),
        E = t(785717),
        m = t(256226),
        p = t(678738),
        x = t(314172),
        v = t(981631),
        Z = t(689938),
        h = t(328156);
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
            onRemoveRole: E,
          } = e,
          p = I && null != c,
          S = s.useMemo(() => "roles-".concat((0, o.Z)()), []),
          T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0,
          }),
          A = d.length,
          g =
            0 === A
              ? Z.Z.Messages.ROLE_LIST_EMPTY
              : Z.Z.Messages.ROLES_LIST.format({ numRoles: A }),
          N = d.map((e) => {
            var s;
            return (0, i.jsx)(
              m.Z,
              {
                role: e,
                guildId: a.id,
                disableBorderColor: !0,
                onRemove: () => E(e),
                canRemove: I
                  ? f.r6(a, t.id, u, e)
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
                className: h.root,
                "aria-label": g,
                ref: n,
                ...t,
                children: [
                  N,
                  p &&
                    (0, i.jsx)(x.Z, {
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
          { trackUserProfileAction: r } = (0, E.KZ)(),
          m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          x = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
          h = null == m ? void 0 : m.roles,
          T = s.useMemo(
            () =>
              null == h || 0 === h.length
                ? []
                : Object.values(x)
                    .filter((e) => h.includes(e.id))
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
            [x, h],
          ),
          A = f.e9(o, t.id),
          [g] = (0, a.Wu)([_.Z], () => [
            _.Z.can(v.Plq.MANAGE_ROLES, o),
            null != o ? _.Z.getGuildVersion(o.id) : null,
          ]),
          N = s.useCallback(
            (e) => {
              var t, i;
              r({ action: "REMOVE_ROLE" });
              let s =
                null !==
                  (i = null == h ? void 0 : h.filter((n) => n !== e.id)) &&
                void 0 !== i
                  ? i
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? c.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, s, [], [e.id]);
            },
            [h, o.id, n.id, r],
          ),
          b = s.useCallback(
            (e) => {
              r({ action: "ADD_ROLE" });
              let t = null != h ? h : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [h, o.id, n.id, r],
          ),
          j = g && null != m;
        return 0 !== T.length || j
          ? (0, i.jsx)(p.Z, {
              heading: Z.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, i.jsx)(S, {
                user: n,
                currentUser: t,
                guild: o,
                guildMember: m,
                roles: T,
                highestRole: A,
                canManageRoles: g,
                onAddRole: b,
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
      var i = t(735250),
        s = t(470079),
        o = t(442837),
        l = t(706898),
        r = t(481060),
        a = t(387903),
        c = t(246946),
        d = t(785717),
        u = t(27144),
        I = t(100849),
        _ = t(944546),
        f = t(470900),
        E = t(988246),
        m = t(970041),
        p = t(715388),
        x = t(879828),
        v = t(834534),
        Z = t(228168),
        h = t(455749);
      function S(e) {
        let {
            section: n,
            subsection: t,
            user: s,
            currentUser: o,
            displayProfile: l,
            onClose: r,
          } = e,
          { newActivityCardsEnabled: c } = (0, u.z)({
            location: "SimplifiedUserProfileModalTabs",
          });
        return n === Z.oh.ACTIVITY && c
          ? (0, i.jsx)(x.Z, { user: s, currentUser: o, onClose: r })
          : n === Z.oh.ACTIVITY
            ? (0, i.jsx)(I.Z, {
                showActions: (null == o ? void 0 : o.id) !== s.id,
                user: s,
                type: a.Y.SIMPLIFIED_PROFILE,
                onClose: r,
              })
            : n === Z.oh.MUTUAL_FRIENDS
              ? (0, i.jsx)(_.Z, { user: s, onClose: r })
              : n === Z.oh.MUTUAL_GUILDS
                ? (0, i.jsx)(f.Z, { user: s, onClose: r })
                : n === Z.oh.BOT_DATA_ACCESS
                  ? (0, i.jsx)(m.Z, { user: s })
                  : n === Z.oh.BOT_INFO
                    ? (0, i.jsx)(p.Z, {
                        user: s,
                        currentUser: o,
                        displayProfile: l,
                        subsection: t,
                        onClose: r,
                      })
                    : (0, i.jsx)(v.Z, {
                        user: s,
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
            items: f,
            initialSection: m = Z.oh.USER_INFO,
            initialSubsection: p,
            onClose: x,
          } = e,
          { trackUserProfileAction: v } = (0, d.KZ)(),
          T = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: A, subsection: g }, N] = s.useState({
            section:
              null !==
                (a =
                  null ===
                    (n = f.find((e) => {
                      let { section: n } = e;
                      return n === m;
                    })) || void 0 === n
                    ? void 0
                    : n.section) && void 0 !== a
                ? a
                : null === (t = f[0]) || void 0 === t
                  ? void 0
                  : t.section,
            subsection: p,
          });
        s.useEffect(() => {
          if (null == f.find((e) => e.section === A))
            N({ section: f[0].section, subsection: void 0 });
        }, [f, A]);
        let b = s.useCallback(
          (e) => {
            v({ action: "PRESS_SECTION", section: e }),
              N({ section: e, subsection: void 0 });
          },
          [v, N],
        );
        return T
          ? (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsx)(E.Z, {}),
            })
          : (0, i.jsxs)("div", {
              className: h.container,
              children: [
                (0, i.jsx)(l.n, {
                  className: h.tabBar,
                  type: "top",
                  selectedItem: A,
                  onItemSelect: b,
                  children: f.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, i.jsx)(
                      l.n.Item,
                      {
                        className: h.tabBarItem,
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
                (0, i.jsx)(S, {
                  items: f,
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
          return I;
        },
      }),
        t(653041),
        t(627341);
      var i = t(278074),
        s = t(184242),
        o = t(932699),
        l = t(726059),
        r = t(162267),
        a = t(929498),
        c = t(228168),
        d = t(981631),
        u = t(689938);
      function I(e) {
        var n, t;
        let { user: I, currentUser: _ } = e,
          { live: f, recent: E, stream: m } = (0, a.Z)(I.id),
          p =
            null ===
              (n = (0, l.Z)(
                I.id,
                I.id !== (null == _ ? void 0 : _.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          x =
            null ===
              (t = (0, r.Z)(
                I.id,
                I.id !== (null == _ ? void 0 : _.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          v = (0, o.G)(I),
          Z = !(
            (0, s.Ac)({ location: d.Sbl.PROFILE_MODAL_TABS }) &&
            v &&
            (null != p ? p : 0) === 0 &&
            (null != x ? x : 0) === 0
          ),
          h = [
            {
              section: c.oh.USER_INFO,
              text: u.Z.Messages.USER_PROFILE_ABOUT_ME,
            },
          ];
        return (
          (f.length > 0 || E.length > 0 || null != m) &&
            h.push({
              section: c.oh.ACTIVITY,
              text: u.Z.Messages.USER_PROFILE_ACTIVITY,
            }),
          I.id !== (null == _ ? void 0 : _.id) &&
            Z &&
            (h.push({
              section: c.oh.MUTUAL_FRIENDS,
              text: (0, i.EQ)(p)
                .with(
                  void 0,
                  () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER,
                )
                .with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                .otherwise((e) =>
                  u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }),
                ),
            }),
            h.push({
              section: c.oh.MUTUAL_GUILDS,
              text: (0, i.EQ)(x)
                .with(
                  void 0,
                  () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER,
                )
                .with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) =>
                  u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }),
                ),
            })),
          h
        );
      }
    },
    532776: function (e, n, t) {
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
    648067: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(470079),
        s = t(442837),
        o = t(726542),
        l = t(122021),
        r = t(621853);
      let a = [];
      function c(e) {
        let n = (0, l.Xj)({ forUserProfile: !0 }),
          t = (0, s.e7)([r.Z], () => r.Z.getUserProfile(e));
        return (0, i.useMemo)(
          () =>
            (null == t ? void 0 : t.connectedAccounts) == null
              ? a
              : t.connectedAccounts.filter((e) => {
                  let { type: t } = e,
                    i = o.Z.get(t);
                  return null != i && n(i);
                }),
          [null == t ? void 0 : t.connectedAccounts, n],
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
//# sourceMappingURL=e7bfbaaf9e8085220ba6.js.map
