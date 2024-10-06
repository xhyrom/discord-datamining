"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["644"],
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
    988298: function (e, t, n) {
      n.d(t, {
        GG: function () {
          return a;
        },
        R2: function () {
          return s;
        },
        h7: function () {
          return l;
        },
        rh: function () {
          return r;
        },
      });
      var i = n(570140);
      function l(e, t) {
        return new Promise((n) => {
          setTimeout(() => {
            i.Z.dispatch({
              type: "ACTIVITY_INVITE_MODAL_OPEN",
              activity: e,
              isPrivate: t,
              resolve: n,
            });
          }, 0);
        });
      }
      function r(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
      }
      function a(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
      }
      function s(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
      }
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
          return W;
        },
        Qj: function () {
          return Y;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(613828),
        u = n(91192),
        d = n(873546),
        h = n(442837),
        p = n(481060),
        f = n(493683),
        _ = n(239091),
        m = n(420660),
        g = n(385499),
        C = n(570908),
        I = n(702321),
        E = n(201895),
        N = n(43267),
        S = n(933557),
        x = n(979264),
        v = n(163889),
        T = n(111028),
        Z = n(853856),
        A = n(93687),
        b = n(785232),
        R = n(878857),
        M = n(518950),
        L = n(199902),
        P = n(158776),
        O = n(306680),
        y = n(111583),
        D = n(9156),
        j = n(594174),
        w = n(709054),
        U = n(998502),
        G = n(788307),
        k = n(981631),
        B = n(689938),
        V = n(931450);
      let H = U.ZP.getEnableHardwareAcceleration()
          ? p.AnimatedAvatar
          : p.Avatar,
        F = { offset: { top: 2, bottom: 2, right: 4 } },
        W = (e) =>
          (0, i.jsx)(p.Clickable, {
            className: V.closeButton,
            ...e,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)(p.XSmallIcon, {
              size: "md",
              color: "currentColor",
              className: V.closeIcon,
            }),
          }),
        z = () =>
          (0, i.jsx)(p.StarIcon, {
            size: "xs",
            color: "currentColor",
            className: V.favoriteIcon,
          });
      class Y extends l.Component {
        render() {
          let {
            route: e,
            selected: t,
            icon: n,
            iconClassName: l,
            interactiveClassName: r,
            text: s,
            children: o,
            locationState: u,
            onClick: h,
            className: f,
            role: _,
            "aria-posinset": m,
            "aria-setsize": g,
            ...I
          } = this.props;
          return (0, i.jsx)(v.Z, {
            className: a()(V.channel, { [V.fullWidth]: d.tq }, f),
            onClick: h,
            role: _,
            focusProps: { within: !0, ...F },
            "aria-posinset": m,
            "aria-setsize": g,
            children: (0, i.jsx)(p.Interactive, {
              as: "div",
              selected: t,
              className: a()(r, V.interactive, V.linkButton, {
                [V.interactiveSelected]: t,
              }),
              children: (0, i.jsxs)(c.rU, {
                to: { pathname: e, state: u },
                className: V.link,
                ...I,
                children: [
                  (0, i.jsx)(C.Z, {
                    selected: t,
                    muted: !1,
                    avatar: (0, i.jsx)(n, {
                      className: a()(V.linkButtonIcon, l),
                      color: "currentColor",
                    }),
                    name: s,
                    innerClassName: V.avatarWithText,
                  }),
                  o,
                ],
              }),
            }),
          });
        }
      }
      function K(e) {
        let {
            channel: t,
            isGDMFacepileEnabled: r,
            selected: s = !1,
            user: d,
            activities: A,
            applicationStream: L,
            isTyping: P,
            status: y,
            isMobile: j,
            "aria-posinset": w,
            "aria-setsize": U,
          } = e,
          [Y, K] = l.useState(!1),
          q = l.useRef(null),
          Q = l.useRef(null),
          {
            avatarSrc: X,
            avatarDecorationSrc: J,
            eventHandlers: $,
          } = (0, M.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(s || Y),
          }),
          ee = (0, h.e7)([D.ZP], () =>
            D.ZP.isChannelMuted(t.getGuildId(), t.id),
          ),
          et = (0, h.e7)([O.ZP], () => O.ZP.getMentionCount(t.id) > 0),
          en = (0, S.ZP)(t),
          ei = (0, h.e7)([Z.Z], () => Z.Z.isFavorite(t.id)),
          el = () => {
            K(!0);
          },
          er = () => {
            K(!1);
          },
          ea = function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()),
              f.Z.closePrivateChannel(t.id, s, n);
          },
          es = () => {
            f.Z.preload(k.ME, t.id);
          },
          eo = (e) => {
            e.stopPropagation();
          },
          ec = (e) => {
            if (e.target === e.currentTarget) {
              var t;
              null === (t = q.current) || void 0 === t || t.click();
            }
          },
          eu = (e) => {
            t.isMultiUserDM()
              ? (0, _.jW)(
                  e,
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, i.jsx)(e, { ...n, channel: t, selected: s });
                  },
                  { noBlurEvent: !0 },
                )
              : (0, _.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("92453"),
                    n.e("56826"),
                    n.e("29212"),
                  ]).then(n.bind(n, 131404));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: d,
                      channel: t,
                      channelSelected: s,
                    });
                });
          },
          ed = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = B.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: en }),
              r = B.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: en });
            t.isManaged() &&
              ((l = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name: en,
              })),
              (r = B.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name: en,
              }))),
              (0, p.openModalLazy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (t) =>
                  (0, i.jsx)(e, { header: l, body: r, onSubmit: ea, ...t });
              });
          },
          eh = () => {
            let e = {
              className: V.activity,
              textClassName: V.activityText,
              emojiClassName: V.activityEmoji,
            };
            return t.isSystemDM()
              ? (0, i.jsx)("div", {
                  className: V.subtext,
                  children: (0, I.Z)(t.id)
                    ? B.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS
                    : B.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT,
                })
              : t.isMultiUserDM()
                ? (0, i.jsx)("div", {
                    className: V.subtext,
                    children: B.Z.Messages.MEMBERS_HEADER.format({
                      members: t.recipients.length + 1,
                    }),
                  })
                : null != A && A.length > 0
                  ? (0, i.jsx)(G.Z, {
                      ...e,
                      activities: A,
                      applicationStream: L,
                      animate: Y,
                      hideTooltip: !0,
                      user: d,
                    })
                  : null;
          },
          ep = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
              return t.recipients.length >= 2 && r && null == t.icon
                ? (0, i.jsx)(b.Z, {
                    "aria-hidden": !0,
                    recipients: t.recipients,
                    size: e,
                    isTyping: P,
                    status: y,
                  })
                : (0, i.jsx)(H, {
                    ...$,
                    src: (0, N.x)(t),
                    "aria-hidden": !0,
                    size: e,
                    status: P ? k.Skl.ONLINE : y,
                    isTyping: P,
                  });
            o()(
              null != d,
              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
            );
            let n = null;
            return (
              !d.isSystemUser() && (n = (0, m.Z)(A) ? k.Skl.STREAMING : y),
              (0, i.jsx)(H, {
                ...$,
                size: p.AvatarSizes.SIZE_32,
                src: X,
                avatarDecoration: J,
                status: n,
                isMobile: j,
                isTyping: P,
                "aria-label": d.username,
                statusTooltip: !0,
              })
            );
          },
          ef = t.isMultiUserDM(),
          e_ = t.isSystemDM(),
          em = (0, R.Q)(),
          eg =
            ef ||
            e_ ||
            t.type !== k.d4z.DM ||
            (null == d ? void 0 : d.clan) == null
              ? en
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    en,
                    (0, i.jsx)(x.ZP, {
                      clan: null == d ? void 0 : d.clan,
                      userId: null == d ? void 0 : d.id,
                      inline: !0,
                      disableGuildProfile: !0,
                      className: V.clanTag,
                    }),
                  ],
                });
        return (0, i.jsx)(u.mh, {
          id: t.id,
          children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsx)(v.Z, {
              className: V.channel,
              role: n,
              focusProps: { ...F, focusTarget: q, ringTarget: Q },
              ref: Q,
              onMouseEnter: el,
              onMouseLeave: er,
              onMouseDown: es,
              onContextMenu: eu,
              "aria-setsize": U,
              "aria-posinset": w,
              children: (0, i.jsxs)(p.Interactive, {
                className: a()(V.interactive, {
                  [V.interactiveSystemDM]: em && e_,
                  [V.interactiveSelected]: s,
                }),
                as: "div",
                onClick: ec,
                muted: ee,
                selected: s,
                children: [
                  (0, i.jsx)(c.rU, {
                    innerRef: q,
                    to: k.Z5c.CHANNEL(k.ME, t.id),
                    className: V.link,
                    "aria-label": (0, E.ZP)({ channel: t, unread: et }),
                    ...l,
                    children: (0, i.jsx)(C.Z, {
                      avatar: ep(),
                      selected: s,
                      highlighted: et,
                      muted: null != ee && ee,
                      subText: eh(),
                      name: (0, i.jsx)(T.Z, {
                        tooltipClassName: V.overflowTooltip,
                        children: eg,
                      }),
                      decorators: t.isSystemDM()
                        ? (0, i.jsx)(g.Z, {
                            className: V.decorator,
                            type: g.Z.Types.SYSTEM_DM,
                            verified: !0,
                          })
                        : null,
                    }),
                  }),
                  ei ? (0, i.jsx)(z, {}) : null,
                  (0, i.jsx)(W, {
                    "aria-label": ef
                      ? B.Z.Messages.LEAVE_GROUP_DM
                      : B.Z.Messages.CLOSE_DM,
                    onClick: ef ? ed : ea,
                    onMouseDown: eo,
                  }),
                ],
              }),
            });
          },
        });
      }
      t.ZP = (e) => {
        let { channel: t, selected: n, ...l } = e,
          r = (0, h.e7)([j.default], () =>
            j.default.getUser(t.getRecipientId()),
          ),
          {
            isStatusIndicatorEnabled: a,
            isTypingIndicatorEnabled: s,
            isFacepileEnabled: o,
          } = A.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
          ),
          c = null == r ? void 0 : r.id,
          u = (0, h.cj)(
            [P.Z, L.Z],
            () => {
              let e;
              if (t.isMultiUserDM()) {
                if (a) {
                  let n = P.Z.getState().statuses;
                  t.recipients.some((e) => n[e] === k.Skl.ONLINE) &&
                    (e = k.Skl.ONLINE);
                }
              } else null != c && (e = P.Z.getStatus(c));
              return {
                status: e,
                activities: null != c ? P.Z.getActivities(c) : null,
                applicationStream:
                  null != c ? L.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && P.Z.isMobileOnline(c),
              };
            },
            [t, c, a],
          ),
          d = (0, h.e7)(
            [j.default, y.Z],
            () => {
              if (t.isMultiUserDM())
                return (
                  !!s &&
                  w.default.keys(y.Z.getTypingUsers(t.id)).some((e) => {
                    var t;
                    return (
                      e !==
                      (null === (t = j.default.getCurrentUser()) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  })
                );
              if (null != r) return y.Z.isTyping(t.id, t.getRecipientId());
              return !1;
            },
            [t, r, s],
          );
        return t.isMultiUserDM()
          ? (0, i.jsx)(K, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === k.Skl.ONLINE ? k.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: o,
              ...l,
            })
          : (0, i.jsx)(K, {
              channel: t,
              selected: n,
              user: r,
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
        a = n(735250),
        s = n(470079),
        o = n(299608),
        c = n.n(o),
        u = n(91192),
        d = n(924826),
        h = n(442837),
        p = n(902704),
        f = n(481060),
        _ = n(925549),
        m = n(607070),
        g = n(367907),
        C = n(453542),
        I = n(702321),
        E = n(82295),
        N = n(313201),
        S = n(860144),
        x = n(214852),
        v = n(518311),
        T = n(355298),
        Z = n(869404),
        A = n(333984),
        b = n(210887),
        R = n(592125),
        M = n(158776),
        L = n(55589),
        P = n(515753),
        O = n(981631),
        y = n(689938),
        D = n(156762);
      function j(e, t, n) {
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
      let w = s.memo(function () {
        return (0, a.jsxs)("svg", {
          width: "184",
          height: "428",
          viewBox: "0 0 184 428",
          className: D.empty,
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
      class U extends (l = s.Component) {
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
              let { ref: l, role: r, ...s } = i;
              return (0, a.jsx)(f.FocusJumpSection, {
                children: (i) =>
                  (0, a.jsx)(f.List, {
                    fade: !0,
                    innerRole: r,
                    innerAriaLabel: y.Z.Messages.DIRECT_MESSAGES,
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
                    className: D.scroller,
                    sectionHeight: this.getSectionHeight,
                    paddingTop: t,
                    paddingBottom: 8,
                    rowHeight: this.getRowHeight,
                    renderSection: this.renderSection,
                    renderRow: this.renderRow,
                    sections: [n, Math.max(e.length, 1)],
                    ...s,
                    ...i,
                  }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            j(this, "state", {
              initialized: !1,
              preRenderedChildren: 0,
              totalRowCount: 0,
              nonNullChildren: [],
            }),
            j(this, "_list", null),
            j(this, "hasReportedAnalytics", !1),
            j(this, "reportAnalytics", () => {
              var e;
              if (this.hasReportedAnalytics) return;
              let t =
                null === (e = this._list) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
              if (null == t) return;
              let { privateChannelIds: n, channels: i } = this.props;
              if (0 === n.length) return;
              let l = s.Children.count(this.props.children);
              if (null == t) return;
              let r = Math.round((t.offsetHeight - 44 * l) / 44),
                a = r > n.length ? n.slice(0, r + 1) : n,
                o = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                c = n.some((e) => (0, I.Z)(e)),
                u = {
                  num_users_visible: a.length,
                  num_users_visible_with_mobile_indicator: o.filter(
                    (e) => null != e && M.Z.isMobileOnline(e),
                  ).length,
                };
              (this.hasReportedAnalytics = !0),
                g.ZP.trackWithMetadata(O.rMx.DM_LIST_VIEWED, {
                  ...u,
                  ...(0, C.X)(),
                  changelog_dm_visible: c,
                });
            }),
            j(this, "getSectionHeight", (e) => {
              let { showDMHeader: t } = this.props;
              return 0 === e ? 0 : t ? 40 : 0;
            }),
            j(
              this,
              "handleScroll",
              c()(() => {
                if (null != this._list) {
                  let e = this._list.getScrollerNode();
                  null != e && _.Z.updateChannelListScroll(O.ME, e.scrollTop);
                }
              }, 100),
            ),
            j(this, "renderDM", (e, t) => {
              let {
                  privateChannelIds: n,
                  channels: i,
                  selectedChannelId: l,
                } = this.props,
                { totalRowCount: r, preRenderedChildren: s } = this.state,
                o = i[n[t]];
              return null == o
                ? null
                : (0, a.jsx)(
                    P.ZP,
                    {
                      channel: o,
                      selected: o.id === l,
                      "aria-posinset": s + t + 1,
                      "aria-setsize": r,
                    },
                    o.id,
                  );
            }),
            j(this, "renderChild", (e) => {
              let { nonNullChildren: t, totalRowCount: n } = this.state,
                i = t[e];
              return s.isValidElement(i)
                ? s.cloneElement(i, {
                    "aria-setsize": n,
                    "aria-posinset": e + 1,
                  })
                : i;
            }),
            j(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                { privateChannelIds: i } = this.props;
              return 0 === t
                ? this.renderChild(n)
                : 0 === n && 0 === i.length
                  ? (0, a.jsx)(w, {}, "no-private-channels")
                  : this.renderDM(t, n);
            }),
            j(this, "renderSection", (e) => {
              let { section: t } = e,
                { showDMHeader: n } = this.props;
              return 0 !== t && n
                ? (0, a.jsxs)(
                    E.Z,
                    {
                      className: D.privateChannelsHeaderContainer,
                      children: [
                        (0, a.jsx)("span", {
                          className: D.headerText,
                          children: y.Z.Messages.DIRECT_MESSAGES,
                        }),
                        (0, a.jsx)(v.Z, {
                          tooltip: y.Z.Messages.CREATE_DM,
                          tooltipPosition: "top",
                          popoutAlign: "left",
                          iconClassName:
                            D.privateChannelRecipientsInviteButtonIcon,
                          icon: f.PlusSmallIcon,
                          subscribeToGlobalHotkey: !0,
                        }),
                      ],
                    },
                    t,
                  )
                : null;
            }),
            j(this, "getRowHeight", (e, t) => {
              let { privateChannelIds: n } = this.props;
              return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
        }
      }
      j(U, "defaultProps", { padding: 8 });
      t.Z = (e) => {
        let { version: t, theme: n, children: i, showDMHeader: l } = e,
          r = s.Children.count(i),
          o = R.Z.getMutablePrivateChannels(),
          c = (0, Z.k1)(o),
          p = (0, h.Wu)(
            [L.Z, T.Z, A.Z],
            () => {
              let e = L.Z.getPrivateChannelIds();
              return (0, Z.tU)(e, [T.Z, A.Z]);
            },
            [],
          );
        (0, x.z)(S.R);
        let f = (0, h.cj)([m.Z, b.Z, R.Z], () => ({
            theme: b.Z.darkSidebar ? O.BRd.DARK : n,
            keyboardModeEnabled: m.Z.keyboardModeEnabled,
            version:
              null != t
                ? "".concat(t, ":").concat(R.Z.getPrivateChannelsVersion())
                : R.Z.getPrivateChannelsVersion(),
          })),
          _ = s.useRef(null),
          g = s.useCallback((e) => {
            let t = _.current,
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
          C = s.useCallback(
            () =>
              new Promise((e) => {
                let t = _.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [],
          ),
          I = s.useCallback(
            () =>
              new Promise((e) => {
                let t = _.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            [],
          ),
          E = (0, N.Dt)(),
          v = (0, d.ZP)({
            id: "private-channels-".concat(E),
            isEnabled: f.keyboardModeEnabled,
            scrollToStart: C,
            scrollToEnd: I,
            defaultFocused: (r + (l ? 1 : 0)).toString(),
            setFocus: g,
          });
        return (0, a.jsx)(u.bG, {
          navigator: v,
          children: (0, a.jsx)(U, {
            channels: c,
            privateChannelIds: p,
            listRef: _,
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
        l = n(470079),
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
      class s extends (i = l.Component) {
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
            s = [],
            o = null != e[0] ? e[0].bytes : 0;
          for (; r < t + i; r++) {
            let t;
            let i = l - (r + 1) * n;
            for (; a < e.length; )
              if ((t = e[a]).timestamp > i) a++;
              else break;
            if (a === e.length) break;
            null != t && (s.push(o - t.bytes), (o = t.bytes));
          }
          for (; r < t + i; r++) s.push(0);
          return s.reverse(), s;
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
      a(s, "defaultProps", {
        numUpdatesToShow: 30,
        updateInterval: 500,
        pointsToSmooth: 10,
      }),
        (t.Z = s);
    },
    339149: function (e, t, n) {
      n.d(t, {
        E: function () {
          return A;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i,
        l = n(735250),
        r = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(748780),
        c = n(442837),
        u = n(692547),
        d = n(215569),
        h = n(481060),
        p = n(812206),
        f = n(707409),
        _ = n(703656),
        m = n(417363),
        g = n(941128),
        C = n(780570),
        I = n(353042),
        E = n(981631),
        N = n(689938),
        S = n(213169);
      function x(e, t, n) {
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
      let v = {
        [E.vxO.INSTALLING]: {
          [f.J6.NONE]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
              name: e,
            }),
          [f.J6.SECONDS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.MINUTES]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.HOURS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format(
              { name: e, timeRemaining: t },
            ),
        },
        [E.vxO.UPDATING]: {
          [f.J6.NONE]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
              name: e,
            }),
          [f.J6.SECONDS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.MINUTES]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.HOURS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
              name: e,
              timeRemaining: t,
            }),
        },
        [E.vxO.REPAIRING]: {
          [f.J6.NONE]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
              name: e,
            }),
          [f.J6.SECONDS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.MINUTES]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format(
              { name: e, timeRemaining: t },
            ),
          [f.J6.HOURS]: (e, t) =>
            N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format(
              { name: e, timeRemaining: t },
            ),
        },
      };
      class T extends r.PureComponent {
        renderText() {
          let { state: e, isPaused: t } = this.props;
          if (
            e.type === E.vxO.UPDATING ||
            e.type === E.vxO.REPAIRING ||
            e.type === E.vxO.INSTALLING
          ) {
            if (t) return N.Z.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
            if (e.stage === E.f07.PATCHING || e.stage === E.f07.REPAIRING)
              return (0, l.jsx)(I.Z, {
                getHistoricalTotalBytes: m.Z.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody,
              });
          }
          return null;
        }
        render() {
          let e = this.renderText();
          return null != e ? e : N.Z.Messages.LIBRARY;
        }
        constructor(...e) {
          super(...e),
            x(this, "renderProgressBody", (e, t) => {
              let { state: n, application: i } = this.props,
                { stage: l, progress: r, total: a, type: s } = n;
              if (null == r || null == a || null == l) return null;
              let o = (e[e.length - 1] / t) * 1e3,
                c = 0 !== o ? Math.max(1, (a - r) / o) : null,
                u = v[s],
                d = null != u ? Object.keys(u) : [],
                { unit: h, time: p } = (0, f.CI)(null != c ? c / 60 : null, d);
              if (null != u && null != h) {
                let e = u[h];
                return null != e ? e(i.name, p) : null;
              }
              return null;
            });
        }
      }
      class Z extends (i = r.PureComponent) {
        componentWillAppear(e) {
          this.state.animationScale.setValue(1), e();
        }
        componentWillEnter(e) {
          o.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200,
          }).start(e);
        }
        componentWillLeave(e) {
          o.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200,
          }).start(e);
        }
        getTooltipText() {
          let { firstApplication: e, firstState: t, isPaused: n } = this.props;
          return null == e || null == t
            ? N.Z.Messages.LIBRARY
            : (0, l.jsx)(T, { application: e, state: t, isPaused: n });
        }
        render() {
          let { percent: e, isPaused: t, className: n } = this.props;
          return (0, l.jsx)(o.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: s()(n, S.progressContainer),
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
                      className: S.downloadIcon,
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            x(this, "state", { animationScale: new o.Z.Value(0) }),
            x(this, "handleOnClick", (e) => {
              let { onClick: t } = this.props;
              e.preventDefault(),
                e.stopPropagation(),
                null != t && t(e),
                (0, _.uL)(E.Z5c.APPLICATION_LIBRARY);
            });
        }
      }
      x(Z, "defaultProps", { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
      function A(e, t) {
        return e.reduce((e, n) => {
          let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
          return null != r && e.push(r), e;
        }, []);
      }
      t.Z = c.ZP.connectStores([g.Z, m.Z, p.Z], () => {
        let e = g.Z.activeItems,
          t = A(e, m.Z),
          { total: n, progress: i } = C.lK(t);
        return {
          percent: C.xI(i, n),
          isPaused: g.Z.paused,
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
                  ? (0, l.jsx)(Z, { ...n })
                  : null,
            })
          : (0, l.jsx)(Z, { ...n });
      });
    },
    170509: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(933557),
        a = n(689938),
        s = n(884921);
      function o(e) {
        let { channel: t, category: n, ...o } = e,
          c = (0, r.ZP)(t, !0),
          u = (0, r.ZP)(n);
        return (0, i.jsx)(l.ConfirmModal, {
          header: a.Z.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
          confirmText: a.Z.Messages.SYNC_PERMISSIONS,
          cancelText: a.Z.Messages.KEEP_PERMISSIONS,
          confirmButtonColor: l.Button.Colors.BRAND,
          ...o,
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: s.message,
            selectable: !1,
            children: a.Z.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
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
          return T;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(582966),
        r = n(895162),
        a = n(433517),
        s = n(481060),
        o = n(749210),
        c = n(170509),
        u = n(740504),
        d = n(117984),
        h = n(398758),
        p = n(680089),
        f = n(592125),
        _ = n(324067),
        m = n(984933),
        g = n(430824),
        C = n(496675),
        I = n(914010),
        E = n(281029),
        N = n(700785),
        S = n(981631);
      let x = "DRAGGABLE_GUILD_CHANNEL";
      function v(e, t) {
        var n, i;
        if (null == e || null == t) return null;
        if (e !== S.I_8) return f.Z.getChannel(t);
        let l = m.ZP.getChannels(e),
          r =
            null !==
              (i =
                null !== (n = l[m.sH].find((e) => e.channel.id === t)) &&
                void 0 !== n
                  ? n
                  : l[m.Zb].find((e) => e.channel.id === t)) && void 0 !== i
              ? i
              : l[S.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
        return null == r ? void 0 : r.channel;
      }
      function T(e) {
        return (0, l.G)(
          x,
          {
            drop(e, t) {
              let n;
              let l = I.Z.getGuildId(),
                r = t.getItem(),
                a = (0, E.if)(
                  v(l, r.id),
                  r.position,
                  e.channel,
                  e.position,
                  r.channelList,
                );
              if (null == a) return;
              let u = v(l, r.id);
              if (null == u) return;
              let h = _.Z.getCategories(l),
                p = g.Z.getGuild(l);
              if (null == p) return;
              let m = (0, E.Dn)(u, v(l, a.referenceId), a.parentId, h);
              if (0 !== m.length) {
                if (l === S.I_8) {
                  (0, d.s3)(m);
                  return;
                }
                if (
                  ((m = m.filter((e) => {
                    let { id: t } = e,
                      n = f.Z.getChannel(t);
                    if (null == n) return !1;
                    let i = f.Z.getChannel(n.parent_id);
                    return n.type === S.d4z.GUILD_CATEGORY || null == i
                      ? C.Z.can(S.Plq.MANAGE_CHANNELS, p)
                      : C.Z.can(S.Plq.MANAGE_CHANNELS, i);
                  })),
                  u.parent_id !== a.parentId &&
                    m.find((e) => {
                      if (e.id !== u.id) return !1;
                      let t = f.Z.getChannel(e.parent_id);
                      if (
                        !(
                          null != t &&
                          C.Z.can(S.Plq.MANAGE_ROLES, u) &&
                          C.Z.can(S.Plq.MANAGE_ROLES, t)
                        )
                      )
                        return !0;
                      let i = N.o4(u, t),
                        l = N.o4(u, f.Z.getChannel(u.parent_id));
                      return (
                        ((null == u.parent_id && !i) || (l && !i)) && (n = e),
                        !0
                      );
                    }),
                  null != n)
                ) {
                  let e = f.Z.getChannel(n.parent_id);
                  null != e &&
                    (0, s.openModal)((t) =>
                      (0, i.jsx)(c.default, {
                        ...t,
                        channel: u,
                        category: e,
                        onConfirm: () => {
                          null != n &&
                            ((n.lock_permissions = !0),
                            o.Z.batchChannelUpdate(l, m));
                        },
                        onCancel: () => {
                          null != n && o.Z.batchChannelUpdate(l, m);
                        },
                      }),
                    );
                } else o.Z.batchChannelUpdate(l, m);
              }
            },
            canDrop(e, t) {
              let n = t.getItem(),
                i = f.Z.getChannel(n.id);
              if (null == i) return !1;
              let l = (0, E.if)(
                f.Z.getChannel(n.id),
                n.position,
                e.channel,
                e.position,
                n.channelList,
              );
              if (null == l) return !1;
              if (I.Z.getGuildId() === S.I_8) return !0;
              let r = g.Z.getGuild(n.guildId);
              if (null == r) return !1;
              let a = f.Z.getChannel(l.parentId),
                s = f.Z.getChannel(i.parent_id),
                o = C.Z.can(S.Plq.MANAGE_CHANNELS, r),
                c = null != s ? C.Z.can(S.Plq.MANAGE_CHANNELS, s) : o,
                u = null != a ? C.Z.can(S.Plq.MANAGE_CHANNELS, a) : o;
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
            x,
            {
              canDrag(e) {
                let { channel: t } = e;
                if (I.Z.getGuildId() === S.I_8) return !0;
                let l = g.Z.getGuild(t.getGuildId());
                if (null == l) return !1;
                if ((0, h.r1)(l.id) && C.Z.can(S.Plq.MANAGE_CHANNELS, l))
                  return (
                    "true" !== a.K.get("doNotShowReorderModal") &&
                      (0, s.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("82560")
                          .then(n.bind(n, 391312));
                        return (t) => (0, i.jsx)(e, { ...t });
                      }),
                    !1
                  );
                if (t.type === S.d4z.GUILD_CATEGORY)
                  return C.Z.can(S.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                let r = f.Z.getChannel(t.parent_id);
                return (
                  (null != r && C.Z.can(S.Plq.MANAGE_CHANNELS, r)) ||
                  (null == r && C.Z.can(S.Plq.MANAGE_CHANNELS, l))
                );
              },
              beginDrag(e) {
                let {
                    channel: { id: t, parent_id: n, guild_id: i, type: l },
                    position: r,
                  } = e,
                  a = I.Z.getGuildId(),
                  s = _.Z.getCategories(a);
                return {
                  isChannelDrag: !0,
                  id: t,
                  position: r,
                  parentId: n,
                  type: l,
                  channelList: (0, u.Z)(s._categories, s, (e) => {
                    let { channel: t } = e;
                    if (
                      t.type === S.d4z.GUILD_CATEGORY &&
                      null != s[t.id] &&
                      0 === s[t.id].length
                    )
                      return (
                        a === S.I_8 ||
                        (C.Z.can(S.Plq.MANAGE_CHANNELS, t) &&
                          C.Z.can(S.Plq.VIEW_CHANNEL, t))
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
      var i = n(470079);
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
          return x;
        },
        Xq: function () {
          return v;
        },
        Zg: function () {
          return T;
        },
      }),
        n(411104);
      var i = n(186070),
        l = n(185514),
        r = n(360038),
        a = n(175724),
        s = n(705371),
        o = n(138976),
        c = n(167042),
        u = n(239748),
        d = n(337482),
        h = n(679080),
        p = n(510761),
        f = n(189509),
        _ = n(673553),
        m = n(280492),
        g = n(746887),
        C = n(721383),
        I = n(743810),
        E = n(981631),
        N = n(689938);
      function S() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map((e) => {
          let t = x[e];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      let x = {
          [E.EkH.SERVER_NEXT]: p.nq,
          [E.EkH.SERVER_PREV]: p.X3,
          [E.EkH.CHANNEL_NEXT]: l.tQ,
          [E.EkH.CHANNEL_PREV]: l.x5,
          [E.EkH.NAVIGATE_BACK]: l.Nx,
          [E.EkH.NAVIGATE_FORWARD]: l.On,
          [E.EkH.UNREAD_NEXT]: I.pd,
          [E.EkH.UNREAD_PREV]: I.wk,
          [E.EkH.MENTION_CHANNEL_NEXT]: I.Nv,
          [E.EkH.MENTION_CHANNEL_PREV]: I.uX,
          [E.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
          [E.EkH.JUMP_TO_GUILD]: r.u,
          [E.EkH.SUBMIT]: f.z,
          [E.EkH.TEXTAREA_FOCUS]: _.U,
          [E.EkH.MARK_CHANNEL_READ]: a.f,
          [E.EkH.MARK_SERVER_READ]: s.l,
          [E.EkH.TOGGLE_MUTE]: m.iN,
          [E.EkH.TOGGLE_DEAFEN]: m.oV,
          [E.EkH.TOGGLE_CATEGORY_COLLAPSED]: g.u,
          [E.EkH.SCROLL_UP]: d.B2,
          [E.EkH.SCROLL_DOWN]: d.gN,
          [E.EkH.SEARCH_EMOJIS]: h.S,
          [E.EkH.TOGGLE_HOTKEYS]: C._,
          [E.EkH.JUMP_TO_FIRST_UNREAD]: o.O,
          [E.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
          [E.EkH.CALL_ACCEPT]: i.IL,
          [E.EkH.CALL_START]: i.FI,
          [E.EkH.QUICKSWITCHER_SHOW]: c.$,
        },
        v = { [E.EkH.QUICKSWITCHER_SHOW]: c.$ };
      function T() {
        return [
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: S(E.EkH.SERVER_PREV, E.EkH.SERVER_NEXT),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: S(E.EkH.CHANNEL_PREV, E.EkH.CHANNEL_NEXT),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: S(E.EkH.NAVIGATE_BACK, E.EkH.NAVIGATE_FORWARD),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: S(E.EkH.UNREAD_PREV, E.EkH.UNREAD_NEXT),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: S(E.EkH.MENTION_CHANNEL_PREV, E.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: S(E.EkH.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: S(E.EkH.MARK_SERVER_READ),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: S(E.EkH.MARK_CHANNEL_READ),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: S(E.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: S(E.EkH.TOGGLE_MUTE),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: S(E.EkH.TOGGLE_DEAFEN),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: S(E.EkH.CALL_ACCEPT),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: S(E.EkH.MARK_CHANNEL_READ),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: S(E.EkH.CALL_START),
            groupEnd: !0,
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: S(E.EkH.SCROLL_UP, E.EkH.SCROLL_DOWN),
          },
          {
            description:
              N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: S(E.EkH.JUMP_TO_FIRST_UNREAD),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: S(E.EkH.TEXTAREA_FOCUS),
          },
          {
            description: N.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: S(E.EkH.QUICKSWITCHER_SHOW),
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
        s = n(585483),
        o = n(547420),
        c = n(981631);
      let u = {
        POP_LAYER: {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, l.isInDndMode)()) return !1;
            if (s.S.hasSubscribers(c.CkL.CALL_DECLINE))
              return s.S.dispatch(c.CkL.CALL_DECLINE), !1;
            if (a.Z.close()) return !1;
            if ((0, i.k)(e.target)) {
              let t = (0, r.J5)(e.target);
              if (null == t ? void 0 : t.hasSubscribers(c.CkL.POPOUT_CLOSE))
                return t.dispatch(c.CkL.POPOUT_CLOSE), !1;
            }
            if (s.S.hasSubscribers(c.CkL.MODAL_CLOSE))
              return s.S.dispatch(c.CkL.MODAL_CLOSE), !1;
            s.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY);
          },
        },
        ...o.ZP,
      };
    },
    472365: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(411104);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(399606),
        o = n(481060),
        c = n(588705),
        u = n(100527),
        d = n(906732),
        h = n(388905),
        p = n(792766),
        f = n(600164),
        _ = n(436774),
        m = n(313201),
        g = n(451603),
        C = n(885714),
        I = n(973616),
        E = n(594174),
        N = n(855981),
        S = n(55543),
        x = n(626135),
        v = n(768581),
        T = n(358085),
        Z = n(998502),
        A = n(379164),
        b = n(590965),
        R = n(981631),
        M = n(474936),
        L = n(689938),
        P = n(56180),
        O = n(113207);
      function y() {
        let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(
          u.Z.PREMIUM_UPSELL_TOOLTIP,
        );
        return (
          l.useEffect(() => {
            x.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
              type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
              location: { page: R.ZY5.NATIVE_INVITE_MODAL },
              location_stack: t,
            });
          }, [t]),
          (0, i.jsxs)(o.Clickable, {
            onClick: () =>
              (0, C.Z)({
                analyticsSource: { page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                analyticsLocation: {
                  page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                  section: R.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: e,
              }),
            className: P.experimentUpsellError,
            children: [
              (0, i.jsx)(o.NitroWheelIcon, {
                size: "md",
                className: P.experimentUpsellIcon,
                color: _.JX.PREMIUM_TIER_2,
              }),
              (0, i.jsx)("span", {
                className: P.experimentUpsellText,
                children: L.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP,
              }),
              (0, i.jsx)("span", {
                className: P.experimentGetNitro,
                children: L.Z.Messages.GUILD_CAP_UPSELL_GET_NITRO,
              }),
            ],
          })
        );
      }
      function D(e) {
        let { className: t } = e;
        return (0, i.jsxs)("div", {
          "aria-hidden": "true",
          className: a()(P.iconContainer, t),
          children: [
            (0, i.jsx)(N.Z, { className: P.iconSparklePlus }),
            (0, i.jsx)(o.LinkIcon, {
              size: "custom",
              color: "currentColor",
              className: P.iconLink,
              width: 40,
              height: 40,
            }),
            (0, i.jsx)(S.Z, { className: P.iconSparkleStar }),
          ],
        });
      }
      function j(e) {
        let { transitionState: t } = e,
          n = (0, m.Dt)(),
          { analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
        return (0, i.jsx)(d.Gt, {
          value: l,
          children: (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            "aria-labelledby": n,
            transitionState: t,
            children: (0, i.jsxs)(o.ModalContent, {
              className: P.errorContent,
              children: [
                (0, i.jsx)(D, { className: P.errorImage }),
                (0, i.jsx)(o.Heading, {
                  id: n,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE,
                }),
                (0, i.jsx)("div", {
                  className: P.errorBody,
                  children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY,
                }),
                (0, i.jsx)(h.zx, {
                  size: h.zx.Sizes.LARGE,
                  onClick: () => A.Z.close(),
                  color: h.zx.Colors.BRAND,
                  children: L.Z.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT,
                }),
              ],
            }),
          }),
        });
      }
      function w(e) {
        let t,
          n,
          { transitionState: r } = e;
        (0, s.e7)([E.default], () => {
          var e;
          return null === (e = E.default.getCurrentUser()) || void 0 === e
            ? void 0
            : e.premiumType;
        });
        let {
          invite: _,
          error: C,
          submitting: N,
        } = (0, s.cj)([b.Z], () => b.Z.getProps());
        l.useEffect(() => {
          !__OVERLAY__ &&
            T.isPlatformEmbedded &&
            ((0, T.isWindows)() ? Z.ZP.minimize() : Z.ZP.restore(),
            Z.ZP.focus());
        }, []);
        let S = (0, m.Dt)(),
          { analyticsLocations: x } = (0, d.ZP)(u.Z.INVITE_MODAL);
        if (null == _) return null;
        if (
          _.state === R.r2o.EXPIRED ||
          _.state === R.r2o.BANNED ||
          _.state === R.r2o.ERROR
        )
          return (0, i.jsx)(j, { transitionState: r });
        if (null == _.channel) return null;
        function M() {
          null != _ && A.Z.acceptInvite(_);
        }
        let { guild: D, channel: w, inviter: U, target_application: G } = _,
          k = null != D,
          B = null != _.stage_instance,
          V = null == _.guild && null == _.channel && null != _.inviter;
        if (null != G)
          (t = null == D ? void 0 : D.name),
            (n = I.Z.createFromServer(G).getCoverImageURL(1024));
        else if (null != D)
          (t = D.name),
            (n = v.ZP.getGuildSplashURL({ id: D.id, splash: D.splash }));
        else if (
          ((null == (t = w.name) || "" === t) && null != U && (t = U.username),
          null == t)
        )
          throw Error("no name for group DM invite");
        let H = (0, g.yU)(),
          F = B
            ? L.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE
            : L.Z.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
        return (
          V && (F = L.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON),
          (0, i.jsx)(d.Gt, {
            value: x,
            children: (0, i.jsxs)(o.ModalRoot, {
              size: o.ModalSize.DYNAMIC,
              "aria-labelledby": S,
              transitionState: r,
              className: P.container,
              children: [
                (0, i.jsx)("div", {
                  className: P.contentWrapper,
                  children: (0, i.jsx)(o.Scroller, {
                    className: P.scroller,
                    children: (0, i.jsxs)(f.Z, {
                      className: P.inviteContent,
                      direction: f.Z.Direction.VERTICAL,
                      justify: f.Z.Justify.BETWEEN,
                      children: [
                        (0, i.jsx)("div", {
                          id: S,
                          className: O.marginBottom20,
                          children: (0, i.jsx)(c.Z, {
                            invite: _,
                            disableUser: k,
                            error: C,
                          }),
                        }),
                        B && null != D
                          ? (0, i.jsx)("div", {
                              className: a()(O.marginBottom20, P.stage),
                              children: (0, i.jsx)(p.Z, {
                                isCard: !0,
                                stageInstance: _.stage_instance,
                                guild: D,
                              }),
                            })
                          : null,
                        (0, i.jsxs)("div", {
                          children: [
                            H ? (0, i.jsx)(y, {}) : null,
                            null == G
                              ? (0, i.jsx)(o.Tooltip, {
                                  text: H
                                    ? L.Z.Messages
                                        .TOO_MANY_USER_GUILDS_DESCRIPTION
                                    : null,
                                  position: "bottom",
                                  children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } =
                                      e;
                                    return (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: N,
                                      disabled: H,
                                      color: B
                                        ? h.zx.Colors.GREEN
                                        : h.zx.Colors.BRAND,
                                      onMouseEnter: t,
                                      onMouseLeave: n,
                                      children: H
                                        ? L.Z.Messages
                                            .GUILD_CAP_INVITE_MODAL_BUTTON
                                        : F,
                                    });
                                  },
                                })
                              : (0, i.jsxs)("div", {
                                  className: P.buttonGroup,
                                  children: [
                                    (0, i.jsx)(h.zx, {
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: N,
                                      children: L.Z.Messages.PLAY,
                                    }),
                                    (0, i.jsx)(h.zx, {
                                      color: h.zx.Colors.PRIMARY,
                                      size: h.zx.Sizes.LARGE,
                                      onClick: M,
                                      submitting: N,
                                      children: L.Z.Messages.SPECTATE,
                                    }),
                                  ],
                                }),
                            (0, i.jsx)(f.Z, {
                              justify: f.Z.Justify.CENTER,
                              className: O.marginTop8,
                              children: (0, i.jsx)(h.zx, {
                                look: h.zx.Looks.LINK,
                                className: P.noThanksButton,
                                onClick: function () {
                                  A.Z.close();
                                },
                                color: h.zx.Colors.TRANSPARENT,
                                children: L.Z.Messages.INIVTE_MODAL_NO_THANKS,
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
                    className: P.inviteSplash,
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
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(570140),
        a = n(317770),
        s = n(472365),
        o = n(590965);
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
          o.Z.isOpen() &&
            !(0, l.hasModalOpen)(c) &&
            (0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), {
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
        s,
        o = n(442837),
        c = n(570140),
        u = n(413605),
        d = n(703656),
        h = n(131704),
        p = n(601964),
        f = n(592125),
        _ = n(430824),
        m = n(701190),
        g = n(496675),
        C = n(594174),
        I = n(998502),
        E = n(981631),
        N = n(176505);
      let S = E.IlC.APP,
        x = !1,
        v = !1,
        T = [];
      function Z() {
        x = !0;
      }
      class A extends (l = o.ZP.Store) {
        initialize() {
          this.waitFor(_.Z, m.Z, C.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? E.IlC.OVERLAY : E.IlC.APP;
          return !!(x && T.length > 0 && S === e);
        }
        getProps() {
          return {
            invite: T.length > 0 ? T[0][0] : null,
            error: null != i && "" !== i ? i : null,
            submitting: v,
          };
        }
      }
      (s = "InviteModalStore"),
        (a = "displayName") in (r = A)
          ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[a] = s),
        (t.Z = new A(c.Z, {
          OVERLAY_INITIALIZE: Z,
          CONNECTION_OPEN: Z,
          CONNECTION_CLOSED: function () {
            x = !1;
          },
          INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (
              !(
                t.state === E.r2o.EXPIRED ||
                t.state === E.r2o.BANNED ||
                t.state === E.r2o.ERROR
              )
            ) {
              let { channel: e, guild: n } = t;
              if (null == e) return !1;
              if ((0, h.bc)(e.type)) {
                if (null != f.Z.getChannel(e.id))
                  return (0, d.XU)(E.ME, e.id), I.ZP.focus(), !1;
              } else {
                if (null == n) return !1;
                if (null != _.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                  let e = (function (e) {
                    if ((0, u.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
                    let { channel: t } = e;
                    if (null != t) {
                      let e = f.Z.getChannel(t.id);
                      if (g.Z.can(E.Plq.VIEW_CHANNEL, e)) return t.id;
                    }
                    return null;
                  })(t);
                  return (0, d.XU)(n.id, e), I.ZP.focus(), !1;
                }
              }
            }
            if (
              T.some((e) => {
                let [n] = e;
                return n.code === t.code;
              })
            )
              return !1;
            (S = e.context), (v = !1);
            let n = (function (e) {
              let {
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  code: i,
                  state: l,
                  target_type: r,
                  target_user: a,
                  target_application: s,
                  stage_instance: o,
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
                  target_application: s,
                  stage_instance: o,
                  type: c,
                };
              return (
                null != u && (h.channel = { ...u }),
                null != d && (h.guild = new p.ZP(d)),
                null != e.inviter && (h.inviter = { ...e.inviter }),
                h
              );
            })(t);
            T.push([n, e.resolve]);
          },
          INVITE_MODAL_CLOSE: function () {
            if (((i = null), (v = !1), T.length > 0)) {
              let [, e] = T.shift();
              null != e && e();
            }
          },
          INVITE_ACCEPT: function () {
            v = !0;
          },
          INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (v = !1);
          },
        }));
    },
    503737: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(570140),
        a = n(468026),
        s = n(317770),
        o = n(689938);
      let c = "ActivityInviteManager",
        u = () => {
          r.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
        };
      class d extends s.Z {
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
          let { activity: t, isPrivate: r } = e;
          r
            ? (0, l.openModal)(
                (e) =>
                  (0, i.jsx)(a.default, {
                    title: o.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                      name: t.name,
                    }),
                    body: o.Z.Messages.ACTIVITY_INVITE_PRIVATE,
                    confirmText: o.Z.Messages.OKAY,
                    ...e,
                  }),
                { onCloseCallback: u, modalKey: c },
              )
            : (0, l.openModalLazy)(
                async () => {
                  let { default: e } = await n
                    .e("79921")
                    .then(n.bind(n, 699099));
                  return (t) => (0, i.jsx)(e, { ...t });
                },
                { onCloseCallback: u, modalKey: c },
              );
        }
        handleModalClose(e) {
          (0, l.closeModal)(c);
        }
      }
      t.Z = new d();
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
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(481060),
        a = n(594174),
        s = n(74538),
        o = n(327943),
        c = n(997945),
        u = n(630117),
        d = n(441319);
      function h() {
        let [e, t, n] = (0, l.Wu)([a.default, o.Z], () => [
            o.Z.getCurrentDesktopIcon(),
            o.Z.isEditorOpen,
            s.ZP.isPremium(a.default.getCurrentUser()),
          ]),
          h = d.QA[e],
          p = e !== c.aH.DEFAULT && (n || t),
          f = (0, r.useRedesignIconContext)().enabled,
          _ = (0, i.jsx)(r.ClydeIcon, {
            size: "custom",
            color: "currentColor",
            width: 30,
            height: f ? 30 : 22,
          });
        return null != h && p ? (0, i.jsx)(u.Z, { id: e, width: 48 }) : _;
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return g;
        },
        KQ: function () {
          return _;
        },
        MU: function () {
          return d;
        },
        m0: function () {
          return f;
        },
        rf: function () {
          return C;
        },
        tu: function () {
          return m;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var i = n(860911),
        l = n(477690),
        r = n(481060),
        a = n(134432),
        s = n(703656),
        o = n(768581),
        c = n(981631),
        u = n(689938);
      let d = 0,
        { API_ENDPOINT: h, CDN_HOST: p } = window.GLOBAL_ENV;
      function f(e) {
        return e.id === d;
      }
      function _() {
        return { id: d, name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function m(e) {
        switch (e.id) {
          case 0:
            return r.GlobeEarthIcon;
          case 4:
            return r.TvIcon;
          case 5:
            return r.AnalyticsIcon;
          case 6:
            return r.GameControllerIcon;
          case 8:
            break;
          case 9:
            return r.FriendsIcon;
          case 10:
            return r.WrenchIcon;
        }
        return r.AsteriskIcon;
      }
      function g(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, a.oO)(
              parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, a.x_)(),
            ).toString(),
          }).toString(),
          r = o.$k ? "webp" : "png";
        return null != p
          ? ""
              .concat(location.protocol, "//")
              .concat(p, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(h)
              .concat(
                c.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(i);
      }
      function C() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          l = (0, i.Ui)(n, !1);
        (0, s.uL)(l);
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return u;
          },
          goSearch: function () {
            return f;
          },
          goToAppDirectory: function () {
            return c;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return h;
          },
          goToApplicationStoreSku: function () {
            return p;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return m;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(703656),
        l = n(626135),
        r = n(34674),
        a = n(132871),
        s = n(272242),
        o = n(981631);
      let c = (e) => {
          let {
              view: t = a.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: r,
              entrypoint: c,
              skuId: _,
            } = e,
            m = { ...c, pathname: window.location.pathname };
          switch (
            (l.default.track(o.rMx.APP_DIRECTORY_OPENED, {
              source: null == m ? void 0 : m.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(m),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              u();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != r) {
                  if (
                    r === s.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    p({ applicationId: i, skuId: _ });
                    break;
                  }
                  h({ applicationId: i, section: r });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        h = (e) => {
          let { applicationId: t, section: n } = e,
            l = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: l,
          });
        },
        p = (e) => {
          let { applicationId: t, skuId: n } = e,
            l = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: l,
          });
        },
        f = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            l = new URLSearchParams(),
            r = { previousView: (0, a.getCurrentView)() };
          null != e && l.set("q", e),
            null != t && l.set("category_id", t.toString()),
            null != n && l.set("page", n.toString()),
            (0, i.uL)(o.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: l.toString(),
              state: r,
            });
        },
        _ = (e) => {
          let { categoryId: t } = e;
          f({ categoryId: null != t ? t : r.MU });
        },
        m = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    570908: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(609415);
      function s(e) {
        let {
          selected: t,
          muted: n = !1,
          highlighted: l = !1,
          wrapContent: s = !1,
          avatar: o,
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
            [a.wrappedLayout]: s,
          }),
          children: [
            (0, i.jsx)("div", { className: r()(a.avatar, h), children: o }),
            (0, i.jsxs)("div", {
              className: a.content,
              children: [
                (0, i.jsxs)("div", {
                  className: a.nameAndDecorators,
                  children: [
                    (0, i.jsx)("div", {
                      className: r()(a.name, { [a.wrappedName]: s }),
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
        l = n(689938);
      function r(e) {
        let { channel: t, embeddedApps: n } = e;
        if (t.type === i.d4z.GUILD_VOICE) {
          if (null == n || !(n.length > 0)) return;
          {
            let e = n.map((e) => e.application.name);
            return l.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_DESCRIBED_BY_LABEL_ACTIVITIES.format(
              { activeActivities: e.join(", ") },
            );
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
      var i = n(689938);
      function l(e) {
        if (null == e) return null;
        switch (e.type) {
          case "embedded-activities":
          case "event":
            return { subtitle: e.name };
          case "go-live":
            return { subtitle: i.Z.Messages.GO_LIVE_SUBTITLE };
        }
        return null;
      }
    },
    566840: function (e, t, n) {
      n.d(t, {
        Eg: function () {
          return o;
        },
        XL: function () {
          return u;
        },
      });
      var i = n(470079),
        l = n(652874),
        r = n(143927),
        a = n(731965);
      let s = (0, l.Z)((e) => ({ upsellsByGuildId: {} }));
      function o(e) {
        return s((t) => {
          var n;
          let i = {};
          return null == e
            ? i
            : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n
              ? n
              : i;
        }, r.Z);
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
                  var i, r, o;
                  let c =
                    null !==
                      (r =
                        null === (i = l.current) || void 0 === i
                          ? void 0
                          : i.getBoundingClientRect()) && void 0 !== r
                      ? r
                      : null;
                  (o = {
                    name: t,
                    guildId: e,
                    disabled: n,
                    boundingRect: null != c ? c : null,
                  }),
                    (0, a.j)(() => {
                      s.setState((e) => {
                        var t, n;
                        return {
                          upsellsByGuildId: {
                            ...(null !== (t = e.upsellsByGuildId) &&
                            void 0 !== t
                              ? t
                              : {}),
                            [o.guildId]: {
                              ...(null !==
                                (n = e.upsellsByGuildId[o.guildId]) &&
                              void 0 !== n
                                ? n
                                : {}),
                              [o.name]: o,
                            },
                          },
                        };
                      });
                    });
                });
              };
            if (null == i) return r(), () => {};
            let o = (function (e) {
              let t = e.parentNode;
              for (; null != t && t !== document.body && !c(t); )
                t = t.parentNode;
              return c(t) ? t : null;
            })(i);
            return (
              r(),
              null == o || o.addEventListener("scroll", r, { passive: !0 }),
              () => {
                null == o || o.removeEventListener("scroll", r);
              }
            );
          }, [e, t, n]),
          l
        );
      }
    },
    428695: function (e, t, n) {
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(392711),
        o = n(481060),
        c = n(367907),
        u = n(626135),
        d = n(981631),
        h = n(689938),
        p = n(599293);
      let f = (0, s.debounce)(c.ZP.trackWithMetadata, 500);
      t.Z = function (e) {
        let {
          guild: t,
          title: n,
          message: r,
          image: s,
          type: _,
          imageStyles: m,
          imageMarginX: g,
          imageMarginTop: C,
          trackingSource: I,
          undismissable: E,
          onDismissed: N,
          onClick: S,
          cta: x,
          ctaColor: v,
          centerText: T,
          className: Z,
        } = e;
        l.useEffect(() => {
          f(d.rMx.CHANNEL_NOTICE_VIEWED, { notice_type: _, guild_id: t.id });
        }, [t.id, _]);
        let A = null;
        "function" == typeof x
          ? (A = x())
          : null != x &&
            (A = (0, i.jsx)(o.Button, {
              className: p.button,
              size: o.Button.Sizes.SMALL,
              onClick: () => {
                null != _ &&
                  u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                    source: I,
                    guild_id: t.id,
                    notice_type: _,
                  }),
                  null == S || S();
              },
              fullWidth: !0,
              color: v,
              children: x,
            }));
        let b = null;
        "function" == typeof n
          ? (b = n())
          : null != n &&
            (b = (0, i.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              className: a()(
                p.title,
                { [p.noImageTitle]: null == s },
                { [p.center]: T },
              ),
              children: n,
            }));
        let R = null;
        "function" == typeof r
          ? (R = r())
          : null != r &&
            (R = (0, i.jsx)(o.Text, {
              className: a()({ [p.center]: T }),
              variant: "text-sm/normal",
              color: "text-muted",
              children: r,
            }));
        let M = null != g ? "".concat(g, "px") : "16px";
        return (0, i.jsxs)("div", {
          className: a()(p.container, Z),
          children: [
            !0 === E
              ? null
              : (0, i.jsx)(o.Clickable, {
                  onClick: () => {
                    c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, {
                      notice_type: _,
                    }),
                      null == N || N();
                  },
                  className: p.close,
                  "aria-label": h.Z.Messages.DISMISS,
                  children: (0, i.jsx)(o.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: p.closeIcon,
                  }),
                }),
            null != s &&
              (0, i.jsx)("div", {
                className: p.imageContainer,
                style: {
                  marginTop: "".concat(C, "px"),
                  marginLeft: M,
                  marginRight: M,
                },
                children: (0, i.jsx)("img", {
                  className: p.image,
                  style: m,
                  src: s,
                  alt: "",
                }),
              }),
            (0, i.jsxs)("div", { className: p.message, children: [b, R, A] }),
          ],
        });
      };
    },
    256916: function (e, t, n) {
      n(47120), n(653041);
      var i,
        l = n(735250),
        r = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(954955),
        c = n.n(o),
        u = n(748780),
        d = n(902704),
        h = n(481060),
        p = n(888914);
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
      let _ = { friction: 10, tension: 300 };
      class m extends r.Component {
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
            u.Z.spring(e, { toValue: 0, ..._ }).start();
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
          u.Z.spring(e, { toValue: 1, ..._ }).start();
        }
        render() {
          let { className: e, text: t, hide: n, onClick: i } = this.props;
          return (0, l.jsx)(u.Z.div, {
            className: s()(p.bar, e),
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
            f(this, "_timeout", void 0),
            (this.state = { translateY: new u.Z.Value(), reduceMotion: !1 });
        }
      }
      class g extends (i = r.PureComponent) {
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
              barClassName: o,
              hide: c,
              animate: u,
            } = this.props,
            { reducedMotion: d } = this.context;
          return (0, l.jsx)("div", {
            className: null != a ? a : void 0,
            children: (0, l.jsx)(m, {
              hide: !0 === c || (null == e && null == t),
              className: s()(o, null != t ? p.mention : p.unread),
              text: null != t ? n : i,
              reverse: r,
              animate: u && !d.enabled,
              onClick: this.handleClick,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "state", { unread: null, mention: null }),
            f(
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
                  s = null,
                  o = null,
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
                    null == s && l(e, r, c) && (s = e),
                      null == o && i(e, r, c) && (o = e);
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
                null != a && a(s, o, r),
                  this.setState({ mention: s, unread: o });
              }, 200),
            ),
            f(this, "handleClick", (e) => {
              e.preventDefault(), e.stopPropagation();
              let { unread: t, mention: n } = this.state,
                { onJumpTo: i } = this.props,
                l = null != n ? n : t;
              null != l && i(l, [n, t]);
            });
        }
      }
      f(g, "contextType", h.AccessibilityPreferencesContext),
        f(g, "defaultProps", {
          className: p.container,
          reverse: !1,
          hide: !1,
          animate: !0,
        }),
        (t.Z = g);
    },
    824991: function (e, t, n) {
      n.d(t, {
        To: function () {
          return g;
        },
        Xu: function () {
          return C;
        },
        YV: function () {
          return _;
        },
        ZP: function () {
          return I;
        },
        aF: function () {
          return m;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(481060),
        a = n(100527),
        s = n(428695),
        o = n(703656),
        c = n(970606),
        u = n(308083),
        d = n(981631),
        h = n(921944),
        p = n(689938),
        f = n(737116);
      function _() {
        return (0, i.jsxs)("div", {
          className: f.inviteContainer,
          children: [
            (0, i.jsx)(r.EnvelopeIcon, {
              size: "xxs",
              color: "currentColor",
              className: f.envelope,
            }),
            (0, i.jsx)(r.Text, {
              variant: "text-xs/bold",
              className: f.invite,
              children: p.Z.Messages.CLAN_UPSELL_INVITE,
            }),
          ],
        });
      }
      function m(e) {
        let { title: t } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            className: f.title,
            children: t,
          }),
        });
      }
      function g(e) {
        let { message: t } = e;
        return (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: f.message,
          children: t,
        });
      }
      function C(e) {
        let { onClick: t } = e;
        return (0, i.jsx)(r.Button, {
          fullWidth: !0,
          look: r.ButtonLooks.FILLED,
          size: r.ButtonSizes.SMALL,
          color: r.ButtonColors.BRAND,
          className: f.button,
          onClick: t,
          children: (0, i.jsx)(r.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: p.Z.Messages.CHECK_IT_OUT,
          }),
        });
      }
      function I(e) {
        let { guild: t, markAsDismissed: n, defaultGameId: r } = e;
        l.useEffect(() => {
          (0, c.TE)({ guildId: t.id, location: a.Z.GUILD_CHANNEL_LIST });
        }, [t.id]);
        let _ =
            r === u.xn
              ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE
              : r === u.nJ
                ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE
                : p.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
          I = l.useCallback(
            () =>
              (0, i.jsx)(g, {
                message: p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE,
              }),
            [],
          ),
          E = l.useCallback(() => (0, i.jsx)(m, { title: _ }), [_]),
          N = l.useCallback(() => {
            (0, c._9)({ guildId: t.id, location: a.Z.GUILD_CHANNEL_LIST }),
              (0, o.uL)(d.Z5c.GUILD_DISCOVERY);
          }, [t.id]),
          S = l.useCallback(() => (0, i.jsx)(C, { onClick: N }), [N]);
        return (0, i.jsx)(s.Z, {
          className: f.notice,
          guild: t,
          onDismissed: () => n(h.L.DISMISS),
          title: E,
          message: I,
          cta: S,
          trackingSource: d.PsQ.CLAN_ADMIN_UPSELL,
          type: d.vID.CLAN_ADMIN_UPSELL,
        });
      }
    },
    311352: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var l = n(399606),
        r = n(704215),
        a = n(481060),
        s = n(239091),
        o = n(765585),
        c = n(870569),
        u = n(819640),
        d = n(556296),
        h = n(13140),
        p = n(924557),
        f = n(435064),
        _ = n(39604),
        m = n(981631),
        g = n(689938),
        C = n(847744);
      function I(e) {
        (0, s.jW)(e, async () => {
          let { default: e } = await n.e("21960").then(n.bind(n, 999466));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function E() {
        (0, _.C1)();
      }
      let N = (e) => {
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
            return (0, i.jsx)(o.Z, {
              dismissibleContent: r.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
              shouldUseHorizontalButtons: !0,
              inlineArt: !0,
              artClassName: C.clipsEducationArt,
              position: "top",
              header: (0, i.jsx)("div", {
                className: C.header,
                children:
                  g.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format(
                    {
                      keybind: t,
                      keybindHook: () =>
                        (0, i.jsx)("span", {
                          className: C.keybindHintKeys,
                          children: (0, i.jsx)(a.KeyCombo, {
                            className: C.keybindShortcut,
                            shortcut: t,
                          }),
                        }),
                    },
                  ),
              }),
              headerClassName: C.clipsEducationHeader,
              body: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  className: C.bodyText,
                  children:
                    g.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format(
                      {
                        keybindHook: () =>
                          (0, i.jsx)("div", {
                            className: C.keyCombo,
                            children: t,
                          }),
                        keybind: t,
                      },
                    ),
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
            [f.Z],
            () => ({
              clipsEnabled: f.Z.getSettings().clipsEnabled,
              isAtMaxSavingClipsOperations: f.Z.getIsAtMaxSaveClipOperations(),
            }),
          ),
          s = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(m.kg4.SAVE_CLIP));
        if (!(t && n) || null == s || e) return null;
        let o = h.BB(s.shortcut, !0);
        return (0, i.jsx)(N, {
          keybindString: o,
          children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText:
              null != s
                ? g.Z.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
                    hotkey: h.BB(null == s ? void 0 : s.shortcut, !0),
                  })
                : g.Z.Messages.CLIPS_EDIT_SAVE_CLIP,
            onClick: E,
            onContextMenu: I,
            icon: a.ClipsIcon,
          }),
        });
      };
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
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(822650);
      let c = l.forwardRef(function (e, t) {
        let { className: n, focusProps: l, ...r } = e;
        return (0, i.jsx)(s.FocusRing, {
          ...l,
          children: (0, i.jsx)("li", {
            className: a()(n, o.container),
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
      var i = n(91641),
        l = n(136885),
        r = n(987338);
      let a = new i.E([l.NR, l.ZI, l.Ob, l.uc, l.m1], r.$P.DM_GDM_LIST_RENDER, {
        location: "dm/gdm list rendered",
      });
    },
    136885: function (e, t, n) {
      n.d(t, {
        NR: function () {
          return r;
        },
        Ob: function () {
          return o;
        },
        ZI: function () {
          return a;
        },
        m1: function () {
          return c;
        },
        uc: function () {
          return s;
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
        s = (0, i.Z)({
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
        o = (0, i.Z)({
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
        s = n(9156),
        o = n(709054),
        c = n(231338);
      function u(e) {
        return (0, i.cj)([l.Z, a.ZP, s.ZP, r.Z], () => {
          let t = o.default.keys(e);
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
                    !s.ZP.isChannelMuted(
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
          return o;
        },
      });
      var i = n(442837),
        l = n(592125),
        r = n(938475),
        a = n(853856),
        s = n(981631);
      function o(e) {
        return (0, i.cj)(
          [r.ZP, l.Z, a.Z],
          () => {
            if (e !== s.I_8) return r.ZP.getVoiceStates(e);
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
          return _;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(593214),
        c = n(981631),
        u = n(689938),
        d = n(941443),
        h = n(516126),
        p = n(64056);
      function f() {
        return (0, i.jsx)("div", {
          className: a()(h.row, h.rowGuildName),
          children: (0, i.jsx)("span", {
            className: a()(
              h.guildNameText,
              h.guildNameTextLimitedSize,
              d.tooltipText,
            ),
            children: u.Z.Messages.FAVORITE_ADDED,
          }),
        });
      }
      let _ = l.memo(function (e) {
        let { "aria-label": t = !1, children: n } = e,
          r = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, o.up)();
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
        return (0, i.jsx)(s.Tooltip, {
          forceOpen: r,
          color: s.TooltipColors.GREEN,
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          align: "center",
          text: (0, i.jsx)(f, {}),
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
          return P;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(91192),
        o = n(442837),
        c = n(481060),
        u = n(493683),
        d = n(239091),
        h = n(317381),
        p = n(276952),
        f = n(682662),
        _ = n(674552),
        m = n(593364),
        g = n(905423),
        C = n(199902),
        I = n(592125),
        E = n(944486),
        N = n(979651),
        S = n(709054),
        x = n(853856),
        v = n(593214),
        T = n(919755),
        Z = n(110977),
        A = n(603274),
        b = n(981631),
        R = n(689938),
        M = n(599576);
      let L = {
        analyticsSource: {
          page: b.ZY5.GUILD_CHANNEL,
          section: b.jXE.CHANNEL_LIST,
          object: b.qAy.CHANNEL,
        },
      };
      function P() {
        let e = (0, s.Ie)("favorites"),
          { favoriteAdded: t, clearFavoriteAdded: r } = (0, v.up)(),
          [P, O] = l.useState(!1),
          { favoriteServerMuted: y, favoriteChannels: D } = (0, o.cj)(
            [x.Z],
            () => ({
              favoriteChannels: x.Z.getFavoriteChannels(),
              favoriteServerMuted: x.Z.favoriteServerMuted,
            }),
          ),
          j = (0, o.e7)([E.Z], () => E.Z.getChannelId(b.I_8)),
          w = (0, o.e7)([I.Z], () => I.Z.getChannel(j)),
          U = (0, g.Z)((e) => e.guildId) === b.I_8,
          { badge: G, unread: k } = (0, T.Z)(D),
          B = (function (e) {
            let t = (0, o.e7)([E.Z], () => E.Z.getVoiceChannelId()),
              n = null != t && null != e[t],
              i = (0, o.e7)([C.Z], () => {
                if (!n) return !1;
                let t = C.Z.getCurrentUserActiveStream();
                return null != t && null != e[t.channelId];
              }),
              l = (0, o.e7)([C.Z], () =>
                C.Z.getAllApplicationStreams().some(
                  (t) => null != e[t.channelId],
                ),
              ),
              r = (0, o.e7)([N.Z], () => n && null != t && N.Z.hasVideo(t), [
                n,
                t,
              ]),
              a = (0, o.Wu)([h.ZP], () =>
                S.default
                  .keys(e)
                  .reduce(
                    (e, t) => (
                      e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e
                    ),
                    [],
                  ),
              ),
              s = (0, o.e7)([h.ZP], () =>
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
              f = !1;
            return (
              n ? ((u = !r), (d = r), (p = i), (f = s)) : ((p = l), (f = c)),
              (0, _.Or)({
                audio: u,
                video: d,
                screenshare: p,
                liveStage: !1,
                isCurrentUserConnected: n,
                activity: f,
              })
            );
          })(D),
          V = G > 0 ? (0, m.N)(G) : null,
          H = l.useCallback(() => {
            r();
          }, [r]);
        return (0, i.jsxs)(f.H, {
          children: [
            (0, i.jsx)(p.Z, {
              selected: U,
              hovered: P,
              unread: k && !y,
              className: M.pill,
            }),
            (0, i.jsx)(A.Z, {
              onShow: H,
              children: (0, i.jsx)(Z.S, {
                children: (0, i.jsx)(c.BlobMask, {
                  selected: U || P,
                  upperBadge: B,
                  lowerBadge: V,
                  children: (0, i.jsx)(c.NavItem, {
                    ...e,
                    ariaLabel: R.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                      guildName: R.Z.Messages.FAVORITES_GUILD_NAME,
                      mentions: G,
                    }),
                    to: { pathname: b.Z5c.CHANNEL(b.I_8, j), state: L },
                    selected: U || P,
                    onMouseEnter: () => O(!0),
                    onMouseLeave: () => O(!1),
                    onMouseDown: function () {
                      if (null != w) u.Z.preload(w.guild_id, w.id);
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
                      className: a()(M.ring, { [M.ringActive]: t }),
                      children: (0, i.jsx)(c.StarIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: M.favoriteIcon,
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
          return b;
        },
      }),
        n(47120),
        n(390547),
        n(653041);
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(392711),
        s = n.n(a),
        o = n(442837),
        c = n(481060),
        u = n(317381),
        d = n(884338),
        h = n(565799),
        p = n(501655),
        f = n(199902),
        _ = n(592125),
        m = n(594174),
        g = n(938475),
        C = n(823379),
        I = n(709054),
        E = n(853856),
        N = n(981631),
        S = n(689938),
        x = n(516126),
        v = n(64056);
      function T(e, t) {
        return 0 === t.length
          ? null
          : (0, i.jsxs)("div", {
              className: x.row,
              children: [
                (0, i.jsx)(e, {
                  className: x.activityIcon,
                  color: "currentColor",
                }),
                (0, i.jsx)(d.Z, { guildId: void 0, users: t, max: 6 }),
              ],
            });
      }
      function Z() {
        var e, t;
        let n = (0, o.Wu)([E.Z, _.Z], () =>
            I.default
              .keys(E.Z.getFavoriteChannels())
              .map((e) => _.Z.getChannel(e))
              .filter(C.lm),
          ),
          l = n.map((e) => e.id),
          r = n.filter((e) => e.type === N.d4z.GUILD_VOICE),
          a = n
            .filter((e) => e.type === N.d4z.GUILD_STAGE_VOICE)
            .map((e) => e.id),
          S = (0, o.Wu)(
            [g.ZP],
            () =>
              s().flatMap(r, (e) =>
                g.ZP.getVoiceStatesForChannel(e).map((e) => {
                  let { user: t } = e;
                  return t;
                }),
              ),
            [r],
          ),
          v = (0, o.Wu)([h.Z], () =>
            s().flatMap(a, (e) =>
              h.Z.getMutableParticipants(e, p.pV.SPEAKER)
                .filter((e) => e.type === p.Ui.VOICE)
                .map((e) => {
                  let { user: t } = e;
                  return t;
                }),
            ),
          ),
          Z = (0, o.e7)([h.Z], () => {
            let e = 0;
            for (let t of a) e += h.Z.getParticipantCount(t, p.pV.AUDIENCE);
            return e;
          }),
          A = (0, o.Wu)(
            [f.Z],
            () =>
              f.Z.getAllApplicationStreams()
                .filter((e) => l.includes(e.channelId))
                .map((e) => e.ownerId),
            [l],
          ),
          b = (0, o.Wu)(
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
          R = (0, o.Wu)([m.default], () => b.map((e) => m.default.getUser(e)), [
            b,
          ]),
          M = (0, o.Wu)([m.default], () => A.map((e) => m.default.getUser(e)), [
            A,
          ]),
          L = T(
            c.VoiceNormalIcon,
            S.filter((e) => !A.includes(e.id) && !b.includes(e.id)),
          );
        let P =
            ((e = v),
            (t = Z),
            0 === e.length
              ? null
              : (0, i.jsxs)("div", {
                  className: x.row,
                  children: [
                    (0, i.jsx)(c.StageIcon, {
                      size: "lg",
                      color: "currentColor",
                      className: x.activityIcon,
                    }),
                    (0, i.jsx)(d.Z, { guildId: void 0, users: e, max: 3 }),
                    (0, i.jsxs)("div", {
                      className: x.stageListenerPill,
                      children: [
                        (0, i.jsx)(c.HeadphonesIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                        (0, i.jsx)(c.Text, {
                          className: x.stageListenerCount,
                          color: "text-normal",
                          variant: "text-xs/medium",
                          children: t,
                        }),
                      ],
                    }),
                  ],
                })),
          O = T(
            c.ScreenArrowIcon,
            M.filter((e) => null != e && !b.includes(e.id)),
          ),
          y = T(c.ActivitiesIcon, R);
        return (0, i.jsxs)(i.Fragment, { children: [P, L, O, y] });
      }
      function A() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(x.row, x.rowGuildName),
              children: (0, i.jsx)("span", {
                className: r()(x.guildNameText, x.guildNameTextLimitedSize),
                children: S.Z.Messages.FAVORITES_GUILD_NAME,
              }),
            }),
            (0, i.jsx)(Z, {}),
          ],
        });
      }
      function b(e) {
        let { "aria-label": t = !1, onShow: n, children: l } = e;
        return (0, i.jsx)(c.Tooltip, {
          hideOnClick: !0,
          spacing: 20,
          position: "right",
          text: (0, i.jsx)(A, {}),
          "aria-label": t,
          tooltipClassName: v.listItemTooltip,
          onTooltipShow: n,
          children: (e) => (0, i.jsx)("div", { ...e, children: l }),
        });
      }
    },
    765585: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(393238),
        c = n(605236),
        u = n(279745),
        d = n(921944),
        h = n(689938),
        p = n(138592);
      t.Z = l.forwardRef(function (e, t) {
        let {
            body: n,
            header: r,
            artClassName: f,
            headerClassName: _,
            contentClassName: m,
            tryItText: g,
            dismissText: C,
            onTryFeature: I,
            onClose: E,
            className: N,
            inlineArt: S = !1,
            isPremiumFeature: x = !1,
            shouldUseHorizontalButtons: v = !1,
            showGIFTag: T = !1,
            dismissibleContent: Z,
            position: A = "top",
            align: b = "center",
            art: R,
            isPremiumEarlyAccess: M = !1,
            maxWidth: L = 280,
            hideDismissButton: P = !1,
            pointerClassName: O,
            dismissIconClassName: y,
            dismissIcon: D,
            onDismissIconClick: j,
          } = e,
          w = v ? s.Button.Sizes.LARGE : s.Button.Sizes.MAX,
          [U, G] = l.useState(!1),
          { ref: k, width: B } = (0, o.Z)();
        function V(e) {
          (0, c.EW)(Z, { dismissAction: e });
        }
        return (
          l.useEffect(() => {
            var e, t;
            let n =
              (null !==
                (t =
                  null === (e = k.current) || void 0 === e
                    ? void 0
                    : e.scrollWidth) && void 0 !== t
                ? t
                : 0) + 64;
            !U && n > L && G(!0);
          }, [U, B, k, L]),
          l.useEffect(() => {
            (0, c.kk)(Z);
          }, [Z]),
          (0, i.jsx)("div", {
            className: N,
            ref: t,
            children: (0, i.jsxs)("div", {
              className: a()(p.content, m, {
                [p.contentNoArt]: null == f || S,
                [p.contentPremium]: x || M,
              }),
              children: [
                null != D &&
                  (0, i.jsx)(s.Clickable, {
                    onClick: j,
                    className: y,
                    children: D,
                  }),
                (0, i.jsxs)("div", {
                  className: a()(f, S ? p.artInline : p.artAbsolute),
                  children: [T && (0, i.jsx)(u.Z, { className: p.gifTag }), R],
                }),
                (0, i.jsxs)("div", {
                  className: p.body,
                  children: [
                    (0, i.jsxs)(s.Heading, {
                      className: a()(x ? p.headerWithPremiumIcon : p.header, _),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        x && !M
                          ? (0, i.jsx)(s.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: p.premiumIcon,
                            })
                          : null,
                        M
                          ? (0, i.jsxs)(s.Text, {
                              color: "always-white",
                              variant: "eyebrow",
                              className: p.earlyAccessBadgeContainer,
                              children: [
                                (0, i.jsx)(s.NitroWheelIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: p.earlyAccessIcon,
                                }),
                                (0, i.jsx)("span", {
                                  className: p.earlyAccessText,
                                  children:
                                    h.Z.Messages
                                      .REMIXING_TOOLTIP_NITRO_EARLY_ACCESS,
                                }),
                              ],
                            })
                          : null,
                        r,
                      ],
                    }),
                    null == n
                      ? null
                      : "string" == typeof n
                        ? (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: n,
                          })
                        : n,
                  ],
                }),
                (0, i.jsx)("div", {
                  ref: k,
                  className:
                    U || !v
                      ? p.buttonContainerVertical
                      : p.buttonContainerHorizontal,
                  children:
                    null != I
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(s.Button, {
                              className: p.button,
                              size: w,
                              onClick: (e) => {
                                null == E || E(e), I(e), V(d.L.PRIMARY);
                              },
                              color:
                                x || M
                                  ? s.Button.Colors.BRAND_INVERTED
                                  : s.Button.Colors.WHITE,
                              children:
                                null != g
                                  ? g
                                  : h.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT,
                            }),
                            !P &&
                              (0, i.jsx)(s.Button, {
                                className: p.button,
                                size: w,
                                onClick: (e) => {
                                  null == E || E(e), V(d.L.DISMISS);
                                },
                                color:
                                  x || M
                                    ? s.Button.Colors.WHITE
                                    : s.Button.Colors.BRAND,
                                look:
                                  x || M
                                    ? s.Button.Looks.LINK
                                    : s.Button.Looks.FILLED,
                                children:
                                  null != C
                                    ? C
                                    : h.Z.Messages
                                        .EDUCATION_NEW_FEATURE_DISMISS,
                              }),
                          ],
                        })
                      : (0, i.jsx)(s.Button, {
                          className: p.button,
                          size: s.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == E || E(e), V(d.L.PRIMARY);
                          },
                          color: s.Button.Colors.WHITE,
                          children: h.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM,
                        }),
                }),
                (0, i.jsx)("div", {
                  className: a()(p.pointer, O, {
                    [p.bottomPointer]: "top" === A,
                    [p.centerLeftPointer]: "right" === A && "center" === b,
                    [p.topLeftPointer]: "right" === A && "top" === b,
                  }),
                }),
              ],
            }),
          })
        );
      });
    },
    49898: function (e, t, n) {
      var i, l, r, a, s, o, c;
      n.d(t, {
        D7: function () {
          return d;
        },
        F$: function () {
          return i;
        },
        JU: function () {
          return a;
        },
        Kl: function () {
          return h;
        },
        U1: function () {
          return p;
        },
        WB: function () {
          return l;
        },
        mc: function () {
          return u;
        },
      }),
        ((s = i || (i = {})).SERVERS = "servers"),
        (s.QUESTS = "quests"),
        (s.APPS = "apps");
      let u = ["servers", "apps", "quests"],
        d = "servers",
        h = 24,
        p = 240;
      ((o = l || (l = {})).DEFAULT = "default"),
        (o.FLOATING = "floating"),
        (o.COLLAPSED = "collapsed"),
        ((c = r || (r = {})).ROOT = "root"),
        (c.SERVER_TAB = "server_tab"),
        (c.SERVER_SEARCH = "server_search"),
        ((a || (a = {})).GUILDS_BAR_ICON = "guilds_bar_icon");
    },
    571457: function (e, t, n) {
      n.d(t, {
        $X: function () {
          return u;
        },
        HV: function () {
          return o;
        },
        RI: function () {
          return r;
        },
        k5: function () {
          return s;
        },
        kR: function () {
          return a;
        },
        zY: function () {
          return c;
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
      function s(e) {
        let { source: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
          source: t,
        });
      }
      function o(e) {
        let { gameId: t, source: n } = e;
        i.default.track(l.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
          game_id: t,
          source: n,
        });
      }
      function c(e) {
        let { gameId: t } = e;
        i.default.track(
          l.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP,
          { game_id: t },
        );
      }
      function u(e) {
        let { gameId: t } = e;
        i.default.track(l.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, {
          game_id: t,
        });
      }
    },
    836768: function (e, t, n) {
      n.d(t, {
        d: function () {
          return s;
        },
        u: function () {
          return o;
        },
      });
      var i = n(652874),
        l = n(868888),
        r = n(433517);
      let a = { selectedTab: n(49898).F$.SERVERS },
        s = (0, i.Z)(
          (0, l.tJ)(() => a, {
            name: "global-discovery-ui-store",
            getStorage: () => ({
              getItem: (e) => {
                var t;
                return null !== (t = r.K.get(e)) && void 0 !== t ? t : null;
              },
              setItem: (e, t) => r.K.set(e, t),
              removeItem: (e) => r.K.remove(e),
            }),
            partialize: (e) => ({ selectedTab: e.selectedTab }),
          }),
        );
      function o() {
        s.setState(a);
      }
    },
    914923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(757143);
      var i = n(689938);
      let l = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
      function r(e) {
        let t = i.Z.Messages.ACTIVITY_PANEL_GO_LIVE;
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
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(866442),
        o = n(481060),
        c = n(686546),
        u = n(66);
      let d = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];
      function h(e) {
        return (0, s.Rf)(
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
          [s, d] = l.useState(h(n));
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
                  style: { backgroundColor: s },
                  children: null !== (t = n[0]) && void 0 !== t ? t : "?",
                }),
              }),
              (0, i.jsx)(o.VideoIcon, {
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
      let s = {};
      class o extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e && (s = e);
        }
        getState() {
          return s;
        }
        getCountForGuild(e) {
          return s[e];
        }
      }
      a(o, "displayName", "GuildBoostingProgressBarPersistedStore"),
        a(o, "persistKey", "PremiumGuildProgressBarPersistedStore"),
        (t.Z = new o(r.Z, {
          APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
            let { guildId: t, premiumCount: n } = e;
            s = { ...s, [t]: n };
          },
        }));
    },
    583962: function (e, t, n) {
      n.d(t, {
        PD: function () {
          return M;
        },
        aR: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(212433),
        o = n(91192),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(239091),
        p = n(100527),
        f = n(367907),
        _ = n(906732),
        m = n(434404),
        g = n(496675),
        C = n(259580),
        I = n(267642),
        E = n(624138),
        N = n(667815),
        S = n(531572),
        x = n(26323),
        v = n(30513),
        T = n(981631),
        Z = n(689938),
        A = n(402723);
      let b = (0, E.Mg)(
          u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN,
        ),
        R = (e) => {
          let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [s, o] = l.useState(!1),
            u = (0, c.e7)([g.Z], () => g.Z.can(T.Plq.MANAGE_GUILD, t)),
            p = async () => {
              if (!!u)
                o(!0),
                  await m.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }),
                  a(!r),
                  o(!1);
            };
          return (0, i.jsx)(d.Menu, {
            navId: "progress-bar-context",
            onClose: h.Zy,
            "aria-label": Z.Z.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
              id: "progress-bar-enabled",
              label: Z.Z.Messages.GUILD_ENABLE_PROGRESS_BAR,
              checked: r,
              disabled: s,
              action: p,
            }),
          });
        },
        M = 57,
        L = 57 + b,
        P = { tension: 180, friction: 80 };
      t.ZP = (e) => {
        let { guild: t, withMargin: n } = e,
          { analyticsLocations: r } = (0, _.ZP)(
            p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY,
          ),
          { premiumSubscriberCount: u, id: m } = t,
          E = (0, I.rF)(u, m),
          b = (0, I.FZ)(E, t.id),
          M = null == b,
          L = null != b ? b : E,
          O = (0, c.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getCountForGuild(m)) && void 0 !== e
              ? e
              : 0;
          }),
          y = (0, c.e7)([g.Z], () => g.Z.can(T.Plq.MANAGE_GUILD, t));
        l.useEffect(() => {
          O !== u && (0, N.v)(m, u);
        }, [m, O, u]);
        let D = "".concat(Math.min(100, (u / (0, I.vn)(t.id)[L]) * 100), "%"),
          { current: j } = l.useRef(D),
          w = {
            from: { width: O === u ? j : "0%" },
            to: { width: D },
            config: P,
          },
          [U, G] = (0, d.useSpring)(() => w),
          k = () => {
            (0, f.yw)(T.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
              location: { section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR },
              guild_id: m,
              location_stack: r,
            }),
              (0, x.Z)({
                analyticsLocations: r,
                analyticsSourceLocation: {
                  page: T.ZY5.GUILD_CHANNEL,
                  section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                  object: T.qAy.TOOLTIP,
                },
                guild: t,
                perks: (0, v.VF)(),
                perkIntro:
                  Z.Z.Messages
                    .PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER,
              });
          },
          B = Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
            levelName: (0, I.e9)(L),
          }),
          V =
            Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
              numBoosts: u,
              numTotal: (0, I.vn)(t.id)[L],
            });
        M &&
          ((B = (0, I.e9)(L)),
          (V =
            Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format(
              { numBoosts: u },
            )));
        let H = (0, o.JA)("boosts-".concat(t.id));
        return (0, i.jsx)("li", {
          children: (0, i.jsx)(d.Tooltip, {
            text: M
              ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE
              : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({
                  levelName: (0, I.nW)(L),
                }),
            color: d.Tooltip.Colors.BLACK,
            position: "top",
            delay: 200,
            hideOnClick: !0,
            children: (e) =>
              (0, i.jsxs)(d.Clickable, {
                ...H,
                ...e,
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: k,
                onMouseEnter: () => {
                  var t;
                  null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
                    G(w);
                },
                className: a()(A.container, { [A.containerWithMargin]: n }),
                onContextMenu: (e) => {
                  y && (0, h.vq)(e, (e) => (0, i.jsx)(R, { ...e, guild: t }));
                },
                children: [
                  (0, i.jsx)(d.HiddenVisually, { children: e["aria-label"] }),
                  (0, i.jsxs)("div", {
                    className: A.textArea,
                    children: [
                      (0, i.jsx)("div", {
                        className: A.goalTextContainer,
                        children: (0, i.jsx)(d.Text, {
                          className: A.goalText,
                          color: "interactive-active",
                          variant: "text-xs/bold",
                          children: B,
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: A.progressFraction,
                        children: [
                          (0, i.jsx)(d.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/normal",
                            children: V,
                          }),
                          (0, i.jsx)(C.Z, {
                            className: A.count,
                            height: 16,
                            width: 16,
                            direction: C.Z.Directions.RIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: a()(A.progressBarContainer, {
                      [A.progressBarContainerComplete]: M,
                    }),
                    children: [
                      (0, i.jsx)(s.animated.div, {
                        className: A.progressBar,
                        style: U,
                      }),
                      M
                        ? (0, i.jsx)("span", {
                            "aria-label":
                              Z.Z.Messages
                                .PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                            role: "img",
                            className: A.tadaIcon,
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
      var i = n(470079),
        l = n(913527),
        r = n.n(l),
        a = n(881052),
        s = n(709054),
        o = n(693546),
        c = n(246364);
      let u = c.tB * c.hW;
      function d(e) {
        let { guildId: t, guildJoinRequests: n } = e,
          l = i.useRef(!1),
          [d, h] = i.useState(null),
          p = i.useRef(null),
          f = i.useRef(!1);
        return {
          fetchNextPage: i.useCallback(
            async (e, i) => {
              if (l.current) return;
              let _ = "".concat(e, "-").concat(i),
                m = !1;
              if (
                (_ !== p.current &&
                  ((p.current = _), (f.current = !1), (m = !0)),
                f.current)
              )
                return;
              null != d && h(null);
              let g = (function (e, t, n, i) {
                let l = n === c.wB.SUBMITTED;
                if (t === c.Nw.TIMESTAMP_DESC) {
                  if (i)
                    return {
                      before: s.default.fromTimestamp(new Date().getTime()),
                    };
                  {
                    let t = e[e.length - 1];
                    return { before: l ? t.joinRequestId : t.actionedAt };
                  }
                }
                if (i)
                  return {
                    after: s.default.fromTimestamp(
                      r()().subtract(180, "days").valueOf(),
                    ),
                  };
                {
                  let t = e[e.length - 1];
                  return { after: l ? t.joinRequestId : t.actionedAt };
                }
              })(n, e, i, m);
              try {
                l.current = !0;
                let e = await o.Z.fetchGuildJoinRequests({
                  guildId: t,
                  status: i,
                  limit: u,
                  force: !0,
                  ...g,
                });
                if (null != e) {
                  let { guild_join_requests: t } = e.body;
                  t.length < u && (f.current = !0);
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
      var i = n(735250),
        l = n(470079),
        r = n(704215),
        a = n(481060),
        s = n(566840),
        o = n(434479),
        c = n(527379),
        u = n(689938);
      function d(e) {
        let { guild: t, selected: n } = e,
          d = l.useCallback(() => {
            (0, c._X)(t.id);
          }, [t.id]),
          h = (0, s.XL)(t.id, r.z.MEMBERS_LAUNCH_UPSELL);
        return (0, i.jsx)("div", {
          ref: h,
          children: (0, i.jsx)(o.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(a.GroupIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: u.Z.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
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
      var i = n(735250);
      n(470079);
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
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(377171),
        s = n(549631),
        o = n(897365),
        c = n(872356);
      function u(e) {
        return e;
      }
      function d(e) {
        let { locked: t } = e;
        return (0, i.jsx)("div", {
          className: r()(c.iconItem, o.premiumChannelIcon),
          children: (0, i.jsx)(s.Z, {
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
        s = n(496675),
        o = n(981631);
      function c(e, t) {
        return (0, i.e7)(
          [a.Z, r.ZP, s.Z],
          () => {
            let n = a.Z.getGuild(e);
            if (
              s.Z.can(o.Plq.ADMINISTRATOR, n) ||
              s.Z.can(o.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of r.ZP.getChannels(e)[r.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, l.Ob)(n);
                if (s.Z.can(e, n)) return !0;
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
        s,
        o,
        c = n(392711),
        u = n.n(c),
        d = n(442837),
        h = n(570140),
        p = n(220444),
        f = n(565799),
        _ = n(501655),
        m = n(569471),
        g = n(592125),
        C = n(430824),
        I = n(306680),
        E = n(914010),
        N = n(9156),
        S = n(938475),
        x = n(823379),
        v = n(734307),
        T = n(981631);
      ((r = i || (i = {})).HIDDEN = "hidden"),
        (r.UNREAD = "unread"),
        (r.MENTIONS = "mentions"),
        (r.VOICE_CHANNELS = "voice-channels");
      let Z = { mode: "hidden", mentionCount: 0, targetChannelId: null },
        A = { topBar: Z, bottomBar: Z },
        b = {},
        R = {};
      function M(e) {
        let t = g.Z.getChannel(e);
        return (
          !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
          !(t.isThread()
            ? m.Z.isMuted(t.id)
            : N.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
          (0, p.d)(t)
        );
      }
      function L(e) {
        let t = g.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = N.ZP.isGuildCollapsed(n),
          l = N.ZP.isChannelMuted(n, t.id);
        return (!i || !l) && I.ZP.getMentionCount(e) > 0;
      }
      function P(e) {
        return (
          !N.ZP.isChannelMuted(e.guild_id, e.id) &&
          (e.isGuildStageVoice()
            ? f.Z.getMutableParticipants(e.id, _.pV.SPEAKER).length > 0
            : S.ZP.getVoiceStatesForChannel(e).length > 0)
        );
      }
      function O(e) {
        var t, n, i;
        let { guildChannels: l } =
            v.Z.getGuildWithoutChangingGuildActionRows(e),
          r = l.getChannels(null !== (t = R[e]) && void 0 !== t ? t : []);
        if (null == r || 0 === r.length) return !1;
        let a = null,
          s = null,
          o = null,
          c = null,
          d = !0,
          h = !0,
          p = !1,
          f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
          _ =
            null !== (n = null == f ? void 0 : f.getShownChannelIds()) &&
            void 0 !== n
              ? n
              : [],
          [m, g, C] = l.getSlicedChannels(r);
        for (let e = 0; e < g.length; e++) {
          let t = g[e];
          if (
            ((M(t.id) || u().some(t.threadIds, M)) && (h = !1),
            (L(t.id) || u().some(t.threadIds, L)) && (d = !1),
            _.includes(t.id) && (p = !0),
            !h && !d && p)
          )
            break;
        }
        let E = 0,
          N = !1,
          S = 0,
          x = !1;
        if (h || d)
          for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (M(t.id) || u().some(t.threadIds, M)) &&
              (null == s && (s = t.id), (N = !0)),
              (L(t.id) || u().some(t.threadIds, L)) &&
                (null == a && (a = t.id),
                (E +=
                  I.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, I.ZP.getMentionCount)));
          }
        if (h || d)
          for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d) break;
            (M(t.id) || u().some(t.threadIds, M)) &&
              (null == c && (c = t.id), (x = !0)),
              (L(t.id) || u().some(t.threadIds, L)) &&
                (null == o && (o = t.id),
                (S +=
                  I.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, I.ZP.getMentionCount)));
          }
        let T = null,
          A = null,
          O =
            null !== (i = null == f ? void 0 : f.getChannelRecords()) &&
            void 0 !== i
              ? i
              : [];
        d && S > 0
          ? (T = { mode: "mentions", mentionCount: S, targetChannelId: o })
          : !p && u().some(O, P)
            ? (T = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
              })
            : h &&
              x &&
              (T = { mode: "unread", mentionCount: 0, targetChannelId: c }),
          d && E > 0
            ? (A = { mode: "mentions", mentionCount: E, targetChannelId: a })
            : h &&
              N &&
              (A = { mode: "unread", mentionCount: 0, targetChannelId: s });
        let y =
            null != A &&
            (null == T || ("mentions" !== T.mode && "mentions" === A.mode)),
          D = null != T && ("mentions" === T.mode || !y);
        return (
          (b[e] = {
            topBar: y && null != A ? A : Z,
            bottomBar: D && null != T ? T : Z,
          }),
          !0
        );
      }
      let y = u().throttle(O, 200);
      function D(e) {
        let { guildId: t } = e,
          n = C.Z.getGuild(t);
        return !!(null != n && n.hasFeature(T.oNc.COMMUNITY)) && y(t);
      }
      function j(e) {
        let { id: t } = e,
          n = g.Z.getChannel(t);
        if (null == n) return !1;
        let i = C.Z.getGuild(n.guild_id);
        return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && y(n.guild_id);
      }
      function w(e) {
        let { channel: t } = e,
          n = g.Z.getChannel(t.id);
        if (null == n) return !1;
        let i = C.Z.getGuild(t.guild_id);
        return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && y(n.guild_id);
      }
      function U(e) {
        let { channelId: t } = e,
          n = g.Z.getChannel(t);
        if (null == n) return !1;
        let i = C.Z.getGuild(n.guild_id);
        return (
          !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) &&
          E.Z.getGuildId() === n.guild_id &&
          y(n.guild_id)
        );
      }
      function G(e) {
        let { guildId: t } = e;
        return null != t && y(t);
      }
      class k extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(v.Z, I.ZP, N.ZP, m.Z, S.ZP, E.Z, C.Z);
        }
        getUnreadStateForGuildId(e) {
          var t;
          return null !== (t = b[e]) && void 0 !== t ? t : A;
        }
      }
      (o = "ChannelListUnreadsStore"),
        (s = "displayName") in (a = k)
          ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = o),
        (t.Z = new k(h.Z, {
          UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
              i = C.Z.getGuild(t);
            return (
              !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) &&
              null != n &&
              !u().isEqual(R[t], n) &&
              ((R[t] = n), O(t))
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
                  return null === (t = g.Z.getChannel(n)) || void 0 === t
                    ? void 0
                    : t.guild_id;
                })
                .filter(x.lm)
                .uniq()
                .forEach((e) => {
                  let t = C.Z.getGuild(e);
                  null != t &&
                    t.hasFeature(T.oNc.COMMUNITY) &&
                    y(e) &&
                    (n = !0);
                }),
              n
            );
          },
          CHANNEL_ACK: U,
          CHANNEL_DELETE: w,
          CHANNEL_LOCAL_ACK: U,
          MESSAGE_ACK: U,
          MESSAGE_CREATE: U,
          MESSAGE_DELETE_BULK: U,
          MESSAGE_DELETE: U,
          PASSIVE_UPDATE_V2: function (e) {
            let t = C.Z.getGuild(e.guildId);
            return (
              !!(
                e.channels.length > 0 &&
                null != t &&
                t.hasFeature(T.oNc.COMMUNITY)
              ) && y(e.guildId)
            );
          },
          RESORT_THREADS: U,
          THREAD_CREATE: w,
          THREAD_DELETE: w,
          THREAD_LIST_SYNC: D,
          THREAD_MEMBER_UPDATE: j,
          THREAD_MEMBERS_UPDATE: j,
          THREAD_UPDATE: w,
          BULK_CLEAR_RECENTS: D,
          CATEGORY_COLLAPSE_ALL: D,
          CATEGORY_EXPAND_ALL: D,
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = E.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n))
              return !1;
            let i = b[n];
            return null != i && "voice-channels" === i.bottomBar.mode && y(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && y(e.guild_id);
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
          return o;
        },
      });
      var i = n(680089),
        l = n(496675),
        r = n(540126),
        a = n(443063),
        s = n(981631);
      function o(e, t, n) {
        var i, l, s, o, c;
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
            })(i, (s = n)) &&
              (s === r.wZ ||
                (!!l &&
                  (s === r.p2 ||
                    (s !== r.wd &&
                      (s === i.recentsSectionNumber ||
                        (i.voiceChannelsSectionNumber, !1))))))),
          canHaveVoiceSummary:
            ((o = e),
            !(
              (c = n) === r.wZ ||
              c === r.p2 ||
              c === r.wd ||
              c === o.recentsSectionNumber ||
              c === o.voiceChannelsSectionNumber
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
                  if (!l.Z.can(s.Plq.VIEW_CHANNEL, e)) return !1;
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
          return g;
        },
      }),
        n(653041);
      var i = n(399606),
        l = n(897345),
        r = n(697379),
        a = n(241559),
        s = n(563534),
        o = n(655359),
        c = n(931261),
        u = n(460347),
        d = n(994592),
        h = n(265418),
        p = n(398758),
        f = n(330791),
        _ = n(443063),
        m = n(981631);
      function g(e) {
        let t = (0, h.Z)(e.id),
          n = (0, r.W)(e.id),
          g = (0, d.j0)(e.id),
          C = (0, l.u)(e),
          I = (0, c.g)(e.id),
          E = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
          N = (0, u.Z)(e.id),
          S = (0, o.PE)(e.id),
          x = (0, a.n2)(e.id),
          v = [],
          T = e.hasFeature(m.oNc.HUB),
          Z = e.hasFeature(m.oNc.COMMUNITY),
          A = (0, f.lN)(!(0, p.r1)(e.id)),
          b = e.hasFeature(
            m.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY,
          );
        return (
          T && v.push(_.z.GUILD_HUB_HEADER_OPTIONS),
          !S && I && N && null != E && E.length > 0
            ? v.push(_.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled &&
              v.push(_.z.GUILD_PREMIUM_PROGRESS_BAR),
          !T && I && v.push(_.z.GUILD_HOME),
          t && v.push(_.z.GUILD_SCHEDULED_EVENTS),
          !T && Z && A && v.push(_.z.CHANNELS_AND_ROLES),
          g && v.push(_.z.GUILD_ROLE_SUBSCRIPTIONS),
          C && v.push(_.z.GUILD_SHOP),
          n && v.push(_.z.GUILD_MEMBER_APPLICATIONS),
          x && (Z || b) && v.push(_.z.GUILD_MOD_DASH_MEMBER_SAFETY),
          v
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
              s = -1;
            return (t.userLimit > 0 && (s = t.userLimit),
            n && a > 0 && (s = s > 0 ? Math.min(s, a) : a),
            r && s === l.xGv)
              ? 0
              : s;
          })({ channel: t, video: r }) > 0 &&
          !n &&
          !a
        );
      }
    },
    109446: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(392711),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(99690),
        u = n(359110),
        d = n(601070),
        h = n(91159),
        p = n(488131),
        f = n(496675),
        _ = n(306680),
        m = n(594174),
        g = n(768581),
        C = n(709054),
        I = n(981631),
        E = n(124368),
        N = n(689938),
        S = n(462397);
      function x(e) {
        let { channel: t } = e,
          r = (0, s.Wu)([d.Z, _.ZP, f.Z], () => {
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
              .filter((t) => !(t.id in e) && f.Z.can(I.Plq.VIEW_CHANNEL, t))
              .sort((e, t) => {
                let n = _.ZP.lastMessageId(e.id),
                  i = _.ZP.lastMessageId(t.id);
                return C.default.compare(n, i);
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
            className: S.popout,
            children: [
              (0, i.jsx)(o.Text, {
                className: S.title,
                variant: "text-xs/bold",
                color: "header-secondary",
                children: t.isForumLikeChannel()
                  ? N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM
                  : N.Z.Messages.ACTIVE_THREADS_POPOUT_HEADER,
              }),
              r
                .slice(0, t.isForumLikeChannel() ? r.length : c)
                .map((e) => (0, i.jsx)(v, { thread: e }, e.id))
                .filter((e) => l.isValidElement(e))
                .slice(0, c),
              (0, i.jsx)(o.Clickable, {
                className: S.more,
                onClick: () => {
                  t.isForumLikeChannel()
                    ? (0, u.Kh)(t.id)
                    : (0, o.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("36970")
                          .then(n.bind(n, 223901));
                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                      });
                },
                children: (0, i.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  children: N.Z.Messages.ACTIVE_THREADS_POPOUT_LINK,
                }),
              }),
            ],
          })
        );
      }
      function v(e) {
        let { thread: t } = e,
          n = (0, s.e7)([m.default], () => m.default.getUser(t.ownerId)),
          l = (0, h.Ok)(t);
        return (0, i.jsxs)(o.Clickable, {
          className: S.row,
          onClick: (e) => {
            (0, p.ok)(
              t,
              t.isForumPost() ? e.shiftKey : !e.shiftKey,
              E.on.POPOUT,
            );
          },
          children: [
            null == n
              ? (0, i.jsx)("img", {
                  className: S.avatar,
                  src: g.ZP.getDefaultAvatarURL(void 0, void 0),
                  alt: "",
                })
              : (0, i.jsx)(c.Z, {
                  className: S.avatar,
                  user: n,
                  size: o.AvatarSizes.SIZE_16,
                }),
            (0, i.jsx)(o.Text, {
              className: S.name,
              variant: "text-sm/normal",
              color: "none",
              children: t.name,
            }),
            (0, i.jsxs)(o.Text, {
              className: S.timestamp,
              variant: "text-sm/normal",
              color: "none",
              children: [
                (0, i.jsx)("span", { className: S.bullet, children: "•" }),
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
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(91192),
        s = n(589440),
        o = n(481060),
        c = n(566461),
        u = n(872356),
        d = n(206197);
      function h(e) {
        var t;
        let {
            id: n,
            className: l,
            innerClassName: h,
            renderIcon: p,
            text: f,
            selected: _,
            trailing: m,
            showUnread: g = !1,
            ...C
          } = e,
          I = (0, a.JA)(n),
          E = null !== (t = (0, s.q)(f)) && void 0 !== t ? t : "";
        return (0, i.jsx)("li", {
          children: (0, i.jsxs)(o.ClickableContainer, {
            ...C,
            buttonProps: { ...I, id: n, role: "button" },
            tag: "div",
            "aria-label": E,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
              null != C.onContextMenu
                ? C.onContextMenu
                : (e) => {
                    e.stopPropagation();
                  },
            className: r()(
              u.containerDefault,
              d.wrapper,
              { [d.modeSelected]: _ },
              l,
            ),
            children: [
              g
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
                      children: f,
                    }),
                    m,
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
          return Z;
        },
        Qo: function () {
          return A;
        },
        kw: function () {
          return R;
        },
        rj: function () {
          return b;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(91192),
        o = n(442837),
        c = n(481060),
        u = n(211739),
        d = n(239091),
        h = n(146773),
        p = n(82295),
        f = n(111028),
        _ = n(680089),
        m = n(430824),
        g = n(496675),
        C = n(9156),
        I = n(203818),
        E = n(438144),
        N = n(981631),
        S = n(689938),
        x = n(134743);
      function v(e) {
        e.stopPropagation();
      }
      let T = l.memo(function (e) {
        let t,
          {
            channel: r,
            connectChannelDragSource: h,
            connectChannelDropTarget: I,
            disableManageChannels: E,
            position: T,
            sortingPosition: Z,
            hideIcon: A,
            children: b,
          } = e,
          R = (0, o.e7)([C.ZP], () =>
            C.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          M = (0, o.e7)([_.Z], () => _.Z.isCollapsed(r.id)),
          L = (0, o.e7)([g.Z], () => g.Z.can(N.Plq.MANAGE_CHANNELS, r));
        t =
          null != Z
            ? T > Z
              ? x.containerDragAfter
              : x.containerDragBefore
            : x.containerDefault;
        let P = l.useCallback(() => {
            M ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
          }, [r.id, M]),
          O = l.useCallback(
            (e) => {
              if ("null" !== r.id) {
                let t = m.Z.getGuild(r.getGuildId());
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
          y = l.useCallback(() => {
            let e = r.type === N.d4z.GUILD_CATEGORY ? null : r.type,
              t = r.getGuildId();
            null != t &&
              (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  n.e("45094"),
                  n.e("5324"),
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
          { role: D, tabIndex: j, ...w } = (0, s.JA)(r.id),
          U = l.useRef(null),
          G = l.useRef(null),
          k = (0, i.jsxs)("li", {
            className: t,
            "data-dnd-name": r.name,
            children: [
              (0, i.jsx)(c.FocusRing, {
                focusTarget: U,
                ringTarget: G,
                offset: { left: 4, right: 4 },
                children: (0, i.jsxs)("div", {
                  ref: G,
                  className: a()(x.iconVisibility, x.wrapper, {
                    [x.collapsed]: M,
                    [x.muted]: R,
                    [x.clickable]: !0,
                  }),
                  onContextMenu: O,
                  children: [
                    (0, i.jsxs)(c.Clickable, {
                      innerRef: U,
                      className: x.mainContent,
                      tabIndex: j,
                      ...w,
                      onClick: P,
                      "aria-label": S.Z.Messages.CATEGORY_A11Y_LABEL.format({
                        categoryName: r.name,
                      }),
                      "aria-expanded": !M,
                      focusProps: { enabled: !1 },
                      children: [
                        A
                          ? null
                          : (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: "md",
                              color: "currentColor",
                              className: x.icon,
                            }),
                        (0, i.jsx)(p.Z, {
                          className: x.name,
                          children: (0, i.jsx)(f.Z, { children: r.name }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      onClick: v,
                      className: x.children,
                      children:
                        L && !E
                          ? (0, i.jsx)(c.Tooltip, {
                              text: S.Z.Messages.CREATE_CHANNEL,
                              children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Button, {
                                  "aria-label": S.Z.Messages.CREATE_CHANNEL,
                                  look: c.Button.Looks.BLANK,
                                  size: c.Button.Sizes.NONE,
                                  className: a()(x.addButton, x.forceVisible),
                                  onClick: y,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  tabIndex: j,
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
                                    className: x.addButtonIcon,
                                  }),
                                });
                              },
                            })
                          : null,
                    }),
                  ],
                }),
              }),
              b,
            ],
          });
        return null != I && null != h ? I(h(k)) : k;
      });
      t.ZP = (0, h.B)(T);
      let Z = l.memo(function (e) {
          let { name: t, onDismiss: n, className: l } = e;
          return (0, i.jsx)("li", {
            className: a()(l, x.containerDefault),
            children: (0, i.jsxs)("div", {
              className: a()(x.iconVisibility, x.wrapperStatic),
              children: [
                (0, i.jsx)("div", {
                  className: x.mainContent,
                  children: (0, i.jsx)(p.Z, {
                    className: x.name,
                    children: (0, i.jsx)(f.Z, { children: t }),
                  }),
                }),
                null != n
                  ? (0, i.jsx)(c.TooltipContainer, {
                      text: S.Z.Messages.CLEAR_RECENT_CHANNELS,
                      className: x.dismissWrapper,
                      children: (0, i.jsx)(c.Clickable, {
                        className: x.dismissButton,
                        onClick: n,
                        children: (0, i.jsx)(c.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: x.dismiss,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          });
        }),
        A = l.memo(function (e) {
          let { category: t } = e,
            n = (0, o.e7)([I.Z], () =>
              I.Z.isVoiceCategoryCollapsed(t.guild.id),
            ),
            r = l.useCallback(() => {
              n ? (0, E.s)(t.guild.id) : (0, E.M)(t.guild.id);
            }, [t.guild.id, n]);
          return n
            ? (0, i.jsxs)(c.Clickable, {
                className: x.voiceChannelsButton,
                onClick: r,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: x.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children:
                      S.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND,
                  }),
                ],
              })
            : (0, i.jsxs)(c.Clickable, {
                className: x.voiceChannelsButton,
                onClick: r,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: x.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children:
                      S.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE,
                  }),
                ],
              });
        }),
        b = l.memo(function (e) {
          let { category: t, channel: n } = e,
            l = (0, o.e7)([I.Z], () =>
              I.Z.isVoiceCategoryCollapsed(t.guild.id),
            );
          return l || null == n || n.record.type === N.d4z.GUILD_CATEGORY
            ? l
              ? (0, i.jsx)("li", {
                  className: a()(x.containerDefault),
                  children: (0, i.jsx)("div", {
                    className: a()(x.iconVisibility, x.wrapperStatic),
                    children: (0, i.jsx)(p.Z, {
                      className: x.name,
                      children: (0, i.jsx)(f.Z, {
                        children: S.Z.Messages.VOICE_CHANNELS_CATEGORY_HEADER,
                      }),
                    }),
                  }),
                })
              : null
            : (0, i.jsx)("div", { style: { height: 16 } });
        }),
        R = l.memo(function (e) {
          let { channel: t } = e;
          return (0, i.jsx)("li", {
            className: a()(x.containerDefault),
            children: (0, i.jsx)("div", {
              className: a()(x.iconVisibility, x.wrapperStatic),
              children: (0, i.jsx)(p.Z, {
                className: x.name,
                children: (0, i.jsx)(f.Z, { children: t.name }),
              }),
            }),
          });
        });
    },
    754231: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(503438),
        u = n(39628),
        d = n(884338),
        h = n(528144),
        p = n(424678),
        f = n(594174),
        _ = n(81063),
        m = n(768581),
        g = n(823379),
        C = n(51144),
        I = n(216749);
      let E = d.u.SIZE_24;
      function N(e) {
        var t, n;
        let { activity: r, user: a, embeddedApp: s, onOpenSpotifyAlbum: u } = e,
          d = null == r ? void 0 : r.assets,
          h = null == r ? void 0 : r.application_id;
        if (
          null == r ||
          null == d ||
          (null == d.large_image && null == d.small_image)
        )
          return null != s
            ? (function (e) {
                let t = m.ZP.getApplicationIconURL({
                    id: e.application.id,
                    icon: e.application.icon,
                  }),
                  n = e.application.name;
                return (0, i.jsx)(o.Tooltip, {
                  text: n,
                  position: "top",
                  children: () =>
                    (0, i.jsx)("img", {
                      alt: n,
                      src: t,
                      className: I.applicationLargeImage,
                    }),
                });
              })(s)
            : null;
        let p =
            null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
          f = (0, c.Z)(r),
          g = f ? I.spotifyLargeImage : I.applicationLargeImage,
          C =
            null != p
              ? (0, i.jsx)("img", {
                  alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
                  src: (0, _.getAssetImage)(h, p, [128, 128]),
                  className: g,
                })
              : null;
        return f && null != u
          ? ((C = (0, i.jsx)(o.Clickable, {
              className: I.clickable,
              onClick: () => {
                u(r, a.id);
              },
              children: C,
            })),
            (0, i.jsx)(o.Tooltip, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: (e) => {
                let { onClick: t, ...n } = e;
                return null != C ? l.cloneElement(C, n) : null;
              },
            }))
          : C;
      }
      function S(e) {
        let { activity: t, embeddedApp: n, onOpenSpotifyTrack: l } = e,
          r = null == t ? void 0 : t.details,
          a = null == t ? void 0 : t.name,
          s = a;
        if (null != n) s = n.application.name;
        else {
          if (
            !(null != t && (0, c.Z)(t)) ||
            null == t.sync_id ||
            null == r ||
            null == l
          )
            return null;
          (a = r),
            (s = (0, i.jsx)(o.Clickable, {
              className: I.headerLink,
              onClick: () => {
                l(t);
              },
              children: r,
            }));
        }
        return (0, i.jsx)(h.Z, { title: a, className: I.header, children: s });
      }
      function x(e) {
        let { activity: t, user: n, onOpenSpotifyArtist: l } = e,
          r = null == t ? void 0 : t.details,
          s = null == t ? void 0 : t.state,
          o = r;
        return (null != t &&
          (0, c.Z)(t) &&
          null != s &&
          (o = [
            (0, i.jsx)(
              p.Z,
              {
                artists: s,
                linkClassName: I.bodyLink,
                canOpen: null != t.sync_id,
                onOpenSpotifyArtist: (e) => {
                  null == l || l(t, n.id, e);
                },
              },
              s,
            ),
          ]),
        null == o || "" === o)
          ? null
          : (0, i.jsx)("div", {
              className: a()(
                I.ellipsisRow,
                I.colorHeaderSecondary,
                I.bodyTextSize,
              ),
              children: o,
            });
      }
      function v(e) {
        let { activity: t } = e,
          n = null == t ? void 0 : t.state;
        return null == n || "" === n || (0, c.Z)(t)
          ? null
          : (0, i.jsx)("div", {
              className: a()(
                I.ellipsisRow,
                I.colorHeaderSecondary,
                I.bodyTextSize,
                I.__invalid_activity,
              ),
              children: n,
            });
      }
      function T(e) {
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
          className: I.timeBar,
          themed: !0,
          singleLine: !0,
        });
      }
      function Z(e) {
        let {
            activity: t,
            embeddedApp: n,
            user: r,
            channel: a,
            sortedVoiceStates: u,
            onOpenSpotifyTrack: h,
            onOpenSpotifyArtist: p,
            onOpenSpotifyAlbum: _,
          } = e,
          m = [];
        null != n
          ? (m = Array.from(n.embeddedActivity.userIds))
          : (0, c.Z)(t) && null != u && (m = u.map((e) => e.user.id));
        let Z = (0, s.Wu)([f.default], () =>
            m.map((e) => f.default.getUser(e)).filter(g.lm),
          ),
          A = null != n || (0, c.Z)(t),
          b = l.useMemo(() => {
            let e = new Map();
            return (
              A &&
                null != u &&
                u.forEach((t) => {
                  let n = t.member;
                  null != n && e.set(t.user.id, n);
                }),
              e
            );
          }, [u, A]);
        return A
          ? (0, i.jsxs)("div", {
              className: I.flexColumn,
              children: [
                (0, i.jsxs)("div", {
                  className: I.flexRow,
                  children: [
                    (0, i.jsx)(N, {
                      activity: t,
                      user: r,
                      embeddedApp: n,
                      onOpenSpotifyAlbum: _,
                    }),
                    (0, i.jsxs)("div", {
                      className: I.detailsAndAvatarsContainer,
                      children: [
                        (0, i.jsx)(S, {
                          activity: t,
                          embeddedApp: n,
                          onOpenSpotifyTrack: h,
                        }),
                        (0, i.jsx)(x, {
                          activity: t,
                          user: r,
                          onOpenSpotifyArtist: p,
                        }),
                        (0, i.jsx)(v, { activity: t }),
                        m.length > 0 &&
                          (0, i.jsx)(d.Z, {
                            className: I.usersSummary,
                            guildId: a.guild_id,
                            users: Z,
                            size: E,
                            max: 7,
                            renderUser: (e) => {
                              var t;
                              if (null == e) return null;
                              let n = b.get(e.id),
                                l =
                                  null !== (t = null == n ? void 0 : n.nick) &&
                                  void 0 !== t
                                    ? t
                                    : C.ZP.getName(e);
                              return (0, i.jsx)(
                                o.TooltipContainer,
                                {
                                  text: l,
                                  position: "bottom",
                                  children: (0, i.jsx)(
                                    "img",
                                    {
                                      src: e.getAvatarURL(a.guild_id, E),
                                      alt: l,
                                      className: I.avatar,
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
                (0, i.jsx)(T, { activity: t }),
              ],
            })
          : null;
      }
    },
    737592: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        s = n(481060),
        o = n(717881),
        c = n(503438),
        u = n(850827),
        d = n(952164),
        h = n(237583),
        p = n(131704),
        f = n(314897),
        _ = n(594174),
        m = n(768581),
        g = n(51144),
        C = n(754231),
        I = n(51299);
      function E(e) {
        let { guildId: t, member: n, className: l } = e,
          a = null != n.member ? (0, m.CA)(n.member) : null;
        return (0, i.jsx)(s.Tooltip, {
          text: n.nick,
          position: "bottom",
          children: (e) => {
            var o;
            return (0, i.jsx)(s.Avatar, {
              src: null != a ? a : n.user.getAvatarURL(t, 16),
              size: s.AvatarSizes.SIZE_16,
              className: r()(l, I.partyAvatar),
              "aria-label":
                null !== (o = n.nick) && void 0 !== o
                  ? o
                  : g.ZP.getName(n.user),
              ...e,
            });
          },
        });
      }
      function N(e) {
        let { members: t, guildId: n } = e;
        return (0, i.jsx)(h.Z, {
          className: I.partyMembers,
          guildId: n,
          users: t,
          max: 6,
          renderUser: (e, t, l) =>
            (0, i.jsx)(E, { guildId: n, member: e, className: t }, l),
          renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
              "div",
              { className: r()(I.morePartyMembers, t), children: e },
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
            onAction: s,
          } = e,
          h = null != r,
          m = h ? Array.from(r.embeddedActivity.userIds) : [],
          g = (0, a.e7)([_.default, f.default], () => {
            if (h) return _.default.getUser(m[0]);
            if (null != l) {
              var e, t;
              return l.length <= 0
                ? null
                : null !==
                      (t =
                        null ===
                          (e = l.find(
                            (e) => e.user.id !== f.default.getId(),
                          )) || void 0 === e
                          ? void 0
                          : e.user) && void 0 !== t
                  ? t
                  : l[0].user;
            }
          });
        if (null == g) return null;
        let E = h || (0, c.Z)(n),
          S = (0, p.vd)(t.type);
        return (0, i.jsxs)("div", {
          className: I.activity,
          children: [
            (0, i.jsx)("div", {
              className: I.channelActivityContainer,
              children: E
                ? (0, i.jsx)(C.Z, {
                    activity: n,
                    embeddedApp: r,
                    user: g,
                    channel: t,
                    sortedVoiceStates: l,
                    onOpenSpotifyTrack: S ? d.aG : void 0,
                    onOpenSpotifyArtist: S ? d.d$ : void 0,
                    onOpenSpotifyAlbum: S ? d.Z5 : void 0,
                  })
                : (0, i.jsx)(o.Z, {
                    type: o.P.VOICE_CHANNEL,
                    activity: n,
                    user: g,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    renderHeaderAccessory:
                      null != l
                        ? () =>
                            (0, i.jsx)(N, { guildId: t.guild_id, members: l })
                        : void 0,
                    isEmbedded: h,
                  }),
            }),
            (0, i.jsx)("div", {
              className: I.activityActionsContainer,
              children: (0, i.jsx)(u.Z, {
                type: o.P.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                user: g,
                guildId: t.getGuildId(),
                channelId: t.id,
                color: I.button,
                onAction: s,
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
          return b;
        },
        ZP: function () {
          return y;
        },
        eP: function () {
          return L;
        },
        hR: function () {
          return M;
        },
        jo: function () {
          return R;
        },
      });
      var i,
        l,
        r,
        a,
        s = n(735250),
        o = n(470079),
        c = n(120356),
        u = n.n(c),
        d = n(442837),
        h = n(481060),
        p = n(787014),
        f = n(924301),
        _ = n(159300),
        m = n(152376),
        g = n(427679),
        C = n(155409),
        I = n(131704),
        E = n(199902),
        N = n(430824),
        S = n(496675),
        x = n(914010),
        v = n(281029),
        T = n(981631),
        Z = n(689938),
        A = n(872356);
      function b(e, t, n) {
        return null != t && !!t && !(0, v.ig)(n, e.type);
      }
      function R(e, t) {
        return null == t
          ? A.containerDefault
          : e > t
            ? A.containerDragAfter
            : A.containerDragBefore;
      }
      function M(e) {
        let {
          channel: t,
          disableManageChannels: n,
          tabIndex: i,
          forceShowButtons: l,
          hasChannelInfo: r = !1,
        } = e;
        if (
          (0, d.e7)(
            [S.Z, x.Z],
            () =>
              n ||
              x.Z.getGuildId() === T.I_8 ||
              (!S.Z.can(T.Plq.MANAGE_CHANNELS, t) &&
                !S.Z.can(T.Plq.MANAGE_ROLES, t) &&
                !S.Z.can(T.Plq.MANAGE_WEBHOOKS, t)) ||
              ((0, I.r8)(t.type) && !S.Z.can(T.Plq.VIEW_CHANNEL, t)) ||
              (t.isGuildVocal() && !S.Z.can(T.Plq.CONNECT, t)) ||
              !I.dF.has(t.type),
          )
        )
          return null;
        function a() {
          p.ZP.open(t.id);
        }
        return (0, s.jsx)(h.Tooltip, {
          text: Z.Z.Messages.EDIT_CHANNEL,
          children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, onFocus: o, onBlur: c } = e;
            return (0, s.jsx)(h.Clickable, {
              className: u()(
                A.iconItem,
                l ? A.alwaysShown : void 0,
                r ? A.iconWithChannelInfo : A.iconNoChannelInfo,
              ),
              onClick: a,
              tabIndex: i,
              "aria-label": Z.Z.Messages.EDIT_CHANNEL,
              onMouseEnter: t,
              onMouseLeave: n,
              onFocus: o,
              onBlur: c,
              children: (0, s.jsx)(h.SettingsIcon, {
                size: "xs",
                color: "currentColor",
                className: A.actionIcon,
              }),
            });
          },
        });
      }
      function L(e) {
        let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: r,
            forceShowButtons: a,
            hasChannelInfo: o = !1,
          } = e,
          c = (0, d.e7)([N.Z], () => N.Z.getGuild(t.getGuildId())),
          p = (0, d.e7)([g.Z], () => g.Z.getStageInstanceByChannel(t.id), [
            t.id,
          ]),
          m = (0, d.e7)([f.ZP], () => f.ZP.getActiveEventByChannel(t.id), [
            t.id,
          ]),
          I = (0, d.e7)([S.Z], () => (0, _.b)(S.Z, c, t, p)),
          x = (0, d.e7)([S.Z], () =>
            S.Z.can(T.Plq.CREATE_INSTANT_INVITE, t)
              ? Z.Z.Messages.CREATE_INSTANT_INVITE
              : Z.Z.Messages.INVITE_TO_SERVER,
          );
        if (l || !I) return null;
        function v() {
          if (null != c) {
            let e = E.Z.getAllActiveStreams().filter(
              (e) => e.state !== T.jm8.ENDED && e.channelId === t.id,
            );
            (0, h.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                n.e("7654"),
                n.e("85683"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, s.jsx)(i, {
                  ...n,
                  guild: c,
                  channel: t,
                  streamUserId: 1 === e.length ? e[0].ownerId : null,
                  source: T.t4x.GUILD_CHANNELS,
                  guildScheduledEvent: m,
                });
            });
          }
        }
        let b = (0, s.jsx)(h.GroupPlusIcon, {
          size: "xs",
          className: A.actionIcon,
          "aria-hidden": !0,
        });
        return (
          i &&
            (b = (0, s.jsx)(C.Z, {
              tutorialId: "instant-invite",
              position: "left",
              children: (0, s.jsx)("div", { children: b }),
            })),
          (0, s.jsx)(h.Tooltip, {
            text: x,
            children: (e) =>
              (0, s.jsx)(h.Clickable, {
                className: u()(
                  A.iconItem,
                  a ? A.alwaysShown : void 0,
                  o ? A.iconWithChannelInfo : A.iconNoChannelInfo,
                ),
                ...e,
                onClick: v,
                tabIndex: r,
                "aria-label": x,
                children: b,
              }),
          })
        );
      }
      function P(e) {
        let { channel: t } = e,
          n = () => {
            (0, m._U)(t.guild_id, t.id);
          };
        return (0, s.jsx)(h.Tooltip, {
          text: Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
          children: (e) =>
            (0, s.jsx)(h.Clickable, {
              className: A.iconItem,
              ...e,
              onClick: n,
              "aria-label": Z.Z.Messages.REMOVE_FAVORITE_SUGGESTION,
              children: (0, s.jsx)(h.XSmallIcon, {
                size: "xs",
                color: "currentColor",
                className: A.actionIcon,
              }),
            }),
        });
      }
      function O(e) {
        let { channel: t } = e,
          n = () => {
            (0, m.dM)(t.guild_id, t.id, !0, { section: T.jXE.CHANNEL_LIST });
          };
        return (0, s.jsx)(h.Tooltip, {
          text: Z.Z.Messages.ADD_FAVORITE,
          children: (e) =>
            (0, s.jsx)(h.Clickable, {
              className: A.iconItem,
              ...e,
              onClick: n,
              "aria-label": Z.Z.Messages.ADD_FAVORITE,
              children: (0, s.jsx)(h.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: A.actionIcon,
              }),
            }),
        });
      }
      class y extends (a = o.PureComponent) {
        renderEditButton() {
          return (0, s.jsx)(M, { ...this.props });
        }
        renderInviteButton() {
          return (0, s.jsx)(L, { ...this.props });
        }
        renderRemoveSuggestionButton() {
          return (0, s.jsx)(P, { ...this.props });
        }
        renderAcceptSuggestionButton() {
          return (0, s.jsx)(O, { ...this.props });
        }
        getClassName() {
          let { position: e, sortingPosition: t } = this.props;
          return R(e, t);
        }
        isDisabled() {
          let { channel: e, sorting: t, sortingType: n } = this.props;
          return b(e, t, n);
        }
      }
      (r = { isDefaultChannel: !1 }),
        (l = "defaultProps") in (i = y)
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
          return A;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(692547),
        a = n(481060),
        s = n(619915),
        o = n(456269),
        c = n(921711),
        u = n(71275),
        d = n(601070),
        h = n(430824),
        p = n(496675),
        f = n(306680),
        _ = n(979651),
        m = n(968358),
        g = n(790901),
        C = n(714794),
        I = n(355363),
        E = n(687352),
        N = n(135724),
        S = n(25601),
        x = n(981631),
        v = n(490897),
        T = n(689938),
        Z = n(718317);
      function A(e) {
        var t;
        let {
            channel: n,
            isChannelSelected: A,
            isChannelCollapsed: b,
            voiceStates: R,
            enableConnectedUserLimit: M,
            enableActivities: L,
            isSubscriptionGated: P,
            needSubscriptionToAccess: O,
            isNewChannel: y,
            muted: D,
            resolvedUnreadSetting: j,
          } = e,
          w = (0, l.e7)([f.ZP], () => f.ZP.getMentionCount(n.id)),
          U = (0, s.ZP)(n),
          G = (0, l.e7)([p.Z], () => !p.Z.can(x.Plq.CONNECT, n)),
          k = (0, l.e7)([_.Z], () => _.Z.hasVideo(n.id)),
          B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
          V = (0, I.ZP)({ channel: n, locked: G, video: k || B, selected: A }),
          H = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
          F = (0, o.n2)(n.guild_id, n.id),
          W = (0, l.e7)([h.Z], () => {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e
                    ? void 0
                    : e.hasFeature(x.oNc.COMMUNITY)) &&
              void 0 !== t &&
              t
            );
          });
        if ((0, C.Z)(w)) return (0, i.jsx)(S.Z, { mentionsCount: w });
        if ((0, c.O)(P)) return (0, i.jsx)(c.Z, { locked: O });
        if (y)
          return (0, i.jsx)(a.TextBadge, {
            text: T.Z.Messages.NEW,
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: Z.newChannel,
          });
        if (
          !D &&
          j === v.i.ALL_MESSAGES &&
          n.isForumLikeChannel() &&
          null != H &&
          H > 0
        )
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: T.Z.Messages.CHANNEL_NEW_POSTS_LABEL.format({
              count: (0, a.getBadgeCountString)(H),
            }),
          });
        if (!D && n.isForumLikeChannel() && null != F && F > 0)
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, a.getBadgeCountString)(F),
          });
        let z =
          null !== (t = null == R ? void 0 : R.length) && void 0 !== t ? t : 0;
        return null != M && M && V
          ? (0, i.jsx)(N.Z, { userCount: z, video: k || B, channel: n })
          : b && (0, m.a)(R) && W
            ? (0, i.jsx)(a.TextBadge, {
                text: T.Z.Messages.LIVE,
                color: r.Z.unsafe_rawColors.RED_400.css,
              })
            : null != L && L && (0, g.u)(U)
              ? (0, i.jsx)(E.Z, { embeddedApps: U, muted: D })
              : null;
      }
    },
    687352: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(925329),
        o = n(932355);
      function c(e) {
        let { className: t, embeddedApps: n, muted: l } = e;
        if (n.length <= 0) return null;
        if (1 === n.length)
          return (0, i.jsx)("div", {
            className: r()(o.container, t, l && o.modeMuted),
            children: (0, i.jsx)(s.Z, {
              game: n[0].application,
              className: o.icon20px,
            }),
          });
        {
          let e = n.length - 1;
          return (0, i.jsxs)("div", {
            className: r()(o.container, t, l && o.modeMuted),
            children: [
              (0, i.jsx)(s.Z, {
                game: n[0].application,
                className: o.icon20px,
              }),
              2 === n.length
                ? (0, i.jsx)(s.Z, {
                    game: n[1].application,
                    className: o.icon20px,
                  })
                : (0, i.jsx)(a.Text, {
                    className: o.overflow,
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
        l = n(735250),
        r = n(470079),
        a = n(392711),
        s = n.n(a),
        o = n(91192),
        c = n(924826),
        u = n(442837),
        d = n(481060),
        h = n(925549),
        p = n(260300),
        f = n(410575),
        _ = n(607070),
        m = n(100527),
        g = n(906732),
        C = n(313201),
        I = n(362658),
        E = n(583962),
        N = n(915885),
        S = n(258871),
        x = n(216306),
        v = n(398758),
        T = n(220444),
        Z = n(31022),
        A = n(10401),
        b = n(131704),
        R = n(592125),
        M = n(796974),
        L = n(984933),
        P = n(914010),
        O = n(540126),
        y = n(734307),
        D = n(854444),
        j = n(761091),
        w = n(301342),
        U = n(906817),
        G = n(429122),
        k = n(285573),
        B = n(995993),
        V = n(910595),
        H = n(466935),
        F = n(120818),
        W = n(61642),
        z = n(848442),
        Y = n(53425),
        K = n(424785),
        q = n(770202),
        Q = n(79556),
        X = n(428127),
        J = n(950969),
        $ = n(233657),
        ee = n(831700),
        et = n(443063),
        en = n(327530),
        ei = n(981631),
        el = n(176505),
        er = n(689938),
        ea = n(774264);
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
      class eo extends (i = r.PureComponent) {
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
            { scrollTop: a } = M.Z.getGuildDimensions(i);
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
              if (i < O.wd || e.isPlaceholderRow(i, l)) return !1;
              let r = e.getChannelFromSectionRow(i, l);
              if (null == r) return !1;
              let { channel: a, category: s } = r;
              return (
                !!(0, b.vc)(a.record.type) &&
                (!s.isCollapsed || !s.isMuted) &&
                !a.isMuted &&
                !!t.isItemVisible(i, l, !0) &&
                (0, T.d)(a.record)
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
              guildChannelsVersion: s,
            } = this.props;
          return (0, l.jsx)("div", {
            className: ea.positionedContainer,
            children: (0, l.jsx)(J.Z, {
              ref: this.unreadTopRef,
              textUnread: er.Z.Messages.NEW_UNREADS,
              textMention: er.Z.Messages.NEW_MENTIONS,
              hide: null == e && (i || null != t || null != n),
              className: ea.unreadTop,
              barClassName: ea.unreadBar,
              guildId: r,
              guildChannels: a,
              guildChannelsVersion: s,
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
          return (0, l.jsx)(J.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: er.Z.Messages.NEW_UNREADS,
            textMention: er.Z.Messages.NEW_MENTIONS,
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
            { ref: a, ...s } = this.context,
            o = 0;
          return (
            null != n
              ? (o = r ? en.hl : en.Q0)
              : t.hasCommunityInfoSubheader() && !i && (o = en.JD),
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
                    paddingTop: o,
                    paddingBottom: en.$k,
                    renderSection: this.renderSection,
                    renderFooter: this.renderSectionFooter,
                    renderRow: this.renderRow,
                    onScroll: this.handleListScroll,
                    onResize: this.handleResize,
                    onContentResize: this.handleResize,
                    sections: e.getSections(!0),
                    innerAriaLabel: er.Z.Messages.CHANNELS,
                    innerTag: "ul",
                    getAnchorId: this.getAnchorId,
                    ...s,
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
            children: (0, l.jsx)(C.FG, {
              children: (i) =>
                (0, l.jsx)(d.HeadingLevel, {
                  component: (0, l.jsx)(d.HiddenVisually, {
                    children: (0, l.jsx)(d.H, {
                      id: i,
                      children: er.Z.Messages.CHANNELS,
                    }),
                  }),
                  children: n
                    ? (0, l.jsxs)(r.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            className: ea.positionedContainer,
                            children: (0, l.jsx)(X.Z, {
                              position: "top",
                              guildChannels: e,
                              guildChannelsVersion: t,
                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                              jumpToChannel: this.jumpToChannel,
                            }),
                          }),
                          this.renderList(),
                          (0, l.jsx)(X.Z, {
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
                a = 0,
                s =
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
              for (let e = 0; e < s.length - 1; e++)
                if (
                  (null !== (i = r[s[e]]) && void 0 !== i ? i : []).length > 0
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
            es(this, "jumpToChannel", (e) =>
              this.scrollToChannel(e, !0, en.Q1),
            ),
            es(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
              let [n, i] = t;
              return this.scrollToChannel(
                e,
                !0,
                null != n && null != i ? en.Q1 : en.yE,
              );
            }),
            es(this, "isChannelVisible", (e, t) => {
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
                    [l, a] = e.getScrollPosition(r.section, r.row);
                  null != t &&
                    l + a < n.scrollTop + n.offsetHeight &&
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
              s().throttle((e) => {
                h.Z.updateChannelListScroll(
                  this.props.guildId,
                  e,
                  this.getVisibleChannels(),
                );
              }, 100),
            ),
            es(this, "getSectionHeight", (e) => {
              let { guild: t, guildChannels: n } = this.props;
              return (0, U.EM)(e, t, n);
            }),
            es(this, "getSectionFooterHeight", (e) => {
              let {
                guildChannels: t,
                voiceStates: n,
                selectedVoiceChannelId: i,
                selectedChannelId: l,
                optInEnabled: r,
                guildChannelsVersion: a,
              } = this.props;
              return (0, G.dt)({
                sectionIndex: e,
                guildChannels: t,
                guildChannelsVersion: a,
                voiceStates: n,
                selectedChannelId: l,
                selectedVoiceChannelId: i,
                optInEnabled: r,
              });
            }),
            es(this, "getRowHeight", (e, t) => {
              let {
                  guildChannels: n,
                  voiceStates: i,
                  stageChannelSpeakerVoiceStates: l,
                  selectedVoiceChannelId: r,
                  selectedGuildId: a,
                } = this.props,
                s = en.Vf;
              if (e === O.wZ) {
                let e = n.getGuildActionSection();
                return e.isEmpty()
                  ? 0
                  : e.getRow(t) === et.z.GUILD_PREMIUM_PROGRESS_BAR
                    ? e.getRows().length > 1
                      ? E.aR
                      : E.PD
                    : s;
              }
              if (n.isPlaceholderRow(e, t)) return 0;
              let o = n.getChannelFromSectionRow(e, t);
              if (null == o) return 0;
              let { channel: c, category: u } = o;
              if (c.record.type === ei.d4z.GUILD_CATEGORY) return 40;
              let { isFavoritesPerk: d } = I.Z.getCurrentConfig(
                { location: "channel_list" },
                { autoTrackExposure: !0 },
              );
              for (let e of (d &&
                a === ei.I_8 &&
                !c.record.isDM() &&
                !c.record.isGroupDM() &&
                !c.record.isGuildStageVoice() &&
                (s = en.GQ),
              c.threadIds)) {
                s += en.Vf;
                let t = i[c.id];
                null != t &&
                  t.length > 0 &&
                  (s += (r === e ? t.length * en.Hb : en.Hb) + en.cx);
              }
              if (c.record.isGuildVoice()) {
                let e = i[c.id];
                if (null != e && e.length > 0) {
                  let t = e.length * en.Hb;
                  (c.isCollapsed || u.isCollapsed) && (t = en.Hb),
                    (s += t + en.cx);
                }
                c.id === this.props.rtcConnectedChannelId &&
                  (s += this.props.rtcDesyncedVoiceStatesCount * en.Hb);
              }
              if (
                (null != c.subtitle && (s += en.NY),
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
                    (s += e + en.cx);
                }
              }
              return s;
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
              null != n && r.includes(n) && (l = (0, x.KY)(t)),
                (0, x.Uo)(e.id, r, l);
            }),
            es(this, "renderSection", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  guild: r,
                  selectedChannelId: a,
                  disableManageChannels: s,
                } = this.props;
              return (0, l.jsx)(
                U.ZP,
                {
                  sectionIndex: t,
                  guild: r,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  selectedChannelId: a,
                  disableManageChannels: s,
                },
                (0, U.WW)(t, n),
              );
            }),
            es(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                {
                  guild: i,
                  selectedChannel: a,
                  selectedChannelId: s,
                  selectedVoiceChannel: o,
                  selectedVoiceChannelId: c,
                  guildChannels: u,
                  voiceStates: d,
                  disableManageChannels: h,
                  stageChannelSpeakerVoiceStates: p,
                  optInEnabled: f,
                  withGuildIcon: _,
                  isRefreshEnabled: m,
                } = this.props;
              if (t === O.wZ) {
                let e = u.getGuildActionSection(),
                  t = e.getRow(n);
                if (null == t) return null;
                switch (t) {
                  case et.z.GUILD_HUB_HEADER_OPTIONS:
                    return (0, l.jsx)(
                      S.Z,
                      { guild: i, channel: L.ZP.getDefaultChannel(i.id) },
                      et.z.GUILD_HUB_HEADER_OPTIONS,
                    );
                  case et.z.GUILD_PREMIUM_PROGRESS_BAR:
                    let r = e.getRows();
                    return (0, l.jsx)(
                      E.ZP,
                      { guild: i, withMargin: r.length > 1 },
                      et.z.GUILD_PREMIUM_PROGRESS_BAR,
                    );
                  case et.z.GUILD_HOME:
                    return (0, l.jsx)(
                      V.Z,
                      { guild: i, selected: s === el.oC.GUILD_HOME },
                      et.z.GUILD_HOME,
                    );
                  case et.z.GUILD_SCHEDULED_EVENTS:
                    if (m) return null;
                    return (0, l.jsx)(
                      $.Z,
                      { guild: i, selected: s === et.z.GUILD_SCHEDULED_EVENTS },
                      et.z.GUILD_SCHEDULED_EVENTS,
                    );
                  case et.z.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, l.jsx)(
                      W.Z,
                      { guild: i, selected: s === el.oC.ROLE_SUBSCRIPTIONS },
                      et.z.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                  case et.z.GUILD_SHOP:
                    return (0, l.jsx)(
                      z.Z,
                      { guild: i, selected: s === el.oC.GUILD_SHOP },
                      et.z.GUILD_SHOP,
                    );
                  case et.z.GUILD_MEMBER_APPLICATIONS:
                    return (0, l.jsx)(
                      H.Z,
                      { guild: i, selected: s === el.oC.MEMBER_APPLICATIONS },
                      et.z.GUILD_MEMBER_APPLICATIONS,
                    );
                  case et.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, l.jsx)(F.T, { guild: i });
                  case et.z.CHANNELS_AND_ROLES:
                    if (m) return null;
                    return (0, l.jsx)(
                      B.m,
                      {
                        guild: i,
                        selected:
                          s === el.oC.CHANNEL_BROWSER ||
                          s === el.oC.CUSTOMIZE_COMMUNITY,
                      },
                      et.z.CHANNELS_AND_ROLES,
                    );
                  case et.z.GUILD_DIRECTORY:
                    return (0, l.jsx)(
                      k.Z,
                      {
                        guild: i,
                        selectedChannelId: s,
                        disableManageChannels: h,
                      },
                      et.z.GUILD_DIRECTORY,
                    );
                  case et.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                    if (m) return null;
                    return (0, l.jsx)(
                      N.Z,
                      { guild: i, selected: s === el.oC.MEMBER_SAFETY },
                      et.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                  default:
                    return null;
                }
              }
              if (u.isPlaceholderRow(t, n)) return null;
              let g = u.getChannelFromSectionRow(t, n);
              if (null == g) return null;
              let { category: C, channel: I } = g,
                x = C instanceof O.VR,
                v = I.record,
                T = "".concat(t).concat(I.id);
              switch (v.type) {
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
                          channel: v,
                          guild: i,
                          position: I.position,
                          selected: s === I.id,
                          muted: I.isMuted,
                          subtitle: I.subtitle,
                          disableManageChannels: h,
                          canBeNewChannel: f && t === u.recentsSectionNumber,
                          isFavoriteCategory: x,
                          withGuildIcon: _,
                        }),
                        I.threadCount > 0
                          ? (0, l.jsx)(Y.Z, {
                              withGuildIcon: _,
                              channel: v,
                              sortedThreadIds: I.threadIds,
                              selectedChannel:
                                null != a &&
                                (a.id === I.id || a.parent_id === v.id)
                                  ? a
                                  : null,
                              selectedVoiceChannelId:
                                (null == o ? void 0 : o.parent_id) === v.id
                                  ? c
                                  : null,
                            })
                          : null,
                      ],
                    },
                    T,
                  );
                case ei.d4z.GUILD_STAGE_VOICE:
                  var Z, A;
                  return (0, l.jsx)(
                    K.Z,
                    {
                      channel: v,
                      guild: i,
                      position: I.position,
                      selected: s === I.id,
                      connected: c === I.id,
                      collapsed: I.isCollapsed || C.isCollapsed,
                      voiceStates:
                        null !== (Z = d[I.id]) && void 0 !== Z ? Z : [],
                      speakerVoiceStates:
                        null !== (A = p[I.id]) && void 0 !== A ? A : [],
                      disableManageChannels: h,
                      isFavoriteCategory: x,
                    },
                    T,
                  );
                case ei.d4z.GUILD_VOICE:
                  return (0, l.jsx)(
                    ee.Z,
                    {
                      channel: v,
                      guild: i,
                      position: I.position,
                      selected: s === I.id,
                      connected: c === I.id,
                      collapsed: I.isCollapsed || C.isCollapsed,
                      voiceStates: d[I.id],
                      subtitle: I.subtitle,
                      disableManageChannels: h,
                      showTutorial: I.isFirstVoiceChannel,
                      isFavoriteCategory: x,
                      withGuildIcon: _,
                    },
                    T,
                  );
                case ei.d4z.GUILD_STORE:
                  return (0, l.jsx)(
                    q.Z,
                    {
                      channel: v,
                      guild: i,
                      position: I.position,
                      selected: s === I.id,
                    },
                    T,
                  );
                case ei.d4z.GUILD_CATEGORY:
                  if (t !== u.voiceChannelsSectionNumber) return null;
                  return (0, l.jsx)(
                    w.kw,
                    { channel: v },
                    "readonly-".concat(v.id),
                  );
                case ei.d4z.PUBLIC_THREAD:
                case ei.d4z.PRIVATE_THREAD:
                  return (0, l.jsx)(
                    Q.Z,
                    {
                      channel: v,
                      guild: i,
                      position: I.position,
                      selected: s === I.id,
                      muted: I.isMuted,
                      subtitle: I.subtitle,
                      disableManageChannels: h,
                      canBeNewChannel: !1,
                      isFavoriteCategory: !1,
                      forceTopLevelThread: !0,
                    },
                    T,
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
                  selectedChannelId: a,
                  selectedVoiceChannelId: s,
                  optInEnabled: o,
                  guildId: c,
                } = this.props;
              return (0, l.jsx)(
                G.ZP,
                {
                  guildId: c,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  sectionIndex: t,
                  voiceStates: r,
                  selectedChannelId: a,
                  selectedVoiceChannelId: s,
                  optInEnabled: o,
                },
                (0, G.eo)(t, n, o),
              );
            }),
            es(this, "getAnchorId", (e, t) => {
              var n, i, l;
              let { guildChannels: r } = this.props;
              if (e !== O.wZ) {
                if (null == t)
                  return e === O.p2
                    ? "favorites-header"
                    : e === r.recentsSectionNumber
                      ? "recents-header"
                      : e === r.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === O.wd
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
              if (!A.Z.shouldShow("voice-conversations")) return;
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
      es(eo, "contextType", o.qB);
      let ec = (e) => {
        let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
          a = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
          { analyticsLocations: s } = (0, g.ZP)(m.Z.GUILD_CHANNEL_LIST),
          d = (0, u.e7)([R.Z], () => R.Z.getChannel(n)),
          h = (0, u.e7)([R.Z], () => R.Z.getChannel(i)),
          p = (0, u.e7)([P.Z], () => P.Z.getGuildId()),
          C = (0, v.DM)(t),
          I = r.useRef(null),
          E = r.useCallback((e, t) => {
            let n = I.current;
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
          N = r.useCallback(
            () =>
              new Promise((e) => {
                let t = I.current;
                if (null == t) return e();
                t.scrollTo(0, () => requestAnimationFrame(() => e()));
              }),
            [],
          ),
          S = r.useCallback(
            () =>
              new Promise((e) => {
                let t = I.current;
                if (null == t) return e();
                t.scrollTo(Number.MAX_SAFE_INTEGER, () =>
                  requestAnimationFrame(() => e()),
                );
              }),
            [],
          ),
          x = (0, c.ZP)({
            id: "channels",
            defaultFocused: null != n ? n : void 0,
            isEnabled: a,
            setFocus: E,
            scrollToStart: N,
            scrollToEnd: S,
          }),
          T = x.setFocus;
        r.useEffect(() => {
          null != n && T(n);
        }, [n, T]);
        let A = (0, Z.Z)(t);
        return (0, l.jsx)(g.Gt, {
          value: s,
          children: (0, l.jsx)(f.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(o.bG, {
              navigator: x,
              children: (0, l.jsx)(eo, {
                ...e,
                listNavigator: x,
                ref: I,
                selectedChannel: d,
                selectedVoiceChannel: h,
                stageChannelSpeakerVoiceStates: A,
                selectedGuildId: p,
                optInEnabled: C,
              }),
            }),
          }),
        });
      };
      function eu(e) {
        let t = (0, D.o)(),
          { isFavoritesPerk: n } = (0, I.z)("favorites-channel-list");
        return (0, l.jsx)(ec, {
          ...e,
          guildChannels: t,
          guildChannelsVersion: 0,
          withGuildIcon: n,
        });
      }
      function ed(e) {
        let t = (0, j.Z)(e.guild),
          n = (0, u.cj)([y.Z], () =>
            y.Z.getGuild(e.guildId, { guildActionRows: t }),
          );
        return (0, l.jsx)(ec, { ...e, ...n });
      }
    },
    327530: function (e, t, n) {
      n.d(t, {
        $k: function () {
          return s;
        },
        GQ: function () {
          return c;
        },
        Hb: function () {
          return d;
        },
        JD: function () {
          return _;
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
          return a;
        },
        VE: function () {
          return m;
        },
        Vf: function () {
          return o;
        },
        cx: function () {
          return h;
        },
        hl: function () {
          return f;
        },
        yE: function () {
          return i;
        },
      });
      let i = 8,
        l = 32,
        r = 40,
        a = 12,
        s = 12,
        o = 34,
        c = 41.5,
        u = 16,
        d = 32,
        h = 8,
        p = 84,
        f = 135,
        _ = 16,
        m = 5,
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
          return _;
        },
        WW: function () {
          return m;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(997638),
        a = n(362658),
        s = n(216306),
        o = n(155409),
        c = n(540126),
        u = n(301342),
        d = n(327530),
        h = n(981631),
        p = n(689938),
        f = n(774264);
      function _(e, t, n) {
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
      function m(e, t) {
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
            guildChannels: _,
            guildChannelsVersion: m,
            selectedChannelId: g,
            disableManageChannels: C,
          } = e,
          { isFavoritesPerk: I } = (0, a.z)("ChannelListSection"),
          E = l.useCallback(() => {
            let e = _.getCategoryFromSection(_.recentsSectionNumber);
            if (null == e) return;
            let t = null,
              i = e.getShownChannelAndThreadIds();
            null != g && i.includes(g) && (t = (0, s.KY)(_)),
              (0, s.Uo)(n.id, i, t);
          }, [n.id, g, _, m]);
        switch (t) {
          case c.wZ:
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.p2:
            return (0, i.jsx)(u.P, {
              name: I ? p.Z.Messages.PINNED_CHANNELS : p.Z.Messages.FAVORITES,
            });
          case _.recentsSectionNumber:
            return (0, i.jsx)(u.P, {
              name: p.Z.Messages.RECENTS_CATEGORY_HEADER,
              onDismiss: E,
            });
          case _.voiceChannelsSectionNumber: {
            var N;
            let e = _.getCategoryFromSection(_.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n =
              null === (N = _.getChannelFromSectionRow(t, 0)) || void 0 === N
                ? void 0
                : N.channel;
            return (0, i.jsxs)(l.Fragment, {
              children: [
                (0, i.jsx)("div", { className: f.sectionDivider }),
                (0, i.jsx)(u.rj, { category: e, channel: n }),
              ],
            });
          }
          case c.wF: {
            let e = _.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
              channel: e.record,
              position: e.position,
              disableManageChannels: C,
              children: (0, i.jsx)(o.Z, {
                inlineSpecs: d.MF,
                arrowAlignment: r.cy.TOP,
                tutorialId: "organize-by-topic",
                position: "right",
              }),
            });
          }
          default: {
            let e = _.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
              channel: e.record,
              position: e.position,
              disableManageChannels: C,
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
          return f;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(884338),
        a = n(934415),
        s = n(540126),
        o = n(700026),
        c = n(301342),
        u = n(327530),
        d = n(774264);
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
        let { hasDivider: c, canHaveVoiceSummary: d } = (0, o.ie)(n, a, t),
          h = c ? u.QP : 0;
        if (!d || t === s.wZ) return h;
        let p = n.getNamedCategoryFromSection(t);
        return null == p
          ? h
          : (0, o.V5)({
                category: p,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i,
              })
            ? u.Vf + h
            : h;
      }
      function f(e, t, n) {
        if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
        let { hasDivider: i, canHaveVoiceSummary: l } = (0, o.ie)(t, n, e);
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
            selectedChannelId: f,
            selectedVoiceChannelId: _,
            optInEnabled: m,
          } = e,
          { hasDivider: g, canHaveVoiceSummary: C } = l.useMemo(
            () => (0, o.ie)(n, m, t),
            [n, m, t, c],
          ),
          I = l.useMemo(
            () => (t === s.wZ ? null : n.getCategoryFromSection(t)),
            [n, t, c],
          ),
          E = l.useMemo(
            () =>
              null != I && I.isCollapsed
                ? (0, a.c4)({
                    channels: I.getChannelRecords(),
                    selectedChannelId: f,
                    selectedVoiceChannelId: _,
                    voiceStates: u,
                  })
                : [],
            [I, f, _, u],
          );
        if (t === n.voiceChannelsSectionNumber)
          return (0, i.jsx)(h, { guildChannels: n, guildChannelsVersion: c });
        let N = g ? (0, i.jsx)("div", { className: d.sectionDivider }) : null;
        return C && 0 !== E.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: d.voiceUserSummary,
                  children: (0, i.jsx)(r.Z, {
                    renderIcon: !0,
                    users: E,
                    max: 8,
                    showUserPopout: !0,
                    guildId: p,
                  }),
                }),
                N,
              ],
            })
          : N;
      });
    },
    561788: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(481060),
        a = n(471445),
        s = n(430824),
        o = n(645627);
      function c(e) {
        let { channel: t } = e,
          n = (0, l.e7)([s.Z], () => s.Z.getGuild(t.guild_id)),
          c = (0, a.KS)(t, n);
        return null == c
          ? null
          : (0, i.jsxs)("div", {
              className: o.popoutHeader,
              children: [
                (0, i.jsx)(c, { className: o.channelIcon }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/semibold",
                  color: "interactive-normal",
                  className: o.channelName,
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
      var i = n(735250);
      n(470079);
      var l = n(829750),
        r = n(280102);
      function a(e) {
        let { channel: t, video: n, userCount: a } = e,
          { limit: s } = (0, l.Z)(t),
          o = -1,
          c = !1;
        return (
          t.userLimit > 0 && (o = t.userLimit),
          n &&
            s > 0 &&
            ((c = o < 0 || s < o), (o = o > 0 ? Math.min(o, s) : s)),
          (0, i.jsx)(r.Z, { users: a, total: o, videoLimit: c })
        );
      }
    },
    285573: function (e, t, n) {
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(239091),
        c = n(146773),
        u = n(592125),
        d = n(984933),
        h = n(496675),
        p = n(98597),
        f = n(473403),
        _ = n(981631),
        m = n(490897),
        g = n(872356);
      let C = (0, c.B)(function (e) {
        let {
            guild: t,
            selectedChannelId: r,
            position: c,
            disableManageChannels: C,
            sorting: I,
            sortingType: E,
            sortingPosition: N,
            connectChannelDragSource: S,
            connectChannelDropTarget: x,
            tabIndex: v,
          } = e,
          T = (0, s.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
          }),
          Z = (0, s.e7)([u.Z], () =>
            u.Z.getChannel(null == T ? void 0 : T.parent_id),
          ),
          A = r === (null == T ? void 0 : T.id),
          b = (0, s.e7)([h.Z], () =>
            null != Z
              ? h.Z.can(_.Plq.MANAGE_CHANNELS, Z)
              : null != t && h.Z.can(_.Plq.MANAGE_CHANNELS, t),
          ),
          R = l.useCallback(
            (e) => {
              null != T &&
                (0, o.jW)(e, async () => {
                  let { default: e } = await n
                    .e("70623")
                    .then(n.bind(n, 99334));
                  return (t) => (0, i.jsx)(e, { ...t, channel: T });
                });
            },
            [T],
          );
        if (null == T) return null;
        let M = (0, p.jo)(c, N),
          L = (0, p.CN)(T, I, E),
          P = (0, i.jsx)("div", {
            className: a()(M, { [g.disabled]: L, [g.selected]: A }),
            "data-dnd-name": T.name,
            children: (0, i.jsxs)(f.Z, {
              className: g.iconVisibility,
              channel: T,
              guild: t,
              selected: A,
              onContextMenu: R,
              forceInteractable: !0,
              resolvedUnreadSetting: m.i.ONLY_MENTIONS,
              children: [
                (0, i.jsx)(p.eP, { channel: T, tabIndex: v }),
                (0, i.jsx)(p.hR, {
                  channel: T,
                  disableManageChannels: C,
                  tabIndex: v,
                }),
              ],
            }),
          });
        return b && (P = x(S(P))), P;
      });
      t.Z = C;
    },
    995993: function (e, t, n) {
      n.d(t, {
        m: function () {
          return v;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(399606),
        a = n(704215),
        s = n(692547),
        o = n(481060),
        c = n(239091),
        u = n(605236),
        d = n(45966),
        h = n(31445),
        p = n(22082),
        f = n(703656),
        _ = n(306680),
        m = n(709054),
        g = n(540126),
        C = n(434479),
        I = n(981631),
        E = n(176505),
        N = n(490897),
        S = n(689938),
        x = n(718317);
      function v(e) {
        let { guild: t, selected: v } = e,
          T = (0, h.Z)(t),
          Z = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
          A = (0, r.Wu)([p.Z], () =>
            Array.from(p.Z.getNewChannelIds(t.id)).filter((e) =>
              p.Z.shouldIndicateNewChannel(t.id, e),
            ),
          ),
          b = (0, r.e7)([_.ZP], () =>
            _.ZP.hasUnread(t.id, N.W.GUILD_ONBOARDING_QUESTION),
          ),
          R = A.length > g.Cb,
          M = (0, r.e7)([d.Z, _.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
              n = _.ZP.lastMessageId(t.id, N.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = m.default.extractTimestamp(n);
            return null != e && e > i;
          }),
          L = l.useCallback(() => {
            (0, f.uL)(
              I.Z5c.CHANNEL(
                t.id,
                T ? E.oC.CUSTOMIZE_COMMUNITY : E.oC.CHANNEL_BROWSER,
              ),
            );
          }, [t.id, T]),
          P = l.useCallback(
            (e) => {
              (0, c.jW)(e, async () => {
                let { default: e } = await n.e("8926").then(n.bind(n, 156673));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
              });
            },
            [t],
          ),
          O = null;
        return (
          (!Z || b || R) &&
            !v &&
            !M &&
            (O = (0, i.jsx)(o.TextBadge, {
              color: s.Z.colors.BADGE_BRAND_BG.css,
              text: S.Z.Messages.NEW,
              className: x.newChannel,
            })),
          (0, i.jsx)(C.m, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(o.ChannelListMagnifyingGlassIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: T
              ? S.Z.Messages.CHANNELS_AND_ROLES
              : S.Z.Messages.CHANNEL_BROWSER_TITLE,
            selected: v,
            onClick: L,
            onContextMenu: P,
            trailing: O,
          })
        );
      }
    },
    315174: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(212433),
        o = n(873546),
        c = n(481060),
        u = n(666188),
        d = n(695346),
        h = n(768581),
        p = n(358555),
        f = n(981631),
        _ = n(647086),
        m = n(689938),
        g = n(501223);
      function C(e) {
        var t;
        let { guild: n, controller: l, guildBanner: r, animate: c } = e,
          { value: u } = l.springs,
          p = d.QK.getSetting();
        return (0, i.jsx)(s.animated.div, {
          className: g.animatedContainer,
          style: {
            opacity: u,
            transform: u.to((e) => "translateY(-".concat((1 - e) * 90, "px)")),
          },
          children: (0, i.jsx)(s.animated.div, {
            className: a()(g.bannerImage, { [g.bannerImgFullWidth]: o.tq }),
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
              className: a()(g.bannerImg, { [g.bannerImgFullWidth]: o.tq }),
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
      function I(e) {
        let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
          { value: o } = n.springs,
          u = t.hasFeature(f.oNc.DISCOVERABLE),
          d = (0, i.jsx)("div", {
            className: g.communityInfo,
            children:
              u &&
              (0, i.jsx)(c.Tooltip, {
                text: m.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                position: "right",
                children: (e) =>
                  (0, i.jsxs)("div", {
                    className: g.communityInfoPill,
                    ...e,
                    children: [
                      (0, i.jsx)(c.GlobeEarthIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 12,
                        height: 12,
                        className: g.communityIcon,
                      }),
                      (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "none",
                        children: m.Z.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC,
                      }),
                    ],
                  }),
              }),
          });
        return r
          ? (0, i.jsx)("div", {
              className: a()(g.communityInfoContainer, g.hasSubheader),
              children: d,
            })
          : (0, i.jsx)(s.animated.div, {
              className: g.communityInfoContainer,
              style: l
                ? { opacity: o }
                : { height: o.to((e) => "".concat(20 * e, "px")) },
              children: d,
            });
      }
      function E() {
        return (0, i.jsx)(c.StarIcon, {
          size: "custom",
          color: "currentColor",
          className: g.favoritesIcon,
          height: 20,
          width: 20,
        });
      }
      t.ZP = l.memo(function (e) {
        let {
            bannerVisible: t,
            controller: n,
            className: r,
            onClick: s,
            onContextMenu: N,
            onMouseDown: S,
            disableBannerAnimation: x,
            "aria-expanded": v,
            "aria-controls": T,
            guild: Z,
            guildBanner: A,
            animationOverlayHeight: b,
            children: R,
            headerClassName: M,
            communityInfoVisible: L,
            hasSubheader: P,
          } = e,
          O = Z.hasFeature(f.oNc.ANIMATED_BANNER),
          y = (0, u.Z)(Z),
          D = !y && Z.hasCommunityInfoSubheader(),
          j = !y && L,
          w = (0, h.xR)(A) && O && !x,
          [U, G] = l.useState(!1),
          k = l.useRef(),
          B = l.useRef(null),
          V = l.useRef(),
          H = d.QK.getSetting();
        l.useEffect(() => {
          if (w && t && !k.current && H)
            return (
              G(!0),
              (V.current = setTimeout(() => {
                G(!1);
              }, 5e3)),
              () => {
                clearTimeout(V.current);
              }
            );
        }, [w, t, H]),
          l.useEffect(() => {
            k.current = t;
          }, [t]);
        let F = () => {
          let { renderBanner: t, guildBanner: n } = e;
          return null != n && !t;
        };
        return (0, i.jsx)(c.ThemeProvider, {
          theme: t ? f.BRd.DARK : void 0,
          children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  ref: B,
                  className: a()(r, {
                    [g.container]: !0,
                    [g.clickable]: null != s,
                    [g.selected]: null != s && v,
                    [g.hasBanner]: F(),
                    [g.bannerVisible]: t,
                    [e]: t,
                    [g.communityInfoVisible]: j || (P && D),
                  }),
                  onMouseDown: S,
                  onContextMenu: N,
                  onClick: s,
                  children: [
                    (0, i.jsxs)("header", {
                      className: a()(g.header, M, {
                        [g.themedHeaderMobile]: o.tq,
                      }),
                      children: [
                        (0, i.jsxs)("div", {
                          className: a()(g.headerContent, g.primaryInfo),
                          children: [
                            (0, i.jsx)(p.Z, { guild: Z, isBannerVisible: t }),
                            Z.id === _._ && (0, i.jsx)(E, {}),
                            (0, i.jsx)(c.Heading, {
                              variant: "text-md/semibold",
                              lineClamp: 1,
                              className: g.name,
                              children: Z.toString(),
                            }),
                            null != s &&
                              (0, i.jsx)(c.Clickable, {
                                className: g.headerButton,
                                "aria-controls": T,
                                "aria-expanded": v,
                                focusProps: { ringTarget: B, offset: 4 },
                                onClick: s,
                                onContextMenu: N,
                                "aria-label":
                                  m.Z.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format(
                                    {
                                      guildName:
                                        null !==
                                          (l =
                                            null == Z
                                              ? void 0
                                              : Z.toString()) && void 0 !== l
                                          ? l
                                          : "",
                                    },
                                  ),
                              }),
                            (0, i.jsx)("div", {
                              className: g.headerChildren,
                              children: R,
                            }),
                          ],
                        }),
                        D &&
                          (0, i.jsx)(I, {
                            guild: Z,
                            controller: n,
                            hasBanner: null != A,
                            hasSubheader: null != P && P,
                          }),
                      ],
                    }),
                    null != A
                      ? (0, i.jsx)(C, {
                          guild: Z,
                          controller: n,
                          guildBanner: A,
                          animate: U,
                        })
                      : null,
                  ],
                }),
                w && F()
                  ? (0, i.jsx)("div", {
                      className: g.animatedBannerHoverLayer,
                      onMouseEnter: () => {
                        G(!0), clearTimeout(V.current);
                      },
                      onMouseLeave: () => G(!1),
                      style: { height: b },
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
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(703656),
        a = n(434479),
        s = n(981631),
        o = n(176505),
        c = n(689938);
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
          text: c.Z.Messages.SERVER_GUIDE,
          selected: n,
          onClick: function () {
            (0, r.uL)(s.Z5c.CHANNEL(t.id, o.oC.GUILD_HOME));
          },
        });
      }
    },
    466935: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(970606),
        o = n(693546),
        c = n(826581),
        u = n(246364),
        d = n(98493),
        h = n(703656),
        p = n(496675),
        f = n(669405),
        _ = n(434479),
        m = n(981631),
        g = n(176505),
        C = n(689938);
      function I(e) {
        let { guild: t, selected: n } = e,
          I = (0, r.e7)([p.Z], () => p.Z.can(m.Plq.KICK_MEMBERS, t)),
          E = (0, r.e7)([c.Z], () =>
            c.Z.getSubmittedGuildJoinRequestTotal(t.id),
          ),
          N = I && null != E ? E : 0;
        return (
          l.useEffect(() => {
            I &&
              o.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: u.wB.SUBMITTED,
                limit: d.p,
              });
          }, [I, t.id]),
          (0, i.jsx)(_.m, {
            id: "application-review-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(f.Z, { className: e, width: 24, height: 24 }),
            text: C.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
            selected: n,
            onClick: () => {
              (0, s.Q2)({
                guildId: t.id,
                source: m.jXE.CHANNEL_LIST,
                tab: g.oC.MEMBER_APPLICATIONS,
              }),
                (0, h.uL)(m.Z5c.CHANNEL(t.id, g.oC.MEMBER_APPLICATIONS));
            },
            trailing: N > 0 ? (0, i.jsx)(a.NumberBadge, { count: N }) : null,
          })
        );
      }
    },
    120818: function (e, t, n) {
      n.d(t, {
        T: function () {
          return C;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(91192),
        a = n(442837),
        s = n(481060),
        o = n(44315),
        c = n(563534),
        u = n(846121),
        d = n(703656),
        h = n(259580),
        p = n(981631),
        f = n(176505),
        _ = n(689938),
        m = n(813397);
      function g(e, t) {
        return (0, i.jsx)(
          s.Text,
          { variant: "text-xs/bold", color: "text-normal", children: e },
          t,
        );
      }
      let C = l.memo(function (e) {
        let { guild: t } = e,
          n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
          C = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
          I = l.useMemo(() => {
            if (null == n || null == C) return 0;
            let e = 0;
            return (
              n.forEach((t) => {
                null != C[t.channelId] && e++;
              }),
              e
            );
          }, [C, n]),
          E = null == n ? 0 : n.length,
          N = (0, r.JA)("progress-bar-".concat(t.id));
        return (0, i.jsxs)("li", {
          children: [
            (0, i.jsxs)(s.Clickable, {
              ...N,
              role: "button",
              focusProps: { offset: { right: 4 } },
              className: m.progressBarContainer,
              onClick: function () {
                (0, d.uL)(p.Z5c.CHANNEL(t.id, f.oC.GUILD_HOME));
              },
              children: [
                (0, i.jsxs)("div", {
                  className: m.progressBarText,
                  children: [
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-sm/bold",
                      children:
                        _.Z.Messages
                          .GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED,
                    }),
                    (0, i.jsxs)("div", {
                      className: m.rightContainer,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          className: m.rightText,
                          children:
                            _.Z.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format(
                              {
                                numberHook: g,
                                total: E.toString(),
                                completed: I.toString(),
                              },
                            ),
                        }),
                        (0, i.jsx)(h.Z, {
                          className: m.arrow,
                          width: 16,
                          height: 16,
                          direction: h.Z.Directions.RIGHT,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(s.Progress, {
                  className: m.progressBar,
                  foregroundGradientColor: [
                    (0, o.Lq)(p.Ilk.GREEN_300),
                    (0, o.Lq)(p.Ilk.GREEN_230),
                  ],
                  percent: (I / E) * 100 + 3,
                  animate: !0,
                }),
              ],
            }),
            (0, i.jsx)("div", { role: "separator", className: m.divider }),
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
      var i = n(735250);
      n(470079);
      var l = n(239091),
        r = n(396828),
        a = n(703656),
        s = n(434479),
        o = n(981631),
        c = n(176505),
        u = n(689938);
      function d(e) {
        let { guild: t, selected: d } = e;
        return (0, i.jsx)(s.m, {
          id: "subscriptions-".concat(t.id),
          renderIcon: (e) => (0, i.jsx)(r.Z, { className: e }),
          text: u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          selected: d,
          onClick: () => {
            (0, a.uL)(o.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS));
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
          return R;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(399606),
        s = n(704215),
        o = n(433517),
        c = n(481060),
        u = n(239091),
        d = n(607070),
        h = n(367907),
        p = n(357352),
        f = n(652515),
        _ = n(550951),
        m = n(886176),
        g = n(605236),
        C = n(703656),
        I = n(984933),
        E = n(430824),
        N = n(626135),
        S = n(434479),
        x = n(981631),
        v = n(176505),
        T = n(629481),
        Z = n(689938),
        A = n(316512);
      function b(e) {
        let { guildId: t, selected: n, handleClick: l } = e,
          u = (0, f.RF)(t, "guild_shop_channel_row"),
          _ = (0, a.e7)([E.Z], () => E.Z.getGuild(t)),
          v =
            (null == _
              ? void 0
              : _.hasFeature(
                  x.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                )) === !0,
          b = "false" === o.K.get(T.tM, "false"),
          R = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)(S.m, {
          id: "shop-".concat(t),
          className: r()(A.previewChannelRow, {
            [A.selected]: n,
            [A.phantomPreview]: b,
          }),
          innerClassName: A.previewChannelRowContent,
          renderIcon: (e) =>
            (0, i.jsx)(m.Z, {
              width: 20,
              height: 20,
              className: r()([e, A.shopIcon]),
            }),
          text: Z.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
          selected: n,
          onClick: l,
          trailing: (0, i.jsxs)("div", {
            className: A.gifSection,
            children: [
              R
                ? (0, i.jsx)(c.TextBadge, {
                    color: c.tokens.unsafe_rawColors.BRAND_260.css,
                    text: Z.Z.Messages.NEW,
                    className: A.newBadge,
                  })
                : (0, i.jsx)("img", {
                    src: (0, p.b)("server_products/storefront/money.gif"),
                    className: A.money,
                    alt: "",
                  }),
              n &&
                (0, i.jsx)(c.Clickable, {
                  className: A.closeButton,
                  onClick: (e) => {
                    if (
                      (e.stopPropagation(),
                      (0, g.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW),
                      N.default.track(x.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                        ...(0, h.hH)(t),
                        action_taken: T.mz.DISMISS_CHANNEL_ROW,
                      }),
                      !u || !v)
                    ) {
                      var n;
                      (0, C.dL)(
                        x.Z5c.CHANNEL(
                          t,
                          null === (n = I.ZP.getDefaultChannel(t)) ||
                            void 0 === n
                            ? void 0
                            : n.id,
                        ),
                      );
                    }
                  },
                  "aria-label": Z.Z.Messages.CLOSE,
                  children: (0, i.jsx)(c.CircleXIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
            ],
          }),
        });
      }
      function R(e) {
        let { guild: t, selected: l } = e,
          r = (0, _.g)(t, "guild_shop_channel_row"),
          a = () => {
            o.K.set(T.tM, "true"),
              (0, C.uL)(x.Z5c.CHANNEL(t.id, v.oC.GUILD_SHOP));
          };
        return r
          ? (0, i.jsx)(b, { guildId: t.id, selected: l, handleClick: a })
          : (0, i.jsx)(S.m, {
              id: "shop-".concat(t.id),
              renderIcon: (e) =>
                (0, i.jsx)(m.Z, { width: 20, height: 20, className: e }),
              text: Z.Z.Messages.GUILD_SHOP_CHANNEL_LABEL,
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
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(592125),
        c = n(938475),
        u = n(823379),
        d = n(734190),
        h = n(689938),
        p = n(82915);
      t.Z = l.memo(function (e) {
        let {
            channel: t,
            selectedChannel: n,
            selectedVoiceChannelId: l,
            sortedThreadIds: r,
            withGuildIcon: f,
          } = e,
          _ = (0, s.Wu)(
            [o.Z],
            () => r.map((e) => o.Z.getChannel(e)).filter(u.lm),
            [r],
          ),
          m = (0, s.e7)([c.ZP], () => {
            let e = _[_.length - 1];
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
            "aria-label": h.Z.Messages.THREAD_GROUP_A11Y_LABEL.format({
              channelName: t.name,
            }),
            children: [
              (0, i.jsx)("div", {
                className: a()(p.spineBorder, {
                  [p.spineBorderWithGuildIcon]: f,
                }),
                style: { bottom: 24 + m },
              }),
              _.map((e, t) =>
                (0, i.jsx)(
                  d.Z,
                  {
                    thread: e,
                    isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                    isSelectedVoice: l === e.id,
                    isLast: t === _.length - 1,
                    withGuildIcon: f,
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
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(91192),
        o = n(442837),
        c = n(481060),
        u = n(493683),
        d = n(239091),
        h = n(111028),
        p = n(569471),
        f = n(488131),
        _ = n(592125),
        m = n(306680),
        g = n(979651),
        C = n(938475),
        I = n(714794),
        E = n(135724),
        N = n(25601),
        S = n(207055),
        x = n(981631),
        v = n(124368),
        T = n(689938),
        Z = n(872356),
        A = n(206197),
        b = n(82915);
      function R(e) {
        let { style: t, withGuildIcon: n } = e;
        return (0, i.jsx)("svg", {
          className: a()(b.spine, { [b.spineWithGuildIcon]: n }),
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
            isSelectedVoice: b,
            isLast: M,
            withGuildIcon: L,
          } = e,
          P = (0, o.e7)([C.ZP], () => C.ZP.getVoiceStatesForChannel(t), [t]),
          O = (0, o.e7)([g.Z], () => g.Z.hasVideo(t.id)),
          { unread: y, mentionCount: D } = (0, o.cj)([m.ZP], () => ({
            unread: m.ZP.hasUnread(t.id),
            mentionCount: m.ZP.getMentionCount(t.id),
          })),
          j = (0, o.e7)([p.Z], () => p.Z.isMuted(t.id)),
          w = l.useCallback(
            (e) => {
              (0, f.ok)(t, !e.shiftKey, v.on.CHANNEL_LIST);
            },
            [t],
          ),
          U = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
          }, [t.guild_id, t.id]),
          G = l.useCallback(
            (e) => {
              let l = _.Z.getChannel(t.id);
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
          k = null == P ? 0 : P.length,
          { role: B, ...V } = (0, s.JA)(t.id),
          H = l.useRef(null),
          F =
            D > 0
              ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format(
                  { channelName: t.name, mentionCount: D },
                )
              : y
                ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format(
                    { channelName: t.name },
                  )
                : T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
                    channelName: t.name,
                  });
        return (0, i.jsxs)("li", {
          role: B,
          className: a()(Z.containerDefault, { [Z.selected]: r }),
          children: [
            (0, i.jsx)(R, { withGuildIcon: L }),
            M
              ? null
              : (0, i.jsx)(R, {
                  withGuildIcon: L,
                  style: { transform: "rotateX(180deg) translateY(-9px)" },
                }),
            (0, i.jsx)(c.FocusRing, {
              focusTarget: H,
              ringTarget: H,
              offset: { top: 2, bottom: 2, right: 4 },
              children: (0, i.jsxs)("div", {
                className: a()(Z.iconVisibility, A.wrapper, A.typeThread, {
                  [A.modeSelected]: r,
                  [A.modeMuted]: !r && j,
                  [A.modeUnreadImportant]: !j && !r && y,
                  [A.withGuildIcon]: L,
                }),
                onMouseDown: U,
                onContextMenu: G,
                children: [
                  !y || j || r
                    ? null
                    : (0, i.jsx)("div", {
                        className: a()(A.unread, A.unreadImportant),
                      }),
                  (0, i.jsx)(c.Clickable, {
                    ...V,
                    innerRef: H,
                    className: A.link,
                    onClick: w,
                    "aria-label": F,
                    focusProps: { enabled: !1 },
                    children: (0, i.jsxs)("div", {
                      className: a()(A.linkTop, A.__invalid_threadMainContent),
                      children: [
                        (0, i.jsx)(h.Z, {
                          className: A.name,
                          "aria-hidden": !0,
                          children: t.name,
                        }),
                        (0, i.jsxs)("div", {
                          className: A.children,
                          children: [
                            k > 0 && t.userLimit > 0
                              ? (0, i.jsx)(E.Z, {
                                  userCount: k,
                                  video: O,
                                  channel: t,
                                })
                              : null,
                            (0, I.Z)(D)
                              ? (0, i.jsx)(N.Z, { mentionsCount: D })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(S.Z, {
              channel: t,
              collapsed: !b,
              collapsedMax: 6,
              voiceStates: P,
              location: x.Sbl.GUILD_CHANNEL_LIST,
            }),
          ],
        });
      });
    },
    25601: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(831209),
        r = n(481060),
        a = n(494075);
      function s(e) {
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
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        s = n(481060),
        o = n(475179),
        c = n(239091),
        u = n(146773),
        d = n(888651),
        h = n(201895),
        p = n(111028),
        f = n(305325),
        _ = n(281956),
        m = n(66999),
        g = n(506936),
        C = n(359110),
        I = n(922482),
        E = n(431328),
        N = n(501655),
        S = n(427679),
        x = n(71275),
        v = n(201469),
        T = n(680089),
        Z = n(592125),
        A = n(430824),
        b = n(607744),
        R = n(496675),
        M = n(306680),
        L = n(9156),
        P = n(979651),
        O = n(934415),
        y = n(98597),
        D = n(648501),
        j = n(473403),
        w = n(207055),
        U = n(981631),
        G = n(647086),
        k = n(689938),
        B = n(872356),
        V = n(411740);
      function H(e, t, n) {
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
      class F extends y.ZP {
        getVoiceStatesCount() {
          var e;
          let { voiceStates: t } = this.props;
          return null !== (e = null == t ? void 0 : t.length) && void 0 !== e
            ? e
            : 0;
        }
        isFull() {
          let { channel: e } = this.props;
          return (0, O.rY)(e, P.Z, A.Z);
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
          return (0, i.jsx)(w.Z, {
            channel: e,
            voiceStates: l,
            collapsed: t,
            tabIndex: n,
            location: U.Sbl.GUILD_CHANNEL_LIST,
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
              connectChannelDragSource: o,
              connectUserDropTarget: c,
              connectDragPreview: u,
              canReorderChannel: d,
              canMoveMembers: p,
              stageInstance: f,
              isSubscriptionGated: _,
              needSubscriptionToAccess: m,
              unread: g,
              resolvedUnreadSetting: C,
              mentionCount: I,
              isFavoriteSuggestion: E,
            } = this.props,
            { shouldShowGuildVerificationPopout: N } = this.state,
            S = this.getVoiceStatesCount(),
            x = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [B.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: this.renderPopout,
                  spacing: 0,
                  onRequestClose: this.closeGuildVerificationPopout,
                  shouldShow: N,
                  children: () =>
                    (0, i.jsx)(s.Tooltip, {
                      text: this.getTooltipText(),
                      children: (a) => {
                        let { onClick: s, onContextMenu: o, ...c } = a;
                        return (0, i.jsxs)(j.Z, {
                          className: B.iconVisibility,
                          iconClassName: r()({ [V.iconLive]: null != f }),
                          channel: e,
                          selected: !E && t,
                          connected: n,
                          unread: n ? g : void 0,
                          resolvedUnreadSetting: C,
                          mentionCount: I,
                          locked: l,
                          onClick: () => {
                            this.handleClick(), null == s || s();
                          },
                          onContextMenu: (e) => {
                            this.handleContextMenu(e), null == o || o();
                          },
                          connectDragPreview: u,
                          subtitle: this.renderSubtitle(),
                          isFavoriteSuggestion: E,
                          "aria-label": (0, h.ZP)({
                            channel: e,
                            unread: g,
                            mentionCount: I,
                            userCount: S,
                            isSubscriptionGated: _,
                            needSubscriptionToAccess: m,
                          }),
                          ...c,
                          children: [
                            E && this.renderAcceptSuggestionButton(),
                            E && this.renderRemoveSuggestionButton(),
                            !E && this.renderOpenChatButton(),
                            !E && this.renderInviteButton(),
                            !E && this.renderEditButton(),
                            !E && this.renderChannelInfo(),
                          ],
                        });
                      },
                    }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return p && (x = c(x)), d && (x = a(o(x))), x;
        }
        constructor(...e) {
          super(...e),
            H(this, "state", { shouldShowGuildVerificationPopout: !1 }),
            H(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            H(this, "handleClick", () => {
              let {
                  channel: e,
                  locked: t,
                  connected: n,
                  unverifiedAccount: i,
                } = this.props,
                l = e.getGuildId();
              null != l && (0, _.n)(l) && (0, f.hk)(l),
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                !t &&
                  !n &&
                  !e.isRoleSubscriptionTemplatePreviewChannel() &&
                  (0, I.Cq)(e),
                !__OVERLAY__ && (0, C.Kh)(e.id);
            }),
            H(this, "handleClickChat", () => {
              let { channel: e, locked: t } = this.props;
              !__OVERLAY__ && !t && (0, C.Kh)(e.id);
            }),
            H(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = A.Z.getGuild(t.getGuildId());
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
            H(this, "renderPopout", () => {
              let { channel: e } = this.props,
                { shouldShowGuildVerificationPopout: t } = this.state;
              if (t)
                return (0, i.jsx)(g.Z, {
                  type: g.R.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render",
              );
            }),
            H(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(s.Tooltip, {
                  text: k.Z.Messages.OPEN_CHAT,
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(s.Clickable, {
                      className: r()(B.iconItem, n ? B.alwaysShown : null),
                      onClick: () => {
                        o.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                      },
                      "aria-label": k.Z.Messages.OPEN_CHAT,
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                      children: (0, i.jsx)(s.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: B.actionIcon,
                      }),
                    });
                  },
                });
            }),
            H(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e
                ? k.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
                : null;
            }),
            H(this, "renderSubtitle", () => {
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
            collapsed: s,
            voiceStates: o,
          } = e,
          c = (0, a.cj)([M.ZP], () => ({
            unread: M.ZP.hasUnread(n.id),
            mentionCount: M.ZP.getMentionCount(n.id),
          })),
          u = (0, a.e7)([L.ZP], () => L.ZP.resolveUnreadSetting(n)),
          d = (0, a.cj)([Z.Z, b.Z, R.Z], () => {
            let e = Z.Z.getChannel(n.parent_id),
              i = b.Z.getCheck(n.guild_id);
            return {
              canManageChannel: null != t && R.Z.can(U.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === G._ ||
                  (null != e
                    ? R.Z.can(U.Plq.MANAGE_CHANNELS, e)
                    : R.Z.can(U.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: R.Z.can(U.Plq.MOVE_MEMBERS, n),
              locked: !R.Z.can(U.Plq.CONNECT, n),
              bypassLimit: R.Z.can(U.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          h = (0, a.e7)([T.Z], () => T.Z.isCollapsed(n.parent_id)),
          p = (0, v.ZP)(n.id),
          f = (0, a.e7)([S.Z], () => S.Z.getStageInstanceByChannel(n.id), [
            n.id,
          ]),
          _ = (0, E.Rk)(n.id, N.pV.AUDIENCE),
          { isSubscriptionGated: g, needSubscriptionToAccess: C } = (0, m.Z)(
            n.id,
          ),
          I = (0, a.e7)([L.ZP], () => L.ZP.isFavorite(t.id, n.id)),
          A = (0, x.xJ)(n.id),
          P = (0, D.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: s,
            voiceStates: o,
            isSubscriptionGated: g,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit:
              A || (n.userLimit > 0 && n.userLimit < U.xGv),
          }),
          O = e.connected && null == P;
        return (0, i.jsx)(W, {
          categoryCollapsed: h,
          connectAction: p,
          numAudience: _,
          stageInstance: f,
          isSubscriptionGated: g,
          needSubscriptionToAccess: C,
          ...c,
          ...d,
          ...e,
          isFavoriteSuggestion: r && !I,
          forceShowButtons: O,
          channelInfo: P,
          resolvedUnreadSetting: u,
        });
      }
    },
    770202: function (e, t, n) {
      n(411104), n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(493683),
        c = n(239091),
        u = n(146773),
        d = n(201895),
        h = n(703656),
        p = n(592125),
        f = n(430824),
        _ = n(496675),
        m = n(98597),
        g = n(473403),
        C = n(981631),
        I = n(490897),
        E = n(872356);
      function N(e, t, n) {
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
      function S(e, t) {
        let n = t.getGuildId();
        if (null == n)
          throw Error(
            "TextChannel, preloadChannel: Channel does not have a guildId",
          );
        o.Z.preload(n, t.id);
      }
      class x extends m.ZP {
        render() {
          let {
              channel: e,
              selected: t,
              connectChannelDropTarget: n,
              connectChannelDragSource: l,
              connectDragPreview: r,
              canReorderChannel: s,
            } = this.props,
            o = (0, i.jsx)("li", {
              className: a()(this.getClassName(), {
                [E.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: (0, i.jsxs)(g.Z, {
                className: E.iconVisibility,
                channel: e,
                selected: t,
                onClick: this.handleClick,
                onMouseDown: S,
                onContextMenu: this.handleContextMenu,
                connectDragPreview: s ? r : null,
                "aria-label": (0, d.ZP)({ channel: e }),
                resolvedUnreadSetting: I.i.ONLY_MENTIONS,
                children: [this.renderInviteButton(), this.renderEditButton()],
              }),
            });
          return s ? n(l(o)) : o;
        }
        constructor(...e) {
          super(...e),
            N(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = f.Z.getGuild(t.getGuildId());
              null != l &&
                (0, c.jW)(e, async () => {
                  let { default: e } = await n
                    .e("99905")
                    .then(n.bind(n, 649400));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            N(this, "handleClick", (e) => {
              !(function (e) {
                let t = e.getGuildId();
                if (null == t)
                  throw Error(
                    "TextChannel, transitionTo: Channel does not have a guildId",
                  );
                (0, h.uL)(C.Z5c.CHANNEL(t, e.id), {
                  state: {
                    analyticsSource: {
                      page: C.ZY5.GUILD_CHANNEL,
                      section: C.jXE.CHANNEL_LIST,
                      object: C.qAy.CHANNEL,
                    },
                  },
                });
              })(e);
            });
        }
      }
      let v = (0, u.B)(x);
      t.Z = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
          r = (0, s.cj)([p.Z, _.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
              canManageChannel: _.Z.can(C.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l && null != e
                  ? _.Z.can(C.Plq.MANAGE_CHANNELS, e)
                  : _.Z.can(C.Plq.MANAGE_CHANNELS, n),
            };
          });
        return (0, i.jsx)(v, { ...r, ...e });
      });
    },
    79556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        s = n(481060),
        o = n(493683),
        c = n(239091),
        u = n(146773),
        d = n(595519),
        h = n(619915),
        p = n(201895),
        f = n(873696),
        _ = n(66999),
        m = n(22082),
        g = n(665906),
        C = n(592125),
        I = n(430824),
        E = n(496675),
        N = n(306680),
        S = n(9156),
        x = n(594174),
        v = n(109446),
        T = n(98597),
        Z = n(648501),
        A = n(473403),
        b = n(304471),
        R = n(981631),
        M = n(647086),
        L = n(872356);
      function P(e, t, n) {
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
      class O extends T.ZP {
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
            : (0, i.jsx)("div", { className: L.channelInfo, children: e });
        }
        render() {
          let {
              channel: e,
              guild: t,
              selected: n,
              muted: l,
              unread: a,
              hasActiveThreads: o,
              hasMoreActiveThreads: c,
              mentionCount: u,
              connectChannelDropTarget: d,
              connectChannelDragSource: h,
              connectDragPreview: _,
              canReorderChannel: m,
              isSubscriptionGated: g,
              isFavoriteSuggestion: C,
              subtitle: I,
              forceTopLevelThread: E,
              embeddedApps: N,
              resolvedUnreadSetting: S,
              withGuildIcon: x,
              enableActivities: v,
            } = this.props,
            T = v && null != N && N.length > 0,
            Z = (0, f.D)(I),
            b = (0, i.jsx)("li", {
              className: r()(this.getClassName(), {
                [L.disabled]: this.isDisabled(),
                [L.selected]: n,
              }),
              "data-dnd-name": e.name,
              onMouseEnter: c || T ? this.handleMouseEnter : void 0,
              onMouseLeave: c || T ? this.handleMouseLeave : void 0,
              children: (0, i.jsx)(s.Popout, {
                position: "right",
                renderPopout: this.renderPopout,
                spacing: 0,
                onRequestClose: this.handleClosePopout,
                shouldShow:
                  (c && this.state.shouldShowThreadsPopout) ||
                  (T && this.state.shouldShowActivities),
                children: () =>
                  (0, i.jsxs)(A.Z, {
                    className: L.iconVisibility,
                    channel: e,
                    guild: t,
                    selected: !C && n,
                    muted: l,
                    unread: a,
                    mentionCount: u,
                    hasActiveThreads: o,
                    subtitle: null == Z ? void 0 : Z.subtitle,
                    subtitleColor: null == Z ? void 0 : Z.color,
                    onMouseDown: this.handleMouseDown,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: m ? _ : null,
                    isFavoriteSuggestion: C,
                    channelTypeOverride: E ? R.d4z.GUILD_TEXT : void 0,
                    resolvedUnreadSetting: S,
                    withGuildIcon: x,
                    "aria-label": (0, p.ZP)({
                      channel: e,
                      unread: a,
                      mentionCount: u,
                      isSubscriptionGated: g,
                    }),
                    children: [
                      C && this.renderAcceptSuggestionButton(),
                      C && this.renderRemoveSuggestionButton(),
                      !C && this.renderInviteButton(),
                      !C && this.renderEditButton(),
                      !C && this.renderChannelInfo(),
                    ],
                  }),
              }),
            });
          return m ? d(h(b)) : b;
        }
        constructor(...e) {
          super(...e),
            P(this, "state", {
              shouldShowThreadsPopout: !1,
              shouldShowActivities: !1,
            }),
            P(this, "enterTimer", 0),
            P(this, "exitTimer", 0),
            P(this, "handleMouseEnter", () => {
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
            P(this, "handleMouseLeave", () => {
              this.resetTextChannelPopoutTimers(),
                (this.exitTimer = setTimeout(() => {
                  this.state.shouldShowActivities &&
                    this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout &&
                      this.setState({ shouldShowThreadsPopout: !1 });
                }, 250));
            }),
            P(this, "handleThreadsPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowThreadsPopout: !1 });
            }),
            P(this, "handleActivitiesPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowActivities: !1 });
            }),
            P(this, "handleClosePopout", () => {
              this.state.shouldShowActivities &&
                this.handleActivitiesPopoutClose(),
                this.state.shouldShowThreadsPopout &&
                  this.handleThreadsPopoutClose();
            }),
            P(this, "handleMouseDown", () => {
              this.handleActivitiesPopoutClose(),
                this.handleThreadsPopoutClose();
              let { channel: e } = this.props,
                t = e.getGuildId();
              o.Z.preload(null != t ? t : R.ME, e.id);
            }),
            P(this, "renderPopout", (e) => {
              let { channel: t, sorting: n, embeddedApps: l } = this.props,
                { shouldShowActivities: r } = this.state;
              return null != l && l.length > 0 && r && !n
                ? (0, i.jsx)(b.Z, {
                    onAction: this.handleActivitiesPopoutClose,
                    channel: t,
                  })
                : (0, i.jsx)(v.Z, { ...e, channel: this.props.channel });
            }),
            P(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props;
              if (t.type === R.d4z.GROUP_DM) {
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
              if (t.type === R.d4z.DM) {
                let l = x.default.getUser(t.getRecipientId());
                null != l &&
                  (0, c.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("92453"),
                      n.e("56826"),
                      n.e("29212"),
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
              let l = I.Z.getGuild(t.getGuildId());
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
      let y = (0, u.B)(O);
      function D(e) {
        let {
            channel: t,
            guild: n,
            disableSorting: l,
            isFavoriteCategory: r,
            muted: s,
            selected: o,
          } = e,
          { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, g.JQ)(t),
          p = (0, a.cj)([N.ZP], () => ({
            unread: N.ZP.hasUnread(t.id),
            ackMessageId: N.ZP.ackMessageId(t.id),
            mentionCount: N.ZP.getMentionCount(t.id),
          })),
          f = (0, a.e7)([S.ZP], () => S.ZP.resolveUnreadSetting(t)),
          I = (0, a.cj)([C.Z, E.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return {
              canManageChannel: E.Z.can(R.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l &&
                (n.id === M._ ||
                  (null != e
                    ? E.Z.can(R.Plq.MANAGE_CHANNELS, e)
                    : E.Z.can(R.Plq.MANAGE_CHANNELS, n))),
            };
          }),
          v = (0, a.e7)([m.Z], () => m.Z.shouldIndicateNewChannel(n.id, t.id)),
          { needSubscriptionToAccess: T, isSubscriptionGated: A } = (0, _.Z)(
            t.id,
          ),
          b = (0, a.e7)([S.ZP], () => S.ZP.isFavorite(n.id, t.id)),
          L = (0, a.e7)(
            [x.default],
            () => {
              let e = x.default.getCurrentUser();
              return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t],
          ),
          P = (0, d.NX)(t.id),
          O = (0, Z.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: A,
            needSubscriptionToAccess: T,
            isNewChannel: v,
            muted: s,
            enableActivities: P,
            resolvedUnreadSetting: f,
          }),
          D = (0, h.ZP)(t);
        return (0, i.jsx)(y, {
          ...p,
          ...I,
          ...e,
          hasActiveThreads: c,
          hasMoreActiveThreads: u,
          isSubscriptionGated: A,
          needSubscriptionToAccess: T,
          isNewChannel: v && e.canBeNewChannel,
          isFavoriteSuggestion: r && !b,
          canShowThreadPreviewForUser: L,
          channelInfo: O,
          embeddedApps: D,
          resolvedUnreadSetting: f,
          hasChannelInfo: null != O,
          enableActivities: P,
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
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(619915),
        a = n(737592),
        s = n(561788),
        o = n(289223);
      function c(e) {
        let { channel: t, onAction: n } = e,
          c = (0, r.ZP)(t),
          u = Array.from((0, r.uF)(c).values());
        return 0 === u.length
          ? null
          : (0, i.jsxs)(l.Scroller, {
              className: o.container,
              children: [
                (0, i.jsx)("div", {
                  className: o.popoutHeaderContainer,
                  children: (0, i.jsx)(s.Z, { channel: t }),
                }),
                (0, i.jsx)("div", { className: o.headerDivider }),
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
          return E;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(212433),
        o = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(492162),
        h = n(237583),
        p = n(451478),
        f = n(934415),
        _ = n(968847),
        m = n(689938),
        g = n(624113);
      let C = { friction: 30, tension: 300 };
      function I(e) {
        var t;
        let { guildChannels: n, jumpToVoiceChannels: r } = e,
          s = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
          o = (0, d.Z)(n.id),
          p = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), r();
            },
            [r],
          ),
          _ =
            null !== (t = null == s ? void 0 : s.getChannelRecords()) &&
            void 0 !== t
              ? t
              : [],
          C = (0, f.c4)({
            channels: _,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: o,
          });
        return (0, i.jsxs)(u.Clickable, {
          className: a()(g.bar),
          onClick: p,
          children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
              size: "custom",
              className: g.voiceChannelsIcon,
              width: 14,
              height: 14,
              color: c.Z.unsafe_rawColors.GREEN_330.css,
            }),
            (0, i.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-positive",
              className: g.barText,
              children: m.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
                count: C.length,
              }),
            }),
            (0, i.jsx)(h.Z, {
              guildId: n.id,
              className: g.voiceChannelsUsers,
              users: C.slice(0, 4),
              renderMoreUsers: () => null,
              max: 4,
              size: u.AvatarSizes.SIZE_16,
            }),
          ],
        });
      }
      function E(e) {
        let {
            position: t,
            guildChannels: n,
            guildChannelsVersion: r,
            jumpToVoiceChannels: c,
            jumpToChannel: d,
          } = e,
          { bottomBar: h, topBar: f } = (0, o.cj)([_.Z], () =>
            _.Z.getUnreadStateForGuildId(n.id),
          ),
          E = (0, o.e7)([p.Z], () => p.Z.isFocused()),
          {
            mode: N,
            mentionCount: S,
            targetChannelId: x,
          } = "bottom" === t ? h : f,
          v = N === _.x.HIDDEN,
          T = (0, u.useSpring)(
            {
              to: {
                transform: v
                  ? "bottom" === t
                    ? "translateY(180%)"
                    : "translateY(-180%)"
                  : "translateY(0%)",
              },
              config: C,
            },
            E ? "respect-motion-settings" : "animate-never",
          ),
          Z = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null != x && d(x);
            },
            [d, x],
          );
        return (0, i.jsx)("div", {
          className: a()(g.container, {
            [g.top]: "top" === t,
            [g.bottom]: "bottom" === t,
          }),
          children: (0, i.jsx)(s.animated.div, {
            className: g.containerPadding,
            style: T,
            "aria-hidden": v,
            children:
              N === _.x.HIDDEN
                ? (0, i.jsx)("div", { className: a()(g.bar, g.emptyBar) })
                : N === _.x.UNREAD
                  ? (0, i.jsxs)(u.Clickable, {
                      className: g.bar,
                      onClick: Z,
                      children: [
                        "bottom" === t
                          ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                              size: "custom",
                              color: "currentColor",
                              className: g.unreadIcon,
                              height: 14,
                              width: 14,
                            })
                          : (0, i.jsx)(u.ChevronSmallUpIcon, {
                              size: "custom",
                              color: "currentColor",
                              className: g.unreadIcon,
                              height: 14,
                              width: 14,
                            }),
                        (0, i.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          color: "interactive-normal",
                          className: g.barText,
                          children: m.Z.Messages.NEW_UNREADS,
                        }),
                      ],
                    })
                  : N === _.x.MENTIONS
                    ? (0, i.jsx)(u.Clickable, {
                        className: a()(g.bar, g.mentionsBar),
                        onClick: Z,
                        children: (0, i.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          color: "status-danger-text",
                          className: g.barText,
                          children: m.Z.Messages.NEW_MENTIONS_COUNT.format({
                            count: S,
                          }),
                        }),
                      })
                    : N === _.x.VOICE_CHANNELS
                      ? (0, i.jsx)(I, {
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
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(718528),
        s = n(256916),
        o = n(220444),
        c = n(569471),
        u = n(592125),
        d = n(306680),
        h = n(9156),
        p = n(451478);
      function f(e) {
        let t = u.Z.getChannel(e);
        return (
          null != t &&
          null != t.getGuildId() &&
          !(t.isThread()
            ? c.Z.isMuted(t.id)
            : h.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
          (0, o.d)(t)
        );
      }
      function _(e) {
        let t = u.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = h.ZP.isGuildCollapsed(n),
          l = h.ZP.isChannelMuted(n, t.id);
        return (!i || !l) && d.ZP.getMentionCount(e) > 0;
      }
      t.Z = l.forwardRef(function (e, t) {
        let { guildId: n, guildChannels: l, guildChannelsVersion: o, ...c } = e,
          u = (0, a.T)(
            n,
            l,
            o,
            { withVoiceChannels: !1 },
            { ignoreRecents: !0 },
          ),
          d = (0, r.e7)([p.Z], () => p.Z.isFocused());
        return (0, i.jsx)(s.Z, {
          ref: t,
          ...c,
          isUnread: f,
          isMentioned: _,
          items: u,
          animate: d,
        });
      });
    },
    233657: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(704215),
        a = n(481060),
        s = n(239091),
        o = n(605236),
        c = n(554747),
        u = n(306680),
        d = n(9156),
        h = n(434479),
        p = n(490897),
        f = n(689938),
        _ = n(206197);
      function m(e) {
        let { guild: t, selected: m } = e,
          { hasUnread: g, mentionCount: C } = (0, l.cj)(
            [u.ZP],
            () => ({
              hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
              mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT),
            }),
            [t.id],
          ),
          I = (0, l.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
        async function E() {
          await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("22347"),
              n.e("56236"),
              n.e("7029"),
            ]).then(n.bind(n, 17671));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
          }),
            (0, o.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
        }
        let N = (0, c.ZP)(t.id),
          S =
            N.length > 0
              ? f.Z.Messages.GUILD_EVENTS_PLURAL.format({ number: N.length })
              : f.Z.Messages.GUILD_EVENTS;
        return (0, i.jsx)(h.m, {
          id: "upcoming-events-".concat(t.id),
          renderIcon: (e) =>
            (0, i.jsx)(a.CalendarIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          text: S,
          selected: m,
          onClick: E,
          onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
              let { default: e } = await n.e("95307").then(n.bind(n, 867757));
              return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
          },
          showUnread: g && !I,
          trailing:
            !I && C > 0
              ? (0, i.jsx)(a.NumberBadge, {
                  className: _.numberBadge,
                  disableColor: !0,
                  count: C,
                })
              : null,
        });
      }
    },
    831700: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return X;
        },
      }),
        n(47120),
        n(411104);
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        s = n(846519),
        o = n(481060),
        c = n(475179),
        u = n(239091),
        d = n(146773),
        h = n(888651),
        p = n(619915),
        f = n(339340),
        _ = n(201895),
        m = n(718589),
        g = n(933557),
        C = n(557135),
        I = n(873696),
        E = n(446226),
        N = n(305325),
        S = n(281956),
        x = n(66999),
        v = n(554747),
        T = n(506936),
        Z = n(574176),
        A = n(359110),
        b = n(155409),
        R = n(695346),
        M = n(592125),
        L = n(430824),
        P = n(607744),
        O = n(496675),
        y = n(306680),
        D = n(9156),
        j = n(979651),
        w = n(934415),
        U = n(98597),
        G = n(648501),
        k = n(473403),
        B = n(830993),
        V = n(653577),
        H = n(207055),
        F = n(981631),
        W = n(647086),
        z = n(689938),
        Y = n(872356);
      function K(e, t, n) {
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
      class q extends U.ZP {
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
          return (0, w.rY)(e, j.Z, L.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return Y.containerUserOver;
          if (null != t)
            return e > t ? Y.containerDragAfter : Y.containerDragBefore;
          return Y.containerDefault;
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
              null === (e = (0, I.D)(this.props.subtitle)) || void 0 === e
                ? void 0
                : e.subtitle,
            { hovered: s } = this.state;
          return (0, i.jsx)(V.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: a,
            hovered: s,
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
          return (0, i.jsx)(H.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: F.Sbl.GUILD_CHANNEL_LIST,
          });
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, i.jsx)("div", { className: Y.channelInfo, children: e });
        }
        render() {
          let {
              channel: e,
              selected: t,
              connected: n,
              unread: l,
              resolvedUnreadSetting: a,
              mentionCount: s,
              locked: c,
              sorting: u,
              isUserOver: d,
              connectChannelDropTarget: h,
              connectChannelDragSource: p,
              connectUserDropTarget: f,
              connectDragPreview: g,
              canReorderChannel: C,
              canMoveMembers: I,
              showTutorial: E,
              hasActiveEvent: N,
              embeddedApps: S,
              isSubscriptionGated: x,
              isFavoriteSuggestion: v,
              withGuildIcon: T,
            } = this.props,
            { shouldShowActivities: Z, shouldShowGuildVerificationPopout: A } =
              this.state,
            R = this.getVoiceStatesCount(),
            M = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [Y.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)("div", {
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                  children: (0, i.jsx)(o.Popout, {
                    position: "right",
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.closeGuildVerificationPopout,
                    shouldShow: (Z && !u && !d && !A) || A,
                    children: () =>
                      (0, i.jsx)(o.Tooltip, {
                        text: this.getTooltipText(),
                        children: (o) => {
                          let { onClick: u, onContextMenu: d, ...h } = o;
                          return (0, i.jsxs)(k.Z, {
                            className: Y.iconVisibility,
                            iconClassName: r()({ [Y.iconLive]: N }),
                            channel: e,
                            selected: !v && t,
                            connected: n,
                            unread: n ? l : void 0,
                            resolvedUnreadSetting: a,
                            mentionCount: s,
                            locked: c,
                            subtitle: this.renderSubtitle(),
                            onClick: () => {
                              this.handleClick(), null == u || u();
                            },
                            onContextMenu: (e) => {
                              this.handleContextMenu(e), null == d || d();
                            },
                            connectDragPreview: g,
                            isFavoriteSuggestion: v,
                            "aria-label": (0, _.ZP)({
                              channel: e,
                              unread: l,
                              mentionCount: s,
                              userCount: R,
                              embeddedActivitiesCount: S.length,
                              isSubscriptionGated: x,
                            }),
                            "aria-describedby": (0, m.Z)({
                              channel: e,
                              embeddedApps: S,
                            }),
                            withGuildIcon: T,
                            ...h,
                            children: [
                              v && this.renderAcceptSuggestionButton(),
                              v && this.renderRemoveSuggestionButton(),
                              !v && this.renderOpenChatButton(),
                              !v && this.renderInviteButton(),
                              !v && this.renderEditButton(),
                              !v && this.renderChannelInfo(),
                            ],
                          });
                        },
                      }),
                  }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return (
            I && (M = f(M)),
            C && (M = h(p(M))),
            E &&
              (M = (0, i.jsx)(b.Z, {
                tutorialId: "voice-conversations",
                position: "right",
                offsetX: -20,
                children: M,
              })),
            M
          );
        }
        constructor(...e) {
          super(...e),
            K(this, "state", {
              shouldShowActivities: !1,
              shouldShowGuildVerificationPopout: !1,
              hovered: !1,
            }),
            K(this, "activitiesHideTimeout", new s.V7()),
            K(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            K(this, "handleVoiceConnect", () => {
              let {
                locked: e,
                connected: t,
                channel: n,
                unverifiedAccount: i,
                needSubscriptionToAccess: l,
              } = this.props;
              i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                C.Z.handleVoiceConnect({
                  channel: n,
                  connected: t,
                  needSubscriptionToAccess: l,
                  locked: e,
                });
            }),
            K(this, "handleContextMenu", (e) => {
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
            K(this, "handleMouseEnter", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !0, hovered: !0 });
            }),
            K(this, "handleMouseLeave", () => {
              this.activitiesHideTimeout.start(100, () =>
                this.setState({ shouldShowActivities: !1, hovered: !1 }),
              );
            }),
            K(this, "closePopout", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !1 });
            }),
            K(this, "handleClick", () => {
              let { channel: e } = this.props,
                t = e.getGuildId();
              null != t && (0, S.n)(t) && (0, N.hk)(t),
                this.handleVoiceConnect();
            }),
            K(this, "handleVoiceStatusClick", (e) => {
              let { connected: t, channel: l } = this.props;
              t &&
                (e.stopPropagation(),
                (0, o.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.resolve().then(
                      n.bind(n, 339340),
                    );
                    return (t) => (0, i.jsx)(e, { channel: l, ...t });
                  },
                  { modalKey: f.VOICE_CHANNEL_STATUS_MODAL_KEY },
                ));
            }),
            K(this, "renderPopout", () => {
              let {
                  channel: e,
                  voiceStates: t,
                  sorting: n,
                  isUserOver: l,
                  selected: r,
                  guild: a,
                } = this.props,
                {
                  shouldShowActivities: s,
                  shouldShowGuildVerificationPopout: o,
                } = this.state;
              if (s && !n && !l && !o) {
                let n = R.SE.getSetting().includes(a.id);
                return (0, i.jsx)(B.Z, {
                  onAction: this.closePopout,
                  guild: a,
                  channel: e,
                  voiceStates: t,
                  isChannelSelected: r,
                  shouldShowSettingNudge: n,
                });
              }
              if (o)
                return (0, i.jsx)(T.Z, {
                  type: T.R.VOICE,
                  guildId: e.guild_id,
                  closePopout: this.closeGuildVerificationPopout,
                });
              throw Error(
                "VoiceChannel.renderPopout: There must always be something to render",
              );
            }),
            K(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(o.Tooltip, {
                  text: z.Z.Messages.OPEN_CHAT,
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: s,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(o.Clickable, {
                      className: r()(Y.iconItem, n ? Y.alwaysShown : null),
                      onClick: () => {
                        c.Z.updateChatOpen(e.id, !0), (0, A.Kh)(e.id);
                      },
                      "aria-label": z.Z.Messages.OPEN_CHAT,
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: s,
                      onBlur: u,
                      children: (0, i.jsx)(o.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: Y.actionIcon,
                      }),
                    });
                  },
                });
            }),
            K(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e
                ? z.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL
                : null;
            });
        }
      }
      let Q = (0, d.B)((0, h.Q)(q));
      function X(e) {
        let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: r,
            selected: s,
            collapsed: o,
            voiceStates: c,
          } = e,
          u = (0, a.cj)([y.ZP], () => ({
            unread: y.ZP.hasUnread(n.id),
            mentionCount: y.ZP.getMentionCount(n.id),
          })),
          d = (0, a.e7)([D.ZP], () => D.ZP.resolveUnreadSetting(n)),
          h = (0, a.cj)([M.Z, P.Z, O.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
              i = P.Z.getCheck(n.guild_id);
            return {
              canManageChannel: O.Z.can(F.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === W._ ||
                  (null != e
                    ? O.Z.can(F.Plq.MANAGE_CHANNELS, e)
                    : O.Z.can(F.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: O.Z.can(F.Plq.MOVE_MEMBERS, n),
              locked: !O.Z.can(F.Plq.CONNECT, n),
              bypassLimit: O.Z.can(F.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          f = (0, a.e7)([j.Z], () => j.Z.hasVideo(n.id)),
          _ = (0, p.ZP)(n),
          m = (0, g.ZP)(n),
          C = (0, v.qY)(n.id),
          { isSubscriptionGated: I, needSubscriptionToAccess: N } = (0, x.Z)(
            n.id,
          ),
          S = (0, E.Z)(),
          T = (0, a.e7)([D.ZP], () => D.ZP.isFavorite(t.id, n.id)),
          A = e.connected || (null == S ? void 0 : S.channelId) === n.id,
          { enableHangStatus: b, allowChannelTopic: R } = Z.n.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
          ),
          L = (0, G.Z)({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: o,
            voiceStates: c,
            isSubscriptionGated: I,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
          }),
          w = A && null == L;
        return (0, i.jsx)(Q, {
          channelName: m,
          embeddedApps: _,
          embeddedActivityType: F.IIU.PLAYING,
          video: f,
          hasActiveEvent: null != C,
          isSubscriptionGated: I,
          needSubscriptionToAccess: N,
          ...u,
          ...h,
          ...e,
          connected: A,
          isFavoriteSuggestion: r && !T,
          forceShowButtons: w,
          channelInfo: L,
          enableHangStatus: b,
          allowChannelTopic: R,
          resolvedUnreadSetting: d,
        });
      }
    },
    830993: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120),
        n(653041);
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(58540),
        o = n(619915),
        c = n(620662),
        u = n(841784),
        d = n(471445),
        h = n(430824),
        p = n(496675),
        f = n(158776),
        _ = n(979651),
        m = n(823379),
        g = n(355363),
        C = n(737592),
        I = n(561788),
        E = n(135724),
        N = n(543432),
        S = n(981631),
        x = n(689938),
        v = n(289223);
      function T(e) {
        var t, d;
        let {
          channel: h,
          guild: p,
          onAction: _,
          voiceStates: g,
          isChannelSelected: I,
          shouldShowSettingNudge: E,
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
          (0, s.$)(n);
        })(h, g);
        let N = (0, o.ZP)(h),
          T = Array.from((0, o.uF)(N).values()),
          A =
            null !== (t = null == g ? void 0 : g.filter(m.lm)) && void 0 !== t
              ? t
              : [],
          b = (e) => (t) =>
            ([S.IIU.PLAYING, S.IIU.WATCHING].includes(t.type) &&
              (null != t.assets ||
                null != t.state ||
                null != t.details ||
                null != t.party) &&
              (null == t.session_id ||
                t.session_id === e.voiceState.sessionId)) ||
            t.type === S.IIU.LISTENING,
          R = (0, r.e7)(
            [f.Z],
            () => {
              let e = {};
              return (
                A.forEach((t) => {
                  let n = f.Z.findActivity(t.user.id, b(t));
                  if (null != n && !(0, u.Z)(n)) {
                    var i, l, r, a;
                    let s = ""
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
                      o =
                        null !== (a = e[s]) && void 0 !== a
                          ? a
                          : { members: [], activity: n };
                    o.members.push(t),
                      !(0, c.Z)(o.activity, S.xjy.JOIN) && (o.activity = n),
                      (e[s] = o);
                  }
                }),
                Object.values(e)
              );
            },
            [A],
            r.pF,
          );
        return R.length + T.length === 0
          ? null
          : (0, i.jsxs)(a.Scroller, {
              className: v.container,
              children: [
                (0, i.jsx)(Z, {
                  channel: h,
                  isChannelSelected: I,
                  voiceStatesCount:
                    null !== (d = null == g ? void 0 : g.length) && void 0 !== d
                      ? d
                      : 0,
                }),
                (0, i.jsx)("div", { className: v.headerDivider }),
                T.map((e, t) => {
                  var n;
                  return (0, i.jsx)(
                    C.Z,
                    {
                      embeddedApp: e,
                      presenceActivity:
                        null !== (n = e.presenceActivity) && void 0 !== n
                          ? n
                          : void 0,
                      channel: h,
                      onAction: _,
                    },
                    t,
                  );
                }),
                R.map((e, t) => {
                  let { members: n, activity: l } = e;
                  return (0, i.jsx)(
                    C.Z,
                    {
                      presenceActivity: l,
                      channel: h,
                      members: n,
                      onAction: _,
                    },
                    t,
                  );
                }),
                E &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", { className: v.headerDivider }),
                      (0, i.jsx)("div", {
                        className: v.settingNudgeText,
                        children: (0, i.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          tag: "span",
                          children:
                            x.Z.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format(
                              {
                                onClick: () => {
                                  (0, a.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                      n.e("96427"),
                                      n.e("81039"),
                                      n.e("52249"),
                                      n.e("54803"),
                                      n.e("15685"),
                                      n.e("72652"),
                                      n.e("32776"),
                                      n.e("79915"),
                                      n.e("33053"),
                                      n.e("8016"),
                                      n.e("37581"),
                                      n.e("76540"),
                                      n.e("68136"),
                                      n.e("87624"),
                                      n.e("22646"),
                                      n.e("25183"),
                                      n.e("57674"),
                                      n.e("30419"),
                                      n.e("48923"),
                                      n.e("18824"),
                                      n.e("52619"),
                                      n.e("8821"),
                                      n.e("18815"),
                                      n.e("18146"),
                                      n.e("37229"),
                                      n.e("28044"),
                                      n.e("35539"),
                                      n.e("6294"),
                                    ]).then(n.bind(n, 241420));
                                    return (t) =>
                                      (0, i.jsx)(e, { ...t, guild: p });
                                  });
                                },
                              },
                            ),
                        }),
                      }),
                    ],
                  }),
              ],
            });
      }
      function Z(e) {
        let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
          a = (0, r.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, t)),
          s = (0, r.e7)([_.Z], () => _.Z.hasVideo(t.id)),
          o = (0, g.ZP)({ channel: t, locked: a, video: s, selected: n }),
          c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
        return null == (0, d.KS)(t, c)
          ? null
          : (0, i.jsxs)("div", {
              className: v.popoutHeaderContainer,
              children: [
                (0, i.jsx)(I.Z, { channel: t }),
                o
                  ? (0, i.jsx)(E.Z, { userCount: l, video: s, channel: t })
                  : (0, i.jsx)(N.Z, { userCount: l }),
              ],
            });
      }
    },
    653577: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(362721),
        u = n(12498),
        d = n(111028),
        h = n(454585),
        p = n(626135),
        f = n(981631),
        _ = n(689938),
        m = n(447871),
        g = n(554034);
      function C(e) {
        let {
            channel: t,
            connected: n,
            hovered: r,
            subtitle: C,
            onClick: I,
            enableHangStatus: E,
            allowChannelTopic: N,
          } = e,
          S = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
          x = null != S && S.length > 0,
          v = (0, c.Z)(t, !0),
          T = (!E || !!N) && v,
          Z = null != C && C.length > 0;
        l.useEffect(() => {
          x &&
            p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
              guild_id: t.guild_id,
              channel_id: t.id,
            });
        }, [t.id, x, t.guild_id]);
        let A = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
        if (null == t.guild_id) return null;
        let b = a()(m.statusDiv, n && T ? m.hoverable : null);
        if (x)
          return (0, i.jsx)(o.Clickable, {
            className: b,
            onClick: T ? I : void 0,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: a()(m.statusText, g.markup),
              children: (0, i.jsx)(d.Z, {
                children: h.Z.parseVoiceChannelStatus(S, !0, {
                  channelId: t.id,
                }),
              }),
            }),
          });
        if (n && T && (!Z || r))
          return (0, i.jsxs)(o.Clickable, {
            className: b,
            onClick: I,
            children: [
              (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                className: m.statusText,
                children: _.Z.Messages.VOICE_CHANNEL_SET_STATUS,
              }),
              (0, i.jsx)(o.PencilIcon, {
                size: "custom",
                color: "currentColor",
                className: m.pencilIcon,
                width: A,
                height: A,
              }),
            ],
          });
        if (Z) return (0, i.jsx)(d.Z, { children: C });
        return null;
      }
    },
    280102: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(929324);
      function o(e) {
        let { total: t, users: n, videoLimit: l } = e;
        return (0, i.jsxs)("div", {
          className: s.wrapper,
          children: [
            (0, i.jsxs)("span", {
              className: r()(s.users, {
                [s.video]: l,
                [s.extraLong]: n >= 100,
              }),
              children: [
                l
                  ? (0, i.jsx)(a.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s.videoIcon,
                    })
                  : null,
                n.toString().padStart(2, "0"),
              ],
            }),
            (0, i.jsx)("span", {
              className: r()(s.total, { [s.extraLong]: t >= 100 }),
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
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(649576);
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
    506936: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
      });
      var i,
        l,
        r = n(735250);
      n(470079);
      var a = n(442837),
        s = n(481060),
        o = n(893776),
        c = n(391650),
        u = n(313201),
        d = n(144114),
        h = n(607744),
        p = n(594174),
        f = n(981631),
        _ = n(815660),
        m = n(689938),
        g = n(816614);
      (i = l || (l = {}))[(i.VOICE = 0)] = "VOICE";
      t.Z = (e) => {
        let { type: t, guildId: i, closePopout: l } = e,
          C = (0, u.Dt)(),
          {
            notClaimed: I,
            notEmailVerified: E,
            notPhoneVerified: N,
            newAccount: S,
            newMember: x,
          } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
          v = 0 === t ? m.Z.Messages.GUILD_VERIFICATION_VOICE_HEADER : null,
          T = null,
          Z = null;
        return (0 === t &&
          (I
            ? ((T = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED),
              (Z = m.Z.Messages.CLAIM_ACCOUNT))
            : N
              ? ((T = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED),
                (Z = m.Z.Messages.VERIFY_PHONE))
              : E
                ? ((T = m.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED),
                  (Z = m.Z.Messages.RESEND_VERIFICATION_EMAIL))
                : x
                  ? ((T =
                      m.Z.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
                        min: f.YeM.MEMBER_AGE,
                      })),
                    (Z = m.Z.Messages.OKAY))
                  : S &&
                    ((T =
                      m.Z.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
                        min: f.YeM.ACCOUNT_AGE,
                      })),
                    (Z = m.Z.Messages.OKAY))),
        null == v || null == T)
          ? null
          : (0, r.jsxs)(s.Dialog, {
              className: g.container,
              "aria-labelledby": C,
              children: [
                (0, r.jsx)("img", {
                  alt: "",
                  className: g.image,
                  src: n(64395),
                }),
                (0, r.jsxs)("div", {
                  className: g.content,
                  children: [
                    (0, r.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      id: C,
                      children: v,
                    }),
                    (0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: T,
                    }),
                    (0, r.jsxs)("div", {
                      className: g.buttonContainer,
                      children: [
                        null != Z
                          ? (0, r.jsx)(s.Button, {
                              onClick: () => {
                                I
                                  ? c.j()
                                  : N
                                    ? (0, s.openModalLazy)(
                                        async () => {
                                          let { default: e } =
                                            await Promise.all([
                                              n.e("76540"),
                                              n.e("63461"),
                                            ]).then(n.bind(n, 607018));
                                          return (t) =>
                                            (0, r.jsx)(e, {
                                              reason: d.L.GUILD_PHONE_REQUIRED,
                                              ...t,
                                            });
                                        },
                                        { modalKey: _.M },
                                      )
                                    : E &&
                                      (o.Z.verifyResend(),
                                      (0, s.openModal)((e) => {
                                        var t;
                                        return (0, r.jsx)(s.ConfirmModal, {
                                          header:
                                            m.Z.Messages
                                              .VERIFICATION_EMAIL_TITLE,
                                          confirmText: m.Z.Messages.OKAY,
                                          confirmButtonColor:
                                            s.Button.Colors.BRAND,
                                          ...e,
                                          children: (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children:
                                              m.Z.Messages.VERIFICATION_EMAIL_BODY.format(
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
                              className: g.primaryButton,
                              children: Z,
                            })
                          : null,
                        I || N || E
                          ? (0, r.jsx)(s.Button, {
                              onClick: l,
                              look: s.Button.Looks.BLANK,
                              className: g.cancel,
                              children: m.Z.Messages.NEVERMIND,
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
        s = n(430824),
        o = n(496675),
        c = n(158776),
        u = n(979651),
        d = n(823379),
        h = n(981631);
      function p(e) {
        let t = (0, l.e7)([s.Z], () => s.Z.getGuild(e)),
          n = null == t ? void 0 : t.afkChannelId,
          p = (0, l.Wu)(
            [u.Z, c.Z, a.Z, o.Z],
            () => {
              let t = new Set(),
                l = u.Z.getVoiceStates(e);
              for (let r in l) {
                let s = a.Z.getBasicChannel(l[r].channelId);
                if (
                  null != s &&
                  s.type !== i.d.GUILD_STAGE_VOICE &&
                  n !== s.id &&
                  !!o.Z.canBasicChannel(h.S7T.VIEW_CHANNEL, s)
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
      var i = n(470079),
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
      var i = n(266067),
        l = n(905423),
        r = n(981631);
      function a() {
        let e = (0, l.Z)((e) => e.guildId),
          { pathname: t } = (0, i.TH)(),
          n =
            t.startsWith(r.Z5c.GUILD_DISCOVERY) ||
            t.startsWith(r.Z5c.GLOBAL_DISCOVERY),
          a = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION("")),
          s = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        return null == e && !(n || a || s);
      }
    },
    61634: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      }),
        n(47120);
      var i = n(470079),
        l = n(392711),
        r = n.n(l),
        a = n(106351),
        s = n(442837),
        o = n(846519),
        c = n(941028),
        u = n(595519),
        d = n(317381),
        h = n(470883),
        p = n(750881),
        f = n(554747),
        _ = n(146085),
        m = n(427679),
        g = n(131704),
        C = n(199902),
        I = n(314897),
        E = n(592125),
        N = n(650774),
        S = n(430824),
        x = n(496675),
        v = n(699516),
        T = n(944486),
        Z = n(9156),
        A = n(979651),
        b = n(709054),
        R = n(510601),
        M = n(901621),
        L = n(981631);
      let P = [];
      function O(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x.Z;
        return (
          null != e &&
          e.type !== a.d.GUILD_STAGE_VOICE &&
          t !== e.id &&
          n.canBasicChannel(L.S7T.VIEW_CHANNEL, e)
        );
      }
      function y(e) {
        var t;
        let n = (0, s.e7)([Z.ZP], () => Z.ZP.isMuted(e)),
          l = (0, f.k5)(e);
        !(function (e, t) {
          let n = i.useRef(new Set()),
            l = i.useRef(new o.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = R.ZP.useExperiment(
              { location: "useGuildMediaState" },
              { autoTrackExposure: !1 },
            ),
            u = (0, s.e7)([N.Z], () => {
              let t = N.Z.getMemberCount(e);
              return null == t || t > 1e3;
            }),
            d = (0, s.cj)(
              [A.Z],
              () => {
                if (!a || t || u) return P;
                let n = Object.keys(A.Z.getVoiceStates(e));
                return 0 === n.length ? P : n.slice(0, 50);
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
        let a = (0, M.Z)(e),
          L = (0, p.aK)("use-guild-media-state"),
          y = (0, s.Wu)([d.ZP, v.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return L
              ? t.filter((e) => !(0, h.Wu)([...e.userIds], v.Z.getBlockedIDs()))
              : t;
          }),
          D = (0, u.NX)(
            null === (t = y[0]) || void 0 === t ? void 0 : t.channelId,
          ),
          {
            guildHasVoice: j,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: U,
          } = (0, s.cj)(
            [T.Z, A.Z, S.Z, x.Z, E.Z],
            () => {
              var t;
              let i = T.Z.getVoiceChannelId(),
                l =
                  null === (t = S.Z.getGuild(e)) || void 0 === t
                    ? void 0
                    : t.afkChannelId,
                r = A.Z.getUsersWithVideo(e),
                a = L
                  ? (0, h.DX)(A.Z.getVoiceStates(e))
                  : A.Z.getVoiceStates(e),
                s = (() => {
                  if (n) return !1;
                  for (let e in a)
                    if (
                      O(
                        E.Z.getBasicChannel(a[e].channelId),
                        null != l ? l : void 0,
                        x.Z,
                      )
                    )
                      return !0;
                  return !1;
                })();
              return {
                guildHasVoice: s,
                guildHasVideo: (() => {
                  if (n) return !1;
                  for (let e of r)
                    if (
                      O(
                        E.Z.getBasicChannel(a[e].channelId),
                        null != l ? l : void 0,
                        x.Z,
                      )
                    )
                      return !0;
                  return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && A.Z.hasVideo(i),
              };
            },
            [L, e, n],
          ),
          G = I.default.getId();
        return (0, s.cj)(
          [T.Z, E.Z, d.ZP, m.Z, C.Z, x.Z],
          () => {
            var t, i, r;
            let s = T.Z.getVoiceChannelId(),
              o =
                (null === (t = E.Z.getChannel(s)) || void 0 === t
                  ? void 0
                  : t.guild_id) === e,
              c = !1,
              u = !1,
              p = !1,
              f = !1,
              I = !1,
              N = !1;
            if (!o && n)
              return {
                audio: c,
                video: f,
                screenshare: I,
                liveStage: p,
                activeEvent: u,
                activity: N,
                gaming: a,
                isCurrentUserConnected: !1,
              };
            let S = b.default
                .keys(m.Z.getStageInstancesByGuild(e))
                .some((e) => {
                  let t = E.Z.getChannel(e);
                  return null != t && x.Z.can(_.gl, t);
                }),
              v =
                o &&
                null !==
                  (r =
                    null === (i = E.Z.getChannel(s)) || void 0 === i
                      ? void 0
                      : i.isGuildStageVoice()) &&
                void 0 !== r &&
                r,
              Z = !!o && null != C.Z.getActiveStreamForUser(G, e),
              A = (
                L
                  ? (0, h.aK)(C.Z.getAllApplicationStreams())
                  : C.Z.getAllApplicationStreams()
              ).some((t) => t.guildId === e),
              R = o && U,
              M = (() => {
                if (D) return y.length > 0;
                for (let e of y) {
                  let t = E.Z.getChannel(e.channelId);
                  if (null != t && (0, g.vd)(t.type)) return !0;
                }
                return !1;
              })(),
              P = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
              o
                ? ((c = !0),
                  (u = (null == l ? void 0 : l.channel_id) === s),
                  (p = v),
                  (f = R),
                  (I = Z),
                  (N = P))
                : ((c = j),
                  (u = null != l),
                  (p = S),
                  (f = w),
                  (I = A),
                  (N = M)),
              {
                audio: c,
                video: f,
                screenshare: I,
                liveStage: p,
                activeEvent: u,
                activity: N,
                gaming: a,
                isCurrentUserConnected: o || v,
              }
            );
          },
          [e, n, L, U, a, G, D, y, l, j, w],
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
        l = n(735250),
        r = n(470079),
        a = n(212433),
        s = n(91192),
        o = n(442837),
        c = n(481060),
        u = n(239091),
        d = n(358221),
        h = n(43267),
        p = n(933557),
        f = n(93687),
        _ = n(266076),
        m = n(199902),
        g = n(19780),
        C = n(306680),
        I = n(944486),
        E = n(594174),
        N = n(451478),
        S = n(276952),
        x = n(682662),
        v = n(662146),
        T = n(674552),
        Z = n(981631),
        A = n(673193);
      function b(e, t, n) {
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
      let R = { friction: 28, tension: 600 };
      function M(e) {
        switch (e) {
          case "height":
          case "opacity":
            return { duration: 150, ...R };
          case "scale":
            return { ...R };
          default:
            throw Error(
              "DirectMessage: getSpringConfigs() - Invalid spring ".concat(
                String(e),
              ),
            );
        }
      }
      class L extends (i = r.PureComponent) {
        componentWillEnter(e) {
          let { controller: t } = this.state;
          e(),
            t
              .update({
                immediate: !N.Z.isFocused(),
                height: 1,
                opacity: 1,
                scale: 1,
                config: M,
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
            config: M,
          })
            .start()
            .then(e);
        }
        componentWillLeave(e) {
          let { controller: t } = this.state;
          this.setState({ animating: !0 }, () =>
            t
              .update({
                immediate: !N.Z.isFocused(),
                height: 0,
                opacity: 0,
                scale: 0,
                config: M,
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
              e.type === Z.d4z.DM
                ? E.default.getUser(e.getRecipientId())
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
              video: o,
              stream: u,
              isCurrentUserInThisDMCall: d,
              unread: h,
              isGDMFacepileEnabled: p,
            } = this.props,
            { hovered: f, animating: m } = this.state,
            g = e.isMultiUserDM() && null == e.icon && p;
          return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(x.H, {
              children: [
                (0, l.jsx)(S.Z, {
                  hovered: !m && f,
                  selected: !m && n,
                  unread: !m && h,
                  className: A.pill,
                }),
                (0, l.jsx)(v.Z, {
                  text: null != t ? t : "",
                  selected: n,
                  children: (0, l.jsx)(c.BlobMask, {
                    selected: n || f,
                    lowerBadge: i > 0 ? (0, T.Ne)(i) : null,
                    upperBadge: (0, T.Or)({
                      audio: r,
                      video: o,
                      screenshare: u,
                      isCurrentUserConnected: d,
                    }),
                    lowerBadgeSize: { width: (0, c.getBadgeWidthForValue)(i) },
                    children: (0, l.jsx)(s.mh, {
                      id: e.id,
                      children: (i) =>
                        (0, l.jsx)(c.NavItem, {
                          to: Z.Z5c.CHANNEL(Z.ME, e.id),
                          onMouseEnter: () => this.setState({ hovered: !0 }),
                          onMouseLeave: () => this.setState({ hovered: !1 }),
                          selected: n || f,
                          ariaLabel: null != t ? t : "",
                          onContextMenu: this.handleContextMenu,
                          icon: g ? void 0 : this.getChannelIcon(),
                          backgroundStyle: g ? "on-hover" : "always",
                          children: g
                            ? (0, l.jsx)(_.Z, {
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
            b(this, "state", {
              hovered: !1,
              animating: !0,
              controller: new a.Controller({
                scale: 0,
                height: 0,
                opacity: 0,
                config: M,
              }),
            }),
            b(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                i =
                  t.type === Z.d4z.DM
                    ? E.default.getUser(t.getRecipientId())
                    : null;
              null != i
                ? (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("92453"),
                      n.e("56826"),
                      n.e("29212"),
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
      b(L, "defaultProps", {
        badge: 0,
        audio: !1,
        video: !1,
        isCurrentUserInThisDMCall: !1,
      }),
        (t.Z = r.forwardRef(function (e, t) {
          let n = e.channel.id,
            i = (0, p.ZP)(e.channel),
            r = (0, o.e7)([g.Z], () => g.Z.getChannelId(), []),
            a = (0, o.e7)(
              [d.Z],
              () => (null != r ? d.Z.getMode(r) : Z.WtW.VOICE),
              [r],
            ),
            s = (0, o.e7)(
              [m.Z],
              () => m.Z.getAllApplicationStreamsForChannel(n).length > 0,
            ),
            c = (0, o.e7)([I.Z], () => I.Z.getChannelId(), []),
            u = (0, o.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
            { isFacepileEnabled: h } = f.Z.useExperiment(
              { location: "unread_direct_message" },
              { autoTrackExposure: !1 },
            ),
            _ = r === n,
            E = !1,
            N = !1;
          return (
            _ && ((E = a === Z.WtW.VOICE), (N = a === Z.WtW.VIDEO)),
            (0, l.jsx)(L, {
              ...e,
              ref: t,
              channelName: i,
              unread: u > 0,
              selected: c === n,
              badge: u,
              audio: E,
              video: N,
              stream: s,
              isCurrentUserInThisDMCall: _,
              isGDMFacepileEnabled: h,
            })
          );
        }));
    },
    199540: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(212433),
        o = n(866442),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(565138),
        p = n(430824),
        f = n(624138),
        _ = n(674552),
        m = n(981631),
        g = n(689938),
        C = n(115376);
      let I = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        E = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE);
      function N(e) {
        let { guildId: t, animate: n } = e,
          l = (0, c.e7)([p.Z], () => p.Z.getGuild(t), [t]);
        return null == l
          ? (0, i.jsx)("div", {
              className: C.guildIconUnavailable,
              children: "!",
            })
          : (0, i.jsx)(h.Z, {
              guild: l,
              animate: n,
              size: h.Z.Sizes.SMOL,
              className: C.guildIcon,
              tabIndex: -1,
            });
      }
      function S(e) {
        let t,
          n,
          { folderNode: r, hovered: a, expanded: c } = e,
          { color: u, children: h } = r,
          p = null != u ? u : m.Wyy,
          f = h.map((e) => e.id),
          [_, g] = l.useState(!1),
          [S, x] = l.useState(c),
          v = c ? 0 : -E,
          T = (0, d.useSpring)(
            {
              transform: "translate3d(0, ".concat(v, "px, 0)"),
              config: { duration: I },
              onStart() {
                g(!0), x(c);
              },
              onRest() {
                g(!1), x(c);
              },
            },
            "animate-always",
          ),
          Z = _ ? T : void 0;
        return (
          (_ || S) &&
            (t = (0, i.jsx)(s.animated.div, {
              style: Z,
              className: C.expandedFolderIconWrapper,
              children: (0, i.jsx)(d.FolderIcon, {
                size: "md",
                color: "currentColor",
                style: { color: (0, o.Rf)(p) },
              }),
            })),
          (_ || !S) &&
            (n = (0, i.jsx)(s.animated.div, {
              style: Z,
              className: C.closedFolderIconWrapper,
              children: f
                .slice(0, 4)
                .map((e) => (0, i.jsx)(N, { guildId: e, animate: a }, e)),
            })),
          (0, i.jsxs)("div", {
            "aria-hidden": !0,
            style: c ? void 0 : { backgroundColor: (0, o.br)(p, 0.4) },
            className: C.folderIconWrapper,
            children: [t, n],
          })
        );
      }
      function x(e) {
        let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: s,
            mediaState: o,
            mentionCount: c = 0,
            tooltipName: u,
            folderGroupId: h,
            folderIconContent: p,
            onClick: f,
            onContextMenu: m,
            onHoverChange: I,
            onKeyDown: E,
            treeItemProps: { onFocus: N, ...x },
          } = e,
          [v, T] = l.useState(!1),
          Z = l.useCallback(() => {
            s || T(!0), null == I || I(!0);
          }, [s, I]),
          A = l.useCallback(() => {
            s || T(!1), null == I || I(!1);
          }, [s, I]),
          b = r || null == o ? null : (0, _.Or)(o),
          R = !r && c > 0 ? (0, _.Ne)(c) : null;
        return (0, i.jsx)(d.BlobMask, {
          selected: !n,
          upperBadge: b,
          lowerBadge: R,
          lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
          children: (0, i.jsx)(d.Clickable, {
            className: a()(C.folder, { [C.hover]: v }),
            onClick: f,
            onContextMenu: m,
            onMouseEnter: Z,
            onMouseLeave: A,
            onKeyDown: E,
            onFocus: N,
            "aria-label": g.Z.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
              folderName: u,
              mentions: c,
            }),
            "aria-expanded": r,
            "aria-owns": h,
            focusProps: { enabled: !1 },
            ...x,
            role: "treeitem",
            children:
              null != p
                ? (0, i.jsx)("div", {
                    className: C.expandedFolderIconWrapper,
                    children: p,
                  })
                : (0, i.jsx)(S, { folderNode: t, hovered: v, expanded: r }),
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
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(212433),
        s = n(692547),
        o = n(481060),
        c = n(565138),
        u = n(252686),
        d = n(115376);
      function h(e) {
        let {
            guild: t,
            show: n,
            active: l,
            onAnimationStart: h,
            onAnimationRest: p,
          } = e,
          f = {},
          _ = {};
        (f.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
          (_.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
        let m = (0, o.useToken)(s.Z.unsafe_rawColors.BRAND_500).hex(),
          g = (0, o.useToken)(s.Z.unsafe_rawColors.PRIMARY_630).hex();
        l &&
          null == t.icon &&
          ((f.backgroundColor = m), (_.backgroundColor = g));
        let C = (0, o.useTransition)(n, {
          from: f,
          enter: _,
          leave: f,
          config: { duration: 100 },
          onStart: h,
          onRest: p,
        });
        return (0, i.jsx)(i.Fragment, {
          children: C(
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
          return S;
        },
        Zu: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(290843),
        u = n(749210),
        d = n(626135),
        h = n(727258),
        p = n(662146),
        f = n(981631),
        _ = n(689938),
        m = n(577837);
      function g(e) {
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
      function C(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return (
          o()(
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
                d.default.track(f.rMx.GUILD_FOLDER_CREATED),
                u.Z.moveById(l, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
          }
        );
      }
      function I(e) {
        let { name: t, targetNode: n, combine: r, below: s } = e,
          o = l.useMemo(() => C([h.eD.GUILD, h.eD.FOLDER], n, s, r), [n, s, r]),
          [{ canDrop: u, isOver: d }, p] = (0, c.L)(o),
          f = g([
            [u, m.autoPointerEvents],
            [d, m.dragOver],
          ]);
        return (0, i.jsx)("div", {
          ref: (e) => {
            (f.current = e), p(e);
          },
          "data-dnd-name": _.Z.Messages.DND_DROP_ABOVE.format({ itemName: t }),
          className: a()(m.target),
        });
      }
      function E(e) {
        let { name: t, targetNode: n, onDragOverChanged: r } = e,
          [{ canDrop: s, isOver: o }, u] = (0, c.L)(() =>
            C([h.eD.GUILD], n, !0, !0),
          );
        l.useEffect(() => {
          null == r || r(o);
        }, [r, o]);
        let d = g([
          [s, m.autoPointerEvents],
          [o, m.dragOver],
        ]);
        return (0, i.jsx)(p.Z, {
          text: t,
          shouldShow: o,
          forceOpen: o,
          disableWrapper: !0,
          tooltipClass: m.centerTargetTooltip,
          children: (0, i.jsx)("div", {
            ref: (e) => {
              (d.current = e), u(e);
            },
            "data-dnd-name": _.Z.Messages.DND_DROP_COMBINE.format({
              itemName: t,
            }),
            className: a()(m.centerTarget, {}),
          }),
        });
      }
      function N(e) {
        let { name: t, targetNode: n } = e,
          [{ canDrop: l, isOver: r }, s] = (0, c.L)(() =>
            C([h.eD.GUILD], n, !0, !0),
          ),
          o = g([[r, m.wrapperOver]]),
          u = g([
            [r, m.dragOver],
            [l, m.autoPointerEvents],
          ]);
        return (0, i.jsx)("div", {
          ref: o,
          className: a()(m.folderEndWrapper),
          "aria-hidden": !0,
          children: (0, i.jsx)("div", {
            className: m.folderTarget,
            children: (0, i.jsx)("div", {
              ref: (e) => {
                (u.current = e), s(e);
              },
              "aria-label": "At end of ".concat(t),
              className: a()(m.target),
            }),
          }),
        });
      }
      function S(e) {
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
          s = !l && null == n.parentId;
        return (0, i.jsxs)("div", {
          className: m.wrapper,
          "aria-hidden": !0,
          children: [
            (0, i.jsx)(I, { name: t, targetNode: n, below: r }),
            s
              ? (0, i.jsx)(E, { name: t, targetNode: n, onDragOverChanged: a })
              : null,
          ],
        });
      });
    },
    416568: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(392711),
        o = n.n(s),
        c = n(266067),
        u = n(91192),
        d = n(374470),
        h = n(442837),
        p = n(902704),
        f = n(846519),
        _ = n(481060),
        m = n(925549),
        g = n(209613),
        C = n(100527),
        I = n(906732),
        E = n(358221),
        N = n(963202),
        S = n(353093),
        x = n(706590),
        v = n(940777),
        T = n(41776),
        Z = n(905423),
        A = n(802718),
        b = n(796974),
        R = n(271383),
        M = n(430824),
        L = n(771845),
        P = n(358085),
        O = n(709054),
        y = n(727258),
        D = n(605951),
        j = n(474109),
        w = n(741616),
        U = n(187835),
        G = n(118122),
        k = n(193154),
        B = n(602147),
        V = n(773182),
        H = n(222059),
        F = n(751277),
        W = n(65721),
        z = n(843343),
        Y = n(654142),
        K = n(695301),
        q = n(836697),
        Q = n(921230),
        X = n(981631),
        J = n(689938),
        $ = n(355161);
      function ee(e, t, n) {
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
      let et = 56,
        en = (0, P.isWindows)() ? 4 : (0, P.isMac)() ? 0 : 12,
        ei = et - 16,
        el = en + 10;
      class er {
        setGuildsTree(e) {
          this.guildsTree = e;
        }
        constructor(e, t, n, i) {
          ee(this, "guildsTree", void 0),
            ee(this, "setScrolling", void 0),
            ee(this, "onScroll", void 0),
            ee(this, "onScrollStateChanged", void 0),
            ee(this, "scrollerRef", void 0),
            ee(this, "guildDiscoveryRef", void 0),
            ee(this, "nodeRefs", void 0),
            ee(this, "timeout", void 0),
            ee(this, "isScrolling", void 0),
            ee(this, "isNearBottom", void 0),
            ee(this, "scrollToGuild", void 0),
            ee(this, "handleJumpToGuild", void 0),
            ee(this, "scrollTo", void 0),
            ee(this, "isItemVisible", void 0),
            ee(this, "handleScroll", void 0),
            ee(this, "_handleScrollDebounced", void 0),
            ee(this, "_handleScrollThrottled", void 0),
            ee(this, "setNodeRef", void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.onScrollStateChanged = i),
            (this.scrollerRef = l.createRef()),
            (this.guildDiscoveryRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new f.V7()),
            (this.isScrolling = !1),
            (this.isNearBottom = !1),
            (this.scrollToGuild = (e, t) => {
              let n = this.scrollerRef.current;
              if (
                null == n ||
                (null == e &&
                  window.location.pathname.startsWith(X.Z5c.GUILD_DISCOVERY)) ||
                e === X.x8Z.SERVER_DISCOVERY_BADGE ||
                e === X.x8Z.E3_SERVER_DISCOVERY_BADGE
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
              let r = et * l + el;
              !t && (r += ei);
              let a = i.getScrollerState();
              return (
                (!t && !!(r >= a.scrollTop)) ||
                (!!t && !!(r + et <= a.scrollTop + a.offsetHeight)) ||
                !1
              );
            }),
            (this.handleScroll = () => {
              !this.isScrolling && this.setScrolling(!0),
                this.timeout.start(200, () => this.setScrolling(!1)),
                this._handleScrollDebounced(),
                this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = o().debounce(() => {
              let e = this.scrollerRef.current;
              if (null == e) return;
              let { scrollTop: t } = e.getScrollerState();
              m.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = o().throttle(() => {
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
      function ea(e) {
        let {
            disableAppDownload: t = P.isPlatformEmbedded,
            isOverlay: n = !1,
            className: r,
            themeOverride: s,
          } = e,
          [o] = (0, h.Wu)([L.ZP], () => {
            let e = L.ZP.getGuildsTree();
            return [e, e.version];
          }),
          d = (0, h.e7)([T.Z], () => T.Z.lurkingGuildIds()),
          p = l.useMemo(() => (n ? [] : d), [d, n]),
          m = (0, h.Wu)([M.Z, R.ZP], () =>
            O.default
              .keys(M.Z.getGuilds())
              .filter((e) => R.ZP.isCurrentUserGuest(e)),
          ),
          g = p.concat(m),
          ee = (0, h.e7)([E.Z], () => E.Z.isFullscreenInContext()),
          et = (0, h.e7)([M.Z], () => M.Z.getGeoRestrictedGuilds()),
          [en, ei] = l.useState(!1),
          el = l.useCallback(() => ei(!0), []),
          ea = l.useCallback(() => ei(!1), []),
          es = l.useRef(!1),
          [eo] = l.useState(() => new f.V7()),
          ec = l.useRef(null),
          eu = l.useRef(null),
          [ed, eh] = l.useState(!1),
          { clanDiscoveryEnabled: ep } = (0, N.nk)("guilds_bar"),
          { guilds: ef } = (0, N.C3)({
            location: "guilds_bar",
            includeConverted: !0,
          }),
          e_ =
            l.useMemo(() => ef.filter((e) => !(0, S.EJ)(e)), [ef]).length > 0,
          em = l.useMemo(() => (e_ ? V.OO : ep ? V.KF : void 0), [ep, e_]),
          { ref: eg, ...eC } = (0, u.OP)(),
          eI = (0, _.useFocusJumpSection)(),
          [eE, eN] = l.useState(!1),
          eS = l.useMemo(
            () =>
              new er(
                o,
                eN,
                () => {
                  var e, t;
                  null === (e = ec.current) ||
                    void 0 === e ||
                    e.calculateState(),
                    null === (t = eu.current) ||
                      void 0 === t ||
                      t.calculateState();
                },
                (e) => {
                  let { isNearBottom: t } = e;
                  eh(t);
                },
              ),
            [o],
          ),
          { analyticsLocations: ex } = (0, I.ZP)(C.Z.GUILDS_LIST),
          { pathname: ev } = (0, c.TH)(),
          eT =
            ev.startsWith(X.Z5c.GUILD_DISCOVERY) ||
            ev.startsWith(X.Z5c.GLOBAL_DISCOVERY),
          eZ = ev.startsWith(X.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        l.useLayoutEffect(() => {
          if (!es.current) {
            if (0 !== o.size) {
              if (eT) eS.scrollToGuild(null, !1);
              else {
                let { scrollTop: e } = b.Z.getGuildListDimensions();
                eS.scrollTo({ to: e, animate: !1 });
              }
              return (es.current = !0), () => eo.stop();
            }
          }
        }, []),
          l.useEffect(() => {
            if ((eS.setGuildsTree(o), es.current || 0 === o.size)) return;
            let e = Z.Z.getState().guildId;
            eS.scrollToGuild(e, !1);
            let t = null;
            return Z.Z.subscribe((e) => {
              let { guildId: n } = e;
              n !== t && ((t = n), eS.scrollToGuild(t, !1));
            });
          }, [o, eS]);
        let eA = l.useCallback(() => {
          eS.scrollTo({ to: 0, animate: !1 });
        }, [eS]);
        function eb(e) {
          switch (e.type) {
            case y.eD.FOLDER:
              return (0, i.jsx)(
                Y.Z,
                {
                  folderNode: e,
                  setNodeRef: eS.setNodeRef,
                  draggable: !0,
                  sorting: en,
                  onDragStart: el,
                  onDragEnd: ea,
                  renderChildNode: eb,
                },
                e.id,
              );
            case y.eD.GUILD:
              return (0, i.jsx)(
                K.Z,
                {
                  guildNode: e,
                  setRef: eS.setNodeRef,
                  draggable: !0,
                  sorting: en,
                  onDragStart: el,
                  onDragEnd: ea,
                },
                e.id,
              );
            default:
              return null;
          }
        }
        (0, D.Z)(eS.scrollToGuild);
        let eR = o.getRoots(),
          eM = (0, x.Z)(),
          eL = (0, A.U)(),
          eP = et.map((e) =>
            (0, i.jsx)(k.Z, { id: e.id, name: e.name, icon: e.icon }, e.id),
          );
        return (0, i.jsx)(I.Gt, {
          value: ex,
          children: (0, i.jsx)(_.ThemeProvider, {
            theme: s,
            children: (e) =>
              (0, i.jsx)("nav", {
                className: a()($.wrapper, r, e, { [$.hidden]: ee }),
                "aria-label": J.Z.Messages.GUILDS_BAR_A11Y_LABEL,
                children: (0, i.jsxs)("ul", {
                  ref: eg,
                  ...eC,
                  ...eI,
                  role: "tree",
                  className: $.tree,
                  children: [
                    (0, i.jsx)(j.Z, {
                      ref: ec,
                      isVisible: eS.isItemVisible,
                      onJumpTo: eS.handleJumpToGuild,
                      className: $.unreadMentionsIndicatorTop,
                      barClassName: $.unreadMentionsBar,
                    }),
                    (0, i.jsxs)(_.AdvancedScrollerNone, {
                      className: a()({ [$.scroller]: !0, [$.scrolling]: eE }),
                      ref: eS.scrollerRef,
                      onScroll: eS.handleScroll,
                      children: [
                        (0, i.jsx)(H.u, {}),
                        eM ? (0, i.jsx)(v.Z, {}) : null,
                        (0, i.jsx)(F.Z, { isOnHubVerificationRoute: eZ }),
                        (0, i.jsx)(w.Z, {}),
                        eL,
                        g.map((e) => (0, i.jsx)(Q.Z, { guildId: e }, e)),
                        (0, i.jsx)(q.Z, { onActivate: eA }),
                        (0, i.jsx)(W.Z, {}),
                        (0, i.jsx)("div", {
                          "aria-label": J.Z.Messages.SERVERS,
                          children: eR.map(eb),
                        }),
                        eP,
                        n
                          ? null
                          : (0, i.jsx)(G.Z, {
                              disableTooltip: p.length > 0,
                              lastTargetNode: eR[eR.length - 1],
                            }),
                        (0, i.jsx)(z.Z, {}),
                        t
                          ? null
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)(W.Z, {}),
                                (0, i.jsx)(U.Z, {}),
                              ],
                            }),
                      ],
                    }),
                    n || null == em
                      ? n
                        ? null
                        : (0, i.jsx)(V.LW, {
                            hideGradient: ed,
                            children: (0, i.jsx)(B.Z, {
                              ref: eS.guildDiscoveryRef,
                              selected: eT,
                              className: $.fixedDiscoveryIcon,
                            }),
                          })
                      : (0, i.jsx)(V.LW, {
                          hideGradient: ed,
                          children: (0, i.jsx)(em, {
                            children: (e) => {
                              let { onClick: t } = e;
                              return (0, i.jsx)(B.Z, {
                                ref: eS.guildDiscoveryRef,
                                selected: eT,
                                className: $.fixedDiscoveryIcon,
                                onClick: t,
                              });
                            },
                          }),
                        }),
                    (0, i.jsx)(j.Z, {
                      reverse: !0,
                      ref: eu,
                      isVisible: eS.isItemVisible,
                      onJumpTo: eS.handleJumpToGuild,
                      className: a()($.unreadMentionsIndicatorBottom, {
                        [$.unreadMentionsFixedFooter]: !n,
                      }),
                      barClassName: $.unreadMentionsBar,
                    }),
                  ],
                }),
              }),
          }),
        });
      }
      t.Z = l.memo(
        function (e) {
          let t = (0, g.Z)("guildsnav");
          return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(ea, { ...e }),
          });
        },
        (e, t) => !1 === t.isVisible || (0, p.Z)(e, t),
      );
    },
    252686: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(686546),
        s = n(788131);
      function o(e) {
        let { className: t } = e;
        return (0, i.jsx)(a.ZP, {
          mask: a.ZP.Masks.SQUIRCLE,
          className: r()(t, s.placeholderMask),
          width: 48,
          height: 48,
          style: { display: "block" },
          children: (0, i.jsx)("div", { className: s.dragInner }),
        });
      }
    },
    474109: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(256916),
        s = n(664915),
        o = n(888369),
        c = n(358652),
        u = n(771845),
        d = n(613060),
        h = n(451478),
        p = n(251625),
        f = n(981631),
        _ = n(689938);
      let m = "app-download-item",
        g = "add-server-item";
      function C() {
        return !1;
      }
      function I(e) {
        var t;
        let n = o.default.getMutableGuildStates();
        return (
          (e === f.x8Z.SERVER_DISCOVERY_BADGE &&
            !d.Z.hasViewed(f.x8Z.SERVER_DISCOVERY_BADGE)) ||
          (e !== m &&
            e !== g &&
            (null === (t = n[null != e ? e : "null"]) || void 0 === t
              ? void 0
              : t.mentionCount) > 0)
        );
      }
      let E = (0, p.oH)((e, t, n) => [
        "null",
        ...t,
        ...e,
        g,
        f.x8Z.E3_SERVER_DISCOVERY_BADGE,
        m,
      ]);
      t.Z = l.forwardRef(function (e, t) {
        let n = (0, r.Wu)([u.ZP, c.Z, o.default], () =>
            E(
              u.ZP.getGuildFolders(),
              c.Z.getUnreadPrivateChannelIds(),
              o.default.getStoreChangeSentinel(),
            ),
          ),
          l = (0, r.e7)([h.Z], () => h.Z.isFocused()),
          d = (0, r.e7)([s.Z], () => s.Z.getExpandedFolders());
        return (0, i.jsx)(a.Z, {
          ...e,
          ref: t,
          items: n,
          isUnread: C,
          textUnread: _.Z.Messages.NEW,
          textMention: _.Z.Messages.NEW,
          isMentioned: I,
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
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(215569),
        s = n(592125),
        o = n(358652),
        c = n(19780),
        u = n(919436);
      function d() {
        (0, r.e7)([s.Z], () => s.Z.getPrivateChannelsVersion());
        let e = s.Z.getMutablePrivateChannels(),
          t = (0, r.Wu)([o.Z], () => o.Z.getUnreadPrivateChannelIds()),
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
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(603592),
        a = n(689938);
      let s = "DOWNLOAD_APPS";
      function o() {
        let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, s));
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
              { modalKey: s },
            );
          },
          selected: e,
          tooltip: a.Z.Messages.DOWNLOAD_APPS,
          icon: l.DownloadIcon,
        });
      }
    },
    603592: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(91192),
        o = n(481060),
        c = n(276952),
        u = n(682662),
        d = n(662146),
        h = n(322459);
      let p = l.forwardRef(function (e, t) {
        let {
            id: n,
            onClick: r,
            onContextMenu: p,
            icon: f,
            selected: _,
            tooltip: m,
            upperBadge: g,
            lowerBadge: C,
            lowerBadgeSize: I,
            showPill: E = !0,
            className: N,
            "aria-label": S,
            children: x,
            onMouseEnter: v,
            onMouseLeave: T,
            onMouseDown: Z,
          } = e,
          A = (0, s.Ie)(n),
          [b, R] = l.useState(!1),
          M = "string" == typeof m && null == S ? m : S;
        return (0, i.jsxs)(u.H, {
          children: [
            E
              ? (0, i.jsx)("div", {
                  className: h.pill,
                  children: (0, i.jsx)(c.Z, { hovered: b, selected: _ }),
                })
              : null,
            (0, i.jsx)(d.Z, {
              text: m,
              selected: _,
              children: (0, i.jsx)(o.BlobMask, {
                className: h.__invalid_circleButtonMask,
                selected: _ || b,
                upperBadge: g,
                lowerBadge: C,
                lowerBadgeSize: I,
                children: (0, i.jsx)(o.Clickable, {
                  innerRef: t,
                  onMouseEnter: () => {
                    null == v || v(), R(!0);
                  },
                  onMouseLeave: () => {
                    null == T || T(), R(!1);
                  },
                  onMouseDown: Z,
                  className: a()(h.circleIconButton, N, {
                    [h.selected]: _ || b,
                  }),
                  onClick: r,
                  "aria-label": M,
                  onContextMenu: p,
                  focusProps: { enabled: !1 },
                  ...A,
                  children:
                    null != f &&
                    (0, i.jsx)(f, {
                      className: h.circleIcon,
                      color: "currentColor",
                    }),
                }),
              }),
            }),
            x,
          ],
        });
      });
      t.Z = p;
    },
    118122: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(239091),
        o = n(906732),
        c = n(560067),
        u = n(451603),
        d = n(885714),
        h = n(155409),
        p = n(430824),
        f = n(594174),
        _ = n(40153),
        m = n(603592),
        g = n(981631),
        C = n(675999),
        I = n(689938),
        E = n(355355);
      let N = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function S(e) {
        (0, s.jW)(e, async () => {
          let { default: e } = await n.e("9606").then(n.bind(n, 987578));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function x(e) {
        let { disableTooltip: t, lastTargetNode: n } = e,
          s = (0, r.e7)([p.Z], () => p.Z.getGuilds()),
          x = l.useMemo(() => Object.values(s), [s]),
          v = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
          T = l.useMemo(() => x.some((e) => e.isOwner(v)), [x, v]),
          Z = (0, a.useModalsStore)((e) =>
            (0, a.hasModalOpenSelector)(e, C.PU),
          ),
          { analyticsLocations: A } = (0, o.ZP)(),
          b = (0, a.useRedesignIconContext)().enabled,
          R = (0, i.jsx)(m.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
              (0, u.yU)()
                ? (0, d.Z)({
                    analyticsSource: { page: g.Sbl.CREATE_JOIN_GUILD_MODAL },
                    analyticsLocation: {
                      page: g.Sbl.CREATE_JOIN_GUILD_MODAL,
                      section: g.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: A,
                  })
                : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: Z,
            onContextMenu: S,
            tooltip: I.Z.Messages.ADD_A_SERVER,
            icon: b ? a.PlusMediumIcon : a.PlusSmallIcon,
          });
        return t
          ? R
          : (0, i.jsx)("div", {
              className: E.tutorialContainer,
              children: (0, i.jsxs)(h.Z, {
                tutorialId: T ? "create-more-servers" : "create-first-server",
                inlineSpecs: N,
                position: "right",
                children: [
                  R,
                  null != n &&
                    (0, i.jsx)(_.ZP, {
                      name: I.Z.Messages.DND_END_OF_LIST,
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
          return b;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(225857),
        o = n(212433),
        c = n(91192),
        u = n(477690),
        d = n(481060),
        h = n(153867),
        p = n(771845),
        f = n(624138),
        _ = n(727258),
        m = n(276952),
        g = n(199540),
        C = n(40153),
        I = n(252686),
        E = n(682662),
        N = n(662146),
        S = n(689938),
        x = n(115376),
        v = n(767573);
      let T = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        Z = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
        A = (0, f.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);
      function b(e) {
        let {
            folderNode: t,
            setNodeRef: n,
            selected: r,
            expanded: u,
            mediaState: f,
            mentionCount: b = 0,
            unread: R = !1,
            defaultFolderName: M,
            useCircleMask: L = !1,
            draggable: P = !1,
            sorting: O = !1,
            onDragStart: y,
            onDragEnd: D,
            onExpandCollapse: j,
            onContextMenu: w,
            renderChildNode: U,
            folderIconContent: G,
          } = e,
          { id: k, name: B, children: V } = t,
          [H, F] = l.useState(!1),
          [W, z] = l.useState(!1),
          Y = H || W;
        l.useEffect(() => {
          O && F(!1);
        }, [O]);
        let [{ dragging: K }, q] = (0, s.c)({
            type: _.eD.FOLDER,
            item: () => (null == y || y(), { type: _.eD.FOLDER, nodeId: t.id }),
            end() {
              null == D || D(), (0, h.V1)(p.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          Q = l.useCallback((e) => {
            z(e);
          }, []),
          X = l.useCallback(
            (e) => {
              (("ArrowRight" === e.key && !u) ||
                ("ArrowLeft" === e.key && u)) &&
                j();
            },
            [j, u],
          ),
          J =
            null != B && "" !== B
              ? B
              : null != M && "" !== M
                ? M
                : S.Z.Messages.SERVER_FOLDER_PLACEHOLDER,
          $ = (0, c.Ie)("".concat(k)),
          ee = "folder-items-".concat(k),
          et = V.length * (Z + A),
          en = (0, d.useTransition)(!K && u, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: T },
          }),
          ei = l.useCallback((e) => (null == n ? void 0 : n(k, e)), [n, k]),
          el = (0, i.jsxs)(E.H, {
            children: [
              (0, i.jsx)(m.Z, {
                disabled: K || u,
                hovered: H,
                selected: r,
                unread: R,
                className: v.pill,
              }),
              (0, i.jsx)(N.Z, {
                text: J,
                disabled: O,
                selected: r,
                disableWrapper: !0,
                children: (0, i.jsx)("div", {
                  ref: P ? q : void 0,
                  className: a()({ [v.wobble]: !K && W && !u }),
                  "data-dnd-name": J,
                  children: K
                    ? (0, i.jsx)(I.Z, {})
                    : (0, i.jsx)(g.Z, {
                        folderNode: t,
                        expanded: u,
                        forceCircular: L,
                        sorting: O,
                        mediaState: f,
                        mentionCount: b,
                        tooltipName: J,
                        folderGroupId: ee,
                        onClick: j,
                        onContextMenu: w,
                        onHoverChange: F,
                        onKeyDown: X,
                        treeItemProps: $,
                        folderIconContent: G,
                      }),
                }),
              }),
              P
                ? (0, i.jsx)(C.ZP, {
                    name: J,
                    targetNode: t,
                    onDragOverChanged: Q,
                  })
                : null,
            ],
          });
        return (0, i.jsxs)("div", {
          ref: ei,
          className: x.wrapper,
          children: [
            !K &&
              (0, i.jsx)("span", {
                className: a()(x.expandedFolderBackground, {
                  [x.collapsed]: !u,
                  [x.hover]: Y,
                }),
              }),
            el,
            en((e, t, n) => {
              let { key: l } = n;
              return (
                t &&
                (0, i.jsx)(
                  o.animated.ul,
                  {
                    id: ee,
                    style: { height: e.height.to((e) => e * et) },
                    className: x.__invalid_expandedGuilds,
                    role: "group",
                    children: V.map(U),
                  },
                  l,
                )
              );
            }),
            P && u ? (0, i.jsx)(C.Zu, { name: J, targetNode: t }) : null,
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
      var i = n(735250),
        l = n(470079),
        r = n(481060),
        a = n(460562),
        s = n(768581),
        o = n(682662),
        c = n(662146),
        u = n(779033);
      function d(e) {
        let [t, d] = l.useState(!1);
        return (0, i.jsx)(o.H, {
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
                    ? s.ZP.getGuildIconURL({
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
      n.d(t, {
        o: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(636977),
        a = n(704215),
        s = n(481060),
        o = n(169559),
        c = n(706140),
        u = n(571457),
        d = n(836768),
        h = n(341907),
        p = n(703656),
        f = n(603592),
        _ = n(981631),
        m = n(921944),
        g = n(49898),
        C = n(46140),
        I = n(689938),
        E = n(55869);
      function N(e) {
        switch (e) {
          case g.F$.QUESTS:
            return (0, h.navigateToQuestHome)(
              C.dr.DISCOVERY_COMPASS,
              r.j.DISCOVERY_COMPASS,
            );
          case g.F$.APPS:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS);
          case g.F$.SERVERS:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY_SERVERS);
          default:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY);
        }
      }
      let S = l.forwardRef(function (e, t) {
        let { selected: n, className: r, onClick: h } = e,
          p = d.d.getState().selectedTab,
          _ = (0, o.Z)("discovery_button"),
          [C, S] = (0, c.cv)([a.z.GLOBAL_DISCOVERY_RAPIDASH_NOTIF]),
          x = l.useCallback(() => {
            null == h || h(),
              (0, u.k5)({ source: g.JU.GUILDS_BAR_ICON }),
              N(p),
              S(m.L.DISMISS);
          }, [h, p, S]),
          v = null != C && _,
          T = l.useMemo(
            () => ({
              lowerBadgeSize: { width: 12, height: 12 },
              lowerBadge: v
                ? (0, i.jsx)("div", { className: E.guildNotif })
                : void 0,
            }),
            [v],
          );
        return (0, i.jsx)(f.Z, {
          id: "guild-discover-button",
          ref: t,
          className: r,
          onClick: x,
          selected: n,
          tooltip: I.Z.Messages.DISCOVER,
          icon: s.CompassIcon,
          ...T,
        });
      });
      t.Z = S;
    },
    773182: function (e, t, n) {
      n.d(t, {
        KF: function () {
          return D;
        },
        LW: function () {
          return U;
        },
        OO: function () {
          return j;
        },
        TH: function () {
          return w;
        },
      }),
        n(47120),
        n(724458);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(266067),
        o = n(442837),
        c = n(704215),
        u = n(481060),
        d = n(350810),
        h = n(110924),
        p = n(100527),
        f = n(970606),
        _ = n(963202),
        m = n(824991),
        g = n(564990),
        C = n(353647),
        I = n(243778),
        E = n(669764),
        N = n(210753),
        S = n(863249),
        x = n(937111),
        v = n(369566),
        T = n(314897),
        Z = n(480294),
        A = n(602147),
        b = n(981631),
        R = n(308083),
        M = n(921944),
        L = n(49898),
        P = n(689938),
        O = n(877861);
      function y(e) {
        let {
            title: t,
            message: n,
            dismissibleContent: r,
            gameId: a,
            onPopoutVisible: c,
            onClick: h,
            children: p,
            isEligibleForUpsell: f = !0,
            withInviteIcon: _ = !0,
            backgroundImageUrl: g,
          } = e,
          C = (0, s.TH)(),
          [E, N] = (0, I.US)([r], M.R.SIDEBAR),
          S = E !== r,
          x = (0, d.Z)(),
          v = f && !x && !S && C.pathname !== b.Z5c.GUILD_DISCOVERY;
        l.useEffect(() => {
          v && c();
        }, [v, c]);
        let T = l.useCallback(() => {
            N(M.L.TAKE_ACTION), h();
          }, [N, h]),
          A = l.useCallback(
            (e) => {
              e(), N(M.L.USER_DISMISS);
            },
            [N],
          ),
          R = (0, o.e7)([Z.Z], () => Z.Z.hasConsented(b.pjP.PERSONALIZATION)),
          L = l.useMemo(
            () =>
              null != g && R ? { backgroundImage: "url(".concat(g, ")") } : {},
            [g, R],
          );
        return (0, i.jsxs)("div", {
          className: O.container,
          children: [
            (0, i.jsx)(u.Popout, {
              shouldShow: v,
              renderPopout: (e) => {
                let { closePopout: l } = e;
                return (0, i.jsxs)("div", {
                  className: O.popoutContainer,
                  children: [
                    (0, i.jsx)("div", {
                      className: O.genericBackgroundImage,
                      style: L,
                    }),
                    (0, i.jsx)(u.Clickable, {
                      onClick: () => A(l),
                      className: O.close,
                      children: (0, i.jsx)(u.XSmallIcon, {
                        size: "xs",
                        color: u.tokens.colors.WHITE,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: O.popoutContent,
                      children: [
                        _ && (0, i.jsx)(m.YV, {}),
                        (0, i.jsx)(m.aF, { title: t }),
                        (0, i.jsx)(m.To, { message: n }),
                        (0, i.jsx)(m.Xu, { onClick: T }),
                      ],
                    }),
                    (0, i.jsx)("div", { className: O.popoutCaret }),
                  ],
                });
              },
              position: "top",
              animationPosition: "top",
              align: "left",
              spacing: 16,
              children: (e) =>
                (0, i.jsx)("div", { ...e, className: O.popoutAnchor }),
            }),
            p({ onClick: T }),
          ],
        });
      }
      function D(e) {
        let { children: t } = e,
          {
            gameId: n,
            backgroundImageUrl: r,
            treatment: a,
            hasFetchedGame: s,
          } = (function () {
            var e;
            let t = (0, o.e7)([T.default], () => T.default.getId()),
              { recent: n, outbox: i } = (0, v.Z)(t),
              r = (0, o.e7)([C.Z], () => C.Z.hasInitialized),
              a = (0, o.e7)([Z.Z], () =>
                Z.Z.hasConsented(b.pjP.PERSONALIZATION),
              ),
              s = null == i && r,
              c = l.useMemo(
                () =>
                  a
                    ? n.reduce(
                        (e, t) =>
                          "played_game_extra" !== t.extra.type ||
                          null == R.gQ.get(t.extra.application_id)
                            ? e
                            : e.concat(t.extra.application_id),
                        [],
                      )
                    : [],
                [n, a],
              );
            l.useEffect(() => {
              s && a && (0, g.JX)(t);
            }, [t, s, a]);
            let u = null !== (e = c[0]) && void 0 !== e ? e : null,
              { isFetching: d } = (0, N.$)(u),
              h = (0, o.e7)([E.Z], () => E.Z.getGame(u)),
              p = l.useMemo(() => {
                if (null == h) return null;
                let { artwork: e, screenshots: t } = h;
                if (e.length > 0) {
                  let t = Math.floor(Math.random() * (e.length - 1));
                  return e[t];
                }
                if (t.length > 0) {
                  let e = Math.floor(Math.random() * (t.length - 1));
                  return t[e];
                }
                return null;
              }, [h]);
            return {
              gameId: u,
              treatment: null != u && a ? R.O7.GAME_SPECIFIC : R.O7.GENERIC,
              backgroundImageUrl: p,
              hasFetchedGame: !s && !d,
            };
          })(),
          u = l.useCallback(() => {
            (0, f.tv)({
              location: p.Z.GUILDS_LIST,
              treatment: a,
              gameApplicationId: n,
            });
          }, [a, n]),
          d = l.useCallback(() => {
            (0, f.GS)({
              location: p.Z.GUILDS_LIST,
              treatment: a,
              gameApplicationId: n,
            }),
              (0, A.o)(L.F$.SERVERS);
          }, [a, n]);
        return a !== R.O7.GAME_SPECIFIC || s
          ? (0, i.jsx)(y, {
              title: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_TITLE,
              message: P.Z.Messages.RAPIDASH_GUILD_LIST_USER_UPSELL_MESSAGE,
              gameId: n,
              backgroundImageUrl: r,
              dismissibleContent: c.z.RAPIDASH_M3_DISCOVERY_UPSELL,
              onClick: d,
              onPopoutVisible: u,
              withInviteIcon: !1,
              children: t,
            })
          : (0, i.jsx)(i.Fragment, { children: t({ onClick: d }) });
      }
      function j(e) {
        let { children: t } = e,
          { guilds: n } = (0, _.C3)({
            location: "GuildsBarClanAdminUpsellPopout",
            includeConverted: !1,
          }),
          r = n.length > 0,
          a = l.useCallback(() => {
            (0, f.TE)({ location: p.Z.GUILDS_LIST });
          }, []),
          s = l.useCallback(() => {
            (0, f._9)({ location: p.Z.GUILDS_LIST });
          }, []),
          o = P.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
          u = P.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE;
        return (0, i.jsx)(y, {
          title: o,
          message: u,
          dismissibleContent: c.z.GUILD_LIST_CLAN_ADMIN_UPSELL,
          gameId: null,
          onClick: s,
          isEligibleForUpsell: r,
          onPopoutVisible: a,
          children: t,
        });
      }
      function w(e) {
        let { onActivate: t, children: n } = e,
          r = (0, o.e7)([x.Z], () => x.Z.hasJoinRequestCoackmark()),
          a = l.useCallback(() => {
            S.ZP.clearCoachmark();
          }, []),
          s = (0, h.Z)(r),
          c = l.useRef(null);
        return (
          l.useEffect(() => {
            if (r && r !== s) {
              var e, n, i, l, a;
              t(),
                null === (a = c.current) ||
                  void 0 === a ||
                  null === (l = a.ref) ||
                  void 0 === l ||
                  null === (i = l.current) ||
                  void 0 === i ||
                  null === (n = i.layerRef) ||
                  void 0 === n ||
                  null === (e = n.current) ||
                  void 0 === e ||
                  e.updatePosition();
            }
          }, [c, r, s, t]),
          (0, i.jsxs)("div", {
            className: O.container,
            children: [
              (0, i.jsx)(u.Popout, {
                ref: c,
                shouldShow: r,
                renderPopout: () =>
                  (0, i.jsxs)("div", {
                    className: O.popoutContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: O.popoutContent,
                        children: [
                          (0, i.jsxs)("div", {
                            className: O.coachmarkTextContainer,
                            children: [
                              (0, i.jsx)(u.Heading, {
                                variant: "heading-md/medium",
                                children:
                                  P.Z.Messages
                                    .CLAN_USER_APPLICATION_COACHMARK_TITLE,
                              }),
                              (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children:
                                  P.Z.Messages
                                    .CLAN_USER_APPLICATION_COACHMARK_BODY,
                              }),
                            ],
                          }),
                          (0, i.jsx)(u.Button, {
                            fullWidth: !0,
                            size: u.ButtonSizes.SMALL,
                            color: u.ButtonColors.BRAND,
                            onClick: a,
                            children:
                              P.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA,
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", { className: O.popoutCaretLeft }),
                    ],
                  }),
                position: "right",
                animationPosition: "right",
                align: "top",
                spacing: 16,
                children: (e) =>
                  (0, i.jsx)("div", { ...e, className: O.popoutAnchor }),
              }),
              n,
            ],
          })
        );
      }
      function U(e) {
        let { hideGradient: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: O.footer,
          children: [
            (0, i.jsx)("div", {
              className: a()(O.gradient, { [O.gradientHidden]: t }),
            }),
            n,
          ],
        });
      }
    },
    325257: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(225857),
        o = n(91192),
        c = n(399606),
        u = n(846519),
        d = n(481060),
        h = n(493683),
        p = n(239091),
        f = n(153867),
        _ = n(35225),
        m = n(703656),
        g = n(769654),
        C = n(271383),
        I = n(771845),
        E = n(727258),
        N = n(276952),
        S = n(249792),
        x = n(40153),
        v = n(593618),
        T = n(252686),
        Z = n(682662),
        A = n(674552),
        b = n(981631),
        R = n(689938),
        M = n(767573);
      let L = {
        analyticsSource: {
          page: b.ZY5.GUILD_CHANNEL,
          section: b.jXE.CHANNEL_LIST,
          object: b.qAy.CHANNEL,
        },
      };
      function P(e, t) {
        (0, p.jW)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("96427"),
            n.e("33053"),
            n.e("37581"),
            n.e("7654"),
            n.e("18146"),
            n.e("44156"),
            n.e("44294"),
            n.e("85552"),
            n.e("58227"),
            n.e("36897"),
            n.e("36362"),
            n.e("33213"),
            n.e("18339"),
          ]).then(n.bind(n, 545135));
          return (n) => (0, i.jsx)(e, { ...n, guild: t });
        });
      }
      t.Z = l.memo(function (e) {
        var t, n, r, p, O;
        let {
            guildNode: y,
            setRef: D,
            onDragStart: j,
            onDragEnd: w,
            route: U,
            guild: G,
            animatable: k,
            selected: B = !1,
            unread: V = !1,
            mediaState: H,
            unavailable: F = !1,
            badge: W = 0,
            contextMenu: z = P,
            draggable: Y = !1,
            sorting: K = !1,
            preloadOnClick: q = !0,
            guildJoinRequestStatus: Q,
          } = e,
          { id: X, parentId: J } = y,
          $ =
            null !== (t = e.upperBadge) && void 0 !== t
              ? t
              : F
                ? (0, A.Ny)()
                : null != H
                  ? (0, A.Or)(H)
                  : void 0,
          ee = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
        null == ee && W > 0
          ? (ee = null !== (r = (0, A.Ne)(W)) && void 0 !== r ? r : void 0)
          : null == ee &&
            null != Q &&
            (ee =
              null !== (p = (0, A.jt)({ guildJoinRequestStatus: Q })) &&
              void 0 !== p
                ? p
                : void 0);
        let et =
            null !== (O = e.lowerBadgeSize) && void 0 !== O
              ? O
              : { width: (0, d.getBadgeWidthForValue)(W) },
          [{ dragging: en }, ei] = (0, s.c)({
            type: E.eD.GUILD,
            item: () => (
              requestAnimationFrame(() => {
                null == j || j();
              }),
              { type: y.type, nodeId: y.id }
            ),
            end() {
              null == w || w(), (0, f.V1)(I.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          el = (0, o.Ie)(null != X ? X : b.lds),
          [er, ea] = l.useState(!1),
          es = !K && er,
          [eo, ec] = l.useState(!1),
          [eu, ed] = l.useState(!1),
          [eh] = l.useState(() => new u.sW(70, () => ed(!0)));
        l.useEffect(() => () => eh.cancel(), [eh]);
        let ep = l.useCallback(() => {
            if (null != U) {
              (0, m.uL)(U, { state: L });
              return;
            }
            (0, g.X)(X, { state: L });
          }, [X, U]),
          ef = l.useCallback(() => {
            if (null != U || null == G || F || !q) return;
            let e = (0, _.V)(G.id);
            if (null != e) h.Z.preload(G.id, e);
          }, [U, G, F, q]),
          e_ = (0, c.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(X)),
          em = l.useCallback(
            (e) => {
              null != G && !e_ && z(e, G);
            },
            [G, z, e_],
          ),
          eg = l.useCallback(
            (e) => {
              if ("ArrowLeft" === e.key && null != J) {
                var t;
                null ===
                  (t = document.querySelector(
                    "[aria-owns=folder-items-".concat(J, "]"),
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [J],
          ),
          eC = l.useCallback(
            (e) => {
              if (e) {
                eh.delay();
                return;
              }
              eh.cancel(), ed(!1);
            },
            [eh],
          ),
          eI = l.useCallback(
            (e) => {
              null == D || D(X, e);
            },
            [X, D],
          );
        if (null == G) return null;
        let eE =
            eu || eo
              ? (0, i.jsx)(S.Z, {
                  guild: G,
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
                  ariaLabel: R.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                    guildName: G.toString(),
                    mentions: W,
                  }),
                  name: G.toString(),
                  onClick: ep,
                  onMouseEnter: function () {
                    K || ea(!0);
                  },
                  onMouseLeave: function () {
                    K || ea(!1);
                  },
                  onMouseDown: ef,
                  onContextMenu: em,
                  onKeyDown: eg,
                  icon: G.getIconURL(96, es && k),
                  selected: B || es,
                  ...el,
                  role: "treeitem",
                }),
          eN = en
            ? (0, i.jsx)(x.OG, { children: (0, i.jsx)(T.Z, {}) })
            : (0, i.jsx)("div", {
                ref: Y ? ei : void 0,
                "data-dnd-name": G.toString(),
                className: a()(M.blobContainer, {
                  [M.sorting]: K,
                  [M.wobble]: eu,
                  [M.selected]: eu || B,
                }),
                children: (0, i.jsx)(d.BlobMask, {
                  selected: eu || B || es,
                  upperBadge: $,
                  lowerBadge: ee,
                  lowerBadgeSize: et,
                  children: eE,
                }),
              });
        return (0, i.jsxs)(Z.H, {
          ref: eI,
          children: [
            (0, i.jsx)(N.Z, {
              hovered: !en && es,
              selected: !en && B,
              unread: !en && V,
              className: M.pill,
            }),
            (0, i.jsx)(v.Z, {
              guild: G,
              disabled: K,
              isDragging: en,
              children: eN,
            }),
            Y
              ? (0, i.jsx)(x.ZP, {
                  name: G.name,
                  targetNode: y,
                  onDragOverChanged: eC,
                })
              : null,
          ],
        });
      });
    },
    222059: function (e, t, n) {
      n.d(t, {
        u: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(91192),
        a = n(442837),
        s = n(433517),
        o = n(481060),
        c = n(339149),
        u = n(327943),
        d = n(864682),
        h = n(899740),
        p = n(155409),
        f = n(699516),
        _ = n(944486),
        m = n(594174),
        g = n(295226),
        C = n(774343),
        I = n(417363),
        E = n(941128),
        N = n(780570),
        S = n(557177),
        x = n(278464),
        v = n(276952),
        T = n(682662),
        Z = n(662146),
        A = n(674552),
        b = n(981631),
        R = n(474936),
        M = n(871465),
        L = n(689938),
        P = n(342824);
      let O = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function y(e) {
        let {
            selected: t,
            user: n,
            badge: h,
            link: f,
            showProgressBadge: _,
          } = e,
          m = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
          [g, C] = l.useState(!1),
          [I, E] = l.useState(!1),
          [N, x] = l.useState(null),
          [R, y] = l.useState(0),
          D = (0, r.Ie)("home"),
          j = () => {
            x(null), y(0), clearTimeout(N);
          };
        if (null == n) return null;
        let w = L.Z.Messages.DIRECT_MESSAGES;
        I &&
          (w = s.K.get(b.wli)
            ? L.Z.Messages.DISCODO_ENABLED
            : L.Z.Messages.DISCODO_DISABLED);
        let U = null;
        !t &&
          _ &&
          (U = (0, i.jsx)(c.Z, {
            className: P.downloadProgress,
            determineOwnVisibility: !1,
          }));
        let G = t || g || m,
          k = (0, i.jsx)(o.BlobMask, {
            selected: G,
            lowerBadge: h > 0 ? (0, A.Ne)(h) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, o.getBadgeWidthForValue)(h) },
            children: (0, i.jsx)(o.NavItem, {
              onMouseEnter: () => C(!0),
              onMouseLeave: () => C(!1),
              onClick: () => {
                if (
                  !__OVERLAY__ &&
                  (null != N && clearTimeout(N),
                  x(setTimeout(j, 500)),
                  y(R + 1),
                  15 === R)
                ) {
                  j();
                  let e = !s.K.get(b.wli);
                  s.K.set(b.wli, e),
                    e && s.K.set(M.O5, !0),
                    e ? (0, S.GN)("discodo") : (0, S.GN)("user_leave"),
                    E(!0),
                    setTimeout(() => {
                      E(!1);
                    }, 1e3);
                }
              },
              selected: G,
              ariaLabel: L.Z.Messages.DIRECT_MESSAGES,
              ...D,
              to: {
                pathname: f,
                state: {
                  analyticsSource: {
                    page: b.ZY5.GUILD_CHANNEL,
                    section: b.jXE.NAVIGATION,
                    object: b.qAy.BUTTON_HOME,
                  },
                },
              },
              children: (0, i.jsx)(d.Z, {}),
            }),
          });
        return (0, i.jsx)("div", {
          className: P.tutorialContainer,
          children: (0, i.jsx)(p.Z, {
            inlineSpecs: O,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(T.H, {
              children: [
                (0, i.jsx)(v.Z, { selected: t, hovered: g, className: P.pill }),
                (0, i.jsx)(Z.Z, {
                  color: o.Tooltip.Colors.PRIMARY,
                  hideOnClick: !0,
                  text: w,
                  selected: t,
                  children: k,
                }),
              ],
            }),
          }),
        });
      }
      function D() {
        let e = (0, x.n)(),
          t = (0, a.e7)([E.Z, I.Z], () => {
            let e = (0, c.E)(E.Z.activeItems, I.Z),
              { total: t, progress: n } = N.lK(e),
              i = N.xI(n, t);
            return i > 0 && i < 100;
          }),
          n = (0, a.e7)([f.Z], () => f.Z.getPendingCount()),
          l = Object.keys(R.nG),
          { unviewedTrialCount: r, unviewedDiscountCount: s } = (0, a.cj)(
            [g.Z],
            () => ({
              unviewedTrialCount: g.Z.getUnacknowledgedOffers(l).length,
              unviewedDiscountCount:
                g.Z.getUnacknowledgedDiscountOffers().length,
            }),
          ),
          o = r + s,
          u = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
          d = (0, h.q)(),
          p = n + o + d,
          S = p === o && o > 0 && n + d === 0,
          v = C.Z.getHomeLink();
        return (
          S && (v = b.Z5c.APPLICATION_STORE),
          (0, i.jsx)(y, {
            selected: e,
            user: u,
            selectedChannelId: _.Z.getChannelId(b.ME),
            badge: p,
            link: v,
            showProgressBadge: t,
          })
        );
      }
    },
    751277: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(266067),
        r = n(442837),
        a = n(481060),
        s = n(893607),
        o = n(601964),
        c = n(701190),
        u = n(836040),
        d = n(603592),
        h = n(981631),
        p = n(689938);
      function f(e) {
        var t;
        let { isOnHubVerificationRoute: n } = e,
          f = (0, l.LX)(
            null !== (t = window.location.pathname) && void 0 !== t ? t : "",
            {
              path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                s.Hw.guildId(),
                ":inviteCode",
              ),
            },
          ),
          _ = (0, r.e7)([c.Z], () => {
            if (null == f) return null;
            let { inviteCode: e } = f.params;
            return null != e ? c.Z.getInvite(e) : null;
          }),
          m =
            (null == _ ? void 0 : _.guild) != null
              ? new o.ZP(null == _ ? void 0 : _.guild)
              : null;
        return n
          ? null != m && null != _
            ? (0, i.jsx)(u.Z, { guild: m, invite: _ })
            : (0, i.jsx)(d.Z, {
                tooltip: p.Z.Messages.HUB_DISCORD_HUBS,
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
      var i = n(735250),
        l = n(470079),
        r = n(355355);
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
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(466474);
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
          selected: f = !1,
          tooltipClass: _,
          tooltipContentClass: m,
        } = e;
        return (0, i.jsx)(s.Tooltip, {
          shouldShow: h,
          forceOpen: p,
          spacing: 20,
          hideOnClick: d,
          text: u ? null : n,
          position: "right",
          color: r,
          "aria-label": !1,
          tooltipClassName: a()(o.listItemTooltip, _),
          tooltipContentClassName: m,
          children: (e) =>
            c
              ? l.cloneElement(l.Children.only(t), { ...e })
              : (0, i.jsx)("div", {
                  className: a()(o.listItemWrapper, { [o.selected]: f }),
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
      var i = n(735250);
      n(470079);
      var l = n(682662),
        r = n(414644);
      function a() {
        return (0, i.jsx)(l.H, {
          children: (0, i.jsx)("div", { className: r.guildSeparator }),
        });
      }
    },
    843343: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(481060),
        a = n(299379),
        s = n(486472),
        o = n(430824),
        c = n(682662),
        u = n(662146),
        d = n(981631),
        h = n(689938),
        p = n(355123);
      function f() {
        let e = (0, l.e7)(
          [s.Z, o.Z],
          () =>
            s.Z.unavailableGuilds.filter((e) => null == o.Z.getGuild(e)).length,
        );
        return e <= 0
          ? null
          : (0, i.jsx)(c.H, {
              children: (0, i.jsx)(u.Z, {
                text: h.Z.Messages.PARTIAL_OUTAGE.format({ count: e }),
                color: r.Tooltip.Colors.RED,
                children: (0, i.jsx)(r.Anchor, {
                  href: (0, a.Z)(d.RK.TWITTER),
                  target: "_blank",
                  className: p.guildsError,
                  "aria-label": h.Z.Messages.PARTIAL_OUTAGE_A11Y.format({
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
          return f;
        },
        Or: function () {
          return _;
        },
        jt: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(44315),
        o = n(246364),
        c = n(460562),
        u = n(510601),
        d = n(981631),
        h = n(355355);
      function p(e, t) {
        return (0, i.jsx)(a.NumberBadge, { count: e, color: t });
      }
      function f() {
        return (0, i.jsx)(a.IconBadge, {
          icon: (0, a.makeIconCompat)(c.Z),
          disableColor: !0,
          className: h.unavailableBadge,
        });
      }
      function _(e) {
        let t,
          {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: r,
            liveStage: s,
            activeEvent: o,
            activity: c,
            gaming: d,
          } = e,
          h = (0, u.vg)("Guild Icon", !1);
        if (
          (!o &&
            !s &&
            !c &&
            !l &&
            !i &&
            d &&
            u.ZP.trackExposure({ location: "Guild Icon" }),
          o)
        )
          t = a.CalendarIcon;
        else if (s) t = a.StageIcon;
        else if (c) t = a.ActivitiesIcon;
        else if (l) t = a.ScreenIcon;
        else if (i) t = a.VideoIcon;
        else if (d && h) t = a.GameControllerIcon;
        else {
          if (!n) return null;
          t = a.VoiceNormalIcon;
        }
        return g({ icon: t, isCurrentUserConnected: r });
      }
      function m(e) {
        let { guildJoinRequestStatus: t } = e,
          [n, i] = (function (e) {
            switch (e) {
              case o.wB.SUBMITTED:
                return [void 0, a.ClockIcon];
              case o.wB.REJECTED:
                return [d.Ilk.RED_400, a.XSmallIcon];
              case o.wB.APPROVED:
                return [d.Ilk.GREEN_360, a.CheckmarkLargeIcon];
              default:
                return [void 0, a.PencilIcon];
            }
          })(t);
        return g({ icon: i, color: n });
      }
      function g(e) {
        let { icon: t, color: n, isCurrentUserConnected: l } = e,
          o = null == n ? { disableColor: !0 } : { color: (0, s.Lq)(n) };
        return (0, i.jsx)(a.IconBadge, {
          icon: t,
          className: r()(h.iconBadge, { [h.isCurrentUserConnected]: l }),
          ...o,
        });
      }
    },
    654142: function (e, t, n) {
      n(653041), n(47120), n(724458);
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(239091),
        s = n(749210),
        o = n(905423),
        c = n(664915),
        u = n(888369),
        d = n(430824),
        h = n(823379),
        p = n(179809),
        f = n(652376),
        _ = n(981631);
      t.Z = l.memo(function (e) {
        let { folderNode: t, ...m } = e,
          { id: g, name: C, color: I, children: E } = t,
          N = E.map((e) => e.id),
          S = (0, o.Z)((e) => e.guildId),
          x = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(g)),
          v = (function (e) {
            let t = e.children
                .map((e) => {
                  let t = e.id,
                    n = d.Z.getGuild(t);
                  return null != n ? n.name : null;
                })
                .filter(h.lm),
              n = 2 * _.dYL,
              i = [];
            for (let e of t)
              (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ""
              .concat(i.join(", "))
              .concat(i.length < t.length ? ", ..." : "");
          })(t),
          T = (0, f.Z)(t),
          { mentionCount: Z, unread: A } = (0, r.cj)([u.default], () => ({
            mentionCount: N.map((e) => u.default.getMentionCount(e)).reduce(
              (e, t) => e + t,
              0,
            ),
            unread: N.some((e) => u.default.hasUnread(e)),
          })),
          b = l.useCallback(() => {
            s.Z.toggleGuildFolderExpand(g);
          }, [g]),
          R = l.useCallback(
            (e) => {
              (0, a.jW)(e, async () => {
                let { default: e } = await n.e("52590").then(n.bind(n, 205784));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    folderId: g,
                    folderName: C,
                    folderColor: I,
                    unread: A || Z > 0,
                  });
              });
            },
            [g, C, I, A, Z],
          );
        return (0, i.jsx)(p.Z, {
          ...m,
          folderNode: t,
          expanded: x,
          selected: null != S && N.includes(S),
          mentionCount: Z,
          unread: A,
          mediaState: T,
          defaultFolderName: v,
          onExpandCollapse: b,
          onContextMenu: R,
        });
      });
    },
    695301: function (e, t, n) {
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(746916),
        o = n(965638),
        c = n(905423),
        u = n(486472),
        d = n(888369),
        h = n(430824),
        p = n(451478),
        f = n(61634),
        _ = n(325257),
        m = n(941823);
      t.Z = l.memo(function (e) {
        let { guildNode: t, lowerBadge: n } = e,
          g = t.id,
          C = (0, r.e7)([h.Z], () => h.Z.getGuild(g)),
          I = (0, s.E)(C),
          E = (0, r.e7)([p.Z], () => p.Z.isFocused()),
          N = (0, r.e7)([u.Z], () => u.Z.isUnavailable(g)),
          S = (0, c.Z)((e) => e.guildId),
          x = (0, f.Z)(g),
          { badge: v, unread: T } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(g),
            unread: d.default.hasUnread(g),
          })),
          Z = (0, o.I)(C) && 0 === v,
          A = l.useMemo(
            () =>
              null != n
                ? n
                : Z
                  ? (0, i.jsx)("div", {
                      className: m.pauseBackground,
                      children: (0, i.jsx)(a.PauseIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: m.pause,
                        width: 10,
                        height: 10,
                      }),
                    })
                  : null,
            [n, Z],
          );
        return (0, i.jsx)(_.Z, {
          ...e,
          guild: C,
          unavailable: N,
          animatable: E,
          selected: S === g,
          badge: v,
          lowerBadge: A,
          unread: T,
          mediaState: x,
          guildJoinRequestStatus: I,
        });
      });
    },
    836040: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(451478),
        s = n(727258),
        o = n(325257),
        c = n(981631);
      function u(e) {
        let { guild: t, invite: n } = e,
          u = l.useMemo(() => (0, s.Mg)(t.id), [t.id]),
          d = (0, r.e7)([a.Z], () => a.Z.isFocused());
        return null == t
          ? null
          : (0, i.jsx)(o.Z, {
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
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(442837),
        r = n(239091),
        a = n(246364),
        s = n(937111),
        o = n(914010),
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
      function f(e) {
        let { guildNode: t } = e,
          n = t.id,
          r = (0, l.e7)([s.Z], () => s.Z.getRequest(n)),
          f = (0, l.e7)([s.Z], () => s.Z.getJoinRequestGuild(n), [n]),
          _ = (0, l.e7)([c.Z], () => c.Z.isFocused()),
          m = (0, l.e7)([o.Z], () => o.Z.getGuildId());
        return null == f
          ? null
          : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: f,
              animatable: _,
              draggable: !1,
              selected: n === m,
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
          return E;
        },
      }),
        n(47120),
        n(653041);
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(110924),
        o = n(693546),
        c = n(863249),
        u = n(937111),
        d = n(914010),
        h = n(289090),
        p = n(727258),
        f = n(234383),
        _ = n(179809),
        m = n(773182),
        g = n(588275),
        C = n(689938),
        I = n(496657);
      function E(e) {
        let { onActivate: t } = e,
          [n, E] = l.useState(!1),
          N = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
          S = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
          x = (0, f.Z)(),
          v = (0, s.Z)(N),
          T = l.useMemo(() => {
            let e = (0, p.qQ)({
              folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
              folderName: C.Z.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
              expanded: n,
              guildIds: [],
            });
            for (let t of x) e.children.push((0, p.Mg)(t, e.id));
            return e;
          }, [x, n]);
        l.useEffect(() => {
          n && !S && o.Z.fetchRequestToJoinGuilds();
        }, [n, S]);
        let Z = null != N && x.includes(N);
        return (l.useEffect(() => {
          !n && Z && v !== N && E(!0);
        }, [n, Z, v, N]),
        0 === x.length)
          ? null
          : (0, i.jsx)(m.TH, {
              onActivate: t,
              children: (0, i.jsx)(_.Z, {
                folderNode: T,
                expanded: n,
                useCircleMask: !n && !Z,
                selected: Z,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: () => {
                  E(!n), c.ZP.clearCoachmark();
                },
                folderIconContent: (0, i.jsx)(a.HourglassIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 24,
                  height: 24,
                  className: I.pendingIcon,
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
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(905423),
        s = n(430824),
        o = n(451478),
        c = n(727258),
        u = n(61634),
        d = n(325257);
      function h(e) {
        let { guildId: t } = e,
          n = l.useMemo(() => (0, c.Mg)(t), [t]),
          h = (0, r.e7)([s.Z], () => s.Z.getGuild(t)),
          p = (0, r.e7)([o.Z], () => o.Z.isFocused()),
          f =
            t ===
            (0, a.Z)((e) => {
              let { guildId: t } = e;
              return t;
            }),
          _ = (0, u.Z)(t);
        return null == h
          ? null
          : (0, i.jsx)(d.Z, {
              guildNode: n,
              guild: h,
              animatable: p,
              selected: f,
              draggable: !1,
              mediaState: _,
            });
      }
    },
    652376: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(470079),
        l = n(442837),
        r = n(623633),
        a = n(199902),
        s = n(19780),
        o = n(979651);
      function c(e) {
        var t;
        let n = (0, l.e7)([s.Z], () => s.Z.getGuildId()),
          c = e.children.map((e) => e.id),
          u = null != n && c.includes(n),
          d = !1,
          h = !1,
          p = !1,
          f = (0, l.e7)([s.Z], () => s.Z.getChannelId()),
          _ = null === (t = (0, r.Z)()) || void 0 === t ? void 0 : t.guild_id,
          m = null != _ && c.includes(_),
          g = (0, l.e7)([o.Z], () => null != f && o.Z.hasVideo(f), [f]),
          C = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
        return (
          u &&
            ((d = !g),
            (h = g),
            (p = null != C && null != C.guildId && c.includes(C.guildId))),
          i.useMemo(
            () => ({
              audio: d,
              video: h,
              screenshare: p,
              liveStage: m,
              isCurrentUserConnected: u,
            }),
            [d, h, p, m, u],
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
      var i = n(735250);
      n(470079);
      var l = n(481060);
      function r(e) {
        return (0, i.jsx)(l.NumberBadge, { count: e });
      }
      n(460562), n(64056);
    },
    688438: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(273387),
        r = n(975984),
        a = n(306680),
        s = n(709054);
      function o(e) {
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
              return t > s.default.extractTimestamp(n);
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
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(554747),
        o = n(434479),
        c = n(593364),
        u = n(703656),
        d = n(944486),
        h = n(147754),
        p = n(688438),
        f = n(981631),
        _ = n(689938);
      let m = [
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
              ? _.Z.Messages.GUILD_EVENTS_PLURAL.format({ number: t })
              : _.Z.Messages.GUILD_EVENTS;
          },
          handler: (e) =>
            (0, a.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                n.e("22347"),
                n.e("56236"),
                n.e("7029"),
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
          getName: () => _.Z.Messages.HUB_SIDEBAR_JOIN_SERVERS,
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
          getName: () => _.Z.Messages.HUB_SIDEBAR_ADD_SERVERS,
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
          getName: () => _.Z.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
          handler: (e, t) =>
            (0, a.openModalLazy)(async () => {
              let { default: l } = await Promise.all([
                n.e("7654"),
                n.e("85683"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  guild: e,
                  channel: t,
                  source: f.t4x.HUB_SIDEBAR,
                });
            }),
        },
      ];
      t.Z = (e) => {
        let { guild: t, channel: n } = e,
          a = (0, s.ZP)(t.id);
        l.useEffect(() => {
          h.Z.trackExposure({ guildId: t.id, location: "543af8_1" });
        }, [t.id]);
        let { showHubEventsList: u } = h.Z.useExperiment(
            { guildId: t.id, location: "543af8_2" },
            { autoTrackExposure: !1 },
          ),
          f = (0, r.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
          _ = l.useMemo(() => ({ numEvents: a.length }), [a.length]),
          g = (0, p.t)(n);
        return (0, i.jsx)(i.Fragment, {
          children: m.map((e) => {
            let { key: l, getName: r, handler: a, renderIcon: s } = e;
            if (!u && "EVENTS" === l) return null;
            let d = "".concat(l, "-").concat(t.id);
            return (0, i.jsx)(
              o.m,
              {
                id: d,
                renderIcon: s,
                text: r(_),
                selected: f && "JOIN_SERVERS" === l,
                onClick: null != n ? () => a(t, n) : void 0,
                trailing: "JOIN_SERVERS" === l && g > 0 ? (0, c.N)(g) : null,
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
          return D;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l,
        r = n(735250),
        a = n(470079),
        s = n(120356),
        o = n.n(s),
        c = n(512722),
        u = n.n(c),
        d = n(392711),
        h = n.n(d),
        p = n(748780),
        f = n(442837),
        _ = n(215569),
        m = n(481060),
        g = n(612226),
        C = n(951483),
        I = n(714338),
        E = n(607070),
        N = n(585483),
        S = n(557177),
        x = n(264549),
        v = n(981631),
        T = n(689938),
        Z = n(126332);
      function A(e, t, n) {
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
      let b = {
        UP: h().throttle(() => (0, S.GN)("ddr-up"), 100),
        DOWN: h().throttle(() => (0, S.GN)("ddr-down"), 100),
        LEFT: h().throttle(() => (0, S.GN)("ddr-left"), 100),
        RIGHT: h().throttle(() => (0, S.GN)("ddr-right"), 100),
      };
      function R(e) {
        switch (e.keyCode) {
          case v.yXg.ARROW_UP:
            return "UP";
          case v.yXg.ARROW_DOWN:
            return "DOWN";
          case v.yXg.ARROW_LEFT:
            return "LEFT";
          case v.yXg.ARROW_RIGHT:
            return "RIGHT";
          default:
            return null;
        }
      }
      let M = [
        g.Q2.MESSAGE,
        g.Q2.NAVIGATION,
        g.Q2.VOICE_AND_VIDEO,
        g.Q2.CHAT,
        g.Q2.MISCELLANEOUS,
      ];
      function L(e) {
        let { showBackdrop: t } = e;
        return (0, r.jsx)("div", {
          className: o()(Z.backdrop, { [Z.show]: t }),
        });
      }
      function P() {
        let e = a.useMemo(
          () =>
            h()((0, g.Rv)())
              .groupBy((e) => e.group)
              .value(),
          [],
        );
        return (0, r.jsx)("div", {
          className: Z.keyboardShortcutList,
          children: M.map((t) => {
            let n = e[t],
              i = (0, g.UD)(t),
              l = (0, g.U6)(t);
            return (0, r.jsxs)(
              "div",
              {
                className: Z.keyboardShortcutSection,
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        children: i,
                      }),
                      null != l &&
                        (0, r.jsx)(m.Text, {
                          className: Z.keybindGroupDescription,
                          variant: "text-sm/normal",
                          children: l,
                        }),
                    ],
                  }),
                  (0, r.jsx)(
                    "div",
                    {
                      className: Z.keyboardShortcutListGroup,
                      children: n.map((e, t) => {
                        var n;
                        return (null === (n = e.predicate) || void 0 === n
                          ? void 0
                          : n.call(e)) === !1
                          ? null
                          : (0, r.jsxs)(
                              "div",
                              {
                                className: o()(Z.keybindGroup),
                                children: [
                                  (0, r.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: e.description,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "keybind-shortcuts",
                                    children: e.binds.map((e) =>
                                      (0, r.jsx)(
                                        m.KeyCombo,
                                        {
                                          className: Z.keybindKey,
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
      class O extends a.PureComponent {
        componentDidMount() {
          (this.lastInputedKeys = []),
            N.S.subscribe(v.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            N.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, {
              capture: !0,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
        }
        componentWillUnmount() {
          N.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            N.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
            className: Z.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
              (0, r.jsxs)(m.H, {
                className: Z.modalTitle,
                children: [
                  (0, r.jsx)("div", {
                    className: Z.content,
                    children: T.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE,
                  }),
                  (0, r.jsx)(m.KeyCombo, { shortcut: "mod+/" }),
                ],
              }),
              (0, r.jsx)("div", {
                className: Z.modalSubtitle,
                children: T.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE,
              }),
              (0, r.jsxs)("div", {
                className: Z.ddrArrows,
                children: [
                  (0, r.jsx)(y, {
                    arrow: "LEFT",
                    isActive: n,
                    className: Z.left,
                    children: "left",
                  }),
                  (0, r.jsx)(y, {
                    arrow: "DOWN",
                    isActive: t,
                    className: Z.down,
                    children: "down",
                  }),
                  (0, r.jsx)(y, {
                    arrow: "UP",
                    isActive: e,
                    className: Z.up,
                    children: "up",
                  }),
                  (0, r.jsx)(y, {
                    arrow: "RIGHT",
                    isActive: i,
                    className: Z.right,
                    children: "right",
                  }),
                ],
              }),
              (0, r.jsx)(m.AdvancedScrollerAuto, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(m.HeadingLevel, {
                  children: (0, r.jsx)(P, {}),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            A(this, "state", {
              UP: !1,
              DOWN: !1,
              LEFT: !1,
              RIGHT: !1,
              opacity: new p.Z.Value(1),
              scaleX: new p.Z.Value(1),
              scaleY: new p.Z.Value(0),
              animating: !1,
            }),
            A(this, "scrollerRef", a.createRef()),
            A(this, "lastInputedKeys", []),
            A(this, "scrollPageUp", () => {
              let e = this.scrollerRef.current;
              u()(null != e, "Scroller is pagedUp when not mounted"),
                e.scrollPageUp({ animate: !0 });
            }),
            A(this, "scrollPageDown", () => {
              let e = this.scrollerRef.current;
              u()(null != e, "Scroller is pagedDown when not mounted"),
                e.scrollPageDown({ animate: !0 });
            }),
            A(this, "arrowUp", (e) => {
              let { direction: t } = e;
              this.setState({ [t]: !1 });
            }),
            A(this, "arrowDown", (e) => {
              let { direction: t } = e;
              b[t](), this.setState({ [t]: !0 });
            }),
            A(this, "componentWillLeave", (e) => {
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
            A(this, "toggleOpacity", () => {
              1 === this.state.opacity._value
                ? this.state.opacity.setValue(0)
                : this.state.opacity.setValue(1);
            }),
            A(this, "getStyles", () => ({
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
            A(this, "handleKeyDown", (e) => {
              if (
                (this.lastInputedKeys.push(e.keyCode),
                (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
                this.lastInputedKeys[0] === v.yXg.H &&
                  this.lastInputedKeys[1] === v.yXg.H &&
                  this.lastInputedKeys[2] === v.yXg.ARROW_RIGHT &&
                  this.lastInputedKeys[3] === v.yXg.N &&
                  this.lastInputedKeys[4] === v.yXg.K &&
                  this.props.activateRagingDemon(),
                this.props.keyboardModeEnabled)
              )
                return;
              let t = R(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowDown({ direction: t }));
            }),
            A(this, "handleKeyUp", (e) => {
              if (this.props.keyboardModeEnabled) return;
              let t = R(e);
              null !== t &&
                (e.stopPropagation(),
                e.preventDefault(),
                this.arrowUp({ direction: t }));
            }),
            A(this, "onArrowClick", (e) => {
              this.arrowDown({ direction: e });
            });
        }
      }
      function y(e) {
        let { isActive: t, arrow: n, className: i, children: l } = e,
          [s, c] = a.useState(t),
          u = a.useCallback(() => {
            b[n](), c(!0);
          }, [n]);
        return (
          a.useEffect(() => {
            if (s) {
              let e = setTimeout(() => c(!1), 500);
              return () => clearTimeout(e);
            }
          }, [s]),
          (0, r.jsx)(m.Clickable, {
            onClick: u,
            className: o()(Z.arrow, i, { [Z.active]: t || s }),
            children: l,
          })
        );
      }
      function D(e) {
        let { transitionState: t, onClose: n } = e,
          [i, l] = a.useState(!1),
          [s, c] = a.useState(!1),
          u = a.useMemo(() => (__OVERLAY__ ? (0, C.Zg)() : (0, g.Rv)()), []),
          { keyboardModeEnabled: d, useReducedMotion: h } = (0, f.cj)(
            [E.Z],
            () => ({
              keyboardModeEnabled: E.Z.keyboardModeEnabled,
              useReducedMotion: E.Z.useReducedMotion,
            }),
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(L, { showBackdrop: s }),
            (0, r.jsx)(m.ModalRoot, {
              className: o()(Z.noBackground, { [Z.noShadow]: i }),
              size: m.ModalSize.DYNAMIC,
              "aria-label": T.Z.Messages.KEYBINDS,
              transitionState: t,
              children: (0, r.jsx)(_.W, {
                component: "div",
                children: i
                  ? (0, r.jsx)(
                      x.Z,
                      {
                        handleDemonClose: function () {
                          c(!1), setTimeout(n, 500);
                        },
                      },
                      "raging-demo",
                    )
                  : (0, r.jsx)(
                      O,
                      {
                        content: u,
                        keyboardModeEnabled: d,
                        activateRagingDemon: function () {
                          !h && (I.Z.disable(), l(!0), c(!0));
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
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(570140),
        a = n(317770),
        s = n(175281),
        o = n(285371);
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
          (0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), { modalKey: o.J });
        }
        hideKeyboardShortcuts() {
          (0, l.closeModal)(o.J);
        }
      }
      t.Z = new c();
    },
    264549: function (e, t, n) {
      n(653041), n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(392711),
        o = n.n(s),
        c = n(714338),
        u = n(585483),
        d = n(981631),
        h = n(458672);
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
      let f = { PRIMARY: () => !0, SECONDARY: () => !0 },
        _ = () =>
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
      class m extends l.PureComponent {
        componentDidMount() {
          this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
              this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3)),
            f.PRIMARY();
        }
        componentDidUpdate(e, t) {
          this.state.renderSecondary && !t.renderSecondary && f.SECONDARY();
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
            s = [this.renderPrimary()];
          return (
            e && s.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
              className: a()(h.container, { [h.animate]: l }),
              style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(r, ")"),
              },
              children: s,
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
              scale: o().random(0.6, 1, !0),
              offsetX: o().random(0, 140, !1) - 70,
              offsetY: o().random(0, 140, !1) - 70,
            }),
            p(this, "done", () => {
              this.props.onAnimationComplete(this.props.componentId);
            });
        }
      }
      let g = 240;
      class C extends l.PureComponent {
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
                  if (t.type !== m) return !1;
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
                    m,
                    {
                      componentId: l,
                      top: o().random(n - 100, n + 100, !1),
                      left: o().random(t - 200, t + 200, !1),
                      onAnimationComplete: this.removeExplosion,
                    },
                    l,
                  ),
                ),
                  this.setTimeout(this.createExplosion, g),
                  this.setState({ explosions: this.state.explosions + 1 });
              } else this.setTimeout(this.addSymbol, 750);
            }),
            p(this, "addSymbol", () => {
              (this.children = [(0, i.jsx)(_, {}, "symbol")]),
                this.forceUpdate(),
                this.setTimeout(this.delayedClose, 3e3);
            }),
            p(this, "delayedClose", () => {
              this.props.handleDemonClose();
            });
        }
      }
      t.Z = C;
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
        s = n(974543),
        o = n(250889);
      function c(e) {
        return (0, l.Z)(e)
          ? o.H + e.name
          : (0, i.Z)(e) && null != e.party && null != e.party.id
            ? a.r9.id
            : (0, r.Z)(e) && null != e.url
              ? s._ + e.url
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
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(261600),
        r = n(157925),
        a = n(534255);
      let s = { [r.gD]: new l.U() };
      function o(e) {
        var t;
        let n = e.application_id;
        if (null == n) return;
        let i = s[n];
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
        let l = s[n];
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
        let i = s[n];
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
          return o;
        },
        a: function () {
          return c;
        },
      });
      var i = n(442837),
        l = n(480294),
        r = n(451478),
        a = n(817915),
        s = n(981631);
      function o() {
        let e = (0, i.e7)([r.Z], () => r.Z.windowSize().width);
        return (function (e, t) {
          return e > a.t && t;
        })(
          e,
          (0, i.e7)([l.Z], () => l.Z.hasConsented(s.pjP.PERSONALIZATION)),
        );
      }
      function c() {
        let e = r.Z.windowSize().width;
        return (function (e, t) {
          return e > a.t && t;
        })(e, l.Z.hasConsented(s.pjP.PERSONALIZATION));
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
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(686546),
        o = n(904297);
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
            tooltipClassName: f,
            onMouseEnter: _,
            onMouseLeave: m,
            "aria-label": g,
            "aria-checked": C,
            role: I,
            tooltipColor: E,
            tooltipForceOpen: N,
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
        return (0, i.jsx)(a.Tooltip, {
          tooltipClassName: f,
          text: t,
          "aria-label": g,
          color: E,
          forceOpen: N,
          children: (e) => {
            let { onClick: t, onMouseEnter: d, onMouseLeave: h, ...f } = e;
            return (0, i.jsxs)(a.Button, {
              ...f,
              look: a.Button.Looks.BLANK,
              size: a.Button.Sizes.NONE,
              disabled: u,
              innerClassName: p,
              wrapperClassName: o.button,
              className: r()(o.button, { [o.disabled]: u, [o.enabled]: !u }),
              onClick: (e) => {
                null != t && t(), null != c && c(e);
              },
              onMouseEnter: () => {
                null == d || d(), null == _ || _();
              },
              onMouseLeave: () => {
                null == h || h(), null == m || m();
              },
              onContextMenu: l,
              role: I,
              "aria-checked": C,
              children: [
                null != n
                  ? (0, i.jsx)(s.ZP, {
                      width: 20,
                      height: 20,
                      mask: s.ZP.Masks.PANEL_BUTTON,
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
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(874757);
      function o(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(a.Text, {
          color: "none",
          className: r()(s.subtext, n),
          variant: "text-xs/normal",
          children: t,
        });
      }
    },
    115530: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(686182);
      function o(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(a.Text, {
          color: "none",
          className: r()(s.title, n),
          variant: "text-sm/normal",
          children: t,
        });
      }
    },
    840780: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(442837),
        u = n(481060),
        d = n(988298),
        h = n(475179),
        p = n(925549),
        f = n(438139),
        _ = n(730749),
        m = n(607070),
        g = n(566620),
        C = n(317381),
        I = n(620662),
        E = n(513202),
        N = n(835473),
        S = n(933557),
        x = n(194082),
        v = n(311352),
        T = n(436774),
        Z = n(594190),
        A = n(925329),
        b = n(810568),
        R = n(168524),
        M = n(382182),
        L = n(74299),
        P = n(914923),
        O = n(165393),
        y = n(989941),
        D = n(803647),
        j = n(690221),
        w = n(231664),
        U = n(759198),
        G = n(131704),
        k = n(199902),
        B = n(314897),
        V = n(592125),
        H = n(984933),
        F = n(430824),
        W = n(131951),
        z = n(496675),
        Y = n(158776),
        K = n(699516),
        q = n(944486),
        Q = n(594174),
        X = n(449224),
        J = n(626135),
        $ = n(358085),
        ee = n(870569),
        et = n(345243),
        en = n(115530),
        ei = n(981631),
        el = n(918559),
        er = n(689938),
        ea = n(168851);
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
      let eo = (0, f.Z)(function (e) {
        let { message: t } = e;
        return (0, i.jsx)(et.Z, { children: t });
      });
      class ec extends l.PureComponent {
        isJoinableActivity() {
          let { application: e, activity: t, embeddedActivity: n } = this.props;
          return (
            null != e &&
            (null != n
              ? n.applicationId === e.id
              : null != t &&
                t.application_id === e.id &&
                t.type === ei.IIU.PLAYING &&
                (0, I.Z)(t, ei.xjy.JOIN))
          );
        }
        renderGoLiveButton() {
          let e, t, n, l;
          let {
            canGoLive: r,
            guildId: a,
            isStreaming: s,
            channel: o,
            canStream: c,
            runningGame: d,
            embeddedActivity: h,
          } = this.props;
          return (null != d || null == h) && (s || (r && null != d))
            ? (s
                ? ((e = !1),
                  (t = this.handleClickStopStreamingButton),
                  (n = u.ScreenXIcon),
                  (l = er.Z.Messages.STOP_STREAMING))
                : c
                  ? ((e = !1),
                    (t = this.handleClickGoLiveButton),
                    (n = u.ScreenArrowIcon),
                    (l =
                      null != d
                        ? er.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format(
                            { game: d.name },
                          )
                        : er.Z.Messages.ACTIVITY_PANEL_GO_LIVE))
                  : ((e = !0),
                    (t = null),
                    (n = u.ScreenArrowIcon),
                    (l =
                      null != o && (0, G.vd)(o.type)
                        ? er.Z.Messages
                            .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE
                        : null != a
                          ? er.Z.Messages
                              .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD
                          : er.Z.Messages
                              .ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
              (0, i.jsx)("div", {
                className: ea.panelButtonContainer,
                children: (0, i.jsx)(ee.Z, {
                  tooltipText: l,
                  disabled: e,
                  onClick: t,
                  icon: n,
                }),
              }))
            : null;
        }
        renderInviteButton() {
          let { embeddedActivity: e } = this.props;
          return this.isJoinableActivity() && null == e
            ? (0, i.jsx)(ee.Z, {
                tooltipText: er.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                onClick: this.handleClickInviteButton,
                icon: u.GroupPlusIcon,
                iconForeground: ea.__invalid_actionIcon,
              })
            : null;
        }
        renderLeaveEmbeddedActivityButton() {
          let { embeddedActivity: e, channel: t } = this.props;
          return null == e || null == t
            ? null
            : (0, i.jsx)(ee.Z, {
                tooltipText: er.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                onClick: this.handleClickLeaveEmbeddedActivityButton(
                  e.applicationId,
                  t,
                ),
                icon: u.DoorExitIcon,
                iconForeground: ea.__invalid_actionIcon,
              });
        }
        renderSparkles() {
          let { useReducedMotion: e } = this.props;
          async function t() {
            let { default: e } = await n
              .e("5217")
              .then(n.t.bind(n, 801048, 19));
            return e;
          }
          return (0, i.jsx)("div", {
            className: ea.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
              importData: t,
              shouldAnimate: !e,
              className: ea.sparkles,
            }),
          });
        }
        renderActions() {
          let e = this.renderGoLiveButton(),
            t = this.renderInviteButton(),
            n = this.renderLeaveEmbeddedActivityButton(),
            l = this.renderClipsButton();
          return null == e && null == t && null == n
            ? null
            : (0, i.jsxs)("div", {
                className: ea.actions,
                children: [e, t, null == e ? n : l],
              });
        }
        getGameName() {
          let { runningGame: e, application: t } = this.props;
          return null != t
            ? t.name
            : null != e
              ? e.name
              : er.Z.Messages.STATUS_UNKNOWN;
        }
        renderGame() {
          let { isStreaming: e, application: t, runningGame: n } = this.props,
            l = this.getGameName();
          return (0, i.jsxs)("div", {
            className: ea.gameWrapper,
            children: [
              (0, i.jsxs)("div", {
                className: ea.gameIconWrapper,
                children: [
                  (0, i.jsx)(A.Z, {
                    className: ea.gameIcon,
                    game: t,
                    pid: null == n ? void 0 : n.pid,
                  }),
                  e
                    ? (0, i.jsx)(u.VideoIcon, {
                        size: "md",
                        color: "currentColor",
                        className: ea.liveBadge,
                      })
                    : null,
                ],
              }),
              (0, i.jsx)("div", {
                className: ea.info,
                children:
                  null != l
                    ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(eu, {
                          name: l,
                          applicationId: null == t ? void 0 : t.id,
                        }),
                      })
                    : null,
              }),
            ],
          });
        }
        renderScreenshare() {
          let {
              isStreaming: e,
              streamMetadata: t,
              streamQualityIndicator: n,
            } = this.props,
            { title: l, sanitizedTitle: r } = (0, P.Z)(t);
          return (0, i.jsxs)("div", {
            className: ea.gameWrapper,
            children: [
              e
                ? (0, i.jsx)(O.Z, { title: r })
                : (0, i.jsx)(x.ZP, {
                    look: x.ZP.Looks.GRAY,
                    size: x.ZP.Sizes.SMALL,
                    className: ea.liveIndicator,
                  }),
              (0, i.jsxs)("div", {
                className: ea.info,
                children: [
                  (0, i.jsx)(en.Z, { children: l }),
                  null != n &&
                    (0, i.jsxs)("div", {
                      className: ea.perksDemoContainer,
                      children: [
                        (0, i.jsx)(u.NitroWheelIcon, {
                          size: "xxs",
                          color: T.JX.PREMIUM_TIER_2,
                        }),
                        (0, i.jsx)(U.Z, {
                          className: ea.perksDemoText,
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
          let s = { start: n.connectedSince },
            o = r;
          null != a
            ? ((e = ei.Z5c.CHANNEL(a.id, l.id)),
              (o = "".concat(o, " / ").concat(a.name)))
            : (e = ei.Z5c.CHANNEL(ei.ME, l.id));
          let c = (0, i.jsx)(j.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(et.Z, { className: ea.channel, children: o }),
          });
          return (0, i.jsxs)("div", {
            className: ea.gameWrapper,
            children: [
              (0, i.jsx)(A.Z, {
                className: ea.gameIcon,
                game: t,
                size: A.Z.Sizes.SMALL,
              }),
              (0, i.jsxs)("div", {
                className: ea.info,
                children: [
                  (0, i.jsx)(j.Z, {
                    href: e,
                    onClick: this.handleApplicationLinkClick,
                    children: (0, i.jsx)(en.Z, {
                      className: ea.activityName,
                      children: t.name,
                    }),
                  }),
                  (0, G.Qm)(l.type) ? c : (0, i.jsx)(eo, { timestamps: s }),
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
            className: s,
          } = this.props;
          return l ||
            ((this.isJoinableActivity() || e) && (null != n || null != t))
            ? (0, i.jsx)("div", {
                className: a()(ea.panel, s),
                children: (0, i.jsxs)("div", {
                  className: ea.body,
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
          super(...e),
            es(this, "modalKey", void 0),
            es(this, "handleClickGoLiveButton", () => {
              let { guildId: e, channel: t } = this.props,
                l = null != t && (0, G.vd)(t.type) ? t : null,
                r = null != l ? l.getGuildId() : e;
              (0, u.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("46746"),
                  n.e("33641"),
                ]).then(n.bind(n, 60594));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    selectSource: !1,
                    guildId: r,
                    analyticsLocation: ei.Sbl.ACTIVITY_PANEL,
                  });
              }).then((e) => {
                null != e && (this.modalKey = e);
              });
            }),
            es(this, "handleClickStopStreamingButton", () => {
              let { stream: e } = this.props;
              (0, D.Z)(e);
            }),
            es(this, "handleClickInviteButton", () => {
              let { activity: e, analyticsContext: t } = this.props;
              o()(null != e, "Received null activity"),
                J.default.track(ei.rMx.OPEN_MODAL, {
                  type: "Send Join Invite",
                  application_id: e.application_id,
                  location: t.location,
                }),
                (0, d.h7)(e, !1);
            }),
            es(this, "handleClickLeaveEmbeddedActivityButton", (e, t) => () => {
              E.Z.leaveActivity({
                channelId: t.id,
                applicationId: e,
                showFeedback: !0,
              });
            }),
            es(this, "renderClipsButton", () => {
              let { stream: e } = this.props;
              return null == e ? null : (0, i.jsx)(v.Z, {});
            }),
            es(this, "handleApplicationLinkClick", () => {
              var e;
              let { channel: t, embeddedActivity: n } = this.props;
              o()(null != t, "Channel is null during navigation click"),
                o()(null != n, "Activity null during navigation click"),
                (0, G.vd)(t.type) &&
                  h.Z.selectParticipant(t.id, n.applicationId),
                p.Z.channelListScrollTo(
                  null !== (e = t.guild_id) && void 0 !== e ? e : ei.ME,
                  t.id,
                ),
                (0, G.Qm)(t.type) && (0, g.tg)(el.Ez.PANEL);
            });
        }
      }
      function eu(e) {
        let { name: t, applicationId: n } = e,
          l = (0, R.Z)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: b.m1.RtcPanel,
            trackEntryPointImpression: !0,
          });
        return (0, i.jsx)(u.Clickable, {
          onClick: l,
          className: a()(null != l && ea.clickableGameName),
          children: (0, i.jsx)(en.Z, { className: ea.gameName, children: t }),
        });
      }
      t.Z = (0, _.Z)(function (e) {
        var t;
        let { guildId: n, ...l } = e,
          r = (0, c.e7)([B.default], () => B.default.getId()),
          a = (0, c.e7)([Z.ZP, X.Z], () => (0, y.Z)(Z.ZP, X.Z)),
          s = (0, c.e7)([q.Z, V.Z], () =>
            V.Z.getChannel(q.Z.getVoiceChannelId()),
          ),
          o = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
          u = (0, c.e7)([V.Z], () => V.Z.getChannel(o)),
          d = (0, c.e7)([F.Z], () =>
            F.Z.getGuild(null == u ? void 0 : u.guild_id),
          ),
          [h, p] = (0, c.Wu)([k.Z], () => [
            k.Z.getCurrentUserActiveStream(),
            k.Z.getStreamerActiveStreamMetadata(),
          ]),
          f = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
          _ = (0, c.e7)([C.ZP], () =>
            null != u ? C.ZP.getSelfEmbeddedActivityForChannel(u.id) : null,
          ),
          g = (0, c.e7)([F.Z, z.Z, H.ZP], () =>
            null != s
              ? M.JL(s, F.Z, z.Z, !1)
              : null != n && M.h_(H.ZP.getChannels(n), F.Z, z.Z).length > 0,
          ),
          [I] = (0, N.Z)([
            null !==
              (t = (function () {
                if (null != p && null != p.id) return p.id;
                if (null != a && null != a.id) return a.id;
                if (null != _) return _.applicationId;
              })()) && void 0 !== t
              ? t
              : "",
          ]),
          E = (0, c.e7)([W.Z], () => (0, L.Z)(W.Z) && (0, $.isWindows)()),
          x = (0, c.e7)([Y.Z], () =>
            null != r
              ? Y.Z.findActivity(r, (e) => e.type === ei.IIU.PLAYING)
              : null,
          ),
          v = null != h && h.ownerId === r && h.state !== ei.jm8.ENDED,
          T = (0, c.e7)([Q.default, K.Z], () =>
            null != u ? (0, S.F6)(u, Q.default, K.Z) : void 0,
          ),
          A = (0, w.Z)();
        return (0, i.jsx)(ec, {
          ...l,
          guildId: n,
          canGoLive: E,
          activity: x,
          embeddedActivity: _,
          userId: r,
          runningGame: a,
          application: I,
          useReducedMotion: f,
          isStreaming: v,
          channel: u,
          canStream: g,
          stream: h,
          streamMetadata: p,
          channelName: T,
          guildForConnectedChannel: d,
          streamQualityIndicator: A,
        });
      });
    },
    269486: function (e, t, n) {
      n.d(t, {
        W: function () {
          return a;
        },
      });
      var i = n(544891),
        l = n(570140),
        r = n(981631);
      async function a() {
        try {
          l.Z.dispatch({ type: "CAMPAIGN_CONTEXT_FETCH" });
          let { body: e } = await i.tn.get({
            url: r.ANM.CAMPAIGN_CONTEXT,
            query: { campaigns: [r.$Dd.CASH_APP_PAY_AWARENESS] },
          });
          l.Z.dispatch({
            type: "CAMPAIGN_CONTEXT_FETCH_SUCCESS",
            campaignContexts: e,
          });
        } catch (e) {
          l.Z.dispatch({ type: "CAMPAIGN_CONTEXT_FETCH_FAILURE" });
        }
      }
    },
    970645: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var i = n(544891),
        l = n(570140),
        r = n(355467),
        a = n(853872),
        s = n(981631);
      async function o() {
        try {
          l.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
          let { body: e } = await i.tn.get({ url: s.ANM.CHECKOUT_RECOVERY }),
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
      function s() {
        return { lastTriggered: 0 };
      }
      let o = s();
      class c extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          o = { ...s(), ...(null != e ? e : {}) };
        }
        getState() {
          return o;
        }
        cooldownIsActive() {
          return o.lastTriggered >= Date.now() - 1728e5;
        }
      }
      a(c, "displayName", "HDStreamingViewerStore"),
        a(c, "persistKey", "HDStreamingViewerStore"),
        (t.Z = new c(r.Z, {
          LOGOUT: function () {
            o = s();
          },
          HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            o.lastTriggered = Date.now();
          },
        }));
    },
    841174: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
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
      var i = n(735250);
      n(470079);
      var l = n(392711),
        r = n(848246),
        a = n(481060),
        s = n(570140),
        o = n(904245),
        c = n(317770),
        u = n(100527),
        d = n(358221),
        h = n(963249),
        p = n(93127),
        f = n(361291),
        _ = n(592125),
        m = n(430824),
        g = n(594174),
        C = n(295226),
        I = n(626135),
        E = n(74538),
        N = n(557457),
        S = n(269486),
        x = n(514851),
        v = n(970645),
        T = n(30684),
        Z = n(514701),
        A = n(6242),
        b = n(467721),
        R = n(757692),
        M = n(114064),
        L = n(933843),
        P = n(281494),
        O = n(276444),
        y = n(684259),
        D = n(937579),
        j = n(1163),
        w = n(841174),
        U = n(522558),
        G = n(879463),
        k = n(822070),
        B = n(520540),
        V = n(11352),
        H = n(474936),
        F = n(981631),
        W = n(354459),
        z = n(37113),
        Y = n(689938);
      function K(e, t, n) {
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
      class q extends c.Z {
        _initialize() {
          __OVERLAY__
            ? s.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (s.Z.subscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              s.Z.subscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              s.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              s.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              s.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCampaignContext,
              ),
              s.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              s.Z.subscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              s.Z.subscribe("POST_CONNECTION_OPEN", this._trackSkyLoadExposure),
              s.Z.subscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              s.Z.subscribe(
                "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                this.maybeShowHDStreamingViewerUpsellMessage,
              ));
        }
        _terminate() {
          __OVERLAY__
            ? s.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_OPEN",
                this._handlePremiumPaymentModalOpen,
              )
            : (s.Z.unsubscribe(
                "PREMIUM_PAYMENT_MODAL_CLOSE",
                this._handlePremiumPaymentModalClose,
              ),
              s.Z.unsubscribe(
                "MESSAGE_LENGTH_UPSELL",
                this.handleMessageLengthUpsell,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchPremiumOffer,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCheckoutRecovery,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchCampaignContext,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._maybeFetchUserAffinities,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackCustomNotificationSoundsExposure,
              ),
              s.Z.unsubscribe(
                "POST_CONNECTION_OPEN",
                this._trackSkyLoadExposure,
              ),
              s.Z.unsubscribe(
                "RTC_CONNECTION_STATE",
                this.maybeShowHDStreamingPerksDemoPostUpsellModal,
              ),
              s.Z.unsubscribe(
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
          let e = g.default.getCurrentUser();
          if (O.Z.getIsFetchingReferralIncentiveEligibility() || !(0, E.I5)(e))
            return;
          let t = { location: "PremiumManager" },
            n = { autoTrackExposure: !1 };
          if (
            !!B.g.getCurrentConfig(t, n).enabled &&
            !G.eP.getCurrentConfig(t, n).enabled
          )
            k.$.getCurrentConfig(t, n).enabled && (0, P.bq)();
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
              s.Z.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: n,
                followupSKUInfo: i,
                analyticsObject: l,
              });
          });
        }
        maybeShowHDStreamingPerksDemoPostUpsellModal(e) {
          let { enabled: t } = j.Z.getCurrentConfig(
            { location: "PremiumManager" },
            { autoTrackExposure: !1 },
          );
          if (!t || e.state !== F.hes.DISCONNECTED || e.willReconnect) return;
          let n = _.Z.getChannel(e.channelId);
          if (null == n) return;
          let i = M.Z.hasActiveDemo(r.q.STREAM_HIGH_QUALITY);
          if (
            (i &&
              s.Z.dispatch({
                type: "PREMIUM_PERKS_DEMO_COMPLETE",
                perkType: r.q.STREAM_HIGH_QUALITY,
              }),
            !i)
          )
            return;
          let { resolution: l, fps: a } = f.Z.getState();
          !(0, L.mc)(l, a) && (0, w.Z)(n.guild_id);
        }
        constructor(...e) {
          super(...e),
            K(this, "_premiumPaymentModalCloseResolve", null),
            K(this, "_premiumPaymentModalCloseReject", null),
            K(this, "_maybeFetchPremiumOffer", async () => {
              let e = g.default.getCurrentUser();
              if (null != e && e.verified) {
                let t = !(0, E.I5)(e) && C.Z.shouldFetchOffer();
                await (0, D.T)("PremiumManager", t);
              }
              s.Z.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
            }),
            K(this, "_maybeFetchCheckoutRecovery", async () => {
              let e = g.default.getCurrentUser();
              null != e &&
                e.verified &&
                !(0, E.I5)(e) &&
                T.Z.shouldFetchCheckoutRecovery() &&
                (await (0, v.o)());
            }),
            K(this, "_maybeFetchCampaignContext", async () => {
              let e = g.default.getCurrentUser();
              null != e &&
                e.verified &&
                x.Z.shouldFetchCampaignContext() &&
                (await (0, S.W)());
            }),
            K(this, "_maybeFetchUserAffinities", () => {
              let { enabled: e } = U.w.getCurrentConfig(
                { location: "PremiumManager" },
                { autoTrackExposure: !1 },
              );
              e && (0, p.W)();
            }),
            K(this, "_trackCustomNotificationSoundsExposure", () => {
              V.Y.trackExposure({ location: "PremiumManager" });
            }),
            K(this, "_trackSkyLoadExposure", () => {
              y.Z.trackExposure({ location: "PremiumManager" });
            }),
            K(this, "_handlePremiumPaymentModalOpen", (e) => {
              (0, h.Z)({
                ...e,
                analyticsLocations: [u.Z.OVERLAY],
                onClose: (e) => {
                  s.Z.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                    didSucceed: e,
                  });
                },
              });
            }),
            K(this, "_handlePremiumPaymentModalClose", (e) => {
              let { didSucceed: t } = e;
              t && null != this._premiumPaymentModalCloseResolve
                ? this._premiumPaymentModalCloseResolve()
                : null != this._premiumPaymentModalCloseReject &&
                  this._premiumPaymentModalCloseReject(),
                (this._premiumPaymentModalCloseResolve = null),
                (this._premiumPaymentModalCloseReject = null);
            }),
            K(this, "maybeShowHDStreamingViewerUpsellMessage", (e) => {
              let t = g.default.getCurrentUser();
              (null == t ? void 0 : t.id) !== e.senderUserId &&
                this._maybeSendViewerUpsellMessage(e.channelId, e.guildId, t);
            }),
            K(
              this,
              "_maybeSendViewerUpsellMessage",
              (0, l.debounce)((e, t, n) => {
                var i, l;
                let r = d.Z.getSelectedParticipant(e),
                  a = (0, R.o)(r, n),
                  { sendNitroMessage: s } = (0, A.TD)(a),
                  c =
                    null !==
                      (l =
                        null === (i = m.Z.getGuild(t)) || void 0 === i
                          ? void 0
                          : i.premiumTier) && void 0 !== l
                      ? l
                      : F.Eu4.NONE;
                if (
                  b.Z.cooldownIsActive() ||
                  !s ||
                  c >= F.Eu4.TIER_2 ||
                  (null == r ? void 0 : r.type) !== W.fO.STREAM ||
                  (null == r ? void 0 : r.id) === (null == n ? void 0 : n.id) ||
                  null == r.maxResolution ||
                  null == r.maxFrameRate
                )
                  return;
                Z.I();
                let u =
                  Y.Z.Messages.STREAM_PREMIUM_VIEWER_UPSELL_MESSAGE.format({
                    nickname: r.userNick,
                    resolution: (0, z.o6)(r.maxResolution.height),
                    fps: (0, N.bp)(r.maxFrameRate),
                  });
                o.Z.sendNitroSystemMessage(e, u),
                  I.default.track(F.rMx.PREMIUM_UPSELL_MESSAGE_SENT, {
                    type: H.cd.HD_STREAMING_VIEWER_UPSELL,
                    location_section:
                      null != t ? F.jXE.TEXT_IN_VOICE : F.jXE.CHANNEL_TEXT_AREA,
                    location_object: F.qAy.MESSAGE,
                    guild_id: t,
                  });
              }, 200),
            );
        }
      }
      t.Z = new q();
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
        l = n(735250),
        r = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(873546),
        c = n(442837),
        u = n(481060),
        d = n(239091),
        h = n(134616),
        p = n(714338),
        f = n(212819),
        _ = n(14429),
        m = n(951844),
        g = n(313201),
        C = n(592125),
        I = n(888369),
        E = n(430824),
        N = n(306680),
        S = n(944486),
        x = n(938475),
        v = n(585483),
        T = n(63063),
        Z = n(51596),
        A = n(823385),
        b = n(415795),
        R = n(670512),
        M = n(981631),
        L = n(689938),
        P = n(91475);
      function O(e, t, n) {
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
      let y = 10,
        D = () =>
          (0, l.jsxs)("div", {
            className: P.emptyState,
            children: [
              (0, l.jsx)("div", {
                className: P.emptyStateNote,
                children: L.Z.Messages.QUICKSWITCHER_EMPTY_TEXT,
              }),
              (0, l.jsx)("div", {
                className: P.emptyStateCTA,
                children: (0, l.jsx)(u.Anchor, {
                  href: T.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
                  children: L.Z.Messages.QUICKSWITCHER_EMPTY_CTA,
                }),
              }),
            ],
          });
      class j extends (i = r.Component) {
        render() {
          let e = E.Z.getGuild(this.props.channel.guild_id);
          return (0, l.jsx)(b.$W, {
            ...this.props,
            children: (0, l.jsx)("div", {
              className: P.miscContainer,
              children: null != e ? e.name : null,
            }),
          });
        }
      }
      O(j, "defaultProps", { unread: !1 });
      let w = c.ZP.connectStores([N.ZP, C.Z], (e) => {
          let { channel: t } = e;
          return {
            unread: N.ZP.hasUnread(t.id),
            mentions: N.ZP.getMentionCount(t.id),
            category: C.Z.getChannel(t.parent_id),
          };
        })(j),
        U = c.ZP.connectStores([x.ZP], (e) => {
          let { channel: t } = e;
          if (null == t.guild_id)
            throw Error(
              "ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...",
            );
          return { voiceStates: x.ZP.getVoiceStates(t.guild_id)[t.id] };
        })(j),
        G = c.ZP.connectStores([I.default], (e) => {
          let { guild: t } = e;
          return { unread: I.default.hasUnread(t.id) };
        })(b.ic),
        k = c.ZP.connectStores([N.ZP], (e) => {
          let { channel: t } = e;
          return { mentions: N.ZP.getMentionCount(t.id) };
        })(b.PZ),
        B = c.ZP.connectStores([C.Z, N.ZP], (e) => {
          let { user: t } = e,
            n = C.Z.getDMFromUserId(t.id);
          return { mentions: null != n ? N.ZP.getMentionCount(n) : 0 };
        })(b.n5);
      function V(e, t, n) {
        return (0, l.jsx)(
          u.Tooltip,
          {
            text: n,
            children: (e) =>
              (0, l.jsx)("span", {
                ...e,
                className: P.autocompleteQuerySymbol,
                children: t,
              }),
          },
          e,
        );
      }
      class H extends r.PureComponent {
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
          (0, Z.Cp)();
        }
        search(e) {
          this.setState({ query: e }), (0, Z.yC)(e);
        }
        renderInput() {
          let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && "" !== n;
          return (0, l.jsx)(u.FocusRing, {
            children: (0, l.jsx)("input", {
              className: P.input,
              "aria-label": L.Z.Messages.QUICK_SWITCHER,
              ref: this.inputRef,
              type: "text",
              role: "combobox",
              "aria-controls": this._listId,
              "aria-expanded": i,
              "aria-activedescendant": i ? this.getRowId(e) : void 0,
              "aria-autocomplete": "list",
              placeholder: L.Z.Messages.QUICKSWITCHER_PLACEHOLDER,
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
            ? (0, l.jsx)(D, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u.ListAuto, {
                  innerId: this._listId,
                  innerRole: "listbox",
                  "aria-label": L.Z.Messages.QUICK_SWITCHER_RESULTS_LABEL,
                  ref: this.scrollerRef,
                  sectionHeight: 0,
                  rowHeight: 34,
                  paddingBottom: y,
                  sections: [t.length],
                  className: P.scroller,
                  renderRow: this.renderRow,
                  renderSection: this.renderSection,
                });
        }
        focusNode(e) {
          v.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
        }
        getRowId(e) {
          return "quick-switcher-".concat(this._listId, "-item-").concat(e);
        }
        renderProtip() {
          return (0, l.jsx)(m.Z, {
            className: s()(P.protip, {
              [P.hasContent]: this.state.query.length > 0,
            }),
            type: m.Z.Types.INLINE,
            children: L.Z.Messages.QUICKSWITCHER_PROTIP.format({
              userSymbolHook: (e, t) =>
                V(t, f.xQ.USER, L.Z.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
              textChannelSymbolHook: (e, t) =>
                V(
                  t,
                  f.xQ.TEXT_CHANNEL,
                  L.Z.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS,
                ),
              voiceChannelSymbolHook: (e, t) =>
                V(
                  t,
                  f.xQ.VOICE_CHANNEL,
                  L.Z.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS,
                ),
              guildSymbolHook: (e, t) =>
                V(t, f.xQ.GUILD, L.Z.Messages.QUICKSWITCHER_PROTIP_GUILDS),
              helpdeskArticle: T.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
          });
        }
        renderTutorial() {
          let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
          return t
            ? null
            : (0, l.jsx)(R.Z, { hasQuery: e.length > 0 && n.length > 0 });
        }
        render() {
          return (0, l.jsx)(u.ModalRoot, {
            "aria-label": L.Z.Messages.QUICK_SWITCHER,
            size: u.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: s()(P.container, o.tq && P.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)("div", {
              className: s()(P.quickswitcher, o.tq && P.mobileQuickswitcher),
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
            O(this, "scrollerRef", r.createRef()),
            O(this, "inputRef", r.createRef()),
            O(this, "_listId", (0, g.hQ)()),
            O(this, "state", {
              query: this.props.query,
              mouseFocusDisabled: !0,
            }),
            O(this, "handleInputChange", () => {
              let { current: e } = this.inputRef;
              null != e && this.search(e.value);
            }),
            O(this, "handleMouseMove", () => {
              let { mouseFocusDisabled: e } = this.state;
              if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            O(this, "focusResult", (e) => {
              if (!this.state.mouseFocusDisabled)
                (0, Z.tF)(this.props.results.indexOf(e));
            }),
            O(this, "selectResult", (e) => {
              (0, Z.Se)(e, this.props.queryMode === f.h8.TEXT_CHANNEL);
            }),
            O(this, "handleContextMenu", (e) => {
              let t = this.props.results[this.props.selectedIndex];
              switch (t.type) {
                case f.h8.GUILD:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("96427"),
                      n.e("33053"),
                      n.e("37581"),
                      n.e("7654"),
                      n.e("18146"),
                      n.e("44156"),
                      n.e("44294"),
                      n.e("85552"),
                      n.e("58227"),
                      n.e("36897"),
                      n.e("36362"),
                      n.e("33213"),
                      n.e("18339"),
                    ]).then(n.bind(n, 545135));
                    return (n) =>
                      (0, l.jsx)(e, {
                        ...n,
                        guild: t.record,
                        onSelect: Z.Cp,
                        hideSettings: !0,
                      });
                  });
                case f.h8.TEXT_CHANNEL:
                case f.h8.VOICE_CHANNEL:
                  let i = t.record,
                    r = E.Z.getGuild(i.getGuildId());
                  if (null == r) return;
                  switch (i.type) {
                    case M.d4z.GUILD_TEXT:
                    case M.d4z.GUILD_ANNOUNCEMENT:
                    case M.d4z.GUILD_FORUM:
                    case M.d4z.GUILD_MEDIA:
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
                            onSelect: Z.Cp,
                          });
                      });
                    case M.d4z.GUILD_VOICE:
                    case M.d4z.GUILD_STAGE_VOICE:
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
                            onSelect: Z.Cp,
                          });
                      });
                    case M.d4z.ANNOUNCEMENT_THREAD:
                    case M.d4z.PUBLIC_THREAD:
                    case M.d4z.PRIVATE_THREAD:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("40157")
                          .then(n.bind(n, 422200));
                        return (t) =>
                          (0, l.jsx)(e, { ...t, channel: i, onSelect: Z.Cp });
                      });
                    case M.d4z.GUILD_STORE:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("99905")
                          .then(n.bind(n, 649400));
                        return (t) =>
                          (0, l.jsx)(e, {
                            ...t,
                            channel: i,
                            guild: r,
                            onSelect: Z.Cp,
                          });
                      });
                    case M.d4z.GUILD_DIRECTORY:
                      return (0, d.jW)(e, async () => {
                        let { default: e } = await n
                          .e("70623")
                          .then(n.bind(n, 99334));
                        return (t) => (0, l.jsx)(e, { ...t, channel: i });
                      });
                  }
                  break;
                case f.h8.GROUP_DM:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("25421"),
                    ]).then(n.bind(n, 354741));
                    return (n) =>
                      (0, l.jsx)(e, {
                        ...n,
                        channel: t.record,
                        selected: S.Z.getChannelId() === t.record.id,
                        onSelect: Z.Cp,
                      });
                  });
                case f.h8.USER:
                  return (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("69220"),
                      n.e("5901"),
                    ]).then(n.bind(n, 881351));
                    return (n) =>
                      (0, l.jsx)(e, { ...n, user: t.record, onSelect: Z.Cp });
                  });
              }
            }),
            O(this, "handleKeyDown", (e) => {
              let { mouseFocusDisabled: t, query: n } = this.state,
                { results: i } = this.props;
              !1 === t && this.setState({ mouseFocusDisabled: !0 });
              let l = e.key.toLowerCase(),
                { selectedIndex: r } = this.props;
              switch (l) {
                case "escape":
                  e.preventDefault(),
                    e.stopPropagation(),
                    n.length > 0 ? this.search("") : (0, Z.Cp)();
                  return;
                case "k":
                  (!0 === e.ctrlKey || !0 === e.metaKey) &&
                    (e.preventDefault(), e.stopPropagation(), (0, Z.Cp)());
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
                  r = (0, f.gJ)(f.a8.UP, r, i);
                  break;
                case "arrowdown":
                  r = (0, f.gJ)(f.a8.DOWN, r, i);
                  break;
                case "n":
                  if (!e.ctrlKey) return;
                  r = (0, f.gJ)(f.a8.DOWN, r, i);
                  break;
                case "p":
                  if (!e.ctrlKey) return;
                  r = (0, f.gJ)(f.a8.UP, r, i);
                  break;
                default:
                  return;
              }
              e.preventDefault(), (0, Z.tF)(r);
            }),
            O(this, "renderRow", (e) => {
              let { row: t } = e,
                n = this.props.results[t],
                { selectedIndex: i } = this.props,
                { showScores: r } = _.Z.getCurrentConfig(
                  { location: "62f4be_1" },
                  { autoTrackExposure: !1 },
                );
              switch (n.type) {
                case f.h8.HEADER:
                  return (0, l.jsx)(
                    b.h4,
                    { children: n.record.text },
                    "".concat(n.type, "-").concat(n.record.id),
                  );
                case f.h8.TEXT_CHANNEL:
                  return (0, l.jsx)(
                    w,
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
                case f.h8.VOICE_CHANNEL:
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
                case f.h8.GUILD:
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
                case f.h8.USER:
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
                case f.h8.GROUP_DM:
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
                case f.h8.APPLICATION:
                  return (0, l.jsx)(
                    b.Mx,
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
                case f.h8.LINK:
                  return (0, l.jsx)(
                    b.rU,
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
                case f.h8.IN_APP_NAVIGATION:
                  return (0, l.jsx)(
                    b.s8,
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
        let t = (0, c.cj)([A.Z], () => A.Z.getProps());
        return (0, l.jsx)(H, { ...t, ...e });
      }
    },
    329557: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(570140),
        a = n(317770),
        s = n(51596),
        o = n(823385),
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
          o.Z.isOpen() &&
            !(0, l.hasModalOpen)(u) &&
            (0, l.openModal)((e) => (0, i.jsx)(c.Z, { ...e }), {
              modalKey: u,
              instant: !0,
              onCloseCallback: s.Cp,
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
        l = n(735250),
        r = n(470079),
        a = n(120356),
        s = n.n(a),
        o = n(748780),
        c = n(846519),
        u = n(481060),
        d = n(585483),
        h = n(981631),
        p = n(689938),
        f = n(903949);
      function _(e, t, n) {
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
      let m = { friction: 15, tension: 100 };
      class g extends (i = r.PureComponent) {
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
            o.Z.spring(this.state.translateY, {
              toValue: Math.min(e, 250),
              ...m,
            }).start();
        }
        renderArrowGroup(e) {
          return (0, l.jsxs)("div", {
            className: s()(f.arrowGroup, e),
            children: [
              (0, l.jsx)(o.Z.div, {
                className: s()(f.arrowContainer, f.horizontal),
                style: this.getStyle(),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(403756),
                  className: f.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: s()(f.arrowContainer, f.diag1),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(536404),
                  className: f.arrowIcon,
                }),
              }),
              (0, l.jsx)("div", {
                className: s()(f.arrowContainer, f.diag2),
                children: (0, l.jsx)("img", {
                  alt: "",
                  src: n(569347),
                  className: f.arrowIcon,
                }),
              }),
            ],
          });
        }
        renderContent() {
          return (0, l.jsxs)("div", {
            className: f.tutorialMessages,
            children: [
              (0, l.jsx)("div", {
                className: f.searchMessage,
                children: p.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH,
              }),
              (0, l.jsx)("div", {
                className: f.selectMessage,
                children: p.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT,
              }),
            ],
          });
        }
        render() {
          let { hasQuery: e } = this.props,
            { shown: t } = this.state;
          return (0, l.jsxs)("div", {
            ref: this.rootRef,
            className: s()(f.tutorial, { [f.shown]: t, [f.hasQuery]: e }),
            children: [
              this.renderContent(),
              this.renderArrowGroup(f.__invalid_left),
              this.renderArrowGroup(f.right),
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
            _(this, "state", { shown: !1, translateY: new o.Z.Value(0) }),
            _(this, "rootRef", r.createRef()),
            _(this, "focusTimeout", new c.V7()),
            _(this, "handleResultFocus", (e) => {
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
      _(g, "contextType", u.AccessibilityPreferencesContext), (t.Z = g);
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return a;
        },
      }),
        n(411104);
      var i = n(470079),
        l = n(250683),
        r = n(253135);
      function a(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: a } = e,
          s = i.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = l.toByteArray(t),
              i = (0, r.Dq)(e, a, n);
            if (null == i) return null;
            let s = RegExp(".{1,".concat(n, "}"), "g"),
              o = i.match(s);
            return null == o ? null : Array.from(o);
          }, [n, t, a]);
        if (null != t && "" !== t && null == s)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return s;
      }
    },
    160038: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(46973),
        o = n(481060),
        c = n(304680),
        u = n(706619),
        d = n(695346),
        h = n(131951),
        p = n(626135),
        f = n(572004),
        _ = n(63063),
        m = n(476221),
        g = n(981631),
        C = n(65154),
        I = n(689938),
        E = n(108983);
      let N = () => {
        h.Z.getMediaEngine().once(s.aB.ConnectionStats, (e) => {
          let t = Object.values(C.Yn)
            .map((t) => {
              let n = e
                .filter((e) => {
                  let { connection: n } = e;
                  return n.context === t;
                })
                .map((e, n) => {
                  let i = e.stats;
                  return (i.context = t), (i.index = n), i;
                });
              for (let e of n) {
                var i;
                (null == e
                  ? void 0
                  : null === (i = e.transport) || void 0 === i
                    ? void 0
                    : i.localAddress) != null &&
                  (e.transport.localAddress = "(redacted)");
              }
              return n;
            })
            .filter((e) => e.length > 0);
          (0, f.JG)(JSON.stringify(t, null, 2)),
            (0, o.showToast)(
              (0, o.createToast)(I.Z.Messages.COPIED, o.ToastType.SUCCESS),
            );
        });
      };
      t.Z = function (e) {
        (0, l.useEffect)(() => {
          p.default.track(g.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, l.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
          }, [e]),
          n = (0, l.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: r,
                outboundLossRate: s,
              } = e,
              o = d.Sb.getSetting();
            return (0, i.jsxs)(l.Fragment, {
              children: [
                o &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: E.graphContainer,
                        children: (0, i.jsx)(u.Z, {
                          dataPoints: e.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: E.popoutText,
                        children: (0, i.jsx)("strong", {
                          children: m.Z.getShortHostname(t),
                        }),
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: E.popoutText,
                  children:
                    I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format(
                      { averagePing: n.toFixed(0) },
                    ),
                }),
                null != r
                  ? (0, i.jsx)("div", {
                      className: E.popoutText,
                      children:
                        I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format(
                          { lastPing: r.toFixed(0) },
                        ),
                    })
                  : null,
                null != s
                  ? (0, i.jsx)("div", {
                      className: E.popoutText,
                      children:
                        I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format(
                          { outboundLossRate: s.toFixed(1) },
                        ),
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: a()(E.popoutText, E.popoutTextDetails),
                  children: [
                    null == s
                      ? I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format(
                          { badPing: 250 },
                        )
                      : null,
                    null != s
                      ? I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format(
                          { badPing: 250, badLossRate: 10 },
                        )
                      : null,
                  ],
                }),
              ],
            });
          }, [e]),
          { connectionState: r, connectionTypeText: s } = e,
          f = d.Sb.getSetting(),
          S = {
            [g.hes.AWAITING_ENDPOINT]:
              I.Z.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
                url: g.yXt.STATUS,
              }),
            [g.hes.CONNECTING]: I.Z.Messages.RTC_CONNECTION_STATE_CONNECTING,
            [g.hes.AUTHENTICATING]:
              I.Z.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
            [g.hes.DISCONNECTED]:
              I.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
            [g.hes.RTC_CONNECTING]:
              I.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
            [g.hes.ICE_CHECKING]:
              I.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                url: _.Z.getArticleURL(g.BhN.VOICE_CONNECTION_ERRORS),
              }),
            [g.hes.DTLS_CONNECTING]:
              I.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                url: _.Z.getArticleURL(g.BhN.VOICE_CONNECTION_ERRORS),
              }),
            [g.hes.RTC_CONNECTED]: n,
            [g.hes.NO_ROUTE]: I.Z.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format(
              { url: _.Z.getArticleURL(g.BhN.VOICE_CONNECTION_ERRORS) },
            ),
            [g.hes.RTC_DISCONNECTED]:
              I.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
          }[r];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            "function" == typeof S
              ? S()
              : (0, i.jsx)("p", {
                  className: a()(E.popoutText, E.popoutTextDetails),
                  children: S,
                }),
            (0, i.jsx)("hr", { className: E.separator }),
            (0, i.jsxs)("div", {
              className: E.popoutBottom,
              children: [
                (0, i.jsxs)("span", {
                  className: a()(E.secured, E.textWithIcon),
                  children: [
                    (0, i.jsx)(o.LockIcon, {
                      size: "xxs",
                      color: o.tokens.colors.TEXT_POSITIVE.css,
                      className: E.__invalid_icon,
                    }),
                    s,
                  ],
                }),
                f &&
                  h.Z.supports(C.AN.DIAGNOSTICS) &&
                  !__OVERLAY__ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(o.Anchor, {
                        className: a()(E.debugButton, E.textWithIcon),
                        onClick: t,
                        children: [
                          I.Z.Messages.DEBUG,
                          (0, i.jsx)(o.WindowLaunchIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: E.__invalid_icon,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(o.Anchor, {
                        className: a()(E.copyStatsButton, E.textWithIcon),
                        onClick: N,
                        title: "Copy to clipboard",
                        children: [
                          I.Z.Messages.COPY_STATS,
                          (0, i.jsx)(o.CopyIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: E.__invalid_icon,
                          }),
                        ],
                      }),
                    ],
                  }),
                !f &&
                  !__OVERLAY__ &&
                  (0, i.jsx)(o.Anchor, {
                    className: E.debugButton,
                    href: _.Z.getArticleURL(g.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                    children: I.Z.Messages.LEARN_MORE,
                  }),
              ],
            }),
          ],
        });
      };
    },
    873596: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(313201),
        o = n(19780),
        c = n(979651),
        u = n(362446),
        d = n(571826),
        h = n(277642),
        p = n(441894),
        f = n(160038),
        _ = n(586646),
        m = n(760373),
        g = n(689938),
        C = n(739949);
      function I(e) {
        let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
          a = (0, r.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t),
          }));
        return (0, i.jsx)(f.Z, { ...a, closePopout: l, connectionTypeText: n });
      }
      function E(e) {
        let { closePopout: t, connectionTypeText: n } = e,
          l = (0, r.cj)([o.Z], () => ({
            connectionState: o.Z.getState(),
            hostname: o.Z.getHostname(),
            averagePing: o.Z.getAveragePing(),
            lastPing: o.Z.getLastPing(),
            outboundLossRate: o.Z.getOutboundLossRate(),
            pings: o.Z.getPings(),
          }));
        return (0, i.jsx)(f.Z, { ...l, closePopout: t, connectionTypeText: n });
      }
      function N(e) {
        let { channelId: t, isOverlay: n, lobbyId: l, closePopout: r } = e,
          a = (0, p.J)({
            channelId: t,
            location: "RTCConnectionDebugPanelContainer",
          })
            ? g.Z.Messages.E2EE_END_TO_END_ENCRYPTED
            : g.Z.Messages.SECURE_CONNECTION;
        return n
          ? (0, i.jsx)(I, { lobbyId: l, closePopout: r, connectionTypeText: a })
          : (0, i.jsx)(E, { closePopout: r, connectionTypeText: a });
      }
      function S(e) {
        let t = (0, r.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
          [n, o] = l.useState(m.tu.RTC_DEBUG_PANEL),
          u = (0, s.Dt)(),
          p = l.useMemo(() => {
            switch (n) {
              case m.tu.RTC_DEBUG_PANEL:
                return (0, i.jsx)(N, { ...e });
              case m.tu.RTC_SECURE_FRAMES:
                return (0, i.jsx)(_.Z, { channelId: e.channelId });
            }
          }, [e, n]);
        l.useEffect(() => {
          (0, d.sN)({ channelId: e.channelId, selectedTab: n });
        }, [e.channelId, n]);
        let f = (0, h.r)();
        return (
          l.useEffect(() => {
            f && o(m.tu.RTC_DEBUG_PANEL);
          }, [f]),
          (0, i.jsxs)("div", {
            className: C.container,
            children: [
              (0, i.jsx)(a.Heading, {
                className: C.title,
                variant: "heading-lg/bold",
                color: "header-primary",
                children: t
                  ? g.Z.Messages.E2EE_VIDEO_DETAILS
                  : g.Z.Messages.E2EE_VOICE_DETAILS,
              }),
              (0, i.jsxs)(a.TabBar, {
                className: C.tabs,
                selectedItem: n,
                type: "top",
                look: "brand",
                onItemSelect: o,
                children: [
                  (0, i.jsx)(a.TabBar.Item, {
                    id: m.tu.RTC_DEBUG_PANEL,
                    className: C.tabBarItem,
                    children: g.Z.Messages.E2EE_CONNECTION,
                  }),
                  f
                    ? null
                    : (0, i.jsx)(a.TabBar.Item, {
                        id: m.tu.RTC_SECURE_FRAMES,
                        className: C.tabBarItem,
                        children: g.Z.Messages.E2EE_PRIVACY,
                      }),
                ],
              }),
              (0, i.jsx)(a.TabBar.Panel, {
                id: n,
                "aria-labelledby": u,
                children: p,
              }),
            ],
          })
        );
      }
      function x(e) {
        return (0, p.J)({
          channelId: e.channelId,
          location: "RTCConnectionPopout",
        })
          ? (0, i.jsx)(S, { ...e })
          : (0, i.jsx)("div", {
              className: C.debugPanelStandalone,
              children: (0, i.jsx)("section", {
                className: C.debugPanelSection,
                children: (0, i.jsx)(N, { ...e }),
              }),
            });
      }
    },
    917405: function (e, t, n) {
      n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(72416),
        c = n(476221),
        u = n(873596),
        d = n(423516),
        h = n(981631),
        p = n(700883);
      let f = {
          [h.IE4.UNKNOWN]: s.Tooltip.Colors.BLACK,
          [h.IE4.BAD]: s.Tooltip.Colors.RED,
          [h.IE4.AVERAGE]: s.Tooltip.Colors.YELLOW,
          [h.IE4.FINE]: s.Tooltip.Colors.GREEN,
        },
        _ = {
          [h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
          [h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
          [h.QKv.ERROR]: p.rtcConnectionStatusError,
        },
        m = {
          [h.IE4.FINE]: p.rtcConnectionQualityFine,
          [h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
          [h.IE4.BAD]: p.rtcConnectionQualityBad,
          [h.IE4.UNKNOWN]: null,
        };
      class g extends l.PureComponent {
        renderPopoutTarget(e) {
          return (0, i.jsx)(s.Popout, {
            renderPopout: this.renderPopout,
            position: "top",
            children: e,
          });
        }
        renderStatus() {
          let { hasVideo: e, state: t } = this.props,
            { connectionStatus: n, connectionStatusText: l } = c.Z.getStatus(
              t,
              e,
            );
          return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(s.Button, {
              look: s.Button.Looks.BLANK,
              size: s.Button.Sizes.NONE,
              onClick: t,
              children: (0, i.jsx)(d.Z, {
                text: l,
                hasVideo: this.props.hasVideo,
                className: _[n],
              }),
            });
          });
        }
        render() {
          let e;
          let {
            quality: t,
            smallPing: n,
            lastPing: l,
            state: r,
            className: o,
            children: c,
          } = this.props;
          return (
            r === h.hes.RTC_CONNECTED &&
              (e = (0, i.jsx)(s.Tooltip, {
                text:
                  t !== h.IE4.UNKNOWN && null != l
                    ? "".concat(l.toFixed(0), " ms")
                    : null,
                color: f[t],
                children: (e) =>
                  (0, i.jsx)(C, { quality: t, smallPing: n, ...e }),
              })),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: a()(p.rtcConnectionStatus, m[t], o),
                  children: [
                    e,
                    (0, i.jsx)("div", {
                      className: p.labelWrapper,
                      children: this.renderStatus(),
                    }),
                  ],
                }),
                c,
              ],
            })
          );
        }
        constructor(...e) {
          var t, n, l;
          super(...e),
            (t = this),
            (n = "renderPopout"),
            (l = (e) =>
              (0, i.jsx)(u.Z, { channelId: this.props.channelId, ...e })),
            n in t
              ? Object.defineProperty(t, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = l);
        }
      }
      function C(e) {
        let { quality: t, smallPing: n, ...l } = e;
        if (!(0, s.useRedesignIconContext)().enabled)
          return (0, i.jsx)(o.Z, {
            className: a()(p.ping, { [p.smallPing]: n }),
            foreground: p.pingForeground,
          });
        {
          let e = {
            [h.IE4.FINE]: s.ConnectionFineIcon,
            [h.IE4.AVERAGE]: s.ConnectionAverageIcon,
            [h.IE4.BAD]: s.ConnectionBadIcon,
            [h.IE4.UNKNOWN]: s.ConnectionUnknownIcon,
          }[t];
          return (0, i.jsx)(e, {
            className: a()(p.ping, { [p.smallPing]: n }),
            ...l,
          });
        }
      }
      t.Z = g;
    },
    423516: function (e, t, n) {
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(570928),
        s = n(977059),
        o = n(689938),
        c = n(666790);
      t.Z = function (e) {
        let { className: t, hasVideo: n, text: l } = e,
          { enabled: u } = (0, s.S)({ location: "RTCConnectionStatusText" }),
          d = n
            ? o.Z.Messages.E2EE_VIDEO_DETAILS
            : o.Z.Messages.E2EE_VOICE_DETAILS;
        return (0, i.jsx)(a.Z, {
          className: r()(t, u ? c.hoverableStatus : c.status),
          hoverText: u ? d : null,
          children: l,
        });
      };
    },
    586646: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(442837),
        a = n(481060),
        s = n(19780),
        o = n(571826),
        c = n(630759),
        u = n(301107),
        d = n(785792),
        h = n(190054),
        p = n(760373),
        f = n(689938),
        _ = n(64570);
      function m(e) {
        let { channelId: t } = e,
          n = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getSecureFramesState()) || void 0 === e
              ? void 0
              : e.epochAuthenticator;
          }),
          m = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: p.y6,
            desiredLength: p.YP,
          }),
          g = l.useCallback(() => {
            (0, o.PM)({ channelId: t });
          }, [t]);
        return (0, i.jsxs)("div", {
          className: _.container,
          children: [
            (0, i.jsxs)("div", {
              className: _.tag,
              children: [
                (0, i.jsx)(a.LockIcon, {
                  size: "xxs",
                  color: a.tokens.colors.TEXT_POSITIVE,
                }),
                (0, i.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  color: "text-positive",
                  children: f.Z.Messages.E2EE_END_TO_END_ENCRYPTED,
                }),
              ],
            }),
            (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: f.Z.Messages.E2EE_RTC_PANEL_CALL_VERIFICATION_SUBTITLE,
            }),
            (0, i.jsxs)("div", {
              className: _.header,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "text-sm/bold",
                  color: "header-primary",
                  children: f.Z.Messages.E2EE_VOICE_PRIVACY_CODE,
                }),
                null != m &&
                  (0, i.jsx)(h.H, {
                    chunks: m,
                    color: a.tokens.colors.INTERACTIVE_NORMAL.css,
                    onCopy: g,
                  }),
              ],
            }),
            (0, i.jsx)(d.b, { className: _.code, chunks: m, columns: p.WK }),
            (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: f.Z.Messages.E2EE_CALL_VERIFICATION_FOOTER_TEXT.format({
                helpArticle: (0, c.uV)(),
              }),
            }),
          ],
        });
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return c;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(956731);
      function c(e) {
        let { chunks: t, columns: n, className: r } = e,
          c = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, i.jsx)("div", {
              className: o.loading,
              children: (0, i.jsx)(s.Spinner, {}),
            })
          : (0, i.jsx)("div", {
              style: c,
              className: a()(o.code, r),
              children: t.map((e, t) =>
                (0, i.jsx)(
                  "div",
                  {
                    className: a()(o.chunk, { [o.divider]: t > n - 1 }),
                    children: (0, i.jsx)(s.Text, {
                      className: o.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: e,
                    }),
                  },
                  "".concat(e, "-").concat(t),
                ),
              ),
            });
      }
    },
    190054: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(120356),
        a = n.n(r),
        s = n(481060),
        o = n(572004),
        c = n(689938),
        u = n(606053);
      function d(e) {
        let { chunks: t, className: n, onCopy: r, ...d } = e,
          h = l.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [p, f] = l.useState(!1),
          _ = l.useCallback(() => {
            f(!0), (0, o.JG)(h), null == r || r();
          }, [r, h]),
          m = p ? s.CircleCheckIcon : s.CopyIcon;
        return (0, i.jsx)(s.Clickable, {
          className: a()(u.container, n),
          onClick: _,
          children: (0, i.jsx)(s.Tooltip, {
            text: p ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
            children: (e) =>
              (0, i.jsx)(m, {
                ...d,
                ...e,
                size: "xxs",
                color: p
                  ? s.tokens.colors.TEXT_POSITIVE
                  : s.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    706619: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(735250),
        l = n(470079),
        r = n(311308),
        a = n(692547),
        s = n(481060);
      function o(e) {
        let t = (0, l.useRef)(null),
          [n, o] = (0, l.useState)(null),
          [c] = (0, l.useState)(() => new r.TimelineDataSeries()),
          u = (0, s.useToken)(a.Z.colors.BACKGROUND_PRIMARY).hsl(),
          d = (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hsl(),
          h = (0, s.useToken)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
          p = (0, s.useToken)(a.Z.unsafe_rawColors.BRAND_500).hsl();
        (0, l.useEffect)(() => {
          var e;
          let n = t.current;
          if (null == n) return;
          let i = new r.TimelineGraphView(
            n,
            null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1,
          );
          (i.backgroundColor = u),
            (i.textColor = d),
            (i.gridColor = h),
            (i.timeOptions = { timeStyle: "short" }),
            (i.fontFamily = "gg sans"),
            (i.fontSize = 11),
            c.setColor(p),
            i.addDataSeries(c),
            i.updateEndDate(),
            o(i);
        }, [t, u, p, h, d, c]),
          c.setPoints(e.dataPoints),
          null == n || n.updateEndDate();
        let f = { width: e.width, height: e.height };
        return (0, i.jsx)(
          "canvas",
          { style: f, width: e.width, height: e.height, ref: t },
          "canvas",
        );
      }
    },
    802718: function (e, t, n) {
      n.d(t, {
        U: function () {
          return C;
        },
      });
      var i = n(735250),
        l = n(470079),
        r = n(91192),
        a = n(481060),
        s = n(442837),
        o = n(239091),
        c = n(410030),
        u = n(377171),
        d = n(682662),
        h = n(662146),
        p = n(678513),
        f = n(981631),
        _ = n(689938),
        m = n(293992);
      function g(e) {
        let { target: t } = e,
          s = (0, r.Ie)("fakedoor"),
          p = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("22862"),
                n.e("18137"),
              ]).then(n.bind(n, 646202));
              return (n) => (0, i.jsx)(e, { ...n, target: t });
            });
          }, [t]),
          g = l.useCallback(
            (e) => {
              (0, o.jW)(e, async () => {
                let { default: e } = await n.e("39612").then(n.bind(n, 761624));
                return (n) => (0, i.jsx)(e, { ...n, signupTarget: t });
              });
            },
            [t],
          ),
          C = "url(".concat(
            t.backgroundAssetUrl,
            ") black top / cover no-repeat",
          ),
          I = (0, i.jsxs)("div", {
            className: m.tooltipContainer,
            children: [
              (0, i.jsx)("div", {
                className: m.tooltipBackground,
                style: { background: C },
              }),
              (0, i.jsx)(a.Heading, {
                variant: "heading-sm/medium",
                children: t.tooltipHeader,
              }),
              (0, i.jsx)(a.Text, {
                variant: "text-xs/normal",
                children: _.Z.Messages.SIGNUP_BUTTON_TOOLTIP_CTA,
              }),
            ],
          }),
          E = (0, c.Fg)();
        return (0, i.jsxs)(d.H, {
          children: [
            (0, i.jsx)(a.ThemeContextProvider, {
              theme: f.BRd.DARK,
              children: (0, i.jsx)(h.Z, {
                text: I,
                tooltipClass: m.tooltip,
                tooltipContentClass: m.tooltipContent,
                children: (0, i.jsx)(a.ThemeContextProvider, {
                  theme: E,
                  children: (0, i.jsx)(a.BlobMask, {
                    lowerBadge: (0, i.jsx)(a.NumberBadge, {
                      count: 1,
                      color: u.Z.BG_BRAND,
                    }),
                    children: (0, i.jsx)(a.NavItem, {
                      ...s,
                      onClick: p,
                      onContextMenu: g,
                      children: (0, i.jsx)(a.BellIcon, {
                        color: u.Z.TEXT_NORMAL,
                      }),
                    }),
                  }),
                }),
              }),
            }),
            (0, i.jsx)("div", {
              style: { background: C, width: 0, height: 0 },
            }),
          ],
        });
      }
      function C() {
        let e = (0, s.e7)([p.Z], () => p.Z.getActiveUserSignUp());
        return null == e ? null : (0, i.jsx)(g, { target: e });
      }
    },
    445507: function (e, t, n) {
      n.d(t, {
        Q3: function () {
          return u;
        },
        Zl: function () {
          return c;
        },
        mC: function () {
          return r;
        },
        mU: function () {
          return a;
        },
        qJ: function () {
          return s;
        },
        u9: function () {
          return l;
        },
        xQ: function () {
          return o;
        },
        z5: function () {
          return d;
        },
      });
      var i = n(704215);
      function l(e) {
        return "user" === e.type;
      }
      function r(e) {
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
        o = {
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
        c = {
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
        u = {
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
      function d(e) {
        return [
          {
            value: "very-casual",
            title: e.Messages.SIGNUP_CLAN_OPTION_VERY_CASUAL_TITLE,
            description: e.Messages.SIGNUP_CLAN_OPTION_VERY_CASUAL_DESCRIPTION,
          },
          {
            value: "casual",
            title: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_TITLE,
            description: e.Messages.SIGNUP_CLAN_OPTION_CASUAL_DESCRIPTION,
          },
          {
            value: "hardcore",
            title: e.Messages.SIGNUP_CLAN_OPTION_HARDCORE_TITLE,
            description: e.Messages.SIGNUP_CLAN_OPTION_HARDCORE_DESCRIPTION,
          },
          {
            value: "very-hardcore",
            title: e.Messages.SIGNUP_CLAN_OPTION_VERY_HARDCORE_TITLE,
            description:
              e.Messages.SIGNUP_CLAN_OPTION_VERY_HARDCORE_DESCRIPTION,
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
        s = n(442837),
        o = n(570140),
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
      function f() {
        for (let e in ((d = null), h)) delete h[e];
      }
      class _ extends (i = s.ZP.Store) {
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
        (r = "displayName") in (l = _)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new _(o.Z, {
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
            p.add(t), f();
          },
          DISMISS_SIGN_UP: f,
        }));
    },
    964398: function (e, t, n) {
      n(47120), n(411104);
      var i = n(735250),
        l = n(470079),
        r = n(392711),
        a = n.n(r),
        s = n(481060),
        o = n(65205),
        c = n(689938),
        u = n(557342);
      function d(e) {
        let { className: t } = e;
        return (0, i.jsxs)("svg", {
          className: t,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          children: [
            (0, i.jsx)("g", {
              filter: "url(#a)",
              children: (0, i.jsx)("path", {
                d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                fill: "currentColor",
              }),
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("filter", {
                id: "a",
                x: "0",
                y: "0",
                width: "48",
                height: "48",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, i.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, i.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, i.jsx)("feOffset", { dy: "8" }),
                  (0, i.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                  (0, i.jsx)("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                  }),
                  (0, i.jsx)("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_605_72103",
                  }),
                  (0, i.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_605_72103",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let h = [
          { x: 0.5, y: 0.05 },
          { x: 0.95, y: 0.2 },
          { x: 1, y: 0.5 },
          { x: 0.95, y: 0.8 },
          { x: 0.5, y: 0.95 },
          { x: 0.05, y: 0.8 },
          { x: 0, y: 0.5 },
          { x: 0.05, y: 0.2 },
        ],
        p = h.length;
      function f(e, t, n) {
        let i = e * t;
        return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
      }
      let _ = (e, t) => {
        let n = Math.abs(t.x),
          i = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
          l = e / 2 - 28.8;
        return {
          x: Math.max(l * Math.cos((2 * Math.PI * i) / 360), 0),
          y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0),
        };
      };
      t.Z = l.memo(function (e) {
        let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: m,
            itemHeight: g,
            showDeadZoneIndicator: C,
            activeItem: I,
            onItemSelect: E,
            onItemAction: N,
            interactive: S = !0,
            children: x,
          } = e,
          v = l.useRef(null),
          T = l.useRef([]),
          Z = l.useRef(!1),
          A = l.useRef(null),
          [b, R] = l.useState(0),
          [M, L] = l.useState({ x: 0, y: 0 }),
          P = Math.abs(M.x) + Math.abs(M.y) > 0,
          O = l.useMemo(() => a().chunk(x, p), [x]),
          y = l.useCallback(
            (e, t) => {
              null == T.current[b]
                ? (T.current[b] = [])
                : (T.current[b][t] = e);
            },
            [b],
          ),
          D = l.useCallback(
            (e, t) => {
              (A.current = t), E(p * e + t);
            },
            [E],
          ),
          j = l.useCallback(() => {
            (A.current = null), E(null);
          }, [E]),
          w = l.useCallback(
            (e) => {
              j(), (Z.current = e);
            },
            [j],
          ),
          U = l.useCallback((e, t, n) => {
            if (Z.current) {
              L({ x: 0, y: 0 });
              return;
            }
            let i = { x: e.x - t.x, y: e.y - t.y },
              l = i.x < 0,
              r = i.y < 0,
              a = _(n, i),
              s = l ? Math.max(i.x, -a.x) : Math.min(i.x, a.x);
            L({
              x: s / 2,
              y: (r ? Math.max(i.y, -a.y) : Math.min(i.y, a.y)) / 2,
            });
          }, []),
          G = l.useCallback(
            (e) => {
              if (null != A.current)
                e.preventDefault(),
                  e.stopPropagation(),
                  null == N || N(p * b + A.current);
            },
            [N, b],
          ),
          k = l.useMemo(
            () =>
              (0, r.throttle)((e) => {
                if (null == v.current) return;
                let i = v.current.getBoundingClientRect(),
                  l = i.left + i.width / 2,
                  r = { x: l, y: i.top + i.height / 2 },
                  a = { x: e.clientX, y: e.clientY };
                if ((U(a, r, Math.max(t, n)), Z.current)) {
                  null != I && j();
                  return;
                }
                let s = (0, o.ld)(r, a, Math.max(t, n));
                for (let e = 0; e < T.current[b].length; e++) {
                  let t = T.current[b][e];
                  if (null == t) continue;
                  let n = t.getBoundingClientRect();
                  if ((0, o.Vr)(r, s, n)) {
                    D(b, e);
                    return;
                  }
                }
                j();
              }, 16),
            [I, U, j, D, b, n, t],
          ),
          B = l.useCallback(
            (e) => {
              if (!S) return;
              let t = b + (e.deltaY > 0 ? 1 : -1);
              t >= 0 &&
                t < O.length &&
                (null != A.current &&
                  (O[t].length > A.current ? D(t, A.current) : j()),
                R(t));
            },
            [S, b, O, D, j],
          ),
          V = l.useMemo(
            () =>
              O[b].map((e, l) => {
                let r = h[l];
                if (null == r)
                  throw Error(
                    "Too many items supplied "
                      .concat(x.length, " expected max of ")
                      .concat(h.length),
                  );
                let a = f(r.x, t, m),
                  s = f(r.y, n, g);
                return (0, i.jsx)(
                  "div",
                  {
                    ref: (e) => y(e, l),
                    className: u.chatWheelItem,
                    style: { left: a, top: s, width: m, height: g },
                    children: e,
                  },
                  l,
                );
              }),
            [O, b, t, m, n, g, x.length, y],
          );
        return (0, i.jsx)(s.Clickable, {
          className: u.chatWheelMouseInput,
          onMouseMove: k,
          onWheel: B,
          onClick: G,
          children: (0, i.jsxs)("div", {
            ref: v,
            className: u.chatWheel,
            style: { width: t, height: n },
            children: [
              (0, i.jsxs)("svg", {
                className: u.chatWheelBackground,
                viewBox: "0 0 288 288",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, i.jsxs)("filter", {
                    id: "soundboard-wheel-background-shadow",
                    x: "0",
                    y: "0",
                    width: "288",
                    height: "288",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, i.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, i.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, i.jsx)("feOffset", { dy: "8" }),
                      (0, i.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                      (0, i.jsx)("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      (0, i.jsx)("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_489_60382",
                      }),
                      (0, i.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_489_60382",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("g", {
                    filter: "url(#soundboard-wheel-background-shadow)",
                    children: [
                      (0, i.jsx)("circle", {
                        className: u.chatWheelBackground,
                        cx: "144",
                        cy: "144",
                        r: "103.68",
                        strokeWidth: "40.32",
                      }),
                      C &&
                        (0, i.jsx)("circle", {
                          className: u.chatWheelDeadZone,
                          onMouseEnter: () => w(!0),
                          onMouseLeave: () => w(!1),
                          cx: 144,
                          cy: 144,
                          r: 28.8,
                        }),
                      P &&
                        (0, i.jsx)("circle", {
                          className: u.chatWheelCenter,
                          cx: 144 + M.x,
                          cy: 144 + M.y,
                          r: 28.8,
                        }),
                    ],
                  }),
                  C &&
                    (0, i.jsx)("circle", {
                      className: u.chatWheelDeadZone,
                      onMouseEnter: () => w(!0),
                      onMouseLeave: () => w(!1),
                      cx: 144,
                      cy: 144,
                      r: 28.8,
                      stroke: "none",
                    }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: u.innerContent,
                children: [
                  C && (0, i.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                  S && O.length > 1
                    ? (0, i.jsx)("div", {
                        className: u.paginationHint,
                        children: c.Z.Messages.CHAT_WHEEL_PAGINATION_HINT,
                      })
                    : null,
                ],
              }),
              V,
            ],
          }),
        });
      });
    },
    183584: function (e, t, n) {
      n.d(t, {
        IN: function () {
          return s;
        },
        oZ: function () {
          return o;
        },
      }),
        n(735250),
        n(470079);
      var i = n(570140);
      n(238246), n(788983), n(592125), n(19780);
      var l = n(808506);
      n(998502), n(487029);
      var r = n(710111);
      n(981631), n(689938);
      let a = {
        width: r.FW.width,
        height: r.FW.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
      };
      function s(e, t) {
        i.Z.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
          i.Z.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
          });
      }
      function o(e) {
        i.Z.dispatch({
          type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
          pid: e,
          enabled: !1,
        }),
          !l.Z.isInputLocked(e) &&
            i.Z.dispatch({
              type: "OVERLAY_SET_INPUT_LOCKED",
              locked: !0,
              pid: e,
            });
      }
      r.FW.padding, a.width, a.height;
    },
    487029: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120),
        n(653041);
      var i = n(735250),
        l = n(470079),
        r = n(990547),
        a = n(442837),
        s = n(100527),
        o = n(906732),
        c = n(213609),
        u = n(675478),
        d = n(19780),
        h = n(709054),
        p = n(208049),
        f = n(763296),
        _ = n(242291),
        m = n(174470),
        g = n(549771),
        C = n(964398),
        I = n(409673),
        E = n(710111),
        N = n(601539);
      function S(e) {
        let {
            guildId: t,
            channel: n,
            width: S,
            height: x,
            keepOpen: v,
            interactive: T = !0,
            analyticsSource: Z,
            onClose: A,
          } = e,
          b = (function (e) {
            let [t, n] = (0, a.Wu)([f.Z], () => [
              f.Z.getSounds(),
              f.Z.getFavorites(),
            ]);
            return l.useMemo(() => {
              let i = [],
                l = [...e, E.X8],
                r = (e, l) => {
                  var r, a;
                  for (let s of null !==
                    (a =
                      null === (r = t.get(e)) || void 0 === r
                        ? void 0
                        : r.sort((e, t) =>
                            h.default.compare(e.soundId, t.soundId),
                          )) && void 0 !== a
                    ? a
                    : []) {
                    let e = n.has(s.soundId);
                    ((e && l) || (!e && !l)) && s.available && i.push(s);
                  }
                };
              return l.forEach((e) => r(e, !0)), l.forEach((e) => r(e, !1)), i;
            }, [t, n, e]);
          })((0, g.h)(n, !0)),
          R = (0, m.j)(),
          M = l.useRef(null),
          [L, P] = l.useState(void 0),
          O = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
          { analyticsLocations: y } = (0, o.ZP)(s.Z.SOUNDBOARD_WHEEL),
          D = l.useCallback(
            (e) => {
              (0, _.GN)(e, n.id, y), A();
            },
            [y, n.id, A],
          );
        l.useEffect(() => {
          p.w(), u.DZ.loadIfNecessary();
        }, []),
          l.useEffect(() => {
            0 === b.length && 0 === R.length && A();
          }, [b.length, R, A]),
          l.useEffect(
            () => () => {
              let e = M.current;
              !v && null != e && D(e);
            },
            [v, D],
          ),
          (0, c.Z)(
            {
              type: r.ImpressionTypes.POPOUT,
              name: r.ImpressionNames.SOUNDBOARD_POPOUT,
              properties: { source: Z, guild_id: t, media_session_id: O },
            },
            { disableTrack: !T },
          );
        let j = l.useCallback((e) => {
            (M.current = e), P(null == e ? void 0 : e.soundId);
          }, []),
          w = l.useCallback(
            (e) => {
              if (null == e) {
                j(null);
                return;
              }
              let t = b[e];
              if (null != t) j(t);
            },
            [j, b],
          ),
          U = l.useCallback(
            (e) => {
              if (null == e) return;
              let t = b[e];
              if (null != t) D(t);
            },
            [b, D],
          ),
          G = l.useMemo(
            () =>
              b.map((e) =>
                (0, i.jsx)(
                  I.ZP,
                  {
                    interactive: T,
                    className: N.soundButton,
                    sound: e,
                    focused: L === e.soundId,
                    channel: n,
                  },
                  e.soundId,
                ),
              ),
            [L, n, T, b],
          );
        return 0 === b.length
          ? null
          : (0, i.jsx)(o.Gt, {
              value: y,
              children: (0, i.jsx)(C.Z, {
                wheelWidth: S,
                wheelHeight: x,
                itemWidth: 96,
                itemHeight: 52,
                showDeadZoneIndicator: !v,
                activeItem: L,
                onItemSelect: w,
                onItemAction: U,
                interactive: T,
                children: G,
              }),
            });
      }
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
          return s;
        },
      });
      var i,
        l,
        r = n(833845),
        a = n(643632);
      function s(e) {
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
          return f;
        },
      }),
        n(47120),
        n(724458);
      var i = n(442837),
        l = n(853856),
        r = n(592125),
        a = n(938475),
        s = n(823379),
        o = n(136015),
        c = n(709054),
        u = n(565799),
        d = n(501655),
        h = n(981631);
      function p(e) {
        let { voiceState: t, userNick: n, user: i } = e,
          l = (0, a.sQ)(t, n);
        return { user: i, voiceState: t, nick: n, comparator: l };
      }
      function f(e) {
        let [t] = (0, i.e7)(
          [u.Z, r.Z, l.Z],
          () => {
            let t;
            let n = (t =
              e === h.I_8
                ? c.default
                    .keys(l.Z.getFavoriteChannels())
                    .map((e) => r.Z.getChannel(e))
                    .filter(s.lm)
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
          o.Q,
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
      var i = n(735250),
        l = n(470079),
        r = n(399606),
        a = n(481060),
        s = n(592125),
        o = n(922482),
        c = n(750154),
        u = n(427679),
        d = n(689938);
      function h(e) {
        var t, n;
        let { activity: h } = e,
          { channelId: p } =
            null !== (t = (0, c.rq)(h)) && void 0 !== t ? t : {},
          f = (0, r.e7)([u.Z], () => u.Z.getStageInstanceByChannel(p), [p]),
          _ = l.useRef(null),
          m = l.useCallback(() => {
            let e = s.Z.getChannel(p);
            null != e && o.Cq(e);
          }, [p]),
          g =
            null !== (n = null == f ? void 0 : f.topic) && void 0 !== n
              ? n
              : h.name,
          C = d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_JOIN.format({
            channel: g,
          });
        return (0, i.jsx)("div", {
          ref: _,
          children: (0, i.jsx)(a.Clickable, {
            onClick: m,
            focusProps: { ringTarget: _ },
            children: (0, i.jsx)(a.Heading, {
              variant: "heading-sm/semibold",
              children: C,
            }),
          }),
        });
      }
      class p {
        shouldShow(e) {
          return (0, c.JE)(e);
        }
        createHeader(e) {
          return {
            subtitle: d.Z.Messages.STAGE_CHANNEL_ACTIVITY_FEED_DEFAULT,
            icon: null,
          };
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
          return s;
        },
        _: function () {
          return a;
        },
      });
      var i = n(726542),
        l = n(973616),
        r = n(689938);
      let a = "twitch:";
      class s extends l.Z {
        getIconURL() {
          return i.Z.get("twitch").icon.lightPNG;
        }
        constructor(e) {
          super(e),
            (this.id = "".concat(a).concat(e.url)),
            (this.name = r.Z.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH);
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
        s = n(442837),
        o = n(570140),
        c = n(131704),
        u = n(251625),
        d = n(592125),
        h = n(306680),
        p = n(944486),
        f = n(55589);
      let _ = [];
      function m() {
        let e = f.Z.getPrivateChannelIds().filter(
          (e) => h.ZP.getMentionCount(e) > 0,
        );
        return (
          e.length > 20 && (e.length = 20), !(0, u.EF)(e, _) && ((_ = e), !0)
        );
      }
      function g() {
        return m();
      }
      function C(e) {
        let { channelId: t } = e,
          n = d.Z.getChannel(t);
        return !!(null != n && (0, c.hv)(n.type)) && m();
      }
      class I extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, d.Z, p.Z, h.ZP);
        }
        getUnreadPrivateChannelIds() {
          return _;
        }
      }
      (a = "PrivateChannelReadStateStore"),
        (r = "displayName") in (l = I)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new I(o.Z, {
          CONNECTION_OPEN: g,
          OVERLAY_INITIALIZE: g,
          MESSAGE_CREATE: C,
          MESSAGE_ACK: C,
          CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && m();
          },
          CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t },
              } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && m();
          },
          WINDOW_FOCUS: function () {
            let e = d.Z.getChannel(p.Z.getChannelId());
            return !!(null != e && (0, c.hv)(e.type)) && m();
          },
          CHANNEL_CREATE: function (e) {
            let {
                channel: { id: t },
              } = e,
              n = d.Z.getChannel(t);
            return !!(null != n && (0, c.hv)(n.type)) && m();
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
              n = !1;
            for (let { id: e } of t) {
              let t = d.Z.getChannel(e);
              null != t && (0, c.hv)(t.type) && (n = !0);
            }
            return !!n && m();
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
      let s = {};
      class o extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          null != e &&
            Object.keys(e).forEach((t) => {
              "number" == typeof e[t] && (s[t] = e[t]);
            });
        }
        getState() {
          return s;
        }
        hasViewed(e) {
          return null != s[e];
        }
      }
      a(o, "displayName", "ViewHistoryStore"),
        a(o, "persistKey", "ViewHistoryStore"),
        (t.Z = new o(r.Z, {
          VIEW_HISTORY_MARK_VIEW: function (e) {
            let { key: t } = e;
            s[t] = Date.now();
          },
        }));
    },
    241890: function (e, t, n) {
      let i, l;
      var r = n(735250);
      n(470079);
      var a = n(481060),
        s = n(570140),
        o = n(341382),
        c = n(981631);
      let u = null;
      function d(e) {
        null != i && e ? i() : null != l && l(), (i = null), (l = null);
      }
      t.Z = {
        init() {
          s.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
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
                      (0, o.M)(e);
                    },
                  },
                );
            }
          }),
            s.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
              let { shouldContinue: t } = e;
              (u = null), d(t);
            }),
            s.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
              let { locked: t } = e;
              t && null != u && ((u = null), d(!1));
            });
        },
      };
    },
    362446: function (e, t, n) {
      n(724458);
      var i,
        l,
        r,
        a,
        s = n(442837),
        o = n(570140),
        c = n(981631);
      let u = {};
      function d(e) {
        let t = u[(e = null != e ? e : "null")];
        return (
          null == t &&
            (t = u[e] =
              {
                state: c.hes.DISCONNECTED,
                quality: c.IE4.UNKNOWN,
                pings: [],
                hostname: null,
                lossRate: null,
              }),
          t
        );
      }
      function h(e, t, n) {
        let i = u[(e = null != e ? e : "null")];
        return null != i ? t(i) : n;
      }
      class p extends (i = s.ZP.Store) {
        getConnectionState(e) {
          return h(
            e,
            (e) => {
              let { state: t } = e;
              return t;
            },
            c.hes.DISCONNECTED,
          );
        }
        getQuality(e) {
          return h(
            e,
            (e) => {
              let { quality: t } = e;
              return t;
            },
            c.IE4.UNKNOWN,
          );
        }
        getHostname(e) {
          return h(
            e,
            (e) => {
              let { hostname: t } = e;
              return t;
            },
            null,
          );
        }
        getPings(e) {
          return h(
            e,
            (e) => {
              let { pings: t } = e;
              return t;
            },
            [],
          );
        }
        getAveragePing(e) {
          let t = this.getPings(e);
          return 0 === t.length
            ? 0
            : t.reduce((e, t) => e + t.value, 0) / t.length;
        }
        getLastPing(e) {
          var t;
          let n = this.getPings(e);
          if (0 === n.length) return 0;
          return null === (t = n[n.length - 1]) || void 0 === t
            ? void 0
            : t.value;
        }
        getOutboundLossRate(e) {
          return h(
            e,
            (e) => {
              let { lossRate: t } = e;
              return t;
            },
            null,
          );
        }
      }
      (a = "OverlayRTCConnectionStore"),
        (r = "displayName") in (l = p)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new p(o.Z, {
          OVERLAY_INITIALIZE: function (e) {
            u = e.rtcConnectionStates;
          },
          RTC_CONNECTION_STATE: function (e) {
            if (null != e.streamKey) return !1;
            let t = d(e.lobbyId);
            (t.state = e.state), (t.hostname = e.hostname);
          },
          RTC_CONNECTION_PING: function (e) {
            let t = d(e.lobbyId);
            (t.pings = e.pings), (t.quality = e.quality);
          },
          RTC_CONNECTION_LOSS_RATE: function (e) {
            d(e.lobbyId).lossRate = e.lossRate;
          },
        }));
    },
    801077: function (e, t, n) {
      n(47120), n(653041), n(724458);
      var i,
        l,
        r,
        a,
        s = n(392711),
        o = n.n(s),
        c = n(442837),
        u = n(570140),
        d = n(782769),
        h = n(527805),
        p = n(841784),
        f = n(503438),
        _ = n(802856),
        m = n(420660),
        g = n(728345),
        C = n(812206),
        I = n(750881),
        E = n(710845),
        N = n(38618),
        S = n(656063),
        x = n(761282),
        v = n(814443),
        T = n(789407),
        Z = n(974543),
        A = n(250889),
        b = n(199902),
        R = n(592125),
        M = n(480294),
        L = n(831506),
        P = n(731290),
        O = n(430824),
        y = n(496675),
        D = n(158776),
        j = n(699516),
        w = n(594174),
        U = n(979651),
        G = n(823379),
        k = n(981631);
      let B = !1,
        V = !1,
        H = [],
        F = [],
        W = {},
        z = {},
        Y = new Set(),
        K = new Set();
      function q() {
        let e = j.Z.getFriendIDs();
        return M.Z.hasConsented(k.pjP.PERSONALIZATION)
          ? new Set([...v.Z.getUserAffinitiesUserIds(), ...e])
          : new Set(e);
      }
      function Q(e) {
        return D.Z.findActivity(e, (e) => e.type !== k.IIU.CUSTOM_STATUS);
      }
      function X(e) {
        return null == W[e] && (W = { ...W, [e]: new A.Z({ name: e }) }), W[e];
      }
      function J(e) {
        return null == z[e] && (z = { ...z, [e]: new Z.Z({ url: e }) }), z[e];
      }
      function $(e) {
        !K.has(e) && Y.add(e);
      }
      function ee(e) {
        if ((0, f.Z)(e)) return T.r9;
        let t =
          null != e.application_id
            ? C.Z.getApplication(e.application_id)
            : null;
        return null != t
          ? t
          : (0, _.Z)(e)
            ? X(e.name)
            : (0, m.Z)(e) && null != e.url
              ? J(e.url)
              : (null != e.application_id && $(e.application_id), t);
      }
      function et(e) {
        let t = U.Z.getVoiceStateForUser(e);
        return (null == t ? void 0 : t.channelId) != null &&
          y.Z.canWithPartialContext(k.Plq.VIEW_CHANNEL, {
            channelId: t.channelId,
          })
          ? t.channelId
          : null;
      }
      function en(e) {
        return j.Z.isFriend(e.id);
      }
      function ei(e, t, n) {
        var i, l, r, a, s, c;
        let u;
        let f = w.default.getCurrentUser(),
          _ =
            null !== (i = null == f ? void 0 : f.nsfwAllowed) &&
            void 0 !== i &&
            i,
          m = t.map((e) => e.id),
          g = t.filter((t) => e.has(t.id)),
          I = !1,
          N = [],
          v = new Set(),
          M = !1,
          j = [];
        for (let e of t) {
          let n = b.Z.getAnyStreamForUser(e.id),
            i = R.Z.getChannel(null == n ? void 0 : n.channelId);
          if (
            (null == i ? void 0 : i.isNSFW()) &&
            (!_ || !P.Z.didAgree(null == i ? void 0 : i.getGuildId()))
          )
            continue;
          let s = Q(e.id);
          if (
            (null != n && j.push({ stream: n, streamUser: e, activity: s }),
            null == s)
          )
            continue;
          let c = (0, S.Z)(s);
          if (null == c) continue;
          M = c === T.XB;
          let u = (function (e) {
              let t = C.Z.getApplication(e);
              return null != t
                ? t
                : "string" != typeof e
                  ? (new E.Z("NowPlayingViewStore").error(
                      "Unknown type for applicationId: "
                        .concat(typeof e, ", value: ")
                        .concat(e),
                      { tags: { source: "ACTIVITIES" } },
                    ),
                    null)
                  : e === T.XB
                    ? T.r9
                    : e.startsWith(A.H)
                      ? X(e.slice(A.H.length))
                      : e.startsWith(Z._)
                        ? J(e.slice(Z._.length))
                        : ($(e), null);
            })(c),
            m = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
          if ((0, p.Z)(s)) {
            let t = (0, d.a)();
            if (
              (0, h.ZP)({
                activity: s,
                userId: e.id,
                application: u,
                channelId:
                  null === (r = U.Z.getVoiceStateForUser(e.id)) || void 0 === r
                    ? void 0
                    : r.channelId,
                currentUser: f,
                isActivitiesEnabledForCurrentPlatform: t,
                ChannelStore: R.Z,
                VoiceStateStore: U.Z,
                PermissionStore: y.Z,
                GuildStore: O.Z,
              }) !== h.Fw.CAN_JOIN
            )
              continue;
          } else if (null == m) continue;
          if (!x.JE(s) || null == u || v.has(u.id)) continue;
          let g = null != s ? ee(s) : null;
          (null == g || g.id !== u.id) && (s = null);
          let D = [];
          (D =
            null != s && null != s.party && null != s.party.id
              ? Array.from(
                  null !== (a = L.Z.getParty(s.party.id)) && void 0 !== a
                    ? a
                    : [],
                ).reduce((e, t) => {
                  let n = w.default.getUser(t);
                  return null != n && e.push(n), e;
                }, [])
              : t.filter((e) => {
                  let t = Q(e.id),
                    n = null != t ? ee(t) : null;
                  return null != n && n.id === u.id;
                })),
            (D = o().orderBy(D, [en], ["desc"])).length !== t.length &&
              (I = !0),
            v.add(u.id),
            N.push({
              game: u,
              activity: s,
              activityUser: e,
              startedPlayingTime: m,
              playingMembers: D,
            });
        }
        let k = 1 === g.length,
          B = [],
          V = new Set(),
          H = new Set();
        for (let e of t) {
          let n = et(e.id),
            i = R.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = O.Z.getGuild(l);
          if (
            (H.has(l) && V.has(n)) ||
            null == i ||
            null == r ||
            i.id === r.afkChannelId
          )
            null == i && ((u = null), (k = !0));
          else {
            let e = U.Z.getVoiceStatesForChannel(i.id),
              a = o()(e)
                .map((e) => {
                  let { userId: t } = e;
                  return w.default.getUser(t);
                })
                .filter(G.lm)
                .orderBy([en], ["desc"])
                .value();
            a.filter((e) => !m.includes(e.id)).forEach((e) => t.push(e)),
              k ? !H.has(l) && (u = null) : ((u = r), (k = !0)),
              H.add(l),
              V.add(n),
              B.push({ channel: i, guild: r, members: a, voiceStates: e });
          }
        }
        return {
          id: n,
          voiceChannels: B,
          isSpotifyActivity: M,
          priorityMembers: g.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id),
          })),
          partiedMembers: t,
          showPlayingMembers: I,
          guildContext: u,
          currentActivities: ((s = N),
          (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
          }),
          o()(s).orderBy([c, (e) => e.game.name], ["desc", "asc"])).value(),
          applicationStreams: j,
        };
      }
      function el() {
        return B && N.Z.isConnected();
      }
      let er = o().throttle(() => {
        !(function () {
          var e;
          if (!el()) return;
          Y.clear(),
            (F = (H = (function (e) {
              let t = (e) => e.voiceChannels.length > 0;
              return e
                .values()
                .orderBy(
                  [
                    (e) =>
                      !!(t(e) && (0, I.NH)("now-playing-view-store")) &&
                      e.voiceChannels.some((e) => {
                        let { voiceStates: t } = e;
                        return Object.values(t).some(
                          (e) => !1 === e.discoverable,
                        );
                      }),
                    (e) => e.partiedMembers.length > 1,
                    (e) => e.applicationStreams.length > 0,
                    t,
                    (e) => e.currentActivities.length > 0,
                    (e) => e.isSpotifyActivity,
                    (e) =>
                      e.priorityMembers
                        .map((e) => e.user.username.toLowerCase())
                        .join(" "),
                  ],
                  ["asc", "desc", "desc", "desc", "desc", "asc", "asc"],
                )
                .value();
            })(
              (function (e) {
                let t = q(),
                  n = ei.bind(null, t);
                return o()(e).mapValues(n);
              })(
                ((e = Array.from(q()).reduce((e, t) => {
                  let n = w.default.getUser(t);
                  return null != n && !n.bot && e.push(n), e;
                }, [])),
                o()(e).groupBy((e) => {
                  var t;
                  let n = et(e.id),
                    i = Q(e.id);
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
              ),
            ).filter((e) => {
              let t = (0, I.NH)("now-playing-view-store"),
                n = t && e.partiedMembers.some((e) => j.Z.isBlocked(e.id)),
                i =
                  t &&
                  e.voiceChannels.length > 0 &&
                  e.voiceChannels.every((e) => {
                    let { voiceStates: t } = e;
                    return Object.values(t).every((e) => !1 === e.discoverable);
                  });
              return (
                (e.voiceChannels.length >= 1 ||
                  e.currentActivities.length > 0 ||
                  e.applicationStreams.length > 0) &&
                !n &&
                !i
              );
            })).map((e) => ({ type: k.GOo.USER, party: e }))),
            !(function () {
              if (Y.size > 0) {
                let e = Array.from(Y);
                g.ZP.fetchApplications(e),
                  e.forEach((e) => K.add(e)),
                  Y.clear();
              }
            })(),
            (V = !0);
        })(),
          eo.emitChange();
      }, 1e3);
      function ea() {
        return !!el() && (er(), !1);
      }
      class es extends (i = c.ZP.Store) {
        initialize() {
          this.syncWith(
            [w.default, C.Z, D.Z, L.Z, U.Z, b.Z, j.Z, M.Z, v.Z],
            ea,
          ),
            this.waitFor(N.Z, O.Z, C.Z, w.default, v.Z);
        }
        get currentActivityParties() {
          return H;
        }
        get nowPlayingCards() {
          return F;
        }
        get isMounted() {
          return B;
        }
        get loaded() {
          return V;
        }
      }
      (a = "NowPlayingViewStore"),
        (r = "displayName") in (l = es)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a);
      let eo = new es(u.Z, {
        LOGOUT: function () {
          (B = !1), (H = []), (F = []), Y.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
          (B = !0), er();
        },
        NOW_PLAYING_UNMOUNTED: function () {
          B = !1;
        },
      });
      t.Z = eo;
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        l,
        r = n(735250);
      n(470079);
      var a = n(120356),
        s = n.n(a),
        o = n(325767),
        c = n(865244);
      ((l = i || (i = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: l,
          foreground: a,
          className: u,
          title: d,
          ...h
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(h),
          width: t,
          height: n,
          className: s()(
            u,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return c.left;
                case "RIGHT":
                  return c.right;
                case "UP":
                  return null;
                case "DOWN":
                  return c.down;
                case "UP_LEFT":
                  return c.upLeft;
                case "DOWN_RIGHT":
                  return c.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: a,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (t.Z = u);
    },
    72416: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(325767);
      function r(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: r = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, l.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z",
              fill: r,
              className: a,
            }),
            (0, i.jsx)("path", {
              d: "M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z",
              fill: r,
              className: a,
            }),
            (0, i.jsx)("path", {
              d: "M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z",
              fill: r,
              className: a,
            }),
          ],
        });
      }
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
          return s;
        },
      }),
        n(47120),
        n(733860),
        n(653041);
      var i = n(740504),
        l = n(131704),
        r = n(990492),
        a = n(981631);
      function s(e, t) {
        return (
          null != e &&
          null != t &&
          (e === t ||
            ((0, l.r8)(e) && (0, l.r8)(t)) ||
            ((0, l.bw)(e) && (0, l.bw)(t)))
        );
      }
      function o(e, t, n, i) {
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
          if (s(e.channel.type, n)) return e;
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
              return null != e && (n || s(e.type, i));
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
                    s = o(-1, t.id, e.type, n);
                  return null == s || s.channel.id === e.id
                    ? null
                    : null == r || r.channel.type === l
                      ? { referenceId: s.channel.id, parentId: null }
                      : null;
                })(e, n, r)
              : null;
        if (s(e.type, n.type)) return u(n);
        if (i < t)
          return n.type === d
            ? (function (e, t, n) {
                var i;
                let r =
                    n[(null !== (i = c(t, n, !0)) && void 0 !== i ? i : 0) - 1],
                  a = o(1, t.id, e.type, n);
                if (null == r) return { referenceId: null, parentId: null };
                if (null != a) {
                  if (
                    s(r.channel.type, e.type) ||
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
                  a = o(1, t.id, e.type, n);
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
                a = o(-1, t.id, e.type, n);
              if (null != a) {
                if (null == r)
                  return { referenceId: a.channel.id, parentId: t.id };
                if (
                  s(r.channel.type, e.type) ||
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
                r = o(-1, t.id, e.type, n);
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
        let s,
          o,
          u = [],
          d = [],
          h = a._categories,
          p = (t) => {
            var n, i, l, a;
            let c;
            if (
              null == s ||
              null == o ||
              ((n = e),
              (i = s),
              (l = o),
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
            else c = r.ZP.moveItemFromTo(t, s, o);
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
          (s = c(e, n)), (o = c(t, n)), (d = p(n)).unshift(h[0]);
        }
        if ((0, l.r8)(e.type) || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
            let {
              channel: { type: t },
            } = e;
            return (0, l.r8)(t);
          });
          (s = c(e, n)), (o = c(t, n)), p(n);
        }
        if (e.isGuildVocal() || e.isCategory()) {
          let n = (0, i.Z)(d.length > 0 ? d : h, a, (e) => {
            let { channel: t } = e;
            return t.isGuildVocal();
          });
          (s = c(e, n)), (o = c(t, n)), p(n);
        }
        if (e.parent_id !== n) {
          let t = !1;
          u.find((i) => i.id === e.id && ((i.parent_id = n), (t = !0))),
            !t && u.push({ id: e.id, parent_id: n });
        }
        return u;
      }
    },
    65205: function (e, t, n) {
      function i(e, t, n) {
        return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
      }
      function l(e, t, n, l) {
        return i(e, n, l) !== i(t, n, l) && i(e, t, n) !== i(e, t, l);
      }
      function r(e, t, n) {
        let i = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        return {
          x: t.x + ((t.x - e.x) / i) * n,
          y: t.y + ((t.y - e.y) / i) * n,
        };
      }
      function a(e, t, n) {
        let i = { x: n.x, y: n.y },
          r = { x: n.x + n.width, y: n.y },
          a = { x: n.x, y: n.y + n.height },
          s = { x: n.x + n.width, y: n.y + n.height };
        return l(e, t, i, r) || l(e, t, r, s) || l(e, t, s, a) || l(e, t, a, i);
      }
      n.d(t, {
        Vr: function () {
          return a;
        },
        ld: function () {
          return r;
        },
      });
    },
    476221: function (e, t, n) {
      var i = n(981631),
        l = n(689938);
      t.Z = {
        getStatus: function (e) {
          let t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (e) {
            case i.hes.CONNECTING:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_CONNECTING);
              break;
            case i.hes.AUTHENTICATING:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_AUTHENTICATING);
              break;
            case i.hes.AWAITING_ENDPOINT:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT);
              break;
            case i.hes.RTC_CONNECTED:
              (t = i.QKv.CONNECTED),
                (n = r
                  ? l.Z.Messages.CONNECTION_STATUS_VIDEO_CONNECTED
                  : l.Z.Messages.CONNECTION_STATUS_VOICE_CONNECTED);
              break;
            case i.hes.RTC_CONNECTING:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_RTC_CONNECTING);
              break;
            case i.hes.ICE_CHECKING:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_ICE_CHECKING);
              break;
            case i.hes.DTLS_CONNECTING:
              (t = i.QKv.CONNECTING),
                (n = l.Z.Messages.CONNECTION_STATUS_DTLS_CONNECTING);
              break;
            case i.hes.NO_ROUTE:
              (t = i.QKv.ERROR), (n = l.Z.Messages.CONNECTION_STATUS_NO_ROUTE);
              break;
            case i.hes.RTC_DISCONNECTED:
              (t = i.QKv.ERROR),
                (n = l.Z.Messages.CONNECTION_STATUS_RTC_DISCONNECTED);
              break;
            case i.hes.DISCONNECTED:
            default:
              (t = i.QKv.ERROR),
                (n = l.Z.Messages.CONNECTION_STATUS_DISCONNECTED);
          }
          return { connectionStatus: t, connectionStatusText: n };
        },
        getShortHostname: function (e) {
          return null == e ? "" : e.split(".")[0];
        },
      };
    },
    658797: function (e, t, n) {
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
    931450: function (e, t, n) {
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
    156762: function (e, t, n) {
      e.exports = {
        empty: "empty_c47fa9",
        headerText: "headerText_c47fa9",
        privateChannelsHeaderContainer: "privateChannelsHeaderContainer_c47fa9",
        privateChannelRecipientsInviteButtonIcon:
          "privateChannelRecipientsInviteButtonIcon_c47fa9",
        scroller: "scroller_c47fa9",
      };
    },
    213169: function (e, t, n) {
      e.exports = {
        progressContainer: "progressContainer_ff398b",
        downloadIcon: "downloadIcon_ff398b",
      };
    },
    884921: function (e, t, n) {
      e.exports = { message: "message_f3e42a" };
    },
    56180: function (e, t, n) {
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
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    609415: function (e, t, n) {
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
    599293: function (e, t, n) {
      e.exports = {
        container: "container_ff2ab3",
        close: "close_ff2ab3",
        closeIcon: "closeIcon_ff2ab3",
        imageContainer: "imageContainer_ff2ab3",
        image: "image_ff2ab3",
        message: "message_ff2ab3",
        title: "title_ff2ab3",
        live: "live_ff2ab3",
        center: "center_ff2ab3",
        noImageTitle: "noImageTitle_ff2ab3",
        button: "button_ff2ab3",
        header: "header_ff2ab3",
        participants: "participants_ff2ab3",
        pill: "pill_ff2ab3",
        pillIcon: "pillIcon_ff2ab3",
        pillLabel: "pillLabel_ff2ab3",
        locationContainer: "locationContainer_ff2ab3",
        location: "location_ff2ab3",
        locationIcon: "locationIcon_ff2ab3",
        avatar: "avatar_ff2ab3",
      };
    },
    888914: function (e, t, n) {
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
    737116: function (e, t, n) {
      e.exports = {
        notice: "notice_c54479",
        button: "button_c54479",
        invite: "invite_c54479",
        title: "title_c54479",
        inviteContainer: "inviteContainer_c54479",
        envelope: "envelope_c54479",
        message: "message_c54479",
      };
    },
    847744: function (e, t, n) {
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
    822650: function (e, t, n) {
      e.exports = { container: "container_d91ad9" };
    },
    941443: function (e, t, n) {
      e.exports = { tooltipText: "tooltipText_ce31b4" };
    },
    599576: function (e, t, n) {
      e.exports = {
        pill: "pill_dcc7a4",
        favoriteIcon: "favoriteIcon_dcc7a4",
        ring: "ring_dcc7a4",
        ringActive: "ringActive_dcc7a4",
      };
    },
    138592: function (e, t, n) {
      e.exports = {
        content: "content_aa99af",
        contentNoArt: "contentNoArt_aa99af",
        contentPremium: "contentPremium_aa99af",
        artAbsolute: "artAbsolute_aa99af art_aa99af",
        artInline: "artInline_aa99af art_aa99af",
        body: "body_aa99af",
        header: "header_aa99af",
        headerWithPremiumIcon: "headerWithPremiumIcon_aa99af header_aa99af",
        premiumIcon: "premiumIcon_aa99af",
        button: "button_aa99af",
        buttonContainerHorizontal: "buttonContainerHorizontal_aa99af",
        buttonContainerVertical: "buttonContainerVertical_aa99af",
        pointer: "pointer_aa99af",
        bottomPointer: "bottomPointer_aa99af",
        centerLeftPointer: "centerLeftPointer_aa99af",
        topLeftPointer: "topLeftPointer_aa99af",
        gifTag: "gifTag_aa99af",
        earlyAccessText: "earlyAccessText_aa99af",
        earlyAccessIcon: "earlyAccessIcon_aa99af",
        earlyAccessBadgeContainer: "earlyAccessBadgeContainer_aa99af",
      };
    },
    66: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c07d45",
        icon: "icon_c07d45",
        badge: "badge_c07d45",
      };
    },
    402723: function (e, t, n) {
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
    897365: function (e, t, n) {
      e.exports = { premiumChannelIcon: "premiumChannelIcon_f7460c" };
    },
    462397: function (e, t, n) {
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
    566461: function (e, t, n) {
      e.exports = { content: "content_cc29d1" };
    },
    134743: function (e, t, n) {
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
    289223: function (e, t, n) {
      e.exports = {
        container: "container_e88961",
        popoutHeaderContainer: "popoutHeaderContainer_e88961",
        headerDivider: "headerDivider_e88961",
        settingNudgeText: "settingNudgeText_e88961",
      };
    },
    216749: function (e, t, n) {
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
    51299: function (e, t, n) {
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
    872356: function (e, t, n) {
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
    718317: function (e, t, n) {
      e.exports = { newChannel: "newChannel_ecb303" };
    },
    932355: function (e, t, n) {
      e.exports = {
        icon20px: "icon20px_e06fdc",
        container: "container_e06fdc",
        overflow: "overflow_e06fdc",
        modeMuted: "modeMuted_e06fdc",
      };
    },
    774264: function (e, t, n) {
      e.exports = {
        scroller: "scroller_c43953",
        unreadBar: "unreadBar_c43953",
        unreadBottom:
          "unreadBottom_c43953 unread_c43953 " + n("888914").container,
        positionedContainer: "positionedContainer_c43953",
        unreadTop: "unreadTop_c43953 unread_c43953 " + n("888914").container,
        voiceUserSummary: "voiceUserSummary_c43953",
        sectionDivider: "sectionDivider_c43953",
      };
    },
    645627: function (e, t, n) {
      e.exports = {
        popoutHeader: "popoutHeader_aab567",
        channelIcon: "channelIcon_aab567",
        channelName: "channelName_aab567",
      };
    },
    501223: function (e, t, n) {
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
    813397: function (e, t, n) {
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
    316512: function (e, t, n) {
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
    82915: function (e, t, n) {
      e.exports = {
        container: "container_e1e976",
        spine: "spine_e1e976",
        spineBorder: "spineBorder_e1e976",
        spineWithGuildIcon: "spineWithGuildIcon_e1e976 spine_e1e976",
        spineBorderWithGuildIcon:
          "spineBorderWithGuildIcon_e1e976 spineBorder_e1e976",
      };
    },
    494075: function (e, t, n) {
      e.exports = { mentionsBadge: "mentionsBadge_e2a798 iconBase_e2a798" };
    },
    411740: function (e, t, n) {
      e.exports = { iconLive: "iconLive_dce222" };
    },
    624113: function (e, t, n) {
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
    447871: function (e, t, n) {
      e.exports = {
        statusDiv: "statusDiv_e66732",
        hoverable: "hoverable_e66732",
        pencilIcon: "pencilIcon_e66732",
        statusText: "statusText_e66732",
      };
    },
    929324: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_a5bc92",
        users: "users_a5bc92",
        total: "total_a5bc92",
        video: "video_a5bc92",
        extraLong: "extraLong_a5bc92",
        videoIcon: "videoIcon_a5bc92",
      };
    },
    649576: function (e, t, n) {
      e.exports = {
        container: "container_c23582",
        peopleIcon: "peopleIcon_c23582",
        userCountText: "userCountText_c23582",
      };
    },
    816614: function (e, t, n) {
      e.exports = {
        container: "container_b597a1",
        content: "content_b597a1",
        buttonContainer: "buttonContainer_b597a1",
        primaryButton: "primaryButton_b597a1",
        cancel: "cancel_b597a1",
        image: "image_b597a1",
      };
    },
    673193: function (e, t, n) {
      e.exports = { pill: "pill_f36a5a" };
    },
    577837: function (e, t, n) {
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
    355161: function (e, t, n) {
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
    788131: function (e, t, n) {
      e.exports = {
        dragInner: "dragInner_f734d8",
        placeholderMask: "placeholderMask_f734d8",
      };
    },
    322459: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_db6521",
        selected: "selected_db6521",
        circleIcon: "circleIcon_db6521",
        pill: "pill_db6521",
      };
    },
    115376: function (e, t, n) {
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
    779033: function (e, t, n) {
      e.exports = {
        circleIconButton: "circleIconButton_f85ca4",
        geoRestrictedBadge: "geoRestrictedBadge_f85ca4",
      };
    },
    55869: function (e, t, n) {
      e.exports = { guildNotif: "guildNotif_e3bac1" };
    },
    877861: function (e, t, n) {
      e.exports = {
        container: "container_aa1bff",
        popoutAnchor: "popoutAnchor_aa1bff",
        popoutContainer: "popoutContainer_aa1bff",
        popoutCaret: "popoutCaret_aa1bff",
        popoutCaretLeft: "popoutCaretLeft_aa1bff",
        footer: "footer_aa1bff",
        gradient: "gradient_aa1bff",
        gradientHidden: "gradientHidden_aa1bff",
        genericBackgroundImage:
          "genericBackgroundImage_aa1bff backgroundImage_aa1bff",
        popoutContent: "popoutContent_aa1bff",
        close: "close_aa1bff",
        coachmarkTextContainer: "coachmarkTextContainer_aa1bff",
      };
    },
    767573: function (e, t, n) {
      e.exports = {
        blobContainer: "blobContainer_a5ad63",
        pill: "pill_a5ad63",
        sorting: "sorting_a5ad63",
        wobble: "wobble_a5ad63",
        selected: "selected_a5ad63",
      };
    },
    342824: function (e, t, n) {
      e.exports = {
        pill: "pill_f9623d",
        downloadProgress: "downloadProgress_f9623d",
        tutorialContainer: "tutorialContainer_f9623d",
      };
    },
    466474: function (e, t, n) {
      e.exports = {
        listItemWrapper: "listItemWrapper_dfb2f8",
        listItemTooltip: "listItemTooltip_dfb2f8",
        selected: "selected_dfb2f8",
      };
    },
    355355: function (e, t, n) {
      e.exports = {
        listItem: "listItem_c96c45",
        unavailableBadge: "unavailableBadge_c96c45",
        iconBadge: "iconBadge_c96c45",
        isCurrentUserConnected: "isCurrentUserConnected_c96c45",
        tutorialContainer: "tutorialContainer_c96c45",
      };
    },
    414644: function (e, t, n) {
      e.exports = { guildSeparator: "guildSeparator_d0c57e" };
    },
    355123: function (e, t, n) {
      e.exports = {
        guildsError: "guildsError_aada25",
        errorInner: "errorInner_aada25",
      };
    },
    941823: function (e, t, n) {
      e.exports = {
        pauseBackground: "pauseBackground_fdcfe0",
        pause: "pause_fdcfe0",
      };
    },
    496657: function (e, t, n) {
      e.exports = { pendingIcon: "pendingIcon_ae3d49" };
    },
    126332: function (e, t, n) {
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
    458672: function (e, t, n) {
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
    534255: function (e, t, n) {
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
    904297: function (e, t, n) {
      e.exports = {
        button: "button_adca65",
        enabled: "enabled_adca65",
        disabled: "disabled_adca65",
      };
    },
    874757: function (e, t, n) {
      e.exports = { subtext: "subtext_be40e6" };
    },
    686182: function (e, t, n) {
      e.exports = { title: "title_b97bdb" };
    },
    168851: function (e, t, n) {
      e.exports = {
        panel: "panel_bf1a22",
        body: "body_bf1a22",
        liveBadge: "liveBadge_bf1a22",
        gameName: "gameName_bf1a22",
        clickableGameName: "clickableGameName_bf1a22",
        gameWrapper: "gameWrapper_bf1a22",
        liveIndicator: "liveIndicator_bf1a22",
        gameIconWrapper: "gameIconWrapper_bf1a22",
        gameIcon: "gameIcon_bf1a22",
        sparkleContainer: "sparkleContainer_bf1a22",
        sparkles: "sparkles_bf1a22",
        info: "info_bf1a22",
        actions: "actions_bf1a22",
        panelButtonContainer: "panelButtonContainer_bf1a22",
        activityName: "activityName_bf1a22",
        channel: "channel_bf1a22",
        perksDemoContainer: "perksDemoContainer_bf1a22",
        perksDemoText: "perksDemoText_bf1a22",
      };
    },
    663031: function (e, t, n) {
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
      };
    },
    507815: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
    91475: function (e, t, n) {
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
    30352: function (e, t, n) {
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
    903949: function (e, t, n) {
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
    108983: function (e, t, n) {
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
    739949: function (e, t, n) {
      e.exports = {
        container: "container_feab95",
        title: "title_feab95",
        tabs: "tabs_feab95",
        tabBarItem: "tabBarItem_feab95",
        debugPanelStandalone: "debugPanelStandalone_feab95",
        debugPanelSection: "debugPanelSection_feab95",
      };
    },
    700883: function (e, t, n) {
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
    666790: function (e, t, n) {
      e.exports = {
        status: "status_dcb18f",
        hoverableStatus: "hoverableStatus_dcb18f",
      };
    },
    64570: function (e, t, n) {
      e.exports = {
        container: "container_f59a38",
        tag: "tag_f59a38",
        header: "header_f59a38",
        code: "code_f59a38",
      };
    },
    956731: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    606053: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    293992: function (e, t, n) {
      e.exports = {
        tooltipContainer: "tooltipContainer_eb20d6",
        tooltipBackground: "tooltipBackground_eb20d6",
        tooltip: "tooltip_eb20d6",
        tooltipContent: "tooltipContent_eb20d6",
      };
    },
    557342: function (e, t, n) {
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
    601539: function (e, t, n) {
      e.exports = { soundButton: "soundButton_d608d3" };
    },
    865244: function (e, t, n) {
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
//# sourceMappingURL=be132021d9f4e0c7a1b0.js.map
