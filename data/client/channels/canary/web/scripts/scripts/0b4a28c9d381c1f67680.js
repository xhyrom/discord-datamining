"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87267"],
  {
    477488: function (e, n, t) {
      var a = t(147018),
        r = t(863664),
        i = t(299623),
        o = t(345374),
        l = Array;
      a(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return r(i(this), l);
          },
        },
      ),
        o("toReversed");
    },
    817718: function (e, n, t) {
      t.d(n, {
        U3: function () {
          return f;
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
      var a = t(481060),
        r = t(819640),
        i = t(585483),
        o = t(981631);
      let l = () => r.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
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
        f = {
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
        v: function () {
          return o;
        },
      });
      var a = t(817718),
        r = t(981631);
      let i = {
          [r.EkH.MODAL_CAROUSEL_NEXT]: a.XM,
          [r.EkH.MODAL_CAROUSEL_PREV]: a.py,
          [r.EkH.CLOSE_MODAL]: a.U3,
        },
        o = { [r.EkH.CLOSE_MODAL]: a.U3 };
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return h;
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
          return f;
        },
        sF: function () {
          return s;
        },
        xp: function () {
          return c;
        },
      });
      var a = t(192379),
        r = t(392711),
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
          numDestinationChanges: a,
          numQueryChanges: r,
        } = e;
        i.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: a,
          num_query_changes: r,
        });
      }
      function u(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: a,
          hasContextMessage: r,
          numDestinations: l,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        i.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: a,
          has_context_message: r,
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
        return a.useMemo(
          () =>
            (0, r.once)((e, n, t) => {
              i.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function f() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
              i.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function h() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
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
          return h;
        },
        h: function () {
          return f;
        },
      }),
        t(789020);
      var a = t(192379),
        r = t(442837),
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
      function f(e) {
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
      function h(e) {
        let n = (0, r.e7)([l.Z, i.Z, o.Z], () => {
          var n, t;
          if (null == e) return !0;
          let a =
            null === (n = o.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != a &&
              (null === (t = l.Z.getGuild(a)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != a && i.Z.isChannelOrThreadParentGated(a, e.channel_id))
          );
        });
        return a.useMemo(() => !n && null != e && d(e), [n, e]);
      }
    },
    394779: function (e, n, t) {
      t.d(n, {
        s: function () {
          return m;
        },
      });
      var a = t(200651),
        r = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(701865),
        f = t(388032),
        h = t(756392);
      function _() {
        (0, l.closeModal)(d.U);
      }
      function p(e) {
        let { className: n, message: t, target: i } = e,
          s = r.useCallback(() => {
            if ("embed" === i.type) {
              (0, c.l8)({
                messageId: t.id,
                channelId: t.channel_id,
                message: t,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                onRequestSent: _,
              });
              return;
            }
            (0, c.l8)({
              messageId: t.id,
              channelId: t.channel_id,
              message: t,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
              onRequestSent: _,
            });
          }, [t, i]);
        return (0, a.jsx)(l.Clickable, {
          className: o()(h.container, n),
          onClick: s,
          children: (0, a.jsx)(l.Text, {
            className: h.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: f.intl.string(f.t.I3ltXF),
          }),
        });
      }
      function m(e, n) {
        let { canForwardMessages: t } = (0, s.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return t && (0, u.h)(e)
          ? (t) => {
              let { className: r } = t;
              return (0, a.jsx)(p, { className: r, message: e, target: n });
            }
          : () => null;
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
      var a = t(200651);
      t(192379);
      var r = t(481060),
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
          onRequestSent: f,
        } = e;
        (0, i.Lb)(l, n, u),
          (0, r.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("91834"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, a.jsx)(e, {
                  ...t,
                  channelId: l,
                  messageId: n,
                  message: s,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: f,
                });
            },
            { modalKey: o },
          );
      }
      function s() {
        (0, r.closeModal)(o);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: i,
          message: o,
          failedDestinations: l,
          forwardOptions: s,
        } = e;
        (0, r.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, a.jsx)(e, {
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
    44488: function (e, n, t) {
      t.d(n, {
        Pz: function () {
          return p;
        },
        am: function () {
          return _;
        },
      }),
        t(47120);
      var a,
        r = t(200651),
        i = t(192379),
        o = t(120356),
        l = t.n(o),
        s = t(481060),
        u = t(768762),
        c = t(943142);
      function d(e, n, t) {
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
      let f = { CENTER: c.alignCenter, LEFT: c.alignLeft };
      class h extends (a = i.PureComponent) {
        componentDidUpdate(e) {
          let { selectedIndex: n } = this.props;
          e.selectedIndex !== n && this.handleSelectedIndexChange(n);
        }
        render() {
          let {
              renderItem: e,
              items: n,
              vertical: t,
              paginationContainerClass: a,
              align: o,
            } = this.props,
            u = t
              ? c.verticalPaginationItemContainer
              : c.horizontalPaginationItemContainer;
          return (0, r.jsx)(s.AdvancedScrollerAuto, {
            orientation: t ? "vertical" : "horizontal",
            className: l()(u, a, o),
            ref: this.handleSetScrollerRef,
            children: n.map((n, t) =>
              i.cloneElement(e(n, t), {
                onClick: () => this.handlePageClick(t),
                key: t,
                ref: (e) => {
                  this._paginationItemRefs[t] = e;
                },
              }),
            ),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "_scrollerRef", null),
            d(this, "_paginationItemRefs", []),
            d(this, "handleSetScrollerRef", (e) => {
              this._scrollerRef = e;
            }),
            d(this, "handleSelectedIndexChange", (e) => {
              let n = this._scrollerRef;
              if (null == n) return;
              let t = this._paginationItemRefs[e];
              if (null != t)
                n.scrollIntoViewNode({
                  node: t,
                  animate: !0,
                  padding: this.props.scrollToPadding,
                });
            }),
            d(this, "handlePageClick", (e) => {
              let { onSetItem: n } = this.props;
              n(e);
            });
        }
      }
      d(h, "Align", f),
        d(h, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: f.CENTER,
        });
      class _ extends i.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: l()(c.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, r.jsx)(u.Z, {
              className: c.arrow,
              direction: u.Z.Directions.LEFT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "handlePrevClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: n } = this.props;
              null == n || n(e);
            });
        }
      }
      class p extends i.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: l()(c.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, r.jsx)(u.Z, {
              className: c.arrow,
              direction: u.Z.Directions.RIGHT,
            }),
          });
        }
        constructor(...e) {
          super(...e),
            d(this, "handleNextClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: n } = this.props;
              null == n || n(e);
            });
        }
      }
      n.ZP = 12633 == t.j ? h : null;
    },
    341176: function (e, n, t) {
      t.d(n, {
        D: function () {
          return _;
        },
        Z: function () {
          return p;
        },
      });
      var a = t(200651),
        r = t(120356),
        i = t.n(r),
        o = t(524444),
        l = t(52824),
        s = t(956664),
        u = t(589530),
        c = t(591759),
        d = t(124347),
        f = t(80966),
        h = t(151236);
      let _ = { DEFAULT: null, CONTAIN: h.contain, SCALE_DOWN: h.scaleDown };
      function p(e) {
        let {
            media: n,
            fit: t = _.DEFAULT,
            obscured: r = !1,
            onContextMenu: p,
          } = e,
          {
            width: m,
            height: C,
            url: E,
            proxyUrl: g,
            alt: S,
            type: L,
            maxWidth: x,
            maxHeight: v,
            ...A
          } = n,
          { width: O, height: b } = (0, s.zp)(
            null != m ? m : 0,
            null != C ? C : 0,
          ),
          N = (0, l.q)({ proxyURL: g, url: E }),
          R = !(null == m || 0 === m || null == C || 0 === C);
        if ("VIDEO" === L && R && null != g) {
          var D;
          let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n
              ? null
              : (n.searchParams.append("format", "webp"), n.toString());
          })(g);
          if (null == e) return null;
          let t =
            null !== (D = n.renderLinkComponent) && void 0 !== D ? D : o.iT;
          return (0, a.jsx)(f.Z, {
            ...A,
            src: N,
            width: m,
            height: C,
            maxWidth: O,
            maxHeight: b,
            poster: e,
            naturalWidth: m,
            naturalHeight: C,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: S,
            onContextMenu: p,
          });
        }
        if ("IMAGE" === L)
          return R
            ? (0, a.jsx)(d.ZP, {
                ...A,
                imageClassName: i()(h.slide, t),
                src: N,
                width: m,
                height: C,
                shouldLink: !1,
                maxWidth: O,
                maxHeight: b,
                animated: !r && n.animated,
                autoPlay: !r,
                alt: S,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: p,
              })
            : (0, a.jsx)("img", {
                src: N,
                alt: S,
                className: i()(h.slide, t),
                onContextMenu: p,
              });
        return null;
      }
    },
    288229: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(477488),
        t(47120);
      var a = t(200651),
        r = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(299608),
        s = t.n(l),
        u = t(100621),
        c = t(442837),
        d = t(481060),
        f = t(794295),
        h = t(95398),
        _ = t(247206),
        p = t(394779),
        m = t(134432),
        C = t(169525),
        E = t(375954),
        g = t(585483),
        S = t(44488),
        L = t(341176),
        x = t(981631),
        v = t(388032),
        A = t(785590);
      function O(e, n) {
        return ((e % n) + n) % n;
      }
      function b(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function N(e) {
        let { children: n, hasMediaControls: t, isObscured: i, src: l } = e,
          [s, u] = (0, r.useState)(!1);
        return i
          ? (0, a.jsx)(h.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                h.Z,
                {
                  type: h.Z.Types.ATTACHMENT,
                  reason: C.wk.EXPLICIT_CONTENT,
                  className: A.obscureContainer,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  obscurityControlClassName: o()({
                    [A.controlsOffset]: t && s,
                  }),
                  onToggleObscurity: (e) => {
                    e.stopPropagation(),
                      e.nativeEvent.stopPropagation(),
                      u((e) => !e);
                  },
                  children: (e) =>
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("div", {
                        className: o()(A.obscureWrapper, { [A.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                l,
              ),
            })
          : (0, a.jsx)(a.Fragment, { children: n(!1) });
      }
      function R(e) {
        var n, t, i;
        let {
            items: o,
            onIndexChange: l,
            fit: h,
            startIndex: C = 0,
            shouldRedactExplicitContent: O = !1,
            shouldHideMediaOptions: R = !1,
            shouldAnimateCarousel: D = !1,
          } = e,
          [M, I] = (0, r.useState)(C),
          k = (0, r.useRef)(C),
          [T, y] = (0, r.useState)([]);
        (0, r.useEffect)(() => {
          var e, n;
          let t = (((M + 1) % (e = o.length)) + e) % e;
          let a = (((M - 1) % (n = o.length)) + n) % n;
          b(o[t]) && (0, m.po)(o[t].url), b(o[a]) && (0, m.po)(o[a].url);
        }, [M, o]);
        let P = (0, r.useCallback)(
          (e) => {
            var n;
            let t = e - k.current;
            I((e = ((e % (n = o.length)) + n) % n)),
              (k.current = e),
              y((e) => [...e, t]),
              null == l || l(e);
          },
          [l, o],
        );
        (0, r.useEffect)(() => {
          let e = s()(() => {
              P(k.current + 1);
            }, 300),
            n = s()(() => {
              P(k.current - 1);
            }, 300);
          return (
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
                g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [P]);
        let j = o[M],
          w = null !== (i = j.sourceMetadata) && void 0 !== i ? i : {},
          Z =
            null == w
              ? void 0
              : null === (n = w.message) || void 0 === n
                ? void 0
                : n.id,
          F =
            null == w
              ? void 0
              : null === (t = w.message) || void 0 === t
                ? void 0
                : t.channel_id,
          W = (0, c.e7)(
            [E.Z],
            () => (null != F && null != Z ? E.Z.getMessage(F, Z) : null),
            [F, Z],
          ),
          U = null != W ? W : null == w ? void 0 : w.message,
          B =
            null != U && null != w.identifier
              ? (0, p.s)(U, w.identifier)
              : null,
          G = (0, _.KP)({ type: _.lJ.GenericMedia, media: j }, O),
          H = R
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          z = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(T[T.length - 1]),
          X = (0, d.useTransition)(
            j,
            {
              key: j.url,
              from: { opacity: 0, transform: z[0] },
              enter: { opacity: 1, transform: "translateX(0)" },
              leave: { opacity: 0, transform: z[z.length - 1] },
              config: { friction: 20, tension: 250 },
            },
            D ? "respect-motion-settings" : "animate-never",
          );
        return (0, a.jsxs)("div", {
          className: A.wrapper,
          children: [
            o.length > 1
              ? (0, a.jsx)(S.am, {
                  className: A.navPrev,
                  onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_PREV),
                })
              : null,
            X((e, n) => {
              var t;
              return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(
                  u.animated.div,
                  {
                    style: e,
                    className: A.zoomedMediaFitWrapper,
                    children: (0, a.jsxs)("div", {
                      onClick: (e) =>
                        null != h && [L.D.CONTAIN, L.D.SCALE_DOWN].includes(h)
                          ? null
                          : e.stopPropagation(),
                      children: [
                        (0, a.jsx)(N, {
                          isObscured: G,
                          src: n.url,
                          children: (e) =>
                            (0, a.jsx)(L.Z, {
                              media: n,
                              fit: h,
                              obscured: e,
                              onContextMenu: H,
                            }),
                        }),
                        ("IMAGE" !== n.type || null != n.original) &&
                          !R &&
                          (0, a.jsxs)("div", {
                            className: A.optionsContainer,
                            children: [
                              (0, a.jsx)(f.Z, {
                                href:
                                  null !== (t = n.original) && void 0 !== t
                                    ? t
                                    : n.url,
                                className: A.downloadLink,
                                children: v.intl.string(v.t.q5jLJC),
                              }),
                              null != B &&
                                (0, a.jsx)(B, { className: A.forward }),
                            ],
                          }),
                      ],
                    }),
                  },
                  n.url,
                ),
              });
            }),
            o.length > 1
              ? (0, a.jsx)(S.Pz, {
                  className: A.navNext,
                  onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_NEXT),
                })
              : null,
          ],
        });
      }
    },
    950120: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        });
      var a = t(200651),
        r = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(873546),
        s = t(481060),
        u = t(425493),
        c = t(376641),
        d = t(714338),
        f = t(585483),
        h = t(288229),
        _ = t(981631),
        p = t(388032),
        m = t(431548);
      function C(e) {
        let { onClose: n } = e,
          t = r.useRef(null);
        return (0, a.jsx)("div", {
          className: m.mobileCloseWrapper,
          ref: t,
          children: (0, a.jsx)(s.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)("div", {
              children: (0, a.jsx)(u.Z, { closeAction: n, keybind: "ESC" }),
            }),
          }),
        });
      }
      function E(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: i,
            onIndexChange: u,
            fit: E,
            shouldRedactExplicitContent: g,
            shouldHideMediaOptions: S,
            shouldAnimateCarousel: L,
            className: x,
            transitionState: v,
            ...A
          } = e,
          O = l.tq && null != n;
        return (
          r.useEffect(() => {
            if (null != n)
              return (
                f.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                  f.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, n);
                }
              );
          }, [n]),
          r.useEffect(
            () => (
              v === s.ModalTransitionState.ENTERED &&
                (d.Z.disable(), d.Z.enableTemp(c.P)),
              v === s.ModalTransitionState.HIDDEN &&
                (d.Z.disable(), d.Z.enableTemp(c.v)),
              () => {
                d.Z.disableTemp();
              }
            ),
            [v],
          ),
          (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: o()(m.carouselModal, x),
            transitionState: v,
            ...A,
            size: s.ModalSize.DYNAMIC,
            "aria-label": p.intl.string(p.t.AMTX3t),
            onClick: n,
            children: [
              O ? (0, a.jsx)(C, { onClose: n }) : null,
              (0, a.jsx)(h.Z, {
                items: t,
                startIndex: i,
                onIndexChange: u,
                fit: E,
                shouldRedactExplicitContent: g,
                shouldHideMediaOptions: S,
                shouldAnimateCarousel: L,
              }),
            ],
          })
        );
      }
    },
    52824: function (e, n, t) {
      t.d(n, {
        q: function () {
          return a;
        },
      });
      function a(e) {
        let { proxyURL: n, url: t } = e;
        return null != n && "" !== n ? n : t;
      }
    },
    756392: function (e, n, t) {
      e.exports = { container: "container_e31053", text: "text_e31053" };
    },
    943142: function (e, n, t) {
      e.exports = {
        alignCenter: "alignCenter_ad2a08",
        alignLeft: "alignLeft_ad2a08",
        horizontalPaginationItemContainer:
          "horizontalPaginationItemContainer_ad2a08",
        verticalPaginationItemContainer:
          "verticalPaginationItemContainer_ad2a08 alignLeft_ad2a08",
        arrow: "arrow_ad2a08",
        prevButtonContainer: "prevButtonContainer_ad2a08 arrowContainer_ad2a08",
        nextButtonContainer: "nextButtonContainer_ad2a08 arrowContainer_ad2a08",
      };
    },
    151236: function (e, n, t) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    785590: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a15d41",
        zoomedMediaFitWrapper: "zoomedMediaFitWrapper_a15d41",
        optionsContainer: "optionsContainer_a15d41",
        navPrev: "navPrev_a15d41 nav_a15d41",
        navNext: "navNext_a15d41 nav_a15d41",
        downloadLink: "downloadLink_a15d41",
        forward: "forward_a15d41",
        obscureContainer: "obscureContainer_a15d41",
        obscureWrapper: "obscureWrapper_a15d41",
        obscure: "obscure_a15d41",
        controlsOffset: "controlsOffset_a15d41",
      };
    },
    431548: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
  },
]);
//# sourceMappingURL=0b4a28c9d381c1f67680.js.map
