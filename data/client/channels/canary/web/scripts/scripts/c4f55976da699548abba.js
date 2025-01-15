"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20561"],
  {
    511293: function (t) {
      t.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (t) {
      t.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (t, e, n) {
      n(47120);
      var i,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        u = n.n(o),
        a = n(481060),
        s = n(37234),
        c = n(230711),
        d = n(981631),
        f = n(388032),
        _ = n(936644);
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class p extends (i = l.Component) {
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
        constructor(...t) {
          super(...t),
            E(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, s.jN)(d.S9g.USER_SETTINGS),
                c.Z.setSection(d.oAB.STREAMER_MODE));
            });
        }
      }
      E(p, "defaultProps", { disableButton: !1 }), (e.Z = p);
    },
    269128: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(772848),
        u = n(716886);
      let a = (0, o.Z)();
      e.Z = (t) => {
        let { open: e, className: n, withHighlight: r = !1 } = t;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(u.button, n, { [u.open]: e, [u.withHighlight]: r }),
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
    700582: function (t, e, n) {
      var i = n(200651),
        r = n(192379),
        l = n(481060),
        o = n(372900);
      e.Z = r.memo(function (t) {
        var e, n, u, a;
        let {
            user: s,
            size: c = l.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": f = !1,
            ..._
          } = t,
          E = r.useContext(o.Z);
        return (0, i.jsx)(l.Avatar, {
          src:
            ((e = s),
            (n = (0, l.getAvatarSize)(c)),
            (u = d),
            (a = E),
            e.getAvatarURL(a, n, u)),
          size: c,
          "aria-label": f ? void 0 : s.username,
          "aria-hidden": f,
          ..._,
        });
      });
    },
    935369: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(479531),
        l = n(388032);
      function o(t) {
        let [e, n] = i.useState(!1),
          [o, u] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var e = arguments.length, i = Array(e), o = 0; o < e; o++)
                i[o] = arguments[o];
              try {
                return u(null), n(!0), await t(...i);
              } catch (t) {
                t.message !== l.intl.string(l.t.N2yb9f) &&
                  u(t instanceof r.Z ? t : new r.Z(t));
              } finally {
                n(!1);
              }
            },
            [t],
          ),
          { loading: e, error: o },
        ];
      }
    },
    724757: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(924826),
        l = n(442837),
        o = n(607070);
      function u(t, e, n) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
          a = i.useCallback(
            (t) => {
              let n = document.querySelector(t),
                i = e.current;
              null != n &&
                null != i &&
                (n.focus(), i.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [e],
          ),
          s = i.useCallback(
            () =>
              new Promise((t) => {
                let n = e.current;
                if (null == n) return t();
                n.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => t()),
                });
              }),
            [e],
          ),
          c = i.useCallback(
            () =>
              new Promise((t) => {
                let n = e.current;
                if (null == n) return t();
                n.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => t()),
                });
              }),
            [e],
          );
        return (0, r.ZP)({
          id: t,
          isEnabled: u,
          setFocus: a,
          scrollToStart: s,
          scrollToEnd: c,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    357352: function (t, e, n) {
      n.d(e, {
        b: function () {
          return i;
        },
      });
      function i(t) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(t);
      }
    },
    201895: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return c;
        },
      }),
        n(653041);
      var i = n(131704),
        r = n(699516),
        l = n(594174),
        o = n(933557),
        u = n(981631),
        a = n(388032);
      function s(t) {
        let { isSubscriptionGated: e, needSubscriptionToAccess: n } = t;
        if (e)
          return n ? a.intl.string(a.t["oj+HOj"]) : a.intl.string(a.t.xI3TQU);
      }
      function c(t) {
        let e,
          {
            channel: n,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: f,
            embeddedActivitiesCount: _,
            isSubscriptionGated: E,
            needSubscriptionToAccess: p,
          } = t,
          g = (0, o.F6)(n, l.default, r.Z);
        switch (n.type) {
          case u.d4z.DM:
            e = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
          case u.d4z.GROUP_DM:
            e = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
          case u.d4z.GUILD_STORE:
            e = a.t.Bo4msr;
            break;
          case u.d4z.GUILD_DIRECTORY:
            e = a.t["92EAFx"];
            break;
          case u.d4z.GUILD_ANNOUNCEMENT:
            e = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
          case u.d4z.GUILD_VOICE:
            let S = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name }),
            ];
            if (
              (d > 0 &&
                S.push(
                  a.intl.formatToPlainString(a.t["3l1GOz"], {
                    mentionCount: d,
                  }),
                ),
              c && S.push(a.intl.string(a.t.x5zAGR)),
              null != f)
            ) {
              let t = n.userLimit;
              null != t && t > 0
                ? S.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: f,
                      limit: t,
                    }),
                  )
                : S.push(
                    a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }),
                  );
            }
            null != _ &&
              _ > 0 &&
              S.push(
                a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: _ }),
              );
            let m = s({ isSubscriptionGated: E, needSubscriptionToAccess: p });
            return null != m && S.push(m), S.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            e = a.t.TPPk2d;
            break;
          default:
            e = i.Ec.has(n.type)
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
            a.intl.formatToPlainString(e, { channelName: g, mentionCount: d }),
          ],
          h = s({ isSubscriptionGated: E, needSubscriptionToAccess: p });
        return null != h && I.push(h), I.join(", ");
      }
    },
    17079: function (t, e, n) {
      n.d(e, {
        T: function () {
          return l;
        },
      });
      var i = n(570140),
        r = n(155414);
      async function l(t, e) {
        i.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: t,
          priceTierType: e,
        });
        try {
          let n = await r.X(t, e);
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: t,
            priceTierType: e,
            priceTiers: n,
          });
        } catch (n) {
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: t,
            priceTierType: e,
          });
        }
      }
    },
    333866: function (t, e, n) {
      n.d(e, {
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
        u = n(388032);
      function a(t) {
        return {
          4: u.intl.string(u.t["5tzSRE"]),
          2: u.intl.string(u.t["WWIr5+"]),
          3: u.intl.string(u.t.WlSInZ),
          1: u.intl.string(u.t.uOU7Pz),
        }[t];
      }
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = o || (o = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let s = [4, 2, 3, 1];
    },
    76535: function (t, e, n) {
      n.d(e, {
        H: function () {
          return s;
        },
        R: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        l = n(584825),
        o = n(17079),
        u = n(281320);
      function a(t, e) {
        let n = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(t, e)),
          l = (0, r.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(t, e),
          );
        return (
          i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(t, e);
          }, [t, l, e]),
          { loading: l === u.M.FETCHING, priceTiers: n }
        );
      }
      function s(t) {
        let {
          fetchSubscriptionsSettings: e,
          loading: n,
          error: r,
        } = (0, l.JH)();
        i.useEffect(() => {
          e(t);
        }, [e, t]);
        let o = (0, l.YB)(t);
        return {
          loaded: null != o && !n,
          subscriptionsSettings: o,
          loading: n,
          error: r,
        };
      }
    },
    155414: function (t, e, n) {
      n.d(e, {
        X: function () {
          return o;
        },
      });
      var i = n(544891),
        r = n(881052),
        l = n(981631);
      let o = async (t, e) => {
        try {
          return (
            await i.tn.get({
              url: l.ANM.PRICE_TIERS,
              query: { price_tier_type: e, guild_id: t },
              rejectWithError: !1,
            })
          ).body;
        } catch (t) {
          throw new r.Hx(t);
        }
      };
    },
    281320: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = n(442837),
        c = n(570140);
      let d = new Map(),
        f = new Map();
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class _ extends (r = s.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(t, e) {
          var n, i;
          return null !==
            (i = null === (n = f.get(t)) || void 0 === n ? void 0 : n.get(e)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(t, e) {
          var n;
          return null === (n = d.get(t)) || void 0 === n ? void 0 : n.get(e);
        }
      }
      (a = "CreatorMonetizationStore"),
        (u = "displayName") in (o = _)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (e.Z = new _(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), f.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
            let { guildId: e, priceTierType: n } = t;
            !f.has(e) && f.set(e, new Map()), f.get(e).set(n, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
            let { guildId: e, priceTierType: n, priceTiers: i } = t;
            !f.has(e) && f.set(e, new Map()),
              f.get(e).set(n, 2),
              !d.has(e) && d.set(e, new Map()),
              d.get(e).set(n, i);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
            let { guildId: e, priceTierType: n } = t;
            !f.has(e) && f.set(e, new Map()), f.get(e).set(n, 2);
          },
        }));
    },
    834431: function (t, e, n) {
      n.d(e, {
        n: function () {
          return r;
        },
      });
      var i = n(506071);
      function r() {
        return (0, i.n)();
      }
    },
    166081: function (t, e, n) {
      n.d(e, {
        U: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(695346),
        l = n(73346),
        o = n(834431);
      function u(t, e) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          a = (0, o.n)(),
          s = n && a && u;
        return i.useMemo(() => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, l._W)(
              t.application_id,
              t.image_asset,
              e,
              s ? void 0 : "webp",
            );
        }, [e, t, s]);
      }
    },
    629481: function (t, e, n) {
      var i, r, l, o;
      n.d(e, {
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
    841762: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        u = n(481060),
        a = n(536995);
      function s(t) {
        let { alt: e, ...n } = t,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...n, alt: e, onLoad: () => o(!1) }),
          ],
        });
      }
      function c(t) {
        let {
          src: e,
          backgroundSrc: n,
          alt: r,
          aspectRatio: l,
          className: u,
          imageChildClassName: c,
          ...d
        } = t;
        return (0, i.jsxs)("div", {
          className: o()(a.container, u),
          children: [
            (0, i.jsx)("img", { src: n, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: a.imageContainer,
              children: (0, i.jsx)(s, {
                src: e,
                alt: r,
                className: o()(a.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    479099: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return h;
        },
        f: function () {
          return C;
        },
      }),
        n(47120);
      var i,
        r,
        l = n(200651),
        o = n(192379),
        u = n(120356),
        a = n.n(u),
        s = n(91192),
        c = n(442837),
        d = n(481060),
        f = n(239091),
        _ = n(596454),
        E = n(607070),
        p = n(339085),
        g = n(695346),
        S = n(572004),
        m = n(388032),
        I = n(282568);
      function h(t) {
        let {
            tag: e,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: h,
            onRemove: C,
            selected: T,
            ariaLabel: v,
          } = t,
          { name: N, emojiId: A, emojiName: O } = e,
          L = null != C,
          [b, P] = o.useState(!1),
          M = (0, c.e7)([p.ZP], () =>
            null != A ? p.ZP.getUsableCustomEmojiById(A) : null,
          ),
          R = L || null != h,
          y = (!L || !b) && (null != A || null != O),
          Z = 0 === i,
          U = o.useRef(null),
          D = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
          F = (t) => {
            let i = g.Sb.getSetting();
            S.wS &&
              i &&
              (0, f.jW)(t, async () => {
                let { default: t } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, l.jsx)(t, { ...n, tag: e });
              });
          },
          j = (0, l.jsxs)(l.Fragment, {
            children: [
              y
                ? (0, l.jsx)(_.Z, {
                    className: a()(I.emoji, { [I.small]: Z }),
                    emojiId: A,
                    emojiName: O,
                    animated: !!(null == M ? void 0 : M.animated),
                    size: "reaction",
                  })
                : null,
              b &&
                L &&
                (0, l.jsx)("div", {
                  className: I.closeCircle,
                  children: (0, l.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: I.close,
                  }),
                }),
              (0, l.jsx)(d.Text, {
                variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: N,
              }),
            ],
          }),
          x = {
            key: e.id,
            className: a()(
              I.pill,
              {
                [I.disabled]: r,
                [I.clickable]: R,
                [I.small]: Z,
                [I.selected]: T,
              },
              u,
            ),
            onClick: (t) => {
              null == h || h(t),
                null == C || C(e),
                !D && null != U.current && U.current.blur();
            },
            onContextMenu: (t) => F(t),
            onMouseEnter: () => L && P(!0),
            onMouseLeave: () => L && P(!1),
          },
          G = (0, s.JA)("forum-tag-".concat(e.id));
        return R
          ? (0, l.jsx)(d.Clickable, {
              ...G,
              innerRef: U,
              focusProps: { ringTarget: U },
              "aria-label":
                null != v
                  ? v
                  : m.intl.formatToPlainString(m.t.iyRTLi, { tagName: N }),
              role: "button",
              "aria-pressed": T,
              ...x,
              children: j,
            })
          : (0, l.jsx)("div", { ...x, children: j });
      }
      function C(t) {
        let { tags: e, count: n, size: i = 1 } = t,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": m.intl.string(m.t["P/y+sr"]),
          text: (0, l.jsx)(l.Fragment, {
            children: e.map((t) =>
              (0, l.jsx)(
                h,
                { tag: t, className: I.tooltipPill, size: h.Sizes.SMALL },
                t.id,
              ),
            ),
          }),
          children: (t) =>
            (0, l.jsx)("div", {
              ...t,
              className: a()(I.pill, { [I.small]: r }),
              children: (0, l.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (h.Sizes = i);
    },
    528011: function (t, e, n) {
      n.d(e, {
        g: function () {
          return g;
        },
        mI: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(149765),
        r = n(399606),
        l = n(581883),
        o = n(430824),
        u = n(496675),
        a = n(914010),
        s = n(594174),
        c = n(700785),
        d = n(709054),
        f = n(533244),
        _ = n(487419),
        E = n(676770);
      n(981631);
      function p(t) {
        let e = (0, r.e7)([o.Z, u.Z], () => {
            let e = o.Z.getGuild(t);
            if (null == e) return !1;
            let n = u.Z.getGuildPermissions(e);
            return null != n && i.Db(n, E.cv);
          }),
          n = (0, r.e7)([_.Z], () =>
            null != t ? _.Z.getGuildIncident(t) : null,
          ),
          l = null != n && (0, f.ur)(n);
        return {
          shouldShowIncidentActions: e,
          incidentData: n,
          isUnderLockdown: l,
        };
      }
      function g() {
        var t;
        let e = (function (t) {
            let e = s.default.getCurrentUser(),
              n = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((t) => o.Z.getGuild(t))) {
              if (null == r) continue;
              let l = n[r.id];
              if (
                !(
                  null == l ||
                  (!(0, f.i9)(l) && !(0, f.ur)(l)) ||
                  ((0, f.ur)(l) && r.id !== t)
                )
              ) {
                if (
                  i.Db(c.uB({ user: e, context: r, checkElevated: !1 }), E.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          n = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
          r = null != e ? n[e] : null,
          u = null != r && r.disableRaidAlertNag;
        return { show: null != e && !u, guildId: e };
      }
    },
    273504: function (t, e, n) {
      n.d(e, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return I;
        },
        Lg: function () {
          return m;
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
          return S;
        },
        Vk: function () {
          return _;
        },
        _6: function () {
          return h;
        },
        aj: function () {
          return p;
        },
        dc: function () {
          return C;
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
          return E;
        },
      });
      var i,
        r,
        l = n(401653),
        o = n(95930),
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
        E = 1,
        p = 260,
        g = 100,
        S = 1,
        m = 50,
        I = 20,
        h = 150,
        C = "automod-profile-quarantine-alert";
    },
    787824: function (t, e, n) {
      n.d(e, {
        C: function () {
          return function t(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((n, r) => {
                  let l = (0, i.camelCase)(r);
                  return (
                    "object" != typeof e[r] || Array.isArray(e[r])
                      ? (n[l] = e[r])
                      : (n[l] = t(e[r])),
                    n
                  );
                }, {});
          };
        },
        X: function () {
          return function t(e) {
            return null == e
              ? e
              : Object.keys(e).reduce((n, r) => {
                  let l = (0, i.snakeCase)(r);
                  return (
                    "object" != typeof e[r] || Array.isArray(e[r])
                      ? (n[l] = e[r])
                      : (n[l] = t(e[r])),
                    (n[l] = e[r]),
                    n
                  );
                }, {});
          };
        },
      }),
        n(724458);
      var i = n(392711);
    },
    226192: function (t, e, n) {
      n.d(e, {
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
        l = n(273504),
        o = n(388032);
      function u(t) {
        return {
          [l.jj.BLOCK_MESSAGE]: (t, e) =>
            new Promise((t) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("94005").then(n.bind(n, 144462));
                return (n) => {
                  var l;
                  return (0, i.jsx)(r, {
                    initialCustomMessage:
                      null !== (l = e.metadata.customMessage) && void 0 !== l
                        ? l
                        : "",
                    onSubmit: (i) => {
                      (e.metadata.customMessage = i), t(e), n.onClose();
                    },
                    ...n,
                    onClose: () => (t(null), n.onClose()),
                  });
                };
              });
            }),
          [l.jj.FLAG_TO_CHANNEL]: (e, o) =>
            new Promise((u) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("74543").then(n.bind(n, 643611)),
                  a = e.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                return (n) =>
                  (0, i.jsx)(r, {
                    action: o,
                    isEdit: null != a,
                    triggerType: e.triggerType,
                    guildId: t,
                    onEditChannel: (t) => {
                      (o.metadata.channelId = t),
                        e.exemptChannels.add(t),
                        u(o),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (u(null), n.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (t, e) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("78273").then(n.bind(n, 41767)),
                  u = t.actions.find(
                    (t) => t.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, i.jsx)(r, {
                    action: e,
                    isEdit: null != u,
                    triggerType: t.triggerType,
                    onUpdateDuration: (t) => {
                      null != t && (e.metadata.durationSeconds = t),
                        o(e),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (o(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function a(t, e, l, o) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("37483").then(n.bind(n, 241046));
          return (n) =>
            (0, i.jsx)(r, {
              ...n,
              automodDecision: {
                messageId: t,
                messageContent: e,
                decisionId: l,
                channel: o,
              },
            });
        });
      }
      function s(t, e) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("28382").then(n.bind(n, 537623));
          return (n) => (0, i.jsx)(r, { ...n, messageId: t, guildId: e });
        });
      }
      function c(t) {
        (0, r.openModal)((e) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t["cY+Ooa"]),
            onConfirm: t,
            cancelText: o.intl.string(o.t["ETE/oK"]),
            ...e,
            children: (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              children: o.intl.string(o.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (t, e, n) {
      n.d(e, {
        $Y: function () {
          return T;
        },
        JK: function () {
          return I;
        },
        Je: function () {
          return h;
        },
        T9: function () {
          return A;
        },
        UE: function () {
          return N;
        },
        Xx: function () {
          return v;
        },
        mm: function () {
          return C;
        },
        qY: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(544891),
        r = n(570140),
        l = n(367907),
        o = n(430824),
        u = n(496675),
        a = n(823379),
        s = n(709054),
        c = n(177862),
        d = n(787824),
        f = n(226192),
        _ = n(981631);
      function E(t) {
        return { type: t.type, metadata: (0, d.X)(t.metadata) };
      }
      function p(t) {
        var e, n;
        let i = (0, d.X)(t.triggerMetadata);
        return (
          null != i && delete i.keywordLists,
          {
            id: t.id,
            name: t.name,
            guild_id: t.guildId,
            event_type: t.eventType,
            trigger_type: t.triggerType,
            trigger_metadata: i,
            actions: t.actions.filter(a.lm).map(E),
            enabled: t.enabled,
            creator_id: t.creatorId,
            position: t.position,
            exempt_channels: Array.from(
              null !== (e = t.exemptChannels) && void 0 !== e ? e : [],
            ),
            exempt_roles: Array.from(
              null !== (n = t.exemptRoles) && void 0 !== n ? n : [],
            ),
          }
        );
      }
      function g(t) {
        return { type: t.type, metadata: (0, d.C)(t.metadata) };
      }
      function S(t) {
        var e, n, i;
        let r = {
          id:
            null !== (e = t.id) && void 0 !== e
              ? e
              : s.default.fromTimestamp(Date.now()),
          name: t.name,
          guildId: t.guild_id,
          eventType: t.event_type,
          triggerType: t.trigger_type,
          triggerMetadata: (0, d.C)(t.trigger_metadata),
          actions: t.actions.filter(a.lm).map(g),
          enabled: t.enabled,
          creatorId: t.creator_id,
          position: t.position,
          exemptChannels: new Set(
            null !== (n = t.exempt_channels) && void 0 !== n ? n : [],
          ),
          exemptRoles: new Set(
            null !== (i = t.exempt_roles) && void 0 !== i ? i : [],
          ),
        };
        return (
          null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r
        );
      }
      async function m(t) {
        let e = p(t),
          n = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: e,
            rejectWithError: !1,
          });
        return (0, d.C)(n.body);
      }
      async function I(t) {
        let e = p(t);
        return (
          delete e.id,
          S(
            (
              await i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                body: e,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function h(t) {
        let e = p(t);
        return S(
          (
            await i.tn.patch({
              url: _.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
              body: e,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function C(t, e) {
        return (
          await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(e, t),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function T(t) {
        let e = await i.tn.get({
          url: _.ANM.GUILD_AUTOMOD_RULES(t),
          rejectWithError: !1,
        });
        return Array.isArray(e.body) ? e.body.map(S) : [];
      }
      async function v(t, e, n) {
        if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, e))
          await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(e.guild_id),
            body: { message_id: t, channel_id: e.id, alert_action_type: n },
            rejectWithError: !1,
          });
      }
      function N(t, e, n) {
        let r = o.Z.getGuild(t);
        if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: e,
            }),
              i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
                rejectWithError: !0,
              }),
              n();
          });
      }
      function A(t) {
        r.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: t,
        });
      }
    },
    223606: function (t, e, n) {
      n(724458);
      var i,
        r = n(442837),
        l = n(570140),
        o = n(673750),
        u = n(786761),
        a = n(592125),
        s = n(375954),
        c = n(709054),
        d = n(539573),
        f = n(825829),
        _ = n(981631);
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let p = {},
        g = 0,
        S = {},
        m = {},
        I = (t, e) => {
          let n = (0, o.hc)(t),
            i = {
              id: n,
              isBlockedEdit: (0, o.Bz)(t),
              messageData: t,
              errorMessage: (0, d.uF)(t, e),
            };
          (p[n] = i), g++;
        },
        h = (t) => p[t],
        C = (t) => {
          null != p[t] && delete p[t], g++;
        };
      function T(t) {
        let { messageData: e, errorResponseBody: n } = t;
        return I(e, n), !0;
      }
      function v(t) {
        var e;
        let { channelId: n, messages: i } = t,
          r =
            null === (e = a.Z.getChannel(n)) || void 0 === e
              ? void 0
              : e.getGuildId();
        if (null == r) return !1;
        let l = m[r],
          o = i.reduce((t, e) => {
            var n;
            return e.type === _.uaV.AUTO_MODERATION_ACTION &&
              (null === (n = e.embeds) || void 0 === n
                ? void 0
                : n.some((t) => {
                    let { type: e } = t;
                    return e === _.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == t || -1 === c.default.compare(t, e.id)
                ? e.id
                : void 0
              : t;
          }, l);
        return null != o && m[r] !== o && ((m[r] = o), !0);
      }
      class N extends (i = r.ZP.PersistedStore) {
        initialize(t) {
          this.waitFor(s.Z),
            null != t &&
              ((p = t.automodFailedMessages),
              (S = t.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: p,
            mentionRaidDetectionByGuild: S,
            lastIncidentAlertMessage: m,
          };
        }
        getMessage(t) {
          var e;
          return null == t
            ? null
            : null !== (e = h(t)) && void 0 !== e
              ? e
              : null;
        }
        getMessagesVersion() {
          return g;
        }
        getMentionRaidDetected(t) {
          var e;
          return null !== (e = S[t]) && void 0 !== e ? e : null;
        }
        getLastIncidentAlertMessage(t) {
          var e;
          return null !== (e = m[t]) && void 0 !== e ? e : null;
        }
      }
      E(N, "displayName", "GuildAutomodMessageStore"),
        E(N, "persistKey", "GuildAutomodMessages"),
        (e.Z = new N(l.Z, {
          CONNECTION_OPEN: function (t) {
            return (p = {}), g++, !0;
          },
          LOAD_MESSAGES_SUCCESS: v,
          LOCAL_MESSAGES_LOADED: v,
          MESSAGE_CREATE: function (t) {
            let { guildId: e, message: n } = t;
            if (null == e || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((m[e] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: T,
          MESSAGE_EDIT_FAILED_AUTOMOD: T,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
            let { messageId: e } = t;
            return C(e), !0;
          },
          MESSAGE_END_EDIT: function (t) {
            let { response: e } = t;
            if (
              (null == e ? void 0 : e.body) == null ||
              e.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let n = e.body.id;
            if (null == n) return !1;
            C(n);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
            let {
              guildId: e,
              decisionId: n,
              suspiciousMentionActivityUntil: i,
            } = t;
            return (
              (S[e] = {
                guildId: e,
                decisionId: n,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
            let { guildId: e } = t;
            return delete S[e], !0;
          },
        }));
    },
    290034: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(297700),
        u = n(471885),
        a = n(981631),
        s = n(958469);
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
      function f(t) {
        let {
          premiumTier: e,
          iconBackgroundClassName: n,
          iconClassName: r,
          size: a,
        } = t;
        return (0, i.jsx)(o.Z, {
          className: l()(n, c[e]),
          size: a,
          children: (0, i.jsx)(u.Z, {
            tier: e,
            className: l()(r, s.boostedGuildIconGem, d[e]),
          }),
        });
      }
    },
    527379: function (t, e, n) {
      n.d(e, {
        Dr: function () {
          return p;
        },
        YO: function () {
          return _;
        },
        _X: function () {
          return g;
        },
        _o: function () {
          return E;
        },
        nb: function () {
          return S;
        },
        zO: function () {
          return f;
        },
      });
      var i = n(570140),
        r = n(63568),
        l = n(434404),
        o = n(703656),
        u = n(430824),
        a = n(241559),
        s = n(327999),
        c = n(981631),
        d = n(176505);
      async function f(t) {
        await i.Z.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: t,
        });
      }
      function _(t) {
        i.Z.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: t,
        });
      }
      function E(t, e) {
        let { continuationToken: n, ...r } = e;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: t,
          pagination: r,
        });
      }
      async function p(t, e) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: t,
          searchState: e,
        });
      }
      function g(t) {
        let e = (0, a.lv)(t),
          n = u.Z.getGuild(t);
        return (
          !!e &&
          null != n &&
          (((0, r.K2)(t, "Guild Sidebar") &&
            n.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
          n.hasFeature(c.oNc.COMMUNITY) ||
          n.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, o.uL)(c.Z5c.CHANNEL(t, d.oC.MEMBER_SAFETY)), !0)
            : (l.Z.open(n.id, c.pNK.MEMBERS), !0))
        );
      }
      async function S(t, e) {
        let n = await (0, s._2)(t, e);
        return 0 === n.length
          ? []
          : (await i.Z.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: t,
              memberSupplementals: n,
            }),
            n);
      }
    },
    495437: function (t, e, n) {
      n.d(e, {
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
      var i = n(570140),
        r = n(881052),
        l = n(824389);
      let o = async (t) => {
          i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
          try {
            let e = await l.uV(t);
            i.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: t,
              products: e,
            });
          } catch (e) {
            i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
          }
        },
        u = async (t, e) => {
          i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
          try {
            let n = await l.p9(t, e);
            return (
              i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: n }),
              n
            );
          } catch (t) {
            throw (
              (i.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: e,
                error: new r.Hx(t),
              }),
              t)
            );
          }
        };
      async function a(t, e, n) {
        let r = await l.Je(t, e, n);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function s(t, e) {
        return (
          await l.mh(t, e),
          i.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }),
          !0
        );
      }
    },
    267101: function (t, e, n) {
      n.d(e, {
        SO: function () {
          return g;
        },
        eD: function () {
          return f;
        },
        hO: function () {
          return _;
        },
        r: function () {
          return p;
        },
        ue: function () {
          return E;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837);
      n(935369);
      var l = n(38618),
        o = n(160404),
        u = n(496675),
        a = n(914010),
        s = n(495437),
        c = n(240864),
        d = n(981631);
      let f = (t) => {
          let e = (0, r.e7)(
              [c.Z],
              () =>
                null != t
                  ? c.Z.getGuildProductsForGuildFetchState(t)
                  : c.M.FETCHED,
              [t],
            ),
            n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
          return (
            i.useEffect(() => {
              o &&
                (e === c.M.NOT_FETCHED ||
                  (e === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(t))) &&
                n &&
                s.EB(t),
                u(!n);
            }, [t, n, e, o]),
            { listingsLoaded: e === c.M.FETCHED && !o }
          );
        },
        _ = function (t, e) {
          let { requireCurrentGuild: n } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(e);
              if ((!n || u === t) && o && i === c.M.NOT_FETCHED)
                try {
                  s.cf(t, e);
                } catch (t) {}
            }, [t, e, o, u, n]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(e))
          );
        },
        E = function (t) {
          let { publishedOnly: e } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(t, {
              publishedOnly: null != e ? e : !o.Z.isViewingServerShop(t),
            }),
          );
        },
        p = (t) =>
          (0, r.e7)([c.Z], () => (null == t ? void 0 : c.Z.getGuildProduct(t))),
        g = (t) =>
          (0, r.e7)([u.Z], () => null != t && u.Z.can(d.Plq.ADMINISTRATOR, t));
    },
    824389: function (t, e, n) {
      n.d(e, {
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
        l = n(73346),
        o = n(981631);
      let u = async (t, e, n) => {
          let {
            priceTier: l,
            imageName: u,
            createNewRole: a,
            unlinkRole: s,
            ...c
          } = n;
          try {
            return (
              await i.tn.patch({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
                body: {
                  ...c,
                  image_name: u,
                  price_tier: l,
                  create_new_role: a,
                  unlink_role: s,
                },
                rejectWithError: !1,
              })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        a = async (t, e) => {
          try {
            await i.tn.del({
              url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
              rejectWithError: !1,
            });
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        s = async (t) => {
          try {
            return (
              await (0, l.Kb)({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(t),
                rejectWithError: !1,
              })
            ).body.listings;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        c = async (t, e) => {
          try {
            return (
              await (0, l.Kb)({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
                rejectWithError: !1,
              })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        d = async (t) => {
          let { guildId: e, productId: n, attachmentId: l } = t;
          try {
            return (
              await i.tn.post({
                url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, l),
                rejectWithError: !1,
              })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        };
    },
    240864: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      }),
        n(653041),
        n(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = n(442837),
        c = n(759174),
        d = n(570140),
        f = n(70956),
        _ = n(709054);
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let E = {},
        p = {},
        g = {},
        S = 10 * f.Z.Millis.MINUTE;
      function m(t) {
        return "guild:".concat(t);
      }
      function I(t) {
        return "guild:".concat(t, ":published");
      }
      let h = new c.h(
          (t) => {
            let e = [m(t.guild_id)];
            return t.published && e.push(I(t.guild_id)), e;
          },
          (t) =>
            (function (t) {
              let e = _.default.extractTimestamp(t.id);
              return t.published ? -e : -e + 1e12;
            })(t),
        ),
        C = [];
      class T extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(t) {
          var e;
          return null !== (e = E[t]) && void 0 !== e ? e : 0;
        }
        getGuildProduct(t) {
          return h.get(t);
        }
        getGuildProductsForGuild(t, e) {
          let { publishedOnly: n } = e;
          return null == t ? C : h.values(n ? I(t) : m(t));
        }
        getGuildProductFetchState(t) {
          var e;
          return null !== (e = p[t]) && void 0 !== e ? e : 0;
        }
        isGuildProductsCacheExpired(t) {
          var e;
          return Date.now() - (null !== (e = g[t]) && void 0 !== e ? e : 0) > S;
        }
      }
      (a = "GuildProductsStore"),
        (u = "displayName") in (o = T)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (e.Z = new T(d.Z, {
          CONNECTION_OPEN: function () {
            h.clear(), (E = {}), (p = {}), (g = {});
          },
          GUILD_PRODUCTS_FETCH: function (t) {
            let { guildId: e } = t;
            (E[e] = 1),
              [...h.values(m(e))].forEach((t) => {
                h.delete(t.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
            let { guildId: e, products: n } = t;
            (E[e] = 2),
              (g[e] = Date.now()),
              n.forEach((t) => {
                h.set(t.id, t), (p[t.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
            let { guildId: e } = t;
            E[e] = 2;
          },
          GUILD_PRODUCT_CREATE: function (t) {
            let { product: e } = t;
            h.set(e.id, e);
          },
          GUILD_PRODUCT_UPDATE: function (t) {
            let { product: e } = t;
            h.set(e.id, e);
          },
          GUILD_PRODUCT_DELETE: function (t) {
            let { productId: e } = t;
            h.delete(e);
          },
          GUILD_PRODUCT_FETCH: function (t) {
            let { productId: e } = t;
            p[e] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
            let { product: e } = t;
            (p[e.id] = 2), h.set(e.id, e);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (t) {
            let { productId: e, error: n } = t;
            (p[e] = 2), 404 === n.status && h.delete(e);
          },
        }));
    },
    863663: function (t, e, n) {
      n.d(e, {
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
      var i = n(881052);
      n(496675);
      var r = n(981631),
        l = n(388032);
      let o = "_role";
      function u(t) {
        if (!(t >= 0))
          switch (-t) {
            case r.evJ.ENTITY_TOO_LARGE:
              return l.intl.string(l.t.YbdEFB);
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return l.intl.string(l.t.ZaXBoK);
            case 1:
              return l.intl.string(l.t.R0RpRU);
            default:
              return l.intl.formatToPlainString(l.t.cYwlp6, { code: -t });
          }
      }
      function a(t) {
        let { newRoleParams: e } = t;
        if (null != e && "" === e.name.trim()) {
          var n, r;
          return (
            (n = o),
            (r = l.intl.string(l.t["V0B/k5"])),
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
      function s(t) {
        var e;
        let {
            guildProductListing: n,
            name: i,
            priceTier: r,
            description: l,
            image: o,
            imageName: u,
            isImageChanged: a,
            newRoleParams: s,
            hasUnsavedAttachmentChanges: c,
          } = t,
          d = {};
        (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (d.name = i),
          (null !== (e = null == n ? void 0 : n.description) && void 0 !== e
            ? e
            : "") !== l && (d.description = l),
          (null == n ? void 0 : n.price_tier) !== r &&
            null != r &&
            (d.priceTier = r),
          null != s && "" !== s.name.trim()
            ? (d.createNewRole = !0)
            : null === s && (d.unlinkRole = !0),
          o.startsWith("data:") &&
            (a || (null == n && (Object.keys(d).length > 0 || c))) &&
            ((d.image = o), (d.imageName = u));
        let f = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: f,
          canSaveForDraft: f,
          canSaveForPublished: f,
          canPublishOrUnpublish: !(null == n || f),
        };
      }
      function c(t, e) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Z5c.GUILD_PRODUCT(t, e));
      }
    },
    676651: function (t, e, n) {
      n.d(e, {
        h: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(302463);
      function o(t, e) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await n.e("73628").then(n.bind(n, 458961));
            return (n) => (0, i.jsx)(r, { guildId: t, productId: e, ...n });
          },
          { modalKey: l.Yz },
        );
      }
    },
    942833: function (t, e, n) {
      n.d(e, {
        C: function () {
          return o;
        },
        k: function () {
          return u;
        },
      });
      var i = n(192379),
        r = n(937615),
        l = n(388032);
      function o(t) {
        return i.useMemo(() => {
          if (null == t) return;
          let e = null != t.role_id,
            n = t.attachments_count > 0;
          if (e && n) return l.intl.string(l.t.ih4QMT);
          if (e) return l.intl.string(l.t.o9xphY);
          if (n) return l.intl.string(l.t.DWYJub);
        }, [t]);
      }
      function u(t) {
        return i.useMemo(() => {
          if ((null == t ? void 0 : t.price) == null) return;
          let { amount: e, currency: n } = t.price;
          return (0, r.T4)(e, n);
        }, [t]);
      }
    },
    613810: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var r = n(481060);
      e.Z = {
        open: function (t) {
          (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e("53162").then(n.bind(n, 490576));
            return (n) => (0, i.jsx)(e, { ...t, ...n });
          });
        },
      };
    },
    391181: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return S;
        },
        m: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(481060),
        u = n(239091),
        a = n(166081),
        s = n(937615),
        c = n(942833),
        d = n(48691),
        f = n(231338),
        _ = n(388032),
        E = n(967852);
      function p(t) {
        let {
          showEditProduct: e,
          showUnpublishProduct: n,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: u,
          showReportProduct: a,
          onEditProduct: s,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: f,
          onTestDownload: p,
          onReportProduct: g,
          closePopout: S,
          onSelect: m,
        } = t;
        return (0, i.jsx)("div", {
          className: E.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: S,
            "aria-label": _.intl.string(_.t.Z146dH),
            onSelect: m,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  e &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-edit",
                      label: _.intl.string(_.t.EEfce3),
                      action: s,
                    }),
                  r &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-copy-link",
                      label: _.intl.string(_.t.XR26ur),
                      icon: o.LinkIcon,
                      action: f,
                    }),
                  l &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-test-download",
                      label: _.intl.string(_.t.aXoI6e),
                      icon: o.DownloadIcon,
                      action: p,
                    }),
                ],
              }),
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-unpublish",
                      label: _.intl.string(_.t.QrkMlJ),
                      action: c,
                    }),
                  u &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-delete",
                      label: _.intl.string(_.t.zWjqvL),
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
                    label: _.intl.string(_.t["6yUzvL"]),
                    color: "danger",
                    action: g,
                  }),
              }),
            ],
          }),
        });
      }
      function g(t) {
        let {
          product: e,
          guildId: n,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: g,
          onCopyProductLink: S,
          onTestDownload: m,
          onReportProduct: I,
        } = t;
        return (0, i.jsx)("div", {
          onClick: (t) => {
            t.stopPropagation();
          },
          children: (0, i.jsx)(o.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (t) =>
              (0, i.jsx)(p, {
                ...t,
                guildId: n,
                productId: e.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: a,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: s,
                onEditProduct: d,
                onUnpublishProduct: f,
                onDeleteProduct: g,
                onCopyLink: S,
                onTestDownload: m,
                onReportProduct: I,
              }),
            children: (t, n) => {
              let { isShown: r } = n;
              return (0, i.jsx)(o.Clickable, {
                ...t,
                "aria-label": _.intl.formatToPlainString(_.t.RtqjeH, {
                  productName: e.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: E.productActionMenuButton,
                children: (0, i.jsx)(o.MoreVerticalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: E.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function S(t) {
        let {
            product: e,
            guildId: n,
            onEditProduct: r,
            onUnpublishProduct: S,
            onDeleteProduct: m,
            onCopyProductLink: I,
            onTestDownload: h,
            disabled: C = !1,
          } = t,
          T = (0, a.U)(e, 600),
          v =
            null !== e.price_tier ? (0, s.T4)(e.price_tier, f.pK.USD) : void 0,
          N = (0, c.C)(e);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(E.productCardClickable, E.productCard, {
            [E.disabled]: C,
          }),
          onClick: C ? void 0 : r,
          onContextMenu: function (t) {
            (0, u.jW)(t, () =>
              Promise.resolve((t) =>
                (0, i.jsx)(p, {
                  ...t,
                  closePopout: u.Zy,
                  guildId: n,
                  productId: e.id,
                  showEditProduct: !0,
                  showUnpublishProduct: e.published,
                  showCopyLink: e.published,
                  showTestDownload: null != e.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: S,
                  onDeleteProduct: m,
                  onCopyLink: I,
                  onTestDownload: h,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": _.intl.formatToPlainString(_.t["X/yAKi"], {
            productName: e.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: T,
              className: E.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: E.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: E.productInfoContent,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: E.productName,
                      children: e.name,
                    }),
                    (0, i.jsx)(o.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: E.productDetails,
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: v,
                        }),
                        null != N
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: E.dotSeparator,
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
                    e.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {}),
                  ],
                }),
                !C &&
                  (0, i.jsx)(g, {
                    product: e,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: e.published,
                    showCopyLink: e.published,
                    showTestDownload: null != e.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: S,
                    onDeleteProduct: m,
                    onCopyProductLink: I,
                    onTestDownload: h,
                    onReportProduct: () => {},
                  }),
              ],
            }),
          ],
        });
      }
    },
    48691: function (t, e, n) {
      n.d(e, {
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
        l = n(44315),
        o = n(377171),
        u = n(981631),
        a = n(388032),
        s = n(931360);
      function c(t) {
        let {
          label: e,
          backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: u,
        } = t;
        return (0, i.jsxs)("div", {
          className: s.badge,
          style: { backgroundColor: n },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: s.__invalid_badgeText,
              children: e,
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
    730647: function (t, e, n) {
      n.d(e, {
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
        l = n(399606),
        o = n(38618),
        u = n(423117),
        a = n(289393);
      let s = r.createContext(void 0);
      function c(t) {
        let e = r.useContext(s);
        if (null == e)
          throw Error(
            "".concat(
              null != t ? t : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: n, fetchGroupListingsForGuild: i } = e;
        return i(), n;
      }
      function d(t) {
        var e, n;
        let {
            guildId: c,
            children: d,
            refetchOnMount: f,
            includeSoftDeleted: _,
            countryCode: E,
            dontFetchWhileTrue: p,
          } = t,
          g = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          S = (0, l.e7)([a.Z], () =>
            null != c
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(c)
              : a.M.FETCHED,
          ),
          m = r.useRef(f),
          I = r.useCallback(() => {
            if (null == c || !g || !0 === p) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(c);
            (m.current || t === a.M.NOT_FETCHED) &&
              ((m.current = !1),
              u.FP(c, { includeSoftDeleted: _, countryCode: E }));
          }, [g, c, _, E, p]);
        let h =
          ((e = S),
          (n = m),
          r.useMemo(() => e === a.M.FETCHED && !0 !== n.current, [e, n]));
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: h, fetchGroupListingsForGuild: I },
          children: d,
        });
      }
    },
    523361: function (t, e, n) {
      n.d(e, {
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
      var i = n(373228),
        r = n(388032);
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
    35125: function (t, e, n) {
      n.d(e, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return S;
        },
        eI: function () {
          return p;
        },
        vp: function () {
          return E;
        },
        y8: function () {
          return g;
        },
      });
      var i = n(367907),
        r = n(200876),
        l = n(430824),
        o = n(594174);
      n(709054), n(523361);
      var u = n(981631),
        a = n(388032);
      function s(t) {
        return t;
      }
      function c(t) {
        let {
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: o, formatParams: u } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(o, u);
      }
      function d(t) {
        let {
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: o, formatParams: u } = _({
            username: e,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(o, u);
      }
      function f(t, e) {
        var n, i;
        let r = l.Z.getGuild(t),
          o =
            null !== (n = null == e ? void 0 : e.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (i = null == e ? void 0 : e.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function _(t) {
        let e,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = t,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, o);
        return (
          (e = _ ? (E ? a.t.Iy66Mz : a.t.eCgb2d) : E ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: e,
            formatParams: {
              username: n,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: r,
              tierName: null == o ? void 0 : o.tier_name,
              months: d,
            },
          }
        );
      }
      function E(t) {
        let e,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = t,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, o);
        return (
          (e = _
            ? E
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : E
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(e, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d,
          })
        );
      }
      function p(t) {
        return (0, r.l)(t);
      }
      function g(t, e, n, r) {
        var l;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: t,
            user_id:
              null === (l = o.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: e,
            message_id: n,
            role_subscription_listing_id: r,
          },
        );
      }
      function S(t, e) {
        var n;
        return {
          guild_id: t.guild_id,
          sender:
            null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: e.author.id,
          channel_id: t.id,
          message_id: e.id,
        };
      }
    },
    817460: function (t, e, n) {
      n.d(e, {
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
      var i = n(293810),
        r = n(474936),
        l = n(388032);
      function o(t) {
        return "roles" in t
          ? "emoji-".concat(t.id)
          : ""
              .concat(t.ref_type, "-")
              .concat(t.emoji_id, "-")
              .concat(t.name, "-")
              .concat(t.ref_id);
      }
      function u(t) {
        let { interval: e, interval_count: n } = t;
        return l.intl.format(
          (function (t) {
            switch (t) {
              case r.rV.DAY:
                return l.t["3rUmPT"];
              case r.rV.MONTH:
                return l.t["zuN54+"];
              case r.rV.YEAR:
                return l.t.cuSp8f;
            }
          })(e),
          { count: n },
        );
      }
      function a(t) {
        let { interval: e, interval_count: n } = t;
        switch (e) {
          case r.rV.DAY:
            if (n > 0 && n % 7 == 0)
              return l.intl.formatToPlainString(l.t.iVZYys, { weeks: n / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: n });
          case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: n });
          case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: n });
        }
      }
      function s(t) {
        return t.ref_type === i.Qs.CHANNEL;
      }
      function c(t) {
        return t.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (t, e, n) {
      n.d(e, {
        GG: function () {
          return g;
        },
        HQ: function () {
          return C;
        },
        JH: function () {
          return N;
        },
        QV: function () {
          return v;
        },
        YB: function () {
          return T;
        },
        _1: function () {
          return h;
        },
        _k: function () {
          return E;
        },
        jO: function () {
          return p;
        },
        oC: function () {
          return A;
        },
        qi: function () {
          return S;
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
        l = n(990169),
        o = n(935369),
        u = n(38618);
      n(823379);
      var a = n(730647),
        s = n(423117),
        c = n(289393),
        d = n(697227);
      let f = [],
        _ = function (t) {
          let {
              refetchOnMount: e = !1,
              includeSoftDeleted: n = !0,
              countryCode: o,
              dontFetchWhileTrue: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            d = (0, r.e7)([u.Z], () => u.Z.isConnected()),
            f = (0, r.e7)([c.Z], () =>
              null != t
                ? c.Z.getSubscriptionGroupListingsForGuildFetchState(t)
                : c.M.FETCHED,
            ),
            _ = i.useRef(e);
          i.useEffect(() => {
            if (null == t || !d || !0 === a) return;
            let i = c.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (e || i === c.M.NOT_FETCHED) &&
              ((_.current = !1),
              s.FP(t, { includeSoftDeleted: n, countryCode: o }));
          }, [d, t, n, e, o, a]);
          let E = (0, l.Z)(_);
          return { listingsLoaded: f === c.M.FETCHED && !0 !== E };
        },
        E = function (t) {
          let { includeSoftDeleted: e = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.Wu)(
            [c.Z],
            () => {
              if (null == t) return [];
              let i = c.Z.getSubscriptionGroupListing(t);
              if (null == i) return [];
              let r = [];
              for (let t of i.subscription_listings_ids) {
                let i = c.Z.getSubscriptionListing(t);
                if (null != i && (!i.soft_deleted || !!e))
                  (i.published || n) && r.push(i);
              }
              return r;
            },
            [t, e, n],
          );
        },
        p = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionListing(t) : null,
          ),
        g = (t) => {
          let e = (0, a.f)("useGroupListingsForGuild");
          return (0, r.e7)([c.Z], () =>
            null != t && e ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
          );
        },
        S = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            _(t),
            (0, r.Wu)([c.Z], () => {
              let n =
                  null != t ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
                i = [];
              for (let t of n)
                for (let n of t.subscription_listings_ids) {
                  let t = c.Z.getSubscriptionListing(n);
                  null != t &&
                    (e.includeSoftDeleted || !t.soft_deleted) &&
                    i.push(t);
                }
              return e.includeSoftDeleted && e.sortDeletedListingsLast
                ? [
                    ...i.filter((t) => !t.soft_deleted),
                    ...i.filter((t) => t.soft_deleted),
                  ]
                : i;
            })
          );
        },
        m = (t) => {
          let [e, n] = i.useState(!1),
            l = i.useMemo(() => t.map(d.W), [t]),
            o = (0, r.Wu)(
              [c.Z],
              () =>
                l.filter(
                  (t) => !c.Z.getDidFetchListingForSubscriptionPlanId(t),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
              !e &&
                o.length > 0 &&
                (n(!0),
                Promise.all(o.map((t) => s.vY(t)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [e, o]),
            { loading: e }
          );
        },
        I = () => {
          let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            error: n,
            submitting: t,
            deleteSubscriptionListing: async (t, n, i) => {
              try {
                return e(!0), r(null), await s._d(t, n, i), !0;
              } catch (t) {
                r(t);
              } finally {
                e(!1);
              }
            },
          };
        },
        h = () => {
          let [t, e] = (0, o.Z)(s.AE),
            { loading: n, error: i } = e;
          return { error: i, submitting: n, archiveSubscriptionListing: t };
        },
        C = () => {
          let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            error: n,
            submitting: t,
            publishSubscriptionListing: async (t) => {
              let { guildId: n, groupListingId: i, listingId: l } = t;
              try {
                return (
                  e(!0),
                  r(null),
                  await s.O0({
                    guildId: n,
                    groupListingId: i,
                    listingId: l,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (t) {
                r(t);
              } finally {
                e(!1);
              }
            },
            clearError: () => r(null),
          };
        },
        T = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionSettings(t) : void 0,
          ),
        v = () => {
          let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, n) => {
              e(!0), r(null);
              try {
                await s.W2(t, n);
              } catch (t) {
                r(t);
              } finally {
                e(!1);
              }
            }, []),
            error: n,
          };
        },
        N = () => {
          let [t, e] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
              e(!0), r(null);
              try {
                await s.Qb(t);
              } catch (t) {
                r(t);
              } finally {
                e(!1);
              }
            }, []),
            error: n,
          };
        },
        A = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionTrial(t) : null,
          );
    },
    403474: function (t, e, n) {
      n.d(e, {
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
    944537: function (t, e, n) {
      n.d(e, {
        I: function () {
          return r;
        },
        n: function () {
          return u;
        },
      });
      var i,
        r,
        l = n(15729),
        o = n(731965);
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let u = (0, l.U)((t) => ({
        listings: {},
        setListing: (e, n) =>
          (0, o.j)(() =>
            t((t) => ({ listings: { ...t.listings, [e]: n(t.listings[e]) } })),
          ),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (e, n) =>
          (0, o.j)(() => {
            t((t) => ({
              editStateIdsForGroup: {
                ...t.editStateIdsForGroup,
                [e]: n(t.editStateIdsForGroup[e]),
              },
            }));
          }),
      }));
    },
    290348: function (t, e, n) {
      n.d(e, {
        B7: function () {
          return te;
        },
        Ek: function () {
          return j;
        },
        F2: function () {
          return Y;
        },
        GM: function () {
          return J;
        },
        GP: function () {
          return x;
        },
        H9: function () {
          return q;
        },
        Lo: function () {
          return X;
        },
        PK: function () {
          return Z;
        },
        R7: function () {
          return k;
        },
        TT: function () {
          return z;
        },
        UE: function () {
          return w;
        },
        XZ: function () {
          return V;
        },
        Xo: function () {
          return tt;
        },
        _T: function () {
          return R;
        },
        d9: function () {
          return U;
        },
        mR: function () {
          return y;
        },
        p9: function () {
          return D;
        },
        qs: function () {
          return F;
        },
        rU: function () {
          return K;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(512722),
        l = n.n(r),
        o = n(392711),
        u = n(772848),
        a = n(866442),
        s = n(731965),
        c = n(442837),
        d = n(80932),
        f = n(749210),
        _ = n(211266),
        E = n(339085),
        p = n(73346),
        g = n(817460),
        S = n(423117),
        m = n(584825),
        I = n(289393),
        h = n(790285),
        C = n(303737),
        T = n(971792),
        v = n(22902),
        N = n(403474),
        A = n(944537),
        O = n(293810),
        L = n(981631),
        b = n(474936);
      function P(t, e, n) {
        let r = (0, A.n)((t) => t.setListing),
          l = i.useCallback(
            (i) => {
              r(t, (t) => {
                var r;
                let l =
                  null !== (r = null == t ? void 0 : t[e]) && void 0 !== r
                    ? r
                    : n;
                return Object.assign({}, t, {
                  [e]: "function" == typeof i ? i(l) : i,
                });
              });
            },
            [r, t, e, n],
          ),
          o = (0, A.n)((n) => {
            var i;
            return null === (i = n.listings[t]) || void 0 === i ? void 0 : i[e];
          });
        return [void 0 !== o ? o : n, l];
      }
      function M(t, e) {
        let n = (0, c.e7)([I.Z], () => I.Z.getSubscriptionListing(t)),
          r = (0, _.Z)(() => e);
        return i.useMemo(() => r(n), [n, r]);
      }
      function R(t) {
        let e = M(t, (t) => {
          var e;
          return null !== (e = null == t ? void 0 : t.name) && void 0 !== e
            ? e
            : "";
        });
        return P(t, "name", e);
      }
      function y(t) {
        let e = M(t, (t) => {
          var e;
          return null == t
            ? void 0
            : null === (e = t.subscription_plans[0]) || void 0 === e
              ? void 0
              : e.price;
        });
        return P(t, "priceTier", e);
      }
      function Z(t) {
        let e = M(t, (t) => {
          var e;
          return null !== (e = null == t ? void 0 : t.description) &&
            void 0 !== e
            ? e
            : "";
        });
        return P(t, "description", e);
      }
      function U(t, e) {
        let n = M(t, (t) => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, p._W)(t.application_id, t.image_asset, e);
        });
        return P(t, "image", n);
      }
      function D(t, e) {
        let n = (0, T.Z)(e, t);
        return P(
          t,
          "roleIcon",
          i.useMemo(() => {
            var t, e;
            return {
              icon:
                null !== (t = null == n ? void 0 : n.icon) && void 0 !== t
                  ? t
                  : void 0,
              unicodeEmoji:
                null !== (e = null == n ? void 0 : n.unicodeEmoji) &&
                void 0 !== e
                  ? e
                  : void 0,
            };
          }, [n]),
        );
      }
      function F(t, e) {
        let n = (0, T.Z)(e, t),
          r = (0, A.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n
              ? void 0
              : n.roleColor;
          }),
          l = (0, A.n)((e) => {
            var n;
            return null === (n = e.listings[t]) || void 0 === n
              ? void 0
              : n.roleIcon;
          });
        return i.useMemo(() => {
          let t = { ...(null != n ? n : N.k) };
          if (void 0 !== l) {
            var e, i;
            (t.icon = null !== (e = l.icon) && void 0 !== e ? e : ""),
              (t.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t
          );
        }, [n, l, r]);
      }
      function j(t, e) {
        let n = (0, T.Z)(e, t);
        return P(
          t,
          "roleColor",
          i.useMemo(() => {
            var t;
            return null !== (t = null == n ? void 0 : n.color) && void 0 !== t
              ? t
              : L.p6O;
          }, [n]),
        );
      }
      function x(t, e) {
        let n = (0, T.Z)(e, t);
        return P(
          t,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == n
                ? A.I.SOME_CHANNELS_ACCESS
                : (0, h.MT)(n)
                  ? A.I.ALL_CHANNELS_ACCESS
                  : A.I.SOME_CHANNELS_ACCESS,
            [n],
          ),
        );
      }
      let G = [];
      function w(t) {
        let e = M(t, (t) =>
          null == t ? G : t.role_benefits.benefits.filter(g.rC),
        );
        return P(t, "channelBenefits", e);
      }
      let H = [];
      function k(t) {
        let e = M(t, (t) =>
          null == t ? H : t.role_benefits.benefits.filter(g.lL),
        );
        return P(t, "intangibleBenefits", e);
      }
      let B = new Set();
      function W(t, e) {
        return 0 === t.length
          ? B
          : new Set(
              t
                .filter((t) => t.roles.includes(e))
                .map((t) => {
                  let { id: e } = t;
                  return e;
                }),
            );
      }
      function V(t, e) {
        let n = (0, T.Z)(e, t),
          r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(e), [e]);
        return P(
          t,
          "tierEmojiIds",
          i.useMemo(() => (null == n ? B : W(r, n.id)), [r, n]),
        );
      }
      function z(t) {
        var e;
        let n = (0, m.oC)(t),
          { selectedOption: i } = (0, v.Z)(
            null !== (e = null == n ? void 0 : n.active_trial) && void 0 !== e
              ? e
              : null,
          );
        return P(t, "trialInterval", null != i ? i : null);
      }
      function Y(t) {
        var e;
        let n = (0, m.oC)(t);
        return P(
          t,
          "trialLimit",
          null !== (e = null == n ? void 0 : n.max_num_active_trial_users) &&
            void 0 !== e
            ? e
            : null,
        );
      }
      function K(t) {
        return (0, A.n)((e) => void 0 !== e.listings[t]);
      }
      function X(t) {
        return (0, A.n)((e) => {
          for (let n of t) if (void 0 !== e.listings[n]) return !0;
          return !1;
        });
      }
      function q(t) {
        let e = M(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
          [n] = P(t, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var t, i, r, l, o;
            return {
              price:
                null !== (t = null != n ? n : null == e ? void 0 : e.price) &&
                void 0 !== t
                  ? t
                  : 0,
              currency:
                null !== (i = null == e ? void 0 : e.currency) && void 0 !== i
                  ? i
                  : L.pKx.USD,
              interval:
                null !== (r = null == e ? void 0 : e.interval) && void 0 !== r
                  ? r
                  : b.rV.MONTH,
              interval_count:
                null !== (l = null == e ? void 0 : e.interval_count) &&
                void 0 !== l
                  ? l
                  : 1,
              id:
                null !== (o = null == e ? void 0 : e.id) && void 0 !== o
                  ? o
                  : "",
            };
          }, [e, n]),
        ];
      }
      function J(t) {
        var e;
        (e = t),
          (0, s.j)(() => {
            A.n.setState((t) => ({
              listings: {
                ...t.listings,
                [e]: t.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function Q(t) {
        let { guildId: e, editStateId: n } = t,
          i = I.Z.getSubscriptionListing(n);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          a = A.n.getState().listings[n];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: _,
          trialInterval: p,
          tierEmojiIds: g,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(e, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let m = I.Z.getSubscriptionTrial(u);
        if (
          ((null != _ || null != p || (null != m && null == p)) &&
            (await S.I1(e, u, { trial: p, max_num_active_trial_users: _ })),
          void 0 !== g)
        ) {
          let t = W(E.ZP.getGuildEmoji(e), r),
            n = (0, o.difference)([...g], [...t]),
            i = (0, o.difference)([...t], [...g]),
            l = n
              .map((t) => E.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null != t)
                  return (0, d.dv)({
                    guildId: e,
                    emojiId: t.id,
                    roles: [...t.roles, r],
                  });
              }),
            u = i
              .map((t) => E.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null == t) return;
                let n = t.roles.filter((t) => t !== r);
                return n.length > 0
                  ? (0, d.dv)({ guildId: e, emojiId: t.id, roles: n })
                  : (0, d.RE)(e, t.id);
              });
          await Promise.all([...l, ...u]);
        }
      }
      async function $(t) {
        let {
            guildId: e,
            editStateId: n,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = t,
          o = A.n.getState().listings[n];
        l()(null != o, "edit state does not exist");
        let {
          name: u,
          description: a,
          channelBenefits: s,
          intangibleBenefits: c,
          priceTier: d,
          image: f,
          channelAccessFormat: _,
        } = o;
        l()(null != u, "no name provided"),
          l()(null != a, "no description provided"),
          l()(null != d, "no priceTier provided"),
          l()(null != f, "no image provided");
        let E = _ === A.I.ALL_CHANNELS_ACCESS,
          p = i;
        null == p && (p = (await S.uw(e, {})).id),
          null != s && s.length > 0 && (await (0, C.r4)(e, s));
        let g = [...(null != s ? s : []), ...(null != c ? c : [])],
          m = (0, C.yL)(n, e);
        return S.dA({
          guildId: e,
          groupListingId: p,
          data: {
            can_access_all_channels: E,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d,
          },
          analyticsContext: m,
          onBeforeDispatchNewListing: r,
        });
      }
      function tt() {
        let [t, e] = i.useState(!1),
          [n, r] = i.useState();
        return {
          loading: t,
          error: n,
          handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let {
                guildId: n,
                editStateId: i,
                groupListingId: u,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: c,
              } = t,
              d = i,
              f = I.Z.getSubscriptionListing(d);
            try {
              if ((e(!0), r(void 0), null != f))
                l()(null != u, "groupListingId is null"),
                  await (function (t) {
                    var e;
                    let { guildId: n, editStateId: i, groupListingId: r } = t,
                      u = I.Z.getSubscriptionListing(i);
                    l()(null != u, "listing doesnt exist");
                    let a = A.n.getState().listings[i];
                    l()(null != a, "edit state does not exist");
                    let {
                        name: s,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: f,
                        priceTier: _,
                        image: E,
                        channelAccessFormat: p,
                      } = a,
                      m = {};
                    if (
                      (s !== u.name && (m.name = s),
                      c !== u.description && (m.description = c),
                      _ !==
                        (null === (e = u.subscription_plans[0]) || void 0 === e
                          ? void 0
                          : e.price) && (m.priceTier = _),
                      null != E && (m.image = E),
                      null != p &&
                        (m.can_access_all_channels =
                          p === A.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let t = u.role_benefits.benefits.filter(g.rC),
                        e = u.role_benefits.benefits.filter(g.lL),
                        n = [...(null != d ? d : t), ...(null != f ? f : e)];
                      m.benefits = n;
                    }
                    return (0, o.isEmpty)(m)
                      ? u
                      : S.O0({
                          guildId: n,
                          groupListingId: r,
                          listingId: i,
                          data: m,
                        });
                  })({ guildId: n, editStateId: d, groupListingId: u });
              else {
                var _, E;
                let t = await $({
                  guildId: n,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: a,
                });
                (d = t.id),
                  (_ = i),
                  (E = d),
                  (0, s.j)(() => {
                    A.n.setState((t) => ({
                      listings: {
                        ...t.listings,
                        [E]: t.listings[_],
                        [_]: void 0,
                      },
                    }));
                  }),
                  null == c || c(t);
              }
              return await Q({ guildId: n, editStateId: d }), J(d), !0;
            } catch (t) {
              if (!("getAnyErrorMessage" in t)) throw t;
              r(t);
            } finally {
              e(!1);
            }
          }, []),
        };
      }
      function te(t, e) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, m._k)(t, n),
          l = (0, A.n)((t) => t.editStateIdsForGroup[e]),
          o = (0, A.n)((t) => t.setEditStateIdsForGroup),
          a = (0, A.n)((t) => t.setListing),
          s = i.useMemo(
            () => [
              ...r.map((t) => {
                let { id: e } = t;
                return e;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          c = i.useCallback(() => {
            let t = (0, u.Z)();
            o(e, (e) => [...(null != e ? e : []), t]);
          }, [e, o]),
          d = i.useCallback(
            (t) => {
              let n = (0, u.Z)();
              return (
                o(e, (t) => [...(null != t ? t : []), n]),
                t.listings.forEach((e) => {
                  a(n, () => ({
                    name: e.name,
                    description: e.description,
                    priceTier: e.price_tier,
                    image: e.image,
                    intangibleBenefits: e.additional_perks,
                    channelBenefits: e.channels.map((t) => ({
                      ref_id: t.id,
                      ref_type: O.Qs.CHANNEL,
                      description: t.description,
                      name: t.name,
                      emoji_name: t.emoji_name,
                    })),
                    roleIcon: { unicodeEmoji: void 0, icon: e.image },
                    roleColor: e.role_color,
                    usedTemplate: t.category,
                  }));
                }),
                n
              );
            },
            [e, o, a],
          );
        return {
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: i.useCallback(
            (t) => {
              o(e, (e) => (null != e ? e : []).filter((e) => e !== t));
            },
            [e, o],
          ),
        };
      }
    },
    144507: function (t, e, n) {
      n.d(e, {
        $D: function () {
          return p;
        },
        H2: function () {
          return g;
        },
        MO: function () {
          return E;
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
        l = n(442837),
        o = n(223892),
        u = n(674180),
        a = n(496675),
        s = n(594174),
        c = n(923726),
        d = n(981631);
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
        (i[(i.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
        (i[(i.VISIBLE = 3)] = "VISIBLE");
      function f(t) {
        if (t.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (
          (function (t) {
            let {
              guild: e,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: l,
              isUserInCreatorMonetizationEligibleCountry: o,
              shouldRestrictUpdatingRoleSubscriptionSettings: u,
            } = t;
            return (
              !!i &&
              (!u || !!n) &&
              (!!(
                e.hasFeature(d.oNc.CREATOR_MONETIZABLE) ||
                e.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!e.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && n && o))
            );
          })(t)
        )
          return 3;
        let {
          guild: e,
          isOwner: n,
          isUserInCreatorMonetizationEligibleCountry: i,
          isMonetizationWaitlistEnabledForGuild: r,
          isGuildEligibleForRoleSubscriptions: l,
          isExpeditedMonetizationOnboardingGuild: o,
        } = t;
        return n && !i && r
          ? 1
          : n && r && (l || o) && !e.hasFeature(d.oNc.COMMUNITY)
            ? 2
            : 0;
      }
      function _(t) {
        return 0 !== f(t);
      }
      function E(t) {
        let e = (0, c.Bt)(null == t ? void 0 : t.id),
          n = (0, o.Ob)(t),
          i = (0, o.gS)(null == t ? void 0 : t.id),
          r = p(t),
          a = (0, l.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e && (null == t ? void 0 : t.isOwner(e)) === !0;
          }),
          d = (0, o.Sd)(),
          { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, u.gX)(
            null == t ? void 0 : t.id,
          );
        return null == t
          ? 0
          : f({
              guild: t,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: e,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: _,
            });
      }
      function p(t) {
        return (0, l.e7)([a.Z], () => g(t), [t]);
      }
      function g(t) {
        return null != t && a.Z.can(d.Plq.ADMINISTRATOR, t);
      }
    },
    697227: function (t, e, n) {
      n.d(e, {
        V: function () {
          return o;
        },
        W: function () {
          return l;
        },
      });
      var i = n(512722),
        r = n.n(i);
      function l(t) {
        let e = t.items;
        return (
          r()(
            1 === e.length,
            "more than 1 subscription item for role subscription",
          ),
          e[0].planId
        );
      }
      function o(t) {
        var e;
        let n =
          null == t
            ? void 0
            : null === (e = t.renewalMutations) || void 0 === e
              ? void 0
              : e.items;
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
    853439: function (t, e, n) {
      var i,
        r,
        l,
        o,
        u = n(442837),
        a = n(570140),
        s = n(131704),
        c = n(592125);
      let d = {},
        f = {};
      class _ extends (o = u.ZP.Store) {
        getTemplates(t) {
          return d[t];
        }
        getTemplateWithCategory(t, e) {
          var n;
          return null === (n = d[t]) || void 0 === n
            ? void 0
            : n.find((t) => t.category === e);
        }
        getChannel(t) {
          return f[t];
        }
      }
      (l = "GuildRoleSubscriptionTierTemplatesStore"),
        (r = "displayName") in (i = _)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
        (e.Z = new _(a.Z, {
          GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (t) {
            let { selectedTemplate: e, guildId: n } = t,
              i = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
            e.listings.forEach((t) => {
              t.channels.forEach((t) => {
                let e = i.find((e) => e.name === t.name);
                if (void 0 !== e) t.id = e.id;
                else if (!(t.id in f)) {
                  let e = (0, s.kt)(t);
                  f[t.id] = e;
                }
              });
            });
          },
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (t) {
            let { templates: e, guildId: n } = t;
            d[n] = e;
          },
        }));
    },
    303737: function (t, e, n) {
      n.d(e, {
        GN: function () {
          return C;
        },
        be: function () {
          return h;
        },
        g4: function () {
          return m;
        },
        m7: function () {
          return S;
        },
        r4: function () {
          return T;
        },
        sO: function () {
          return N;
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
        l = n(399606),
        o = n(570140),
        u = n(333848),
        a = n(592125),
        s = n(923726),
        c = n(289393),
        d = n(944537),
        f = n(144507),
        _ = n(853439),
        E = n(981631),
        p = n(176505);
      r().shim();
      let g = {};
      function S(t) {
        let e = (0, l.e7)([a.Z], () => a.Z.getChannel(t)),
          n = (0, l.e7)([_.Z], () => _.Z.getChannel(t));
        return null != e ? e : n;
      }
      function m(t, e, n) {
        let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(t)),
          r = (0, d.n)((e) => e.editStateIdsForGroup[t]),
          o = (0, d.n)((t) => t.listings);
        if (void 0 === n || void 0 === e) return null;
        let u = i
            .filter((t) => !t.soft_deleted && !t.archived)
            .map((t) => t.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach((t) => {
            let e = o[t],
              n = null == e ? void 0 : e.priceTier;
            null != n && a.push(n);
          });
        let s = new Set(a.concat(u));
        if (!s.has(n)) return null;
        let f = e.indexOf(n);
        if (-1 === f) return null;
        let _ = [];
        for (
          let t = f + 1;
          t < e.length && (!s.has(e[t]) && _.push(e[t]), 3 !== _.length);
          t++
        );
        return _;
      }
      function I(t) {
        let e = d.n.getState().editStateIdsForGroup[t],
          n = d.n.getState().listings,
          i = new Set();
        null != e &&
          e.forEach((t) => {
            var e;
            let r =
              null === (e = n[t]) || void 0 === e ? void 0 : e.channelBenefits;
            null == r ||
              r.forEach((t) => {
                null != _.Z.getChannel(t.ref_id) && i.add(t.ref_id);
              });
          });
        let r = [];
        for (let e of i) {
          let n = _.Z.getChannel(e);
          if (null != n) {
            let e = n.set("guild_id", t);
            r.push(e);
          }
        }
        return r;
      }
      function h(t) {
        let e = I(t);
        (g[t] = e),
          e.forEach((t) => {
            let e = t.set(
              "flags",
              p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            o.Z.dispatch({ type: "CHANNEL_CREATE", channel: e });
          });
      }
      function C(t) {
        var e;
        (null !== (e = g[t]) && void 0 !== e ? e : I(t)).forEach((t) => {
          o.Z.dispatch({ type: "CHANNEL_DELETE", channel: t });
        });
      }
      async function T(t, e) {
        let n = [],
          i = [];
        if (
          (e.forEach((e) => {
            let r = _.Z.getChannel(e.ref_id);
            null != r &&
              (n.push(
                u.Z.createRoleSubscriptionTemplateChannel(
                  t,
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
            let l = i[r].id;
            if ("fulfilled" === n.status) {
              let e = n.value.body,
                i = d.n.getState().editStateIdsForGroup[t],
                r = d.n.getState().listings;
              null != i &&
                i.forEach((t) => {
                  var n;
                  let i =
                    null === (n = r[t]) || void 0 === n
                      ? void 0
                      : n.channelBenefits;
                  null == i ||
                    i.forEach((t) => {
                      t.ref_id === l && (t.ref_id = e.id);
                    });
                });
            } else if (null != e) {
              let t = e.findIndex((t) => t.ref_id === l);
              -1 !== t && (null == e || e.splice(t, 1));
            }
          });
      }
      function v(t, e) {
        var n, i;
        let r = d.n.getState().listings[t],
          l = null == r ? void 0 : r.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let o = _.Z.getTemplateWithCategory(e, l);
        if (null == o)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let u = o.listings[0];
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
          return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        for (let t = 0; t < u.channels.length; t++) {
          let e = r.channelBenefits[t],
            n = u.channels[t];
          if (
            e.name !== n.name ||
            e.description !== n.description ||
            e.emoji_name !== n.emoji_name
          )
            return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        }
        for (let t = 0; t < u.additional_perks.length; t++) {
          let e = r.intangibleBenefits[t],
            n = u.additional_perks[t];
          if (
            e.name !== n.name ||
            e.description !== n.description ||
            e.emoji_name !== n.emoji_name
          )
            return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: o.category, hasChangeFromTemplate: !1 };
      }
      function N(t) {
        return (
          (0, f.H2)(t) &&
          t.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
          (0, s.$F)() &&
          (0, s.hQ)(t.id)
        );
      }
    },
    403910: function (t, e, n) {
      var i = n(442837),
        r = n(339085);
      e.Z = function (t, e) {
        return (0, i.e7)(
          [r.ZP],
          () => {
            var n;
            if (null == e) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(t);
            return null !== (n = i.getById(e)) && void 0 !== n
              ? n
              : i.getByName(e);
          },
          [t, e],
        );
      };
    },
    14263: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        l = n(480608),
        o = n(243730);
      let u = {};
      function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let n = u[t];
            !(null != n && e > 0 && Date.now() - n < e) &&
              ((u[t] = Date.now()), l.E(t));
          }, [t, e]),
          n
        );
      }
    },
    570533: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        l = n(339085),
        o = n(889564);
      let u = [];
      function a(t) {
        let e = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
        return i.useMemo(
          () => (null == e ? u : e.filter((e) => (0, o.Kt)(e, t))),
          [e, t],
        );
      }
    },
    971792: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(430824),
        l = n(584825);
      function o(t, e) {
        let n = (0, l.jO)(e);
        return (0, i.e7)([r.Z], () =>
          null != t && null != n ? r.Z.getRole(t, n.role_id) : void 0,
        );
      }
    },
    22902: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(817460),
        l = n(293810),
        o = n(474936),
        u = n(388032);
      function a(t) {
        return i.useMemo(() => {
          var e;
          let n = l.DN.map((t) => ({
              value: t,
              label:
                t.interval === o.rV.DAY && 7 === t.interval_count
                  ? u.intl.formatToPlainString(u.t.XfSsr6, {
                      defaultLimit: (0, r.iG)(t),
                    })
                  : (0, r.iG)(t),
              isDefault: t.interval === o.rV.DAY && 7 === t.interval_count,
            })),
            i =
              null != t
                ? null ===
                    (e = n.find(
                      (e) =>
                        null != e.value &&
                        e.value.interval === t.interval &&
                        e.value.interval_count === t.interval_count,
                    )) || void 0 === e
                  ? void 0
                  : e.value
                : t;
          return { options: n, selectedOption: i };
        }, [t]);
      }
    },
    629262: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(442837),
        r = n(592125);
      function l(t) {
        return (0, i.Wu)(
          [r.Z],
          () => t.filter((t) => r.Z.hasChannel(t.ref_id)),
          [t],
        );
      }
    },
    528027: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(596454),
        u = n(377171),
        a = n(403910),
        s = n(549631),
        c = n(475944);
      function d(t) {
        var e;
        let { guildId: n, emojiId: r, emojiName: d, className: f } = t,
          _ = (0, a.Z)(n, r);
        return null != _ || null != d
          ? (0, i.jsx)(o.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated:
                null !== (e = null == _ ? void 0 : _.animated) &&
                void 0 !== e &&
                e,
              className: l()(c.emojiIcon, f),
            })
          : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(201895),
        o = n(471445),
        u = n(823379),
        a = n(303737),
        s = n(293810),
        c = n(388032),
        d = n(543403);
      function f(t) {
        let { channelId: e } = t,
          n = (0, a.m7)(e);
        if (null == n)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(c.intl.string(c.t.bz1PZW), "]"),
          });
        let u = n.isMediaChannel() ? r.ImageIcon : (0, o.Th)(n.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: n }),
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
      function _(t) {
        switch (t.ref_type) {
          case s.Qs.CHANNEL:
            return (0, i.jsx)(f, { channelId: t.ref_id });
          case s.Qs.INTANGIBLE:
            return t.name;
          default:
            (0, u.vE)(t);
        }
      }
    },
    893729: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        u = n(442837),
        a = n(481060),
        s = n(518738),
        c = n(786761),
        d = n(3148),
        f = n(753206),
        _ = n(594174),
        E = n(5192),
        p = n(981631),
        g = n(388032),
        S = n(636682);
      function m(t) {
        var e;
        let {
            guildId: n,
            role: l,
            theme: m,
            content: I = g.intl.string(g.t["6OSasb"]),
            className: h,
          } = t,
          C = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
          T = E.ZP.useName(n, null, C),
          v = (0, s.Kz)(l),
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
                  author: C,
                }),
                state: p.yb.SENT,
                id: "0",
              }),
            [C, I],
          ),
          A = {
            nick: T,
            colorString:
              null !== (e = l.colorString) && void 0 !== e ? e : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: m,
          children: (t) =>
            (0, i.jsx)("div", {
              className: o()(t, S.container, h),
              children: (0, i.jsx)(f.Z, {
                hideTimestamp: !0,
                author: A,
                roleIcon: v,
                message: N,
                isGroupStart: !0,
                disableInteraction: !0,
              }),
            }),
        });
      }
    },
    358555: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return T;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        u = n(481060),
        a = n(540059),
        s = n(666188),
        c = n(372769),
        d = n(523751),
        f = n(623624),
        _ = n(290034),
        E = n(271383),
        p = n(594174),
        g = n(267642),
        S = n(981631),
        m = n(388032),
        I = n(13029);
      function h(t) {
        let { guild: e, isBannerVisible: n, disableBoostClick: r } = t,
          l = (0, o.e7)([p.default, E.ZP], () => {
            let t = p.default.getCurrentUser();
            return E.ZP.isMember(e.id, null == t ? void 0 : t.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = e;
        if (0 === s && a === S.Eu4.NONE) return null;
        let c = (t) => {
            t.stopPropagation(),
              t.preventDefault(),
              l &&
                !r &&
                (0, f.f)({
                  guildId: e.id,
                  location: {
                    section: S.jXE.GUILD_HEADER,
                    object: S.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          d = a === S.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : g.nW(a),
          h = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: I.tierTooltipTitle, children: d }),
              (0, i.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: I.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: h,
            position: "bottom",
            "aria-label": null != d ? d : "",
            children: (t) =>
              (0, i.jsx)(u.Clickable, {
                ...t,
                className: I.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(_.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: n
                    ? I.boostedGuildTierIconBackgroundWithVisibleBanner
                    : I.guildBadgeIcon,
                  iconClassName:
                    n && a !== S.Eu4.TIER_3
                      ? I.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function C(t) {
        let { guild: e, disableColor: n, disableBoostClick: r } = t;
        return (0, s.Z)(e)
          ? (0, i.jsx)("div", {
              className: I.guildIconV2Container,
              children: (0, i.jsx)(d.Z, {
                guild: e,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(I.guildBadge, { [I.disableColor]: n }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: I.guildIconContainer,
              children: (0, i.jsx)(c.Z, {
                guild: e,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(I.guildBadge, { [I.disableColor]: n }),
              }),
            });
      }
      function T(t) {
        let { guild: e, disableBoostClick: n, ...r } = t,
          l = !(0, a.Q3)("GuildHeaderGuildBadge") && r.isBannerVisible;
        return (0, s.Z)(e)
          ? (0, i.jsx)(C, { guild: e, disableColor: !1, disableBoostClick: n })
          : e.hasFeature(S.oNc.VERIFIED) || e.hasFeature(S.oNc.PARTNERED)
            ? (0, i.jsx)(C, { guild: e, disableColor: !l })
            : (0, i.jsx)(h, {
                guild: e,
                isBannerVisible: l,
                disableBoostClick: n,
              });
      }
    },
    690221: function (t, e, n) {
      var i = n(200651),
        r = n(192379),
        l = n(481060),
        o = n(703656),
        u = n(981631);
      e.Z = r.forwardRef(function (t, e) {
        let {
            href: n,
            children: a,
            onClick: s,
            onKeyPress: c,
            focusProps: d,
            ...f
          } = t,
          _ = r.useCallback(
            (t) => {
              if (!t.repeat)
                (t.charCode === u.yXg.SPACE || t.charCode === u.yXg.ENTER) &&
                  (t.preventDefault(),
                  null != n && (0, o.uL)(n),
                  null == s || s()),
                  null == c || c(t);
            },
            [n, c, s],
          ),
          E = r.useCallback(
            (t) => {
              if (!t.metaKey && !t.shiftKey && 0 === t.button)
                t.preventDefault(),
                  t.stopPropagation(),
                  null != n && (0, o.uL)(n),
                  null == s || s();
            },
            [n, s],
          ),
          p = (0, i.jsx)("a", {
            ref: e,
            href: n,
            onClick: E,
            onKeyPress: _,
            ...f,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: p });
      });
    },
    628238: function (t, e, n) {
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(709054);
      function r(t) {
        return !(t < i.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    753206: function (t, e, n) {
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        u = n(628238),
        a = n(492593),
        s = n(25015),
        c = n(963550),
        d = n(845080),
        f = n(831637);
      e.Z = r.memo(function (t) {
        var e;
        let {
            message: n,
            channel: r,
            compact: l,
            className: _,
            isGroupStart: E,
            hideSimpleEmbedContent: p = !0,
            disableInteraction: g,
          } = t,
          S = (0, u.A)(
            (null !== (e = n.editedTimestamp) && void 0 !== e
              ? e
              : n.timestamp
            ).valueOf(),
          ),
          { content: m } = (0, s.Z)(n, {
            hideSimpleEmbedContent: p,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: l,
          className: o()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: E,
          }),
          childrenHeader: (0, d.Z)({ ...t, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(t, m),
          disableInteraction: g,
        });
      });
    },
    963550: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(930282);
      function l(t, e) {
        let { message: n } = t;
        return (0, i.jsx)(r.ZP, { message: n, content: e });
      }
    },
    845080: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(901461),
        o = n(464891);
      let u = r.memo(o.ZP);
      function a(t) {
        let {
          message: e,
          channel: n,
          author: r,
          compact: o,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = t;
        return !(0, l.Z)(e) && (c || o)
          ? (0, i.jsx)(u, {
              message: e,
              channel: n,
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
    91802: function (t, e, n) {
      n.d(e, {
        n: function () {
          return l;
        },
      });
      var i = n(442837),
        r = n(351402);
      function l() {
        let { localizedPricingPromo: t, hasError: e } = (0, i.cj)(
          [r.Z],
          () => ({
            localizedPricingPromo: r.Z.localizedPricingPromo,
            hasError: r.Z.localizedPricingPromoHasError,
          }),
        );
        return e ? null : t;
      }
    },
    222727: function (t, e, n) {
      n.d(e, {
        U: function () {
          return l;
        },
      });
      var i = n(990547),
        r = n(213609);
      function l(t, e) {
        (0, r.Z)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
          properties: { country_code: e, action_location: t },
        });
      }
    },
    106976: function (t, e, n) {
      n.d(e, {
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
        l = n(307643),
        o = n(981631);
      function u(t) {
        return {
          id: t.id,
          type: o.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: o.POd.APPLICATION,
          name: t.name,
          summary: "",
          description: t.description,
          flags: t.sku_flags,
          manifests: [],
          available_regions: [],
          legal_notice: "",
          deleted: t.soft_deleted,
          price_tier: 0,
          show_age_gate: !1,
          restricted: !1,
        };
      }
      function a(t) {
        var e;
        return {
          id: t.id,
          sku: u(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (e = t.store_listing_benefits) && void 0 !== e ? e : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function s(t) {
        for (let e of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: t.map(u),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: t.map(a),
        }),
        t))
          i.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e.id,
            subscriptionPlans: e.subscription_plans,
          });
      }
      async function c(t, e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: e,
        });
        try {
          var n;
          let r = await l.jz(t, e);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: r,
            }),
            s(null !== (n = r.subscription_listings) && void 0 !== n ? n : []),
            r
          );
        } catch (e) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: t,
          });
        }
      }
      async function d(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: t,
        });
        try {
          let e = await l.GF(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: e,
          });
        } catch (e) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: t,
          });
        }
      }
      function f(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: t,
        });
      }
      async function _(t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: t,
        });
        try {
          var e;
          let n = await l.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let o =
            null !== (e = n.subscription_listings) && void 0 !== e ? e : [];
          await Promise.all(
            o.map((e) => {
              if (e.subscription_plans[0].id === t)
                return r.GZ(e.id, void 0, void 0, !0);
            }),
          ),
            s(o);
        } catch (t) {}
      }
    },
    488915: function (t, e, n) {
      n.d(e, {
        M: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = n(512722),
        c = n.n(s),
        d = n(442837),
        f = n(759174),
        _ = n(570140),
        E = n(959546),
        p = n(55563);
      function g(t) {
        return "subscription_listing:".concat(t);
      }
      function S(t) {
        return "application:".concat(t);
      }
      function m(t) {
        return "plan:".concat(t);
      }
      function I(t, e, n) {
        return "entitlement:".concat(t, ":").concat(n, ":").concat(e);
      }
      function h(t, e) {
        return "entitlement:".concat(e, ":").concat(t);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let C = new f.h(
          (t) => [S(t.application_id), ...t.subscription_listings_ids.map(g)],
          (t) => t.id,
        ),
        T = new f.h(
          (t) => [S(t.application_id), m(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        v = new f.h(
          (t) => [
            I(t.applicationId, t.isValid(null, p.Z), t.guildId),
            h(t.isValid(null, p.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        N = {},
        A = {};
      function O(t) {
        var e;
        for (let n of (C.set(t.id, t),
        null !== (e = t.subscription_listings) && void 0 !== e ? e : []))
          (function (t) {
            T.set(t.id, t);
          })(n);
      }
      class L extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var e;
          return null !== (e = N[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionGroupListing(t) {
          return C.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let e = C.values(g(t));
          return (
            c()(e.length <= 1, "Found multiple group listings for listing"),
            e[0]
          );
        }
        getSubscriptionListing(t) {
          return T.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return T.values(S(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var e;
          return null !== (e = A[t]) && void 0 !== e ? e : 0;
        }
        getSubscriptionListingForPlan(t) {
          let e = T.values(m(t));
          return c()(e.length <= 1, "Found multiple listings for plan"), e[0];
        }
        getApplicationEntitlementsForGuild(t, e) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return v.values(I(t, n, e));
        }
        getEntitlementsForGuild(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return v.values(h(e, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (u = "displayName") in (o = L)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
        (e.Z = new L(_.Z, {
          LOGOUT: function () {
            C.clear(), T.clear(), v.clear(), (N = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: e, groupListingId: n } = t;
            N[e] = 1;
            let i = C.get(n);
            if (null != i)
              for (let t of i.subscription_listings_ids) T.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: e, groupListing: n } = t;
            (N[e] = 2), O(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: e } = t;
            N[e] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: e } = t;
            A[e] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: e, entitlements: n } = t;
            (A[e] = 2),
              n.forEach((t) => {
                let e = E.Z.createFromServer(t);
                v.set(e.id, e);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: e } = t;
            A[e] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: e } = t;
            O(e);
          },
        }));
    },
    93127: function (t, e, n) {
      n.d(e, {
        W: function () {
          return s;
        },
        _: function () {
          return c;
        },
      });
      var i = n(544891),
        r = n(570140),
        l = n(480294),
        o = n(814443),
        u = n(428598),
        a = n(981631);
      function s() {
        let t =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES,
                retries: t ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (t) => {
                  let { body: e } = t;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: e,
                  });
                },
                () => {
                  r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let t =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.shouldFetch() && l.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: t ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (t) => {
                  let { body: e } = t;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: e.user_affinities.map((t) => {
                      var e, n, i, r, l, o, u, a;
                      return {
                        otherUserId: t.other_user_id,
                        userSegment: t.user_segment,
                        otherUserSegment: t.other_user_segment,
                        isFriend: t.is_friend,
                        dmProbability:
                          null !== (e = t.dm_probability) && void 0 !== e
                            ? e
                            : 0,
                        dmRank:
                          null !== (n = t.dm_rank) && void 0 !== n ? n : 0,
                        vcProbability:
                          null !== (i = t.vc_probability) && void 0 !== i
                            ? i
                            : 0,
                        vcRank:
                          null !== (r = t.vc_rank) && void 0 !== r ? r : 0,
                        serverMessageProbability:
                          null !== (l = t.server_message_probability) &&
                          void 0 !== l
                            ? l
                            : 0,
                        serverMessageRank:
                          null !== (o = t.server_message_rank) && void 0 !== o
                            ? o
                            : 0,
                        communicationProbability:
                          null !== (u = t.communication_probability) &&
                          void 0 !== u
                            ? u
                            : 0,
                        communicationRank:
                          null !== (a = t.communication_rank) && void 0 !== a
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
    496232: function (t, e, n) {
      n.d(e, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (t, e, n) {
      n(47120);
      var i,
        r = n(442837),
        l = n(570140),
        o = n(699516),
        u = n(496232);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let s = new Map(),
        c = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function _() {
        s = new Map(
          f.userAffinities
            .filter((t) => !o.Z.isBlockedOrIgnored(t.otherUserId))
            .map((t) => [t.otherUserId, t]),
        );
      }
      class E extends (i = r.ZP.PersistedStore) {
        initialize(t) {
          this.waitFor(o.Z),
            null != t &&
              ((f.userAffinities = t.userAffinities),
              (f.lastFetched = t.lastFetched),
              _()),
            this.syncWith([o.Z], _);
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
        compare(t, e) {
          var n, i, r, l;
          return (
            (null !==
              (r =
                null === (n = s.get(e)) || void 0 === n
                  ? void 0
                  : n.communicationProbability) && void 0 !== r
              ? r
              : 0) -
            (null !==
              (l =
                null === (i = s.get(t)) || void 0 === i
                  ? void 0
                  : i.communicationProbability) && void 0 !== l
              ? l
              : 0)
          );
        }
        getUserAffinity(t) {
          return s.get(t);
        }
        getState() {
          return f;
        }
      }
      a(E, "displayName", "UserAffinitiesStoreV2"),
        a(E, "persistKey", "UserAffinitiesStoreV2"),
        (e.Z = new E(l.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (t) {
            let { affineUsers: e } = t;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = e), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...d }), (s = new Map()), (c = !1);
          },
        }));
    },
    170671: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(692547),
        l = n(313201);
      function o(t) {
        let { isSelected: e, ...n } = t,
          o = (0, l.Dt)();
        return (0, i.jsxs)("svg", {
          ...n,
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
                    stopColor: e
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                          .css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: e
                      ? r.Z.unsafe_rawColors.WHITE_500.css
                      : r.Z.unsafe_rawColors
                          .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                  }),
                  (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: e
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
    237583: function (t, e, n) {
      n(653041), n(47120);
      var i,
        r = n(200651),
        l = n(192379),
        o = n(120356),
        u = n.n(o),
        a = n(481060),
        s = n(598077),
        c = n(39485),
        d = n(642291);
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class _ extends (i = l.PureComponent) {
        renderUsers() {
          let {
              users: t,
              max: e,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            l = t.length === e ? t.length : e - 1,
            o = 0;
          for (; o < l && o < t.length; ) {
            let e = o === t.length - 1;
            r.push(
              n(t[o] || null, e ? null : c.avatarMasked, "user-".concat(o), e),
            ),
              o++;
          }
          if (o < t.length) {
            let e = Math.min(t.length - o, 99);
            r.push(i("+".concat(e), c.moreUsers, "more-users", e));
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
          let { className: t } = this.props;
          return (0, r.jsxs)("div", {
            className: u()(t, c.container),
            ref: (t) => (this._ref = t),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "_ref", void 0),
            f(this, "defaultRenderUser", (t, e, n, i) => {
              let { onClick: l, size: o, guildId: f } = this.props,
                _ = t instanceof s.Z ? t : null != t ? t.user : null;
              return null == _
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, e) }, n)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: _.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                      size: o,
                      "aria-label": _.username,
                      className: u()(e, d.cursorPointer, c.avatarSize),
                      onClick: (t) => (null != l ? l(t, _, this._ref) : null),
                    },
                    _.id,
                  );
            });
        }
      }
      f(_, "defaultProps", {
        max: 10,
        renderMoreUsers: function (t, e, n) {
          return (0, r.jsx)("div", { className: e, children: t }, n);
        },
        size: a.AvatarSizes.SIZE_24,
      }),
        (e.Z = _);
    },
    4912: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(331595);
      function l(t) {
        let {
          width: e = 14,
          height: n = 14,
          color: l = "currentColor",
          foreground: o,
          ...u
        } = t;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(u),
          width: e,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: o,
            fill: l,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (t, e, n) {
      n.d(e, {
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
        n(411104);
      var i = n(200651);
      n(192379);
      var r = n(239091);
      function l(t, e, l) {
        l.isGroupDM()
          ? (0, r.jW)(t, async () => {
              let { default: t } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("92453"),
                n.e("91674"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, i.jsx)(t, { ...n, user: e, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(t, async () => {
                let { default: t } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("90508"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70205"),
                  n.e("92453"),
                  n.e("56826"),
                  n.e("25913"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, i.jsx)(t, {
                    ...n,
                    user: e,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, r.jW)(t, async () => {
                  let { default: t } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("84006"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, i.jsx)(t, {
                      ...n,
                      user: e,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, r.jW)(t, async () => {
                  let { default: t } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("76747"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(t, { ...n, user: e });
                });
      }
      function o(t, e) {
        let { user: l, channel: o, moderationAlertId: u, guildId: a, ...s } = e;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == o ? void 0 : o.getGuildId();
        null != c &&
          (0, r.jW)(t, async () => {
            let { default: t } = await Promise.all([
              n.e("13125"),
              n.e("12837"),
            ]).then(n.bind(n, 833737));
            return (e) =>
              (0, i.jsx)(t, {
                ...e,
                user: l,
                channelId: null == o ? void 0 : o.id,
                guildId: c,
                moderationAlertId: u,
                ...s,
              });
          });
      }
      function u(t, e) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: u,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = e;
        (0, r.jW)(t, async () => {
          let { default: t } = await n.e("45130").then(n.bind(n, 246389));
          return (e) =>
            (0, i.jsx)(t, {
              ...e,
              user: l,
              guildId: o,
              analyticsLocations: u,
              onCloseContextMenu: a,
              isViewOnly: s,
            });
        });
      }
      function a(t, e, l) {
        null != l &&
          (0, r.jW)(t, async () => {
            let { default: t } = await n.e("50331").then(n.bind(n, 158195));
            return (e) => (0, i.jsx)(t, { ...e, guildId: l });
          });
      }
    },
    401653: function (t, e, n) {
      var i, r;
      n.d(e, {
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
    95930: function (t, e, n) {
      var i, r;
      n.d(e, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (t, e, n) {
      var i, r;
      n.d(e, {
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
//# sourceMappingURL=c4f55976da699548abba.js.map
