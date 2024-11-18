"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88549"],
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
          return Q;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        s = n.n(o),
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
        E = n(979264),
        S = n(322614),
        Z = n(961556),
        N = n(163889),
        y = n(111028),
        T = n(853856),
        j = n(93687),
        A = n(785232),
        P = n(878857),
        M = n(249978),
        R = n(518950),
        w = n(199902),
        L = n(158776),
        D = n(306680),
        O = n(111583),
        k = n(9156),
        U = n(594174),
        G = n(709054),
        B = n(998502),
        H = n(788307),
        V = n(981631),
        F = n(388032),
        W = n(372242);
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
          });
      class Q extends l.Component {
        render() {
          let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: l,
            avatarWithTextClassName: r,
            interactiveClassName: o,
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
          return (0, i.jsx)(N.Z, {
            className: a()(W.channel, { [W.fullWidth]: d.tq }, f),
            onClick: m,
            role: g,
            focusProps: { within: !0, ...Y },
            "aria-posinset": C,
            "aria-setsize": v,
            children: (0, i.jsx)(p.Interactive, {
              as: "div",
              selected: t,
              className: a()(o, W.interactive, W.linkButton, {
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
                      className: a()(W.linkButtonIcon, l),
                      color: "currentColor",
                    }),
                    name: s,
                    innerClassName: a()(W.avatarWithText, r),
                  }),
                  u,
                ],
              }),
            }),
          });
        }
      }
      function J(e) {
        let {
            channel: t,
            isGDMFacepileEnabled: r,
            selected: o = !1,
            user: d,
            activities: S,
            applicationStream: j,
            entry: M,
            isTyping: w,
            status: L,
            isMobile: O,
            "aria-posinset": U,
            "aria-setsize": G,
          } = e,
          [B, Q] = l.useState(!1),
          J = l.useRef(null),
          X = l.useRef(null),
          {
            avatarSrc: $,
            avatarDecorationSrc: ee,
            eventHandlers: et,
          } = (0, R.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(o || B),
          }),
          en = (0, h.e7)([k.ZP], () =>
            k.ZP.isChannelMuted(t.getGuildId(), t.id),
          ),
          ei = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(t.id) > 0),
          el = (0, b.ZP)(t),
          er = (0, h.e7)([T.Z], () => T.Z.isFavorite(t.id)),
          ea = () => {
            Q(!0);
          },
          eo = () => {
            Q(!1);
          },
          es = function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()),
              m.Z.closePrivateChannel(t.id, o, n);
          },
          ec = () => {
            m.Z.preload(V.ME, t.id);
          },
          eu = (e) => {
            e.stopPropagation();
          },
          ed = (e) => {
            if (e.target === e.currentTarget) {
              var t;
              null === (t = J.current) || void 0 === t || t.click();
            }
          },
          eh = (e) => {
            t.isMultiUserDM()
              ? (0, f.jW)(
                  e,
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, i.jsx)(e, { ...n, channel: t, selected: o });
                  },
                  { noBlurEvent: !0 },
                )
              : (0, f.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("92453"),
                    n.e("56826"),
                    n.e("12327"),
                  ]).then(n.bind(n, 131404));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: d,
                      channel: t,
                      channelSelected: o,
                    });
                });
          },
          ep = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = F.intl.formatToPlainString(F.t.hJ5Ap6, { name: el }),
              r = F.intl.format(F.t.SSIVOj, { name: el });
            t.isManaged() &&
              ((l = F.intl.formatToPlainString(F.t.hVGjER, { name: el })),
              (r = F.intl.format(F.t.IK1Qvr, { name: el }))),
              (0, p.openModalLazy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (t) =>
                  (0, i.jsx)(e, { header: l, body: r, onSubmit: es, ...t });
              });
          },
          em = () => {
            let e = {
              className: W.activity,
              textClassName: W.activityText,
              emojiClassName: W.activityEmoji,
            };
            return t.isSystemDM()
              ? (0, i.jsx)("div", {
                  className: W.subtext,
                  children: (0, v.Z)(t.id)
                    ? F.intl.string(F.t.FL5T09)
                    : F.intl.string(F.t.NnY5lZ),
                })
              : t.isMultiUserDM()
                ? (0, i.jsx)("div", {
                    className: W.subtext,
                    children: F.intl.format(F.t.CxSA5O, {
                      members: t.recipients.length + 1,
                    }),
                  })
                : L !== V.Skl.OFFLINE &&
                    L !== V.Skl.INVISIBLE &&
                    null != S &&
                    S.length > 0
                  ? (0, i.jsx)(H.ZP, {
                      ...e,
                      activities: S,
                      applicationStream: j,
                      animate: B,
                      hideTooltip: !0,
                      user: d,
                    })
                  : null != M
                    ? (0, i.jsx)(Z.Z, { ...e, entry: M })
                    : null;
          },
          ef = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
              return t.recipients.length >= 2 && r && null == t.icon
                ? (0, i.jsx)(A.Z, {
                    "aria-hidden": !0,
                    recipients: t.recipients,
                    size: e,
                    isTyping: w,
                    status: L,
                  })
                : (0, i.jsx)(z, {
                    ...et,
                    src: (0, I.x)(t),
                    "aria-hidden": !0,
                    size: e,
                    status: w ? V.Skl.ONLINE : L,
                    isTyping: w,
                  });
            s()(
              null != d,
              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
            );
            let n = null;
            return (
              !d.isSystemUser() && (n = (0, g.Z)(S) ? V.Skl.STREAMING : L),
              (0, i.jsx)(z, {
                ...et,
                size: p.AvatarSizes.SIZE_32,
                src: $,
                avatarDecoration: ee,
                status: n,
                isMobile: O,
                isTyping: w,
                "aria-label": d.username,
                statusTooltip: !0,
              })
            );
          },
          eg = t.isMultiUserDM(),
          eC = t.isSystemDM(),
          e_ = (0, P.Q)(),
          ev =
            eg ||
            eC ||
            t.type !== V.d4z.DM ||
            (null == d ? void 0 : d.clan) == null
              ? el
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    el,
                    (0, i.jsx)(E.ZP, {
                      clan: null == d ? void 0 : d.clan,
                      userId: null == d ? void 0 : d.id,
                      inline: !0,
                      disableGuildProfile: !0,
                      className: W.clanTag,
                    }),
                  ],
                });
        return (0, i.jsx)(u.mh, {
          id: t.id,
          children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsx)(N.Z, {
              className: W.channel,
              role: n,
              focusProps: { ...Y, focusTarget: J, ringTarget: X },
              ref: X,
              onMouseEnter: ea,
              onMouseLeave: eo,
              onMouseDown: ec,
              onContextMenu: eh,
              "aria-setsize": G,
              "aria-posinset": U,
              children: (0, i.jsxs)(p.Interactive, {
                className: a()(W.interactive, {
                  [W.interactiveSystemDM]: e_ && eC,
                  [W.interactiveSelected]: o,
                }),
                as: "div",
                onClick: ed,
                muted: en,
                selected: o,
                children: [
                  (0, i.jsx)(c.rU, {
                    innerRef: J,
                    to: V.Z5c.CHANNEL(V.ME, t.id),
                    className: W.link,
                    "aria-label": (0, x.ZP)({ channel: t, unread: ei }),
                    ...l,
                    children: (0, i.jsx)(_.Z, {
                      avatar: ef(),
                      selected: o,
                      highlighted: ei,
                      muted: null != en && en,
                      subText: em(),
                      name: (0, i.jsx)(y.Z, {
                        tooltipClassName: W.overflowTooltip,
                        children: ev,
                      }),
                      decorators: t.isSystemDM()
                        ? (0, i.jsx)(C.Z, {
                            className: W.decorator,
                            type: C.Z.Types.SYSTEM_DM,
                            verified: !0,
                          })
                        : null,
                    }),
                  }),
                  er ? (0, i.jsx)(q, {}) : null,
                  (0, i.jsx)(K, {
                    "aria-label": eg
                      ? F.intl.string(F.t["26C4oq"])
                      : F.intl.string(F.t.jsvgc3),
                    onClick: eg ? ep : es,
                    onMouseDown: eu,
                  }),
                ],
              }),
            });
          },
        });
      }
      t.ZP = (e) => {
        let { channel: t, selected: n, ...l } = e,
          r = (0, h.e7)([U.default], () =>
            U.default.getUser(t.getRecipientId()),
          ),
          {
            isStatusIndicatorEnabled: a,
            isTypingIndicatorEnabled: o,
            isFacepileEnabled: s,
          } = j.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
          ),
          c = null == r ? void 0 : r.id,
          u = (0, h.cj)(
            [L.Z, w.Z],
            () => {
              let e;
              if (t.isMultiUserDM()) {
                if (a) {
                  let n = L.Z.getState().statuses;
                  t.recipients.some((e) => n[e] === V.Skl.ONLINE) &&
                    (e = V.Skl.ONLINE);
                }
              } else null != c && (e = L.Z.getStatus(c));
              return {
                status: e,
                activities: null != c ? L.Z.getActivities(c) : null,
                applicationStream:
                  null != c ? w.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && L.Z.isMobileOnline(c),
              };
            },
            [t, c, a],
          ),
          d = (0, h.e7)(
            [U.default, O.Z],
            () => {
              if (t.isMultiUserDM())
                return (
                  !!o &&
                  G.default.keys(O.Z.getTypingUsers(t.id)).some((e) => {
                    var t;
                    return (
                      e !==
                      (null === (t = U.default.getCurrentUser()) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  })
                );
              if (null != r) return O.Z.isTyping(t.id, t.getRecipientId());
              return !1;
            },
            [t, r, o],
          ),
          { recentActivityStatusEnabled: p } = (0, M.U)({
            location: "PrivateChannel",
          }),
          m = (0, S.Z)(null == r ? void 0 : r.id);
        return t.isMultiUserDM()
          ? (0, i.jsx)(J, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === V.Skl.ONLINE ? V.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l,
            })
          : (0, i.jsx)(J, {
              channel: t,
              selected: n,
              user: r,
              entry: p ? m[0] : void 0,
              isTyping: d,
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
        a = n(200651),
        o = n(192379),
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
        x = n(485267),
        I = n(82295),
        b = n(313201),
        E = n(860144),
        S = n(214852),
        Z = n(518311),
        N = n(355298),
        y = n(869404),
        T = n(333984),
        j = n(249978),
        A = n(210887),
        P = n(592125),
        M = n(158776),
        R = n(55589),
        w = n(515753),
        L = n(981631),
        D = n(388032),
        O = n(470792);
      function k(e, t, n) {
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
      let U = o.memo(function () {
        return (0, a.jsxs)("svg", {
          width: "184",
          height: "428",
          viewBox: "0 0 184 428",
          className: O.empty,
          children: [
            (0, a.jsx)("rect", { x: 40, y: 6, width: 144, height: 20, rx: 10 }),
            (0, a.jsx)("circle", { cx: 16, cy: 16, r: 16 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 50,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.9,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 60, r: 16, opacity: 0.9 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 94,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.8,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 104, r: 16, opacity: 0.8 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 138,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.7,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 148, r: 16, opacity: 0.7 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 182,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.6,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 192, r: 16, opacity: 0.6 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 226,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.5,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 236, r: 16, opacity: 0.5 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 270,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.4,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 280, r: 16, opacity: 0.4 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 314,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.3,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 324, r: 16, opacity: 0.3 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 358,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.2,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 368, r: 16, opacity: 0.2 }),
            (0, a.jsx)("rect", {
              x: 40,
              y: 402,
              width: 144,
              height: 20,
              rx: 10,
              opacity: 0.1,
            }),
            (0, a.jsx)("circle", { cx: 16, cy: 412, r: 16, opacity: 0.1 }),
          ],
        });
      });
      class G extends (l = o.Component) {
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
          return (0, a.jsx)(u.SJ, {
            children: (i) => {
              let { ref: l, role: r, ...o } = i;
              return (0, a.jsx)(m.FocusJumpSection, {
                children: (i) =>
                  (0, a.jsx)(m.List, {
                    fade: !0,
                    innerRole: r,
                    innerAriaLabel: D.intl.string(D.t.YUU0RE),
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
                    className: O.scroller,
                    sectionHeight: this.getSectionHeight,
                    paddingTop: t,
                    paddingBottom: 8,
                    rowHeight: this.getRowHeight,
                    renderSection: this.renderSection,
                    renderRow: this.renderRow,
                    sections: [n, Math.max(e.length, 1)],
                    ...o,
                    ...i,
                  }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            k(this, "state", {
              initialized: !1,
              preRenderedChildren: 0,
              totalRowCount: 0,
              nonNullChildren: [],
            }),
            k(this, "_list", null),
            k(this, "hasReportedAnalytics", !1),
            k(this, "reportAnalytics", () => {
              var e;
              if (this.hasReportedAnalytics) return;
              let t =
                null === (e = this._list) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
              if (null == t) return;
              let { privateChannelIds: n, channels: i } = this.props;
              if (0 === n.length) return;
              let l = o.Children.count(this.props.children);
              if (null == t) return;
              let r = Math.round((t.offsetHeight - 44 * l) / 44),
                a = r > n.length ? n.slice(0, r + 1) : n,
                s = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                c = n.some((e) => (0, v.Z)(e)),
                u = {
                  num_users_visible: a.length,
                  num_users_visible_with_mobile_indicator: s.filter(
                    (e) => null != e && M.Z.isMobileOnline(e),
                  ).length,
                };
              (this.hasReportedAnalytics = !0),
                C.ZP.trackWithMetadata(L.rMx.DM_LIST_VIEWED, {
                  ...u,
                  ...(0, _.X)(),
                  visible_user_ids: s.filter((e) => null != e),
                  changelog_dm_visible: c,
                });
            }),
            k(this, "getSectionHeight", (e) => {
              let { showDMHeader: t } = this.props;
              return 0 === e ? 0 : t ? 40 : 0;
            }),
            k(
              this,
              "handleScroll",
              c()(() => {
                if (null != this._list) {
                  let e = this._list.getScrollerNode();
                  null != e && f.Z.updateChannelListScroll(L.ME, e.scrollTop);
                }
              }, 100),
            ),
            k(this, "renderDM", (e, t) => {
              let {
                  privateChannelIds: n,
                  channels: i,
                  selectedChannelId: l,
                } = this.props,
                { totalRowCount: r, preRenderedChildren: o } = this.state,
                s = i[n[t]];
              return null == s
                ? null
                : (0, a.jsx)(
                    w.ZP,
                    {
                      channel: s,
                      selected: s.id === l,
                      "aria-posinset": o + t + 1,
                      "aria-setsize": r,
                    },
                    s.id,
                  );
            }),
            k(this, "renderChild", (e) => {
              let { nonNullChildren: t, totalRowCount: n } = this.state,
                i = t[e];
              return o.isValidElement(i)
                ? o.cloneElement(i, {
                    "aria-setsize": n,
                    "aria-posinset": e + 1,
                  })
                : i;
            }),
            k(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                { privateChannelIds: i } = this.props;
              return 0 === t
                ? this.renderChild(n)
                : 0 === n && 0 === i.length
                  ? (0, a.jsx)(U, {}, "no-private-channels")
                  : this.renderDM(t, n);
            }),
            k(this, "renderSection", (e) => {
              let { section: t } = e,
                { showDMHeader: n } = this.props;
              return 0 !== t && n
                ? (0, a.jsxs)(
                    I.Z,
                    {
                      className: O.privateChannelsHeaderContainer,
                      children: [
                        (0, a.jsx)("span", {
                          className: O.headerText,
                          children: D.intl.string(D.t.YUU0RE),
                        }),
                        (0, a.jsx)(Z.Z, {
                          tooltip: D.intl.string(D.t["6Urw1t"]),
                          tooltipPosition: "top",
                          popoutAlign: "left",
                          iconClassName:
                            O.privateChannelRecipientsInviteButtonIcon,
                          icon: m.PlusSmallIcon,
                          subscribeToGlobalHotkey: !0,
                        }),
                      ],
                    },
                    t,
                  )
                : null;
            }),
            k(this, "getRowHeight", (e, t) => {
              let { privateChannelIds: n } = this.props;
              return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
        }
      }
      k(G, "defaultProps", { padding: 8 });
      t.Z = (e) => {
        let { version: t, theme: n, children: i, showDMHeader: l } = e,
          r = o.Children.count(i),
          s = P.Z.getMutablePrivateChannels(),
          c = (0, y.k1)(s),
          p = (0, h.Wu)(
            [R.Z, N.Z, T.Z],
            () => {
              let e = R.Z.getPrivateChannelIds();
              return (0, y.tU)(e, [N.Z, T.Z]);
            },
            [],
          );
        (0, S.z)(E.R);
        let { recentActivityStatusEnabled: m } = (0, j.U)({
          location: "PrivateChannelsList",
        });
        o.useEffect(() => {
          m && (0, x.Jn)();
        }, [m]);
        let f = (0, h.cj)([g.Z, A.Z, P.Z], () => ({
            theme: A.Z.darkSidebar ? L.BRd.DARK : n,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version:
              null != t
                ? "".concat(t, ":").concat(P.Z.getPrivateChannelsVersion())
                : P.Z.getPrivateChannelsVersion(),
          })),
          C = o.useRef(null),
          _ = o.useCallback((e) => {
            let t = C.current,
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
          v = o.useCallback(
            () =>
              new Promise((e) => {
                let t = C.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [],
          ),
          I = o.useCallback(
            () =>
              new Promise((e) => {
                let t = C.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            [],
          ),
          Z = (0, b.Dt)(),
          M = (0, d.ZP)({
            id: "private-channels-".concat(Z),
            isEnabled: f.keyboardModeEnabled,
            scrollToStart: v,
            scrollToEnd: I,
            defaultFocused: (r + (l ? 1 : 0)).toString(),
            setFocus: _,
          });
        return (0, a.jsx)(u.bG, {
          navigator: M,
          children: (0, a.jsx)(G, {
            channels: c,
            privateChannelIds: p,
            listRef: C,
            theme: n,
            version: t,
            ...e,
            children: i,
            ...f,
          }),
        });
      };
    },
    353042: function (e, t, n) {
      n(653041), n(47120);
      var i,
        l = n(192379),
        r = n(846519);
      function a(e, t, n) {
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
      class o extends (i = l.Component) {
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
            a = 0,
            o = [],
            s = null != e[0] ? e[0].bytes : 0;
          for (; r < t + i; r++) {
            let t;
            let i = l - (r + 1) * n;
            for (; a < e.length; )
              if ((t = e[a]).timestamp > i) a++;
              else break;
            if (a === e.length) break;
            null != t && (o.push(s - t.bytes), (s = t.bytes));
          }
          for (; r < t + i; r++) o.push(0);
          return o.reverse(), o;
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
            a(this, "_interval", new r.Xp()),
            a(this, "update", () => {
              let {
                  onUpdate: e,
                  numUpdatesToShow: t,
                  pointsToSmooth: n,
                  updateInterval: i,
                } = this.props,
                l = this.props.getHistoricalTotalBytes(),
                r = null != l[0] ? l[0].bytes : 0,
                a = [
                  ...this.state.deltaBytes.slice(1, t + n),
                  r - this.state.lastTotalBytes,
                ];
              this.setState(
                {
                  deltaBytes: a,
                  smoothedDeltaBytes: this.smoothDeltaBytes(a),
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
      a(o, "defaultProps", {
        numUpdatesToShow: 30,
        updateInterval: 500,
        pointsToSmooth: 10,
      }),
        (t.Z = o);
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
        a = n(120356),
        o = n.n(a),
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
        b = n(757937);
      function E(e, t, n) {
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
      let S = {
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
            E(this, "renderProgressBody", (e, t) => {
              let { state: n, application: i } = this.props,
                { stage: l, progress: r, total: a, type: o } = n;
              if (null == r || null == a || null == l) return null;
              let s = (e[e.length - 1] / t) * 1e3,
                c = 0 !== s ? Math.max(1, (a - r) / s) : null,
                u = S[o],
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
            className: o()(n, b.progressContainer),
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
            E(this, "state", { animationScale: new s.Z.Value(0) }),
            E(this, "handleOnClick", (e) => {
              let { onClick: t } = this.props;
              e.preventDefault(),
                e.stopPropagation(),
                null != t && t(e),
                (0, f.uL)(x.Z5c.APPLICATION_LIBRARY);
            });
        }
      }
      E(N, "defaultProps", { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
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
        a = n(388032),
        o = n(710148);
      function s(e) {
        let { channel: t, category: n, ...s } = e,
          c = (0, r.ZP)(t, !0),
          u = (0, r.ZP)(n);
        return (0, i.jsx)(l.ConfirmModal, {
          header: a.intl.string(a.t.YWMtRU),
          confirmText: a.intl.string(a.t.eW8Gy8),
          cancelText: a.intl.string(a.t.s4uM3d),
          confirmButtonColor: l.Button.Colors.BRAND,
          ...s,
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: o.message,
            selectable: !1,
            children: a.intl.format(a.t["iKW+jY"], {
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
        a = n(433517),
        o = n(481060),
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
      let E = "DRAGGABLE_GUILD_CHANNEL";
      function S(e, t) {
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
          E,
          {
            drop(e, t) {
              let n;
              let l = v.Z.getGuildId(),
                r = t.getItem(),
                a = (0, x.if)(
                  S(l, r.id),
                  r.position,
                  e.channel,
                  e.position,
                  r.channelList,
                );
              if (null == a) return;
              let u = S(l, r.id);
              if (null == u) return;
              let h = f.Z.getCategories(l),
                p = C.Z.getGuild(l);
              if (null == p) return;
              let g = (0, x.Dn)(u, S(l, a.referenceId), a.parentId, h);
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
                  u.parent_id !== a.parentId &&
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
                    (0, o.openModal)((t) =>
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
              let a = m.Z.getChannel(l.parentId),
                o = m.Z.getChannel(i.parent_id),
                s = _.Z.can(b.Plq.MANAGE_CHANNELS, r),
                c = null != o ? _.Z.can(b.Plq.MANAGE_CHANNELS, o) : s,
                u = null != a ? _.Z.can(b.Plq.MANAGE_CHANNELS, a) : s;
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
            E,
            {
              canDrag(e) {
                let { channel: t } = e;
                if (v.Z.getGuildId() === b.I_8) return !0;
                let l = C.Z.getGuild(t.getGuildId());
                if (null == l) return !1;
                if ((0, h.r1)(l.id) && _.Z.can(b.Plq.MANAGE_CHANNELS, l))
                  return (
                    "true" !== a.K.get("doNotShowReorderModal") &&
                      (0, o.openModalLazy)(async () => {
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
                  a = v.Z.getGuildId(),
                  o = f.Z.getCategories(a);
                return {
                  isChannelDrag: !0,
                  id: t,
                  position: r,
                  parentId: n,
                  type: l,
                  channelList: (0, u.Z)(o._categories, o, (e) => {
                    let { channel: t } = e;
                    if (
                      t.type === b.d4z.GUILD_CATEGORY &&
                      null != o[t.id] &&
                      0 === o[t.id].length
                    )
                      return (
                        a === b.I_8 ||
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
          return E;
        },
        Xq: function () {
          return S;
        },
        Zg: function () {
          return Z;
        },
      }),
        n(411104);
      var i = n(186070),
        l = n(185514),
        r = n(360038),
        a = n(175724),
        o = n(705371),
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
        _ = n(717747),
        v = n(743810),
        x = n(981631),
        I = n(388032);
      function b() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map((e) => {
          let t = E[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      let E = {
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
          [x.EkH.MARK_CHANNEL_READ]: a.f,
          [x.EkH.MARK_SERVER_READ]: o.l,
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
        S = { [x.EkH.QUICKSWITCHER_SHOW]: c.$ };
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
        a = n(574254),
        o = n(585483),
        s = n(547420),
        c = n(981631);
      let u = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, l.isInDndMode)()) return !1;
            if (o.S.hasSubscribers(c.CkL.CALL_DECLINE))
              return o.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (a.Z.close()) return !1;
            if ((0, i.k)(e.target)) {
              let t = (0, r.J5)(e.target);
              if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (o.S.hasSubscribers(c.CkL.MODAL_CLOSE))
              return o.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            o.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
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
        a = n.n(r),
        o = n(399606),
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
        E = n(626135),
        S = n(768581),
        Z = n(358085),
        N = n(998502),
        y = n(379164),
        T = n(590965),
        j = n(981631),
        A = n(474936),
        P = n(388032),
        M = n(940535),
        R = n(971436);
      function w() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(
          u.Z.PREMIUM_UPSELL_TOOLTIP,
        );
        return (
          l.useEffect(() => {
            E.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
              type: A.cd.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: j.ZY5.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, i.jsxs)(s.Clickable, {
            onClick: () =>
              (0, _.Z)({
                analyticsSource: { page: j.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                analyticsLocation: {
                  page: j.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                  section: j.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: M.experimentUpsellError,
            children: [
              (0, i.jsx)(s.NitroWheelIcon, {
                size: "md",
                className: M.experimentUpsellIcon,
                color: f.JX.PREMIUM_TIER_2,
              }),
              (0, i.jsx)("span", {
                className: M.experimentUpsellText,
                children: P.intl.string(P.t["4/W4Pz"]),
              }),
              (0, i.jsx)("span", {
                className: M.experimentGetNitro,
                children: P.intl.string(P.t.b6KOkJ),
              }),
            ],
          })
        );
      }
      function L(e) {
        let { className: t } = e;
        return (0, i.jsxs)("div", {
          "aria-hidden": "true",
          className: a()(M.iconContainer, t),
          children: [
            (0, i.jsx)(I.Z, { className: M.iconSparklePlus }),
            (0, i.jsx)(s.LinkIcon, {
              size: "custom",
              color: "currentColor",
              className: M.iconLink,
              width: 40,
              height: 40,
            }),
            (0, i.jsx)(b.Z, { className: M.iconSparkleStar }),
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
              className: M.errorContent,
              children: [
                (0, i.jsx)(L, { className: M.errorImage }),
                (0, i.jsx)(s.Heading, {
                  id: n,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: P.intl.string(P.t.u9zxnZ),
                }),
                (0, i.jsx)("div", {
                  className: M.errorBody,
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
        (0, o.e7)([x.default], () => {
          var e;
          return null === (e = x.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let {
          invite: f,
          error: _,
          submitting: I,
        } = (0, o.cj)([T.Z], () => T.Z.getProps());
        l.useEffect(() => {
          !__OVERLAY__ &&
            Z.isPlatformEmbedded &&
            ((0, Z.isWindows)() ? N.ZP.minimize() : N.ZP.restore(),
            N.ZP.focus());
        }, []);
        let b = (0, g.Dt)(),
          { analyticsLocations: E } = (0, d.ZP)(u.Z.INVITE_MODAL);
        if (null == f) return null;
        if (
          f.state === j.r2o.EXPIRED ||
          f.state === j.r2o.BANNED ||
          f.state === j.r2o.ERROR
        )
          return (0, i.jsx)(D, { transitionState: r });
        if (null == f.channel) return null;
        function A() {
          null != f && y.Z.acceptInvite(f);
        }
        let { guild: L, channel: O, inviter: k, target_application: U } = f,
          G = null != L,
          B = null != f.stage_instance,
          H = null == f.guild && null == f.channel && null != f.inviter;
        if (null != U)
          (t = null == L ? void 0 : L.name),
            (n = v.Z.createFromServer(U).getCoverImageURL(1024));
        else if (null != L)
          (t = L.name),
            (n = S.ZP.getGuildSplashURL({ id: L.id, splash: L.splash }));
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
            value: E,
            children: (0, i.jsxs)(s.ModalRoot, {
              size: s.ModalSize.DYNAMIC,
              "aria-labelledby": b,
              transitionState: r,
              className: M.container,
              children: [
                (0, i.jsx)("div", {
                  className: M.contentWrapper,
                  children: (0, i.jsx)(s.Scroller, {
                    className: M.scroller,
                    children: (0, i.jsxs)(m.Z, {
                      className: M.inviteContent,
                      direction: m.Z.Direction.VERTICAL,
                      justify: m.Z.Justify.BETWEEN,
                      children: [
                        (0, i.jsx)("div", {
                          id: b,
                          className: R.marginBottom20,
                          children: (0, i.jsx)(c.Z, {
                            invite: f,
                            disableUser: G,
                            error: _,
                          }),
                        }),
                        B && null != L
                          ? (0, i.jsx)("div", {
                              className: a()(R.marginBottom20, M.stage),
                              children: (0, i.jsx)(p.Z, {
                                isCard: !0,
                                stageInstance: f.stage_instance,
                                guild: L,
                              }),
                            })
                          : null,
                        (0, i.jsxs)("div", {
                          children: [
                            V ? (0, i.jsx)(w, {}) : null,
                            null == U
                              ? (0, i.jsx)(s.Tooltip, {
                                  text: V ? P.intl.string(P.t.iLyuDA) : null,
                                  position: "bottom",
                                  children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } =
                                      e;
                                    return (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: A,
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
                                  className: M.buttonGroup,
                                  children: [
                                    (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: A,
                                      submitting: I,
                                      children: P.intl.string(P.t.RscU7O),
                                    }),
                                    (0, i.jsx)(h.zx, {
                                      color: h.zx.Colors.PRIMARY,
                                      size: h.zx.Sizes.LARGE,
                                      onClick: A,
                                      submitting: I,
                                      children: P.intl.string(P.t.eylRaW),
                                    }),
                                  ],
                                }),
                            (0, i.jsx)(m.Z, {
                              justify: m.Z.Justify.CENTER,
                              className: R.marginTop8,
                              children: (0, i.jsx)(h.zx, {
                                look: h.zx.Looks.LINK,
                                className: M.noThanksButton,
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
                    className: M.inviteSplash,
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
        a = n(317770),
        o = n(472365),
        s = n(590965);
      let c = "INVITE_MODAL_KEY";
      class u extends a.Z {
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
            (0, l.openModal)((e) => (0, i.jsx)(o.Z, { ...e }), {
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
        a,
        o,
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
        E = !1,
        S = !1,
        Z = [];
      function N() {
        E = !0;
      }
      class y extends (l = s.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, g.Z, _.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? x.IlC.OVERLAY : x.IlC.APP;
          return !!(E && Z.length > 0 && b === e);
        }
        getProps() {
          return {
            invite: Z.length > 0 ? Z[0][0] : null,
            error: null != i && "" !== i ? i : null,
            submitting: S,
          };
        }
      }
      (o = "InviteModalStore"),
        (a = "displayName") in (r = y)
          ? Object.defineProperty(r, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[a] = o),
        (t.Z = new y(c.Z, {
          OVERLAY_INITIALIZE: N,
          CONNECTION_OPEN: N,
          CONNECTION_CLOSED: function () {
            E = !1;
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
            (b = e.context), (S = !1);
            let n = (function (e) {
              let {
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  code: i,
                  state: l,
                  target_type: r,
                  target_user: a,
                  target_application: o,
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
                  target_user: a,
                  target_application: o,
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
            if (((i = null), (S = !1), Z.length > 0)) {
              let [, e] = Z.shift();
              null != e && e();
            }
          },
          INVITE_ACCEPT: function () {
            S = !0;
          },
          INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (S = !1);
          },
        }));
    },
    503737: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(570140),
        a = n(468026),
        o = n(317770),
        s = n(981631),
        c = n(388032);
      let u = "ActivityInviteManager",
        d = () => {
          r.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class h extends o.Z {
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
          let { activity: t, isPrivate: r, context: o } = e,
            h =
              o === s.IlC.POPOUT
                ? l.POPOUT_MODAL_CONTEXT
                : l.DEFAULT_MODAL_CONTEXT;
          r
            ? (0, l.openModal)(
                (e) =>
                  (0, i.jsx)(a.default, {
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
          return a;
        },
      }),
        n(724458),
        n(442837);
      var i = n(868854),
        l = n(801077),
        r = n(674563);
      function a() {
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
          return h;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(594174),
        o = n(74538),
        s = n(327943),
        c = n(997945),
        u = n(630117),
        d = n(441319);
      function h() {
        let [e, t, n] = (0, l.Wu)([a.default, s.Z], () => [
            s.Z.getCurrentDesktopIcon(),
            s.Z.isEditorOpen,
            o.ZP.isPremium(a.default.getCurrentUser()),
          ]),
          h = (0, d.aW)(e),
          p = e !== c.aH.DEFAULT && (n || t),
          m = (0, r.useRedesignIconContext)().enabled,
          f = (0, i.jsx)(r.ClydeIcon, {
            size: "custom",
            color: "currentColor",
            width: 30,
            height: m ? 30 : 22,
          });
        return null != h && p ? (0, i.jsx)(u.Z, { id: e, width: 48 }) : f;
      }
    },
    570908: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(319716);
      function o(e) {
        let {
          selected: t,
          muted: n = !1,
          highlighted: l = !1,
          wrapContent: o = !1,
          avatar: s,
          decorators: c,
          name: u,
          subText: d,
          avatarClassName: h,
          innerClassName: p,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(p, a.layout, {
            [a.muted]: !t && n,
            [a.highlighted]: l,
            [a.wrappedLayout]: o,
          }),
          children: [
            (0, i.jsx)("div", { className: r()(a.avatar, h), children: s }),
            (0, i.jsxs)("div", {
              className: a.content,
              children: [
                (0, i.jsxs)("div", {
                  className: a.nameAndDecorators,
                  children: [
                    (0, i.jsx)("div", {
                      className: r()(a.name, { [a.wrappedName]: o }),
                      children: u,
                    }),
                    c,
                  ],
                }),
                null != d
                  ? (0, i.jsx)("div", { className: a.subText, children: d })
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
        l = n(976649),
        r = n(454e3),
        a = n(731965);
      let o = (0, r.F)((e) => ({ upsellsByGuildId: {} }));
      function s(e) {
        return o((t) => {
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
                    (0, a.j)(() => {
                      o.setState((e) => {
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
        a = n(120356),
        o = n.n(a),
        s = n(954955),
        c = n.n(s),
        u = n(748780),
        d = n(902704),
        h = n(481060),
        p = n(556854);
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
            className: o()(p.bar, e),
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
              className: a,
              barClassName: s,
              hide: c,
              animate: u,
            } = this.props,
            { reducedMotion: d } = this.context;
          return (0, l.jsx)("div", {
            className: null != a ? a : void 0,
            children: (0, l.jsx)(g, {
              hide: !0 === c || (null == e && null == t),
              className: o()(s, null != t ? p.mention : p.unread),
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
                    onCalculate: a,
                  } = this.props,
                  o = null,
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
                    null == o && l(e, r, c) && (o = e),
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
                null != a && a(o, s, r),
                  this.setState({ mention: o, unread: s });
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
        a = n(481060),
        o = n(239091),
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
        _ = n(499410);
      function v(e) {
        (0, o.jW)(e, async () => {
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
        return (0, i.jsx)(a.Popout, {
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
                      children: (0, i.jsx)(a.KeyCombo, {
                        className: _.keybindShortcut,
                        shortcut: t,
                      }),
                    }),
                }),
              }),
              headerClassName: _.clipsEducationHeader,
              body: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.Text, {
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
          o = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(g.kg4.SAVE_CLIP));
        if (!(t && n) || null == o || e) return null;
        let s = h.BB(o.shortcut, !0);
        return (0, i.jsx)(I, {
          keybindString: s,
          children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText:
              null != o
                ? C.intl.formatToPlainString(C.t.HIMcv7, {
                    hotkey: h.BB(null == o ? void 0 : o.shortcut, !0),
                  })
                : C.intl.string(C.t.s52pjo),
            onClick: x,
            onContextMenu: v,
            icon: a.ClipsIcon,
          }),
        });
      };
    },
    832382: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(70097),
        a = n(720924);
      function o(e) {
        let { children: t, channel: n } = e,
          o = (0, l.useRef)(null),
          s = (0, l.useRef)(!0),
          c = n.hdStreamingUntil;
        return ((0, l.useEffect)(() => {
          if (s.current) {
            s.current = !1;
            return;
          }
          if (null != c && new Date(c) < new Date() && null != o.current) {
            let e = o.current;
            e.play();
            let t = setTimeout(() => {
              e.pause();
            }, 23e3);
            return () => {
              clearTimeout(t);
            };
          }
        }, [c]),
        n.isHDStreamSplashed)
          ? (0, i.jsxs)("div", {
              className: a.container,
              onMouseEnter: () => {
                null != o.current && o.current.play();
              },
              onMouseLeave: () => {
                null != o.current && o.current.pause();
              },
              children: [
                (0, i.jsx)("div", {
                  className: a.videoContainer,
                  children: (0, i.jsx)(r.Z, {
                    ref: o,
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
    322614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        l = n(392711),
        r = n(709054),
        a = n(26033),
        o = n(897674),
        s = n(561308),
        c = n(206583);
      function u(e) {
        let t = (0, o.Z)(c.YN.GLOBAL_FEED),
          n = (0, o.Z)(c.YN.GAME_PROFILE_FEED);
        return (0, i.useMemo)(() => {
          let i = (0, l.unionBy)(t, n, (e) => e.id).filter(
            (t) => !(0, s.kr)(t) && (0, a.LP)(t) && t.author_id === e,
          );
          return (0, l.uniqWith)(
            i,
            (e, t) =>
              "application_id" in e.extra &&
              "application_id" in t.extra &&
              e.extra.application_id === t.extra.application_id,
          ).sort(
            (e, t) =>
              r.default.extractTimestamp(t.id) -
              r.default.extractTimestamp(e.id),
          );
        }, [t, n, e]);
      }
    },
    961556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(278074),
        r = n(788307),
        a = n(26033),
        o = n(388032);
      function s(e) {
        let { entry: t, className: n, textClassName: s } = e,
          { message: c, title: u } = (0, l.EQ)(t)
            .when(a.dX, (e) => {
              let { extra: t } = e;
              return { message: o.t["wgtd/f"], title: t.game_name };
            })
            .when(a.Mq, (e) => {
              let { extra: t } = e;
              return { message: o.t["wgtd/f"], title: t.activity_name };
            })
            .when(a.y0, (e) => {
              let { extra: t } = e;
              return { message: o.t.nCCdMD, title: t.media_title };
            })
            .when(a.dU, (e) => {
              var t, n;
              let { extra: i } = e;
              return {
                message: o.t.PYEeFh,
                title:
                  null === (n = i.entries[0]) || void 0 === n
                    ? void 0
                    : null === (t = n.media) || void 0 === t
                      ? void 0
                      : t.title,
              };
            })
            .otherwise(() => ({ message: null, title: null }));
        return null == u || "" === u
          ? null
          : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)(r.DD, {
                text: o.intl.format(c, { title: u }),
                className: s,
              }),
            });
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
        a = n.n(r),
        o = n(481060),
        s = n(173614);
      let c = l.forwardRef(function (e, t) {
        let { className: n, focusProps: l, ...r } = e;
        return (0, i.jsx)(o.FocusRing, {
          ...l,
          children: (0, i.jsx)("li", {
            className: a()(n, s.container),
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
          return s;
        },
      });
      var i = n(109213),
        l = n(249978),
        r = n(91641),
        a = n(136885),
        o = n(987338);
      let s = new r.E(
        [a.NR, a.ZI, a.Ob, a.uc, a.m1, l.v, i.G],
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
          return a;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return o;
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
        a = (0, i.Z)({
          kind: "user",
          id: "2024-08_ctp_dmgdm_list_render__filters",
          label: "CTP DM/GDM List Render - A/A test - Filters",
          defaultConfig: { doSomething: !1 },
          commonTriggerPoint: l.$P.DM_GDM_LIST_RENDER,
          treatments: [
            { id: 1, label: "Treatment", config: { doSomething: !0 } },
          ],
        }),
        o = (0, i.Z)({
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
        a = n(306680),
        o = n(9156),
        s = n(709054),
        c = n(231338);
      function u(e) {
        return (0, i.cj)([l.Z, a.ZP, o.ZP, r.Z], () => {
          let t = s.default.keys(e);
          return t.reduce(
            (e, t) => {
              let n = l.Z.getChannel(t),
                i = null == n ? void 0 : n.isGuildVocal();
              return (
                (e.badge = e.badge + a.ZP.getMentionCount(t)),
                (e.unread =
                  e.unread ||
                  (!i &&
                    r.Z.can(c.Pl.VIEW_CHANNEL, n) &&
                    a.ZP.hasUnread(t) &&
                    !o.ZP.isChannelMuted(
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
        a = n(853856),
        o = n(981631);
      function s(e) {
        return (0, i.cj)(
          [r.ZP, l.Z, a.Z],
          () => {
            if (e !== o.I_8) return r.ZP.getVoiceStates(e);
            let t = a.Z.getFavoriteChannels(),
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
          return f;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(593214),
        c = n(981631),
        u = n(388032),
        d = n(336145),
        h = n(479315),
        p = n(455491);
      function m() {
        return (0, i.jsx)("div", {
          className: a()(h.row, h.rowGuildName),
          children: (0, i.jsx)("span", {
            className: a()(
              h.guildNameText,
              h.guildNameTextLimitedSize,
              d.tooltipText,
            ),
            children: u.intl.string(u.t["4tSWQk"]),
          }),
        });
      }
      let f = l.memo(function (e) {
        let { "aria-label": t = !1, children: n } = e,
          r = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, s.up)();
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
        return (0, i.jsx)(o.Tooltip, {
          forceOpen: r,
          color: o.TooltipColors.GREEN,
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          align: "center",
          text: (0, i.jsx)(m, {}),
          "aria-label": t,
          tooltipClassName: p.listItemTooltip,
          children: (e) =>
            (0, i.jsx)("div", {
              ...e,
              onMouseEnter: c.dG4,
              onMouseLeave: c.dG4,
              children: n,
            }),
        });
      });
    },
    940777: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(91192),
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
        E = n(853856),
        S = n(593214),
        Z = n(919755),
        N = n(110977),
        y = n(603274),
        T = n(981631),
        j = n(388032),
        A = n(534977);
      let P = {
        analyticsSource: {
          page: T.ZY5.GUILD_CHANNEL,
          section: T.jXE.CHANNEL_LIST,
          object: T.qAy.CHANNEL,
        },
      };
      function M() {
        let e = (0, o.Ie)("favorites"),
          { favoriteAdded: t, clearFavoriteAdded: r } = (0, S.up)(),
          [M, R] = l.useState(!1),
          { favoriteServerMuted: w, favoriteChannels: L } = (0, s.cj)(
            [E.Z],
            () => ({
              favoriteChannels: E.Z.getFavoriteChannels(),
              favoriteServerMuted: E.Z.favoriteServerMuted,
            }),
          ),
          D = (0, s.e7)([x.Z], () => x.Z.getChannelId(T.I_8)),
          O = (0, s.e7)([v.Z], () => v.Z.getChannel(D)),
          k = (0, C.Z)((e) => e.guildId) === T.I_8,
          { badge: U, unread: G } = (0, Z.Z)(L),
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
              a = (0, s.Wu)([h.ZP], () =>
                b.default
                  .keys(e)
                  .reduce(
                    (e, t) => (
                      e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e
                    ),
                    [],
                  ),
              ),
              o = (0, s.e7)([h.ZP], () =>
                Array.from(h.ZP.getSelfEmbeddedActivities().values()).some(
                  (t) => {
                    let { channelId: n } = t;
                    return null != e[n];
                  },
                ),
              ),
              c = a.length > 0,
              u = !1,
              d = !1,
              p = !1,
              m = !1;
            return (
              n ? ((u = !r), (d = r), (p = i), (m = o)) : ((p = l), (m = c)),
              (0, f.Or)({
                audio: u,
                video: d,
                screenshare: p,
                liveStage: !1,
                isCurrentUserConnected: n,
                activity: m,
              })
            );
          })(L),
          H = U > 0 ? (0, g.N)(U) : null,
          V = l.useCallback(() => {
            r();
          }, [r]);
        return (0, i.jsxs)(m.H, {
          children: [
            (0, i.jsx)(p.Z, {
              selected: k,
              hovered: M,
              unread: G && !w,
              className: A.pill,
            }),
            (0, i.jsx)(y.Z, {
              onShow: V,
              children: (0, i.jsx)(N.S, {
                children: (0, i.jsx)(c.BlobMask, {
                  selected: k || M,
                  upperBadge: B,
                  lowerBadge: H,
                  children: (0, i.jsx)(c.NavItem, {
                    ...e,
                    ariaLabel: j.intl.formatToPlainString(j.t["/uzRsr"], {
                      guildName: j.intl.string(j.t.wMWycn),
                      mentions: U,
                    }),
                    to: { pathname: T.Z5c.CHANNEL(T.I_8, D), state: P },
                    selected: k || M,
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
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
                      className: a()(A.ring, { [A.ringActive]: t }),
                      children: (0, i.jsx)(c.StarIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: A.favoriteIcon,
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
          return T;
        },
      }),
        n(47120),
        n(390547),
        n(653041);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(392711),
        o = n.n(a),
        s = n(442837),
        c = n(481060),
        u = n(317381),
        d = n(884338),
        h = n(565799),
        p = n(501655),
        m = n(199902),
        f = n(592125),
        g = n(594174),
        C = n(938475),
        _ = n(823379),
        v = n(709054),
        x = n(853856),
        I = n(981631),
        b = n(388032),
        E = n(479315),
        S = n(455491);
      function Z(e, t) {
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
      function N() {
        var e, t;
        let n = (0, s.Wu)([x.Z, f.Z], () =>
            v.default
              .keys(x.Z.getFavoriteChannels())
              .map((e) => f.Z.getChannel(e))
              .filter(_.lm),
          ),
          l = n.map((e) => e.id),
          r = n.filter((e) => e.type === I.d4z.GUILD_VOICE),
          a = n
            .filter((e) => e.type === I.d4z.GUILD_STAGE_VOICE)
            .map((e) => e.id),
          b = (0, s.Wu)(
            [C.ZP],
            () =>
              o().flatMap(r, (e) =>
                C.ZP.getVoiceStatesForChannel(e).map((e) => {
                  let { user: t } = e;
                  return t;
                }),
              ),
            [r],
          ),
          S = (0, s.Wu)([h.Z], () =>
            o().flatMap(a, (e) =>
              h.Z.getMutableParticipants(e, p.pV.SPEAKER)
                .filter((e) => e.type === p.Ui.VOICE)
                .map((e) => {
                  let { user: t } = e;
                  return t;
                }),
            ),
          ),
          N = (0, s.e7)([h.Z], () => {
            let e = 0;
            for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
            return e;
          }),
          y = (0, s.Wu)(
            [m.Z],
            () =>
              m.Z.getAllApplicationStreams()
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
          j = (0, s.Wu)([g.default], () => T.map((e) => g.default.getUser(e)), [
            T,
          ]),
          A = (0, s.Wu)([g.default], () => y.map((e) => g.default.getUser(e)), [
            y,
          ]),
          P = Z(
            c.VoiceNormalIcon,
            b.filter((e) => !y.includes(e.id) && !T.includes(e.id)),
          );
        let M =
            ((e = S),
            (t = N),
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
          R = Z(
            c.ScreenArrowIcon,
            A.filter((e) => null != e && !T.includes(e.id)),
          ),
          w = Z(c.ActivitiesIcon, j);
        return (0, i.jsxs)(i.Fragment, { children: [M, P, R, w] });
      }
      function y() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(E.row, E.rowGuildName),
              children: (0, i.jsx)("span", {
                className: r()(E.guildNameText, E.guildNameTextLimitedSize),
                children: b.intl.string(b.t.wMWycn),
              }),
            }),
            (0, i.jsx)(N, {}),
          ],
        });
      }
      function T(e) {
        let { "aria-label": t = !1, onShow: n, children: l } = e;
        return (0, i.jsx)(c.Tooltip, {
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          text: (0, i.jsx)(y, {}),
          "aria-label": t,
          tooltipClassName: S.listItemTooltip,
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
          return o;
        },
        kR: function () {
          return a;
        },
      });
      var i = n(626135),
        l = n(981631);
      function r(e) {
        let { selectedTab: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
      }
      function a(e) {
        let { selectedCategoryId: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
          selected_category_id: t,
        });
      }
      function o(e) {
        let { source: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
          source: t,
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
        a = n.n(r),
        o = n(866442),
        s = n(481060),
        c = n(686546),
        u = n(950930);
      let d = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];
      function h(e) {
        return (0, o.Rf)(
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
          [o, d] = l.useState(h(n));
        return (
          l.useEffect(() => {
            d(h(n));
          }, [n]),
          (0, i.jsxs)("div", {
            className: a()(u.wrapper, r),
            children: [
              (0, i.jsx)(c.ZP, {
                mask: c.ZP.Masks.STATUS_SCREENSHARE,
                width: 32,
                height: 32,
                children: (0, i.jsx)("div", {
                  className: u.icon,
                  style: { backgroundColor: o },
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
    989941: function (e, t, n) {
      let i;
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(145597);
      function r(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, l.QF)();
          return null == e || null == n
            ? null
            : (null == i ? void 0 : i.id) === e.id &&
                (null == i ? void 0 : i.pid) === n
              ? i
              : (i = {
                  id: e.id,
                  pid: n,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
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
      function a(e, t, n) {
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
      let o = {};
      class s extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e && (o = e);
        }
        getState() {
          return o;
        }
        getCountForGuild(e) {
          return o[e];
        }
      }
      a(s, "displayName", "GuildBoostingProgressBarPersistedStore"),
        a(s, "persistKey", "PremiumGuildProgressBarPersistedStore"),
        (t.Z = new s(r.Z, {
          APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
            let { guildId: t, premiumCount: n } = e;
            o = { ...o, [t]: n };
          },
        }));
    },
    583962: function (e, t, n) {
      n.d(t, {
        PD: function () {
          return A;
        },
        aR: function () {
          return P;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(100621),
        s = n(91192),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(239091),
        p = n(100527),
        m = n(367907),
        f = n(906732),
        g = n(434404),
        C = n(496675),
        _ = n(259580),
        v = n(267642),
        x = n(624138),
        I = n(667815),
        b = n(531572),
        E = n(26323),
        S = n(30513),
        Z = n(981631),
        N = n(388032),
        y = n(183694);
      let T = (0, x.Mg)(
          u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN,
        ),
        j = (e) => {
          let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_GUILD, t)),
            p = async () => {
              if (!!u)
                s(!0),
                  await g.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }),
                  a(!r),
                  s(!1);
            };
          return (0, i.jsx)(d.Menu, {
            navId: "progress-bar-context",
            onClose: h.Zy,
            "aria-label": N.intl.string(N.t["m85s/v"]),
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
              id: "progress-bar-enabled",
              label: N.intl.string(N.t["0CJWPz"]),
              checked: r,
              disabled: o,
              action: p,
            }),
          });
        },
        A = 57,
        P = 57 + T,
        M = { tension: 180, friction: 80 };
      t.ZP = (e) => {
        let { guild: t, withMargin: n } = e,
          { analyticsLocations: r } = (0, f.ZP)(
            p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY,
          ),
          { premiumSubscriberCount: u, id: g } = t,
          x = (0, v.rF)(u, g),
          T = (0, v.FZ)(x, t.id),
          A = null == T,
          P = null != T ? T : x,
          R = (0, c.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getCountForGuild(g)) && void 0 !== e
              ? e
              : 0;
          }),
          w = (0, c.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_GUILD, t));
        l.useEffect(() => {
          R !== u && (0, I.v)(g, u);
        }, [g, R, u]);
        let L = "".concat(Math.min(100, (u / (0, v.vn)(t.id)[P]) * 100), "%"),
          { current: D } = l.useRef(L),
          O = {
            from: { width: R === u ? D : "0%" },
            to: { width: L },
            config: M,
          },
          [k, U] = (0, d.useSpring)(() => O),
          G = () => {
            (0, m.yw)(Z.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
              location: { section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR },
              guild_id: g,
              location_stack: r,
            }),
              (0, E.Z)({
                analyticsLocations: r,
                analyticsSourceLocation: {
                  page: Z.ZY5.GUILD_CHANNEL,
                  section: Z.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                  object: Z.qAy.TOOLTIP,
                },
                guild: t,
                perks: (0, S.VF)(),
                perkIntro: N.intl.string(N.t.ZhvSn5),
              });
          },
          B = N.intl.formatToPlainString(N.t["2oNfMT"], {
            levelName: (0, v.e9)(P),
          }),
          H = N.intl.format(N.t.dhKnYm, {
            numBoosts: u,
            numTotal: (0, v.vn)(t.id)[P],
          });
        A &&
          ((B = (0, v.e9)(P)),
          (H = N.intl.format(N.t.B2byER, { numBoosts: u })));
        let V = (0, s.JA)("boosts-".concat(t.id));
        return (0, i.jsx)("li", {
          children: (0, i.jsx)(d.Tooltip, {
            text: A
              ? N.intl.string(N.t["Y+V9go"])
              : N.intl.formatToPlainString(N.t.UyDKl5, {
                  levelName: (0, v.nW)(P),
                }),
            color: d.Tooltip.Colors.BLACK,
            position: "top",
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
              (0, i.jsxs)(d.Clickable, {
                ...V,
                ...e,
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: G,
                onMouseEnter: () => {
                  var t;
                  null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
                    U(O);
                },
                className: a()(y.container, { [y.containerWithMargin]: n }),
                onContextMenu: (e) => {
                  w && (0, h.vq)(e, (e) => (0, i.jsx)(j, { ...e, guild: t }));
                },
                children: [
                  (0, i.jsx)(d.HiddenVisually, { children: e["aria-label"] }),
                  (0, i.jsxs)("div", {
                    className: y.textArea,
                    children: [
                      (0, i.jsx)("div", {
                        className: y.goalTextContainer,
                        children: (0, i.jsx)(d.Text, {
                          className: y.goalText,
                          color: "interactive-active",
                          variant: "text-xs/bold",
                          children: B,
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: y.progressFraction,
                        children: [
                          (0, i.jsx)(d.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/normal",
                            children: H,
                          }),
                          (0, i.jsx)(_.Z, {
                            className: y.count,
                            height: 16,
                            width: 16,
                            direction: _.Z.Directions.RIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: a()(y.progressBarContainer, {
                      [y.progressBarContainerComplete]: A,
                    }),
                    children: [
                      (0, i.jsx)(o.animated.div, {
                        className: y.progressBar,
                        style: k,
                      }),
                      A
                        ? (0, i.jsx)("span", {
                            "aria-label": N.intl.string(N.t["7iL1q6"]),
                            role: "img",
                            className: y.tadaIcon,
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
        a = n(881052),
        o = n(709054),
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
                      before: o.default.fromTimestamp(new Date().getTime()),
                    };
                  {
                    let t = e[e.length - 1];
                    return { before: l ? t.joinRequestId : t.actionedAt };
                  }
                }
                if (i)
                  return {
                    after: o.default.fromTimestamp(
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
                h(new a.Hx(e).getAnyErrorMessage());
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
        a = n(481060),
        o = n(566840),
        s = n(434479),
        c = n(527379),
        u = n(388032);
      function d(e) {
        let { guild: t, selected: n } = e,
          d = l.useCallback(() => {
            (0, c._X)(t.id);
          }, [t.id]),
          h = (0, o.XL)(t.id, r.z.MEMBERS_LAUNCH_UPSELL);
        return (0, i.jsx)("div", {
          ref: h,
          children: (0, i.jsx)(s.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(a.GroupIcon, {
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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(377171),
        r = n(325767);
      function a(e) {
        let { width: t = 24, height: n = 24, ...a } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(a),
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
        a = n(377171),
        o = n(549631),
        s = n(471568),
        c = n(766075);
      function u(e) {
        return e;
      }
      function d(e) {
        let { locked: t } = e;
        return (0, i.jsx)("div", {
          className: r()(c.iconItem, s.premiumChannelIcon),
          children: (0, i.jsx)(o.Z, {
            className: c.actionIcon,
            color: t ? a.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0,
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
        a = n(430824),
        o = n(496675),
        s = n(981631);
      function c(e, t) {
        return (0, i.e7)(
          [a.Z, r.ZP, o.Z],
          () => {
            let n = a.Z.getGuild(e);
            if (
              o.Z.can(s.Plq.ADMINISTRATOR, n) ||
              o.Z.can(s.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of r.ZP.getChannels(e)[r.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, l.Ob)(n);
                if (o.Z.can(e, n)) return !0;
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
          return a;
        },
      });
      var i = n(724912),
        l = n(518756),
        r = n(554747);
      function a(e) {
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
          return a;
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
      function a(e) {
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
        a,
        o,
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
        E = n(823379),
        S = n(734307),
        Z = n(981631);
      ((r = i || (i = {})).HIDDEN = "hidden"),
        (r.UNREAD = "unread"),
        (r.MENTIONS = "mentions"),
        (r.VOICE_CHANNELS = "voice-channels");
      let N = { mode: "hidden", mentionCount: 0, targetChannelId: null },
        y = { topBar: N, bottomBar: N },
        T = {},
        j = {};
      function A(e) {
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
      function M(e) {
        return (
          !I.ZP.isChannelMuted(e.guild_id, e.id) &&
          (e.isGuildStageVoice()
            ? m.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0
            : b.ZP.getVoiceStatesForChannel(e).length > 0)
        );
      }
      function R(e) {
        var t, n, i;
        let { guildChannels: l } =
            S.Z.getGuildWithoutChangingGuildActionRows(e),
          r = l.getChannels(null !== (t = j[e]) && void 0 !== t ? t : []);
        if (null == r || 0 === r.length) return !1;
        let a = null,
          o = null,
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
            ((A(t.id) || u().some(t.threadIds, A)) && (h = !1),
            (P(t.id) || u().some(t.threadIds, P)) && (d = !1),
            f.includes(t.id) && (p = !0),
            !h && !d && p)
          )
            break;
        }
        let x = 0,
          I = !1,
          b = 0,
          E = !1;
        if (h || d)
          for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (A(t.id) || u().some(t.threadIds, A)) &&
              (null == o && (o = t.id), (I = !0)),
              (P(t.id) || u().some(t.threadIds, P)) &&
                (null == a && (a = t.id),
                (x +=
                  v.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, v.ZP.getMentionCount)));
          }
        if (h || d)
          for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!h && !d) break;
            (A(t.id) || u().some(t.threadIds, A)) &&
              (null == c && (c = t.id), (E = !0)),
              (P(t.id) || u().some(t.threadIds, P)) &&
                (null == s && (s = t.id),
                (b +=
                  v.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, v.ZP.getMentionCount)));
          }
        let Z = null,
          y = null,
          R =
            null !== (i = null == m ? void 0 : m.getChannelRecords()) &&
            void 0 !== i
              ? i
              : [];
        d && b > 0
          ? (Z = { mode: "mentions", mentionCount: b, targetChannelId: s })
          : !p && u().some(R, M)
            ? (Z = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
              })
            : h &&
              E &&
              (Z = { mode: "unread", mentionCount: 0, targetChannelId: c }),
          d && x > 0
            ? (y = { mode: "mentions", mentionCount: x, targetChannelId: a })
            : h &&
              I &&
              (y = { mode: "unread", mentionCount: 0, targetChannelId: o });
        let w =
            null != y &&
            (null == Z || ("mentions" !== Z.mode && "mentions" === y.mode)),
          L = null != Z && ("mentions" === Z.mode || !w);
        return (
          (T[e] = {
            topBar: w && null != y ? y : N,
            bottomBar: L && null != Z ? Z : N,
          }),
          !0
        );
      }
      let w = u().throttle(R, 200);
      function L(e) {
        let { guildId: t } = e,
          n = _.Z.getGuild(t);
        return !!(null != n && n.hasFeature(Z.oNc.COMMUNITY)) && w(t);
      }
      function D(e) {
        let { id: t } = e,
          n = C.Z.getChannel(t);
        if (null == n) return !1;
        let i = _.Z.getGuild(n.guild_id);
        return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && w(n.guild_id);
      }
      function O(e) {
        let { channel: t } = e,
          n = C.Z.getChannel(t.id);
        if (null == n) return !1;
        let i = _.Z.getGuild(t.guild_id);
        return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && w(n.guild_id);
      }
      function k(e) {
        let { channelId: t } = e,
          n = C.Z.getChannel(t);
        if (null == n) return !1;
        let i = _.Z.getGuild(n.guild_id);
        return (
          !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) &&
          x.Z.getGuildId() === n.guild_id &&
          w(n.guild_id)
        );
      }
      function U(e) {
        let { guildId: t } = e;
        return null != t && w(t);
      }
      class G extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, v.ZP, I.ZP, g.Z, b.ZP, x.Z, _.Z);
        }
        getUnreadStateForGuildId(e) {
          var t;
          return null !== (t = T[e]) && void 0 !== t ? t : y;
        }
      }
      (s = "ChannelListUnreadsStore"),
        (o = "displayName") in (a = G)
          ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[o] = s),
        (t.Z = new G(h.Z, {
          UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
              i = _.Z.getGuild(t);
            return (
              !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) &&
              null != n &&
              !u().isEqual(j[t], n) &&
              ((j[t] = n), R(t))
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
                .filter(E.lm)
                .uniq()
                .forEach((e) => {
                  let t = _.Z.getGuild(e);
                  null != t &&
                    t.hasFeature(Z.oNc.COMMUNITY) &&
                    w(e) &&
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
              ) && w(e.guildId)
            );
          },
          RESORT_THREADS: k,
          THREAD_CREATE: O,
          THREAD_DELETE: O,
          THREAD_LIST_SYNC: L,
          THREAD_MEMBER_UPDATE: D,
          THREAD_MEMBERS_UPDATE: D,
          THREAD_UPDATE: O,
          BULK_CLEAR_RECENTS: L,
          CATEGORY_COLLAPSE_ALL: L,
          CATEGORY_EXPAND_ALL: L,
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = x.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n))
              return !1;
            let i = T[n];
            return null != i && "voice-channels" === i.bottomBar.mode && w(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && w(e.guild_id);
          },
          USER_GUILD_SETTINGS_GUILD_UPDATE: U,
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U,
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
        a = n(443063),
        o = n(981631);
      function s(e, t, n) {
        var i, l, o, s, c;
        return {
          hasDivider:
            ((i = e),
            (l = t),
            !(function (e, t) {
              if (t === r.wZ) {
                let t = e.getGuildActionSection().getRows();
                return (
                  (1 === t.length && t[0] === a.z.GUILD_PREMIUM_PROGRESS_BAR) ||
                  e.getGuildActionSection().isEmpty()
                );
              }
              return 0 === e.getSections(!1)[t];
            })(i, (o = n)) &&
              (o === r.wZ ||
                (!!l &&
                  (o === r.p2 ||
                    (o !== r.wd &&
                      (o === i.recentsSectionNumber ||
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
          selectedVoiceChannelId: a,
        } = e;
        return (
          (function (e) {
            let {
              category: t,
              voiceStates: n,
              selectedChannelId: r,
              selectedVoiceChannelId: a,
            } = e;
            return !0 !== i.Z.isCollapsed(t.record.id)
              ? []
              : t.getChannelRecords().filter((e) => {
                  var t;
                  if (!l.Z.can(o.Plq.VIEW_CHANNEL, e)) return !1;
                  let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                  return e.id !== a && e.id !== r && i.length > 0;
                });
          })({
            category: t,
            selectedChannelId: r,
            selectedVoiceChannelId: a,
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
        a = n(241559),
        o = n(563534),
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
          x = (0, i.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
          I = (0, u.Z)(e.id),
          b = (0, s.PE)(e.id),
          E = (0, a.n2)(e.id),
          S = [],
          Z = e.hasFeature(g.oNc.HUB),
          N = e.hasFeature(g.oNc.COMMUNITY),
          y = (0, m.lN)(!(0, p.r1)(e.id)),
          T = e.hasFeature(
            g.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY,
          );
        return (
          Z && S.push(f.z.GUILD_HUB_HEADER_OPTIONS),
          !b && v && I && null != x && x.length > 0
            ? S.push(f.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled &&
              S.push(f.z.GUILD_PREMIUM_PROGRESS_BAR),
          !Z && v && S.push(f.z.GUILD_HOME),
          t && S.push(f.z.GUILD_SCHEDULED_EVENTS),
          !Z && N && y && S.push(f.z.CHANNELS_AND_ROLES),
          C && S.push(f.z.GUILD_ROLE_SUBSCRIPTIONS),
          _ && S.push(f.z.GUILD_SHOP),
          n && S.push(f.z.GUILD_MEMBER_APPLICATIONS),
          E && (N || T) && S.push(f.z.GUILD_MOD_DASH_MEMBER_SAFETY),
          S
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
        let { channel: t, locked: n, video: r, selected: a } = e;
        return (
          (function (e) {
            let {
                channel: t,
                video: n,
                considerMaxStageVoiceUserLimit: r = !0,
              } = e,
              { limit: a } = (0, i.Z)(t),
              o = -1;
            return (t.userLimit > 0 && (o = t.userLimit),
            n && a > 0 && (o = o > 0 ? Math.min(o, a) : a),
            r && o === l.xGv)
              ? 0
              : o;
          })({ channel: t, video: r }) > 0 &&
          !n &&
          !a
        );
      }
    },
    109446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n.n(r),
        o = n(442837),
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
        b = n(491372);
      function E(e) {
        let { channel: t } = e,
          r = (0, o.Wu)([d.Z, f.ZP, m.Z], () => {
            let e = d.Z.getActiveJoinedRelevantThreadsForParent(
              t.guild_id,
              t.id,
            );
            return a()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
              .values()
              .map((e) => e.channel)
              .concat(
                a().values(
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
                .map((e) => (0, i.jsx)(S, { thread: e }, e.id))
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
      function S(e) {
        let { thread: t } = e,
          n = (0, o.e7)([g.default], () => g.default.getUser(t.ownerId)),
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
        a = n(91192),
        o = n(589440),
        s = n(481060),
        c = n(858996),
        u = n(766075),
        d = n(109659);
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
          v = (0, a.JA)(n),
          x = null !== (t = (0, o.q)(m)) && void 0 !== t ? t : "";
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
          return N;
        },
        Qo: function () {
          return y;
        },
        kw: function () {
          return j;
        },
        rj: function () {
          return T;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(91192),
        s = n(442837),
        c = n(481060),
        u = n(211739),
        d = n(239091),
        h = n(146773),
        p = n(82295),
        m = n(111028),
        f = n(680089),
        g = n(430824),
        C = n(496675),
        _ = n(9156),
        v = n(203818),
        x = n(438144),
        I = n(981631),
        b = n(388032),
        E = n(747834);
      function S(e) {
        e.stopPropagation();
      }
      let Z = l.memo(function (e) {
        let t,
          {
            channel: r,
            connectChannelDragSource: h,
            connectChannelDropTarget: v,
            disableManageChannels: x,
            position: Z,
            sortingPosition: N,
            hideIcon: y,
            children: T,
          } = e,
          j = (0, s.e7)([_.ZP], () =>
            _.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          A = (0, s.e7)([f.Z], () => f.Z.isCollapsed(r.id)),
          P = (0, s.e7)([C.Z], () => C.Z.can(I.Plq.MANAGE_CHANNELS, r));
        t =
          null != N
            ? Z > N
              ? E.containerDragAfter
              : E.containerDragBefore
            : E.containerDefault;
        let M = l.useCallback(() => {
            A ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
          }, [r.id, A]),
          R = l.useCallback(
            (e) => {
              if ("null" !== r.id) {
                let t = g.Z.getGuild(r.getGuildId());
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
          w = l.useCallback(() => {
            let e = r.type === I.d4z.GUILD_CATEGORY ? null : r.type,
              t = r.getGuildId();
            null != t &&
              (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  n.e("45094"),
                  n.e("66889"),
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
          { role: L, tabIndex: D, ...O } = (0, o.JA)(r.id),
          k = l.useRef(null),
          U = l.useRef(null),
          G = (0, i.jsxs)("li", {
            className: t,
            "data-dnd-name": r.name,
            children: [
              (0, i.jsx)(c.FocusRing, {
                focusTarget: k,
                ringTarget: U,
                offset: { left: 4, right: 4 },
                children: (0, i.jsxs)("div", {
                  ref: U,
                  className: a()(E.iconVisibility, E.wrapper, {
                    [E.collapsed]: A,
                    [E.muted]: j,
                    [E.clickable]: !0,
                  }),
                  onContextMenu: R,
                  children: [
                    (0, i.jsxs)(c.Clickable, {
                      innerRef: k,
                      className: E.mainContent,
                      tabIndex: D,
                      ...O,
                      onClick: M,
                      "aria-label": b.intl.formatToPlainString(b.t.y5l3Jy, {
                        categoryName: r.name,
                      }),
                      "aria-expanded": !A,
                      focusProps: { enabled: !1 },
                      children: [
                        y
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
                      ],
                    }),
                    (0, i.jsx)("div", {
                      onClick: S,
                      className: E.children,
                      children:
                        P && !x
                          ? (0, i.jsx)(c.Tooltip, {
                              text: b.intl.string(b.t["fUYU+v"]),
                              children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Button, {
                                  "aria-label": b.intl.string(b.t["fUYU+v"]),
                                  look: c.Button.Looks.BLANK,
                                  size: c.Button.Sizes.NONE,
                                  className: a()(E.addButton, E.forceVisible),
                                  onClick: w,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  tabIndex: D,
                                  focusProps: {
                                    offset: {
                                      top: -3,
                                      right: -4,
                                      bottom: -3,
                                      left: -4,
                                    },
                                  },
                                  children: (0, i.jsx)(c.PlusSmallIcon, {
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
              T,
            ],
          });
        return null != v && null != h ? v(h(G)) : G;
      });
      t.ZP = (0, h.B)(Z);
      let N = l.memo(function (e) {
          let { name: t, onDismiss: n, className: l } = e;
          return (0, i.jsx)("li", {
            className: a()(l, E.containerDefault),
            children: (0, i.jsxs)("div", {
              className: a()(E.iconVisibility, E.wrapperStatic),
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
                      text: b.intl.string(b.t["5qNmsb"]),
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
        y = l.memo(function (e) {
          let { category: t } = e,
            n = (0, s.e7)([v.Z], () =>
              v.Z.isVoiceCategoryCollapsed(t.guild.id),
            ),
            r = l.useCallback(() => {
              n ? (0, x.s)(t.guild.id) : (0, x.M)(t.guild.id);
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
                    children: b.intl.string(b.t["/eB9Bg"]),
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
                    children: b.intl.string(b.t.Q2gPWl),
                  }),
                ],
              });
        }),
        T = l.memo(function (e) {
          let { category: t, channel: n } = e,
            l = (0, s.e7)([v.Z], () =>
              v.Z.isVoiceCategoryCollapsed(t.guild.id),
            );
          return l || null == n || n.record.type === I.d4z.GUILD_CATEGORY
            ? l
              ? (0, i.jsx)("li", {
                  className: a()(E.containerDefault),
                  children: (0, i.jsx)("div", {
                    className: a()(E.iconVisibility, E.wrapperStatic),
                    children: (0, i.jsx)(p.Z, {
                      className: E.name,
                      children: (0, i.jsx)(m.Z, {
                        children: b.intl.string(b.t["V/u9Dw"]),
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
            className: a()(E.containerDefault),
            children: (0, i.jsx)("div", {
              className: a()(E.iconVisibility, E.wrapperStatic),
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
        a = n.n(r),
        o = n(442837),
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
        v = n(668930);
      let x = d.u.SIZE_24;
      function I(e) {
        var t, n;
        let { activity: r, user: a, embeddedApp: o, onOpenSpotifyAlbum: u } = e,
          d = null == r ? void 0 : r.assets,
          h = null == r ? void 0 : r.application_id;
        if (
          null == r ||
          null == d ||
          (null == d.large_image && null == d.small_image)
        )
          return null != o
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
              })(o)
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
                u(r, a.id);
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
          a = null == t ? void 0 : t.name,
          o = a;
        if (null != n) o = n.application.name;
        else {
          if (
            !(null != t && (0, c.Z)(t)) ||
            null == t.sync_id ||
            null == r ||
            null == l
          )
            return null;
          (a = r),
            (o = (0, i.jsx)(s.Clickable, {
              className: v.headerLink,
              onClick: () => {
                l(t);
              },
              children: r,
            }));
        }
        return (0, i.jsx)(h.Z, { title: a, className: v.header, children: o });
      }
      function E(e) {
        let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
          r = null == t ? void 0 : t.details,
          o = null == t ? void 0 : t.state,
          s = r;
        return (null != t &&
          (0, c.Z)(t) &&
          null != o &&
          (s = [
            (0, i.jsx)(
              p.Z,
              {
                artists: o,
                linkClassName: v.bodyLink,
                canOpen: null != t.sync_id,
                onOpenSpotifyArtist: (e) => {
                  null == l || l(t, n.id, e);
                },
              },
              o,
            ),
          ]),
        null == s || "" === s)
          ? null
          : (0, i.jsx)("div", {
              className: a()(
                v.ellipsisRow,
                v.colorHeaderSecondary,
                v.bodyTextSize,
              ),
              children: s,
            });
      }
      function S(e) {
        let { activity: t } = e,
          n = null == t ? void 0 : t.state;
        return null == n || "" === n || (0, c.Z)(t)
          ? null
          : (0, i.jsx)("div", {
              className: a()(
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
            channel: a,
            sortedVoiceStates: u,
            onOpenSpotifyTrack: h,
            onOpenSpotifyArtist: p,
            onOpenSpotifyAlbum: f,
          } = e,
          g = [];
        null != n
          ? (g = Array.from(n.embeddedActivity.userIds))
          : (0, c.Z)(t) && null != u && (g = u.map((e) => e.user.id));
        let N = (0, o.Wu)([m.default], () =>
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
                        (0, i.jsx)(E, {
                          activity: t,
                          user: r,
                          onOpenSpotifyArtist: p,
                        }),
                        (0, i.jsx)(S, { activity: t }),
                        g.length > 0 &&
                          (0, i.jsx)(d.Z, {
                            className: v.usersSummary,
                            guildId: a.guild_id,
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
                                      src: e.getAvatarURL(a.guild_id, x),
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
        a = n(442837),
        o = n(481060),
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
        v = n(790707);
      function x(e) {
        let { guildId: t, member: n, className: l } = e,
          a = null != n.member ? (0, g.CA)(n.member) : null;
        return (0, i.jsx)(o.Tooltip, {
          text: n.nick,
          position: "bottom",
          children: (e) => {
            var s;
            return (0, i.jsx)(o.Avatar, {
              src: null != a ? a : n.user.getAvatarURL(t, 16),
              size: o.AvatarSizes.SIZE_16,
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
            onAction: o,
          } = e,
          h = null != r,
          g = h ? Array.from(r.embeddedActivity.userIds) : [],
          C = (0, a.e7)([f.default, m.default], () => {
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
                onAction: o,
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
          return w;
        },
        eP: function () {
          return P;
        },
        hR: function () {
          return A;
        },
        jo: function () {
          return j;
        },
      });
      var i,
        l,
        r,
        a,
        o = n(200651),
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
        E = n(914010),
        S = n(281029),
        Z = n(981631),
        N = n(388032),
        y = n(766075);
      function T(e, t, n) {
        return null != t && !!t && !(0, S.ig)(n, e.type);
      }
      function j(e, t) {
        return null == t
          ? y.containerDefault
          : e > t
            ? y.containerDragAfter
            : y.containerDragBefore;
      }
      function A(e) {
        let {
          channel: t,
          disableManageChannels: n,
          tabIndex: i,
          forceShowButtons: l,
          hasChannelInfo: r = !1,
        } = e;
        if (
          (0, d.e7)(
            [b.Z, E.Z],
            () =>
              n ||
              E.Z.getGuildId() === Z.I_8 ||
              (!b.Z.can(Z.Plq.MANAGE_CHANNELS, t) &&
                !b.Z.can(Z.Plq.MANAGE_ROLES, t) &&
                !b.Z.can(Z.Plq.MANAGE_WEBHOOKS, t)) ||
              ((0, v.r8)(t.type) && !b.Z.can(Z.Plq.VIEW_CHANNEL, t)) ||
              (t.isGuildVocal() && !b.Z.can(Z.Plq.CONNECT, t)) ||
              !v.dF.has(t.type),
          )
        )
          return null;
        function a() {
          p.ZP.open(t.id);
        }
        return (0, o.jsx)(h.Tooltip, {
          text: N.intl.string(N.t["3gUsJS"]),
          children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: s, onBlur: c } = e;
            return (0, o.jsx)(h.Clickable, {
              className: u()(
                y.iconItem,
                l ? y.alwaysShown : void 0,
                r ? y.iconWithChannelInfo : y.iconNoChannelInfo,
              ),
              onClick: a,
              tabIndex: i,
              "aria-label": N.intl.string(N.t["3gUsJS"]),
              onMouseEnter: t,
              onMouseLeave: n,
              onFocus: s,
              onBlur: c,
              children: (0, o.jsx)(h.SettingsIcon, {
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
            forceShowButtons: a,
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
          E = (0, d.e7)([b.Z], () =>
            b.Z.can(Z.Plq.CREATE_INSTANT_INVITE, t)
              ? N.intl.string(N.t.zJrgTE)
              : N.intl.string(N.t.Sd8Ix8),
          );
        if (l || !v) return null;
        function S() {
          if (null != c) {
            let e = x.Z.getAllActiveStreams().filter(
              (e) => e.state !== Z.jm8.ENDED && e.channelId === t.id,
            );
            (0, h.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                n.e("7654"),
                n.e("19821"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, o.jsx)(i, {
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
        let T = (0, o.jsx)(h.GroupPlusIcon, {
          size: "xs",
          className: y.actionIcon,
          "aria-hidden": !0,
        });
        return (
          i &&
            (T = (0, o.jsx)(_.Z, {
              tutorialId: "instant-invite",
              position: "left",
              children: (0, o.jsx)("div", { children: T }),
            })),
          (0, o.jsx)(h.Tooltip, {
            text: E,
            children: (e) =>
              (0, o.jsx)(h.Clickable, {
                className: u()(
                  y.iconItem,
                  a ? y.alwaysShown : void 0,
                  s ? y.iconWithChannelInfo : y.iconNoChannelInfo,
                ),
                ...e,
                onClick: S,
                tabIndex: r,
                "aria-label": E,
                children: T,
              }),
          })
        );
      }
      function M(e) {
        let { channel: t } = e,
          n = () => {
            (0, g._U)(t.guild_id, t.id);
          };
        return (0, o.jsx)(h.Tooltip, {
          text: N.intl.string(N.t.ROh4T0),
          children: (e) =>
            (0, o.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": N.intl.string(N.t.ROh4T0),
              children: (0, o.jsx)(h.XSmallIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            }),
        });
      }
      function R(e) {
        let { channel: t } = e,
          n = () => {
            (0, g.dM)(t.guild_id, t.id, !0, { section: Z.jXE.CHANNEL_LIST });
          };
        return (0, o.jsx)(h.Tooltip, {
          text: N.intl.string(N.t["N2c/Ul"]),
          children: (e) =>
            (0, o.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": N.intl.string(N.t["N2c/Ul"]),
              children: (0, o.jsx)(h.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            }),
        });
      }
      class w extends (a = s.PureComponent) {
        renderEditButton() {
          return (0, o.jsx)(A, { ...this.props });
        }
        renderInviteButton() {
          return (0, o.jsx)(P, { ...this.props });
        }
        renderRemoveSuggestionButton() {
          return (0, o.jsx)(M, { ...this.props });
        }
        renderAcceptSuggestionButton() {
          return (0, o.jsx)(R, { ...this.props });
        }
        getClassName() {
          let { position: e, sortingPosition: t } = this.props;
          return j(e, t);
        }
        isDisabled() {
          let { channel: e, sorting: t, sortingType: n } = this.props;
          return T(e, t, n);
        }
      }
      (r = { isDefaultChannel: !1 }),
        (l = "defaultProps") in (i = w)
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
        a = n(481060),
        o = n(619915),
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
        E = n(981631),
        S = n(490897),
        Z = n(388032),
        N = n(360110);
      function y(e) {
        var t;
        let {
            channel: n,
            isChannelSelected: y,
            isChannelCollapsed: T,
            voiceStates: j,
            enableConnectedUserLimit: A,
            enableActivities: P,
            isSubscriptionGated: M,
            needSubscriptionToAccess: R,
            isNewChannel: w,
            muted: L,
            resolvedUnreadSetting: D,
          } = e,
          O = (0, l.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
          k = (0, o.ZP)(n),
          U = (0, l.e7)([p.Z], () => !p.Z.can(E.Plq.CONNECT, n)),
          G = (0, l.e7)([f.Z], () => f.Z.hasVideo(n.id)),
          B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
          H = (0, v.ZP)({ channel: n, locked: U, video: G || B, selected: y }),
          V = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
          F = (0, s.n2)(n.guild_id, n.id),
          W = (0, l.e7)([h.Z], () => {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e
                    ? void 0
                    : e.hasFeature(E.oNc.COMMUNITY)) &&
              void 0 !== t &&
              t
            );
          });
        if ((0, _.Z)(O)) return (0, i.jsx)(b.Z, { mentionsCount: O });
        if ((0, c.O)(M)) return (0, i.jsx)(c.Z, { locked: R });
        if (w)
          return (0, i.jsx)(a.TextBadge, {
            text: Z.intl.string(Z.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: N.newChannel,
          });
        if (
          !L &&
          D === S.i.ALL_MESSAGES &&
          n.isForumLikeChannel() &&
          null != V &&
          V > 0
        )
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: Z.intl.format(Z.t.GkAbqa, {
              count: (0, a.getBadgeCountString)(V),
            }),
          });
        if (!L && n.isForumLikeChannel() && null != F && F > 0)
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, a.getBadgeCountString)(F),
          });
        let z =
          null !== (t = null == j ? void 0 : j.length) && void 0 !== t ? t : 0;
        return null != A && A && H
          ? (0, i.jsx)(I.Z, { userCount: z, video: G || B, channel: n })
          : T && (0, g.a)(j) && W
            ? (0, i.jsx)(a.TextBadge, {
                text: Z.intl.string(Z.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css,
              })
            : null != P && P && (0, C.u)(k)
              ? (0, i.jsx)(x.Z, { embeddedApps: k, muted: L })
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
        a = n(481060),
        o = n(925329),
        s = n(841607);
      function c(e) {
        let { className: t, embeddedApps: n, muted: l } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: r()(s.container, t, l && s.modeMuted),
            children: (0, i.jsx)(o.Z, {
              game: n[0].application,
              className: s.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: r()(s.container, t, l && s.modeMuted),
            children: [
              (0, i.jsx)(o.Z, {
                game: n[0].application,
                className: s.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(o.Z, {
                    game: n[1].application,
                    className: s.icon20px,
                  })
                : (0, i.jsx)(a.Text, {
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
          return ed;
        },
        j: function () {
          return eu;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l = n(200651),
        r = n(192379),
        a = n(392711),
        o = n.n(a),
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
        v = n(362658),
        x = n(583962),
        I = n(915885),
        b = n(258871),
        E = n(216306),
        S = n(398758),
        Z = n(220444),
        N = n(31022),
        y = n(10401),
        T = n(131704),
        j = n(592125),
        A = n(796974),
        P = n(984933),
        M = n(914010),
        R = n(540126),
        w = n(734307),
        L = n(854444),
        D = n(761091),
        O = n(301342),
        k = n(906817),
        U = n(429122),
        G = n(285573),
        B = n(995993),
        H = n(910595),
        V = n(466935),
        F = n(120818),
        W = n(61642),
        z = n(848442),
        Y = n(53425),
        K = n(424785),
        q = n(770202),
        Q = n(79556),
        J = n(428127),
        X = n(950969),
        $ = n(233657),
        ee = n(831700),
        et = n(443063),
        en = n(327530),
        ei = n(981631),
        el = n(176505),
        er = n(388032),
        ea = n(573726);
      function eo(e, t, n) {
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
      class es extends (i = r.PureComponent) {
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
            { scrollTop: a } = A.Z.getGuildDimensions(i);
          null != n
            ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != a && this.scrollTo(a)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  r &&
                  (null == a && null != l
                    ? this.scrollToChannel(l, !1, en.yE, this.handleListScroll)
                    : this.scrollTo(null != a ? a : 0, this.handleListScroll)),
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
                : en.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
          if (null != r && null != l) {
            if (null != r.threadOffset) {
              let [e] = l.getScrollPosition(r.section, r.row),
                a = r.threadOffset * en.Vf;
              l.scrollIntoViewRect({
                start: e + a,
                end: e + a + en.Vf,
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
              if (i < R.wd || e.isPlaceholderRow(i, l)) return !1;
              let r = e.getChannelFromSectionRow(i, l);
              if (null == r) return !1;
              let { channel: a, category: o } = r;
              return (
                !!(0, T.vc)(a.record.type) &&
                (!o.isCollapsed || !o.isMuted) &&
                !a.isMuted &&
                !!t.isItemVisible(i, l, !0) &&
                (0, Z.d)(a.record)
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
              guildChannels: a,
              guildChannelsVersion: o,
            } = this.props;
          return (0, l.jsx)("div", {
            className: ea.positionedContainer,
            children: (0, l.jsx)(X.Z, {
              ref: this.unreadTopRef,
              textUnread: er.intl.string(er.t.FCRiT0),
              textMention: er.intl.string(er.t["8zH0LC"]),
              hide: null == e && (i || null != t || null != n),
              className: ea.unreadTop,
              barClassName: ea.unreadBar,
              guildId: r,
              guildChannels: a,
              guildChannelsVersion: o,
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
          return (0, l.jsx)(X.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.intl.string(er.t.FCRiT0),
            textMention: er.intl.string(er.t["8zH0LC"]),
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
              isRefreshEnabled: r = !1,
            } = this.props,
            { ref: a, ...o } = this.context,
            s = 0;
          return (
            null != n
              ? (s = r ? en.hl : en.Q0)
              : t.hasCommunityInfoSubheader() && !i && (s = en.JD),
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
                    paddingTop: s,
                    paddingBottom: en.$k,
                    renderSection: this.renderSection,
                    renderFooter: this.renderSectionFooter,
                    renderRow: this.renderRow,
                    onScroll: this.handleListScroll,
                    onResize: this.handleResize,
                    onContentResize: this.handleResize,
                    sections: e.getSections(!0),
                    innerAriaLabel: er.intl.string(er.t.OGiMXF),
                    innerTag: "ul",
                    getAnchorId: this.getAnchorId,
                    ...o,
                    ...t,
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
                      children: er.intl.string(er.t.OGiMXF),
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
            eo(this, "_list", null),
            eo(this, "unreadTopRef", r.createRef()),
            eo(this, "unreadBottomRef", r.createRef()),
            eo(this, "state", {
              initialized: !1,
              isUnreadVisible: !0,
              topUnread: null,
              topMention: null,
              bottomUnread: null,
              bottomMention: null,
            }),
            eo(this, "setListRef", (e) => {
              var t;
              let { ref: n } = this.context;
              (n.current =
                null !== (t = null == e ? void 0 : e.getScrollerNode()) &&
                void 0 !== t
                  ? t
                  : null),
                (this._list = e);
            }),
            eo(this, "jumpToVoiceChannels", () => {
              var e, t, n, i;
              let { guildChannels: l, voiceStates: r } = this.props,
                a = 0,
                o =
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
              for (let e = 0; e < o.length - 1; e++)
                if (
                  (null !== (i = r[o[e]]) && void 0 !== i ? i : []).length > 0
                ) {
                  a = e + 1;
                  break;
                }
              null === (t = this._list) ||
                void 0 === t ||
                t.scrollToIndex({
                  section: l.voiceChannelsSectionNumber,
                  row: a,
                  animate: !0,
                  padding: en.yE,
                });
            }),
            eo(this, "jumpToChannel", (e) =>
              this.scrollToChannel(e, !0, en.Q1),
            ),
            eo(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
              let [n, i] = t;
              return this.scrollToChannel(
                e,
                !0,
                null != n && null != i ? en.Q1 : en.yE,
              );
            }),
            eo(this, "isChannelVisible", (e, t) => {
              let n = this.getSectionRowsFromChannel(e),
                i = this._list;
              if (null == i) return !1;
              for (let { row: e, section: l } of n) {
                let [n, r] = i.getScrollPosition(l, e),
                  a = i.getScrollerState();
                if (t && n + r < a.scrollTop + a.offsetHeight) return !0;
                if (!t && n > a.scrollTop) return !0;
              }
              return !1;
            }),
            eo(this, "getVisibleChannels", () => {
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
                    [l, a] = e.getScrollPosition(r.section, r.row);
                  null != t &&
                    l + a < n.scrollTop + n.offsetHeight &&
                    l > n.scrollTop &&
                    i.push(t.channel.id);
                }
              }
              return i;
            }),
            eo(this, "handleResize", () => {
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
            eo(this, "handleListScroll", () => {
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
            eo(this, "handleUnreadCalculate", (e, t, n) => {
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
            eo(
              this,
              "updateChannelListScroll",
              o().throttle((e) => {
                h.Z.updateChannelListScroll(
                  this.props.guildId,
                  e,
                  this.getVisibleChannels(),
                );
              }, 100),
            ),
            eo(this, "getSectionHeight", (e) => {
              let { guild: t, guildChannels: n } = this.props;
              return (0, k.EM)(e, t, n);
            }),
            eo(this, "getSectionFooterHeight", (e) => {
              let {
                guildChannels: t,
                voiceStates: n,
                selectedVoiceChannelId: i,
                selectedChannelId: l,
                optInEnabled: r,
                guildChannelsVersion: a,
              } = this.props;
              return (0, U.dt)({
                sectionIndex: e,
                guildChannels: t,
                guildChannelsVersion: a,
                voiceStates: n,
                selectedChannelId: l,
                selectedVoiceChannelId: i,
                optInEnabled: r,
              });
            }),
            eo(this, "getRowHeight", (e, t) => {
              let {
                  guildChannels: n,
                  voiceStates: i,
                  stageChannelSpeakerVoiceStates: l,
                  selectedVoiceChannelId: r,
                  selectedGuildId: a,
                } = this.props,
                o = en.Vf;
              if (e === R.wZ) {
                let e = n.getGuildActionSection();
                return e.isEmpty()
                  ? 0
                  : e.getRow(t) === et.z.GUILD_PREMIUM_PROGRESS_BAR
                    ? e.getRows().length > 1
                      ? x.aR
                      : x.PD
                    : o;
              }
              if (n.isPlaceholderRow(e, t)) return 0;
              let s = n.getChannelFromSectionRow(e, t);
              if (null == s) return 0;
              let { channel: c, category: u } = s;
              if (c.record.type === ei.d4z.GUILD_CATEGORY) return 40;
              let { isFavoritesPerk: d } = v.Z.getCurrentConfig(
                { location: "channel_list" },
                { autoTrackExposure: !0 },
              );
              for (let e of (d &&
                a === ei.I_8 &&
                !c.record.isDM() &&
                !c.record.isGroupDM() &&
                !c.record.isGuildStageVoice() &&
                (o = en.GQ),
              c.threadIds)) {
                o += en.Vf;
                let t = i[c.id];
                null != t &&
                  t.length > 0 &&
                  (o += (r === e ? t.length * en.Hb : en.Hb) + en.cx);
              }
              if (c.record.isGuildVoice()) {
                let e = i[c.id];
                if (null != e && e.length > 0) {
                  let t = e.length * en.Hb;
                  (c.isCollapsed || u.isCollapsed) && (t = en.Hb),
                    (o += t + en.cx);
                }
                c.id === this.props.rtcConnectedChannelId &&
                  (o += this.props.rtcDesyncedVoiceStatesCount * en.Hb);
              }
              if (
                (null != c.subtitle && (o += en.NY),
                c.record.isGuildStageVoice())
              ) {
                var h, p;
                let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                  t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                if (null != e && e.length > 0) {
                  let e = t.length * en.Hb;
                  c.isCollapsed || u.isCollapsed
                    ? (e = Math.ceil(e / en.VE))
                    : (e += en.Hb),
                    (o += e + en.cx);
                }
              }
              return o;
            }),
            eo(this, "dismissRecents", () => {
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
            eo(this, "renderSection", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  guild: r,
                  selectedChannelId: a,
                  disableManageChannels: o,
                } = this.props;
              return (0, l.jsx)(
                k.ZP,
                {
                  sectionIndex: t,
                  guild: r,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  selectedChannelId: a,
                  disableManageChannels: o,
                },
                (0, k.WW)(t, n),
              );
            }),
            eo(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                {
                  guild: i,
                  selectedChannel: a,
                  selectedChannelId: o,
                  selectedVoiceChannel: s,
                  selectedVoiceChannelId: c,
                  guildChannels: u,
                  voiceStates: d,
                  disableManageChannels: h,
                  stageChannelSpeakerVoiceStates: p,
                  optInEnabled: m,
                  withGuildIcon: f,
                  isRefreshEnabled: g,
                } = this.props;
              if (t === R.wZ) {
                let e = u.getGuildActionSection(),
                  t = e.getRow(n);
                if (null == t) return null;
                switch (t) {
                  case et.z.GUILD_HUB_HEADER_OPTIONS:
                    return (0, l.jsx)(
                      b.Z,
                      { guild: i, channel: P.ZP.getDefaultChannel(i.id) },
                      et.z.GUILD_HUB_HEADER_OPTIONS,
                    );
                  case et.z.GUILD_PREMIUM_PROGRESS_BAR:
                    let r = e.getRows();
                    return (0, l.jsx)(
                      x.ZP,
                      { guild: i, withMargin: r.length > 1 },
                      et.z.GUILD_PREMIUM_PROGRESS_BAR,
                    );
                  case et.z.GUILD_HOME:
                    return (0, l.jsx)(
                      H.Z,
                      { guild: i, selected: o === el.oC.GUILD_HOME },
                      et.z.GUILD_HOME,
                    );
                  case et.z.GUILD_SCHEDULED_EVENTS:
                    if (g) return null;
                    return (0, l.jsx)(
                      $.Z,
                      { guild: i, selected: o === et.z.GUILD_SCHEDULED_EVENTS },
                      et.z.GUILD_SCHEDULED_EVENTS,
                    );
                  case et.z.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, l.jsx)(
                      W.Z,
                      { guild: i, selected: o === el.oC.ROLE_SUBSCRIPTIONS },
                      et.z.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                  case et.z.GUILD_SHOP:
                    return (0, l.jsx)(
                      z.Z,
                      { guild: i, selected: o === el.oC.GUILD_SHOP },
                      et.z.GUILD_SHOP,
                    );
                  case et.z.GUILD_MEMBER_APPLICATIONS:
                    return (0, l.jsx)(
                      V.Z,
                      { guild: i, selected: o === el.oC.MEMBER_APPLICATIONS },
                      et.z.GUILD_MEMBER_APPLICATIONS,
                    );
                  case et.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, l.jsx)(F.T, { guild: i });
                  case et.z.CHANNELS_AND_ROLES:
                    if (g) return null;
                    return (0, l.jsx)(
                      B.m,
                      {
                        guild: i,
                        selected:
                          o === el.oC.CHANNEL_BROWSER ||
                          o === el.oC.CUSTOMIZE_COMMUNITY,
                      },
                      et.z.CHANNELS_AND_ROLES,
                    );
                  case et.z.GUILD_DIRECTORY:
                    return (0, l.jsx)(
                      G.Z,
                      {
                        guild: i,
                        selectedChannelId: o,
                        disableManageChannels: h,
                      },
                      et.z.GUILD_DIRECTORY,
                    );
                  case et.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                    if (g) return null;
                    return (0, l.jsx)(
                      I.Z,
                      { guild: i, selected: o === el.oC.MEMBER_SAFETY },
                      et.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                  default:
                    return null;
                }
              }
              if (u.isPlaceholderRow(t, n)) return null;
              let C = u.getChannelFromSectionRow(t, n);
              if (null == C) return null;
              let { category: _, channel: v } = C,
                E = _ instanceof R.VR,
                S = v.record,
                Z = "".concat(t).concat(v.id);
              switch (S.type) {
                case ei.d4z.GUILD_ANNOUNCEMENT:
                case ei.d4z.GUILD_TEXT:
                case ei.d4z.GUILD_FORUM:
                case ei.d4z.GUILD_MEDIA:
                case ei.d4z.DM:
                case ei.d4z.GROUP_DM:
                  return (0, l.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        (0, l.jsx)(Q.Z, {
                          channel: S,
                          guild: i,
                          position: v.position,
                          selected: o === v.id,
                          muted: v.isMuted,
                          subtitle: v.subtitle,
                          disableManageChannels: h,
                          canBeNewChannel: m && t === u.recentsSectionNumber,
                          isFavoriteCategory: E,
                          withGuildIcon: f,
                        }),
                        v.threadCount > 0
                          ? (0, l.jsx)(Y.Z, {
                              withGuildIcon: f,
                              channel: S,
                              sortedThreadIds: v.threadIds,
                              selectedChannel:
                                null != a &&
                                (a.id === v.id || a.parent_id === S.id)
                                  ? a
                                  : null,
                              selectedVoiceChannelId:
                                (null == s ? void 0 : s.parent_id) === S.id
                                  ? c
                                  : null,
                            })
                          : null,
                      ],
                    },
                    Z,
                  );
                case ei.d4z.GUILD_STAGE_VOICE:
                  var N, y;
                  return (0, l.jsx)(
                    K.Z,
                    {
                      channel: S,
                      guild: i,
                      position: v.position,
                      selected: o === v.id,
                      connected: c === v.id,
                      collapsed: v.isCollapsed || _.isCollapsed,
                      voiceStates:
                        null !== (N = d[v.id]) && void 0 !== N ? N : [],
                      speakerVoiceStates:
                        null !== (y = p[v.id]) && void 0 !== y ? y : [],
                      disableManageChannels: h,
                      isFavoriteCategory: E,
                    },
                    Z,
                  );
                case ei.d4z.GUILD_VOICE:
                  return (0, l.jsx)(
                    ee.Z,
                    {
                      channel: S,
                      guild: i,
                      position: v.position,
                      selected: o === v.id,
                      connected: c === v.id,
                      collapsed: v.isCollapsed || _.isCollapsed,
                      voiceStates: d[v.id],
                      subtitle: v.subtitle,
                      disableManageChannels: h,
                      showTutorial: v.isFirstVoiceChannel,
                      isFavoriteCategory: E,
                      withGuildIcon: f,
                    },
                    Z,
                  );
                case ei.d4z.GUILD_STORE:
                  return (0, l.jsx)(
                    q.Z,
                    {
                      channel: S,
                      guild: i,
                      position: v.position,
                      selected: o === v.id,
                    },
                    Z,
                  );
                case ei.d4z.GUILD_CATEGORY:
                  if (t !== u.voiceChannelsSectionNumber) return null;
                  return (0, l.jsx)(
                    O.kw,
                    { channel: S },
                    "readonly-".concat(S.id),
                  );
                case ei.d4z.PUBLIC_THREAD:
                case ei.d4z.PRIVATE_THREAD:
                  return (0, l.jsx)(
                    Q.Z,
                    {
                      channel: S,
                      guild: i,
                      position: v.position,
                      selected: o === v.id,
                      muted: v.isMuted,
                      subtitle: v.subtitle,
                      disableManageChannels: h,
                      canBeNewChannel: !1,
                      isFavoriteCategory: !1,
                      forceTopLevelThread: !0,
                    },
                    Z,
                  );
                default:
                  return null;
              }
            }),
            eo(this, "renderSectionFooter", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  voiceStates: r,
                  selectedChannelId: a,
                  selectedVoiceChannelId: o,
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
                  selectedChannelId: a,
                  selectedVoiceChannelId: o,
                  optInEnabled: s,
                },
                (0, U.eo)(t, n, s),
              );
            }),
            eo(this, "getAnchorId", (e, t) => {
              var n, i, l;
              let { guildChannels: r } = this.props;
              if (e !== R.wZ) {
                if (null == t)
                  return e === R.p2
                    ? "favorites-header"
                    : e === r.recentsSectionNumber
                      ? "recents-header"
                      : e === r.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === R.wd
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
            eo(this, "testShouldSkipTutorial", () => {
              if (!y.Z.shouldShow("voice-conversations")) return;
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
      eo(es, "contextType", s.qB);
      let ec = (e) => {
        let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
          a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          { analyticsLocations: o } = (0, C.ZP)(g.Z.GUILD_CHANNEL_LIST),
          d = (0, u.e7)([j.Z], () => j.Z.getChannel(n)),
          h = (0, u.e7)([j.Z], () => j.Z.getChannel(i)),
          p = (0, u.e7)([M.Z], () => M.Z.getGuildId()),
          _ = (0, S.DM)(t),
          v = r.useRef(null),
          x = r.useCallback((e, t) => {
            let n = v.current;
            if (null != n) {
              if (ei.Xyh.test(t) || (0, el.AB)(t))
                n.scrollToChannel(t, !1, 2 * en.yE, () => {
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
          I = r.useCallback(
            () =>
              new Promise((e) => {
                let t = v.current;
                if (null == t) return e();
                t.scrollTo(0, () => requestAnimationFrame(() => e()));
              }),
            [],
          ),
          b = r.useCallback(
            () =>
              new Promise((e) => {
                let t = v.current;
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
            isEnabled: a,
            setFocus: x,
            scrollToStart: I,
            scrollToEnd: b,
          }),
          Z = E.setFocus;
        r.useEffect(() => {
          null != n && Z(n);
        }, [n, Z]);
        let y = (0, N.Z)(t);
        return (0, l.jsx)(C.Gt, {
          value: o,
          children: (0, l.jsx)(m.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
              navigator: E,
              children: (0, l.jsx)(es, {
                ...e,
                listNavigator: E,
                ref: v,
                selectedChannel: d,
                selectedVoiceChannel: h,
                stageChannelSpeakerVoiceStates: y,
                selectedGuildId: p,
                optInEnabled: _,
              }),
            }),
          }),
        });
      };
      function eu(e) {
        let t = (0, L.o)(),
          { isFavoritesPerk: n } = (0, v.z)("favorites-channel-list");
        return (0, l.jsx)(ec, {
          ...e,
          guildChannels: t,
          guildChannelsVersion: 0,
          withGuildIcon: n,
        });
      }
      function ed(e) {
        let t = (0, D.Z)(e.guild),
          n = (0, u.cj)([w.Z], () =>
            w.Z.getGuild(e.guildId, { guildActionRows: t }),
          );
        return (0, l.jsx)(ec, { ...e, ...n });
      }
    },
    327530: function (e, t, n) {
      n.d(t, {
        $k: function () {
          return o;
        },
        GQ: function () {
          return c;
        },
        Hb: function () {
          return d;
        },
        JD: function () {
          return f;
        },
        MF: function () {
          return C;
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
          return a;
        },
        VE: function () {
          return g;
        },
        Vf: function () {
          return s;
        },
        cx: function () {
          return h;
        },
        hl: function () {
          return m;
        },
        yE: function () {
          return i;
        },
      });
      let i = 8,
        l = 32,
        r = 40,
        a = 12,
        o = 12,
        s = 34,
        c = 41.5,
        u = 16,
        d = 32,
        h = 8,
        p = 84,
        m = 135,
        f = 16,
        g = 5,
        C = {
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
        a = n(362658),
        o = n(216306),
        s = n(155409),
        c = n(540126),
        u = n(301342),
        d = n(327530),
        h = n(981631),
        p = n(388032),
        m = n(573726);
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
          { isFavoritesPerk: v } = (0, a.z)("ChannelListSection"),
          x = l.useCallback(() => {
            let e = f.getCategoryFromSection(f.recentsSectionNumber);
            if (null == e) return;
            let t = null,
              i = e.getShownChannelAndThreadIds();
            null != C && i.includes(C) && (t = (0, o.KY)(f)),
              (0, o.Uo)(n.id, i, t);
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
        a = n(934415),
        o = n(540126),
        s = n(700026),
        c = n(301342),
        u = n(327530),
        d = n(573726);
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
          optInEnabled: a,
        } = e;
        if (t === n.voiceChannelsSectionNumber) return 44;
        let { hasDivider: c, canHaveVoiceSummary: d } = (0, s.ie)(n, a, t),
          h = c ? u.QP : 0;
        if (!d || t === o.wZ) return h;
        let p = n.getNamedCategoryFromSection(t);
        return null == p
          ? h
          : (0, s.V5)({
                category: p,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i,
              })
            ? u.Vf + h
            : h;
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
            () => (t === o.wZ ? null : n.getCategoryFromSection(t)),
            [n, t, c],
          ),
          x = l.useMemo(
            () =>
              null != v && v.isCollapsed
                ? (0, a.c4)({
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
        a = n(471445),
        o = n(430824),
        s = n(227294);
      function c(e) {
        let { channel: t } = e,
          n = (0, l.e7)([o.Z], () => o.Z.getGuild(t.guild_id)),
          c = (0, a.KS)(t, n);
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
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(829750),
        r = n(280102);
      function a(e) {
        let { channel: t, video: n, userCount: a } = e,
          { limit: o } = (0, l.Z)(t),
          s = -1,
          c = !1;
        return (
          t.userLimit > 0 && (s = t.userLimit),
          n &&
            o > 0 &&
            ((c = s < 0 || o < s), (s = s > 0 ? Math.min(s, o) : o)),
          (0, i.jsx)(r.Z, { users: a, total: s, videoLimit: c })
        );
      }
    },
    285573: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(442837),
        s = n(239091),
        c = n(146773),
        u = n(592125),
        d = n(984933),
        h = n(496675),
        p = n(98597),
        m = n(473403),
        f = n(981631),
        g = n(490897),
        C = n(766075);
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
            connectChannelDropTarget: E,
            tabIndex: S,
          } = e,
          Z = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
          }),
          N = (0, o.e7)([u.Z], () =>
            u.Z.getChannel(null == Z ? void 0 : Z.parent_id),
          ),
          y = r === (null == Z ? void 0 : Z.id),
          T = (0, o.e7)([h.Z], () =>
            null != N
              ? h.Z.can(f.Plq.MANAGE_CHANNELS, N)
              : null != t && h.Z.can(f.Plq.MANAGE_CHANNELS, t),
          ),
          j = l.useCallback(
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
        let A = (0, p.jo)(c, I),
          P = (0, p.CN)(Z, v, x),
          M = (0, i.jsx)("div", {
            className: a()(A, { [C.disabled]: P, [C.selected]: y }),
            "data-dnd-name": Z.name,
            children: (0, i.jsxs)(m.Z, {
              className: C.iconVisibility,
              channel: Z,
              guild: t,
              selected: y,
              onContextMenu: j,
              forceInteractable: !0,
              resolvedUnreadSetting: g.i.ONLY_MENTIONS,
              children: [
                (0, i.jsx)(p.eP, { channel: Z, tabIndex: S }),
                (0, i.jsx)(p.hR, {
                  channel: Z,
                  disableManageChannels: _,
                  tabIndex: S,
                }),
              ],
            }),
          });
        return T && (M = E(b(M))), M;
      });
      t.Z = _;
    },
    995993: function (e, t, n) {
      n.d(t, {
        m: function () {
          return S;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(399606),
        a = n(704215),
        o = n(692547),
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
        E = n(360110);
      function S(e) {
        let { guild: t, selected: S } = e,
          Z = (0, h.Z)(t),
          N = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
          y = (0, r.Wu)([p.Z], () =>
            Array.from(p.Z.getNewChannelIds(t.id)).filter((e) =>
              p.Z.shouldIndicateNewChannel(t.id, e),
            ),
          ),
          T = (0, r.e7)([f.ZP], () =>
            f.ZP.hasUnread(t.id, I.W.GUILD_ONBOARDING_QUESTION),
          ),
          j = y.length > C.Cb,
          A = (0, r.e7)([d.Z, f.ZP], () => {
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
          M = l.useCallback(
            (e) => {
              (0, c.jW)(e, async () => {
                let { default: e } = await n.e("8926").then(n.bind(n, 156673));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
              });
            },
            [t],
          ),
          R = null;
        return (
          (!N || T || j) &&
            !S &&
            !A &&
            (R = (0, i.jsx)(s.TextBadge, {
              color: o.Z.colors.BADGE_BRAND_BG.css,
              text: b.intl.string(b.t.y2b7CA),
              className: E.newChannel,
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
            selected: S,
            onClick: P,
            onContextMenu: M,
            trailing: R,
          })
        );
      }
    },
    315174: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(100621),
        s = n(873546),
        c = n(481060),
        u = n(666188),
        d = n(695346),
        h = n(768581),
        p = n(358555),
        m = n(981631),
        f = n(647086),
        g = n(388032),
        C = n(564192);
      function _(e) {
        var t;
        let { guild: n, controller: l, guildBanner: r, animate: c } = e,
          { value: u } = l.springs,
          p = d.QK.getSetting();
        return (0, i.jsx)(o.animated.div, {
          className: C.animatedContainer,
          style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
          },
          children: (0, i.jsx)(o.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
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
              className: a()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
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
              className: a()(C.communityInfoContainer, C.hasSubheader),
              children: d,
            })
          : (0, i.jsx)(o.animated.div, {
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
            onClick: o,
            onContextMenu: I,
            onMouseDown: b,
            disableBannerAnimation: E,
            "aria-expanded": S,
            "aria-controls": Z,
            guild: N,
            guildBanner: y,
            animationOverlayHeight: T,
            children: j,
            headerClassName: A,
            communityInfoVisible: P,
            hasSubheader: M,
          } = e,
          R = N.hasFeature(m.oNc.ANIMATED_BANNER),
          w = (0, u.Z)(N),
          L = !w && N.hasCommunityInfoSubheader(),
          D = !w && P,
          O = (0, h.xR)(y) && R && !E,
          [k, U] = l.useState(!1),
          G = l.useRef(),
          B = l.useRef(null),
          H = l.useRef(),
          V = d.QK.getSetting();
        l.useEffect(() => {
          if (O && t && !G.current && V)
            return (
              U(!0),
              (H.current = setTimeout(() => {
                U(!1);
              }, 5e3)),
              () => {
                clearTimeout(H.current);
              }
            );
        }, [O, t, V]),
          l.useEffect(() => {
            G.current = t;
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
                  className: a()(r, {
                    [C.container]: !0,
                    [C.clickable]: null != o,
                    [C.selected]: null != o && S,
                    [C.hasBanner]: F(),
                    [C.bannerVisible]: t,
                    [e]: t,
                    [C.communityInfoVisible]: D || (M && L),
                  }),
                  onMouseDown: b,
                  onContextMenu: I,
                  onClick: o,
                  children: [
                    (0, i.jsxs)("header", {
                      className: a()(C.header, A, {
                        [C.themedHeaderMobile]: s.tq,
                      }),
                      children: [
                        (0, i.jsxs)("div", {
                          className: a()(C.headerContent, C.primaryInfo),
                          children: [
                            (0, i.jsx)(p.Z, { guild: N, isBannerVisible: t }),
                            N.id === f._ && (0, i.jsx)(x, {}),
                            (0, i.jsx)(c.Heading, {
                              variant: "text-md/semibold",
                              lineClamp: 1,
                              className: C.name,
                              children: N.toString(),
                            }),
                            null != o &&
                              (0, i.jsx)(c.Clickable, {
                                className: C.headerButton,
                                "aria-controls": Z,
                                "aria-expanded": S,
                                focusProps: { ringTarget: B, offset: 4 },
                                onClick: o,
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
                              children: j,
                            }),
                          ],
                        }),
                        L &&
                          (0, i.jsx)(v, {
                            guild: N,
                            controller: n,
                            hasBanner: null != y,
                            hasSubheader: null != M && M,
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
                        U(!0), clearTimeout(H.current);
                      },
                      onMouseLeave: () => U(!1),
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
        a = n(434479),
        o = n(981631),
        s = n(176505),
        c = n(388032);
      function u(e) {
        let { guild: t, selected: n } = e;
        return (0, i.jsx)(a.m, {
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
            (0, r.uL)(o.Z5c.CHANNEL(t.id, s.oC.GUILD_HOME));
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
        a = n(481060),
        o = n(970606),
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
              (0, o.Q2)({
                guildId: t.id,
                source: g.jXE.CHANNEL_LIST,
                tab: C.oC.MEMBER_APPLICATIONS,
              }),
                (0, h.uL)(g.Z5c.CHANNEL(t.id, C.oC.MEMBER_APPLICATIONS));
            },
            trailing: I > 0 ? (0, i.jsx)(a.NumberBadge, { count: I }) : null,
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
        a = n(442837),
        o = n(481060),
        s = n(44315),
        c = n(563534),
        u = n(846121),
        d = n(703656),
        h = n(259580),
        p = n(981631),
        m = n(176505),
        f = n(388032),
        g = n(436373);
      function C(e, t) {
        return (0, i.jsx)(
          o.Text,
          { variant: "text-xs/bold", color: "text-normal", children: e },
          t,
        );
      }
      let _ = l.memo(function (e) {
        let { guild: t } = e,
          n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
          _ = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
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
            (0, i.jsxs)(o.Clickable, {
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
                    (0, i.jsx)(o.Heading, {
                      variant: "heading-sm/bold",
                      children: f.intl.string(f.t.SnrR39),
                    }),
                    (0, i.jsxs)("div", {
                      className: g.rightContainer,
                      children: [
                        (0, i.jsx)(o.Text, {
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
                (0, i.jsx)(o.Progress, {
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
        a = n(703656),
        o = n(434479),
        s = n(981631),
        c = n(176505),
        u = n(388032);
      function d(e) {
        let { guild: t, selected: d } = e;
        return (0, i.jsx)(o.m, {
          id: "subscriptions-".concat(t.id),
          renderIcon: (e) => (0, i.jsx)(r.Z, { className: e }),
          text: u.intl.string(u.t["KzCF//"]),
          selected: d,
          onClick: () => {
            (0, a.uL)(s.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS));
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
          return j;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(399606),
        o = n(704215),
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
        E = n(981631),
        S = n(176505),
        Z = n(629481),
        N = n(388032),
        y = n(785534);
      function T(e) {
        let { guildId: t, selected: n, handleClick: l } = e,
          u = (0, m.RF)(t, "guild_shop_channel_row"),
          f = (0, a.e7)([x.Z], () => x.Z.getGuild(t)),
          S =
            (null == f
              ? void 0
              : f.hasFeature(
                  E.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                )) === !0,
          T = "false" === s.K.get(Z.tM, "false"),
          j = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
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
              j
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
                      (0, C.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW),
                      I.default.track(E.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                        ...(0, h.hH)(t),
                        action_taken: Z.mz.DISMISS_CHANNEL_ROW,
                      }),
                      !u || !S)
                    ) {
                      var n;
                      (0, _.dL)(
                        E.Z5c.CHANNEL(
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
      function j(e) {
        let { guild: t, selected: l } = e,
          r = (0, f.g)(t, "guild_shop_channel_row"),
          a = () => {
            s.K.set(Z.tM, "true"),
              (0, _.uL)(E.Z5c.CHANNEL(t.id, S.oC.GUILD_SHOP));
          };
        return r
          ? (0, i.jsx)(T, { guildId: t.id, selected: l, handleClick: a })
          : (0, i.jsx)(b.m, {
              id: "shop-".concat(t.id),
              renderIcon: (e) =>
                (0, i.jsx)(g.Z, { width: 20, height: 20, className: e }),
              text: N.intl.string(N.t.al5EXF),
              selected: l,
              onClick: a,
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
        a = n.n(r),
        o = n(442837),
        s = n(592125),
        c = n(938475),
        u = n(823379),
        d = n(734190),
        h = n(388032),
        p = n(139293);
      t.Z = l.memo(function (e) {
        let {
            channel: t,
            selectedChannel: n,
            selectedVoiceChannelId: l,
            sortedThreadIds: r,
            withGuildIcon: m,
          } = e,
          f = (0, o.Wu)(
            [s.Z],
            () => r.map((e) => s.Z.getChannel(e)).filter(u.lm),
            [r],
          ),
          g = (0, o.e7)([c.ZP], () => {
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
                className: a()(p.spineBorder, {
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
        a = n.n(r),
        o = n(91192),
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
        E = n(981631),
        S = n(124368),
        Z = n(388032),
        N = n(766075),
        y = n(109659),
        T = n(139293);
      function j(e) {
        let { style: t, withGuildIcon: n } = e;
        return (0, i.jsx)("svg", {
          className: a()(T.spine, { [T.spineWithGuildIcon]: n }),
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
            isLast: A,
            withGuildIcon: P,
          } = e,
          M = (0, s.e7)([_.ZP], () => _.ZP.getVoiceStatesForChannel(t), [t]),
          R = (0, s.e7)([C.Z], () => C.Z.hasVideo(t.id)),
          { unread: w, mentionCount: L } = (0, s.cj)([g.ZP], () => ({
            unread: g.ZP.hasUnread(t.id),
            mentionCount: g.ZP.getMentionCount(t.id),
          })),
          D = (0, s.e7)([p.Z], () => p.Z.isMuted(t.id)),
          O = l.useCallback(
            (e) => {
              (0, m.ok)(t, !e.shiftKey, S.on.CHANNEL_LIST);
            },
            [t],
          ),
          k = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
          }, [t.guild_id, t.id]),
          U = l.useCallback(
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
          G = null == M ? 0 : M.length,
          { role: B, ...H } = (0, o.JA)(t.id),
          V = l.useRef(null),
          F =
            L > 0
              ? Z.intl.formatToPlainString(Z.t["ZL7+Iy"], {
                  channelName: t.name,
                  mentionCount: L,
                })
              : w
                ? Z.intl.formatToPlainString(Z.t.YlVvmZ, {
                    channelName: t.name,
                  })
                : Z.intl.formatToPlainString(Z.t["0nZpiI"], {
                    channelName: t.name,
                  });
        return (0, i.jsxs)("li", {
          role: B,
          className: a()(N.containerDefault, { [N.selected]: r }),
          children: [
            (0, i.jsx)(j, { withGuildIcon: P }),
            A
              ? null
              : (0, i.jsx)(j, {
                  withGuildIcon: P,
                  style: { transform: "rotateX(180deg) translateY(-9px)" },
                }),
            (0, i.jsx)(c.FocusRing, {
              focusTarget: V,
              ringTarget: V,
              offset: { top: 2, bottom: 2, right: 4 },
              children: (0, i.jsxs)("div", {
                className: a()(N.iconVisibility, y.wrapper, y.typeThread, {
                  [y.modeSelected]: r,
                  [y.modeMuted]: !r && D,
                  [y.modeUnreadImportant]: !D && !r && w,
                  [y.withGuildIcon]: P,
                }),
                onMouseDown: k,
                onContextMenu: U,
                children: [
                  !w || D || r
                    ? null
                    : (0, i.jsx)("div", {
                        className: a()(y.unread, y.unreadImportant),
                      }),
                  (0, i.jsx)(c.Clickable, {
                    ...H,
                    innerRef: V,
                    className: y.link,
                    onClick: O,
                    "aria-label": F,
                    focusProps: { enabled: !1 },
                    children: (0, i.jsxs)("div", {
                      className: a()(y.linkTop, y.__invalid_threadMainContent),
                      children: [
                        (0, i.jsx)(h.Z, {
                          className: y.name,
                          "aria-hidden": !0,
                          children: t.name,
                        }),
                        (0, i.jsxs)("div", {
                          className: y.children,
                          children: [
                            G > 0 && t.userLimit > 0
                              ? (0, i.jsx)(x.Z, {
                                  userCount: G,
                                  video: R,
                                  channel: t,
                                })
                              : null,
                            (0, v.Z)(L)
                              ? (0, i.jsx)(I.Z, { mentionsCount: L })
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
              voiceStates: M,
              location: E.Sbl.GUILD_CHANNEL_LIST,
            }),
          ],
        });
      });
    },
    25601: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(831209),
        r = n(481060),
        a = n(184214);
      function o(e) {
        let { mentionsCount: t } = e;
        return (0, i.jsx)("div", {
          className: a.mentionsBadge,
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
        a = n(442837),
        o = n(481060),
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
        E = n(368442),
        S = n(201469),
        Z = n(680089),
        N = n(592125),
        y = n(430824),
        T = n(607744),
        j = n(496675),
        A = n(306680),
        P = n(9156),
        M = n(979651),
        R = n(934415),
        w = n(98597),
        L = n(648501),
        D = n(473403),
        O = n(207055),
        k = n(981631),
        U = n(647086),
        G = n(388032),
        B = n(766075),
        H = n(718963);
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
      class F extends w.ZP {
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, R.rY)(e, M.Z, y.Z);
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
              connectChannelDropTarget: a,
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
            E = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [B.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)(o.Popout, {
                  position: "right",
                  renderPopout: this.renderPopout,
                  spacing: 0,
                  onRequestClose: this.closeGuildVerificationPopout,
                  shouldShow: I,
                  children: () =>
                    (0, i.jsx)(o.Tooltip, {
                      text: this.getTooltipText(),
                      children: (a) => {
                        let { onClick: o, onContextMenu: s, ...c } = a;
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
                            this.handleClick(), null == o || o();
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
          return p && (E = c(E)), d && (E = a(s(E))), E;
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
                return (0, i.jsx)(o.Tooltip, {
                  text: G.intl.string(G.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(o.Clickable, {
                      className: r()(B.iconItem, n ? B.alwaysShown : null),
                      onClick: () => {
                        s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                      },
                      "aria-label": G.intl.string(G.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                      children: (0, i.jsx)(o.ChatIcon, {
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
              return this.isFull() && !e ? G.intl.string(G.t.rZfiNj) : null;
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
            collapsed: o,
            voiceStates: s,
          } = e,
          c = (0, a.cj)([A.ZP], () => ({
            unread: A.ZP.hasUnread(n.id),
            mentionCount: A.ZP.getMentionCount(n.id),
          })),
          u = (0, a.e7)([P.ZP], () => P.ZP.resolveUnreadSetting(n)),
          d = (0, a.cj)([N.Z, T.Z, j.Z], () => {
            let e = N.Z.getChannel(n.parent_id),
              i = T.Z.getCheck(n.guild_id);
            return {
              canManageChannel: null != t && j.Z.can(k.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === U._ ||
                  (null != e
                    ? j.Z.can(k.Plq.MANAGE_CHANNELS, e)
                    : j.Z.can(k.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: j.Z.can(k.Plq.MOVE_MEMBERS, n),
              locked: !j.Z.can(k.Plq.CONNECT, n),
              bypassLimit: j.Z.can(k.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          h = (0, a.e7)([Z.Z], () => Z.Z.isCollapsed(n.parent_id)),
          p = (0, S.ZP)(n.id),
          m = (0, a.e7)([b.Z], () => b.Z.getStageInstanceByChannel(n.id), [
            n.id,
          ]),
          f = (0, x.Rk)(n.id, I.pV.AUDIENCE),
          { isSubscriptionGated: C, needSubscriptionToAccess: _ } = (0, g.Z)(
            n.id,
          ),
          v = (0, a.e7)([P.ZP], () => P.ZP.isFavorite(t.id, n.id)),
          y = (0, E.xJ)(n.id),
          M = (0, L.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: C,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit:
              y || (n.userLimit > 0 && n.userLimit < k.xGv),
          }),
          R = e.connected && null == M;
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
          forceShowButtons: R,
          channelInfo: M,
          resolvedUnreadSetting: u,
        });
      }
    },
    770202: function (e, t, n) {
      n(411104), n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(442837),
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
        x = n(766075);
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
      class E extends g.ZP {
        render() {
          let {
              channel: e,
              selected: t,
              connectChannelDropTarget: n,
              connectChannelDragSource: l,
              connectDragPreview: r,
              canReorderChannel: o,
            } = this.props,
            s = (0, i.jsx)("li", {
              className: a()(this.getClassName(), {
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
                connectDragPreview: o ? r : null,
                "aria-label": (0, d.ZP)({ channel: e }),
                resolvedUnreadSetting: v.i.ONLY_MENTIONS,
                children: [this.renderInviteButton(), this.renderEditButton()],
              }),
            });
          return o ? n(l(s)) : s;
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
      let S = (0, u.B)(E);
      t.Z = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
          r = (0, o.cj)([p.Z, f.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
              canManageChannel: f.Z.can(_.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l && null != e
                  ? f.Z.can(_.Plq.MANAGE_CHANNELS, e)
                  : f.Z.can(_.Plq.MANAGE_CHANNELS, n),
            };
          });
        return (0, i.jsx)(S, { ...r, ...e });
      });
    },
    79556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        o = n(481060),
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
        E = n(594174),
        S = n(109446),
        Z = n(98597),
        N = n(648501),
        y = n(473403),
        T = n(304471),
        j = n(981631),
        A = n(647086),
        P = n(766075);
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
      class R extends Z.ZP {
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
              unread: a,
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
              withGuildIcon: E,
              enableActivities: S,
            } = this.props,
            Z = S && null != I && I.length > 0,
            N = (0, m.D)(v),
            T = (0, i.jsx)("li", {
              className: r()(this.getClassName(), {
                [P.disabled]: this.isDisabled(),
                [P.selected]: n,
              }),
              "data-dnd-name": e.name,
              onMouseEnter: c || Z ? this.handleMouseEnter : void 0,
              onMouseLeave: c || Z ? this.handleMouseLeave : void 0,
              children: (0, i.jsx)(o.Popout, {
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
                    unread: a,
                    mentionCount: u,
                    hasActiveThreads: s,
                    subtitle: null == N ? void 0 : N.subtitle,
                    subtitleColor: null == N ? void 0 : N.color,
                    onMouseDown: this.handleMouseDown,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: g ? f : null,
                    isFavoriteSuggestion: _,
                    channelTypeOverride: x ? j.d4z.GUILD_TEXT : void 0,
                    resolvedUnreadSetting: b,
                    withGuildIcon: E,
                    "aria-label": (0, p.ZP)({
                      channel: e,
                      unread: a,
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
            M(this, "state", {
              shouldShowThreadsPopout: !1,
              shouldShowActivities: !1,
            }),
            M(this, "enterTimer", 0),
            M(this, "exitTimer", 0),
            M(this, "handleMouseEnter", () => {
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
            M(this, "handleMouseLeave", () => {
              this.resetTextChannelPopoutTimers(),
                (this.exitTimer = setTimeout(() => {
                  this.state.shouldShowActivities &&
                    this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout &&
                      this.setState({ shouldShowThreadsPopout: !1 });
                }, 250));
            }),
            M(this, "handleThreadsPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowThreadsPopout: !1 });
            }),
            M(this, "handleActivitiesPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowActivities: !1 });
            }),
            M(this, "handleClosePopout", () => {
              this.state.shouldShowActivities &&
                this.handleActivitiesPopoutClose(),
                this.state.shouldShowThreadsPopout &&
                  this.handleThreadsPopoutClose();
            }),
            M(this, "handleMouseDown", () => {
              this.handleActivitiesPopoutClose(),
                this.handleThreadsPopoutClose();
              let { channel: e } = this.props,
                t = e.getGuildId();
              s.Z.preload(null != t ? t : j.ME, e.id);
            }),
            M(this, "renderPopout", (e) => {
              let { channel: t, sorting: n, embeddedApps: l } = this.props,
                { shouldShowActivities: r } = this.state;
              return null != l && l.length > 0 && r && !n
                ? (0, i.jsx)(T.Z, {
                    onAction: this.handleActivitiesPopoutClose,
                    channel: t,
                  })
                : (0, i.jsx)(S.Z, { ...e, channel: this.props.channel });
            }),
            M(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props;
              if (t.type === j.d4z.GROUP_DM) {
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
              if (t.type === j.d4z.DM) {
                let l = E.default.getUser(t.getRecipientId());
                null != l &&
                  (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("92453"),
                      n.e("56826"),
                      n.e("12327"),
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
      let w = (0, u.B)(R);
      function L(e) {
        let {
            channel: t,
            guild: n,
            disableSorting: l,
            isFavoriteCategory: r,
            muted: o,
            selected: s,
          } = e,
          { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, C.JQ)(t),
          p = (0, a.cj)([I.ZP], () => ({
            unread: I.ZP.hasUnread(t.id),
            ackMessageId: I.ZP.ackMessageId(t.id),
            mentionCount: I.ZP.getMentionCount(t.id),
          })),
          m = (0, a.e7)([b.ZP], () => b.ZP.resolveUnreadSetting(t)),
          v = (0, a.cj)([_.Z, x.Z], () => {
            let e = _.Z.getChannel(t.parent_id);
            return {
              canManageChannel: x.Z.can(j.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l &&
                (n.id === A._ ||
                  (null != e
                    ? x.Z.can(j.Plq.MANAGE_CHANNELS, e)
                    : x.Z.can(j.Plq.MANAGE_CHANNELS, n))),
            };
          }),
          S = (0, a.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(n.id, t.id)),
          { needSubscriptionToAccess: Z, isSubscriptionGated: y } = (0, f.Z)(
            t.id,
          ),
          T = (0, a.e7)([b.ZP], () => b.ZP.isFavorite(n.id, t.id)),
          P = (0, a.e7)(
            [E.default],
            () => {
              let e = E.default.getCurrentUser();
              return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t],
          ),
          M = (0, d.NX)(t.id),
          R = (0, N.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: y,
            needSubscriptionToAccess: Z,
            isNewChannel: S,
            muted: o,
            enableActivities: M,
            resolvedUnreadSetting: m,
          }),
          L = (0, h.ZP)(t);
        return (0, i.jsx)(w, {
          ...p,
          ...v,
          ...e,
          hasActiveThreads: c,
          hasMoreActiveThreads: u,
          isSubscriptionGated: y,
          needSubscriptionToAccess: Z,
          isNewChannel: S && e.canBeNewChannel,
          isFavoriteSuggestion: r && !T,
          canShowThreadPreviewForUser: P,
          channelInfo: R,
          embeddedApps: L,
          resolvedUnreadSetting: m,
          hasChannelInfo: null != R,
          enableActivities: M,
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
        a = n(449932),
        o = n(561788),
        s = n(208745);
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
                  children: (0, i.jsx)(o.Z, { channel: t }),
                }),
                (0, i.jsx)("div", { className: s.headerDivider }),
                u.map((e, l) => {
                  var r;
                  return (0, i.jsx)(
                    a.Z,
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
        a = n.n(r),
        o = n(100621),
        s = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(492162),
        h = n(237583),
        p = n(451478),
        m = n(934415),
        f = n(968847),
        g = n(388032),
        C = n(606720);
      let _ = { friction: 30, tension: 300 };
      function v(e) {
        var t;
        let { guildChannels: n, jumpToVoiceChannels: r } = e,
          o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
          s = (0, d.Z)(n.id),
          p = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), r();
            },
            [r],
          ),
          f =
            null !== (t = null == o ? void 0 : o.getChannelRecords()) &&
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
          className: a()(C.bar),
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
            targetChannelId: E,
          } = "bottom" === t ? h : m,
          S = I === f.x.HIDDEN,
          Z = (0, u.useSpring)(
            {
              to: {
                transform: S
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
              e.preventDefault(), e.stopPropagation(), null != E && d(E);
            },
            [d, E],
          );
        return (0, i.jsx)("div", {
          className: a()(C.container, {
            [C.top]: "top" === t,
            [C.bottom]: "bottom" === t,
          }),
          children: (0, i.jsx)(o.animated.div, {
            className: C.containerPadding,
            style: Z,
            "aria-hidden": S,
            children:
              I === f.x.HIDDEN
                ? (0, i.jsx)("div", { className: a()(C.bar, C.emptyBar) })
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
                        className: a()(C.bar, C.mentionsBar),
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
        a = n(718528),
        o = n(256916),
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
          u = (0, a.T)(
            n,
            l,
            s,
            { withVoiceChannels: !1 },
            { ignoreRecents: !0 },
          ),
          d = (0, r.e7)([p.Z], () => p.Z.isFocused());
        return (0, i.jsx)(o.Z, {
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
        a = n(481060),
        o = n(239091),
        s = n(605236),
        c = n(554747),
        u = n(306680),
        d = n(9156),
        h = n(434479),
        p = n(490897),
        m = n(388032),
        f = n(109659);
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
          await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("22347"),
              n.e("56236"),
              n.e("65297"),
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
            (0, i.jsx)(a.CalendarIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          text: b,
          selected: g,
          onClick: x,
          onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
              let { default: e } = await n.e("95307").then(n.bind(n, 867757));
              return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
          },
          showUnread: C && !v,
          trailing:
            !v && _ > 0
              ? (0, i.jsx)(a.NumberBadge, {
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
          return $;
        },
      }),
        n(47120),
        n(411104);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        o = n(846519),
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
        x = n(832382),
        I = n(446226),
        b = n(305325),
        E = n(281956),
        S = n(66999),
        Z = n(554747),
        N = n(378844),
        y = n(574176),
        T = n(359110),
        j = n(155409),
        A = n(695346),
        P = n(592125),
        M = n(430824),
        R = n(607744),
        w = n(496675),
        L = n(306680),
        D = n(9156),
        O = n(979651),
        k = n(934415),
        U = n(63063),
        G = n(98597),
        B = n(648501),
        H = n(473403),
        V = n(830993),
        F = n(653577),
        W = n(207055),
        z = n(981631),
        Y = n(647086),
        K = n(388032),
        q = n(766075);
      function Q(e, t, n) {
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
      class J extends G.ZP {
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
          return (0, k.rY)(e, O.Z, M.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return q.containerUserOver;
          if (null != t)
            return e > t ? q.containerDragAfter : q.containerDragBefore;
          return q.containerDefault;
        }
        renderSubtitle() {
          var e;
          let {
              channel: t,
              connected: n,
              enableHangStatus: l,
              allowChannelTopic: r,
            } = this.props,
            a =
              null === (e = (0, v.D)(this.props.subtitle)) || void 0 === e
                ? void 0
                : e.subtitle,
            { hovered: o } = this.state;
          return (0, i.jsx)(F.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: a,
            hovered: o,
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
          return (0, i.jsx)(W.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: z.Sbl.GUILD_CHANNEL_LIST,
          });
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, i.jsx)("div", { className: q.channelInfo, children: e });
        }
        renderHDSplashedIcon() {
          let { channel: e, locked: t } = this.props;
          return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                text: K.intl.string(K.t.gpF6QU),
                children: (e) => {
                  let {
                    onMouseEnter: t,
                    onMouseLeave: n,
                    onFocus: l,
                    onBlur: a,
                  } = e;
                  return (0, i.jsx)(s.Clickable, {
                    className: r()(q.iconItem, q.alwaysShown),
                    onClick: () => {
                      window.open(
                        U.Z.getArticleURL(z.BhN.HD_STREAMING_POTION),
                        "_blank",
                      );
                    },
                    "aria-label": K.intl.string(K.t.gpF6QU),
                    onMouseEnter: t,
                    onMouseLeave: n,
                    onFocus: l,
                    onBlur: a,
                    children: (0, i.jsx)(s.PotionIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: q.actionIcon,
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
              resolvedUnreadSetting: a,
              mentionCount: o,
              locked: c,
              sorting: u,
              isUserOver: d,
              connectChannelDropTarget: h,
              connectChannelDragSource: p,
              connectUserDropTarget: m,
              connectDragPreview: C,
              canReorderChannel: _,
              canMoveMembers: v,
              showTutorial: I,
              hasActiveEvent: b,
              embeddedApps: E,
              isSubscriptionGated: S,
              isFavoriteSuggestion: Z,
              withGuildIcon: N,
            } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: T } =
              this.state,
            A = this.getVoiceStatesCount(),
            P = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [q.disabled]: this.isDisabled(),
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
                          return (0, i.jsx)(x.Z, {
                            channel: e,
                            children: (0, i.jsxs)(H.Z, {
                              className: q.iconVisibility,
                              iconClassName: r()({ [q.iconLive]: b }),
                              channel: e,
                              selected: !Z && t,
                              connected: n,
                              unread: n ? l : void 0,
                              resolvedUnreadSetting: a,
                              mentionCount: o,
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
                                mentionCount: o,
                                userCount: A,
                                embeddedActivitiesCount: E.length,
                                isSubscriptionGated: S,
                              }),
                              "aria-describedby": (0, g.Z)({
                                channel: e,
                                embeddedApps: E,
                              }),
                              withGuildIcon: N,
                              ...h,
                              children: [
                                Z && this.renderAcceptSuggestionButton(),
                                Z && this.renderRemoveSuggestionButton(),
                                !Z && this.renderOpenChatButton(),
                                !Z && this.renderInviteButton(),
                                !Z && this.renderEditButton(),
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
            I &&
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
            Q(this, "state", {
              shouldShowActivities: !1,
              shouldShowGuildVerificationPopout: !1,
              hovered: !1,
            }),
            Q(this, "activitiesHideTimeout", new o.V7()),
            Q(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            Q(this, "handleVoiceConnect", () => {
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
            Q(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = M.Z.getGuild(t.getGuildId());
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
            Q(this, "handleMouseEnter", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !0, hovered: !0 });
            }),
            Q(this, "handleMouseLeave", () => {
              this.activitiesHideTimeout.start(100, () =>
                this.setState({ shouldShowActivities: !1, hovered: !1 }),
              );
            }),
            Q(this, "closePopout", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !1 });
            }),
            Q(this, "handleClick", () => {
              let { channel: e } = this.props,
                t = e.getGuildId();
              null != t && (0, E.n)(t) && (0, b.hk)(t),
                this.handleVoiceConnect();
            }),
            Q(this, "handleVoiceStatusClick", (e) => {
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
            Q(this, "renderPopout", () => {
              let {
                  channel: e,
                  voiceStates: t,
                  sorting: n,
                  isUserOver: l,
                  selected: r,
                  guild: a,
                } = this.props,
                {
                  shouldShowActivities: o,
                  shouldShowGuildVerificationPopout: s,
                } = this.state;
              if (o && !n && !l && !s) {
                let n = A.SE.getSetting().includes(a.id);
                return (0, i.jsx)(V.Z, {
                  onAction: this.closePopout,
                  guild: a,
                  channel: e,
                  voiceStates: t,
                  isChannelSelected: r,
                  shouldShowSettingNudge: n,
                });
              }
              if (s)
                return (0, i.jsx)(N.Z, {
                  type: N.R.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render",
              );
            }),
            Q(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(s.Tooltip, {
                  text: K.intl.string(K.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: o,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(s.Clickable, {
                      className: r()(q.iconItem, n ? q.alwaysShown : null),
                      onClick: () => {
                        c.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                      },
                      "aria-label": K.intl.string(K.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: o,
                      onBlur: u,
                      children: (0, i.jsx)(s.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: q.actionIcon,
                      }),
                    });
                  },
                });
            }),
            Q(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e ? K.intl.string(K.t.rZfiNj) : null;
            });
        }
      }
      let X = (0, d.B)((0, h.Q)(J));
      function $(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: r,
            selected: o,
            collapsed: s,
            voiceStates: c,
          } = e,
          u = (0, a.cj)([L.ZP], () => ({
            unread: L.ZP.hasUnread(n.id),
            mentionCount: L.ZP.getMentionCount(n.id),
          })),
          d = (0, a.e7)([D.ZP], () => D.ZP.resolveUnreadSetting(n)),
          h = (0, a.cj)([P.Z, R.Z, w.Z], () => {
            let e = P.Z.getChannel(n.parent_id),
              i = R.Z.getCheck(n.guild_id);
            return {
              canManageChannel: w.Z.can(z.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === Y._ ||
                  (null != e
                    ? w.Z.can(z.Plq.MANAGE_CHANNELS, e)
                    : w.Z.can(z.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: w.Z.can(z.Plq.MOVE_MEMBERS, n),
              locked: !w.Z.can(z.Plq.CONNECT, n),
              bypassLimit: w.Z.can(z.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          m = (0, a.e7)([O.Z], () => O.Z.hasVideo(n.id)),
          f = (0, p.ZP)(n),
          g = (0, C.ZP)(n),
          _ = (0, Z.qY)(n.id),
          { isSubscriptionGated: v, needSubscriptionToAccess: x } = (0, S.Z)(
            n.id,
          ),
          b = (0, I.Z)(),
          E = (0, a.e7)([D.ZP], () => D.ZP.isFavorite(t.id, n.id)),
          N = e.connected || (null == b ? void 0 : b.channelId) === n.id,
          { enableHangStatus: T, allowChannelTopic: j } = y.n.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
          ),
          A = (0, B.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: v,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
          }),
          M = N && null == A;
        return (0, i.jsx)(X, {
          channelName: g,
          embeddedApps: f,
          embeddedActivityType: z.IIU.PLAYING,
          video: m,
          hasActiveEvent: null != _,
          isSubscriptionGated: v,
          needSubscriptionToAccess: x,
          ...u,
          ...h,
          ...e,
          connected: N,
          isFavoriteSuggestion: r && !E,
          forceShowButtons: M,
          channelInfo: A,
          enableHangStatus: T,
          allowChannelTopic: j,
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
        a = n(481060),
        o = n(616780),
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
        E = n(388032),
        S = n(208745);
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
          (0, o.$)(n);
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
          j = (0, r.e7)(
            [m.Z],
            () => {
              let e = {};
              return (
                y.forEach((t) => {
                  let n = m.Z.findActivity(t.user.id, T(t));
                  if (null != n && !(0, u.Z)(n)) {
                    var i, l, r, a;
                    let o = ""
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
                        null !== (a = e[o]) && void 0 !== a
                          ? a
                          : { members: [], activity: n };
                    s.members.push(t),
                      !(0, c.Z)(s.activity, b.xjy.JOIN) && (s.activity = n),
                      (e[o] = s);
                  }
                }),
                Object.values(e)
              );
            },
            [y],
            r.pF,
          );
        return j.length + Z.length === 0
          ? null
          : (0, i.jsxs)(a.Scroller, {
              className: S.container,
              children: [
                (0, i.jsx)(N, {
                  channel: h,
                  isChannelSelected: v,
                  voiceStatesCount:
                    null !== (d = null == C ? void 0 : C.length) && void 0 !== d
                      ? d
                      : 0,
                }),
                (0, i.jsx)("div", { className: S.headerDivider }),
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
                j.map((e, t) => {
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
                      (0, i.jsx)("div", { className: S.headerDivider }),
                      (0, i.jsx)("div", {
                        className: S.settingNudgeText,
                        children: (0, i.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          tag: "span",
                          children: E.intl.format(E.t.ePyoY2, {
                            onClick: () => {
                              (0, a.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  n.e("23217"),
                                  n.e("33053"),
                                  n.e("8016"),
                                  n.e("76540"),
                                  n.e("15669"),
                                  n.e("17938"),
                                  n.e("22646"),
                                  n.e("25183"),
                                  n.e("30419"),
                                  n.e("48923"),
                                  n.e("18824"),
                                  n.e("8821"),
                                  n.e("57772"),
                                  n.e("42587"),
                                  n.e("37229"),
                                  n.e("28044"),
                                  n.e("26069"),
                                  n.e("1989"),
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
          a = (0, r.e7)([p.Z], () => !p.Z.can(b.Plq.CONNECT, t)),
          o = (0, r.e7)([f.Z], () => f.Z.hasVideo(t.id)),
          s = (0, C.ZP)({ channel: t, locked: a, video: o, selected: n }),
          c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
        return null == (0, d.KS)(t, c)
          ? null
          : (0, i.jsxs)("div", {
              className: S.popoutHeaderContainer,
              children: [
                (0, i.jsx)(v.Z, { channel: t }),
                s
                  ? (0, i.jsx)(x.Z, { userCount: l, video: o, channel: t })
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
        a = n.n(r),
        o = n(442837),
        s = n(481060),
        c = n(362721),
        u = n(12498),
        d = n(111028),
        h = n(454585),
        p = n(626135),
        m = n(981631),
        f = n(388032),
        g = n(402328),
        C = n(882530);
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
          b = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
          E = null != b && b.length > 0,
          S = (0, c.ZP)(t, !0),
          Z = (!x || !!I) && S,
          N = null != _ && _.length > 0;
        l.useEffect(() => {
          E &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
              guild_id: t.guild_id,
              channel_id: t.id,
            });
        }, [t.id, E, t.guild_id]);
        let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
        if (null == t.guild_id) return null;
        let T = a()(g.statusDiv, n && Z ? g.hoverable : null);
        if (E)
          return (0, i.jsx)(s.Clickable, {
            className: T,
            onClick: Z ? v : void 0,
            children: (0, i.jsx)(s.Text, {
              variant: "text-xs/medium",
              className: a()(g.statusText, C.markup),
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
        a = n(481060),
        o = n(305883);
      function s(e) {
        let { total: t, users: n, videoLimit: l } = e;
        return (0, i.jsxs)("div", {
          className: o.wrapper,
          children: [
            (0, i.jsxs)("span", {
              className: r()(o.users, {
                [o.video]: l,
                [o.extraLong]: n >= 100,
              }),
              children: [
                l
                  ? (0, i.jsx)(a.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: o.videoIcon,
                    })
                  : null,
                n.toString().padStart(2, "0"),
              ],
            }),
            (0, i.jsx)("span", {
              className: r()(o.total, { [o.extraLong]: t >= 100 }),
              children: t.toString().padStart(2, "0"),
            }),
          ],
        });
      }
    },
    543432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(874899);
      function a(e) {
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
      var a = n(442837),
        o = n(481060),
        s = n(893776),
        c = n(391650),
        u = n(313201),
        d = n(144114),
        h = n(607744),
        p = n(594174),
        m = n(981631),
        f = n(815660),
        g = n(388032),
        C = n(440990);
      (i = l || (l = {}))[(i.VOICE = 0)] = "VOICE";
      t.Z = (e) => {
        let { type: t, guildId: i, closePopout: l } = e,
          _ = (0, u.Dt)(),
          {
            notClaimed: v,
            notEmailVerified: x,
            notPhoneVerified: I,
            newAccount: b,
            newMember: E,
          } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
          S = 0 === t ? g.intl.string(g.t["6zY8BA"]) : null,
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
                : E
                  ? ((Z = g.intl.formatToPlainString(g.t.v1ktYW, {
                      min: m.YeM.MEMBER_AGE,
                    })),
                    (N = g.intl.string(g.t.BddRzc)))
                  : b &&
                    ((Z = g.intl.formatToPlainString(g.t["sncw4+"], {
                      min: m.YeM.ACCOUNT_AGE,
                    })),
                    (N = g.intl.string(g.t.BddRzc)))),
        null == S || null == Z)
          ? null
          : (0, r.jsxs)(o.Dialog, {
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
                    (0, r.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      id: _,
                      children: S,
                    }),
                    (0, r.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: Z,
                    }),
                    (0, r.jsxs)("div", {
                      className: C.buttonContainer,
                      children: [
                        null != N
                          ? (0, r.jsx)(o.Button, {
                              onClick: () => {
                                v
                                  ? c.j()
                                  : I
                                    ? (0, o.openModalLazy)(
                                        async () => {
                                          let { default: e } =
                                            await Promise.all([
                                              n.e("76540"),
                                              n.e("35052"),
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
                                      (0, o.openModal)((e) => {
                                        var t;
                                        return (0, r.jsx)(o.ConfirmModal, {
                                          header: g.intl.string(g.t.LykQYm),
                                          confirmText: g.intl.string(
                                            g.t.BddRzc,
                                          ),
                                          confirmButtonColor:
                                            o.Button.Colors.BRAND,
                                          ...e,
                                          children: (0, r.jsx)(o.Text, {
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
                          ? (0, r.jsx)(o.Button, {
                              onClick: l,
                              look: o.Button.Looks.BLANK,
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
    901621: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(106351),
        l = n(442837),
        r = n(835473),
        a = n(592125),
        o = n(430824),
        s = n(496675),
        c = n(158776),
        u = n(979651),
        d = n(823379),
        h = n(981631);
      function p(e) {
        let t = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
          n = null == t ? void 0 : t.afkChannelId,
          p = (0, l.Wu)(
            [u.Z, c.Z, a.Z, s.Z],
            () => {
              let t = new Set(),
                l = u.Z.getVoiceStates(e);
              for (let r in l) {
                let o = a.Z.getBasicChannel(l[r].channelId);
                if (
                  null != o &&
                  o.type !== i.d.GUILD_STAGE_VOICE &&
                  n !== o.id &&
                  !!s.Z.canBasicChannel(h.S7T.VIEW_CHANNEL, o)
                )
                  c.Z.getActivities(r, e).forEach((e) => {
                    let n = e.application_id;
                    if (e.type !== h.IIU.PLAYING || null == n) return [];
                    t.add(n);
                  });
              }
              return [...t];
            },
            [n, e],
          );
        return (0, r.Z)([...p]).filter(d.lm).length > 0;
      }
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
          return a;
        },
      });
      var i = n(512969),
        l = n(905423),
        r = n(981631);
      function a() {
        let e = (0, l.Z)((e) => e.guildId),
          { pathname: t } = (0, i.TH)(),
          n =
            t.startsWith(r.Z5c.GUILD_DISCOVERY) ||
            t.startsWith(r.Z5c.GLOBAL_DISCOVERY),
          a = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION("")),
          o = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        return null == e && !(n || a || o);
      }
    },
    61634: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(392711),
        r = n.n(l),
        a = n(106351),
        o = n(442837),
        s = n(846519),
        c = n(941028),
        u = n(595519),
        d = n(317381),
        h = n(470883),
        p = n(750881),
        m = n(554747),
        f = n(146085),
        g = n(427679),
        C = n(131704),
        _ = n(199902),
        v = n(314897),
        x = n(592125),
        I = n(650774),
        b = n(430824),
        E = n(496675),
        S = n(699516),
        Z = n(944486),
        N = n(9156),
        y = n(979651),
        T = n(709054),
        j = n(510601),
        A = n(901621),
        P = n(981631);
      let M = [];
      function R(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Z;
        return (
          null != e &&
          e.type !== a.d.GUILD_STAGE_VOICE &&
          t !== e.id &&
          n.canBasicChannel(P.S7T.VIEW_CHANNEL, e)
        );
      }
      function w(e) {
        var t;
        let n = (0, o.e7)([N.ZP], () => N.ZP.isMuted(e)),
          l = (0, m.k5)(e);
        !(function (e, t) {
          let n = i.useRef(new Set()),
            l = i.useRef(new s.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = j.ZP.useExperiment(
              { location: "useGuildMediaState" },
              { autoTrackExposure: !1 },
            ),
            u = (0, o.e7)([I.Z], () => {
              let t = I.Z.getMemberCount(e);
              return null == t || t > 1e3;
            }),
            d = (0, o.cj)(
              [y.Z],
              () => {
                if (!a || t || u) return M;
                let n = Object.keys(y.Z.getVoiceStates(e));
                return 0 === n.length ? M : n.slice(0, 50);
              },
              [e, t, u, a],
            );
          i.useEffect(() => {
            !(function (e, t, n, i, l) {
              let a = r().random(1e3, 1e4);
              i.start(a, () => {
                let i = new Set(t),
                  r = t.filter((e) => !n.has(e)),
                  a = Array.from(n).filter((e) => !i.has(e));
                (0, c.w5)(e, a), (0, c.ym)(e, r), l();
              });
            })(e, d, n.current, l.current, () => {
              n.current = new Set(d);
            });
          }, [e, d]),
            i.useEffect(
              () => () => {
                l.current.stop(), (0, c.w5)(e, Array.from(n.current));
              },
              [e],
            );
        })(e, n);
        let a = (0, A.Z)(e),
          { enabled: P } = (0, p.bA)("use-guild-media-state"),
          w = (0, o.Wu)([d.ZP, S.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return P
              ? t.filter(
                  (e) =>
                    !(0, h.BA)([...e.userIds], S.Z.getBlockedOrIgnoredIDs()),
                )
              : t;
          }),
          L = (0, u.NX)(
            null === (t = w[0]) || void 0 === t ? void 0 : t.channelId,
          ),
          {
            guildHasVoice: D,
            guildHasVideo: O,
            selectedVoiceChannelHasVideo: k,
          } = (0, o.cj)(
            [Z.Z, y.Z, b.Z, E.Z, x.Z],
            () => {
              var t;
              let i = Z.Z.getVoiceChannelId(),
                l =
                  null === (t = b.Z.getGuild(e)) || void 0 === t
                    ? void 0
                    : t.afkChannelId,
                r = y.Z.getUsersWithVideo(e),
                a = P
                  ? (0, h.DX)(y.Z.getVoiceStates(e))
                  : y.Z.getVoiceStates(e),
                o = (() => {
                  if (n) return !1;
                  for (let e in a)
                    if (
                      R(
                        x.Z.getBasicChannel(a[e].channelId),
                        null != l ? l : void 0,
                        E.Z,
                      )
                    )
                      return !0;
                  return !1;
                })();
              return {
                guildHasVoice: o,
                guildHasVideo: (() => {
                  if (n) return !1;
                  for (let t of r) {
                    var e;
                    if (
                      R(
                        x.Z.getBasicChannel(
                          null === (e = a[t]) || void 0 === e
                            ? void 0
                            : e.channelId,
                        ),
                        null != l ? l : void 0,
                        E.Z,
                      )
                    )
                      return !0;
                  }
                  return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && y.Z.hasVideo(i),
              };
            },
            [P, e, n],
          ),
          U = v.default.getId();
        return (0, o.cj)(
          [Z.Z, x.Z, d.ZP, g.Z, _.Z, E.Z],
          () => {
            var t, i, r;
            let o = Z.Z.getVoiceChannelId(),
              s =
                (null === (t = x.Z.getChannel(o)) || void 0 === t
                  ? void 0
                  : t.guild_id) === e,
              c = !1,
              u = !1,
              p = !1,
              m = !1,
              v = !1,
              I = !1;
            if (!s && n)
              return {
                audio: c,
                video: m,
                screenshare: v,
                liveStage: p,
                activeEvent: u,
                activity: I,
                gaming: a,
                isCurrentUserConnected: !1,
              };
            let b = T.default
                .keys(g.Z.getStageInstancesByGuild(e))
                .some((e) => {
                  let t = x.Z.getChannel(e);
                  return null != t && E.Z.can(f.gl, t);
                }),
              S =
                s &&
                null !==
                  (r =
                    null === (i = x.Z.getChannel(o)) || void 0 === i
                      ? void 0
                      : i.isGuildStageVoice()) &&
                void 0 !== r &&
                r,
              N = !!s && null != _.Z.getActiveStreamForUser(U, e),
              y = (
                P
                  ? (0, h.aK)(_.Z.getAllApplicationStreams())
                  : _.Z.getAllApplicationStreams()
              ).some((t) => t.guildId === e),
              j = s && k,
              A = (() => {
                if (L) return w.length > 0;
                for (let e of w) {
                  let t = x.Z.getChannel(e.channelId);
                  if (null != t && (0, C.vd)(t.type)) return !0;
                }
                return !1;
              })(),
              M = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
              s
                ? ((c = !0),
                  (u = (null == l ? void 0 : l.channel_id) === o),
                  (p = S),
                  (m = j),
                  (v = N),
                  (I = M))
                : ((c = D),
                  (u = null != l),
                  (p = b),
                  (m = O),
                  (v = y),
                  (I = A)),
              {
                audio: c,
                video: m,
                screenshare: v,
                liveStage: p,
                activeEvent: u,
                activity: I,
                gaming: a,
                isCurrentUserConnected: s || S,
              }
            );
          },
          [e, n, P, k, a, U, L, w, l, D, O],
        );
      }
    },
    234383: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(937111),
        r = n(430824);
      function a() {
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
        a = n(100621),
        o = n(91192),
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
        E = n(682662),
        S = n(662146),
        Z = n(674552),
        N = n(981631),
        y = n(410357);
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
      let j = { friction: 28, tension: 600 };
      function A(e) {
        switch (e) {
          case "height":
          case "opacity":
            return { duration: 150, ...j };
          case "scale":
            return { ...j };
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
                config: A,
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
            config: A,
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
                config: A,
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
          return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(E.H, {
              children: [
                (0, l.jsx)(b.Z, {
                  hovered: !g && m,
                  selected: !g && n,
                  unread: !g && h,
                  className: y.pill,
                }),
                (0, l.jsx)(S.Z, {
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
                    children: (0, l.jsx)(o.mh, {
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
              controller: new a.Controller({
                scale: 0,
                height: 0,
                opacity: 0,
                config: A,
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
                      n.e("12327"),
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
            a = (0, s.e7)(
              [d.Z],
              () => (null != r ? d.Z.getMode(r) : N.WtW.VOICE),
              [r],
            ),
            o = (0, s.e7)(
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
            f && ((x = a === N.WtW.VOICE), (I = a === N.WtW.VIDEO)),
            (0, l.jsx)(P, {
              ...e,
              ref: t,
              channelName: i,
              unread: u > 0,
              selected: c === n,
              badge: u,
              audio: x,
              video: I,
              stream: o,
              isCurrentUserInThisDMCall: f,
              isGDMFacepileEnabled: h,
            })
          );
        }));
    },
    199540: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(100621),
        s = n(866442),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(565138),
        p = n(430824),
        m = n(624138),
        f = n(674552),
        g = n(981631),
        C = n(388032),
        _ = n(581294);
      let v = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        x = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE);
      function I(e) {
        let { guildId: t, animate: n } = e,
          l = (0, c.e7)([p.Z], () => p.Z.getGuild(t), [t]);
        return null == l
          ? (0, i.jsx)("div", {
              className: _.guildIconUnavailable,
              children: "!",
            })
          : (0, i.jsx)(h.Z, {
              guild: l,
              animate: n,
              size: h.Z.Sizes.SMOL,
              className: _.guildIcon,
              tabIndex: -1,
            });
      }
      function b(e) {
        let t,
          n,
          { folderNode: r, hovered: a, expanded: c } = e,
          { color: u, children: h } = r,
          p = null != u ? u : g.Wyy,
          m = h.map((e) => e.id),
          [f, C] = l.useState(!1),
          [b, E] = l.useState(c),
          S = c ? 0 : -x,
          Z = (0, d.useSpring)(
            {
              transform: "translate3d(0, ".concat(S, "px, 0)"),
              config: { duration: v },
              onStart() {
                C(!0), E(c);
              },
              onRest() {
                C(!1), E(c);
              },
            },
            "animate-always",
          ),
          N = f ? Z : void 0;
        return (
          (f || b) &&
            (t = (0, i.jsx)(o.animated.div, {
              style: N,
              className: _.expandedFolderIconWrapper,
              children: (0, i.jsx)(d.FolderIcon, {
                size: "md",
                color: "currentColor",
                style: { color: (0, s.Rf)(p) },
              }),
            })),
          (f || !b) &&
            (n = (0, i.jsx)(o.animated.div, {
              style: N,
              className: _.closedFolderIconWrapper,
              children: m
                .slice(0, 4)
                .map((e) => (0, i.jsx)(I, { guildId: e, animate: a }, e)),
            })),
          (0, i.jsxs)("div", {
            "aria-hidden": !0,
            style: c ? void 0 : { backgroundColor: (0, s.br)(p, 0.4) },
            className: _.folderIconWrapper,
            children: [t, n],
          })
        );
      }
      function E(e) {
        let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: o,
            mediaState: s,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: h,
            folderIconContent: p,
            onClick: m,
            onContextMenu: g,
            onHoverChange: v,
            onKeyDown: x,
            treeItemProps: { onFocus: I, ...E },
          } = e,
          [S, Z] = l.useState(!1),
          N = l.useCallback(() => {
            o || Z(!0), null == v || v(!0);
          }, [o, v]),
          y = l.useCallback(() => {
            o || Z(!1), null == v || v(!1);
          }, [o, v]),
          T = r || null == s ? null : (0, f.Or)(s),
          j = !r && c > 0 ? (0, f.Ne)(c) : null;
        return (0, i.jsx)(d.BlobMask, {
          selected: !n,
          upperBadge: T,
          lowerBadge: j,
          lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
          children: (0, i.jsx)(d.Clickable, {
            className: a()(_.folder, { [_.hover]: S }),
            onClick: m,
            onContextMenu: g,
            onMouseEnter: N,
            onMouseLeave: y,
            onKeyDown: x,
            onFocus: I,
            "aria-label": C.intl.formatToPlainString(C.t["90/DwM"], {
              folderName: u,
              mentions: c,
            }),
            "aria-expanded": r,
            "aria-owns": h,
            focusProps: { enabled: !1 },
            ...E,
            role: "treeitem",
            children:
              null != p
                ? (0, i.jsx)("div", {
                    className: _.expandedFolderIconWrapper,
                    children: p,
                  })
                : (0, i.jsx)(b, { folderNode: t, hovered: S, expanded: r }),
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
        a = n(100621),
        o = n(692547),
        s = n(481060),
        c = n(565138),
        u = n(252686),
        d = n(581294);
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
        let g = (0, s.useToken)(o.Z.unsafe_rawColors.BRAND_500).hex(),
          C = (0, s.useToken)(o.Z.unsafe_rawColors.PRIMARY_630).hex();
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
                        (0, i.jsx)(a.animated.div, {
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
        a = n.n(r),
        o = n(512722),
        s = n.n(o),
        c = n(584922),
        u = n(749210),
        d = n(626135),
        h = n(727258),
        p = n(662146),
        m = n(981631),
        f = n(388032),
        g = n(863906);
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
        let { name: t, targetNode: n, combine: r, below: o } = e,
          s = l.useMemo(() => _([h.eD.GUILD, h.eD.FOLDER], n, o, r), [n, o, r]),
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
          className: a()(g.target),
        });
      }
      function x(e) {
        let { name: t, targetNode: n, onDragOverChanged: r } = e,
          [{ canDrop: o, isOver: s }, u] = (0, c.L)(() =>
            _([h.eD.GUILD], n, !0, !0),
          );
        l.useEffect(() => {
          null == r || r(s);
        }, [r, s]);
        let d = C([
          [o, g.autoPointerEvents],
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
            className: a()(g.centerTarget, {}),
          }),
        });
      }
      function I(e) {
        let { name: t, targetNode: n } = e,
          [{ canDrop: l, isOver: r }, o] = (0, c.L)(() =>
            _([h.eD.GUILD], n, !0, !0),
          ),
          s = C([[r, g.wrapperOver]]),
          u = C([
            [r, g.dragOver],
            [l, g.autoPointerEvents],
          ]);
        return (0, i.jsx)("div", {
          ref: s,
          className: a()(g.folderEndWrapper),
          "aria-hidden": !0,
          children: (0, i.jsx)("div", {
            className: g.folderTarget,
            children: (0, i.jsx)("div", {
              ref: (e) => {
                (u.current = e), o(e);
              },
              "aria-label": "At end of ".concat(t),
              className: a()(g.target),
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
            onDragOverChanged: a,
          } = e,
          o = !l && null == n.parentId;
        return (0, i.jsxs)("div", {
          className: g.wrapper,
          "aria-hidden": !0,
          children: [
            (0, i.jsx)(v, { name: t, targetNode: n, below: r }),
            o
              ? (0, i.jsx)(x, { name: t, targetNode: n, onDragOverChanged: a })
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
        a = n.n(r),
        o = n(392711),
        s = n.n(o),
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
        I = n(706590),
        b = n(940777),
        E = n(41776),
        S = n(905423),
        Z = n(802718),
        N = n(796974),
        y = n(271383),
        T = n(430824),
        j = n(771845),
        A = n(358085),
        P = n(709054),
        M = n(727258),
        R = n(605951),
        w = n(474109),
        L = n(741616),
        D = n(187835),
        O = n(118122),
        k = n(193154),
        U = n(602147),
        G = n(529474),
        B = n(222059),
        H = n(751277),
        V = n(65721),
        F = n(843343),
        W = n(654142),
        z = n(695301),
        Y = n(836697),
        K = n(921230),
        q = n(981631),
        Q = n(388032),
        J = n(737600);
      function X(e, t, n) {
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
      let $ = 56,
        ee = (0, A.isWindows)() ? 4 : (0, A.isMac)() ? 0 : 12,
        et = $ - 16,
        en = ee + 10;
      class ei {
        setGuildsTree(e) {
          this.guildsTree = e;
        }
        constructor(e, t, n, i) {
          X(this, "guildsTree", void 0),
            X(this, "setScrolling", void 0),
            X(this, "onScroll", void 0),
            X(this, "onScrollStateChanged", void 0),
            X(this, "scrollerRef", void 0),
            X(this, "guildDiscoveryRef", void 0),
            X(this, "nodeRefs", void 0),
            X(this, "timeout", void 0),
            X(this, "isScrolling", void 0),
            X(this, "isNearBottom", void 0),
            X(this, "scrollToGuild", void 0),
            X(this, "handleJumpToGuild", void 0),
            X(this, "scrollTo", void 0),
            X(this, "isItemVisible", void 0),
            X(this, "handleScroll", void 0),
            X(this, "_handleScrollDebounced", void 0),
            X(this, "_handleScrollThrottled", void 0),
            X(this, "setNodeRef", void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.onScrollStateChanged = i),
            (this.scrollerRef = l.createRef()),
            (this.guildDiscoveryRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
            (this.isScrolling = !1),
            (this.isNearBottom = !1),
            (this.scrollToGuild = (e, t) => {
              let n = this.scrollerRef.current;
              if (
                null == n ||
                (null == e &&
                  window.location.pathname.startsWith(q.Z5c.GUILD_DISCOVERY)) ||
                e === q.x8Z.SERVER_DISCOVERY_BADGE ||
                e === q.x8Z.E3_SERVER_DISCOVERY_BADGE
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
              let i = this.scrollerRef.current;
              if (null == i) return !1;
              let l = n.findIndex((t) =>
                "string" == typeof t || null == t ? t === e : t.includes(e),
              );
              if (l < 0) return !1;
              let r = $ * l + en;
              !t && (r += et);
              let a = i.getScrollerState();
              return (
                (!t && !!(r >= a.scrollTop)) ||
                (!!t && !!(r + $ <= a.scrollTop + a.offsetHeight)) ||
                !1
              );
            }),
            (this.handleScroll = () => {
              !this.isScrolling && this.setScrolling(!0),
                this.timeout.start(200, () => this.setScrolling(!1)),
                this._handleScrollDebounced(),
                this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = s().debounce(() => {
              let e = this.scrollerRef.current;
              if (null == e) return;
              let { scrollTop: t } = e.getScrollerState();
              g.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = s().throttle(() => {
              let e = this.scrollerRef.current;
              if (null == e) return;
              let {
                  scrollTop: t,
                  scrollHeight: n,
                  offsetHeight: i,
                } = e.getScrollerState(),
                l = t + i >= n - 24;
              l !== this.isNearBottom &&
                ((this.isNearBottom = l),
                this.onScrollStateChanged({ isNearBottom: l }));
            }, 100)),
            (this.setNodeRef = (e, t) => {
              this.nodeRefs[e] = t;
            });
        }
      }
      function el(e) {
        let {
            disableAppDownload: t = A.isPlatformEmbedded,
            isOverlay: n = !1,
            className: r,
            themeOverride: o,
          } = e,
          [s] = (0, h.Wu)([j.ZP], () => {
            let e = j.ZP.getGuildsTree();
            return [e, e.version];
          }),
          d = (0, h.e7)([E.Z], () => E.Z.lurkingGuildIds()),
          p = l.useMemo(() => (n ? [] : d), [d, n]),
          g = (0, h.Wu)([T.Z, y.ZP], () =>
            P.default
              .keys(T.Z.getGuilds())
              .filter((e) => y.ZP.isCurrentUserGuest(e)),
          ),
          C = p.concat(g),
          X = (0, h.e7)([x.Z], () => x.Z.isFullscreenInContext()),
          $ = (0, h.e7)([T.Z], () => T.Z.getGeoRestrictedGuilds()),
          [ee, et] = l.useState(!1),
          en = l.useCallback(() => et(!0), []),
          el = l.useCallback(() => et(!1), []),
          er = l.useRef(!1),
          [ea] = l.useState(() => new m.V7()),
          eo = l.useRef(null),
          es = l.useRef(null),
          [ec, eu] = l.useState(!1),
          { ref: ed, ...eh } = (0, u.OP)(),
          ep = (0, f.useFocusJumpSection)(),
          [em, ef] = l.useState(!1),
          eg = l.useMemo(
            () =>
              new ei(
                s,
                ef,
                () => {
                  var e, t;
                  null === (e = eo.current) ||
                    void 0 === e ||
                    e.calculateState(),
                    null === (t = es.current) ||
                      void 0 === t ||
                      t.calculateState();
                },
                (e) => {
                  let { isNearBottom: t } = e;
                  eu(t);
                },
              ),
            [s],
          ),
          { analyticsLocations: eC } = (0, v.ZP)(_.Z.GUILDS_LIST),
          { pathname: e_ } = (0, c.TH)(),
          ev =
            e_.startsWith(q.Z5c.GUILD_DISCOVERY) ||
            e_.startsWith(q.Z5c.GLOBAL_DISCOVERY),
          ex = e_.startsWith(q.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        l.useLayoutEffect(() => {
          if (!er.current) {
            if (0 !== s.size) {
              if (ev) eg.scrollToGuild(null, !1);
              else {
                let { scrollTop: e } = N.Z.getGuildListDimensions();
                eg.scrollTo({ to: e, animate: !1 });
              }
              return (er.current = !0), () => ea.stop();
            }
          }
        }, []),
          l.useEffect(() => {
            if ((eg.setGuildsTree(s), er.current || 0 === s.size)) return;
            let e = S.Z.getState().guildId;
            eg.scrollToGuild(e, !1);
            let t = null;
            return S.Z.subscribe((e) => {
              let { guildId: n } = e;
              n !== t && ((t = n), eg.scrollToGuild(t, !1));
            });
          }, [s, eg]);
        let eI = l.useCallback(() => {
          eg.scrollTo({ to: 0, animate: !1 });
        }, [eg]);
        function eb(e) {
          switch (e.type) {
            case M.eD.FOLDER:
              return (0, i.jsx)(
                W.Z,
                {
                  folderNode: e,
                  setNodeRef: eg.setNodeRef,
                  draggable: !0,
                  sorting: ee,
                  onDragStart: en,
                  onDragEnd: el,
                  renderChildNode: eb,
                },
                e.id,
              );
            case M.eD.GUILD:
              return (0, i.jsx)(
                z.Z,
                {
                  guildNode: e,
                  setRef: eg.setNodeRef,
                  draggable: !0,
                  sorting: ee,
                  onDragStart: en,
                  onDragEnd: el,
                },
                e.id,
              );
            default:
              return null;
          }
        }
        (0, R.Z)(eg.scrollToGuild);
        let eE = s.getRoots(),
          eS = (0, I.Z)(),
          eZ = (0, Z.U)(),
          eN = $.map((e) =>
            (0, i.jsx)(k.Z, { id: e.id, name: e.name, icon: e.icon }, e.id),
          );
        return (0, i.jsx)(v.Gt, {
          value: eC,
          children: (0, i.jsx)(f.ThemeProvider, {
            theme: o,
            children: (e) =>
              (0, i.jsx)("nav", {
                className: a()(J.wrapper, r, e, { [J.hidden]: X }),
                "aria-label": Q.intl.string(Q.t.PjnF2t),
                children: (0, i.jsxs)("ul", {
                  ref: ed,
                  ...eh,
                  ...ep,
                  role: "tree",
                  className: J.tree,
                  children: [
                    (0, i.jsx)(w.Z, {
                      ref: eo,
                      isVisible: eg.isItemVisible,
                      onJumpTo: eg.handleJumpToGuild,
                      className: J.unreadMentionsIndicatorTop,
                      barClassName: J.unreadMentionsBar,
                    }),
                    (0, i.jsxs)(f.AdvancedScrollerNone, {
                      className: a()({ [J.scroller]: !0, [J.scrolling]: em }),
                      ref: eg.scrollerRef,
                      onScroll: eg.handleScroll,
                      children: [
                        (0, i.jsx)(B.u, {}),
                        eS ? (0, i.jsx)(b.Z, {}) : null,
                        (0, i.jsx)(H.Z, { isOnHubVerificationRoute: ex }),
                        (0, i.jsx)(L.Z, {}),
                        eZ,
                        C.map((e) => (0, i.jsx)(K.Z, { guildId: e }, e)),
                        (0, i.jsx)(Y.Z, { onActivate: eI }),
                        (0, i.jsx)(V.Z, {}),
                        (0, i.jsx)("div", {
                          "aria-label": Q.intl.string(Q.t["7hB4kp"]),
                          children: eE.map(eb),
                        }),
                        eN,
                        n
                          ? null
                          : (0, i.jsx)(O.Z, {
                              disableTooltip: p.length > 0,
                              lastTargetNode: eE[eE.length - 1],
                            }),
                        (0, i.jsx)(F.Z, {}),
                        t
                          ? null
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(V.Z, {}),
                                (0, i.jsx)(D.Z, {}),
                              ],
                            }),
                      ],
                    }),
                    n
                      ? null
                      : (0, i.jsx)(G.L, {
                          hideGradient: ec,
                          children: (0, i.jsx)(U.Z, {
                            ref: eg.guildDiscoveryRef,
                            selected: ev,
                            className: J.fixedDiscoveryIcon,
                          }),
                        }),
                    (0, i.jsx)(w.Z, {
                      reverse: !0,
                      ref: es,
                      isVisible: eg.isItemVisible,
                      onJumpTo: eg.handleJumpToGuild,
                      className: a()(J.unreadMentionsIndicatorBottom, {
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
            children: (0, i.jsx)(el, { ...e }),
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
        a = n(686546),
        o = n(406653);
      function s(e) {
        let { className: t } = e;
        return (0, i.jsx)(a.ZP, {
          mask: a.ZP.Masks.SQUIRCLE,
          className: r()(t, o.placeholderMask),
          width: 48,
          height: 48,
          style: { display: "block" },
          children: (0, i.jsx)("div", { className: o.dragInner }),
        });
      }
    },
    474109: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(256916),
        o = n(664915),
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
          d = (0, r.e7)([o.Z], () => o.Z.getExpandedFolders());
        return (0, i.jsx)(a.Z, {
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
        a = n(215569),
        o = n(592125),
        s = n(358652),
        c = n(19780),
        u = n(919436);
      function d() {
        (0, r.e7)([o.Z], () => o.Z.getPrivateChannelsVersion());
        let e = o.Z.getMutablePrivateChannels(),
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
          (0, i.jsx)(a.W, { component: l.Fragment, children: h })
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
        a = n(388032);
      let o = "DOWNLOAD_APPS";
      function s() {
        let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, o));
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
              { modalKey: o },
            );
          },
          selected: e,
          tooltip: a.intl.string(a.t.Z7jwrK),
          icon: l.DownloadIcon,
        });
      }
    },
    603592: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(91192),
        s = n(481060),
        c = n(276952),
        u = n(682662),
        d = n(662146),
        h = n(69517);
      let p = l.forwardRef(function (e, t) {
        let {
            id: n,
            onClick: r,
            onContextMenu: p,
            icon: m,
            selected: f,
            tooltip: g,
            upperBadge: C,
            lowerBadge: _,
            lowerBadgeSize: v,
            showPill: x = !0,
            className: I,
            "aria-label": b,
            children: E,
            onMouseEnter: S,
            onMouseLeave: Z,
            onMouseDown: N,
          } = e,
          y = (0, o.Ie)(n),
          [T, j] = l.useState(!1),
          A = "string" == typeof g && null == b ? g : b;
        return (0, i.jsxs)(u.H, {
          children: [
            x
              ? (0, i.jsx)("div", {
                  className: h.pill,
                  children: (0, i.jsx)(c.Z, { hovered: T, selected: f }),
                })
              : null,
            (0, i.jsx)(d.Z, {
              text: g,
              selected: f,
              children: (0, i.jsx)(s.BlobMask, {
                className: h.__invalid_circleButtonMask,
                selected: f || T,
                upperBadge: C,
                lowerBadge: _,
                lowerBadgeSize: v,
                children: (0, i.jsx)(s.Clickable, {
                  innerRef: t,
                  onMouseEnter: () => {
                    null == S || S(), j(!0);
                  },
                  onMouseLeave: () => {
                    null == Z || Z(), j(!1);
                  },
                  onMouseDown: N,
                  className: a()(h.circleIconButton, I, {
                    [h.selected]: f || T,
                  }),
                  onClick: r,
                  "aria-label": A,
                  onContextMenu: p,
                  focusProps: { enabled: !1 },
                  ...y,
                  children:
                    null != m &&
                    (0, i.jsx)(m, {
                      className: h.circleIcon,
                      color: "currentColor",
                    }),
                }),
              }),
            }),
            E,
          ],
        });
      });
      t.Z = p;
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
        a = n(481060),
        o = n(239091),
        s = n(906732),
        c = n(560067),
        u = n(451603),
        d = n(885714),
        h = n(155409),
        p = n(430824),
        m = n(594174),
        f = n(40153),
        g = n(603592),
        C = n(981631),
        _ = n(675999),
        v = n(388032),
        x = n(411384);
      let I = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function b(e) {
        (0, o.jW)(e, async () => {
          let { default: e } = await n.e("9606").then(n.bind(n, 987578));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function E(e) {
        let { disableTooltip: t, lastTargetNode: n } = e,
          o = (0, r.e7)([p.Z], () => p.Z.getGuilds()),
          E = l.useMemo(() => Object.values(o), [o]),
          S = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
          Z = l.useMemo(() => E.some((e) => e.isOwner(S)), [E, S]),
          N = (0, a.useModalsStore)((e) =>
            (0, a.hasModalOpenSelector)(e, _.PU),
          ),
          { analyticsLocations: y } = (0, s.ZP)(),
          T = (0, a.useRedesignIconContext)().enabled,
          j = (0, i.jsx)(g.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
              (0, u.yU)()
                ? (0, d.Z)({
                    analyticsSource: { page: C.Sbl.CREATE_JOIN_GUILD_MODAL },
                    analyticsLocation: {
                      page: C.Sbl.CREATE_JOIN_GUILD_MODAL,
                      section: C.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: y,
                  })
                : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: N,
            onContextMenu: b,
            tooltip: v.intl.string(v.t.l5WIbW),
            icon: T ? a.PlusMediumIcon : a.PlusSmallIcon,
          });
        return t
          ? j
          : (0, i.jsx)("div", {
              className: x.tutorialContainer,
              children: (0, i.jsxs)(h.Z, {
                tutorialId: Z ? "create-more-servers" : "create-first-server",
                inlineSpecs: I,
                position: "right",
                children: [
                  j,
                  null != n &&
                    (0, i.jsx)(f.ZP, {
                      name: v.intl.string(v.t["45xjMz"]),
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
        a = n.n(r),
        o = n(999153),
        s = n(100621),
        c = n(91192),
        u = n(477690),
        d = n(481060),
        h = n(153867),
        p = n(771845),
        m = n(624138),
        f = n(727258),
        g = n(276952),
        C = n(199540),
        _ = n(40153),
        v = n(252686),
        x = n(682662),
        I = n(662146),
        b = n(388032),
        E = n(581294),
        S = n(83296);
      let Z = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        N = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
        y = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
      function T(e) {
        let {
            folderNode: t,
            setNodeRef: n,
            selected: r,
            expanded: u,
            mediaState: m,
            mentionCount: T = 0,
            unread: j = !1,
            defaultFolderName: A,
            useCircleMask: P = !1,
            draggable: M = !1,
            sorting: R = !1,
            onDragStart: w,
            onDragEnd: L,
            onExpandCollapse: D,
            onContextMenu: O,
            renderChildNode: k,
            folderIconContent: U,
          } = e,
          { id: G, name: B, children: H } = t,
          [V, F] = l.useState(!1),
          [W, z] = l.useState(!1),
          Y = V || W;
        l.useEffect(() => {
          R && F(!1);
        }, [R]);
        let [{ dragging: K }, q] = (0, o.c)({
            type: f.eD.FOLDER,
            item: () => (null == w || w(), { type: f.eD.FOLDER, nodeId: t.id }),
            end() {
              null == L || L(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          Q = l.useCallback((e) => {
            z(e);
          }, []),
          J = l.useCallback(
            (e) => {
              (("ArrowRight" === e.key && !u) ||
                ("ArrowLeft" === e.key && u)) &&
                D();
            },
            [D, u],
          ),
          X =
            null != B && "" !== B
              ? B
              : null != A && "" !== A
                ? A
                : b.intl.string(b.t.xV9hVl),
          $ = (0, c.Ie)("".concat(G)),
          ee = "folder-items-".concat(G),
          et = H.length * (N + y),
          en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: Z },
          }),
          ei = l.useCallback((e) => (null == n ? void 0 : n(G, e)), [n, G]),
          el = (0, i.jsxs)(x.H, {
            children: [
              (0, i.jsx)(g.Z, {
                disabled: K || u,
                hovered: V,
                selected: r,
                unread: j,
                className: S.pill,
              }),
              (0, i.jsx)(I.Z, {
                text: X,
                disabled: R,
                selected: r,
                disableWrapper: !0,
                children: (0, i.jsx)("div", {
                  ref: M ? q : void 0,
                  className: a()({ [S.wobble]: !K && W && !u }),
                  "data-dnd-name": X,
                  children: K
                    ? (0, i.jsx)(v.Z, {})
                    : (0, i.jsx)(C.Z, {
                        folderNode: t,
                        expanded: u,
                        forceCircular: P,
                        sorting: R,
                        mediaState: m,
                        mentionCount: T,
                        tooltipName: X,
                        folderGroupId: ee,
                        onClick: D,
                        onContextMenu: O,
                        onHoverChange: F,
                        onKeyDown: J,
                        treeItemProps: $,
                        folderIconContent: U,
                      }),
                }),
              }),
              M
                ? (0, i.jsx)(_.ZP, {
                    name: X,
                    targetNode: t,
                    onDragOverChanged: Q,
                  })
                : null,
            ],
          });
        return (0, i.jsxs)("div", {
          ref: ei,
          className: E.wrapper,
          children: [
            !K &&
              (0, i.jsx)("span", {
                className: a()(E.expandedFolderBackground, {
                  [E.collapsed]: !u,
                  [E.hover]: Y,
                }),
              }),
            el,
            en((e, t, n) => {
              let { key: l } = n;
              return (
                t &&
                (0, i.jsx)(
                  s.animated.ul,
                  {
                    id: ee,
                    style: { height: e.height.to((e) => e * et) },
                    className: E.__invalid_expandedGuilds,
                    role: "group",
                    children: H.map(k),
                  },
                  l,
                )
              );
            }),
            M && u ? (0, i.jsx)(_.Zu, { name: X, targetNode: t }) : null,
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
        a = n(460562),
        o = n(768581),
        s = n(682662),
        c = n(662146),
        u = n(616657);
      function d(e) {
        let [t, d] = l.useState(!1);
        return (0, i.jsx)(s.H, {
          children: (0, i.jsx)(c.Z, {
            text: e.name,
            children: (0, i.jsx)(r.BlobMask, {
              className: u.circleIconButton,
              selected: t,
              lowerBadge: (0, i.jsx)(r.IconBadge, {
                icon: (0, r.makeIconCompat)(a.Z),
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
                    ? o.ZP.getGuildIconURL({
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
        a = n(481060),
        o = n(571457),
        s = n(836768),
        c = n(749681),
        u = n(603592),
        d = n(49898),
        h = n(128449),
        p = n(46140),
        m = n(388032);
      let f = l.forwardRef(function (e, t) {
        let { selected: n, className: f } = e,
          g = l.useCallback(() => {
            (0, o.k5)({ source: d.JU.GUILDS_BAR_ICON });
            let e = s.Z.getField("selectedTab");
            switch (e) {
              case d.F$.QUESTS:
                return (0, c.u)({
                  tab: d.F$.QUESTS,
                  location: p.dr.DISCOVERY_COMPASS,
                  questContent: r.j.DISCOVERY_COMPASS,
                });
              case d.F$.SERVERS:
                return (0, c.u)({
                  tab: d.F$.SERVERS,
                  entrypoint: h.Qq.GUILDS_BAR,
                });
              default:
                return (0, c.u)({ tab: e });
            }
          }, []);
        return (0, i.jsx)(u.Z, {
          id: "guild-discover-button",
          ref: t,
          className: f,
          onClick: g,
          selected: n,
          tooltip: m.intl.string(m.t["4nEZLi"]),
          icon: a.CompassIcon,
        });
      });
      t.Z = f;
    },
    325257: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(999153),
        s = n(91192),
        c = n(399606),
        u = n(846519),
        d = n(481060),
        h = n(493683),
        p = n(239091),
        m = n(153867),
        f = n(35225),
        g = n(703656),
        C = n(769654),
        _ = n(271383),
        v = n(771845),
        x = n(727258),
        I = n(276952),
        b = n(249792),
        E = n(40153),
        S = n(593618),
        Z = n(252686),
        N = n(682662),
        y = n(674552),
        T = n(981631),
        j = n(388032),
        A = n(83296);
      let P = {
        analyticsSource: {
          page: T.ZY5.GUILD_CHANNEL,
          section: T.jXE.CHANNEL_LIST,
          object: T.qAy.CHANNEL,
        },
      };
      function M(e, t) {
        (0, p.jW)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("33053"),
            n.e("15669"),
            n.e("7654"),
            n.e("42587"),
            n.e("44156"),
            n.e("16141"),
            n.e("85552"),
            n.e("58227"),
            n.e("16114"),
            n.e("28356"),
            n.e("73747"),
            n.e("33213"),
            n.e("60430"),
          ]).then(n.bind(n, 545135));
          return (n) => (0, i.jsx)(e, { ...n, guild: t });
        });
      }
      t.Z = l.memo(function (e) {
        var t, n, r, p, R;
        let {
            guildNode: w,
            setRef: L,
            onDragStart: D,
            onDragEnd: O,
            route: k,
            guild: U,
            animatable: G,
            selected: B = !1,
            unread: H = !1,
            mediaState: V,
            unavailable: F = !1,
            badge: W = 0,
            contextMenu: z = M,
            draggable: Y = !1,
            sorting: K = !1,
            preloadOnClick: q = !0,
            guildJoinRequestStatus: Q,
          } = e,
          { id: J, parentId: X } = w,
          $ =
            null !== (t = e.upperBadge) && void 0 !== t
              ? t
              : F
                ? (0, y.Ny)()
                : null != V
                  ? (0, y.Or)(V)
                  : void 0,
          ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
        null == ee && W > 0
          ? (ee = null !== (r = (0, y.Ne)(W)) && void 0 !== r ? r : void 0)
          : null == ee &&
            null != Q &&
            (ee =
              null !== (p = (0, y.jt)({ guildJoinRequestStatus: Q })) &&
              void 0 !== p
                ? p
                : void 0);
        let et =
            null !== (R = e.lowerBadgeSize) && void 0 !== R
              ? R
              : { width: (0, d.getBadgeWidthForValue)(W) },
          [{ dragging: en }, ei] = (0, o.c)({
            type: x.eD.GUILD,
            item: () => (
              requestAnimationFrame(() => {
                null == D || D();
              }),
              { type: w.type, nodeId: w.id }
            ),
            end() {
              null == O || O(), (0, m.V1)(v.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          el = (0, s.Ie)(null != J ? J : T.lds),
          [er, ea] = l.useState(!1),
          eo = !K && er,
          [es, ec] = l.useState(!1),
          [eu, ed] = l.useState(!1),
          [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
        l.useEffect(() => () => eh.cancel(), [eh]);
        let ep = l.useCallback(() => {
            if (null != k) {
              (0, g.uL)(k, { state: P });
              return;
            }
            (0, C.X)(J, { state: P });
          }, [J, k]),
          em = l.useCallback(() => {
            if (null != k || null == U || F || !q) return;
            let e = (0, f.V)(U.id);
            if (null != e) h.Z.preload(U.id, e);
          }, [k, U, F, q]),
          ef = (0, c.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(J)),
          eg = l.useCallback(
            (e) => {
              null != U && !ef && z(e, U);
            },
            [U, z, ef],
          ),
          eC = l.useCallback(
            (e) => {
              if ("ArrowLeft" === e.key && null != X) {
                var t;
                null ===
                  (t = document.querySelector(
                    "[aria-owns=folder-items-".concat(X, "]"),
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [X],
          ),
          e_ = l.useCallback(
            (e) => {
              if (e) {
                eh.delay();
                return;
              }
              eh.cancel(), ed(!1);
            },
            [eh],
          ),
          ev = l.useCallback(
            (e) => {
              null == L || L(J, e);
            },
            [J, L],
          );
        if (null == U) return null;
        let ex =
            eu || es
              ? (0, i.jsx)(b.Z, {
                  guild: U,
                  show: eu,
                  active: B,
                  onAnimationStart: function () {
                    ec(eu);
                  },
                  onAnimationRest: function () {
                    eu || ec(!1);
                  },
                })
              : (0, i.jsx)(d.NavItem, {
                  ariaLabel: j.intl.formatToPlainString(j.t["/uzRsr"], {
                    guildName: U.toString(),
                    mentions: W,
                  }),
                  name: U.toString(),
                  onClick: ep,
                  onMouseEnter: function () {
                    K || ea(!0);
                  },
                  onMouseLeave: function () {
                    K || ea(!1);
                  },
                  onMouseDown: em,
                  onContextMenu: eg,
                  onKeyDown: eC,
                  icon: U.getIconURL(96, eo && G),
                  selected: B || eo,
                  ...el,
                  role: "treeitem",
                }),
          eI = en
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(Z.Z, {}) })
            : (0, i.jsx)("div", {
                ref: Y ? ei : void 0,
                "data-dnd-name": U.toString(),
                className: a()(A.blobContainer, {
                  [A.sorting]: K,
                  [A.wobble]: eu,
                  [A.selected]: eu || B,
                }),
                children: (0, i.jsx)(d.BlobMask, {
                  selected: eu || B || eo,
                  upperBadge: $,
                  lowerBadge: ee,
                  lowerBadgeSize: et,
                  children: ex,
                }),
              });
        return (0, i.jsxs)(N.H, {
          ref: ev,
          children: [
            (0, i.jsx)(I.Z, {
              hovered: !en && eo,
              selected: !en && B,
              unread: !en && H,
              className: A.pill,
            }),
            (0, i.jsx)(S.Z, {
              guild: U,
              disabled: K,
              isDragging: en,
              children: eI,
            }),
            Y
              ? (0, i.jsx)(E.ZP, {
                  name: U.name,
                  targetNode: w,
                  onDragOverChanged: e_,
                })
              : null,
          ],
        });
      });
    },
    529474: function (e, t, n) {
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(893295);
      function o(e) {
        let { hideGradient: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: a.footer,
          children: [
            (0, i.jsx)("div", {
              className: r()(a.gradient, { [a.gradientHidden]: t }),
            }),
            n,
          ],
        });
      }
    },
    222059: function (e, t, n) {
      n.d(t, {
        u: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(91192),
        a = n(442837),
        o = n(433517),
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
        E = n(278464),
        S = n(276952),
        Z = n(682662),
        N = n(662146),
        y = n(674552),
        T = n(981631),
        j = n(474936),
        A = n(871465),
        P = n(388032),
        M = n(196342);
      let R = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function w(e) {
        let {
            selected: t,
            user: n,
            badge: h,
            link: m,
            showProgressBadge: f,
          } = e,
          g = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
          [C, _] = l.useState(!1),
          [v, x] = l.useState(!1),
          [I, E] = l.useState(null),
          [j, w] = l.useState(0),
          L = (0, r.Ie)("home"),
          D = () => {
            E(null), w(0), clearTimeout(I);
          };
        if (null == n) return null;
        let O = P.intl.string(P.t.YUU0RE);
        v &&
          (O = o.K.get(T.wli)
            ? P.intl.string(P.t.nkq1l5)
            : P.intl.string(P.t.Be8Q5O));
        let k = null;
        !t &&
          f &&
          (k = (0, i.jsx)(c.Z, {
            className: M.downloadProgress,
            determineOwnVisibility: !1,
          }));
        let U = t || C || g,
          G = (0, i.jsx)(s.BlobMask, {
            selected: U,
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
                  E(setTimeout(D, 500)),
                  w(j + 1),
                  15 === j)
                ) {
                  D();
                  let e = !o.K.get(T.wli);
                  o.K.set(T.wli, e),
                    e && o.K.set(A.O5, !0),
                    e ? (0, b.GN)("discodo") : (0, b.GN)("user_leave"),
                    x(!0),
                    setTimeout(() => {
                      x(!1);
                    }, 1e3);
                }
              },
              selected: U,
              ariaLabel: P.intl.string(P.t.YUU0RE),
              ...L,
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
          className: M.tutorialContainer,
          children: (0, i.jsx)(p.Z, {
            inlineSpecs: R,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(Z.H, {
              children: [
                (0, i.jsx)(S.Z, { selected: t, hovered: C, className: M.pill }),
                (0, i.jsx)(N.Z, {
                  color: s.Tooltip.Colors.PRIMARY,
                  hideOnClick: !0,
                  text: O,
                  selected: t,
                  children: G,
                }),
              ],
            }),
          }),
        });
      }
      function L() {
        let e = (0, E.n)(),
          t = (0, a.e7)([x.Z, v.Z], () => {
            let e = (0, c.E)(x.Z.activeItems, v.Z),
              { total: t, progress: n } = I.lK(e),
              i = I.xI(n, t);
            return i > 0 && i < 100;
          }),
          n = (0, a.e7)([m.Z], () => m.Z.getPendingCount()),
          l = Object.keys(j.nG),
          { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)(
            [C.Z],
            () => ({
              unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
              unviewedDiscountCount:
                C.Z.getUnacknowledgedDiscountOffers().length,
            }),
          ),
          s = r + o,
          u = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
          d = (0, h.q)(),
          p = n + s + d,
          b = p === s && s > 0 && n + d === 0,
          S = _.Z.getHomeLink();
        return (
          b && (S = T.Z5c.APPLICATION_STORE),
          (0, i.jsx)(w, {
            selected: e,
            user: u,
            selectedChannelId: f.Z.getChannelId(T.ME),
            badge: p,
            link: S,
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
        a = n(481060),
        o = n(893607),
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
                o.Hw.guildId(),
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
                icon: a.HubIcon,
              })
          : null;
      }
    },
    682662: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(411384);
      let a = l.forwardRef((e, t) => {
        let { children: n } = e;
        return (0, i.jsx)("div", {
          className: r.listItem,
          ref: t,
          children: n,
        });
      });
      a.displayName = "ListItem";
    },
    662146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(862474);
      function c(e) {
        let {
          children: t,
          text: n,
          color: r,
          disableWrapper: c = !1,
          disabled: u = !1,
          hideOnClick: d = !0,
          shouldShow: h,
          forceOpen: p,
          selected: m = !1,
          tooltipClass: f,
          tooltipContentClass: g,
        } = e;
        return (0, i.jsx)(o.Tooltip, {
          shouldShow: h,
          forceOpen: p,
          spacing: 20,
          hideOnClick: d,
          text: u ? null : n,
          position: "right",
          color: r,
          "aria-label": !1,
          tooltipClassName: a()(s.listItemTooltip, f),
          tooltipContentClassName: g,
          children: (e) =>
            c
              ? l.cloneElement(l.Children.only(t), { ...e })
              : (0, i.jsx)("div", {
                  className: a()(s.listItemWrapper, { [s.selected]: m }),
                  ...e,
                  children: t,
                }),
        });
      }
    },
    65721: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(682662),
        r = n(553835);
      function a() {
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
        a = n(299379),
        o = n(486472),
        s = n(430824),
        c = n(682662),
        u = n(662146),
        d = n(981631),
        h = n(388032),
        p = n(517708);
      function m() {
        let e = (0, l.e7)(
          [o.Z, s.Z],
          () =>
            o.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length,
        );
        return e <= 0
          ? null
          : (0, i.jsx)(c.H, {
              children: (0, i.jsx)(u.Z, {
                text: h.intl.format(h.t["TnH05+"], { count: e }),
                color: r.Tooltip.Colors.RED,
                children: (0, i.jsx)(r.Anchor, {
                  href: (0, a.Z)(d.RK.TWITTER),
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
          return p;
        },
        Ny: function () {
          return m;
        },
        Or: function () {
          return f;
        },
        jt: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        o = n(44315),
        s = n(246364),
        c = n(460562),
        u = n(510601),
        d = n(981631),
        h = n(411384);
      function p(e, t) {
        return (0, i.jsx)(a.NumberBadge, { count: e, color: t });
      }
      function m() {
        return (0, i.jsx)(a.IconBadge, {
          icon: (0, a.makeIconCompat)(c.Z),
          disableColor: !0,
          className: h.unavailableBadge,
        });
      }
      function f(e) {
        let t,
          {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: r,
            liveStage: o,
            activeEvent: s,
            activity: c,
            gaming: d,
          } = e,
          h = (0, u.vg)("Guild Icon", !1);
        if (
          (!s &&
            !o &&
            !c &&
            !l &&
            !i &&
            d &&
            u.ZP.trackExposure({ location: "Guild Icon" }),
          s)
        )
          t = a.CalendarIcon;
        else if (o) t = a.StageIcon;
        else if (c) t = a.ActivitiesIcon;
        else if (l) t = a.ScreenIcon;
        else if (i) t = a.VideoIcon;
        else if (d && h) t = a.GameControllerIcon;
        else {
          if (!n) return null;
          t = a.VoiceNormalIcon;
        }
        return C({ icon: t, isCurrentUserConnected: r });
      }
      function g(e) {
        let { guildJoinRequestStatus: t } = e,
          [n, i] = (function (e) {
            switch (e) {
              case s.wB.SUBMITTED:
                return [void 0, a.ClockIcon];
              case s.wB.REJECTED:
                return [d.Ilk.RED_400, a.XSmallIcon];
              case s.wB.APPROVED:
                return [d.Ilk.GREEN_360, a.CheckmarkLargeIcon];
              default:
                return [void 0, a.PencilIcon];
            }
          })(t);
        return C({ icon: i, color: n });
      }
      function C(e) {
        let { icon: t, color: n, isCurrentUserConnected: l } = e,
          s = null == n ? { disableColor: !0 } : { color: (0, o.Lq)(n) };
        return (0, i.jsx)(a.IconBadge, {
          icon: t,
          className: r()(h.iconBadge, { [h.isCurrentUserConnected]: l }),
          ...s,
        });
      }
    },
    654142: function (e, t, n) {
      n(653041), n(47120), n(724458);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(239091),
        o = n(749210),
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
          E = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(C)),
          S = (function (e) {
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
            o.Z.toggleGuildFolderExpand(C);
          }, [C]),
          j = l.useCallback(
            (e) => {
              (0, a.jW)(e, async () => {
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
          expanded: E,
          selected: null != b && I.includes(b),
          mentionCount: N,
          unread: y,
          mediaState: Z,
          defaultFolderName: S,
          onExpandCollapse: T,
          onContextMenu: j,
        });
      });
    },
    695301: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(746916),
        s = n(965638),
        c = n(905423),
        u = n(486472),
        d = n(888369),
        h = n(430824),
        p = n(451478),
        m = n(61634),
        f = n(325257),
        g = n(390576);
      t.Z = l.memo(function (e) {
        let { guildNode: t, lowerBadge: n } = e,
          C = t.id,
          _ = (0, r.e7)([h.Z], () => h.Z.getGuild(C)),
          v = (0, o.E)(_),
          x = (0, r.e7)([p.Z], () => p.Z.isFocused()),
          I = (0, r.e7)([u.Z], () => u.Z.isUnavailable(C)),
          b = (0, c.Z)((e) => e.guildId),
          E = (0, m.Z)(C),
          { badge: S, unread: Z } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(C),
            unread: d.default.hasUnread(C),
          })),
          N = (0, s.I)(_) && 0 === S,
          y = l.useMemo(
            () =>
              null != n
                ? n
                : N
                  ? (0, i.jsx)("div", {
                      className: g.pauseBackground,
                      children: (0, i.jsx)(a.PauseIcon, {
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
          badge: S,
          lowerBadge: y,
          unread: Z,
          mediaState: E,
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
        a = n(451478),
        o = n(727258),
        s = n(325257),
        c = n(981631);
      function u(e) {
        let { guild: t, invite: n } = e,
          u = l.useMemo(() => (0, o.Mg)(t.id), [t.id]),
          d = (0, r.e7)([a.Z], () => a.Z.isFocused());
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
        a = n(246364),
        o = n(937111),
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
          r = (0, l.e7)([o.Z], () => o.Z.getRequest(n)),
          m = (0, l.e7)([o.Z], () => o.Z.getJoinRequestGuild(n), [n]),
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
                (null == r ? void 0 : r.applicationStatus) === a.wB.REJECTED
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
        a = n(481060),
        o = n(110924),
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
        _ = n(33321);
      function v(e) {
        let { onActivate: t, children: n } = e,
          s = (0, r.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
          d = l.useCallback(() => {
            c.ZP.clearCoachmark();
          }, []),
          h = (0, o.Z)(s),
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
              (0, i.jsx)(a.Popout, {
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
                              (0, i.jsx)(a.Heading, {
                                variant: "heading-md/medium",
                                children: C.intl.string(C.t.fRUGzs),
                              }),
                              (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t.ja0Tg4),
                              }),
                            ],
                          }),
                          (0, i.jsx)(a.Button, {
                            fullWidth: !0,
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.BRAND,
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
          E = (0, m.Z)(),
          S = (0, o.Z)(I),
          Z = l.useMemo(() => {
            let e = (0, p.qQ)({
              folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
              folderName: C.intl.string(C.t["scsU+v"]),
              expanded: n,
              guildIds: [],
            });
            for (let t of E) e.children.push((0, p.Mg)(t, e.id));
            return e;
          }, [E, n]);
        l.useEffect(() => {
          n && !b && s.Z.fetchRequestToJoinGuilds();
        }, [n, b]);
        let N = null != I && E.includes(I);
        return (l.useEffect(() => {
          !n && N && S !== I && x(!0);
        }, [n, N, S, I]),
        0 === E.length)
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
                folderIconContent: (0, i.jsx)(a.HourglassIcon, {
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
        a = n(905423),
        o = n(430824),
        s = n(451478),
        c = n(727258),
        u = n(61634),
        d = n(325257);
      function h(e) {
        let { guildId: t } = e,
          n = l.useMemo(() => (0, c.Mg)(t), [t]),
          h = (0, r.e7)([o.Z], () => o.Z.getGuild(t)),
          p = (0, r.e7)([s.Z], () => s.Z.isFocused()),
          m =
            t ===
            (0, a.Z)((e) => {
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
        a = n(199902),
        o = n(19780),
        s = n(979651);
      function c(e) {
        var t;
        let n = (0, l.e7)([o.Z], () => o.Z.getGuildId()),
          c = e.children.map((e) => e.id),
          u = null != n && c.includes(n),
          d = !1,
          h = !1,
          p = !1,
          m = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
          f = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
          g = null != f && c.includes(f),
          C = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
          _ = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
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
      n(460562), n(455491);
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
        a = n(306680),
        o = n(709054);
      function s(e) {
        return (0, i.e7)(
          [l.Z, a.ZP],
          () => {
            var t;
            if (null == e) return 0;
            let n = a.ZP.ackMessageId(e.id);
            if (null == n) return 0;
            let i = Object.values(
              null !== (t = l.Z.getDirectoryEntries(e.id)) && void 0 !== t
                ? t
                : {},
            ).filter((e) => {
              let t = new Date(e.createdAt).getTime();
              return t > o.default.extractTimestamp(n);
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
          return a;
        },
      });
      var i = n(442837),
        l = n(430824),
        r = n(981631);
      function a(e) {
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
        a = n(481060),
        o = n(554747),
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
            (0, i.jsx)(a.CalendarIcon, {
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
            (0, a.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                n.e("22347"),
                n.e("56236"),
                n.e("65297"),
              ]).then(n.bind(n, 17671));
              return (n) => (0, i.jsx)(t, { ...n, guildId: e.id });
            }),
        },
        {
          key: "JOIN_SERVERS",
          renderIcon: (e) =>
            (0, i.jsx)(a.CompassIcon, {
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
            (0, i.jsx)(a.PlusSmallIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          getName: () => f.intl.string(f.t.emRpdX),
          handler: (e, t) =>
            (0, a.openModalLazy)(async () => {
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
          renderIcon: (e) => (0, i.jsx)(a.GroupPlusIcon, { className: e }),
          getName: () => f.intl.string(f.t.MJQOuL),
          handler: (e, t) =>
            (0, a.openModalLazy)(async () => {
              let { default: l } = await Promise.all([
                n.e("7654"),
                n.e("19821"),
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
          a = (0, o.ZP)(t.id);
        l.useEffect(() => {
          h.Z.trackExposure({ guildId: t.id, location: "543af8_1" });
        }, [t.id]);
        let { showHubEventsList: u } = h.Z.useExperiment(
            { guildId: t.id, location: "543af8_2" },
            { autoTrackExposure: !1 },
          ),
          m = (0, r.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
          f = l.useMemo(() => ({ numEvents: a.length }), [a.length]),
          C = (0, p.t)(n);
        return (0, i.jsx)(i.Fragment, {
          children: g.map((e) => {
            let { key: l, getName: r, handler: a, renderIcon: o } = e;
            if (!u && "EVENTS" === l) return null;
            let d = "".concat(l, "-").concat(t.id);
            return (0, i.jsx)(
              s.m,
              {
                id: d,
                renderIcon: o,
                text: r(f),
                selected: m && "JOIN_SERVERS" === l,
                onClick: null != n ? () => a(t, n) : void 0,
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
          return L;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l,
        r = n(200651),
        a = n(192379),
        o = n(120356),
        s = n.n(o),
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
        E = n(264549),
        S = n(981631),
        Z = n(388032),
        N = n(472591);
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
      function j(e) {
        switch (e.keyCode) {
          case S.yXg.ARROW_UP:
            return "UP";
          case S.yXg.ARROW_DOWN:
            return "DOWN";
          case S.yXg.ARROW_LEFT:
            return "LEFT";
          case S.yXg.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let A = [
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
      function M() {
        let e = a.useMemo(
          () =>
            h()((0, C.Rv)())
              .groupBy((e) => e.group)
              .value(),
          [],
        );
        return (0, r.jsx)("div", {
          className: N.keyboardShortcutList,
          children: A.map((t) => {
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
      class R extends a.PureComponent {
        componentDidMount() {
          (this.lastInputedKeys = []),
            I.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            I.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          I.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            I.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
                  (0, r.jsx)(w, {
                    arrow: "LEFT",
                    isActive: n,
                    className: N.left,
                    children: "left",
                  }),
                  (0, r.jsx)(w, {
                    arrow: "DOWN",
                    isActive: t,
                    className: N.down,
                    children: "down",
                  }),
                  (0, r.jsx)(w, {
                    arrow: "UP",
                    isActive: e,
                    className: N.up,
                    children: "up",
                  }),
                  (0, r.jsx)(w, {
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
                  children: (0, r.jsx)(M, {}),
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
            y(this, "scrollerRef", a.createRef()),
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
                this.lastInputedKeys[0] === S.yXg.H &&
                  this.lastInputedKeys[1] === S.yXg.H &&
                  this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === S.yXg.N &&
                  this.lastInputedKeys[4] === S.yXg.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = j(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            y(this, "handleKeyUp", (e) => {
              if (this.props.keyboardModeEnabled) return;
              let t = j(e);
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
      function w(e) {
        let { isActive: t, arrow: n, className: i, children: l } = e,
          [o, c] = a.useState(t),
          u = a.useCallback(() => {
            T[n](), c(!0);
          }, [n]);
        return (
          a.useEffect(() => {
            if (o) {
              let e = setTimeout(() => c(!1), 500);
              return () => clearTimeout(e);
            }
          }, [o]),
          (0, r.jsx)(g.Clickable, {
            onClick: u,
            className: s()(N.arrow, i, { [N.active]: t || o }),
            children: l,
          })
        );
      }
      function L(e) {
        let { transitionState: t, onClose: n } = e,
          [i, l] = a.useState(!1),
          [o, c] = a.useState(!1),
          u = a.useMemo(() => (__OVERLAY__ ? (0, _.Zg)() : (0, C.Rv)()), []),
          { keyboardModeEnabled: d, useReducedMotion: h } = (0, m.cj)(
            [x.Z],
            () => ({
              keyboardModeEnabled: x.Z.keyboardModeEnabled,
              useReducedMotion: x.Z.useReducedMotion,
            }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(P, { showBackdrop: o }),
            (0, r.jsx)(g.ModalRoot, {
              className: s()(N.noBackground, { [N.noShadow]: i }),
              size: g.ModalSize.DYNAMIC,
              "aria-label": Z.intl.string(Z.t.T9DA2N),
              transitionState: t,
              children: (0, r.jsx)(f.W, {
                component: "div",
                children: i
                  ? (0, r.jsx)(
                      E.Z,
                      {
                        handleDemonClose: function () {
                          c(!1), setTimeout(n, 500);
                        },
                      },
                      "raging-demo",
                    )
                  : (0, r.jsx)(
                      R,
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
        a = n(317770),
        o = n(175281),
        s = n(285371);
      class c extends a.Z {
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
          (0, l.openModal)((e) => (0, i.jsx)(o.Z, { ...e }), { modalKey: s.J });
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
        a = n.n(r),
        o = n(392711),
        s = n.n(o),
        c = n(714338),
        u = n(585483),
        d = n(981631),
        h = n(5729);
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
            o = [this.renderPrimary()];
          return (
            e && o.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
              className: a()(h.container, { [h.animate]: l }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(r, ")"),
              },
              children: o,
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
            className: a()(h.ragingDemon, { [h.visible]: this.state.visible }),
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
        a = n(789407),
        o = n(974543),
        s = n(250889);
      function c(e) {
        return (0, l.Z)(e)
          ? s.H + e.name
          : (0, i.Z)(e) && null != e.party && null != e.party.id
            ? a.r9.id
            : (0, r.Z)(e) && null != e.url
              ? o._ + e.url
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
        a = n(49214);
      let o = { [r.gD]: new l.U() };
      function s(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let i = o[n];
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
        let l = o[n];
        if (
          (null == l ? void 0 : l.body) != null &&
          (null === (t = l.shouldShow) || void 0 === t
            ? void 0
            : t.call(l, e)) !== !1
        ) {
          let t = l.body;
          return (0, i.jsx)(
            "section",
            { className: a.section, children: (0, i.jsx)(t, { activity: e }) },
            "delegate-".concat(n),
          );
        }
      }
      function u(e) {
        var t;
        let n = e.application_id;
        if (null == n) return !0;
        let i = o[n];
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
        a = n(817915),
        o = n(981631);
      function s() {
        let e = (0, i.e7)([r.Z], () => r.Z.windowSize().width);
        return (function (e, t) {
          return e > a.t && t;
        })(
          e,
          (0, i.e7)([l.Z], () => l.Z.hasConsented(o.pjP.PERSONALIZATION)),
        );
      }
      function c() {
        let e = r.Z.windowSize().width;
        return (function (e, t) {
          return e > a.t && t;
        })(e, l.Z.hasConsented(o.pjP.PERSONALIZATION));
      }
      function u(e, t) {
        return e > a.t && t;
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
        a = n(481060),
        o = n(686546),
        s = n(63190);
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
          E =
            "function" == typeof d
              ? (0, i.jsx)(d, {
                  width: 20,
                  height: 20,
                  size: "custom",
                  colorClass: null != h ? h : "",
                  color: "currentColor",
                })
              : d;
        return (0, i.jsx)(a.Tooltip, {
          tooltipClassName: m,
          text: t,
          "aria-label": C,
          color: x,
          tooltipContentClassName: b,
          forceOpen: I,
          children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...m } = e;
            return (0, i.jsxs)(a.Button, {
              ...m,
              look: a.Button.Looks.BLANK,
              size: a.Button.Sizes.NONE,
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
                  ? (0, i.jsx)(o.ZP, {
                      width: 20,
                      height: 20,
                      mask: o.ZP.Masks.PANEL_BUTTON,
                      children: E,
                    })
                  : E,
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
        a = n(481060),
        o = n(344803);
      function s(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(a.Text, {
          color: "none",
          className: r()(o.subtext, n),
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
        a = n(481060),
        o = n(115331);
      function s(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(a.Text, {
          color: "none",
          className: r()(o.title, n),
          variant: "text-sm/normal",
          children: t,
        });
      }
    },
    339144: function (e, t, n) {
      n.d(t, {
        J: function () {
          return x;
        },
        y: function () {
          return v;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(481060),
        s = n(988298),
        c = n(620662),
        u = n(513202),
        d = n(311352),
        h = n(803647),
        p = n(131704),
        m = n(626135),
        f = n(870569),
        g = n(981631),
        C = n(388032),
        _ = n(661609);
      function v(e, t, n) {
        return (
          null != e &&
          (null != n
            ? n.applicationId === e.id
            : null != t &&
              t.application_id === e.id &&
              t.type === g.IIU.PLAYING &&
              (0, c.Z)(t, g.xjy.JOIN))
        );
      }
      let x = l.memo(function (e) {
        let t,
          r,
          c,
          x,
          {
            stream: I,
            canGoLive: b,
            guildId: E,
            isStreaming: S,
            channel: Z,
            canStream: N,
            runningGame: y,
            embeddedActivity: T,
            activity: j,
            application: A,
            analyticsContext: P,
          } = e,
          M = v(A, j, T),
          R = l.useCallback(() => {
            a()(null != j, "Received null activity"),
              m.default.track(g.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: j.application_id,
                location: P.location,
              }),
              (0, s.h7)(j, !1);
          }, [j, P]),
          w = l.useCallback(
            (e, t) => () => {
              u.Z.leaveActivity({
                channelId: t.id,
                applicationId: e,
                showFeedback: !0,
              });
            },
            [],
          ),
          L = l.useCallback(() => {
            (0, h.Z)(I);
          }, [I]),
          D = l.useCallback(() => {
            let e = null != Z && (0, p.vd)(Z.type) ? Z : null,
              t = null != e ? e.getGuildId() : E;
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("46746"),
                n.e("33641"),
              ]).then(n.bind(n, 60594));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  selectSource: !1,
                  guildId: t,
                  analyticsLocation: g.Sbl.ACTIVITY_PANEL,
                });
            });
          }, [Z, E]);
        let O =
            (null != y || null == T) && (S || (b && null != y))
              ? (S
                  ? ((t = !1),
                    (r = L),
                    (c = o.ScreenXIcon),
                    (x = C.intl.string(C.t.S5anIS)))
                  : N
                    ? ((t = !1),
                      (r = D),
                      (c = o.ScreenArrowIcon),
                      (x =
                        null != y
                          ? C.intl.formatToPlainString(C.t.AB5gT0, {
                              game: y.name,
                            })
                          : C.intl.string(C.t.FeUKeH)))
                    : ((t = !0),
                      (r = null),
                      (c = o.ScreenArrowIcon),
                      (x =
                        null != Z && (0, p.vd)(Z.type)
                          ? C.intl.string(C.t.uQn9Bw)
                          : null != E
                            ? C.intl.string(C.t.fBXEoK)
                            : C.intl.string(C.t.n3feND))),
                (0, i.jsx)("div", {
                  className: _.panelButtonContainer,
                  children: (0, i.jsx)(f.Z, {
                    tooltipText: x,
                    disabled: t,
                    onClick: r,
                    icon: c,
                  }),
                }))
              : null,
          k =
            M && null == T
              ? (0, i.jsx)(f.Z, {
                  tooltipText: C.intl.string(C.t["hC/Ze3"]),
                  onClick: R,
                  icon: o.GroupPlusIcon,
                })
              : null,
          U =
            null == T || null == Z
              ? null
              : (0, i.jsx)(f.Z, {
                  tooltipText: C.intl.string(C.t["R/FK4O"]),
                  onClick: w(T.applicationId, Z),
                  icon: o.DoorExitIcon,
                }),
          G = null == I ? null : (0, i.jsx)(d.Z, {});
        return null == O && null == k && null == U
          ? null
          : (0, i.jsxs)("div", {
              className: _.actions,
              children: [O, k, null == O ? U : G],
            });
      });
    },
    840780: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        s = n.n(o),
        c = n(442837),
        u = n(481060),
        d = n(475179),
        h = n(925549),
        p = n(438139),
        m = n(730749),
        f = n(607070),
        g = n(566620),
        C = n(317381),
        _ = n(835473),
        v = n(933557),
        x = n(194082),
        I = n(436774),
        b = n(594190),
        E = n(925329),
        S = n(102172),
        Z = n(74299),
        N = n(914923),
        y = n(165393),
        T = n(989941),
        j = n(690221),
        A = n(231664),
        P = n(759198),
        M = n(131704),
        R = n(199902),
        w = n(314897),
        L = n(592125),
        D = n(984933),
        O = n(430824),
        k = n(131951),
        U = n(496675),
        G = n(158776),
        B = n(699516),
        H = n(944486),
        V = n(594174),
        F = n(449224),
        W = n(358085),
        z = n(345243),
        Y = n(115530),
        K = n(339144),
        q = n(441248),
        Q = n(981631),
        J = n(918559),
        X = n(96480);
      let $ = (0, p.Z)(function (e) {
        let { message: t } = e;
        return (0, i.jsx)(z.Z, { children: t });
      });
      class ee extends l.PureComponent {
        renderSparkles() {
          let { useReducedMotion: e } = this.props;
          async function t() {
            let { default: e } = await n
              .e("5217")
              .then(n.t.bind(n, 801048, 19));
            return e;
          }
          return (0, i.jsx)("div", {
            className: X.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
              importData: t,
              shouldAnimate: !e,
              className: X.sparkles,
            }),
          });
        }
        renderActions() {
          return (0, i.jsx)(K.J, { ...this.props });
        }
        renderGame() {
          let { isStreaming: e, application: t, runningGame: n } = this.props;
          return (0, i.jsx)(q.k, { isStreaming: e, application: t, game: n });
        }
        renderScreenshare() {
          let {
              isStreaming: e,
              streamMetadata: t,
              streamQualityIndicator: n,
            } = this.props,
            { title: l, sanitizedTitle: r } = (0, N.Z)(t);
          return (0, i.jsxs)("div", {
            className: X.gameWrapper,
            children: [
              e
                ? (0, i.jsx)(y.Z, { title: r })
                : (0, i.jsx)(x.ZP, {
                    look: x.ZP.Looks.GRAY,
                    size: x.ZP.Sizes.SMALL,
                    className: X.liveIndicator,
                  }),
              (0, i.jsxs)("div", {
                className: X.info,
                children: [
                  (0, i.jsx)(Y.Z, { children: l }),
                  null != n &&
                    (0, i.jsxs)("div", {
                      className: X.perksDemoContainer,
                      children: [
                        (0, i.jsx)(u.NitroWheelIcon, {
                          size: "xxs",
                          color: I.JX.PREMIUM_TIER_2,
                        }),
                        (0, i.jsx)(P.Z, {
                          className: X.perksDemoText,
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
            guildForConnectedChannel: a,
          } = this.props;
          if (null == n || null == l || null == t) return null;
          let o = { start: n.connectedSince },
            s = r;
          null != a
            ? ((e = Q.Z5c.CHANNEL(a.id, l.id)),
              (s = "".concat(s, " / ").concat(a.name)))
            : (e = Q.Z5c.CHANNEL(Q.ME, l.id));
          let c = (0, i.jsx)(j.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(z.Z, { className: X.channel, children: s }),
          });
          return (0, i.jsxs)("div", {
            className: X.gameWrapper,
            children: [
              (0, i.jsx)(E.Z, {
                className: X.gameIcon,
                game: t,
                size: E.Z.Sizes.SMALL,
              }),
              (0, i.jsxs)("div", {
                className: X.info,
                children: [
                  (0, i.jsx)(j.Z, {
                    href: e,
                    onClick: this.handleApplicationLinkClick,
                    children: (0, i.jsx)(Y.Z, {
                      className: X.activityName,
                      children: t.name,
                    }),
                  }),
                  (0, M.Qm)(l.type) ? c : (0, i.jsx)($, { timestamps: o }),
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
            application: o,
            activity: s,
            className: c,
          } = this.props;
          return l || (((0, K.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)("div", {
                className: a()(X.panel, c),
                children: (0, i.jsxs)("div", {
                  className: X.body,
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
            (n = "handleApplicationLinkClick"),
            (i = () => {
              var e;
              let { channel: t, embeddedActivity: n } = this.props;
              s()(null != t, "Channel is null during navigation click"),
                s()(null != n, "Activity null during navigation click"),
                (0, M.vd)(t.type) &&
                  d.Z.selectParticipant(t.id, n.applicationId),
                h.Z.channelListScrollTo(
                  null !== (e = t.guild_id) && void 0 !== e ? e : Q.ME,
                  t.id,
                ),
                (0, M.Qm)(t.type) && (0, g.tg)(J.Ez.PANEL);
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
      t.Z = (0, m.Z)(function (e) {
        var t;
        let { guildId: n, ...l } = e,
          r = (0, c.e7)([w.default], () => w.default.getId()),
          a = (0, c.e7)([b.ZP, F.Z], () => (0, T.Z)(b.ZP, F.Z)),
          o = (0, c.e7)([H.Z, L.Z], () =>
            L.Z.getChannel(H.Z.getVoiceChannelId()),
          ),
          s = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
          u = (0, c.e7)([L.Z], () => L.Z.getChannel(s)),
          d = (0, c.e7)([O.Z], () =>
            O.Z.getGuild(null == u ? void 0 : u.guild_id),
          ),
          [h, p] = (0, c.Wu)([R.Z], () => [
            R.Z.getCurrentUserActiveStream(),
            R.Z.getStreamerActiveStreamMetadata(),
          ]),
          m = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
          g = (0, c.e7)([C.ZP], () =>
            null != u ? C.ZP.getSelfEmbeddedActivityForChannel(u.id) : null,
          ),
          x = (0, c.e7)([O.Z, U.Z, D.ZP], () =>
            null != o
              ? S.JL(o, O.Z, U.Z, !1)
              : null != n && S.h_(D.ZP.getChannels(n), O.Z, U.Z).length > 0,
          ),
          [I] = (0, _.Z)([
            null !==
              (t = (function () {
                if (null != p && null != p.id) return p.id;
                if (null != a && null != a.id) return a.id;
                if (null != g) return g.applicationId;
              })()) && void 0 !== t
              ? t
              : "",
          ]),
          E = (0, c.e7)([k.Z], () => (0, Z.Z)(k.Z) && (0, W.isWindows)()),
          N = (0, c.e7)([G.Z], () =>
            null != r
              ? G.Z.findActivity(r, (e) => e.type === Q.IIU.PLAYING)
              : null,
          ),
          y = null != h && h.ownerId === r && h.state !== Q.jm8.ENDED,
          j = (0, c.e7)([V.default, B.Z], () =>
            null != u ? (0, v.F6)(u, V.default, B.Z) : void 0,
          ),
          P = (0, A.Z)();
        return (0, i.jsx)(ee, {
          ...l,
          guildId: n,
          canGoLive: E,
          activity: N,
          embeddedActivity: g,
          userId: r,
          runningGame: a,
          application: I,
          useReducedMotion: m,
          isStreaming: y,
          channel: u,
          canStream: x,
          stream: h,
          streamMetadata: p,
          channelName: j,
          guildForConnectedChannel: d,
          streamQualityIndicator: P,
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
        a = n(481060),
        o = n(925329),
        s = n(810568),
        c = n(168524),
        u = n(115530),
        d = n(388032),
        h = n(534324);
      function p(e) {
        let { name: t, applicationId: n } = e,
          l = (0, c.Z)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: s.m1.RtcPanel,
            trackEntryPointImpression: !0,
          });
        return (0, i.jsx)(a.Clickable, {
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
                (0, i.jsx)(o.Z, {
                  className: h.gameIcon,
                  game: r,
                  pid: null == s ? void 0 : s.pid,
                }),
                l
                  ? (0, i.jsx)(a.VideoIcon, {
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
        a = n(853872),
        o = n(981631);
      async function s() {
        try {
          l.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
          let { body: e } = await i.tn.get({
              url: o.ANM.CHECKOUT_RECOVERY,
              rejectWithError: !1,
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
          t && !a.Z.hasFetchedPaymentSources && (await (0, r.tZ)()),
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
      function a(e, t, n) {
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
      function o() {
        return { lastTriggered: 0 };
      }
      let s = o();
      class c extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          s = { ...o(), ...(null != e ? e : {}) };
        }
        getState() {
          return s;
        }
        cooldownIsActive() {
          return s.lastTriggered >= Date.now() - 1728e5;
        }
      }
      a(c, "displayName", "HDStreamingViewerStore"),
        a(c, "persistKey", "HDStreamingViewerStore"),
        (t.Z = new c(r.Z, {
          LOGOUT: function () {
            s = o();
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
        a = n(481060),
        o = n(570140),
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
        E = n(30684),
        S = n(514701),
        Z = n(6242),
        N = n(467721),
        y = n(757692),
        T = n(114064),
        j = n(933843),
        A = n(281494),
        P = n(276444),
        M = n(684259),
        R = n(937579),
        w = n(1163),
        L = n(841174),
        D = n(522558),
        O = n(879463),
        k = n(822070),
        U = n(520540),
        G = n(11352),
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
            ? o.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (o.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              o.Z.subscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              o.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              o.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              o.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              o.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              o.Z.subscribe("POST_CONNECTION_OPEN", this._trackSkyLoadExposure),
              o.Z.subscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              o.Z.subscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        _terminate() {
          __OVERLAY__
            ? o.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (o.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              o.Z.unsubscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              o.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              o.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              o.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              o.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              o.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackSkyLoadExposure,
              ),
              o.Z.unsubscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              o.Z.unsubscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        handleMessageLengthUpsell(e) {
          let { channel: t, content: l } = e;
          (0, a.openModalLazy)(async () => {
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
            !!U.g.getCurrentConfig(t, n).enabled &&
            !O.eP.getCurrentConfig(t, n).enabled
          )
            k.$.getCurrentConfig(t, n).enabled && (0, A.bq)();
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
              o.Z.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: n,
                followupSKUInfo: i,
                analyticsObject: l,
              });
          });
        }
        maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
          let { enabled: t } = w.Z.getCurrentConfig(
            { location: "PremiumManager" },
            { autoTrackExposure: !1 },
          );
          if (!t || e.state !== H.hes.DISCONNECTED || e.willReconnect) return;
          let n = f.Z.getChannel(e.channelId);
          if (null == n) return;
          let i = T.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
          if (
            (i &&
              o.Z.dispatch({
                type: "PREMIUM_PERKS_DEMO_COMPLETE",
                perkType: r.q.STREAM_HIGH_QUALITY,
              }),
            !i)
          )
            return;
          let { resolution: l, fps: a } = m.Z.getState();
          !(0, j.mc)(l, a) && (0, L.Z)(n.guild_id);
        }
        constructor(...e) {
          super(...e),
            z(this, "_premiumPaymentModalCloseResolve", null),
            z(this, "_premiumPaymentModalCloseReject", null),
            z(this, "_maybeFetchPremiumOffer", async () => {
              let e = C.default.getCurrentUser();
              if (null != e && e.verified) {
                let t = !(0, x.I5)(e) && _.Z.shouldFetchOffer();
                await (0, R.T)("PremiumManager", t);
              }
              o.Z.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
            }),
            z(this, "_maybeFetchCheckoutRecovery", async () => {
              let e = C.default.getCurrentUser();
              null != e &&
                e.verified &&
                !(0, x.I5)(e) &&
                E.Z.shouldFetchCheckoutRecovery() &&
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
              G.Y.trackExposure({ location: "PremiumManager" });
            }),
            z(this, "_trackSkyLoadExposure", () => {
              M.Z.trackExposure({ location: "PremiumManager" });
            }),
            z(this, "_handlePremiumPaymentModalOpen", (e) => {
              (0, h.Z)({
                ...e,
                analyticsLocations: [u.Z.OVERLAY],
                onClose: (e) => {
                  o.Z.dispatch({
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
                  a = (0, y.o)(r, n),
                  { sendNitroMessage: o } = (0, Z.TD)(a),
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
                  !o ||
                  c >= H.Eu4.TIER_2 ||
                  (null == r ? void 0 : r.type) !== V.fO.STREAM ||
                  (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) ||
                  null == r.maxResolution ||
                  null == r.maxFrameRate
                )
                  return;
                S.I();
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
        a = n(481060),
        o = n(954614);
      function s(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(a.Text, {
          className: r()({ [o.text]: null == n }, t),
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
        a = n(120356),
        o = n.n(a),
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
        E = n(938475),
        S = n(585483),
        Z = n(63063),
        N = n(51596),
        y = n(823385),
        T = n(415795),
        j = n(670512),
        A = n(981631),
        P = n(388032),
        M = n(35287);
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
      let w = 10,
        L = () =>
          (0, l.jsxs)("div", {
            className: M.emptyState,
            children: [
              (0, l.jsx)("div", {
                className: M.emptyStateNote,
                children: P.intl.string(P.t.bpbATE),
              }),
              (0, l.jsx)("div", {
                className: M.emptyStateCTA,
                children: (0, l.jsx)(u.Anchor, {
                  href: Z.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL),
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
              className: M.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      R(D, "defaultProps", { unread: !1 });
      let O = c.ZP.connectStores([I.ZP, _.Z], (e) => {
          let { channel: t } = e;
          return {
            unread: I.ZP.hasUnread(t.id),
            mentions: I.ZP.getMentionCount(t.id),
            category: _.Z.getChannel(t.parent_id),
          };
        })(D),
        k = c.ZP.connectStores([E.ZP], (e) => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...",
            );
          return { voiceStates: E.ZP.getVoiceStates(t.guild_id)[t.id] };
        })(D),
        U = c.ZP.connectStores([v.default], (e) => {
          let { guild: t } = e;
          return { unread: v.default.hasUnread(t.id) };
        })(T.ic),
        G = c.ZP.connectStores([I.ZP], (e) => {
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
                className: M.autocompleteQuerySymbol,
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
              className: M.input,
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
            ? (0, l.jsx)(L, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": P.intl.string(P.t.Wef5Dg),
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: w,
                  sections: [t.length],
                  className: M.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          S.S.dispatch(A.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, l.jsx)(g.Z, {
            className: o()(M.protip, {
              [M.hasContent]: this.state.query.length > 0,
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
              helpdeskArticle: Z.Z.getArticleURL(A.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
          return t
            ? null
            : (0, l.jsx)(j.Z, { hasQuery: e.length > 0 && n.length > 0 });
        }
        render() {
          return (0, l.jsx)(u.ModalRoot, {
            "aria-label": P.intl.string(P.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: o()(M.container, s.tq && M.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)("div", {
              className: o()(M.quickswitcher, s.tq && M.mobileQuickswitcher),
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
            R(this, "scrollerRef", r.createRef()),
            R(this, "inputRef", r.createRef()),
            R(this, "_listId", (0, C.hQ)()),
            R(this, "state", {
              query: this.props.query,
              mouseFocusDisabled: !0,
            }),
            R(this, "handleInputChange", () => {
              let { current: e } = this.inputRef;
              null != e && this.search(e.value);
            }),
            R(this, "handleMouseMove", () => {
              let { mouseFocusDisabled: e } = this.state;
              if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            R(this, "focusResult", (e) => {
              if (!this.state.mouseFocusDisabled)
                (0, N.tF)(this.props.results.indexOf(e));
            }),
            R(this, "selectResult", (e) => {
              (0, N.Se)(e, this.props.queryMode === m.h8.TEXT_CHANNEL);
            }),
            R(this, "handleContextMenu", (e) => {
              let t = this.props.results[this.props.selectedIndex];
              switch (t.type) {
                case m.h8.GUILD:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("33053"),
                      n.e("15669"),
                      n.e("7654"),
                      n.e("42587"),
                      n.e("44156"),
                      n.e("16141"),
                      n.e("85552"),
                      n.e("58227"),
                      n.e("16114"),
                      n.e("28356"),
                      n.e("73747"),
                      n.e("33213"),
                      n.e("60430"),
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
                    case A.d4z.GUILD_TEXT:
                    case A.d4z.GUILD_ANNOUNCEMENT:
                    case A.d4z.GUILD_FORUM:
                    case A.d4z.GUILD_MEDIA:
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
                    case A.d4z.GUILD_VOICE:
                    case A.d4z.GUILD_STAGE_VOICE:
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
                    case A.d4z.ANNOUNCEMENT_THREAD:
                    case A.d4z.PUBLIC_THREAD:
                    case A.d4z.PRIVATE_THREAD:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("40157")
                          .then(n.bind(n, 422200));
                        return (t) =>
                          (0, l.jsx)(e, { ...t, channel: i, onSelect: N.Cp });
                      });
                    case A.d4z.GUILD_STORE:
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
                    case A.d4z.GUILD_DIRECTORY:
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
                      n.e("32765"),
                    ]).then(n.bind(n, 881351));
                    return (n) =>
                      (0, l.jsx)(e, { ...n, user: t.record, onSelect: N.Cp });
                  });
              }
            }),
            R(this, "handleKeyDown", (e) => {
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
            R(this, "renderRow", (e) => {
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
                    U,
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
                    G,
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
        a = n(317770),
        o = n(51596),
        s = n(823385),
        c = n(900085);
      let u = "QUICK_SWITCHER_MODAL_KEY";
      class d extends a.Z {
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
              onCloseCallback: o.Cp,
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
        a = n(120356),
        o = n.n(a),
        s = n(748780),
        c = n(846519),
        u = n(481060),
        d = n(585483),
        h = n(981631),
        p = n(388032),
        m = n(700215);
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
            className: o()(m.arrowGroup, e),
            children: [
              (0, l.jsx)(s.Z.div, {
                className: o()(m.arrowContainer, m.horizontal),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(403756),
                  className: m.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: o()(m.arrowContainer, m.diag1),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(536404),
                  className: m.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: o()(m.arrowContainer, m.diag2),
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
            className: o()(m.tutorial, { [m.shown]: t, [m.hasQuery]: e }),
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
        a = n(481060),
        o = n(442837),
        s = n(239091),
        c = n(410030),
        u = n(377171),
        d = n(682662),
        h = n(662146),
        p = n(678513),
        m = n(981631),
        f = n(388032),
        g = n(302029);
      function C(e) {
        let { target: t } = e,
          o = (0, r.Ie)("fakedoor"),
          p = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("22862"),
                n.e("74217"),
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
              (0, i.jsx)(a.Heading, {
                variant: "heading-sm/medium",
                children: t.tooltipHeader,
              }),
              (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                children: f.intl.string(f.t.IIbwAg),
              }),
            ],
          }),
          x = (0, c.Fg)();
        return (0, i.jsxs)(d.H, {
          children: [
            (0, i.jsx)(a.ThemeContextProvider, {
              theme: m.BRd.DARK,
              children: (0, i.jsx)(h.Z, {
                text: v,
                tooltipClass: g.tooltip,
                tooltipContentClass: g.tooltipContent,
                children: (0, i.jsx)(a.ThemeContextProvider, {
                  theme: x,
                  children: (0, i.jsx)(a.BlobMask, {
                    lowerBadge: (0, i.jsx)(a.NumberBadge, {
                      count: 1,
                      color: u.Z.BG_BRAND,
                    }),
                    children: (0, i.jsx)(a.NavItem, {
                      ...o,
                      onClick: p,
                      onContextMenu: C,
                      children: (0, i.jsx)(a.BellIcon, {
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
        let e = (0, o.e7)([p.Z], () => p.Z.getActiveUserSignUp());
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
          return a;
        },
        mU: function () {
          return o;
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
      function a(e) {
        return "guild" === e.type;
      }
      function o(e) {
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
        a,
        o = n(442837),
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
      class f extends (i = o.ZP.Store) {
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
      (a = "SignUpStore"),
        (r = "displayName") in (l = f)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
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
          return a;
        },
      });
      var i = n(442837),
        l = n(314897),
        r = n(88751);
      function a(e) {
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
          return o;
        },
      });
      var i,
        l,
        r = n(833845),
        a = n(643632);
      function o(e) {
        let t = (0, a.Z)(e),
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
        a = n(938475),
        o = n(823379),
        s = n(136015),
        c = n(709054),
        u = n(565799),
        d = n(501655),
        h = n(981631);
      function p(e) {
        let { voiceState: t, userNick: n, user: i } = e,
          l = (0, a.sQ)(t, n);
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
                    .filter(o.lm)
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
        a = n(481060),
        o = n(592125),
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
            let e = o.Z.getChannel(p);
            null != e && s.Cq(e);
          }, [p]),
          C =
            null !== (n = null == m ? void 0 : m.topic) && void 0 !== n
              ? n
              : h.name,
          _ = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: C });
        return (0, i.jsx)("div", {
          ref: f,
          children: (0, i.jsx)(a.Clickable, {
            onClick: g,
            focusProps: { ringTarget: f },
            children: (0, i.jsx)(a.Heading, {
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
          return o;
        },
        _: function () {
          return a;
        },
      });
      var i = n(726542),
        l = n(973616),
        r = n(388032);
      let a = "twitch:";
      class o extends l.Z {
        getIconURL() {
          return i.Z.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(a).concat(e.url)),
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
          return a;
        },
      });
      var i = n(726542),
        l = n(973616);
      let r = "xbox:";
      class a extends l.Z {
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
        a,
        o = n(442837),
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
      class v extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, d.Z, p.Z, h.ZP);
        }
        getUnreadPrivateChannelIds() {
          return f;
        }
      }
      (a = "PrivateChannelReadStateStore"),
        (r = "displayName") in (l = v)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
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
      function a(e, t, n) {
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
      let o = {};
      class s extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            Object.keys(e).forEach((t) => {
              "number" == typeof e[t] && (o[t] = e[t]);
            });
        }
        getState() {
          return o;
        }
        hasViewed(e) {
          return null != o[e];
        }
      }
      a(s, "displayName", "ViewHistoryStore"),
        a(s, "persistKey", "ViewHistoryStore"),
        (t.Z = new s(r.Z, {
          VIEW_HISTORY_MARK_VIEW: function (e) {
            let { key: t } = e;
            o[t] = Date.now();
          },
        }));
    },
    241890: function (e, t, n) {
      let i, l;
      var r = n(200651);
      n(192379);
      var a = n(481060),
        o = n(570140),
        s = n(341382),
        c = n(981631);
      let u = null;
      function d(e) {
        null != i && e ? i() : null != l && l(), (i = null), (l = null);
      }
      t.Z = {
        init() {
          o.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            if (
              (d(!1),
              (u = e.context),
              (i = e.resolve),
              (l = e.reject),
              c.e3s === e.context)
            ) {
              let e;
              (e = !1),
                (0, a.openModalLazy)(
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
            o.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
              let { shouldContinue: t } = e;
              (u = null), d(t);
            }),
            o.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
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
        a,
        o = n(392711),
        s = n.n(o),
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
        E = n(656063),
        S = n(761282),
        Z = n(814443),
        N = n(789407),
        y = n(974543),
        T = n(250889),
        j = n(199902),
        A = n(592125),
        P = n(480294),
        M = n(831506),
        R = n(731290),
        w = n(430824),
        L = n(496675),
        D = n(158776),
        O = n(699516),
        k = n(594174),
        U = n(979651),
        G = n(626135),
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
      function J() {
        let e = O.Z.getFriendIDs();
        return P.Z.hasConsented(H.pjP.PERSONALIZATION)
          ? new Set([...Z.Z.getUserAffinitiesUserIds(), ...e])
          : new Set(e);
      }
      function X(e) {
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
        let t = U.Z.getVoiceStateForUser(e);
        return (null == t ? void 0 : t.channelId) != null &&
          L.Z.canWithPartialContext(H.Plq.VIEW_CHANNEL, {
            channelId: t.channelId,
          })
          ? t.channelId
          : null;
      }
      function el(e) {
        return O.Z.isFriend(e.id);
      }
      function er(e, t, n) {
        var i, l, r, a, o, c;
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
          let n = j.Z.getAnyStreamForUser(e.id),
            i = A.Z.getChannel(null == n ? void 0 : n.channelId);
          if (
            (null == i ? void 0 : i.isNSFW()) &&
            (!f || !R.Z.didAgree(null == i ? void 0 : i.getGuildId()))
          )
            continue;
          let o = X(e.id);
          if (
            (null != n && P.push({ stream: n, streamUser: e, activity: o }),
            null == o)
          )
            continue;
          let c = (0, E.Z)(o);
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
            g = null === (l = o.timestamps) || void 0 === l ? void 0 : l.start;
          if ((0, m.Z)(o)) {
            let t = (0, h.a)();
            if (
              (0, p.ZP)({
                activity: o,
                userId: e.id,
                application: u,
                channelId:
                  null === (r = U.Z.getVoiceStateForUser(e.id)) || void 0 === r
                    ? void 0
                    : r.channelId,
                currentUser: d,
                isActivitiesEnabledForCurrentPlatform: t,
                ChannelStore: A.Z,
                VoiceStateStore: U.Z,
                PermissionStore: L.Z,
                GuildStore: w.Z,
              }) !== p.Fw.CAN_JOIN
            )
              continue;
          } else if (null == g) continue;
          if (!S.JE(o) || null == u || b.has(u.id)) continue;
          let C = null != o ? en(o) : null;
          (null == C || C.id !== u.id) && (o = null);
          let D = [];
          (D =
            null != o && null != o.party && null != o.party.id
              ? Array.from(
                  null !== (a = M.Z.getParty(o.party.id)) && void 0 !== a
                    ? a
                    : [],
                ).reduce((e, t) => {
                  let n = k.default.getUser(t);
                  return null != n && e.push(n), e;
                }, [])
              : t.filter((e) => {
                  let t = X(e.id),
                    n = null != t ? en(t) : null;
                  return null != n && n.id === u.id;
                })),
            (D = s().orderBy(D, [el], ["desc"])).length !== t.length &&
              (_ = !0),
            b.add(u.id),
            x.push({
              game: u,
              activity: o,
              activityUser: e,
              startedPlayingTime: g,
              playingMembers: D,
            });
        }
        let O = 1 === C.length,
          G = [],
          H = new Set(),
          V = new Set();
        for (let e of t) {
          let n = ei(e.id),
            i = A.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = w.Z.getGuild(l);
          if (
            (V.has(l) && H.has(n)) ||
            null == i ||
            null == r ||
            i.id === r.afkChannelId
          )
            null == i && ((u = null), (O = !0));
          else {
            let e = U.Z.getVoiceStatesForChannel(i.id),
              a = s()(e)
                .map((e) => {
                  let { userId: t } = e;
                  return k.default.getUser(t);
                })
                .filter(B.lm)
                .orderBy([el], ["desc"])
                .value();
            a.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
              O ? !V.has(l) && (u = null) : ((u = r), (O = !0)),
              V.add(l),
              H.add(n),
              G.push({ channel: i, guild: r, members: a, voiceStates: e });
          }
        }
        return {
          id: n,
          voiceChannels: G,
          isSpotifyActivity: Z,
          priorityMembers: C.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id),
          })),
          partiedMembers: t,
          showPlayingMembers: _,
          guildContext: u,
          currentActivities: ((o = x),
          (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
          }),
          s()(o).orderBy([c, (e) => e.game.name], ["desc", "asc"])).value(),
          applicationStreams: P,
        };
      }
      function ea(e) {
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
      function eo(e) {
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
              let t = J(),
                n = er.bind(null, t);
              return s()(e).mapValues(n);
            })(
              ((e = Array.from(J()).reduce((e, t) => {
                let n = k.default.getUser(t);
                return null != n && !n.bot && e.push(n), e;
              }, [])),
              s()(e).groupBy((e) => {
                var t;
                let n = ei(e.id),
                  i = X(e.id);
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
                  ea,
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
                  { blockeeExperimentEnabled: !0, party: c.P.when(eo) },
                  () => x.h9.HIDE,
                )
                .with(
                  { blockeeExperimentEnabled: !0, party: c.P.when(ea) },
                  () => x.h9.DERANK,
                )
                .otherwise(() => x.h9.SHOW);
              e.voiceChannels.forEach((e) => {
                let { voiceStates: n, channel: i } = e,
                  l = s().map(n, "userId"),
                  r = s().map(n, "discoverable"),
                  a = s().map(n, (e) => O.Z.getRelationshipType(e.userId));
                G.default.track(H.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                  activity_user_ids: l,
                  discoverable: r,
                  relationship_types: a,
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
                l = t && eo(e);
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
            [k.default, v.Z, D.Z, M.Z, U.Z, j.Z, O.Z, P.Z, Z.Z],
            ed,
          ),
            this.waitFor(b.Z, w.Z, v.Z, k.default, Z.Z);
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
      (a = "NowPlayingViewStore"),
        (r = "displayName") in (l = eh)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a);
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
          return o;
        },
      }),
        n(47120),
        n(733860),
        n(653041);
      var i = n(740504),
        l = n(131704),
        r = n(990492),
        a = n(981631);
      function o(e, t) {
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
          if (o(e.channel.type, n)) return e;
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
              return null != e && (n || o(e.type, i));
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
        let { GUILD_CATEGORY: d } = a.d4z;
        if (e.type === d)
          return i === t || (i < t && e.type === n.type)
            ? u(n)
            : i > t
              ? (function (e, t, n) {
                  var i;
                  let { GUILD_CATEGORY: l } = a.d4z,
                    r =
                      n[
                        (null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1
                      ],
                    o = s(-1, t.id, e.type, n);
                  return null == o || o.channel.id === e.id
                    ? null
                    : null == r || r.channel.type === l
                      ? { referenceId: o.channel.id, parentId: null }
                      : null;
                })(e, n, r)
              : null;
        if (o(e.type, n.type)) return u(n);
        if (i < t)
          return n.type === d
            ? (function (e, t, n) {
                var i;
                let r =
                    n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                  a = s(1, t.id, e.type, n);
                if (null == r) return { referenceId: null, parentId: null };
                if (null != a) {
                  if (
                    o(r.channel.type, e.type) ||
                    (e.isGuildVocal() && (0, l.r8)(r.channel.type))
                  )
                    return {
                      referenceId: a.channel.id,
                      parentId: r.channel.parent_id,
                    };
                  if (r.channel.isCategory())
                    return {
                      referenceId: a.channel.id,
                      parentId: r.channel.id,
                    };
                }
                return null;
              })(e, n, r)
            : (function (e, t, n) {
                var i;
                let r =
                    n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                  a = s(1, t.id, e.type, n);
                return null != r || e.isGuildVocal()
                  ? (0, l.r8)(e.type) &&
                    null != a &&
                    ((0, l.r8)(r.channel.type) || r.channel.isCategory())
                    ? { referenceId: a.channel.id, parentId: t.parent_id }
                    : null
                  : {
                      referenceId: null != a ? a.channel.id : null,
                      parentId: null,
                    };
              })(e, n, r);
        return n.type === d
          ? (function (e, t, n) {
              var i;
              let r =
                  n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) + 1],
                a = s(-1, t.id, e.type, n);
              if (null != a) {
                if (null == r)
                  return { referenceId: a.channel.id, parentId: t.id };
                if (
                  o(r.channel.type, e.type) ||
                  ((0, l.r8)(e.type) && r.channel.isGuildVocal())
                )
                  return {
                    referenceId: a.channel.id,
                    parentId: r.channel.parent_id,
                  };
                if (r.channel.isCategory())
                  return { referenceId: a.channel.id, parentId: t.id };
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
      function h(e, t, n, a) {
        let o,
          s,
          u = [],
          d = [],
          h = a._categories,
          p = (t) => {
            var n, i, l, a;
            let c;
            if (
              null == o ||
              null == s ||
              ((n = e),
              (i = o),
              (l = s),
              (a = t),
              null != i &&
              null != l &&
              null != a[i] &&
              a[i].channel === n &&
              null != a[l]
                ? 0
                : 1)
            )
              c = [...t];
            else c = r.ZP.moveItemFromTo(t, o, s);
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
          (o = c(e, n)), (s = c(t, n)), (d = p(n)).unshift(h[0]);
        }
        if ((0, l.r8)(e.type) || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
            let {
              channel: { type: t },
            } = e;
            return (0, l.r8)(t);
          });
          (o = c(e, n)), (s = c(t, n)), p(n);
        }
        if (e.isGuildVocal() || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
          });
          (o = c(e, n)), (s = c(t, n)), p(n);
        }
        if (e.parent_id !== n) {
          let t = !1;
          u.find((i) => i.id === e.id && ((i.parent_id = n), (t = !0))),
            !t && u.push({ id: e.id, parent_id: n });
        }
        return u;
      }
    },
    823433: function (e, t, n) {
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
    372242: function (e, t, n) {
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
        decorator: "decorator_c91bad",
      };
    },
    470792: function (e, t, n) {
      e.exports = {
        empty: "empty_c47fa9",
        headerText: "headerText_c47fa9",
        privateChannelsHeaderContainer: "privateChannelsHeaderContainer_c47fa9",
        privateChannelRecipientsInviteButtonIcon:
          "privateChannelRecipientsInviteButtonIcon_c47fa9",
        scroller: "scroller_c47fa9",
      };
    },
    757937: function (e, t, n) {
      e.exports = {
        progressContainer: "progressContainer_ff398b",
        downloadIcon: "downloadIcon_ff398b",
      };
    },
    710148: function (e, t, n) {
      e.exports = { message: "message_f3e42a" };
    },
    940535: function (e, t, n) {
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
    714909: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    319716: function (e, t, n) {
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
    556854: function (e, t, n) {
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
    499410: function (e, t, n) {
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
    720924: function (e, t, n) {
      e.exports = {
        container: "container_ab8c84",
        videoContainer: "videoContainer_ab8c84",
        video: "video_ab8c84",
        content: "content_ab8c84",
      };
    },
    173614: function (e, t, n) {
      e.exports = { container: "container_d91ad9" };
    },
    336145: function (e, t, n) {
      e.exports = { tooltipText: "tooltipText_ce31b4" };
    },
    534977: function (e, t, n) {
      e.exports = {
        pill: "pill_dcc7a4",
        favoriteIcon: "favoriteIcon_dcc7a4",
        ring: "ring_dcc7a4",
        ringActive: "ringActive_dcc7a4",
      };
    },
    950930: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c07d45",
        icon: "icon_c07d45",
        badge: "badge_c07d45",
      };
    },
    183694: function (e, t, n) {
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
      };
    },
    471568: function (e, t, n) {
      e.exports = { premiumChannelIcon: "premiumChannelIcon_f7460c" };
    },
    491372: function (e, t, n) {
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
    858996: function (e, t, n) {
      e.exports = { content: "content_cc29d1" };
    },
    747834: function (e, t, n) {
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
    208745: function (e, t, n) {
      e.exports = {
        container: "container_e88961",
        popoutHeaderContainer: "popoutHeaderContainer_e88961",
        headerDivider: "headerDivider_e88961",
        settingNudgeText: "settingNudgeText_e88961",
      };
    },
    668930: function (e, t, n) {
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
    790707: function (e, t, n) {
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
    766075: function (e, t, n) {
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
    360110: function (e, t, n) {
      e.exports = { newChannel: "newChannel_ecb303" };
    },
    841607: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
    573726: function (e, t, n) {
      e.exports = {
        scroller: "scroller_c43953",
        unreadBar: "unreadBar_c43953",
        unreadBottom:
          "unreadBottom_c43953 unread_c43953 " + n("556854").container,
        positionedContainer: "positionedContainer_c43953",
        unreadTop: "unreadTop_c43953 unread_c43953 " + n("556854").container,
        voiceUserSummary: "voiceUserSummary_c43953",
        sectionDivider: "sectionDivider_c43953",
      };
    },
    227294: function (e, t, n) {
      e.exports = {
        popoutHeader: "popoutHeader_aab567",
        channelIcon: "channelIcon_aab567",
        channelName: "channelName_aab567",
      };
    },
    564192: function (e, t, n) {
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
    436373: function (e, t, n) {
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
    785534: function (e, t, n) {
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
    139293: function (e, t, n) {
      e.exports = {
        container: "container_e1e976",
        spine: "spine_e1e976",
        spineBorder: "spineBorder_e1e976",
        spineWithGuildIcon: "spineWithGuildIcon_e1e976 spine_e1e976",
        spineBorderWithGuildIcon:
          "spineBorderWithGuildIcon_e1e976 spineBorder_e1e976",
      };
    },
    184214: function (e, t, n) {
      e.exports = { mentionsBadge: "mentionsBadge_e2a798 iconBase_e2a798" };
    },
    718963: function (e, t, n) {
      e.exports = { iconLive: "iconLive_dce222" };
    },
    606720: function (e, t, n) {
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
    402328: function (e, t, n) {
      e.exports = {
        statusDiv: "statusDiv_e66732",
        hoverable: "hoverable_e66732",
        pencilIcon: "pencilIcon_e66732",
        statusText: "statusText_e66732",
      };
    },
    305883: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a5bc92",
        users: "users_a5bc92",
        total: "total_a5bc92",
        video: "video_a5bc92",
        extraLong: "extraLong_a5bc92",
        videoIcon: "videoIcon_a5bc92",
      };
    },
    874899: function (e, t, n) {
      e.exports = {
        container: "container_c23582",
        peopleIcon: "peopleIcon_c23582",
        userCountText: "userCountText_c23582",
      };
    },
    440990: function (e, t, n) {
      e.exports = {
        container: "container_b597a1",
        content: "content_b597a1",
        buttonContainer: "buttonContainer_b597a1",
        primaryButton: "primaryButton_b597a1",
        cancel: "cancel_b597a1",
        image: "image_b597a1",
      };
    },
    410357: function (e, t, n) {
      e.exports = { pill: "pill_f36a5a" };
    },
    863906: function (e, t, n) {
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
    737600: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_fea3ef",
        hidden: "hidden_fea3ef",
        tree: "tree_fea3ef",
        scroller: "scroller_fea3ef",
        scrolling: "scrolling_fea3ef",
        unreadMentionsIndicatorTop: "unreadMentionsIndicatorTop_fea3ef",
        unreadMentionsIndicatorBottom: "unreadMentionsIndicatorBottom_fea3ef",
        unreadMentionsBar: "unreadMentionsBar_fea3ef",
        unreadMentionsFixedFooter: "unreadMentionsFixedFooter_fea3ef",
        fixedDiscoveryIcon: "fixedDiscoveryIcon_fea3ef",
      };
    },
    406653: function (e, t, n) {
      e.exports = {
        dragInner: "dragInner_f734d8",
        placeholderMask: "placeholderMask_f734d8",
      };
    },
    69517: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_db6521",
        selected: "selected_db6521",
        circleIcon: "circleIcon_db6521",
        pill: "pill_db6521",
      };
    },
    581294: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_bc7085",
        expandedFolderBackground: "expandedFolderBackground_bc7085",
        collapsed: "collapsed_bc7085",
        hover: "hover_bc7085",
        folderIconWrapper: "folderIconWrapper_bc7085",
        folder: "folder_bc7085",
        closedFolderIconWrapper: "closedFolderIconWrapper_bc7085",
        folderIconPreview: "folderIconPreview_bc7085",
        guildIcon: "guildIcon_bc7085",
        miniPlaceholder: "miniPlaceholder_bc7085",
        expandedFolderIconWrapper: "expandedFolderIconWrapper_bc7085",
        guildIconUnavailable: "guildIconUnavailable_bc7085",
      };
    },
    616657: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_f85ca4",
        geoRestrictedBadge: "geoRestrictedBadge_f85ca4",
      };
    },
    83296: function (e, t, n) {
      e.exports = {
        blobContainer: "blobContainer_a5ad63",
        pill: "pill_a5ad63",
        sorting: "sorting_a5ad63",
        wobble: "wobble_a5ad63",
        selected: "selected_a5ad63",
      };
    },
    893295: function (e, t, n) {
      e.exports = {
        footer: "footer_f8ec41",
        gradient: "gradient_f8ec41",
        gradientHidden: "gradientHidden_f8ec41",
      };
    },
    196342: function (e, t, n) {
      e.exports = {
        pill: "pill_f9623d",
        downloadProgress: "downloadProgress_f9623d",
        tutorialContainer: "tutorialContainer_f9623d",
      };
    },
    862474: function (e, t, n) {
      e.exports = {
        listItemWrapper: "listItemWrapper_dfb2f8",
        listItemTooltip: "listItemTooltip_dfb2f8",
        selected: "selected_dfb2f8",
      };
    },
    411384: function (e, t, n) {
      e.exports = {
        listItem: "listItem_c96c45",
        unavailableBadge: "unavailableBadge_c96c45",
        iconBadge: "iconBadge_c96c45",
        isCurrentUserConnected: "isCurrentUserConnected_c96c45",
        tutorialContainer: "tutorialContainer_c96c45",
      };
    },
    553835: function (e, t, n) {
      e.exports = { guildSeparator: "guildSeparator_d0c57e" };
    },
    517708: function (e, t, n) {
      e.exports = {
        guildsError: "guildsError_aada25",
        errorInner: "errorInner_aada25",
      };
    },
    390576: function (e, t, n) {
      e.exports = {
        pauseBackground: "pauseBackground_fdcfe0",
        pause: "pause_fdcfe0",
      };
    },
    33321: function (e, t, n) {
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
    472591: function (e, t, n) {
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
    5729: function (e, t, n) {
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
    49214: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_cd82a7",
        section: "section_cd82a7",
        clickableIcon: "clickableIcon_cd82a7",
        textContent: "textContent_cd82a7",
        separator: "separator_cd82a7",
        inset: "inset_cd82a7",
        headerFull: "headerFull_cd82a7 header_cd82a7",
        headerSimple: "headerSimple_cd82a7 header_cd82a7",
        headerAvatar: "headerAvatar_cd82a7",
        headerIcon: "headerIcon_cd82a7",
        multipleIconWrapper: "multipleIconWrapper_cd82a7",
        multipleIcon: "multipleIcon_cd82a7",
        body: "body_cd82a7",
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
    63190: function (e, t, n) {
      e.exports = {
        button: "button_adca65",
        enabled: "enabled_adca65",
        disabled: "disabled_adca65",
      };
    },
    344803: function (e, t, n) {
      e.exports = { subtext: "subtext_be40e6" };
    },
    115331: function (e, t, n) {
      e.exports = { title: "title_b97bdb" };
    },
    661609: function (e, t, n) {
      e.exports = {
        actions: "actions_d14755",
        panelButtonContainer: "panelButtonContainer_d14755",
      };
    },
    96480: function (e, t, n) {
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
    246764: function (e, t, n) {
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
    534324: function (e, t, n) {
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
    954614: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
    35287: function (e, t, n) {
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
    756582: function (e, t, n) {
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
    700215: function (e, t, n) {
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
    279778: function (e, t, n) {
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
    283997: function (e, t, n) {
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    462346: function (e, t, n) {
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
      };
    },
    591286: function (e, t, n) {
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    302690: function (e, t, n) {
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    277766: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    429200: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    302029: function (e, t, n) {
      e.exports = {
        tooltipContainer: "tooltipContainer_eb20d6",
        tooltipBackground: "tooltipBackground_eb20d6",
        tooltip: "tooltip_eb20d6",
        tooltipContent: "tooltipContent_eb20d6",
      };
    },
    762778: function (e, t, n) {
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
    422092: function (e, t, n) {
      e.exports = { soundButton: "soundButton_d608d3" };
    },
    785798: function (e, t, n) {
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
//# sourceMappingURL=f702114d6310fa5f7644.js.map
