"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39371"],
  {
    774078: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(718922),
        o = n(55935),
        u = n(745735);
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          s = (0, o.TD)(Date.now(), e),
          a = (0, i.Z)(),
          c = (0, r.useCallback)(() => {
            if (
              (0 !== s.days ||
                0 !== s.hours ||
                0 !== s.minutes ||
                0 !== s.seconds) &&
              !l
            )
              a(), null == n || n();
          }, [s, l, a, n]);
        return (0, u.Z)(c, l ? null : t), s;
      }
    },
    745735: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(470079),
        i = n(512722),
        o = n.n(i);
      function u(e, t) {
        let n = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          n.current = e;
        }, [e]),
          (0, r.useEffect)(() => {
            if (null === t) return;
            let e = setInterval(function () {
              o()(null != n.current, "Missing callback"), n.current();
            }, t);
            return () => clearInterval(e);
          }, [t]);
      }
    },
    935369: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(479531),
        o = n(689938);
      function u(e) {
        let [t, n] = r.useState(!1),
          [u, l] = r.useState(null);
        return [
          r.useCallback(
            async function () {
              for (var t = arguments.length, r = Array(t), u = 0; u < t; u++)
                r[u] = arguments[u];
              try {
                return l(null), n(!0), await e(...r);
              } catch (e) {
                e.message !== o.Z.Messages.MFA_V2_CANCELED &&
                  l(e instanceof i.Z ? e : new i.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: u },
        ];
      }
    },
    724757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(924826),
        o = n(442837),
        u = n(607070);
      function l(e, t, n) {
        let l = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
          s = r.useCallback(
            (e) => {
              let n = document.querySelector(e),
                r = t.current;
              null != n &&
                null != r &&
                (n.focus(), r.scrollIntoViewNode({ node: n, padding: 80 }));
            },
            [t],
          ),
          a = r.useCallback(
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
          c = r.useCallback(
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
        return (0, i.ZP)({
          id: e,
          isEnabled: l,
          setFocus: s,
          scrollToStart: a,
          scrollToEnd: c,
          orientation: null == n ? void 0 : n.orientation,
        });
      }
    },
    357352: function (e, t, n) {
      n.d(t, {
        b: function () {
          return r;
        },
      });
      function r(e) {
        return "".concat("https://cdn.discordapp.com/assets", "/").concat(e);
      }
    },
    17079: function (e, t, n) {
      n.d(t, {
        T: function () {
          return o;
        },
      });
      var r = n(570140),
        i = n(155414);
      async function o(e, t) {
        r.Z.dispatch({
          type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
          guildId: e,
          priceTierType: t,
        });
        try {
          let n = await i.X(e, t);
          r.Z.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: n,
          });
        } catch (n) {
          r.Z.dispatch({
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
          return u;
        },
        eJ: function () {
          return s;
        },
        kL: function () {
          return a;
        },
        zJ: function () {
          return o;
        },
      });
      var r,
        i,
        o,
        u,
        l = n(689938);
      function s(e) {
        return {
          4: l.Z.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
          2: l.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
          3: l.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
          1: l.Z.Messages.GUILD_STORE_SORT_OPTION_NAME,
        }[e];
      }
      ((r = o || (o = {}))[(r.NAME = 1)] = "NAME"),
        (r[(r.PRICE_ASC = 2)] = "PRICE_ASC"),
        (r[(r.PRICE_DESC = 3)] = "PRICE_DESC"),
        (r[(r.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((i = u || (u = {}))[(i.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (i[(i.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let a = [4, 2, 3, 1];
    },
    76535: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
        R: function () {
          return s;
        },
      });
      var r = n(470079),
        i = n(442837),
        o = n(584825),
        u = n(17079),
        l = n(281320);
      function s(e, t) {
        let n = (0, i.e7)([l.Z], () => l.Z.getPriceTiersForGuildAndType(e, t)),
          o = (0, i.e7)([l.Z], () =>
            l.Z.getPriceTiersFetchStateForGuildAndType(e, t),
          );
        return (
          r.useEffect(() => {
            o === l.M.NOT_FETCHED && (0, u.T)(e, t);
          }, [e, o, t]),
          { loading: o === l.M.FETCHING, priceTiers: n }
        );
      }
      function a(e) {
        let {
          fetchSubscriptionsSettings: t,
          loading: n,
          error: i,
        } = (0, o.JH)();
        r.useEffect(() => {
          t(e);
        }, [t, e]);
        let u = (0, o.YB)(e);
        return {
          loaded: null != u && !n,
          subscriptionsSettings: u,
          loading: n,
          error: i,
        };
      }
    },
    155414: function (e, t, n) {
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var r = n(544891),
        i = n(881052),
        o = n(981631);
      let u = async (e, t) => {
        try {
          return (
            await r.tn.get({
              url: o.ANM.PRICE_TIERS,
              query: { price_tier_type: t, guild_id: e },
            })
          ).body;
        } catch (e) {
          throw new i.Hx(e);
        }
      };
    },
    281320: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        u,
        l,
        s,
        a = n(442837),
        c = n(570140);
      let d = new Map(),
        _ = new Map();
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      class E extends (i = a.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, t) {
          var n, r;
          return null !==
            (r = null === (n = _.get(e)) || void 0 === n ? void 0 : n.get(t)) &&
            void 0 !== r
            ? r
            : 0;
        }
        getPriceTiersForGuildAndType(e, t) {
          var n;
          return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t);
        }
      }
      (s = "CreatorMonetizationStore"),
        (l = "displayName") in (u = E)
          ? Object.defineProperty(u, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[l] = s),
        (t.Z = new E(c.Z, {
          CONNECTION_OPEN: function () {
            d.clear(), _.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !_.has(t) && _.set(t, new Map()), _.get(t).set(n, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: r } = e;
            !_.has(t) && _.set(t, new Map()),
              _.get(t).set(n, 2),
              !d.has(t) && d.set(t, new Map()),
              d.get(t).set(n, r);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !_.has(t) && _.set(t, new Map()), _.get(t).set(n, 2);
          },
        }));
    },
    834431: function (e, t, n) {
      n.d(t, {
        n: function () {
          return i;
        },
      });
      var r = n(506071);
      function i() {
        return (0, r.n)();
      }
    },
    166081: function (e, t, n) {
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(695346),
        o = n(73346),
        u = n(834431);
      function l(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = i.QK.useSetting(),
          s = (0, u.n)(),
          a = n && s && l;
        return r.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, o._W)(
              e.application_id,
              e.image_asset,
              t,
              a ? void 0 : "webp",
            );
        }, [t, e, a]);
      }
    },
    629481: function (e, t, n) {
      var r, i, o, u;
      n.d(t, {
        Hr: function () {
          return l;
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
        ((o = r || (r = {})).GET_STARTED_CLICK = "get_started_click"),
        (o.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (o.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (o.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((u = i || (i = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (u.SHOP_HEADER_BUTTON = "shop_header_button");
      let l = "hasClickedGuildShopProductPreviewTab",
        s = "hasClickedGuildShopChannelRow",
        a = "https://discord.com/servershop",
        c = "1 GB";
    },
    841762: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        o = n(120356),
        u = n.n(o),
        l = n(481060),
        s = n(456692);
      function a(e) {
        let { alt: t, ...n } = e,
          [o, u] = i.useState(!0);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o &&
              (0, r.jsx)(l.Spinner, {
                type: l.Spinner.Type.LOW_MOTION,
                className: s.loader,
              }),
            (0, r.jsx)("img", { ...n, alt: t, onLoad: () => u(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: i,
          aspectRatio: o,
          className: l,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, r.jsxs)("div", {
          className: u()(s.container, l),
          children: [
            (0, r.jsx)("img", { src: n, alt: i, className: s.backgroundImage }),
            (0, r.jsx)("div", { className: s.backgroundImageFilter }),
            (0, r.jsx)("div", {
              style: { aspectRatio: o },
              className: s.imageContainer,
              children: (0, r.jsx)(a, {
                src: t,
                alt: i,
                className: u()(s.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    479099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
        f: function () {
          return O;
        },
      }),
        n(47120);
      var r,
        i,
        o = n(735250),
        u = n(470079),
        l = n(120356),
        s = n.n(l),
        a = n(91192),
        c = n(442837),
        d = n(481060),
        _ = n(239091),
        E = n(596454),
        f = n(607070),
        I = n(339085),
        S = n(695346),
        T = n(572004),
        C = n(689938),
        p = n(813778);
      function N(e) {
        let {
            tag: t,
            size: r = 1,
            disabled: i,
            className: l,
            onClick: N,
            onRemove: O,
            selected: g,
            ariaLabel: m,
          } = e,
          { name: R, emojiId: h, emojiName: A } = t,
          M = null != O,
          [L, P] = u.useState(!1),
          D = (0, c.e7)([I.ZP], () =>
            null != h ? I.ZP.getUsableCustomEmojiById(h) : null,
          ),
          U = M || null != N,
          v = (!M || !L) && (null != h || null != A),
          b = 0 === r,
          Z = u.useRef(null),
          G = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          y = (e) => {
            let r = S.Sb.getSetting();
            T.wS &&
              r &&
              (0, _.jW)(e, async () => {
                let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, o.jsx)(e, { ...n, tag: t });
              });
          },
          x = (0, o.jsxs)(o.Fragment, {
            children: [
              v
                ? (0, o.jsx)(E.Z, {
                    className: s()(p.emoji, { [p.small]: b }),
                    emojiId: h,
                    emojiName: A,
                    animated: !!(null == D ? void 0 : D.animated),
                    size: "reaction",
                  })
                : null,
              L &&
                M &&
                (0, o.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, o.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: p.close,
                  }),
                }),
              (0, o.jsx)(d.Text, {
                variant: b ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: R,
              }),
            ],
          }),
          F = {
            key: t.id,
            className: s()(
              p.pill,
              {
                [p.disabled]: i,
                [p.clickable]: U,
                [p.small]: b,
                [p.selected]: g,
              },
              l,
            ),
            onClick: (e) => {
              null == N || N(e),
                null == O || O(t),
                !G && null != Z.current && Z.current.blur();
            },
            onContextMenu: (e) => y(e),
            onMouseEnter: () => M && P(!0),
            onMouseLeave: () => M && P(!1),
          },
          w = (0, a.JA)("forum-tag-".concat(t.id));
        return U
          ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: Z,
              focusProps: { ringTarget: Z },
              "aria-label":
                null != m
                  ? m
                  : C.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: R,
                    }),
              role: "button",
              "aria-pressed": g,
              ...F,
              children: x,
            })
          : (0, o.jsx)("div", { ...F, children: x });
      }
      function O(e) {
        let { tags: t, count: n, size: r = 1 } = e,
          i = 0 === r;
        return (0, o.jsx)(d.Tooltip, {
          "aria-label": C.Z.Messages.FORUM_TAGS,
          text: (0, o.jsx)(o.Fragment, {
            children: t.map((e) =>
              (0, o.jsx)(
                N,
                { tag: e, className: p.tooltipPill, size: N.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, o.jsx)("div", {
              ...e,
              className: s()(p.pill, { [p.small]: i }),
              children: (0, o.jsxs)(d.Text, {
                variant: i ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((i = r || (r = {}))[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (N.Sizes = r);
    },
    528011: function (e, t, n) {
      n.d(t, {
        g: function () {
          return S;
        },
        mI: function () {
          return I;
        },
      }),
        n(47120);
      var r = n(149765),
        i = n(399606),
        o = n(581883),
        u = n(430824),
        l = n(496675),
        s = n(914010),
        a = n(594174),
        c = n(700785),
        d = n(709054),
        _ = n(533244),
        E = n(487419),
        f = n(676770);
      n(981631);
      function I(e) {
        let t = (0, i.e7)([u.Z, l.Z], () => {
            let t = u.Z.getGuild(e);
            if (null == t) return !1;
            let n = l.Z.getGuildPermissions(t);
            return null != n && r.Db(n, f.cv);
          }),
          n = (0, i.e7)([E.Z], () =>
            null != e ? E.Z.getGuildIncident(e) : null,
          ),
          o = null != n && (0, _.ur)(n);
        return {
          shouldShowIncidentActions: t,
          incidentData: n,
          isUnderLockdown: o,
        };
      }
      function S() {
        var e;
        let t = (function (e) {
            let t = a.default.getCurrentUser(),
              n = E.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => u.Z.getGuild(e))) {
              if (null == i) continue;
              let o = n[i.id];
              if (
                !(
                  null == o ||
                  (!(0, _.i9)(o) && !(0, _.ur)(o)) ||
                  ((0, _.ur)(o) && i.id !== e)
                )
              ) {
                if (
                  r.Db(c.uB({ user: t, context: i, checkElevated: !1 }), f.cv)
                )
                  return i.id;
              }
            }
            return null;
          })(s.Z.getGuildId()),
          n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
          i = null != t ? n[t] : null,
          l = null != i && i.disableRaidAlertNag;
        return { show: null != t && !l, guildId: t };
      }
    },
    273504: function (e, t, n) {
      n.d(t, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return p;
        },
        Lg: function () {
          return C;
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
          return T;
        },
        Vk: function () {
          return E;
        },
        _6: function () {
          return N;
        },
        aj: function () {
          return I;
        },
        dc: function () {
          return O;
        },
        fX: function () {
          return l.f;
        },
        hu: function () {
          return _;
        },
        jj: function () {
          return o.j;
        },
        n4: function () {
          return a;
        },
        q4: function () {
          return u.q;
        },
        uE: function () {
          return f;
        },
      });
      var r,
        i,
        o = n(401653),
        u = n(95930),
        l = n(41381);
      ((r = i || (i = {}))[(r.PROFANITY = 1)] = "PROFANITY"),
        (r[(r.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (r[(r.SLURS = 3)] = "SLURS"),
        l.f.USER_PROFILE,
        l.f.SERVER_POLICY,
        l.f.MENTION_SPAM,
        l.f.ML_SPAM,
        l.f.DEFAULT_KEYWORD_LIST,
        l.f.KEYWORD;
      let s = 1e3,
        a = 100,
        c = 1e3,
        d = 10,
        _ = 60,
        E = 1,
        f = 1,
        I = 260,
        S = 100,
        T = 1,
        C = 50,
        p = 20,
        N = 150,
        O = "automod-profile-quarantine-alert";
    },
    787824: function (e, t, n) {
      n.d(t, {
        C: function () {
          return function e(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((n, i) => {
                  let o = (0, r.camelCase)(i);
                  return (
                    "object" != typeof t[i] || Array.isArray(t[i])
                      ? (n[o] = t[i])
                      : (n[o] = e(t[i])),
                    n
                  );
                }, {});
          };
        },
        X: function () {
          return function e(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((n, i) => {
                  let o = (0, r.snakeCase)(i);
                  return (
                    "object" != typeof t[i] || Array.isArray(t[i])
                      ? (n[o] = t[i])
                      : (n[o] = e(t[i])),
                    (n[o] = t[i]),
                    n
                  );
                }, {});
          };
        },
      }),
        n(724458);
      var r = n(392711);
    },
    226192: function (e, t, n) {
      n.d(t, {
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
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        o = n(273504),
        u = n(689938);
      function l(e) {
        return {
          [o.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await n.e("94005").then(n.bind(n, 144462));
                return (n) => {
                  var o;
                  return (0, r.jsx)(i, {
                    initialCustomMessage:
                      null !== (o = t.metadata.customMessage) && void 0 !== o
                        ? o
                        : "",
                    onSubmit: (r) => {
                      (t.metadata.customMessage = r), e(t), n.onClose();
                    },
                    ...n,
                    onClose: () => (e(null), n.onClose()),
                  });
                };
              });
            }),
          [o.jj.FLAG_TO_CHANNEL]: (t, u) =>
            new Promise((l) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await n.e("74543").then(n.bind(n, 643611)),
                  s = t.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                return (n) =>
                  (0, r.jsx)(i, {
                    action: u,
                    isEdit: null != s,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (u.metadata.channelId = e),
                        t.exemptChannels.add(e),
                        l(u),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (l(null), n.onClose()),
                  });
              });
            }),
          [o.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((u) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await n.e("78273").then(n.bind(n, 41767)),
                  l = e.actions.find(
                    (e) => e.type === o.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, r.jsx)(i, {
                    action: t,
                    isEdit: null != l,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (t.metadata.durationSeconds = e),
                        u(t),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (u(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function s(e, t, o, u) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await n.e("37483").then(n.bind(n, 241046));
          return (n) =>
            (0, r.jsx)(i, {
              ...n,
              automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: o,
                channel: u,
              },
            });
        });
      }
      function a(e, t) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await n.e("28382").then(n.bind(n, 537623));
          return (n) => (0, r.jsx)(i, { ...n, messageId: e, guildId: t });
        });
      }
      function c(e) {
        (0, i.openModal)((t) =>
          (0, r.jsx)(i.ConfirmModal, {
            header: u.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: u.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: u.Z.Messages.CANCEL,
            ...t,
            children: (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              children:
                u.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
            }),
          }),
        );
      }
    },
    36459: function (e, t, n) {
      n.d(t, {
        $Y: function () {
          return g;
        },
        JK: function () {
          return p;
        },
        Je: function () {
          return N;
        },
        T9: function () {
          return h;
        },
        UE: function () {
          return R;
        },
        Xx: function () {
          return m;
        },
        mm: function () {
          return O;
        },
        qY: function () {
          return C;
        },
      }),
        n(47120);
      var r = n(544891),
        i = n(570140),
        o = n(367907),
        u = n(430824),
        l = n(496675),
        s = n(823379),
        a = n(709054),
        c = n(177862),
        d = n(787824),
        _ = n(226192),
        E = n(981631);
      function f(e) {
        return { type: e.type, metadata: (0, d.X)(e.metadata) };
      }
      function I(e) {
        var t, n;
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
              null !== (t = e.exemptChannels) && void 0 !== t ? t : [],
            ),
            exempt_roles: Array.from(
              null !== (n = e.exemptRoles) && void 0 !== n ? n : [],
            ),
          }
        );
      }
      function S(e) {
        return { type: e.type, metadata: (0, d.C)(e.metadata) };
      }
      function T(e) {
        var t, n, r;
        let i = {
          id:
            null !== (t = e.id) && void 0 !== t
              ? t
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
            null !== (n = e.exempt_channels) && void 0 !== n ? n : [],
          ),
          exemptRoles: new Set(
            null !== (r = e.exempt_roles) && void 0 !== r ? r : [],
          ),
        };
        return (
          null != i.triggerMetadata && delete i.triggerMetadata.keywordLists, i
        );
      }
      async function C(e) {
        let t = I(e),
          n = await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
          });
        return (0, d.C)(n.body);
      }
      async function p(e) {
        let t = I(e);
        return (
          delete t.id,
          T(
            (
              await r.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: t,
              })
            ).body,
          )
        );
      }
      async function N(e) {
        let t = I(e);
        return T(
          (
            await r.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: t,
            })
          ).body,
        );
      }
      async function O(e, t) {
        return await r.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(t, e) }), !0;
      }
      async function g(e) {
        let t = await r.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(t.body) ? t.body.map(T) : [];
      }
      async function m(e, t, n) {
        if (!!l.Z.can(E.Plq.MANAGE_MESSAGES, t))
          await r.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
          });
      }
      function R(e, t, n) {
        let i = u.Z.getGuild(e);
        if (null != i && !!l.Z.can(E.Plq.MANAGE_GUILD, i))
          (0, _.UV)(() => {
            (0, o.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              r.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
              n();
          });
      }
      function h(e) {
        i.Z.dispatch({
          type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
          guildId: e,
        });
      }
    },
    223606: function (e, t, n) {
      n(724458);
      var r,
        i = n(442837),
        o = n(570140),
        u = n(673750),
        l = n(786761),
        s = n(592125),
        a = n(375954),
        c = n(709054),
        d = n(539573),
        _ = n(825829),
        E = n(981631);
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
      let I = {},
        S = 0,
        T = {},
        C = {},
        p = (e, t) => {
          let n = (0, u.hc)(e),
            r = {
              id: n,
              isBlockedEdit: (0, u.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, t),
            };
          (I[n] = r), S++;
        },
        N = (e) => I[e],
        O = (e) => {
          null != I[e] && delete I[e], S++;
        };
      function g(e) {
        let { messageData: t, errorResponseBody: n } = e;
        return p(t, n), !0;
      }
      function m(e) {
        var t;
        let { channelId: n, messages: r } = e,
          i =
            null === (t = s.Z.getChannel(n)) || void 0 === t
              ? void 0
              : t.getGuildId();
        if (null == i) return !1;
        let o = C[i],
          u = r.reduce((e, t) => {
            var n;
            return t.type === E.uaV.AUTO_MODERATION_ACTION &&
              (null === (n = t.embeds) || void 0 === n
                ? void 0
                : n.some((e) => {
                    let { type: t } = e;
                    return t === E.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === c.default.compare(e, t.id)
                ? t.id
                : void 0
              : e;
          }, o);
        return null != u && C[i] !== u && ((C[i] = u), !0);
      }
      class R extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z),
            null != e &&
              ((I = e.automodFailedMessages),
              (T = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: I,
            mentionRaidDetectionByGuild: T,
            lastIncidentAlertMessage: C,
          };
        }
        getMessage(e) {
          var t;
          return null == e
            ? null
            : null !== (t = N(e)) && void 0 !== t
              ? t
              : null;
        }
        getMessagesVersion() {
          return S;
        }
        getMentionRaidDetected(e) {
          var t;
          return null !== (t = T[e]) && void 0 !== t ? t : null;
        }
        getLastIncidentAlertMessage(e) {
          var t;
          return null !== (t = C[e]) && void 0 !== t ? t : null;
        }
      }
      f(R, "displayName", "GuildAutomodMessageStore"),
        f(R, "persistKey", "GuildAutomodMessages"),
        (t.Z = new R(o.Z, {
          CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
          },
          LOAD_MESSAGES_SUCCESS: m,
          LOCAL_MESSAGES_LOADED: m,
          MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== E.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, l.e5)(n);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((C[t] = r.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: g,
          MESSAGE_EDIT_FAILED_AUTOMOD: g,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return O(t), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if (
              (null == t ? void 0 : t.body) == null ||
              t.body.code === E.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let n = t.body.id;
            if (null == n) return !1;
            O(n);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: t,
              decisionId: n,
              suspiciousMentionActivityUntil: r,
            } = e;
            return (
              (T[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: r,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete T[t], !0;
          },
        }));
    },
    290034: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        o = n.n(i),
        u = n(297700),
        l = n(471885),
        s = n(981631),
        a = n(188662);
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
          premiumTier: t,
          iconBackgroundClassName: n,
          iconClassName: i,
          size: s,
        } = e;
        return (0, r.jsx)(u.Z, {
          className: o()(n, c[t]),
          size: s,
          children: (0, r.jsx)(l.Z, {
            tier: t,
            className: o()(i, a.boostedGuildIconGem, d[t]),
          }),
        });
      }
    },
    527379: function (e, t, n) {
      n.d(t, {
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
      var r = n(570140),
        i = n(434404),
        o = n(703656),
        u = n(430824),
        l = n(241559),
        s = n(327999),
        a = n(981631),
        c = n(176505);
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
      function E(e, t) {
        let { continuationToken: n, ...i } = t;
        r.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: i,
        });
      }
      async function f(e, t) {
        await r.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function I(e) {
        let t = (0, l.lv)(e),
          n = u.Z.getGuild(e);
        return (
          !!t &&
          null != n &&
          (n.hasFeature(a.oNc.COMMUNITY) ||
          n.hasFeature(a.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, o.uL)(a.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
            : (i.Z.open(n.id, a.pNK.MEMBERS), !0))
        );
      }
      async function S(e, t) {
        let n = await (0, s._2)(e, t);
        return 0 === n.length
          ? []
          : (await r.Z.dispatch({
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
          return u;
        },
        Je: function () {
          return s;
        },
        cf: function () {
          return l;
        },
        mh: function () {
          return a;
        },
      });
      var r = n(570140),
        i = n(881052),
        o = n(824389);
      let u = async (e) => {
          r.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let t = await o.uV(e);
            r.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: e,
              products: t,
            });
          } catch (t) {
            r.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
          }
        },
        l = async (e, t) => {
          r.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: t });
          try {
            let n = await o.p9(e, t);
            return (
              r.Z.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: n }),
              n
            );
          } catch (e) {
            throw (
              (r.Z.dispatch({
                type: "GUILD_PRODUCT_FETCH_FAILURE",
                productId: t,
                error: new i.Hx(e),
              }),
              e)
            );
          }
        };
      async function s(e, t, n) {
        let i = await o.Je(e, t, n);
        return r.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: i }), i;
      }
      async function a(e, t) {
        return (
          await o.mh(e, t),
          r.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: t }),
          !0
        );
      }
    },
    267101: function (e, t, n) {
      n.d(t, {
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
        n(47120);
      var r = n(470079),
        i = n(442837);
      n(935369);
      var o = n(38618),
        u = n(160404),
        l = n(496675),
        s = n(914010),
        a = n(495437),
        c = n(240864),
        d = n(981631);
      let _ = (e) => {
          let t = (0, i.e7)(
              [c.Z],
              () =>
                null != e
                  ? c.Z.getGuildProductsForGuildFetchState(e)
                  : c.M.FETCHED,
              [e],
            ),
            n = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            [u, l] = r.useState(!0);
          return (
            r.useEffect(() => {
              u &&
                (t === c.M.NOT_FETCHED ||
                  (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                n &&
                a.EB(e),
                l(!n);
            }, [e, n, t, u]),
            { listingsLoaded: t === c.M.FETCHED && !u }
          );
        },
        E = function (e, t) {
          let { requireCurrentGuild: n } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            u = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            l = (0, i.e7)([s.Z], () => s.Z.getGuildId());
          return (
            r.useEffect(() => {
              let r = c.Z.getGuildProductFetchState(t);
              if ((!n || l === e) && u && r === c.M.NOT_FETCHED)
                try {
                  a.cf(e, t);
                } catch (e) {}
            }, [e, t, u, l, n]),
            (0, i.e7)([c.Z], () => c.Z.getGuildProduct(t))
          );
        },
        f = function (e) {
          let { publishedOnly: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, i.e7)([c.Z, u.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != t ? t : !u.Z.isViewingServerShop(e),
            }),
          );
        },
        I = (e) =>
          (0, i.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        S = (e) =>
          (0, i.e7)([l.Z], () => null != e && l.Z.can(d.Plq.ADMINISTRATOR, e));
    },
    824389: function (e, t, n) {
      n.d(t, {
        Je: function () {
          return l;
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
      var r = n(544891),
        i = n(881052),
        o = n(73346),
        u = n(981631);
      let l = async (e, t, n) => {
          let {
            priceTier: o,
            imageName: l,
            createNewRole: s,
            unlinkRole: a,
            ...c
          } = n;
          try {
            return (
              await r.tn.patch({
                url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                body: {
                  ...c,
                  image_name: l,
                  price_tier: o,
                  create_new_role: s,
                  unlink_role: a,
                },
              })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        s = async (e, t) => {
          try {
            await r.tn.del({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t) });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        a = async (e) => {
          try {
            return (await (0, o.Kb)({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e) }))
              .body.listings;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        c = async (e, t) => {
          try {
            return (
              await (0, o.Kb)({ url: u.ANM.GUILD_PRODUCT_LISTINGS(e, t) })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        d = async (e) => {
          let { guildId: t, productId: n, attachmentId: o } = e;
          try {
            return (
              await r.tn.post({
                url: u.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o),
              })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        };
    },
    240864: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      }),
        n(653041),
        n(47120);
      var r,
        i,
        o,
        u,
        l,
        s,
        a = n(442837),
        c = n(759174),
        d = n(570140),
        _ = n(70956),
        E = n(709054);
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let f = {},
        I = {},
        S = {},
        T = 10 * _.Z.Millis.MINUTE;
      function C(e) {
        return "guild:".concat(e);
      }
      function p(e) {
        return "guild:".concat(e, ":published");
      }
      let N = new c.h(
          (e) => {
            let t = [C(e.guild_id)];
            return e.published && t.push(p(e.guild_id)), t;
          },
          (e) =>
            (function (e) {
              let t = E.default.extractTimestamp(e.id);
              return e.published ? -t : -t + 1e12;
            })(e),
        ),
        O = [];
      class g extends (i = a.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : 0;
        }
        getGuildProduct(e) {
          return N.get(e);
        }
        getGuildProductsForGuild(e, t) {
          let { publishedOnly: n } = t;
          return null == e ? O : N.values(n ? p(e) : C(e));
        }
        getGuildProductFetchState(e) {
          var t;
          return null !== (t = I[e]) && void 0 !== t ? t : 0;
        }
        isGuildProductsCacheExpired(e) {
          var t;
          return Date.now() - (null !== (t = S[e]) && void 0 !== t ? t : 0) > T;
        }
      }
      (s = "GuildProductsStore"),
        (l = "displayName") in (u = g)
          ? Object.defineProperty(u, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[l] = s),
        (t.Z = new g(d.Z, {
          CONNECTION_OPEN: function () {
            N.clear(), (f = {}), (I = {}), (S = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: t } = e;
            (f[t] = 1),
              [...N.values(C(t))].forEach((e) => {
                N.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, products: n } = e;
            (f[t] = 2),
              (S[t] = Date.now()),
              n.forEach((e) => {
                N.set(e.id, e), (I[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            f[t] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: t } = e;
            N.set(t.id, t);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: t } = e;
            N.set(t.id, t);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: t } = e;
            N.delete(t);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: t } = e;
            I[t] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: t } = e;
            (I[t.id] = 2), N.set(t.id, t);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: t, error: n } = e;
            (I[t] = 2), 404 === n.status && N.delete(t);
          },
        }));
    },
    863663: function (e, t, n) {
      n.d(t, {
        NB: function () {
          return u;
        },
        ar: function () {
          return c;
        },
        fG: function () {
          return a;
        },
        kg: function () {
          return l;
        },
        pM: function () {
          return s;
        },
      });
      var r = n(881052);
      n(496675);
      var i = n(981631),
        o = n(689938);
      let u = "_role";
      function l(e) {
        if (!(e >= 0))
          switch (-e) {
            case i.evJ.ENTITY_TOO_LARGE:
              return o.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case i.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
              return o.Z.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
            case 1:
              return o.Z.Messages.ERROR_GENERIC_TITLE;
            default:
              return o.Z.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
                code: -e,
              });
          }
      }
      function s(e) {
        let { newRoleParams: t } = e;
        if (null != t && "" === t.name.trim()) {
          var n, i;
          return (
            (n = u),
            (i = o.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
            new r.Hx({
              status: 400,
              body: {
                message: "Invalid form body",
                errors: { [n]: { _errors: [{ code: "", message: i }] } },
              },
            })
          );
        }
      }
      function a(e) {
        var t;
        let {
            guildProductListing: n,
            name: r,
            priceTier: i,
            description: o,
            image: u,
            imageName: l,
            isImageChanged: s,
            newRoleParams: a,
            hasUnsavedAttachmentChanges: c,
          } = e,
          d = {};
        (null == n ? void 0 : n.name) !== r && "" !== r.trim() && (d.name = r),
          (null !== (t = null == n ? void 0 : n.description) && void 0 !== t
            ? t
            : "") !== o && (d.description = o),
          (null == n ? void 0 : n.price_tier) !== i &&
            null != i &&
            (d.priceTier = i),
          null != a && "" !== a.name.trim()
            ? (d.createNewRole = !0)
            : null === a && (d.unlinkRole = !0),
          u.startsWith("data:") &&
            (s || (null == n && (Object.keys(d).length > 0 || c))) &&
            ((d.image = u), (d.imageName = l));
        let _ = Object.keys(d).length > 0 || c;
        return {
          changes: d,
          hasUnsavedChanges: _,
          canSaveForDraft: _,
          canSaveForPublished: _,
          canPublishOrUnpublish: !(null == n || _),
        };
      }
      function c(e, t) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(i.Z5c.GUILD_PRODUCT(e, t));
      }
    },
    676651: function (e, t, n) {
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        o = n(302463);
      function u(e, t) {
        (0, i.openModalLazy)(
          async () => {
            let { default: i } = await n.e("73628").then(n.bind(n, 458961));
            return (n) => (0, r.jsx)(i, { guildId: e, productId: t, ...n });
          },
          { modalKey: o.Yz },
        );
      }
    },
    942833: function (e, t, n) {
      n.d(t, {
        C: function () {
          return u;
        },
        k: function () {
          return l;
        },
      });
      var r = n(470079),
        i = n(937615),
        o = n(689938);
      function u(e) {
        return r.useMemo(() => {
          if (null == e) return;
          let t = null != e.role_id,
            n = e.attachments_count > 0;
          if (t && n)
            return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (t) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (n) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
        }, [e]);
      }
      function l(e) {
        return r.useMemo(() => {
          if ((null == e ? void 0 : e.price) == null) return;
          let { amount: t, currency: n } = e.price;
          return (0, i.T4)(t, n);
        }, [e]);
      }
    },
    613810: function (e, t, n) {
      var r = n(735250);
      n(470079);
      var i = n(481060);
      t.Z = {
        open: function (e) {
          (0, i.openModalLazy)(async () => {
            let { default: t } = await n.e("53162").then(n.bind(n, 490576));
            return (n) => (0, r.jsx)(t, { ...e, ...n });
          });
        },
      };
    },
    391181: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
        m: function () {
          return S;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        o = n.n(i),
        u = n(481060),
        l = n(239091),
        s = n(166081),
        a = n(937615),
        c = n(942833),
        d = n(48691),
        _ = n(231338),
        E = n(689938),
        f = n(772103);
      function I(e) {
        let {
          showEditProduct: t,
          showUnpublishProduct: n,
          showCopyLink: i,
          showTestDownload: o,
          showDeleteProduct: l,
          showReportProduct: s,
          onEditProduct: a,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: _,
          onTestDownload: I,
          onReportProduct: S,
          closePopout: T,
          onSelect: C,
        } = e;
        return (0, r.jsx)("div", {
          className: f.menuContainer,
          children: (0, r.jsxs)(u.Menu, {
            navId: "guild-product-context",
            onClose: T,
            "aria-label": E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: C,
            children: [
              (0, r.jsxs)(u.MenuGroup, {
                children: [
                  t &&
                    (0, r.jsx)(u.MenuItem, {
                      id: "guild-product-edit",
                      label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                      action: a,
                    }),
                  i &&
                    (0, r.jsx)(u.MenuItem, {
                      id: "guild-product-copy-link",
                      label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                      icon: u.LinkIcon,
                      action: _,
                    }),
                  o &&
                    (0, r.jsx)(u.MenuItem, {
                      id: "guild-product-test-download",
                      label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                      icon: u.DownloadIcon,
                      action: I,
                    }),
                ],
              }),
              (0, r.jsxs)(u.MenuGroup, {
                children: [
                  n &&
                    (0, r.jsx)(u.MenuItem, {
                      id: "guild-product-unpublish",
                      label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                      action: c,
                    }),
                  l &&
                    (0, r.jsx)(u.MenuItem, {
                      id: "guild-product-delete",
                      label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, r.jsx)(u.MenuGroup, {
                children:
                  s &&
                  (0, r.jsx)(u.MenuItem, {
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
          product: t,
          guildId: n,
          showEditProduct: i,
          showUnpublishProduct: o,
          showTestDownload: l,
          showCopyLink: s,
          showDeleteProduct: a,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: _,
          onDeleteProduct: S,
          onCopyProductLink: T,
          onTestDownload: C,
          onReportProduct: p,
        } = e;
        return (0, r.jsx)("div", {
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, r.jsx)(u.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: u.Popout.Animation.FADE,
            renderPopout: (e) =>
              (0, r.jsx)(I, {
                ...e,
                guildId: n,
                productId: t.id,
                showEditProduct: i,
                showUnpublishProduct: o,
                showCopyLink: s,
                showTestDownload: l,
                showReportProduct: c,
                showDeleteProduct: a,
                onEditProduct: d,
                onUnpublishProduct: _,
                onDeleteProduct: S,
                onCopyLink: T,
                onTestDownload: C,
                onReportProduct: p,
              }),
            children: (e, n) => {
              let { isShown: i } = n;
              return (0, r.jsx)(u.Clickable, {
                ...e,
                "aria-label":
                  E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format(
                    { productName: t.name },
                  ),
                "aria-haspopup": "listbox",
                "aria-expanded": i,
                className: f.productActionMenuButton,
                children: (0, r.jsx)(u.MoreVerticalIcon, {
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
      function T(e) {
        let {
            product: t,
            guildId: n,
            onEditProduct: i,
            onUnpublishProduct: T,
            onDeleteProduct: C,
            onCopyProductLink: p,
            onTestDownload: N,
            disabled: O = !1,
          } = e,
          g = (0, s.U)(t, 600),
          m =
            null !== t.price_tier ? (0, a.T4)(t.price_tier, _.pK.USD) : void 0,
          R = (0, c.C)(t);
        return (0, r.jsxs)(u.ClickableContainer, {
          tag: "article",
          className: o()(f.productCardClickable, f.productCard, {
            [f.disabled]: O,
          }),
          onClick: O ? void 0 : i,
          onContextMenu: function (e) {
            (0, l.jW)(e, () =>
              Promise.resolve((e) =>
                (0, r.jsx)(I, {
                  ...e,
                  closePopout: l.Zy,
                  guildId: n,
                  productId: t.id,
                  showEditProduct: !0,
                  showUnpublishProduct: t.published,
                  showCopyLink: t.published,
                  showTestDownload: null != t.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: i,
                  onUnpublishProduct: T,
                  onDeleteProduct: C,
                  onCopyLink: p,
                  onTestDownload: N,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": E.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
            productName: t.name,
          }),
          children: [
            (0, r.jsx)("img", {
              alt: "",
              src: g,
              className: f.productThumbnail,
            }),
            (0, r.jsxs)("div", {
              className: f.productInfo,
              children: [
                (0, r.jsxs)("div", {
                  className: f.productInfoContent,
                  children: [
                    (0, r.jsx)(u.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: f.productName,
                      children: t.name,
                    }),
                    (0, r.jsx)(u.Spacer, { size: 8 }),
                    (0, r.jsxs)("div", {
                      className: f.productDetails,
                      children: [
                        (0, r.jsx)(u.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: m,
                        }),
                        null != R
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: f.dotSeparator,
                                }),
                                (0, r.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: R,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, r.jsx)(u.Spacer, { size: 16 }),
                    t.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {}),
                  ],
                }),
                !O &&
                  (0, r.jsx)(S, {
                    product: t,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: i,
                    onUnpublishProduct: T,
                    onDeleteProduct: C,
                    onCopyProductLink: p,
                    onTestDownload: N,
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
          return _;
        },
        t: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(481060),
        o = n(44315),
        u = n(377171),
        l = n(981631),
        s = n(689938),
        a = n(405013);
      function c(e) {
        let {
          label: t,
          backgroundColor: n = u.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: o,
          iconColor: l,
        } = e;
        return (0, r.jsxs)("div", {
          className: a.badge,
          style: { backgroundColor: n },
          children: [
            (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: a.__invalid_badgeText,
              children: t,
            }),
            (0, r.jsx)(o, {
              className: a.badgeIcon,
              color: null != l ? l : "currentColor",
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
          iconColor: (0, o.Lq)(l.Ilk.PRIMARY_330),
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
      var r = n(735250),
        i = n(470079),
        o = n(399606),
        u = n(38618),
        l = n(423117),
        s = n(289393);
      let a = i.createContext(void 0);
      function c(e) {
        let t = i.useContext(a);
        if (null == t)
          throw Error(
            "".concat(
              null != e ? e : "useGroupListingsFetchContext",
              " must be used within a GroupListingsFetchContextProvider",
            ),
          );
        let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
        return r(), n;
      }
      function d(e) {
        let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: _,
            dontFetchWhileTrue: E,
          } = e,
          f = (0, o.e7)([u.Z], () => u.Z.isConnected()),
          I = (0, o.e7)([s.Z], () =>
            null != t
              ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t)
              : s.M.FETCHED,
          ),
          S = i.useRef(c),
          T = i.useCallback(() => {
            if (null == t || !f || !0 === E) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (S.current || e === s.M.NOT_FETCHED) &&
              ((S.current = !1),
              l.FP(t, { includeSoftDeleted: d, countryCode: _ }));
          }, [f, t, d, _, E]),
          C = i.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
        return (0, r.jsx)(a.Provider, {
          value: { listingsLoaded: C, fetchGroupListingsForGuild: T },
          children: n,
        });
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return l;
        },
        Md: function () {
          return u;
        },
        Q8: function () {
          return o;
        },
      });
      var r = n(373228),
        i = n(689938);
      let o = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        u = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
        l = [
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
    35125: function (e, t, n) {
      n.d(t, {
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
      var r = n(367907),
        i = n(200876),
        o = n(430824),
        u = n(594174);
      n(709054), n(523361);
      var l = n(981631),
        s = n(689938);
      function a(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: u, formatParams: l } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return u.format(l);
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: u, formatParams: l } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return u.astFormat(l);
      }
      function d(e, t) {
        var n, r;
        let i = o.Z.getGuild(e),
          u =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: u,
          showWithDuration: u > 0,
          isRenewal:
            null !== (r = null == t ? void 0 : t.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function _(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r,
            roleSubscriptionOnClickHandler: i,
            guildId: o,
            roleSubscriptionData: u,
          } = e,
          {
            guild: l,
            totalMonthsSubscribed: a,
            showWithDuration: c,
            isRenewal: _,
          } = d(o, u);
        return (
          (t = c
            ? _
              ? s.Z.Messages
                  .SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION
            : _
              ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW
              : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: r,
              guildName: null == l ? void 0 : l.name,
              handleGuildNameClick: i,
              tierName: null == u ? void 0 : u.tier_name,
              months: a,
            },
          }
        );
      }
      function E(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: r = l.dG4,
            roleSubscriptionOnClickHandler: i = l.dG4,
            guildId: o,
            roleSubscriptionData: u,
          } = e,
          {
            guild: a,
            totalMonthsSubscribed: c,
            showWithDuration: _,
            isRenewal: E,
          } = d(o, u),
          f = {
            guildName: null == a ? void 0 : a.name,
            tierName: null == u ? void 0 : u.tier_name,
            username: n,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
          };
        return (t = _
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
      function I(e, t, n, i) {
        var o;
        r.ZP.trackWithMetadata(
          l.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (o = u.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: i,
          },
        );
      }
      function S(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    584825: function (e, t, n) {
      n.d(t, {
        GG: function () {
          return I;
        },
        HQ: function () {
          return N;
        },
        JH: function () {
          return m;
        },
        QV: function () {
          return g;
        },
        YB: function () {
          return O;
        },
        _1: function () {
          return p;
        },
        _k: function () {
          return E;
        },
        jO: function () {
          return f;
        },
        oC: function () {
          return R;
        },
        qi: function () {
          return S;
        },
        r4: function () {
          return C;
        },
        sp: function () {
          return T;
        },
      }),
        n(47120),
        n(653041);
      var r = n(470079),
        i = n(442837),
        o = n(935369),
        u = n(38618);
      n(823379);
      var l = n(730647),
        s = n(423117),
        a = n(289393),
        c = n(697227);
      let d = [],
        _ = function (e) {
          let {
              refetchOnMount: t = !1,
              includeSoftDeleted: n = !0,
              countryCode: o,
              dontFetchWhileTrue: l,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, i.e7)([u.Z], () => u.Z.isConnected()),
            d = (0, i.e7)([a.Z], () =>
              null != e
                ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : a.M.FETCHED,
            ),
            _ = r.useRef(t);
          return (
            r.useEffect(() => {
              if (null == e || !c || !0 === l) return;
              let r = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (t || r === a.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(e, { includeSoftDeleted: n, countryCode: o }));
            }, [c, e, n, t, o, l]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
          );
        },
        E = function (e) {
          let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
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
                if (null != r && (!r.soft_deleted || !!t))
                  (r.published || n) && i.push(r);
              }
              return i;
            },
            [e, t, n],
          );
        },
        f = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionListing(e) : null,
          ),
        I = (e) => {
          let t = (0, l.f)("useGroupListingsForGuild");
          return (0, i.e7)([a.Z], () =>
            null != e && t ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
          );
        },
        S = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            _(e),
            (0, i.Wu)([a.Z], () => {
              let n =
                  null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                r = [];
              for (let e of n)
                for (let n of e.subscription_listings_ids) {
                  let e = a.Z.getSubscriptionListing(n);
                  null != e &&
                    (t.includeSoftDeleted || !e.soft_deleted) &&
                    r.push(e);
                }
              return t.includeSoftDeleted && t.sortDeletedListingsLast
                ? [
                    ...r.filter((e) => !e.soft_deleted),
                    ...r.filter((e) => e.soft_deleted),
                  ]
                : r;
            })
          );
        },
        T = (e) => {
          let [t, n] = r.useState(!1),
            o = r.useMemo(() => e.map(c.W), [e]),
            u = (0, i.Wu)(
              [a.Z],
              () =>
                o.filter(
                  (e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [o],
            );
          return (
            r.useEffect(() => {
              !t &&
                u.length > 0 &&
                (n(!0),
                Promise.all(u.map((e) => s.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [t, u]),
            { loading: t }
          );
        },
        C = () => {
          let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
          return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, r) => {
              try {
                return t(!0), i(null), await s._d(e, n, r), !0;
              } catch (e) {
                i(e);
              } finally {
                t(!1);
              }
            },
          };
        },
        p = () => {
          let [e, t] = (0, o.Z)(s.AE),
            { loading: n, error: r } = t;
          return { error: r, submitting: n, archiveSubscriptionListing: e };
        },
        N = () => {
          let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
          return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: n, groupListingId: r, listingId: o } = e;
              try {
                return (
                  t(!0),
                  i(null),
                  await s.O0({
                    guildId: n,
                    groupListingId: r,
                    listingId: o,
                    data: { published: !0 },
                  }),
                  !0
                );
              } catch (e) {
                i(e);
              } finally {
                t(!1);
              }
            },
            clearError: () => i(null),
          };
        },
        O = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionSettings(e) : void 0,
          ),
        g = () => {
          let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: r.useCallback(async (e, n) => {
              t(!0), i(null);
              try {
                await s.W2(e, n);
              } catch (e) {
                i(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        m = () => {
          let [e, t] = r.useState(!1),
            [n, i] = r.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: r.useCallback(async (e) => {
              t(!0), i(null);
              try {
                await s.Qb(e);
              } catch (e) {
                i(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        R = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionTrial(e) : null,
          );
    },
    697227: function (e, t, n) {
      n.d(t, {
        V: function () {
          return u;
        },
        W: function () {
          return o;
        },
      });
      var r = n(512722),
        i = n.n(r);
      function o(e) {
        let t = e.items;
        return (
          i()(
            1 === t.length,
            "more than 1 subscription item for role subscription",
          ),
          t[0].planId
        );
      }
      function u(e) {
        var t;
        let n =
          null == e
            ? void 0
            : null === (t = e.renewalMutations) || void 0 === t
              ? void 0
              : t.items;
        if (null != n)
          return (
            i()(
              n.length <= 1,
              "more than 1 renewal mutation for role subscription",
            ),
            null == n ? void 0 : n[0].planId
          );
      }
    },
    14263: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(470079),
        i = n(442837),
        o = n(480608),
        u = n(243730);
      let l = {};
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, i.e7)([u.Z], () => u.Z.getRoleMemberCount(e));
        return (
          r.useEffect(() => {
            if (null == e) return;
            let n = l[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((l[e] = Date.now()), o.E(e));
          }, [e, t]),
          n
        );
      }
    },
    358555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        o = n.n(i),
        u = n(442837),
        l = n(481060),
        s = n(666188),
        a = n(372769),
        c = n(523751),
        d = n(623624),
        _ = n(290034),
        E = n(271383),
        f = n(594174),
        I = n(267642),
        S = n(981631),
        T = n(689938),
        C = n(427542);
      function p(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: i } = e,
          o = (0, u.e7)([f.default, E.ZP], () => {
            let e = f.default.getCurrentUser();
            return E.ZP.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: a } = t;
        if (0 === a && s === S.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              o &&
                !i &&
                (0, d.f)({
                  guildId: t.id,
                  location: {
                    section: S.jXE.GUILD_HEADER,
                    object: S.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          p =
            s === S.Eu4.NONE
              ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER
              : I.nW(s),
          N = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", { className: C.tierTooltipTitle, children: p }),
              (0, r.jsx)("div", {
                children:
                  T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: a },
                  ),
              }),
            ],
          });
        return (0, r.jsx)("div", {
          className: C.guildIconContainer,
          children: (0, r.jsx)(l.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != p ? p : "",
            children: (e) =>
              (0, r.jsx)(l.Clickable, {
                ...e,
                className: C.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, r.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: n
                    ? C.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    n && s !== S.Eu4.TIER_3
                      ? C.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function N(e) {
        let { guild: t, disableColor: n, disableBoostClick: i } = e;
        return (0, s.Z)(t)
          ? (0, r.jsx)("div", {
              className: C.guildIconV2Container,
              children: (0, r.jsx)(c.Z, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: o()(C.guildBadge, { [C.disableColor]: n }),
                disableBoostClick: i,
              }),
            })
          : (0, r.jsx)("div", {
              className: C.guildIconContainer,
              children: (0, r.jsx)(a.Z, {
                guild: t,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: l.Tooltip.Colors.PRIMARY,
                className: o()(C.guildBadge, { [C.disableColor]: n }),
              }),
            });
      }
      function O(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: i } = e;
        return (0, s.Z)(t)
          ? (0, r.jsx)(N, { guild: t, disableColor: !1, disableBoostClick: i })
          : t.hasFeature(S.oNc.VERIFIED) || t.hasFeature(S.oNc.PARTNERED)
            ? (0, r.jsx)(N, { guild: t, disableColor: !n })
            : (0, r.jsx)(p, {
                guild: t,
                isBannerVisible: n,
                disableBoostClick: i,
              });
      }
    },
    889695: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return R;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var r = n(735250),
        i = n(470079),
        o = n(658722),
        u = n.n(o),
        l = n(392711),
        s = n.n(l),
        a = n(149765),
        c = n(442837),
        d = n(481060),
        _ = n(271383),
        E = n(430824),
        f = n(594174),
        I = n(700785),
        S = n(709054),
        T = n(962086),
        C = n(160404),
        p = n(225675),
        N = n(981631),
        O = n(689938),
        g = n(679537);
      function m(e) {
        var t;
        return (0, r.jsx)("span", {
          style: {
            color:
              null !== (t = e.colorString) && void 0 !== t ? t : "currentColor",
          },
          children: e.name,
        });
      }
      function R(e) {
        let { guildId: t } = e,
          n = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
          o = (0, c.e7)([E.Z], () => E.Z.getGuild(t)),
          l = (0, c.e7)([E.Z], () => E.Z.getRoles(t)),
          { impersonateType: R, viewingRoles: h } = (0, c.cj)([C.Z], () => ({
            impersonateType: C.Z.getImpersonateType(t),
            viewingRoles: C.Z.getViewingRoles(t),
          })),
          A = R === p.z.SERVER_SHOP,
          M = (0, c.e7)([_.ZP], () =>
            null != n ? _.ZP.getTrueMember(t, n.id) : null,
          ),
          [L, P] = (0, d.useMultiSelect)(null == h ? [] : S.default.keys(h)),
          D = i.useRef(o);
        i.useEffect(() => {
          let e = {},
            t = D.current;
          if (null != t && null != R) {
            for (let t of L) {
              let n = l[t];
              null != n && (e[t] = n);
            }
            (0, T.Zm)(t.id, { type: R, roles: e });
          }
        }, [L, R, l]);
        let U =
            null != o && null != n && null != M
              ? s()(l)
                  .filter((e) => -1 !== M.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          v = i.useMemo(
            () =>
              null != o && null != n
                ? Object.values(l)
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
                        (null == U ? void 0 : U.id) === e.id ||
                        I.r6(o, n.id, U, e),
                    )
                : [],
            [o, n, A, U, l],
          );
        if (null == n || null == o || null == M) return null;
        let b = {};
        return (M.roles.forEach((e) => {
          let t = l[e];
          null != t && (b[t.id] = t);
        }),
        a.e$(
          I.I0({ forceRoles: b, context: o }),
          a.$e(N.Plq.MANAGE_GUILD, N.Plq.MANAGE_ROLES),
        ) || o.isOwner(n.id))
          ? (0, r.jsx)("div", {
              className: g.container,
              children: (0, r.jsx)(d.Combobox, {
                placeholder: O.Z.Messages.SEARCH_ROLES,
                value: L,
                onChange: P,
                autoFocus: !0,
                children: (e) => {
                  let t = v.reduce(
                      (t, n) => (
                        u()(e.toLowerCase(), n.name.toLowerCase()) &&
                          t.push(
                            (0, r.jsxs)(
                              d.ComboboxItem,
                              {
                                value: n.id,
                                children: [
                                  (0, r.jsx)(d.ComboboxItem.Label, {
                                    children: m(n),
                                  }),
                                  (0, r.jsx)(d.ComboboxItem.Checkbox, {}),
                                ],
                              },
                              n.id,
                            ),
                          ),
                        t
                      ),
                      [],
                    ),
                    n = l[o.getEveryoneRoleId()];
                  return (
                    null != n &&
                      t.push(
                        (0, r.jsxs)(
                          d.ComboboxItem,
                          {
                            value: n.id,
                            disabled: !0,
                            children: [
                              (0, r.jsx)(d.ComboboxItem.Label, {
                                children: m(n),
                              }),
                              (0, r.jsx)(d.ComboboxItem.Checkbox, {
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
          : (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              children: O.Z.Messages.VIEW_AS_ROLES_NO_ACCESS,
            });
      }
    },
    918658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
        d: function () {
          return v;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(120356),
        o = n.n(i),
        u = n(442837),
        l = n(692547),
        s = n(481060),
        a = n(549817),
        c = n(819553),
        d = n(17181),
        _ = n(303737),
        E = n(434404),
        f = n(703656),
        I = n(944486),
        S = n(914010),
        T = n(671533),
        C = n(259580),
        p = n(358085),
        N = n(962086),
        O = n(160404),
        g = n(889695),
        m = n(981631),
        R = n(176505),
        h = n(302463),
        A = n(293810),
        M = n(689938),
        L = n(489666);
      function P(e) {
        let { className: t, onClick: n, children: i } = e;
        return (0, r.jsx)(s.Button, {
          className: o()(L.button, t),
          innerClassName: L.buttonInner,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.WHITE,
          size: s.Button.Sizes.NONE,
          onClick: n,
          children: i,
        });
      }
      function D(e) {
        let { onClick: t } = e;
        return (0, r.jsx)(P, { onClick: t, children: M.Z.Messages.DISABLE });
      }
      function U() {
        let e = (0, u.e7)([S.Z], () => S.Z.getGuildId()),
          t = (0, u.e7)([I.Z], () => I.Z.getChannelId(e)),
          {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: o,
            isServerShopPreview: p,
          } = (0, u.cj)([O.Z], () => ({
            viewingRoles: null != e ? O.Z.getViewingRoles(e) : null,
            backNavigationSection: O.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && O.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && O.Z.isViewingServerShop(e),
          }));
        if (null == n || null == e) return null;
        let U = (function (e) {
            switch (e) {
              case m.pNK.INTEGRATIONS:
                return M.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
              case m.pNK.ROLE_SUBSCRIPTIONS:
                return M.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
              case m.pNK.ONBOARDING:
                return M.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
              default:
                return M.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
          })(i),
          v =
            i === m.pNK.ROLE_SUBSCRIPTIONS
              ? M.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT
              : M.Z.Messages.VIEWING_AS_ROLES_SELECT,
          b = t === R.oC.GUILD_ONBOARDING,
          Z = (t) => {
            let { backToSettings: n } = t;
            null != e &&
              (O.Z.isFullServerPreview(e) && (0, f.uL)(m.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, N.mL)(e),
              n && E.Z.open(e, i),
              i === m.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
          };
        return (0, r.jsxs)(s.Notice, {
          color: s.NoticeColors.BRAND,
          className: L.notice,
          children: [
            (0, r.jsxs)(P, {
              onClick: () => Z({ backToSettings: !0 }),
              className: L.backButton,
              children: [
                (0, r.jsx)(T.Z, {
                  width: 16,
                  height: 16,
                  direction: T.Z.Directions.LEFT,
                  className: L.backArrow,
                }),
                U,
              ],
            }),
            b && o
              ? (0, r.jsx)("div", {
                  className: L.noticeContents,
                  children: (0, r.jsx)("div", {
                    className: L.noticeText,
                    children: M.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION,
                  }),
                })
              : (0, r.jsxs)("div", {
                  className: L.noticeContents,
                  children: [
                    (0, r.jsx)("div", {
                      className: L.noticeText,
                      children: o
                        ? M.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format(
                            { numRoles: Object.keys(n).length },
                          )
                        : M.Z.Messages.VIEWING_AS_ROLES.format({
                            numRoles: Object.keys(n).length,
                          }),
                    }),
                    (0, r.jsx)(s.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, r.jsx)(g.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: t } = e;
                        return (0, r.jsxs)(P, {
                          onClick: t,
                          children: [
                            v,
                            (0, r.jsx)(C.Z, {
                              width: 16,
                              height: 16,
                              direction: C.Z.Directions.DOWN,
                              className: L.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    o &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: L.previewWarning,
                        text: M.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    p &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: L.previewWarning,
                        text: M.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format(
                          { maxTiers: A.fF, maxProducts: h.dD },
                        ),
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: l.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            o || i === m.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, r.jsx)(D, { onClick: () => Z({ backToSettings: !1 }) }),
          ],
        });
      }
      function v(e) {
        let { guildId: t } = e;
        return (0, u.e7)([O.Z], () => O.Z.isViewingRoles(t))
          ? (0, r.jsx)("div", {
              className: o()(L.settingsWrapper, {
                [L.windows]: (0, p.isWindows)(),
                [L.osx]: (0, p.isMac)(),
              }),
              children: (0, r.jsx)(U, {}),
            })
          : null;
      }
    },
    628238: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
      });
      var r = n(709054);
      function i(e) {
        return !(e < r.default.extractTimestamp("1088216706570268682")) && !0;
      }
    },
    963550: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(735250);
      n(470079);
      var i = n(930282);
      function o(e, t) {
        let { message: n } = e;
        return (0, r.jsx)(i.ZP, { message: n, content: t });
      }
    },
    845080: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(735250),
        i = n(470079),
        o = n(901461),
        u = n(464891);
      let l = i.memo(u.ZP);
      function s(e) {
        let {
          message: t,
          channel: n,
          author: i,
          compact: u,
          animateAvatar: s,
          guildId: a,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: _,
        } = e;
        return !(0, o.Z)(t) && (c || u)
          ? (0, r.jsx)(l, {
              message: t,
              channel: n,
              author: i,
              guildId: a,
              compact: u,
              animate: s,
              roleIcon: d,
              hideTimestamp: _,
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
      var r = n(442837),
        i = n(351402);
      function o() {
        let { localizedPricingPromo: e, hasError: t } = (0, r.cj)(
          [i.Z],
          () => ({
            localizedPricingPromo: i.Z.localizedPricingPromo,
            hasError: i.Z.localizedPricingPromoHasError,
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
      var r = n(990547),
        i = n(213609);
      function o(e, t) {
        (0, i.Z)({
          type: r.ImpressionTypes.VIEW,
          name: r.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
          return _;
        },
        vY: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(570140),
        i = n(821849),
        o = n(307643),
        u = n(981631);
      function l(e) {
        return {
          id: e.id,
          type: u.epS.SUBSCRIPTION,
          application_id: e.application_id,
          product_line: u.POd.APPLICATION,
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
        var t;
        return {
          id: e.id,
          sku: l(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function a(e) {
        for (let t of (r.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(l),
        }),
        r.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
        }),
        e))
          r.Z.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: t.id,
            subscriptionPlans: t.subscription_plans,
          });
      }
      async function c(e, t) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let i = await o.jz(e, t);
          return (
            r.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: i,
            }),
            a(null !== (n = i.subscription_listings) && void 0 !== n ? n : []),
            i
          );
        } catch (t) {
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
          let t = await o.GF(e);
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
            guildId: e,
            entitlements: t,
          });
        } catch (t) {
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
          var t;
          let n = await o.a_(e);
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let u =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          for (let t of u)
            t.subscription_plans[0].id === e &&
              (await i.GZ(t.id, void 0, void 0, !0));
          a(u);
        } catch (e) {}
      }
    },
    488915: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        u,
        l,
        s,
        a = n(512722),
        c = n.n(a),
        d = n(442837),
        _ = n(759174),
        E = n(570140),
        f = n(959546),
        I = n(55563);
      function S(e) {
        return "subscription_listing:".concat(e);
      }
      function T(e) {
        return "application:".concat(e);
      }
      function C(e) {
        return "plan:".concat(e);
      }
      function p(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function N(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let O = new _.h(
          (e) => [T(e.application_id), ...e.subscription_listings_ids.map(S)],
          (e) => e.id,
        ),
        g = new _.h(
          (e) => [T(e.application_id), C(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        m = new _.h(
          (e) => [
            p(e.applicationId, e.isValid(null, I.Z), e.guildId),
            N(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        R = {},
        h = {};
      function A(e) {
        var t;
        for (let n of (O.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            g.set(e.id, e);
          })(n);
      }
      class M extends (i = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = R[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return O.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = O.values(S(e));
          return (
            c()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return g.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return g.values(T(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = h[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = g.values(C(e));
          return c()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(p(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(N(t, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (l = "displayName") in (u = M)
          ? Object.defineProperty(u, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[l] = s),
        (t.Z = new M(E.Z, {
          LOGOUT: function () {
            O.clear(), g.clear(), m.clear(), (R = {}), (h = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            R[t] = 1;
            let r = O.get(n);
            if (null != r)
              for (let e of r.subscription_listings_ids) g.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (R[t] = 2), A(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            R[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            h[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (h[t] = 2),
              n.forEach((e) => {
                let t = f.Z.createFromServer(e);
                m.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            h[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            A(t);
          },
        }));
    },
    237583: function (e, t, n) {
      n(653041), n(47120);
      var r,
        i = n(735250),
        o = n(470079),
        u = n(120356),
        l = n.n(u),
        s = n(481060),
        a = n(598077),
        c = n(908860),
        d = n(579861);
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
      class E extends (r = o.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: r,
            } = this.props,
            i = [],
            o = e.length === t ? e.length : t - 1,
            u = 0;
          for (; u < o && u < e.length; ) {
            let t = u === e.length - 1;
            i.push(
              n(e[u] || null, t ? null : c.avatarMasked, "user-".concat(u), t),
            ),
              u++;
          }
          if (u < e.length) {
            let t = Math.min(e.length - u, 99);
            i.push(r("+".concat(t), c.moreUsers, "more-users", t));
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
            className: l()(e, c.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, t, n, r) => {
              let { onClick: o, size: u, guildId: _ } = this.props,
                E = e instanceof a.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, i.jsx)("div", { className: l()(c.emptyUser, t) }, n)
                : (0, i.jsx)(
                    s.Avatar,
                    {
                      tabIndex: 0,
                      src: E.getAvatarURL(_, (0, s.getAvatarSize)(u)),
                      size: u,
                      "aria-label": E.username,
                      className: l()(t, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != o ? o(e, E, this._ref) : null),
                    },
                    E.id,
                  );
            });
        }
      }
      _(E, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, i.jsx)("div", { className: t, children: e }, n);
        },
        size: s.AvatarSizes.SIZE_24,
      }),
        (t.Z = E);
    },
    91047: function (e, t, n) {
      n.d(t, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return u;
        },
        nm: function () {
          return l;
        },
        xS: function () {
          return s;
        },
      }),
        n(411104);
      var r = n(735250);
      n(470079);
      var i = n(239091);
      function o(e, t, o) {
        o.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("79107"),
                n.e("92453"),
                n.e("60222"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, r.jsx)(e, { ...n, user: t, channel: o });
            })
          : o.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("79107"),
                  n.e("59743"),
                  n.e("92453"),
                  n.e("22036"),
                  n.e("56826"),
                  n.e("95470"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, r.jsx)(e, {
                    ...n,
                    user: t,
                    channel: o,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != o.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("79107"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("34879"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, r.jsx)(e, {
                      ...n,
                      user: t,
                      channel: o,
                      guildId: o.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("50261"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, { ...n, user: t });
                });
      }
      function u(e, t) {
        let { user: o, channel: u, moderationAlertId: l, guildId: s, ...a } = t;
        if (
          (null == u ? void 0 : u.isGroupDM()) ||
          (null == u ? void 0 : u.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != s ? s : null == u ? void 0 : u.getGuildId();
        null != c &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("33685"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, r.jsx)(e, {
                ...t,
                user: o,
                channelId: null == u ? void 0 : u.id,
                guildId: c,
                moderationAlertId: l,
                ...a,
              });
          });
      }
      function l(e, t) {
        let {
          user: o,
          guildId: u,
          analyticsLocations: l,
          onCloseContextMenu: s,
          isViewOnly: a,
        } = t;
        (0, i.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              user: o,
              guildId: u,
              analyticsLocations: l,
              onCloseContextMenu: s,
              isViewOnly: a,
            });
        });
      }
      function s(e, t, o) {
        null != o &&
          (0, i.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    401653: function (e, t, n) {
      var r, i;
      n.d(t, {
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
    95930: function (e, t, n) {
      var r, i;
      n.d(t, {
        q: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (i[(i.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] =
          "GUILD_MEMBER_JOIN_OR_UPDATE");
    },
    41381: function (e, t, n) {
      var r, i;
      n.d(t, {
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
//# sourceMappingURL=5a58842022a63f126ba5.js.map
