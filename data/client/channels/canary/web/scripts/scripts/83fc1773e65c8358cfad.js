"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var r = t(147018),
        a = t(863664),
        i = t(299623),
        l = t(345374),
        o = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return a(i(this), o);
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
        a = t(819640),
        i = t(585483),
        l = t(981631);
      let o = () => a.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (i.S.hasSubscribers(l.CkL.MODAL_CLOSE))
              return i.S.dispatch(l.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
        P: function () {
          return i;
        },
      });
      var r = t(817718),
        a = t(981631);
      let i = {
        [a.EkH.MODAL_CAROUSEL_NEXT]: r.XM,
        [a.EkH.MODAL_CAROUSEL_PREV]: r.py,
        [a.EkH.CLOSE_MODAL]: r.U3,
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
        a = t(392711),
        i = t(626135),
        l = t(981631);
      function o(e, n, t) {
        i.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
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
          numQueryChanges: a,
        } = e;
        i.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: r,
          num_query_changes: a,
        });
      }
      function u(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: r,
          hasContextMessage: a,
          numDestinations: o,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        i.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: r,
          has_context_message: a,
          num_destinations: o,
          num_destination_changes: s,
          num_query_changes: u,
          any_destination_has_slowmode: c,
        });
      }
      function c(e, n) {
        i.default.track(l.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, a.once)((e, n, t) => {
              i.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
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
            (0, a.once)((e, n) => {
              i.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
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
            (0, a.once)((e, n) => {
              i.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
        a = t(442837),
        i = t(430198),
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
          !(null != t && i.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function _(e) {
        let n = (0, a.e7)([o.Z, i.Z, l.Z], () => {
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
            (null != r && i.Z.isChannelOrThreadParentGated(r, e.channel_id))
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
      var a = t(481060),
        i = t(822869);
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
        (0, i.Lb)(o, n, u),
          (0, a.openModalLazy)(
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
        (0, a.closeModal)(l);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: i,
          message: l,
          failedDestinations: o,
          forwardOptions: s,
        } = e;
        (0, a.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, r.jsx)(e, {
              ...t,
              messageId: n,
              channelId: i,
              message: l,
              failedDestinations: o,
              forwardOptions: s,
            });
        });
      }
    },
    73249: function (e, n, t) {
      var r = t(200651),
        a = t(192379),
        i = t(481060),
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
        (0, i.closeModal)(m.U);
      }
      function x(e) {
        let { onClick: n, tooltipText: t, children: a, ...l } = e;
        return (0, r.jsx)(i.Tooltip, {
          text: t,
          children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(i.Button, {
              ...t,
              onClick: n,
              look: i.ButtonLooks.BLANK,
              size: i.ButtonSizes.ICON,
              color: i.ButtonColors.CUSTOM,
              className: f.actionButton,
              ...l,
              children: a,
            });
          },
        });
      }
      function E() {
        let { zoomed: e, setZoomed: n } = (0, d.Y)();
        return (0, r.jsx)(x, {
          onClick: () => n(!e),
          tooltipText: e
            ? _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_OUT
            : _.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_IN,
          children: e
            ? (0, r.jsx)(i.XLargeIcon, {})
            : (0, r.jsx)(i.MagnifyingGlassIcon, {}),
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
          m = a.useCallback(() => {
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
          ? (0, r.jsx)(x, {
              onClick: m,
              tooltipText: _.Z.Messages.MESSAGE_ACTION_FORWARD,
              children: (0, r.jsx)(i.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function C(e) {
        let {} = e;
        return c.isPlatformEmbedded
          ? (0, r.jsx)(x, {
              tooltipText: _.Z.Messages.DOWNLOAD,
              children: (0, r.jsx)(i.DownloadIcon, {}),
            })
          : null;
      }
      function A(e) {
        var n;
        let { item: t } = e,
          a = null !== (n = t.original) && void 0 !== n ? n : t.url;
        return (0, r.jsx)(x, {
          onClick: () => (0, u.q)({ href: a }),
          tooltipText: _.Z.Messages.OPEN_LINK,
          children: (0, r.jsx)(i.WindowLaunchIcon, {}),
        });
      }
      function g(e) {
        let {} = e;
        return (0, r.jsx)(x, {
          tooltipText: _.Z.Messages.MORE,
          children: (0, r.jsx)(i.MoreHorizontalIcon, {}),
        });
      }
      n.Z = a.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (0, r.jsxs)("div", {
          className: f.actionButtons,
          children: [
            (0, r.jsx)(E, {}),
            !t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(p, { item: n }),
                  (0, r.jsx)(C, { item: n }),
                  (0, r.jsx)(A, { item: n }),
                  (0, r.jsx)(g, { item: n }),
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
        a = t(192379),
        i = t(120356),
        l = t.n(i),
        o = t(299608),
        s = t.n(o),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        m = t(376641),
        _ = t(714338),
        f = t(95398),
        h = t(163268),
        x = t(134432),
        E = t(169525),
        p = t(585483),
        C = t(212459),
        A = t(683528),
        g = t(549635),
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
        let { children: n, isObscured: t, src: i } = e,
          [o, s] = a.useState(!1),
          u = a.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, r.jsx)(f.a.Provider, {
              value: o,
              children: (0, r.jsx)(
                f.Z,
                {
                  type: f.Z.Types.ATTACHMENT,
                  reason: E.wk.EXPLICIT_CONTENT,
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
                i,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: n(!1) });
      }
      function R(e) {
        var n;
        let {
            items: t,
            onIndexChange: i,
            startIndex: l = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: f = !1,
          } = e,
          [E, M] = a.useState(l),
          R = a.useRef(l),
          [b, N] = a.useState([]),
          { zoomed: j, setZoomed: y } = (0, C.Y)();
        a.useEffect(
          () => (
            _.Z.disable(),
            _.Z.enableTemp(m.P),
            () => {
              _.Z.disableTemp();
            }
          ),
          [],
        ),
          a.useEffect(() => {
            var e, n;
            let r = (((E + 1) % (e = t.length)) + e) % e;
            let a = (((E - 1) % (n = t.length)) + n) % n;
            O(t[r]) && (0, x.po)(t[r].url), O(t[a]) && (0, x.po)(t[a].url);
          }, [E, t]);
        let T = a.useCallback(
          (e) => {
            var n;
            let r = e - R.current;
            M((e = ((e % (n = t.length)) + n) % n)),
              (R.current = e),
              N((e) => [...e, r]),
              null == i || i(e),
              y(!1);
          },
          [i, t, y],
        );
        a.useEffect(() => {
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
        }, [T, y]);
        let D = t[E],
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
                            isObscured: !j && k,
                            src: n.url,
                            children: (e) =>
                              (0, r.jsx)(g.Z, {
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
              (0, r.jsx)(A.Z, {
                items: t,
                currentIndex: E,
                onGalleryItemClick: T,
              }),
          ],
        });
      }
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        l = t.n(i),
        o = t(481060),
        s = t(124347),
        u = t(52824),
        c = t(549635),
        d = t(689938),
        m = t(244190);
      let _ = a.memo(function (e) {
        var n;
        let { item: t } = e;
        let a =
          "IMAGE" === (n = t).type
            ? (0, u.q)({ proxyURL: n.proxyUrl, url: n.url })
            : "VIDEO" === n.type && null != n.proxyUrl
              ? (0, c.D)(n.proxyUrl)
              : null;
        return null == a
          ? null
          : (0, r.jsx)(s.ZP, {
              width: 48,
              height: 48,
              src: a,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
            });
      });
      function f(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: a } = e;
        return (0, r.jsx)("div", {
          className: m.galleryContainer,
          children: (0, r.jsx)("div", {
            className: m.gallery,
            children: n.map((e, i) => {
              let s = i === t,
                u = s
                  ? d.Z.Messages.PAGINATION_CURRENT_ITEM_LABEL
                  : d.Z.Messages.PAGINATION_ITEM_LABEL;
              return (0, r.jsx)(
                o.Clickable,
                {
                  className: l()(m.galleryItem, { [m.selected]: s }),
                  "aria-label": u.format({
                    pageNumber: i + 1,
                    totalPages: n.length,
                  }),
                  onClick: () => a(i),
                  children: (0, r.jsx)(_, { item: e }),
                },
                i,
              );
            }),
          }),
        });
      }
    },
    549635: function (e, n, t) {
      t.d(n, {
        D: function () {
          return _;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(124347),
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
      n.Z = a.memo(function (e) {
        let { media: n, obscured: t = !1, onContextMenu: a } = e,
          {
            width: d,
            height: f,
            url: h,
            proxyUrl: x,
            alt: E,
            type: p,
            maxWidth: C,
            maxHeight: A,
            ...g
          } = n,
          { width: I, height: L } = (0, u.zp)(
            null != d ? d : 0,
            null != f ? f : 0,
          ),
          S = (0, s.q)({ proxyURL: x, url: h }),
          M = !(null == d || 0 === d || null == f || 0 === f);
        if ("VIDEO" === p && M && null != x) {
          var O;
          let e = _(x);
          if (null == e) return null;
          let i =
            null !== (O = n.renderLinkComponent) && void 0 !== O ? O : o.iT;
          return (0, r.jsx)(l.Z, {
            ...g,
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
            renderLinkComponent: i,
            autoPlay: !t,
            alt: E,
            onContextMenu: a,
          });
        }
        if ("IMAGE" === p)
          return M
            ? (0, r.jsx)(i.ZP, {
                ...g,
                src: S,
                width: d,
                height: f,
                shouldLink: !1,
                maxWidth: I,
                maxHeight: L,
                animated: !t && n.animated,
                autoPlay: !t,
                alt: E,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: a,
                responsive: !0,
              })
            : (0, r.jsx)("img", {
                src: S,
                alt: E,
                onContextMenu: a,
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
        a = t(192379),
        i = t(481060),
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
            shouldRedactExplicitContent: x,
            shouldHideMediaOptions: E = !1,
            className: p,
            ...C
          } = e,
          [A, g] = a.useState(null != f ? f : 0),
          [I, L] = a.useState(!1);
        a.useEffect(() => {
          if (null != n)
            return (
              l.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                l.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]);
        let S = a.useCallback(
            (e) => {
              g(e), null == h || h(e);
            },
            [h],
          ),
          M = a.useMemo(() => ({ zoomed: I, setZoomed: L }), [I]),
          O = t[A];
        return (0, r.jsx)(i.ModalRoot, {
          hideShadow: !0,
          className: _.carouselModal,
          ...C,
          size: i.ModalSize.DYNAMIC,
          fullscreenOnMobile: !1,
          "aria-label": m.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
          children: (0, r.jsxs)(o.z.Provider, {
            value: M,
            children: [
              (0, r.jsx)(c.Z, { item: O, onClose: n }),
              (0, r.jsx)(u.Z, {
                items: t,
                startIndex: A,
                onIndexChange: S,
                shouldRedactExplicitContent: x,
                shouldHideMediaOptions: E,
              }),
              (0, r.jsx)("div", {
                className: _.actionButtonContainer,
                children: (0, r.jsx)(s.Z, {
                  item: O,
                  hideMediaOptions:
                    ("IMAGE" === O.type && null == O.original) || E,
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
          return E;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        l = t.n(i),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        m = t(123145),
        _ = t(592125),
        f = t(231338),
        h = t(182763);
      let x = a.memo(function (e) {
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
      function E(e) {
        var n;
        let { item: t, onClose: a } = e,
          i =
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
                  onClick: a,
                  children: (0, r.jsx)(s.XLargeIcon, {}),
                }),
                null != i && (0, r.jsx)(x, { message: i }),
              ],
            }),
        });
      }
    },
    212459: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return i;
        },
        z: function () {
          return a;
        },
      });
      var r = t(192379);
      let a = (0, r.createContext)({ zoomed: !1, setZoomed: () => {} });
      function i() {
        return (0, r.useContext)(a);
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
//# sourceMappingURL=83fc1773e65c8358cfad.js.map
