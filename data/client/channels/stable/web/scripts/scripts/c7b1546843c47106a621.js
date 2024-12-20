"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50687"],
  {
    511293: function (e) {
      e.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (e) {
      e.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (e, t, n) {
      n(47120);
      var i,
        r = n(200651),
        o = n(192379),
        l = n(120356),
        u = n.n(l),
        a = n(481060),
        s = n(37234),
        c = n(230711),
        d = n(981631),
        f = n(388032),
        _ = n(261121);
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
      class g extends (i = o.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: _.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: _.streamerModeEnabledImage }),
              (0, r.jsx)(a.Clickable, {
                className: u()(_.streamerModeEnabledBtn, {
                  [_.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            p(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, s.jN)(d.S9g.USER_SETTINGS),
                c.Z.setSection(d.oAB.STREAMER_MODE));
            });
        }
      }
      p(g, "defaultProps", { disableButton: !1 }), (t.Z = g);
    },
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(772848),
        u = n(363969);
      let a = (0, l.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(u.button, n, { [u.open]: t, [u.withHighlight]: r }),
          children: [
            r &&
              (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                  id: a,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, i.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, i.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, i.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(a, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  stroke: r ? "url(#".concat(a, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    700582: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(481060),
        l = n(372900);
      t.Z = r.memo(function (e) {
        var t, n, u, a;
        let {
            user: s,
            size: c = o.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": f = !1,
            ..._
          } = e,
          p = r.useContext(l.Z);
        return (0, i.jsx)(o.Avatar, {
          src:
            ((t = s),
            (n = (0, o.getAvatarSize)(c)),
            (u = d),
            (a = p),
            t.getAvatarURL(a, n, u)),
          size: c,
          "aria-label": f ? void 0 : s.username,
          "aria-hidden": f,
          ..._,
        });
      });
    },
    935369: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(479531),
        o = n(388032);
      function l(e) {
        let [t, n] = i.useState(!1),
          [l, u] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), l = 0; l < t; l++)
                i[l] = arguments[l];
              try {
                return u(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== o.intl.string(o.t.N2yb9f) &&
                  u(e instanceof r.Z ? e : new r.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: l },
        ];
      }
    },
    724757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(924826),
        o = n(442837),
        l = n(607070);
      function u(e, t, n) {
        let u = (0, o.e7)([l.Z], () => l.Z.keyboardModeEnabled),
          a = i.useCallback(
            (e) => {
              let n = document.querySelector(e),
                i = t.current;
              null != n &&
                null != i &&
                (n.focus(), i.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
          ),
          s = i.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          ),
          c = i.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                if (null == n) return e();
                n.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [t],
          );
        return (0, r.ZP)({
          id: e,
          isEnabled: u,
          setFocus: a,
          scrollToStart: s,
          scrollToEnd: c,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    357352: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      function i(e) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(e);
      }
    },
    201895: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return c;
        },
      }),
        n(653041);
      var i = n(131704),
        r = n(699516),
        o = n(594174),
        l = n(933557),
        u = n(981631),
        a = n(388032);
      function s(e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
          return n ? a.intl.string(a.t["oj+HOj"]) : a.intl.string(a.t.xI3TQU);
      }
      function c(e) {
        let t,
          {
            channel: n,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: f,
            embeddedActivitiesCount: _,
            isSubscriptionGated: p,
            needSubscriptionToAccess: g,
          } = e,
          E = (0, l.F6)(n, o.default, r.Z);
        switch (n.type) {
          case u.d4z.DM:
            t = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
          case u.d4z.GROUP_DM:
            t = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
          case u.d4z.GUILD_STORE:
            t = a.t.Bo4msr;
            break;
          case u.d4z.GUILD_DIRECTORY:
            t = a.t["92EAFx"];
            break;
          case u.d4z.GUILD_ANNOUNCEMENT:
            t = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
          case u.d4z.GUILD_VOICE:
            let m = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name }),
            ];
            if (
              (d > 0 &&
                m.push(
                  a.intl.formatToPlainString(a.t["3l1GOz"], {
                    mentionCount: d,
                  }),
                ),
              c && m.push(a.intl.string(a.t.x5zAGR)),
              null != f)
            ) {
              let e = n.userLimit;
              null != e && e > 0
                ? m.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: f,
                      limit: e,
                    }),
                  )
                : m.push(
                    a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }),
                  );
            }
            null != _ &&
              _ > 0 &&
              m.push(
                a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: _ }),
              );
            let I = s({ isSubscriptionGated: p, needSubscriptionToAccess: g });
            return null != I && m.push(I), m.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            t = a.t.TPPk2d;
            break;
          default:
            t = i.Ec.has(n.type)
              ? d > 0
                ? a.t["ZL7+Iy"]
                : c
                  ? a.t.YlVvmZ
                  : a.t["0nZpiI"]
              : d > 0
                ? a.t.g8ONMz
                : c
                  ? a.t.smf1CQ
                  : a.t.s0JADg;
        }
        let h = [
            a.intl.formatToPlainString(t, { channelName: E, mentionCount: d }),
          ],
          C = s({ isSubscriptionGated: p, needSubscriptionToAccess: g });
        return null != C && h.push(C), h.join(", ");
      }
    },
    17079: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var i = n(570140),
        r = n(155414);
      async function o(e, t) {
        i.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: e,
          priceTierType: t,
        });
        try {
          let n = await r.X(e, t);
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
          });
        } catch (n) {
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: e,
            priceTierType: t,
          });
        }
      }
    },
    333866: function (e, t, n) {
      n.d(t, {
        a3: function () {
          return l;
        },
        eJ: function () {
          return a;
        },
        kL: function () {
          return s;
        },
        zJ: function () {
          return o;
        },
      });
      var i,
        r,
        o,
        l,
        u = n(388032);
      function a(e) {
        return {
          4: u.intl.string(u.t["5tzSRE"]),
          2: u.intl.string(u.t["WWIr5+"]),
          3: u.intl.string(u.t.WlSInZ),
          1: u.intl.string(u.t.uOU7Pz),
        }[e];
      }
      ((i = o || (o = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = l || (l = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let s = [4, 2, 3, 1];
    },
    76535: function (e, t, n) {
      n.d(t, {
        H: function () {
          return s;
        },
        R: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        o = n(584825),
        l = n(17079),
        u = n(281320);
      function a(e, t) {
        let n = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, t)),
          o = (0, r.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(e, t),
          );
        return (
          i.useEffect(() => {
            o === u.M.NOT_FETCHED && (0, l.T)(e, t);
          }, [e, o, t]),
          { loading: o === u.M.FETCHING, priceTiers: n }
        );
      }
      function s(e) {
        let {
          fetchSubscriptionsSettings: t,
          loading: n,
          error: r,
        } = (0, o.JH)();
        i.useEffect(() => {
          t(e);
        }, [t, e]);
        let l = (0, o.YB)(e);
        return {
          loaded: null != l && !n,
          subscriptionsSettings: l,
          loading: n,
          error: r,
        };
      }
    },
    155414: function (e, t, n) {
      n.d(t, {
        X: function () {
          return l;
        },
      });
      var i = n(544891),
        r = n(881052),
        o = n(981631);
      let l = async (e, t) => {
        try {
          return (
            await i.tn.get({
              url: o.ANM.PRICE_TIERS,
              query: { price_tier_type: t, guild_id: e },
              rejectWithError: !1,
            })
          ).body;
        } catch (e) {
          throw new r.Hx(e);
        }
      };
    },
    281320: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        r,
        o,
        l,
        u,
        a,
        s = n(442837),
        c = n(570140);
      let d = new Map(),
        f = new Map();
      ((o = i || (i = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      class _ extends (r = s.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, t) {
          var n, i;
          return null !==
            (i = null === (n = f.get(e)) || void 0 === n ? void 0 : n.get(t)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(e, t) {
          var n;
          return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t);
        }
      }
      (a = "CreatorMonetizationStore"),
        (u = "displayName") in (l = _)
          ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = a),
        (t.Z = new _(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), f.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !f.has(t) && f.set(t, new Map()), f.get(t).set(n, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: i } = e;
            !f.has(t) && f.set(t, new Map()),
              f.get(t).set(n, 2),
              !d.has(t) && d.set(t, new Map()),
              d.get(t).set(n, i);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !f.has(t) && f.set(t, new Map()), f.get(t).set(n, 2);
          },
        }));
    },
    834431: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var i = n(506071);
      function r() {
        return (0, i.n)();
      }
    },
    166081: function (e, t, n) {
      n.d(t, {
        U: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(695346),
        o = n(73346),
        l = n(834431);
      function u(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          a = (0, l.n)(),
          s = n && a && u;
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, o._W)(
              e.application_id,
              e.image_asset,
              t,
              s ? void 0 : "webp",
            );
        }, [t, e, s]);
      }
    },
    629481: function (e, t, n) {
      var i, r, o, l;
      n.d(t, {
        Hr: function () {
          return u;
        },
        P4: function () {
          return s;
        },
        TR: function () {
          return c;
        },
        mz: function () {
          return i;
        },
        tM: function () {
          return a;
        },
        xv: function () {
          return r;
        },
      }),
        ((o = i || (i = {})).GET_STARTED_CLICK = "get_started_click"),
        (o.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (o.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (o.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((l = r || (r = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (l.SHOP_HEADER_BUTTON = "shop_header_button");
      let u = "hasClickedGuildShopProductPreviewTab",
        a = "hasClickedGuildShopChannelRow",
        s = "https://discord.com/servershop",
        c = "1 GB";
    },
    841762: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        u = n(481060),
        a = n(542508);
      function s(e) {
        let { alt: t, ...n } = e,
          [o, l] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            o &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => l(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: r,
          aspectRatio: o,
          className: u,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, i.jsxs)("div", {
          className: l()(a.container, u),
          children: [
            (0, i.jsx)("img", { src: n, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: o },
              className: a.imageContainer,
              children: (0, i.jsx)(s, {
                src: t,
                alt: r,
                className: l()(a.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    765585: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        u = n(481060),
        a = n(393238),
        s = n(605236),
        c = n(279745),
        d = n(921944),
        f = n(388032),
        _ = n(410842);
      t.Z = r.forwardRef(function (e, t) {
        let {
            body: n,
            header: o,
            artClassName: p,
            headerClassName: g,
            contentClassName: E,
            tryItText: m,
            dismissText: I,
            onTryFeature: h,
            onClose: C,
            className: S,
            inlineArt: T = !1,
            isPremiumFeature: v = !1,
            shouldUseHorizontalButtons: b = !1,
            showGIFTag: N = !1,
            dismissibleContent: A,
            position: O = "top",
            align: L = "center",
            art: P,
            isPremiumEarlyAccess: R = !1,
            maxWidth: M = 280,
            hideDismissButton: y = !1,
            pointerClassName: x,
            dismissIconClassName: Z,
            dismissIcon: j,
            onDismissIconClick: U,
          } = e,
          D = b ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
          [F, w] = r.useState(!1),
          { ref: G, width: k } = (0, a.Z)();
        function B(e) {
          (0, s.EW)(A, { dismissAction: e });
        }
        return (
          r.useEffect(() => {
            var e, t;
            let n =
              (null !==
                (t =
                  null === (e = G.current) || void 0 === e
                    ? void 0
                    : e.scrollWidth) && void 0 !== t
                ? t
                : 0) + 64;
            !F && n > M && w(!0);
          }, [F, k, G, M]),
          r.useEffect(() => {
            (0, s.kk)(A);
          }, [A]),
          (0, i.jsx)("div", {
            className: S,
            ref: t,
            children: (0, i.jsxs)("div", {
              className: l()(_.content, E, {
                [_.contentNoArt]: null == p || T,
                [_.contentPremium]: v || R,
              }),
              children: [
                null != j &&
                  (0, i.jsx)(u.Clickable, {
                    onClick: U,
                    className: Z,
                    children: j,
                  }),
                (0, i.jsxs)("div", {
                  className: l()(p, T ? _.artInline : _.artAbsolute),
                  children: [N && (0, i.jsx)(c.Z, { className: _.gifTag }), P],
                }),
                (0, i.jsxs)("div", {
                  className: _.body,
                  children: [
                    (0, i.jsxs)(u.Heading, {
                      className: l()(v ? _.headerWithPremiumIcon : _.header, g),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        v && !R
                          ? (0, i.jsx)(u.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: _.premiumIcon,
                            })
                          : null,
                        R
                          ? (0, i.jsxs)(u.Text, {
                              color: "always-white",
                              variant: "eyebrow",
                              className: _.earlyAccessBadgeContainer,
                              children: [
                                (0, i.jsx)(u.NitroWheelIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: _.earlyAccessIcon,
                                }),
                                (0, i.jsx)("span", {
                                  className: _.earlyAccessText,
                                  children: f.intl.string(f.t.phHyIS),
                                }),
                              ],
                            })
                          : null,
                        o,
                      ],
                    }),
                    null == n
                      ? null
                      : "string" == typeof n
                        ? (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: n,
                          })
                        : n,
                  ],
                }),
                (0, i.jsx)("div", {
                  ref: G,
                  className:
                    F || !b
                      ? _.buttonContainerVertical
                      : _.buttonContainerHorizontal,
                  children:
                    null != h
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(u.Button, {
                              className: _.button,
                              size: D,
                              onClick: (e) => {
                                null == C || C(e), h(e), B(d.L.PRIMARY);
                              },
                              color:
                                v || R
                                  ? u.Button.Colors.BRAND_INVERTED
                                  : u.Button.Colors.WHITE,
                              children:
                                null != m ? m : f.intl.string(f.t.IHf1RE),
                            }),
                            !y &&
                              (0, i.jsx)(u.Button, {
                                className: _.button,
                                size: D,
                                onClick: (e) => {
                                  null == C || C(e), B(d.L.DISMISS);
                                },
                                color:
                                  v || R
                                    ? u.Button.Colors.WHITE
                                    : u.Button.Colors.BRAND,
                                look:
                                  v || R
                                    ? u.Button.Looks.LINK
                                    : u.Button.Looks.FILLED,
                                children:
                                  null != I ? I : f.intl.string(f.t.om7Ovr),
                              }),
                          ],
                        })
                      : (0, i.jsx)(u.Button, {
                          className: _.button,
                          size: u.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == C || C(e), B(d.L.PRIMARY);
                          },
                          color: u.Button.Colors.WHITE,
                          children: f.intl.string(f.t.HU2IR0),
                        }),
                }),
                (0, i.jsx)("div", {
                  className: l()(_.pointer, x, {
                    [_.bottomPointer]: "top" === O,
                    [_.centerLeftPointer]: "right" === O && "center" === L,
                    [_.topLeftPointer]: "right" === O && "top" === L,
                  }),
                }),
              ],
            }),
          })
        );
      });
    },
    479099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
        f: function () {
          return S;
        },
      }),
        n(47120);
      var i,
        r,
        o = n(200651),
        l = n(192379),
        u = n(120356),
        a = n.n(u),
        s = n(91192),
        c = n(442837),
        d = n(481060),
        f = n(239091),
        _ = n(596454),
        p = n(607070),
        g = n(339085),
        E = n(695346),
        m = n(572004),
        I = n(388032),
        h = n(680475);
      function C(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: C,
            onRemove: S,
            selected: T,
            ariaLabel: v,
          } = e,
          { name: b, emojiId: N, emojiName: A } = t,
          O = null != S,
          [L, P] = l.useState(!1),
          R = (0, c.e7)([g.ZP], () =>
            null != N ? g.ZP.getUsableCustomEmojiById(N) : null,
          ),
          M = O || null != C,
          y = (!O || !L) && (null != N || null != A),
          x = 0 === i,
          Z = l.useRef(null),
          j = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
          U = (e) => {
            let i = E.Sb.getSetting();
            m.wS &&
              i &&
              (0, f.jW)(e, async () => {
                let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, o.jsx)(e, { ...n, tag: t });
              });
          },
          D = (0, o.jsxs)(o.Fragment, {
            children: [
              y
                ? (0, o.jsx)(_.Z, {
                    className: a()(h.emoji, { [h.small]: x }),
                    emojiId: N,
                    emojiName: A,
                    animated: !!(null == R ? void 0 : R.animated),
                    size: "reaction",
                  })
                : null,
              L &&
                O &&
                (0, o.jsx)("div", {
                  className: h.closeCircle,
                  children: (0, o.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: h.close,
                  }),
                }),
              (0, o.jsx)(d.Text, {
                variant: x ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: b,
              }),
            ],
          }),
          F = {
            key: t.id,
            className: a()(
              h.pill,
              {
                [h.disabled]: r,
                [h.clickable]: M,
                [h.small]: x,
                [h.selected]: T,
              },
              u,
            ),
            onClick: (e) => {
              null == C || C(e),
                null == S || S(t),
                !j && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => O && P(!0),
            onMouseLeave: () => O && P(!1),
          },
          w = (0, s.JA)("forum-tag-".concat(t.id));
        return M
          ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              "aria-label":
                null != v
                  ? v
                  : I.intl.formatToPlainString(I.t.iyRTLi, { tagName: b }),
              role: "button",
              "aria-pressed": T,
              ...F,
              children: D,
            })
          : (0, o.jsx)("div", { ...F, children: D });
      }
      function S(e) {
        let { tags: t, count: n, size: i = 1 } = e,
          r = 0 === i;
        return (0, o.jsx)(d.Tooltip, {
          "aria-label": I.intl.string(I.t["P/y+sr"]),
          text: (0, o.jsx)(o.Fragment, {
            children: t.map((e) =>
              (0, o.jsx)(
                C,
                { tag: e, className: h.tooltipPill, size: C.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, o.jsx)("div", {
              ...e,
              className: a()(h.pill, { [h.small]: r }),
              children: (0, o.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (C.Sizes = i);
    },
    528011: function (e, t, n) {
      n.d(t, {
        g: function () {
          return E;
        },
        mI: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(149765),
        r = n(399606),
        o = n(581883),
        l = n(430824),
        u = n(496675),
        a = n(914010),
        s = n(594174),
        c = n(700785),
        d = n(709054),
        f = n(533244),
        _ = n(487419),
        p = n(676770);
      n(981631);
      function g(e) {
        let t = (0, r.e7)([l.Z, u.Z], () => {
            let t = l.Z.getGuild(e);
            if (null == t) return !1;
            let n = u.Z.getGuildPermissions(t);
            return null != n && i.Db(n, p.cv);
          }),
          n = (0, r.e7)([_.Z], () =>
            null != e ? _.Z.getGuildIncident(e) : null,
          ),
          o = null != n && (0, f.ur)(n);
        return {
          shouldShowIncidentActions: t,
          incidentData: n,
          isUnderLockdown: o,
        };
      }
      function E() {
        var e;
        let t = (function (e) {
            let t = s.default.getCurrentUser(),
              n = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((e) => l.Z.getGuild(e))) {
              if (null == r) continue;
              let o = n[r.id];
              if (
                !(
                  null == o ||
                  (!(0, f.i9)(o) && !(0, f.ur)(o)) ||
                  ((0, f.ur)(o) && r.id !== e)
                )
              ) {
                if (
                  i.Db(c.uB({ user: t, context: r, checkElevated: !1 }), p.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
          r = null != t ? n[t] : null,
          u = null != r && r.disableRaidAlertNag;
        return { show: null != t && !u, guildId: t };
      }
    },
    273504: function (e, t, n) {
      n.d(t, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return h;
        },
        Lg: function () {
          return I;
        },
        OU: function () {
          return E;
        },
        RH: function () {
          return a;
        },
        Ux: function () {
          return r;
        },
        VW: function () {
          return d;
        },
        Vg: function () {
          return m;
        },
        Vk: function () {
          return _;
        },
        _6: function () {
          return C;
        },
        aj: function () {
          return g;
        },
        dc: function () {
          return S;
        },
        fX: function () {
          return u.f;
        },
        hu: function () {
          return f;
        },
        jj: function () {
          return o.j;
        },
        n4: function () {
          return s;
        },
        q4: function () {
          return l.q;
        },
        uE: function () {
          return p;
        },
      });
      var i,
        r,
        o = n(401653),
        l = n(95930),
        u = n(41381);
      ((i = r || (r = {}))[(i.PROFANITY = 1)] = "PROFANITY"),
        (i[(i.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (i[(i.SLURS = 3)] = "SLURS"),
        u.f.USER_PROFILE,
        u.f.SERVER_POLICY,
        u.f.MENTION_SPAM,
        u.f.ML_SPAM,
        u.f.DEFAULT_KEYWORD_LIST,
        u.f.KEYWORD;
      let a = 1e3,
        s = 100,
        c = 1e3,
        d = 10,
        f = 60,
        _ = 1,
        p = 1,
        g = 260,
        E = 100,
        m = 1,
        I = 50,
        h = 20,
        C = 150,
        S = "automod-profile-quarantine-alert";
    },
    787824: function (e, t, n) {
      n.d(t, {
        C: function () {
          return function e(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((n, r) => {
                  let o = (0, i.camelCase)(r);
                  return (
                    "object" != typeof t[r] || Array.isArray(t[r])
                      ? (n[o] = t[r])
                      : (n[o] = e(t[r])),
                    n
                  );
                }, {});
          };
        },
        X: function () {
          return function e(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((n, r) => {
                  let o = (0, i.snakeCase)(r);
                  return (
                    "object" != typeof t[r] || Array.isArray(t[r])
                      ? (n[o] = t[r])
                      : (n[o] = e(t[r])),
                    (n[o] = t[r]),
                    n
                  );
                }, {});
          };
        },
      }),
        n(724458);
      var i = n(392711);
    },
    226192: function (e, t, n) {
      n.d(t, {
        UV: function () {
          return c;
        },
        _s: function () {
          return a;
        },
        kW: function () {
          return s;
        },
        km: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(273504),
        l = n(388032);
      function u(e) {
        return {
          [o.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("94005").then(n.bind(n, 144462));
                return (n) => {
                  var o;
                  return (0, i.jsx)(r, {
                    initialCustomMessage:
                      null !== (o = t.metadata.customMessage) && void 0 !== o
                        ? o
                        : "",
                    onSubmit: (i) => {
                      (t.metadata.customMessage = i), e(t), n.onClose();
                    },
                    ...n,
                    onClose: () => (e(null), n.onClose()),
                  });
                };
              });
            }),
          [o.jj.FLAG_TO_CHANNEL]: (t, l) =>
            new Promise((u) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("74543").then(n.bind(n, 643611)),
                  a = t.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                return (n) =>
                  (0, i.jsx)(r, {
                    action: l,
                    isEdit: null != a,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (l.metadata.channelId = e),
                        t.exemptChannels.add(e),
                        u(l),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (u(null), n.onClose()),
                  });
              });
            }),
          [o.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((l) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("78273").then(n.bind(n, 41767)),
                  u = e.actions.find(
                    (e) => e.type === o.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, i.jsx)(r, {
                    action: t,
                    isEdit: null != u,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (t.metadata.durationSeconds = e),
                        l(t),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (l(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function a(e, t, o, l) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("37483").then(n.bind(n, 241046));
          return (n) =>
            (0, i.jsx)(r, {
              ...n,
              automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: o,
                channel: l,
              },
            });
        });
      }
      function s(e, t) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("28382").then(n.bind(n, 537623));
          return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
        });
      }
      function c(e) {
        (0, r.openModal)((t) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: l.intl.string(l.t.wLGrjI),
            confirmText: l.intl.string(l.t["cY+Ooa"]),
            onConfirm: e,
            cancelText: l.intl.string(l.t["ETE/oK"]),
            ...t,
            children: (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              children: l.intl.string(l.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (e, t, n) {
      n.d(t, {
        $Y: function () {
          return T;
        },
        JK: function () {
          return h;
        },
        Je: function () {
          return C;
        },
        T9: function () {
          return N;
        },
        UE: function () {
          return b;
        },
        Xx: function () {
          return v;
        },
        mm: function () {
          return S;
        },
        qY: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(544891),
        r = n(570140),
        o = n(367907),
        l = n(430824),
        u = n(496675),
        a = n(823379),
        s = n(709054),
        c = n(177862),
        d = n(787824),
        f = n(226192),
        _ = n(981631);
      function p(e) {
        return { type: e.type, metadata: (0, d.X)(e.metadata) };
      }
      function g(e) {
        var t, n;
        let i = (0, d.X)(e.triggerMetadata);
        return (
          null != i && delete i.keywordLists,
          {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: i,
            actions: e.actions.filter(a.lm).map(p),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(
              null !== (t = e.exemptChannels) && void 0 !== t ? t : [],
            ),
            exempt_roles: Array.from(
              null !== (n = e.exemptRoles) && void 0 !== n ? n : [],
            ),
          }
        );
      }
      function E(e) {
        return { type: e.type, metadata: (0, d.C)(e.metadata) };
      }
      function m(e) {
        var t, n, i;
        let r = {
          id:
            null !== (t = e.id) && void 0 !== t
              ? t
              : s.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, d.C)(e.trigger_metadata),
          actions: e.actions.filter(a.lm).map(E),
          enabled: e.enabled,
          creatorId: e.creator_id,
          position: e.position,
          exemptChannels: new Set(
            null !== (n = e.exempt_channels) && void 0 !== n ? n : [],
          ),
          exemptRoles: new Set(
            null !== (i = e.exempt_roles) && void 0 !== i ? i : [],
          ),
        };
        return (
          null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r
        );
      }
      async function I(e) {
        let t = g(e),
          n = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
          });
        return (0, d.C)(n.body);
      }
      async function h(e) {
        let t = g(e);
        return (
          delete t.id,
          m(
            (
              await i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: t,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function C(e) {
        let t = g(e);
        return m(
          (
            await i.tn.patch({
              url: _.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: t,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function S(e, t) {
        return (
          await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function T(e) {
        let t = await i.tn.get({
          url: _.ANM.GUILD_AUTOMOD_RULES(e),
          rejectWithError: !1,
        });
        return Array.isArray(t.body) ? t.body.map(m) : [];
      }
      async function v(e, t, n) {
        if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, t))
          await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
          });
      }
      function b(e, t, n) {
        let r = l.Z.getGuild(e);
        if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, o.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                rejectWithError: !0,
              }),
              n();
          });
      }
      function N(e) {
        r.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
    223606: function (e, t, n) {
      n(724458);
      var i,
        r = n(442837),
        o = n(570140),
        l = n(673750),
        u = n(786761),
        a = n(592125),
        s = n(375954),
        c = n(709054),
        d = n(539573),
        f = n(825829),
        _ = n(981631);
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
      let g = {},
        E = 0,
        m = {},
        I = {},
        h = (e, t) => {
          let n = (0, l.hc)(e),
            i = {
              id: n,
              isBlockedEdit: (0, l.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, t),
            };
          (g[n] = i), E++;
        },
        C = (e) => g[e],
        S = (e) => {
          null != g[e] && delete g[e], E++;
        };
      function T(e) {
        let { messageData: t, errorResponseBody: n } = e;
        return h(t, n), !0;
      }
      function v(e) {
        var t;
        let { channelId: n, messages: i } = e,
          r =
            null === (t = a.Z.getChannel(n)) || void 0 === t
              ? void 0
              : t.getGuildId();
        if (null == r) return !1;
        let o = I[r],
          l = i.reduce((e, t) => {
            var n;
            return t.type === _.uaV.AUTO_MODERATION_ACTION &&
              (null === (n = t.embeds) || void 0 === n
                ? void 0
                : n.some((e) => {
                    let { type: t } = e;
                    return t === _.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === c.default.compare(e, t.id)
                ? t.id
                : void 0
              : e;
          }, o);
        return null != l && I[r] !== l && ((I[r] = l), !0);
      }
      class b extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((g = e.automodFailedMessages),
              (m = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: g,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: I,
          };
        }
        getMessage(e) {
          var t;
          return null == e
            ? null
            : null !== (t = C(e)) && void 0 !== t
              ? t
              : null;
        }
        getMessagesVersion() {
          return E;
        }
        getMentionRaidDetected(e) {
          var t;
          return null !== (t = m[e]) && void 0 !== t ? t : null;
        }
        getLastIncidentAlertMessage(e) {
          var t;
          return null !== (t = I[e]) && void 0 !== t ? t : null;
        }
      }
      p(b, "displayName", "GuildAutomodMessageStore"),
        p(b, "persistKey", "GuildAutomodMessages"),
        (t.Z = new b(o.Z, {
          CONNECTION_OPEN: function (e) {
            return (g = {}), E++, !0;
          },
          LOAD_MESSAGES_SUCCESS: v,
          LOCAL_MESSAGES_LOADED: v,
          MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((I[t] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: T,
          MESSAGE_EDIT_FAILED_AUTOMOD: T,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return S(t), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if (
              (null == t ? void 0 : t.body) == null ||
              t.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let n = t.body.id;
            if (null == n) return !1;
            S(n);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: t,
              decisionId: n,
              suspiciousMentionActivityUntil: i,
            } = e;
            return (
              (m[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete m[t], !0;
          },
        }));
    },
    290034: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(297700),
        u = n(471885),
        a = n(981631),
        s = n(201950);
      let c = {
          [a.Eu4.NONE]: s.iconBackgroundTierNone,
          [a.Eu4.TIER_1]: s.iconBackgroundTierOne,
          [a.Eu4.TIER_2]: s.iconBackgroundTierTwo,
          [a.Eu4.TIER_3]: s.iconBackgroundTierThree,
        },
        d = {
          [a.Eu4.NONE]: s.iconTierNone,
          [a.Eu4.TIER_1]: s.iconTierOne,
          [a.Eu4.TIER_2]: s.iconTierTwo,
          [a.Eu4.TIER_3]: s.iconTierThree,
        };
      function f(e) {
        let {
          premiumTier: t,
          iconBackgroundClassName: n,
          iconClassName: r,
          size: a,
        } = e;
        return (0, i.jsx)(l.Z, {
          className: o()(n, c[t]),
          size: a,
          children: (0, i.jsx)(u.Z, {
            tier: t,
            className: o()(r, s.boostedGuildIconGem, d[t]),
          }),
        });
      }
    },
    527379: function (e, t, n) {
      n.d(t, {
        Dr: function () {
          return g;
        },
        YO: function () {
          return _;
        },
        _X: function () {
          return E;
        },
        _o: function () {
          return p;
        },
        nb: function () {
          return m;
        },
        zO: function () {
          return f;
        },
      });
      var i = n(570140),
        r = n(63568),
        o = n(434404),
        l = n(703656),
        u = n(430824),
        a = n(241559),
        s = n(327999),
        c = n(981631),
        d = n(176505);
      async function f(e) {
        await i.Z.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: e,
        });
      }
      function _(e) {
        i.Z.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: e,
        });
      }
      function p(e, t) {
        let { continuationToken: n, ...r } = t;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function g(e, t) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function E(e) {
        let t = (0, a.lv)(e),
          n = u.Z.getGuild(e);
        return (
          !!t &&
          null != n &&
          (((0, r.K2)(e, "Guild Sidebar") &&
            n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
          n.hasFeature(c.oNc.COMMUNITY) ||
          n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, l.uL)(c.Z5c.CHANNEL(e, d.oC.MEMBER_SAFETY)), !0)
            : (o.Z.open(n.id, c.pNK.MEMBERS), !0))
        );
      }
      async function m(e, t) {
        let n = await (0, s._2)(e, t);
        return 0 === n.length
          ? []
          : (await i.Z.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: e,
              memberSupplementals: n,
            }),
            n);
      }
    },
    495437: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return l;
        },
        Je: function () {
          return a;
        },
        cf: function () {
          return u;
        },
        mh: function () {
          return s;
        },
      });
      var i = n(570140),
        r = n(881052),
        o = n(824389);
      let l = async (e) => {
          i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let t = await o.uV(e);
            i.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: e,
              products: t,
            });
          } catch (t) {
            i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
          }
        },
        u = async (e, t) => {
          i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: t });
          try {
            let n = await o.p9(e, t);
            return (
              i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: n }),
              n
            );
          } catch (e) {
            throw (
              (i.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: t,
                error: new r.Hx(e),
              }),
              e)
            );
          }
        };
      async function a(e, t, n) {
        let r = await o.Je(e, t, n);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function s(e, t) {
        return (
          await o.mh(e, t),
          i.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: t }),
          !0
        );
      }
    },
    267101: function (e, t, n) {
      n.d(t, {
        SO: function () {
          return E;
        },
        eD: function () {
          return f;
        },
        hO: function () {
          return _;
        },
        r: function () {
          return g;
        },
        ue: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837);
      n(935369);
      var o = n(38618),
        l = n(160404),
        u = n(496675),
        a = n(914010),
        s = n(495437),
        c = n(240864),
        d = n(981631);
      let f = (e) => {
          let t = (0, r.e7)(
              [c.Z],
              () =>
                null != e
                  ? c.Z.getGuildProductsForGuildFetchState(e)
                  : c.M.FETCHED,
              [e],
            ),
            n = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            [l, u] = i.useState(!0);
          return (
            i.useEffect(() => {
              l &&
                (t === c.M.NOT_FETCHED ||
                  (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                n &&
                s.EB(e),
                u(!n);
            }, [e, n, t, l]),
            { listingsLoaded: t === c.M.FETCHED && !l }
          );
        },
        _ = function (e, t) {
          let { requireCurrentGuild: n } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            l = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(t);
              if ((!n || u === e) && l && i === c.M.NOT_FETCHED)
                try {
                  s.cf(e, t);
                } catch (e) {}
            }, [e, t, l, u, n]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(t))
          );
        },
        p = function (e) {
          let { publishedOnly: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, l.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != t ? t : !l.Z.isViewingServerShop(e),
            }),
          );
        },
        g = (e) =>
          (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        E = (e) =>
          (0, r.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
    },
    824389: function (e, t, n) {
      n.d(t, {
        Je: function () {
          return u;
        },
        gs: function () {
          return d;
        },
        mh: function () {
          return a;
        },
        p9: function () {
          return c;
        },
        uV: function () {
          return s;
        },
      });
      var i = n(544891),
        r = n(881052),
        o = n(73346),
        l = n(981631);
      let u = async (e, t, n) => {
          let {
            priceTier: o,
            imageName: u,
            createNewRole: a,
            unlinkRole: s,
            ...c
          } = n;
          try {
            return (
              await i.tn.patch({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                body: {
                  ...c,
                  image_name: u,
                  price_tier: o,
                  create_new_role: a,
                  unlink_role: s,
                },
                rejectWithError: !1,
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        a = async (e, t) => {
          try {
            await i.tn.del({
              url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
              rejectWithError: !1,
            });
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        s = async (e) => {
          try {
            return (
              await (0, o.Kb)({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e),
                rejectWithError: !1,
              })
            ).body.listings;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        c = async (e, t) => {
          try {
            return (
              await (0, o.Kb)({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1,
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        d = async (e) => {
          let { guildId: t, productId: n, attachmentId: o } = e;
          try {
            return (
              await i.tn.post({
                url: l.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o),
                rejectWithError: !1,
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        };
    },
    240864: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(653041),
        n(47120);
      var i,
        r,
        o,
        l,
        u,
        a,
        s = n(442837),
        c = n(759174),
        d = n(570140),
        f = n(70956),
        _ = n(709054);
      ((o = i || (i = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let p = {},
        g = {},
        E = {},
        m = 10 * f.Z.Millis.MINUTE;
      function I(e) {
        return "guild:".concat(e);
      }
      function h(e) {
        return "guild:".concat(e, ":published");
      }
      let C = new c.h(
          (e) => {
            let t = [I(e.guild_id)];
            return e.published && t.push(h(e.guild_id)), t;
          },
          (e) =>
            (function (e) {
              let t = _.default.extractTimestamp(e.id);
              return e.published ? -t : -t + 1e12;
            })(e),
        ),
        S = [];
      class T extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var t;
          return null !== (t = p[e]) && void 0 !== t ? t : 0;
        }
        getGuildProduct(e) {
          return C.get(e);
        }
        getGuildProductsForGuild(e, t) {
          let { publishedOnly: n } = t;
          return null == e ? S : C.values(n ? h(e) : I(e));
        }
        getGuildProductFetchState(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : 0;
        }
        isGuildProductsCacheExpired(e) {
          var t;
          return Date.now() - (null !== (t = E[e]) && void 0 !== t ? t : 0) > m;
        }
      }
      (a = "GuildProductsStore"),
        (u = "displayName") in (l = T)
          ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = a),
        (t.Z = new T(d.Z, {
          CONNECTION_OPEN: function () {
            C.clear(), (p = {}), (g = {}), (E = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: t } = e;
            (p[t] = 1),
              [...C.values(I(t))].forEach((e) => {
                C.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, products: n } = e;
            (p[t] = 2),
              (E[t] = Date.now()),
              n.forEach((e) => {
                C.set(e.id, e), (g[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            p[t] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: t } = e;
            C.set(t.id, t);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: t } = e;
            C.set(t.id, t);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: t } = e;
            C.delete(t);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: t } = e;
            g[t] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: t } = e;
            (g[t.id] = 2), C.set(t.id, t);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: t, error: n } = e;
            (g[t] = 2), 404 === n.status && C.delete(t);
          },
        }));
    },
    863663: function (e, t, n) {
      n.d(t, {
        NB: function () {
          return l;
        },
        ar: function () {
          return c;
        },
        fG: function () {
          return s;
        },
        kg: function () {
          return u;
        },
        pM: function () {
          return a;
        },
      });
      var i = n(881052);
      n(496675);
      var r = n(981631),
        o = n(388032);
      let l = "_role";
      function u(e) {
        if (!(e >= 0))
          switch (-e) {
            case r.evJ.ENTITY_TOO_LARGE:
              return o.intl.string(o.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return o.intl.string(o.t.ZaXBoK);
            case 1:
              return o.intl.string(o.t.R0RpRU);
            default:
              return o.intl.formatToPlainString(o.t.cYwlp6, { code: -e });
          }
      }
      function a(e) {
        let { newRoleParams: t } = e;
        if (null != t && "" === t.name.trim()) {
          var n, r;
          return (
            (n = l),
            (r = o.intl.string(o.t["V0B/k5"])),
            new i.Hx({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [n]: { _errors: [{ code: "", message: r }] } },
              },
            })
          );
        }
      }
      function s(e) {
        var t;
        let {
            guildProductListing: n,
            name: i,
            priceTier: r,
            description: o,
            image: l,
            imageName: u,
            isImageChanged: a,
            newRoleParams: s,
            hasUnsavedAttachmentChanges: c,
          } = e,
          d = {};
        (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (d.name = i),
          (null !== (t = null == n ? void 0 : n.description) && void 0 !== t
            ? t
            : "") !== o && (d.description = o),
          (null == n ? void 0 : n.price_tier) !== r &&
            null != r &&
            (d.priceTier = r),
          null != s && "" !== s.name.trim()
            ? (d.createNewRole = !0)
            : null === s && (d.unlinkRole = !0),
          l.startsWith("data:") &&
            (a || (null == n && (Object.keys(d).length > 0 || c))) &&
            ((d.image = l), (d.imageName = u));
        let f = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: f,
          canSaveForDraft: f,
          canSaveForPublished: f,
          canPublishOrUnpublish: !(null == n || f),
        };
      }
      function c(e, t) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Z5c.GUILD_PRODUCT(e, t));
      }
    },
    676651: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(302463);
      function l(e, t) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await n.e("73628").then(n.bind(n, 458961));
            return (n) => (0, i.jsx)(r, { guildId: e, productId: t, ...n });
          },
          { modalKey: o.Yz },
        );
      }
    },
    942833: function (e, t, n) {
      n.d(t, {
        C: function () {
          return l;
        },
        k: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(937615),
        o = n(388032);
      function l(e) {
        return i.useMemo(() => {
          if (null == e) return;
          let t = null != e.role_id,
            n = e.attachments_count > 0;
          if (t && n) return o.intl.string(o.t.ih4QMT);
          if (t) return o.intl.string(o.t.o9xphY);
          if (n) return o.intl.string(o.t.DWYJub);
        }, [e]);
      }
      function u(e) {
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.price) == null) return;
          let { amount: t, currency: n } = e.price;
          return (0, r.T4)(t, n);
        }, [e]);
      }
    },
    613810: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060);
      t.Z = {
        open: function (e) {
          (0, r.openModalLazy)(async () => {
            let { default: t } = await n.e("53162").then(n.bind(n, 490576));
            return (n) => (0, i.jsx)(t, { ...e, ...n });
          });
        },
      };
    },
    391181: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
        m: function () {
          return E;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(481060),
        u = n(239091),
        a = n(166081),
        s = n(937615),
        c = n(942833),
        d = n(48691),
        f = n(231338),
        _ = n(388032),
        p = n(24753);
      function g(e) {
        let {
          showEditProduct: t,
          showUnpublishProduct: n,
          showCopyLink: r,
          showTestDownload: o,
          showDeleteProduct: u,
          showReportProduct: a,
          onEditProduct: s,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: f,
          onTestDownload: g,
          onReportProduct: E,
          closePopout: m,
          onSelect: I,
        } = e;
        return (0, i.jsx)("div", {
          className: p.menuContainer,
          children: (0, i.jsxs)(l.Menu, {
            navId: "guild-product-context",
            onClose: m,
            "aria-label": _.intl.string(_.t.Z146dH),
            onSelect: I,
            children: [
              (0, i.jsxs)(l.MenuGroup, {
                children: [
                  t &&
                    (0, i.jsx)(l.MenuItem, {
                      id: "guild-product-edit",
                      label: _.intl.string(_.t.EEfce3),
                      action: s,
                    }),
                  r &&
                    (0, i.jsx)(l.MenuItem, {
                      id: "guild-product-copy-link",
                      label: _.intl.string(_.t.XR26ur),
                      icon: l.LinkIcon,
                      action: f,
                    }),
                  o &&
                    (0, i.jsx)(l.MenuItem, {
                      id: "guild-product-test-download",
                      label: _.intl.string(_.t.aXoI6e),
                      icon: l.DownloadIcon,
                      action: g,
                    }),
                ],
              }),
              (0, i.jsxs)(l.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(l.MenuItem, {
                      id: "guild-product-unpublish",
                      label: _.intl.string(_.t.QrkMlJ),
                      action: c,
                    }),
                  u &&
                    (0, i.jsx)(l.MenuItem, {
                      id: "guild-product-delete",
                      label: _.intl.string(_.t.zWjqvL),
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, i.jsx)(l.MenuGroup, {
                children:
                  a &&
                  (0, i.jsx)(l.MenuItem, {
                    id: "guild-product-report",
                    label: _.intl.string(_.t["6yUzvL"]),
                    color: "danger",
                    action: E,
                  }),
              }),
            ],
          }),
        });
      }
      function E(e) {
        let {
          product: t,
          guildId: n,
          showEditProduct: r,
          showUnpublishProduct: o,
          showTestDownload: u,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: E,
          onCopyProductLink: m,
          onTestDownload: I,
          onReportProduct: h,
        } = e;
        return (0, i.jsx)("div", {
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, i.jsx)(l.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: l.Popout.Animation.FADE,
            renderPopout: (e) =>
              (0, i.jsx)(g, {
                ...e,
                guildId: n,
                productId: t.id,
                showEditProduct: r,
                showUnpublishProduct: o,
                showCopyLink: a,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: s,
                onEditProduct: d,
                onUnpublishProduct: f,
                onDeleteProduct: E,
                onCopyLink: m,
                onTestDownload: I,
                onReportProduct: h,
              }),
            children: (e, n) => {
              let { isShown: r } = n;
              return (0, i.jsx)(l.Clickable, {
                ...e,
                "aria-label": _.intl.formatToPlainString(_.t.RtqjeH, {
                  productName: t.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: p.productActionMenuButton,
                children: (0, i.jsx)(l.MoreVerticalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: p.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function m(e) {
        let {
            product: t,
            guildId: n,
            onEditProduct: r,
            onUnpublishProduct: m,
            onDeleteProduct: I,
            onCopyProductLink: h,
            onTestDownload: C,
            disabled: S = !1,
          } = e,
          T = (0, a.U)(t, 600),
          v =
            null !== t.price_tier ? (0, s.T4)(t.price_tier, f.pK.USD) : void 0,
          b = (0, c.C)(t);
        return (0, i.jsxs)(l.ClickableContainer, {
          tag: "article",
          className: o()(p.productCardClickable, p.productCard, {
            [p.disabled]: S,
          }),
          onClick: S ? void 0 : r,
          onContextMenu: function (e) {
            (0, u.jW)(e, () =>
              Promise.resolve((e) =>
                (0, i.jsx)(g, {
                  ...e,
                  closePopout: u.Zy,
                  guildId: n,
                  productId: t.id,
                  showEditProduct: !0,
                  showUnpublishProduct: t.published,
                  showCopyLink: t.published,
                  showTestDownload: null != t.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: m,
                  onDeleteProduct: I,
                  onCopyLink: h,
                  onTestDownload: C,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": _.intl.formatToPlainString(_.t["X/yAKi"], {
            productName: t.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: T,
              className: p.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: p.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: p.productInfoContent,
                  children: [
                    (0, i.jsx)(l.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: p.productName,
                      children: t.name,
                    }),
                    (0, i.jsx)(l.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: p.productDetails,
                      children: [
                        (0, i.jsx)(l.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: v,
                        }),
                        null != b
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: p.dotSeparator,
                                }),
                                (0, i.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: b,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(l.Spacer, { size: 16 }),
                    t.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {}),
                  ],
                }),
                !S &&
                  (0, i.jsx)(E, {
                    product: t,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: m,
                    onDeleteProduct: I,
                    onCopyProductLink: h,
                    onTestDownload: C,
                    onReportProduct: () => {},
                  }),
              ],
            }),
          ],
        });
      }
    },
    48691: function (e, t, n) {
      n.d(t, {
        b: function () {
          return f;
        },
        t: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(44315),
        l = n(377171),
        u = n(981631),
        a = n(388032),
        s = n(383011);
      function c(e) {
        let {
          label: t,
          backgroundColor: n = l.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: o,
          iconColor: u,
        } = e;
        return (0, i.jsxs)("div", {
          className: s.badge,
          style: { backgroundColor: n },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: s.__invalid_badgeText,
              children: t,
            }),
            (0, i.jsx)(o, {
              className: s.badgeIcon,
              color: null != u ? u : "currentColor",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function d() {
        return (0, i.jsx)(c, {
          label: a.intl.string(a.t["I+02Gh"]),
          backgroundColor: "#207B8D",
          icon: r.SparklesIcon,
        });
      }
      function f() {
        return (0, i.jsx)(c, {
          label: a.intl.string(a.t.TgsPaG),
          icon: r.PencilIcon,
          iconColor: (0, o.Lq)(u.Ilk.PRIMARY_330),
        });
      }
    },
    730647: function (e, t, n) {
      n.d(t, {
        f: function () {
          return c;
        },
        l: function () {
          return d;
        },
      }),
        n(411104);
      var i = n(200651),
        r = n(192379),
        o = n(399606),
        l = n(38618),
        u = n(423117),
        a = n(289393);
      let s = r.createContext(void 0);
      function c(e) {
        let t = r.useContext(s);
        if (null == t)
          throw Error(
            "".concat(
              null != e ? e : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
        return i(), n;
      }
      function d(e) {
        let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: f,
            dontFetchWhileTrue: _,
          } = e,
          p = (0, o.e7)([l.Z], () => l.Z.isConnected()),
          g = (0, o.e7)([a.Z], () =>
            null != t
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t)
              : a.M.FETCHED,
          ),
          E = r.useRef(c),
          m = r.useCallback(() => {
            if (null == t || !p || !0 === _) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (E.current || e === a.M.NOT_FETCHED) &&
              ((E.current = !1),
              u.FP(t, { includeSoftDeleted: d, countryCode: f }));
          }, [p, t, d, f, _]),
          I = r.useMemo(() => g === a.M.FETCHED && !0 !== E.current, [g, E]);
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: I, fetchGroupListingsForGuild: m },
          children: n,
        });
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return u;
        },
        Md: function () {
          return l;
        },
        Q8: function () {
          return o;
        },
      });
      var i = n(373228),
        r = n(388032);
      let o = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        l = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
        u = [
          {
            id: "781323471249604648",
            format_type: i.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: i.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: i.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: i.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: i.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (e, t, n) {
      n.d(t, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return m;
        },
        eI: function () {
          return g;
        },
        vp: function () {
          return p;
        },
        y8: function () {
          return E;
        },
      });
      var i = n(367907),
        r = n(200876),
        o = n(430824),
        l = n(594174);
      n(709054), n(523361);
      var u = n(981631),
        a = n(388032);
      function s(e) {
        return e;
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return a.intl.format(l, u);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          } = e,
          { content: l, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: o,
          });
        return a.intl.formatToParts(l, u);
      }
      function f(e, t) {
        var n, i;
        let r = o.Z.getGuild(e),
          l =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
          isRenewal:
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function _(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: o,
            roleSubscriptionData: l,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: p,
          } = f(o, l);
        return (
          (t = _ ? (p ? a.t.Iy66Mz : a.t.eCgb2d) : p ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: r,
              tierName: null == l ? void 0 : l.tier_name,
              months: d,
            },
          }
        );
      }
      function p(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: o,
            roleSubscriptionData: l,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: p,
          } = f(o, l);
        return (
          (t = _
            ? p
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : p
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d,
          })
        );
      }
      function g(e) {
        return (0, r.l)(e);
      }
      function E(e, t, n, r) {
        var o;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (o = l.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: r,
          },
        );
      }
      function m(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = l.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    817460: function (e, t, n) {
      n.d(t, {
        JE: function () {
          return u;
        },
        ab: function () {
          return l;
        },
        iG: function () {
          return a;
        },
        lL: function () {
          return c;
        },
        rC: function () {
          return s;
        },
      });
      var i = n(293810),
        r = n(474936),
        o = n(388032);
      function l(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function u(e) {
        let { interval: t, interval_count: n } = e;
        return o.intl.format(
          (function (e) {
            switch (e) {
              case r.rV.DAY:
                return o.t["3rUmPT"];
              case r.rV.MONTH:
                return o.t["zuN54+"];
              case r.rV.YEAR:
                return o.t.cuSp8f;
            }
          })(t),
          { count: n },
        );
      }
      function a(e) {
        let { interval: t, interval_count: n } = e;
        switch (t) {
          case r.rV.DAY:
            if (n > 0 && n % 7 == 0)
              return o.intl.formatToPlainString(o.t.iVZYys, { weeks: n / 7 });
            return o.intl.formatToPlainString(o.t.jzH70d, { days: n });
          case r.rV.MONTH:
            return o.intl.formatToPlainString(o.t.erUSmJ, { months: n });
          case r.rV.YEAR:
            return o.intl.formatToPlainString(o.t.IfYQVF, { years: n });
        }
      }
      function s(e) {
        return e.ref_type === i.Qs.CHANNEL;
      }
      function c(e) {
        return e.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (e, t, n) {
      n.d(t, {
        GG: function () {
          return g;
        },
        HQ: function () {
          return C;
        },
        JH: function () {
          return v;
        },
        QV: function () {
          return T;
        },
        YB: function () {
          return S;
        },
        _1: function () {
          return h;
        },
        _k: function () {
          return _;
        },
        jO: function () {
          return p;
        },
        oC: function () {
          return b;
        },
        qi: function () {
          return E;
        },
        r4: function () {
          return I;
        },
        sp: function () {
          return m;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        r = n(442837),
        o = n(935369),
        l = n(38618);
      n(823379);
      var u = n(730647),
        a = n(423117),
        s = n(289393),
        c = n(697227);
      let d = [],
        f = function (e) {
          let {
              refetchOnMount: t = !1,
              includeSoftDeleted: n = !0,
              countryCode: o,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            d = (0, r.e7)([s.Z], () =>
              null != e
                ? s.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : s.M.FETCHED,
            ),
            f = i.useRef(t);
          return (
            i.useEffect(() => {
              if (null == e || !c || !0 === u) return;
              let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (t || i === s.M.NOT_FETCHED) &&
                ((f.current = !1),
                a.FP(e, { includeSoftDeleted: n, countryCode: o }));
            }, [c, e, n, t, o, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
          );
        },
        _ = function (e) {
          let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.Wu)(
            [s.Z],
            () => {
              if (null == e) return [];
              let i = s.Z.getSubscriptionGroupListing(e);
              if (null == i) return [];
              let r = [];
              for (let e of i.subscription_listings_ids) {
                let i = s.Z.getSubscriptionListing(e);
                if (null != i && (!i.soft_deleted || !!t))
                  (i.published || n) && r.push(i);
              }
              return r;
            },
            [e, t, n],
          );
        },
        p = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionListing(e) : null,
          ),
        g = (e) => {
          let t = (0, u.f)("useGroupListingsForGuild");
          return (0, r.e7)([s.Z], () =>
            null != e && t ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
          );
        },
        E = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            f(e),
            (0, r.Wu)([s.Z], () => {
              let n =
                  null != e ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
                i = [];
              for (let e of n)
                for (let n of e.subscription_listings_ids) {
                  let e = s.Z.getSubscriptionListing(n);
                  null != e &&
                    (t.includeSoftDeleted || !e.soft_deleted) &&
                    i.push(e);
                }
              return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [
                    ...i.filter((e) => !e.soft_deleted),
                    ...i.filter((e) => e.soft_deleted),
                  ]
                : i;
            })
          );
        },
        m = (e) => {
          let [t, n] = i.useState(!1),
            o = i.useMemo(() => e.map(c.W), [e]),
            l = (0, r.Wu)(
              [s.Z],
              () =>
                o.filter(
                  (e) => !s.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [o],
            );
          return (
            i.useEffect(() => {
              !t &&
                l.length > 0 &&
                (n(!0),
                Promise.all(l.map((e) => a.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [t, l]),
            { loading: t }
          );
        },
        I = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
              try {
                return t(!0), r(null), await a._d(e, n, i), !0;
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            },
          };
        },
        h = () => {
          let [e, t] = (0, o.Z)(a.AE),
            { loading: n, error: i } = t;
          return { error: i, submitting: n, archiveSubscriptionListing: e };
        },
        C = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: n, groupListingId: i, listingId: o } = e;
              try {
                return (
                  t(!0),
                  r(null),
                  await a.O0({
                    guildId: n,
                    groupListingId: i,
                    listingId: o,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            },
            clearError: () => r(null),
          };
        },
        S = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionSettings(e) : void 0,
          ),
        T = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
              t(!0), r(null);
              try {
                await a.W2(e, n);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        v = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
              t(!0), r(null);
              try {
                await a.Qb(e);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        b = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionTrial(e) : null,
          );
    },
    403474: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      let i = {
        id: "0",
        name: "",
        mentionable: !1,
        position: 0,
        hoist: !1,
        permissions: n(981631).Plq.SEND_MESSAGES,
        color: 0,
        colorString: "0",
        icon: null,
        unicodeEmoji: null,
        flags: 0,
      };
    },
    944537: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
        n: function () {
          return u;
        },
      });
      var i,
        r,
        o = n(15729),
        l = n(731965);
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let u = (0, o.U)((e) => ({
        listings: {},
        setListing: (t, n) =>
          (0, l.j)(() =>
            e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } })),
          ),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (t, n) =>
          (0, l.j)(() => {
            e((e) => ({
              editStateIdsForGroup: {
                ...e.editStateIdsForGroup,
                [t]: n(e.editStateIdsForGroup[t]),
              },
            }));
          }),
      }));
    },
    290348: function (e, t, n) {
      n.d(t, {
        B7: function () {
          return ee;
        },
        Ek: function () {
          return U;
        },
        F2: function () {
          return z;
        },
        GM: function () {
          return X;
        },
        GP: function () {
          return D;
        },
        H9: function () {
          return q;
        },
        Lo: function () {
          return K;
        },
        PK: function () {
          return y;
        },
        R7: function () {
          return k;
        },
        TT: function () {
          return V;
        },
        UE: function () {
          return w;
        },
        XZ: function () {
          return W;
        },
        Xo: function () {
          return $;
        },
        _T: function () {
          return R;
        },
        d9: function () {
          return x;
        },
        mR: function () {
          return M;
        },
        p9: function () {
          return Z;
        },
        qs: function () {
          return j;
        },
        rU: function () {
          return Y;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(512722),
        o = n.n(r),
        l = n(392711),
        u = n(772848),
        a = n(866442),
        s = n(731965),
        c = n(442837),
        d = n(80932),
        f = n(749210),
        _ = n(339085),
        p = n(73346),
        g = n(817460),
        E = n(423117),
        m = n(584825),
        I = n(289393),
        h = n(790285),
        C = n(303737),
        S = n(971792),
        T = n(22902),
        v = n(403474),
        b = n(944537),
        N = n(293810),
        A = n(981631),
        O = n(474936);
      function L(e, t, n) {
        let r = (0, b.n)((e) => e.setListing),
          o = i.useCallback(
            (i) => {
              r(e, (e) => {
                var r;
                let o =
                  null !== (r = null == e ? void 0 : e[t]) && void 0 !== r
                    ? r
                    : n;
                return Object.assign({}, e, {
                  [t]: "function" == typeof i ? i(o) : i,
                });
              });
            },
            [r, e, t, n],
          ),
          l = (0, b.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
          });
        return [void 0 !== l ? l : n, o];
      }
      function P(e, t) {
        let n = (0, c.e7)([I.Z], () => I.Z.getSubscriptionListing(e));
        return i.useMemo(() => t(n), [n]);
      }
      function R(e) {
        let t = P(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.name) && void 0 !== t
            ? t
            : "";
        });
        return L(e, "name", t);
      }
      function M(e) {
        let t = P(e, (e) => {
          var t;
          return null == e
            ? void 0
            : null === (t = e.subscription_plans[0]) || void 0 === t
              ? void 0
              : t.price;
        });
        return L(e, "priceTier", t);
      }
      function y(e) {
        let t = P(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.description) &&
            void 0 !== t
            ? t
            : "";
        });
        return L(e, "description", t);
      }
      function x(e, t) {
        let n = P(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, p._W)(e.application_id, e.image_asset, t);
        });
        return L(e, "image", n);
      }
      function Z(e, t) {
        let n = (0, S.Z)(t, e);
        return L(
          e,
          "roleIcon",
          i.useMemo(() => {
            var e, t;
            return {
              icon:
                null !== (e = null == n ? void 0 : n.icon) && void 0 !== e
                  ? e
                  : void 0,
              unicodeEmoji:
                null !== (t = null == n ? void 0 : n.unicodeEmoji) &&
                void 0 !== t
                  ? t
                  : void 0,
            };
          }, [n]),
        );
      }
      function j(e, t) {
        let n = (0, S.Z)(t, e),
          r = (0, b.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleColor;
          }),
          o = (0, b.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != n ? n : v.k) };
          if (void 0 !== o) {
            var t, i;
            (e.icon = null !== (t = o.icon) && void 0 !== t ? t : ""),
              (e.unicodeEmoji =
                null !== (i = o.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e
          );
        }, [n, o, r]);
      }
      function U(e, t) {
        let n = (0, S.Z)(t, e);
        return L(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e
              ? e
              : A.p6O;
          }, [n]),
        );
      }
      function D(e, t) {
        let n = (0, S.Z)(t, e);
        return L(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == n
                ? b.I.SOME_CHANNELS_ACCESS
                : (0, h.MT)(n)
                  ? b.I.ALL_CHANNELS_ACCESS
                  : b.I.SOME_CHANNELS_ACCESS,
            [n],
          ),
        );
      }
      let F = [];
      function w(e) {
        let t = P(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(g.rC),
        );
        return L(e, "channelBenefits", t);
      }
      let G = [];
      function k(e) {
        let t = P(e, (e) =>
          null == e ? G : e.role_benefits.benefits.filter(g.lL),
        );
        return L(e, "intangibleBenefits", t);
      }
      let B = new Set();
      function H(e, t) {
        return 0 === e.length
          ? B
          : new Set(
              e
                .filter((e) => e.roles.includes(t))
                .map((e) => {
                  let { id: t } = e;
                  return t;
                }),
            );
      }
      function W(e, t) {
        let n = (0, S.Z)(t, e),
          r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(t), [t]);
        return L(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == n ? B : H(r, n.id)), [r, n]),
        );
      }
      function V(e) {
        var t;
        let n = (0, m.oC)(e),
          { selectedOption: i } = (0, T.Z)(
            null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t
              ? t
              : null,
          );
        return L(e, "trialInterval", null != i ? i : null);
      }
      function z(e) {
        var t;
        let n = (0, m.oC)(e);
        return L(
          e,
          "trialLimit",
          null !== (t = null == n ? void 0 : n.max_num_active_trial_users) &&
            void 0 !== t
            ? t
            : null,
        );
      }
      function Y(e) {
        return (0, b.n)((t) => void 0 !== t.listings[e]);
      }
      function K(e) {
        return (0, b.n)((t) => {
          for (let n of e) if (void 0 !== t.listings[n]) return !0;
          return !1;
        });
      }
      function q(e) {
        let t = P(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [n] = L(e, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var e, i, r, o, l;
            return {
              price:
                null !== (e = null != n ? n : null == t ? void 0 : t.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (i = null == t ? void 0 : t.currency) && void 0 !== i
                  ? i
                  : A.pKx.USD,
              interval:
                null !== (r = null == t ? void 0 : t.interval) && void 0 !== r
                  ? r
                  : O.rV.MONTH,
              interval_count:
                null !== (o = null == t ? void 0 : t.interval_count) &&
                void 0 !== o
                  ? o
                  : 1,
              id:
                null !== (l = null == t ? void 0 : t.id) && void 0 !== l
                  ? l
                  : "",
            };
          }, [t, n]),
        ];
      }
      function X(e) {
        var t;
        (t = e),
          (0, s.j)(() => {
            b.n.setState((e) => ({
              listings: {
                ...e.listings,
                [t]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function Q(e) {
        let { guildId: t, editStateId: n } = e,
          i = I.Z.getSubscriptionListing(n);
        o()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          a = b.n.getState().listings[n];
        o()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: p,
          trialInterval: g,
          tierEmojiIds: m,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(t, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let h = I.Z.getSubscriptionTrial(u);
        if (
          ((null != p || null != g || (null != h && null == g)) &&
            (await E.I1(t, u, { trial: g, max_num_active_trial_users: p })),
          void 0 !== m)
        ) {
          let e = H(_.ZP.getGuildEmoji(t), r),
            n = (0, l.difference)([...m], [...e]),
            i = (0, l.difference)([...e], [...m]),
            o = n
              .map((e) => _.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, d.dv)({
                    guildId: t,
                    emojiId: e.id,
                    roles: [...e.roles, r],
                  });
              }),
            u = i
              .map((e) => _.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let n = e.roles.filter((e) => e !== r);
                return n.length > 0
                  ? (0, d.dv)({ guildId: t, emojiId: e.id, roles: n })
                  : (0, d.RE)(t, e.id);
              });
          await Promise.all([...o, ...u]);
        }
      }
      async function J(e) {
        let {
            guildId: t,
            editStateId: n,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = e,
          l = b.n.getState().listings[n];
        o()(null != l, "edit state does not exist");
        let {
          name: u,
          description: a,
          channelBenefits: s,
          intangibleBenefits: c,
          priceTier: d,
          image: f,
          channelAccessFormat: _,
        } = l;
        o()(null != u, "no name provided"),
          o()(null != a, "no description provided"),
          o()(null != d, "no priceTier provided"),
          o()(null != f, "no image provided");
        let p = _ === b.I.ALL_CHANNELS_ACCESS,
          g = i;
        null == g && (g = (await E.uw(t, {})).id),
          null != s && s.length > 0 && (await (0, C.r4)(t, s));
        let m = [...(null != s ? s : []), ...(null != c ? c : [])],
          I = (0, C.yL)(n, t);
        return E.dA({
          guildId: t,
          groupListingId: g,
          data: {
            can_access_all_channels: p,
            image: f,
            name: u,
            description: a,
            benefits: m,
            priceTier: d,
          },
          analyticsContext: I,
          onBeforeDispatchNewListing: r,
        });
      }
      function $() {
        let [e, t] = i.useState(!1),
          [n, r] = i.useState();
        return {
          loading: e,
          error: n,
          handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                guildId: n,
                editStateId: i,
                groupListingId: u,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: c,
              } = e,
              d = i,
              f = I.Z.getSubscriptionListing(d);
            try {
              if ((t(!0), r(void 0), null != f))
                o()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var t;
                    let { guildId: n, editStateId: i, groupListingId: r } = e,
                      u = I.Z.getSubscriptionListing(i);
                    o()(null != u, "listing doesnt exist");
                    let a = b.n.getState().listings[i];
                    o()(null != a, "edit state does not exist");
                    let {
                        name: s,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: f,
                        priceTier: _,
                        image: p,
                        channelAccessFormat: m,
                      } = a,
                      h = {};
                    if (
                      (s !== u.name && (h.name = s),
                      c !== u.description && (h.description = c),
                      _ !==
                        (null === (t = u.subscription_plans[0]) || void 0 === t
                          ? void 0
                          : t.price) && (h.priceTier = _),
                      null != p && (h.image = p),
                      null != m &&
                        (h.can_access_all_channels =
                          m === b.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let e = u.role_benefits.benefits.filter(g.rC),
                        t = u.role_benefits.benefits.filter(g.lL),
                        n = [...(null != d ? d : e), ...(null != f ? f : t)];
                      h.benefits = n;
                    }
                    return (0, l.isEmpty)(h)
                      ? u
                      : E.O0({
                          guildId: n,
                          groupListingId: r,
                          listingId: i,
                          data: h,
                        });
                  })({ guildId: n, editStateId: d, groupListingId: u });
              else {
                var _, p;
                let e = await J({
                  guildId: n,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: a,
                });
                (d = e.id),
                  (_ = i),
                  (p = d),
                  (0, s.j)(() => {
                    b.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [p]: e.listings[_],
                        [_]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await Q({ guildId: n, editStateId: d }), X(d), !0;
            } catch (e) {
              if (!("getAnyErrorMessage" in e)) throw e;
              r(e);
            } finally {
              t(!1);
            }
          }, []),
        };
      }
      function ee(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, m._k)(e, n),
          o = (0, b.n)((e) => e.editStateIdsForGroup[t]),
          l = (0, b.n)((e) => e.setEditStateIdsForGroup),
          a = (0, b.n)((e) => e.setListing),
          s = i.useMemo(
            () => [
              ...r.map((e) => {
                let { id: t } = e;
                return t;
              }),
              ...(null != o ? o : []),
            ],
            [o, r],
          ),
          c = i.useCallback(() => {
            let e = (0, u.Z)();
            l(t, (t) => [...(null != t ? t : []), e]);
          }, [t, l]),
          d = i.useCallback(
            (e) => {
              let n = (0, u.Z)();
              return (
                l(t, (e) => [...(null != e ? e : []), n]),
                e.listings.forEach((t) => {
                  a(n, () => ({
                    name: t.name,
                    description: t.description,
                    priceTier: t.price_tier,
                    image: t.image,
                    intangibleBenefits: t.additional_perks,
                    channelBenefits: t.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: N.Qs.CHANNEL,
                      description: e.description,
                      name: e.name,
                      emoji_name: e.emoji_name,
                    })),
                    roleIcon: { unicodeEmoji: void 0, icon: t.image },
                    roleColor: t.role_color,
                    usedTemplate: e.category,
                  }));
                }),
                n
              );
            },
            [t, l, a],
          );
        return {
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: i.useCallback(
            (e) => {
              l(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, l],
          ),
        };
      }
    },
    144507: function (e, t, n) {
      n.d(t, {
        $D: function () {
          return g;
        },
        H2: function () {
          return E;
        },
        MO: function () {
          return p;
        },
        X$: function () {
          return _;
        },
        d5: function () {
          return r;
        },
      });
      var i,
        r,
        o = n(442837),
        l = n(223892),
        u = n(674180),
        a = n(496675),
        s = n(594174),
        c = n(923726),
        d = n(981631);
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
        (i[(i.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
        (i[(i.VISIBLE = 3)] = "VISIBLE");
      function f(e) {
        if (e.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (
          (function (e) {
            let {
              guild: t,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: o,
              isUserInCreatorMonetizationEligibleCountry: l,
              shouldRestrictUpdatingRoleSubscriptionSettings: u,
            } = e;
            return (
              !!i &&
              (!u || !!n) &&
              (!!(
                t.hasFeature(d.oNc.CREATOR_MONETIZABLE) ||
                t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!t.hasFeature(d.oNc.COMMUNITY) && (!!r || !!o) && n && l))
            );
          })(e)
        )
          return 3;
        let {
          guild: t,
          isOwner: n,
          isUserInCreatorMonetizationEligibleCountry: i,
          isMonetizationWaitlistEnabledForGuild: r,
          isGuildEligibleForRoleSubscriptions: o,
          isExpeditedMonetizationOnboardingGuild: l,
        } = e;
        return n && !i && r
          ? 1
          : n && r && (o || l) && !t.hasFeature(d.oNc.COMMUNITY)
            ? 2
            : 0;
      }
      function _(e) {
        return 0 !== f(e);
      }
      function p(e) {
        let t = (0, c.Bt)(null == e ? void 0 : e.id),
          n = (0, l.Ob)(e),
          i = (0, l.gS)(null == e ? void 0 : e.id),
          r = g(e),
          a = (0, o.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
          }),
          d = (0, l.Sd)(),
          { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, u.gX)(
            null == e ? void 0 : e.id,
          );
        return null == e
          ? 0
          : f({
              guild: e,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: _,
            });
      }
      function g(e) {
        return (0, o.e7)([a.Z], () => E(e), [e]);
      }
      function E(e) {
        return null != e && a.Z.can(d.Plq.ADMINISTRATOR, e);
      }
    },
    697227: function (e, t, n) {
      n.d(t, {
        V: function () {
          return l;
        },
        W: function () {
          return o;
        },
      });
      var i = n(512722),
        r = n.n(i);
      function o(e) {
        let t = e.items;
        return (
          r()(
            1 === t.length,
            "more than 1 subscription item for role subscription",
          ),
          t[0].planId
        );
      }
      function l(e) {
        var t;
        let n =
          null == e
            ? void 0
            : null === (t = e.renewalMutations) || void 0 === t
              ? void 0
              : t.items;
        if (null != n)
          return (
            r()(
              n.length <= 1,
              "more than 1 renewal mutation for role subscription",
            ),
            null == n ? void 0 : n[0].planId
          );
      }
    },
    853439: function (e, t, n) {
      var i,
        r,
        o,
        l,
        u = n(442837),
        a = n(570140),
        s = n(131704),
        c = n(592125);
      let d = {},
        f = {};
      class _ extends (l = u.ZP.Store) {
        getTemplates(e) {
          return d[e];
        }
        getTemplateWithCategory(e, t) {
          var n;
          return null === (n = d[e]) || void 0 === n
            ? void 0
            : n.find((e) => e.category === t);
        }
        getChannel(e) {
          return f[e];
        }
      }
      (o = "GuildRoleSubscriptionTierTemplatesStore"),
        (r = "displayName") in (i = _)
          ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = o),
        (t.Z = new _(a.Z, {
          GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
            let { selectedTemplate: t, guildId: n } = e,
              i = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
            t.listings.forEach((e) => {
              e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in f)) {
                  let t = (0, s.kt)(e);
                  f[e.id] = t;
                }
              });
            });
          },
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
            let { templates: t, guildId: n } = e;
            d[n] = t;
          },
        }));
    },
    303737: function (e, t, n) {
      n.d(t, {
        GN: function () {
          return S;
        },
        be: function () {
          return C;
        },
        g4: function () {
          return I;
        },
        m7: function () {
          return m;
        },
        r4: function () {
          return T;
        },
        sO: function () {
          return b;
        },
        yL: function () {
          return v;
        },
      }),
        n(653041),
        n(47120),
        n(998459);
      var i = n(991637),
        r = n.n(i),
        o = n(399606),
        l = n(570140),
        u = n(333848),
        a = n(592125),
        s = n(923726),
        c = n(289393),
        d = n(944537),
        f = n(144507),
        _ = n(853439),
        p = n(981631),
        g = n(176505);
      r().shim();
      let E = {};
      function m(e) {
        let t = (0, o.e7)([a.Z], () => a.Z.getChannel(e)),
          n = (0, o.e7)([_.Z], () => _.Z.getChannel(e));
        return null != t ? t : n;
      }
      function I(e, t, n) {
        let i = (0, o.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(e)),
          r = (0, d.n)((t) => t.editStateIdsForGroup[e]),
          l = (0, d.n)((e) => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let u = i
            .filter((e) => !e.soft_deleted && !e.archived)
            .map((e) => e.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach((e) => {
            let t = l[e],
              n = null == t ? void 0 : t.priceTier;
            null != n && a.push(n);
          });
        let s = new Set(a.concat(u));
        if (!s.has(n)) return null;
        let f = t.indexOf(n);
        if (-1 === f) return null;
        let _ = [];
        for (
          let e = f + 1;
          e < t.length && (!s.has(t[e]) && _.push(t[e]), 3 !== _.length);
          e++
        );
        return _;
      }
      function h(e) {
        let t = d.n.getState().editStateIdsForGroup[e],
          n = d.n.getState().listings,
          i = new Set();
        null != t &&
          t.forEach((e) => {
            var t;
            let r =
              null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r ||
              r.forEach((e) => {
                null != _.Z.getChannel(e.ref_id) && i.add(e.ref_id);
              });
          });
        let r = [];
        for (let t of i) {
          let n = _.Z.getChannel(t);
          if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
          }
        }
        return r;
      }
      function C(e) {
        let t = h(e);
        (E[e] = t),
          t.forEach((e) => {
            let t = e.set(
              "flags",
              g.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            l.Z.dispatch({ type: "CHANNEL_CREATE", channel: t });
          });
      }
      function S(e) {
        var t;
        (null !== (t = E[e]) && void 0 !== t ? t : h(e)).forEach((e) => {
          l.Z.dispatch({ type: "CHANNEL_DELETE", channel: e });
        });
      }
      async function T(e, t) {
        let n = [],
          i = [];
        if (
          (t.forEach((t) => {
            let r = _.Z.getChannel(t.ref_id);
            null != r &&
              (n.push(
                u.Z.createRoleSubscriptionTemplateChannel(
                  e,
                  r.name,
                  r.type,
                  r.topic,
                ),
              ),
              i.push(r));
          }),
          0 !== n.length)
        )
          (await Promise.allSettled(n)).forEach((n, r) => {
            let o = i[r].id;
            if ("fulfilled" === n.status) {
              let t = n.value.body,
                i = d.n.getState().editStateIdsForGroup[e],
                r = d.n.getState().listings;
              null != i &&
                i.forEach((e) => {
                  var n;
                  let i =
                    null === (n = r[e]) || void 0 === n
                      ? void 0
                      : n.channelBenefits;
                  null == i ||
                    i.forEach((e) => {
                      e.ref_id === o && (e.ref_id = t.id);
                    });
                });
            } else if (null != t) {
              let e = t.findIndex((e) => e.ref_id === o);
              -1 !== e && (null == t || t.splice(e, 1));
            }
          });
      }
      function v(e, t) {
        var n, i;
        let r = d.n.getState().listings[e],
          o = null == r ? void 0 : r.usedTemplate;
        if (null == o)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let l = _.Z.getTemplateWithCategory(t, o);
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let u = l.listings[0];
        if (
          (null == r ? void 0 : r.name) !== u.name ||
          (null == r ? void 0 : r.description) !== u.description ||
          (null == r ? void 0 : r.priceTier) !== u.price_tier ||
          (null == r ? void 0 : r.image) !== u.image ||
          (null == r ? void 0 : r.roleColor) !== u.role_color ||
          (null == r
            ? void 0
            : null === (n = r.channelBenefits) || void 0 === n
              ? void 0
              : n.length) !== u.channels.length ||
          (null == r
            ? void 0
            : null === (i = r.intangibleBenefits) || void 0 === i
              ? void 0
              : i.length) !== u.additional_perks.length
        )
          return { templateCategory: l.category, hasChangeFromTemplate: !0 };
        for (let e = 0; e < u.channels.length; e++) {
          let t = r.channelBenefits[e],
            n = u.channels[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
        }
        for (let e = 0; e < u.additional_perks.length; e++) {
          let t = r.intangibleBenefits[e],
            n = u.additional_perks[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: l.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: l.category, hasChangeFromTemplate: !1 };
      }
      function b(e) {
        return (
          (0, f.H2)(e) &&
          e.hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
          (0, s.$F)() &&
          (0, s.hQ)(e.id)
        );
      }
    },
    403910: function (e, t, n) {
      var i = n(442837),
        r = n(339085);
      t.Z = function (e, t) {
        return (0, i.e7)(
          [r.ZP],
          () => {
            var n;
            if (null == t) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(e);
            return null !== (n = i.getById(t)) && void 0 !== n
              ? n
              : i.getByName(t);
          },
          [e, t],
        );
      };
    },
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        o = n(480608),
        l = n(243730);
      let u = {};
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = u[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((u[e] = Date.now()), o.E(e));
          }, [e, t]),
          n
        );
      }
    },
    570533: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        o = n(339085),
        l = n(889564);
      let u = [];
      function a(e) {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getGuildEmoji(e), [e]);
        return i.useMemo(
          () => (null == t ? u : t.filter((t) => (0, l.Kt)(t, e))),
          [t, e],
        );
      }
    },
    971792: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        r = n(430824),
        o = n(584825);
      function l(e, t) {
        let n = (0, o.jO)(t);
        return (0, i.e7)([r.Z], () =>
          null != e && null != n ? r.Z.getRole(e, n.role_id) : void 0,
        );
      }
    },
    22902: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(817460),
        o = n(293810),
        l = n(474936),
        u = n(388032);
      function a(e) {
        return i.useMemo(() => {
          var t;
          let n = o.DN.map((e) => ({
              value: e,
              label:
                e.interval === l.rV.DAY && 7 === e.interval_count
                  ? u.intl.formatToPlainString(u.t.XfSsr6, {
                      defaultLimit: (0, r.iG)(e),
                    })
                  : (0, r.iG)(e),
              isDefault: e.interval === l.rV.DAY && 7 === e.interval_count,
            })),
            i =
              null != e
                ? null ===
                    (t = n.find(
                      (t) =>
                        null != t.value &&
                        t.value.interval === e.interval &&
                        t.value.interval_count === e.interval_count,
                    )) || void 0 === t
                  ? void 0
                  : t.value
                : e;
          return { options: n, selectedOption: i };
        }, [e]);
      }
    },
    629262: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(592125);
      function o(e) {
        return (0, i.Wu)(
          [r.Z],
          () => e.filter((e) => r.Z.hasChannel(e.ref_id)),
          [e],
        );
      }
    },
    528027: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(596454),
        u = n(377171),
        a = n(403910),
        s = n(549631),
        c = n(989384);
      function d(e) {
        var t;
        let { guildId: n, emojiId: r, emojiName: d, className: f } = e,
          _ = (0, a.Z)(n, r);
        return null != _ || null != d
          ? (0, i.jsx)(l.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated:
                null !== (t = null == _ ? void 0 : _.animated) &&
                void 0 !== t &&
                t,
              className: o()(c.emojiIcon, f),
            })
          : (0, i.jsx)(s.Z, {
              className: o()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        o = n(201895),
        l = n(471445),
        u = n(823379),
        a = n(303737),
        s = n(293810),
        c = n(388032),
        d = n(507641);
      function f(e) {
        let { channelId: t } = e,
          n = (0, a.m7)(t);
        if (null == n)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(c.intl.string(c.t.bz1PZW), "]"),
          });
        let u = n.isMediaChannel() ? r.ImageIcon : (0, l.Th)(n.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, o.ZP)({ channel: n }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != u &&
                  (0, i.jsx)(u, { className: d.icon, "aria-hidden": !0 }),
                n.name,
              ],
            }),
          ],
        });
      }
      function _(e) {
        switch (e.ref_type) {
          case s.Qs.CHANNEL:
            return (0, i.jsx)(f, { channelId: e.ref_id });
          case s.Qs.INTANGIBLE:
            return e.name;
          default:
            (0, u.vE)(e);
        }
      }
    },
    893729: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        u = n(442837),
        a = n(481060),
        s = n(518738),
        c = n(786761),
        d = n(3148),
        f = n(753206),
        _ = n(594174),
        p = n(5192),
        g = n(981631),
        E = n(388032),
        m = n(674055);
      function I(e) {
        var t;
        let {
            guildId: n,
            role: o,
            theme: I,
            content: h = E.intl.string(E.t["6OSasb"]),
            className: C,
          } = e,
          S = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
          T = p.ZP.useName(n, null, S),
          v = (0, s.Kz)(o),
          b = r.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: h,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: S,
                }),
                state: g.yb.SENT,
                id: "0",
              }),
            [S, h],
          ),
          N = {
            nick: T,
            colorString:
              null !== (t = o.colorString) && void 0 !== t ? t : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: I,
          children: (e) =>
            (0, i.jsx)("div", {
              className: l()(e, m.container, C),
              children: (0, i.jsx)(f.Z, {
                hideTimestamp: !0,
                author: N,
                roleIcon: v,
                message: b,
                isGroupStart: !0,
                disableInteraction: !0,
              }),
            }),
        });
      }
    },
    358555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(442837),
        u = n(481060),
        a = n(540059),
        s = n(666188),
        c = n(372769),
        d = n(523751),
        f = n(623624),
        _ = n(290034),
        p = n(271383),
        g = n(594174),
        E = n(267642),
        m = n(981631),
        I = n(388032),
        h = n(70172);
      function C(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
          o = (0, l.e7)([g.default, p.ZP], () => {
            let e = g.default.getCurrentUser();
            return p.ZP.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = t;
        if (0 === s && a === m.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              o &&
                !r &&
                (0, f.f)({
                  guildId: t.id,
                  location: {
                    section: m.jXE.GUILD_HEADER,
                    object: m.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          d = a === m.Eu4.NONE ? I.intl.string(I.t.c2wsn5) : E.nW(a),
          C = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: h.tierTooltipTitle, children: d }),
              (0, i.jsx)("div", {
                children: I.intl.format(I.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: h.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: C,
            position: "bottom",
            "aria-label": null != d ? d : "",
            children: (e) =>
              (0, i.jsx)(u.Clickable, {
                ...e,
                className: h.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(_.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: n
                    ? h.boostedGuildTierIconBackgroundWithVisibleBanner
                    : h.guildBadgeIcon,
                  iconClassName:
                    n && a !== m.Eu4.TIER_3
                      ? h.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function S(e) {
        let { guild: t, disableColor: n, disableBoostClick: r } = e;
        return (0, s.Z)(t)
          ? (0, i.jsx)("div", {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(d.Z, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: o()(h.guildBadge, { [h.disableColor]: n }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: h.guildIconContainer,
              children: (0, i.jsx)(c.Z, {
                guild: t,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: o()(h.guildBadge, { [h.disableColor]: n }),
              }),
            });
      }
      function T(e) {
        let { guild: t, disableBoostClick: n, ...r } = e,
          o = !(0, a.Q3)("GuildHeaderGuildBadge") && r.isBannerVisible;
        return (0, s.Z)(t)
          ? (0, i.jsx)(S, { guild: t, disableColor: !1, disableBoostClick: n })
          : t.hasFeature(m.oNc.VERIFIED) || t.hasFeature(m.oNc.PARTNERED)
            ? (0, i.jsx)(S, { guild: t, disableColor: !o })
            : (0, i.jsx)(C, {
                guild: t,
                isBannerVisible: o,
                disableBoostClick: n,
              });
      }
    },
    889695: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i = n(200651),
        r = n(192379),
        o = n(658722),
        l = n.n(o),
        u = n(392711),
        a = n.n(u),
        s = n(149765),
        c = n(442837),
        d = n(481060),
        f = n(271383),
        _ = n(430824),
        p = n(594174),
        g = n(700785),
        E = n(709054),
        m = n(962086),
        I = n(160404),
        h = n(225675),
        C = n(981631),
        S = n(388032),
        T = n(22314);
      function v(e) {
        var t;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (t = e.colorString) && void 0 !== t ? t : "currentColor",
          },
          children: e.name,
        });
      }
      function b(e) {
        let { guildId: t } = e,
          n = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
          o = (0, c.e7)([_.Z], () => _.Z.getGuild(t)),
          u = (0, c.e7)([_.Z], () => _.Z.getRoles(t)),
          { impersonateType: b, viewingRoles: N } = (0, c.cj)([I.Z], () => ({
            impersonateType: I.Z.getImpersonateType(t),
            viewingRoles: I.Z.getViewingRoles(t),
          })),
          A = b === h.z.SERVER_SHOP,
          O = (0, c.e7)([f.ZP], () =>
            null != n ? f.ZP.getTrueMember(t, n.id) : null,
          ),
          [L, P] = (0, d.useMultiSelect)(null == N ? [] : E.default.keys(N)),
          R = r.useRef(o);
        r.useEffect(() => {
          let e = {},
            t = R.current;
          if (null != t && null != b) {
            for (let t of L) {
              let n = u[t];
              null != n && (e[t] = n);
            }
            (0, m.Zm)(t.id, { type: b, roles: e });
          }
        }, [L, b, u]);
        let M =
            null != o && null != n && null != O
              ? a()(u)
                  .filter((e) => -1 !== O.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          y = r.useMemo(
            () =>
              null != o && null != n
                ? Object.values(u)
                    .filter((e) => e.id !== o.id)
                    .filter((e) => {
                      var t;
                      return (
                        !A ||
                        (null === (t = e.tags) || void 0 === t
                          ? void 0
                          : t.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == M ? void 0 : M.id) === e.id ||
                        g.r6(o, n.id, M, e),
                    )
                : [],
            [o, n, A, M, u],
          );
        if (null == n || null == o || null == O) return null;
        let x = {};
        return (O.roles.forEach((e) => {
          let t = u[e];
          null != t && (x[t.id] = t);
        }),
        s.e$(
          g.I0({ forceRoles: x, context: o }),
          s.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES),
        ) || o.isOwner(n.id))
          ? (0, i.jsx)("div", {
              className: T.container,
              children: (0, i.jsx)(d.Combobox, {
                placeholder: S.intl.string(S.t.Sojqsr),
                value: L,
                onChange: P,
                autoFocus: !0,
                children: (e) => {
                  let t = y.reduce(
                      (t, n) => (
                        l()(e.toLowerCase(), n.name.toLowerCase()) &&
                          t.push(
                            (0, i.jsxs)(
                              d.ComboboxItem,
                              {
                                value: n.id,
                                children: [
                                  (0, i.jsx)(d.ComboboxItem.Label, {
                                    children: v(n),
                                  }),
                                  (0, i.jsx)(d.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              n.id,
                            ),
                          ),
                        t
                      ),
                      [],
                    ),
                    n = u[o.getEveryoneRoleId()];
                  return (
                    null != n &&
                      t.push(
                        (0, i.jsxs)(
                          d.ComboboxItem,
                          {
                            value: n.id,
                            disabled: !0,
                            children: [
                              (0, i.jsx)(d.ComboboxItem.Label, {
                                children: v(n),
                              }),
                              (0, i.jsx)(d.ComboboxItem.Checkbox, {
                                checked: !0,
                              }),
                            ],
                          },
                          n.id,
                        ),
                      ),
                    t
                  );
                },
              }),
            })
          : (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              children: S.intl.string(S.t.MNSTbW),
            });
      }
    },
    918658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
        d: function () {
          return y;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(442837),
        u = n(692547),
        a = n(481060),
        s = n(549817),
        c = n(819553),
        d = n(17181),
        f = n(303737),
        _ = n(434404),
        p = n(703656),
        g = n(944486),
        E = n(914010),
        m = n(671533),
        I = n(259580),
        h = n(358085),
        C = n(962086),
        S = n(160404),
        T = n(889695),
        v = n(981631),
        b = n(176505),
        N = n(302463),
        A = n(293810),
        O = n(388032),
        L = n(646217);
      function P(e) {
        let { className: t, onClick: n, children: r } = e;
        return (0, i.jsx)(a.Button, {
          className: o()(L.button, t),
          innerClassName: L.buttonInner,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.WHITE,
          size: a.Button.Sizes.NONE,
          onClick: n,
          children: r,
        });
      }
      function R(e) {
        let { onClick: t } = e;
        return (0, i.jsx)(P, {
          onClick: t,
          children: O.intl.string(O.t.R9GHyc),
        });
      }
      function M() {
        let e = (0, l.e7)([E.Z], () => E.Z.getGuildId()),
          t = (0, l.e7)([g.Z], () => g.Z.getChannelId(e)),
          {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: o,
            isServerShopPreview: h,
          } = (0, l.cj)([S.Z], () => ({
            viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
            backNavigationSection: S.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && S.Z.isViewingServerShop(e),
          }));
        if (null == n || null == e) return null;
        let M = (function (e) {
            switch (e) {
              case v.pNK.INTEGRATIONS:
                return O.intl.string(O.t.k7LGdn);
              case v.pNK.ROLE_SUBSCRIPTIONS:
                return O.intl.string(O.t.bRqiqa);
              case v.pNK.ONBOARDING:
                return O.intl.string(O.t.qZpU3d);
              default:
                return O.intl.string(O.t.MTIXho);
            }
          })(r),
          y =
            r === v.pNK.ROLE_SUBSCRIPTIONS
              ? O.intl.string(O.t.hZUCzc)
              : O.intl.string(O.t["/djIh4"]),
          x = t === b.oC.GUILD_ONBOARDING,
          Z = (t) => {
            let { backToSettings: n } = t;
            null != e &&
              (S.Z.isFullServerPreview(e) && (0, p.uL)(v.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, C.mL)(e),
              n && _.Z.open(e, r),
              r === v.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
          };
        return (0, i.jsxs)(a.Notice, {
          color: a.NoticeColors.BRAND,
          className: L.notice,
          children: [
            (0, i.jsxs)(P, {
              onClick: () => Z({ backToSettings: !0 }),
              className: L.backButton,
              children: [
                (0, i.jsx)(m.Z, {
                  width: 16,
                  height: 16,
                  direction: m.Z.Directions.LEFT,
                  className: L.backArrow,
                }),
                M,
              ],
            }),
            x && o
              ? (0, i.jsx)("div", {
                  className: L.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: L.noticeText,
                    children: O.intl.string(O.t.PxbiAQ),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: L.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: L.noticeText,
                      children: o
                        ? O.intl.formatToPlainString(O.t["0PHahI"], {
                            numRoles: Object.keys(n).length,
                          })
                        : O.intl.formatToPlainString(O.t.vMlK8v, {
                            numRoles: Object.keys(n).length,
                          }),
                    }),
                    (0, i.jsx)(a.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(T.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: t } = e;
                        return (0, i.jsxs)(P, {
                          onClick: t,
                          children: [
                            y,
                            (0, i.jsx)(I.Z, {
                              width: 16,
                              height: 16,
                              direction: I.Z.Directions.DOWN,
                              className: L.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    o &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: L.previewWarning,
                        text: O.intl.string(O.t.mW4DUF),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    h &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: L.previewWarning,
                        text: O.intl.formatToPlainString(O.t.eummvb, {
                          maxTiers: A.fF,
                          maxProducts: N.dD,
                        }),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            o || r === v.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(R, { onClick: () => Z({ backToSettings: !1 }) }),
          ],
        });
      }
      function y(e) {
        let { guildId: t } = e;
        return (0, l.e7)([S.Z], () => S.Z.isViewingRoles(t))
          ? (0, i.jsx)("div", {
              className: o()(L.settingsWrapper, {
                [L.windows]: (0, h.isWindows)(),
                [L.osx]: (0, h.isMac)(),
              }),
              children: (0, i.jsx)(M, {}),
            })
          : null;
      }
    },
    690221: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(481060),
        l = n(703656),
        u = n(981631);
      t.Z = r.forwardRef(function (e, t) {
        let {
            href: n,
            children: a,
            onClick: s,
            onKeyPress: c,
            focusProps: d,
            ...f
          } = e,
          _ = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, l.uL)(n),
                  null == s || s()),
                  null == c || c(e);
            },
            [n, c, s],
          ),
          p = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, l.uL)(n),
                  null == s || s();
            },
            [n, s],
          ),
          g = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: p,
            onKeyPress: _,
            ...f,
            children: a,
          });
        return (0, i.jsx)(o.FocusRing, { ...d, children: g });
      });
    },
    628238: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var i = n(709054);
      function r(e) {
        return !(e < i.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    753206: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        u = n(628238),
        a = n(492593),
        s = n(25015),
        c = n(963550),
        d = n(845080),
        f = n(46124);
      t.Z = r.memo(function (e) {
        var t;
        let {
            message: n,
            channel: r,
            compact: o,
            className: _,
            isGroupStart: p,
            hideSimpleEmbedContent: g = !0,
            disableInteraction: E,
          } = e,
          m = (0, u.A)(
            (null !== (t = n.editedTimestamp) && void 0 !== t
              ? t
              : n.timestamp
            ).valueOf(),
          ),
          { content: I } = (0, s.Z)(n, {
            hideSimpleEmbedContent: g,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: o,
          className: l()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !o,
            [f.groupStart]: p,
          }),
          childrenHeader: (0, d.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, I),
          disableInteraction: E,
        });
      });
    },
    963550: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(930282);
      function o(e, t) {
        let { message: n } = e;
        return (0, i.jsx)(r.ZP, { message: n, content: t });
      }
    },
    845080: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(901461),
        l = n(464891);
      let u = r.memo(l.ZP);
      function a(e) {
        let {
          message: t,
          channel: n,
          author: r,
          compact: l,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = e;
        return !(0, o.Z)(t) && (c || l)
          ? (0, i.jsx)(u, {
              message: t,
              channel: n,
              author: r,
              guildId: s,
              compact: l,
              animate: a,
              roleIcon: d,
              hideTimestamp: f,
            })
          : void 0;
      }
    },
    91802: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(351402);
      function o() {
        let { localizedPricingPromo: e, hasError: t } = (0, i.cj)(
          [r.Z],
          () => ({
            localizedPricingPromo: r.Z.localizedPricingPromo,
            hasError: r.Z.localizedPricingPromoHasError,
          }),
        );
        return t ? null : e;
      }
    },
    222727: function (e, t, n) {
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var i = n(990547),
        r = n(213609);
      function o(e, t) {
        (0, r.Z)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
          properties: { country_code: t, action_location: e },
        });
      }
    },
    106976: function (e, t, n) {
      n.d(t, {
        i1: function () {
          return d;
        },
        rx: function () {
          return c;
        },
        sB: function () {
          return f;
        },
        vY: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(570140),
        r = n(821849),
        o = n(307643),
        l = n(981631);
      function u(e) {
        return {
          id: e.id,
          type: l.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: l.POd.APPLICATION,
          name: e.name,
          summary: "",
          description: e.description,
          flags: e.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: e.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function a(e) {
        var t;
        return {
          id: e.id,
          sku: u(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function s(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(u),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(a),
        }),
        e))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function c(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let r = await o.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: r,
            }),
            s(null !== (n = r.subscription_listings) && void 0 !== n ? n : []),
            r
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function d(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await o.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
          });
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function f(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function _(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await o.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let l =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          await Promise.all(
            l.map((t) => {
              if (t.subscription_plans[0].id === e)
                return r.GZ(t.id, void 0, void 0, !0);
            }),
          ),
            s(l);
        } catch (e) {}
      }
    },
    488915: function (e, t, n) {
      n.d(t, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        r,
        o,
        l,
        u,
        a,
        s = n(512722),
        c = n.n(s),
        d = n(442837),
        f = n(759174),
        _ = n(570140),
        p = n(959546),
        g = n(55563);
      function E(e) {
        return "subscription_listing:".concat(e);
      }
      function m(e) {
        return "application:".concat(e);
      }
      function I(e) {
        return "plan:".concat(e);
      }
      function h(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function C(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((o = i || (i = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let S = new f.h(
          (e) => [m(e.application_id), ...e.subscription_listings_ids.map(E)],
          (e) => e.id,
        ),
        T = new f.h(
          (e) => [m(e.application_id), I(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        v = new f.h(
          (e) => [
            h(e.applicationId, e.isValid(null, g.Z), e.guildId),
            C(e.isValid(null, g.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        b = {},
        N = {};
      function A(e) {
        var t;
        for (let n of (S.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            T.set(e.id, e);
          })(n);
      }
      class O extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = b[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return S.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = S.values(E(e));
          return (
            c()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return T.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return T.values(m(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = N[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = T.values(I(e));
          return c()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return v.values(h(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return v.values(C(t, e));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (u = "displayName") in (l = O)
          ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = a),
        (t.Z = new O(_.Z, {
          LOGOUT: function () {
            S.clear(), T.clear(), v.clear(), (b = {}), (N = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            b[t] = 1;
            let i = S.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) T.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (b[t] = 2), A(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            b[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            N[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (N[t] = 2),
              n.forEach((e) => {
                let t = p.Z.createFromServer(e);
                v.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            N[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            A(t);
          },
        }));
    },
    93127: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
        _: function () {
          return c;
        },
      });
      var i = n(544891),
        r = n(570140),
        o = n(480294),
        l = n(814443),
        u = n(428598),
        a = n(981631);
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.shouldFetch() && o.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, i, r, o, l, u, a;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (t = e.dm_probability) && void 0 !== t
                            ? t
                            : 0,
                        dmRank:
                          null !== (n = e.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (o = e.server_message_probability) &&
                          void 0 !== o
                            ? o
                            : 0,
                        serverMessageRank:
                          null !== (l = e.server_message_rank) && void 0 !== l
                            ? l
                            : 0,
                        communicationProbability:
                          null !== (u = e.communication_probability) &&
                          void 0 !== u
                            ? u
                            : 0,
                        communicationRank:
                          null !== (a = e.communication_rank) && void 0 !== a
                            ? a
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      n(47120);
      var i,
        r = n(442837),
        o = n(570140),
        l = n(699516),
        u = n(496232);
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
      let s = new Map(),
        c = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function _() {
        s = new Map(
          f.userAffinities
            .filter((e) => !l.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class p extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(l.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              _()),
            this.syncWith([l.Z], _);
        }
        shouldFetch() {
          if (!c) return Date.now() - f.lastFetched > u.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinitiesMap() {
          return s;
        }
        compare(e, t) {
          var n, i, r, o;
          return (
            (null !==
              (r =
                null === (n = s.get(t)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== r
              ? r
              : 0) -
            (null !==
              (o =
                null === (i = s.get(e)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== o
              ? o
              : 0)
          );
        }
        getUserAffinity(e) {
          return s.get(e);
        }
        getState() {
          return f;
        }
      }
      a(p, "displayName", "UserAffinitiesStoreV2"),
        a(p, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new p(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...d }), (s = new Map()), (c = !1);
          },
        }));
    },
    170671: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(692547),
        o = n(313201);
      function l(e) {
        let { isSelected: t, ...n } = e,
          l = (0, o.Dt)();
        return (0, i.jsxs)("svg", {
          ...n,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(l, ")"),
          children: [
            (0, i.jsx)("path", {
              d: "M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("path", {
              d: "M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("linearGradient", {
                id: "paint0_linear_6413_12612",
                x1: "0.666992",
                y1: "0.127441",
                x2: "15.3271",
                y2: "0.127441",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, i.jsx)("stop", {
                    stopColor: t
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                          .css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: t
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors
                          .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: t
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS
                          .css,
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    237583: function (e, t, n) {
      n(653041), n(47120);
      var i,
        r = n(200651),
        o = n(192379),
        l = n(120356),
        u = n.n(l),
        a = n(481060),
        s = n(598077),
        c = n(231220),
        d = n(107720);
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
      class _ extends (i = o.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            o = e.length === t ? e.length : t - 1,
            l = 0;
          for (; l < o && l < e.length; ) {
            let t = l === e.length - 1;
            r.push(
              n(e[l] || null, t ? null : c.avatarMasked, "user-".concat(l), t),
            ),
              l++;
          }
          if (l < e.length) {
            let t = Math.min(e.length - l, 99);
            r.push(i("+".concat(t), c.moreUsers, "more-users", t));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: c.iconContainer,
                children: (0, r.jsx)(a.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: c.foreground,
                  className: c.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: u()(e, c.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            f(this, "_ref", void 0),
            f(this, "defaultRenderUser", (e, t, n, i) => {
              let { onClick: o, size: l, guildId: f } = this.props,
                _ = e instanceof s.Z ? e : null != e ? e.user : null;
              return null == _
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, t) }, n)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: _.getAvatarURL(f, (0, a.getAvatarSize)(l)),
                      size: l,
                      "aria-label": _.username,
                      className: u()(t, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != o ? o(e, _, this._ref) : null),
                    },
                    _.id,
                  );
            });
        }
      }
      f(_, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, r.jsx)("div", { className: t, children: e }, n);
        },
        size: a.AvatarSizes.SIZE_24,
      }),
        (t.Z = _);
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(325767);
      function o(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: o = "currentColor",
          foreground: l,
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(u),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: l,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (e, t, n) {
      n.d(t, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return l;
        },
        nm: function () {
          return u;
        },
        xS: function () {
          return a;
        },
      }),
        n(411104);
      var i = n(200651);
      n(192379);
      var r = n(239091);
      function o(e, t, o) {
        o.isGroupDM()
          ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("92453"),
                n.e("62507"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, i.jsx)(e, { ...n, user: t, channel: o });
            })
          : o.isDM()
            ? (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("90508"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70205"),
                  n.e("92453"),
                  n.e("56826"),
                  n.e("2986"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    channel: o,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != o.guild_id
              ? (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("54492"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: t,
                      channel: o,
                      guildId: o.guild_id,
                    });
                })
              : (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("351"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, { ...n, user: t });
                });
      }
      function l(e, t) {
        let { user: o, channel: l, moderationAlertId: u, guildId: a, ...s } = t;
        if (
          (null == l ? void 0 : l.isGroupDM()) ||
          (null == l ? void 0 : l.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == l ? void 0 : l.getGuildId();
        null != c &&
          (0, r.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("9124"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, i.jsx)(e, {
                ...t,
                user: o,
                channelId: null == l ? void 0 : l.id,
                guildId: c,
                moderationAlertId: u,
                ...s,
              });
          });
      }
      function u(e, t) {
        let {
          user: o,
          guildId: l,
          analyticsLocations: u,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = t;
        (0, r.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              user: o,
              guildId: l,
              analyticsLocations: u,
              onCloseContextMenu: a,
              isViewOnly: s,
            });
        });
      }
      function a(e, t, o) {
        null != o &&
          (0, r.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, i.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    401653: function (e, t, n) {
      var i, r;
      n.d(t, {
        j: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (r[(r.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (r[(r.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (r[(r.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    95930: function (e, t, n) {
      var i, r;
      n.d(t, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (e, t, n) {
      var i, r;
      n.d(t, {
        f: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.KEYWORD = 1)] = "KEYWORD"),
        (r[(r.SPAM_LINK = 2)] = "SPAM_LINK"),
        (r[(r.ML_SPAM = 3)] = "ML_SPAM"),
        (r[(r.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (r[(r.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (r[(r.USER_PROFILE = 6)] = "USER_PROFILE"),
        (r[(r.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
    261121: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    363969: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    542508: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
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
    680475: function (e, t, n) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    201950: function (e, t, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    24753: function (e, t, n) {
      e.exports = {
        productCard: "productCard_f26f9b",
        productCardClickable: "productCardClickable_f26f9b",
        productThumbnail: "productThumbnail_f26f9b",
        productInfo: "productInfo_f26f9b",
        productInfoContent: "productInfoContent_f26f9b",
        productName: "productName_f26f9b",
        productDetails: "productDetails_f26f9b",
        dotSeparator: "dotSeparator_f26f9b",
        productActionMenuButton: "productActionMenuButton_f26f9b",
        productActionMenuIcon: "productActionMenuIcon_f26f9b",
        menuContainer: "menuContainer_f26f9b",
        disabled: "disabled_f26f9b",
      };
    },
    383011: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    989384: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    507641: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    674055: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    70172: function (e, t, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
        guildBadgeIcon: "guildBadgeIcon_ed9816",
      };
    },
    22314: function (e, t, n) {
      e.exports = { container: "container_cbadbc" };
    },
    646217: function (e, t, n) {
      e.exports = {
        settingsWrapper: "settingsWrapper_e2ecbf",
        osx: "osx_e2ecbf",
        backButton: "backButton_e2ecbf",
        windows: "windows_e2ecbf",
        notice: "notice_e2ecbf",
        noticeContents: "noticeContents_e2ecbf",
        noticeText: "noticeText_e2ecbf",
        previewWarning: "previewWarning_e2ecbf",
        button: "button_e2ecbf",
        buttonInner: "buttonInner_e2ecbf",
        backArrow: "backArrow_e2ecbf",
        selectCaret: "selectCaret_e2ecbf",
      };
    },
    231220: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
  },
]);
//# sourceMappingURL=c7b1546843c47106a621.js.map
