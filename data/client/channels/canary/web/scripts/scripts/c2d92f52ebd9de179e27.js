"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84656"],
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
    515753: function (e, t, n) {
      n.d(t, {
        PZ: function () {
          return Q;
        },
        Qj: function () {
          return $;
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
        v = n(385499),
        C = n(570908),
        x = n(702321),
        I = n(201895),
        _ = n(43267),
        Z = n(933557),
        b = n(979264),
        S = n(588688),
        N = n(163889),
        E = n(111028),
        y = n(540059),
        j = n(853856),
        T = n(93687),
        P = n(785232),
        A = n(878857),
        w = n(565640),
        M = n(518950),
        L = n(199902),
        R = n(158776),
        D = n(306680),
        G = n(699516),
        k = n(111583),
        B = n(9156),
        U = n(594174),
        O = n(709054),
        V = n(998502),
        H = n(788307),
        F = n(981631),
        W = n(388032),
        z = n(926540);
      let q = V.ZP.getEnableHardwareAcceleration()
          ? p.AnimatedAvatar
          : p.Avatar,
        Y = { offset: { top: 2, bottom: 2, right: 4 } },
        Q = (e) =>
          (0, i.jsx)(p.Clickable, {
            className: z.closeButton,
            ...e,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, i.jsx)(p.XSmallIcon, {
              size: "md",
              color: "currentColor",
              className: z.closeIcon,
            }),
          }),
        J = () =>
          (0, i.jsx)(p.StarIcon, {
            size: "xs",
            color: "currentColor",
            className: z.favoriteIcon,
          }),
        K = () =>
          (0, i.jsx)(p.EyeSlashIcon, {
            size: "xs",
            color: "currentColor",
            className: z.favoriteIcon,
          }),
        X = () =>
          (0, i.jsx)(p.DenyIcon, {
            size: "xs",
            color: "currentColor",
            className: z.favoriteIcon,
          });
      function $(e) {
        let {
            route: t,
            selected: n,
            icon: l,
            iconClassName: r,
            avatarWithTextClassName: o,
            interactiveClassName: s,
            text: u,
            children: h,
            locationState: m,
            onClick: f,
            className: g,
            role: v,
            "aria-posinset": x,
            "aria-setsize": I,
            ..._
          } = e,
          Z = (0, y.Q3)("PrivateChannelLinkButton");
        return (0, i.jsx)(N.Z, {
          className: a()(z.channel, { [z.fullWidth]: d.tq }, g),
          onClick: f,
          role: v,
          focusProps: { within: !0, ...Y },
          "aria-posinset": x,
          "aria-setsize": I,
          children: (0, i.jsx)(p.Interactive, {
            as: "div",
            selected: n,
            className: a()(s, z.interactive, z.linkButton, {
              [z.interactiveSelected]: n,
            }),
            children: (0, i.jsxs)(c.rU, {
              to: { pathname: t, state: m },
              className: z.link,
              ..._,
              children: [
                (0, i.jsx)(C.Z, {
                  selected: n,
                  muted: !1,
                  avatar: (0, i.jsx)(l, {
                    size: Z ? "refresh_sm" : void 0,
                    className: a()(z.linkButtonIcon, r),
                    color: "currentColor",
                  }),
                  name: u,
                  innerClassName: a()(z.avatarWithText, o),
                }),
                h,
              ],
            }),
          }),
        });
      }
      function ee(e) {
        var t;
        let {
            channel: r,
            isGDMFacepileEnabled: o,
            selected: d = !1,
            user: y,
            activities: T,
            applicationStream: w,
            entry: L,
            isTyping: R,
            status: k,
            isMobile: U,
            "aria-posinset": O,
            "aria-setsize": V,
          } = e,
          [$, ee] = l.useState(!1),
          et = l.useRef(null),
          en = l.useRef(null),
          {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er,
          } = (0, M.Z)({
            user: y,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $),
          }),
          ea = (0, h.e7)([B.ZP], () =>
            B.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          { ignored: eo, blocked: es } = (0, h.cj)([G.Z], () => ({
            ignored: G.Z.isIgnored(r.getRecipientId()),
            blocked: G.Z.isBlocked(r.getRecipientId()),
          })),
          ec = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(r.id) > 0),
          eu = (0, Z.ZP)(r),
          ed = (0, h.e7)([j.Z], () => j.Z.isFavorite(r.id)),
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
            m.Z.preload(F.ME, r.id);
          },
          eg = (e) => {
            e.stopPropagation();
          },
          ev = (e) => {
            if (e.target === e.currentTarget) {
              var t;
              null === (t = et.current) || void 0 === t || t.click();
            }
          },
          eC = (e) => {
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
                      user: y,
                      channel: r,
                      channelSelected: d,
                    });
                });
          },
          ex = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: eu }),
              l = W.intl.format(W.t.SSIVOj, { name: eu });
            r.isManaged() &&
              ((t = W.intl.formatToPlainString(W.t.hVGjER, { name: eu })),
              (l = W.intl.format(W.t.IK1Qvr, { name: eu }))),
              (0, p.openModalLazy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (n) =>
                  (0, i.jsx)(e, { header: t, body: l, onSubmit: em, ...n });
              });
          },
          eI = () => {
            let e = {
              className: z.activity,
              textClassName: z.activityText,
              emojiClassName: a()(z.activityEmoji, { [z.mutedEmoji]: ea }),
            };
            return r.isSystemDM()
              ? (0, i.jsx)("div", {
                  className: z.subtext,
                  children: (0, x.Z)(r.id)
                    ? W.intl.string(W.t.FL5T09)
                    : W.intl.string(W.t.NnY5lZ),
                })
              : r.isMultiUserDM()
                ? (0, i.jsx)("div", {
                    className: z.subtext,
                    children: W.intl.format(W.t.CxSA5O, {
                      members: r.recipients.length + 1,
                    }),
                  })
                : k !== F.Skl.OFFLINE &&
                    k !== F.Skl.INVISIBLE &&
                    null != T &&
                    T.length > 0
                  ? (0, i.jsx)(H.ZP, {
                      ...e,
                      activities: T,
                      applicationStream: w,
                      animate: $,
                      hideTooltip: !0,
                      user: y,
                    })
                  : null != L
                    ? (0, i.jsx)(S.Z, { ...e, entry: L })
                    : null;
          },
          e_ = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
              return r.recipients.length >= 2 && o && null == r.icon
                ? (0, i.jsx)(P.Z, {
                    "aria-hidden": !0,
                    recipients: r.recipients,
                    size: e,
                    isTyping: R,
                    status: k,
                  })
                : (0, i.jsx)(q, {
                    ...er,
                    src: (0, _.x)(r),
                    "aria-hidden": !0,
                    size: e,
                    status: R ? F.Skl.ONLINE : k,
                    isTyping: R,
                  });
            s()(
              null != y,
              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
            );
            let t = null;
            return (
              !y.isSystemUser() && (t = (0, g.Z)(T) ? F.Skl.STREAMING : k),
              (0, i.jsx)(q, {
                ...er,
                size: p.AvatarSizes.SIZE_32,
                src: ei,
                avatarDecoration: el,
                status: t,
                isMobile: U,
                isTyping: R,
                "aria-label": y.username,
                statusTooltip: !0,
              })
            );
          },
          eZ = r.isMultiUserDM(),
          eb = r.isSystemDM(),
          eS = (0, A.Q)(),
          eN = !eZ && !eb && r.type === F.d4z.DM,
          eE = eN && (null == y ? void 0 : y.primaryGuild) != null,
          ey = eN && eo,
          ej = eN && es,
          eT = eE
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  eu,
                  (0, i.jsx)(b.ZP, {
                    primaryGuild: null == y ? void 0 : y.primaryGuild,
                    userId: null == y ? void 0 : y.id,
                    inline: !0,
                    disableGuildProfile: !0,
                    className: z.clanTag,
                  }),
                ],
              })
            : eu,
          eP = null !== (t = ea || ey || ej) && void 0 !== t && t;
        return (0, i.jsx)(u.mh, {
          id: r.id,
          children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(N.Z, {
              className: a()(z.channel, z.dm),
              role: t,
              focusProps: { ...Y, focusTarget: et, ringTarget: en },
              ref: en,
              onMouseEnter: eh,
              onMouseLeave: ep,
              onMouseDown: ef,
              onContextMenu: eC,
              "aria-setsize": V,
              "aria-posinset": O,
              children: (0, i.jsxs)(p.Interactive, {
                className: a()(z.interactive, {
                  [z.interactiveSystemDM]: eS && eb,
                  [z.interactiveSelected]: d,
                }),
                as: "div",
                onClick: ev,
                muted: eP,
                selected: d,
                children: [
                  (0, i.jsx)(c.rU, {
                    innerRef: et,
                    to: F.Z5c.CHANNEL(F.ME, r.id),
                    className: z.link,
                    "aria-label": (0, I.ZP)({ channel: r, unread: ec }),
                    ...n,
                    children: (0, i.jsx)(C.Z, {
                      avatar: e_(),
                      selected: d,
                      highlighted: ec,
                      muted: eP,
                      subText: eI(),
                      name: (0, i.jsx)(E.Z, {
                        tooltipClassName: z.overflowTooltip,
                        children: eT,
                      }),
                      decorators: r.isSystemDM()
                        ? (0, i.jsx)(v.Z, {
                            className: z.decorator,
                            type: v.Z.Types.SYSTEM_DM,
                            verified: !0,
                          })
                        : null,
                    }),
                  }),
                  ed ? (0, i.jsx)(J, {}) : null,
                  ey ? (0, i.jsx)(K, {}) : null,
                  ej ? (0, i.jsx)(X, {}) : null,
                  (0, i.jsx)(Q, {
                    "aria-label": eZ
                      ? W.intl.string(W.t["26C4oq"])
                      : W.intl.string(W.t.jsvgc3),
                    onClick: eZ ? ex : em,
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
          r = (0, h.e7)([U.default], () =>
            U.default.getUser(t.getRecipientId()),
          ),
          {
            isStatusIndicatorEnabled: a,
            isTypingIndicatorEnabled: o,
            isFacepileEnabled: s,
          } = T.Z.useExperiment(
            { location: "private_channel" },
            { autoTrackExposure: !0 },
          ),
          c = null == r ? void 0 : r.id,
          u = (0, h.cj)(
            [R.Z, L.Z],
            () => {
              let e;
              if (t.isMultiUserDM()) {
                if (a) {
                  let n = R.Z.getState().statuses;
                  t.recipients.some((e) => n[e] === F.Skl.ONLINE) &&
                    (e = F.Skl.ONLINE);
                }
              } else null != c && (e = R.Z.getStatus(c));
              return {
                status: e,
                activities: null != c ? R.Z.getActivities(c) : null,
                applicationStream:
                  null != c ? L.Z.getAnyStreamForUser(c) : null,
                isMobile: null != c && R.Z.isMobileOnline(c),
              };
            },
            [t, c, a],
          ),
          d = (0, w.Z)(null == r ? void 0 : r.id, "PrivateChannel"),
          p = (0, h.e7)(
            [U.default, k.Z],
            () => {
              if (t.isMultiUserDM())
                return (
                  !!o &&
                  O.default.keys(k.Z.getTypingUsers(t.id)).some((e) => {
                    var t;
                    return (
                      e !==
                      (null === (t = U.default.getCurrentUser()) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  })
                );
              if (null != r) return k.Z.isTyping(t.id, t.getRecipientId());
              return !1;
            },
            [t, r, o],
          );
        return t.isMultiUserDM()
          ? (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              isTyping: p,
              status: u.status === F.Skl.ONLINE ? F.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l,
            })
          : (0, i.jsx)(ee, {
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
        v = n(367907),
        C = n(453542),
        x = n(702321),
        I = n(82295),
        _ = n(313201),
        Z = n(540059),
        b = n(860144),
        S = n(214852),
        N = n(518311),
        E = n(355298),
        y = n(869404),
        j = n(333984),
        T = n(210887),
        P = n(592125),
        A = n(158776),
        w = n(55589),
        M = n(515753),
        L = n(981631),
        R = n(388032),
        D = n(312565);
      function G(e, t, n) {
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
      let k = o.memo(function () {
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
      class B extends (l = o.Component) {
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
                    innerAriaLabel: R.intl.string(R.t.YUU0RE),
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
                    ...o,
                    ...i,
                  }),
              });
            },
          });
        }
        constructor(...e) {
          super(...e),
            G(this, "state", {
              initialized: !1,
              preRenderedChildren: 0,
              totalRowCount: 0,
              nonNullChildren: [],
            }),
            G(this, "_list", null),
            G(this, "hasReportedAnalytics", !1),
            G(this, "reportAnalytics", () => {
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
                c = n.some((e) => (0, x.Z)(e)),
                u = {
                  num_users_visible: a.length,
                  num_users_visible_with_mobile_indicator: s.filter(
                    (e) => null != e && A.Z.isMobileOnline(e),
                  ).length,
                };
              (this.hasReportedAnalytics = !0),
                v.ZP.trackWithMetadata(L.rMx.DM_LIST_VIEWED, {
                  ...u,
                  ...(0, C.X)(),
                  visible_user_ids: s.filter((e) => null != e),
                  changelog_dm_visible: c,
                });
            }),
            G(this, "getSectionHeight", (e) => {
              let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
              return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            G(
              this,
              "handleScroll",
              c()(() => {
                if (null != this._list) {
                  let e = this._list.getScrollerNode();
                  null != e && f.Z.updateChannelListScroll(L.ME, e.scrollTop);
                }
              }, 100),
            ),
            G(this, "renderDM", (e, t) => {
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
                    M.ZP,
                    {
                      channel: s,
                      selected: s.id === l,
                      "aria-posinset": o + t + 1,
                      "aria-setsize": r,
                    },
                    s.id,
                  );
            }),
            G(this, "renderChild", (e) => {
              let { nonNullChildren: t, totalRowCount: n } = this.state,
                i = t[e];
              return o.isValidElement(i)
                ? o.cloneElement(i, {
                    "aria-setsize": n,
                    "aria-posinset": e + 1,
                  })
                : i;
            }),
            G(this, "renderRow", (e) => {
              let { section: t, row: n } = e,
                { privateChannelIds: i } = this.props;
              return 0 === t
                ? this.renderChild(n)
                : 0 === n && 0 === i.length
                  ? (0, a.jsx)(k, {}, "no-private-channels")
                  : this.renderDM(t, n);
            }),
            G(this, "renderSection", (e) => {
              let { section: t } = e,
                { showDMHeader: n } = this.props;
              return 0 !== t && n
                ? (0, a.jsxs)(
                    I.Z,
                    {
                      className: D.privateChannelsHeaderContainer,
                      children: [
                        (0, a.jsx)("span", {
                          className: D.headerText,
                          children: R.intl.string(R.t.YUU0RE),
                        }),
                        (0, a.jsx)(N.Z, {
                          tooltip: R.intl.string(R.t["6Urw1t"]),
                          tooltipPosition: "top",
                          popoutAlign: "left",
                          iconClassName:
                            D.privateChannelRecipientsInviteButtonIcon,
                          icon: m.PlusSmallIcon,
                          subscribeToGlobalHotkey: !0,
                        }),
                      ],
                    },
                    t,
                  )
                : null;
            }),
            G(this, "getRowHeight", (e, t) => {
              let {
                  privateChannelIds: n,
                  isVisualRefreshEnabled: i,
                  density: l,
                } = this.props,
                { nonNullChildren: r } = this.state,
                a = 44;
              if (i) {
                if (0 === e) {
                  let e = r[t];
                  if (o.isValidElement(e)) {
                    var s;
                    a = (
                      null === (s = e.key) || void 0 === s
                        ? void 0
                        : s.startsWith("section-divider")
                    )
                      ? 25
                      : "dm-quick-launcher" === e.key
                        ? 67
                        : "compact" === l
                          ? 32
                          : 40;
                  }
                } else a = "compact" === l ? 44 : 50;
              } else if (0 === e) {
                let e = r[t];
                o.isValidElement(e) &&
                  "dm-quick-launcher" === e.key &&
                  (a = 80);
              }
              return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
        }
      }
      G(B, "defaultProps", { padding: 8 });
      t.Z = (e) => {
        let t = (0, Z.Q3)("ConnectedPrivateChannelsList"),
          { density: n } = (0, m.useThemeContext)(),
          { version: i, theme: l, children: r, showDMHeader: s } = e,
          c = o.Children.count(r),
          p = P.Z.getMutablePrivateChannels(),
          f = (0, y.k1)(p),
          v = (0, h.Wu)(
            [w.Z, E.Z, j.Z],
            () => {
              let e = w.Z.getPrivateChannelIds();
              return (0, y.tU)(e, [E.Z, j.Z]);
            },
            [],
          );
        (0, S.z)(b.R);
        let C = (0, h.cj)([g.Z, T.Z, P.Z], () => ({
            theme: T.Z.darkSidebar ? L.BRd.DARK : l,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version:
              null != i
                ? "".concat(i, ":").concat(P.Z.getPrivateChannelsVersion())
                : P.Z.getPrivateChannelsVersion(),
          })),
          x = o.useRef(null),
          I = o.useCallback((e) => {
            let t = x.current,
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
          N = o.useCallback(
            () =>
              new Promise((e) => {
                let t = x.current;
                if (null == t) return e();
                t.scrollToTop({
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [],
          ),
          A = o.useCallback(
            () =>
              new Promise((e) => {
                let t = x.current;
                if (null == t) return e();
                t.scrollToBottom({
                  callback() {
                    requestAnimationFrame(() => setTimeout(e, 100));
                  },
                });
              }),
            [],
          ),
          M = (0, _.Dt)(),
          R = (0, d.ZP)({
            id: "private-channels-".concat(M),
            isEnabled: C.keyboardModeEnabled,
            scrollToStart: N,
            scrollToEnd: A,
            defaultFocused: (c + (s ? 1 : 0)).toString(),
            setFocus: I,
          });
        return (0, a.jsx)(u.bG, {
          navigator: R,
          children: (0, a.jsx)(B, {
            density: n,
            isVisualRefreshEnabled: t,
            channels: f,
            privateChannelIds: v,
            listRef: x,
            theme: l,
            version: i,
            ...e,
            children: r,
            ...C,
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
        v = n(941128),
        C = n(780570),
        x = n(353042),
        I = n(981631),
        _ = n(388032),
        Z = n(282115);
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
      let S = {
        [I.vxO.INSTALLING]: {
          [m.J6.NONE]: (e, t) =>
            _.intl.formatToPlainString(_.t["p+2sEx"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t["/0NgPD"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.ZIwMzs, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t["3IQDUl"], {
              name: e,
              timeRemaining: t,
            }),
        },
        [I.vxO.UPDATING]: {
          [m.J6.NONE]: (e, t) =>
            _.intl.formatToPlainString(_.t["6F9QzM"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t["2OVgVl"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.mgQg1N, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t["aTdq4+"], {
              name: e,
              timeRemaining: t,
            }),
        },
        [I.vxO.REPAIRING]: {
          [m.J6.NONE]: (e, t) =>
            _.intl.formatToPlainString(_.t["p+2sEx"], { name: e }),
          [m.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t["/0NgPD"], {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.ZIwMzs, {
              name: e,
              timeRemaining: t,
            }),
          [m.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t["3IQDUl"], {
              name: e,
              timeRemaining: t,
            }),
        },
      };
      class N extends r.PureComponent {
        renderText() {
          let { state: e, isPaused: t } = this.props;
          if (
            e.type === I.vxO.UPDATING ||
            e.type === I.vxO.REPAIRING ||
            e.type === I.vxO.INSTALLING
          ) {
            if (t) return _.intl.string(_.t["5oxtFR"]);
            if (e.stage === I.f07.PATCHING || e.stage === I.f07.REPAIRING)
              return (0, l.jsx)(x.Z, {
                getHistoricalTotalBytes: g.Z.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody,
              });
          }
          return null;
        }
        render() {
          let e = this.renderText();
          return null != e ? e : _.intl.string(_.t.cw57am);
        }
        constructor(...e) {
          super(...e),
            b(this, "renderProgressBody", (e, t) => {
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
      class E extends (i = r.PureComponent) {
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
            ? _.intl.string(_.t.cw57am)
            : (0, l.jsx)(N, { application: e, state: t, isPaused: n });
        }
        render() {
          let { percent: e, isPaused: t, className: n } = this.props;
          return (0, l.jsx)(s.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: o()(n, Z.progressContainer),
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
                      className: Z.downloadIcon,
                    }),
                  }),
                }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "state", { animationScale: new s.Z.Value(0) }),
            b(this, "handleOnClick", (e) => {
              let { onClick: t } = this.props;
              e.preventDefault(),
                e.stopPropagation(),
                null != t && t(e),
                (0, f.uL)(I.Z5c.APPLICATION_LIBRARY);
            });
        }
      }
      b(E, "defaultProps", { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
      function y(e, t) {
        return e.reduce((e, n) => {
          let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
          return null != r && e.push(r), e;
        }, []);
      }
      t.Z = c.ZP.connectStores([v.Z, g.Z, p.Z], () => {
        let e = v.Z.activeItems,
          t = y(e, g.Z),
          { total: n, progress: i } = C.lK(t);
        return {
          percent: C.xI(i, n),
          isPaused: v.Z.paused,
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
                  ? (0, l.jsx)(E, { ...n })
                  : null,
            })
          : (0, l.jsx)(E, { ...n });
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
        o = n(84210);
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
          return N;
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
        v = n(430824),
        C = n(496675),
        x = n(914010),
        I = n(281029),
        _ = n(700785),
        Z = n(981631);
      let b = "DRAGGABLE_GUILD_CHANNEL";
      function S(e, t) {
        var n, i;
        if (null == e || null == t) return null;
        if (e !== Z.I_8) return m.Z.getChannel(t);
        let l = g.ZP.getChannels(e),
          r =
            null !==
              (i =
                null !== (n = l[g.sH].find((e) => e.channel.id === t)) &&
                void 0 !== n
                  ? n
                  : l[g.Zb].find((e) => e.channel.id === t)) && void 0 !== i
              ? i
              : l[Z.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
        return null == r ? void 0 : r.channel;
      }
      function N(e) {
        return (0, l.G)(
          b,
          {
            drop(e, t) {
              let n;
              let l = x.Z.getGuildId(),
                r = t.getItem(),
                a = (0, I.if)(
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
                p = v.Z.getGuild(l);
              if (null == p) return;
              let g = (0, I.Dn)(u, S(l, a.referenceId), a.parentId, h);
              if (0 !== g.length) {
                if (l === Z.I_8) {
                  (0, d.s3)(g);
                  return;
                }
                if (
                  ((g = g.filter((e) => {
                    let { id: t } = e,
                      n = m.Z.getChannel(t);
                    if (null == n) return !1;
                    let i = m.Z.getChannel(n.parent_id);
                    return n.type === Z.d4z.GUILD_CATEGORY || null == i
                      ? C.Z.can(Z.Plq.MANAGE_CHANNELS, p)
                      : C.Z.can(Z.Plq.MANAGE_CHANNELS, i);
                  })),
                  u.parent_id !== a.parentId &&
                    g.find((e) => {
                      if (e.id !== u.id) return !1;
                      let t = m.Z.getChannel(e.parent_id);
                      if (
                        !(
                          null != t &&
                          C.Z.can(Z.Plq.MANAGE_ROLES, u) &&
                          C.Z.can(Z.Plq.MANAGE_ROLES, t)
                        )
                      )
                        return !0;
                      let i = _.o4(u, t),
                        l = _.o4(u, m.Z.getChannel(u.parent_id));
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
              let l = (0, I.if)(
                m.Z.getChannel(n.id),
                n.position,
                e.channel,
                e.position,
                n.channelList,
              );
              if (null == l) return !1;
              if (x.Z.getGuildId() === Z.I_8) return !0;
              let r = v.Z.getGuild(n.guildId);
              if (null == r) return !1;
              let a = m.Z.getChannel(l.parentId),
                o = m.Z.getChannel(i.parent_id),
                s = C.Z.can(Z.Plq.MANAGE_CHANNELS, r),
                c = null != o ? C.Z.can(Z.Plq.MANAGE_CHANNELS, o) : s,
                u = null != a ? C.Z.can(Z.Plq.MANAGE_CHANNELS, a) : s;
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
            b,
            {
              canDrag(e) {
                let { channel: t } = e;
                if (x.Z.getGuildId() === Z.I_8) return !0;
                let l = v.Z.getGuild(t.getGuildId());
                if (null == l) return !1;
                if ((0, h.r1)(l.id) && C.Z.can(Z.Plq.MANAGE_CHANNELS, l))
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
                if (t.type === Z.d4z.GUILD_CATEGORY)
                  return C.Z.can(Z.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                let r = m.Z.getChannel(t.parent_id);
                return (
                  (null != r && C.Z.can(Z.Plq.MANAGE_CHANNELS, r)) ||
                  (null == r && C.Z.can(Z.Plq.MANAGE_CHANNELS, l))
                );
              },
              beginDrag(e) {
                let {
                    channel: { id: t, parent_id: n, guild_id: i, type: l },
                    position: r,
                  } = e,
                  a = x.Z.getGuildId(),
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
                      t.type === Z.d4z.GUILD_CATEGORY &&
                      null != o[t.id] &&
                      0 === o[t.id].length
                    )
                      return (
                        a === Z.I_8 ||
                        (C.Z.can(Z.Plq.MANAGE_CHANNELS, t) &&
                          C.Z.can(Z.Plq.VIEW_CHANNEL, t))
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
          return p;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(540059),
        o = n(594174),
        s = n(74538),
        c = n(327943),
        u = n(997945),
        d = n(630117),
        h = n(441319);
      function p() {
        let e = (0, a.Q3)("AppIconHome"),
          [t, n, p] = (0, l.Wu)([o.default, c.Z], () => [
            c.Z.getCurrentDesktopIcon(),
            c.Z.isEditorOpen,
            s.ZP.isPremium(o.default.getCurrentUser()),
          ]),
          m = (0, h.aW)(t),
          f = t !== u.aH.DEFAULT && (p || n),
          g = e ? 24 : 30,
          v = (0, i.jsx)(r.ClydeIcon, {
            size: "custom",
            color: "currentColor",
            width: g,
            height: g,
          });
        return null != m && f ? (0, i.jsx)(d.Z, { id: t, width: 48 }) : v;
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
        a = n(743483);
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
      var i = n(192379);
      if (12633 == n.j) var l = n(232713);
      var r = n(65400),
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
    18998: function (e, t, n) {
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
        p = n(702294);
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
            className: o()(p.bar, e, { [p.hidden]: n }),
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
      class v extends (i = r.PureComponent) {
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
      m(v, "contextType", h.AccessibilityPreferencesContext),
        m(v, "defaultProps", {
          className: p.container,
          reverse: !1,
          hide: !1,
          animate: !0,
        }),
        (t.Z = v);
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
        v = n(388032),
        C = n(703757);
      function x(e) {
        (0, o.jW)(e, async () => {
          let { default: e } = await n.e("21960").then(n.bind(n, 999466));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
      function I() {
        (0, f.C1)();
      }
      let _ = (e) => {
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
              artClassName: C.clipsEducationArt,
              position: "top",
              header: (0, i.jsx)("div", {
                className: C.header,
                children: v.intl.format(v.t["o+srEx"], {
                  keybind: t,
                  keybindHook: () =>
                    (0, i.jsx)("span", {
                      className: C.keybindHintKeys,
                      children: (0, i.jsx)(a.KeyCombo, {
                        className: C.keybindShortcut,
                        shortcut: t,
                      }),
                    }),
                }),
              }),
              headerClassName: C.clipsEducationHeader,
              body: (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  color: "always-white",
                  className: C.bodyText,
                  children: v.intl.format(v.t.DWeRm5, {
                    keybindHook: () =>
                      (0, i.jsx)("div", { className: C.keyCombo, children: t }),
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
        return (0, i.jsx)(_, {
          keybindString: s,
          children: (0, i.jsx)(c.Z, {
            disabled: r,
            tooltipText:
              null != o
                ? v.intl.formatToPlainString(v.t.HIMcv7, {
                    hotkey: h.BB(null == o ? void 0 : o.shortcut, !0),
                  })
                : v.intl.string(v.t.s52pjo),
            onClick: I,
            onContextMenu: x,
            icon: a.ClipsIcon,
          }),
        });
      };
    },
    163889: function (e, t, n) {
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(620865);
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
          return o;
        },
      });
      var i = n(109213),
        l = n(91641),
        r = n(136885),
        a = n(987338);
      let o = new l.E(
        [r.NR, r.ZI, r.Ob, r.uc, r.m1, i.G],
        a.$P.DM_GDM_LIST_RENDER,
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
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(540059),
        c = n(593214),
        u = n(981631),
        d = n(388032),
        h = n(134123),
        p = n(782451),
        m = n(572488);
      function f() {
        return (0, i.jsx)("div", {
          className: a()(p.row, p.rowGuildName),
          children: (0, i.jsx)("span", {
            className: a()(
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
          r = (0, s.Q3)("FavoritesAddedTooltip"),
          a = (function () {
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
        return (0, i.jsx)(o.Tooltip, {
          forceOpen: a,
          color: o.TooltipColors.GREEN,
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
          return L;
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
        p = n(16609),
        m = n(540059),
        f = n(276952),
        g = n(682662),
        v = n(674552),
        C = n(593364),
        x = n(905423),
        I = n(199902),
        _ = n(592125),
        Z = n(944486),
        b = n(979651),
        S = n(709054),
        N = n(853856),
        E = n(593214),
        y = n(919755),
        j = n(110977),
        T = n(603274),
        P = n(981631),
        A = n(388032),
        w = n(120555);
      let M = {
        analyticsSource: {
          page: P.ZY5.GUILD_CHANNEL,
          section: P.jXE.CHANNEL_LIST,
          object: P.qAy.CHANNEL,
        },
      };
      function L() {
        let e = (0, o.Ie)("favorites"),
          { favoriteAdded: t, clearFavoriteAdded: r } = (0, E.up)(),
          [L, R] = l.useState(!1),
          { favoriteServerMuted: D, favoriteChannels: G } = (0, s.cj)(
            [N.Z],
            () => ({
              favoriteChannels: N.Z.getFavoriteChannels(),
              favoriteServerMuted: N.Z.favoriteServerMuted,
            }),
          ),
          k = (0, s.e7)([Z.Z], () => Z.Z.getChannelId(P.I_8)),
          B = (0, s.e7)([_.Z], () => _.Z.getChannel(k)),
          U = (0, x.Z)((e) => e.guildId) === P.I_8,
          { badge: O, unread: V } = (0, y.Z)(G),
          H = (function (e) {
            let t = (0, s.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
              n = null != t && null != e[t],
              i = (0, s.e7)([I.Z], () => {
                if (!n) return !1;
                let t = I.Z.getCurrentUserActiveStream();
                return null != t && null != e[t.channelId];
              }),
              l = (0, s.e7)([I.Z], () =>
                I.Z.getAllApplicationStreams().some(
                  (t) => null != e[t.channelId],
                ),
              ),
              r = (0, s.e7)([b.Z], () => n && null != t && b.Z.hasVideo(t), [
                n,
                t,
              ]),
              a = (0, s.Wu)([h.ZP], () =>
                S.default
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
                    let { location: n } = t,
                      i = (0, p.p)(n);
                    return null != i && null != e[i];
                  },
                ),
              ),
              c = a.length > 0,
              u = !1,
              d = !1,
              m = !1,
              f = !1;
            return (
              n ? ((u = !r), (d = r), (m = i), (f = o)) : ((m = l), (f = c)),
              (0, v.Or)({
                audio: u,
                video: d,
                screenshare: m,
                liveStage: !1,
                isCurrentUserConnected: n,
                activity: f,
              })
            );
          })(G),
          F = O > 0 ? (0, C.N)(O) : null,
          W = (0, m.Q3)("FavoritesButton"),
          z = l.useCallback(() => {
            r();
          }, [r]);
        return (0, i.jsxs)(g.H, {
          children: [
            (0, i.jsx)(f.Z, {
              selected: U,
              hovered: L,
              unread: V && !D,
              className: w.pill,
            }),
            (0, i.jsx)(T.Z, {
              onShow: z,
              children: (0, i.jsx)(j.S, {
                children: (0, i.jsx)(c.BlobMask, {
                  selected: W || U || L,
                  upperBadge: H,
                  lowerBadge: F,
                  children: (0, i.jsx)(c.NavItem, {
                    ...e,
                    ariaLabel: A.intl.formatToPlainString(A.t["/uzRsr"], {
                      guildName: A.intl.string(A.t.wMWycn),
                      mentions: O,
                    }),
                    to: { pathname: P.Z5c.CHANNEL(P.I_8, k), state: M },
                    selected: U || L,
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    onMouseDown: function () {
                      if (null != B) u.Z.preload(B.guild_id, B.id);
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
                      className: a()(w.ring, { [w.ringActive]: t }),
                      children: (0, i.jsx)(c.StarIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: w.favoriteIcon,
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
        h = n(540059),
        p = n(565799),
        m = n(501655),
        f = n(199902),
        g = n(592125),
        v = n(594174),
        C = n(938475),
        x = n(823379),
        I = n(709054),
        _ = n(853856),
        Z = n(981631),
        b = n(388032),
        S = n(782451),
        N = n(572488);
      function E(e, t) {
        return 0 === t.length
          ? null
          : (0, i.jsxs)("div", {
              className: S.row,
              children: [
                (0, i.jsx)(e, {
                  className: S.activityIcon,
                  color: "currentColor",
                }),
                (0, i.jsx)(d.Z, { guildId: void 0, users: t, max: 6 }),
              ],
            });
      }
      function y() {
        var e, t;
        let n = (0, s.Wu)([_.Z, g.Z], () =>
            I.default
              .keys(_.Z.getFavoriteChannels())
              .map((e) => g.Z.getChannel(e))
              .filter(x.lm),
          ),
          l = n.map((e) => e.id),
          r = n.filter((e) => e.type === Z.d4z.GUILD_VOICE),
          a = n
            .filter((e) => e.type === Z.d4z.GUILD_STAGE_VOICE)
            .map((e) => e.id),
          h = (0, s.Wu)(
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
          b = (0, s.Wu)([p.Z], () =>
            o().flatMap(a, (e) =>
              p.Z.getMutableParticipants(e, m.pV.SPEAKER)
                .filter((e) => e.type === m.Ui.VOICE)
                .map((e) => {
                  let { user: t } = e;
                  return t;
                }),
            ),
          ),
          N = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of a) e += p.Z.getParticipantCount(t, m.pV.AUDIENCE);
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
          j = (0, s.Wu)(
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
          T = (0, s.Wu)([v.default], () => j.map((e) => v.default.getUser(e)), [
            j,
          ]),
          P = (0, s.Wu)([v.default], () => y.map((e) => v.default.getUser(e)), [
            y,
          ]),
          A = E(
            c.VoiceNormalIcon,
            h.filter((e) => !y.includes(e.id) && !j.includes(e.id)),
          );
        let w =
            ((e = b),
            (t = N),
            0 === e.length
              ? null
              : (0, i.jsxs)("div", {
                  className: S.row,
                  children: [
                    (0, i.jsx)(c.StageIcon, {
                      size: "lg",
                      color: "currentColor",
                      className: S.activityIcon,
                    }),
                    (0, i.jsx)(d.Z, { guildId: void 0, users: e, max: 3 }),
                    (0, i.jsxs)("div", {
                      className: S.stageListenerPill,
                      children: [
                        (0, i.jsx)(c.HeadphonesIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                        (0, i.jsx)(c.Text, {
                          className: S.stageListenerCount,
                          color: "text-normal",
                          variant: "text-xs/medium",
                          children: t,
                        }),
                      ],
                    }),
                  ],
                })),
          M = E(
            c.ScreenArrowIcon,
            P.filter((e) => null != e && !j.includes(e.id)),
          ),
          L = E(c.ActivitiesIcon, T);
        return (0, i.jsxs)(i.Fragment, { children: [w, A, M, L] });
      }
      function j() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(S.row, S.rowGuildName),
              children: (0, i.jsx)("span", {
                className: r()(S.guildNameText, S.guildNameTextLimitedSize),
                children: b.intl.string(b.t.wMWycn),
              }),
            }),
            (0, i.jsx)(y, {}),
          ],
        });
      }
      function T(e) {
        let { "aria-label": t = !1, onShow: n, children: l } = e,
          r = (0, h.Q3)("FavoritesTooltip");
        return (0, i.jsx)(c.Tooltip, {
          hideOnClick: !0,
          spacing: r ? 12 : 20,
          position: "right",
          text: (0, i.jsx)(j, {}),
          "aria-label": t,
          tooltipClassName: N.listItemTooltip,
          onTooltipShow: n,
          children: (e) => (0, i.jsx)("div", { ...e, children: l }),
        });
      }
    },
    765585: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(393238),
        c = n(605236),
        u = n(279745),
        d = n(921944),
        h = n(388032),
        p = n(410842);
      t.Z = l.forwardRef(function (e, t) {
        let {
            body: n,
            header: r,
            artClassName: m,
            headerClassName: f,
            contentClassName: g,
            tryItText: v,
            dismissText: C,
            onTryFeature: x,
            onClose: I,
            className: _,
            inlineArt: Z = !1,
            isPremiumFeature: b = !1,
            shouldUseHorizontalButtons: S = !1,
            showGIFTag: N = !1,
            dismissibleContent: E,
            position: y = "top",
            align: j = "center",
            art: T,
            isPremiumEarlyAccess: P = !1,
            maxWidth: A = 280,
            hideDismissButton: w = !1,
            pointerClassName: M,
            dismissIconClassName: L,
            dismissIcon: R,
            onDismissIconClick: D,
          } = e,
          G = S ? o.Button.Sizes.LARGE : o.Button.Sizes.MAX,
          [k, B] = l.useState(!1),
          { ref: U, width: O } = (0, s.Z)();
        function V(e) {
          (0, c.EW)(E, { dismissAction: e });
        }
        return (
          l.useEffect(() => {
            var e, t;
            let n =
              (null !==
                (t =
                  null === (e = U.current) || void 0 === e
                    ? void 0
                    : e.scrollWidth) && void 0 !== t
                ? t
                : 0) + 64;
            !k && n > A && B(!0);
          }, [k, O, U, A]),
          l.useEffect(() => {
            (0, c.kk)(E);
          }, [E]),
          (0, i.jsx)("div", {
            className: _,
            ref: t,
            children: (0, i.jsxs)("div", {
              className: a()(p.content, g, {
                [p.contentNoArt]: null == m || Z,
                [p.contentPremium]: b || P,
              }),
              children: [
                null != R &&
                  (0, i.jsx)(o.Clickable, {
                    onClick: D,
                    className: L,
                    children: R,
                  }),
                (0, i.jsxs)("div", {
                  className: a()(m, Z ? p.artInline : p.artAbsolute),
                  children: [N && (0, i.jsx)(u.Z, { className: p.gifTag }), T],
                }),
                (0, i.jsxs)("div", {
                  className: p.body,
                  children: [
                    (0, i.jsxs)(o.Heading, {
                      className: a()(b ? p.headerWithPremiumIcon : p.header, f),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        b && !P
                          ? (0, i.jsx)(o.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: p.premiumIcon,
                            })
                          : null,
                        P
                          ? (0, i.jsxs)(o.Text, {
                              color: "always-white",
                              variant: "eyebrow",
                              className: p.earlyAccessBadgeContainer,
                              children: [
                                (0, i.jsx)(o.NitroWheelIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: p.earlyAccessIcon,
                                }),
                                (0, i.jsx)("span", {
                                  className: p.earlyAccessText,
                                  children: h.intl.string(h.t.phHyIS),
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
                        ? (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: n,
                          })
                        : n,
                  ],
                }),
                (0, i.jsx)("div", {
                  ref: U,
                  className:
                    k || !S
                      ? p.buttonContainerVertical
                      : p.buttonContainerHorizontal,
                  children:
                    null != x
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(o.Button, {
                              className: p.button,
                              size: G,
                              onClick: (e) => {
                                null == I || I(e), x(e), V(d.L.PRIMARY);
                              },
                              color:
                                b || P
                                  ? o.Button.Colors.BRAND_INVERTED
                                  : o.Button.Colors.WHITE,
                              children:
                                null != v ? v : h.intl.string(h.t.IHf1RE),
                            }),
                            !w &&
                              (0, i.jsx)(o.Button, {
                                className: p.button,
                                size: G,
                                onClick: (e) => {
                                  null == I || I(e), V(d.L.DISMISS);
                                },
                                color:
                                  b || P
                                    ? o.Button.Colors.WHITE
                                    : o.Button.Colors.BRAND,
                                look:
                                  b || P
                                    ? o.Button.Looks.LINK
                                    : o.Button.Looks.FILLED,
                                children:
                                  null != C ? C : h.intl.string(h.t.om7Ovr),
                              }),
                          ],
                        })
                      : (0, i.jsx)(o.Button, {
                          className: p.button,
                          size: o.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == I || I(e), V(d.L.PRIMARY);
                          },
                          color: o.Button.Colors.WHITE,
                          children: h.intl.string(h.t.HU2IR0),
                        }),
                }),
                (0, i.jsx)("div", {
                  className: a()(p.pointer, M, {
                    [p.bottomPointer]: "top" === y,
                    [p.centerLeftPointer]: "right" === y && "center" === j,
                    [p.topLeftPointer]: "right" === y && "top" === j,
                  }),
                }),
              ],
            }),
          })
        );
      });
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
        u = n(494315);
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
          return w;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(476183),
        s = n(91192),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(239091),
        p = n(100527),
        m = n(367907),
        f = n(906732),
        g = n(540059),
        v = n(434404),
        C = n(496675),
        x = n(259580),
        I = n(267642),
        _ = n(624138),
        Z = n(667815),
        b = n(531572),
        S = n(26323),
        N = n(30513),
        E = n(981631),
        y = n(388032),
        j = n(976019);
      let T = (0, _.Mg)(
          u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN,
        ),
        P = (e) => {
          let { guild: t, onSelect: n } = e,
            [r, a] = l.useState(t.premiumProgressBarEnabled),
            [o, s] = l.useState(!1),
            u = (0, c.e7)([C.Z], () => C.Z.can(E.Plq.MANAGE_GUILD, t)),
            p = async () => {
              if (!!u)
                s(!0),
                  await v.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }),
                  a(!r),
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
              disabled: o,
              action: p,
            }),
          });
        },
        A = 57,
        w = 57 + T,
        M = { tension: 180, friction: 80 };
      t.ZP = (e) => {
        let { guild: t, withMargin: n } = e,
          r = (0, g.Q3)("GuildBoostingSidebarDisplay"),
          { analyticsLocations: u } = (0, f.ZP)(
            p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY,
          ),
          { premiumSubscriberCount: v, id: _ } = t,
          T = (0, I.rF)(v, _),
          A = (0, I.FZ)(T, t.id),
          w = null == A,
          L = null != A ? A : T,
          R = (0, c.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getCountForGuild(_)) && void 0 !== e
              ? e
              : 0;
          }),
          D = (0, c.e7)([C.Z], () => C.Z.can(E.Plq.MANAGE_GUILD, t));
        l.useEffect(() => {
          R !== v && (0, Z.v)(_, v);
        }, [_, R, v]);
        let G = "".concat(Math.min(100, (v / (0, I.vn)(t.id)[L]) * 100), "%"),
          { current: k } = l.useRef(G),
          B = {
            from: { width: R === v ? k : "0%" },
            to: { width: G },
            config: M,
          },
          [U, O] = (0, d.useSpring)(() => B),
          V = () => {
            (0, m.yw)(E.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
              location: { section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR },
              guild_id: _,
              location_stack: u,
            }),
              (0, S.Z)({
                analyticsLocations: u,
                analyticsSourceLocation: {
                  page: E.ZY5.GUILD_CHANNEL,
                  section: E.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                  object: E.qAy.TOOLTIP,
                },
                guild: t,
                perks: (0, N.VF)(),
                perkIntro: y.intl.string(y.t.ZhvSn5),
              });
          },
          H = y.intl.formatToPlainString(y.t["2oNfMT"], {
            levelName: (0, I.e9)(L),
          }),
          F = y.intl.format(y.t.dhKnYm, {
            numBoosts: v,
            numTotal: (0, I.vn)(t.id)[L],
          });
        w &&
          ((H = (0, I.e9)(L)),
          (F = y.intl.format(y.t.B2byER, { numBoosts: v }))),
          r && (H = H.toLocaleLowerCase());
        let W = (0, s.JA)("boosts-".concat(t.id));
        return (0, i.jsx)("li", {
          children: (0, i.jsx)(d.Tooltip, {
            text: w
              ? y.intl.string(y.t["Y+V9go"])
              : y.intl.formatToPlainString(y.t.UyDKl5, {
                  levelName: (0, I.nW)(L),
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
                onClick: V,
                onMouseEnter: () => {
                  var t;
                  null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
                    O(B);
                },
                className: a()(j.container, { [j.containerWithMargin]: n }),
                onContextMenu: (e) => {
                  D && (0, h.vq)(e, (e) => (0, i.jsx)(P, { ...e, guild: t }));
                },
                children: [
                  (0, i.jsx)(d.HiddenVisually, { children: e["aria-label"] }),
                  (0, i.jsxs)("div", {
                    className: j.textArea,
                    children: [
                      (0, i.jsx)("div", {
                        className: j.goalTextContainer,
                        children: (0, i.jsx)(d.Text, {
                          className: j.goalText,
                          color: r ? "none" : "interactive-active",
                          variant: r ? "text-sm/medium" : "text-xs/bold",
                          children: H,
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: j.progressFraction,
                        children: [
                          (0, i.jsx)(d.Text, {
                            color: r ? "none" : "interactive-normal",
                            variant: r ? "text-sm/medium" : "text-xs/normal",
                            className: j.progressText,
                            children: F,
                          }),
                          (0, i.jsx)(x.Z, {
                            className: j.count,
                            height: 16,
                            width: 16,
                            direction: x.Z.Directions.RIGHT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: a()(j.progressBarContainer, {
                      [j.progressBarContainerComplete]: w,
                    }),
                    children: [
                      (0, i.jsx)(o.animated.div, {
                        className: j.progressBar,
                        style: U,
                      }),
                      w
                        ? (0, i.jsx)("span", {
                            "aria-label": y.intl.string(y.t["7iL1q6"]),
                            role: "img",
                            className: j.tadaIcon,
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
              let v = (function (e, t, n, i) {
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
                  ...v,
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
          return x;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(704215),
        o = n(481060),
        s = n(566840),
        c = n(693546),
        u = n(826581),
        d = n(63568),
        h = n(246364),
        p = n(98493),
        m = n(434479),
        f = n(496675),
        g = n(527379),
        v = n(981631),
        C = n(388032);
      function x(e) {
        let { guild: t, selected: n } = e,
          x = (0, d.jS)(t.id, "Guild Sidebar"),
          I = (0, r.e7)([f.Z], () => f.Z.can(v.Plq.KICK_MEMBERS, t)),
          _ = (0, r.e7)([u.Z], () =>
            u.Z.getSubmittedGuildJoinRequestTotal(t.id),
          ),
          Z = x && I && null != _ ? _ : 0;
        l.useEffect(() => {
          I &&
            x &&
            c.Z.fetchGuildJoinRequests({
              guildId: t.id,
              status: h.wB.SUBMITTED,
              limit: p.p,
            });
        }, [I, t.id, x]);
        let b = l.useCallback(() => {
            (0, g._X)(t.id);
          }, [t.id]),
          S = (0, s.XL)(t.id, a.z.MEMBERS_LAUNCH_UPSELL);
        return (0, i.jsx)("div", {
          ref: S,
          children: (0, i.jsx)(m.m, {
            id: "members-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(o.GroupIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: C.intl.string(C.t.oclz3d),
            selected: n,
            onClick: b,
            trailing: Z > 0 ? (0, i.jsx)(o.NumberBadge, { count: Z }) : null,
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
        r = n(331595);
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
        s = n(434618),
        c = n(831746);
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
        v = n(592125),
        C = n(430824),
        x = n(306680),
        I = n(914010),
        _ = n(9156),
        Z = n(938475),
        b = n(823379),
        S = n(734307),
        N = n(981631);
      ((r = i || (i = {})).HIDDEN = "hidden"),
        (r.UNREAD = "unread"),
        (r.MENTIONS = "mentions"),
        (r.VOICE_CHANNELS = "voice-channels");
      let E = { mode: "hidden", mentionCount: 0, targetChannelId: null },
        y = { topBar: E, bottomBar: E },
        j = {},
        T = {};
      function P(e) {
        let t = v.Z.getChannel(e);
        return (
          !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
          !(t.isThread()
            ? g.Z.isMuted(t.id)
            : _.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
          (0, p.d)(t)
        );
      }
      function A(e) {
        let t = v.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = _.ZP.isGuildCollapsed(n),
          l = _.ZP.isChannelMuted(n, t.id);
        return (!i || !l) && x.ZP.getMentionCount(e) > 0;
      }
      function w(e) {
        return (
          !_.ZP.isChannelMuted(e.guild_id, e.id) &&
          (e.isGuildStageVoice()
            ? m.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0
            : Z.ZP.getVoiceStatesForChannel(e).length > 0)
        );
      }
      function M(e) {
        var t, n, i;
        let { guildChannels: l } =
            S.Z.getGuildWithoutChangingGuildActionRows(e),
          r = l.getChannels(null !== (t = T[e]) && void 0 !== t ? t : []);
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
          [g, v, C] = l.getSlicedChannels(r);
        for (let e = 0; e < v.length; e++) {
          let t = v[e];
          if (
            ((P(t.id) || u().some(t.threadIds, P)) && (h = !1),
            (A(t.id) || u().some(t.threadIds, A)) && (d = !1),
            f.includes(t.id) && (p = !0),
            !h && !d && p)
          )
            break;
        }
        let I = 0,
          _ = !1,
          Z = 0,
          b = !1;
        if (h || d)
          for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (P(t.id) || u().some(t.threadIds, P)) &&
              (null == o && (o = t.id), (_ = !0)),
              (A(t.id) || u().some(t.threadIds, A)) &&
                (null == a && (a = t.id),
                (I +=
                  x.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, x.ZP.getMentionCount)));
          }
        if (h || d)
          for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d) break;
            (P(t.id) || u().some(t.threadIds, P)) &&
              (null == c && (c = t.id), (b = !0)),
              (A(t.id) || u().some(t.threadIds, A)) &&
                (null == s && (s = t.id),
                (Z +=
                  x.ZP.getMentionCount(t.id) +
                  u().sumBy(t.threadIds, x.ZP.getMentionCount)));
          }
        let N = null,
          y = null,
          M =
            null !== (i = null == m ? void 0 : m.getChannelRecords()) &&
            void 0 !== i
              ? i
              : [];
        d && Z > 0
          ? (N = { mode: "mentions", mentionCount: Z, targetChannelId: s })
          : !p && u().some(M, w)
            ? (N = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
              })
            : h &&
              b &&
              (N = { mode: "unread", mentionCount: 0, targetChannelId: c }),
          d && I > 0
            ? (y = { mode: "mentions", mentionCount: I, targetChannelId: a })
            : h &&
              _ &&
              (y = { mode: "unread", mentionCount: 0, targetChannelId: o });
        let L =
            null != y &&
            (null == N || ("mentions" !== N.mode && "mentions" === y.mode)),
          R = null != N && ("mentions" === N.mode || !L);
        return (
          (j[e] = {
            topBar: L && null != y ? y : E,
            bottomBar: R && null != N ? N : E,
          }),
          !0
        );
      }
      let L = u().throttle(M, 200);
      function R(e) {
        let { guildId: t } = e,
          n = C.Z.getGuild(t);
        return !!(null != n && n.hasFeature(N.oNc.COMMUNITY)) && L(t);
      }
      function D(e) {
        let { id: t } = e,
          n = v.Z.getChannel(t);
        if (null == n) return !1;
        let i = C.Z.getGuild(n.guild_id);
        return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
      }
      function G(e) {
        let { channel: t } = e,
          n = v.Z.getChannel(t.id);
        if (null == n) return !1;
        let i = C.Z.getGuild(t.guild_id);
        return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
      }
      function k(e) {
        let { channelId: t } = e,
          n = v.Z.getChannel(t);
        if (null == n) return !1;
        let i = C.Z.getGuild(n.guild_id);
        return (
          !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) &&
          I.Z.getGuildId() === n.guild_id &&
          L(n.guild_id)
        );
      }
      function B(e) {
        let { guildId: t } = e;
        return null != t && L(t);
      }
      class U extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, x.ZP, _.ZP, g.Z, Z.ZP, I.Z, C.Z);
        }
        getUnreadStateForGuildId(e) {
          var t;
          return null !== (t = j[e]) && void 0 !== t ? t : y;
        }
      }
      (s = "ChannelListUnreadsStore"),
        (o = "displayName") in (a = U)
          ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[o] = s),
        (t.Z = new U(h.Z, {
          UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
              i = C.Z.getGuild(t);
            return (
              !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) &&
              null != n &&
              !u().isEqual(T[t], n) &&
              ((T[t] = n), M(t))
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
                  return null === (t = v.Z.getChannel(n)) || void 0 === t
                    ? void 0
                    : t.guild_id;
                })
                .filter(b.lm)
                .uniq()
                .forEach((e) => {
                  let t = C.Z.getGuild(e);
                  null != t &&
                    t.hasFeature(N.oNc.COMMUNITY) &&
                    L(e) &&
                    (n = !0);
                }),
              n
            );
          },
          CHANNEL_ACK: k,
          CHANNEL_DELETE: G,
          CHANNEL_LOCAL_ACK: k,
          MESSAGE_ACK: k,
          MESSAGE_CREATE: k,
          MESSAGE_DELETE_BULK: k,
          MESSAGE_DELETE: k,
          PASSIVE_UPDATE_V2: function (e) {
            let t = C.Z.getGuild(e.guildId);
            return (
              !!(
                e.channels.length > 0 &&
                null != t &&
                t.hasFeature(N.oNc.COMMUNITY)
              ) && L(e.guildId)
            );
          },
          RESORT_THREADS: k,
          THREAD_CREATE: G,
          THREAD_DELETE: G,
          THREAD_LIST_SYNC: R,
          THREAD_MEMBER_UPDATE: D,
          THREAD_MEMBERS_UPDATE: D,
          THREAD_UPDATE: G,
          BULK_CLEAR_RECENTS: R,
          CATEGORY_COLLAPSE_ALL: R,
          CATEGORY_EXPAND_ALL: R,
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = I.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n))
              return !1;
            let i = j[n];
            return null != i && "voice-channels" === i.bottomBar.mode && L(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: B,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: B,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && L(e.guild_id);
          },
          USER_GUILD_SETTINGS_GUILD_UPDATE: B,
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: B,
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
        r = n(63568),
        a = n(697379),
        o = n(241559),
        s = n(563534),
        c = n(655359),
        u = n(931261),
        d = n(460347),
        h = n(994592),
        p = n(265418),
        m = n(398758),
        f = n(330791),
        g = n(443063),
        v = n(981631);
      function C(e) {
        let t = (0, p.Z)(e.id),
          n = (0, a.W)(e.id),
          C = (0, h.j0)(e.id),
          x = (0, l.u)(e),
          I = (0, u.g)(e.id),
          _ = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
          Z = (0, d.Z)(e.id),
          b = (0, c.PE)(e.id),
          S = (0, o.n2)(e.id),
          N = [],
          E = e.hasFeature(v.oNc.HUB),
          y = e.hasFeature(v.oNc.COMMUNITY),
          j = (0, f.lN)(!(0, m.r1)(e.id)),
          T = e.hasFeature(
            v.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY,
          ),
          P = (0, r.jS)(e.id, "Guild Sidebar");
        return (
          E && N.push(g.z.GUILD_HUB_HEADER_OPTIONS),
          !b && I && Z && null != _ && _.length > 0
            ? N.push(g.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled &&
              N.push(g.z.GUILD_PREMIUM_PROGRESS_BAR),
          !E && I && N.push(g.z.GUILD_HOME),
          t && N.push(g.z.GUILD_SCHEDULED_EVENTS),
          !E && y && j && N.push(g.z.CHANNELS_AND_ROLES),
          C && N.push(g.z.GUILD_ROLE_SUBSCRIPTIONS),
          x && N.push(g.z.GUILD_SHOP),
          !P && n && N.push(g.z.GUILD_MEMBER_APPLICATIONS),
          S &&
            (y ||
              T ||
              (P && e.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            N.push(g.z.GUILD_MOD_DASH_MEMBER_SAFETY),
          N
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
          return b;
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
        v = n(768581),
        C = n(709054),
        x = n(981631),
        I = n(124368),
        _ = n(388032),
        Z = n(247472);
      function b(e) {
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
              .filter((t) => !(t.id in e) && m.Z.can(x.Plq.VIEW_CHANNEL, t))
              .sort((e, t) => {
                let n = f.ZP.lastMessageId(e.id),
                  i = f.ZP.lastMessageId(t.id);
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
            className: Z.popout,
            children: [
              (0, i.jsx)(s.Text, {
                className: Z.title,
                variant: "text-xs/bold",
                color: "header-secondary",
                children: t.isForumLikeChannel()
                  ? _.intl.string(_.t.ioVdOz)
                  : _.intl.string(_.t.VNYs2t),
              }),
              r
                .slice(0, t.isForumLikeChannel() ? r.length : c)
                .map((e) => (0, i.jsx)(S, { thread: e }, e.id))
                .filter((e) => l.isValidElement(e))
                .slice(0, c),
              (0, i.jsx)(s.Clickable, {
                className: Z.more,
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
                  children: _.intl.string(_.t["4qdZ9/"]),
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
          className: Z.row,
          onClick: (e) => {
            (0, p.ok)(
              t,
              t.isForumPost() ? e.shiftKey : !e.shiftKey,
              I.on.POPOUT,
            );
          },
          children: [
            null == n
              ? (0, i.jsx)("img", {
                  className: Z.avatar,
                  src: v.ZP.getDefaultAvatarURL(void 0, void 0),
                  alt: "",
                })
              : (0, i.jsx)(c.Z, {
                  className: Z.avatar,
                  user: n,
                  size: s.AvatarSizes.SIZE_16,
                }),
            (0, i.jsx)(s.Text, {
              className: Z.name,
              variant: "text-sm/normal",
              color: "none",
              children: t.name,
            }),
            (0, i.jsxs)(s.Text, {
              className: Z.timestamp,
              variant: "text-sm/normal",
              color: "none",
              children: [
                (0, i.jsx)("span", { className: Z.bullet, children: "•" }),
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
            showUnread: v = !1,
            ...C
          } = e,
          x = (0, a.JA)(n),
          I = null !== (t = (0, o.q)(m)) && void 0 !== t ? t : "";
        return (0, i.jsx)("li", {
          children: (0, i.jsxs)(s.ClickableContainer, {
            ...C,
            buttonProps: { ...x, id: n, role: "button" },
            tag: "div",
            "aria-label": I,
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
              { [d.modeSelected]: f },
              l,
            ),
            children: [
              v
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
          return j;
        },
        kw: function () {
          return P;
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
        f = n(540059),
        g = n(680089),
        v = n(430824),
        C = n(496675),
        x = n(9156),
        I = n(203818),
        _ = n(438144),
        Z = n(981631),
        b = n(388032),
        S = n(147903);
      function N(e) {
        e.stopPropagation();
      }
      let E = l.memo(function (e) {
        let t,
          {
            channel: r,
            connectChannelDragSource: h,
            connectChannelDropTarget: I,
            disableManageChannels: _,
            position: E,
            sortingPosition: y,
            hideIcon: j,
            children: T,
          } = e,
          P = (0, f.Q3)("CategoryChannel"),
          A = (0, s.e7)([x.ZP], () =>
            x.ZP.isChannelMuted(r.getGuildId(), r.id),
          ),
          w = (0, s.e7)([g.Z], () => g.Z.isCollapsed(r.id)),
          M = (0, s.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_CHANNELS, r));
        t =
          null != y
            ? E > y
              ? S.containerDragAfter
              : S.containerDragBefore
            : S.containerDefault;
        let L = l.useCallback(() => {
            w ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
          }, [r.id, w]),
          R = l.useCallback(
            (e) => {
              if ("null" !== r.id) {
                let t = v.Z.getGuild(r.getGuildId());
                null != t &&
                  (0, d.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("8965"),
                      n.e("81070"),
                    ]).then(n.bind(n, 139035));
                    return (n) => (0, i.jsx)(e, { ...n, channel: r, guild: t });
                  });
              }
            },
            [r],
          ),
          D = l.useCallback(() => {
            let e = r.type === Z.d4z.GUILD_CATEGORY ? null : r.type,
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
          { role: G, tabIndex: k, ...B } = (0, o.JA)(r.id),
          U = l.useRef(null),
          O = l.useRef(null),
          V = (0, i.jsxs)("li", {
            className: t,
            "data-dnd-name": r.name,
            children: [
              (0, i.jsx)(c.FocusRing, {
                focusTarget: U,
                ringTarget: O,
                offset: { left: 4, right: 4 },
                children: (0, i.jsxs)("div", {
                  ref: O,
                  className: a()(S.iconVisibility, S.wrapper, {
                    [S.collapsed]: w,
                    [S.muted]: A,
                    [S.clickable]: !0,
                  }),
                  onContextMenu: R,
                  children: [
                    (0, i.jsxs)(c.Clickable, {
                      innerRef: U,
                      className: S.mainContent,
                      tabIndex: k,
                      ...B,
                      onClick: L,
                      "aria-label": b.intl.formatToPlainString(b.t.y5l3Jy, {
                        categoryName: r.name,
                      }),
                      "aria-expanded": !w,
                      focusProps: { enabled: !1 },
                      children: [
                        P || j
                          ? null
                          : (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: "md",
                              color: "currentColor",
                              className: S.icon,
                            }),
                        (0, i.jsx)(p.Z, {
                          className: S.name,
                          children: (0, i.jsx)(m.Z, { children: r.name }),
                        }),
                        P && !j
                          ? (0, i.jsx)(c.ChevronSmallDownIcon, {
                              size: "md",
                              color: "currentColor",
                              className: S.icon,
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)("div", {
                      onClick: N,
                      className: S.children,
                      children:
                        M && !_
                          ? (0, i.jsx)(c.Tooltip, {
                              text: b.intl.string(b.t["fUYU+v"]),
                              children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(c.Button, {
                                  "aria-label": b.intl.string(b.t["fUYU+v"]),
                                  look: c.Button.Looks.BLANK,
                                  size: c.Button.Sizes.NONE,
                                  className: a()(S.addButton, S.forceVisible),
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
                                  children: P
                                    ? (0, i.jsx)(c.PlusMediumIcon, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: S.addButtonIcon,
                                      })
                                    : (0, i.jsx)(c.PlusSmallIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: S.addButtonIcon,
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
        return null != I && null != h ? I(h(V)) : V;
      });
      t.ZP = (0, h.B)(E);
      let y = l.memo(function (e) {
          let { name: t, onDismiss: n, className: l } = e;
          return (0, i.jsx)("li", {
            className: a()(l, S.containerDefault),
            children: (0, i.jsxs)("div", {
              className: a()(S.iconVisibility, S.wrapperStatic),
              children: [
                (0, i.jsx)("div", {
                  className: S.mainContent,
                  children: (0, i.jsx)(p.Z, {
                    className: S.name,
                    children: (0, i.jsx)(m.Z, { children: t }),
                  }),
                }),
                null != n
                  ? (0, i.jsx)(c.TooltipContainer, {
                      text: b.intl.string(b.t["5qNmsb"]),
                      className: S.dismissWrapper,
                      children: (0, i.jsx)(c.Clickable, {
                        className: S.dismissButton,
                        onClick: n,
                        children: (0, i.jsx)(c.CircleXIcon, {
                          size: "md",
                          color: "currentColor",
                          className: S.dismiss,
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          });
        }),
        j = l.memo(function (e) {
          let { category: t } = e,
            n = (0, s.e7)([I.Z], () =>
              I.Z.isVoiceCategoryCollapsed(t.guild.id),
            ),
            r = (0, f.Q3)("VoiceChannelCategoryButton"),
            a = l.useCallback(() => {
              n ? (0, _.s)(t.guild.id) : (0, _.M)(t.guild.id);
            }, [t.guild.id, n]);
          return r
            ? (0, i.jsxs)(c.Button, {
                look: c.Button.Looks.FILLED,
                color: c.Button.Colors.PRIMARY,
                className: S.refreshVoiceChannelsButton,
                innerClassName: S.refreshVoiceChannelsButtonInner,
                onClick: a,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: S.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: n
                      ? b.intl.string(b.t["/eB9Bg"])
                      : b.intl.string(b.t.Q2gPWl),
                  }),
                ],
              })
            : (0, i.jsxs)(c.Clickable, {
                className: S.voiceChannelsButton,
                onClick: a,
                children: [
                  (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: S.voiceChannelsToggleIcon,
                  }),
                  (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    children: n
                      ? b.intl.string(b.t["/eB9Bg"])
                      : b.intl.string(b.t.Q2gPWl),
                  }),
                ],
              });
        }),
        T = l.memo(function (e) {
          let { category: t, channel: n } = e,
            l = (0, s.e7)([I.Z], () =>
              I.Z.isVoiceCategoryCollapsed(t.guild.id),
            );
          return l || null == n || n.record.type === Z.d4z.GUILD_CATEGORY
            ? l
              ? (0, i.jsx)("li", {
                  className: a()(S.containerDefault),
                  children: (0, i.jsx)("div", {
                    className: a()(S.iconVisibility, S.wrapperStatic),
                    children: (0, i.jsx)(p.Z, {
                      className: S.name,
                      children: (0, i.jsx)(m.Z, {
                        children: b.intl.string(b.t["V/u9Dw"]),
                      }),
                    }),
                  }),
                })
              : null
            : (0, i.jsx)("div", { style: { height: 16 } });
        }),
        P = l.memo(function (e) {
          let { channel: t } = e;
          return (0, i.jsx)("li", {
            className: a()(S.containerDefault),
            children: (0, i.jsx)("div", {
              className: a()(S.iconVisibility, S.wrapperStatic),
              children: (0, i.jsx)(p.Z, {
                className: S.name,
                children: (0, i.jsx)(m.Z, { children: t.name }),
              }),
            }),
          });
        });
    },
    754231: function (e, t, n) {
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
        v = n(823379),
        C = n(51144),
        x = n(823469);
      let I = d.u.SIZE_24;
      function _(e) {
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
                      className: x.applicationLargeImage,
                    }),
                });
              })(o)
            : null;
        let p =
            null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
          m = (0, c.Z)(r),
          v = m ? x.spotifyLargeImage : x.applicationLargeImage,
          C =
            null != p
              ? (0, i.jsx)("img", {
                  alt: null !== (n = d.large_text) && void 0 !== n ? n : "",
                  src: (0, f.getAssetImage)(h, p, [128, 128]),
                  className: v,
                })
              : null;
        return m && null != u
          ? ((C = (0, i.jsx)(s.Clickable, {
              className: x.clickable,
              onClick: () => {
                u(r, a.id);
              },
              children: C,
            })),
            (0, i.jsx)(s.Tooltip, {
              text: null != d.large_text ? d.large_text : null,
              position: "top",
              children: (e) => {
                let { onClick: t, ...n } = e;
                return null != C ? l.cloneElement(C, n) : null;
              },
            }))
          : C;
      }
      function Z(e) {
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
              className: x.headerLink,
              onClick: () => {
                l(t);
              },
              children: r,
            }));
        }
        return (0, i.jsx)(h.Z, { title: a, className: x.header, children: o });
      }
      function b(e) {
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
                linkClassName: x.bodyLink,
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
                x.ellipsisRow,
                x.colorHeaderSecondary,
                x.bodyTextSize,
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
                x.ellipsisRow,
                x.colorHeaderSecondary,
                x.bodyTextSize,
                x.__invalid_activity,
              ),
              children: n,
            });
      }
      function N(e) {
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
          className: x.timeBar,
          themed: !0,
          singleLine: !0,
        });
      }
      function E(e) {
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
        let E = (0, o.Wu)([m.default], () =>
            g.map((e) => m.default.getUser(e)).filter(v.lm),
          ),
          y = null != n || (0, c.Z)(t),
          j = l.useMemo(() => {
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
              className: x.flexColumn,
              children: [
                (0, i.jsxs)("div", {
                  className: x.flexRow,
                  children: [
                    (0, i.jsx)(_, {
                      activity: t,
                      user: r,
                      embeddedApp: n,
                      onOpenSpotifyAlbum: f,
                    }),
                    (0, i.jsxs)("div", {
                      className: x.detailsAndAvatarsContainer,
                      children: [
                        (0, i.jsx)(Z, {
                          activity: t,
                          embeddedApp: n,
                          onOpenSpotifyTrack: h,
                        }),
                        (0, i.jsx)(b, {
                          activity: t,
                          user: r,
                          onOpenSpotifyArtist: p,
                        }),
                        (0, i.jsx)(S, { activity: t }),
                        g.length > 0 &&
                          (0, i.jsx)(d.Z, {
                            className: x.usersSummary,
                            guildId: a.guild_id,
                            users: E,
                            size: I,
                            max: 7,
                            renderUser: (e) => {
                              var t;
                              if (null == e) return null;
                              let n = j.get(e.id),
                                l =
                                  null !== (t = null == n ? void 0 : n.nick) &&
                                  void 0 !== t
                                    ? t
                                    : C.ZP.getName(e);
                              return (0, i.jsx)(
                                s.TooltipContainer,
                                {
                                  text: l,
                                  position: "bottom",
                                  children: (0, i.jsx)(
                                    "img",
                                    {
                                      src: e.getAvatarURL(a.guild_id, I),
                                      alt: l,
                                      className: x.avatar,
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
                (0, i.jsx)(N, { activity: t }),
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
        v = n(51144),
        C = n(754231),
        x = n(787308);
      function I(e) {
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
              className: r()(l, x.partyAvatar),
              "aria-label":
                null !== (s = n.nick) && void 0 !== s
                  ? s
                  : v.ZP.getName(n.user),
              ...e,
            });
          },
        });
      }
      function _(e) {
        let { members: t, guildId: n } = e;
        return (0, i.jsx)(h.Z, {
          className: x.partyMembers,
          guildId: n,
          users: t,
          max: 6,
          renderUser: (e, t, l) =>
            (0, i.jsx)(I, { guildId: n, member: e, className: t }, l),
          renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
              "div",
              { className: r()(x.morePartyMembers, t), children: e },
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
          v = (0, a.e7)([f.default, m.default], () => {
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
        if (null == v) return null;
        let I = h || (0, c.Z)(n),
          Z = (0, p.vd)(t.type);
        return (0, i.jsxs)("div", {
          className: x.activity,
          children: [
            (0, i.jsx)("div", {
              className: x.channelActivityContainer,
              children: I
                ? (0, i.jsx)(C.Z, {
                    activity: n,
                    embeddedApp: r,
                    user: v,
                    channel: t,
                    sortedVoiceStates: l,
                    onOpenSpotifyTrack: Z ? d.aG : void 0,
                    onOpenSpotifyArtist: Z ? d.d$ : void 0,
                    onOpenSpotifyAlbum: Z ? d.Z5 : void 0,
                  })
                : (0, i.jsx)(s.Z, {
                    type: s.P.VOICE_CHANNEL,
                    activity: n,
                    user: v,
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    renderHeaderAccessory:
                      null != l
                        ? () =>
                            (0, i.jsx)(_, { guildId: t.guild_id, members: l })
                        : void 0,
                    isEmbedded: h,
                  }),
            }),
            (0, i.jsx)("div", {
              className: x.activityActionsContainer,
              children: (0, i.jsx)(u.Z, {
                type: s.P.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: null == r ? void 0 : r.embeddedActivity,
                user: v,
                guildId: t.getGuildId(),
                channelId: t.id,
                color: x.button,
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
          return j;
        },
        ZP: function () {
          return L;
        },
        eP: function () {
          return A;
        },
        hR: function () {
          return P;
        },
        jo: function () {
          return T;
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
        v = n(427679),
        C = n(155409),
        x = n(131704),
        I = n(199902),
        _ = n(430824),
        Z = n(496675),
        b = n(914010),
        S = n(281029),
        N = n(981631),
        E = n(388032),
        y = n(831746);
      function j(e, t, n) {
        return null != t && !!t && !(0, S.ig)(n, e.type);
      }
      function T(e, t) {
        return null == t
          ? y.containerDefault
          : e > t
            ? y.containerDragAfter
            : y.containerDragBefore;
      }
      function P(e) {
        let {
          channel: t,
          disableManageChannels: n,
          tabIndex: i,
          forceShowButtons: l,
          hasChannelInfo: r = !1,
        } = e;
        if (
          (0, d.e7)(
            [Z.Z, b.Z],
            () =>
              n ||
              b.Z.getGuildId() === N.I_8 ||
              (!Z.Z.can(N.Plq.MANAGE_CHANNELS, t) &&
                !Z.Z.can(N.Plq.MANAGE_ROLES, t) &&
                !Z.Z.can(N.Plq.MANAGE_WEBHOOKS, t)) ||
              ((0, x.r8)(t.type) && !Z.Z.can(N.Plq.VIEW_CHANNEL, t)) ||
              (t.isGuildVocal() && !Z.Z.can(N.Plq.CONNECT, t)) ||
              !x.dF.has(t.type),
          )
        )
          return null;
        function a() {
          p.ZP.open(t.id);
        }
        return (0, o.jsx)(h.Tooltip, {
          text: E.intl.string(E.t["3gUsJS"]),
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
              "aria-label": E.intl.string(E.t["3gUsJS"]),
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
      function A(e) {
        let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: r,
            forceShowButtons: a,
            hasChannelInfo: s = !1,
          } = e,
          c = (0, d.e7)([_.Z], () => _.Z.getGuild(t.getGuildId())),
          p = (0, d.e7)([v.Z], () => v.Z.getStageInstanceByChannel(t.id), [
            t.id,
          ]),
          g = (0, d.e7)([m.ZP], () => m.ZP.getActiveEventByChannel(t.id), [
            t.id,
          ]),
          x = (0, d.e7)([Z.Z], () => (0, f.b)(Z.Z, c, t, p)),
          b = (0, d.e7)([Z.Z], () =>
            Z.Z.can(N.Plq.CREATE_INSTANT_INVITE, t)
              ? E.intl.string(E.t.zJrgTE)
              : E.intl.string(E.t.Sd8Ix8),
          );
        if (l || !x) return null;
        function S() {
          if (null != c) {
            let e = I.Z.getAllActiveStreams().filter(
              (e) => e.state !== N.jm8.ENDED && e.channelId === t.id,
            );
            (0, h.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                n.e("7654"),
                n.e("86004"),
              ]).then(n.bind(n, 560114));
              return (n) =>
                (0, o.jsx)(i, {
                  ...n,
                  guild: c,
                  channel: t,
                  streamUserId: 1 === e.length ? e[0].ownerId : null,
                  source: N.t4x.GUILD_CHANNELS,
                  guildScheduledEvent: g,
                });
            });
          }
        }
        let j = (0, o.jsx)(h.GroupPlusIcon, {
          size: "xs",
          className: y.actionIcon,
          "aria-hidden": !0,
          color: "currentColor",
        });
        return (
          i &&
            (j = (0, o.jsx)(C.Z, {
              tutorialId: "instant-invite",
              position: "left",
              children: (0, o.jsx)("div", { children: j }),
            })),
          (0, o.jsx)(h.Tooltip, {
            text: b,
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
                "aria-label": b,
                children: j,
              }),
          })
        );
      }
      function w(e) {
        let { channel: t } = e,
          n = () => {
            (0, g._U)(t.guild_id, t.id);
          };
        return (0, o.jsx)(h.Tooltip, {
          text: E.intl.string(E.t.ROh4T0),
          children: (e) =>
            (0, o.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": E.intl.string(E.t.ROh4T0),
              children: (0, o.jsx)(h.XSmallIcon, {
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
            (0, g.dM)(t.guild_id, t.id, !0, { section: N.jXE.CHANNEL_LIST });
          };
        return (0, o.jsx)(h.Tooltip, {
          text: E.intl.string(E.t["N2c/Ul"]),
          children: (e) =>
            (0, o.jsx)(h.Clickable, {
              className: y.iconItem,
              ...e,
              onClick: n,
              "aria-label": E.intl.string(E.t["N2c/Ul"]),
              children: (0, o.jsx)(h.CheckmarkLargeIcon, {
                size: "xs",
                color: "currentColor",
                className: y.actionIcon,
              }),
            }),
        });
      }
      class L extends (a = s.PureComponent) {
        renderEditButton() {
          return (0, o.jsx)(P, { ...this.props });
        }
        renderInviteButton() {
          return (0, o.jsx)(A, { ...this.props });
        }
        renderRemoveSuggestionButton() {
          return (0, o.jsx)(w, { ...this.props });
        }
        renderAcceptSuggestionButton() {
          return (0, o.jsx)(M, { ...this.props });
        }
        getClassName() {
          let { position: e, sortingPosition: t } = this.props;
          return T(e, t);
        }
        isDisabled() {
          let { channel: e, sorting: t, sortingType: n } = this.props;
          return j(e, t, n);
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
        v = n(790901),
        C = n(714794),
        x = n(355363),
        I = n(687352),
        _ = n(135724),
        Z = n(25601),
        b = n(981631),
        S = n(490897),
        N = n(388032),
        E = n(518360);
      function y(e) {
        var t;
        let {
            channel: n,
            isChannelSelected: y,
            isChannelCollapsed: j,
            voiceStates: T,
            enableConnectedUserLimit: P,
            enableActivities: A,
            isSubscriptionGated: w,
            needSubscriptionToAccess: M,
            isNewChannel: L,
            muted: R,
            resolvedUnreadSetting: D,
          } = e,
          G = (0, l.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)),
          k = (0, l.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)),
          B = (0, o.ZP)(n),
          U = (0, l.e7)([p.Z], () => !p.Z.can(b.Plq.CONNECT, n)),
          O = (0, l.e7)([f.Z], () => f.Z.hasVideo(n.id)),
          V = (0, u.PK)(n.id) && n.isGuildStageVoice(),
          H = (0, x.ZP)({ channel: n, locked: U, video: O || V, selected: y }),
          F = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
          W = (0, s.n2)(n.guild_id, n.id),
          z = (0, l.e7)([h.Z], () => {
            var e, t;
            return (
              null !==
                (t =
                  null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e
                    ? void 0
                    : e.hasFeature(b.oNc.COMMUNITY)) &&
              void 0 !== t &&
              t
            );
          });
        if ((0, C.Z)(G))
          return (0, i.jsx)(Z.Z, {
            mentionsCount: G,
            isMentionLowImportance: k,
          });
        if ((0, c.O)(w)) return (0, i.jsx)(c.Z, { locked: M });
        if (L)
          return (0, i.jsx)(a.TextBadge, {
            text: N.intl.string(N.t.y2b7CA),
            color: r.Z.unsafe_rawColors.BRAND_260.css,
            className: E.newChannel,
          });
        if (
          !R &&
          D === S.i.ALL_MESSAGES &&
          n.isForumLikeChannel() &&
          null != F &&
          F > 0
        )
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: N.intl.format(N.t.GkAbqa, {
              count: (0, a.getBadgeCountString)(F),
            }),
          });
        if (!R && n.isForumLikeChannel() && null != W && W > 0)
          return (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: (0, a.getBadgeCountString)(W),
          });
        let q =
          null !== (t = null == T ? void 0 : T.length) && void 0 !== t ? t : 0;
        return null != P && P && H
          ? (0, i.jsx)(_.Z, { userCount: q, video: O || V, channel: n })
          : j && (0, g.a)(T) && z
            ? (0, i.jsx)(a.TextBadge, {
                text: N.intl.string(N.t.dI3q4u),
                color: r.Z.unsafe_rawColors.RED_400.css,
              })
            : null != A && A && (0, v.u)(B)
              ? (0, i.jsx)(I.Z, { embeddedApps: B, muted: R })
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
        s = n(520202);
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
        v = n(906732),
        C = n(313201),
        x = n(540059),
        I = n(362658),
        _ = n(583962),
        Z = n(915885),
        b = n(258871),
        S = n(216306),
        N = n(398758),
        E = n(220444),
        y = n(31022),
        j = n(10401),
        T = n(131704),
        P = n(592125),
        A = n(796974),
        w = n(984933),
        M = n(914010),
        L = n(540126),
        R = n(734307),
        D = n(854444),
        G = n(761091),
        k = n(301342),
        B = n(906817),
        U = n(429122),
        O = n(285573),
        V = n(995993),
        H = n(910595),
        F = n(466935),
        W = n(120818),
        z = n(61642),
        q = n(848442),
        Y = n(53425),
        Q = n(424785),
        J = n(770202),
        K = n(79556),
        X = n(428127),
        $ = n(950969),
        ee = n(233657),
        et = n(831700),
        en = n(443063),
        ei = n(327530),
        el = n(981631),
        er = n(176505),
        ea = n(388032),
        eo = n(607686);
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
      function ec(e, t) {
        return e ? ("cozy" === t ? 42 : 34) : ei.Vf;
      }
      function eu(e) {
        return e ? 32 : ei.Hb;
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
                    ? this.scrollToChannel(l, !1, ei.yE, this.handleListScroll)
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
                : ei.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
          if (null != r && null != l) {
            if (null != r.threadOffset) {
              let [e] = l.getScrollPosition(r.section, r.row),
                a =
                  r.threadOffset *
                  ec(this.props.isRefreshEnabled, this.props.density);
              l.scrollIntoViewRect({
                start: e + a,
                end:
                  e + a + ec(this.props.isRefreshEnabled, this.props.density),
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
              let { channel: a, category: o } = r;
              return (
                !!(0, T.vc)(a.record.type) &&
                (!o.isCollapsed || !o.isMuted) &&
                !a.isMuted &&
                !!t.isItemVisible(i, l, !0) &&
                (0, E.d)(a.record)
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
            className: eo.positionedContainer,
            children: (0, l.jsx)($.Z, {
              ref: this.unreadTopRef,
              textUnread: ea.intl.string(ea.t.FCRiT0),
              textMention: ea.intl.string(ea.t["8zH0LC"]),
              hide: null == e && (i || null != t || null != n),
              className: eo.unreadTop,
              barClassName: eo.unreadBar,
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
          return (0, l.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT0),
            textMention: ea.intl.string(ea.t["8zH0LC"]),
            hide: null == i && r,
            className: eo.unreadBottom,
            barClassName: eo.unreadBar,
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
              isRefreshEnabled: a,
            } = this.props,
            o = {};
          r === el.I_8 && (o["data-favorites"] = !0);
          let { ref: s, ...c } = this.context,
            u = 0;
          return (
            null != n
              ? (u = a ? ei.hl : ei.Q0)
              : t.hasCommunityInfoSubheader() && !i && (u = ei.JD),
            (0, l.jsx)(d.FocusJumpSection, {
              children: (t) =>
                (0, l.jsx)(
                  d.List,
                  {
                    ref: this.setListRef,
                    className: eo.scroller,
                    fade: !0,
                    customTheme: !0,
                    sectionHeight: this.getSectionHeight,
                    footerHeight: this.getSectionFooterHeight,
                    rowHeight: this.getRowHeight,
                    paddingTop: u,
                    paddingBottom: ei.$k,
                    renderSection: this.renderSection,
                    renderFooter: this.renderSectionFooter,
                    renderRow: this.renderRow,
                    onScroll: this.handleListScroll,
                    onResize: this.handleResize,
                    onContentResize: this.handleResize,
                    sections: e.getSections(!0),
                    innerAriaLabel: ea.intl.string(ea.t.OGiMXF),
                    innerTag: "ul",
                    getAnchorId: this.getAnchorId,
                    ...c,
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
            children: (0, l.jsx)(C.FG, {
              children: (i) =>
                (0, l.jsx)(d.HeadingLevel, {
                  component: (0, l.jsx)(d.HiddenVisually, {
                    children: (0, l.jsx)(d.H, {
                      id: i,
                      children: ea.intl.string(ea.t.OGiMXF),
                    }),
                  }),
                  children: n
                    ? (0, l.jsxs)(r.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            className: eo.positionedContainer,
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
              o().throttle((e) => {
                h.Z.updateChannelListScroll(
                  this.props.guildId,
                  e,
                  this.getVisibleChannels(),
                );
              }, 100),
            ),
            es(this, "getSectionHeight", (e) => {
              let {
                guild: t,
                guildChannels: n,
                isRefreshEnabled: i,
              } = this.props;
              return (0, B.EM)(e, t, n, !!i);
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
              return (0, U.dt)({
                sectionIndex: e,
                guildChannels: t,
                guildChannelsVersion: a,
                voiceStates: n,
                selectedChannelId: l,
                selectedVoiceChannelId: i,
                optInEnabled: r,
                visualRefreshEnabled: this.props.isRefreshEnabled,
                density: this.props.density,
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
                o = ec(this.props.isRefreshEnabled, this.props.density);
              if (e === L.wZ) {
                let e = n.getGuildActionSection();
                return e.isEmpty()
                  ? 0
                  : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR
                    ? e.getRows().length > 1
                      ? _.aR
                      : _.PD
                    : o;
              }
              if (n.isPlaceholderRow(e, t)) return 0;
              let s = n.getChannelFromSectionRow(e, t);
              if (null == s) return 0;
              let { channel: c, category: u } = s;
              if (c.record.type === el.d4z.GUILD_CATEGORY) return 40;
              let { isFavoritesPerk: d } = I.Z.getCurrentConfig(
                { location: "channel_list" },
                { autoTrackExposure: !0 },
              );
              if (
                d &&
                a === el.I_8 &&
                !c.record.isDM() &&
                !c.record.isGroupDM() &&
                !c.record.isGuildStageVoice()
              )
                o = this.props.isRefreshEnabled ? 46 : ei.GQ;
              for (let e of c.threadIds) {
                o += ec(this.props.isRefreshEnabled, this.props.density);
                let t = i[c.id];
                null != t &&
                  t.length > 0 &&
                  (o +=
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
                    (o += t + ei.cx);
                }
                c.id === this.props.rtcConnectedChannelId &&
                  (o +=
                    this.props.rtcDesyncedVoiceStatesCount *
                    eu(this.props.isRefreshEnabled));
              }
              if (
                (null != c.subtitle && (o += ei.NY),
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
                    (o += e + ei.cx);
                }
              }
              return o;
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
              null != n && r.includes(n) && (l = (0, S.KY)(t)),
                (0, S.Uo)(e.id, r, l);
            }),
            es(this, "renderSection", (e) => {
              let { section: t } = e,
                {
                  guildChannels: n,
                  guildChannelsVersion: i,
                  guild: r,
                  selectedChannelId: a,
                  disableManageChannels: o,
                } = this.props;
              return (0, l.jsx)(
                B.ZP,
                {
                  sectionIndex: t,
                  guild: r,
                  guildChannels: n,
                  guildChannelsVersion: i,
                  selectedChannelId: a,
                  disableManageChannels: o,
                },
                (0, B.WW)(t, n),
              );
            }),
            es(this, "renderRow", (e) => {
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
                } = this.props;
              if (t === L.wZ) {
                let e = u.getGuildActionSection(),
                  t = e.getRow(n);
                if (null == t) return null;
                switch (t) {
                  case en.z.GUILD_HUB_HEADER_OPTIONS:
                    return (0, l.jsx)(
                      b.Z,
                      { guild: i, channel: w.ZP.getDefaultChannel(i.id) },
                      en.z.GUILD_HUB_HEADER_OPTIONS,
                    );
                  case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                    let r = e.getRows();
                    return (0, l.jsx)(
                      _.ZP,
                      { guild: i, withMargin: r.length > 1 },
                      en.z.GUILD_PREMIUM_PROGRESS_BAR,
                    );
                  case en.z.GUILD_HOME:
                    return (0, l.jsx)(
                      H.Z,
                      { guild: i, selected: o === er.oC.GUILD_HOME },
                      en.z.GUILD_HOME,
                    );
                  case en.z.GUILD_SCHEDULED_EVENTS:
                    return (0, l.jsx)(
                      ee.Z,
                      { guild: i, selected: o === en.z.GUILD_SCHEDULED_EVENTS },
                      en.z.GUILD_SCHEDULED_EVENTS,
                    );
                  case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, l.jsx)(
                      z.Z,
                      { guild: i, selected: o === er.oC.ROLE_SUBSCRIPTIONS },
                      en.z.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                  case en.z.GUILD_SHOP:
                    return (0, l.jsx)(
                      q.Z,
                      { guild: i, selected: o === er.oC.GUILD_SHOP },
                      en.z.GUILD_SHOP,
                    );
                  case en.z.GUILD_MEMBER_APPLICATIONS:
                    return (0, l.jsx)(
                      F.Z,
                      { guild: i, selected: o === er.oC.MEMBER_APPLICATIONS },
                      en.z.GUILD_MEMBER_APPLICATIONS,
                    );
                  case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, l.jsx)(W.T, { guild: i });
                  case en.z.CHANNELS_AND_ROLES:
                    return (0, l.jsx)(
                      V.m,
                      {
                        guild: i,
                        selected:
                          o === er.oC.CHANNEL_BROWSER ||
                          o === er.oC.CUSTOMIZE_COMMUNITY,
                      },
                      en.z.CHANNELS_AND_ROLES,
                    );
                  case en.z.GUILD_DIRECTORY:
                    return (0, l.jsx)(
                      O.Z,
                      {
                        guild: i,
                        selectedChannelId: o,
                        disableManageChannels: h,
                      },
                      en.z.GUILD_DIRECTORY,
                    );
                  case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, l.jsx)(
                      Z.Z,
                      { guild: i, selected: o === er.oC.MEMBER_SAFETY },
                      en.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                  default:
                    return null;
                }
              }
              if (u.isPlaceholderRow(t, n)) return null;
              let g = u.getChannelFromSectionRow(t, n);
              if (null == g) return null;
              let { category: v, channel: C } = g,
                x = v instanceof L.VR,
                I = C.record,
                S = "".concat(t).concat(C.id);
              switch (I.type) {
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
                        (0, l.jsx)(K.Z, {
                          channel: I,
                          guild: i,
                          position: C.position,
                          selected: o === C.id,
                          muted: C.isMuted,
                          subtitle: C.subtitle,
                          disableManageChannels: h,
                          canBeNewChannel: m && t === u.recentsSectionNumber,
                          isFavoriteCategory: x,
                          withGuildIcon: f,
                        }),
                        C.threadCount > 0
                          ? (0, l.jsx)(Y.Z, {
                              withGuildIcon: f,
                              channel: I,
                              sortedThreadIds: C.threadIds,
                              selectedChannel:
                                null != a &&
                                (a.id === C.id || a.parent_id === I.id)
                                  ? a
                                  : null,
                              selectedVoiceChannelId:
                                (null == s ? void 0 : s.parent_id) === I.id
                                  ? c
                                  : null,
                            })
                          : null,
                      ],
                    },
                    S,
                  );
                case el.d4z.GUILD_STAGE_VOICE:
                  var N, E;
                  return (0, l.jsx)(
                    Q.Z,
                    {
                      channel: I,
                      guild: i,
                      position: C.position,
                      selected: o === C.id,
                      connected: c === C.id,
                      collapsed: C.isCollapsed || v.isCollapsed,
                      voiceStates:
                        null !== (N = d[C.id]) && void 0 !== N ? N : [],
                      speakerVoiceStates:
                        null !== (E = p[C.id]) && void 0 !== E ? E : [],
                      disableManageChannels: h,
                      isFavoriteCategory: x,
                    },
                    S,
                  );
                case el.d4z.GUILD_VOICE:
                  return (0, l.jsx)(
                    et.Z,
                    {
                      channel: I,
                      guild: i,
                      position: C.position,
                      selected: o === C.id,
                      connected: c === C.id,
                      collapsed: C.isCollapsed || v.isCollapsed,
                      voiceStates: d[C.id],
                      subtitle: C.subtitle,
                      disableManageChannels: h,
                      showTutorial: C.isFirstVoiceChannel,
                      isFavoriteCategory: x,
                      withGuildIcon: f,
                    },
                    S,
                  );
                case el.d4z.GUILD_STORE:
                  return (0, l.jsx)(
                    J.Z,
                    {
                      channel: I,
                      guild: i,
                      position: C.position,
                      selected: o === C.id,
                    },
                    S,
                  );
                case el.d4z.GUILD_CATEGORY:
                  if (t !== u.voiceChannelsSectionNumber) return null;
                  return (0, l.jsx)(
                    k.kw,
                    { channel: I },
                    "readonly-".concat(I.id),
                  );
                case el.d4z.PUBLIC_THREAD:
                case el.d4z.PRIVATE_THREAD:
                  return (0, l.jsx)(
                    K.Z,
                    {
                      channel: I,
                      guild: i,
                      position: C.position,
                      selected: o === C.id,
                      muted: C.isMuted,
                      subtitle: C.subtitle,
                      disableManageChannels: h,
                      canBeNewChannel: !1,
                      isFavoriteCategory: !1,
                      forceTopLevelThread: !0,
                    },
                    S,
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
              if (!j.Z.shouldShow("voice-conversations")) return;
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
          a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          { analyticsLocations: o } = (0, v.ZP)(g.Z.GUILD_CHANNEL_LIST),
          d = (0, u.e7)([P.Z], () => P.Z.getChannel(n)),
          h = (0, u.e7)([P.Z], () => P.Z.getChannel(i)),
          p = (0, u.e7)([M.Z], () => M.Z.getGuildId()),
          C = (0, N.DM)(t),
          I = r.useRef(null),
          _ = r.useCallback((e, t) => {
            let n = I.current;
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
          Z = r.useCallback(
            () =>
              new Promise((e) => {
                let t = I.current;
                if (null == t) return e();
                t.scrollTo(0, () => requestAnimationFrame(() => e()));
              }),
            [],
          ),
          b = r.useCallback(
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
          S = (0, c.ZP)({
            id: "channels",
            defaultFocused: null != n ? n : void 0,
            isEnabled: a,
            setFocus: _,
            scrollToStart: Z,
            scrollToEnd: b,
          }),
          E = S.setFocus;
        r.useEffect(() => {
          null != n && E(n);
        }, [n, E]);
        let j = (0, y.Z)(t),
          T = (0, x.Q3)("NavigableChannels");
        return (0, l.jsx)(v.Gt, {
          value: o,
          children: (0, l.jsx)(m.Z, {
            section: el.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
              navigator: S,
              children: (0, l.jsx)(ed, {
                ...e,
                listNavigator: S,
                ref: I,
                selectedChannel: d,
                selectedVoiceChannel: h,
                stageChannelSpeakerVoiceStates: j,
                selectedGuildId: p,
                optInEnabled: C,
                isRefreshEnabled: T,
              }),
            }),
          }),
        });
      };
      function ep(e) {
        let t = (0, D.o)(),
          { isFavoritesPerk: n } = (0, I.z)("favorites-channel-list"),
          { density: i } = (0, d.useThemeContext)();
        return (0, l.jsx)(eh, {
          ...e,
          guildChannels: t,
          guildChannelsVersion: 0,
          withGuildIcon: n,
          density: i,
        });
      }
      function em(e) {
        let t = (0, G.Z)(e.guild),
          n = (0, u.cj)([R.Z], () =>
            R.Z.getGuild(e.guildId, { guildActionRows: t }),
          ),
          i = (0, x.Q3)("GuildChannelList"),
          { density: r } = (0, d.useThemeContext)();
        return (0, l.jsx)(eh, { ...e, ...n, isRefreshEnabled: i, density: r });
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
          return g;
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
          return v;
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
        pm: function () {
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
        o = 12,
        s = 34,
        c = 41.5,
        u = 16,
        d = 32,
        h = 8,
        p = 84,
        m = 135,
        f = 56,
        g = 16,
        v = 5,
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
          return g;
        },
        WW: function () {
          return v;
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
        m = n(607686);
      function f(e) {
        return e ? 9 : d.QP;
      }
      function g(e, t, n, i) {
        if (e === c.wZ) return d.$k;
        if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
        if (e === n.voiceChannelsSectionNumber) {
          var l;
          let t = n.getCategoryFromSection(e);
          if (null == t || t.isEmpty()) return 0;
          if (t.isCollapsed) return d.Pw + f(i);
          let r =
            null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l
              ? void 0
              : l.channel;
          return null == r || r.record.type === h.d4z.GUILD_CATEGORY
            ? f(i)
            : 16 + f(i);
        }
        return d.Pw;
      }
      function v(e, t) {
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
            selectedChannelId: v,
            disableManageChannels: C,
          } = e,
          { isFavoritesPerk: x } = (0, a.z)("ChannelListSection"),
          I = l.useCallback(() => {
            let e = f.getCategoryFromSection(f.recentsSectionNumber);
            if (null == e) return;
            let t = null,
              i = e.getShownChannelAndThreadIds();
            null != v && i.includes(v) && (t = (0, o.KY)(f)),
              (0, o.Uo)(n.id, i, t);
          }, [n.id, v, f, g]);
        switch (t) {
          case c.wZ:
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)("div", { style: { height: d.$k } });
          case c.p2:
            return (0, i.jsx)(u.P, {
              name: x ? p.intl.string(p.t.mlPMCw) : p.intl.string(p.t.k8fFjo),
            });
          case f.recentsSectionNumber:
            return (0, i.jsx)(u.P, {
              name: p.intl.string(p.t.gKcrqK),
              onDismiss: I,
            });
          case f.voiceChannelsSectionNumber: {
            var _;
            let e = f.getCategoryFromSection(f.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n =
              null === (_ = f.getChannelFromSectionRow(t, 0)) || void 0 === _
                ? void 0
                : _.channel;
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
              disableManageChannels: C,
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
              disableManageChannels: C,
            });
          }
        }
      });
    },
    429122: function (e, t, n) {
      n.d(t, {
        dt: function () {
          return g;
        },
        eo: function () {
          return v;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(884338),
        o = n(398758),
        s = n(9156),
        c = n(934415),
        u = n(540126),
        d = n(700026),
        h = n(301342),
        p = n(327530),
        m = n(607686);
      let f = l.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
          r = l.useMemo(
            () => t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            [t, n],
          );
        return null == r ? null : (0, i.jsx)(h.Qo, { category: r });
      });
      function g(e) {
        let {
          sectionIndex: t,
          guildChannels: n,
          voiceStates: i,
          selectedChannelId: l,
          selectedVoiceChannelId: r,
          optInEnabled: a,
          visualRefreshEnabled: o,
          density: s,
        } = e;
        if (t === n.voiceChannelsSectionNumber) return 44;
        let { hasDivider: c, canHaveVoiceSummary: h } = (0, d.ie)(n, a, t),
          m = c ? (o ? 9 : p.QP) : 0;
        if (!h || t === u.wZ) return m;
        let f = n.getNamedCategoryFromSection(t);
        return null == f
          ? m
          : (0, d.V5)({
                category: f,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i,
              })
            ? (o ? ("cozy" === s ? 42 : 34) : p.Vf) + m
            : m;
      }
      function v(e, t, n) {
        if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
        let { hasDivider: i, canHaveVoiceSummary: l } = (0, d.ie)(t, n, e);
        return "section-footer-"
          .concat(e)
          .concat(i ? "-divider" : "")
          .concat(l ? "-voice-summary" : "");
      }
      t.ZP = l.memo(function (e) {
        let {
            sectionIndex: t,
            guildChannels: n,
            guildChannelsVersion: h,
            voiceStates: p,
            guildId: g,
            selectedChannelId: v,
            selectedVoiceChannelId: C,
            optInEnabled: x,
          } = e,
          { hasDivider: I, canHaveVoiceSummary: _ } = l.useMemo(
            () => (0, d.ie)(n, x, t),
            [n, x, t, h],
          ),
          Z = l.useMemo(
            () => (t === u.wZ ? null : n.getCategoryFromSection(t)),
            [n, t, h],
          ),
          b = (0, o.DM)(g),
          S = (0, r.Wu)(
            [s.ZP],
            () => {
              if (null == Z || !Z.isCollapsed || !_) return [];
              let e = Z.getChannelRecords(),
                t = [];
              for (let n of e) {
                if (!n.isGuildVocal()) continue;
                let e = s.ZP.isChannelOrParentOptedIn(g, n.id);
                (!b || e) && t.push(n);
              }
              return t;
            },
            [Z, _, g, b],
          ),
          N = l.useMemo(
            () =>
              (0, c.c4)({
                channels: S,
                selectedChannelId: v,
                selectedVoiceChannelId: C,
                voiceStates: p,
              }),
            [S, v, C, p],
          );
        if (t === n.voiceChannelsSectionNumber)
          return (0, i.jsx)(f, { guildChannels: n, guildChannelsVersion: h });
        let E = I ? (0, i.jsx)("div", { className: m.sectionDivider }) : null;
        return _ && 0 !== N.length
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: m.voiceUserSummary,
                  children: (0, i.jsx)(a.Z, {
                    renderIcon: !0,
                    users: N,
                    max: 8,
                    showUserPopout: !0,
                    guildId: g,
                  }),
                }),
                E,
              ],
            })
          : E;
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
        s = n(264365);
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
        v = n(831746);
      let C = (0, c.B)(function (e) {
        let {
            guild: t,
            selectedChannelId: r,
            position: c,
            disableManageChannels: C,
            sorting: x,
            sortingType: I,
            sortingPosition: _,
            connectChannelDragSource: Z,
            connectChannelDropTarget: b,
            tabIndex: S,
          } = e,
          N = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
          }),
          E = (0, o.e7)([u.Z], () =>
            u.Z.getChannel(null == N ? void 0 : N.parent_id),
          ),
          y = r === (null == N ? void 0 : N.id),
          j = (0, o.e7)([h.Z], () =>
            null != E
              ? h.Z.can(f.Plq.MANAGE_CHANNELS, E)
              : null != t && h.Z.can(f.Plq.MANAGE_CHANNELS, t),
          ),
          T = l.useCallback(
            (e) => {
              null != N &&
                (0, s.jW)(e, async () => {
                  let { default: e } = await n
                    .e("70623")
                    .then(n.bind(n, 99334));
                  return (t) => (0, i.jsx)(e, { ...t, channel: N });
                });
            },
            [N],
          );
        if (null == N) return null;
        let P = (0, p.jo)(c, _),
          A = (0, p.CN)(N, x, I),
          w = (0, i.jsx)("div", {
            className: a()(P, { [v.disabled]: A, [v.selected]: y }),
            "data-dnd-name": N.name,
            children: (0, i.jsxs)(m.Z, {
              className: v.iconVisibility,
              channel: N,
              guild: t,
              selected: y,
              onContextMenu: T,
              forceInteractable: !0,
              resolvedUnreadSetting: g.i.ONLY_MENTIONS,
              children: [
                (0, i.jsx)(p.eP, { channel: N, tabIndex: S }),
                (0, i.jsx)(p.hR, {
                  channel: N,
                  disableManageChannels: C,
                  tabIndex: S,
                }),
              ],
            }),
          });
        return j && (w = b(Z(w))), w;
      });
      t.Z = C;
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
        v = n(540126),
        C = n(434479),
        x = n(981631),
        I = n(176505),
        _ = n(490897),
        Z = n(388032),
        b = n(518360);
      function S(e) {
        let { guild: t, selected: S } = e,
          N = (0, h.Z)(t),
          E = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
          y = (0, r.Wu)([p.Z], () =>
            Array.from(p.Z.getNewChannelIds(t.id)).filter((e) =>
              p.Z.shouldIndicateNewChannel(t.id, e),
            ),
          ),
          j = (0, r.e7)([f.ZP], () =>
            f.ZP.hasUnread(t.id, _.W.GUILD_ONBOARDING_QUESTION),
          ),
          T = y.length > v.Cb,
          P = (0, r.e7)([d.Z, f.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
              n = f.ZP.lastMessageId(t.id, _.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
          }),
          A = l.useCallback(() => {
            (0, m.uL)(
              x.Z5c.CHANNEL(
                t.id,
                N ? I.oC.CUSTOMIZE_COMMUNITY : I.oC.CHANNEL_BROWSER,
              ),
            );
          }, [t.id, N]),
          w = l.useCallback(
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
          (!E || j || T) &&
            !S &&
            !P &&
            (M = (0, i.jsx)(s.TextBadge, {
              color: o.Z.colors.BADGE_BRAND_BG.css,
              text: Z.intl.string(Z.t.y2b7CA),
              className: b.newChannel,
            })),
          (0, i.jsx)(C.m, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                size: "md",
                color: "currentColor",
                className: e,
              }),
            text: N ? Z.intl.string(Z.t.h9mGOD) : Z.intl.string(Z.t.et6wam),
            selected: S,
            onClick: A,
            onContextMenu: w,
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
        a = n.n(r),
        o = n(476183),
        s = n(873546),
        c = n(481060),
        u = n(540059),
        d = n(666188),
        h = n(695346),
        p = n(768581),
        m = n(358555),
        f = n(981631),
        g = n(647086),
        v = n(388032),
        C = n(837349);
      function x(e) {
        var t;
        let { guild: n, controller: l, guildBanner: r, animate: c } = e,
          { value: d } = l.springs,
          m = h.QK.getSetting(),
          f = (0, u.Q3)("AnimatedBanner") ? 150 : 90;
        return (0, i.jsx)(o.animated.div, {
          className: C.animatedContainer,
          style: {
            opacity: d,
            transform: d.to((e) => "translateY(-".concat((1 - e) * f, "px)")),
          },
          children: (0, i.jsx)(o.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: {
              transform: d.to((e) =>
                m
                  ? "translateY("
                      .concat((1 - e) * f * (2 / 3), "px) scale(")
                      .concat(1 + (1 - e) * 0.2, ")")
                  : "translateY(".concat((1 - e) * f, "px)"),
              ),
            },
            children: (0, i.jsx)("img", {
              className: a()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
              src:
                null !==
                  (t = p.ZP.getGuildBannerURL({ id: n.id, banner: r }, c)) &&
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
          { value: s } = n.springs,
          u = t.hasFeature(f.oNc.DISCOVERABLE),
          d = (0, i.jsx)("div", {
            className: C.communityInfo,
            children:
              u &&
              (0, i.jsx)(c.Tooltip, {
                text: v.intl.string(v.t.O8lDIy),
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
                        children: v.intl.string(v.t["B/vjCg"]),
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
      function _() {
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
            onContextMenu: Z,
            onMouseDown: b,
            disableBannerAnimation: S,
            "aria-expanded": N,
            "aria-controls": E,
            guild: y,
            guildBanner: j,
            animationOverlayHeight: T,
            children: P,
            headerClassName: A,
            communityInfoVisible: w,
            hasSubheader: M,
          } = e,
          L = y.hasFeature(f.oNc.ANIMATED_BANNER),
          R = (0, d.Z)(y),
          D = !R && y.hasCommunityInfoSubheader(),
          G = !R && w,
          k = (0, p.xR)(j) && L && !S,
          [B, U] = l.useState(!1),
          O = l.useRef(),
          V = l.useRef(null),
          H = l.useRef(),
          F = h.QK.getSetting();
        l.useEffect(() => {
          if (k && t && !O.current && F)
            return (
              U(!0),
              (H.current = setTimeout(() => {
                U(!1);
              }, 5e3)),
              () => {
                clearTimeout(H.current);
              }
            );
        }, [k, t, F]),
          l.useEffect(() => {
            O.current = t;
          }, [t]);
        let W = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
          },
          z = (0, u.Q3)("GuildHeader");
        return (0, i.jsx)(c.ThemeProvider, {
          theme: t ? f.BRd.DARK : void 0,
          children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  ref: V,
                  className: a()(r, {
                    [C.container]: !0,
                    [C.clickable]: null != o,
                    [C.selected]: null != o && N,
                    [C.hasBanner]: W(),
                    [C.bannerVisible]: t,
                    [e]: !z && t,
                    [C.communityInfoVisible]: G || (M && D),
                  }),
                  onMouseDown: b,
                  onContextMenu: Z,
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
                            (0, i.jsx)(m.Z, { guild: y, isBannerVisible: t }),
                            y.id === g._ && (0, i.jsx)(_, {}),
                            (0, i.jsx)(c.Heading, {
                              variant: "text-md/semibold",
                              lineClamp: 1,
                              className: C.name,
                              children: y.toString(),
                            }),
                            null != o &&
                              (0, i.jsx)(c.Clickable, {
                                className: C.headerButton,
                                "aria-controls": E,
                                "aria-expanded": N,
                                focusProps: { ringTarget: V, offset: 4 },
                                onClick: o,
                                onContextMenu: Z,
                                "aria-label": v.intl.formatToPlainString(
                                  v.t.xMXpl5,
                                  {
                                    guildName:
                                      null !==
                                        (l =
                                          null == y ? void 0 : y.toString()) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                  },
                                ),
                              }),
                            (0, i.jsx)("div", {
                              className: C.headerChildren,
                              children: P,
                            }),
                          ],
                        }),
                        D &&
                          (0, i.jsx)(I, {
                            guild: y,
                            controller: n,
                            hasBanner: null != j,
                            hasSubheader: null != M && M,
                          }),
                      ],
                    }),
                    null != j
                      ? (0, i.jsx)(x, {
                          guild: y,
                          controller: n,
                          guildBanner: j,
                          animate: B,
                        })
                      : null,
                  ],
                }),
                k && W()
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
          return x;
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
        v = n(176505),
        C = n(388032);
      function x(e) {
        let { guild: t, selected: n } = e,
          x = (0, r.e7)([p.Z], () => p.Z.can(g.Plq.KICK_MEMBERS, t)),
          I = (0, r.e7)([c.Z], () =>
            c.Z.getSubmittedGuildJoinRequestTotal(t.id),
          ),
          _ = x && null != I ? I : 0;
        return (
          l.useEffect(() => {
            x &&
              s.Z.fetchGuildJoinRequests({
                guildId: t.id,
                status: u.wB.SUBMITTED,
                limit: d.p,
              });
          }, [x, t.id]),
          (0, i.jsx)(f.m, {
            id: "application-review-".concat(t.id),
            renderIcon: (e) =>
              (0, i.jsx)(m.Z, { className: e, width: 24, height: 24 }),
            text: C.intl.string(C.t.tcvVXF),
            selected: n,
            onClick: () => {
              (0, o.Q2)({
                guildId: t.id,
                source: g.jXE.CHANNEL_LIST,
                tab: v.oC.MEMBER_APPLICATIONS,
              }),
                (0, h.uL)(g.Z5c.CHANNEL(t.id, v.oC.MEMBER_APPLICATIONS));
            },
            trailing: _ > 0 ? (0, i.jsx)(a.NumberBadge, { count: _ }) : null,
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
        g = n(47622);
      function v(e, t) {
        return (0, i.jsx)(
          o.Text,
          { variant: "text-xs/bold", color: "text-normal", children: e },
          t,
        );
      }
      let C = l.memo(function (e) {
        let { guild: t } = e,
          n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
          C = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
          x = l.useMemo(() => {
            if (null == n || null == C) return 0;
            let e = 0;
            return (
              n.forEach((t) => {
                null != C[t.channelId] && e++;
              }),
              e
            );
          }, [C, n]),
          I = null == n ? 0 : n.length,
          _ = (0, r.JA)("progress-bar-".concat(t.id));
        return (0, i.jsxs)("li", {
          children: [
            (0, i.jsxs)(o.Clickable, {
              ..._,
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
                            numberHook: v,
                            total: I.toString(),
                            completed: x.toString(),
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
                  percent: (x / I) * 100 + 3,
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
          return T;
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
        v = n(605236),
        C = n(703656),
        x = n(984933),
        I = n(430824),
        _ = n(626135),
        Z = n(434479),
        b = n(981631),
        S = n(176505),
        N = n(629481),
        E = n(388032),
        y = n(273595);
      function j(e) {
        let { guildId: t, selected: n, handleClick: l } = e,
          u = (0, m.RF)(t, "guild_shop_channel_row"),
          f = (0, a.e7)([I.Z], () => I.Z.getGuild(t)),
          S =
            (null == f
              ? void 0
              : f.hasFeature(
                  b.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                )) === !0,
          j = "false" === s.K.get(N.tM, "false"),
          T = (0, a.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, i.jsx)(Z.m, {
          id: "shop-".concat(t),
          className: r()(y.previewChannelRow, {
            [y.selected]: n,
            [y.phantomPreview]: j,
          }),
          innerClassName: y.previewChannelRowContent,
          renderIcon: (e) =>
            (0, i.jsx)(g.Z, {
              width: 20,
              height: 20,
              className: r()([e, y.shopIcon]),
            }),
          text: E.intl.string(E.t.al5EXF),
          selected: n,
          onClick: l,
          trailing: (0, i.jsxs)("div", {
            className: y.gifSection,
            children: [
              T
                ? (0, i.jsx)(c.TextBadge, {
                    color: c.tokens.unsafe_rawColors.BRAND_260.css,
                    text: E.intl.string(E.t.y2b7CA),
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
                      (0, v.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW),
                      _.default.track(b.rMx.GUILD_SHOP_PREVIEW_CLICK, {
                        ...(0, h.hH)(t),
                        action_taken: N.mz.DISMISS_CHANNEL_ROW,
                      }),
                      !u || !S)
                    ) {
                      var n;
                      (0, C.dL)(
                        b.Z5c.CHANNEL(
                          t,
                          null === (n = x.ZP.getDefaultChannel(t)) ||
                            void 0 === n
                            ? void 0
                            : n.id,
                        ),
                      );
                    }
                  },
                  "aria-label": E.intl.string(E.t.cpT0Cg),
                  children: (0, i.jsx)(c.CircleXIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
            ],
          }),
        });
      }
      function T(e) {
        let { guild: t, selected: l } = e,
          r = (0, f.g)(t, "guild_shop_channel_row"),
          a = () => {
            s.K.set(N.tM, "true"),
              (0, C.uL)(b.Z5c.CHANNEL(t.id, S.oC.GUILD_SHOP));
          };
        return r
          ? (0, i.jsx)(j, { guildId: t.id, selected: l, handleClick: a })
          : (0, i.jsx)(Z.m, {
              id: "shop-".concat(t.id),
              renderIcon: (e) =>
                (0, i.jsx)(g.Z, { width: 20, height: 20, className: e }),
              text: E.intl.string(E.t.al5EXF),
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
        s = n(481060),
        c = n(540059),
        u = n(592125),
        d = n(938475),
        h = n(823379),
        p = n(734190),
        m = n(388032),
        f = n(329986);
      t.Z = l.memo(function (e) {
        let {
            channel: t,
            selectedChannel: n,
            selectedVoiceChannelId: l,
            sortedThreadIds: r,
            withGuildIcon: g,
          } = e,
          { density: v } = (0, s.useThemeContext)(),
          C = (0, c.Q3)("GuildSidebarThreadList"),
          x = (0, o.Wu)(
            [u.Z],
            () => r.map((e) => u.Z.getChannel(e)).filter(h.lm),
            [r],
          ),
          I = (0, o.e7)([d.ZP], () => {
            let e = x[x.length - 1];
            if (null == e) return 0;
            let t = d.ZP.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length
              ? 0
              : l !== e.id
                ? 40
                : 32 * t.length + 8;
          });
        return (0, i.jsx)("li", {
          className: f.container,
          children: (0, i.jsxs)("ul", {
            role: "group",
            "aria-label": m.intl.formatToPlainString(m.t.EiyIi4, {
              channelName: t.name,
            }),
            children: [
              (0, i.jsx)("div", {
                className: a()(f.spineBorder, {
                  [f.spineBorderWithGuildIcon]: g,
                }),
                style: { bottom: (C && "cozy" === v ? 28 : 24) + I },
              }),
              x.map((e, t) =>
                (0, i.jsx)(
                  p.Z,
                  {
                    thread: e,
                    isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                    isSelectedVoice: l === e.id,
                    isLast: t === x.length - 1,
                    withGuildIcon: g,
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
        p = n(540059),
        m = n(569471),
        f = n(488131),
        g = n(592125),
        v = n(306680),
        C = n(979651),
        x = n(938475),
        I = n(714794),
        _ = n(135724),
        Z = n(25601),
        b = n(207055),
        S = n(981631),
        N = n(124368),
        E = n(388032),
        y = n(831746),
        j = n(193877),
        T = n(329986);
      function P(e) {
        let { style: t, withGuildIcon: n, inverted: l } = e,
          r = {
            className: a()(
              T.spine,
              { [T.spineWithGuildIcon]: n },
              { [T.invertedSpine]: l },
            ),
            style: t,
          },
          { density: o } = (0, c.useThemeContext)();
        return "cozy" === o
          ? (0, i.jsxs)("svg", {
              ...r,
              width: "25",
              height: "23",
              viewBox: "0 0 25 23",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  d: "M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM0 1V18H2V1H0ZM0 18C0 20.7614 2.23858 23 5 23V21C3.34315 21 2 19.6569 2 18H0Z",
                  fill: "currentColor",
                }),
                (0, i.jsx)("path", {
                  d: "M6 21L5 21L5 23L6 23L6 21ZM24 23C24.5523 23 25 22.5523 25 22C25 21.4477 24.5523 21 24 21L24 23ZM6 23L24 23L24 21L6 21L6 23Z",
                  fill: "currentColor",
                }),
              ],
            })
          : (0, i.jsxs)("svg", {
              ...r,
              width: "25",
              height: "19",
              viewBox: "0 0 25 19",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  d: "M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM0 1V14H2V1H0ZM0 14C0 16.7614 2.23858 19 5 19V17C3.34315 17 2 15.6569 2 14H0Z",
                  fill: "currentColor",
                }),
                (0, i.jsx)("path", {
                  d: "M6 17L5 17L5 19L6 19L6 17ZM24 19C24.5523 19 25 18.5523 25 18C25 17.4477 24.5523 17 24 17L24 19ZM6 19L24 19L24 17L6 17L6 19Z",
                  fill: "currentColor",
                }),
              ],
            });
      }
      function A(e) {
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
            isLast: w,
            withGuildIcon: M,
          } = e,
          L = (0, s.e7)([x.ZP], () => x.ZP.getVoiceStatesForChannel(t), [t]),
          R = (0, s.e7)([C.Z], () => C.Z.hasVideo(t.id)),
          {
            unread: D,
            mentionCount: G,
            isMentionLowImportance: k,
          } = (0, s.cj)([v.ZP], () => ({
            unread: v.ZP.hasUnread(t.id),
            mentionCount: v.ZP.getMentionCount(t.id),
            isMentionLowImportance: v.ZP.getIsMentionLowImportance(t.id),
          })),
          B = (0, s.e7)([m.Z], () => m.Z.isMuted(t.id)),
          U = l.useCallback(
            (e) => {
              (0, f.ok)(t, !e.shiftKey, N.on.CHANNEL_LIST);
            },
            [t],
          ),
          O = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
          }, [t.guild_id, t.id]),
          V = l.useCallback(
            (e) => {
              let l = g.Z.getChannel(t.id);
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
          H = null == L ? 0 : L.length,
          { role: F, ...W } = (0, o.JA)(t.id),
          z = l.useRef(null),
          q =
            G > 0
              ? E.intl.formatToPlainString(E.t["ZL7+Iy"], {
                  channelName: t.name,
                  mentionCount: G,
                })
              : D
                ? E.intl.formatToPlainString(E.t.YlVvmZ, {
                    channelName: t.name,
                  })
                : E.intl.formatToPlainString(E.t["0nZpiI"], {
                    channelName: t.name,
                  }),
          Y = (0, p.Q3)("GuildSidebarThreadListEntry") ? P : A;
        return (0, i.jsxs)("li", {
          role: F,
          className: a()(y.containerDefault, { [y.selected]: r }),
          children: [
            (0, i.jsx)(Y, { withGuildIcon: M }),
            w
              ? null
              : (0, i.jsx)(Y, {
                  withGuildIcon: M,
                  inverted: !0,
                  style: { transform: "rotateX(180deg) translateY(-9px)" },
                }),
            (0, i.jsx)(c.FocusRing, {
              focusTarget: z,
              ringTarget: z,
              offset: { top: 2, bottom: 2, right: 4 },
              children: (0, i.jsxs)("div", {
                className: a()(y.iconVisibility, j.wrapper, j.typeThread, {
                  [j.modeSelected]: r,
                  [j.modeMuted]: !r && B,
                  [j.modeUnreadImportant]: !B && !r && D,
                  [j.withGuildIcon]: M,
                }),
                onMouseDown: O,
                onContextMenu: V,
                children: [
                  !D || B || r
                    ? null
                    : (0, i.jsx)("div", {
                        className: a()(j.unread, j.unreadImportant),
                      }),
                  (0, i.jsx)(c.Clickable, {
                    ...W,
                    innerRef: z,
                    className: j.link,
                    onClick: U,
                    "aria-label": q,
                    focusProps: { enabled: !1 },
                    children: (0, i.jsxs)("div", {
                      className: a()(j.linkTop, j.__invalid_threadMainContent),
                      children: [
                        (0, i.jsx)(h.Z, {
                          className: j.name,
                          "aria-hidden": !0,
                          children: t.name,
                        }),
                        (0, i.jsxs)("div", {
                          className: j.children,
                          children: [
                            H > 0 && t.userLimit > 0
                              ? (0, i.jsx)(_.Z, {
                                  userCount: H,
                                  video: R,
                                  channel: t,
                                })
                              : null,
                            (0, I.Z)(G)
                              ? (0, i.jsx)(Z.Z, {
                                  mentionsCount: G,
                                  isMentionLowImportance: k,
                                })
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
              voiceStates: L,
              location: S.Sbl.GUILD_CHANNEL_LIST,
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
        a = n(953498);
      function o(e) {
        let { mentionsCount: t, isMentionLowImportance: n } = e;
        return (0, i.jsx)("div", {
          className: a.mentionsBadge,
          "aria-hidden": !0,
          children: (0, i.jsx)(r.NumberBadge, {
            count: t,
            color: n ? l.Z.BACKGROUND_ACCENT : l.Z.STATUS_DANGER,
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
        v = n(378844),
        C = n(359110),
        x = n(922482),
        I = n(431328),
        _ = n(501655),
        Z = n(427679),
        b = n(368442),
        S = n(201469),
        N = n(680089),
        E = n(592125),
        y = n(430824),
        j = n(607744),
        T = n(496675),
        P = n(306680),
        A = n(9156),
        w = n(979651),
        M = n(934415),
        L = n(98597),
        R = n(648501),
        D = n(473403),
        G = n(207055),
        k = n(981631),
        B = n(647086),
        U = n(388032),
        O = n(831746),
        V = n(645693);
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
          return (0, M.rY)(e, w.Z, y.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return O.containerUserOver;
          if (null != t)
            return e > t ? O.containerDragAfter : O.containerDragBefore;
          return O.containerDefault;
        }
        renderVoiceUsers() {
          let {
            channel: e,
            collapsed: t,
            tabIndex: n,
            speakerVoiceStates: l,
            numAudience: r,
          } = this.props;
          return (0, i.jsx)(G.Z, {
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
              unread: v,
              resolvedUnreadSetting: C,
              mentionCount: x,
              isFavoriteSuggestion: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: _ } = this.state,
            Z = this.getVoiceStatesCount(),
            b = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [O.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: [
                (0, i.jsx)(o.Popout, {
                  position: "right",
                  renderPopout: this.renderPopout,
                  spacing: 0,
                  onRequestClose: this.closeGuildVerificationPopout,
                  shouldShow: _,
                  children: () =>
                    (0, i.jsx)(o.Tooltip, {
                      text: this.getTooltipText(),
                      children: (a) => {
                        let { onClick: o, onContextMenu: s, ...c } = a;
                        return (0, i.jsxs)(D.Z, {
                          className: O.iconVisibility,
                          iconClassName: r()({ [V.iconLive]: null != m }),
                          channel: e,
                          selected: !I && t,
                          connected: n,
                          unread: n ? v : void 0,
                          resolvedUnreadSetting: C,
                          mentionCount: x,
                          locked: l,
                          onClick: () => {
                            this.handleClick(), null == o || o();
                          },
                          onContextMenu: (e) => {
                            this.handleContextMenu(e), null == s || s();
                          },
                          connectDragPreview: u,
                          subtitle: this.renderSubtitle(),
                          isFavoriteSuggestion: I,
                          "aria-label": (0, h.ZP)({
                            channel: e,
                            unread: v,
                            mentionCount: x,
                            userCount: Z,
                            isSubscriptionGated: f,
                            needSubscriptionToAccess: g,
                          }),
                          ...c,
                          children: [
                            I && this.renderAcceptSuggestionButton(),
                            I && this.renderRemoveSuggestionButton(),
                            !I && this.renderOpenChatButton(),
                            !I && this.renderInviteButton(),
                            !I && this.renderEditButton(),
                            !I && this.renderChannelInfo(),
                          ],
                        });
                      },
                    }),
                }),
                this.renderVoiceUsers(),
              ],
            });
          return p && (b = c(b)), d && (b = a(s(b))), b;
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
              null != l && (0, f.n)(l) && (0, m.hk)(l),
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                !t &&
                  !n &&
                  !e.isRoleSubscriptionTemplatePreviewChannel() &&
                  (0, x.Cq)(e),
                !__OVERLAY__ && (0, C.Kh)(e.id);
            }),
            H(this, "handleClickChat", () => {
              let { channel: e, locked: t } = this.props;
              !__OVERLAY__ && !t && (0, C.Kh)(e.id);
            }),
            H(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = y.Z.getGuild(t.getGuildId());
              if (null != l)
                (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("83331"),
                    n.e("14280"),
                  ]).then(n.bind(n, 213202));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            H(this, "renderPopout", () => {
              let { channel: e } = this.props,
                { shouldShowGuildVerificationPopout: t } = this.state;
              if (t)
                return (0, i.jsx)(v.Z, {
                  type: v.R.VOICE,
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
                return (0, i.jsx)(o.Tooltip, {
                  text: U.intl.string(U.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(o.Clickable, {
                      className: r()(O.iconItem, n ? O.alwaysShown : null),
                      onClick: () => {
                        s.Z.updateChatOpen(e.id, !0), this.handleClickChat();
                      },
                      "aria-label": U.intl.string(U.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: c,
                      onBlur: u,
                      children: (0, i.jsx)(o.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: O.actionIcon,
                      }),
                    });
                  },
                });
            }),
            H(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e ? U.intl.string(U.t.rZfiNj) : null;
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
            collapsed: o,
            voiceStates: s,
          } = e,
          c = (0, a.cj)([P.ZP], () => ({
            unread: P.ZP.hasUnread(n.id),
            mentionCount: P.ZP.getMentionCount(n.id),
          })),
          u = (0, a.e7)([A.ZP], () => A.ZP.resolveUnreadSetting(n)),
          d = (0, a.cj)([E.Z, j.Z, T.Z], () => {
            let e = E.Z.getChannel(n.parent_id),
              i = j.Z.getCheck(n.guild_id);
            return {
              canManageChannel: null != t && T.Z.can(k.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === B._ ||
                  (null != e
                    ? T.Z.can(k.Plq.MANAGE_CHANNELS, e)
                    : T.Z.can(k.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: T.Z.can(k.Plq.MOVE_MEMBERS, n),
              locked: !T.Z.can(k.Plq.CONNECT, n),
              bypassLimit: T.Z.can(k.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          h = (0, a.e7)([N.Z], () => N.Z.isCollapsed(n.parent_id)),
          p = (0, S.ZP)(n.id),
          m = (0, a.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(n.id), [
            n.id,
          ]),
          f = (0, I.Rk)(n.id, _.pV.AUDIENCE),
          { isSubscriptionGated: v, needSubscriptionToAccess: C } = (0, g.Z)(
            n.id,
          ),
          x = (0, a.e7)([A.ZP], () => A.ZP.isFavorite(t.id, n.id)),
          y = (0, b.xJ)(n.id),
          w = (0, R.Z)({
            channel: n,
            isChannelSelected: !1,
            isChannelCollapsed: o,
            voiceStates: s,
            isSubscriptionGated: v,
            needSubscriptionToAccess: C,
            enableConnectedUserLimit:
              y || (n.userLimit > 0 && n.userLimit < k.xGv),
          }),
          M = e.connected && null == w;
        return (0, i.jsx)(W, {
          categoryCollapsed: h,
          connectAction: p,
          numAudience: f,
          stageInstance: m,
          isSubscriptionGated: v,
          needSubscriptionToAccess: C,
          ...c,
          ...d,
          ...e,
          isFavoriteSuggestion: r && !x,
          forceShowButtons: M,
          channelInfo: w,
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
        v = n(473403),
        C = n(981631),
        x = n(490897),
        I = n(831746);
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
      function Z(e, t) {
        let n = t.getGuildId();
        if (null == n)
          throw Error(
            "TextChannel, preloadChannel: Channel does not have a guildId",
          );
        s.Z.preload(n, t.id);
      }
      class b extends g.ZP {
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
                [I.disabled]: this.isDisabled(),
              }),
              "data-dnd-name": e.name,
              children: (0, i.jsxs)(v.Z, {
                className: I.iconVisibility,
                channel: e,
                selected: t,
                onClick: this.handleClick,
                onMouseDown: Z,
                onContextMenu: this.handleContextMenu,
                connectDragPreview: o ? r : null,
                "aria-label": (0, d.ZP)({ channel: e }),
                resolvedUnreadSetting: x.i.ONLY_MENTIONS,
                children: [this.renderInviteButton(), this.renderEditButton()],
              }),
            });
          return o ? n(l(s)) : s;
        }
        constructor(...e) {
          super(...e),
            _(this, "handleContextMenu", (e) => {
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
            _(this, "handleClick", (e) => {
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
      let S = (0, u.B)(b);
      t.Z = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
          r = (0, o.cj)([p.Z, f.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
              canManageChannel: f.Z.can(C.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l && null != e
                  ? f.Z.can(C.Plq.MANAGE_CHANNELS, e)
                  : f.Z.can(C.Plq.MANAGE_CHANNELS, n),
            };
          });
        return (0, i.jsx)(S, { ...r, ...e });
      });
    },
    79556: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
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
        v = n(665906),
        C = n(592125),
        x = n(430824),
        I = n(496675),
        _ = n(306680),
        Z = n(9156),
        b = n(594174),
        S = n(109446),
        N = n(98597),
        E = n(648501),
        y = n(473403),
        j = n(304471),
        T = n(981631),
        P = n(647086),
        A = n(831746);
      function w(e, t, n) {
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
      class M extends N.ZP {
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
            : (0, i.jsx)("div", { className: A.channelInfo, children: e });
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
              isSubscriptionGated: v,
              isFavoriteSuggestion: C,
              subtitle: x,
              forceTopLevelThread: I,
              embeddedApps: _,
              resolvedUnreadSetting: Z,
              withGuildIcon: b,
              enableActivities: S,
            } = this.props,
            N = S && null != _ && _.length > 0,
            E = (0, m.D)(x),
            j = (0, i.jsx)("li", {
              className: r()(this.getClassName(), {
                [A.disabled]: this.isDisabled(),
                [A.selected]: n,
              }),
              "data-dnd-name": e.name,
              onMouseEnter: c || N ? this.handleMouseEnter : void 0,
              onMouseLeave: c || N ? this.handleMouseLeave : void 0,
              children: (0, i.jsx)(o.Popout, {
                position: "right",
                renderPopout: this.renderPopout,
                spacing: 0,
                onRequestClose: this.handleClosePopout,
                shouldShow:
                  (c && this.state.shouldShowThreadsPopout) ||
                  (N && this.state.shouldShowActivities),
                children: () =>
                  (0, i.jsxs)(y.Z, {
                    className: A.iconVisibility,
                    channel: e,
                    guild: t,
                    selected: !C && n,
                    muted: l,
                    unread: a,
                    mentionCount: u,
                    hasActiveThreads: s,
                    subtitle: null == E ? void 0 : E.subtitle,
                    subtitleColor: null == E ? void 0 : E.color,
                    onMouseDown: this.handleMouseDown,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: g ? f : null,
                    isFavoriteSuggestion: C,
                    channelTypeOverride: I ? T.d4z.GUILD_TEXT : void 0,
                    resolvedUnreadSetting: Z,
                    withGuildIcon: b,
                    "aria-label": (0, p.ZP)({
                      channel: e,
                      unread: a,
                      mentionCount: u,
                      isSubscriptionGated: v,
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
          return g ? d(h(j)) : j;
        }
        constructor(...e) {
          super(...e),
            w(this, "state", {
              shouldShowThreadsPopout: !1,
              shouldShowActivities: !1,
            }),
            w(this, "enterTimer", 0),
            w(this, "exitTimer", 0),
            w(this, "handleMouseEnter", () => {
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
            w(this, "handleMouseLeave", () => {
              this.resetTextChannelPopoutTimers(),
                (this.exitTimer = setTimeout(() => {
                  this.state.shouldShowActivities &&
                    this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout &&
                      this.setState({ shouldShowThreadsPopout: !1 });
                }, 250));
            }),
            w(this, "handleThreadsPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowThreadsPopout: !1 });
            }),
            w(this, "handleActivitiesPopoutClose", () => {
              this.resetTextChannelPopoutTimers(),
                this.setState({ shouldShowActivities: !1 });
            }),
            w(this, "handleClosePopout", () => {
              this.state.shouldShowActivities &&
                this.handleActivitiesPopoutClose(),
                this.state.shouldShowThreadsPopout &&
                  this.handleThreadsPopoutClose();
            }),
            w(this, "handleMouseDown", () => {
              this.handleActivitiesPopoutClose(),
                this.handleThreadsPopoutClose();
              let { channel: e } = this.props,
                t = e.getGuildId();
              s.Z.preload(null != t ? t : T.ME, e.id);
            }),
            w(this, "renderPopout", (e) => {
              let { channel: t, sorting: n, embeddedApps: l } = this.props,
                { shouldShowActivities: r } = this.state;
              return null != l && l.length > 0 && r && !n
                ? (0, i.jsx)(j.Z, {
                    onAction: this.handleActivitiesPopoutClose,
                    channel: t,
                  })
                : (0, i.jsx)(S.Z, { ...e, channel: this.props.channel });
            }),
            w(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props;
              if (t.type === T.d4z.GROUP_DM) {
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
              if (t.type === T.d4z.DM) {
                let l = b.default.getUser(t.getRecipientId());
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
              let l = x.Z.getGuild(t.getGuildId());
              null != l &&
                (0, c.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("44011"),
                  ]).then(n.bind(n, 373651));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            });
        }
      }
      let L = (0, u.B)(M);
      function R(e) {
        let {
            channel: t,
            guild: n,
            disableSorting: l,
            isFavoriteCategory: r,
            muted: o,
            selected: s,
          } = e,
          { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, v.JQ)(t),
          p = (0, a.cj)([_.ZP], () => ({
            unread: _.ZP.hasUnread(t.id),
            ackMessageId: _.ZP.ackMessageId(t.id),
            isLowImportanceMention: _.ZP.getIsMentionLowImportance(t.id),
          })),
          m = (0, a.e7)([Z.ZP], () => Z.ZP.resolveUnreadSetting(t)),
          x = (0, a.cj)([C.Z, I.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return {
              canManageChannel: I.Z.can(T.Plq.MANAGE_CHANNELS, t),
              canReorderChannel:
                !0 !== l &&
                (n.id === P._ ||
                  (null != e
                    ? I.Z.can(T.Plq.MANAGE_CHANNELS, e)
                    : I.Z.can(T.Plq.MANAGE_CHANNELS, n))),
            };
          }),
          S = (0, a.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(n.id, t.id)),
          { needSubscriptionToAccess: N, isSubscriptionGated: y } = (0, f.Z)(
            t.id,
          ),
          j = (0, a.e7)([Z.ZP], () => Z.ZP.isFavorite(n.id, t.id)),
          A = (0, a.e7)(
            [b.default],
            () => {
              let e = b.default.getCurrentUser();
              return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t],
          ),
          w = (0, d.NX)(t.id),
          M = (0, E.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: y,
            needSubscriptionToAccess: N,
            isNewChannel: S,
            muted: o,
            enableActivities: w,
            resolvedUnreadSetting: m,
          }),
          R = (0, h.ZP)(t);
        return (0, i.jsx)(L, {
          ...p,
          ...x,
          ...e,
          hasActiveThreads: c,
          hasMoreActiveThreads: u,
          isSubscriptionGated: y,
          needSubscriptionToAccess: N,
          isNewChannel: S && e.canBeNewChannel,
          isFavoriteSuggestion: r && !j,
          canShowThreadPreviewForUser: A,
          channelInfo: M,
          embeddedApps: R,
          resolvedUnreadSetting: m,
          hasChannelInfo: null != M,
          enableActivities: w,
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
          return _;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(476183),
        s = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(540059),
        h = n(492162),
        p = n(237583),
        m = n(451478),
        f = n(934415),
        g = n(968847),
        v = n(388032),
        C = n(706091);
      let x = { friction: 30, tension: 300 };
      function I(e) {
        var t;
        let { guildChannels: n, jumpToVoiceChannels: r } = e,
          o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
          s = (0, h.Z)(n.id),
          d = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), r();
            },
            [r],
          ),
          m =
            null !== (t = null == o ? void 0 : o.getChannelRecords()) &&
            void 0 !== t
              ? t
              : [],
          g = (0, f.c4)({
            channels: m,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s,
          });
        return (0, i.jsxs)(u.Clickable, {
          className: a()(C.bar),
          onClick: d,
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
              children: v.intl.format(v.t["fDlr+P"], { count: g.length }),
            }),
            (0, i.jsx)(p.Z, {
              guildId: n.id,
              className: C.voiceChannelsUsers,
              users: g.slice(0, 4),
              renderMoreUsers: () => null,
              max: 4,
              size: u.AvatarSizes.SIZE_16,
            }),
          ],
        });
      }
      function _(e) {
        let {
            position: t,
            guildChannels: n,
            guildChannelsVersion: r,
            jumpToVoiceChannels: c,
            jumpToChannel: h,
          } = e,
          p = (0, d.Q3)("UnreadBar"),
          { bottomBar: f, topBar: _ } = (0, s.cj)([g.Z], () =>
            g.Z.getUnreadStateForGuildId(n.id),
          ),
          Z = (0, s.e7)([m.Z], () => m.Z.isFocused()),
          {
            mode: b,
            mentionCount: S,
            targetChannelId: N,
          } = "bottom" === t ? f : _,
          E = b === g.x.HIDDEN,
          y = (0, u.useSpring)(
            {
              to: {
                transform: E
                  ? "bottom" === t
                    ? "translateY(180%)"
                    : "translateY(-180%)"
                  : "translateY(0%)",
              },
              config: x,
            },
            Z ? "respect-motion-settings" : "animate-never",
          ),
          j = l.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null != N && h(N);
            },
            [h, N],
          );
        return (0, i.jsx)("div", {
          className: a()(C.container, {
            [C.top]: "top" === t,
            [C.bottom]: "bottom" === t,
          }),
          children: (0, i.jsx)(o.animated.div, {
            className: C.containerPadding,
            style: y,
            "aria-hidden": E,
            children:
              b === g.x.HIDDEN
                ? (0, i.jsx)("div", { className: a()(C.bar, C.emptyBar) })
                : b === g.x.UNREAD
                  ? (0, i.jsxs)(u.Clickable, {
                      className: C.bar,
                      onClick: j,
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
                          children: v.intl.string(v.t.FCRiT0),
                        }),
                      ],
                    })
                  : b === g.x.MENTIONS
                    ? (0, i.jsx)(u.Clickable, {
                        className: a()(C.bar, C.mentionsBar),
                        onClick: j,
                        children: (0, i.jsx)(u.Text, {
                          variant: "text-xs/semibold",
                          color: p ? "text-primary" : "status-danger-text",
                          className: C.barText,
                          children: v.intl.format(v.t.EQcLys, { count: S }),
                        }),
                      })
                    : b === g.x.VOICE_CHANNELS
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
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(358230),
        o = n(18998),
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
        f = n(193877);
      function g(e) {
        let { guild: t, selected: g } = e,
          { hasUnread: v, mentionCount: C } = (0, l.cj)(
            [u.ZP],
            () => ({
              hasUnread: u.ZP.hasUnread(t.id, p.W.GUILD_EVENT),
              mentionCount: u.ZP.getMentionCount(t.id, p.W.GUILD_EVENT),
            }),
            [t.id],
          ),
          x = (0, l.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
        async function I() {
          await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("22347"),
              n.e("56236"),
              n.e("22506"),
            ]).then(n.bind(n, 17671));
            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
          }),
            (0, s.EW)(r.z.GUILD_HEADER_EVENT_UPSELL);
        }
        let _ = (0, c.ZP)(t.id),
          Z =
            _.length > 0
              ? m.intl.formatToPlainString(m.t.IBdqSk, { number: _.length })
              : m.intl.string(m.t.tlopTE);
        return (0, i.jsx)(h.m, {
          id: "upcoming-events-".concat(t.id),
          renderIcon: (e) =>
            (0, i.jsx)(a.CalendarIcon, {
              size: "md",
              color: "currentColor",
              className: e,
            }),
          text: Z,
          selected: g,
          onClick: I,
          onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
              let { default: e } = await n.e("95307").then(n.bind(n, 867757));
              return (n) => (0, i.jsx)(e, { ...n, guildId: t.id });
            });
          },
          showUnread: v && !x,
          trailing:
            !x && C > 0
              ? (0, i.jsx)(a.NumberBadge, {
                  className: f.numberBadge,
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
          return et;
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
        v = n(933557),
        C = n(557135),
        x = n(873696),
        I = n(446226),
        _ = n(305325),
        Z = n(281956),
        b = n(66999),
        S = n(554747),
        N = n(378844),
        E = n(574176),
        y = n(335353),
        j = n(896835),
        T = n(359110),
        P = n(155409),
        A = n(695346),
        w = n(447564),
        M = n(592125),
        L = n(430824),
        R = n(607744),
        D = n(496675),
        G = n(306680),
        k = n(9156),
        B = n(979651),
        U = n(934415),
        O = n(63063),
        V = n(98597),
        H = n(648501),
        F = n(473403),
        W = n(830993),
        z = n(653577),
        q = n(207055),
        Y = n(981631),
        Q = n(647086),
        J = n(388032),
        K = n(831746);
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
      class $ extends V.ZP {
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
          return (0, U.rY)(e, B.Z, L.Z);
        }
        getModeClass() {
          let { position: e, sortingPosition: t, isUserOver: n } = this.props;
          if (n) return K.containerUserOver;
          if (null != t)
            return e > t ? K.containerDragAfter : K.containerDragBefore;
          return K.containerDefault;
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
              null === (e = (0, x.D)(this.props.subtitle)) || void 0 === e
                ? void 0
                : e.subtitle,
            { hovered: o } = this.state;
          return (0, i.jsx)(z.Z, {
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
          return (0, i.jsx)(q.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: Y.Sbl.GUILD_CHANNEL_LIST,
          });
        }
        renderChannelInfo() {
          let { channelInfo: e } = this.props;
          return null == e
            ? null
            : (0, i.jsx)("div", { className: K.channelInfo, children: e });
        }
        renderHDSplashedIcon() {
          let { channel: e, locked: t } = this.props;
          return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                text: J.intl.string(J.t.gpF6QU),
                children: (t) => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onFocus: a,
                    onBlur: o,
                  } = t;
                  return (0, i.jsx)(s.Clickable, {
                    className: r()(K.iconItem, K.alwaysShown),
                    onClick: () => {
                      (0, j.X)("VoiceChannel")
                        ? (0, w.openHDPotionModal)(e, "VoiceChannel")
                        : window.open(
                            O.Z.getArticleURL(Y.BhN.HD_STREAMING_POTION),
                            "_blank",
                          );
                    },
                    "aria-label": J.intl.string(J.t.gpF6QU),
                    onMouseEnter: n,
                    onMouseLeave: l,
                    onFocus: a,
                    onBlur: o,
                    children: (0, i.jsx)(s.PotionIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: K.actionIcon,
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
              connectDragPreview: v,
              canReorderChannel: C,
              canMoveMembers: x,
              showTutorial: I,
              hasActiveEvent: _,
              embeddedApps: Z,
              isSubscriptionGated: b,
              isFavoriteSuggestion: S,
              withGuildIcon: N,
            } = this.props,
            { shouldShowActivities: E, shouldShowGuildVerificationPopout: j } =
              this.state,
            T = this.getVoiceStatesCount(),
            A = (0, i.jsxs)("li", {
              className: r()(this.getModeClass(), {
                [K.disabled]: this.isDisabled(),
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
                    shouldShow: (E && !u && !d && !j) || j,
                    children: () =>
                      (0, i.jsx)(s.Tooltip, {
                        text: this.getTooltipText(),
                        children: (s) => {
                          let { onClick: u, onContextMenu: d, ...h } = s;
                          return (0, i.jsx)(y.Z, {
                            channel: e,
                            children: (0, i.jsxs)(F.Z, {
                              className: K.iconVisibility,
                              iconClassName: r()({ [K.iconLive]: _ }),
                              hasActiveEvent: _,
                              channel: e,
                              selected: !S && t,
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
                              connectDragPreview: v,
                              isFavoriteSuggestion: S,
                              "aria-label": (0, f.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: o,
                                userCount: T,
                                embeddedActivitiesCount: Z.length,
                                isSubscriptionGated: b,
                              }),
                              "aria-describedby": (0, g.Z)({
                                channel: e,
                                embeddedApps: Z,
                              }),
                              withGuildIcon: N,
                              ...h,
                              children: [
                                S && this.renderAcceptSuggestionButton(),
                                S && this.renderRemoveSuggestionButton(),
                                !S && this.renderOpenChatButton(),
                                !S && this.renderInviteButton(),
                                !S && this.renderEditButton(),
                                !S && this.renderChannelInfo(),
                                !S && this.renderHDSplashedIcon(),
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
            x && (A = m(A)),
            C && (A = h(p(A))),
            I &&
              (A = (0, i.jsx)(P.Z, {
                tutorialId: "voice-conversations",
                position: "right",
                offsetX: -20,
                children: A,
              })),
            A
          );
        }
        constructor(...e) {
          super(...e),
            X(this, "state", {
              shouldShowActivities: !1,
              shouldShowGuildVerificationPopout: !1,
              hovered: !1,
            }),
            X(this, "activitiesHideTimeout", new o.V7()),
            X(this, "closeGuildVerificationPopout", () => {
              this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            X(this, "handleVoiceConnect", () => {
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
            X(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                l = L.Z.getGuild(t.getGuildId());
              null != l &&
                (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("18320"),
                    n.e("83331"),
                    n.e("14280"),
                  ]).then(n.bind(n, 213202));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                });
            }),
            X(this, "handleMouseEnter", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !0, hovered: !0 });
            }),
            X(this, "handleMouseLeave", () => {
              this.activitiesHideTimeout.start(100, () =>
                this.setState({ shouldShowActivities: !1, hovered: !1 }),
              );
            }),
            X(this, "closePopout", () => {
              this.activitiesHideTimeout.stop(),
                this.setState({ shouldShowActivities: !1 });
            }),
            X(this, "handleClick", () => {
              let { channel: e } = this.props,
                t = e.getGuildId();
              null != t && (0, Z.n)(t) && (0, _.hk)(t),
                this.handleVoiceConnect();
            }),
            X(this, "handleVoiceStatusClick", (e) => {
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
            X(this, "renderPopout", () => {
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
                return (0, i.jsx)(W.Z, {
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
            X(this, "renderOpenChatButton", () => {
              let { channel: e, locked: t, forceShowButtons: n } = this.props;
              if (!t)
                return (0, i.jsx)(s.Tooltip, {
                  text: J.intl.string(J.t.ZXxLQk),
                  children: (t) => {
                    let {
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: o,
                      onBlur: u,
                    } = t;
                    return (0, i.jsx)(s.Clickable, {
                      className: r()(K.iconItem, n ? K.alwaysShown : null),
                      onClick: () => {
                        c.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                      },
                      "aria-label": J.intl.string(J.t.ZXxLQk),
                      onMouseEnter: l,
                      onMouseLeave: a,
                      onFocus: o,
                      onBlur: u,
                      children: (0, i.jsx)(s.ChatIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: K.actionIcon,
                      }),
                    });
                  },
                });
            }),
            X(this, "getTooltipText", () => {
              let { connected: e } = this.props;
              return this.isFull() && !e ? J.intl.string(J.t.rZfiNj) : null;
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
            selected: o,
            collapsed: s,
            voiceStates: c,
          } = e,
          u = (0, a.cj)([G.ZP], () => ({
            unread: G.ZP.hasUnread(n.id),
            mentionCount: G.ZP.getMentionCount(n.id),
          })),
          d = (0, a.e7)([k.ZP], () => k.ZP.resolveUnreadSetting(n)),
          h = (0, a.cj)([M.Z, R.Z, D.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
              i = R.Z.getCheck(n.guild_id);
            return {
              canManageChannel: D.Z.can(Y.Plq.MANAGE_CHANNELS, n),
              canReorderChannel:
                !0 !== l &&
                (t.id === Q._ ||
                  (null != e
                    ? D.Z.can(Y.Plq.MANAGE_CHANNELS, e)
                    : D.Z.can(Y.Plq.MANAGE_CHANNELS, t))),
              canMoveMembers: D.Z.can(Y.Plq.MOVE_MEMBERS, n),
              locked: !D.Z.can(Y.Plq.CONNECT, n),
              bypassLimit: D.Z.can(Y.Plq.MOVE_MEMBERS, n),
              unverifiedAccount: !i.canChat,
            };
          }),
          m = (0, a.e7)([B.Z], () => B.Z.hasVideo(n.id)),
          f = (0, p.ZP)(n),
          g = (0, v.ZP)(n),
          C = (0, S.qY)(n.id),
          { isSubscriptionGated: x, needSubscriptionToAccess: _ } = (0, b.Z)(
            n.id,
          ),
          Z = (0, I.Z)(),
          N = (0, a.e7)([k.ZP], () => k.ZP.isFavorite(t.id, n.id)),
          y = e.connected || (null == Z ? void 0 : Z.channelId) === n.id,
          { enableHangStatus: j, allowChannelTopic: T } = E.n.useExperiment(
            { guildId: n.guild_id, location: "VoiceChannel" },
            { autoTrackExposure: !1 },
          ),
          P = (0, H.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: x,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
          }),
          A = y && null == P;
        return (0, i.jsx)(ee, {
          channelName: g,
          embeddedApps: f,
          embeddedActivityType: Y.IIU.PLAYING,
          video: m,
          hasActiveEvent: null != C,
          isSubscriptionGated: x,
          needSubscriptionToAccess: _,
          ...u,
          ...h,
          ...e,
          connected: y,
          isFavoriteSuggestion: r && !N,
          forceShowButtons: A,
          channelInfo: P,
          enableHangStatus: j,
          allowChannelTopic: T,
          resolvedUnreadSetting: d,
        });
      }
    },
    830993: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
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
        v = n(355363),
        C = n(449932),
        x = n(561788),
        I = n(135724),
        _ = n(543432),
        Z = n(981631),
        b = n(388032),
        S = n(684393);
      function N(e) {
        var t, d;
        let {
          channel: h,
          guild: p,
          onAction: f,
          voiceStates: v,
          isChannelSelected: x,
          shouldShowSettingNudge: I,
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
        })(h, v);
        let _ = (0, s.ZP)(h),
          N = Array.from((0, s.uF)(_).values()),
          y =
            null !== (t = null == v ? void 0 : v.filter(g.lm)) && void 0 !== t
              ? t
              : [],
          j = (e) => (t) =>
            ([Z.IIU.PLAYING, Z.IIU.WATCHING].includes(t.type) &&
              (null != t.assets ||
                null != t.state ||
                null != t.details ||
                null != t.party) &&
              (null == t.session_id ||
                t.session_id === e.voiceState.sessionId)) ||
            t.type === Z.IIU.LISTENING,
          T = (0, r.e7)(
            [m.Z],
            () => {
              let e = {};
              return (
                y.forEach((t) => {
                  let n = m.Z.findActivity(t.user.id, j(t));
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
                      !(0, c.Z)(s.activity, Z.xjy.JOIN) && (s.activity = n),
                      (e[o] = s);
                  }
                }),
                Object.values(e)
              );
            },
            [y],
            r.pF,
          );
        return T.length + N.length === 0
          ? null
          : (0, i.jsxs)(a.Scroller, {
              className: S.container,
              children: [
                (0, i.jsx)(E, {
                  channel: h,
                  isChannelSelected: x,
                  voiceStatesCount:
                    null !== (d = null == v ? void 0 : v.length) && void 0 !== d
                      ? d
                      : 0,
                }),
                (0, i.jsx)("div", { className: S.headerDivider }),
                N.map((e, t) => {
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
                      onAction: f,
                    },
                    t,
                  );
                }),
                T.map((e, t) => {
                  let { members: n, activity: l } = e;
                  return (0, i.jsx)(
                    C.Z,
                    {
                      presenceActivity: l,
                      channel: h,
                      members: n,
                      onAction: f,
                    },
                    t,
                  );
                }),
                I &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", { className: S.headerDivider }),
                      (0, i.jsx)("div", {
                        className: S.settingNudgeText,
                        children: (0, i.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          tag: "span",
                          children: b.intl.format(b.t.ePyoY2, {
                            onClick: () => {
                              (0, a.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([
                                  n.e("23217"),
                                  n.e("84605"),
                                  n.e("8016"),
                                  n.e("17938"),
                                  n.e("18101"),
                                  n.e("76540"),
                                  n.e("68445"),
                                  n.e("37229"),
                                  n.e("22646"),
                                  n.e("3940"),
                                  n.e("25183"),
                                  n.e("48923"),
                                  n.e("30419"),
                                  n.e("8821"),
                                  n.e("18824"),
                                  n.e("84308"),
                                  n.e("82159"),
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
      function E(e) {
        let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
          a = (0, r.e7)([p.Z], () => !p.Z.can(Z.Plq.CONNECT, t)),
          o = (0, r.e7)([f.Z], () => f.Z.hasVideo(t.id)),
          s = (0, v.ZP)({ channel: t, locked: a, video: o, selected: n }),
          c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
        return null == (0, d.KS)(t, c)
          ? null
          : (0, i.jsxs)("div", {
              className: S.popoutHeaderContainer,
              children: [
                (0, i.jsx)(x.Z, { channel: t }),
                s
                  ? (0, i.jsx)(I.Z, { userCount: l, video: o, channel: t })
                  : (0, i.jsx)(_.Z, { userCount: l }),
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
        g = n(316249),
        v = n(665162);
      function C(e) {
        let {
            channel: t,
            connected: n,
            hovered: r,
            subtitle: C,
            onClick: x,
            enableHangStatus: I,
            allowChannelTopic: _,
          } = e,
          Z = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
          b = null != Z && Z.length > 0,
          S = (0, c.ZP)(t, !0),
          N = (!I || !!_) && S,
          E = null != C && C.length > 0;
        l.useEffect(() => {
          b &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
              guild_id: t.guild_id,
              channel_id: t.id,
            });
        }, [t.id, b, t.guild_id]);
        let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
        if (null == t.guild_id) return null;
        let j = a()(g.statusDiv, n && N ? g.hoverable : null);
        if (b)
          return (0, i.jsx)(s.Clickable, {
            className: j,
            onClick: N ? x : void 0,
            children: (0, i.jsx)(s.Text, {
              variant: "text-xs/medium",
              className: a()(g.statusText, v.markup),
              children: (0, i.jsx)(d.Z, {
                children: h.Z.parseVoiceChannelStatus(Z, !0, {
                  channelId: t.id,
                }),
              }),
            }),
          });
        if (n && N && (!E || r))
          return (0, i.jsxs)(s.Clickable, {
            className: j,
            onClick: x,
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
        if (E) return (0, i.jsx)(d.Z, { children: C });
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
        o = n(738523);
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
        r = n(986038);
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
        v = n(496472);
      (i = l || (l = {}))[(i.VOICE = 0)] = "VOICE";
      t.Z = (e) => {
        let { type: t, guildId: i, closePopout: l } = e,
          C = (0, u.Dt)(),
          {
            notClaimed: x,
            notEmailVerified: I,
            notPhoneVerified: _,
            newAccount: Z,
            newMember: b,
          } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
          S = 0 === t ? g.intl.string(g.t["6zY8BA"]) : null,
          N = null,
          E = null;
        return (0 === t &&
          (x
            ? ((N = g.intl.string(g.t.IRxUlJ)), (E = g.intl.string(g.t.fiNVio)))
            : _
              ? ((N = g.intl.string(g.t.vW8iUF)),
                (E = g.intl.string(g.t["50gfOj"])))
              : I
                ? ((N = g.intl.string(g.t.vdSOp6)),
                  (E = g.intl.string(g.t.lm1UKi)))
                : b
                  ? ((N = g.intl.formatToPlainString(g.t.v1ktYW, {
                      min: m.YeM.MEMBER_AGE,
                    })),
                    (E = g.intl.string(g.t.BddRzc)))
                  : Z &&
                    ((N = g.intl.formatToPlainString(g.t["sncw4+"], {
                      min: m.YeM.ACCOUNT_AGE,
                    })),
                    (E = g.intl.string(g.t.BddRzc)))),
        null == S || null == N)
          ? null
          : (0, r.jsxs)(o.Dialog, {
              className: v.container,
              "aria-labelledby": C,
              children: [
                (0, r.jsx)("img", {
                  alt: "",
                  className: v.image,
                  src: n(64395),
                }),
                (0, r.jsxs)("div", {
                  className: v.content,
                  children: [
                    (0, r.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      id: C,
                      children: S,
                    }),
                    (0, r.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      children: N,
                    }),
                    (0, r.jsxs)("div", {
                      className: v.buttonContainer,
                      children: [
                        null != E
                          ? (0, r.jsx)(o.Button, {
                              onClick: () => {
                                x
                                  ? c.j()
                                  : _
                                    ? (0, o.openModalLazy)(
                                        async () => {
                                          let { default: e } =
                                            await Promise.all([
                                              n.e("76540"),
                                              n.e("93399"),
                                            ]).then(n.bind(n, 607018));
                                          return (t) =>
                                            (0, r.jsx)(e, {
                                              reason: d.L.GUILD_PHONE_REQUIRED,
                                              ...t,
                                            });
                                        },
                                        { modalKey: f.M },
                                      )
                                    : I &&
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
                              className: v.primaryButton,
                              children: E,
                            })
                          : null,
                        x || _ || I
                          ? (0, r.jsx)(o.Button, {
                              onClick: l,
                              look: o.Button.Looks.BLANK,
                              className: v.cancel,
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
          return E;
        },
      }),
        n(47120);
      var i = n(106351),
        l = n(442837),
        r = n(595519),
        a = n(317381),
        o = n(16609),
        s = n(470883),
        c = n(750881),
        u = n(554747),
        d = n(146085),
        h = n(427679),
        p = n(131704),
        m = n(199902),
        f = n(314897),
        g = n(592125),
        v = n(430824),
        C = n(496675),
        x = n(699516),
        I = n(944486),
        _ = n(9156),
        Z = n(979651),
        b = n(709054),
        S = n(981631);
      function N(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Z;
        return (
          null != e &&
          e.type !== i.d.GUILD_STAGE_VOICE &&
          t !== e.id &&
          n.canBasicChannel(S.S7T.VIEW_CHANNEL, e)
        );
      }
      function E(e) {
        var t;
        let n = (0, l.e7)([_.ZP], () => _.ZP.isMuted(e)),
          i = (0, u.k5)(e),
          { enabled: S } = (0, c.bA)("use-guild-media-state"),
          E = (0, l.Wu)([a.ZP, x.Z], () => {
            let t = a.ZP.getEmbeddedActivitiesForGuild(e);
            return S
              ? t.filter(
                  (e) =>
                    !(0, s.BA)([...e.userIds], x.Z.getBlockedOrIgnoredIDs()),
                )
              : t;
          }),
          y = (0, o.p)(
            null === (t = E[0]) || void 0 === t ? void 0 : t.location,
          ),
          j = (0, r.NX)(y),
          {
            guildHasVoice: T,
            guildHasVideo: P,
            selectedVoiceChannelHasVideo: A,
          } = (0, l.cj)(
            [I.Z, Z.Z, v.Z, C.Z, g.Z],
            () => {
              var t;
              let i = I.Z.getVoiceChannelId(),
                l =
                  null === (t = v.Z.getGuild(e)) || void 0 === t
                    ? void 0
                    : t.afkChannelId,
                r = Z.Z.getUsersWithVideo(e),
                a = S
                  ? (0, s.DX)(Z.Z.getVoiceStates(e))
                  : Z.Z.getVoiceStates(e),
                o = (() => {
                  if (n) return !1;
                  for (let e in a)
                    if (
                      N(
                        g.Z.getBasicChannel(a[e].channelId),
                        null != l ? l : void 0,
                        C.Z,
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
                      N(
                        g.Z.getBasicChannel(
                          null === (e = a[t]) || void 0 === e
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
                selectedVoiceChannelHasVideo: null != i && Z.Z.hasVideo(i),
              };
            },
            [S, e, n],
          ),
          w = f.default.getId();
        return (0, l.cj)(
          [I.Z, g.Z, a.ZP, h.Z, m.Z, C.Z],
          () => {
            var t, l, r;
            let c = I.Z.getVoiceChannelId(),
              u =
                (null === (t = g.Z.getChannel(c)) || void 0 === t
                  ? void 0
                  : t.guild_id) === e,
              f = !1,
              v = !1,
              x = !1,
              _ = !1,
              Z = !1,
              N = !1;
            if (!u && n)
              return {
                audio: f,
                video: _,
                screenshare: Z,
                liveStage: x,
                activeEvent: v,
                activity: N,
                isCurrentUserConnected: !1,
              };
            let y = b.default
                .keys(h.Z.getStageInstancesByGuild(e))
                .some((e) => {
                  let t = g.Z.getChannel(e);
                  return null != t && C.Z.can(d.gl, t);
                }),
              M =
                u &&
                null !==
                  (r =
                    null === (l = g.Z.getChannel(c)) || void 0 === l
                      ? void 0
                      : l.isGuildStageVoice()) &&
                void 0 !== r &&
                r,
              L = !!u && null != m.Z.getActiveStreamForUser(w, e),
              R = (
                S
                  ? (0, s.aK)(m.Z.getAllApplicationStreams())
                  : m.Z.getAllApplicationStreams()
              ).some((t) => t.guildId === e),
              D = u && A,
              G = (() => {
                if (j) return E.length > 0;
                for (let e of E) {
                  let t = g.Z.getChannel((0, o.p)(e.location));
                  if (null != t && (0, p.vd)(t.type)) return !0;
                }
                return !1;
              })(),
              k = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
              u
                ? ((f = !0),
                  (v = (null == i ? void 0 : i.channel_id) === c),
                  (x = M),
                  (_ = D),
                  (Z = L),
                  (N = k))
                : ((f = T),
                  (v = null != i),
                  (x = y),
                  (_ = P),
                  (Z = R),
                  (N = G)),
              {
                audio: f,
                video: _,
                screenshare: Z,
                liveStage: x,
                activeEvent: v,
                activity: N,
                isCurrentUserConnected: u || M,
              }
            );
          },
          [e, n, S, A, w, j, E, i, T, P],
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
        a = n(476183),
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
        v = n(19780),
        C = n(306680),
        x = n(944486),
        I = n(594174),
        _ = n(451478),
        Z = n(276952),
        b = n(682662),
        S = n(662146),
        N = n(674552),
        E = n(981631),
        y = n(646819);
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
      let T = { friction: 28, tension: 600 };
      function P(e) {
        switch (e) {
          case "height":
          case "opacity":
            return { duration: 150, ...T };
          case "scale":
            return { ...T };
          default:
            throw Error(
              "DirectMessage: getSpringConfigs() - Invalid spring ".concat(
                String(e),
              ),
            );
        }
      }
      class A extends (i = r.PureComponent) {
        componentWillEnter(e) {
          let { controller: t } = this.state;
          e(),
            t
              .update({
                immediate: !_.Z.isFocused(),
                height: 1,
                opacity: 1,
                scale: 1,
                config: P,
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
            config: P,
          })
            .start()
            .then(e);
        }
        componentWillLeave(e) {
          let { controller: t } = this.state;
          this.setState({ animating: !0 }, () =>
            t
              .update({
                immediate: !_.Z.isFocused(),
                height: 0,
                opacity: 0,
                scale: 0,
                config: P,
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
              e.type === E.d4z.DM
                ? I.default.getUser(e.getRecipientId())
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
            v = e.isMultiUserDM() && null == e.icon && p;
          return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(b.H, {
              children: [
                (0, l.jsx)(Z.Z, {
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
                    lowerBadge: i > 0 ? (0, N.Ne)(i) : null,
                    upperBadge: (0, N.Or)({
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
                          to: E.Z5c.CHANNEL(E.ME, e.id),
                          onMouseEnter: () => this.setState({ hovered: !0 }),
                          onMouseLeave: () => this.setState({ hovered: !1 }),
                          selected: n || m,
                          ariaLabel: null != t ? t : "",
                          onContextMenu: this.handleContextMenu,
                          icon: v ? void 0 : this.getChannelIcon(),
                          backgroundStyle: v ? "on-hover" : "always",
                          children: v
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
            j(this, "state", {
              hovered: !1,
              animating: !0,
              controller: new a.Controller({
                scale: 0,
                height: 0,
                opacity: 0,
                config: P,
              }),
            }),
            j(this, "handleContextMenu", (e) => {
              let { channel: t } = this.props,
                i =
                  t.type === E.d4z.DM
                    ? I.default.getUser(t.getRecipientId())
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
      j(A, "defaultProps", {
        badge: 0,
        audio: !1,
        video: !1,
        isCurrentUserInThisDMCall: !1,
      }),
        (t.Z = r.forwardRef(function (e, t) {
          let n = e.channel.id,
            i = (0, p.ZP)(e.channel),
            r = (0, s.e7)([v.Z], () => v.Z.getChannelId(), []),
            a = (0, s.e7)(
              [d.Z],
              () => (null != r ? d.Z.getMode(r) : E.WtW.VOICE),
              [r],
            ),
            o = (0, s.e7)(
              [g.Z],
              () => g.Z.getAllApplicationStreamsForChannel(n).length > 0,
            ),
            c = (0, s.e7)([x.Z], () => x.Z.getChannelId(), []),
            u = (0, s.e7)([C.ZP], () => C.ZP.getMentionCount(n), [n]),
            { isFacepileEnabled: h } = m.Z.useExperiment(
              { location: "unread_direct_message" },
              { autoTrackExposure: !1 },
            ),
            f = r === n,
            I = !1,
            _ = !1;
          return (
            f && ((I = a === E.WtW.VOICE), (_ = a === E.WtW.VIDEO)),
            (0, l.jsx)(A, {
              ...e,
              ref: t,
              channelName: i,
              unread: u > 0,
              selected: c === n,
              badge: u,
              audio: I,
              video: _,
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
        o = n(476183),
        s = n(866442),
        c = n(442837),
        u = n(477690),
        d = n(481060),
        h = n(377171),
        p = n(540059),
        m = n(565138),
        f = n(430824),
        g = n(624138),
        v = n(674552),
        C = n(981631),
        x = n(388032),
        I = n(10448);
      let _ = (0, g.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        Z = (0, g.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
        b = [
          "13px 4px 4px 4px",
          "4px 13px 4px 4px",
          "4px 4px 4px 13px",
          "4px 4px 13px 4px",
        ];
      function S(e) {
        let { guildId: t, animate: n, index: l } = e,
          r = (0, c.e7)([f.Z], () => f.Z.getGuild(t), [t]),
          a = (0, p.Q3)("GuildIcon");
        return null == r
          ? (0, i.jsx)("div", {
              className: I.guildIconUnavailable,
              children: "!",
            })
          : (0, i.jsx)(m.Z, {
              guild: r,
              animate: n,
              size: a ? m.Z.Sizes.MINI : m.Z.Sizes.SMOL,
              className: I.guildIcon,
              tabIndex: -1,
              style: a ? { borderRadius: b[l] } : void 0,
            });
      }
      function N(e) {
        let t,
          n,
          { folderNode: r, hovered: a, expanded: c } = e,
          u = (0, p.Q3)("FolderIconContent"),
          { color: h, children: m } = r,
          f = null != h ? h : C.Wyy,
          g = f === C.Wyy,
          v = m.map((e) => e.id),
          [x, b] = l.useState(!1),
          [N, E] = l.useState(c),
          y = u ? (c ? 22 : -11) : c ? 0 : -Z,
          j = (0, d.useSpring)(
            {
              transform: "translate3d(0, ".concat(y, "px, 0)"),
              config: { duration: _ },
              onStart() {
                b(!0), E(c);
              },
              onRest() {
                b(!1), E(c);
              },
            },
            "animate-always",
          ),
          T = x ? j : void 0;
        (x || N) &&
          (t = (0, i.jsx)(o.animated.div, {
            style: T,
            className: I.expandedFolderIconWrapper,
            children: (0, i.jsx)(d.FolderIcon, {
              size: u ? "sm" : "md",
              color: "currentColor",
              style: { color: (0, s.Rf)(f) },
            }),
          })),
          (x || !N) &&
            (n = (0, i.jsx)(o.animated.div, {
              style: T,
              className: I.closedFolderIconWrapper,
              children: v
                .slice(0, 4)
                .map((e, t) =>
                  (0, i.jsx)(S, { index: t, guildId: e, animate: a }, e),
                ),
            }));
        let P = {
          backgroundColor:
            u && g ? d.tokens.colors.BACKGROUND_PRIMARY.css : (0, s.br)(f, 0.4),
        };
        return (0, i.jsxs)("div", {
          "aria-hidden": !0,
          style: c ? void 0 : P,
          className: I.folderIconWrapper,
          children: [t, n],
        });
      }
      function E(e) {
        let {
            folderNode: t,
            forceCircular: n,
            expanded: r,
            sorting: o,
            mediaState: s,
            mentionCount: c = 0,
            isMentionLowImportance: u,
            tooltipName: m,
            folderGroupId: f,
            folderIconContentClassName: g,
            folderIconContent: C,
            onClick: _,
            onContextMenu: Z,
            onHoverChange: b,
            onKeyDown: S,
            treeItemProps: { onFocus: E, ...y },
          } = e,
          [j, T] = l.useState(!1),
          P = l.useCallback(() => {
            o || T(!0), null == b || b(!0);
          }, [o, b]),
          A = l.useCallback(() => {
            o || T(!1), null == b || b(!1);
          }, [o, b]),
          w = (0, p.Q3)("FolderHeader"),
          M = r || null == s ? null : (0, v.Or)(s),
          L =
            !r && c > 0
              ? (0, v.Ne)(c, u ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER)
              : null;
        return (0, i.jsx)(d.BlobMask, {
          isFolder: !0,
          style: w ? { width: 52, height: 52 } : void 0,
          selected: !!w || !n,
          upperBadge: M,
          lowerBadge: L,
          lowerBadgeSize: { width: (0, d.getBadgeWidthForValue)(c) },
          children: (0, i.jsx)(d.Clickable, {
            className: a()(I.folder, { [I.hover]: j }),
            onClick: _,
            onContextMenu: Z,
            onMouseEnter: P,
            onMouseLeave: A,
            onKeyDown: S,
            onFocus: E,
            "aria-label": x.intl.formatToPlainString(x.t["90/DwM"], {
              folderName: m,
              mentions: c,
            }),
            "aria-expanded": r,
            "aria-owns": f,
            focusProps: { enabled: !1 },
            ...y,
            role: "treeitem",
            children:
              null != C
                ? (0, i.jsx)("div", {
                    className: a()(I.expandedFolderIconWrapper, g),
                    children: C,
                  })
                : (0, i.jsx)(N, { folderNode: t, hovered: j, expanded: r }),
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
        a = n(476183),
        o = n(692547),
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
        let g = (0, s.useToken)(o.Z.unsafe_rawColors.BRAND_500).hex(),
          v = (0, s.useToken)(o.Z.unsafe_rawColors.PRIMARY_630).hex();
        l &&
          null == t.icon &&
          ((m.backgroundColor = g), (f.backgroundColor = v));
        let C = (0, s.useTransition)(n, {
          from: m,
          enter: f,
          leave: m,
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
          return Z;
        },
        Zu: function () {
          return _;
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
        g = n(414080);
      function v(e) {
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
      function x(e) {
        let { name: t, targetNode: n, combine: r, below: o } = e,
          s = l.useMemo(() => C([h.eD.GUILD, h.eD.FOLDER], n, o, r), [n, o, r]),
          [{ canDrop: u, isOver: d }, p] = (0, c.L)(s),
          m = v([
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
      function I(e) {
        let { name: t, targetNode: n, onDragOverChanged: r } = e,
          [{ canDrop: o, isOver: s }, u] = (0, c.L)(() =>
            C([h.eD.GUILD], n, !0, !0),
          );
        l.useEffect(() => {
          null == r || r(s);
        }, [r, s]);
        let d = v([
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
      function _(e) {
        let { name: t, targetNode: n } = e,
          [{ canDrop: l, isOver: r }, o] = (0, c.L)(() =>
            C([h.eD.GUILD], n, !0, !0),
          ),
          s = v([[r, g.wrapperOver]]),
          u = v([
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
      function Z(e) {
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
            (0, i.jsx)(x, { name: t, targetNode: n, below: r }),
            o
              ? (0, i.jsx)(I, { name: t, targetNode: n, onDragOverChanged: a })
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
        d = n(513431),
        h = n(442837),
        p = n(902704),
        m = n(846519),
        f = n(481060),
        g = n(925549),
        v = n(493773),
        C = n(209613),
        x = n(100527),
        I = n(906732),
        _ = n(358221),
        Z = n(540059),
        b = n(706590),
        S = n(940777),
        N = n(41776),
        E = n(905423),
        y = n(802718),
        j = n(796974),
        T = n(271383),
        P = n(430824),
        A = n(771845),
        w = n(358085),
        M = n(709054),
        L = n(727258),
        R = n(605951),
        D = n(474109),
        G = n(741616),
        k = n(187835),
        B = n(118122),
        U = n(193154),
        O = n(602147),
        V = n(416637),
        H = n(222059),
        F = n(751277),
        W = n(65721),
        z = n(843343),
        q = n(654142),
        Y = n(695301),
        Q = n(836697),
        J = n(921230),
        K = n(981631),
        X = n(388032),
        $ = n(192069);
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
      let et = (0, w.isWindows)() ? 4 : (0, w.isMac)() ? 0 : 12;
      class en {
        setGuildsTree(e) {
          this.guildsTree = e;
        }
        constructor(e, t, n, i, r) {
          ee(this, "guildsTree", void 0),
            ee(this, "setScrolling", void 0),
            ee(this, "setIsScrolledToBottom", void 0),
            ee(this, "onScroll", void 0),
            ee(this, "sizes", void 0),
            ee(this, "scrollerRef", void 0),
            ee(this, "nodeRefs", void 0),
            ee(this, "timeout", void 0),
            ee(this, "observer", void 0),
            ee(this, "setResizeObserver", void 0),
            ee(this, "clearResizeObserver", void 0),
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
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (this.scrollerRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new m.V7()),
            (this.setResizeObserver = () => {
              var e;
              let t =
                null === (e = this.scrollerRef.current) || void 0 === e
                  ? void 0
                  : e.getScrollerNode();
              null != t &&
                ((this.observer = new ResizeObserver(this.handleScroll)),
                this.observer.observe(t));
            }),
            (this.clearResizeObserver = () => {
              var e;
              null === (e = this.observer) || void 0 === e || e.disconnect(),
                (this.observer = void 0);
            }),
            (this.scrollToGuild = (e, t) => {
              let n = this.scrollerRef.current;
              if (
                null == n ||
                (null == e &&
                  window.location.pathname.startsWith(K.Z5c.GUILD_DISCOVERY)) ||
                e === K.x8Z.SERVER_DISCOVERY_BADGE ||
                e === K.x8Z.E3_SERVER_DISCOVERY_BADGE
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
                a = this.scrollerRef.current;
              if (null == a) return !1;
              let o = n.findIndex((t) =>
                "string" == typeof t || null == t ? t === e : t.includes(e),
              );
              if (o < 0) return !1;
              let s = i * o + r;
              !t && (s += l);
              let c = a.getScrollerState();
              return (
                (!t && !!(s >= c.scrollTop)) ||
                (!!t && !!(s + i <= c.scrollTop + c.offsetHeight)) ||
                !1
              );
            }),
            (this.handleScroll = () => {
              this.setScrolling(!0),
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
              null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
            }, 100)),
            (this.setNodeRef = (e, t) => {
              this.nodeRefs[e] = t;
            });
        }
      }
      function ei(e) {
        let {
            disableAppDownload: t = w.isPlatformEmbedded,
            isOverlay: n = !1,
            className: r,
            themeOverride: o,
          } = e,
          s = (0, Z.Q3)("GuildsBar"),
          { density: d } = (0, f.useThemeContext)(),
          [p] = (0, h.Wu)([A.ZP], () => {
            let e = A.ZP.getGuildsTree();
            return [e, e.version];
          }),
          g = (0, h.e7)([N.Z], () => N.Z.lurkingGuildIds()),
          C = l.useMemo(() => (n ? [] : g), [g, n]),
          ee = (0, h.Wu)([P.Z, T.ZP], () =>
            M.default
              .keys(P.Z.getGuilds())
              .filter((e) => T.ZP.isCurrentUserGuest(e)),
          ),
          ei = C.concat(ee),
          el = (0, h.e7)([_.Z], () => _.Z.isFullscreenInContext()),
          er = (0, h.e7)([P.Z], () => P.Z.getGeoRestrictedGuilds()),
          [ea, eo] = l.useState(!1),
          es = l.useCallback(() => eo(!0), []),
          ec = l.useCallback(() => eo(!1), []),
          eu = l.useRef(!1),
          [ed] = l.useState(() => new m.V7()),
          eh = l.useRef(null),
          ep = l.useRef(null),
          { ref: em, ...ef } = (0, u.OP)(),
          eg = (0, f.useFocusJumpSection)(),
          [ev, eC] = l.useState(!1),
          [ex, eI] = l.useState(!1),
          e_ = l.useMemo(
            () =>
              new en(
                p,
                eC,
                eI,
                () => {
                  var e, t;
                  null === (e = eh.current) ||
                    void 0 === e ||
                    e.calculateState(),
                    null === (t = ep.current) ||
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
                    heightBeforeIcons: et + r,
                  };
                })(s, d),
              ),
            [d, p, s],
          );
        l.useEffect(
          () => (
            e_.setResizeObserver(),
            () => {
              e_.clearResizeObserver();
            }
          ),
          [e_],
        );
        let { analyticsLocations: eZ } = (0, I.ZP)(x.Z.GUILDS_LIST),
          { pathname: eb } = (0, c.TH)(),
          eS =
            eb.startsWith(K.Z5c.GUILD_DISCOVERY) ||
            eb.startsWith(K.Z5c.GLOBAL_DISCOVERY),
          eN = eb.startsWith(K.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
        (0, v.N)(() => {
          if (!eu.current) {
            if (0 !== p.size) {
              if (eS) e_.scrollToGuild(null, !1);
              else {
                let { scrollTop: e } = j.Z.getGuildListDimensions();
                e_.scrollTo({ to: e, animate: !1 });
              }
              return (eu.current = !0), () => ed.stop();
            }
          }
        }),
          l.useEffect(() => {
            if ((e_.setGuildsTree(p), eu.current || 0 === p.size)) return;
            let e = E.Z.getState().guildId;
            e_.scrollToGuild(e, !1);
            let t = null;
            return E.Z.subscribe((e) => {
              let { guildId: n } = e;
              n !== t && ((t = n), e_.scrollToGuild(t, !1));
            });
          }, [p, e_]);
        let eE = l.useCallback(() => {
          e_.scrollTo({ to: 0, animate: !1 });
        }, [e_]);
        function ey(e) {
          switch (e.type) {
            case L.eD.FOLDER:
              return (0, i.jsx)(
                q.Z,
                {
                  folderNode: e,
                  setNodeRef: e_.setNodeRef,
                  draggable: !0,
                  sorting: ea,
                  onDragStart: es,
                  onDragEnd: ec,
                  renderChildNode: ey,
                },
                e.id,
              );
            case L.eD.GUILD:
              return (0, i.jsx)(
                Y.Z,
                {
                  guildNode: e,
                  setRef: e_.setNodeRef,
                  draggable: !0,
                  sorting: ea,
                  onDragStart: es,
                  onDragEnd: ec,
                },
                e.id,
              );
            default:
              return null;
          }
        }
        (0, R.Z)(e_.scrollToGuild);
        let ej = p.getRoots(),
          eT = (0, b.Z)(),
          eP = (0, y.U)(),
          eA = er.map((e) =>
            (0, i.jsx)(U.Z, { id: e.id, name: e.name, icon: e.icon }, e.id),
          );
        return (0, i.jsx)(I.Gt, {
          value: eZ,
          children: (0, i.jsx)(f.ThemeProvider, {
            theme: o,
            children: (e) =>
              (0, i.jsx)("nav", {
                className: a()($.wrapper, r, e, { [$.hidden]: el }),
                "aria-label": X.intl.string(X.t.PjnF2t),
                children: (0, i.jsxs)("ul", {
                  ref: em,
                  ...ef,
                  ...eg,
                  role: "tree",
                  className: $.tree,
                  children: [
                    (0, i.jsx)(D.Z, {
                      ref: eh,
                      isVisible: e_.isItemVisible,
                      onJumpTo: e_.handleJumpToGuild,
                      className: $.unreadMentionsIndicatorTop,
                      barClassName: $.unreadMentionsBar,
                    }),
                    (0, i.jsxs)("div", {
                      className: $.itemsContainer,
                      children: [
                        (0, i.jsxs)(f.AdvancedScrollerNone, {
                          className: a()({
                            [$.scroller]: !0,
                            [$.scrolling]: ev,
                          }),
                          experimental_useStack: s,
                          gap: "xs",
                          ref: e_.scrollerRef,
                          onScroll: e_.handleScroll,
                          children: [
                            (0, i.jsx)(H.u, {}),
                            eT ? (0, i.jsx)(S.Z, {}) : null,
                            (0, i.jsx)(F.Z, { isOnHubVerificationRoute: eN }),
                            (0, i.jsx)(G.Z, {}),
                            eP,
                            ei.map((e) => (0, i.jsx)(J.Z, { guildId: e }, e)),
                            (0, i.jsx)(Q.Z, { onActivate: eE }),
                            (0, i.jsx)(W.Z, {}),
                            s
                              ? (0, i.jsx)(f.Stack, {
                                  gap: "xs",
                                  "aria-label": X.intl.string(X.t["7hB4kp"]),
                                  children: ej.map(ey),
                                })
                              : (0, i.jsx)("div", {
                                  "aria-label": X.intl.string(X.t["7hB4kp"]),
                                  children: ej.map(ey),
                                }),
                            eA,
                            n
                              ? null
                              : (0, i.jsx)(B.Z, {
                                  disableTooltip: C.length > 0,
                                  lastTargetNode: ej[ej.length - 1],
                                }),
                            (0, i.jsx)(z.Z, {}),
                            !n && s
                              ? (0, i.jsx)(O.Z, {
                                  selected: eS,
                                  className: $.discoveryIcon,
                                })
                              : null,
                            t ? null : (0, i.jsx)(k.Z, {}),
                          ],
                        }),
                        n || s
                          ? null
                          : (0, i.jsx)(V.g, {
                              hideGradient: ex,
                              children: (0, i.jsx)(O.Z, {
                                selected: eS,
                                className: $.discoveryIcon,
                              }),
                            }),
                      ],
                    }),
                    (0, i.jsx)(D.Z, {
                      reverse: !0,
                      ref: ep,
                      isVisible: e_.isItemVisible,
                      onJumpTo: e_.handleJumpToGuild,
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
          let t = (0, C.Z)("guildsnav");
          return (0, i.jsx)(u.bG, {
            navigator: t,
            children: (0, i.jsx)(ei, { ...e }),
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
        o = n(678634);
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
        a = n(18998),
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
        v = "add-server-item";
      function C() {
        return !1;
      }
      function x(e) {
        var t;
        let n = s.default.getMutableGuildStates();
        return (
          (e === m.x8Z.SERVER_DISCOVERY_BADGE &&
            !d.Z.hasViewed(m.x8Z.SERVER_DISCOVERY_BADGE)) ||
          (e !== g &&
            e !== v &&
            (null === (t = n[null != e ? e : "null"]) || void 0 === t
              ? void 0
              : t.highImportanceMentionCount) > 0)
        );
      }
      let I = (0, p.oH)((e, t, n) => [
        "null",
        ...t,
        ...e,
        v,
        m.x8Z.E3_SERVER_DISCOVERY_BADGE,
        g,
      ]);
      t.Z = l.forwardRef(function (e, t) {
        let n = (0, r.Wu)([u.ZP, c.Z, s.default], () =>
            I(
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
          isUnread: C,
          textUnread: f.intl.string(f.t.y2b7CA),
          textMention: f.intl.string(f.t.y2b7CA),
          isMentioned: x,
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
            tooltip: v,
            upperBadge: C,
            lowerBadge: x,
            lowerBadgeSize: I,
            showPill: _ = !0,
            className: Z,
            "aria-label": b,
            children: S,
            onMouseEnter: N,
            onMouseLeave: E,
            onMouseDown: y,
          } = e,
          j = (0, c.Q3)("ButtonListItem"),
          T = (0, o.Ie)(n),
          [P, A] = l.useState(!1),
          w = "string" == typeof v && null == b ? v : b;
        return (0, i.jsxs)(d.H, {
          children: [
            _
              ? (0, i.jsx)("div", {
                  className: p.pill,
                  children: (0, i.jsx)(u.Z, { hovered: P, selected: g }),
                })
              : null,
            (0, i.jsx)(h.Z, {
              text: v,
              selected: g,
              children: (0, i.jsx)(s.BlobMask, {
                selected: !!j || g || P,
                upperBadge: C,
                lowerBadge: x,
                lowerBadgeSize: I,
                children: (0, i.jsx)(s.Clickable, {
                  innerRef: t,
                  onMouseEnter: () => {
                    null == N || N(), A(!0);
                  },
                  onMouseLeave: () => {
                    null == E || E(), A(!1);
                  },
                  onMouseDown: y,
                  className: a()(p.circleIconButton, Z, {
                    [p.selected]: g || P,
                  }),
                  onClick: r,
                  "aria-label": w,
                  onContextMenu: m,
                  focusProps: { enabled: !1 },
                  ...T,
                  children:
                    null != f &&
                    (0, i.jsx)(f, {
                      className: p.circleIcon,
                      color: "currentColor",
                    }),
                }),
              }),
            }),
            S,
          ],
        });
      });
      t.Z = m;
    },
    118122: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(239091),
        s = n(906732),
        c = n(560067),
        u = n(540059),
        d = n(451603),
        h = n(885714),
        p = n(155409),
        m = n(430824),
        f = n(594174),
        g = n(40153),
        v = n(603592),
        C = n(981631),
        x = n(675999),
        I = n(388032),
        _ = n(940722);
      let Z = {
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
      function S(e) {
        let { disableTooltip: t, lastTargetNode: n } = e,
          o = (0, r.e7)([m.Z], () => m.Z.getGuilds()),
          S = l.useMemo(() => Object.values(o), [o]),
          N = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
          E = l.useMemo(() => S.some((e) => e.isOwner(N)), [S, N]),
          y = (0, a.useModalsStore)((e) =>
            (0, a.hasModalOpenSelector)(e, x.PU),
          ),
          { analyticsLocations: j } = (0, s.ZP)(),
          T = (0, u.Q3)("CreateJoinGuildButton"),
          P = (0, i.jsx)(v.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
              (0, d.yU)()
                ? (0, h.Z)({
                    analyticsSource: { page: C.Sbl.CREATE_JOIN_GUILD_MODAL },
                    analyticsLocation: {
                      page: C.Sbl.CREATE_JOIN_GUILD_MODAL,
                      section: C.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: j,
                  })
                : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: y,
            onContextMenu: b,
            tooltip: I.intl.string(I.t.l5WIbW),
            icon: T ? a.CirclePlusIcon : a.PlusMediumIcon,
          });
        return t
          ? P
          : (0, i.jsx)("div", {
              className: _.tutorialContainer,
              children: (0, i.jsxs)(p.Z, {
                tutorialId: E ? "create-more-servers" : "create-first-server",
                inlineSpecs: Z,
                position: "right",
                children: [
                  P,
                  null != n &&
                    (0, i.jsx)(g.ZP, {
                      name: I.intl.string(I.t["45xjMz"]),
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
          return j;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(999153),
        s = n(476183),
        c = n(91192),
        u = n(477690),
        d = n(481060),
        h = n(153867),
        p = n(540059),
        m = n(771845),
        f = n(624138),
        g = n(727258),
        v = n(276952),
        C = n(199540),
        x = n(40153),
        I = n(252686),
        _ = n(682662),
        Z = n(662146),
        b = n(388032),
        S = n(10448),
        N = n(284923);
      let E = (0, f.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
        y = (0, s.animated)(d.Stack);
      function j(e) {
        let {
            folderNode: t,
            setNodeRef: n,
            selected: r,
            expanded: s,
            mediaState: u,
            mentionCount: f = 0,
            isMentionLowImportance: j,
            unread: T = !1,
            defaultFolderName: P,
            useCircleMask: A = !1,
            draggable: w = !1,
            sorting: M = !1,
            onDragStart: L,
            onDragEnd: R,
            onExpandCollapse: D,
            onContextMenu: G,
            renderChildNode: k,
            folderIconContent: B,
            folderIconContentClassName: U,
          } = e,
          { id: O, name: V, children: H } = t,
          F = (0, p.Q3)("FolderItem"),
          [W, z] = l.useState(!1),
          [q, Y] = l.useState(!1),
          Q = W || q;
        l.useEffect(() => {
          M && z(!1);
        }, [M]);
        let [{ dragging: J }, K] = (0, o.c)({
            type: g.eD.FOLDER,
            item: () => (null == L || L(), { type: g.eD.FOLDER, nodeId: t.id }),
            end() {
              null == R || R(), (0, h.V1)(m.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          X = l.useCallback((e) => {
            Y(e);
          }, []),
          $ = l.useCallback(
            (e) => {
              (("ArrowRight" === e.key && !s) ||
                ("ArrowLeft" === e.key && s)) &&
                D();
            },
            [D, s],
          ),
          ee =
            null != V && "" !== V
              ? V
              : null != P && "" !== P
                ? P
                : b.intl.string(b.t.xV9hVl),
          et = (0, c.Ie)("".concat(O)),
          en = "folder-items-".concat(O),
          ei = (function (e) {
            let t = (0, p.Q3)("FolderItem.useHeight"),
              { density: n } = (0, d.useThemeContext)();
            if (!t) return 56 * e;
            let i = e * (44 + ("cozy" === n ? 8 : 4));
            return "cozy" === n ? i - 4 : i;
          })(H.length),
          el = (0, d.useTransition)(!J && s, {
            from: { height: 0 },
            enter: { height: 1 },
            leave: { height: 0 },
            config: { duration: E },
          }),
          er = l.useCallback((e) => (null == n ? void 0 : n(O, e)), [n, O]),
          ea = (0, i.jsxs)(_.H, {
            children: [
              (0, i.jsx)(v.Z, {
                disabled: J || s,
                hovered: W,
                selected: r,
                unread: T,
                className: N.pill,
              }),
              (0, i.jsx)(Z.Z, {
                text: ee,
                disabled: M,
                selected: r,
                disableWrapper: !0,
                children: (0, i.jsx)("div", {
                  ref: w ? K : void 0,
                  className: a()(S.folderIcon, { [N.wobble]: !J && q && !s }),
                  "data-dnd-name": ee,
                  children: J
                    ? (0, i.jsx)(I.Z, {})
                    : (0, i.jsx)(C.Z, {
                        folderNode: t,
                        expanded: s,
                        forceCircular: A,
                        sorting: M,
                        mediaState: u,
                        mentionCount: f,
                        isMentionLowImportance: j,
                        tooltipName: ee,
                        folderGroupId: en,
                        onClick: D,
                        onContextMenu: G,
                        onHoverChange: z,
                        onKeyDown: $,
                        treeItemProps: et,
                        folderIconContentClassName: U,
                        folderIconContent: B,
                      }),
                }),
              }),
              w
                ? (0, i.jsx)(x.ZP, {
                    name: ee,
                    targetNode: t,
                    onDragOverChanged: X,
                  })
                : null,
            ],
          });
        return (0, i.jsxs)("div", {
          ref: er,
          className: a()(S.wrapper, s && S.isExpanded),
          children: [
            !J &&
              s &&
              (0, i.jsx)("span", {
                className: a()(S.expandedFolderBackground, {
                  [S.collapsed]: !s,
                  [S.hover]: Q,
                }),
              }),
            ea,
            el((e, t, n) => {
              let { key: l } = n;
              return (
                t &&
                (0, i.jsx)(
                  y,
                  {
                    as: "ul",
                    gap: F ? "xxs" : 0,
                    id: en,
                    style: {
                      height: e.height.to((e) => e * ei),
                      overflow: "hidden",
                    },
                    role: "group",
                    children: H.map((t) => k(t, e.height)),
                  },
                  l,
                )
              );
            }),
            w && s ? (0, i.jsx)(x.Zu, { name: ee, targetNode: t }) : null,
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
        o = n(132871),
        s = n(147890),
        c = n(571457),
        u = n(836768),
        d = n(749681),
        h = n(603592),
        p = n(49898),
        m = n(128449),
        f = n(46140),
        g = n(388032);
      let v = l.forwardRef(function (e, t) {
        let { selected: n, className: v } = e,
          C = l.useCallback(() => {
            (0, c.k5)({
              source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON,
            });
            let e = u.Z.getField("selectedTab");
            switch (e) {
              case p.GlobalDiscoveryTab.QUESTS:
                return (0, d.transitionToGlobalDiscovery)({
                  tab: p.GlobalDiscoveryTab.QUESTS,
                  location: f.dr.DISCOVERY_COMPASS,
                  questContent: r.j.DISCOVERY_COMPASS,
                });
              case p.GlobalDiscoveryTab.SERVERS:
                return (0, d.transitionToGlobalDiscovery)({
                  tab: p.GlobalDiscoveryTab.SERVERS,
                  entrypoint: m.Qq.GUILDS_BAR,
                });
              case p.GlobalDiscoveryTab.APPS:
                return (0, s.goToAppDirectory)({
                  restorePreviousView: !0,
                  entrypoint: {
                    name: o.ApplicationDirectoryEntrypointNames
                      .GLOBAL_DISCOVERY_BUTTON,
                  },
                });
              default:
                return (0, d.transitionToGlobalDiscovery)({ tab: e });
            }
          }, []);
        return (0, i.jsx)(h.Z, {
          id: "guild-discover-button",
          ref: t,
          className: v,
          onClick: C,
          selected: n,
          tooltip: g.intl.string(g.t["4nEZLi"]),
          icon: a.CompassIcon,
        });
      });
      t.Z = v;
    },
    325257: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(999153),
        s = n(476183),
        c = n(91192),
        u = n(399606),
        d = n(846519),
        h = n(481060),
        p = n(493683),
        m = n(239091),
        f = n(153867),
        g = n(377171),
        v = n(540059),
        C = n(35225),
        x = n(703656),
        I = n(769654),
        _ = n(271383),
        Z = n(771845),
        b = n(727258),
        S = n(276952),
        N = n(249792),
        E = n(40153),
        y = n(593618),
        j = n(252686),
        T = n(682662),
        P = n(674552),
        A = n(981631),
        w = n(388032),
        M = n(284923);
      let L = {
        analyticsSource: {
          page: A.ZY5.GUILD_CHANNEL,
          section: A.jXE.CHANNEL_LIST,
          object: A.qAy.CHANNEL,
        },
      };
      function R(e, t) {
        (0, m.jW)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("63288"),
            n.e("7654"),
            n.e("68445"),
            n.e("98479"),
            n.e("53967"),
            n.e("16806"),
            n.e("60696"),
            n.e("58227"),
            n.e("16114"),
            n.e("82309"),
            n.e("94107"),
            n.e("33213"),
            n.e("11520"),
          ]).then(n.bind(n, 545135));
          return (n) => (0, i.jsx)(e, { ...n, guild: t });
        });
      }
      t.Z = l.memo(function (e) {
        var t, n, r, m, D;
        let {
            guildNode: G,
            setRef: k,
            onDragStart: B,
            onDragEnd: U,
            route: O,
            guild: V,
            animatable: H,
            selected: F = !1,
            unread: W = !1,
            mediaState: z,
            unavailable: q = !1,
            badge: Y = 0,
            isMentionLowImportance: Q,
            contextMenu: J = R,
            draggable: K = !1,
            sorting: X = !1,
            preloadOnClick: $ = !0,
            guildJoinRequestStatus: ee,
            height: et,
          } = e,
          { id: en, parentId: ei } = G,
          el = (0, v.Q3)("GuildItem"),
          er =
            null !== (t = e.upperBadge) && void 0 !== t
              ? t
              : q
                ? (0, P.Ny)()
                : null != z
                  ? (0, P.Or)(z)
                  : void 0,
          ea = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
        null == ea && Y > 0
          ? (ea =
              null !==
                (r = (0, P.Ne)(
                  Y,
                  Q ? g.Z.BACKGROUND_ACCENT : g.Z.STATUS_DANGER,
                )) && void 0 !== r
                ? r
                : void 0)
          : null == ea &&
            null != ee &&
            (ea =
              null !== (m = (0, P.jt)({ guildJoinRequestStatus: ee })) &&
              void 0 !== m
                ? m
                : void 0);
        let eo =
            null !== (D = e.lowerBadgeSize) && void 0 !== D
              ? D
              : { width: (0, h.getBadgeWidthForValue)(Y) },
          [{ dragging: es }, ec] = (0, o.c)({
            type: b.eD.GUILD,
            item: () => (
              requestAnimationFrame(() => {
                null == B || B();
              }),
              { type: G.type, nodeId: G.id }
            ),
            end() {
              null == U || U(), (0, f.V1)(Z.ZP.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
          }),
          eu = (0, c.Ie)(null != en ? en : A.lds),
          [ed, eh] = l.useState(!1),
          ep = !X && ed,
          [em, ef] = l.useState(!1),
          [eg, ev] = l.useState(!1),
          [eC] = l.useState(() => new d.sW(70, () => ev(!0)));
        l.useEffect(() => () => eC.cancel(), [eC]);
        let ex = l.useCallback(() => {
            if (null != O) {
              (0, x.uL)(O, { state: L });
              return;
            }
            (0, I.X)(en, { state: L });
          }, [en, O]),
          eI = l.useCallback(() => {
            if (null != O || null == V || q || !$) return;
            let e = (0, C.V)(V.id);
            if (null != e) p.Z.preload(V.id, e);
          }, [O, V, q, $]),
          e_ = (0, u.e7)([_.ZP], () => _.ZP.isCurrentUserGuest(en)),
          eZ = l.useCallback(
            (e) => {
              null != V && !e_ && J(e, V);
            },
            [V, J, e_],
          ),
          eb = l.useCallback(
            (e) => {
              if ("ArrowLeft" === e.key && null != ei) {
                var t;
                null ===
                  (t = document.querySelector(
                    "[aria-owns=folder-items-".concat(ei, "]"),
                  )) ||
                  void 0 === t ||
                  t.focus();
              }
            },
            [ei],
          ),
          eS = l.useCallback(
            (e) => {
              if (e) {
                eC.delay();
                return;
              }
              eC.cancel(), ev(!1);
            },
            [eC],
          ),
          eN = l.useCallback(
            (e) => {
              null == k || k(en, e);
            },
            [en, k],
          );
        if (null == V) return null;
        let eE =
            eg || em
              ? (0, i.jsx)(N.Z, {
                  guild: V,
                  show: eg,
                  active: F,
                  onAnimationStart: function () {
                    ef(eg);
                  },
                  onAnimationRest: function () {
                    eg || ef(!1);
                  },
                })
              : (0, i.jsx)(h.NavItem, {
                  ariaLabel: w.intl.formatToPlainString(w.t["/uzRsr"], {
                    guildName: V.toString(),
                    mentions: Y,
                  }),
                  name: V.toString(),
                  onClick: ex,
                  onMouseEnter: function () {
                    X || eh(!0);
                  },
                  onMouseLeave: function () {
                    X || eh(!1);
                  },
                  onMouseDown: eI,
                  onContextMenu: eZ,
                  onKeyDown: eb,
                  icon: V.getIconURL((el ? 44 : 48) * 2, ep && H),
                  selected: F || ep,
                  ...eu,
                  role: "treeitem",
                }),
          ey = es
            ? (0, i.jsx)(E.OG, { children: (0, i.jsx)(j.Z, {}) })
            : (0, i.jsx)(s.animated.div, {
                ref: K ? ec : void 0,
                "data-dnd-name": V.toString(),
                style: { scale: null == et ? 1 : et },
                className: a()(M.blobContainer, {
                  [M.sorting]: X,
                  [M.wobble]: eg,
                  [M.selected]: eg || F,
                }),
                children: (0, i.jsx)(h.BlobMask, {
                  selected: !!el || eg || F || ep,
                  upperBadge: er,
                  lowerBadge: ea,
                  lowerBadgeSize: eo,
                  children: eE,
                }),
              });
        return (0, i.jsxs)(T.H, {
          ref: eN,
          children: [
            (0, i.jsx)(S.Z, {
              hovered: !es && ep,
              selected: !es && F,
              unread: !es && W,
              className: M.pill,
            }),
            (0, i.jsx)(y.Z, {
              guild: V,
              disabled: X,
              isDragging: es,
              children: ey,
            }),
            K
              ? (0, i.jsx)(E.ZP, {
                  name: V.name,
                  targetNode: G,
                  onDragOverChanged: eS,
                })
              : null,
          ],
        });
      });
    },
    416637: function (e, t, n) {
      n.d(t, {
        g: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(192272);
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
          return D;
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
        h = n(540059),
        p = n(899740),
        m = n(155409),
        f = n(699516),
        g = n(944486),
        v = n(594174),
        C = n(431),
        x = n(774343),
        I = n(417363),
        _ = n(941128),
        Z = n(780570),
        b = n(557177),
        S = n(278464),
        N = n(276952),
        E = n(682662),
        y = n(662146),
        j = n(674552),
        T = n(981631),
        P = n(474936),
        A = n(871465),
        w = n(388032),
        M = n(491708);
      let L = {
        origin: { x: -16, y: 0 },
        targetWidth: 48,
        targetHeight: 48,
        offset: { x: 0, y: 0 },
      };
      function R(e) {
        let {
            selected: t,
            user: n,
            badge: p,
            link: f,
            showProgressBadge: g,
          } = e,
          v = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
          [C, x] = l.useState(!1),
          [I, _] = l.useState(!1),
          [Z, S] = l.useState(null),
          [P, R] = l.useState(0),
          D = (0, r.Ie)("home"),
          G = (0, h.Q3)("DefaultHomeButton"),
          k = () => {
            S(null), R(0), clearTimeout(Z);
          };
        if (null == n) return null;
        let B = w.intl.string(w.t.YUU0RE);
        I &&
          (B = o.K.get(T.wli)
            ? w.intl.string(w.t.nkq1l5)
            : w.intl.string(w.t.Be8Q5O));
        let U = null;
        !t &&
          g &&
          (U = (0, i.jsx)(c.Z, {
            className: M.downloadProgress,
            determineOwnVisibility: !1,
          }));
        let O = t || C || v,
          V = (0, i.jsx)(s.BlobMask, {
            selected: G || O,
            lowerBadge: p > 0 ? (0, j.Ne)(p) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, s.getBadgeWidthForValue)(p) },
            children: (0, i.jsx)(s.NavItem, {
              onMouseEnter: () => x(!0),
              onMouseLeave: () => x(!1),
              onClick: () => {
                if (
                  !__OVERLAY__ &&
                  (null != Z && clearTimeout(Z),
                  S(setTimeout(k, 500)),
                  R(P + 1),
                  15 === P)
                ) {
                  k();
                  let e = !o.K.get(T.wli);
                  o.K.set(T.wli, e),
                    e && o.K.set(A.O5, !0),
                    e ? (0, b.GN)("discodo") : (0, b.GN)("user_leave"),
                    _(!0),
                    setTimeout(() => {
                      _(!1);
                    }, 1e3);
                }
              },
              selected: O,
              ariaLabel: w.intl.string(w.t.YUU0RE),
              ...D,
              to: {
                pathname: f,
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
          children: (0, i.jsx)(m.Z, {
            inlineSpecs: L,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(E.H, {
              children: [
                (0, i.jsx)(N.Z, { selected: t, hovered: C, className: M.pill }),
                (0, i.jsx)(y.Z, {
                  color: s.Tooltip.Colors.PRIMARY,
                  hideOnClick: !0,
                  text: B,
                  selected: t,
                  children: V,
                }),
              ],
            }),
          }),
        });
      }
      function D() {
        let e = (0, S.n)(),
          t = (0, a.e7)([_.Z, I.Z], () => {
            let e = (0, c.E)(_.Z.activeItems, I.Z),
              { total: t, progress: n } = Z.lK(e),
              i = Z.xI(n, t);
            return i > 0 && i < 100;
          }),
          n = (0, a.e7)([f.Z], () => f.Z.getPendingCount()),
          l = Object.keys(P.nG),
          { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)(
            [C.Z],
            () => ({
              unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
              unviewedDiscountCount:
                C.Z.getUnacknowledgedDiscountOffers().length,
            }),
          ),
          s = r + o,
          u = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
          d = (0, p.q)(),
          h = n + s + d,
          m = h === s && s > 0 && n + d === 0,
          b = x.Z.getHomeLink();
        return (
          m && (b = T.Z5c.APPLICATION_STORE),
          (0, i.jsx)(R, {
            selected: e,
            user: u,
            selectedChannelId: g.Z.getChannelId(T.ME),
            badge: h,
            link: b,
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
        r = n(940722);
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
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(481060),
        s = n(540059),
        c = n(31847);
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
            tooltipContentClass: v,
          } = e,
          C = (0, s.Q3)("ListItemTooltip");
        return (0, i.jsx)(o.Tooltip, {
          shouldShow: p,
          forceOpen: m,
          spacing: C ? 12 : 20,
          hideOnClick: h,
          text: d ? null : n,
          position: "right",
          color: r,
          "aria-label": !1,
          tooltipClassName: a()(c.listItemTooltip, g),
          tooltipContentClassName: v,
          children: (e) =>
            u
              ? l.cloneElement(l.Children.only(t), { ...e })
              : (0, i.jsx)("div", {
                  className: a()(c.listItemWrapper, { [c.selected]: f }),
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
        r = n(958844);
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
        p = n(768753);
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
        a = n(481060),
        o = n(44315),
        s = n(246364),
        c = n(460562),
        u = n(981631),
        d = n(940722);
      function h(e, t) {
        return (0, i.jsx)(a.NumberBadge, { count: e, color: t });
      }
      function p() {
        return (0, i.jsx)(a.IconBadge, {
          icon: (0, a.makeIconCompat)(c.Z),
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
            liveStage: o,
            activeEvent: s,
            activity: c,
          } = e;
        if (s) t = a.CalendarIcon;
        else if (o) t = a.StageIcon;
        else if (c) t = a.ActivitiesIcon;
        else if (l) t = a.ScreenIcon;
        else if (i) t = a.VideoIcon;
        else {
          if (!n) return null;
          t = a.VoiceNormalIcon;
        }
        return g({ icon: t, isCurrentUserConnected: r });
      }
      function f(e) {
        let { guildJoinRequestStatus: t } = e,
          [n, i] = (function (e) {
            switch (e) {
              case s.wB.SUBMITTED:
                return [void 0, a.ClockIcon];
              case s.wB.REJECTED:
                return [u.Ilk.RED_400, a.XSmallIcon];
              case s.wB.APPROVED:
                return [u.Ilk.GREEN_360, a.CheckmarkLargeIcon];
              default:
                return [void 0, a.PencilIcon];
            }
          })(t);
        return g({ icon: i, color: n });
      }
      function g(e) {
        let { icon: t, color: n, isCurrentUserConnected: l } = e,
          s = null == n ? { disableColor: !0 } : { color: (0, o.Lq)(n) };
        return (0, i.jsx)(a.IconBadge, {
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
          { id: v, name: C, color: x, children: I } = t,
          _ = I.map((e) => e.id),
          Z = (0, s.Z)((e) => e.guildId),
          b = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(v)),
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
          N = (0, m.Z)(t),
          {
            mentionCount: E,
            isMentionLowImportance: y,
            unread: j,
          } = (0, r.cj)([u.default], () => ({
            mentionCount: _.map((e) => u.default.getMentionCount(e)).reduce(
              (e, t) => e + t,
              0,
            ),
            isMentionLowImportance: _.every((e) =>
              u.default.getIsMentionLowImportance(e),
            ),
            unread: _.some((e) => u.default.hasUnread(e)),
          })),
          T = l.useCallback(() => {
            o.Z.toggleGuildFolderExpand(v);
          }, [v]),
          P = l.useCallback(
            (e) => {
              (0, a.jW)(e, async () => {
                let { default: e } = await n.e("52590").then(n.bind(n, 205784));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    folderId: v,
                    folderName: C,
                    folderColor: x,
                    unread: j || E > 0,
                  });
              });
            },
            [v, C, x, j, E],
          );
        return (0, i.jsx)(p.Z, {
          ...g,
          folderNode: t,
          expanded: b,
          selected: null != Z && _.includes(Z),
          mentionCount: E,
          isMentionLowImportance: y,
          unread: j,
          mediaState: N,
          defaultFolderName: S,
          onExpandCollapse: T,
          onContextMenu: P,
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
        g = n(771557);
      t.Z = l.memo(function (e) {
        let { guildNode: t, lowerBadge: n } = e,
          v = t.id,
          C = (0, r.e7)([h.Z], () => h.Z.getGuild(v)),
          x = (0, o.E)(C),
          I = (0, r.e7)([p.Z], () => p.Z.isFocused()),
          _ = (0, r.e7)([u.Z], () => u.Z.isUnavailable(v)),
          Z = (0, c.Z)((e) => e.guildId),
          b = (0, m.Z)(v),
          {
            badge: S,
            unread: N,
            isMentionLowImportance: E,
          } = (0, r.cj)([d.default], () => ({
            badge: d.default.getMentionCount(v),
            isMentionLowImportance: d.default.getIsMentionLowImportance(v),
            unread: d.default.hasUnread(v),
          })),
          y = (0, s.I)(C) && 0 === S,
          j = l.useMemo(
            () =>
              null != n
                ? n
                : y
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
            [n, y],
          );
        return (0, i.jsx)(f.Z, {
          ...e,
          guild: C,
          unavailable: _,
          animatable: I,
          selected: Z === v,
          badge: S,
          isMentionLowImportance: E,
          lowerBadge: j,
          unread: N,
          mediaState: b,
          guildJoinRequestStatus: x,
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
        let { guildNode: t, height: n } = e,
          r = t.id,
          m = (0, l.e7)([o.Z], () => o.Z.getRequest(r)),
          f = (0, l.e7)([o.Z], () => o.Z.getJoinRequestGuild(r), [r]),
          g = (0, l.e7)([c.Z], () => c.Z.isFocused()),
          v = (0, l.e7)([s.Z], () => s.Z.getGuildId());
        return null == f
          ? null
          : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: f,
              animatable: g,
              draggable: !1,
              selected: r === v,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge:
                (null == m ? void 0 : m.applicationStatus) === a.wB.REJECTED
                  ? (0, d.jt)({ guildJoinRequestStatus: m.applicationStatus })
                  : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(r),
              height: n,
            });
      }
    },
    836697: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(481060),
        o = n(110924),
        s = n(540059),
        c = n(693546),
        u = n(863249),
        d = n(937111),
        h = n(914010),
        p = n(289090),
        m = n(727258),
        f = n(234383),
        g = n(179809),
        v = n(588275),
        C = n(388032),
        x = n(738945);
      function I(e) {
        let { onActivate: t, children: n } = e,
          s = (0, r.e7)([d.Z], () => d.Z.hasJoinRequestCoackmark()),
          c = l.useCallback(() => {
            u.ZP.clearCoachmark();
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
            className: x.container,
            children: [
              (0, i.jsx)(a.Popout, {
                ref: p,
                shouldShow: s,
                renderPopout: () =>
                  (0, i.jsxs)("div", {
                    className: x.popoutContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: x.popoutContent,
                        children: [
                          (0, i.jsxs)("div", {
                            className: x.coachmarkTextContainer,
                            children: [
                              (0, i.jsx)(a.Heading, {
                                variant: "heading-md/medium",
                                children: C.intl.string(C.t["0YV0YG"]),
                              }),
                              (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(C.t["0UQVDA"]),
                              }),
                            ],
                          }),
                          (0, i.jsx)(a.Button, {
                            fullWidth: !0,
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.BRAND,
                            onClick: c,
                            children: C.intl.string(C.t["4r+amZ"]),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", { className: x.popoutCaretLeft }),
                    ],
                  }),
                position: "right",
                animationPosition: "right",
                align: "top",
                spacing: 16,
                children: (e) =>
                  (0, i.jsx)("div", { ...e, className: x.popoutAnchor }),
              }),
              n,
            ],
          })
        );
      }
      function _(e) {
        let { onActivate: t } = e,
          n = (0, s.Q3)("PendingGuildJoinRequestsFolderNode"),
          [_, Z] = l.useState(!1),
          b = (0, r.e7)([h.Z], () => h.Z.getGuildId()),
          S = (0, r.e7)([d.Z], () => d.Z.hasFetchedRequestToJoinGuilds),
          N = (0, f.Z)(),
          E = (0, o.Z)(b),
          y = l.useMemo(() => {
            let e = (0, m.qQ)({
              folderId: p.S.PENDING_JOIN_REQUESTS_FOLDER,
              folderName: C.intl.string(C.t["scsU+v"]),
              expanded: _,
              guildIds: [],
            });
            for (let t of N) e.children.push((0, m.Mg)(t, e.id));
            return e;
          }, [N, _]);
        l.useEffect(() => {
          _ && !S && c.Z.fetchRequestToJoinGuilds();
        }, [_, S]);
        let j = null != b && N.includes(b);
        return (l.useEffect(() => {
          !_ && j && E !== b && Z(!0);
        }, [_, j, E, b]),
        0 === N.length)
          ? null
          : (0, i.jsx)(I, {
              onActivate: t,
              children: (0, i.jsx)(g.Z, {
                folderNode: y,
                expanded: _,
                useCircleMask: !_ && !j,
                selected: j,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: () => {
                  Z(!_), u.ZP.clearCoachmark();
                },
                folderIconContentClassName: x.folderIconContent,
                folderIconContent: (0, i.jsx)(a.HourglassIcon, {
                  size: n ? "sm" : "md",
                  color: "currentColor",
                  className: x.pendingIcon,
                }),
                renderChildNode: function (e, t) {
                  return e.type !== m.eD.GUILD
                    ? null
                    : (0, i.jsx)(v.Z, { guildNode: e, height: t }, e.id);
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
          v = (0, l.e7)([s.Z], () => null != m && s.Z.hasVideo(m), [m]),
          C = (0, l.e7)([a.Z], () => a.Z.getCurrentUserActiveStream());
        return (
          u &&
            ((d = !v),
            (h = v),
            (p = null != C && null != C.guildId && c.includes(C.guildId))),
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
                n.e("22506"),
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
          v = (0, p.t)(n);
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
                trailing: "JOIN_SERVERS" === l && v > 0 ? (0, c.N)(v) : null,
              },
              d,
            );
          }),
        });
      };
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
        o = n(630186),
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
        a = n(303790);
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
            "aria-label": v,
            "aria-checked": C,
            role: x,
            tooltipColor: I,
            tooltipForceOpen: _,
            tooltipContentClassName: Z,
          } = e,
          b =
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
          "aria-label": v,
          color: I,
          tooltipContentClassName: Z,
          forceOpen: _,
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
              role: x,
              "aria-checked": C,
              children: [
                null != n
                  ? (0, i.jsx)(o.ZP, {
                      width: 20,
                      height: 20,
                      mask: o.ZP.Masks.PANEL_BUTTON,
                      children: b,
                    })
                  : b,
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
        o = n(270350);
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
        o = n(306005);
      function s(e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)(a.Text, {
          color: "none",
          className: r()(o.title, n),
          variant: "text-sm/medium",
          children: t,
        });
      }
    },
    339144: function (e, t, n) {
      n.d(t, {
        J: function () {
          return _;
        },
        y: function () {
          return I;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        a = n.n(r),
        o = n(481060),
        s = n(24124),
        c = n(636449),
        u = n(620662),
        d = n(513202),
        h = n(311352),
        p = n(803647),
        m = n(131704),
        f = n(626135),
        g = n(870569),
        v = n(981631),
        C = n(388032),
        x = n(272371);
      function I(e, t, n) {
        return (
          null != e &&
          (null != n
            ? n.applicationId === e.id
            : null != t &&
              t.application_id === e.id &&
              t.type === v.IIU.PLAYING &&
              (0, u.Z)(t, v.xjy.JOIN))
        );
      }
      let _ = l.memo(function (e) {
        let t,
          r,
          u,
          _,
          {
            stream: Z,
            canGoLive: b,
            guildId: S,
            isStreaming: N,
            channel: E,
            canStream: y,
            runningGame: j,
            embeddedActivity: T,
            activity: P,
            application: A,
            analyticsContext: w,
          } = e,
          M = I(A, P, T),
          L = l.useCallback(() => {
            a()(null != P, "Received null activity"),
              f.default.track(v.rMx.OPEN_MODAL, {
                type: "Send Join Invite",
                application_id: P.application_id,
                location: w.location,
              }),
              (0, s.h7)(P, !1);
          }, [P, w]),
          R = l.useCallback(
            (e, t) => () => {
              d.Z.leaveActivity({
                location: t,
                applicationId: e,
                showFeedback: !0,
              });
            },
            [],
          ),
          D = l.useCallback(() => {
            (0, p.Z)(Z);
          }, [Z]),
          G = l.useCallback(() => {
            let e = null != E && (0, m.vd)(E.type) ? E : null,
              t = null != e ? e.getGuildId() : S;
            (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("93382"),
                n.e("79477"),
                n.e("46298"),
              ]).then(n.bind(n, 60594));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  selectSource: !1,
                  guildId: t,
                  analyticsLocation: v.Sbl.ACTIVITY_PANEL,
                });
            });
          }, [E, S]);
        let k =
            (null != j || null == T || (0, c.R)()) && (N || b)
              ? (N
                  ? ((t = !1),
                    (r = D),
                    (u = o.ScreenXIcon),
                    (_ = C.intl.string(C.t.S5anIS)))
                  : y
                    ? ((t = !1),
                      (r = G),
                      (u = o.ScreenArrowIcon),
                      (_ =
                        null != j
                          ? C.intl.formatToPlainString(C.t.AB5gT0, {
                              game: j.name,
                            })
                          : C.intl.string(C.t.FeUKeH)))
                    : ((t = !0),
                      (r = null),
                      (u = o.ScreenArrowIcon),
                      (_ =
                        null != E && (0, m.vd)(E.type)
                          ? C.intl.string(C.t.uQn9Bw)
                          : null != S
                            ? C.intl.string(C.t.fBXEoK)
                            : C.intl.string(C.t.n3feND))),
                (0, i.jsx)("div", {
                  className: x.panelButtonContainer,
                  children: (0, i.jsx)(g.Z, {
                    tooltipText: _,
                    disabled: t,
                    onClick: r,
                    icon: u,
                  }),
                }))
              : null,
          B =
            M && null == T
              ? (0, i.jsx)(g.Z, {
                  tooltipText: C.intl.string(C.t["hC/Ze3"]),
                  onClick: L,
                  icon: o.GroupPlusIcon,
                })
              : null,
          U =
            null == T || null == E
              ? null
              : (0, i.jsx)(g.Z, {
                  tooltipText: C.intl.string(C.t["R/FK4O"]),
                  onClick: R(T.applicationId, T.location),
                  icon: o.DoorExitIcon,
                }),
          O = null == Z ? null : (0, i.jsx)(h.Z, {});
        return null == k && null == B && null == U
          ? null
          : (0, i.jsxs)("div", {
              className: x.actions,
              children: [k, B, null != U ? U : O],
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
        d = n(570140),
        h = n(475179),
        p = n(925549),
        m = n(438139),
        f = n(730749),
        g = n(607070),
        v = n(636449),
        C = n(214629),
        x = n(566620),
        I = n(317381),
        _ = n(835473),
        Z = n(933557),
        b = n(194082),
        S = n(436774),
        N = n(594190),
        E = n(925329),
        y = n(102172),
        j = n(74299),
        T = n(914923),
        P = n(165393),
        A = n(989941),
        w = n(690221),
        M = n(231664),
        L = n(759198),
        R = n(131704),
        D = n(199902),
        G = n(314897),
        k = n(592125),
        B = n(984933),
        U = n(430824),
        O = n(131951),
        V = n(496675),
        H = n(158776),
        F = n(699516),
        W = n(944486),
        z = n(594174),
        q = n(449224),
        Y = n(358085),
        Q = n(345243),
        J = n(115530),
        K = n(339144),
        X = n(441248),
        $ = n(981631),
        ee = n(918559),
        et = n(395144);
      let en = (0, m.Z)(function (e) {
        let { message: t } = e;
        return (0, i.jsx)(Q.Z, { children: t });
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
          return (0, i.jsx)(K.J, { ...this.props });
        }
        renderGame() {
          let { isStreaming: e, application: t, runningGame: n } = this.props;
          return (0, i.jsx)(X.k, { isStreaming: e, application: t, game: n });
        }
        renderScreenshare() {
          let {
              isStreaming: e,
              streamMetadata: t,
              streamQualityIndicator: n,
            } = this.props,
            { title: l, sanitizedTitle: r } = (0, T.Z)(t);
          return (0, i.jsxs)("div", {
            className: et.gameWrapper,
            children: [
              e
                ? (0, i.jsx)(P.Z, { title: r })
                : (0, i.jsx)(b.ZP, {
                    look: b.ZP.Looks.GRAY,
                    size: b.ZP.Sizes.SMALL,
                    className: et.liveIndicator,
                  }),
              (0, i.jsxs)("div", {
                className: et.info,
                children: [
                  (0, i.jsx)(J.Z, { children: l }),
                  null != n &&
                    (0, i.jsxs)("div", {
                      className: et.perksDemoContainer,
                      children: [
                        (0, i.jsx)(u.NitroWheelIcon, {
                          size: "xxs",
                          color: S.JX.PREMIUM_TIER_2,
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
            guildForConnectedChannel: a,
          } = this.props;
          if (null == n || null == l || null == t) return null;
          let o = { start: n.connectedSince },
            s = r;
          null != a
            ? ((e = $.Z5c.CHANNEL(a.id, l.id)),
              (s = "".concat(s, " / ").concat(a.name)))
            : (e = $.Z5c.CHANNEL($.ME, l.id));
          let c = (0, i.jsx)(w.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(Q.Z, { className: et.channel, children: s }),
          });
          return (0, i.jsxs)("div", {
            className: et.gameWrapper,
            children: [
              (0, i.jsx)(E.Z, {
                className: et.gameIcon,
                game: t,
                size: E.Z.Sizes.SMALL,
              }),
              (0, i.jsxs)("div", {
                className: et.info,
                children: [
                  (0, i.jsx)(w.Z, {
                    href: e,
                    onClick: this.handleApplicationOrChannelLinkClick,
                    children: (0, i.jsx)(J.Z, {
                      className: et.activityName,
                      children: t.name,
                    }),
                  }),
                  (0, R.Qm)(l.type) ? c : (0, i.jsx)(en, { timestamps: o }),
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
                className: a()(et.panel, c),
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
                (0, v.R)()
                  ? d.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                  : ((0, R.vd)(t.type) &&
                      h.Z.selectParticipant(t.id, n.applicationId),
                    (0, R.Qm)(t.type) && (0, x.tg)(ee.Ez.PANEL));
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
          r = (0, c.e7)([G.default], () => G.default.getId()),
          a = (0, c.e7)([N.ZP, q.Z], () => (0, A.Z)(N.ZP, q.Z)),
          o = (0, c.e7)([W.Z, k.Z], () =>
            k.Z.getChannel(W.Z.getVoiceChannelId()),
          ),
          s = (0, c.e7)([I.ZP], () => I.ZP.getConnectedActivityChannelId()),
          u = (0, c.e7)([k.Z], () => k.Z.getChannel(s)),
          d = (0, c.e7)([U.Z], () =>
            U.Z.getGuild(null == u ? void 0 : u.guild_id),
          ),
          [h, p] = (0, c.Wu)([D.Z], () => [
            D.Z.getCurrentUserActiveStream(),
            D.Z.getStreamerActiveStreamMetadata(),
          ]),
          m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
          f = (0, c.e7)([I.ZP], () =>
            null != u ? I.ZP.getSelfEmbeddedActivityForChannel(u.id) : null,
          ),
          x = (0, c.e7)([U.Z, V.Z, B.ZP], () =>
            null != o
              ? y.JL(o, U.Z, V.Z, !1)
              : null != n && y.h_(B.ZP.getChannels(n), U.Z, V.Z).length > 0,
          ),
          [b] = (0, _.Z)([
            null !==
              (t = (function () {
                if (null != p && null != p.id) return p.id;
                if (null != a && null != a.id) return a.id;
                if (null != f) return f.applicationId;
              })()) && void 0 !== t
              ? t
              : "",
          ]),
          S = (0, c.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
          E = (0, C.Z0)() && null != S && (0, v.R)(),
          T = (0, c.e7)([O.Z], () => (0, j.Z)(O.Z) && (0, Y.isWindows)()),
          P = (0, c.e7)([H.Z], () =>
            null != r
              ? H.Z.findActivity(r, (e) => e.type === $.IIU.PLAYING)
              : null,
          ),
          w = null != h && h.ownerId === r && h.state !== $.jm8.ENDED,
          L = (0, c.e7)([z.default, F.Z], () =>
            null != u ? (0, Z.F6)(u, z.default, F.Z) : void 0,
          ),
          R = (0, M.Z)();
        return (0, i.jsx)(ei, {
          ...l,
          guildId: n,
          canGoLive: T || E,
          activity: P,
          embeddedActivity: f,
          userId: r,
          runningGame: a,
          application: b,
          useReducedMotion: m,
          isStreaming: w,
          channel: u,
          canStream: x,
          stream: h,
          streamMetadata: p,
          channelName: L,
          guildForConnectedChannel: d,
          streamQualityIndicator: R,
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
        h = n(832926);
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
    335353: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(70097),
        a = n(576645),
        o = n(475731);
      function s(e) {
        let { children: t, channel: n } = e,
          s = (0, l.useRef)(null);
        return ((0, a.J)(n, () => {
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
              className: o.container,
              onMouseEnter: () => {
                null != s.current && s.current.play();
              },
              onMouseLeave: () => {
                null != s.current && s.current.pause();
              },
              children: [
                (0, i.jsx)("div", {
                  className: o.videoContainer,
                  children: (0, i.jsx)(r.Z, {
                    ref: s,
                    className: o.video,
                    muted: !0,
                    loop: !0,
                    preload: "auto",
                    children: (0, i.jsx)("source", {
                      src: "https://cdn.discordapp.com/assets/content/d9e11f6867e4d7ce641f72ee40be0d96b085239067f94564f79ca3920a50397f.mp4",
                      type: "video/mp4",
                    }),
                  }),
                }),
                (0, i.jsx)("div", { className: o.content, children: t }),
              ],
            })
          : (0, i.jsx)(i.Fragment, { children: t });
      }
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
        o = n(457900);
      function s(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(a.Text, {
          className: r()({ [o.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    802718: function (e, t, n) {
      n.d(t, {
        U: function () {
          return C;
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
        g = n(477090);
      function v(e) {
        let { target: t } = e,
          o = (0, r.Ie)("fakedoor"),
          p = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("22862"),
                n.e("96252"),
              ]).then(n.bind(n, 646202));
              return (n) => (0, i.jsx)(e, { ...n, target: t });
            });
          }, [t]),
          v = l.useCallback(
            (e) => {
              (0, s.jW)(e, async () => {
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
          x = (0, i.jsxs)("div", {
            className: g.tooltipContainer,
            children: [
              (0, i.jsx)("div", {
                className: g.tooltipBackground,
                style: { background: C },
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
          I = (0, c.Fg)();
        return (0, i.jsxs)(d.H, {
          children: [
            (0, i.jsx)(a.ThemeContextProvider, {
              theme: m.BRd.DARK,
              children: (0, i.jsx)(h.Z, {
                text: x,
                tooltipClass: g.tooltip,
                tooltipContentClass: g.tooltipContent,
                children: (0, i.jsx)(a.ThemeContextProvider, {
                  theme: I,
                  children: (0, i.jsx)(a.BlobMask, {
                    lowerBadge: (0, i.jsx)(a.NumberBadge, {
                      count: 1,
                      color: u.Z.BG_BRAND,
                    }),
                    children: (0, i.jsx)(a.NavItem, {
                      ...o,
                      onClick: p,
                      onContextMenu: v,
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
        let e = (0, o.e7)([p.Z], () => p.Z.getActiveUserSignUp());
        return null == e ? null : (0, i.jsx)(v, { target: e });
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
          v =
            null !== (n = null == m ? void 0 : m.topic) && void 0 !== n
              ? n
              : h.name,
          C = d.intl.formatToPlainString(d.t["T+DNAA"], { channel: v });
        return (0, i.jsx)("div", {
          ref: f,
          children: (0, i.jsx)(a.Clickable, {
            onClick: g,
            focusProps: { ringTarget: f },
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
    630186: function (e, t, n) {
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
      class o extends l.ZP {
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
      class a extends l.ZP {
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
      function v() {
        return g();
      }
      function C(e) {
        let { channelId: t } = e,
          n = d.Z.getChannel(t);
        return !!(null != n && (0, c.hv)(n.type)) && g();
      }
      class x extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, d.Z, p.Z, h.ZP);
        }
        getUnreadPrivateChannelIds() {
          return f;
        }
      }
      (a = "PrivateChannelReadStateStore"),
        (r = "displayName") in (l = x)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new x(s.Z, {
          CONNECTION_OPEN: v,
          OVERLAY_INITIALIZE: v,
          MESSAGE_CREATE: C,
          MESSAGE_ACK: C,
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
        v = n(420660),
        C = n(728345),
        x = n(812206),
        I = n(750881),
        _ = n(710845),
        Z = n(38618),
        b = n(656063),
        S = n(761282),
        N = n(814443),
        E = n(789407),
        y = n(630186),
        j = n(250889),
        T = n(199902),
        P = n(592125),
        A = n(480294),
        w = n(831506),
        M = n(731290),
        L = n(430824),
        R = n(496675),
        D = n(158776),
        G = n(699516),
        k = n(594174),
        B = n(979651),
        U = n(626135),
        O = n(823379),
        V = n(981631);
      let H = !1,
        F = !1,
        W = [],
        z = [],
        q = {},
        Y = {},
        Q = new Set(),
        J = new Set();
      function K() {
        let e = G.Z.getFriendIDs();
        return A.Z.hasConsented(V.pjP.PERSONALIZATION)
          ? new Set([...N.Z.getUserAffinitiesUserIds(), ...e])
          : new Set(e);
      }
      function X(e) {
        return D.Z.findActivity(e, (e) => e.type !== V.IIU.CUSTOM_STATUS);
      }
      function $(e) {
        return null == q[e] && (q = { ...q, [e]: new j.Z({ name: e }) }), q[e];
      }
      function ee(e) {
        return null == Y[e] && (Y = { ...Y, [e]: new y.Z({ url: e }) }), Y[e];
      }
      function et(e) {
        !J.has(e) && Q.add(e);
      }
      function en(e) {
        if ((0, f.Z)(e)) return E.r9;
        let t =
          null != e.application_id
            ? x.Z.getApplication(e.application_id)
            : null;
        return null != t
          ? t
          : (0, g.Z)(e)
            ? $(e.name)
            : (0, v.Z)(e) && null != e.url
              ? ee(e.url)
              : (null != e.application_id && et(e.application_id), t);
      }
      function ei(e) {
        let t = B.Z.getVoiceStateForUser(e);
        return (null == t ? void 0 : t.channelId) != null &&
          R.Z.canWithPartialContext(V.Plq.VIEW_CHANNEL, {
            channelId: t.channelId,
          })
          ? t.channelId
          : null;
      }
      function el(e) {
        return G.Z.isFriend(e.id);
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
          v = t.filter((t) => e.has(t.id)),
          C = !1,
          I = [],
          Z = new Set(),
          N = !1,
          A = [];
        for (let e of t) {
          let n = T.Z.getAnyStreamForUser(e.id),
            i = P.Z.getChannel(null == n ? void 0 : n.channelId);
          if (
            (null == i ? void 0 : i.isNSFW()) &&
            (!f || !M.Z.didAgree(null == i ? void 0 : i.getGuildId()))
          )
            continue;
          let o = X(e.id);
          if (
            (null != n && A.push({ stream: n, streamUser: e, activity: o }),
            null == o)
          )
            continue;
          let c = (0, b.Z)(o);
          if (null == c) continue;
          N = c === E.XB;
          let u = (function (e) {
              let t = x.Z.getApplication(e);
              return null != t
                ? t
                : "string" != typeof e
                  ? (new _.Z("NowPlayingViewStore").error(
                      "Unknown type for applicationId: "
                        .concat(typeof e, ", value: ")
                        .concat(e),
                      { tags: { source: "ACTIVITIES" } },
                    ),
                    null)
                  : e === E.XB
                    ? E.r9
                    : e.startsWith(j.H)
                      ? $(e.slice(j.H.length))
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
                  null === (r = B.Z.getVoiceStateForUser(e.id)) || void 0 === r
                    ? void 0
                    : r.channelId,
                currentUser: d,
                isActivitiesEnabledForCurrentPlatform: t,
                ChannelStore: P.Z,
                VoiceStateStore: B.Z,
                PermissionStore: R.Z,
                GuildStore: L.Z,
              }) !== p.Fw.CAN_JOIN
            )
              continue;
          } else if (null == g) continue;
          if (!S.JE(o) || null == u || Z.has(u.id)) continue;
          let v = null != o ? en(o) : null;
          (null == v || v.id !== u.id) && (o = null);
          let D = [];
          (D =
            null != o && null != o.party && null != o.party.id
              ? Array.from(
                  null !== (a = w.Z.getParty(o.party.id)) && void 0 !== a
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
              (C = !0),
            Z.add(u.id),
            I.push({
              game: u,
              activity: o,
              activityUser: e,
              startedPlayingTime: g,
              playingMembers: D,
            });
        }
        let G = 1 === v.length,
          U = [],
          V = new Set(),
          H = new Set();
        for (let e of t) {
          let n = ei(e.id),
            i = P.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = L.Z.getGuild(l);
          if (
            (H.has(l) && V.has(n)) ||
            null == i ||
            null == r ||
            i.id === r.afkChannelId
          )
            null == i && ((u = null), (G = !0));
          else {
            let e = B.Z.getVoiceStatesForChannel(i.id),
              a = s()(e)
                .map((e) => {
                  let { userId: t } = e;
                  return k.default.getUser(t);
                })
                .filter(O.lm)
                .orderBy([el], ["desc"])
                .value();
            a.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
              G ? !H.has(l) && (u = null) : ((u = r), (G = !0)),
              H.add(l),
              V.add(n),
              U.push({ channel: i, guild: r, members: a, voiceStates: e });
          }
        }
        return {
          id: n,
          voiceChannels: U,
          isSpotifyActivity: N,
          priorityMembers: v.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id),
          })),
          partiedMembers: t,
          showPlayingMembers: C,
          guildContext: u,
          currentActivities: ((o = I),
          (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
          }),
          s()(o).orderBy([c, (e) => e.game.name], ["desc", "asc"])).value(),
          applicationStreams: A,
        };
      }
      function ea(e) {
        return (
          !!(
            0 !== e.voiceChannels.length && (0, I.$W)("now-playing-view-store")
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
            0 !== e.voiceChannels.length && (0, I.$W)("now-playing-view-store")
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
          !!(0, I.sb)("now-playing-view-store") &&
          e.partiedMembers.some((e) => G.Z.isBlocked(e.id))
        );
      }
      function ec() {
        return H && Z.Z.isConnected();
      }
      let eu = s().throttle(() => {
        !(function () {
          var e;
          if (!ec()) return;
          Q.clear();
          let t = (function (e) {
              let t = K(),
                n = er.bind(null, t);
              return s()(e).mapValues(n);
            })(
              ((e = Array.from(K()).reduce((e, t) => {
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
            } = (0, I.p7)("now-playing-view-store");
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
                  () => I.h9.HIDE,
                )
                .with(
                  { blockeeExperimentEnabled: !0, party: c.P.when(eo) },
                  () => I.h9.HIDE,
                )
                .with(
                  { blockeeExperimentEnabled: !0, party: c.P.when(ea) },
                  () => I.h9.DERANK,
                )
                .otherwise(() => I.h9.SHOW);
              e.voiceChannels.forEach((e) => {
                let { voiceStates: n, channel: i } = e,
                  l = s().map(n, "userId"),
                  r = s().map(n, "discoverable"),
                  a = s().map(n, (e) => G.Z.getRelationshipType(e.userId));
                U.default.track(V.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
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
                  (0, I.p7)("now-playing-view-store"),
                i = n && es(e),
                l = t && eo(e);
              return (
                (e.voiceChannels.length >= 1 ||
                  e.currentActivities.length > 0 ||
                  e.applicationStreams.length > 0) &&
                !i &&
                !l
              );
            })).map((e) => ({ type: V.GOo.USER, party: e }))),
            !(function () {
              if (Q.size > 0) {
                let e = Array.from(Q);
                C.ZP.fetchApplications(e),
                  e.forEach((e) => J.add(e)),
                  Q.clear();
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
            [k.default, x.Z, D.Z, w.Z, B.Z, T.Z, G.Z, A.Z, N.Z],
            ed,
          ),
            this.waitFor(Z.Z, L.Z, x.Z, k.default, N.Z);
        }
        get currentActivityParties() {
          return W;
        }
        get nowPlayingCards() {
          return z;
        }
        get isMounted() {
          return H;
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
          (H = !1), (W = []), (z = []), Q.clear();
        },
        NOW_PLAYING_MOUNTED: function () {
          (H = !0), eu();
        },
        NOW_PLAYING_UNMOUNTED: function () {
          H = !1;
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
        dm: "dm_c91bad",
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
    702294: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_edf32f",
          bar: "bar_edf32f",
          hidden: "hidden_edf32f",
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
    410842: function (e, t, n) {
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
        refreshVoiceChannelsButton: "refreshVoiceChannelsButton_a08117",
        refreshVoiceChannelsButtonInner:
          "refreshVoiceChannelsButtonInner_a08117",
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
          "unreadBottom_c43953 unread_c43953 " + n("702294").container,
        positionedContainer: "positionedContainer_c43953",
        unreadTop: "unreadTop_c43953 unread_c43953 " + n("702294").container,
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
    837349: function (e, t, n) {
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
        invertedSpine: "invertedSpine_e1e976",
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
        discoveryIcon: "discoveryIcon_fea3ef",
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
        isExpanded: "isExpanded_bc7085",
        folderIcon: "folderIcon_bc7085",
        closedFolderIconWrapper: "closedFolderIconWrapper_bc7085",
        folderIconWrapper: "folderIconWrapper_bc7085",
        expandedFolderIconWrapper: "expandedFolderIconWrapper_bc7085",
        folder: "folder_bc7085",
        guildIcon: "guildIcon_bc7085",
        folderIconPreview: "folderIconPreview_bc7085",
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
      e.exports = {
        footer: "footer_d71945",
        gradient: "gradient_d71945",
        gradientHidden: "gradientHidden_d71945",
      };
    },
    491708: function (e, t, n) {
      e.exports = {
        pill: "pill_f9623d",
        downloadProgress: "downloadProgress_f9623d",
        tutorialContainer: "tutorialContainer_f9623d",
      };
    },
    31847: function (e, t, n) {
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
        folderIconContent: "folderIconContent_ae3d49",
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
    475731: function (e, t, n) {
      e.exports = {
        container: "container_b033ff",
        videoContainer: "videoContainer_b033ff",
        video: "video_b033ff",
        content: "content_b033ff",
      };
    },
    457900: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
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
  },
]);
//# sourceMappingURL=c2d92f52ebd9de179e27.js.map
