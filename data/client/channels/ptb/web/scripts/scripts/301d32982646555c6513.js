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
      });
      var a = t(817718),
        r = t(981631);
      let i = {
        [r.EkH.MODAL_CAROUSEL_NEXT]: a.XM,
        [r.EkH.MODAL_CAROUSEL_PREV]: a.py,
        [r.EkH.CLOSE_MODAL]: a.U3,
      };
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
        f = t(689938),
        h = t(760997);
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
            children: f.Z.Messages.MESSAGE_ACTION_FORWARD,
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
                t.e("16918"),
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
        c = t(446174);
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
        h = t(519817);
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
            maxHeight: A,
            ...O
          } = n,
          { width: v, height: R } = (0, s.zp)(
            null != m ? m : 0,
            null != C ? C : 0,
          ),
          N = (0, l.q)({ proxyURL: g, url: E }),
          b = !(null == m || 0 === m || null == C || 0 === C);
        if ("VIDEO" === L && b && null != g) {
          var M;
          let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n
              ? null
              : (n.searchParams.append("format", "webp"), n.toString());
          })(g);
          if (null == e) return null;
          let t =
            null !== (M = n.renderLinkComponent) && void 0 !== M ? M : o.iT;
          return (0, a.jsx)(f.Z, {
            ...O,
            src: N,
            width: m,
            height: C,
            maxWidth: v,
            maxHeight: R,
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
          return b
            ? (0, a.jsx)(d.ZP, {
                ...O,
                imageClassName: i()(h.slide, t),
                src: N,
                width: m,
                height: C,
                shouldLink: !1,
                maxWidth: v,
                maxHeight: R,
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
          return M;
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
        h = t(376641),
        _ = t(714338),
        p = t(95398),
        m = t(163268),
        C = t(394779),
        E = t(134432),
        g = t(169525),
        S = t(375954),
        L = t(585483),
        x = t(44488),
        A = t(341176),
        O = t(981631),
        v = t(689938),
        R = t(723638);
      function N(e, n) {
        return ((e % n) + n) % n;
      }
      function b(e) {
        let { children: n, hasMediaControls: t, isObscured: i, src: l } = e,
          [s, u] = (0, r.useState)(!1);
        return i
          ? (0, a.jsx)(p.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                p.Z,
                {
                  type: p.Z.Types.ATTACHMENT,
                  reason: g.wk.EXPLICIT_CONTENT,
                  className: R.obscureContainer,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  obscurityControlClassName: o()({
                    [R.controlsOffset]: t && s,
                  }),
                  onToggleObscurity: (e) => {
                    e.stopPropagation(),
                      e.nativeEvent.stopPropagation(),
                      u((e) => !e);
                  },
                  children: (e) =>
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("div", {
                        className: o()(R.obscureWrapper, { [R.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                l,
              ),
            })
          : (0, a.jsx)(a.Fragment, { children: n(!1) });
      }
      function M(e) {
        var n, t, i;
        let {
            items: o,
            onIndexChange: l,
            fit: p,
            startIndex: g = 0,
            shouldRedactExplicitContent: N = !1,
            shouldHideMediaOptions: M = !1,
            shouldAnimateCarousel: D = !1,
          } = e,
          [I, k] = (0, r.useState)(g),
          T = (0, r.useRef)(g),
          [P, y] = (0, r.useState)([]);
        (0, r.useEffect)(
          () => (
            _.Z.disable(),
            _.Z.enableTemp(h.P),
            () => {
              _.Z.disableTemp();
            }
          ),
          [],
        ),
          (0, r.useEffect)(() => {
            var e, n;
            let t = (((I + 1) % (e = o.length)) + e) % e;
            let a = (((I - 1) % (n = o.length)) + n) % n;
            (0, E.po)(o[t].url), (0, E.po)(o[a].url);
          }, [I, o]);
        let j = (0, r.useCallback)(
          (e) => {
            var n;
            let t = e - T.current;
            k((e = ((e % (n = o.length)) + n) % n)),
              (T.current = e),
              y((e) => [...e, t]),
              null == l || l(e);
          },
          [l, o],
        );
        (0, r.useEffect)(() => {
          let e = s()(() => {
              j(T.current + 1);
            }, 300),
            n = s()(() => {
              j(T.current - 1);
            }, 300);
          return (
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_NEXT, e),
            L.S.subscribe(O.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_NEXT, e),
                L.S.unsubscribe(O.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [j]);
        let w = o[I],
          Z = null !== (i = w.sourceMetadata) && void 0 !== i ? i : {},
          F =
            null == Z
              ? void 0
              : null === (n = Z.message) || void 0 === n
                ? void 0
                : n.id,
          W =
            null == Z
              ? void 0
              : null === (t = Z.message) || void 0 === t
                ? void 0
                : t.channel_id,
          U = (0, c.e7)(
            [S.Z],
            () => (null != W && null != F ? S.Z.getMessage(W, F) : null),
            [W, F],
          ),
          B = null != U ? U : null == Z ? void 0 : Z.message,
          G =
            null != B && null != Z.identifier
              ? (0, C.s)(B, Z.identifier)
              : null,
          z = (0, m.KP)({ type: m.lJ.GenericMedia, media: w }, N),
          H = M
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          X = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(P[P.length - 1]),
          V = (0, d.useTransition)(
            w,
            {
              key: w.url,
              from: { opacity: 0, transform: X[0] },
              enter: { opacity: 1, transform: "translateX(0)" },
              leave: { opacity: 0, transform: X[X.length - 1] },
              config: { friction: 20, tension: 250 },
            },
            D ? "respect-motion-settings" : "animate-never",
          );
        return (0, a.jsxs)("div", {
          className: R.wrapper,
          children: [
            o.length > 1
              ? (0, a.jsx)(x.am, {
                  className: R.navPrev,
                  onClick: () => L.S.dispatch(O.CkL.MODAL_CAROUSEL_PREV),
                })
              : null,
            V((e, n) => {
              var t;
              return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(
                  u.animated.div,
                  {
                    style: e,
                    className: R.zoomedMediaFitWrapper,
                    children: (0, a.jsxs)("div", {
                      onClick: (e) =>
                        null != p && [A.D.CONTAIN, A.D.SCALE_DOWN].includes(p)
                          ? null
                          : e.stopPropagation(),
                      children: [
                        (0, a.jsx)(b, {
                          isObscured: z,
                          src: n.url,
                          children: (e) =>
                            (0, a.jsx)(A.Z, {
                              media: n,
                              fit: p,
                              obscured: e,
                              onContextMenu: H,
                            }),
                        }),
                        ("IMAGE" !== n.type || null != n.original) &&
                          !M &&
                          (0, a.jsxs)("div", {
                            className: R.optionsContainer,
                            children: [
                              (0, a.jsx)(f.Z, {
                                href:
                                  null !== (t = n.original) && void 0 !== t
                                    ? t
                                    : n.url,
                                className: R.downloadLink,
                                children: v.Z.Messages.OPEN_IN_BROWSER,
                              }),
                              null != G &&
                                (0, a.jsx)(G, { className: R.forward }),
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
              ? (0, a.jsx)(x.Pz, {
                  className: R.navNext,
                  onClick: () => L.S.dispatch(O.CkL.MODAL_CAROUSEL_NEXT),
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
            return m;
          },
        });
      var a = t(200651),
        r = t(192379),
        i = t(120356),
        o = t.n(i),
        l = t(873546),
        s = t(481060),
        u = t(425493),
        c = t(585483),
        d = t(288229),
        f = t(981631),
        h = t(689938),
        _ = t(268108);
      function p(e) {
        let { onClose: n } = e,
          t = r.useRef(null);
        return (0, a.jsx)("div", {
          className: _.mobileCloseWrapper,
          ref: t,
          children: (0, a.jsx)(s.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)("div", {
              children: (0, a.jsx)(u.Z, { closeAction: n, keybind: "ESC" }),
            }),
          }),
        });
      }
      function m(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: i,
            onIndexChange: u,
            fit: m,
            shouldRedactExplicitContent: C,
            shouldHideMediaOptions: E,
            shouldAnimateCarousel: g,
            className: S,
            ...L
          } = e,
          x = l.tq && null != n;
        return (
          r.useEffect(() => {
            if (null != n)
              return (
                c.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                  c.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, n);
                }
              );
          }, [n]),
          (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: o()(_.carouselModal, S),
            ...L,
            size: s.ModalSize.DYNAMIC,
            "aria-label": h.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
            onClick: n,
            children: [
              x ? (0, a.jsx)(p, { onClose: n }) : null,
              (0, a.jsx)(d.Z, {
                items: t,
                startIndex: i,
                onIndexChange: u,
                fit: m,
                shouldRedactExplicitContent: C,
                shouldHideMediaOptions: E,
                shouldAnimateCarousel: g,
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
    760997: function (e, n, t) {
      e.exports = { container: "container_e31053", text: "text_e31053" };
    },
    446174: function (e, n, t) {
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
    519817: function (e, n, t) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    723638: function (e, n, t) {
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
    268108: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
  },
]);
//# sourceMappingURL=301d32982646555c6513.js.map
