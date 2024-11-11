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
        l = t(981631);
      n.Z = {
        updateNote(e, n) {
          i.tn.put({
            url: l.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0,
          });
        },
      };
    },
    666520: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120);
      var i,
        l = t(200651),
        o = t(192379),
        r = t(995295),
        s = t(442837),
        c = t(481060),
        a = t(34854),
        d = t(531301),
        u = t(246946),
        f = t(981631),
        m = t(388032),
        I = t(605258);
      function x(e, n, t) {
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
      class p extends (i = o.PureComponent) {
        componentDidMount() {
          if (this.props.autoFocus && !this.props.hideNote) {
            let e = r.findDOMNode(this.noteRef.current);
            null != e &&
              null != e.selectionStart &&
              (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
          }
        }
        render() {
          let { className: e, loading: n, note: t, hideNote: i } = this.props;
          return i
            ? null
            : (0, l.jsx)("div", {
                className: e,
                children: (0, l.jsx)(c.TextAreaAutosize, {
                  ref: this.noteRef,
                  className: I.textarea,
                  disabled: n,
                  placeholder: n
                    ? m.intl.string(m.t["WLKx//"])
                    : m.intl.string(m.t.VBhOe3),
                  "aria-label": m.intl.string(m.t.PbMNh4),
                  onBlur: this.handleBlur,
                  onKeyPress: this.handleKeyPress,
                  defaultValue: null != t ? t : void 0,
                  maxLength: f.vuo,
                }),
              });
        }
        constructor(...e) {
          super(...e),
            x(this, "noteRef", o.createRef()),
            x(this, "handleBlur", (e) => {
              let n = e.currentTarget.value,
                { note: t, userId: i, onUpdate: l } = this.props;
              if ((null != t ? t : "") !== n)
                null == l || l(), a.Z.updateNote(i, n);
            }),
            x(this, "handleKeyPress", (e) => {
              if (13 === e.which) {
                if (e.shiftKey) {
                  var n;
                  (null !== (n = e.currentTarget.value.match(/\n/g)) &&
                  void 0 !== n
                    ? n
                    : []
                  ).length >= 5 && e.preventDefault();
                } else e.preventDefault(), e.currentTarget.blur();
              } else e.which === f.yXg.SPACE && e.stopPropagation();
            });
        }
      }
      function h(e) {
        let n = (0, s.e7)([u.Z], () => u.Z.hidePersonalInformation),
          t = (0, d.Z)(e.userId);
        return (0, l.jsx)(p, { ...e, ...t, hideNote: n });
      }
      x(p, "defaultProps", { autoFocus: !1 });
    },
    860719: function (e, n, t) {
      t.d(n, {
        w: function () {
          return l;
        },
      }),
        t(789020);
      var i = t(85025);
      function l(e) {
        let { flags: n } = e,
          t = (0, i.O)(n),
          l =
            null != t &&
            ((null == t ? void 0 : t.messageContent) ||
              (null == t ? void 0 : t.messageContentLimited)),
          o =
            null != t &&
            ((null == t ? void 0 : t.guildPresences) ||
              (null == t ? void 0 : t.guildPresencesLimited)),
          r =
            null != t &&
            ((null == t ? void 0 : t.guildMembers) ||
              (null == t ? void 0 : t.guildMembersLimited));
        return {
          hasMessageContent: l,
          hasGuildPresences: o,
          hasGuildMembers: r,
          hasIntents: l || o || r,
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
        l = t(981631);
      function o(e) {
        if (null != e)
          return {
            guildPresences: (0, i.yE)(e, l.udG.GATEWAY_PRESENCE),
            guildMembers: (0, i.yE)(e, l.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, i.yE)(e, l.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, i.yE)(e, l.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, i.yE)(
              e,
              l.udG.GATEWAY_GUILD_MEMBERS_LIMITED,
            ),
            messageContentLimited: (0, i.yE)(
              e,
              l.udG.GATEWAY_MESSAGE_CONTENT_LIMITED,
            ),
          };
      }
    },
    250822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(192379),
        l = t(442837),
        o = t(621853);
      let r = [];
      function s(e) {
        let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
        return (0, i.useMemo)(
          () =>
            (null == n ? void 0 : n.applicationRoleConnections) == null
              ? r
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
      var i = t(192379),
        l = t(442837),
        o = t(726542),
        r = t(122021),
        s = t(621853);
      let c = [];
      function a(e) {
        let n = (0, r.Xj)({ forUserProfile: !0 }),
          t = (0, l.e7)([s.Z], () => s.Z.getUserProfile(e));
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
          return I;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(399606),
        o = t(481060),
        r = t(275759),
        s = t(565138),
        c = t(706454),
        a = t(271383),
        d = t(430824),
        u = t(709054),
        f = t(388032),
        m = t(45844);
      function I(e) {
        let { userId: n, guildId: t, textClassName: I, tooltipDelay: x } = e,
          p = (0, l.e7)([c.default], () => c.default.locale),
          h = (0, l.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
          v = (0, l.e7)([a.ZP], () =>
            null != t ? a.ZP.getMember(t, n) : null,
          ),
          g = (0, r.FI)(u.default.extractTimestamp(n), p),
          Z = (0, r.FI)(null == v ? void 0 : v.joinedAt, p);
        return null == h || null == v
          ? (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: I,
              children: g,
            })
          : (0, i.jsxs)("div", {
              className: m.memberSinceWrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: f.intl.string(f.t.uvGmCw),
                      delay: x,
                      children: (e) =>
                        (0, i.jsx)(o.ClydeIcon, {
                          size: "custom",
                          width: 28,
                          height: 28,
                          color: "currentColor",
                          ...e,
                          className: m.discordIcon,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: I,
                      children: g,
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: m.divider }),
                (0, i.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: h.name,
                      delay: x,
                      children: (e) =>
                        (0, i.jsx)(s.Z, {
                          ...e,
                          guild: h,
                          size: s.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: I,
                      children: Z,
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
      var i = t(200651);
      t(192379);
      var l = t(481060),
        o = t(493683),
        r = t(475413),
        s = t(388032);
      function c(e) {
        let { userId: n, onClose: t, ...c } = e;
        return (0, i.jsx)(r.tG, {
          action: "SEND_MESSAGE",
          icon: l.ChatIcon,
          text: s.intl.string(s.t.zROXER),
          onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
          },
          ...c,
        });
      }
      function a(e) {
        let { userId: n, onClose: t, ...c } = e;
        return (0, i.jsx)(r.ef, {
          action: "SEND_MESSAGE",
          icon: l.ChatIcon,
          tooltipText: s.intl.string(s.t.zROXER),
          onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
          },
          ...c,
        });
      }
    },
    748283: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = t(200651),
        l = t(481060),
        o = t(197115),
        r = t(703656),
        s = t(111361),
        c = t(785717),
        a = t(475413),
        d = t(228168),
        u = t(981631),
        f = t(474936),
        m = t(388032),
        I = t(554470);
      function x(e) {
        let { currentUser: n, onClose: t } = e,
          x = (0, s.I5)(n),
          { trackUserProfileAction: p } = (0, c.KZ)();
        return x
          ? (0, i.jsx)(a.oY, {
              action: d.yM.VIEW_PREMIUM_PERKS,
              icon: l.NitroWheelIcon,
              tooltipText: m.intl.string(m.t.AnlV9f),
              onClick: () => {
                (0, r.uL)(u.Z5c.APPLICATION_STORE), null == t || t();
              },
            })
          : (0, i.jsx)(o.Z, {
              onClick: () => {
                p({ action: d.yM.GET_PREMIUM });
              },
              buttonText: m.intl.string(m.t.x6rkDg),
              subscriptionTier: f.Si.TIER_2,
              premiumModalAnalyticsLocation: { section: u.jXE.USER_PROFILE },
              shinyButtonClassName: I.getPremiumButton,
              size: l.Button.Sizes.SMALL,
              iconClassName: I.getPremiumButtonIcon,
              look: l.Button.Looks.BLANK,
              onlyShineOnHover: !0,
            });
      }
    },
    902423: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651),
        l = t(481060),
        o = t(906732),
        r = t(335131),
        s = t(475413),
        c = t(228168),
        a = t(388032);
      function d(e) {
        let { onClose: n } = e,
          { analyticsLocations: t, newestAnalyticsLocation: d } = (0, o.ZP)();
        return (0, i.jsx)(s.Ht, {
          action: c.yM.VISIT_SHOP,
          icon: l.ShopIcon,
          text: a.intl.string(a.t.b2d0Nz),
          onClick: () => {
            (0, r.mK)({
              analyticsSource: d,
              analyticsLocations: t,
              openInLayer: !1,
            }),
              null == n || n();
          },
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
      var i = t(200651),
        l = t(192379),
        o = t(481060),
        r = t(100527),
        s = t(906732),
        c = t(138201),
        a = t(785717),
        d = t(221292),
        u = t(687158),
        f = t(471879),
        m = t(502762),
        I = t(475413),
        x = t(228168),
        p = t(981631),
        h = t(388032),
        v = t(884451),
        g = t(161068);
      function Z(e) {
        let {
            user: n,
            guildId: t,
            channelId: Z,
            messageId: _,
            roleId: j,
            transitionState: b,
            onViewBlockedProfileClick: E,
            showGuildProfile: T = !0,
            sourceAnalyticsLocations: N = [],
          } = e,
          S = t === p.ME ? void 0 : t,
          { analyticsLocations: y } = (0, s.ZP)([
            ...N,
            r.Z.BLOCKED_PROFILE_MODAL,
          ]),
          P = (0, a.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: S,
            channelId: Z,
            messageId: _,
            roleId: j,
            showGuildProfile: T,
          }),
          A = [
            { icon: o.BellSlashIcon, description: h.intl.string(h.t.Kn2UDA) },
            { icon: o.DenyIcon, description: h.intl.string(h.t.QxrDY2) },
          ],
          C = (0, u.ZP)(n.id, T ? S : void 0),
          L = l.createRef();
        return (0, i.jsx)(s.Gt, {
          value: y,
          children: (0, i.jsx)(a.Mt, {
            value: P,
            children: (0, i.jsx)(o.ModalRoot, {
              transitionState: b,
              className: v.root,
              hideShadow: !0,
              "aria-label": h.intl.string(h.t["3N/J2t"]),
              children: (0, i.jsx)(m.Z, {
                user: n,
                displayProfile: C,
                profileType: x.y0.FULL_SIZE,
                ref: L,
                children: (0, i.jsxs)("div", {
                  className: v.container,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: g,
                      className: v.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: v.body,
                      children: [
                        (0, i.jsx)(f.Z, { user: n, guildId: S }),
                        (0, i.jsx)(o.Heading, {
                          variant: "heading-xl/bold",
                          className: v.header,
                          children: h.intl.string(h.t.VNJ7UF),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children: h.intl.format(h.t.LXbngo, {
                            username: n.username,
                          }),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/medium",
                          children: h.intl.string(h.t["uBvD//"]),
                        }),
                        (0, i.jsx)("div", {
                          className: v.safetyTable,
                          children: A.map((e, n) => {
                            let { icon: t, description: l } = e;
                            return (0, i.jsx)(
                              c.Z,
                              {
                                icon: t,
                                title: l,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsx)(I.tG, {
                          className: v.centeredButton,
                          action: "VIEW_BLOCKED_PROFILE",
                          text: h.intl.string(h.t.iXAna2),
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == E || E(),
                              (0, d.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: y,
                                ...P,
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
          return y;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(481060),
        o = t(100527),
        r = t(906732),
        s = t(5192),
        c = t(785717),
        a = t(687158),
        d = t(899007),
        u = t(648052),
        f = t(867176),
        m = t(438163),
        I = t(681837),
        x = t(502762),
        p = t(530),
        h = t(871604),
        v = t(952124),
        g = t(53558),
        Z = t(544989),
        _ = t(934861),
        j = t(740628),
        b = t(398145),
        E = t(228168),
        T = t(981631),
        N = t(388032),
        S = t(272216);
      function y(e) {
        let {
            user: n,
            currentUser: t,
            guildId: y,
            channelId: P,
            messageId: A,
            roleId: C,
            sessionId: L,
            initialSection: M,
            initialSubsection: R,
            transitionState: O,
            onClose: U,
            sourceAnalyticsLocations: B = [],
          } = e,
          F = y === T.ME ? void 0 : y,
          D = (0, a.ZP)(n.id, F),
          { analyticsLocations: G } = (0, r.ZP)([
            ...B,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          w = (0, c.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: F,
            channelId: P,
            messageId: A,
            roleId: C,
          }),
          k = (0, b.Z)(n);
        return (0, i.jsx)(r.Gt, {
          value: G,
          children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(l.ModalRoot, {
              transitionState: O,
              className: S.root,
              hideShadow: !0,
              "aria-label": N.intl.string(N.t["3N/J2t"]),
              children: (0, i.jsxs)(x.Z, {
                user: n,
                displayProfile: D,
                profileType: E.y0.FULL_SIZE,
                children: [
                  (0, i.jsx)(Z.Z, {
                    profileType: E.y0.FULL_SIZE,
                    children: (0, i.jsx)(v.Z, { user: n, guildId: F }),
                  }),
                  (0, i.jsxs)("header", {
                    children: [
                      (0, i.jsx)(f.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: E.y0.FULL_SIZE,
                      }),
                      (0, i.jsxs)("div", {
                        className: S.headerInner,
                        children: [
                          (0, i.jsx)(d.Z, {
                            user: n,
                            displayProfile: D,
                            guildId: F,
                            channelId: P,
                            profileType: E.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(m.Z, {
                            user: n,
                            profileType: E.y0.FULL_SIZE,
                            hasEntered: O === l.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, i.jsxs)("div", {
                            className: S.headerButtons,
                            children: [
                              (0, i.jsx)(_.c, {
                                userId: n.id,
                                onClose: U,
                                className: S.messageTextButton,
                              }),
                              (0, i.jsx)(_.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: S.messageIconButton,
                              }),
                              (0, i.jsx)(g.Z, { user: n, guildId: F }),
                              (0, i.jsx)(h.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: S.body,
                    children: [
                      (0, i.jsx)(p.Z, {
                        user: n,
                        profileType: E.y0.FULL_SIZE,
                        nickname: s.ZP.getName(F, P, n),
                        pronouns: null == D ? void 0 : D.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, i.jsx)(I.Z, { userId: n.id }),
                        tags: (0, i.jsx)(u.Z, {
                          displayProfile: D,
                          profileType: E.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, i.jsx)(x.Z.Overlay, {
                        className: S.overlay,
                        children: (0, i.jsx)(j.Z, {
                          user: n,
                          currentUser: t,
                          displayProfile: D,
                          items: k,
                          initialSection: null != M ? M : E.oh.BOT_INFO,
                          initialSubsection: R,
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
          return f;
        },
      }),
        t(789020);
      var i = t(200651);
      t(192379);
      var l = t(597312),
        o = t(442837),
        r = t(481060),
        s = t(860719),
        c = t(621853),
        a = t(388032),
        d = t(834585);
      function u(e) {
        let { icon: n, title: t, description: l } = e;
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
                (0, i.jsx)(r.Heading, {
                  variant: "text-xs/semibold",
                  children: t,
                }),
                (0, i.jsx)(r.Text, { variant: "text-sm/normal", children: l }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { user: n } = e,
          t = (0, o.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          {
            hasMessageContent: f,
            hasGuildPresences: m,
            hasGuildMembers: I,
          } = (0, s.w)({ flags: null == t ? void 0 : t.flags });
        return (0, i.jsxs)(l.zJ, {
          fade: !0,
          className: d.scroller,
          children: [
            f &&
              (0, i.jsx)(u, {
                icon: r.ChatIcon,
                title: a.intl.string(a.t["7Tmhfn"]),
                description: a.intl.string(a.t["eu5x7+"]),
              }),
            m &&
              (0, i.jsx)(u, {
                icon: r.GameControllerIcon,
                title: a.intl.string(a.t.awYSsL),
                description: a.intl.string(a.t.TpsXoK),
              }),
            I &&
              (0, i.jsx)(u, {
                icon: r.GroupIcon,
                title: a.intl.string(a.t.WuKeSE),
                description: a.intl.string(a.t.wOBmtb),
              }),
            (0, i.jsx)(r.Text, {
              variant: "text-xs/normal",
              children: a.intl.format(a.t.b6nqk5, {
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
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(666520),
        s = t(592125),
        c = t(430824),
        a = t(944486),
        d = t(785717),
        u = t(621853),
        f = t(172351),
        m = t(280885),
        I = t(900927),
        x = t(678738),
        p = t(179828),
        h = t(228168),
        v = t(388032),
        g = t(11633);
      function Z(e) {
        var n;
        let {
            user: t,
            currentUser: Z,
            displayProfile: _,
            subsection: j,
            onClose: b,
          } = e,
          { trackUserProfileAction: E } = (0, d.KZ)(),
          T = (0, l.e7)([c.Z], () =>
            (null == _ ? void 0 : _.guildId) != null
              ? c.Z.getGuild(_.guildId)
              : null,
          ),
          N = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          S = (0, l.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: g.scroller,
          children: [
            (null == _ ? void 0 : _.bio) != null &&
              (null == _ ? void 0 : _.bio) !== "" &&
              (0, i.jsx)(m.Z, { userBio: _.bio, setLineClamp: !1 }),
            (null == N ? void 0 : N.popularApplicationCommandIds) != null &&
              null != S &&
              (0, i.jsx)(f.Z, {
                applicationId: N.id,
                commandIds: N.popularApplicationCommandIds,
                channel: S,
                guildId:
                  null !== (n = null == _ ? void 0 : _.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: b,
              }),
            null != T &&
              (0, i.jsx)(p.Z, {
                user: t,
                currentUser: Z,
                guild: T,
                scrollIntoView: j === h.Tb.ROLES,
              }),
            (0, i.jsx)(x.Z, {
              heading: v.intl.string(v.t["A//N4u"]),
              children: (0, i.jsx)(I.Z, {
                userId: t.id,
                guildId: null == _ ? void 0 : _.guildId,
                tooltipDelay: h.vB,
              }),
            }),
            (0, i.jsx)(x.Z, {
              heading: v.intl.string(v.t.PbMNh4),
              scrollIntoView: j === h.Tb.NOTE,
              children: (0, i.jsx)(r.Z, {
                userId: t.id,
                className: g.note,
                autoFocus: j === h.Tb.NOTE,
                onUpdate: () => E({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    886794: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return P;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(481060),
        r = t(727637),
        s = t(100527),
        c = t(906732),
        a = t(680295),
        d = t(5192),
        u = t(785717),
        f = t(687158),
        m = t(899007),
        I = t(648052),
        x = t(867176),
        p = t(280885),
        h = t(900927),
        v = t(678738),
        g = t(502762),
        Z = t(530),
        _ = t(679332),
        j = t(544989),
        b = t(228168),
        E = t(981631),
        T = t(388032),
        N = t(272216),
        S = t(11633),
        y = t(722849);
      function P(e) {
        let {
            user: n,
            guildId: t,
            channelId: P,
            messageId: A,
            roleId: C,
            sessionId: L,
            transitionState: M,
            onClose: R,
            sourceAnalyticsLocations: O = [],
          } = e,
          U = t === E.ME ? void 0 : t,
          B = (0, f.ZP)(n.id, U),
          { analyticsLocations: F } = (0, c.ZP)([
            ...O,
            s.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          D = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: U,
            channelId: P,
            messageId: A,
            roleId: C,
          }),
          G = l.createRef(),
          w = (0, r.Z)(G);
        return (0, i.jsx)(c.Gt, {
          value: F,
          children: (0, i.jsx)(u.Mt, {
            value: D,
            children: (0, i.jsxs)(o.ModalRoot, {
              transitionState: M,
              className: N.root,
              hideShadow: !0,
              "aria-label": T.intl.string(T.t["3N/J2t"]),
              children: [
                (0, i.jsxs)(g.Z, {
                  user: n,
                  displayProfile: B,
                  profileType: b.y0.FULL_SIZE,
                  ref: G,
                  children: [
                    (0, i.jsx)(j.Z, {
                      profileType: b.y0.FULL_SIZE,
                      children: (0, i.jsx)(_.Z, { user: n }),
                    }),
                    (0, i.jsxs)("header", {
                      children: [
                        (0, i.jsx)(x.Z, {
                          user: n,
                          displayProfile: B,
                          profileType: b.y0.FULL_SIZE,
                        }),
                        (0, i.jsx)("div", {
                          className: N.headerInner,
                          children: (0, i.jsx)(m.Z, {
                            user: n,
                            displayProfile: B,
                            guildId: U,
                            channelId: P,
                            profileType: b.y0.FULL_SIZE,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, i.jsx)(Z.Z, {
                          user: n,
                          profileType: b.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, P, n),
                          pronouns: null == B ? void 0 : B.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, i.jsx)(I.Z, {
                            displayProfile: B,
                            profileType: b.y0.FULL_SIZE,
                            onClose: R,
                          }),
                        }),
                        (0, i.jsx)(g.Z.Overlay, {
                          className: N.overlay,
                          children: (0, i.jsxs)("div", {
                            className: y.container,
                            children: [
                              (0, i.jsx)(o.TabBar, {
                                className: y.tabBar,
                                type: "top",
                                selectedItem: b.oh.BOT_INFO,
                                onItemSelect: E.dG4,
                                children: (0, i.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: y.tabBarItem,
                                    id: b.oh.BOT_INFO,
                                    "aria-label": T.intl.string(T.t.jGoPJS),
                                    children: (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: T.intl.string(T.t.jGoPJS),
                                    }),
                                  },
                                  b.oh.BOT_INFO,
                                ),
                              }),
                              (0, i.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: S.scroller,
                                children: [
                                  (0, i.jsx)(p.Z, {
                                    userId: n.id,
                                    userBio: null == B ? void 0 : B.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, i.jsx)(v.Z, {
                                    heading: T.intl.string(T.t["A//N4u"]),
                                    children: (0, i.jsx)(h.Z, {
                                      userId: n.id,
                                      guildId: U,
                                      tooltipDelay: b.vB,
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
                  (0, i.jsx)(a.Z, {
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
          return G;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(100621),
        r = t(442837),
        s = t(481060),
        c = t(727637),
        a = t(616780),
        d = t(100527),
        u = t(906732),
        f = t(680295),
        m = t(699516),
        I = t(5192),
        x = t(785717),
        p = t(221292),
        h = t(816988),
        v = t(687158),
        g = t(326094),
        Z = t(510659),
        _ = t(113557),
        j = t(867176),
        b = t(169979),
        E = t(451834),
        T = t(502762),
        N = t(544989),
        S = t(705556),
        y = t(481932),
        P = t(195387),
        A = t(272510),
        C = t(748283),
        L = t(902423),
        M = t(171368),
        R = t(62154),
        O = t(412317),
        U = t(228168),
        B = t(981631),
        F = t(388032),
        D = t(272216);
      function G(e) {
        let {
            user: n,
            currentUser: t,
            guildId: G,
            channelId: w,
            messageId: k,
            roleId: V,
            sessionId: W,
            friendToken: z,
            initialSection: K,
            initialSubsection: Y,
            transitionState: H,
            onClose: J,
            showGuildProfile: X = !0,
            sourceAnalyticsLocations: q = [],
          } = e,
          { analyticsLocations: Q } = (0, u.ZP)([
            ...q,
            d.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          $ = (0, g.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          ee = (0, x.ZB)({
            layout: $
              ? "SIMPLIFIED_MODAL"
              : "SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE",
            userId: n.id,
            sourceSessionId: W,
            guildId: G,
            channelId: w,
            messageId: k,
            roleId: V,
            showGuildProfile: X,
          }),
          en = (0, Z.$m)(),
          et = (0, s.useSpring)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 },
          }),
          ei = (0, v.ZP)(n.id, X ? G : void 0),
          el = (0, v.ZP)(n.id, G),
          eo = (0, r.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
          er = n.id === t.id,
          es = l.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
        (0, a.$)(es);
        let ec = l.createRef(),
          ea = (0, c.Z)(ec),
          { permanentEntryPointsEnabled: ed } = (0, h.u)({
            location: "UserProfileModal",
          }),
          eu = () =>
            (null == el ? void 0 : el.guildId) == null
              ? null
              : (null == ei ? void 0 : ei.guildId) != null
                ? (0, i.jsx)(s.MenuItem, {
                    id: "view-main-profile",
                    label: F.intl.string(F.t.GISTtb),
                    subtext: F.intl.formatToPlainString(F.t["mn/nW1"], {
                      displayName: I.ZP.getName(void 0, void 0, n),
                    }),
                    action: () => {
                      J(),
                        (0, M.openUserProfileModal)({
                          ...ee,
                          showGuildProfile: !1,
                          friendToken: z,
                          sourceAnalyticsLocations: q,
                        }),
                        (0, p.pQ)({
                          action: "PRESS_VIEW_MAIN_PROFILE",
                          analyticsLocations: Q,
                          ...ee,
                        });
                    },
                  })
                : (0, i.jsx)(s.MenuItem, {
                    id: "view-server-profile",
                    label: F.intl.string(F.t.DisZzM),
                    subtext: F.intl.formatToPlainString(F.t["mn/nW1"], {
                      displayName: I.ZP.getName(G, w, n),
                    }),
                    action: () => {
                      J(),
                        (0, M.openUserProfileModal)({
                          ...ee,
                          showGuildProfile: !0,
                          friendToken: z,
                          sourceAnalyticsLocations: q,
                        }),
                        (0, p.pQ)({
                          action: "PRESS_VIEW_SERVER_PROFILE",
                          analyticsLocations: Q,
                          ...ee,
                        });
                    },
                  });
        return (0, i.jsx)(u.Gt, {
          value: Q,
          children: (0, i.jsx)(x.Mt, {
            value: ee,
            children: (0, i.jsx)(Z.NJ, {
              value: en,
              children: (0, i.jsxs)(s.ModalRoot, {
                transitionState: H,
                className: D.root,
                hideShadow: !0,
                "aria-label": F.intl.string(F.t["3N/J2t"]),
                children: [
                  (0, i.jsxs)(T.Z, {
                    user: n,
                    displayProfile: ei,
                    profileType: U.y0.FULL_SIZE,
                    ref: ec,
                    children: [
                      (0, i.jsxs)(N.Z, {
                        profileType: U.y0.FULL_SIZE,
                        children: [
                          ed &&
                            er &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(L.Z, { onClose: J }),
                                (0, i.jsx)(C.Z, { currentUser: t, onClose: J }),
                              ],
                            }),
                          (0, i.jsx)(P.Z, {
                            shouldShowTooltip: null === en.interactionType,
                            user: n,
                            guildId: G,
                            channelId: w,
                            onClose: J,
                          }),
                          (0, i.jsx)(y.Z, {
                            shouldShowTooltip: null === en.interactionType,
                            profileType: U.y0.FULL_SIZE,
                            user: n,
                            friendToken: z,
                          }),
                          (0, i.jsx)(A.Z, {
                            user: n,
                            guildId: G,
                            viewProfileItem: eu(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("header", {
                        children: [
                          (0, i.jsx)(j.Z, {
                            user: n,
                            displayProfile: ei,
                            profileType: U.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(E.Z, {
                            userId: n.id,
                            onClose: J,
                            className: D.toast,
                          }),
                          null != en.interactionType &&
                            (0, i.jsx)(o.animated.div, {
                              style: et,
                              className: D.backdrop,
                            }),
                          (0, i.jsxs)("div", {
                            className: D.headerInner,
                            children: [
                              (0, i.jsx)(_.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: ei,
                                guildId: G,
                                channelId: w,
                                profileType: U.y0.FULL_SIZE,
                              }),
                              (0, i.jsx)(b.Z, {
                                location: "SimplifiedUserProfileModal",
                                user: n,
                                displayProfile: ei,
                                guildId: G,
                                channelId: w,
                                profileType: U.y0.FULL_SIZE,
                                hasEntered:
                                  H === s.ModalTransitionState.ENTERED,
                                onCloseProfile: J,
                              }),
                              (0, i.jsxs)("div", {
                                className: D.headerButtons,
                                children: [
                                  (0, i.jsx)(O.Z, {
                                    isCurrentUser: er,
                                    user: n,
                                    relationshipType: eo,
                                    friendToken: z,
                                    onClose: J,
                                  }),
                                  (0, i.jsx)(S.Z, {
                                    user: n,
                                    guildId: G,
                                    onClose: J,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(R.Z, {
                        user: n,
                        currentUser: t,
                        channelId: w,
                        displayProfile: ei,
                        initialSection: K,
                        initialSubsection: Y,
                        friendToken: z,
                        onClose: J,
                      }),
                    ],
                  }),
                  (null == ei ? void 0 : ei.profileEffectId) != null &&
                    (0, i.jsx)(f.Z, {
                      profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                      isHovering: ea,
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
          return v;
        },
      });
      var i = t(200651),
        l = t(192379),
        o = t(704215),
        r = t(481060),
        s = t(605236),
        c = t(63063),
        a = t(369566),
        d = t(678738),
        u = t(151545),
        f = t(527790),
        m = t(493043),
        I = t(981631),
        x = t(921944),
        p = t(388032),
        h = t(505865);
      function v(e) {
        let { user: n, currentUser: t, onClose: v, profileGuildId: g } = e,
          { live: Z, recent: _, stream: j } = (0, a.Z)(n.id),
          b = n.id === t.id,
          E = (0, s.wE)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP);
        return (
          l.useEffect(() => {
            if (!!b && !E)
              (0, s.EW)(o.z.USER_PROFILE_ACTIVITY_EDUCATION_TOOLTIP, {
                dismissAction: x.L.AUTO_DISMISS,
                forceTrack: !0,
              });
          }, [b, E]),
          (0, i.jsxs)(r.ScrollerThin, {
            className: h.scroller,
            fade: !0,
            children: [
              (0, i.jsxs)(d.Z, {
                children: [
                  null != j &&
                    (0, i.jsx)(m.Z, {
                      location: "UserProfileModalActivity",
                      user: n,
                      currentUser: t,
                      stream: j,
                      onClose: v,
                      profileGuildId: g,
                    }),
                  Z.map((e, l) =>
                    (0, i.jsx)(
                      u.Z,
                      {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: v,
                        profileGuildId: g,
                      },
                      "live-".concat(l),
                    ),
                  ),
                ],
              }),
              b &&
                _.length > 0 &&
                (0, i.jsx)(d.Z, {
                  heading: p.intl.string(p.t.M0zgnZ),
                  subheading: p.intl.format(p.t["4bk9Ag"], {
                    learnMoreHook: (e, n) =>
                      (0, i.jsx)(
                        r.Anchor,
                        {
                          href: c.Z.getArticleURL(
                            I.BhN.ACTIVITY_STATUS_SETTINGS,
                          ),
                          children: e,
                        },
                        n,
                      ),
                  }),
                  children: _.map((e) =>
                    (0, i.jsx)(
                      f.Z,
                      { user: n, entry: e, onClose: v, hideHeader: !0 },
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(699516),
        r = t(5192),
        s = t(111361),
        c = t(816988),
        a = t(648052),
        d = t(537006),
        u = t(681837),
        f = t(91433),
        m = t(502762),
        I = t(530),
        x = t(740628),
        p = t(643518),
        h = t(228168),
        v = t(981631),
        g = t(272216);
      function Z(e) {
        var n;
        let {
            user: t,
            currentUser: Z,
            channelId: _,
            displayProfile: j,
            initialSection: b,
            initialSubsection: E,
            friendToken: T,
            onClose: N,
          } = e,
          S = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
          y = (0, p.Z)({ user: t, currentUser: Z }),
          P = t.id === Z.id,
          { dimissibleUpsellsEnabled: A } = (0, c.u)({
            location: "UserProfileModalBody",
          }),
          C = (0, s.I5)(Z);
        return (0, i.jsxs)("div", {
          className: g.body,
          children: [
            (0, i.jsx)(I.Z, {
              user: t,
              profileType: h.y0.FULL_SIZE,
              nickname: r.ZP.getName(null == j ? void 0 : j.guildId, _, t),
              pronouns: null == j ? void 0 : j.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
              tags: (0, i.jsx)(a.Z, {
                displayProfile: j,
                profileType: h.y0.FULL_SIZE,
                onClose: N,
              }),
            }),
            S === v.OGo.PENDING_INCOMING &&
              (0, i.jsx)(m.Z.Overlay, {
                className: g.friendRequestBannerOverlay,
                children: (0, i.jsx)(f.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == j ? void 0 : j.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: _,
                  friendToken: T,
                  className: g.friendRequestBanner,
                }),
              }),
            A && P && (0, i.jsx)(d.Z, { isPremiumUser: C, onInteraction: N }),
            (0, i.jsx)(m.Z.Overlay, {
              className: g.overlay,
              children: (0, i.jsx)(x.Z, {
                user: t,
                currentUser: Z,
                displayProfile: j,
                items: y,
                initialSection: b,
                initialSubsection: E,
                onClose: N,
              }),
            }),
          ],
        });
      }
    },
    412317: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        o = t(194359),
        r = t(906732),
        s = t(475413),
        c = t(934861),
        a = t(981631),
        d = t(388032),
        u = t(266580);
      function f(e) {
        let {
            isCurrentUser: n,
            user: t,
            relationshipType: f,
            friendToken: m,
            onClose: I,
          } = e,
          { newestAnalyticsLocation: x } = (0, r.ZP)();
        return n || f === a.OGo.BLOCKED
          ? null
          : f === a.OGo.FRIEND || t.bot
            ? (0, i.jsx)("div", {
                className: u.multipleButtons,
                children: (0, i.jsx)(c.c, { userId: t.id, onClose: I }),
              })
            : f === a.OGo.PENDING_OUTGOING || f === a.OGo.PENDING_INCOMING
              ? (0, i.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, i.jsx)(s.ef, {
                      icon: l.UserClockIcon,
                      tooltipText: d.intl.string(d.t.p6IHGB),
                      disabled: !0,
                    }),
                    (0, i.jsx)(c.c, { userId: t.id, onClose: I }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, i.jsx)(c.v, { userId: t.id, onClose: I }),
                    (0, i.jsx)(s.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: l.UserPlusIcon,
                      text: d.intl.string(d.t["7815aW"]),
                      color: l.Button.Colors.BRAND,
                      onClick: () => {
                        o.Z.addRelationship({
                          userId: t.id,
                          context: { location: x },
                          friendToken: m,
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
          return b;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(666520),
        s = t(189156),
        c = t(706454),
        a = t(430824),
        d = t(914010),
        u = t(785717),
        f = t(250822),
        m = t(771362),
        I = t(280885),
        x = t(819602),
        p = t(900927),
        h = t(678738),
        v = t(652853),
        g = t(179828),
        Z = t(228168),
        _ = t(388032),
        j = t(11633);
      function b(e) {
        let {
            user: n,
            currentUser: t,
            displayProfile: b,
            subsection: E,
            onClose: T,
          } = e,
          { theme: N } = (0, v.z)(),
          { trackUserProfileAction: S } = (0, u.KZ)(),
          y = null == b ? void 0 : b.guildId,
          P = (0, l.e7)([a.Z], () => (null != y ? a.Z.getGuild(y) : null)),
          A = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
          C = (0, l.e7)([c.default], () => c.default.locale),
          L = (0, m.Z)(n.id),
          M = (0, f.Z)(n.id);
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: j.scroller,
          children: [
            (null == b ? void 0 : b.bio) != null &&
              (null == b ? void 0 : b.bio) !== "" &&
              (0, i.jsx)(I.Z, { userBio: b.bio, setLineClamp: !1 }),
            null != P &&
              (0, i.jsx)(g.Z, {
                user: n,
                currentUser: t,
                guild: P,
                scrollIntoView: E === Z.Tb.ROLES,
              }),
            n.isProvisional && (0, i.jsx)(s.Z, { look: "profile_modal" }),
            (0, i.jsx)(h.Z, {
              heading: _.intl.string(_.t.a6XYDw),
              children: (0, i.jsx)(p.Z, {
                userId: n.id,
                guildId: null == b ? void 0 : b.guildId,
                tooltipDelay: Z.vB,
              }),
            }),
            L.length > 0 &&
              (0, i.jsx)(h.Z, {
                heading: _.intl.string(_.t["3fe7U1"]),
                scrollIntoView: E === Z.Tb.CONNECTIONS,
                children: (0, i.jsx)(x.OA, {
                  connectedAccounts: L,
                  className: j.connections,
                  userId: n.id,
                  theme: N,
                  locale: C,
                }),
              }),
            M.length > 0 &&
              (0, i.jsx)(h.Z, {
                heading: _.intl.string(_.t.PHjkRE),
                children: M.map((e) =>
                  (0, i.jsx)(
                    x.tH,
                    {
                      className: j.appsConnections,
                      applicationRoleConnection: e,
                      locale: C,
                      onApplicationClicked: () => {
                        S({ action: "PRESS_APP_CONNECTION" }), T();
                      },
                      selectedGuildId: null != A ? A : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, i.jsx)(h.Z, {
              heading: _.intl.string(_.t.PbMNh4),
              scrollIntoView: E === Z.Tb.NOTE,
              children: (0, i.jsx)(r.Z, {
                userId: n.id,
                className: j.note,
                autoFocus: E === Z.Tb.NOTE,
                onUpdate: () => S({ action: "SET_NOTE" }),
              }),
            }),
          ],
        });
      }
    },
    179828: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(772848),
        r = t(924826),
        s = t(91192),
        c = t(442837),
        a = t(749210),
        d = t(434404),
        u = t(271383),
        f = t(430824),
        m = t(496675),
        I = t(700785),
        x = t(785717),
        p = t(256226),
        h = t(678738),
        v = t(314172),
        g = t(981631),
        Z = t(388032),
        _ = t(726769);
      function j(e) {
        let {
            user: n,
            currentUser: t,
            guild: c,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: x,
          } = e,
          h = f && null != a,
          j = l.useMemo(() => "roles-".concat((0, o.Z)()), []),
          b = (0, r.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: g.Cyb,
            scrollToEnd: g.Cyb,
            wrap: !0,
          }),
          E = d.length,
          T =
            0 === E
              ? Z.intl.string(Z.t["vR7M+/"])
              : Z.intl.formatToPlainString(Z.t.PCs0oq, { numRoles: E }),
          N = d.map((e) => {
            var l;
            return (0, i.jsx)(
              p.Z,
              {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => x(e),
                canRemove: f
                  ? I.r6(c, t.id, u, e)
                  : (null === (l = e.tags) || void 0 === l
                      ? void 0
                      : l.guild_connections) === null && n.id === t.id,
              },
              e.id,
            );
          });
        return (0, i.jsx)(s.bG, {
          navigator: b,
          children: (0, i.jsx)(s.SJ, {
            children: (e) => {
              let { ref: n, ...t } = e;
              return (0, i.jsxs)("div", {
                className: _.root,
                "aria-label": T,
                ref: n,
                ...t,
                children: [
                  N,
                  h &&
                    (0, i.jsx)(v.Z, {
                      guild: c,
                      guildMember: a,
                      numRoles: E,
                      highestRole: u,
                      onAddRole: m,
                    }),
                ],
              });
            },
          }),
        });
      }
      function b(e) {
        let { user: n, currentUser: t, guild: o, scrollIntoView: r } = e,
          { trackUserProfileAction: s } = (0, x.KZ)(),
          p = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          v = (0, c.e7)([f.Z], () => f.Z.getRoles(o.id)),
          _ = null == p ? void 0 : p.roles,
          b = l.useMemo(
            () =>
              null == _ || 0 === _.length
                ? []
                : Object.values(v)
                    .filter((e) => _.includes(e.id))
                    .sort((e, n) => {
                      var t, i;
                      let l =
                          (null === (t = e.tags) || void 0 === t
                            ? void 0
                            : t.guild_connections) !== null,
                        o =
                          (null === (i = n.tags) || void 0 === i
                            ? void 0
                            : i.guild_connections) !== null;
                      return l && !o ? 1 : !l && o ? -1 : 0;
                    }),
            [v, _],
          ),
          E = I.e9(o, t.id),
          [T] = (0, c.Wu)([m.Z], () => [
            m.Z.can(g.Plq.MANAGE_ROLES, o),
            null != o ? m.Z.getGuildVersion(o.id) : null,
          ]),
          N = l.useCallback(
            (e) => {
              var t, i;
              s({ action: "REMOVE_ROLE" });
              let l =
                null !==
                  (i = null == _ ? void 0 : _.filter((n) => n !== e.id)) &&
                void 0 !== i
                  ? i
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? a.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [_, o.id, n.id, s],
          ),
          S = l.useCallback(
            (e) => {
              s({ action: "ADD_ROLE" });
              let t = null != _ ? _ : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [_, o.id, n.id, s],
          ),
          y = T && null != p;
        return 0 !== b.length || y
          ? (0, i.jsx)(h.Z, {
              heading: Z.intl.string(Z.t.LPJmLy),
              scrollIntoView: r,
              children: (0, i.jsx)(j, {
                user: n,
                currentUser: t,
                guild: o,
                guildMember: p,
                roles: b,
                highestRole: E,
                canManageRoles: T,
                onAddRole: S,
                onRemoveRole: N,
              }),
            })
          : null;
      }
    },
    389190: function (e, n, t) {
      t.d(n, {
        T: function () {
          return h;
        },
        Z: function () {
          return v;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(239091),
        s = t(129861),
        c = t(906732),
        a = t(158776),
        d = t(785717),
        u = t(697927),
        f = t(171368),
        m = t(981631),
        I = t(388032),
        x = t(519294);
      let p = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function h(e) {
        let { user: n, status: c, onSelect: d } = e,
          u = (0, l.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
        return (0, i.jsxs)(o.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: x.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, r.jW)(e, async () => {
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
              src: n.getAvatarURL(void 0, p),
              "aria-label": n.username,
              size: o.AvatarSizes.SIZE_40,
              status: c,
              isMobile: u,
              className: x.listAvatar,
            }),
            (0, i.jsx)(s.Z, {
              user: n,
              className: x.listName,
              discriminatorClass: x.listDiscriminator,
            }),
          ],
        });
      }
      function v(e) {
        let { user: n, onClose: t } = e,
          { mutualFriends: l } = (0, u.Z)(n.id),
          { analyticsLocations: r } = (0, c.ZP)(),
          { context: s, trackUserProfileAction: a } = (0, d.KZ)(),
          p = (e) => {
            t(),
              (0, f.openUserProfileModal)({
                ...s,
                userId: e,
                sourceAnalyticsLocations: r,
                analyticsLocation: {
                  section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, i.jsx)(o.ScrollerThin, {
          className: x.listScroller,
          fade: !0,
          children:
            null == l
              ? (0, i.jsx)("div", {
                  className: x.empty,
                  children: (0, i.jsx)(o.Spinner, {}),
                })
              : 0 === l.length
                ? (0, i.jsxs)("div", {
                    className: x.empty,
                    children: [
                      (0, i.jsx)("div", { className: x.emptyIconFriends }),
                      (0, i.jsx)("div", {
                        className: x.emptyText,
                        children: I.intl.string(I.t["/5p4g4"]),
                      }),
                    ],
                  })
                : l.map((e) => {
                    let { key: n, user: t, status: l } = e;
                    return (0, i.jsx)(
                      h,
                      {
                        user: t,
                        status: l,
                        onSelect: () => {
                          a({ action: "PRESS_MUTUAL_FRIEND" }), p(t.id);
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
          return b;
        },
        Z: function () {
          return E;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        o = t.n(l),
        r = t(780384),
        s = t(481060),
        c = t(239091),
        a = t(37234),
        d = t(410030),
        u = t(44315),
        f = t(565138),
        m = t(769654),
        I = t(51144),
        x = t(785717),
        p = t(200634),
        h = t(228168),
        v = t(981631),
        g = t(388032),
        Z = t(519294),
        _ = t(581958);
      let j = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_16);
      function b(e) {
        let { user: n, guild: l, nick: a, theme: d, onSelect: m } = e,
          x = n.hasAvatarForGuild(l.id);
        return (0, i.jsxs)(s.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: Z.listRow,
          onClick: m,
          onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("63288"),
                t.e("23755"),
                t.e("48835"),
                t.e("33053"),
                t.e("15669"),
                t.e("65840"),
                t.e("7654"),
                t.e("90508"),
                t.e("33862"),
                t.e("42587"),
                t.e("44156"),
                t.e("44294"),
                t.e("60254"),
                t.e("85552"),
                t.e("70205"),
                t.e("58227"),
                t.e("1187"),
                t.e("5456"),
                t.e("28377"),
                t.e("93375"),
                t.e("64679"),
                t.e("92117"),
                t.e("90346"),
                t.e("33213"),
                t.e("90723"),
              ]).then(t.bind(t, 545135));
              return (n) => (0, i.jsx)(e, { ...n, guild: l });
            });
          },
          children: [
            (0, i.jsx)(f.Z, {
              tabIndex: -1,
              guild: l,
              showBadge: !0,
              className: o()(
                Z.listAvatar,
                null == l.icon ? _.guildAvatarWithoutIcon : null,
              ),
              badgeStrokeColor: (0, u.Lq)(
                (0, r.wj)(d) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500,
              ),
              badgeTooltipColor: s.TooltipColors.PRIMARY,
              badgeTooltipDelay: h.vB,
              size: f.Z.Sizes.MEDIUM,
              active: !0,
            }),
            (0, i.jsxs)("div", {
              className: Z.listRowContent,
              children: [
                (0, i.jsx)("div", {
                  className: Z.listName,
                  children: l.toString(),
                }),
                x || null != a
                  ? (0, i.jsxs)("div", {
                      className: _.guildNick,
                      children: [
                        x &&
                          (0, i.jsx)(s.Avatar, {
                            src: n.getAvatarURL(l.id, j),
                            size: s.AvatarSizes.SIZE_16,
                            className: _.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != a ? a : I.ZP.getName(n),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { user: n, onClose: t } = e,
          { trackUserProfileAction: l } = (0, x.KZ)(),
          { mutualGuilds: o } = (0, p.Z)(n.id),
          r = (0, d.ZP)(),
          c = (e) => {
            (0, m.X)(e), t(), (0, a.xf)();
          };
        return (0, i.jsx)(s.ScrollerThin, {
          className: Z.listScroller,
          fade: !0,
          children:
            null == o
              ? (0, i.jsx)("div", {
                  className: Z.empty,
                  children: (0, i.jsx)(s.Spinner, {}),
                })
              : 0 === o.length
                ? (0, i.jsxs)("div", {
                    className: Z.empty,
                    children: [
                      (0, i.jsx)("div", { className: Z.emptyIconGuilds }),
                      (0, i.jsx)("div", {
                        className: Z.emptyText,
                        children: g.intl.string(g.t.zjVh8v),
                      }),
                    ],
                  })
                : o.map((e) => {
                    let { guild: t, nick: o } = e;
                    return (0, i.jsx)(
                      b,
                      {
                        user: n,
                        guild: t,
                        nick: o,
                        theme: r,
                        onSelect: () => {
                          l({ action: "PRESS_MUTUAL_GUILD" }), c(t.id);
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
          return _;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(442837),
        r = t(706898),
        s = t(481060),
        c = t(246946),
        a = t(785717),
        d = t(786366),
        u = t(323090),
        f = t(296391),
        m = t(384816),
        I = t(389190),
        x = t(428927),
        p = t(228168),
        h = t(388032),
        v = t(519294),
        g = t(722849);
      function Z(e) {
        let {
          section: n,
          subsection: t,
          user: l,
          currentUser: o,
          displayProfile: r,
          onClose: s,
        } = e;
        return n === p.oh.ACTIVITY
          ? (0, i.jsx)(f.Z, {
              profileGuildId: null == r ? void 0 : r.guildId,
              user: l,
              currentUser: o,
              onClose: s,
            })
          : n === p.oh.MUTUAL_FRIENDS
            ? (0, i.jsx)(I.Z, { user: l, onClose: s })
            : n === p.oh.MUTUAL_GUILDS
              ? (0, i.jsx)(x.Z, { user: l, onClose: s })
              : n === p.oh.BOT_DATA_ACCESS
                ? (0, i.jsx)(d.Z, { user: l })
                : n === p.oh.BOT_INFO
                  ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s,
                    })
                  : (0, i.jsx)(m.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: r,
                      subsection: t,
                      onClose: s,
                    });
      }
      function _(e) {
        var n, t, d;
        let {
            user: u,
            currentUser: f,
            displayProfile: m,
            items: I,
            initialSection: x = p.oh.USER_INFO,
            initialSubsection: _,
            onClose: j,
          } = e,
          { trackUserProfileAction: b } = (0, a.KZ)(),
          E = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: T, subsection: N }, S] = l.useState({
            section:
              null !==
                (d =
                  null ===
                    (n = I.find((e) => {
                      let { section: n } = e;
                      return n === x;
                    })) || void 0 === n
                    ? void 0
                    : n.section) && void 0 !== d
                ? d
                : null === (t = I[0]) || void 0 === t
                  ? void 0
                  : t.section,
            subsection: _,
          });
        l.useEffect(() => {
          if (null == I.find((e) => e.section === T))
            S({ section: I[0].section, subsection: void 0 });
        }, [I, T]);
        let y = l.useCallback(
          (e) => {
            b({ action: "PRESS_SECTION", section: e }),
              S({ section: e, subsection: void 0 });
          },
          [b, S],
        );
        return E
          ? (0, i.jsx)("div", {
              className: g.container,
              children: (0, i.jsxs)("div", {
                className: v.empty,
                children: [
                  (0, i.jsx)("div", { className: v.emptyIconStreamerMode }),
                  (0, i.jsx)("div", {
                    className: v.emptyText,
                    children: h.intl.string(h.t.Br1ls7),
                  }),
                ],
              }),
            })
          : (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(r.n, {
                  className: g.tabBar,
                  type: "top",
                  selectedItem: T,
                  onItemSelect: y,
                  children: I.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, i.jsx)(
                      r.n.Item,
                      {
                        className: g.tabBarItem,
                        id: n,
                        "aria-label": t,
                        children: (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          children: t,
                        }),
                      },
                      n,
                    );
                  }),
                }),
                (0, i.jsx)(Z, {
                  items: I,
                  section: T,
                  subsection: N,
                  user: u,
                  currentUser: f,
                  displayProfile: m,
                  onClose: j,
                }),
              ],
            });
      }
    },
    533835: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(512722),
        r = t.n(o),
        s = t(442837),
        c = t(100527),
        a = t(699516),
        d = t(594174),
        u = t(971393),
        f = t(787018),
        m = t(752342),
        I = t(886794),
        x = t(910364);
      let p = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
      function h(e) {
        let { user: n, ...t } = e,
          o = (0, s.e7)([d.default], () => d.default.getCurrentUser());
        r()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let c = (0, s.e7)([a.Z], () => a.Z.isBlocked(n.id)),
          [h, v] = l.useState(c),
          g = (0, u.sS)({ location: "UserProfileModalWrapper" });
        l.useEffect(() => {
          v(c);
        }, [c]);
        let Z = !p.some((e) => {
          var n;
          return (
            null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []
          ).includes(e);
        });
        return h && g && Z
          ? (0, i.jsx)(f.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => v(!1),
              ...t,
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(I.Z, { ...t, user: n, currentUser: o })
            : n.bot
              ? (0, i.jsx)(m.Z, { ...t, user: n, currentUser: o })
              : (0, i.jsx)(x.Z, { ...t, user: n, currentUser: o });
      }
    },
    398145: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(627341);
      var i = t(278074),
        l = t(200634),
        o = t(228168),
        r = t(388032);
      function s(e) {
        var n;
        let t =
          null === (n = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === n
            ? void 0
            : n.length;
        return [
          { section: o.oh.BOT_INFO, text: r.intl.string(r.t.jGoPJS) },
          {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, i.EQ)(t)
              .with(void 0, () => r.intl.string(r.t["4lTDZm"]))
              .with(0, () => r.intl.string(r.t.jpY0X1))
              .otherwise((e) =>
                r.intl.formatToPlainString(r.t.eE3oen, { count: e }),
              ),
          },
          { section: o.oh.BOT_DATA_ACCESS, text: r.intl.string(r.t.WstFb2) },
        ];
      }
    },
    643518: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(653041);
      var i = t(697927),
        l = t(200634),
        o = t(369566),
        r = t(326094),
        s = t(708108),
        c = t(146078),
        a = t(228168),
        d = t(981631),
        u = t(388032);
      function f(e) {
        var n, t;
        let { user: f, currentUser: m } = e,
          { live: I, recent: x, stream: p } = (0, o.Z)(f.id),
          h =
            null ===
              (n = (0, i.Z)(
                f.id,
                f.id !== (null == m ? void 0 : m.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          v =
            null ===
              (t = (0, l.Z)(
                f.id,
                f.id !== (null == m ? void 0 : m.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          g = f.id === (null == m ? void 0 : m.id),
          Z = (0, r.Z)({
            user: f,
            currentUser: m,
            location: d.Sbl.PROFILE_MODAL_TABS,
          }),
          _ = [{ section: a.oh.USER_INFO, text: u.intl.string(u.t.jGoPJS) }];
        return (
          (I.length > 0 || (g && x.length > 0) || null != p) &&
            _.push({ section: a.oh.ACTIVITY, text: u.intl.string(u.t.chq59f) }),
          !g &&
            Z &&
            (_.push({ section: a.oh.MUTUAL_FRIENDS, text: (0, s.Z)(h) }),
            _.push({ section: a.oh.MUTUAL_GUILDS, text: (0, c.Z)(v) })),
          _
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
    554470: function (e, n, t) {
      e.exports = {
        getPremiumButton: "getPremiumButton_d6b606",
        getPremiumButtonIcon: "getPremiumButtonIcon_d6b606",
      };
    },
    884451: function (e, n, t) {
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
//# sourceMappingURL=62abdedc8a2e2c320783.js.map
