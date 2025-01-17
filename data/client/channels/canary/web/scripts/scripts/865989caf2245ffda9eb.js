"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82158"],
  {
    105671: function (e, t, l) {
      l.d(t, {
        i: function () {
          return d;
        },
      });
      var n = l(392711),
        i = l.n(n),
        a = l(442837),
        s = l(77498),
        r = l(823379),
        o = l(353093),
        c = l(308083);
      function d(e) {
        return (0, a.e7)([s.Z], () => {
          let t = i()(e)
            .map((e) => {
              var t;
              return null === (t = s.Z.getDetectableGame(e)) || void 0 === t
                ? void 0
                : t.name;
            })
            .filter(r.lm)
            .value();
          return (0, o.f6)(t, c.uw);
        });
      }
    },
    532490: function (e, t, l) {
      l.d(t, {
        p: function () {
          return n;
        },
      }),
        l(47120);
      var n,
        i,
        a = l(200651),
        s = l(192379),
        r = l(120356),
        o = l.n(r),
        c = l(642128),
        d = l(442837),
        u = l(481060),
        x = l(393238),
        m = l(434650),
        h = l(607070),
        g = l(594174),
        f = l(5192),
        v = l(603368),
        C = l(856682),
        p = l(284019),
        j = l(388032),
        N = l(577076);
      ((i = n || (n = {})).LEFT = "left"), (i.RIGHT = "right");
      t.Z = s.memo(function (e) {
        let {
            guildId: t,
            primaryColor: l,
            children: n,
            canSignCharter: i = !0,
            signed: r,
            onSignCharter: Z,
            animationDelayMs: T = 1e3,
            signHintButtonText: S,
            signHintHelperText: y,
            signHintPosition: H = "left",
            className: w,
            fullHeight: b,
            showDisclaimer: M,
          } = e,
          _ = s.useRef(null),
          A = s.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null == Z || Z(!r);
            },
            [Z, r],
          ),
          [B, R] = s.useState(!1),
          [k, E] = s.useState(!1),
          I = s.useRef(null),
          D = s.useCallback(
            (e) => {
              e &&
                (I.current = setTimeout(() => {
                  E(!0);
                }, T));
            },
            [T],
          ),
          L = (0, m.O)(D),
          P = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          V = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          [G, F] = (0, u.useSpring)(() => {
            var e, t;
            return (
              (e = H),
              (t = P),
              "left" === e
                ? { right: t ? 68 : 0, config: c.config.stiff }
                : { left: t ? 68 : 0, config: c.config.stiff }
            );
          }),
          [Y, z] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
              r && R(!0);
            },
          })),
          U = { animateFade: z, animateExpand: F },
          O = s.useRef(U);
        s.useEffect(() => {
          O.current = U;
        }),
          s.useEffect(() => {
            let { animateFade: e, animateExpand: t } = O.current;
            if (k)
              t({
                ...("left" === H
                  ? { right: 68, config: c.config.stiff }
                  : { left: 280, config: c.config.stiff }),
              }),
                e({ opacity: 1, top: -24 });
            k && r && e({ opacity: 0, top: 0 });
          }, [k, r, H]),
          s.useEffect(
            () => () => {
              null != I.current && clearTimeout(I.current);
            },
            [],
          );
        let W = o()(
            N.signHintAnimationContainer,
            B && N.noDisplay,
            "left" === H ? N.signTextLeft : N.signTextRight,
          ),
          q = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
          J = (0, u.useToken)(u.tokens.colors.BG_BRAND),
          K = null != l ? l : J.hex(),
          Q = (0, v.j1)(K, q.hex()),
          { height: X = 87, ref: $ } = (0, x.Z)(i),
          ee = (0, u.useTransition)(i, {
            from: { opacity: 0, translateY: X },
            enter: { opacity: 1, translateY: 0 },
            config: c.config.stiff,
          });
        return (0, a.jsx)("div", {
          className: o()(N.container, w),
          ref: L,
          children: (0, a.jsx)(C.Z, {
            fullHeight: b,
            children: (0, a.jsxs)("div", {
              className: o()(N.overviewSidebarWrapper, b && N.fullHeight),
              children: [
                (0, a.jsx)(u.ScrollerNone, {
                  fade: !0,
                  className: N.overviewSidebarContent,
                  children: (0, a.jsx)("div", {
                    className: N.scrollContentContainer,
                    children: n,
                  }),
                }),
                ee(
                  (e, l) =>
                    l &&
                    (0, a.jsx)(c.animated.div, {
                      className: N.signatureBlockContainer,
                      style: e,
                      children: (0, a.jsx)("div", {
                        ref: $,
                        children: (0, a.jsxs)("div", {
                          className: N.signatureBlock,
                          children: [
                            (0, a.jsx)("div", {
                              ref: _,
                              className: N.signHintContainer,
                              children: (0, a.jsxs)(c.animated.div, {
                                className: W,
                                style: { ...G, ...Y },
                                children: [
                                  (0, a.jsx)("div", {
                                    className: N.signContainerButton,
                                    children: (0, a.jsxs)(p.Z, {
                                      themeColor: K,
                                      className: N.signButton,
                                      size: u.Button.Sizes.SMALL,
                                      onClick: (e) => {
                                        var t;
                                        null === (t = _.current) ||
                                          void 0 === t ||
                                          t.scrollIntoView({
                                            behavior: "smooth",
                                          }),
                                          A(e);
                                      },
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: o()(N.signCarot, {
                                            [N.signCarotCustomColors]:
                                              null != Q,
                                          }),
                                          style:
                                            null != Q ? Q : { borderColor: K },
                                        }),
                                        null != S
                                          ? S
                                          : j.intl.string(j.t.ySpZ9P),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: N.signHintHelperText,
                                    children:
                                      null != y ? S : j.intl.string(j.t.Pwzyy8),
                                  }),
                                  M &&
                                    (0, a.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: N.signHintHelperText,
                                      children: j.intl.format(j.t.msDbmZ, {}),
                                    }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)(u.Clickable, {
                              onClick: A,
                              className: o()(N.signatureContainer, {
                                [N.clickable]: null != Z,
                              }),
                              children: [
                                (0, a.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "none",
                                  children: "x",
                                }),
                                r
                                  ? (0, a.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "header-primary",
                                      className: N.signatureText,
                                      children: f.ZP.getName(t, null, V),
                                    })
                                  : (0, a.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "none",
                                      className: N.signatureText,
                                      children: j.intl.string(j.t.RC1D19),
                                    }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                ),
              ],
            }),
          }),
        });
      });
    },
    717057: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return _;
          },
        }),
        l(47120);
      var n = l(200651),
        i = l(192379),
        a = l(120356),
        s = l.n(a),
        r = l(913527),
        o = l.n(r),
        c = l(442837),
        d = l(481060),
        u = l(410030),
        x = l(313201),
        m = l(271383),
        h = l(430824),
        g = l(594174),
        f = l(709054),
        v = l(931240),
        C = l(645896),
        p = l(603368),
        j = l(532490),
        N = l(380365),
        Z = l(979264),
        T = l(620929),
        S = l(284019),
        y = l(308083),
        H = l(981631),
        w = l(388032),
        b = l(470168);
      function M(e) {
        var t;
        let { guildId: l, clanInfo: a, signed: r, onSignCharter: c } = e,
          u = i.useMemo(() => {
            let e = f.default.extractTimestamp(l);
            return o()(new Date(e)).format("MMMM YYYY");
          }, [l]),
          x = i.useMemo(() => new Set(a.games), [a.games]);
        return (0, n.jsx)(j.Z, {
          guildId: l,
          signHintPosition: j.p.LEFT,
          primaryColor:
            null === (t = a.branding) || void 0 === t ? void 0 : t.primaryColor,
          signed: r,
          onSignCharter: c,
          children: (0, n.jsxs)("div", {
            className: b.scrollContentsContainer,
            children: [
              (0, n.jsx)(Z.aG, {
                guildId: l,
                clanBadge: a.badge.imageHash,
                clanTag: a.tag,
                textVariant: "heading-lg/semibold",
                badgeSize: y.NC.SIZE_24,
                className: b.clanTagChiplet,
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(d.Heading, {
                    variant: "heading-xxl/normal",
                    color: "text-muted",
                    className: b.charterHeaderText,
                    children: w.intl.string(w.t["85S0//"]),
                  }),
                  (0, n.jsx)(d.Heading, {
                    variant: "heading-xxl/bold",
                    color: "interactive-active",
                    className: b.charterHeaderText,
                    children: a.name,
                  }),
                  (0, n.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    className: b.establishedDate,
                    children: w.intl.format(w.t["7RpSYW"], { date: u }),
                  }),
                ],
              }),
              (0, n.jsx)(T.p, {
                applicationIds: x,
                playstyle: a.playstyle,
                className: s()(b.charterBodyText, b.gameSection),
              }),
              (0, n.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: b.charterBodyText,
                children: w.intl.string(w.t["YDTd9/"]),
              }),
            ],
          }),
        });
      }
      function _(e) {
        var t;
        let { guildId: l, onClose: a, onAccept: r, ...o } = e,
          f = (0, x.Dt)(),
          j = (0, C.Cc)(l),
          Z = (0, C.E8)(l),
          [T, y] = i.useState(!0),
          [_, A] = i.useState(!1),
          B = i.useCallback(() => {
            r(), a();
          }, [r, a]);
        i.useEffect(() => {
          null == j && !Z && B();
        }, [j, B, Z]);
        let R = i.useCallback(() => {
            T && (0, v.nE)(l, T, H.Sbl.CREATE_JOIN_GUILD_MODAL), B();
          }, [l, B, T]),
          k = (0, c.e7)([h.Z], () => h.Z.getGuild(l)),
          E = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
          I = (0, c.e7)([m.ZP], () =>
            null != E ? m.ZP.getMember(l, E.id) : null,
          ),
          D = (0, u.ZP)(),
          L = (0, p.nP)(
            null == j
              ? void 0
              : null === (t = j.branding) || void 0 === t
                ? void 0
                : t.primaryColor,
            [d.tokens.colors.BG_BRAND, 0.7],
          ),
          P = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: D,
            saturation: 1,
          }).hex(),
          V = (0, p.nj)(L, P, "top center");
        return null == k || null == E || null == I || null == j
          ? null
          : (0, n.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              "aria-labelledby": f,
              className: b.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, n.jsxs)(d.ModalContent, {
                className: b.content,
                style: V,
                children: [
                  (0, n.jsxs)("div", {
                    className: b.infoSide,
                    children: [
                      (0, n.jsxs)("div", {
                        className: b.titlesContainer,
                        children: [
                          (0, n.jsx)("div", {
                            className: b.title,
                            children: (0, n.jsx)(d.Heading, {
                              variant: "heading-xxl/medium",
                              children: w.intl.format(w.t.orbR8f, {
                                name: k.name,
                              }),
                            }),
                          }),
                          (0, n.jsx)(d.Text, {
                            className: b.subtitle,
                            variant: "text-md/normal",
                            children: w.intl.string(w.t.sZHbAQ),
                          }),
                        ],
                      }),
                      (0, n.jsx)(N.Z, {
                        guildId: l,
                        isTagAdopted: T,
                        onChangeUseTag: y,
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: b.scrollMainContainer,
                    children: (0, n.jsx)(M, {
                      guildId: l,
                      clanInfo: j,
                      signed: _,
                      onSignCharter: A,
                    }),
                  }),
                  (0, n.jsx)(S.Z, {
                    onClick: R,
                    color: d.Button.Colors.BRAND,
                    themeColor: L,
                    fullWidth: !1,
                    className: s()(b.ctaButton, _ ? b.ctaButtonSigned : null),
                    children: (0, n.jsxs)("div", {
                      className: b.ctaButtonInner,
                      children: [
                        (0, n.jsx)(d.Text, {
                          color: "currentColor",
                          variant: "text-md/medium",
                          children: w.intl.string(w.t.aYmu19),
                        }),
                        (0, n.jsx)(d.ArrowLargeRightIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      }
    },
    380365: function (e, t, l) {
      var n = l(200651),
        i = l(192379),
        a = l(442837),
        s = l(481060),
        r = l(271383),
        o = l(430824),
        c = l(594174),
        d = l(5192),
        u = l(645896),
        x = l(979264),
        m = l(308083),
        h = l(388032),
        g = l(175189);
      t.Z = i.memo(function (e) {
        var t, l, i, f, v, C;
        let { guildId: p, isTagAdopted: j, onChangeUseTag: N } = e,
          Z = (0, u.Cc)(p),
          T = (0, a.e7)([o.Z], () => o.Z.getGuild(p)),
          S =
            null !==
              (f =
                null == Z
                  ? void 0
                  : null === (t = Z.badge) || void 0 === t
                    ? void 0
                    : t.imageHash) && void 0 !== f
              ? f
              : null == T
                ? void 0
                : null === (l = T.profile) || void 0 === l
                  ? void 0
                  : l.badge,
          y =
            null !== (v = null == Z ? void 0 : Z.tag) && void 0 !== v
              ? v
              : null == T
                ? void 0
                : null === (i = T.profile) || void 0 === i
                  ? void 0
                  : i.tag,
          H = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
          w = (0, a.e7)([r.ZP], () =>
            null != H ? r.ZP.getMember(p, H.id) : null,
          );
        return null == T || null == H || null == w || null == S
          ? null
          : (0, n.jsxs)("div", {
              className: g.previewSection,
              children: [
                (0, n.jsxs)("div", {
                  className: g.chatPreview,
                  children: [
                    (0, n.jsx)(s.Avatar, {
                      src: H.getAvatarURL(p, 40),
                      size: s.AvatarSizes.SIZE_40,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsxs)("div", {
                      className: g.previewText,
                      children: [
                        (0, n.jsxs)("div", {
                          className: g.userName,
                          children: [
                            (0, n.jsx)(s.NameWithRole, {
                              className: g.userName,
                              name: d.ZP.getName(p, null, H),
                              color:
                                null !== (C = w.colorString) && void 0 !== C
                                  ? C
                                  : void 0,
                            }),
                            j &&
                              (0, n.jsx)(x.aG, {
                                guildId: p,
                                clanBadge: S,
                                clanTag: y,
                                badgeSize: m.NC.SIZE_12,
                                textVariant: "text-xs/semibold",
                              }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "80%" },
                        }),
                        (0, n.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "50%" },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: g.divider }),
                (0, n.jsxs)("div", {
                  className: g.settingSection,
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(s.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: h.intl.string(h.t.nwNzVV),
                        }),
                        (0, n.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: h.intl.string(h.t.Dpl68P),
                        }),
                      ],
                    }),
                    (0, n.jsx)(s.Switch, { onChange: N, checked: j }),
                  ],
                }),
              ],
            });
      });
    },
    570938: function (e, t, l) {
      l(200651), l(192379);
    },
    856682: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return v;
        },
      }),
        l(47120);
      var n = l(200651),
        i = l(192379),
        a = l(120356),
        s = l.n(a),
        r = l(642128),
        o = l(481060),
        c = l(393238),
        d = l(410030),
        u = l(231338),
        x = l(601751);
      let m = { mass: 1, tension: 400, friction: 60, clamp: !0 },
        h = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function g(e) {
        let { className: t, paperColor: l, paperColorAlt: i, axleColor: a } = e;
        return (0, n.jsxs)("svg", {
          className: t,
          width: "365",
          height: "59",
          viewBox: "0 0 365 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsxs)("g", {
              "clip-path": "url(#clip0_1063_2338)",
              children: [
                (0, n.jsx)("path", {
                  d: "M335.8 1.80005H57.2998V58.8H357C357 58.8 352 54.7 351.5 51.8C350.1 43.6 351.6 17.8 351.6 17.8C351.6 9.00005 344.5 1.80005 335.8 1.80005Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M11.7998 28.2999C2.7998 28.3999 2.7998 11.9999 11.7998 12.0999C20.7998 11.9999 20.7998 28.3999 11.7998 28.2999Z",
                  fill: a,
                }),
                (0, n.jsx)("path", {
                  d: "M27.8999 40.3999C6.3999 40.7999 6.3999 -0.300075 27.8999 -7.45849e-05C49.3999 -0.300075 49.3999 40.7999 27.8999 40.3999Z",
                  fill: a,
                }),
                (0, n.jsx)("path", {
                  d: "M31.4997 31.4C17.0997 31.6 17.0997 8.79999 31.4997 8.89999C45.8997 8.69999 45.8997 31.5 31.4997 31.4Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M336 8.09998H37.2997C29.4997 8.09998 23.1997 13.5 23.1997 20.2C23.1997 26.9 29.4997 32.3 37.2997 32.3H336C343.8 32.3 350.1 26.9 350.1 20.2C350.1 13.5 343.8 8.09998 336 8.09998Z",
                  fill: a,
                }),
                (0, n.jsx)("path", {
                  d: "M338.5 31.4C324.1 31.6 324.1 8.79999 338.5 8.89999C352.9 8.69999 352.9 31.5 338.5 31.4Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M346.4 40.4C324.9 40.7 324.9 -0.400029 346.4 -2.87746e-05C367.9 -0.300029 367.9 40.8 346.4 40.4Z",
                  fill: a,
                }),
                (0, n.jsx)("path", {
                  d: "M348.8 33.6999C338.7 33.8999 338.7 6.39995 348.8 6.69995C358.9 6.49995 358.9 33.9999 348.8 33.6999Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M355.4 27.4C346 27.5 346 12.5 355.4 12.7C364.8 12.6 364.8 27.6 355.4 27.4Z",
                  fill: a,
                }),
                (0, n.jsx)("path", {
                  d: "M357.9 27.5C348.5 27.6 348.5 12.6 357.9 12.8C367.3 12.7 367.3 27.7 357.9 27.5Z",
                  fill: i,
                }),
                (0, n.jsx)("path", {
                  d: "M321.8 1.79997H55.7998C41.9998 1.79997 30.7998 13.002 30.7998 26.8045V846.952H307.6H320.989L321.8 15.9025C321.8 8.1011 328.1 1.69995 336 1.69995H321.8V1.79997Z",
                  fill: l,
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_1063_2338",
                children: (0, n.jsx)("rect", {
                  width: "365",
                  height: "59",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { paperColor: t, paperColorAlt: l, className: i } = e;
        return (0, n.jsxs)("svg", {
          className: s()(x.bottom, i),
          width: "365",
          height: "101",
          viewBox: "0 0 365 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsxs)("g", {
              "clip-path": "url(#clip0_1063_2355)",
              children: [
                (0, n.jsx)("path", {
                  d: "M321.8 -743.231L30.7998 -741.136V-718.279V100.139H305.852C314.398 100.121 321.789 92.9688 321.8 83.8672V-729.158C321.8 -736.943 321.8 -743.231 321.8 -743.231Z",
                  fill: t,
                }),
                (0, n.jsx)("path", {
                  d: "M30.7998 15.5372V100.137H305.6C314.5 100.137 321.8 92.9371 321.8 83.9371V15.4371H30.7998V15.5372Z",
                  fill: "url(#paint0_linear_1063_2355)",
                }),
                (0, n.jsx)("path", {
                  d: "M283 84.1371C283 84.1371 283.8 66.7371 283 58.1371C282.8 55.9371 280 52.1371 280 52.1371H0C0 52.1371 2.7 55.9371 3 58.1371C3.7 64.1371 3 76.1371 3 76.1371C3 89.3371 13.8 100.137 27 100.137H299C290.2 100.137 283 92.9371 283 84.1371Z",
                  fill: l,
                }),
              ],
            }),
            (0, n.jsxs)("defs", {
              children: [
                (0, n.jsxs)("linearGradient", {
                  id: "paint0_linear_1063_2355",
                  x1: "176.3",
                  y1: "15.5371",
                  x2: "176.3",
                  y2: "100.137",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, n.jsx)("stop", {
                      "stop-opacity": "0",
                      "stop-color": t,
                    }),
                    (0, n.jsx)("stop", { offset: "1", "stop-color": l }),
                  ],
                }),
                (0, n.jsx)("clipPath", {
                  id: "clip0_1063_2355",
                  children: (0, n.jsx)("rect", {
                    width: "365",
                    height: "100",
                    fill: "white",
                    transform: "translate(0 0.337158)",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { children: t, fullHeight: l = !1 } = e,
          [a, v] = i.useState(!1),
          { height: C, ref: p } = (0, c.Z)(),
          { height: j, ref: N } = (0, c.Z)(),
          Z = l ? j : 59 + (null != C ? C : 100) + 101,
          T = (0, o.useSpring)({
            from: { height: 0 },
            to: { height: Z },
            config: m,
            delay: a ? 0 : 800,
            onRest: () => v(!0),
          }),
          S = (0, o.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: h,
            delay: 1e3,
          }),
          y = (0, d.Fg)(),
          H = y === u.BR.LIGHT ? "#FFFFFF" : "#1C1D23",
          w = y === u.BR.LIGHT ? "#EBEDEF" : "#26272F",
          b = y === u.BR.LIGHT ? "#CCCCCC" : "#1A1A1E";
        return (0, n.jsx)("div", {
          className: x.container,
          ref: N,
          children: (0, n.jsxs)(r.animated.div, {
            className: x.heightContainer,
            style: { ...T, overflow: a ? "initial" : "hidden" },
            children: [
              (0, n.jsx)(g, {
                className: x.scrollSvg,
                paperColor: H,
                paperColorAlt: w,
                axleColor: b,
              }),
              (0, n.jsx)("div", {
                className: s()(x.content, l && x.fullHeight),
                ref: p,
                children: (0, n.jsx)("div", {
                  className: s()(x.innerContent, l && x.fullHeight),
                  style: { backgroundColor: H },
                  children: (0, n.jsx)(r.animated.div, {
                    className: s()(x.contentAnimContainer, l && x.fullHeight),
                    style: S,
                    children: t,
                  }),
                }),
              }),
              (0, n.jsx)(f, {
                className: x.scrollSvg,
                paperColor: H,
                paperColorAlt: w,
              }),
            ],
          }),
        });
      }
    },
    620929: function (e, t, l) {
      l.d(t, {
        p: function () {
          return x;
        },
      });
      var n = l(200651),
        i = l(192379),
        a = l(120356),
        s = l.n(a);
      l(913527), l(442837);
      var r = l(481060);
      l(430824), l(650461), l(353093);
      var o = l(105671);
      l(532490), l(979264), l(570938), l(550271), l(116175);
      var c = l(308083),
        d = l(388032),
        u = l(869650);
      function x(e) {
        let { applicationIds: t, playstyle: l, className: a } = e,
          x = i.useMemo(() => Array.from(t), [t]),
          m = (0, o.i)(x),
          h = i.useMemo(() => {
            if (null == m) return null;
            let e = (0, c.mv)(l);
            return null == e
              ? d.intl.format(d.t.dlplKi, { games: m })
              : d.intl.format(d.t["+qicDA"], { playstyle: e, games: m });
          }, [m, l]);
        return (0, n.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: s()(u.overviewText, a),
          children: null == h ? d.intl.string(d.t.AIp7Hx) : h,
        });
      }
    },
  },
]);
//# sourceMappingURL=865989caf2245ffda9eb.js.map
