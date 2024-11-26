"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70989"],
  {
    511293: function (e) {
      e.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (e) {
      e.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    333848: function (e, t, n) {
      n(411104);
      var i = n(990547),
        r = n(283693),
        l = n(570140),
        o = n(408987),
        u = n(9156),
        a = n(621600),
        s = n(573261),
        c = n(87051),
        d = n(981631),
        f = n(526761);
      t.Z = {
        createChannel(e) {
          let {
            guildId: t,
            type: n,
            name: _,
            permissionOverwrites: E = [],
            bitrate: p,
            userLimit: m,
            parentId: g,
            skuId: h,
            branchId: I,
          } = e;
          l.Z.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT" });
          let S = { type: n, name: _, permission_overwrites: E };
          if (
            (null != p && p !== d.epw && (S.bitrate = p),
            null != m && m > 0 && (S.user_limit = m),
            null != g && (S.parent_id = g),
            n === d.d4z.GUILD_STORE)
          ) {
            if (null == h) throw Error("Unexpected missing SKU");
            (S.sku_id = h), (S.branch_id = I);
          }
          return s.Z.post({
            url: d.ANM.GUILD_CHANNELS(t),
            body: S,
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var t, n;
                return (0, r.iG)({
                  is_private: E.length > 0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (n = e.body) || void 0 === n
                        ? void 0
                        : n.type,
                });
              },
            },
            rejectWithError: !1,
          }).then(
            (e) => (
              u.ZP.isOptInEnabled(t) &&
                c.Z.updateChannelOverrideSettings(
                  t,
                  e.body.id,
                  { flags: f.ic.OPT_IN_ENABLED },
                  a.ZB.OptedIn,
                ),
              o.Z.checkGuildTemplateDirty(t),
              e
            ),
            (e) => {
              throw (
                (l.Z.dispatch({
                  type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                  errors: e.body,
                }),
                e)
              );
            },
          );
        },
        createRoleSubscriptionTemplateChannel: (e, t, n, l) =>
          s.Z.post({
            url: d.ANM.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: l },
            oldFormErrors: !0,
            trackedActionData: {
              event: i.NetworkActionNames.CHANNEL_CREATE,
              properties: (e) => {
                var t, n;
                return (0, r.iG)({
                  is_private: !0,
                  channel_id:
                    null == e
                      ? void 0
                      : null === (t = e.body) || void 0 === t
                        ? void 0
                        : t.id,
                  channel_type:
                    null == e
                      ? void 0
                      : null === (n = e.body) || void 0 === n
                        ? void 0
                        : n.type,
                });
              },
            },
            rejectWithError: !1,
          }),
      };
    },
    497321: function (e, t, n) {
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
        _ = n(261121);
      function E(e, t, n) {
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
        constructor(...e) {
          super(...e),
            E(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, s.jN)(d.S9g.USER_SETTINGS),
                c.Z.setSection(d.oAB.STREAMER_MODE));
            });
        }
      }
      E(p, "defaultProps", { disableButton: !1 }), (t.Z = p);
    },
    269128: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(772848),
        u = n(363969);
      let a = (0, o.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: r = !1 } = e;
        return (0, i.jsxs)("svg", {
          width: "18",
          height: "18",
          className: l()(u.button, n, { [u.open]: t, [u.withHighlight]: r }),
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
        l = n(481060),
        o = n(372900);
      t.Z = r.memo(function (e) {
        var t, n, u, a;
        let {
            user: s,
            size: c = l.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": f = !1,
            ..._
          } = e,
          E = r.useContext(o.Z);
        return (0, i.jsx)(l.Avatar, {
          src:
            ((t = s),
            (n = (0, l.getAvatarSize)(c)),
            (u = d),
            (a = E),
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
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(479531),
        l = n(388032);
      function o(e) {
        let [t, n] = i.useState(!1),
          [o, u] = i.useState(null);
        return [
          i.useCallback(
            async function () {
              for (var t = arguments.length, i = Array(t), o = 0; o < t; o++)
                i[o] = arguments[o];
              try {
                return u(null), n(!0), await e(...i);
              } catch (e) {
                e.message !== l.intl.string(l.t.N2yb9f) &&
                  u(e instanceof r.Z ? e : new r.Z(e));
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
          return u;
        },
      });
      var i = n(192379),
        r = n(924826),
        l = n(442837),
        o = n(607070);
      function u(e, t, n) {
        let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
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
        l = n(594174),
        o = n(933557),
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
            isSubscriptionGated: E,
            needSubscriptionToAccess: p,
          } = e,
          m = (0, o.F6)(n, l.default, r.Z);
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
            let g = [
              a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name }),
            ];
            if (
              (d > 0 &&
                g.push(
                  a.intl.formatToPlainString(a.t["3l1GOz"], {
                    mentionCount: d,
                  }),
                ),
              c && g.push(a.intl.string(a.t.x5zAGR)),
              null != f)
            ) {
              let e = n.userLimit;
              null != e && e > 0
                ? g.push(
                    a.intl.formatToPlainString(a.t["6qgTOD"], {
                      userCount: f,
                      limit: e,
                    }),
                  )
                : g.push(
                    a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }),
                  );
            }
            null != _ &&
              _ > 0 &&
              g.push(
                a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: _ }),
              );
            let h = s({ isSubscriptionGated: E, needSubscriptionToAccess: p });
            return null != h && g.push(h), g.join(", ");
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
        let I = [
            a.intl.formatToPlainString(t, { channelName: m, mentionCount: d }),
          ],
          S = s({ isSubscriptionGated: E, needSubscriptionToAccess: p });
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
        l = n(584825),
        o = n(17079),
        u = n(281320);
      function a(e, t) {
        let n = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, t)),
          l = (0, r.e7)([u.Z], () =>
            u.Z.getPriceTiersFetchStateForGuildAndType(e, t),
          );
        return (
          i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(e, t);
          }, [e, l, t]),
          { loading: l === u.M.FETCHING, priceTiers: n }
        );
      }
      function s(e) {
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
        (u = "displayName") in (o = _)
          ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[u] = a),
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
        l = n(73346),
        o = n(834431);
      function u(e, t) {
        let { shouldAnimate: n = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          u = r.QK.useSetting(),
          a = (0, o.n)(),
          s = n && a && u;
        return i.useMemo(() => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, l._W)(
              e.application_id,
              e.image_asset,
              t,
              s ? void 0 : "webp",
            );
        }, [t, e, s]);
      }
    },
    629481: function (e, t, n) {
      var i, r, l, o;
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
    841762: function (e, t, n) {
      n.d(t, {
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
        a = n(542508);
      function s(e) {
        let { alt: t, ...n } = e,
          [l, o] = r.useState(!0);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l &&
              (0, i.jsx)(u.Spinner, {
                type: u.Spinner.Type.LOW_MOTION,
                className: a.loader,
              }),
            (0, i.jsx)("img", { ...n, alt: t, onLoad: () => o(!1) }),
          ],
        });
      }
      function c(e) {
        let {
          src: t,
          backgroundSrc: n,
          alt: r,
          aspectRatio: l,
          className: u,
          imageChildClassName: c,
          ...d
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(a.container, u),
          children: [
            (0, i.jsx)("img", { src: n, alt: r, className: a.backgroundImage }),
            (0, i.jsx)("div", { className: a.backgroundImageFilter }),
            (0, i.jsx)("div", {
              style: { aspectRatio: l },
              className: a.imageContainer,
              children: (0, i.jsx)(s, {
                src: t,
                alt: r,
                className: o()(a.image, c),
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
        l = n(120356),
        o = n.n(l),
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
            header: l,
            artClassName: E,
            headerClassName: p,
            contentClassName: m,
            tryItText: g,
            dismissText: h,
            onTryFeature: I,
            onClose: S,
            className: C,
            inlineArt: T = !1,
            isPremiumFeature: v = !1,
            shouldUseHorizontalButtons: N = !1,
            showGIFTag: A = !1,
            dismissibleContent: b,
            position: L = "top",
            align: O = "center",
            art: R,
            isPremiumEarlyAccess: P = !1,
            maxWidth: y = 280,
            hideDismissButton: Z = !1,
            pointerClassName: M,
            dismissIconClassName: x,
            dismissIcon: j,
            onDismissIconClick: U,
          } = e,
          D = N ? u.Button.Sizes.LARGE : u.Button.Sizes.MAX,
          [F, w] = r.useState(!1),
          { ref: G, width: H } = (0, a.Z)();
        function k(e) {
          (0, s.EW)(b, { dismissAction: e });
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
            !F && n > y && w(!0);
          }, [F, H, G, y]),
          r.useEffect(() => {
            (0, s.kk)(b);
          }, [b]),
          (0, i.jsx)("div", {
            className: C,
            ref: t,
            children: (0, i.jsxs)("div", {
              className: o()(_.content, m, {
                [_.contentNoArt]: null == E || T,
                [_.contentPremium]: v || P,
              }),
              children: [
                null != j &&
                  (0, i.jsx)(u.Clickable, {
                    onClick: U,
                    className: x,
                    children: j,
                  }),
                (0, i.jsxs)("div", {
                  className: o()(E, T ? _.artInline : _.artAbsolute),
                  children: [A && (0, i.jsx)(c.Z, { className: _.gifTag }), R],
                }),
                (0, i.jsxs)("div", {
                  className: _.body,
                  children: [
                    (0, i.jsxs)(u.Heading, {
                      className: o()(v ? _.headerWithPremiumIcon : _.header, p),
                      variant: "heading-md/bold",
                      color: "always-white",
                      children: [
                        v && !P
                          ? (0, i.jsx)(u.NitroWheelIcon, {
                              size: "md",
                              color: "currentColor",
                              className: _.premiumIcon,
                            })
                          : null,
                        P
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
                        l,
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
                    F || !N
                      ? _.buttonContainerVertical
                      : _.buttonContainerHorizontal,
                  children:
                    null != I
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(u.Button, {
                              className: _.button,
                              size: D,
                              onClick: (e) => {
                                null == S || S(e), I(e), k(d.L.PRIMARY);
                              },
                              color:
                                v || P
                                  ? u.Button.Colors.BRAND_INVERTED
                                  : u.Button.Colors.WHITE,
                              children:
                                null != g ? g : f.intl.string(f.t.IHf1RE),
                            }),
                            !Z &&
                              (0, i.jsx)(u.Button, {
                                className: _.button,
                                size: D,
                                onClick: (e) => {
                                  null == S || S(e), k(d.L.DISMISS);
                                },
                                color:
                                  v || P
                                    ? u.Button.Colors.WHITE
                                    : u.Button.Colors.BRAND,
                                look:
                                  v || P
                                    ? u.Button.Looks.LINK
                                    : u.Button.Looks.FILLED,
                                children:
                                  null != h ? h : f.intl.string(f.t.om7Ovr),
                              }),
                          ],
                        })
                      : (0, i.jsx)(u.Button, {
                          className: _.button,
                          size: u.Button.Sizes.MAX,
                          onClick: (e) => {
                            null == S || S(e), k(d.L.PRIMARY);
                          },
                          color: u.Button.Colors.WHITE,
                          children: f.intl.string(f.t.HU2IR0),
                        }),
                }),
                (0, i.jsx)("div", {
                  className: o()(_.pointer, M, {
                    [_.bottomPointer]: "top" === L,
                    [_.centerLeftPointer]: "right" === L && "center" === O,
                    [_.topLeftPointer]: "right" === L && "top" === O,
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
          return S;
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
        m = n(695346),
        g = n(572004),
        h = n(388032),
        I = n(680475);
      function S(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: r,
            className: u,
            onClick: S,
            onRemove: C,
            selected: T,
            ariaLabel: v,
          } = e,
          { name: N, emojiId: A, emojiName: b } = t,
          L = null != C,
          [O, R] = o.useState(!1),
          P = (0, c.e7)([p.ZP], () =>
            null != A ? p.ZP.getUsableCustomEmojiById(A) : null,
          ),
          y = L || null != S,
          Z = (!L || !O) && (null != A || null != b),
          M = 0 === i,
          x = o.useRef(null),
          j = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
          U = (e) => {
            let i = m.Sb.getSetting();
            g.wS &&
              i &&
              (0, f.jW)(e, async () => {
                let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, l.jsx)(e, { ...n, tag: t });
              });
          },
          D = (0, l.jsxs)(l.Fragment, {
            children: [
              Z
                ? (0, l.jsx)(_.Z, {
                    className: a()(I.emoji, { [I.small]: M }),
                    emojiId: A,
                    emojiName: b,
                    animated: !!(null == P ? void 0 : P.animated),
                    size: "reaction",
                  })
                : null,
              O &&
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
                variant: M ? "text-xs/semibold" : "text-sm/semibold",
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
                [I.clickable]: y,
                [I.small]: M,
                [I.selected]: T,
              },
              u,
            ),
            onClick: (e) => {
              null == S || S(e),
                null == C || C(t),
                !j && null != x.current && x.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => L && R(!0),
            onMouseLeave: () => L && R(!1),
          },
          w = (0, s.JA)("forum-tag-".concat(t.id));
        return y
          ? (0, l.jsx)(d.Clickable, {
              ...w,
              innerRef: x,
              focusProps: { ringTarget: x },
              "aria-label":
                null != v
                  ? v
                  : h.intl.formatToPlainString(h.t.iyRTLi, { tagName: N }),
              role: "button",
              "aria-pressed": T,
              ...F,
              children: D,
            })
          : (0, l.jsx)("div", { ...F, children: D });
      }
      function C(e) {
        let { tags: t, count: n, size: i = 1 } = e,
          r = 0 === i;
        return (0, l.jsx)(d.Tooltip, {
          "aria-label": h.intl.string(h.t["P/y+sr"]),
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
              children: (0, l.jsxs)(d.Text, {
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
          return m;
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
      function p(e) {
        let t = (0, r.e7)([o.Z, u.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = u.Z.getGuildPermissions(t);
            return null != n && i.Db(n, E.cv);
          }),
          n = (0, r.e7)([_.Z], () =>
            null != e ? _.Z.getGuildIncident(e) : null,
          ),
          l = null != n && (0, f.ur)(n);
        return {
          shouldShowIncidentActions: t,
          incidentData: n,
          isUnderLockdown: l,
        };
      }
      function m() {
        var e;
        let t = (function (e) {
            let t = s.default.getCurrentUser(),
              n = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((e) => o.Z.getGuild(e))) {
              if (null == r) continue;
              let l = n[r.id];
              if (
                !(
                  null == l ||
                  (!(0, f.i9)(l) && !(0, f.ur)(l)) ||
                  ((0, f.ur)(l) && r.id !== e)
                )
              ) {
                if (
                  i.Db(c.uB({ user: t, context: r, checkElevated: !1 }), E.cv)
                )
                  return r.id;
              }
            }
            return null;
          })(a.Z.getGuildId()),
          n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
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
          return I;
        },
        Lg: function () {
          return h;
        },
        OU: function () {
          return m;
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
          return g;
        },
        Vk: function () {
          return _;
        },
        _6: function () {
          return S;
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
        m = 100,
        g = 1,
        h = 50,
        I = 20,
        S = 150,
        C = "automod-profile-quarantine-alert";
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
      function u(e) {
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
            new Promise((u) => {
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
                        u(o),
                        n.onClose();
                    },
                    ...n,
                    onClose: () => (u(null), n.onClose()),
                  });
              });
            }),
          [l.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((o) => {
              (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("78273").then(n.bind(n, 41767)),
                  u = e.actions.find(
                    (e) => e.type === l.jj.USER_COMMUNICATION_DISABLED,
                  );
                return (n) =>
                  (0, i.jsx)(r, {
                    action: t,
                    isEdit: null != u,
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
      function s(e, t) {
        (0, r.openModalLazy)(async () => {
          let { default: r } = await n.e("28382").then(n.bind(n, 537623));
          return (n) => (0, i.jsx)(r, { ...n, messageId: e, guildId: t });
        });
      }
      function c(e) {
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
          return T;
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
          return v;
        },
        mm: function () {
          return C;
        },
        qY: function () {
          return h;
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
      function E(e) {
        return { type: e.type, metadata: (0, d.X)(e.metadata) };
      }
      function p(e) {
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
            actions: e.actions.filter(a.lm).map(E),
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
      function m(e) {
        return { type: e.type, metadata: (0, d.C)(e.metadata) };
      }
      function g(e) {
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
          actions: e.actions.filter(a.lm).map(m),
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
      async function h(e) {
        let t = p(e),
          n = await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
            body: t,
            rejectWithError: !1,
          });
        return (0, d.C)(n.body);
      }
      async function I(e) {
        let t = p(e);
        return (
          delete t.id,
          g(
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
      async function S(e) {
        let t = p(e);
        return g(
          (
            await i.tn.patch({
              url: _.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
              body: t,
              rejectWithError: !1,
            })
          ).body,
        );
      }
      async function C(e, t) {
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
        return Array.isArray(t.body) ? t.body.map(g) : [];
      }
      async function v(e, t, n) {
        if (!!u.Z.can(_.Plq.MANAGE_MESSAGES, t))
          await i.tn.post({
            url: _.ANM.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
            body: { message_id: e, channel_id: t.id, alert_action_type: n },
            rejectWithError: !1,
          });
      }
      function N(e, t, n) {
        let r = o.Z.getGuild(e);
        if (null != r && !!u.Z.can(_.Plq.MANAGE_GUILD, r))
          (0, f.UV)(() => {
            (0, l.yw)(_.rMx.GUILD_AUTOMOD_FEEDBACK, {
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
        u = n(786761),
        a = n(592125),
        s = n(375954),
        c = n(709054),
        d = n(539573),
        f = n(825829),
        _ = n(981631);
      function E(e, t, n) {
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
      let p = {},
        m = 0,
        g = {},
        h = {},
        I = (e, t) => {
          let n = (0, o.hc)(e),
            i = {
              id: n,
              isBlockedEdit: (0, o.Bz)(e),
              messageData: e,
              errorMessage: (0, d.uF)(e, t),
            };
          (p[n] = i), m++;
        },
        S = (e) => p[e],
        C = (e) => {
          null != p[e] && delete p[e], m++;
        };
      function T(e) {
        let { messageData: t, errorResponseBody: n } = e;
        return I(t, n), !0;
      }
      function v(e) {
        var t;
        let { channelId: n, messages: i } = e,
          r =
            null === (t = a.Z.getChannel(n)) || void 0 === t
              ? void 0
              : t.getGuildId();
        if (null == r) return !1;
        let l = h[r],
          o = i.reduce((e, t) => {
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
          }, l);
        return null != o && h[r] !== o && ((h[r] = o), !0);
      }
      class N extends (i = r.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((p = e.automodFailedMessages),
              (g = e.mentionRaidDetectionByGuild));
        }
        getState() {
          return {
            automodFailedMessages: p,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: h,
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
          return m;
        }
        getMentionRaidDetected(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : null;
        }
        getLastIncidentAlertMessage(e) {
          var t;
          return null !== (t = h[e]) && void 0 !== t ? t : null;
        }
      }
      E(N, "displayName", "GuildAutomodMessageStore"),
        E(N, "persistKey", "GuildAutomodMessages"),
        (t.Z = new N(l.Z, {
          CONNECTION_OPEN: function (e) {
            return (p = {}), m++, !0;
          },
          LOAD_MESSAGES_SUCCESS: v,
          LOCAL_MESSAGES_LOADED: v,
          MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((h[t] = i.id), !0);
          },
          MESSAGE_SEND_FAILED_AUTOMOD: T,
          MESSAGE_EDIT_FAILED_AUTOMOD: T,
          REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return C(t), !0;
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
            C(n);
          },
          AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let {
              guildId: t,
              decisionId: n,
              suspiciousMentionActivityUntil: i,
            } = e;
            return (
              (g[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: i,
              }),
              !0
            );
          },
          AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete g[t], !0;
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
        l = n.n(r),
        o = n(297700),
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
        return (0, i.jsx)(o.Z, {
          className: l()(n, c[t]),
          size: a,
          children: (0, i.jsx)(u.Z, {
            tier: t,
            className: l()(r, s.boostedGuildIconGem, d[t]),
          }),
        });
      }
    },
    527379: function (e, t, n) {
      n.d(t, {
        Dr: function () {
          return E;
        },
        YO: function () {
          return f;
        },
        _X: function () {
          return p;
        },
        _o: function () {
          return _;
        },
        nb: function () {
          return m;
        },
        zO: function () {
          return d;
        },
      });
      var i = n(570140),
        r = n(434404),
        l = n(703656),
        o = n(430824),
        u = n(241559),
        a = n(327999),
        s = n(981631),
        c = n(176505);
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
      function _(e, t) {
        let { continuationToken: n, ...r } = t;
        i.Z.dispatch({
          type: "MEMBER_SAFETY_PAGINATION_UPDATE",
          guildId: e,
          pagination: r,
        });
      }
      async function E(e, t) {
        await i.Z.dispatch({
          type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
          guildId: e,
          searchState: t,
        });
      }
      function p(e) {
        let t = (0, u.lv)(e),
          n = o.Z.getGuild(e);
        return (
          !!t &&
          null != n &&
          (n.hasFeature(s.oNc.COMMUNITY) ||
          n.hasFeature(s.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            ? ((0, l.uL)(s.Z5c.CHANNEL(e, c.oC.MEMBER_SAFETY)), !0)
            : (r.Z.open(n.id, s.pNK.MEMBERS), !0))
        );
      }
      async function m(e, t) {
        let n = await (0, a._2)(e, t);
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
          return u;
        },
        mh: function () {
          return s;
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
        u = async (e, t) => {
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
      async function s(e, t) {
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
          return m;
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
      let f = (e) => {
          let t = (0, r.e7)(
              [c.Z],
              () =>
                null != e
                  ? c.Z.getGuildProductsForGuildFetchState(e)
                  : c.M.FETCHED,
              [e],
            ),
            n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
          return (
            i.useEffect(() => {
              o &&
                (t === c.M.NOT_FETCHED ||
                  (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) &&
                n &&
                s.EB(e),
                u(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === c.M.FETCHED && !o }
          );
        },
        _ = function (e, t) {
          let { requireCurrentGuild: n } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
          return (
            i.useEffect(() => {
              let i = c.Z.getGuildProductFetchState(t);
              if ((!n || u === e) && o && i === c.M.NOT_FETCHED)
                try {
                  s.cf(e, t);
                } catch (e) {}
            }, [e, t, o, u, n]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(t))
          );
        },
        E = function (e) {
          let { publishedOnly: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (0, r.e7)([c.Z, o.Z], () =>
            c.Z.getGuildProductsForGuild(e, {
              publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e),
            }),
          );
        },
        p = (e) =>
          (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
        m = (e) =>
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
        l = n(73346),
        o = n(981631);
      let u = async (e, t, n) => {
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
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
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
        s = async (e) => {
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
        c = async (e, t) => {
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
        d = async (e) => {
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
        m = {},
        g = 10 * f.Z.Millis.MINUTE;
      function h(e) {
        return "guild:".concat(e);
      }
      function I(e) {
        return "guild:".concat(e, ":published");
      }
      let S = new c.h(
          (e) => {
            let t = [h(e.guild_id)];
            return e.published && t.push(I(e.guild_id)), t;
          },
          (e) =>
            (function (e) {
              let t = _.default.extractTimestamp(e.id);
              return e.published ? -t : -t + 1e12;
            })(e),
        ),
        C = [];
      class T extends (r = s.ZP.Store) {
        getGuildProductsForGuildFetchState(e) {
          var t;
          return null !== (t = E[e]) && void 0 !== t ? t : 0;
        }
        getGuildProduct(e) {
          return S.get(e);
        }
        getGuildProductsForGuild(e, t) {
          let { publishedOnly: n } = t;
          return null == e ? C : S.values(n ? I(e) : h(e));
        }
        getGuildProductFetchState(e) {
          var t;
          return null !== (t = p[e]) && void 0 !== t ? t : 0;
        }
        isGuildProductsCacheExpired(e) {
          var t;
          return Date.now() - (null !== (t = m[e]) && void 0 !== t ? t : 0) > g;
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
        (t.Z = new T(d.Z, {
          CONNECTION_OPEN: function () {
            S.clear(), (E = {}), (p = {}), (m = {});
          },
          GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: t } = e;
            (E[t] = 1),
              [...S.values(h(t))].forEach((e) => {
                S.delete(e.id);
              });
          },
          GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, products: n } = e;
            (E[t] = 2),
              (m[t] = Date.now()),
              n.forEach((e) => {
                S.set(e.id, e), (p[e.id] = 2);
              });
          },
          GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: t } = e;
            E[t] = 2;
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
            p[t] = 1;
          },
          GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: t } = e;
            (p[t.id] = 2), S.set(t.id, t);
          },
          GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: t, error: n } = e;
            (p[t] = 2), 404 === n.status && S.delete(t);
          },
        }));
    },
    863663: function (e, t, n) {
      n.d(t, {
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
      function s(e) {
        var t;
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
          } = e,
          d = {};
        (null == n ? void 0 : n.name) !== i && "" !== i.trim() && (d.name = i),
          (null !== (t = null == n ? void 0 : n.description) && void 0 !== t
            ? t
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
          return u;
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
          return g;
        },
        m: function () {
          return m;
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
        E = n(24753);
      function p(e) {
        let {
          showEditProduct: t,
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
          onReportProduct: m,
          closePopout: g,
          onSelect: h,
        } = e;
        return (0, i.jsx)("div", {
          className: E.menuContainer,
          children: (0, i.jsxs)(o.Menu, {
            navId: "guild-product-context",
            onClose: g,
            "aria-label": _.intl.string(_.t.Z146dH),
            onSelect: h,
            children: [
              (0, i.jsxs)(o.MenuGroup, {
                children: [
                  t &&
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
                    action: m,
                  }),
              }),
            ],
          }),
        });
      }
      function m(e) {
        let {
          product: t,
          guildId: n,
          showEditProduct: r,
          showUnpublishProduct: l,
          showTestDownload: u,
          showCopyLink: a,
          showDeleteProduct: s,
          showReportProduct: c,
          onEditProduct: d,
          onUnpublishProduct: f,
          onDeleteProduct: m,
          onCopyProductLink: g,
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
              (0, i.jsx)(p, {
                ...e,
                guildId: n,
                productId: t.id,
                showEditProduct: r,
                showUnpublishProduct: l,
                showCopyLink: a,
                showTestDownload: u,
                showReportProduct: c,
                showDeleteProduct: s,
                onEditProduct: d,
                onUnpublishProduct: f,
                onDeleteProduct: m,
                onCopyLink: g,
                onTestDownload: h,
                onReportProduct: I,
              }),
            children: (e, n) => {
              let { isShown: r } = n;
              return (0, i.jsx)(o.Clickable, {
                ...e,
                "aria-label": _.intl.formatToPlainString(_.t.RtqjeH, {
                  productName: t.name,
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
      function g(e) {
        let {
            product: t,
            guildId: n,
            onEditProduct: r,
            onUnpublishProduct: g,
            onDeleteProduct: h,
            onCopyProductLink: I,
            onTestDownload: S,
            disabled: C = !1,
          } = e,
          T = (0, a.U)(t, 600),
          v =
            null !== t.price_tier ? (0, s.T4)(t.price_tier, f.pK.USD) : void 0,
          N = (0, c.C)(t);
        return (0, i.jsxs)(o.ClickableContainer, {
          tag: "article",
          className: l()(E.productCardClickable, E.productCard, {
            [E.disabled]: C,
          }),
          onClick: C ? void 0 : r,
          onContextMenu: function (e) {
            (0, u.jW)(e, () =>
              Promise.resolve((e) =>
                (0, i.jsx)(p, {
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
                  onUnpublishProduct: g,
                  onDeleteProduct: h,
                  onCopyLink: I,
                  onTestDownload: S,
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
                      children: t.name,
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
                    t.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {}),
                  ],
                }),
                !C &&
                  (0, i.jsx)(m, {
                    product: t,
                    guildId: n,
                    showEditProduct: !0,
                    showUnpublishProduct: t.published,
                    showCopyLink: t.published,
                    showTestDownload: null != t.attachments,
                    showDeleteProduct: !0,
                    showReportProduct: !1,
                    onEditProduct: r,
                    onUnpublishProduct: g,
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
        l = n(44315),
        o = n(377171),
        u = n(981631),
        a = n(388032),
        s = n(383011);
      function c(e) {
        let {
          label: t,
          backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND,
          icon: l,
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
        l = n(399606),
        o = n(38618),
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
          E = (0, l.e7)([o.Z], () => o.Z.isConnected()),
          p = (0, l.e7)([a.Z], () =>
            null != t
              ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t)
              : a.M.FETCHED,
          ),
          m = r.useRef(c),
          g = r.useCallback(() => {
            if (null == t || !E || !0 === _) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (m.current || e === a.M.NOT_FETCHED) &&
              ((m.current = !1),
              u.FP(t, { includeSoftDeleted: d, countryCode: f }));
          }, [E, t, d, f, _]),
          h = r.useMemo(() => p === a.M.FETCHED && !0 !== m.current, [p, m]);
        return (0, i.jsx)(s.Provider, {
          value: { listingsLoaded: h, fetchGroupListingsForGuild: g },
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
    35125: function (e, t, n) {
      n.d(t, {
        PA: function () {
          return d;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return g;
        },
        eI: function () {
          return p;
        },
        vp: function () {
          return E;
        },
        y8: function () {
          return m;
        },
      });
      var i = n(367907),
        r = n(200876),
        l = n(430824),
        o = n(594174);
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
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.format(o, u);
      }
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = e,
          { content: o, formatParams: u } = _({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return a.intl.formatToParts(o, u);
      }
      function f(e, t) {
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
      function _(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, o);
        return (
          (t = _ ? (E ? a.t.Iy66Mz : a.t.eCgb2d) : E ? a.t.mPTTdn : a.t.mYjFFx),
          {
            content: t,
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
      function E(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = s,
            roleSubscriptionOnClickHandler: r = u.dG4,
            guildId: l,
            roleSubscriptionData: o,
          } = e,
          {
            guild: c,
            totalMonthsSubscribed: d,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, o);
        return (
          (t = _
            ? E
              ? a.t.OQ0OU1
              : a.t["+N9bxs"]
            : E
              ? a.t.OxP1ND
              : a.t["6Z1E+/"]),
          a.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == o ? void 0 : o.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: d,
          })
        );
      }
      function p(e) {
        return (0, r.l)(e);
      }
      function m(e, t, n, r) {
        var l;
        i.ZP.trackWithMetadata(
          u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
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
      function g(e, t) {
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
          return p;
        },
        HQ: function () {
          return S;
        },
        JH: function () {
          return v;
        },
        QV: function () {
          return T;
        },
        YB: function () {
          return C;
        },
        _1: function () {
          return I;
        },
        _k: function () {
          return _;
        },
        jO: function () {
          return E;
        },
        oC: function () {
          return N;
        },
        qi: function () {
          return m;
        },
        r4: function () {
          return h;
        },
        sp: function () {
          return g;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        r = n(442837),
        l = n(935369),
        o = n(38618);
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
            f = i.useRef(t);
          return (
            i.useEffect(() => {
              if (null == e || !c || !0 === u) return;
              let i = s.Z.getSubscriptionGroupListingsForGuildFetchState(e);
              (t || i === s.M.NOT_FETCHED) &&
                ((f.current = !1),
                a.FP(e, { includeSoftDeleted: n, countryCode: l }));
            }, [c, e, n, t, l, u]),
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
        E = (e) =>
          (0, r.e7)([s.Z], () =>
            null != e ? s.Z.getSubscriptionListing(e) : null,
          ),
        p = (e) => {
          let t = (0, u.f)("useGroupListingsForGuild");
          return (0, r.e7)([s.Z], () =>
            null != e && t ? s.Z.getSubscriptionGroupListingsForGuild(e) : d,
          );
        },
        m = function (e) {
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
        g = (e) => {
          let [t, n] = i.useState(!1),
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
              !t &&
                o.length > 0 &&
                (n(!0),
                Promise.all(o.map((e) => a.vY(e)))
                  .catch(() => {})
                  .then(() => {
                    n(!1);
                  }));
            }, [t, o]),
            { loading: t }
          );
        },
        h = () => {
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
        I = () => {
          let [e, t] = (0, l.Z)(a.AE),
            { loading: n, error: i } = t;
          return { error: i, submitting: n, archiveSubscriptionListing: e };
        },
        S = () => {
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
                  await a.O0({
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
        C = (e) =>
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
        N = (e) =>
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
        l = n(15729),
        o = n(731965);
      ((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] =
        "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS");
      let u = (0, l.U)((e) => ({
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
          return Z;
        },
        R7: function () {
          return H;
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
          return P;
        },
        d9: function () {
          return M;
        },
        mR: function () {
          return y;
        },
        p9: function () {
          return x;
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
        l = n.n(r),
        o = n(392711),
        u = n(772848),
        a = n(866442),
        s = n(731965),
        c = n(442837),
        d = n(80932),
        f = n(749210),
        _ = n(339085),
        E = n(73346),
        p = n(817460),
        m = n(423117),
        g = n(584825),
        h = n(289393),
        I = n(790285),
        S = n(303737),
        C = n(971792),
        T = n(22902),
        v = n(403474),
        N = n(944537),
        A = n(293810),
        b = n(981631),
        L = n(474936);
      function O(e, t, n) {
        let r = (0, N.n)((e) => e.setListing),
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
          o = (0, N.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
          });
        return [void 0 !== o ? o : n, l];
      }
      function R(e, t) {
        let n = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(e));
        return i.useMemo(() => t(n), [n]);
      }
      function P(e) {
        let t = R(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.name) && void 0 !== t
            ? t
            : "";
        });
        return O(e, "name", t);
      }
      function y(e) {
        let t = R(e, (e) => {
          var t;
          return null == e
            ? void 0
            : null === (t = e.subscription_plans[0]) || void 0 === t
              ? void 0
              : t.price;
        });
        return O(e, "priceTier", t);
      }
      function Z(e) {
        let t = R(e, (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.description) &&
            void 0 !== t
            ? t
            : "";
        });
        return O(e, "description", t);
      }
      function M(e, t) {
        let n = R(e, (e) => {
          if ((null == e ? void 0 : e.image_asset) != null)
            return (0, E._W)(e.application_id, e.image_asset, t);
        });
        return O(e, "image", n);
      }
      function x(e, t) {
        let n = (0, C.Z)(t, e);
        return O(
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
        let n = (0, C.Z)(t, e),
          r = (0, N.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleColor;
          }),
          l = (0, N.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n
              ? void 0
              : n.roleIcon;
          });
        return i.useMemo(() => {
          let e = { ...(null != n ? n : v.k) };
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
      function U(e, t) {
        let n = (0, C.Z)(t, e);
        return O(
          e,
          "roleColor",
          i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e
              ? e
              : b.p6O;
          }, [n]),
        );
      }
      function D(e, t) {
        let n = (0, C.Z)(t, e);
        return O(
          e,
          "channelAccessFormat",
          i.useMemo(
            () =>
              null == n
                ? N.I.SOME_CHANNELS_ACCESS
                : (0, I.MT)(n)
                  ? N.I.ALL_CHANNELS_ACCESS
                  : N.I.SOME_CHANNELS_ACCESS,
            [n],
          ),
        );
      }
      let F = [];
      function w(e) {
        let t = R(e, (e) =>
          null == e ? F : e.role_benefits.benefits.filter(p.rC),
        );
        return O(e, "channelBenefits", t);
      }
      let G = [];
      function H(e) {
        let t = R(e, (e) =>
          null == e ? G : e.role_benefits.benefits.filter(p.lL),
        );
        return O(e, "intangibleBenefits", t);
      }
      let k = new Set();
      function B(e, t) {
        return 0 === e.length
          ? k
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
        let n = (0, C.Z)(t, e),
          r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(t), [t]);
        return O(
          e,
          "tierEmojiIds",
          i.useMemo(() => (null == n ? k : B(r, n.id)), [r, n]),
        );
      }
      function V(e) {
        var t;
        let n = (0, g.oC)(e),
          { selectedOption: i } = (0, T.Z)(
            null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t
              ? t
              : null,
          );
        return O(e, "trialInterval", null != i ? i : null);
      }
      function z(e) {
        var t;
        let n = (0, g.oC)(e);
        return O(
          e,
          "trialLimit",
          null !== (t = null == n ? void 0 : n.max_num_active_trial_users) &&
            void 0 !== t
            ? t
            : null,
        );
      }
      function Y(e) {
        return (0, N.n)((t) => void 0 !== t.listings[e]);
      }
      function K(e) {
        return (0, N.n)((t) => {
          for (let n of e) if (void 0 !== t.listings[n]) return !0;
          return !1;
        });
      }
      function q(e) {
        let t = R(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
          [n] = O(e, "priceTier", void 0);
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
                  : b.pKx.USD,
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
      function X(e) {
        var t;
        (t = e),
          (0, s.j)(() => {
            N.n.setState((e) => ({
              listings: {
                ...e.listings,
                [t]: e.listings.nonexistantEditStateId,
              },
            }));
          });
      }
      async function J(e) {
        let { guildId: t, editStateId: n } = e,
          i = h.Z.getSubscriptionListing(n);
        l()(null != i, "listing doesnt exist");
        let r = i.role_id,
          u = i.id,
          a = N.n.getState().listings[n];
        l()(null != a, "edit state does not exist");
        let {
          roleColor: s,
          roleIcon: c,
          trialLimit: E,
          trialInterval: p,
          tierEmojiIds: g,
        } = a;
        (void 0 !== s || void 0 !== c) &&
          (await f.Z.updateRole(t, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji,
          }));
        let I = h.Z.getSubscriptionTrial(u);
        if (
          ((null != E || null != p || (null != I && null == p)) &&
            (await m.I1(t, u, { trial: p, max_num_active_trial_users: E })),
          void 0 !== g)
        ) {
          let e = B(_.ZP.getGuildEmoji(t), r),
            n = (0, o.difference)([...g], [...e]),
            i = (0, o.difference)([...e], [...g]),
            l = n
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
          await Promise.all([...l, ...u]);
        }
      }
      async function Q(e) {
        let {
            guildId: t,
            editStateId: n,
            groupListingId: i,
            onBeforeDispatchNewListing: r,
          } = e,
          o = N.n.getState().listings[n];
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
        let E = _ === N.I.ALL_CHANNELS_ACCESS,
          p = i;
        null == p && (p = (await m.uw(t, {})).id),
          null != s && s.length > 0 && (await (0, S.r4)(t, s));
        let g = [...(null != s ? s : []), ...(null != c ? c : [])],
          h = (0, S.yL)(n, t);
        return m.dA({
          guildId: t,
          groupListingId: p,
          data: {
            can_access_all_channels: E,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d,
          },
          analyticsContext: h,
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
              f = h.Z.getSubscriptionListing(d);
            try {
              if ((t(!0), r(void 0), null != f))
                l()(null != u, "groupListingId is null"),
                  await (function (e) {
                    var t;
                    let { guildId: n, editStateId: i, groupListingId: r } = e,
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
                        image: E,
                        channelAccessFormat: g,
                      } = a,
                      I = {};
                    if (
                      (s !== u.name && (I.name = s),
                      c !== u.description && (I.description = c),
                      _ !==
                        (null === (t = u.subscription_plans[0]) || void 0 === t
                          ? void 0
                          : t.price) && (I.priceTier = _),
                      null != E && (I.image = E),
                      null != g &&
                        (I.can_access_all_channels =
                          g === N.I.ALL_CHANNELS_ACCESS),
                      null != d || null != f)
                    ) {
                      let e = u.role_benefits.benefits.filter(p.rC),
                        t = u.role_benefits.benefits.filter(p.lL),
                        n = [...(null != d ? d : e), ...(null != f ? f : t)];
                      I.benefits = n;
                    }
                    return (0, o.isEmpty)(I)
                      ? u
                      : m.O0({
                          guildId: n,
                          groupListingId: r,
                          listingId: i,
                          data: I,
                        });
                  })({ guildId: n, editStateId: d, groupListingId: u });
              else {
                var _, E;
                let e = await Q({
                  guildId: n,
                  editStateId: d,
                  groupListingId: u,
                  onBeforeDispatchNewListing: a,
                });
                (d = e.id),
                  (_ = i),
                  (E = d),
                  (0, s.j)(() => {
                    N.n.setState((e) => ({
                      listings: {
                        ...e.listings,
                        [E]: e.listings[_],
                        [_]: void 0,
                      },
                    }));
                  }),
                  null == c || c(e);
              }
              return await J({ guildId: n, editStateId: d }), X(d), !0;
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
          r = (0, g._k)(e, n),
          l = (0, N.n)((e) => e.editStateIdsForGroup[t]),
          o = (0, N.n)((e) => e.setEditStateIdsForGroup),
          a = (0, N.n)((e) => e.setListing),
          s = i.useMemo(
            () => [
              ...r.map((e) => {
                let { id: t } = e;
                return t;
              }),
              ...(null != l ? l : []),
            ],
            [l, r],
          ),
          c = i.useCallback(() => {
            let e = (0, u.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
          }, [t, o]),
          d = i.useCallback(
            (e) => {
              let n = (0, u.Z)();
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
                      ref_type: A.Qs.CHANNEL,
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
          editStateIds: s,
          addNewEditStateId: c,
          addNewEditStateFromTemplate: d,
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
          return p;
        },
        H2: function () {
          return m;
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
      function f(e) {
        if (e.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
        if (
          (function (e) {
            let {
              guild: t,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isGuildEligibleForRoleSubscriptions: r,
              isExpeditedMonetizationOnboardingGuild: l,
              isUserInCreatorMonetizationEligibleCountry: o,
              shouldRestrictUpdatingRoleSubscriptionSettings: u,
            } = e;
            return (
              !!i &&
              (!u || !!n) &&
              (!!(
                t.hasFeature(d.oNc.CREATOR_MONETIZABLE) ||
                t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!t.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && n && o))
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
          : n && r && (l || o) && !t.hasFeature(d.oNc.COMMUNITY)
            ? 2
            : 0;
      }
      function _(e) {
        return 0 !== f(e);
      }
      function E(e) {
        let t = (0, c.Bt)(null == e ? void 0 : e.id),
          n = (0, o.Ob)(e),
          i = (0, o.gS)(null == e ? void 0 : e.id),
          r = p(e),
          a = (0, l.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
          }),
          d = (0, o.Sd)(),
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
      function p(e) {
        return (0, l.e7)([a.Z], () => m(e), [e]);
      }
      function m(e) {
        return null != e && a.Z.can(d.Plq.ADMINISTRATOR, e);
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
        u = n(442837),
        a = n(570140),
        s = n(131704),
        c = n(592125);
      let d = {},
        f = {};
      class _ extends (o = u.ZP.Store) {
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
      (l = "GuildRoleSubscriptionTierTemplatesStore"),
        (r = "displayName") in (i = _)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
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
          return C;
        },
        be: function () {
          return S;
        },
        g4: function () {
          return h;
        },
        m7: function () {
          return g;
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
      let m = {};
      function g(e) {
        let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
          n = (0, l.e7)([_.Z], () => _.Z.getChannel(e));
        return null != t ? t : n;
      }
      function h(e, t, n) {
        let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(e)),
          r = (0, d.n)((t) => t.editStateIdsForGroup[e]),
          o = (0, d.n)((e) => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let u = i
            .filter((e) => !e.soft_deleted && !e.archived)
            .map((e) => e.subscription_plans[0].price),
          a = [];
        void 0 !== r &&
          r.forEach((e) => {
            let t = o[e],
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
      function I(e) {
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
      function S(e) {
        let t = I(e);
        (m[e] = t),
          t.forEach((e) => {
            let t = e.set(
              "flags",
              p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL,
            );
            o.Z.dispatch({ type: "CHANNEL_CREATE", channel: t });
          });
      }
      function C(e) {
        var t;
        (null !== (t = m[e]) && void 0 !== t ? t : I(e)).forEach((e) => {
          o.Z.dispatch({ type: "CHANNEL_DELETE", channel: e });
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
            let l = i[r].id;
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
                      e.ref_id === l && (e.ref_id = t.id);
                    });
                });
            } else if (null != t) {
              let e = t.findIndex((e) => e.ref_id === l);
              -1 !== e && (null == t || t.splice(e, 1));
            }
          });
      }
      function v(e, t) {
        var n, i;
        let r = d.n.getState().listings[e],
          l = null == r ? void 0 : r.usedTemplate;
        if (null == l)
          return { templateCategory: null, hasChangeFromTemplate: null };
        let o = _.Z.getTemplateWithCategory(t, l);
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
        for (let e = 0; e < u.channels.length; e++) {
          let t = r.channelBenefits[e],
            n = u.channels[e];
          if (
            t.name !== n.name ||
            t.description !== n.description ||
            t.emoji_name !== n.emoji_name
          )
            return { templateCategory: o.category, hasChangeFromTemplate: !0 };
        }
        for (let e = 0; e < u.additional_perks.length; e++) {
          let t = r.intangibleBenefits[e],
            n = u.additional_perks[e];
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
          (0, f.H2)(e) &&
          e.hasFeature(E.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
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
        l = n(480608),
        o = n(243730);
      let u = {};
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
        return (
          i.useEffect(() => {
            if (null == e) return;
            let n = u[e];
            !(null != n && t > 0 && Date.now() - n < t) &&
              ((u[e] = Date.now()), l.E(e));
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
      let u = [];
      function a(e) {
        let t = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
        return i.useMemo(
          () => (null == t ? u : t.filter((t) => (0, o.Kt)(t, e))),
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
        u = n(388032);
      function a(e) {
        return i.useMemo(() => {
          var t;
          let n = l.DN.map((e) => ({
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
        c = n(989384);
      function d(e) {
        var t;
        let { guildId: n, emojiId: r, emojiName: d, className: f } = e,
          _ = (0, a.Z)(n, r);
        return null != _ || null != d
          ? (0, i.jsx)(o.Z, {
              emojiId: null == _ ? void 0 : _.id,
              emojiName: null != d ? d : null == _ ? void 0 : _.name,
              animated:
                null !== (t = null == _ ? void 0 : _.animated) &&
                void 0 !== t &&
                t,
              className: l()(c.emojiIcon, f),
            })
          : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
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
        l = n(201895),
        o = n(471445),
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
          return h;
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
        m = n(388032),
        g = n(674055);
      function h(e) {
        var t;
        let {
            guildId: n,
            role: l,
            theme: h,
            content: I = m.intl.string(m.t["6OSasb"]),
            className: S,
          } = e,
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
              null !== (t = l.colorString) && void 0 !== t ? t : void 0,
          };
        return (0, i.jsx)(a.ThemeProvider, {
          theme: h,
          children: (e) =>
            (0, i.jsx)("div", {
              className: o()(e, g.container, S),
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
    358555: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        u = n(481060),
        a = n(666188),
        s = n(372769),
        c = n(523751),
        d = n(623624),
        f = n(290034),
        _ = n(271383),
        E = n(594174),
        p = n(267642),
        m = n(981631),
        g = n(388032),
        h = n(70172);
      function I(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e,
          l = (0, o.e7)([E.default, _.ZP], () => {
            let e = E.default.getCurrentUser();
            return _.ZP.isMember(t.id, null == e ? void 0 : e.id);
          }),
          { premiumTier: a, premiumSubscriberCount: s } = t;
        if (0 === s && a === m.Eu4.NONE) return null;
        let c = (e) => {
            e.stopPropagation(),
              e.preventDefault(),
              l &&
                !r &&
                (0, d.f)({
                  guildId: t.id,
                  location: {
                    section: m.jXE.GUILD_HEADER,
                    object: m.qAy.BOOST_GEM_ICON,
                  },
                });
          },
          I = a === m.Eu4.NONE ? g.intl.string(g.t.c2wsn5) : p.nW(a),
          S = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: h.tierTooltipTitle, children: I }),
              (0, i.jsx)("div", {
                children: g.intl.format(g.t.If4iTU, { subscriberCount: s }),
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
                  iconBackgroundClassName: n
                    ? h.boostedGuildTierIconBackgroundWithVisibleBanner
                    : null,
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
        return (0, a.Z)(t)
          ? (0, i.jsx)("div", {
              className: h.guildIconV2Container,
              children: (0, i.jsx)(c.Z, {
                guild: t,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(h.guildBadge, { [h.disableColor]: n }),
                disableBoostClick: r,
              }),
            })
          : (0, i.jsx)("div", {
              className: h.guildIconContainer,
              children: (0, i.jsx)(s.Z, {
                guild: t,
                size: 20,
                tooltipPosition: "bottom",
                tooltipColor: u.Tooltip.Colors.PRIMARY,
                className: l()(h.guildBadge, { [h.disableColor]: n }),
              }),
            });
      }
      function C(e) {
        let { guild: t, isBannerVisible: n, disableBoostClick: r } = e;
        return (0, a.Z)(t)
          ? (0, i.jsx)(S, { guild: t, disableColor: !1, disableBoostClick: r })
          : t.hasFeature(m.oNc.VERIFIED) || t.hasFeature(m.oNc.PARTNERED)
            ? (0, i.jsx)(S, { guild: t, disableColor: !n })
            : (0, i.jsx)(I, {
                guild: t,
                isBannerVisible: n,
                disableBoostClick: r,
              });
      }
    },
    889695: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var i = n(200651),
        r = n(192379),
        l = n(658722),
        o = n.n(l),
        u = n(392711),
        a = n.n(u),
        s = n(149765),
        c = n(442837),
        d = n(481060),
        f = n(271383),
        _ = n(430824),
        E = n(594174),
        p = n(700785),
        m = n(709054),
        g = n(962086),
        h = n(160404),
        I = n(225675),
        S = n(981631),
        C = n(388032),
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
      function N(e) {
        let { guildId: t } = e,
          n = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
          l = (0, c.e7)([_.Z], () => _.Z.getGuild(t)),
          u = (0, c.e7)([_.Z], () => _.Z.getRoles(t)),
          { impersonateType: N, viewingRoles: A } = (0, c.cj)([h.Z], () => ({
            impersonateType: h.Z.getImpersonateType(t),
            viewingRoles: h.Z.getViewingRoles(t),
          })),
          b = N === I.z.SERVER_SHOP,
          L = (0, c.e7)([f.ZP], () =>
            null != n ? f.ZP.getTrueMember(t, n.id) : null,
          ),
          [O, R] = (0, d.useMultiSelect)(null == A ? [] : m.default.keys(A)),
          P = r.useRef(l);
        r.useEffect(() => {
          let e = {},
            t = P.current;
          if (null != t && null != N) {
            for (let t of O) {
              let n = u[t];
              null != n && (e[t] = n);
            }
            (0, g.Zm)(t.id, { type: N, roles: e });
          }
        }, [O, N, u]);
        let y =
            null != l && null != n && null != L
              ? a()(u)
                  .filter((e) => -1 !== L.roles.indexOf(e.id))
                  .sortBy((e) => -e.position)
                  .first()
              : void 0,
          Z = r.useMemo(
            () =>
              null != l && null != n
                ? Object.values(u)
                    .filter((e) => e.id !== l.id)
                    .filter((e) => {
                      var t;
                      return (
                        !b ||
                        (null === (t = e.tags) || void 0 === t
                          ? void 0
                          : t.subscription_listing_id) != null
                      );
                    })
                    .filter(
                      (e) =>
                        (null == y ? void 0 : y.id) === e.id ||
                        p.r6(l, n.id, y, e),
                    )
                : [],
            [l, n, b, y, u],
          );
        if (null == n || null == l || null == L) return null;
        let M = {};
        return (L.roles.forEach((e) => {
          let t = u[e];
          null != t && (M[t.id] = t);
        }),
        s.e$(
          p.I0({ forceRoles: M, context: l }),
          s.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES),
        ) || l.isOwner(n.id))
          ? (0, i.jsx)("div", {
              className: T.container,
              children: (0, i.jsx)(d.Combobox, {
                placeholder: C.intl.string(C.t.Sojqsr),
                value: O,
                onChange: R,
                autoFocus: !0,
                children: (e) => {
                  let t = Z.reduce(
                      (t, n) => (
                        o()(e.toLowerCase(), n.name.toLowerCase()) &&
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
                    n = u[l.getEveryoneRoleId()];
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
              children: C.intl.string(C.t.MNSTbW),
            });
      }
    },
    918658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
        d: function () {
          return Z;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        u = n(692547),
        a = n(481060),
        s = n(549817),
        c = n(819553),
        d = n(17181),
        f = n(303737),
        _ = n(434404),
        E = n(703656),
        p = n(944486),
        m = n(914010),
        g = n(671533),
        h = n(259580),
        I = n(358085),
        S = n(962086),
        C = n(160404),
        T = n(889695),
        v = n(981631),
        N = n(176505),
        A = n(302463),
        b = n(293810),
        L = n(388032),
        O = n(646217);
      function R(e) {
        let { className: t, onClick: n, children: r } = e;
        return (0, i.jsx)(a.Button, {
          className: l()(O.button, t),
          innerClassName: O.buttonInner,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.WHITE,
          size: a.Button.Sizes.NONE,
          onClick: n,
          children: r,
        });
      }
      function P(e) {
        let { onClick: t } = e;
        return (0, i.jsx)(R, {
          onClick: t,
          children: L.intl.string(L.t.R9GHyc),
        });
      }
      function y() {
        let e = (0, o.e7)([m.Z], () => m.Z.getGuildId()),
          t = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
          {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I,
          } = (0, o.cj)([C.Z], () => ({
            viewingRoles: null != e ? C.Z.getViewingRoles(e) : null,
            backNavigationSection: C.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && C.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && C.Z.isViewingServerShop(e),
          }));
        if (null == n || null == e) return null;
        let y = (function (e) {
            switch (e) {
              case v.pNK.INTEGRATIONS:
                return L.intl.string(L.t.k7LGdn);
              case v.pNK.ROLE_SUBSCRIPTIONS:
                return L.intl.string(L.t.bRqiqa);
              case v.pNK.ONBOARDING:
                return L.intl.string(L.t.qZpU3d);
              default:
                return L.intl.string(L.t.MTIXho);
            }
          })(r),
          Z =
            r === v.pNK.ROLE_SUBSCRIPTIONS
              ? L.intl.string(L.t.hZUCzc)
              : L.intl.string(L.t["/djIh4"]),
          M = t === N.oC.GUILD_ONBOARDING,
          x = (t) => {
            let { backToSettings: n } = t;
            null != e &&
              (C.Z.isFullServerPreview(e) && (0, E.uL)(v.Z5c.CHANNEL(e)),
              c.ZP.shouldShowOnboarding(e) &&
                (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)),
              (0, S.mL)(e),
              n && _.Z.open(e, r),
              r === v.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
          };
        return (0, i.jsxs)(a.Notice, {
          color: a.NoticeColors.BRAND,
          className: O.notice,
          children: [
            (0, i.jsxs)(R, {
              onClick: () => x({ backToSettings: !0 }),
              className: O.backButton,
              children: [
                (0, i.jsx)(g.Z, {
                  width: 16,
                  height: 16,
                  direction: g.Z.Directions.LEFT,
                  className: O.backArrow,
                }),
                y,
              ],
            }),
            M && l
              ? (0, i.jsx)("div", {
                  className: O.noticeContents,
                  children: (0, i.jsx)("div", {
                    className: O.noticeText,
                    children: L.intl.string(L.t.PxbiAQ),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: O.noticeContents,
                  children: [
                    (0, i.jsx)("div", {
                      className: O.noticeText,
                      children: l
                        ? L.intl.formatToPlainString(L.t["0PHahI"], {
                            numRoles: Object.keys(n).length,
                          })
                        : L.intl.formatToPlainString(L.t.vMlK8v, {
                            numRoles: Object.keys(n).length,
                          }),
                    }),
                    (0, i.jsx)(a.Popout, {
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(T.Z, { guildId: e }),
                      children: (e) => {
                        let { onClick: t } = e;
                        return (0, i.jsxs)(R, {
                          onClick: t,
                          children: [
                            Z,
                            (0, i.jsx)(h.Z, {
                              width: 16,
                              height: 16,
                              direction: h.Z.Directions.DOWN,
                              className: O.selectCaret,
                            }),
                          ],
                        });
                      },
                    }),
                    l &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: O.previewWarning,
                        text: L.intl.string(L.t.mW4DUF),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    I &&
                      (0, i.jsx)(a.TooltipContainer, {
                        className: O.previewWarning,
                        text: L.intl.formatToPlainString(L.t.eummvb, {
                          maxTiers: b.fF,
                          maxProducts: A.dD,
                        }),
                        children: (0, i.jsx)(a.CircleWarningIcon, {
                          size: "xs",
                          color: u.Z.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            l || r === v.pNK.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(P, { onClick: () => x({ backToSettings: !1 }) }),
          ],
        });
      }
      function Z(e) {
        let { guildId: t } = e;
        return (0, o.e7)([C.Z], () => C.Z.isViewingRoles(t))
          ? (0, i.jsx)("div", {
              className: l()(O.settingsWrapper, {
                [O.windows]: (0, I.isWindows)(),
                [O.osx]: (0, I.isMac)(),
              }),
              children: (0, i.jsx)(y, {}),
            })
          : null;
      }
    },
    690221: function (e, t, n) {
      var i = n(200651),
        r = n(192379),
        l = n(481060),
        o = n(703656),
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
                  null != n && (0, o.uL)(n),
                  null == s || s()),
                  null == c || c(e);
            },
            [n, c, s],
          ),
          E = r.useCallback(
            (e) => {
              if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(),
                  e.stopPropagation(),
                  null != n && (0, o.uL)(n),
                  null == s || s();
            },
            [n, s],
          ),
          p = (0, i.jsx)("a", {
            ref: t,
            href: n,
            onClick: E,
            onKeyPress: _,
            ...f,
            children: a,
          });
        return (0, i.jsx)(l.FocusRing, { ...d, children: p });
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
        l = n(120356),
        o = n.n(l),
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
            compact: l,
            className: _,
            isGroupStart: E,
            hideSimpleEmbedContent: p = !0,
            disableInteraction: m,
          } = e,
          g = (0, u.A)(
            (null !== (t = n.editedTimestamp) && void 0 !== t
              ? t
              : n.timestamp
            ).valueOf(),
          ),
          { content: h } = (0, s.Z)(n, {
            hideSimpleEmbedContent: p,
            allowList: g,
            allowHeading: g,
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
          childrenHeader: (0, d.Z)({ ...e, channel: r, guildId: void 0 }),
          childrenMessageContent: (0, c.Z)(e, h),
          disableInteraction: m,
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
      let u = r.memo(o.ZP);
      function a(e) {
        let {
          message: t,
          channel: n,
          author: r,
          compact: o,
          animateAvatar: a,
          guildId: s,
          isGroupStart: c = !0,
          roleIcon: d,
          hideTimestamp: f,
        } = e;
        return !(0, l.Z)(t) && (c || o)
          ? (0, i.jsx)(u, {
              message: t,
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
    822070: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
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
    520540: function (e, t, n) {
      n.d(t, {
        g: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var i,
        r,
        l = n(818083);
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
          let r = await l.jz(e, t);
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
            s(o);
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
        u,
        a,
        s = n(512722),
        c = n.n(s),
        d = n(442837),
        f = n(759174),
        _ = n(570140),
        E = n(959546),
        p = n(55563);
      function m(e) {
        return "subscription_listing:".concat(e);
      }
      function g(e) {
        return "application:".concat(e);
      }
      function h(e) {
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
      let C = new f.h(
          (e) => [g(e.application_id), ...e.subscription_listings_ids.map(m)],
          (e) => e.id,
        ),
        T = new f.h(
          (e) => [g(e.application_id), h(e.subscription_plans[0].id)],
          (e) => e.id,
        ),
        v = new f.h(
          (e) => [
            I(e.applicationId, e.isValid(null, p.Z), e.guildId),
            S(e.isValid(null, p.Z), e.guildId),
          ],
          (e) => e.id,
        ),
        N = {},
        A = {};
      function b(e) {
        var t;
        for (let n of (C.set(e.id, e),
        null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
          (function (e) {
            T.set(e.id, e);
          })(n);
      }
      class L extends (r = d.yh) {
        getSubscriptionGroupListingsForApplicationFetchState(e) {
          var t;
          return null !== (t = N[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionGroupListing(e) {
          return C.get(e);
        }
        getSubscriptionGroupListingForSubscriptionListing(e) {
          let t = C.values(m(e));
          return (
            c()(t.length <= 1, "Found multiple group listings for listing"),
            t[0]
          );
        }
        getSubscriptionListing(e) {
          return T.get(e);
        }
        getSubscriptionListingsForApplication(e) {
          return T.values(g(e));
        }
        getEntitlementsForGuildFetchState(e) {
          var t;
          return null !== (t = A[e]) && void 0 !== t ? t : 0;
        }
        getSubscriptionListingForPlan(e) {
          let t = T.values(h(e));
          return c()(t.length <= 1, "Found multiple listings for plan"), t[0];
        }
        getApplicationEntitlementsForGuild(e, t) {
          let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return v.values(I(e, n, t));
        }
        getEntitlementsForGuild(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return v.values(S(t, e));
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
        (t.Z = new L(_.Z, {
          LOGOUT: function () {
            C.clear(), T.clear(), v.clear(), (N = {}), (A = {});
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
            let { applicationId: t, groupListingId: n } = e;
            N[t] = 1;
            let i = C.get(n);
            if (null != i)
              for (let e of i.subscription_listings_ids) T.delete(e);
          },
          APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
            let { applicationId: t, groupListing: n } = e;
            (N[t] = 2), b(n);
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
                let t = E.Z.createFromServer(e);
                v.set(t.id, t);
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
            b(t);
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
        l = n(480294),
        o = n(814443),
        u = n(428598),
        a = n(981631);
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
        return u.Z.shouldFetch() && l.Z.hasConsented(a.pjP.PERSONALIZATION)
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
                      var t, n, i, r, l, o, u, a;
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
    496232: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      let i = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      let i;
      n(47120);
      var r,
        l = n(442837),
        o = n(570140),
        u = n(699516),
        a = n(496232);
      function s(e, t, n) {
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
      let c = !1,
        d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...d };
      function _() {
        i = new Map(
          f.userAffinities
            .filter((e) => !u.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class E extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(u.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
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
        getUserAffinity(e) {
          return i.get(e);
        }
        getState() {
          return f;
        }
      }
      s(E, "displayName", "UserAffinitiesStoreV2"),
        s(E, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new E(o.Z, {
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
            (f = { ...d }), (i = new Map()), (c = !1);
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
        u = n.n(o),
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
      class _ extends (i = l.PureComponent) {
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
              n(e[o] || null, t ? null : c.avatarMasked, "user-".concat(o), t),
            ),
              o++;
          }
          if (o < e.length) {
            let t = Math.min(e.length - o, 99);
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
              let { onClick: l, size: o, guildId: f } = this.props,
                _ = e instanceof s.Z ? e : null != e ? e.user : null;
              return null == _
                ? (0, r.jsx)("div", { className: u()(c.emptyUser, t) }, n)
                : (0, r.jsx)(
                    a.Avatar,
                    {
                      tabIndex: 0,
                      src: _.getAvatarURL(f, (0, a.getAvatarSize)(o)),
                      size: o,
                      "aria-label": _.username,
                      className: u()(t, d.cursorPointer, c.avatarSize),
                      onClick: (e) => (null != l ? l(e, _, this._ref) : null),
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
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(325767);
      function l(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: l = "currentColor",
          foreground: o,
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, r.Z)(u),
          width: t,
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
    91047: function (e, t, n) {
      n.d(t, {
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
      function l(e, t, l) {
        l.isGroupDM()
          ? (0, r.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("50050"),
                n.e("92453"),
                n.e("62507"),
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
                  n.e("50050"),
                  n.e("92453"),
                  n.e("70205"),
                  n.e("56826"),
                  n.e("10510"),
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
                    n.e("50050"),
                    n.e("92453"),
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
                    n.e("351"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, { ...n, user: t });
                });
      }
      function o(e, t) {
        let { user: l, channel: o, moderationAlertId: u, guildId: a, ...s } = t;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let c = null != a ? a : null == o ? void 0 : o.getGuildId();
        null != c &&
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
                guildId: c,
                moderationAlertId: u,
                ...s,
              });
          });
      }
      function u(e, t) {
        let {
          user: l,
          guildId: o,
          analyticsLocations: u,
          onCloseContextMenu: a,
          isViewOnly: s,
        } = t;
        (0, r.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              user: l,
              guildId: o,
              analyticsLocations: u,
              onCloseContextMenu: a,
              isViewOnly: s,
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
//# sourceMappingURL=12de568e3fd657a9cb0d.js.map
