"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85742"],
  {
    774078: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(718922),
        r = t(55935),
        l = t(745735);
      function o(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          t = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          u = (0, r.TD)(Date.now(), e),
          s = (0, i.Z)();
        return (
          (0, l.Z)(
            () => {
              if (
                (0 !== u.days ||
                  0 !== u.hours ||
                  0 !== u.minutes ||
                  0 !== u.seconds) &&
                !o
              )
                s(), null == t || t();
            },
            o ? null : n,
          ),
          u
        );
      }
    },
    745735: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(470079),
        r = t(512722),
        l = t.n(r);
      function o(e, n) {
        let t = (0, i.useRef)(e);
        (0, i.useEffect)(() => {
          t.current = e;
        }, [e]),
          (0, i.useEffect)(() => {
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
      var i = t(470079),
        r = t(479531),
        l = t(689938);
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
                e.message !== l.Z.Messages.MFA_V2_CANCELED &&
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
      var i = t(470079),
        r = t(924826),
        l = t(442837),
        o = t(607070);
      function u(e, n, t) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
          s = i.useCallback(
            (e) => {
              let t = document.querySelector(e),
                i = n.current;
              null != t &&
                null != i &&
                (t.focus(), i.scrollIntoViewNode({ node: t, padding: 80 }));
            },
            [n],
          ),
          a = i.useCallback(
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
          S = (0, o.F6)(t, l.default, r.Z);
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
            null != E &&
              E > 0 &&
              T.push(
                s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format(
                  { activitiesCount: E },
                ),
              );
            let C = a({ isSubscriptionGated: f, needSubscriptionToAccess: I });
            return null != C && T.push(C), T.join(", ");
          case u.d4z.GUILD_STAGE_VOICE:
            n = s.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
            break;
          default:
            n = i.Ec.has(t.type)
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
          N = a({ isSubscriptionGated: f, needSubscriptionToAccess: I });
        return null != N && p.push(N), p.join(", ");
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
          return s;
        },
        kL: function () {
          return a;
        },
        zJ: function () {
          return l;
        },
      });
      var i,
        r,
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
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = o || (o = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
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
      var i = t(470079),
        r = t(442837),
        l = t(584825),
        o = t(17079),
        u = t(281320);
      function s(e, n) {
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
      function a(e) {
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
        s,
        a = t(442837),
        c = t(570140);
      let d = new Map(),
        _ = new Map();
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class E extends (r = a.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, n) {
          var t, i;
          return null !==
            (i = null === (t = _.get(e)) || void 0 === t ? void 0 : t.get(n)) &&
            void 0 !== i
            ? i
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
            let { guildId: n, priceTierType: t, priceTiers: i } = e;
            !_.has(n) && _.set(n, new Map()),
              _.get(n).set(t, 2),
              !d.has(n) && d.set(n, new Map()),
              d.get(n).set(t, i);
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
      var i = t(470079),
        r = t(695346),
        l = t(73346),
        o = t(834431);
      function u(e, n) {
        let { shouldAnimate: t = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          s = (0, o.n)(),
          a = t && s && u;
        return i.useMemo(() => {
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
      var i, r, l, o;
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
          return i;
        },
        tM: function () {
          return s;
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
      var i = t(735250),
        r = t(470079),
        l = t(120356),
        o = t.n(l),
        u = t(481060),
        s = t(456692);
      function a(e) {
        let { alt: n, ...t } = e,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: s.loader,
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
          className: o()(s.container, u),
          children: [
            (0, i.jsx)("img", { src: t, alt: r, className: s.backgroundImage }),
            (0, i.jsx)("div", { className: s.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: s.imageContainer,
              children: (0, i.jsx)(a, {
                src: n,
                alt: r,
                className: o()(s.image, c),
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
          return N;
        },
        f: function () {
          return A;
        },
      }),
        t(47120);
      var i,
        r,
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
        T = t(572004),
        C = t(689938),
        p = t(813778);
      function N(e) {
        let {
            tag: n,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: N,
            onRemove: A,
            selected: g,
            ariaLabel: m,
          } = e,
          { name: L, emojiId: O, emojiName: R } = n,
          h = null != A,
          [v, M] = o.useState(!1),
          D = (0, c.e7)([I.ZP], () =>
            null != O ? I.ZP.getUsableCustomEmojiById(O) : null,
          ),
          U = h || null != N,
          Z = (!h || !v) && (null != O || null != R),
          P = 0 === i,
          b = o.useRef(null),
          G = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          y = (e) => {
            let i = S.Sb.getSetting();
            T.wS &&
              i &&
              (0, _.jW)(e, async () => {
                let { default: e } = await t.e("29646").then(t.bind(t, 955116));
                return (t) => (0, l.jsx)(e, { ...t, tag: n });
              });
          },
          x = (0, l.jsxs)(l.Fragment, {
            children: [
              Z
                ? (0, l.jsx)(E.Z, {
                    className: s()(p.emoji, { [p.small]: P }),
                    emojiId: O,
                    emojiName: R,
                    animated: !!(null == D ? void 0 : D.animated),
                    size: "reaction",
                  })
                : null,
              v &&
                h &&
                (0, l.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, l.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: p.close,
                  }),
                }),
              (0, l.jsx)(d.Text, {
                variant: P ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: L,
              }),
            ],
          }),
          F = {
            key: n.id,
            className: s()(
              p.pill,
              {
                [p.disabled]: r,
                [p.clickable]: U,
                [p.small]: P,
                [p.selected]: g,
              },
              u,
            ),
            onClick: (e) => {
              null == N || N(e),
                null == A || A(n),
                !G && null != b.current && b.current.blur();
            },
            onContextMenu: (e) => y(e),
            onMouseEnter: () => h && M(!0),
            onMouseLeave: () => h && M(!1),
          },
          j = (0, a.JA)("forum-tag-".concat(n.id));
        return U
          ? (0, l.jsx)(d.Clickable, {
              ...j,
              innerRef: b,
              focusProps: { ringTarget: b },
              "aria-label":
                null != m
                  ? m
                  : C.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: L,
                    }),
              role: "button",
              "aria-pressed": g,
              ...F,
              children: x,
            })
          : (0, l.jsx)("div", { ...F, children: x });
      }
      function A(e) {
        let { tags: n, count: t, size: i = 1 } = e,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": C.Z.Messages.FORUM_TAGS,
          text: (0, l.jsx)(l.Fragment, {
            children: n.map((e) =>
              (0, l.jsx)(
                N,
                { tag: e, className: p.tooltipPill, size: N.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, l.jsx)("div", {
              ...e,
              className: s()(p.pill, { [p.small]: r }),
              children: (0, l.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", t],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (N.Sizes = i);
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
      var i = t(149765),
        r = t(399606),
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
        let n = (0, r.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && i.Db(t, f.cv);
          }),
          t = (0, r.e7)([E.Z], () =>
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
            for (let r of d.default.keys(t).map((e) => o.Z.getGuild(e))) {
              if (null == r) continue;
              let l = t[r.id];
              if (
                !(
                  null == l ||
                  (!(0, _.i9)(l) && !(0, _.ur)(l)) ||
                  ((0, _.ur)(l) && r.id !== e)
                )
              ) {
                if (
                  i.Db(c.uB({ user: n, context: r, checkElevated: !1 }), f.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(s.Z.getGuildId()),
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
          return r;
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
          return A;
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
        A = "automod-profile-quarantine-alert";
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
          return s;
        },
        kW: function () {
          return a;
        },
        km: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060),
        l = t(273504),
        o = t(689938);
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
                  s = n.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                return (t) =>
                  (0, i.jsx)(r, {
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
      function s(e, n, l, o) {
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
      function a(e, n) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await t.e("28382").then(t.bind(t, 537623));
          return (t) => (0, i.jsx)(r, { ...t, messageId: e, guildId: n });
        });
      }
      function c(e) {
        (0, r.openModal)((n) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: o.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: o.Z.Messages.CANCEL,
            ...n,
            children: (0, i.jsx)(r.Text, {
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
          return g;
        },
        JK: function () {
          return p;
        },
        Je: function () {
          return N;
        },
        T9: function () {
          return O;
        },
        UE: function () {
          return L;
        },
        Xx: function () {
          return m;
        },
        mm: function () {
          return A;
        },
        qY: function () {
          return C;
        },
      }),
        t(47120);
      var i = t(544891),
        r = t(570140),
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
      function T(e) {
        var n, t, i;
        let r = {
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
            null !== (i = e.exempt_roles) && void 0 !== i ? i : [],
          ),
        };
        return (
          null != r.triggerMetadata && delete r.triggerMetadata.keywordLists, r
        );
      }
      async function C(e) {
        let n = I(e),
          t = await i.tn.post({
            url: E.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
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
              await i.tn.post({
                url: E.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: n,
              })
            ).body,
          )
        );
      }
      async function N(e) {
        let n = I(e);
        return T(
          (
            await i.tn.patch({
              url: E.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: n,
            })
          ).body,
        );
      }
      async function A(e, n) {
        return await i.tn.del({ url: E.ANM.GUILD_AUTOMOD_RULE(n, e) }), !0;
      }
      async function g(e) {
        let n = await i.tn.get({ url: E.ANM.GUILD_AUTOMOD_RULES(e) });
        return Array.isArray(n.body) ? n.body.map(T) : [];
      }
      async function m(e, n, t) {
        if (!!u.Z.can(E.Plq.MANAGE_MESSAGES, n))
          await i.tn.post({
            url: E.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: e, channel_id: n.id, alert_action_type: t },
          });
      }
      function L(e, n, t) {
        let r = o.Z.getGuild(e);
        if (null != r && !!u.Z.can(E.Plq.MANAGE_GUILD, r))
          (0, _.UV)(() => {
            (0, l.yw)(E.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              i.tn.post({ url: E.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e) }),
              t();
          });
      }
      function O(e) {
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
        T = {},
        C = {},
        p = (e, n) => {
          let t = (0, o.hc)(e),
            i = {
              id: t,
              isBlockedEdit: (0, o.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, n),
            };
          (I[t] = i), S++;
        },
        N = (e) => I[e],
        A = (e) => {
          null != I[e] && delete I[e], S++;
        };
      function g(e) {
        let { messageData: n, errorResponseBody: t } = e;
        return p(n, t), !0;
      }
      function m(e) {
        var n;
        let { channelId: t, messages: i } = e,
          r =
            null === (n = s.Z.getChannel(t)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == r) return !1;
        let l = C[r],
          o = i.reduce((e, n) => {
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
        return null != o && C[r] !== o && ((C[r] = o), !0);
      }
      class L extends (i = r.ZP.PersistedStore) {
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
          var n;
          return null == e
            ? null
            : null !== (n = N(e)) && void 0 !== n
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
          return null !== (n = C[e]) && void 0 !== n ? n : null;
        }
      }
      f(L, "displayName", "GuildAutomodMessageStore"),
        f(L, "persistKey", "GuildAutomodMessages"),
        (n.Z = new L(l.Z, {
          CONNECTION_OPEN: function (e) {
            return (I = {}), S++, !0;
          },
          LOAD_MESSAGES_SUCCESS: m,
          LOCAL_MESSAGES_LOADED: m,
          MESSAGE_CREATE: function (e) {
            let { guildId: n, message: t } = e;
            if (null == n || t.type !== E.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(t);
            return !!(0, _.nY)(i) && !!(0, _.OP)(i) && ((C[n] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: g,
          MESSAGE_EDIT_FAILED_AUTOMOD: g,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: n } = e;
            return A(n), !0;
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
            A(t);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: n,
              decisionId: t,
              suspiciousMentionActivityUntil: i,
            } = e;
            return (
              (T[n] = {
                guildId: n,
                decisionId: t,
                suspiciousMentionActivityUntil: i,
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
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
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
          iconClassName: r,
          size: s,
        } = e;
        return (0, i.jsx)(o.Z, {
          className: l()(t, c[n]),
          size: s,
          children: (0, i.jsx)(u.Z, {
            tier: n,
            className: l()(r, a.boostedGuildIconGem, d[n]),
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
      var i = t(570140),
        r = t(434404),
        l = t(703656),
        o = t(430824),
        u = t(241559),
        s = t(327999),
        a = t(981631),
        c = t(176505);
      async function d(e) {
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
      function E(e, n) {
        let { continuationToken: t, ...r } = n;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function f(e, n) {
        await i.Z.dispatch({
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
            : (r.Z.open(t.id, a.pNK.MEMBERS), !0))
        );
      }
      async function S(e, n) {
        let t = await (0, s._2)(e, n);
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
          return s;
        },
        cf: function () {
          return u;
        },
        mh: function () {
          return a;
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
      async function s(e, n, t) {
        let r = await l.Je(e, n, t);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function a(e, n) {
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
      var i = t(470079),
        r = t(442837);
      t(935369);
      var l = t(38618),
        o = t(160404),
        u = t(496675),
        s = t(914010),
        a = t(495437),
        c = t(240864),
        d = t(981631);
      let _ = (e) => {
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
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([s.Z], () => s.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(n);
              if ((!t || u === e) && o && i === c.M.NOT_FETCHED)
                try {
                  a.cf(e, n);
                } catch (e) {}
            }, [e, n, o, u, t]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        f = function (e) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != n ? n : !o.Z.isViewingServerShop(e),
            }),
          );
        },
        I = (e) =>
          (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        S = (e) =>
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
          return s;
        },
        p9: function () {
          return c;
        },
        uV: function () {
          return a;
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
            createNewRole: s,
            unlinkRole: a,
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
                  create_new_role: s,
                  unlink_role: a,
                },
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        s = async (e, n) => {
          try {
            await i.tn.del({ url: o.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        a = async (e) => {
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
        s,
        a = t(442837),
        c = t(759174),
        d = t(570140),
        _ = t(70956),
        E = t(709054);
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
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
            let n = [C(e.guild_id)];
            return e.published && n.push(p(e.guild_id)), n;
          },
          (e) =>
            (function (e) {
              let n = E.default.extractTimestamp(e.id);
              return e.published ? -n : -n + 1e12;
            })(e),
        ),
        A = [];
      class g extends (r = a.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var n;
          return null !== (n = f[e]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(e) {
          return N.get(e);
        }
        getGuildProductsForGuild(e, n) {
          let { publishedOnly: t } = n;
          return null == e ? A : N.values(t ? p(e) : C(e));
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
        (u = "displayName") in (o = g)
          ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = s),
        (n.Z = new g(d.Z, {
          CONNECTION_OPEN: function () {
            N.clear(), (f = {}), (I = {}), (S = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (f[n] = 1),
              [...N.values(C(n))].forEach((e) => {
                N.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (f[n] = 2),
              (S[n] = Date.now()),
              t.forEach((e) => {
                N.set(e.id, e), (I[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            f[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            N.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            N.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            N.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            I[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (I[n.id] = 2), N.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (I[n] = 2), 404 === t.status && N.delete(n);
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
      var i = t(881052);
      t(496675);
      var r = t(981631),
        l = t(689938);
      let o = "_role";
      function u(e) {
        if (!(e >= 0))
          switch (-e) {
            case r.evJ.ENTITY_TOO_LARGE:
              return l.Z.Messages.UPLOAD_ERROR_TOO_LARGE;
            case r.evJ.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
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
          var t, r;
          return (
            (t = o),
            (r = l.Z.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME),
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
      function a(e) {
        var n;
        let {
            guildProductListing: t,
            name: i,
            priceTier: r,
            description: l,
            image: o,
            imageName: u,
            isImageChanged: s,
            newRoleParams: a,
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
          .concat(r.Z5c.GUILD_PRODUCT(e, n));
      }
    },
    676651: function (e, n, t) {
      t.d(n, {
        h: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
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
      var i = t(470079),
        r = t(937615),
        l = t(689938);
      function o(e) {
        return i.useMemo(() => {
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
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.price) == null) return;
          let { amount: n, currency: t } = e.price;
          return (0, r.T4)(n, t);
        }, [e]);
      }
    },
    613810: function (e, n, t) {
      var i = t(735250);
      t(470079);
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
          return T;
        },
        m: function () {
          return S;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
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
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: u,
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
        return (0, i.jsx)("div", {
          className: f.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: T,
            "aria-label": E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_LABEL,
            onSelect: C,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-edit",
                      label: E.Z.Messages.GUILD_PRODUCT_EDIT,
                      action: a,
                    }),
                  r &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-copy-link",
                      label: E.Z.Messages.GUILD_PRODUCT_COPY_LINK,
                      icon: o.LinkIcon,
                      action: _,
                    }),
                  l &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-test-download",
                      label: E.Z.Messages.GUILD_PRODUCT_TEST_DOWNLOAD,
                      icon: o.DownloadIcon,
                      action: I,
                    }),
                ],
              }),
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  t &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-unpublish",
                      label: E.Z.Messages.GUILD_PRODUCT_UNPUBLISH,
                      action: c,
                    }),
                  u &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-delete",
                      label: E.Z.Messages.GUILD_PRODUCT_DELETE,
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, i.jsx)(o.MenuGroup, {
                children:
                  s &&
                  (0, i.jsx)(o.MenuItem, {
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
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
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
              (0, i.jsx)(I, {
                ...e,
                guildId: t,
                productId: n.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: s,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: a,
                onEditProduct: d,
                onUnpublishProduct: _,
                onDeleteProduct: S,
                onCopyLink: T,
                onTestDownload: C,
                onReportProduct: p,
              }),
            children: (e, t) => {
              let { isShown: r } = t;
              return (0, i.jsx)(o.Clickable, {
                ...e,
                "aria-label":
                  E.Z.Messages.GUILD_PRODUCTS_ACTION_MENU_BUTTON_ARIA_LABEL.format(
                    { productName: n.name },
                  ),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: f.productActionMenuButton,
                children: (0, i.jsx)(o.MoreVerticalIcon, {
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
            product: n,
            guildId: t,
            onEditProduct: r,
            onUnpublishProduct: T,
            onDeleteProduct: C,
            onCopyProductLink: p,
            onTestDownload: N,
            disabled: A = !1,
          } = e,
          g = (0, s.U)(n, 600),
          m =
            null !== n.price_tier ? (0, a.T4)(n.price_tier, _.pK.USD) : void 0,
          L = (0, c.C)(n);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(f.productCardClickable, f.productCard, {
            [f.disabled]: A,
          }),
          onClick: A ? void 0 : r,
          onContextMenu: function (e) {
            (0, u.jW)(e, () =>
              Promise.resolve((e) =>
                (0, i.jsx)(I, {
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
            productName: n.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: g,
              className: f.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: f.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: f.productInfoContent,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: f.productName,
                      children: n.name,
                    }),
                    (0, i.jsx)(o.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: f.productDetails,
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-secondary",
                          children: m,
                        }),
                        null != L
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: f.dotSeparator,
                                }),
                                (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: L,
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
                !A &&
                  (0, i.jsx)(S, {
                    product: n,
                    guildId: t,
                    showEditProduct: !0,
                    showUnpublishProduct: n.published,
                    showCopyLink: n.published,
                    showTestDownload: null != n.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
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
    48691: function (e, n, t) {
      t.d(n, {
        b: function () {
          return _;
        },
        t: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(481060),
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
        return (0, i.jsxs)("div", {
          className: a.badge,
          style: { backgroundColor: t },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: a.__invalid_badgeText,
              children: n,
            }),
            (0, i.jsx)(l, {
              className: a.badgeIcon,
              color: null != u ? u : "currentColor",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function d() {
        return (0, i.jsx)(c, {
          label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
          backgroundColor: "#207B8D",
          icon: r.SparklesIcon,
        });
      }
      function _() {
        return (0, i.jsx)(c, {
          label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
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
      var i = t(735250),
        r = t(470079),
        l = t(399606),
        o = t(38618),
        u = t(423117),
        s = t(289393);
      let a = r.createContext(void 0);
      function c(e) {
        let n = r.useContext(a);
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
            countryCode: _,
            dontFetchWhileTrue: E,
          } = e,
          f = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          I = (0, l.e7)([s.Z], () =>
            null != n
              ? s.Z.getSubscriptionGroupListingsForGuildFetchState(n)
              : s.M.FETCHED,
          ),
          S = r.useRef(c),
          T = r.useCallback(() => {
            if (null == n || !f || !0 === E) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(n);
            (S.current || e === s.M.NOT_FETCHED) &&
              ((S.current = !1),
              u.FP(n, { includeSoftDeleted: d, countryCode: _ }));
          }, [f, n, d, _, E]),
          C = r.useMemo(() => I === s.M.FETCHED && !0 !== S.current, [I, S]);
        return (0, i.jsx)(a.Provider, {
          value: { listingsLoaded: C, fetchGroupListingsForGuild: T },
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
        r = t(689938);
      let l = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_JOIN_CTA_LABEL2,
        ],
        o = () => [
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL1,
          r.Z.Messages.ROLE_SUBSCRIPTION_RENEW_CTA_LABEL2,
        ],
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
      var i = t(367907),
        r = t(200876),
        l = t(430824),
        o = t(594174);
      t(709054), t(523361);
      var u = t(981631),
        s = t(689938);
      function a(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return o.format(u);
      }
      function c(e) {
        let {
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: n,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return o.astFormat(u);
      }
      function d(e, n) {
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
      function _(e) {
        let n,
          {
            username: t,
            usernameOnClickHandler: i,
            roleSubscriptionOnClickHandler: r,
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
              usernameHook: i,
              guildName: null == u ? void 0 : u.name,
              handleGuildNameClick: r,
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
            usernameOnClickHandler: i = u.dG4,
            roleSubscriptionOnClickHandler: r = u.dG4,
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
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
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
        return (0, r.l)(e);
      }
      function I(e, n, t, r) {
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
      var i = t(293810),
        r = t(474936),
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
            case r.rV.DAY:
              return l.Z.Messages.DAY;
            case r.rV.MONTH:
              return l.Z.Messages.MONTH;
            case r.rV.YEAR:
              return l.Z.Messages.YEAR;
          }
        })(n).format({ count: t });
      }
      function s(e) {
        let { interval: n, interval_count: t } = e;
        switch (n) {
          case r.rV.DAY:
            if (t > 0 && t % 7 == 0)
              return l.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
                weeks: t / 7,
              });
            return l.Z.Messages.DURATION_DAYS_CAPITALIZE.format({ days: t });
          case r.rV.MONTH:
            return l.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
              months: t,
            });
          case r.rV.YEAR:
            return l.Z.Messages.DURATION_YEARS_CAPITALIZE.format({ years: t });
        }
      }
      function a(e) {
        return e.ref_type === i.Qs.CHANNEL;
      }
      function c(e) {
        return e.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (e, n, t) {
      t.d(n, {
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
          return A;
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
          return L;
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
        t(47120),
        t(653041);
      var i = t(470079),
        r = t(442837),
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
            c = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            d = (0, r.e7)([a.Z], () =>
              null != e
                ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : a.M.FETCHED,
            ),
            _ = i.useRef(n);
          return (
            i.useEffect(() => {
              if (null == e || !c || !0 === u) return;
              let i = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (n || i === a.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(e, { includeSoftDeleted: t, countryCode: l }));
            }, [c, e, t, n, l, u]),
            { listingsLoaded: d === a.M.FETCHED && !0 !== _.current }
          );
        },
        E = function (e) {
          let { includeSoftDeleted: n = !1, includeUnpublished: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.Wu)(
            [a.Z],
            () => {
              if (null == e) return [];
              let i = a.Z.getSubscriptionGroupListing(e);
              if (null == i) return [];
              let r = [];
              for (let e of i.subscription_listings_ids) {
                let i = a.Z.getSubscriptionListing(e);
                if (null != i && (!i.soft_deleted || !!n))
                  (i.published || t) && r.push(i);
              }
              return r;
            },
            [e, n, t],
          );
        },
        f = (e) =>
          (0, r.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionListing(e) : null,
          ),
        I = (e) => {
          let n = (0, u.f)("useGroupListingsForGuild");
          return (0, r.e7)([a.Z], () =>
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
            (0, r.Wu)([a.Z], () => {
              let t =
                  null != e ? a.Z.getSubscriptionGroupListingsForGuild(e) : d,
                i = [];
              for (let e of t)
                for (let t of e.subscription_listings_ids) {
                  let e = a.Z.getSubscriptionListing(t);
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
        T = (e) => {
          let [n, t] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)(
              [a.Z],
              () =>
                l.filter(
                  (e) => !a.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
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
        C = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            error: t,
            submitting: e,
            deleteSubscriptionListing: async (e, t, i) => {
              try {
                return n(!0), r(null), await s._d(e, t, i), !0;
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            },
          };
        },
        p = () => {
          let [e, n] = (0, l.Z)(s.AE),
            { loading: t, error: i } = n;
          return { error: i, submitting: t, archiveSubscriptionListing: e };
        },
        N = () => {
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
                  await s.O0({
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
        A = (e) =>
          (0, r.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionSettings(e) : void 0,
          ),
        g = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, t) => {
              n(!0), r(null);
              try {
                await s.W2(e, t);
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        m = () => {
          let [e, n] = i.useState(!1),
            [t, r] = i.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
              n(!0), r(null);
              try {
                await s.Qb(e);
              } catch (e) {
                r(e);
              } finally {
                n(!1);
              }
            }, []),
            error: t,
          };
        },
        L = (e) =>
          (0, r.e7)([a.Z], () =>
            null != e ? a.Z.getSubscriptionTrial(e) : null,
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
          return y;
        },
        F2: function () {
          return V;
        },
        GM: function () {
          return q;
        },
        GP: function () {
          return x;
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
          return Y;
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
          return P;
        },
        mR: function () {
          return U;
        },
        p9: function () {
          return b;
        },
        qs: function () {
          return G;
        },
        rU: function () {
          return K;
        },
      }),
        t(47120);
      var i = t(470079),
        r = t(512722),
        l = t.n(r),
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
        T = t(584825),
        C = t(289393),
        p = t(790285),
        N = t(303737),
        A = t(971792),
        g = t(22902),
        m = t(403474),
        L = t(944537),
        O = t(293810),
        R = t(981631),
        h = t(474936);
      function v(e, n, t) {
        let r = (0, L.n)((e) => e.setListing),
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
          o = (0, L.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
          });
        return [void 0 !== o ? o : t, l];
      }
      function M(e, n) {
        let t = (0, c.e7)([C.Z], () => C.Z.getSubscriptionListing(e));
        return i.useMemo(() => n(t), [t]);
      }
      function D(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n
            ? n
            : "";
        });
        return v(e, "name", n);
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
        return v(e, "priceTier", n);
      }
      function Z(e) {
        let n = M(e, (e) => {
          var n;
          return null !== (n = null == e ? void 0 : e.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return v(e, "description", n);
      }
      function P(e, n) {
        let t = M(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, f._W)(e.application_id, e.image_asset, n);
        });
        return v(e, "image", t);
      }
      function b(e, n) {
        let t = (0, A.Z)(n, e);
        return v(
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
      function G(e, n) {
        let t = (0, A.Z)(n, e),
          r = (0, L.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleColor;
          }),
          l = (0, L.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t
              ? void 0
              : t.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != t ? t : m.k) };
          if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ""),
              (e.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((e.color = r), (e.colorString = (0, s.Rf)(r))), e
          );
        }, [t, l, r]);
      }
      function y(e, n) {
        let t = (0, A.Z)(n, e);
        return v(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e
              ? e
              : R.p6O;
          }, [t]),
        );
      }
      function x(e, n) {
        let t = (0, A.Z)(n, e);
        return v(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == t
                ? L.I.SOME_CHANNELS_ACCESS
                : (0, p.MT)(t)
                  ? L.I.ALL_CHANNELS_ACCESS
                  : L.I.SOME_CHANNELS_ACCESS,
            [t],
          ),
        );
      }
      let F = [];
      function j(e) {
        let n = M(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(I.rC),
        );
        return v(e, "channelBenefits", n);
      }
      let w = [];
      function B(e) {
        let n = M(e, (e) =>
          null == e ? w : e.role_benefits.benefits.filter(I.lL),
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
        let t = (0, A.Z)(n, e),
          r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
        return v(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == t ? H : k(r, t.id)), [r, t]),
        );
      }
      function Y(e) {
        var n;
        let t = (0, T.oC)(e),
          { selectedOption: i } = (0, g.Z)(
            null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return v(e, "trialInterval", null != i ? i : null);
      }
      function V(e) {
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
        return (0, L.n)((n) => void 0 !== n.listings[e]);
      }
      function z(e) {
        return (0, L.n)((n) => {
          for (let t of e) if (void 0 !== n.listings[t]) return !0;
          return !1;
        });
      }
      function J(e) {
        let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [t] = v(e, "priceTier", void 0);
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
                  : R.pKx.USD,
              interval:
                null !== (r = null == n ? void 0 : n.interval) && void 0 !== r
                  ? r
                  : h.rV.MONTH,
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
      function q(e) {
        var n;
        (n = e),
          (0, a.j)(() => {
            L.n.setState((e) => ({
              listings: {
                ...e.listings,
                [n]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function X(e) {
        let { guildId: n, editStateId: t } = e,
          i = C.Z.getSubscriptionListing(t);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          s = L.n.getState().listings[t];
        l()(null != s, "edit state does not exist");
        let {
          roleColor: a,
          roleIcon: c,
          trialLimit: f,
          trialInterval: I,
          tierEmojiIds: T,
        } = s;
        (void 0 !== a || void 0 !== c) &&
          (await _.Z.updateRole(n, r, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let p = C.Z.getSubscriptionTrial(u);
        if (
          ((null != f || null != I || (null != p && null == I)) &&
            (await S.I1(n, u, { trial: I, max_num_active_trial_users: f })),
          void 0 !== T)
        ) {
          let e = k(E.ZP.getGuildEmoji(n), r),
            t = (0, o.difference)([...T], [...e]),
            i = (0, o.difference)([...e], [...T]),
            l = t
              .map((e) => E.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: [...e.roles, r],
                  });
              }),
            u = i
              .map((e) => E.ZP.getCustomEmojiById(e))
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
          o = L.n.getState().listings[t];
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
        let f = E === L.I.ALL_CHANNELS_ACCESS,
          I = i;
        null == I && (I = (await S.uw(n, {})).id),
          null != a && a.length > 0 && (await (0, N.r4)(n, a));
        let T = [...(null != a ? a : []), ...(null != c ? c : [])],
          C = (0, N.yL)(t, n);
        return S.dA({
          guildId: n,
          groupListingId: I,
          data: {
            can_access_all_channels: f,
            image: _,
            name: u,
            description: s,
            benefits: T,
            priceTier: d,
          },
          analyticsContext: C,
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
                onBeforeDispatchNewListing: s,
                onAfterDispatchNewListing: c,
              } = e,
              d = i,
              _ = C.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), r(void 0), null != _))
                l()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var n;
                    let { guildId: t, editStateId: i, groupListingId: r } = e,
                      u = C.Z.getSubscriptionListing(i);
                    l()(null != u, "listing doesnt exist");
                    let s = L.n.getState().listings[i];
                    l()(null != s, "edit state does not exist");
                    let {
                        name: a,
                        description: c,
                        channelBenefits: d,
                        intangibleBenefits: _,
                        priceTier: E,
                        image: f,
                        channelAccessFormat: T,
                      } = s,
                      p = {};
                    if (
                      (a !== u.name && (p.name = a),
                      c !== u.description && (p.description = c),
                      E !==
                        (null === (n = u.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (p.priceTier = E),
                      null != f && (p.image = f),
                      null != T &&
                        (p.can_access_all_channels =
                          T === L.I.ALL_CHANNELS_ACCESS),
                      null != d || null != _)
                    ) {
                      let e = u.role_benefits.benefits.filter(I.rC),
                        n = u.role_benefits.benefits.filter(I.lL),
                        t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                      p.benefits = t;
                    }
                    return (0, o.isEmpty)(p)
                      ? u
                      : S.O0({
                          guildId: t,
                          groupListingId: r,
                          listingId: i,
                          data: p,
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
                  (E = i),
                  (f = d),
                  (0, a.j)(() => {
                    L.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [f]: e.listings[E],
                        [E]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await X({ guildId: t, editStateId: d }), q(d), !0;
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
          r = (0, T._k)(e, t),
          l = (0, L.n)((e) => e.editStateIdsForGroup[n]),
          o = (0, L.n)((e) => e.setEditStateIdsForGroup),
          s = (0, L.n)((e) => e.setListing),
          a = i.useMemo(
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
                  s(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: O.Qs.CHANNEL,
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
          return s;
        },
      });
      var i = t(470079),
        r = t(442837),
        l = t(480608),
        o = t(243730);
      let u = {};
      function s(e) {
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
          return s;
        },
      });
      var i = t(470079),
        r = t(442837),
        l = t(339085),
        o = t(889564);
      let u = [];
      function s(e) {
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
          return s;
        },
      });
      var i = t(470079),
        r = t(817460),
        l = t(293810),
        o = t(474936),
        u = t(689938);
      function s(e) {
        return i.useMemo(() => {
          var n;
          let t = l.DN.map((e) => ({
              value: e,
              label:
                e.interval === o.rV.DAY && 7 === e.interval_count
                  ? u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format(
                      { defaultLimit: (0, r.iG)(e) },
                    )
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
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
        o = t(596454),
        u = t(377171),
        s = t(403910),
        a = t(549631),
        c = t(873198);
      function d(e) {
        var n;
        let { guildId: t, emojiId: r, emojiName: d, className: _ } = e,
          E = (0, s.Z)(t, r);
        return null != E || null != d
          ? (0, i.jsx)(o.Z, {
              emojiId: null == E ? void 0 : E.id,
              emojiName: null != d ? d : null == E ? void 0 : E.name,
              animated:
                null !== (n = null == E ? void 0 : E.animated) &&
                void 0 !== n &&
                n,
              className: l()(c.emojiIcon, _),
            })
          : (0, i.jsx)(a.Z, {
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
      var i = t(735250);
      t(470079);
      var r = t(481060),
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
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(
              c.Z.Messages
                .GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL,
              "]",
            ),
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
      function E(e) {
        switch (e.ref_type) {
          case a.Qs.CHANNEL:
            return (0, i.jsx)(_, { channelId: e.ref_id });
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
          return C;
        },
      });
      var i = t(735250),
        r = t(470079),
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
        T = t(391317);
      function C(e) {
        var n;
        let {
            guildId: t,
            role: l,
            theme: C,
            content: p = S.Z.Messages
              .GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
            className: N,
          } = e,
          A = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
          g = f.ZP.useName(t, null, A),
          m = (0, a.Kz)(l),
          L = r.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: p,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: A,
                }),
                state: I.yb.SENT,
                id: "0",
              }),
            [A, p],
          ),
          O = {
            nick: g,
            colorString:
              null !== (n = l.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, i.jsx)(s.ThemeProvider, {
          theme: C,
          children: (e) =>
            (0, i.jsx)("div", {
              className: o()(e, T.container, N),
              children: (0, i.jsx)(_.Z, {
                hideTimestamp: !0,
                author: O,
                roleIcon: m,
                message: L,
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
          return A;
        },
      });
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
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
        T = t(689938),
        C = t(427542);
      function p(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: r } = e,
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
                !r &&
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
          N = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: C.tierTooltipTitle, children: p }),
              (0, i.jsx)("div", {
                children:
                  T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format(
                    { subscriberCount: a },
                  ),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: C.guildIconContainer,
          children: (0, i.jsx)(u.Tooltip, {
            text: N,
            position: "bottom",
            "aria-label": null != p ? p : "",
            children: (e) =>
              (0, i.jsx)(u.Clickable, {
                ...e,
                className: C.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(_.Z, {
                  premiumTier: s,
                  iconBackgroundClassName: t
                    ? C.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
                  iconClassName:
                    t && s !== S.Eu4.TIER_3
                      ? C.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function N(e) {
        let { guild: n, disableColor: t, disableBoostClick: r } = e;
        return (0, s.Z)(n)
          ? (0, i.jsx)("div", {
              className: C.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(C.guildBadge, { [C.disableColor]: t }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: C.guildIconContainer,
              children: (0, i.jsx)(a.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(C.guildBadge, { [C.disableColor]: t }),
              }),
            });
      }
      function A(e) {
        let { guild: n, isBannerVisible: t, disableBoostClick: r } = e;
        return (0, s.Z)(n)
          ? (0, i.jsx)(N, { guild: n, disableColor: !1, disableBoostClick: r })
          : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
            ? (0, i.jsx)(N, { guild: n, disableColor: !t })
            : (0, i.jsx)(p, {
                guild: n,
                isBannerVisible: t,
                disableBoostClick: r,
              });
      }
    },
    889695: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      }),
        t(47120),
        t(724458),
        t(653041);
      var i = t(735250),
        r = t(470079),
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
        T = t(962086),
        C = t(160404),
        p = t(225675),
        N = t(981631),
        A = t(689938),
        g = t(679537);
      function m(e) {
        var n;
        return (0, i.jsx)("span", {
          style: {
            color:
              null !== (n = e.colorString) && void 0 !== n ? n : "currentColor",
          },
          children: e.name,
        });
      }
      function L(e) {
        let { guildId: n } = e,
          t = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
          l = (0, c.e7)([E.Z], () => E.Z.getGuild(n)),
          u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)),
          { impersonateType: L, viewingRoles: O } = (0, c.cj)([C.Z], () => ({
            impersonateType: C.Z.getImpersonateType(n),
            viewingRoles: C.Z.getViewingRoles(n),
          })),
          R = L === p.z.SERVER_SHOP,
          h = (0, c.e7)([_.ZP], () =>
            null != t ? _.ZP.getTrueMember(n, t.id) : null,
          ),
          [v, M] = (0, d.useMultiSelect)(null == O ? [] : S.default.keys(O)),
          D = r.useRef(l);
        r.useEffect(() => {
          let e = {},
            n = D.current;
          if (null != n && null != L) {
            for (let n of v) {
              let t = u[n];
              null != t && (e[n] = t);
            }
            (0, T.Zm)(n.id, { type: L, roles: e });
          }
        }, [v, L, u]);
        let U =
            null != l && null != t && null != h
              ? s()(u)
                  .filter((e) => -1 !== h.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          Z = r.useMemo(
            () =>
              null != l && null != t
                ? Object.values(u)
                    .filter((e) => e.id !== l.id)
                    .filter((e) => {
                      var n;
                      return (
                        !R ||
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
            [l, t, R, U, u],
          );
        if (null == t || null == l || null == h) return null;
        let P = {};
        return (h.roles.forEach((e) => {
          let n = u[e];
          null != n && (P[n.id] = n);
        }),
        a.e$(
          I.I0({ forceRoles: P, context: l }),
          a.$e(N.Plq.MANAGE_GUILD, N.Plq.MANAGE_ROLES),
        ) || l.isOwner(t.id))
          ? (0, i.jsx)("div", {
              className: g.container,
              children: (0, i.jsx)(d.Combobox, {
                placeholder: A.Z.Messages.SEARCH_ROLES,
                value: v,
                onChange: M,
                autoFocus: !0,
                children: (e) => {
                  let n = Z.reduce(
                      (n, t) => (
                        o()(e.toLowerCase(), t.name.toLowerCase()) &&
                          n.push(
                            (0, i.jsxs)(
                              d.ComboboxItem,
                              {
                                value: t.id,
                                children: [
                                  (0, i.jsx)(d.ComboboxItem.Label, {
                                    children: m(t),
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
                                children: m(t),
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
              children: A.Z.Messages.VIEW_AS_ROLES_NO_ACCESS,
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
      var i = t(735250);
      t(470079);
      var r = t(120356),
        l = t.n(r),
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
        T = t(671533),
        C = t(259580),
        p = t(358085),
        N = t(962086),
        A = t(160404),
        g = t(889695),
        m = t(981631),
        L = t(176505),
        O = t(302463),
        R = t(293810),
        h = t(689938),
        v = t(489666);
      function M(e) {
        let { className: n, onClick: t, children: r } = e;
        return (0, i.jsx)(s.Button, {
          className: l()(v.button, n),
          innerClassName: v.buttonInner,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.WHITE,
          size: s.Button.Sizes.NONE,
          onClick: t,
          children: r,
        });
      }
      function D(e) {
        let { onClick: n } = e;
        return (0, i.jsx)(M, { onClick: n, children: h.Z.Messages.DISABLE });
      }
      function U() {
        let e = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
          n = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
          {
            viewingRoles: t,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: p,
          } = (0, o.cj)([A.Z], () => ({
            viewingRoles: null != e ? A.Z.getViewingRoles(e) : null,
            backNavigationSection: A.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && A.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && A.Z.isViewingServerShop(e),
          }));
        if (null == t || null == e) return null;
        let U = (function (e) {
            switch (e) {
              case m.pNK.INTEGRATIONS:
                return h.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
              case m.pNK.ROLE_SUBSCRIPTIONS:
                return h.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
              case m.pNK.ONBOARDING:
                return h.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
              default:
                return h.Z.Messages.VIEWING_AS_ROLES_BACK;
            }
          })(r),
          Z =
            r === m.pNK.ROLE_SUBSCRIPTIONS
              ? h.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT
              : h.Z.Messages.VIEWING_AS_ROLES_SELECT,
          P = n === L.oC.GUILD_ONBOARDING,
          b = (n) => {
            let { backToSettings: t } = n;
            null != e &&
              (A.Z.isFullServerPreview(e) && (0, f.uL)(m.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (a.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, N.mL)(e),
              t && E.Z.open(e, r),
              r === m.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
          };
        return (0, i.jsxs)(s.Notice, {
          color: s.NoticeColors.BRAND,
          className: v.notice,
          children: [
            (0, i.jsxs)(M, {
              onClick: () => b({ backToSettings: !0 }),
              className: v.backButton,
              children: [
                (0, i.jsx)(T.Z, {
                  width: 16,
                  height: 16,
                  direction: T.Z.Directions.LEFT,
                  className: v.backArrow,
                }),
                U,
              ],
            }),
            P && l
              ? (0, i.jsx)("div", {
                  className: v.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: v.noticeText,
                    children: h.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION,
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: v.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: v.noticeText,
                      children: l
                        ? h.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format(
                            { numRoles: Object.keys(t).length },
                          )
                        : h.Z.Messages.VIEWING_AS_ROLES.format({
                            numRoles: Object.keys(t).length,
                          }),
                    }),
                    (0, i.jsx)(s.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(g.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsxs)(M, {
                          onClick: n,
                          children: [
                            Z,
                            (0, i.jsx)(C.Z, {
                              width: 16,
                              height: 16,
                              direction: C.Z.Directions.DOWN,
                              className: v.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    l &&
                      (0, i.jsx)(s.TooltipContainer, {
                        className: v.previewWarning,
                        text: h.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
                        children: (0, i.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    p &&
                      (0, i.jsx)(s.TooltipContainer, {
                        className: v.previewWarning,
                        text: h.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format(
                          { maxTiers: R.fF, maxProducts: O.dD },
                        ),
                        children: (0, i.jsx)(s.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            l || r === m.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(D, { onClick: () => b({ backToSettings: !1 }) }),
          ],
        });
      }
      function Z(e) {
        let { guildId: n } = e;
        return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(n))
          ? (0, i.jsx)("div", {
              className: l()(v.settingsWrapper, {
                [v.windows]: (0, p.isWindows)(),
                [v.osx]: (0, p.isMac)(),
              }),
              children: (0, i.jsx)(U, {}),
            })
          : null;
      }
    },
    690221: function (e, n, t) {
      var i = t(735250),
        r = t(470079),
        l = t(481060),
        o = t(703656),
        u = t(981631);
      n.Z = r.forwardRef(function (e, n) {
        let {
            href: t,
            children: s,
            onClick: a,
            onKeyPress: c,
            focusProps: d,
            ..._
          } = e,
          E = r.useCallback(
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
          f = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != t && (0, o.uL)(t),
                  null == a || a();
            },
            [t, a],
          ),
          I = (0, i.jsx)("a", {
            ref: n,
            href: t,
            onClick: f,
            onKeyPress: E,
            ..._,
            children: s,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: I });
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
      var i = t(735250),
        r = t(470079),
        l = t(120356),
        o = t.n(l),
        u = t(628238),
        s = t(492593),
        a = t(25015),
        c = t(963550),
        d = t(845080),
        _ = t(916315);
      n.Z = r.memo(function (e) {
        var n;
        let {
            message: t,
            channel: r,
            compact: l,
            className: E,
            isGroupStart: f,
            hideSimpleEmbedContent: I = !0,
            disableInteraction: S,
          } = e,
          T = (0, u.A)(
            (null !== (n = t.editedTimestamp) && void 0 !== n
              ? n
              : t.timestamp
            ).valueOf(),
          ),
          { content: C } = (0, a.Z)(t, {
            hideSimpleEmbedContent: I,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(s.Z, {
          compact: l,
          className: o()(E, {
            [_.message]: !0,
            [_.cozyMessage]: !l,
            [_.groupStart]: f,
          }),
          childrenHeader: (0, d.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, C),
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
      var i = t(735250);
      t(470079);
      var r = t(930282);
      function l(e, n) {
        let { message: t } = e;
        return (0, i.jsx)(r.ZP, { message: t, content: n });
      }
    },
    845080: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250),
        r = t(470079),
        l = t(901461),
        o = t(464891);
      let u = r.memo(o.ZP);
      function s(e) {
        let {
          message: n,
          channel: t,
          author: r,
          compact: o,
          animateAvatar: s,
          guildId: a,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: _,
        } = e;
        return !(0, l.Z)(n) && (c || o)
          ? (0, i.jsx)(u, {
              message: n,
              channel: t,
              author: r,
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
          return _;
        },
        vY: function () {
          return E;
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
        for (let n of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(u),
        }),
        i.Z.dispatch({
          type: "STORE_LISTINGS_FETCH_SUCCESS",
          storeListings: e.map(s),
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
            a(null !== (t = r.subscription_listings) && void 0 !== t ? t : []),
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
      function _(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function E(e) {
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
          for (let n of o)
            n.subscription_plans[0].id === e &&
              (await r.GZ(n.id, void 0, void 0, !0));
          a(o);
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
      function T(e) {
        return "application:".concat(e);
      }
      function C(e) {
        return "plan:".concat(e);
      }
      function p(e, n, t) {
        return "entitlement:".concat(e, ":").concat(t, ":").concat(n);
      }
      function N(e, n) {
        return "entitlement:".concat(n, ":").concat(e);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let A = new _.h(
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
        L = {},
        O = {};
      function R(e) {
        var n;
        for (let t of (A.set(e.id, e),
        null !== (n = e.subscription_listings) && void 0 !== n ? n : []))
          (function (e) {
            g.set(e.id, e);
          })(t);
      }
      class h extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var n;
          return null !== (n = L[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(e) {
          return A.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let n = A.values(S(e));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(e) {
          return g.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return g.values(T(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var n;
          return null !== (n = O[e]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(e) {
          let n = g.values(C(e));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(e, n) {
          let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return m.values(p(e, t, n));
        }
        getEntitlementsForGuild(e) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return m.values(N(n, e));
        }
      }
      (s = "ApplicationSubscriptionStore"),
        (u = "displayName") in (o = h)
          ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = s),
        (n.Z = new h(E.Z, {
          LOGOUT: function () {
            A.clear(), g.clear(), m.clear(), (L = {}), (O = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: n, groupListingId: t } = e;
            L[n] = 1;
            let i = A.get(t);
            if (null != i)
              for (let e of i.subscription_listings_ids) g.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: n, groupListing: t } = e;
            (L[n] = 2), R(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: n } = e;
            L[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: n } = e;
            O[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: n, entitlements: t } = e;
            (O[n] = 2),
              t.forEach((e) => {
                let n = f.Z.createFromServer(e);
                m.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: n } = e;
            O[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: n } = e;
            R(n);
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
      var i = t(544891),
        r = t(570140),
        l = t(480294),
        o = t(814443),
        u = t(428598),
        s = t(981631);
      function a() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return o.Z.needsRefresh()
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            i.tn
              .get({
                url: s.ANM.USER_AFFINITIES,
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
        return u.Z.shouldFetch() && l.Z.hasConsented(s.pjP.PERSONALIZATION)
          ? (r.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.tn
              .get({
                url: s.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
              })
              .then(
                (e) => {
                  let { body: n } = e;
                  r.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: n.user_affinities.map((e) => {
                      var n, t, i, r, l, o, u, s;
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
                          null !== (s = e.communication_rank) && void 0 !== s
                            ? s
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
        i = new Map(
          _.userAffinities
            .filter((e) => !u.Z.isBlocked(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class f extends (r = l.ZP.PersistedStore) {
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
          return i.get(e);
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
            (_ = { ...d }), (i = new Map()), (c = !1);
          },
        }));
    },
    170671: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
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
        r = t(735250),
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
      class E extends (i = l.PureComponent) {
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
                children: (0, r.jsx)(s.VoiceNormalIcon, {
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
            _(this, "_ref", void 0),
            _(this, "defaultRenderUser", (e, n, t, i) => {
              let { onClick: l, size: o, guildId: _ } = this.props,
                E = e instanceof a.Z ? e : null != e ? e.user : null;
              return null == E
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, n) }, t)
                : (0, r.jsx)(
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
          return (0, r.jsx)("div", { className: n, children: e }, t);
        },
        size: s.AvatarSizes.SIZE_24,
      }),
        (n.Z = E);
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
      var i = t(735250);
      t(470079);
      var r = t(239091);
      function l(e, n, l) {
        l.isGroupDM()
          ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("50506"),
                t.e("79695"),
                t.e("79107"),
                t.e("92453"),
                t.e("60222"),
              ]).then(t.bind(t, 354589));
              return (t) => (0, i.jsx)(e, { ...t, user: n, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(e, async () => {
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
                    t.e("79107"),
                    t.e("92453"),
                    t.e("13125"),
                    t.e("34879"),
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
        let { user: l, channel: o, moderationAlertId: u, guildId: s, ...a } = n;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != s ? s : null == o ? void 0 : o.getGuildId();
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
        (0, r.jW)(e, async () => {
          let { default: e } = await t.e("45130").then(t.bind(t, 246389));
          return (n) =>
            (0, i.jsx)(e, {
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
//# sourceMappingURL=1cbd17d9e749c8952aed.js.map
