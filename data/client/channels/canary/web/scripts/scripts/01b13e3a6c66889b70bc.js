"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27936"],
  {
    511293: function (t) {
      t.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (t) {
      t.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (t, n, e) {
      e(47120);
      var i,
        r = e(200651),
        l = e(192379),
        u = e(120356),
        o = e.n(u),
        a = e(481060),
        s = e(37234),
        c = e(230711),
        d = e(981631),
        f = e(388032),
        _ = e(261121);
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
      class p extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: _.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: _.streamerModeEnabledImage }),
              (0, r.jsx)(a.Clickable, {
                className: o()(_.streamerModeEnabledBtn, {
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
      E(p, "defaultProps", { disableButton: !1 }), (n.Z = p);
    },
    935369: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(479531),
        l = e(388032);
      function u(t) {
        let [n, e] = i.useState(!1),
          [u, o] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var n = arguments.length, i = Array(n), u = 0; u < n; u++)
                i[u] = arguments[u];
              try {
                return o(null), e(!0), await t(...i);
              } catch (t) {
                t.message !== l.intl.string(l.t.N2yb9f) &&
                  o(t instanceof r.Z ? t : new r.Z(t));
              } finally {
                e(!1);
              }
            },
            [t],
          ),
          { loading: n, error: u },
        ];
      }
    },
    724757: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(192379),
        r = e(924826),
        l = e(442837),
        u = e(607070);
      function o(t, n, e) {
        let o = (0, l.e7)([u.Z], () => u.Z.keyboardModeEnabled),
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
          isEnabled: o,
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
        u = e(933557),
        o = e(981631),
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
            isSubscriptionGated: E,
            needSubscriptionToAccess: p,
          } = t,
          g = (0, u.F6)(e, l.default, r.Z);
        switch (e.type) {
          case o.d4z.DM:
            n = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
          case o.d4z.GROUP_DM:
            n = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
          case o.d4z.GUILD_STORE:
            n = a.t.Bo4msr;
            break;
          case o.d4z.GUILD_DIRECTORY:
            n = a.t["92EAFx"];
            break;
          case o.d4z.GUILD_ANNOUNCEMENT:
            n = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
          case o.d4z.GUILD_VOICE:
            let S = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: e.name }),
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
              let t = e.userLimit;
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
          case o.d4z.GUILD_STAGE_VOICE:
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
        let C = [
            a.intl.formatToPlainString(n, { channelName: g, mentionCount: d }),
          ],
          I = s({ isSubscriptionGated: E, needSubscriptionToAccess: p });
        return null != I && C.push(I), C.join(", ");
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
          return u;
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
        u,
        o = e(388032);
      function a(t) {
        return {
          4: o.intl.string(o.t["5tzSRE"]),
          2: o.intl.string(o.t["WWIr5+"]),
          3: o.intl.string(o.t.WlSInZ),
          1: o.intl.string(o.t.uOU7Pz),
        }[t];
      }
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = u || (u = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
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
        u = e(17079),
        o = e(281320);
      function a(t, n) {
        let e = (0, r.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(t, n)),
          l = (0, r.e7)([o.Z], () =>
            o.Z.getPriceTiersFetchStateForGuildAndType(t, n),
          );
        return (
          i.useEffect(() => {
            l === o.M.NOT_FETCHED && (0, u.T)(t, n);
          }, [t, l, n]),
          { loading: l === o.M.FETCHING, priceTiers: e }
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
        let u = (0, l.YB)(t);
        return {
          loaded: null != u && !e,
          subscriptionsSettings: u,
          loading: e,
          error: r,
        };
      }
    },
    155414: function (t, n, e) {
      e.d(n, {
        X: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(881052),
        l = e(981631);
      let u = async (t, n) => {
        try {
          return (
            await i.tn.get({
              url: l.ANM.PRICE_TIERS,
              query: { price_tier_type: n, guild_id: t },
              rejectWithError: !1,
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
        u,
        o,
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
        (o = "displayName") in (u = _)
          ? Object.defineProperty(u, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[o] = a),
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
          return o;
        },
      });
      var i = e(192379),
        r = e(695346),
        l = e(73346),
        u = e(834431);
      function o(t, n) {
        let { shouldAnimate: e = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = r.QK.useSetting(),
          a = (0, u.n)(),
          s = e && a && o;
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
      var i, r, l, u;
      e.d(n, {
        Hr: function () {
          return o;
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
        ((u = r || (r = {})).CHANNEL_ROW_CONTEXT_MENU =
          "channel_row_context_menu"),
        (u.SHOP_HEADER_BUTTON = "shop_header_button");
      let o = "hasClickedGuildShopProductPreviewTab",
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
        u = e.n(l),
        o = e(481060),
        a = e(542508);
      function s(t) {
        let { alt: n, ...e } = t,
          [l, u] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(o.Spinner, {
                type: o.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...e, alt: n, onLoad: () => u(!1) }),
          ],
        });
      }
      function c(t) {
        let {
          src: n,
          backgroundSrc: e,
          alt: r,
          aspectRatio: l,
          className: o,
          imageChildClassName: c,
          ...d
        } = t;
        return (0, i.jsxs)("div", {
          className: u()(a.container, o),
          children: [
            (0, i.jsx)("img", { src: e, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: a.imageContainer,
              children: (0, i.jsx)(s, {
                src: n,
                alt: r,
                className: u()(a.image, c),
                ...d,
              }),
            }),
          ],
        });
      }
    },
    479099: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return I;
        },
        f: function () {
          return T;
        },
      }),
        e(47120);
      var i,
        r,
        l = e(200651),
        u = e(192379),
        o = e(120356),
        a = e.n(o),
        s = e(91192),
        c = e(442837),
        d = e(481060),
        f = e(239091),
        _ = e(596454),
        E = e(607070),
        p = e(339085),
        g = e(695346),
        S = e(572004),
        m = e(388032),
        C = e(680475);
      function I(t) {
        let {
            tag: n,
            size: i = 1,
            disabled: r,
            className: o,
            onClick: I,
            onRemove: T,
            selected: h,
            ariaLabel: v,
          } = t,
          { name: N, emojiId: A, emojiName: O } = n,
          P = null != T,
          [L, b] = u.useState(!1),
          M = (0, c.e7)([p.ZP], () =>
            null != A ? p.ZP.getUsableCustomEmojiById(A) : null,
          ),
          R = P || null != I,
          y = (!P || !L) && (null != A || null != O),
          Z = 0 === i,
          D = u.useRef(null),
          U = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
          j = (t) => {
            let i = g.Sb.getSetting();
            S.wS &&
              i &&
              (0, f.jW)(t, async () => {
                let { default: t } = await e.e("29646").then(e.bind(e, 955116));
                return (e) => (0, l.jsx)(t, { ...e, tag: n });
              });
          },
          x = (0, l.jsxs)(l.Fragment, {
            children: [
              y
                ? (0, l.jsx)(_.Z, {
                    className: a()(C.emoji, { [C.small]: Z }),
                    emojiId: A,
                    emojiName: O,
                    animated: !!(null == M ? void 0 : M.animated),
                    size: "reaction",
                  })
                : null,
              L &&
                P &&
                (0, l.jsx)("div", {
                  className: C.closeCircle,
                  children: (0, l.jsx)(d.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: C.close,
                  }),
                }),
              (0, l.jsx)(d.Text, {
                variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: N,
              }),
            ],
          }),
          G = {
            key: n.id,
            className: a()(
              C.pill,
              {
                [C.disabled]: r,
                [C.clickable]: R,
                [C.small]: Z,
                [C.selected]: h,
              },
              o,
            ),
            onClick: (t) => {
              null == I || I(t),
                null == T || T(n),
                !U && null != D.current && D.current.blur();
            },
            onContextMenu: (t) => j(t),
            onMouseEnter: () => P && b(!0),
            onMouseLeave: () => P && b(!1),
          },
          F = (0, s.JA)("forum-tag-".concat(n.id));
        return R
          ? (0, l.jsx)(d.Clickable, {
              ...F,
              innerRef: D,
              focusProps: { ringTarget: D },
              "aria-label":
                null != v
                  ? v
                  : m.intl.formatToPlainString(m.t.iyRTLi, { tagName: N }),
              role: "button",
              "aria-pressed": h,
              ...G,
              children: x,
            })
          : (0, l.jsx)("div", { ...G, children: x });
      }
      function T(t) {
        let { tags: n, count: e, size: i = 1 } = t,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": m.intl.string(m.t["P/y+sr"]),
          text: (0, l.jsx)(l.Fragment, {
            children: n.map((t) =>
              (0, l.jsx)(
                I,
                { tag: t, className: C.tooltipPill, size: I.Sizes.SMALL },
                t.id,
              ),
            ),
          }),
          children: (t) =>
            (0, l.jsx)("div", {
              ...t,
              className: a()(C.pill, { [C.small]: r }),
              children: (0, l.jsxs)(d.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", e],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (I.Sizes = i);
    },
    528011: function (t, n, e) {
      e.d(n, {
        g: function () {
          return g;
        },
        mI: function () {
          return p;
        },
      }),
        e(47120);
      var i = e(149765),
        r = e(399606),
        l = e(581883),
        u = e(430824),
        o = e(496675),
        a = e(914010),
        s = e(594174),
        c = e(700785),
        d = e(709054),
        f = e(533244),
        _ = e(487419),
        E = e(676770);
      e(981631);
      function p(t) {
        let n = (0, r.e7)([u.Z, o.Z], () => {
            let n = u.Z.getGuild(t);
            if (null == n) return !1;
            let e = o.Z.getGuildPermissions(n);
            return null != e && i.Db(e, E.cv);
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
            for (let r of d.default.keys(e).map((t) => u.Z.getGuild(t))) {
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
                  i.Db(c.uB({ user: n, context: r, checkElevated: !1 }), E.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          e = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
          r = null != n ? e[n] : null,
          o = null != r && r.disableRaidAlertNag;
        return { show: null != n && !o, guildId: n };
      }
    },
    273504: function (t, n, e) {
      e.d(n, {
        I3: function () {
          return c;
        },
        Ic: function () {
          return C;
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
          return I;
        },
        aj: function () {
          return p;
        },
        dc: function () {
          return T;
        },
        fX: function () {
          return o.f;
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
          return u.q;
        },
        uE: function () {
          return E;
        },
      });
      var i,
        r,
        l = e(401653),
        u = e(95930),
        o = e(41381);
      ((i = r || (r = {}))[(i.PROFANITY = 1)] = "PROFANITY"),
        (i[(i.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (i[(i.SLURS = 3)] = "SLURS"),
        o.f.USER_PROFILE,
        o.f.SERVER_POLICY,
        o.f.MENTION_SPAM,
        o.f.ML_SPAM,
        o.f.DEFAULT_KEYWORD_LIST,
        o.f.KEYWORD;
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
        C = 20,
        I = 150,
        T = "automod-profile-quarantine-alert";
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
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(273504),
        u = e(388032);
      function o(t) {
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
          [l.jj.FLAG_TO_CHANNEL]: (n, u) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await e.e("74543").then(e.bind(e, 643611)),
                  a = n.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                return (e) =>
                  (0, i.jsx)(r, {
                    action: u,
                    isEdit: null != a,
                    triggerType: n.triggerType,
                    guildId: t,
                    onEditChannel: (t) => {
                      (u.metadata.channelId = t),
                        n.exemptChannels.add(t),
                        o(u),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (o(null), e.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (t, n) =>
            new Promise((u) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await e.e("78273").then(e.bind(e, 41767)),
                  o = t.actions.find(
                    (t) => t.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (e) =>
                  (0, i.jsx)(r, {
                    action: n,
                    isEdit: null != o,
                    triggerType: t.triggerType,
                    onUpdateDuration: (t) => {
                      null != t && (n.metadata.durationSeconds = t),
                        u(n),
                        e.onClose();
                    },
                    ...e,
                    onClose: () => (u(null), e.onClose()),
                  });
              });
            }),
        };
      }
      function a(t, n, l, u) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await e.e("37483").then(e.bind(e, 241046));
          return (e) =>
            (0, i.jsx)(r, {
              ...e,
              automodDecision: {
                messageId: t,
                messageContent: n,
                decisionId: l,
                channel: u,
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
            header: u.intl.string(u.t.wLGrjI),
            confirmText: u.intl.string(u.t["cY+Ooa"]),
            onConfirm: t,
            cancelText: u.intl.string(u.t["ETE/oK"]),
            ...n,
            children: (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              children: u.intl.string(u.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (t, n, e) {
      e.d(n, {
        $Y: function () {
          return h;
        },
        JK: function () {
          return C;
        },
        Je: function () {
          return I;
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
          return T;
        },
        qY: function () {
          return m;
        },
      }),
        e(47120);
      var i = e(544891),
        r = e(570140),
        l = e(367907),
        u = e(430824),
        o = e(496675),
        a = e(823379),
        s = e(709054),
        c = e(177862),
        d = e(787824),
        f = e(226192),
        _ = e(981631);
      function E(t) {
        return { type: t.type, metadata: (0, d.X)(t.metadata) };
      }
      function p(t) {
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
            actions: t.actions.filter(a.lm).map(E),
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
      function S(t) {
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
      async function m(t) {
        let n = p(t),
          e = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(t.guildId),
            body: n,
            rejectWithError: !1,
          });
        return (0, d.C)(e.body);
      }
      async function C(t) {
        let n = p(t);
        return (
          delete n.id,
          S(
            (
              await i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_RULES(t.guildId),
                body: n,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function I(t) {
        let n = p(t);
        return S(
          (
            await i.tn.patch({
              url: _.ANM.GUILD_AUTOMOD_RULE(t.guildId, t.id),
              body: n,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function T(t, n) {
        return (
          await i.tn.del({
            url: _.ANM.GUILD_AUTOMOD_RULE(n, t),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function h(t) {
        let n = await i.tn.get({
          url: _.ANM.GUILD_AUTOMOD_RULES(t),
          rejectWithError: !1,
        });
        return Array.isArray(n.body) ? n.body.map(S) : [];
      }
      async function v(t, n, e) {
        if (!!o.Z.can(_.Plq.MANAGE_MESSAGES, n))
          await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
            body: { message_id: t, channel_id: n.id, alert_action_type: e },
            rejectWithError: !1,
          });
      }
      function N(t, n, e) {
        let r = u.Z.getGuild(t);
        if (null != r && !!o.Z.can(_.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: c.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: n,
            }),
              i.tn.post({
                url: _.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(t),
                rejectWithError: !0,
              }),
              e();
          });
      }
      function A(t) {
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
        u = e(673750),
        o = e(786761),
        a = e(592125),
        s = e(375954),
        c = e(709054),
        d = e(539573),
        f = e(825829),
        _ = e(981631);
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
      let p = {},
        g = 0,
        S = {},
        m = {},
        C = (t, n) => {
          let e = (0, u.hc)(t),
            i = {
              id: e,
              isBlockedEdit: (0, u.Bz)(t),
              messageData: t,
              errorMessage: (0, d.uF)(t, n),
            };
          (p[e] = i), g++;
        },
        I = (t) => p[t],
        T = (t) => {
          null != p[t] && delete p[t], g++;
        };
      function h(t) {
        let { messageData: n, errorResponseBody: e } = t;
        return C(n, e), !0;
      }
      function v(t) {
        var n;
        let { channelId: e, messages: i } = t,
          r =
            null === (n = a.Z.getChannel(e)) || void 0 === n
              ? void 0
              : n.getGuildId();
        if (null == r) return !1;
        let l = m[r],
          u = i.reduce((t, n) => {
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
        return null != u && m[r] !== u && ((m[r] = u), !0);
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
          var n;
          return null == t
            ? null
            : null !== (n = I(t)) && void 0 !== n
              ? n
              : null;
        }
        getMessagesVersion() {
          return g;
        }
        getMentionRaidDetected(t) {
          var n;
          return null !== (n = S[t]) && void 0 !== n ? n : null;
        }
        getLastIncidentAlertMessage(t) {
          var n;
          return null !== (n = m[t]) && void 0 !== n ? n : null;
        }
      }
      E(N, "displayName", "GuildAutomodMessageStore"),
        E(N, "persistKey", "GuildAutomodMessages"),
        (n.Z = new N(l.Z, {
          CONNECTION_OPEN: function (t) {
            return (p = {}), g++, !0;
          },
          LOAD_MESSAGES_SUCCESS: v,
          LOCAL_MESSAGES_LOADED: v,
          MESSAGE_CREATE: function (t) {
            let { guildId: n, message: e } = t;
            if (null == n || e.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, o.e5)(e);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((m[n] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: h,
          MESSAGE_EDIT_FAILED_AUTOMOD: h,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
            let { messageId: n } = t;
            return T(n), !0;
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
            T(e);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
            let {
              guildId: n,
              decisionId: e,
              suspiciousMentionActivityUntil: i,
            } = t;
            return (
              (S[n] = {
                guildId: n,
                decisionId: e,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
            let { guildId: n } = t;
            return delete S[n], !0;
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
        u = e(297700),
        o = e(471885),
        a = e(981631),
        s = e(201950);
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
        return (0, i.jsx)(u.Z, {
          className: l()(e, c[n]),
          size: a,
          children: (0, i.jsx)(o.Z, {
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
      var i = e(570140),
        r = e(63568),
        l = e(434404),
        u = e(703656),
        o = e(430824),
        a = e(241559),
        s = e(327999),
        c = e(981631),
        d = e(176505);
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
      function E(t, n) {
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
      function g(t) {
        let n = (0, a.lv)(t),
          e = o.Z.getGuild(t);
        return (
          !!n &&
          null != e &&
          (((0, r.K2)(t, "Guild Sidebar") &&
            e.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
          e.hasFeature(c.oNc.COMMUNITY) ||
          e.hasFeature(c.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, u.uL)(c.Z5c.CHANNEL(t, d.oC.MEMBER_SAFETY)), !0)
            : (l.Z.open(e.id, c.pNK.MEMBERS), !0))
        );
      }
      async function S(t, n) {
        let e = await (0, s._2)(t, n);
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
          return u;
        },
        Je: function () {
          return a;
        },
        cf: function () {
          return o;
        },
        mh: function () {
          return s;
        },
      });
      var i = e(570140),
        r = e(881052),
        l = e(824389);
      let u = async (t) => {
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
        o = async (t, n) => {
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
          return p;
        },
        ue: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(442837);
      e(935369);
      var l = e(38618),
        u = e(160404),
        o = e(496675),
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
            [u, o] = i.useState(!0);
          return (
            i.useEffect(() => {
              u &&
                (n === c.M.NOT_FETCHED ||
                  (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(t))) &&
                e &&
                s.EB(t),
                o(!e);
            }, [t, e, n, u]),
            { listingsLoaded: n === c.M.FETCHED && !u }
          );
        },
        _ = function (t, n) {
          let { requireCurrentGuild: e } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            u = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            o = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(n);
              if ((!e || o === t) && u && i === c.M.NOT_FETCHED)
                try {
                  s.cf(t, n);
                } catch (t) {}
            }, [t, n, u, o, e]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
          );
        },
        E = function (t) {
          let { publishedOnly: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, u.Z], () =>
            c.Z.getGuildProductsForGuild(t, {
              publishedOnly: null != n ? n : !u.Z.isViewingServerShop(t),
            }),
          );
        },
        p = (t) =>
          (0, r.e7)([c.Z], () => (null == t ? void 0 : c.Z.getGuildProduct(t))),
        g = (t) =>
          (0, r.e7)([o.Z], () => null != t && o.Z.can(d.Plq.ADMINISTRATOR, t));
    },
    824389: function (t, n, e) {
      e.d(n, {
        Je: function () {
          return o;
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
        u = e(981631);
      let o = async (t, n, e) => {
          let {
            priceTier: l,
            imageName: o,
            createNewRole: a,
            unlinkRole: s,
            ...c
          } = e;
          try {
            return (
              await i.tn.patch({
                url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                body: {
                  ...c,
                  image_name: o,
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
        a = async (t, n) => {
          try {
            await i.tn.del({
              url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
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
                url: u.ANM.GUILD_PRODUCT_LISTINGS(t),
                rejectWithError: !1,
              })
            ).body.listings;
          } catch (t) {
            throw new r.Hx(t);
          }
        },
        c = async (t, n) => {
          try {
            return (
              await (0, l.Kb)({
                url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                rejectWithError: !1,
              })
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
                url: u.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, e, l),
                rejectWithError: !1,
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
        u,
        o,
        a,
        s = e(442837),
        c = e(759174),
        d = e(570140),
        f = e(70956),
        _ = e(709054);
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
      function C(t) {
        return "guild:".concat(t, ":published");
      }
      let I = new c.h(
          (t) => {
            let n = [m(t.guild_id)];
            return t.published && n.push(C(t.guild_id)), n;
          },
          (t) =>
            (function (t) {
              let n = _.default.extractTimestamp(t.id);
              return t.published ? -n : -n + 1e12;
            })(t),
        ),
        T = [];
      class h extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(t) {
          var n;
          return null !== (n = E[t]) && void 0 !== n ? n : 0;
        }
        getGuildProduct(t) {
          return I.get(t);
        }
        getGuildProductsForGuild(t, n) {
          let { publishedOnly: e } = n;
          return null == t ? T : I.values(e ? C(t) : m(t));
        }
        getGuildProductFetchState(t) {
          var n;
          return null !== (n = p[t]) && void 0 !== n ? n : 0;
        }
        isGuildProductsCacheExpired(t) {
          var n;
          return Date.now() - (null !== (n = g[t]) && void 0 !== n ? n : 0) > S;
        }
      }
      (a = "GuildProductsStore"),
        (o = "displayName") in (u = h)
          ? Object.defineProperty(u, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[o] = a),
        (n.Z = new h(d.Z, {
          CONNECTION_OPEN: function () {
            I.clear(), (E = {}), (p = {}), (g = {});
          },
          GUILD_PRODUCTS_FETCH: function (t) {
            let { guildId: n } = t;
            (E[n] = 1),
              [...I.values(m(n))].forEach((t) => {
                I.delete(t.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
            let { guildId: n, products: e } = t;
            (E[n] = 2),
              (g[n] = Date.now()),
              e.forEach((t) => {
                I.set(t.id, t), (p[t.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
            let { guildId: n } = t;
            E[n] = 2;
          },
          GUILD_PRODUCT_CREATE: function (t) {
            let { product: n } = t;
            I.set(n.id, n);
          },
          GUILD_PRODUCT_UPDATE: function (t) {
            let { product: n } = t;
            I.set(n.id, n);
          },
          GUILD_PRODUCT_DELETE: function (t) {
            let { productId: n } = t;
            I.delete(n);
          },
          GUILD_PRODUCT_FETCH: function (t) {
            let { productId: n } = t;
            p[n] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
            let { product: n } = t;
            (p[n.id] = 2), I.set(n.id, n);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (t) {
            let { productId: n, error: e } = t;
            (p[n] = 2), 404 === e.status && I.delete(n);
          },
        }));
    },
    863663: function (t, n, e) {
      e.d(n, {
        NB: function () {
          return u;
        },
        ar: function () {
          return c;
        },
        fG: function () {
          return s;
        },
        kg: function () {
          return o;
        },
        pM: function () {
          return a;
        },
      });
      var i = e(881052);
      e(496675);
      var r = e(981631),
        l = e(388032);
      let u = "_role";
      function o(t) {
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
            (e = u),
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
            image: u,
            imageName: o,
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
          u.startsWith("data:") &&
            (a || (null == e && (Object.keys(d).length > 0 || c))) &&
            ((d.image = u), (d.imageName = o));
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
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(302463);
      function u(t, n) {
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
          return u;
        },
        k: function () {
          return o;
        },
      });
      var i = e(192379),
        r = e(937615),
        l = e(388032);
      function u(t) {
        return i.useMemo(() => {
          if (null == t) return;
          let n = null != t.role_id,
            e = t.attachments_count > 0;
          if (n && e) return l.intl.string(l.t.ih4QMT);
          if (n) return l.intl.string(l.t.o9xphY);
          if (e) return l.intl.string(l.t.DWYJub);
        }, [t]);
      }
      function o(t) {
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
          return S;
        },
        m: function () {
          return g;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        u = e(481060),
        o = e(239091),
        a = e(166081),
        s = e(937615),
        c = e(942833),
        d = e(48691),
        f = e(231338),
        _ = e(388032),
        E = e(24753);
      function p(t) {
        let {
          showEditProduct: n,
          showUnpublishProduct: e,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: o,
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
          children: (0, i.jsxs)(u.Menu, {
            navId: "guild-product-context",
            onClose: S,
            "aria-label": _.intl.string(_.t.Z146dH),
            onSelect: m,
            children: [
              (0, i.jsxs)(u.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(u.MenuItem, {
                      id: "guild-product-edit",
                      label: _.intl.string(_.t.EEfce3),
                      action: s,
                    }),
                  r &&
                    (0, i.jsx)(u.MenuItem, {
                      id: "guild-product-copy-link",
                      label: _.intl.string(_.t.XR26ur),
                      icon: u.LinkIcon,
                      action: f,
                    }),
                  l &&
                    (0, i.jsx)(u.MenuItem, {
                      id: "guild-product-test-download",
                      label: _.intl.string(_.t.aXoI6e),
                      icon: u.DownloadIcon,
                      action: p,
                    }),
                ],
              }),
              (0, i.jsxs)(u.MenuGroup, {
                children: [
                  e &&
                    (0, i.jsx)(u.MenuItem, {
                      id: "guild-product-unpublish",
                      label: _.intl.string(_.t.QrkMlJ),
                      action: c,
                    }),
                  o &&
                    (0, i.jsx)(u.MenuItem, {
                      id: "guild-product-delete",
                      label: _.intl.string(_.t.zWjqvL),
                      color: "danger",
                      action: d,
                    }),
                ],
              }),
              (0, i.jsx)(u.MenuGroup, {
                children:
                  a &&
                  (0, i.jsx)(u.MenuItem, {
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
          showTestDownload: o,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: g,
          onCopyProductLink: S,
          onTestDownload: m,
          onReportProduct: C,
        } = t;
        return (0, i.jsx)("div", {
          onClick: (t) => {
            t.stopPropagation();
          },
          children: (0, i.jsx)(u.Popout, {
            position: "right",
            align: "top",
            spacing: -8,
            animation: u.Popout.Animation.FADE,
            renderPopout: (t) =>
              (0, i.jsx)(p, {
                ...t,
                guildId: e,
                productId: n.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: a,
                showTestDownload: o,
                showReportProduct: c,
                showDeleteProduct: s,
                onEditProduct: d,
                onUnpublishProduct: f,
                onDeleteProduct: g,
                onCopyLink: S,
                onTestDownload: m,
                onReportProduct: C,
              }),
            children: (t, e) => {
              let { isShown: r } = e;
              return (0, i.jsx)(u.Clickable, {
                ...t,
                "aria-label": _.intl.formatToPlainString(_.t.RtqjeH, {
                  productName: n.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: E.productActionMenuButton,
                children: (0, i.jsx)(u.MoreVerticalIcon, {
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
            product: n,
            guildId: e,
            onEditProduct: r,
            onUnpublishProduct: S,
            onDeleteProduct: m,
            onCopyProductLink: C,
            onTestDownload: I,
            disabled: T = !1,
          } = t,
          h = (0, a.U)(n, 600),
          v =
            null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
          N = (0, c.C)(n);
        return (0, i.jsxs)(u.ClickableContainer, {
          tag: "article",
          className: l()(E.productCardClickable, E.productCard, {
            [E.disabled]: T,
          }),
          onClick: T ? void 0 : r,
          onContextMenu: function (t) {
            (0, o.jW)(t, () =>
              Promise.resolve((t) =>
                (0, i.jsx)(p, {
                  ...t,
                  closePopout: o.Zy,
                  guildId: e,
                  productId: n.id,
                  showEditProduct: !0,
                  showUnpublishProduct: n.published,
                  showCopyLink: n.published,
                  showTestDownload: null != n.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: S,
                  onDeleteProduct: m,
                  onCopyLink: C,
                  onTestDownload: I,
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
              src: h,
              className: E.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: E.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: E.productInfoContent,
                  children: [
                    (0, i.jsx)(u.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: E.productName,
                      children: n.name,
                    }),
                    (0, i.jsx)(u.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: E.productDetails,
                      children: [
                        (0, i.jsx)(u.Text, {
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
                                (0, i.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: N,
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(u.Spacer, { size: 16 }),
                    n.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {}),
                  ],
                }),
                !T &&
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
                    onUnpublishProduct: S,
                    onDeleteProduct: m,
                    onCopyProductLink: C,
                    onTestDownload: I,
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
        u = e(377171),
        o = e(981631),
        a = e(388032),
        s = e(383011);
      function c(t) {
        let {
          label: n,
          backgroundColor: e = u.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: o,
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
              color: null != o ? o : "currentColor",
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
          iconColor: (0, l.Lq)(o.Ilk.PRIMARY_330),
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
        u = e(38618),
        o = e(423117),
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
        var n, e;
        let {
            guildId: c,
            children: d,
            refetchOnMount: f,
            includeSoftDeleted: _,
            countryCode: E,
            dontFetchWhileTrue: p,
          } = t,
          g = (0, l.e7)([u.Z], () => u.Z.isConnected()),
          S = (0, l.e7)([a.Z], () =>
            null != c
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(c)
              : a.M.FETCHED,
          ),
          m = r.useRef(f),
          C = r.useCallback(() => {
            if (null == c || !g || !0 === p) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(c);
            (m.current || t === a.M.NOT_FETCHED) &&
              ((m.current = !1),
              o.FP(c, { includeSoftDeleted: _, countryCode: E }));
          }, [g, c, _, E, p]);
        let I =
          ((n = S),
          (e = m),
          r.useMemo(() => n === a.M.FETCHED && !0 !== e.current, [n, e]));
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: I, fetchGroupListingsForGuild: C },
          children: d,
        });
      }
    },
    523361: function (t, n, e) {
      e.d(n, {
        HG: function () {
          return o;
        },
        Md: function () {
          return u;
        },
        Q8: function () {
          return l;
        },
      });
      var i = e(373228),
        r = e(388032);
      let l = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        u = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
        o = [
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
      var i = e(367907),
        r = e(200876),
        l = e(430824),
        u = e(594174);
      e(709054), e(523361);
      var o = e(981631),
        a = e(388032);
      function s(t) {
        return t;
      }
      function c(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: u, formatParams: o } = _({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(u, o);
      }
      function d(t) {
        let {
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = t,
          { content: u, formatParams: o } = _({
            username: n,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(u, o);
      }
      function f(t, n) {
        var e, i;
        let r = l.Z.getGuild(t),
          u =
            null !== (e = null == n ? void 0 : n.total_months_subscribed) &&
            void 0 !== e
              ? e
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: u,
          showWithDuration: u > 0,
          isRenewal:
            null !== (i = null == n ? void 0 : n.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function _(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = o.dG4,
            guildId: l,
            roleSubscriptionData: u,
          } = t,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, u);
        return (
          (n = _ ? (E ? a.t.Iy66Mz : a.t.eCgb2d) : E ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: n,
            formatParams: {
              username: e,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: r,
              tierName: null == u ? void 0 : u.tier_name,
              months: d,
            },
          }
        );
      }
      function E(t) {
        let n,
          {
            username: e,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = o.dG4,
            guildId: l,
            roleSubscriptionData: u,
          } = t,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, u);
        return (
          (n = _
            ? E
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : E
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(n, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == u ? void 0 : u.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d,
          })
        );
      }
      function p(t) {
        return (0, r.l)(t);
      }
      function g(t, n, e, r) {
        var l;
        i.ZP.trackWithMetadata(
          o.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: t,
            user_id:
              null === (l = u.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: n,
            message_id: e,
            role_subscription_listing_id: r,
          },
        );
      }
      function S(t, n) {
        var e;
        return {
          guild_id: t.guild_id,
          sender:
            null === (e = u.default.getCurrentUser()) || void 0 === e
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
          return o;
        },
        ab: function () {
          return u;
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
      function u(t) {
        return "roles" in t
          ? "emoji-".concat(t.id)
          : ""
              .concat(t.ref_type, "-")
              .concat(t.emoji_id, "-")
              .concat(t.name, "-")
              .concat(t.ref_id);
      }
      function o(t) {
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
          return g;
        },
        HQ: function () {
          return T;
        },
        JH: function () {
          return N;
        },
        QV: function () {
          return v;
        },
        YB: function () {
          return h;
        },
        _1: function () {
          return I;
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
          return C;
        },
        sp: function () {
          return m;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(442837),
        l = e(990169),
        u = e(935369),
        o = e(38618);
      e(823379);
      var a = e(730647),
        s = e(423117),
        c = e(289393),
        d = e(697227);
      let f = [],
        _ = function (t) {
          let {
              refetchOnMount: n = !1,
              includeSoftDeleted: e = !0,
              countryCode: u,
              dontFetchWhileTrue: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            d = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            f = (0, r.e7)([c.Z], () =>
              null != t
                ? c.Z.getSubscriptionGroupListingsForGuildFetchState(t)
                : c.M.FETCHED,
            ),
            _ = i.useRef(n);
          i.useEffect(() => {
            if (null == t || !d || !0 === a) return;
            let i = c.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (n || i === c.M.NOT_FETCHED) &&
              ((_.current = !1),
              s.FP(t, { includeSoftDeleted: e, countryCode: u }));
          }, [d, t, e, n, u, a]);
          let E = (0, l.Z)(_);
          return { listingsLoaded: f === c.M.FETCHED && !0 !== E };
        },
        E = function (t) {
          let { includeSoftDeleted: n = !1, includeUnpublished: e = !0 } =
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
                if (null != i && (!i.soft_deleted || !!n))
                  (i.published || e) && r.push(i);
              }
              return r;
            },
            [t, n, e],
          );
        },
        p = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionListing(t) : null,
          ),
        g = (t) => {
          let n = (0, a.f)("useGroupListingsForGuild");
          return (0, r.e7)([c.Z], () =>
            null != t && n ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
          );
        },
        S = function (t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            _(t),
            (0, r.Wu)([c.Z], () => {
              let e =
                  null != t ? c.Z.getSubscriptionGroupListingsForGuild(t) : f,
                i = [];
              for (let t of e)
                for (let e of t.subscription_listings_ids) {
                  let t = c.Z.getSubscriptionListing(e);
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
            l = i.useMemo(() => t.map(d.W), [t]),
            u = (0, r.Wu)(
              [c.Z],
              () =>
                l.filter(
                  (t) => !c.Z.getDidFetchListingForSubscriptionPlanId(t),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
              !n &&
                u.length > 0 &&
                (e(!0),
                Promise.all(u.map((t) => s.vY(t)))
                  .catch(() => {})
                  .then(() => {
                    e(!1);
                  }));
            }, [n, u]),
            { loading: n }
          );
        },
        C = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            error: e,
            submitting: t,
            deleteSubscriptionListing: async (t, e, i) => {
              try {
                return n(!0), r(null), await s._d(t, e, i), !0;
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            },
          };
        },
        I = () => {
          let [t, n] = (0, u.Z)(s.AE),
            { loading: e, error: i } = n;
          return { error: i, submitting: e, archiveSubscriptionListing: t };
        },
        T = () => {
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
                  await s.O0({
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
        h = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionSettings(t) : void 0,
          ),
        v = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            loading: t,
            updateSubscriptionsSettings: i.useCallback(async (t, e) => {
              n(!0), r(null);
              try {
                await s.W2(t, e);
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            }, []),
            error: e,
          };
        },
        N = () => {
          let [t, n] = i.useState(!1),
            [e, r] = i.useState(null);
          return {
            loading: t,
            fetchSubscriptionsSettings: i.useCallback(async (t) => {
              n(!0), r(null);
              try {
                await s.Qb(t);
              } catch (t) {
                r(t);
              } finally {
                n(!1);
              }
            }, []),
            error: e,
          };
        },
        A = (t) =>
          (0, r.e7)([c.Z], () =>
            null != t ? c.Z.getSubscriptionTrial(t) : null,
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
    944537: function (t, n, e) {
      e.d(n, {
        I: function () {
          return r;
        },
        n: function () {
          return o;
        },
      });
      var i,
        r,
        l = e(15729),
        u = e(731965);
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let o = (0, l.U)((t) => ({
        listings: {},
        setListing: (n, e) =>
          (0, u.j)(() =>
            t((t) => ({ listings: { ...t.listings, [n]: e(t.listings[n]) } })),
          ),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (n, e) =>
          (0, u.j)(() => {
            t((t) => ({
              editStateIdsForGroup: {
                ...t.editStateIdsForGroup,
                [n]: e(t.editStateIdsForGroup[n]),
              },
            }));
          }),
      }));
    },
    290348: function (t, n, e) {
      e.d(n, {
        B7: function () {
          return tn;
        },
        Ek: function () {
          return x;
        },
        F2: function () {
          return z;
        },
        GM: function () {
          return J;
        },
        GP: function () {
          return G;
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
          return Y;
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
          return D;
        },
        mR: function () {
          return y;
        },
        p9: function () {
          return U;
        },
        qs: function () {
          return j;
        },
        rU: function () {
          return K;
        },
      }),
        e(47120);
      var i = e(192379),
        r = e(512722),
        l = e.n(r),
        u = e(392711),
        o = e(772848),
        a = e(866442),
        s = e(731965),
        c = e(442837),
        d = e(80932),
        f = e(749210),
        _ = e(211266),
        E = e(339085),
        p = e(73346),
        g = e(817460),
        S = e(423117),
        m = e(584825),
        C = e(289393),
        I = e(790285),
        T = e(303737),
        h = e(971792),
        v = e(22902),
        N = e(403474),
        A = e(944537),
        O = e(293810),
        P = e(981631),
        L = e(474936);
      function b(t, n, e) {
        let r = (0, A.n)((t) => t.setListing),
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
          u = (0, A.n)((e) => {
            var i;
            return null === (i = e.listings[t]) || void 0 === i ? void 0 : i[n];
          });
        return [void 0 !== u ? u : e, l];
      }
      function M(t, n) {
        let e = (0, c.e7)([C.Z], () => C.Z.getSubscriptionListing(t)),
          r = (0, _.Z)(() => n);
        return i.useMemo(() => r(e), [e, r]);
      }
      function R(t) {
        let n = M(t, (t) => {
          var n;
          return null !== (n = null == t ? void 0 : t.name) && void 0 !== n
            ? n
            : "";
        });
        return b(t, "name", n);
      }
      function y(t) {
        let n = M(t, (t) => {
          var n;
          return null == t
            ? void 0
            : null === (n = t.subscription_plans[0]) || void 0 === n
              ? void 0
              : n.price;
        });
        return b(t, "priceTier", n);
      }
      function Z(t) {
        let n = M(t, (t) => {
          var n;
          return null !== (n = null == t ? void 0 : t.description) &&
            void 0 !== n
            ? n
            : "";
        });
        return b(t, "description", n);
      }
      function D(t, n) {
        let e = M(t, (t) => {
          if ((null == t ? void 0 : t.image_asset) != null)
            return (0, p._W)(t.application_id, t.image_asset, n);
        });
        return b(t, "image", e);
      }
      function U(t, n) {
        let e = (0, h.Z)(n, t);
        return b(
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
      function j(t, n) {
        let e = (0, h.Z)(n, t),
          r = (0, A.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e
              ? void 0
              : e.roleColor;
          }),
          l = (0, A.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e
              ? void 0
              : e.roleIcon;
          });
        return i.useMemo(() => {
          let t = { ...(null != e ? e : N.k) };
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
      function x(t, n) {
        let e = (0, h.Z)(n, t);
        return b(
          t,
          "roleColor",
          i.useMemo(() => {
            var t;
            return null !== (t = null == e ? void 0 : e.color) && void 0 !== t
              ? t
              : P.p6O;
          }, [e]),
        );
      }
      function G(t, n) {
        let e = (0, h.Z)(n, t);
        return b(
          t,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == e
                ? A.I.SOME_CHANNELS_ACCESS
                : (0, I.MT)(e)
                  ? A.I.ALL_CHANNELS_ACCESS
                  : A.I.SOME_CHANNELS_ACCESS,
            [e],
          ),
        );
      }
      let F = [];
      function w(t) {
        let n = M(t, (t) =>
          null == t ? F : t.role_benefits.benefits.filter(g.rC),
        );
        return b(t, "channelBenefits", n);
      }
      let H = [];
      function k(t) {
        let n = M(t, (t) =>
          null == t ? H : t.role_benefits.benefits.filter(g.lL),
        );
        return b(t, "intangibleBenefits", n);
      }
      let B = new Set();
      function W(t, n) {
        return 0 === t.length
          ? B
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
        let e = (0, h.Z)(n, t),
          r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
        return b(
          t,
          "tierEmojiIds",
          i.useMemo(() => (null == e ? B : W(r, e.id)), [r, e]),
        );
      }
      function Y(t) {
        var n;
        let e = (0, m.oC)(t),
          { selectedOption: i } = (0, v.Z)(
            null !== (n = null == e ? void 0 : e.active_trial) && void 0 !== n
              ? n
              : null,
          );
        return b(t, "trialInterval", null != i ? i : null);
      }
      function z(t) {
        var n;
        let e = (0, m.oC)(t);
        return b(
          t,
          "trialLimit",
          null !== (n = null == e ? void 0 : e.max_num_active_trial_users) &&
            void 0 !== n
            ? n
            : null,
        );
      }
      function K(t) {
        return (0, A.n)((n) => void 0 !== n.listings[t]);
      }
      function X(t) {
        return (0, A.n)((n) => {
          for (let e of t) if (void 0 !== n.listings[e]) return !0;
          return !1;
        });
      }
      function q(t) {
        let n = M(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
          [e] = b(t, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var t, i, r, l, u;
            return {
              price:
                null !== (t = null != e ? e : null == n ? void 0 : n.price) &&
                void 0 !== t
                  ? t
                  : 0,
              currency:
                null !== (i = null == n ? void 0 : n.currency) && void 0 !== i
                  ? i
                  : P.pKx.USD,
              interval:
                null !== (r = null == n ? void 0 : n.interval) && void 0 !== r
                  ? r
                  : L.rV.MONTH,
              interval_count:
                null !== (l = null == n ? void 0 : n.interval_count) &&
                void 0 !== l
                  ? l
                  : 1,
              id:
                null !== (u = null == n ? void 0 : n.id) && void 0 !== u
                  ? u
                  : "",
            };
          }, [n, e]),
        ];
      }
      function J(t) {
        var n;
        (n = t),
          (0, s.j)(() => {
            A.n.setState((t) => ({
              listings: {
                ...t.listings,
                [n]: t.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function Q(t) {
        let { guildId: n, editStateId: e } = t,
          i = C.Z.getSubscriptionListing(e);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          o = i.id,
          a = A.n.getState().listings[e];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: _,
          trialInterval: p,
          tierEmojiIds: g,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let m = C.Z.getSubscriptionTrial(o);
        if (
          ((null != _ || null != p || (null != m && null == p)) &&
            (await S.I1(n, o, { trial: p, max_num_active_trial_users: _ })),
          void 0 !== g)
        ) {
          let t = W(E.ZP.getGuildEmoji(n), r),
            e = (0, u.difference)([...g], [...t]),
            i = (0, u.difference)([...t], [...g]),
            l = e
              .map((t) => E.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null != t)
                  return (0, d.dv)({
                    guildId: n,
                    emojiId: t.id,
                    roles: [...t.roles, r],
                  });
              }),
            o = i
              .map((t) => E.ZP.getCustomEmojiById(t))
              .map((t) => {
                if (null == t) return;
                let e = t.roles.filter((t) => t !== r);
                return e.length > 0
                  ? (0, d.dv)({ guildId: n, emojiId: t.id, roles: e })
                  : (0, d.RE)(n, t.id);
              });
          await Promise.all([...l, ...o]);
        }
      }
      async function $(t) {
        let {
            guildId: n,
            editStateId: e,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = t,
          u = A.n.getState().listings[e];
        l()(null != u, "edit state does not exist");
        let {
          name: o,
          description: a,
          channelBenefits: s,
          intangibleBenefits: c,
          priceTier: d,
          image: f,
          channelAccessFormat: _,
        } = u;
        l()(null != o, "no name provided"),
          l()(null != a, "no description provided"),
          l()(null != d, "no priceTier provided"),
          l()(null != f, "no image provided");
        let E = _ === A.I.ALL_CHANNELS_ACCESS,
          p = i;
        null == p && (p = (await S.uw(n, {})).id),
          null != s && s.length > 0 && (await (0, T.r4)(n, s));
        let g = [...(null != s ? s : []), ...(null != c ? c : [])],
          m = (0, T.yL)(e, n);
        return S.dA({
          guildId: n,
          groupListingId: p,
          data: {
            can_access_all_channels: E,
            image: f,
            name: o,
            description: a,
            benefits: g,
            priceTier: d,
          },
          analyticsContext: m,
          onBeforeDispatchNewListing: r,
        });
      }
      function tt() {
        let [t, n] = i.useState(!1),
          [e, r] = i.useState();
        return {
          loading: t,
          error: e,
          handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let {
                guildId: e,
                editStateId: i,
                groupListingId: o,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: c,
              } = t,
              d = i,
              f = C.Z.getSubscriptionListing(d);
            try {
              if ((n(!0), r(void 0), null != f))
                l()(null != o, "groupListingId is null"),
                  await (function (t) {
                    var n;
                    let { guildId: e, editStateId: i, groupListingId: r } = t,
                      o = C.Z.getSubscriptionListing(i);
                    l()(null != o, "listing doesnt exist");
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
                      (s !== o.name && (m.name = s),
                      c !== o.description && (m.description = c),
                      _ !==
                        (null === (n = o.subscription_plans[0]) || void 0 === n
                          ? void 0
                          : n.price) && (m.priceTier = _),
                      null != E && (m.image = E),
                      null != p &&
                        (m.can_access_all_channels =
                          p === A.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let t = o.role_benefits.benefits.filter(g.rC),
                        n = o.role_benefits.benefits.filter(g.lL),
                        e = [...(null != d ? d : t), ...(null != f ? f : n)];
                      m.benefits = e;
                    }
                    return (0, u.isEmpty)(m)
                      ? o
                      : S.O0({
                          guildId: e,
                          groupListingId: r,
                          listingId: i,
                          data: m,
                        });
                  })({ guildId: e, editStateId: d, groupListingId: o });
              else {
                var _, E;
                let t = await $({
                  guildId: e,
                  editStateId: d,
                  groupListingId: o,
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
              return await Q({ guildId: e, editStateId: d }), J(d), !0;
            } catch (t) {
              if (!("getAnyErrorMessage" in t)) throw t;
              r(t);
            } finally {
              n(!1);
            }
          }, []),
        };
      }
      function tn(t, n) {
        let e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, m._k)(t, e),
          l = (0, A.n)((t) => t.editStateIdsForGroup[n]),
          u = (0, A.n)((t) => t.setEditStateIdsForGroup),
          a = (0, A.n)((t) => t.setListing),
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
            let t = (0, o.Z)();
            u(n, (n) => [...(null != n ? n : []), t]);
          }, [n, u]),
          d = i.useCallback(
            (t) => {
              let e = (0, o.Z)();
              return (
                u(n, (t) => [...(null != t ? t : []), e]),
                t.listings.forEach((n) => {
                  a(e, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map((t) => ({
                      ref_id: t.id,
                      ref_type: O.Qs.CHANNEL,
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
            [n, u, a],
          );
        return {
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
          removeEditStateId: i.useCallback(
            (t) => {
              u(n, (n) => (null != n ? n : []).filter((n) => n !== t));
            },
            [n, u],
          ),
        };
      }
    },
    144507: function (t, n, e) {
      e.d(n, {
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
        l = e(442837),
        u = e(223892),
        o = e(674180),
        a = e(496675),
        s = e(594174),
        c = e(923726),
        d = e(981631);
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
        (i[(i.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
        (i[(i.VISIBLE = 3)] = "VISIBLE");
      function f(t) {
        if (t.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (
          (function (t) {
            let {
              guild: n,
              isOwner: e,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: l,
              isUserInCreatorMonetizationEligibleCountry: u,
              shouldRestrictUpdatingRoleSubscriptionSettings: o,
            } = t;
            return (
              !!i &&
              (!o || !!e) &&
              (!!(
                n.hasFeature(d.oNc.CREATOR_MONETIZABLE) ||
                n.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!n.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && e && u))
            );
          })(t)
        )
          return 3;
        let {
          guild: n,
          isOwner: e,
          isUserInCreatorMonetizationEligibleCountry: i,
          isMonetizationWaitlistEnabledForGuild: r,
          isGuildEligibleForRoleSubscriptions: l,
          isExpeditedMonetizationOnboardingGuild: u,
        } = t;
        return e && !i && r
          ? 1
          : e && r && (l || u) && !n.hasFeature(d.oNc.COMMUNITY)
            ? 2
            : 0;
      }
      function _(t) {
        return 0 !== f(t);
      }
      function E(t) {
        let n = (0, c.Bt)(null == t ? void 0 : t.id),
          e = (0, u.Ob)(t),
          i = (0, u.gS)(null == t ? void 0 : t.id),
          r = p(t),
          a = (0, l.e7)([s.default], () => {
            let n = s.default.getCurrentUser();
            return null != n && (null == t ? void 0 : t.isOwner(n)) === !0;
          }),
          d = (0, u.Sd)(),
          { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, o.gX)(
            null == t ? void 0 : t.id,
          );
        return null == t
          ? 0
          : f({
              guild: t,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: n,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: e,
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
    697227: function (t, n, e) {
      e.d(n, {
        V: function () {
          return u;
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
      function u(t) {
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
    853439: function (t, n, e) {
      var i,
        r,
        l,
        u,
        o = e(442837),
        a = e(570140),
        s = e(131704),
        c = e(592125);
      let d = {},
        f = {};
      class _ extends (u = o.ZP.Store) {
        getTemplates(t) {
          return d[t];
        }
        getTemplateWithCategory(t, n) {
          var e;
          return null === (e = d[t]) || void 0 === e
            ? void 0
            : e.find((t) => t.category === n);
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
        (n.Z = new _(a.Z, {
          GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (t) {
            let { selectedTemplate: n, guildId: e } = t,
              i = Object.values(c.Z.getMutableGuildChannelsForGuild(e));
            n.listings.forEach((t) => {
              t.channels.forEach((t) => {
                let n = i.find((n) => n.name === t.name);
                if (void 0 !== n) t.id = n.id;
                else if (!(t.id in f)) {
                  let n = (0, s.kt)(t);
                  f[t.id] = n;
                }
              });
            });
          },
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (t) {
            let { templates: n, guildId: e } = t;
            d[e] = n;
          },
        }));
    },
    303737: function (t, n, e) {
      e.d(n, {
        GN: function () {
          return T;
        },
        be: function () {
          return I;
        },
        g4: function () {
          return m;
        },
        m7: function () {
          return S;
        },
        r4: function () {
          return h;
        },
        sO: function () {
          return N;
        },
        yL: function () {
          return v;
        },
      }),
        e(653041),
        e(47120),
        e(998459);
      var i = e(991637),
        r = e.n(i),
        l = e(399606),
        u = e(570140),
        o = e(333848),
        a = e(592125),
        s = e(923726),
        c = e(289393),
        d = e(944537),
        f = e(144507),
        _ = e(853439),
        E = e(981631),
        p = e(176505);
      r().shim();
      let g = {};
      function S(t) {
        let n = (0, l.e7)([a.Z], () => a.Z.getChannel(t)),
          e = (0, l.e7)([_.Z], () => _.Z.getChannel(t));
        return null != n ? n : e;
      }
      function m(t, n, e) {
        let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(t)),
          r = (0, d.n)((n) => n.editStateIdsForGroup[t]),
          u = (0, d.n)((t) => t.listings);
        if (void 0 === e || void 0 === n) return null;
        let o = i
            .filter((t) => !t.soft_deleted && !t.archived)
            .map((t) => t.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach((t) => {
            let n = u[t],
              e = null == n ? void 0 : n.priceTier;
            null != e && a.push(e);
          });
        let s = new Set(a.concat(o));
        if (!s.has(e)) return null;
        let f = n.indexOf(e);
        if (-1 === f) return null;
        let _ = [];
        for (
          let t = f + 1;
          t < n.length && (!s.has(n[t]) && _.push(n[t]), 3 !== _.length);
          t++
        );
        return _;
      }
      function C(t) {
        let n = d.n.getState().editStateIdsForGroup[t],
          e = d.n.getState().listings,
          i = new Set();
        null != n &&
          n.forEach((t) => {
            var n;
            let r =
              null === (n = e[t]) || void 0 === n ? void 0 : n.channelBenefits;
            null == r ||
              r.forEach((t) => {
                null != _.Z.getChannel(t.ref_id) && i.add(t.ref_id);
              });
          });
        let r = [];
        for (let n of i) {
          let e = _.Z.getChannel(n);
          if (null != e) {
            let n = e.set("guild_id", t);
            r.push(n);
          }
        }
        return r;
      }
      function I(t) {
        let n = C(t);
        (g[t] = n),
          n.forEach((t) => {
            let n = t.set(
              "flags",
              p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            u.Z.dispatch({ type: "CHANNEL_CREATE", channel: n });
          });
      }
      function T(t) {
        var n;
        (null !== (n = g[t]) && void 0 !== n ? n : C(t)).forEach((t) => {
          u.Z.dispatch({ type: "CHANNEL_DELETE", channel: t });
        });
      }
      async function h(t, n) {
        let e = [],
          i = [];
        if (
          (n.forEach((n) => {
            let r = _.Z.getChannel(n.ref_id);
            null != r &&
              (e.push(
                o.Z.createRoleSubscriptionTemplateChannel(
                  t,
                  r.name,
                  r.type,
                  r.topic,
                ),
              ),
              i.push(r));
          }),
          0 !== e.length)
        )
          (await Promise.allSettled(e)).forEach((e, r) => {
            let l = i[r].id;
            if ("fulfilled" === e.status) {
              let n = e.value.body,
                i = d.n.getState().editStateIdsForGroup[t],
                r = d.n.getState().listings;
              null != i &&
                i.forEach((t) => {
                  var e;
                  let i =
                    null === (e = r[t]) || void 0 === e
                      ? void 0
                      : e.channelBenefits;
                  null == i ||
                    i.forEach((t) => {
                      t.ref_id === l && (t.ref_id = n.id);
                    });
                });
            } else if (null != n) {
              let t = n.findIndex((t) => t.ref_id === l);
              -1 !== t && (null == n || n.splice(t, 1));
            }
          });
      }
      function v(t, n) {
        var e, i;
        let r = d.n.getState().listings[t],
          l = null == r ? void 0 : r.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let u = _.Z.getTemplateWithCategory(n, l);
        if (null == u)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let o = u.listings[0];
        if (
          (null == r ? void 0 : r.name) !== o.name ||
          (null == r ? void 0 : r.description) !== o.description ||
          (null == r ? void 0 : r.priceTier) !== o.price_tier ||
          (null == r ? void 0 : r.image) !== o.image ||
          (null == r ? void 0 : r.roleColor) !== o.role_color ||
          (null == r
            ? void 0
            : null === (e = r.channelBenefits) || void 0 === e
              ? void 0
              : e.length) !== o.channels.length ||
          (null == r
            ? void 0
            : null === (i = r.intangibleBenefits) || void 0 === i
              ? void 0
              : i.length) !== o.additional_perks.length
        )
          return { templateCategory: u.category, hasChangeFromTemplate: !0 };
        for (let t = 0; t < o.channels.length; t++) {
          let n = r.channelBenefits[t],
            e = o.channels[t];
          if (
            n.name !== e.name ||
            n.description !== e.description ||
            n.emoji_name !== e.emoji_name
          )
            return { templateCategory: u.category, hasChangeFromTemplate: !0 };
        }
        for (let t = 0; t < o.additional_perks.length; t++) {
          let n = r.intangibleBenefits[t],
            e = o.additional_perks[t];
          if (
            n.name !== e.name ||
            n.description !== e.description ||
            n.emoji_name !== e.emoji_name
          )
            return { templateCategory: u.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: u.category, hasChangeFromTemplate: !1 };
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
        u = e(243730);
      let o = {};
      function a(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e = (0, r.e7)([u.Z], () => u.Z.getRoleMemberCount(t));
        return (
          i.useEffect(() => {
            if (null == t) return;
            let e = o[t];
            !(null != e && n > 0 && Date.now() - e < n) &&
              ((o[t] = Date.now()), l.E(t));
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
        u = e(889564);
      let o = [];
      function a(t) {
        let n = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(t), [t]);
        return i.useMemo(
          () => (null == n ? o : n.filter((n) => (0, u.Kt)(n, t))),
          [n, t],
        );
      }
    },
    971792: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(430824),
        l = e(584825);
      function u(t, n) {
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
        u = e(474936),
        o = e(388032);
      function a(t) {
        return i.useMemo(() => {
          var n;
          let e = l.DN.map((t) => ({
              value: t,
              label:
                t.interval === u.rV.DAY && 7 === t.interval_count
                  ? o.intl.formatToPlainString(o.t.XfSsr6, {
                      defaultLimit: (0, r.iG)(t),
                    })
                  : (0, r.iG)(t),
              isDefault: t.interval === u.rV.DAY && 7 === t.interval_count,
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
        u = e(596454),
        o = e(377171),
        a = e(403910),
        s = e(549631),
        c = e(989384);
      function d(t) {
        var n;
        let { guildId: e, emojiId: r, emojiName: d, className: f } = t,
          _ = (0, a.Z)(e, r);
        return null != _ || null != d
          ? (0, i.jsx)(u.Z, {
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
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
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
        u = e(471445),
        o = e(823379),
        a = e(303737),
        s = e(293810),
        c = e(388032),
        d = e(507641);
      function f(t) {
        let { channelId: n } = t,
          e = (0, a.m7)(n);
        if (null == e)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(c.intl.string(c.t.bz1PZW), "]"),
          });
        let o = e.isMediaChannel() ? r.ImageIcon : (0, u.Th)(e.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: e }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != o &&
                  (0, i.jsx)(o, { className: d.icon, "aria-hidden": !0 }),
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
            (0, o.vE)(t);
        }
      }
    },
    893729: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = e(200651),
        r = e(192379),
        l = e(120356),
        u = e.n(l),
        o = e(442837),
        a = e(481060),
        s = e(518738),
        c = e(786761),
        d = e(3148),
        f = e(753206),
        _ = e(594174),
        E = e(5192),
        p = e(981631),
        g = e(388032),
        S = e(674055);
      function m(t) {
        var n;
        let {
            guildId: e,
            role: l,
            theme: m,
            content: C = g.intl.string(g.t["6OSasb"]),
            className: I,
          } = t,
          T = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
          h = E.ZP.useName(e, null, T),
          v = (0, s.Kz)(l),
          N = r.useMemo(
            () =>
              (0, c.e5)({
                ...(0, d.ZP)({
                  channelId: "0",
                  content: C,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: T,
                }),
                state: p.yb.SENT,
                id: "0",
              }),
            [T, C],
          ),
          A = {
            nick: h,
            colorString:
              null !== (n = l.colorString) && void 0 !== n ? n : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: m,
          children: (t) =>
            (0, i.jsx)("div", {
              className: u()(t, S.container, I),
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
    358555: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        l = e.n(r),
        u = e(442837),
        o = e(481060),
        a = e(540059),
        s = e(666188),
        c = e(372769),
        d = e(523751),
        f = e(623624),
        _ = e(290034),
        E = e(271383),
        p = e(594174),
        g = e(267642),
        S = e(981631),
        m = e(388032),
        C = e(70172);
      function I(t) {
        let { guild: n, isBannerVisible: e, disableBoostClick: r } = t,
          l = (0, u.e7)([p.default, E.ZP], () => {
            let t = p.default.getCurrentUser();
            return E.ZP.isMember(n.id, null == t ? void 0 : t.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = n;
        if (0 === s && a === S.Eu4.NONE) return null;
        let c = (t) => {
            t.stopPropagation(),
              t.preventDefault(),
              l &&
                !r &&
                (0, f.f)({
                  guildId: n.id,
                  location: {
                    section: S.jXE.GUILD_HEADER,
                    object: S.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          d = a === S.Eu4.NONE ? m.intl.string(m.t.c2wsn5) : g.nW(a),
          I = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: C.tierTooltipTitle, children: d }),
              (0, i.jsx)("div", {
                children: m.intl.format(m.t.If4iTU, { subscriberCount: s }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: C.guildIconContainer,
          children: (0, i.jsx)(o.Tooltip, {
            text: I,
            position: "bottom",
            "aria-label": null != d ? d : "",
            children: (t) =>
              (0, i.jsx)(o.Clickable, {
                ...t,
                className: C.__invalid_premiumGuildIcon,
                onClick: c,
                children: (0, i.jsx)(_.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: e
                    ? C.boostedGuildTierIconBackgroundWithVisibleBanner
                    : C.guildBadgeIcon,
                  iconClassName:
                    e && a !== S.Eu4.TIER_3
                      ? C.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function T(t) {
        let { guild: n, disableColor: e, disableBoostClick: r } = t;
        return (0, s.Z)(n)
          ? (0, i.jsx)("div", {
              className: C.guildIconV2Container,
              children: (0, i.jsx)(d.Z, {
                guild: n,
                tooltipPosition: "bottom",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                className: l()(C.guildBadge, { [C.disableColor]: e }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: C.guildIconContainer,
              children: (0, i.jsx)(c.Z, {
                guild: n,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                className: l()(C.guildBadge, { [C.disableColor]: e }),
              }),
            });
      }
      function h(t) {
        let { guild: n, disableBoostClick: e, ...r } = t,
          l = !(0, a.Q3)("GuildHeaderGuildBadge") && r.isBannerVisible;
        return (0, s.Z)(n)
          ? (0, i.jsx)(T, { guild: n, disableColor: !1, disableBoostClick: e })
          : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED)
            ? (0, i.jsx)(T, { guild: n, disableColor: !l })
            : (0, i.jsx)(I, {
                guild: n,
                isBannerVisible: l,
                disableBoostClick: e,
              });
      }
    },
    690221: function (t, n, e) {
      var i = e(200651),
        r = e(192379),
        l = e(481060),
        u = e(703656),
        o = e(981631);
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
                (t.charCode === o.yXg.SPACE || t.charCode === o.yXg.ENTER) &&
                  (t.preventDefault(),
                  null != e && (0, u.uL)(e),
                  null == s || s()),
                  null == c || c(t);
            },
            [e, c, s],
          ),
          E = r.useCallback(
            (t) => {
              if (!t.metaKey && !t.shiftKey && 0 === t.button)
                t.preventDefault(),
                  t.stopPropagation(),
                  null != e && (0, u.uL)(e),
                  null == s || s();
            },
            [e, s],
          ),
          p = (0, i.jsx)("a", {
            ref: n,
            href: e,
            onClick: E,
            onKeyPress: _,
            ...f,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: p });
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
        u = e.n(l),
        o = e(628238),
        a = e(492593),
        s = e(25015),
        c = e(963550),
        d = e(845080),
        f = e(46124);
      n.Z = r.memo(function (t) {
        var n;
        let {
            message: e,
            channel: r,
            compact: l,
            className: _,
            isGroupStart: E,
            hideSimpleEmbedContent: p = !0,
            disableInteraction: g,
          } = t,
          S = (0, o.A)(
            (null !== (n = e.editedTimestamp) && void 0 !== n
              ? n
              : e.timestamp
            ).valueOf(),
          ),
          { content: m } = (0, s.Z)(e, {
            hideSimpleEmbedContent: p,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: l,
          className: u()(_, {
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
        u = e(464891);
      let o = r.memo(u.ZP);
      function a(t) {
        let {
          message: n,
          channel: e,
          author: r,
          compact: u,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = t;
        return !(0, l.Z)(n) && (c || u)
          ? (0, i.jsx)(o, {
              message: n,
              channel: e,
              author: r,
              guildId: s,
              compact: u,
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
        u = e(981631);
      function o(t) {
        return {
          id: t.id,
          type: u.epS.SUBSCRIPTION,
          application_id: t.application_id,
          product_line: u.POd.APPLICATION,
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
          sku: o(t),
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
          skus: t.map(o),
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
          let u =
            null !== (n = e.subscription_listings) && void 0 !== n ? n : [];
          await Promise.all(
            u.map((n) => {
              if (n.subscription_plans[0].id === t)
                return r.GZ(n.id, void 0, void 0, !0);
            }),
          ),
            s(u);
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
        u,
        o,
        a,
        s = e(512722),
        c = e.n(s),
        d = e(442837),
        f = e(759174),
        _ = e(570140),
        E = e(959546),
        p = e(55563);
      function g(t) {
        return "subscription_listing:".concat(t);
      }
      function S(t) {
        return "application:".concat(t);
      }
      function m(t) {
        return "plan:".concat(t);
      }
      function C(t, n, e) {
        return "entitlement:".concat(t, ":").concat(e, ":").concat(n);
      }
      function I(t, n) {
        return "entitlement:".concat(n, ":").concat(t);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let T = new f.h(
          (t) => [S(t.application_id), ...t.subscription_listings_ids.map(g)],
          (t) => t.id,
        ),
        h = new f.h(
          (t) => [S(t.application_id), m(t.subscription_plans[0].id)],
          (t) => t.id,
        ),
        v = new f.h(
          (t) => [
            C(t.applicationId, t.isValid(null, p.Z), t.guildId),
            I(t.isValid(null, p.Z), t.guildId),
          ],
          (t) => t.id,
        ),
        N = {},
        A = {};
      function O(t) {
        var n;
        for (let e of (T.set(t.id, t),
        null !== (n = t.subscription_listings) && void 0 !== n ? n : []))
          (function (t) {
            h.set(t.id, t);
          })(e);
      }
      class P extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(t) {
          var n;
          return null !== (n = N[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionGroupListing(t) {
          return T.get(t);
        }
        getSubscriptionGroupListingForSubscriptionListing(t) {
          let n = T.values(g(t));
          return (
            c()(n.length <= 1, "Found multiple group listings for listing"),
            n[0]
          );
        }
        getSubscriptionListing(t) {
          return h.get(t);
        }
        getSubscriptionListingsForApplication(t) {
          return h.values(S(t));
        }
        getEntitlementsForGuildFetchState(t) {
          var n;
          return null !== (n = A[t]) && void 0 !== n ? n : 0;
        }
        getSubscriptionListingForPlan(t) {
          let n = h.values(m(t));
          return c()(n.length <= 1, "Found multiple listings for plan"), n[0];
        }
        getApplicationEntitlementsForGuild(t, n) {
          let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return v.values(C(t, e, n));
        }
        getEntitlementsForGuild(t) {
          let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return v.values(I(n, t));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (o = "displayName") in (u = P)
          ? Object.defineProperty(u, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[o] = a),
        (n.Z = new P(_.Z, {
          LOGOUT: function () {
            T.clear(), h.clear(), v.clear(), (N = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (t) {
            let { applicationId: n, groupListingId: e } = t;
            N[n] = 1;
            let i = T.get(e);
            if (null != i)
              for (let t of i.subscription_listings_ids) h.delete(t);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (t) {
            let { applicationId: n, groupListing: e } = t;
            (N[n] = 2), O(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (t) {
            let { applicationId: n } = t;
            N[n] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
            let { guildId: n } = t;
            A[n] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
            let { guildId: n, entitlements: e } = t;
            (A[n] = 2),
              e.forEach((t) => {
                let n = E.Z.createFromServer(t);
                v.set(n.id, n);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
            let { guildId: n } = t;
            A[n] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            t,
          ) {
            let { groupListing: n } = t;
            O(n);
          },
        }));
    },
    170671: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(692547),
        l = e(313201);
      function u(t) {
        let { isSelected: n, ...e } = t,
          u = (0, l.Dt)();
        return (0, i.jsxs)("svg", {
          ...e,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "url(#".concat(u, ")"),
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
        u = e(120356),
        o = e.n(u),
        a = e(481060),
        s = e(598077),
        c = e(231220),
        d = e(107720);
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
            u = 0;
          for (; u < l && u < t.length; ) {
            let n = u === t.length - 1;
            r.push(
              e(t[u] || null, n ? null : c.avatarMasked, "user-".concat(u), n),
            ),
              u++;
          }
          if (u < t.length) {
            let n = Math.min(t.length - u, 99);
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
            className: o()(t, c.container),
            ref: (t) => (this._ref = t),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...t) {
          super(...t),
            f(this, "_ref", void 0),
            f(this, "defaultRenderUser", (t, n, e, i) => {
              let { onClick: l, size: u, guildId: f } = this.props,
                _ = t instanceof s.Z ? t : null != t ? t.user : null;
              return null == _
                ? (0, r.jsx)("div", { className: o()(c.emptyUser, n) }, e)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: _.getAvatarURL(f, (0, a.getAvatarSize)(u)),
                      size: u,
                      "aria-label": _.username,
                      className: o()(n, d.cursorPointer, c.avatarSize),
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
    91047: function (t, n, e) {
      e.d(n, {
        Pv: function () {
          return l;
        },
        _j: function () {
          return u;
        },
        nm: function () {
          return o;
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
                e.e("51269"),
                e.e("13351"),
                e.e("33862"),
                e.e("92453"),
                e.e("62507"),
              ]).then(e.bind(e, 354589));
              return (e) => (0, i.jsx)(t, { ...e, user: n, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(t, async () => {
                let { default: t } = await Promise.all([
                  e.e("50506"),
                  e.e("79695"),
                  e.e("51269"),
                  e.e("90508"),
                  e.e("13351"),
                  e.e("33862"),
                  e.e("70205"),
                  e.e("92453"),
                  e.e("56826"),
                  e.e("2986"),
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
                    e.e("51269"),
                    e.e("13351"),
                    e.e("33862"),
                    e.e("92453"),
                    e.e("13125"),
                    e.e("54492"),
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
                    e.e("351"),
                  ]).then(e.bind(e, 881351));
                  return (e) => (0, i.jsx)(t, { ...e, user: n });
                });
      }
      function u(t, n) {
        let { user: l, channel: u, moderationAlertId: o, guildId: a, ...s } = n;
        if (
          (null == u ? void 0 : u.isGroupDM()) ||
          (null == u ? void 0 : u.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == u ? void 0 : u.getGuildId();
        null != c &&
          (0, r.jW)(t, async () => {
            let { default: t } = await Promise.all([
              e.e("13125"),
              e.e("9124"),
            ]).then(e.bind(e, 833737));
            return (n) =>
              (0, i.jsx)(t, {
                ...n,
                user: l,
                channelId: null == u ? void 0 : u.id,
                guildId: c,
                moderationAlertId: o,
                ...s,
              });
          });
      }
      function o(t, n) {
        let {
          user: l,
          guildId: u,
          analyticsLocations: o,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = n;
        (0, r.jW)(t, async () => {
          let { default: t } = await e.e("45130").then(e.bind(e, 246389));
          return (n) =>
            (0, i.jsx)(t, {
              ...n,
              user: l,
              guildId: u,
              analyticsLocations: o,
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
//# sourceMappingURL=01b13e3a6c66889b70bc.js.map
