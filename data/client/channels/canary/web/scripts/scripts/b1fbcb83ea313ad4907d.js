"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64671"],
  {
    774078: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(718922),
        i = t(55935),
        o = t(745735);
      function l(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          t = arguments.length > 2 ? arguments[2] : void 0,
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          u = (0, i.TD)(Date.now(), e),
          s = (0, r.Z)();
        return (
          (0, o.Z)(
            () => {
              if (
                (0 !== u.days ||
                  0 !== u.hours ||
                  0 !== u.minutes ||
                  0 !== u.seconds) &&
                !l
              )
                s(), null == t || t();
            },
            l ? null : n,
          ),
          u
        );
      }
    },
    745735: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(470079),
        i = t(512722),
        o = t.n(i);
      function l(e, n) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, r.useEffect)(() => {
            if (null === n) return;
            let e = setInterval(function () {
              o()(null != t.current, "Missing callback"), t.current();
            }, n);
            return () => clearInterval(e);
          }, [n]);
      }
    },
    935369: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(479531),
        o = t(689938);
      function l(e) {
        let [n, t] = r.useState(!1),
          [l, u] = r.useState(null);
        return [
          r.useCallback(
            async function () {
              for (var n = arguments.length, r = Array(n), l = 0; l < n; l++)
                r[l] = arguments[l];
              try {
                return u(null), t(!0), await e(...r);
              } catch (e) {
                e.message !== o.Z.Messages.MFA_V2_CANCELED &&
                  u(e instanceof i.Z ? e : new i.Z(e));
              } finally {
                t(!1);
              }
            },
            [e],
          ),
          { loading: n, error: l },
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
        o = t(442837),
        l = t(607070);
      function u(e, n, t) {
        let u = (0, o.e7)([l.Z], () => l.Z.keyboardModeEnabled),
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
        o = t(594174),
        l = t(933557),
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
            embeddedActivitiesCount: f,
            isSubscriptionGated: E,
            needSubscriptionToAccess: I,
          } = e,
          S = (0, l.F6)(t, o.default, i.Z);
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
            let T = [
              s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
                channelName: t.name,
              }),
            ];
            if (
              (d > 0 &&
                T.push(
                  s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format(
                    { mentionCount: d },
                  ),
                ),
              c && T.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD),
              null != _)
            ) {
              let e = t.userLimit;
              null != e && e > 0
                ? T.push(
                    s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
                      userCount: _,
                      limit: e,
                    }),
                  )
                : T.push(
                    s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format(
                      { userCount: _ },
                    ),
                  );
            }
            null != f &&
              f > 0 &&
              T.push(
                s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format(
                  { activitiesCount: f },
                ),
              );
            let g = a({ isSubscriptionGated: E, needSubscriptionToAccess: I });
            return null != g && T.push(g), T.join(", ");
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
        let p = [n.format({ channelName: S, mentionCount: d })],
          C = a({ isSubscriptionGated: E, needSubscriptionToAccess: I });
        return null != C && p.push(C), p.join(", ");
      }
    },
    17079: function (e, n, t) {
      t.d(n, {
        T: function () {
          return o;
        },
      });
      var r = t(570140),
        i = t(155414);
      async function o(e, n) {
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
          return l;
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
        l,
        u = t(689938);
      function s(e) {
        return {
          4: u.Z.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
          2: u.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
          3: u.Z.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
          1: u.Z.Messages.GUILD_STORE_SORT_OPTION_NAME,
        }[e];
      }
      ((r = o || (o = {}))[(r.NAME = 1)] = "NAME"),
        (r[(r.PRICE_ASC = 2)] = "PRICE_ASC"),
        (r[(r.PRICE_DESC = 3)] = "PRICE_DESC"),
        (r[(r.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((i = l || (l = {}))[(i.SUBS_FIRST = 1)] = "SUBS_FIRST"),
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
        o = t(584825),
        l = t(17079),
        u = t(281320);
      function s(e, n) {
        let t = (0, i.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
          o = (0, i.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(e, n),
          );
        return (
          r.useEffect(() => {
            o === u.M.NOT_FETCHED && (0, l.T)(e, n);
          }, [e, o, n]),
          { loading: o === u.M.FETCHING, priceTiers: t }
        );
      }
      function a(e) {
        let {
          fetchSubscriptionsSettings: n,
          loading: t,
          error: i,
        } = (0, o.JH)();
        r.useEffect(() => {
          n(e);
        }, [n, e]);
        let l = (0, o.YB)(e);
        return {
          loaded: null != l && !t,
          subscriptionsSettings: l,
          loading: t,
          error: i,
        };
      }
    },
    155414: function (e, n, t) {
      t.d(n, {
        X: function () {
          return l;
        },
      });
      var r = t(544891),
        i = t(881052),
        o = t(981631);
      let l = async (e, n) => {
        try {
          return (
            await r.tn.get({
              url: o.ANM.PRICE_TIERS,
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
        o,
        l,
        u,
        s,
        a = t(442837),
        c = t(570140);
      let d = new Map(),
        _ = new Map();
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      class f extends (i = a.ZP.Store) {
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
        (u = "displayName") in (l = f)
          ? Object.defineProperty(l, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = s),
        (n.Z = new f(c.Z, {
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
        o = t(73346),
        l = t(834431);
      function u(e, n) {
        let { shouldAnimate: t = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = i.QK.useSetting(),
          s = (0, l.n)(),
          a = t && s && u;
        return r.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, o._W)(
              e.application_id,
              e.image_asset,
              n,
              a ? void 0 : "webp",
            );
        }, [n, e, a]);
      }
    },
    629481: function (e, n, t) {
      var r, i, o, l;
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
        ((o = r || (r = {})).GET_STARTED_CLICK = "get_started_click"),
        (o.DISMISS_FULL_PREVIEW = "dismiss_full_preview"),
        (o.DISMISS_TAB_PREVIEW = "dismiss_tab_preview"),
        (o.DISMISS_CHANNEL_ROW = "dismiss_channel_row"),
        ((l = i || (i = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (l.SHOP_HEADER_BUTTON = "shop_header_button");
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
        o = t(120356),
        l = t.n(o),
        u = t(481060),
        s = t(456692);
      function a(e) {
        let { alt: n, ...t } = e,
          [o, l] = i.useState(!0);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o &&
              (0, r.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: s.loader,
              }),
            (0, r.jsx)("img", { ...t, alt: n, onLoad: () => l(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: n,
          backgroundSrc: t,
          alt: i,
          aspectRatio: o,
          className: u,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, r.jsxs)("div", {
          className: l()(s.container, u),
          children: [
            (0, r.jsx)("img", { src: t, alt: i, className: s.backgroundImage }),
            (0, r.jsx)("div", { className: s.backgroundImageFilter }),
            (0, r.jsx)("div", {
              style: { aspectRatio: o },
              className: s.imageContainer,
              children: (0, r.jsx)(a, {
                src: n,
                alt: i,
                className: l()(s.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    479099: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
        f: function () {
          return m;
        },
      }),
        t(47120);
      var r,
        i,
        o = t(735250),
        l = t(470079),
        u = t(120356),
        s = t.n(u),
        a = t(91192),
        c = t(442837),
        d = t(481060),
        _ = t(239091),
        f = t(596454),
        E = t(607070),
        I = t(339085),
        S = t(695346),
        T = t(572004),
        g = t(689938),
        p = t(813778);
      function C(e) {
        let {
            tag: n,
            size: r = 1,
            disabled: i,
            className: u,
            onClick: C,
            onRemove: m,
            selected: N,
            ariaLabel: A,
          } = e,
          { name: h, emojiId: L, emojiName: O } = n,
          R = null != m,
          [v, M] = l.useState(!1),
          b = (0, c.e7)([I.ZP], () =>
            null != L ? I.ZP.getUsableCustomEmojiById(L) : null,
          ),
          D = R || null != C,
          U = (!R || !v) && (null != L || null != O),
          Z = 0 === r,
          P = l.useRef(null),
          y = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
          G = (e) => {
            let r = S.Sb.getSetting();
            T.wS &&
              r &&
              (0, _.jW)(e, async () => {
                let { default: e } = await t.e("29646").then(t.bind(t, 955116));
                return (t) => (0, o.jsx)(e, { ...t, tag: n });
              });
          },
          x = (0, o.jsxs)(o.Fragment, {
            children: [
              U
                ? (0, o.jsx)(f.Z, {
                    className: s()(p.emoji, { [p.small]: Z }),
                    emojiId: L,
                    emojiName: O,
                    animated: !!(null == b ? void 0 : b.animated),
                    size: "reaction",
                  })
                : null,
              v &&
                R &&
                (0, o.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, o.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: p.close,
                  }),
                }),
              (0, o.jsx)(d.Text, {
                variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: h,
              }),
            ],
          }),
          F = {
            key: n.id,
            className: s()(
              p.pill,
              {
                [p.disabled]: i,
                [p.clickable]: D,
                [p.small]: Z,
                [p.selected]: N,
              },
              u,
            ),
            onClick: (e) => {
              null == C || C(e),
                null == m || m(n),
                !y && null != P.current && P.current.blur();
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => R && M(!0),
            onMouseLeave: () => R && M(!1),
          },
          w = (0, a.JA)("forum-tag-".concat(n.id));
        return D
          ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: P,
              focusProps: { ringTarget: P },
              "aria-label":
                null != A
                  ? A
                  : g.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: h,
                    }),
              role: "button",
              "aria-pressed": N,
              ...F,
              children: x,
            })
          : (0, o.jsx)("div", { ...F, children: x });
      }
      function m(e) {
        let { tags: n, count: t, size: r = 1 } = e,
          i = 0 === r;
        return (0, o.jsx)(d.Tooltip, {
          "aria-label": g.Z.Messages.FORUM_TAGS,
          text: (0, o.jsx)(o.Fragment, {
            children: n.map((e) =>
              (0, o.jsx)(
                C,
                { tag: e, className: p.tooltipPill, size: C.Sizes.SMALL },
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
                children: ["+", t],
              }),
            }),
        });
      }
      ((i = r || (r = {}))[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (C.Sizes = r);
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
        o = t(581883),
        l = t(430824),
        u = t(496675),
        s = t(914010),
        a = t(594174),
        c = t(700785),
        d = t(709054),
        _ = t(533244),
        f = t(487419),
        E = t(676770);
      t(981631);
      function I(e) {
        let n = (0, i.e7)([l.Z, u.Z], () => {
            let n = l.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && r.Db(t, E.cv);
          }),
          t = (0, i.e7)([f.Z], () =>
            null != e ? f.Z.getGuildIncident(e) : null,
          ),
          o = null != t && (0, _.ur)(t);
        return {
          shouldShowIncidentActions: n,
          incidentData: t,
          isUnderLockdown: o,
        };
      }
      function S() {
        var e;
        let n = (function (e) {
            let n = a.default.getCurrentUser(),
              t = f.Z.getIncidentsByGuild();
            for (let i of d.default.keys(t).map((e) => l.Z.getGuild(e))) {
              if (null == i) continue;
              let o = t[i.id];
              if (
                !(
                  null == o ||
                  (!(0, _.i9)(o) && !(0, _.ur)(o)) ||
                  ((0, _.ur)(o) && i.id !== e)
                )
              ) {
                if (
                  r.Db(c.uB({ user: n, context: i, checkElevated: !1 }), E.cv)
                )
                  return i.id;
              }
            }
            return null;
          })(s.Z.getGuildId()),
          t = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
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
          return p;
        },
        Lg: function () {
          return g;
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
          return f;
        },
        _6: function () {
          return C;
        },
        aj: function () {
          return I;
        },
        dc: function () {
          return m;
        },
        fX: function () {
          return u.f;
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
          return l.q;
        },
        uE: function () {
          return E;
        },
      });
      var r,
        i,
        o = t(401653),
        l = t(95930),
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
        f = 1,
        E = 1,
        I = 260,
        S = 100,
        T = 1,
        g = 50,
        p = 20,
        C = 150,
        m = "automod-profile-quarantine-alert";
    },
    787824: function (e, n, t) {
      t.d(n, {
        C: function () {
          return function e(n) {
            return null == n
              ? n
              : Object.keys(n).reduce((t, i) => {
                  let o = (0, r.camelCase)(i);
                  return (
                    "object" != typeof n[i] || Array.isArray(n[i])
                      ? (t[o] = n[i])
                      : (t[o] = e(n[i])),
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
                  let o = (0, r.snakeCase)(i);
                  return (
                    "object" != typeof n[i] || Array.isArray(n[i])
                      ? (t[o] = n[i])
                      : (t[o] = e(n[i])),
                    (t[o] = n[i]),
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
        o = t(273504),
        l = t(689938);
      function u(e) {
        return {
          [o.jj.BLOCK_MESSAGE]: (e, n) =>
            new Promise((e) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("94005").then(t.bind(t, 144462));
                return (t) => {
                  var o;
                  return (0, r.jsx)(i, {
                    initialCustomMessage:
                      null !== (o = n.metadata.customMessage) && void 0 !== o
                        ? o
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
          [o.jj.FLAG_TO_CHANNEL]: (n, l) =>
            new Promise((u) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("74543").then(t.bind(t, 643611)),
                  s = n.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, r.jsx)(i, {
                    action: l,
                    isEdit: null != s,
                    triggerType: n.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (l.metadata.channelId = e),
                        n.exemptChannels.add(e),
                        u(l),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (u(null), t.onClose()),
                  });
              });
            }),
          [o.jj.USER_COMMUNICATION_DISABLED]: (e, n) =>
            new Promise((l) => {
              (0, i.openModalLazy)(async () => {
                let { default: i } = await t.e("78273").then(t.bind(t, 41767)),
                  u = e.actions.find(
                    (e) => e.type === o.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (t) =>
                  (0, r.jsx)(i, {
                    action: n,
                    isEdit: null != u,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (n.metadata.durationSeconds = e),
                        l(n),
                        t.onClose();
                    },
                    ...t,
                    onClose: () => (l(null), t.onClose()),
                  });
              });
            }),
        };
      }
      function s(e, n, o, l) {
        (0, i.openModalLazy)(async () => {
          let { default: i } = await t.e("37483").then(t.bind(t, 241046));
          return (t) =>
            (0, r.jsx)(i, {
              ...t,
              automodDecision: {
                messageId: e,
                messageContent: n,
                decisionId: o,
                channel: l,
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
            header: l.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: l.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: l.Z.Messages.CANCEL,
            ...n,
            children: (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              children:
                l.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY,
            }),
          }),
        );
      }
    },
    36459: function (e, n, t) {
      t.d(n, {
        $Y: function () {
          return N;
        },
        JK: function () {
          return p;
        },
        Je: function () {
          return C;
        },
        T9: function () {
          return L;
        },
        UE: function () {
          return h;
        },
        Xx: function () {
          return A;
        },
        mm: function () {
          return m;
        },
        qY: function () {
          return g;
        },
      }),
        t(47120);
      var r = t(544891),
        i = t(570140),
        o = t(367907),
        l = t(430824),
        u = t(496675),
        s = t(823379),
        a = t(709054),
        c = t(177862),
        d = t(787824),
        _ = t(226192),
        f = t(981631);
      function E(e) {
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
            actions: e.actions.filter(s.lm).map(E),
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
      function T(e) {
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
      async function g(e) {
        let n = I(e),
          t = await r.tn.post({
            url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: n,
          });
        return (0, d.C)(t.body);
      }
      async function p(e) {
        let n = I(e);
        return (
          delete n.id,
          T(
            (
              await r.tn.post({
                url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: n,
              })
            ).body,
          )
        );
      }
      async function C(e) {
        let n = I(e);
        return T(
          (
            await r.tn.patch({
              url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: n,
            })
          ).body,
        );
      }
      async function m(e, n) {
        return await r.tn.del({ url: f.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
      }
      async function N(e) {
        let n = await r.tn.get({ url: f.ANM.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(n.body) ? n.body.map(T) : [];
      }
      async function A(e, n, t) {
        if (!!u.Z.can(f.Plq.MANAGE_MESSAGES, n))
          await r.tn.post({
            url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: e, channel_id: n.id, alert_action_type: t },
          });
      }
      function h(e, n, t) {
        let i = l.Z.getGuild(e);
        if (null != i && !!u.Z.can(f.Plq.MANAGE_GUILD, i))
          (0, _.UV)(() => {
            (0, o.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              r.tn.post({ url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
              t();
          });
      }
      function L(e) {
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
        o = t(570140),
        l = t(673750),
        u = t(786761),
        s = t(592125),
        a = t(375954),
        c = t(709054),
        d = t(539573),
        _ = t(825829),
        f = t(981631);
      function E(e, n, t) {
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
        T = {},
        g = {},
        p = (e, n) => {
          let t = (0, l.hc)(e),
            r = {
              id: t,
              isBlockedEdit: (0, l.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, n),
            };
          (I[t] = r), S++;
        },
        C = (e) => I[e],
        m = (e) => {
          null != I[e] && delete I[e], S++;
        };
      function N(e) {
        let { messageData: n, errorResponseBody: t } = e;
        return p(n, t), !0;
      }
      function A(e) {
        var n;
        let { channelId: t, messages: r } = e,
          i =
            null === (n = s.Z.getChannel(t)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == i) return !1;
        let o = g[i],
          l = r.reduce((e, n) => {
            var t;
            return n.type === f.uaV.AUTO_MODERATION_ACTION &&
              (null === (t = n.embeds) || void 0 === t
                ? void 0
                : t.some((e) => {
                    let { type: n } = e;
                    return n === f.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === c.default.compare(e, n.id)
                ? n.id
                : void 0
              : e;
          }, o);
        return null != l && g[i] !== l && ((g[i] = l), !0);
      }
      class h extends (r = i.ZP.PersistedStore) {
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
            lastIncidentAlertMessage: g,
          };
        }
        getMessage(e) {
          var n;
          return null == e
            ? null
            : null !== (n = C(e)) && void 0 !== n
              ? n
              : null;
        }
        getMessagesVersion() {
          return S;
        }
        getMentionRaidDetected(e) {
          var n;
          return null !== (n = T[e]) && void 0 !== n ? n : null;
        }
        getLastIncidentAlertMessage(e) {
          var n;
          return null !== (n = g[e]) && void 0 !== n ? n : null;
        }
      }
      E(h, "displayName", "GuildAutomodMessageStore"),
        E(h, "persistKey", "GuildAutomodMessages"),
        (n.Z = new h(o.Z, {
          CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
          },
          LOAD_MESSAGES_SUCCESS: A,
          LOCAL_MESSAGES_LOADED: A,
          MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
            let r = (0, u.e5)(t);
            return !!(0, _.nY)(r) && !!(0, _.OP)(r) && ((g[n] = r.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: N,
          MESSAGE_EDIT_FAILED_AUTOMOD: N,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return m(n), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: n } = e;
            if (
              (null == n ? void 0 : n.body) == null ||
              n.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let t = n.body.id;
            if (null == t) return !1;
            m(t);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: n,
              decisionId: t,
              suspiciousMentionActivityUntil: r,
            } = e;
            return (
              (T[n] = {
                guildId: n,
                decisionId: t,
                suspiciousMentionActivityUntil: r,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: n } = e;
            return delete T[n], !0;
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
        o = t.n(i),
        l = t(297700),
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
        return (0, r.jsx)(l.Z, {
          className: o()(t, c[n]),
          size: s,
          children: (0, r.jsx)(u.Z, {
            tier: n,
            className: o()(i, a.boostedGuildIconGem, d[n]),
          }),
        });
      }
    },
    527379: function (e, n, t) {
      t.d(n, {
        Dr: function () {
          return E;
        },
        YO: function () {
          return _;
        },
        _X: function () {
          return I;
        },
        _o: function () {
          return f;
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
        o = t(703656),
        l = t(430824),
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
      function f(e, n) {
        let { continuationToken: t, ...i } = n;
        r.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: i,
        });
      }
      async function E(e, n) {
        await r.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: n,
        });
      }
      function I(e) {
        let n = (0, u.lv)(e),
          t = l.Z.getGuild(e);
        return (
          !!n &&
          null != t &&
          (t.hasFeature(a.oNc.COMMUNITY) ||
          t.hasFeature(a.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, o.uL)(a.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
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
          return l;
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
        o = t(824389);
      let l = async (e) => {
          r.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let n = await o.uV(e);
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
            let t = await o.p9(e, n);
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
        let i = await o.Je(e, n, t);
        return r.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: i }), i;
      }
      async function a(e, n) {
        return (
          await o.mh(e, n),
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
          return f;
        },
        r: function () {
          return I;
        },
        ue: function () {
          return E;
        },
      }),
        t(47120);
      var r = t(470079),
        i = t(442837);
      t(935369);
      var o = t(38618),
        l = t(160404),
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
            t = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            [l, u] = r.useState(!0);
          return (
            r.useEffect(() => {
              l &&
                (n === c.M.NOT_FETCHED ||
                  (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                t &&
                a.EB(e),
                u(!t);
            }, [e, t, n, l]),
            { listingsLoaded: n === c.M.FETCHED && !l }
          );
        },
        f = function (e, n) {
          let { requireCurrentGuild: t } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            l = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            u = (0, i.e7)([s.Z], () => s.Z.getGuildId());
          return (
            r.useEffect(() => {
              let r = c.Z.getGuildProductFetchState(n);
              if ((!t || u === e) && l && r === c.M.NOT_FETCHED)
                try {
                  a.cf(e, n);
                } catch (e) {}
            }, [e, n, l, u, t]),
            (0, i.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        E = function (e) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, i.e7)([c.Z, l.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != n ? n : !l.Z.isViewingServerShop(e),
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
        o = t(73346),
        l = t(981631);
      let u = async (e, n, t) => {
          let {
            priceTier: o,
            imageName: u,
            createNewRole: s,
            unlinkRole: a,
            ...c
          } = t;
          try {
            return (
              await r.tn.patch({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n),
                body: {
                  ...c,
                  image_name: u,
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
        s = async (e, n) => {
          try {
            await r.tn.del({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        a = async (e) => {
          try {
            return (await (0, o.Kb)({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e) }))
              .body.listings;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        c = async (e, n) => {
          try {
            return (
              await (0, o.Kb)({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n) })
            ).body;
          } catch (e) {
            throw new i.Hx(e);
          }
        },
        d = async (e) => {
          let { guildId: n, productId: t, attachmentId: o } = e;
          try {
            return (
              await r.tn.post({
                url: l.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, t, o),
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
        o,
        l,
        u,
        s,
        a = t(442837),
        c = t(759174),
        d = t(570140),
        _ = t(70956),
        f = t(709054);
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let E = {},
        I = {},
        S = {},
        T = 10 * _.Z.Millis.MINUTE;
      function g(e) {
        return "guild:".concat(e);
      }
      function p(e) {
        return "guild:".concat(e, ":published");
      }
      let C = new c.h(
          (e) => {
            let n = [g(e.guild_id)];
            return e.published && n.push(p(e.guild_id)), n;
          },
          (e) =>
            (function (e) {
              let n = f.default.extractTimestamp(e.id);
              return e.published ? -n : -n + 1e12;
            })(e),
        ),
        m = [];
      class N extends (i = a.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var n;
          return null !== (n = E[e]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(e) {
          return C.get(e);
        }
        getGuildProductsForGuild(e, n) {
          let { publishedOnly: t } = n;
          return null == e ? m : C.values(t ? p(e) : g(e));
        }
        getGuildProductFetchState(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : 0;
        }
        isGuildProductsCacheExpired(e) {
          var n;
          return Date.now() - (null !== (n = S[e]) && void 0 !== n ? n : 0) > T;
        }
      }
      (s = "GuildProductsStore"),
        (u = "displayName") in (l = N)
          ? Object.defineProperty(l, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = s),
        (n.Z = new N(d.Z, {
          CONNECTION_OPEN: function () {
            C.clear(), (E = {}), (I = {}), (S = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (E[n] = 1),
              [...C.values(g(n))].forEach((e) => {
                C.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (E[n] = 2),
              (S[n] = Date.now()),
              t.forEach((e) => {
                C.set(e.id, e), (I[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            E[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            C.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            C.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            C.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            I[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (I[n.id] = 2), C.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (I[n] = 2), 404 === t.status && C.delete(n);
          },
        }));
    },
    863663: function (e, n, t) {
      t.d(n, {
        NB: function () {
          return l;
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
        o = t(689938);
      let l = "_role";
      function u(e) {
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
        let { newRoleParams: n } = e;
        if (null != n && "" === n.name.trim()) {
          var t, i;
          return (
            (t = l),
            (i = o.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
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
            description: o,
            image: l,
            imageName: u,
            isImageChanged: s,
            newRoleParams: a,
            hasUnsavedAttachmentChanges: c,
          } = e,
          d = {};
        (null == t ? void 0 : t.name) !== r && "" !== r.trim() && (d.name = r),
          (null !== (n = null == t ? void 0 : t.description) && void 0 !== n
            ? n
            : "") !== o && (d.description = o),
          (null == t ? void 0 : t.price_tier) !== i &&
            null != i &&
            (d.priceTier = i),
          null != a && "" !== a.name.trim()
            ? (d.createNewRole = !0)
            : null === a && (d.unlinkRole = !0),
          l.startsWith("data:") &&
            (s || (null == t && (Object.keys(d).length > 0 || c))) &&
            ((d.image = l), (d.imageName = u));
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
          return l;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        o = t(302463);
      function l(e, n) {
        (0, i.openModalLazy)(
          async () => {
            let { default: i } = await t.e("73628").then(t.bind(t, 458961));
            return (t) => (0, r.jsx)(i, { guildId: e, productId: n, ...t });
          },
          { modalKey: o.Yz },
        );
      }
    },
    942833: function (e, n, t) {
      t.d(n, {
        C: function () {
          return l;
        },
        k: function () {
          return u;
        },
      });
      var r = t(470079),
        i = t(937615),
        o = t(689938);
      function l(e) {
        return r.useMemo(() => {
          if (null == e) return;
          let n = null != e.role_id,
            t = e.attachments_count > 0;
          if (n && t)
            return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
          if (n) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
          if (t) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
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
          return T;
        },
        m: function () {
          return S;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(481060),
        u = t(239091),
        s = t(166081),
        a = t(937615),
        c = t(942833),
        d = t(48691),
        _ = t(231338),
        f = t(689938),
        E = t(772103);
      function I(e) {
        let {
          showEditProduct: n,
          showUnpublishProduct: t,
          showCopyLink: i,
          showTestDownload: o,
          showDeleteProduct: u,
          showReportProduct: s,
          onEditProduct: a,
          onUnpublishProduct: c,
          onDeleteProduct: d,
          onCopyLink: _,
          onTestDownload: I,
          onReportProduct: S,
          closePopout: T,
          onSelect: g,
        } = e;
        return (0, r.jsx)("div", {
          className: E.menuContainer,
          children: (0, r.jsxs)(l.Menu, {
            navId: "guild-product-context",
            onClose: T,
            "aria-label": f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: g,
            children: [
              (0, r.jsxs)(l.MenuGroup, {
                children: [
                  n &&
                    (0, r.jsx)(l.MenuItem, {
                      id: "guild-product-edit",
                      label: f.Z.Messages.GUILD_PRODUCT_EDIT,
                      action: a,
                    }),
                  i &&
                    (0, r.jsx)(l.MenuItem, {
                      id: "guild-product-copy-link",
                      label: f.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                      icon: l.LinkIcon,
                      action: _,
                    }),
                  o &&
                    (0, r.jsx)(l.MenuItem, {
                      id: "guild-product-test-download",
                      label: f.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                      icon: l.DownloadIcon,
                      action: I,
                    }),
                ],
              }),
              (0, r.jsxs)(l.MenuGroup, {
                children: [
                  t &&
                    (0, r.jsx)(l.MenuItem, {
                      id: "guild-product-unpublish",
                      label: f.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                      action: c,
                    }),
                  u &&
                    (0, r.jsx)(l.MenuItem, {
                      id: "guild-product-delete",
                      label: f.Z.Messages.GUILD_PRODUCT_DELETE,
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, r.jsx)(l.MenuGroup, {
                children:
                  s &&
                  (0, r.jsx)(l.MenuItem, {
                    id: "guild-product-report",
                    label: f.Z.Messages.GUILD_PRODUCT_REPORT,
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
          showUnpublishProduct: o,
          showTestDownload: u,
          showCopyLink: s,
          showDeleteProduct: a,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: _,
          onDeleteProduct: S,
          onCopyProductLink: T,
          onTestDownload: g,
          onReportProduct: p,
        } = e;
        return (0, r.jsx)("div", {
          onClick: (e) => {
            e.stopPropagation();
          },
          children: (0, r.jsx)(l.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: l.Popout.Animation.FADE,
            renderPopout: (e) =>
              (0, r.jsx)(I, {
                ...e,
                guildId: t,
                productId: n.id,
                showEditProduct: i,
                showUnpublishProduct: o,
                showCopyLink: s,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: a,
                onEditProduct: d,
                onUnpublishProduct: _,
                onDeleteProduct: S,
                onCopyLink: T,
                onTestDownload: g,
                onReportProduct: p,
              }),
            children: (e, t) => {
              let { isShown: i } = t;
              return (0, r.jsx)(l.Clickable, {
                ...e,
                "aria-label":
                  f.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format(
                    { productName: n.name },
                  ),
                "aria-haspopup": "listbox",
                "aria-expanded": i,
                className: E.productActionMenuButton,
                children: (0, r.jsx)(l.MoreVerticalIcon, {
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
      function T(e) {
        let {
            product: n,
            guildId: t,
            onEditProduct: i,
            onUnpublishProduct: T,
            onDeleteProduct: g,
            onCopyProductLink: p,
            onTestDownload: C,
            disabled: m = !1,
          } = e,
          N = (0, s.U)(n, 600),
          A =
            null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0,
          h = (0, c.C)(n);
        return (0, r.jsxs)(l.ClickableContainer, {
          tag: "article",
          className: o()(E.productCardClickable, E.productCard, {
            [E.disabled]: m,
          }),
          onClick: m ? void 0 : i,
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
                  onUnpublishProduct: T,
                  onDeleteProduct: g,
                  onCopyLink: p,
                  onTestDownload: C,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": f.Z.Messages.GUILD_PRODUCT_EDIT_ARIA_LABEL.format({
            productName: n.name,
          }),
          children: [
            (0, r.jsx)("img", {
              alt: "",
              src: N,
              className: E.productThumbnail,
            }),
            (0, r.jsxs)("div", {
              className: E.productInfo,
              children: [
                (0, r.jsxs)("div", {
                  className: E.productInfoContent,
                  children: [
                    (0, r.jsx)(l.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: E.productName,
                      children: n.name,
                    }),
                    (0, r.jsx)(l.Spacer, { size: 8 }),
                    (0, r.jsxs)("div", {
                      className: E.productDetails,
                      children: [
                        (0, r.jsx)(l.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: A,
                        }),
                        null != h
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: E.dotSeparator,
                                }),
                                (0, r.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: h,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, r.jsx)(l.Spacer, { size: 16 }),
                    n.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {}),
                  ],
                }),
                !m &&
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
                    onUnpublishProduct: T,
                    onDeleteProduct: g,
                    onCopyProductLink: p,
                    onTestDownload: C,
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
        o = t(44315),
        l = t(377171),
        u = t(981631),
        s = t(689938),
        a = t(405013);
      function c(e) {
        let {
          label: n,
          backgroundColor: t = l.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: o,
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
            (0, r.jsx)(o, {
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
          iconColor: (0, o.Lq)(u.Ilk.PRIMARY_330),
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
        o = t(399606),
        l = t(38618),
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
            dontFetchWhileTrue: f,
          } = e,
          E = (0, o.e7)([l.Z], () => l.Z.isConnected()),
          I = (0, o.e7)([s.Z], () =>
            null != n
              ? s.Z.getSubscriptionGroupListingsForGuildFetchState(n)
              : s.M.FETCHED,
          ),
          S = i.useRef(c),
          T = i.useCallback(() => {
            if (null == n || !E || !0 === f) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (S.current || e === s.M.NOT_FETCHED) &&
              ((S.current = !1),
              u.FP(n, { includeSoftDeleted: d, countryCode: _ }));
          }, [E, n, d, _, f]),
          g = i.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
        return (0, r.jsx)(a.Provider, {
          value: { listingsLoaded: g, fetchGroupListingsForGuild: T },
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
          return l;
        },
        Q8: function () {
          return o;
        },
      });
      var r = t(373228),
        i = t(689938);
      let o = () => [
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          i.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        l = () => [
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
          return E;
        },
        vp: function () {
          return f;
        },
        y8: function () {
          return I;
        },
      });
      var r = t(367907),
        i = t(200876),
        o = t(430824),
        l = t(594174);
      t(709054), t(523361);
      var u = t(981631),
        s = t(689938);
      function a(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: l, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return l.format(u);
      }
      function c(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          } = e,
          { content: l, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: o,
          });
        return l.astFormat(u);
      }
      function d(e, n) {
        var t, r;
        let i = o.Z.getGuild(e),
          l =
            null !== (t = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== t
              ? t
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
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
            guildId: o,
            roleSubscriptionData: l,
          } = e,
          {
            guild: u,
            totalMonthsSubscribed: a,
            showWithDuration: c,
            isRenewal: _,
          } = d(o, l);
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
              tierName: null == l ? void 0 : l.tier_name,
              months: a,
            },
          }
        );
      }
      function f(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: r = u.dG4,
            roleSubscriptionOnClickHandler: i = u.dG4,
            guildId: o,
            roleSubscriptionData: l,
          } = e,
          {
            guild: a,
            totalMonthsSubscribed: c,
            showWithDuration: _,
            isRenewal: f,
          } = d(o, l),
          E = {
            guildName: null == a ? void 0 : a.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: t,
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
          };
        return (n = _
          ? f
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat(
                { ...E, months: c },
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat(
                { ...E, months: c },
              )
          : f
            ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(
                E,
              )
            : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(
                E,
              ));
      }
      function E(e) {
        return (0, i.l)(e);
      }
      function I(e, n, t, i) {
        var o;
        r.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (o = l.default.getCurrentUser()) || void 0 === o
                ? void 0
                : o.id,
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
            null === (t = l.default.getCurrentUser()) || void 0 === t
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
          return l;
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
        o = t(689938);
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
        let { interval: n, interval_count: t } = e;
        return (function (e) {
          switch (e) {
            case i.rV.DAY:
              return o.Z.Messages.DAY;
            case i.rV.MONTH:
              return o.Z.Messages.MONTH;
            case i.rV.YEAR:
              return o.Z.Messages.YEAR;
          }
        })(n).format({ count: t });
      }
      function s(e) {
        let { interval: n, interval_count: t } = e;
        switch (n) {
          case i.rV.DAY:
            if (t > 0 && t % 7 == 0)
              return o.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: t / 7,
              });
            return o.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
          case i.rV.MONTH:
            return o.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: t,
            });
          case i.rV.YEAR:
            return o.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
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
          return C;
        },
        JH: function () {
          return A;
        },
        QV: function () {
          return N;
        },
        YB: function () {
          return m;
        },
        _1: function () {
          return p;
        },
        _k: function () {
          return f;
        },
        jO: function () {
          return E;
        },
        oC: function () {
          return h;
        },
        qi: function () {
          return S;
        },
        r4: function () {
          return g;
        },
        sp: function () {
          return T;
        },
      }),
        t(47120),
        t(653041);
      var r = t(470079),
        i = t(442837),
        o = t(935369),
        l = t(38618);
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
              countryCode: o,
              dontFetchWhileTrue: u,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, i.e7)([l.Z], () => l.Z.isConnected()),
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
                s.FP(e, { includeSoftDeleted: t, countryCode: o }));
            }, [c, e, t, n, o, u]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
          );
        },
        f = function (e) {
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
        E = (e) =>
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
        T = (e) => {
          let [n, t] = r.useState(!1),
            o = r.useMemo(() => e.map(c.W), [e]),
            l = (0, i.Wu)(
              [a.Z],
              () =>
                o.filter(
                  (e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [o],
            );
          return (
            r.useEffect(() => {
              !n &&
                l.length > 0 &&
                (t(!0),
                Promise.all(l.map((e) => s.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  }));
            }, [n, l]),
            { loading: n }
          );
        },
        g = () => {
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
        p = () => {
          let [e, n] = (0, o.Z)(s.AE),
            { loading: t, error: r } = n;
          return { error: r, submitting: t, archiveSubscriptionListing: e };
        },
        C = () => {
          let [e, n] = r.useState(!1),
            [t, i] = r.useState(null);
          return {
            error: t,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: t, groupListingId: r, listingId: o } = e;
              try {
                return (
                  n(!0),
                  i(null),
                  await s.O0({
                    guildId: t,
                    groupListingId: r,
                    listingId: o,
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
        m = (e) =>
          (0, i.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionSettings(e) : void 0,
          ),
        N = () => {
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
          return G;
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
          return z;
        },
        PK: function () {
          return U;
        },
        R7: function () {
          return B;
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
          return b;
        },
        d9: function () {
          return Z;
        },
        mR: function () {
          return D;
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
        o = t.n(i),
        l = t(392711),
        u = t(772848),
        s = t(866442),
        a = t(731965),
        c = t(442837),
        d = t(80932),
        _ = t(749210),
        f = t(339085),
        E = t(73346),
        I = t(817460),
        S = t(423117),
        T = t(584825),
        g = t(289393),
        p = t(790285),
        C = t(303737),
        m = t(971792),
        N = t(22902),
        A = t(403474),
        h = t(944537),
        L = t(293810),
        O = t(981631),
        R = t(474936);
      function v(e, n, t) {
        let i = (0, h.n)((e) => e.setListing),
          o = r.useCallback(
            (r) => {
              i(e, (e) => {
                var i;
                let o =
                  null !== (i = null == e ? void 0 : e[n]) && void 0 !== i
                    ? i
                    : t;
                return Object.assign({}, e, {
                  [n]: "function" == typeof r ? r(o) : r,
                });
              });
            },
            [i, e, n, t],
          ),
          l = (0, h.n)((t) => {
            var r;
            return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
          });
        return [void 0 !== l ? l : t, o];
      }
      function M(e, n) {
        let t = (0, c.e7)([g.Z], () => g.Z.getSubscriptionListing(e));
        return r.useMemo(() => n(t), [t]);
      }
      function b(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n
            ? n
            : "";
        });
        return v(e, "name", n);
      }
      function D(e) {
        let n = M(e, (e) => {
          var n;
          return null == e
            ? void 0
            : null === (n = e.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return v(e, "priceTier", n);
      }
      function U(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return v(e, "description", n);
      }
      function Z(e, n) {
        let t = M(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, E._W)(e.application_id, e.image_asset, n);
        });
        return v(e, "image", t);
      }
      function P(e, n) {
        let t = (0, m.Z)(n, e);
        return v(
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
        let t = (0, m.Z)(n, e),
          i = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleColor;
          }),
          o = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleIcon;
          });
        return r.useMemo(() => {
          let e = { ...(null != t ? t : A.k) };
          if (void 0 !== o) {
            var n, r;
            (e.icon = null !== (n = o.icon) && void 0 !== n ? n : ""),
              (e.unicodeEmoji =
                null !== (r = o.unicodeEmoji) && void 0 !== r ? r : "");
          }
          return (
            void 0 !== i && ((e.color = i), (e.colorString = (0, s.Rf)(i))), e
          );
        }, [t, o, i]);
      }
      function G(e, n) {
        let t = (0, m.Z)(n, e);
        return v(
          e,
          "roleColor",
          r.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e
              ? e
              : O.p6O;
          }, [t]),
        );
      }
      function x(e, n) {
        let t = (0, m.Z)(n, e);
        return v(
          e,
          "channelAccessFormat",
          r.useMemo(
            () =>
              null == t
                ? h.I.SOME_CHANNELS_ACCESS
                : (0, p.MT)(t)
                  ? h.I.ALL_CHANNELS_ACCESS
                  : h.I.SOME_CHANNELS_ACCESS,
            [t],
          ),
        );
      }
      let F = [];
      function w(e) {
        let n = M(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(I.rC),
        );
        return v(e, "channelBenefits", n);
      }
      let j = [];
      function B(e) {
        let n = M(e, (e) =>
          null == e ? j : e.role_benefits.benefits.filter(I.lL),
        );
        return v(e, "intangibleBenefits", n);
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
        let t = (0, m.Z)(n, e),
          i = (0, c.Wu)([f.ZP], () => f.ZP.getGuildEmoji(n), [n]);
        return v(
          e,
          "tierEmojiIds",
          r.useMemo(() => (null == t ? H : k(i, t.id)), [i, t]),
        );
      }
      function V(e) {
        var n;
        let t = (0, T.oC)(e),
          { selectedOption: r } = (0, N.Z)(
            null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return v(e, "trialInterval", null != r ? r : null);
      }
      function Y(e) {
        var n;
        let t = (0, T.oC)(e);
        return v(
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
      function q(e) {
        let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [t] = v(e, "priceTier", void 0);
        return [
          r.useMemo(() => {
            var e, r, i, o, l;
            return {
              price:
                null !== (e = null != t ? t : null == n ? void 0 : n.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (r = null == n ? void 0 : n.currency) && void 0 !== r
                  ? r
                  : O.pKx.USD,
              interval:
                null !== (i = null == n ? void 0 : n.interval) && void 0 !== i
                  ? i
                  : R.rV.MONTH,
              interval_count:
                null !== (o = null == n ? void 0 : n.interval_count) &&
                void 0 !== o
                  ? o
                  : 1,
              id:
                null !== (l = null == n ? void 0 : n.id) && void 0 !== l
                  ? l
                  : "",
            };
          }, [n, t]),
        ];
      }
      function J(e) {
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
      async function X(e) {
        let { guildId: n, editStateId: t } = e,
          r = g.Z.getSubscriptionListing(t);
        o()(null != r, "listing doesnt exist");
        let i = r.role_id,
          u = r.id,
          s = h.n.getState().listings[t];
        o()(null != s, "edit state does not exist");
        let {
          roleColor: a,
          roleIcon: c,
          trialLimit: E,
          trialInterval: I,
          tierEmojiIds: T,
        } = s;
        (void 0 !== a || void 0 !== c) &&
          (await _.Z.updateRole(n, i, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let p = g.Z.getSubscriptionTrial(u);
        if (
          ((null != E || null != I || (null != p && null == I)) &&
            (await S.I1(n, u, { trial: I, max_num_active_trial_users: E })),
          void 0 !== T)
        ) {
          let e = k(f.ZP.getGuildEmoji(n), i),
            t = (0, l.difference)([...T], [...e]),
            r = (0, l.difference)([...e], [...T]),
            o = t
              .map((e) => f.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: [...e.roles, i],
                  });
              }),
            u = r
              .map((e) => f.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let t = e.roles.filter((e) => e !== i);
                return t.length > 0
                  ? (0, d.dv)({ guildId: n, emojiId: e.id, roles: t })
                  : (0, d.RE)(n, e.id);
              });
          await Promise.all([...o, ...u]);
        }
      }
      async function Q(e) {
        let {
            guildId: n,
            editStateId: t,
            groupListingId: r,
            onBeforeDispatchNewListing: i,
          } = e,
          l = h.n.getState().listings[t];
        o()(null != l, "edit state does not exist");
        let {
          name: u,
          description: s,
          channelBenefits: a,
          intangibleBenefits: c,
          priceTier: d,
          image: _,
          channelAccessFormat: f,
        } = l;
        o()(null != u, "no name provided"),
          o()(null != s, "no description provided"),
          o()(null != d, "no priceTier provided"),
          o()(null != _, "no image provided");
        let E = f === h.I.ALL_CHANNELS_ACCESS,
          I = r;
        null == I && (I = (await S.uw(n, {})).id),
          null != a && a.length > 0 && (await (0, C.r4)(n, a));
        let T = [...(null != a ? a : []), ...(null != c ? c : [])],
          g = (0, C.yL)(t, n);
        return S.dA({
          guildId: n,
          groupListingId: I,
          data: {
            can_access_all_channels: E,
            image: _,
            name: u,
            description: s,
            benefits: T,
            priceTier: d,
          },
          analyticsContext: g,
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
              _ = g.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), i(void 0), null != _))
                o()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var n;
                    let { guildId: t, editStateId: r, groupListingId: i } = e,
                      u = g.Z.getSubscriptionListing(r);
                    o()(null != u, "listing doesnt exist");
                    let s = h.n.getState().listings[r];
                    o()(null != s, "edit state does not exist");
                    let {
                        name: a,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: _,
                        priceTier: f,
                        image: E,
                        channelAccessFormat: T,
                      } = s,
                      p = {};
                    if (
                      (a !== u.name && (p.name = a),
                      c !== u.description && (p.description = c),
                      f !==
                        (null === (n = u.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (p.priceTier = f),
                      null != E && (p.image = E),
                      null != T &&
                        (p.can_access_all_channels =
                          T === h.I.ALL_CHANNELS_ACCESS),
                      null != d || null != _)
                    ) {
                      let e = u.role_benefits.benefits.filter(I.rC),
                        n = u.role_benefits.benefits.filter(I.lL),
                        t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                      p.benefits = t;
                    }
                    return (0, l.isEmpty)(p)
                      ? u
                      : S.O0({
                          guildId: t,
                          groupListingId: i,
                          listingId: r,
                          data: p,
                        });
                  })({ guildId: t, editStateId: d, groupListingId: u });
              else {
                var f, E;
                let e = await Q({
                  guildId: t,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: s,
                });
                (d = e.id),
                  (f = r),
                  (E = d),
                  (0, a.j)(() => {
                    h.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [E]: e.listings[f],
                        [f]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await X({ guildId: t, editStateId: d }), J(d), !0;
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
          i = (0, T._k)(e, t),
          o = (0, h.n)((e) => e.editStateIdsForGroup[n]),
          l = (0, h.n)((e) => e.setEditStateIdsForGroup),
          s = (0, h.n)((e) => e.setListing),
          a = r.useMemo(
            () => [
              ...i.map((e) => {
                let { id: n } = e;
                return n;
              }),
              ...(null != o ? o : []),
            ],
            [o, i],
          ),
          c = r.useCallback(() => {
            let e = (0, u.Z)();
            l(n, (n) => [...(null != n ? n : []), e]);
          }, [n, l]),
          d = r.useCallback(
            (e) => {
              let t = (0, u.Z)();
              return (
                l(n, (e) => [...(null != e ? e : []), t]),
                e.listings.forEach((n) => {
                  s(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: L.Qs.CHANNEL,
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
            [n, l, s],
          );
        return {
          editStateIds: a,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: r.useCallback(
            (e) => {
              l(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, l],
          ),
        };
      }
    },
    697227: function (e, n, t) {
      t.d(n, {
        V: function () {
          return l;
        },
        W: function () {
          return o;
        },
      });
      var r = t(512722),
        i = t.n(r);
      function o(e) {
        let n = e.items;
        return (
          i()(
            1 === n.length,
            "more than 1 subscription item for role subscription",
          ),
          n[0].planId
        );
      }
      function l(e) {
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
        o = t(480608),
        l = t(243730);
      let u = {};
      function s(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (0, i.e7)([l.Z], () => l.Z.getRoleMemberCount(e));
        return (
          r.useEffect(() => {
            if (null == e) return;
            let t = u[e];
            !(null != t && n > 0 && Date.now() - t < n) &&
              ((u[e] = Date.now()), o.E(e));
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
        o = t(339085),
        l = t(889564);
      let u = [];
      function s(e) {
        let n = (0, i.e7)([o.ZP], () => o.ZP.getGuildEmoji(e), [e]);
        return r.useMemo(
          () => (null == n ? u : n.filter((n) => (0, l.Kt)(n, e))),
          [n, e],
        );
      }
    },
    971792: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(442837),
        i = t(430824),
        o = t(584825);
      function l(e, n) {
        let t = (0, o.jO)(n);
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
        o = t(293810),
        l = t(474936),
        u = t(689938);
      function s(e) {
        return r.useMemo(() => {
          var n;
          let t = o.DN.map((e) => ({
              value: e,
              label:
                e.interval === l.rV.DAY && 7 === e.interval_count
                  ? u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format(
                      { defaultLimit: (0, i.iG)(e) },
                    )
                  : (0, i.iG)(e),
              isDefault: e.interval === l.rV.DAY && 7 === e.interval_count,
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
          return o;
        },
      });
      var r = t(442837),
        i = t(592125);
      function o(e) {
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
        o = t.n(i),
        l = t(596454),
        u = t(377171),
        s = t(403910),
        a = t(549631),
        c = t(873198);
      function d(e) {
        var n;
        let { guildId: t, emojiId: i, emojiName: d, className: _ } = e,
          f = (0, s.Z)(t, i);
        return null != f || null != d
          ? (0, r.jsx)(l.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != d ? d : null == f ? void 0 : f.name,
              animated:
                null !== (n = null == f ? void 0 : f.animated) &&
                void 0 !== n &&
                n,
              className: o()(c.emojiIcon, _),
            })
          : (0, r.jsx)(a.Z, {
              className: o()(c.emojiIcon, _),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        o = t(201895),
        l = t(471445),
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
        let u = t.isMediaChannel() ? i.ImageIcon : (0, l.Th)(t.type);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.HiddenVisually, {
              children: (0, o.ZP)({ channel: t }),
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
      function f(e) {
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
          return g;
        },
      });
      var r = t(735250),
        i = t(470079),
        o = t(120356),
        l = t.n(o),
        u = t(442837),
        s = t(481060),
        a = t(518738),
        c = t(786761),
        d = t(3148),
        _ = t(753206),
        f = t(594174),
        E = t(5192),
        I = t(981631),
        S = t(689938),
        T = t(391317);
      function g(e) {
        var n;
        let {
            guildId: t,
            role: o,
            theme: g,
            content: p = S.Z.Messages
              .GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
            className: C,
          } = e,
          m = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
          N = E.ZP.useName(t, null, m),
          A = (0, a.Kz)(o),
          h = i.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: p,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: m,
                }),
                state: I.yb.SENT,
                id: "0",
              }),
            [m, p],
          ),
          L = {
            nick: N,
            colorString:
              null !== (n = o.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, r.jsx)(s.ThemeProvider, {
          theme: g,
          children: (e) =>
            (0, r.jsx)("div", {
              className: l()(e, T.container, C),
              children: (0, r.jsx)(_.Z, {
                hideTimestamp: !0,
                author: L,
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
          return m;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(442837),
        u = t(481060),
        s = t(666188),
        a = t(372769),
        c = t(523751),
        d = t(623624),
        _ = t(290034),
        f = t(271383),
        E = t(594174),
        I = t(267642),
        S = t(981631),
        T = t(689938),
        g = t(427542);
      function p(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: i } = e,
          o = (0, l.e7)([E.default, f.ZP], () => {
            let e = E.default.getCurrentUser();
            return f.ZP.isMember(n.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: s, premiumSubscriberCount: a } = n;
        if (0 === a && s === S.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              o &&
                !i &&
                (0, d.f)({
                  guildId: n.id,
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
          C = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", { className: g.tierTooltipTitle, children: p }),
              (0, r.jsx)("div", {
                children:
                  T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: a },
                  ),
              }),
            ],
          });
        return (0, r.jsx)("div", {
          className: g.guildIconContainer,
          children: (0, r.jsx)(u.Tooltip, {
            text: C,
            position: "bottom",
            "aria-label": null != p ? p : "",
            children: (e) =>
              (0, r.jsx)(u.Clickable, {
                ...e,
                className: g.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, r.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: t
                    ? g.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    t && s !== S.Eu4.TIER_3
                      ? g.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function C(e) {
        let { guild: n, disableColor: t, disableBoostClick: i } = e;
        return (0, s.Z)(n)
          ? (0, r.jsx)("div", {
              className: g.guildIconV2Container,
              children: (0, r.jsx)(c.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: o()(g.guildBadge, { [g.disableColor]: t }),
                disableBoostClick: i,
              }),
            })
          : (0, r.jsx)("div", {
              className: g.guildIconContainer,
              children: (0, r.jsx)(a.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: o()(g.guildBadge, { [g.disableColor]: t }),
              }),
            });
      }
      function m(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: i } = e;
        return (0, s.Z)(n)
          ? (0, r.jsx)(C, { guild: n, disableColor: !1, disableBoostClick: i })
          : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
            ? (0, r.jsx)(C, { guild: n, disableColor: !t })
            : (0, r.jsx)(p, {
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
        o = t(658722),
        l = t.n(o),
        u = t(392711),
        s = t.n(u),
        a = t(149765),
        c = t(442837),
        d = t(481060),
        _ = t(271383),
        f = t(430824),
        E = t(594174),
        I = t(700785),
        S = t(709054),
        T = t(962086),
        g = t(160404),
        p = t(225675),
        C = t(981631),
        m = t(689938),
        N = t(679537);
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
          t = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
          o = (0, c.e7)([f.Z], () => f.Z.getGuild(n)),
          u = (0, c.e7)([f.Z], () => f.Z.getRoles(n)),
          { impersonateType: h, viewingRoles: L } = (0, c.cj)([g.Z], () => ({
            impersonateType: g.Z.getImpersonateType(n),
            viewingRoles: g.Z.getViewingRoles(n),
          })),
          O = h === p.z.SERVER_SHOP,
          R = (0, c.e7)([_.ZP], () =>
            null != t ? _.ZP.getTrueMember(n, t.id) : null,
          ),
          [v, M] = (0, d.useMultiSelect)(null == L ? [] : S.default.keys(L)),
          b = i.useRef(o);
        i.useEffect(() => {
          let e = {},
            n = b.current;
          if (null != n && null != h) {
            for (let n of v) {
              let t = u[n];
              null != t && (e[n] = t);
            }
            (0, T.Zm)(n.id, { type: h, roles: e });
          }
        }, [v, h, u]);
        let D =
            null != o && null != t && null != R
              ? s()(u)
                  .filter((e) => -1 !== R.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          U = i.useMemo(
            () =>
              null != o && null != t
                ? Object.values(u)
                    .filter((e) => e.id !== o.id)
                    .filter((e) => {
                      var n;
                      return (
                        !O ||
                        (null === (n = e.tags) || void 0 === n
                          ? void 0
                          : n.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == D ? void 0 : D.id) === e.id ||
                        I.r6(o, t.id, D, e),
                    )
                : [],
            [o, t, O, D, u],
          );
        if (null == t || null == o || null == R) return null;
        let Z = {};
        return (R.roles.forEach((e) => {
          let n = u[e];
          null != n && (Z[n.id] = n);
        }),
        a.e$(
          I.I0({ forceRoles: Z, context: o }),
          a.$e(C.Plq.MANAGE_GUILD, C.Plq.MANAGE_ROLES),
        ) || o.isOwner(t.id))
          ? (0, r.jsx)("div", {
              className: N.container,
              children: (0, r.jsx)(d.Combobox, {
                placeholder: m.Z.Messages.SEARCH_ROLES,
                value: v,
                onChange: M,
                autoFocus: !0,
                children: (e) => {
                  let n = U.reduce(
                      (n, t) => (
                        l()(e.toLowerCase(), t.name.toLowerCase()) &&
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
                    t = u[o.getEveryoneRoleId()];
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
              children: m.Z.Messages.VIEW_AS_ROLES_NO_ACCESS,
            });
      }
    },
    918658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return D;
        },
        d: function () {
          return U;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(442837),
        u = t(692547),
        s = t(481060),
        a = t(549817),
        c = t(819553),
        d = t(17181),
        _ = t(303737),
        f = t(434404),
        E = t(703656),
        I = t(944486),
        S = t(914010),
        T = t(671533),
        g = t(259580),
        p = t(358085),
        C = t(962086),
        m = t(160404),
        N = t(889695),
        A = t(981631),
        h = t(176505),
        L = t(302463),
        O = t(293810),
        R = t(689938),
        v = t(489666);
      function M(e) {
        let { className: n, onClick: t, children: i } = e;
        return (0, r.jsx)(s.Button, {
          className: o()(v.button, n),
          innerClassName: v.buttonInner,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.WHITE,
          size: s.Button.Sizes.NONE,
          onClick: t,
          children: i,
        });
      }
      function b(e) {
        let { onClick: n } = e;
        return (0, r.jsx)(M, { onClick: n, children: R.Z.Messages.DISABLE });
      }
      function D() {
        let e = (0, l.e7)([S.Z], () => S.Z.getGuildId()),
          n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: i,
            isFullServerPreview: o,
            isServerShopPreview: p,
          } = (0, l.cj)([m.Z], () => ({
            viewingRoles: null != e ? m.Z.getViewingRoles(e) : null,
            backNavigationSection: m.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && m.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && m.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let D = (function (e) {
            switch (e) {
              case A.pNK.INTEGRATIONS:
                return R.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
              case A.pNK.ROLE_SUBSCRIPTIONS:
                return R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
              case A.pNK.ONBOARDING:
                return R.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
              default:
                return R.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
          })(i),
          U =
            i === A.pNK.ROLE_SUBSCRIPTIONS
              ? R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT
              : R.Z.Messages.VIEWING_AS_ROLES_SELECT,
          Z = n === h.oC.GUILD_ONBOARDING,
          P = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (m.Z.isFullServerPreview(e) && (0, E.uL)(A.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, C.mL)(e),
              t && f.Z.open(e, i),
              i === A.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
          };
        return (0, r.jsxs)(s.Notice, {
          color: s.NoticeColors.BRAND,
          className: v.notice,
          children: [
            (0, r.jsxs)(M, {
              onClick: () => P({ backToSettings: !0 }),
              className: v.backButton,
              children: [
                (0, r.jsx)(T.Z, {
                  width: 16,
                  height: 16,
                  direction: T.Z.Directions.LEFT,
                  className: v.backArrow,
                }),
                D,
              ],
            }),
            Z && o
              ? (0, r.jsx)("div", {
                  className: v.noticeContents,
                  children: (0, r.jsx)("div", {
                    className: v.noticeText,
                    children: R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION,
                  }),
                })
              : (0, r.jsxs)("div", {
                  className: v.noticeContents,
                  children: [
                    (0, r.jsx)("div", {
                      className: v.noticeText,
                      children: o
                        ? R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format(
                            { numRoles: Object.keys(t).length },
                          )
                        : R.Z.Messages.VIEWING_AS_ROLES.format({
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, r.jsx)(s.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, r.jsx)(N.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, r.jsxs)(M, {
                          onClick: n,
                          children: [
                            U,
                            (0, r.jsx)(g.Z, {
                              width: 16,
                              height: 16,
                              direction: g.Z.Directions.DOWN,
                              className: v.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    o &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: v.previewWarning,
                        text: R.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    p &&
                      (0, r.jsx)(s.TooltipContainer, {
                        className: v.previewWarning,
                        text: R.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format(
                          { maxTiers: O.fF, maxProducts: L.dD },
                        ),
                        children: (0, r.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            o || i === A.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, r.jsx)(b, { onClick: () => P({ backToSettings: !1 }) }),
          ],
        });
      }
      function U(e) {
        let { guildId: n } = e;
        return (0, l.e7)([m.Z], () => m.Z.isViewingRoles(n))
          ? (0, r.jsx)("div", {
              className: o()(v.settingsWrapper, {
                [v.windows]: (0, p.isWindows)(),
                [v.osx]: (0, p.isMac)(),
              }),
              children: (0, r.jsx)(D, {}),
            })
          : null;
      }
    },
    690221: function (e, n, t) {
      var r = t(735250),
        i = t(470079),
        o = t(481060),
        l = t(703656),
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
          f = i.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === u.yXg.SPACE || e.charCode === u.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != t && (0, l.uL)(t),
                  null == a || a()),
                  null == c || c(e);
            },
            [t, c, a],
          ),
          E = i.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, l.uL)(t),
                  null == a || a();
            },
            [t, a],
          ),
          I = (0, r.jsx)("a", {
            ref: n,
            href: t,
            onClick: E,
            onKeyPress: f,
            ..._,
            children: s,
          });
        return (0, r.jsx)(o.FocusRing, { ...d, children: I });
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
        o = t(120356),
        l = t.n(o),
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
            compact: o,
            className: f,
            isGroupStart: E,
            hideSimpleEmbedContent: I = !0,
            disableInteraction: S,
          } = e,
          T = (0, u.A)(
            (null !== (n = t.editedTimestamp) && void 0 !== n
              ? n
              : t.timestamp
            ).valueOf(),
          ),
          { content: g } = (0, a.Z)(t, {
            hideSimpleEmbedContent: I,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, r.jsx)(s.Z, {
          compact: o,
          className: l()(f, {
            [_.message]: !0,
            [_.cozyMessage]: !o,
            [_.groupStart]: E,
          }),
          childrenHeader: (0, d.Z)({ ...e, channel: i, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, g),
          disableInteraction: S,
        });
      });
    },
    963550: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(930282);
      function o(e, n) {
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
        o = t(901461),
        l = t(464891);
      let u = i.memo(l.ZP);
      function s(e) {
        let {
          message: n,
          channel: t,
          author: i,
          compact: l,
          animateAvatar: s,
          guildId: a,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: _,
        } = e;
        return !(0, o.Z)(n) && (c || l)
          ? (0, r.jsx)(u, {
              message: n,
              channel: t,
              author: i,
              guildId: a,
              compact: l,
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
          return o;
        },
      });
      var r = t(442837),
        i = t(351402);
      function o() {
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
          return o;
        },
      });
      var r = t(990547),
        i = t(213609);
      function o(e, n) {
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
          return f;
        },
      }),
        t(47120);
      var r = t(570140),
        i = t(821849),
        o = t(307643),
        l = t(981631);
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
          let i = await o.jz(e, n);
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
          let n = await o.GF(e);
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
      async function f(e) {
        r.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var n;
          let t = await o.a_(e);
          r.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: t,
          });
          let l =
            null !== (n = t.subscription_listings) && void 0 !== n ? n : [];
          for (let n of l)
            n.subscription_plans[0].id === e &&
              (await i.GZ(n.id, void 0, void 0, !0));
          a(l);
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
        o,
        l,
        u,
        s,
        a = t(512722),
        c = t.n(a),
        d = t(442837),
        _ = t(759174),
        f = t(570140),
        E = t(959546),
        I = t(55563);
      function S(e) {
        return "subscription_listing:".concat(e);
      }
      function T(e) {
        return "application:".concat(e);
      }
      function g(e) {
        return "plan:".concat(e);
      }
      function p(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function C(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED");
      let m = new _.h(
          (e) => [T(e.application_id), ...e.subscription_listings_ids.map(S)],
          (e) => e.id,
        ),
        N = new _.h(
          (e) => [T(e.application_id), g(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        A = new _.h(
          (e) => [
            p(e.applicationId, e.isValid(null, I.Z), e.guildId),
            C(e.isValid(null, I.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        h = {},
        L = {};
      function O(e) {
        var n;
        for (let t of (m.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            N.set(e.id, e);
          })(t);
      }
      class R extends (i = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = h[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return m.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = m.values(S(e));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return N.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return N.values(T(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = L[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = N.values(g(e));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return A.values(p(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return A.values(C(n, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (u = "displayName") in (l = R)
          ? Object.defineProperty(l, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = s),
        (n.Z = new R(f.Z, {
          LOGOUT: function () {
            m.clear(), N.clear(), A.clear(), (h = {}), (L = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            h[n] = 1;
            let r = m.get(t);
            if (null != r)
              for (let e of r.subscription_listings_ids) N.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (h[n] = 2), O(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            h[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            L[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (L[n] = 2),
              t.forEach((e) => {
                let n = E.Z.createFromServer(e);
                A.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            L[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            O(n);
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
        o = t(480294),
        l = t(814443),
        u = t(428598),
        s = t(981631);
      function a() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.Z.needsRefresh()
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
        return u.Z.shouldFetch() && o.Z.hasConsented(s.pjP.PERSONALIZATION)
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
                      var n, t, r, i, o, l, u, s;
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
        o = t(442837),
        l = t(570140),
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
      function f() {
        r = new Map(
          _.userAffinities
            .filter((e) => !u.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class E extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((_.userAffinities = e.userAffinities),
              (_.lastFetched = e.lastFetched),
              f()),
            this.syncWith([u.Z], f);
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
      a(E, "displayName", "UserAffinitiesStoreV2"),
        a(E, "persistKey", "UserAffinitiesStoreV2"),
        (n.Z = new E(l.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (_.lastFetched = Date.now()), (c = !1), (_.userAffinities = n), f();
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
          return l;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(692547),
        o = t(313201);
      function l(e) {
        let { isSelected: n, ...t } = e,
          l = (0, o.Dt)();
        return (0, r.jsxs)("svg", {
          ...t,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(l, ")"),
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
        o = t(470079),
        l = t(120356),
        u = t.n(l),
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
      class f extends (r = o.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: n,
              renderUser: t = this.defaultRenderUser,
              renderMoreUsers: r,
            } = this.props,
            i = [],
            o = e.length === n ? e.length : n - 1,
            l = 0;
          for (; l < o && l < e.length; ) {
            let n = l === e.length - 1;
            i.push(
              t(e[l] || null, n ? null : c.avatarMasked, "user-".concat(l), n),
            ),
              l++;
          }
          if (l < e.length) {
            let n = Math.min(e.length - l, 99);
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
              let { onClick: o, size: l, guildId: _ } = this.props,
                f = e instanceof a.Z ? e : null != e ? e.user : null;
              return null == f
                ? (0, i.jsx)("div", { className: u()(c.emptyUser, n) }, t)
                : (0, i.jsx)(
                    s.Avatar,
                    {
                      tabIndex: 0,
                      src: f.getAvatarURL(_, (0, s.getAvatarSize)(l)),
                      size: l,
                      "aria-label": f.username,
                      className: u()(n, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != o ? o(e, f, this._ref) : null),
                    },
                    f.id,
                  );
            });
        }
      }
      _(f, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, n, t) {
          return (0, i.jsx)("div", { className: n, children: e }, t);
        },
        size: s.AvatarSizes.SIZE_24,
      }),
        (n.Z = f);
    },
    72006: function (e, n, t) {
      t.d(n, {
        FZ: function () {
          return D;
        },
        Hl: function () {
          return F;
        },
        NJ: function () {
          return P;
        },
        R8: function () {
          return G;
        },
        Sq: function () {
          return v;
        },
        Wg: function () {
          return x;
        },
        Zn: function () {
          return R;
        },
        c2: function () {
          return U;
        },
        eE: function () {
          return y;
        },
        iE: function () {
          return w;
        },
        iK: function () {
          return Z;
        },
        lv: function () {
          return M;
        },
        nR: function () {
          return b;
        },
        q0: function () {
          return o.a;
        },
        x0: function () {
          return L;
        },
        xb: function () {
          return j;
        },
        yd: function () {
          return O;
        },
      }),
        t(47120),
        t(653041);
      var r = t(371917),
        i = t(421520),
        o = t.n(i),
        l = t(563751),
        u = t.n(l),
        s = t(608382),
        a = t.n(s),
        c = t(722661),
        d = t.n(c),
        _ = t(225389),
        f = t.n(_),
        E = t(71716),
        I = t.n(E),
        S = t(869045),
        T = t.n(S),
        g = t(110599),
        p = t.n(g),
        C = t(801539),
        m = t.n(C),
        N = t(887868),
        A = t.n(N);
      function h(e, n, t, i) {
        let o = i.getCurrentContent(),
          l = null;
        null != e && (l = (o = o.createEntity(...e)).getLastCreatedEntityKey());
        let u = o.getFirstBlock(),
          s = new r.SelectionState({
            anchorKey: u.getKey(),
            anchorOffset: n,
            focusKey: u.getKey(),
            focusOffset: t,
          });
        return (
          (o = r.Modifier.applyEntity(o, s, l)),
          r.EditorState.set(i, { currentContent: o })
        );
      }
      function L(e, n, t, i) {
        let o, l;
        let s = n.getCurrentContent(),
          a = s.getFirstBlock(),
          c = a.getText();
        "number" == typeof t
          ? (t > c.length && (t = c.length),
            null != i && i > c.length && (i = c.length),
            (o = new r.SelectionState({
              anchorKey: a.getKey(),
              anchorOffset: t,
              focusKey: a.getKey(),
              focusOffset: null != i && 0 !== i ? i : t,
            })))
          : (o = n.getSelection());
        let d = n.getCurrentInlineStyle(),
          _ = u()(s, o);
        return (
          o.isCollapsed()
            ? ((s = r.Modifier.insertText(s, o, e, d, _)),
              (l = "insert-characters"))
            : ((s = r.Modifier.replaceText(s, o, e, d, _)),
              (l = "replace-characters")),
          r.EditorState.push(n, s, l)
        );
      }
      function O(e, n) {
        switch (e) {
          case "delete":
            return m()(n);
          case "delete-word":
            return f()(n);
          case "backspace":
            return p()(n);
          case "backspace-word":
            return d()(n);
          case "backspace-to-start-of-line":
            return a()(n);
          default:
            return n;
        }
      }
      function R(e, n) {
        switch (e) {
          case "transpose-characters":
            return A()(n);
          case "move-selection-to-start-of-block":
            return T()(n);
          case "move-selection-to-end-of-block":
            return I()(n);
          default:
            return n;
        }
      }
      function v(e) {
        return e.getCurrentContent().getFirstBlock().getText();
      }
      function M(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.getCurrentContent(),
          i = r.getFirstBlock(),
          o = i.getText(),
          l = [];
        return (
          i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, n) => {
              let t = r.getEntity(i.getEntityAt(e)).getType(),
                u = o.substring(e, n);
              l.push({ processed: !1, type: t, start: e, end: n, text: u });
            },
          ),
          e.forEach((e) => {
            let r = !1;
            if (
              (l.forEach((t) => {
                let { type: i, start: o, end: l } = e,
                  u = e.getFullMatch();
                if (!t.processed)
                  t.type === i && t.start === o && t.text === u
                    ? ((t.processed = !0), (r = !0))
                    : ((o >= t.start && o < t.end) ||
                        (l > t.start && l <= t.end)) &&
                      ((t.processed = !0), (n = h(null, t.start, t.end, n)));
              }),
              r)
            )
              return;
            let i = t[e.type];
            n = h(
              [
                e.type,
                null != i && i.mutable ? "MUTABLE" : "IMMUTABLE",
                { token: e },
              ],
              e.start,
              e.end,
              n,
            );
          }),
          l.forEach((e) => {
            !e.processed && (n = h(null, e.start, e.end, n));
          }),
          n
        );
      }
      function b(e) {
        return r.EditorState.createEmpty(new r.CompositeDecorator(e));
      }
      function D(e) {
        let n = r.EditorState.push(e, r.ContentState.createFromText("")),
          t = e.getSelection();
        return (
          null != t && t.hasFocus && (n = r.EditorState.moveFocusToEnd(n)), n
        );
      }
      function U(e, n) {
        let t = v(n);
        return L(e, n, 0, t.length);
      }
      function Z(e, n) {
        let t = n.getSelection();
        return (
          (t = (t = t.set("focusOffset", e)).set("anchorOffset", e)),
          r.EditorState.forceSelection(n, t)
        );
      }
      function P(e) {
        return Z(e.getCurrentContent().getFirstBlock().getText().length, e);
      }
      function y(e) {
        return Z(0, e);
      }
      function G(e) {
        let n = e.getSelection();
        return (
          (n = (n = n.set("focusOffset", 0)).set("isBackward", !0)),
          r.EditorState.forceSelection(e, n)
        );
      }
      function x(e) {
        let n = v(e),
          t = e.getSelection();
        return (
          (t = (t = t.set("focusOffset", n.length)).set("isBackward", !1)),
          r.EditorState.forceSelection(e, t)
        );
      }
      function F(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 512,
          t = v(e);
        if (t.length > n) {
          let i = e.getSelection();
          (e = L("", e, n, t.length)),
            i.getAnchorOffset() > n && (i = i.set("anchorOffset", n)),
            i.getFocusOffset() > n && (i = i.set("focusOffset", n)),
            (e = r.EditorState.forceSelection(e, i));
        }
        return e;
      }
      function w(e) {
        let n = window.getSelection();
        if (null == n || "Caret" !== n.type || null == e) return;
        let t = n.getRangeAt(0);
        if (
          !(function (e, n) {
            for (; null != e; ) {
              if (e === n) return !0;
              e = e.parentNode;
            }
            return !1;
          })(t.commonAncestorContainer, e)
        )
          return;
        let r = t.getClientRects()[0],
          i = e.getClientRects()[0];
        if (null == r || null == i) return;
        let o = r.left - i.left + e.scrollLeft;
        o < e.scrollLeft
          ? (e.scrollLeft = o - 10)
          : o > e.scrollLeft + e.offsetWidth &&
            (e.scrollLeft = o - e.offsetWidth + 3);
      }
      function j(e) {
        return 0 === v(e).length;
      }
    },
    91047: function (e, n, t) {
      t.d(n, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return l;
        },
        n8: function () {
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
      function o(e, n, o) {
        o.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("79107"),
                t.e("90286"),
                t.e("60222"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, r.jsx)(e, { ...t, user: n, channel: o });
            })
          : o.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  t.e("50506"),
                  t.e("79695"),
                  t.e("79107"),
                  t.e("59743"),
                  t.e("90286"),
                  t.e("22036"),
                  t.e("56826"),
                  t.e("95470"),
                ]).then(t.bind(t, 131404));
                return (t) =>
                  (0, r.jsx)(e, {
                    ...t,
                    user: n,
                    channel: o,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != o.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("50506"),
                    t.e("79695"),
                    t.e("79107"),
                    t.e("90286"),
                    t.e("12435"),
                    t.e("80785"),
                  ]).then(t.bind(t, 757387));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: o,
                      guildId: o.guild_id,
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
      function l(e, n) {
        let { user: o, channel: l, moderationAlertId: u, guildId: s, ...a } = n;
        if (
          (null == l ? void 0 : l.isGroupDM()) ||
          (null == l ? void 0 : l.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != s ? s : null == l ? void 0 : l.getGuildId();
        null != c &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              t.e("12435"),
              t.e("65483"),
            ]).then(t.bind(t, 833737));
            return (n) =>
              (0, r.jsx)(e, {
                ...n,
                user: o,
                channelId: null == l ? void 0 : l.id,
                guildId: c,
                moderationAlertId: u,
                ...a,
              });
          });
      }
      function u(e, n) {
        let {
          user: o,
          guildId: l,
          analyticsLocations: u,
          onCloseContextMenu: s,
        } = n;
        (0, i.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, r.jsx)(e, {
              ...n,
              user: o,
              guildId: l,
              analyticsLocations: u,
              onCloseContextMenu: s,
            });
        });
      }
      function s(e, n, o) {
        null != o &&
          (0, i.jW)(e, async () => {
            let { default: e } = await t.e("50331").then(t.bind(t, 158195));
            return (n) => (0, r.jsx)(e, { ...n, guildId: o });
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
    456692: function (e, n, t) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    813778: function (e, n, t) {
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
    188662: function (e, n, t) {
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
    772103: function (e, n, t) {
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
    405013: function (e, n, t) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    873198: function (e, n, t) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    681027: function (e, n, t) {
      e.exports = { icon: "icon_acc5ff" };
    },
    391317: function (e, n, t) {
      e.exports = { container: "container_f8690a" };
    },
    427542: function (e, n, t) {
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
      };
    },
    679537: function (e, n, t) {
      e.exports = { container: "container_cbadbc" };
    },
    489666: function (e, n, t) {
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
    916315: function (e, n, t) {
      e.exports = {
        ephemeral: "ephemeral_d5deea",
        nitroMessage: "nitroMessage_d5deea",
        automodMessage: "automodMessage_d5deea",
        mentioned: "mentioned_d5deea",
        replying: "replying_d5deea",
        messageListItem: "messageListItem_d5deea",
        message: "message_d5deea",
        selected: "selected_d5deea",
        quotedChatMessage: "quotedChatMessage_d5deea",
        jump: "jump_d5deea",
        buttons: "buttons_d5deea",
        buttonsInner: "buttonsInner_d5deea",
        hideIfMessageNotFocused: "hideIfMessageNotFocused_d5deea",
        cozyMessage: "cozyMessage_d5deea",
        groupStart: "groupStart_d5deea",
        systemMessage: "systemMessage_d5deea",
        backgroundFlash: "backgroundFlash_d5deea",
        channelTextArea: "channelTextArea_d5deea",
        divider: "divider_d5deea",
        disableInteraction: "disableInteraction_d5deea",
        beforeGroup: "beforeGroup_d5deea",
        hasContent: "hasContent_d5deea",
        interactionSending: "interactionSending_d5deea",
      };
    },
    908860: function (e, n, t) {
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
    579861: function (e, n, t) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    49637: function (e, n, t) {
      e.exports = {};
    },
  },
]);
//# sourceMappingURL=b1fbcb83ea313ad4907d.js.map
