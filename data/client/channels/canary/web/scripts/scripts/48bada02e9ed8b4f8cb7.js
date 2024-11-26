(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39614"],
  {
    544140: function (e, t, n) {
      var r = n(796581),
        i = n(149912);
      e.exports = function e(t, n, o, a, s) {
        var l = -1,
          c = t.length;
        for (o || (o = i), s || (s = []); ++l < c; ) {
          var d = t[l];
          n > 0 && o(d)
            ? n > 1
              ? e(d, n - 1, o, a, s)
              : r(s, d)
            : !a && (s[s.length] = d);
        }
        return s;
      };
    },
    149912: function (e, t, n) {
      var r = n(466293),
        i = n(443735),
        o = n(402428),
        a = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(a && e && e[a]);
      };
    },
    90757: function (e, t, n) {
      var r = n(544140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    99713: function (e) {
      "use strict";
      e.exports = "/assets/19030c98f81270503f7a.png";
    },
    269128: function (e, t, n) {
      "use strict";
      var r = n(200651);
      n(192379);
      var i = n(120356),
        o = n.n(i),
        a = n(772848),
        s = n(363969);
      let l = (0, a.Z)();
      t.Z = (e) => {
        let { open: t, className: n, withHighlight: i = !1 } = e;
        return (0, r.jsxs)("svg", {
          width: "18",
          height: "18",
          className: o()(s.button, n, { [s.open]: t, [s.withHighlight]: i }),
          children: [
            i &&
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: l,
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
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
                  d: "M4.5 4.5l9 9",
                  strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                  stroke: i ? "url(#".concat(l, ")") : "currentColor",
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
      "use strict";
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(372900);
      t.Z = i.memo(function (e) {
        var t, n, s, l;
        let {
            user: c,
            size: d = o.AvatarSizes.SIZE_32,
            animate: u = !1,
            "aria-hidden": f = !1,
            ...p
          } = e,
          v = i.useContext(a.Z);
        return (0, r.jsx)(o.Avatar, {
          src:
            ((t = c),
            (n = (0, o.getAvatarSize)(d)),
            (s = u),
            (l = v),
            t.getAvatarURL(l, n, s)),
          size: d,
          "aria-label": f ? void 0 : c.username,
          "aria-hidden": f,
          ...p,
        });
      });
    },
    461195: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        n: function () {
          return i;
        },
      });
      var r,
        i,
        o = n(200651);
      n(192379);
      var a = n(120356),
        s = n.n(a),
        l = n(410030),
        c = n(231338),
        d = n(388032),
        u = n(40690);
      function f(e) {
        let { className: t, size: n = "md" } = e,
          r =
            (0, l.ZP)() === c.BR.LIGHT
              ? "https://cdn.discordapp.com/assets/content/e4ec02f7af5d01c8c168eb814823a94a6bf1ce440e70e35e5a6f18b0fdad3321.png"
              : "https://cdn.discordapp.com/assets/content/f814e4be3c27004f4e60c1bdad648ee24acfa9716c0be8048cc63b5b869e56a4.png";
        return (0, o.jsx)("img", {
          className: s()(t, { [u.sm]: "sm" === n, [u.md]: "md" === n }),
          src: r,
          alt: d.intl.string(d.t.htEhYm),
        });
      }
      ((r = i || (i = {})).SMALL = "sm"), (r.MEDIUM = "md");
    },
    869614: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      let r = new Set(["nvidia"]);
      function i(e) {
        for (let t of Object.keys(e)) {
          let n = e[t];
          if (null != n && null == n.error && r.has(t)) return !0;
        }
        return !1;
      }
    },
    281083: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = {
        [o.PlatformTypes.WINDOWS]: { nvidia: "<=537.58.0 || >=546.31" },
      };
      function s(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    672598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(553813),
        i = n.n(r),
        o = n(358085);
      let a = { [o.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
      function s(e) {
        let t = a[(0, o.getPlatform)()];
        if (null == t) return !1;
        for (let n of Object.keys(e)) {
          let r = e[n],
            o = t[n];
          if (null == r || null == o || null != r.error) continue;
          let a = (function (e) {
            var t, n;
            return ""
              .concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".")
              .concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0");
          })(r);
          if (!i().satisfies(a, o)) return !0;
        }
        return !1;
      }
    },
    653255: function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        a,
        s = n(442837),
        l = n(570140),
        c = n(358085),
        d = n(998502),
        u = n(869614),
        f = n(281083),
        p = n(672598);
      let v = !1,
        h = !0,
        m = !1;
      class _ extends (a = s.ZP.Store) {
        initialize() {
          !(!c.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
              (v = (0, p.Z)(e)),
                (h = (0, u.Z)(e)),
                (m = (0, f.Z)(e)),
                this.emitChange();
            });
        }
        get GPUDriversOutdated() {
          return v;
        }
        get canUseHardwareAcceleration() {
          return h;
        }
        get problematicGPUDriver() {
          return m;
        }
        getState() {
          return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: m,
          };
        }
      }
      (o = "StreamingCapabilitiesStore"),
        (i = "displayName") in (r = _)
          ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = o),
        (t.Z = new _(l.Z, {
          OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
          },
        }));
    },
    989941: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(145597);
      function o(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, i.QF)();
          return null == e || null == n
            ? null
            : (null == r ? void 0 : r.id) === e.id &&
                (null == r ? void 0 : r.pid) === n
              ? r
              : (r = {
                  id: e.id,
                  pid: n,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
    942951: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return f;
        },
      });
      var r = n(200651),
        i = n(192379),
        o = n(481060),
        a = n(100527),
        s = n(906732),
        l = n(184301),
        c = n(347475),
        d = n(592125),
        u = n(91047);
      function f(e) {
        var t, n;
        let {
            user: f,
            channelId: p,
            guildId: v,
            messageId: h,
            stopPropagation: m = !1,
            ariaLabel: _,
          } = e,
          { analyticsLocations: b } = (0, s.ZP)(a.Z.USERNAME);
        let g =
          ((t = f),
          (n = p),
          i.useCallback(
            (e) => {
              let r = d.Z.getChannel(n);
              null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n],
          ));
        return i.useCallback(
          (e) => (t, n) => {
            let i = (n) =>
                (0, r.jsx)(o.NameWithRoleAnchor, {
                  ...(null != n ? n : {}),
                  onContextMenu: g,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": _,
                }),
              a = (e) => (t) => {
                m && t.stopPropagation(), e(t);
              };
            return (0, r.jsx)(
              s.Gt,
              {
                value: b,
                children:
                  null != f
                    ? (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: () =>
                          (0, l.Z)(f.id, f.getAvatarURL(v, 80), {
                            guildId: v,
                            channelId: p,
                          }),
                        renderPopout: (t) =>
                          (0, r.jsx)(c.Z, {
                            ...t,
                            userId: f.id,
                            guildId: v,
                            channelId: p,
                            messageId: h,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...n } = e;
                          return i({ onClick: a(t), ...n });
                        },
                      })
                    : i(void 0),
              },
              n,
            );
          },
          [b, f, p, v, h, g, m, _],
        );
      }
    },
    93127: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return c;
        },
        _: function () {
          return d;
        },
      });
      var r = n(544891),
        i = n(570140),
        o = n(480294),
        a = n(814443),
        s = n(428598),
        l = n(981631);
      function c() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return a.Z.needsRefresh()
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_SUCCESS",
                    affinities: t,
                  });
                },
                () => {
                  i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_FAILURE" });
                },
              ))
          : Promise.resolve();
      }
      function d() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return s.Z.shouldFetch() && o.Z.hasConsented(l.pjP.PERSONALIZATION)
          ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            r.tn
              .get({
                url: l.ANM.USER_AFFINITIES_V2,
                retries: e ? 3 : 0,
                oldFormErrors: !0,
                rejectWithError: !1,
              })
              .then(
                (e) => {
                  let { body: t } = e;
                  i.Z.dispatch({
                    type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                    affineUsers: t.user_affinities.map((e) => {
                      var t, n, r, i, o, a, s, l;
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
                          null !== (a = e.server_message_rank) && void 0 !== a
                            ? a
                            : 0,
                        communicationProbability:
                          null !== (s = e.communication_probability) &&
                          void 0 !== s
                            ? s
                            : 0,
                        communicationRank:
                          null !== (l = e.communication_rank) && void 0 !== l
                            ? l
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
    496232: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
      });
      let r = n(70956).Z.Millis.DAY;
    },
    428598: function (e, t, n) {
      "use strict";
      let r;
      n(47120);
      var i,
        o = n(442837),
        a = n(570140),
        s = n(699516),
        l = n(496232);
      function c(e, t, n) {
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
      let d = !1,
        u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
        f = { ...u };
      function p() {
        r = new Map(
          f.userAffinities
            .filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId))
            .map((e) => [e.otherUserId, e]),
        );
      }
      class v extends (i = o.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(s.Z),
            null != e &&
              ((f.userAffinities = e.userAffinities),
              (f.lastFetched = e.lastFetched),
              p()),
            this.syncWith([s.Z], p);
        }
        shouldFetch() {
          if (!d) return Date.now() - f.lastFetched > l.K;
        }
        isFetching() {
          return d;
        }
        getUserAffinities() {
          return f.userAffinities;
        }
        getUserAffinity(e) {
          return r.get(e);
        }
        getState() {
          return f;
        }
      }
      c(v, "displayName", "UserAffinitiesStoreV2"),
        c(v, "persistKey", "UserAffinitiesStoreV2"),
        (t.Z = new v(a.Z, {
          LOAD_USER_AFFINITIES_V2: function () {
            d = !0;
          },
          LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (d = !1), (f.userAffinities = t), p();
          },
          LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
          },
          LOGOUT: function () {
            (f = { ...u }), (r = new Map()), (d = !1);
          },
        }));
    },
    494620: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
        z: function () {
          return i;
        },
      });
      var r,
        i,
        o = n(200651);
      n(192379);
      var a = n(120356),
        s = n.n(a),
        l = n(481060),
        c = n(312403);
      ((r = i || (i = {})).INFO = "info"), (r.WARNING = "warning");
      let d = { info: c.info, warning: c.warning },
        u = { info: l.CircleInformationIcon, warning: l.CircleWarningIcon };
      function f(e) {
        let { children: t, className: n, look: r = "info" } = e,
          i = u[r];
        return (0, o.jsxs)("div", {
          className: s()(c.root, n, d[r]),
          children: [
            (0, o.jsx)(i, { className: c.icon, color: "currentColor" }),
            (0, o.jsx)(l.Text, {
              className: c.text,
              variant: "text-sm/medium",
              color: "text-normal",
              children: t,
            }),
          ],
        });
      }
    },
    447564: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HD_STREAMING_POTION_MODAL_KEY: function () {
            return j;
          },
          default: function () {
            return A;
          },
          openHDPotionModal: function () {
            return S;
          },
        }),
        n(47120);
      var r,
        i,
        o = n(200651),
        a = n(192379),
        s = n(311570),
        l = n(692547),
        c = n(481060),
        d = n(100527),
        u = n(906732),
        f = n(997323),
        p = n(324085),
        v = n(688465),
        h = n(333867),
        m = n(63063),
        _ = n(937615),
        b = n(82950),
        g = n(981631),
        x = n(215023),
        I = n(388032),
        C = n(588973),
        E = n(99713);
      let S = (e, t) => {
        (0, p.mx)(t),
          (0, c.openModalLazy)(
            async () => {
              let { default: t } = await Promise.resolve().then(
                n.bind(n, 447564),
              );
              return (n) => (0, o.jsx)(t, { channel: e, ...n });
            },
            { modalKey: j },
          );
      };
      function A(e) {
        let { transitionState: t, channel: n } = e;
        return (0, o.jsx)(c.ModalRoot, {
          size: c.ModalSize.DYNAMIC,
          transitionState: t,
          children: (0, o.jsx)(w, { channel: n }),
        });
      }
      let j = "HD_STREAMING_POTION_MODAL_KEY";
      function w(e) {
        let { channel: t } = e,
          n = (0, p.T$)(t),
          [r, i] = (0, a.useState)(!1),
          { price: l, fetchingPrice: v, error: m } = (0, p.R2)(x.FX),
          { entitlement: _, fetchedEntitlement: b, error: I } = (0, p.t6)(x.FX),
          C = m || I,
          { analyticsLocations: E } = (0, u.ZP)([
            d.Z.HD_STREAMING_POTION_MODAL,
          ]),
          S = null != _ && !_.consumed;
        (0, a.useEffect)(
          () => (
            null != _ &&
              !1 === _.consumed &&
              r &&
              _.type !== g.qc2.DEVELOPER_GIFT &&
              (0, f.Zu)(t.id, x.FX),
            () => {
              C && (0, f.SN)(x.FX);
            }
          ),
          [_, t, r, C],
        );
        let A = (0, a.useMemo)(
            () => () =>
              (0, h.Z)({
                skuId: x.FX,
                analyticsLocations: E,
                onComplete: c.closeAllModals,
                variantsReturnStyle: s.v.INDIVIDUAL_PRODUCTS,
              }),
            [E],
          ),
          j = (0, a.useMemo)(
            () => () => {
              (0, f.Zu)(t.id, x.FX), (0, c.closeAllModals)();
            },
            [t.id],
          ),
          w = (0, a.useMemo)(
            () => () =>
              t.isHDStreamSplashed
                ? 4
                : n
                  ? (null == _ ? void 0 : _.type) === g.qc2.DEVELOPER_GIFT
                    ? 1
                    : S
                      ? 2
                      : 0
                  : 3,
            [t.isHDStreamSplashed, n, null == _ ? void 0 : _.type, S],
          ),
          N = (0, a.useMemo)(() => w(), [w]);
        return (0, o.jsx)(y, {
          channel: t,
          buttonState: N,
          price: l,
          onActionClick: () => {
            i(!0), (S ? j : A)();
          },
          loading: v || !b,
        });
      }
      let y = (e) => {
          let {
            channel: t,
            buttonState: n,
            price: r,
            onActionClick: i,
            loading: a,
          } = e;
          return a
            ? (0, o.jsx)(R, {})
            : null == r
              ? (0, o.jsx)(L, {})
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)("div", {
                      className: C.modal,
                      children: [
                        (0, o.jsx)(N, {}),
                        (0, o.jsx)(P, { channel: t }),
                      ],
                    }),
                    (0, o.jsx)(T, {
                      buttonState: n,
                      price: r,
                      onActionClick: i,
                    }),
                  ],
                });
        },
        N = () =>
          (0, o.jsx)("img", {
            className: C.image,
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
            alt: I.intl.string(I.t.DdigcX),
          }),
        P = (e) => {
          let { channel: t } = e;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className: C.body,
                children: [
                  (0, o.jsxs)("div", {
                    className: C.heading,
                    children: [
                      (0, o.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        children: I.intl.string(I.t.K04rOD),
                      }),
                      (0, o.jsx)(v.Z, {}),
                    ],
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: I.intl.string(I.t.lq40Pz),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "text-link",
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t["1wV4qq"], {
                      helpCenterLink: m.Z.getArticleURL(
                        g.BhN.HD_STREAMING_POTION,
                      ),
                    }),
                  }),
                  (0, o.jsx)(c.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: I.intl.string(I.t.qk07Mj),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: C.divider }),
              (0, o.jsxs)("div", {
                className: C.applyingTo,
                children: [
                  (0, o.jsx)(c.Text, {
                    variant: "eyebrow",
                    children: I.intl.string(I.t.tZyXg4),
                  }),
                  (0, o.jsx)(b.Z, { channel: t }),
                ],
              }),
            ],
          });
        };
      ((i = r || (r = {}))[(i.BUY = 0)] = "BUY"),
        (i[(i.REDEEM = 1)] = "REDEEM"),
        (i[(i.ACTIVATE = 2)] = "ACTIVATE"),
        (i[(i.INELIGIBLE = 3)] = "INELIGIBLE"),
        (i[(i.ALREADY_ACTIVE = 4)] = "ALREADY_ACTIVE");
      let T = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e;
          return (0, o.jsxs)("div", {
            className: C.footer,
            children: [
              (0, o.jsx)(c.Button, {
                onClick: () => {
                  (0, c.closeModal)(j);
                },
                color: c.Button.Colors.PRIMARY,
                children: I.intl.string(I.t.Avt5KS),
              }),
              (0, o.jsx)(Z, { buttonState: t, price: n, onActionClick: r }),
            ],
          });
        },
        Z = (e) => {
          let { buttonState: t, price: n, onActionClick: r } = e,
            i = I.intl.formatToPlainString(I.t.S9LAdX, {
              price: (0, _.T4)(n.amount, n.currency),
            });
          if (3 === t || 4 === t) {
            let e = {
              3: I.intl.string(I.t.Qrh2BQ),
              4: I.intl.string(I.t.utRdl5),
            }[t];
            return (0, o.jsx)(c.Tooltip, {
              tooltipContentClassName: C.tooltip,
              text: e,
              children: (e) =>
                (0, o.jsx)(c.Button, { ...e, disabled: !0, children: i }),
            });
          }
          let a = {
            0: i,
            1: I.intl.string(I.t.sl6Tcn),
            2: I.intl.string(I.t.XJ9INj),
          }[t];
          return (0, o.jsx)(c.Button, {
            onClick: r,
            children: (0, o.jsxs)("div", {
              className: C.buttonCopy,
              children: [
                (0, o.jsx)(c.PotionIcon, {
                  color: l.Z.colors.WHITE,
                  size: "sm",
                }),
                a,
              ],
            }),
          });
        },
        L = () =>
          (0, o.jsx)("div", {
            className: C.anomaly,
            children: (0, o.jsxs)("div", {
              className: C.error,
              children: [
                (0, o.jsx)(c.Image, { src: E, width: 178, height: 190 }),
                (0, o.jsx)(c.Text, {
                  variant: "text-md/normal",
                  children: I.intl.string(I.t.sIA0OD),
                }),
              ],
            }),
          }),
        R = () =>
          (0, o.jsx)("div", {
            className: C.anomaly,
            children: (0, o.jsx)("div", {
              className: C.spinner,
              children: (0, o.jsx)(c.Spinner, {}),
            }),
          });
    },
    207126: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        o = n(422034),
        a = n(938475),
        s = n(239628);
      function l(e) {
        let { channel: t } = e;
        if (null == t) return null;
        let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
          l = n.map((e, t) => {
            let { user: a } = e;
            return (0, r.jsx)(
              o.O,
              {
                affinity: a,
                applyMask: t !== n.length - 1,
                size: i.AvatarSizes.SIZE_20,
              },
              a.id,
            );
          });
        return (0, r.jsx)("div", { className: s.avatars, children: l });
      }
    },
    82950: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        o = n(207126),
        a = n(725414);
      function s(e) {
        let { channel: t } = e;
        return (0, r.jsxs)("div", {
          className: a.channel,
          children: [
            (0, r.jsxs)("div", {
              className: a.channelLeft,
              children: [
                (0, r.jsx)(i.VoiceNormalIcon, {}),
                (0, r.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: t.name,
                }),
              ],
            }),
            (0, r.jsx)(o.Z, { channel: t }),
          ],
        });
      }
    },
    4912: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(325767);
      function o(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: o = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, i.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: a,
            fill: o,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    91047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pv: function () {
          return o;
        },
        _j: function () {
          return a;
        },
        nm: function () {
          return s;
        },
        xS: function () {
          return l;
        },
      }),
        n(411104);
      var r = n(200651);
      n(192379);
      var i = n(239091);
      function o(e, t, o) {
        o.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("50050"),
                n.e("92453"),
                n.e("62507"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, r.jsx)(e, { ...n, user: t, channel: o });
            })
          : o.isDM()
            ? (0, i.jW)(e, async () => {
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
                    n.e("51269"),
                    n.e("13351"),
                    n.e("50050"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("54492"),
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
                    n.e("351"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, r.jsx)(e, { ...n, user: t });
                });
      }
      function a(e, t) {
        let { user: o, channel: a, moderationAlertId: s, guildId: l, ...c } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let d = null != l ? l : null == a ? void 0 : a.getGuildId();
        null != d &&
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("9124"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, r.jsx)(e, {
                ...t,
                user: o,
                channelId: null == a ? void 0 : a.id,
                guildId: d,
                moderationAlertId: s,
                ...c,
              });
          });
      }
      function s(e, t) {
        let {
          user: o,
          guildId: a,
          analyticsLocations: s,
          onCloseContextMenu: l,
          isViewOnly: c,
        } = t;
        (0, i.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              user: o,
              guildId: a,
              analyticsLocations: s,
              onCloseContextMenu: l,
              isViewOnly: c,
            });
        });
      }
      function l(e, t, o) {
        null != o &&
          (0, i.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, r.jsx)(e, { ...t, guildId: o });
          });
      }
    },
    141038: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(653041),
        n(47120);
      var r = n(512722),
        i = n.n(r),
        o = n(90757),
        a = n.n(o),
        s = n(65154);
      function l(e, t, n) {
        let r = window.DiscordNative;
        i()(null != r, "Can't get desktop sources outside of native app"),
          (t = null != t ? t : [s.vA.WINDOW, s.vA.SCREEN]),
          (n = null != n ? n : { width: 150, height: 150 });
        let o = [];
        return (
          t.includes(s.vA.SCREEN) &&
            e.supports(s.AN.SCREEN_PREVIEWS) &&
            (o.push(e.getScreenPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== s.vA.SCREEN))),
          t.includes(s.vA.WINDOW) &&
            e.supports(s.AN.WINDOW_PREVIEWS) &&
            (o.push(e.getWindowPreviews(n.width, n.height)),
            (t = t.filter((e) => e !== s.vA.WINDOW))),
          0 !== t.length &&
            o.push(
              r.desktopCapture.getDesktopCaptureSources({
                types: t,
                thumbnailSize: n,
              }),
            ),
          Promise.all(o).then((e) => a()(e))
        );
      }
    },
    363969: function (e, t, n) {
      "use strict";
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    695935: function (e, t, n) {
      "use strict";
      e.exports = { banner: "banner_da16fe" };
    },
    493200: function (e, t, n) {
      "use strict";
      e.exports = {
        modalRoot: "modalRoot_a0e502",
        modalContent: "modalContent_a0e502",
        modalInner: "modalInner_a0e502",
        modalCloseButton: "modalCloseButton_a0e502",
        avatarDecoration: "avatarDecoration_a0e502",
        decorationBanner: "decorationBanner_a0e502",
        bannerContainer: "bannerContainer_a0e502",
        collectedInfoContainer: "collectedInfoContainer_a0e502",
        collectedTextContainer: "collectedTextContainer_a0e502",
        confettiCanvas: "confettiCanvas_a0e502",
        profileEffectShopPreview: "profileEffectShopPreview_a0e502",
        customConfetti: "customConfetti_a0e502",
        bundlePreview: "bundlePreview_a0e502",
        bundleProfileEffectCard: "bundleProfileEffectCard_a0e502",
        buttons: "buttons_a0e502",
        easterEggContainer: "easterEggContainer_a0e502",
      };
    },
    505069: function (e, t, n) {
      "use strict";
      e.exports = {
        previewContainer: "previewContainer_b74403",
        giftInfoContainer: "giftInfoContainer_b74403",
        previewContainerSelected: "previewContainerSelected_b74403",
        previewContainerError: "previewContainerError_b74403",
        previewTextContainer: "previewTextContainer_b74403",
        previewTitleContainer: "previewTitleContainer_b74403",
        previewTitle: "previewTitle_b74403",
        recipientError: "recipientError_b74403",
        previewLink: "previewLink_b74403",
      };
    },
    259319: function (e, t, n) {
      "use strict";
      e.exports = {
        shopPageContainer: "shopPageContainer_dd4901",
        giftModalContainer: "giftModalContainer_dd4901",
        heading1: "heading1_dd4901",
        description: "description_dd4901",
        reload: "reload_dd4901",
      };
    },
    40690: function (e, t, n) {
      "use strict";
      e.exports = { sm: "sm_bbdae8", md: "md_bbdae8" };
    },
    638079: function (e, t, n) {
      "use strict";
      e.exports = {
        fadeInAvatarImg: "fadeInAvatarImg_fa4525",
        avatarPurchased: "avatarPurchased_fa4525",
        avatar: "avatar_fa4525",
      };
    },
    379252: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_eb992c",
        profileEffectShopPreview: "profileEffectShopPreview_eb992c",
        avatarDecorationPreview: "avatarDecorationPreview_eb992c",
      };
    },
    814335: function (e, t, n) {
      "use strict";
      e.exports = {
        header: "header_eb95a6",
        closeButton: "closeButton_eb95a6",
      };
    },
    283314: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainerGift: "headerContainerGift_f8f790",
        closeButtonGift: "closeButtonGift_f8f790",
      };
    },
    484495: function (e, t, n) {
      "use strict";
      e.exports = {
        modalOverrideBody: "modalOverrideBody_e84a32",
        modalOverrideSliderBody: "modalOverrideSliderBody_e84a32",
        confettiCanvas: "confettiCanvas_e84a32",
        customConfetti: "customConfetti_e84a32",
        hidden: "hidden_e84a32",
      };
    },
    463313: function (e, t, n) {
      "use strict";
      e.exports = {
        stepBody: "stepBody_dcb6d5",
        bodyColumnMiddle: "bodyColumnMiddle_dcb6d5",
        bodyColumnLeft: "bodyColumnLeft_dcb6d5",
        bodyColumnRight: "bodyColumnRight_dcb6d5",
        sendTo: "sendTo_dcb6d5",
        customGiftMessageWrapper: "customGiftMessageWrapper_dcb6d5",
        customGiftMessage: "customGiftMessage_dcb6d5",
        giftPreview: "giftPreview_dcb6d5",
        selectGiftTitle: "selectGiftTitle_dcb6d5",
        recommendedGiftPreview: "recommendedGiftPreview_dcb6d5",
        navigateToShopButton: "navigateToShopButton_dcb6d5",
        navigateToShopBody: "navigateToShopBody_dcb6d5",
        navigateToShopTextWrapper: "navigateToShopTextWrapper_dcb6d5",
        shopIcon: "shopIcon_dcb6d5",
      };
    },
    457207: function (e, t, n) {
      "use strict";
      e.exports = {
        headerContainer: "headerContainer_bab8b6",
        closeButton: "closeButton_bab8b6",
        headerImageContainer: "headerImageContainer_bab8b6",
        headerImage: "headerImage_bab8b6",
      };
    },
    786698: function (e, t, n) {
      "use strict";
      e.exports = {
        confirmation: "confirmation_b0b233",
        confirmationHeader: "confirmationHeader_b0b233",
        divider: "divider_b0b233",
      };
    },
    154960: function (e, t, n) {
      "use strict";
      e.exports = { container: "container_f4c122", header: "header_f4c122" };
    },
    776458: function (e, t, n) {
      "use strict";
      e.exports = {
        avatar: "avatar_f18fcb",
        overlay: "overlay_f18fcb",
        overlayIcon: "overlayIcon_f18fcb",
        clickable: "clickable_f18fcb",
        menu: "menu_f18fcb",
      };
    },
    93428: function (e, t, n) {
      "use strict";
      e.exports = { clickable: "clickable_eebaf6" };
    },
    537616: function (e, t, n) {
      "use strict";
      e.exports = {
        previewContainer: "previewContainer_c99d75",
        previewContainerSetHeight: "previewContainerSetHeight_c99d75",
        previewContainerAnimation: "previewContainerAnimation_c99d75",
        preview: "preview_c99d75",
        previewForCollected: "previewForCollected_c99d75 preview_c99d75",
        purchasedEffect: "purchasedEffect_c99d75",
      };
    },
    312403: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    588973: function (e, t, n) {
      "use strict";
      e.exports = {
        modal: "modal_beafbd",
        heading: "heading_beafbd",
        divider: "divider_beafbd",
        image: "image_beafbd",
        body: "body_beafbd",
        applyingTo: "applyingTo_beafbd",
        footer: "footer_beafbd",
        anomaly: "anomaly_beafbd",
        error: "error_beafbd",
        spinner: "spinner_beafbd",
        buttonCopy: "buttonCopy_beafbd",
        tooltip: "tooltip_beafbd",
      };
    },
    239628: function (e, t, n) {
      "use strict";
      e.exports = { avatars: "avatars_f2c2c8" };
    },
    725414: function (e, t, n) {
      "use strict";
      e.exports = {
        channel: "channel_b6391d",
        channelLeft: "channelLeft_b6391d",
      };
    },
  },
]);
//# sourceMappingURL=48bada02e9ed8b4f8cb7.js.map
