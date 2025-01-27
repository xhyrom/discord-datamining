"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31135"],
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
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(481060),
        u = n(37234),
        d = n(230711),
        c = n(981631),
        h = n(388032),
        f = n(261121);
      function g(e, t, n) {
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
      class C extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: f.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: f.streamerModeEnabledImage }),
              (0, r.jsx)(a.Clickable, {
                className: s()(f.streamerModeEnabledBtn, {
                  [f.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: h.intl.string(h.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            g(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, u.jN)(c.S9g.USER_SETTINGS),
                d.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      g(C, "defaultProps", { disableButton: !1 }), (t.Z = C);
    },
    935369: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(479531),
        l = n(388032);
      function o(e) {
        let [t, n] = i.useState(!1),
          [o, s] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), o = 0; o < t; o++)
                i[o] = arguments[o];
              try {
                return s(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== l.intl.string(l.t.N2yb9f) &&
                  s(e instanceof r.Z ? e : new r.Z(e));
              } finally {
                n(!1);
              }
            },
            [e],
          ),
          { loading: t, error: o },
        ];
      }
    },
    724757: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(192379),
        r = n(924826),
        l = n(442837),
        o = n(607070);
      function s(e, t, n) {
        let s = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
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
          u = i.useCallback(
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
          d = i.useCallback(
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
          isEnabled: s,
          setFocus: a,
          scrollToStart: u,
          scrollToEnd: d,
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
    12498: function (e, t, n) {
      n(47120);
      var i,
        r,
        l,
        o,
        s = n(106351),
        a = n(442837),
        u = n(570140),
        d = n(38618);
      let c = new Set(),
        h = {};
      function f() {
        c.clear();
      }
      function g(e) {
        c.delete(e.guild.id);
      }
      class C extends (i = a.ZP.Store) {
        getChannelStatus(e) {
          var t;
          if (null != e && null != e.guild_id) {
            if (e.type === s.d.GUILD_VOICE)
              return (
                !c.has(e.guild_id) &&
                  (c.add(e.guild_id),
                  d.Z.getSocket().requestChannelStatuses(e.guild_id)),
                null === (t = h[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
              );
          }
        }
      }
      (o = "ChannelStatusStore"),
        (l = "displayName") in (r = C)
          ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = o),
        (t.Z = new C(u.Z, {
          GUILD_CREATE: g,
          GUILD_DELETE: g,
          CONNECTION_RESUMED: f,
          CONNECTION_OPEN: f,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            null == h[e.guildId] && (h[e.guildId] = {}),
              (h[e.guildId][e.id] = e.status);
          },
          CHANNEL_STATUSES: function (e) {
            for (let { id: t, status: n } of ((h[e.guildId] = {}), e.channels))
              h[e.guildId][t] = n;
          },
        }));
    },
    201895: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return d;
        },
      }),
        n(653041);
      var i = n(131704),
        r = n(699516),
        l = n(594174),
        o = n(933557),
        s = n(981631),
        a = n(388032);
      function u(e) {
        let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
        if (t)
          return n ? a.intl.string(a.t["oj+HOj"]) : a.intl.string(a.t.xI3TQU);
      }
      function d(e) {
        let t,
          {
            channel: n,
            unread: d = !1,
            mentionCount: c = 0,
            userCount: h,
            embeddedActivitiesCount: f,
            isSubscriptionGated: g,
            needSubscriptionToAccess: C,
          } = e,
          p = (0, o.F6)(n, l.default, r.Z);
        switch (n.type) {
          case s.d4z.DM:
            t = d ? a.t.F2MZsr : a.t.fYqXVV;
            break;
          case s.d4z.GROUP_DM:
            t = d ? a.t.fxxUo6 : a.t.lts3LS;
            break;
          case s.d4z.GUILD_STORE:
            t = a.t.Bo4msr;
            break;
          case s.d4z.GUILD_DIRECTORY:
            t = a.t["92EAFx"];
            break;
          case s.d4z.GUILD_ANNOUNCEMENT:
            t = c > 0 ? a.t.sDKIpq : d ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
          case s.d4z.GUILD_VOICE:
            let E = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name }),
            ];
            if (
              (c > 0 &&
                E.push(
                  a.intl.formatToPlainString(a.t["3l1GOz"], {
                    mentionCount: c,
                  }),
                ),
              d && E.push(a.intl.string(a.t.x5zAGR)),
              null != h)
            ) {
              let e = n.userLimit;
              null != e && e > 0
                ? E.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: h,
                      limit: e,
                    }),
                  )
                : E.push(
                    a.intl.formatToPlainString(a.t.GNIiAA, { userCount: h }),
                  );
            }
            null != f &&
              f > 0 &&
              E.push(
                a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: f }),
              );
            let _ = u({ isSubscriptionGated: g, needSubscriptionToAccess: C });
            return null != _ && E.push(_), E.join(", ");
          case s.d4z.GUILD_STAGE_VOICE:
            t = a.t.TPPk2d;
            break;
          default:
            t = i.Ec.has(n.type)
              ? c > 0
                ? a.t["ZL7+Iy"]
                : d
                  ? a.t.YlVvmZ
                  : a.t["0nZpiI"]
              : c > 0
                ? a.t.g8ONMz
                : d
                  ? a.t.smf1CQ
                  : a.t.s0JADg;
        }
        let I = [
            a.intl.formatToPlainString(t, { channelName: p, mentionCount: c }),
          ],
          S = u({ isSubscriptionGated: g, needSubscriptionToAccess: C });
        return null != S && I.push(S), I.join(", ");
      }
    },
    17079: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
      });
      var i = n(570140),
        r = n(155414);
      async function l(e, t) {
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
          return o;
        },
        eJ: function () {
          return a;
        },
        kL: function () {
          return u;
        },
        zJ: function () {
          return l;
        },
      });
      var i,
        r,
        l,
        o,
        s = n(388032);
      function a(e) {
        return {
          4: s.intl.string(s.t["5tzSRE"]),
          2: s.intl.string(s.t["WWIr5+"]),
          3: s.intl.string(s.t.WlSInZ),
          1: s.intl.string(s.t.uOU7Pz),
        }[e];
      }
      ((i = l || (l = {}))[(i.NAME = 1)] = "NAME"),
        (i[(i.PRICE_ASC = 2)] = "PRICE_ASC"),
        (i[(i.PRICE_DESC = 3)] = "PRICE_DESC"),
        (i[(i.NEWEST_ARRIVALS = 4)] = "NEWEST_ARRIVALS"),
        ((r = o || (o = {}))[(r.SUBS_FIRST = 1)] = "SUBS_FIRST"),
        (r[(r.PRODUCTS_FIRST = 2)] = "PRODUCTS_FIRST");
      let u = [4, 2, 3, 1];
    },
    76535: function (e, t, n) {
      n.d(t, {
        H: function () {
          return u;
        },
        R: function () {
          return a;
        },
      });
      var i = n(192379),
        r = n(442837),
        l = n(584825),
        o = n(17079),
        s = n(281320);
      function a(e, t) {
        let n = (0, r.e7)([s.Z], () => s.Z.getPriceTiersForGuildAndType(e, t)),
          l = (0, r.e7)([s.Z], () =>
            s.Z.getPriceTiersFetchStateForGuildAndType(e, t),
          );
        return (
          i.useEffect(() => {
            l === s.M.NOT_FETCHED && (0, o.T)(e, t);
          }, [e, l, t]),
          { loading: l === s.M.FETCHING, priceTiers: n }
        );
      }
      function u(e) {
        let {
          fetchSubscriptionsSettings: t,
          loading: n,
          error: r,
        } = (0, l.JH)();
        i.useEffect(() => {
          t(e);
        }, [t, e]);
        let o = (0, l.YB)(e);
        return {
          loaded: null != o && !n,
          subscriptionsSettings: o,
          loading: n,
          error: r,
        };
      }
    },
    155414: function (e, t, n) {
      n.d(t, {
        X: function () {
          return o;
        },
      });
      var i = n(544891),
        r = n(881052),
        l = n(981631);
      let o = async (e, t) => {
        try {
          return (
            await i.tn.get({
              url: l.ANM.PRICE_TIERS,
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
        l,
        o,
        s,
        a,
        u = n(442837),
        d = n(570140);
      let c = new Map(),
        h = new Map();
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      class f extends (r = u.ZP.Store) {
        getPriceTiersFetchStateForGuildAndType(e, t) {
          var n, i;
          return null !==
            (i = null === (n = h.get(e)) || void 0 === n ? void 0 : n.get(t)) &&
            void 0 !== i
            ? i
            : 0;
        }
        getPriceTiersForGuildAndType(e, t) {
          var n;
          return null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t);
        }
      }
      (a = "CreatorMonetizationStore"),
        (s = "displayName") in (o = f)
          ? Object.defineProperty(o, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = a),
        (t.Z = new f(d.Z, {
          CONNECTION_OPEN: function () {
            c.clear(), h.clear();
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !h.has(t) && h.set(t, new Map()), h.get(t).set(n, 1);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: i } = e;
            !h.has(t) && h.set(t, new Map()),
              h.get(t).set(n, 2),
              !c.has(t) && c.set(t, new Map()),
              c.get(t).set(n, i);
          },
          CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !h.has(t) && h.set(t, new Map()), h.get(t).set(n, 2);
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
          return s;
        },
      });
      var i = n(192379),
        r = n(695346),
        l = n(73346),
        o = n(834431);
      function s(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = r.QK.useSetting(),
          a = (0, o.n)(),
          u = n && a && s;
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, l._W)(
              e.application_id,
              e.image_asset,
              t,
              u ? void 0 : "webp",
            );
        }, [t, e, u]);
      }
    },
    629481: function (e, t, n) {
      var i, r, l, o;
      n.d(t, {
        Hr: function () {
          return s;
        },
        P4: function () {
          return u;
        },
        TR: function () {
          return d;
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
      let s = "hasClickedGuildShopProductPreviewTab",
        a = "hasClickedGuildShopChannelRow",
        u = "https://discord.com/servershop",
        d = "1 GB";
    },
    841762: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(481060),
        a = n(542508);
      function u(e) {
        let { alt: t, ...n } = e,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(s.Spinner, {
                type: s.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => o(!1) }),
          ],
        });
      }
      function d(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: r,
          aspectRatio: l,
          className: s,
          imageChildClassName: d,
          ...c
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(a.container, s),
          children: [
            (0, i.jsx)("img", { src: n, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: a.imageContainer,
              children: (0, i.jsx)(u, {
                src: t,
                alt: r,
                className: o()(a.image, d),
                ...c,
              }),
            }),
          ],
        });
      }
    },
    863750: function (e, t, n) {
      n(47120);
      var i,
        r = n(442837),
        l = n(570140);
      function o(e, t, n) {
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
      let s = {
          enable_recently_active: "Enable recently active channels",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          shop_include_unpublished: "[Shop] show unpublished items in shop",
          show_icymi_debug_scores: "Show ICYMI debug scores",
        },
        a = {};
      class u extends (i = r.ZP.DeviceSettingsStore) {
        getUserAgnosticState() {
          return { toggleStates: a };
        }
        initialize(e) {
          for (var t in s) {
            var n, i;
            let r =
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.toggleStates) || void 0 === n
                      ? void 0
                      : n[t]) &&
              void 0 !== i &&
              i;
            a[t] = r;
          }
        }
        get(e) {
          var t;
          return null !== (t = a[e]) && void 0 !== t && t;
        }
        set(e, t) {
          return (a[e] = t), t;
        }
        all() {
          return a;
        }
        allWithDescriptions() {
          return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, n, s[t]];
          });
        }
      }
      o(u, "displayName", "DevToolsDesignTogglesStore"),
        o(u, "persistKey", "DevToolsDesignTogglesStore"),
        (t.Z = new u(l.Z, {
          DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            a[e.toggle] = e.value;
          },
        }));
    },
    238428: function (e, t, n) {
      n(442837), n(863750);
    },
    479099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
        f: function () {
          return v;
        },
      }),
        n(47120);
      var i,
        r,
        l = n(200651),
        o = n(192379),
        s = n(120356),
        a = n.n(s),
        u = n(91192),
        d = n(442837),
        c = n(481060),
        h = n(239091),
        f = n(596454),
        g = n(607070),
        C = n(339085),
        p = n(695346),
        E = n(572004),
        _ = n(388032),
        I = n(680475);
      function S(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: r,
            className: s,
            onClick: S,
            onRemove: v,
            selected: m,
            ariaLabel: T,
          } = e,
          { name: N, emojiId: A, emojiName: y } = t,
          O = null != v,
          [L, P] = o.useState(!1),
          b = (0, d.e7)([C.ZP], () =>
            null != A ? C.ZP.getUsableCustomEmojiById(A) : null,
          ),
          R = O || null != S,
          Z = (!O || !L) && (null != A || null != y),
          w = 0 === i,
          M = o.useRef(null),
          D = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
          U = (e) => {
            let i = p.Sb.getSetting();
            E.wS &&
              i &&
              (0, h.jW)(e, async () => {
                let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, l.jsx)(e, { ...n, tag: t });
              });
          },
          G = (0, l.jsxs)(l.Fragment, {
            children: [
              Z
                ? (0, l.jsx)(f.Z, {
                    className: a()(I.emoji, { [I.small]: w }),
                    emojiId: A,
                    emojiName: y,
                    animated: !!(null == b ? void 0 : b.animated),
                    size: "reaction",
                  })
                : null,
              L &&
                O &&
                (0, l.jsx)("div", {
                  className: I.closeCircle,
                  children: (0, l.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: I.close,
                  }),
                }),
              (0, l.jsx)(c.Text, {
                variant: w ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: N,
              }),
            ],
          }),
          F = {
            key: t.id,
            className: a()(
              I.pill,
              {
                [I.disabled]: r,
                [I.clickable]: R,
                [I.small]: w,
                [I.selected]: m,
              },
              s,
            ),
            onClick: (e) => {
              null == S || S(e),
                null == v || v(t),
                !D && null != M.current && M.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => O && P(!0),
            onMouseLeave: () => O && P(!1),
          },
          x = (0, u.JA)("forum-tag-".concat(t.id));
        return R
          ? (0, l.jsx)(c.Clickable, {
              ...x,
              innerRef: M,
              focusProps: { ringTarget: M },
              "aria-label":
                null != T
                  ? T
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: N }),
              role: "button",
              "aria-pressed": m,
              ...F,
              children: G,
            })
          : (0, l.jsx)("div", { ...F, children: G });
      }
      function v(e) {
        let { tags: t, count: n, size: i = 1 } = e,
          r = 0 === i;
        return (0, l.jsx)(c.Tooltip, {
          "aria-label": _.intl.string(_.t["P/y+sr"]),
          text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
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
              children: (0, l.jsxs)(c.Text, {
                variant: r ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((r = i || (i = {}))[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (S.Sizes = i);
    },
    528011: function (e, t, n) {
      n.d(t, {
        g: function () {
          return p;
        },
        mI: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(149765),
        r = n(399606),
        l = n(581883),
        o = n(430824),
        s = n(496675),
        a = n(914010),
        u = n(594174),
        d = n(700785),
        c = n(709054),
        h = n(533244),
        f = n(487419),
        g = n(676770);
      n(981631);
      function C(e) {
        let t = (0, r.e7)([o.Z, s.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && i.Db(n, g.cv);
          }),
          n = (0, r.e7)([f.Z], () =>
            null != e ? f.Z.getGuildIncident(e) : null,
          ),
          l = null != n && (0, h.ur)(n);
        return {
          shouldShowIncidentActions: t,
          incidentData: n,
          isUnderLockdown: l,
        };
      }
      function p() {
        var e;
        let t = (function (e) {
            let t = u.default.getCurrentUser(),
              n = f.Z.getIncidentsByGuild();
            for (let r of c.default.keys(n).map((e) => o.Z.getGuild(e))) {
              if (null == r) continue;
              let l = n[r.id];
              if (
                !(
                  null == l ||
                  (!(0, h.i9)(l) && !(0, h.ur)(l)) ||
                  ((0, h.ur)(l) && r.id !== e)
                )
              ) {
                if (
                  i.Db(d.uB({ user: t, context: r, checkElevated: !1 }), g.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
          r = null != t ? n[t] : null,
          s = null != r && r.disableRaidAlertNag;
        return { show: null != t && !s, guildId: t };
      }
    },
    273504: function (e, t, n) {
      n.d(t, {
        I3: function () {
          return d;
        },
        Ic: function () {
          return I;
        },
        Lg: function () {
          return _;
        },
        OU: function () {
          return p;
        },
        RH: function () {
          return a;
        },
        Ux: function () {
          return r;
        },
        VW: function () {
          return c;
        },
        Vg: function () {
          return E;
        },
        Vk: function () {
          return f;
        },
        _6: function () {
          return S;
        },
        aj: function () {
          return C;
        },
        dc: function () {
          return v;
        },
        fX: function () {
          return s.f;
        },
        hu: function () {
          return h;
        },
        jj: function () {
          return l.j;
        },
        n4: function () {
          return u;
        },
        q4: function () {
          return o.q;
        },
        uE: function () {
          return g;
        },
      });
      var i,
        r,
        l = n(401653),
        o = n(95930),
        s = n(41381);
      ((i = r || (r = {}))[(i.PROFANITY = 1)] = "PROFANITY"),
        (i[(i.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (i[(i.SLURS = 3)] = "SLURS"),
        s.f.USER_PROFILE,
        s.f.SERVER_POLICY,
        s.f.MENTION_SPAM,
        s.f.ML_SPAM,
        s.f.DEFAULT_KEYWORD_LIST,
        s.f.KEYWORD;
      let a = 1e3,
        u = 100,
        d = 1e3,
        c = 10,
        h = 60,
        f = 1,
        g = 1,
        C = 260,
        p = 100,
        E = 1,
        _ = 50,
        I = 20,
        S = 150,
        v = "automod-profile-quarantine-alert";
    },
    787824: function (e, t, n) {
      n.d(t, {
        C: function () {
          return function e(t) {
            return null == t
              ? t
              : Object.keys(t).reduce((n, r) => {
                  let l = (0, i.camelCase)(r);
                  return (
                    "object" != typeof t[r] || Array.isArray(t[r])
                      ? (n[l] = t[r])
                      : (n[l] = e(t[r])),
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
                  let l = (0, i.snakeCase)(r);
                  return (
                    "object" != typeof t[r] || Array.isArray(t[r])
                      ? (n[l] = t[r])
                      : (n[l] = e(t[r])),
                    (n[l] = t[r]),
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
          return d;
        },
        _s: function () {
          return a;
        },
        kW: function () {
          return u;
        },
        km: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(273504),
        o = n(388032);
      function s(e) {
        return {
          [l.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("94005").then(n.bind(n, 144462));
                return (n) => {
                  var l;
                  return (0, i.jsx)(r, {
                    initialCustomMessage:
                      null !== (l = t.metadata.customMessage) && void 0 !== l
                        ? l
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
          [l.jj.FLAG_TO_CHANNEL]: (t, o) =>
            new Promise((s) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("74543").then(n.bind(n, 643611)),
                  a = t.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                return (n) =>
                  (0, i.jsx)(r, {
                    action: o,
                    isEdit: null != a,
                    triggerType: t.triggerType,
                    guildId: e,
                    onEditChannel: (e) => {
                      (o.metadata.channelId = e),
                        t.exemptChannels.add(e),
                        s(o),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (s(null), n.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("78273").then(n.bind(n, 41767)),
                  s = e.actions.find(
                    (e) => e.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, i.jsx)(r, {
                    action: t,
                    isEdit: null != s,
                    triggerType: e.triggerType,
                    onUpdateDuration: (e) => {
                      null != e && (t.metadata.durationSeconds = e),
                        o(t),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (o(null), n.onClose()),
                  });
              });
            }),
        };
      }
      function a(e, t, l, o) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("37483").then(n.bind(n, 241046));
          return (n) =>
            (0, i.jsx)(r, {
              ...n,
              automodDecision: {
                messageId: e,
                messageContent: t,
                decisionId: l,
                channel: o,
              },
            });
        });
      }
      function u(e, t) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("28382").then(n.bind(n, 537623));
          return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
        });
      }
      function d(e) {
        (0, r.openModal)((t) =>
          (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t["cY+Ooa"]),
            onConfirm: e,
            cancelText: o.intl.string(o.t["ETE/oK"]),
            ...t,
            children: (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              children: o.intl.string(o.t.arYQ2d),
            }),
          }),
        );
      }
    },
    36459: function (e, t, n) {
      n.d(t, {
        $Y: function () {
          return m;
        },
        JK: function () {
          return I;
        },
        Je: function () {
          return S;
        },
        T9: function () {
          return A;
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
          return _;
        },
      }),
        n(47120);
      var i = n(544891),
        r = n(570140),
        l = n(367907),
        o = n(430824),
        s = n(496675),
        a = n(823379),
        u = n(709054),
        d = n(177862),
        c = n(787824),
        h = n(226192),
        f = n(981631);
      function g(e) {
        return { type: e.type, metadata: (0, c.X)(e.metadata) };
      }
      function C(e) {
        var t, n;
        let i = (0, c.X)(e.triggerMetadata);
        return (
          null != i && delete i.keywordLists,
          {
            id: e.id,
            name: e.name,
            guild_id: e.guildId,
            event_type: e.eventType,
            trigger_type: e.triggerType,
            trigger_metadata: i,
            actions: e.actions.filter(a.lm).map(g),
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
      function p(e) {
        return { type: e.type, metadata: (0, c.C)(e.metadata) };
      }
      function E(e) {
        var t, n, i;
        let r = {
          id:
            null !== (t = e.id) && void 0 !== t
              ? t
              : u.default.fromTimestamp(Date.now()),
          name: e.name,
          guildId: e.guild_id,
          eventType: e.event_type,
          triggerType: e.trigger_type,
          triggerMetadata: (0, c.C)(e.trigger_metadata),
          actions: e.actions.filter(a.lm).map(p),
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
      async function _(e) {
        let t = C(e),
          n = await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
          });
        return (0, c.C)(n.body);
      }
      async function I(e) {
        let t = C(e);
        return (
          delete t.id,
          E(
            (
              await i.tn.post({
                url: f.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                body: t,
                rejectWithError: !1,
              })
            ).body,
          )
        );
      }
      async function S(e) {
        let t = C(e);
        return E(
          (
            await i.tn.patch({
              url: f.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: t,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function v(e, t) {
        return (
          await i.tn.del({
            url: f.ANM.GUILD_AUTOMOD_RULE(t, e),
            rejectWithError: !1,
          }),
          !0
        );
      }
      async function m(e) {
        let t = await i.tn.get({
          url: f.ANM.GUILD_AUTOMOD_RULES(e),
          rejectWithError: !1,
        });
        return Array.isArray(t.body) ? t.body.map(E) : [];
      }
      async function T(e, t, n) {
        if (!!s.Z.can(f.Plq.MANAGE_MESSAGES, t))
          await i.tn.post({
            url: f.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
          });
      }
      function N(e, t, n) {
        let r = o.Z.getGuild(e);
        if (null != r && !!s.Z.can(f.Plq.MANAGE_GUILD, r))
          (0, h.UV)(() => {
            (0, l.yw)(f.rMx.GUILD_AUTOMOD_FEEDBACK, {
              feedback_type: d.x2.MENTION_RAID_REMOVE_RESTRICTION,
              decision_id: t,
            }),
              i.tn.post({
                url: f.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e),
                rejectWithError: !0,
              }),
              n();
          });
      }
      function A(e) {
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
        l = n(570140),
        o = n(673750),
        s = n(786761),
        a = n(592125),
        u = n(375954),
        d = n(709054),
        c = n(539573),
        h = n(825829),
        f = n(981631);
      function g(e, t, n) {
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
      let C = {},
        p = 0,
        E = {},
        _ = {},
        I = (e, t) => {
          let n = (0, o.hc)(e),
            i = {
              id: n,
              isBlockedEdit: (0, o.Bz)(e),
              messageData: e,
              errorMessage: (0, c.uF)(e, t),
            };
          (C[n] = i), p++;
        },
        S = (e) => C[e],
        v = (e) => {
          null != C[e] && delete C[e], p++;
        };
      function m(e) {
        let { messageData: t, errorResponseBody: n } = e;
        return I(t, n), !0;
      }
      function T(e) {
        var t;
        let { channelId: n, messages: i } = e,
          r =
            null === (t = a.Z.getChannel(n)) || void 0 === t
              ? void 0
              : t.getGuildId();
        if (null == r) return !1;
        let l = _[r],
          o = i.reduce((e, t) => {
            var n;
            return t.type === f.uaV.AUTO_MODERATION_ACTION &&
              (null === (n = t.embeds) || void 0 === n
                ? void 0
                : n.some((e) => {
                    let { type: t } = e;
                    return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                  }))
              ? null == e || -1 === d.default.compare(e, t.id)
                ? t.id
                : void 0
              : e;
          }, l);
        return null != o && _[r] !== o && ((_[r] = o), !0);
      }
      class N extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((C = e.automodFailedMessages),
              (E = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: C,
            mentionRaidDetectionByGuild: E,
            lastIncidentAlertMessage: _,
          };
        }
        getMessage(e) {
          var t;
          return null == e
            ? null
            : null !== (t = S(e)) && void 0 !== t
              ? t
              : null;
        }
        getMessagesVersion() {
          return p;
        }
        getMentionRaidDetected(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : null;
        }
        getLastIncidentAlertMessage(e) {
          var t;
          return null !== (t = _[e]) && void 0 !== t ? t : null;
        }
      }
      g(N, "displayName", "GuildAutomodMessageStore"),
        g(N, "persistKey", "GuildAutomodMessages"),
        (t.Z = new N(l.Z, {
          CONNECTION_OPEN: function (e) {
            return (C = {}), p++, !0;
          },
          LOAD_MESSAGES_SUCCESS: T,
          LOCAL_MESSAGES_LOADED: T,
          MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, s.e5)(n);
            return !!(0, h.nY)(i) && !!(0, h.OP)(i) && ((_[t] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: m,
          MESSAGE_EDIT_FAILED_AUTOMOD: m,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return v(t), !0;
          },
          MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if (
              (null == t ? void 0 : t.body) == null ||
              t.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED
            )
              return !1;
            let n = t.body.id;
            if (null == n) return !1;
            v(n);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: t,
              decisionId: n,
              suspiciousMentionActivityUntil: i,
            } = e;
            return (
              (E[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete E[t], !0;
          },
        }));
    },
    290034: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(297700),
        s = n(471885),
        a = n(981631),
        u = n(201950);
      let d = {
          [a.Eu4.NONE]: u.iconBackgroundTierNone,
          [a.Eu4.TIER_1]: u.iconBackgroundTierOne,
          [a.Eu4.TIER_2]: u.iconBackgroundTierTwo,
          [a.Eu4.TIER_3]: u.iconBackgroundTierThree,
        },
        c = {
          [a.Eu4.NONE]: u.iconTierNone,
          [a.Eu4.TIER_1]: u.iconTierOne,
          [a.Eu4.TIER_2]: u.iconTierTwo,
          [a.Eu4.TIER_3]: u.iconTierThree,
        };
      function h(e) {
        let {
          premiumTier: t,
          iconBackgroundClassName: n,
          iconClassName: r,
          size: a,
        } = e;
        return (0, i.jsx)(o.Z, {
          className: l()(n, d[t]),
          size: a,
          children: (0, i.jsx)(s.Z, {
            tier: t,
            className: l()(r, u.boostedGuildIconGem, c[t]),
          }),
        });
      }
    },
    527379: function (e, t, n) {
      n.d(t, {
        Dr: function () {
          return C;
        },
        YO: function () {
          return f;
        },
        _X: function () {
          return p;
        },
        _o: function () {
          return g;
        },
        nb: function () {
          return E;
        },
        zO: function () {
          return h;
        },
      });
      var i = n(570140),
        r = n(63568),
        l = n(434404),
        o = n(703656),
        s = n(430824),
        a = n(241559),
        u = n(327999),
        d = n(981631),
        c = n(176505);
      async function h(e) {
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
      function g(e, t) {
        let { continuationToken: n, ...r } = t;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function C(e, t) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function p(e) {
        let t = (0, a.lv)(e),
          n = s.Z.getGuild(e);
        return (
          !!t &&
          null != n &&
          (((0, r.K2)(e, "Guild Sidebar") &&
            n.hasFeature(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) ||
          n.hasFeature(d.oNc.COMMUNITY) ||
          n.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, o.uL)(d.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
            : (l.Z.open(n.id, d.pNK.MEMBERS), !0))
        );
      }
      async function E(e, t) {
        let n = await (0, u._2)(e, t);
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
          return o;
        },
        Je: function () {
          return a;
        },
        cf: function () {
          return s;
        },
        mh: function () {
          return u;
        },
      });
      var i = n(570140),
        r = n(881052),
        l = n(824389);
      let o = async (e) => {
          i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
          try {
            let t = await l.uV(e);
            i.Z.dispatch({
              type: "GUILD_PRODUCTS_FETCH_SUCCESS",
              guildId: e,
              products: t,
            });
          } catch (t) {
            i.Z.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
          }
        },
        s = async (e, t) => {
          i.Z.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: t });
          try {
            let n = await l.p9(e, t);
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
        let r = await l.Je(e, t, n);
        return i.Z.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: r }), r;
      }
      async function u(e, t) {
        return (
          await l.mh(e, t),
          i.Z.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: t }),
          !0
        );
      }
    },
    267101: function (e, t, n) {
      n.d(t, {
        SO: function () {
          return p;
        },
        eD: function () {
          return h;
        },
        hO: function () {
          return f;
        },
        r: function () {
          return C;
        },
        ue: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837);
      n(935369);
      var l = n(38618),
        o = n(160404),
        s = n(496675),
        a = n(914010),
        u = n(495437),
        d = n(240864),
        c = n(981631);
      let h = (e) => {
          let t = (0, r.e7)(
              [d.Z],
              () =>
                null != e
                  ? d.Z.getGuildProductsForGuildFetchState(e)
                  : d.M.FETCHED,
              [e],
            ),
            n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, s] = i.useState(!0);
          return (
            i.useEffect(() => {
              o &&
                (t === d.M.NOT_FETCHED ||
                  (t === d.M.FETCHED && d.Z.isGuildProductsCacheExpired(e))) &&
                n &&
                u.EB(e),
                s(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === d.M.FETCHED && !o }
          );
        },
        f = function (e, t) {
          let { requireCurrentGuild: n } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            s = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = d.Z.getGuildProductFetchState(t);
              if ((!n || s === e) && o && i === d.M.NOT_FETCHED)
                try {
                  u.cf(e, t);
                } catch (e) {}
            }, [e, t, o, s, n]),
            (0, r.e7)([d.Z], () => d.Z.getGuildProduct(t))
          );
        },
        g = function (e) {
          let { publishedOnly: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([d.Z, o.Z], () =>
            d.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e),
            }),
          );
        },
        C = (e) =>
          (0, r.e7)([d.Z], () => (null == e ? void 0 : d.Z.getGuildProduct(e))),
        p = (e) =>
          (0, r.e7)([s.Z], () => null != e && s.Z.can(c.Plq.ADMINISTRATOR, e));
    },
    824389: function (e, t, n) {
      n.d(t, {
        Je: function () {
          return s;
        },
        gs: function () {
          return c;
        },
        mh: function () {
          return a;
        },
        p9: function () {
          return d;
        },
        uV: function () {
          return u;
        },
      });
      var i = n(544891),
        r = n(881052),
        l = n(73346),
        o = n(981631);
      let s = async (e, t, n) => {
          let {
            priceTier: l,
            imageName: s,
            createNewRole: a,
            unlinkRole: u,
            ...d
          } = n;
          try {
            return (
              await i.tn.patch({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                body: {
                  ...d,
                  image_name: s,
                  price_tier: l,
                  create_new_role: a,
                  unlink_role: u,
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
              url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
              rejectWithError: !1,
            });
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        u = async (e) => {
          try {
            return (
              await (0, l.Kb)({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e),
                rejectWithError: !1,
              })
            ).body.listings;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        d = async (e, t) => {
          try {
            return (
              await (0, l.Kb)({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1,
              })
            ).body;
          } catch (e) {
            throw new r.Hx(e);
          }
        },
        c = async (e) => {
          let { guildId: t, productId: n, attachmentId: l } = e;
          try {
            return (
              await i.tn.post({
                url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
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
        l,
        o,
        s,
        a,
        u = n(442837),
        d = n(759174),
        c = n(570140),
        h = n(70956),
        f = n(709054);
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let g = {},
        C = {},
        p = {},
        E = 10 * h.Z.Millis.MINUTE;
      function _(e) {
        return "guild:".concat(e);
      }
      function I(e) {
        return "guild:".concat(e, ":published");
      }
      let S = new d.h(
          (e) => {
            let t = [_(e.guild_id)];
            return e.published && t.push(I(e.guild_id)), t;
          },
          (e) =>
            (function (e) {
              let t = f.default.extractTimestamp(e.id);
              return e.published ? -t : -t + 1e12;
            })(e),
        ),
        v = [];
      class m extends (r = u.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : 0;
        }
        getGuildProduct(e) {
          return S.get(e);
        }
        getGuildProductsForGuild(e, t) {
          let { publishedOnly: n } = t;
          return null == e ? v : S.values(n ? I(e) : _(e));
        }
        getGuildProductFetchState(e) {
          var t;
          return null !== (t = C[e]) && void 0 !== t ? t : 0;
        }
        isGuildProductsCacheExpired(e) {
          var t;
          return Date.now() - (null !== (t = p[e]) && void 0 !== t ? t : 0) > E;
        }
      }
      (a = "GuildProductsStore"),
        (s = "displayName") in (o = m)
          ? Object.defineProperty(o, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = a),
        (t.Z = new m(c.Z, {
          CONNECTION_OPEN: function () {
            S.clear(), (g = {}), (C = {}), (p = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: t } = e;
            (g[t] = 1),
              [...S.values(_(t))].forEach((e) => {
                S.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, products: n } = e;
            (g[t] = 2),
              (p[t] = Date.now()),
              n.forEach((e) => {
                S.set(e.id, e), (C[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            g[t] = 2;
          },
          GUILD_PRODUCT_CREATE: function (e) {
            let { product: t } = e;
            S.set(t.id, t);
          },
          GUILD_PRODUCT_UPDATE: function (e) {
            let { product: t } = e;
            S.set(t.id, t);
          },
          GUILD_PRODUCT_DELETE: function (e) {
            let { productId: t } = e;
            S.delete(t);
          },
          GUILD_PRODUCT_FETCH: function (e) {
            let { productId: t } = e;
            C[t] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: t } = e;
            (C[t.id] = 2), S.set(t.id, t);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: t, error: n } = e;
            (C[t] = 2), 404 === n.status && S.delete(t);
          },
        }));
    },
    863663: function (e, t, n) {
      n.d(t, {
        NB: function () {
          return o;
        },
        ar: function () {
          return d;
        },
        fG: function () {
          return u;
        },
        kg: function () {
          return s;
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
      function s(e) {
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
        let { newRoleParams: t } = e;
        if (null != t && "" === t.name.trim()) {
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
      function u(e) {
        var t;
        let {
            guildProductListing: n,
            name: i,
            priceTier: r,
            description: l,
            image: o,
            imageName: s,
            isImageChanged: a,
            newRoleParams: u,
            hasUnsavedAttachmentChanges: d,
          } = e,
          c = {};
        (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (c.name = i),
          (null !== (t = null == n ? void 0 : n.description) && void 0 !== t
            ? t
            : "") !== l && (c.description = l),
          (null == n ? void 0 : n.price_tier) !== r &&
            null != r &&
            (c.priceTier = r),
          null != u && "" !== u.name.trim()
            ? (c.createNewRole = !0)
            : null === u && (c.unlinkRole = !0),
          o.startsWith("data:") &&
            (a || (null == n && (Object.keys(c).length > 0 || d))) &&
            ((c.image = o), (c.imageName = s));
        let h = Object.keys(c).length > 0 || d;
        return {
          changes: c,
          hasUnsavedChanges: h,
          canSaveForDraft: h,
          canSaveForPublished: h,
          canPublishOrUnpublish: !(null == n || h),
        };
      }
      function d(e, t) {
        return ""
          .concat(location.protocol, "//")
          .concat(location.host)
          .concat(r.Z5c.GUILD_PRODUCT(e, t));
      }
    },
    676651: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(302463);
      function o(e, t) {
        (0, r.openModalLazy)(
          async () => {
            let { default: r } = await n.e("73628").then(n.bind(n, 458961));
            return (n) => (0, i.jsx)(r, { guildId: e, productId: t, ...n });
          },
          { modalKey: l.Yz },
        );
      }
    },
    942833: function (e, t, n) {
      n.d(t, {
        C: function () {
          return o;
        },
        k: function () {
          return s;
        },
      });
      var i = n(192379),
        r = n(937615),
        l = n(388032);
      function o(e) {
        return i.useMemo(() => {
          if (null == e) return;
          let t = null != e.role_id,
            n = e.attachments_count > 0;
          if (t && n) return l.intl.string(l.t.ih4QMT);
          if (t) return l.intl.string(l.t.o9xphY);
          if (n) return l.intl.string(l.t.DWYJub);
        }, [e]);
      }
      function s(e) {
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
          return E;
        },
        m: function () {
          return p;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(481060),
        s = n(239091),
        a = n(166081),
        u = n(937615),
        d = n(942833),
        c = n(48691),
        h = n(231338),
        f = n(388032),
        g = n(24753);
      function C(e) {
        let {
          showEditProduct: t,
          showUnpublishProduct: n,
          showCopyLink: r,
          showTestDownload: l,
          showDeleteProduct: s,
          showReportProduct: a,
          onEditProduct: u,
          onUnpublishProduct: d,
          onDeleteProduct: c,
          onCopyLink: h,
          onTestDownload: C,
          onReportProduct: p,
          closePopout: E,
          onSelect: _,
        } = e;
        return (0, i.jsx)("div", {
          className: g.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: E,
            "aria-label": f.intl.string(f.t.Z146dH),
            onSelect: _,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  t &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-edit",
                      label: f.intl.string(f.t.EEfce3),
                      action: u,
                    }),
                  r &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-copy-link",
                      label: f.intl.string(f.t.XR26ur),
                      icon: o.LinkIcon,
                      action: h,
                    }),
                  l &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-test-download",
                      label: f.intl.string(f.t.aXoI6e),
                      icon: o.DownloadIcon,
                      action: C,
                    }),
                ],
              }),
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  n &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-unpublish",
                      label: f.intl.string(f.t.QrkMlJ),
                      action: d,
                    }),
                  s &&
                    (0, i.jsx)(o.MenuItem, {
                      id: "guild-product-delete",
                      label: f.intl.string(f.t.zWjqvL),
                      color: "danger",
                      action: c,
                    }),
                ],
              }),
              (0, i.jsx)(o.MenuGroup, {
                children:
                  a &&
                  (0, i.jsx)(o.MenuItem, {
                    id: "guild-product-report",
                    label: f.intl.string(f.t["6yUzvL"]),
                    color: "danger",
                    action: p,
                  }),
              }),
            ],
          }),
        });
      }
      function p(e) {
        let {
          product: t,
          guildId: n,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: s,
          showCopyLink: a,
          showDeleteProduct: u,
          showReportProduct: d,
          onEditProduct: c,
          onUnpublishProduct: h,
          onDeleteProduct: p,
          onCopyProductLink: E,
          onTestDownload: _,
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
              (0, i.jsx)(C, {
                ...e,
                guildId: n,
                productId: t.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: a,
                showTestDownload: s,
                showReportProduct: d,
                showDeleteProduct: u,
                onEditProduct: c,
                onUnpublishProduct: h,
                onDeleteProduct: p,
                onCopyLink: E,
                onTestDownload: _,
                onReportProduct: I,
              }),
            children: (e, n) => {
              let { isShown: r } = n;
              return (0, i.jsx)(o.Clickable, {
                ...e,
                "aria-label": f.intl.formatToPlainString(f.t.RtqjeH, {
                  productName: t.name,
                }),
                "aria-haspopup": "listbox",
                "aria-expanded": r,
                className: g.productActionMenuButton,
                children: (0, i.jsx)(o.MoreVerticalIcon, {
                  size: "md",
                  color: "currentColor",
                  className: g.productActionMenuIcon,
                  "aria-hidden": !0,
                }),
              });
            },
          }),
        });
      }
      function E(e) {
        let {
            product: t,
            guildId: n,
            onEditProduct: r,
            onUnpublishProduct: E,
            onDeleteProduct: _,
            onCopyProductLink: I,
            onTestDownload: S,
            disabled: v = !1,
          } = e,
          m = (0, a.U)(t, 600),
          T =
            null !== t.price_tier ? (0, u.T4)(t.price_tier, h.pK.USD) : void 0,
          N = (0, d.C)(t);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(g.productCardClickable, g.productCard, {
            [g.disabled]: v,
          }),
          onClick: v ? void 0 : r,
          onContextMenu: function (e) {
            (0, s.jW)(e, () =>
              Promise.resolve((e) =>
                (0, i.jsx)(C, {
                  ...e,
                  closePopout: s.Zy,
                  guildId: n,
                  productId: t.id,
                  showEditProduct: !0,
                  showUnpublishProduct: t.published,
                  showCopyLink: t.published,
                  showTestDownload: null != t.attachments,
                  showDeleteProduct: !0,
                  showReportProduct: !1,
                  onEditProduct: r,
                  onUnpublishProduct: E,
                  onDeleteProduct: _,
                  onCopyLink: I,
                  onTestDownload: S,
                  onReportProduct: () => {},
                }),
              ),
            );
          },
          "aria-label": f.intl.formatToPlainString(f.t["X/yAKi"], {
            productName: t.name,
          }),
          children: [
            (0, i.jsx)("img", {
              alt: "",
              src: m,
              className: g.productThumbnail,
            }),
            (0, i.jsxs)("div", {
              className: g.productInfo,
              children: [
                (0, i.jsxs)("div", {
                  className: g.productInfoContent,
                  children: [
                    (0, i.jsx)(o.Heading, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: g.productName,
                      children: t.name,
                    }),
                    (0, i.jsx)(o.Spacer, { size: 8 }),
                    (0, i.jsxs)("div", {
                      className: g.productDetails,
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
                                  className: g.dotSeparator,
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
                    t.published ? (0, i.jsx)(c.t, {}) : (0, i.jsx)(c.b, {}),
                  ],
                }),
                !v &&
                  (0, i.jsx)(p, {
                    product: t,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: E,
                    onDeleteProduct: _,
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
    48691: function (e, t, n) {
      n.d(t, {
        b: function () {
          return h;
        },
        t: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(44315),
        o = n(377171),
        s = n(981631),
        a = n(388032),
        u = n(383011);
      function d(e) {
        let {
          label: t,
          backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
          iconColor: s,
        } = e;
        return (0, i.jsxs)("div", {
          className: u.badge,
          style: { backgroundColor: n },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "always-white",
              className: u.__invalid_badgeText,
              children: t,
            }),
            (0, i.jsx)(l, {
              className: u.badgeIcon,
              color: null != s ? s : "currentColor",
              "aria-hidden": !0,
            }),
          ],
        });
      }
      function c() {
        return (0, i.jsx)(d, {
          label: a.intl.string(a.t["I+02Gh"]),
          backgroundColor: "#207B8D",
          icon: r.SparklesIcon,
        });
      }
      function h() {
        return (0, i.jsx)(d, {
          label: a.intl.string(a.t.TgsPaG),
          icon: r.PencilIcon,
          iconColor: (0, l.Lq)(s.Ilk.PRIMARY_330),
        });
      }
    },
    730647: function (e, t, n) {
      n.d(t, {
        f: function () {
          return d;
        },
        l: function () {
          return c;
        },
      }),
        n(411104);
      var i = n(200651),
        r = n(192379),
        l = n(399606),
        o = n(38618),
        s = n(423117),
        a = n(289393);
      let u = r.createContext(void 0);
      function d(e) {
        let t = r.useContext(u);
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
      function c(e) {
        var t, n;
        let {
            guildId: d,
            children: c,
            refetchOnMount: h,
            includeSoftDeleted: f,
            countryCode: g,
            dontFetchWhileTrue: C,
          } = e,
          p = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          E = (0, l.e7)([a.Z], () =>
            null != d
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(d)
              : a.M.FETCHED,
          ),
          _ = r.useRef(h),
          I = r.useCallback(() => {
            if (null == d || !p || !0 === C) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(d);
            (_.current || e === a.M.NOT_FETCHED) &&
              ((_.current = !1),
              s.FP(d, { includeSoftDeleted: f, countryCode: g }));
          }, [p, d, f, g, C]);
        let S =
          ((t = E),
          (n = _),
          r.useMemo(() => t === a.M.FETCHED && !0 !== n.current, [t, n]));
        return (0, i.jsx)(u.Provider, {
          value: { listingsLoaded: S, fetchGroupListingsForGuild: I },
          children: c,
        });
      }
    },
    523361: function (e, t, n) {
      n.d(t, {
        HG: function () {
          return s;
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
        s = [
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
          return c;
        },
        Tn: function () {
          return d;
        },
        _i: function () {
          return E;
        },
        eI: function () {
          return C;
        },
        vp: function () {
          return g;
        },
        y8: function () {
          return p;
        },
      });
      var i = n(367907),
        r = n(200876),
        l = n(430824),
        o = n(594174);
      n(709054), n(523361);
      var s = n(981631),
        a = n(388032);
      function u(e) {
        return e;
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(o, s);
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: s } = f({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(o, s);
      }
      function h(e, t) {
        var n, i;
        let r = l.Z.getGuild(e),
          o =
            null !== (n = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== n
              ? n
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: o,
          showWithDuration: o > 0,
          isRenewal:
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function f(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: r = s.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: d,
            totalMonthsSubscribed: c,
            showWithDuration: f,
            isRenewal: g,
          } = h(l, o);
        return (
          (t = f ? (g ? a.t.Iy66Mz : a.t.eCgb2d) : g ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: n,
              usernameHook: i,
              guildName: null == d ? void 0 : d.name,
              handleGuildNameClick: r,
              tierName: null == o ? void 0 : o.tier_name,
              months: c,
            },
          }
        );
      }
      function g(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: r = s.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: d,
            totalMonthsSubscribed: c,
            showWithDuration: f,
            isRenewal: g,
          } = h(l, o);
        return (
          (t = f
            ? g
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : g
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(t, {
            guildName: null == d ? void 0 : d.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: c,
          })
        );
      }
      function C(e) {
        return (0, r.l)(e);
      }
      function p(e, t, n, r) {
        var l;
        i.ZP.trackWithMetadata(
          s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id:
              null === (l = o.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: r,
          },
        );
      }
      function E(e, t) {
        var n;
        return {
          guild_id: e.guild_id,
          sender:
            null === (n = o.default.getCurrentUser()) || void 0 === n
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
          return s;
        },
        ab: function () {
          return o;
        },
        iG: function () {
          return a;
        },
        lL: function () {
          return d;
        },
        rC: function () {
          return u;
        },
      });
      var i = n(293810),
        r = n(474936),
        l = n(388032);
      function o(e) {
        return "roles" in e
          ? "emoji-".concat(e.id)
          : ""
              .concat(e.ref_type, "-")
              .concat(e.emoji_id, "-")
              .concat(e.name, "-")
              .concat(e.ref_id);
      }
      function s(e) {
        let { interval: t, interval_count: n } = e;
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
          })(t),
          { count: n },
        );
      }
      function a(e) {
        let { interval: t, interval_count: n } = e;
        switch (t) {
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
      function u(e) {
        return e.ref_type === i.Qs.CHANNEL;
      }
      function d(e) {
        return e.ref_type === i.Qs.INTANGIBLE;
      }
    },
    584825: function (e, t, n) {
      n.d(t, {
        GG: function () {
          return p;
        },
        HQ: function () {
          return v;
        },
        JH: function () {
          return N;
        },
        QV: function () {
          return T;
        },
        YB: function () {
          return m;
        },
        _1: function () {
          return S;
        },
        _k: function () {
          return g;
        },
        jO: function () {
          return C;
        },
        oC: function () {
          return A;
        },
        qi: function () {
          return E;
        },
        r4: function () {
          return I;
        },
        sp: function () {
          return _;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        r = n(442837),
        l = n(990169),
        o = n(935369),
        s = n(38618);
      n(823379);
      var a = n(730647),
        u = n(423117),
        d = n(289393),
        c = n(697227);
      let h = [],
        f = function (e) {
          let {
              refetchOnMount: t = !1,
              includeSoftDeleted: n = !0,
              countryCode: o,
              dontFetchWhileTrue: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            c = (0, r.e7)([s.Z], () => s.Z.isConnected()),
            h = (0, r.e7)([d.Z], () =>
              null != e
                ? d.Z.getSubscriptionGroupListingsForGuildFetchState(e)
                : d.M.FETCHED,
            ),
            f = i.useRef(t);
          i.useEffect(() => {
            if (null == e || !c || !0 === a) return;
            let i = d.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === d.M.NOT_FETCHED) &&
              ((f.current = !1),
              u.FP(e, { includeSoftDeleted: n, countryCode: o }));
          }, [c, e, n, t, o, a]);
          let g = (0, l.Z)(f);
          return { listingsLoaded: h === d.M.FETCHED && !0 !== g };
        },
        g = function (e) {
          let { includeSoftDeleted: t = !1, includeUnpublished: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.Wu)(
            [d.Z],
            () => {
              if (null == e) return [];
              let i = d.Z.getSubscriptionGroupListing(e);
              if (null == i) return [];
              let r = [];
              for (let e of i.subscription_listings_ids) {
                let i = d.Z.getSubscriptionListing(e);
                if (null != i && (!i.soft_deleted || !!t))
                  (i.published || n) && r.push(i);
              }
              return r;
            },
            [e, t, n],
          );
        },
        C = (e) =>
          (0, r.e7)([d.Z], () =>
            null != e ? d.Z.getSubscriptionListing(e) : null,
          ),
        p = (e) => {
          let t = (0, a.f)("useGroupListingsForGuild");
          return (0, r.e7)([d.Z], () =>
            null != e && t ? d.Z.getSubscriptionGroupListingsForGuild(e) : h,
          );
        },
        E = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1, sortDeletedListingsLast: !1 };
          return (
            f(e),
            (0, r.Wu)([d.Z], () => {
              let n =
                  null != e ? d.Z.getSubscriptionGroupListingsForGuild(e) : h,
                i = [];
              for (let e of n)
                for (let n of e.subscription_listings_ids) {
                  let e = d.Z.getSubscriptionListing(n);
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
        _ = (e) => {
          let [t, n] = i.useState(!1),
            l = i.useMemo(() => e.map(c.W), [e]),
            o = (0, r.Wu)(
              [d.Z],
              () =>
                l.filter(
                  (e) => !d.Z.getDidFetchListingForSubscriptionPlanId(e),
                ),
              [l],
            );
          return (
            i.useEffect(() => {
              !t &&
                o.length > 0 &&
                (n(!0),
                Promise.all(o.map((e) => u.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [t, o]),
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
                return t(!0), r(null), await u._d(e, n, i), !0;
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            },
          };
        },
        S = () => {
          let [e, t] = (0, o.Z)(u.AE),
            { loading: n, error: i } = t;
          return { error: i, submitting: n, archiveSubscriptionListing: e };
        },
        v = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async (e) => {
              let { guildId: n, groupListingId: i, listingId: l } = e;
              try {
                return (
                  t(!0),
                  r(null),
                  await u.O0({
                    guildId: n,
                    groupListingId: i,
                    listingId: l,
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
        m = (e) =>
          (0, r.e7)([d.Z], () =>
            null != e ? d.Z.getSubscriptionSettings(e) : void 0,
          ),
        T = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
              t(!0), r(null);
              try {
                await u.W2(e, n);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        N = () => {
          let [e, t] = i.useState(!1),
            [n, r] = i.useState(null);
          return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async (e) => {
              t(!0), r(null);
              try {
                await u.Qb(e);
              } catch (e) {
                r(e);
              } finally {
                t(!1);
              }
            }, []),
            error: n,
          };
        },
        A = (e) =>
          (0, r.e7)([d.Z], () =>
            null != e ? d.Z.getSubscriptionTrial(e) : null,
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
          return s;
        },
      });
      var i,
        r,
        l = n(15729),
        o = n(731965);
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let s = (0, l.U)((e) => ({
        listings: {},
        setListing: (t, n) =>
          (0, o.j)(() =>
            e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } })),
          ),
        editStateIdsForGroup: {},
        setEditStateIdsForGroup: (t, n) =>
          (0, o.j)(() => {
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
          return et;
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
          return F;
        },
        H9: function () {
          return X;
        },
        Lo: function () {
          return q;
        },
        PK: function () {
          return w;
        },
        R7: function () {
          return B;
        },
        TT: function () {
          return W;
        },
        UE: function () {
          return j;
        },
        XZ: function () {
          return z;
        },
        Xo: function () {
          return ee;
        },
        _T: function () {
          return R;
        },
        d9: function () {
          return M;
        },
        mR: function () {
          return Z;
        },
        p9: function () {
          return D;
        },
        qs: function () {
          return U;
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
        s = n(772848),
        a = n(866442),
        u = n(731965),
        d = n(442837),
        c = n(80932),
        h = n(749210),
        f = n(211266),
        g = n(339085),
        C = n(73346),
        p = n(817460),
        E = n(423117),
        _ = n(584825),
        I = n(289393),
        S = n(790285),
        v = n(303737),
        m = n(971792),
        T = n(22902),
        N = n(403474),
        A = n(944537),
        y = n(293810),
        O = n(981631),
        L = n(474936);
      function P(e, t, n) {
        let r = (0, A.n)((e) => e.setListing),
          l = i.useCallback(
            (i) => {
              r(e, (e) => {
                var r;
                let l =
                  null !== (r = null == e ? void 0 : e[t]) && void 0 !== r
                    ? r
                    : n;
                return Object.assign({}, e, {
                  [t]: "function" == typeof i ? i(l) : i,
                });
              });
            },
            [r, e, t, n],
          ),
          o = (0, A.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
          });
        return [void 0 !== o ? o : n, l];
      }
      function b(e, t) {
        let n = (0, d.e7)([I.Z], () => I.Z.getSubscriptionListing(e)),
          r = (0, f.Z)(() => t);
        return i.useMemo(() => r(n), [n, r]);
      }
      function R(e) {
        let t = b(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.name) && void 0 !== t
            ? t
            : "";
        });
        return P(e, "name", t);
      }
      function Z(e) {
        let t = b(e, (e) => {
          var t;
          return null == e
            ? void 0
            : null === (t = e.subscription_plans[0]) || void 0 === t
              ? void 0
              : t.price;
        });
        return P(e, "priceTier", t);
      }
      function w(e) {
        let t = b(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.description) &&
            void 0 !== t
            ? t
            : "";
        });
        return P(e, "description", t);
      }
      function M(e, t) {
        let n = b(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, C._W)(e.application_id, e.image_asset, t);
        });
        return P(e, "image", n);
      }
      function D(e, t) {
        let n = (0, m.Z)(t, e);
        return P(
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
      function U(e, t) {
        let n = (0, m.Z)(t, e),
          r = (0, A.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleColor;
          }),
          l = (0, A.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != n ? n : N.k) };
          if (void 0 !== l) {
            var t, i;
            (e.icon = null !== (t = l.icon) && void 0 !== t ? t : ""),
              (e.unicodeEmoji =
                null !== (i = l.unicodeEmoji) && void 0 !== i ? i : "");
          }
          return (
            void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e
          );
        }, [n, l, r]);
      }
      function G(e, t) {
        let n = (0, m.Z)(t, e);
        return P(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e
              ? e
              : O.p6O;
          }, [n]),
        );
      }
      function F(e, t) {
        let n = (0, m.Z)(t, e);
        return P(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == n
                ? A.I.SOME_CHANNELS_ACCESS
                : (0, S.MT)(n)
                  ? A.I.ALL_CHANNELS_ACCESS
                  : A.I.SOME_CHANNELS_ACCESS,
            [n],
          ),
        );
      }
      let x = [];
      function j(e) {
        let t = b(e, (e) =>
          null == e ? x : e.role_benefits.benefits.filter(p.rC),
        );
        return P(e, "channelBenefits", t);
      }
      let H = [];
      function B(e) {
        let t = b(e, (e) =>
          null == e ? H : e.role_benefits.benefits.filter(p.lL),
        );
        return P(e, "intangibleBenefits", t);
      }
      let V = new Set();
      function k(e, t) {
        return 0 === e.length
          ? V
          : new Set(
              e
                .filter((e) => e.roles.includes(t))
                .map((e) => {
                  let { id: t } = e;
                  return t;
                }),
            );
      }
      function z(e, t) {
        let n = (0, m.Z)(t, e),
          r = (0, d.Wu)([g.ZP], () => g.ZP.getGuildEmoji(t), [t]);
        return P(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == n ? V : k(r, n.id)), [r, n]),
        );
      }
      function W(e) {
        var t;
        let n = (0, _.oC)(e),
          { selectedOption: i } = (0, T.Z)(
            null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t
              ? t
              : null,
          );
        return P(e, "trialInterval", null != i ? i : null);
      }
      function Y(e) {
        var t;
        let n = (0, _.oC)(e);
        return P(
          e,
          "trialLimit",
          null !== (t = null == n ? void 0 : n.max_num_active_trial_users) &&
            void 0 !== t
            ? t
            : null,
        );
      }
      function K(e) {
        return (0, A.n)((t) => void 0 !== t.listings[e]);
      }
      function q(e) {
        return (0, A.n)((t) => {
          for (let n of e) if (void 0 !== t.listings[n]) return !0;
          return !1;
        });
      }
      function X(e) {
        let t = b(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [n] = P(e, "priceTier", void 0);
        return [
          i.useMemo(() => {
            var e, i, r, l, o;
            return {
              price:
                null !== (e = null != n ? n : null == t ? void 0 : t.price) &&
                void 0 !== e
                  ? e
                  : 0,
              currency:
                null !== (i = null == t ? void 0 : t.currency) && void 0 !== i
                  ? i
                  : O.pKx.USD,
              interval:
                null !== (r = null == t ? void 0 : t.interval) && void 0 !== r
                  ? r
                  : L.rV.MONTH,
              interval_count:
                null !== (l = null == t ? void 0 : t.interval_count) &&
                void 0 !== l
                  ? l
                  : 1,
              id:
                null !== (o = null == t ? void 0 : t.id) && void 0 !== o
                  ? o
                  : "",
            };
          }, [t, n]),
        ];
      }
      function J(e) {
        var t;
        (t = e),
          (0, u.j)(() => {
            A.n.setState((e) => ({
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
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          s = i.id,
          a = A.n.getState().listings[n];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: u,
          roleIcon: d,
          trialLimit: f,
          trialInterval: C,
          tierEmojiIds: p,
        } = a;
        (void 0 !== u || void 0 !== d) &&
          (await h.Z.updateRole(t, r, {
            color: u,
            icon: null == d ? void 0 : d.icon,
            unicodeEmoji: null == d ? void 0 : d.unicodeEmoji,
          }));
        let _ = I.Z.getSubscriptionTrial(s);
        if (
          ((null != f || null != C || (null != _ && null == C)) &&
            (await E.I1(t, s, { trial: C, max_num_active_trial_users: f })),
          void 0 !== p)
        ) {
          let e = k(g.ZP.getGuildEmoji(t), r),
            n = (0, o.difference)([...p], [...e]),
            i = (0, o.difference)([...e], [...p]),
            l = n
              .map((e) => g.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null != e)
                  return (0, c.dv)({
                    guildId: t,
                    emojiId: e.id,
                    roles: [...e.roles, r],
                  });
              }),
            s = i
              .map((e) => g.ZP.getCustomEmojiById(e))
              .map((e) => {
                if (null == e) return;
                let n = e.roles.filter((e) => e !== r);
                return n.length > 0
                  ? (0, c.dv)({ guildId: t, emojiId: e.id, roles: n })
                  : (0, c.RE)(t, e.id);
              });
          await Promise.all([...l, ...s]);
        }
      }
      async function $(e) {
        let {
            guildId: t,
            editStateId: n,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = e,
          o = A.n.getState().listings[n];
        l()(null != o, "edit state does not exist");
        let {
          name: s,
          description: a,
          channelBenefits: u,
          intangibleBenefits: d,
          priceTier: c,
          image: h,
          channelAccessFormat: f,
        } = o;
        l()(null != s, "no name provided"),
          l()(null != a, "no description provided"),
          l()(null != c, "no priceTier provided"),
          l()(null != h, "no image provided");
        let g = f === A.I.ALL_CHANNELS_ACCESS,
          C = i;
        null == C && (C = (await E.uw(t, {})).id),
          null != u && u.length > 0 && (await (0, v.r4)(t, u));
        let p = [...(null != u ? u : []), ...(null != d ? d : [])],
          _ = (0, v.yL)(n, t);
        return E.dA({
          guildId: t,
          groupListingId: C,
          data: {
            can_access_all_channels: g,
            image: h,
            name: s,
            description: a,
            benefits: p,
            priceTier: c,
          },
          analyticsContext: _,
          onBeforeDispatchNewListing: r,
        });
      }
      function ee() {
        let [e, t] = i.useState(!1),
          [n, r] = i.useState();
        return {
          loading: e,
          error: n,
          handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let {
                guildId: n,
                editStateId: i,
                groupListingId: s,
                onBeforeDispatchNewListing: a,
                onAfterDispatchNewListing: d,
              } = e,
              c = i,
              h = I.Z.getSubscriptionListing(c);
            try {
              if ((t(!0), r(void 0), null != h))
                l()(null != s, "groupListingId is null"),
                  await (function (e) {
                    var t;
                    let { guildId: n, editStateId: i, groupListingId: r } = e,
                      s = I.Z.getSubscriptionListing(i);
                    l()(null != s, "listing doesnt exist");
                    let a = A.n.getState().listings[i];
                    l()(null != a, "edit state does not exist");
                    let {
                        name: u,
                        description: d,
                        channelBenefits: c,
                        intangibleBenefits: h,
                        priceTier: f,
                        image: g,
                        channelAccessFormat: C,
                      } = a,
                      _ = {};
                    if (
                      (u !== s.name && (_.name = u),
                      d !== s.description && (_.description = d),
                      f !==
                        (null === (t = s.subscription_plans[0]) || void 0 === t
                          ? void 0
                          : t.price) && (_.priceTier = f),
                      null != g && (_.image = g),
                      null != C &&
                        (_.can_access_all_channels =
                          C === A.I.ALL_CHANNELS_ACCESS),
                      null != c || null != h)
                    ) {
                      let e = s.role_benefits.benefits.filter(p.rC),
                        t = s.role_benefits.benefits.filter(p.lL),
                        n = [...(null != c ? c : e), ...(null != h ? h : t)];
                      _.benefits = n;
                    }
                    return (0, o.isEmpty)(_)
                      ? s
                      : E.O0({
                          guildId: n,
                          groupListingId: r,
                          listingId: i,
                          data: _,
                        });
                  })({ guildId: n, editStateId: c, groupListingId: s });
              else {
                var f, g;
                let e = await $({
                  guildId: n,
                  editStateId: c,
                  groupListingId: s,
                  onBeforeDispatchNewListing: a,
                });
                (c = e.id),
                  (f = i),
                  (g = c),
                  (0, u.j)(() => {
                    A.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [g]: e.listings[f],
                        [f]: void 0,
                      },
                    }));
                  }),
                  null == d || d(e);
              }
              return await Q({ guildId: n, editStateId: c }), J(c), !0;
            } catch (e) {
              if (!("getAnyErrorMessage" in e)) throw e;
              r(e);
            } finally {
              t(!1);
            }
          }, []),
        };
      }
      function et(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { includeSoftDeleted: !1 },
          r = (0, _._k)(e, n),
          l = (0, A.n)((e) => e.editStateIdsForGroup[t]),
          o = (0, A.n)((e) => e.setEditStateIdsForGroup),
          a = (0, A.n)((e) => e.setListing),
          u = i.useMemo(
            () => [
              ...r.map((e) => {
                let { id: t } = e;
                return t;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          d = i.useCallback(() => {
            let e = (0, s.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
          }, [t, o]),
          c = i.useCallback(
            (e) => {
              let n = (0, s.Z)();
              return (
                o(t, (e) => [...(null != e ? e : []), n]),
                e.listings.forEach((t) => {
                  a(n, () => ({
                    name: t.name,
                    description: t.description,
                    priceTier: t.price_tier,
                    image: t.image,
                    intangibleBenefits: t.additional_perks,
                    channelBenefits: t.channels.map((e) => ({
                      ref_id: e.id,
                      ref_type: y.Qs.CHANNEL,
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
            [t, o, a],
          );
        return {
          editStateIds: u,
          addNewEditStateId: d,
          addNewEditStateFromTemplate: c,
          removeEditStateId: i.useCallback(
            (e) => {
              o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o],
          ),
        };
      }
    },
    144507: function (e, t, n) {
      n.d(t, {
        $D: function () {
          return C;
        },
        H2: function () {
          return p;
        },
        MO: function () {
          return g;
        },
        X$: function () {
          return f;
        },
        d5: function () {
          return r;
        },
      });
      var i,
        r,
        l = n(442837),
        o = n(223892),
        s = n(674180),
        a = n(496675),
        u = n(594174),
        d = n(923726),
        c = n(981631);
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
        (i[(i.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
        (i[(i.VISIBLE = 3)] = "VISIBLE");
      function h(e) {
        if (e.guild.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (
          (function (e) {
            let {
              guild: t,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: l,
              isUserInCreatorMonetizationEligibleCountry: o,
              shouldRestrictUpdatingRoleSubscriptionSettings: s,
            } = e;
            return (
              !!i &&
              (!s || !!n) &&
              (!!(
                t.hasFeature(c.oNc.CREATOR_MONETIZABLE) ||
                t.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!t.hasFeature(c.oNc.COMMUNITY) && (!!r || !!l) && n && o))
            );
          })(e)
        )
          return 3;
        let {
          guild: t,
          isOwner: n,
          isUserInCreatorMonetizationEligibleCountry: i,
          isMonetizationWaitlistEnabledForGuild: r,
          isGuildEligibleForRoleSubscriptions: l,
          isExpeditedMonetizationOnboardingGuild: o,
        } = e;
        return n && !i && r
          ? 1
          : n && r && (l || o) && !t.hasFeature(c.oNc.COMMUNITY)
            ? 2
            : 0;
      }
      function f(e) {
        return 0 !== h(e);
      }
      function g(e) {
        let t = (0, d.Bt)(null == e ? void 0 : e.id),
          n = (0, o.Ob)(e),
          i = (0, o.gS)(null == e ? void 0 : e.id),
          r = C(e),
          a = (0, l.e7)([u.default], () => {
            let t = u.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
          }),
          c = (0, o.Sd)(),
          { shouldRestrictUpdatingCreatorMonetizationSettings: f } = (0, s.gX)(
            null == e ? void 0 : e.id,
          );
        return null == e
          ? 0
          : h({
              guild: e,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: c,
              shouldRestrictUpdatingRoleSubscriptionSettings: f,
            });
      }
      function C(e) {
        return (0, l.e7)([a.Z], () => p(e), [e]);
      }
      function p(e) {
        return null != e && a.Z.can(c.Plq.ADMINISTRATOR, e);
      }
    },
    697227: function (e, t, n) {
      n.d(t, {
        V: function () {
          return o;
        },
        W: function () {
          return l;
        },
      });
      var i = n(512722),
        r = n.n(i);
      function l(e) {
        let t = e.items;
        return (
          r()(
            1 === t.length,
            "more than 1 subscription item for role subscription",
          ),
          t[0].planId
        );
      }
      function o(e) {
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
        l,
        o,
        s = n(442837),
        a = n(570140),
        u = n(131704),
        d = n(592125);
      let c = {},
        h = {};
      class f extends (o = s.ZP.Store) {
        getTemplates(e) {
          return c[e];
        }
        getTemplateWithCategory(e, t) {
          var n;
          return null === (n = c[e]) || void 0 === n
            ? void 0
            : n.find((e) => e.category === t);
        }
        getChannel(e) {
          return h[e];
        }
      }
      (l = "GuildRoleSubscriptionTierTemplatesStore"),
        (r = "displayName") in (i = f)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
        (t.Z = new f(a.Z, {
          GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
            let { selectedTemplate: t, guildId: n } = e,
              i = Object.values(d.Z.getMutableGuildChannelsForGuild(n));
            t.listings.forEach((e) => {
              e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in h)) {
                  let t = (0, u.kt)(e);
                  h[e.id] = t;
                }
              });
            });
          },
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
            let { templates: t, guildId: n } = e;
            c[n] = t;
          },
        }));
    },
    303737: function (e, t, n) {
      n.d(t, {
        GN: function () {
          return v;
        },
        be: function () {
          return S;
        },
        g4: function () {
          return _;
        },
        m7: function () {
          return E;
        },
        r4: function () {
          return m;
        },
        sO: function () {
          return N;
        },
        yL: function () {
          return T;
        },
      }),
        n(653041),
        n(47120),
        n(998459);
      var i = n(991637),
        r = n.n(i),
        l = n(399606),
        o = n(570140),
        s = n(333848),
        a = n(592125),
        u = n(923726),
        d = n(289393),
        c = n(944537),
        h = n(144507),
        f = n(853439),
        g = n(981631),
        C = n(176505);
      r().shim();
      let p = {};
      function E(e) {
        let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
          n = (0, l.e7)([f.Z], () => f.Z.getChannel(e));
        return null != t ? t : n;
      }
      function _(e, t, n) {
        let i = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingsForGuild(e)),
          r = (0, c.n)((t) => t.editStateIdsForGroup[e]),
          o = (0, c.n)((e) => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let s = i
            .filter((e) => !e.soft_deleted && !e.archived)
            .map((e) => e.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach((e) => {
            let t = o[e],
              n = null == t ? void 0 : t.priceTier;
            null != n && a.push(n);
          });
        let u = new Set(a.concat(s));
        if (!u.has(n)) return null;
        let h = t.indexOf(n);
        if (-1 === h) return null;
        let f = [];
        for (
          let e = h + 1;
          e < t.length && (!u.has(t[e]) && f.push(t[e]), 3 !== f.length);
          e++
        );
        return f;
      }
      function I(e) {
        let t = c.n.getState().editStateIdsForGroup[e],
          n = c.n.getState().listings,
          i = new Set();
        null != t &&
          t.forEach((e) => {
            var t;
            let r =
              null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r ||
              r.forEach((e) => {
                null != f.Z.getChannel(e.ref_id) && i.add(e.ref_id);
              });
          });
        let r = [];
        for (let t of i) {
          let n = f.Z.getChannel(t);
          if (null != n) {
            let t = n.set("guild_id", e);
            r.push(t);
          }
        }
        return r;
      }
      function S(e) {
        let t = I(e);
        (p[e] = t),
          t.forEach((e) => {
            let t = e.set(
              "flags",
              C.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            o.Z.dispatch({ type: "CHANNEL_CREATE", channel: t });
          });
      }
      function v(e) {
        var t;
        (null !== (t = p[e]) && void 0 !== t ? t : I(e)).forEach((e) => {
          o.Z.dispatch({ type: "CHANNEL_DELETE", channel: e });
        });
      }
      async function m(e, t) {
        let n = [],
          i = [];
        if (
          (t.forEach((t) => {
            let r = f.Z.getChannel(t.ref_id);
            null != r &&
              (n.push(
                s.Z.createRoleSubscriptionTemplateChannel(
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
            let l = i[r].id;
            if ("fulfilled" === n.status) {
              let t = n.value.body,
                i = c.n.getState().editStateIdsForGroup[e],
                r = c.n.getState().listings;
              null != i &&
                i.forEach((e) => {
                  var n;
                  let i =
                    null === (n = r[e]) || void 0 === n
                      ? void 0
                      : n.channelBenefits;
                  null == i ||
                    i.forEach((e) => {
                      e.ref_id === l && (e.ref_id = t.id);
                    });
                });
            } else if (null != t) {
              let e = t.findIndex((e) => e.ref_id === l);
              -1 !== e && (null == t || t.splice(e, 1));
            }
          });
      }
      function T(e, t) {
        var n, i;
        let r = c.n.getState().listings[e],
          l = null == r ? void 0 : r.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let o = f.Z.getTemplateWithCategory(t, l);
        if (null == o)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let s = o.listings[0];
        if (
          (null == r ? void 0 : r.name) !== s.name ||
          (null == r ? void 0 : r.description) !== s.description ||
          (null == r ? void 0 : r.priceTier) !== s.price_tier ||
          (null == r ? void 0 : r.image) !== s.image ||
          (null == r ? void 0 : r.roleColor) !== s.role_color ||
          (null == r
            ? void 0
            : null === (n = r.channelBenefits) || void 0 === n
              ? void 0
              : n.length) !== s.channels.length ||
          (null == r
            ? void 0
            : null === (i = r.intangibleBenefits) || void 0 === i
              ? void 0
              : i.length) !== s.additional_perks.length
        )
          return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        for (let e = 0; e < s.channels.length; e++) {
          let t = r.channelBenefits[e],
            n = s.channels[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        }
        for (let e = 0; e < s.additional_perks.length; e++) {
          let t = r.intangibleBenefits[e],
            n = s.additional_perks[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        }
        return { templateCategory: o.category, hasChangeFromTemplate: !1 };
      }
      function N(e) {
        return (
          (0, h.H2)(e) &&
          e.hasFeature(g.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
          (0, u.$F)() &&
          (0, u.hQ)(e.id)
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
        l = n(480608),
        o = n(243730);
      let s = {};
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = s[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((s[e] = Date.now()), l.E(e));
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
        l = n(339085),
        o = n(889564);
      let s = [];
      function a(e) {
        let t = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
        return i.useMemo(
          () => (null == t ? s : t.filter((t) => (0, o.Kt)(t, e))),
          [t, e],
        );
      }
    },
    971792: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(430824),
        l = n(584825);
      function o(e, t) {
        let n = (0, l.jO)(t);
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
        l = n(293810),
        o = n(474936),
        s = n(388032);
      function a(e) {
        return i.useMemo(() => {
          var t;
          let n = l.DN.map((e) => ({
              value: e,
              label:
                e.interval === o.rV.DAY && 7 === e.interval_count
                  ? s.intl.formatToPlainString(s.t.XfSsr6, {
                      defaultLimit: (0, r.iG)(e),
                    })
                  : (0, r.iG)(e),
              isDefault: e.interval === o.rV.DAY && 7 === e.interval_count,
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
          return l;
        },
      });
      var i = n(442837),
        r = n(592125);
      function l(e) {
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
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(596454),
        s = n(377171),
        a = n(403910),
        u = n(549631),
        d = n(989384);
      function c(e) {
        var t;
        let { guildId: n, emojiId: r, emojiName: c, className: h } = e,
          f = (0, a.Z)(n, r);
        return null != f || null != c
          ? (0, i.jsx)(o.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != c ? c : null == f ? void 0 : f.name,
              animated:
                null !== (t = null == f ? void 0 : f.animated) &&
                void 0 !== t &&
                t,
              className: l()(d.emojiIcon, h),
            })
          : (0, i.jsx)(u.Z, {
              className: l()(d.emojiIcon, h),
              color: s.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            });
      }
    },
    686807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(201895),
        o = n(471445),
        s = n(823379),
        a = n(303737),
        u = n(293810),
        d = n(388032),
        c = n(507641);
      function h(e) {
        let { channelId: t } = e,
          n = (0, a.m7)(t);
        if (null == n)
          return (0, i.jsx)(i.Fragment, {
            children: "[".concat(d.intl.string(d.t.bz1PZW), "]"),
          });
        let s = n.isMediaChannel() ? r.ImageIcon : (0, o.Th)(n.type);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.HiddenVisually, {
              children: (0, l.ZP)({ channel: n }),
            }),
            (0, i.jsxs)("div", {
              "aria-hidden": !0,
              children: [
                null != s &&
                  (0, i.jsx)(s, { className: c.icon, "aria-hidden": !0 }),
                n.name,
              ],
            }),
          ],
        });
      }
      function f(e) {
        switch (e.ref_type) {
          case u.Qs.CHANNEL:
            return (0, i.jsx)(h, { channelId: e.ref_id });
          case u.Qs.INTANGIBLE:
            return e.name;
          default:
            (0, s.vE)(e);
        }
      }
    },
    893729: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        s = n(442837),
        a = n(481060),
        u = n(518738),
        d = n(786761),
        c = n(3148),
        h = n(753206),
        f = n(594174),
        g = n(5192),
        C = n(981631),
        p = n(388032),
        E = n(674055);
      function _(e) {
        var t;
        let {
            guildId: n,
            role: l,
            theme: _,
            content: I = p.intl.string(p.t["6OSasb"]),
            className: S,
          } = e,
          v = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
          m = g.ZP.useName(n, null, v),
          T = (0, u.Kz)(l),
          N = r.useMemo(
            () =>
              (0, d.e5)({
                ...(0, c.ZP)({
                  channelId: "0",
                  content: I,
                  tts: void 0,
                  type: void 0,
                  messageReference: void 0,
                  allowedMentions: void 0,
                  author: v,
                }),
                state: C.yb.SENT,
                id: "0",
              }),
            [v, I],
          ),
          A = {
            nick: m,
            colorString:
              null !== (t = l.colorString) && void 0 !== t ? t : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: _,
          children: (e) =>
            (0, i.jsx)("div", {
              className: o()(e, E.container, S),
              children: (0, i.jsx)(h.Z, {
                hideTimestamp: !0,
                author: A,
                roleIcon: T,
                message: N,
                isGroupStart: !0,
                disableInteraction: !0,
              }),
            }),
        });
      }
    },
    540126: function (e, t, n) {
      n.d(t, {
        Bz: function () {
          return eE;
        },
        Cb: function () {
          return W;
        },
        Fq: function () {
          return Y;
        },
        PB: function () {
          return X;
        },
        VR: function () {
          return el;
        },
        ZP: function () {
          return ee;
        },
        p2: function () {
          return q;
        },
        wF: function () {
          return Q;
        },
        wZ: function () {
          return K;
        },
        wd: function () {
          return J;
        },
        zR: function () {
          return e_;
        },
      }),
        n(47120),
        n(411104),
        n(653041),
        n(390547),
        n(724458),
        n(733860);
      var i,
        r,
        l,
        o,
        s = n(512722),
        a = n.n(s),
        u = n(392711),
        d = n.n(u),
        c = n(317381),
        h = n(812206),
        f = n(12498),
        g = n(430198),
        C = n(931261),
        p = n(924301),
        E = n(160404),
        _ = n(798423),
        I = n(18036),
        S = n(798379),
        v = n(398758),
        m = n(22082),
        T = n(601070),
        N = n(569471),
        A = n(131704),
        y = n(680089),
        O = n(592125),
        L = n(58468),
        P = n(430824),
        b = n(496675),
        R = n(306680),
        Z = n(944486),
        w = n(9156),
        M = n(979651),
        D = n(938475),
        U = n(823379),
        G = n(709054),
        F = n(968358),
        x = n(203818),
        j = n(443063),
        H = n(981631),
        B = n(176505),
        V = n(231338);
      function k(e, t, n) {
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
      let z = "placeholder-channel-id",
        W = 2;
      ((l = i || (i = {}))[(l.CannotShow = 1)] = "CannotShow"),
        (l[(l.DoNotShow = 2)] = "DoNotShow"),
        (l[(l.WouldShowIfUncollapsed = 3)] = "WouldShowIfUncollapsed"),
        (l[(l.Show = 4)] = "Show"),
        ((o = r || (r = {}))[(o.CHANNEL_NOTICES = 0)] = "CHANNEL_NOTICES"),
        (o[(o.GUILD_ACTIONS = 1)] = "GUILD_ACTIONS"),
        (o[(o.FAVORITES = 2)] = "FAVORITES"),
        (o[(o.RECENTS = 3)] = "RECENTS"),
        (o[(o.UNCATEGORIZED_CHANNELS = 4)] = "UNCATEGORIZED_CHANNELS"),
        (o[(o.FIRST_NAMED_CATEGORY = 5)] = "FIRST_NAMED_CATEGORY");
      let Y = 0,
        K = 1,
        q = 2,
        X = 3,
        J = 4,
        Q = 5,
        $ = new Set([String(j.z.GUILD_DIRECTORY)]);
      class ee {
        _areGuildActionRowsUpdated(e, t) {
          var n;
          return !d().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
              ? void 0
              : n
                  .getGuildActionSection()
                  .getRows()
                  .filter((e) => !$.has(e)),
            t,
          );
        }
        _areChannelNoticeRowsUpdated(e, t) {
          var n;
          return !d().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
              ? void 0
              : n.getChannelNoticeSection().getRows(),
            t,
          );
        }
        getGuild(e, t, n) {
          return (
            (!(e in this.guilds) ||
              this._areGuildActionRowsUpdated(e, t) ||
              this._areChannelNoticeRowsUpdated(e, n)) &&
              (this.guilds[e] = new et(e, t, n)),
            this.guilds[e]
          );
        }
        getGuildChannelRowsOnly(e) {
          return (
            !(e in this.guilds) && (this.guilds[e] = new et(e, [], [])),
            this.guilds[e]
          );
        }
        clear() {
          this.guilds = {};
        }
        clearGuildId(e) {
          return null != e && e in this.guilds && (delete this.guilds[e], !0);
        }
        updateRecentsCategory(e) {
          var t, n;
          if (null == e || !(e in this.guilds)) return !1;
          return (
            null !==
              (n =
                null === (t = this.guilds[e]) || void 0 === t
                  ? void 0
                  : t.updateRecentsCategory()) &&
            void 0 !== n &&
            n
          );
        }
        nonPositionalChannelIdUpdate(e) {
          let t = O.Z.getBasicChannel(e);
          return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof A.Sf || null != (t = O.Z.getChannel(e))) &&
            this.nonPositionalChannelUpdate(t)
          );
        }
        nonPositionalChannelUpdate(e) {
          if (null == e.guild_id) return !1;
          let t = this.guilds[e.guild_id];
          if (null == t) return !1;
          let n = !1;
          return (
            e.isThread() &&
              (n = this.nonPositionalChannelIdUpdate(e.parent_id)),
            t.nonPositionalChannelUpdate(e) || n
          );
        }
        updateSubtitles(e, t) {
          (null == e
            ? Object.values(this.guilds)
            : e in this.guilds
              ? [this.guilds[e]]
              : []
          ).forEach((e) => e.updateSubtitles(t));
        }
        constructor() {
          k(this, "guilds", {});
        }
      }
      class et {
        get initializationData() {
          return {
            selectedChannel: O.Z.getChannel(Z.Z.getChannelId()),
            selectedVoiceChannelId: Z.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads:
              T.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: T.Z.getActiveJoinedUnreadThreadsForGuild(
              this.id,
            ),
          };
        }
        invalidate() {
          (this.sections = null),
            (this.rows = null),
            (this.sortedNamedCategories = null),
            (this.firstVoiceChannel = void 0),
            this.version++;
        }
        getSortedNamedCategories() {
          return (
            null == this.sortedNamedCategories && this.getRows(),
            this.sortedNamedCategories
          );
        }
        getSortedCategories() {
          return [
            this.favoritesCategory,
            this.recentsCategory,
            this.noParentCategory,
            ...this.getSortedNamedCategories(),
            this.voiceChannelsCategory,
          ];
        }
        getSections() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (null == this.sections &&
            (this.sections = this.getRows().map((e) => e.length)),
          e)
            ? [...this.sections]
            : this.sections;
        }
        getRows() {
          if (null == this.rows) {
            (this.sortedNamedCategories = d().sortBy(
              Object.values(this.categories),
              (e) => e.record.position,
            )),
              (this.rows = [
                this.channelNoticeSection,
                this.guildActionSection,
                this.favoritesCategory,
                this.recentsCategory,
                this.noParentCategory,
                ...this.sortedNamedCategories,
                this.voiceChannelsCategory,
              ].map((e) => e.getRows()));
            let e = 0;
            for (let t of [
              this.noParentCategory,
              ...this.sortedNamedCategories,
            ])
              for (let n of ((t.position = ++e), t.getShownChannelIds()))
                t.channels[n].position = ++e;
          }
          return this.rows;
        }
        getCategoryFromSection(e) {
          switch (e) {
            case Y:
              throw Error(
                "Invalid section. Use getChannelNoticeSection instead",
              );
            case K:
              throw Error("Invalid section. Use getGuildActionSection instead");
            case q:
              return this.favoritesCategory;
            case J:
              return this.noParentCategory;
            case this.recentsSectionNumber:
              return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
              return this.voiceChannelsCategory;
            default:
              return this.getSortedNamedCategories()[e - Q];
          }
        }
        getNamedCategoryFromSection(e) {
          return (
            (e -= Q),
            a()(
              e >= 0 && e < this.getSortedNamedCategories().length,
              "invalid section index ".concat(e),
            ),
            this.getSortedNamedCategories()[e]
          );
        }
        getGuildActionSection() {
          return this.guildActionSection;
        }
        getChannelNoticeSection() {
          return this.channelNoticeSection;
        }
        getChannelFromSectionRow(e, t) {
          let n = this.getCategoryFromSection(e);
          if (null == n) return null;
          let i = n.channels[n.getShownChannelIds()[t]];
          return null == i ? null : { category: n, channel: i };
        }
        isPlaceholderRow(e, t) {
          return (
            a()(e > K, "Invalid section"),
            e !== this.recentsSectionNumber && this.getRows()[e][t] === z
          );
        }
        getFirstVoiceChannel(e) {
          if (void 0 === this.firstVoiceChannel) {
            if (
              ((this.firstVoiceChannel =
                this.favoritesCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            if (
              ((this.firstVoiceChannel =
                this.noParentCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            for (let t of this.getSortedNamedCategories())
              if (null != t.getFirstVoiceChannel(e)) {
                this.firstVoiceChannel = t.getFirstVoiceChannel(e);
                break;
              }
          }
          return this.firstVoiceChannel;
        }
        getSectionRowsFromChannel(e) {
          let t = (function (e) {
            if (null == e) return null;
            if (eT.has(e)) return e;
            let t = O.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory())
              ? j.z.GUILD_DIRECTORY
              : null;
          })(e);
          if (null != t)
            return [
              {
                row: this.getGuildActionSection().getRows().indexOf(t),
                section: K,
              },
            ];
          let n = [],
            i = O.Z.getChannel(e);
          if (null == i || null == e) return n;
          let r = i.isThread();
          if ((r && (i = O.Z.getChannel(i.parent_id)), null == i)) return n;
          let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
          l >= 0 && n.push({ section: q, row: l });
          let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
          if (
            (o >= 0 && n.push({ section: this.recentsSectionNumber, row: o }),
            i.type === H.d4z.GUILD_CATEGORY)
          )
            return [
              {
                section:
                  d().findIndex(
                    this.getSortedNamedCategories(),
                    (e) => e.id === (null == i ? void 0 : i.id),
                  ) + Q,
              },
            ];
          let s = this.getCategory(i),
            a =
              s instanceof ei
                ? J
                : this.getSortedNamedCategories().indexOf(s) + Q,
            u = s.getShownChannelIds().indexOf(i.id);
          if (a >= 0 && u >= 0) {
            let t = r ? s.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({ section: a, row: u, threadOffset: t });
          }
          let c = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
          return (
            c >= 0 &&
              n.push({ section: this.voiceChannelsSectionNumber, row: c }),
            n
          );
        }
        getCategory(e) {
          return null != e.parent_id && e.parent_id in this.categories
            ? this.categories[e.parent_id]
            : this.noParentCategory;
        }
        updateRecentsCategory() {
          let e = this.recentsCategory.updateAllChannels(
            this.initializationData,
          );
          return e && this.invalidate(), e;
        }
        nonPositionalChannelUpdate(e) {
          let t = this.initializationData,
            n = this.getCategory(e).updateChannel(e, t);
          return (
            this.favoritesCategory.updateChannel(e, t) && (n = !0),
            this.recentsCategory.updateChannel(e, t) && (n = !0),
            this.voiceChannelsCategory.updateChannel(e, t) && (n = !0),
            n && this.invalidate(),
            n
          );
        }
        getSlicedChannels(e, t) {
          a()(e.length > 0, "must have at least one channel in the slice");
          let n = e[0],
            i = e[e.length - 1],
            r = !0,
            l = !1,
            o = [],
            s = [];
          for (let e of this.getSortedCategories()) {
            let a =
              (null == t ? void 0 : t.ignoreRecents) &&
              e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
              let u = e.channels[t];
              r && (u.id === n.id ? (r = !1) : !a && o.push(u)),
                l && !a && s.push(u),
                !r && !l && u.id === i.id && (l = !0);
            }
          }
          return [o, e, s];
        }
        getChannels(e) {
          let t = [];
          if (null == this.allChannelsById)
            for (let e of ((this.allChannelsById = {}),
            this.getSortedCategories()))
              for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
          for (let n of e)
            null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
          return t;
        }
        updateSubtitles(e) {
          let t = [];
          if (null != e) {
            let n = O.Z.getChannel(e);
            if (null != n) {
              if (n.id in this.favoritesCategory.channels)
                t = [this.favoritesCategory.channels[n.id]];
              else if (n.id in this.recentsCategory.channels)
                t = [this.recentsCategory.channels[n.id]];
              else {
                let i = this.getCategory(n);
                null != i && null != i.channels[e] && (t = [i.channels[e]]);
              }
            }
          } else
            t = d()(this.getSortedCategories())
              .map((e) => Object.values(e.channels))
              .flatten()
              .value();
          let n = !1;
          return (
            t.forEach((e) => {
              e.updateSubtitle() && (n = !0);
            }),
            n && this.version++,
            n
          );
        }
        forEachShownChannel(e, t) {
          for (let n of this.getSortedCategories()) {
            if (
              (null == t ? !void 0 : !t.ignoreRecents) ||
              n !== this.recentsCategory
            )
              for (let t of n.getShownChannelIds()) {
                let i = n.channels[t];
                for (let t of (e(i.record), i.threadIds)) {
                  let n = O.Z.getChannel(t);
                  null != n && e(n);
                }
              }
          }
        }
        forEachChannel(e, t) {
          for (let n of this.getSortedCategories()) {
            if (
              (null == t ? !void 0 : !t.ignoreRecents) ||
              n !== this.recentsCategory
            )
              for (let t of n.getChannelRecords()) e(t);
          }
        }
        constructor(e, t, n) {
          var i, r;
          k(this, "id", void 0),
            k(this, "hideMutedChannels", void 0),
            k(this, "favoritesSectionNumber", void 0),
            k(this, "recentsSectionNumber", void 0),
            k(this, "voiceChannelsSectionNumber", void 0),
            k(this, "mutedChannelIds", void 0),
            k(this, "optedInChannels", void 0),
            k(this, "optInEnabled", void 0),
            k(this, "hideResourceChannels", void 0),
            k(this, "favoriteChannelIds", void 0),
            k(this, "suggestedFavoriteChannelId", void 0),
            k(this, "collapsedCategoryIds", void 0),
            k(this, "categories", void 0),
            k(this, "noParentCategory", void 0),
            k(this, "favoritesCategory", void 0),
            k(this, "recentsCategory", void 0),
            k(this, "voiceChannelsCategory", void 0),
            k(this, "guildActionSection", void 0),
            k(this, "channelNoticeSection", void 0),
            k(this, "sortedNamedCategories", void 0),
            k(this, "sections", void 0),
            k(this, "rows", void 0),
            k(this, "firstVoiceChannel", void 0),
            k(this, "allChannelsById", void 0),
            k(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = w.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = w.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
              null !==
                (i = w.ZP.getOptedInChannelsWithPendingUpdates(this.id)) &&
              void 0 !== i
                ? i
                : w.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, v.r1)(this.id)),
            (this.hideResourceChannels = (0, C.s)(this.id)),
            (this.favoriteChannelIds = new Set(
              null !== (r = w.ZP.getGuildFavorites(this.id)) && void 0 !== r
                ? r
                : [],
            )),
            (this.suggestedFavoriteChannelId = I.Z.getSuggestedChannelId(
              this.id,
            )),
            (this.collapsedCategoryIds = y.Z.getCollapsedCategories());
          let l = O.Z.getMutableGuildChannelsForGuild(this.id),
            o = P.Z.getGuild(this.id),
            s = {},
            u = [],
            c = {};
          for (let e in l) {
            let t = l[e];
            t.type === H.d4z.GUILD_CATEGORY && ((s[t.id] = t), (c[t.id] = []));
          }
          let h = [],
            f = [],
            g = [],
            p = this.initializationData;
          for (let e in l) {
            let t = l[e];
            if (t.type !== H.d4z.GUILD_CATEGORY) {
              if (t.type === H.d4z.GUILD_DIRECTORY) {
                null != o && !o.hasFeature(H.oNc.HUB) && g.push(t);
                continue;
              }
              em(this, t, p)
                ? h.push(t)
                : (t.type === H.d4z.GUILD_VOICE ||
                    t.type === H.d4z.GUILD_STAGE_VOICE) &&
                  (null != t.parent_id &&
                    null != s[t.parent_id] &&
                    f.push(s[t.parent_id]),
                  f.push(t)),
                null != t.parent_id && t.parent_id in c
                  ? c[t.parent_id].push(t)
                  : u.push(t);
            }
          }
          for (let e in ((this.categories = {}), c))
            this.categories[e] = new er(this, s[e], c[e], p);
          (this.recentsSectionNumber = X),
            (this.favoritesSectionNumber = q),
            (this.noParentCategory = new ei(this, u, p)),
            (this.favoritesCategory = new el(this, p)),
            (this.recentsCategory = (0, _.Q)()
              ? new eo(this, l, p)
              : new es(this, h, p)),
            (this.voiceChannelsCategory = new ea(this, f, s, p)),
            (this.guildActionSection = new ed(t, g.length > 0)),
            (this.channelNoticeSection = new eu(n)),
            a()(
              !("null" in this.categories),
              "somehow a null got into categories",
            ),
            (this.voiceChannelsSectionNumber = Q + d().size(this.categories));
        }
      }
      class en {
        updateChannel(e, t) {
          return (
            !!(
              e.id in this.channels && this.channels[e.id].updateChannel(e, t)
            ) && (this.invalidate(), !0)
          );
        }
        invalidate() {
          this.shownChannelIds = null;
        }
        getRows() {
          let e = this.getShownChannelIds();
          return 0 === e.length && this.shouldShowEmptyCategory() ? [z] : e;
        }
        shouldShowEmptyCategory() {
          return d().some(this.channels, (e) => e.renderLevel >= 3);
        }
        getShownChannelIds() {
          return (
            null == this.shownChannelIds &&
              (this.shownChannelIds = d()(this.channels)
                .values()
                .filter((e) => 4 === e.renderLevel)
                .sortBy((e) => {
                  let { record: t } = e;
                  return t.isGuildVocal() ? t.position + 1e4 : t.position;
                })
                .map((e) => e.id)
                .value()),
            this.shownChannelIds
          );
        }
        getShownChannelAndThreadIds() {
          let e = d()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
          return this.getShownChannelIds().concat(e);
        }
        isEmpty() {
          return 0 === this.getShownChannelIds().length;
        }
        getChannelRecords() {
          return d()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
        }
        getFirstVoiceChannel(e) {
          for (let t of this.getShownChannelIds()) {
            if (e && this.channels[t].record.isGuildStageVoice())
              return this.channels[t];
            if (!e && this.channels[t].record.isGuildVocal())
              return this.channels[t];
          }
          return null;
        }
        constructor(e) {
          k(this, "guild", void 0),
            k(this, "isMuted", void 0),
            k(this, "isCollapsed", void 0),
            k(this, "position", void 0),
            k(this, "channels", void 0),
            k(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
        }
      }
      class ei extends en {
        constructor(e, t, n) {
          super(e),
            (this.channels = d()(t)
              .map((e) => new eh(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class er extends en {
        shouldShowEmptyCategory() {
          return (
            !!(
              super.shouldShowEmptyCategory() ||
              (b.Z.can(V.Pl.MANAGE_CHANNELS, this.record) &&
                b.Z.can(V.Pl.VIEW_CHANNEL, this.record) &&
                d().isEmpty(this.channels) &&
                (!this.guild.optInEnabled ||
                  this.guild.optedInChannels.has(this.id)))
            ) || !1
          );
        }
        constructor(e, t, n, i) {
          for (let r of (super(e),
          k(this, "id", void 0),
          k(this, "record", void 0),
          (this.record = t),
          (this.id = t.id),
          (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
          (this.isMuted = e.mutedChannelIds.has(t.id)),
          (this.channels = {}),
          n))
            this.channels[r.id] = new eh(this, r, i);
        }
      }
      class el extends en {
        updateChannel(e, t) {
          let n = e.id in this.channels && w.ZP.isFavorite(e.guild_id, e.id),
            i = I.Z.getSuggestedChannelId(e.guild_id);
          return (e.id === i &&
            !n &&
            (t = {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }),
          e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels &&
                e.id !== i &&
                !n &&
                (delete this.channels[e.id], this.invalidate(), !0);
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t) {
          var n;
          if (
            (super(e),
            !e.optInEnabled &&
              !(function () {
                return !1;
              })())
          )
            return;
          this.channels = d()(
            null !== (n = w.ZP.getGuildFavorites(e.id)) && void 0 !== n
              ? n
              : [],
          )
            .map((e) => O.Z.getChannel(e))
            .filter(U.lm)
            .map((e) => new ef(this, e, t))
            .keyBy((e) => e.id)
            .value();
          let i = I.Z.getSuggestedChannelId(e.id),
            r = O.Z.getChannel(i);
          null != r &&
            null != i &&
            (this.channels[i] = new ef(this, r, {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }));
        }
      }
      class eo extends en {
        shouldShowEmptyCategory() {
          return (
            this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
          );
        }
        updateAllChannels(e) {
          return Object.values(this.channels).reduce(
            (t, n) => this.updateChannel(n.record, e) || t,
            !1,
          );
        }
        updateChannel(e, t) {
          if (!this.enabled) return !1;
          if ((0, A.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
          }
          if (!(0, A.vc)(e.type)) return !1;
          let n = super.updateChannel(e, t),
            i = this.channels[e.id];
          return null == i
            ? ((i = new eC(this, e, t)),
              (this.channels[e.id] = i),
              this.invalidate(),
              !0)
            : this.updateShownChannelIds(i) || n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
              ? d()(this.channels)
                  .filter((t) => t.renderLevel >= e)
                  .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                  .filter((e) => {
                    let [, t, n] = e;
                    return (
                      4 === n ||
                      (t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA)
                    );
                  })
                  .sortBy((e) => {
                    let [, t, n] = e;
                    return -(t - (4 === n ? 0 : G.DISCORD_EPOCH));
                  })
                  .take(eo.MAX_RECENT_CHANNELS)
                  .sortBy((e) => {
                    let [, t] = e;
                    return -t;
                  })
                  .map((e) => {
                    let [t] = e;
                    return t;
                  })
                  .value()
              : [];
          }
          return this.shownChannelIds;
        }
        updateShownChannelIds(e) {
          var t;
          let n = this.isCollapsed ? 4 : 3;
          if (null == this.shownChannelIds || e.renderLevel < n) return !1;
          if (
            e.lastMessageTimestamp >
            (null === (t = this.channels[this.shownChannelIds[0]]) ||
            void 0 === t
              ? void 0
              : t.lastMessageTimestamp)
          ) {
            let t = this.shownChannelIds.indexOf(e.id);
            return (
              t > -1 && this.shownChannelIds.splice(t, 1),
              this.shownChannelIds.splice(0, 0, e.id),
              this.shownChannelIds.length > eo.MAX_RECENT_CHANNELS &&
                (this.shownChannelIds = this.shownChannelIds.slice(
                  0,
                  eo.MAX_RECENT_CHANNELS,
                )),
              !0
            );
          }
          return !1;
        }
        constructor(e, t, n) {
          if (
            (super(e),
            k(this, "enabled", !1),
            (this.isCollapsed = S.Z.isCollapsed(e.id)),
            (this.enabled =
              (function () {
                return !1;
              })() && Object.keys(t).length >= eo.MIN_READABLE_CHANNELS),
            this.enabled)
          )
            for (let e of Object.values(t))
              (0, A.vc)(e.type) &&
                !(0, A.Q5)(e.type) &&
                (this.channels[e.id] = new eC(this, e, n));
        }
      }
      k(eo, "MIN_READABLE_CHANNELS", 7),
        k(eo, "MAX_RECENT_CHANNELS", 10),
        k(eo, "MAX_TIMESTAMP_DELTA", 6048e5);
      class es extends en {
        updateAllChannels(e) {
          let t = !1;
          return (
            G.default.keys(this.channels).forEach((n) => {
              this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
          );
        }
        updateChannel(e, t) {
          let n = super.updateChannel(e, t);
          if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
              i = em(this.guild, e, t);
            if (i && null == n)
              return (
                (this.channels[e.id] = new eg(this, e, t)),
                this.invalidate(),
                !0
              );
            if (!i && null != n)
              return delete this.channels[e.id], this.invalidate(), !0;
          }
          return n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = d()(this.channels)
                .values()
                .filter((e) => 4 === e.renderLevel || 3 === e.renderLevel)
                .filter((e) => !e.record.isGuildVocal()),
              t = e
                .sortBy((e) => {
                  let { record: t } = e;
                  return t.position;
                })
                .take(5)
                .value(),
              n = new Set([
                ...e.filter((e) => 4 === e.renderLevel).value(),
                ...t,
              ]);
            this.shownChannelIds = d()([...n])
              .sortBy((e) => {
                let { record: t } = e;
                return t.position;
              })
              .map((e) => e.id)
              .value();
          }
          return this.shownChannelIds;
        }
        constructor(e, t, n) {
          if ((super(e), !e.optInEnabled || E.Z.isFullServerPreview(e.id)))
            return;
          (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = d()(t)
              .map((e) => new eg(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class ea extends en {
        invalidate() {
          super.invalidate(), (this.hiddenChannelIds = null);
        }
        getHiddenChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.hiddenChannelIds) {
            let e = d()(this.channels)
              .filter((e) => 3 === e.renderLevel)
              .value();
            if (e.every((e) => e.record.isCategory()))
              return (this.hiddenChannelIds = []), this.hiddenChannelIds;
            this.hiddenChannelIds = e.map((e) => e.id);
          }
          return this.hiddenChannelIds;
        }
        getRows() {
          if (!this.guild.optInEnabled) return [];
          let e = this.getShownChannelIds();
          return 0 === e.length && this.getHiddenChannelIds().length > 0
            ? [z]
            : e;
        }
        getShownChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.shownChannelIds) {
            let t = d()(this.channels)
              .filter((e) => 4 === e.renderLevel)
              .orderBy(
                [
                  (e) =>
                    (function (e, t) {
                      if (e.record.type === H.d4z.GUILD_CATEGORY)
                        return e.record.position;
                      if (null != e.record.parent_id) {
                        var n, i;
                        return null !==
                          (i =
                            null === (n = t[e.record.parent_id]) || void 0 === n
                              ? void 0
                              : n.position) && void 0 !== i
                          ? i
                          : -1;
                      }
                      return -1;
                    })(e, this.categoriesById),
                  (e) =>
                    e.record.type === H.d4z.GUILD_CATEGORY
                      ? -1
                      : e.record.position,
                ],
                ["asc", "asc"],
              )
              .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
              var e;
              let i = t[n];
              if (
                (!(n < t.length - 1) ||
                  i.record.type !== H.d4z.GUILD_CATEGORY ||
                  (null === (e = t[n + 1]) || void 0 === e
                    ? void 0
                    : e.record.type) !== H.d4z.GUILD_CATEGORY) &&
                (n !== t.length - 1 || i.record.type !== H.d4z.GUILD_CATEGORY)
              )
                this.shownChannelIds.push(i.id);
            }
          }
          return this.shownChannelIds;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t, n, i) {
          if (
            (super(e),
            k(this, "categoriesById", void 0),
            k(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
          )
            return;
          (this.isCollapsed = x.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = d()(t)
              .map((e) => new ep(this, e, i))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class eu {
        isEmpty() {
          return 0 === this.rows.length;
        }
        getRows() {
          return this.rows;
        }
        getRow(e) {
          return this.rows[e];
        }
        constructor(e) {
          k(this, "rows", void 0), (this.rows = e);
        }
      }
      class ed {
        isEmpty() {
          return 0 === this.guildActionRows.length;
        }
        getRows() {
          return this.guildActionRows;
        }
        getRow(e) {
          return this.guildActionRows[e];
        }
        constructor(e, t) {
          k(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(j.z.GUILD_DIRECTORY));
        }
      }
      class ec {
        get isMuted() {
          return this.category.guild.mutedChannelIds.has(this.id);
        }
        get isCollapsed() {
          return L.Z.isCollapsed(this.id);
        }
        get isFirstVoiceChannel() {
          return this.category.getFirstVoiceChannel() === this;
        }
        get lastMessageTimestamp() {
          return Math.max(
            R.ZP.lastMessageTimestamp(this.id),
            ...this.threadIds.map(R.ZP.lastMessageTimestamp),
          );
        }
        updateChannel(e, t) {
          let n = !1;
          null != e && e !== this.record && ((this.record = e), (n = !0));
          let i = this.computeState(t);
          return (
            (i.renderLevel !== this.renderLevel ||
              !d().isEqual(i.threadIds, this.threadIds)) &&
              ((this.renderLevel = i.renderLevel),
              (this.threadIds = i.threadIds),
              (this.threadCount = d().size(i.threadIds)),
              (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
          );
        }
        updateSubtitle() {
          let e = this.computeSubtitle();
          return !d().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
        }
        computeSubtitle() {
          return eE(
            this.record,
            this.isCollapsed || this.category.isCollapsed,
            this.category.guild.optInEnabled,
          );
        }
        constructor(e, t, n) {
          k(this, "category", void 0),
            k(this, "record", void 0),
            k(this, "id", void 0),
            k(this, "position", void 0),
            k(this, "threadIds", void 0),
            k(this, "threadCount", void 0),
            k(this, "subtitle", void 0),
            k(this, "renderLevel", void 0),
            (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
          let { renderLevel: i, threadIds: r } = this.computeState(n);
          (this.renderLevel = i),
            (this.threadCount = d().size(r)),
            (this.threadIds = r),
            4 === i && (this.subtitle = this.computeSubtitle());
        }
      }
      class eh extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: r,
            activeJoinedUnreadThreads: l,
          } = e;
          if (!b.Z.can(V.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i) return { renderLevel: 4, threadIds: [] };
            if (
              !g.Z.isChannelGatedAndVisible(
                this.record.guild_id,
                this.record.id,
              )
            )
              return { renderLevel: 1, threadIds: [] };
          }
          let o = this.record.parent_id,
            s = this.category.guild;
          if (eS(s, this.record)) return { renderLevel: 1, threadIds: [] };
          let a = (null == n ? void 0 : n.id) === this.id || i === this.id,
            u = null != n && n.isThread() && n.parent_id === this.id,
            c =
              null !==
                (t =
                  a || u || (!this.category.isCollapsed && !this.isMuted)
                    ? r[this.id]
                    : l[this.id]) && void 0 !== t
                ? t
                : {},
            h = e_(this.record, c, n, i, s.hideMutedChannels);
          return s.optInEnabled &&
            s.hideResourceChannels &&
            this.record.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? { renderLevel: a ? 4 : 1, threadIds: h }
            : !s.optInEnabled ||
                s.optedInChannels.has(this.id) ||
                (null != o && s.optedInChannels.has(o))
              ? a || u || !d().isEmpty(h) || R.ZP.getMentionCount(this.id) > 0
                ? { renderLevel: 4, threadIds: h }
                : s.hideMutedChannels && s.mutedChannelIds.has(this.id)
                  ? { renderLevel: 2, threadIds: h }
                  : this.category.isCollapsed &&
                      (s.mutedChannelIds.has(this.id) ||
                        (null != o && s.mutedChannelIds.has(o)) ||
                        this.record.isGuildVocal() ||
                        this.record.type === H.d4z.GUILD_STORE ||
                        ((0, A.vc)(this.record.type) &&
                          !R.ZP.hasUnread(this.record.id)))
                    ? { renderLevel: 3, threadIds: h }
                    : { renderLevel: 4, threadIds: h }
              : { renderLevel: 2, threadIds: h };
        }
      }
      class ef extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: r,
          } = e;
          return b.Z.can(V.Pl.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: 4,
                threadIds: e_(
                  this.record,
                  null !== (t = r[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1,
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class eg extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: r,
          } = e;
          return b.Z.can(V.Pl.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: ev(this, e) ? 4 : 3,
                threadIds: e_(
                  this.record,
                  null !== (t = r[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1,
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class eC extends eh {
        computeState(e) {
          let { renderLevel: t, threadIds: n } = super.computeState(e);
          if (t > 1) {
            let i = this.record.parent_id,
              r = this.category.guild;
            r.mutedChannelIds.has(this.id) ||
            (null != i && r.mutedChannelIds.has(i))
              ? (t = 2)
              : 4 === t
                ? (t = 3)
                : 2 === t && em(this.category.guild, this.record, e) && (t = 3),
              3 === t && ev(this, e) && (t = 4),
              (n = d().sortBy(n, (e) => -R.ZP.lastMessageTimestamp(e)));
          }
          return { renderLevel: t, threadIds: n };
        }
      }
      class ep extends eh {
        getRenderLevel(e) {
          let t = this.category.guild;
          return !b.Z.can(V.Pl.VIEW_CHANNEL, this.record) ||
            4 === e ||
            3 === e ||
            eS(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? d().some(M.Z.getVoiceStatesForChannel(this.record.id))
                ? 4
                : 3
              : 4;
        }
        computeState(e) {
          let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
          return (
            4 === n &&
              (this.subtitle = eE(
                this.record,
                this.isCollapsed || this.category.isCollapsed,
                this.category.guild.optInEnabled,
              )),
            { threadIds: [], renderLevel: n }
          );
        }
      }
      function eE(e, t, n) {
        switch (e.type) {
          case H.d4z.GUILD_VOICE: {
            let i = p.ZP.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let r = D.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, F.a)(r)) return { type: "go-live" };
            let l = f.Z.getChannelStatus(e);
            if (null != l && l.length > 0) return { type: "voice", text: l };
            let o = c.ZP.getEmbeddedActivitiesForChannel(e.id),
              s = (null != o ? o : [])
                .map((e) => {
                  var t;
                  return null === (t = h.Z.getApplication(e.applicationId)) ||
                    void 0 === t
                    ? void 0
                    : t.name;
                })
                .filter(U.lm);
            if (s.length > 0)
              return { type: "embedded-activities", name: s.join(", ") };
            return null;
          }
          case H.d4z.GUILD_STAGE_VOICE: {
            let t = p.ZP.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
          }
          default:
            return null;
        }
      }
      function e_(e, t, n, i, r) {
        let l = null != n && (n.id === e.id || i === e.id),
          o = null != n && n.isThread() && n.parent_id === e.id;
        if (A.uC.has(e.type)) {
          let e = d()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
          if (l) return e;
          if (o) return !(n.id in t) && e.unshift(n.id), e;
          else if (r)
            return e.filter(
              (e) => !N.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0,
            );
          else return e;
        }
        return [];
      }
      function eI() {
        return !1;
      }
      function eS(e, t) {
        return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
      }
      function ev(e, t) {
        let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
        if (R.ZP.getMentionCount(e.id) > 0) return !0;
        for (let t in i[e.id]) if (R.ZP.getMentionCount(t) > 0) return !0;
        if (
          null != n &&
          (n.id === e.id || (n.isThread() && n.parent_id === e.id))
        )
          return true;
        let r = m.Z.getNewChannelIds(e.category.guild.id);
        if (r.size > W);
        else if (r.has(e.id)) return !0;
        return !1;
      }
      function em(e, t, n) {
        let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
        if (
          t.type === H.d4z.GUILD_DIRECTORY ||
          !e.optInEnabled ||
          t.isGuildVocal() ||
          e.optedInChannels.has(t.id) ||
          t.isThread() ||
          (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
          (e.hideResourceChannels && t.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL))
        )
          return !1;
        if (
          (null != i &&
            (i.id === t.id || (i.isThread() && i.parent_id === t.id))) ||
          R.ZP.getMentionCount(t.id) > 0
        )
          return !0;
        let l = m.Z.getNewChannelIds(e.id),
          o = Array.from(l).sort((e, t) => G.default.compare(t, e));
        if (l.has(t.id) && o.indexOf(t.id) < W) return !0;
        for (let e in r[t.id])
          if (
            R.ZP.getMentionCount(e) > 0 ||
            R.ZP.hasUnread(e) ||
            R.ZP.hasRecentlyVisitedAndRead(e)
          )
            return !0;
        return (
          !(
            e.mutedChannelIds.has(t.id) ||
            (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))
          ) &&
          (!!R.ZP.hasRecentlyVisitedAndRead(t.id) || !1)
        );
      }
      let eT = new Set(Object.values(j.z));
    },
    203818: function (e, t, n) {
      var i,
        r = n(442837),
        l = n(570140);
      function o(e, t, n) {
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
      let s = {};
      function a(e) {
        let { guildId: t, expand: n } = e;
        n ? (s[t] = !0) : delete s[t];
      }
      class u extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          s = null != e ? e : {};
        }
        isVoiceCategoryExpanded(e) {
          var t;
          return null !== (t = null != e && s[e]) && void 0 !== t && t;
        }
        isVoiceCategoryCollapsed(e) {
          return !this.isVoiceCategoryExpanded(e);
        }
        getState() {
          return s;
        }
      }
      o(u, "displayName", "ChannelListVoiceCategoryStore"),
        o(u, "persistKey", "ChannelListVoiceCategoryStore"),
        (t.Z = new u(l.Z, {
          VOICE_CATEGORY_COLLAPSE: a,
          VOICE_CATEGORY_EXPAND: a,
        }));
    },
    443063: function (e, t, n) {
      var i, r, l, o;
      n.d(t, {
        z: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).GUILD_PREMIUM_PROGRESS_BAR =
          "guild-premium-progress-bar"),
        (l.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events"),
        (l.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options"),
        (l.GUILD_FAVORITES = "favorites"),
        (l.GUILD_CHANNEL_LIST_OPT_IN_NOTICE =
          "guild-channel-list-opt-in-notice"),
        (l.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (l.GUILD_SHOP = "shop"),
        (l.GUILD_MEMBER_APPLICATIONS = "member-applications"),
        (l.GUILD_HOME = "@home"),
        (l.CHANNELS_AND_ROLES = "channels-and-roles"),
        (l.BROWSE_CHANNELS = "browse-channels"),
        (l.GUILD_DIRECTORY = "guild-directory"),
        (l.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR =
          "guild-new-member-actions-progress-bar"),
        (l.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"),
        ((o = r || (r = {})).SPACER = "spacer"),
        (o.GUILD_PROGRESS = "guild-progress"),
        (o.MFA_WARNING = "mfa-warning"),
        (o.LIVE_CHANNEL_NOTICE = "live-channel-notice");
    },
    358555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        s = n(481060),
        a = n(540059),
        u = n(666188),
        d = n(372769),
        c = n(523751),
        h = n(623624),
        f = n(290034),
        g = n(271383),
        C = n(594174),
        p = n(267642),
        E = n(981631),
        _ = n(388032),
        I = n(70172);
      function S(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
          l = (0, o.e7)([C.default, g.ZP], () => {
            let e = C.default.getCurrentUser();
            return g.ZP.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: a, premiumSubscriberCount: u } = t;
        if (0 === u && a === E.Eu4.NONE) return null;
        let d = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !r &&
                (0, h.f)({
                  guildId: t.id,
                  location: {
                    section: E.jXE.GUILD_HEADER,
                    object: E.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          c = a === E.Eu4.NONE ? _.intl.string(_.t.c2wsn5) : p.nW(a),
          S = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: I.tierTooltipTitle, children: c }),
              (0, i.jsx)("div", {
                children: _.intl.format(_.t.If4iTU, { subscriberCount: u }),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: I.guildIconContainer,
          children: (0, i.jsx)(s.Tooltip, {
            text: S,
            position: "bottom",
            "aria-label": null != c ? c : "",
            children: (e) =>
              (0, i.jsx)(s.Clickable, {
                ...e,
                className: I.__invalid_premiumGuildIcon,
                onClick: d,
                children: (0, i.jsx)(f.Z, {
                  premiumTier: a,
                  iconBackgroundClassName: n
                    ? I.boostedGuildTierIconBackgroundWithVisibleBanner
                    : I.guildBadgeIcon,
                  iconClassName:
                    n && a !== E.Eu4.TIER_3
                      ? I.boostedGuildTierMutedIconWithVisibleBanner
                      : null,
                }),
              }),
          }),
        });
      }
      function v(e) {
        let { guild: t, disableColor: n, disableBoostClick: r } = e;
        return (0, u.Z)(t)
          ? (0, i.jsx)("div", {
              className: I.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: s.Tooltip.Colors.PRIMARY,
                className: l()(I.guildBadge, { [I.disableColor]: n }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: I.guildIconContainer,
              children: (0, i.jsx)(d.Z, {
                guild: t,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: s.Tooltip.Colors.PRIMARY,
                className: l()(I.guildBadge, { [I.disableColor]: n }),
              }),
            });
      }
      function m(e) {
        let { guild: t, disableBoostClick: n, ...r } = e,
          l = !(0, a.Q3)("GuildHeaderGuildBadge") && r.isBannerVisible;
        return (0, u.Z)(t)
          ? (0, i.jsx)(v, { guild: t, disableColor: !1, disableBoostClick: n })
          : t.hasFeature(E.oNc.VERIFIED) || t.hasFeature(E.oNc.PARTNERED)
            ? (0, i.jsx)(v, { guild: t, disableColor: !l })
            : (0, i.jsx)(S, {
                guild: t,
                isBannerVisible: l,
                disableBoostClick: n,
              });
      }
    },
    690221: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        l = n(481060),
        o = n(703656),
        s = n(981631);
      t.Z = r.forwardRef(function (e, t) {
        let {
            href: n,
            children: a,
            onClick: u,
            onKeyPress: d,
            focusProps: c,
            ...h
          } = e,
          f = r.useCallback(
            (e) => {
              if (!e.repeat)
                (e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) &&
                  (e.preventDefault(),
                  null != n && (0, o.uL)(n),
                  null == u || u()),
                  null == d || d(e);
            },
            [n, d, u],
          ),
          g = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, o.uL)(n),
                  null == u || u();
            },
            [n, u],
          ),
          C = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: g,
            onKeyPress: f,
            ...h,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...c, children: C });
      });
    },
    798423: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return r;
        },
      });
      var i = n(863750);
      function r() {
        return i.Z.get("enable_recently_active");
      }
      n(238428);
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
        l = n(120356),
        o = n.n(l),
        s = n(628238),
        a = n(492593),
        u = n(25015),
        d = n(963550),
        c = n(845080),
        h = n(46124);
      t.Z = r.memo(function (e) {
        var t;
        let {
            message: n,
            channel: r,
            compact: l,
            className: f,
            isGroupStart: g,
            hideSimpleEmbedContent: C = !0,
            disableInteraction: p,
          } = e,
          E = (0, s.A)(
            (null !== (t = n.editedTimestamp) && void 0 !== t
              ? t
              : n.timestamp
            ).valueOf(),
          ),
          { content: _ } = (0, u.Z)(n, {
            hideSimpleEmbedContent: C,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
          });
        return (0, i.jsx)(a.Z, {
          compact: l,
          className: o()(f, {
            [h.message]: !0,
            [h.cozyMessage]: !l,
            [h.groupStart]: g,
          }),
          childrenHeader: (0, c.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, d.Z)(e, _),
          disableInteraction: p,
        });
      });
    },
    963550: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(930282);
      function l(e, t) {
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
        l = n(901461),
        o = n(464891);
      let s = r.memo(o.ZP);
      function a(e) {
        let {
          message: t,
          channel: n,
          author: r,
          compact: o,
          animateAvatar: a,
          guildId: u,
          isGroupStart: d = !0,
          roleIcon: c,
          hideTimestamp: h,
        } = e;
        return !(0, l.Z)(t) && (d || o)
          ? (0, i.jsx)(s, {
              message: t,
              channel: n,
              author: r,
              guildId: u,
              compact: o,
              animate: a,
              roleIcon: c,
              hideTimestamp: h,
            })
          : void 0;
      }
    },
    18036: function (e, t, n) {
      n(47120);
      var i,
        r = n(442837),
        l = n(570140),
        o = n(592125),
        s = n(944486),
        a = n(9156);
      function u(e, t, n) {
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
      let d = {},
        c = {},
        h = {};
      function f() {
        let e = s.Z.getChannelId();
        if (null == e) return;
        let t = o.Z.getChannel(e);
        if (null == t || null == t.guild_id) return;
        let n = t.guild_id;
        if (
          (null == h[e] && (h[e] = 0),
          t.isThread() ||
            (a.ZP.isOptInEnabled(n) && !a.ZP.isChannelOrParentOptedIn(n, t.id)))
        ) {
          delete h[e], null != d[n] && d[n].delete(e);
          return;
        }
        if (
          (h[e]++, null == d[n] && (d[n] = new Set()), a.ZP.isFavorite(n, e))
        ) {
          d[n].delete(e);
          return;
        }
        if ((null == c[n] || !c[n].has(e)) && h[e] > 50) return d[n].add(e), !0;
      }
      class g extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          var t, n;
          if ((this.syncWith([s.Z], f), null == e)) return;
          let {
            suggestedChannels: i,
            dismissedSuggestions: r,
            channelOpensByChannelId: l,
          } = e;
          if (null != i)
            for (let e in i)
              (t = new Set(i[e])), (d[e] = void 0 !== t ? t : new Set());
          if (null != r)
            for (let e in r)
              (n = new Set(r[e])), (c[e] = void 0 !== n ? n : new Set());
          h = null != l ? l : {};
        }
        getSuggestedChannelId(e) {
          return null;
        }
        getState() {
          return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {},
          };
        }
      }
      u(g, "displayName", "FavoritesSuggestionStore"),
        u(g, "persistKey", "FavoritesSuggestionStore"),
        (t.Z = new g(l.Z, {
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { guildId: t, channelId: n } = e;
            return (
              null == c[t] && (c[t] = new Set()),
              c[t].add(n),
              d[t].delete(n),
              !0
            );
          },
        }));
    },
    798379: function (e, t, n) {
      n(47120);
      var i,
        r = n(442837),
        l = n(570140);
      function o(e, t, n) {
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
      let s = new Set();
      class a extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          s.clear(), null == e || e.guilds.forEach((e) => s.add(e));
        }
        isCollapsed(e) {
          return s.has(e);
        }
        getState() {
          return { guilds: s };
        }
      }
      o(a, "displayName", "RecentlyActiveCollapseStore"),
        o(a, "persistKey", "RecentlyActiveCollapseStore"),
        (t.Z = new a(l.Z, {
          SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
            let { guildId: t, collapsed: n } = e;
            n ? s.add(t) : s.delete(t);
          },
        }));
    },
    91802: function (e, t, n) {
      n.d(t, {
        n: function () {
          return l;
        },
      });
      var i = n(442837),
        r = n(351402);
      function l() {
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
          return l;
        },
      });
      var i = n(990547),
        r = n(213609);
      function l(e, t) {
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
          return c;
        },
        rx: function () {
          return d;
        },
        sB: function () {
          return h;
        },
        vY: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(570140),
        r = n(821849),
        l = n(307643),
        o = n(981631);
      function s(e) {
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
        var t;
        return {
          id: e.id,
          sku: s(e),
          summary: e.description,
          description: e.description,
          benefits:
            null !== (t = e.store_listing_benefits) && void 0 !== t ? t : [],
          thumbnail: e.image_asset,
          published: e.published,
        };
      }
      function u(e) {
        for (let t of (i.Z.dispatch({
          type: "SKUS_FETCH_SUCCESS",
          skus: e.map(s),
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
      async function d(e, t) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
          applicationId: e,
          groupListingId: t,
        });
        try {
          var n;
          let r = await l.jz(e, t);
          return (
            i.Z.dispatch({
              type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
              applicationId: e,
              groupListing: r,
            }),
            u(null !== (n = r.subscription_listings) && void 0 !== n ? n : []),
            r
          );
        } catch (t) {
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
            applicationId: e,
          });
        }
      }
      async function c(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
          guildId: e,
        });
        try {
          let t = await l.GF(e);
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
      function h(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
          guildId: e,
        });
      }
      async function f(e) {
        i.Z.dispatch({
          type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
          planId: e,
        });
        try {
          var t;
          let n = await l.a_(e);
          i.Z.dispatch({
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: n,
          });
          let o =
            null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
          await Promise.all(
            o.map((t) => {
              if (t.subscription_plans[0].id === e)
                return r.GZ(t.id, void 0, void 0, !0);
            }),
          ),
            u(o);
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
        l,
        o,
        s,
        a,
        u = n(512722),
        d = n.n(u),
        c = n(442837),
        h = n(759174),
        f = n(570140),
        g = n(959546),
        C = n(55563);
      function p(e) {
        return "subscription_listing:".concat(e);
      }
      function E(e) {
        return "application:".concat(e);
      }
      function _(e) {
        return "plan:".concat(e);
      }
      function I(e, t, n) {
        return "entitlement:".concat(e, ":").concat(n, ":").concat(t);
      }
      function S(e, t) {
        return "entitlement:".concat(t, ":").concat(e);
      }
      ((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (l[(l.FETCHING = 1)] = "FETCHING"),
        (l[(l.FETCHED = 2)] = "FETCHED");
      let v = new h.h(
          (e) => [E(e.application_id), ...e.subscription_listings_ids.map(p)],
          (e) => e.id,
        ),
        m = new h.h(
          (e) => [E(e.application_id), _(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        T = new h.h(
          (e) => [
            I(e.applicationId, e.isValid(null, C.Z), e.guildId),
            S(e.isValid(null, C.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        N = {},
        A = {};
      function y(e) {
        var t;
        for (let n of (v.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            m.set(e.id, e);
          })(n);
      }
      class O extends (r = c.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = N[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return v.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = v.values(p(e));
          return (
            d()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return m.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return m.values(E(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = A[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = m.values(_(e));
          return d()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return T.values(I(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return T.values(S(t, e));
        }
      }
      (a = "ApplicationSubscriptionStore"),
        (s = "displayName") in (o = O)
          ? Object.defineProperty(o, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[s] = a),
        (t.Z = new O(f.Z, {
          LOGOUT: function () {
            v.clear(), m.clear(), T.clear(), (N = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            N[t] = 1;
            let i = v.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) m.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (N[t] = 2), y(n);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
            let { applicationId: t } = e;
            N[t] = 2;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
            let { guildId: t } = e;
            A[t] = 1;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
            let { guildId: t, entitlements: n } = e;
            (A[t] = 2),
              n.forEach((e) => {
                let t = g.Z.createFromServer(e);
                T.set(t.id, t);
              });
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
            let { guildId: t } = e;
            A[t] = 0;
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (
            e,
          ) {
            let { groupListing: t } = e;
            y(t);
          },
        }));
    },
    22082: function (e, t, n) {
      n(47120);
      var i,
        r,
        l,
        o,
        s = n(442837),
        a = n(570140),
        u = n(45114),
        d = n(897473),
        c = n(581883),
        h = n(314897),
        f = n(592125),
        g = n(984933),
        C = n(271383),
        p = n(430824),
        E = n(306680),
        _ = n(9156),
        I = n(70956),
        S = n(709054),
        v = n(981631);
      let m = new Set(),
        T = {},
        N = {};
      function A(e, t) {
        let n = T[e];
        if (null != n && null != t && n.has(t)) {
          var i;
          _.ZP.isOptInEnabled(e) &&
            !(null === (i = f.Z.getChannel(t)) || void 0 === i
              ? void 0
              : i.isThread()) &&
            null == E.ZP.ackMessageId(t) &&
            a.Z.wait(() =>
              (0, u.In)(t, !0, !0, S.default.atPreviousMillisecond(t)),
            );
        }
      }
      function y(e) {
        var t;
        if (null != T[e]) return;
        let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
          i =
            null === (t = C.ZP.getMember(e, h.default.getId())) || void 0 === t
              ? void 0
              : t.joinedAt;
        if (null == i) return;
        T[e] = new Set();
        let r = new Date(i).getTime();
        if (0 !== n.length)
          (T[e] = new Set(
            n.filter((t) => {
              let n = S.default.extractTimestamp(t);
              return (
                null == E.ZP.getTrackedAckMessageId(t) &&
                n > Date.now() - I.Z.Millis.WEEK &&
                n > c.Z.getGuildRecentsDismissedAt(e) &&
                n > r &&
                !_.ZP.isChannelOrParentOptedIn(e, t)
              );
            }),
          )),
            (N[e] = Date.now());
      }
      function O() {
        S.default.keys(T).forEach((e) => {
          let t = T[e];
          T[e] = new Set(
            [...t].filter((t) => !_.ZP.isChannelOrParentOptedIn(e, t)),
          );
        });
      }
      class L extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(g.ZP, h.default, C.ZP, _.ZP, E.ZP, c.Z),
            this.syncWith([_.ZP], O);
        }
        getNewChannelIds(e) {
          var t;
          return (
            null != e && null == T[e] && y(e),
            null != e && null !== (t = T[e]) && void 0 !== t ? t : m
          );
        }
        shouldIndicateNewChannel(e, t) {
          var n;
          if (null == e) return !1;
          let i = p.Z.getGuild(e);
          return (
            !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) &&
            (null != e && null == T[e] && y(e),
            (null === (n = T[e]) || void 0 === n ? void 0 : n.has(t)) &&
              null == E.ZP.getTrackedAckMessageId(t))
          );
        }
      }
      (o = "NewChannelsStore"),
        (l = "displayName") in (r = L)
          ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[l] = o),
        (t.Z = new L(a.Z, {
          BULK_CLEAR_RECENTS: function (e) {
            let { guildId: t, channelIds: n } = e;
            if (null == T[t]) return !1;
            n.forEach((e) => T[t].delete(e)), 0 === T[t].size && delete T[t];
          },
          CHANNEL_ACK: () => !0,
          CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            return (
              null != t &&
              (null == T[t] || N[t] < Date.now() - I.Z.Millis.HOUR
                ? (y(t), !0)
                : (null != n && A(t, n), !1))
            );
          },
          SIDEBAR_VIEW_CHANNEL: function (e) {
            let { guildId: t, channelId: n, sidebarType: i } = e;
            return null != t && i === d.tI.VIEW_CHANNEL && (A(t, n), !1);
          },
          SIDEBAR_VIEW_GUILD: function (e) {
            let { guildId: t, baseChannelId: n } = e;
            return null != t && (A(t, n), !1);
          },
          GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete T[t.id];
          },
          CHANNEL_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            !n.isVocal() &&
              ((T[n.guild_id] =
                null !== (t = T[n.guild_id]) && void 0 !== t ? t : new Set()),
              T[n.guild_id].add(n.id));
          },
        }));
    },
    170671: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(692547),
        l = n(313201);
      function o(e) {
        let { isSelected: t, ...n } = e,
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
        l = n(192379),
        o = n(120356),
        s = n.n(o),
        a = n(481060),
        u = n(598077),
        d = n(231220),
        c = n(107720);
      function h(e, t, n) {
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
      class f extends (i = l.PureComponent) {
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              renderMoreUsers: i,
            } = this.props,
            r = [],
            l = e.length === t ? e.length : t - 1,
            o = 0;
          for (; o < l && o < e.length; ) {
            let t = o === e.length - 1;
            r.push(
              n(e[o] || null, t ? null : d.avatarMasked, "user-".concat(o), t),
            ),
              o++;
          }
          if (o < e.length) {
            let t = Math.min(e.length - o, 99);
            r.push(i("+".concat(t), d.moreUsers, "more-users", t));
          }
          return r;
        }
        renderIcon() {
          return this.props.icon
            ? (0, r.jsx)("div", {
                className: d.iconContainer,
                children: (0, r.jsx)(a.VoiceNormalIcon, {
                  size: "xs",
                  color: "currentColor",
                  colorClass: d.foreground,
                  className: d.icon,
                }),
              })
            : null;
        }
        render() {
          let { className: e } = this.props;
          return (0, r.jsxs)("div", {
            className: s()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()],
          });
        }
        constructor(...e) {
          super(...e),
            h(this, "_ref", void 0),
            h(this, "defaultRenderUser", (e, t, n, i) => {
              let { onClick: l, size: o, guildId: h } = this.props,
                f = e instanceof u.Z ? e : null != e ? e.user : null;
              return null == f
                ? (0, r.jsx)("div", { className: s()(d.emptyUser, t) }, n)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: f.getAvatarURL(h, (0, a.getAvatarSize)(o)),
                      size: o,
                      "aria-label": f.username,
                      className: s()(t, c.cursorPointer, d.avatarSize),
                      onClick: (e) => (null != l ? l(e, f, this._ref) : null),
                    },
                    f.id,
                  );
            });
        }
      }
      h(f, "defaultProps", {
        max: 10,
        renderMoreUsers: function (e, t, n) {
          return (0, r.jsx)("div", { className: t, children: e }, n);
        },
        size: a.AvatarSizes.SIZE_24,
      }),
        (t.Z = f);
    },
    58468: function (e, t, n) {
      n(47120);
      var i,
        r = n(442837),
        l = n(570140),
        o = n(709054),
        s = n(592125);
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
      let u = {},
        d = u;
      function c() {
        o.default.keys(d).forEach((e) => {
          null == s.Z.getChannel(e) && delete d[e];
        });
      }
      class h extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z), (d = null != e ? e : u);
        }
        getState() {
          return d;
        }
        getCollapsed() {
          return d;
        }
        isCollapsed(e) {
          return d[e] || !1;
        }
      }
      a(h, "displayName", "CollapsedVoiceChannelStore"),
        a(h, "persistKey", "collapsedChannels"),
        (t.Z = new h(l.Z, {
          CONNECTION_OPEN: c,
          OVERLAY_INITIALIZE: c,
          CHANNEL_COLLAPSE: function (e) {
            let { channelId: t } = e;
            d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
          },
        }));
    },
    55589: function (e, t, n) {
      let i, r, l;
      n(47120), n(653041);
      var o,
        s,
        a,
        u,
        d,
        c,
        h = n(913527),
        f = n.n(h),
        g = n(442837),
        C = n(759174),
        p = n(570140),
        E = n(333023),
        _ = n(355298),
        I = n(333984),
        S = n(131704),
        v = n(592125),
        m = n(430824),
        T = n(306680),
        N = n(9156),
        A = n(594174),
        y = n(709054);
      ((a = o || (o = {})).DEFAULT = "DEFAULT"), (a.FAVORITE = "FAVORITE");
      let O = new C.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function L(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = T.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  r = e.isMessageRequestTimestamp;
                if (null != r) {
                  let e = f()(r).valueOf(),
                    t = y.default.fromTimestamp(e);
                  return y.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: _.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id),
        };
      }
      function P() {
        O.clear(),
          Object.values(v.Z.getMutablePrivateChannels()).forEach((e) => {
            O.set(e.id, L(e));
          });
      }
      function b() {
        let e = v.Z.getMutablePrivateChannels();
        for (let t in e) O.set(t, L(e[t]));
      }
      let R =
        ((i = []),
        (r = []),
        (l = []),
        () => {
          let e = O.values("FAVORITE"),
            t = O.values("DEFAULT");
          return (
            (i !== e || r !== t) &&
              ((l = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (r = t)),
            l
          );
        });
      class Z extends (s = g.ZP.Store) {
        initialize() {
          this.waitFor(v.Z, m.Z, A.default, _.Z, N.ZP),
            this.syncWith([N.ZP, _.Z], P);
        }
        getPrivateChannelIds() {
          return R();
        }
        getSortedChannels() {
          return [O.values("FAVORITE"), O.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            O.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (c = "PrivateChannelSortStore"),
        (d = "displayName") in (u = Z)
          ? Object.defineProperty(u, d, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[d] = c),
        (t.Z = new Z(p.Z, {
          CONNECTION_OPEN: P,
          CONNECTION_OPEN_SUPPLEMENTAL: P,
          OVERLAY_INITIALIZE: P,
          CACHE_LOADED: b,
          CACHE_LOADED_LAZY: b,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, S.hv)(e.type) || O.has(e.id)) && O.set(e.id, L(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, S.hv)(t.type) || t.id === E.V) return !1;
            O.set(t.id, L(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return O.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!O.has(t)) return !1;
            let i = v.Z.getChannel(t);
            return null != i && O.set(t, L(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return O.delete(t);
          },
          LOGOUT: function () {
            O.clear();
          },
        }));
    },
    91047: function (e, t, n) {
      n.d(t, {
        Pv: function () {
          return l;
        },
        _j: function () {
          return o;
        },
        nm: function () {
          return s;
        },
        xS: function () {
          return a;
        },
      }),
        n(411104);
      var i = n(200651);
      n(192379);
      var r = n(239091);
      function l(e, t, l) {
        l.isGroupDM()
          ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("31996"),
                n.e("60677"),
                n.e("37690"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, i.jsx)(e, { ...n, user: t, channel: l });
            })
          : l.isDM()
            ? (0, r.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("90508"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70205"),
                  n.e("31996"),
                  n.e("56826"),
                  n.e("73466"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    channel: l,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != l.guild_id
              ? (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("31996"),
                    n.e("13125"),
                    n.e("54492"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: t,
                      channel: l,
                      guildId: l.guild_id,
                    });
                })
              : (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("10125"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, { ...n, user: t });
                });
      }
      function o(e, t) {
        let { user: l, channel: o, moderationAlertId: s, guildId: a, ...u } = t;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != a ? a : null == o ? void 0 : o.getGuildId();
        null != d &&
          (0, r.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("9124"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, i.jsx)(e, {
                ...t,
                user: l,
                channelId: null == o ? void 0 : o.id,
                guildId: d,
                moderationAlertId: s,
                ...u,
              });
          });
      }
      function s(e, t) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: s,
          onCloseContextMenu: a,
          isViewOnly: u,
        } = t;
        (0, r.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              user: l,
              guildId: o,
              analyticsLocations: s,
              onCloseContextMenu: a,
              isViewOnly: u,
            });
        });
      }
      function a(e, t, l) {
        null != l &&
          (0, r.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, i.jsx)(e, { ...t, guildId: l });
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
  },
]);
//# sourceMappingURL=6e42f91e74e6d80533db.js.map
