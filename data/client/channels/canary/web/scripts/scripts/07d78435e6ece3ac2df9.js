"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25823"],
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
            rejectWithError: !0,
          });
        },
      };
    },
    666520: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        o = t(442837),
        r = t(481060),
        s = t(34854),
        c = t(531301),
        a = t(246946),
        d = t(981631),
        u = t(388032),
        f = t(453121);
      function m(e) {
        let { autoFocus: n = !1, className: t, userId: m, onUpdate: x } = e,
          I = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
          { loading: p, note: h } = (0, c.Z)(m),
          v = l.useRef(null);
        return (l.useEffect(() => {
          if (!n || I) return;
          let e = v.current;
          (null == e ? void 0 : e.selectionStart) != null &&
            (e.focus(), e.setSelection(e.value.length, e.value.length));
        }, [n, I]),
        I)
          ? null
          : (0, i.jsx)("div", {
              className: t,
              children: (0, i.jsx)(r.TextAreaAutosize, {
                ref: v,
                className: f.textarea,
                disabled: p,
                placeholder: p
                  ? u.intl.string(u.t["WLKx//"])
                  : u.intl.string(u.t.VBhOe3),
                "aria-label": u.intl.string(u.t.PbMNh4),
                onBlur: (e) => {
                  let n = e.currentTarget.value;
                  if ((null != h ? h : "") !== n)
                    null == x || x(), s.Z.updateNote(m, n);
                },
                onKeyPress: (e) => {
                  if (13 === e.which) {
                    if (e.shiftKey) {
                      var n;
                      (null !== (n = e.currentTarget.value.match(/\n/g)) &&
                      void 0 !== n
                        ? n
                        : []
                      ).length >= 5 && e.preventDefault();
                    } else e.preventDefault(), e.currentTarget.blur();
                  } else e.which === d.yXg.SPACE && e.stopPropagation();
                },
                defaultValue: null != h ? h : void 0,
                maxLength: d.vuo,
              }),
            });
      }
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
          return x;
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
        m = t(813631);
      function x(e) {
        let { userId: n, guildId: t, textClassName: x, tooltipDelay: I } = e,
          p = (0, l.e7)([c.default], () => c.default.locale),
          h = (0, l.e7)([d.Z], () => (null != t ? d.Z.getGuild(t) : null)),
          v = (0, l.e7)([a.ZP], () =>
            null != t ? a.ZP.getMember(t, n) : null,
          ),
          Z = (0, r.FI)(u.default.extractTimestamp(n), p),
          g = (0, r.FI)(null == v ? void 0 : v.joinedAt, p);
        return null == h || null == v
          ? (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: x,
              children: Z,
            })
          : (0, i.jsxs)("div", {
              className: m.memberSinceWrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: f.intl.string(f.t.uvGmCw),
                      delay: I,
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
                      className: x,
                      children: Z,
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: m.divider }),
                (0, i.jsxs)("div", {
                  className: m.memberSince,
                  children: [
                    (0, i.jsx)(o.Tooltip, {
                      text: h.name,
                      delay: I,
                      children: (e) =>
                        (0, i.jsx)(s.Z, {
                          ...e,
                          guild: h,
                          size: s.Z.Sizes.SMOL,
                        }),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: x,
                      children: g,
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
          return I;
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
        x = t(183776);
      function I(e) {
        let { currentUser: n, onClose: t } = e,
          I = (0, s.I5)(n),
          { trackUserProfileAction: p } = (0, c.KZ)();
        return I
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
              shinyButtonClassName: x.getPremiumButton,
              size: l.Button.Sizes.SMALL,
              iconClassName: x.getPremiumButtonIcon,
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
        W: function () {
          return T;
        },
        Z: function () {
          return y;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        o = t(120356),
        r = t.n(o),
        s = t(442837),
        c = t(481060),
        a = t(100527),
        d = t(906732),
        u = t(138201),
        f = t(699516),
        m = t(5192),
        x = t(785717),
        I = t(221292),
        p = t(687158),
        h = t(471879),
        v = t(502762),
        Z = t(848780),
        g = t(907179),
        j = t(475413),
        _ = t(228168),
        b = t(981631),
        E = t(388032),
        N = t(198343),
        S = t(161068);
      function y(e) {
        let {
            user: n,
            guildId: t,
            channelId: o,
            messageId: r,
            roleId: s,
            transitionState: f,
            onViewBlockedProfileClick: m,
            showGuildProfile: Z = !0,
            sourceAnalyticsLocations: g = [],
          } = e,
          y = t === b.ME ? void 0 : t,
          { analyticsLocations: T } = (0, d.ZP)([
            ...g,
            a.Z.BLOCKED_PROFILE_MODAL,
          ]),
          P = (0, x.ZB)({
            layout: "BLOCKED_PROFILE_MODAL",
            userId: n.id,
            guildId: y,
            channelId: o,
            messageId: r,
            roleId: s,
            showGuildProfile: Z,
          }),
          C = [
            { icon: c.BellSlashIcon, description: E.intl.string(E.t.Kn2UDA) },
            { icon: c.DenyIcon, description: E.intl.string(E.t.QxrDY2) },
          ],
          A = (0, p.ZP)(n.id, Z ? y : void 0),
          L = l.createRef();
        return (0, i.jsx)(d.Gt, {
          value: T,
          children: (0, i.jsx)(x.Mt, {
            value: P,
            children: (0, i.jsx)(c.ModalRoot, {
              transitionState: f,
              className: N.root,
              hideShadow: !0,
              "aria-label": E.intl.string(E.t["3N/J2t"]),
              children: (0, i.jsx)(v.Z, {
                user: n,
                displayProfile: A,
                profileType: _.y0.FULL_SIZE,
                ref: L,
                children: (0, i.jsxs)("div", {
                  className: N.container,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: S,
                      className: N.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: N.body,
                      children: [
                        (0, i.jsx)(h.Z, { user: n, guildId: y }),
                        (0, i.jsx)(c.Heading, {
                          variant: "heading-xl/bold",
                          className: N.header,
                          children: E.intl.string(E.t.VNJ7UF),
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-md/medium",
                          children: E.intl.format(E.t.LXbngo, {
                            username: n.username,
                          }),
                        }),
                        (0, i.jsx)(c.Text, {
                          variant: "text-md/medium",
                          children: E.intl.string(E.t["uBvD//"]),
                        }),
                        (0, i.jsx)("div", {
                          className: N.safetyTable,
                          children: C.map((e, n) => {
                            let { icon: t, description: l } = e;
                            return (0, i.jsx)(
                              u.Z,
                              {
                                icon: t,
                                title: l,
                                titleVariant: "text-md/medium",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsx)(j.tG, {
                          className: N.centeredButton,
                          action: "VIEW_BLOCKED_PROFILE",
                          text: E.intl.string(E.t.iXAna2),
                          autoFocus: !0,
                          fullWidth: !1,
                          onClick: () => {
                            null == m || m(),
                              (0, I.pQ)({
                                action: "VIEW_BLOCKED_PROFILE",
                                analyticsLocations: T,
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
      function T(e) {
        let {
            user: n,
            guildId: t,
            channelId: o,
            messageId: j,
            roleId: y,
            transitionState: T,
            onViewBlockedProfileClick: P,
            showGuildProfile: C = !0,
            sourceAnalyticsLocations: A = [],
          } = e,
          L = t === b.ME ? void 0 : t,
          M = (0, s.e7)([f.Z], () => f.Z.isBlocked(n.id)),
          { analyticsLocations: R } = (0, d.ZP)([
            ...A,
            M ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL,
          ]),
          O = (0, x.ZB)({
            layout: M ? "BLOCKED_PROFILE_MODAL" : "IGNORED_PROFILE_MODAL",
            userId: n.id,
            guildId: L,
            channelId: o,
            messageId: j,
            roleId: y,
            showGuildProfile: C,
          }),
          U = [
            { icon: c.CircleCheckIcon, description: E.intl.string(E.t.kcuWvb) },
            {
              icon: c.CircleCheckIcon,
              description: E.intl.string(M ? E.t.QxrDY2 : E.t.W6fjkZ),
            },
          ],
          B = (0, p.ZP)(n.id, C ? L : void 0),
          D = l.createRef();
        return (0, i.jsx)(d.Gt, {
          value: R,
          children: (0, i.jsx)(x.Mt, {
            value: O,
            children: (0, i.jsx)(c.ModalRoot, {
              transitionState: T,
              className: N.root,
              hideShadow: !0,
              "aria-label": E.intl.string(E.t["3N/J2t"]),
              children: (0, i.jsx)(v.Z, {
                user: n,
                displayProfile: B,
                profileType: _.y0.FULL_SIZE,
                ref: D,
                children: (0, i.jsxs)("div", {
                  className: N.container,
                  children: [
                    (0, i.jsx)("img", {
                      alt: "",
                      src: S,
                      className: N.previewForCollected,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: r()(N.body, N.bodySpacing),
                      children: [
                        (0, i.jsx)(h.i, { user: n, guildId: L }),
                        (0, i.jsxs)("div", {
                          className: N.headerContainer,
                          children: [
                            (0, i.jsx)(c.Heading, {
                              variant: "heading-xl/bold",
                              color: "header-primary",
                              children: E.intl.string(E.t.b33pLC),
                            }),
                            (0, i.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "header-primary",
                              children: E.intl.format(
                                M ? E.t["8F+WNz"] : E.t["/cZp5u"],
                                { username: m.ZP.getName(L, o, n) },
                              ),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: N.restrictedSafetyTable,
                          children: U.map((e, n) => {
                            let { icon: t, description: l } = e;
                            return (0, i.jsx)(
                              u.Z,
                              {
                                icon: t,
                                title: l,
                                titleVariant: "text-md/normal",
                              },
                              n,
                            );
                          }),
                        }),
                        (0, i.jsxs)(c.Stack, {
                          align: "center",
                          children: [
                            (0, i.jsx)(g.Z, {
                              size: c.ButtonSizes.MEDIUM,
                              isBlocked: M,
                              onClick: () => {
                                null == P || P(),
                                  (0, I.pQ)({
                                    action: M
                                      ? "VIEW_BLOCKED_PROFILE"
                                      : "VIEW_IGNORED_PROFILE",
                                    analyticsLocations: R,
                                    ...O,
                                  });
                              },
                            }),
                            (0, i.jsx)(Z.Z, {
                              userId: n.id,
                              onClick: () => {
                                null == P || P(),
                                  (0, I.pQ)({
                                    action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                    analyticsLocations: R,
                                    ...O,
                                  });
                              },
                            }),
                          ],
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
          return T;
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
        m = t(681837),
        x = t(502762),
        I = t(530),
        p = t(871604),
        h = t(952124),
        v = t(53558),
        Z = t(544989),
        g = t(934861),
        j = t(4517),
        _ = t(740628),
        b = t(398145),
        E = t(228168),
        N = t(981631),
        S = t(388032),
        y = t(179575);
      function T(e) {
        let {
            user: n,
            currentUser: t,
            guildId: T,
            channelId: P,
            messageId: C,
            roleId: A,
            sessionId: L,
            initialSection: M,
            initialSubsection: R,
            transitionState: O,
            onClose: U,
            sourceAnalyticsLocations: B = [],
          } = e,
          D = T === N.ME ? void 0 : T,
          F = (0, a.ZP)(n.id, D),
          { analyticsLocations: G } = (0, r.ZP)([
            ...B,
            o.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          w = (0, c.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: D,
            channelId: P,
            messageId: C,
            roleId: A,
          }),
          k = (0, b.Z)(n);
        return (0, i.jsx)(r.Gt, {
          value: G,
          children: (0, i.jsx)(c.Mt, {
            value: w,
            children: (0, i.jsx)(l.ModalRoot, {
              transitionState: O,
              className: y.root,
              hideShadow: !0,
              "aria-label": S.intl.string(S.t["3N/J2t"]),
              children: (0, i.jsxs)(x.Z, {
                user: n,
                displayProfile: F,
                profileType: E.y0.FULL_SIZE,
                children: [
                  (0, i.jsx)(Z.Z, {
                    profileType: E.y0.FULL_SIZE,
                    children: (0, i.jsx)(h.Z, { user: n, guildId: D }),
                  }),
                  (0, i.jsxs)("header", {
                    children: [
                      (0, i.jsx)(f.Z, {
                        user: n,
                        displayProfile: F,
                        profileType: E.y0.FULL_SIZE,
                      }),
                      (0, i.jsxs)("div", {
                        className: y.headerInner,
                        children: [
                          (0, i.jsx)(d.Z, {
                            user: n,
                            displayProfile: F,
                            guildId: D,
                            channelId: P,
                            profileType: E.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(j.Z, {
                            location: "BotUserProfileModal",
                            user: n,
                            profileType: E.y0.FULL_SIZE,
                            hasEntered: O === l.ModalTransitionState.ENTERED,
                            onCloseProfile: U,
                          }),
                          (0, i.jsxs)("div", {
                            className: y.headerButtons,
                            children: [
                              (0, i.jsx)(g.c, {
                                userId: n.id,
                                onClose: U,
                                className: y.messageTextButton,
                              }),
                              (0, i.jsx)(g.v, {
                                userId: n.id,
                                onClose: U,
                                tooltipContainerClassName: y.messageIconButton,
                              }),
                              (0, i.jsx)(v.Z, { user: n, guildId: D }),
                              (0, i.jsx)(p.Z, { user: n }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: y.body,
                    children: [
                      (0, i.jsx)(I.Z, {
                        user: n,
                        profileType: E.y0.FULL_SIZE,
                        nickname: s.ZP.getName(D, P, n),
                        pronouns: null == F ? void 0 : F.pronouns,
                        nicknameVariant: "heading-xl/bold",
                        nicknameIcons: (0, i.jsx)(m.Z, { userId: n.id }),
                        tags: (0, i.jsx)(u.Z, {
                          displayProfile: F,
                          profileType: E.y0.FULL_SIZE,
                          onClose: U,
                        }),
                      }),
                      (0, i.jsx)(x.Z.Overlay, {
                        className: y.overlay,
                        children: (0, i.jsx)(_.Z, {
                          user: n,
                          currentUser: t,
                          displayProfile: F,
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
        d = t(506007);
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
            hasGuildMembers: x,
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
            x &&
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
          return g;
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
        x = t(900927),
        I = t(678738),
        p = t(179828),
        h = t(228168),
        v = t(388032),
        Z = t(794603);
      function g(e) {
        var n;
        let {
            user: t,
            currentUser: g,
            displayProfile: j,
            subsection: _,
            onClose: b,
          } = e,
          { trackUserProfileAction: E } = (0, d.KZ)(),
          N = (0, l.e7)([c.Z], () =>
            (null == j ? void 0 : j.guildId) != null
              ? c.Z.getGuild(j.guildId)
              : null,
          ),
          S = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e
              ? void 0
              : e.application;
          }),
          y = (0, l.e7)([s.Z, a.Z], () => s.Z.getChannel(a.Z.getChannelId()));
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: Z.scroller,
          children: [
            (null == j ? void 0 : j.bio) != null &&
              (null == j ? void 0 : j.bio) !== "" &&
              (0, i.jsx)(m.Z, { userBio: j.bio, setLineClamp: !1 }),
            (null == S ? void 0 : S.popularApplicationCommandIds) != null &&
              null != y &&
              (0, i.jsx)(f.Z, {
                applicationId: S.id,
                commandIds: S.popularApplicationCommandIds,
                channel: y,
                guildId:
                  null !== (n = null == j ? void 0 : j.guildId) && void 0 !== n
                    ? n
                    : void 0,
                onClick: b,
              }),
            null != N &&
              (0, i.jsx)(p.Z, {
                user: t,
                currentUser: g,
                guild: N,
                scrollIntoView: _ === h.Tb.ROLES,
              }),
            (0, i.jsx)(I.Z, {
              heading: v.intl.string(v.t["A//N4u"]),
              children: (0, i.jsx)(x.Z, {
                userId: t.id,
                guildId: null == j ? void 0 : j.guildId,
                tooltipDelay: h.vB,
              }),
            }),
            (0, i.jsx)(I.Z, {
              heading: v.intl.string(v.t.PbMNh4),
              scrollIntoView: _ === h.Tb.NOTE,
              children: (0, i.jsx)(r.Z, {
                userId: t.id,
                className: Z.note,
                autoFocus: _ === h.Tb.NOTE,
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
        x = t(648052),
        I = t(867176),
        p = t(280885),
        h = t(900927),
        v = t(678738),
        Z = t(502762),
        g = t(530),
        j = t(679332),
        _ = t(544989),
        b = t(228168),
        E = t(981631),
        N = t(388032),
        S = t(179575),
        y = t(794603),
        T = t(743185);
      function P(e) {
        let {
            user: n,
            guildId: t,
            channelId: P,
            messageId: C,
            roleId: A,
            sessionId: L,
            transitionState: M,
            onClose: R,
            sourceAnalyticsLocations: O = [],
          } = e,
          U = t === E.ME ? void 0 : t,
          B = (0, f.ZP)(n.id, U),
          { analyticsLocations: D } = (0, c.ZP)([
            ...O,
            s.Z.SIMPLIFIED_PROFILE_MODAL,
          ]),
          F = (0, u.ZB)({
            layout: "SIMPLIFIED_MODAL",
            userId: n.id,
            sourceSessionId: L,
            guildId: U,
            channelId: P,
            messageId: C,
            roleId: A,
          }),
          G = l.createRef(),
          w = (0, r.Z)(G);
        return (0, i.jsx)(c.Gt, {
          value: D,
          children: (0, i.jsx)(u.Mt, {
            value: F,
            children: (0, i.jsxs)(o.ModalRoot, {
              transitionState: M,
              className: S.root,
              hideShadow: !0,
              "aria-label": N.intl.string(N.t["3N/J2t"]),
              children: [
                (0, i.jsxs)(Z.Z, {
                  user: n,
                  displayProfile: B,
                  profileType: b.y0.FULL_SIZE,
                  ref: G,
                  children: [
                    (0, i.jsx)(_.Z, {
                      profileType: b.y0.FULL_SIZE,
                      children: (0, i.jsx)(j.Z, { user: n }),
                    }),
                    (0, i.jsxs)("header", {
                      children: [
                        (0, i.jsx)(I.Z, {
                          user: n,
                          displayProfile: B,
                          profileType: b.y0.FULL_SIZE,
                        }),
                        (0, i.jsx)("div", {
                          className: S.headerInner,
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
                      className: S.body,
                      children: [
                        (0, i.jsx)(g.Z, {
                          user: n,
                          profileType: b.y0.FULL_SIZE,
                          nickname: d.ZP.getName(U, P, n),
                          pronouns: null == B ? void 0 : B.pronouns,
                          nicknameVariant: "heading-xl/bold",
                          tags: (0, i.jsx)(x.Z, {
                            displayProfile: B,
                            profileType: b.y0.FULL_SIZE,
                            onClose: R,
                          }),
                        }),
                        (0, i.jsx)(Z.Z.Overlay, {
                          className: S.overlay,
                          children: (0, i.jsxs)("div", {
                            className: T.container,
                            children: [
                              (0, i.jsx)(o.TabBar, {
                                className: T.tabBar,
                                type: "top",
                                selectedItem: b.oh.BOT_INFO,
                                onItemSelect: E.dG4,
                                children: (0, i.jsx)(
                                  o.TabBar.Item,
                                  {
                                    className: T.tabBarItem,
                                    id: b.oh.BOT_INFO,
                                    "aria-label": N.intl.string(N.t.jGoPJS),
                                    children: (0, i.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: N.intl.string(N.t.jGoPJS),
                                    }),
                                  },
                                  b.oh.BOT_INFO,
                                ),
                              }),
                              (0, i.jsxs)(o.ScrollerThin, {
                                fade: !0,
                                className: y.scroller,
                                children: [
                                  (0, i.jsx)(p.Z, {
                                    userId: n.id,
                                    userBio: null == B ? void 0 : B.bio,
                                    setLineClamp: !1,
                                  }),
                                  (0, i.jsx)(v.Z, {
                                    heading: N.intl.string(N.t["A//N4u"]),
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
        o = t(476183),
        r = t(442837),
        s = t(481060),
        c = t(727637),
        a = t(616780),
        d = t(100527),
        u = t(906732),
        f = t(680295),
        m = t(699516),
        x = t(5192),
        I = t(785717),
        p = t(221292),
        h = t(816988),
        v = t(687158),
        Z = t(326094),
        g = t(510659),
        j = t(113557),
        _ = t(867176),
        b = t(451834),
        E = t(502762),
        N = t(544989),
        S = t(705556),
        y = t(481932),
        T = t(195387),
        P = t(272510),
        C = t(748283),
        A = t(902423),
        L = t(4517),
        M = t(171368),
        R = t(62154),
        O = t(412317),
        U = t(228168),
        B = t(981631),
        D = t(388032),
        F = t(179575);
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
          $ = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE,
          }),
          ee = (0, I.ZB)({
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
          en = (0, g.$m)(),
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
                    label: D.intl.string(D.t.GISTtb),
                    subtext: D.intl.formatToPlainString(D.t["mn/nW1"], {
                      displayName: x.ZP.getName(void 0, void 0, n),
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
                    label: D.intl.string(D.t.DisZzM),
                    subtext: D.intl.formatToPlainString(D.t["mn/nW1"], {
                      displayName: x.ZP.getName(G, w, n),
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
          children: (0, i.jsx)(I.Mt, {
            value: ee,
            children: (0, i.jsx)(g.NJ, {
              value: en,
              children: (0, i.jsxs)(s.ModalRoot, {
                transitionState: H,
                className: F.root,
                hideShadow: !0,
                "aria-label": D.intl.string(D.t["3N/J2t"]),
                children: [
                  (0, i.jsxs)(E.Z, {
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
                                (0, i.jsx)(A.Z, { onClose: J }),
                                (0, i.jsx)(C.Z, { currentUser: t, onClose: J }),
                              ],
                            }),
                          (0, i.jsx)(T.Z, {
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
                          (0, i.jsx)(P.Z, {
                            user: n,
                            guildId: G,
                            viewProfileItem: eu(),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("header", {
                        children: [
                          (0, i.jsx)(_.Z, {
                            user: n,
                            displayProfile: ei,
                            profileType: U.y0.FULL_SIZE,
                          }),
                          (0, i.jsx)(b.Z, {
                            userId: n.id,
                            onClose: J,
                            className: F.toast,
                          }),
                          null != en.interactionType &&
                            (0, i.jsx)(o.animated.div, {
                              style: et,
                              className: F.backdrop,
                            }),
                          (0, i.jsxs)("div", {
                            className: F.headerInner,
                            children: [
                              (0, i.jsx)(j.Z, {
                                location: "UserProfileModal",
                                user: n,
                                displayProfile: ei,
                                guildId: G,
                                channelId: w,
                                profileType: U.y0.FULL_SIZE,
                              }),
                              (0, i.jsx)(L.Z, {
                                location: "UserProfileModal",
                                user: n,
                                guildId: G,
                                channelId: w,
                                profileType: U.y0.FULL_SIZE,
                                hasEntered:
                                  H === s.ModalTransitionState.ENTERED,
                                onCloseProfile: J,
                              }),
                              (0, i.jsxs)("div", {
                                className: F.headerButtons,
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(353647),
        s = t(63063),
        c = t(369566),
        a = t(678738),
        d = t(151545),
        u = t(744802),
        f = t(493043),
        m = t(228168),
        x = t(981631),
        I = t(388032),
        p = t(842086),
        h = t(586070);
      function v(e) {
        let {
            user: n,
            currentUser: t,
            profileGuildId: v,
            subsection: Z,
            onClose: g,
          } = e,
          { live: j, recent: _, stream: b } = (0, c.Z)(n.id),
          E = j.length > 0 || _.length > 0 || null != b,
          N = (0, l.e7)([r.Z], () => r.Z.isFetchingUserOutbox(n.id));
        return !E && N
          ? (0, i.jsx)("div", {
              className: h.empty,
              children: (0, i.jsx)(o.Spinner, {}),
            })
          : (0, i.jsxs)(o.ScrollerThin, {
              className: p.scroller,
              fade: !0,
              children: [
                (0, i.jsxs)(a.Z, {
                  children: [
                    null != b &&
                      (0, i.jsx)(f.Z, {
                        location: "UserProfileModalActivity",
                        user: n,
                        currentUser: t,
                        stream: b,
                        onClose: g,
                        profileGuildId: v,
                      }),
                    j.map((e, l) =>
                      (0, i.jsx)(
                        d.Z,
                        {
                          user: n,
                          currentUser: t,
                          activity: e,
                          onClose: g,
                          profileGuildId: v,
                        },
                        "live-".concat(l),
                      ),
                    ),
                  ],
                }),
                _.length > 0 &&
                  (0, i.jsx)(a.Z, {
                    heading: I.intl.string(I.t.M0zgnZ),
                    subheading:
                      n.id === t.id
                        ? I.intl.format(I.t["4bk9Ag"], {
                            learnMoreHook: (e, n) =>
                              (0, i.jsx)(
                                o.Anchor,
                                {
                                  href: s.Z.getArticleURL(
                                    x.BhN.ACTIVITY_STATUS_SETTINGS,
                                  ),
                                  children: e,
                                },
                                n,
                              ),
                          })
                        : void 0,
                    scrollIntoView: Z === m.Tb.RECENT_ACTIVITY,
                    children: _.map((e) =>
                      (0, i.jsx)(
                        u.Z,
                        {
                          location: "UserProfileModalActivity",
                          user: n,
                          currentUser: t,
                          entry: e,
                          profileGuildId: v,
                          onClose: g,
                        },
                        e.id,
                      ),
                    ),
                  }),
              ],
            });
      }
    },
    62154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
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
        m = t(944043),
        x = t(502762),
        I = t(530),
        p = t(740628),
        h = t(643518),
        v = t(228168),
        Z = t(981631),
        g = t(179575);
      function j(e) {
        var n;
        let {
            user: t,
            currentUser: j,
            channelId: _,
            displayProfile: b,
            initialSection: E,
            initialSubsection: N,
            friendToken: S,
            onClose: y,
          } = e,
          T = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
          P = (0, h.Z)({ user: t, currentUser: j, initialSubsection: N }),
          C = r.ZP.useName(null == b ? void 0 : b.guildId, _, t),
          A = t.id === j.id,
          { dimissibleUpsellsEnabled: L } = (0, c.u)({
            location: "UserProfileModalBody",
          }),
          M = (0, s.I5)(j);
        return (0, i.jsxs)("div", {
          className: g.body,
          children: [
            (0, i.jsx)(I.Z, {
              user: t,
              profileType: v.y0.FULL_SIZE,
              nickname: C,
              pronouns: null == b ? void 0 : b.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, i.jsx)(u.Z, { userId: t.id }),
              tags: (0, i.jsx)(a.Z, {
                displayProfile: b,
                profileType: v.y0.FULL_SIZE,
                onClose: y,
              }),
            }),
            T === Z.OGo.PENDING_INCOMING &&
              (0, i.jsx)(x.Z.Overlay, {
                className: g.friendRequestBannerOverlay,
                children: (0, i.jsx)(f.Z, {
                  user: t,
                  guildId:
                    null !== (n = null == b ? void 0 : b.guildId) &&
                    void 0 !== n
                      ? n
                      : void 0,
                  channelId: _,
                  friendToken: S,
                  className: g.friendRequestBanner,
                }),
              }),
            (0, i.jsx)(m.Z, { user: t, source: m.t.MODAL }),
            L && A && (0, i.jsx)(d.Z, { isPremiumUser: M, onInteraction: y }),
            (0, i.jsx)(x.Z.Overlay, {
              className: g.overlay,
              children: (0, i.jsx)(p.Z, {
                user: t,
                currentUser: j,
                displayProfile: b,
                items: P,
                initialSection: E,
                initialSubsection: N,
                onClose: y,
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
        u = t(323823);
      function f(e) {
        let {
            isCurrentUser: n,
            user: t,
            relationshipType: f,
            friendToken: m,
            onClose: x,
          } = e,
          { newestAnalyticsLocation: I } = (0, r.ZP)();
        return n || f === a.OGo.BLOCKED
          ? null
          : f === a.OGo.FRIEND || t.bot
            ? (0, i.jsx)("div", {
                className: u.multipleButtons,
                children: (0, i.jsx)(c.c, { userId: t.id, onClose: x }),
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
                    (0, i.jsx)(c.c, { userId: t.id, onClose: x }),
                  ],
                })
              : (0, i.jsxs)("div", {
                  className: u.multipleButtons,
                  children: [
                    (0, i.jsx)(c.v, { userId: t.id, onClose: x }),
                    (0, i.jsx)(s.tG, {
                      action: "SEND_FRIEND_REQUEST",
                      icon: l.UserPlusIcon,
                      text: d.intl.string(d.t["7815aW"]),
                      color: l.Button.Colors.BRAND,
                      onClick: () => {
                        o.Z.addRelationship({
                          userId: t.id,
                          context: { location: I },
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
        x = t(280885),
        I = t(819602),
        p = t(900927),
        h = t(678738),
        v = t(652853),
        Z = t(179828),
        g = t(228168),
        j = t(388032),
        _ = t(794603);
      function b(e) {
        let {
            user: n,
            currentUser: t,
            displayProfile: b,
            subsection: E,
            onClose: N,
          } = e,
          { theme: S } = (0, v.z)(),
          { trackUserProfileAction: y } = (0, u.KZ)(),
          T = null == b ? void 0 : b.guildId,
          P = (0, l.e7)([a.Z], () => (null != T ? a.Z.getGuild(T) : null)),
          C = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
          A = (0, l.e7)([c.default], () => c.default.locale),
          L = (0, m.Z)(n.id),
          M = (0, f.Z)(n.id);
        return (0, i.jsxs)(o.ScrollerThin, {
          fade: !0,
          className: _.scroller,
          children: [
            (null == b ? void 0 : b.bio) != null &&
              (null == b ? void 0 : b.bio) !== "" &&
              (0, i.jsx)(x.Z, { userBio: b.bio, setLineClamp: !1 }),
            null != P &&
              (0, i.jsx)(Z.Z, {
                user: n,
                currentUser: t,
                guild: P,
                scrollIntoView: E === g.Tb.ROLES,
              }),
            n.isProvisional && (0, i.jsx)(s.Z, { look: "profile_modal" }),
            (0, i.jsx)(h.Z, {
              heading: j.intl.string(j.t.a6XYDw),
              children: (0, i.jsx)(p.Z, {
                userId: n.id,
                guildId: null == b ? void 0 : b.guildId,
                tooltipDelay: g.vB,
              }),
            }),
            L.length > 0 &&
              (0, i.jsx)(h.Z, {
                heading: j.intl.string(j.t["3fe7U1"]),
                scrollIntoView: E === g.Tb.CONNECTIONS,
                children: (0, i.jsx)(I.OA, {
                  connectedAccounts: L,
                  className: _.connections,
                  userId: n.id,
                  theme: S,
                  locale: A,
                }),
              }),
            M.length > 0 &&
              (0, i.jsx)(h.Z, {
                heading: j.intl.string(j.t.PHjkRE),
                children: M.map((e) =>
                  (0, i.jsx)(
                    I.tH,
                    {
                      className: _.appsConnections,
                      applicationRoleConnection: e,
                      locale: A,
                      onApplicationClicked: () => {
                        y({ action: "PRESS_APP_CONNECTION" }), N();
                      },
                      selectedGuildId: null != C ? C : void 0,
                    },
                    e.application.id,
                  ),
                ),
              }),
            (0, i.jsx)(h.Z, {
              heading: j.intl.string(j.t.PbMNh4),
              scrollIntoView: E === g.Tb.NOTE,
              children: (0, i.jsx)(r.Z, {
                userId: n.id,
                className: _.note,
                autoFocus: E === g.Tb.NOTE,
                onUpdate: () => y({ action: "SET_NOTE" }),
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
        x = t(700785),
        I = t(785717),
        p = t(256226),
        h = t(678738),
        v = t(314172),
        Z = t(981631),
        g = t(388032),
        j = t(270932);
      function _(e) {
        let {
            user: n,
            currentUser: t,
            guild: c,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: I,
          } = e,
          h = f && null != a,
          _ = l.useMemo(() => "roles-".concat((0, o.Z)()), []),
          b = (0, r.ZP)({
            id: _,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0,
          }),
          E = d.length,
          N =
            0 === E
              ? g.intl.string(g.t["vR7M+/"])
              : g.intl.formatToPlainString(g.t.PCs0oq, { numRoles: E }),
          S = d.map((e) => {
            var l;
            return (0, i.jsx)(
              p.Z,
              {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => I(e),
                canRemove: f
                  ? x.r6(c, t.id, u, e)
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
                className: j.root,
                "aria-label": N,
                ref: n,
                ...t,
                children: [
                  S,
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
          { trackUserProfileAction: s } = (0, I.KZ)(),
          p = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
          v = (0, c.e7)([f.Z], () => f.Z.getRoles(o.id)),
          j = null == p ? void 0 : p.roles,
          b = l.useMemo(
            () =>
              null == j || 0 === j.length
                ? []
                : Object.values(v)
                    .filter((e) => j.includes(e.id))
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
            [v, j],
          ),
          E = x.e9(o, t.id),
          [N] = (0, c.Wu)([m.Z], () => [
            m.Z.can(Z.Plq.MANAGE_ROLES, o),
            null != o ? m.Z.getGuildVersion(o.id) : null,
          ]),
          S = l.useCallback(
            (e) => {
              var t, i;
              s({ action: "REMOVE_ROLE" });
              let l =
                null !==
                  (i = null == j ? void 0 : j.filter((n) => n !== e.id)) &&
                void 0 !== i
                  ? i
                  : [];
              (null === (t = e.tags) || void 0 === t
                ? void 0
                : t.guild_connections) === null
                ? a.Z.unassignGuildRoleConnection(o.id, e.id)
                : d.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
            },
            [j, o.id, n.id, s],
          ),
          y = l.useCallback(
            (e) => {
              s({ action: "ADD_ROLE" });
              let t = null != j ? j : [];
              -1 === t.indexOf(e) && (t = t.concat([e])),
                d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [j, o.id, n.id, s],
          ),
          T = N && null != p;
        return 0 !== b.length || T
          ? (0, i.jsx)(h.Z, {
              heading: g.intl.string(g.t.LPJmLy),
              scrollIntoView: r,
              children: (0, i.jsx)(_, {
                user: n,
                currentUser: t,
                guild: o,
                guildMember: p,
                roles: b,
                highestRole: E,
                canManageRoles: N,
                onAddRole: y,
                onRemoveRole: S,
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
        x = t(388032),
        I = t(586070);
      let p = (0, o.getAvatarSize)(o.AvatarSizes.SIZE_40);
      function h(e) {
        let { user: n, status: c, onSelect: d } = e,
          u = (0, l.e7)([a.Z], () => a.Z.isMobileOnline(n.id));
        return (0, i.jsxs)(o.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: I.listRow,
          onClick: d,
          onContextMenu: (e) => {
            (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("79695"),
                t.e("69220"),
                t.e("76747"),
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
              className: I.listAvatar,
            }),
            (0, i.jsx)(s.Z, {
              user: n,
              className: I.listName,
              discriminatorClass: I.listDiscriminator,
            }),
          ],
        });
      }
      function v(e) {
        let { user: n, onClose: t } = e,
          { mutualFriends: l, isFetching: r } = (0, u.Z)(n.id),
          { analyticsLocations: s } = (0, c.ZP)(),
          { context: a, trackUserProfileAction: p } = (0, d.KZ)(),
          v = (e) => {
            t(),
              (0, f.openUserProfileModal)({
                ...a,
                userId: e,
                sourceAnalyticsLocations: s,
                analyticsLocation: {
                  section: m.jXE.USER_PROFILE_MUTUAL_FRIENDS,
                },
              });
          };
        return (0, i.jsx)(o.ScrollerThin, {
          className: I.listScroller,
          fade: !0,
          children:
            null == l && r
              ? (0, i.jsx)("div", {
                  className: I.empty,
                  children: (0, i.jsx)(o.Spinner, {}),
                })
              : (null != l || r) && (null == l ? void 0 : l.length) !== 0
                ? null == l
                  ? void 0
                  : l.map((e) => {
                      let { key: n, user: t, status: l } = e;
                      return (0, i.jsx)(
                        h,
                        {
                          user: t,
                          status: l,
                          onSelect: () => {
                            p({ action: "PRESS_MUTUAL_FRIEND" }), v(t.id);
                          },
                        },
                        n,
                      );
                    })
                : (0, i.jsxs)("div", {
                    className: I.empty,
                    children: [
                      (0, i.jsx)("div", { className: I.emptyIconFriends }),
                      (0, i.jsx)("div", {
                        className: I.emptyText,
                        children: x.intl.string(x.t["/5p4g4"]),
                      }),
                    ],
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
        x = t(51144),
        I = t(785717),
        p = t(200634),
        h = t(228168),
        v = t(981631),
        Z = t(388032),
        g = t(586070),
        j = t(281153);
      let _ = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_16);
      function b(e) {
        let { user: n, guild: l, nick: a, theme: d, onSelect: m } = e,
          I = n.hasAvatarForGuild(l.id);
        return (0, i.jsxs)(s.Clickable, {
          focusProps: { offset: { right: 8 } },
          className: g.listRow,
          onClick: m,
          onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("63288"),
                t.e("48835"),
                t.e("90508"),
                t.e("65840"),
                t.e("7654"),
                t.e("68445"),
                t.e("33862"),
                t.e("80284"),
                t.e("20561"),
                t.e("69174"),
                t.e("98479"),
                t.e("53967"),
                t.e("20242"),
                t.e("60696"),
                t.e("70205"),
                t.e("58227"),
                t.e("16114"),
                t.e("1187"),
                t.e("58531"),
                t.e("93375"),
                t.e("64679"),
                t.e("14774"),
                t.e("94107"),
                t.e("33213"),
                t.e("55109"),
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
                g.listAvatar,
                null == l.icon ? j.guildAvatarWithoutIcon : null,
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
              className: g.listRowContent,
              children: [
                (0, i.jsx)("div", {
                  className: g.listName,
                  children: l.toString(),
                }),
                I || null != a
                  ? (0, i.jsxs)("div", {
                      className: j.guildNick,
                      children: [
                        I &&
                          (0, i.jsx)(s.Avatar, {
                            src: n.getAvatarURL(l.id, _),
                            size: s.AvatarSizes.SIZE_16,
                            className: j.guildAvatar,
                            "aria-hidden": !0,
                          }),
                        null != a ? a : x.ZP.getName(n),
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
          { trackUserProfileAction: l } = (0, I.KZ)(),
          { mutualGuilds: o, isFetching: r } = (0, p.Z)(n.id),
          c = (0, d.ZP)(),
          u = (e) => {
            (0, m.X)(e), t(), (0, a.xf)();
          };
        return (0, i.jsx)(s.ScrollerThin, {
          className: g.listScroller,
          fade: !0,
          children:
            null == o && r
              ? (0, i.jsx)("div", {
                  className: g.empty,
                  children: (0, i.jsx)(s.Spinner, {}),
                })
              : (null != o || r) && (null == o ? void 0 : o.length) !== 0
                ? null == o
                  ? void 0
                  : o.map((e) => {
                      let { guild: t, nick: o } = e;
                      return (0, i.jsx)(
                        b,
                        {
                          user: n,
                          guild: t,
                          nick: o,
                          theme: c,
                          onSelect: () => {
                            l({ action: "PRESS_MUTUAL_GUILD" }), u(t.id);
                          },
                        },
                        t.id,
                      );
                    })
                : (0, i.jsxs)("div", {
                    className: g.empty,
                    children: [
                      (0, i.jsx)("div", { className: g.emptyIconGuilds }),
                      (0, i.jsx)("div", {
                        className: g.emptyText,
                        children: Z.intl.string(Z.t.zjVh8v),
                      }),
                    ],
                  }),
        });
      }
    },
    740628: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return j;
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
        x = t(389190),
        I = t(428927),
        p = t(228168),
        h = t(388032),
        v = t(586070),
        Z = t(743185);
      function g(e) {
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
            ? (0, i.jsx)(x.Z, { user: l, onClose: s })
            : n === p.oh.MUTUAL_GUILDS
              ? (0, i.jsx)(I.Z, { user: l, onClose: s })
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
      function j(e) {
        var n, t, d;
        let {
            user: u,
            currentUser: f,
            displayProfile: m,
            items: x,
            initialSection: I = p.oh.USER_INFO,
            initialSubsection: j,
            onClose: _,
          } = e,
          { trackUserProfileAction: b } = (0, a.KZ)(),
          E = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
          [{ section: N, subsection: S }, y] = l.useState({
            section:
              null !==
                (d =
                  null ===
                    (n = x.find((e) => {
                      let { section: n } = e;
                      return n === I;
                    })) || void 0 === n
                    ? void 0
                    : n.section) && void 0 !== d
                ? d
                : null === (t = x[0]) || void 0 === t
                  ? void 0
                  : t.section,
            subsection: j,
          });
        l.useEffect(() => {
          if (null == x.find((e) => e.section === N))
            y({ section: x[0].section, subsection: void 0 });
        }, [x, N]);
        let T = l.useCallback(
          (e) => {
            b({ action: "PRESS_SECTION", section: e }),
              y({ section: e, subsection: void 0 });
          },
          [b, y],
        );
        return E
          ? (0, i.jsx)("div", {
              className: Z.container,
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
              className: Z.container,
              children: [
                (0, i.jsx)(r.n, {
                  className: Z.tabBar,
                  type: "top",
                  selectedItem: N,
                  onItemSelect: T,
                  children: x.map((e) => {
                    let { section: n, text: t } = e;
                    return (0, i.jsx)(
                      r.n.Item,
                      {
                        className: Z.tabBarItem,
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
                (0, i.jsx)(g, {
                  items: x,
                  section: N,
                  subsection: S,
                  user: u,
                  currentUser: f,
                  displayProfile: m,
                  onClose: _,
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
      var i = t(200651),
        l = t(192379),
        o = t(512722),
        r = t.n(o),
        s = t(442837),
        c = t(100527),
        a = t(922611),
        d = t(695346),
        u = t(699516),
        f = t(594174),
        m = t(971393),
        x = t(787018),
        I = t(752342),
        p = t(886794),
        h = t(910364);
      let v = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
      function Z(e) {
        let { user: n, ...t } = e,
          o = (0, s.e7)([f.default], () => f.default.getCurrentUser());
        r()(
          null != o,
          "UserProfileModalWrapper: currentUser cannot be undefined",
        );
        let { isBlocked: c, isIgnored: Z } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id),
          })),
          g = (0, a.Do)({ location: "UserProfileModalWrapper" }),
          [j, _] = l.useState(c || (g && (Z || c))),
          b = (0, m.sS)({ location: "UserProfileModalWrapper" });
        l.useEffect(() => {
          _(Z || c);
        }, [Z, c]);
        let E = !v.some((e) => {
            var n;
            return (
              null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []
            ).includes(e);
          }),
          N = d.Rt.useSetting();
        return j && b && E && !g
          ? (0, i.jsx)(x.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => _(!1),
              ...t,
            })
          : j && E && g && !(Z && N)
            ? (0, i.jsx)(x.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => _(!1),
                ...t,
              })
            : n.isNonUserBot()
              ? (0, i.jsx)(p.Z, { ...t, user: n, currentUser: o })
              : n.bot
                ? (0, i.jsx)(I.Z, { ...t, user: n, currentUser: o })
                : (0, i.jsx)(h.Z, { ...t, user: n, currentUser: o });
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
        let { user: f, currentUser: m, initialSubsection: x } = e,
          { live: I, recent: p, stream: h, outbox: v } = (0, o.Z)(f.id),
          Z = I.length > 0 || p.length > 0 || null != h,
          g =
            null ===
              (n = (0, i.Z)(
                f.id,
                f.id !== (null == m ? void 0 : m.id),
              ).mutualFriends) || void 0 === n
              ? void 0
              : n.length,
          j =
            null ===
              (t = (0, l.Z)(
                f.id,
                f.id !== (null == m ? void 0 : m.id),
              ).mutualGuilds) || void 0 === t
              ? void 0
              : t.length,
          _ = f.id === (null == m ? void 0 : m.id),
          b = (0, r.Z)({
            user: f,
            currentUser: m,
            location: d.Sbl.PROFILE_MODAL_TABS,
          }),
          E = [{ section: a.oh.USER_INFO, text: u.intl.string(u.t.jGoPJS) }];
        return (
          (Z || (null == v && x === a.Tb.RECENT_ACTIVITY)) &&
            E.push({ section: a.oh.ACTIVITY, text: u.intl.string(u.t.chq59f) }),
          !_ &&
            b &&
            (E.push({ section: a.oh.MUTUAL_FRIENDS, text: (0, s.Z)(g) }),
            E.push({ section: a.oh.MUTUAL_GUILDS, text: (0, c.Z)(j) })),
          E
        );
      }
    },
    453121: function (e, n, t) {
      e.exports = { textarea: "textarea_dde0a8 " + t("520770").inputDefault };
    },
    314483: function (e, n, t) {
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
    881297: function (e, n, t) {
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
    813631: function (e, n, t) {
      e.exports = {
        memberSinceWrapper: "memberSinceWrapper_b06bc5",
        memberSince: "memberSince_b06bc5",
        discordIcon: "discordIcon_b06bc5",
        divider: "divider_b06bc5",
      };
    },
    183776: function (e, n, t) {
      e.exports = {
        getPremiumButton: "getPremiumButton_d6b606",
        getPremiumButtonIcon: "getPremiumButtonIcon_d6b606",
      };
    },
    198343: function (e, n, t) {
      e.exports = {
        root: "root_fb9b39",
        previewForCollected: "previewForCollected_fb9b39 preview_fb9b39",
        container: "container_fb9b39",
        header: "header_fb9b39",
        headerContainer: "headerContainer_fb9b39",
        body: "body_fb9b39",
        bodySpacing: "bodySpacing_fb9b39",
        centeredButton: "centeredButton_fb9b39",
        safetyTable: "safetyTable_fb9b39",
        restrictedSafetyTable: "restrictedSafetyTable_fb9b39",
      };
    },
    506007: function (e, n, t) {
      e.exports = {
        scroller: "scroller_bbc4ce",
        row: "row_bbc4ce",
        rowIcon: "rowIcon_bbc4ce",
        rowText: "rowText_bbc4ce",
      };
    },
    179575: function (e, n, t) {
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
    842086: function (e, n, t) {
      e.exports = { scroller: "scroller_c0721c" };
    },
    323823: function (e, n, t) {
      e.exports = { multipleButtons: "multipleButtons_e9f973" };
    },
    794603: function (e, n, t) {
      e.exports = {
        scroller: "scroller_d53fbd",
        connections: "connections_d53fbd",
        appsConnections: "appsConnections_d53fbd",
        note: "note_d53fbd",
      };
    },
    586070: function (e, n, t) {
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
    270932: function (e, n, t) {
      e.exports = { root: "root_d1ae73" };
    },
    281153: function (e, n, t) {
      e.exports = {
        guildAvatar: "guildAvatar_c5a773",
        guildAvatarWithoutIcon: "guildAvatarWithoutIcon_c5a773",
        guildNick: "guildNick_c5a773",
      };
    },
    743185: function (e, n, t) {
      e.exports = {
        container: "container_ecc04c",
        tabBar: "tabBar_ecc04c",
        tabBarItem: "tabBarItem_ecc04c",
      };
    },
    2980: function (e, n, t) {
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
//# sourceMappingURL=07d78435e6ece3ac2df9.js.map
