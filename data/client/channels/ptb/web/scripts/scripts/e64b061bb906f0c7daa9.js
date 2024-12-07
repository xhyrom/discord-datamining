"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79531"],
  {
    102469: function (e) {
      e.exports = "/assets/3ba8905cc9359ce4d333.svg";
    },
    312438: function (e) {
      e.exports = "/assets/578125bf83669e246bc7.svg";
    },
    38983: function (e) {
      e.exports = "/assets/574392471ddb7ab036d8.svg";
    },
    517474: function (e) {
      e.exports = "/assets/50b6a7b6c641d4d1bcaa.svg";
    },
    720617: function (e) {
      e.exports = "/assets/ebf84e1aa6fb44b7efdd.png";
    },
    272162: function (e) {
      e.exports = "/assets/88d945109097ad5c745b.png";
    },
    632989: function (e) {
      e.exports = "/assets/62c59076382ded022337.png";
    },
    376252: function (e) {
      e.exports = "/assets/93ab732d58f70a3ed0a2.png";
    },
    273226: function (e) {
      e.exports = "/assets/4c21fb0c99a526b7823c.png";
    },
    922026: function (e) {
      e.exports = "/assets/6e87c747818acee222e7.png";
    },
    873180: function (e) {
      e.exports = "/assets/71efce5219eba43e8ceb.png";
    },
    827926: function (e) {
      e.exports = "/assets/5af35b4ab800d5c7fb54.png";
    },
    450559: function (e) {
      e.exports = "/assets/8e5014ac73e2da4a4bce.svg";
    },
    454823: function (e) {
      e.exports = "/assets/8c9f4abf65e46b1bedea.svg";
    },
    951099: function (e) {
      e.exports = "/assets/274e8ecd28144b14119b.svg";
    },
    136347: function (e) {
      e.exports = "/assets/8ee23ef7e30a6475ce01.svg";
    },
    977706: function (e) {
      e.exports = "/assets/0344122956b006ea4bf8.svg";
    },
    403756: function (e) {
      e.exports = "/assets/fab2f7d5a60c0521d9d8.svg";
    },
    536404: function (e) {
      e.exports = "/assets/ba999695be8a1ce8aa72.svg";
    },
    569347: function (e) {
      e.exports = "/assets/95cebf41f09c3958f1d3.svg";
    },
    915600: function (e) {
      e.exports = "/assets/579173bc7be36cccaefd.svg";
    },
    670289: function (e) {
      e.exports = "/assets/8af67a8c4f4f507be08b.svg";
    },
    341382: function (e, t, n) {
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var i = n(570140);
      function l(e) {
        i.Z.dispatch({
          type: "PREMIUM_REQUIRED_MODAL_CLOSE",
          shouldContinue: e,
        });
      }
      n(78839), n(355467);
    },
    515753: function (e, t, n) {
      n.d(t, {
        PZ: function () {
          return K;
        },
        Qj: function () {
          return J;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(512722),
        s = n.n(a),
        c = n(568611),
        u = n(91192),
        d = n(873546),
        h = n(442837),
        p = n(481060),
        m = n(493683),
        f = n(239091),
        g = n(420660),
        C = n(385499),
        _ = n(570908),
        v = n(702321),
        x = n(201895),
        I = n(43267),
        b = n(933557),
        S = n(979264),
        E = n(588688),
        Z = n(163889),
        N = n(111028),
        y = n(853856),
        T = n(93687),
        A = n(785232),
        j = n(878857),
        P = n(565640),
        R = n(518950),
        M = n(199902),
        L = n(158776),
        w = n(306680),
        D = n(699516),
        O = n(111583),
        k = n(9156),
        G = n(594174),
        U = n(709054),
        B = n(998502),
        H = n(788307),
        V = n(981631),
        F = n(388032),
        W = n(926540);
      let z = B.ZP.getEnableHardwareAcceleration()
          ? p.AnimatedAvatar
          : p.Avatar,
        Y = { offset: { top: 2, bottom: 2, right: 4 } },
        K = (e) =>
          (0, i.jsx)(p.Clickable, {
            className: W.closeButton,
            ...e,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)(p.XSmallIcon, {
              size: "md",
              color: "currentColor",
              className: W.closeIcon,
            }),
          }),
        q = () =>
          (0, i.jsx)(p.StarIcon, {
            size: "xs",
            color: "currentColor",
            className: W.favoriteIcon,
          }),
        Q = () =>
          (0, i.jsx)(p.EyeSlashIcon, {
            size: "xs",
            color: "currentColor",
            className: W.favoriteIcon,
          }),
        X = () =>
          (0, i.jsx)(p.DenyIcon, {
            size: "xs",
            color: "currentColor",
            className: W.favoriteIcon,
          });
      class J extends l.Component {
        render() {
          let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: l,
            avatarWithTextClassName: r,
            interactiveClassName: a,
            text: s,
            children: u,
            locationState: h,
            onClick: m,
            className: f,
            role: g,
            "aria-posinset": C,
            "aria-setsize": v,
            ...x
          } = this.props;
          return (0, i.jsx)(Z.Z, {
            className: o()(W.channel, { [W.fullWidth]: d.tq }, f),
            onClick: m,
            role: g,
            focusProps: { within: !0, ...Y },
            "aria-posinset": C,
            "aria-setsize": v,
            children: (0, i.jsx)(p.Interactive, {
              as: "div",
              selected: t,
              className: o()(a, W.interactive, W.linkButton, {
                [W.interactiveSelected]: t,
              }),
              children: (0, i.jsxs)(c.rU, {
                to: { pathname: e, state: h },
                className: W.link,
                ...x,
                children: [
                  (0, i.jsx)(_.Z, {
                    selected: t,
                    muted: !1,
                    avatar: (0, i.jsx)(n, {
                      className: o()(W.linkButtonIcon, l),
                      color: "currentColor",
                    }),
                    name: s,
                    innerClassName: o()(W.avatarWithText, r),
                  }),
                  u,
                ],
              }),
            }),
          });
        }
      }
      function $(e) {
        var t;
        let {
            channel: r,
            isGDMFacepileEnabled: a,
            selected: d = !1,
            user: T,
            activities: P,
            applicationStream: M,
            entry: L,
            isTyping: O,
            status: G,
            isMobile: U,
            "aria-posinset": B,
            "aria-setsize": J,
          } = e,
          [$, ee] = l.useState(!1),
          et = l.useRef(null),
          en = l.useRef(null),
          {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er,
          } = (0, R.Z)({
            user: T,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $),
          }),
          eo = (0, h.e7)([k.ZP], () =>
            k.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          { ignored: ea, blocked: es } = (0, h.cj)([D.Z], () => ({
            ignored: D.Z.isIgnored(r.getRecipientId()),
            blocked: D.Z.isBlocked(r.getRecipientId()),
          })),
          ec = (0, h.e7)([w.ZP], () => w.ZP.getMentionCount(r.id) > 0),
          eu = (0, b.ZP)(r),
          ed = (0, h.e7)([y.Z], () => y.Z.isFavorite(r.id)),
          eh = () => {
            ee(!0);
          },
          ep = () => {
            ee(!1);
          },
          em = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()),
              m.Z.closePrivateChannel(r.id, d, t);
          },
          ef = () => {
            m.Z.preload(V.ME, r.id);
          },
          eg = (e) => {
            e.stopPropagation();
          },
          eC = (e) => {
            if (e.target === e.currentTarget) {
              var t;
              null === (t = et.current) || void 0 === t || t.click();
            }
          },
          e_ = (e) => {
            r.isMultiUserDM()
              ? (0, f.jW)(
                  e,
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (t) =>
                      (0, i.jsx)(e, { ...t, channel: r, selected: d });
                  },
                  { noBlurEvent: !0 },
                )
              : (0, f.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("92453"),
                    n.e("56826"),
                    n.e("5606"),
                  ]).then(n.bind(n, 131404));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      user: T,
                      channel: r,
                      channelSelected: d,
                    });
                });
          },
          ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = F.intl.formatToPlainString(F.t.hJ5Ap6, { name: eu }),
              l = F.intl.format(F.t.SSIVOj, { name: eu });
            r.isManaged() &&
              ((t = F.intl.formatToPlainString(F.t.hVGjER, { name: eu })),
              (l = F.intl.format(F.t.IK1Qvr, { name: eu }))),
              (0, p.openModalLazy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (n) =>
                  (0, i.jsx)(e, { header: t, body: l, onSubmit: em, ...n });
              });
          },
          ex = () => {
            let e = {
              className: W.activity,
              textClassName: W.activityText,
              emojiClassName: o()(W.activityEmoji, { [W.mutedEmoji]: eo }),
            };
            return r.isSystemDM()
              ? (0, i.jsx)("div", {
                  className: W.subtext,
                  children: (0, v.Z)(r.id)
                    ? F.intl.string(F.t.FL5T09)
                    : F.intl.string(F.t.NnY5lZ),
                })
              : r.isMultiUserDM()
                ? (0, i.jsx)("div", {
                    className: W.subtext,
                    children: F.intl.format(F.t.CxSA5O, {
                      members: r.recipients.length + 1,
                    }),
                  })
                : G !== V.Skl.OFFLINE &&
                    G !== V.Skl.INVISIBLE &&
                    null != P &&
                    P.length > 0
                  ? (0, i.jsx)(H.ZP, {
                      ...e,
                      activities: P,
                      applicationStream: M,
                      animate: $,
                      hideTooltip: !0,
                      user: T,
                    })
                  : null != L
                    ? (0, i.jsx)(E.Z, { ...e, entry: L })
                    : null;
          },
          eI = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
              return r.recipients.length >= 2 && a && null == r.icon
                ? (0, i.jsx)(A.Z, {
                    "aria-hidden": !0,
                    recipients: r.recipients,
                    size: e,
                    isTyping: O,
                    status: G,
                  })
                : (0, i.jsx)(z, {
                    ...er,
                    src: (0, I.x)(r),
                    "aria-hidden": !0,
                    size: e,
                    status: O ? V.Skl.ONLINE : G,
                    isTyping: O,
                  });
            s()(
              null != T,
              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
            );
            let t = null;
            return (
              !T.isSystemUser() && (t = (0, g.Z)(P) ? V.Skl.STREAMING : G),
              (0, i.jsx)(z, {
                ...er,
                size: p.AvatarSizes.SIZE_32,
                src: ei,
                avatarDecoration: el,
                status: t,
                isMobile: U,
                isTyping: O,
                "aria-label": T.username,
                statusTooltip: !0,
              })
            );
          },
          eb = r.isMultiUserDM(),
          eS = r.isSystemDM(),
          eE = (0, j.Q)(),
          eZ = !eb && !eS && r.type === V.d4z.DM,
          eN = eZ && (null == T ? void 0 : T.clan) != null,
          ey = eZ && ea,
          eT = eZ && es,
          eA = eN
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  eu,
                  (0, i.jsx)(S.ZP, {
                    clan: null == T ? void 0 : T.clan,
                    userId: null == T ? void 0 : T.id,
                    inline: !0,
                    disableGuildProfile: !0,
                    className: W.clanTag,
                  }),
                ],
              })
            : eu,
          ej = null !== (t = eo || ey || eT) && void 0 !== t && t;
        return (0, i.jsx)(u.mh, {
          id: r.id,
          children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(Z.Z, {
              className: W.channel,
              role: t,
              focusProps: { ...Y, focusTarget: et, ringTarget: en },
              ref: en,
              onMouseEnter: eh,
              onMouseLeave: ep,
              onMouseDown: ef,
              onContextMenu: e_,
              "aria-setsize": J,
              "aria-posinset": B,
              children: (0, i.jsxs)(p.Interactive, {
                className: o()(W.interactive, {
                  [W.interactiveSystemDM]: eE && eS,
                  [W.interactiveSelected]: d,
                }),
                as: "div",
                onClick: eC,
                muted: ej,
                selected: d,
                children: [
                  (0, i.jsx)(c.rU, {
                    innerRef: et,
                    to: V.Z5c.CHANNEL(V.ME, r.id),
                    className: W.link,
                    "aria-label": (0, x.ZP)({ channel: r, unread: ec }),
                    ...n,
                    children: (0, i.jsx)(_.Z, {
                      avatar: eI(),
                      selected: d,
                      highlighted: ec,
                      muted: ej,
                      subText: ex(),
                      name: (0, i.jsx)(N.Z, {
                        tooltipClassName: W.overflowTooltip,
                        children: eA,
                      }),
                      decorators: r.isSystemDM()
                        ? (0, i.jsx)(C.Z, {
                            className: W.decorator,
                            type: C.Z.Types.SYSTEM_DM,
                            verified: !0,
                          })
                        : null,
                    }),
                  }),
                  ed ? (0, i.jsx)(q, {}) : null,
                  ey ? (0, i.jsx)(Q, {}) : null,
                  eT ? (0, i.jsx)(X, {}) : null,
                  (0, i.jsx)(K, {
                    "aria-label": eb
                      ? F.intl.string(F.t["26C4oq"])
                      : F.intl.string(F.t.jsvgc3),
                    onClick: eb ? ev : em,
                    onMouseDown: eg,
                  }),
                ],
              }),
            });
          },
        });
      }
      t.ZP = (e) => {
        let { channel: t, selected: n, ...l } = e,
          r = (0, h.e7)([G.default], () =>
            G.default.getUser(t.getRecipientId()),
          ),
          {
            isStatusIndicatorEnabled: o,
            isTypingIndicatorEnabled: a,
            isFacepileEnabled: s,
          } = T.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
          ),
          c = null == r ? void 0 : r.id,
          u = (0, h.cj)(
            [L.Z, M.Z],
            () => {
              let e;
              if (t.isMultiUserDM()) {
                if (o) {
                  let n = L.Z.getState().statuses;
                  t.recipients.some((e) => n[e] === V.Skl.ONLINE) &&
                    (e = V.Skl.ONLINE);
                }
              } else null != c && (e = L.Z.getStatus(c));
              return {
                status: e,
                activities: null != c ? L.Z.getActivities(c) : null,
                applicationStream:
                  null != c ? M.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && L.Z.isMobileOnline(c),
              };
            },
            [t, c, o],
          ),
          d = (0, P.Z)(null == r ? void 0 : r.id, "PrivateChannel"),
          p = (0, h.e7)(
            [G.default, O.Z],
            () => {
              if (t.isMultiUserDM())
                return (
                  !!a &&
                  U.default.keys(O.Z.getTypingUsers(t.id)).some((e) => {
                    var t;
                    return (
                      e !==
                      (null === (t = G.default.getCurrentUser()) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  })
                );
              if (null != r) return O.Z.isTyping(t.id, t.getRecipientId());
              return !1;
            },
            [t, r, a],
          );
        return t.isMultiUserDM()
          ? (0, i.jsx)($, {
              channel: t,
              selected: n,
              isTyping: p,
              status: u.status === V.Skl.ONLINE ? V.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l,
            })
          : (0, i.jsx)($, {
              channel: t,
              selected: n,
              user: r,
              entry: d,
              isTyping: p,
              ...l,
              ...u,
            });
      };
    },
    831218: function (e, t, n) {
      n(47120);
      var i,
        l,
        r,
        o = n(200651),
        a = n(192379),
        s = n(299608),
        c = n.n(s),
        u = n(91192),
        d = n(924826),
        h = n(442837),
        p = n(902704),
        m = n(481060),
        f = n(925549),
        g = n(607070),
        C = n(367907),
        _ = n(453542),
        v = n(702321),
        x = n(82295),
        I = n(313201),
        b = n(860144),
        S = n(214852),
        E = n(518311),
        Z = n(355298),
        N = n(869404),
        y = n(333984),
        T = n(210887),
        A = n(592125),
        j = n(158776),
        P = n(55589),
        R = n(515753),
        M = n(981631),
        L = n(388032),
        w = n(312565);
      function D(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((r = i || (i = {}))[(r.PAGES = 0)] = "PAGES"), (r[(r.DMS = 1)] = "DMS");
      let O = a.memo(function () {
        return (0, o.jsxs)("svg", {
          width: "184",
          height: "428",
          viewBox: "0 0 184 428",
          className: w.empty,
          children: [
            (0, o.jsx)("rect", { x: 40, y: 6, width: 144, height: 20, rx: 10 }),
            (0, o.jsx)("circle", { cx: 16, cy: 16, r: 16 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 50,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.9,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 60, r: 16, opacity: 0.9 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 94,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.8,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 104, r: 16, opacity: 0.8 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 138,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.7,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 148, r: 16, opacity: 0.7 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 182,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.6,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 192, r: 16, opacity: 0.6 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 226,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.5,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 236, r: 16, opacity: 0.5 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 270,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.4,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 280, r: 16, opacity: 0.4 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 314,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.3,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 324, r: 16, opacity: 0.3 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 358,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.2,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 368, r: 16, opacity: 0.2 }),
            (0, o.jsx)("rect", {
              x: 40,
              y: 402,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.1,
            }),
            (0, o.jsx)("circle", { cx: 16, cy: 412, r: 16, opacity: 0.1 }),
          ],
        });
      });
      class k extends (l = a.Component) {
        static getDerivedStateFromProps(e) {
          let { children: t, privateChannelIds: n } = e;
          if (null == t)
            return {
              preRenderedChildren: 0,
              nonNullChildren: [],
              totalRowCount: n.length,
            };
          {
            let e = t.filter((e) => null != e),
              i = e.length;
            return {
              preRenderedChildren: i,
              nonNullChildren: e,
              totalRowCount: i + n.length,
            };
          }
        }
        componentDidMount() {
          let { selectedChannelId: e, homeLink: t } = this.props;
          null != e &&
            null != t &&
            t.indexOf(e) >= 0 &&
            this.scrollToChannel(e),
            this.reportAnalytics();
        }
        shouldComponentUpdate(e) {
          return !(0, p.Z)(this.props, e, ["children"]);
        }
        componentDidUpdate(e) {
          let { selectedChannelId: t, homeLink: n } = this.props;
          null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && n !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics();
        }
        scrollToChannel(e) {
          if (null == this._list) return;
          let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
          i < 0 || null == e
            ? this._list.scrollTo({ to: l })
            : ((l += 44 * (i + n) + t),
              this._list.scrollIntoViewRect({
                start: Math.max(l - 8, 0),
                end: l + 44 + 8,
              }));
        }
        render() {
          let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
          return (0, o.jsx)(u.SJ, {
            children: (i) => {
              let { ref: l, role: r, ...a } = i;
              return (0, o.jsx)(m.FocusJumpSection, {
                children: (i) =>
                  (0, o.jsx)(m.List, {
                    fade: !0,
                    innerRole: r,
                    innerAriaLabel: L.intl.string(L.t.YUU0RE),
                    innerTag: "ul",
                    ref: (e) => {
                      var t;
                      (this._list = e),
                        (this.props.listRef.current = e),
                        (l.current =
                          null !==
                            (t = null == e ? void 0 : e.getScrollerNode()) &&
                          void 0 !== t
                            ? t
                            : null);
                    },
                    onScroll: this.handleScroll,
                    className: w.scroller,
                    sectionHeight: this.getSectionHeight,
                    paddingTop: t,
                    paddingBottom: 8,
                    rowHeight: this.getRowHeight,
                    renderSection: this.renderSection,
                    renderRow: this.renderRow,
                    sections: [n, Math.max(e.length, 1)],
                    ...a,
                    ...i,
                  }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            D(this, "state", {
              initialized: !1,
              preRenderedChildren: 0,
              totalRowCount: 0,
              nonNullChildren: [],
            }),
            D(this, "_list", null),
            D(this, "hasReportedAnalytics", !1),
            D(this, "reportAnalytics", () => {
              var e;
              if (this.hasReportedAnalytics) return;
              let t =
                null === (e = this._list) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
              if (null == t) return;
              let { privateChannelIds: n, channels: i } = this.props;
              if (0 === n.length) return;
              let l = a.Children.count(this.props.children);
              if (null == t) return;
              let r = Math.round((t.offsetHeight - 44 * l) / 44),
                o = r > n.length ? n.slice(0, r + 1) : n,
                s = o.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                c = n.some((e) => (0, v.Z)(e)),
                u = {
                  num_users_visible: o.length,
                  num_users_visible_with_mobile_indicator: s.filter(
                    (e) => null != e && j.Z.isMobileOnline(e),
                  ).length,
                };
              (this.hasReportedAnalytics = !0),
                C.ZP.trackWithMetadata(M.rMx.DM_LIST_VIEWED, {
                  ...u,
                  ...(0, _.X)(),
                  visible_user_ids: s.filter((e) => null != e),
                  changelog_dm_visible: c,
                });
            }),
            D(this, "getSectionHeight", (e) => {
              let { showDMHeader: t } = this.props;
              return 0 === e ? 0 : t ? 40 : 0;
            }),
            D(
              this,
              "handleScroll",
              c()(() => {
                if (null != this._list) {
                  let e = this._list.getScrollerNode();
                  null != e && f.Z.updateChannelListScroll(M.ME, e.scrollTop);
                }
              }, 100),
            ),
            D(this, "renderDM", (e, t) => {
              let {
                  privateChannelIds: n,
                  channels: i,
                  selectedChannelId: l,
                } = this.props,
                { totalRowCount: r, preRenderedChildren: a } = this.state,
                s = i[n[t]];
              return null == s
                ? null
                : (0, o.jsx)(
                    R.ZP,
                    {
                      channel: s,
                      selected: s.id === l,
                      "aria-posinset": a + t + 1,
                      "aria-setsize": r,
                    },
                    s.id,
                  );
            }),
            D(this, "renderChild", (e) => {
              let { nonNullChildren: t, totalRowCount: n } = this.state,
                i = t[e];
              return a.isValidElement(i)
                ? a.cloneElement(i, {
                    "aria-setsize": n,
                    "aria-posinset": e + 1,
                  })
                : i;
            }),
            D(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                { privateChannelIds: i } = this.props;
              return 0 === t
                ? this.renderChild(n)
                : 0 === n && 0 === i.length
                  ? (0, o.jsx)(O, {}, "no-private-channels")
                  : this.renderDM(t, n);
            }),
            D(this, "renderSection", (e) => {
              let { section: t } = e,
                { showDMHeader: n } = this.props;
              return 0 !== t && n
                ? (0, o.jsxs)(
                    x.Z,
                    {
                      className: w.privateChannelsHeaderContainer,
                      children: [
                        (0, o.jsx)("span", {
                          className: w.headerText,
                          children: L.intl.string(L.t.YUU0RE),
                        }),
                        (0, o.jsx)(E.Z, {
                          tooltip: L.intl.string(L.t["6Urw1t"]),
                          tooltipPosition: "top",
                          popoutAlign: "left",
                          iconClassName:
                            w.privateChannelRecipientsInviteButtonIcon,
                          icon: m.PlusSmallIcon,
                          subscribeToGlobalHotkey: !0,
                        }),
                      ],
                    },
                    t,
                  )
                : null;
            }),
            D(this, "getRowHeight", (e, t) => {
              let { privateChannelIds: n } = this.props;
              return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
        }
      }
      D(k, "defaultProps", { padding: 8 });
      t.Z = (e) => {
        let { version: t, theme: n, children: i, showDMHeader: l } = e,
          r = a.Children.count(i),
          s = A.Z.getMutablePrivateChannels(),
          c = (0, N.k1)(s),
          p = (0, h.Wu)(
            [P.Z, Z.Z, y.Z],
            () => {
              let e = P.Z.getPrivateChannelIds();
              return (0, N.tU)(e, [Z.Z, y.Z]);
            },
            [],
          );
        (0, S.z)(b.R);
        let m = (0, h.cj)([g.Z, T.Z, A.Z], () => ({
            theme: T.Z.darkSidebar ? M.BRd.DARK : n,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version:
              null != t
                ? "".concat(t, ":").concat(A.Z.getPrivateChannelsVersion())
                : A.Z.getPrivateChannelsVersion(),
          })),
          f = a.useRef(null),
          C = a.useCallback((e) => {
            let t = f.current,
              n = document.querySelector(e);
            null != t &&
              null != n &&
              t.scrollIntoViewNode({
                node: n,
                callback: () => {
                  requestAnimationFrame(() => {
                    var t;
                    return null === (t = document.querySelector(e)) ||
                      void 0 === t
                      ? void 0
                      : t.focus({ preventScroll: !0 });
                  });
                },
              });
          }, []),
          _ = a.useCallback(
            () =>
              new Promise((e) => {
                let t = f.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [],
          ),
          v = a.useCallback(
            () =>
              new Promise((e) => {
                let t = f.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            [],
          ),
          x = (0, I.Dt)(),
          E = (0, d.ZP)({
            id: "private-channels-".concat(x),
            isEnabled: m.keyboardModeEnabled,
            scrollToStart: _,
            scrollToEnd: v,
            defaultFocused: (r + (l ? 1 : 0)).toString(),
            setFocus: C,
          });
        return (0, o.jsx)(u.bG, {
          navigator: E,
          children: (0, o.jsx)(k, {
            channels: c,
            privateChannelIds: p,
            listRef: f,
            theme: n,
            version: t,
            ...e,
            children: i,
            ...m,
          }),
        });
      };
    },
    353042: function (e, t, n) {
      n(653041), n(47120);
      var i,
        l = n(192379),
        r = n(846519);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class a extends (i = l.Component) {
        componentDidMount() {
          this.update(),
            this._interval.start(this.props.updateInterval, this.update);
        }
        componentWillUnmount() {
          this._interval.stop();
        }
        calculateInitialDeltaBytes(e) {
          let {
              numUpdatesToShow: t,
              updateInterval: n,
              pointsToSmooth: i,
            } = this.props,
            l = Date.now(),
            r = 0,
            o = 0,
            a = [],
            s = null != e[0] ? e[0].bytes : 0;
          for (; r < t + i; r++) {
            let t;
            let i = l - (r + 1) * n;
            for (; o < e.length; )
              if ((t = e[o]).timestamp > i) o++;
              else break;
            if (o === e.length) break;
            null != t && (a.push(s - t.bytes), (s = t.bytes));
          }
          for (; r < t + i; r++) a.push(0);
          return a.reverse(), a;
        }
        smoothDeltaBytes(e) {
          let { pointsToSmooth: t } = this.props,
            n = [];
          for (let i = 0; i < e.length - t; i++) {
            let l = 0;
            for (let n = 0; n < t; n++) l += e[i + n];
            n.push(l / t);
          }
          return n;
        }
        render() {
          let {
            numUpdatesToShow: e,
            updateInterval: t,
            children: n,
          } = this.props;
          return n(this.state.smoothedDeltaBytes, t, e);
        }
        constructor(e) {
          super(e),
            o(this, "_interval", new r.Xp()),
            o(this, "update", () => {
              let {
                  onUpdate: e,
                  numUpdatesToShow: t,
                  pointsToSmooth: n,
                  updateInterval: i,
                } = this.props,
                l = this.props.getHistoricalTotalBytes(),
                r = null != l[0] ? l[0].bytes : 0,
                o = [
                  ...this.state.deltaBytes.slice(1, t + n),
                  r - this.state.lastTotalBytes,
                ];
              this.setState(
                {
                  deltaBytes: o,
                  smoothedDeltaBytes: this.smoothDeltaBytes(o),
                  lastTotalBytes: r,
                },
                () => null != e && e(i),
              );
            });
          let t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
          this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0,
          };
        }
      }
      o(a, "defaultProps", {
        numUpdatesToShow: 30,
        updateInterval: 500,
        pointsToSmooth: 10,
      }),
        (t.Z = a);
    },
    339149: function (e, t, n) {
      n.d(t, {
        E: function () {
          return y;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        s = n(748780),
        c = n(442837),
        u = n(692547),
        d = n(215569),
        h = n(481060),
        p = n(812206),
        m = n(707409),
        f = n(703656),
        g = n(417363),
        C = n(941128),
        _ = n(780570),
        v = n(353042),
        x = n(981631),
        I = n(388032),
        b = n(282115);
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let E = {
        [x.vxO.INSTALLING]: {
          [m.J6.NONE]: (e, t) =>
            I.intl.formatToPlainString(I.t["p+2sEx"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t["/0NgPD"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.ZIwMzs, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t["3IQDUl"], {
              name: e,
              timeRemaining: t,
            }),
        },
        [x.vxO.UPDATING]: {
          [m.J6.NONE]: (e, t) =>
            I.intl.formatToPlainString(I.t["6F9QzM"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t["2OVgVl"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.mgQg1N, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t["aTdq4+"], {
              name: e,
              timeRemaining: t,
            }),
        },
        [x.vxO.REPAIRING]: {
          [m.J6.NONE]: (e, t) =>
            I.intl.formatToPlainString(I.t["p+2sEx"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t["/0NgPD"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.ZIwMzs, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t["3IQDUl"], {
              name: e,
              timeRemaining: t,
            }),
        },
      };
      class Z extends r.PureComponent {
        renderText() {
          let { state: e, isPaused: t } = this.props;
          if (
            e.type === x.vxO.UPDATING ||
            e.type === x.vxO.REPAIRING ||
            e.type === x.vxO.INSTALLING
          ) {
            if (t) return I.intl.string(I.t["5oxtFR"]);
            if (e.stage === x.f07.PATCHING || e.stage === x.f07.REPAIRING)
              return (0, l.jsx)(v.Z, {
                getHistoricalTotalBytes: g.Z.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody,
              });
          }
          return null;
        }
        render() {
          let e = this.renderText();
          return null != e ? e : I.intl.string(I.t.cw57am);
        }
        constructor(...e) {
          super(...e),
            S(this, "renderProgressBody", (e, t) => {
              let { state: n, application: i } = this.props,
                { stage: l, progress: r, total: o, type: a } = n;
              if (null == r || null == o || null == l) return null;
              let s = (e[e.length - 1] / t) * 1e3,
                c = 0 !== s ? Math.max(1, (o - r) / s) : null,
                u = E[a],
                d = null != u ? Object.keys(u) : [],
                { unit: h, time: p } = (0, m.CI)(null != c ? c / 60 : null, d);
              if (null != u && null != h) {
                let e = u[h];
                return null != e ? e(i.name, p) : null;
              }
              return null;
            });
        }
      }
      class N extends (i = r.PureComponent) {
        componentWillAppear(e) {
          this.state.animationScale.setValue(1), e();
        }
        componentWillEnter(e) {
          s.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200,
          }).start(e);
        }
        componentWillLeave(e) {
          s.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200,
          }).start(e);
        }
        getTooltipText() {
          let { firstApplication: e, firstState: t, isPaused: n } = this.props;
          return null == e || null == t
            ? I.intl.string(I.t.cw57am)
            : (0, l.jsx)(Z, { application: e, state: t, isPaused: n });
        }
        render() {
          let { percent: e, isPaused: t, className: n } = this.props;
          return (0, l.jsx)(s.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, b.progressContainer),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(h.Tooltip, {
              text: this.getTooltipText(),
              position: "right",
              "aria-label": !1,
              children: (n) =>
                (0, l.jsx)("div", {
                  ...n,
                  children: (0, l.jsx)(h.ProgressCircle, {
                    percent: e,
                    colorOverride: t
                      ? u.Z.unsafe_rawColors.PRIMARY_500.css
                      : null,
                    children: (0, l.jsx)(h.DownloadIcon, {
                      size: "md",
                      color: "currentColor",
                      className: b.downloadIcon,
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            S(this, "state", { animationScale: new s.Z.Value(0) }),
            S(this, "handleOnClick", (e) => {
              let { onClick: t } = this.props;
              e.preventDefault(),
                e.stopPropagation(),
                null != t && t(e),
                (0, f.uL)(x.Z5c.APPLICATION_LIBRARY);
            });
        }
      }
      S(N, "defaultProps", { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
      function y(e, t) {
        return e.reduce((e, n) => {
          let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
          return null != r && e.push(r), e;
        }, []);
      }
      t.Z = c.ZP.connectStores([C.Z, g.Z, p.Z], () => {
        let e = C.Z.activeItems,
          t = y(e, g.Z),
          { total: n, progress: i } = _.lK(t);
        return {
          percent: _.xI(i, n),
          isPaused: C.Z.paused,
          firstApplication:
            e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
          firstState: t.length > 0 ? t[0] : null,
        };
      })((e) => {
        let { determineOwnVisibility: t = !0, ...n } = e;
        return t
          ? (0, l.jsx)(d.W, {
              component: r.Fragment,
              children:
                n.percent > 0 && n.percent < 100
                  ? (0, l.jsx)(N, { ...n })
                  : null,
            })
          : (0, l.jsx)(N, { ...n });
      });
    },
    170509: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(933557),
        o = n(388032),
        a = n(84210);
      function s(e) {
        let { channel: t, category: n, ...s } = e,
          c = (0, r.ZP)(t, !0),
          u = (0, r.ZP)(n);
        return (0, i.jsx)(l.ConfirmModal, {
          header: o.intl.string(o.t.YWMtRU),
          confirmText: o.intl.string(o.t.eW8Gy8),
          cancelText: o.intl.string(o.t.s4uM3d),
          confirmButtonColor: l.Button.Colors.BRAND,
          ...s,
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: a.message,
            selectable: !1,
            children: o.intl.format(o.t["iKW+jY"], {
              channelName: c,
              categoryName: u,
            }),
          }),
        });
      }
    },
    146773: function (e, t, n) {
      n.d(t, {
        B: function () {
          return Z;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(155281),
        r = n(222146),
        o = n(433517),
        a = n(481060),
        s = n(749210),
        c = n(170509),
        u = n(740504),
        d = n(117984),
        h = n(398758),
        p = n(680089),
        m = n(592125),
        f = n(324067),
        g = n(984933),
        C = n(430824),
        _ = n(496675),
        v = n(914010),
        x = n(281029),
        I = n(700785),
        b = n(981631);
      let S = "DRAGGABLE_GUILD_CHANNEL";
      function E(e, t) {
        var n, i;
        if (null == e || null == t) return null;
        if (e !== b.I_8) return m.Z.getChannel(t);
        let l = g.ZP.getChannels(e),
          r =
            null !==
              (i =
                null !== (n = l[g.sH].find((e) => e.channel.id === t)) &&
                void 0 !== n
                  ? n
                  : l[g.Zb].find((e) => e.channel.id === t)) && void 0 !== i
              ? i
              : l[b.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
        return null == r ? void 0 : r.channel;
      }
      function Z(e) {
        return (0, l.G)(
          S,
          {
            drop(e, t) {
              let n;
              let l = v.Z.getGuildId(),
                r = t.getItem(),
                o = (0, x.if)(
                  E(l, r.id),
                  r.position,
                  e.channel,
                  e.position,
                  r.channelList,
                );
              if (null == o) return;
              let u = E(l, r.id);
              if (null == u) return;
              let h = f.Z.getCategories(l),
                p = C.Z.getGuild(l);
              if (null == p) return;
              let g = (0, x.Dn)(u, E(l, o.referenceId), o.parentId, h);
              if (0 !== g.length) {
                if (l === b.I_8) {
                  (0, d.s3)(g);
                  return;
                }
                if (
                  ((g = g.filter((e) => {
                    let { id: t } = e,
                      n = m.Z.getChannel(t);
                    if (null == n) return !1;
                    let i = m.Z.getChannel(n.parent_id);
                    return n.type === b.d4z.GUILD_CATEGORY || null == i
                      ? _.Z.can(b.Plq.MANAGE_CHANNELS, p)
                      : _.Z.can(b.Plq.MANAGE_CHANNELS, i);
                  })),
                  u.parent_id !== o.parentId &&
                    g.find((e) => {
                      if (e.id !== u.id) return !1;
                      let t = m.Z.getChannel(e.parent_id);
                      if (
                        !(
                          null != t &&
                          _.Z.can(b.Plq.MANAGE_ROLES, u) &&
                          _.Z.can(b.Plq.MANAGE_ROLES, t)
                        )
                      )
                        return !0;
                      let i = I.o4(u, t),
                        l = I.o4(u, m.Z.getChannel(u.parent_id));
                      return (
                        ((null == u.parent_id && !i) || (l && !i)) && (n = e),
                        !0
                      );
                    }),
                  null != n)
                ) {
                  let e = m.Z.getChannel(n.parent_id);
                  null != e &&
                    (0, a.openModal)((t) =>
                      (0, i.jsx)(c.default, {
                        ...t,
                        channel: u,
                        category: e,
                        onConfirm: () => {
                          null != n &&
                            ((n.lock_permissions = !0),
                            s.Z.batchChannelUpdate(l, g));
                        },
                        onCancel: () => {
                          null != n && s.Z.batchChannelUpdate(l, g);
                        },
                      }),
                    );
                } else s.Z.batchChannelUpdate(l, g);
              }
            },
            canDrop(e, t) {
              let n = t.getItem(),
                i = m.Z.getChannel(n.id);
              if (null == i) return !1;
              let l = (0, x.if)(
                m.Z.getChannel(n.id),
                n.position,
                e.channel,
                e.position,
                n.channelList,
              );
              if (null == l) return !1;
              if (v.Z.getGuildId() === b.I_8) return !0;
              let r = C.Z.getGuild(n.guildId);
              if (null == r) return !1;
              let o = m.Z.getChannel(l.parentId),
                a = m.Z.getChannel(i.parent_id),
                s = _.Z.can(b.Plq.MANAGE_CHANNELS, r),
                c = null != a ? _.Z.can(b.Plq.MANAGE_CHANNELS, a) : s,
                u = null != o ? _.Z.can(b.Plq.MANAGE_CHANNELS, o) : s;
              return c && u;
            },
          },
          (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
              ? {
                  connectChannelDropTarget: e.dropTarget(),
                  sorting: !1,
                  sortingType: null,
                  sortingPosition: null,
                  sortingParent: null,
                }
              : {
                  connectChannelDropTarget: e.dropTarget(),
                  sorting: !0,
                  sortingType: n.type,
                  sortingPosition:
                    t.isOver() && t.canDrop() ? n.position : null,
                  sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                };
          },
        )(
          (0, r.E)(
            S,
            {
              canDrag(e) {
                let { channel: t } = e;
                if (v.Z.getGuildId() === b.I_8) return !0;
                let l = C.Z.getGuild(t.getGuildId());
                if (null == l) return !1;
                if ((0, h.r1)(l.id) && _.Z.can(b.Plq.MANAGE_CHANNELS, l))
                  return (
                    "true" !== o.K.get("doNotShowReorderModal") &&
                      (0, a.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("82560")
                          .then(n.bind(n, 391312));
                        return (t) => (0, i.jsx)(e, { ...t });
                      }),
                    !1
                  );
                if (t.type === b.d4z.GUILD_CATEGORY)
                  return _.Z.can(b.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                let r = m.Z.getChannel(t.parent_id);
                return (
                  (null != r && _.Z.can(b.Plq.MANAGE_CHANNELS, r)) ||
                  (null == r && _.Z.can(b.Plq.MANAGE_CHANNELS, l))
                );
              },
              beginDrag(e) {
                let {
                    channel: { id: t, parent_id: n, guild_id: i, type: l },
                    position: r,
                  } = e,
                  o = v.Z.getGuildId(),
                  a = f.Z.getCategories(o);
                return {
                  isChannelDrag: !0,
                  id: t,
                  position: r,
                  parentId: n,
                  type: l,
                  channelList: (0, u.Z)(a._categories, a, (e) => {
                    let { channel: t } = e;
                    if (
                      t.type === b.d4z.GUILD_CATEGORY &&
                      null != a[t.id] &&
                      0 === a[t.id].length
                    )
                      return (
                        o === b.I_8 ||
                        (_.Z.can(b.Plq.MANAGE_CHANNELS, t) &&
                          _.Z.can(b.Plq.VIEW_CHANNEL, t))
                      );
                    return !p.Z.isCollapsed(t.parent_id);
                  }),
                  guildId: i,
                };
              },
            },
            (e) => ({
              connectChannelDragSource: e.dragSource(),
              connectDragPreview: e.dragPreview(),
            }),
          )(e),
        );
      }
    },
    93582: function (e, t, n) {
      n.d(t, {
        q: function () {
          return function e(t) {
            return "string" == typeof t || "number" == typeof t
              ? t
              : t instanceof Array
                ? t.map(e).join("")
                : i.isValidElement(t)
                  ? e(t.props.children)
                  : void 0;
          };
        },
      });
      var i = n(192379);
    },
    589440: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i.q;
        },
      });
      var i = n(93582);
    },
    167042: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var i = n(51596);
      let l = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.$Z)("KEYBIND", ""), !1),
      };
    },
    951483: function (e, t, n) {
      n.d(t, {
        Sr: function () {
          return S;
        },
        Xq: function () {
          return E;
        },
        Zg: function () {
          return Z;
        },
      }),
        n(411104);
      var i = n(186070),
        l = n(185514),
        r = n(360038),
        o = n(175724),
        a = n(705371),
        s = n(138976),
        c = n(167042),
        u = n(239748),
        d = n(337482),
        h = n(679080),
        p = n(510761),
        m = n(189509),
        f = n(673553),
        g = n(280492),
        C = n(746887),
        _ = n(721383),
        v = n(743810),
        x = n(981631),
        I = n(388032);
      function b() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map((e) => {
          let t = S[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      let S = {
          [x.EkH.SERVER_NEXT]: p.nq,
          [x.EkH.SERVER_PREV]: p.X3,
          [x.EkH.CHANNEL_NEXT]: l.tQ,
          [x.EkH.CHANNEL_PREV]: l.x5,
          [x.EkH.NAVIGATE_BACK]: l.Nx,
          [x.EkH.NAVIGATE_FORWARD]: l.On,
          [x.EkH.UNREAD_NEXT]: v.pd,
          [x.EkH.UNREAD_PREV]: v.wk,
          [x.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
          [x.EkH.MENTION_CHANNEL_PREV]: v.uX,
          [x.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
          [x.EkH.JUMP_TO_GUILD]: r.u,
          [x.EkH.SUBMIT]: m.z,
          [x.EkH.TEXTAREA_FOCUS]: f.U,
          [x.EkH.MARK_CHANNEL_READ]: o.f,
          [x.EkH.MARK_SERVER_READ]: a.l,
          [x.EkH.TOGGLE_MUTE]: g.iN,
          [x.EkH.TOGGLE_DEAFEN]: g.oV,
          [x.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
          [x.EkH.SCROLL_UP]: d.B2,
          [x.EkH.SCROLL_DOWN]: d.gN,
          [x.EkH.SEARCH_EMOJIS]: h.S,
          [x.EkH.TOGGLE_HOTKEYS]: _._,
          [x.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
          [x.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
          [x.EkH.CALL_ACCEPT]: i.IL,
          [x.EkH.CALL_START]: i.FI,
          [x.EkH.QUICKSWITCHER_SHOW]: c.$,
        },
        E = { [x.EkH.QUICKSWITCHER_SHOW]: c.$ };
      function Z() {
        return [
          {
            description: I.intl.string(I.t.bx4Uy8),
            binds: b(x.EkH.SERVER_PREV, x.EkH.SERVER_NEXT),
          },
          {
            description: I.intl.string(I.t["+Wem6u"]),
            binds: b(x.EkH.CHANNEL_PREV, x.EkH.CHANNEL_NEXT),
          },
          {
            description: I.intl.string(I.t["+2fcd3"]),
            binds: b(x.EkH.NAVIGATE_BACK, x.EkH.NAVIGATE_FORWARD),
          },
          {
            description: I.intl.string(I.t.eVmj1N),
            binds: b(x.EkH.UNREAD_PREV, x.EkH.UNREAD_NEXT),
          },
          {
            description: I.intl.string(I.t.EcqS7e),
            binds: b(x.EkH.MENTION_CHANNEL_PREV, x.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
          },
          {
            description: I.intl.string(I.t["Bqss7+"]),
            binds: b(x.EkH.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description: I.intl.string(I.t.UaXAPz),
            binds: b(x.EkH.MARK_SERVER_READ),
          },
          {
            description: I.intl.string(I.t["5X9vFh"]),
            binds: b(x.EkH.MARK_CHANNEL_READ),
          },
          {
            description: I.intl.string(I.t.JoxNnp),
            binds: b(x.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description: I.intl.string(I.t.tL6eVV),
            binds: b(x.EkH.TOGGLE_MUTE),
          },
          {
            description: I.intl.string(I.t["QXe/7e"]),
            binds: b(x.EkH.TOGGLE_DEAFEN),
          },
          {
            description: I.intl.string(I.t.d6UIio),
            binds: b(x.EkH.CALL_ACCEPT),
          },
          {
            description: I.intl.string(I.t.IcEW09),
            binds: b(x.EkH.MARK_CHANNEL_READ),
          },
          {
            description: I.intl.string(I.t.WN2dsb),
            binds: b(x.EkH.CALL_START),
            groupEnd: !0,
          },
          {
            description: I.intl.string(I.t.L3RYYG),
            binds: b(x.EkH.SCROLL_UP, x.EkH.SCROLL_DOWN),
          },
          {
            description: I.intl.string(I.t["3HAurK"]),
            binds: b(x.EkH.JUMP_TO_FIRST_UNREAD),
          },
          {
            description: I.intl.string(I.t.rrYBEh),
            binds: b(x.EkH.TEXTAREA_FOCUS),
          },
          {
            description: I.intl.string(I.t.yYsRlJ),
            binds: b(x.EkH.QUICKSWITCHER_SHOW),
          },
        ];
      }
    },
    134616: function (e, t, n) {
      n.d(t, {
        u: function () {
          return u;
        },
      });
      var i = n(374470),
        l = n(481060),
        r = n(40851),
        o = n(574254),
        a = n(585483),
        s = n(547420),
        c = n(981631);
      let u = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, l.isInDndMode)()) return !1;
            if (a.S.hasSubscribers(c.CkL.CALL_DECLINE))
              return a.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (o.Z.close()) return !1;
            if ((0, i.k)(e.target)) {
              let t = (0, r.J5)(e.target);
              if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (a.S.hasSubscribers(c.CkL.MODAL_CLOSE))
              return a.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            a.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
          },
        },
        ...s.ZP,
      };
    },
    472365: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(411104);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(399606),
        s = n(481060),
        c = n(588705),
        u = n(100527),
        d = n(906732),
        h = n(388905),
        p = n(792766),
        m = n(600164),
        f = n(436774),
        g = n(313201),
        C = n(451603),
        _ = n(885714),
        v = n(973616),
        x = n(594174),
        I = n(855981),
        b = n(55543),
        S = n(626135),
        E = n(768581),
        Z = n(358085),
        N = n(998502),
        y = n(379164),
        T = n(590965),
        A = n(981631),
        j = n(474936),
        P = n(388032),
        R = n(939661),
        M = n(232186);
      function L() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(
          u.Z.PREMIUM_UPSELL_TOOLTIP,
        );
        return (
          l.useEffect(() => {
            S.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
              type: j.cd.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: A.ZY5.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, i.jsxs)(s.Clickable, {
            onClick: () =>
              (0, _.Z)({
                analyticsSource: { page: A.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                analyticsLocation: {
                  page: A.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                  section: A.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: R.experimentUpsellError,
            children: [
              (0, i.jsx)(s.NitroWheelIcon, {
                size: "md",
                className: R.experimentUpsellIcon,
                color: f.JX.PREMIUM_TIER_2,
              }),
              (0, i.jsx)("span", {
                className: R.experimentUpsellText,
                children: P.intl.string(P.t["4/W4Pz"]),
              }),
              (0, i.jsx)("span", {
                className: R.experimentGetNitro,
                children: P.intl.string(P.t.b6KOkJ),
              }),
            ],
          })
        );
      }
      function w(e) {
        let { className: t } = e;
        return (0, i.jsxs)("div", {
          "aria-hidden": "true",
          className: o()(R.iconContainer, t),
          children: [
            (0, i.jsx)(I.Z, { className: R.iconSparklePlus }),
            (0, i.jsx)(s.LinkIcon, {
              size: "custom",
              color: "currentColor",
              className: R.iconLink,
              width: 40,
              height: 40,
            }),
            (0, i.jsx)(b.Z, { className: R.iconSparkleStar }),
          ],
        });
      }
      function D(e) {
        let { transitionState: t } = e,
          n = (0, g.Dt)(),
          { analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
        return (0, i.jsx)(d.Gt, {
          value: l,
          children: (0, i.jsx)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            "aria-labelledby": n,
            transitionState: t,
            children: (0, i.jsxs)(s.ModalContent, {
              className: R.errorContent,
              children: [
                (0, i.jsx)(w, { className: R.errorImage }),
                (0, i.jsx)(s.Heading, {
                  id: n,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: P.intl.string(P.t.u9zxnZ),
                }),
                (0, i.jsx)("div", {
                  className: R.errorBody,
                  children: P.intl.string(P.t.FWkU6O),
                }),
                (0, i.jsx)(h.zx, {
                  size: h.zx.Sizes.LARGE,
                  onClick: () => y.Z.close(),
                  color: h.zx.Colors.BRAND,
                  children: P.intl.string(P.t.wcqOoK),
                }),
              ],
            }),
          }),
        });
      }
      function O(e) {
        let t,
          n,
          { transitionState: r } = e;
        (0, a.e7)([x.default], () => {
          var e;
          return null === (e = x.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let {
          invite: f,
          error: _,
          submitting: I,
        } = (0, a.cj)([T.Z], () => T.Z.getProps());
        l.useEffect(() => {
          !__OVERLAY__ &&
            Z.isPlatformEmbedded &&
            ((0, Z.isWindows)() ? N.ZP.minimize() : N.ZP.restore(),
            N.ZP.focus());
        }, []);
        let b = (0, g.Dt)(),
          { analyticsLocations: S } = (0, d.ZP)(u.Z.INVITE_MODAL);
        if (null == f) return null;
        if (
          f.state === A.r2o.EXPIRED ||
          f.state === A.r2o.BANNED ||
          f.state === A.r2o.ERROR
        )
          return (0, i.jsx)(D, { transitionState: r });
        if (null == f.channel) return null;
        function j() {
          null != f && y.Z.acceptInvite(f);
        }
        let { guild: w, channel: O, inviter: k, target_application: G } = f,
          U = null != w,
          B = null != f.stage_instance,
          H = null == f.guild && null == f.channel && null != f.inviter;
        if (null != G)
          (t = null == w ? void 0 : w.name),
            (n = v.ZP.createFromServer(G).getCoverImageURL(1024));
        else if (null != w)
          (t = w.name),
            (n = E.ZP.getGuildSplashURL({ id: w.id, splash: w.splash }));
        else if (
          ((null == (t = O.name) || "" === t) && null != k && (t = k.username),
          null == t)
        )
          throw Error("no name for group DM invite");
        let V = (0, C.yU)(),
          F = B
            ? P.intl.string(P.t["5UKyUl"])
            : P.intl.format(P.t.QD7BDA, { guildName: t });
        return (
          H && (F = P.intl.string(P.t["e/6Ogo"])),
          (0, i.jsx)(d.Gt, {
            value: S,
            children: (0, i.jsxs)(s.ModalRoot, {
              size: s.ModalSize.DYNAMIC,
              "aria-labelledby": b,
              transitionState: r,
              className: R.container,
              children: [
                (0, i.jsx)("div", {
                  className: R.contentWrapper,
                  children: (0, i.jsx)(s.Scroller, {
                    className: R.scroller,
                    children: (0, i.jsxs)(m.Z, {
                      className: R.inviteContent,
                      direction: m.Z.Direction.VERTICAL,
                      justify: m.Z.Justify.BETWEEN,
                      children: [
                        (0, i.jsx)("div", {
                          id: b,
                          className: M.marginBottom20,
                          children: (0, i.jsx)(c.Z, {
                            invite: f,
                            disableUser: U,
                            error: _,
                          }),
                        }),
                        B && null != w
                          ? (0, i.jsx)("div", {
                              className: o()(M.marginBottom20, R.stage),
                              children: (0, i.jsx)(p.Z, {
                                isCard: !0,
                                stageInstance: f.stage_instance,
                                guild: w,
                              }),
                            })
                          : null,
                        (0, i.jsxs)("div", {
                          children: [
                            V ? (0, i.jsx)(L, {}) : null,
                            null == G
                              ? (0, i.jsx)(s.Tooltip, {
                                  text: V ? P.intl.string(P.t.iLyuDA) : null,
                                  position: "bottom",
                                  children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } =
                                      e;
                                    return (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: j,
                                      submitting: I,
                                      disabled: V,
                                      color: B
                                        ? h.zx.Colors.GREEN
                                        : h.zx.Colors.BRAND,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: V
                                        ? P.intl.string(P.t.ZNCziI)
                                        : F,
                                    });
                                  },
                                })
                              : (0, i.jsxs)("div", {
                                  className: R.buttonGroup,
                                  children: [
                                    (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: j,
                                      submitting: I,
                                      children: P.intl.string(P.t.RscU7O),
                                    }),
                                    (0, i.jsx)(h.zx, {
                                      color: h.zx.Colors.PRIMARY,
                                      size: h.zx.Sizes.LARGE,
                                      onClick: j,
                                      submitting: I,
                                      children: P.intl.string(P.t.eylRaW),
                                    }),
                                  ],
                                }),
                            (0, i.jsx)(m.Z, {
                              justify: m.Z.Justify.CENTER,
                              className: M.marginTop8,
                              children: (0, i.jsx)(h.zx, {
                                look: h.zx.Looks.LINK,
                                className: R.noThanksButton,
                                onClick: function () {
                                  y.Z.close();
                                },
                                color: h.zx.Colors.TRANSPARENT,
                                children: P.intl.string(P.t.ndsK4e),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                null != n &&
                  (0, i.jsx)("div", {
                    className: R.inviteSplash,
                    style: { backgroundImage: "url(".concat(n, ")") },
                  }),
              ],
            }),
          })
        );
      }
    },
    379164: function (e, t, n) {
      var i = n(570140),
        l = n(447543),
        r = n(782605);
      t.Z = {
        acceptInvite(e) {
          let t = l.Z.getInviteContext("Desktop Invite Modal", e);
          l.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
              null != e &&
                null != e.guild &&
                null != e.channel &&
                !__OVERLAY__ &&
                l.Z.transitionToInvite(e);
            },
          }).then(
            () => this.close(),
            (e) => {
              i.Z.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, r.O)(e.code),
              });
            },
          );
        },
        close() {
          i.Z.dispatch({ type: "INVITE_MODAL_CLOSE" });
        },
      };
    },
    185666: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(570140),
        o = n(317770),
        a = n(472365),
        s = n(590965);
      let c = "INVITE_MODAL_KEY";
      class u extends o.Z {
        _initialize() {
          r.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        _terminate() {
          (0, l.closeModal)(c),
            r.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal),
            r.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal);
        }
        handleOpenModal() {
          s.Z.isOpen() &&
            !(0, l.hasModalOpen)(c) &&
            (0, l.openModal)((e) => (0, i.jsx)(a.Z, { ...e }), {
              modalKey: c,
              onCloseRequest: () =>
                r.Z.dispatch({ type: "INVITE_MODAL_CLOSE" }),
            });
        }
        handleCloseModal() {
          (0, l.closeModal)(c);
        }
      }
      t.Z = new u();
    },
    590965: function (e, t, n) {
      let i;
      n(47120), n(653041);
      var l,
        r,
        o,
        a,
        s = n(442837),
        c = n(570140),
        u = n(413605),
        d = n(703656),
        h = n(131704),
        p = n(601964),
        m = n(592125),
        f = n(430824),
        g = n(701190),
        C = n(496675),
        _ = n(594174),
        v = n(998502),
        x = n(981631),
        I = n(176505);
      let b = x.IlC.APP,
        S = !1,
        E = !1,
        Z = [];
      function N() {
        S = !0;
      }
      class y extends (l = s.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, g.Z, _.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? x.IlC.OVERLAY : x.IlC.APP;
          return !!(S && Z.length > 0 && b === e);
        }
        getProps() {
          return {
            invite: Z.length > 0 ? Z[0][0] : null,
            error: null != i && "" !== i ? i : null,
            submitting: E,
          };
        }
      }
      (a = "InviteModalStore"),
        (o = "displayName") in (r = y)
          ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[o] = a),
        (t.Z = new y(c.Z, {
          OVERLAY_INITIALIZE: N,
          CONNECTION_OPEN: N,
          CONNECTION_CLOSED: function () {
            S = !1;
          },
          INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (
              !(
                t.state === x.r2o.EXPIRED ||
                t.state === x.r2o.BANNED ||
                t.state === x.r2o.ERROR
              )
            ) {
              let { channel: e, guild: n } = t;
              if (null == e) return !1;
              if ((0, h.bc)(e.type)) {
                if (null != m.Z.getChannel(e.id))
                  return (0, d.XU)(x.ME, e.id), v.ZP.focus(), !1;
              } else {
                if (null == n) return !1;
                if (null != f.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                  let e = (function (e) {
                    if ((0, u.W6)(e)) return I.oC.ROLE_SUBSCRIPTIONS;
                    let { channel: t } = e;
                    if (null != t) {
                      let e = m.Z.getChannel(t.id);
                      if (C.Z.can(x.Plq.VIEW_CHANNEL, e)) return t.id;
                    }
                    return null;
                  })(t);
                  return (0, d.XU)(n.id, e), v.ZP.focus(), !1;
                }
              }
            }
            if (
              Z.some((e) => {
                let [n] = e;
                return n.code === t.code;
              })
            )
              return !1;
            (b = e.context), (E = !1);
            let n = (function (e) {
              let {
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  code: i,
                  state: l,
                  target_type: r,
                  target_user: o,
                  target_application: a,
                  stage_instance: s,
                  type: c,
                  channel: u,
                  guild: d,
                } = e,
                h = {
                  code: i,
                  state: l,
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  target_type: r,
                  target_user: o,
                  target_application: a,
                  stage_instance: s,
                  type: c,
                };
              return (
                null != u && (h.channel = { ...u }),
                null != d && (h.guild = new p.ZP(d)),
                null != e.inviter && (h.inviter = { ...e.inviter }),
                h
              );
            })(t);
            Z.push([n, e.resolve]);
          },
          INVITE_MODAL_CLOSE: function () {
            if (((i = null), (E = !1), Z.length > 0)) {
              let [, e] = Z.shift();
              null != e && e();
            }
          },
          INVITE_ACCEPT: function () {
            E = !0;
          },
          INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (E = !1);
          },
        }));
    },
    503737: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(570140),
        o = n(468026),
        a = n(317770),
        s = n(981631),
        c = n(388032);
      let u = "ActivityInviteManager",
        d = () => {
          r.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class h extends a.Z {
        _initialize() {
          r.Z.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            r.Z.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
        }
        _terminate() {
          r.Z.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            r.Z.unsubscribe(
              "ACTIVITY_INVITE_MODAL_CLOSE",
              this.handleModalClose,
            );
        }
        handleModalOpen(e) {
          let { activity: t, isPrivate: r, context: a } = e,
            h =
              a === s.IlC.POPOUT
                ? l.POPOUT_MODAL_CONTEXT
                : l.DEFAULT_MODAL_CONTEXT;
          r
            ? (0, l.openModal)(
                (e) =>
                  (0, i.jsx)(o.default, {
                    title: c.intl.formatToPlainString(c.t["2tN7io"], {
                      name: t.name,
                    }),
                    body: c.intl.string(c.t.MAxtkp),
                    confirmText: c.intl.string(c.t.BddRzc),
                    ...e,
                  }),
                { onCloseCallback: d, modalKey: u },
                h,
              )
            : (0, l.openModalLazy)(
                async () => {
                  let { default: e } = await n
                    .e("79921")
                    .then(n.bind(n, 699099));
                  return (t) => (0, i.jsx)(e, { ...t });
                },
                { onCloseCallback: d, modalKey: u, contextKey: h },
              );
        }
        handleModalClose(e) {
          (0, l.closeModal)(u);
        }
      }
      t.Z = new h();
    },
    453542: function (e, t, n) {
      n.d(t, {
        X: function () {
          return o;
        },
      }),
        n(724458),
        n(442837);
      var i = n(868854),
        l = n(801077),
        r = n(674563);
      function o() {
        let e = (0, i.a)();
        return (function (e, t) {
          let n = e.reduce((e, t) => {
            var n;
            let i =
              null !==
                (n = t.party.currentActivities
                  .filter(
                    (e) => null != e.game.name && e.game.type === r.wW.GAME,
                  )
                  .map((e) => e.game.name)) && void 0 !== n
                ? n
                : [];
            return e.concat(i);
          }, []);
          return {
            now_playing_visible: t,
            now_playing_num_cards: e.length,
            now_playing_games_detected: n,
          };
        })(l.Z.nowPlayingCards, e);
      }
    },
    864682: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(540059),
        a = n(594174),
        s = n(74538),
        c = n(327943),
        u = n(997945),
        d = n(630117),
        h = n(441319);
      function p() {
        let e = (0, o.Q)("AppIconHome"),
          [t, n, p] = (0, l.Wu)([a.default, c.Z], () => [
            c.Z.getCurrentDesktopIcon(),
            c.Z.isEditorOpen,
            s.ZP.isPremium(a.default.getCurrentUser()),
          ]),
          m = (0, h.aW)(t),
          f = t !== u.aH.DEFAULT && (p || n),
          g = e ? 24 : 30,
          C = (0, i.jsx)(r.ClydeIcon, {
            size: "custom",
            color: "currentColor",
            width: g,
            height: g,
          });
        return null != m && f ? (0, i.jsx)(d.Z, { id: t, width: 48 }) : C;
      }
    },
    570908: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(743483);
      function a(e) {
        let {
          selected: t,
          muted: n = !1,
          highlighted: l = !1,
          wrapContent: a = !1,
          avatar: s,
          decorators: c,
          name: u,
          subText: d,
          avatarClassName: h,
          innerClassName: p,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(p, o.layout, {
            [o.muted]: !t && n,
            [o.highlighted]: l,
            [o.wrappedLayout]: a,
          }),
          children: [
            (0, i.jsx)("div", { className: r()(o.avatar, h), children: s }),
            (0, i.jsxs)("div", {
              className: o.content,
              children: [
                (0, i.jsxs)("div", {
                  className: o.nameAndDecorators,
                  children: [
                    (0, i.jsx)("div", {
                      className: r()(o.name, { [o.wrappedName]: a }),
                      children: u,
                    }),
                    c,
                  ],
                }),
                null != d
                  ? (0, i.jsx)("div", { className: o.subText, children: d })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    718589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(981631),
        l = n(388032);
      function r(e) {
        let { channel: t, embeddedApps: n } = e;
        if (t.type === i.d4z.GUILD_VOICE) {
          if (null == n || !(n.length > 0)) return;
          {
            let e = n.map((e) => e.application.name);
            return l.intl.formatToPlainString(l.t.LmYuHR, {
              activeActivities: e.join(", "),
            });
          }
        }
      }
    },
    873696: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
      });
      var i = n(388032);
      function l(e) {
        if (null == e) return null;
        switch (e.type) {
          case "embedded-activities":
          case "event":
            return { subtitle: e.name };
          case "go-live":
            return { subtitle: i.intl.string(i.t.Pa817u) };
        }
        return null;
      }
    },
    566840: function (e, t, n) {
      n.d(t, {
        Eg: function () {
          return s;
        },
        XL: function () {
          return u;
        },
      });
      var i = n(192379),
        l = n(232713),
        r = n(65400),
        o = n(731965);
      let a = (0, r.F)((e) => ({ upsellsByGuildId: {} }));
      function s(e) {
        return a((t) => {
          var n;
          let i = {};
          return null == e
            ? i
            : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n
              ? n
              : i;
        }, l.X);
      }
      function c(e) {
        if (null == e) return !1;
        try {
          return window.getComputedStyle(e).overflow.includes("scroll");
        } catch (e) {
          return !1;
        }
      }
      function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = i.useRef(null);
        return (
          i.useLayoutEffect(() => {
            let i = l.current,
              r = () => {
                requestAnimationFrame(() => {
                  var i, r, s;
                  let c =
                    null !==
                      (r =
                        null === (i = l.current) || void 0 === i
                          ? void 0
                          : i.getBoundingClientRect()) && void 0 !== r
                      ? r
                      : null;
                  (s = {
                    name: t,
                    guildId: e,
                    disabled: n,
                    boundingRect: null != c ? c : null,
                  }),
                    (0, o.j)(() => {
                      a.setState((e) => {
                        var t, n;
                        return {
                          upsellsByGuildId: {
                            ...(null !== (t = e.upsellsByGuildId) &&
                            void 0 !== t
                              ? t
                              : {}),
                            [s.guildId]: {
                              ...(null !==
                                (n = e.upsellsByGuildId[s.guildId]) &&
                              void 0 !== n
                                ? n
                                : {}),
                              [s.name]: s,
                            },
                          },
                        };
                      });
                    });
                });
              };
            if (null == i) return r(), () => {};
            let s = (function (e) {
              let t = e.parentNode;
              for (; null != t && t !== document.body && !c(t); )
                t = t.parentNode;
              return c(t) ? t : null;
            })(i);
            return (
              r(),
              null == s || s.addEventListener("scroll", r, { passive: !0 }),
              () => {
                null == s || s.removeEventListener("scroll", r);
              }
            );
          }, [e, t, n]),
          l
        );
      }
    },
    256916: function (e, t, n) {
      n(47120), n(653041);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        s = n(954955),
        c = n.n(s),
        u = n(748780),
        d = n(902704),
        h = n(481060),
        p = n(109489);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let f = { friction: 10, tension: 300 };
      class g extends r.Component {
        shouldComponentUpdate(e, t) {
          return (
            !(0, d.Z)(this.props, e, ["animate"]) || !(0, d.Z)(this.state, t)
          );
        }
        componentDidMount() {
          let { hide: e } = this.props;
          e
            ? this.state.translateY.setValue(1)
            : this.state.translateY.setValue(0);
        }
        componentDidUpdate(e) {
          let { hide: t } = e,
            { hide: n } = this.props;
          n && !t ? this.animateOut() : !n && t && this.animateIn();
        }
        componentWillUnmount() {
          null != this._timeout && clearTimeout(this._timeout);
        }
        animateIn() {
          let { translateY: e } = this.state;
          if (
            (null != this._timeout && clearTimeout(this._timeout),
            !this.props.animate)
          ) {
            e.setValue(0);
            return;
          }
          this._timeout = setTimeout(() => {
            u.Z.spring(e, { toValue: 0, ...f }).start();
          }, 100);
        }
        animateOut() {
          let { translateY: e } = this.state;
          if (
            (null != this._timeout && clearTimeout(this._timeout),
            !this.props.animate)
          ) {
            e.setValue(1);
            return;
          }
          u.Z.spring(e, { toValue: 1, ...f }).start();
        }
        render() {
          let { className: e, text: t, hide: n, onClick: i } = this.props;
          return (0, l.jsx)(u.Z.div, {
            className: a()(p.bar, e),
            onClick: i,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, l.jsx)("span", { className: p.text, children: t }),
          });
        }
        getAnimatedStyle() {
          let { translateY: e } = this.state,
            { reverse: t } = this.props;
          return {
            transform: [
              {
                translateY: e.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", t ? "180%" : "-180%"],
                }),
              },
            ],
          };
        }
        constructor(e) {
          super(e),
            m(this, "_timeout", void 0),
            (this.state = { translateY: new u.Z.Value(), reduceMotion: !1 });
        }
      }
      class C extends (i = r.PureComponent) {
        componentDidMount() {
          this.calculateState();
        }
        componentDidUpdate() {
          this.calculateState();
        }
        componentWillUnmount() {
          this.calculateState.cancel();
        }
        render() {
          let { unread: e, mention: t } = this.state,
            {
              textMention: n,
              textUnread: i,
              reverse: r,
              className: o,
              barClassName: s,
              hide: c,
              animate: u,
            } = this.props,
            { reducedMotion: d } = this.context;
          return (0, l.jsx)("div", {
            className: null != o ? o : void 0,
            children: (0, l.jsx)(g, {
              hide: !0 === c || (null == e && null == t),
              className: a()(s, null != t ? p.mention : p.unread),
              text: null != t ? n : i,
              reverse: r,
              animate: u && !d.enabled,
              onClick: this.handleClick,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "state", { unread: null, mention: null }),
            m(
              this,
              "calculateState",
              c()(() => {
                let {
                    items: e,
                    expandedFolders: t,
                    isVisible: n,
                    isUnread: i,
                    isMentioned: l,
                    reverse: r,
                    onCalculate: o,
                  } = this.props,
                  a = null,
                  s = null,
                  c = [];
                e.forEach((e) => {
                  "string" == typeof e
                    ? c.push(e)
                    : "object" == typeof e && null != e.folderId
                      ? null != t && t.has(e.folderId)
                        ? (c.push("folder:".concat(e.folderId)),
                          e.guildIds.forEach((e) => c.push(e)))
                        : c.push(e.guildIds)
                      : c.push(e.guildIds[0]);
                });
                let u = (e) => {
                    null == a && l(e, r, c) && (a = e),
                      null == s && i(e, r, c) && (s = e);
                  },
                  d = r ? c.length - 1 : 0,
                  h = c[d];
                for (; null != h; ) {
                  if ("string" == typeof h) {
                    if (n(h, r, c)) break;
                    u(h);
                  } else {
                    let e = !1;
                    for (let t of h) {
                      if (n(t, r, c)) {
                        e = !0;
                        break;
                      }
                      u(t);
                    }
                    if (e) break;
                  }
                  (d += r ? -1 : 1), (h = c[d]);
                }
                null != o && o(a, s, r),
                  this.setState({ mention: a, unread: s });
              }, 200),
            ),
            m(this, "handleClick", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { unread: t, mention: n } = this.state,
                { onJumpTo: i } = this.props,
                l = null != n ? n : t;
              null != l && i(l, [n, t]);
            });
        }
      }
      m(C, "contextType", h.AccessibilityPreferencesContext),
        m(C, "defaultProps", {
          className: p.container,
          reverse: !1,
          hide: !1,
          animate: !0,
        }),
        (t.Z = C);
    },
    311352: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(399606),
        r = n(704215),
        o = n(481060),
        a = n(239091),
        s = n(765585),
        c = n(870569),
        u = n(819640),
        d = n(556296),
        h = n(13140),
        p = n(924557),
        m = n(435064),
        f = n(39604),
        g = n(981631),
        C = n(388032),
        _ = n(703757);
      function v(e) {
        (0, a.jW)(e, async () => {
          let { default: e } = await n.e("21960").then(n.bind(n, 999466));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function x() {
        (0, f.C1)();
      }
      let I = (e) => {
        let { keybindString: t, children: n } = e,
          l = (e, t) => {
            e.stopPropagation(), e.preventDefault(), null == t || t();
          };
        return (0, i.jsx)(o.Popout, {
          shouldShow: !1,
          position: "top",
          align: "center",
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(s.Z, {
              dismissibleContent: r.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
              shouldUseHorizontalButtons: !0,
              inlineArt: !0,
              artClassName: _.clipsEducationArt,
              position: "top",
              header: (0, i.jsx)("div", {
                className: _.header,
                children: C.intl.format(C.t["o+srEx"], {
                  keybind: t,
                  keybindHook: () =>
                    (0, i.jsx)("span", {
                      className: _.keybindHintKeys,
                      children: (0, i.jsx)(o.KeyCombo, {
                        className: _.keybindShortcut,
                        shortcut: t,
                      }),
                    }),
                }),
              }),
              headerClassName: _.clipsEducationHeader,
              body: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  className: _.bodyText,
                  children: C.intl.format(C.t.DWeRm5, {
                    keybindHook: () =>
                      (0, i.jsx)("div", { className: _.keyCombo, children: t }),
                    keybind: t,
                  }),
                }),
              }),
              onClose: (e) => {
                l(e, n);
              },
            });
          },
          children: () => n,
        });
      };
      t.Z = () => {
        let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
          t = (0, p.Go)(),
          { clipsEnabled: n, isAtMaxSavingClipsOperations: r } = (0, l.cj)(
            [m.Z],
            () => ({
              clipsEnabled: m.Z.getSettings().clipsEnabled,
              isAtMaxSavingClipsOperations: m.Z.getIsAtMaxSaveClipOperations(),
            }),
          ),
          a = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
        if (!(t && n) || null == a || e) return null;
        let s = h.BB(a.shortcut, !0);
        return (0, i.jsx)(I, {
          keybindString: s,
          children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText:
              null != a
                ? C.intl.formatToPlainString(C.t.HIMcv7, {
                    hotkey: h.BB(null == a ? void 0 : a.shortcut, !0),
                  })
                : C.intl.string(C.t.s52pjo),
            onClick: x,
            onContextMenu: v,
            icon: o.ClipsIcon,
          }),
        });
      };
    },
    832382: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(70097),
        o = n(324085),
        a = n(56371);
      function s(e) {
        let { children: t, channel: n } = e,
          s = (0, l.useRef)(null);
        return ((0, o.J)(n, () => {
          if (null != s.current) {
            let e = s.current;
            e.play();
            let t = setTimeout(() => {
              e.pause();
            }, 23e3);
            return () => {
              clearTimeout(t);
            };
          }
        }),
        n.isHDStreamSplashed)
          ? (0, i.jsxs)("div", {
              className: a.container,
              onMouseEnter: () => {
                null != s.current && s.current.play();
              },
              onMouseLeave: () => {
                null != s.current && s.current.pause();
              },
              children: [
                (0, i.jsx)("div", {
                  className: a.videoContainer,
                  children: (0, i.jsx)(r.Z, {
                    ref: s,
                    className: a.video,
                    muted: !0,
                    loop: !0,
                    preload: "auto",
                    children: (0, i.jsx)("source", {
                      src: "https://cdn.discordapp.com/assets/content/d9e11f6867e4d7ce641f72ee40be0d96b085239067f94564f79ca3920a50397f.mp4",
                      type: "video/mp4",
                    }),
                  }),
                }),
                (0, i.jsx)("div", { className: a.content, children: t }),
              ],
            })
          : (0, i.jsx)(i.Fragment, { children: t });
      }
    },
    14429: function (e, t, n) {
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2021-02_staff_qc_debugging",
        label: "Display QS scores in results. Not a real experiment",
        defaultConfig: { showScores: !1 },
        treatments: [
          {
            id: 1,
            label: "Show scores in QS results",
            config: { showScores: !0 },
          },
        ],
      });
      t.Z = i;
    },
    163889: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(481060),
        s = n(620865);
      let c = l.forwardRef(function (e, t) {
        let { className: n, focusProps: l, ...r } = e;
        return (0, i.jsx)(a.FocusRing, {
          ...l,
          children: (0, i.jsx)("li", {
            className: o()(n, s.container),
            ...r,
            ref: t,
          }),
        });
      });
      t.Z = c;
    },
    860144: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a;
        },
      });
      var i = n(109213),
        l = n(91641),
        r = n(136885),
        o = n(987338);
      let a = new l.E(
        [r.NR, r.ZI, r.Ob, r.uc, r.m1, i.G],
        o.$P.DM_GDM_LIST_RENDER,
        { location: "dm/gdm list rendered" },
      );
    },
    136885: function (e, t, n) {
      n.d(t, {
        NR: function () {
          return r;
        },
        Ob: function () {
          return s;
        },
        ZI: function () {
          return o;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return a;
        },
      });
      var i = n(987170),
        l = n(987338);
      let r = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__vanilla_",
          label: "CTP DM/GDM List Render - A/A test - Vanilla",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        o = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__filters",
          label: "CTP DM/GDM List Render - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        a = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__multiple_buckets",
          label: "CTP DM/GDM List Render - A/A test - Multiple buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment 1", config: { doSomething: !0 } },
            { id: 2, label: "Treatment 2", config: { doSomething: !0 } },
          ],
        }),
        s = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__everyone",
          label: "CTP DM/GDM List Render - A/A test - Everyone",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        c = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__uneven_buckets",
          label: "CTP DM/GDM List Render - A/A test - Uneven buckets",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        });
    },
    919755: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120),
        n(724458);
      var i = n(442837),
        l = n(592125),
        r = n(496675),
        o = n(306680),
        a = n(9156),
        s = n(709054),
        c = n(231338);
      function u(e) {
        return (0, i.cj)([l.Z, o.ZP, a.ZP, r.Z], () => {
          let t = s.default.keys(e);
          return t.reduce(
            (e, t) => {
              let n = l.Z.getChannel(t),
                i = null == n ? void 0 : n.isGuildVocal();
              return (
                (e.badge = e.badge + o.ZP.getMentionCount(t)),
                (e.unread =
                  e.unread ||
                  (!i &&
                    r.Z.can(c.Pl.VIEW_CHANNEL, n) &&
                    o.ZP.hasUnread(t) &&
                    !a.ZP.isChannelMuted(
                      null == n ? void 0 : n.getGuildId(),
                      t,
                    ))),
                e
              );
            },
            { badge: 0, unread: !1 },
          );
        });
      }
    },
    492162: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(442837),
        l = n(592125),
        r = n(938475),
        o = n(853856),
        a = n(981631);
      function s(e) {
        return (0, i.cj)(
          [r.ZP, l.Z, o.Z],
          () => {
            if (e !== a.I_8) return r.ZP.getVoiceStates(e);
            let t = o.Z.getFavoriteChannels(),
              n = {};
            for (let e in t) {
              let t = l.Z.getChannel(e);
              null != t && (n[e] = r.ZP.getVoiceStatesForChannel(t));
            }
            return n;
          },
          [e],
        );
      }
    },
    110977: function (e, t, n) {
      n.d(t, {
        S: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(481060),
        s = n(540059),
        c = n(593214),
        u = n(981631),
        d = n(388032),
        h = n(134123),
        p = n(782451),
        m = n(572488);
      function f() {
        return (0, i.jsx)("div", {
          className: o()(p.row, p.rowGuildName),
          children: (0, i.jsx)("span", {
            className: o()(
              p.guildNameText,
              p.guildNameTextLimitedSize,
              h.tooltipText,
            ),
            children: d.intl.string(d.t["4tSWQk"]),
          }),
        });
      }
      let g = l.memo(function (e) {
        let { "aria-label": t = !1, children: n } = e,
          r = (0, s.Q)("FavoritesAddedTooltip"),
          o = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, c.up)();
            return (
              l.useEffect(() => {
                if (e) {
                  let e = setTimeout(() => {
                    t();
                  }, 1500);
                  return () => {
                    t(), clearTimeout(e);
                  };
                }
              }, [e, t]),
              e
            );
          })();
        return (0, i.jsx)(a.Tooltip, {
          forceOpen: o,
          color: a.TooltipColors.GREEN,
          hideOnClick: !0,
          spacing: r ? 12 : 20,
          position: "right",
          align: "center",
          text: (0, i.jsx)(f, {}),
          "aria-label": t,
          tooltipClassName: m.listItemTooltip,
          children: (e) =>
            (0, i.jsx)("div", {
              ...e,
              onMouseEnter: u.dG4,
              onMouseLeave: u.dG4,
              children: n,
            }),
        });
      });
    },
    940777: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(91192),
        s = n(442837),
        c = n(481060),
        u = n(493683),
        d = n(239091),
        h = n(317381),
        p = n(276952),
        m = n(682662),
        f = n(674552),
        g = n(593364),
        C = n(905423),
        _ = n(199902),
        v = n(592125),
        x = n(944486),
        I = n(979651),
        b = n(709054),
        S = n(853856),
        E = n(593214),
        Z = n(919755),
        N = n(110977),
        y = n(603274),
        T = n(981631),
        A = n(388032),
        j = n(120555);
      let P = {
        analyticsSource: {
          page: T.ZY5.GUILD_CHANNEL,
          section: T.jXE.CHANNEL_LIST,
          object: T.qAy.CHANNEL,
        },
      };
      function R() {
        let e = (0, a.Ie)("favorites"),
          { favoriteAdded: t, clearFavoriteAdded: r } = (0, E.up)(),
          [R, M] = l.useState(!1),
          { favoriteServerMuted: L, favoriteChannels: w } = (0, s.cj)(
            [S.Z],
            () => ({
              favoriteChannels: S.Z.getFavoriteChannels(),
              favoriteServerMuted: S.Z.favoriteServerMuted,
            }),
          ),
          D = (0, s.e7)([x.Z], () => x.Z.getChannelId(T.I_8)),
          O = (0, s.e7)([v.Z], () => v.Z.getChannel(D)),
          k = (0, C.Z)((e) => e.guildId) === T.I_8,
          { badge: G, unread: U } = (0, Z.Z)(w),
          B = (function (e) {
            let t = (0, s.e7)([x.Z], () => x.Z.getVoiceChannelId()),
              n = null != t && null != e[t],
              i = (0, s.e7)([_.Z], () => {
                if (!n) return !1;
                let t = _.Z.getCurrentUserActiveStream();
                return null != t && null != e[t.channelId];
              }),
              l = (0, s.e7)([_.Z], () =>
                _.Z.getAllApplicationStreams().some(
                  (t) => null != e[t.channelId],
                ),
              ),
              r = (0, s.e7)([I.Z], () => n && null != t && I.Z.hasVideo(t), [
                n,
                t,
              ]),
              o = (0, s.Wu)([h.ZP], () =>
                b.default
                  .keys(e)
                  .reduce(
                    (e, t) => (
                      e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e
                    ),
                    [],
                  ),
              ),
              a = (0, s.e7)([h.ZP], () =>
                Array.from(h.ZP.getSelfEmbeddedActivities().values()).some(
                  (t) => {
                    let { channelId: n } = t;
                    return null != e[n];
                  },
                ),
              ),
              c = o.length > 0,
              u = !1,
              d = !1,
              p = !1,
              m = !1;
            return (
              n ? ((u = !r), (d = r), (p = i), (m = a)) : ((p = l), (m = c)),
              (0, f.Or)({
                audio: u,
                video: d,
                screenshare: p,
                liveStage: !1,
                isCurrentUserConnected: n,
                activity: m,
              })
            );
          })(w),
          H = G > 0 ? (0, g.N)(G) : null,
          V = l.useCallback(() => {
            r();
          }, [r]);
        return (0, i.jsxs)(m.H, {
          children: [
            (0, i.jsx)(p.Z, {
              selected: k,
              hovered: R,
              unread: U && !L,
              className: j.pill,
            }),
            (0, i.jsx)(y.Z, {
              onShow: V,
              children: (0, i.jsx)(N.S, {
                children: (0, i.jsx)(c.BlobMask, {
                  selected: k || R,
                  upperBadge: B,
                  lowerBadge: H,
                  children: (0, i.jsx)(c.NavItem, {
                    ...e,
                    ariaLabel: A.intl.formatToPlainString(A.t["/uzRsr"], {
                      guildName: A.intl.string(A.t.wMWycn),
                      mentions: G,
                    }),
                    to: { pathname: T.Z5c.CHANNEL(T.I_8, D), state: P },
                    selected: k || R,
                    onMouseEnter: () => M(!0),
                    onMouseLeave: () => M(!1),
                    onMouseDown: function () {
                      if (null != O) u.Z.preload(O.guild_id, O.id);
                    },
                    onContextMenu: function (e) {
                      (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("3190")
                          .then(n.bind(n, 631981));
                        return (t) => (0, i.jsx)(e, { ...t });
                      });
                    },
                    children: (0, i.jsx)("div", {
                      className: o()(j.ring, { [j.ringActive]: t }),
                      children: (0, i.jsx)(c.StarIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: j.favoriteIcon,
                        width: 20,
                        height: 20,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    603274: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120),
        n(390547),
        n(653041);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(392711),
        a = n.n(o),
        s = n(442837),
        c = n(481060),
        u = n(317381),
        d = n(884338),
        h = n(540059),
        p = n(565799),
        m = n(501655),
        f = n(199902),
        g = n(592125),
        C = n(594174),
        _ = n(938475),
        v = n(823379),
        x = n(709054),
        I = n(853856),
        b = n(981631),
        S = n(388032),
        E = n(782451),
        Z = n(572488);
      function N(e, t) {
        return 0 === t.length
          ? null
          : (0, i.jsxs)("div", {
              className: E.row,
              children: [
                (0, i.jsx)(e, {
                  className: E.activityIcon,
                  color: "currentColor",
                }),
                (0, i.jsx)(d.Z, { guildId: void 0, users: t, max: 6 }),
              ],
            });
      }
      function y() {
        var e, t;
        let n = (0, s.Wu)([I.Z, g.Z], () =>
            x.default
              .keys(I.Z.getFavoriteChannels())
              .map((e) => g.Z.getChannel(e))
              .filter(v.lm),
          ),
          l = n.map((e) => e.id),
          r = n.filter((e) => e.type === b.d4z.GUILD_VOICE),
          o = n
            .filter((e) => e.type === b.d4z.GUILD_STAGE_VOICE)
            .map((e) => e.id),
          h = (0, s.Wu)(
            [_.ZP],
            () =>
              a().flatMap(r, (e) =>
                _.ZP.getVoiceStatesForChannel(e).map((e) => {
                  let { user: t } = e;
                  return t;
                }),
              ),
            [r],
          ),
          S = (0, s.Wu)([p.Z], () =>
            a().flatMap(o, (e) =>
              p.Z.getMutableParticipants(e, m.pV.SPEAKER)
                .filter((e) => e.type === m.Ui.VOICE)
                .map((e) => {
                  let { user: t } = e;
                  return t;
                }),
            ),
          ),
          Z = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of o) e += p.Z.getParticipantCount(t, m.pV.AUDIENCE);
            return e;
          }),
          y = (0, s.Wu)(
            [f.Z],
            () =>
              f.Z.getAllApplicationStreams()
                .filter((e) => l.includes(e.channelId))
                .map((e) => e.ownerId),
            [l],
          ),
          T = (0, s.Wu)(
            [u.ZP],
            () => {
              let e = u.ZP.getEmbeddedActivitiesByChannel(),
                t = [];
              for (let r of l) {
                var n, i;
                t.push(
                  ...(null !==
                    (i =
                      null === (n = e.get(r)) || void 0 === n
                        ? void 0
                        : n.flatMap((e) => Array.from(e.userIds))) &&
                  void 0 !== i
                    ? i
                    : []),
                );
              }
              return t;
            },
            [l],
          ),
          A = (0, s.Wu)([C.default], () => T.map((e) => C.default.getUser(e)), [
            T,
          ]),
          j = (0, s.Wu)([C.default], () => y.map((e) => C.default.getUser(e)), [
            y,
          ]),
          P = N(
            c.VoiceNormalIcon,
            h.filter((e) => !y.includes(e.id) && !T.includes(e.id)),
          );
        let R =
            ((e = S),
            (t = Z),
            0 === e.length
              ? null
              : (0, i.jsxs)("div", {
                  className: E.row,
                  children: [
                    (0, i.jsx)(c.StageIcon, {
                      size: "lg",
                      color: "currentColor",
                      className: E.activityIcon,
                    }),
                    (0, i.jsx)(d.Z, { guildId: void 0, users: e, max: 3 }),
                    (0, i.jsxs)("div", {
                      className: E.stageListenerPill,
                      children: [
                        (0, i.jsx)(c.HeadphonesIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                        (0, i.jsx)(c.Text, {
                          className: E.stageListenerCount,
                          color: "text-normal",
                          variant: "text-xs/medium",
                          children: t,
                        }),
                      ],
                    }),
                  ],
                })),
          M = N(
            c.ScreenArrowIcon,
            j.filter((e) => null != e && !T.includes(e.id)),
          ),
          L = N(c.ActivitiesIcon, A);
        return (0, i.jsxs)(i.Fragment, { children: [R, P, M, L] });
      }
      function T() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(E.row, E.rowGuildName),
              children: (0, i.jsx)("span", {
                className: r()(E.guildNameText, E.guildNameTextLimitedSize),
                children: S.intl.string(S.t.wMWycn),
              }),
            }),
            (0, i.jsx)(y, {}),
          ],
        });
      }
      function A(e) {
        let { "aria-label": t = !1, onShow: n, children: l } = e,
          r = (0, h.Q)("FavoritesTooltip");
        return (0, i.jsx)(c.Tooltip, {
          hideOnClick: !0,
          spacing: r ? 12 : 20,
          position: "right",
          text: (0, i.jsx)(T, {}),
          "aria-label": t,
          tooltipClassName: Z.listItemTooltip,
          onTooltipShow: n,
          children: (e) => (0, i.jsx)("div", { ...e, children: l }),
        });
      }
    },
    571457: function (e, t, n) {
      n.d(t, {
        RI: function () {
          return r;
        },
        k5: function () {
          return a;
        },
        kR: function () {
          return o;
        },
      });
      var i = n(626135),
        l = n(981631);
      function r(e) {
        let { selectedTab: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
      }
      function o(e) {
        let { selectedCategoryId: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
          selected_category_id: t,
        });
      }
      function a(e) {
        let { source: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
          source: t,
        });
      }
    },
    258971: function (e, t, n) {
      n.d(t, {
        Uc: function () {
          return p;
        },
        Xh: function () {
          return m;
        },
        aQ: function () {
          return h;
        },
        m_: function () {
          return i;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i,
        l,
        r = n(512969),
        o = n(972959),
        a = n(264043),
        s = n(34674),
        c = n(703656),
        u = n(979007),
        d = n(981631);
      ((l = i || (i = {})).HOME = "home"),
        (l.SEARCH = "search"),
        (l.APPLICATION = "application"),
        (l.CATEGORY = "category");
      let h = (0, o.H)(() => ({}));
      function p() {
        let {
          location: { state: e },
        } = (0, c.s1)();
        return null == e ? void 0 : e.previousView;
      }
      function m() {
        var e, t, n;
        let {
          location: { pathname: i, search: l },
        } = (0, c.s1)();
        if (
          null != (0, r.LX)(i, { path: d.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, r.LX)(i, { path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let e = new URLSearchParams(l),
            t = { type: "search" },
            n = e.get("q");
          null != n && "" !== n && (t.query = n);
          let i = Number(e.get("category_id"));
          Number.isInteger(i) && i !== s.MU && (t.categoryId = i.toString());
          let r = Number(e.get("page"));
          return null != r && r > 1 && (t.page = r), t;
        }
        let o = (0, r.LX)(i, {
            path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: h } =
            null !== (e = null == o ? void 0 : o.params) && void 0 !== e
              ? e
              : {};
        if (null != o && null != h) return { type: "category", categoryId: h };
        let p = (0, r.LX)(i, {
            path: [
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                ":applicationId",
                ":section",
              ),
              d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
            ],
            exact: !0,
          }),
          {
            applicationId: m,
            section: f,
            skuId: g,
          } = null !== (t = null == p ? void 0 : p.params) && void 0 !== t
            ? t
            : {};
        if (null != p && null != m) {
          let e =
            null === (n = a.Z.getApplication(m)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: m,
            applicationName: e,
            section:
              null != f
                ? f
                : null != g
                  ? u.GlobalDiscoveryAppsSections.STORE
                  : u.GlobalDiscoveryAppsSections.ABOUT,
          };
        }
      }
    },
    133743: function (e, t, n) {
      n.d(t, {
        Gp: function () {
          return p;
        },
        O4: function () {
          return u;
        },
        XL: function () {
          return m;
        },
        Yp: function () {
          return c;
        },
        pR: function () {
          return h;
        },
        ph: function () {
          return d;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(34674),
        l = n(749681),
        r = n(703656),
        o = n(258971),
        a = n(981631),
        s = n(49898);
      let c = () => {
          let e = { previousView: (0, o.Xh)() };
          (0, r.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS, { state: e });
        },
        u = (e) => {
          let { categoryId: t } = e,
            n = { previousView: (0, o.Xh)() };
          (0, r.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: n });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, o.Xh)() };
          (0, r.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: n });
        },
        h = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            l = { previousView: (0, o.Xh)() },
            s = new URLSearchParams();
          null != e && "" !== e && s.set("q", e),
            null != t && t !== i.MU && s.set("category_id", t.toString()),
            null != n && n > 1 && s.set("page", n.toString()),
            (0, r.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
              state: l,
              search: s.toString(),
            });
        },
        p = (e) => {
          let {
            location: { state: t },
          } = (0, r.s1)();
          (0, r.dL)(e, t);
        };
      function m() {
        let { lastItem: e } = o.aQ.getState();
        if (null != e)
          switch (e.type) {
            case o.m_.APPLICATION:
              return (0, l.transitionToGlobalDiscovery)({
                tab: s.GlobalDiscoveryTab.APPS,
                applicationId: e.applicationId,
                section: e.section,
              });
            case o.m_.CATEGORY:
              return (0, l.transitionToGlobalDiscovery)({
                tab: s.GlobalDiscoveryTab.APPS,
                categoryId: Number(e.categoryId),
              });
            case o.m_.SEARCH:
              var t;
              return (0, l.transitionToGlobalDiscovery)({
                tab: s.GlobalDiscoveryTab.APPS,
                query: null !== (t = e.query) && void 0 !== t ? t : "",
                page: e.page,
                categoryId:
                  null != e.categoryId ? Number(e.categoryId) : void 0,
              });
          }
        return (0, l.transitionToGlobalDiscovery)({
          tab: s.GlobalDiscoveryTab.APPS,
        });
      }
    },
    914923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(757143);
      var i = n(388032);
      let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      function r(e) {
        let t = i.intl.string(i.t.FeUKeH);
        return (
          null != e &&
            null != e.sourceName &&
            e.sourceName.length > 0 &&
            (t = e.sourceName),
          { sanitizedTitle: t.replace(l, ""), title: t }
        );
      }
    },
    165393: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(866442),
        s = n(481060),
        c = n(686546),
        u = n(494315);
      let d = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];
      function h(e) {
        return (0, a.Rf)(
          d[
            (function (e) {
              let t = 5381,
                n = 0;
              for (; n < e.length; ) t = (33 * t) ^ e.charCodeAt(n++);
              return t >>> 0;
            })(e) % d.length
          ],
        );
      }
      function p(e) {
        var t;
        let { title: n, className: r } = e,
          [a, d] = l.useState(h(n));
        return (
          l.useEffect(() => {
            d(h(n));
          }, [n]),
          (0, i.jsxs)("div", {
            className: o()(u.wrapper, r),
            children: [
              (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.STATUS_SCREENSHARE,
                width: 32,
                height: 32,
                children: (0, i.jsx)("div", {
                  className: u.icon,
                  style: { backgroundColor: a },
                  children: null !== (t = n[0]) && void 0 !== t ? t : "?",
                }),
              }),
              (0, i.jsx)(s.VideoIcon, {
                size: "md",
                color: "currentColor",
                className: u.badge,
              }),
            ],
          })
        );
      }
    },
    667815: function (e, t, n) {
      n.d(t, {
        v: function () {
          return l;
        },
      });
      var i = n(570140);
      let l = (e, t) => {
        i.Z.wait(() => {
          i.Z.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t,
          });
        });
      };
    },
    531572: function (e, t, n) {
      var i,
        l = n(442837),
        r = n(570140);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let a = {};
      class s extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e && (a = e);
        }
        getState() {
          return a;
        }
        getCountForGuild(e) {
          return a[e];
        }
      }
      o(s, "displayName", "GuildBoostingProgressBarPersistedStore"),
        o(s, "persistKey", "PremiumGuildProgressBarPersistedStore"),
        (t.Z = new s(r.Z, {
          APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
            let { guildId: t, premiumCount: n } = e;
            a = { ...a, [t]: n };
          },
        }));
    },
    583962: function (e, t, n) {
      n.d(t, {
        PD: function () {
          return P;
        },
        aR: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(752877),
        s = n(91192),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(239091),
        p = n(100527),
        m = n(367907),
        f = n(906732),
        g = n(540059),
        C = n(434404),
        _ = n(496675),
        v = n(259580),
        x = n(267642),
        I = n(624138),
        b = n(667815),
        S = n(531572),
        E = n(26323),
        Z = n(30513),
        N = n(981631),
        y = n(388032),
        T = n(976019);
      let A = (0, I.Mg)(
          u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN,
        ),
        j = (e) => {
          let { guild: t, onSelect: n } = e,
            [r, o] = l.useState(t.premiumProgressBarEnabled),
            [a, s] = l.useState(!1),
            u = (0, c.e7)([_.Z], () => _.Z.can(N.Plq.MANAGE_GUILD, t)),
            p = async () => {
              if (!!u)
                s(!0),
                  await C.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }),
                  o(!r),
                  s(!1);
            };
          return (0, i.jsx)(d.Menu, {
            navId: "progress-bar-context",
            onClose: h.Zy,
            "aria-label": y.intl.string(y.t["m85s/v"]),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
              id: "progress-bar-enabled",
              label: y.intl.string(y.t["0CJWPz"]),
              checked: r,
              disabled: a,
              action: p,
            }),
          });
        },
        P = 57,
        R = 57 + A,
        M = { tension: 180, friction: 80 };
      t.ZP = (e) => {
        let { guild: t, withMargin: n } = e,
          r = (0, g.Q)("GuildBoostingSidebarDisplay"),
          { analyticsLocations: u } = (0, f.ZP)(
            p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY,
          ),
          { premiumSubscriberCount: C, id: I } = t,
          A = (0, x.rF)(C, I),
          P = (0, x.FZ)(A, t.id),
          R = null == P,
          L = null != P ? P : A,
          w = (0, c.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getCountForGuild(I)) && void 0 !== e
              ? e
              : 0;
          }),
          D = (0, c.e7)([_.Z], () => _.Z.can(N.Plq.MANAGE_GUILD, t));
        l.useEffect(() => {
          w !== C && (0, b.v)(I, C);
        }, [I, w, C]);
        let O = "".concat(Math.min(100, (C / (0, x.vn)(t.id)[L]) * 100), "%"),
          { current: k } = l.useRef(O),
          G = {
            from: { width: w === C ? k : "0%" },
            to: { width: O },
            config: M,
          },
          [U, B] = (0, d.useSpring)(() => G),
          H = () => {
            (0, m.yw)(N.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
              location: { section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR },
              guild_id: I,
              location_stack: u,
            }),
              (0, E.Z)({
                analyticsLocations: u,
                analyticsSourceLocation: {
                  page: N.ZY5.GUILD_CHANNEL,
                  section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                  object: N.qAy.TOOLTIP,
                },
                guild: t,
                perks: (0, Z.VF)(),
                perkIntro: y.intl.string(y.t.ZhvSn5),
              });
          },
          V = y.intl.formatToPlainString(y.t["2oNfMT"], {
            levelName: (0, x.e9)(L),
          }),
          F = y.intl.format(y.t.dhKnYm, {
            numBoosts: C,
            numTotal: (0, x.vn)(t.id)[L],
          });
        R &&
          ((V = (0, x.e9)(L)),
          (F = y.intl.format(y.t.B2byER, { numBoosts: C }))),
          r && (V = V.toLocaleLowerCase());
        let W = (0, s.JA)("boosts-".concat(t.id));
        return (0, i.jsx)("li", {
          children: (0, i.jsx)(d.Tooltip, {
            text: R
              ? y.intl.string(y.t["Y+V9go"])
              : y.intl.formatToPlainString(y.t.UyDKl5, {
                  levelName: (0, x.nW)(L),
                }),
            color: d.Tooltip.Colors.BLACK,
            position: "top",
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
              (0, i.jsxs)(d.Clickable, {
                ...W,
                ...e,
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: H,
                onMouseEnter: () => {
                  var t;
                  null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
                    B(G);
                },
                className: o()(T.container, { [T.containerWithMargin]: n }),
                onContextMenu: (e) => {
                  D && (0, h.vq)(e, (e) => (0, i.jsx)(j, { ...e, guild: t }));
                },
                children: [
                  (0, i.jsx)(d.HiddenVisually, { children: e["aria-label"] }),
                  (0, i.jsxs)("div", {
                    className: T.textArea,
                    children: [
                      (0, i.jsx)("div", {
                        className: T.goalTextContainer,
                        children: (0, i.jsx)(d.Text, {
                          className: T.goalText,
                          color: r ? "none" : "interactive-active",
                          variant: r ? "text-sm/medium" : "text-xs/bold",
                          children: V,
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: T.progressFraction,
                        children: [
                          (0, i.jsx)(d.Text, {
                            color: r ? "none" : "interactive-normal",
                            variant: r ? "text-sm/medium" : "text-xs/normal",
                            className: T.progressText,
                            children: F,
                          }),
                          (0, i.jsx)(v.Z, {
                            className: T.count,
                            height: 16,
                            width: 16,
                            direction: v.Z.Directions.RIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: o()(T.progressBarContainer, {
                      [T.progressBarContainerComplete]: R,
                    }),
                    children: [
                      (0, i.jsx)(a.animated.div, {
                        className: T.progressBar,
                        style: U,
                      }),
                      R
                        ? (0, i.jsx)("span", {
                            "aria-label": y.intl.string(y.t["7iL1q6"]),
                            role: "img",
                            className: T.tadaIcon,
                            children: "\uD83C\uDF89",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
          }),
        });
      };
    },
    98493: function (e, t, n) {
      n.d(t, {
        m: function () {
          return d;
        },
        p: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(913527),
        r = n.n(l),
        o = n(881052),
        a = n(709054),
        s = n(693546),
        c = n(246364);
      let u = c.tB * c.hW;
      function d(e) {
        let { guildId: t, guildJoinRequests: n } = e,
          l = i.useRef(!1),
          [d, h] = i.useState(null),
          p = i.useRef(null),
          m = i.useRef(!1);
        return {
          fetchNextPage: i.useCallback(
            async (e, i) => {
              if (l.current) return;
              let f = "".concat(e, "-").concat(i),
                g = !1;
              if (
                (f !== p.current &&
                  ((p.current = f), (m.current = !1), (g = !0)),
                m.current)
              )
                return;
              null != d && h(null);
              let C = (function (e, t, n, i) {
                let l = n === c.wB.SUBMITTED;
                if (t === c.Nw.TIMESTAMP_DESC) {
                  if (i)
                    return {
                      before: a.default.fromTimestamp(new Date().getTime()),
                    };
                  {
                    let t = e[e.length - 1];
                    return { before: l ? t.joinRequestId : t.actionedAt };
                  }
                }
                if (i)
                  return {
                    after: a.default.fromTimestamp(
                      r()().subtract(180, "days").valueOf(),
                    ),
                  };
                {
                  let t = e[e.length - 1];
                  return { after: l ? t.joinRequestId : t.actionedAt };
                }
              })(n, e, i, g);
              try {
                l.current = !0;
                let e = await s.Z.fetchGuildJoinRequests({
                  guildId: t,
                  status: i,
                  limit: u,
                  force: !0,
                  ...C,
                });
                if (null != e) {
                  let { guild_join_requests: t } = e.body;
                  t.length < u && (m.current = !0);
                }
              } catch (e) {
                h(new o.Hx(e).getAnyErrorMessage());
              } finally {
                l.current = !1;
              }
            },
            [d, t, n],
          ),
          error: d,
        };
      }
    },
    915885: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(704215),
        o = n(481060),
        a = n(566840),
        s = n(434479),
        c = n(527379),
        u = n(388032);
      function d(e) {
        let { guild: t, selected: n } = e,
          d = l.useCallback(() => {
            (0, c._X)(t.id);
          }, [t.id]),
          h = (0, a.XL)(t.id, r.z.MEMBERS_LAUNCH_UPSELL);
        return (0, i.jsx)("div", {
          ref: h,
          children: (0, i.jsx)(s.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(o.GroupIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: u.intl.string(u.t.oclz3d),
            selected: n,
            onClick: d,
          }),
        });
      }
    },
    396828: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(377171),
        r = n(325767);
      function o(e) {
        let { width: t = 24, height: n = 24, ...o } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M17.225 6.06504C17.3227 6.00866 17.4362 5.98608 17.548 6.00084C17.6598 6.0156 17.7637 6.06686 17.8434 6.14665C17.9232 6.22645 17.9744 6.33037 17.9892 6.44225C18.0039 6.55413 17.9813 6.66772 17.925 6.76548L15.65 10.2551L21.9875 11.581C21.9875 11.7185 21.9875 11.8562 21.9875 11.9937C21.9875 12.1313 21.9875 12.2689 21.9875 12.4065L15.65 13.7323L17.925 17.222C17.9939 17.3117 18.0313 17.4216 18.0313 17.5347C18.0313 17.6478 17.9939 17.7577 17.925 17.8474C17.8281 17.9424 17.6982 17.9962 17.5625 17.9975C17.466 17.996 17.3714 17.9702 17.2875 17.9224L13.8125 15.646L12.4125 22H11.5875L10.2625 15.6585L6.77501 17.935C6.69176 17.9843 6.59672 18.0102 6.49997 18.01C6.43455 18.0098 6.3699 17.9963 6.30977 17.9705C6.24964 17.9447 6.1953 17.9072 6.15001 17.8599C6.06977 17.7789 6.01879 17.6734 6.0052 17.5601C5.99162 17.4468 6.01621 17.3323 6.07501 17.2345L8.36253 13.7449L2 12.4065C2 12.2689 2 12.1313 2 11.9937C2 11.8562 2 11.7185 2 11.581L8.35002 10.2551L6.0625 6.76548C6.0037 6.66774 5.97918 6.55315 5.99277 6.43988C6.00635 6.32661 6.05726 6.22113 6.1375 6.14009C6.21731 6.05781 6.32295 6.00542 6.43672 5.99176C6.5505 5.97809 6.6655 6.00399 6.7625 6.06504L10.25 8.34148L11.575 2H12.4L13.7375 8.34148L17.225 6.06504Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M22 12.4065C21.8956 14.9141 20.8533 17.2908 19.0798 19.0654C17.3062 20.8401 14.931 21.883 12.425 21.9875L13.7625 15.646L17.2375 17.9224C17.3214 17.9702 17.416 17.996 17.5125 17.9975C17.6481 17.9962 17.7781 17.9424 17.875 17.8474C17.9439 17.7577 17.9813 17.6478 17.9813 17.5347C17.9813 17.4216 17.9439 17.3117 17.875 17.222L15.6 13.7323L22 12.4065ZM13.7625 8.34148L17.2375 6.06504C17.3352 6.00866 17.4487 5.98608 17.5605 6.00084C17.6723 6.0156 17.7762 6.06686 17.8559 6.14665C17.9357 6.22645 17.9869 6.33037 18.0017 6.44225C18.0164 6.55413 17.9938 6.66772 17.9375 6.76548L15.6625 10.2551L22 11.581C21.8956 9.07342 20.8533 6.69669 19.0798 4.92206C17.3062 3.14742 14.931 2.10449 12.425 2L13.7625 8.34148ZM10.275 8.34148L11.6 2C9.09402 2.10449 6.71878 3.14742 4.94525 4.92206C3.17172 6.69669 2.12945 9.07342 2.02502 11.581L8.37497 10.2551L6.08752 6.76548C6.02873 6.66774 6.00413 6.55315 6.01772 6.43988C6.0313 6.32661 6.08228 6.22113 6.16252 6.14009C6.24233 6.05781 6.34797 6.00542 6.46175 5.99176C6.57552 5.97809 6.69052 6.00399 6.78752 6.06504L10.275 8.34148ZM6.16252 17.8474C6.08228 17.7663 6.0313 17.6609 6.01772 17.5476C6.00413 17.4343 6.02873 17.3197 6.08752 17.222L8.37497 13.7323L2 12.4065C2.10442 14.9141 3.1467 17.2908 4.92023 19.0654C6.69376 20.8401 9.06899 21.883 11.575 21.9875L10.25 15.646L6.7625 17.9224C6.67925 17.9718 6.58428 17.9977 6.48753 17.9975C6.35971 17.9937 6.23848 17.9398 6.15001 17.8474H6.16252Z",
              fill: "url(#paint0_linear_3793:27920)",
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                id: "paint0_linear_3793:27920",
                x1: "2",
                y1: "21.9875",
                x2: "21.9875",
                y2: "1.98749",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, i.jsx)("stop", {
                    stopColor: l.Z.CREATOR_REVENUE_ICON_GRADIENT_START,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: l.Z.CREATOR_REVENUE_ICON_GRADIENT_END,
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    921711: function (e, t, n) {
      n.d(t, {
        O: function () {
          return u;
        },
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(377171),
        a = n(549631),
        s = n(434618),
        c = n(831746);
      function u(e) {
        return e;
      }
      function d(e) {
        let { locked: t } = e;
        return (0, i.jsx)("div", {
          className: r()(c.iconItem, s.premiumChannelIcon),
          children: (0, i.jsx)(a.Z, {
            className: c.actionIcon,
            color: t ? o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0,
          }),
        });
      }
    },
    518756: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(442837),
        l = n(357156),
        r = n(984933),
        o = n(430824),
        a = n(496675),
        s = n(981631);
      function c(e, t) {
        return (0, i.e7)(
          [o.Z, r.ZP, a.Z],
          () => {
            let n = o.Z.getGuild(e);
            if (
              a.Z.can(s.Plq.ADMINISTRATOR, n) ||
              a.Z.can(s.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of r.ZP.getChannels(e)[r.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, l.Ob)(n);
                if (a.Z.can(e, n)) return !0;
              }
            return !1;
          },
          [e, t],
        );
      }
    },
    265418: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(724912),
        l = n(518756),
        r = n(554747);
      function o(e) {
        let t = (0, l.Z)(e),
          n = (0, r.ZP)(e);
        return !(0, i.Z)(e) && (t || n.length > 0);
      }
    },
    330791: function (e, t, n) {
      n.d(t, {
        bb: function () {
          return r;
        },
        lN: function () {
          return o;
        },
      });
      var i = n(818083),
        l = n(987338);
      let r = (0, i.B)({
        kind: "user",
        id: "2024-09_browsechannelbuttonoptin",
        label:
          "Don't show guild Browse Channels when all channels are already visible",
        defaultConfig: { alwaysShowDirectory: !0 },
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
        treatments: [
          {
            id: 1,
            label: "Hide Browse Channels when all channels are visible",
            config: { alwaysShowDirectory: !1 },
          },
        ],
      });
      function o(e) {
        let { alwaysShowDirectory: t } = r.useExperiment({
          location: "useShowBrowseChannelsExperiment",
        });
        return t || !e;
      }
    },
    968847: function (e, t, n) {
      n.d(t, {
        x: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        l,
        r,
        o,
        a,
        s,
        c = n(392711),
        u = n.n(c),
        d = n(442837),
        h = n(570140),
        p = n(220444),
        m = n(565799),
        f = n(501655),
        g = n(569471),
        C = n(592125),
        _ = n(430824),
        v = n(306680),
        x = n(914010),
        I = n(9156),
        b = n(938475),
        S = n(823379),
        E = n(734307),
        Z = n(981631);
      ((r = i || (i = {})).HIDDEN = "hidden"),
        (r.UNREAD = "unread"),
        (r.MENTIONS = "mentions"),
        (r.VOICE_CHANNELS = "voice-channels");
      let N = { mode: "hidden", mentionCount: 0, targetChannelId: null },
        y = { topBar: N, bottomBar: N },
        T = {},
        A = {};
      function j(e) {
        let t = C.Z.getChannel(e);
        return (
          !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
          !(t.isThread()
            ? g.Z.isMuted(t.id)
            : I.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
          (0, p.d)(t)
        );
      }
      function P(e) {
        let t = C.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = I.ZP.isGuildCollapsed(n),
          l = I.ZP.isChannelMuted(n, t.id);
        return (!i || !l) && v.ZP.getMentionCount(e) > 0;
      }
      function R(e) {
        return (
          !I.ZP.isChannelMuted(e.guild_id, e.id) &&
          (e.isGuildStageVoice()
            ? m.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0
            : b.ZP.getVoiceStatesForChannel(e).length > 0)
        );
      }
      function M(e) {
        var t, n, i;
        let { guildChannels: l } =
            E.Z.getGuildWithoutChangingGuildActionRows(e),
          r = l.getChannels(null !== (t = A[e]) && void 0 !== t ? t : []);
        if (null == r || 0 === r.length) return !1;
        let o = null,
          a = null,
          s = null,
          c = null,
          d = !0,
          h = !0,
          p = !1,
          m = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
          f =
            null !== (n = null == m ? void 0 : m.getShownChannelIds()) &&
            void 0 !== n
              ? n
              : [],
          [g, C, _] = l.getSlicedChannels(r);
        for (let e = 0; e < C.length; e++) {
          let t = C[e];
          if (
            ((j(t.id) || u().some(t.threadIds, j)) && (h = !1),
            (P(t.id) || u().some(t.threadIds, P)) && (d = !1),
            f.includes(t.id) && (p = !0),
            !h && !d && p)
          )
            break;
        }
        let x = 0,
          I = !1,
          b = 0,
          S = !1;
        if (h || d)
          for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (j(t.id) || u().some(t.threadIds, j)) &&
              (null == a && (a = t.id), (I = !0)),
              (P(t.id) || u().some(t.threadIds, P)) &&
                (null == o && (o = t.id),
                (x +=
                  v.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, v.ZP.getMentionCount)));
          }
        if (h || d)
          for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!h && !d) break;
            (j(t.id) || u().some(t.threadIds, j)) &&
              (null == c && (c = t.id), (S = !0)),
              (P(t.id) || u().some(t.threadIds, P)) &&
                (null == s && (s = t.id),
                (b +=
                  v.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, v.ZP.getMentionCount)));
          }
        let Z = null,
          y = null,
          M =
            null !== (i = null == m ? void 0 : m.getChannelRecords()) &&
            void 0 !== i
              ? i
              : [];
        d && b > 0
          ? (Z = { mode: "mentions", mentionCount: b, targetChannelId: s })
          : !p && u().some(M, R)
            ? (Z = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
              })
            : h &&
              S &&
              (Z = { mode: "unread", mentionCount: 0, targetChannelId: c }),
          d && x > 0
            ? (y = { mode: "mentions", mentionCount: x, targetChannelId: o })
            : h &&
              I &&
              (y = { mode: "unread", mentionCount: 0, targetChannelId: a });
        let L =
            null != y &&
            (null == Z || ("mentions" !== Z.mode && "mentions" === y.mode)),
          w = null != Z && ("mentions" === Z.mode || !L);
        return (
          (T[e] = {
            topBar: L && null != y ? y : N,
            bottomBar: w && null != Z ? Z : N,
          }),
          !0
        );
      }
      let L = u().throttle(M, 200);
      function w(e) {
        let { guildId: t } = e,
          n = _.Z.getGuild(t);
        return !!(null != n && n.hasFeature(Z.oNc.COMMUNITY)) && L(t);
      }
      function D(e) {
        let { id: t } = e,
          n = C.Z.getChannel(t);
        if (null == n) return !1;
        let i = _.Z.getGuild(n.guild_id);
        return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && L(n.guild_id);
      }
      function O(e) {
        let { channel: t } = e,
          n = C.Z.getChannel(t.id);
        if (null == n) return !1;
        let i = _.Z.getGuild(t.guild_id);
        return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && L(n.guild_id);
      }
      function k(e) {
        let { channelId: t } = e,
          n = C.Z.getChannel(t);
        if (null == n) return !1;
        let i = _.Z.getGuild(n.guild_id);
        return (
          !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) &&
          x.Z.getGuildId() === n.guild_id &&
          L(n.guild_id)
        );
      }
      function G(e) {
        let { guildId: t } = e;
        return null != t && L(t);
      }
      class U extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, v.ZP, I.ZP, g.Z, b.ZP, x.Z, _.Z);
        }
        getUnreadStateForGuildId(e) {
          var t;
          return null !== (t = T[e]) && void 0 !== t ? t : y;
        }
      }
      (s = "ChannelListUnreadsStore"),
        (a = "displayName") in (o = U)
          ? Object.defineProperty(o, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[a] = s),
        (t.Z = new U(h.Z, {
          UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
              i = _.Z.getGuild(t);
            return (
              !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) &&
              null != n &&
              !u().isEqual(A[t], n) &&
              ((A[t] = n), M(t))
            );
          },
          BULK_ACK: function (e) {
            let { channels: t } = e,
              n = !1;
            return (
              u()(t)
                .map((e) => {
                  var t;
                  let { channelId: n } = e;
                  return null === (t = C.Z.getChannel(n)) || void 0 === t
                    ? void 0
                    : t.guild_id;
                })
                .filter(S.lm)
                .uniq()
                .forEach((e) => {
                  let t = _.Z.getGuild(e);
                  null != t &&
                    t.hasFeature(Z.oNc.COMMUNITY) &&
                    L(e) &&
                    (n = !0);
                }),
              n
            );
          },
          CHANNEL_ACK: k,
          CHANNEL_DELETE: O,
          CHANNEL_LOCAL_ACK: k,
          MESSAGE_ACK: k,
          MESSAGE_CREATE: k,
          MESSAGE_DELETE_BULK: k,
          MESSAGE_DELETE: k,
          PASSIVE_UPDATE_V2: function (e) {
            let t = _.Z.getGuild(e.guildId);
            return (
              !!(
                e.channels.length > 0 &&
                null != t &&
                t.hasFeature(Z.oNc.COMMUNITY)
              ) && L(e.guildId)
            );
          },
          RESORT_THREADS: k,
          THREAD_CREATE: O,
          THREAD_DELETE: O,
          THREAD_LIST_SYNC: w,
          THREAD_MEMBER_UPDATE: D,
          THREAD_MEMBERS_UPDATE: D,
          THREAD_UPDATE: O,
          BULK_CLEAR_RECENTS: w,
          CATEGORY_COLLAPSE_ALL: w,
          CATEGORY_EXPAND_ALL: w,
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = x.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n))
              return !1;
            let i = T[n];
            return null != i && "voice-channels" === i.bottomBar.mode && L(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && L(e.guild_id);
          },
          USER_GUILD_SETTINGS_GUILD_UPDATE: G,
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
        }));
    },
    700026: function (e, t, n) {
      n.d(t, {
        V5: function () {
          return c;
        },
        ie: function () {
          return s;
        },
      });
      var i = n(680089),
        l = n(496675),
        r = n(540126),
        o = n(443063),
        a = n(981631);
      function s(e, t, n) {
        var i, l, a, s, c;
        return {
          hasDivider:
            ((i = e),
            (l = t),
            !(function (e, t) {
              if (t === r.wZ) {
                let t = e.getGuildActionSection().getRows();
                return (
                  (1 === t.length && t[0] === o.z.GUILD_PREMIUM_PROGRESS_BAR) ||
                  e.getGuildActionSection().isEmpty()
                );
              }
              return 0 === e.getSections(!1)[t];
            })(i, (a = n)) &&
              (a === r.wZ ||
                (!!l &&
                  (a === r.p2 ||
                    (a !== r.wd &&
                      (a === i.recentsSectionNumber ||
                        (i.voiceChannelsSectionNumber, !1))))))),
          canHaveVoiceSummary:
            ((s = e),
            !(
              (c = n) === r.wZ ||
              c === r.p2 ||
              c === r.wd ||
              c === s.recentsSectionNumber ||
              c === s.voiceChannelsSectionNumber
            )),
        };
      }
      function c(e) {
        let {
          category: t,
          voiceStates: n,
          selectedChannelId: r,
          selectedVoiceChannelId: o,
        } = e;
        return (
          (function (e) {
            let {
              category: t,
              voiceStates: n,
              selectedChannelId: r,
              selectedVoiceChannelId: o,
            } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
              ? []
              : t.getChannelRecords().filter((e) => {
                  var t;
                  if (!l.Z.can(a.Plq.VIEW_CHANNEL, e)) return !1;
                  let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                  return e.id !== o && e.id !== r && i.length > 0;
                });
          })({
            category: t,
            selectedChannelId: r,
            selectedVoiceChannelId: o,
            voiceStates: n,
          }).length > 0
        );
      }
    },
    438144: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
        s: function () {
          return l;
        },
      });
      var i = n(570140);
      function l(e) {
        i.Z.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 });
      }
      function r(e) {
        i.Z.dispatch({
          type: "VOICE_CATEGORY_COLLAPSE",
          guildId: e,
          expand: !1,
        });
      }
    },
    790901: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i;
        },
      });
      function i(e) {
        return e.length > 0;
      }
    },
    714794: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        return null != e && e > 0;
      }
    },
    761091: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(653041);
      var i = n(399606),
        l = n(897345),
        r = n(697379),
        o = n(241559),
        a = n(563534),
        s = n(655359),
        c = n(931261),
        u = n(460347),
        d = n(994592),
        h = n(265418),
        p = n(398758),
        m = n(330791),
        f = n(443063),
        g = n(981631);
      function C(e) {
        let t = (0, h.Z)(e.id),
          n = (0, r.W)(e.id),
          C = (0, d.j0)(e.id),
          _ = (0, l.u)(e),
          v = (0, c.g)(e.id),
          x = (0, i.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
          I = (0, u.Z)(e.id),
          b = (0, s.PE)(e.id),
          S = (0, o.n2)(e.id),
          E = [],
          Z = e.hasFeature(g.oNc.HUB),
          N = e.hasFeature(g.oNc.COMMUNITY),
          y = (0, m.lN)(!(0, p.r1)(e.id)),
          T = e.hasFeature(
            g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY,
          );
        return (
          Z && E.push(f.z.GUILD_HUB_HEADER_OPTIONS),
          !b && v && I && null != x && x.length > 0
            ? E.push(f.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled &&
              E.push(f.z.GUILD_PREMIUM_PROGRESS_BAR),
          !Z && v && E.push(f.z.GUILD_HOME),
          t && E.push(f.z.GUILD_SCHEDULED_EVENTS),
          !Z && N && y && E.push(f.z.CHANNELS_AND_ROLES),
          C && E.push(f.z.GUILD_ROLE_SUBSCRIPTIONS),
          _ && E.push(f.z.GUILD_SHOP),
          n && E.push(f.z.GUILD_MEMBER_APPLICATIONS),
          S && (N || T) && E.push(f.z.GUILD_MOD_DASH_MEMBER_SAFETY),
          E
        );
      }
    },
    355363: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return r;
        },
      });
      var i = n(829750),
        l = n(981631);
      function r(e) {
        let { channel: t, locked: n, video: r, selected: o } = e;
        return (
          (function (e) {
            let {
                channel: t,
                video: n,
                considerMaxStageVoiceUserLimit: r = !0,
              } = e,
              { limit: o } = (0, i.Z)(t),
              a = -1;
            return (t.userLimit > 0 && (a = t.userLimit),
            n && o > 0 && (a = a > 0 ? Math.min(a, o) : o),
            r && a === l.xGv)
              ? 0
              : a;
          })({ channel: t, video: r }) > 0 &&
          !n &&
          !o
        );
      }
    },
    109446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        c = n(99690),
        u = n(359110),
        d = n(601070),
        h = n(91159),
        p = n(488131),
        m = n(496675),
        f = n(306680),
        g = n(594174),
        C = n(768581),
        _ = n(709054),
        v = n(981631),
        x = n(124368),
        I = n(388032),
        b = n(247472);
      function S(e) {
        let { channel: t } = e,
          r = (0, a.Wu)([d.Z, f.ZP, m.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(
              t.guild_id,
              t.id,
            );
            return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
              .values()
              .map((e) => e.channel)
              .concat(
                o().values(
                  d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id),
                ),
              )
              .filter((t) => !(t.id in e) && m.Z.can(v.Plq.VIEW_CHANNEL, t))
              .sort((e, t) => {
                let n = f.ZP.lastMessageId(e.id),
                  i = f.ZP.lastMessageId(t.id);
                return _.default.compare(n, i);
              })
              .reverse()
              .value();
          }),
          c = t.isForumLikeChannel() ? 5 : 3;
        return (
          l.useEffect(() => {
            (0, h.q)();
          }, []),
          (0, i.jsxs)("div", {
            className: b.popout,
            children: [
              (0, i.jsx)(s.Text, {
                className: b.title,
                variant: "text-xs/bold",
                color: "header-secondary",
                children: t.isForumLikeChannel()
                  ? I.intl.string(I.t.ioVdOz)
                  : I.intl.string(I.t.VNYs2t),
              }),
              r
                .slice(0, t.isForumLikeChannel() ? r.length : c)
                .map((e) => (0, i.jsx)(E, { thread: e }, e.id))
                .filter((e) => l.isValidElement(e))
                .slice(0, c),
              (0, i.jsx)(s.Clickable, {
                className: b.more,
                onClick: () => {
                  t.isForumLikeChannel()
                    ? (0, u.Kh)(t.id)
                    : (0, s.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("36970")
                          .then(n.bind(n, 223901));
                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                      });
                },
                children: (0, i.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  children: I.intl.string(I.t["4qdZ9/"]),
                }),
              }),
            ],
          })
        );
      }
      function E(e) {
        let { thread: t } = e,
          n = (0, a.e7)([g.default], () => g.default.getUser(t.ownerId)),
          l = (0, h.Ok)(t);
        return (0, i.jsxs)(s.Clickable, {
          className: b.row,
          onClick: (e) => {
            (0, p.ok)(
              t,
              t.isForumPost() ? e.shiftKey : !e.shiftKey,
              x.on.POPOUT,
            );
          },
          children: [
            null == n
              ? (0, i.jsx)("img", {
                  className: b.avatar,
                  src: C.ZP.getDefaultAvatarURL(void 0, void 0),
                  alt: "",
                })
              : (0, i.jsx)(c.Z, {
                  className: b.avatar,
                  user: n,
                  size: s.AvatarSizes.SIZE_16,
                }),
            (0, i.jsx)(s.Text, {
              className: b.name,
              variant: "text-sm/normal",
              color: "none",
              children: t.name,
            }),
            (0, i.jsxs)(s.Text, {
              className: b.timestamp,
              variant: "text-sm/normal",
              color: "none",
              children: [
                (0, i.jsx)("span", { className: b.bullet, children: "•" }),
                (0, h.Ye)(l),
              ],
            }),
          ],
        });
      }
    },
    434479: function (e, t, n) {
      n.d(t, {
        m: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(91192),
        a = n(589440),
        s = n(481060),
        c = n(23202),
        u = n(831746),
        d = n(193877);
      function h(e) {
        var t;
        let {
            id: n,
            className: l,
            innerClassName: h,
            renderIcon: p,
            text: m,
            selected: f,
            trailing: g,
            showUnread: C = !1,
            ..._
          } = e,
          v = (0, o.JA)(n),
          x = null !== (t = (0, a.q)(m)) && void 0 !== t ? t : "";
        return (0, i.jsx)("li", {
          children: (0, i.jsxs)(s.ClickableContainer, {
            ..._,
            buttonProps: { ...v, id: n, role: "button" },
            tag: "div",
            "aria-label": x,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
              null != _.onContextMenu
                ? _.onContextMenu
                : (e) => {
                    e.stopPropagation();
                  },
            className: r()(
              u.containerDefault,
              d.wrapper,
              { [d.modeSelected]: f },
              l,
            ),
            children: [
              C
                ? (0, i.jsx)("div", {
                    className: r()(d.unread, d.unreadImportant),
                  })
                : null,
              (0, i.jsx)("div", {
                className: r()([d.link, d.basicChannelRowLink, h]),
                children: (0, i.jsxs)("div", {
                  className: c.content,
                  children: [
                    (0, i.jsx)("div", {
                      className: d.iconContainer,
                      children: p(d.icon),
                    }),
                    (0, i.jsx)("div", {
                      className: d.name,
                      "aria-hidden": !0,
                      children: m,
                    }),
                    g,
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    301342: function (e, t, n) {
      n.d(t, {
        P: function () {
          return y;
        },
        Qo: function () {
          return T;
        },
        kw: function () {
          return j;
        },
        rj: function () {
          return A;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(91192),
        s = n(442837),
        c = n(481060),
        u = n(211739),
        d = n(239091),
        h = n(146773),
        p = n(82295),
        m = n(111028),
        f = n(540059),
        g = n(680089),
        C = n(430824),
        _ = n(496675),
        v = n(9156),
        x = n(203818),
        I = n(438144),
        b = n(981631),
        S = n(388032),
        E = n(147903);
      function Z(e) {
        e.stopPropagation();
      }
      let N = l.memo(function (e) {
        let t,
          {
            channel: r,
            connectChannelDragSource: h,
            connectChannelDropTarget: x,
            disableManageChannels: I,
            position: N,
            sortingPosition: y,
            hideIcon: T,
            children: A,
          } = e,
          j = (0, f.Q)("CategoryChannel"),
          P = (0, s.e7)([v.ZP], () =>
            v.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          R = (0, s.e7)([g.Z], () => g.Z.isCollapsed(r.id)),
          M = (0, s.e7)([_.Z], () => _.Z.can(b.Plq.MANAGE_CHANNELS, r));
        t =
          null != y
            ? N > y
              ? E.containerDragAfter
              : E.containerDragBefore
            : E.containerDefault;
        let L = l.useCallback(() => {
            R ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
          }, [r.id, R]),
          w = l.useCallback(
            (e) => {
              if ("null" !== r.id) {
                let t = C.Z.getGuild(r.getGuildId());
                null != t &&
                  (0, d.jW)(e, async () => {
                    let { default: e } = await n
                      .e("8965")
                      .then(n.bind(n, 139035));
                    return (n) => (0, i.jsx)(e, { ...n, channel: r, guild: t });
                  });
              }
            },
            [r],
          ),
          D = l.useCallback(() => {
            let e = r.type === b.d4z.GUILD_CATEGORY ? null : r.type,
              t = r.getGuildId();
            null != t &&
              (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  n.e("45094"),
                  n.e("5506"),
                ]).then(n.bind(n, 218613));
                return (n) =>
                  (0, i.jsx)(l, {
                    ...n,
                    channelType: e,
                    guildId: t,
                    categoryId: "null" !== r.id ? r.id : null,
                  });
              });
          }, [r]),
          { role: O, tabIndex: k, ...G } = (0, a.JA)(r.id),
          U = l.useRef(null),
          B = l.useRef(null),
          H = (0, i.jsxs)("li", {
            className: t,
            "data-dnd-name": r.name,
            children: [
              (0, i.jsx)(c.FocusRing, {
                focusTarget: U,
                ringTarget: B,
                offset: { left: 4, right: 4 },
                children: (0, i.jsxs)("div", {
                  ref: B,
                  className: o()(E.iconVisibility, E.wrapper, {
                    [E.collapsed]: R,
                    [E.muted]: P,
                    [E.clickable]: !0,
                  }),
                  onContextMenu: w,
                  children: [
                    (0, i.jsxs)(c.Clickable, {
                      innerRef: U,
                      className: E.mainContent,
                      tabIndex: k,
                      ...G,
                      onClick: L,
                      "aria-label": S.intl.formatToPlainString(S.t.y5l3Jy, {
                        categoryName: r.name,
                      }),
                      "aria-expanded": !R,
                      focusProps: { enabled: !1 },
                      children: [
                        j || T
                          ? null
                          : (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: "md",
                              color: "currentColor",
                              className: E.icon,
                            }),
                        (0, i.jsx)(p.Z, {
                          className: E.name,
                          children: (0, i.jsx)(m.Z, { children: r.name }),
                        }),
                        j && !T
                          ? (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: "md",
                              color: "currentColor",
                              className: E.icon,
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)("div", {
                      onClick: Z,
                      className: E.children,
                      children:
                        M && !I
                          ? (0, i.jsx)(c.Tooltip, {
                              text: S.intl.string(S.t["fUYU+v"]),
                              children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Button, {
                                  "aria-label": S.intl.string(S.t["fUYU+v"]),
                                  look: c.Button.Looks.BLANK,
                                  size: c.Button.Sizes.NONE,
                                  className: o()(E.addButton, E.forceVisible),
                                  onClick: D,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  tabIndex: k,
                                  focusProps: {
                                    offset: {
                                      top: -3,
                                      right: -4,
                                      bottom: -3,
                                      left: -4,
                                    },
                                  },
                                  children: j
                                    ? (0, i.jsx)(c.PlusMediumIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: E.addButtonIcon,
                                      })
                                    : (0, i.jsx)(c.PlusSmallIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: E.addButtonIcon,
                                      }),
                                });
                              },
                            })
                          : null,
                    }),
                  ],
                }),
              }),
              A,
            ],
          });
        return null != x && null != h ? x(h(H)) : H;
      });
      t.ZP = (0, h.B)(N);
      let y = l.memo(function (e) {
          let { name: t, onDismiss: n, className: l } = e;
          return (0, i.jsx)("li", {
            className: o()(l, E.containerDefault),
            children: (0, i.jsxs)("div", {
              className: o()(E.iconVisibility, E.wrapperStatic),
              children: [
                (0, i.jsx)("div", {
                  className: E.mainContent,
                  children: (0, i.jsx)(p.Z, {
                    className: E.name,
                    children: (0, i.jsx)(m.Z, { children: t }),
                  }),
                }),
                null != n
                  ? (0, i.jsx)(c.TooltipContainer, {
                      text: S.intl.string(S.t["5qNmsb"]),
                      className: E.dismissWrapper,
                      children: (0, i.jsx)(c.Clickable, {
                        className: E.dismissButton,
                        onClick: n,
                        children: (0, i.jsx)(c.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: E.dismiss,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          });
        }),
        T = l.memo(function (e) {
          let { category: t } = e,
            n = (0, s.e7)([x.Z], () =>
              x.Z.isVoiceCategoryCollapsed(t.guild.id),
            ),
            r = l.useCallback(() => {
              n ? (0, I.s)(t.guild.id) : (0, I.M)(t.guild.id);
            }, [t.guild.id, n]);
          return n
            ? (0, i.jsxs)(c.Clickable, {
                className: E.voiceChannelsButton,
                onClick: r,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: E.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: S.intl.string(S.t["/eB9Bg"]),
                  }),
                ],
              })
            : (0, i.jsxs)(c.Clickable, {
                className: E.voiceChannelsButton,
                onClick: r,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: E.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: S.intl.string(S.t.Q2gPWl),
                  }),
                ],
              });
        }),
        A = l.memo(function (e) {
          let { category: t, channel: n } = e,
            l = (0, s.e7)([x.Z], () =>
              x.Z.isVoiceCategoryCollapsed(t.guild.id),
            );
          return l || null == n || n.record.type === b.d4z.GUILD_CATEGORY
            ? l
              ? (0, i.jsx)("li", {
                  className: o()(E.containerDefault),
                  children: (0, i.jsx)("div", {
                    className: o()(E.iconVisibility, E.wrapperStatic),
                    children: (0, i.jsx)(p.Z, {
                      className: E.name,
                      children: (0, i.jsx)(m.Z, {
                        children: S.intl.string(S.t["V/u9Dw"]),
                      }),
                    }),
                  }),
                })
              : null
            : (0, i.jsx)("div", { style: { height: 16 } });
        }),
        j = l.memo(function (e) {
          let { channel: t } = e;
          return (0, i.jsx)("li", {
            className: o()(E.containerDefault),
            children: (0, i.jsx)("div", {
              className: o()(E.iconVisibility, E.wrapperStatic),
              children: (0, i.jsx)(p.Z, {
                className: E.name,
                children: (0, i.jsx)(m.Z, { children: t.name }),
              }),
            }),
          });
        });
    },
    754231: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        c = n(503438),
        u = n(39628),
        d = n(884338),
        h = n(528144),
        p = n(424678),
        m = n(594174),
        f = n(81063),
        g = n(768581),
        C = n(823379),
        _ = n(51144),
        v = n(823469);
      let x = d.u.SIZE_24;
      function I(e) {
        var t, n;
        let { activity: r, user: o, embeddedApp: a, onOpenSpotifyAlbum: u } = e,
          d = null == r ? void 0 : r.assets,
          h = null == r ? void 0 : r.application_id;
        if (
          null == r ||
          null == d ||
          (null == d.large_image && null == d.small_image)
        )
          return null != a
            ? (function (e) {
                let t = g.ZP.getApplicationIconURL({
                    id: e.application.id,
                    icon: e.application.icon,
                  }),
                  n = e.application.name;
                return (0, i.jsx)(s.Tooltip, {
                  text: n,
                  position: "top",
                  children: () =>
                    (0, i.jsx)("img", {
                      alt: n,
                      src: t,
                      className: v.applicationLargeImage,
                    }),
                });
              })(a)
            : null;
        let p =
            null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
          m = (0, c.Z)(r),
          C = m ? v.spotifyLargeImage : v.applicationLargeImage,
          _ =
            null != p
              ? (0, i.jsx)("img", {
                  alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
                  src: (0, f.getAssetImage)(h, p, [128, 128]),
                  className: C,
                })
              : null;
        return m && null != u
          ? ((_ = (0, i.jsx)(s.Clickable, {
              className: v.clickable,
              onClick: () => {
                u(r, o.id);
              },
              children: _,
            })),
            (0, i.jsx)(s.Tooltip, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: (e) => {
                let { onClick: t, ...n } = e;
                return null != _ ? l.cloneElement(_, n) : null;
              },
            }))
          : _;
      }
      function b(e) {
        let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
          r = null == t ? void 0 : t.details,
          o = null == t ? void 0 : t.name,
          a = o;
        if (null != n) a = n.application.name;
        else {
          if (
            !(null != t && (0, c.Z)(t)) ||
            null == t.sync_id ||
            null == r ||
            null == l
          )
            return null;
          (o = r),
            (a = (0, i.jsx)(s.Clickable, {
              className: v.headerLink,
              onClick: () => {
                l(t);
              },
              children: r,
            }));
        }
        return (0, i.jsx)(h.Z, { title: o, className: v.header, children: a });
      }
      function S(e) {
        let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
          r = null == t ? void 0 : t.details,
          a = null == t ? void 0 : t.state,
          s = r;
        return (null != t &&
          (0, c.Z)(t) &&
          null != a &&
          (s = [
            (0, i.jsx)(
              p.Z,
              {
                artists: a,
                linkClassName: v.bodyLink,
                canOpen: null != t.sync_id,
                onOpenSpotifyArtist: (e) => {
                  null == l || l(t, n.id, e);
                },
              },
              a,
            ),
          ]),
        null == s || "" === s)
          ? null
          : (0, i.jsx)("div", {
              className: o()(
                v.ellipsisRow,
                v.colorHeaderSecondary,
                v.bodyTextSize,
              ),
              children: s,
            });
      }
      function E(e) {
        let { activity: t } = e,
          n = null == t ? void 0 : t.state;
        return null == n || "" === n || (0, c.Z)(t)
          ? null
          : (0, i.jsx)("div", {
              className: o()(
                v.ellipsisRow,
                v.colorHeaderSecondary,
                v.bodyTextSize,
                v.__invalid_activity,
              ),
              children: n,
            });
      }
      function Z(e) {
        let { activity: t } = e;
        if (null == t || !(0, c.Z)(t)) return null;
        let { timestamps: n } = t;
        if (
          (null == n ? void 0 : n.start) == null ||
          (null == n ? void 0 : n.end) == null
        )
          return null;
        let { start: l, end: r } = n;
        return (0, i.jsx)(u.Z, {
          start: l,
          end: r,
          className: v.timeBar,
          themed: !0,
          singleLine: !0,
        });
      }
      function N(e) {
        let {
            activity: t,
            embeddedApp: n,
            user: r,
            channel: o,
            sortedVoiceStates: u,
            onOpenSpotifyTrack: h,
            onOpenSpotifyArtist: p,
            onOpenSpotifyAlbum: f,
          } = e,
          g = [];
        null != n
          ? (g = Array.from(n.embeddedActivity.userIds))
          : (0, c.Z)(t) && null != u && (g = u.map((e) => e.user.id));
        let N = (0, a.Wu)([m.default], () =>
            g.map((e) => m.default.getUser(e)).filter(C.lm),
          ),
          y = null != n || (0, c.Z)(t),
          T = l.useMemo(() => {
            let e = new Map();
            return (
              y &&
                null != u &&
                u.forEach((t) => {
                  let n = t.member;
                  null != n && e.set(t.user.id, n);
                }),
              e
            );
          }, [u, y]);
        return y
          ? (0, i.jsxs)("div", {
              className: v.flexColumn,
              children: [
                (0, i.jsxs)("div", {
                  className: v.flexRow,
                  children: [
                    (0, i.jsx)(I, {
                      activity: t,
                      user: r,
                      embeddedApp: n,
                      onOpenSpotifyAlbum: f,
                    }),
                    (0, i.jsxs)("div", {
                      className: v.detailsAndAvatarsContainer,
                      children: [
                        (0, i.jsx)(b, {
                          activity: t,
                          embeddedApp: n,
                          onOpenSpotifyTrack: h,
                        }),
                        (0, i.jsx)(S, {
                          activity: t,
                          user: r,
                          onOpenSpotifyArtist: p,
                        }),
                        (0, i.jsx)(E, { activity: t }),
                        g.length > 0 &&
                          (0, i.jsx)(d.Z, {
                            className: v.usersSummary,
                            guildId: o.guild_id,
                            users: N,
                            size: x,
                            max: 7,
                            renderUser: (e) => {
                              var t;
                              if (null == e) return null;
                              let n = T.get(e.id),
                                l =
                                  null !== (t = null == n ? void 0 : n.nick) &&
                                  void 0 !== t
                                    ? t
                                    : _.ZP.getName(e);
                              return (0, i.jsx)(
                                s.TooltipContainer,
                                {
                                  text: l,
                                  position: "bottom",
                                  children: (0, i.jsx)(
                                    "img",
                                    {
                                      src: e.getAvatarURL(o.guild_id, x),
                                      alt: l,
                                      className: v.avatar,
                                    },
                                    e.id,
                                  ),
                                },
                                e.id,
                              );
                            },
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(Z, { activity: t }),
              ],
            })
          : null;
      }
    },
    449932: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(481060),
        s = n(717881),
        c = n(503438),
        u = n(850827),
        d = n(952164),
        h = n(237583),
        p = n(131704),
        m = n(314897),
        f = n(594174),
        g = n(768581),
        C = n(51144),
        _ = n(754231),
        v = n(787308);
      function x(e) {
        let { guildId: t, member: n, className: l } = e,
          o = null != n.member ? (0, g.CA)(n.member) : null;
        return (0, i.jsx)(a.Tooltip, {
          text: n.nick,
          position: "bottom",
          children: (e) => {
            var s;
            return (0, i.jsx)(a.Avatar, {
              src: null != o ? o : n.user.getAvatarURL(t, 16),
              size: a.AvatarSizes.SIZE_16,
              className: r()(l, v.partyAvatar),
              "aria-label":
                null !== (s = n.nick) && void 0 !== s
                  ? s
                  : C.ZP.getName(n.user),
              ...e,
            });
          },
        });
      }
      function I(e) {
        let { members: t, guildId: n } = e;
        return (0, i.jsx)(h.Z, {
          className: v.partyMembers,
          guildId: n,
          users: t,
          max: 6,
          renderUser: (e, t, l) =>
            (0, i.jsx)(x, { guildId: n, member: e, className: t }, l),
          renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
              "div",
              { className: r()(v.morePartyMembers, t), children: e },
              n,
            ),
        });
      }
      t.Z = (e) => {
        let {
            channel: t,
            presenceActivity: n,
            members: l,
            embeddedApp: r,
            onAction: a,
          } = e,
          h = null != r,
          g = h ? Array.from(r.embeddedActivity.userIds) : [],
          C = (0, o.e7)([f.default, m.default], () => {
            if (h) return f.default.getUser(g[0]);
            if (null != l) {
              var e, t;
              return l.length <= 0
                ? null
                : null !==
                      (t =
                        null ===
                          (e = l.find(
                            (e) => e.user.id !== m.default.getId(),
                          )) || void 0 === e
                          ? void 0
                          : e.user) && void 0 !== t
                  ? t
                  : l[0].user;
            }
          });
        if (null == C) return null;
        let x = h || (0, c.Z)(n),
          b = (0, p.vd)(t.type);
        return (0, i.jsxs)("div", {
          className: v.activity,
          children: [
            (0, i.jsx)("div", {
              className: v.channelActivityContainer,
              children: x
                ? (0, i.jsx)(_.Z, {
                    activity: n,
                    embeddedApp: r,
                    user: C,
                    channel: t,
                    sortedVoiceStates: l,
                    onOpenSpotifyTrack: b ? d.aG : void 0,
                    onOpenSpotifyArtist: b ? d.d$ : void 0,
                    onOpenSpotifyAlbum: b ? d.Z5 : void 0,
                  })
                : (0, i.jsx)(s.Z, {
                    type: s.P.VOICE_CHANNEL,
                    activity: n,
                    user: C,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    renderHeaderAccessory:
                      null != l
                        ? () =>
                            (0, i.jsx)(I, { guildId: t.guild_id, members: l })
                        : void 0,
                    isEmbedded: h,
                  }),
            }),
            (0, i.jsx)("div", {
              className: v.activityActionsContainer,
              children: (0, i.jsx)(u.Z, {
                type: s.P.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                user: C,
                guildId: t.getGuildId(),
                channelId: t.id,
                color: v.button,
                onAction: a,
                isEmbedded: h,
              }),
            }),
          ],
        });
      };
    },
    98597: function (e, t, n) {
      n.d(t, {
        CN: function () {
          return T;
        },
        ZP: function () {
          return L;
        },
        eP: function () {
          return P;
        },
        hR: function () {
          return j;
        },
        jo: function () {
          return A;
        },
      });
      var i,
        l,
        r,
        o,
        a = n(200651),
        s = n(192379),
        c = n(120356),
        u = n.n(c),
        d = n(442837),
        h = n(481060),
        p = n(787014),
        m = n(924301),
        f = n(159300),
        g = n(152376),
        C = n(427679),
        _ = n(155409),
        v = n(131704),
        x = n(199902),
        I = n(430824),
        b = n(496675),
        S = n(914010),
        E = n(281029),
        Z = n(981631),
        N = n(388032),
        y = n(831746);
      function T(e, t, n) {
        return null != t && !!t && !(0, E.ig)(n, e.type);
      }
      function A(e, t) {
        return null == t
          ? y.containerDefault
          : e > t
            ? y.containerDragAfter
            : y.containerDragBefore;
      }
      function j(e) {
        let {
          channel: t,
          disableManageChannels: n,
          tabIndex: i,
          forceShowButtons: l,
          hasChannelInfo: r = !1,
        } = e;
        if (
          (0, d.e7)(
            [b.Z, S.Z],
            () =>
              n ||
              S.Z.getGuildId() === Z.I_8 ||
              (!b.Z.can(Z.Plq.MANAGE_CHANNELS, t) &&
                !b.Z.can(Z.Plq.MANAGE_ROLES, t) &&
                !b.Z.can(Z.Plq.MANAGE_WEBHOOKS, t)) ||
              ((0, v.r8)(t.type) && !b.Z.can(Z.Plq.VIEW_CHANNEL, t)) ||
              (t.isGuildVocal() && !b.Z.can(Z.Plq.CONNECT, t)) ||
              !v.dF.has(t.type),
          )
        )
          return null;
        function o() {
          p.ZP.open(t.id);
        }
        return (0, a.jsx)(h.Tooltip, {
          text: N.intl.string(N.t["3gUsJS"]),
          children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: c } = e;
            return (0, a.jsx)(h.Clickable, {
              className: u()(
                y.iconItem,
                l ? y.alwaysShown : void 0,
                r ? y.iconWithChannelInfo : y.iconNoChannelInfo,
              ),
              onClick: o,
              tabIndex: i,
              "aria-label": N.intl.string(N.t["3gUsJS"]),
              onMouseEnter: t,
              onMouseLeave: n,
              onFocus: s,
              onBlur: c,
              children: (0, a.jsx)(h.SettingsIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            });
          },
        });
      }
      function P(e) {
        let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: r,
            forceShowButtons: o,
            hasChannelInfo: s = !1,
          } = e,
          c = (0, d.e7)([I.Z], () => I.Z.getGuild(t.getGuildId())),
          p = (0, d.e7)([C.Z], () => C.Z.getStageInstanceByChannel(t.id), [
            t.id,
          ]),
          g = (0, d.e7)([m.ZP], () => m.ZP.getActiveEventByChannel(t.id), [
            t.id,
          ]),
          v = (0, d.e7)([b.Z], () => (0, f.b)(b.Z, c, t, p)),
          S = (0, d.e7)([b.Z], () =>
            b.Z.can(Z.Plq.CREATE_INSTANT_INVITE, t)
              ? N.intl.string(N.t.zJrgTE)
              : N.intl.string(N.t.Sd8Ix8),
          );
        if (l || !v) return null;
        function E() {
          if (null != c) {
            let e = x.Z.getAllActiveStreams().filter(
              (e) => e.state !== Z.jm8.ENDED && e.channelId === t.id,
            );
            (0, h.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                n.e("7654"),
                n.e("86004"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, a.jsx)(i, {
                  ...n,
                  guild: c,
                  channel: t,
                  streamUserId: 1 === e.length ? e[0].ownerId : null,
                  source: Z.t4x.GUILD_CHANNELS,
                  guildScheduledEvent: g,
                });
            });
          }
        }
        let T = (0, a.jsx)(h.GroupPlusIcon, {
          size: "xs",
          className: y.actionIcon,
          "aria-hidden": !0,
        });
        return (
          i &&
            (T = (0, a.jsx)(_.Z, {
              tutorialId: "instant-invite",
              position: "left",
              children: (0, a.jsx)("div", { children: T }),
            })),
          (0, a.jsx)(h.Tooltip, {
            text: S,
            children: (e) =>
              (0, a.jsx)(h.Clickable, {
                className: u()(
                  y.iconItem,
                  o ? y.alwaysShown : void 0,
                  s ? y.iconWithChannelInfo : y.iconNoChannelInfo,
                ),
                ...e,
                onClick: E,
                tabIndex: r,
                "aria-label": S,
                children: T,
              }),
          })
        );
      }
      function R(e) {
        let { channel: t } = e,
          n = () => {
            (0, g._U)(t.guild_id, t.id);
          };
        return (0, a.jsx)(h.Tooltip, {
          text: N.intl.string(N.t.ROh4T0),
          children: (e) =>
            (0, a.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": N.intl.string(N.t.ROh4T0),
              children: (0, a.jsx)(h.XSmallIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            }),
        });
      }
      function M(e) {
        let { channel: t } = e,
          n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: Z.jXE.CHANNEL_LIST });
          };
        return (0, a.jsx)(h.Tooltip, {
          text: N.intl.string(N.t["N2c/Ul"]),
          children: (e) =>
            (0, a.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": N.intl.string(N.t["N2c/Ul"]),
              children: (0, a.jsx)(h.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            }),
        });
      }
      class L extends (o = s.PureComponent) {
        renderEditButton() {
          return (0, a.jsx)(j, { ...this.props });
        }
        renderInviteButton() {
          return (0, a.jsx)(P, { ...this.props });
        }
        renderRemoveSuggestionButton() {
          return (0, a.jsx)(R, { ...this.props });
        }
        renderAcceptSuggestionButton() {
          return (0, a.jsx)(M, { ...this.props });
        }
        getClassName() {
          let { position: e, sortingPosition: t } = this.props;
          return A(e, t);
        }
        isDisabled() {
          let { channel: e, sorting: t, sortingType: n } = this.props;
          return T(e, t, n);
        }
      }
      (r = { isDefaultChannel: !1 }),
        (l = "defaultProps") in (i = L)
          ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = r);
    },
    648501: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(692547),
        o = n(481060),
        a = n(619915),
        s = n(456269),
        c = n(921711),
        u = n(368442),
        d = n(601070),
        h = n(430824),
        p = n(496675),
        m = n(306680),
        f = n(979651),
        g = n(968358),
        C = n(790901),
        _ = n(714794),
        v = n(355363),
        x = n(687352),
        I = n(135724),
        b = n(25601),
        S = n(981631),
        E = n(490897),
        Z = n(388032),
        N = n(518360);
      function y(e) {
        var t;
        let {
            channel: n,
            isChannelSelected: y,
            isChannelCollapsed: T,
            voiceStates: A,
            enableConnectedUserLimit: j,
            enableActivities: P,
            isSubscriptionGated: R,
            needSubscriptionToAccess: M,
            isNewChannel: L,
            muted: w,
            resolvedUnreadSetting: D,
          } = e,
          O = (0, l.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
          k = (0, a.ZP)(n),
          G = (0, l.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)),
          U = (0, l.e7)([f.Z], () => f.Z.hasVideo(n.id)),
          B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
          H = (0, v.ZP)({ channel: n, locked: G, video: U || B, selected: y }),
          V = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
          F = (0, s.n2)(n.guild_id, n.id),
          W = (0, l.e7)([h.Z], () => {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e
                    ? void 0
                    : e.hasFeature(S.oNc.COMMUNITY)) &&
              void 0 !== t &&
              t
            );
          });
        if ((0, _.Z)(O)) return (0, i.jsx)(b.Z, { mentionsCount: O });
        if ((0, c.O)(R)) return (0, i.jsx)(c.Z, { locked: M });
        if (L)
          return (0, i.jsx)(o.TextBadge, {
            text: Z.intl.string(Z.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: N.newChannel,
          });
        if (
          !w &&
          D === E.i.ALL_MESSAGES &&
          n.isForumLikeChannel() &&
          null != V &&
          V > 0
        )
          return (0, i.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: Z.intl.format(Z.t.GkAbqa, {
              count: (0, o.getBadgeCountString)(V),
            }),
          });
        if (!w && n.isForumLikeChannel() && null != F && F > 0)
          return (0, i.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, o.getBadgeCountString)(F),
          });
        let z =
          null !== (t = null == A ? void 0 : A.length) && void 0 !== t ? t : 0;
        return null != j && j && H
          ? (0, i.jsx)(I.Z, { userCount: z, video: U || B, channel: n })
          : T && (0, g.a)(A) && W
            ? (0, i.jsx)(o.TextBadge, {
                text: Z.intl.string(Z.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css,
              })
            : null != P && P && (0, C.u)(k)
              ? (0, i.jsx)(x.Z, { embeddedApps: k, muted: w })
              : null;
      }
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(925329),
        s = n(520202);
      function c(e) {
        let { className: t, embeddedApps: n, muted: l } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: r()(s.container, t, l && s.modeMuted),
            children: (0, i.jsx)(a.Z, {
              game: n[0].application,
              className: s.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: r()(s.container, t, l && s.modeMuted),
            children: [
              (0, i.jsx)(a.Z, {
                game: n[0].application,
                className: s.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(a.Z, {
                    game: n[1].application,
                    className: s.icon20px,
                  })
                : (0, i.jsx)(o.Text, {
                    className: s.overflow,
                    variant: "text-xs/bold",
                    color: "interactive-active",
                    children: "+".concat(e),
                  }),
            ],
          });
        }
      }
    },
    373274: function (e, t, n) {
      n.d(t, {
        E: function () {
          return em;
        },
        j: function () {
          return ep;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(392711),
        a = n.n(o),
        s = n(91192),
        c = n(924826),
        u = n(442837),
        d = n(481060),
        h = n(925549),
        p = n(260300),
        m = n(410575),
        f = n(607070),
        g = n(100527),
        C = n(906732),
        _ = n(313201),
        v = n(540059),
        x = n(362658),
        I = n(583962),
        b = n(915885),
        S = n(258871),
        E = n(216306),
        Z = n(398758),
        N = n(220444),
        y = n(31022),
        T = n(10401),
        A = n(131704),
        j = n(592125),
        P = n(796974),
        R = n(984933),
        M = n(914010),
        L = n(540126),
        w = n(734307),
        D = n(854444),
        O = n(761091),
        k = n(301342),
        G = n(906817),
        U = n(429122),
        B = n(285573),
        H = n(995993),
        V = n(910595),
        F = n(466935),
        W = n(120818),
        z = n(61642),
        Y = n(848442),
        K = n(53425),
        q = n(424785),
        Q = n(770202),
        X = n(79556),
        J = n(428127),
        $ = n(950969),
        ee = n(233657),
        et = n(831700),
        en = n(443063),
        ei = n(327530),
        el = n(981631),
        er = n(176505),
        eo = n(388032),
        ea = n(607686);
      function es(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ec(e) {
        return e ? 38 : ei.Vf;
      }
      function eu(e) {
        return e ? 40 : ei.Hb;
      }
      class ed extends (i = r.PureComponent) {
        componentDidMount() {
          this.setState({ initialized: !0 });
        }
        componentWillUnmount() {
          this.updateChannelListScroll.cancel();
        }
        componentDidUpdate(e, t) {
          let {
              scrollToChannel: n,
              guildId: i,
              selectedChannelId: l,
            } = this.props,
            { initialized: r } = this.state,
            { scrollTop: o } = P.Z.getGuildDimensions(i);
          null != n
            ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != o && this.scrollTo(o)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  r &&
                  (null == o && null != l
                    ? this.scrollToChannel(l, !1, ei.yE, this.handleListScroll)
                    : this.scrollTo(null != o ? o : 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
        }
        getSectionRowsFromChannel(e) {
          return this.props.guildChannels.getSectionRowsFromChannel(e);
        }
        scrollTo(e, t) {
          var n;
          null === (n = this._list) ||
            void 0 === n ||
            n.scrollTo({ to: e, animate: !1, callback: t });
        }
        scrollToChannel(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ei.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
          if (null != r && null != l) {
            if (null != r.threadOffset) {
              let [e] = l.getScrollPosition(r.section, r.row),
                o = r.threadOffset * ec(this.props.isRefreshEnabled);
              l.scrollIntoViewRect({
                start: e + o,
                end: e + o + ec(this.props.isRefreshEnabled),
                padding: n,
                animate: t,
                callback: i,
              });
            } else
              l.scrollToIndex({
                section: r.section,
                row: r.row,
                animate: t,
                padding: n,
                callback: i,
              });
          } else null == i || i();
        }
        isUnreadVisible() {
          let { guildChannels: e } = this.props,
            t = this._list;
          return (
            null != t &&
            t.getItems().some((n) => {
              if ("row" !== n.type) return !1;
              let { section: i, row: l } = n;
              if (i < L.wd || e.isPlaceholderRow(i, l)) return !1;
              let r = e.getChannelFromSectionRow(i, l);
              if (null == r) return !1;
              let { channel: o, category: a } = r;
              return (
                !!(0, A.vc)(o.record.type) &&
                (!a.isCollapsed || !a.isMuted) &&
                !o.isMuted &&
                !!t.isItemVisible(i, l, !0) &&
                (0, N.d)(o.record)
              );
            })
          );
        }
        renderTopUnread() {
          let {
              topMention: e,
              bottomUnread: t,
              bottomMention: n,
              isUnreadVisible: i,
            } = this.state,
            {
              guildId: r,
              guildChannels: o,
              guildChannelsVersion: a,
            } = this.props;
          return (0, l.jsx)("div", {
            className: ea.positionedContainer,
            children: (0, l.jsx)($.Z, {
              ref: this.unreadTopRef,
              textUnread: eo.intl.string(eo.t.FCRiT0),
              textMention: eo.intl.string(eo.t["8zH0LC"]),
              hide: null == e && (i || null != t || null != n),
              className: ea.unreadTop,
              barClassName: ea.unreadBar,
              guildId: r,
              guildChannels: o,
              guildChannelsVersion: a,
              isVisible: this.isChannelVisible,
              onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
              onCalculate: this.handleUnreadCalculate,
            }),
          });
        }
        renderBottomUnread() {
          let {
              guildId: e,
              guildChannels: t,
              guildChannelsVersion: n,
            } = this.props,
            { bottomMention: i, isUnreadVisible: r } = this.state;
          return (0, l.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eo.intl.string(eo.t.FCRiT0),
            textMention: eo.intl.string(eo.t["8zH0LC"]),
            hide: null == i && r,
            className: ea.unreadBottom,
            barClassName: ea.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
          });
        }
        renderList() {
          let {
              guildChannels: e,
              guild: t,
              guildBanner: n,
              hasGuildSubheader: i,
              selectedGuildId: r,
            } = this.props,
            o = {};
          r === el.I_8 && (o["data-favorites"] = !0);
          let { ref: a, ...s } = this.context,
            c = 0;
          return (
            null != n
              ? (c = ei.Q0)
              : t.hasCommunityInfoSubheader() && !i && (c = ei.JD),
            (0, l.jsx)(d.FocusJumpSection, {
              children: (t) =>
                (0, l.jsx)(
                  d.List,
                  {
                    ref: this.setListRef,
                    className: ea.scroller,
                    fade: !0,
                    customTheme: !0,
                    sectionHeight: this.getSectionHeight,
                    footerHeight: this.getSectionFooterHeight,
                    rowHeight: this.getRowHeight,
                    paddingTop: c,
                    paddingBottom: ei.$k,
                    renderSection: this.renderSection,
                    renderFooter: this.renderSectionFooter,
                    renderRow: this.renderRow,
                    onScroll: this.handleListScroll,
                    onResize: this.handleResize,
                    onContentResize: this.handleResize,
                    sections: e.getSections(!0),
                    innerAriaLabel: eo.intl.string(eo.t.OGiMXF),
                    innerTag: "ul",
                    getAnchorId: this.getAnchorId,
                    ...s,
                    ...t,
                    ...o,
                  },
                  "guild-channels",
                ),
            })
          );
        }
        render() {
          let {
            guildChannels: e,
            guildChannelsVersion: t,
            showNewUnreadsBar: n,
          } = this.props;
          return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(_.FG, {
              children: (i) =>
                (0, l.jsx)(d.HeadingLevel, {
                  component: (0, l.jsx)(d.HiddenVisually, {
                    children: (0, l.jsx)(d.H, {
                      id: i,
                      children: eo.intl.string(eo.t.OGiMXF),
                    }),
                  }),
                  children: n
                    ? (0, l.jsxs)(r.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            className: ea.positionedContainer,
                            children: (0, l.jsx)(J.Z, {
                              position: "top",
                              guildChannels: e,
                              guildChannelsVersion: t,
                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                              jumpToChannel: this.jumpToChannel,
                            }),
                          }),
                          this.renderList(),
                          (0, l.jsx)(J.Z, {
                            position: "bottom",
                            guildChannels: e,
                            guildChannelsVersion: t,
                            jumpToVoiceChannels: this.jumpToVoiceChannels,
                            jumpToChannel: this.jumpToChannel,
                          }),
                        ],
                      })
                    : (0, l.jsxs)(r.Fragment, {
                        children: [
                          this.renderTopUnread(),
                          this.renderList(),
                          this.renderBottomUnread(),
                        ],
                      }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            es(this, "_list", null),
            es(this, "unreadTopRef", r.createRef()),
            es(this, "unreadBottomRef", r.createRef()),
            es(this, "state", {
              initialized: !1,
              isUnreadVisible: !0,
              topUnread: null,
              topMention: null,
              bottomUnread: null,
              bottomMention: null,
            }),
            es(this, "setListRef", (e) => {
              var t;
              let { ref: n } = this.context;
              (n.current =
                null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                void 0 !== t
                  ? t
                  : null),
                (this._list = e);
            }),
            es(this, "jumpToVoiceChannels", () => {
              var e, t, n, i;
              let { guildChannels: l, voiceStates: r } = this.props,
                o = 0,
                a =
                  null !==
                    (n =
                      null ===
                        (e = l.getCategoryFromSection(
                          l.voiceChannelsSectionNumber,
                        )) || void 0 === e
                        ? void 0
                        : e.getShownChannelIds()) && void 0 !== n
                    ? n
                    : [];
              for (let e = 0; e < a.length - 1; e++)
                if (
                  (null !== (i = r[a[e]]) && void 0 !== i ? i : []).length > 0
                ) {
                  o = e + 1;
                  break;
                }
              null === (t = this._list) ||
                void 0 === t ||
                t.scrollToIndex({
                  section: l.voiceChannelsSectionNumber,
                  row: o,
                  animate: !0,
                  padding: ei.yE,
                });
            }),
            es(this, "jumpToChannel", (e) =>
              this.scrollToChannel(e, !0, ei.Q1),
            ),
            es(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
              let [n, i] = t;
              return this.scrollToChannel(
                e,
                !0,
                null != n && null != i ? ei.Q1 : ei.yE,
              );
            }),
            es(this, "isChannelVisible", (e, t) => {
              let n = this.getSectionRowsFromChannel(e),
                i = this._list;
              if (null == i) return !1;
              for (let { row: e, section: l } of n) {
                let [n, r] = i.getScrollPosition(l, e),
                  o = i.getScrollerState();
                if (t && n + r < o.scrollTop + o.offsetHeight) return !0;
                if (!t && n > o.scrollTop) return !0;
              }
              return !1;
            }),
            es(this, "getVisibleChannels", () => {
              let e = this._list;
              if (null == e) return [];
              let t = e.getItems(),
                n = e.getScrollerState(),
                i = [];
              for (var l = 0; l < t.length; l++) {
                let r = t[l];
                if (
                  (0, d.isListItemRow)(r) &&
                  r.section >= this.props.guildChannels.favoritesSectionNumber
                ) {
                  let t = this.props.guildChannels.getChannelFromSectionRow(
                      r.section,
                      r.row,
                    ),
                    [l, o] = e.getScrollPosition(r.section, r.row);
                  null != t &&
                    l + o < n.scrollTop + n.offsetHeight &&
                    l > n.scrollTop &&
                    i.push(t.channel.id);
                }
              }
              return i;
            }),
            es(this, "handleResize", () => {
              var e, t;
              let { showNewUnreadsBar: n } = this.props,
                i =
                  null !==
                    (t =
                      null === (e = this._list) || void 0 === e
                        ? void 0
                        : e.getScrollerState()) && void 0 !== t
                    ? t
                    : null;
              if (
                (this.setState({ isUnreadVisible: this.isUnreadVisible() }),
                n && null != i)
              ) {
                let { scrollTop: e } = i;
                this.updateChannelListScroll(e);
              }
            }),
            es(this, "handleListScroll", () => {
              var e, t;
              let { onScroll: n } = this.props,
                i =
                  null !==
                    (t =
                      null === (e = this._list) || void 0 === e
                        ? void 0
                        : e.getScrollerState()) && void 0 !== t
                    ? t
                    : null;
              if (null != i) {
                let { scrollTop: e } = i;
                null != n && n(i), this.updateChannelListScroll(e);
              }
              null != this.unreadTopRef.current &&
                this.unreadTopRef.current.calculateState(),
                null != this.unreadBottomRef.current &&
                  this.unreadBottomRef.current.calculateState();
            }),
            es(this, "handleUnreadCalculate", (e, t, n) => {
              let i = this.isUnreadVisible();
              n
                ? this.setState({
                    isUnreadVisible: i,
                    bottomUnread: t,
                    bottomMention: e,
                  })
                : this.setState({
                    isUnreadVisible: i,
                    topUnread: t,
                    topMention: e,
                  });
            }),
            es(
              this,
              "updateChannelListScroll",
              a().throttle((e) => {
                h.Z.updateChannelListScroll(
                  this.props.guildId,
                  e,
                  this.getVisibleChannels(),
                );
              }, 100),
            ),
            es(this, "getSectionHeight", (e) => {
              let { guild: t, guildChannels: n } = this.props;
              return (0, G.EM)(e, t, n);
            }),
            es(this, "getSectionFooterHeight", (e) => {
              let {
                guildChannels: t,
                voiceStates: n,
                selectedVoiceChannelId: i,
                selectedChannelId: l,
                optInEnabled: r,
                guildChannelsVersion: o,
              } = this.props;
              return (0, U.dt)({
                sectionIndex: e,
                guildChannels: t,
                guildChannelsVersion: o,
                voiceStates: n,
                selectedChannelId: l,
                selectedVoiceChannelId: i,
                optInEnabled: r,
                visualRefreshEnabled: this.props.isRefreshEnabled,
              });
            }),
            es(this, "getRowHeight", (e, t) => {
              let {
                  guildChannels: n,
                  voiceStates: i,
                  stageChannelSpeakerVoiceStates: l,
                  selectedVoiceChannelId: r,
                  selectedGuildId: o,
                } = this.props,
                a = ec(this.props.isRefreshEnabled);
              if (e === L.wZ) {
                let e = n.getGuildActionSection();
                return e.isEmpty()
                  ? 0
                  : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR
                    ? e.getRows().length > 1
                      ? I.aR
                      : I.PD
                    : a;
              }
              if (n.isPlaceholderRow(e, t)) return 0;
              let s = n.getChannelFromSectionRow(e, t);
              if (null == s) return 0;
              let { channel: c, category: u } = s;
              if (c.record.type === el.d4z.GUILD_CATEGORY) return 40;
              let { isFavoritesPerk: d } = x.Z.getCurrentConfig(
                { location: "channel_list" },
                { autoTrackExposure: !0 },
              );
              if (
                d &&
                o === el.I_8 &&
                !c.record.isDM() &&
                !c.record.isGroupDM() &&
                !c.record.isGuildStageVoice()
              )
                a = this.props.isRefreshEnabled ? 46 : ei.GQ;
              for (let e of c.threadIds) {
                a += ec(this.props.isRefreshEnabled);
                let t = i[c.id];
                null != t &&
                  t.length > 0 &&
                  (a +=
                    (r === e
                      ? t.length * eu(this.props.isRefreshEnabled)
                      : eu(this.props.isRefreshEnabled)) + ei.cx);
              }
              if (c.record.isGuildVoice()) {
                let e = i[c.id];
                if (null != e && e.length > 0) {
                  let t = e.length * eu(this.props.isRefreshEnabled);
                  (c.isCollapsed || u.isCollapsed) &&
                    (t = eu(this.props.isRefreshEnabled)),
                    (a += t + ei.cx);
                }
                c.id === this.props.rtcConnectedChannelId &&
                  (a +=
                    this.props.rtcDesyncedVoiceStatesCount *
                    eu(this.props.isRefreshEnabled));
              }
              if (
                (null != c.subtitle && (a += ei.NY),
                c.record.isGuildStageVoice())
              ) {
                var h, p;
                let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                  t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                if (null != e && e.length > 0) {
                  let e = t.length * eu(this.props.isRefreshEnabled);
                  c.isCollapsed || u.isCollapsed
                    ? (e = Math.ceil(e / ei.VE))
                    : (e += eu(this.props.isRefreshEnabled)),
                    (a += e + ei.cx);
                }
              }
              return a;
            }),
            es(this, "dismissRecents", () => {
              let {
                  guild: e,
                  guildChannels: t,
                  selectedChannelId: n,
                } = this.props,
                i = t.getCategoryFromSection(t.recentsSectionNumber);
              if (null == i) return;
              let l = null,
                r = i.getShownChannelAndThreadIds();
              null != n && r.includes(n) && (l = (0, E.KY)(t)),
                (0, E.Uo)(e.id, r, l);
            }),
            es(this, "renderSection", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  guild: r,
                  selectedChannelId: o,
                  disableManageChannels: a,
                } = this.props;
              return (0, l.jsx)(
                G.ZP,
                {
                  sectionIndex: t,
                  guild: r,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  selectedChannelId: o,
                  disableManageChannels: a,
                },
                (0, G.WW)(t, n),
              );
            }),
            es(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                {
                  guild: i,
                  selectedChannel: o,
                  selectedChannelId: a,
                  selectedVoiceChannel: s,
                  selectedVoiceChannelId: c,
                  guildChannels: u,
                  voiceStates: d,
                  disableManageChannels: h,
                  stageChannelSpeakerVoiceStates: p,
                  optInEnabled: m,
                  withGuildIcon: f,
                } = this.props;
              if (t === L.wZ) {
                let e = u.getGuildActionSection(),
                  t = e.getRow(n);
                if (null == t) return null;
                switch (t) {
                  case en.z.GUILD_HUB_HEADER_OPTIONS:
                    return (0, l.jsx)(
                      S.Z,
                      { guild: i, channel: R.ZP.getDefaultChannel(i.id) },
                      en.z.GUILD_HUB_HEADER_OPTIONS,
                    );
                  case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                    let r = e.getRows();
                    return (0, l.jsx)(
                      I.ZP,
                      { guild: i, withMargin: r.length > 1 },
                      en.z.GUILD_PREMIUM_PROGRESS_BAR,
                    );
                  case en.z.GUILD_HOME:
                    return (0, l.jsx)(
                      V.Z,
                      { guild: i, selected: a === er.oC.GUILD_HOME },
                      en.z.GUILD_HOME,
                    );
                  case en.z.GUILD_SCHEDULED_EVENTS:
                    return (0, l.jsx)(
                      ee.Z,
                      { guild: i, selected: a === en.z.GUILD_SCHEDULED_EVENTS },
                      en.z.GUILD_SCHEDULED_EVENTS,
                    );
                  case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, l.jsx)(
                      z.Z,
                      { guild: i, selected: a === er.oC.ROLE_SUBSCRIPTIONS },
                      en.z.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                  case en.z.GUILD_SHOP:
                    return (0, l.jsx)(
                      Y.Z,
                      { guild: i, selected: a === er.oC.GUILD_SHOP },
                      en.z.GUILD_SHOP,
                    );
                  case en.z.GUILD_MEMBER_APPLICATIONS:
                    return (0, l.jsx)(
                      F.Z,
                      { guild: i, selected: a === er.oC.MEMBER_APPLICATIONS },
                      en.z.GUILD_MEMBER_APPLICATIONS,
                    );
                  case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, l.jsx)(W.T, { guild: i });
                  case en.z.CHANNELS_AND_ROLES:
                    return (0, l.jsx)(
                      H.m,
                      {
                        guild: i,
                        selected:
                          a === er.oC.CHANNEL_BROWSER ||
                          a === er.oC.CUSTOMIZE_COMMUNITY,
                      },
                      en.z.CHANNELS_AND_ROLES,
                    );
                  case en.z.GUILD_DIRECTORY:
                    return (0, l.jsx)(
                      B.Z,
                      {
                        guild: i,
                        selectedChannelId: a,
                        disableManageChannels: h,
                      },
                      en.z.GUILD_DIRECTORY,
                    );
                  case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, l.jsx)(
                      b.Z,
                      { guild: i, selected: a === er.oC.MEMBER_SAFETY },
                      en.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                  default:
                    return null;
                }
              }
              if (u.isPlaceholderRow(t, n)) return null;
              let g = u.getChannelFromSectionRow(t, n);
              if (null == g) return null;
              let { category: C, channel: _ } = g,
                v = C instanceof L.VR,
                x = _.record,
                E = "".concat(t).concat(_.id);
              switch (x.type) {
                case el.d4z.GUILD_ANNOUNCEMENT:
                case el.d4z.GUILD_TEXT:
                case el.d4z.GUILD_FORUM:
                case el.d4z.GUILD_MEDIA:
                case el.d4z.DM:
                case el.d4z.GROUP_DM:
                  return (0, l.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        (0, l.jsx)(X.Z, {
                          channel: x,
                          guild: i,
                          position: _.position,
                          selected: a === _.id,
                          muted: _.isMuted,
                          subtitle: _.subtitle,
                          disableManageChannels: h,
                          canBeNewChannel: m && t === u.recentsSectionNumber,
                          isFavoriteCategory: v,
                          withGuildIcon: f,
                        }),
                        _.threadCount > 0
                          ? (0, l.jsx)(K.Z, {
                              withGuildIcon: f,
                              channel: x,
                              sortedThreadIds: _.threadIds,
                              selectedChannel:
                                null != o &&
                                (o.id === _.id || o.parent_id === x.id)
                                  ? o
                                  : null,
                              selectedVoiceChannelId:
                                (null == s ? void 0 : s.parent_id) === x.id
                                  ? c
                                  : null,
                            })
                          : null,
                      ],
                    },
                    E,
                  );
                case el.d4z.GUILD_STAGE_VOICE:
                  var Z, N;
                  return (0, l.jsx)(
                    q.Z,
                    {
                      channel: x,
                      guild: i,
                      position: _.position,
                      selected: a === _.id,
                      connected: c === _.id,
                      collapsed: _.isCollapsed || C.isCollapsed,
                      voiceStates:
                        null !== (Z = d[_.id]) && void 0 !== Z ? Z : [],
                      speakerVoiceStates:
                        null !== (N = p[_.id]) && void 0 !== N ? N : [],
                      disableManageChannels: h,
                      isFavoriteCategory: v,
                    },
                    E,
                  );
                case el.d4z.GUILD_VOICE:
                  return (0, l.jsx)(
                    et.Z,
                    {
                      channel: x,
                      guild: i,
                      position: _.position,
                      selected: a === _.id,
                      connected: c === _.id,
                      collapsed: _.isCollapsed || C.isCollapsed,
                      voiceStates: d[_.id],
                      subtitle: _.subtitle,
                      disableManageChannels: h,
                      showTutorial: _.isFirstVoiceChannel,
                      isFavoriteCategory: v,
                      withGuildIcon: f,
                    },
                    E,
                  );
                case el.d4z.GUILD_STORE:
                  return (0, l.jsx)(
                    Q.Z,
                    {
                      channel: x,
                      guild: i,
                      position: _.position,
                      selected: a === _.id,
                    },
                    E,
                  );
                case el.d4z.GUILD_CATEGORY:
                  if (t !== u.voiceChannelsSectionNumber) return null;
                  return (0, l.jsx)(
                    k.kw,
                    { channel: x },
                    "readonly-".concat(x.id),
                  );
                case el.d4z.PUBLIC_THREAD:
                case el.d4z.PRIVATE_THREAD:
                  return (0, l.jsx)(
                    X.Z,
                    {
                      channel: x,
                      guild: i,
                      position: _.position,
                      selected: a === _.id,
                      muted: _.isMuted,
                      subtitle: _.subtitle,
                      disableManageChannels: h,
                      canBeNewChannel: !1,
                      isFavoriteCategory: !1,
                      forceTopLevelThread: !0,
                    },
                    E,
                  );
                default:
                  return null;
              }
            }),
            es(this, "renderSectionFooter", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  voiceStates: r,
                  selectedChannelId: o,
                  selectedVoiceChannelId: a,
                  optInEnabled: s,
                  guildId: c,
                } = this.props;
              return (0, l.jsx)(
                U.ZP,
                {
                  guildId: c,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  sectionIndex: t,
                  voiceStates: r,
                  selectedChannelId: o,
                  selectedVoiceChannelId: a,
                  optInEnabled: s,
                },
                (0, U.eo)(t, n, s),
              );
            }),
            es(this, "getAnchorId", (e, t) => {
              var n, i, l;
              let { guildChannels: r } = this.props;
              if (e !== L.wZ) {
                if (null == t)
                  return e === L.p2
                    ? "favorites-header"
                    : e === r.recentsSectionNumber
                      ? "recents-header"
                      : e === r.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === L.wd
                          ? "uncategorized-header"
                          : null === (l = r.getNamedCategoryFromSection(e)) ||
                              void 0 === l
                            ? void 0
                            : l.id;
                if (!r.isPlaceholderRow(e, t))
                  return null === (i = r.getChannelFromSectionRow(e, t)) ||
                    void 0 === i
                    ? void 0
                    : null === (n = i.channel) || void 0 === n
                      ? void 0
                      : n.id;
              }
            }),
            es(this, "testShouldSkipTutorial", () => {
              if (!T.Z.shouldShow("voice-conversations")) return;
              let { guildChannels: e } = this.props,
                t = e.getFirstVoiceChannel();
              if (null == t) {
                p.Z.dismiss("voice-conversations");
                return;
              }
              let n = this._list;
              if (null != n)
                for (let {
                  section: e,
                  row: i,
                } of this.getSectionRowsFromChannel(t.id))
                  !n.isItemVisible(e, i) && p.Z.dismiss("voice-conversations");
            });
        }
      }
      es(ed, "contextType", s.qB);
      let eh = (e) => {
        let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
          o = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          { analyticsLocations: a } = (0, C.ZP)(g.Z.GUILD_CHANNEL_LIST),
          d = (0, u.e7)([j.Z], () => j.Z.getChannel(n)),
          h = (0, u.e7)([j.Z], () => j.Z.getChannel(i)),
          p = (0, u.e7)([M.Z], () => M.Z.getGuildId()),
          _ = (0, Z.DM)(t),
          x = r.useRef(null),
          I = r.useCallback((e, t) => {
            let n = x.current;
            if (null != n) {
              if (el.Xyh.test(t) || (0, er.AB)(t))
                n.scrollToChannel(t, !1, 2 * ei.yE, () => {
                  requestAnimationFrame(() => {
                    var t;
                    return null === (t = document.querySelector(e)) ||
                      void 0 === t
                      ? void 0
                      : t.focus();
                  });
                });
              else {
                var i;
                null === (i = document.querySelector(e)) ||
                  void 0 === i ||
                  i.focus();
              }
            }
          }, []),
          b = r.useCallback(
            () =>
              new Promise((e) => {
                let t = x.current;
                if (null == t) return e();
                t.scrollTo(0, () => requestAnimationFrame(() => e()));
              }),
            [],
          ),
          S = r.useCallback(
            () =>
              new Promise((e) => {
                let t = x.current;
                if (null == t) return e();
                t.scrollTo(Number.MAX_SAFE_INTEGER, () =>
                  requestAnimationFrame(() => e()),
                );
              }),
            [],
          ),
          E = (0, c.ZP)({
            id: "channels",
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: I,
            scrollToStart: b,
            scrollToEnd: S,
          }),
          N = E.setFocus;
        r.useEffect(() => {
          null != n && N(n);
        }, [n, N]);
        let T = (0, y.Z)(t),
          A = (0, v.Q)("NavigableChannels");
        return (0, l.jsx)(C.Gt, {
          value: a,
          children: (0, l.jsx)(m.Z, {
            section: el.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
              navigator: E,
              children: (0, l.jsx)(ed, {
                ...e,
                listNavigator: E,
                ref: x,
                selectedChannel: d,
                selectedVoiceChannel: h,
                stageChannelSpeakerVoiceStates: T,
                selectedGuildId: p,
                optInEnabled: _,
                isRefreshEnabled: A,
              }),
            }),
          }),
        });
      };
      function ep(e) {
        let t = (0, D.o)(),
          { isFavoritesPerk: n } = (0, x.z)("favorites-channel-list");
        return (0, l.jsx)(eh, {
          ...e,
          guildChannels: t,
          guildChannelsVersion: 0,
          withGuildIcon: n,
        });
      }
      function em(e) {
        let t = (0, O.Z)(e.guild),
          n = (0, u.cj)([w.Z], () =>
            w.Z.getGuild(e.guildId, { guildActionRows: t }),
          );
        return (0, l.jsx)(eh, { ...e, ...n });
      }
    },
    327530: function (e, t, n) {
      n.d(t, {
        $k: function () {
          return a;
        },
        GQ: function () {
          return c;
        },
        Hb: function () {
          return d;
        },
        JD: function () {
          return m;
        },
        MF: function () {
          return g;
        },
        NY: function () {
          return u;
        },
        Pw: function () {
          return r;
        },
        Q0: function () {
          return p;
        },
        Q1: function () {
          return l;
        },
        QP: function () {
          return o;
        },
        VE: function () {
          return f;
        },
        Vf: function () {
          return s;
        },
        cx: function () {
          return h;
        },
        yE: function () {
          return i;
        },
      });
      let i = 8,
        l = 32,
        r = 40,
        o = 12,
        a = 12,
        s = 34,
        c = 41.5,
        u = 16,
        d = 32,
        h = 8,
        p = 84,
        m = 16,
        f = 5,
        g = {
          origin: { x: -36, y: 7 },
          targetWidth: 232,
          targetHeight: 40,
          offset: { x: 0, y: 0 },
        };
    },
    906817: function (e, t, n) {
      n.d(t, {
        EM: function () {
          return f;
        },
        WW: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(997638),
        o = n(362658),
        a = n(216306),
        s = n(155409),
        c = n(540126),
        u = n(301342),
        d = n(327530),
        h = n(981631),
        p = n(388032),
        m = n(607686);
      function f(e, t, n) {
        if (e === c.wZ) return d.$k;
        if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
        if (e === n.voiceChannelsSectionNumber) {
          var i;
          let t = n.getCategoryFromSection(e);
          if (null == t || t.isEmpty()) return 0;
          if (t.isCollapsed) return d.Pw + d.QP;
          let l =
            null === (i = n.getChannelFromSectionRow(e, 0)) || void 0 === i
              ? void 0
              : i.channel;
          return null == l || l.record.type === h.d4z.GUILD_CATEGORY
            ? d.QP
            : 16 + d.QP;
        }
        return d.Pw;
      }
      function g(e, t) {
        switch (e) {
          case c.wZ:
            return "hoisted-spacer";
          case c.wd:
            return "uncategorized-spacer";
          case c.p2:
            return "favorites";
          case t.recentsSectionNumber:
            return "recents-header";
          case t.voiceChannelsSectionNumber:
            return "voice-channels-header";
          default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return "category-".concat(n.id);
            return "section-".concat(e);
          }
        }
      }
      t.ZP = l.memo(function (e) {
        let {
            sectionIndex: t,
            guild: n,
            guildChannels: f,
            guildChannelsVersion: g,
            selectedChannelId: C,
            disableManageChannels: _,
          } = e,
          { isFavoritesPerk: v } = (0, o.z)("ChannelListSection"),
          x = l.useCallback(() => {
            let e = f.getCategoryFromSection(f.recentsSectionNumber);
            if (null == e) return;
            let t = null,
              i = e.getShownChannelAndThreadIds();
            null != C && i.includes(C) && (t = (0, a.KY)(f)),
              (0, a.Uo)(n.id, i, t);
          }, [n.id, C, f, g]);
        switch (t) {
          case c.wZ:
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.p2:
            return (0, i.jsx)(u.P, {
              name: v ? p.intl.string(p.t.mlPMCw) : p.intl.string(p.t.k8fFjo),
            });
          case f.recentsSectionNumber:
            return (0, i.jsx)(u.P, {
              name: p.intl.string(p.t.gKcrqK),
              onDismiss: x,
            });
          case f.voiceChannelsSectionNumber: {
            var I;
            let e = f.getCategoryFromSection(f.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n =
              null === (I = f.getChannelFromSectionRow(t, 0)) || void 0 === I
                ? void 0
                : I.channel;
            return (0, i.jsxs)(l.Fragment, {
              children: [
                (0, i.jsx)("div", { className: m.sectionDivider }),
                (0, i.jsx)(u.rj, { category: e, channel: n }),
              ],
            });
          }
          case c.wF: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
              channel: e.record,
              position: e.position,
              disableManageChannels: _,
              children: (0, i.jsx)(s.Z, {
                inlineSpecs: d.MF,
                arrowAlignment: r.cy.TOP,
                tutorialId: "organize-by-topic",
                position: "right",
              }),
            });
          }
          default: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
              channel: e.record,
              position: e.position,
              disableManageChannels: _,
            });
          }
        }
      });
    },
    429122: function (e, t, n) {
      n.d(t, {
        dt: function () {
          return p;
        },
        eo: function () {
          return m;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(884338),
        o = n(934415),
        a = n(540126),
        s = n(700026),
        c = n(301342),
        u = n(327530),
        d = n(607686);
      let h = l.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
          r = l.useMemo(
            () => t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            [t, n],
          );
        return null == r ? null : (0, i.jsx)(c.Qo, { category: r });
      });
      function p(e) {
        let {
          sectionIndex: t,
          guildChannels: n,
          voiceStates: i,
          selectedChannelId: l,
          selectedVoiceChannelId: r,
          optInEnabled: o,
          visualRefreshEnabled: c,
        } = e;
        if (t === n.voiceChannelsSectionNumber) return 44;
        let { hasDivider: d, canHaveVoiceSummary: h } = (0, s.ie)(n, o, t),
          p = d ? u.QP : 0;
        if (!h || t === a.wZ) return p;
        let m = n.getNamedCategoryFromSection(t);
        return null == m
          ? p
          : (0, s.V5)({
                category: m,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i,
              })
            ? (c ? 38 : u.Vf) + p
            : p;
      }
      function m(e, t, n) {
        if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
        let { hasDivider: i, canHaveVoiceSummary: l } = (0, s.ie)(t, n, e);
        return "section-footer-"
          .concat(e)
          .concat(i ? "-divider" : "")
          .concat(l ? "-voice-summary" : "");
      }
      t.ZP = l.memo(function (e) {
        let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: c,
            voiceStates: u,
            guildId: p,
            selectedChannelId: m,
            selectedVoiceChannelId: f,
            optInEnabled: g,
          } = e,
          { hasDivider: C, canHaveVoiceSummary: _ } = l.useMemo(
            () => (0, s.ie)(n, g, t),
            [n, g, t, c],
          ),
          v = l.useMemo(
            () => (t === a.wZ ? null : n.getCategoryFromSection(t)),
            [n, t, c],
          ),
          x = l.useMemo(
            () =>
              null != v && v.isCollapsed
                ? (0, o.c4)({
                    channels: v.getChannelRecords(),
                    selectedChannelId: m,
                    selectedVoiceChannelId: f,
                    voiceStates: u,
                  })
                : [],
            [v, m, f, u],
          );
        if (t === n.voiceChannelsSectionNumber)
          return (0, i.jsx)(h, { guildChannels: n, guildChannelsVersion: c });
        let I = C ? (0, i.jsx)("div", { className: d.sectionDivider }) : null;
        return _ && 0 !== x.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: d.voiceUserSummary,
                  children: (0, i.jsx)(r.Z, {
                    renderIcon: !0,
                    users: x,
                    max: 8,
                    showUserPopout: !0,
                    guildId: p,
                  }),
                }),
                I,
              ],
            })
          : I;
      });
    },
    561788: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(471445),
        a = n(430824),
        s = n(264365);
      function c(e) {
        let { channel: t } = e,
          n = (0, l.e7)([a.Z], () => a.Z.getGuild(t.guild_id)),
          c = (0, o.KS)(t, n);
        return null == c
          ? null
          : (0, i.jsxs)("div", {
              className: s.popoutHeader,
              children: [
                (0, i.jsx)(c, { className: s.channelIcon }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-normal",
                  className: s.channelName,
                  children: t.name,
                }),
              ],
            });
      }
    },
    135724: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(829750),
        r = n(280102);
      function o(e) {
        let { channel: t, video: n, userCount: o } = e,
          { limit: a } = (0, l.Z)(t),
          s = -1,
          c = !1;
        return (
          t.userLimit > 0 && (s = t.userLimit),
          n &&
            a > 0 &&
            ((c = s < 0 || a < s), (s = s > 0 ? Math.min(s, a) : a)),
          (0, i.jsx)(r.Z, { users: o, total: s, videoLimit: c })
        );
      }
    },
    285573: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(239091),
        c = n(146773),
        u = n(592125),
        d = n(984933),
        h = n(496675),
        p = n(98597),
        m = n(473403),
        f = n(981631),
        g = n(490897),
        C = n(831746);
      let _ = (0, c.B)(function (e) {
        let {
            guild: t,
            selectedChannelId: r,
            position: c,
            disableManageChannels: _,
            sorting: v,
            sortingType: x,
            sortingPosition: I,
            connectChannelDragSource: b,
            connectChannelDropTarget: S,
            tabIndex: E,
          } = e,
          Z = (0, a.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
          }),
          N = (0, a.e7)([u.Z], () =>
            u.Z.getChannel(null == Z ? void 0 : Z.parent_id),
          ),
          y = r === (null == Z ? void 0 : Z.id),
          T = (0, a.e7)([h.Z], () =>
            null != N
              ? h.Z.can(f.Plq.MANAGE_CHANNELS, N)
              : null != t && h.Z.can(f.Plq.MANAGE_CHANNELS, t),
          ),
          A = l.useCallback(
            (e) => {
              null != Z &&
                (0, s.jW)(e, async () => {
                  let { default: e } = await n
                    .e("70623")
                    .then(n.bind(n, 99334));
                  return (t) => (0, i.jsx)(e, { ...t, channel: Z });
                });
            },
            [Z],
          );
        if (null == Z) return null;
        let j = (0, p.jo)(c, I),
          P = (0, p.CN)(Z, v, x),
          R = (0, i.jsx)("div", {
            className: o()(j, { [C.disabled]: P, [C.selected]: y }),
            "data-dnd-name": Z.name,
            children: (0, i.jsxs)(m.Z, {
              className: C.iconVisibility,
              channel: Z,
              guild: t,
              selected: y,
              onContextMenu: A,
              forceInteractable: !0,
              resolvedUnreadSetting: g.i.ONLY_MENTIONS,
              children: [
                (0, i.jsx)(p.eP, { channel: Z, tabIndex: E }),
                (0, i.jsx)(p.hR, {
                  channel: Z,
                  disableManageChannels: _,
                  tabIndex: E,
                }),
              ],
            }),
          });
        return T && (R = S(b(R))), R;
      });
      t.Z = _;
    },
    995993: function (e, t, n) {
      n.d(t, {
        m: function () {
          return E;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(399606),
        o = n(704215),
        a = n(692547),
        s = n(481060),
        c = n(239091),
        u = n(605236),
        d = n(45966),
        h = n(31445),
        p = n(22082),
        m = n(703656),
        f = n(306680),
        g = n(709054),
        C = n(540126),
        _ = n(434479),
        v = n(981631),
        x = n(176505),
        I = n(490897),
        b = n(388032),
        S = n(518360);
      function E(e) {
        let { guild: t, selected: E } = e,
          Z = (0, h.Z)(t),
          N = (0, u.wE)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
          y = (0, r.Wu)([p.Z], () =>
            Array.from(p.Z.getNewChannelIds(t.id)).filter((e) =>
              p.Z.shouldIndicateNewChannel(t.id, e),
            ),
          ),
          T = (0, r.e7)([f.ZP], () =>
            f.ZP.hasUnread(t.id, I.W.GUILD_ONBOARDING_QUESTION),
          ),
          A = y.length > C.Cb,
          j = (0, r.e7)([d.Z, f.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
              n = f.ZP.lastMessageId(t.id, I.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
          }),
          P = l.useCallback(() => {
            (0, m.uL)(
              v.Z5c.CHANNEL(
                t.id,
                Z ? x.oC.CUSTOMIZE_COMMUNITY : x.oC.CHANNEL_BROWSER,
              ),
            );
          }, [t.id, Z]),
          R = l.useCallback(
            (e) => {
              (0, c.jW)(e, async () => {
                let { default: e } = await n.e("8926").then(n.bind(n, 156673));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
              });
            },
            [t],
          ),
          M = null;
        return (
          (!N || T || A) &&
            !E &&
            !j &&
            (M = (0, i.jsx)(s.TextBadge, {
              color: a.Z.colors.BADGE_BRAND_BG.css,
              text: b.intl.string(b.t.y2b7CA),
              className: S.newChannel,
            })),
          (0, i.jsx)(_.m, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: Z ? b.intl.string(b.t.h9mGOD) : b.intl.string(b.t.et6wam),
            selected: E,
            onClick: P,
            onContextMenu: R,
            trailing: M,
          })
        );
      }
    },
    315174: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(752877),
        s = n(873546),
        c = n(481060),
        u = n(666188),
        d = n(695346),
        h = n(768581),
        p = n(358555),
        m = n(981631),
        f = n(647086),
        g = n(388032),
        C = n(215887);
      function _(e) {
        var t;
        let { guild: n, controller: l, guildBanner: r, animate: c } = e,
          { value: u } = l.springs,
          p = d.QK.getSetting();
        return (0, i.jsx)(a.animated.div, {
          className: C.animatedContainer,
          style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
          },
          children: (0, i.jsx)(a.animated.div, {
            className: o()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: {
              transform: u.to((e) =>
                p
                  ? "translateY("
                      .concat((1 - e) * 60, "px) scale(")
                      .concat(1 + (1 - e) * 0.2, ")")
                  : "translateY(".concat((1 - e) * 90, "px)"),
              ),
            },
            children: (0, i.jsx)("img", {
              className: o()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
              src:
                null !==
                  (t = h.ZP.getGuildBannerURL({ id: n.id, banner: r }, c)) &&
                void 0 !== t
                  ? t
                  : "",
              alt: "",
              "aria-hidden": !0,
            }),
          }),
        });
      }
      function v(e) {
        let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
          { value: s } = n.springs,
          u = t.hasFeature(m.oNc.DISCOVERABLE),
          d = (0, i.jsx)("div", {
            className: C.communityInfo,
            children:
              u &&
              (0, i.jsx)(c.Tooltip, {
                text: g.intl.string(g.t.O8lDIy),
                position: "right",
                children: (e) =>
                  (0, i.jsxs)("div", {
                    className: C.communityInfoPill,
                    ...e,
                    children: [
                      (0, i.jsx)(c.GlobeEarthIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 12,
                        height: 12,
                        className: C.communityIcon,
                      }),
                      (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "none",
                        children: g.intl.string(g.t["B/vjCg"]),
                      }),
                    ],
                  }),
              }),
          });
        return r
          ? (0, i.jsx)("div", {
              className: o()(C.communityInfoContainer, C.hasSubheader),
              children: d,
            })
          : (0, i.jsx)(a.animated.div, {
              className: C.communityInfoContainer,
              style: l
                ? { opacity: s }
                : { height: s.to((e) => "".concat(20 * e, "px")) },
              children: d,
            });
      }
      function x() {
        return (0, i.jsx)(c.StarIcon, {
          size: "custom",
          color: "currentColor",
          className: C.favoritesIcon,
          height: 20,
          width: 20,
        });
      }
      t.ZP = l.memo(function (e) {
        let {
            bannerVisible: t,
            controller: n,
            className: r,
            onClick: a,
            onContextMenu: I,
            onMouseDown: b,
            disableBannerAnimation: S,
            "aria-expanded": E,
            "aria-controls": Z,
            guild: N,
            guildBanner: y,
            animationOverlayHeight: T,
            children: A,
            headerClassName: j,
            communityInfoVisible: P,
            hasSubheader: R,
          } = e,
          M = N.hasFeature(m.oNc.ANIMATED_BANNER),
          L = (0, u.Z)(N),
          w = !L && N.hasCommunityInfoSubheader(),
          D = !L && P,
          O = (0, h.xR)(y) && M && !S,
          [k, G] = l.useState(!1),
          U = l.useRef(),
          B = l.useRef(null),
          H = l.useRef(),
          V = d.QK.getSetting();
        l.useEffect(() => {
          if (O && t && !U.current && V)
            return (
              G(!0),
              (H.current = setTimeout(() => {
                G(!1);
              }, 5e3)),
              () => {
                clearTimeout(H.current);
              }
            );
        }, [O, t, V]),
          l.useEffect(() => {
            U.current = t;
          }, [t]);
        let F = () => {
          let { renderBanner: t, guildBanner: n } = e;
          return null != n && !t;
        };
        return (0, i.jsx)(c.ThemeProvider, {
          theme: t ? m.BRd.DARK : void 0,
          children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  ref: B,
                  className: o()(r, {
                    [C.container]: !0,
                    [C.clickable]: null != a,
                    [C.selected]: null != a && E,
                    [C.hasBanner]: F(),
                    [C.bannerVisible]: t,
                    [e]: t,
                    [C.communityInfoVisible]: D || (R && w),
                  }),
                  onMouseDown: b,
                  onContextMenu: I,
                  onClick: a,
                  children: [
                    (0, i.jsxs)("header", {
                      className: o()(C.header, j, {
                        [C.themedHeaderMobile]: s.tq,
                      }),
                      children: [
                        (0, i.jsxs)("div", {
                          className: o()(C.headerContent, C.primaryInfo),
                          children: [
                            (0, i.jsx)(p.Z, { guild: N, isBannerVisible: t }),
                            N.id === f._ && (0, i.jsx)(x, {}),
                            (0, i.jsx)(c.Heading, {
                              variant: "text-md/semibold",
                              lineClamp: 1,
                              className: C.name,
                              children: N.toString(),
                            }),
                            null != a &&
                              (0, i.jsx)(c.Clickable, {
                                className: C.headerButton,
                                "aria-controls": Z,
                                "aria-expanded": E,
                                focusProps: { ringTarget: B, offset: 4 },
                                onClick: a,
                                onContextMenu: I,
                                "aria-label": g.intl.formatToPlainString(
                                  g.t.xMXpl5,
                                  {
                                    guildName:
                                      null !==
                                        (l =
                                          null == N ? void 0 : N.toString()) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                  },
                                ),
                              }),
                            (0, i.jsx)("div", {
                              className: C.headerChildren,
                              children: A,
                            }),
                          ],
                        }),
                        w &&
                          (0, i.jsx)(v, {
                            guild: N,
                            controller: n,
                            hasBanner: null != y,
                            hasSubheader: null != R && R,
                          }),
                      ],
                    }),
                    null != y
                      ? (0, i.jsx)(_, {
                          guild: N,
                          controller: n,
                          guildBanner: y,
                          animate: k,
                        })
                      : null,
                  ],
                }),
                O && F()
                  ? (0, i.jsx)("div", {
                      className: C.animatedBannerHoverLayer,
                      onMouseEnter: () => {
                        G(!0), clearTimeout(H.current);
                      },
                      onMouseLeave: () => G(!1),
                      style: { height: T },
                    })
                  : null,
              ],
            });
          },
        });
      });
    },
    910595: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(703656),
        o = n(434479),
        a = n(981631),
        s = n(176505),
        c = n(388032);
      function u(e) {
        let { guild: t, selected: n } = e;
        return (0, i.jsx)(o.m, {
          id: "home-tab-".concat(t.id),
          renderIcon: (e) =>
            (0, i.jsx)(l.SignPostIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          text: c.intl.string(c.t.VbpLyc),
          selected: n,
          onClick: function () {
            (0, r.uL)(a.Z5c.CHANNEL(t.id, s.oC.GUILD_HOME));
          },
        });
      }
    },
    466935: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(970606),
        s = n(693546),
        c = n(826581),
        u = n(246364),
        d = n(98493),
        h = n(703656),
        p = n(496675),
        m = n(785195),
        f = n(434479),
        g = n(981631),
        C = n(176505),
        _ = n(388032);
      function v(e) {
        let { guild: t, selected: n } = e,
          v = (0, r.e7)([p.Z], () => p.Z.can(g.Plq.KICK_MEMBERS, t)),
          x = (0, r.e7)([c.Z], () =>
            c.Z.getSubmittedGuildJoinRequestTotal(t.id),
          ),
          I = v && null != x ? x : 0;
        return (
          l.useEffect(() => {
            v &&
              s.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: u.wB.SUBMITTED,
                limit: d.p,
              });
          }, [v, t.id]),
          (0, i.jsx)(f.m, {
            id: "application-review-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(m.Z, { className: e, width: 24, height: 24 }),
            text: _.intl.string(_.t.tcvVXF),
            selected: n,
            onClick: () => {
              (0, a.Q2)({
                guildId: t.id,
                source: g.jXE.CHANNEL_LIST,
                tab: C.oC.MEMBER_APPLICATIONS,
              }),
                (0, h.uL)(g.Z5c.CHANNEL(t.id, C.oC.MEMBER_APPLICATIONS));
            },
            trailing: I > 0 ? (0, i.jsx)(o.NumberBadge, { count: I }) : null,
          })
        );
      }
    },
    120818: function (e, t, n) {
      n.d(t, {
        T: function () {
          return _;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(91192),
        o = n(442837),
        a = n(481060),
        s = n(44315),
        c = n(563534),
        u = n(846121),
        d = n(703656),
        h = n(259580),
        p = n(981631),
        m = n(176505),
        f = n(388032),
        g = n(47622);
      function C(e, t) {
        return (0, i.jsx)(
          a.Text,
          { variant: "text-xs/bold", color: "text-normal", children: e },
          t,
        );
      }
      let _ = l.memo(function (e) {
        let { guild: t } = e,
          n = (0, o.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
          _ = (0, o.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
          v = l.useMemo(() => {
            if (null == n || null == _) return 0;
            let e = 0;
            return (
              n.forEach((t) => {
                null != _[t.channelId] && e++;
              }),
              e
            );
          }, [_, n]),
          x = null == n ? 0 : n.length,
          I = (0, r.JA)("progress-bar-".concat(t.id));
        return (0, i.jsxs)("li", {
          children: [
            (0, i.jsxs)(a.Clickable, {
              ...I,
              role: "button",
              focusProps: { offset: { right: 4 } },
              className: g.progressBarContainer,
              onClick: function () {
                (0, d.uL)(p.Z5c.CHANNEL(t.id, m.oC.GUILD_HOME));
              },
              children: [
                (0, i.jsxs)("div", {
                  className: g.progressBarText,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      variant: "heading-sm/bold",
                      children: f.intl.string(f.t.SnrR39),
                    }),
                    (0, i.jsxs)("div", {
                      className: g.rightContainer,
                      children: [
                        (0, i.jsx)(a.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          className: g.rightText,
                          children: f.intl.format(f.t.eqZ1lZ, {
                            numberHook: C,
                            total: x.toString(),
                            completed: v.toString(),
                          }),
                        }),
                        (0, i.jsx)(h.Z, {
                          className: g.arrow,
                          width: 16,
                          height: 16,
                          direction: h.Z.Directions.RIGHT,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(a.Progress, {
                  className: g.progressBar,
                  foregroundGradientColor: [
                    (0, s.Lq)(p.Ilk.GREEN_300),
                    (0, s.Lq)(p.Ilk.GREEN_230),
                  ],
                  percent: (v / x) * 100 + 3,
                  animate: !0,
                }),
              ],
            }),
            (0, i.jsx)("div", { role: "separator", className: g.divider }),
          ],
        });
      });
    },
    61642: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(239091),
        r = n(396828),
        o = n(703656),
        a = n(434479),
        s = n(981631),
        c = n(176505),
        u = n(388032);
      function d(e) {
        let { guild: t, selected: d } = e;
        return (0, i.jsx)(a.m, {
          id: "subscriptions-".concat(t.id),
          renderIcon: (e) => (0, i.jsx)(r.Z, { className: e }),
          text: u.intl.string(u.t["KzCF//"]),
          selected: d,
          onClick: () => {
            (0, o.uL)(s.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS));
          },
          onContextMenu: (e) => {
            null != t &&
              (0, l.jW)(e, async () => {
                let { default: e } = await n.e("28249").then(n.bind(n, 613329));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
              });
          },
        });
      }
    },
    848442: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(399606),
        a = n(704215),
        s = n(433517),
        c = n(481060),
        u = n(239091),
        d = n(607070),
        h = n(367907),
        p = n(357352),
        m = n(652515),
        f = n(550951),
        g = n(886176),
        C = n(605236),
        _ = n(703656),
        v = n(984933),
        x = n(430824),
        I = n(626135),
        b = n(434479),
        S = n(981631),
        E = n(176505),
        Z = n(629481),
        N = n(388032),
        y = n(273595);
      function T(e) {
        let { guildId: t, selected: n, handleClick: l } = e,
          u = (0, m.RF)(t, "guild_shop_channel_row"),
          f = (0, o.e7)([x.Z], () => x.Z.getGuild(t)),
          E =
            (null == f
              ? void 0
              : f.hasFeature(
                  S.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                )) === !0,
          T = "false" === s.K.get(Z.tM, "false"),
          A = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)(b.m, {
          id: "shop-".concat(t),
          className: r()(y.previewChannelRow, {
            [y.selected]: n,
            [y.phantomPreview]: T,
          }),
          innerClassName: y.previewChannelRowContent,
          renderIcon: (e) =>
            (0, i.jsx)(g.Z, {
              width: 20,
              height: 20,
              className: r()([e, y.shopIcon]),
            }),
          text: N.intl.string(N.t.al5EXF),
          selected: n,
          onClick: l,
          trailing: (0, i.jsxs)("div", {
            className: y.gifSection,
            children: [
              A
                ? (0, i.jsx)(c.TextBadge, {
                    color: c.tokens.unsafe_rawColors.BRAND_260.css,
                    text: N.intl.string(N.t.y2b7CA),
                    className: y.newBadge,
                  })
                : (0, i.jsx)("img", {
                    src: (0, p.b)("server_products/storefront/money.gif"),
                    className: y.money,
                    alt: "",
                  }),
              n &&
                (0, i.jsx)(c.Clickable, {
                  className: y.closeButton,
                  onClick: (e) => {
                    if (
                      (e.stopPropagation(),
                      (0, C.EW)(a.z.SERVER_SHOP_PHANTOM_PREVIEW),
                      I.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                        ...(0, h.hH)(t),
                        action_taken: Z.mz.DISMISS_CHANNEL_ROW,
                      }),
                      !u || !E)
                    ) {
                      var n;
                      (0, _.dL)(
                        S.Z5c.CHANNEL(
                          t,
                          null === (n = v.ZP.getDefaultChannel(t)) ||
                            void 0 === n
                            ? void 0
                            : n.id,
                        ),
                      );
                    }
                  },
                  "aria-label": N.intl.string(N.t.cpT0Cg),
                  children: (0, i.jsx)(c.CircleXIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
            ],
          }),
        });
      }
      function A(e) {
        let { guild: t, selected: l } = e,
          r = (0, f.g)(t, "guild_shop_channel_row"),
          o = () => {
            s.K.set(Z.tM, "true"),
              (0, _.uL)(S.Z5c.CHANNEL(t.id, E.oC.GUILD_SHOP));
          };
        return r
          ? (0, i.jsx)(T, { guildId: t.id, selected: l, handleClick: o })
          : (0, i.jsx)(b.m, {
              id: "shop-".concat(t.id),
              renderIcon: (e) =>
                (0, i.jsx)(g.Z, { width: 20, height: 20, className: e }),
              text: N.intl.string(N.t.al5EXF),
              selected: l,
              onClick: o,
              onContextMenu: (e) => {
                null != t &&
                  (0, u.jW)(e, async () => {
                    let { default: e } = await n
                      .e("66050")
                      .then(n.bind(n, 376573));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                  });
              },
            });
      }
    },
    53425: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(592125),
        c = n(938475),
        u = n(823379),
        d = n(734190),
        h = n(388032),
        p = n(329986);
      t.Z = l.memo(function (e) {
        let {
            channel: t,
            selectedChannel: n,
            selectedVoiceChannelId: l,
            sortedThreadIds: r,
            withGuildIcon: m,
          } = e,
          f = (0, a.Wu)(
            [s.Z],
            () => r.map((e) => s.Z.getChannel(e)).filter(u.lm),
            [r],
          ),
          g = (0, a.e7)([c.ZP], () => {
            let e = f[f.length - 1];
            if (null == e) return 0;
            let t = c.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length
              ? 0
              : l !== e.id
                ? 40
                : 32 * t.length + 8;
          });
        return (0, i.jsx)("li", {
          className: p.container,
          children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": h.intl.formatToPlainString(h.t.EiyIi4, {
              channelName: t.name,
            }),
            children: [
              (0, i.jsx)("div", {
                className: o()(p.spineBorder, {
                  [p.spineBorderWithGuildIcon]: m,
                }),
                style: { bottom: 24 + g },
              }),
              f.map((e, t) =>
                (0, i.jsx)(
                  d.Z,
                  {
                    thread: e,
                    isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                    isSelectedVoice: l === e.id,
                    isLast: t === f.length - 1,
                    withGuildIcon: m,
                  },
                  e.id,
                ),
              ),
            ],
          }),
        });
      });
    },
    734190: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(91192),
        s = n(442837),
        c = n(481060),
        u = n(493683),
        d = n(239091),
        h = n(111028),
        p = n(569471),
        m = n(488131),
        f = n(592125),
        g = n(306680),
        C = n(979651),
        _ = n(938475),
        v = n(714794),
        x = n(135724),
        I = n(25601),
        b = n(207055),
        S = n(981631),
        E = n(124368),
        Z = n(388032),
        N = n(831746),
        y = n(193877),
        T = n(329986);
      function A(e) {
        let { style: t, withGuildIcon: n } = e;
        return (0, i.jsx)("svg", {
          className: o()(T.spine, { [T.spineWithGuildIcon]: n }),
          width: "12",
          height: "11",
          viewBox: "0 0 12 11",
          fill: "none",
          "aria-hidden": !0,
          style: t,
          children: (0, i.jsx)("path", {
            d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
            fill: "currentColor",
          }),
        });
      }
      t.Z = l.memo(function (e) {
        let {
            thread: t,
            isSelectedChannel: r,
            isSelectedVoice: T,
            isLast: j,
            withGuildIcon: P,
          } = e,
          R = (0, s.e7)([_.ZP], () => _.ZP.getVoiceStatesForChannel(t), [t]),
          M = (0, s.e7)([C.Z], () => C.Z.hasVideo(t.id)),
          { unread: L, mentionCount: w } = (0, s.cj)([g.ZP], () => ({
            unread: g.ZP.hasUnread(t.id),
            mentionCount: g.ZP.getMentionCount(t.id),
          })),
          D = (0, s.e7)([p.Z], () => p.Z.isMuted(t.id)),
          O = l.useCallback(
            (e) => {
              (0, m.ok)(t, !e.shiftKey, E.on.CHANNEL_LIST);
            },
            [t],
          ),
          k = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
          }, [t.guild_id, t.id]),
          G = l.useCallback(
            (e) => {
              let l = f.Z.getChannel(t.id);
              null != l &&
                (0, d.jW)(e, async () => {
                  let { default: e } = await n
                    .e("40157")
                    .then(n.bind(n, 422200));
                  return (t) => (0, i.jsx)(e, { ...t, channel: l });
                });
            },
            [t.id],
          ),
          U = null == R ? 0 : R.length,
          { role: B, ...H } = (0, a.JA)(t.id),
          V = l.useRef(null),
          F =
            w > 0
              ? Z.intl.formatToPlainString(Z.t["ZL7+Iy"], {
                  channelName: t.name,
                  mentionCount: w,
                })
              : L
                ? Z.intl.formatToPlainString(Z.t.YlVvmZ, {
                    channelName: t.name,
                  })
                : Z.intl.formatToPlainString(Z.t["0nZpiI"], {
                    channelName: t.name,
                  });
        return (0, i.jsxs)("li", {
          role: B,
          className: o()(N.containerDefault, { [N.selected]: r }),
          children: [
            (0, i.jsx)(A, { withGuildIcon: P }),
            j
              ? null
              : (0, i.jsx)(A, {
                  withGuildIcon: P,
                  style: { transform: "rotateX(180deg) translateY(-9px)" },
                }),
            (0, i.jsx)(c.FocusRing, {
              focusTarget: V,
              ringTarget: V,
              offset: { top: 2, bottom: 2, right: 4 },
              children: (0, i.jsxs)("div", {
                className: o()(N.iconVisibility, y.wrapper, y.typeThread, {
                  [y.modeSelected]: r,
                  [y.modeMuted]: !r && D,
                  [y.modeUnreadImportant]: !D && !r && L,
                  [y.withGuildIcon]: P,
                }),
                onMouseDown: k,
                onContextMenu: G,
                children: [
                  !L || D || r
                    ? null
                    : (0, i.jsx)("div", {
                        className: o()(y.unread, y.unreadImportant),
                      }),
                  (0, i.jsx)(c.Clickable, {
                    ...H,
                    innerRef: V,
                    className: y.link,
                    onClick: O,
                    "aria-label": F,
                    focusProps: { enabled: !1 },
                    children: (0, i.jsxs)("div", {
                      className: o()(y.linkTop, y.__invalid_threadMainContent),
                      children: [
                        (0, i.jsx)(h.Z, {
                          className: y.name,
                          "aria-hidden": !0,
                          children: t.name,
                        }),
                        (0, i.jsxs)("div", {
                          className: y.children,
                          children: [
                            U > 0 && t.userLimit > 0
                              ? (0, i.jsx)(x.Z, {
                                  userCount: U,
                                  video: M,
                                  channel: t,
                                })
                              : null,
                            (0, v.Z)(w)
                              ? (0, i.jsx)(I.Z, { mentionsCount: w })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(b.Z, {
              channel: t,
              collapsed: !T,
              collapsedMax: 6,
              voiceStates: R,
              location: S.Sbl.GUILD_CHANNEL_LIST,
            }),
          ],
        });
      });
    },
    25601: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(831209),
        r = n(481060),
        o = n(953498);
      function a(e) {
        let { mentionsCount: t } = e;
        return (0, i.jsx)("div", {
          className: o.mentionsBadge,
          "aria-hidden": !0,
          children: (0, i.jsx)(r.NumberBadge, {
            count: t,
            color: l.Z.STATUS_DANGER,
          }),
        });
      }
    },
    424785: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return z;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(481060),
        s = n(475179),
        c = n(239091),
        u = n(146773),
        d = n(888651),
        h = n(201895),
        p = n(111028),
        m = n(305325),
        f = n(281956),
        g = n(66999),
        C = n(378844),
        _ = n(359110),
        v = n(922482),
        x = n(431328),
        I = n(501655),
        b = n(427679),
        S = n(368442),
        E = n(201469),
        Z = n(680089),
        N = n(592125),
        y = n(430824),
        T = n(607744),
        A = n(496675),
        j = n(306680),
        P = n(9156),
        R = n(979651),
        M = n(934415),
        L = n(98597),
        w = n(648501),
        D = n(473403),
        O = n(207055),
        k = n(981631),
        G = n(647086),
        U = n(388032),
        B = n(831746),
        H = n(645693);
      function V(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class F extends L.ZP {
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, M.rY)(e, R.Z, y.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return B.containerUserOver;
          if (null != t)
            return e > t ? B.containerDragAfter : B.containerDragBefore;
          return B.containerDefault;
        }
        renderVoiceUsers() {
          let {
            channel: e,
            collapsed: t,
            tabIndex: n,
            speakerVoiceStates: l,
            numAudience: r,
          } = this.props;
          return (0, i.jsx)(O.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: k.Sbl.GUILD_CHANNEL_LIST,
            numAudience: r,
          });
        }
        renderChannelInfo() {
          return this.props.channelInfo;
        }
        render() {
          let {
              channel: e,
              selected: t,
              connected: n,
              locked: l,
              connectChannelDropTarget: o,
              connectChannelDragSource: s,
              connectUserDropTarget: c,
              connectDragPreview: u,
              canReorderChannel: d,
              canMoveMembers: p,
              stageInstance: m,
              isSubscriptionGated: f,
              needSubscriptionToAccess: g,
              unread: C,
              resolvedUnreadSetting: _,
              mentionCount: v,
              isFavoriteSuggestion: x,
            } = this.props,
            { shouldShowGuildVerificationPopout: I } = this.state,
            b = this.getVoiceStatesCount(),
            S = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [B.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)(a.Popout, {
                  position: "right",
                  renderPopout: this.renderPopout,
                  spacing: 0,
                  onRequestClose: this.closeGuildVerificationPopout,
                  shouldShow: I,
                  children: () =>
                    (0, i.jsx)(a.Tooltip, {
                      text: this.getTooltipText(),
                      children: (o) => {
                        let { onClick: a, onContextMenu: s, ...c } = o;
                        return (0, i.jsxs)(D.Z, {
                          className: B.iconVisibility,
                          iconClassName: r()({ [H.iconLive]: null != m }),
                          channel: e,
                          selected: !x && t,
                          connected: n,
                          unread: n ? C : void 0,
                          resolvedUnreadSetting: _,
                          mentionCount: v,
                          locked: l,
                          onClick: () => {
                            this.handleClick(), null == a || a();
                          },
                          onContextMenu: (e) => {
                            this.handleContextMenu(e), null == s || s();
                          },
                          connectDragPreview: u,
                          subtitle: this.renderSubtitle(),
                          isFavoriteSuggestion: x,
                          "aria-label": (0, h.ZP)({
                            channel: e,
                            unread: C,
                            mentionCount: v,
                            userCount: b,
                            isSubscriptionGated: f,
                            needSubscriptionToAccess: g,
                          }),
                          ...c,
                          children: [
                            x && this.renderAcceptSuggestionButton(),
                            x && this.renderRemoveSuggestionButton(),
                            !x && this.renderOpenChatButton(),
                            !x && this.renderInviteButton(),
                            !x && this.renderEditButton(),
                            !x && this.renderChannelInfo(),
                          ],
                        });
                      },
                    }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return p && (S = c(S)), d && (S = o(s(S))), S;
        }
        constructor(...e) {
          super(...e),
            V(this, "state", { shouldShowGuildVerificationPopout: !1 }),
            V(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            V(this, "handleClick", () => {
              let {
                  channel: e,
                  locked: t,
                  connected: n,
                  unverifiedAccount: i,
                } = this.props,
                l = e.getGuildId();
              null != l && (0, f.n)(l) && (0, m.hk)(l),
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                !t &&
                  !n &&
                  !e.isRoleSubscriptionTemplatePreviewChannel() &&
                  (0, v.Cq)(e),
                !__OVERLAY__ && (0, _.Kh)(e.id);
            }),
            V(this, "handleClickChat", () => {
              let { channel: e, locked: t } = this.props;
              !__OVERLAY__ && !t && (0, _.Kh)(e.id);
            }),
            V(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = y.Z.getGuild(t.getGuildId());
              if (null != l)
                (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("83331"),
                  ]).then(n.bind(n, 213202));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            V(this, "renderPopout", () => {
              let { channel: e } = this.props,
                { shouldShowGuildVerificationPopout: t } = this.state;
              if (t)
                return (0, i.jsx)(C.Z, {
                  type: C.R.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render",
              );
            }),
            V(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(a.Tooltip, {
                  text: U.intl.string(U.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: o,
                      onFocus: c,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(a.Clickable, {
                      className: r()(B.iconItem, n ? B.alwaysShown : null),
                      onClick: () => {
                        s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                      },
                      "aria-label": U.intl.string(U.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: o,
                      onFocus: c,
                      onBlur: u,
                      children: (0, i.jsx)(a.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: B.actionIcon,
                      }),
                    });
                  },
                });
            }),
            V(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e ? U.intl.string(U.t.rZfiNj) : null;
            }),
            V(this, "renderSubtitle", () => {
              var e;
              let t =
                null === (e = this.props.stageInstance) || void 0 === e
                  ? void 0
                  : e.topic;
              return null == t ? null : (0, i.jsx)(p.Z, { children: t });
            });
        }
      }
      let W = (0, u.B)((0, d.Q)(F));
      function z(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: r,
            collapsed: a,
            voiceStates: s,
          } = e,
          c = (0, o.cj)([j.ZP], () => ({
            unread: j.ZP.hasUnread(n.id),
            mentionCount: j.ZP.getMentionCount(n.id),
          })),
          u = (0, o.e7)([P.ZP], () => P.ZP.resolveUnreadSetting(n)),
          d = (0, o.cj)([N.Z, T.Z, A.Z], () => {
            let e = N.Z.getChannel(n.parent_id),
              i = T.Z.getCheck(n.guild_id);
            return {
              canManageChannel: null != t && A.Z.can(k.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === G._ ||
                  (null != e
                    ? A.Z.can(k.Plq.MANAGE_CHANNELS, e)
                    : A.Z.can(k.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: A.Z.can(k.Plq.MOVE_MEMBERS, n),
              locked: !A.Z.can(k.Plq.CONNECT, n),
              bypassLimit: A.Z.can(k.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          h = (0, o.e7)([Z.Z], () => Z.Z.isCollapsed(n.parent_id)),
          p = (0, E.ZP)(n.id),
          m = (0, o.e7)([b.Z], () => b.Z.getStageInstanceByChannel(n.id), [
            n.id,
          ]),
          f = (0, x.Rk)(n.id, I.pV.AUDIENCE),
          { isSubscriptionGated: C, needSubscriptionToAccess: _ } = (0, g.Z)(
            n.id,
          ),
          v = (0, o.e7)([P.ZP], () => P.ZP.isFavorite(t.id, n.id)),
          y = (0, S.xJ)(n.id),
          R = (0, w.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: a,
            voiceStates: s,
            isSubscriptionGated: C,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit:
              y || (n.userLimit > 0 && n.userLimit < k.xGv),
          }),
          M = e.connected && null == R;
        return (0, i.jsx)(W, {
          categoryCollapsed: h,
          connectAction: p,
          numAudience: f,
          stageInstance: m,
          isSubscriptionGated: C,
          needSubscriptionToAccess: _,
          ...c,
          ...d,
          ...e,
          isFavoriteSuggestion: r && !v,
          forceShowButtons: M,
          channelInfo: R,
          resolvedUnreadSetting: u,
        });
      }
    },
    770202: function (e, t, n) {
      n(411104), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(493683),
        c = n(239091),
        u = n(146773),
        d = n(201895),
        h = n(703656),
        p = n(592125),
        m = n(430824),
        f = n(496675),
        g = n(98597),
        C = n(473403),
        _ = n(981631),
        v = n(490897),
        x = n(831746);
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function b(e, t) {
        let n = t.getGuildId();
        if (null == n)
          throw Error(
            "TextChannel, preloadChannel: Channel does not have a guildId",
          );
        s.Z.preload(n, t.id);
      }
      class S extends g.ZP {
        render() {
          let {
              channel: e,
              selected: t,
              connectChannelDropTarget: n,
              connectChannelDragSource: l,
              connectDragPreview: r,
              canReorderChannel: a,
            } = this.props,
            s = (0, i.jsx)("li", {
              className: o()(this.getClassName(), {
                [x.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: (0, i.jsxs)(C.Z, {
                className: x.iconVisibility,
                channel: e,
                selected: t,
                onClick: this.handleClick,
                onMouseDown: b,
                onContextMenu: this.handleContextMenu,
                connectDragPreview: a ? r : null,
                "aria-label": (0, d.ZP)({ channel: e }),
                resolvedUnreadSetting: v.i.ONLY_MENTIONS,
                children: [this.renderInviteButton(), this.renderEditButton()],
              }),
            });
          return a ? n(l(s)) : s;
        }
        constructor(...e) {
          super(...e),
            I(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = m.Z.getGuild(t.getGuildId());
              null != l &&
                (0, c.jW)(e, async () => {
                  let { default: e } = await n
                    .e("99905")
                    .then(n.bind(n, 649400));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            I(this, "handleClick", (e) => {
              !(function (e) {
                let t = e.getGuildId();
                if (null == t)
                  throw Error(
                    "TextChannel, transitionTo: Channel does not have a guildId",
                  );
                (0, h.uL)(_.Z5c.CHANNEL(t, e.id), {
                  state: {
                    analyticsSource: {
                      page: _.ZY5.GUILD_CHANNEL,
                      section: _.jXE.CHANNEL_LIST,
                      object: _.qAy.CHANNEL,
                    },
                  },
                });
              })(e);
            });
        }
      }
      let E = (0, u.B)(S);
      t.Z = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
          r = (0, a.cj)([p.Z, f.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
              canManageChannel: f.Z.can(_.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l && null != e
                  ? f.Z.can(_.Plq.MANAGE_CHANNELS, e)
                  : f.Z.can(_.Plq.MANAGE_CHANNELS, n),
            };
          });
        return (0, i.jsx)(E, { ...r, ...e });
      });
    },
    79556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(481060),
        s = n(493683),
        c = n(239091),
        u = n(146773),
        d = n(595519),
        h = n(619915),
        p = n(201895),
        m = n(873696),
        f = n(66999),
        g = n(22082),
        C = n(665906),
        _ = n(592125),
        v = n(430824),
        x = n(496675),
        I = n(306680),
        b = n(9156),
        S = n(594174),
        E = n(109446),
        Z = n(98597),
        N = n(648501),
        y = n(473403),
        T = n(304471),
        A = n(981631),
        j = n(647086),
        P = n(831746);
      function R(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class M extends Z.ZP {
        componentWillUnmount() {
          this.resetTextChannelPopoutTimers();
        }
        resetTextChannelPopoutTimers() {
          clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, i.jsx)("div", { className: P.channelInfo, children: e });
        }
        render() {
          let {
              channel: e,
              guild: t,
              selected: n,
              muted: l,
              unread: o,
              hasActiveThreads: s,
              hasMoreActiveThreads: c,
              mentionCount: u,
              connectChannelDropTarget: d,
              connectChannelDragSource: h,
              connectDragPreview: f,
              canReorderChannel: g,
              isSubscriptionGated: C,
              isFavoriteSuggestion: _,
              subtitle: v,
              forceTopLevelThread: x,
              embeddedApps: I,
              resolvedUnreadSetting: b,
              withGuildIcon: S,
              enableActivities: E,
            } = this.props,
            Z = E && null != I && I.length > 0,
            N = (0, m.D)(v),
            T = (0, i.jsx)("li", {
              className: r()(this.getClassName(), {
                [P.disabled]: this.isDisabled(),
                [P.selected]: n,
              }),
              "data-dnd-name": e.name,
              onMouseEnter: c || Z ? this.handleMouseEnter : void 0,
              onMouseLeave: c || Z ? this.handleMouseLeave : void 0,
              children: (0, i.jsx)(a.Popout, {
                position: "right",
                renderPopout: this.renderPopout,
                spacing: 0,
                onRequestClose: this.handleClosePopout,
                shouldShow:
                  (c && this.state.shouldShowThreadsPopout) ||
                  (Z && this.state.shouldShowActivities),
                children: () =>
                  (0, i.jsxs)(y.Z, {
                    className: P.iconVisibility,
                    channel: e,
                    guild: t,
                    selected: !_ && n,
                    muted: l,
                    unread: o,
                    mentionCount: u,
                    hasActiveThreads: s,
                    subtitle: null == N ? void 0 : N.subtitle,
                    subtitleColor: null == N ? void 0 : N.color,
                    onMouseDown: this.handleMouseDown,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: g ? f : null,
                    isFavoriteSuggestion: _,
                    channelTypeOverride: x ? A.d4z.GUILD_TEXT : void 0,
                    resolvedUnreadSetting: b,
                    withGuildIcon: S,
                    "aria-label": (0, p.ZP)({
                      channel: e,
                      unread: o,
                      mentionCount: u,
                      isSubscriptionGated: C,
                    }),
                    children: [
                      _ && this.renderAcceptSuggestionButton(),
                      _ && this.renderRemoveSuggestionButton(),
                      !_ && this.renderInviteButton(),
                      !_ && this.renderEditButton(),
                      !_ && this.renderChannelInfo(),
                    ],
                  }),
              }),
            });
          return g ? d(h(T)) : T;
        }
        constructor(...e) {
          super(...e),
            R(this, "state", {
              shouldShowThreadsPopout: !1,
              shouldShowActivities: !1,
            }),
            R(this, "enterTimer", 0),
            R(this, "exitTimer", 0),
            R(this, "handleMouseEnter", () => {
              if (
                !!this.props.canShowThreadPreviewForUser ||
                null != this.props.embeddedApps
              )
                this.resetTextChannelPopoutTimers(),
                  (this.enterTimer = setTimeout(() => {
                    null != this.props.embeddedApps &&
                    this.props.embeddedApps.length > 0
                      ? this.setState({ shouldShowActivities: !0 })
                      : this.props.canShowThreadPreviewForUser &&
                        this.setState({ shouldShowThreadsPopout: !0 });
                  }, 200));
            }),
            R(this, "handleMouseLeave", () => {
              this.resetTextChannelPopoutTimers(),
                (this.exitTimer = setTimeout(() => {
                  this.state.shouldShowActivities &&
                    this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout &&
                      this.setState({ shouldShowThreadsPopout: !1 });
                }, 250));
            }),
            R(this, "handleThreadsPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, "handleActivitiesPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowActivities: !1 });
            }),
            R(this, "handleClosePopout", () => {
              this.state.shouldShowActivities &&
                this.handleActivitiesPopoutClose(),
                this.state.shouldShowThreadsPopout &&
                  this.handleThreadsPopoutClose();
            }),
            R(this, "handleMouseDown", () => {
              this.handleActivitiesPopoutClose(),
                this.handleThreadsPopoutClose();
              let { channel: e } = this.props,
                t = e.getGuildId();
              s.Z.preload(null != t ? t : A.ME, e.id);
            }),
            R(this, "renderPopout", (e) => {
              let { channel: t, sorting: n, embeddedApps: l } = this.props,
                { shouldShowActivities: r } = this.state;
              return null != l && l.length > 0 && r && !n
                ? (0, i.jsx)(T.Z, {
                    onAction: this.handleActivitiesPopoutClose,
                    channel: t,
                  })
                : (0, i.jsx)(E.Z, { ...e, channel: this.props.channel });
            }),
            R(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props;
              if (t.type === A.d4z.GROUP_DM) {
                (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("25421"),
                  ]).then(n.bind(n, 354741));
                  return (n) =>
                    (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
                });
                return;
              }
              if (t.type === A.d4z.DM) {
                let l = S.default.getUser(t.getRecipientId());
                null != l &&
                  (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("92453"),
                      n.e("56826"),
                      n.e("5606"),
                    ]).then(n.bind(n, 131404));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        user: l,
                        channel: t,
                        showModalItems: !1,
                      });
                  });
                return;
              }
              let l = v.Z.getGuild(t.getGuildId());
              null != l &&
                (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("54310"),
                  ]).then(n.bind(n, 373651));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            });
        }
      }
      let L = (0, u.B)(M);
      function w(e) {
        let {
            channel: t,
            guild: n,
            disableSorting: l,
            isFavoriteCategory: r,
            muted: a,
            selected: s,
          } = e,
          { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, C.JQ)(t),
          p = (0, o.cj)([I.ZP], () => ({
            unread: I.ZP.hasUnread(t.id),
            ackMessageId: I.ZP.ackMessageId(t.id),
            mentionCount: I.ZP.getMentionCount(t.id),
          })),
          m = (0, o.e7)([b.ZP], () => b.ZP.resolveUnreadSetting(t)),
          v = (0, o.cj)([_.Z, x.Z], () => {
            let e = _.Z.getChannel(t.parent_id);
            return {
              canManageChannel: x.Z.can(A.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l &&
                (n.id === j._ ||
                  (null != e
                    ? x.Z.can(A.Plq.MANAGE_CHANNELS, e)
                    : x.Z.can(A.Plq.MANAGE_CHANNELS, n))),
            };
          }),
          E = (0, o.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(n.id, t.id)),
          { needSubscriptionToAccess: Z, isSubscriptionGated: y } = (0, f.Z)(
            t.id,
          ),
          T = (0, o.e7)([b.ZP], () => b.ZP.isFavorite(n.id, t.id)),
          P = (0, o.e7)(
            [S.default],
            () => {
              let e = S.default.getCurrentUser();
              return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t],
          ),
          R = (0, d.NX)(t.id),
          M = (0, N.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: y,
            needSubscriptionToAccess: Z,
            isNewChannel: E,
            muted: a,
            enableActivities: R,
            resolvedUnreadSetting: m,
          }),
          w = (0, h.ZP)(t);
        return (0, i.jsx)(L, {
          ...p,
          ...v,
          ...e,
          hasActiveThreads: c,
          hasMoreActiveThreads: u,
          isSubscriptionGated: y,
          needSubscriptionToAccess: Z,
          isNewChannel: E && e.canBeNewChannel,
          isFavoriteSuggestion: r && !T,
          canShowThreadPreviewForUser: P,
          channelInfo: M,
          embeddedApps: w,
          resolvedUnreadSetting: m,
          hasChannelInfo: null != M,
          enableActivities: R,
        });
      }
    },
    304471: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(619915),
        o = n(449932),
        a = n(561788),
        s = n(684393);
      function c(e) {
        let { channel: t, onAction: n } = e,
          c = (0, r.ZP)(t),
          u = Array.from((0, r.uF)(c).values());
        return 0 === u.length
          ? null
          : (0, i.jsxs)(l.Scroller, {
              className: s.container,
              children: [
                (0, i.jsx)("div", {
                  className: s.popoutHeaderContainer,
                  children: (0, i.jsx)(a.Z, { channel: t }),
                }),
                (0, i.jsx)("div", { className: s.headerDivider }),
                u.map((e, l) => {
                  var r;
                  return (0, i.jsx)(
                    o.Z,
                    {
                      embeddedApp: e,
                      presenceActivity:
                        null !== (r = e.presenceActivity) && void 0 !== r
                          ? r
                          : void 0,
                      channel: t,
                      onAction: n,
                    },
                    l,
                  );
                }),
              ],
            });
      }
    },
    428127: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(752877),
        s = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(492162),
        h = n(237583),
        p = n(451478),
        m = n(934415),
        f = n(968847),
        g = n(388032),
        C = n(706091);
      let _ = { friction: 30, tension: 300 };
      function v(e) {
        var t;
        let { guildChannels: n, jumpToVoiceChannels: r } = e,
          a = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
          s = (0, d.Z)(n.id),
          p = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), r();
            },
            [r],
          ),
          f =
            null !== (t = null == a ? void 0 : a.getChannelRecords()) &&
            void 0 !== t
              ? t
              : [],
          _ = (0, m.c4)({
            channels: f,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s,
          });
        return (0, i.jsxs)(u.Clickable, {
          className: o()(C.bar),
          onClick: p,
          children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
              size: "custom",
              className: C.voiceChannelsIcon,
              width: 14,
              height: 14,
              color: c.Z.unsafe_rawColors.GREEN_330.css,
            }),
            (0, i.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-positive",
              className: C.barText,
              children: g.intl.format(g.t["fDlr+P"], { count: _.length }),
            }),
            (0, i.jsx)(h.Z, {
              guildId: n.id,
              className: C.voiceChannelsUsers,
              users: _.slice(0, 4),
              renderMoreUsers: () => null,
              max: 4,
              size: u.AvatarSizes.SIZE_16,
            }),
          ],
        });
      }
      function x(e) {
        let {
            position: t,
            guildChannels: n,
            guildChannelsVersion: r,
            jumpToVoiceChannels: c,
            jumpToChannel: d,
          } = e,
          { bottomBar: h, topBar: m } = (0, s.cj)([f.Z], () =>
            f.Z.getUnreadStateForGuildId(n.id),
          ),
          x = (0, s.e7)([p.Z], () => p.Z.isFocused()),
          {
            mode: I,
            mentionCount: b,
            targetChannelId: S,
          } = "bottom" === t ? h : m,
          E = I === f.x.HIDDEN,
          Z = (0, u.useSpring)(
            {
              to: {
                transform: E
                  ? "bottom" === t
                    ? "translateY(180%)"
                    : "translateY(-180%)"
                  : "translateY(0%)",
              },
              config: _,
            },
            x ? "respect-motion-settings" : "animate-never",
          ),
          N = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null != S && d(S);
            },
            [d, S],
          );
        return (0, i.jsx)("div", {
          className: o()(C.container, {
            [C.top]: "top" === t,
            [C.bottom]: "bottom" === t,
          }),
          children: (0, i.jsx)(a.animated.div, {
            className: C.containerPadding,
            style: Z,
            "aria-hidden": E,
            children:
              I === f.x.HIDDEN
                ? (0, i.jsx)("div", { className: o()(C.bar, C.emptyBar) })
                : I === f.x.UNREAD
                  ? (0, i.jsxs)(u.Clickable, {
                      className: C.bar,
                      onClick: N,
                      children: [
                        "bottom" === t
                          ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                              size: "custom",
                              color: "currentColor",
                              className: C.unreadIcon,
                              height: 14,
                              width: 14,
                            })
                          : (0, i.jsx)(u.ChevronSmallUpIcon, {
                              size: "custom",
                              color: "currentColor",
                              className: C.unreadIcon,
                              height: 14,
                              width: 14,
                            }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          color: "interactive-normal",
                          className: C.barText,
                          children: g.intl.string(g.t.FCRiT0),
                        }),
                      ],
                    })
                  : I === f.x.MENTIONS
                    ? (0, i.jsx)(u.Clickable, {
                        className: o()(C.bar, C.mentionsBar),
                        onClick: N,
                        children: (0, i.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          color: "status-danger-text",
                          className: C.barText,
                          children: g.intl.format(g.t.EQcLys, { count: b }),
                        }),
                      })
                    : I === f.x.VOICE_CHANNELS
                      ? (0, i.jsx)(v, {
                          jumpToVoiceChannels: c,
                          guildChannels: n,
                          guildChannelsVersion: r,
                        })
                      : void 0,
          }),
        });
      }
    },
    950969: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(718528),
        a = n(256916),
        s = n(220444),
        c = n(569471),
        u = n(592125),
        d = n(306680),
        h = n(9156),
        p = n(451478);
      function m(e) {
        let t = u.Z.getChannel(e);
        return (
          null != t &&
          null != t.getGuildId() &&
          !(t.isThread()
            ? c.Z.isMuted(t.id)
            : h.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
          (0, s.d)(t)
        );
      }
      function f(e) {
        let t = u.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = h.ZP.isGuildCollapsed(n),
          l = h.ZP.isChannelMuted(n, t.id);
        return (!i || !l) && d.ZP.getMentionCount(e) > 0;
      }
      t.Z = l.forwardRef(function (e, t) {
        let { guildId: n, guildChannels: l, guildChannelsVersion: s, ...c } = e,
          u = (0, o.T)(
            n,
            l,
            s,
            { withVoiceChannels: !1 },
            { ignoreRecents: !0 },
          ),
          d = (0, r.e7)([p.Z], () => p.Z.isFocused());
        return (0, i.jsx)(a.Z, {
          ref: t,
          ...c,
          isUnread: m,
          isMentioned: f,
          items: u,
          animate: d,
        });
      });
    },
    233657: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(704215),
        o = n(481060),
        a = n(239091),
        s = n(605236),
        c = n(554747),
        u = n(306680),
        d = n(9156),
        h = n(434479),
        p = n(490897),
        m = n(388032),
        f = n(193877);
      function g(e) {
        let { guild: t, selected: g } = e,
          { hasUnread: C, mentionCount: _ } = (0, l.cj)(
            [u.ZP],
            () => ({
              hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
              mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT),
            }),
            [t.id],
          ),
          v = (0, l.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
        async function x() {
          await (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("22347"),
              n.e("56236"),
              n.e("22506"),
            ]).then(n.bind(n, 17671));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
          }),
            (0, s.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
        }
        let I = (0, c.ZP)(t.id),
          b =
            I.length > 0
              ? m.intl.formatToPlainString(m.t.IBdqSk, { number: I.length })
              : m.intl.string(m.t.tlopTE);
        return (0, i.jsx)(h.m, {
          id: "upcoming-events-".concat(t.id),
          renderIcon: (e) =>
            (0, i.jsx)(o.CalendarIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          text: b,
          selected: g,
          onClick: x,
          onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
              let { default: e } = await n.e("95307").then(n.bind(n, 867757));
              return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
          },
          showUnread: C && !v,
          trailing:
            !v && _ > 0
              ? (0, i.jsx)(o.NumberBadge, {
                  className: f.numberBadge,
                  disableColor: !0,
                  count: _,
                })
              : null,
        });
      }
    },
    831700: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return et;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(846519),
        s = n(481060),
        c = n(475179),
        u = n(239091),
        d = n(146773),
        h = n(888651),
        p = n(619915),
        m = n(339340),
        f = n(201895),
        g = n(718589),
        C = n(933557),
        _ = n(557135),
        v = n(873696),
        x = n(215339),
        I = n(832382),
        b = n(446226),
        S = n(305325),
        E = n(281956),
        Z = n(66999),
        N = n(554747),
        y = n(378844),
        T = n(574176),
        A = n(359110),
        j = n(155409),
        P = n(695346),
        R = n(447564),
        M = n(592125),
        L = n(430824),
        w = n(607744),
        D = n(496675),
        O = n(306680),
        k = n(9156),
        G = n(979651),
        U = n(934415),
        B = n(63063),
        H = n(98597),
        V = n(648501),
        F = n(473403),
        W = n(830993),
        z = n(653577),
        Y = n(207055),
        K = n(981631),
        q = n(647086),
        Q = n(388032),
        X = n(831746);
      function J(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class $ extends H.ZP {
        componentWillUnmount() {
          this.activitiesHideTimeout.stop();
        }
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, U.rY)(e, G.Z, L.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return X.containerUserOver;
          if (null != t)
            return e > t ? X.containerDragAfter : X.containerDragBefore;
          return X.containerDefault;
        }
        renderSubtitle() {
          var e;
          let {
              channel: t,
              connected: n,
              enableHangStatus: l,
              allowChannelTopic: r,
            } = this.props,
            o =
              null === (e = (0, v.D)(this.props.subtitle)) || void 0 === e
                ? void 0
                : e.subtitle,
            { hovered: a } = this.state;
          return (0, i.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: o,
            hovered: a,
            enableHangStatus: l,
            allowChannelTopic: r,
          });
        }
        renderVoiceUsers() {
          let {
            channel: e,
            voiceStates: t,
            collapsed: n,
            withGuildIcon: l,
            tabIndex: r,
          } = this.props;
          return (0, i.jsx)(Y.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: K.Sbl.GUILD_CHANNEL_LIST,
          });
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, i.jsx)("div", { className: X.channelInfo, children: e });
        }
        renderHDSplashedIcon() {
          let { channel: e, locked: t } = this.props;
          return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                text: Q.intl.string(Q.t.gpF6QU),
                children: (t) => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onFocus: o,
                    onBlur: a,
                  } = t;
                  return (0, i.jsx)(s.Clickable, {
                    className: r()(X.iconItem, X.alwaysShown),
                    onClick: () => {
                      (0, x.X)("VoiceChannel")
                        ? (0, R.openHDPotionModal)(e, "VoiceChannel")
                        : window.open(
                            B.Z.getArticleURL(K.BhN.HD_STREAMING_POTION),
                            "_blank",
                          );
                    },
                    "aria-label": Q.intl.string(Q.t.gpF6QU),
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onFocus: o,
                    onBlur: a,
                    children: (0, i.jsx)(s.PotionIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: X.actionIcon,
                    }),
                  });
                },
              });
        }
        render() {
          let {
              channel: e,
              selected: t,
              connected: n,
              unread: l,
              resolvedUnreadSetting: o,
              mentionCount: a,
              locked: c,
              sorting: u,
              isUserOver: d,
              connectChannelDropTarget: h,
              connectChannelDragSource: p,
              connectUserDropTarget: m,
              connectDragPreview: C,
              canReorderChannel: _,
              canMoveMembers: v,
              showTutorial: x,
              hasActiveEvent: b,
              embeddedApps: S,
              isSubscriptionGated: E,
              isFavoriteSuggestion: Z,
              withGuildIcon: N,
            } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: T } =
              this.state,
            A = this.getVoiceStatesCount(),
            P = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [X.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)("div", {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: (0, i.jsx)(s.Popout, {
                    position: "right",
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.closeGuildVerificationPopout,
                    shouldShow: (y && !u && !d && !T) || T,
                    children: () =>
                      (0, i.jsx)(s.Tooltip, {
                        text: this.getTooltipText(),
                        children: (s) => {
                          let { onClick: u, onContextMenu: d, ...h } = s;
                          return (0, i.jsx)(I.Z, {
                            channel: e,
                            children: (0, i.jsxs)(F.Z, {
                              className: X.iconVisibility,
                              iconClassName: r()({ [X.iconLive]: b }),
                              hasActiveEvent: b,
                              channel: e,
                              selected: !Z && t,
                              connected: n,
                              unread: n ? l : void 0,
                              resolvedUnreadSetting: o,
                              mentionCount: a,
                              locked: c,
                              subtitle: this.renderSubtitle(),
                              onClick: () => {
                                this.handleClick(), null == u || u();
                              },
                              onContextMenu: (e) => {
                                this.handleContextMenu(e), null == d || d();
                              },
                              connectDragPreview: C,
                              isFavoriteSuggestion: Z,
                              "aria-label": (0, f.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: a,
                                userCount: A,
                                embeddedActivitiesCount: S.length,
                                isSubscriptionGated: E,
                              }),
                              "aria-describedby": (0, g.Z)({
                                channel: e,
                                embeddedApps: S,
                              }),
                              withGuildIcon: N,
                              ...h,
                              children: [
                                Z && this.renderAcceptSuggestionButton(),
                                Z && this.renderRemoveSuggestionButton(),
                                !Z && this.renderOpenChatButton(),
                                !Z && this.renderInviteButton(),
                                !Z && this.renderEditButton(),
                                !Z && this.renderChannelInfo(),
                                !Z && this.renderHDSplashedIcon(),
                              ],
                            }),
                          });
                        },
                      }),
                  }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return (
            v && (P = m(P)),
            _ && (P = h(p(P))),
            x &&
              (P = (0, i.jsx)(j.Z, {
                tutorialId: "voice-conversations",
                position: "right",
                offsetX: -20,
                children: P,
              })),
            P
          );
        }
        constructor(...e) {
          super(...e),
            J(this, "state", {
              shouldShowActivities: !1,
              shouldShowGuildVerificationPopout: !1,
              hovered: !1,
            }),
            J(this, "activitiesHideTimeout", new a.V7()),
            J(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            J(this, "handleVoiceConnect", () => {
              let {
                locked: e,
                connected: t,
                channel: n,
                unverifiedAccount: i,
                needSubscriptionToAccess: l,
              } = this.props;
              i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                _.Z.handleVoiceConnect({
                  channel: n,
                  connected: t,
                  needSubscriptionToAccess: l,
                  locked: e,
                });
            }),
            J(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = L.Z.getGuild(t.getGuildId());
              null != l &&
                (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("83331"),
                  ]).then(n.bind(n, 213202));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            J(this, "handleMouseEnter", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !0, hovered: !0 });
            }),
            J(this, "handleMouseLeave", () => {
              this.activitiesHideTimeout.start(100, () =>
                this.setState({ shouldShowActivities: !1, hovered: !1 }),
              );
            }),
            J(this, "closePopout", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !1 });
            }),
            J(this, "handleClick", () => {
              let { channel: e } = this.props,
                t = e.getGuildId();
              null != t && (0, E.n)(t) && (0, S.hk)(t),
                this.handleVoiceConnect();
            }),
            J(this, "handleVoiceStatusClick", (e) => {
              let { connected: t, channel: l } = this.props;
              t &&
                (e.stopPropagation(),
                (0, s.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.resolve().then(
                      n.bind(n, 339340),
                    );
                    return (t) => (0, i.jsx)(e, { channel: l, ...t });
                  },
                  { modalKey: m.VOICE_CHANNEL_STATUS_MODAL_KEY },
                ));
            }),
            J(this, "renderPopout", () => {
              let {
                  channel: e,
                  voiceStates: t,
                  sorting: n,
                  isUserOver: l,
                  selected: r,
                  guild: o,
                } = this.props,
                {
                  shouldShowActivities: a,
                  shouldShowGuildVerificationPopout: s,
                } = this.state;
              if (a && !n && !l && !s) {
                let n = P.SE.getSetting().includes(o.id);
                return (0, i.jsx)(W.Z, {
                  onAction: this.closePopout,
                  guild: o,
                  channel: e,
                  voiceStates: t,
                  isChannelSelected: r,
                  shouldShowSettingNudge: n,
                });
              }
              if (s)
                return (0, i.jsx)(y.Z, {
                  type: y.R.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render",
              );
            }),
            J(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(s.Tooltip, {
                  text: Q.intl.string(Q.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: o,
                      onFocus: a,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(s.Clickable, {
                      className: r()(X.iconItem, n ? X.alwaysShown : null),
                      onClick: () => {
                        c.Z.updateChatOpen(e.id, !0), (0, A.Kh)(e.id);
                      },
                      "aria-label": Q.intl.string(Q.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: o,
                      onFocus: a,
                      onBlur: u,
                      children: (0, i.jsx)(s.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: X.actionIcon,
                      }),
                    });
                  },
                });
            }),
            J(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNj) : null;
            });
        }
      }
      let ee = (0, d.B)((0, h.Q)($));
      function et(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: r,
            selected: a,
            collapsed: s,
            voiceStates: c,
          } = e,
          u = (0, o.cj)([O.ZP], () => ({
            unread: O.ZP.hasUnread(n.id),
            mentionCount: O.ZP.getMentionCount(n.id),
          })),
          d = (0, o.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)),
          h = (0, o.cj)([M.Z, w.Z, D.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
              i = w.Z.getCheck(n.guild_id);
            return {
              canManageChannel: D.Z.can(K.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === q._ ||
                  (null != e
                    ? D.Z.can(K.Plq.MANAGE_CHANNELS, e)
                    : D.Z.can(K.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: D.Z.can(K.Plq.MOVE_MEMBERS, n),
              locked: !D.Z.can(K.Plq.CONNECT, n),
              bypassLimit: D.Z.can(K.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          m = (0, o.e7)([G.Z], () => G.Z.hasVideo(n.id)),
          f = (0, p.ZP)(n),
          g = (0, C.ZP)(n),
          _ = (0, N.qY)(n.id),
          { isSubscriptionGated: v, needSubscriptionToAccess: x } = (0, Z.Z)(
            n.id,
          ),
          I = (0, b.Z)(),
          S = (0, o.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)),
          E = e.connected || (null == I ? void 0 : I.channelId) === n.id,
          { enableHangStatus: y, allowChannelTopic: A } = T.n.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
          ),
          j = (0, V.Z)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
          }),
          P = E && null == j;
        return (0, i.jsx)(ee, {
          channelName: g,
          embeddedApps: f,
          embeddedActivityType: K.IIU.PLAYING,
          video: m,
          hasActiveEvent: null != _,
          isSubscriptionGated: v,
          needSubscriptionToAccess: x,
          ...u,
          ...h,
          ...e,
          connected: E,
          isFavoriteSuggestion: r && !S,
          forceShowButtons: P,
          channelInfo: j,
          enableHangStatus: y,
          allowChannelTopic: A,
          resolvedUnreadSetting: d,
        });
      }
    },
    830993: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(616780),
        s = n(619915),
        c = n(620662),
        u = n(841784),
        d = n(471445),
        h = n(430824),
        p = n(496675),
        m = n(158776),
        f = n(979651),
        g = n(823379),
        C = n(355363),
        _ = n(449932),
        v = n(561788),
        x = n(135724),
        I = n(543432),
        b = n(981631),
        S = n(388032),
        E = n(684393);
      function Z(e) {
        var t, d;
        let {
          channel: h,
          guild: p,
          onAction: f,
          voiceStates: C,
          isChannelSelected: v,
          shouldShowSettingNudge: x,
        } = e;
        !(function (e, t) {
          let n = l.useMemo(() => {
            var n;
            return null == t || t.length > 50
              ? {}
              : {
                  [e.getGuildId()]:
                    null !==
                      (n = t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                      })) && void 0 !== n
                      ? n
                      : [],
                };
          }, [e, t]);
          (0, a.$)(n);
        })(h, C);
        let I = (0, s.ZP)(h),
          Z = Array.from((0, s.uF)(I).values()),
          y =
            null !== (t = null == C ? void 0 : C.filter(g.lm)) && void 0 !== t
              ? t
              : [],
          T = (e) => (t) =>
            ([b.IIU.PLAYING, b.IIU.WATCHING].includes(t.type) &&
              (null != t.assets ||
                null != t.state ||
                null != t.details ||
                null != t.party) &&
              (null == t.session_id ||
                t.session_id === e.voiceState.sessionId)) ||
            t.type === b.IIU.LISTENING,
          A = (0, r.e7)(
            [m.Z],
            () => {
              let e = {};
              return (
                y.forEach((t) => {
                  let n = m.Z.findActivity(t.user.id, T(t));
                  if (null != n && !(0, u.Z)(n)) {
                    var i, l, r, o;
                    let a = ""
                        .concat(
                          null !== (l = n.application_id) && void 0 !== l
                            ? l
                            : "",
                          ":",
                        )
                        .concat(
                          null !==
                            (r =
                              null === (i = n.party) || void 0 === i
                                ? void 0
                                : i.id) && void 0 !== r
                            ? r
                            : t.user.id,
                        ),
                      s =
                        null !== (o = e[a]) && void 0 !== o
                          ? o
                          : { members: [], activity: n };
                    s.members.push(t),
                      !(0, c.Z)(s.activity, b.xjy.JOIN) && (s.activity = n),
                      (e[a] = s);
                  }
                }),
                Object.values(e)
              );
            },
            [y],
            r.pF,
          );
        return A.length + Z.length === 0
          ? null
          : (0, i.jsxs)(o.Scroller, {
              className: E.container,
              children: [
                (0, i.jsx)(N, {
                  channel: h,
                  isChannelSelected: v,
                  voiceStatesCount:
                    null !== (d = null == C ? void 0 : C.length) && void 0 !== d
                      ? d
                      : 0,
                }),
                (0, i.jsx)("div", { className: E.headerDivider }),
                Z.map((e, t) => {
                  var n;
                  return (0, i.jsx)(
                    _.Z,
                    {
                      embeddedApp: e,
                      presenceActivity:
                        null !== (n = e.presenceActivity) && void 0 !== n
                          ? n
                          : void 0,
                      channel: h,
                      onAction: f,
                    },
                    t,
                  );
                }),
                A.map((e, t) => {
                  let { members: n, activity: l } = e;
                  return (0, i.jsx)(
                    _.Z,
                    {
                      presenceActivity: l,
                      channel: h,
                      members: n,
                      onAction: f,
                    },
                    t,
                  );
                }),
                x &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", { className: E.headerDivider }),
                      (0, i.jsx)("div", {
                        className: E.settingNudgeText,
                        children: (0, i.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          tag: "span",
                          children: S.intl.format(S.t.ePyoY2, {
                            onClick: () => {
                              (0, o.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  n.e("23217"),
                                  n.e("33053"),
                                  n.e("8016"),
                                  n.e("17298"),
                                  n.e("76540"),
                                  n.e("17938"),
                                  n.e("22646"),
                                  n.e("34842"),
                                  n.e("48923"),
                                  n.e("30419"),
                                  n.e("8821"),
                                  n.e("18824"),
                                  n.e("38175"),
                                  n.e("42309"),
                                  n.e("37229"),
                                  n.e("25183"),
                                  n.e("28044"),
                                  n.e("19081"),
                                  n.e("23419"),
                                ]).then(n.bind(n, 241420));
                                return (t) => (0, i.jsx)(e, { ...t, guild: p });
                              });
                            },
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
      function N(e) {
        let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
          o = (0, r.e7)([p.Z], () => !p.Z.can(b.Plq.CONNECT, t)),
          a = (0, r.e7)([f.Z], () => f.Z.hasVideo(t.id)),
          s = (0, C.ZP)({ channel: t, locked: o, video: a, selected: n }),
          c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
        return null == (0, d.KS)(t, c)
          ? null
          : (0, i.jsxs)("div", {
              className: E.popoutHeaderContainer,
              children: [
                (0, i.jsx)(v.Z, { channel: t }),
                s
                  ? (0, i.jsx)(x.Z, { userCount: l, video: a, channel: t })
                  : (0, i.jsx)(I.Z, { userCount: l }),
              ],
            });
      }
    },
    653577: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(481060),
        c = n(362721),
        u = n(12498),
        d = n(111028),
        h = n(454585),
        p = n(626135),
        m = n(981631),
        f = n(388032),
        g = n(316249),
        C = n(665162);
      function _(e) {
        let {
            channel: t,
            connected: n,
            hovered: r,
            subtitle: _,
            onClick: v,
            enableHangStatus: x,
            allowChannelTopic: I,
          } = e,
          b = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
          S = null != b && b.length > 0,
          E = (0, c.ZP)(t, !0),
          Z = (!x || !!I) && E,
          N = null != _ && _.length > 0;
        l.useEffect(() => {
          S &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
              guild_id: t.guild_id,
              channel_id: t.id,
            });
        }, [t.id, S, t.guild_id]);
        let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
        if (null == t.guild_id) return null;
        let T = o()(g.statusDiv, n && Z ? g.hoverable : null);
        if (S)
          return (0, i.jsx)(s.Clickable, {
            className: T,
            onClick: Z ? v : void 0,
            children: (0, i.jsx)(s.Text, {
              variant: "text-xs/medium",
              className: o()(g.statusText, C.markup),
              children: (0, i.jsx)(d.Z, {
                children: h.Z.parseVoiceChannelStatus(b, !0, {
                  channelId: t.id,
                }),
              }),
            }),
          });
        if (n && Z && (!N || r))
          return (0, i.jsxs)(s.Clickable, {
            className: T,
            onClick: v,
            children: [
              (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                className: g.statusText,
                children: f.intl.string(f.t.Mgpxi4),
              }),
              (0, i.jsx)(s.PencilIcon, {
                size: "custom",
                color: "currentColor",
                className: g.pencilIcon,
                width: y,
                height: y,
              }),
            ],
          });
        if (N) return (0, i.jsx)(d.Z, { children: _ });
        return null;
      }
    },
    280102: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(738523);
      function s(e) {
        let { total: t, users: n, videoLimit: l } = e;
        return (0, i.jsxs)("div", {
          className: a.wrapper,
          children: [
            (0, i.jsxs)("span", {
              className: r()(a.users, {
                [a.video]: l,
                [a.extraLong]: n >= 100,
              }),
              children: [
                l
                  ? (0, i.jsx)(o.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: a.videoIcon,
                    })
                  : null,
                n.toString().padStart(2, "0"),
              ],
            }),
            (0, i.jsx)("span", {
              className: r()(a.total, { [a.extraLong]: t >= 100 }),
              children: t.toString().padStart(2, "0"),
            }),
          ],
        });
      }
    },
    543432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(986038);
      function o(e) {
        let { userCount: t } = e;
        return (0, i.jsxs)("div", {
          className: r.container,
          children: [
            (0, i.jsx)(l.GroupIcon, {
              size: "xxs",
              color: "currentColor",
              className: r.peopleIcon,
            }),
            (0, i.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: r.userCountText,
              children: t,
            }),
          ],
        });
      }
    },
    378844: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
      });
      var i,
        l,
        r = n(200651);
      n(192379);
      var o = n(442837),
        a = n(481060),
        s = n(893776),
        c = n(391650),
        u = n(313201),
        d = n(144114),
        h = n(607744),
        p = n(594174),
        m = n(981631),
        f = n(815660),
        g = n(388032),
        C = n(496472);
      (i = l || (l = {}))[(i.VOICE = 0)] = "VOICE";
      t.Z = (e) => {
        let { type: t, guildId: i, closePopout: l } = e,
          _ = (0, u.Dt)(),
          {
            notClaimed: v,
            notEmailVerified: x,
            notPhoneVerified: I,
            newAccount: b,
            newMember: S,
          } = (0, o.e7)([h.Z], () => h.Z.getCheck(i), [i]),
          E = 0 === t ? g.intl.string(g.t["6zY8BA"]) : null,
          Z = null,
          N = null;
        return (0 === t &&
          (v
            ? ((Z = g.intl.string(g.t.IRxUlJ)), (N = g.intl.string(g.t.fiNVio)))
            : I
              ? ((Z = g.intl.string(g.t.vW8iUF)),
                (N = g.intl.string(g.t["50gfOj"])))
              : x
                ? ((Z = g.intl.string(g.t.vdSOp6)),
                  (N = g.intl.string(g.t.lm1UKi)))
                : S
                  ? ((Z = g.intl.formatToPlainString(g.t.v1ktYW, {
                      min: m.YeM.MEMBER_AGE,
                    })),
                    (N = g.intl.string(g.t.BddRzc)))
                  : b &&
                    ((Z = g.intl.formatToPlainString(g.t["sncw4+"], {
                      min: m.YeM.ACCOUNT_AGE,
                    })),
                    (N = g.intl.string(g.t.BddRzc)))),
        null == E || null == Z)
          ? null
          : (0, r.jsxs)(a.Dialog, {
              className: C.container,
              "aria-labelledby": _,
              children: [
                (0, r.jsx)("img", {
                  alt: "",
                  className: C.image,
                  src: n(64395),
                }),
                (0, r.jsxs)("div", {
                  className: C.content,
                  children: [
                    (0, r.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      id: _,
                      children: E,
                    }),
                    (0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: Z,
                    }),
                    (0, r.jsxs)("div", {
                      className: C.buttonContainer,
                      children: [
                        null != N
                          ? (0, r.jsx)(a.Button, {
                              onClick: () => {
                                v
                                  ? c.j()
                                  : I
                                    ? (0, a.openModalLazy)(
                                        async () => {
                                          let { default: e } =
                                            await Promise.all([
                                              n.e("76540"),
                                              n.e("51501"),
                                            ]).then(n.bind(n, 607018));
                                          return (t) =>
                                            (0, r.jsx)(e, {
                                              reason: d.L.GUILD_PHONE_REQUIRED,
                                              ...t,
                                            });
                                        },
                                        { modalKey: f.M },
                                      )
                                    : x &&
                                      (s.Z.verifyResend(),
                                      (0, a.openModal)((e) => {
                                        var t;
                                        return (0, r.jsx)(a.ConfirmModal, {
                                          header: g.intl.string(g.t.LykQYm),
                                          confirmText: g.intl.string(
                                            g.t.BddRzc,
                                          ),
                                          confirmButtonColor:
                                            a.Button.Colors.BRAND,
                                          ...e,
                                          children: (0, r.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(
                                              g.t.azKEPz,
                                              {
                                                email:
                                                  null ===
                                                    (t =
                                                      p.default.getCurrentUser()) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.email,
                                              },
                                            ),
                                          }),
                                        });
                                      })),
                                  l();
                              },
                              className: C.primaryButton,
                              children: N,
                            })
                          : null,
                        v || I || x
                          ? (0, r.jsx)(a.Button, {
                              onClick: l,
                              look: a.Button.Looks.BLANK,
                              className: C.cancel,
                              children: g.intl.string(g.t.oEAioK),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              ],
            });
      };
    },
    289090: function (e, t, n) {
      var i, l;
      n.d(t, {
        S: function () {
          return i;
        },
      }),
        ((l = i || (i = {}))[(l.PENDING_JOIN_REQUESTS_FOLDER = 1)] =
          "PENDING_JOIN_REQUESTS_FOLDER");
    },
    605951: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(192379),
        l = n(914010);
      function r(e) {
        i.useEffect(() => {
          let t = null;
          function n() {
            let n = l.Z.getGuildId();
            if (n !== t)
              (t = null != n ? n : null), e(null != n ? n : null, !1);
          }
          return (
            l.Z.addChangeListener(n),
            () => {
              l.Z.removeChangeListener(n);
            }
          );
        }, [e]);
      }
    },
    278464: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var i = n(512969),
        l = n(905423),
        r = n(981631);
      function o() {
        let e = (0, l.Z)((e) => e.guildId),
          { pathname: t } = (0, i.TH)(),
          n =
            t.startsWith(r.Z5c.GUILD_DISCOVERY) ||
            t.startsWith(r.Z5c.GLOBAL_DISCOVERY),
          o = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION("")),
          a = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        return null == e && !(n || o || a);
      }
    },
    61634: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var i = n(106351),
        l = n(442837),
        r = n(595519),
        o = n(317381),
        a = n(470883),
        s = n(750881),
        c = n(554747),
        u = n(146085),
        d = n(427679),
        h = n(131704),
        p = n(199902),
        m = n(314897),
        f = n(592125),
        g = n(430824),
        C = n(496675),
        _ = n(699516),
        v = n(944486),
        x = n(9156),
        I = n(979651),
        b = n(709054),
        S = n(981631);
      function E(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Z;
        return (
          null != e &&
          e.type !== i.d.GUILD_STAGE_VOICE &&
          t !== e.id &&
          n.canBasicChannel(S.S7T.VIEW_CHANNEL, e)
        );
      }
      function Z(e) {
        var t;
        let n = (0, l.e7)([x.ZP], () => x.ZP.isMuted(e)),
          i = (0, c.k5)(e),
          { enabled: S } = (0, s.bA)("use-guild-media-state"),
          Z = (0, l.Wu)([o.ZP, _.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return S
              ? t.filter(
                  (e) =>
                    !(0, a.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs()),
                )
              : t;
          }),
          N = (0, r.NX)(
            null === (t = Z[0]) || void 0 === t ? void 0 : t.channelId,
          ),
          {
            guildHasVoice: y,
            guildHasVideo: T,
            selectedVoiceChannelHasVideo: A,
          } = (0, l.cj)(
            [v.Z, I.Z, g.Z, C.Z, f.Z],
            () => {
              var t;
              let i = v.Z.getVoiceChannelId(),
                l =
                  null === (t = g.Z.getGuild(e)) || void 0 === t
                    ? void 0
                    : t.afkChannelId,
                r = I.Z.getUsersWithVideo(e),
                o = S
                  ? (0, a.DX)(I.Z.getVoiceStates(e))
                  : I.Z.getVoiceStates(e),
                s = (() => {
                  if (n) return !1;
                  for (let e in o)
                    if (
                      E(
                        f.Z.getBasicChannel(o[e].channelId),
                        null != l ? l : void 0,
                        C.Z,
                      )
                    )
                      return !0;
                  return !1;
                })();
              return {
                guildHasVoice: s,
                guildHasVideo: (() => {
                  if (n) return !1;
                  for (let t of r) {
                    var e;
                    if (
                      E(
                        f.Z.getBasicChannel(
                          null === (e = o[t]) || void 0 === e
                            ? void 0
                            : e.channelId,
                        ),
                        null != l ? l : void 0,
                        C.Z,
                      )
                    )
                      return !0;
                  }
                  return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && I.Z.hasVideo(i),
              };
            },
            [S, e, n],
          ),
          j = m.default.getId();
        return (0, l.cj)(
          [v.Z, f.Z, o.ZP, d.Z, p.Z, C.Z],
          () => {
            var t, l, r;
            let s = v.Z.getVoiceChannelId(),
              c =
                (null === (t = f.Z.getChannel(s)) || void 0 === t
                  ? void 0
                  : t.guild_id) === e,
              m = !1,
              g = !1,
              _ = !1,
              x = !1,
              I = !1,
              E = !1;
            if (!c && n)
              return {
                audio: m,
                video: x,
                screenshare: I,
                liveStage: _,
                activeEvent: g,
                activity: E,
                isCurrentUserConnected: !1,
              };
            let P = b.default
                .keys(d.Z.getStageInstancesByGuild(e))
                .some((e) => {
                  let t = f.Z.getChannel(e);
                  return null != t && C.Z.can(u.gl, t);
                }),
              R =
                c &&
                null !==
                  (r =
                    null === (l = f.Z.getChannel(s)) || void 0 === l
                      ? void 0
                      : l.isGuildStageVoice()) &&
                void 0 !== r &&
                r,
              M = !!c && null != p.Z.getActiveStreamForUser(j, e),
              L = (
                S
                  ? (0, a.aK)(p.Z.getAllApplicationStreams())
                  : p.Z.getAllApplicationStreams()
              ).some((t) => t.guildId === e),
              w = c && A,
              D = (() => {
                if (N) return Z.length > 0;
                for (let e of Z) {
                  let t = f.Z.getChannel(e.channelId);
                  if (null != t && (0, h.vd)(t.type)) return !0;
                }
                return !1;
              })(),
              O = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
              c
                ? ((m = !0),
                  (g = (null == i ? void 0 : i.channel_id) === s),
                  (_ = R),
                  (x = w),
                  (I = M),
                  (E = O))
                : ((m = y),
                  (g = null != i),
                  (_ = P),
                  (x = T),
                  (I = L),
                  (E = D)),
              {
                audio: m,
                video: x,
                screenshare: I,
                liveStage: _,
                activeEvent: g,
                activity: E,
                isCurrentUserConnected: c || R,
              }
            );
          },
          [e, n, S, A, j, N, Z, i, y, T],
        );
      }
    },
    234383: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(937111),
        r = n(430824);
      function o() {
        return (0, i.Wu)([l.Z, r.Z], () => {
          let e = l.Z.computeGuildIds(),
            t = r.Z.getGuilds();
          return e.filter((e) => null == t[e]);
        });
      }
    },
    919436: function (e, t, n) {
      n(411104), n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(752877),
        a = n(91192),
        s = n(442837),
        c = n(481060),
        u = n(239091),
        d = n(358221),
        h = n(43267),
        p = n(933557),
        m = n(93687),
        f = n(266076),
        g = n(199902),
        C = n(19780),
        _ = n(306680),
        v = n(944486),
        x = n(594174),
        I = n(451478),
        b = n(276952),
        S = n(682662),
        E = n(662146),
        Z = n(674552),
        N = n(981631),
        y = n(646819);
      function T(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let A = { friction: 28, tension: 600 };
      function j(e) {
        switch (e) {
          case "height":
          case "opacity":
            return { duration: 150, ...A };
          case "scale":
            return { ...A };
          default:
            throw Error(
              "DirectMessage: getSpringConfigs() - Invalid spring ".concat(
                String(e),
              ),
            );
        }
      }
      class P extends (i = r.PureComponent) {
        componentWillEnter(e) {
          let { controller: t } = this.state;
          e(),
            t
              .update({
                immediate: !I.Z.isFocused(),
                height: 1,
                opacity: 1,
                scale: 1,
                config: j,
              })
              .start()
              .then(() => this.setState({ animating: !1 }));
        }
        componentWillAppear(e) {
          let { controller: t } = this.state;
          t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: j,
          })
            .start()
            .then(e);
        }
        componentWillLeave(e) {
          let { controller: t } = this.state;
          this.setState({ animating: !0 }, () =>
            t
              .update({
                immediate: !I.Z.isFocused(),
                height: 0,
                opacity: 0,
                scale: 0,
                config: j,
              })
              .start()
              .then(e),
          );
        }
        componentWillUnmount() {
          this.state.controller.dispose();
        }
        getAnimatedStyle() {
          let { controller: e } = this.state,
            { opacity: t, height: n, scale: i } = e.springs;
          return {
            opacity: t,
            height: n.to([0, 1], [0, 56]),
            transform: i
              .to([0, 1], [0.5, 1])
              .to((e) => "scale(".concat(e, ")")),
          };
        }
        getChannelIcon() {
          let { channel: e } = this.props,
            t =
              e.type === N.d4z.DM
                ? x.default.getUser(e.getRecipientId())
                : null;
          return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e);
        }
        render() {
          let {
              channel: e,
              channelName: t,
              selected: n,
              badge: i,
              audio: r,
              video: s,
              stream: u,
              isCurrentUserInThisDMCall: d,
              unread: h,
              isGDMFacepileEnabled: p,
            } = this.props,
            { hovered: m, animating: g } = this.state,
            C = e.isMultiUserDM() && null == e.icon && p;
          return (0, l.jsx)(o.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(S.H, {
              children: [
                (0, l.jsx)(b.Z, {
                  hovered: !g && m,
                  selected: !g && n,
                  unread: !g && h,
                  className: y.pill,
                }),
                (0, l.jsx)(E.Z, {
                  text: null != t ? t : "",
                  selected: n,
                  children: (0, l.jsx)(c.BlobMask, {
                    selected: n || m,
                    lowerBadge: i > 0 ? (0, Z.Ne)(i) : null,
                    upperBadge: (0, Z.Or)({
                      audio: r,
                      video: s,
                      screenshare: u,
                      isCurrentUserConnected: d,
                    }),
                    lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(i) },
                    children: (0, l.jsx)(a.mh, {
                      id: e.id,
                      children: (i) =>
                        (0, l.jsx)(c.NavItem, {
                          to: N.Z5c.CHANNEL(N.ME, e.id),
                          onMouseEnter: () => this.setState({ hovered: !0 }),
                          onMouseLeave: () => this.setState({ hovered: !1 }),
                          selected: n || m,
                          ariaLabel: null != t ? t : "",
                          onContextMenu: this.handleContextMenu,
                          icon: C ? void 0 : this.getChannelIcon(),
                          backgroundStyle: C ? "on-hover" : "always",
                          children: C
                            ? (0, l.jsx)(f.Z, {
                                channel: e,
                                size: c.AvatarSizes.SIZE_48,
                                facepileSizeOverride: c.AvatarSizes.SIZE_32,
                                experimentLocation: "unread_gdm",
                                "aria-hidden": !0,
                              })
                            : void 0,
                          ...i,
                        }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            T(this, "state", {
              hovered: !1,
              animating: !0,
              controller: new o.Controller({
                scale: 0,
                height: 0,
                opacity: 0,
                config: j,
              }),
            }),
            T(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                i =
                  t.type === N.d4z.DM
                    ? x.default.getUser(t.getRecipientId())
                    : null;
              null != i
                ? (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("92453"),
                      n.e("56826"),
                      n.e("5606"),
                    ]).then(n.bind(n, 131404));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, user: i });
                  })
                : (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, l.jsx)(e, { ...n, channel: t, selected: !1 });
                  });
            });
        }
      }
      T(P, "defaultProps", {
        badge: 0,
        audio: !1,
        video: !1,
        isCurrentUserInThisDMCall: !1,
      }),
        (t.Z = r.forwardRef(function (e, t) {
          let n = e.channel.id,
            i = (0, p.ZP)(e.channel),
            r = (0, s.e7)([C.Z], () => C.Z.getChannelId(), []),
            o = (0, s.e7)(
              [d.Z],
              () => (null != r ? d.Z.getMode(r) : N.WtW.VOICE),
              [r],
            ),
            a = (0, s.e7)(
              [g.Z],
              () => g.Z.getAllApplicationStreamsForChannel(n).length > 0,
            ),
            c = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
            u = (0, s.e7)([_.ZP], () => _.ZP.getMentionCount(n), [n]),
            { isFacepileEnabled: h } = m.Z.useExperiment(
              { location: "unread_direct_message" },
              { autoTrackExposure: !1 },
            ),
            f = r === n,
            x = !1,
            I = !1;
          return (
            f && ((x = o === N.WtW.VOICE), (I = o === N.WtW.VIDEO)),
            (0, l.jsx)(P, {
              ...e,
              ref: t,
              channelName: i,
              unread: u > 0,
              selected: c === n,
              badge: u,
              audio: x,
              video: I,
              stream: a,
              isCurrentUserInThisDMCall: f,
              isGDMFacepileEnabled: h,
            })
          );
        }));
    },
    199540: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(752877),
        s = n(866442),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(540059),
        p = n(565138),
        m = n(430824),
        f = n(624138),
        g = n(674552),
        C = n(981631),
        _ = n(388032),
        v = n(10448);
      let x = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        I = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
        b = [
          "12px 4px 4px 4px",
          "4px 12px 4px 4px",
          "4px 4px 4px 12px",
          "4px 4px 12px 4px",
        ];
      function S(e) {
        let { guildId: t, animate: n, index: l } = e,
          r = (0, c.e7)([m.Z], () => m.Z.getGuild(t), [t]),
          o = (0, h.Q)("GuildIcon");
        return null == r
          ? (0, i.jsx)("div", {
              className: v.guildIconUnavailable,
              children: "!",
            })
          : (0, i.jsx)(p.Z, {
              guild: r,
              animate: n,
              size: o ? p.Z.Sizes.MINI : p.Z.Sizes.SMOL,
              className: v.guildIcon,
              tabIndex: -1,
              style: o ? { borderRadius: b[l] } : void 0,
            });
      }
      function E(e) {
        let t,
          n,
          { folderNode: r, hovered: o, expanded: c } = e,
          u = (0, h.Q)("FolderIconContent"),
          { color: p, children: m } = r,
          f = null != p ? p : C.Wyy,
          g = m.map((e) => e.id),
          [_, b] = l.useState(!1),
          [E, Z] = l.useState(c),
          N = c ? 0 : -I,
          y = (0, d.useSpring)(
            {
              transform: "translate3d(0, ".concat(N, "px, 0)"),
              config: { duration: x },
              onStart() {
                b(!0), Z(c);
              },
              onRest() {
                b(!1), Z(c);
              },
            },
            "animate-always",
          ),
          T = _ ? y : void 0;
        return (
          (_ || E) &&
            (t = (0, i.jsx)(a.animated.div, {
              style: T,
              className: v.expandedFolderIconWrapper,
              children: (0, i.jsx)(d.FolderIcon, {
                size: u ? "sm" : "md",
                color: "currentColor",
                style: { color: (0, s.Rf)(f) },
              }),
            })),
          (_ || !E) &&
            (n = (0, i.jsx)(a.animated.div, {
              style: T,
              className: v.closedFolderIconWrapper,
              children: g
                .slice(0, 4)
                .map((e, t) =>
                  (0, i.jsx)(S, { index: t, guildId: e, animate: o }, e),
                ),
            })),
          (0, i.jsxs)("div", {
            "aria-hidden": !0,
            style: c ? void 0 : { backgroundColor: (0, s.br)(f, 0.4) },
            className: v.folderIconWrapper,
            children: [t, n],
          })
        );
      }
      function Z(e) {
        let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: a,
            mediaState: s,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: p,
            folderIconContent: m,
            onClick: f,
            onContextMenu: C,
            onHoverChange: x,
            onKeyDown: I,
            treeItemProps: { onFocus: b, ...S },
          } = e,
          [Z, N] = l.useState(!1),
          y = l.useCallback(() => {
            a || N(!0), null == x || x(!0);
          }, [a, x]),
          T = l.useCallback(() => {
            a || N(!1), null == x || x(!1);
          }, [a, x]),
          A = (0, h.Q)("FolderHeader"),
          j = r || null == s ? null : (0, g.Or)(s),
          P = !r && c > 0 ? (0, g.Ne)(c) : null;
        return (0, i.jsx)(d.BlobMask, {
          isFolder: !0,
          style: A ? { width: 52, height: 52 } : void 0,
          selected: !!A || !n,
          upperBadge: j,
          lowerBadge: P,
          lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
          children: (0, i.jsx)(d.Clickable, {
            className: o()(v.folder, { [v.hover]: Z }),
            onClick: f,
            onContextMenu: C,
            onMouseEnter: y,
            onMouseLeave: T,
            onKeyDown: I,
            onFocus: b,
            "aria-label": _.intl.formatToPlainString(_.t["90/DwM"], {
              folderName: u,
              mentions: c,
            }),
            "aria-expanded": r,
            "aria-owns": p,
            focusProps: { enabled: !1 },
            ...S,
            role: "treeitem",
            children:
              null != m
                ? (0, i.jsx)("div", {
                    className: v.expandedFolderIconWrapper,
                    children: m,
                  })
                : (0, i.jsx)(E, { folderNode: t, hovered: Z, expanded: r }),
          }),
        });
      }
    },
    249792: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(752877),
        a = n(692547),
        s = n(481060),
        c = n(565138),
        u = n(252686),
        d = n(10448);
      function h(e) {
        let {
            guild: t,
            show: n,
            active: l,
            onAnimationStart: h,
            onAnimationRest: p,
          } = e,
          m = {},
          f = {};
        (m.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
          (f.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
        let g = (0, s.useToken)(a.Z.unsafe_rawColors.BRAND_500).hex(),
          C = (0, s.useToken)(a.Z.unsafe_rawColors.PRIMARY_630).hex();
        l &&
          null == t.icon &&
          ((m.backgroundColor = g), (f.backgroundColor = C));
        let _ = (0, s.useTransition)(n, {
          from: m,
          enter: f,
          leave: m,
          config: { duration: 100 },
          onStart: h,
          onRest: p,
        });
        return (0, i.jsx)(i.Fragment, {
          children: _(
            (e, n, l) =>
              n &&
              (0, i.jsx)(
                "div",
                {
                  className: r()(d.folder, d.hover),
                  children: (0, i.jsx)("div", {
                    className: d.folderIconWrapper,
                    children: (0, i.jsxs)("div", {
                      className: d.closedFolderIconWrapper,
                      children: [
                        (0, i.jsx)(o.animated.div, {
                          className: d.folderIconPreview,
                          style: e,
                          children: (0, i.jsx)(c.Z, {
                            guild: t,
                            size: c.Z.Sizes.SMOL,
                            className: d.guildIcon,
                          }),
                        }),
                        (0, i.jsx)(u.Z, { className: d.miniPlaceholder }),
                      ],
                    }),
                  }),
                },
                l.key,
              ),
          ),
        });
      }
    },
    40153: function (e, t, n) {
      n.d(t, {
        OG: function () {
          return b;
        },
        Zu: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(512722),
        s = n.n(a),
        c = n(584922),
        u = n(749210),
        d = n(626135),
        h = n(727258),
        p = n(662146),
        m = n(981631),
        f = n(388032),
        g = n(414080);
      function C(e) {
        let t = l.useRef(null),
          n = e.map((e) => e[0]);
        return (
          l.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
              let n = t.current;
              if (null != n)
                for (let [t, i] of e)
                  t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
          }, n),
          t
        );
      }
      function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return (
          s()(
            t.type !== h.eD.ROOT,
            "[GuildDropTarget] Tried using a root node as a drop target.",
          ),
          {
            accept: e,
            canDrop: (e) =>
              e.nodeId !== t.id &&
              (!i || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) &&
              (e.type !== h.eD.FOLDER || null == t.parentId) &&
              !0,
            drop(e) {
              let { nodeId: l } = e;
              i &&
                t.type !== h.eD.FOLDER &&
                d.default.track(m.rMx.GUILD_FOLDER_CREATED),
                u.Z.moveById(l, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
          }
        );
      }
      function v(e) {
        let { name: t, targetNode: n, combine: r, below: a } = e,
          s = l.useMemo(() => _([h.eD.GUILD, h.eD.FOLDER], n, a, r), [n, a, r]),
          [{ canDrop: u, isOver: d }, p] = (0, c.L)(s),
          m = C([
            [u, g.autoPointerEvents],
            [d, g.dragOver],
          ]);
        return (0, i.jsx)("div", {
          ref: (e) => {
            (m.current = e), p(e);
          },
          "data-dnd-name": f.intl.formatToPlainString(f.t.A5aDw8, {
            itemName: t,
          }),
          className: o()(g.target),
        });
      }
      function x(e) {
        let { name: t, targetNode: n, onDragOverChanged: r } = e,
          [{ canDrop: a, isOver: s }, u] = (0, c.L)(() =>
            _([h.eD.GUILD], n, !0, !0),
          );
        l.useEffect(() => {
          null == r || r(s);
        }, [r, s]);
        let d = C([
          [a, g.autoPointerEvents],
          [s, g.dragOver],
        ]);
        return (0, i.jsx)(p.Z, {
          text: t,
          shouldShow: s,
          forceOpen: s,
          disableWrapper: !0,
          tooltipClass: g.centerTargetTooltip,
          children: (0, i.jsx)("div", {
            ref: (e) => {
              (d.current = e), u(e);
            },
            "data-dnd-name": f.intl.formatToPlainString(f.t.qiQ0QE, {
              itemName: t,
            }),
            className: o()(g.centerTarget, {}),
          }),
        });
      }
      function I(e) {
        let { name: t, targetNode: n } = e,
          [{ canDrop: l, isOver: r }, a] = (0, c.L)(() =>
            _([h.eD.GUILD], n, !0, !0),
          ),
          s = C([[r, g.wrapperOver]]),
          u = C([
            [r, g.dragOver],
            [l, g.autoPointerEvents],
          ]);
        return (0, i.jsx)("div", {
          ref: s,
          className: o()(g.folderEndWrapper),
          "aria-hidden": !0,
          children: (0, i.jsx)("div", {
            className: g.folderTarget,
            children: (0, i.jsx)("div", {
              ref: (e) => {
                (u.current = e), a(e);
              },
              "aria-label": "At end of ".concat(t),
              className: o()(g.target),
            }),
          }),
        });
      }
      function b(e) {
        let { children: t } = e,
          [, n] = (0, c.L)({ accept: [] });
        return (0, i.jsx)("div", { ref: n, children: t });
      }
      t.ZP = l.memo(function (e) {
        let {
            name: t,
            targetNode: n,
            noCombine: l = !1,
            below: r = !1,
            onDragOverChanged: o,
          } = e,
          a = !l && null == n.parentId;
        return (0, i.jsxs)("div", {
          className: g.wrapper,
          "aria-hidden": !0,
          children: [
            (0, i.jsx)(v, { name: t, targetNode: n, below: r }),
            a
              ? (0, i.jsx)(x, { name: t, targetNode: n, onDragOverChanged: o })
              : null,
          ],
        });
      });
    },
    416568: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(392711),
        s = n.n(a),
        c = n(512969),
        u = n(91192),
        d = n(374470),
        h = n(442837),
        p = n(902704),
        m = n(846519),
        f = n(481060),
        g = n(925549),
        C = n(209613),
        _ = n(100527),
        v = n(906732),
        x = n(358221),
        I = n(540059),
        b = n(706590),
        S = n(940777),
        E = n(41776),
        Z = n(905423),
        N = n(802718),
        y = n(796974),
        T = n(271383),
        A = n(430824),
        j = n(771845),
        P = n(358085),
        R = n(709054),
        M = n(727258),
        L = n(605951),
        w = n(474109),
        D = n(741616),
        O = n(187835),
        k = n(118122),
        G = n(193154),
        U = n(602147),
        B = n(416637),
        H = n(222059),
        V = n(751277),
        F = n(65721),
        W = n(843343),
        z = n(654142),
        Y = n(695301),
        K = n(836697),
        q = n(921230),
        Q = n(981631),
        X = n(388032),
        J = n(192069);
      function $(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let ee = (0, P.isWindows)() ? 4 : (0, P.isMac)() ? 0 : 12;
      class et {
        setGuildsTree(e) {
          this.guildsTree = e;
        }
        constructor(e, t, n, i) {
          $(this, "guildsTree", void 0),
            $(this, "setScrolling", void 0),
            $(this, "onScroll", void 0),
            $(this, "sizes", void 0),
            $(this, "scrollerRef", void 0),
            $(this, "nodeRefs", void 0),
            $(this, "timeout", void 0),
            $(this, "isScrolling", void 0),
            $(this, "scrollToGuild", void 0),
            $(this, "handleJumpToGuild", void 0),
            $(this, "scrollTo", void 0),
            $(this, "isItemVisible", void 0),
            $(this, "handleScroll", void 0),
            $(this, "_handleScrollDebounced", void 0),
            $(this, "setNodeRef", void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.sizes = i),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
            (this.isScrolling = !1),
            (this.scrollToGuild = (e, t) => {
              let n = this.scrollerRef.current;
              if (
                null == n ||
                (null == e &&
                  window.location.pathname.startsWith(Q.Z5c.GUILD_DISCOVERY)) ||
                e === Q.x8Z.SERVER_DISCOVERY_BADGE ||
                e === Q.x8Z.E3_SERVER_DISCOVERY_BADGE
              )
                return;
              if (null == e) {
                n.scrollTo({ to: 0, animate: t });
                return;
              }
              let i = this.nodeRefs[e];
              for (; null == i; ) {
                let t = this.guildsTree.getNode(e);
                if ((null == t ? void 0 : t.parentId) == null) break;
                i = this.nodeRefs[t.parentId];
              }
              null != i && (0, d.k)(i)
                ? n.scrollIntoViewNode({ node: i, animate: t, padding: 8 })
                : n.scrollTo({ to: 0, animate: t });
            }),
            (this.handleJumpToGuild = (e) => {
              this.scrollToGuild(e, !0);
            }),
            (this.scrollTo = (e) => {
              var t;
              null === (t = this.scrollerRef.current) ||
                void 0 === t ||
                t.scrollTo(e);
            }),
            (this.isItemVisible = (e, t, n) => {
              let {
                  iconTotalSize: i,
                  badgeVisibleBuffer: l,
                  heightBeforeIcons: r,
                } = this.sizes,
                o = this.scrollerRef.current;
              if (null == o) return !1;
              let a = n.findIndex((t) =>
                "string" == typeof t || null == t ? t === e : t.includes(e),
              );
              if (a < 0) return !1;
              let s = i * a + r;
              !t && (s += l);
              let c = o.getScrollerState();
              return (
                (!t && !!(s >= c.scrollTop)) ||
                (!!t && !!(s + i <= c.scrollTop + c.offsetHeight)) ||
                !1
              );
            }),
            (this.handleScroll = () => {
              !this.isScrolling && this.setScrolling(!0),
                this.timeout.start(200, () => this.setScrolling(!1)),
                this._handleScrollDebounced();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
              let e = this.scrollerRef.current;
              if (null == e) return;
              let { scrollTop: t } = e.getScrollerState();
              g.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this.setNodeRef = (e, t) => {
              this.nodeRefs[e] = t;
            });
        }
      }
      function en(e) {
        let {
            disableAppDownload: t = P.isPlatformEmbedded,
            isOverlay: n = !1,
            className: r,
            themeOverride: a,
          } = e,
          s = (0, I.Q)("GuildsBar"),
          { density: d } = (0, f.useThemeContext)(),
          [p] = (0, h.Wu)([j.ZP], () => {
            let e = j.ZP.getGuildsTree();
            return [e, e.version];
          }),
          g = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
          C = l.useMemo(() => (n ? [] : g), [g, n]),
          $ = (0, h.Wu)([A.Z, T.ZP], () =>
            R.default
              .keys(A.Z.getGuilds())
              .filter((e) => T.ZP.isCurrentUserGuest(e)),
          ),
          en = C.concat($),
          ei = (0, h.e7)([x.Z], () => x.Z.isFullscreenInContext()),
          el = (0, h.e7)([A.Z], () => A.Z.getGeoRestrictedGuilds()),
          [er, eo] = l.useState(!1),
          ea = l.useCallback(() => eo(!0), []),
          es = l.useCallback(() => eo(!1), []),
          ec = l.useRef(!1),
          [eu] = l.useState(() => new m.V7()),
          ed = l.useRef(null),
          eh = l.useRef(null),
          { ref: ep, ...em } = (0, u.OP)(),
          ef = (0, f.useFocusJumpSection)(),
          [eg, eC] = l.useState(!1),
          e_ = l.useMemo(
            () =>
              new et(
                p,
                eC,
                () => {
                  var e, t;
                  null === (e = ed.current) ||
                    void 0 === e ||
                    e.calculateState(),
                    null === (t = eh.current) ||
                      void 0 === t ||
                      t.calculateState();
                },
                (function (e, t) {
                  let n = e ? 40 : 44,
                    i = e && "cozy" === t ? 12 : 8,
                    l = n + i,
                    r = 2 + i;
                  return {
                    iconSize: n,
                    iconMargin: i,
                    iconTotalSize: l,
                    badgeVisibleBuffer: l - 16,
                    separatorSize: r,
                    heightBeforeIcons: ee + r,
                  };
                })(s, d),
              ),
            [d, p, s],
          ),
          { analyticsLocations: ev } = (0, v.ZP)(_.Z.GUILDS_LIST),
          { pathname: ex } = (0, c.TH)(),
          eI =
            ex.startsWith(Q.Z5c.GUILD_DISCOVERY) ||
            ex.startsWith(Q.Z5c.GLOBAL_DISCOVERY),
          eb = ex.startsWith(Q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        l.useLayoutEffect(() => {
          if (!ec.current) {
            if (0 !== p.size) {
              if (eI) e_.scrollToGuild(null, !1);
              else {
                let { scrollTop: e } = y.Z.getGuildListDimensions();
                e_.scrollTo({ to: e, animate: !1 });
              }
              return (ec.current = !0), () => eu.stop();
            }
          }
        }, []),
          l.useEffect(() => {
            if ((e_.setGuildsTree(p), ec.current || 0 === p.size)) return;
            let e = Z.Z.getState().guildId;
            e_.scrollToGuild(e, !1);
            let t = null;
            return Z.Z.subscribe((e) => {
              let { guildId: n } = e;
              n !== t && ((t = n), e_.scrollToGuild(t, !1));
            });
          }, [p, e_]);
        let eS = l.useCallback(() => {
          e_.scrollTo({ to: 0, animate: !1 });
        }, [e_]);
        function eE(e) {
          switch (e.type) {
            case M.eD.FOLDER:
              return (0, i.jsx)(
                z.Z,
                {
                  folderNode: e,
                  setNodeRef: e_.setNodeRef,
                  draggable: !0,
                  sorting: er,
                  onDragStart: ea,
                  onDragEnd: es,
                  renderChildNode: eE,
                },
                e.id,
              );
            case M.eD.GUILD:
              return (0, i.jsx)(
                Y.Z,
                {
                  guildNode: e,
                  setRef: e_.setNodeRef,
                  draggable: !0,
                  sorting: er,
                  onDragStart: ea,
                  onDragEnd: es,
                },
                e.id,
              );
            default:
              return null;
          }
        }
        (0, L.Z)(e_.scrollToGuild);
        let eZ = p.getRoots(),
          eN = (0, b.Z)(),
          ey = (0, N.U)(),
          eT = el.map((e) =>
            (0, i.jsx)(G.Z, { id: e.id, name: e.name, icon: e.icon }, e.id),
          );
        return (0, i.jsx)(v.Gt, {
          value: ev,
          children: (0, i.jsx)(f.ThemeProvider, {
            theme: a,
            children: (e) =>
              (0, i.jsx)("nav", {
                className: o()(J.wrapper, r, e, { [J.hidden]: ei }),
                "aria-label": X.intl.string(X.t.PjnF2t),
                children: (0, i.jsxs)("ul", {
                  ref: ep,
                  ...em,
                  ...ef,
                  role: "tree",
                  className: J.tree,
                  children: [
                    (0, i.jsx)(w.Z, {
                      ref: ed,
                      isVisible: e_.isItemVisible,
                      onJumpTo: e_.handleJumpToGuild,
                      className: J.unreadMentionsIndicatorTop,
                      barClassName: J.unreadMentionsBar,
                    }),
                    (0, i.jsxs)("div", {
                      className: J.itemsContainer,
                      children: [
                        (0, i.jsxs)(f.AdvancedScrollerNone, {
                          className: o()({
                            [J.scroller]: !0,
                            [J.scrolling]: eg,
                          }),
                          experimental_useStack: s,
                          gap: "xs",
                          ref: e_.scrollerRef,
                          onScroll: e_.handleScroll,
                          children: [
                            (0, i.jsx)(H.u, {}),
                            eN ? (0, i.jsx)(S.Z, {}) : null,
                            (0, i.jsx)(V.Z, { isOnHubVerificationRoute: eb }),
                            (0, i.jsx)(D.Z, {}),
                            ey,
                            en.map((e) => (0, i.jsx)(q.Z, { guildId: e }, e)),
                            (0, i.jsx)(K.Z, { onActivate: eS }),
                            (0, i.jsx)(F.Z, {}),
                            s
                              ? (0, i.jsx)(f.Stack, {
                                  gap: "xs",
                                  "aria-label": X.intl.string(X.t["7hB4kp"]),
                                  children: eZ.map(eE),
                                })
                              : (0, i.jsx)("div", {
                                  "aria-label": X.intl.string(X.t["7hB4kp"]),
                                  children: eZ.map(eE),
                                }),
                            eT,
                            n
                              ? null
                              : (0, i.jsx)(k.Z, {
                                  disableTooltip: C.length > 0,
                                  lastTargetNode: eZ[eZ.length - 1],
                                }),
                            (0, i.jsx)(W.Z, {}),
                            t ? null : (0, i.jsx)(O.Z, {}),
                          ],
                        }),
                        n
                          ? null
                          : (0, i.jsx)(B.g, {
                              children: (0, i.jsx)(U.Z, {
                                selected: eI,
                                className: J.fixedDiscoveryIcon,
                              }),
                            }),
                      ],
                    }),
                    (0, i.jsx)(w.Z, {
                      reverse: !0,
                      ref: eh,
                      isVisible: e_.isItemVisible,
                      onJumpTo: e_.handleJumpToGuild,
                      className: o()(J.unreadMentionsIndicatorBottom, {
                        [J.unreadMentionsFixedFooter]: !n,
                      }),
                      barClassName: J.unreadMentionsBar,
                    }),
                  ],
                }),
              }),
          }),
        });
      }
      t.Z = l.memo(
        function (e) {
          let t = (0, C.Z)("guildsnav");
          return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(en, { ...e }),
          });
        },
        (e, t) => !1 === t.isVisible || (0, p.Z)(e, t),
      );
    },
    252686: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(686546),
        a = n(678634);
      function s(e) {
        let { className: t } = e;
        return (0, i.jsx)(o.ZP, {
          mask: o.ZP.Masks.SQUIRCLE,
          className: r()(t, a.placeholderMask),
          width: 48,
          height: 48,
          style: { display: "block" },
          children: (0, i.jsx)("div", { className: a.dragInner }),
        });
      }
    },
    474109: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(256916),
        a = n(664915),
        s = n(888369),
        c = n(358652),
        u = n(771845),
        d = n(613060),
        h = n(451478),
        p = n(251625),
        m = n(981631),
        f = n(388032);
      let g = "app-download-item",
        C = "add-server-item";
      function _() {
        return !1;
      }
      function v(e) {
        var t;
        let n = s.default.getMutableGuildStates();
        return (
          (e === m.x8Z.SERVER_DISCOVERY_BADGE &&
            !d.Z.hasViewed(m.x8Z.SERVER_DISCOVERY_BADGE)) ||
          (e !== g &&
            e !== C &&
            (null === (t = n[null != e ? e : "null"]) || void 0 === t
              ? void 0
              : t.mentionCount) > 0)
        );
      }
      let x = (0, p.oH)((e, t, n) => [
        "null",
        ...t,
        ...e,
        C,
        m.x8Z.E3_SERVER_DISCOVERY_BADGE,
        g,
      ]);
      t.Z = l.forwardRef(function (e, t) {
        let n = (0, r.Wu)([u.ZP, c.Z, s.default], () =>
            x(
              u.ZP.getGuildFolders(),
              c.Z.getUnreadPrivateChannelIds(),
              s.default.getStoreChangeSentinel(),
            ),
          ),
          l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
          d = (0, r.e7)([a.Z], () => a.Z.getExpandedFolders());
        return (0, i.jsx)(o.Z, {
          ...e,
          ref: t,
          items: n,
          isUnread: _,
          textUnread: f.intl.string(f.t.y2b7CA),
          textMention: f.intl.string(f.t.y2b7CA),
          isMentioned: v,
          animate: l,
          expandedFolders: d,
        });
      });
    },
    741616: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(733860);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(215569),
        a = n(592125),
        s = n(358652),
        c = n(19780),
        u = n(919436);
      function d() {
        (0, r.e7)([a.Z], () => a.Z.getPrivateChannelsVersion());
        let e = a.Z.getMutablePrivateChannels(),
          t = (0, r.Wu)([s.Z], () => s.Z.getUnreadPrivateChannelIds()),
          { selectedVoiceGuildId: n, selectedVoiceChannelId: d } = (0, r.cj)(
            [c.Z],
            () => ({
              selectedVoiceGuildId: c.Z.getGuildId(),
              selectedVoiceChannelId: c.Z.getChannelId(),
            }),
          ),
          h = t.map((t) => {
            let n = e[t];
            return null == n || n.id === d
              ? null
              : (0, i.jsx)(u.Z, { channel: n }, n.id);
          }),
          p = null == n && null != d ? e[d] : null;
        return (
          null != p && h.unshift((0, i.jsx)(u.Z, { channel: p }, p.id)),
          (0, i.jsx)(o.W, { component: l.Fragment, children: h })
        );
      }
    },
    187835: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(603592),
        o = n(388032);
      let a = "DOWNLOAD_APPS";
      function s() {
        let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, a));
        return (0, i.jsx)(r.Z, {
          id: "app-download-button",
          onClick: () => {
            (0, l.openModalLazy)(
              async () => {
                let { default: e } = await Promise.resolve().then(
                  n.bind(n, 431583),
                );
                return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
              },
              { modalKey: a },
            );
          },
          selected: e,
          tooltip: o.intl.string(o.t.Z7jwrK),
          icon: l.DownloadIcon,
        });
      }
    },
    603592: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(91192),
        s = n(481060),
        c = n(540059),
        u = n(276952),
        d = n(682662),
        h = n(662146),
        p = n(187643);
      let m = l.forwardRef(function (e, t) {
        let {
            id: n,
            onClick: r,
            onContextMenu: m,
            icon: f,
            selected: g,
            tooltip: C,
            upperBadge: _,
            lowerBadge: v,
            lowerBadgeSize: x,
            showPill: I = !0,
            className: b,
            "aria-label": S,
            children: E,
            onMouseEnter: Z,
            onMouseLeave: N,
            onMouseDown: y,
          } = e,
          T = (0, c.Q)("ButtonListItem"),
          A = (0, a.Ie)(n),
          [j, P] = l.useState(!1),
          R = "string" == typeof C && null == S ? C : S;
        return (0, i.jsxs)(d.H, {
          children: [
            I
              ? (0, i.jsx)("div", {
                  className: p.pill,
                  children: (0, i.jsx)(u.Z, { hovered: j, selected: g }),
                })
              : null,
            (0, i.jsx)(h.Z, {
              text: C,
              selected: g,
              children: (0, i.jsx)(s.BlobMask, {
                selected: !!T || g || j,
                upperBadge: _,
                lowerBadge: v,
                lowerBadgeSize: x,
                children: (0, i.jsx)(s.Clickable, {
                  innerRef: t,
                  onMouseEnter: () => {
                    null == Z || Z(), P(!0);
                  },
                  onMouseLeave: () => {
                    null == N || N(), P(!1);
                  },
                  onMouseDown: y,
                  className: o()(p.circleIconButton, b, {
                    [p.selected]: g || j,
                  }),
                  onClick: r,
                  "aria-label": R,
                  onContextMenu: m,
                  focusProps: { enabled: !1 },
                  ...A,
                  children:
                    null != f &&
                    (0, i.jsx)(f, {
                      className: p.circleIcon,
                      color: "currentColor",
                    }),
                }),
              }),
            }),
            E,
          ],
        });
      });
      t.Z = m;
    },
    118122: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(239091),
        s = n(906732),
        c = n(560067),
        u = n(540059),
        d = n(451603),
        h = n(885714),
        p = n(155409),
        m = n(430824),
        f = n(594174),
        g = n(40153),
        C = n(603592),
        _ = n(981631),
        v = n(675999),
        x = n(388032),
        I = n(940722);
      let b = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function S(e) {
        (0, a.jW)(e, async () => {
          let { default: e } = await n.e("9606").then(n.bind(n, 987578));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function E(e) {
        let { disableTooltip: t, lastTargetNode: n } = e,
          a = (0, r.e7)([m.Z], () => m.Z.getGuilds()),
          E = l.useMemo(() => Object.values(a), [a]),
          Z = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
          N = l.useMemo(() => E.some((e) => e.isOwner(Z)), [E, Z]),
          y = (0, o.useModalsStore)((e) =>
            (0, o.hasModalOpenSelector)(e, v.PU),
          ),
          { analyticsLocations: T } = (0, s.ZP)(),
          A = (0, u.Q)("CreateJoinGuildButton"),
          j = (0, i.jsx)(C.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
              (0, d.yU)()
                ? (0, h.Z)({
                    analyticsSource: { page: _.Sbl.CREATE_JOIN_GUILD_MODAL },
                    analyticsLocation: {
                      page: _.Sbl.CREATE_JOIN_GUILD_MODAL,
                      section: _.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: T,
                  })
                : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: y,
            onContextMenu: S,
            tooltip: x.intl.string(x.t.l5WIbW),
            icon: A ? o.CirclePlusIcon : o.PlusMediumIcon,
          });
        return t
          ? j
          : (0, i.jsx)("div", {
              className: I.tutorialContainer,
              children: (0, i.jsxs)(p.Z, {
                tutorialId: N ? "create-more-servers" : "create-first-server",
                inlineSpecs: b,
                position: "right",
                children: [
                  j,
                  null != n &&
                    (0, i.jsx)(g.ZP, {
                      name: x.intl.string(x.t["45xjMz"]),
                      targetNode: n,
                      below: !0,
                      noCombine: !0,
                    }),
                ],
              }),
            });
      }
    },
    179809: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(999153),
        s = n(752877),
        c = n(91192),
        u = n(477690),
        d = n(481060),
        h = n(153867),
        p = n(540059),
        m = n(771845),
        f = n(624138),
        g = n(727258),
        C = n(276952),
        _ = n(199540),
        v = n(40153),
        x = n(252686),
        I = n(682662),
        b = n(662146),
        S = n(388032),
        E = n(10448),
        Z = n(284923);
      let N = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        y = (0, s.animated)(d.Stack);
      function T(e) {
        var t;
        let {
            folderNode: n,
            setNodeRef: r,
            selected: s,
            expanded: u,
            mediaState: f,
            mentionCount: T = 0,
            unread: A = !1,
            defaultFolderName: j,
            useCircleMask: P = !1,
            draggable: R = !1,
            sorting: M = !1,
            onDragStart: L,
            onDragEnd: w,
            onExpandCollapse: D,
            onContextMenu: O,
            renderChildNode: k,
            folderIconContent: G,
          } = e,
          { id: U, name: B, children: H } = n,
          V = (0, p.Q)("FolderItem"),
          [F, W] = l.useState(!1),
          [z, Y] = l.useState(!1),
          K = F || z;
        l.useEffect(() => {
          M && W(!1);
        }, [M]);
        let [{ dragging: q }, Q] = (0, a.c)({
            type: g.eD.FOLDER,
            item: () => (null == L || L(), { type: g.eD.FOLDER, nodeId: n.id }),
            end() {
              null == w || w(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          X = l.useCallback((e) => {
            Y(e);
          }, []),
          J = l.useCallback(
            (e) => {
              (("ArrowRight" === e.key && !u) ||
                ("ArrowLeft" === e.key && u)) &&
                D();
            },
            [D, u],
          ),
          $ =
            null != B && "" !== B
              ? B
              : null != j && "" !== j
                ? j
                : S.intl.string(S.t.xV9hVl),
          ee = (0, c.Ie)("".concat(U)),
          et = "folder-items-".concat(U);
        let { iconHeight: en, iconMargin: ei } = {
            iconHeight: (t = V) ? 44 : 48,
            iconMargin: 8,
          },
          el = H.length * (en + ei) - (V ? 4 : 0),
          er = (0, d.useTransition)(!q && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: N },
          }),
          eo = l.useCallback((e) => (null == r ? void 0 : r(U, e)), [r, U]),
          ea = (0, i.jsxs)(I.H, {
            children: [
              (0, i.jsx)(C.Z, {
                disabled: q || u,
                hovered: F,
                selected: s,
                unread: A,
                className: Z.pill,
              }),
              (0, i.jsx)(b.Z, {
                text: $,
                disabled: M,
                selected: s,
                disableWrapper: !0,
                children: (0, i.jsx)("div", {
                  ref: R ? Q : void 0,
                  className: o()({ [Z.wobble]: !q && z && !u }),
                  "data-dnd-name": $,
                  children: q
                    ? (0, i.jsx)(x.Z, {})
                    : (0, i.jsx)(_.Z, {
                        folderNode: n,
                        expanded: u,
                        forceCircular: P,
                        sorting: M,
                        mediaState: f,
                        mentionCount: T,
                        tooltipName: $,
                        folderGroupId: et,
                        onClick: D,
                        onContextMenu: O,
                        onHoverChange: W,
                        onKeyDown: J,
                        treeItemProps: ee,
                        folderIconContent: G,
                      }),
                }),
              }),
              R
                ? (0, i.jsx)(v.ZP, {
                    name: $,
                    targetNode: n,
                    onDragOverChanged: X,
                  })
                : null,
            ],
          });
        return (0, i.jsxs)("div", {
          ref: eo,
          className: E.wrapper,
          children: [
            !q &&
              (0, i.jsx)("span", {
                className: o()(E.expandedFolderBackground, {
                  [E.collapsed]: !u,
                  [E.hover]: K,
                }),
              }),
            ea,
            er((e, t, n) => {
              let { key: l } = n;
              return (
                t &&
                (0, i.jsx)(
                  y,
                  {
                    as: "ul",
                    gap: V ? "xxs" : 0,
                    id: et,
                    style: { height: e.height.to((e) => e * el) },
                    role: "group",
                    children: H.map(k),
                  },
                  l,
                )
              );
            }),
            R && u ? (0, i.jsx)(v.Zu, { name: $, targetNode: n }) : null,
          ],
        });
      }
    },
    193154: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        o = n(460562),
        a = n(768581),
        s = n(682662),
        c = n(662146),
        u = n(285280);
      function d(e) {
        let [t, d] = l.useState(!1);
        return (0, i.jsx)(s.H, {
          children: (0, i.jsx)(c.Z, {
            text: e.name,
            children: (0, i.jsx)(r.BlobMask, {
              className: u.circleIconButton,
              selected: t,
              lowerBadge: (0, i.jsx)(r.IconBadge, {
                icon: (0, r.makeIconCompat)(o.Z),
                disableColor: !0,
                className: u.geoRestrictedBadge,
              }),
              children: (0, i.jsx)(r.NavItem, {
                name: e.name,
                onMouseEnter: () => {
                  d(!0);
                },
                onMouseLeave: () => {
                  d(!1);
                },
                onClick: () => {
                  (0, r.openModalLazy)(async () => {
                    let { default: t } = await n
                      .e("42358")
                      .then(n.bind(n, 210995));
                    return (n) =>
                      (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                  });
                },
                icon:
                  null != e.icon
                    ? a.ZP.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        canAnimate: !1,
                        size: 42,
                      })
                    : null,
              }),
            }),
          }),
        });
      }
    },
    602147: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(636977),
        o = n(481060),
        a = n(571457),
        s = n(836768),
        c = n(749681),
        u = n(133743),
        d = n(603592),
        h = n(49898),
        p = n(128449),
        m = n(46140),
        f = n(388032);
      let g = l.forwardRef(function (e, t) {
        let { selected: n, className: g } = e,
          C = l.useCallback(() => {
            (0, a.k5)({
              source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON,
            });
            let e = s.Z.getField("selectedTab");
            switch (e) {
              case h.GlobalDiscoveryTab.QUESTS:
                return (0, c.transitionToGlobalDiscovery)({
                  tab: h.GlobalDiscoveryTab.QUESTS,
                  location: m.dr.DISCOVERY_COMPASS,
                  questContent: r.j.DISCOVERY_COMPASS,
                });
              case h.GlobalDiscoveryTab.SERVERS:
                return (0, c.transitionToGlobalDiscovery)({
                  tab: h.GlobalDiscoveryTab.SERVERS,
                  entrypoint: p.Qq.GUILDS_BAR,
                });
              case h.GlobalDiscoveryTab.APPS:
                return (0, u.XL)();
              default:
                return (0, c.transitionToGlobalDiscovery)({ tab: e });
            }
          }, []);
        return (0, i.jsx)(d.Z, {
          id: "guild-discover-button",
          ref: t,
          className: g,
          onClick: C,
          selected: n,
          tooltip: f.intl.string(f.t["4nEZLi"]),
          icon: o.CompassIcon,
        });
      });
      t.Z = g;
    },
    325257: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(999153),
        s = n(91192),
        c = n(399606),
        u = n(846519),
        d = n(481060),
        h = n(493683),
        p = n(239091),
        m = n(153867),
        f = n(540059),
        g = n(35225),
        C = n(703656),
        _ = n(769654),
        v = n(271383),
        x = n(771845),
        I = n(727258),
        b = n(276952),
        S = n(249792),
        E = n(40153),
        Z = n(593618),
        N = n(252686),
        y = n(682662),
        T = n(674552),
        A = n(981631),
        j = n(388032),
        P = n(284923);
      let R = {
        analyticsSource: {
          page: A.ZY5.GUILD_CHANNEL,
          section: A.jXE.CHANNEL_LIST,
          object: A.qAy.CHANNEL,
        },
      };
      function M(e, t) {
        (0, p.jW)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("63288"),
            n.e("33053"),
            n.e("17298"),
            n.e("7654"),
            n.e("42309"),
            n.e("98479"),
            n.e("31113"),
            n.e("85552"),
            n.e("58227"),
            n.e("16114"),
            n.e("54770"),
            n.e("23956"),
            n.e("33213"),
            n.e("22179"),
          ]).then(n.bind(n, 545135));
          return (n) => (0, i.jsx)(e, { ...n, guild: t });
        });
      }
      t.Z = l.memo(function (e) {
        var t, n, r, p, L;
        let {
            guildNode: w,
            setRef: D,
            onDragStart: O,
            onDragEnd: k,
            route: G,
            guild: U,
            animatable: B,
            selected: H = !1,
            unread: V = !1,
            mediaState: F,
            unavailable: W = !1,
            badge: z = 0,
            contextMenu: Y = M,
            draggable: K = !1,
            sorting: q = !1,
            preloadOnClick: Q = !0,
            guildJoinRequestStatus: X,
          } = e,
          { id: J, parentId: $ } = w,
          ee = (0, f.Q)("GuildItem"),
          et =
            null !== (t = e.upperBadge) && void 0 !== t
              ? t
              : W
                ? (0, T.Ny)()
                : null != F
                  ? (0, T.Or)(F)
                  : void 0,
          en = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
        null == en && z > 0
          ? (en = null !== (r = (0, T.Ne)(z)) && void 0 !== r ? r : void 0)
          : null == en &&
            null != X &&
            (en =
              null !== (p = (0, T.jt)({ guildJoinRequestStatus: X })) &&
              void 0 !== p
                ? p
                : void 0);
        let ei =
            null !== (L = e.lowerBadgeSize) && void 0 !== L
              ? L
              : { width: (0, d.getBadgeWidthForValue)(z) },
          [{ dragging: el }, er] = (0, a.c)({
            type: I.eD.GUILD,
            item: () => (
              requestAnimationFrame(() => {
                null == O || O();
              }),
              { type: w.type, nodeId: w.id }
            ),
            end() {
              null == k || k(), (0, m.V1)(x.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          eo = (0, s.Ie)(null != J ? J : A.lds),
          [ea, es] = l.useState(!1),
          ec = !q && ea,
          [eu, ed] = l.useState(!1),
          [eh, ep] = l.useState(!1),
          [em] = l.useState(() => new u.sW(70, () => ep(!0)));
        l.useEffect(() => () => em.cancel(), [em]);
        let ef = l.useCallback(() => {
            if (null != G) {
              (0, C.uL)(G, { state: R });
              return;
            }
            (0, _.X)(J, { state: R });
          }, [J, G]),
          eg = l.useCallback(() => {
            if (null != G || null == U || W || !Q) return;
            let e = (0, g.V)(U.id);
            if (null != e) h.Z.preload(U.id, e);
          }, [G, U, W, Q]),
          eC = (0, c.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(J)),
          e_ = l.useCallback(
            (e) => {
              null != U && !eC && Y(e, U);
            },
            [U, Y, eC],
          ),
          ev = l.useCallback(
            (e) => {
              if ("ArrowLeft" === e.key && null != $) {
                var t;
                null ===
                  (t = document.querySelector(
                    "[aria-owns=folder-items-".concat($, "]"),
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [$],
          ),
          ex = l.useCallback(
            (e) => {
              if (e) {
                em.delay();
                return;
              }
              em.cancel(), ep(!1);
            },
            [em],
          ),
          eI = l.useCallback(
            (e) => {
              null == D || D(J, e);
            },
            [J, D],
          );
        if (null == U) return null;
        let eb =
            eh || eu
              ? (0, i.jsx)(S.Z, {
                  guild: U,
                  show: eh,
                  active: H,
                  onAnimationStart: function () {
                    ed(eh);
                  },
                  onAnimationRest: function () {
                    eh || ed(!1);
                  },
                })
              : (0, i.jsx)(d.NavItem, {
                  ariaLabel: j.intl.formatToPlainString(j.t["/uzRsr"], {
                    guildName: U.toString(),
                    mentions: z,
                  }),
                  name: U.toString(),
                  onClick: ef,
                  onMouseEnter: function () {
                    q || es(!0);
                  },
                  onMouseLeave: function () {
                    q || es(!1);
                  },
                  onMouseDown: eg,
                  onContextMenu: e_,
                  onKeyDown: ev,
                  icon: U.getIconURL((ee ? 44 : 48) * 2, ec && B),
                  selected: H || ec,
                  ...eo,
                  role: "treeitem",
                }),
          eS = el
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(N.Z, {}) })
            : (0, i.jsx)("div", {
                ref: K ? er : void 0,
                "data-dnd-name": U.toString(),
                className: o()(P.blobContainer, {
                  [P.sorting]: q,
                  [P.wobble]: eh,
                  [P.selected]: eh || H,
                }),
                children: (0, i.jsx)(d.BlobMask, {
                  selected: !!ee || eh || H || ec,
                  upperBadge: et,
                  lowerBadge: en,
                  lowerBadgeSize: ei,
                  children: eb,
                }),
              });
        return (0, i.jsxs)(y.H, {
          ref: eI,
          children: [
            (0, i.jsx)(b.Z, {
              hovered: !el && ec,
              selected: !el && H,
              unread: !el && V,
              className: P.pill,
            }),
            (0, i.jsx)(Z.Z, {
              guild: U,
              disabled: q,
              isDragging: el,
              children: eS,
            }),
            K
              ? (0, i.jsx)(E.ZP, {
                  name: U.name,
                  targetNode: w,
                  onDragOverChanged: ex,
                })
              : null,
          ],
        });
      });
    },
    416637: function (e, t, n) {
      n.d(t, {
        g: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(192272);
      function r(e) {
        let { children: t } = e;
        return (0, i.jsxs)("div", {
          className: l.footer,
          children: [(0, i.jsx)("div", { className: l.gradient }), t],
        });
      }
    },
    222059: function (e, t, n) {
      n.d(t, {
        u: function () {
          return w;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(91192),
        o = n(442837),
        a = n(433517),
        s = n(481060),
        c = n(339149),
        u = n(327943),
        d = n(864682),
        h = n(899740),
        p = n(155409),
        m = n(699516),
        f = n(944486),
        g = n(594174),
        C = n(431),
        _ = n(774343),
        v = n(417363),
        x = n(941128),
        I = n(780570),
        b = n(557177),
        S = n(278464),
        E = n(276952),
        Z = n(682662),
        N = n(662146),
        y = n(674552),
        T = n(981631),
        A = n(474936),
        j = n(871465),
        P = n(388032),
        R = n(491708);
      let M = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function L(e) {
        let {
            selected: t,
            user: n,
            badge: h,
            link: m,
            showProgressBadge: f,
          } = e,
          g = (0, o.e7)([u.Z], () => u.Z.isEditorOpen),
          [C, _] = l.useState(!1),
          [v, x] = l.useState(!1),
          [I, S] = l.useState(null),
          [A, L] = l.useState(0),
          w = (0, r.Ie)("home"),
          D = () => {
            S(null), L(0), clearTimeout(I);
          };
        if (null == n) return null;
        let O = P.intl.string(P.t.YUU0RE);
        v &&
          (O = a.K.get(T.wli)
            ? P.intl.string(P.t.nkq1l5)
            : P.intl.string(P.t.Be8Q5O));
        let k = null;
        !t &&
          f &&
          (k = (0, i.jsx)(c.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1,
          }));
        let G = t || C || g,
          U = (0, i.jsx)(s.BlobMask, {
            selected: G,
            lowerBadge: h > 0 ? (0, y.Ne)(h) : null,
            upperBadge: k,
            lowerBadgeSize: { width: (0, s.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(s.NavItem, {
              onMouseEnter: () => _(!0),
              onMouseLeave: () => _(!1),
              onClick: () => {
                if (
                  !__OVERLAY__ &&
                  (null != I && clearTimeout(I),
                  S(setTimeout(D, 500)),
                  L(A + 1),
                  15 === A)
                ) {
                  D();
                  let e = !a.K.get(T.wli);
                  a.K.set(T.wli, e),
                    e && a.K.set(j.O5, !0),
                    e ? (0, b.GN)("discodo") : (0, b.GN)("user_leave"),
                    x(!0),
                    setTimeout(() => {
                      x(!1);
                    }, 1e3);
                }
              },
              selected: G,
              ariaLabel: P.intl.string(P.t.YUU0RE),
              ...w,
              to: {
                pathname: m,
                state: {
                  analyticsSource: {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.NAVIGATION,
                    object: T.qAy.BUTTON_HOME,
                  },
                },
              },
              children: (0, i.jsx)(d.Z, {}),
            }),
          });
        return (0, i.jsx)("div", {
          className: R.tutorialContainer,
          children: (0, i.jsx)(p.Z, {
            inlineSpecs: M,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(Z.H, {
              children: [
                (0, i.jsx)(E.Z, { selected: t, hovered: C, className: R.pill }),
                (0, i.jsx)(N.Z, {
                  color: s.Tooltip.Colors.PRIMARY,
                  hideOnClick: !0,
                  text: O,
                  selected: t,
                  children: U,
                }),
              ],
            }),
          }),
        });
      }
      function w() {
        let e = (0, S.n)(),
          t = (0, o.e7)([x.Z, v.Z], () => {
            let e = (0, c.E)(x.Z.activeItems, v.Z),
              { total: t, progress: n } = I.lK(e),
              i = I.xI(n, t);
            return i > 0 && i < 100;
          }),
          n = (0, o.e7)([m.Z], () => m.Z.getPendingCount()),
          l = Object.keys(A.nG),
          { unviewedTrialCount: r, unviewedDiscountCount: a } = (0, o.cj)(
            [C.Z],
            () => ({
              unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
              unviewedDiscountCount:
                C.Z.getUnacknowledgedDiscountOffers().length,
            }),
          ),
          s = r + a,
          u = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
          d = (0, h.q)(),
          p = n + s + d,
          b = p === s && s > 0 && n + d === 0,
          E = _.Z.getHomeLink();
        return (
          b && (E = T.Z5c.APPLICATION_STORE),
          (0, i.jsx)(L, {
            selected: e,
            user: u,
            selectedChannelId: f.Z.getChannelId(T.ME),
            badge: p,
            link: E,
            showProgressBadge: t,
          })
        );
      }
    },
    751277: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(512969),
        r = n(442837),
        o = n(481060),
        a = n(893607),
        s = n(601964),
        c = n(701190),
        u = n(836040),
        d = n(603592),
        h = n(981631),
        p = n(388032);
      function m(e) {
        var t;
        let { isOnHubVerificationRoute: n } = e,
          m = (0, l.LX)(
            null !== (t = window.location.pathname) && void 0 !== t ? t : "",
            {
              path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                a.Hw.guildId(),
                ":inviteCode",
              ),
            },
          ),
          f = (0, r.e7)([c.Z], () => {
            if (null == m) return null;
            let { inviteCode: e } = m.params;
            return null != e ? c.Z.getInvite(e) : null;
          }),
          g =
            (null == f ? void 0 : f.guild) != null
              ? new s.ZP(null == f ? void 0 : f.guild)
              : null;
        return n
          ? null != g && null != f
            ? (0, i.jsx)(u.Z, { guild: g, invite: f })
            : (0, i.jsx)(d.Z, {
                tooltip: p.intl.string(p.t.rn9HIS),
                id: "guild-hub-button",
                icon: o.HubIcon,
              })
          : null;
      }
    },
    682662: function (e, t, n) {
      n.d(t, {
        H: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(940722);
      let o = l.forwardRef((e, t) => {
        let { children: n } = e;
        return (0, i.jsx)("div", {
          className: r.listItem,
          ref: t,
          children: n,
        });
      });
      o.displayName = "ListItem";
    },
    662146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(481060),
        s = n(540059),
        c = n(743778);
      function u(e) {
        let {
            children: t,
            text: n,
            color: r,
            disableWrapper: u = !1,
            disabled: d = !1,
            hideOnClick: h = !0,
            shouldShow: p,
            forceOpen: m,
            selected: f = !1,
            tooltipClass: g,
            tooltipContentClass: C,
          } = e,
          _ = (0, s.Q)("ListItemTooltip");
        return (0, i.jsx)(a.Tooltip, {
          shouldShow: p,
          forceOpen: m,
          spacing: _ ? 12 : 20,
          hideOnClick: h,
          text: d ? null : n,
          position: "right",
          color: r,
          "aria-label": !1,
          tooltipClassName: o()(c.listItemTooltip, g),
          tooltipContentClassName: C,
          children: (e) =>
            u
              ? l.cloneElement(l.Children.only(t), { ...e })
              : (0, i.jsx)("div", {
                  className: o()(c.listItemWrapper, { [c.selected]: f }),
                  ...e,
                  children: t,
                }),
        });
      }
    },
    65721: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(682662),
        r = n(958844);
      function o() {
        return (0, i.jsx)(l.H, {
          children: (0, i.jsx)("div", { className: r.guildSeparator }),
        });
      }
    },
    843343: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(299379),
        a = n(486472),
        s = n(430824),
        c = n(682662),
        u = n(662146),
        d = n(981631),
        h = n(388032),
        p = n(768753);
      function m() {
        let e = (0, l.e7)(
          [a.Z, s.Z],
          () =>
            a.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length,
        );
        return e <= 0
          ? null
          : (0, i.jsx)(c.H, {
              children: (0, i.jsx)(u.Z, {
                text: h.intl.format(h.t["TnH05+"], { count: e }),
                color: r.Tooltip.Colors.RED,
                children: (0, i.jsx)(r.Anchor, {
                  href: (0, o.Z)(d.RK.TWITTER),
                  target: "_blank",
                  className: p.guildsError,
                  "aria-label": h.intl.formatToPlainString(h.t["MEpX+/"], {
                    count: e,
                  }),
                  children: (0, i.jsx)("span", {
                    "aria-hidden": !0,
                    className: p.errorInner,
                    children: "!",
                  }),
                }),
              }),
            });
      }
    },
    674552: function (e, t, n) {
      n.d(t, {
        Ne: function () {
          return h;
        },
        Ny: function () {
          return p;
        },
        Or: function () {
          return m;
        },
        jt: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(44315),
        s = n(246364),
        c = n(460562),
        u = n(981631),
        d = n(940722);
      function h(e, t) {
        return (0, i.jsx)(o.NumberBadge, { count: e, color: t });
      }
      function p() {
        return (0, i.jsx)(o.IconBadge, {
          icon: (0, o.makeIconCompat)(c.Z),
          disableColor: !0,
          className: d.unavailableBadge,
        });
      }
      function m(e) {
        let t,
          {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: r,
            liveStage: a,
            activeEvent: s,
            activity: c,
          } = e;
        if (s) t = o.CalendarIcon;
        else if (a) t = o.StageIcon;
        else if (c) t = o.ActivitiesIcon;
        else if (l) t = o.ScreenIcon;
        else if (i) t = o.VideoIcon;
        else {
          if (!n) return null;
          t = o.VoiceNormalIcon;
        }
        return g({ icon: t, isCurrentUserConnected: r });
      }
      function f(e) {
        let { guildJoinRequestStatus: t } = e,
          [n, i] = (function (e) {
            switch (e) {
              case s.wB.SUBMITTED:
                return [void 0, o.ClockIcon];
              case s.wB.REJECTED:
                return [u.Ilk.RED_400, o.XSmallIcon];
              case s.wB.APPROVED:
                return [u.Ilk.GREEN_360, o.CheckmarkLargeIcon];
              default:
                return [void 0, o.PencilIcon];
            }
          })(t);
        return g({ icon: i, color: n });
      }
      function g(e) {
        let { icon: t, color: n, isCurrentUserConnected: l } = e,
          s = null == n ? { disableColor: !0 } : { color: (0, a.Lq)(n) };
        return (0, i.jsx)(o.IconBadge, {
          icon: t,
          className: r()(d.iconBadge, { [d.isCurrentUserConnected]: l }),
          ...s,
        });
      }
    },
    654142: function (e, t, n) {
      n(653041), n(47120), n(724458);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(239091),
        a = n(749210),
        s = n(905423),
        c = n(664915),
        u = n(888369),
        d = n(430824),
        h = n(823379),
        p = n(179809),
        m = n(652376),
        f = n(981631);
      t.Z = l.memo(function (e) {
        let { folderNode: t, ...g } = e,
          { id: C, name: _, color: v, children: x } = t,
          I = x.map((e) => e.id),
          b = (0, s.Z)((e) => e.guildId),
          S = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(C)),
          E = (function (e) {
            let t = e.children
                .map((e) => {
                  let t = e.id,
                    n = d.Z.getGuild(t);
                  return null != n ? n.name : null;
                })
                .filter(h.lm),
              n = 2 * f.dYL,
              i = [];
            for (let e of t)
              (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ""
              .concat(i.join(", "))
              .concat(i.length < t.length ? ", ..." : "");
          })(t),
          Z = (0, m.Z)(t),
          { mentionCount: N, unread: y } = (0, r.cj)([u.default], () => ({
            mentionCount: I.map((e) => u.default.getMentionCount(e)).reduce(
              (e, t) => e + t,
              0,
            ),
            unread: I.some((e) => u.default.hasUnread(e)),
          })),
          T = l.useCallback(() => {
            a.Z.toggleGuildFolderExpand(C);
          }, [C]),
          A = l.useCallback(
            (e) => {
              (0, o.jW)(e, async () => {
                let { default: e } = await n.e("52590").then(n.bind(n, 205784));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    folderId: C,
                    folderName: _,
                    folderColor: v,
                    unread: y || N > 0,
                  });
              });
            },
            [C, _, v, y, N],
          );
        return (0, i.jsx)(p.Z, {
          ...g,
          folderNode: t,
          expanded: S,
          selected: null != b && I.includes(b),
          mentionCount: N,
          unread: y,
          mediaState: Z,
          defaultFolderName: E,
          onExpandCollapse: T,
          onContextMenu: A,
        });
      });
    },
    695301: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(746916),
        s = n(965638),
        c = n(905423),
        u = n(486472),
        d = n(888369),
        h = n(430824),
        p = n(451478),
        m = n(61634),
        f = n(325257),
        g = n(771557);
      t.Z = l.memo(function (e) {
        let { guildNode: t, lowerBadge: n } = e,
          C = t.id,
          _ = (0, r.e7)([h.Z], () => h.Z.getGuild(C)),
          v = (0, a.E)(_),
          x = (0, r.e7)([p.Z], () => p.Z.isFocused()),
          I = (0, r.e7)([u.Z], () => u.Z.isUnavailable(C)),
          b = (0, c.Z)((e) => e.guildId),
          S = (0, m.Z)(C),
          { badge: E, unread: Z } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(C),
            unread: d.default.hasUnread(C),
          })),
          N = (0, s.I)(_) && 0 === E,
          y = l.useMemo(
            () =>
              null != n
                ? n
                : N
                  ? (0, i.jsx)("div", {
                      className: g.pauseBackground,
                      children: (0, i.jsx)(o.PauseIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: g.pause,
                        width: 10,
                        height: 10,
                      }),
                    })
                  : null,
            [n, N],
          );
        return (0, i.jsx)(f.Z, {
          ...e,
          guild: _,
          unavailable: I,
          animatable: x,
          selected: b === C,
          badge: E,
          lowerBadge: y,
          unread: Z,
          mediaState: S,
          guildJoinRequestStatus: v,
        });
      });
    },
    836040: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(451478),
        a = n(727258),
        s = n(325257),
        c = n(981631);
      function u(e) {
        let { guild: t, invite: n } = e,
          u = l.useMemo(() => (0, a.Mg)(t.id), [t.id]),
          d = (0, r.e7)([o.Z], () => o.Z.isFocused());
        return null == t
          ? null
          : (0, i.jsx)(s.Z, {
              guildNode: u,
              guild: t,
              animatable: d,
              draggable: !1,
              contextMenu: () => {},
              selected: !0,
              route: c.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code),
            });
      }
    },
    588275: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(239091),
        o = n(246364),
        a = n(937111),
        s = n(914010),
        c = n(451478),
        u = n(325257),
        d = n(674552),
        h = n(981631);
      function p(e, t) {
        (0, r.jW)(e, async () => {
          let { default: e } = await n.e("6368").then(n.bind(n, 987999));
          return (n) => (0, i.jsx)(e, { ...n, guild: t });
        });
      }
      function m(e) {
        let { guildNode: t } = e,
          n = t.id,
          r = (0, l.e7)([a.Z], () => a.Z.getRequest(n)),
          m = (0, l.e7)([a.Z], () => a.Z.getJoinRequestGuild(n), [n]),
          f = (0, l.e7)([c.Z], () => c.Z.isFocused()),
          g = (0, l.e7)([s.Z], () => s.Z.getGuildId());
        return null == m
          ? null
          : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: m,
              animatable: f,
              draggable: !1,
              selected: n === g,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge:
                (null == r ? void 0 : r.applicationStatus) === o.wB.REJECTED
                  ? (0, d.jt)({ guildJoinRequestStatus: r.applicationStatus })
                  : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(n),
            });
      }
    },
    836697: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(110924),
        s = n(693546),
        c = n(863249),
        u = n(937111),
        d = n(914010),
        h = n(289090),
        p = n(727258),
        m = n(234383),
        f = n(179809),
        g = n(588275),
        C = n(388032),
        _ = n(738945);
      function v(e) {
        let { onActivate: t, children: n } = e,
          s = (0, r.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
          d = l.useCallback(() => {
            c.ZP.clearCoachmark();
          }, []),
          h = (0, a.Z)(s),
          p = l.useRef(null);
        return (
          l.useEffect(() => {
            if (s && s !== h) {
              var e, n, i, l, r;
              t(),
                null === (r = p.current) ||
                  void 0 === r ||
                  null === (l = r.ref) ||
                  void 0 === l ||
                  null === (i = l.current) ||
                  void 0 === i ||
                  null === (n = i.layerRef) ||
                  void 0 === n ||
                  null === (e = n.current) ||
                  void 0 === e ||
                  e.updatePosition();
            }
          }, [p, s, h, t]),
          (0, i.jsxs)("div", {
            className: _.container,
            children: [
              (0, i.jsx)(o.Popout, {
                ref: p,
                shouldShow: s,
                renderPopout: () =>
                  (0, i.jsxs)("div", {
                    className: _.popoutContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: _.popoutContent,
                        children: [
                          (0, i.jsxs)("div", {
                            className: _.coachmarkTextContainer,
                            children: [
                              (0, i.jsx)(o.Heading, {
                                variant: "heading-md/medium",
                                children: C.intl.string(C.t.fRUGzs),
                              }),
                              (0, i.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.ja0Tg4),
                              }),
                            ],
                          }),
                          (0, i.jsx)(o.Button, {
                            fullWidth: !0,
                            size: o.ButtonSizes.SMALL,
                            color: o.ButtonColors.BRAND,
                            onClick: d,
                            children: C.intl.string(C.t.E0MgHh),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", { className: _.popoutCaretLeft }),
                    ],
                  }),
                position: "right",
                animationPosition: "right",
                align: "top",
                spacing: 16,
                children: (e) =>
                  (0, i.jsx)("div", { ...e, className: _.popoutAnchor }),
              }),
              n,
            ],
          })
        );
      }
      function x(e) {
        let { onActivate: t } = e,
          [n, x] = l.useState(!1),
          I = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
          b = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
          S = (0, m.Z)(),
          E = (0, a.Z)(I),
          Z = l.useMemo(() => {
            let e = (0, p.qQ)({
              folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
              folderName: C.intl.string(C.t["scsU+v"]),
              expanded: n,
              guildIds: [],
            });
            for (let t of S) e.children.push((0, p.Mg)(t, e.id));
            return e;
          }, [S, n]);
        l.useEffect(() => {
          n && !b && s.Z.fetchRequestToJoinGuilds();
        }, [n, b]);
        let N = null != I && S.includes(I);
        return (l.useEffect(() => {
          !n && N && E !== I && x(!0);
        }, [n, N, E, I]),
        0 === S.length)
          ? null
          : (0, i.jsx)(v, {
              onActivate: t,
              children: (0, i.jsx)(f.Z, {
                folderNode: Z,
                expanded: n,
                useCircleMask: !n && !N,
                selected: N,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: () => {
                  x(!n), c.ZP.clearCoachmark();
                },
                folderIconContent: (0, i.jsx)(o.HourglassIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 24,
                  height: 24,
                  className: _.pendingIcon,
                }),
                renderChildNode: function (e) {
                  return e.type !== p.eD.GUILD
                    ? null
                    : (0, i.jsx)(g.Z, { guildNode: e }, e.id);
                },
              }),
            });
      }
    },
    921230: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(905423),
        a = n(430824),
        s = n(451478),
        c = n(727258),
        u = n(61634),
        d = n(325257);
      function h(e) {
        let { guildId: t } = e,
          n = l.useMemo(() => (0, c.Mg)(t), [t]),
          h = (0, r.e7)([a.Z], () => a.Z.getGuild(t)),
          p = (0, r.e7)([s.Z], () => s.Z.isFocused()),
          m =
            t ===
            (0, o.Z)((e) => {
              let { guildId: t } = e;
              return t;
            }),
          f = (0, u.Z)(t);
        return null == h
          ? null
          : (0, i.jsx)(d.Z, {
              guildNode: n,
              guild: h,
              animatable: p,
              selected: m,
              draggable: !1,
              mediaState: f,
            });
      }
    },
    652376: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(623633),
        o = n(199902),
        a = n(19780),
        s = n(979651);
      function c(e) {
        var t;
        let n = (0, l.e7)([a.Z], () => a.Z.getGuildId()),
          c = e.children.map((e) => e.id),
          u = null != n && c.includes(n),
          d = !1,
          h = !1,
          p = !1,
          m = (0, l.e7)([a.Z], () => a.Z.getChannelId()),
          f = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
          g = null != f && c.includes(f),
          C = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
          _ = (0, l.e7)([o.Z], () => o.Z.getCurrentUserActiveStream());
        return (
          u &&
            ((d = !C),
            (h = C),
            (p = null != _ && null != _.guildId && c.includes(_.guildId))),
          i.useMemo(
            () => ({
              audio: d,
              video: h,
              screenshare: p,
              liveStage: g,
              isCurrentUserConnected: u,
            }),
            [d, h, p, g, u],
          )
        );
      }
    },
    593364: function (e, t, n) {
      n.d(t, {
        N: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060);
      function r(e) {
        return (0, i.jsx)(l.NumberBadge, { count: e });
      }
      n(460562), n(572488);
    },
    688438: function (e, t, n) {
      n.d(t, {
        t: function () {
          return s;
        },
      });
      var i = n(442837),
        l = n(273387),
        r = n(975984),
        o = n(306680),
        a = n(709054);
      function s(e) {
        return (0, i.e7)(
          [l.Z, o.ZP],
          () => {
            var t;
            if (null == e) return 0;
            let n = o.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(
              null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t
                ? t
                : {},
            ).filter((e) => {
              let t = new Date(e.createdAt).getTime();
              return t > a.default.extractTimestamp(n);
            });
            return Math.min(r._N, i.length);
          },
          [e],
        );
      }
    },
    724912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(430824),
        r = n(981631);
      function o(e) {
        return (0, i.e7)(
          [l.Z],
          () => {
            var t;
            if (null == e) return !1;
            let n = l.Z.getGuild(e);
            return (
              null !== (t = null == n ? void 0 : n.hasFeature(r.oNc.HUB)) &&
              void 0 !== t &&
              t
            );
          },
          [e],
        );
      }
    },
    258871: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(554747),
        s = n(434479),
        c = n(593364),
        u = n(703656),
        d = n(944486),
        h = n(147754),
        p = n(688438),
        m = n(981631),
        f = n(388032);
      let g = [
        {
          key: "EVENTS",
          renderIcon: (e) =>
            (0, i.jsx)(o.CalendarIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          getName: (e) => {
            let { numEvents: t } = e;
            return t > 0
              ? f.intl.formatToPlainString(f.t.IBdqSk, { number: t })
              : f.intl.string(f.t.tlopTE);
          },
          handler: (e) =>
            (0, o.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                n.e("22347"),
                n.e("56236"),
                n.e("22506"),
              ]).then(n.bind(n, 17671));
              return (n) => (0, i.jsx)(t, { ...n, guildId: e.id });
            }),
        },
        {
          key: "JOIN_SERVERS",
          renderIcon: (e) =>
            (0, i.jsx)(o.CompassIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          getName: () => f.intl.string(f.t.K50GHR),
          handler: (e, t) => (0, u.XU)(e.id, t.id),
        },
        {
          key: "ADD_SERVERS",
          renderIcon: (e) =>
            (0, i.jsx)(o.PlusSmallIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          getName: () => f.intl.string(f.t.emRpdX),
          handler: (e, t) =>
            (0, o.openModalLazy)(async () => {
              let { default: l } = await n.e("79764").then(n.bind(n, 533202));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  directoryGuildName: e.name,
                  directoryGuildId: e.id,
                  directoryChannelId: t.id,
                });
            }),
        },
        {
          key: "INVITE_MEMBERS",
          renderIcon: (e) => (0, i.jsx)(o.GroupPlusIcon, { className: e }),
          getName: () => f.intl.string(f.t.MJQOuL),
          handler: (e, t) =>
            (0, o.openModalLazy)(async () => {
              let { default: l } = await Promise.all([
                n.e("7654"),
                n.e("86004"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  guild: e,
                  channel: t,
                  source: m.t4x.HUB_SIDEBAR,
                });
            }),
        },
      ];
      t.Z = (e) => {
        let { guild: t, channel: n } = e,
          o = (0, a.ZP)(t.id);
        l.useEffect(() => {
          h.Z.trackExposure({ guildId: t.id, location: "543af8_1" });
        }, [t.id]);
        let { showHubEventsList: u } = h.Z.useExperiment(
            { guildId: t.id, location: "543af8_2" },
            { autoTrackExposure: !1 },
          ),
          m = (0, r.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
          f = l.useMemo(() => ({ numEvents: o.length }), [o.length]),
          C = (0, p.t)(n);
        return (0, i.jsx)(i.Fragment, {
          children: g.map((e) => {
            let { key: l, getName: r, handler: o, renderIcon: a } = e;
            if (!u && "EVENTS" === l) return null;
            let d = "".concat(l, "-").concat(t.id);
            return (0, i.jsx)(
              s.m,
              {
                id: d,
                renderIcon: a,
                text: r(f),
                selected: m && "JOIN_SERVERS" === l,
                onClick: null != n ? () => o(t, n) : void 0,
                trailing: "JOIN_SERVERS" === l && C > 0 ? (0, c.N)(C) : null,
              },
              d,
            );
          }),
        });
      };
    },
    175281: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l,
        r = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        c = n(512722),
        u = n.n(c),
        d = n(392711),
        h = n.n(d),
        p = n(748780),
        m = n(442837),
        f = n(215569),
        g = n(481060),
        C = n(612226),
        _ = n(951483),
        v = n(714338),
        x = n(607070),
        I = n(585483),
        b = n(557177),
        S = n(264549),
        E = n(981631),
        Z = n(388032),
        N = n(521287);
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((l = i || (i = {})).UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.LEFT = "LEFT"),
        (l.RIGHT = "RIGHT");
      let T = {
        UP: h().throttle(() => (0, b.GN)("ddr-up"), 100),
        DOWN: h().throttle(() => (0, b.GN)("ddr-down"), 100),
        LEFT: h().throttle(() => (0, b.GN)("ddr-left"), 100),
        RIGHT: h().throttle(() => (0, b.GN)("ddr-right"), 100),
      };
      function A(e) {
        switch (e.keyCode) {
          case E.yXg.ARROW_UP:
            return "UP";
          case E.yXg.ARROW_DOWN:
            return "DOWN";
          case E.yXg.ARROW_LEFT:
            return "LEFT";
          case E.yXg.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let j = [
        C.Q2.MESSAGE,
        C.Q2.NAVIGATION,
        C.Q2.VOICE_AND_VIDEO,
        C.Q2.CHAT,
        C.Q2.MISCELLANEOUS,
      ];
      function P(e) {
        let { showBackdrop: t } = e;
        return (0, r.jsx)("div", {
          className: s()(N.backdrop, { [N.show]: t }),
        });
      }
      function R() {
        let e = o.useMemo(
          () =>
            h()((0, C.Rv)())
              .groupBy((e) => e.group)
              .value(),
          [],
        );
        return (0, r.jsx)("div", {
          className: N.keyboardShortcutList,
          children: j.map((t) => {
            let n = e[t],
              i = (0, C.UD)(t),
              l = (0, C.U6)(t);
            return (0, r.jsxs)(
              "div",
              {
                className: N.keyboardShortcutSection,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(g.Heading, {
                        variant: "heading-lg/semibold",
                        children: i,
                      }),
                      null != l &&
                        (0, r.jsx)(g.Text, {
                          className: N.keybindGroupDescription,
                          variant: "text-sm/normal",
                          children: l,
                        }),
                    ],
                  }),
                  (0, r.jsx)(
                    "div",
                    {
                      className: N.keyboardShortcutListGroup,
                      children: n.map((e, t) => {
                        var n;
                        return (null === (n = e.predicate) || void 0 === n
                          ? void 0
                          : n.call(e)) === !1
                          ? null
                          : (0, r.jsxs)(
                              "div",
                              {
                                className: s()(N.keybindGroup),
                                children: [
                                  (0, r.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: e.description,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "keybind-shortcuts",
                                    children: e.binds.map((e) =>
                                      (0, r.jsx)(
                                        g.KeyCombo,
                                        {
                                          className: N.keybindKey,
                                          shortcut: e,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                ],
                              },
                              t,
                            );
                      }),
                    },
                    t,
                  ),
                ],
              },
              t,
            );
          }),
        });
      }
      class M extends o.PureComponent {
        componentDidMount() {
          (this.lastInputedKeys = []),
            I.S.subscribe(E.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            I.S.subscribe(E.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          I.S.unsubscribe(E.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            I.S.unsubscribe(E.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.removeEventListener("keyup", this.handleKeyUp, {
              capture: !0,
            });
        }
        render() {
          let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
          return (0, r.jsxs)(p.Z.div, {
            className: N.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
              (0, r.jsxs)(g.H, {
                className: N.modalTitle,
                children: [
                  (0, r.jsx)("div", {
                    className: N.content,
                    children: Z.intl.string(Z.t["1BdUt7"]),
                  }),
                  (0, r.jsx)(g.KeyCombo, { shortcut: "mod+/" }),
                ],
              }),
              (0, r.jsx)("div", {
                className: N.modalSubtitle,
                children: Z.intl.string(Z.t["2t19lZ"]),
              }),
              (0, r.jsxs)("div", {
                className: N.ddrArrows,
                children: [
                  (0, r.jsx)(L, {
                    arrow: "LEFT",
                    isActive: n,
                    className: N.left,
                    children: "left",
                  }),
                  (0, r.jsx)(L, {
                    arrow: "DOWN",
                    isActive: t,
                    className: N.down,
                    children: "down",
                  }),
                  (0, r.jsx)(L, {
                    arrow: "UP",
                    isActive: e,
                    className: N.up,
                    children: "up",
                  }),
                  (0, r.jsx)(L, {
                    arrow: "RIGHT",
                    isActive: i,
                    className: N.right,
                    children: "right",
                  }),
                ],
              }),
              (0, r.jsx)(g.AdvancedScrollerAuto, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(g.HeadingLevel, {
                  children: (0, r.jsx)(R, {}),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            y(this, "state", {
              UP: !1,
              DOWN: !1,
              LEFT: !1,
              RIGHT: !1,
              opacity: new p.Z.Value(1),
              scaleX: new p.Z.Value(1),
              scaleY: new p.Z.Value(0),
              animating: !1,
            }),
            y(this, "scrollerRef", o.createRef()),
            y(this, "lastInputedKeys", []),
            y(this, "scrollPageUp", () => {
              let e = this.scrollerRef.current;
              u()(null != e, "Scroller is pagedUp when not mounted"),
                e.scrollPageUp({ animate: !0 });
            }),
            y(this, "scrollPageDown", () => {
              let e = this.scrollerRef.current;
              u()(null != e, "Scroller is pagedDown when not mounted"),
                e.scrollPageDown({ animate: !0 });
            }),
            y(this, "arrowUp", (e) => {
              let { direction: t } = e;
              this.setState({ [t]: !1 });
            }),
            y(this, "arrowDown", (e) => {
              let { direction: t } = e;
              T[t](), this.setState({ [t]: !0 });
            }),
            y(this, "componentWillLeave", (e) => {
              this.setState({ animating: !0 }),
                this.state.opacity.setValue(1),
                this.state.scaleX.setValue(0.5),
                this.state.scaleY.setValue(1),
                p.Z.sequence([
                  p.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 800,
                    easing: p.Z.Easing.cubic,
                  }),
                ]).start(e);
            }),
            y(this, "toggleOpacity", () => {
              1 === this.state.opacity._value
                ? this.state.opacity.setValue(0)
                : this.state.opacity.setValue(1);
            }),
            y(this, "getStyles", () => ({
              opacity: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  scaleX: this.state.scaleX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 2],
                  }),
                },
                {
                  scaleY: this.state.scaleY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            })),
            y(this, "handleKeyDown", (e) => {
              if (
                (this.lastInputedKeys.push(e.keyCode),
                (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                this.lastInputedKeys[0] === E.yXg.H &&
                  this.lastInputedKeys[1] === E.yXg.H &&
                  this.lastInputedKeys[2] === E.yXg.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === E.yXg.N &&
                  this.lastInputedKeys[4] === E.yXg.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = A(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            y(this, "handleKeyUp", (e) => {
              if (this.props.keyboardModeEnabled) return;
              let t = A(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowUp({ direction: t }));
            }),
            y(this, "onArrowClick", (e) => {
              this.arrowDown({ direction: e });
            });
        }
      }
      function L(e) {
        let { isActive: t, arrow: n, className: i, children: l } = e,
          [a, c] = o.useState(t),
          u = o.useCallback(() => {
            T[n](), c(!0);
          }, [n]);
        return (
          o.useEffect(() => {
            if (a) {
              let e = setTimeout(() => c(!1), 500);
              return () => clearTimeout(e);
            }
          }, [a]),
          (0, r.jsx)(g.Clickable, {
            onClick: u,
            className: s()(N.arrow, i, { [N.active]: t || a }),
            children: l,
          })
        );
      }
      function w(e) {
        let { transitionState: t, onClose: n } = e,
          [i, l] = o.useState(!1),
          [a, c] = o.useState(!1),
          u = o.useMemo(() => (__OVERLAY__ ? (0, _.Zg)() : (0, C.Rv)()), []),
          { keyboardModeEnabled: d, useReducedMotion: h } = (0, m.cj)(
            [x.Z],
            () => ({
              keyboardModeEnabled: x.Z.keyboardModeEnabled,
              useReducedMotion: x.Z.useReducedMotion,
            }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(P, { showBackdrop: a }),
            (0, r.jsx)(g.ModalRoot, {
              className: s()(N.noBackground, { [N.noShadow]: i }),
              size: g.ModalSize.DYNAMIC,
              "aria-label": Z.intl.string(Z.t.T9DA2N),
              transitionState: t,
              children: (0, r.jsx)(f.W, {
                component: "div",
                children: i
                  ? (0, r.jsx)(
                      S.Z,
                      {
                        handleDemonClose: function () {
                          c(!1), setTimeout(n, 500);
                        },
                      },
                      "raging-demo",
                    )
                  : (0, r.jsx)(
                      M,
                      {
                        content: u,
                        keyboardModeEnabled: d,
                        activateRagingDemon: function () {
                          !h && (v.Z.disable(), l(!0), c(!0));
                        },
                      },
                      "modal",
                    ),
              }),
            }),
          ],
        });
      }
    },
    377400: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(570140),
        o = n(317770),
        a = n(175281),
        s = n(285371);
      class c extends o.Z {
        _initialize() {
          r.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            r.Z.subscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts,
            );
        }
        _terminate() {
          r.Z.unsubscribe(
            "SHOW_KEYBOARD_SHORTCUTS",
            this.showKeyboardShortcuts,
          ),
            r.Z.unsubscribe(
              "HIDE_KEYBOARD_SHORTCUTS",
              this.hideKeyboardShortcuts,
            );
        }
        showKeyboardShortcuts() {
          (0, l.openModal)((e) => (0, i.jsx)(a.Z, { ...e }), { modalKey: s.J });
        }
        hideKeyboardShortcuts() {
          (0, l.closeModal)(s.J);
        }
      }
      t.Z = new c();
    },
    264549: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(392711),
        s = n.n(a),
        c = n(714338),
        u = n(585483),
        d = n(981631),
        h = n(727688);
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let m = { PRIMARY: () => !0, SECONDARY: () => !0 },
        f = () =>
          (0, i.jsxs)(
            "div",
            {
              className: h.symbol,
              children: [
                (0, i.jsx)("div", { className: h.symbolBackground }),
                (0, i.jsx)("img", { alt: "", src: n(977706) }),
              ],
            },
            "symbol",
          );
      class g extends l.PureComponent {
        componentDidMount() {
          this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
              this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3)),
            m.PRIMARY();
        }
        componentDidUpdate(e, t) {
          this.state.renderSecondary && !t.renderSecondary && m.SECONDARY();
        }
        componentWillUnmount() {
          clearTimeout(this._renderSecondaryTimeout),
            clearTimeout(this._doneTimeout);
        }
        renderPrimary() {
          return (0, i.jsxs)(
            "div",
            {
              className: h.primaryExplosion,
              children: [
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.circleInner,
                  src: n(273226),
                  width: 70,
                  height: 69,
                }),
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.circleOuter,
                  src: n(922026),
                  width: 96,
                  height: 95,
                }),
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.linesSecondary,
                  src: n(827926),
                  width: 183,
                  height: 104,
                }),
                (0, i.jsx)("img", {
                  alt: "",
                  className: h.linesMain,
                  src: n(873180),
                  width: 69,
                  height: 180,
                }),
              ],
            },
            "primary-explosion",
          );
        }
        renderSecondary(e, t) {
          return (0, i.jsxs)(
            "div",
            {
              className: h.secondaryExplosion,
              style: { top: t, left: e },
              children: [
                (0, i.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleInner,
                    src: n(272162),
                    width: 61,
                    height: 58,
                  },
                  "circle-inner",
                ),
                (0, i.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.circleOuter,
                    src: n(632989),
                    width: 85,
                    height: 85,
                  },
                  "circle-outer",
                ),
                (0, i.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesSecondary,
                    src: n(376252),
                    width: 162,
                    height: 173,
                  },
                  "lines-secondary",
                ),
                (0, i.jsx)(
                  "img",
                  {
                    alt: "",
                    className: h.linesMain,
                    src: n(720617),
                    width: 156,
                    height: 306,
                  },
                  "lines-main",
                ),
              ],
            },
            "secondary-explosion",
          );
        }
        render() {
          let {
              renderSecondary: e,
              offsetX: t,
              offsetY: n,
              animating: l,
              scale: r,
            } = this.state,
            a = [this.renderPrimary()];
          return (
            e && a.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
              className: o()(h.container, { [h.animate]: l }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(r, ")"),
              },
              children: a,
            })
          );
        }
        constructor(...e) {
          super(...e),
            p(this, "_renderSecondaryTimeout", null),
            p(this, "_doneTimeout", null),
            p(this, "state", {
              animating: !1,
              renderSecondary: !1,
              scale: s().random(0.6, 1, !0),
              offsetX: s().random(0, 140, !1) - 70,
              offsetY: s().random(0, 140, !1) - 70,
            }),
            p(this, "done", () => {
              this.props.onAnimationComplete(this.props.componentId);
            });
        }
      }
      let C = 240;
      class _ extends l.PureComponent {
        componentDidMount() {
          this.setTimeout(() => {
            this.setState({ visible: !0 }),
              u.S.dispatch(d.CkL.SHAKE_APP, { duration: 2400 });
          }, 1800),
            this.setTimeout(this.createExplosion, 1800);
        }
        componentWillUnmount() {
          for (let e of (c.Z.enable(),
          (this.children.length = 0),
          this._timeouts))
            clearTimeout(e);
        }
        render() {
          return (0, i.jsx)("div", {
            className: o()(h.ragingDemon, { [h.visible]: this.state.visible }),
            children: this.children,
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "_timeouts", []),
            p(this, "children", []),
            p(this, "state", { explosions: 0, visible: !1 }),
            p(this, "setTimeout", (e, t) => {
              let n = setTimeout(e, t);
              return this._timeouts.push(n), n;
            }),
            p(this, "removeExplosion", (e) => {
              let t = this.children,
                n = t.findIndex((t) => {
                  if (t.type !== g) return !1;
                  let n = t.props;
                  return null != n.componentId && n.componentId === e;
                });
              n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            p(this, "createExplosion", () => {
              let e = this.children,
                t = (window.innerWidth / 2) >> 0,
                n = (window.innerHeight / 2) >> 0;
              if (this.state.explosions < 8) {
                let l = "expl-".concat(this.state.explosions);
                e.push(
                  (0, i.jsx)(
                    g,
                    {
                      componentId: l,
                      top: s().random(n - 100, n + 100, !1),
                      left: s().random(t - 200, t + 200, !1),
                      onAnimationComplete: this.removeExplosion,
                    },
                    l,
                  ),
                ),
                  this.setTimeout(this.createExplosion, C),
                  this.setState({ explosions: this.state.explosions + 1 });
              } else this.setTimeout(this.addSymbol, 750);
            }),
            p(this, "addSymbol", () => {
              (this.children = [(0, i.jsx)(f, {}, "symbol")]),
                this.forceUpdate(),
                this.setTimeout(this.delayedClose, 3e3);
            }),
            p(this, "delayedClose", () => {
              this.props.handleDemonClose();
            });
        }
      }
      t.Z = _;
    },
    899740: function (e, t, n) {
      n.d(t, {
        q: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(355298);
      function r() {
        return (0, i.e7)([l.Z], () => l.Z.getMessageRequestsCount());
      }
    },
    817915: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
        t: function () {
          return l;
        },
      });
      let i = 64,
        l = 1200;
    },
    656063: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(503438),
        l = n(802856),
        r = n(420660),
        o = n(789407),
        a = n(974543),
        s = n(250889);
      function c(e) {
        return (0, l.Z)(e)
          ? s.H + e.name
          : (0, i.Z)(e) && null != e.party && null != e.party.id
            ? o.r9.id
            : (0, r.Z)(e) && null != e.url
              ? a._ + e.url
              : null != e.application_id
                ? e.application_id
                : null;
      }
    },
    761282: function (e, t, n) {
      n.d(t, {
        JE: function () {
          return u;
        },
        ct: function () {
          return c;
        },
        dc: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(261600),
        r = n(157925),
        o = n(303790);
      let a = { [r.gD]: new l.U() };
      function s(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let i = a[n];
        if (
          null != i &&
          (null === (t = i.shouldShow) || void 0 === t
            ? void 0
            : t.call(i, e)) !== !1
        )
          return i.createHeader(e);
      }
      function c(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let l = a[n];
        if (
          (null == l ? void 0 : l.body) != null &&
          (null === (t = l.shouldShow) || void 0 === t
            ? void 0
            : t.call(l, e)) !== !1
        ) {
          let t = l.body;
          return (0, i.jsx)(
            "section",
            { className: o.section, children: (0, i.jsx)(t, { activity: e }) },
            "delegate-".concat(n),
          );
        }
      }
      function u(e) {
        var t;
        let n = e.application_id;
        if (null == n) return !0;
        let i = a[n];
        return (
          null == i ||
          (null === (t = i.shouldShow) || void 0 === t
            ? void 0
            : t.call(i, e)) !== !1
        );
      }
    },
    868854: function (e, t, n) {
      n.d(t, {
        L: function () {
          return s;
        },
        a: function () {
          return c;
        },
      });
      var i = n(442837),
        l = n(480294),
        r = n(451478),
        o = n(817915),
        a = n(981631);
      function s() {
        let e = (0, i.e7)([r.Z], () => r.Z.windowSize().width);
        return (function (e, t) {
          return e > o.t && t;
        })(
          e,
          (0, i.e7)([l.Z], () => l.Z.hasConsented(a.pjP.PERSONALIZATION)),
        );
      }
      function c() {
        let e = r.Z.windowSize().width;
        return (function (e, t) {
          return e > o.t && t;
        })(e, l.Z.hasConsented(a.pjP.PERSONALIZATION));
      }
      function u(e, t) {
        return e > o.t && t;
      }
    },
    870569: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(686546),
        s = n(32986);
      function c(e) {
        let {
            tooltipText: t,
            children: n,
            onContextMenu: l,
            onClick: c,
            disabled: u,
            icon: d,
            iconForeground: h,
            innerClassName: p,
            tooltipClassName: m,
            onMouseEnter: f,
            onMouseLeave: g,
            "aria-label": C,
            "aria-checked": _,
            role: v,
            tooltipColor: x,
            tooltipForceOpen: I,
            tooltipContentClassName: b,
          } = e,
          S =
            "function" == typeof d
              ? (0, i.jsx)(d, {
                  width: 20,
                  height: 20,
                  size: "custom",
                  colorClass: null != h ? h : "",
                  color: "currentColor",
                })
              : d;
        return (0, i.jsx)(o.Tooltip, {
          tooltipClassName: m,
          text: t,
          "aria-label": C,
          color: x,
          tooltipContentClassName: b,
          forceOpen: I,
          children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...m } = e;
            return (0, i.jsxs)(o.Button, {
              ...m,
              look: o.Button.Looks.BLANK,
              size: o.Button.Sizes.NONE,
              disabled: u,
              innerClassName: p,
              wrapperClassName: s.button,
              className: r()(s.button, { [s.disabled]: u, [s.enabled]: !u }),
              onClick: (e) => {
                null != t && t(), null != c && c(e);
              },
              onMouseEnter: () => {
                null == d || d(), null == f || f();
              },
              onMouseLeave: () => {
                null == h || h(), null == g || g();
              },
              onContextMenu: l,
              role: v,
              "aria-checked": _,
              children: [
                null != n
                  ? (0, i.jsx)(a.ZP, {
                      width: 20,
                      height: 20,
                      mask: a.ZP.Masks.PANEL_BUTTON,
                      children: S,
                    })
                  : S,
                n,
              ],
            });
          },
        });
      }
    },
    345243: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(270350);
      function s(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(o.Text, {
          color: "none",
          className: r()(a.subtext, n),
          variant: "text-xs/normal",
          children: t,
        });
      }
    },
    115530: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(306005);
      function s(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(o.Text, {
          color: "none",
          className: r()(a.title, n),
          variant: "text-sm/medium",
          children: t,
        });
      }
    },
    339144: function (e, t, n) {
      n.d(t, {
        J: function () {
          return I;
        },
        y: function () {
          return x;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        o = n.n(r),
        a = n(481060),
        s = n(988298),
        c = n(636449),
        u = n(620662),
        d = n(513202),
        h = n(311352),
        p = n(803647),
        m = n(131704),
        f = n(626135),
        g = n(870569),
        C = n(981631),
        _ = n(388032),
        v = n(272371);
      function x(e, t, n) {
        return (
          null != e &&
          (null != n
            ? n.applicationId === e.id
            : null != t &&
              t.application_id === e.id &&
              t.type === C.IIU.PLAYING &&
              (0, u.Z)(t, C.xjy.JOIN))
        );
      }
      let I = l.memo(function (e) {
        let t,
          r,
          u,
          I,
          {
            stream: b,
            canGoLive: S,
            guildId: E,
            isStreaming: Z,
            channel: N,
            canStream: y,
            runningGame: T,
            embeddedActivity: A,
            activity: j,
            application: P,
            analyticsContext: R,
          } = e,
          M = x(P, j, A),
          L = l.useCallback(() => {
            o()(null != j, "Received null activity"),
              f.default.track(C.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: j.application_id,
                location: R.location,
              }),
              (0, s.h7)(j, !1);
          }, [j, R]),
          w = l.useCallback(
            (e, t) => () => {
              d.Z.leaveActivity({
                channelId: t.id,
                applicationId: e,
                showFeedback: !0,
              });
            },
            [],
          ),
          D = l.useCallback(() => {
            (0, p.Z)(b);
          }, [b]),
          O = l.useCallback(() => {
            let e = null != N && (0, m.vd)(N.type) ? N : null,
              t = null != e ? e.getGuildId() : E;
            (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("93382"),
                n.e("79477"),
                n.e("67911"),
              ]).then(n.bind(n, 60594));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  selectSource: !1,
                  guildId: t,
                  analyticsLocation: C.Sbl.ACTIVITY_PANEL,
                });
            });
          }, [N, E]);
        let k =
            (null != T || null == A || (0, c.R)()) && (Z || S)
              ? (Z
                  ? ((t = !1),
                    (r = D),
                    (u = a.ScreenXIcon),
                    (I = _.intl.string(_.t.S5anIS)))
                  : y
                    ? ((t = !1),
                      (r = O),
                      (u = a.ScreenArrowIcon),
                      (I =
                        null != T
                          ? _.intl.formatToPlainString(_.t.AB5gT0, {
                              game: T.name,
                            })
                          : _.intl.string(_.t.FeUKeH)))
                    : ((t = !0),
                      (r = null),
                      (u = a.ScreenArrowIcon),
                      (I =
                        null != N && (0, m.vd)(N.type)
                          ? _.intl.string(_.t.uQn9Bw)
                          : null != E
                            ? _.intl.string(_.t.fBXEoK)
                            : _.intl.string(_.t.n3feND))),
                (0, i.jsx)("div", {
                  className: v.panelButtonContainer,
                  children: (0, i.jsx)(g.Z, {
                    tooltipText: I,
                    disabled: t,
                    onClick: r,
                    icon: u,
                  }),
                }))
              : null,
          G =
            M && null == A
              ? (0, i.jsx)(g.Z, {
                  tooltipText: _.intl.string(_.t["hC/Ze3"]),
                  onClick: L,
                  icon: a.GroupPlusIcon,
                })
              : null,
          U =
            null == A || null == N
              ? null
              : (0, i.jsx)(g.Z, {
                  tooltipText: _.intl.string(_.t["R/FK4O"]),
                  onClick: w(A.applicationId, N),
                  icon: a.DoorExitIcon,
                }),
          B = null == b ? null : (0, i.jsx)(h.Z, {});
        return null == k && null == G && null == U
          ? null
          : (0, i.jsxs)("div", {
              className: v.actions,
              children: [k, G, null != U ? U : B],
            });
      });
    },
    840780: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(512722),
        s = n.n(a),
        c = n(442837),
        u = n(481060),
        d = n(570140),
        h = n(475179),
        p = n(925549),
        m = n(438139),
        f = n(730749),
        g = n(607070),
        C = n(636449),
        _ = n(214629),
        v = n(566620),
        x = n(317381),
        I = n(835473),
        b = n(933557),
        S = n(194082),
        E = n(436774),
        Z = n(594190),
        N = n(925329),
        y = n(102172),
        T = n(74299),
        A = n(914923),
        j = n(165393),
        P = n(989941),
        R = n(690221),
        M = n(231664),
        L = n(759198),
        w = n(131704),
        D = n(199902),
        O = n(314897),
        k = n(592125),
        G = n(984933),
        U = n(430824),
        B = n(131951),
        H = n(496675),
        V = n(158776),
        F = n(699516),
        W = n(944486),
        z = n(594174),
        Y = n(449224),
        K = n(358085),
        q = n(345243),
        Q = n(115530),
        X = n(339144),
        J = n(441248),
        $ = n(981631),
        ee = n(918559),
        et = n(395144);
      let en = (0, m.Z)(function (e) {
        let { message: t } = e;
        return (0, i.jsx)(q.Z, { children: t });
      });
      class ei extends l.PureComponent {
        renderSparkles() {
          let { useReducedMotion: e } = this.props;
          async function t() {
            let { default: e } = await n
              .e("5217")
              .then(n.t.bind(n, 801048, 19));
            return e;
          }
          return (0, i.jsx)("div", {
            className: et.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
              importData: t,
              shouldAnimate: !e,
              className: et.sparkles,
            }),
          });
        }
        renderActions() {
          return (0, i.jsx)(X.J, { ...this.props });
        }
        renderGame() {
          let { isStreaming: e, application: t, runningGame: n } = this.props;
          return (0, i.jsx)(J.k, { isStreaming: e, application: t, game: n });
        }
        renderScreenshare() {
          let {
              isStreaming: e,
              streamMetadata: t,
              streamQualityIndicator: n,
            } = this.props,
            { title: l, sanitizedTitle: r } = (0, A.Z)(t);
          return (0, i.jsxs)("div", {
            className: et.gameWrapper,
            children: [
              e
                ? (0, i.jsx)(j.Z, { title: r })
                : (0, i.jsx)(S.ZP, {
                    look: S.ZP.Looks.GRAY,
                    size: S.ZP.Sizes.SMALL,
                    className: et.liveIndicator,
                  }),
              (0, i.jsxs)("div", {
                className: et.info,
                children: [
                  (0, i.jsx)(Q.Z, { children: l }),
                  null != n &&
                    (0, i.jsxs)("div", {
                      className: et.perksDemoContainer,
                      children: [
                        (0, i.jsx)(u.NitroWheelIcon, {
                          size: "xxs",
                          color: E.JX.PREMIUM_TIER_2,
                        }),
                        (0, i.jsx)(L.Z, {
                          className: et.perksDemoText,
                          variant: "text-xxs/semibold",
                          children: n,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        renderEmbeddedActivity() {
          let e;
          let {
            application: t,
            embeddedActivity: n,
            channel: l,
            channelName: r,
            guildForConnectedChannel: o,
          } = this.props;
          if (null == n || null == l || null == t) return null;
          let a = { start: n.connectedSince },
            s = r;
          null != o
            ? ((e = $.Z5c.CHANNEL(o.id, l.id)),
              (s = "".concat(s, " / ").concat(o.name)))
            : (e = $.Z5c.CHANNEL($.ME, l.id));
          let c = (0, i.jsx)(R.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(q.Z, { className: et.channel, children: s }),
          });
          return (0, i.jsxs)("div", {
            className: et.gameWrapper,
            children: [
              (0, i.jsx)(N.Z, {
                className: et.gameIcon,
                game: t,
                size: N.Z.Sizes.SMALL,
              }),
              (0, i.jsxs)("div", {
                className: et.info,
                children: [
                  (0, i.jsx)(R.Z, {
                    href: e,
                    onClick: this.handleApplicationOrChannelLinkClick,
                    children: (0, i.jsx)(Q.Z, {
                      className: et.activityName,
                      children: t.name,
                    }),
                  }),
                  (0, w.Qm)(l.type) ? c : (0, i.jsx)(en, { timestamps: a }),
                ],
              }),
            ],
          });
        }
        render() {
          let {
            canGoLive: e,
            embeddedActivity: t,
            runningGame: n,
            isStreaming: l,
            streamMetadata: r,
            application: a,
            activity: s,
            className: c,
          } = this.props;
          return l || (((0, X.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)("div", {
                className: o()(et.panel, c),
                children: (0, i.jsxs)("div", {
                  className: et.body,
                  children: [
                    (() =>
                      null == n || (l && (null == r ? void 0 : r.pid) == null)
                        ? null != t
                          ? this.renderEmbeddedActivity()
                          : this.renderScreenshare()
                        : this.renderGame())(),
                    this.renderActions(),
                  ],
                }),
              })
            : null;
        }
        constructor(...e) {
          var t, n, i;
          super(...e),
            (t = this),
            (n = "handleApplicationOrChannelLinkClick"),
            (i = () => {
              var e;
              let { channel: t, embeddedActivity: n } = this.props;
              s()(null != t, "Channel is null during navigation click"),
                s()(null != n, "Activity null during navigation click"),
                p.Z.channelListScrollTo(
                  null !== (e = t.guild_id) && void 0 !== e ? e : $.ME,
                  t.id,
                ),
                (0, C.R)()
                  ? d.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                  : ((0, w.vd)(t.type) &&
                      h.Z.selectParticipant(t.id, n.applicationId),
                    (0, w.Qm)(t.type) && (0, v.tg)(ee.Ez.PANEL));
            }),
            n in t
              ? Object.defineProperty(t, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = i);
        }
      }
      t.Z = (0, f.Z)(function (e) {
        var t;
        let { guildId: n, ...l } = e,
          r = (0, c.e7)([O.default], () => O.default.getId()),
          o = (0, c.e7)([Z.ZP, Y.Z], () => (0, P.Z)(Z.ZP, Y.Z)),
          a = (0, c.e7)([W.Z, k.Z], () =>
            k.Z.getChannel(W.Z.getVoiceChannelId()),
          ),
          s = (0, c.e7)([x.ZP], () => x.ZP.getConnectedActivityChannelId()),
          u = (0, c.e7)([k.Z], () => k.Z.getChannel(s)),
          d = (0, c.e7)([U.Z], () =>
            U.Z.getGuild(null == u ? void 0 : u.guild_id),
          ),
          [h, p] = (0, c.Wu)([D.Z], () => [
            D.Z.getCurrentUserActiveStream(),
            D.Z.getStreamerActiveStreamMetadata(),
          ]),
          m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
          f = (0, c.e7)([x.ZP], () =>
            null != u ? x.ZP.getSelfEmbeddedActivityForChannel(u.id) : null,
          ),
          v = (0, c.e7)([U.Z, H.Z, G.ZP], () =>
            null != a
              ? y.JL(a, U.Z, H.Z, !1)
              : null != n && y.h_(G.ZP.getChannels(n), U.Z, H.Z).length > 0,
          ),
          [S] = (0, I.Z)([
            null !==
              (t = (function () {
                if (null != p && null != p.id) return p.id;
                if (null != o && null != o.id) return o.id;
                if (null != f) return f.applicationId;
              })()) && void 0 !== t
              ? t
              : "",
          ]),
          E = (0, c.e7)([x.ZP], () => x.ZP.getCurrentEmbeddedActivity()),
          N = (0, _.Z0)() && null != E && (0, C.R)(),
          A = (0, c.e7)([B.Z], () => (0, T.Z)(B.Z) && (0, K.isWindows)()),
          j = (0, c.e7)([V.Z], () =>
            null != r
              ? V.Z.findActivity(r, (e) => e.type === $.IIU.PLAYING)
              : null,
          ),
          R = null != h && h.ownerId === r && h.state !== $.jm8.ENDED,
          L = (0, c.e7)([z.default, F.Z], () =>
            null != u ? (0, b.F6)(u, z.default, F.Z) : void 0,
          ),
          w = (0, M.Z)();
        return (0, i.jsx)(ei, {
          ...l,
          guildId: n,
          canGoLive: A || N,
          activity: j,
          embeddedActivity: f,
          userId: r,
          runningGame: o,
          application: S,
          useReducedMotion: m,
          isStreaming: R,
          channel: u,
          canStream: v,
          stream: h,
          streamMetadata: p,
          channelName: L,
          guildForConnectedChannel: d,
          streamQualityIndicator: w,
        });
      });
    },
    441248: function (e, t, n) {
      n.d(t, {
        k: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(925329),
        s = n(810568),
        c = n(168524),
        u = n(115530),
        d = n(388032),
        h = n(832926);
      function p(e) {
        let { name: t, applicationId: n } = e,
          l = (0, c.Z)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: s.m1.RtcPanel,
            trackEntryPointImpression: !0,
          });
        return (0, i.jsx)(o.Clickable, {
          onClick: l,
          className: r()(null != l && h.clickableGameName),
          children: (0, i.jsx)(u.Z, { className: h.gameName, children: t }),
        });
      }
      function m(e) {
        var t, n;
        let { isStreaming: l, application: r, game: s } = e;
        let c =
          ((t = r),
          (n = s),
          null != t
            ? t.name
            : null != n
              ? n.name
              : d.intl.string(d.t["UQMV/P"]));
        return (0, i.jsxs)("div", {
          className: h.gameWrapper,
          children: [
            (0, i.jsxs)("div", {
              className: h.gameIconWrapper,
              children: [
                (0, i.jsx)(a.Z, {
                  className: h.gameIcon,
                  game: r,
                  pid: null == s ? void 0 : s.pid,
                }),
                l
                  ? (0, i.jsx)(o.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: h.liveBadge,
                    })
                  : null,
              ],
            }),
            (0, i.jsx)("div", {
              className: h.info,
              children:
                null != c
                  ? (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)(p, {
                        name: c,
                        applicationId: null == r ? void 0 : r.id,
                      }),
                    })
                  : null,
            }),
          ],
        });
      }
    },
    970645: function (e, t, n) {
      n.d(t, {
        o: function () {
          return s;
        },
      });
      var i = n(544891),
        l = n(570140),
        r = n(355467),
        o = n(853872),
        a = n(981631);
      async function s() {
        try {
          l.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
          let { body: e } = await i.tn.get({
              url: a.ANM.CHECKOUT_RECOVERY,
              rejectWithError: !0,
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
          t && !o.Z.hasFetchedPaymentSources && (await (0, r.tZ)()),
            l.Z.dispatch({
              type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
              isTargeted: t,
            });
        } catch (e) {
          l.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
        }
      }
    },
    514701: function (e, t, n) {
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var i = n(570140);
      function l() {
        i.Z.dispatch({ type: "HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED" });
      }
    },
    467721: function (e, t, n) {
      var i,
        l = n(442837),
        r = n(570140);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a() {
        return { lastTriggered: 0 };
      }
      let s = a();
      class c extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          s = { ...a(), ...(null != e ? e : {}) };
        }
        getState() {
          return s;
        }
        cooldownIsActive() {
          return s.lastTriggered >= Date.now() - 1728e5;
        }
      }
      o(c, "displayName", "HDStreamingViewerStore"),
        o(c, "persistKey", "HDStreamingViewerStore"),
        (t.Z = new c(r.Z, {
          LOGOUT: function () {
            s = a();
          },
          HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            s.lastTriggered = Date.now();
          },
        }));
    },
    841174: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060);
      function r(e) {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.e("16554").then(n.bind(n, 917314));
          return (n) => (0, i.jsx)(t, { guildId: e, ...n });
        });
      }
    },
    367207: function (e, t, n) {
      n(411104), n(47120);
      var i = n(200651);
      n(192379);
      var l = n(392711),
        r = n(848246),
        o = n(481060),
        a = n(570140),
        s = n(904245),
        c = n(317770),
        u = n(100527),
        d = n(358221),
        h = n(963249),
        p = n(93127),
        m = n(361291),
        f = n(592125),
        g = n(430824),
        C = n(594174),
        _ = n(431),
        v = n(626135),
        x = n(74538),
        I = n(557457),
        b = n(970645),
        S = n(30684),
        E = n(514701),
        Z = n(6242),
        N = n(467721),
        y = n(757692),
        T = n(114064),
        A = n(933843),
        j = n(281494),
        P = n(276444),
        R = n(684259),
        M = n(937579),
        L = n(1163),
        w = n(841174),
        D = n(522558),
        O = n(879463),
        k = n(822070),
        G = n(520540),
        U = n(11352),
        B = n(474936),
        H = n(981631),
        V = n(354459),
        F = n(37113),
        W = n(388032);
      function z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class Y extends c.Z {
        _initialize() {
          __OVERLAY__
            ? a.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (a.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              a.Z.subscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              a.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              a.Z.subscribe("POST_CONNECTION_OPEN", this._trackSkyLoadExposure),
              a.Z.subscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              a.Z.subscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        _terminate() {
          __OVERLAY__
            ? a.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (a.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              a.Z.unsubscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              a.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackSkyLoadExposure,
              ),
              a.Z.unsubscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              a.Z.unsubscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        handleMessageLengthUpsell(e) {
          let { channel: t, content: l } = e;
          (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e("33184").then(n.bind(n, 465836));
            return (n) => (0, i.jsx)(e, { channel: t, content: l, ...n });
          });
        }
        _getReferralIncentiveEligibility() {
          let e = C.default.getCurrentUser();
          if (P.Z.getIsFetchingReferralIncentiveEligibility() || !(0, x.I5)(e))
            return;
          let t = { location: "PremiumManager" },
            n = { autoTrackExposure: !1 };
          if (
            !!G.g.getCurrentConfig(t, n).enabled &&
            !O.eP.getCurrentConfig(t, n).enabled
          )
            k.$.getCurrentConfig(t, n).enabled && (0, j.bq)();
        }
        openPremiumPaymentModalInApp(e) {
          if (__OVERLAY__)
            throw Error(
              "Should not use this function from the overlay, use ModalAPI.openModal instead",
            );
          return new Promise((t, n) => {
            (0, h.Z)({
              ...e,
              onClose: (e) => {
                e ? t() : n();
              },
            });
          });
        }
        openPremiumPaymentModalInOverlay(e) {
          if (__OVERLAY__)
            throw Error(
              "Should not use this function from the overlay, use ModalAPI.openModal instead",
            );
          let {
            initialPlanId: t,
            subscriptionTier: n,
            followupSKUInfo: i,
            analyticsObject: l,
          } = null != e ? e : {};
          return new Promise((e, r) => {
            (this._premiumPaymentModalCloseResolve = e),
              (this._premiumPaymentModalCloseReject = r),
              a.Z.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: n,
                followupSKUInfo: i,
                analyticsObject: l,
              });
          });
        }
        maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
          let { enabled: t } = L.Z.getCurrentConfig(
            { location: "PremiumManager" },
            { autoTrackExposure: !1 },
          );
          if (!t || e.state !== H.hes.DISCONNECTED || e.willReconnect) return;
          let n = f.Z.getChannel(e.channelId);
          if (null == n) return;
          let i = T.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
          if (
            (i &&
              a.Z.dispatch({
                type: "PREMIUM_PERKS_DEMO_COMPLETE",
                perkType: r.q.STREAM_HIGH_QUALITY,
              }),
            !i)
          )
            return;
          let { resolution: l, fps: o } = m.Z.getState();
          !(0, A.mc)(l, o) && (0, w.Z)(n.guild_id);
        }
        constructor(...e) {
          super(...e),
            z(this, "_premiumPaymentModalCloseResolve", null),
            z(this, "_premiumPaymentModalCloseReject", null),
            z(this, "_maybeFetchPremiumOffer", async () => {
              let e = C.default.getCurrentUser();
              if (null != e && e.verified) {
                let t = !(0, x.I5)(e) && _.Z.shouldFetchOffer();
                await (0, M.T)("PremiumManager", void 0, t);
              }
              a.Z.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
            }),
            z(this, "_maybeFetchCheckoutRecovery", async () => {
              let e = C.default.getCurrentUser();
              null != e &&
                e.verified &&
                !(0, x.I5)(e) &&
                S.Z.shouldFetchCheckoutRecovery() &&
                (await (0, b.o)());
            }),
            z(this, "_maybeFetchUserAffinities", () => {
              let { enabled: e } = D.w.getCurrentConfig(
                { location: "PremiumManager" },
                { autoTrackExposure: !1 },
              );
              e && (0, p.W)();
            }),
            z(this, "_trackCustomNotificationSoundsExposure", () => {
              U.Y.trackExposure({ location: "PremiumManager" });
            }),
            z(this, "_trackSkyLoadExposure", () => {
              R.Z.trackExposure({ location: "PremiumManager" });
            }),
            z(this, "_handlePremiumPaymentModalOpen", (e) => {
              (0, h.Z)({
                ...e,
                analyticsLocations: [u.Z.OVERLAY],
                onClose: (e) => {
                  a.Z.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                    didSucceed: e,
                  });
                },
              });
            }),
            z(this, "_handlePremiumPaymentModalClose", (e) => {
              let { didSucceed: t } = e;
              t && null != this._premiumPaymentModalCloseResolve
                ? this._premiumPaymentModalCloseResolve()
                : null != this._premiumPaymentModalCloseReject &&
                  this._premiumPaymentModalCloseReject(),
                (this._premiumPaymentModalCloseResolve = null),
                (this._premiumPaymentModalCloseReject = null);
            }),
            z(this, "maybeShowHDStreamingViewerUpsellMessage", (e) => {
              let t = C.default.getCurrentUser();
              (null == t ? void 0 : t.id) !== e.senderUserId &&
                this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            z(
              this,
              "_maybeSendViewerUpsellMessage",
              (0, l.debounce)((e, t, n) => {
                var i, l;
                let r = d.Z.getSelectedParticipant(e),
                  o = (0, y.o)(r, n),
                  { sendNitroMessage: a } = (0, Z.TD)(o),
                  c =
                    null !==
                      (l =
                        null === (i = g.Z.getGuild(t)) || void 0 === i
                          ? void 0
                          : i.premiumTier) && void 0 !== l
                      ? l
                      : H.Eu4.NONE;
                if (
                  N.Z.cooldownIsActive() ||
                  !a ||
                  c >= H.Eu4.TIER_2 ||
                  (null == r ? void 0 : r.type) !== V.fO.STREAM ||
                  (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) ||
                  null == r.maxResolution ||
                  null == r.maxFrameRate
                )
                  return;
                E.I();
                let u = W.intl.formatToPlainString(W.t.AbyeZG, {
                  nickname: r.userNick,
                  resolution: (0, F.o6)(r.maxResolution.height),
                  fps: (0, I.bp)(r.maxFrameRate),
                });
                s.Z.sendNitroSystemMessage(e, u),
                  v.default.track(H.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                    type: B.cd.HD_STREAMING_VIEWER_UPSELL,
                    location_section:
                      null != t ? H.jXE.TEXT_IN_VOICE : H.jXE.CHANNEL_TEXT_AREA,
                    location_object: H.qAy.MESSAGE,
                    guild_id: t,
                  });
              }, 200),
            );
        }
      }
      t.Z = new Y();
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(481060),
        a = n(457900);
      function s(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(o.Text, {
          className: r()({ [a.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    900085: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return F;
        },
      }),
        n(411104),
        n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        s = n(873546),
        c = n(442837),
        u = n(481060),
        d = n(239091),
        h = n(134616),
        p = n(714338),
        m = n(212819),
        f = n(14429),
        g = n(576855),
        C = n(313201),
        _ = n(592125),
        v = n(888369),
        x = n(430824),
        I = n(306680),
        b = n(944486),
        S = n(938475),
        E = n(585483),
        Z = n(63063),
        N = n(51596),
        y = n(823385),
        T = n(415795),
        A = n(670512),
        j = n(981631),
        P = n(388032),
        R = n(449532);
      function M(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let L = 10,
        w = () =>
          (0, l.jsxs)("div", {
            className: R.emptyState,
            children: [
              (0, l.jsx)("div", {
                className: R.emptyStateNote,
                children: P.intl.string(P.t.bpbATE),
              }),
              (0, l.jsx)("div", {
                className: R.emptyStateCTA,
                children: (0, l.jsx)(u.Anchor, {
                  href: Z.Z.getArticleURL(j.BhN.QUICK_SWITCHER_TUTORIAL),
                  children: P.intl.string(P.t["4iPfEB"]),
                }),
              }),
            ],
          });
      class D extends (i = r.Component) {
        render() {
          let e = x.Z.getGuild(this.props.channel.guild_id);
          return (0, l.jsx)(T.$W, {
            ...this.props,
            children: (0, l.jsx)("div", {
              className: R.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      M(D, "defaultProps", { unread: !1 });
      let O = c.ZP.connectStores([I.ZP, _.Z], (e) => {
          let { channel: t } = e;
          return {
            unread: I.ZP.hasUnread(t.id),
            mentions: I.ZP.getMentionCount(t.id),
            category: _.Z.getChannel(t.parent_id),
          };
        })(D),
        k = c.ZP.connectStores([S.ZP], (e) => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...",
            );
          return { voiceStates: S.ZP.getVoiceStates(t.guild_id)[t.id] };
        })(D),
        G = c.ZP.connectStores([v.default], (e) => {
          let { guild: t } = e;
          return { unread: v.default.hasUnread(t.id) };
        })(T.ic),
        U = c.ZP.connectStores([I.ZP], (e) => {
          let { channel: t } = e;
          return { mentions: I.ZP.getMentionCount(t.id) };
        })(T.PZ),
        B = c.ZP.connectStores([_.Z, I.ZP], (e) => {
          let { user: t } = e,
            n = _.Z.getDMFromUserId(t.id);
          return { mentions: null != n ? I.ZP.getMentionCount(n) : 0 };
        })(T.n5);
      function H(e, t, n) {
        return (0, l.jsx)(
          u.Tooltip,
          {
            text: n,
            children: (e) =>
              (0, l.jsx)("span", {
                ...e,
                className: R.autocompleteQuerySymbol,
                children: t,
              }),
          },
          e,
        );
      }
      class V extends r.PureComponent {
        componentDidMount() {
          p.Z.disable(), p.Z.enableTemp(h.u);
        }
        componentWillUnmount() {
          p.Z.disableTemp(), p.Z.enable();
        }
        componentDidUpdate(e, t) {
          let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: l } = this.props,
            { current: r } = this.scrollerRef;
          if (null != r)
            i !== t.query
              ? r.scrollTo({ to: 0 })
              : n &&
                l >= 0 &&
                r.scrollToIndex({ section: 0, row: l, padding: 10 });
        }
        close() {
          (0, N.Cp)();
        }
        search(e) {
          this.setState({ query: e }), (0, N.yC)(e);
        }
        renderInput() {
          let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && "" !== n;
          return (0, l.jsx)(u.FocusRing, {
            children: (0, l.jsx)("input", {
              className: R.input,
              "aria-label": P.intl.string(P.t.ZvKwYW),
              ref: this.inputRef,
              type: "text",
              role: "combobox",
              "aria-controls": this._listId,
              "aria-expanded": i,
              "aria-activedescendant": i ? this.getRowId(e) : void 0,
              "aria-autocomplete": "list",
              placeholder: P.intl.string(P.t.Vtvewc),
              onChange: this.handleInputChange,
              onKeyDown: this.handleKeyDown,
              value: this.state.query,
              spellCheck: !1,
              autoFocus: !0,
            }),
          });
        }
        renderSection() {
          return null;
        }
        renderResults() {
          let { query: e } = this.state,
            { results: t } = this.props;
          return 0 === t.length && e.length > 0
            ? (0, l.jsx)(w, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": P.intl.string(P.t.Wef5Dg),
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: L,
                  sections: [t.length],
                  className: R.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          E.S.dispatch(j.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, l.jsx)(g.Z, {
            className: a()(R.protip, {
              [R.hasContent]: this.state.query.length > 0,
            }),
            type: g.Z.Types.INLINE,
            children: P.intl.format(P.t.wukqXV, {
              userSymbolHook: (e, t) =>
                H(t, m.xQ.USER, P.intl.string(P.t.GQRCGh)),
              textChannelSymbolHook: (e, t) =>
                H(t, m.xQ.TEXT_CHANNEL, P.intl.string(P.t.wrwhub)),
              voiceChannelSymbolHook: (e, t) =>
                H(t, m.xQ.VOICE_CHANNEL, P.intl.string(P.t["jz+hJi"])),
              guildSymbolHook: (e, t) =>
                H(t, m.xQ.GUILD, P.intl.string(P.t.WuwCWl)),
              helpdeskArticle: Z.Z.getArticleURL(j.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
          return t
            ? null
            : (0, l.jsx)(A.Z, { hasQuery: e.length > 0 && n.length > 0 });
        }
        render() {
          return (0, l.jsx)(u.ModalRoot, {
            "aria-label": P.intl.string(P.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: a()(R.container, s.tq && R.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)("div", {
              className: a()(R.quickswitcher, s.tq && R.mobileQuickswitcher),
              onMouseMove: this.handleMouseMove,
              children: [
                this.renderInput(),
                this.renderResults(),
                this.renderProtip(),
                this.renderTutorial(),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            M(this, "scrollerRef", r.createRef()),
            M(this, "inputRef", r.createRef()),
            M(this, "_listId", (0, C.hQ)()),
            M(this, "state", {
              query: this.props.query,
              mouseFocusDisabled: !0,
            }),
            M(this, "handleInputChange", () => {
              let { current: e } = this.inputRef;
              null != e && this.search(e.value);
            }),
            M(this, "handleMouseMove", () => {
              let { mouseFocusDisabled: e } = this.state;
              if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            M(this, "focusResult", (e) => {
              if (!this.state.mouseFocusDisabled)
                (0, N.tF)(this.props.results.indexOf(e));
            }),
            M(this, "selectResult", (e) => {
              (0, N.Se)(e, this.props.queryMode === m.h8.TEXT_CHANNEL);
            }),
            M(this, "handleContextMenu", (e) => {
              let t = this.props.results[this.props.selectedIndex];
              switch (t.type) {
                case m.h8.GUILD:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("63288"),
                      n.e("33053"),
                      n.e("17298"),
                      n.e("7654"),
                      n.e("42309"),
                      n.e("98479"),
                      n.e("31113"),
                      n.e("85552"),
                      n.e("58227"),
                      n.e("16114"),
                      n.e("54770"),
                      n.e("23956"),
                      n.e("33213"),
                      n.e("22179"),
                    ]).then(n.bind(n, 545135));
                    return (n) =>
                      (0, l.jsx)(e, {
                        ...n,
                        guild: t.record,
                        onSelect: N.Cp,
                        hideSettings: !0,
                      });
                  });
                case m.h8.TEXT_CHANNEL:
                case m.h8.VOICE_CHANNEL:
                  let i = t.record,
                    r = x.Z.getGuild(i.getGuildId());
                  if (null == r) return;
                  switch (i.type) {
                    case j.d4z.GUILD_TEXT:
                    case j.d4z.GUILD_ANNOUNCEMENT:
                    case j.d4z.GUILD_FORUM:
                    case j.d4z.GUILD_MEDIA:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          n.e("79695"),
                          n.e("18320"),
                          n.e("54310"),
                        ]).then(n.bind(n, 373651));
                        return (t) =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: i,
                            guild: r,
                            onSelect: N.Cp,
                          });
                      });
                    case j.d4z.GUILD_VOICE:
                    case j.d4z.GUILD_STAGE_VOICE:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                          n.e("79695"),
                          n.e("18320"),
                          n.e("83331"),
                        ]).then(n.bind(n, 213202));
                        return (t) =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: i,
                            guild: r,
                            onSelect: N.Cp,
                          });
                      });
                    case j.d4z.ANNOUNCEMENT_THREAD:
                    case j.d4z.PUBLIC_THREAD:
                    case j.d4z.PRIVATE_THREAD:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("40157")
                          .then(n.bind(n, 422200));
                        return (t) =>
                          (0, l.jsx)(e, { ...t, channel: i, onSelect: N.Cp });
                      });
                    case j.d4z.GUILD_STORE:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("99905")
                          .then(n.bind(n, 649400));
                        return (t) =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: i,
                            guild: r,
                            onSelect: N.Cp,
                          });
                      });
                    case j.d4z.GUILD_DIRECTORY:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("70623")
                          .then(n.bind(n, 99334));
                        return (t) => (0, l.jsx)(e, { ...t, channel: i });
                      });
                  }
                  break;
                case m.h8.GROUP_DM:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, l.jsx)(e, {
                        ...n,
                        channel: t.record,
                        selected: b.Z.getChannelId() === t.record.id,
                        onSelect: N.Cp,
                      });
                  });
                case m.h8.USER:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("95052"),
                    ]).then(n.bind(n, 881351));
                    return (n) =>
                      (0, l.jsx)(e, { ...n, user: t.record, onSelect: N.Cp });
                  });
              }
            }),
            M(this, "handleKeyDown", (e) => {
              let { mouseFocusDisabled: t, query: n } = this.state,
                { results: i } = this.props;
              !1 === t && this.setState({ mouseFocusDisabled: !0 });
              let l = e.key.toLowerCase(),
                { selectedIndex: r } = this.props;
              switch (l) {
                case "escape":
                  e.preventDefault(),
                    e.stopPropagation(),
                    n.length > 0 ? this.search("") : (0, N.Cp)();
                  return;
                case "k":
                  (!0 === e.ctrlKey || !0 === e.metaKey) &&
                    (e.preventDefault(), e.stopPropagation(), (0, N.Cp)());
                  return;
                case "enter": {
                  if (-1 === r) return;
                  if ((e.preventDefault(), e.altKey))
                    return this.handleContextMenu(e);
                  let t = i[r];
                  null != t && this.selectResult(t);
                  return;
                }
                case "arrowup":
                  r = (0, m.gJ)(m.a8.UP, r, i);
                  break;
                case "arrowdown":
                  r = (0, m.gJ)(m.a8.DOWN, r, i);
                  break;
                case "n":
                  if (!e.ctrlKey) return;
                  r = (0, m.gJ)(m.a8.DOWN, r, i);
                  break;
                case "p":
                  if (!e.ctrlKey) return;
                  r = (0, m.gJ)(m.a8.UP, r, i);
                  break;
                default:
                  return;
              }
              e.preventDefault(), (0, N.tF)(r);
            }),
            M(this, "renderRow", (e) => {
              let { row: t } = e,
                n = this.props.results[t],
                { selectedIndex: i } = this.props,
                { showScores: r } = f.Z.getCurrentConfig(
                  { location: "62f4be_1" },
                  { autoTrackExposure: !1 },
                );
              switch (n.type) {
                case m.h8.HEADER:
                  return (0, l.jsx)(
                    T.h4,
                    { children: n.record.text },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.TEXT_CHANNEL:
                  return (0, l.jsx)(
                    O,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.VOICE_CHANNEL:
                  return (0, l.jsx)(
                    k,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.GUILD:
                  return (0, l.jsx)(
                    G,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      guild: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.USER:
                  return (0, l.jsx)(
                    B,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      user: n.record,
                      comparator: n.comparator,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.GROUP_DM:
                  return (0, l.jsx)(
                    U,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      channel: n.record,
                      score: r ? n.score : void 0,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.APPLICATION:
                  return (0, l.jsx)(
                    T.Mx,
                    {
                      id: this.getRowId(t),
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      application: n.record,
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.LINK:
                  return (0, l.jsx)(
                    T.rU,
                    {
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      link: n.record,
                      score: r ? n.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case m.h8.IN_APP_NAVIGATION:
                  return (0, l.jsx)(
                    T.s8,
                    {
                      focused: i >= 0 && t === i,
                      onClick: () => this.selectResult(n),
                      onMouseEnter: () => this.focusResult(n),
                      onFocus: this.focusNode,
                      onContextMenu: this.handleContextMenu,
                      navigationRecord: n.record,
                      score: r ? n.score : void 0,
                      id: this.getRowId(t),
                    },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                default:
                  return null;
              }
            });
        }
      }
      function F(e) {
        let t = (0, c.cj)([y.Z], () => y.Z.getProps());
        return (0, l.jsx)(V, { ...t, ...e });
      }
    },
    329557: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(570140),
        o = n(317770),
        a = n(51596),
        s = n(823385),
        c = n(900085);
      let u = "QUICK_SWITCHER_MODAL_KEY";
      class d extends o.Z {
        _initialize() {
          r.Z.subscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        _terminate() {
          r.Z.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow),
            r.Z.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
        }
        handleShow() {
          s.Z.isOpen() &&
            !(0, l.hasModalOpen)(u) &&
            (0, l.openModal)((e) => (0, i.jsx)(c.Z, { ...e }), {
              modalKey: u,
              instant: !0,
              onCloseCallback: a.Cp,
            });
        }
        handleHide() {
          (0, l.closeModal)(u);
        }
      }
      t.Z = new d();
    },
    670512: function (e, t, n) {
      n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        o = n(120356),
        a = n.n(o),
        s = n(748780),
        c = n(846519),
        u = n(481060),
        d = n(585483),
        h = n(981631),
        p = n(388032),
        m = n(159381);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let g = { friction: 15, tension: 100 };
      class C extends (i = r.PureComponent) {
        componentDidMount() {
          this.setState({ shown: !0 }),
            d.S.subscribe(
              h.CkL.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus,
            );
        }
        componentWillUnmount() {
          this.focusTimeout.stop(),
            d.S.unsubscribe(
              h.CkL.QUICKSWITCHER_RESULT_FOCUS,
              this.handleResultFocus,
            );
        }
        componentDidUpdate() {
          let { hasQuery: e } = this.props;
          !e && this.springTo(0);
        }
        springTo(e) {
          let { reducedMotion: t } = this.context;
          !0 !== t.enabled &&
            s.Z.spring(this.state.translateY, {
              toValue: Math.min(e, 250),
              ...g,
            }).start();
        }
        renderArrowGroup(e) {
          return (0, l.jsxs)("div", {
            className: a()(m.arrowGroup, e),
            children: [
              (0, l.jsx)(s.Z.div, {
                className: a()(m.arrowContainer, m.horizontal),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(403756),
                  className: m.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: a()(m.arrowContainer, m.diag1),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(536404),
                  className: m.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: a()(m.arrowContainer, m.diag2),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(569347),
                  className: m.arrowIcon,
                }),
              }),
            ],
          });
        }
        renderContent() {
          return (0, l.jsxs)("div", {
            className: m.tutorialMessages,
            children: [
              (0, l.jsx)("div", {
                className: m.searchMessage,
                children: p.intl.string(p.t.Mp0IGB),
              }),
              (0, l.jsx)("div", {
                className: m.selectMessage,
                children: p.intl.string(p.t["3CbpwM"]),
              }),
            ],
          });
        }
        render() {
          let { hasQuery: e } = this.props,
            { shown: t } = this.state;
          return (0, l.jsxs)("div", {
            ref: this.rootRef,
            className: a()(m.tutorial, { [m.shown]: t, [m.hasQuery]: e }),
            children: [
              this.renderContent(),
              this.renderArrowGroup(m.__invalid_left),
              this.renderArrowGroup(m.right),
            ],
          });
        }
        getStyle() {
          let { reducedMotion: e } = this.context;
          return !0 === e.enabled
            ? {}
            : {
                opacity: 1,
                transform: [
                  {
                    translateY: this.state.translateY.interpolate({
                      inputRange: [0, 250],
                      outputRange: ["0px", "".concat(250, "px")],
                    }),
                  },
                  { translateZ: 0 },
                ],
              };
        }
        constructor(...e) {
          super(...e),
            f(this, "state", { shown: !1, translateY: new s.Z.Value(0) }),
            f(this, "rootRef", r.createRef()),
            f(this, "focusTimeout", new c.V7()),
            f(this, "handleResultFocus", (e) => {
              let { node: t } = e;
              this.focusTimeout.start(1, () => {
                if (
                  this.props.hasQuery &&
                  null != t &&
                  null != this.rootRef.current
                ) {
                  let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: n } = t.getBoundingClientRect(),
                    i = Math.abs(e - n);
                  this.springTo(i - 118 + 9);
                } else this.springTo(0);
              });
            });
        }
      }
      f(C, "contextType", u.AccessibilityPreferencesContext), (t.Z = C);
    },
    802718: function (e, t, n) {
      n.d(t, {
        U: function () {
          return _;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(91192),
        o = n(481060),
        a = n(442837),
        s = n(239091),
        c = n(410030),
        u = n(377171),
        d = n(682662),
        h = n(662146),
        p = n(678513),
        m = n(981631),
        f = n(388032),
        g = n(477090);
      function C(e) {
        let { target: t } = e,
          a = (0, r.Ie)("fakedoor"),
          p = l.useCallback(() => {
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("22862"),
                n.e("96252"),
              ]).then(n.bind(n, 646202));
              return (n) => (0, i.jsx)(e, { ...n, target: t });
            });
          }, [t]),
          C = l.useCallback(
            (e) => {
              (0, s.jW)(e, async () => {
                let { default: e } = await n.e("39612").then(n.bind(n, 761624));
                return (n) => (0, i.jsx)(e, { ...n, signupTarget: t });
              });
            },
            [t],
          ),
          _ = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat",
          ),
          v = (0, i.jsxs)("div", {
            className: g.tooltipContainer,
            children: [
              (0, i.jsx)("div", {
                className: g.tooltipBackground,
                style: { background: _ },
              }),
              (0, i.jsx)(o.Heading, {
                variant: "heading-sm/medium",
                children: t.tooltipHeader,
              }),
              (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                children: f.intl.string(f.t.IIbwAg),
              }),
            ],
          }),
          x = (0, c.Fg)();
        return (0, i.jsxs)(d.H, {
          children: [
            (0, i.jsx)(o.ThemeContextProvider, {
              theme: m.BRd.DARK,
              children: (0, i.jsx)(h.Z, {
                text: v,
                tooltipClass: g.tooltip,
                tooltipContentClass: g.tooltipContent,
                children: (0, i.jsx)(o.ThemeContextProvider, {
                  theme: x,
                  children: (0, i.jsx)(o.BlobMask, {
                    lowerBadge: (0, i.jsx)(o.NumberBadge, {
                      count: 1,
                      color: u.Z.BG_BRAND,
                    }),
                    children: (0, i.jsx)(o.NavItem, {
                      ...a,
                      onClick: p,
                      onContextMenu: C,
                      children: (0, i.jsx)(o.BellIcon, {
                        color: u.Z.TEXT_NORMAL,
                      }),
                    }),
                  }),
                }),
              }),
            }),
            (0, i.jsx)("div", {
              style: { background: _, width: 0, height: 0 },
            }),
          ],
        });
      }
      function _() {
        let e = (0, a.e7)([p.Z], () => p.Z.getActiveUserSignUp());
        return null == e ? null : (0, i.jsx)(C, { target: e });
      }
    },
    445507: function (e, t, n) {
      n.d(t, {
        Q3: function () {
          return d;
        },
        Zl: function () {
          return u;
        },
        mC: function () {
          return o;
        },
        mU: function () {
          return a;
        },
        qJ: function () {
          return s;
        },
        u9: function () {
          return r;
        },
        xQ: function () {
          return c;
        },
        z5: function () {
          return h;
        },
      });
      var i = n(704215),
        l = n(388032);
      function r(e) {
        return "user" === e.type;
      }
      function o(e) {
        return "guild" === e.type;
      }
      function a(e) {
        return JSON.stringify({
          playstyle: e.playstyle,
          acknowledgeCap: e.acknowledgeCap,
          acknowledgeScreen: e.acknowledgeScreen,
        });
      }
      let s = {
          key: "valorant-user",
          type: "user",
          title: "Preview new features for Valorant players on Discord",
          subtitle:
            "Get notified about new features we're building to help Valorant players connect and play together on Discord.",
          tooltipHeader: "Want a preview of new features for Valorant players?",
          question: "Which feature are you interested in the most?",
          questionMargin: 150,
          backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
          dismissibleContent: i.z.GAME_ONE_USER_SIGNUPS,
          options: [
            {
              key: "clan",
              icon: "compass",
              title: "Gaming Guilds",
              description:
                "Small, organized servers with similar vibes, play styles, or skill levels who hang out and play regularly.",
              type: "email",
            },
            {
              key: "missions",
              icon: "gamepad",
              title: "Missions",
              description:
                "Join one-time groups of players trying to achieve the same goal as you, like ranking up or beating a raid boss.",
              type: "email",
            },
            {
              key: "gamenight",
              icon: "controller",
              title: "Game Nights",
              description:
                "Get matched with other players on specific criteria like play style or skill and get invited to a scheduled gaming session.",
              type: "email",
            },
          ],
        },
        c = {
          key: "valorant-admin",
          type: "guild",
          title: "Want to recruit more Valorant players for your server?",
          subtitle:
            "Your server is exclusively invited to sign up for future Discovery features.",
          noticeHeader:
            "Want to recruit more people to play Valorant in your server?",
          question:
            "Interested? Pick one to sign up for updates and early access:",
          questionMargin: 110,
          backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/signups/Valorant_Background.png",
          dismissibleContent: i.z.GAME_ONE_USER_SIGNUPS,
          options: [
            {
              key: "clan",
              icon: "compass",
              title: "Gaming Guilds",
              description:
                "Become a Gaming Guild, where players with similar vibes or skill hang out and play regularly. You'll be discoverable among other guilds and approve member applications to join.",
              type: "clan",
            },
            {
              key: "voice-hub",
              icon: "microphone",
              title: "Gaming Voice Hub",
              description:
                "A hub that houses a large selection of voice channels dedicated to gaming, each holding up to 10 people. Join an existing channel or create your own and set the game you're playing, goals, or vibes.",
              type: "email",
            },
            {
              key: "hub",
              icon: "controller",
              title: "Game Hub",
              description:
                "Dedicated discovery pages for popular games. Admins can choose to have their server’s text channel activity displayed in the hubs so users can see the conversations happening across Discord for a specific game.",
              type: "email",
            },
          ],
        },
        u = {
          key: "genshin-user",
          type: "user",
          title: "Preview new features for Genshin Impact players on Discord",
          subtitle:
            "Get notified about new features we're building to help Genshin Impact players connect on Discord.",
          tooltipHeader:
            "Want a preview of new features for Genshin Impact players?",
          question: "Which feature are you interested in the most?",
          questionMargin: 150,
          backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/signups/Genshin_Background.png",
          dismissibleContent: i.z.GENSHIN_USER_SIGNUPS,
          options: [
            {
              key: "clan",
              icon: "compass",
              title: "Gaming Guilds",
              description:
                "Small, organized servers with similar vibes, play styles, or skill levels who chat, hang out, or play together regularly.",
              type: "email",
            },
            {
              key: "missions",
              icon: "gamepad",
              title: "Missions",
              description:
                "Join one-time groups of players trying to achieve the same goal as you, like farming or beating a raid boss.",
              type: "email",
            },
            {
              key: "gamenight",
              icon: "controller",
              title: "Game Nights",
              description:
                "Get matched with other players on specific criteria like play style or skill and get invited to a scheduled gaming session.",
              type: "email",
            },
          ],
        },
        d = {
          key: "genshin-admin",
          type: "guild",
          title:
            "Interested in recruiting more Genshin Impact players for your server?",
          subtitle:
            "Your server is exclusively invited to sign up for future Discovery features.",
          noticeHeader:
            "Want to recruit more Genshin Impact players for your server?",
          question:
            "Interested? Pick one to sign up for updates and early access:",
          questionMargin: 80,
          backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/signups/Genshin_Background.png",
          dismissibleContent: i.z.GENSHIN_USER_SIGNUPS,
          options: [
            {
              key: "clan",
              icon: "compass",
              title: "Gaming Guilds",
              description:
                "Become a Gaming Guild, where players with similar vibes or skill chat, hang out, and play regularly. You’ll be discoverable among other guilds and approve new member applications.",
              type: "clan",
            },
            {
              key: "voice-hub",
              icon: "microphone",
              title: "Gaming Voice Hub",
              description:
                "A hub that houses a large selection of voice channels dedicated to gaming, each holding up to 10 people. Join an existing channel or create your own and set the game you're playing, goals, or vibes.",
              type: "email",
            },
            {
              key: "hub",
              icon: "controller",
              title: "Game Hub",
              description:
                "Dedicated discovery pages for popular games. Admins can choose to have their server’s text channel activity displayed in the hubs so users can see the conversations happening across Discord for a specific game.",
              type: "email",
            },
          ],
        };
      function h() {
        return [
          {
            value: "very-casual",
            title: l.intl.string(l.t["4g8/9/"]),
            description: l.intl.string(l.t["0qVVu7"]),
          },
          {
            value: "casual",
            title: l.intl.string(l.t.gfRcc3),
            description: l.intl.string(l.t.zbh9nJ),
          },
          {
            value: "hardcore",
            title: l.intl.string(l.t["lj/ol5"]),
            description: l.intl.string(l.t.U2ICp6),
          },
          {
            value: "very-hardcore",
            title: l.intl.string(l.t.kQaews),
            description: l.intl.string(l.t.y4zY3t),
          },
        ];
      }
    },
    678513: function (e, t, n) {
      n(47120);
      var i,
        l,
        r,
        o,
        a = n(442837),
        s = n(570140),
        c = n(445507);
      let u = {
          "valorant-user": c.qJ,
          "valorant-admin": c.xQ,
          "genshin-user": c.Zl,
          "genshin-admin": c.Q3,
        },
        d = null,
        h = {},
        p = new Set();
      function m() {
        for (let e in ((d = null), h)) delete h[e];
      }
      class f extends (i = a.ZP.Store) {
        getActiveUserSignUp() {
          return d;
        }
        getActiveGuildSignUp(e) {
          var t;
          return null !== (t = h[e]) && void 0 !== t ? t : null;
        }
        hasCompletedTarget(e) {
          return p.has(e);
        }
      }
      (o = "SignUpStore"),
        (r = "displayName") in (l = f)
          ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = o),
        (t.Z = new f(s.Z, {
          ENABLE_USER_SIGN_UP: function (e) {
            let { key: t } = e,
              n = u[t];
            (0, c.u9)(n) && 0 === Object.keys(h).length && (d = n);
          },
          ENABLE_GUILD_SIGN_UP: function (e) {
            let { key: t, guildId: n } = e,
              i = u[t];
            (0, c.mC)(i) && ((h[n] = i), (d = null));
          },
          COMPLETE_SIGN_UP: function (e) {
            let { targetKey: t } = e;
            p.add(t), m();
          },
          DISMISS_SIGN_UP: m,
        }));
    },
    833845: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(314897),
        r = n(88751);
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.cj)(
          [r.ZP, l.default],
          () => {
            let n = l.default.getId();
            return r.ZP.getPermissionsForUser(n, e, t);
          },
          [e, t],
        );
      }
    },
    201469: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return a;
        },
      });
      var i,
        l,
        r = n(833845),
        o = n(643632);
      function a(e) {
        let t = (0, o.Z)(e),
          n = (0, r.Z)(e, !0).moderator;
        return !t && n ? 1 : 0;
      }
      ((i = l || (l = {}))[(i.NORMAL = 0)] = "NORMAL"),
        (i[(i.START_EVENT = 1)] = "START_EVENT");
    },
    31022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120),
        n(724458);
      var i = n(442837),
        l = n(853856),
        r = n(592125),
        o = n(938475),
        a = n(823379),
        s = n(136015),
        c = n(709054),
        u = n(565799),
        d = n(501655),
        h = n(981631);
      function p(e) {
        let { voiceState: t, userNick: n, user: i } = e,
          l = (0, o.sQ)(t, n);
        return { user: i, voiceState: t, nick: n, comparator: l };
      }
      function m(e) {
        let [t] = (0, i.e7)(
          [u.Z, r.Z, l.Z],
          () => {
            let t;
            let n = (t =
              e === h.I_8
                ? c.default
                    .keys(l.Z.getFavoriteChannels())
                    .map((e) => r.Z.getChannel(e))
                    .filter(a.lm)
                    .filter((e) => e.isGuildStageVoice())
                : u.Z.getChannels(e)).reduce((e, t) => {
              let n = u.Z.getMutableParticipants(t.id, d.pV.SPEAKER);
              return (
                (e[t.id] = n.filter((e) => e.type === d.Ui.VOICE).map(p)), e
              );
            }, {});
            return [
              n,
              t.reduce((e, t) => {
                let { id: n } = t;
                return e + u.Z.getParticipantsVersion(n);
              }, 0),
            ];
          },
          [e],
          s.Q,
        );
        return t;
      }
    },
    261600: function (e, t, n) {
      n.d(t, {
        U: function () {
          return p;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(399606),
        o = n(481060),
        a = n(592125),
        s = n(922482),
        c = n(750154),
        u = n(427679),
        d = n(388032);
      function h(e) {
        var t, n;
        let { activity: h } = e,
          { channelId: p } =
            null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
          m = (0, r.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]),
          f = l.useRef(null),
          g = l.useCallback(() => {
            let e = a.Z.getChannel(p);
            null != e && s.Cq(e);
          }, [p]),
          C =
            null !== (n = null == m ? void 0 : m.topic) && void 0 !== n
              ? n
              : h.name,
          _ = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: C });
        return (0, i.jsx)("div", {
          ref: f,
          children: (0, i.jsx)(o.Clickable, {
            onClick: g,
            focusProps: { ringTarget: f },
            children: (0, i.jsx)(o.Heading, {
              variant: "heading-sm/semibold",
              children: _,
            }),
          }),
        });
      }
      class p {
        shouldShow(e) {
          return (0, c.JE)(e);
        }
        createHeader(e) {
          return { subtitle: d.intl.string(d.t["+AJFJy"]), icon: null };
        }
        constructor() {
          var e, t, n;
          (e = this),
            (t = "body"),
            (n = h),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n);
        }
      }
    },
    974543: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
        _: function () {
          return o;
        },
      });
      var i = n(726542),
        l = n(973616),
        r = n(388032);
      let o = "twitch:";
      class a extends l.ZP {
        getIconURL() {
          return i.Z.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(o).concat(e.url)),
            (this.name = r.intl.string(r.t.JIPtgo));
        }
      }
    },
    250889: function (e, t, n) {
      n.d(t, {
        H: function () {
          return r;
        },
        Z: function () {
          return o;
        },
      });
      var i = n(726542),
        l = n(973616);
      let r = "xbox:";
      class o extends l.ZP {
        getIconURL() {
          return i.Z.get("xbox").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(r).concat(e.name)),
            (this.name = e.name);
        }
      }
    },
    358652: function (e, t, n) {
      n(47120);
      var i,
        l,
        r,
        o,
        a = n(442837),
        s = n(570140),
        c = n(131704),
        u = n(251625),
        d = n(592125),
        h = n(306680),
        p = n(944486),
        m = n(55589);
      let f = [];
      function g() {
        let e = m.Z.getPrivateChannelIds().filter(
          (e) => h.ZP.getMentionCount(e) > 0,
        );
        return (
          e.length > 20 && (e.length = 20), !(0, u.EF)(e, f) && ((f = e), !0)
        );
      }
      function C() {
        return g();
      }
      function _(e) {
        let { channelId: t } = e,
          n = d.Z.getChannel(t);
        return !!(null != n && (0, c.hv)(n.type)) && g();
      }
      class v extends (i = a.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, d.Z, p.Z, h.ZP);
        }
        getUnreadPrivateChannelIds() {
          return f;
        }
      }
      (o = "PrivateChannelReadStateStore"),
        (r = "displayName") in (l = v)
          ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = o),
        (t.Z = new v(s.Z, {
          CONNECTION_OPEN: C,
          OVERLAY_INITIALIZE: C,
          MESSAGE_CREATE: _,
          MESSAGE_ACK: _,
          CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
          },
          CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
              } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
          },
          WINDOW_FOCUS: function () {
            let e = d.Z.getChannel(p.Z.getChannelId());
            return !!(null != e && (0, c.hv)(e.type)) && g();
          },
          CHANNEL_CREATE: function (e) {
            let {
                channel: { id: t },
              } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && g();
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
              n = !1;
            for (let { id: e } of t) {
              let t = d.Z.getChannel(e);
              null != t && (0, c.hv)(t.type) && (n = !0);
            }
            return !!n && g();
          },
        }));
    },
    613060: function (e, t, n) {
      var i,
        l = n(442837),
        r = n(570140);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let a = {};
      class s extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            Object.keys(e).forEach((t) => {
              "number" == typeof e[t] && (a[t] = e[t]);
            });
        }
        getState() {
          return a;
        }
        hasViewed(e) {
          return null != a[e];
        }
      }
      o(s, "displayName", "ViewHistoryStore"),
        o(s, "persistKey", "ViewHistoryStore"),
        (t.Z = new s(r.Z, {
          VIEW_HISTORY_MARK_VIEW: function (e) {
            let { key: t } = e;
            a[t] = Date.now();
          },
        }));
    },
    241890: function (e, t, n) {
      let i, l;
      var r = n(200651);
      n(192379);
      var o = n(481060),
        a = n(570140),
        s = n(341382),
        c = n(981631);
      let u = null;
      function d(e) {
        null != i && e ? i() : null != l && l(), (i = null), (l = null);
      }
      t.Z = {
        init() {
          a.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            if (
              (d(!1),
              (u = e.context),
              (i = e.resolve),
              (l = e.reject),
              c.e3s === e.context)
            ) {
              let e;
              (e = !1),
                (0, o.openModalLazy)(
                  async () => {
                    let { default: t } = await n
                      .e("29393")
                      .then(n.bind(n, 134817));
                    return (n) => {
                      let { onClose: i, ...l } = n;
                      return (0, r.jsx)(t, {
                        ...l,
                        onClose: (t) => {
                          (e = t), i();
                        },
                      });
                    };
                  },
                  {
                    onCloseCallback: () => {
                      (0, s.M)(e);
                    },
                  },
                );
            }
          }),
            a.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
              let { shouldContinue: t } = e;
              (u = null), d(t);
            }),
            a.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
              let { locked: t } = e;
              t && null != u && ((u = null), d(!1));
            });
        },
      };
    },
    801077: function (e, t, n) {
      n(47120), n(653041), n(724458), n(627341);
      var i,
        l,
        r,
        o,
        a = n(392711),
        s = n.n(a),
        c = n(278074),
        u = n(442837),
        d = n(570140),
        h = n(782769),
        p = n(527805),
        m = n(841784),
        f = n(503438),
        g = n(802856),
        C = n(420660),
        _ = n(728345),
        v = n(812206),
        x = n(750881),
        I = n(710845),
        b = n(38618),
        S = n(656063),
        E = n(761282),
        Z = n(814443),
        N = n(789407),
        y = n(974543),
        T = n(250889),
        A = n(199902),
        j = n(592125),
        P = n(480294),
        R = n(831506),
        M = n(731290),
        L = n(430824),
        w = n(496675),
        D = n(158776),
        O = n(699516),
        k = n(594174),
        G = n(979651),
        U = n(626135),
        B = n(823379),
        H = n(981631);
      let V = !1,
        F = !1,
        W = [],
        z = [],
        Y = {},
        K = {},
        q = new Set(),
        Q = new Set();
      function X() {
        let e = O.Z.getFriendIDs();
        return P.Z.hasConsented(H.pjP.PERSONALIZATION)
          ? new Set([...Z.Z.getUserAffinitiesUserIds(), ...e])
          : new Set(e);
      }
      function J(e) {
        return D.Z.findActivity(e, (e) => e.type !== H.IIU.CUSTOM_STATUS);
      }
      function $(e) {
        return null == Y[e] && (Y = { ...Y, [e]: new T.Z({ name: e }) }), Y[e];
      }
      function ee(e) {
        return null == K[e] && (K = { ...K, [e]: new y.Z({ url: e }) }), K[e];
      }
      function et(e) {
        !Q.has(e) && q.add(e);
      }
      function en(e) {
        if ((0, f.Z)(e)) return N.r9;
        let t =
          null != e.application_id
            ? v.Z.getApplication(e.application_id)
            : null;
        return null != t
          ? t
          : (0, g.Z)(e)
            ? $(e.name)
            : (0, C.Z)(e) && null != e.url
              ? ee(e.url)
              : (null != e.application_id && et(e.application_id), t);
      }
      function ei(e) {
        let t = G.Z.getVoiceStateForUser(e);
        return (null == t ? void 0 : t.channelId) != null &&
          w.Z.canWithPartialContext(H.Plq.VIEW_CHANNEL, {
            channelId: t.channelId,
          })
          ? t.channelId
          : null;
      }
      function el(e) {
        return O.Z.isFriend(e.id);
      }
      function er(e, t, n) {
        var i, l, r, o, a, c;
        let u;
        let d = k.default.getCurrentUser(),
          f =
            null !== (i = null == d ? void 0 : d.nsfwAllowed) &&
            void 0 !== i &&
            i,
          g = t.map((e) => e.id),
          C = t.filter((t) => e.has(t.id)),
          _ = !1,
          x = [],
          b = new Set(),
          Z = !1,
          P = [];
        for (let e of t) {
          let n = A.Z.getAnyStreamForUser(e.id),
            i = j.Z.getChannel(null == n ? void 0 : n.channelId);
          if (
            (null == i ? void 0 : i.isNSFW()) &&
            (!f || !M.Z.didAgree(null == i ? void 0 : i.getGuildId()))
          )
            continue;
          let a = J(e.id);
          if (
            (null != n && P.push({ stream: n, streamUser: e, activity: a }),
            null == a)
          )
            continue;
          let c = (0, S.Z)(a);
          if (null == c) continue;
          Z = c === N.XB;
          let u = (function (e) {
              let t = v.Z.getApplication(e);
              return null != t
                ? t
                : "string" != typeof e
                  ? (new I.Z("NowPlayingViewStore").error(
                      "Unknown type for applicationId: "
                        .concat(typeof e, ", value: ")
                        .concat(e),
                      { tags: { source: "ACTIVITIES" } },
                    ),
                    null)
                  : e === N.XB
                    ? N.r9
                    : e.startsWith(T.H)
                      ? $(e.slice(T.H.length))
                      : e.startsWith(y._)
                        ? ee(e.slice(y._.length))
                        : (et(e), null);
            })(c),
            g = null === (l = a.timestamps) || void 0 === l ? void 0 : l.start;
          if ((0, m.Z)(a)) {
            let t = (0, h.a)();
            if (
              (0, p.ZP)({
                activity: a,
                userId: e.id,
                application: u,
                channelId:
                  null === (r = G.Z.getVoiceStateForUser(e.id)) || void 0 === r
                    ? void 0
                    : r.channelId,
                currentUser: d,
                isActivitiesEnabledForCurrentPlatform: t,
                ChannelStore: j.Z,
                VoiceStateStore: G.Z,
                PermissionStore: w.Z,
                GuildStore: L.Z,
              }) !== p.Fw.CAN_JOIN
            )
              continue;
          } else if (null == g) continue;
          if (!E.JE(a) || null == u || b.has(u.id)) continue;
          let C = null != a ? en(a) : null;
          (null == C || C.id !== u.id) && (a = null);
          let D = [];
          (D =
            null != a && null != a.party && null != a.party.id
              ? Array.from(
                  null !== (o = R.Z.getParty(a.party.id)) && void 0 !== o
                    ? o
                    : [],
                ).reduce((e, t) => {
                  let n = k.default.getUser(t);
                  return null != n && e.push(n), e;
                }, [])
              : t.filter((e) => {
                  let t = J(e.id),
                    n = null != t ? en(t) : null;
                  return null != n && n.id === u.id;
                })),
            (D = s().orderBy(D, [el], ["desc"])).length !== t.length &&
              (_ = !0),
            b.add(u.id),
            x.push({
              game: u,
              activity: a,
              activityUser: e,
              startedPlayingTime: g,
              playingMembers: D,
            });
        }
        let O = 1 === C.length,
          U = [],
          H = new Set(),
          V = new Set();
        for (let e of t) {
          let n = ei(e.id),
            i = j.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = L.Z.getGuild(l);
          if (
            (V.has(l) && H.has(n)) ||
            null == i ||
            null == r ||
            i.id === r.afkChannelId
          )
            null == i && ((u = null), (O = !0));
          else {
            let e = G.Z.getVoiceStatesForChannel(i.id),
              o = s()(e)
                .map((e) => {
                  let { userId: t } = e;
                  return k.default.getUser(t);
                })
                .filter(B.lm)
                .orderBy([el], ["desc"])
                .value();
            o.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
              O ? !V.has(l) && (u = null) : ((u = r), (O = !0)),
              V.add(l),
              H.add(n),
              U.push({ channel: i, guild: r, members: o, voiceStates: e });
          }
        }
        return {
          id: n,
          voiceChannels: U,
          isSpotifyActivity: Z,
          priorityMembers: C.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id),
          })),
          partiedMembers: t,
          showPlayingMembers: _,
          guildContext: u,
          currentActivities: ((a = x),
          (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
          }),
          s()(a).orderBy([c, (e) => e.game.name], ["desc", "asc"])).value(),
          applicationStreams: P,
        };
      }
      function eo(e) {
        return (
          !!(
            0 !== e.voiceChannels.length && (0, x.$W)("now-playing-view-store")
          ) &&
          e.voiceChannels.length > 0 &&
          e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
          })
        );
      }
      function ea(e) {
        return (
          !!(
            0 !== e.voiceChannels.length && (0, x.$W)("now-playing-view-store")
          ) &&
          e.voiceChannels.length > 0 &&
          e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
          })
        );
      }
      function es(e) {
        return (
          !!(0, x.sb)("now-playing-view-store") &&
          e.partiedMembers.some((e) => O.Z.isBlocked(e.id))
        );
      }
      function ec() {
        return V && b.Z.isConnected();
      }
      let eu = s().throttle(() => {
        !(function () {
          var e;
          if (!ec()) return;
          q.clear();
          let t = (function (e) {
              let t = X(),
                n = er.bind(null, t);
              return s()(e).mapValues(n);
            })(
              ((e = Array.from(X()).reduce((e, t) => {
                let n = k.default.getUser(t);
                return null != n && !n.bot && e.push(n), e;
              }, [])),
              s()(e).groupBy((e) => {
                var t;
                let n = ei(e.id),
                  i = J(e.id);
                return null != n
                  ? "".concat("channel-", "-").concat(n)
                  : (null == i
                        ? void 0
                        : null === (t = i.party) || void 0 === t
                          ? void 0
                          : t.id) != null
                    ? "".concat("party-", "-").concat(i.party.id)
                    : "".concat("user-", "-").concat(e.id);
              })),
            )
              .values()
              .orderBy(
                [
                  eo,
                  (e) => e.partiedMembers.length > 1,
                  (e) => e.applicationStreams.length > 0,
                  (e) => e.voiceChannels.length > 0,
                  (e) => e.currentActivities.length > 0,
                  (e) => e.isSpotifyActivity,
                  (e) =>
                    e.priorityMembers
                      .map((e) => e.user.username.toLowerCase())
                      .join(" "),
                ],
                ["asc", "desc", "desc", "desc", "desc", "asc", "asc"],
              )
              .value(),
            {
              blockeeExperimentEnabled: n,
              blockerExperimentEnabled: i,
              analyticsEligible: l,
            } = (0, x.p7)("now-playing-view-store");
          l &&
            t.forEach((e) => {
              let t = (0, c.EQ)({
                party: e,
                blockeeExperimentEnabled: n,
                blockerExperimentEnabled: i,
              })
                .returnType()
                .with(
                  { blockerExperimentEnabled: !0, party: c.P.when(es) },
                  () => x.h9.HIDE,
                )
                .with(
                  { blockeeExperimentEnabled: !0, party: c.P.when(ea) },
                  () => x.h9.HIDE,
                )
                .with(
                  { blockeeExperimentEnabled: !0, party: c.P.when(eo) },
                  () => x.h9.DERANK,
                )
                .otherwise(() => x.h9.SHOW);
              e.voiceChannels.forEach((e) => {
                let { voiceStates: n, channel: i } = e,
                  l = s().map(n, "userId"),
                  r = s().map(n, "discoverable"),
                  o = s().map(n, (e) => O.Z.getRelationshipType(e.userId));
                U.default.track(H.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                  activity_user_ids: l,
                  discoverable: r,
                  relationship_types: o,
                  voice_channel_id: i.id,
                  treatment: t,
                  surface: "now-playing",
                });
              });
            }),
            (z = (W = t.filter((e) => {
              let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } =
                  (0, x.p7)("now-playing-view-store"),
                i = n && es(e),
                l = t && ea(e);
              return (
                (e.voiceChannels.length >= 1 ||
                  e.currentActivities.length > 0 ||
                  e.applicationStreams.length > 0) &&
                !i &&
                !l
              );
            })).map((e) => ({ type: H.GOo.USER, party: e }))),
            !(function () {
              if (q.size > 0) {
                let e = Array.from(q);
                _.ZP.fetchApplications(e),
                  e.forEach((e) => Q.add(e)),
                  q.clear();
              }
            })(),
            (F = !0);
        })(),
          ep.emitChange();
      }, 1e3);
      function ed() {
        return !!ec() && (eu(), !1);
      }
      class eh extends (i = u.ZP.Store) {
        initialize() {
          this.syncWith(
            [k.default, v.Z, D.Z, R.Z, G.Z, A.Z, O.Z, P.Z, Z.Z],
            ed,
          ),
            this.waitFor(b.Z, L.Z, v.Z, k.default, Z.Z);
        }
        get currentActivityParties() {
          return W;
        }
        get nowPlayingCards() {
          return z;
        }
        get isMounted() {
          return V;
        }
        get loaded() {
          return F;
        }
      }
      (o = "NowPlayingViewStore"),
        (r = "displayName") in (l = eh)
          ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = o);
      let ep = new eh(d.Z, {
        LOGOUT: function () {
          (V = !1), (W = []), (z = []), q.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
          (V = !0), eu();
        },
        NOW_PLAYING_UNMOUNTED: function () {
          V = !1;
        },
      });
      t.Z = ep;
    },
    281029: function (e, t, n) {
      n.d(t, {
        Dn: function () {
          return h;
        },
        if: function () {
          return d;
        },
        ig: function () {
          return a;
        },
      }),
        n(47120),
        n(733860),
        n(653041);
      var i = n(740504),
        l = n(131704),
        r = n(990492),
        o = n(981631);
      function a(e, t) {
        return (
          null != e &&
          null != t &&
          (e === t ||
            ((0, l.r8)(e) && (0, l.r8)(t)) ||
            ((0, l.bw)(e) && (0, l.bw)(t)))
        );
      }
      function s(e, t, n, i) {
        let l = -1;
        if (
          (i.find((e, n) => {
            let { channel: i } = e;
            return i.id === t && ((l = n), !0);
          }),
          l < 0)
        )
          return null;
        for (let t = l; t >= 0 && t < i.length; t += e) {
          let e = i[t];
          if (a(e.channel.type, n)) return e;
        }
        return null;
      }
      function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return 0;
        let i = null;
        return (
          t
            .filter((t) => {
              let {
                channel: { type: i },
              } = t;
              return null != e && (n || a(e.type, i));
            })
            .find((t, n) => {
              let {
                channel: { id: l },
              } = t;
              return null != e && l === e.id && ((i = n), !0);
            }),
          i
        );
      }
      function u(e) {
        return { referenceId: e.id, parentId: e.parent_id };
      }
      function d(e, t, n, i, r) {
        if (null == e || null == n) return null;
        let { GUILD_CATEGORY: d } = o.d4z;
        if (e.type === d)
          return i === t || (i < t && e.type === n.type)
            ? u(n)
            : i > t
              ? (function (e, t, n) {
                  var i;
                  let { GUILD_CATEGORY: l } = o.d4z,
                    r =
                      n[
                        (null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1
                      ],
                    a = s(-1, t.id, e.type, n);
                  return null == a || a.channel.id === e.id
                    ? null
                    : null == r || r.channel.type === l
                      ? { referenceId: a.channel.id, parentId: null }
                      : null;
                })(e, n, r)
              : null;
        if (a(e.type, n.type)) return u(n);
        if (i < t)
          return n.type === d
            ? (function (e, t, n) {
                var i;
                let r =
                    n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                  o = s(1, t.id, e.type, n);
                if (null == r) return { referenceId: null, parentId: null };
                if (null != o) {
                  if (
                    a(r.channel.type, e.type) ||
                    (e.isGuildVocal() && (0, l.r8)(r.channel.type))
                  )
                    return {
                      referenceId: o.channel.id,
                      parentId: r.channel.parent_id,
                    };
                  if (r.channel.isCategory())
                    return {
                      referenceId: o.channel.id,
                      parentId: r.channel.id,
                    };
                }
                return null;
              })(e, n, r)
            : (function (e, t, n) {
                var i;
                let r =
                    n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                  o = s(1, t.id, e.type, n);
                return null != r || e.isGuildVocal()
                  ? (0, l.r8)(e.type) &&
                    null != o &&
                    ((0, l.r8)(r.channel.type) || r.channel.isCategory())
                    ? { referenceId: o.channel.id, parentId: t.parent_id }
                    : null
                  : {
                      referenceId: null != o ? o.channel.id : null,
                      parentId: null,
                    };
              })(e, n, r);
        return n.type === d
          ? (function (e, t, n) {
              var i;
              let r =
                  n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                o = s(-1, t.id, e.type, n);
              if (null != o) {
                if (null == r)
                  return { referenceId: o.channel.id, parentId: t.id };
                if (
                  a(r.channel.type, e.type) ||
                  ((0, l.r8)(e.type) && r.channel.isGuildVocal())
                )
                  return {
                    referenceId: o.channel.id,
                    parentId: r.channel.parent_id,
                  };
                if (r.channel.isCategory())
                  return { referenceId: o.channel.id, parentId: t.id };
              }
              return null;
            })(e, n, r)
          : (function (e, t, n) {
              var i;
              let l =
                  n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                r = s(-1, t.id, e.type, n);
              if (null == r) return null;
              if (e.isGuildVocal()) {
                if (null == l || l.channel.isCategory())
                  return { referenceId: r.channel.id, parentId: t.parent_id };
                if (l.channel.isGuildVocal())
                  return {
                    referenceId: r.channel.id,
                    parentId: l.channel.parent_id,
                  };
              }
              return e.isCategory() && (null == l || l.channel.isCategory())
                ? { referenceId: r.channel.id, parentId: null }
                : null;
            })(e, n, r);
      }
      function h(e, t, n, o) {
        let a,
          s,
          u = [],
          d = [],
          h = o._categories,
          p = (t) => {
            var n, i, l, o;
            let c;
            if (
              null == a ||
              null == s ||
              ((n = e),
              (i = a),
              (l = s),
              (o = t),
              null != i &&
              null != l &&
              null != o[i] &&
              o[i].channel === n &&
              null != o[l]
                ? 0
                : 1)
            )
              c = [...t];
            else c = r.ZP.moveItemFromTo(t, a, s);
            return (
              (u = u.concat(
                r.ZP.calculatePositionDeltas({
                  oldOrdering: t,
                  newOrdering: c,
                  idGetter: (e) => {
                    let { channel: t } = e;
                    return t.id;
                  },
                  existingPositionGetter: (e) => {
                    let { channel: t } = e;
                    return t.position;
                  },
                }),
              )),
              c
            );
          };
        if (e.isCategory()) {
          let n = [...h].slice(1);
          (a = c(e, n)), (s = c(t, n)), (d = p(n)).unshift(h[0]);
        }
        if ((0, l.r8)(e.type) || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, o, (e) => {
            let {
              channel: { type: t },
            } = e;
            return (0, l.r8)(t);
          });
          (a = c(e, n)), (s = c(t, n)), p(n);
        }
        if (e.isGuildVocal() || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, o, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
          });
          (a = c(e, n)), (s = c(t, n)), p(n);
        }
        if (e.parent_id !== n) {
          let t = !1;
          u.find((i) => i.id === e.id && ((i.parent_id = n), (t = !0))),
            !t && u.push({ id: e.id, parent_id: n });
        }
        return u;
      }
    },
    594193: function (e, t, n) {
      e.exports = {
        container: "container_f9c402",
        guildBadge: "guildBadge_f9c402",
        appIcon: "appIcon_f9c402",
        appIconSize: "appIconSize_f9c402",
        avatar: "avatar_f9c402",
        guildIcon: "guildIcon_f9c402",
        compactAvatar: "compactAvatar_f9c402",
        inviteResolvingGuildName: "inviteResolvingGuildName_f9c402",
        title: "title_f9c402",
        directInviteSubTitle: "directInviteSubTitle_f9c402",
        activityCount: "activityCount_f9c402",
        guildContainer: "guildContainer_f9c402",
        appIn: "appIn_f9c402",
        appGuildName: "appGuildName_f9c402",
        icon: "icon_f9c402",
      };
    },
    926540: function (e, t, n) {
      e.exports = {
        channel: "channel_c91bad",
        fullWidth: "fullWidth_c91bad",
        interactive: "interactive_c91bad",
        overflowTooltip: "overflowTooltip_c91bad",
        clanTag: "clanTag_c91bad",
        interactiveSelected: "interactiveSelected_c91bad",
        interactiveSystemDM: "interactiveSystemDM_c91bad",
        avatarWithText: "avatarWithText_c91bad",
        link: "link_c91bad",
        linkButton: "linkButton_c91bad",
        linkButtonIcon: "linkButtonIcon_c91bad",
        closeButton: "closeButton_c91bad",
        favoriteIcon: "favoriteIcon_c91bad",
        closeIcon: "closeIcon_c91bad",
        subtext: "subtext_c91bad",
        activity: "activity_c91bad subtext_c91bad",
        activityText: "activityText_c91bad",
        activityEmoji: "activityEmoji_c91bad",
        mutedEmoji: "mutedEmoji_c91bad",
        decorator: "decorator_c91bad",
      };
    },
    312565: function (e, t, n) {
      e.exports = {
        empty: "empty_c47fa9",
        headerText: "headerText_c47fa9",
        privateChannelsHeaderContainer: "privateChannelsHeaderContainer_c47fa9",
        privateChannelRecipientsInviteButtonIcon:
          "privateChannelRecipientsInviteButtonIcon_c47fa9",
        scroller: "scroller_c47fa9",
      };
    },
    282115: function (e, t, n) {
      e.exports = {
        progressContainer: "progressContainer_ff398b",
        downloadIcon: "downloadIcon_ff398b",
      };
    },
    84210: function (e, t, n) {
      e.exports = { message: "message_f3e42a" };
    },
    939661: function (e, t, n) {
      e.exports = {
        container: "container_ed5743",
        contentWrapper: "contentWrapper_ed5743",
        scroller: "scroller_ed5743",
        noThanksButton: "noThanksButton_ed5743",
        stage: "stage_ed5743",
        inviteContent: "inviteContent_ed5743",
        inviteSplash: "inviteSplash_ed5743",
        buttonGroup: "buttonGroup_ed5743",
        experimentUpsellError: "experimentUpsellError_ed5743",
        experimentUpsellIcon: "experimentUpsellIcon_ed5743",
        experimentUpsellText: "experimentUpsellText_ed5743",
        experimentGetNitro: "experimentGetNitro_ed5743",
        errorContent: "errorContent_ed5743",
        errorImage: "errorImage_ed5743",
        errorBody: "errorBody_ed5743",
        iconContainer: "iconContainer_ed5743",
        iconSparklePlus: "iconSparklePlus_ed5743",
        iconLink: "iconLink_ed5743",
        iconSparkleStar: "iconSparkleStar_ed5743",
      };
    },
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    743483: function (e, t, n) {
      e.exports = {
        muted: "muted_ec8679",
        avatar: "avatar_ec8679",
        highlighted: "highlighted_ec8679",
        layout: "layout_ec8679",
        content: "content_ec8679",
        name: "name_ec8679",
        wrappedLayout: "wrappedLayout_ec8679",
        wrappedName: "wrappedName_ec8679",
        nameAndDecorators: "nameAndDecorators_ec8679",
        subText: "subText_ec8679",
      };
    },
    109489: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_edf32f",
          bar: "bar_edf32f",
          active: "active_edf32f",
          unread: "unread_edf32f active_edf32f",
          mention: "mention_edf32f active_edf32f",
          text: "text_edf32f",
          icon: "icon_edf32f",
        }),
      );
    },
    703757: function (e, t, n) {
      e.exports = {
        clipsEducationHeader: "clipsEducationHeader_e26612",
        clipsEducationArt: "clipsEducationArt_e26612",
        keyCombo: "keyCombo_e26612",
        bodyText: "bodyText_e26612",
        keybindHintKeys: "keybindHintKeys_e26612",
        keybindShortcut: "keybindShortcut_e26612",
        header: "header_e26612",
      };
    },
    56371: function (e, t, n) {
      e.exports = {
        container: "container_ab8c84",
        videoContainer: "videoContainer_ab8c84",
        video: "video_ab8c84",
        content: "content_ab8c84",
      };
    },
    620865: function (e, t, n) {
      e.exports = { container: "container_d91ad9" };
    },
    134123: function (e, t, n) {
      e.exports = { tooltipText: "tooltipText_ce31b4" };
    },
    120555: function (e, t, n) {
      e.exports = {
        pill: "pill_dcc7a4",
        favoriteIcon: "favoriteIcon_dcc7a4",
        ring: "ring_dcc7a4",
        ringActive: "ringActive_dcc7a4",
      };
    },
    494315: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c07d45",
        icon: "icon_c07d45",
        badge: "badge_c07d45",
      };
    },
    976019: function (e, t, n) {
      e.exports = {
        container: "container_c75f85",
        progressBar: "progressBar_c75f85 bar_c75f85",
        containerWithMargin: "containerWithMargin_c75f85",
        textArea: "textArea_c75f85",
        goalTextContainer: "goalTextContainer_c75f85",
        progressBarContainer: "progressBarContainer_c75f85 bar_c75f85",
        progressBarContainerComplete: "progressBarContainerComplete_c75f85",
        progressFraction: "progressFraction_c75f85",
        tadaIcon: "tadaIcon_c75f85",
        count: "count_c75f85",
        goalText: "goalText_c75f85",
        progressText: "progressText_c75f85",
      };
    },
    434618: function (e, t, n) {
      e.exports = { premiumChannelIcon: "premiumChannelIcon_f7460c" };
    },
    247472: function (e, t, n) {
      e.exports = {
        popout: "popout_c5b389",
        title: "title_c5b389",
        row: "row_c5b389",
        more: "more_c5b389",
        avatar: "avatar_c5b389",
        bullet: "bullet_c5b389",
        timestamp: "timestamp_c5b389",
        name: "name_c5b389",
      };
    },
    23202: function (e, t, n) {
      e.exports = { content: "content_cc29d1" };
    },
    147903: function (e, t, n) {
      e.exports = {
        containerDefault: "containerDefault_a08117",
        containerDragBefore: "containerDragBefore_a08117",
        containerDragAfter: "containerDragAfter_a08117",
        addButton: "addButton_a08117",
        forceVisible: "forceVisible_a08117",
        iconVisibility: "iconVisibility_a08117",
        addButtonIcon: "addButtonIcon_a08117",
        wrapper: "wrapper_a08117 wrapperCommon_a08117",
        wrapperStatic: "wrapperStatic_a08117 wrapperCommon_a08117",
        clickable: "clickable_a08117",
        children: "children_a08117",
        mainContent: "mainContent_a08117",
        icon: "icon_a08117",
        collapsed: "collapsed_a08117",
        muted: "muted_a08117",
        name: "name_a08117",
        dismissWrapper: "dismissWrapper_a08117",
        dismissButton: "dismissButton_a08117",
        dismiss: "dismiss_a08117",
        voiceChannelsButton: "voiceChannelsButton_a08117",
        voiceChannelsToggleIcon: "voiceChannelsToggleIcon_a08117",
      };
    },
    684393: function (e, t, n) {
      e.exports = {
        container: "container_e88961",
        popoutHeaderContainer: "popoutHeaderContainer_e88961",
        headerDivider: "headerDivider_e88961",
        settingNudgeText: "settingNudgeText_e88961",
      };
    },
    823469: function (e, t, n) {
      e.exports = {
        flexRow: "flexRow_f866f2",
        flexColumn: "flexColumn_f866f2",
        applicationLargeImage:
          "applicationLargeImage_f866f2 assetsLargeImage_f866f2",
        spotifyLargeImage: "spotifyLargeImage_f866f2 assetsLargeImage_f866f2",
        bodyTextSize: "bodyTextSize_f866f2",
        ellipsisRow: "ellipsisRow_f866f2",
        header: "header_f866f2 ellipsisRow_f866f2 headerTextSize_f866f2",
        colorHeaderSecondary: "colorHeaderSecondary_f866f2",
        clickable: "clickable_f866f2",
        headerLink:
          "headerLink_f866f2 link_f866f2 headerTextSize_f866f2 clickable_f866f2 ellipsisRow_f866f2",
        bodyLink:
          "bodyLink_f866f2 link_f866f2 ellipsisRow_f866f2 bodyTextSize_f866f2",
        usersSummary: "usersSummary_f866f2",
        timeBar: "timeBar_f866f2",
        detailsAndAvatarsContainer: "detailsAndAvatarsContainer_f866f2",
        avatar: "avatar_f866f2",
      };
    },
    787308: function (e, t, n) {
      e.exports = {
        activity: "activity_d5aa01",
        partyMembers: "partyMembers_d5aa01",
        partyAvatar: "partyAvatar_d5aa01",
        morePartyMembers: "morePartyMembers_d5aa01",
        button: "button_d5aa01",
        channelActivityContainer: "channelActivityContainer_d5aa01",
        activityActionsContainer: "activityActionsContainer_d5aa01",
      };
    },
    831746: function (e, t, n) {
      e.exports = {
        containerDefault: "containerDefault_f6f816",
        containerDragBefore: "containerDragBefore_f6f816",
        containerUserOver: "containerUserOver_f6f816",
        containerDragAfter: "containerDragAfter_f6f816",
        iconItem: "iconItem_f6f816 iconBase_f6f816",
        alwaysShown: "alwaysShown_f6f816",
        selected: "selected_f6f816",
        iconNoChannelInfo: "iconNoChannelInfo_f6f816",
        iconVisibility: "iconVisibility_f6f816",
        iconWithChannelInfo: "iconWithChannelInfo_f6f816",
        disabled: "disabled_f6f816",
        actionIcon: "actionIcon_f6f816",
        channelInfo: "channelInfo_f6f816",
        iconLive: "iconLive_f6f816",
      };
    },
    518360: function (e, t, n) {
      e.exports = { newChannel: "newChannel_ecb303" };
    },
    520202: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
    607686: function (e, t, n) {
      e.exports = {
        scroller: "scroller_c43953",
        unreadBar: "unreadBar_c43953",
        unreadBottom:
          "unreadBottom_c43953 unread_c43953 " + n("109489").container,
        positionedContainer: "positionedContainer_c43953",
        unreadTop: "unreadTop_c43953 unread_c43953 " + n("109489").container,
        voiceUserSummary: "voiceUserSummary_c43953",
        sectionDivider: "sectionDivider_c43953",
      };
    },
    264365: function (e, t, n) {
      e.exports = {
        popoutHeader: "popoutHeader_aab567",
        channelIcon: "channelIcon_aab567",
        channelName: "channelName_aab567",
      };
    },
    215887: function (e, t, n) {
      e.exports = {
        container: "container_fd6364",
        clickable: "clickable_fd6364",
        animatedBannerHoverLayer: "animatedBannerHoverLayer_fd6364",
        animatedContainer: "animatedContainer_fd6364",
        bannerImage: "bannerImage_fd6364",
        bannerImg: "bannerImg_fd6364",
        bannerImgFullWidth: "bannerImgFullWidth_fd6364",
        header: "header_fd6364",
        headerContent: "headerContent_fd6364",
        primaryInfo: "primaryInfo_fd6364",
        headerButton: "headerButton_fd6364",
        headerChildren: "headerChildren_fd6364",
        communityInfoContainer: "communityInfoContainer_fd6364",
        hasSubheader: "hasSubheader_fd6364",
        communityInfoVisible: "communityInfoVisible_fd6364",
        communityInfo: "communityInfo_fd6364",
        communityInfoPill: "communityInfoPill_fd6364",
        communityIcon: "communityIcon_fd6364",
        bannerVisible: "bannerVisible_fd6364",
        selected: "selected_fd6364",
        hasBanner: "hasBanner_fd6364",
        name: "name_fd6364",
        favoritesIcon: "favoritesIcon_fd6364",
        themedHeaderMobile: "themedHeaderMobile_fd6364",
      };
    },
    47622: function (e, t, n) {
      e.exports = {
        progressBarContainer: "progressBarContainer_e31e8a",
        progressBarText: "progressBarText_e31e8a",
        progressBar: "progressBar_e31e8a",
        rightContainer: "rightContainer_e31e8a",
        rightText: "rightText_e31e8a",
        arrow: "arrow_e31e8a",
        divider: "divider_e31e8a",
      };
    },
    273595: function (e, t, n) {
      e.exports = {
        previewChannelRow: "previewChannelRow_c5d9bc",
        selected: "selected_c5d9bc",
        closeButton: "closeButton_c5d9bc",
        money: "money_c5d9bc",
        newBadge: "newBadge_c5d9bc",
        phantomPreview: "phantomPreview_c5d9bc",
        shopIcon: "shopIcon_c5d9bc",
        previewChannelRowContent: "previewChannelRowContent_c5d9bc",
        gifSection: "gifSection_c5d9bc",
      };
    },
    329986: function (e, t, n) {
      e.exports = {
        container: "container_e1e976",
        spine: "spine_e1e976",
        spineBorder: "spineBorder_e1e976",
        spineWithGuildIcon: "spineWithGuildIcon_e1e976 spine_e1e976",
        spineBorderWithGuildIcon:
          "spineBorderWithGuildIcon_e1e976 spineBorder_e1e976",
      };
    },
    953498: function (e, t, n) {
      e.exports = { mentionsBadge: "mentionsBadge_e2a798 iconBase_e2a798" };
    },
    645693: function (e, t, n) {
      e.exports = { iconLive: "iconLive_dce222" };
    },
    706091: function (e, t, n) {
      e.exports = {
        container: "container_eba0ba",
        containerPadding: "containerPadding_eba0ba",
        bottom: "bottom_eba0ba",
        top: "top_eba0ba",
        bar: "bar_eba0ba",
        emptyBar: "emptyBar_eba0ba",
        mentionsBar: "mentionsBar_eba0ba",
        unreadIcon: "unreadIcon_eba0ba",
        voiceChannelsIcon: "voiceChannelsIcon_eba0ba",
        barText: "barText_eba0ba",
        voiceChannelsUsers: "voiceChannelsUsers_eba0ba",
      };
    },
    316249: function (e, t, n) {
      e.exports = {
        statusDiv: "statusDiv_e66732",
        hoverable: "hoverable_e66732",
        pencilIcon: "pencilIcon_e66732",
        statusText: "statusText_e66732",
      };
    },
    738523: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a5bc92",
        users: "users_a5bc92",
        total: "total_a5bc92",
        video: "video_a5bc92",
        extraLong: "extraLong_a5bc92",
        videoIcon: "videoIcon_a5bc92",
      };
    },
    986038: function (e, t, n) {
      e.exports = {
        container: "container_c23582",
        peopleIcon: "peopleIcon_c23582",
        userCountText: "userCountText_c23582",
      };
    },
    496472: function (e, t, n) {
      e.exports = {
        container: "container_b597a1",
        content: "content_b597a1",
        buttonContainer: "buttonContainer_b597a1",
        primaryButton: "primaryButton_b597a1",
        cancel: "cancel_b597a1",
        image: "image_b597a1",
      };
    },
    646819: function (e, t, n) {
      e.exports = { pill: "pill_f36a5a" };
    },
    414080: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b7c66a",
        target: "target_b7c66a",
        dragOver: "dragOver_b7c66a",
        centerTarget: "centerTarget_b7c66a",
        centerTargetTooltip: "centerTargetTooltip_b7c66a",
        autoPointerEvents: "autoPointerEvents_b7c66a",
        folderEndWrapper: "folderEndWrapper_b7c66a",
        wrapperOver: "wrapperOver_b7c66a",
        folderTarget: "folderTarget_b7c66a",
      };
    },
    192069: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_fea3ef",
        hidden: "hidden_fea3ef",
        tree: "tree_fea3ef",
        itemsContainer: "itemsContainer_fea3ef",
        scroller: "scroller_fea3ef",
        scrolling: "scrolling_fea3ef",
        unreadMentionsIndicatorTop: "unreadMentionsIndicatorTop_fea3ef",
        unreadMentionsIndicatorBottom: "unreadMentionsIndicatorBottom_fea3ef",
        unreadMentionsBar: "unreadMentionsBar_fea3ef",
        unreadMentionsFixedFooter: "unreadMentionsFixedFooter_fea3ef",
        fixedDiscoveryIcon: "fixedDiscoveryIcon_fea3ef",
      };
    },
    678634: function (e, t, n) {
      e.exports = {
        dragInner: "dragInner_f734d8",
        placeholderMask: "placeholderMask_f734d8",
      };
    },
    187643: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_db6521",
        selected: "selected_db6521",
        circleIcon: "circleIcon_db6521",
        pill: "pill_db6521",
      };
    },
    10448: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bc7085",
        expandedFolderBackground: "expandedFolderBackground_bc7085",
        collapsed: "collapsed_bc7085",
        hover: "hover_bc7085",
        closedFolderIconWrapper: "closedFolderIconWrapper_bc7085",
        expandedFolderIconWrapper: "expandedFolderIconWrapper_bc7085",
        folder: "folder_bc7085",
        folderIconWrapper: "folderIconWrapper_bc7085",
        folderIconPreview: "folderIconPreview_bc7085",
        guildIcon: "guildIcon_bc7085",
        miniPlaceholder: "miniPlaceholder_bc7085",
        guildIconUnavailable: "guildIconUnavailable_bc7085",
      };
    },
    285280: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_f85ca4",
        geoRestrictedBadge: "geoRestrictedBadge_f85ca4",
      };
    },
    284923: function (e, t, n) {
      e.exports = {
        blobContainer: "blobContainer_a5ad63",
        pill: "pill_a5ad63",
        sorting: "sorting_a5ad63",
        wobble: "wobble_a5ad63",
        selected: "selected_a5ad63",
      };
    },
    192272: function (e, t, n) {
      e.exports = { footer: "footer_d71945", gradient: "gradient_d71945" };
    },
    491708: function (e, t, n) {
      e.exports = {
        pill: "pill_f9623d",
        downloadProgress: "downloadProgress_f9623d",
        tutorialContainer: "tutorialContainer_f9623d",
      };
    },
    743778: function (e, t, n) {
      e.exports = {
        listItemWrapper: "listItemWrapper_dfb2f8",
        listItemTooltip: "listItemTooltip_dfb2f8",
        selected: "selected_dfb2f8",
      };
    },
    940722: function (e, t, n) {
      e.exports = {
        listItem: "listItem_c96c45",
        unavailableBadge: "unavailableBadge_c96c45",
        iconBadge: "iconBadge_c96c45",
        isCurrentUserConnected: "isCurrentUserConnected_c96c45",
        tutorialContainer: "tutorialContainer_c96c45",
      };
    },
    958844: function (e, t, n) {
      e.exports = { guildSeparator: "guildSeparator_d0c57e" };
    },
    768753: function (e, t, n) {
      e.exports = {
        guildsError: "guildsError_aada25",
        errorInner: "errorInner_aada25",
      };
    },
    771557: function (e, t, n) {
      e.exports = {
        pauseBackground: "pauseBackground_fdcfe0",
        pause: "pause_fdcfe0",
      };
    },
    738945: function (e, t, n) {
      e.exports = {
        pendingIcon: "pendingIcon_ae3d49",
        container: "container_ae3d49",
        popoutAnchor: "popoutAnchor_ae3d49",
        popoutContainer: "popoutContainer_ae3d49",
        popoutCaretLeft: "popoutCaretLeft_ae3d49",
        popoutContent: "popoutContent_ae3d49",
        coachmarkTextContainer: "coachmarkTextContainer_ae3d49",
      };
    },
    521287: function (e, t, n) {
      e.exports = {
        keyboardShortcutsModal: "keyboardShortcutsModal_ad95dc",
        noBackground: "noBackground_ad95dc",
        noShadow: "noShadow_ad95dc",
        backdrop: "backdrop_ad95dc",
        show: "show_ad95dc",
        modalTitle: "modalTitle_ad95dc",
        content: "content_ad95dc",
        modalSubtitle: "modalSubtitle_ad95dc",
        ddrArrows: "ddrArrows_ad95dc",
        arrow: "arrow_ad95dc",
        active: "active_ad95dc",
        left: "left_ad95dc",
        down: "down_ad95dc",
        up: "up_ad95dc",
        right: "right_ad95dc",
        keybindGroupDescription: "keybindGroupDescription_ad95dc",
        keyboardShortcutList: "keyboardShortcutList_ad95dc",
        keybindGroup: "keybindGroup_ad95dc",
        keybindKey: "keybindKey_ad95dc",
        keyboardShortcutSection: "keyboardShortcutSection_ad95dc",
        keyboardShortcutListGroup: "keyboardShortcutListGroup_ad95dc",
      };
    },
    727688: function (e, t, n) {
      e.exports = {
        ragingDemon: "ragingDemon_f4b0b6",
        visible: "visible_f4b0b6",
        symbol: "symbol_f4b0b6",
        symbolBackground: "symbolBackground_f4b0b6",
        container: "container_f4b0b6",
        animate: "animate_f4b0b6",
        circleInner: "circleInner_f4b0b6",
        circleOuter: "circleOuter_f4b0b6",
        linesSecondary: "linesSecondary_f4b0b6",
        linesMain: "linesMain_f4b0b6",
        primaryExplosion: "primaryExplosion_f4b0b6 explosion_f4b0b6",
        secondaryExplosion: "secondaryExplosion_f4b0b6 explosion_f4b0b6",
      };
    },
    303790: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_cd82a7",
        section: "section_cd82a7",
        clickable: "clickable_cd82a7",
        textContent: "textContent_cd82a7",
        separator: "separator_cd82a7",
        inset: "inset_cd82a7",
        body: "body_cd82a7",
        headerFull: "headerFull_cd82a7 header_cd82a7",
        headerSimple: "headerSimple_cd82a7 header_cd82a7",
        headerAvatar: "headerAvatar_cd82a7",
        headerIcon: "headerIcon_cd82a7",
        multipleIconWrapper: "multipleIconWrapper_cd82a7",
        multipleIcon: "multipleIcon_cd82a7",
        voiceSection: "voiceSection_cd82a7",
        voiceSectionAssets: "voiceSectionAssets_cd82a7",
        voiceSectionDetails: "voiceSectionDetails_cd82a7",
        voiceSectionText: "voiceSectionText_cd82a7",
        voiceSectionGuildImage: "voiceSectionGuildImage_cd82a7",
        voiceSectionNoGuildImageWrapper:
          "voiceSectionNoGuildImageWrapper_cd82a7",
        voiceSectionNoGuildImage: "voiceSectionNoGuildImage_cd82a7",
        voiceSectionIconWrapper: "voiceSectionIconWrapper_cd82a7",
        voiceSectionIcon: "voiceSectionIcon_cd82a7",
        applicationStreamingSection: "applicationStreamingSection_cd82a7",
        applicationStreamingAvatar: "applicationStreamingAvatar_cd82a7",
        applicationStreamingPreviewWrapper:
          "applicationStreamingPreviewWrapper_cd82a7",
        applicationStreamingHoverText: "applicationStreamingHoverText_cd82a7",
        applicationStreamingPreviewSize:
          "applicationStreamingPreviewSize_cd82a7",
        xboxSection: "xboxSection_cd82a7",
        xboxSectionIcon: "xboxSectionIcon_cd82a7",
        twitchSectionSimple:
          "twitchSectionSimple_cd82a7 twitchSectionHeader_cd82a7",
        twitchSectionFull:
          "twitchSectionFull_cd82a7 twitchSectionHeader_cd82a7",
        twitchSectionIcon: "twitchSectionIcon_cd82a7",
        twitchSectionPlayButton: "twitchSectionPlayButton_cd82a7",
        twitchSectionAvatar: "twitchSectionAvatar_cd82a7",
        twitchSectionPreviewWrapper: "twitchSectionPreviewWrapper_cd82a7",
        twitchSectionPreview: "twitchSectionPreview_cd82a7",
        gameSection: "gameSection_cd82a7",
        gameSectionIcon: "gameSectionIcon_cd82a7",
        activitySection: "activitySection_cd82a7",
        activitySectionAssets: "activitySectionAssets_cd82a7",
        largeImageMask: "largeImageMask_cd82a7",
        largeImage: "largeImage_cd82a7",
        borderRadius0: "borderRadius0_cd82a7",
        smallImage: "smallImage_cd82a7",
        spotifySection: "spotifySection_cd82a7 activitySection_cd82a7",
        embeddedActivityTopRow: "embeddedActivityTopRow_cd82a7",
        embeddedActivityName: "embeddedActivityName_cd82a7",
        embeddedActivityTimeElapsed: "embeddedActivityTimeElapsed_cd82a7",
        embeddedActivityPlayerContainer:
          "embeddedActivityPlayerContainer_cd82a7",
        embeddedActivityImage: "embeddedActivityImage_cd82a7",
        embeddedActivityImageOverlay: "embeddedActivityImageOverlay_cd82a7",
        embeddedActivityJoinWrapper: "embeddedActivityJoinWrapper_cd82a7",
        embeddedActivityIcon: "embeddedActivityIcon_cd82a7",
      };
    },
    32986: function (e, t, n) {
      e.exports = {
        button: "button_adca65",
        enabled: "enabled_adca65",
        disabled: "disabled_adca65",
      };
    },
    270350: function (e, t, n) {
      e.exports = { subtext: "subtext_be40e6" };
    },
    306005: function (e, t, n) {
      e.exports = { title: "title_b97bdb" };
    },
    272371: function (e, t, n) {
      e.exports = {
        actions: "actions_d14755",
        panelButtonContainer: "panelButtonContainer_d14755",
      };
    },
    395144: function (e, t, n) {
      e.exports = {
        panel: "panel_bf1a22",
        body: "body_bf1a22",
        gameWrapper: "gameWrapper_bf1a22",
        liveIndicator: "liveIndicator_bf1a22",
        gameIcon: "gameIcon_bf1a22",
        info: "info_bf1a22",
        sparkleContainer: "sparkleContainer_bf1a22",
        sparkles: "sparkles_bf1a22",
        activityName: "activityName_bf1a22",
        channel: "channel_bf1a22",
        perksDemoContainer: "perksDemoContainer_bf1a22",
        perksDemoText: "perksDemoText_bf1a22",
      };
    },
    382290: function (e, t, n) {
      e.exports = {
        container: "container_adcaac",
        inner: "inner_adcaac",
        channel: "channel_adcaac",
        noiseCancellationPopout: "noiseCancellationPopout_adcaac",
        noiseCancellationTooltip: "noiseCancellationTooltip_adcaac",
        krispLogo: "krispLogo_adcaac",
        krispLink: "krispLink_adcaac",
        micTestButton: "micTestButton_adcaac",
        connection: "connection_adcaac",
        voiceUsers: "voiceUsers_adcaac",
        actionButtons: "actionButtons_adcaac",
        button: "button_adcaac",
        buttonColor: "buttonColor_adcaac",
        buttonActive: "buttonActive_adcaac",
        fauxDisabled: "fauxDisabled_adcaac",
        buttonContents: "buttonContents_adcaac",
        buttonIcon: "buttonIcon_adcaac",
        withText: "withText_adcaac",
        voicePanelIntroductionHeader: "voicePanelIntroductionHeader_adcaac",
        voicePanelIntroductionText: "voicePanelIntroductionText_adcaac",
        voicePanelIntroductionButton: "voicePanelIntroductionButton_adcaac",
        voicePanelIntroductionWrapper: "voicePanelIntroductionWrapper_adcaac",
        wrapper: "wrapper_adcaac",
        viewAsRolesWarning: "viewAsRolesWarning_adcaac",
        viewAsRolesWarningText: "viewAsRolesWarningText_adcaac",
        viewAsRolesWarningButton: "viewAsRolesWarningButton_adcaac",
        disabled: "disabled_adcaac",
        voiceButtonsContainer: "voiceButtonsContainer_adcaac",
      };
    },
    832926: function (e, t, n) {
      e.exports = {
        gameName: "gameName_aa73eb",
        clickableGameName: "clickableGameName_aa73eb",
        gameWrapper: "gameWrapper_aa73eb",
        gameIconWrapper: "gameIconWrapper_aa73eb",
        gameIcon: "gameIcon_aa73eb",
        info: "info_aa73eb",
        liveBadge: "liveBadge_aa73eb",
      };
    },
    457900: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
    449532: function (e, t, n) {
      e.exports = {
        container: "container_f4e139",
        mobileContainer: "mobileContainer_f4e139",
        quickswitcher: "quickswitcher_f4e139",
        mobileQuickswitcher: "mobileQuickswitcher_f4e139",
        input: "input_f4e139",
        autocompleteQuerySymbol: "autocompleteQuerySymbol_f4e139",
        scroller: "scroller_f4e139",
        protip: "protip_f4e139",
        hasContent: "hasContent_f4e139",
        emptyState: "emptyState_f4e139",
        emptyStateNote: "emptyStateNote_f4e139",
        emptyStateCTA: "emptyStateCTA_f4e139",
        miscContainer: "miscContainer_f4e139",
      };
    },
    431872: function (e, t, n) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
    159381: function (e, t, n) {
      e.exports = {
        tutorial: "tutorial_c36bbe",
        shown: "shown_c36bbe",
        arrowGroup: "arrowGroup_c36bbe",
        right: "right_c36bbe",
        arrowContainer: "arrowContainer_c36bbe",
        horizontal: "horizontal_c36bbe",
        diag1: "diag1_c36bbe",
        diag2: "diag2_c36bbe",
        arrowIcon: "arrowIcon_c36bbe",
        tutorialMessages: "tutorialMessages_c36bbe",
        searchMessage: "searchMessage_c36bbe message_c36bbe",
        selectMessage: "selectMessage_c36bbe message_c36bbe",
        hasQuery: "hasQuery_c36bbe",
      };
    },
    51100: function (e, t, n) {
      e.exports = {
        graphContainer: "graphContainer_c73c22",
        separator: "separator_c73c22",
        popoutText: "popoutText_c73c22",
        popoutTextDetails: "popoutTextDetails_c73c22",
        popoutBottom: "popoutBottom_c73c22",
        debugButton: "debugButton_c73c22",
        copyStatsButton: "copyStatsButton_c73c22",
        textWithIcon: "textWithIcon_c73c22",
        secured: "secured_c73c22",
      };
    },
    628437: function (e, t, n) {
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    239793: function (e, t, n) {
      e.exports = {
        ping: "ping_c02c63",
        smallPing: "smallPing_c02c63",
        rtcConnectionStatus: "rtcConnectionStatus_c02c63",
        rtcConnectionStatusConnected:
          "rtcConnectionStatusConnected_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionStatusConnecting:
          "rtcConnectionStatusConnecting_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionStatusError:
          "rtcConnectionStatusError_c02c63 rtcConnectionStatusLabel_c02c63",
        rtcConnectionQualityFine: "rtcConnectionQualityFine_c02c63",
        pingForeground: "pingForeground_c02c63",
        rtcConnectionQualityAverage: "rtcConnectionQualityAverage_c02c63",
        rtcConnectionQualityBad: "rtcConnectionQualityBad_c02c63",
        labelWrapper: "labelWrapper_c02c63",
        rtcConnectionStatusWrapper: "rtcConnectionStatusWrapper_c02c63",
      };
    },
    586802: function (e, t, n) {
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    539992: function (e, t, n) {
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    797448: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    66050: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    477090: function (e, t, n) {
      e.exports = {
        tooltipContainer: "tooltipContainer_eb20d6",
        tooltipBackground: "tooltipBackground_eb20d6",
        tooltip: "tooltip_eb20d6",
        tooltipContent: "tooltipContent_eb20d6",
      };
    },
    390317: function (e, t, n) {
      e.exports = {
        chatWheelMouseInput: "chatWheelMouseInput_ba62f2",
        chatWheel: "chatWheel_ba62f2",
        chatWheelBackground: "chatWheelBackground_ba62f2",
        chatWheelDeadZone: "chatWheelDeadZone_ba62f2",
        chatWheelCenter: "chatWheelCenter_ba62f2",
        innerContent: "innerContent_ba62f2",
        chatWheelDeadZoneIcon: "chatWheelDeadZoneIcon_ba62f2",
        paginationHint: "paginationHint_ba62f2",
        chatWheelItem: "chatWheelItem_ba62f2",
      };
    },
    6609: function (e, t, n) {
      e.exports = { soundButton: "soundButton_d608d3" };
    },
    485270: function (e, t, n) {
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
//# sourceMappingURL=e64b061bb906f0c7daa9.js.map
