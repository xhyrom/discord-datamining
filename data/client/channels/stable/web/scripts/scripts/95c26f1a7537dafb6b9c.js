"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50104"],
  {
    269128: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(772848),
        u = t(841261);
      let s = (0, o.Z)();
      n.Z = (e) => {
        let { open: n, className: t, withHighlight: i = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(u.button, t, { [u.open]: n, [u.withHighlight]: i }),
          children: [
            i &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: s,
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "18",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, r.jsx)("stop", { offset: "0", stopColor: "#B473F5" }),
                    (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                  ],
                }),
              }),
            (0, r.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                (0, r.jsx)("path", { d: "M0 0h18v18H0" }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(s, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(s, ")") : "currentColor",
                  d: "M13.5 4.5l-9 9",
                  strokeLinecap: "round",
                }),
              ],
            }),
          ],
        });
      };
    },
    774078: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(470079),
        i = t(718922),
        l = t(55935),
        o = t(745735);
      function u(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          t = arguments.length > 2 ? arguments[2] : void 0,
          u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = (0, l.TD)(Date.now(), e),
          a = (0, i.Z)(),
          c = (0, r.useCallback)(() => {
            if (
              (0 !== s.days ||
                0 !== s.hours ||
                0 !== s.minutes ||
                0 !== s.seconds) &&
              !u
            )
              a(), null == t || t();
          }, [s, u, a, t]);
        return (0, o.Z)(c, u ? null : n), s;
      }
    },
    745735: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(470079),
        i = t(512722),
        l = t.n(i);
      function o(e, n) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, r.useEffect)(() => {
            if (null === n) return;
            let e = setInterval(function () {
              l()(null != t.current, "Missing callback"), t.current();
            }, n);
            return () => clearInterval(e);
          }, [n]);
      }
    },
    935369: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(479531),
        l = t(689938);
      function o(e) {
        let [n, t] = r.useState(!1),
          [o, u] = r.useState(null);
        return [
          r.useCallback(
            async function () {
              for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
              try {
                return u(null), t(!0), await e(...r);
              } catch (e) {
                e.message !== l.Z.Messages.MFA_V2_CANCELED &&
                  u(e instanceof i.Z ? e : new i.Z(e));
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
      var r = t(470079),
        i = t(924826),
        l = t(442837),
        o = t(607070);
      function u(e, n, t) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
          s = r.useCallback(
            (e) => {
              let t = document.querySelector(e),
                r = n.current;
              null != t &&
                null != r &&
                (t.focus(), r.scrollIntoViewNode({ node: t, padding: 80 }));
            },
            [n],
          ),
          a = r.useCallback(
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
          c = r.useCallback(
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
        return (0, i.ZP)({
          id: e,
          isEnabled: u,
          setFocus: s,
          scrollToStart: a,
          scrollToEnd: c,
          orientation: null == t ? void 0 : t.orientation,
        });
      }
    },
    357352: function (e, n, t) {
      t.d(n, {
        b: function () {
          return r;
        },
      });
      function r(e) {
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
      var r = t(131704),
        i = t(699516),
        l = t(594174),
        o = t(933557),
        u = t(981631),
        s = t(689938);
      function a(e) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: t } = e;
        if (n)
          return t
            ? s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED
            : s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED;
      }
      function c(e) {
        let n,
          {
            channel: t,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: _,
            embeddedActivitiesCount: E,
            isSubscriptionGated: f,
            needSubscriptionToAccess: I,
          } = e,
          S = (0, o.F6)(t, l.default, i.Z);
        switch (t.type) {
          case u.d4z.DM:
            n = c
              ? s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS
              : s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
            break;
          case u.d4z.GROUP_DM:
            n = c
              ? s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS
              : s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
            break;
          case u.d4z.GUILD_STORE:
            n = s.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
            break;
          case u.d4z.GUILD_DIRECTORY:
            n = s.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
            break;
          case u.d4z.GUILD_ANNOUNCEMENT:
            n =
              d > 0
                ? s.Z.Messages
                    .GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? s.Z.Messages
                      .GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS
                  : s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
            break;
          case u.d4z.GUILD_VOICE:
            let p = [
              s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                channelName: t.name,
              }),
            ];
            if (
              (d > 0 &&
                p.push(
                  s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format(
                    { mentionCount: d },
                  ),
                ),
              c && p.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD),
              null != _)
            ) {
              let e = t.userLimit;
              null != e && e > 0
                ? p.push(
                    s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                      userCount: _,
                      limit: e,
                    }),
                  )
                : p.push(
                    s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format(
                      { userCount: _ },
                    ),
                  );
            }
            null != E &&
              E > 0 &&
              p.push(
                s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format(
                  { activitiesCount: E },
                ),
              );
            let T = a({ isSubscriptionGated: f, needSubscriptionToAccess: I });
            return null != T && p.push(T), p.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            n = s.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
            break;
          default:
            n = r.Ec.has(t.type)
              ? d > 0
                ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS
                  : s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL
              : d > 0
                ? s.Z.Messages
                    .GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS
                : c
                  ? s.Z.Messages
                      .GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS
                  : s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL;
        }
        let C = [n.format({ channelName: S, mentionCount: d })],
          g = a({ isSubscriptionGated: f, needSubscriptionToAccess: I });
        return null != g && C.push(g), C.join(", ");
      }
    },
    17079: function (e, n, t) {
      t.d(n, {
        T: function () {
          return l;
        },
      });
      var r = t(570140),
        i = t(155414);
      async function l(e, n) {
        r.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: e,
          priceTierType: n,
        });
        try {
          let t = await i.X(e, n);
          r.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: n,
            priceTiers: t,
          });
        } catch (t) {
          r.Z.dispatch({
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
          return s;
        },
        kL: function () {
          return a;
        },
        zJ: function () {
          return l;
        },
      });
      var r,
        i,
        l,
        o,
        u = t(689938);
      function s(e) {
        return {
          4: u.Z.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
          2: u.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
          3: u.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
          1: u.Z.Messages.GUILD_STORE_SORT_OPTION_NAME,
        }[e];
      }
      ((r = l || (l = {}))[(r.NAME = 1)] = "NAME"),
        (r[(r.PRICE_ASC = 2)] = "PRICE_ASC"),
        (r[(r.PRICE_DESC = 3)] = "PRICE_DESC"),
        (r[(r.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((i = o || (o = {}))[(i.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (i[(i.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let a = [4, 2, 3, 1];
    },
    76535: function (e, n, t) {
      t.d(n, {
        H: function () {
          return a;
        },
        R: function () {
          return s;
        },
      });
      var r = t(470079),
        i = t(442837),
        l = t(584825),
        o = t(17079),
        u = t(281320);
      function s(e, n) {
        let t = (0, i.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
          l = (0, i.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(e, n),
          );
        return (
          r.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(e, n);
          }, [e, l, n]),
          { loading: l === u.M.FETCHING, priceTiers: t }
        );
      }
      function a(e) {
        let {
          fetchSubscriptionsSettings: n,
          loading: t,
          error: i,
        } = (0, l.JH)();
        r.useEffect(() => {
          n(e);
        }, [n, e]);
        let o = (0, l.YB)(e);
        return {
          loaded: null != o && !t,
          subscriptionsSettings: o,
          loading: t,
          error: i,
        };
      }
    },
    155414: function (e, n, t) {
      t.d(n, {
        X: function () {
          return o;
        },
      });
      var r = t(544891),
        i = t(881052),
        l = t(981631);
      let o = async (e, n) => {
        try {
          return (
            await r.tn.get({
              url: l.ANM.PRICE_TIERS,
              query: { price_tier_type: n, guild_id: e },
            })
          ).body;
        } catch (e) {
          throw new i.Hx(e);
        }
      };
    },
    281320: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      }),
        t(47120);
      var r,
        i,
        l,
        o,
        u,
        s,
        a = t(442837),
        c = t(570140);
      let d = new Map(),
        _ = new Map();
      ((l = r || (r = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class E extends (i = a.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, n) {
          var t, r;
          return null !==
            (r = null === (t = _.get(e)) || void 0 === t ? void 0 : t.get(n)) &&
            void 0 !== r
            ? r
            : 0;
        }
        getPriceTiersForGuildAndType(e, n) {
          var t;
          return null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(n);
        }
      }
      (s = "CreatorMonetizationStore"),
        (u = "displayName") in (o = E)
          ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = s),
        (n.Z = new E(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), _.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !_.has(n) && _.set(n, new Map()), _.get(n).set(t, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: n, priceTierType: t, priceTiers: r } = e;
            !_.has(n) && _.set(n, new Map()),
              _.get(n).set(t, 2),
              !d.has(n) && d.set(n, new Map()),
              d.get(n).set(t, r);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !_.has(n) && _.set(n, new Map()), _.get(n).set(t, 2);
          },
        }));
    },
    834431: function (e, n, t) {
      t.d(n, {
        n: function () {
          return i;
        },
      });
      var r = t(506071);
      function i() {
        return (0, r.n)();
      }
    },
    166081: function (e, n, t) {
      t.d(n, {
        U: function () {
          return u;
        },
      });
      var r = t(470079),
        i = t(695346),
        l = t(73346),
        o = t(834431);
      function u(e, n) {
        let { shouldAnimate: t = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = i.QK.useSetting(),
          s = (0, o.n)(),
          a = t && s && u;
        return r.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, l._W)(
              e.application_id,
              e.image_asset,
              n,
              a ? void 0 : "webp",
            );
        }, [n, e, a]);
      }
    },
    629481: function (e, n, t) {
      var r, i, l, o;
      t.d(n, {
        Hr: function () {
          return u;
        },
        P4: function () {
          return a;
        },
        TR: function () {
          return c;
        },
        mz: function () {
          return r;
        },
        tM: function () {
          return s;
        },
        xv: function () {
          return i;
        },
      }),
        ((l = r || (r = {})).GET_STARTED_CLICK = "get_started_click"),
        (l.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (l.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (l.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((o = i || (i = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (o.SHOP_HEADER_BUTTON = "shop_header_button");
      let u = "hasClickedGuildShopProductPreviewTab",
        s = "hasClickedGuildShopChannelRow",
        a = "https://discord.com/servershop",
        c = "1 GB";
    },
    841762: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        l = t(120356),
        o = t.n(l),
        u = t(481060),
        s = t(456692);
      function a(e) {
        let { alt: n, ...t } = e,
          [l, o] = i.useState(!0);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            l &&
              (0, r.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: s.loader,
              }),
            (0, r.jsx)("img", { ...t, alt: n, onLoad: () => o(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: n,
          backgroundSrc: t,
          alt: i,
          aspectRatio: l,
          className: u,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, r.jsxs)("div", {
          className: o()(s.container, u),
          children: [
            (0, r.jsx)("img", { src: t, alt: i, className: s.backgroundImage }),
            (0, r.jsx)("div", { className: s.backgroundImageFilter }),
            (0, r.jsx)("div", {
              style: { aspectRatio: l },
              className: s.imageContainer,
              children: (0, r.jsx)(a, {
                src: n,
                alt: i,
                className: o()(s.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
        v: function () {
          return S;
        },
      }),
        t(47120);
      var r,
        i,
        l,
        o = t(735250),
        u = t(470079),
        s = t(120356),
        a = t.n(s),
        c = t(536640),
        d = t(481060),
        _ = t(981631),
        E = t(689938),
        f = t(404934);
      function I(e, n, t) {
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
      ((l = r || (r = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let S = {
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
          let { isDisabled: t, menuIsOpen: r } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? "4px 4px 0 0" : "4px",
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
          let { isSelected: t, isFocused: r } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : r
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
      class p extends (i = u.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: r,
              valueRenderer: i,
              optionRenderer: l,
              multiValueRenderer: u,
              options: s,
              value: _,
              autofocus: I,
              disabled: p,
              clearable: T,
              searchable: C,
              styleOverrides: g,
              isMulti: N,
              placeholder: m,
              filterOption: A,
              closeMenuOnSelect: h = !0,
              ...v
            } = this.props,
            L = { ...v };
          null != I && (L.autoFocus = I),
            null != p && (L.isDisabled = p),
            null != T && (L.isClearable = T),
            null != C && (L.isSearchable = C);
          let O = { IndicatorSeparator: () => null };
          null != l &&
            (O.Option = (e) =>
              (0, o.jsx)(c.wx.Option, { ...e, children: l(e.data) })),
            null != i &&
              (O.SingleValue = (e) =>
                (0, o.jsx)(c.wx.SingleValue, { ...e, children: i(e.data) })),
            null != u && (O.MultiValue = (e) => u(e.data));
          if (N && Array.isArray(_)) {
            let n = {};
            s.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = _.map((e) => n[String(e)]));
          } else e = null != _ ? s.find((e) => e.value === _) : null;
          return (0, o.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: a()(f.select, n, { [f.error]: null != r }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(c.ZP, {
                  ...L,
                  className: t,
                  ref: this._selectRef,
                  isMulti: N,
                  components: O,
                  options: s,
                  styles: null != g ? g : S,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: h,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != m ? m : E.Z.Messages.SELECT,
                  noOptionsMessage: () => E.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: A,
                }),
                null != r
                  ? (0, o.jsx)("div", {
                      className: f.errorMessage,
                      children: r,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "_selectRef", u.createRef()),
            I(this, "_containerRef", u.createRef()),
            I(this, "state", { isFocused: !1, isOpen: !1 }),
            I(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            I(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            I(this, "handleKeyDown", (e) => {
              e.which === _.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            I(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            I(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      I(p, "MenuPlacements", r);
    },
    479099: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
        f: function () {
          return N;
        },
      }),
        t(47120);
      var r,
        i,
        l = t(735250),
        o = t(470079),
        u = t(120356),
        s = t.n(u),
        a = t(91192),
        c = t(442837),
        d = t(481060),
        _ = t(239091),
        E = t(596454),
        f = t(607070),
        I = t(339085),
        S = t(695346),
        p = t(572004),
        T = t(689938),
        C = t(813778);
      function g(e) {
        let {
            tag: n,
            size: r = 1,
            disabled: i,
            className: u,
            onClick: g,
            onRemove: N,
            selected: m,
            ariaLabel: A,
          } = e,
          { name: h, emojiId: v, emojiName: L } = n,
          O = null != N,
          [R, M] = o.useState(!1),
          D = (0, c.e7)([I.ZP], () =>
            null != v ? I.ZP.getUsableCustomEmojiById(v) : null,
          ),
          U = O || null != g,
          Z = (!O || !R) && (null != v || null != L),
          b = 0 === r,
          P = o.useRef(null),
          y = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          x = (e) => {
            let r = S.Sb.getSetting();
            p.wS &&
              r &&
              (0, _.jW)(e, async () => {
                let { default: e } = await t.e("29646").then(t.bind(t, 955116));
                return (t) => (0, l.jsx)(e, { ...t, tag: n });
              });
          },
          G = (0, l.jsxs)(l.Fragment, {
            children: [
              Z
                ? (0, l.jsx)(E.Z, {
                    className: s()(C.emoji, { [C.small]: b }),
                    emojiId: v,
                    emojiName: L,
                    animated: !!(null == D ? void 0 : D.animated),
                    size: "reaction",
                  })
                : null,
              R &&
                O &&
                (0, l.jsx)("div", {
                  className: C.closeCircle,
                  children: (0, l.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: C.close,
                  }),
                }),
              (0, l.jsx)(d.Text, {
                variant: b ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: h,
              }),
            ],
          }),
          F = {
            key: n.id,
            className: s()(
              C.pill,
              {
                [C.disabled]: i,
                [C.clickable]: U,
                [C.small]: b,
                [C.selected]: m,
              },
              u,
            ),
            onClick: (e) => {
              null == g || g(e),
                null == N || N(n),
                !y && null != P.current && P.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => O && M(!0),
            onMouseLeave: () => O && M(!1),
          },
          j = (0, a.JA)("forum-tag-".concat(n.id));
        return U
          ? (0, l.jsx)(d.Clickable, {
              ...j,
              innerRef: P,
              focusProps: { ringTarget: P },
              "aria-label":
                null != A
                  ? A
                  : T.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: h,
                    }),
              role: "button",
              "aria-pressed": m,
              ...F,
              children: G,
            })
          : (0, l.jsx)("div", { ...F, children: G });
      }
      function N(e) {
        let { tags: n, count: t, size: r = 1 } = e,
          i = 0 === r;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": T.Z.Messages.FORUM_TAGS,
          text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
              (0, l.jsx)(
                g,
                { tag: e, className: C.tooltipPill, size: g.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, l.jsx)("div", {
              ...e,
              className: s()(C.pill, { [C.small]: i }),
              children: (0, l.jsxs)(d.Text, {
                variant: i ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", t],
              }),
            }),
        });
      }
      ((i = r || (r = {}))[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (g.Sizes = r);
    },
    528011: function (e, n, t) {
      t.d(n, {
        g: function () {
          return S;
        },
        mI: function () {
          return I;
        },
      }),
        t(47120);
      var r = t(149765),
        i = t(399606),
        l = t(581883),
        o = t(430824),
        u = t(496675),
        s = t(914010),
        a = t(594174),
        c = t(700785),
        d = t(709054),
        _ = t(533244),
        E = t(487419),
        f = t(676770);
      t(981631);
      function I(e) {
        let n = (0, i.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && r.Db(t, f.cv);
          }),
          t = (0, i.e7)([E.Z], () =>
            null != e ? E.Z.getGuildIncident(e) : null,
          ),
          l = null != t && (0, _.ur)(t);
        return {
          shouldShowIncidentActions: n,
          incidentData: t,
          isUnderLockdown: l,
        };
      }
      function S() {
        var e;
        let n = (function (e) {
            let n = a.default.getCurrentUser(),
              t = E.Z.getIncidentsByGuild();
            for (let i of d.default.keys(t).map((e) => o.Z.getGuild(e))) {
              if (null == i) continue;
              let l = t[i.id];
              if (
                !(
                  null == l ||
                  (!(0, _.i9)(l) && !(0, _.ur)(l)) ||
                  ((0, _.ur)(l) && i.id !== e)
                )
              ) {
                if (
                  r.Db(c.uB({ user: n, context: i, checkElevated: !1 }), f.cv)
                )
                  return i.id;
              }
            }
            return null;
          })(s.Z.getGuildId()),
          t = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
          i = null != n ? t[n] : null,
          u = null != i && i.disableRaidAlertNag;
        return { show: null != n && !u, guildId: n };
      }
    },
    273504: function (e, n, t) {
      t.d(n, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return C;
        },
        Lg: function () {
          return T;
        },
        OU: function () {
          return S;
        },
        RH: function () {
          return s;
        },
        Ux: function () {
          return i;
        },
        VW: function () {
          return d;
        },
        Vg: function () {
          return p;
        },
        Vk: function () {
          return E;
        },
        _6: function () {
          return g;
        },
        aj: function () {
          return I;
        },
        dc: function () {
          return N;
        },
        fX: function () {
          return u.f;
        },
        hu: function () {
          return _;
        },
        jj: function () {
          return l.j;
        },
        n4: function () {
          return a;
        },
        q4: function () {
          return o.q;
        },
        uE: function () {
          return f;
        },
      });
      var r,
        i,
        l = t(401653),
        o = t(95930),
        u = t(41381);
      ((r = i || (i = {}))[(r.PROFANITY = 1)] = "PROFANITY"),
        (r[(r.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (r[(r.SLURS = 3)] = "SLURS"),
        u.f.USER_PROFILE,
        u.f.SERVER_POLICY,
        u.f.MENTION_SPAM,
        u.f.ML_SPAM,
        u.f.DEFAULT_KEYWORD_LIST,
        u.f.KEYWORD;
      let s = 1e3,
        a = 100,
        c = 1e3,
        d = 10,
        _ = 60,
        E = 1,
        f = 1,
        I = 260,
        S = 100,
        p = 1,
        T = 50,
        C = 20,
        g = 150,
        N = "automod-profile-quarantine-alert";
    },
    787824: function (e, n, t) {
      t.d(n, {
        C: function () {
          return function e(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((t, i) => {
                  let l = (0, r.camelCase)(i);
                  return (
                    "object" != typeof n[i] || Array.isArray(n[i])
                      ? (t[l] = n[i])
                      : (t[l] = e(n[i])),
                    t
                  );
                }, {});
          };
        },
        X: function () {
          return function e(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((t, i) => {
                  let l = (0, r.snakeCase)(i);
                  return (
                    "object" != typeof n[i] || Array.isArray(n[i])
                      ? (t[l] = n[i])
                      : (t[l] = e(n[i])),
                    (t[l] = n[i]),
                    t
                  );
                }, {});
          };
        },
      }),
        t(724458);
      var r = t(392711);
    },
    226192: function (e, n, t) {
      t.d(n, {
        UV: function () {
          return c;
        },
        _s: function () {
          return s;
        },
        kW: function () {
          return a;
        },
        km: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        l = t(273504),
        o = t(689938);
      function u(e) {
        return {
          [l.jj.BLOCK_MESSAGE]: (e, n) =>
            new Promise((e) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("94005").then(t.bind(t, 144462));
                return (t) => {
                  var l;
                  return (0, r.jsx)(i, {
                    initialCustomMessage:
                      null !== (l = n.metadata.customMessage) && void 0 !== l
                        ? l
                        : "",
                    onSubmit: (r) => {
                      (n.metadata.customMessage = r), e(n), t.onClose();
                    },
                    ...t,
                    onClose: () => (e(null), t.onClose()),
                  });
                };
              });
            }),
          [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("74543").then(t.bind(t, 643611)),
                  s = n.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, r.jsx)(i, {
                    action: o,
                    isEdit: null != s,
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
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("78273").then(t.bind(t, 41767)),
                  u = e.actions.find(
                    (e) => e.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (t) =>
                  (0, r.jsx)(i, {
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
      function s(e, n, l, o) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await t.e("37483").then(t.bind(t, 241046));
          return (t) =>
            (0, r.jsx)(i, {
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
      function a(e, n) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await t.e("28382").then(t.bind(t, 537623));
          return (t) => (0, r.jsx)(i, { ...t, messageId: e, guildId: n });
        });
      }
      function c(e) {
        (0, i.openModal)((n) =>
          (0, r.jsx)(i.ConfirmModal, {
            header: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: o.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: o.Z.Messages.CANCEL,
            ...n,
            children: (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              children:
                o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
            }),
          }),
        );
      }
    },
    36459: function (e, n, t) {
      t.d(n, {
        $Y: function () {
          return m;
        },
        JK: function () {
          return C;
        },
        Je: function () {
          return g;
        },
        T9: function () {
          return v;
        },
        UE: function () {
          return h;
        },
        Xx: function () {
          return A;
        },
        mm: function () {
          return N;
        },
        qY: function () {
          return T;
        },
      }),
        t(47120);
      var r = t(544891),
        i = t(570140),
        l = t(367907),
        o = t(430824),
        u = t(496675),
        s = t(823379),
        a = t(709054),
        c = t(177862),
        d = t(787824),
        _ = t(226192),
        E = t(981631);
      function f(e) {
        return { type: e.type, metadata: (0, d.X)(e.metadata) };
      }
      function I(e) {
        var n, t;
        let r = (0, d.X)(e.triggerMetadata);
        return (
          null != r && delete r.keywordLists,
          {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: r,
            actions: e.actions.filter(s.lm).map(f),
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
      function S(e) {
        return { type: e.type, metadata: (0, d.C)(e.metadata) };
      }
      function p(e) {
        var n, t, r;
        let i = {
          id:
            null !== (n = e.id) && void 0 !== n
              ? n
              : a.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, d.C)(e.trigger_metadata),
          actions: e.actions.filter(s.lm).map(S),
          enabled: e.enabled,
          creatorId: e.creator_id,
          position: e.position,
          exemptChannels: new Set(
            null !== (t = e.exempt_channels) && void 0 !== t ? t : [],
          ),
          exemptRoles: new Set(
            null !== (r = e.exempt_roles) && void 0 !== r ? r : [],
          ),
        };
        return (
          null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
        );
      }
      async function T(e) {
        let n = I(e),
          t = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: n,
          });
        return (0, d.C)(t.body);
      }
      async function C(e) {
        let n = I(e);
        return (
          delete n.id,
          p(
            (
              await r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: n,
              })
            ).body,
          )
        );
      }
      async function g(e) {
        let n = I(e);
        return p(
          (
            await r.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: n,
            })
          ).body,
        );
      }
      async function N(e, n) {
        return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
      }
      async function m(e) {
        let n = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(n.body) ? n.body.map(p) : [];
      }
      async function A(e, n, t) {
        if (!!u.Z.can(E.Plq.MANAGE_MESSAGES, n))
          await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: e, channel_id: n.id, alert_action_type: t },
          });
      }
      function h(e, n, t) {
        let i = o.Z.getGuild(e);
        if (null != i && !!u.Z.can(E.Plq.MANAGE_GUILD, i))
          (0, _.UV)(() => {
            (0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
              t();
          });
      }
      function v(e) {
        i.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
    223606: function (e, n, t) {
      t(724458);
      var r,
        i = t(442837),
        l = t(570140),
        o = t(673750),
        u = t(786761),
        s = t(592125),
        a = t(375954),
        c = t(709054),
        d = t(539573),
        _ = t(825829),
        E = t(981631);
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
      let I = {},
        S = 0,
        p = {},
        T = {},
        C = (e, n) => {
          let t = (0, o.hc)(e),
            r = {
              id: t,
              isBlockedEdit: (0, o.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, n),
            };
          (I[t] = r), S++;
        },
        g = (e) => I[e],
        N = (e) => {
          null != I[e] && delete I[e], S++;
        };
      function m(e) {
        let { messageData: n, errorResponseBody: t } = e;
        return C(n, t), !0;
      }
      function A(e) {
        var n;
        let { channelId: t, messages: r } = e,
          i =
            null === (n = s.Z.getChannel(t)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == i) return !1;
        let l = T[i],
          o = r.reduce((e, n) => {
            var t;
            return n.type === E.uaV.AUTO_MODERATION_ACTION &&
              (null === (t = n.embeds) || void 0 === t
                ? void 0
                : t.some((e) => {
                    let { type: n } = e;
                    return n === E.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === c.default.compare(e, n.id)
                ? n.id
                : void 0
              : e;
          }, l);
        return null != o && T[i] !== o && ((T[i] = o), !0);
      }
      class h extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((I = e.automodFailedMessages),
              (p = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: p,
            lastIncidentAlertMessage: T,
          };
        }
        getMessage(e) {
          var n;
          return null == e
            ? null
            : null !== (n = g(e)) && void 0 !== n
              ? n
              : null;
        }
        getMessagesVersion() {
          return S;
        }
        getMentionRaidDetected(e) {
          var n;
          return null !== (n = p[e]) && void 0 !== n ? n : null;
        }
        getLastIncidentAlertMessage(e) {
          var n;
          return null !== (n = T[e]) && void 0 !== n ? n : null;
        }
      }
      f(h, "displayName", "GuildAutomodMessageStore"),
        f(h, "persistKey", "GuildAutomodMessages"),
        (n.Z = new h(l.Z, {
          CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
          },
          LOAD_MESSAGES_SUCCESS: A,
          LOCAL_MESSAGES_LOADED: A,
          MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== E.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, u.e5)(t);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((T[n] = r.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: m,
          MESSAGE_EDIT_FAILED_AUTOMOD: m,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return N(n), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if (
              (null == n ? void 0 : n.body) == null ||
              n.body.code === E.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let t = n.body.id;
            if (null == t) return !1;
            N(t);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: n,
              decisionId: t,
              suspiciousMentionActivityUntil: r,
            } = e;
            return (
              (p[n] = {
                guildId: n,
                decisionId: t,
                suspiciousMentionActivityUntil: r,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete p[n], !0;
          },
        }));
    },
    290034: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(297700),
        u = t(471885),
        s = t(981631),
        a = t(188662);
      let c = {
          [s.Eu4.NONE]: a.iconBackgroundTierNone,
          [s.Eu4.TIER_1]: a.iconBackgroundTierOne,
          [s.Eu4.TIER_2]: a.iconBackgroundTierTwo,
          [s.Eu4.TIER_3]: a.iconBackgroundTierThree,
        },
        d = {
          [s.Eu4.NONE]: a.iconTierNone,
          [s.Eu4.TIER_1]: a.iconTierOne,
          [s.Eu4.TIER_2]: a.iconTierTwo,
          [s.Eu4.TIER_3]: a.iconTierThree,
        };
      function _(e) {
        let {
          premiumTier: n,
          iconBackgroundClassName: t,
          iconClassName: i,
          size: s,
        } = e;
        return (0, r.jsx)(o.Z, {
          className: l()(t, c[n]),
          size: s,
          children: (0, r.jsx)(u.Z, {
            tier: n,
            className: l()(i, a.boostedGuildIconGem, d[n]),
          }),
        });
      }
    },
    527379: function (e, n, t) {
      t.d(n, {
        Dr: function () {
          return f;
        },
        YO: function () {
          return _;
        },
        _X: function () {
          return I;
        },
        _o: function () {
          return E;
        },
        nb: function () {
          return S;
        },
        zO: function () {
          return d;
        },
      });
      var r = t(570140),
        i = t(434404),
        l = t(703656),
        o = t(430824),
        u = t(241559),
        s = t(327999),
        a = t(981631),
        c = t(176505);
      async function d(e) {
        await r.Z.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: e,
        });
      }
      function _(e) {
        r.Z.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: e,
        });
      }
      function E(e, n) {
        let { continuationToken: t, ...i } = n;
        r.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: i,
        });
      }
      async function f(e, n) {
        await r.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: n,
        });
      }
      function I(e) {
        let n = (0, u.lv)(e),
          t = o.Z.getGuild(e);
        return (
          !!n &&
          null != t &&
          (t.hasFeature(a.oNc.COMMUNITY) ||
          t.hasFeature(a.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, l.uL)(a.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
            : (i.Z.open(t.id, a.pNK.MEMBERS), !0))
        );
      }
      async function S(e, n) {
        let t = await (0, s._2)(e, n);
        return 0 === t.length
          ? []
          : (await r.Z.dispatch({
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
          return s;
        },
        cf: function () {
          return u;
        },
        mh: function () {
          return a;
        },
      });
      var r = t(570140),
        i = t(881052),
        l = t(824389);
      let o = async (e) => {
          r.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let n = await l.uV(e);
            r.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: e,
              products: n,
            });
          } catch (n) {
            r.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
          }
        },
        u = async (e, n) => {
          r.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: n });
          try {
            let t = await l.p9(e, n);
            return (
              r.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: t }),
              t
            );
          } catch (e) {
            throw (
              (r.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: n,
                error: new i.Hx(e),
              }),
              e)
            );
          }
        };
      async function s(e, n, t) {
        let i = await l.Je(e, n, t);
        return r.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: i }), i;
      }
      async function a(e, n) {
        return (
          await l.mh(e, n),
          r.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: n }),
          !0
        );
      }
    },
    267101: function (e, n, t) {
      t.d(n, {
        SO: function () {
          return S;
        },
        eD: function () {
          return _;
        },
        hO: function () {
          return E;
        },
        r: function () {
          return I;
        },
        ue: function () {
          return f;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(442837);
      t(935369);
      var l = t(38618),
        o = t(160404),
        u = t(496675),
        s = t(914010),
        a = t(495437),
        c = t(240864),
        d = t(981631);
      let _ = (e) => {
          let n = (0, i.e7)(
              [c.Z],
              () =>
                null != e
                  ? c.Z.getGuildProductsForGuildFetchState(e)
                  : c.M.FETCHED,
              [e],
            ),
            t = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = r.useState(!0);
          return (
            r.useEffect(() => {
              o &&
                (n === c.M.NOT_FETCHED ||
                  (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                t &&
                a.EB(e),
                u(!t);
            }, [e, t, n, o]),
            { listingsLoaded: n === c.M.FETCHED && !o }
          );
        },
        E = function (e, n) {
          let { requireCurrentGuild: t } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, i.e7)([s.Z], () => s.Z.getGuildId());
          return (
            r.useEffect(() => {
              let r = c.Z.getGuildProductFetchState(n);
              if ((!t || u === e) && o && r === c.M.NOT_FETCHED)
                try {
                  a.cf(e, n);
                } catch (e) {}
            }, [e, n, o, u, t]),
            (0, i.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        f = function (e) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, i.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != n ? n : !o.Z.isViewingServerShop(e),
            }),
          );
        },
        I = (e) =>
          (0, i.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        S = (e) =>
          (0, i.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
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
          return s;
        },
        p9: function () {
          return c;
        },
        uV: function () {
          return a;
        },
      });
      var r = t(544891),
        i = t(881052),
        l = t(73346),
        o = t(981631);
      let u = async (e, n, t) => {
          let {
            priceTier: l,
            imageName: u,
            createNewRole: s,
            unlinkRole: a,
            ...c
          } = t;
          try {
            return (
              await r.tn.patch({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n),
                body: {
                  ...c,
                  image_name: u,
                  price_tier: l,
                  create_new_role: s,
                  unlink_role: a,
                },
              })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        s = async (e, n) => {
          try {
            await r.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        a = async (e) => {
          try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e) }))
              .body.listings;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        c = async (e, n) => {
          try {
            return (
              await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        d = async (e) => {
          let { guildId: n, productId: t, attachmentId: l } = e;
          try {
            return (
              await r.tn.post({
                url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, t, l),
              })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        };
    },
    240864: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      }),
        t(653041),
        t(47120);
      var r,
        i,
        l,
        o,
        u,
        s,
        a = t(442837),
        c = t(759174),
        d = t(570140),
        _ = t(70956),
        E = t(709054);
      ((l = r || (r = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let f = {},
        I = {},
        S = {},
        p = 10 * _.Z.Millis.MINUTE;
      function T(e) {
        return "guild:".concat(e);
      }
      function C(e) {
        return "guild:".concat(e, ":published");
      }
      let g = new c.h(
          (e) => {
            let n = [T(e.guild_id)];
            return e.published && n.push(C(e.guild_id)), n;
          },
          (e) =>
            (function (e) {
              let n = E.default.extractTimestamp(e.id);
              return e.published ? -n : -n + 1e12;
            })(e),
        ),
        N = [];
      class m extends (i = a.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var n;
          return null !== (n = f[e]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(e) {
          return g.get(e);
        }
        getGuildProductsForGuild(e, n) {
          let { publishedOnly: t } = n;
          return null == e ? N : g.values(t ? C(e) : T(e));
        }
        getGuildProductFetchState(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : 0;
        }
        isGuildProductsCacheExpired(e) {
          var n;
          return Date.now() - (null !== (n = S[e]) && void 0 !== n ? n : 0) > p;
        }
      }
      (s = "GuildProductsStore"),
        (u = "displayName") in (o = m)
          ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = s),
        (n.Z = new m(d.Z, {
          CONNECTION_OPEN: function () {
            g.clear(), (f = {}), (I = {}), (S = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (f[n] = 1),
              [...g.values(T(n))].forEach((e) => {
                g.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (f[n] = 2),
              (S[n] = Date.now()),
              t.forEach((e) => {
                g.set(e.id, e), (I[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            f[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            g.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            g.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            g.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            I[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (I[n.id] = 2), g.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (I[n] = 2), 404 === t.status && g.delete(n);
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
          return a;
        },
        kg: function () {
          return u;
        },
        pM: function () {
          return s;
        },
      });
      var r = t(881052);
      t(496675);
      var i = t(981631),
        l = t(689938);
      let o = "_role";
      function u(e) {
        if (!(e >= 0))
          switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
              return l.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return l.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
              return l.Z.Messages.ERROR_GENERIC_TITLE;
            default:
              return l.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
                code: -e,
              });
          }
      }
      function s(e) {
        let { newRoleParams: n } = e;
        if (null != n && "" === n.name.trim()) {
          var t, i;
          return (
            (t = o),
            (i = l.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
            new r.Hx({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [t]: { _errors: [{ code: "", message: i }] } },
              },
            })
          );
        }
      }
      function a(e) {
        var n;
        let {
            guildProductListing: t,
            name: r,
            priceTier: i,
            description: l,
            image: o,
            imageName: u,
            isImageChanged: s,
            newRoleParams: a,
            hasUnsavedAttachmentChanges: c,
          } = e,
          d = {};
        (null == t ? void 0 : t.name) !== r && "" !== r.trim() && (d.name = r),
          (null !== (n = null == t ? void 0 : t.description) && void 0 !== n
            ? n
            : "") !== l && (d.description = l),
          (null == t ? void 0 : t.price_tier) !== i &&
            null != i &&
            (d.priceTier = i),
          null != a && "" !== a.name.trim()
            ? (d.createNewRole = !0)
            : null === a && (d.unlinkRole = !0),
          o.startsWith("data:") &&
            (s || (null == t && (Object.keys(d).length > 0 || c))) &&
            ((d.image = o), (d.imageName = u));
        let _ = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: _,
          canSaveForDraft: _,
          canSaveForPublished: _,
          canPublishOrUnpublish: !(null == t || _),
        };
      }
      function c(e, n) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(i.Z5c.GUILD_PRODUCT(e, n));
      }
    },
    676651: function (e, n, t) {
      t.d(n, {
        h: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        l = t(302463);
      function o(e, n) {
        (0, i.openModalLazy)(
          async () => {
            let { default: i } = await t.e("73628").then(t.bind(t, 458961));
            return (t) => (0, r.jsx)(i, { guildId: e, productId: n, ...t });
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
      var r = t(470079),
        i = t(937615),
        l = t(689938);
      function o(e) {
        return r.useMemo(() => {
          if (null == e) return;
          let n = null != e.role_id,
            t = e.attachments_count > 0;
          if (n && t)
            return l.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (n) return l.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (t) return l.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
        }, [e]);
      }
      function u(e) {
        return r.useMemo(() => {
          if ((null == e ? void 0 : e.price) == null) return;
          let { amount: n, currency: t } = e.price;
          return (0, i.T4)(n, t);
        }, [e]);
      }
    },
    613810: function (e, n, t) {
      var r = t(735250);
      t(470079);
      var i = t(481060);
      n.Z = {
        open: function (e) {
          (0, i.openModalLazy)(async () => {
            let { default: n } = await t.e("53162").then(t.bind(t, 490576));
            return (t) => (0, r.jsx)(n, { ...e, ...t });
          });
        },
      };
    },
    391181: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
        m: function () {
          return S;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(481060),
        u = t(239091),
        s = t(166081),
        a = t(937615),
        c = t(942833),
        d = t(48691),
        _ = t(231338),
        E = t(689938),
        f = t(772103);
      function I(e) {
        let {
          showEditProduct: n,
          showUnpublishProduct: t,
          showCopyLink: i,
          showTestDownload: l,
          showDeleteProduct: u,
          showReportProduct: s,
          onEditProduct: a,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: _,
          onTestDownload: I,
          onReportProduct: S,
          closePopout: p,
          onSelect: T,
        } = e;
        return (0, r.jsx)("div", {
          className: f.menuContainer,
          children: (0, r.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: p,
            "aria-label": E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: T,
            children: [
              (0, r.jsxs)(o.MenuGroup, {
                children: [
                  n &&
                    (0, r.jsx)(o.MenuItem, {
                      id: "guild-product-edit",
                      label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                      action: a,
                    }),
                  i &&
                    (0, r.jsx)(o.MenuItem, {
                      id: "guild-product-copy-link",
                      label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                      icon: o.LinkIcon,
                      action: _,
                    }),
                  l &&
                    (0, r.jsx)(o.MenuItem, {
                      id: "guild-product-test-download",
                      label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                      icon: o.DownloadIcon,
                      action: I,
                    }),
                ],
              }),
              (0, r.jsxs)(o.MenuGroup, {
                children: [
                  t &&
                    (0, r.jsx)(o.MenuItem, {
                      id: "guild-product-unpublish",
                      label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                      action: c,
                    }),
                  u &&
                    (0, r.jsx)(o.MenuItem, {
                      id: "guild-product-delete",
                      label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, r.jsx)(o.MenuGroup, {
                children:
                  s &&
                  (0, r.jsx)(o.MenuItem, {
                    id: "guild-product-report",
                    label: E.Z.Messages.GUILD_PRODUCT_REPORT,
                    color: "danger",
                    action: S,
                  }),
              }),
            ],
          }),
        });
      }
      function S(e) {
        let {
          product: n,
          guildId: t,
          showEditProduct: i,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: s,
          showDeleteProduct: a,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: _,
          onDeleteProduct: S,
          onCopyProductLink: p,
          onTestDownload: T,
          onReportProduct: C,
        } = e;
        return (0, r.jsx)("div", {
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, r.jsx)(o.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
              (0, r.jsx)(I, {
                ...e,
                guildId: t,
                productId: n.id,
                showEditProduct: i,
                showUnpublishProduct: l,
                showCopyLink: s,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: a,
                onEditProduct: d,
                onUnpublishProduct: _,
                onDeleteProduct: S,
                onCopyLink: p,
                onTestDownload: T,
                onReportProduct: C,
              }),
            children: (e, t) => {
              let { isShown: i } = t;
              return (0, r.jsx)(o.Clickable, {
                ...e,
                "aria-label":
                  E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format(
                    { productName: n.name },
                  ),
                "aria-haspopup": "listbox",
                "aria-expanded": i,
                className: f.productActionMenuButton,
                children: (0, r.jsx)(o.MoreVerticalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: f.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function p(e) {
        let {
            product: n,
            guildId: t,
            onEditProduct: i,
            onUnpublishProduct: p,
            onDeleteProduct: T,
            onCopyProductLink: C,
            onTestDownload: g,
            disabled: N = !1,
          } = e,
          m = (0, s.U)(n, 600),
          A =
            null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0,
          h = (0, c.C)(n);
        return (0, r.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(f.productCardClickable, f.productCard, {
            [f.disabled]: N,
          }),
          onClick: N ? void 0 : i,
          onContextMenu: function (e) {
            (0, u.jW)(e, () =>
              Promise.resolve((e) =>
                (0, r.jsx)(I, {
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
                  onEditProduct: i,
                  onUnpublishProduct: p,
                  onDeleteProduct: T,
                  onCopyLink: C,
                  onTestDownload: g,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
            productName: n.name,
          }),
          children: [
            (0, r.jsx)("img", {
              alt: "",
              src: m,
              className: f.productThumbnail,
            }),
            (0, r.jsxs)("div", {
              className: f.productInfo,
              children: [
                (0, r.jsxs)("div", {
                  className: f.productInfoContent,
                  children: [
                    (0, r.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: f.productName,
                      children: n.name,
                    }),
                    (0, r.jsx)(o.Spacer, { size: 8 }),
                    (0, r.jsxs)("div", {
                      className: f.productDetails,
                      children: [
                        (0, r.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: A,
                        }),
                        null != h
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: f.dotSeparator,
                                }),
                                (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: h,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, r.jsx)(o.Spacer, { size: 16 }),
                    n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {}),
                  ],
                }),
                !N &&
                  (0, r.jsx)(S, {
                    product: n,
                    guildId: t,
                    showEditProduct: !0,
                    showUnpublishProduct: n.published,
                    showCopyLink: n.published,
                    showTestDownload: null != n.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: i,
                    onUnpublishProduct: p,
                    onDeleteProduct: T,
                    onCopyProductLink: C,
                    onTestDownload: g,
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
          return _;
        },
        t: function () {
          return d;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        l = t(44315),
        o = t(377171),
        u = t(981631),
        s = t(689938),
        a = t(405013);
      function c(e) {
        let {
          label: n,
          backgroundColor: t = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: u,
        } = e;
        return (0, r.jsxs)("div", {
          className: a.badge,
          style: { backgroundColor: t },
          children: [
            (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: a.__invalid_badgeText,
              children: n,
            }),
            (0, r.jsx)(l, {
              className: a.badgeIcon,
              color: null != u ? u : "currentColor",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function d() {
        return (0, r.jsx)(c, {
          label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
          backgroundColor: "#207B8D",
          icon: i.SparklesIcon,
        });
      }
      function _() {
        return (0, r.jsx)(c, {
          label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
          icon: i.PencilIcon,
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
      var r = t(735250),
        i = t(470079),
        l = t(399606),
        o = t(38618),
        u = t(423117),
        s = t(289393);
      let a = i.createContext(void 0);
      function c(e) {
        let n = i.useContext(a);
        if (null == n)
          throw Error(
            "".concat(
              null != e ? e : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: t, fetchGroupListingsForGuild: r } = n;
        return r(), t;
      }
      function d(e) {
        let {
            guildId: n,
            children: t,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: _,
            dontFetchWhileTrue: E,
          } = e,
          f = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          I = (0, l.e7)([s.Z], () =>
            null != n
              ? s.Z.getSubscriptionGroupListingsForGuildFetchState(n)
              : s.M.FETCHED,
          ),
          S = i.useRef(c),
          p = i.useCallback(() => {
            if (null == n || !f || !0 === E) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (S.current || e === s.M.NOT_FETCHED) &&
              ((S.current = !1),
              u.FP(n, { includeSoftDeleted: d, countryCode: _ }));
          }, [f, n, d, _, E]),
          T = i.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
        return (0, r.jsx)(a.Provider, {
          value: { listingsLoaded: T, fetchGroupListingsForGuild: p },
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
      var r = t(373228),
        i = t(689938);
      let l = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        o = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
        u = [
          {
            id: "781323471249604648",
            format_type: r.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: r.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: r.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: r.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: r.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (e, n, t) {
      t.d(n, {
        PA: function () {
          return c;
        },
        Tn: function () {
          return a;
        },
        _i: function () {
          return S;
        },
        eI: function () {
          return f;
        },
        vp: function () {
          return E;
        },
        y8: function () {
          return I;
        },
      });
      var r = t(367907),
        i = t(200876),
        l = t(430824),
        o = t(594174);
      t(709054), t(523361);
      var u = t(981631),
        s = t(689938);
      function a(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return o.format(u);
      }
      function c(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: l,
          });
        return o.astFormat(u);
      }
      function d(e, n) {
        var t, r;
        let i = l.Z.getGuild(e),
          o =
            null !== (t = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== t
              ? t
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (r = null == n ? void 0 : n.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function _(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: r,
            roleSubscriptionOnClickHandler: i,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: u,
            totalMonthsSubscribed: a,
            showWithDuration: c,
            isRenewal: _,
          } = d(l, o);
        return (
          (n = c
            ? _
              ? s.Z.Messages
                  .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
            : _
              ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
          {
            content: n,
            formatParams: {
              username: t,
              usernameHook: r,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: i,
              tierName: null == o ? void 0 : o.tier_name,
              months: a,
            },
          }
        );
      }
      function E(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: r = u.dG4,
            roleSubscriptionOnClickHandler: i = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: a,
            totalMonthsSubscribed: c,
            showWithDuration: _,
            isRenewal: E,
          } = d(l, o),
          f = {
            guildName: null == a ? void 0 : a.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: t,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
          };
        return (n = _
          ? E
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...f, months: c },
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...f, months: c },
              )
          : E
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                f,
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                f,
              ));
      }
      function f(e) {
        return (0, i.l)(e);
      }
      function I(e, n, t, i) {
        var l;
        r.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (l = o.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: n,
            message_id: t,
            role_subscription_listing_id: i,
          },
        );
      }
      function S(e, n) {
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
          return s;
        },
        lL: function () {
          return c;
        },
        rC: function () {
          return a;
        },
      });
      var r = t(293810),
        i = t(474936),
        l = t(689938);
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
        return (function (e) {
          switch (e) {
            case i.rV.DAY:
              return l.Z.Messages.DAY;
            case i.rV.MONTH:
              return l.Z.Messages.MONTH;
            case i.rV.YEAR:
              return l.Z.Messages.YEAR;
          }
        })(n).format({ count: t });
      }
      function s(e) {
        let { interval: n, interval_count: t } = e;
        switch (n) {
          case i.rV.DAY:
            if (t > 0 && t % 7 == 0)
              return l.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: t / 7,
              });
            return l.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
          case i.rV.MONTH:
            return l.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: t,
            });
          case i.rV.YEAR:
            return l.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
        }
      }
      function a(e) {
        return e.ref_type === r.Qs.CHANNEL;
      }
      function c(e) {
        return e.ref_type === r.Qs.INTANGIBLE;
      }
    },
    584825: function (e, n, t) {
      t.d(n, {
        GG: function () {
          return I;
        },
        HQ: function () {
          return g;
        },
        JH: function () {
          return A;
        },
        QV: function () {
          return m;
        },
        YB: function () {
          return N;
        },
        _1: function () {
          return C;
        },
        _k: function () {
          return E;
        },
        jO: function () {
          return f;
        },
        oC: function () {
          return h;
        },
        qi: function () {
          return S;
        },
        r4: function () {
          return T;
        },
        sp: function () {
          return p;
        },
      }),
        t(47120),
        t(653041);
      var r = t(470079),
        i = t(442837),
        l = t(935369),
        o = t(38618);
      t(823379);
      var u = t(730647),
        s = t(423117),
        a = t(289393),
        c = t(697227);
      let d = [],
        _ = function (e) {
          let {
              refetchOnMount: n = !1,
              includeSoftDeleted: t = !0,
              countryCode: l,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, i.e7)([a.Z], () =>
              null != e
                ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : a.M.FETCHED,
            ),
            _ = r.useRef(n);
          return (
            r.useEffect(() => {
              if (null == e || !c || !0 === u) return;
              let r = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (n || r === a.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(e, { includeSoftDeleted: t, countryCode: l }));
            }, [c, e, t, n, l, u]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
          );
        },
        E = function (e) {
          let { includeSoftDeleted: n = !1, includeUnpublished: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, i.Wu)(
            [a.Z],
            () => {
              if (null == e) return [];
              let r = a.Z.getSubscriptionGroupListing(e);
              if (null == r) return [];
              let i = [];
              for (let e of r.subscription_listings_ids) {
                let r = a.Z.getSubscriptionListing(e);
                if (null != r && (!r.soft_deleted || !!n))
                  (r.published || t) && i.push(r);
              }
              return i;
            },
            [e, n, t],
          );
        },
        f = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionListing(e) : null,
          ),
        I = (e) => {
          let n = (0, u.f)("useGroupListingsForGuild");
          return (0, i.e7)([a.Z], () =>
            null != e && n ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
          );
        },
        S = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            _(e),
            (0, i.Wu)([a.Z], () => {
              let t =
                  null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                r = [];
              for (let e of t)
                for (let t of e.subscription_listings_ids) {
                  let e = a.Z.getSubscriptionListing(t);
                  null != e &&
                    (n.includeSoftDeleted || !e.soft_deleted) &&
                    r.push(e);
                }
              return n.includeSoftDeleted && n.sortDeletedListingsLast
                ? [
                    ...r.filter((e) => !e.soft_deleted),
                    ...r.filter((e) => e.soft_deleted),
                  ]
                : r;
            })
          );
        },
        p = (e) => {
          let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(c.W), [e]),
            o = (0, i.Wu)(
              [a.Z],
              () =>
                l.filter(
                  (e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [l],
            );
          return (
            r.useEffect(() => {
              !n &&
                o.length > 0 &&
                (t(!0),
                Promise.all(o.map((e) => s.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  }));
            }, [n, o]),
            { loading: n }
          );
        },
        T = () => {
          let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
          return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, r) => {
              try {
                return n(!0), i(null), await s._d(e, t, r), !0;
              } catch (e) {
                i(e);
              } finally {
                n(!1);
              }
            },
          };
        },
        C = () => {
          let [e, n] = (0, l.Z)(s.AE),
            { loading: t, error: r } = n;
          return { error: r, submitting: t, archiveSubscriptionListing: e };
        },
        g = () => {
          let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
          return {
            error: t,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: t, groupListingId: r, listingId: l } = e;
              try {
                return (
                  n(!0),
                  i(null),
                  await s.O0({
                    guildId: t,
                    groupListingId: r,
                    listingId: l,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (e) {
                i(e);
              } finally {
                n(!1);
              }
            },
            clearError: () => i(null),
          };
        },
        N = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionSettings(e) : void 0,
          ),
        m = () => {
          let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, t) => {
              n(!0), i(null);
              try {
                await s.W2(e, t);
              } catch (e) {
                i(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        A = () => {
          let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
              n(!0), i(null);
              try {
                await s.Qb(e);
              } catch (e) {
                i(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        h = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionTrial(e) : null,
          );
    },
    403474: function (e, n, t) {
      t.d(n, {
        k: function () {
          return r;
        },
      });
      let r = {
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
          return x;
        },
        F2: function () {
          return Y;
        },
        GM: function () {
          return X;
        },
        GP: function () {
          return G;
        },
        H9: function () {
          return J;
        },
        Lo: function () {
          return z;
        },
        PK: function () {
          return Z;
        },
        R7: function () {
          return B;
        },
        TT: function () {
          return V;
        },
        UE: function () {
          return j;
        },
        XZ: function () {
          return W;
        },
        Xo: function () {
          return $;
        },
        _T: function () {
          return D;
        },
        d9: function () {
          return b;
        },
        mR: function () {
          return U;
        },
        p9: function () {
          return P;
        },
        qs: function () {
          return y;
        },
        rU: function () {
          return K;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(512722),
        l = t.n(i),
        o = t(392711),
        u = t(772848),
        s = t(866442),
        a = t(731965),
        c = t(442837),
        d = t(80932),
        _ = t(749210),
        E = t(339085),
        f = t(73346),
        I = t(817460),
        S = t(423117),
        p = t(584825),
        T = t(289393),
        C = t(790285),
        g = t(303737),
        N = t(971792),
        m = t(22902),
        A = t(403474),
        h = t(944537),
        v = t(293810),
        L = t(981631),
        O = t(474936);
      function R(e, n, t) {
        let i = (0, h.n)((e) => e.setListing),
          l = r.useCallback(
            (r) => {
              i(e, (e) => {
                var i;
                let l =
                  null !== (i = null == e ? void 0 : e[n]) && void 0 !== i
                    ? i
                    : t;
                return Object.assign({}, e, {
                  [n]: "function" == typeof r ? r(l) : r,
                });
              });
            },
            [i, e, n, t],
          ),
          o = (0, h.n)((t) => {
            var r;
            return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
          });
        return [void 0 !== o ? o : t, l];
      }
      function M(e, n) {
        let t = (0, c.e7)([T.Z], () => T.Z.getSubscriptionListing(e));
        return r.useMemo(() => n(t), [t]);
      }
      function D(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n
            ? n
            : "";
        });
        return R(e, "name", n);
      }
      function U(e) {
        let n = M(e, (e) => {
          var n;
          return null == e
            ? void 0
            : null === (n = e.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return R(e, "priceTier", n);
      }
      function Z(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return R(e, "description", n);
      }
      function b(e, n) {
        let t = M(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, f._W)(e.application_id, e.image_asset, n);
        });
        return R(e, "image", t);
      }
      function P(e, n) {
        let t = (0, N.Z)(n, e);
        return R(
          e,
          "roleIcon",
          r.useMemo(() => {
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
      function y(e, n) {
        let t = (0, N.Z)(n, e),
          i = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleColor;
          }),
          l = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleIcon;
          });
        return r.useMemo(() => {
          let e = { ...(null != t ? t : A.k) };
          if (void 0 !== l) {
            var n, r;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ""),
              (e.unicodeEmoji =
                null !== (r = l.unicodeEmoji) && void 0 !== r ? r : "");
          }
          return (
            void 0 !== i && ((e.color = i), (e.colorString = (0, s.Rf)(i))), e
          );
        }, [t, l, i]);
      }
      function x(e, n) {
        let t = (0, N.Z)(n, e);
        return R(
          e,
          "roleColor",
          r.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e
              ? e
              : L.p6O;
          }, [t]),
        );
      }
      function G(e, n) {
        let t = (0, N.Z)(n, e);
        return R(
          e,
          "channelAccessFormat",
          r.useMemo(
            () =>
              null == t
                ? h.I.SOME_CHANNELS_ACCESS
                : (0, C.MT)(t)
                  ? h.I.ALL_CHANNELS_ACCESS
                  : h.I.SOME_CHANNELS_ACCESS,
            [t],
          ),
        );
      }
      let F = [];
      function j(e) {
        let n = M(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(I.rC),
        );
        return R(e, "channelBenefits", n);
      }
      let w = [];
      function B(e) {
        let n = M(e, (e) =>
          null == e ? w : e.role_benefits.benefits.filter(I.lL),
        );
        return R(e, "intangibleBenefits", n);
      }
      let H = new Set();
      function k(e, n) {
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
      function W(e, n) {
        let t = (0, N.Z)(n, e),
          i = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
        return R(
          e,
          "tierEmojiIds",
          r.useMemo(() => (null == t ? H : k(i, t.id)), [i, t]),
        );
      }
      function V(e) {
        var n;
        let t = (0, p.oC)(e),
          { selectedOption: r } = (0, m.Z)(
            null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return R(e, "trialInterval", null != r ? r : null);
      }
      function Y(e) {
        var n;
        let t = (0, p.oC)(e);
        return R(
          e,
          "trialLimit",
          null !== (n = null == t ? void 0 : t.max_num_active_trial_users) &&
            void 0 !== n
            ? n
            : null,
        );
      }
      function K(e) {
        return (0, h.n)((n) => void 0 !== n.listings[e]);
      }
      function z(e) {
        return (0, h.n)((n) => {
          for (let t of e) if (void 0 !== n.listings[t]) return !0;
          return !1;
        });
      }
      function J(e) {
        let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [t] = R(e, "priceTier", void 0);
        return [
          r.useMemo(() => {
            var e, r, i, l, o;
            return {
              price:
                null !== (e = null != t ? t : null == n ? void 0 : n.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (r = null == n ? void 0 : n.currency) && void 0 !== r
                  ? r
                  : L.pKx.USD,
              interval:
                null !== (i = null == n ? void 0 : n.interval) && void 0 !== i
                  ? i
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
          (0, a.j)(() => {
            h.n.setState((e) => ({
              listings: {
                ...e.listings,
                [n]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function q(e) {
        let { guildId: n, editStateId: t } = e,
          r = T.Z.getSubscriptionListing(t);
        l()(null != r, "listing doesnt exist");
        let i = r.role_id,
          u = r.id,
          s = h.n.getState().listings[t];
        l()(null != s, "edit state does not exist");
        let {
          roleColor: a,
          roleIcon: c,
          trialLimit: f,
          trialInterval: I,
          tierEmojiIds: p,
        } = s;
        (void 0 !== a || void 0 !== c) &&
          (await _.Z.updateRole(n, i, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let C = T.Z.getSubscriptionTrial(u);
        if (
          ((null != f || null != I || (null != C && null == I)) &&
            (await S.I1(n, u, { trial: I, max_num_active_trial_users: f })),
          void 0 !== p)
        ) {
          let e = k(E.ZP.getGuildEmoji(n), i),
            t = (0, o.difference)([...p], [...e]),
            r = (0, o.difference)([...e], [...p]),
            l = t
              .map((e) => E.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: [...e.roles, i],
                  });
              }),
            u = r
              .map((e) => E.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let t = e.roles.filter((e) => e !== i);
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
            groupListingId: r,
            onBeforeDispatchNewListing: i,
          } = e,
          o = h.n.getState().listings[t];
        l()(null != o, "edit state does not exist");
        let {
          name: u,
          description: s,
          channelBenefits: a,
          intangibleBenefits: c,
          priceTier: d,
          image: _,
          channelAccessFormat: E,
        } = o;
        l()(null != u, "no name provided"),
          l()(null != s, "no description provided"),
          l()(null != d, "no priceTier provided"),
          l()(null != _, "no image provided");
        let f = E === h.I.ALL_CHANNELS_ACCESS,
          I = r;
        null == I && (I = (await S.uw(n, {})).id),
          null != a && a.length > 0 && (await (0, g.r4)(n, a));
        let p = [...(null != a ? a : []), ...(null != c ? c : [])],
          T = (0, g.yL)(t, n);
        return S.dA({
          guildId: n,
          groupListingId: I,
          data: {
            can_access_all_channels: f,
            image: _,
            name: u,
            description: s,
            benefits: p,
            priceTier: d,
          },
          analyticsContext: T,
          onBeforeDispatchNewListing: i,
        });
      }
      function $() {
        let [e, n] = r.useState(!1),
          [t, i] = r.useState();
        return {
          loading: e,
          error: t,
          handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let {
                guildId: t,
                editStateId: r,
                groupListingId: u,
                onBeforeDispatchNewListing: s,
                onAfterDispatchNewListing: c,
              } = e,
              d = r,
              _ = T.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), i(void 0), null != _))
                l()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var n;
                    let { guildId: t, editStateId: r, groupListingId: i } = e,
                      u = T.Z.getSubscriptionListing(r);
                    l()(null != u, "listing doesnt exist");
                    let s = h.n.getState().listings[r];
                    l()(null != s, "edit state does not exist");
                    let {
                        name: a,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: _,
                        priceTier: E,
                        image: f,
                        channelAccessFormat: p,
                      } = s,
                      C = {};
                    if (
                      (a !== u.name && (C.name = a),
                      c !== u.description && (C.description = c),
                      E !==
                        (null === (n = u.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (C.priceTier = E),
                      null != f && (C.image = f),
                      null != p &&
                        (C.can_access_all_channels =
                          p === h.I.ALL_CHANNELS_ACCESS),
                      null != d || null != _)
                    ) {
                      let e = u.role_benefits.benefits.filter(I.rC),
                        n = u.role_benefits.benefits.filter(I.lL),
                        t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                      C.benefits = t;
                    }
                    return (0, o.isEmpty)(C)
                      ? u
                      : S.O0({
                          guildId: t,
                          groupListingId: i,
                          listingId: r,
                          data: C,
                        });
                  })({ guildId: t, editStateId: d, groupListingId: u });
              else {
                var E, f;
                let e = await Q({
                  guildId: t,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: s,
                });
                (d = e.id),
                  (E = r),
                  (f = d),
                  (0, a.j)(() => {
                    h.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [f]: e.listings[E],
                        [E]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await q({ guildId: t, editStateId: d }), X(d), !0;
            } catch (e) {
              if (!("getAnyErrorMessage" in e)) throw e;
              i(e);
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
          i = (0, p._k)(e, t),
          l = (0, h.n)((e) => e.editStateIdsForGroup[n]),
          o = (0, h.n)((e) => e.setEditStateIdsForGroup),
          s = (0, h.n)((e) => e.setListing),
          a = r.useMemo(
            () => [
              ...i.map((e) => {
                let { id: n } = e;
                return n;
              }),
              ...(null != l ? l : []),
            ],
            [l, i],
          ),
          c = r.useCallback(() => {
            let e = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), e]);
          }, [n, o]),
          d = r.useCallback(
            (e) => {
              let t = (0, u.Z)();
              return (
                o(n, (e) => [...(null != e ? e : []), t]),
                e.listings.forEach((n) => {
                  s(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: v.Qs.CHANNEL,
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
            [n, o, s],
          );
        return {
          editStateIds: a,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: r.useCallback(
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
      var r = t(512722),
        i = t.n(r);
      function l(e) {
        let n = e.items;
        return (
          i()(
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
            i()(
              t.length <= 1,
              "more than 1 renewal mutation for role subscription",
            ),
            null == t ? void 0 : t[0].planId
          );
      }
    },
    403910: function (e, n, t) {
      var r = t(442837),
        i = t(339085);
      n.Z = function (e, n) {
        return (0, r.e7)(
          [i.ZP],
          () => {
            var t;
            if (null == n) return null;
            let r = i.ZP.getDisambiguatedEmojiContext(e);
            return null !== (t = r.getById(n)) && void 0 !== t
              ? t
              : r.getByName(n);
          },
          [e, n],
        );
      };
    },
    14263: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(470079),
        i = t(442837),
        l = t(480608),
        o = t(243730);
      let u = {};
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, i.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
        return (
          r.useEffect(() => {
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
          return s;
        },
      });
      var r = t(470079),
        i = t(442837),
        l = t(339085),
        o = t(889564);
      let u = [];
      function s(e) {
        let n = (0, i.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
        return r.useMemo(
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
      var r = t(442837),
        i = t(430824),
        l = t(584825);
      function o(e, n) {
        let t = (0, l.jO)(n);
        return (0, r.e7)([i.Z], () =>
          null != e && null != t ? i.Z.getRole(e, t.role_id) : void 0,
        );
      }
    },
    22902: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(470079),
        i = t(817460),
        l = t(293810),
        o = t(474936),
        u = t(689938);
      function s(e) {
        return r.useMemo(() => {
          var n;
          let t = l.DN.map((e) => ({
              value: e,
              label:
                e.interval === o.rV.DAY && 7 === e.interval_count
                  ? u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format(
                      { defaultLimit: (0, i.iG)(e) },
                    )
                  : (0, i.iG)(e),
              isDefault: e.interval === o.rV.DAY && 7 === e.interval_count,
            })),
            r =
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
          return { options: t, selectedOption: r };
        }, [e]);
      }
    },
    629262: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(442837),
        i = t(592125);
      function l(e) {
        return (0, r.Wu)(
          [i.Z],
          () => e.filter((e) => i.Z.hasChannel(e.ref_id)),
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
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(596454),
        u = t(377171),
        s = t(403910),
        a = t(549631),
        c = t(873198);
      function d(e) {
        var n;
        let { guildId: t, emojiId: i, emojiName: d, className: _ } = e,
          E = (0, s.Z)(t, i);
        return null != E || null != d
          ? (0, r.jsx)(o.Z, {
              emojiId: null == E ? void 0 : E.id,
              emojiName: null != d ? d : null == E ? void 0 : E.name,
              animated:
                null !== (n = null == E ? void 0 : E.animated) &&
                void 0 !== n &&
                n,
              className: l()(c.emojiIcon, _),
            })
          : (0, r.jsx)(a.Z, {
              className: l()(c.emojiIcon, _),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        l = t(201895),
        o = t(471445),
        u = t(823379),
        s = t(303737),
        a = t(293810),
        c = t(689938),
        d = t(681027);
      function _(e) {
        let { channelId: n } = e,
          t = (0, s.m7)(n);
        if (null == t)
          return (0, r.jsx)(r.Fragment, {
            children: "[".concat(
              c.Z.Messages
                .GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL,
              "]",
            ),
          });
        let u = t.isMediaChannel() ? i.ImageIcon : (0, o.Th)(t.type);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.HiddenVisually, {
              children: (0, l.ZP)({ channel: t }),
            }),
            (0, r.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != u &&
                  (0, r.jsx)(u, { className: d.icon, "aria-hidden": !0 }),
                t.name,
              ],
            }),
          ],
        });
      }
      function E(e) {
        switch (e.ref_type) {
          case a.Qs.CHANNEL:
            return (0, r.jsx)(_, { channelId: e.ref_id });
          case a.Qs.INTANGIBLE:
            return e.name;
          default:
            (0, u.vE)(e);
        }
      }
    },
    893729: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var r = t(735250),
        i = t(470079),
        l = t(120356),
        o = t.n(l),
        u = t(442837),
        s = t(481060),
        a = t(518738),
        c = t(786761),
        d = t(3148),
        _ = t(753206),
        E = t(594174),
        f = t(5192),
        I = t(981631),
        S = t(689938),
        p = t(391317);
      function T(e) {
        var n;
        let {
            guildId: t,
            role: l,
            theme: T,
            content: C = S.Z.Messages
              .GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
            className: g,
          } = e,
          N = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
          m = f.ZP.useName(t, null, N),
          A = (0, a.Kz)(l),
          h = i.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: C,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: N,
                }),
                state: I.yb.SENT,
                id: "0",
              }),
            [N, C],
          ),
          v = {
            nick: m,
            colorString:
              null !== (n = l.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, r.jsx)(s.ThemeProvider, {
          theme: T,
          children: (e) =>
            (0, r.jsx)("div", {
              className: o()(e, p.container, g),
              children: (0, r.jsx)(_.Z, {
                hideTimestamp: !0,
                author: v,
                roleIcon: A,
                message: h,
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
          return N;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(442837),
        u = t(481060),
        s = t(666188),
        a = t(372769),
        c = t(523751),
        d = t(623624),
        _ = t(290034),
        E = t(271383),
        f = t(594174),
        I = t(267642),
        S = t(981631),
        p = t(689938),
        T = t(427542);
      function C(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: i } = e,
          l = (0, o.e7)([f.default, E.ZP], () => {
            let e = f.default.getCurrentUser();
            return E.ZP.isMember(n.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: a } = n;
        if (0 === a && s === S.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !i &&
                (0, d.f)({
                  guildId: n.id,
                  location: {
                    section: S.jXE.GUILD_HEADER,
                    object: S.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          C =
            s === S.Eu4.NONE
              ? p.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : I.nW(s),
          g = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", { className: T.tierTooltipTitle, children: C }),
              (0, r.jsx)("div", {
                children:
                  p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: a },
                  ),
              }),
            ],
          });
        return (0, r.jsx)("div", {
          className: T.guildIconContainer,
          children: (0, r.jsx)(u.Tooltip, {
            text: g,
            position: "bottom",
            "aria-label": null != C ? C : "",
            children: (e) =>
              (0, r.jsx)(u.Clickable, {
                ...e,
                className: T.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, r.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: t
                    ? T.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    t && s !== S.Eu4.TIER_3
                      ? T.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function g(e) {
        let { guild: n, disableColor: t, disableBoostClick: i } = e;
        return (0, s.Z)(n)
          ? (0, r.jsx)("div", {
              className: T.guildIconV2Container,
              children: (0, r.jsx)(c.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(T.guildBadge, { [T.disableColor]: t }),
                disableBoostClick: i,
              }),
            })
          : (0, r.jsx)("div", {
              className: T.guildIconContainer,
              children: (0, r.jsx)(a.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(T.guildBadge, { [T.disableColor]: t }),
              }),
            });
      }
      function N(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: i } = e;
        return (0, s.Z)(n)
          ? (0, r.jsx)(g, { guild: n, disableColor: !1, disableBoostClick: i })
          : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
            ? (0, r.jsx)(g, { guild: n, disableColor: !t })
            : (0, r.jsx)(C, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: i,
              });
      }
    },
    889695: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(47120),
        t(724458),
        t(653041);
      var r = t(735250),
        i = t(470079),
        l = t(658722),
        o = t.n(l),
        u = t(392711),
        s = t.n(u),
        a = t(149765),
        c = t(442837),
        d = t(481060),
        _ = t(271383),
        E = t(430824),
        f = t(594174),
        I = t(700785),
        S = t(709054),
        p = t(962086),
        T = t(160404),
        C = t(225675),
        g = t(981631),
        N = t(689938),
        m = t(679537);
      function A(e) {
        var n;
        return (0, r.jsx)("span", {
          style: {
            color:
              null !== (n = e.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: e.name,
        });
      }
      function h(e) {
        let { guildId: n } = e,
          t = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
          l = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
          u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)),
          { impersonateType: h, viewingRoles: v } = (0, c.cj)([T.Z], () => ({
            impersonateType: T.Z.getImpersonateType(n),
            viewingRoles: T.Z.getViewingRoles(n),
          })),
          L = h === C.z.SERVER_SHOP,
          O = (0, c.e7)([_.ZP], () =>
            null != t ? _.ZP.getTrueMember(n, t.id) : null,
          ),
          [R, M] = (0, d.useMultiSelect)(null == v ? [] : S.default.keys(v)),
          D = i.useRef(l);
        i.useEffect(() => {
          let e = {},
            n = D.current;
          if (null != n && null != h) {
            for (let n of R) {
              let t = u[n];
              null != t && (e[n] = t);
            }
            (0, p.Zm)(n.id, { type: h, roles: e });
          }
        }, [R, h, u]);
        let U =
            null != l && null != t && null != O
              ? s()(u)
                  .filter((e) => -1 !== O.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          Z = i.useMemo(
            () =>
              null != l && null != t
                ? Object.values(u)
                    .filter((e) => e.id !== l.id)
                    .filter((e) => {
                      var n;
                      return (
                        !L ||
                        (null === (n = e.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == U ? void 0 : U.id) === e.id ||
                        I.r6(l, t.id, U, e),
                    )
                : [],
            [l, t, L, U, u],
          );
        if (null == t || null == l || null == O) return null;
        let b = {};
        return (O.roles.forEach((e) => {
          let n = u[e];
          null != n && (b[n.id] = n);
        }),
        a.e$(
          I.I0({ forceRoles: b, context: l }),
          a.$e(g.Plq.MANAGE_GUILD, g.Plq.MANAGE_ROLES),
        ) || l.isOwner(t.id))
          ? (0, r.jsx)("div", {
              className: m.container,
              children: (0, r.jsx)(d.Combobox, {
                placeholder: N.Z.Messages.SEARCH_ROLES,
                value: R,
                onChange: M,
                autoFocus: !0,
                children: (e) => {
                  let n = Z.reduce(
                      (n, t) => (
                        o()(e.toLowerCase(), t.name.toLowerCase()) &&
                          n.push(
                            (0, r.jsxs)(
                              d.ComboboxItem,
                              {
                                value: t.id,
                                children: [
                                  (0, r.jsx)(d.ComboboxItem.Label, {
                                    children: A(t),
                                  }),
                                  (0, r.jsx)(d.ComboboxItem.Checkbox, {}),
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
                        (0, r.jsxs)(
                          d.ComboboxItem,
                          {
                            value: t.id,
                            disabled: !0,
                            children: [
                              (0, r.jsx)(d.ComboboxItem.Label, {
                                children: A(t),
                              }),
                              (0, r.jsx)(d.ComboboxItem.Checkbox, {
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
          : (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              children: N.Z.Messages.VIEW_AS_ROLES_NO_ACCESS,
            });
      }
    },
    918658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return U;
        },
        d: function () {
          return Z;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        o = t(442837),
        u = t(692547),
        s = t(481060),
        a = t(549817),
        c = t(819553),
        d = t(17181),
        _ = t(303737),
        E = t(434404),
        f = t(703656),
        I = t(944486),
        S = t(914010),
        p = t(671533),
        T = t(259580),
        C = t(358085),
        g = t(962086),
        N = t(160404),
        m = t(889695),
        A = t(981631),
        h = t(176505),
        v = t(302463),
        L = t(293810),
        O = t(689938),
        R = t(489666);
      function M(e) {
        let { className: n, onClick: t, children: i } = e;
        return (0, r.jsx)(s.Button, {
          className: l()(R.button, n),
          innerClassName: R.buttonInner,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.WHITE,
          size: s.Button.Sizes.NONE,
          onClick: t,
          children: i,
        });
      }
      function D(e) {
        let { onClick: n } = e;
        return (0, r.jsx)(M, { onClick: n, children: O.Z.Messages.DISABLE });
      }
      function U() {
        let e = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
          n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: C,
          } = (0, o.cj)([N.Z], () => ({
            viewingRoles: null != e ? N.Z.getViewingRoles(e) : null,
            backNavigationSection: N.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && N.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && N.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let U = (function (e) {
            switch (e) {
              case A.pNK.INTEGRATIONS:
                return O.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
              case A.pNK.ROLE_SUBSCRIPTIONS:
                return O.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
              case A.pNK.ONBOARDING:
                return O.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
              default:
                return O.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
          })(i),
          Z =
            i === A.pNK.ROLE_SUBSCRIPTIONS
              ? O.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT
              : O.Z.Messages.VIEWING_AS_ROLES_SELECT,
          b = n === h.oC.GUILD_ONBOARDING,
          P = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (N.Z.isFullServerPreview(e) && (0, f.uL)(A.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, g.mL)(e),
              t && E.Z.open(e, i),
              i === A.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
          };
        return (0, r.jsxs)(s.Notice, {
          color: s.NoticeColors.BRAND,
          className: R.notice,
          children: [
            (0, r.jsxs)(M, {
              onClick: () => P({ backToSettings: !0 }),
              className: R.backButton,
              children: [
                (0, r.jsx)(p.Z, {
                  width: 16,
                  height: 16,
                  direction: p.Z.Directions.LEFT,
                  className: R.backArrow,
                }),
                U,
              ],
            }),
            b && l
              ? (0, r.jsx)("div", {
                  className: R.noticeContents,
                  children: (0, r.jsx)("div", {
                    className: R.noticeText,
                    children: O.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION,
                  }),
                })
              : (0, r.jsxs)("div", {
                  className: R.noticeContents,
                  children: [
                    (0, r.jsx)("div", {
                      className: R.noticeText,
                      children: l
                        ? O.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format(
                            { numRoles: Object.keys(t).length },
                          )
                        : O.Z.Messages.VIEWING_AS_ROLES.format({
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, r.jsx)(s.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, r.jsx)(m.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, r.jsxs)(M, {
                          onClick: n,
                          children: [
                            Z,
                            (0, r.jsx)(T.Z, {
                              width: 16,
                              height: 16,
                              direction: T.Z.Directions.DOWN,
                              className: R.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    l &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: R.previewWarning,
                        text: O.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    C &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: R.previewWarning,
                        text: O.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format(
                          { maxTiers: L.fF, maxProducts: v.dD },
                        ),
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            l || i === A.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, r.jsx)(D, { onClick: () => P({ backToSettings: !1 }) }),
          ],
        });
      }
      function Z(e) {
        let { guildId: n } = e;
        return (0, o.e7)([N.Z], () => N.Z.isViewingRoles(n))
          ? (0, r.jsx)("div", {
              className: l()(R.settingsWrapper, {
                [R.windows]: (0, C.isWindows)(),
                [R.osx]: (0, C.isMac)(),
              }),
              children: (0, r.jsx)(U, {}),
            })
          : null;
      }
    },
    690221: function (e, n, t) {
      var r = t(735250),
        i = t(470079),
        l = t(481060),
        o = t(703656),
        u = t(981631);
      n.Z = i.forwardRef(function (e, n) {
        let {
            href: t,
            children: s,
            onClick: a,
            onKeyPress: c,
            focusProps: d,
            ..._
          } = e,
          E = i.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != t && (0, o.uL)(t),
                  null == a || a()),
                  null == c || c(e);
            },
            [t, c, a],
          ),
          f = i.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, o.uL)(t),
                  null == a || a();
            },
            [t, a],
          ),
          I = (0, r.jsx)("a", {
            ref: n,
            href: t,
            onClick: f,
            onKeyPress: E,
            ..._,
            children: s,
          });
        return (0, r.jsx)(l.FocusRing, { ...d, children: I });
      });
    },
    628238: function (e, n, t) {
      t.d(n, {
        A: function () {
          return i;
        },
      });
      var r = t(709054);
      function i(e) {
        return !(e < r.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    753206: function (e, n, t) {
      var r = t(735250),
        i = t(470079),
        l = t(120356),
        o = t.n(l),
        u = t(628238),
        s = t(492593),
        a = t(25015),
        c = t(963550),
        d = t(845080),
        _ = t(916315);
      n.Z = i.memo(function (e) {
        var n;
        let {
            message: t,
            channel: i,
            compact: l,
            className: E,
            isGroupStart: f,
            hideSimpleEmbedContent: I = !0,
            disableInteraction: S,
          } = e,
          p = (0, u.A)(
            (null !== (n = t.editedTimestamp) && void 0 !== n
              ? n
              : t.timestamp
            ).valueOf(),
          ),
          { content: T } = (0, a.Z)(t, {
            hideSimpleEmbedContent: I,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, r.jsx)(s.Z, {
          compact: l,
          className: o()(E, {
            [_.message]: !0,
            [_.cozyMessage]: !l,
            [_.groupStart]: f,
          }),
          childrenHeader: (0, d.Z)({ ...e, channel: i, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, T),
          disableInteraction: S,
        });
      });
    },
    963550: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(930282);
      function l(e, n) {
        let { message: t } = e;
        return (0, r.jsx)(i.ZP, { message: t, content: n });
      }
    },
    845080: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var r = t(735250),
        i = t(470079),
        l = t(901461),
        o = t(464891);
      let u = i.memo(o.ZP);
      function s(e) {
        let {
          message: n,
          channel: t,
          author: i,
          compact: o,
          animateAvatar: s,
          guildId: a,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: _,
        } = e;
        return !(0, l.Z)(n) && (c || o)
          ? (0, r.jsx)(u, {
              message: n,
              channel: t,
              author: i,
              guildId: a,
              compact: o,
              animate: s,
              roleIcon: d,
              hideTimestamp: _,
            })
          : void 0;
      }
    },
    91802: function (e, n, t) {
      t.d(n, {
        n: function () {
          return l;
        },
      });
      var r = t(442837),
        i = t(351402);
      function l() {
        let { localizedPricingPromo: e, hasError: n } = (0, r.cj)(
          [i.Z],
          () => ({
            localizedPricingPromo: i.Z.localizedPricingPromo,
            hasError: i.Z.localizedPricingPromoHasError,
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
      var r = t(990547),
        i = t(213609);
      function l(e, n) {
        (0, i.Z)({
          type: r.ImpressionTypes.VIEW,
          name: r.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
          return _;
        },
        vY: function () {
          return E;
        },
      }),
        t(47120);
      var r = t(570140),
        i = t(821849),
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
      function s(e) {
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
      function a(e) {
        for (let n of (r.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(u),
        }),
        r.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
        }),
        e))
          r.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function c(e, n) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: n,
        });
        try {
          var t;
          let i = await l.jz(e, n);
          return (
            r.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: i,
            }),
            a(null !== (t = i.subscription_listings) && void 0 !== t ? t : []),
            i
          );
        } catch (n) {
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function d(e) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let n = await l.GF(e);
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: n,
          });
        } catch (n) {
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
            guildId: e,
          });
        }
      }
      function _(e) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function E(e) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var n;
          let t = await l.a_(e);
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
          });
          let o =
            null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
          for (let n of o)
            n.subscription_plans[0].id === e &&
              (await i.GZ(n.id, void 0, void 0, !0));
          a(o);
        } catch (e) {}
      }
    },
    488915: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      }),
        t(47120);
      var r,
        i,
        l,
        o,
        u,
        s,
        a = t(512722),
        c = t.n(a),
        d = t(442837),
        _ = t(759174),
        E = t(570140),
        f = t(959546),
        I = t(55563);
      function S(e) {
        return "subscription_listing:".concat(e);
      }
      function p(e) {
        return "application:".concat(e);
      }
      function T(e) {
        return "plan:".concat(e);
      }
      function C(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function g(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((l = r || (r = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let N = new _.h(
          (e) => [p(e.application_id), ...e.subscription_listings_ids.map(S)],
          (e) => e.id,
        ),
        m = new _.h(
          (e) => [p(e.application_id), T(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        A = new _.h(
          (e) => [
            C(e.applicationId, e.isValid(null, I.Z), e.guildId),
            g(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        h = {},
        v = {};
      function L(e) {
        var n;
        for (let t of (N.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            m.set(e.id, e);
          })(t);
      }
      class O extends (i = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = h[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return N.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = N.values(S(e));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return m.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return m.values(p(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = v[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = m.values(T(e));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return A.values(C(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return A.values(g(n, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (u = "displayName") in (o = O)
          ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = s),
        (n.Z = new O(E.Z, {
          LOGOUT: function () {
            N.clear(), m.clear(), A.clear(), (h = {}), (v = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            h[n] = 1;
            let r = N.get(t);
            if (null != r)
              for (let e of r.subscription_listings_ids) m.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (h[n] = 2), L(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            h[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            v[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (v[n] = 2),
              t.forEach((e) => {
                let n = f.Z.createFromServer(e);
                A.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            v[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            L(n);
          },
        }));
    },
    93127: function (e, n, t) {
      t.d(n, {
        W: function () {
          return a;
        },
        _: function () {
          return c;
        },
      });
      var r = t(544891),
        i = t(570140),
        l = t(480294),
        o = t(814443),
        u = t(428598),
        s = t(981631);
      function a() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: n,
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.shouldFetch() && l.Z.hasConsented(s.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: s.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((e) => {
                      var n, t, r, i, l, o, u, s;
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
                          null !== (r = e.vc_probability) && void 0 !== r
                            ? r
                            : 0,
                        vcRank:
                          null !== (i = e.vc_rank) && void 0 !== i ? i : 0,
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
                          null !== (s = e.communication_rank) && void 0 !== s
                            ? s
                            : 0,
                      };
                    }),
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
    },
    496232: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
      });
      let r = t(70956).Z.Millis.DAY;
    },
    428598: function (e, n, t) {
      let r;
      t(47120);
      var i,
        l = t(442837),
        o = t(570140),
        u = t(699516),
        s = t(496232);
      function a(e, n, t) {
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
        _ = { ...d };
      function E() {
        r = new Map(
          _.userAffinities
            .filter((e) => !u.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class f extends (i = l.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((_.userAffinities = e.userAffinities),
              (_.lastFetched = e.lastFetched),
              E()),
            this.syncWith([u.Z], E);
        }
        shouldFetch() {
          if (!c) return Date.now() - _.lastFetched > s.K;
        }
        isFetching() {
          return c;
        }
        getUserAffinities() {
          return _.userAffinities;
        }
        getUserAffinity(e) {
          return r.get(e);
        }
        getState() {
          return _;
        }
      }
      a(f, "displayName", "UserAffinitiesStoreV2"),
        a(f, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new f(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (_.lastFetched = Date.now()), (c = !1), (_.userAffinities = n), E();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (_ = { ...d }), (r = new Map()), (c = !1);
          },
        }));
    },
    170671: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(692547),
        l = t(313201);
      function o(e) {
        let { isSelected: n, ...t } = e,
          o = (0, l.Dt)();
        return (0, r.jsxs)("svg", {
          ...t,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(o, ")"),
          children: [
            (0, r.jsx)("path", {
              d: "M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, r.jsx)("path", {
              d: "M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z",
              fill: "url(#paint0_linear_6413_12612)",
            }),
            (0, r.jsx)("defs", {
              children: (0, r.jsxs)("linearGradient", {
                id: "paint0_linear_6413_12612",
                x1: "0.666992",
                y1: "0.127441",
                x2: "15.3271",
                y2: "0.127441",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, r.jsx)("stop", {
                    stopColor: n
                      ? i.Z.unsafe_rawColors.WHITE_500.css
                      : i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS
                          .css,
                  }),
                  (0, r.jsx)("stop", {
                    offset: "0.502368",
                    stopColor: n
                      ? i.Z.unsafe_rawColors.WHITE_500.css
                      : i.Z.unsafe_rawColors
                          .PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                  }),
                  (0, r.jsx)("stop", {
                    offset: "1",
                    stopColor: n
                      ? i.Z.unsafe_rawColors.WHITE_500.css
                      : i.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS
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
      var r,
        i = t(735250),
        l = t(470079),
        o = t(120356),
        u = t.n(o),
        s = t(481060),
        a = t(598077),
        c = t(908860),
        d = t(579861);
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
      class E extends (r = l.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: n,
              renderUser: t = this.defaultRenderUser,
              renderMoreUsers: r,
            } = this.props,
            i = [],
            l = e.length === n ? e.length : n - 1,
            o = 0;
          for (; o < l && o < e.length; ) {
            let n = o === e.length - 1;
            i.push(
              t(e[o] || null, n ? null : c.avatarMasked, "user-".concat(o), n),
            ),
              o++;
          }
          if (o < e.length) {
            let n = Math.min(e.length - o, 99);
            i.push(r("+".concat(n), c.moreUsers, "more-users", n));
          }
          return i;
        }
        renderIcon() {
          return this.props.icon
            ? (0, i.jsx)("div", {
                className: c.iconContainer,
                children: (0, i.jsx)(s.VoiceNormalIcon, {
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
          return (0, i.jsxs)("div", {
            className: u()(e, c.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, n, t, r) => {
              let { onClick: l, size: o, guildId: _ } = this.props,
                E = e instanceof a.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, i.jsx)("div", { className: u()(c.emptyUser, n) }, t)
                : (0, i.jsx)(
                    s.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, s.getAvatarSize)(o)),
                      size: o,
                      "aria-label": E.username,
                      className: u()(n, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != l ? l(e, E, this._ref) : null),
                    },
                    E.id,
                  );
            });
        }
      }
      _(E, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, n, t) {
          return (0, i.jsx)("div", { className: n, children: e }, t);
        },
        size: s.AvatarSizes.SIZE_24,
      }),
        (n.Z = E);
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(325767);
      function l(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: l = "currentColor",
          foreground: o,
          ...u
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(u),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
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
          return s;
        },
      }),
        t(411104);
      var r = t(735250);
      t(470079);
      var i = t(239091);
      function l(e, n, l) {
        l.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("79107"),
                t.e("92453"),
                t.e("60222"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, r.jsx)(e, { ...t, user: n, channel: l });
            })
          : l.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  t.e("50506"),
                  t.e("79695"),
                  t.e("79107"),
                  t.e("59743"),
                  t.e("92453"),
                  t.e("22036"),
                  t.e("56826"),
                  t.e("95470"),
                ]).then(t.bind(t, 131404));
                return (t) =>
                  (0, r.jsx)(e, {
                    ...t,
                    user: n,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("50506"),
                    t.e("79695"),
                    t.e("79107"),
                    t.e("92453"),
                    t.e("13125"),
                    t.e("34879"),
                  ]).then(t.bind(t, 757387));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("79695"),
                    t.e("69220"),
                    t.e("50261"),
                  ]).then(t.bind(t, 881351));
                  return (t) => (0, r.jsx)(e, { ...t, user: n });
                });
      }
      function o(e, n) {
        let { user: l, channel: o, moderationAlertId: u, guildId: s, ...a } = n;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != s ? s : null == o ? void 0 : o.getGuildId();
        null != c &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              t.e("13125"),
              t.e("33685"),
            ]).then(t.bind(t, 833737));
            return (n) =>
              (0, r.jsx)(e, {
                ...n,
                user: l,
                channelId: null == o ? void 0 : o.id,
                guildId: c,
                moderationAlertId: u,
                ...a,
              });
          });
      }
      function u(e, n) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: u,
          onCloseContextMenu: s,
          isViewOnly: a,
        } = n;
        (0, i.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, r.jsx)(e, {
              ...n,
              user: l,
              guildId: o,
              analyticsLocations: u,
              onCloseContextMenu: s,
              isViewOnly: a,
            });
        });
      }
      function s(e, n, l) {
        null != l &&
          (0, i.jW)(e, async () => {
            let { default: e } = await t.e("50331").then(t.bind(t, 158195));
            return (n) => (0, r.jsx)(e, { ...n, guildId: l });
          });
      }
    },
    401653: function (e, n, t) {
      var r, i;
      t.d(n, {
        j: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (i[(i.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (i[(i.USER_COMMUNICATION_DISABLED = 3)] =
          "USER_COMMUNICATION_DISABLED"),
        (i[(i.QUARANTINE_USER = 4)] = "QUARANTINE_USER");
    },
    95930: function (e, n, t) {
      var r, i;
      t.d(n, {
        q: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (i[(i.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (e, n, t) {
      var r, i;
      t.d(n, {
        f: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.KEYWORD = 1)] = "KEYWORD"),
        (i[(i.SPAM_LINK = 2)] = "SPAM_LINK"),
        (i[(i.ML_SPAM = 3)] = "ML_SPAM"),
        (i[(i.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (i[(i.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (i[(i.USER_PROFILE = 6)] = "USER_PROFILE"),
        (i[(i.SERVER_POLICY = 7)] = "SERVER_POLICY");
    },
  },
]);
//# sourceMappingURL=95c26f1a7537dafb6b9c.js.map
