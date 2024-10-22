"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82158"],
  {
    105671: function (e, l, t) {
      t.d(l, {
        i: function () {
          return d;
        },
      });
      var a = t(392711),
        s = t.n(a),
        n = t(442837),
        i = t(77498),
        r = t(823379),
        o = t(353093),
        c = t(308083);
      function d(e) {
        return (0, n.e7)([i.Z], () => {
          let l = s()(e)
            .map((e) => {
              var l;
              return null === (l = i.Z.getDetectableGame(e)) || void 0 === l
                ? void 0
                : l.name;
            })
            .filter(r.lm)
            .value();
          return (0, o.f6)(l, c.uw);
        });
      }
    },
    532490: function (e, l, t) {
      t.d(l, {
        p: function () {
          return a;
        },
      }),
        t(47120);
      var a,
        s,
        n = t(200651),
        i = t(192379),
        r = t(120356),
        o = t.n(r),
        c = t(100621),
        d = t(442837),
        u = t(481060),
        x = t(393238),
        m = t(434650),
        h = t(607070),
        g = t(594174),
        C = t(5192),
        v = t(603368),
        f = t(856682),
        j = t(284019),
        N = t(689938),
        p = t(906326);
      ((s = a || (a = {})).LEFT = "left"), (s.RIGHT = "right");
      l.Z = i.memo(function (e) {
        let {
            guildId: l,
            primaryColor: t,
            children: a,
            canSignCharter: s = !0,
            signed: r,
            onSignCharter: _,
            animationDelayMs: T = 1e3,
            signHintButtonText: E,
            signHintHelperText: S,
            signHintPosition: Z = "left",
            className: M,
            fullHeight: A,
            showDisclaimer: I,
          } = e,
          L = i.useRef(null),
          y = i.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null == _ || _(!r);
            },
            [_, r],
          ),
          [H, V] = i.useState(!1),
          [w, R] = i.useState(!1),
          b = i.useRef(null),
          P = i.useCallback(
            (e) => {
              e &&
                (b.current = setTimeout(() => {
                  R(!0);
                }, T));
            },
            [T],
          ),
          U = (0, m.O)(P),
          B = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
          G = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          [k, O] = (0, u.useSpring)(() => {
            var e, l;
            return (
              (e = Z),
              (l = B),
              "left" === e
                ? { right: l ? 68 : 0, config: c.config.stiff }
                : { left: l ? 68 : 0, config: c.config.stiff }
            );
          }),
          [W, D] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
              r && V(!0);
            },
          }));
        i.useEffect(() => {
          if (w)
            O({
              ...("left" === Z
                ? { right: 68, config: c.config.stiff }
                : { left: 280, config: c.config.stiff }),
            }),
              D({ opacity: 1, top: -24 });
          w && r && D({ opacity: 0, top: 0 });
        }, [w, r, Z]),
          i.useEffect(
            () => () => {
              null != b.current && clearTimeout(b.current);
            },
            [],
          );
        let Y = o()(
            p.signHintAnimationContainer,
            H && p.noDisplay,
            "left" === Z ? p.signTextLeft : p.signTextRight,
          ),
          F = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
          z = (0, u.useToken)(u.tokens.colors.BG_BRAND),
          X = null != t ? t : z.hex(),
          J = (0, v.j1)(X, F.hex()),
          { height: $ = 87, ref: q } = (0, x.Z)(s),
          K = (0, u.useTransition)(s, {
            from: { opacity: 0, translateY: $ },
            enter: { opacity: 1, translateY: 0 },
            config: c.config.stiff,
          });
        return (0, n.jsx)("div", {
          className: o()(p.container, M),
          ref: U,
          children: (0, n.jsx)(f.Z, {
            fullHeight: A,
            children: (0, n.jsxs)("div", {
              className: o()(p.overviewSidebarWrapper, A && p.fullHeight),
              children: [
                (0, n.jsx)(u.ScrollerNone, {
                  fade: !0,
                  className: p.overviewSidebarContent,
                  children: (0, n.jsx)("div", {
                    className: p.scrollContentContainer,
                    children: a,
                  }),
                }),
                K(
                  (e, t) =>
                    t &&
                    (0, n.jsx)(c.animated.div, {
                      className: p.signatureBlockContainer,
                      style: e,
                      children: (0, n.jsx)("div", {
                        ref: q,
                        children: (0, n.jsxs)("div", {
                          className: p.signatureBlock,
                          children: [
                            (0, n.jsx)("div", {
                              ref: L,
                              className: p.signHintContainer,
                              children: (0, n.jsxs)(c.animated.div, {
                                className: Y,
                                style: { ...k, ...W },
                                children: [
                                  (0, n.jsx)("div", {
                                    className: p.signContainerButton,
                                    children: (0, n.jsxs)(j.Z, {
                                      themeColor: X,
                                      className: p.signButton,
                                      size: u.Button.Sizes.SMALL,
                                      onClick: (e) => {
                                        var l;
                                        null === (l = L.current) ||
                                          void 0 === l ||
                                          l.scrollIntoView({
                                            behavior: "smooth",
                                          }),
                                          y(e);
                                      },
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: o()(p.signCarot, {
                                            [p.signCarotCustomColors]:
                                              null != J,
                                          }),
                                          style:
                                            null != J ? J : { borderColor: X },
                                        }),
                                        null != E
                                          ? E
                                          : N.Z.Messages
                                              .CLAN_SETUP_OVERVIEW_SIGN_CTA,
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: p.signHintHelperText,
                                    children:
                                      null != S
                                        ? E
                                        : N.Z.Messages
                                            .CLAN_SETUP_OVERVIEW_SIGN_HELP,
                                  }),
                                  I &&
                                    (0, n.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: p.signHintHelperText,
                                      children:
                                        N.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_DISCLAIMER.format(),
                                    }),
                                ],
                              }),
                            }),
                            (0, n.jsxs)(u.Clickable, {
                              onClick: y,
                              className: o()(p.signatureContainer, {
                                [p.clickable]: null != _,
                              }),
                              children: [
                                (0, n.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "none",
                                  children: "x",
                                }),
                                r
                                  ? (0, n.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "header-primary",
                                      className: p.signatureText,
                                      children: C.ZP.getName(l, null, G),
                                    })
                                  : (0, n.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "none",
                                      className: p.signatureText,
                                      children:
                                        N.Z.Messages
                                          .CLAN_SETUP_OVERVIEW_SIGNATURE,
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
    717057: function (e, l, t) {
      t.r(l),
        t.d(l, {
          default: function () {
            return L;
          },
        }),
        t(47120);
      var a = t(200651),
        s = t(192379),
        n = t(120356),
        i = t.n(n),
        r = t(913527),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(410030),
        x = t(313201),
        m = t(271383),
        h = t(430824),
        g = t(594174),
        C = t(709054),
        v = t(931240),
        f = t(645896),
        j = t(603368),
        N = t(532490),
        p = t(380365),
        _ = t(979264),
        T = t(620929),
        E = t(284019),
        S = t(308083),
        Z = t(981631),
        M = t(689938),
        A = t(429982);
      function I(e) {
        var l;
        let { guildId: t, clanInfo: n, signed: r, onSignCharter: c } = e,
          u = s.useMemo(() => {
            let e = C.default.extractTimestamp(t);
            return o()(new Date(e)).format("MMMM YYYY");
          }, [t]),
          x = s.useMemo(() => new Set(n.games), [n.games]);
        return (0, a.jsx)(N.Z, {
          guildId: t,
          signHintPosition: N.p.LEFT,
          primaryColor:
            null === (l = n.branding) || void 0 === l ? void 0 : l.primaryColor,
          signed: r,
          onSignCharter: c,
          children: (0, a.jsxs)("div", {
            className: A.scrollContentsContainer,
            children: [
              (0, a.jsx)(_.aG, {
                guildId: t,
                clanBadge: n.badge.imageHash,
                clanTag: n.tag,
                textVariant: "heading-lg/semibold",
                badgeSize: S.NC.SIZE_24,
                className: A.clanTagChiplet,
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xxl/normal",
                    color: "text-muted",
                    className: A.charterHeaderText,
                    children: M.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE,
                  }),
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xxl/bold",
                    color: "interactive-active",
                    className: A.charterHeaderText,
                    children: n.name,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    className: A.establishedDate,
                    children:
                      M.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
                        date: u,
                      }),
                  }),
                ],
              }),
              (0, a.jsx)(T.p, {
                applicationIds: x,
                playstyle: n.playstyle,
                className: i()(A.charterBodyText, A.gameSection),
              }),
              (0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: A.charterBodyText,
                children: M.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP,
              }),
            ],
          }),
        });
      }
      function L(e) {
        var l;
        let { guildId: t, onClose: n, onAccept: r, ...o } = e,
          C = (0, x.Dt)(),
          N = (0, f.Cc)(t),
          _ = (0, f.E8)(t),
          [T, S] = s.useState(!0),
          [L, y] = s.useState(!1),
          H = s.useCallback(() => {
            r(), n();
          }, [r, n]);
        s.useEffect(() => {
          null == N && !_ && H();
        }, [N, H, _]);
        let V = s.useCallback(() => {
            T && (0, v.nE)(t, T, Z.Sbl.CREATE_JOIN_GUILD_MODAL), H();
          }, [t, H, T]),
          w = (0, c.e7)([h.Z], () => h.Z.getGuild(t)),
          R = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
          b = (0, c.e7)([m.ZP], () =>
            null != R ? m.ZP.getMember(t, R.id) : null,
          ),
          P = (0, u.ZP)(),
          U = (0, j.nP)(
            null == N
              ? void 0
              : null === (l = N.branding) || void 0 === l
                ? void 0
                : l.primaryColor,
            [d.tokens.colors.BG_BRAND, 0.7],
          ),
          B = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: P,
            saturation: 1,
          }).hex(),
          G = (0, j.nj)(U, B, "top center");
        return null == w || null == R || null == b || null == N
          ? null
          : (0, a.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              "aria-labelledby": C,
              className: A.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, a.jsxs)(d.ModalContent, {
                className: A.content,
                style: G,
                children: [
                  (0, a.jsxs)("div", {
                    className: A.infoSide,
                    children: [
                      (0, a.jsxs)("div", {
                        className: A.titlesContainer,
                        children: [
                          (0, a.jsx)("div", {
                            className: A.title,
                            children: (0, a.jsx)(d.Heading, {
                              variant: "heading-xxl/medium",
                              children:
                                M.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                                  name: w.name,
                                }),
                            }),
                          }),
                          (0, a.jsx)(d.Text, {
                            className: A.subtitle,
                            variant: "text-md/normal",
                            children: M.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE,
                          }),
                        ],
                      }),
                      (0, a.jsx)(p.Z, {
                        guildId: t,
                        isTagAdopted: T,
                        onChangeUseTag: S,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: A.scrollMainContainer,
                    children: (0, a.jsx)(I, {
                      guildId: t,
                      clanInfo: N,
                      signed: L,
                      onSignCharter: y,
                    }),
                  }),
                  (0, a.jsx)(E.Z, {
                    onClick: V,
                    color: d.Button.Colors.BRAND,
                    themeColor: U,
                    fullWidth: !1,
                    className: i()(A.ctaButton, L ? A.ctaButtonSigned : null),
                    children: (0, a.jsxs)("div", {
                      className: A.ctaButtonInner,
                      children: [
                        (0, a.jsx)(d.Text, {
                          color: "currentColor",
                          variant: "text-md/medium",
                          children: M.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA,
                        }),
                        (0, a.jsx)(d.ArrowLargeRightIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: null == U ? void 0 : (0, j.$0)(U).hex(),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
      }
    },
    380365: function (e, l, t) {
      var a = t(200651),
        s = t(192379),
        n = t(442837),
        i = t(481060),
        r = t(271383),
        o = t(430824),
        c = t(594174),
        d = t(5192),
        u = t(645896),
        x = t(979264),
        m = t(308083),
        h = t(689938),
        g = t(402488);
      l.Z = s.memo(function (e) {
        var l, t, s, C, v, f;
        let { guildId: j, isTagAdopted: N, onChangeUseTag: p } = e,
          _ = (0, u.Cc)(j),
          T = (0, n.e7)([o.Z], () => o.Z.getGuild(j)),
          E =
            null !==
              (C =
                null == _
                  ? void 0
                  : null === (l = _.badge) || void 0 === l
                    ? void 0
                    : l.imageHash) && void 0 !== C
              ? C
              : null == T
                ? void 0
                : null === (t = T.clan) || void 0 === t
                  ? void 0
                  : t.badge,
          S =
            null !== (v = null == _ ? void 0 : _.tag) && void 0 !== v
              ? v
              : null == T
                ? void 0
                : null === (s = T.clan) || void 0 === s
                  ? void 0
                  : s.tag,
          Z = (0, n.e7)([c.default], () => c.default.getCurrentUser()),
          M = (0, n.e7)([r.ZP], () =>
            null != Z ? r.ZP.getMember(j, Z.id) : null,
          );
        return null == T || null == Z || null == M || null == E
          ? null
          : (0, a.jsxs)("div", {
              className: g.previewSection,
              children: [
                (0, a.jsxs)("div", {
                  className: g.chatPreview,
                  children: [
                    (0, a.jsx)(i.Avatar, {
                      src: Z.getAvatarURL(j, 40),
                      size: i.AvatarSizes.SIZE_40,
                      "aria-hidden": !0,
                    }),
                    (0, a.jsxs)("div", {
                      className: g.previewText,
                      children: [
                        (0, a.jsxs)("div", {
                          className: g.userName,
                          children: [
                            (0, a.jsx)(i.NameWithRole, {
                              className: g.userName,
                              name: d.ZP.getName(j, null, Z),
                              color:
                                null !== (f = M.colorString) && void 0 !== f
                                  ? f
                                  : void 0,
                            }),
                            N &&
                              (0, a.jsx)(x.aG, {
                                guildId: j,
                                clanBadge: E,
                                clanTag: S,
                                badgeSize: m.NC.SIZE_12,
                                textVariant: "text-xs/semibold",
                              }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "80%" },
                        }),
                        (0, a.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "50%" },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: g.divider }),
                (0, a.jsxs)("div", {
                  className: g.settingSection,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(i.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: h.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT,
                        }),
                        (0, a.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: h.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP,
                        }),
                      ],
                    }),
                    (0, a.jsx)(i.Switch, { onChange: p, checked: N }),
                  ],
                }),
              ],
            });
      });
    },
    856682: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var a = t(200651),
        s = t(192379),
        n = t(120356),
        i = t.n(n),
        r = t(100621),
        o = t(481060),
        c = t(393238),
        d = t(410030),
        u = t(231338),
        x = t(794459);
      let m = { mass: 1, tension: 400, friction: 60, clamp: !0 },
        h = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function g(e) {
        let { className: l, paperColor: t, paperColorAlt: s, axleColor: n } = e;
        return (0, a.jsxs)("svg", {
          className: l,
          width: "365",
          height: "59",
          viewBox: "0 0 365 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsxs)("g", {
              "clip-path": "url(#clip0_1063_2338)",
              children: [
                (0, a.jsx)("path", {
                  d: "M335.8 1.80005H57.2998V58.8H357C357 58.8 352 54.7 351.5 51.8C350.1 43.6 351.6 17.8 351.6 17.8C351.6 9.00005 344.5 1.80005 335.8 1.80005Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M11.7998 28.2999C2.7998 28.3999 2.7998 11.9999 11.7998 12.0999C20.7998 11.9999 20.7998 28.3999 11.7998 28.2999Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M27.8999 40.3999C6.3999 40.7999 6.3999 -0.300075 27.8999 -7.45849e-05C49.3999 -0.300075 49.3999 40.7999 27.8999 40.3999Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M31.4997 31.4C17.0997 31.6 17.0997 8.79999 31.4997 8.89999C45.8997 8.69999 45.8997 31.5 31.4997 31.4Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M336 8.09998H37.2997C29.4997 8.09998 23.1997 13.5 23.1997 20.2C23.1997 26.9 29.4997 32.3 37.2997 32.3H336C343.8 32.3 350.1 26.9 350.1 20.2C350.1 13.5 343.8 8.09998 336 8.09998Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M338.5 31.4C324.1 31.6 324.1 8.79999 338.5 8.89999C352.9 8.69999 352.9 31.5 338.5 31.4Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M346.4 40.4C324.9 40.7 324.9 -0.400029 346.4 -2.87746e-05C367.9 -0.300029 367.9 40.8 346.4 40.4Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M348.8 33.6999C338.7 33.8999 338.7 6.39995 348.8 6.69995C358.9 6.49995 358.9 33.9999 348.8 33.6999Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M355.4 27.4C346 27.5 346 12.5 355.4 12.7C364.8 12.6 364.8 27.6 355.4 27.4Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M357.9 27.5C348.5 27.6 348.5 12.6 357.9 12.8C367.3 12.7 367.3 27.7 357.9 27.5Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M321.8 1.79997H55.7998C41.9998 1.79997 30.7998 13.002 30.7998 26.8045V846.952H307.6H320.989L321.8 15.9025C321.8 8.1011 328.1 1.69995 336 1.69995H321.8V1.79997Z",
                  fill: t,
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1063_2338",
                children: (0, a.jsx)("rect", {
                  width: "365",
                  height: "59",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
      function C(e) {
        let { paperColor: l, paperColorAlt: t, className: s } = e;
        return (0, a.jsxs)("svg", {
          className: i()(x.bottom, s),
          width: "365",
          height: "101",
          viewBox: "0 0 365 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsxs)("g", {
              "clip-path": "url(#clip0_1063_2355)",
              children: [
                (0, a.jsx)("path", {
                  d: "M321.8 -743.231L30.7998 -741.136V-718.279V100.139H305.852C314.398 100.121 321.789 92.9688 321.8 83.8672V-729.158C321.8 -736.943 321.8 -743.231 321.8 -743.231Z",
                  fill: l,
                }),
                (0, a.jsx)("path", {
                  d: "M30.7998 15.5372V100.137H305.6C314.5 100.137 321.8 92.9371 321.8 83.9371V15.4371H30.7998V15.5372Z",
                  fill: "url(#paint0_linear_1063_2355)",
                }),
                (0, a.jsx)("path", {
                  d: "M283 84.1371C283 84.1371 283.8 66.7371 283 58.1371C282.8 55.9371 280 52.1371 280 52.1371H0C0 52.1371 2.7 55.9371 3 58.1371C3.7 64.1371 3 76.1371 3 76.1371C3 89.3371 13.8 100.137 27 100.137H299C290.2 100.137 283 92.9371 283 84.1371Z",
                  fill: t,
                }),
              ],
            }),
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("linearGradient", {
                  id: "paint0_linear_1063_2355",
                  x1: "176.3",
                  y1: "15.5371",
                  x2: "176.3",
                  y2: "100.137",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", {
                      "stop-opacity": "0",
                      "stop-color": l,
                    }),
                    (0, a.jsx)("stop", { offset: "1", "stop-color": t }),
                  ],
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip0_1063_2355",
                  children: (0, a.jsx)("rect", {
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
        let { children: l, fullHeight: t = !1 } = e,
          [n, v] = s.useState(!1),
          { height: f, ref: j } = (0, c.Z)(),
          { height: N, ref: p } = (0, c.Z)(),
          _ = t ? N : 59 + (null != f ? f : 100) + 101,
          T = (0, o.useSpring)({
            from: { height: 0 },
            to: { height: _ },
            config: m,
            delay: n ? 0 : 800,
            onRest: () => v(!0),
          }),
          E = (0, o.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: h,
            delay: 1e3,
          }),
          S = (0, d.Fg)(),
          Z = S === u.BR.LIGHT ? "#FFFFFF" : "#1C1D23",
          M = S === u.BR.LIGHT ? "#EBEDEF" : "#26272F",
          A = S === u.BR.LIGHT ? "#CCCCCC" : "#1A1A1E";
        return (0, a.jsx)("div", {
          className: x.container,
          ref: p,
          children: (0, a.jsxs)(r.animated.div, {
            className: x.heightContainer,
            style: { ...T, overflow: n ? "initial" : "hidden" },
            children: [
              (0, a.jsx)(g, {
                className: x.scrollSvg,
                paperColor: Z,
                paperColorAlt: M,
                axleColor: A,
              }),
              (0, a.jsx)("div", {
                className: i()(x.content, t && x.fullHeight),
                ref: j,
                children: (0, a.jsx)("div", {
                  className: i()(x.innerContent, t && x.fullHeight),
                  style: { backgroundColor: Z },
                  children: (0, a.jsx)(r.animated.div, {
                    className: i()(x.contentAnimContainer, t && x.fullHeight),
                    style: E,
                    children: l,
                  }),
                }),
              }),
              (0, a.jsx)(C, {
                className: x.scrollSvg,
                paperColor: Z,
                paperColorAlt: M,
              }),
            ],
          }),
        });
      }
    },
    620929: function (e, l, t) {
      t.d(l, {
        p: function () {
          return E;
        },
      });
      var a = t(200651),
        s = t(192379),
        n = t(120356),
        i = t.n(n),
        r = t(913527),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(430824),
        x = t(650461),
        m = t(353093),
        h = t(105671),
        g = t(532490),
        C = t(979264),
        v = t(570938),
        f = t(550271),
        j = t(116175),
        N = t(308083),
        p = t(689938),
        _ = t(691994);
      function T(e) {
        let {
          guildId: l,
          tag: t,
          badge: s,
          primaryColor: n,
          secondaryColor: i,
        } = e;
        return null == t || 0 === t.length
          ? (0, a.jsx)("div", {
              className: _.placeholderIcon,
              children: (0, a.jsx)(v.Z, { height: 42, width: 42 }),
            })
          : (0, a.jsx)(C.aG, {
              guildId: l,
              className: _.charterClanTag,
              clanTag: t,
              textVariant: "heading-lg/semibold",
              textColor: "text-normal",
              badgeSize: N.NC.SIZE_24,
              clanBadge: (0, a.jsx)(f.A, {
                className: _.charterClanBadge,
                badge: s,
                width: N.NC.SIZE_24,
                height: N.NC.SIZE_24,
                primaryTintColor: n,
                secondaryTintColor: i,
              }),
            });
      }
      function E(e) {
        let { applicationIds: l, playstyle: t, className: n } = e,
          r = s.useMemo(() => Array.from(l), [l]),
          o = (0, h.i)(r),
          c = s.useMemo(() => {
            if (null == o) return null;
            let e = (0, N.mv)(t);
            return null == e
              ? p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({ games: o })
              : p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format(
                  { playstyle: e, games: o },
                );
          }, [o, t]);
        return (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i()(_.overviewText, n),
          children:
            null == c ? p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c,
        });
      }
      l.Z =
        12633 == t.j
          ? (e) => {
              let { guildId: l } = e,
                t = (0, x.Wg)(),
                n = (0, c.e7)([u.Z], () => {
                  var e, t;
                  return null !==
                    (t =
                      null === (e = u.Z.getGuild(l)) || void 0 === e
                        ? void 0
                        : e.name) && void 0 !== t
                    ? t
                    : "";
                }),
                {
                  gameApplicationIds: i,
                  playstyle: r,
                  interests: h,
                  tag: C,
                  badgeKind: v,
                  badgePrimaryColor: f,
                  badgeSecondaryColor: S,
                } = (0, c.cj)([x.ZP], () => {
                  var e;
                  return null !== (e = x.ZP.getStateForGuild(l).progress) &&
                    void 0 !== e
                    ? e
                    : t;
                }),
                Z = s.useMemo(
                  () =>
                    (null == h ? void 0 : h.size) > 0
                      ? (0, m.f6)(Array.from(h), N.nt)
                      : null,
                  [h],
                );
              return (0, a.jsxs)(g.Z, {
                ...e,
                children: [
                  (0, a.jsx)(T, {
                    guildId: l,
                    tag: C,
                    badge: v,
                    primaryColor: null != f ? f : j.Nh,
                    secondaryColor: null != S ? S : j.vY,
                  }),
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/normal",
                    color: "text-muted",
                    className: _.overviewHeaderPrelude,
                    children: p.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE,
                  }),
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: _.overviewGuildName,
                    children: n,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: _.overviewText,
                    children:
                      p.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
                        date: o()().format("MMMM YYYY"),
                      }),
                  }),
                  (0, a.jsx)(E, { applicationIds: i, playstyle: r }),
                  null != Z
                    ? (0, a.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: _.overviewText,
                        children:
                          p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
                            traits: Z,
                          }),
                      })
                    : null,
                  (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: _.overviewText,
                    children: p.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP,
                  }),
                ],
              });
            }
          : null;
    },
  },
]);
//# sourceMappingURL=0a7373c581eef2d5c51b.js.map
