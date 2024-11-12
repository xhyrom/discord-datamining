"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60254"],
  {
    511293: function (e) {
      e.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (e) {
      e.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (e, n, t) {
      t(47120);
      var i,
        r = t(200651),
        l = t(192379),
        o = t(120356),
        u = t.n(o),
        a = t(481060),
        s = t(37234),
        c = t(230711),
        d = t(981631),
        f = t(388032),
        p = t(243014);
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class m extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: p.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: p.streamerModeEnabledImage }),
              (0, r.jsx)(a.Clickable, {
                className: u()(p.streamerModeEnabledBtn, {
                  [p.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, s.jN)(d.S9g.USER_SETTINGS),
                c.Z.setSection(d.oAB.STREAMER_MODE));
            });
        }
      }
      _(m, "defaultProps", { disableButton: !1 }), (n.Z = m);
    },
    269128: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(772848),
        u = t(841261);
      let a = (0, o.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(u.button, t, { [u.open]: n, [u.withHighlight]: r }),
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
    935369: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var i = t(192379),
        r = t(479531),
        l = t(388032);
      function o(e) {
        let [n, t] = i.useState(!1),
          [o, u] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                i[o] = arguments[o];
              try {
                return u(null), t(!0), await e(...i);
              } catch (e) {
                e.message !== l.intl.string(l.t.N2yb9f) &&
                  u(e instanceof r.Z ? e : new r.Z(e));
              } finally {
                t(!1);
              }
            },
            [e],
          ),
          { loading: n, error: o },
        ];
      }
    },
    724757: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(192379),
        r = t(924826),
        l = t(442837),
        o = t(607070);
      function u(e, n, t) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
          a = i.useCallback(
            (e) => {
              let t = document.querySelector(e),
                i = n.current;
              null != t &&
                null != i &&
                (t.focus(), i.scrollIntoViewNode({ node: t, padding: 80 }));
            },
            [n],
          ),
          s = i.useCallback(
            () =>
              new Promise((e) => {
                let t = n.current;
                if (null == t) return e();
                t.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [n],
          ),
          c = i.useCallback(
            () =>
              new Promise((e) => {
                let t = n.current;
                if (null == t) return e();
                t.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => e()),
                });
              }),
            [n],
          );
        return (0, r.ZP)({
          id: e,
          isEnabled: u,
          setFocus: a,
          scrollToStart: s,
          scrollToEnd: c,
          orientation: null == t ? void 0 : t.orientation,
        });
      }
    },
    357352: function (e, n, t) {
      t.d(n, {
        b: function () {
          return i;
        },
      });
      function i(e) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(e);
      }
    },
    201895: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return c;
        },
      }),
        t(653041);
      var i = t(131704),
        r = t(699516),
        l = t(594174),
        o = t(933557),
        u = t(981631),
        a = t(388032);
      function s(e) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: t } = e;
        if (n)
          return t ? a.intl.string(a.t["oj+HOj"]) : a.intl.string(a.t.xI3TQU);
      }
      function c(e) {
        let n,
          {
            channel: t,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: f,
            embeddedActivitiesCount: p,
            isSubscriptionGated: _,
            needSubscriptionToAccess: m,
          } = e,
          g = (0, o.F6)(t, l.default, r.Z);
        switch (t.type) {
          case u.d4z.DM:
            n = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
          case u.d4z.GROUP_DM:
            n = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
          case u.d4z.GUILD_STORE:
            n = a.t.Bo4msr;
            break;
          case u.d4z.GUILD_DIRECTORY:
            n = a.t["92EAFx"];
            break;
          case u.d4z.GUILD_ANNOUNCEMENT:
            n = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
          case u.d4z.GUILD_VOICE:
            let E = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: t.name }),
            ];
            if (
              (d > 0 &&
                E.push(
                  a.intl.formatToPlainString(a.t["3l1GOz"], {
                    mentionCount: d,
                  }),
                ),
              c && E.push(a.intl.string(a.t.x5zAGR)),
              null != f)
            ) {
              let e = t.userLimit;
              null != e && e > 0
                ? E.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: f,
                      limit: e,
                    }),
                  )
                : E.push(
                    a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }),
                  );
            }
            null != p &&
              p > 0 &&
              E.push(
                a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: p }),
              );
            let h = s({ isSubscriptionGated: _, needSubscriptionToAccess: m });
            return null != h && E.push(h), E.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            n = a.t.TPPk2d;
            break;
          default:
            n = i.Ec.has(t.type)
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
        let I = [
            a.intl.formatToPlainString(n, { channelName: g, mentionCount: d }),
          ],
          S = s({ isSubscriptionGated: _, needSubscriptionToAccess: m });
        return null != S && I.push(S), I.join(", ");
      }
    },
    17079: function (e, n, t) {
      t.d(n, {
        T: function () {
          return l;
        },
      });
      var i = t(570140),
        r = t(155414);
      async function l(e, n) {
        i.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: e,
          priceTierType: n,
        });
        try {
          let t = await r.X(e, n);
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: n,
            priceTiers: t,
          });
        } catch (t) {
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: e,
            priceTierType: n,
          });
        }
      }
    },
    333866: function (e, n, t) {
      t.d(n, {
        a3: function () {
          return o;
        },
        eJ: function () {
          return a;
        },
        kL: function () {
          return s;
        },
        zJ: function () {
          return l;
        },
      });
      var i,
        r,
        l,
        o,
        u = t(388032);
      function a(e) {
        return {
          4: u.intl.string(u.t["5tzSRE"]),
          2: u.intl.string(u.t["WWIr5+"]),
          3: u.intl.string(u.t.WlSInZ),
          1: u.intl.string(u.t.uOU7Pz),
        }[e];
      }
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = o || (o = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let s = [4, 2, 3, 1];
    },
    76535: function (e, n, t) {
      t.d(n, {
        H: function () {
          return s;
        },
        R: function () {
          return a;
        },
      });
      var i = t(192379),
        r = t(442837),
        l = t(584825),
        o = t(17079),
        u = t(281320);
      function a(e, n) {
        let t = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
          l = (0, r.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(e, n),
          );
        return (
          i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(e, n);
          }, [e, l, n]),
          { loading: l === u.M.FETCHING, priceTiers: t }
        );
      }
      function s(e) {
        let {
          fetchSubscriptionsSettings: n,
          loading: t,
          error: r,
        } = (0, l.JH)();
        i.useEffect(() => {
          n(e);
        }, [n, e]);
        let o = (0, l.YB)(e);
        return {
          loaded: null != o && !t,
          subscriptionsSettings: o,
          loading: t,
          error: r,
        };
      }
    },
    155414: function (e, n, t) {
      t.d(n, {
        X: function () {
          return o;
        },
      });
      var i = t(544891),
        r = t(881052),
        l = t(981631);
      let o = async (e, n) => {
        try {
          return (
            await i.tn.get({
              url: l.ANM.PRICE_TIERS,
              query: { price_tier_type: n, guild_id: e },
            })
          ).body;
        } catch (e) {
          throw new r.Hx(e);
        }
      };
    },
    281320: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      }),
        t(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = t(442837),
        c = t(570140);
      let d = new Map(),
        f = new Map();
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class p extends (r = s.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, n) {
          var t, i;
          return null !==
            (i = null === (t = f.get(e)) || void 0 === t ? void 0 : t.get(n)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(e, n) {
          var t;
          return null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(n);
        }
      }
      (a = "CreatorMonetizationStore"),
        (u = "displayName") in (o = p)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (n.Z = new p(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), f.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(t, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: n, priceTierType: t, priceTiers: i } = e;
            !f.has(n) && f.set(n, new Map()),
              f.get(n).set(t, 2),
              !d.has(n) && d.set(n, new Map()),
              d.get(n).set(t, i);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(t, 2);
          },
        }));
    },
    834431: function (e, n, t) {
      t.d(n, {
        n: function () {
          return r;
        },
      });
      var i = t(506071);
      function r() {
        return (0, i.n)();
      }
    },
    166081: function (e, n, t) {
      t.d(n, {
        U: function () {
          return u;
        },
      });
      var i = t(192379),
        r = t(695346),
        l = t(73346),
        o = t(834431);
      function u(e, n) {
        let { shouldAnimate: t = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          a = (0, o.n)(),
          s = t && a && u;
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, l._W)(
              e.application_id,
              e.image_asset,
              n,
              s ? void 0 : "webp",
            );
        }, [n, e, s]);
      }
    },
    629481: function (e, n, t) {
      var i, r, l, o;
      t.d(n, {
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
        ((l = i || (i = {})).GET_STARTED_CLICK = "get_started_click"),
        (l.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (l.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (l.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((o = r || (r = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (o.SHOP_HEADER_BUTTON = "shop_header_button");
      let u = "hasClickedGuildShopProductPreviewTab",
        a = "hasClickedGuildShopChannelRow",
        s = "https://discord.com/servershop",
        c = "1 GB";
    },
    841762: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        o = t.n(l),
        u = t(481060),
        a = t(456692);
      function s(e) {
        let { alt: n, ...t } = e,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...t, alt: n, onLoad: () => o(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: n,
          backgroundSrc: t,
          alt: r,
          aspectRatio: l,
          className: u,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(a.container, u),
          children: [
            (0, i.jsx)("img", { src: t, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: a.imageContainer,
              children: (0, i.jsx)(s, {
                src: n,
                alt: r,
                className: o()(a.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    765585: function (e, n, t) {
      t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        o = t.n(l),
        u = t(481060),
        a = t(393238),
        s = t(605236),
        c = t(279745),
        d = t(921944),
        f = t(388032),
        p = t(138592);
      n.Z = r.forwardRef(function (e, n) {
        let {
            body: t,
            header: l,
            artClassName: _,
            headerClassName: m,
            contentClassName: g,
            tryItText: E,
            dismissText: h,
            onTryFeature: I,
            onClose: S,
            className: v,
            inlineArt: C = !1,
            isPremiumFeature: T = !1,
            shouldUseHorizontalButtons: N = !1,
            showGIFTag: b = !1,
            dismissibleContent: A,
            position: O = "top",
            align: P = "center",
            art: R,
            isPremiumEarlyAccess: x = !1,
            maxWidth: L = 280,
            hideDismissButton: y = !1,
            pointerClassName: M,
            dismissIconClassName: Z,
            dismissIcon: j,
            onDismissIconClick: D,
          } = e,
          U = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
          [w, F] = r.useState(!1),
          { ref: G, width: k } = (0, a.Z)();
        function H(e) {
          (0, s.EW)(A, { dismissAction: e });
        }
        return (
          r.useEffect(() => {
            var e, n;
            let t =
              (null !==
                (n =
                  null === (e = G.current) || void 0 === e
                    ? void 0
                    : e.scrollWidth) && void 0 !== n
                ? n
                : 0) + 64;
            !w && t > L && F(!0);
          }, [w, k, G, L]),
          r.useEffect(() => {
            (0, s.kk)(A);
          }, [A]),
          (0, i.jsx)("div", {
            className: v,
            ref: n,
            children: (0, i.jsxs)("div", {
              className: o()(p.content, g, {
                [p.contentNoArt]: null == _ || C,
                [p.contentPremium]: T || x,
              }),
              children: [
                null != j &&
                  (0, i.jsx)(u.Clickable, {
                    onClick: D,
                    className: Z,
                    children: j,
                  }),
                (0, i.jsxs)("div", {
                  className: o()(_, C ? p.artInline : p.artAbsolute),
                  children: [b && (0, i.jsx)(c.Z, { className: p.gifTag }), R],
                }),
                (0, i.jsxs)("div", {
                  className: p.body,
                  children: [
                    (0, i.jsxs)(u.Heading, {
                      className: o()(T ? p.headerWithPremiumIcon : p.header, m),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        T && !x
                          ? (0, i.jsx)(u.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: p.premiumIcon,
                            })
                          : null,
                        x
                          ? (0, i.jsxs)(u.Text, {
                              color: "always-white",
                              variant: "eyebrow",
                              className: p.earlyAccessBadgeContainer,
                              children: [
                                (0, i.jsx)(u.NitroWheelIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: p.earlyAccessIcon,
                                }),
                                (0, i.jsx)("span", {
                                  className: p.earlyAccessText,
                                  children: f.intl.string(f.t.phHyIS),
                                }),
                              ],
                            })
                          : null,
                        l,
                      ],
                    }),
                    null == t
                      ? null
                      : "string" == typeof t
                        ? (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            children: t,
                          })
                        : t,
                  ],
                }),
                (0, i.jsx)("div", {
                  ref: G,
                  className:
                    w || !N
                      ? p.buttonContainerVertical
                      : p.buttonContainerHorizontal,
                  children:
                    null != I
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(u.Button, {
                              className: p.button,
                              size: U,
                              onClick: (e) => {
                                null == S || S(e), I(e), H(d.L.PRIMARY);
                              },
                              color:
                                T || x
                                  ? u.Button.Colors.BRAND_INVERTED
                                  : u.Button.Colors.WHITE,
                              children:
                                null != E ? E : f.intl.string(f.t.IHf1RE),
                            }),
                            !y &&
                              (0, i.jsx)(u.Button, {
                                className: p.button,
                                size: U,
                                onClick: (e) => {
                                  null == S || S(e), H(d.L.DISMISS);
                                },
                                color:
                                  T || x
                                    ? u.Button.Colors.WHITE
                                    : u.Button.Colors.BRAND,
                                look:
                                  T || x
                                    ? u.Button.Looks.LINK
                                    : u.Button.Looks.FILLED,
                                children:
                                  null != h ? h : f.intl.string(f.t.om7Ovr),
                              }),
                          ],
                        })
                      : (0, i.jsx)(u.Button, {
                          className: p.button,
                          size: u.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == S || S(e), H(d.L.PRIMARY);
                          },
                          color: u.Button.Colors.WHITE,
                          children: f.intl.string(f.t.HU2IR0),
                        }),
                }),
                (0, i.jsx)("div", {
                  className: o()(p.pointer, M, {
                    [p.bottomPointer]: "top" === O,
                    [p.centerLeftPointer]: "right" === O && "center" === P,
                    [p.topLeftPointer]: "right" === O && "top" === P,
                  }),
                }),
              ],
            }),
          })
        );
      });
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
        v: function () {
          return g;
        },
      }),
        t(47120);
      var i,
        r,
        l,
        o = t(200651),
        u = t(192379),
        a = t(120356),
        s = t.n(a),
        c = t(569619),
        d = t(481060),
        f = t(981631),
        p = t(388032),
        _ = t(404934);
      function m(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((l = i || (i = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let g = {
        container: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: i } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: t ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: t ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: t ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, n) => {
          let { isSelected: t, isFocused: i } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : i
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class E extends (r = u.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: i,
              valueRenderer: r,
              optionRenderer: l,
              multiValueRenderer: u,
              options: a,
              value: f,
              autofocus: m,
              disabled: E,
              clearable: h,
              searchable: I,
              styleOverrides: S,
              isMulti: v,
              placeholder: C,
              filterOption: T,
              closeMenuOnSelect: N = !0,
              ...b
            } = this.props,
            A = { ...b };
          null != m && (A.autoFocus = m),
            null != E && (A.isDisabled = E),
            null != h && (A.isClearable = h),
            null != I && (A.isSearchable = I);
          let O = { IndicatorSeparator: () => null };
          null != l &&
            (O.Option = (e) =>
              (0, o.jsx)(c.wx.Option, { ...e, children: l(e.data) })),
            null != r &&
              (O.SingleValue = (e) =>
                (0, o.jsx)(c.wx.SingleValue, { ...e, children: r(e.data) })),
            null != u && (O.MultiValue = (e) => u(e.data));
          if (v && Array.isArray(f)) {
            let n = {};
            a.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = f.map((e) => n[String(e)]));
          } else e = null != f ? a.find((e) => e.value === f) : null;
          return (0, o.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: s()(_.select, n, { [_.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(c.ZP, {
                  ...A,
                  className: t,
                  ref: this._selectRef,
                  isMulti: v,
                  components: O,
                  options: a,
                  styles: null != S ? S : g,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: N,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != C ? C : p.intl.string(p.t.XqMe3N),
                  noOptionsMessage: () => p.intl.string(p.t["Xe+fJC"]),
                  filterOption: T,
                }),
                null != i
                  ? (0, o.jsx)("div", {
                      className: _.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            m(this, "_selectRef", u.createRef()),
            m(this, "_containerRef", u.createRef()),
            m(this, "state", { isFocused: !1, isOpen: !1 }),
            m(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            m(this, "handleKeyDown", (e) => {
              e.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            m(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            m(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      m(E, "MenuPlacements", i);
    },
    479099: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
        f: function () {
          return v;
        },
      }),
        t(47120);
      var i,
        r,
        l = t(200651),
        o = t(192379),
        u = t(120356),
        a = t.n(u),
        s = t(91192),
        c = t(442837),
        d = t(481060),
        f = t(239091),
        p = t(596454),
        _ = t(607070),
        m = t(339085),
        g = t(695346),
        E = t(572004),
        h = t(388032),
        I = t(813778);
      function S(e) {
        let {
            tag: n,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: S,
            onRemove: v,
            selected: C,
            ariaLabel: T,
          } = e,
          { name: N, emojiId: b, emojiName: A } = n,
          O = null != v,
          [P, R] = o.useState(!1),
          x = (0, c.e7)([m.ZP], () =>
            null != b ? m.ZP.getUsableCustomEmojiById(b) : null,
          ),
          L = O || null != S,
          y = (!O || !P) && (null != b || null != A),
          M = 0 === i,
          Z = o.useRef(null),
          j = (0, c.e7)([_.Z], () => _.Z.keyboardModeEnabled),
          D = (e) => {
            let i = g.Sb.getSetting();
            E.wS &&
              i &&
              (0, f.jW)(e, async () => {
                let { default: e } = await t.e("29646").then(t.bind(t, 955116));
                return (t) => (0, l.jsx)(e, { ...t, tag: n });
              });
          },
          U = (0, l.jsxs)(l.Fragment, {
            children: [
              y
                ? (0, l.jsx)(p.Z, {
                    className: a()(I.emoji, { [I.small]: M }),
                    emojiId: b,
                    emojiName: A,
                    animated: !!(null == x ? void 0 : x.animated),
                    size: "reaction",
                  })
                : null,
              P &&
                O &&
                (0, l.jsx)("div", {
                  className: I.closeCircle,
                  children: (0, l.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: I.close,
                  }),
                }),
              (0, l.jsx)(d.Text, {
                variant: M ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: N,
              }),
            ],
          }),
          w = {
            key: n.id,
            className: a()(
              I.pill,
              {
                [I.disabled]: r,
                [I.clickable]: L,
                [I.small]: M,
                [I.selected]: C,
              },
              u,
            ),
            onClick: (e) => {
              null == S || S(e),
                null == v || v(n),
                !j && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => D(e),
            onMouseEnter: () => O && R(!0),
            onMouseLeave: () => O && R(!1),
          },
          F = (0, s.JA)("forum-tag-".concat(n.id));
        return L
          ? (0, l.jsx)(d.Clickable, {
              ...F,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              "aria-label":
                null != T
                  ? T
                  : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: "button",
              "aria-pressed": C,
              ...w,
              children: U,
            })
          : (0, l.jsx)("div", { ...w, children: U });
      }
      function v(e) {
        let { tags: n, count: t, size: i = 1 } = e,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": h.intl.string(h.t["P/y+sr"]),
          text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
              (0, l.jsx)(
                S,
                { tag: e, className: I.tooltipPill, size: S.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, l.jsx)("div", {
              ...e,
              className: a()(I.pill, { [I.small]: r }),
              children: (0, l.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", t],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (S.Sizes = i);
    },
    528011: function (e, n, t) {
      t.d(n, {
        g: function () {
          return g;
        },
        mI: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(149765),
        r = t(399606),
        l = t(581883),
        o = t(430824),
        u = t(496675),
        a = t(914010),
        s = t(594174),
        c = t(700785),
        d = t(709054),
        f = t(533244),
        p = t(487419),
        _ = t(676770);
      t(981631);
      function m(e) {
        let n = (0, r.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && i.Db(t, _.cv);
          }),
          t = (0, r.e7)([p.Z], () =>
            null != e ? p.Z.getGuildIncident(e) : null,
          ),
          l = null != t && (0, f.ur)(t);
        return {
          shouldShowIncidentActions: n,
          incidentData: t,
          isUnderLockdown: l,
        };
      }
      function g() {
        var e;
        let n = (function (e) {
            let n = s.default.getCurrentUser(),
              t = p.Z.getIncidentsByGuild();
            for (let r of d.default.keys(t).map((e) => o.Z.getGuild(e))) {
              if (null == r) continue;
              let l = t[r.id];
              if (
                !(
                  null == l ||
                  (!(0, f.i9)(l) && !(0, f.ur)(l)) ||
                  ((0, f.ur)(l) && r.id !== e)
                )
              ) {
                if (
                  i.Db(c.uB({ user: n, context: r, checkElevated: !1 }), _.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          t = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
          r = null != n ? t[n] : null,
          u = null != r && r.disableRaidAlertNag;
        return { show: null != n && !u, guildId: n };
      }
    },
    273504: function (e, n, t) {
      t.d(n, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return I;
        },
        Lg: function () {
          return h;
        },
        OU: function () {
          return g;
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
          return E;
        },
        Vk: function () {
          return p;
        },
        _6: function () {
          return S;
        },
        aj: function () {
          return m;
        },
        dc: function () {
          return v;
        },
        fX: function () {
          return u.f;
        },
        hu: function () {
          return f;
        },
        jj: function () {
          return l.j;
        },
        n4: function () {
          return s;
        },
        q4: function () {
          return o.q;
        },
        uE: function () {
          return _;
        },
      });
      var i,
        r,
        l = t(401653),
        o = t(95930),
        u = t(41381);
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
        p = 1,
        _ = 1,
        m = 260,
        g = 100,
        E = 1,
        h = 50,
        I = 20,
        S = 150,
        v = "automod-profile-quarantine-alert";
    },
    787824: function (e, n, t) {
      t.d(n, {
        C: function () {
          return function e(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((t, r) => {
                  let l = (0, i.camelCase)(r);
                  return (
                    "object" != typeof n[r] || Array.isArray(n[r])
                      ? (t[l] = n[r])
                      : (t[l] = e(n[r])),
                    t
                  );
                }, {});
          };
        },
        X: function () {
          return function e(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((t, r) => {
                  let l = (0, i.snakeCase)(r);
                  return (
                    "object" != typeof n[r] || Array.isArray(n[r])
                      ? (t[l] = n[r])
                      : (t[l] = e(n[r])),
                    (t[l] = n[r]),
                    t
                  );
                }, {});
          };
        },
      }),
        t(724458);
      var i = t(392711);
    },
    226192: function (e, n, t) {
      t.d(n, {
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
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(273504),
        o = t(388032);
      function u(e) {
        return {
          [l.jj.BLOCK_MESSAGE]: (e, n) =>
            new Promise((e) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await t.e("94005").then(t.bind(t, 144462));
                return (t) => {
                  var l;
                  return (0, i.jsx)(r, {
                    initialCustomMessage:
                      null !== (l = n.metadata.customMessage) && void 0 !== l
                        ? l
                        : "",
                    onSubmit: (i) => {
                      (n.metadata.customMessage = i), e(n), t.onClose();
                    },
                    ...t,
                    onClose: () => (e(null), t.onClose()),
                  });
                };
              });
            }),
          [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await t.e("74543").then(t.bind(t, 643611)),
                  a = n.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, i.jsx)(r, {
                    action: o,
                    isEdit: null != a,
                    triggerType: n.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (o.metadata.channelId = e),
                        n.exemptChannels.add(e),
                        u(o),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (u(null), t.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (e, n) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await t.e("78273").then(t.bind(t, 41767)),
                  u = e.actions.find(
                    (e) => e.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (t) =>
                  (0, i.jsx)(r, {
                    action: n,
                    isEdit: null != u,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (n.metadata.durationSeconds = e),
                        o(n),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (o(null), t.onClose()),
                  });
              });
            }),
        };
      }
      function a(e, n, l, o) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("37483").then(t.bind(t, 241046));
          return (t) =>
            (0, i.jsx)(r, {
              ...t,
              automodDecision: {
                messageId: e,
                messageContent: n,
                decisionId: l,
                channel: o,
              },
            });
        });
      }
      function s(e, n) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("28382").then(t.bind(t, 537623));
          return (t) => (0, i.jsx)(r, { ...t, messageId: e, guildId: n });
        });
      }
      function c(e) {
        (0, r.openModal)((n) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t["cY+Ooa"]),
            onConfirm: e,
            cancelText: o.intl.string(o.t["ETE/oK"]),
            ...n,
            children: (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              children: o.intl.string(o.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (e, n, t) {
      t.d(n, {
        $Y: function () {
          return C;
        },
        JK: function () {
          return I;
        },
        Je: function () {
          return S;
        },
        T9: function () {
          return b;
        },
        UE: function () {
          return N;
        },
        Xx: function () {
          return T;
        },
        mm: function () {
          return v;
        },
        qY: function () {
          return h;
        },
      }),
        t(47120);
      var i = t(544891),
        r = t(570140),
        l = t(367907),
        o = t(430824),
        u = t(496675),
        a = t(823379),
        s = t(709054),
        c = t(177862),
        d = t(787824),
        f = t(226192),
        p = t(981631);
      function _(e) {
        return { type: e.type, metadata: (0, d.X)(e.metadata) };
      }
      function m(e) {
        var n, t;
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
            actions: e.actions.filter(a.lm).map(_),
            enabled: e.enabled,
            creator_id: e.creatorId,
            position: e.position,
            exempt_channels: Array.from(
              null !== (n = e.exemptChannels) && void 0 !== n ? n : [],
            ),
            exempt_roles: Array.from(
              null !== (t = e.exemptRoles) && void 0 !== t ? t : [],
            ),
          }
        );
      }
      function g(e) {
        return { type: e.type, metadata: (0, d.C)(e.metadata) };
      }
      function E(e) {
        var n, t, i;
        let r = {
          id:
            null !== (n = e.id) && void 0 !== n
              ? n
              : s.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, d.C)(e.trigger_metadata),
          actions: e.actions.filter(a.lm).map(g),
          enabled: e.enabled,
          creatorId: e.creator_id,
          position: e.position,
          exemptChannels: new Set(
            null !== (t = e.exempt_channels) && void 0 !== t ? t : [],
          ),
          exemptRoles: new Set(
            null !== (i = e.exempt_roles) && void 0 !== i ? i : [],
          ),
        };
        return (
          null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r
        );
      }
      async function h(e) {
        let n = m(e),
          t = await i.tn.post({
            url: p.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: n,
          });
        return (0, d.C)(t.body);
      }
      async function I(e) {
        let n = m(e);
        return (
          delete n.id,
          E(
            (
              await i.tn.post({
                url: p.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: n,
              })
            ).body,
          )
        );
      }
      async function S(e) {
        let n = m(e);
        return E(
          (
            await i.tn.patch({
              url: p.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: n,
            })
          ).body,
        );
      }
      async function v(e, n) {
        return await i.tn.del({ url: p.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
      }
      async function C(e) {
        let n = await i.tn.get({ url: p.ANM.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(n.body) ? n.body.map(E) : [];
      }
      async function T(e, n, t) {
        if (!!u.Z.can(p.Plq.MANAGE_MESSAGES, n))
          await i.tn.post({
            url: p.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: e, channel_id: n.id, alert_action_type: t },
          });
      }
      function N(e, n, t) {
        let r = o.Z.getGuild(e);
        if (null != r && !!u.Z.can(p.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, l.yw)(p.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              i.tn.post({ url: p.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
              t();
          });
      }
      function b(e) {
        r.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
    223606: function (e, n, t) {
      t(724458);
      var i,
        r = t(442837),
        l = t(570140),
        o = t(673750),
        u = t(786761),
        a = t(592125),
        s = t(375954),
        c = t(709054),
        d = t(539573),
        f = t(825829),
        p = t(981631);
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let m = {},
        g = 0,
        E = {},
        h = {},
        I = (e, n) => {
          let t = (0, o.hc)(e),
            i = {
              id: t,
              isBlockedEdit: (0, o.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, n),
            };
          (m[t] = i), g++;
        },
        S = (e) => m[e],
        v = (e) => {
          null != m[e] && delete m[e], g++;
        };
      function C(e) {
        let { messageData: n, errorResponseBody: t } = e;
        return I(n, t), !0;
      }
      function T(e) {
        var n;
        let { channelId: t, messages: i } = e,
          r =
            null === (n = a.Z.getChannel(t)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == r) return !1;
        let l = h[r],
          o = i.reduce((e, n) => {
            var t;
            return n.type === p.uaV.AUTO_MODERATION_ACTION &&
              (null === (t = n.embeds) || void 0 === t
                ? void 0
                : t.some((e) => {
                    let { type: n } = e;
                    return n === p.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === c.default.compare(e, n.id)
                ? n.id
                : void 0
              : e;
          }, l);
        return null != o && h[r] !== o && ((h[r] = o), !0);
      }
      class N extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((m = e.automodFailedMessages),
              (E = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: m,
            mentionRaidDetectionByGuild: E,
            lastIncidentAlertMessage: h,
          };
        }
        getMessage(e) {
          var n;
          return null == e
            ? null
            : null !== (n = S(e)) && void 0 !== n
              ? n
              : null;
        }
        getMessagesVersion() {
          return g;
        }
        getMentionRaidDetected(e) {
          var n;
          return null !== (n = E[e]) && void 0 !== n ? n : null;
        }
        getLastIncidentAlertMessage(e) {
          var n;
          return null !== (n = h[e]) && void 0 !== n ? n : null;
        }
      }
      _(N, "displayName", "GuildAutomodMessageStore"),
        _(N, "persistKey", "GuildAutomodMessages"),
        (n.Z = new N(l.Z, {
          CONNECTION_OPEN: function (e) {
            return (m = {}), g++, !0;
          },
          LOAD_MESSAGES_SUCCESS: T,
          LOCAL_MESSAGES_LOADED: T,
          MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== p.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(t);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[n] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: C,
          MESSAGE_EDIT_FAILED_AUTOMOD: C,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return v(n), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if (
              (null == n ? void 0 : n.body) == null ||
              n.body.code === p.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let t = n.body.id;
            if (null == t) return !1;
            v(t);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: n,
              decisionId: t,
              suspiciousMentionActivityUntil: i,
            } = e;
            return (
              (E[n] = {
                guildId: n,
                decisionId: t,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete E[n], !0;
          },
        }));
    },
    290034: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(297700),
        u = t(471885),
        a = t(981631),
        s = t(188662);
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
          premiumTier: n,
          iconBackgroundClassName: t,
          iconClassName: r,
          size: a,
        } = e;
        return (0, i.jsx)(o.Z, {
          className: l()(t, c[n]),
          size: a,
          children: (0, i.jsx)(u.Z, {
            tier: n,
            className: l()(r, s.boostedGuildIconGem, d[n]),
          }),
        });
      }
    },
    527379: function (e, n, t) {
      t.d(n, {
        Dr: function () {
          return _;
        },
        YO: function () {
          return f;
        },
        _X: function () {
          return m;
        },
        _o: function () {
          return p;
        },
        nb: function () {
          return g;
        },
        zO: function () {
          return d;
        },
      });
      var i = t(570140),
        r = t(434404),
        l = t(703656),
        o = t(430824),
        u = t(241559),
        a = t(327999),
        s = t(981631),
        c = t(176505);
      async function d(e) {
        await i.Z.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: e,
        });
      }
      function f(e) {
        i.Z.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: e,
        });
      }
      function p(e, n) {
        let { continuationToken: t, ...r } = n;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function _(e, n) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: n,
        });
      }
      function m(e) {
        let n = (0, u.lv)(e),
          t = o.Z.getGuild(e);
        return (
          !!n &&
          null != t &&
          (t.hasFeature(s.oNc.COMMUNITY) ||
          t.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, l.uL)(s.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
            : (r.Z.open(t.id, s.pNK.MEMBERS), !0))
        );
      }
      async function g(e, n) {
        let t = await (0, a._2)(e, n);
        return 0 === t.length
          ? []
          : (await i.Z.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: e,
              memberSupplementals: t,
            }),
            t);
      }
    },
    495437: function (e, n, t) {
      t.d(n, {
        EB: function () {
          return o;
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
      var i = t(570140),
        r = t(881052),
        l = t(824389);
      let o = async (e) => {
          i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let n = await l.uV(e);
            i.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: e,
              products: n,
            });
          } catch (n) {
            i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
          }
        },
        u = async (e, n) => {
          i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: n });
          try {
            let t = await l.p9(e, n);
            return (
              i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: t }),
              t
            );
          } catch (e) {
            throw (
              (i.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: n,
                error: new r.Hx(e),
              }),
              e)
            );
          }
        };
      async function a(e, n, t) {
        let r = await l.Je(e, n, t);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function s(e, n) {
        return (
          await l.mh(e, n),
          i.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: n }),
          !0
        );
      }
    },
    267101: function (e, n, t) {
      t.d(n, {
        SO: function () {
          return g;
        },
        eD: function () {
          return f;
        },
        hO: function () {
          return p;
        },
        r: function () {
          return m;
        },
        ue: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(192379),
        r = t(442837);
      t(935369);
      var l = t(38618),
        o = t(160404),
        u = t(496675),
        a = t(914010),
        s = t(495437),
        c = t(240864),
        d = t(981631);
      let f = (e) => {
          let n = (0, r.e7)(
              [c.Z],
              () =>
                null != e
                  ? c.Z.getGuildProductsForGuildFetchState(e)
                  : c.M.FETCHED,
              [e],
            ),
            t = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
          return (
            i.useEffect(() => {
              o &&
                (n === c.M.NOT_FETCHED ||
                  (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                t &&
                s.EB(e),
                u(!t);
            }, [e, t, n, o]),
            { listingsLoaded: n === c.M.FETCHED && !o }
          );
        },
        p = function (e, n) {
          let { requireCurrentGuild: t } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(n);
              if ((!t || u === e) && o && i === c.M.NOT_FETCHED)
                try {
                  s.cf(e, n);
                } catch (e) {}
            }, [e, n, o, u, t]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        _ = function (e) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != n ? n : !o.Z.isViewingServerShop(e),
            }),
          );
        },
        m = (e) =>
          (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        g = (e) =>
          (0, r.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
    },
    824389: function (e, n, t) {
      t.d(n, {
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
      var i = t(544891),
        r = t(881052),
        l = t(73346),
        o = t(981631);
      let u = async (e, n, t) => {
          let {
            priceTier: l,
            imageName: u,
            createNewRole: a,
            unlinkRole: s,
            ...c
          } = t;
          try {
            return (
              await i.tn.patch({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n),
                body: {
                  ...c,
                  image_name: u,
                  price_tier: l,
                  create_new_role: a,
                  unlink_role: s,
                },
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        a = async (e, n) => {
          try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        s = async (e) => {
          try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e) }))
              .body.listings;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        c = async (e, n) => {
          try {
            return (
              await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        d = async (e) => {
          let { guildId: n, productId: t, attachmentId: l } = e;
          try {
            return (
              await i.tn.post({
                url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, t, l),
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        };
    },
    240864: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      }),
        t(653041),
        t(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = t(442837),
        c = t(759174),
        d = t(570140),
        f = t(70956),
        p = t(709054);
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let _ = {},
        m = {},
        g = {},
        E = 10 * f.Z.Millis.MINUTE;
      function h(e) {
        return "guild:".concat(e);
      }
      function I(e) {
        return "guild:".concat(e, ":published");
      }
      let S = new c.h(
          (e) => {
            let n = [h(e.guild_id)];
            return e.published && n.push(I(e.guild_id)), n;
          },
          (e) =>
            (function (e) {
              let n = p.default.extractTimestamp(e.id);
              return e.published ? -n : -n + 1e12;
            })(e),
        ),
        v = [];
      class C extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var n;
          return null !== (n = _[e]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(e) {
          return S.get(e);
        }
        getGuildProductsForGuild(e, n) {
          let { publishedOnly: t } = n;
          return null == e ? v : S.values(t ? I(e) : h(e));
        }
        getGuildProductFetchState(e) {
          var n;
          return null !== (n = m[e]) && void 0 !== n ? n : 0;
        }
        isGuildProductsCacheExpired(e) {
          var n;
          return Date.now() - (null !== (n = g[e]) && void 0 !== n ? n : 0) > E;
        }
      }
      (a = "GuildProductsStore"),
        (u = "displayName") in (o = C)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (n.Z = new C(d.Z, {
          CONNECTION_OPEN: function () {
            S.clear(), (_ = {}), (m = {}), (g = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (_[n] = 1),
              [...S.values(h(n))].forEach((e) => {
                S.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (_[n] = 2),
              (g[n] = Date.now()),
              t.forEach((e) => {
                S.set(e.id, e), (m[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            _[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            S.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            S.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            S.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            m[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (m[n.id] = 2), S.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (m[n] = 2), 404 === t.status && S.delete(n);
          },
        }));
    },
    863663: function (e, n, t) {
      t.d(n, {
        NB: function () {
          return o;
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
      var i = t(881052);
      t(496675);
      var r = t(981631),
        l = t(388032);
      let o = "_role";
      function u(e) {
        if (!(e >= 0))
          switch (-e) {
            case r.evJ.ENTITY_TOO_LARGE:
              return l.intl.string(l.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return l.intl.string(l.t.ZaXBoK);
            case 1:
              return l.intl.string(l.t.R0RpRU);
            default:
              return l.intl.formatToPlainString(l.t.cYwlp6, { code: -e });
          }
      }
      function a(e) {
        let { newRoleParams: n } = e;
        if (null != n && "" === n.name.trim()) {
          var t, r;
          return (
            (t = o),
            (r = l.intl.string(l.t["V0B/k5"])),
            new i.Hx({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [t]: { _errors: [{ code: "", message: r }] } },
              },
            })
          );
        }
      }
      function s(e) {
        var n;
        let {
            guildProductListing: t,
            name: i,
            priceTier: r,
            description: l,
            image: o,
            imageName: u,
            isImageChanged: a,
            newRoleParams: s,
            hasUnsavedAttachmentChanges: c,
          } = e,
          d = {};
        (null == t ? void 0 : t.name) !== i && "" !== i.trim() && (d.name = i),
          (null !== (n = null == t ? void 0 : t.description) && void 0 !== n
            ? n
            : "") !== l && (d.description = l),
          (null == t ? void 0 : t.price_tier) !== r &&
            null != r &&
            (d.priceTier = r),
          null != s && "" !== s.name.trim()
            ? (d.createNewRole = !0)
            : null === s && (d.unlinkRole = !0),
          o.startsWith("data:") &&
            (a || (null == t && (Object.keys(d).length > 0 || c))) &&
            ((d.image = o), (d.imageName = u));
        let f = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: f,
          canSaveForDraft: f,
          canSaveForPublished: f,
          canPublishOrUnpublish: !(null == t || f),
        };
      }
      function c(e, n) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Z5c.GUILD_PRODUCT(e, n));
      }
    },
    676651: function (e, n, t) {
      t.d(n, {
        h: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(302463);
      function o(e, n) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await t.e("73628").then(t.bind(t, 458961));
            return (t) => (0, i.jsx)(r, { guildId: e, productId: n, ...t });
          },
          { modalKey: l.Yz },
        );
      }
    },
    942833: function (e, n, t) {
      t.d(n, {
        C: function () {
          return o;
        },
        k: function () {
          return u;
        },
      });
      var i = t(192379),
        r = t(937615),
        l = t(388032);
      function o(e) {
        return i.useMemo(() => {
          if (null == e) return;
          let n = null != e.role_id,
            t = e.attachments_count > 0;
          if (n && t) return l.intl.string(l.t.ih4QMT);
          if (n) return l.intl.string(l.t.o9xphY);
          if (t) return l.intl.string(l.t.DWYJub);
        }, [e]);
      }
      function u(e) {
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.price) == null) return;
          let { amount: n, currency: t } = e.price;
          return (0, r.T4)(n, t);
        }, [e]);
      }
    },
    613810: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060);
      n.Z = {
        open: function (e) {
          (0, r.openModalLazy)(async () => {
            let { default: n } = await t.e("53162").then(t.bind(t, 490576));
            return (t) => (0, i.jsx)(n, { ...e, ...t });
          });
        },
      };
    },
    391181: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
        m: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(481060),
        u = t(239091),
        a = t(166081),
        s = t(937615),
        c = t(942833),
        d = t(48691),
        f = t(231338),
        p = t(388032),
        _ = t(772103);
      function m(e) {
        let {
          showEditProduct: n,
          showUnpublishProduct: t,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: u,
          showReportProduct: a,
          onEditProduct: s,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: f,
          onTestDownload: m,
          onReportProduct: g,
          closePopout: E,
          onSelect: h,
        } = e;
        return (0, i.jsx)("div", {
          className: _.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: E,
            "aria-label": p.intl.string(p.t.Z146dH),
            onSelect: h,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-edit",
                      label: p.intl.string(p.t.EEfce3),
                      action: s,
                    }),
                  r &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-copy-link",
                      label: p.intl.string(p.t.XR26ur),
                      icon: o.LinkIcon,
                      action: f,
                    }),
                  l &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-test-download",
                      label: p.intl.string(p.t.aXoI6e),
                      icon: o.DownloadIcon,
                      action: m,
                    }),
                ],
              }),
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  t &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-unpublish",
                      label: p.intl.string(p.t.QrkMlJ),
                      action: c,
                    }),
                  u &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-delete",
                      label: p.intl.string(p.t.zWjqvL),
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, i.jsx)(o.MenuGroup, {
                children:
                  a &&
                  (0, i.jsx)(o.MenuItem, {
                    id: "guild-product-report",
                    label: p.intl.string(p.t["6yUzvL"]),
                    color: "danger",
                    action: g,
                  }),
              }),
            ],
          }),
        });
      }
      function g(e) {
        let {
          product: n,
          guildId: t,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: g,
          onCopyProductLink: E,
          onTestDownload: h,
          onReportProduct: I,
        } = e;
        return (0, i.jsx)("div", {
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, i.jsx)(o.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
              (0, i.jsx)(m, {
                ...e,
                guildId: t,
                productId: n.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: a,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: s,
                onEditProduct: d,
                onUnpublishProduct: f,
                onDeleteProduct: g,
                onCopyLink: E,
                onTestDownload: h,
                onReportProduct: I,
              }),
            children: (e, t) => {
              let { isShown: r } = t;
              return (0, i.jsx)(o.Clickable, {
                ...e,
                "aria-label": p.intl.formatToPlainString(p.t.RtqjeH, {
                  productName: n.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: _.productActionMenuButton,
                children: (0, i.jsx)(o.MoreVerticalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: _.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function E(e) {
        let {
            product: n,
            guildId: t,
            onEditProduct: r,
            onUnpublishProduct: E,
            onDeleteProduct: h,
            onCopyProductLink: I,
            onTestDownload: S,
            disabled: v = !1,
          } = e,
          C = (0, a.U)(n, 600),
          T =
            null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
          N = (0, c.C)(n);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(_.productCardClickable, _.productCard, {
            [_.disabled]: v,
          }),
          onClick: v ? void 0 : r,
          onContextMenu: function (e) {
            (0, u.jW)(e, () =>
              Promise.resolve((e) =>
                (0, i.jsx)(m, {
                  ...e,
                  closePopout: u.Zy,
                  guildId: t,
                  productId: n.id,
                  showEditProduct: !0,
                  showUnpublishProduct: n.published,
                  showCopyLink: n.published,
                  showTestDownload: null != n.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: E,
                  onDeleteProduct: h,
                  onCopyLink: I,
                  onTestDownload: S,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": p.intl.formatToPlainString(p.t["X/yAKi"], {
            productName: n.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: C,
              className: _.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: _.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: _.productInfoContent,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: _.productName,
                      children: n.name,
                    }),
                    (0, i.jsx)(o.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: _.productDetails,
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: T,
                        }),
                        null != N
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: _.dotSeparator,
                                }),
                                (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: N,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(o.Spacer, { size: 16 }),
                    n.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {}),
                  ],
                }),
                !v &&
                  (0, i.jsx)(g, {
                    product: n,
                    guildId: t,
                    showEditProduct: !0,
                    showUnpublishProduct: n.published,
                    showCopyLink: n.published,
                    showTestDownload: null != n.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: E,
                    onDeleteProduct: h,
                    onCopyProductLink: I,
                    onTestDownload: S,
                    onReportProduct: () => {},
                  }),
              ],
            }),
          ],
        });
      }
    },
    48691: function (e, n, t) {
      t.d(n, {
        b: function () {
          return f;
        },
        t: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(44315),
        o = t(377171),
        u = t(981631),
        a = t(388032),
        s = t(405013);
      function c(e) {
        let {
          label: n,
          backgroundColor: t = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: u,
        } = e;
        return (0, i.jsxs)("div", {
          className: s.badge,
          style: { backgroundColor: t },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: s.__invalid_badgeText,
              children: n,
            }),
            (0, i.jsx)(l, {
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
          iconColor: (0, l.Lq)(u.Ilk.PRIMARY_330),
        });
      }
    },
    730647: function (e, n, t) {
      t.d(n, {
        f: function () {
          return c;
        },
        l: function () {
          return d;
        },
      }),
        t(411104);
      var i = t(200651),
        r = t(192379),
        l = t(399606),
        o = t(38618),
        u = t(423117),
        a = t(289393);
      let s = r.createContext(void 0);
      function c(e) {
        let n = r.useContext(s);
        if (null == n)
          throw Error(
            "".concat(
              null != e ? e : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: t, fetchGroupListingsForGuild: i } = n;
        return i(), t;
      }
      function d(e) {
        let {
            guildId: n,
            children: t,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: f,
            dontFetchWhileTrue: p,
          } = e,
          _ = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          m = (0, l.e7)([a.Z], () =>
            null != n
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(n)
              : a.M.FETCHED,
          ),
          g = r.useRef(c),
          E = r.useCallback(() => {
            if (null == n || !_ || !0 === p) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (g.current || e === a.M.NOT_FETCHED) &&
              ((g.current = !1),
              u.FP(n, { includeSoftDeleted: d, countryCode: f }));
          }, [_, n, d, f, p]),
          h = r.useMemo(() => m === a.M.FETCHED && !0 !== g.current, [m, g]);
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: h, fetchGroupListingsForGuild: E },
          children: t,
        });
      }
    },
    523361: function (e, n, t) {
      t.d(n, {
        HG: function () {
          return u;
        },
        Md: function () {
          return o;
        },
        Q8: function () {
          return l;
        },
      });
      var i = t(373228),
        r = t(388032);
      let l = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        o = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
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
    35125: function (e, n, t) {
      t.d(n, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return E;
        },
        eI: function () {
          return m;
        },
        vp: function () {
          return _;
        },
        y8: function () {
          return g;
        },
      });
      var i = t(367907),
        r = t(200876),
        l = t(430824),
        o = t(594174);
      t(709054), t(523361);
      var u = t(981631),
        a = t(388032);
      function s(e) {
        return e;
      }
      function c(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = p({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(o, u);
      }
      function d(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = p({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(o, u);
      }
      function f(e, n) {
        var t, i;
        let r = l.Z.getGuild(e),
          o =
            null !== (t = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== t
              ? t
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (i = null == n ? void 0 : n.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function p(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: p,
            isRenewal: _,
          } = f(l, o);
        return (
          (n = p ? (_ ? a.t.Iy66Mz : a.t.eCgb2d) : _ ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: n,
            formatParams: {
              username: t,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: r,
              tierName: null == o ? void 0 : o.tier_name,
              months: d,
            },
          }
        );
      }
      function _(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: p,
            isRenewal: _,
          } = f(l, o);
        return (
          (n = p
            ? _
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : _
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(n, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d,
          })
        );
      }
      function m(e) {
        return (0, r.l)(e);
      }
      function g(e, n, t, r) {
        var l;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (l = o.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: n,
            message_id: t,
            role_subscription_listing_id: r,
          },
        );
      }
      function E(e, n) {
        var t;
        return {
          guild_id: e.guild_id,
          sender:
            null === (t = o.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id,
          target_user: n.author.id,
          channel_id: e.id,
          message_id: n.id,
        };
      }
    },
    817460: function (e, n, t) {
      t.d(n, {
        JE: function () {
          return u;
        },
        ab: function () {
          return o;
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
      var i = t(293810),
        r = t(474936),
        l = t(388032);
      function o(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function u(e) {
        let { interval: n, interval_count: t } = e;
        return l.intl.format(
          (function (e) {
            switch (e) {
              case r.rV.DAY:
                return l.t["3rUmPT"];
              case r.rV.MONTH:
                return l.t["zuN54+"];
              case r.rV.YEAR:
                return l.t.cuSp8f;
            }
          })(n),
          { count: t },
        );
      }
      function a(e) {
        let { interval: n, interval_count: t } = e;
        switch (n) {
          case r.rV.DAY:
            if (t > 0 && t % 7 == 0)
              return l.intl.formatToPlainString(l.t.iVZYys, { weeks: t / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: t });
          case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: t });
          case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: t });
        }
      }
      function s(e) {
        return e.ref_type === i.Qs.CHANNEL;
      }
      function c(e) {
        return e.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (e, n, t) {
      t.d(n, {
        GG: function () {
          return m;
        },
        HQ: function () {
          return S;
        },
        JH: function () {
          return T;
        },
        QV: function () {
          return C;
        },
        YB: function () {
          return v;
        },
        _1: function () {
          return I;
        },
        _k: function () {
          return p;
        },
        jO: function () {
          return _;
        },
        oC: function () {
          return N;
        },
        qi: function () {
          return g;
        },
        r4: function () {
          return h;
        },
        sp: function () {
          return E;
        },
      }),
        t(47120),
        t(653041);
      var i = t(192379),
        r = t(442837),
        l = t(935369),
        o = t(38618);
      t(823379);
      var u = t(730647),
        a = t(423117),
        s = t(289393),
        c = t(697227);
      let d = [],
        f = function (e) {
          let {
              refetchOnMount: n = !1,
              includeSoftDeleted: t = !0,
              countryCode: l,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () =>
              null != e
                ? s.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : s.M.FETCHED,
            ),
            f = i.useRef(n);
          return (
            i.useEffect(() => {
              if (null == e || !c || !0 === u) return;
              let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (n || i === s.M.NOT_FETCHED) &&
                ((f.current = !1),
                a.FP(e, { includeSoftDeleted: t, countryCode: l }));
            }, [c, e, t, n, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
          );
        },
        p = function (e) {
          let { includeSoftDeleted: n = !1, includeUnpublished: t = !0 } =
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
                if (null != i && (!i.soft_deleted || !!n))
                  (i.published || t) && r.push(i);
              }
              return r;
            },
            [e, n, t],
          );
        },
        _ = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionListing(e) : null,
          ),
        m = (e) => {
          let n = (0, u.f)("useGroupListingsForGuild");
          return (0, r.e7)([s.Z], () =>
            null != e && n ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
          );
        },
        g = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            f(e),
            (0, r.Wu)([s.Z], () => {
              let t =
                  null != e ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
                i = [];
              for (let e of t)
                for (let t of e.subscription_listings_ids) {
                  let e = s.Z.getSubscriptionListing(t);
                  null != e &&
                    (n.includeSoftDeleted || !e.soft_deleted) &&
                    i.push(e);
                }
              return n.includeSoftDeleted && n.sortDeletedListingsLast
                ? [
                    ...i.filter((e) => !e.soft_deleted),
                    ...i.filter((e) => e.soft_deleted),
                  ]
                : i;
            })
          );
        },
        E = (e) => {
          let [n, t] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)(
              [s.Z],
              () =>
                l.filter(
                  (e) => !s.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
              !n &&
                o.length > 0 &&
                (t(!0),
                Promise.all(o.map((e) => a.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  }));
            }, [n, o]),
            { loading: n }
          );
        },
        h = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, i) => {
              try {
                return n(!0), r(null), await a._d(e, t, i), !0;
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            },
          };
        },
        I = () => {
          let [e, n] = (0, l.Z)(a.AE),
            { loading: t, error: i } = n;
          return { error: i, submitting: t, archiveSubscriptionListing: e };
        },
        S = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            error: t,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: t, groupListingId: i, listingId: l } = e;
              try {
                return (
                  n(!0),
                  r(null),
                  await a.O0({
                    guildId: t,
                    groupListingId: i,
                    listingId: l,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            },
            clearError: () => r(null),
          };
        },
        v = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionSettings(e) : void 0,
          ),
        C = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, t) => {
              n(!0), r(null);
              try {
                await a.W2(e, t);
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        T = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
              n(!0), r(null);
              try {
                await a.Qb(e);
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        N = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionTrial(e) : null,
          );
    },
    403474: function (e, n, t) {
      t.d(n, {
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
        permissions: t(981631).Plq.SEND_MESSAGES,
        color: 0,
        colorString: "0",
        icon: null,
        unicodeEmoji: null,
        flags: 0,
      };
    },
    290348: function (e, n, t) {
      t.d(n, {
        B7: function () {
          return ee;
        },
        Ek: function () {
          return D;
        },
        F2: function () {
          return z;
        },
        GM: function () {
          return X;
        },
        GP: function () {
          return U;
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
          return W;
        },
        UE: function () {
          return F;
        },
        XZ: function () {
          return V;
        },
        Xo: function () {
          return $;
        },
        _T: function () {
          return x;
        },
        d9: function () {
          return M;
        },
        mR: function () {
          return L;
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
        t(47120);
      var i = t(192379),
        r = t(512722),
        l = t.n(r),
        o = t(392711),
        u = t(772848),
        a = t(866442),
        s = t(731965),
        c = t(442837),
        d = t(80932),
        f = t(749210),
        p = t(339085),
        _ = t(73346),
        m = t(817460),
        g = t(423117),
        E = t(584825),
        h = t(289393),
        I = t(790285),
        S = t(303737),
        v = t(971792),
        C = t(22902),
        T = t(403474),
        N = t(944537),
        b = t(293810),
        A = t(981631),
        O = t(474936);
      function P(e, n, t) {
        let r = (0, N.n)((e) => e.setListing),
          l = i.useCallback(
            (i) => {
              r(e, (e) => {
                var r;
                let l =
                  null !== (r = null == e ? void 0 : e[n]) && void 0 !== r
                    ? r
                    : t;
                return Object.assign({}, e, {
                  [n]: "function" == typeof i ? i(l) : i,
                });
              });
            },
            [r, e, n, t],
          ),
          o = (0, N.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
          });
        return [void 0 !== o ? o : t, l];
      }
      function R(e, n) {
        let t = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(e));
        return i.useMemo(() => n(t), [t]);
      }
      function x(e) {
        let n = R(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n
            ? n
            : "";
        });
        return P(e, "name", n);
      }
      function L(e) {
        let n = R(e, (e) => {
          var n;
          return null == e
            ? void 0
            : null === (n = e.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return P(e, "priceTier", n);
      }
      function y(e) {
        let n = R(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return P(e, "description", n);
      }
      function M(e, n) {
        let t = R(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, _._W)(e.application_id, e.image_asset, n);
        });
        return P(e, "image", t);
      }
      function Z(e, n) {
        let t = (0, v.Z)(n, e);
        return P(
          e,
          "roleIcon",
          i.useMemo(() => {
            var e, n;
            return {
              icon:
                null !== (e = null == t ? void 0 : t.icon) && void 0 !== e
                  ? e
                  : void 0,
              unicodeEmoji:
                null !== (n = null == t ? void 0 : t.unicodeEmoji) &&
                void 0 !== n
                  ? n
                  : void 0,
            };
          }, [t]),
        );
      }
      function j(e, n) {
        let t = (0, v.Z)(n, e),
          r = (0, N.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleColor;
          }),
          l = (0, N.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != t ? t : T.k) };
          if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ""),
              (e.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e
          );
        }, [t, l, r]);
      }
      function D(e, n) {
        let t = (0, v.Z)(n, e);
        return P(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e
              ? e
              : A.p6O;
          }, [t]),
        );
      }
      function U(e, n) {
        let t = (0, v.Z)(n, e);
        return P(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == t
                ? N.I.SOME_CHANNELS_ACCESS
                : (0, I.MT)(t)
                  ? N.I.ALL_CHANNELS_ACCESS
                  : N.I.SOME_CHANNELS_ACCESS,
            [t],
          ),
        );
      }
      let w = [];
      function F(e) {
        let n = R(e, (e) =>
          null == e ? w : e.role_benefits.benefits.filter(m.rC),
        );
        return P(e, "channelBenefits", n);
      }
      let G = [];
      function k(e) {
        let n = R(e, (e) =>
          null == e ? G : e.role_benefits.benefits.filter(m.lL),
        );
        return P(e, "intangibleBenefits", n);
      }
      let H = new Set();
      function B(e, n) {
        return 0 === e.length
          ? H
          : new Set(
              e
                .filter((e) => e.roles.includes(n))
                .map((e) => {
                  let { id: n } = e;
                  return n;
                }),
            );
      }
      function V(e, n) {
        let t = (0, v.Z)(n, e),
          r = (0, c.Wu)([p.ZP], () => p.ZP.getGuildEmoji(n), [n]);
        return P(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == t ? H : B(r, t.id)), [r, t]),
        );
      }
      function W(e) {
        var n;
        let t = (0, E.oC)(e),
          { selectedOption: i } = (0, C.Z)(
            null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return P(e, "trialInterval", null != i ? i : null);
      }
      function z(e) {
        var n;
        let t = (0, E.oC)(e);
        return P(
          e,
          "trialLimit",
          null !== (n = null == t ? void 0 : t.max_num_active_trial_users) &&
            void 0 !== n
            ? n
            : null,
        );
      }
      function Y(e) {
        return (0, N.n)((n) => void 0 !== n.listings[e]);
      }
      function K(e) {
        return (0, N.n)((n) => {
          for (let t of e) if (void 0 !== n.listings[t]) return !0;
          return !1;
        });
      }
      function q(e) {
        let n = R(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [t] = P(e, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var e, i, r, l, o;
            return {
              price:
                null !== (e = null != t ? t : null == n ? void 0 : n.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (i = null == n ? void 0 : n.currency) && void 0 !== i
                  ? i
                  : A.pKx.USD,
              interval:
                null !== (r = null == n ? void 0 : n.interval) && void 0 !== r
                  ? r
                  : O.rV.MONTH,
              interval_count:
                null !== (l = null == n ? void 0 : n.interval_count) &&
                void 0 !== l
                  ? l
                  : 1,
              id:
                null !== (o = null == n ? void 0 : n.id) && void 0 !== o
                  ? o
                  : "",
            };
          }, [n, t]),
        ];
      }
      function X(e) {
        var n;
        (n = e),
          (0, s.j)(() => {
            N.n.setState((e) => ({
              listings: {
                ...e.listings,
                [n]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function J(e) {
        let { guildId: n, editStateId: t } = e,
          i = h.Z.getSubscriptionListing(t);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          a = N.n.getState().listings[t];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: _,
          trialInterval: m,
          tierEmojiIds: E,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let I = h.Z.getSubscriptionTrial(u);
        if (
          ((null != _ || null != m || (null != I && null == m)) &&
            (await g.I1(n, u, { trial: m, max_num_active_trial_users: _ })),
          void 0 !== E)
        ) {
          let e = B(p.ZP.getGuildEmoji(n), r),
            t = (0, o.difference)([...E], [...e]),
            i = (0, o.difference)([...e], [...E]),
            l = t
              .map((e) => p.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: [...e.roles, r],
                  });
              }),
            u = i
              .map((e) => p.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let t = e.roles.filter((e) => e !== r);
                return t.length > 0
                  ? (0, d.dv)({ guildId: n, emojiId: e.id, roles: t })
                  : (0, d.RE)(n, e.id);
              });
          await Promise.all([...l, ...u]);
        }
      }
      async function Q(e) {
        let {
            guildId: n,
            editStateId: t,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = e,
          o = N.n.getState().listings[t];
        l()(null != o, "edit state does not exist");
        let {
          name: u,
          description: a,
          channelBenefits: s,
          intangibleBenefits: c,
          priceTier: d,
          image: f,
          channelAccessFormat: p,
        } = o;
        l()(null != u, "no name provided"),
          l()(null != a, "no description provided"),
          l()(null != d, "no priceTier provided"),
          l()(null != f, "no image provided");
        let _ = p === N.I.ALL_CHANNELS_ACCESS,
          m = i;
        null == m && (m = (await g.uw(n, {})).id),
          null != s && s.length > 0 && (await (0, S.r4)(n, s));
        let E = [...(null != s ? s : []), ...(null != c ? c : [])],
          h = (0, S.yL)(t, n);
        return g.dA({
          guildId: n,
          groupListingId: m,
          data: {
            can_access_all_channels: _,
            image: f,
            name: u,
            description: a,
            benefits: E,
            priceTier: d,
          },
          analyticsContext: h,
          onBeforeDispatchNewListing: r,
        });
      }
      function $() {
        let [e, n] = i.useState(!1),
          [t, r] = i.useState();
        return {
          loading: e,
          error: t,
          handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                guildId: t,
                editStateId: i,
                groupListingId: u,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: c,
              } = e,
              d = i,
              f = h.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), r(void 0), null != f))
                l()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var n;
                    let { guildId: t, editStateId: i, groupListingId: r } = e,
                      u = h.Z.getSubscriptionListing(i);
                    l()(null != u, "listing doesnt exist");
                    let a = N.n.getState().listings[i];
                    l()(null != a, "edit state does not exist");
                    let {
                        name: s,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: f,
                        priceTier: p,
                        image: _,
                        channelAccessFormat: E,
                      } = a,
                      I = {};
                    if (
                      (s !== u.name && (I.name = s),
                      c !== u.description && (I.description = c),
                      p !==
                        (null === (n = u.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (I.priceTier = p),
                      null != _ && (I.image = _),
                      null != E &&
                        (I.can_access_all_channels =
                          E === N.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let e = u.role_benefits.benefits.filter(m.rC),
                        n = u.role_benefits.benefits.filter(m.lL),
                        t = [...(null != d ? d : e), ...(null != f ? f : n)];
                      I.benefits = t;
                    }
                    return (0, o.isEmpty)(I)
                      ? u
                      : g.O0({
                          guildId: t,
                          groupListingId: r,
                          listingId: i,
                          data: I,
                        });
                  })({ guildId: t, editStateId: d, groupListingId: u });
              else {
                var p, _;
                let e = await Q({
                  guildId: t,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: a,
                });
                (d = e.id),
                  (p = i),
                  (_ = d),
                  (0, s.j)(() => {
                    N.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [_]: e.listings[p],
                        [p]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await J({ guildId: t, editStateId: d }), X(d), !0;
            } catch (e) {
              if (!("getAnyErrorMessage" in e)) throw e;
              r(e);
            } finally {
              n(!1);
            }
          }, []),
        };
      }
      function ee(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, E._k)(e, t),
          l = (0, N.n)((e) => e.editStateIdsForGroup[n]),
          o = (0, N.n)((e) => e.setEditStateIdsForGroup),
          a = (0, N.n)((e) => e.setListing),
          s = i.useMemo(
            () => [
              ...r.map((e) => {
                let { id: n } = e;
                return n;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          c = i.useCallback(() => {
            let e = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), e]);
          }, [n, o]),
          d = i.useCallback(
            (e) => {
              let t = (0, u.Z)();
              return (
                o(n, (e) => [...(null != e ? e : []), t]),
                e.listings.forEach((n) => {
                  a(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: b.Qs.CHANNEL,
                      description: e.description,
                      name: e.name,
                      emoji_name: e.emoji_name,
                    })),
                    roleIcon: { unicodeEmoji: void 0, icon: n.image },
                    roleColor: n.role_color,
                    usedTemplate: e.category,
                  }));
                }),
                t
              );
            },
            [n, o, a],
          );
        return {
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: i.useCallback(
            (e) => {
              o(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, o],
          ),
        };
      }
    },
    697227: function (e, n, t) {
      t.d(n, {
        V: function () {
          return o;
        },
        W: function () {
          return l;
        },
      });
      var i = t(512722),
        r = t.n(i);
      function l(e) {
        let n = e.items;
        return (
          r()(
            1 === n.length,
            "more than 1 subscription item for role subscription",
          ),
          n[0].planId
        );
      }
      function o(e) {
        var n;
        let t =
          null == e
            ? void 0
            : null === (n = e.renewalMutations) || void 0 === n
              ? void 0
              : n.items;
        if (null != t)
          return (
            r()(
              t.length <= 1,
              "more than 1 renewal mutation for role subscription",
            ),
            null == t ? void 0 : t[0].planId
          );
      }
    },
    403910: function (e, n, t) {
      var i = t(442837),
        r = t(339085);
      n.Z = function (e, n) {
        return (0, i.e7)(
          [r.ZP],
          () => {
            var t;
            if (null == n) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(e);
            return null !== (t = i.getById(n)) && void 0 !== t
              ? t
              : i.getByName(n);
          },
          [e, n],
        );
      };
    },
    14263: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(192379),
        r = t(442837),
        l = t(480608),
        o = t(243730);
      let u = {};
      function a(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let t = u[e];
            !(null != t && n > 0 && Date.now() - t < n) &&
              ((u[e] = Date.now()), l.E(e));
          }, [e, n]),
          t
        );
      }
    },
    570533: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(192379),
        r = t(442837),
        l = t(339085),
        o = t(889564);
      let u = [];
      function a(e) {
        let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
        return i.useMemo(
          () => (null == n ? u : n.filter((n) => (0, o.Kt)(n, e))),
          [n, e],
        );
      }
    },
    971792: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(442837),
        r = t(430824),
        l = t(584825);
      function o(e, n) {
        let t = (0, l.jO)(n);
        return (0, i.e7)([r.Z], () =>
          null != e && null != t ? r.Z.getRole(e, t.role_id) : void 0,
        );
      }
    },
    22902: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(192379),
        r = t(817460),
        l = t(293810),
        o = t(474936),
        u = t(388032);
      function a(e) {
        return i.useMemo(() => {
          var n;
          let t = l.DN.map((e) => ({
              value: e,
              label:
                e.interval === o.rV.DAY && 7 === e.interval_count
                  ? u.intl.formatToPlainString(u.t.XfSsr6, {
                      defaultLimit: (0, r.iG)(e),
                    })
                  : (0, r.iG)(e),
              isDefault: e.interval === o.rV.DAY && 7 === e.interval_count,
            })),
            i =
              null != e
                ? null ===
                    (n = t.find(
                      (n) =>
                        null != n.value &&
                        n.value.interval === e.interval &&
                        n.value.interval_count === e.interval_count,
                    )) || void 0 === n
                  ? void 0
                  : n.value
                : e;
          return { options: t, selectedOption: i };
        }, [e]);
      }
    },
    629262: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(592125);
      function l(e) {
        return (0, i.Wu)(
          [r.Z],
          () => e.filter((e) => r.Z.hasChannel(e.ref_id)),
          [e],
        );
      }
    },
    528027: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(596454),
        u = t(377171),
        a = t(403910),
        s = t(549631),
        c = t(873198);
      function d(e) {
        var n;
        let { guildId: t, emojiId: r, emojiName: d, className: f } = e,
          p = (0, a.Z)(t, r);
        return null != p || null != d
          ? (0, i.jsx)(o.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated:
                null !== (n = null == p ? void 0 : p.animated) &&
                void 0 !== n &&
                n,
              className: l()(c.emojiIcon, f),
            })
          : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(201895),
        o = t(471445),
        u = t(823379),
        a = t(303737),
        s = t(293810),
        c = t(388032),
        d = t(681027);
      function f(e) {
        let { channelId: n } = e,
          t = (0, a.m7)(n);
        if (null == t)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(c.intl.string(c.t.bz1PZW), "]"),
          });
        let u = t.isMediaChannel() ? r.ImageIcon : (0, o.Th)(t.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: t }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != u &&
                  (0, i.jsx)(u, { className: d.icon, "aria-hidden": !0 }),
                t.name,
              ],
            }),
          ],
        });
      }
      function p(e) {
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
    893729: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        o = t.n(l),
        u = t(442837),
        a = t(481060),
        s = t(518738),
        c = t(786761),
        d = t(3148),
        f = t(753206),
        p = t(594174),
        _ = t(5192),
        m = t(981631),
        g = t(388032),
        E = t(391317);
      function h(e) {
        var n;
        let {
            guildId: t,
            role: l,
            theme: h,
            content: I = g.intl.string(g.t["6OSasb"]),
            className: S,
          } = e,
          v = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
          C = _.ZP.useName(t, null, v),
          T = (0, s.Kz)(l),
          N = r.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: I,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: v,
                }),
                state: m.yb.SENT,
                id: "0",
              }),
            [v, I],
          ),
          b = {
            nick: C,
            colorString:
              null !== (n = l.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: h,
          children: (e) =>
            (0, i.jsx)("div", {
              className: o()(e, E.container, S),
              children: (0, i.jsx)(f.Z, {
                hideTimestamp: !0,
                author: b,
                roleIcon: T,
                message: N,
                isGroupStart: !0,
                disableInteraction: !0,
              }),
            }),
        });
      }
    },
    358555: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(442837),
        u = t(481060),
        a = t(666188),
        s = t(372769),
        c = t(523751),
        d = t(623624),
        f = t(290034),
        p = t(271383),
        _ = t(594174),
        m = t(267642),
        g = t(981631),
        E = t(388032),
        h = t(427542);
      function I(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: r } = e,
          l = (0, o.e7)([_.default, p.ZP], () => {
            let e = _.default.getCurrentUser();
            return p.ZP.isMember(n.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = n;
        if (0 === s && a === g.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !r &&
                (0, d.f)({
                  guildId: n.id,
                  location: {
                    section: g.jXE.GUILD_HEADER,
                    object: g.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          I = a === g.Eu4.NONE ? E.intl.string(E.t.c2wsn5) : m.nW(a),
          S = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: h.tierTooltipTitle, children: I }),
              (0, i.jsx)("div", {
                children: E.intl.format(E.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: h.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: S,
            position: "bottom",
            "aria-label": null != I ? I : "",
            children: (e) =>
              (0, i.jsx)(u.Clickable, {
                ...e,
                className: h.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(f.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: t
                    ? h.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    t && a !== g.Eu4.TIER_3
                      ? h.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function S(e) {
        let { guild: n, disableColor: t, disableBoostClick: r } = e;
        return (0, a.Z)(n)
          ? (0, i.jsx)("div", {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(h.guildBadge, { [h.disableColor]: t }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: h.guildIconContainer,
              children: (0, i.jsx)(s.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(h.guildBadge, { [h.disableColor]: t }),
              }),
            });
      }
      function v(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: r } = e;
        return (0, a.Z)(n)
          ? (0, i.jsx)(S, { guild: n, disableColor: !1, disableBoostClick: r })
          : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED)
            ? (0, i.jsx)(S, { guild: n, disableColor: !t })
            : (0, i.jsx)(I, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: r,
              });
      }
    },
    889695: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(47120),
        t(724458),
        t(653041);
      var i = t(200651),
        r = t(192379),
        l = t(658722),
        o = t.n(l),
        u = t(392711),
        a = t.n(u),
        s = t(149765),
        c = t(442837),
        d = t(481060),
        f = t(271383),
        p = t(430824),
        _ = t(594174),
        m = t(700785),
        g = t(709054),
        E = t(962086),
        h = t(160404),
        I = t(225675),
        S = t(981631),
        v = t(388032),
        C = t(679537);
      function T(e) {
        var n;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (n = e.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: e.name,
        });
      }
      function N(e) {
        let { guildId: n } = e,
          t = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
          l = (0, c.e7)([p.Z], () => p.Z.getGuild(n)),
          u = (0, c.e7)([p.Z], () => p.Z.getRoles(n)),
          { impersonateType: N, viewingRoles: b } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n),
          })),
          A = N === I.z.SERVER_SHOP,
          O = (0, c.e7)([f.ZP], () =>
            null != t ? f.ZP.getTrueMember(n, t.id) : null,
          ),
          [P, R] = (0, d.useMultiSelect)(null == b ? [] : g.default.keys(b)),
          x = r.useRef(l);
        r.useEffect(() => {
          let e = {},
            n = x.current;
          if (null != n && null != N) {
            for (let n of P) {
              let t = u[n];
              null != t && (e[n] = t);
            }
            (0, E.Zm)(n.id, { type: N, roles: e });
          }
        }, [P, N, u]);
        let L =
            null != l && null != t && null != O
              ? a()(u)
                  .filter((e) => -1 !== O.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          y = r.useMemo(
            () =>
              null != l && null != t
                ? Object.values(u)
                    .filter((e) => e.id !== l.id)
                    .filter((e) => {
                      var n;
                      return (
                        !A ||
                        (null === (n = e.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == L ? void 0 : L.id) === e.id ||
                        m.r6(l, t.id, L, e),
                    )
                : [],
            [l, t, A, L, u],
          );
        if (null == t || null == l || null == O) return null;
        let M = {};
        return (O.roles.forEach((e) => {
          let n = u[e];
          null != n && (M[n.id] = n);
        }),
        s.e$(
          m.I0({ forceRoles: M, context: l }),
          s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES),
        ) || l.isOwner(t.id))
          ? (0, i.jsx)("div", {
              className: C.container,
              children: (0, i.jsx)(d.Combobox, {
                placeholder: v.intl.string(v.t.Sojqsr),
                value: P,
                onChange: R,
                autoFocus: !0,
                children: (e) => {
                  let n = y.reduce(
                      (n, t) => (
                        o()(e.toLowerCase(), t.name.toLowerCase()) &&
                          n.push(
                            (0, i.jsxs)(
                              d.ComboboxItem,
                              {
                                value: t.id,
                                children: [
                                  (0, i.jsx)(d.ComboboxItem.Label, {
                                    children: T(t),
                                  }),
                                  (0, i.jsx)(d.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              t.id,
                            ),
                          ),
                        n
                      ),
                      [],
                    ),
                    t = u[l.getEveryoneRoleId()];
                  return (
                    null != t &&
                      n.push(
                        (0, i.jsxs)(
                          d.ComboboxItem,
                          {
                            value: t.id,
                            disabled: !0,
                            children: [
                              (0, i.jsx)(d.ComboboxItem.Label, {
                                children: T(t),
                              }),
                              (0, i.jsx)(d.ComboboxItem.Checkbox, {
                                checked: !0,
                              }),
                            ],
                          },
                          t.id,
                        ),
                      ),
                    n
                  );
                },
              }),
            })
          : (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              children: v.intl.string(v.t.MNSTbW),
            });
      }
    },
    918658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
        d: function () {
          return y;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        o = t(442837),
        u = t(692547),
        a = t(481060),
        s = t(549817),
        c = t(819553),
        d = t(17181),
        f = t(303737),
        p = t(434404),
        _ = t(703656),
        m = t(944486),
        g = t(914010),
        E = t(671533),
        h = t(259580),
        I = t(358085),
        S = t(962086),
        v = t(160404),
        C = t(889695),
        T = t(981631),
        N = t(176505),
        b = t(302463),
        A = t(293810),
        O = t(388032),
        P = t(489666);
      function R(e) {
        let { className: n, onClick: t, children: r } = e;
        return (0, i.jsx)(a.Button, {
          className: l()(P.button, n),
          innerClassName: P.buttonInner,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.WHITE,
          size: a.Button.Sizes.NONE,
          onClick: t,
          children: r,
        });
      }
      function x(e) {
        let { onClick: n } = e;
        return (0, i.jsx)(R, {
          onClick: n,
          children: O.intl.string(O.t.R9GHyc),
        });
      }
      function L() {
        let e = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
          n = (0, o.e7)([m.Z], () => m.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I,
          } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != e ? v.Z.getViewingRoles(e) : null,
            backNavigationSection: v.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && v.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && v.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let L = (function (e) {
            switch (e) {
              case T.pNK.INTEGRATIONS:
                return O.intl.string(O.t.k7LGdn);
              case T.pNK.ROLE_SUBSCRIPTIONS:
                return O.intl.string(O.t.bRqiqa);
              case T.pNK.ONBOARDING:
                return O.intl.string(O.t.qZpU3d);
              default:
                return O.intl.string(O.t.MTIXho);
            }
          })(r),
          y =
            r === T.pNK.ROLE_SUBSCRIPTIONS
              ? O.intl.string(O.t.hZUCzc)
              : O.intl.string(O.t["/djIh4"]),
          M = n === N.oC.GUILD_ONBOARDING,
          Z = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (v.Z.isFullServerPreview(e) && (0, _.uL)(T.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, S.mL)(e),
              t && p.Z.open(e, r),
              r === T.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
          };
        return (0, i.jsxs)(a.Notice, {
          color: a.NoticeColors.BRAND,
          className: P.notice,
          children: [
            (0, i.jsxs)(R, {
              onClick: () => Z({ backToSettings: !0 }),
              className: P.backButton,
              children: [
                (0, i.jsx)(E.Z, {
                  width: 16,
                  height: 16,
                  direction: E.Z.Directions.LEFT,
                  className: P.backArrow,
                }),
                L,
              ],
            }),
            M && l
              ? (0, i.jsx)("div", {
                  className: P.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: P.noticeText,
                    children: O.intl.string(O.t.PxbiAQ),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: P.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: P.noticeText,
                      children: l
                        ? O.intl.formatToPlainString(O.t["0PHahI"], {
                            numRoles: Object.keys(t).length,
                          })
                        : O.intl.formatToPlainString(O.t.vMlK8v, {
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, i.jsx)(a.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(C.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsxs)(R, {
                          onClick: n,
                          children: [
                            y,
                            (0, i.jsx)(h.Z, {
                              width: 16,
                              height: 16,
                              direction: h.Z.Directions.DOWN,
                              className: P.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    l &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: P.previewWarning,
                        text: O.intl.string(O.t.mW4DUF),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    I &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: P.previewWarning,
                        text: O.intl.formatToPlainString(O.t.eummvb, {
                          maxTiers: A.fF,
                          maxProducts: b.dD,
                        }),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            l || r === T.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(x, { onClick: () => Z({ backToSettings: !1 }) }),
          ],
        });
      }
      function y(e) {
        let { guildId: n } = e;
        return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(n))
          ? (0, i.jsx)("div", {
              className: l()(P.settingsWrapper, {
                [P.windows]: (0, I.isWindows)(),
                [P.osx]: (0, I.isMac)(),
              }),
              children: (0, i.jsx)(L, {}),
            })
          : null;
      }
    },
    690221: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        l = t(481060),
        o = t(703656),
        u = t(981631);
      n.Z = r.forwardRef(function (e, n) {
        let {
            href: t,
            children: a,
            onClick: s,
            onKeyPress: c,
            focusProps: d,
            ...f
          } = e,
          p = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != t && (0, o.uL)(t),
                  null == s || s()),
                  null == c || c(e);
            },
            [t, c, s],
          ),
          _ = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, o.uL)(t),
                  null == s || s();
            },
            [t, s],
          ),
          m = (0, i.jsx)("a", {
            ref: n,
            href: t,
            onClick: _,
            onKeyPress: p,
            ...f,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: m });
      });
    },
    628238: function (e, n, t) {
      t.d(n, {
        A: function () {
          return r;
        },
      });
      var i = t(709054);
      function r(e) {
        return !(e < i.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    753206: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        o = t.n(l),
        u = t(628238),
        a = t(492593),
        s = t(25015),
        c = t(963550),
        d = t(845080),
        f = t(916315);
      n.Z = r.memo(function (e) {
        var n;
        let {
            message: t,
            channel: r,
            compact: l,
            className: p,
            isGroupStart: _,
            hideSimpleEmbedContent: m = !0,
            disableInteraction: g,
          } = e,
          E = (0, u.A)(
            (null !== (n = t.editedTimestamp) && void 0 !== n
              ? n
              : t.timestamp
            ).valueOf(),
          ),
          { content: h } = (0, s.Z)(t, {
            hideSimpleEmbedContent: m,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: l,
          className: o()(p, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: _,
          }),
          childrenHeader: (0, d.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, h),
          disableInteraction: g,
        });
      });
    },
    963550: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(930282);
      function l(e, n) {
        let { message: t } = e;
        return (0, i.jsx)(r.ZP, { message: t, content: n });
      }
    },
    845080: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(901461),
        o = t(464891);
      let u = r.memo(o.ZP);
      function a(e) {
        let {
          message: n,
          channel: t,
          author: r,
          compact: o,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = e;
        return !(0, l.Z)(n) && (c || o)
          ? (0, i.jsx)(u, {
              message: n,
              channel: t,
              author: r,
              guildId: s,
              compact: o,
              animate: a,
              roleIcon: d,
              hideTimestamp: f,
            })
          : void 0;
      }
    },
    822070: function (e, n, t) {
      t.d(n, {
        $: function () {
          return i;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-07_referral_program_sender_incentive",
        label: "Referral Program Sender Incentive",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 0, label: "Disabled", config: { enabled: !1 } },
          { id: 1, label: "Enabled", config: { enabled: !0 } },
        ],
      });
    },
    520540: function (e, n, t) {
      t.d(n, {
        g: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var i,
        r,
        l = t(818083);
      ((i = r || (r = {}))[(i.VARIANT_1 = 0)] = "VARIANT_1"),
        (i[(i.VARIANT_2 = 1)] = "VARIANT_2");
      let o = (0, l.B)({
        kind: "user",
        id: "2024-03_referral_program_sender",
        label: "Referral Program Sender Experience",
        defaultConfig: {
          enabled: !1,
          subscriberHomeVariant: null,
          eligibleToFetch: !1,
        },
        treatments: [
          {
            id: 0,
            label: "Disabled",
            config: {
              enabled: !1,
              subscriberHomeVariant: null,
              eligibleToFetch: !0,
            },
          },
          {
            id: 1,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 0,
              eligibleToFetch: !0,
            },
          },
          {
            id: 2,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 1,
              eligibleToFetch: !0,
            },
          },
        ],
      });
    },
    91802: function (e, n, t) {
      t.d(n, {
        n: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(351402);
      function l() {
        let { localizedPricingPromo: e, hasError: n } = (0, i.cj)(
          [r.Z],
          () => ({
            localizedPricingPromo: r.Z.localizedPricingPromo,
            hasError: r.Z.localizedPricingPromoHasError,
          }),
        );
        return n ? null : e;
      }
    },
    222727: function (e, n, t) {
      t.d(n, {
        U: function () {
          return l;
        },
      });
      var i = t(990547),
        r = t(213609);
      function l(e, n) {
        (0, r.Z)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
          properties: { country_code: n, action_location: e },
        });
      }
    },
    106976: function (e, n, t) {
      t.d(n, {
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
          return p;
        },
      }),
        t(47120);
      var i = t(570140),
        r = t(821849),
        l = t(307643),
        o = t(981631);
      function u(e) {
        return {
          id: e.id,
          type: o.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: o.POd.APPLICATION,
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
        var n;
        return {
          id: e.id,
          sku: u(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (n = e.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function s(e) {
        for (let n of (i.Z.dispatch({
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
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function c(e, n) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: n,
        });
        try {
          var t;
          let r = await l.jz(e, n);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: r,
            }),
            s(null !== (t = r.subscription_listings) && void 0 !== t ? t : []),
            r
          );
        } catch (n) {
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
          let n = await l.GF(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: n,
          });
        } catch (n) {
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
      async function p(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var n;
          let t = await l.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
          });
          let o =
            null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
          await Promise.all(
            o.map((n) => {
              if (n.subscription_plans[0].id === e)
                return r.GZ(n.id, void 0, void 0, !0);
            }),
          ),
            s(o);
        } catch (e) {}
      }
    },
    488915: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      }),
        t(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = t(512722),
        c = t.n(s),
        d = t(442837),
        f = t(759174),
        p = t(570140),
        _ = t(959546),
        m = t(55563);
      function g(e) {
        return "subscription_listing:".concat(e);
      }
      function E(e) {
        return "application:".concat(e);
      }
      function h(e) {
        return "plan:".concat(e);
      }
      function I(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function S(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let v = new f.h(
          (e) => [E(e.application_id), ...e.subscription_listings_ids.map(g)],
          (e) => e.id,
        ),
        C = new f.h(
          (e) => [E(e.application_id), h(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        T = new f.h(
          (e) => [
            I(e.applicationId, e.isValid(null, m.Z), e.guildId),
            S(e.isValid(null, m.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        N = {},
        b = {};
      function A(e) {
        var n;
        for (let t of (v.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            C.set(e.id, e);
          })(t);
      }
      class O extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = N[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return v.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = v.values(g(e));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return C.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return C.values(E(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = b[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = C.values(h(e));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return T.values(I(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return T.values(S(n, e));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (u = "displayName") in (o = O)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (n.Z = new O(p.Z, {
          LOGOUT: function () {
            v.clear(), C.clear(), T.clear(), (N = {}), (b = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            N[n] = 1;
            let i = v.get(t);
            if (null != i)
              for (let e of i.subscription_listings_ids) C.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (N[n] = 2), A(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            N[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            b[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (b[n] = 2),
              t.forEach((e) => {
                let n = _.Z.createFromServer(e);
                T.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            b[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            A(n);
          },
        }));
    },
    93127: function (e, n, t) {
      t.d(n, {
        W: function () {
          return s;
        },
        _: function () {
          return c;
        },
      });
      var i = t(544891),
        r = t(570140),
        l = t(480294),
        o = t(814443),
        u = t(428598),
        a = t(981631);
      function s() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: n,
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
        return u.Z.shouldFetch() && l.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((e) => {
                      var n, t, i, r, l, o, u, a;
                      return {
                        otherUserId: e.other_user_id,
                        userSegment: e.user_segment,
                        otherUserSegment: e.other_user_segment,
                        isFriend: e.is_friend,
                        dmProbability:
                          null !== (n = e.dm_probability) && void 0 !== n
                            ? n
                            : 0,
                        dmRank:
                          null !== (t = e.dm_rank) && void 0 !== t ? t : 0,
                        vcProbability:
                          null !== (i = e.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = e.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (l = e.server_message_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        serverMessageRank:
                          null !== (o = e.server_message_rank) && void 0 !== o
                            ? o
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
    496232: function (e, n, t) {
      t.d(n, {
        K: function () {
          return i;
        },
      });
      let i = t(70956).Z.Millis.DAY;
    },
    428598: function (e, n, t) {
      let i;
      t(47120);
      var r,
        l = t(442837),
        o = t(570140),
        u = t(699516),
        a = t(496232);
      function s(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let c = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function p() {
        i = new Map(
          f.userAffinities
            .filter((e) => !u.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class _ extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              p()),
            this.syncWith([u.Z], p);
        }
        shouldFetch() {
          if (!c) return Date.now() - f.lastFetched > a.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return f;
        }
      }
      s(_, "displayName", "UserAffinitiesStoreV2"),
        s(_, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new _(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = n), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...d }), (i = new Map()), (c = !1);
          },
        }));
    },
    170671: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(692547),
        l = t(313201);
      function o(e) {
        let { isSelected: n, ...t } = e,
          o = (0, l.Dt)();
        return (0, i.jsxs)("svg", {
          ...t,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(o, ")"),
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
                    stopColor: n
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                          .css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: n
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors
                          .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: n
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
    237583: function (e, n, t) {
      t(653041), t(47120);
      var i,
        r = t(200651),
        l = t(192379),
        o = t(120356),
        u = t.n(o),
        a = t(481060),
        s = t(598077),
        c = t(908860),
        d = t(579861);
      function f(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class p extends (i = l.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: n,
              renderUser: t = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            l = e.length === n ? e.length : n - 1,
            o = 0;
          for (; o < l && o < e.length; ) {
            let n = o === e.length - 1;
            r.push(
              t(e[o] || null, n ? null : c.avatarMasked, "user-".concat(o), n),
            ),
              o++;
          }
          if (o < e.length) {
            let n = Math.min(e.length - o, 99);
            r.push(i("+".concat(n), c.moreUsers, "more-users", n));
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
            f(this, "defaultRenderUser", (e, n, t, i) => {
              let { onClick: l, size: o, guildId: f } = this.props,
                p = e instanceof s.Z ? e : null != e ? e.user : null;
              return null == p
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, n) }, t)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: p.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                      size: o,
                      "aria-label": p.username,
                      className: u()(n, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != l ? l(e, p, this._ref) : null),
                    },
                    p.id,
                  );
            });
        }
      }
      f(p, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, n, t) {
          return (0, r.jsx)("div", { className: n, children: e }, t);
        },
        size: a.AvatarSizes.SIZE_24,
      }),
        (n.Z = p);
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(325767);
      function l(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: l = "currentColor",
          foreground: o,
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(u),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: o,
            fill: l,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (e, n, t) {
      t.d(n, {
        Pv: function () {
          return l;
        },
        _j: function () {
          return o;
        },
        nm: function () {
          return u;
        },
        xS: function () {
          return a;
        },
      }),
        t(411104);
      var i = t(200651);
      t(192379);
      var r = t(239091);
      function l(e, n, l) {
        l.isGroupDM()
          ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("51269"),
                t.e("13351"),
                t.e("33862"),
                t.e("92453"),
                t.e("38718"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, i.jsx)(e, { ...t, user: n, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  t.e("50506"),
                  t.e("79695"),
                  t.e("51269"),
                  t.e("13351"),
                  t.e("33862"),
                  t.e("92453"),
                  t.e("70205"),
                  t.e("56826"),
                  t.e("71427"),
                ]).then(t.bind(t, 131404));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    user: n,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("50506"),
                    t.e("79695"),
                    t.e("51269"),
                    t.e("13351"),
                    t.e("33862"),
                    t.e("92453"),
                    t.e("13125"),
                    t.e("13441"),
                  ]).then(t.bind(t, 757387));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      user: n,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("79695"),
                    t.e("69220"),
                    t.e("50261"),
                  ]).then(t.bind(t, 881351));
                  return (t) => (0, i.jsx)(e, { ...t, user: n });
                });
      }
      function o(e, n) {
        let { user: l, channel: o, moderationAlertId: u, guildId: a, ...s } = n;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == o ? void 0 : o.getGuildId();
        null != c &&
          (0, r.jW)(e, async () => {
            let { default: e } = await Promise.all([
              t.e("13125"),
              t.e("33685"),
            ]).then(t.bind(t, 833737));
            return (n) =>
              (0, i.jsx)(e, {
                ...n,
                user: l,
                channelId: null == o ? void 0 : o.id,
                guildId: c,
                moderationAlertId: u,
                ...s,
              });
          });
      }
      function u(e, n) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: u,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = n;
        (0, r.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, i.jsx)(e, {
              ...n,
              user: l,
              guildId: o,
              analyticsLocations: u,
              onCloseContextMenu: a,
              isViewOnly: s,
            });
        });
      }
      function a(e, n, l) {
        null != l &&
          (0, r.jW)(e, async () => {
            let { default: e } = await t.e("50331").then(t.bind(t, 158195));
            return (n) => (0, i.jsx)(e, { ...n, guildId: l });
          });
      }
    },
    401653: function (e, n, t) {
      var i, r;
      t.d(n, {
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
    95930: function (e, n, t) {
      var i, r;
      t.d(n, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (e, n, t) {
      var i, r;
      t.d(n, {
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
  },
]);
//# sourceMappingURL=420bb2bc5ef469d7f472.js.map
