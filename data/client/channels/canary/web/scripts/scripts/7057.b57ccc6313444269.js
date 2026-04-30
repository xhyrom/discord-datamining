"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7057"],
  {
    696157(e, t, n) {
      n.d(t, { z9: () => eI, w_: () => ej, Ay: () => eb, th: () => ey });
      var l = n(627968),
        s = n(64700),
        i = n(503698),
        a = n.n(i),
        r = n(284009),
        o = n.n(r),
        c = n(936504),
        u = n(110259),
        d = n(837381),
        h = n(172218),
        m = n(612324),
        p = n(535185),
        f = n(148839),
        g = n(607399),
        A = n(17928),
        x = n(780645),
        C = n(990078),
        E = n(97808),
        v = n(939249),
        T = n(821609),
        j = n(952270),
        N = n(428678),
        _ = n(661531),
        S = n(549254),
        R = n(574553);
      function I(e) {
        let { as: t, muted: n = !1, selected: s = !1, className: i, ...r } = e,
          o = t ?? v.D;
        return (0, l.jsx)(o, {
          ...r,
          className: a()(R.bG, i, { [R.SU]: n, [R.wH]: s }),
        });
      }
      var y = n(778712),
        b = n(192308),
        M = n(789645),
        w = n(308528),
        O = n(442433),
        U = n(765671),
        D = n(960076),
        P = n(397244),
        k = n(714114),
        L = n(729551),
        F = n(709066),
        G = n(262295),
        B = n(620982),
        V = n(343328);
      let H = (0, n(945810).mj)({
        kind: "user",
        name: "2026-02-channel-wave-button",
        defaultConfig: { enabled: !1, showClose: !0 },
        variations: {
          1: { enabled: !0, showClose: !1 },
          2: { enabled: !0, showClose: !0 },
        },
      });
      var Q = n(963027),
        W = n(571694),
        z = n(47167),
        q = n(432222),
        Z = n(449582),
        K = n(351952),
        $ = n(88686),
        Y = n(174755),
        X = n(187322),
        J = n(586893);
      let ee = s.forwardRef(function (e, t) {
        let { className: n, focusProps: s, ...i } = e;
        return (0, l.jsx)(X.vN, {
          ...s,
          children: (0, l.jsx)("li", { className: a()(n, J.k), ...i, ref: t }),
        });
      });
      var et = n(824994),
        en = n(922301),
        el = n(368919),
        es = n(414808),
        ei = n(302005),
        ea = n(954376),
        er = n(534400),
        eo = n(854627),
        ec = n(616356),
        eu = n(290863),
        ed = n(222823),
        eh = n(994500),
        em = n(741961),
        ep = n(543465),
        ef = n(287809),
        eg = n(935208),
        eA = n(19575),
        ex = n(652215),
        eC = n(985018),
        eE = n(330076);
      let ev = eA.Ay.getEnableHardwareAcceleration() ? E.Js : E.eu,
        eT = { offset: { top: 2, bottom: 2, right: 4 } },
        ej = (e) => {
          let {
              nameplate: t,
              icon: n,
              forceShow: s = !1,
              reducedClickTarget: i = !1,
              visibleElementRef: r,
              ...o
            } = e,
            c = (0, K.K)(t);
          return (0, l.jsx)(v.D, {
            className: a()(eE.b, {
              [eE.DQ]: null != t,
              [eE.by]: s,
              [eE.wY]: i,
            }),
            style: c,
            ...o,
            focusProps: { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
            children: (0, l.jsx)("div", {
              ref: r,
              className: a()({ [eE.PJ]: null != t }),
              children: (0, l.jsx)(n, {
                size: "sm",
                color: "currentColor",
                className: a()(eE.ut, { [eE.Uq]: null != t }),
              }),
            }),
          });
        },
        eN = (e) => {
          let { onClick: t, channelName: n, showNameplate: s } = e,
            { enabled: i } = H.useConfig({ location: "Wave CTA" });
          return i
            ? (0, l.jsx)("div", {
                className: eE.KQ,
                children: (0, l.jsx)(C.m, {
                  text: eC.intl.formatToPlainString(eC.t.m0zYbV, {
                    username: n,
                  }),
                  children: (0, l.jsx)(T.$, {
                    size: "sm",
                    variant: s ? "overlay-secondary" : "secondary",
                    onClick: t,
                    text: eC.intl.string(eC.t.pVlP58),
                  }),
                }),
              })
            : null;
        },
        e_ = () =>
          (0, l.jsx)(j.G, {
            size: "xs",
            color: "currentColor",
            className: eE.wB,
          }),
        eS = () =>
          (0, l.jsx)(N.K, {
            size: "xs",
            color: "currentColor",
            className: eE.wB,
          });
      function eR(e) {
        let {
            eventTargetRef: t,
            isNitro: n,
            contentWidth: i,
            hoverGradientStart: a,
            hoverGradientMiddle: r,
            hoverGradientEnd: o,
          } = e,
          c = s.useMemo(
            () =>
              null != a && null != r && null != o
                ? {
                    Color_GradientCenter: a,
                    Color_InnerRing:
                      r ?? _.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? r,
                    Color_OuterRing: o,
                    NitroVFX: !1,
                  }
                : n
                  ? {
                      Color_GradientCenter:
                        _.A.colors.NITRO_TAB_GRADIENT_CENTER,
                      Color_InnerRing: _.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                      Color_OuterRing: _.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                      NitroVFX: !0,
                    }
                  : {
                      Color_GradientCenter:
                        _.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                      Color_InnerRing:
                        _.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                      Color_OuterRing:
                        _.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                      NitroVFX: !1,
                    },
            [n, a, r, o],
          );
        return (0, l.jsx)(S.U, {
          eventTargetRef: t,
          className: eE.a1,
          dataBinding: { ...c, DimmerWidth: (i ?? 0) + 32 },
        });
      }
      let eI = (e) => {
        let {
            route: t,
            selected: n,
            icon: i,
            iconClassName: r,
            interactiveClassName: o,
            text: u,
            children: d,
            locationState: h,
            onClick: m,
            className: p,
            role: f,
            "aria-posinset": A,
            "aria-setsize": x,
            listItemRef: C,
            showHoverGradient: E = !1,
            nitroHoverGradient: v = !1,
            hoverGradientStart: T,
            hoverGradientMiddle: j,
            hoverGradientEnd: N,
            ..._
          } = e,
          { width: S, ref: R } = (0, U.Ay)(),
          y = s.useRef(null),
          b = C ?? y;
        return (0, l.jsx)(ee, {
          className: a()(eE.Ix, { [eE.Ij]: g.Fr }, p),
          onClick: m,
          role: f,
          focusProps: { within: !0, ...eT },
          "aria-posinset": A,
          "aria-setsize": x,
          ref: b,
          children: (0, l.jsxs)(I, {
            as: "div",
            selected: n,
            className: a()(o, eE.bG, eE.$J, { [eE.Q2]: n }),
            children: [
              E &&
                (0, l.jsx)(eR, {
                  eventTargetRef: b,
                  isNitro: v,
                  contentWidth: S,
                  hoverGradientStart: T,
                  hoverGradientMiddle: j,
                  hoverGradientEnd: N,
                }),
              (0, l.jsxs)(c.N_, {
                to: { pathname: t, state: h },
                className: eE.nf,
                ..._,
                children: [
                  (0, l.jsx)(G.A, {
                    ref: E ? R : void 0,
                    muted: !1,
                    avatar: (0, l.jsx)(i, {
                      size: "refresh_sm",
                      className: a()(eE.e_, r),
                      color: "currentColor",
                    }),
                    name: u,
                    innerClassName: eE.xx,
                  }),
                  d,
                ],
              }),
            ],
          }),
        });
      };
      function ey(e) {
        let {
            channel: t,
            selected: i = !1,
            user: r,
            activities: g,
            applicationStream: C,
            voiceChannel: E,
            isTyping: v,
            status: T,
            isMobile: j,
            isVR: N,
            nameplate: _,
            ref: S,
            "aria-posinset": R,
            "aria-setsize": U,
          } = e,
          [k, Z] = s.useState(!1),
          [K, X] = s.useState(!1),
          [J, ec] = s.useState(!1),
          eu = s.useRef(null),
          [em, ef] = s.useState(!1),
          eg = (0, h.K)(
            s.useCallback((e) => {
              ef(e);
            }, []),
          ),
          eA = s.useRef(null),
          eR = S ?? eA,
          eI = (0, m.A)(eR, eg),
          { showMenuItemPopover: ey, markMenuItemPopoverAsDismissed: eb } = (0,
          ei.z)({
            location: "PrivateChannel",
            isChannelSelected: !0 === i,
            isTargetInViewport: em,
            channelType: t.type,
          }),
          {
            avatarSrc: eM,
            avatarDecorationSrc: ew,
            eventHandlers: eO,
          } = (0, eo.A)({
            userId: r?.id,
            size: y._3.SIZE_32,
            animateOnHover: !(i || k || K || J),
          }),
          [eU, eD] = s.useState({ maskImage: "none" }),
          eP = s.useRef(null),
          ek = t.isMultiUserDM(),
          eL = t.isSystemDM(),
          eF = !ek && !eL && t.type === ex.rbe.DM,
          eG = eF && r?.primaryGuild != null,
          eB = (0, A.bG)([ep.Ay], () =>
            ep.Ay.isChannelMuted(t.getGuildId(), t.id),
          ),
          { ignored: eV, blocked: eH } = (0, A.cf)([eh.A], () => ({
            ignored: eh.A.isIgnored(t.getRecipientId()),
            blocked: eh.A.isBlocked(t.getRecipientId()),
          })),
          eQ = eF && eV,
          eW = eF && eH,
          ez = (eB || eQ || eW) && !(i || k),
          eq = (0, A.bG)([ed.Ay], () => ed.Ay.getMentionCount(t.id) > 0),
          eZ = (0, z.Ay)(t),
          eK = s.useRef(null),
          e$ = null != _ && (i || k || J),
          eY = () => {
            Z(!0);
          },
          eX = () => {
            Z(!1);
          },
          eJ = () => {
            X(!0);
          },
          e0 = () => {
            X(!1);
          },
          e1 = function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()),
              w.A.closePrivateChannel(t.id, i, n);
          },
          e2 = () => {
            w.A.preload(ex.ME, t.id);
          },
          e3 = (e) => {
            e.stopPropagation();
          },
          e5 = (e) => {
            e.target === e.currentTarget && eu.current?.click();
          },
          e6 = (e) => {
            let s =
              "contextmenu" === e.type
                ? u.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
                : u.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
            ec(!0),
              t.isMultiUserDM()
                ? (0, O.L3)(
                    e,
                    async () => {
                      let { default: e } = await Promise.all([
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("91763"),
                        n.e("38730"),
                        n.e("34971"),
                        n.e("42339"),
                        n.e("12520"),
                        n.e("46149"),
                        n.e("53416"),
                        n.e("60200"),
                      ]).then(n.bind(n, 4027));
                      return (n) =>
                        (0, l.jsx)(e, { ...n, channel: t, selected: i });
                    },
                    {
                      impressionName: s,
                      noBlurEvent: !0,
                      onClose: () => ec(!1),
                    },
                  )
                : (0, O.L3)(
                    e,
                    async () => {
                      let { default: e } = await Promise.all([
                        n.e("98944"),
                        n.e("17546"),
                        n.e("80848"),
                        n.e("98042"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("55411"),
                        n.e("93103"),
                        n.e("8757"),
                        n.e("91763"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("91007"),
                        n.e("29787"),
                        n.e("88342"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("91994"),
                        n.e("38730"),
                        n.e("42451"),
                        n.e("98965"),
                        n.e("76665"),
                        n.e("35313"),
                        n.e("76273"),
                        n.e("36564"),
                        n.e("86169"),
                        n.e("34971"),
                        n.e("52229"),
                        n.e("792"),
                        n.e("45996"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("9291"),
                        n.e("38056"),
                        n.e("7059"),
                        n.e("8829"),
                        n.e("42339"),
                        n.e("98199"),
                        n.e("41175"),
                        n.e("60816"),
                        n.e("39778"),
                      ]).then(n.bind(n, 385913));
                      return (n) =>
                        (0, l.jsx)(e, {
                          ...n,
                          user: r,
                          channel: t,
                          channelSelected: i,
                        });
                    },
                    { impressionName: s, onClose: () => ec(!1) },
                  );
          },
          e8 = (e) => {
            e.preventDefault(), e.stopPropagation();
            let s = eC.intl.formatToPlainString(eC.t.hJ5Ap4, { name: eZ }),
              i = eC.intl.format(eC.t.SSIVOu, { name: eZ });
            t.isManaged() &&
              ((s = eC.intl.formatToPlainString(eC.t.hVGjEW, { name: eZ })),
              (i = eC.intl.format(eC.t.IK1Qvs, { name: eZ }))),
              (0, b.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("70588"),
                  n.e("37803"),
                ]).then(n.bind(n, 148166));
                return (t) =>
                  (0, l.jsx)(e, { title: s, body: i, onSubmit: e1, ...t });
              });
          },
          e4 = (0, l.jsx)(el.A, {
            userName: eZ,
            displayNameStyles: r?.displayNameStyles,
            effectDisplayType: k || i || J ? en.G.ANIMATED : en.G.PLAIN,
            loop: k,
            boldFontOpacity: 0.9,
          }),
          e9 = eG
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  e4,
                  (0, l.jsx)(er.Ay, {
                    primaryGuild: r?.primaryGuild,
                    userId: r?.id,
                    inline: !0,
                    disableGuildProfile: !0,
                    className: a()(eE.fc, { [eE.Y_]: ez }),
                  }),
                ],
              })
            : e4,
          e7 = s.useRef(null),
          te =
            (0, et.W)({ location: "PrivateChannel" }) &&
            r?.displayNameStyles != null,
          { isIncomingCall: tt, isOngoingCall: tn } = (0, B.A)(t.id),
          tl = [
            (0, Q.Ay)({
              channel: t,
              unread: eq,
              isIncomingCall: tt,
              isOngoingCall: tn,
            }),
            (0, Q.r2)({ channel: t, muted: eB, userStatus: T }),
          ]
            .filter(Boolean)
            .join(", "),
          ts = (0, A.bG)([ed.Ay], () => ed.Ay.lastMessageId(t.id)),
          { waveShouldShow: ti, wavePressed: ta } = (0, q.A)(t, ts),
          { showClose: tr } = H.useConfig({ location: "PrivateChannel" }),
          to = (0, f.A)(() => {
            let e = eP.current?.getBoundingClientRect() ?? null,
              t = e7.current?.getBoundingClientRect() ?? null;
            if (null == t || null == e || e.width + 44 - t.width <= 0)
              return void eD({ maskImage: "none" });
            let n = t.width - 16;
            eD({
              maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) ${n}px, rgba(0, 0, 0, 0))`,
            });
          });
        return (
          s.useLayoutEffect(to, [k, to]),
          (0, p.g)(eR, to),
          (0, l.jsx)(d.tG, {
            id: t.id,
            children: (e) => {
              let { role: n, ...s } = e;
              return (0, l.jsxs)(ee, {
                className: a()(eE.Ix, eE.dm),
                role: n,
                focusProps: { ...eT, focusTarget: eu, ringTarget: eR },
                ref: eI,
                onMouseEnter: eY,
                onMouseLeave: eX,
                onMouseDown: e2,
                onFocus: eJ,
                onBlur: e0,
                onContextMenu: e6,
                "aria-setsize": U,
                "aria-posinset": R,
                children: [
                  eq
                    ? (0, l.jsx)("div", {
                        className: a()(eE.dM, { [eE.SU]: ez }),
                      })
                    : null,
                  (0, l.jsxs)(I, {
                    className: a()(eE.bG, { [eE.Q2]: i || J }),
                    as: "div",
                    onClick: e5,
                    muted: ez,
                    selected: i,
                    children: [
                      (0, l.jsx)(Y.A, {
                        nameplate: e$ ? _ : void 0,
                        selected: i,
                        hovered: k,
                        content: e7,
                        placement: $.u.CHANNEL,
                      }),
                      (0, l.jsx)("div", {
                        className: eE.lU,
                        ref: eP,
                        children: e9,
                      }),
                      (0, l.jsx)(c.N_, {
                        style: eU,
                        innerRef: eu,
                        to: ex.BVt.CHANNEL(ex.ME, t.id),
                        className: eE.nf,
                        "aria-label": tl,
                        ...s,
                        children: (0, l.jsx)(G.A, {
                          ref: e7,
                          avatar: (() => {
                            let e = y._3.SIZE_32;
                            if (t.isMultiUserDM())
                              if (t.recipients.length >= 2 && null == t.icon)
                                return (0, l.jsx)(ea.A, {
                                  "aria-hidden": !0,
                                  recipients: t.recipients,
                                  size: e,
                                  isTyping: v,
                                  status: T,
                                });
                              else
                                return (0, l.jsx)(ev, {
                                  ...eO,
                                  src: (0, W.Y)(t),
                                  "aria-hidden": !0,
                                  size: e,
                                  status: v ? ex.clD.ONLINE : T,
                                  isTyping: v,
                                });
                            o()(
                              null != r,
                              "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                            );
                            let n = null;
                            return (
                              r.isSystemUser() ||
                                (n = (0, D.A)(g) ? ex.clD.STREAMING : T),
                              (0, l.jsx)(ev, {
                                ...eO,
                                size: y._3.SIZE_32,
                                src: eM,
                                avatarDecoration: ew,
                                status: n,
                                isMobile: j,
                                isVR: N,
                                isTyping: v,
                                "aria-label": r.username,
                                statusTooltip: !0,
                              })
                            );
                          })(),
                          highlighted: eq && !ez,
                          muted: ez,
                          subText: t.isSystemDM()
                            ? (0, l.jsx)("div", {
                                className: eE.W$,
                                children: (0, V.A)(t.id)
                                  ? eC.intl.string(eC.t.FL5T01)
                                  : eC.intl.string(eC.t.NnY5lc),
                              })
                            : t.isMultiUserDM()
                              ? (0, l.jsx)("div", {
                                  className: eE.W$,
                                  children: eC.intl.format(eC.t.CxSA5N, {
                                    members: t.recipients.length + 1,
                                  }),
                                })
                              : (0, P.A)({
                                    activities: g,
                                    status: T,
                                    applicationStream: C,
                                    voiceChannel: E,
                                  })
                                ? (0, l.jsx)(L.A, {
                                    user: r,
                                    activities: g,
                                    voiceChannel: E,
                                    applicationStream: C,
                                    animateEmoji: k || K || J,
                                    textClassName: eE.XD,
                                    iconClassName: ez ? eE.tG : void 0,
                                  })
                                : null,
                          name: (0, l.jsx)(x.A, {
                            className: a()(eE.uN, { [eE.e8]: te }),
                            children: e9,
                          }),
                          decorators: t.isSystemDM()
                            ? (0, l.jsx)(F.A, {
                                className: eE.G$,
                                type: F.A.Types.SYSTEM_DM,
                                verified: !0,
                              })
                            : null,
                          withDisplayNameStyles: te,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: a()(eE._q, { [eE.EY]: e$ }),
                        children: [
                          eQ ? (0, l.jsx)(e_, {}) : null,
                          eW ? (0, l.jsx)(eS, {}) : null,
                          ti && null != eZ
                            ? (0, l.jsx)(eN, {
                                channelName: eZ,
                                onClick: ta,
                                showNameplate: e$,
                              })
                            : null,
                          tr || !ti
                            ? (0, l.jsx)(ej, {
                                icon: M.P,
                                "aria-label": ek
                                  ? eC.intl.string(eC.t["26C4oi"])
                                  : eC.intl.string(eC.t.jsvgc3),
                                onClick: ek ? e8 : e1,
                                onMouseDown: e3,
                                nameplate: _,
                                reducedClickTarget: !0,
                                visibleElementRef: eK,
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                  ey &&
                    (0, l.jsx)(es.A, {
                      targetElementRef: eR,
                      markMenuItemPopoverAsDismissed: eb,
                    }),
                ],
              });
            },
          })
        );
      }
      let eb =
        21552 == n.j
          ? (e) => {
              let { channel: t, selected: n, ...s } = e,
                i = (0, A.bG)([ef.default], () =>
                  ef.default.getUser(t.getRecipientId()),
                ),
                a = i?.id,
                r = (0, A.cf)(
                  [eu.A, ec.A],
                  () => {
                    let e;
                    if (t.isMultiUserDM()) {
                      let n = eu.A.getState().statuses;
                      t.recipients.some((e) => n[e] === ex.clD.ONLINE) &&
                        (e = ex.clD.ONLINE);
                    } else null != a && (e = eu.A.getStatus(a));
                    return {
                      status: e,
                      activities: null != a ? eu.A.getActivities(a) : null,
                      applicationStream:
                        null != a ? ec.A.getAnyStreamForUser(a) : null,
                      isMobile: null != a && eu.A.isMobileOnline(a),
                      isVR: null != a && eu.A.isVROnline(a),
                    };
                  },
                  [t, a],
                ),
                { voiceChannel: o } = (0, k.A)({ userId: a }),
                c = (0, Z.r)({ user: i }),
                u = (0, A.bG)(
                  [ef.default, em.A],
                  () =>
                    t.isMultiUserDM()
                      ? eg.default
                          .keys(em.A.getTypingUsers(t.id))
                          .some((e) => e !== ef.default.getCurrentUser()?.id)
                      : null != i && em.A.isTyping(t.id, t.getRecipientId()),
                  [t, i],
                );
              return t.isMultiUserDM()
                ? (0, l.jsx)(ey, {
                    channel: t,
                    selected: n,
                    isTyping: u,
                    status: r.status === ex.clD.ONLINE ? ex.clD.ONLINE : void 0,
                    ...s,
                  })
                : (0, l.jsx)(ey, {
                    channel: t,
                    selected: n,
                    user: i,
                    voiceChannel: o,
                    isTyping: u,
                    nameplate: c,
                    ...s,
                    ...r,
                  });
            }
          : null;
    },
    620982(e, t, n) {
      n.d(t, { A: () => a });
      var l = n(17928),
        s = n(495544),
        i = n(470710);
      function a(e) {
        return (0, l.cf)([i.A, s.default], () => {
          let t = i.A.getCall(e),
            n = s.default.getId(),
            l = null != t && null != n && t.ringing.includes(n);
          return {
            isIncomingCall: l,
            isOngoingCall: i.A.isCallActive(e) && !l,
          };
        });
      }
    },
    414808(e, t, n) {
      n.d(t, { A: () => x });
      var l = n(627968),
        s = n(64700),
        i = n(17928),
        a = n(43105),
        r = n(403581),
        o = n(793574),
        c = n(688810),
        u = n(532794),
        d = n(181079),
        h = n(313281),
        m = n(49999),
        p = n(788868),
        f = n(335993),
        g = n(985018),
        A = n(988572);
      function x(e) {
        let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
          [x, C] = s.useState("top"),
          E = s.useRef(null),
          v = s.useRef(null),
          { hasAccess: T } = (0, h.TW)("FavoritesOnboardingMenuItemPopover"),
          { analyticsLocations: j } = (0, c.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
          N = (0, i.bG)([d.A], () => d.A.hasStoredFavorites());
        s.useLayoutEffect(() => {
          if (null == t.current) return;
          let e = () => {
            null == v.current &&
              (v.current = window.requestAnimationFrame(() => {
                (v.current = null),
                  (() => {
                    let e = t.current?.getBoundingClientRect();
                    if (null == e) return;
                    let n = E.current?.getBoundingClientRect().height ?? 0;
                    C(window.innerHeight - e.top < n ? "bottom" : "top");
                  })();
              }));
          };
          return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
              null != v.current &&
                (window.cancelAnimationFrame(v.current), (v.current = null)),
                window.removeEventListener("resize", e),
                window.removeEventListener("scroll", e, !0);
            }
          );
        }, [t]);
        let _ = s.useCallback(() => {
            n?.(m.i.TAKE_ACTION),
              T ||
                (0, u.A)({
                  subscriptionTier: p.pe.TIER_2,
                  analyticsLocations: j,
                });
          }, [n, j, T]),
          S = N ? f.default.TWuDTt : f.default["25YCHl"];
        return (0, l.jsx)(a.A, {
          targetElementRef: t,
          gradientColor: "nitro-pink",
          position: "right",
          alignmentStrategy: "edge",
          align: x,
          caretConfig: { align: "top" === x ? "start" : "end" },
          popoverRef: E,
          badge: { type: "beta", variant: "expressive" },
          graphic: { src: A.A, type: "image", aspectRatio: "16/9" },
          title: g.intl.string(T ? S : f.default.A3ZjbM),
          body: g.intl.string(T ? f.default.DFjrWw : f.default.qJUI2v),
          onRequestClose: () => n?.(m.i.USER_DISMISS),
          actions: T
            ? void 0
            : [
                {
                  icon: r.t,
                  text: g.intl.string(f.default["avps/2"]),
                  onClick: () => _(),
                  variant: "expressive",
                },
              ],
        });
      }
    },
    302005(e, t, n) {
      n.d(t, { z: () => h });
      var l = n(17928),
        s = n(554146),
        i = n(192308),
        a = n(826673),
        r = n(932001),
        o = n(309010),
        c = n(313281),
        u = n(652215);
      let d = new Set([
        u.rbe.DM,
        u.rbe.GROUP_DM,
        u.rbe.GUILD_TEXT,
        u.rbe.GUILD_ANNOUNCEMENT,
        u.rbe.GUILD_FORUM,
      ]);
      function h(e) {
        let {
            location: t,
            isChannelSelected: n,
            isTargetInViewport: u = !0,
            channelType: h,
            isPopoverAllowed: m = !0,
          } = e,
          p = (0, a.JZ)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
          { isExperimentEnabled: f } = (0, c.TW)(t),
          g = (0, l.bG)([o.A], () => null != o.A.getVoiceChannelId()),
          A = (0, i.useHasAnyModalOpen)(),
          x = f && u && n && d.has(h) && m && !g && !A,
          [C, E] = (0, r.kn)(
            x && p ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [],
          );
        return {
          showMenuItemPopover: C === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
          markMenuItemPopoverAsDismissed: E,
        };
      }
    },
    45780(e, t, n) {
      n.d(t, { G$: () => m, _$: () => f, hk: () => g, zs: () => h });
      var l = n(17928),
        s = n(554146),
        i = n(594061),
        a = n(617617),
        r = n(954571),
        o = n(460288),
        c = n(652215),
        u = n(49999),
        d = n(355097);
      function h(e, t) {
        let n = a.A.getDismissedGuildContent(t);
        return null != n && (0, o.c0)(n, e);
      }
      function m(e, t) {
        return (0, l.bG)([a.A], () => h(e, t));
      }
      function p(e, t, n, l, a) {
        (0, i.TG)(
          n,
          (l) => {
            let s = h(t, n);
            if ((e && s) || (!e && !s)) return !1;
            l.dismissedGuildContent = (e ? o.Vf : o.We)(
              l.dismissedGuildContent,
              t,
            );
          },
          e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
        ),
          l &&
            r.default.track(c.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
              type: s.V[t],
              guild_id: n,
              action: a ?? u.i.UNKNOWN,
            });
      }
      function f(e, t, n, l) {
        p(!0, e, t, n, l);
      }
      function g(e, t) {
        p(!1, e, t);
      }
    },
    832248(e, t, n) {
      n.d(t, { A: () => l });
      let l = (0, n(353640).v)(() => ({
        isOpen: null,
        shouldRenderTenureLevelUp: !1,
      }));
    },
    347853(e, t, n) {
      n.d(t, { A: () => r, D: () => o });
      var l = n(627968);
      n(64700);
      var s = n(192308),
        i = n(228366),
        a = n(573879);
      function r() {
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              n.e("40841"),
              n.e("84739"),
              n.e("79582"),
              n.e("28386"),
            ]).then(n.bind(n, 623161));
            return (t) => (0, l.jsx)(e, { ...t });
          },
          {
            onCloseCallback: () => {
              i.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.ov,
          },
        );
      }
      function o() {
        (0, s.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              n.e("40841"),
              n.e("56888"),
              n.e("16628"),
              n.e("48751"),
              n.e("25291"),
              n.e("73122"),
              n.e("8979"),
              n.e("4736"),
              n.e("89545"),
              n.e("72238"),
              n.e("90966"),
              n.e("19705"),
              n.e("57993"),
              n.e("57335"),
              n.e("1490"),
            ]).then(n.bind(n, 365225));
            return (t) => (0, l.jsx)(e, { ...t, onBackPressed: r });
          },
          {
            onCloseCallback: () => {
              i.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: a.Gl,
          },
        );
      }
    },
    42473(e, t, n) {
      n.d(t, { A: () => p });
      var l = n(627968),
        s = n(64700),
        i = n(503698),
        a = n.n(i),
        r = n(990078),
        o = n(614820),
        c = n(862482),
        u = n(781696),
        d = n(573435),
        h = n(270082);
      let m = s.forwardRef(function (e, t) {
          let {
              children: n,
              onContextMenu: s,
              onClick: i,
              onMouseDown: r,
              disabled: o,
              icon: u,
              iconForeground: m,
              innerClassName: p,
              className: f,
              redGlow: g,
              onMouseEnter: A,
              onMouseLeave: x,
              "aria-label": C,
              "aria-checked": E,
              role: v,
              plated: T,
            } = e,
            j =
              "function" == typeof u
                ? (0, l.jsx)(u, {
                    width: 20,
                    height: 20,
                    size: "custom",
                    colorClass: m ?? "",
                    color: "currentColor",
                  })
                : u;
          return (0, l.jsxs)(c.$n, {
            "data-migration-pending": !0,
            "aria-label": C,
            buttonRef: t,
            look: c.$n.Looks.BLANK,
            size: c.$n.Sizes.NONE,
            disabled: o,
            innerClassName: p,
            wrapperClassName: a()(h.x6, f),
            className: a()(h.x6, f, {
              [h.Xr]: g,
              [h.r9]: o,
              [h.Sn]: !o,
              [h.ZQ]: T,
              [h.OH]: g && T,
            }),
            onClick: (e) => {
              null != i && i(e);
            },
            onMouseDown: r,
            onMouseEnter: A,
            onMouseLeave: x,
            onContextMenu: s,
            role: v,
            "aria-checked": E,
            focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
            children: [
              null != n
                ? (0, l.jsx)(d.Ay, {
                    width: 20,
                    height: 20,
                    mask: d.Ay.Masks.PANEL_BUTTON,
                    children: j,
                  })
                : j,
              n,
            ],
          });
        }),
        p = s.forwardRef(function (e, t) {
          if (null == e.tooltipType) {
            let {
                tooltipText: n,
                tooltipForceOpen: s,
                tooltipShouldShow: i,
                tooltipPositionKey: a,
                "aria-label": c,
                ...u
              } = e,
              d = (0, o.O)(n),
              h = c ?? d;
            return (0, l.jsx)(r.m, {
              text: n,
              forceOpen: s,
              shouldShow: i,
              positionKey: a,
              ariaHidden: h === d,
              children: (0, l.jsx)(m, { ...u, "aria-label": h, ref: t }),
            });
          }
          {
            let {
              tooltipText: n,
              tooltipForceOpen: s,
              tooltipShouldShow: i,
              tooltipPositionKey: a,
              onClick: r,
              onMouseEnter: o,
              onMouseLeave: c,
              onContextMenu: d,
              onFocus: p,
              onBlur: f,
              "aria-label": g,
              ...A
            } = e;
            return (0, l.jsx)(u.ST, {
              "data-migration-pending": !0,
              tooltipClassName: h.RF,
              tooltipContentClassName: h.In,
              "aria-label": g,
              forceOpen: s,
              shouldShow: i,
              color: u.oM.GREEN,
              positionKeyStemOverride: a,
              text: n,
              children: (e) => {
                let {
                  onClick: n,
                  onMouseEnter: s,
                  onMouseLeave: i,
                  onContextMenu: a,
                  onFocus: u,
                  onBlur: h,
                  "aria-label": g,
                } = e;
                return (0, l.jsx)(m, {
                  onClick: (e) => {
                    n?.(), r?.(e);
                  },
                  onMouseEnter: () => {
                    s?.(), o?.();
                  },
                  onMouseLeave: () => {
                    i?.(), c?.();
                  },
                  onContextMenu: (e) => {
                    a?.(), d?.(e);
                  },
                  onFocus: () => {
                    u?.(), p?.();
                  },
                  onBlur: () => {
                    h?.(), f?.();
                  },
                  "aria-label": g,
                  ...A,
                  ref: t,
                });
              },
            });
          }
        });
    },
    994314(e, t, n) {
      n.d(t, { A: () => o });
      var l = n(627968);
      n(64700);
      var s = n(503698),
        i = n.n(s),
        a = n(834730),
        r = n(390041);
      function o(e) {
        let { children: t, className: n } = e;
        return (0, l.jsx)(a.E, {
          color: "none",
          className: i()(r.W, n),
          variant: "text-xs/medium",
          children: t,
        });
      }
    },
    485599(e, t, n) {
      n.d(t, { A: () => o });
      var l = n(627968);
      n(64700);
      var s = n(503698),
        i = n.n(s),
        a = n(834730),
        r = n(690602);
      function o(e) {
        let { children: t, className: n } = e;
        return (0, l.jsx)(a.E, {
          color: "none",
          className: i()(r.D, n),
          variant: "text-md/medium",
          children: t,
        });
      }
    },
    224196(e, t, n) {
      n.d(t, { g: () => sf, A: () => sx }), n(321073);
      var l = n(627968),
        s = n(64700),
        i = n(503698),
        a = n.n(i),
        r = n(735438),
        o = n.n(r),
        c = n(158390),
        u = n(17928),
        d = n(554146),
        h = n(451988),
        m = n(97808),
        p = n(778712),
        f = n(922016),
        g = n(939249),
        A = n(140735),
        x = n(312138);
      if (21552 == n.j) var C = n(192308);
      var E = n(442433),
        v = n(820284),
        T = n(717558),
        j = n(964486),
        N = n(220839),
        _ = n(397244),
        S = n(729551),
        R = n(925747),
        I = n(866323),
        y = n(449450);
      function b(e) {
        let { text: t } = e,
          n = (0, I.p)(t, {
            from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            config: { duration: 220, clamp: !0 },
          });
        return (0, l.jsx)("div", {
          className: y.k,
          children: n((e, t) =>
            (0, l.jsx)(R.animated.div, {
              className: y.H,
              style: e,
              children: t,
            }),
          ),
        });
      }
      var M = n(29160),
        w = n(793574),
        O = n(688810),
        U = n(521502),
        D = n(380610),
        P = n(313961),
        k = n(18235),
        L = n(183184),
        F = n(384059),
        G = n(480890),
        B = n(601255),
        V = n(562819),
        H = n(449582),
        Q = n(351952),
        W = n(88686),
        z = n(174755),
        q = n(302223),
        Z = n(609425),
        K = n(922301),
        $ = n(368919),
        Y = n(643501),
        X = n(534514),
        J = n(834730),
        ee = n(789645),
        et = n(826673),
        en = n(750506),
        el = n(780964),
        es = n(858897),
        ei = n(417146),
        ea = n(552122),
        er = n(717421),
        eo = n(775602),
        ec = n(993843);
      let eu = { mass: 10, tension: 550, friction: 140 };
      function ed(e) {
        let { className: t, pageMultiplier: n } = e,
          i = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
          [r, c] = s.useState({ x: 0, y: 0 }),
          d = s.useMemo(
            () =>
              o().throttle((e) => {
                i ||
                  c({
                    x: (window.innerWidth - e.pageX * n) / 90,
                    y: (window.innerHeight - e.pageY * n) / 90,
                  });
              }, 20),
            [n, i],
          );
        s.useEffect(
          () => (
            window.addEventListener("mousemove", d),
            () => window.removeEventListener("mousemove", d)
          ),
          [d],
        );
        let [h, m] = (0, er.z)(() => ({ x: 0, y: 0, config: eu }));
        return (
          s.useEffect(() => {
            m({ x: r.x, y: r.y });
          }, [r.x, r.y, m]),
          (0, l.jsx)(R.animated.div, {
            style: {
              transform: (0, R.to)(
                [h.x, h.y],
                (e, t) => `translate3d(${e}px, ${t}px, 0)`,
              ),
            },
            className: a()(ec.T, t),
          })
        );
      }
      var eh = n(49999),
        em = n(985018),
        ep = n(275883);
      function ef(e) {
        let {
            dismissibleContent: t,
            backgroundColor: n,
            specialTextColor: s,
          } = e,
          i = ea.A.useIsEligible(),
          a = (0, et.JZ)(t),
          r = null != n,
          o = null != s ? { color: s } : void 0,
          { analyticsLocations: c } = (0, O.Ay)(w.A.HOLIDAY_COACHMARK),
          u = (e) => {
            (0, et.Dr)(t, { dismissAction: e });
          },
          d = () => {
            (0, es.openUserSettings)(el.X.NOTIFICATIONS_PANEL, {
              analyticsLocations: c,
            }),
              u(eh.i.TAKE_ACTION);
          };
        return i && !a
          ? (0, l.jsx)(en.Ay, {
              children: (0, l.jsxs)("div", {
                className: ep.iE,
                style: { backgroundColor: r ? n : void 0 },
                children: [
                  !r &&
                    (0, l.jsxs)("div", {
                      className: ep.o5,
                      children: [
                        (0, l.jsx)(ed, { className: ep.iL, pageMultiplier: 5 }),
                        (0, l.jsx)("div", { className: ep.Np }),
                      ],
                    }),
                  (0, l.jsx)("div", { className: ep.c8 }),
                  (0, l.jsxs)("div", {
                    className: ep.Qs,
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(X.D, {
                            variant: "heading-md/bold",
                            color: null != o ? void 0 : "always-white",
                            style: o,
                            children: em.intl.string(em.t["6CxPoB"]),
                          }),
                          (0, l.jsx)(J.E, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: em.intl.format(em.t.IVzJ8G, {
                              settingsHook: (e, t) =>
                                (0, l.jsx)(
                                  g.D,
                                  {
                                    tag: "span",
                                    className: ep.nf,
                                    style: o,
                                    onClick: d,
                                    children: e,
                                  },
                                  t,
                                ),
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)(g.D, {
                        className: ep.l2,
                        onClick: () => u(eh.i.USER_DISMISS),
                        children: (0, l.jsx)(ee.P, {
                          color: "currentColor",
                          size: "xs",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      function eg() {
        return null == ei.A.coachmarkDismissibleContent
          ? null
          : (0, l.jsx)(ef, {
              dismissibleContent: ei.A.coachmarkDismissibleContent,
              backgroundColor: ei.A.coachmarkBackgroundColor,
              specialTextColor: ei.A.coachmarkSpecialTextColor,
            });
      }
      var eA = n(74848),
        ex = n(607399),
        eC = n(707554),
        eE = n(224640),
        ev = n(305866),
        eT = n(364522),
        ej = n(22231),
        eN = n(133171),
        e_ = n(780338);
      if (21552 != n.j) var C = n(192308);
      var eS = n(550079),
        eR = n(26137),
        eI = n(473935),
        ey = n(765671),
        eb = n(395332),
        eM = n(176781),
        ew = n(777666),
        eO = n(320448),
        eU = n(993401),
        eD = n(447349);
      function eP(e) {
        return (0, l.jsx)("div", {
          className: eD.wE,
          children: (0, l.jsx)(eS.W, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e,
          }),
        });
      }
      function ek(e) {
        let {
            action: t,
            onClick: n,
            icon: i,
            label: a,
            sublabel: r,
            trailing: o,
            renderSubmenu: c,
            ref: u,
          } = e,
          d = null != n,
          h = (0, eU.rE)({ action: t, onClick: n }),
          [m, p] = s.useState(!1),
          A = s.useRef(null),
          x = u ?? A,
          E = null != c,
          v = E && d,
          T = { offset: { top: -8, left: -8, right: -8, bottom: -8 } },
          j = s.useCallback(() => {
            p(!0);
          }, []),
          N = s.useCallback(() => {
            (0, C.hasAnyModalOpen)() || p(!1);
          }, []),
          _ = () =>
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className: eD.iA,
                  children: (0, l.jsx)(i, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: eD.$H,
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)(J.E, {
                          color: "currentColor",
                          variant: "text-sm/medium",
                          className: eD.W1,
                          children: a,
                        }),
                        (0, l.jsx)(J.E, {
                          color: "currentColor",
                          variant: "text-xs/medium",
                          children: r,
                        }),
                      ],
                    }),
                    o,
                  ],
                }),
              ],
            }),
          S = (e) => {
            let t;
            return (
              (t = v
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(g.D, {
                        className: eD.ef,
                        onClick: h,
                        focusProps: { offset: { ...T.offset, right: 0 } },
                        children: _(),
                      }),
                      (0, l.jsx)(g.D, {
                        className: eD.ap,
                        "aria-label": em.intl.string(em.t.PdRCRg),
                        ...e,
                        onClick: j,
                        focusProps: T,
                        children: (0, l.jsx)(eO._, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  })
                : E
                  ? (0, l.jsxs)(g.D, {
                      className: eD.ef,
                      ...e,
                      onClick: j,
                      focusProps: T,
                      children: [
                        _(),
                        (0, l.jsx)("div", {
                          className: eD.ap,
                          children: (0, l.jsx)(eO._, {
                            size: "xs",
                            color: "currentColor",
                          }),
                        }),
                      ],
                    })
                  : (0, l.jsx)(g.D, {
                      className: eD.ef,
                      onClick: h,
                      focusProps: T,
                      children: _(),
                    })),
              (0, l.jsx)("div", { ref: x, className: eD.jG, children: t })
            );
          };
        return E
          ? (0, l.jsx)("li", {
              className: eD.j$,
              onMouseEnter: j,
              onMouseLeave: N,
              children: (0, l.jsx)(f.Y, {
                targetElementRef: x,
                spacing: 0,
                renderPopout: c,
                shouldShow: m,
                onRequestClose: N,
                children: S,
              }),
            })
          : (0, l.jsx)("li", { className: eD.j$, children: S() });
      }
      function eL(e) {
        let { children: t, "aria-label": n } = e;
        return (0, l.jsx)("ul", { "aria-label": n, children: t });
      }
      var eF = n(734066),
        eG = n(274372),
        eB = n(710315),
        eV = n(271597),
        eH = n(990078),
        eQ = n(315710),
        eW = n(475358),
        ez = n(408278),
        eq = n(625903),
        eZ = n(404778),
        eK = n(821609),
        e$ = n(532624),
        eY = n(927813),
        eX = n(975571),
        eJ = n(879631),
        e0 = n(350535),
        e1 = n(372684),
        e2 = n(572164),
        e3 = n(399925),
        e5 = n(890856),
        e6 = n(609174),
        e8 = n(353605),
        e4 = n(434320),
        e9 = n(82716),
        e7 = n(585579),
        te = n(226870),
        tt = n(285072),
        tn = n(316305);
      let tl = s.memo(function (e) {
        let { clip: t, isNew: n, onClose: i, className: r } = e,
          [o, c] = s.useState(!1),
          u = s.useCallback(() => c(!0), []),
          d = s.useCallback(() => c(!1), []),
          h = s.useCallback(() => {
            i?.(), (0, eV.p)({ initialEditingClipId: t.id });
          }, [t.id, i]);
        return (0, l.jsx)(e6.Cl, {
          clip: t,
          children: (0, l.jsx)(e5.s, {
            "aria-label": em.intl.string(em.t.bt75uw),
            onClick: h,
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: u,
            onBlur: d,
            className: a()(tn.Z1, r),
            children: (0, l.jsxs)(te.d, {
              isPlaying: !1,
              preload: "metadata",
              children: [
                n &&
                  (0, l.jsx)(ew.Lp, {
                    className: tn.Ad,
                    text: em.intl.string(em.t.y2b7CA),
                  }),
                (0, l.jsxs)(tt.h, {
                  isVisible: o,
                  className: tn.Lw,
                  children: [
                    (0, l.jsxs)("div", {
                      className: tn.mY,
                      children: [(0, l.jsx)(e9.z, {}), (0, l.jsx)(e8.k, {})],
                    }),
                    (0, l.jsxs)("div", {
                      className: tn.E_,
                      children: [
                        (0, l.jsx)(e4.f, {
                          variant: "primary",
                          onBeforeEdit: i,
                        }),
                        (0, l.jsx)("div", {
                          className: tn.OI,
                          children: (0, l.jsx)(e7.E, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      });
      var ts = n(652215),
        ti = n(753070),
        ta = n(16590),
        tr = n(550350);
      function to(e) {
        let {
            onOpenGallery: t,
            onOpenSettings: n,
            onClose: i,
            setPopoutRef: a,
          } = e,
          r = (0, u.yK)([eG.A], () => eG.A.getClips()),
          o = (0, u.bG)([eG.A], () => eG.A.getPendingClips()),
          c = (0, u.bG)([eG.A], () => eG.A.getSettings()),
          d = (0, u.bG)([eG.A], () => eG.A.getNewClipIds()),
          h = (0, u.bG)([e$.Ay], () =>
            e$.Ay.getKeybindForAction(ts.hCu.SAVE_CLIP),
          ),
          m = s.useRef(null),
          p = s.useMemo(() => {
            let e = [...o, ...r].filter(
              (e) => e.type === e1.nQ.CLIP && "" !== e.thumbnail,
            );
            return e.sort((e, t) => t.createdAt - e.createdAt), e;
          }, [r, o]),
          f = s.useMemo(() => p.slice(0, 16), [p]),
          g = p.length > 16,
          A = null != h ? e0.dI(h.shortcut, !0) : null;
        (0, eQ.t)(m);
        let x = (0, eJ.$)(c.clipsLength / eY.A.Millis.SECOND),
          C = (0, ti.zr)(c.clipsQuality.resolution),
          E = em.intl.formatToPlainString(em.t.Qb44XH, {
            fps: c.clipsQuality.frameRate,
          });
        return (0, l.jsxs)("div", {
          ref: (e) => {
            (m.current = e), a?.(e);
          },
          className: tr.SW,
          role: "dialog",
          "aria-label": em.intl.string(em.t.z2jK6X),
          children: [
            (0, l.jsxs)("div", {
              className: tr.wx,
              children: [
                (0, l.jsxs)("div", {
                  className: tr.$,
                  children: [
                    (0, l.jsx)(X.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: em.intl.string(em.t.z2jK6X),
                    }),
                    null != A &&
                      (0, l.jsx)(eW.e, { className: tr.P, shortcut: A }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: tr.$s,
                  children: [
                    (0, l.jsx)(eH.m, {
                      text: em.intl.string(em.t["3D5yo/"]),
                      children: (0, l.jsx)(ez.K, {
                        onClick: () => n(),
                        icon: eq.Z,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": em.intl.string(em.t["3D5yo/"]),
                      }),
                    }),
                    (0, l.jsx)(eH.m, {
                      text: em.intl.string(ta.default["55C2MH"]),
                      children: (0, l.jsx)(ez.K, {
                        onClick: () => t(),
                        icon: eM.x,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": em.intl.string(ta.default["55C2MH"]),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(J.E, {
              variant: "text-sm/medium",
              color: "text-muted",
              className: tr.P6,
              children: [x, C, E].join(" • "),
            }),
            (0, l.jsx)(eZ.c, {}),
            f.length > 0
              ? (0, l.jsxs)(eT.Ip, {
                  className: tr.Vg,
                  fade: !0,
                  children: [
                    f.map((e) =>
                      (0, l.jsx)(
                        tl,
                        { clip: e, isNew: d.includes(e.id), onClose: i },
                        e.id,
                      ),
                    ),
                    g &&
                      (0, l.jsx)("div", {
                        className: tr.qr,
                        children: (0, l.jsx)(eK.$, {
                          onClick: () => t(),
                          text: em.intl.string(ta.default["55C2MH"]),
                          variant: "secondary",
                          size: "sm",
                        }),
                      }),
                  ],
                })
              : (0, l.jsx)(tc, { keybindString: A }),
          ],
        });
      }
      function tc(e) {
        let { keybindString: t } = e,
          n = (0, e2.Et)(),
          i = s.useCallback(() => {
            window.open(
              eX.A.getArticleURL(ts.MVz.CLIPS),
              "_blank",
              "noopener,noreferrer",
            );
          }, []),
          a = s.useCallback(() => {
            e3.yO({ clipsEnabled: !0, trackAnalytics: !0 });
          }, []);
        return (0, l.jsxs)("div", {
          className: tr.p$,
          children: [
            (0, l.jsx)(eM.x, {
              size: "lg",
              color: "currentColor",
              className: tr.Dw,
            }),
            (0, l.jsx)(J.E, {
              variant: "text-md/medium",
              color: "text-default",
              className: tr.qO,
              children: em.intl.string(ta.default.mjfghy),
            }),
            n
              ? null != t &&
                (0, l.jsx)(J.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  className: tr.CZ,
                  children: em.intl.format(ta.default.y4zC7j, {
                    protipHook: (e) =>
                      (0, l.jsx)(
                        J.E,
                        {
                          variant: "text-sm/medium",
                          color: "text-feedback-positive",
                          tag: "span",
                          children: e,
                        },
                        "protip",
                      ),
                    keybind: (0, l.jsx)(eW.e, { shortcut: t }),
                  }),
                })
              : (0, l.jsxs)("div", {
                  className: tr.pi,
                  children: [
                    (0, l.jsx)(eK.$, {
                      onClick: i,
                      text: em.intl.string(em.t.hvVgAZ),
                      variant: "secondary",
                      size: "sm",
                    }),
                    (0, l.jsx)(eK.$, {
                      onClick: a,
                      text: em.intl.string(em.t.h8rgrK),
                      variant: "primary",
                      size: "sm",
                    }),
                  ],
                }),
          ],
        });
      }
      function tu(e) {
        let { onClose: t } = e,
          n = (0, eF.sw)(),
          { userStatusMenu: i } = eB.$.useConfig({
            location: "ClipsUserStatusMenuItem",
          }),
          a = (0, u.bG)([eG.A], () => eG.A.getNewClipIds().length),
          r = s.useCallback(
            (e) => {
              t(), (0, eV.p)({ initialEditingClipId: e });
            },
            [t],
          ),
          o = s.useCallback(() => {
            t(), (0, es.openUserSettings)(el.X.CLIPS_PANEL);
          }, [t]);
        return n && i
          ? (0, l.jsx)(ek, {
              action: "PRESS_CLIPS",
              icon: eM.x,
              label: em.intl.string(em.t.z2jK6X),
              trailing: a > 0 ? (0, l.jsx)(ew.hV, { count: a }) : null,
              onClick: () => r(),
              renderSubmenu: (e) =>
                (0, l.jsx)(to, {
                  ...e,
                  onOpenGallery: r,
                  onOpenSettings: o,
                  onClose: t,
                }),
            })
          : null;
      }
      var td = n(480335),
        th = n(31956),
        tm = n(361628),
        tp = n(744808),
        tf = n(282389),
        tg = n(713517),
        tA = n(645507),
        tx = n(970931),
        tC = n(832248),
        tE = n(462887),
        tv = n(736653),
        tT = n(439174),
        tj = n(927578),
        tN = n(112848),
        t_ = n(788868);
      function tS() {
        let e = (0, tN.Xb)(),
          t = (0, tj.nK)();
        if (null == e || !t) return null;
        let n = new Date().getTime();
        for (let t = t_.sp.length - 1; t >= 0; t--) {
          let l = t_.VD[t_.sp[t]],
            s = new Date(e);
          if (
            (s.setMonth(e.getMonth() + l.tenureReqNumMonths),
            s.setHours(s.getHours() + 30),
            n > s.getTime())
          )
            if (n - s.getTime() < 6048e5) return l.id;
            else break;
        }
        return null;
      }
      let tR = {
          [t_.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: " #D76C1F, #F79C53",
            light: " #8E2A0B, #D4681C",
          },
          [t_.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: " #8F9E9E, #C0CBD1",
            light: " #53555F, #697979",
          },
          [t_.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: " #ED8200, #FFCE46",
            light: " #744400, #CC7000",
          },
          [t_.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: " #36AAFF, #7BE7CB",
            light: " #006394, #0089EB",
          },
          [t_.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: " #8670FF, #C2BDFF",
            light: " #5423CC, #8670FF",
          },
          [t_.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: " #009423, #67FF33",
            light: " #005C15, #009E25",
          },
          [t_.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: " #E83068, #FF8F70",
            light: " #881141, #DD1852",
          },
          [t_.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: " #829AE8, #DDB4FF, #A2D6FF",
            light: " #6881D4, #956CB8, #5491A0",
          },
        },
        tI = {
          [t_.Ac.PREMIUM_TENURE_1_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
            light:
              "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
          },
          [t_.Ac.PREMIUM_TENURE_3_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
            light:
              "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
          },
          [t_.Ac.PREMIUM_TENURE_6_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
            light:
              "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
          },
          [t_.Ac.PREMIUM_TENURE_12_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
            light:
              "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
          },
          [t_.Ac.PREMIUM_TENURE_24_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
            light:
              "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
          },
          [t_.Ac.PREMIUM_TENURE_36_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
            light:
              "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
          },
          [t_.Ac.PREMIUM_TENURE_60_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
            light:
              "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
          },
          [t_.Ac.PREMIUM_TENURE_72_MONTH]: {
            dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
            light:
              "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
          },
        };
      var ty = n(682165);
      let tb = s.lazy(() =>
        Promise.all([n.e("15323"), n.e("24832")]).then(n.bind(n, 748579)),
      );
      function tM() {
        let e = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
          t = (0, tC.A)((e) => e.shouldRenderTenureLevelUp),
          n = (function () {
            let e = tS(),
              t = (0, tE.M)((0, tv.Ay)());
            if (null == e) return null;
            let n = tR[e],
              l = tI[e],
              s = {
                currentBadge: (0, tT.e0)(e),
                currentBadgeTextGradient: t ? n?.dark : n?.light,
                levelUpVideoSrc: t ? l?.dark : l?.light,
              },
              i = t_.sp.indexOf(e);
            if (i > 0) {
              let e = t_.sp[i - 1],
                n = tR[e];
              (s.prevBadge = (0, tT.e0)(e)),
                (s.prevBadgeTextGradient = t ? n?.dark : n?.light);
            }
            return s;
          })();
        return e || !t || null == n ? null : (0, l.jsx)(tw, { levelUpData: n });
      }
      function tw(e) {
        let { levelUpData: t } = e,
          n = s.useRef(null),
          i = s.useCallback(() => {
            tC.A.setState({ shouldRenderTenureLevelUp: !1 });
          }, []);
        return (
          s.useEffect(() => i, [i]),
          (0, l.jsx)(eQ.O, {
            containerRef: n,
            children: (0, l.jsxs)("div", {
              className: ty.i,
              children: [
                (0, l.jsx)("div", {
                  className: ty.b,
                  children: (0, l.jsx)(eH.m, {
                    text: em.intl.string(em.t.cpT0Cq),
                    children: (0, l.jsx)(ez.K, {
                      icon: ee.P,
                      variant: "secondary",
                      size: "sm",
                      onClick: i,
                      "aria-label": em.intl.string(em.t.cpT0Cq),
                    }),
                  }),
                }),
                (0, l.jsx)(s.Suspense, {
                  fallback: null,
                  children: (0, l.jsx)(tb, { levelUpData: t }),
                }),
              ],
            }),
          })
        );
      }
      var tO = n(206835),
        tU = n(183555),
        tD = n(999291),
        tP = n(975732),
        tk = n(718019),
        tL = n(694720),
        tF = n(915614),
        tG = n(744753),
        tB = n(559506),
        tV = n(646986),
        tH = n(349419),
        tQ = n(946356),
        tW = n(878555),
        tz = n(624479),
        tq = n(206845),
        tZ = n(957565),
        tK = n(427262),
        t$ = n(962352);
      function tY(e) {
        let { user: t, isVisible: n } = e,
          { trackUserProfileAction: s } = (0, tU.NJ)();
        return tZ.p5
          ? (0, l.jsx)(tq.A, {
              text: em.intl.string(em.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: tK.Ay.getUserTag(t, {
                decoration: "never",
                identifiable: "always",
              }),
              onCopy: () => s({ action: "COPY_USERNAME" }),
              children: (e) =>
                (0, l.jsx)(g.D, {
                  ...e,
                  className: a()(t$.c, { [t$.R]: n }),
                  "aria-label": em.intl.string(em.t.y5MwJy),
                  children: (0, l.jsx)(tz.T, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
            })
          : null;
      }
      var tX = n(983495),
        tJ = n(442228),
        t0 = n(253932),
        t1 = n(290863),
        t2 = n(351906),
        t3 = n(562153),
        t5 = n(661531),
        t6 = n(477782),
        t8 = n(628284),
        t4 = n(695366),
        t9 = n(363195),
        t7 = n(889227),
        ne = n(287809),
        nt = n(954571),
        nn = n(429707),
        nl = n(274303),
        ns = n(994125),
        ni = n(347853),
        na = n(335020),
        nr = n(43105),
        no = n(704824),
        nc = n(46225),
        nu = n(429913),
        nd = n(379848),
        nh = n(633075),
        nm = n(735321),
        np = n(667049),
        nf = n(606758),
        ng = n(495544),
        nA = n(403362),
        nx = n(518477);
      function nC(e) {
        let { targetElementRef: t, onClose: n } = e,
          [i, a] = s.useState(!1),
          { trackUserProfileEditAction: r } = (0, tU.NJ)(),
          o = (0, u.bG)([ng.default], () => ng.default.getId()),
          c = (function () {
            let e,
              t,
              n = (0, u.bG)([ng.default], () => ng.default.getId()),
              l = (0, np.A)(n),
              i = s.useMemo(() => l.filter((e) => e instanceof nh.R), [l]),
              a =
                ((e = (0, eb.VA)({
                  location:
                    "UserProfileAccountPopoutApplicationWidgetCoachmark",
                })),
                s.useMemo(
                  () => e?.filter((e) => e.isEligibleForEditProfileUpsell()),
                  [e],
                )),
              r = s.useMemo(() => a?.map((e) => e.applicationId) ?? [], [a]),
              o = ((t = (0, nu.A)(r)), s.useMemo(() => t.filter(nA.Vq), [t])),
              { tokens: c, fetched: d } = (0, no.j)(r),
              h = (0, nc.U9)(o);
            return s.useMemo(() => {
              if (null == a || null == c || !d) return null;
              let e = [],
                t = [];
              for (let n of a) {
                let l = c.find((e) => e.application.id === n.applicationId),
                  s = i.find((e) => e.applicationId === n.applicationId),
                  a = o.find((e) => e.id === n.applicationId),
                  r = h.find(
                    (e) => e.context.application.id === n.applicationId,
                  );
                if (null == a) return null;
                null != l && null == s
                  ? e.push({
                      type: "linked",
                      config: n,
                      application: a,
                      dismissibleContent: n.editProfileLinkedDc,
                    })
                  : null == l &&
                    r?.preferredFlow != null &&
                    t.push({
                      type: "unlinked",
                      config: n,
                      application: a,
                      dismissibleContent: n.editProfileUnlinkedDc,
                      authFlow: r.preferredFlow,
                    });
              }
              return [...e, ...t];
            }, [a, c, d, i, o, h]);
          })(),
          { analyticsLocations: d } = (0, O.Ay)();
        return null == c || 0 === c.length
          ? null
          : (0, l.jsx)(nd.Ay, {
              contentTypes: c.map((e) => e.dismissibleContent),
              children: (e) => {
                let { visibleContent: s, markAsDismissed: u } = e,
                  h = c.find((e) => e.dismissibleContent === s);
                if (null == h) return null;
                let m = "linked" === h.type,
                  p = () =>
                    (0, tP.openUserProfileModal)({
                      userId: o,
                      tabSection: nx.RP.WIDGETS,
                    }).then(() => {
                      u(eh.i.TAKE_ACTION), n();
                    });
                return (0, l.jsx)(nr.A, {
                  targetElementRef: t,
                  position: "right",
                  gradientColor: "blue",
                  graphic:
                    null != h.config.editProfileUpsellImage
                      ? { type: "image", src: h.config.editProfileUpsellImage }
                      : void 0,
                  title: em.intl.format(em.t.TXDztH, {
                    applicationName: h.application.name,
                  }),
                  body: m
                    ? em.intl.string(em.t["63Kso0"])
                    : em.intl.string(em.t.HwXoeC),
                  onRequestClose: () => u(eh.i.USER_DISMISS),
                  actions: [
                    m
                      ? {
                          text: em.intl.string(em.t.VSLDly),
                          onClick: () => {
                            a(!0),
                              p()
                                .then(() => {
                                  let e;
                                  return (
                                    (e = new nh.R({
                                      applicationId: h.application.id,
                                    })),
                                    void ((0, nm.Y5)(e),
                                    r({
                                      action: "WIDGET_ADDED",
                                      ...e.getProfileEditAnalyticsOptions(),
                                    }),
                                    (0, nf.XA)(nx.jM.WIDGET_ADDED))
                                  );
                                })
                                .finally(() => a(!1));
                          },
                          loading: i,
                        }
                      : {
                          text: em.intl.string(em.t["DSJi3+"]),
                          onClick: () => {
                            h.authFlow.initiate({
                              onConfirm: () => {
                                a(!0), p().finally(() => a(!1));
                              },
                              analyticsLocations: d,
                            });
                          },
                          loading: i,
                        },
                  ],
                });
              },
            });
      }
      var nE = n(461213),
        nv = n(818348),
        nT = n(466573);
      function nj() {
        let e = (0, u.bG)([nE.A], () => nE.A.getStatus()),
          t = (0, tK.MU)(e) ?? "",
          n = e === nv.cl.INVISIBLE || e === nv.cl.OFFLINE;
        return (0, l.jsxs)("div", {
          className: nT.k,
          children: [
            (0, l.jsxs)(A.A, {
              tag: "div",
              children: [em.intl.string(em.t.AHoLf4), ":"],
            }),
            t,
            t.length > 0 &&
              n &&
              (0, l.jsx)(eH.m, {
                text: em.intl.string(em.t.L99HQm),
                children: (0, l.jsx)(t4.E, {
                  size: "xs",
                  color: t5.A.colors.STATUS_WARNING,
                  "aria-label": em.intl.string(em.t.L99HQm),
                }),
              }),
          ],
        });
      }
      var nN = n(841595);
      let n_ = (0, n(945810).mj)({
        name: "2025-12-social-layer-storefront-wishlist-user-account-popout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
      });
      var nS = n(501838),
        nR = n(760716),
        nI = n(915089),
        ny = n(13808);
      function nb(e) {
        let {
            markAsDismissed: t,
            heading: n,
            subheading: i,
            children: r,
            height: o,
            className: c,
            contentClassName: u,
          } = e,
          d = (0, nI.GV)(),
          h = s.useRef(null),
          m = (0, er.z)({
            from: { transform: "translate3d(-110%, 0, 0)", height: o },
            to: { transform: "translate3d(0, 0, 0)", height: o },
            config: { mass: 1, stiffness: 100, damping: 15 },
            onRest: () => {
              null != h.current && h.current.focus();
            },
          });
        return (0, l.jsx)(R.animated.div, {
          className: a()(ny.kL, c),
          style: m,
          children: (0, l.jsxs)("aside", {
            "aria-labelledby": d,
            className: ny.Qs,
            children: [
              (0, l.jsxs)("div", {
                className: ny.U1,
                children: [
                  (0, l.jsx)(g.D, {
                    innerRef: h,
                    "aria-label": em.intl.string(em.t.WAI6xu),
                    className: ny.b,
                    onClick: () => {
                      t(eh.i.USER_DISMISS);
                    },
                    children: (0, l.jsx)(ee.P, { color: "currentColor" }),
                  }),
                  (0, l.jsx)(X.D, {
                    id: d,
                    variant: "heading-lg/semibold",
                    children: n,
                  }),
                ],
              }),
              null != i &&
                (0, l.jsx)(J.E, {
                  variant: "text-md/normal",
                  color: "text-subtle",
                  children: i,
                }),
              (0, l.jsx)(eT.Ip, {
                className: ny.XG,
                fade: !0,
                children: (0, l.jsx)("div", {
                  className: a()(ny.gT, u),
                  children: r,
                }),
              }),
            ],
          }),
        });
      }
      var nM = n(973912),
        nw = n(871123),
        nO = n(44724),
        nU = n(501573);
      function nD() {
        (0, nO.default)({ guildId: (0, nw.zf)() });
      }
      function nP(e) {
        let {
            profileUserId: t,
            handleOpenUserProfileModal: n,
            markAsDismissed: s,
          } = e,
          { analyticsLocations: i } = (0, O.Ay)([
            w.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL,
          ]);
        return null == t
          ? null
          : (0, l.jsxs)(nb, {
              heading: em.intl.string(em.t["vy/61K"]),
              subheading: em.intl.string(em.t.tEee9t),
              markAsDismissed: s,
              className: nU.Zj,
              contentClassName: nU.hQ,
              height: 560,
              children: [
                (0, l.jsx)(nM.A, {
                  userId: t,
                  analyticsLocations: i,
                  handleOpenUserProfileModal: n,
                  numWishlistItemsToRecommend: 9,
                  className: nU.KN,
                }),
                (0, l.jsx)("div", {
                  className: nU.UD,
                  children: (0, l.jsx)(eK.$, {
                    variant: "primary",
                    fullWidth: !0,
                    text: em.intl.string(em.t.rg9FQp),
                    onClick: nD,
                  }),
                }),
              ],
            });
      }
      function nk(e) {
        let { displayProfile: t, handleOpenUserProfileModal: n, height: i } = e,
          a = (function (e) {
            let { location: t } = e,
              n = (function (e) {
                let { location: t } = e;
                return n_.useConfig({ location: t }).enabled;
              })({ location: t }),
              l = (0, u.bG)([ne.default], () => ne.default.getCurrentUser()),
              i = (0, u.bG)([nN.A], () =>
                null != l ? nN.A.getFirstWishlistId(l.id) : null,
              ),
              a = (0, nR.i)((e) => e.recommendationApplicationIds),
              o = (0, nS.rY)(),
              c = (0, nS.qx)();
            return s.useMemo(
              () =>
                null != a || (null == i && n)
                  ? (0, r.uniq)([...(a ?? []), ...c, ...o]).sort()
                  : [],
              [n, i, c, o, a],
            );
          })({ location: "AccountProfilePopoutUpsell" }),
          o = s.useMemo(() => {
            let e = [];
            return (
              a.length > 0 &&
                e.push(d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
              e
            );
          }, [a]);
        return (0, l.jsx)(nd.Ay, {
          contentTypes: o,
          bypassAutoDismiss: !0,
          children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == i
              ? null
              : s === d.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                ? (0, l.jsx)(nP, {
                    profileUserId: t?.userId,
                    handleOpenUserProfileModal: n,
                    markAsDismissed: a,
                  })
                : null;
          },
        });
      }
      var nL = n(146901),
        nF = n(827827);
      let nG = [
          {
            duration: 15 * eY.A.Millis.MINUTE,
            label: () => em.intl.string(em.t["8ot6gv"]),
          },
          {
            duration: eY.A.Millis.HOUR,
            label: () => em.intl.string(em.t.UMWBZr),
          },
          {
            duration: 8 * eY.A.Millis.HOUR,
            label: () => em.intl.string(em.t.EpAXPC),
          },
          {
            duration: eY.A.Millis.DAY,
            label: () => em.intl.string(em.t["755t4q"]),
          },
          {
            duration: 3 * eY.A.Millis.DAY,
            label: () => em.intl.string(em.t["f3/1ch"]),
          },
          { duration: void 0, label: () => em.intl.string(em.t["46dqJY"]) },
        ],
        nB = "forever";
      function nV(e) {
        let { status: t, currentStatus: n, description: s } = e,
          i = t !== ts.clD.ONLINE,
          a = (0, l.jsx)(l.Fragment, {
            children: nG.map((e) => {
              let { duration: s, label: i } = e;
              return (0, l.jsx)(
                t6.Dr,
                {
                  id: `${t}-${s}`,
                  label: i(),
                  action: () =>
                    (0, nF.A)({
                      nextStatus: t,
                      prevStatus: n,
                      durationMillis: s,
                    }),
                  dontCloseOnAction: !0,
                },
                s ?? nB,
              );
            }),
          });
        return (0, l.jsx)(t6.Dr, {
          id: t,
          keepItemStyles: !0,
          hasSubmenu: i,
          label: (0, tK.MU)(t),
          subtext: s,
          iconLeft: () => (0, l.jsx)(eN.nW, { status: t, size: 10 }),
          leadingAccessory: { type: "status", status: t },
          action: () => {
            (0, nF.A)({ nextStatus: t, prevStatus: n });
          },
          dontCloseOnAction: !0,
          children: i ? a : void 0,
        });
      }
      function nH(e) {
        if (null == e || "0" === e) return;
        let { kind: t, dateString: n, timeString: l } = (0, nL._)(e);
        return "today" === t
          ? em.intl.formatToPlainString(em.t.ZxxHIO, { timeString: l })
          : em.intl.formatToPlainString(em.t["9OFjSe"], {
              dateString: n,
              timeString: l,
            });
      }
      var nQ = n(996988),
        nW = n(656884);
      function nz(e) {
        let t,
          n,
          i,
          r,
          o,
          c,
          d,
          h,
          f,
          {
            currentUser: g,
            onClose: x,
            setPopoutRef: E,
            highlightBadge: v,
            openedAt: T,
            className: j,
          } = e,
          N = __OVERLAY__,
          _ = (0, tD.Ay)(g.id, void 0),
          { analyticsLocations: S } = (0, O.Ay)(
            w.A.USER_PROFILE_ACCOUNT_POPOUT,
          ),
          R = (0, tU.pb)({
            layout: "ACCOUNT_POPOUT",
            userId: g.id,
            guildId: void 0,
          }),
          { ref: I, height: y } = (0, ey.Ay)(),
          { isHoveringOrFocusing: b, isHovering: M } = (0, tg.A)(I);
        s.useEffect(() => {
          E?.(I.current);
        }, [I, E]),
          s.useEffect(
            () => (
              tC.A.setState({ isOpen: !0 }), () => tC.A.setState({ isOpen: !1 })
            ),
            [],
          );
        let U = (0, u.bG)([t1.A], () => t1.A.getStatus(g.id)),
          D = nH(t0.CY.useSetting()),
          P = (0, u.bG)([t2.A], () => t2.A.hidePersonalInformation),
          k = (0, tx.kB)(),
          L = t0.Q_.useSetting(),
          F =
            ((t = t0.CY.useSetting()),
            (n = (0, tx.kB)()),
            (i = t0.Jr.useSetting()),
            (r = (e) => {
              let l = nH(t);
              if (U === e && null != l) return l;
              switch (e) {
                case ts.clD.DND:
                  return n
                    ? em.intl.string(em.t.day5A6)
                    : em.intl.string(em.t["tq/fMK"]);
                case ts.clD.INVISIBLE:
                  return em.intl.string(em.t.zPc6Mc);
                default:
                  return;
              }
            }),
            (o = (0, l.jsx)(l.Fragment, {
              children: nG.map((e) => {
                let { duration: t, label: n } = e;
                return (0, l.jsx)(
                  t6.Dr,
                  {
                    id: `${U}-${t}`,
                    label: n(),
                    action: () => {
                      (0, tx.ES)(!0, t);
                    },
                    dontCloseOnAction: !0,
                  },
                  t ?? nB,
                );
              }),
            })),
            (c = nV({ status: ts.clD.ONLINE, currentStatus: U })),
            (d = nV({
              status: ts.clD.IDLE,
              currentStatus: U,
              description: r(ts.clD.IDLE),
            })),
            (h = nV({
              status: ts.clD.DND,
              currentStatus: U,
              description: r(ts.clD.DND),
            })),
            (f = nV({
              status: ts.clD.INVISIBLE,
              currentStatus: U,
              description: r(ts.clD.INVISIBLE),
            })),
            (0, l.jsxs)(l.Fragment, {
              children: [
                c,
                (0, l.jsx)(t6.bX, {}, "menu-separator-statuses"),
                d,
                h,
                f,
                n
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(t6.bX, {}, "menu-separator-statuses"),
                        (0, l.jsx)(
                          t6.Dr,
                          {
                            id: "quiet-mode",
                            "aria-label": "focus mode",
                            keepItemStyles: !0,
                            hasSubmenu: !0,
                            label: em.intl.string(em.t.gJRnwK),
                            iconLeft: e_.a,
                            leadingAccessory: { type: "icon", icon: e_.a },
                            badge: { text: em.intl.string(em.t.ApAu9f) },
                            subtext:
                              null != i && "0" !== i
                                ? em.intl.format(em.t.BWD8fs, {
                                    endTime: new Date(Number(i)).toLocaleString(
                                      em.intl.currentLocale,
                                      {
                                        month: "numeric",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit",
                                      },
                                    ),
                                  })
                                : em.intl.string(em.t["Br1q+x"]),
                            action: () => {
                              (0, tx.ES)(!n);
                            },
                            dontCloseOnAction: !0,
                            children: o,
                          },
                          "quiet-mode",
                        ),
                      ],
                    })
                  : null,
              ],
            })),
          G = (function (e) {
            let t = (0, u.bG)([ne.default], () => ne.default.getCurrentUser()),
              n = (0, u.bG)([t2.A], () => t2.A.hidePersonalInformation),
              s = (0, u.bG)([t9.A], () => (0, tE.M)(t9.A.theme)),
              { multiAccountUsers: i } = (0, ns.K)(),
              a = i.map((i) => {
                let a = new t7.A(i),
                  r = a.id === t?.id,
                  o = i.tokenStatus === nl.U.INVALID,
                  c = n ? null : `#${a.discriminator}`;
                return (0, l.jsx)(
                  t6.Dr,
                  {
                    id: a.id,
                    focusedClassName: na.in,
                    void_label: (e) => {
                      let { isFocused: t } = e;
                      return (0, l.jsxs)("div", {
                        className: na.ci,
                        children: [
                          (0, l.jsx)(m.eu, {
                            src: a.getAvatarURL(void 0, 40),
                            size: p._3.SIZE_24,
                            "aria-label": i.username,
                          }),
                          (0, l.jsxs)("div", {
                            className: na.DD,
                            children: [
                              (0, l.jsx)(J.E, {
                                className: na.gE,
                                variant: "text-sm/normal",
                                children: tK.Ay.getUserTag(a, {
                                  mode: "username",
                                  identifiable: n ? "never" : "always",
                                }),
                              }),
                              !a.hasUniqueUsername() &&
                                (0, l.jsx)(J.E, {
                                  className: na.df,
                                  variant: "text-sm/normal",
                                  children: c,
                                }),
                            ],
                          }),
                          r &&
                            (0, l.jsx)(t8.y, {
                              size: "sm",
                              color: t
                                ? t5.A.unsafe_rawColors.WHITE.css
                                : t5.A.unsafe_rawColors.BRAND_500.css,
                              secondaryColor:
                                (t && s) || (t && !s)
                                  ? t5.A.unsafe_rawColors.BRAND_500.css
                                  : t5.A.unsafe_rawColors.WHITE.css,
                              className: na.s0,
                            }),
                          o &&
                            (0, l.jsx)(t4.E, {
                              color: t5.A.unsafe_rawColors.RED_400.css,
                              secondaryColor:
                                (t && s) || (t && !s)
                                  ? t5.A.unsafe_rawColors.BRAND_500.css
                                  : t5.A.unsafe_rawColors.WHITE.css,
                              size: "xs",
                              className: na.s0,
                            }),
                        ],
                      });
                    },
                    action: () => {
                      if ((e?.(), o)) (0, ni.A)();
                      else {
                        var n;
                        (n = a.id) !== t?.id &&
                          (nt.default.track(
                            ts.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT,
                            { location: { section: ts.JJy.USER_PROFILE } },
                          ),
                          nn.Mx(n));
                      }
                    },
                  },
                  a.id,
                );
              });
            return (
              a.push(
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(t6.bX, {}),
                    (0, l.jsx)(t6.Dr, {
                      id: "manage-accounts",
                      label: em.intl.string(em.t.WbFpq4),
                      action: () => {
                        e?.(), (0, ni.A)();
                      },
                    }),
                  ],
                }),
              ),
              a
            );
          })(x),
          B = (0, tO.A)({ analyticsLocations: S }),
          V = (0, tj.TW)(g),
          H = s.useRef(null),
          Q = s.useRef(null),
          W = (0, tm.A)(_?.profileFrame?.skuId, "UserProfileAccountPopout"),
          z = (0, tf.A)(_?.profileFrame?.skuId);
        (0, th.A)({
          skuId: _?.profileFrame?.skuId,
          openedAt: T,
          context: R,
          analyticsLocations: S,
        });
        let q = s.useRef((0, tC.A)((e) => e.shouldRenderTenureLevelUp)),
          Z = s.useMemo(() => (0, tA.A)(), []),
          [K, $] = s.useState(!0);
        s.useEffect(() => {
          setTimeout(() => {
            $(!1);
          }, 500);
        }, []);
        let Y = (e) => {
            x?.(),
              (0, tP.openUserProfileModal)({
                customStatusPrompt: Z,
                sourceAnalyticsLocations: S,
                ...R,
                ...e,
              });
          },
          X = _?.widgets != null && _.widgets.length > 0,
          ee = s.useCallback(() => {
            x();
          }, [x]),
          et = s.useCallback(() => {
            B(), ee();
          }, [B, ee]),
          en = (0, eb.QR)({ location: "UserProfileAccountPopout" }),
          el = (0, eb.zd)({ location: "UserProfileAccountPopout" }),
          es = s.useId();
        return (0, l.jsx)(O.f5, {
          value: S,
          children: (0, l.jsx)(tU.of, {
            value: R,
            openedAt: T,
            fetchStartedAt: _?.fetchStartedAt,
            fetchEndedAt: _?.fetchEndedAt,
            isLoaded: _?.isLoaded,
            children: (0, l.jsxs)(ev.l, {
              ref: I,
              "aria-labelledby": es,
              className: a()(eD.jC, z, j),
              "data-layer": "base",
              children: [
                (0, l.jsx)(A.A, {
                  children: (0, l.jsx)(eC.H, {
                    id: es,
                    children: em.intl.string(em.t["5fWB8U"]),
                  }),
                }),
                (0, l.jsxs)(eC.F, {
                  children: [
                    (0, l.jsx)(nk, {
                      displayProfile: _,
                      handleOpenUserProfileModal: Y,
                      height: y,
                    }),
                    (0, l.jsxs)(tQ.A, {
                      className: eD.BK,
                      user: g,
                      displayProfile: _,
                      themeType: nQ.d.POPOUT,
                      children: [
                        (0, l.jsxs)("div", {
                          className: nW.wx,
                          children: [
                            (0, l.jsx)(tF.A, {
                              user: g,
                              displayProfile: _,
                              themeType: nQ.d.POPOUT,
                            }),
                            (0, l.jsx)(tk.A, {
                              user: g,
                              displayProfile: _,
                              themeType: nQ.d.POPOUT,
                              onOpenProfile: N ? void 0 : Y,
                            }),
                            (0, l.jsx)(tX.A, {
                              ref: H,
                              user: g,
                              themeType: nQ.d.POPOUT,
                              onCloseProfile: x,
                              prompt: Z,
                            }),
                          ],
                        }),
                        (0, l.jsxs)(eT.Ip, {
                          className: eD.rf,
                          style: { pointerEvents: K ? "none" : void 0 },
                          children: [
                            (0, l.jsx)(tB.A, { userId: g.id }),
                            (0, l.jsx)(tW.Ay, {
                              className: eD.eF,
                              user: g,
                              displayName: t3.Ay.getName(void 0, null, g),
                              onClickName: N ? void 0 : Y,
                              displayNameTrailing: (0, l.jsx)(tY, {
                                user: g,
                                isVisible: b,
                              }),
                              pronouns: _?.pronouns,
                              trailing: (0, l.jsx)(tL.A, {
                                displayProfile: _,
                                themeType: nQ.d.POPOUT,
                                onClose: x,
                                shouldOpenBadgeTooltip:
                                  null != v ? (e) => e === v : void 0,
                                shouldGlowTenureBadge: q.current,
                              }),
                            }),
                            (0, l.jsx)(tG.A, {
                              isPremiumUser: V,
                              onInteraction: x,
                            }),
                            (0, l.jsx)(tJ.A, {
                              user: g,
                              bio: _?.bio,
                              hidePersonalInformation: P,
                              onClose: x,
                            }),
                            X &&
                              (0, l.jsx)(tH.A, {
                                user: g,
                                widgets: _?.widgets,
                                onOpenUserProfileModal: Y,
                              }),
                            (0, l.jsx)(tV.A, {
                              user: g,
                              currentUser: g,
                              onOpenUserProfileModal: Y,
                              onClose: x,
                            }),
                            (0, l.jsxs)("div", {
                              className: eD.T_,
                              children: [
                                (0, l.jsx)(tQ.A.Overlay, {
                                  className: eD.g0,
                                  children: (0, l.jsxs)(eL, {
                                    children: [
                                      (0, l.jsx)(ek, {
                                        action: "EDIT_PROFILE",
                                        label: em.intl.string(em.t.s5vZlQ),
                                        icon: ej.R,
                                        onClick: et,
                                        ref: Q,
                                      }),
                                      (0, l.jsx)(ek, {
                                        action: "PRESS_SET_STATUS",
                                        label: (0, l.jsx)(nj, {}),
                                        sublabel: null != D && D,
                                        icon: () =>
                                          (0, l.jsx)(eN.nW, {
                                            status: U,
                                            size: 12,
                                          }),
                                        trailing:
                                          (k || U === ts.clD.DND) &&
                                          (0, l.jsx)(e_.a, { size: "xxs" }),
                                        renderSubmenu: ex.Fr
                                          ? void 0
                                          : (e) => {
                                              let { closePopout: t } = e;
                                              return (0, l.jsx)(eP, {
                                                navId: "set-status-submenu",
                                                className: eD.hQ,
                                                "aria-label": em.intl.string(
                                                  em.t.E13trI,
                                                ),
                                                onClose: t,
                                                children: F,
                                              });
                                            },
                                        onClick: ex.Fr
                                          ? () => {
                                              x(),
                                                (0, C.openModalLazy)(
                                                  () =>
                                                    new Promise((e) =>
                                                      e((e) => {
                                                        let {
                                                          onClose: t,
                                                          ...n
                                                        } = e;
                                                        return (0, l.jsx)(
                                                          eE.d,
                                                          {
                                                            onClose: t,
                                                            ...n,
                                                            size: "sm",
                                                            "aria-label":
                                                              em.intl.string(
                                                                em.t["3Uj+2p"],
                                                              ),
                                                            children: (0,
                                                            l.jsx)(eS.W, {
                                                              "data-menu-migrated":
                                                                !0,
                                                              navId:
                                                                "set-status-submenu-mobile-web",
                                                              variant: "fixed",
                                                              "aria-label":
                                                                em.intl.string(
                                                                  em.t.E13trI,
                                                                ),
                                                              hideScroller: !0,
                                                              onClose: t,
                                                              onSelect: void 0,
                                                              children: F,
                                                            }),
                                                          },
                                                        );
                                                      }),
                                                    ),
                                                );
                                            }
                                          : void 0,
                                      }),
                                      (0, l.jsx)(tu, { onClose: x }),
                                    ],
                                  }),
                                }),
                                (0, l.jsx)(tQ.A.Overlay, {
                                  className: eD.g0,
                                  children: (0, l.jsxs)(eL, {
                                    children: [
                                      (0, l.jsx)(ek, {
                                        action: "PRESS_SWITCH_ACCOUNTS",
                                        icon: eR.r,
                                        label: em.intl.string(em.t.oMNyYN),
                                        onClick: () => {
                                          x(), (0, ni.A)();
                                        },
                                        renderSubmenu: (e) => {
                                          let { closePopout: t } = e;
                                          return (0, l.jsx)(eP, {
                                            navId: "switch-accounts-submenu",
                                            "aria-label": em.intl.string(
                                              em.t.wFhVqL,
                                            ),
                                            onClose: t,
                                            children: G,
                                          });
                                        },
                                      }),
                                      !__OVERLAY__ &&
                                        tZ.p5 &&
                                        L &&
                                        (0, l.jsx)(ek, {
                                          action: "COPY_USER_ID",
                                          icon: eI.L,
                                          label: em.intl.string(em.t["/AXYnE"]),
                                          onClick: () => {
                                            (0, tZ.C)(g.id), x();
                                          },
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        _?.profileEffect != null &&
                          !q.current &&
                          (0, l.jsx)(td.A, {
                            skuId: _.profileEffect.skuId,
                            isHovering: M,
                          }),
                        null != W && (0, l.jsx)(tp.A, { frame: W }),
                      ],
                    }),
                    en && el
                      ? (0, l.jsx)(nC, { targetElementRef: Q, onClose: x })
                      : null,
                    (0, l.jsx)(tM, {}),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var nq = n(201805),
        nZ = n(655116),
        nK = n(21973),
        n$ = n(454719),
        nY = n(342296),
        nX = n(533488),
        nJ = n(167579),
        n0 = n(173660),
        n1 = n(51760),
        n2 = n(763827),
        n3 = n(499156),
        n5 = n(731854);
      let n6 = 2.5 * eY.A.Millis.SECOND,
        n8 = +eY.A.Millis.HOUR;
      var n4 = n(205693),
        n9 = n(485296);
      let n7 = 3 * eY.A.Millis.SECOND,
        le = +eY.A.Millis.DAY;
      var lt = n(616356),
        ln = n(734057),
        ll = n(629016),
        ls = n(186111),
        li = n(967198),
        la = n(486020),
        lr = n(625494),
        lo = n(536194),
        lc = n(19575),
        lu = n(994314),
        ld = n(485599),
        lh = n(626584),
        lm = n(531685),
        lp = n(259065),
        lf = n(864386);
      let lg = new lh.A("DisplayNameStylesCoachmark");
      function lA(e) {
        let { markAsDismissed: t, targetElementRef: n, children: i } = e,
          { analyticsLocations: a } = (0, O.Ay)(),
          r = (0, s.useRef)(null),
          o = (0, u.bG)([lm.A], () => lm.A.isFocused()),
          c = (0, s.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
              (0, es.openUserSettings)(
                el.X.PROFILE_PANEL,
                { analyticsLocations: a },
                () => {
                  (0, lp.L)({ analyticsLocations: a });
                },
              );
          }, [t, a]),
          d = (0, s.useCallback)(() => {
            t(eh.i.USER_DISMISS);
          }, [t]);
        return (
          (0, s.useEffect)(() => {
            o && r.current?.paused
              ? r.current?.play().catch(lg.error)
              : o || r.current?.pause();
          }, [o]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              i,
              (0, l.jsx)(nr.A, {
                targetElementRef: n,
                shouldShow: !0,
                onRequestClose: d,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: "nitro-pink",
                graphic: {
                  type: "video",
                  ref: r,
                  src: "https://cdn.discordapp.com/assets/content/5d90dc1e412ad3aa0b39088fba382025e32b718d7bf5d797512be9701b5f53b4.webm",
                  aspectRatio: "21/9",
                  loop: !0,
                },
                size: "lg",
                title: em.intl.string(lf.default["1AE464"]),
                body: [
                  em.intl.string(lf.default.cNc1g9),
                  em.intl.string(em.t["4JNXHG"]),
                ],
                actions: [
                  {
                    text: em.intl.string(em.t.uw9zI7),
                    variant: "primary",
                    onClick: c,
                  },
                ],
              }),
            ],
          })
        );
      }
      var lx = n(932001),
        lC = n(45780),
        lE = n(696451),
        lv = n(71393),
        lT = n(685073),
        lj = n(228366);
      let lN = { lastSeenInfos: {} },
        l_ = lN;
      class lS extends u.Ay.PersistedStore {
        static displayName = "GuildTagChangedCoachmarkStore";
        static persistKey = "GuildTagChangedCoachmarkStore";
        initialize(e) {
          l_ = e ?? lN;
        }
        getState() {
          return l_;
        }
        getGuildLastSeenInfo(e) {
          return l_.lastSeenInfos[e] ?? null;
        }
      }
      let lR = new lS(lj.h, {
        GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
          let { guildId: t, lastSeenInfo: n } = e;
          l_.lastSeenInfos[t] = n;
        },
        LOGOUT: function () {
          l_ = lN;
        },
      });
      var lI = n(116833),
        ly = n(514661);
      let lb = new lh.A("GuildTagAvailableCoachmark");
      function lM(e) {
        let t = (0, u.bG)([lv.A], () => lv.A.getGuild(e.guildId));
        function n(n) {
          t?.profile?.tag != null &&
            lj.h.dispatch({
              type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
              guildId: t.id,
              lastSeenInfo: { tag: t.profile.tag },
            }),
            e.onDismiss?.(n);
        }
        let {
          isAdopting: s,
          onAdoptTag: i,
          onEditProfile: a,
        } = (0, ly.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
        if (null == t || !(0, lT.q0)(t))
          return (
            lb.error(
              "GuildTagChangedCoachmark rendered without guildId for a guild with tags.",
            ),
            e.children
          );
        let r = [
          {
            text: em.intl.string(em.t.jwEaiX),
            loading: s,
            onClick: i,
            variant: "primary",
          },
          {
            text: em.intl.string(em.t.s5vZlQ),
            onClick: a,
            variant: "secondary",
          },
        ];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            e.children,
            (0, l.jsx)(nr.A, {
              targetElementRef: e.targetElementRef,
              shouldShow: !0,
              position: "top",
              graphic: {
                type: "dynamic",
                component: lI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                props: { guildId: t.id, guildProfile: t.profile },
              },
              title: em.intl.formatToPlainString(em.t["m/Tc3n"], {
                guildName: t.name,
              }),
              body: em.intl.string(em.t.DrAXIr),
              actions: r,
              size: "md",
              onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
          ],
        });
      }
      function lw(e) {
        let t = (0, u.bG)([lv.A], () => lv.A.getGuild(e.guildId));
        function n(t) {
          e.onDismiss?.(t);
        }
        let {
          isAdopting: s,
          onAdoptTag: i,
          onEditProfile: a,
        } = (0, ly.A)(t?.id ?? null, () => n(eh.i.TAKE_ACTION));
        if (null == t || !(0, lT.q0)(t))
          return (
            lb.error(
              "GuildTagAvailableCoachmark rendered without guildId for a guild with tags.",
            ),
            e.children
          );
        let r = [
          {
            text: em.intl.string(em.t.jwEaiX),
            loading: s,
            onClick: i,
            variant: "primary",
          },
          {
            text: em.intl.string(em.t.s5vZlQ),
            onClick: a,
            variant: "secondary",
          },
        ];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            e.children,
            (0, l.jsx)(nr.A, {
              targetElementRef: e.targetElementRef,
              shouldShow: !0,
              position: "top",
              graphic: {
                type: "dynamic",
                component: lI.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                props: { guildId: t.id, guildProfile: t.profile },
              },
              title: em.intl.formatToPlainString(em.t.VFqnyU, {
                guildName: t.name,
              }),
              body: em.intl.string(em.t.DrAXIr),
              actions: r,
              size: "md",
              onRequestClose: () => n(eh.i.USER_DISMISS),
            }),
          ],
        });
      }
      var lO = n(904481),
        lU = n(764231),
        lD = n(425713);
      function lP(e) {
        let { groupName: t, targetElementRef: n } = e,
          s = tS(),
          i = (0, u.bG)([eo.A], () => eo.A.useReducedMotion),
          a = (0, tC.A)((e) => e.isOpen),
          r = (0, lO.G)();
        return i || null == s || a || r
          ? null
          : (0, l.jsx)(nd.zJ, {
              contentType: d.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 12096e5 },
              groupName: t,
              children: (e) => {
                let { visibleContent: t, markAsDismissed: i } = e;
                return (0, l.jsx)(lk, {
                  recentlyLeveledTenureBadge: s,
                  markAsDismissed: i,
                  targetElementRef: n,
                  shouldShow: t === d.M.NITRO_TENURE_BADGE_LEVEL_UP,
                });
              },
            });
      }
      function lk(e) {
        let {
            recentlyLeveledTenureBadge: t,
            markAsDismissed: n,
            targetElementRef: i,
            shouldShow: a,
          } = e,
          r = t_.sp.indexOf(t),
          o = (0, lD.I)(t_.sp[r > 0 ? r - 1 : r]).ambient,
          c = (0, s.useCallback)(() => {
            n(eh.i.TAKE_ACTION),
              tC.A.setState({ shouldRenderTenureLevelUp: !0 }),
              lr._.dispatch(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
          }, [n]),
          u = (0, s.useCallback)(() => {
            n(eh.i.USER_DISMISS);
          }, [n]),
          d = t_.VD[t],
          h = em.intl.formatToPlainString(em.t.ewkaVR, {
            timeMilestone: (0, lU.T)(
              d.id,
              d.tenureReqNumMonths,
            )?.toLocaleLowerCase(),
          }),
          m = [
            {
              text: em.intl.string(em.t.RzWDqY),
              variant: "primary",
              onClick: c,
            },
          ];
        return (0, l.jsx)(nr.A, {
          targetElementRef: i,
          onRequestClose: u,
          shouldShow: a,
          caretConfig: { align: "center" },
          graphic:
            null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
          size: "lg",
          title: em.intl.string(em.t.VoDxsV),
          body: h,
          actions: m,
        });
      }
      function lL(e) {
        let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, nq.c9)(),
          s = null != e.targetElementRef.current && t && n,
          [i, a] = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { shouldShow: n = !0 } = t,
              l = (0, lC.G$)(d.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? ts.dJq),
              s = (0, u.bG)(
                [lv.A, ne.default, lE.Ay],
                () => {
                  if (null === e) return !1;
                  let t = lv.A.getGuild(e);
                  if (
                    void 0 === t ||
                    !(0, lT.Rg)(t) ||
                    null == t.profile ||
                    null === t.profile.tag
                  )
                    return !1;
                  let n = ne.default.getCurrentUser();
                  if (
                    void 0 === n ||
                    (n.primaryGuild?.identityGuildId === t.id &&
                      n.primaryGuild?.tag === t.profile.tag)
                  )
                    return !1;
                  let l = lE.Ay.getMember(e, n.id);
                  return null != l && !l.isPending;
                },
                [e],
              );
            return (0, lx.ww)(
              s && n && !l ? [d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [],
              e ?? ts.eGj,
            );
          })(e.guildId, { shouldShow: s }),
          [r, o] = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { shouldShow: n = !0 } = t,
              l = e?.primaryGuild,
              s = l?.identityGuildId ?? null,
              i = (0, u.bG)([lR], () =>
                null === s ? null : lR.getGuildLastSeenInfo(s),
              ),
              a = (0, u.bG)([lv.A], () => lv.A.getGuild(s)?.profile?.tag),
              r = null != a && l?.identityGuildId === s && l?.tag === null,
              o = null != s && i?.tag === a,
              c = null !== s && r && !o;
            return (0, lx.Wl)(c && n ? d.M.GUILD_TAG_UPDATED_COACHMARK : null, {
              cooldownDurationMs: 864e5,
            });
          })(e.currentUser, { shouldShow: s });
        return s
          ? i === d.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
            ? (0, l.jsx)(lw, {
                guildId: e.guildId,
                onDismiss: a,
                targetElementRef: e.targetElementRef,
                children: e.children,
              })
            : r === d.M.GUILD_TAG_UPDATED_COACHMARK
              ? (0, l.jsx)(lM, {
                  guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
                  onDismiss: o,
                  targetElementRef: e.targetElementRef,
                  children: e.children,
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(lP, {
                      groupName: eh.m.ACCOUNT_NAME_ZONE,
                      targetElementRef: e.targetElementRef,
                    }),
                    (0, l.jsx)(nd.Ay, {
                      contentTypes: e.additionalDCs ?? [],
                      groupName: eh.m.ACCOUNT_NAME_ZONE,
                      children: (t) => {
                        let { visibleContent: n, markAsDismissed: s } = t;
                        return n === d.M.DISPLAY_NAME_STYLES_COACHMARK
                          ? (0, l.jsx)(lA, {
                              markAsDismissed: s,
                              targetElementRef: e.targetElementRef,
                              children: e.children,
                            })
                          : e.children;
                      },
                    }),
                  ],
                })
          : e.children;
      }
      var lF = n(615675),
        lG = n(900797),
        lB = n(847374),
        lV = n(348858),
        lH = n(617354),
        lQ = n(206018),
        lW = n(42473),
        lz = n(490704),
        lq = n(967194);
      function lZ(e) {
        let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: r,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: d,
          } = e,
          h = t || n,
          {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: A },
          } = (0, lV.I)(h ? "undeafen" : "deafen"),
          x = n ? lF.T : m,
          { name: C } = (0, eA.x5)(n5.oh.AUDIO_OUTPUT),
          E = (0, lH.A)(t, n, i),
          { analyticsLocations: v } = (0, O.Ay)(w.A.AUDIO_OUTPUT_BUTTON),
          T = s.useRef(null);
        return (
          s.useEffect(() => () => p(), [h, p]),
          (0, l.jsx)(O.f5, {
            value: v,
            children: (0, l.jsx)(f.Y, {
              targetElementRef: T,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                  d(),
                  (0, l.jsx)(O.f5, {
                    value: v,
                    children: (0, l.jsx)(lQ.A, {
                      onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
                      onClose: t,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                      renderSettingsButton: !0,
                    }),
                  })
                );
              },
              position: "top",
              align: "left",
              animation: f.Y.Animation.FADE,
              spacing: 4,
              children: (e, t) => {
                let { onClick: s } = e,
                  { isShown: d } = t,
                  m = d ? lG.t : lB.a;
                return (0, l.jsxs)("div", {
                  ref: T,
                  className: a()(lz.Lh, { [lz.v8]: h, [lz.q6]: d }),
                  children: [
                    (0, l.jsx)(lW.A, {
                      "aria-checked": h,
                      "aria-label": em.intl.string(em.t.wjcRFX),
                      className: lz.eT,
                      disabled: i,
                      icon: (0, l.jsx)(x, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: h
                          ? t5.A.colors.ICON_VOICE_MUTED
                          : "currentColor",
                        className: o,
                      }),
                      iconForeground: h ? lq.o : void 0,
                      innerClassName: a()({ [lq.T]: n }),
                      onClick: r,
                      onContextMenu: s,
                      onMouseEnter: g,
                      onMouseLeave: A,
                      plated: null != c,
                      redGlow: h,
                      role: "switch",
                      tooltipText: E,
                    }),
                    (0, l.jsx)(lW.A, {
                      className: a()(lz.UT, { [lz.q6]: d }),
                      disabled: i,
                      icon: (0, l.jsx)(m, {
                        className: lz.$$,
                        size: "custom",
                        width: 12,
                        height: 12,
                        color: h
                          ? t5.A.colors.ICON_VOICE_MUTED
                          : "currentColor",
                      }),
                      onClick: s,
                      onContextMenu: s,
                      plated: null != c,
                      redGlow: h,
                      tooltipType: u ? "green_void_do_not_use" : void 0,
                      tooltipForceOpen: u,
                      tooltipPositionKey: u
                        ? em.intl.formatToPlainString(em.t["f+DDY/"], {
                            outputDeviceName: C,
                          })
                        : void 0,
                      tooltipShouldShow: !d,
                      tooltipText: u
                        ? em.intl.format(em.t["f+DDY/"], {
                            outputDeviceName: C,
                          })
                        : em.intl.string(em.t.aA4Vce),
                      "aria-label": u
                        ? em.intl.formatToPlainString(em.t["f+DDY/"], {
                            outputDeviceName: C,
                          })
                        : em.intl.string(em.t.aA4Vce),
                    }),
                  ],
                });
              },
            }),
          })
        );
      }
      var lK = n(666654),
        l$ = n(523875),
        lY = n(993719);
      let lX = {};
      class lJ extends u.Ay.Store {
        static displayName = "CallFeedbackTutorialStore";
        getIsTutorialActive(e) {
          return lX[e] ?? !1;
        }
      }
      let l0 = new lJ(lj.h, {
        CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
          let { tutorialKey: t } = e;
          lX[t] = !0;
        },
        CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
          let { tutorialKey: t } = e;
          lX[t] = !1;
        },
      });
      var l1 = n(362823),
        l2 = n(980923),
        l3 = n(224585),
        l5 = n(949341),
        l6 = n(973324);
      function l8(e) {
        let t,
          {
            selfMute: n,
            serverMute: i,
            suppress: r,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: d,
            onMouseLeave: h,
            onClick: m,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: A,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowPTTJoinTooltip: C,
            dismissTooltips: E,
            speaking: v,
          } = e,
          { showPTTIconIndicator: T } = n3.A.useConfig({
            location: "MicrophoneButton",
          }),
          j = (0, u.bG)([n1.Ay], () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK),
          N = (0, u.bG)(
            [n1.Ay],
            () => n1.Ay.getSettings().modeOptions.shortcut,
          ),
          _ = (0, u.bG)([l0], () => l0.getIsTutorialActive(l1.v.MUTE_TUTORIAL)),
          S = (0, u.bG)([n2.A], () => null != n2.A.getChannelId()),
          { name: R } = (0, eA.x5)(n5.oh.AUDIO_INPUT),
          { enabledInputProfiles: I } = (0, nX.d)({
            location: "MicrophoneButton",
          }),
          y = s.useRef(null),
          b = n || r || i,
          M = (0, l$.L)(b ? "unmute" : "mute"),
          { analyticsLocations: U } = (0, O.Ay)(w.A.AUDIO_INPUT_BUTTON),
          { Component: D, events: P, play: k } = M,
          L = i || r ? lK.O : D;
        s.useEffect(() => () => k(), [b, k]);
        let F = (0, l2.A)(n, i, r, o);
        t = g
          ? {
              tooltipType: "green_void_do_not_use",
              tooltipText: em.intl.string(em.t["29gnR4"]),
              tooltipForceOpen: !0,
            }
          : C || A
            ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: em.intl.format(em.t.c1qUOQ, {
                  keybind: e0.dI(N).toLocaleUpperCase(),
                }),
                tooltipForceOpen: !0,
              }
            : { tooltipText: F };
        let B = T && j && S,
          V = b ? t5.A.colors.ICON_VOICE_MUTED : "currentColor",
          H = s.useCallback(() => {
            m(), _ && lY.N(l1.v.MUTE_TUTORIAL);
          }, [m, _]);
        return (0, l.jsxs)(O.f5, {
          value: U,
          children: [
            (0, l.jsx)(f.Y, {
              targetElementRef: y,
              renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                  E(),
                  (0, l.jsx)(O.f5, {
                    value: U,
                    children: (0, l.jsx)(lQ.A, {
                      onInteraction: (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT),
                      onClose: t,
                      maybeRenderPTTCheckbox: !0,
                      renderInputProfiles: I.length > 0,
                      renderInputDevices: !0,
                      maybeRenderInputMeter: !0,
                      renderInputVolume: !0,
                      renderSettingsButton: !0,
                    }),
                  })
                );
              },
              position: "top",
              align: "left",
              animation: f.Y.Animation.FADE,
              spacing: 4,
              children: (e, n) => {
                let { onClick: s } = e,
                  { isShown: i } = n,
                  r = i ? lG.t : lB.a;
                return (0, l.jsxs)("div", {
                  ref: y,
                  className: a()(lz.Lh, { [lz.v8]: b, [lz.q6]: i }),
                  children: [
                    (0, l.jsx)(lW.A, {
                      "aria-checked": b,
                      "aria-label": em.intl.string(em.t.w4m945),
                      className: lz.eT,
                      disabled: o,
                      icon: (0, l.jsx)(L, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: V,
                        className: c,
                      }),
                      onClick: H,
                      onContextMenu: s,
                      onMouseEnter: () => {
                        d(), P.onMouseEnter();
                      },
                      onMouseLeave: () => {
                        h(), P.onMouseLeave();
                      },
                      plated: null != p,
                      redGlow: b,
                      role: "switch",
                      ...t,
                      children: B
                        ? (0, l.jsx)("div", {
                            className: a()(l5.U, { [l5.z]: v }),
                          })
                        : null,
                    }),
                    (0, l.jsx)(lW.A, {
                      "aria-label": x
                        ? em.intl.formatToPlainString(em.t["18wnuD"], {
                            inputDeviceName: R,
                          })
                        : em.intl.string(em.t.fRzCbB),
                      className: a()(lz.UT, { [lz.q6]: i }),
                      disabled: o,
                      icon: (0, l.jsx)(r, {
                        className: lz.$$,
                        size: "custom",
                        width: 12,
                        height: 12,
                        color: V,
                      }),
                      onClick: s,
                      onContextMenu: s,
                      onMouseEnter: d,
                      onMouseLeave: h,
                      plated: null != p,
                      redGlow: b,
                      tooltipType: x ? "green_void_do_not_use" : void 0,
                      tooltipForceOpen: x,
                      tooltipPositionKey: x
                        ? em.intl.formatToPlainString(em.t["18wnuD"], {
                            inputDeviceName: R,
                          })
                        : void 0,
                      tooltipShouldShow: !i,
                      tooltipText: x
                        ? em.intl.format(em.t["18wnuD"], { inputDeviceName: R })
                        : em.intl.string(em.t.fRzCbB),
                    }),
                  ],
                });
              },
            }),
            (0, l.jsx)(nr.A, {
              targetElementRef: y,
              shouldShow: _,
              graphic: { type: "image", src: l6.A },
              onRequestClose: () => {
                lY.N(l1.v.MUTE_TUTORIAL);
              },
              position: "top",
              title: em.intl.string(l3.default.VG4zAf),
              body: em.intl.string(l3.default["8VIRzR"]),
            }),
          ],
        });
      }
      var l4 = n(935399),
        l9 = n(505312),
        l7 = n(848847),
        se = n(88001),
        st = n(466919),
        sn = n(438705);
      let sl = (e) => {
        let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
          a = s.useCallback(() => {
            i(), (0, es.openUserSettings)(el.X.SUBSCRIPTIONS_PANEL);
          }, [i]);
        return (0, l.jsx)(nr.A, {
          targetElementRef: t,
          position: "top",
          caretConfig: { align: "start" },
          size: "md",
          graphic: { type: "image", src: sn },
          shouldShow: n,
          title: em.intl.format(st.default.bx8sR9, {
            premiumGroupProductName: (0, se.DP)(),
          }),
          body: em.intl.format(st.default.Pw4OFZ, {
            premiumGroupProductName: (0, se.DP)(),
          }),
          onRequestClose: i,
          actions: [{ text: em.intl.string(st.default.DD26QR), onClick: a }],
        });
      };
      var ss = n(873298),
        si = n(840387);
      function sa(e) {
        let { markAsDismissed: t, targetElementRef: n } = e,
          i = (0, si.Z)(),
          a = t0.KP.useSetting(),
          r = i && a !== ss.KP.FRIENDS_AND_ALL_GUILDS,
          o = (0, s.useCallback)(() => {
            t(eh.i.TAKE_ACTION),
              (0, es.openUserSettings)(el.X.PROFILE_PRIVACY_CATEGORY);
          }, [t]),
          c = (0, s.useCallback)(() => {
            t(eh.i.USER_DISMISS);
          }, [t]),
          u = r
            ? a === ss.KP.FRIENDS_ONLY
              ? em.intl.string(em.t["/hogEy"])
              : em.intl.string(em.t["6hEfm1"])
            : em.intl.string(em.t.bnNxW1);
        return (0, l.jsx)(nr.A, {
          targetElementRef: n,
          shouldShow: !0,
          onRequestClose: c,
          align: "center",
          position: "top",
          caretConfig: { align: "end" },
          graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/0710b4aac8339f9213d3c43a8976071c26abe2b3236ccd8817180ce465f33673.svg",
          },
          title: em.intl.string(em.t.Ve4nS1),
          body: u,
          size: "md",
          gradientColor: "purple",
          actions: [
            {
              text: em.intl.string(em.t.eOoTMX),
              variant: "primary",
              onClick: o,
            },
          ],
        });
      }
      function sr(e) {
        let t,
          n,
          {
            webBuildOverride: i,
            onClick: a,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: c,
            nameplate: u,
          } = e,
          h = s.useRef(null),
          [m, p] = s.useState(!1);
        (0, l4.Ay)(() => {
          let e = () => p(!0);
          return (
            lr._.subscribe(ts.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
              lr._.unsubscribe(ts.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
          );
        });
        let f = s.useCallback(() => {
          p(!1), a();
        }, [a]);
        t =
          null != i
            ? em.intl.formatToPlainString(em.t.Gzh6ZP, {
                webBuildOverride: i.id,
              })
            : em.intl.string(em.t.cduTBL);
        let g = eq.Z,
          A = (0, l9.w)();
        return (
          (g = null != i ? l7.H : A.Component),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(lW.A, {
                ref: h,
                tooltipText: t,
                tooltipPositionKey: n,
                onClick: f,
                onContextMenu: r,
                "aria-label": em.intl.string(em.t.cduTBL),
                icon: (0, l.jsx)(g, {
                  size: "refresh_sm",
                  color: "currentColor",
                  className: c,
                }),
                ...A.events,
                plated: null != u,
              }),
              (0, l.jsx)(sl, {
                targetElementRef: h,
                shouldShow: m,
                onDismiss: () => p(!1),
              }),
              (0, l.jsx)(nd.Ay, {
                contentTypes: o,
                groupName: eh.m.ACCOUNT_NAME_ZONE,
                children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  return t === d.M.PRIVATE_PROFILE_COACHMARK
                    ? (0, l.jsx)(sa, {
                        markAsDismissed: n,
                        targetElementRef: h,
                      })
                    : null;
                },
              }),
            ],
          })
        );
      }
      var so = n(489902);
      let sc = lc.Ay.getEnableHardwareAcceleration() ? m.Js : m.eu,
        su = 2.5 * eY.A.Millis.SECOND,
        sd = 2 * eY.A.Millis.MINUTE,
        sh = 2 * eY.A.Millis.MINUTE,
        sm = 5 * eY.A.Millis.SECOND;
      function sp(e) {
        let {
            ref: t,
            speaking: n,
            voiceDb: i = -1 / 0,
            streaming: r,
            currentUser: o,
            status: c,
            handleClick: u,
            handleMouseLeave: d,
            renderNameTag: h,
            nameplate: m,
            avatarDecoration: A,
            "data-jump-section": x,
          } = e,
          C = s.useRef(null),
          E = t ?? C,
          T = (0, la.F_)({
            avatarDecoration: A,
            size: (0, V.Te)(p._3.SIZE_32),
          }),
          j = (0, Z.A)(),
          {
            updateOpenPopoutRef: _,
            highlightBadge: S,
            setHighlightBadge: R,
          } = (function () {
            let e = s.useRef(null),
              t = s.useCallback((t) => {
                e.current = () => {
                  t.onMouseDown(), t.onClick();
                };
              }, []),
              [n, l] = s.useState(),
              [i, a] = s.useState(!1);
            return (
              (0, N.A)(() => a(!0), 750),
              s.useEffect(() => {
                let t = (t) => {
                  let { highlightBadge: n } = t;
                  null != n && l(n), e.current?.();
                };
                return (
                  lr._.subscribe(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                  () => {
                    lr._.unsubscribe(ts.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                  }
                );
              }),
              {
                updateOpenPopoutRef: t,
                highlightBadge: i ? n : void 0,
                setHighlightBadge: l,
              }
            );
          })(),
          I = (0, Q.K)(m);
        return null == o
          ? null
          : (0, l.jsx)(v.A, {
              object: ts.ZSU.AVATAR,
              children: (0, l.jsx)(nY.A, {
                user: o,
                targetElementRef: E,
                clickTrap: !0,
                preload: () =>
                  (0, n$.A)(o.id, o.getAvatarURL(void 0, nY.S), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: void 0,
                  }),
                renderPopout: (e, t) => {
                  let { closePopout: n, setPopoutRef: s } = e;
                  return (0, l.jsx)(nz, {
                    currentUser: o,
                    highlightBadge: S,
                    openedAt: t,
                    onClose: n,
                    setPopoutRef: s,
                    className: so.dI,
                  });
                },
                position: "top",
                align: "left",
                animation: f.Y.Animation.FADE,
                spacing: 14,
                fixed: !0,
                ignoreModalClicks: !0,
                onRequestClose: () => {
                  d(), R(void 0);
                },
                children: (e) => {
                  _(e);
                  let { onMouseEnter: t, onMouseDown: s, ...d } = e;
                  return (0, l.jsxs)("div", {
                    ref: E,
                    style: I,
                    onMouseEnter: t,
                    onMouseDown: s,
                    onClick: (t) => {
                      e.onClick?.(t), u?.(t);
                    },
                    className: a()(so.Q9, { [so.ZQ]: null != m }),
                    children: [
                      (0, l.jsx)(g.D, {
                        ...d,
                        onClick: (t) => {
                          t.stopPropagation(), e.onClick?.(t), u?.(t);
                        },
                        "aria-label": em.intl.string(em.t["5fWB8U"]),
                        focusProps: { ringTarget: E },
                        className: so.$n,
                        "data-jump-section": x,
                      }),
                      (0, l.jsx)(sc, {
                        size: p._3.SIZE_32,
                        src: o.getAvatarURL(void 0, 28, !1),
                        avatarDecoration: T,
                        status: r ? ts.clD.STREAMING : c,
                        isSpeaking: n,
                        voiceDb: i,
                        className: so.my,
                        "aria-hidden": !0,
                      }),
                      (0, l.jsx)("div", { className: so.oM, children: h(j) }),
                    ],
                  });
                },
              }),
            });
      }
      class sf extends s.PureComponent {
        speakingWhileMutedTooltipTimeout = new h.Ep();
        speakingWhilePTTTooltipTimeout = new h.Ep();
        speakingWhilePTTInactiveBackoff = new c.A(sh, null, !1);
        lastSpeakingWhileMutedNotificationTime = void 0;
        lastSpeakingWhilePTTNotificationTime = void 0;
        state = {
          hovered: !1,
          shouldShowNametagTooltip: !1,
          shouldShowSpeakingWhileMutedTooltip: !1,
          shouldShowSpeakingWhilePTTTooltip: !1,
          hoveringOnMute: !1,
        };
        containerRef = s.createRef();
        avatarWithPopoutRef = s.createRef();
        componentDidUpdate(e) {
          let {
              speakingWhileMuted: t,
              speakingWhilePTTInactive: n,
              occluded: l,
            } = e,
            {
              speakingWhileMuted: s,
              occluded: i,
              speakingWhilePTTInactive: a,
            } = this.props;
          i !== l && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
        }
        componentWillUnmount() {
          this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
        }
        handleToggleSelfMute = () => {
          let { serverMute: e, suppress: t, selfMute: n } = this.props;
          (0, L.A)(e, t, ts.JJy.ACCOUNT_PANEL),
            (0, F.X)(w.A.ACCOUNT, F.O.MIC, n);
        };
        handleToggleSelfDeaf = () => {
          let { serverDeaf: e, selfDeaf: t } = this.props;
          (0, k.A)(e, ts.JJy.ACCOUNT_PANEL),
            (0, F.X)(w.A.ACCOUNT, F.O.DEAFEN, !t);
        };
        handleOpenAccountSettings = () => {
          this.dismissTooltips(),
            n2.A.isConnected()
              ? (0, es.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL)
              : (0, es.openUserSettings)();
        };
        handleOpenSettingsContextMenu = (e) => {
          let { currentUser: t } = this.props;
          null != t &&
            (0, E.L3)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("80848"),
                n.e("78401"),
                n.e("40841"),
                n.e("52204"),
                n.e("90261"),
                n.e("63635"),
                n.e("51404"),
                n.e("89603"),
                n.e("17546"),
                n.e("98042"),
                n.e("13520"),
                n.e("99961"),
                n.e("76831"),
                n.e("69273"),
                n.e("75527"),
                n.e("77083"),
                n.e("63009"),
                n.e("16933"),
                n.e("45650"),
                n.e("97189"),
                n.e("44398"),
                n.e("62296"),
                n.e("333"),
                n.e("68432"),
                n.e("79705"),
                n.e("55658"),
                n.e("76032"),
                n.e("78220"),
                n.e("48006"),
                n.e("87080"),
                n.e("48751"),
                n.e("73607"),
                n.e("42105"),
                n.e("78063"),
                n.e("38559"),
                n.e("74748"),
                n.e("66361"),
                n.e("61448"),
                n.e("21341"),
                n.e("6619"),
                n.e("45229"),
                n.e("12721"),
                n.e("79093"),
                n.e("28510"),
                n.e("98944"),
                n.e("19032"),
                n.e("3840"),
                n.e("81579"),
                n.e("4981"),
                n.e("73005"),
                n.e("26550"),
                n.e("48071"),
                n.e("92793"),
                n.e("50992"),
                n.e("23309"),
                n.e("54316"),
                n.e("93327"),
                n.e("93998"),
                n.e("15086"),
                n.e("44590"),
                n.e("54068"),
                n.e("1162"),
                n.e("90217"),
                n.e("5384"),
                n.e("8996"),
                n.e("76160"),
                n.e("23924"),
                n.e("15510"),
                n.e("25845"),
                n.e("19402"),
                n.e("13111"),
                n.e("68201"),
                n.e("38939"),
                n.e("3376"),
                n.e("13554"),
                n.e("26132"),
                n.e("20287"),
                n.e("28367"),
                n.e("63232"),
                n.e("35429"),
                n.e("10471"),
                n.e("64827"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("30938"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("24313"),
                n.e("74016"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("7743"),
                n.e("45959"),
                n.e("18573"),
                n.e("55936"),
                n.e("31988"),
                n.e("39667"),
                n.e("37794"),
                n.e("26073"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("11566"),
                n.e("21106"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("53092"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("76602"),
                n.e("91763"),
                n.e("28229"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("91007"),
                n.e("9233"),
                n.e("69747"),
                n.e("40258"),
                n.e("66495"),
                n.e("91146"),
                n.e("88342"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("42451"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("35027"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("67861"),
                n.e("1518"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("3589"),
                n.e("71273"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86814"),
                n.e("52548"),
                n.e("75842"),
                n.e("53984"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("86672"),
                n.e("90664"),
                n.e("79745"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("52617"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("35321"),
                n.e("8362"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("34654"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("82783"),
                n.e("86243"),
                n.e("32209"),
                n.e("39171"),
                n.e("37021"),
                n.e("21049"),
                n.e("36564"),
                n.e("50033"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("10567"),
                n.e("63645"),
                n.e("52229"),
                n.e("5636"),
                n.e("38472"),
                n.e("834"),
                n.e("3217"),
                n.e("5557"),
                n.e("3998"),
                n.e("44780"),
                n.e("83952"),
                n.e("95340"),
                n.e("62718"),
                n.e("84317"),
                n.e("89916"),
                n.e("67176"),
                n.e("61156"),
                n.e("59957"),
                n.e("166"),
                n.e("91671"),
                n.e("60773"),
                n.e("68763"),
                n.e("15188"),
                n.e("16767"),
                n.e("29666"),
                n.e("58273"),
                n.e("8018"),
                n.e("6841"),
                n.e("92295"),
                n.e("20930"),
                n.e("38056"),
                n.e("26001"),
                n.e("26574"),
                n.e("14591"),
                n.e("52111"),
                n.e("20379"),
                n.e("57458"),
                n.e("8829"),
                n.e("19193"),
                n.e("76413"),
                n.e("80945"),
                n.e("18265"),
                n.e("1243"),
                n.e("96804"),
                n.e("36877"),
                n.e("95998"),
                n.e("97073"),
                n.e("36419"),
                n.e("42234"),
                n.e("66783"),
                n.e("44057"),
                n.e("28850"),
                n.e("11617"),
                n.e("74678"),
                n.e("27659"),
                n.e("10943"),
                n.e("15920"),
                n.e("37977"),
                n.e("81189"),
                n.e("58164"),
                n.e("21930"),
                n.e("92077"),
                n.e("3930"),
                n.e("12965"),
                n.e("3663"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("41701"),
                n.e("37490"),
                n.e("40204"),
                n.e("66580"),
                n.e("77467"),
                n.e("47057"),
                n.e("80093"),
                n.e("12682"),
                n.e("86902"),
                n.e("68083"),
                n.e("48730"),
                n.e("71467"),
                n.e("49013"),
                n.e("29260"),
                n.e("51892"),
                n.e("20965"),
                n.e("41838"),
                n.e("39894"),
                n.e("46045"),
                n.e("60989"),
                n.e("40393"),
                n.e("3707"),
                n.e("33448"),
                n.e("3710"),
                n.e("60003"),
                n.e("73122"),
                n.e("42324"),
                n.e("45830"),
                n.e("8979"),
                n.e("755"),
                n.e("33869"),
                n.e("5896"),
                n.e("94607"),
                n.e("31335"),
                n.e("77602"),
                n.e("96480"),
                n.e("95602"),
                n.e("4736"),
                n.e("14875"),
                n.e("86300"),
                n.e("29569"),
                n.e("62175"),
                n.e("88913"),
                n.e("82178"),
                n.e("79216"),
                n.e("89545"),
                n.e("81202"),
                n.e("43114"),
                n.e("46149"),
                n.e("63497"),
                n.e("79593"),
                n.e("33771"),
                n.e("41706"),
                n.e("94888"),
                n.e("10637"),
                n.e("66523"),
                n.e("89541"),
                n.e("46039"),
                n.e("27462"),
                n.e("22455"),
                n.e("60816"),
                n.e("68031"),
                n.e("97162"),
                n.e("15057"),
                n.e("44727"),
                n.e("10147"),
                n.e("6627"),
                n.e("90274"),
                n.e("86546"),
                n.e("96817"),
                n.e("84704"),
                n.e("99053"),
                n.e("46327"),
                n.e("28011"),
                n.e("75284"),
                n.e("62318"),
                n.e("3590"),
                n.e("64926"),
                n.e("50541"),
                n.e("53983"),
                n.e("37886"),
                n.e("23324"),
                n.e("25013"),
                n.e("20803"),
                n.e("95782"),
                n.e("40114"),
                n.e("61137"),
                n.e("26359"),
                n.e("73566"),
                n.e("27687"),
                n.e("45419"),
                n.e("18710"),
                n.e("86629"),
                n.e("98384"),
                n.e("17823"),
                n.e("9861"),
                n.e("24564"),
                n.e("44264"),
                n.e("14753"),
                n.e("34428"),
                n.e("35476"),
                n.e("39721"),
                n.e("8508"),
                n.e("14334"),
                n.e("76892"),
                n.e("22420"),
                n.e("98660"),
                n.e("16799"),
                n.e("52694"),
                n.e("59373"),
                n.e("33204"),
                n.e("66002"),
                n.e("71811"),
                n.e("39967"),
                n.e("38249"),
                n.e("40976"),
                n.e("85216"),
                n.e("83102"),
                n.e("65306"),
                n.e("2552"),
                n.e("89588"),
                n.e("24084"),
                n.e("33314"),
                n.e("44790"),
                n.e("14451"),
                n.e("7755"),
                n.e("83259"),
                n.e("50590"),
                n.e("54658"),
                n.e("31828"),
                n.e("71790"),
                n.e("58848"),
                n.e("33049"),
                n.e("36474"),
                n.e("28638"),
                n.e("71586"),
              ]).then(n.bind(n, 410681));
              return (t) =>
                (0, l.jsx)(e, {
                  ...t,
                  onClose: E.Z_,
                  onInteraction: (0, G.s)("UserSettingsMenu", w.A.ACCOUNT),
                });
            });
        };
        audioOnInteractionHandler = (0, G.s)("AudioDeviceMenu", w.A.ACCOUNT);
        handleInputAudioContextMenu = (e, t) => {
          this.dismissTooltips(),
            (0, E.L3)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("90274"),
                n.e("78827"),
              ]).then(n.bind(n, 385318));
              return () => {
                let { enabledInputProfiles: n } = (0, nX.d)({
                  location: "Account",
                });
                return (0, l.jsx)(O.f5, {
                  value: t,
                  children: (0, l.jsx)(e, {
                    onClose: E.Z_,
                    renderInputDevices: !0,
                    renderInputProfiles: n.length > 0,
                    renderInputVolume: !0,
                    minimal: !0,
                    onInteraction: this.audioOnInteractionHandler,
                  }),
                });
              };
            });
        };
        handleOutputAudioContextMenu = (e, t) => {
          this.dismissTooltips(),
            (0, E.L3)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("90274"),
                n.e("78827"),
              ]).then(n.bind(n, 385318));
              return () =>
                (0, l.jsx)(O.f5, {
                  value: t,
                  children: (0, l.jsx)(e, {
                    onClose: E.Z_,
                    renderOutputDevices: !0,
                    renderOutputVolume: !0,
                    minimal: !0,
                    onInteraction: this.audioOnInteractionHandler,
                  }),
                });
            });
        };
        handleMouseEnter = () => {
          this.setState({ hovered: !0 });
        };
        handleMouseLeave = () => {
          this.setState({ hovered: !1 });
        };
        handleMouseEnterMute = () => {
          this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
          }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
        };
        handleMouseLeaveMute = () => {
          this.setState({ hoveringOnMute: !1 });
        };
        dismissSpeakingWhileMutedTooltip = () => {
          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
            this.speakingWhileMutedTooltipTimeout.stop();
        };
        dismissSpeakingWhilePTTTooltip = () => {
          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
            this.speakingWhilePTTTooltipTimeout.stop();
        };
        dismissTooltips = () => {
          this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
        };
        handleOccludedChanged = () => {
          let { occluded: e } = this.props;
          e &&
            this.setState({
              shouldShowNametagTooltip: !1,
              shouldShowSpeakingWhileMutedTooltip: !1,
              shouldShowSpeakingWhilePTTTooltip: !1,
            });
        };
        handleSpeakingWhileMutedChanged = () => {
          let {
              selfMute: e,
              serverMute: t,
              suppress: n,
              speakingWhileMuted: l,
              occluded: s,
              shouldShowPTTJoinTooltip: i,
              deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
              void 0 === this.lastSpeakingWhileMutedNotificationTime ||
              performance.now() - this.lastSpeakingWhileMutedNotificationTime >
                sd;
          l
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                (this.lastSpeakingWhileMutedNotificationTime =
                  performance.now()),
                  this.speakingWhileMutedTooltipTimeout.start(su, () =>
                    this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                  );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
        };
        handleSpeakingWhilePTTChanged = () => {
          let {
              selfMute: e,
              serverMute: t,
              suppress: n,
              speakingWhilePTTInactive: l,
              occluded: s,
              shouldShowPTTJoinTooltip: i,
              deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
              void 0 === this.lastSpeakingWhilePTTNotificationTime ||
              performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                this.speakingWhilePTTInactiveBackoff.current;
          l
            ? r ||
              e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              i ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                  this.speakingWhilePTTInactiveBackoff.fail(),
                  this.speakingWhilePTTTooltipTimeout.start(su, () =>
                    this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                  );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
              this.speakingWhilePTTTooltipTimeout.stop());
        };
        renderStatus() {
          let { hovered: e } = this.state,
            {
              activities: t,
              applicationStream: n,
              currentUser: s,
              status: i,
              userTag: a,
              voiceChannel: r,
            } = this.props;
          if (null == s) return null;
          if (
            (0, _.A)({
              activities: t,
              status: i,
              applicationStream: n,
              voiceChannel: r,
            })
          )
            return (0, l.jsxs)(M.A, {
              hoverText: a,
              forceHover: e,
              children: [
                (0, l.jsx)(A.A, { children: tK.Ay.humanizeStatus(i) }),
                (0, l.jsx)(S.A, {
                  user: s,
                  activities: t,
                  applicationStream: n,
                  voiceChannel: r,
                  textClassName: so.XD,
                  hideTooltip: !0,
                }),
              ],
            });
          let o = t?.find((e) => {
            let { type: t } = e;
            return t === ts.$pd.CUSTOM_STATUS;
          });
          return null != o
            ? (0, l.jsxs)(M.A, {
                hoverText: a,
                forceHover: e,
                children: [
                  (0, l.jsx)(A.A, { children: tK.Ay.humanizeStatus(i) }),
                  (0, l.jsx)(q.A, {
                    activity: o,
                    emojiClassName: so.Zg,
                    className: so.WO,
                  }),
                ],
              })
            : null != i && i !== ts.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, l.jsx)(M.A, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, l.jsx)(b, { text: tK.Ay.humanizeStatus(i) }),
                })
              : a;
        }
        renderNameTag = (e) => {
          let { currentUser: t, username: n } = this.props;
          return null == t
            ? null
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("div", {
                    className: so.eW,
                    children: (0, l.jsx)(ld.A, {
                      className: a()({ [so.e8]: null != e }),
                      children: (0, l.jsx)($.A, {
                        userName: n,
                        displayNameStyles: e,
                        effectDisplayType: this.state.hovered
                          ? K.G.ANIMATED
                          : K.G.STATIC,
                        loop: !0,
                        inProfile: !0,
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: so.XP,
                    children: (0, l.jsx)(lu.A, {
                      children: this.renderStatus(),
                    }),
                  }),
                ],
              });
        };
        renderNameZone(e) {
          let { currentUser: t, dismissibleContents: n } = this.props;
          return null == t
            ? null
            : (0, l.jsx)(lL, {
                guildId: this.props.selectedGuildId ?? null,
                currentUser: t,
                targetElementRef: this.avatarWithPopoutRef,
                additionalDCs: n.avatar,
                children: (0, l.jsx)(sp, {
                  ...this.props,
                  ref: this.avatarWithPopoutRef,
                  handleMouseLeave: this.handleMouseLeave,
                  renderNameTag: this.renderNameTag,
                  "data-jump-section": e["data-jump-section"],
                }),
              });
        }
        render() {
          let {
              currentUser: e,
              nameplate: t,
              voiceChannel: n,
              isQuestBarEmpty: s,
              isListenAlongVisible: i,
            } = this.props,
            r = this.state.hovered;
          return null == e
            ? null
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(x.sk, {
                    children: (e) =>
                      (0, l.jsxs)("div", {
                        ref: this.containerRef,
                        className: a()(so.kL, {
                          [so.UG]: null != n,
                          [so.bc]: !s,
                          [so.G5]: i,
                        }),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: [
                          (0, l.jsx)(z.A, {
                            nameplate: t,
                            hovered: r,
                            placement: W.u.ACCOUNT,
                          }),
                          this.renderNameZone(e),
                          (0, l.jsx)(sg, {
                            ...this.props,
                            ...this.state,
                            accountContainerRef: this.containerRef,
                            handleMouseEnterMute: this.handleMouseEnterMute,
                            handleMouseLeaveMute: this.handleMouseLeaveMute,
                            handleToggleSelfMute: this.handleToggleSelfMute,
                            handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                            handleInputAudioContextMenu:
                              this.handleInputAudioContextMenu,
                            handleOutputAudioContextMenu:
                              this.handleOutputAudioContextMenu,
                            handleOpenAccountSettings:
                              this.handleOpenAccountSettings,
                            handleOpenSettingsContextMenu:
                              this.handleOpenSettingsContextMenu,
                            dismissTooltips: this.dismissTooltips,
                          }),
                        ],
                      }),
                  }),
                  (0, l.jsx)(eg, {}),
                ],
              });
        }
      }
      function sg(e) {
        let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: i,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: c,
            webBuildOverride: u,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: m,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: A,
            handleOpenSettingsContextMenu: x,
            dismissibleContents: C,
            nameplate: E,
            accountContainerRef: v,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: j = !1,
            dismissTooltips: N,
            speaking: _,
          } = e,
          S = (0, Q.K)(E);
        return (0, l.jsxs)("div", {
          className: so.Uo,
          style: S,
          children: [
            (0, l.jsx)(l8, {
              accountContainerRef: v,
              selfMute: n,
              serverMute: i,
              suppress: r,
              awaitingRemote: s,
              onMouseEnter: d,
              onMouseLeave: h,
              onClick: p,
              onContextMenu: f,
              iconForeground: null != E ? so.t4 : void 0,
              nameplate: E,
              shouldShowSpeakingWhileMutedTooltip: o,
              shouldShowInputDeviceChangedTooltip: !o && "input" === T,
              shouldShowSpeakingWhilePTTTooltip: c,
              shouldShowPTTJoinTooltip: j,
              dismissTooltips: N,
              speaking: _,
            }),
            (0, l.jsx)(lZ, {
              selfDeaf: t,
              serverDeaf: a,
              onClick: m,
              onContextMenu: g,
              awaitingRemote: s,
              iconForeground: null != E ? so.t4 : void 0,
              nameplate: E,
              shouldShowOutputDeviceChangedTooltip: "output" === T,
              dismissTooltips: N,
            }),
            (0, l.jsx)(sr, {
              webBuildOverride: u,
              onClick: A,
              onContextMenu: x,
              dismissibleContents: C.settings,
              iconForeground: null != E ? so.t4 : void 0,
              nameplate: E,
            }),
          ],
        });
      }
      function sA(e) {
        let t = (0, u.bG)([n2.A], () => null != n2.A.getChannelId()),
          n = (0, eA.Py)(e),
          l = s.useRef(new h.Ep()),
          [i, a] = s.useState(!1);
        s.useEffect(() => {
          t &&
            n &&
            (a(!0),
            l.current.start(sm, () => {
              a(!1);
            }));
        }, [t, n]);
        let r = s.useCallback(() => {
          a(!1), l.current.stop();
        }, []);
        return (
          (0, j.l0)(() => {
            l.current.stop();
          }),
          { shouldShowTooltip: i, dismissTooltip: r }
        );
      }
      function sx() {
        let e = (0, u.bG)([ne.default], () => ne.default.getCurrentUser()),
          t = (0, u.bG)([ng.default], () => ng.default.getId()),
          {
            activities: n,
            streaming: i,
            status: a,
          } = (0, u.cf)([nE.A], () => {
            let e = nE.A.getActivities();
            return {
              activities: e,
              streaming:
                null !=
                e.find((e) => {
                  let { type: t } = e;
                  return t === ts.$pd.STREAMING;
                }),
              status: nE.A.getStatus(),
            };
          }),
          r = (0, u.bG)([lt.A], () => lt.A.getAnyStreamForUser(t)),
          c = (0, T.A)({ userId: t }),
          m = (0, u.bG)([n9.A], () => n9.A.getVoiceVolume(t)),
          p = tK.Ay.useUserTag(e, { decoration: "never" }),
          f = (0, u.bG)([n2.A, ln.A], () => {
            let e = n2.A.getChannelId();
            return null != e ? ln.A.getChannel(e) : null;
          }),
          { mute: g, selfMute: A, suppress: x } = (0, n0.A)(f),
          { selfDeaf: E, deaf: v } = (0, nJ.A)(f),
          N = (0, u.bG)([U.A], () =>
            (0, D.kK)()
              ? U.A.getCurrentBuildOverride().overrides?.discord_web
              : null,
          ),
          _ = (0, u.bG)([n1.Ay], () => n1.Ay.getSpeakingWhileMuted()),
          S = (0, u.bG)([P.A], () => P.A.isFullscreenInContext()),
          R = (0, u.bG)([ls.A], () => ls.A.hasLayers()),
          I =
            (0, C.useModalsStore)(C.hasAnyModalOpenSelector) ||
            R ||
            lo.P.isDisallowPopupsSet() ||
            S,
          y = (0, u.bG)(
            [Y.default],
            () => null != Y.default.getAwaitingRemoteSessionInfo(),
          ),
          b = (0, u.bG)([li.A], () => li.A.getGuildId()),
          M = e?.avatarDecoration,
          k = (0, B.A)(M),
          L = tK.Ay.useName(e) ?? "",
          { analyticsLocations: F } = (0, O.Ay)(w.A.ACCOUNT),
          G = (0, H.r)({ user: e, guildId: void 0 }),
          { isQuestBarEmpty: V } = (0, nq.c9)(),
          Q = (0, u.bG)([nZ.A, ne.default, ll.A], () => {
            let e,
              t = nZ.A.getSyncingWith(),
              n = nZ.A.getActivity(),
              l = [];
            return (
              null != t
                ? (e = t.partyId)
                : null != n &&
                  null != n.party &&
                  null != n.party.id &&
                  (e = n.party.id),
              null != e &&
                (l = o()(Array.from(ll.A.getParty(e) ?? []))
                  .map((e) => ne.default.getUser(e))
                  .filter(nA.Vq)
                  .value()),
              l.length > 1
            );
          }),
          W = { avatar: [], settings: [] },
          z = (0, nK.lX)("AccountCoachmark");
        !I &&
          (W.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
          z && W.settings.push(d.M.PRIVATE_PROFILE_COACHMARK));
        let { shouldShowTooltip: q, dismissTooltip: Z } = sA(n5.oh.AUDIO_INPUT),
          { shouldShowTooltip: K, dismissTooltip: $ } = sA(n5.oh.AUDIO_OUTPUT),
          { shouldShowTooltip: X, dismissTooltip: J } = (function () {
            let [e, t] = s.useState(!1),
              n = (0, u.bG)(
                [n1.Ay],
                () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK,
              ),
              l = (0, u.bG)(
                [n2.A],
                () =>
                  null != n2.A.getChannelId() &&
                  (n2.A.getDuration() ?? Number.MAX_VALUE) < n6,
              ),
              [i, a] = s.useState(!1),
              { showPTTJoinTooltip: r } = n3.A.useConfig({
                location: "usePTTJoinTooltip",
              }),
              o = s.useRef(new h.Ep()),
              c = s.useRef(new h.Ep());
            s.useEffect(() => {
              if (l && n && !e) {
                if (
                  (n3.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip",
                  }),
                  !r)
                )
                  return;
                a(!0),
                  t(!0),
                  c.current.start(n8, () => {
                    t(!1);
                  }),
                  o.current.start(n6, () => {
                    a(!1);
                  });
              }
              l || a(!1);
            }, [l, n, r, e]);
            let d = s.useCallback(() => {
              a(!1), o.current.stop();
            }, []);
            return (
              (0, j.l0)(() => {
                o.current.stop(), c.current.stop();
              }),
              { shouldShowTooltip: i, dismissTooltip: d }
            );
          })(),
          ee = (function () {
            let { showPTTSpeakingIndicator: e } = n3.A.useConfig({
                location: "useSpeakingWhilePTT",
              }),
              [t, n] = s.useState(!1),
              l = (0, u.bG)(
                [n1.Ay],
                () => n1.Ay.getMode() === n5.TB.PUSH_TO_TALK,
              ),
              i = (0, u.bG)([n2.A], () => n2.A.getRTCConnectionId()),
              a = (0, u.bG)([n1.Ay], () => {
                let e = n1.Ay.getModeOptions().updatedAt;
                return null != e && Date.now() - e < le;
              }),
              r = s.useRef(new h.Ep());
            return (
              s.useEffect(() => {
                n(!1);
              }, [i]),
              s.useEffect(() => {
                let t = 0,
                  s = r.current;
                function o(e, l) {
                  let i = (l & n5.ME.VOICE) === n5.ME.VOICE,
                    a = n9.A.isCurrentUserPTTActive();
                  i && !a
                    ? ++t >= 6 &&
                      (n(!0),
                      s.start(n7, () => {
                        n(!1);
                      }))
                    : (t = 0);
                }
                return (
                  a &&
                    e &&
                    l &&
                    null != i &&
                    n1.Ay.getMediaEngine().on(n4.bg.VoiceActivity, o),
                  () => {
                    n1.Ay.getMediaEngine().removeListener(
                      n4.bg.VoiceActivity,
                      o,
                    ),
                      s.stop();
                  }
                );
              }, [e, l, a, i]),
              t
            );
          })(),
          et = s.useMemo(() => (q ? "input" : K ? "output" : void 0), [q, K]),
          en = s.useCallback(
            (e) => {
              switch (e) {
                case "input":
                  Z();
                  break;
                case "output":
                  $();
              }
            },
            [Z, $],
          );
        return (0, l.jsx)(O.f5, {
          value: F,
          children: (0, l.jsx)(sf, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: W,
            userTag: p,
            occluded: I,
            selfDeaf: E,
            selfMute: A,
            serverDeaf: v,
            serverMute: g,
            speaking: c,
            voiceDb: m,
            speakingWhileMuted: _,
            speakingWhilePTTInactive: ee,
            status: a,
            streaming: i,
            suppress: x,
            webBuildOverride: N,
            awaitingRemote: y,
            nameplate: G,
            selectedGuildId: b,
            avatarDecoration: k,
            isQuestBarEmpty: V,
            isListenAlongVisible: Q,
            deviceChangedTooltipType: et,
            onDismissDeviceChangedTooltip: () => en(et),
            shouldShowPTTJoinTooltip: X,
            dismissPTTJoinTooltip: J,
          }),
        });
      }
    },
    895253(e, t, n) {
      n.d(t, { A: () => r });
      var l = n(627968);
      n(64700);
      var s = n(503698),
        i = n.n(s),
        a = n(460410);
      let r = (e) => {
        let { visible: t, glow: n, className: s } = e;
        return t
          ? (0, l.jsx)("div", {
              className: i()(a.kL, s),
              children: (0, l.jsx)("div", {
                className: a.vW,
                children: n
                  ? (0, l.jsx)("div", { className: a.ys })
                  : (0, l.jsx)("div", { className: a.GS }),
              }),
            })
          : null;
      };
    },
    28082(e, t, n) {
      n.d(t, { A: () => tU, Y: () => tO });
      var l = n(627968),
        s = n(64700),
        i = n(503698),
        a = n.n(i),
        r = n(925747),
        o = n(17928),
        c = n(475743),
        u = n(840251),
        d = n(688151);
      let h = new u.E([], d.$G.QUEST_BAR_RENDERED, {
        location: "quest bar rendered",
      });
      var m = n(186111),
        p = n(859703),
        f = n(507107),
        g = n(890687),
        A = n(971276),
        x = n(851936),
        C = n(792620),
        E = n(241124),
        v = n(73473),
        T = n(201805),
        j = n(545986),
        N = n(939249),
        _ = n(834730),
        S = n(290136),
        R = n(661531),
        I = n(365199),
        y = n(590202),
        b = n(971649),
        M = n(901406),
        w = n(270045),
        O = n(57718),
        U = n(398025);
      n(321073);
      var D = n(340287),
        P = n(765671);
      let k = "#00000000",
        L = "#CDD8FF1A",
        F = s.createContext({
          registerComponent: () => {},
          unregisterComponent: () => {},
          animatedComponents: {},
          expandedContentRef: s.createRef(),
          collapsedContentRef: s.createRef(),
          recalculateAnimationPositions: () => {},
          animatedComponentProps: [],
          expansionSpring: new r.SpringValue(0),
          mountPoints: new Map(),
        }),
        G = s.forwardRef(function (e, t) {
          let { children: n, id: i, inState: a, isTextTransition: o = !1 } = e,
            {
              recalculateAnimationPositions: c,
              registerComponent: u,
              unregisterComponent: d,
              expansionSpring: h,
              mountPoints: m,
            } = s.useContext(F),
            p = s.useRef(null),
            f = s.useRef(null),
            g = s.useRef(void 0);
          s.useEffect(() => {
            c();
          }, [c]),
            s.useLayoutEffect(() => {
              let e = p.current;
              return (
                null != e && u(e, i, a),
                () => {
                  null != e && d(i, a);
                }
              );
            }, [i, a, u, d]);
          let A = s.useCallback(
            (e) => {
              let { height: t } = e;
              g.current !== t && (c(), (g.current = t));
            },
            [c],
          );
          (0, P.i4)(p, A);
          let x = m.get(i)?.current,
            C = null;
          return (
            null == x
              ? (C = null)
              : o && null != h
                ? (C = (0, l.jsxs)(l.Fragment, {
                    children: [
                      "collapsed" === a &&
                        (0, D.createPortal)(
                          (0, l.jsx)(r.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: (0, U.a)(
                                h.to({ range: [0, 1], output: [1, 0] }),
                              ),
                            },
                            children: n(f),
                          }),
                          x,
                        ),
                      "expanded" === a &&
                        (0, D.createPortal)(
                          (0, l.jsx)(r.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: (0, U.a)(
                                h.to({ range: [0, 1], output: [0, 1] }),
                              ),
                            },
                            children: n(f),
                          }),
                          x,
                        ),
                    ],
                  }))
                : "collapsed" === a && (C = (0, D.createPortal)(n(f), x)),
            (0, l.jsxs)("div", {
              style: {
                opacity: +((null == C && "collapsed" === a) || null == x),
              },
              ref: t,
              children: [n(p), C],
            })
          );
        }),
        B = (e) => {
          let {
              children: t,
              expandedContentRef: n,
              collapsedContentRef: i,
              expansionSpring: a,
            } = e,
            [r, o] = s.useState({}),
            [c, u] = s.useState([]),
            [d, h] = s.useState(() => new Map()),
            m = s.useCallback((e, t, n) => {
              o((l) => {
                let s = l[t] ?? { expanded: null, collapsed: null };
                return { ...l, [t]: { ...s, [n]: e } };
              }),
                h((e) => {
                  let n = new Map(e);
                  return n.set(t, s.createRef()), n;
                });
            }, []),
            p = s.useCallback((e, t) => {
              let n = !1;
              o((l) => {
                let s = l[e] ?? { expanded: null, collapsed: null };
                return (
                  (s[t] = null),
                  (n = null == s.expanded && null == s.collapsed),
                  { ...l, [e]: s }
                );
              }),
                n &&
                  h((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
            }, []),
            f = s.useCallback(() => {
              let e = [];
              for (let t in r) {
                if (null == r[t] || null == n.current || null == i.current)
                  continue;
                let l = r[t].collapsed,
                  s = r[t].expanded;
                if (null == l || null == s) continue;
                let a = s.getBoundingClientRect(),
                  o = n.current.getBoundingClientRect(),
                  c = l.getBoundingClientRect(),
                  u = i.current.getBoundingClientRect(),
                  d = a.top - o.top + 12,
                  h = c.top - u.top,
                  m = a.left - o.left + 12,
                  p = c.left - u.left,
                  f = -a.right + o.right + 12,
                  g = -c.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: p,
                  expandedLeft: m,
                  collapsedRight: g,
                  expandedRight: f,
                  collapsedTop: h,
                  expandedTop: d,
                  width: a.width,
                });
              }
              u(e);
            }, [r, n, i, u]);
          return (0, l.jsx)(F.Provider, {
            value: {
              registerComponent: m,
              unregisterComponent: p,
              animatedComponents: r,
              expandedContentRef: n,
              collapsedContentRef: i,
              recalculateAnimationPositions: f,
              animatedComponentProps: c,
              expansionSpring: a,
              mountPoints: d,
            },
            children: t,
          });
        },
        V = s.createContext({
          onCtxMenuClose: () => {},
          onCtxMenuOpen: () => {},
          onCtxMenuSelect: () => {},
          onGameSheetOpen: () => {},
          onGameSheetClose: () => {},
          collapsedHeight: 0,
          isExpanded: !1,
          isExpansionAnimationComplete: !1,
          quest: null,
          taskDetails: null,
        }),
        H = (e) => {
          let {
              children: t,
              isExpanded: n,
              isExpansionAnimationComplete: i,
              onCtxMenuClose: a,
              onCtxMenuOpen: r,
              onCtxMenuSelect: o,
              onGameSheetOpen: c,
              onGameSheetClose: u,
              collapsedHeight: d,
              quest: h,
              taskDetails: m,
            } = e,
            p = s.useMemo(
              () => ({
                isExpanded: n,
                isExpansionAnimationComplete: i,
                onCtxMenuClose: a,
                onCtxMenuOpen: r,
                onCtxMenuSelect: o,
                onGameSheetOpen: c,
                onGameSheetClose: u,
                collapsedHeight: d,
                quest: h,
                taskDetails: m,
              }),
              [n, i, a, r, o, c, u, d, h, m],
            );
          return (0, l.jsx)(V.Provider, { value: p, children: t });
        };
      var Q = n(775602),
        W = n(646764),
        z = n(717421);
      let q = () => {
        let e = document.body.style
          .getPropertyValue("--custom-guild-sidebar-width")
          .slice(0, -2);
        return parseInt("" !== e ? e : "375");
      };
      var Z = n(985018),
        K = n(173399);
      let $ = (e) => {
        let { isFullyExpanded: t, partnerBranding: n } = e,
          i = {
            label: !(function () {
              let [e, t] = s.useState(() => 270 > q());
              return (
                s.useEffect(() => {
                  let e = new MutationObserver(() => {
                    t(270 > q());
                  });
                  return (
                    e.observe(document.body, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    }),
                    () => e.disconnect()
                  );
                }, []),
                e
              );
            })(),
          }.label,
          c = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
          { quest: u } = s.useContext(V),
          { expansionSpring: d } = s.useContext(F),
          h = i ? -4 : 6;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.animated.div, {
              className: K.tE,
              style: {
                transform: (0, r.to)(
                  [
                    d.to({ range: [0, 1], output: [0, 0] }),
                    d.to({ range: [0, 1], output: [0, 82] }),
                    d.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                  ],
                  (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                ),
              },
              children: (0, l.jsx)(W.A, {
                learnMoreStyle: "text",
                learnMoreFontSize: t ? 9 : void 0,
                quest: u,
                questContent: f.uF.QUEST_BAR_V2,
                autoplay: t && !c,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                style: {
                  width: 48,
                  height: 48,
                  marginRight: 8,
                  borderRadius: 6,
                },
              }),
            }),
            (0, l.jsxs)(r.animated.div, {
              className: a()(K.pm, { [K.nd]: i }),
              style: {
                transform: (0, r.to)(
                  [
                    d.to({ range: [0, 1], output: [0, -48] }),
                    d.to({ range: [0, 1], output: [0, h] }),
                  ],
                  (e, t) => `translate(${e}px, ${t}px)`,
                ),
              },
              children: [
                (0, l.jsx)("div", {
                  className: a()({ [K.Iu]: !i }),
                  children: n,
                }),
                (0, l.jsx)(r.animated.div, {
                  className: a()(K.ol, { [K.yZ]: i }),
                  style: {
                    opacity: (0, U.a)(
                      d.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] }),
                    ),
                  },
                  children: (0, l.jsx)(_.E, {
                    color: "always-white",
                    lineClamp: 1,
                    variant: "text-xs/medium",
                    children: Z.intl.string(Z.t["3mgEQf"]),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Y = n(173839);
      let X = (0, r.animated)(O.Ay),
        J = () => {
          let e = (0, b.go)(),
            { expansionSpring: t } = s.useContext(F),
            {
              onCtxMenuOpen: n,
              onCtxMenuClose: i,
              onCtxMenuSelect: o,
              isExpanded: c,
              isExpansionAnimationComplete: u,
              quest: d,
            } = s.useContext(V),
            h = s.useCallback(() => {
              (0, j.Zc)(d, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: y.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
              });
            }, [d]),
            m = s.useCallback(() => {
              (0, M.pu)(d, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: y.Cy.OPEN_GAME_LINK,
                impressionId: e,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
              });
            }, [e, d]),
            p = c && u,
            g = (0, l.jsx)(N.D, {
              onClick: m,
              className: a()(Y.vk, { [Y.wm]: p }),
              children: (0, l.jsx)(X, {
                quest: d,
                withGameTile: !1,
                logotypeClassName: Y.Iu,
                logotypeStyle: {
                  height: 24,
                  maxWidth: 92,
                  transform: (0, r.to)(
                    [t.to({ range: [0, 1], output: [1, 1] })],
                    (e) => `scale(${e})`,
                  ),
                },
              }),
            });
          return (0, l.jsxs)(r.animated.div, {
            className: a()(Y.iE, Y.Ht, { [Y.tT]: p }),
            style: {
              transform: (0, r.to)(
                [t.to({ range: [0, 1], output: [6, 0] })],
                (e) => `translateY(${e}px)`,
              ),
            },
            children: [
              (0, l.jsx)(r.animated.div, {
                className: Y.Tu,
                style: {
                  opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })),
                },
              }),
              (0, l.jsx)($, { isFullyExpanded: p, partnerBranding: g }),
              (0, l.jsxs)(r.animated.div, {
                className: Y.P0,
                style: {
                  opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })),
                },
                children: [
                  (0, l.jsxs)(N.D, {
                    className: Y.y8,
                    onClick: h,
                    children: [
                      (0, l.jsx)(_.E, {
                        color: "always-white",
                        variant: "text-xs/normal",
                        children: Z.intl.string(Z.t.o6FLcF),
                      }),
                      (0, l.jsx)(S.c, {
                        color: R.A.colors.WHITE,
                        className: Y.P$,
                      }),
                    ],
                  }),
                  (0, l.jsx)(w.C, {
                    onOpen: n,
                    onClose: i,
                    onSelect: o,
                    questContent: f.uF.QUEST_BAR_V2,
                    quest: d,
                    shouldShowDisclosure: !0,
                    showShareLink: !0,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    children: (e) =>
                      (0, l.jsx)(N.D, {
                        ...e,
                        className: a()(Y.uJ, Y.rb),
                        "aria-label": Z.intl.string(Z.t.DEoVWZ),
                        children: (0, l.jsx)(I.j, {
                          size: "md",
                          color: "currentColor",
                          className: a()(Y.Bx, Y.ON),
                        }),
                      }),
                  }),
                ],
              }),
            ],
          });
        };
      var ee = n(821609),
        et = n(408278),
        en = n(862482),
        el = n(921853),
        es = n(793574),
        ei = n(693477),
        ea = n(838077),
        er = n(651892),
        eo = n(801365),
        ec = n(814793),
        eu = n(753386),
        ed = n(862611),
        eh = n(758836),
        em = n(519508);
      function ep(e) {
        let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
        return (0, l.jsx)(ee.$, {
          variant: "primary",
          fullWidth: !0,
          onClick: () => {
            let e =
              t.userStatus?.enrolledAt == null
                ? y.Cy.ACCEPT_QUEST
                : y.Cy.WATCH_VIDEO;
            (0, j.d5)({
              quest: t,
              questContent: f.uF.QUEST_BAR_V2,
              sourceQuestContent: n,
              sourceQuestContentCTA: e,
            });
          },
          size: "sm",
          text: (0, eu.WM)(s),
        });
      }
      let ef = (e) => {
          let { quest: t, sourceQuestContent: n } = e,
            s = (0, b.go)(),
            i = (0, er.wr)(t);
          return (0, l.jsx)(ee.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
              (0, M.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: y.Cy.OPEN_GAME_LINK,
                impressionId: s,
                sourceQuestContent: n,
              }),
            text: i,
          });
        },
        eg = (e) => {
          let { quest: t, sourceQuestContent: n } = e,
            s = (0, b.vU)()?.getId();
          return (0, l.jsx)(ee.$, {
            fullWidth: !0,
            onClick: () =>
              (0, M.se)(
                { quest: t },
                {
                  content: f.uF.QUEST_BAR_V2,
                  ctaContent: y.Cy.CONNECT_CONSOLE,
                  impressionId: s,
                  sourceQuestContent: n,
                },
              ),
            size: "sm",
            text: Z.intl.string(Z.t.csptqV),
          });
        },
        eA = (e) => {
          let { quest: t } = e,
            n = (0, ea.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, g.zW)(t);
          return (0, ec.vA)(t)
            ? (0, l.jsx)(ee.$, {
                fullWidth: !0,
                variant: "primary",
                icon: (0, j.Oz)(t),
                onClick: s,
                size: "sm",
                text: n,
              })
            : null;
        },
        ex = (e) => {
          let {
              quest: t,
              sourceQuestContent: n,
              taskDetails: s,
              popoutTargetElementRef: i,
              onGameSheetOpened: a,
              onGameSheetClosed: r,
            } = e,
            { applications: o } = s;
          return (0, l.jsx)(ed.A, {
            quest: t,
            sourceQuestContent: n,
            applications: o ?? [],
            targetElementRef: i,
            onGameSheetOpened: a,
            onGameSheetClosed: r,
            children: (e) =>
              (0, l.jsx)(ee.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: Z.intl.string(Z.t["93PTEs"]),
                ...e,
              }),
          });
        },
        eC = (e) => {
          let {
              quest: t,
              ctaLabel: n,
              onClick: i,
              questContent: a = f.uF.QUEST_BAR_V2,
              sourceQuestContent: r,
              ...o
            } = e,
            c = (0, T.ix)({ quest: t, questContent: a, sourceQuestContent: r }),
            u = s.useCallback(
              (e) => {
                i?.(e),
                  (0, eo.ks)(t.config) && t.userStatus?.claimedAt != null
                    ? (0, ei.Cz)({
                        tab: eh.G2.ORBS,
                        analyticsLocations: [],
                        analyticsSource: es.A.QUEST_HOME_PAGE,
                      })
                    : c();
              },
              [i, t.config, t.userStatus?.claimedAt, c],
            );
          return (0, l.jsx)(ee.$, {
            fullWidth: !0,
            onClick: u,
            text: n ?? Z.intl.string(Z.t.cfY4PE),
            ...o,
            size: o.size === en.$n.Sizes.MEDIUM ? "md" : "sm",
          });
        },
        eE = (e) => {
          let {
              sourceQuestContent: t,
              awaitingConsoleConnections: n,
              hasMadeProgress: i,
              isProgressing: a,
              activeScreen: r,
              popoutTargetElementRef: o,
            } = e,
            {
              quest: c,
              onGameSheetOpen: u,
              onGameSheetClose: d,
              taskDetails: h,
            } = s.useContext(V),
            m = c.userStatus?.completedAt != null,
            p = (0, C.vv)(c),
            g = r !== f.X0.SELECT && !i && !a,
            A = null;
          return (
            m
              ? (A = (0, l.jsx)(eC, { quest: c, sourceQuestContent: t }))
              : p
                ? (A = (0, l.jsx)(ep, {
                    quest: c,
                    sourceQuestContent: t,
                    taskDetails: h,
                  }))
                : (0, ec.vA)(c)
                  ? (A = (0, l.jsx)(eA, { quest: c }))
                  : r === f.X0.CONSOLE && n
                    ? (A = (0, l.jsx)(eg, { quest: c, sourceQuestContent: t }))
                    : g && (0, ec.ui)(c)
                      ? (A = (0, l.jsx)(ex, {
                          quest: c,
                          sourceQuestContent: t,
                          taskDetails: h,
                          popoutTargetElementRef: o,
                          onGameSheetOpened: u,
                          onGameSheetClosed: d,
                        }))
                      : g &&
                        (A = (0, l.jsx)(ef, {
                          quest: c,
                          sourceQuestContent: t,
                        })),
            null == A
              ? null
              : (0, l.jsx)("div", { className: em.lO, children: A })
          );
        };
      function ev(e) {
        let t = s.useRef(null);
        return (0, l.jsxs)("div", {
          className: em.oG,
          ref: t,
          children: [
            e.showBackButton &&
              (0, l.jsx)(et.K, {
                size: "sm",
                "aria-label": Z.intl.string(Z.t["13/7kX"]),
                onClick: e.onBack,
                icon: el.n,
                variant: "secondary",
              }),
            (0, l.jsx)(eE, { ...e, popoutTargetElementRef: t }),
          ],
        });
      }
      var eT = n(106778),
        ej = n(851110),
        eN = n(947638);
      let e_ = (e) => {
        let { overlayRef: t, progressBarRef: n, isHovered: i } = e,
          { quest: u, isExpanded: d } = s.useContext(V),
          { expansionSpring: h } = s.useContext(F),
          { completionSpring: p, startCompletionAnimation: f } = (function () {
            let [{ spring: e }, t] = (0, z.z)(
              () => ({ spring: 0 }),
              "animate-always",
            );
            return {
              completionSpring: e,
              startCompletionAnimation: s.useCallback(() => {
                t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
              }, [t]),
            };
          })(),
          g = u.userStatus?.completedAt != null,
          A = s.useRef(!1),
          x = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
          C = s.useRef(null),
          E = (0, o.bG)([m.A], () => m.A.hasLayers()),
          v = (0, c.A)(E),
          [T, j] = s.useState(null),
          [N, _] = s.useState(null),
          S = s.useRef(new eT.OH({ gravity: 0, wind: 0 })),
          R = (0, eT.f9)(T, N),
          I = s.useMemo(() => ["#51BC9D"], []),
          y = s.useCallback(() => {
            if (x) return;
            let e = n.current,
              t = C.current;
            if (null != t && null != e && R.isReady) {
              var l, s, i, a;
              let { x: n, y: r } = e.getBoundingClientRect(),
                { x: o, y: c } = t.getBoundingClientRect();
              R.createMultipleConfetti(
                ((l = n - o),
                (s = r - c),
                (i = e.clientHeight),
                (a = e.clientWidth),
                {
                  ...ej.Mw,
                  position: {
                    type: "static-random",
                    minValue: { x: l, y: s },
                    maxValue: { x: l + i, y: s + a },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: -20, y: -20 },
                    maxValue: { x: 20, y: 20 },
                  },
                  opacity: { type: "linear", value: 2, addValue: -0.1 },
                  dragCoefficient: { type: "static", value: 0.166 },
                  size: { type: "static-random", minValue: 2, maxValue: 3 },
                }),
                100,
              );
            }
          }, [n, C, R, x]),
          b = (0, c.A)(d);
        return (s.useEffect(() => {
          g && d && !b && (f(), y());
        }, [d, g, f, y, b]),
        s.useEffect(() => {
          g &&
            !E &&
            v &&
            setTimeout(() => {
              f(), y();
            }, 200);
        }, [g, v, E, f, y]),
        s.useEffect(() => {
          R.isReady && (!A.current && g && (f(), y()), (A.current = g));
        }, [g, A, y, f, R]),
        s.useEffect(() => {
          i && g && (f(), y());
        }, [i, g, f, y]),
        x)
          ? null
          : (0, l.jsxs)("div", {
              className: eN.iE,
              "aria-hidden": "true",
              ref: C,
              children: [
                (0, l.jsx)(r.animated.div, {
                  className: eN.Tp,
                  style: { opacity: (0, U.a)(p) },
                }),
                (0, l.jsx)(r.animated.div, {
                  className: a()(eN.sJ, eN.ix),
                  style: { opacity: (0, U.a)(p) },
                }),
                (0, l.jsxs)(r.animated.div, {
                  className: eN.KG,
                  style: {
                    transform: h
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => `translateY(${e}px)`),
                  },
                  children: [
                    (0, l.jsx)(eT.Fk, {
                      ref: j,
                      className: eN.t_,
                      environment: S.current,
                    }),
                    (0, l.jsx)(eT.K_, {
                      ref: _,
                      sprites: ["/assets/b909790cf1d80597.svg"],
                      colors: I,
                      spriteWidth: ej.wn,
                      spriteHeight: ej.wn,
                    }),
                    null != t.current &&
                      (0, D.createPortal)(
                        (0, l.jsx)(r.animated.div, {
                          className: a()(eN.sJ, eN.d7),
                          style: { opacity: (0, U.a)(p) },
                        }),
                        t.current,
                      ),
                  ],
                }),
              ],
            });
      };
      var eS = n(453384),
        eR = n(460131);
      let eI = (e) => {
        let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: i,
            percentComplete: a,
            activeScreen: r,
            popoutTargetElementRef: o,
          } = e,
          {
            quest: c,
            onGameSheetOpen: u,
            onGameSheetClose: d,
          } = s.useContext(V),
          h = (0, ea.VX)(c),
          m = (0, ea.tH)({
            quest: c,
            isExpanded: t,
            activeScreen: r,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
          });
        return (0, l.jsxs)("div", {
          className: eR.Z0,
          children: [
            (0, l.jsx)(G, {
              inState: n,
              id: "progress-bar",
              ref: i,
              children: (e) =>
                (0, l.jsx)(eS.A, {
                  ref: e,
                  style: "small",
                  percentComplete: a,
                  size: 42,
                  children: (0, l.jsx)(W.A, {
                    fullWidth: !0,
                    quest: c,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: !1,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                  }),
                }),
            }),
            (0, l.jsxs)("div", {
              className: eR.NZ,
              children: [
                (0, l.jsx)(G, {
                  inState: n,
                  id: "progress-title",
                  children: (e) =>
                    (0, l.jsx)(_.E, {
                      ref: e,
                      className: eR.FZ,
                      color: "text-strong",
                      variant: "text-sm/semibold",
                      children: h,
                    }),
                }),
                (0, l.jsx)(G, {
                  inState: n,
                  id: "progress-subtitle",
                  isTextTransition: !0,
                  children: (e) =>
                    (0, l.jsx)(_.E, {
                      ref: e,
                      className: eR.FZ,
                      color: "text-muted",
                      variant: "text-xs/normal",
                      children: m,
                    }),
                }),
              ],
            }),
          ],
        });
      };
      var ey = n(78385);
      function eb() {
        let {
            quest: e,
            onCtxMenuOpen: t,
            onCtxMenuClose: n,
            onCtxMenuSelect: i,
          } = s.useContext(V),
          r = (0, g.S5)(e.config.expiresAt);
        return (0, l.jsxs)("div", {
          className: ey.pS,
          children: [
            (0, l.jsx)(_.E, {
              variant: "text-xxs/medium",
              className: a()(ey.Uu, ey.TK),
              children: Z.intl.format(Z.t["pX+fmn"], { expirationDate: r }),
            }),
            (0, l.jsx)(w.C, {
              onOpen: t,
              onClose: n,
              onSelect: i,
              questContent: f.uF.QUEST_BAR_V2,
              quest: e,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              sourceQuestContent: f.uF.QUEST_BAR_V2,
              children: (e) =>
                (0, l.jsx)(N.D, {
                  ...e,
                  className: ey.rb,
                  "aria-label": Z.intl.string(Z.t.DEoVWZ),
                  children: (0, l.jsx)(I.j, {
                    size: "md",
                    color: "currentColor",
                    className: a()(ey.Bx, ey.U9),
                  }),
                }),
            }),
          ],
        });
      }
      var eM = n(249309);
      let ew = s.forwardRef(function (e, t) {
        let { className: n, overlayRef: i } = e,
          { expansionSpring: o } = s.useContext(F),
          {
            quest: c,
            taskDetails: u,
            isExpanded: d,
            isExpansionAnimationComplete: h,
          } = s.useContext(V),
          m = c.userStatus?.completedAt != null,
          p = (0, g.I3)(c),
          A = s.useRef(null),
          x = c.userStatus?.enrolledAt != null,
          C = null != p ? p.percentComplete : u.percentComplete,
          [E, v] = s.useState(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            m &&
              (0, l.jsx)(e_, {
                overlayRef: i,
                progressBarRef: A,
                isHovered: E,
              }),
            (0, l.jsx)(r.animated.div, {
              ref: t,
              "aria-hidden": d && h,
              className: a()(n, eM.hR, { [eM.Ag]: d, [eM.s]: x }),
              style: {
                opacity: (0, U.a)(o.to({ range: [0, 1], output: [1, 0] })),
                backgroundImage: m
                  ? `linear-gradient(90deg, ${k}, ${L})`
                  : void 0,
              },
              onMouseEnter: () => v(!0),
              onMouseLeave: () => v(!1),
              children: (0, l.jsxs)("div", {
                className: eM.o8,
                children: [
                  m &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(eb, {}),
                        (0, l.jsx)("div", { className: eM.yF }),
                      ],
                    }),
                  x
                    ? (0, l.jsx)(eI, {
                        contentLocation: "collapsed",
                        progressBarRef: A,
                        isExpanded: !1,
                        percentComplete: C,
                      })
                    : null,
                  m &&
                    (0, l.jsx)(ev, {
                      awaitingConsoleConnections: !1,
                      hasMadeProgress: !0,
                      isProgressing: !1,
                      activeScreen: f.X0.DESKTOP,
                      showBackButton: !1,
                      onBack: () => {},
                      sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                ],
              }),
            }),
          ],
        });
      });
      n(801541);
      var eO = n(889137),
        eU = n(417270),
        eD = n(782134),
        eP = n(534514),
        ek = n(825484),
        eL = n(607470),
        eF = n(409626),
        eG = n(829219),
        eB = n(405670),
        eV = n(112142),
        eH = n(859387),
        eQ = n(895253),
        eW = n(442734),
        ez = n(212614),
        eq = n(79545),
        eZ = n(139384),
        eK = n(114046),
        e$ = n(695366),
        eY = n(30370),
        eX = n(18437),
        eJ = n(780964),
        e0 = n(858897),
        e1 = n(540037);
      function e2(e) {
        let { text: t, quest: n, sourceQuestContent: s } = e,
          i = (0, eX.Ut)();
        return (0, l.jsx)(N.D, {
          className: e1.Z0,
          onClick: () => {
            i({
              questId: n.id,
              questContent: f.uF.QUEST_BAR_V2,
              questContentCTA: y.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
              sourceQuestContent: s,
            }),
              (0, e0.openUserSettings)(eJ.X.CONNECTIONS_PANEL);
          },
          children: (0, l.jsx)(_.E, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
          }),
        });
      }
      function e3(e) {
        let {
          xboxAndPlaystationAccounts: t,
          quest: n,
          sourceQuestContent: s,
        } = e;
        return t.length > 0
          ? (0, l.jsx)(e2, {
              text: Z.intl.string(Z.t["qiS+xj"]),
              quest: n,
              sourceQuestContent: s,
            })
          : null;
      }
      function e5(e) {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(_.E, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: Z.intl.string(Z.t.EJFSvD),
            }),
            (0, l.jsx)(e3, { ...e }),
          ],
        });
      }
      var e6 = n(947641),
        e8 = n(629436);
      function e4(e) {
        let { children: t, isComplete: n, hasNextStep: s } = e;
        return (0, l.jsxs)("li", {
          className: a()(e8.gY, { [e8.HP]: n }, { [e8.h4]: s }),
          children: [
            (0, l.jsxs)("div", {
              className: e8.cJ,
              children: [
                (0, l.jsx)("div", {
                  className: e8.$P,
                  children:
                    n &&
                    (0, l.jsx)(e6.r, {
                      className: e8.ap,
                      color: R.A.colors.WHITE,
                    }),
                }),
                s && (0, l.jsx)("div", { className: e8.UK }),
              ],
            }),
            (0, l.jsx)("div", { className: e8.M7, children: t }),
          ],
        });
      }
      function e9(e) {
        let { children: t } = e;
        return (0, l.jsx)(_.E, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: t,
        });
      }
      let e7 = function (e) {
        let { children: t, heading: n, steps: s } = e;
        return (0, l.jsxs)("div", {
          className: e8.iE,
          children: [
            (0, l.jsx)("div", {
              className: e8.Mj,
              children: (0, l.jsx)(eP.D, {
                className: e8.R_,
                color: "text-strong",
                variant: "text-xs/semibold",
                children: n,
              }),
            }),
            (0, l.jsx)("div", {
              className: e8.lp,
              children: (0, l.jsx)("ul", {
                children: s.map((e, t) =>
                  (0, l.jsx)(
                    e4,
                    {
                      isComplete: e.isComplete,
                      hasNextStep: t < s.length - 1,
                      children: e.renderContent(),
                    },
                    t,
                  ),
                ),
              }),
            }),
            t,
          ],
        });
      };
      var te = n(256023);
      function tt(e) {
        return (0, l.jsx)(_.E, {
          className: te.eW,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function tn(e) {
        let { quest: t, useReducedMotion: n } = e,
          i = (0, T.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
          r = (0, T.Xf)({ useReducedMotion: n }),
          o = (0, eX.Ut)(),
          c = (0, b.go)(),
          {
            errorHints: u,
            startingConsoleQuest: d,
            startConsoleQuest: h,
          } = (0, g.Wj)({
            questId: t.id,
            beforeRequest: () => {
              o({
                questId: t.id,
                questContent: f.uF.QUEST_BAR_V2,
                questContentCTA: y.Cy.DEFIBRILLATOR,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
              }),
                r.startAnimation();
            },
            afterRequest: r.stopAnimation,
          }),
          { header: m, renderBody: p } = s.useMemo(() => {
            let e = u.length > 0,
              n = t.config.messages.gameTitle;
            return {
              header: e
                ? (0, ec.ui)(t)
                  ? Z.intl.string(Z.t.N33EuL)
                  : Z.intl.formatToPlainString(Z.t["28Ql27"], { gameTitle: n })
                : (0, ec.ui)(t)
                  ? Z.intl.string(Z.t.YstzGO)
                  : Z.intl.formatToPlainString(Z.t.gX0Qcx, { gameTitle: n }),
              renderBody: e
                ? () =>
                    (0, l.jsx)(l.Fragment, {
                      children: u.map((e, n) => {
                        if (e.type === eK._.EXPIRED_CREDENTIAL) {
                          let s = eY.A.getAccount(
                              e.connected_account_id,
                              e.connected_account_type,
                            ),
                            i = (0, M.IG)(e),
                            a = (0, M.$J)(e);
                          return (0, l.jsx)(
                            tt,
                            {
                              children: Z.intl.format(i, {
                                account_name: s?.name,
                                onClick: () => {
                                  (0, M.v0)(
                                    { quest: t, platformType: a },
                                    {
                                      content: f.uF.QUEST_BAR,
                                      ctaContent:
                                        y.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                      impressionId: c,
                                      sourceQuestContent: f.uF.QUEST_BAR_V2,
                                    },
                                  );
                                },
                              }),
                            },
                            n,
                          );
                        }
                        return (0, l.jsx)(tt, { children: e.message }, n);
                      }),
                    })
                : () =>
                    (0, l.jsx)(_.E, {
                      className: te.eW,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: (0, ec.ui)(t)
                        ? Z.intl.string(Z.t.bUyEZZ)
                        : Z.intl.format(Z.t.GXqvC1, { gameTitle: n }),
                    }),
            };
          }, [u, t, c]);
        return (0, l.jsxs)("div", {
          className: te.XK,
          children: [
            (0, l.jsxs)("div", {
              className: te.oK,
              children: [
                (0, l.jsx)(e$.E, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === u.length ? te.pH : te.JA,
                  width: 16,
                  height: 16,
                }),
                (0, l.jsx)(_.E, { variant: "text-xs/medium", children: m }),
                (0, l.jsx)(N.D, {
                  className: a()(te.w, { [te.r9]: d }),
                  onClick: () => h(),
                  children: r.render(),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: a()({ [te.Iu]: d }),
              children: [
                p(),
                0 === u.length ? null : (0, l.jsx)(tt, { children: i }),
              ],
            }),
          ],
        });
      }
      let tl = function (e) {
          let { quest: t, taskDetails: n } = e,
            i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
            a = (0, g.Du)(),
            r = s.useMemo(
              () =>
                (0, M.bg)(t).filter((e) =>
                  a.xboxAndPlaystationAccounts.find((t) => t.type === e),
                ),
              [a.xboxAndPlaystationAccounts, t],
            ),
            {
              steps: c,
              hasConnectedAccounts: u,
              isProgressingQuestForLaunchedGame: d,
              isQuestComplete: h,
            } = s.useMemo(() => {
              let e = r.length > 0,
                s = e && (0, C.YL)(t),
                i = t.config.messages.gameTitle,
                o = t.userStatus?.completedAt != null;
              return {
                steps: [
                  {
                    renderContent: () =>
                      (0, l.jsx)(e5, {
                        ...a,
                        quest: t,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                      }),
                    isComplete: e || s || o,
                  },
                  {
                    renderContent: () =>
                      (0, l.jsx)(e9, {
                        children: (0, ec.ui)(t)
                          ? Z.intl.string(Z.t["5tXqFe"])
                          : Z.intl.formatToPlainString(Z.t["+8JB6Y"], {
                              gameTitle: i,
                            }),
                      }),
                    isComplete: s || o,
                  },
                  {
                    renderContent: () =>
                      (0, l.jsx)(e9, {
                        children: Z.intl.formatToPlainString(Z.t.HhfrYS, {
                          numMinutes: n.targetMinutes,
                        }),
                      }),
                    isComplete: o,
                  },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: o,
              };
            }, [a, r.length, t, n.targetMinutes]);
          return (0, l.jsx)(e7, {
            heading: Z.intl.string(Z.t.UPWlJu),
            steps: c,
            children:
              u &&
              !d &&
              !h &&
              (0, l.jsx)(tn, { useReducedMotion: i, quest: t }),
          });
        },
        ts = s.createContext({ springConfig: {}, isExpanded: !1 });
      function ti(e) {
        let t = s.useMemo(
          () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
          [e.springConfig, e.isExpanded],
        );
        return (0, l.jsx)(ts.Provider, { value: t, children: e.children });
      }
      function ta(e) {
        let { children: t } = e,
          { springConfig: n, isExpanded: i } = s.useContext(ts),
          a = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
          { ref: u, height: d = null } = (0, P.Ay)(),
          h = (0, c.A)(d) ?? null,
          [{ height: m }, p] = (0, z.z)(() => ({
            from: { height: 0 },
            config: n,
          }));
        return (
          s.useLayoutEffect(() => {
            null !== d && p({ height: d, immediate: !i || a || null === h });
          }, [d, p, i, a, h]),
          (0, l.jsx)(r.animated.div, {
            style: { height: null === h ? "auto" : m, overflow: "hidden" },
            children: (0, l.jsx)("div", {
              style: { overflow: "hidden" },
              ref: u,
              children: t,
            }),
          })
        );
      }
      n(134528), n(947204);
      var tr = n(909714);
      function to(e) {
        let { header: t, children: n } = e;
        return (0, l.jsxs)("div", {
          className: tr.Nr,
          children: [
            (0, l.jsxs)("div", {
              className: tr.wx,
              children: [
                (0, l.jsx)(e$.E, {
                  size: "custom",
                  color: "currentColor",
                  className: tr.Kk,
                  width: 16,
                  height: 16,
                }),
                (0, l.jsx)(eP.D, {
                  color: "text-default",
                  variant: "heading-sm/medium",
                  children: t,
                }),
              ],
            }),
            (0, l.jsx)(_.E, {
              color: "text-muted",
              variant: "text-xs/normal",
              className: tr.r2,
              children: n,
            }),
          ],
        });
      }
      let tc = function (e) {
        let { quest: t } = e,
          n = (0, g.aC)(t);
        if (0 === n.length) return null;
        let s = n.at(0);
        return s === Z.intl.string(Z.t.BV6xDm)
          ? (0, l.jsx)(to, {
              header: Z.intl.string(Z.t.onh6ct),
              children: Z.intl.string(Z.t.arVHRA),
            })
          : s === Z.intl.string(Z.t.MFGxFM)
            ? (0, l.jsx)(to, {
                header: Z.intl.string(Z.t.JPihZA),
                children: Z.intl.string(Z.t.MFGxFM),
              })
            : null;
      };
      var tu = n(31300),
        td = n(687966),
        th = n(825807);
      let tm = function (e) {
        let { onDesktop: t, onConsole: n } = e;
        return (0, l.jsxs)(ek.e, {
          direction: "vertical",
          fullWidth: !0,
          className: th.G,
          size: "sm",
          children: [
            (0, l.jsx)(ee.$, {
              onClick: t,
              text: Z.intl.string(Z.t["QXc01+"]),
              variant: "secondary",
              icon: tu.k,
              iconPosition: "end",
            }),
            (0, l.jsx)(ee.$, {
              onClick: n,
              text: Z.intl.string(Z.t["8lAfuB"]),
              variant: "secondary",
              icon: td._,
              iconPosition: "end",
            }),
          ],
        });
      };
      var tp = n(654487),
        tf = n(495707);
      let tg = s.forwardRef(function (e, t) {
        let {
            isHovered: n,
            asset: i,
            poster: a,
            className: r,
            autoPlay: c = !1,
          } = e,
          { isExpanded: u } = s.useContext(V),
          d = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
          h = s.useRef(null);
        return (
          s.useEffect(() => {
            null != h.current &&
              (u && (!d || n)
                ? ((h.current.currentTime = 0), h.current.play())
                : h.current.pause());
          }, [h, u, n, d]),
          (0, eZ.A)(h, tp.rE.QUESTS_BAR),
          (0, l.jsx)(eL.A, {
            ref: (e) => {
              (h.current = e),
                null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: c,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, l.jsx)("source", {
              src: i.url,
              type: i.mimetype ?? void 0,
            }),
          })
        );
      });
      function tA(e) {
        let { onClick: t } = e,
          { quest: n } = s.useContext(V),
          i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
          [r, c] = s.useState(!1),
          u = (0, eH.tW)(n, eH.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
          d = (0, eH.tW)(n, eH.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
          h = (0, eB.Kr)((e) => e.getVideoProgressState)(n.id),
          m = n.userStatus?.completedAt != null && h === eB.K2.COMPLETED,
          p = !m && (!i || r);
        return (0, l.jsxs)(N.D, {
          className: tf.QO,
          onClick: t,
          onMouseEnter: () => {
            i && !r && c(!0);
          },
          onMouseLeave: () => {
            i && r && c(!1);
          },
          children: [
            null != d &&
              (0, l.jsx)(E.Sn, {
                id: "QuestBarContentExpanded_videoThumbnail",
                children: (e) =>
                  (0, l.jsx)("img", {
                    ref: e,
                    alt: "",
                    src: d.url,
                    className: tf.Ue,
                  }),
              }),
            null != u
              ? (0, l.jsx)(E.Sn, {
                  id: "QuestBarContentExpanded_video",
                  children: (e) =>
                    (0, l.jsx)(tg, {
                      ref: e,
                      isHovered: r,
                      autoPlay: !1,
                      asset: u,
                      poster: d?.url,
                      className: a()(tf.NM, { [tf.Gc]: p }),
                    }),
                })
              : null,
            (0, l.jsx)("div", {
              className: tf.LT,
              children: m
                ? (0, l.jsx)(eU.m, { color: R.A.colors.WHITE, className: tf.t })
                : (0, l.jsx)(eD.u, {
                    color: R.A.colors.WHITE,
                    className: tf.t,
                  }),
            }),
          ],
        });
      }
      function tx(e) {
        let { quest: t } = e;
        return (0, l.jsx)(W.A, {
          className: a()(tf.Qq, tf.wq),
          learnMoreStyle: "text",
          quest: t,
          questContent: f.uF.QUEST_BAR_V2,
          sourceQuestContent: f.uF.QUEST_BAR_V2,
        });
      }
      function tC(e) {
        let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
          {
            quest: c,
            onGameSheetOpen: u,
            onGameSheetClose: d,
            taskDetails: h,
          } = s.useContext(V),
          { expansionSpring: m } = s.useContext(F),
          A = s.useRef(null),
          x = (0, o.bG)([p.A], () => p.A.isEnrolling(c.id), [c]),
          C = s.useMemo(() => (0, eH.tW)(c, eH.fY.QUEST_BAR_HERO), [c]),
          v = (0, ea.NA)({ quest: c }),
          T = s.useMemo(() => (0, eH.tW)(c, eH.fY.HERO_IMAGE), [c]),
          N = s.useMemo(
            () => (null == T ? {} : { backgroundImage: `url(${T.url})` }),
            [T],
          ),
          S = eV.t.useConfig({ location: tp.rE.QUESTS_BAR }),
          R = (0, ea.mU)({
            quest: c,
            location: tp.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: A,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
          }),
          I = (0, eq.Pd)(c),
          y = (0, g.SD)(c),
          b = (0, g.Oq)(),
          M = b && y;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              ref: A,
              children: (0, l.jsxs)("div", {
                className: tf.do,
                ref: n,
                children: [
                  (0, l.jsxs)("div", {
                    className: tf.zH,
                    children: [
                      (0, l.jsx)(tx, { quest: c }),
                      (0, l.jsx)(eP.D, {
                        className: tf.DD,
                        color: "text-strong",
                        variant: "heading-md/medium",
                        children: Z.intl.format(Z.t.EQa7os, {
                          questName: c.config.messages.questName,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: tf.zf,
                        children: [
                          (0, l.jsx)(_.E, {
                            className: tf.h_,
                            variant: "text-xs/normal",
                            children: R,
                          }),
                          y &&
                            (0, l.jsx)(eW.e, {
                              questId: c.id,
                              canUseQuestOrbMultiplier: b,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: tf.lO,
                    children: (0, l.jsx)(ek.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children:
                        S.enabled &&
                        I === eq.UA.UNENROLLED &&
                        S.enabledQuestStates.has(eq.UA.UNENROLLED)
                          ? (0, l.jsx)(ez.A, {
                              quest: c,
                              surface: eq.V3.QUEST_BAR_FOOTER,
                              size: "sm",
                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                            })
                          : (0, l.jsx)(ee.$, {
                              onClick: t ? i : void 0,
                              variant: "primary",
                              loading: x,
                              text: v,
                              size: "sm",
                              icon: (0, j.Oz)(c),
                              fullWidth: !0,
                            }),
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)(eQ.A, { visible: M, glow: !0, className: tf.Ph }),
            null != T &&
              (0, l.jsx)(r.animated.div, {
                className: tf.AK,
                style: { opacity: (0, U.a)(m.to([0, 1], [1, 0])) },
                children: (0, l.jsx)("div", {
                  className: a()(tf.LC, tf.Ge),
                  style: N,
                }),
              }),
            (0, l.jsxs)(r.animated.div, {
              className: tf.IC,
              style: {
                backdropFilter: (0, U.Q)(
                  m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`),
                ),
                filter: (0, U.Q)(
                  m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`),
                ),
              },
              children: [
                C.isAnimated
                  ? (0, l.jsx)(E.Sn, {
                      id: "QuestBarContentExpanded_heroAnimated",
                      children: (e) =>
                        (0, l.jsx)(tg, {
                          ref: e,
                          autoPlay: !0,
                          asset: C,
                          className: tf.LO,
                        }),
                    })
                  : (0, l.jsx)(E.Sn, {
                      id: "QuestBarContentExpanded_heroStatic",
                      children: (e) =>
                        (0, l.jsx)("img", {
                          ref: e,
                          alt: "",
                          className: tf.LO,
                          src: C.url,
                        }),
                    }),
                (0, l.jsx)("div", { className: tf.tV }),
              ],
            }),
          ],
        });
      }
      function tE(e) {
        let { overlayRef: t, containerRef: n } = e,
          { quest: i, taskDetails: o } = s.useContext(V),
          { expansionSpring: c } = s.useContext(F),
          u = i.userStatus?.completedAt != null,
          d = o.percentComplete > 0,
          h = (0, g.Vn)(i),
          [m, p, A] = (0, g.Qo)(i, o),
          x = s.useRef(null),
          E = s.useRef(null),
          v = (0, g.RR)({ quest: i }),
          T = (0, C.vv)(i),
          N = (0, g.I3)(i),
          _ = s.useCallback(() => {
            (0, j.d5)({
              quest: i,
              questContent: f.uF.QUEST_BAR_V2,
              sourceQuestContent: f.uF.QUEST_BAR_V2,
              sourceQuestContentCTA: y.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
          }, [i]),
          S = null != N ? N.percentComplete : o.percentComplete;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.animated.div, {
              className: a()(tf.tv, tf.ag),
              style: {
                backgroundImage: `linear-gradient(90deg, ${k}, ${L})`,
                opacity: (0, U.a)(c.to({ range: [0, 1], output: [1, 0] })),
              },
            }),
            (0, l.jsxs)("div", {
              className: tf.Fe,
              ref: (e) => {
                "function" == typeof n ? n(e) : null != n && (n.current = e),
                  null != e && (E.current = e);
              },
              children: [
                (0, l.jsx)(eb, {}),
                (0, l.jsx)("div", { className: tf.yF }),
                (0, l.jsx)(e_, {
                  overlayRef: t,
                  progressBarRef: x,
                  isHovered: !1,
                }),
                (0, l.jsx)(eI, {
                  contentLocation: "expanded",
                  progressBarRef: x,
                  isExpanded: !0,
                  percentComplete: S,
                  activeScreen: m,
                  popoutTargetElementRef: E,
                }),
                (0, l.jsx)(ta, {
                  children:
                    !u &&
                    !(0, M.W1)(i) &&
                    (0, eO.YW)(m)
                      .with(f.X0.SELECT, () =>
                        (0, l.jsx)(tm, {
                          onConsole: () => A(tp.fO.CONSOLE),
                          onDesktop: () => A(tp.fO.DESKTOP),
                        }),
                      )
                      .with(f.X0.DESKTOP, () => (0, l.jsx)(tc, { quest: i }))
                      .with(f.X0.CONSOLE, () =>
                        (0, l.jsx)(tl, { quest: i, taskDetails: o }),
                      )
                      .exhaustive(),
                }),
                (0, l.jsxs)(ta, {
                  children: [
                    T && (0, l.jsx)(tA, { onClick: _ }),
                    (0, l.jsx)(ev, {
                      awaitingConsoleConnections: v,
                      hasMadeProgress: d,
                      isProgressing: h,
                      activeScreen: m,
                      showBackButton:
                        m !== f.X0.SELECT && p.length > 1 && !d && !h,
                      onBack: () => A(null),
                      sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: a()(tf.tv, tf.Sx),
              style: { backgroundImage: `linear-gradient(90deg, ${k}, ${L})` },
            }),
          ],
        });
      }
      async function tv(e, t, n, l) {
        (0, C.vv)(e)
          ? await (0, j.e0)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: l,
              sourceQuestContentCTA: n,
            })
          : (0, ec.vA)(e)
            ? await (0, eG.Oy)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: l,
              })
            : (0, eG.Oy)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: l,
              });
      }
      let tT = s.forwardRef(function (e, t) {
        let { children: n, className: i, overlayRef: o } = e,
          {
            collapsedHeight: c,
            isExpanded: u,
            isExpansionAnimationComplete: d,
            quest: h,
          } = s.useContext(V),
          { expansionSpring: m } = s.useContext(F),
          { launchInGameActivity: p } = (0, g.zW)(h),
          A = (0, ec.vA)(h),
          x = s.useCallback(async () => {
            let e = A ? y.Cy.START_QUEST : y.Cy.ACCEPT_QUEST;
            await tv(h, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), A && p();
          }, [h, p, A]),
          C = h.userStatus?.enrolledAt != null,
          E = u && d;
        return (0, l.jsxs)(r.animated.div, {
          "aria-hidden": !E,
          className: a()(i, tf.Rh, { [tf.Yd]: E, [tf.iH]: C }),
          style: {
            transform: (0, r.to)(
              [
                m.to({ range: [0, 1], output: [0, -100] }),
                m.to({ range: [0, 1], output: [0, c] }),
              ],
              (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
          },
          children: [
            n,
            (0, l.jsx)(r.animated.div, {
              style: { opacity: 1 },
              children: C
                ? (0, l.jsx)(tE, { overlayRef: o, containerRef: t })
                : (0, l.jsx)(tC, {
                    isInteractable: E,
                    containerRef: t,
                    onAcceptQuest: x,
                  }),
            }),
          ],
        });
      });
      var tj = n(717695);
      function tN() {
        let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
          } = s.useContext(F),
          { isExpanded: a } = s.useContext(V);
        return (
          s.useEffect(() => {
            n();
          }, [n, a]),
          (0, l.jsx)("div", {
            style: {
              overflow: "hidden",
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 5,
            },
            children: t.map((t) => {
              let {
                  id: n,
                  collapsedLeft: s,
                  expandedLeft: a,
                  collapsedTop: o,
                  expandedTop: c,
                  width: u,
                } = t,
                d = i.get(n);
              return (0, l.jsx)(
                r.animated.div,
                {
                  ref: d,
                  style: {
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: u,
                    transform: (0, r.to)(
                      [
                        e.to({ range: [0, 1], output: [s, a] }),
                        e.to({ range: [0, 1], output: [o, c] }),
                      ],
                      (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                  },
                },
                n,
              );
            }),
          })
        );
      }
      var t_ = n(561844),
        tS = n(652215),
        tR = n(731738),
        tI = n(831062),
        ty = n(260364),
        tb = n(737595);
      function tM(e) {
        let { isExpanded: t, questId: n } = e;
        return (
          (0, g.H6)({
            mode: t ? tp.fP.EXPANDED : tp.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
          }),
          null
        );
      }
      function tw() {
        return (
          s.useEffect(() => {
            h.trigger();
          }, []),
          null
        );
      }
      function tO(e) {
        let { quest: t } = e,
          n = (0, x.L)({ quest: t, location: tp.rE.QUESTS_BAR }),
          i = (0, A.s)(),
          u = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
          { isQuestBarVisible: d, reason: h } = (0, T.TQ)({ quest: t }),
          N = (0, o.bG)([m.A], () => m.A.hasLayers()),
          _ = s.useRef(null),
          S = s.useMemo(() => (0, C.vv)(t), [t]),
          R = t.id,
          I = t.userStatus?.enrolledAt != null,
          b = (0, c.A)(I),
          M = t.userStatus?.completedAt != null,
          { hasError: w, isLoading: O } = (0, E.Gk)(),
          U = s.useContext(tj.Z) || (i && d && !O && !u),
          {
            isExpanded: D,
            setIsExpanded: P,
            expandQuestBar: k,
            isExpansionAnimationComplete: L,
            isVisibilityAnimationAtRest: F,
            expansionSpring: G,
            visibilitySpring: V,
            springConfig: W,
          } = (function (e) {
            let {
                isQuestAccepted: t,
                isQuestCompleted: n,
                isQuestBarVisible: l,
              } = e,
              i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
              [a, r] = s.useState(!1),
              [c, u] = s.useState(!0),
              [d, h] = s.useState(!0),
              m = s.useRef(l),
              p = s.useCallback(
                (e) => {
                  n || (u(!1), r(e));
                },
                [n],
              ),
              f = s.useCallback(() => {
                p(!0);
              }, [p]),
              g = s.useCallback(() => {
                p(!1);
              }, [p]),
              A = t ? tp.ZV : tp.Ko,
              [{ expansionSpring: x }, C] = (0, z.z)(() => ({
                from: { expansionSpring: 0 },
                config: A,
                onRest: () => {
                  u(!0);
                },
                onStart: () => {
                  u(!1);
                },
              }));
            s.useEffect(() => {
              C({ expansionSpring: +!!a, immediate: i });
            }, [a, C, i]);
            let { visibilitySpring: E } = (0, z.z)({
              from: { visibilitySpring: 0 },
              to: { visibilitySpring: +!!l },
              config: { tension: 250, friction: 10, clamp: !0 },
              onRest: () => {
                h(!0);
              },
              onStart: () => {
                h(!1);
              },
            });
            return (
              s.useLayoutEffect(() => {
                l !== m.current && h(!1), (m.current = l);
              }, [l]),
              {
                isExpanded: a,
                setIsExpanded: p,
                expandQuestBar: f,
                collapseQuestBar: g,
                isExpansionAnimationComplete: c,
                isVisibilityAnimationAtRest: d,
                expansionSpring: x,
                visibilitySpring: E,
                springConfig: A,
              }
            );
          })({ isQuestAccepted: I, isQuestCompleted: M, isQuestBarVisible: U }),
          {
            handleCtxMenuOpened: q,
            handleCtxMenuClosed: Z,
            handleCtxMenuSelection: K,
            handleGameSheetOpened: $,
            handleGameSheetClosed: Y,
            handleFocusWithoutDelay: X,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
          } = (function (e) {
            let {
                quest: t,
                isExpanded: n,
                setIsExpanded: l,
                expandQuestBar: i,
                isQuestCompleted: a,
                isQuestAccepted: r,
                prevIsQuestAccepted: o,
                impressionRef: c,
              } = e,
              u = s.useRef(-1),
              d = s.useRef(!1),
              [h, m] = s.useState(!1),
              [p, g] = s.useState(!1),
              A = s.useCallback(() => {
                m(!0);
              }, []),
              x = s.useCallback(() => {
                m(!1), d.current || a || l(!1);
              }, [a, l]),
              C = s.useCallback(() => {
                m(!1), a || l(!1), (d.current = !1);
              }, [a, l]),
              E = s.useCallback(() => {
                g(!0);
              }, []),
              v = s.useCallback(() => {
                g(!1), l(!1);
              }, [l]),
              T = s.useCallback(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (n) return;
                  let { withDelay: t = !1 } = e;
                  t ? (u.current = window.setTimeout(i, 75)) : i();
                },
                [i, n],
              ),
              j = s.useCallback(() => {
                T();
              }, [T]),
              N = s.useCallback(() => {
                window.clearTimeout(u.current), h || p || d.current || l(!1);
              }, [h, p, l]),
              _ = s.useCallback(() => {
                (0, t_.av)({
                  questId: t.id,
                  event: tS.HAw.QUEST_HOVER,
                  properties: {
                    content_id: f.uF.QUEST_BAR,
                    content_name: (0, y.jO)(f.uF.QUEST_BAR),
                    impression_id: c.current?.getId(),
                  },
                  shouldExtendSession: !0,
                  sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                  (d.current = !0),
                  T({ withDelay: !0 });
              }, [T, c, t.id]),
              S = s.useCallback(() => {
                (0, t_.av)({
                  questId: t.id,
                  event: tS.HAw.QUEST_HOVER_OFF,
                  properties: {
                    content_id: f.uF.QUEST_BAR,
                    content_name: (0, y.jO)(f.uF.QUEST_BAR),
                    impression_id: c.current?.getId(),
                  },
                  sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                  (d.current = !1),
                  N();
              }, [N, c, t.id]);
            return (
              s.useEffect(() => {
                p && S();
              }, [p, S]),
              s.useLayoutEffect(() => {
                r && !o && d.current && i();
              }, [i, r, o]),
              s.useLayoutEffect(() => {
                a || !r || o || d.current || l(!1);
              }, [r, a, o, l]),
              {
                ctxMenuOpen: h,
                gameSheetOpen: p,
                handleCtxMenuOpened: A,
                handleCtxMenuClosed: x,
                handleCtxMenuSelection: C,
                handleGameSheetOpened: E,
                handleGameSheetClosed: v,
                handleFocus: T,
                handleFocusWithoutDelay: j,
                handleBlur: N,
                handleMouseEnter: _,
                handleMouseLeave: S,
              }
            );
          })({
            quest: t,
            isExpanded: D,
            setIsExpanded: P,
            expandQuestBar: k,
            isQuestCompleted: M,
            isQuestAccepted: I,
            prevIsQuestAccepted: b,
            impressionRef: _,
          });
        !(function (e) {
          let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: l,
            isQuestBarVisible: i,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: r,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: c,
            isQuestEnrollmentBlocked: u,
            impressionRef: d,
          } = e;
          s.useEffect(() => {
            n &&
              ((0, t_.av)({
                questId: t.id,
                event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  content_id: f.uF.QUEST_BAR,
                  content_name: (0, y.jO)(f.uF.QUEST_BAR),
                  reason: "asset_loading_error",
                  impression_id: d.current?.getId(),
                },
                sourceQuestContent: f.uF.QUEST_BAR_V2,
              }),
              tI.A.increment({
                name: tR.K.QUEST_CONTENT_RENDERING_FAILURE,
                tags: [
                  `quest_id:${t.id}`,
                  `quest_content:${(0, y.jO)(f.uF.QUEST_BAR)}`,
                  "reason:asset_loading_error",
                ],
              }));
          }, [n, d, t.id]),
            s.useEffect(() => {
              l ||
                (0, t_.av)({
                  questId: t.id,
                  event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                  properties: {
                    content_id: f.uF.QUEST_BAR,
                    content_name: (0, y.jO)(f.uF.QUEST_BAR),
                    reason: "not_eligible_for_quest",
                    impression_id: d.current?.getId(),
                  },
                  sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [l, d, t.id]),
            s.useEffect(() => {
              i ||
                !a ||
                r ||
                (0, t_.av)({
                  questId: t.id,
                  event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                  properties: {
                    content_id: f.uF.QUEST_BAR,
                    content_name: (0, y.jO)(f.uF.QUEST_BAR),
                    reason: o,
                    impression_id: d.current?.getId(),
                  },
                  sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [i, a, r, t.id, o, d]),
            s.useEffect(() => {
              (!c || u) && ty.A.clearTracking(),
                i && a && !r && !n && l && ty.A.stopTracking(t.id);
            }, [c, u, i, a, r, n, l, t.id]);
        })({
          quest: t,
          hasAssetsError: w,
          isEligibleForQuests: i,
          isQuestBarVisible: U,
          isVisibilityAnimationAtRest: F,
          isLoadingAssets: O,
          currentQuestVisibleReason: h,
          shouldShowQuestBar: d,
          isQuestEnrollmentBlocked: u,
          impressionRef: _,
        });
        let el = s.useRef(null),
          es = s.useRef(null),
          ei = s.useRef(null),
          ea = (0, g.fc)(t),
          er = (0, g.UH)(t);
        if (
          (s.useEffect(() => {
            S && (0, j.l9)();
          }, [S]),
          !i || (!U && F && !O) || w)
        )
          return (
            w
              ? n.log("Not rendered due to asset error")
              : i || n.log("Not rendered due to ineligibility"),
            null
          );
        let eo = 70 + 78 * !!M;
        return (0, l.jsx)(v.R, {
          questOrQuests: t,
          questContent: f.uF.QUEST_BAR_V2,
          overrideVisibility: !N && U,
          onImpression: er,
          sourceQuestContent: f.uF.QUEST_BAR_V2,
          children: (e, n) => (
            (_.current = n.current),
            (0, l.jsxs)("div", {
              className: tb.dK,
              children: [
                U &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(tM, { questId: R, isExpanded: D }),
                      (0, l.jsx)(tw, {}),
                    ],
                  }),
                (0, l.jsx)(r.animated.div, {
                  "aria-hidden": !U,
                  onMouseLeave: en,
                  onMouseEnter: et,
                  onFocus: X,
                  onBlur: ee,
                  className: a()(tb.iE, { [tb.Xc]: !U, [tb.uv]: U && F }),
                  style: { height: V.to({ range: [0, 1], output: [0, eo] }) },
                  children: (0, l.jsx)(r.animated.div, {
                    className: a()(tb.FG, { [tb.E$]: D, [tb.KA]: I }),
                    children: (0, l.jsx)(ti, {
                      springConfig: W,
                      isExpanded: D,
                      children: (0, l.jsx)(B, {
                        expandedContentRef: el,
                        collapsedContentRef: es,
                        expansionSpring: G,
                        children: (0, l.jsxs)(H, {
                          quest: t,
                          taskDetails: ea,
                          isExpanded: D,
                          isExpansionAnimationComplete: L,
                          onCtxMenuClose: Z,
                          onCtxMenuOpen: q,
                          onCtxMenuSelect: K,
                          onGameSheetOpen: $,
                          onGameSheetClose: Y,
                          collapsedHeight: eo,
                          children: [
                            (0, l.jsx)(
                              ew,
                              { ref: es, className: tb.Qs, overlayRef: ei },
                              M
                                ? "collapsed-with-rewards"
                                : "collapsed-without-rewards",
                            ),
                            (0, l.jsx)(tT, {
                              className: tb.Qs,
                              overlayRef: ei,
                              ref: el,
                              children: (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(tN, {}),
                                  !I && (0, l.jsx)(J, {}),
                                ],
                              }),
                            }),
                            (0, l.jsx)("div", { ref: ei, className: tb.Lw }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          ),
        });
      }
      let tU =
        21552 == n.j
          ? function () {
              let e = (0, T.dN)();
              return null == e
                ? null
                : (0, l.jsx)(
                    E.jY,
                    {
                      source: tp.rE.QUESTS_BAR,
                      questId: e.id,
                      children: (0, l.jsx)(tO, { quest: e }),
                    },
                    e.id,
                  );
            }
          : null;
    },
    717695(e, t, n) {
      n.d(t, { A: () => i, Z: () => s });
      var l = n(627968);
      let s = n(64700).createContext(!1);
      function i(e) {
        return (0, l.jsx)(s.Provider, { value: !0, children: e.children });
      }
    },
    442734(e, t, n) {
      n.d(t, { e: () => f });
      var l = n(627968),
        s = n(661531),
        i = n(602853),
        a = n(939249),
        r = n(403581),
        o = n(834730),
        c = n(998304),
        u = n(890687),
        d = n(545986),
        h = n(652215),
        m = n(985018),
        p = n(900601);
      function f(e) {
        let { onClick: t, questId: n, canUseQuestOrbMultiplier: f } = e,
          g = (0, u.ZP)(n),
          A = (0, i.r)(
            s.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
            h.NJ8.DARK,
          ).hex(),
          x = (0, i.r)(
            s.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
            h.NJ8.DARK,
          ).hex(),
          C = (0, i.r)(s.A.colors.BACKGROUND_BASE_LOWEST, h.NJ8.DARK).hex(),
          E = (0, c.cb)(A, 0.5),
          v = (0, c.cb)(x, 0.5);
        if (null == g) return null;
        let T = f
          ? m.intl.formatToPlainString(m.t.l2UfLG, { bonusOrbMultiplier: g })
          : m.intl.formatToPlainString(m.t["G+mKoo"], {
              bonusOrbMultiplier: g,
            });
        return (0, l.jsx)(a.D, {
          onClick: () => {
            (0, d.gC)(g, f), t?.();
          },
          "aria-label": T,
          children: (0, l.jsxs)("div", {
            className: p.I,
            style: {
              "--custom-pill-gradient-start": E,
              "--custom-pill-gradient-end": v,
              "--custom-pill-base-color": C,
            },
            children: [
              (0, l.jsx)(r.t, { size: "xs", color: "white" }),
              (0, l.jsx)(o.E, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: T,
              }),
            ],
          }),
        });
      }
    },
    43203(e, t, n) {
      n.d(t, { $: () => m, A: () => p });
      var l = n(228366),
        s = n(376728),
        i = n(976860),
        a = n(495544),
        r = n(954571),
        o = n(723702),
        c = n(19575),
        u = n(636401),
        d = n(613057),
        h = n(652215);
      async function m(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { invite: d } = await s.Ay.resolveInvite(e, t);
        if (null == d)
          throw new u.A(
            { errorCode: h.Lw6.INVALID_INVITE },
            `Invalid invite id: ${e}`,
          );
        return (
          n?.installationId != null &&
            r.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
              received_installation_id: n.installationId,
              location: "openInviteFromRPC",
            }),
          a.default.isAuthenticated()
            ? l.h.dispatch({
                type: "INVITE_MODAL_OPEN",
                invite: d,
                code: e,
                context: h.BRT.APP,
                received_installation_id:
                  null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                s.Ay.setReceivedInstallationIdForInviteCode(
                  d.code,
                  String(n.installationId),
                ),
              (0, i.bG)(h.BVt.INVITE(e))),
          o.isPlatformEmbedded && c.Ay.focus(),
          { invite: d, code: e }
        );
      }
      let p = {
        [h.e$_.OPEN_INVITE]: {
          scope: d.hj,
          async handler(e) {
            let { args: t } = e,
              { code: n, ...l } = t;
            await m(n, "RPC OPEN_INVITE Handler", l);
          },
        },
      };
    },
    907135(e, t, n) {
      n.d(t, { A: () => J });
      var l,
        s,
        i = n(627968),
        a = n(64700),
        r = n(289873),
        o = n(331322),
        c = n(534514),
        u = n(834730),
        d = n(821609),
        h = n(964486),
        m = n(847599),
        p = n(595746),
        f = n(240248),
        g = n(110259);
      n(181658);
      var A = n(499785),
        x = n(652215);
      async function C() {
        let e = await A.A.get({
          url: x.Rsh.SAFETY_FLOWS_TASK,
          trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
          rejectWithError: !0,
        });
        return 204 === e.status ? null : e.body;
      }
      async function E(e) {
        return (
          await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
          })
        ).body;
      }
      let v = a.createContext(null);
      function T() {
        let e = a.useContext(v);
        if (null == e)
          throw Error(
            "useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider",
          );
        return e;
      }
      var j = n(837451),
        N = n(985018),
        _ =
          (((l = {})[(l.REFRESH_APP = -1)] = "REFRESH_APP"),
          (l[(l.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
          (l[(l.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
          l);
      let S = {
          EMAIL_VERIFICATION: "email_verification",
          PHONE_VERIFICATION: "phone_verification",
          GENERIC_CALL_TO_ACTION: "generic_call_to_action",
          REFRESH_APP: "refresh_app",
          AGE_VERIFICATION: "age_verification",
        },
        R = new Set(Object.values(S));
      N.intl.string(j.default["Qm6K/s"]), N.intl.string(j.default["dSkE/A"]);
      var I =
          (((s = {}).Empty = "empty"),
          (s.VerificationCode = "verification_code"),
          s),
        y = n(627575),
        b = n(17928),
        M = n(155718),
        w = n(139716),
        O = n(287809),
        U = n(430993),
        D = n(825484),
        P = n(436818);
      let k = (e) => {
          let { actions: t, footerInput: n } = e;
          return 0 === t.length && null == n
            ? null
            : (0, i.jsxs)("footer", {
                className: P.q,
                children: [
                  null != n && (0, i.jsx)("div", { children: n }),
                  (0, i.jsx)(D.e, {
                    className: P.G,
                    justify: "end",
                    children: t.map((e, t) => (0, i.jsx)(d.$, { ...e }, t)),
                  }),
                ],
              });
        },
        L = { bottom: 40, left: 32, right: 32, top: 32 };
      var F = n(831067);
      let G = (e) => {
        let { children: t, actions: n, footerInput: l, title: s } = e;
        return (0, i.jsxs)(o.B, {
          direction: "vertical",
          justify: "start",
          padding: L,
          className: F.kL,
          children: [
            (0, i.jsx)(c.D, {
              variant: "heading-lg/semibold",
              className: F.R_,
              children: s,
            }),
            (0, i.jsx)(U.c, { children: t }),
            (0, i.jsx)("div", { className: F.Ic }),
            (0, i.jsx)(k, { actions: n, footerInput: l }),
          ],
        });
      };
      var B = n(242235);
      let V = {
          refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
              l = a.useCallback(async () => {
                await t({ type: I.Empty }), window.location.reload();
              }, [t]);
            return (0, i.jsxs)("div", {
              className: B.kL,
              children: [
                (0, i.jsx)(c.D, {
                  variant: "heading-lg/bold",
                  className: B.DD,
                  children: N.intl.string(j.default.v52itt),
                }),
                (0, i.jsx)(u.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: B.h_,
                  children: N.intl.string(j.default["5am8D3"]),
                }),
                (0, i.jsx)(o.B, {
                  direction: "horizontal",
                  justify: "end",
                  children: (0, i.jsx)(d.$, {
                    variant: "primary",
                    text: N.intl.string(j.default["GDsHl+"]),
                    onClick: l,
                    disabled: n,
                  }),
                }),
              ],
            });
          },
          age_verification: function (e) {
            let { onSubmit: t } = e,
              n = (0, b.bG)([O.default], () => O.default.getCurrentUser());
            return (0, i.jsx)(G, {
              title: "Lorem ipsum dolor",
              actions: [
                {
                  text: "Consectetur adipiscing",
                  variant: "primary",
                  onClick: () => {
                    n?.ageVerificationStatus === M.Tk.UNVERIFIED
                      ? w.A.showAgeVerificationGetStartedModal({
                          entryPoint: m.q1.SAFETY_FLOWS,
                          onClose: () => t({ type: I.Empty }),
                        })
                      : t({ type: I.Empty });
                  },
                },
              ],
              children: (0, i.jsxs)(o.B, {
                gap: 8,
                children: [
                  (0, i.jsx)(u.E, {
                    variant: "text-md/normal",
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  }),
                  (0, i.jsx)(u.E, {
                    variant: "text-md/normal",
                    children:
                      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }),
                  (0, i.jsx)(u.E, {
                    variant: "text-md/normal",
                    children: "Ut enim ad minim veniam quis",
                  }),
                ],
              }),
            });
          },
        },
        H = (e) => {
          let { onSubmit: t, disabled: n } = e,
            { task: l } = T(),
            s = V[l.ui_component.component.type];
          return null == s
            ? null
            : (0, i.jsx)(s, {
                configData: l.ui_component.component.data,
                onSubmit: t,
                taskId: l.task_id,
                flowId: l.flow_context?.flow_id,
                assignmentId: l.assignment_id,
                disabled: n,
              });
        };
      var Q = n(754302),
        W = n(721940);
      let z = {
          [_.EMAIL_VERIFICATION]: N.intl.string(j.default.HC4IiR),
          [_.REFRESH_APP]: N.intl.string(j.default.SzfxQ3),
          [_.AGE_VERIFICATION]: N.intl.string(j.default["dSkE/A"]),
        },
        q = function () {
          let { task: e } = T(),
            t = e.flow_context.tasks.findIndex(
              (t) => t.task_type === e.task_type,
            );
          return (0, i.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: L,
            className: W.k,
            children: [
              (0, i.jsxs)(o.B, {
                direction: "vertical",
                justify: "space-between",
                children: [
                  (0, i.jsx)(c.D, {
                    variant: "display-md",
                    className: W.D,
                    children: N.intl.string(j.default["/OpRAP"]),
                  }),
                  (0, i.jsx)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    gap: 0,
                    children: e.flow_context.tasks.map((e, n) =>
                      (0, i.jsx)(
                        Q.B,
                        {
                          title: z[e.task_type] ?? "",
                          listType: "numbered",
                          index: n,
                          color:
                            n === t
                              ? "text-strong"
                              : n < t
                                ? "feedback-positive"
                                : "text-muted",
                          completed: n < t,
                        },
                        e.task_type,
                      ),
                    ),
                  }),
                ],
              }),
              (0, i.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: N.intl.format(j.default["0DHxym"], {
                  handleLogOut: () => (0, y.k)("safety_flows_sidebar"),
                }),
              }),
            ],
          });
        };
      var Z = n(231723),
        K = n(818348),
        $ = n(561452);
      let Y = n(843020);
      function X(e) {
        let { task: t, handleSubmit: n, disabled: l } = e,
          [s, r] = a.useState(t),
          o = a.useMemo(() => ({ task: s, setTask: r }), [s, r]);
        return (
          a.useEffect(() => {
            r(t);
          }, [t]),
          (0, i.jsxs)(v.Provider, {
            value: o,
            children: [
              (0, i.jsx)(q, {}),
              (0, i.jsx)(H, { onSubmit: n, disabled: l }),
            ],
          })
        );
      }
      let J = function (e) {
        let { transitionState: t, onClose: n } = e,
          [l, s] = a.useState(null),
          [g, A] = a.useState(!0),
          [x, v] = a.useState(null),
          [T, b] = a.useState(!1),
          M = a.useCallback(async () => {
            A(!0), v(null);
            try {
              let e = await C();
              if (null == e) return void n();
              !(0, f.uJ)(e.ui_component?.component.type) &&
              R.has(e.ui_component.component.type)
                ? s(e)
                : s({
                    task_id: e.task_id,
                    task_type: _.REFRESH_APP,
                    assignment_id: e.assignment_id,
                    ui_component: {
                      component: { type: S.REFRESH_APP, data: {} },
                    },
                    flow_context: {
                      tasks: [],
                      flow_id: e.flow_context.flow_id,
                    },
                  });
            } catch {
              v(N.intl.string(j.default["/f++3g"]));
            } finally {
              A(!1);
            }
          }, [n]),
          w = a.useCallback(
            async (e) => {
              if (null !== l) {
                b(!0);
                try {
                  let t = {
                    task_id: l.task_id,
                    flow_id: l.flow_context.flow_id,
                    data: e,
                  };
                  await E(t), M();
                } catch (e) {
                  v(N.intl.string(j.default["+QRSxc"]));
                } finally {
                  b(!1);
                }
              }
            },
            [l, M],
          );
        (0, h.Ay)(() => {
          M();
        });
        let O = a.useMemo(() => l?.task_type === _.AGE_VERIFICATION, [l]);
        return (0, i.jsxs)("div", {
          className: $.Tp,
          children: [
            (0, i.jsx)("img", { className: $.xX, src: Y, alt: "" }),
            O
              ? (0, i.jsx)(p.default, {
                  transitionState: t ?? Z.ip.ENTERED,
                  entryPoint: m.q1.SAFETY_FLOWS,
                  onClose: K.tE,
                  onComplete: async () => {
                    await w({ type: I.Empty });
                  },
                  dismissable: !1,
                })
              : (0, i.jsx)("div", {
                  className: $.nA,
                  children: g
                    ? (0, i.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                    : (0, i.jsx)("div", {
                        className: $.kL,
                        children: (0, i.jsxs)(o.B, {
                          direction: "horizontal",
                          justify: "start",
                          className: $.rf,
                          children: [
                            null !== x &&
                              (0, i.jsxs)(o.B, {
                                direction: "vertical",
                                justify: "space-between",
                                align: "center",
                                className: $.Nj,
                                padding: 16,
                                children: [
                                  (0, i.jsxs)(o.B, {
                                    direction: "vertical",
                                    gap: 4,
                                    children: [
                                      (0, i.jsx)(c.D, {
                                        variant: "heading-xl/semibold",
                                        children: N.intl.string(N.t.c6kn6F),
                                      }),
                                      (0, i.jsx)(u.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.ZUEGFn),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)(o.B, {
                                    direction: "horizontal",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, i.jsx)(d.$, {
                                        fullWidth: !0,
                                        variant: "secondary",
                                        text: N.intl.string(N.t["2jxGer"]),
                                        onClick: () => {
                                          (0, y.k)("safety_flows_modal");
                                        },
                                      }),
                                      (0, i.jsx)(d.$, {
                                        fullWidth: !0,
                                        text: N.intl.string(N.t["7NqTJn"]),
                                        onClick: () => {
                                          M();
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            null === x &&
                              null != l &&
                              (0, i.jsx)(X, {
                                task: l,
                                handleSubmit: w,
                                disabled: T,
                              }),
                          ],
                        }),
                      }),
                }),
          ],
        });
      };
    },
    665095(e, t, n) {
      n.d(t, { A: () => P });
      var l = n(627968),
        s = n(64700),
        i = n(110259),
        a = n(17928),
        r = n(636537),
        o = n(192308),
        c = n(830215),
        u = n(398590),
        d = n(631670),
        h = n(475743),
        m = n(775121),
        p = n(139286),
        f = n(80556),
        g = n(557722),
        A = n(363195),
        x = n(870570),
        C = n(446868),
        E = n(503698),
        v = n.n(E),
        T = n(607399),
        j = n(821609),
        N = n(331322),
        _ = n(534514),
        S = n(834730),
        R = n(700525),
        I = n(975571),
        y = n(652215),
        b = n(985018),
        M = n(72828);
      let w = I.A.getArticleURL(y.MVz.VERIFICATION_FAQ);
      class O extends s.PureComponent {
        static defaultProps = {
          types: [y.Fz7.CAPTCHA],
          onCaptchaVerify: y.tEg,
          onLogout: y.tEg,
        };
        renderFields() {
          let {
            types: e,
            captchaKey: t,
            theme: n,
            onCaptchaVerify: s,
          } = this.props;
          return (0, l.jsx)(l.Fragment, {
            children: e.map((e) =>
              e === y.Fz7.CAPTCHA
                ? (0, l.jsx)(R.A, { onVerify: s, theme: n }, t)
                : (0, l.jsx)(
                    j.$,
                    {
                      onClick: () => this.handleClick(e),
                      text: C.A.getButtonTitle(e),
                    },
                    e,
                  ),
            ),
          });
        }
        render() {
          return (0, l.jsxs)(N.B, {
            gap: 16,
            className: M.Ot,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
              (0, l.jsxs)(N.B, {
                gap: 16,
                fullWidth: !1,
                className: v()(M.kL, { [M.Fr]: T.Fr }),
                align: "center",
                direction: "vertical",
                justify: "center",
                children: [
                  (0, l.jsxs)(N.B, {
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    gap: 16,
                    children: [
                      (0, l.jsx)("div", { className: M.Sl }),
                      (0, l.jsxs)(N.B, {
                        className: M.FS,
                        gap: 4,
                        align: "center",
                        direction: "vertical",
                        justify: "center",
                        children: [
                          (0, l.jsx)(_.D, {
                            variant: "heading-xl/normal",
                            children: b.intl.string(b.t.Iz0kDg),
                          }),
                          (0, l.jsx)(S.E, {
                            variant: "text-md/normal",
                            children: b.intl.format(b.t["0rqMV5"], {
                              helpCenterURL: w,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(N.B, {
                    gap: 16,
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: this.renderFields(),
                  }),
                ],
              }),
              (0, l.jsxs)(N.B, {
                gap: 8,
                align: "center",
                direction: "vertical",
                justify: "center",
                children: [
                  (0, l.jsx)(S.E, {
                    variant: "text-sm/normal",
                    className: M.qr,
                    children: b.intl.string(b.t.qqYun3),
                  }),
                  (0, l.jsxs)(N.B, {
                    gap: 8,
                    align: "center",
                    direction: "horizontal",
                    justify: "center",
                    children: [
                      (0, l.jsx)(S.E, {
                        variant: "text-sm/semibold",
                        className: M.qr,
                        children: b.intl.format(b.t.WL51ZR, {
                          supportURL: I.A.getSubmitRequestURL(),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: v()(M.qr, M.mf),
                        children: "•",
                      }),
                      (0, l.jsx)(S.E, {
                        variant: "text-sm/semibold",
                        className: M.qr,
                        children: b.intl.format(b.t.Hv7ztc, {
                          logoutOnClick: this.props.onLogout,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        handleClick = (e) => {
          let { onClick: t } = this.props;
          t?.(e);
        };
      }
      var U = n(87404),
        D = n(53516);
      function P() {
        let { action: e, theme: t } = (0, a.cf)([x.A, A.A], () => ({
            action: x.A.getAction(),
            theme: A.A.theme,
          })),
          E = C.A.getVerificationTypes(e),
          [v, T] = s.useState(0),
          j = (0, h.A)(E);
        (0, p.A)(
          {
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.USER_ACTION_REQUIRED,
            properties: { verification_type: E[0], verification_types: E },
          },
          {},
          [E.toString()],
        );
        let N = () => {
          (0, d.Cw)(),
            (0, o.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  n.e("53983"),
                  n.e("89913"),
                  n.e("25467"),
                ]).then(n.bind(n, 415478));
                return (t) => (0, l.jsx)(e, { ...t });
              },
              { modalKey: U.H1, Layer: f.Ay },
            );
        };
        return (
          s.useEffect(
            () => (
              m.A.disable(),
              () => {
                m.A.enable();
              }
            ),
            [],
          ),
          s.useEffect(() => {
            j?.[0] === y.Fz7.PHONE &&
              E?.[0] === y.Fz7.EMAIL &&
              (0, o.openModalLazy)(
                async () => {
                  let { default: e } = await Promise.all([
                    n.e("31910"),
                    n.e("10919"),
                  ]).then(n.bind(n, 556506));
                  return (t) =>
                    (0, l.jsx)(e, {
                      ...t,
                      title: b.intl.string(b.t.KLnLIP),
                      body: b.intl.string(b.t.XGbCq3),
                      confirmText: b.intl.string(b.t["3oK4qw"]),
                    });
                },
                { modalKey: U.Pr, Layer: f.Ay, onCloseCallback: N },
              );
          }, [E, j]),
          (0, l.jsx)(O, {
            types: E,
            captchaKey: v,
            onCaptchaVerify: (e) => {
              r.Bo.post({
                url: y.Rsh.CAPTCHA,
                body: { captcha_key: e },
                oldFormErrors: !0,
                rejectWithError: !0,
              }).then(u.jH, () => {
                T((e) => e + 1);
              });
            },
            theme: t,
            onClick: (e) => {
              e === y.Fz7.EMAIL_OR_PHONE ||
              e === y.Fz7.EMAIL ||
              e === y.Fz7.REVERIFY_EMAIL
                ? N()
                : (0, o.openModalLazy)(
                    async () => {
                      let { default: e } = await Promise.all([
                        n.e("40841"),
                        n.e("73607"),
                        n.e("89545"),
                        n.e("84704"),
                      ]).then(n.bind(n, 615715));
                      return (t) =>
                        (0, l.jsx)(e, {
                          layerContext: f.OH,
                          reason: g.d.USER_ACTION_REQUIRED,
                          ...t,
                        });
                    },
                    { modalKey: D.V, Layer: f.Ay },
                  );
            },
            onLogout: () => {
              (0, o.openModalLazy)(
                async () => {
                  let { ConfirmModal: e } = await Promise.resolve().then(
                    n.bind(n, 732159),
                  );
                  return (t) =>
                    (0, l.jsx)(e, {
                      title: b.intl.string(b.t["2jxGer"]),
                      subtitle: b.intl.string(b.t.SUnWBB),
                      confirmText: b.intl.string(b.t["2jxGer"]),
                      cancelText: b.intl.string(b.t["ETE/oC"]),
                      onConfirm: () => c.A.logout("verification"),
                      ...t,
                    });
                },
                { Layer: f.Ay },
              );
            },
          })
        );
      }
    },
    879631(e, t, n) {
      n.d(t, { $: () => a });
      var l = n(989349),
        s = n.n(l),
        i = n(985018);
      function a(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : i.intl.string(i.t.Yl1D84),
          l = s().duration(e, "seconds");
        return l.days() > 0
          ? i.intl.formatToPlainString(t ? i.t.GBLpQ8 : i.t["k2UNz+"], {
              days: l.days(),
            })
          : l.hours() > 0
            ? i.intl.formatToPlainString(t ? i.t.rhY1Rs : i.t.xCjYxK, {
                hours: l.hours(),
              })
            : l.minutes() > 0
              ? i.intl.formatToPlainString(t ? i.t["XIGt+W"] : i.t.iXLF9W, {
                  minutes: l.minutes(),
                })
              : e > 0
                ? i.intl.formatToPlainString(t ? i.t.pyvjRp : i.t.geSp4K, {
                    seconds: l.seconds(),
                  })
                : t
                  ? i.intl.string(i.t.Yl1D84)
                  : n;
      }
    },
    433492(e, t, n) {
      n.d(t, { K: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M13.76 4.97a1 1 0 0 1-.73-1.21l.5-2a1 1 0 1 1 1.94.48l-.5 2a1 1 0 0 1-1.21.73ZM19.2 3.8a1 1 0 0 1 0 1.4l-1.5 1.5a1 1 0 1 1-1.4-1.4l1.5-1.5a1 1 0 0 1 1.4 0ZM7.46 11.05 9.6 8.2a3 3 0 0 1 4.8 0l2.14 2.85-.83.83a1 1 0 0 1-1.42 0l-.17-.17a3 3 0 0 0-4.24 0l-.17.17a1 1 0 0 1-1.42 0l-.83-.83ZM6.25 12.67 2.4 17.8A2 2 0 0 0 4 21h16a2 2 0 0 0 1.6-3.2l-3.85-5.13-.63.62a3 3 0 0 1-4.24 0l-.17-.17a1 1 0 0 0-1.42 0l-.17.17a3 3 0 0 1-4.24 0l-.63-.62ZM4.8 5.2a1 1 0 0 1 1.4-1.4l1.5 1.5a1 1 0 0 1-1.4 1.4L4.8 5.2ZM21.97 8.26a1 1 0 0 1-.73 1.21l-2 .5a1 1 0 1 1-.48-1.94l2-.5a1 1 0 0 1 1.21.73ZM2.76 9.47a1 1 0 1 1 .48-1.94l2 .5a1 1 0 1 1-.48 1.94l-2-.5ZM10.97 3.76a1 1 0 0 1-1.94.48l-.5-2a1 1 0 1 1 1.94-.48l.5 2Z",
            className: c,
          }),
        });
      };
    },
    717400(e, t, n) {
      n.d(t, { q: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M20 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-1 0V15a3 3 0 0 0-6 0 1 1 0 0 1-1 1 3 3 0 0 0-3 3c0 .85-.58 2-1.42 2H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
              clipRule: "evenodd",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: c,
            }),
          ],
        });
      };
    },
    608599(e, t, n) {
      n.d(t, { L: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "m19.03 11.78-1.38 1.93a.3.3 0 0 1-.49-.01c-.48-.83-2.03-1.6-3.1-2.07a5.16 5.16 0 0 0-2.03-.41H4.58A2.53 2.53 0 0 0 2 13.4a2.44 2.44 0 0 0 2.43 2.7h14.85a2.53 2.53 0 0 0 2.57-2.2 2.44 2.44 0 0 0-1.55-2.52 1.1 1.1 0 0 0-1.28.4ZM3.43 18.1h17.01a.79.79 0 0 1 .79.79A3.11 3.11 0 0 1 18.12 22H5.75a3.11 3.11 0 0 1-3.11-3.11.79.79 0 0 1 .79-.79ZM11.93 2c4.77 0 8.7 2.74 9.29 6.28a.83.83 0 0 1-.86.92H3.5a.83.83 0 0 1-.86-.92C3.23 4.74 7.17 2 11.93 2Zm-2.3 4.7c-.63 0-1.13.34-1.13.76s.5.76 1.13.76c.62 0 1.12-.34 1.12-.76s-.5-.76-1.12-.76Zm4.55 0c-.62 0-1.12.34-1.12.76s.5.76 1.12.76c.63 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76ZM7.37 4.3c-.63 0-1.13.33-1.13.75s.5.76 1.13.76c.62 0 1.12-.34 1.12-.76S8 4.3 7.37 4.3Zm9.13 0c-.62 0-1.12.33-1.12.75s.5.76 1.12.76c.62 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76Zm-4.57-.77c-.62 0-1.12.34-1.12.76s.5.76 1.12.76c.63 0 1.13-.34 1.13-.76s-.5-.76-1.13-.76Z",
            className: c,
          }),
        });
      };
    },
    626258(e, t, n) {
      n.d(t, { A: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M4.46 5.03A4 4 0 0 1 8.34 2h7.32a4 4 0 0 1 3.88 3.03L20.78 10H22a1 1 0 1 1 0 2h-.54c.35.59.54 1.27.54 2v4a2 2 0 0 1-1 1.73V21a1 1 0 1 1-2 0v-1H5v1a1 1 0 1 1-2 0v-1.27A2 2 0 0 1 2 18v-4c0-.73.2-1.41.54-2H2a1 1 0 1 1 0-2h1.22l1.24-4.97Zm13.14.48L18.72 10H5.28L6.4 5.51A2 2 0 0 1 8.34 4h7.32a2 2 0 0 1 1.94 1.51ZM10 14a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-6 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm14-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
    662546(e, t, n) {
      n.d(t, { O: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M5 5.5c0-.28-.23-.5-.5-.46A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5Zm11.7 6.8a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 4.3-4.3a1 1 0 0 1 1.4 0Z",
              clipRule: "evenodd",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M17 5.5V6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v.5Z",
              className: c,
            }),
          ],
        });
      };
    },
    643278(e, t, n) {
      n.d(t, { s: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M4.5 5.04A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5c0-.28-.23-.5-.5-.46ZM7 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z",
              clipRule: "evenodd",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M7 5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z",
              className: c,
            }),
          ],
        });
      };
    },
    157225(e, t, n) {
      n.d(t, { N: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M12 10.1a2.92 2.92 0 0 1 2.31 1.14h.02l3.95 4.44a3.38 3.38 0 0 1-.1 4.71 3.4 3.4 0 0 1-3.65.75 9.4 9.4 0 0 0-2.49-.62h-.1c-.85.1-1.69.3-2.48.63a3.38 3.38 0 0 1-3.74-5.46v-.01l3.97-4.45h.01A2.93 2.93 0 0 1 12 10.1ZM1.82 8.32c1.08-.9 2.85-.54 3.95.8 1.1 1.32 1.1 3.12.03 4.01-1.08.9-2.85.54-3.95-.79-1.1-1.32-1.1-3.13-.03-4.02Zm16.41.8c1.1-1.34 2.86-1.69 3.95-.8 1.08.9 1.06 2.7-.03 4.03-1.1 1.32-2.87 1.68-3.95.79-1.08-.9-1.07-2.7.03-4.03ZM7.86 2.68c1.35-.37 2.81.69 3.26 2.35.44 1.67-.3 3.31-1.65 3.68-1.35.36-2.81-.7-3.26-2.36-.44-1.67.3-3.31 1.65-3.67Zm5.02 2.35c.45-1.66 1.9-2.72 3.26-2.35 1.36.36 2.1 2 1.65 3.67-.45 1.66-1.9 2.72-3.26 2.36-1.36-.37-2.1-2.01-1.65-3.68Z",
            className: c,
          }),
        });
      };
    },
    695458(e, t, n) {
      n.d(t, { m: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M2.1 8.83C2.03 9.21 2 9.6 2 10v2c0 1.85.72 3.54 1.9 4.79l1.82 3.66a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L10 19h4l.72 1.45a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L20.5 16h.5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.29c-.27-.9-.7-1.72-1.29-2.42l1.09-1.09A.87.87 0 0 0 19.89 3h-1.48c-.63 0-1.25.18-1.79.5-.8-.32-1.7-.5-2.62-.5H9a7 7 0 0 0-6.3 3.93 2 2 0 0 1-.87-.52L1.7 6.3A1 1 0 0 0 .29 7.71l.12.12a4 4 0 0 0 1.69 1ZM9 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
    874804(e, t, n) {
      n.d(t, { K: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2h-1Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
    362704(e, t, n) {
      n.d(t, { Y: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
    676955(e, t, n) {
      n.d(t, { v: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M9 9V7h2v2H9ZM13 9v2h-2V9h2ZM9 9v2H7V9h2ZM13 9h2v2h2V9h-2V7h-2v2Z",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3 0h2v2H5V5Zm4 2H7v2H5v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2V9h-2V7h2V5h-2v2h-2V5h-2v2h-2V5H9v2Z",
              clipRule: "evenodd",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: c,
            }),
          ],
        });
      };
    },
    373846(e, t, n) {
      n.d(t, { C: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsxs)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M6.94 12.1h-.83a.62.62 0 0 0-.62.63v3.04a.62.62 0 0 0 .62.63h2.7a.62.62 0 0 0 .62-.63v-3.05a.62.62 0 0 0-.62-.62h-.86V8.79h10.18a3.83 3.83 0 1 1 0 7.65h-1.45a5.32 5.32 0 0 1-1.02 1.73c-.44.44-.93.82-1.45 1.15a.45.45 0 0 0-.2.4 1.6 1.6 0 0 1-1.6 1.6H7.58a1.6 1.6 0 0 1-1.61-1.6.45.45 0 0 0-.2-.4 8.02 8.02 0 0 1-1.46-1.15C2.99 16.84 2.18 12.84 2 10.45A1.56 1.56 0 0 1 3.57 8.8h3.37v3.31Zm11.01-1.31a24.9 24.9 0 0 1-.63 3.65h.81a1.83 1.83 0 1 0 0-3.65h-.18Z",
              clipRule: "evenodd",
              className: c,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M13.88 2.5a1.03 1.03 0 0 1 1.06.98 2.86 2.86 0 0 1-1.58 2.5.64.64 0 0 0-.26.8 1 1 0 0 1-.96 1.31.98.98 0 0 1-.93-.64 2.65 2.65 0 0 1 1.11-3.18c.58-.36.62-.71.62-.73a.98.98 0 0 1 .94-1.03ZM11.07 0a1.03 1.03 0 0 1 1.06.97 2.86 2.86 0 0 1-1.58 2.5.64.64 0 0 0-.26.79 1 1 0 0 1-.94 1.34 1 1 0 0 1-.94-.66 2.65 2.65 0 0 1 1.1-3.18c.58-.35.62-.7.62-.73A.98.98 0 0 1 10.7.1a.98.98 0 0 1 .38-.09Z",
              className: c,
            }),
          ],
        });
      };
    },
    420854(e, t, n) {
      n.d(t, { E: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.13l.96 1.45a1 1 0 0 1-1.66 1.1L15.47 20H8.53l-1.7 2.55a1 1 0 0 1-1.67-1.1L6.13 20H6a3 3 0 0 1-3-3V5Zm5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 5a1 1 0 0 1 1-1h5v8H6a1 1 0 0 1-1-1V5Zm8 7h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v8Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
    796140(e, t, n) {
      n.d(t, { c: () => r });
      var l = n(627968);
      n(64700);
      var s = n(661531),
        i = n(996682),
        a = n(27989);
      let r = (e) => {
        let {
            size: t = "md",
            width: n,
            height: r,
            color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...u
          } = e,
          d = (0, a.J)(t),
          h = d?.width ?? n,
          m = d?.height ?? r;
        return (0, l.jsx)("svg", {
          ...(0, i.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: m,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, l.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M4.45 6.9 5 6.61v4.88c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V10a2 2 0 1 1 4 0v1.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V6.62l.55.27a1 1 0 1 0 .9-1.78l-7.1-3.56a3 3 0 0 0-2.7 0l-7.1 3.56a1 1 0 1 0 .9 1.78ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 13a1 1 0 1 0 0 2h1.59L9 19.41V22a1 1 0 1 0 2 0v-1h2v1a1 1 0 1 0 2 0v-2.59L19.41 15H21a1 1 0 1 0 0-2H3Zm13.59 2H15v1.59L16.59 15ZM13 19v-1h-2v1h2Zm-4-2.41L7.41 15H9v1.59Zm4-.59v-1h-2v1h2Z",
            clipRule: "evenodd",
            className: c,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=7057.b57ccc6313444269.js.map
