"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var r = t(147018),
        i = t(863664),
        a = t(299623),
        l = t(345374),
        o = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return i(a(this), o);
          },
        },
      ),
        l("toReversed");
    },
    484957: function (e, n, t) {
      t.d(n, {
        j: function () {
          return r.j;
        },
      });
      var r = t(270292);
    },
    817718: function (e, n, t) {
      t.d(n, {
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
        a = t(585483),
        l = t(981631);
      let o = () => i.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return a.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return a.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (a.S.hasSubscribers(l.CkL.MODAL_CLOSE))
              return a.S.dispatch(l.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
        P: function () {
          return a;
        },
      });
      var r = t(817718),
        i = t(981631);
      let a = {
        [i.EkH.MODAL_CAROUSEL_NEXT]: r.XM,
        [i.EkH.MODAL_CAROUSEL_PREV]: r.py,
        [i.EkH.CLOSE_MODAL]: r.U3,
      };
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return _;
        },
        Lb: function () {
          return o;
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
        a = t(626135),
        l = t(981631);
      function o(e, n, t) {
        a.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: t,
        });
      }
      function s(e) {
        let {
          channelId: n,
          messageId: t,
          numDestinationChanges: r,
          numQueryChanges: i,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: r,
          num_query_changes: i,
        });
      }
      function u(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: r,
          hasContextMessage: i,
          numDestinations: o,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: r,
          has_context_message: i,
          num_destinations: o,
          num_destination_changes: s,
          num_query_changes: u,
          any_destination_has_slowmode: c,
        });
      }
      function c(e, n) {
        a.default.track(l.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n, t) => {
              a.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function m() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n) => {
              a.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function _() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n) => {
              a.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
    },
    868643: function (e, n, t) {
      t.d(n, {
        a: function () {
          return _;
        },
        h: function () {
          return m;
        },
      }),
        t(789020);
      var r = t(192379),
        i = t(442837),
        a = t(430198),
        l = t(592125),
        o = t(430824),
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
      function d(e) {
        return (
          (!!(e.state !== u.yb.SEND_FAILED && u.V$x.FORWARDABLE.has(e.type)) &&
            null == e.poll &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, s.Ge)(e.flags, c)) ||
          !1
        );
      }
      function m(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function _(e) {
        let n = (0, i.e7)([o.Z, a.Z, l.Z], () => {
          var n, t;
          if (null == e) return !0;
          let r =
            null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != r &&
              (null === (t = o.Z.getGuild(r)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != r && a.Z.isChannelOrThreadParentGated(r, e.channel_id))
          );
        });
        return r.useMemo(() => !n && null != e && d(e), [n, e]);
      }
    },
    912332: function (e, n, t) {
      t.d(n, {
        Np: function () {
          return u;
        },
        l8: function () {
          return o;
        },
        mc: function () {
          return s;
        },
        so: function () {
          return l;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(481060),
        a = t(822869);
      let l = "forward-modal";
      function o(e) {
        let {
          messageId: n,
          channelId: o,
          message: s,
          source: u,
          initialSelectedDestinations: c = [],
          forwardOptions: d,
          onRequestSent: m,
        } = e;
        (0, a.Lb)(o, n, u),
          (0, i.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("16918"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, r.jsx)(e, {
                  ...t,
                  channelId: o,
                  messageId: n,
                  message: s,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: m,
                });
            },
            { modalKey: l },
          );
      }
      function s() {
        (0, i.closeModal)(l);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: a,
          message: l,
          failedDestinations: o,
          forwardOptions: s,
        } = e;
        (0, i.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              messageId: n,
              channelId: a,
              message: l,
              failedDestinations: o,
              forwardOptions: s,
            });
        });
      }
    },
    73249: function (e, n, t) {
      var r = t(200651),
        i = t(192379),
        a = t(481060),
        l = t(346610),
        o = t(868643),
        s = t(912332),
        u = t(49012),
        c = t(358085),
        d = t(212459),
        m = t(701865),
        _ = t(689938),
        f = t(92718);
      function h() {
        (0, a.closeModal)(m.U);
      }
      function E(e) {
        let { onClick: n, tooltipText: t, children: i, ...l } = e;
        return (0, r.jsx)(a.Tooltip, {
          text: t,
          children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(a.Button, {
              ...t,
              onClick: n,
              look: a.ButtonLooks.BLANK,
              size: a.ButtonSizes.ICON,
              color: a.ButtonColors.CUSTOM,
              className: f.actionButton,
              ...l,
              children: i,
            });
          },
        });
      }
      function x() {
        let { zoomed: e, setZoomed: n } = (0, d.Y)();
        return (0, r.jsx)(E, {
          onClick: () => n(!e),
          tooltipText: e
            ? _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_OUT
            : _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_IN,
          children: e
            ? (0, r.jsx)(a.XLargeIcon, {})
            : (0, r.jsx)(a.MagnifyingGlassIcon, {}),
        });
      }
      function p(e) {
        var n, t;
        let { item: u } = e,
          c =
            null === (n = u.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
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
                  onRequestSent: h,
                });
                return;
              }
              (0, s.l8)({
                messageId: c.id,
                channelId: c.channel_id,
                message: c,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: h,
              });
            }
          }, [c, d]),
          { canForwardMessages: f } = (0, l.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != c && f && (0, o.h)(c)
          ? (0, r.jsx)(E, {
              onClick: m,
              tooltipText: _.Z.Messages.MESSAGE_ACTION_FORWARD,
              children: (0, r.jsx)(a.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function C(e) {
        let {} = e;
        return c.isPlatformEmbedded
          ? (0, r.jsx)(E, {
              tooltipText: _.Z.Messages.DOWNLOAD,
              children: (0, r.jsx)(a.DownloadIcon, {}),
            })
          : null;
      }
      function g(e) {
        var n;
        let { item: t } = e,
          i = null !== (n = t.original) && void 0 !== n ? n : t.url;
        return (0, r.jsx)(E, {
          onClick: () => (0, u.q)({ href: i }),
          tooltipText: _.Z.Messages.OPEN_LINK,
          children: (0, r.jsx)(a.WindowLaunchIcon, {}),
        });
      }
      function A(e) {
        let {} = e;
        return (0, r.jsx)(E, {
          tooltipText: _.Z.Messages.MORE,
          children: (0, r.jsx)(a.MoreHorizontalIcon, {}),
        });
      }
      n.Z = i.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (0, r.jsxs)("div", {
          className: f.actionButtons,
          children: [
            (0, r.jsx)(x, {}),
            !t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(p, { item: n }),
                  (0, r.jsx)(C, { item: n }),
                  (0, r.jsx)(g, { item: n }),
                  (0, r.jsx)(A, { item: n }),
                ],
              }),
          ],
        });
      });
    },
    730606: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(477488),
        t(47120);
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(299608),
        s = t.n(o),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        m = t(376641),
        _ = t(714338),
        f = t(95398),
        h = t(163268),
        E = t(134432),
        x = t(169525),
        p = t(585483),
        C = t(212459),
        g = t(683528),
        A = t(549635),
        I = t(981631),
        L = t(689938),
        S = t(193889);
      function M(e, n) {
        return ((e % n) + n) % n;
      }
      function O(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function v(e) {
        let { children: n, isObscured: t, src: a } = e,
          [o, s] = i.useState(!1),
          u = i.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, r.jsx)(f.a.Provider, {
              value: o,
              children: (0, r.jsx)(
                f.Z,
                {
                  type: f.Z.Types.ATTACHMENT,
                  reason: x.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("div", {
                        className: l()(S.obscureWrapper, { [S.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                a,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: n(!1) });
      }
      function R(e) {
        var n;
        let {
            items: t,
            onIndexChange: a,
            startIndex: l = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: f = !1,
          } = e,
          [x, M] = i.useState(l),
          R = i.useRef(l),
          [b, N] = i.useState([]),
          { zoomed: y, setZoomed: j } = (0, C.Y)();
        i.useEffect(
          () => (
            _.Z.disable(),
            _.Z.enableTemp(m.P),
            () => {
              _.Z.disableTemp();
            }
          ),
          [],
        ),
          i.useEffect(() => {
            var e, n;
            let r = (((x + 1) % (e = t.length)) + e) % e;
            let i = (((x - 1) % (n = t.length)) + n) % n;
            O(t[r]) && (0, E.po)(t[r].url), O(t[i]) && (0, E.po)(t[i].url);
          }, [x, t]);
        let T = i.useCallback(
          (e) => {
            var n;
            let r = e - R.current;
            M((e = ((e % (n = t.length)) + n) % n)),
              (R.current = e),
              N((e) => [...e, r]),
              null == a || a(e),
              j(!1);
          },
          [a, t, j],
        );
        i.useEffect(() => {
          let e = s()(() => {
              T(R.current + 1);
            }, 300),
            n = s()(() => {
              T(R.current - 1);
            }, 300);
          return (
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, e),
                p.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [T, j]);
        let D = t[x],
          k = (0, h.KP)({ type: h.lJ.GenericMedia, media: D }, o),
          Z = f
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          P = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(null !== (n = b[b.length - 1]) && void 0 !== n ? n : 0),
          B = (0, d.useTransition)(D, {
            key: D.url,
            from: { opacity: 0, transform: P[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: P[P.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          U = t.length > 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: S.wrapper,
              children: [
                U
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: S.navPrev,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => p.S.dispatch(I.CkL.MODAL_CAROUSEL_PREV),
                      icon: (0, r.jsx)(c.j, {}),
                      tooltip: L.Z.Messages.PAGINATION_PREVIOUS,
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: S.mediaContainer,
                  children: B((e, n) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        u.animated.div,
                        {
                          style: e,
                          className: S.mediaWrapper,
                          children: (0, r.jsx)(v, {
                            isObscured: !y && k,
                            src: n.url,
                            children: (e) =>
                              (0, r.jsx)(A.Z, {
                                media: n,
                                obscured: e,
                                onContextMenu: Z,
                              }),
                          }),
                        },
                        n.url,
                      ),
                    }),
                  ),
                }),
                U
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: S.navNext,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => p.S.dispatch(I.CkL.MODAL_CAROUSEL_NEXT),
                      icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: L.Z.Messages.PAGINATION_NEXT,
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            U &&
              (0, r.jsx)(g.Z, {
                items: t,
                currentIndex: x,
                onGalleryItemClick: T,
              }),
          ],
        });
      }
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        m = t(689938),
        _ = t(244190);
      function f(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let h = i.memo(function (e) {
        var n;
        let { item: t } = e;
        let i =
          "IMAGE" === (n = t).type
            ? (0, c.q)({ proxyURL: n.proxyUrl, url: n.url })
            : "VIDEO" === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
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
      function E(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: a } = e,
          u = i.useRef(null);
        return (
          i.useLayoutEffect(() => {
            let e = document.getElementById(f(t));
            null != u.current &&
              null != e &&
              u.current.scrollIntoViewNode({
                node: e,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, r.jsx)("div", {
            className: _.galleryContainer,
            children: (0, r.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: _.gallery,
              ref: u,
              children: n.map((e, i) => {
                let s = i === t,
                  u = s
                    ? m.Z.Messages.PAGINATION_CURRENT_ITEM_LABEL
                    : m.Z.Messages.PAGINATION_ITEM_LABEL;
                return (0, r.jsx)(
                  o.Clickable,
                  {
                    id: f(t),
                    className: l()(_.galleryItem, { [_.selected]: s }),
                    "aria-label": u.format({
                      pageNumber: i + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => a(i),
                    children: (0, r.jsx)(h, { item: e }),
                  },
                  i,
                );
              }),
            }),
          })
        );
      }
    },
    549635: function (e, n, t) {
      t.d(n, {
        D: function () {
          return _;
        },
      });
      var r = t(200651),
        i = t(192379),
        a = t(124347),
        l = t(80966),
        o = t(524444),
        s = t(52824),
        u = t(956664),
        c = t(589530),
        d = t(591759),
        m = t(718263);
      function _(e) {
        let n = d.Z.toURLSafe(e);
        return null == n
          ? null
          : (n.searchParams.append("format", "webp"), n.toString());
      }
      n.Z = i.memo(function (e) {
        let { media: n, obscured: t = !1, onContextMenu: i } = e,
          {
            width: d,
            height: f,
            url: h,
            proxyUrl: E,
            alt: x,
            type: p,
            maxWidth: C,
            maxHeight: g,
            ...A
          } = n,
          { width: I, height: L } = (0, u.zp)(
            null != d ? d : 0,
            null != f ? f : 0,
          ),
          S = (0, s.q)({ proxyURL: E, url: h }),
          M = !(null == d || 0 === d || null == f || 0 === f);
        if ("VIDEO" === p && M && null != E) {
          var O;
          let e = _(E);
          if (null == e) return null;
          let a =
            null !== (O = n.renderLinkComponent) && void 0 !== O ? O : o.iT;
          return (0, r.jsx)(l.Z, {
            ...A,
            src: S,
            width: d,
            height: f,
            maxWidth: I,
            maxHeight: L,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: a,
            autoPlay: !t,
            alt: x,
            onContextMenu: i,
          });
        }
        if ("IMAGE" === p)
          return M
            ? (0, r.jsx)(a.ZP, {
                ...A,
                src: S,
                width: d,
                height: f,
                shouldLink: !1,
                maxWidth: I,
                maxHeight: L,
                animated: !t && n.animated,
                autoPlay: !t,
                alt: x,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: i,
                responsive: !0,
              })
            : (0, r.jsx)("img", {
                src: S,
                alt: x,
                onContextMenu: i,
                className: m.dimensionlessImage,
              });
        return null;
      });
    },
    97594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        }),
        t(47120);
      var r = t(200651),
        i = t(192379),
        a = t(481060),
        l = t(585483),
        o = t(212459),
        s = t(73249),
        u = t(730606),
        c = t(860153),
        d = t(981631),
        m = t(689938),
        _ = t(619377);
      function f(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: f,
            onIndexChange: h,
            shouldRedactExplicitContent: E,
            shouldHideMediaOptions: x = !1,
            className: p,
            ...C
          } = e,
          [g, A] = i.useState(null != f ? f : 0),
          [I, L] = i.useState(!1);
        i.useEffect(() => {
          if (null != n)
            return (
              l.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                l.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]);
        let S = i.useCallback(
            (e) => {
              A(e), null == h || h(e);
            },
            [h],
          ),
          M = i.useMemo(() => ({ zoomed: I, setZoomed: L }), [I]),
          O = t[g];
        return (0, r.jsx)(a.ModalRoot, {
          hideShadow: !0,
          className: _.carouselModal,
          ...C,
          size: a.ModalSize.DYNAMIC,
          fullscreenOnMobile: !1,
          "aria-label": m.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
          children: (0, r.jsxs)(o.z.Provider, {
            value: M,
            children: [
              (0, r.jsx)(c.Z, { item: O, onClose: n }),
              (0, r.jsx)(u.Z, {
                items: t,
                startIndex: g,
                onIndexChange: S,
                shouldRedactExplicitContent: E,
                shouldHideMediaOptions: x,
              }),
              (0, r.jsx)("div", {
                className: _.actionButtonContainer,
                children: (0, r.jsx)(s.Z, {
                  item: O,
                  hideMediaOptions:
                    ("IMAGE" === O.type && null == O.original) || x,
                }),
              }),
            ],
          }),
        });
      }
    },
    860153: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        m = t(123145),
        _ = t(592125),
        f = t(231338),
        h = t(182763);
      let E = i.memo(function (e) {
        let { message: n } = e,
          t = (0, o.e7)([_.Z], () => _.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, r.jsx)("div", {
              className: h.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                value: t.guild_id,
                children: [
                  (0, r.jsx)(u.Z, { user: n.author }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(m.Z, { message: n, channel: t }),
                  }),
                  (0, r.jsx)(d.Z, {
                    timestamp: n.timestamp,
                    className: h.timestamp,
                  }),
                ],
              }),
            });
      });
      function x(e) {
        var n;
        let { item: t, onClose: i } = e,
          a =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, r.jsx)(s.ThemeProvider, {
          theme: f.BR.DARK,
          children: (e) =>
            (0, r.jsxs)("div", {
              className: l()(h.topBar, e),
              children: [
                (0, r.jsx)(s.Button, {
                  look: s.ButtonLooks.BLANK,
                  color: s.ButtonColors.CUSTOM,
                  size: s.ButtonSizes.ICON,
                  className: h.closeButton,
                  onClick: i,
                  children: (0, r.jsx)(s.XLargeIcon, {}),
                }),
                null != a && (0, r.jsx)(E, { message: a }),
              ],
            }),
        });
      }
    },
    212459: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return a;
        },
        z: function () {
          return i;
        },
      });
      var r = t(192379);
      let i = (0, r.createContext)({ zoomed: !1, setZoomed: () => {} });
      function a() {
        return (0, r.useContext)(i);
      }
    },
    52824: function (e, n, t) {
      t.d(n, {
        q: function () {
          return r;
        },
      });
      function r(e) {
        let { proxyURL: n, url: t } = e;
        return null != n && "" !== n ? n : t;
      }
    },
    92718: function (e, n, t) {
      e.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
      };
    },
    193889: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24281",
        mediaContainer: "mediaContainer_a24281",
        mediaWrapper: "mediaWrapper_a24281",
        navPrev: "navPrev_a24281 nav_a24281",
        navNext: "navNext_a24281 nav_a24281",
        obscureWrapper: "obscureWrapper_a24281",
        obscure: "obscure_a24281",
      };
    },
    244190: function (e, n, t) {
      e.exports = {
        galleryContainer: "galleryContainer_b24655",
        gallery: "gallery_b24655",
        galleryItem: "galleryItem_b24655",
        selected: "selected_b24655",
      };
    },
    718263: function (e, n, t) {
      e.exports = { dimensionlessImage: "dimensionlessImage_a4c000" };
    },
    619377: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c319f9",
        actionButtonContainer: "actionButtonContainer_c319f9",
      };
    },
    182763: function (e, n, t) {
      e.exports = {
        topBar: "topBar_bf8df0",
        messageContents: "messageContents_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButton: "closeButton_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=f25f4c633c72fd280c1a.js.map
