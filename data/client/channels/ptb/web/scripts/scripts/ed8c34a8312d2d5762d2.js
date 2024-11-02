"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50104"],
  {
    269128: function (t, n, e) {
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(772848),
        u = e(841261);
      let a = (0, o.Z)();
      n.Z = (t) => {
        let { open: n, className: e, withHighlight: r = !1 } = t;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(u.button, e, { [u.open]: n, [u.withHighlight]: r }),
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
    774078: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(192379),
        r = e(931609),
        l = e(55935),
        o = e(745735);
      function u(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          e = arguments.length > 2 ? arguments[2] : void 0,
          u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          a = (0, l.TD)(Date.now(), t),
          s = (0, r.Z)(),
          c = (0, i.useCallback)(() => {
            if (
              (0 !== a.days ||
                0 !== a.hours ||
                0 !== a.minutes ||
                0 !== a.seconds) &&
              !u
            )
              s(), null == e || e();
          }, [a, u, s, e]);
        return (0, o.Z)(c, u ? null : n), a;
      }
    },
    745735: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(192379),
        r = e(512722),
        l = e.n(r);
      function o(t, n) {
        let e = (0, i.useRef)(t);
        (0, i.useEffect)(() => {
          e.current = t;
        }, [t]),
          (0, i.useEffect)(() => {
            if (null === n) return;
            let t = setInterval(function () {
              l()(null != e.current, "Missing callback"), e.current();
            }, n);
            return () => clearInterval(t);
          }, [n]);
      }
    },
    935369: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(479531),
        l = e(388032);
      function o(t) {
        let [n, e] = i.useState(!1),
          [o, u] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                i[o] = arguments[o];
              try {
                return u(null), e(!0), await t(...i);
              } catch (t) {
                t.message !== l.intl.string(l.t.N2yb9f) &&
                  u(t instanceof r.Z ? t : new r.Z(t));
              } finally {
                e(!1);
              }
            },
            [t],
          ),
          { loading: n, error: o },
        ];
      }
    },
    724757: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(192379),
        r = e(924826),
        l = e(442837),
        o = e(607070);
      function u(t, n, e) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
          a = i.useCallback(
            (t) => {
              let e = document.querySelector(t),
                i = n.current;
              null != e &&
                null != i &&
                (e.focus(), i.scrollIntoViewNode({ node: e, padding: 80 }));
            },
            [n],
          ),
          s = i.useCallback(
            () =>
              new Promise((t) => {
                let e = n.current;
                if (null == e) return t();
                e.scrollTo({
                  to: 0,
                  callback: () => requestAnimationFrame(() => t()),
                });
              }),
            [n],
          ),
          c = i.useCallback(
            () =>
              new Promise((t) => {
                let e = n.current;
                if (null == e) return t();
                e.scrollTo({
                  to: Number.MAX_SAFE_INTEGER,
                  callback: () => requestAnimationFrame(() => t()),
                });
              }),
            [n],
          );
        return (0, r.ZP)({
          id: t,
          isEnabled: u,
          setFocus: a,
          scrollToStart: s,
          scrollToEnd: c,
          orientation: null == e ? void 0 : e.orientation,
        });
      }
    },
    357352: function (t, n, e) {
      e.d(n, {
        b: function () {
          return i;
        },
      });
      function i(t) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(t);
      }
    },
    201895: function (t, n, e) {
      e.d(n, {
        ZP: function () {
          return c;
        },
      }),
        e(653041);
      var i = e(131704),
        r = e(699516),
        l = e(594174),
        o = e(933557),
        u = e(981631),
        a = e(388032);
      function s(t) {
        let { isSubscriptionGated: n, needSubscriptionToAccess: e } = t;
        if (n)
          return e ? a.intl.string(a.t["oj+HOj"]) : a.intl.string(a.t.xI3TQU);
      }
      function c(t) {
        let n,
          {
            channel: e,
            unread: c = !1,
            mentionCount: d = 0,
            userCount: f,
            embeddedActivitiesCount: _,
            isSubscriptionGated: p,
            needSubscriptionToAccess: E,
          } = t,
          g = (0, o.F6)(e, l.default, r.Z);
        switch (e.type) {
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
            let m = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: e.name }),
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
              let t = e.userLimit;
              null != t && t > 0
                ? m.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: f,
                      limit: t,
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
            let h = s({ isSubscriptionGated: p, needSubscriptionToAccess: E });
            return null != h && m.push(h), m.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            n = a.t.TPPk2d;
            break;
          default:
            n = i.Ec.has(e.type)
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
          S = s({ isSubscriptionGated: p, needSubscriptionToAccess: E });
        return null != S && I.push(S), I.join(", ");
      }
    },
    17079: function (t, n, e) {
      e.d(n, {
        T: function () {
          return l;
        },
      });
      var i = e(570140),
        r = e(155414);
      async function l(t, n) {
        i.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: t,
          priceTierType: n,
        });
        try {
          let e = await r.X(t, n);
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: t,
            priceTierType: n,
            priceTiers: e,
          });
        } catch (e) {
          i.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
            guildId: t,
            priceTierType: n,
          });
        }
      }
    },
    333866: function (t, n, e) {
      e.d(n, {
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
        u = e(388032);
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
    76535: function (t, n, e) {
      e.d(n, {
        H: function () {
          return s;
        },
        R: function () {
          return a;
        },
      });
      var i = e(192379),
        r = e(442837),
        l = e(584825),
        o = e(17079),
        u = e(281320);
      function a(t, n) {
        let e = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(t, n)),
          l = (0, r.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(t, n),
          );
        return (
          i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(t, n);
          }, [t, l, n]),
          { loading: l === u.M.FETCHING, priceTiers: e }
        );
      }
      function s(t) {
        let {
          fetchSubscriptionsSettings: n,
          loading: e,
          error: r,
        } = (0, l.JH)();
        i.useEffect(() => {
          n(t);
        }, [n, t]);
        let o = (0, l.YB)(t);
        return {
          loaded: null != o && !e,
          subscriptionsSettings: o,
          loading: e,
          error: r,
        };
      }
    },
    155414: function (t, n, e) {
      e.d(n, {
        X: function () {
          return o;
        },
      });
      var i = e(544891),
        r = e(881052),
        l = e(981631);
      let o = async (t, n) => {
        try {
          return (
            await i.tn.get({
              url: l.ANM.PRICE_TIERS,
              query: { price_tier_type: n, guild_id: t },
            })
          ).body;
        } catch (t) {
          throw new r.Hx(t);
        }
      };
    },
    281320: function (t, n, e) {
      e.d(n, {
        M: function () {
          return i;
        },
      }),
        e(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = e(442837),
        c = e(570140);
      let d = new Map(),
        f = new Map();
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class _ extends (r = s.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(t, n) {
          var e, i;
          return null !==
            (i = null === (e = f.get(t)) || void 0 === e ? void 0 : e.get(n)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(t, n) {
          var e;
          return null === (e = d.get(t)) || void 0 === e ? void 0 : e.get(n);
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
        (n.Z = new _(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), f.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (t) {
            let { guildId: n, priceTierType: e } = t;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(e, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (t) {
            let { guildId: n, priceTierType: e, priceTiers: i } = t;
            !f.has(n) && f.set(n, new Map()),
              f.get(n).set(e, 2),
              !d.has(n) && d.set(n, new Map()),
              d.get(n).set(e, i);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (t) {
            let { guildId: n, priceTierType: e } = t;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(e, 2);
          },
        }));
    },
    834431: function (t, n, e) {
      e.d(n, {
        n: function () {
          return r;
        },
      });
      var i = e(506071);
      function r() {
        return (0, i.n)();
      }
    },
    166081: function (t, n, e) {
      e.d(n, {
        U: function () {
          return u;
        },
      });
      var i = e(192379),
        r = e(695346),
        l = e(73346),
        o = e(834431);
      function u(t, n) {
        let { shouldAnimate: e = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          a = (0, o.n)(),
          s = e && a && u;
        return i.useMemo(() => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, l._W)(
              t.application_id,
              t.image_asset,
              n,
              s ? void 0 : "webp",
            );
        }, [n, t, s]);
      }
    },
    629481: function (t, n, e) {
      var i, r, l, o;
      e.d(n, {
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
    841762: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var i = e(200651),
        r = e(192379),
        l = e(120356),
        o = e.n(l),
        u = e(481060),
        a = e(456692);
      function s(t) {
        let { alt: n, ...e } = t,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...e, alt: n, onLoad: () => o(!1) }),
          ],
        });
      }
      function c(t) {
        let {
          src: n,
          backgroundSrc: e,
          alt: r,
          aspectRatio: l,
          className: u,
          imageChildClassName: c,
          ...d
        } = t;
        return (0, i.jsxs)("div", {
          className: o()(a.container, u),
          children: [
            (0, i.jsx)("img", { src: e, alt: r, className: a.backgroundImage }),
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
    285888: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return m;
        },
        v: function () {
          return g;
        },
      }),
        e(47120);
      var i,
        r,
        l,
        o = e(200651),
        u = e(192379),
        a = e(120356),
        s = e.n(a),
        c = e(569619),
        d = e(481060),
        f = e(981631),
        _ = e(388032),
        p = e(404934);
      function E(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      ((l = i || (i = {})).TOP = "top"), (l.BOTTOM = "bottom");
      let g = {
        container: (t, n) => {
          let { isDisabled: e } = n;
          return {
            ...t,
            cursor: e ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (t, n) => {
          let { isDisabled: e, menuIsOpen: i } = n;
          return {
            ...t,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: e ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: i ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: e ? "not-allowed" : void 0,
            pointerEvents: e ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (t, n) => {
          let { isDisabled: e } = n;
          return {
            ...t,
            color: "var(--interactive-normal)",
            opacity: e ? 0.5 : 1,
          };
        },
        input: (t) => ({ ...t, color: "var(--interactive-normal)" }),
        menu: (t) => ({
          ...t,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (t, n) => {
          let { isDisabled: e } = n;
          return {
            ...t,
            color: "var(--interactive-normal)",
            cursor: e ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (t) => ({ ...t, alignItems: "flex-start" }),
        dropdownIndicator: (t, n) => {
          let { isDisabled: e } = n;
          return {
            ...t,
            color: "var(--interactive-normal)",
            cursor: e ? void 0 : "pointer",
            opacity: e ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: e ? 0.3 : 1,
            },
          };
        },
        menuList: (t) => ({
          ...t,
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
        option: (t, n) => {
          let { isSelected: e, isFocused: i } = n;
          return {
            ...t,
            ...(e
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
        placeholder: (t) => ({ ...t, color: "var(--text-muted)" }),
      };
      class m extends (r = u.Component) {
        focus() {
          var t;
          null === (t = this._selectRef.current) || void 0 === t || t.focus();
        }
        render() {
          let t;
          let {
              className: n,
              selectClassName: e,
              error: i,
              valueRenderer: r,
              optionRenderer: l,
              multiValueRenderer: u,
              options: a,
              value: f,
              autofocus: E,
              disabled: m,
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
          null != E && (A.autoFocus = E),
            null != m && (A.isDisabled = m),
            null != h && (A.isClearable = h),
            null != I && (A.isSearchable = I);
          let O = { IndicatorSeparator: () => null };
          null != l &&
            (O.Option = (t) =>
              (0, o.jsx)(c.wx.Option, { ...t, children: l(t.data) })),
            null != r &&
              (O.SingleValue = (t) =>
                (0, o.jsx)(c.wx.SingleValue, { ...t, children: r(t.data) })),
            null != u && (O.MultiValue = (t) => u(t.data));
          if (v && Array.isArray(f)) {
            let n = {};
            a.forEach((t) => {
              n[String(t.value)] = t;
            }),
              (t = f.map((t) => n[String(t)]));
          } else t = null != f ? a.find((t) => t.value === f) : null;
          return (0, o.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)("div", {
              className: s()(p.select, n, { [p.error]: null != i }),
              ref: this._containerRef,
              children: [
                (0, o.jsx)(c.ZP, {
                  ...A,
                  className: e,
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
                  value: t,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != C ? C : _.intl.string(_.t.XqMe3N),
                  noOptionsMessage: () => _.intl.string(_.t["Xe+fJC"]),
                  filterOption: T,
                }),
                null != i
                  ? (0, o.jsx)("div", {
                      className: p.errorMessage,
                      children: i,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...t) {
          super(...t),
            E(this, "_selectRef", u.createRef()),
            E(this, "_containerRef", u.createRef()),
            E(this, "state", { isFocused: !1, isOpen: !1 }),
            E(this, "handleFocus", (t) => {
              var n, e;
              this.setState({ isFocused: !0 }),
                null === (n = (e = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(e, t);
            }),
            E(this, "handleBlur", (t) => {
              var n, e;
              this.setState({ isFocused: !1 }),
                null === (n = (e = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(e, t);
            }),
            E(this, "handleKeyDown", (t) => {
              t.which === f.yXg.ESCAPE &&
                this.state.isOpen &&
                t.stopPropagation();
            }),
            E(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            E(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      E(m, "MenuPlacements", i);
    },
    479099: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return S;
        },
        f: function () {
          return v;
        },
      }),
        e(47120);
      var i,
        r,
        l = e(200651),
        o = e(192379),
        u = e(120356),
        a = e.n(u),
        s = e(91192),
        c = e(442837),
        d = e(481060),
        f = e(239091),
        _ = e(596454),
        p = e(607070),
        E = e(339085),
        g = e(695346),
        m = e(572004),
        h = e(388032),
        I = e(813778);
      function S(t) {
        let {
            tag: n,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: S,
            onRemove: v,
            selected: C,
            ariaLabel: T,
          } = t,
          { name: N, emojiId: b, emojiName: A } = n,
          O = null != v,
          [P, L] = o.useState(!1),
          R = (0, c.e7)([E.ZP], () =>
            null != b ? E.ZP.getUsableCustomEmojiById(b) : null,
          ),
          y = O || null != S,
          M = (!O || !P) && (null != b || null != A),
          x = 0 === i,
          Z = o.useRef(null),
          U = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
          D = (t) => {
            let i = g.Sb.getSetting();
            m.wS &&
              i &&
              (0, f.jW)(t, async () => {
                let { default: t } = await e.e("29646").then(e.bind(e, 955116));
                return (e) => (0, l.jsx)(t, { ...e, tag: n });
              });
          },
          j = (0, l.jsxs)(l.Fragment, {
            children: [
              M
                ? (0, l.jsx)(_.Z, {
                    className: a()(I.emoji, { [I.small]: x }),
                    emojiId: b,
                    emojiName: A,
                    animated: !!(null == R ? void 0 : R.animated),
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
                variant: x ? "text-xs/semibold" : "text-sm/semibold",
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
                [I.clickable]: y,
                [I.small]: x,
                [I.selected]: C,
              },
              u,
            ),
            onClick: (t) => {
              null == S || S(t),
                null == v || v(n),
                !U && null != Z.current && Z.current.blur();
            },
            onContextMenu: (t) => D(t),
            onMouseEnter: () => O && L(!0),
            onMouseLeave: () => O && L(!1),
          },
          F = (0, s.JA)("forum-tag-".concat(n.id));
        return y
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
              children: j,
            })
          : (0, l.jsx)("div", { ...w, children: j });
      }
      function v(t) {
        let { tags: n, count: e, size: i = 1 } = t,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": h.intl.string(h.t["P/y+sr"]),
          text: (0, l.jsx)(l.Fragment, {
            children: n.map((t) =>
              (0, l.jsx)(
                S,
                { tag: t, className: I.tooltipPill, size: S.Sizes.SMALL },
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
                children: ["+", e],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (S.Sizes = i);
    },
    528011: function (t, n, e) {
      e.d(n, {
        g: function () {
          return g;
        },
        mI: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(149765),
        r = e(399606),
        l = e(581883),
        o = e(430824),
        u = e(496675),
        a = e(914010),
        s = e(594174),
        c = e(700785),
        d = e(709054),
        f = e(533244),
        _ = e(487419),
        p = e(676770);
      e(981631);
      function E(t) {
        let n = (0, r.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(t);
            if (null == n) return !1;
            let e = u.Z.getGuildPermissions(n);
            return null != e && i.Db(e, p.cv);
          }),
          e = (0, r.e7)([_.Z], () =>
            null != t ? _.Z.getGuildIncident(t) : null,
          ),
          l = null != e && (0, f.ur)(e);
        return {
          shouldShowIncidentActions: n,
          incidentData: e,
          isUnderLockdown: l,
        };
      }
      function g() {
        var t;
        let n = (function (t) {
            let n = s.default.getCurrentUser(),
              e = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(e).map((t) => o.Z.getGuild(t))) {
              if (null == r) continue;
              let l = e[r.id];
              if (
                !(
                  null == l ||
                  (!(0, f.i9)(l) && !(0, f.ur)(l)) ||
                  ((0, f.ur)(l) && r.id !== t)
                )
              ) {
                if (
                  i.Db(c.uB({ user: n, context: r, checkElevated: !1 }), p.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          e = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
          r = null != n ? e[n] : null,
          u = null != r && r.disableRaidAlertNag;
        return { show: null != n && !u, guildId: n };
      }
    },
    273504: function (t, n, e) {
      e.d(n, {
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
          return m;
        },
        Vk: function () {
          return _;
        },
        _6: function () {
          return S;
        },
        aj: function () {
          return E;
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
          return p;
        },
      });
      var i,
        r,
        l = e(401653),
        o = e(95930),
        u = e(41381);
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
        E = 260,
        g = 100,
        m = 1,
        h = 50,
        I = 20,
        S = 150,
        v = "automod-profile-quarantine-alert";
    },
    787824: function (t, n, e) {
      e.d(n, {
        C: function () {
          return function t(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((e, r) => {
                  let l = (0, i.camelCase)(r);
                  return (
                    "object" != typeof n[r] || Array.isArray(n[r])
                      ? (e[l] = n[r])
                      : (e[l] = t(n[r])),
                    e
                  );
                }, {});
          };
        },
        X: function () {
          return function t(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((e, r) => {
                  let l = (0, i.snakeCase)(r);
                  return (
                    "object" != typeof n[r] || Array.isArray(n[r])
                      ? (e[l] = n[r])
                      : (e[l] = t(n[r])),
                    (e[l] = n[r]),
                    e
                  );
                }, {});
          };
        },
      }),
        e(724458);
      var i = e(392711);
    },
    226192: function (t, n, e) {
      e.d(n, {
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
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(273504),
        o = e(388032);
      function u(t) {
        return {
          [l.jj.BLOCK_MESSAGE]: (t, n) =>
            new Promise((t) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await e.e("94005").then(e.bind(e, 144462));
                return (e) => {
                  var l;
                  return (0, i.jsx)(r, {
                    initialCustomMessage:
                      null !== (l = n.metadata.customMessage) && void 0 !== l
                        ? l
                        : "",
                    onSubmit: (i) => {
                      (n.metadata.customMessage = i), t(n), e.onClose();
                    },
                    ...e,
                    onClose: () => (t(null), e.onClose()),
                  });
                };
              });
            }),
          [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await e.e("74543").then(e.bind(e, 643611)),
                  a = n.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                return (e) =>
                  (0, i.jsx)(r, {
                    action: o,
                    isEdit: null != a,
                    triggerType: n.triggerType,
                    guildId: t,
                    onEditChannel: (t) => {
                      (o.metadata.channelId = t),
                        n.exemptChannels.add(t),
                        u(o),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (u(null), e.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (t, n) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await e.e("78273").then(e.bind(e, 41767)),
                  u = t.actions.find(
                    (t) => t.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (e) =>
                  (0, i.jsx)(r, {
                    action: n,
                    isEdit: null != u,
                    triggerType: t.triggerType,
                    onUpdateDuration: (t) => {
                      null != t && (n.metadata.durationSeconds = t),
                        o(n),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (o(null), e.onClose()),
                  });
              });
            }),
        };
      }
      function a(t, n, l, o) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await e.e("37483").then(e.bind(e, 241046));
          return (e) =>
            (0, i.jsx)(r, {
              ...e,
              automodDecision: {
                messageId: t,
                messageContent: n,
                decisionId: l,
                channel: o,
              },
            });
        });
      }
      function s(t, n) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await e.e("28382").then(e.bind(e, 537623));
          return (e) => (0, i.jsx)(r, { ...e, messageId: t, guildId: n });
        });
      }
      function c(t) {
        (0, r.openModal)((n) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t["cY+Ooa"]),
            onConfirm: t,
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
    36459: function (t, n, e) {
      e.d(n, {
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
        e(47120);
      var i = e(544891),
        r = e(570140),
        l = e(367907),
        o = e(430824),
        u = e(496675),
        a = e(823379),
        s = e(709054),
        c = e(177862),
        d = e(787824),
        f = e(226192),
        _ = e(981631);
      function p(t) {
        return { type: t.type, metadata: (0, d.X)(t.metadata) };
      }
      function E(t) {
        var n, e;
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
            actions: t.actions.filter(a.lm).map(p),
            enabled: t.enabled,
            creator_id: t.creatorId,
            position: t.position,
            exempt_channels: Array.from(
              null !== (n = t.exemptChannels) && void 0 !== n ? n : [],
            ),
            exempt_roles: Array.from(
              null !== (e = t.exemptRoles) && void 0 !== e ? e : [],
            ),
          }
        );
      }
      function g(t) {
        return { type: t.type, metadata: (0, d.C)(t.metadata) };
      }
      function m(t) {
        var n, e, i;
        let r = {
          id:
            null !== (n = t.id) && void 0 !== n
              ? n
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
            null !== (e = t.exempt_channels) && void 0 !== e ? e : [],
          ),
          exemptRoles: new Set(
            null !== (i = t.exempt_roles) && void 0 !== i ? i : [],
          ),
        };
        return (
          null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r
        );
      }
      async function h(t) {
        let n = E(t),
          e = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: n,
          });
        return (0, d.C)(e.body);
      }
      async function I(t) {
        let n = E(t);
        return (
          delete n.id,
          m(
            (
              await i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                body: n,
              })
            ).body,
          )
        );
      }
      async function S(t) {
        let n = E(t);
        return m(
          (
            await i.tn.patch({
              url: _.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
              body: n,
            })
          ).body,
        );
      }
      async function v(t, n) {
        return await i.tn.del({ url: _.ANM.GUILD_AUTOMOD_RULE(n, t) }), !0;
      }
      async function C(t) {
        let n = await i.tn.get({ url: _.ANM.GUILD_AUTOMOD_RULES(t) });
        return Array.isArray(n.body) ? n.body.map(m) : [];
      }
      async function T(t, n, e) {
        if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, n))
          await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: t, channel_id: n.id, alert_action_type: e },
          });
      }
      function N(t, n, e) {
        let r = o.Z.getGuild(t);
        if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              i.tn.post({ url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t) }),
              e();
          });
      }
      function b(t) {
        r.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: t,
        });
      }
    },
    223606: function (t, n, e) {
      e(724458);
      var i,
        r = e(442837),
        l = e(570140),
        o = e(673750),
        u = e(786761),
        a = e(592125),
        s = e(375954),
        c = e(709054),
        d = e(539573),
        f = e(825829),
        _ = e(981631);
      function p(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let E = {},
        g = 0,
        m = {},
        h = {},
        I = (t, n) => {
          let e = (0, o.hc)(t),
            i = {
              id: e,
              isBlockedEdit: (0, o.Bz)(t),
              messageData: t,
              errorMessage: (0, d.uF)(t, n),
            };
          (E[e] = i), g++;
        },
        S = (t) => E[t],
        v = (t) => {
          null != E[t] && delete E[t], g++;
        };
      function C(t) {
        let { messageData: n, errorResponseBody: e } = t;
        return I(n, e), !0;
      }
      function T(t) {
        var n;
        let { channelId: e, messages: i } = t,
          r =
            null === (n = a.Z.getChannel(e)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == r) return !1;
        let l = h[r],
          o = i.reduce((t, n) => {
            var e;
            return n.type === _.uaV.AUTO_MODERATION_ACTION &&
              (null === (e = n.embeds) || void 0 === e
                ? void 0
                : e.some((t) => {
                    let { type: n } = t;
                    return n === _.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == t || -1 === c.default.compare(t, n.id)
                ? n.id
                : void 0
              : t;
          }, l);
        return null != o && h[r] !== o && ((h[r] = o), !0);
      }
      class N extends (i = r.ZP.PersistedStore) {
        initialize(t) {
          this.waitFor(s.Z),
            null != t &&
              ((E = t.automodFailedMessages),
              (m = t.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: E,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: h,
          };
        }
        getMessage(t) {
          var n;
          return null == t
            ? null
            : null !== (n = S(t)) && void 0 !== n
              ? n
              : null;
        }
        getMessagesVersion() {
          return g;
        }
        getMentionRaidDetected(t) {
          var n;
          return null !== (n = m[t]) && void 0 !== n ? n : null;
        }
        getLastIncidentAlertMessage(t) {
          var n;
          return null !== (n = h[t]) && void 0 !== n ? n : null;
        }
      }
      p(N, "displayName", "GuildAutomodMessageStore"),
        p(N, "persistKey", "GuildAutomodMessages"),
        (n.Z = new N(l.Z, {
          CONNECTION_OPEN: function (t) {
            return (E = {}), g++, !0;
          },
          LOAD_MESSAGES_SUCCESS: T,
          LOCAL_MESSAGES_LOADED: T,
          MESSAGE_CREATE: function (t) {
            let { guildId: n, message: e } = t;
            if (null == n || e.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(e);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[n] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: C,
          MESSAGE_EDIT_FAILED_AUTOMOD: C,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
            let { messageId: n } = t;
            return v(n), !0;
          },
          MESSAGE_END_EDIT: function (t) {
            let { response: n } = t;
            if (
              (null == n ? void 0 : n.body) == null ||
              n.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let e = n.body.id;
            if (null == e) return !1;
            v(e);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
            let {
              guildId: n,
              decisionId: e,
              suspiciousMentionActivityUntil: i,
            } = t;
            return (
              (m[n] = {
                guildId: n,
                decisionId: e,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
            let { guildId: n } = t;
            return delete m[n], !0;
          },
        }));
    },
    290034: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(297700),
        u = e(471885),
        a = e(981631),
        s = e(188662);
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
          premiumTier: n,
          iconBackgroundClassName: e,
          iconClassName: r,
          size: a,
        } = t;
        return (0, i.jsx)(o.Z, {
          className: l()(e, c[n]),
          size: a,
          children: (0, i.jsx)(u.Z, {
            tier: n,
            className: l()(r, s.boostedGuildIconGem, d[n]),
          }),
        });
      }
    },
    527379: function (t, n, e) {
      e.d(n, {
        Dr: function () {
          return p;
        },
        YO: function () {
          return f;
        },
        _X: function () {
          return E;
        },
        _o: function () {
          return _;
        },
        nb: function () {
          return g;
        },
        zO: function () {
          return d;
        },
      });
      var i = e(570140),
        r = e(434404),
        l = e(703656),
        o = e(430824),
        u = e(241559),
        a = e(327999),
        s = e(981631),
        c = e(176505);
      async function d(t) {
        await i.Z.dispatch({
          type: "INITIALIZE_MEMBER_SAFETY_STORE",
          guildId: t,
        });
      }
      function f(t) {
        i.Z.dispatch({
          type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
          guildId: t,
        });
      }
      function _(t, n) {
        let { continuationToken: e, ...r } = n;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: t,
          pagination: r,
        });
      }
      async function p(t, n) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: t,
          searchState: n,
        });
      }
      function E(t) {
        let n = (0, u.lv)(t),
          e = o.Z.getGuild(t);
        return (
          !!n &&
          null != e &&
          (e.hasFeature(s.oNc.COMMUNITY) ||
          e.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, l.uL)(s.Z5c.CHANNEL(t, c.oC.MEMBER_SAFETY)), !0)
            : (r.Z.open(e.id, s.pNK.MEMBERS), !0))
        );
      }
      async function g(t, n) {
        let e = await (0, a._2)(t, n);
        return 0 === e.length
          ? []
          : (await i.Z.dispatch({
              type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
              guildId: t,
              memberSupplementals: e,
            }),
            e);
      }
    },
    495437: function (t, n, e) {
      e.d(n, {
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
      var i = e(570140),
        r = e(881052),
        l = e(824389);
      let o = async (t) => {
          i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
          try {
            let n = await l.uV(t);
            i.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: t,
              products: n,
            });
          } catch (n) {
            i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
          }
        },
        u = async (t, n) => {
          i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: n });
          try {
            let e = await l.p9(t, n);
            return (
              i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: e }),
              e
            );
          } catch (t) {
            throw (
              (i.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: n,
                error: new r.Hx(t),
              }),
              t)
            );
          }
        };
      async function a(t, n, e) {
        let r = await l.Je(t, n, e);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function s(t, n) {
        return (
          await l.mh(t, n),
          i.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: n }),
          !0
        );
      }
    },
    267101: function (t, n, e) {
      e.d(n, {
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
          return E;
        },
        ue: function () {
          return p;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(442837);
      e(935369);
      var l = e(38618),
        o = e(160404),
        u = e(496675),
        a = e(914010),
        s = e(495437),
        c = e(240864),
        d = e(981631);
      let f = (t) => {
          let n = (0, r.e7)(
              [c.Z],
              () =>
                null != t
                  ? c.Z.getGuildProductsForGuildFetchState(t)
                  : c.M.FETCHED,
              [t],
            ),
            e = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
          return (
            i.useEffect(() => {
              o &&
                (n === c.M.NOT_FETCHED ||
                  (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(t))) &&
                e &&
                s.EB(t),
                u(!e);
            }, [t, e, n, o]),
            { listingsLoaded: n === c.M.FETCHED && !o }
          );
        },
        _ = function (t, n) {
          let { requireCurrentGuild: e } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(n);
              if ((!e || u === t) && o && i === c.M.NOT_FETCHED)
                try {
                  s.cf(t, n);
                } catch (t) {}
            }, [t, n, o, u, e]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        p = function (t) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(t, {
              publishedOnly: null != n ? n : !o.Z.isViewingServerShop(t),
            }),
          );
        },
        E = (t) =>
          (0, r.e7)([c.Z], () => (null == t ? void 0 : c.Z.getGuildProduct(t))),
        g = (t) =>
          (0, r.e7)([u.Z], () => null != t && u.Z.can(d.Plq.ADMINISTRATOR, t));
    },
    824389: function (t, n, e) {
      e.d(n, {
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
      var i = e(544891),
        r = e(881052),
        l = e(73346),
        o = e(981631);
      let u = async (t, n, e) => {
          let {
            priceTier: l,
            imageName: u,
            createNewRole: a,
            unlinkRole: s,
            ...c
          } = e;
          try {
            return (
              await i.tn.patch({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                body: {
                  ...c,
                  image_name: u,
                  price_tier: l,
                  create_new_role: a,
                  unlink_role: s,
                },
              })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        a = async (t, n) => {
          try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n) });
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        s = async (t) => {
          try {
            return (await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t) }))
              .body.listings;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        c = async (t, n) => {
          try {
            return (
              await (0, l.Kb)({ url: o.ANM.GUILD_PRODUCT_LISTINGS(t, n) })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        d = async (t) => {
          let { guildId: n, productId: e, attachmentId: l } = t;
          try {
            return (
              await i.tn.post({
                url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, e, l),
              })
            ).body;
          } catch (t) {
            throw new r.Hx(t);
          }
        };
    },
    240864: function (t, n, e) {
      e.d(n, {
        M: function () {
          return i;
        },
      }),
        e(653041),
        e(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = e(442837),
        c = e(759174),
        d = e(570140),
        f = e(70956),
        _ = e(709054);
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let p = {},
        E = {},
        g = {},
        m = 10 * f.Z.Millis.MINUTE;
      function h(t) {
        return "guild:".concat(t);
      }
      function I(t) {
        return "guild:".concat(t, ":published");
      }
      let S = new c.h(
          (t) => {
            let n = [h(t.guild_id)];
            return t.published && n.push(I(t.guild_id)), n;
          },
          (t) =>
            (function (t) {
              let n = _.default.extractTimestamp(t.id);
              return t.published ? -n : -n + 1e12;
            })(t),
        ),
        v = [];
      class C extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(t) {
          var n;
          return null !== (n = p[t]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(t) {
          return S.get(t);
        }
        getGuildProductsForGuild(t, n) {
          let { publishedOnly: e } = n;
          return null == t ? v : S.values(e ? I(t) : h(t));
        }
        getGuildProductFetchState(t) {
          var n;
          return null !== (n = E[t]) && void 0 !== n ? n : 0;
        }
        isGuildProductsCacheExpired(t) {
          var n;
          return Date.now() - (null !== (n = g[t]) && void 0 !== n ? n : 0) > m;
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
            S.clear(), (p = {}), (E = {}), (g = {});
          },
          GUILD_PRODUCTS_FETCH: function (t) {
            let { guildId: n } = t;
            (p[n] = 1),
              [...S.values(h(n))].forEach((t) => {
                S.delete(t.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
            let { guildId: n, products: e } = t;
            (p[n] = 2),
              (g[n] = Date.now()),
              e.forEach((t) => {
                S.set(t.id, t), (E[t.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
            let { guildId: n } = t;
            p[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (t) {
            let { product: n } = t;
            S.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (t) {
            let { product: n } = t;
            S.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (t) {
            let { productId: n } = t;
            S.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (t) {
            let { productId: n } = t;
            E[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
            let { product: n } = t;
            (E[n.id] = 2), S.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (t) {
            let { productId: n, error: e } = t;
            (E[n] = 2), 404 === e.status && S.delete(n);
          },
        }));
    },
    863663: function (t, n, e) {
      e.d(n, {
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
      var i = e(881052);
      e(496675);
      var r = e(981631),
        l = e(388032);
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
        let { newRoleParams: n } = t;
        if (null != n && "" === n.name.trim()) {
          var e, r;
          return (
            (e = o),
            (r = l.intl.string(l.t["V0B/k5"])),
            new i.Hx({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [e]: { _errors: [{ code: "", message: r }] } },
              },
            })
          );
        }
      }
      function s(t) {
        var n;
        let {
            guildProductListing: e,
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
        (null == e ? void 0 : e.name) !== i && "" !== i.trim() && (d.name = i),
          (null !== (n = null == e ? void 0 : e.description) && void 0 !== n
            ? n
            : "") !== l && (d.description = l),
          (null == e ? void 0 : e.price_tier) !== r &&
            null != r &&
            (d.priceTier = r),
          null != s && "" !== s.name.trim()
            ? (d.createNewRole = !0)
            : null === s && (d.unlinkRole = !0),
          o.startsWith("data:") &&
            (a || (null == e && (Object.keys(d).length > 0 || c))) &&
            ((d.image = o), (d.imageName = u));
        let f = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: f,
          canSaveForDraft: f,
          canSaveForPublished: f,
          canPublishOrUnpublish: !(null == e || f),
        };
      }
      function c(t, n) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Z5c.GUILD_PRODUCT(t, n));
      }
    },
    676651: function (t, n, e) {
      e.d(n, {
        h: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(302463);
      function o(t, n) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await e.e("73628").then(e.bind(e, 458961));
            return (e) => (0, i.jsx)(r, { guildId: t, productId: n, ...e });
          },
          { modalKey: l.Yz },
        );
      }
    },
    942833: function (t, n, e) {
      e.d(n, {
        C: function () {
          return o;
        },
        k: function () {
          return u;
        },
      });
      var i = e(192379),
        r = e(937615),
        l = e(388032);
      function o(t) {
        return i.useMemo(() => {
          if (null == t) return;
          let n = null != t.role_id,
            e = t.attachments_count > 0;
          if (n && e) return l.intl.string(l.t.ih4QMT);
          if (n) return l.intl.string(l.t.o9xphY);
          if (e) return l.intl.string(l.t.DWYJub);
        }, [t]);
      }
      function u(t) {
        return i.useMemo(() => {
          if ((null == t ? void 0 : t.price) == null) return;
          let { amount: n, currency: e } = t.price;
          return (0, r.T4)(n, e);
        }, [t]);
      }
    },
    613810: function (t, n, e) {
      var i = e(200651);
      e(192379);
      var r = e(481060);
      n.Z = {
        open: function (t) {
          (0, r.openModalLazy)(async () => {
            let { default: n } = await e.e("53162").then(e.bind(e, 490576));
            return (e) => (0, i.jsx)(n, { ...t, ...e });
          });
        },
      };
    },
    391181: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return m;
        },
        m: function () {
          return g;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(481060),
        u = e(239091),
        a = e(166081),
        s = e(937615),
        c = e(942833),
        d = e(48691),
        f = e(231338),
        _ = e(388032),
        p = e(772103);
      function E(t) {
        let {
          showEditProduct: n,
          showUnpublishProduct: e,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: u,
          showReportProduct: a,
          onEditProduct: s,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: f,
          onTestDownload: E,
          onReportProduct: g,
          closePopout: m,
          onSelect: h,
        } = t;
        return (0, i.jsx)("div", {
          className: p.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: m,
            "aria-label": _.intl.string(_.t.Z146dH),
            onSelect: h,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  n &&
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
                      action: E,
                    }),
                ],
              }),
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  e &&
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
          product: n,
          guildId: e,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: g,
          onCopyProductLink: m,
          onTestDownload: h,
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
              (0, i.jsx)(E, {
                ...t,
                guildId: e,
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
                onCopyLink: m,
                onTestDownload: h,
                onReportProduct: I,
              }),
            children: (t, e) => {
              let { isShown: r } = e;
              return (0, i.jsx)(o.Clickable, {
                ...t,
                "aria-label": _.intl.formatToPlainString(_.t.RtqjeH, {
                  productName: n.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: p.productActionMenuButton,
                children: (0, i.jsx)(o.MoreVerticalIcon, {
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
      function m(t) {
        let {
            product: n,
            guildId: e,
            onEditProduct: r,
            onUnpublishProduct: m,
            onDeleteProduct: h,
            onCopyProductLink: I,
            onTestDownload: S,
            disabled: v = !1,
          } = t,
          C = (0, a.U)(n, 600),
          T =
            null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
          N = (0, c.C)(n);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(p.productCardClickable, p.productCard, {
            [p.disabled]: v,
          }),
          onClick: v ? void 0 : r,
          onContextMenu: function (t) {
            (0, u.jW)(t, () =>
              Promise.resolve((t) =>
                (0, i.jsx)(E, {
                  ...t,
                  closePopout: u.Zy,
                  guildId: e,
                  productId: n.id,
                  showEditProduct: !0,
                  showUnpublishProduct: n.published,
                  showCopyLink: n.published,
                  showTestDownload: null != n.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: m,
                  onDeleteProduct: h,
                  onCopyLink: I,
                  onTestDownload: S,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": _.intl.formatToPlainString(_.t["X/yAKi"], {
            productName: n.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: C,
              className: p.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: p.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: p.productInfoContent,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: p.productName,
                      children: n.name,
                    }),
                    (0, i.jsx)(o.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: p.productDetails,
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
                                  className: p.dotSeparator,
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
                    guildId: e,
                    showEditProduct: !0,
                    showUnpublishProduct: n.published,
                    showCopyLink: n.published,
                    showTestDownload: null != n.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: m,
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
    48691: function (t, n, e) {
      e.d(n, {
        b: function () {
          return f;
        },
        t: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(44315),
        o = e(377171),
        u = e(981631),
        a = e(388032),
        s = e(405013);
      function c(t) {
        let {
          label: n,
          backgroundColor: e = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: u,
        } = t;
        return (0, i.jsxs)("div", {
          className: s.badge,
          style: { backgroundColor: e },
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
    730647: function (t, n, e) {
      e.d(n, {
        f: function () {
          return c;
        },
        l: function () {
          return d;
        },
      }),
        e(411104);
      var i = e(200651),
        r = e(192379),
        l = e(399606),
        o = e(38618),
        u = e(423117),
        a = e(289393);
      let s = r.createContext(void 0);
      function c(t) {
        let n = r.useContext(s);
        if (null == n)
          throw Error(
            "".concat(
              null != t ? t : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: e, fetchGroupListingsForGuild: i } = n;
        return i(), e;
      }
      function d(t) {
        let {
            guildId: n,
            children: e,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: f,
            dontFetchWhileTrue: _,
          } = t,
          p = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          E = (0, l.e7)([a.Z], () =>
            null != n
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(n)
              : a.M.FETCHED,
          ),
          g = r.useRef(c),
          m = r.useCallback(() => {
            if (null == n || !p || !0 === _) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (g.current || t === a.M.NOT_FETCHED) &&
              ((g.current = !1),
              u.FP(n, { includeSoftDeleted: d, countryCode: f }));
          }, [p, n, d, f, _]),
          h = r.useMemo(() => E === a.M.FETCHED && !0 !== g.current, [E, g]);
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: h, fetchGroupListingsForGuild: m },
          children: e,
        });
      }
    },
    523361: function (t, n, e) {
      e.d(n, {
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
      var i = e(373228),
        r = e(388032);
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
    35125: function (t, n, e) {
      e.d(n, {
        PA: function () {
          return c;
        },
        Tn: function () {
          return s;
        },
        _i: function () {
          return g;
        },
        eI: function () {
          return p;
        },
        vp: function () {
          return _;
        },
        y8: function () {
          return E;
        },
      });
      var i = e(367907),
        r = e(200876),
        l = e(430824),
        o = e(594174);
      e(709054), e(523361);
      var u = e(981631),
        a = e(388032);
      function s(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: o, formatParams: u } = f({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(o, u);
      }
      function c(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: o, formatParams: u } = f({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(o, u);
      }
      function d(t, n) {
        var e, i;
        let r = l.Z.getGuild(t),
          o =
            null !== (e = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== e
              ? e
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
      function f(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
            guildId: l,
            roleSubscriptionData: o,
          } = t,
          {
            guild: u,
            totalMonthsSubscribed: s,
            showWithDuration: c,
            isRenewal: f,
          } = d(l, o);
        return (
          (n = c ? (f ? a.t.Iy66Mz : a.t.eCgb2d) : f ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: n,
            formatParams: {
              username: e,
              usernameHook: i,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: r,
              tierName: null == o ? void 0 : o.tier_name,
              months: s,
            },
          }
        );
      }
      function _(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i = u.dG4,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = t,
          {
            guild: s,
            totalMonthsSubscribed: c,
            showWithDuration: f,
            isRenewal: _,
          } = d(l, o),
          p = {
            guildName: null == s ? void 0 : s.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
          };
        return (n = f
          ? _
            ? a.intl.formatToParts(a.t.OQ0OU1, { ...p, months: c })
            : a.intl.formatToParts(a.t["+N9bxs"], { ...p, months: c })
          : _
            ? a.intl.formatToParts(a.t.OxP1ND, p)
            : a.intl.formatToParts(a.t["6Z1E+/"], p));
      }
      function p(t) {
        return (0, r.l)(t);
      }
      function E(t, n, e, r) {
        var l;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: t,
            user_id:
              null === (l = o.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: n,
            message_id: e,
            role_subscription_listing_id: r,
          },
        );
      }
      function g(t, n) {
        var e;
        return {
          guild_id: t.guild_id,
          sender:
            null === (e = o.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.id,
          target_user: n.author.id,
          channel_id: t.id,
          message_id: n.id,
        };
      }
    },
    817460: function (t, n, e) {
      e.d(n, {
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
      var i = e(293810),
        r = e(474936),
        l = e(388032);
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
        let { interval: n, interval_count: e } = t;
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
          })(n),
          { count: e },
        );
      }
      function a(t) {
        let { interval: n, interval_count: e } = t;
        switch (n) {
          case r.rV.DAY:
            if (e > 0 && e % 7 == 0)
              return l.intl.formatToPlainString(l.t.iVZYys, { weeks: e / 7 });
            return l.intl.formatToPlainString(l.t.jzH70d, { days: e });
          case r.rV.MONTH:
            return l.intl.formatToPlainString(l.t.erUSmJ, { months: e });
          case r.rV.YEAR:
            return l.intl.formatToPlainString(l.t.IfYQVF, { years: e });
        }
      }
      function s(t) {
        return t.ref_type === i.Qs.CHANNEL;
      }
      function c(t) {
        return t.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (t, n, e) {
      e.d(n, {
        GG: function () {
          return E;
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
          return _;
        },
        jO: function () {
          return p;
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
          return m;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(442837),
        l = e(935369),
        o = e(38618);
      e(823379);
      var u = e(730647),
        a = e(423117),
        s = e(289393),
        c = e(697227);
      let d = [],
        f = function (t) {
          let {
              refetchOnMount: n = !1,
              includeSoftDeleted: e = !0,
              countryCode: l,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([s.Z], () =>
              null != t
                ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t)
                : s.M.FETCHED,
            ),
            f = i.useRef(n);
          return (
            i.useEffect(() => {
              if (null == t || !c || !0 === u) return;
              let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
              (n || i === s.M.NOT_FETCHED) &&
                ((f.current = !1),
                a.FP(t, { includeSoftDeleted: e, countryCode: l }));
            }, [c, t, e, n, l, u]),
            { listingsLoaded: d === s.M.FETCHED && !0 !== f.current }
          );
        },
        _ = function (t) {
          let { includeSoftDeleted: n = !1, includeUnpublished: e = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.Wu)(
            [s.Z],
            () => {
              if (null == t) return [];
              let i = s.Z.getSubscriptionGroupListing(t);
              if (null == i) return [];
              let r = [];
              for (let t of i.subscription_listings_ids) {
                let i = s.Z.getSubscriptionListing(t);
                if (null != i && (!i.soft_deleted || !!n))
                  (i.published || e) && r.push(i);
              }
              return r;
            },
            [t, n, e],
          );
        },
        p = (t) =>
          (0, r.e7)([s.Z], () =>
            null != t ? s.Z.getSubscriptionListing(t) : null,
          ),
        E = (t) => {
          let n = (0, u.f)("useGroupListingsForGuild");
          return (0, r.e7)([s.Z], () =>
            null != t && n ? s.Z.getSubscriptionGroupListingsForGuild(t) : d,
          );
        },
        g = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            f(t),
            (0, r.Wu)([s.Z], () => {
              let e =
                  null != t ? s.Z.getSubscriptionGroupListingsForGuild(t) : d,
                i = [];
              for (let t of e)
                for (let e of t.subscription_listings_ids) {
                  let t = s.Z.getSubscriptionListing(e);
                  null != t &&
                    (n.includeSoftDeleted || !t.soft_deleted) &&
                    i.push(t);
                }
              return n.includeSoftDeleted && n.sortDeletedListingsLast
                ? [
                    ...i.filter((t) => !t.soft_deleted),
                    ...i.filter((t) => t.soft_deleted),
                  ]
                : i;
            })
          );
        },
        m = (t) => {
          let [n, e] = i.useState(!1),
            l = i.useMemo(() => t.map(c.W), [t]),
            o = (0, r.Wu)(
              [s.Z],
              () =>
                l.filter(
                  (t) => !s.Z.getDidFetchListingForSubscriptionPlanId(t),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
              !n &&
                o.length > 0 &&
                (e(!0),
                Promise.all(o.map((t) => a.vY(t)))
                  .catch(() => {})
                  .then(() => {
                    e(!1);
                  }));
            }, [n, o]),
            { loading: n }
          );
        },
        h = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            error: e,
            submitting: t,
            deleteSubscriptionListing: async (t, e, i) => {
              try {
                return n(!0), r(null), await a._d(t, e, i), !0;
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            },
          };
        },
        I = () => {
          let [t, n] = (0, l.Z)(a.AE),
            { loading: e, error: i } = n;
          return { error: i, submitting: e, archiveSubscriptionListing: t };
        },
        S = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            error: e,
            submitting: t,
            publishSubscriptionListing: async (t) => {
              let { guildId: e, groupListingId: i, listingId: l } = t;
              try {
                return (
                  n(!0),
                  r(null),
                  await a.O0({
                    guildId: e,
                    groupListingId: i,
                    listingId: l,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            },
            clearError: () => r(null),
          };
        },
        v = (t) =>
          (0, r.e7)([s.Z], () =>
            null != t ? s.Z.getSubscriptionSettings(t) : void 0,
          ),
        C = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, e) => {
              n(!0), r(null);
              try {
                await a.W2(t, e);
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            }, []),
            error: e,
          };
        },
        T = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
              n(!0), r(null);
              try {
                await a.Qb(t);
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            }, []),
            error: e,
          };
        },
        N = (t) =>
          (0, r.e7)([s.Z], () =>
            null != t ? s.Z.getSubscriptionTrial(t) : null,
          );
    },
    403474: function (t, n, e) {
      e.d(n, {
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
        permissions: e(981631).Plq.SEND_MESSAGES,
        color: 0,
        colorString: "0",
        icon: null,
        unicodeEmoji: null,
        flags: 0,
      };
    },
    290348: function (t, n, e) {
      e.d(n, {
        B7: function () {
          return tt;
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
          return j;
        },
        H9: function () {
          return q;
        },
        Lo: function () {
          return K;
        },
        PK: function () {
          return M;
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
          return R;
        },
        d9: function () {
          return x;
        },
        mR: function () {
          return y;
        },
        p9: function () {
          return Z;
        },
        qs: function () {
          return U;
        },
        rU: function () {
          return Y;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(512722),
        l = e.n(r),
        o = e(392711),
        u = e(772848),
        a = e(866442),
        s = e(731965),
        c = e(442837),
        d = e(80932),
        f = e(749210),
        _ = e(339085),
        p = e(73346),
        E = e(817460),
        g = e(423117),
        m = e(584825),
        h = e(289393),
        I = e(790285),
        S = e(303737),
        v = e(971792),
        C = e(22902),
        T = e(403474),
        N = e(944537),
        b = e(293810),
        A = e(981631),
        O = e(474936);
      function P(t, n, e) {
        let r = (0, N.n)((t) => t.setListing),
          l = i.useCallback(
            (i) => {
              r(t, (t) => {
                var r;
                let l =
                  null !== (r = null == t ? void 0 : t[n]) && void 0 !== r
                    ? r
                    : e;
                return Object.assign({}, t, {
                  [n]: "function" == typeof i ? i(l) : i,
                });
              });
            },
            [r, t, n, e],
          ),
          o = (0, N.n)((e) => {
            var i;
            return null === (i = e.listings[t]) || void 0 === i ? void 0 : i[n];
          });
        return [void 0 !== o ? o : e, l];
      }
      function L(t, n) {
        let e = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(t));
        return i.useMemo(() => n(e), [e]);
      }
      function R(t) {
        let n = L(t, (t) => {
          var n;
          return null !== (n = null == t ? void 0 : t.name) && void 0 !== n
            ? n
            : "";
        });
        return P(t, "name", n);
      }
      function y(t) {
        let n = L(t, (t) => {
          var n;
          return null == t
            ? void 0
            : null === (n = t.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return P(t, "priceTier", n);
      }
      function M(t) {
        let n = L(t, (t) => {
          var n;
          return null !== (n = null == t ? void 0 : t.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return P(t, "description", n);
      }
      function x(t, n) {
        let e = L(t, (t) => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, p._W)(t.application_id, t.image_asset, n);
        });
        return P(t, "image", e);
      }
      function Z(t, n) {
        let e = (0, v.Z)(n, t);
        return P(
          t,
          "roleIcon",
          i.useMemo(() => {
            var t, n;
            return {
              icon:
                null !== (t = null == e ? void 0 : e.icon) && void 0 !== t
                  ? t
                  : void 0,
              unicodeEmoji:
                null !== (n = null == e ? void 0 : e.unicodeEmoji) &&
                void 0 !== n
                  ? n
                  : void 0,
            };
          }, [e]),
        );
      }
      function U(t, n) {
        let e = (0, v.Z)(n, t),
          r = (0, N.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e
              ? void 0
              : e.roleColor;
          }),
          l = (0, N.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e
              ? void 0
              : e.roleIcon;
          });
        return i.useMemo(() => {
          let t = { ...(null != e ? e : T.k) };
          if (void 0 !== l) {
            var n, i;
            (t.icon = null !== (n = l.icon) && void 0 !== n ? n : ""),
              (t.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t
          );
        }, [e, l, r]);
      }
      function D(t, n) {
        let e = (0, v.Z)(n, t);
        return P(
          t,
          "roleColor",
          i.useMemo(() => {
            var t;
            return null !== (t = null == e ? void 0 : e.color) && void 0 !== t
              ? t
              : A.p6O;
          }, [e]),
        );
      }
      function j(t, n) {
        let e = (0, v.Z)(n, t);
        return P(
          t,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == e
                ? N.I.SOME_CHANNELS_ACCESS
                : (0, I.MT)(e)
                  ? N.I.ALL_CHANNELS_ACCESS
                  : N.I.SOME_CHANNELS_ACCESS,
            [e],
          ),
        );
      }
      let w = [];
      function F(t) {
        let n = L(t, (t) =>
          null == t ? w : t.role_benefits.benefits.filter(E.rC),
        );
        return P(t, "channelBenefits", n);
      }
      let G = [];
      function k(t) {
        let n = L(t, (t) =>
          null == t ? G : t.role_benefits.benefits.filter(E.lL),
        );
        return P(t, "intangibleBenefits", n);
      }
      let H = new Set();
      function B(t, n) {
        return 0 === t.length
          ? H
          : new Set(
              t
                .filter((t) => t.roles.includes(n))
                .map((t) => {
                  let { id: n } = t;
                  return n;
                }),
            );
      }
      function V(t, n) {
        let e = (0, v.Z)(n, t),
          r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(n), [n]);
        return P(
          t,
          "tierEmojiIds",
          i.useMemo(() => (null == e ? H : B(r, e.id)), [r, e]),
        );
      }
      function W(t) {
        var n;
        let e = (0, m.oC)(t),
          { selectedOption: i } = (0, C.Z)(
            null !== (n = null == e ? void 0 : e.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return P(t, "trialInterval", null != i ? i : null);
      }
      function z(t) {
        var n;
        let e = (0, m.oC)(t);
        return P(
          t,
          "trialLimit",
          null !== (n = null == e ? void 0 : e.max_num_active_trial_users) &&
            void 0 !== n
            ? n
            : null,
        );
      }
      function Y(t) {
        return (0, N.n)((n) => void 0 !== n.listings[t]);
      }
      function K(t) {
        return (0, N.n)((n) => {
          for (let e of t) if (void 0 !== n.listings[e]) return !0;
          return !1;
        });
      }
      function q(t) {
        let n = L(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
          [e] = P(t, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var t, i, r, l, o;
            return {
              price:
                null !== (t = null != e ? e : null == n ? void 0 : n.price) &&
                void 0 !== t
                  ? t
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
          }, [n, e]),
        ];
      }
      function X(t) {
        var n;
        (n = t),
          (0, s.j)(() => {
            N.n.setState((t) => ({
              listings: {
                ...t.listings,
                [n]: t.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function J(t) {
        let { guildId: n, editStateId: e } = t,
          i = h.Z.getSubscriptionListing(e);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          a = N.n.getState().listings[e];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: p,
          trialInterval: E,
          tierEmojiIds: m,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let I = h.Z.getSubscriptionTrial(u);
        if (
          ((null != p || null != E || (null != I && null == E)) &&
            (await g.I1(n, u, { trial: E, max_num_active_trial_users: p })),
          void 0 !== m)
        ) {
          let t = B(_.ZP.getGuildEmoji(n), r),
            e = (0, o.difference)([...m], [...t]),
            i = (0, o.difference)([...t], [...m]),
            l = e
              .map((t) => _.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null != t)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: t.id,
                    roles: [...t.roles, r],
                  });
              }),
            u = i
              .map((t) => _.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null == t) return;
                let e = t.roles.filter((t) => t !== r);
                return e.length > 0
                  ? (0, d.dv)({ guildId: n, emojiId: t.id, roles: e })
                  : (0, d.RE)(n, t.id);
              });
          await Promise.all([...l, ...u]);
        }
      }
      async function Q(t) {
        let {
            guildId: n,
            editStateId: e,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = t,
          o = N.n.getState().listings[e];
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
        let p = _ === N.I.ALL_CHANNELS_ACCESS,
          E = i;
        null == E && (E = (await g.uw(n, {})).id),
          null != s && s.length > 0 && (await (0, S.r4)(n, s));
        let m = [...(null != s ? s : []), ...(null != c ? c : [])],
          h = (0, S.yL)(e, n);
        return g.dA({
          guildId: n,
          groupListingId: E,
          data: {
            can_access_all_channels: p,
            image: f,
            name: u,
            description: a,
            benefits: m,
            priceTier: d,
          },
          analyticsContext: h,
          onBeforeDispatchNewListing: r,
        });
      }
      function $() {
        let [t, n] = i.useState(!1),
          [e, r] = i.useState();
        return {
          loading: t,
          error: e,
          handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let {
                guildId: e,
                editStateId: i,
                groupListingId: u,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: c,
              } = t,
              d = i,
              f = h.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), r(void 0), null != f))
                l()(null != u, "groupListingId is null"),
                  await (function (t) {
                    var n;
                    let { guildId: e, editStateId: i, groupListingId: r } = t,
                      u = h.Z.getSubscriptionListing(i);
                    l()(null != u, "listing doesnt exist");
                    let a = N.n.getState().listings[i];
                    l()(null != a, "edit state does not exist");
                    let {
                        name: s,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: f,
                        priceTier: _,
                        image: p,
                        channelAccessFormat: m,
                      } = a,
                      I = {};
                    if (
                      (s !== u.name && (I.name = s),
                      c !== u.description && (I.description = c),
                      _ !==
                        (null === (n = u.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (I.priceTier = _),
                      null != p && (I.image = p),
                      null != m &&
                        (I.can_access_all_channels =
                          m === N.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let t = u.role_benefits.benefits.filter(E.rC),
                        n = u.role_benefits.benefits.filter(E.lL),
                        e = [...(null != d ? d : t), ...(null != f ? f : n)];
                      I.benefits = e;
                    }
                    return (0, o.isEmpty)(I)
                      ? u
                      : g.O0({
                          guildId: e,
                          groupListingId: r,
                          listingId: i,
                          data: I,
                        });
                  })({ guildId: e, editStateId: d, groupListingId: u });
              else {
                var _, p;
                let t = await Q({
                  guildId: e,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: a,
                });
                (d = t.id),
                  (_ = i),
                  (p = d),
                  (0, s.j)(() => {
                    N.n.setState((t) => ({
                      listings: {
                        ...t.listings,
                        [p]: t.listings[_],
                        [_]: void 0,
                      },
                    }));
                  }),
                  null == c || c(t);
              }
              return await J({ guildId: e, editStateId: d }), X(d), !0;
            } catch (t) {
              if (!("getAnyErrorMessage" in t)) throw t;
              r(t);
            } finally {
              n(!1);
            }
          }, []),
        };
      }
      function tt(t, n) {
        let e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, m._k)(t, e),
          l = (0, N.n)((t) => t.editStateIdsForGroup[n]),
          o = (0, N.n)((t) => t.setEditStateIdsForGroup),
          a = (0, N.n)((t) => t.setListing),
          s = i.useMemo(
            () => [
              ...r.map((t) => {
                let { id: n } = t;
                return n;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          c = i.useCallback(() => {
            let t = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), t]);
          }, [n, o]),
          d = i.useCallback(
            (t) => {
              let e = (0, u.Z)();
              return (
                o(n, (t) => [...(null != t ? t : []), e]),
                t.listings.forEach((n) => {
                  a(e, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((t) => ({
                      ref_id: t.id,
                      ref_type: b.Qs.CHANNEL,
                      description: t.description,
                      name: t.name,
                      emoji_name: t.emoji_name,
                    })),
                    roleIcon: { unicodeEmoji: void 0, icon: n.image },
                    roleColor: n.role_color,
                    usedTemplate: t.category,
                  }));
                }),
                e
              );
            },
            [n, o, a],
          );
        return {
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: i.useCallback(
            (t) => {
              o(n, (n) => (null != n ? n : []).filter((n) => n !== t));
            },
            [n, o],
          ),
        };
      }
    },
    697227: function (t, n, e) {
      e.d(n, {
        V: function () {
          return o;
        },
        W: function () {
          return l;
        },
      });
      var i = e(512722),
        r = e.n(i);
      function l(t) {
        let n = t.items;
        return (
          r()(
            1 === n.length,
            "more than 1 subscription item for role subscription",
          ),
          n[0].planId
        );
      }
      function o(t) {
        var n;
        let e =
          null == t
            ? void 0
            : null === (n = t.renewalMutations) || void 0 === n
              ? void 0
              : n.items;
        if (null != e)
          return (
            r()(
              e.length <= 1,
              "more than 1 renewal mutation for role subscription",
            ),
            null == e ? void 0 : e[0].planId
          );
      }
    },
    403910: function (t, n, e) {
      var i = e(442837),
        r = e(339085);
      n.Z = function (t, n) {
        return (0, i.e7)(
          [r.ZP],
          () => {
            var e;
            if (null == n) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(t);
            return null !== (e = i.getById(n)) && void 0 !== e
              ? e
              : i.getByName(n);
          },
          [t, n],
        );
      };
    },
    14263: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(192379),
        r = e(442837),
        l = e(480608),
        o = e(243730);
      let u = {};
      function a(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let e = u[t];
            !(null != e && n > 0 && Date.now() - e < n) &&
              ((u[t] = Date.now()), l.E(t));
          }, [t, n]),
          e
        );
      }
    },
    570533: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(192379),
        r = e(442837),
        l = e(339085),
        o = e(889564);
      let u = [];
      function a(t) {
        let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
        return i.useMemo(
          () => (null == n ? u : n.filter((n) => (0, o.Kt)(n, t))),
          [n, t],
        );
      }
    },
    971792: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(442837),
        r = e(430824),
        l = e(584825);
      function o(t, n) {
        let e = (0, l.jO)(n);
        return (0, i.e7)([r.Z], () =>
          null != t && null != e ? r.Z.getRole(t, e.role_id) : void 0,
        );
      }
    },
    22902: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(192379),
        r = e(817460),
        l = e(293810),
        o = e(474936),
        u = e(388032);
      function a(t) {
        return i.useMemo(() => {
          var n;
          let e = l.DN.map((t) => ({
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
                    (n = e.find(
                      (n) =>
                        null != n.value &&
                        n.value.interval === t.interval &&
                        n.value.interval_count === t.interval_count,
                    )) || void 0 === n
                  ? void 0
                  : n.value
                : t;
          return { options: e, selectedOption: i };
        }, [t]);
      }
    },
    629262: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(592125);
      function l(t) {
        return (0, i.Wu)(
          [r.Z],
          () => t.filter((t) => r.Z.hasChannel(t.ref_id)),
          [t],
        );
      }
    },
    528027: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(596454),
        u = e(377171),
        a = e(403910),
        s = e(549631),
        c = e(873198);
      function d(t) {
        var n;
        let { guildId: e, emojiId: r, emojiName: d, className: f } = t,
          _ = (0, a.Z)(e, r);
        return null != _ || null != d
          ? (0, i.jsx)(o.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated:
                null !== (n = null == _ ? void 0 : _.animated) &&
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
    686807: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(201895),
        o = e(471445),
        u = e(823379),
        a = e(303737),
        s = e(293810),
        c = e(388032),
        d = e(681027);
      function f(t) {
        let { channelId: n } = t,
          e = (0, a.m7)(n);
        if (null == e)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(c.intl.string(c.t.bz1PZW), "]"),
          });
        let u = e.isMediaChannel() ? r.ImageIcon : (0, o.Th)(e.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: e }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != u &&
                  (0, i.jsx)(u, { className: d.icon, "aria-hidden": !0 }),
                e.name,
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
    893729: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = e(200651),
        r = e(192379),
        l = e(120356),
        o = e.n(l),
        u = e(442837),
        a = e(481060),
        s = e(518738),
        c = e(786761),
        d = e(3148),
        f = e(753206),
        _ = e(594174),
        p = e(5192),
        E = e(981631),
        g = e(388032),
        m = e(391317);
      function h(t) {
        var n;
        let {
            guildId: e,
            role: l,
            theme: h,
            content: I = g.intl.string(g.t["6OSasb"]),
            className: S,
          } = t,
          v = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
          C = p.ZP.useName(e, null, v),
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
                state: E.yb.SENT,
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
          children: (t) =>
            (0, i.jsx)("div", {
              className: o()(t, m.container, S),
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
    358555: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(442837),
        u = e(481060),
        a = e(666188),
        s = e(372769),
        c = e(523751),
        d = e(623624),
        f = e(290034),
        _ = e(271383),
        p = e(594174),
        E = e(267642),
        g = e(981631),
        m = e(388032),
        h = e(427542);
      function I(t) {
        let { guild: n, isBannerVisible: e, disableBoostClick: r } = t,
          l = (0, o.e7)([p.default, _.ZP], () => {
            let t = p.default.getCurrentUser();
            return _.ZP.isMember(n.id, null == t ? void 0 : t.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = n;
        if (0 === s && a === g.Eu4.NONE) return null;
        let c = (t) => {
            t.stopPropagation(),
              t.preventDefault(),
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
          I = a === g.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : E.nW(a),
          S = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: h.tierTooltipTitle, children: I }),
              (0, i.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: h.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: S,
            position: "bottom",
            "aria-label": null != I ? I : "",
            children: (t) =>
              (0, i.jsx)(u.Clickable, {
                ...t,
                className: h.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(f.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: e
                    ? h.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    e && a !== g.Eu4.TIER_3
                      ? h.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function S(t) {
        let { guild: n, disableColor: e, disableBoostClick: r } = t;
        return (0, a.Z)(n)
          ? (0, i.jsx)("div", {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(h.guildBadge, { [h.disableColor]: e }),
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
                className: l()(h.guildBadge, { [h.disableColor]: e }),
              }),
            });
      }
      function v(t) {
        let { guild: n, isBannerVisible: e, disableBoostClick: r } = t;
        return (0, a.Z)(n)
          ? (0, i.jsx)(S, { guild: n, disableColor: !1, disableBoostClick: r })
          : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED)
            ? (0, i.jsx)(S, { guild: n, disableColor: !e })
            : (0, i.jsx)(I, {
                guild: n,
                isBannerVisible: e,
                disableBoostClick: r,
              });
      }
    },
    889695: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return N;
        },
      }),
        e(47120),
        e(724458),
        e(653041);
      var i = e(200651),
        r = e(192379),
        l = e(658722),
        o = e.n(l),
        u = e(392711),
        a = e.n(u),
        s = e(149765),
        c = e(442837),
        d = e(481060),
        f = e(271383),
        _ = e(430824),
        p = e(594174),
        E = e(700785),
        g = e(709054),
        m = e(962086),
        h = e(160404),
        I = e(225675),
        S = e(981631),
        v = e(388032),
        C = e(679537);
      function T(t) {
        var n;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (n = t.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: t.name,
        });
      }
      function N(t) {
        let { guildId: n } = t,
          e = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
          l = (0, c.e7)([_.Z], () => _.Z.getGuild(n)),
          u = (0, c.e7)([_.Z], () => _.Z.getRoles(n)),
          { impersonateType: N, viewingRoles: b } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(n),
            viewingRoles: h.Z.getViewingRoles(n),
          })),
          A = N === I.z.SERVER_SHOP,
          O = (0, c.e7)([f.ZP], () =>
            null != e ? f.ZP.getTrueMember(n, e.id) : null,
          ),
          [P, L] = (0, d.useMultiSelect)(null == b ? [] : g.default.keys(b)),
          R = r.useRef(l);
        r.useEffect(() => {
          let t = {},
            n = R.current;
          if (null != n && null != N) {
            for (let n of P) {
              let e = u[n];
              null != e && (t[n] = e);
            }
            (0, m.Zm)(n.id, { type: N, roles: t });
          }
        }, [P, N, u]);
        let y =
            null != l && null != e && null != O
              ? a()(u)
                  .filter((t) => -1 !== O.roles.indexOf(t.id))
                  .sortBy((t) => -t.position)
                  .first()
              : void 0,
          M = r.useMemo(
            () =>
              null != l && null != e
                ? Object.values(u)
                    .filter((t) => t.id !== l.id)
                    .filter((t) => {
                      var n;
                      return (
                        !A ||
                        (null === (n = t.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (t) =>
                        (null == y ? void 0 : y.id) === t.id ||
                        E.r6(l, e.id, y, t),
                    )
                : [],
            [l, e, A, y, u],
          );
        if (null == e || null == l || null == O) return null;
        let x = {};
        return (O.roles.forEach((t) => {
          let n = u[t];
          null != n && (x[n.id] = n);
        }),
        s.e$(
          E.I0({ forceRoles: x, context: l }),
          s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES),
        ) || l.isOwner(e.id))
          ? (0, i.jsx)("div", {
              className: C.container,
              children: (0, i.jsx)(d.Combobox, {
                placeholder: v.intl.string(v.t.Sojqsr),
                value: P,
                onChange: L,
                autoFocus: !0,
                children: (t) => {
                  let n = M.reduce(
                      (n, e) => (
                        o()(t.toLowerCase(), e.name.toLowerCase()) &&
                          n.push(
                            (0, i.jsxs)(
                              d.ComboboxItem,
                              {
                                value: e.id,
                                children: [
                                  (0, i.jsx)(d.ComboboxItem.Label, {
                                    children: T(e),
                                  }),
                                  (0, i.jsx)(d.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        n
                      ),
                      [],
                    ),
                    e = u[l.getEveryoneRoleId()];
                  return (
                    null != e &&
                      n.push(
                        (0, i.jsxs)(
                          d.ComboboxItem,
                          {
                            value: e.id,
                            disabled: !0,
                            children: [
                              (0, i.jsx)(d.ComboboxItem.Label, {
                                children: T(e),
                              }),
                              (0, i.jsx)(d.ComboboxItem.Checkbox, {
                                checked: !0,
                              }),
                            ],
                          },
                          e.id,
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
    918658: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return y;
        },
        d: function () {
          return M;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        o = e(442837),
        u = e(692547),
        a = e(481060),
        s = e(549817),
        c = e(819553),
        d = e(17181),
        f = e(303737),
        _ = e(434404),
        p = e(703656),
        E = e(944486),
        g = e(914010),
        m = e(671533),
        h = e(259580),
        I = e(358085),
        S = e(962086),
        v = e(160404),
        C = e(889695),
        T = e(981631),
        N = e(176505),
        b = e(302463),
        A = e(293810),
        O = e(388032),
        P = e(489666);
      function L(t) {
        let { className: n, onClick: e, children: r } = t;
        return (0, i.jsx)(a.Button, {
          className: l()(P.button, n),
          innerClassName: P.buttonInner,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.WHITE,
          size: a.Button.Sizes.NONE,
          onClick: e,
          children: r,
        });
      }
      function R(t) {
        let { onClick: n } = t;
        return (0, i.jsx)(L, {
          onClick: n,
          children: O.intl.string(O.t.R9GHyc),
        });
      }
      function y() {
        let t = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
          n = (0, o.e7)([E.Z], () => E.Z.getChannelId(t)),
          {
            viewingRoles: e,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I,
          } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != t ? v.Z.getViewingRoles(t) : null,
            backNavigationSection: v.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && v.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && v.Z.isViewingServerShop(t),
          }));
        if (null == e || null == t) return null;
        let y = (function (t) {
            switch (t) {
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
          M =
            r === T.pNK.ROLE_SUBSCRIPTIONS
              ? O.intl.string(O.t.hZUCzc)
              : O.intl.string(O.t["/djIh4"]),
          x = n === N.oC.GUILD_ONBOARDING,
          Z = (n) => {
            let { backToSettings: e } = n;
            null != t &&
              (v.Z.isFullServerPreview(t) && (0, p.uL)(T.Z5c.CHANNEL(t)),
              c.ZP.shouldShowOnboarding(t) &&
                (s.Z.finishOnboarding(t), (0, d.discardOnboardingPromise)(t)),
              (0, S.mL)(t),
              e && _.Z.open(t, r),
              r === T.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(t));
          };
        return (0, i.jsxs)(a.Notice, {
          color: a.NoticeColors.BRAND,
          className: P.notice,
          children: [
            (0, i.jsxs)(L, {
              onClick: () => Z({ backToSettings: !0 }),
              className: P.backButton,
              children: [
                (0, i.jsx)(m.Z, {
                  width: 16,
                  height: 16,
                  direction: m.Z.Directions.LEFT,
                  className: P.backArrow,
                }),
                y,
              ],
            }),
            x && l
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
                            numRoles: Object.keys(e).length,
                          })
                        : O.intl.formatToPlainString(O.t.vMlK8v, {
                            numRoles: Object.keys(e).length,
                          }),
                    }),
                    (0, i.jsx)(a.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(C.Z, { guildId: t }),
                      children: (t) => {
                        let { onClick: n } = t;
                        return (0, i.jsxs)(L, {
                          onClick: n,
                          children: [
                            M,
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
              : (0, i.jsx)(R, { onClick: () => Z({ backToSettings: !1 }) }),
          ],
        });
      }
      function M(t) {
        let { guildId: n } = t;
        return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(n))
          ? (0, i.jsx)("div", {
              className: l()(P.settingsWrapper, {
                [P.windows]: (0, I.isWindows)(),
                [P.osx]: (0, I.isMac)(),
              }),
              children: (0, i.jsx)(y, {}),
            })
          : null;
      }
    },
    690221: function (t, n, e) {
      var i = e(200651),
        r = e(192379),
        l = e(481060),
        o = e(703656),
        u = e(981631);
      n.Z = r.forwardRef(function (t, n) {
        let {
            href: e,
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
                  null != e && (0, o.uL)(e),
                  null == s || s()),
                  null == c || c(t);
            },
            [e, c, s],
          ),
          p = r.useCallback(
            (t) => {
              if (!t.metaKey && !t.shiftKey && 0 === t.button)
                t.preventDefault(),
                  t.stopPropagation(),
                  null != e && (0, o.uL)(e),
                  null == s || s();
            },
            [e, s],
          ),
          E = (0, i.jsx)("a", {
            ref: n,
            href: e,
            onClick: p,
            onKeyPress: _,
            ...f,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: E });
      });
    },
    628238: function (t, n, e) {
      e.d(n, {
        A: function () {
          return r;
        },
      });
      var i = e(709054);
      function r(t) {
        return !(t < i.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    753206: function (t, n, e) {
      var i = e(200651),
        r = e(192379),
        l = e(120356),
        o = e.n(l),
        u = e(628238),
        a = e(492593),
        s = e(25015),
        c = e(963550),
        d = e(845080),
        f = e(916315);
      n.Z = r.memo(function (t) {
        var n;
        let {
            message: e,
            channel: r,
            compact: l,
            className: _,
            isGroupStart: p,
            hideSimpleEmbedContent: E = !0,
            disableInteraction: g,
          } = t,
          m = (0, u.A)(
            (null !== (n = e.editedTimestamp) && void 0 !== n
              ? n
              : e.timestamp
            ).valueOf(),
          ),
          { content: h } = (0, s.Z)(e, {
            hideSimpleEmbedContent: E,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: l,
          className: o()(_, {
            [f.message]: !0,
            [f.cozyMessage]: !l,
            [f.groupStart]: p,
          }),
          childrenHeader: (0, d.Z)({ ...t, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(t, h),
          disableInteraction: g,
        });
      });
    },
    963550: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(930282);
      function l(t, n) {
        let { message: e } = t;
        return (0, i.jsx)(r.ZP, { message: e, content: n });
      }
    },
    845080: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(200651),
        r = e(192379),
        l = e(901461),
        o = e(464891);
      let u = r.memo(o.ZP);
      function a(t) {
        let {
          message: n,
          channel: e,
          author: r,
          compact: o,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = t;
        return !(0, l.Z)(n) && (c || o)
          ? (0, i.jsx)(u, {
              message: n,
              channel: e,
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
    91802: function (t, n, e) {
      e.d(n, {
        n: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(351402);
      function l() {
        let { localizedPricingPromo: t, hasError: n } = (0, i.cj)(
          [r.Z],
          () => ({
            localizedPricingPromo: r.Z.localizedPricingPromo,
            hasError: r.Z.localizedPricingPromoHasError,
          }),
        );
        return n ? null : t;
      }
    },
    222727: function (t, n, e) {
      e.d(n, {
        U: function () {
          return l;
        },
      });
      var i = e(990547),
        r = e(213609);
      function l(t, n) {
        (0, r.Z)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
          properties: { country_code: n, action_location: t },
        });
      }
    },
    106976: function (t, n, e) {
      e.d(n, {
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
        e(47120);
      var i = e(570140),
        r = e(821849),
        l = e(307643),
        o = e(981631);
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
        var n;
        return {
          id: t.id,
          sku: u(t),
          summary: t.description,
          description: t.description,
          benefits:
            null !== (n = t.store_listing_benefits) && void 0 !== n ? n : [],
          thumbnail: t.image_asset,
          published: t.published,
        };
      }
      function s(t) {
        for (let n of (i.Z.dispatch({
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
            skuId: n.id,
            subscriptionPlans: n.subscription_plans,
          });
      }
      async function c(t, n) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: t,
          groupListingId: n,
        });
        try {
          var e;
          let r = await l.jz(t, n);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: t,
              groupListing: r,
            }),
            s(null !== (e = r.subscription_listings) && void 0 !== e ? e : []),
            r
          );
        } catch (n) {
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
          let n = await l.GF(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: t,
            entitlements: n,
          });
        } catch (n) {
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
          var n;
          let e = await l.a_(t);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: e,
          });
          let o =
            null !== (n = e.subscription_listings) && void 0 !== n ? n : [];
          for (let n of o)
            n.subscription_plans[0].id === t &&
              (await r.GZ(n.id, void 0, void 0, !0));
          s(o);
        } catch (t) {}
      }
    },
    488915: function (t, n, e) {
      e.d(n, {
        M: function () {
          return i;
        },
      }),
        e(47120);
      var i,
        r,
        l,
        o,
        u,
        a,
        s = e(512722),
        c = e.n(s),
        d = e(442837),
        f = e(759174),
        _ = e(570140),
        p = e(959546),
        E = e(55563);
      function g(t) {
        return "subscription_listing:".concat(t);
      }
      function m(t) {
        return "application:".concat(t);
      }
      function h(t) {
        return "plan:".concat(t);
      }
      function I(t, n, e) {
        return "entitlement:".concat(t, ":").concat(e, ":").concat(n);
      }
      function S(t, n) {
        return "entitlement:".concat(n, ":").concat(t);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let v = new f.h(
          (t) => [m(t.application_id), ...t.subscription_listings_ids.map(g)],
          (t) => t.id,
        ),
        C = new f.h(
          (t) => [m(t.application_id), h(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        T = new f.h(
          (t) => [
            I(t.applicationId, t.isValid(null, E.Z), t.guildId),
            S(t.isValid(null, E.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        N = {},
        b = {};
      function A(t) {
        var n;
        for (let e of (v.set(t.id, t),
        null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
          (function (t) {
            C.set(t.id, t);
          })(e);
      }
      class O extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var n;
          return null !== (n = N[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(t) {
          return v.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let n = v.values(g(t));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(t) {
          return C.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return C.values(m(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var n;
          return null !== (n = b[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(t) {
          let n = C.values(h(t));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(t, n) {
          let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return T.values(I(t, e, n));
        }
        getEntitlementsForGuild(t) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return T.values(S(n, t));
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
        (n.Z = new O(_.Z, {
          LOGOUT: function () {
            v.clear(), C.clear(), T.clear(), (N = {}), (b = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: e } = t;
            N[n] = 1;
            let i = v.get(e);
            if (null != i)
              for (let t of i.subscription_listings_ids) C.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: e } = t;
            (N[n] = 2), A(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: n } = t;
            N[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: n } = t;
            b[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: n, entitlements: e } = t;
            (b[n] = 2),
              e.forEach((t) => {
                let n = p.Z.createFromServer(t);
                T.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: n } = t;
            b[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: n } = t;
            A(n);
          },
        }));
    },
    93127: function (t, n, e) {
      e.d(n, {
        W: function () {
          return s;
        },
        _: function () {
          return c;
        },
      });
      var i = e(544891),
        r = e(570140),
        l = e(480294),
        o = e(814443),
        u = e(428598),
        a = e(981631);
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
              })
              .then(
                (t) => {
                  let { body: n } = t;
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
        let t =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return u.Z.shouldFetch() && l.Z.hasConsented(a.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: a.ANM.USER_AFFINITIES_V2,
                retries: t ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (t) => {
                  let { body: n } = t;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((t) => {
                      var n, e, i, r, l, o, u, a;
                      return {
                        otherUserId: t.other_user_id,
                        userSegment: t.user_segment,
                        otherUserSegment: t.other_user_segment,
                        isFriend: t.is_friend,
                        dmProbability:
                          null !== (n = t.dm_probability) && void 0 !== n
                            ? n
                            : 0,
                        dmRank:
                          null !== (e = t.dm_rank) && void 0 !== e ? e : 0,
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
    496232: function (t, n, e) {
      e.d(n, {
        K: function () {
          return i;
        },
      });
      let i = e(70956).Z.Millis.DAY;
    },
    428598: function (t, n, e) {
      let i;
      e(47120);
      var r,
        l = e(442837),
        o = e(570140),
        u = e(699516),
        a = e(496232);
      function s(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let c = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function _() {
        i = new Map(
          f.userAffinities
            .filter((t) => !u.Z.isBlocked(t.otherUserId))
            .map((t) => [t.otherUserId, t]),
        );
      }
      class p extends (r = l.ZP.PersistedStore) {
        initialize(t) {
          this.waitFor(u.Z),
            null != t &&
              ((f.userAffinities = t.userAffinities),
              (f.lastFetched = t.lastFetched),
              _()),
            this.syncWith([u.Z], _);
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
        getUserAffinity(t) {
          return i.get(t);
        }
        getState() {
          return f;
        }
      }
      s(p, "displayName", "UserAffinitiesStoreV2"),
        s(p, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new p(o.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (t) {
            let { affineUsers: n } = t;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = n), _();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
          },
          LOGOUT: function () {
            (f = { ...d }), (i = new Map()), (c = !1);
          },
        }));
    },
    170671: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(692547),
        l = e(313201);
      function o(t) {
        let { isSelected: n, ...e } = t,
          o = (0, l.Dt)();
        return (0, i.jsxs)("svg", {
          ...e,
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
    237583: function (t, n, e) {
      e(653041), e(47120);
      var i,
        r = e(200651),
        l = e(192379),
        o = e(120356),
        u = e.n(o),
        a = e(481060),
        s = e(598077),
        c = e(908860),
        d = e(579861);
      function f(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      class _ extends (i = l.PureComponent) {
        renderUsers() {
          let {
              users: t,
              max: n,
              renderUser: e = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            l = t.length === n ? t.length : n - 1,
            o = 0;
          for (; o < l && o < t.length; ) {
            let n = o === t.length - 1;
            r.push(
              e(t[o] || null, n ? null : c.avatarMasked, "user-".concat(o), n),
            ),
              o++;
          }
          if (o < t.length) {
            let n = Math.min(t.length - o, 99);
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
            f(this, "defaultRenderUser", (t, n, e, i) => {
              let { onClick: l, size: o, guildId: f } = this.props,
                _ = t instanceof s.Z ? t : null != t ? t.user : null;
              return null == _
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, n) }, e)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: _.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                      size: o,
                      "aria-label": _.username,
                      className: u()(n, d.cursorPointer, c.avatarSize),
                      onClick: (t) => (null != l ? l(t, _, this._ref) : null),
                    },
                    _.id,
                  );
            });
        }
      }
      f(_, "defaultProps", {
        max: 10,
        renderMoreUsers: function (t, n, e) {
          return (0, r.jsx)("div", { className: n, children: t }, e);
        },
        size: a.AvatarSizes.SIZE_24,
      }),
        (n.Z = _);
    },
    4912: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(325767);
      function l(t) {
        let {
          width: n = 14,
          height: e = 14,
          color: l = "currentColor",
          foreground: o,
          ...u
        } = t;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(u),
          width: n,
          height: e,
          viewBox: "0 0 14 14",
          children: (0, i.jsx)("path", {
            className: o,
            fill: l,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (t, n, e) {
      e.d(n, {
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
        e(411104);
      var i = e(200651);
      e(192379);
      var r = e(239091);
      function l(t, n, l) {
        l.isGroupDM()
          ? (0, r.jW)(t, async () => {
              let { default: t } = await Promise.all([
                e.e("50506"),
                e.e("79695"),
                e.e("79107"),
                e.e("92453"),
                e.e("60222"),
              ]).then(e.bind(e, 354589));
              return (e) => (0, i.jsx)(t, { ...e, user: n, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(t, async () => {
                let { default: t } = await Promise.all([
                  e.e("50506"),
                  e.e("79695"),
                  e.e("79107"),
                  e.e("59743"),
                  e.e("92453"),
                  e.e("22036"),
                  e.e("56826"),
                  e.e("95470"),
                ]).then(e.bind(e, 131404));
                return (e) =>
                  (0, i.jsx)(t, {
                    ...e,
                    user: n,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, r.jW)(t, async () => {
                  let { default: t } = await Promise.all([
                    e.e("50506"),
                    e.e("79695"),
                    e.e("79107"),
                    e.e("92453"),
                    e.e("13125"),
                    e.e("34879"),
                  ]).then(e.bind(e, 757387));
                  return (e) =>
                    (0, i.jsx)(t, {
                      ...e,
                      user: n,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, r.jW)(t, async () => {
                  let { default: t } = await Promise.all([
                    e.e("79695"),
                    e.e("69220"),
                    e.e("50261"),
                  ]).then(e.bind(e, 881351));
                  return (e) => (0, i.jsx)(t, { ...e, user: n });
                });
      }
      function o(t, n) {
        let { user: l, channel: o, moderationAlertId: u, guildId: a, ...s } = n;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == o ? void 0 : o.getGuildId();
        null != c &&
          (0, r.jW)(t, async () => {
            let { default: t } = await Promise.all([
              e.e("13125"),
              e.e("33685"),
            ]).then(e.bind(e, 833737));
            return (n) =>
              (0, i.jsx)(t, {
                ...n,
                user: l,
                channelId: null == o ? void 0 : o.id,
                guildId: c,
                moderationAlertId: u,
                ...s,
              });
          });
      }
      function u(t, n) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: u,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = n;
        (0, r.jW)(t, async () => {
          let { default: t } = await e.e("45130").then(e.bind(e, 246389));
          return (n) =>
            (0, i.jsx)(t, {
              ...n,
              user: l,
              guildId: o,
              analyticsLocations: u,
              onCloseContextMenu: a,
              isViewOnly: s,
            });
        });
      }
      function a(t, n, l) {
        null != l &&
          (0, r.jW)(t, async () => {
            let { default: t } = await e.e("50331").then(e.bind(e, 158195));
            return (n) => (0, i.jsx)(t, { ...n, guildId: l });
          });
      }
    },
    401653: function (t, n, e) {
      var i, r;
      e.d(n, {
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
    95930: function (t, n, e) {
      var i, r;
      e.d(n, {
        q: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (r[(r.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (t, n, e) {
      var i, r;
      e.d(n, {
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
//# sourceMappingURL=ed8c34a8312d2d5762d2.js.map
