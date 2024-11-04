"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (n, e, t) {
      var r = t(147018),
        i = t(863664),
        l = t(299623),
        o = t(345374),
        a = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return i(l(this), a);
          },
        },
      ),
        o("toReversed");
    },
    484957: function (n, e, t) {
      t.d(e, {
        j: function () {
          return r.j;
        },
      });
      var r = t(270292);
    },
    817718: function (n, e, t) {
      t.d(e, {
        U3: function () {
          return m;
        },
        XM: function () {
          return c;
        },
        hd: function () {
          return u;
        },
        lI: function () {
          return s;
        },
        py: function () {
          return d;
        },
      });
      var r = t(481060),
        i = t(819640),
        l = t(585483),
        o = t(981631);
      let a = () => i.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!a()) return l.S.dispatch(o.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!a()) return l.S.dispatch(o.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(o.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(o.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (l.S.hasSubscribers(o.CkL.MODAL_CLOSE))
              return l.S.dispatch(o.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (n, e, t) {
      t.d(e, {
        P: function () {
          return l;
        },
      });
      var r = t(817718),
        i = t(981631);
      let l = {
        [i.EkH.MODAL_CAROUSEL_NEXT]: r.XM,
        [i.EkH.MODAL_CAROUSEL_PREV]: r.py,
        [i.EkH.CLOSE_MODAL]: r.U3,
      };
    },
    822869: function (n, e, t) {
      t.d(e, {
        Ad: function () {
          return f;
        },
        Lb: function () {
          return a;
        },
        ZF: function () {
          return d;
        },
        gP: function () {
          return u;
        },
        mh: function () {
          return m;
        },
        sF: function () {
          return s;
        },
        xp: function () {
          return c;
        },
      });
      var r = t(192379),
        i = t(392711),
        l = t(626135),
        o = t(981631);
      function a(n, e, t) {
        l.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: n,
          message_id: e,
          source: t,
        });
      }
      function s(n) {
        let {
          channelId: e,
          messageId: t,
          numDestinationChanges: r,
          numQueryChanges: i,
        } = n;
        l.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: e,
          message_id: t,
          num_destination_changes: r,
          num_query_changes: i,
        });
      }
      function u(n) {
        let {
          channelId: e,
          messageId: t,
          hasError: r,
          hasContextMessage: i,
          numDestinations: a,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = n;
        l.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: e,
          message_id: t,
          has_error: r,
          has_context_message: i,
          num_destinations: a,
          num_destination_changes: s,
          num_query_changes: u,
          any_destination_has_slowmode: c,
        });
      }
      function c(n, e) {
        l.default.track(o.rMx.FORWARD_COPY_LINK, {
          channel_id: n,
          message_id: e,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, i.once)((n, e, t) => {
              l.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: n,
                message_id: e,
                has_query: t,
              });
            }),
          [],
        );
      }
      function m() {
        return r.useMemo(
          () =>
            (0, i.once)((n, e) => {
              l.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: n,
                message_id: e,
              });
            }),
          [],
        );
      }
      function f() {
        return r.useMemo(
          () =>
            (0, i.once)((n, e) => {
              l.default.track(o.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                channel_id: n,
                message_id: e,
              });
            }),
          [],
        );
      }
    },
    868643: function (n, e, t) {
      t.d(e, {
        a: function () {
          return f;
        },
        h: function () {
          return m;
        },
      }),
        t(789020);
      var r = t(192379),
        i = t(442837),
        l = t(430198),
        o = t(592125),
        a = t(430824),
        s = t(630388),
        u = t(981631);
      let c =
        u.iLy.CROSSPOSTED |
        u.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
        u.iLy.GUILD_FEED_HIDDEN |
        u.iLy.HAS_SNAPSHOT |
        u.iLy.HAS_THREAD |
        u.iLy.IS_CROSSPOST |
        u.iLy.IS_VOICE_MESSAGE |
        u.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
        u.iLy.SUPPRESS_EMBEDS |
        u.iLy.SUPPRESS_NOTIFICATIONS |
        u.iLy.URGENT;
      function d(n) {
        return (
          (!!(n.state !== u.yb.SEND_FAILED && u.V$x.FORWARDABLE.has(n.type)) &&
            null == n.poll &&
            null == n.activity &&
            null == n.call &&
            null == n.activityInstance &&
            0 === (0, s.Ge)(n.flags, c)) ||
          !1
        );
      }
      function m(n) {
        var e;
        if (!d(n)) return !1;
        let t =
          null === (e = o.Z.getChannel(n.channel_id)) || void 0 === e
            ? void 0
            : e.guild_id;
        return (
          !(null != t && l.Z.isChannelOrThreadParentGated(t, n.channel_id)) &&
          !0
        );
      }
      function f(n) {
        let e = (0, i.e7)([a.Z, l.Z, o.Z], () => {
          var e, t;
          if (null == n) return !0;
          let r =
            null === (e = o.Z.getChannel(n.channel_id)) || void 0 === e
              ? void 0
              : e.guild_id;
          return (
            !!(
              null != r &&
              (null === (t = a.Z.getGuild(r)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != r && l.Z.isChannelOrThreadParentGated(r, n.channel_id))
          );
        });
        return r.useMemo(() => !e && null != n && d(n), [e, n]);
      }
    },
    912332: function (n, e, t) {
      t.d(e, {
        Np: function () {
          return u;
        },
        l8: function () {
          return a;
        },
        mc: function () {
          return s;
        },
        so: function () {
          return o;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(481060),
        l = t(822869);
      let o = "forward-modal";
      function a(n) {
        let {
          messageId: e,
          channelId: a,
          message: s,
          source: u,
          initialSelectedDestinations: c = [],
          forwardOptions: d,
          onRequestSent: m,
        } = n;
        (0, l.Lb)(a, e, u),
          (0, i.openModalLazy)(
            async () => {
              let { ForwardModal: n } = await Promise.all([
                t.e("6380"),
                t.e("99452"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, r.jsx)(n, {
                  ...t,
                  channelId: a,
                  messageId: e,
                  message: s,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: m,
                });
            },
            { modalKey: o },
          );
      }
      function s() {
        (0, i.closeModal)(o);
      }
      function u(n) {
        let {
          messageId: e,
          channelId: l,
          message: o,
          failedDestinations: a,
          forwardOptions: s,
        } = n;
        (0, i.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: n } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, r.jsx)(n, {
              ...t,
              messageId: e,
              channelId: l,
              message: o,
              failedDestinations: a,
              forwardOptions: s,
            });
        });
      }
    },
    73249: function (n, e, t) {
      var r = t(200651),
        i = t(192379),
        l = t(481060),
        o = t(346610),
        a = t(868643),
        s = t(912332),
        u = t(49012),
        c = t(358085),
        d = t(212459),
        m = t(701865),
        f = t(388032),
        h = t(92718);
      function _() {
        (0, l.closeModal)(m.U);
      }
      function x(n) {
        let { onClick: e, tooltipText: t, children: i, ...o } = n;
        return (0, r.jsx)(l.Tooltip, {
          text: t,
          children: (n) => {
            let { ...t } = n;
            return (0, r.jsx)(l.Button, {
              ...t,
              onClick: e,
              look: l.ButtonLooks.BLANK,
              size: l.ButtonSizes.ICON,
              color: l.ButtonColors.CUSTOM,
              className: h.actionButton,
              ...o,
              children: i,
            });
          },
        });
      }
      function p() {
        let { zoomed: n, setZoomed: e } = (0, d.Y)();
        return (0, r.jsx)(x, {
          onClick: () => e(!n),
          tooltipText: n
            ? f.intl.string(f.t.vOFof3)
            : f.intl.string(f.t.Kt4gZ2),
          children: n
            ? (0, r.jsx)(l.XLargeIcon, {})
            : (0, r.jsx)(l.MagnifyingGlassIcon, {}),
        });
      }
      function C(n) {
        var e, t;
        let { item: u } = n,
          c =
            null === (e = u.sourceMetadata) || void 0 === e
              ? void 0
              : e.message,
          d =
            null === (t = u.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          m = i.useCallback(() => {
            if (null != c && null != d) {
              if ("embed" === d.type) {
                (0, s.l8)({
                  messageId: c.id,
                  channelId: c.channel_id,
                  message: c,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                  onRequestSent: _,
                });
                return;
              }
              (0, s.l8)({
                messageId: c.id,
                channelId: c.channel_id,
                message: c,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: _,
              });
            }
          }, [c, d]),
          { canForwardMessages: h } = (0, o.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != c && h && (0, a.h)(c)
          ? (0, r.jsx)(x, {
              onClick: m,
              tooltipText: f.intl.string(f.t.I3ltXF),
              children: (0, r.jsx)(l.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function g(n) {
        let {} = n;
        return c.isPlatformEmbedded
          ? (0, r.jsx)(x, {
              tooltipText: f.intl.string(f.t["1WjMbG"]),
              children: (0, r.jsx)(l.DownloadIcon, {}),
            })
          : null;
      }
      function S(n) {
        var e;
        let { item: t } = n,
          i = null !== (e = t.original) && void 0 !== e ? e : t.url;
        return (0, r.jsx)(x, {
          onClick: () => (0, u.q)({ href: i }),
          tooltipText: f.intl.string(f.t.wuRE8P),
          children: (0, r.jsx)(l.WindowLaunchIcon, {}),
        });
      }
      function E(n) {
        let {} = n;
        return (0, r.jsx)(x, {
          tooltipText: f.intl.string(f.t.UKOtz8),
          children: (0, r.jsx)(l.MoreHorizontalIcon, {}),
        });
      }
      e.Z = i.memo(function (n) {
        let { item: e, hideMediaOptions: t } = n;
        return (0, r.jsxs)("div", {
          className: h.actionButtons,
          children: [
            (0, r.jsx)(p, {}),
            !t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(C, { item: e }),
                  (0, r.jsx)(g, { item: e }),
                  (0, r.jsx)(S, { item: e }),
                  (0, r.jsx)(E, { item: e }),
                ],
              }),
          ],
        });
      });
    },
    730606: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return b;
        },
      }),
        t(477488),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        o = t.n(l),
        a = t(299608),
        s = t.n(a),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        m = t(376641),
        f = t(714338),
        h = t(95398),
        _ = t(247206),
        x = t(134432),
        p = t(169525),
        C = t(585483),
        g = t(212459),
        S = t(683528),
        E = t(549635),
        L = t(981631),
        v = t(388032),
        A = t(193889);
      function I(n, e) {
        return ((n % e) + e) % e;
      }
      function O(n) {
        let { width: e, height: t } = n;
        return null == e || 0 === e || null == t || 0 === t;
      }
      function M(n) {
        let { children: e, isObscured: t, src: l } = n,
          [a, s] = i.useState(!1),
          u = i.useCallback(() => {
            s((n) => !n);
          }, []);
        return t
          ? (0, r.jsx)(h.a.Provider, {
              value: a,
              children: (0, r.jsx)(
                h.Z,
                {
                  type: h.Z.Types.ATTACHMENT,
                  reason: p.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (n) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("div", {
                        className: o()(A.obscureWrapper, { [A.obscure]: n }),
                        children: e(n),
                      }),
                    }),
                },
                l,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: e(!1) });
      }
      function b(n) {
        var e;
        let {
            items: t,
            onIndexChange: l,
            startIndex: o = 0,
            shouldRedactExplicitContent: a = !1,
            shouldHideMediaOptions: h = !1,
          } = n,
          [p, I] = i.useState(o),
          b = i.useRef(o),
          [R, j] = i.useState([]),
          { zoomed: y, setZoomed: D } = (0, g.Y)();
        i.useEffect(
          () => (
            f.Z.disable(),
            f.Z.enableTemp(m.P),
            () => {
              f.Z.disableTemp();
            }
          ),
          [],
        ),
          i.useEffect(() => {
            var n, e;
            let r = (((p + 1) % (n = t.length)) + n) % n;
            let i = (((p - 1) % (e = t.length)) + e) % e;
            O(t[r]) && (0, x.po)(t[r].url), O(t[i]) && (0, x.po)(t[i].url);
          }, [p, t]);
        let N = i.useCallback(
          (n) => {
            var e;
            let r = n - b.current;
            I((n = ((n % (e = t.length)) + e) % e)),
              (b.current = n),
              j((n) => [...n, r]),
              null == l || l(n),
              D(!1);
          },
          [l, t, D],
        );
        i.useEffect(() => {
          let n = s()(() => {
              N(b.current + 1);
            }, 300),
            e = s()(() => {
              N(b.current - 1);
            }, 300);
          return (
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_NEXT, n),
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_PREV, e),
            () => {
              C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_NEXT, n),
                C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_PREV, e);
            }
          );
        }, [N, D]);
        let k = t[p],
          T = (0, _.KP)({ type: _.lJ.GenericMedia, media: k }, a),
          P = h
            ? (n) => {
                n.stopPropagation(), n.preventDefault();
              }
            : void 0,
          B = (function (n) {
            if (0 === n) return ["translateX(0)"];
            let e = ["translateX(100px)", "translateX(-100px)"];
            return n > 0 ? e : e.toReversed();
          })(null !== (e = R[R.length - 1]) && void 0 !== e ? e : 0),
          Z = (0, d.useTransition)(k, {
            key: k.url,
            from: { opacity: 0, transform: B[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: B[B.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          U = t.length > 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: A.wrapper,
              children: [
                U
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: A.navPrev,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_PREV),
                      icon: (0, r.jsx)(c.j, {}),
                      tooltip: v.intl.string(v.t.vgfxaG),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: A.mediaContainer,
                  children: Z((n, e) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        u.animated.div,
                        {
                          style: n,
                          className: A.mediaWrapper,
                          children: (0, r.jsx)(M, {
                            isObscured: !y && T,
                            src: e.url,
                            children: (n) =>
                              (0, r.jsx)(E.Z, {
                                media: e,
                                obscured: n,
                                onContextMenu: P,
                              }),
                          }),
                        },
                        e.url,
                      ),
                    }),
                  ),
                }),
                U
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: A.navNext,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_NEXT),
                      icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: v.intl.string(v.t.XiOHRU),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            U &&
              (0, r.jsx)(S.Z, {
                items: t,
                currentIndex: p,
                onGalleryItemClick: N,
              }),
          ],
        });
      }
    },
    683528: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return x;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        o = t.n(l),
        a = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        m = t(388032),
        f = t(244190);
      function h(n) {
        return "media-view-scroll-thumbnail-".concat(n);
      }
      let _ = i.memo(function (n) {
        var e;
        let { item: t } = n;
        let i =
          "IMAGE" === (e = t).type
            ? (0, c.q)({ proxyURL: e.proxyUrl, url: e.url })
            : "VIDEO" === e.type && null != e.proxyUrl
              ? (0, d.D)(e.proxyUrl)
              : null;
        return null == i
          ? null
          : (0, r.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: i,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
            });
      });
      function x(n) {
        let { items: e, currentIndex: t, onGalleryItemClick: l } = n,
          u = i.useRef(null);
        return (
          i.useLayoutEffect(() => {
            let n = document.getElementById(h(t));
            null != u.current &&
              null != n &&
              u.current.scrollIntoViewNode({
                node: n,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, r.jsx)("div", {
            className: f.galleryContainer,
            children: (0, r.jsx)(a.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: f.gallery,
              ref: u,
              children: e.map((n, i) => {
                let s = i === t,
                  u = s ? m.t["qv/U5e"] : m.t.zviMAA;
                return (0, r.jsx)(
                  a.Clickable,
                  {
                    id: h(i),
                    className: o()(f.galleryItem, { [f.selected]: s }),
                    "aria-label": m.intl.formatToPlainString(u, {
                      pageNumber: i + 1,
                      totalPages: e.length,
                    }),
                    onClick: () => l(i),
                    children: (0, r.jsx)(_, { item: n }),
                  },
                  i,
                );
              }),
            }),
          })
        );
      }
    },
    549635: function (n, e, t) {
      t.d(e, {
        D: function () {
          return f;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(124347),
        o = t(80966),
        a = t(524444),
        s = t(52824),
        u = t(956664),
        c = t(589530),
        d = t(591759),
        m = t(718263);
      function f(n) {
        let e = d.Z.toURLSafe(n);
        return null == e
          ? null
          : (e.searchParams.append("format", "webp"), e.toString());
      }
      e.Z = i.memo(function (n) {
        let { media: e, obscured: t = !1, onContextMenu: i } = n,
          {
            width: d,
            height: h,
            url: _,
            proxyUrl: x,
            alt: p,
            type: C,
            maxWidth: g,
            maxHeight: S,
            ...E
          } = e,
          { width: L, height: v } = (0, u.zp)(
            null != d ? d : 0,
            null != h ? h : 0,
          ),
          A = (0, s.q)({ proxyURL: x, url: _ }),
          I = !(null == d || 0 === d || null == h || 0 === h);
        if ("VIDEO" === C && I && null != x) {
          var O;
          let n = f(x);
          if (null == n) return null;
          let l =
            null !== (O = e.renderLinkComponent) && void 0 !== O ? O : a.iT;
          return (0, r.jsx)(o.Z, {
            ...E,
            src: A,
            width: d,
            height: h,
            maxWidth: L,
            maxHeight: v,
            responsive: !0,
            poster: n,
            naturalWidth: d,
            naturalHeight: h,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: l,
            autoPlay: !t,
            alt: p,
            onContextMenu: i,
          });
        }
        if ("IMAGE" === C)
          return I
            ? (0, r.jsx)(l.ZP, {
                ...E,
                src: A,
                width: d,
                height: h,
                shouldLink: !1,
                maxWidth: L,
                maxHeight: v,
                animated: !t && e.animated,
                autoPlay: !t,
                alt: p,
                zoomThumbnailPlaceholder: e.zoomThumbnailPlaceholder,
                onContextMenu: i,
                responsive: !0,
              })
            : (0, r.jsx)("img", {
                src: A,
                alt: p,
                onContextMenu: i,
                className: m.dimensionlessImage,
              });
        return null;
      });
    },
    97594: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        }),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(481060),
        o = t(585483),
        a = t(212459),
        s = t(73249),
        u = t(730606),
        c = t(860153),
        d = t(981631),
        m = t(388032),
        f = t(619377);
      function h(n) {
        let {
            onClose: e,
            items: t,
            startingIndex: h,
            onIndexChange: _,
            shouldRedactExplicitContent: x,
            shouldHideMediaOptions: p = !1,
            className: C,
            ...g
          } = n,
          [S, E] = i.useState(null != h ? h : 0),
          [L, v] = i.useState(!1);
        i.useEffect(() => {
          if (null != e)
            return (
              o.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, e),
              () => {
                o.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, e);
              }
            );
        }, [e]);
        let A = i.useCallback(
            (n) => {
              E(n), null == _ || _(n);
            },
            [_],
          ),
          I = i.useMemo(() => ({ zoomed: L, setZoomed: v }), [L]),
          O = t[S];
        return (0, r.jsx)(l.ModalRoot, {
          hideShadow: !0,
          className: f.carouselModal,
          ...g,
          size: l.ModalSize.DYNAMIC,
          fullscreenOnMobile: !1,
          "aria-label": m.intl.string(m.t.AMTX3t),
          children: (0, r.jsxs)(a.z.Provider, {
            value: I,
            children: [
              (0, r.jsx)(c.Z, { item: O, onClose: e }),
              (0, r.jsx)(u.Z, {
                items: t,
                startIndex: S,
                onIndexChange: A,
                shouldRedactExplicitContent: x,
                shouldHideMediaOptions: p,
              }),
              (0, r.jsx)("div", {
                className: f.actionButtonContainer,
                children: (0, r.jsx)(s.Z, {
                  item: O,
                  hideMediaOptions:
                    ("IMAGE" === O.type && null == O.original) || p,
                }),
              }),
            ],
          }),
        });
      }
    },
    860153: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return p;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        o = t.n(l),
        a = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        m = t(123145),
        f = t(592125),
        h = t(231338),
        _ = t(182763);
      let x = i.memo(function (n) {
        let { message: e } = n,
          t = (0, a.e7)([f.Z], () => f.Z.getChannel(e.channel_id));
        return null == t
          ? null
          : (0, r.jsx)("div", {
              className: _.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                value: t.guild_id,
                children: [
                  (0, r.jsx)(u.Z, { user: e.author }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(m.Z, { message: e, channel: t }),
                  }),
                  (0, r.jsx)(d.Z, {
                    timestamp: e.timestamp,
                    className: _.timestamp,
                  }),
                ],
              }),
            });
      });
      function p(n) {
        var e;
        let { item: t, onClose: i } = n,
          l =
            null === (e = t.sourceMetadata) || void 0 === e
              ? void 0
              : e.message;
        return (0, r.jsx)(s.ThemeProvider, {
          theme: h.BR.DARK,
          children: (n) =>
            (0, r.jsxs)("div", {
              className: o()(_.topBar, n),
              children: [
                (0, r.jsx)(s.Button, {
                  look: s.ButtonLooks.BLANK,
                  color: s.ButtonColors.CUSTOM,
                  size: s.ButtonSizes.ICON,
                  className: _.closeButton,
                  onClick: i,
                  children: (0, r.jsx)(s.XLargeIcon, {}),
                }),
                null != l && (0, r.jsx)(x, { message: l }),
              ],
            }),
        });
      }
    },
    212459: function (n, e, t) {
      t.d(e, {
        Y: function () {
          return l;
        },
        z: function () {
          return i;
        },
      });
      var r = t(192379);
      let i = (0, r.createContext)({ zoomed: !1, setZoomed: () => {} });
      function l() {
        return (0, r.useContext)(i);
      }
    },
    52824: function (n, e, t) {
      t.d(e, {
        q: function () {
          return r;
        },
      });
      function r(n) {
        let { proxyURL: e, url: t } = n;
        return null != e && "" !== e ? e : t;
      }
    },
    92718: function (n, e, t) {
      n.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
      };
    },
    193889: function (n, e, t) {
      n.exports = {
        wrapper: "wrapper_a24281",
        mediaContainer: "mediaContainer_a24281",
        mediaWrapper: "mediaWrapper_a24281",
        navPrev: "navPrev_a24281 nav_a24281",
        navNext: "navNext_a24281 nav_a24281",
        obscureWrapper: "obscureWrapper_a24281",
        obscure: "obscure_a24281",
      };
    },
    244190: function (n, e, t) {
      n.exports = {
        galleryContainer: "galleryContainer_b24655",
        gallery: "gallery_b24655",
        galleryItem: "galleryItem_b24655",
        selected: "selected_b24655",
      };
    },
    718263: function (n, e, t) {
      n.exports = { dimensionlessImage: "dimensionlessImage_a4c000" };
    },
    619377: function (n, e, t) {
      n.exports = {
        carouselModal: "carouselModal_c319f9",
        actionButtonContainer: "actionButtonContainer_c319f9",
      };
    },
    182763: function (n, e, t) {
      n.exports = {
        topBar: "topBar_bf8df0",
        messageContents: "messageContents_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButton: "closeButton_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=8858775f1a9615df714d.js.map
