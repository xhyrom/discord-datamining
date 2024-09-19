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
        n = t.n(a),
        s = t(442837),
        i = t(77498),
        r = t(823379),
        o = t(353093),
        c = t(308083);
      function d(e) {
        return (0, s.e7)([i.Z], () => {
          let l = n()(e)
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
        n,
        s = t(735250),
        i = t(470079),
        r = t(120356),
        o = t.n(r),
        c = t(526629),
        d = t(442837),
        u = t(481060),
        x = t(393238),
        h = t(434650),
        m = t(607070),
        g = t(594174),
        C = t(5192),
        v = t(603368),
        f = t(856682),
        j = t(284019),
        p = t(689938),
        N = t(906326);
      ((n = a || (a = {})).LEFT = "left"), (n.RIGHT = "right");
      l.Z = i.memo(function (e) {
        let {
            guildId: l,
            primaryColor: t,
            children: a,
            canSignCharter: n = !0,
            signed: r,
            onSignCharter: _,
            animationDelayMs: T = 1e3,
            signHintButtonText: E,
            signHintHelperText: S,
            signHintPosition: Z = "left",
            className: L,
            fullHeight: M,
            showDisclaimer: A,
          } = e,
          I = i.useRef(null),
          y = i.useCallback(
            (e) => {
              e.preventDefault(), e.stopPropagation(), null == _ || _(!r);
            },
            [_, r],
          ),
          [w, H] = i.useState(!1),
          [R, V] = i.useState(!1),
          b = i.useRef(null),
          P = i.useCallback(
            (e) => {
              e &&
                (b.current = setTimeout(() => {
                  V(!0);
                }, T));
            },
            [T],
          ),
          U = (0, h.O)(P),
          B = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
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
              r && H(!0);
            },
          }));
        i.useEffect(() => {
          if (R)
            O({
              ...("left" === Z
                ? { right: 68, config: c.config.stiff }
                : { left: 280, config: c.config.stiff }),
            }),
              D({ opacity: 1, top: -24 });
          R && r && D({ opacity: 0, top: 0 });
        }, [R, r, Z]),
          i.useEffect(
            () => () => {
              null != b.current && clearTimeout(b.current);
            },
            [],
          );
        let Y = o()(
            N.signHintAnimationContainer,
            w && N.noDisplay,
            "left" === Z ? N.signTextLeft : N.signTextRight,
          ),
          F = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
          z = (0, u.useToken)(u.tokens.colors.BG_BRAND),
          X = null != t ? t : z.hex(),
          J = (0, v.j1)(X, F.hex()),
          { height: $ = 87, ref: q } = (0, x.Z)(n),
          K = (0, u.useTransition)(n, {
            from: { opacity: 0, translateY: $ },
            enter: { opacity: 1, translateY: 0 },
            config: c.config.stiff,
          });
        return (0, s.jsx)("div", {
          className: o()(N.container, L),
          ref: U,
          children: (0, s.jsx)(f.Z, {
            fullHeight: M,
            children: (0, s.jsxs)("div", {
              className: o()(N.overviewSidebarWrapper, M && N.fullHeight),
              children: [
                (0, s.jsx)(u.ScrollerNone, {
                  fade: !0,
                  className: N.overviewSidebarContent,
                  children: (0, s.jsx)("div", {
                    className: N.scrollContentContainer,
                    children: a,
                  }),
                }),
                K(
                  (e, t) =>
                    t &&
                    (0, s.jsx)(c.animated.div, {
                      className: N.signatureBlockContainer,
                      style: e,
                      children: (0, s.jsx)("div", {
                        ref: q,
                        children: (0, s.jsxs)("div", {
                          className: N.signatureBlock,
                          children: [
                            (0, s.jsx)("div", {
                              ref: I,
                              className: N.signHintContainer,
                              children: (0, s.jsxs)(c.animated.div, {
                                className: Y,
                                style: { ...k, ...W },
                                children: [
                                  (0, s.jsx)("div", {
                                    className: N.signContainerButton,
                                    children: (0, s.jsxs)(j.Z, {
                                      themeColor: X,
                                      className: N.signButton,
                                      size: u.Button.Sizes.SMALL,
                                      onClick: (e) => {
                                        var l;
                                        null === (l = I.current) ||
                                          void 0 === l ||
                                          l.scrollIntoView({
                                            behavior: "smooth",
                                          }),
                                          y(e);
                                      },
                                      children: [
                                        (0, s.jsx)("div", {
                                          className: o()(N.signCarot, {
                                            [N.signCarotCustomColors]:
                                              null != J,
                                          }),
                                          style:
                                            null != J ? J : { borderColor: X },
                                        }),
                                        null != E
                                          ? E
                                          : p.Z.Messages
                                              .CLAN_SETUP_OVERVIEW_SIGN_CTA,
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: N.signHintHelperText,
                                    children:
                                      null != S
                                        ? E
                                        : p.Z.Messages
                                            .CLAN_SETUP_OVERVIEW_SIGN_HELP,
                                  }),
                                  A &&
                                    (0, s.jsx)(u.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: N.signHintHelperText,
                                      children:
                                        p.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_DISCLAIMER.format(),
                                    }),
                                ],
                              }),
                            }),
                            (0, s.jsxs)(u.Clickable, {
                              onClick: y,
                              className: o()(N.signatureContainer, {
                                [N.clickable]: null != _,
                              }),
                              children: [
                                (0, s.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "none",
                                  children: "x",
                                }),
                                r
                                  ? (0, s.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "header-primary",
                                      className: N.signatureText,
                                      children: C.ZP.getName(l, null, G),
                                    })
                                  : (0, s.jsx)(u.Text, {
                                      variant: "text-lg/normal",
                                      color: "none",
                                      className: N.signatureText,
                                      children:
                                        p.Z.Messages
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
            return I;
          },
        }),
        t(47120);
      var a = t(735250),
        n = t(470079),
        s = t(120356),
        i = t.n(s),
        r = t(913527),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(410030),
        x = t(313201),
        h = t(271383),
        m = t(430824),
        g = t(594174),
        C = t(709054),
        v = t(931240),
        f = t(645896),
        j = t(603368),
        p = t(532490),
        N = t(380365),
        _ = t(979264),
        T = t(620929),
        E = t(284019),
        S = t(308083),
        Z = t(981631),
        L = t(689938),
        M = t(429982);
      function A(e) {
        var l;
        let { guildId: t, clanInfo: s, signed: r, onSignCharter: c } = e,
          u = n.useMemo(() => {
            let e = C.default.extractTimestamp(t);
            return o()(new Date(e)).format("MMMM YYYY");
          }, [t]),
          x = n.useMemo(() => new Set(s.games), [s.games]);
        return (0, a.jsx)(p.Z, {
          guildId: t,
          signHintPosition: p.p.LEFT,
          primaryColor:
            null === (l = s.branding) || void 0 === l ? void 0 : l.primaryColor,
          signed: r,
          onSignCharter: c,
          children: (0, a.jsxs)("div", {
            className: M.scrollContentsContainer,
            children: [
              (0, a.jsx)(_.aG, {
                guildId: t,
                clanBadge: s.badge.imageHash,
                clanTag: s.tag,
                textVariant: "heading-lg/semibold",
                badgeSize: S.NC.SIZE_24,
                className: M.clanTagChiplet,
              }),
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xxl/normal",
                    color: "text-muted",
                    className: M.charterHeaderText,
                    children: L.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE,
                  }),
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xxl/bold",
                    color: "interactive-active",
                    className: M.charterHeaderText,
                    children: s.name,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    className: M.establishedDate,
                    children:
                      L.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
                        date: u,
                      }),
                  }),
                ],
              }),
              (0, a.jsx)(T.p, {
                applicationIds: x,
                playstyle: s.playstyle,
                className: i()(M.charterBodyText, M.gameSection),
              }),
              (0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: M.charterBodyText,
                children: L.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP,
              }),
            ],
          }),
        });
      }
      function I(e) {
        var l;
        let { guildId: t, onClose: s, onAccept: r, ...o } = e,
          C = (0, x.Dt)(),
          p = (0, f.Cc)(t),
          _ = (0, f.E8)(t),
          [T, S] = n.useState(!0),
          [I, y] = n.useState(!1),
          w = n.useCallback(() => {
            r(), s();
          }, [r, s]);
        n.useEffect(() => {
          null == p && !_ && w();
        }, [p, w, _]);
        let H = n.useCallback(() => {
            T && (0, v.nE)(t, T, Z.Sbl.CREATE_JOIN_GUILD_MODAL), w();
          }, [t, w, T]),
          R = (0, c.e7)([m.Z], () => m.Z.getGuild(t)),
          V = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
          b = (0, c.e7)([h.ZP], () =>
            null != V ? h.ZP.getMember(t, V.id) : null,
          ),
          P = (0, u.ZP)(),
          U = (0, j.nP)(
            null == p
              ? void 0
              : null === (l = p.branding) || void 0 === l
                ? void 0
                : l.primaryColor,
            [d.tokens.colors.BG_BRAND, 0.7],
          ),
          B = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: P,
            saturation: 1,
          }).hex(),
          G = (0, j.nj)(U, B, "top center");
        return null == R || null == V || null == b || null == p
          ? null
          : (0, a.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              "aria-labelledby": C,
              className: M.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, a.jsxs)(d.ModalContent, {
                className: M.content,
                style: G,
                children: [
                  (0, a.jsxs)("div", {
                    className: M.infoSide,
                    children: [
                      (0, a.jsxs)("div", {
                        className: M.titlesContainer,
                        children: [
                          (0, a.jsx)("div", {
                            className: M.title,
                            children: (0, a.jsx)(d.Heading, {
                              variant: "heading-xxl/medium",
                              children:
                                L.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                                  name: R.name,
                                }),
                            }),
                          }),
                          (0, a.jsx)(d.Text, {
                            className: M.subtitle,
                            variant: "text-md/normal",
                            children: L.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE,
                          }),
                        ],
                      }),
                      (0, a.jsx)(N.Z, {
                        guildId: t,
                        isTagAdopted: T,
                        onChangeUseTag: S,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: M.scrollMainContainer,
                    children: (0, a.jsx)(A, {
                      guildId: t,
                      clanInfo: p,
                      signed: I,
                      onSignCharter: y,
                    }),
                  }),
                  (0, a.jsx)(E.Z, {
                    onClick: H,
                    color: d.Button.Colors.BRAND,
                    themeColor: U,
                    fullWidth: !1,
                    className: i()(M.ctaButton, I ? M.ctaButtonSigned : null),
                    children: (0, a.jsxs)("div", {
                      className: M.ctaButtonInner,
                      children: [
                        (0, a.jsx)(d.Text, {
                          color: "currentColor",
                          variant: "text-md/medium",
                          children: L.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA,
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
      var a = t(735250),
        n = t(470079),
        s = t(442837),
        i = t(481060),
        r = t(271383),
        o = t(430824),
        c = t(594174),
        d = t(5192),
        u = t(645896),
        x = t(979264),
        h = t(308083),
        m = t(689938),
        g = t(402488);
      l.Z = n.memo(function (e) {
        var l, t, n, C, v, f;
        let { guildId: j, isTagAdopted: p, onChangeUseTag: N } = e,
          _ = (0, u.Cc)(j),
          T = (0, s.e7)([o.Z], () => o.Z.getGuild(j)),
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
                : null === (n = T.clan) || void 0 === n
                  ? void 0
                  : n.tag,
          Z = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
          L = (0, s.e7)([r.ZP], () =>
            null != Z ? r.ZP.getMember(j, Z.id) : null,
          );
        return null == T || null == Z || null == L || null == E
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
                                null !== (f = L.colorString) && void 0 !== f
                                  ? f
                                  : void 0,
                            }),
                            p &&
                              (0, a.jsx)(x.aG, {
                                guildId: j,
                                clanBadge: E,
                                clanTag: S,
                                badgeSize: h.NC.SIZE_12,
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
                          children: m.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT,
                        }),
                        (0, a.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: m.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP,
                        }),
                      ],
                    }),
                    (0, a.jsx)(i.Switch, { onChange: N, checked: p }),
                  ],
                }),
              ],
            });
      });
    },
    570938: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var n = t(325767);
      function s(e) {
        let {
          width: l = 24,
          height: t = 24,
          color: s = "currentColor",
          ...i
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, n.Z)(i),
          width: l,
          height: t,
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              d: "M11.659 0.987386C11.7762 0.670872 12.2238 0.670871 12.341 0.987385L13.7473 4.78792C13.7841 4.88744 13.8626 4.96589 13.9621 5.00272L17.7626 6.40904C18.0791 6.52616 18.0791 6.97384 17.7626 7.09096L13.9621 8.49728C13.8626 8.53411 13.7841 8.61256 13.7473 8.71207L12.341 12.5126C12.2238 12.8291 11.7762 12.8291 11.659 12.5126L10.2527 8.71207C10.2159 8.61256 10.1374 8.53411 10.0379 8.49728L6.23739 7.09096C5.92087 6.97384 5.92087 6.52616 6.23739 6.40904L10.0379 5.00272C10.1374 4.96589 10.2159 4.88744 10.2527 4.78792L11.659 0.987386Z",
              fill: s,
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.4176 10.3072C17.7105 10.0143 18.1853 10.0143 18.4782 10.3072C18.7711 10.6001 18.7711 11.075 18.4782 11.3679L22.4539 15.3436C22.6763 15.5659 22.5427 15.9467 22.2302 15.9814L20.9173 16.1273C20.743 16.1467 20.6054 16.2843 20.586 16.4586L20.4402 17.7715C20.4054 18.084 20.0246 18.2176 19.8023 17.9952L15.8266 14.0195L13.0606 16.7855L18.2495 21.9745C18.5424 22.2674 18.5424 22.7422 18.2495 23.0351C17.9566 23.328 17.4817 23.328 17.1888 23.0351L11.9999 17.8462L6.81097 23.0351C6.51807 23.328 6.0432 23.328 5.75031 23.0351C5.45741 22.7422 5.45742 22.2673 5.75031 21.9745L10.9392 16.7855L8.17322 14.0195L4.19751 17.9952C3.97517 18.2176 3.59436 18.084 3.55964 17.7715L3.41377 16.4586C3.3944 16.2843 3.25679 16.1467 3.08247 16.1273L1.76961 15.9814C1.4571 15.9467 1.32352 15.5659 1.54586 15.3436L5.52157 11.3679C5.22868 11.075 5.22868 10.6001 5.52157 10.3072C5.81447 10.0143 6.28934 10.0143 6.58223 10.3072L11.9999 15.7249L17.4176 10.3072Z",
              fill: s,
            }),
          ],
        });
      }
    },
    856682: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var a = t(735250),
        n = t(470079),
        s = t(120356),
        i = t.n(s),
        r = t(526629),
        o = t(481060),
        c = t(393238),
        d = t(410030),
        u = t(231338),
        x = t(794459);
      let h = { mass: 1, tension: 400, friction: 60, clamp: !0 },
        m = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function g(e) {
        let { className: l, paperColor: t, paperColorAlt: n, axleColor: s } = e;
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
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M11.7998 28.2999C2.7998 28.3999 2.7998 11.9999 11.7998 12.0999C20.7998 11.9999 20.7998 28.3999 11.7998 28.2999Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M27.8999 40.3999C6.3999 40.7999 6.3999 -0.300075 27.8999 -7.45849e-05C49.3999 -0.300075 49.3999 40.7999 27.8999 40.3999Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M31.4997 31.4C17.0997 31.6 17.0997 8.79999 31.4997 8.89999C45.8997 8.69999 45.8997 31.5 31.4997 31.4Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M336 8.09998H37.2997C29.4997 8.09998 23.1997 13.5 23.1997 20.2C23.1997 26.9 29.4997 32.3 37.2997 32.3H336C343.8 32.3 350.1 26.9 350.1 20.2C350.1 13.5 343.8 8.09998 336 8.09998Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M338.5 31.4C324.1 31.6 324.1 8.79999 338.5 8.89999C352.9 8.69999 352.9 31.5 338.5 31.4Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M346.4 40.4C324.9 40.7 324.9 -0.400029 346.4 -2.87746e-05C367.9 -0.300029 367.9 40.8 346.4 40.4Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M348.8 33.6999C338.7 33.8999 338.7 6.39995 348.8 6.69995C358.9 6.49995 358.9 33.9999 348.8 33.6999Z",
                  fill: n,
                }),
                (0, a.jsx)("path", {
                  d: "M355.4 27.4C346 27.5 346 12.5 355.4 12.7C364.8 12.6 364.8 27.6 355.4 27.4Z",
                  fill: s,
                }),
                (0, a.jsx)("path", {
                  d: "M357.9 27.5C348.5 27.6 348.5 12.6 357.9 12.8C367.3 12.7 367.3 27.7 357.9 27.5Z",
                  fill: n,
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
        let { paperColor: l, paperColorAlt: t, className: n } = e;
        return (0, a.jsxs)("svg", {
          className: i()(x.bottom, n),
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
          [s, v] = n.useState(!1),
          { height: f, ref: j } = (0, c.Z)(),
          { height: p, ref: N } = (0, c.Z)(),
          _ = t ? p : 59 + (null != f ? f : 100) + 101,
          T = (0, o.useSpring)({
            from: { height: 0 },
            to: { height: _ },
            config: h,
            delay: s ? 0 : 800,
            onRest: () => v(!0),
          }),
          E = (0, o.useSpring)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: m,
            delay: 1e3,
          }),
          S = (0, d.Fg)(),
          Z = S === u.BR.LIGHT ? "#FFFFFF" : "#1C1D23",
          L = S === u.BR.LIGHT ? "#EBEDEF" : "#26272F",
          M = S === u.BR.LIGHT ? "#CCCCCC" : "#1A1A1E";
        return (0, a.jsx)("div", {
          className: x.container,
          ref: N,
          children: (0, a.jsxs)(r.animated.div, {
            className: x.heightContainer,
            style: { ...T, overflow: s ? "initial" : "hidden" },
            children: [
              (0, a.jsx)(g, {
                className: x.scrollSvg,
                paperColor: Z,
                paperColorAlt: L,
                axleColor: M,
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
                paperColorAlt: L,
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
      var a = t(735250),
        n = t(470079),
        s = t(120356),
        i = t.n(s),
        r = t(913527),
        o = t.n(r),
        c = t(442837),
        d = t(481060),
        u = t(430824),
        x = t(650461),
        h = t(353093),
        m = t(105671),
        g = t(532490),
        C = t(979264),
        v = t(570938),
        f = t(550271),
        j = t(116175),
        p = t(308083),
        N = t(689938),
        _ = t(691994);
      function T(e) {
        let {
          guildId: l,
          tag: t,
          badge: n,
          primaryColor: s,
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
              badgeSize: p.NC.SIZE_24,
              clanBadge: (0, a.jsx)(f.A, {
                className: _.charterClanBadge,
                badge: n,
                width: p.NC.SIZE_24,
                height: p.NC.SIZE_24,
                primaryTintColor: s,
                secondaryTintColor: i,
              }),
            });
      }
      function E(e) {
        let { applicationIds: l, playstyle: t, className: s } = e,
          r = n.useMemo(() => Array.from(l), [l]),
          o = (0, m.i)(r),
          c = n.useMemo(() => {
            if (null == o) return null;
            let e = (0, p.mv)(t);
            return null == e
              ? N.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({ games: o })
              : N.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format(
                  { playstyle: e, games: o },
                );
          }, [o, t]);
        return (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i()(_.overviewText, s),
          children:
            null == c ? N.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c,
        });
      }
      l.Z =
        12633 == t.j
          ? (e) => {
              let { guildId: l } = e,
                t = (0, x.Wg)(),
                s = (0, c.e7)([u.Z], () => {
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
                  interests: m,
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
                Z = n.useMemo(
                  () =>
                    (null == m ? void 0 : m.size) > 0
                      ? (0, h.f6)(Array.from(m), p.nt)
                      : null,
                  [m],
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
                    children: N.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE,
                  }),
                  (0, a.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: _.overviewGuildName,
                    children: s,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: _.overviewText,
                    children:
                      N.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
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
                          N.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
                            traits: Z,
                          }),
                      })
                    : null,
                  (0, a.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: _.overviewText,
                    children: N.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP,
                  }),
                ],
              });
            }
          : null;
    },
  },
]);
//# sourceMappingURL=1d0cfe9c615f615befe1.js.map
