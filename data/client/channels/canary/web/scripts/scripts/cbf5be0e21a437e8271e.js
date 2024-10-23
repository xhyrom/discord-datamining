"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var r = t(147018),
        a = t(863664),
        i = t(299623),
        o = t(345374),
        l = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return a(i(this), l);
          },
        },
      ),
        o("toReversed");
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
          return _;
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
        o = t(981631);
      let l = () => a.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!l()) return i.S.dispatch(o.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!l()) return i.S.dispatch(o.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (i.S.dispatch(o.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (i.S.dispatch(o.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        _ = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (i.S.hasSubscribers(o.CkL.MODAL_CLOSE))
              return i.S.dispatch(o.CkL.MODAL_CLOSE), !1;
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
          return m;
        },
        Lb: function () {
          return l;
        },
        ZF: function () {
          return d;
        },
        gP: function () {
          return u;
        },
        mh: function () {
          return _;
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
        o = t(981631);
      function l(e, n, t) {
        i.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
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
        i.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
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
          numDestinations: l,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        i.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: r,
          has_context_message: a,
          num_destinations: l,
          num_destination_changes: s,
          num_query_changes: u,
          any_destination_has_slowmode: c,
        });
      }
      function c(e, n) {
        i.default.track(o.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, a.once)((e, n, t) => {
              i.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function _() {
        return r.useMemo(
          () =>
            (0, a.once)((e, n) => {
              i.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function m() {
        return r.useMemo(
          () =>
            (0, a.once)((e, n) => {
              i.default.track(o.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
          return m;
        },
        h: function () {
          return _;
        },
      }),
        t(789020);
      var r = t(192379),
        a = t(442837),
        i = t(430198),
        o = t(592125),
        l = t(430824),
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
      function _(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = o.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && i.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function m(e) {
        let n = (0, a.e7)([l.Z, i.Z, o.Z], () => {
          var n, t;
          if (null == e) return !0;
          let r =
            null === (n = o.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != r &&
              (null === (t = l.Z.getGuild(r)) || void 0 === t
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
          return l;
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
      var a = t(481060),
        i = t(822869);
      let o = "forward-modal";
      function l(e) {
        let {
          messageId: n,
          channelId: l,
          message: s,
          source: u,
          initialSelectedDestinations: c = [],
          forwardOptions: d,
          onRequestSent: _,
        } = e;
        (0, i.Lb)(l, n, u),
          (0, a.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("16918"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, r.jsx)(e, {
                  ...t,
                  channelId: l,
                  messageId: n,
                  message: s,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: _,
                });
            },
            { modalKey: o },
          );
      }
      function s() {
        (0, a.closeModal)(o);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: i,
          message: o,
          failedDestinations: l,
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
              message: o,
              failedDestinations: l,
              forwardOptions: s,
            });
        });
      }
    },
    73249: function (e, n, t) {
      var r = t(200651),
        a = t(192379),
        i = t(481060),
        o = t(346610),
        l = t(868643),
        s = t(912332),
        u = t(49012),
        c = t(358085),
        d = t(212459),
        _ = t(701865),
        m = t(689938),
        h = t(92718);
      function f() {
        (0, i.closeModal)(_.U);
      }
      function E(e) {
        let { onClick: n, tooltipText: t, children: a, ...o } = e;
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
              className: h.actionButton,
              ...o,
              children: a,
            });
          },
        });
      }
      function x() {
        let { zoomed: e, setZoomed: n } = (0, d.Y)();
        return (0, r.jsx)(E, {
          onClick: () => n(!e),
          tooltipText: e
            ? m.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_OUT
            : m.Z.Messages.MEDIA_VIEWER_CTA_ZOOM_IN,
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
          _ = a.useCallback(() => {
            if (null != c && null != d) {
              if ("embed" === d.type) {
                (0, s.l8)({
                  messageId: c.id,
                  channelId: c.channel_id,
                  message: c,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                  onRequestSent: f,
                });
                return;
              }
              (0, s.l8)({
                messageId: c.id,
                channelId: c.channel_id,
                message: c,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: f,
              });
            }
          }, [c, d]),
          { canForwardMessages: h } = (0, o.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != c && h && (0, l.h)(c)
          ? (0, r.jsx)(E, {
              onClick: _,
              tooltipText: m.Z.Messages.MESSAGE_ACTION_FORWARD,
              children: (0, r.jsx)(i.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function C(e) {
        let {} = e;
        return c.isPlatformEmbedded
          ? (0, r.jsx)(E, {
              tooltipText: m.Z.Messages.DOWNLOAD,
              children: (0, r.jsx)(i.DownloadIcon, {}),
            })
          : null;
      }
      function S(e) {
        var n;
        let { item: t } = e,
          a = null !== (n = t.original) && void 0 !== n ? n : t.url;
        return (0, r.jsx)(E, {
          onClick: () => (0, u.q)({ href: a }),
          tooltipText: m.Z.Messages.OPEN_LINK,
          children: (0, r.jsx)(i.WindowLaunchIcon, {}),
        });
      }
      function g(e) {
        let {} = e;
        return (0, r.jsx)(E, {
          tooltipText: m.Z.Messages.MORE,
          children: (0, r.jsx)(i.MoreHorizontalIcon, {}),
        });
      }
      n.Z = a.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (0, r.jsxs)("div", {
          className: h.actionButtons,
          children: [
            (0, r.jsx)(x, {}),
            !t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(p, { item: n }),
                  (0, r.jsx)(C, { item: n }),
                  (0, r.jsx)(S, { item: n }),
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
          return I;
        },
      }),
        t(477488),
        t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(299608),
        s = t.n(l),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        _ = t(376641),
        m = t(714338),
        h = t(95398),
        f = t(163268),
        E = t(134432),
        x = t(169525),
        p = t(585483),
        C = t(212459),
        S = t(549635),
        g = t(981631),
        A = t(689938),
        L = t(193889);
      function O(e, n) {
        return ((e % n) + n) % n;
      }
      function M(e) {
        let { children: n, isObscured: t, src: i } = e,
          [l, s] = a.useState(!1),
          u = a.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, r.jsx)(h.a.Provider, {
              value: l,
              children: (0, r.jsx)(
                h.Z,
                {
                  type: h.Z.Types.ATTACHMENT,
                  reason: x.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("div", {
                        className: o()(L.obscureWrapper, { [L.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                i,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: n(!1) });
      }
      function I(e) {
        var n;
        let {
            items: t,
            onIndexChange: i,
            startIndex: o = 0,
            shouldRedactExplicitContent: l = !1,
            shouldHideMediaOptions: h = !1,
          } = e,
          [x, O] = a.useState(o),
          I = a.useRef(o),
          [v, R] = a.useState([]),
          { zoomed: j, setZoomed: b } = (0, C.Y)();
        a.useEffect(
          () => (
            m.Z.disable(),
            m.Z.enableTemp(_.P),
            () => {
              m.Z.disableTemp();
            }
          ),
          [],
        ),
          a.useEffect(() => {
            var e, n;
            let r = (((x + 1) % (e = t.length)) + e) % e;
            let a = (((x - 1) % (n = t.length)) + n) % n;
            (0, E.po)(t[r].url), (0, E.po)(t[a].url);
          }, [x, t]);
        let N = a.useCallback(
          (e) => {
            var n;
            let r = e - I.current;
            O((e = ((e % (n = t.length)) + n) % n)),
              (I.current = e),
              R((e) => [...e, r]),
              null == i || i(e),
              b(!1);
          },
          [i, t, b],
        );
        a.useEffect(() => {
          let e = s()(() => {
              N(I.current + 1);
            }, 300),
            n = s()(() => {
              N(I.current - 1);
            }, 300);
          return (
            p.S.subscribe(g.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(g.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              p.S.unsubscribe(g.CkL.MODAL_CAROUSEL_NEXT, e),
                p.S.unsubscribe(g.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [N, b]);
        let D = t[x],
          T = (0, f.KP)({ type: f.lJ.GenericMedia, media: D }, l),
          y = h
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          k = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(null !== (n = v[v.length - 1]) && void 0 !== n ? n : 0),
          P = (0, d.useTransition)(D, {
            key: D.url,
            from: { opacity: 0, transform: k[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: k[k.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          Z = t.length > 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: L.wrapper,
              children: [
                Z
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: L.navPrev,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => p.S.dispatch(g.CkL.MODAL_CAROUSEL_PREV),
                      icon: (0, r.jsx)(c.j, {}),
                      tooltip: A.Z.Messages.PAGINATION_PREVIOUS,
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: L.mediaContainer,
                  children: P((e, n) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        u.animated.div,
                        {
                          style: e,
                          className: L.mediaWrapper,
                          children: (0, r.jsx)(M, {
                            isObscured: !j && T,
                            src: n.url,
                            children: (e) =>
                              (0, r.jsx)(S.Z, {
                                media: n,
                                obscured: e,
                                onContextMenu: y,
                              }),
                          }),
                        },
                        n.url,
                      ),
                    }),
                  ),
                }),
                Z
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: L.navNext,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => p.S.dispatch(g.CkL.MODAL_CAROUSEL_NEXT),
                      icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: A.Z.Messages.PAGINATION_NEXT,
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            Z &&
              (0, r.jsx)("div", {
                className: L.galleryPlaceholder,
                children: t.map((e, n) =>
                  (0, r.jsx)(
                    "div",
                    { className: L.galleryItemPlaceholder, children: n },
                    n,
                  ),
                ),
              }),
          ],
        });
      }
    },
    549635: function (e, n, t) {
      var r = t(200651),
        a = t(192379),
        i = t(124347),
        o = t(80966),
        l = t(524444),
        s = t(52824),
        u = t(956664),
        c = t(589530),
        d = t(591759),
        _ = t(718263);
      n.Z = a.memo(function (e) {
        let { media: n, obscured: t = !1, onContextMenu: a } = e,
          {
            width: m,
            height: h,
            url: f,
            proxyUrl: E,
            alt: x,
            type: p,
            maxWidth: C,
            maxHeight: S,
            ...g
          } = n,
          { width: A, height: L } = (0, u.zp)(
            null != m ? m : 0,
            null != h ? h : 0,
          ),
          O = (0, s.q)({ proxyURL: E, url: f }),
          M = !(null == m || 0 === m || null == h || 0 === h);
        if ("VIDEO" === p && M && null != E) {
          var I;
          let e = (function (e) {
            let n = d.Z.toURLSafe(e);
            return null == n
              ? null
              : (n.searchParams.append("format", "webp"), n.toString());
          })(E);
          if (null == e) return null;
          let i =
            null !== (I = n.renderLinkComponent) && void 0 !== I ? I : l.iT;
          return (0, r.jsx)(o.Z, {
            ...g,
            src: O,
            width: m,
            height: h,
            maxWidth: A,
            maxHeight: L,
            responsive: !0,
            poster: e,
            naturalWidth: m,
            naturalHeight: h,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: i,
            autoPlay: !t,
            alt: x,
            onContextMenu: a,
          });
        }
        if ("IMAGE" === p)
          return M
            ? (0, r.jsx)(i.ZP, {
                ...g,
                src: O,
                width: m,
                height: h,
                shouldLink: !1,
                maxWidth: A,
                maxHeight: L,
                animated: !t && n.animated,
                autoPlay: !t,
                alt: x,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: a,
                responsive: !0,
              })
            : (0, r.jsx)("img", {
                src: O,
                alt: x,
                onContextMenu: a,
                className: _.dimensionlessImage,
              });
        return null;
      });
    },
    97594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        }),
        t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(481060),
        o = t(585483),
        l = t(212459),
        s = t(73249),
        u = t(730606),
        c = t(860153),
        d = t(981631),
        _ = t(689938),
        m = t(619377);
      function h(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: h,
            onIndexChange: f,
            shouldRedactExplicitContent: E,
            shouldHideMediaOptions: x = !1,
            className: p,
            ...C
          } = e,
          [S, g] = a.useState(null != h ? h : 0),
          [A, L] = a.useState(!1);
        a.useEffect(() => {
          if (null != n)
            return (
              o.S.subscribe(d.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                o.S.unsubscribe(d.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]);
        let O = a.useCallback(
            (e) => {
              g(e), null == f || f(e);
            },
            [f],
          ),
          M = a.useMemo(() => ({ zoomed: A, setZoomed: L }), [A]),
          I = t[S];
        return (0, r.jsx)(i.ModalRoot, {
          hideShadow: !0,
          className: m.carouselModal,
          ...C,
          size: i.ModalSize.DYNAMIC,
          fullscreenOnMobile: !1,
          "aria-label": _.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
          children: (0, r.jsxs)(l.z.Provider, {
            value: M,
            children: [
              (0, r.jsx)(c.Z, { item: I, onClose: n }),
              (0, r.jsx)(u.Z, {
                items: t,
                startIndex: S,
                onIndexChange: O,
                shouldRedactExplicitContent: E,
                shouldHideMediaOptions: x,
              }),
              (0, r.jsx)("div", {
                className: m.actionButtonContainer,
                children: (0, r.jsx)(s.Z, {
                  item: I,
                  hideMediaOptions:
                    ("IMAGE" === I.type && null == I.original) || x,
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
        a = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        _ = t(123145),
        m = t(592125),
        h = t(231338),
        f = t(182763);
      let E = a.memo(function (e) {
        let { message: n } = e,
          t = (0, l.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, r.jsx)("div", {
              className: f.messageContents,
              children: (0, r.jsxs)(c.Z.Provider, {
                value: t.guild_id,
                children: [
                  (0, r.jsx)(u.Z, { user: n.author }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(_.Z, { message: n, channel: t }),
                  }),
                  (0, r.jsx)(d.Z, {
                    timestamp: n.timestamp,
                    className: f.timestamp,
                  }),
                ],
              }),
            });
      });
      function x(e) {
        var n;
        let { item: t, onClose: a } = e,
          i =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, r.jsx)(s.ThemeProvider, {
          theme: h.BR.DARK,
          children: (e) =>
            (0, r.jsxs)("div", {
              className: o()(f.topBar, e),
              children: [
                (0, r.jsx)(s.Button, {
                  look: s.ButtonLooks.BLANK,
                  color: s.ButtonColors.CUSTOM,
                  size: s.ButtonSizes.ICON,
                  className: f.closeButton,
                  onClick: a,
                  children: (0, r.jsx)(s.XLargeIcon, {}),
                }),
                null != i && (0, r.jsx)(E, { message: i }),
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
        galleryPlaceholder: "galleryPlaceholder_a24281",
        galleryItemPlaceholder: "galleryItemPlaceholder_a24281",
        mediaContainer: "mediaContainer_a24281",
        mediaWrapper: "mediaWrapper_a24281",
        navPrev: "navPrev_a24281 nav_a24281",
        navNext: "navNext_a24281 nav_a24281",
        obscureWrapper: "obscureWrapper_a24281",
        obscure: "obscure_a24281",
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
//# sourceMappingURL=cbf5be0e21a437e8271e.js.map
