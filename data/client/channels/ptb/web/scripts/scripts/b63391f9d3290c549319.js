"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87267"],
  {
    477488: function (e, n, t) {
      var a = t(147018),
        r = t(863664),
        i = t(299623),
        l = t(345374),
        o = Array;
      a(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return r(i(this), o);
          },
        },
      ),
        l("toReversed");
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
        l = t(981631);
      let o = () => r.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
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
        f = {
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
        v: function () {
          return l;
        },
      });
      var a = t(817718),
        r = t(981631);
      let i = {
          [r.EkH.MODAL_CAROUSEL_NEXT]: a.XM,
          [r.EkH.MODAL_CAROUSEL_PREV]: a.py,
          [r.EkH.CLOSE_MODAL]: a.U3,
        },
        l = { [r.EkH.CLOSE_MODAL]: a.U3 };
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return p;
        },
        Lb: function () {
          return u;
        },
        ZF: function () {
          return _;
        },
        gP: function () {
          return d;
        },
        mh: function () {
          return h;
        },
        sF: function () {
          return c;
        },
        xp: function () {
          return f;
        },
      });
      var a = t(192379),
        r = t(392711),
        i = t(367907),
        l = t(592125),
        o = t(626135),
        s = t(981631);
      function u(e, n, t) {
        o.default.track(s.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: t,
        });
      }
      function c(e) {
        let {
          channelId: n,
          messageId: t,
          numDestinationChanges: a,
          numQueryChanges: r,
        } = e;
        o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: a,
          num_query_changes: r,
        });
      }
      function d(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: a,
          hasContextMessage: r,
          numDestinations: u,
          numDestinationChanges: c,
          numQueryChanges: d,
          anyDestinationHasSlowmode: f,
          source: _,
        } = e;
        if (
          (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: t,
            has_error: a,
            has_context_message: r,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: f,
          }),
          "message-shortcut" === _)
        ) {
          let e = l.Z.getChannel(n);
          o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: t,
            ...(0, i.hH)(null == e ? void 0 : e.guild_id),
            ...(0, i.v_)(e),
          });
        }
      }
      function f(e, n) {
        o.default.track(s.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function _() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n, t) => {
              o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function h() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
              o.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function p() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
              o.default.track(s.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
          return f;
        },
      }),
        t(789020);
      var a = t(192379),
        r = t(442837),
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
      function f(e) {
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
        let n = (0, r.e7)([o.Z, i.Z, l.Z], () => {
          var n, t;
          if (null == e) return !0;
          let a =
            null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != a &&
              (null === (t = o.Z.getGuild(a)) || void 0 === t
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
        l = t.n(i),
        o = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(701865),
        f = t(388032),
        _ = t(923007);
      function h() {
        (0, o.closeModal)(d.U);
      }
      function p(e) {
        let { className: n, message: t, target: i, onClick: s } = e,
          u = r.useCallback(() => {
            if ((null == s || s(), "embed" === i.type)) {
              (0, c.l8)({
                message: t,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                onRequestSent: h,
              });
              return;
            }
            (0, c.l8)({
              message: t,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
              onRequestSent: h,
            });
          }, [t, i, s]);
        return (0, a.jsx)(o.Clickable, {
          className: l()(_.container, n),
          onClick: u,
          children: (0, a.jsx)(o.Text, {
            className: _.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: f.intl.string(f.t.I3ltXF),
          }),
        });
      }
      function m(e, n, t) {
        let { canForwardMessages: r } = (0, s.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return r && (0, u.h)(e)
          ? (r) => {
              let { className: i } = r;
              return (0, a.jsx)(p, {
                className: i,
                message: e,
                target: n,
                onClick: t,
              });
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
          return o;
        },
        mc: function () {
          return s;
        },
        so: function () {
          return l;
        },
      });
      var a = t(200651);
      t(192379);
      var r = t(481060),
        i = t(822869);
      let l = "forward-modal";
      function o(e) {
        let {
          message: n,
          source: o,
          initialSelectedDestinations: s = [],
          forwardOptions: u,
          onRequestSent: c,
        } = e;
        (0, i.Lb)(n.channel_id, n.id, o),
          (0, r.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("19566"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, a.jsx)(e, {
                  ...t,
                  message: n,
                  initialSelectedDestinations: s,
                  forwardOptions: u,
                  onRequestSent: c,
                });
            },
            { modalKey: l },
          );
      }
      function s() {
        (0, r.closeModal)(l);
      }
      function u(e) {
        let { message: n, failedDestinations: i, forwardOptions: l } = e;
        (0, r.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, a.jsx)(e, {
              ...t,
              message: n,
              failedDestinations: i,
              forwardOptions: l,
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
          return h;
        },
      }),
        t(47120);
      var a,
        r = t(200651),
        i = t(192379),
        l = t(120356),
        o = t.n(l),
        s = t(481060),
        u = t(768762),
        c = t(723478);
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
      class _ extends (a = i.PureComponent) {
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
              align: l,
            } = this.props,
            u = t
              ? c.verticalPaginationItemContainer
              : c.horizontalPaginationItemContainer;
          return (0, r.jsx)(s.AdvancedScrollerAuto, {
            orientation: t ? "vertical" : "horizontal",
            className: o()(u, a, l),
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
      d(_, "Align", f),
        d(_, "defaultProps", {
          scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 },
          align: f.CENTER,
        });
      class h extends i.PureComponent {
        render() {
          let { className: e } = this.props;
          return (0, r.jsx)(s.Button, {
            look: s.Button.Looks.BLANK,
            size: s.Button.Sizes.NONE,
            className: o()(c.prevButtonContainer, e),
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
            className: o()(c.nextButtonContainer, e),
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
      n.ZP = 12633 == t.j ? _ : null;
    },
    341176: function (e, n, t) {
      t.d(n, {
        D: function () {
          return h;
        },
        Z: function () {
          return p;
        },
      });
      var a = t(200651),
        r = t(120356),
        i = t.n(r),
        l = t(524444),
        o = t(52824),
        s = t(956664),
        u = t(589530),
        c = t(591759),
        d = t(124347),
        f = t(80966),
        _ = t(891589);
      let h = { DEFAULT: null, CONTAIN: _.contain, SCALE_DOWN: _.scaleDown };
      function p(e) {
        let {
            media: n,
            fit: t = h.DEFAULT,
            obscured: r = !1,
            onContextMenu: p,
          } = e,
          {
            width: m,
            height: C,
            url: E,
            proxyUrl: S,
            alt: g,
            type: L,
            maxWidth: O,
            maxHeight: x,
            ...A
          } = n,
          { width: v, height: N } = (0, s.zp)(
            null != m ? m : 0,
            null != C ? C : 0,
          ),
          R = (0, o.q)({ proxyURL: S, url: E }),
          b = !(null == m || 0 === m || null == C || 0 === C);
        if ("VIDEO" === L && b && null != S) {
          var D;
          let e = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n
              ? null
              : (n.searchParams.append("format", "webp"), n.toString());
          })(S);
          if (null == e) return null;
          let t =
            null !== (D = n.renderLinkComponent) && void 0 !== D ? D : l.iT;
          return (0, a.jsx)(f.Z, {
            ...A,
            src: R,
            width: m,
            height: C,
            maxWidth: v,
            maxHeight: N,
            poster: e,
            naturalWidth: m,
            naturalHeight: C,
            volume: u.FC,
            autoMute: u.rs,
            onVolumeChange: u.jA,
            onMute: u.Zj,
            renderLinkComponent: t,
            autoPlay: !r,
            alt: g,
            onContextMenu: p,
          });
        }
        if ("IMAGE" === L)
          return b
            ? (0, a.jsx)(d.ZP, {
                ...A,
                imageClassName: i()(_.slide, t),
                src: R,
                width: m,
                height: C,
                shouldLink: !1,
                maxWidth: v,
                maxHeight: N,
                animated: !r && n.animated,
                autoPlay: !r,
                alt: g,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: p,
              })
            : (0, a.jsx)("img", {
                src: R,
                alt: g,
                className: i()(_.slide, t),
                onContextMenu: p,
              });
        return null;
      }
    },
    288229: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return D;
        },
      }),
        t(477488),
        t(47120);
      var a = t(200651),
        r = t(192379),
        i = t(120356),
        l = t.n(i),
        o = t(299608),
        s = t.n(o),
        u = t(208404),
        c = t(442837),
        d = t(481060),
        f = t(794295),
        _ = t(95398),
        h = t(247206),
        p = t(394779),
        m = t(134432),
        C = t(254109),
        E = t(169525),
        S = t(375954),
        g = t(585483),
        L = t(44488),
        O = t(341176),
        x = t(981631),
        A = t(388032),
        v = t(401920);
      function N(e, n) {
        return ((e % n) + n) % n;
      }
      function R(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function b(e) {
        let { children: n, hasMediaControls: t, isObscured: i, src: o } = e,
          [s, u] = (0, r.useState)(!1);
        return i
          ? (0, a.jsx)(_.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                _.Z,
                {
                  type: _.Z.Types.ATTACHMENT,
                  reason: E.wk.EXPLICIT_CONTENT,
                  className: v.obscureContainer,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  obscurityControlClassName: l()({
                    [v.controlsOffset]: t && s,
                  }),
                  onToggleObscurity: (e) => {
                    e.stopPropagation(),
                      e.nativeEvent.stopPropagation(),
                      u((e) => !e);
                  },
                  children: (e) =>
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("div", {
                        className: l()(v.obscureWrapper, { [v.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                o,
              ),
            })
          : (0, a.jsx)(a.Fragment, { children: n(!1) });
      }
      function D(e) {
        var n, t, i;
        let {
            items: l,
            fit: o,
            startIndex: _ = 0,
            shouldRedactExplicitContent: E = !1,
            shouldHideMediaOptions: N = !1,
            shouldAnimateCarousel: D = !1,
          } = e,
          [M, T] = (0, r.useState)(_),
          k = (0, r.useRef)(_),
          [y, P] = (0, r.useState)([]);
        (0, r.useEffect)(() => {
          var e, n;
          let t = (((M + 1) % (e = l.length)) + e) % e;
          let a = (((M - 1) % (n = l.length)) + n) % n;
          R(l[t]) && (0, m.po)(l[t].url), R(l[a]) && (0, m.po)(l[a].url);
        }, [M, l]);
        let I = (0, r.useCallback)(
          (e) => {
            var n;
            let t = e - k.current;
            T((e = ((e % (n = l.length)) + n) % n)),
              (k.current = e),
              P((e) => [...e, t]),
              (0, C.yg)(C.uG.SELECTED_ITEM_CHANGE);
          },
          [l],
        );
        (0, r.useEffect)(() => {
          let e = s()(() => {
              I(k.current + 1);
            }, 300),
            n = s()(() => {
              I(k.current - 1);
            }, 300);
          return (
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, e),
                g.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [I]);
        let j = l[M],
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
          G = (0, c.e7)(
            [S.Z],
            () => (null != F && null != Z ? S.Z.getMessage(F, Z) : null),
            [F, Z],
          ),
          U = null != G ? G : null == w ? void 0 : w.message,
          W = (0, r.useCallback)(() => (0, C.yg)(C.uG.FORWARD_PRESSED), []),
          H =
            null != U && null != w.identifier
              ? (0, p.s)(U, w.identifier, W)
              : null,
          B = (0, h.KP)({ type: h.lJ.GenericMedia, media: j }, E),
          z = N
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : () => (0, C.yg)(C.uG.CONTEXT_MENU_OPENED),
          X = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(y[y.length - 1]),
          K = (0, d.useTransition)(
            j,
            {
              key: j.url,
              from: { opacity: 0, transform: X[0] },
              enter: { opacity: 1, transform: "translateX(0)" },
              leave: { opacity: 0, transform: X[X.length - 1] },
              config: { friction: 20, tension: 250 },
            },
            D ? "respect-motion-settings" : "animate-never",
          );
        return (0, a.jsxs)("div", {
          className: v.wrapper,
          children: [
            l.length > 1
              ? (0, a.jsx)(L.am, {
                  className: v.navPrev,
                  onClick: () => g.S.dispatch(x.CkL.MODAL_CAROUSEL_PREV),
                })
              : null,
            K((e, n) => {
              var t;
              return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(
                  u.animated.div,
                  {
                    style: e,
                    className: v.zoomedMediaFitWrapper,
                    children: (0, a.jsxs)("div", {
                      onClick: (e) =>
                        null != o && [O.D.CONTAIN, O.D.SCALE_DOWN].includes(o)
                          ? null
                          : e.stopPropagation(),
                      children: [
                        (0, a.jsx)(b, {
                          isObscured: B,
                          src: n.url,
                          children: (e) =>
                            (0, a.jsx)(O.Z, {
                              media: n,
                              fit: o,
                              obscured: e,
                              onContextMenu: z,
                            }),
                        }),
                        ("IMAGE" !== n.type || null != n.original) &&
                          !N &&
                          (0, a.jsxs)("div", {
                            className: v.optionsContainer,
                            children: [
                              (0, a.jsx)(f.Z, {
                                href:
                                  null !== (t = n.original) && void 0 !== t
                                    ? t
                                    : n.url,
                                className: v.downloadLink,
                                onClick: () => (
                                  (0, C.yg)(C.uG.OPEN_LINK_PRESSED), !1
                                ),
                                children: A.intl.string(A.t.q5jLJC),
                              }),
                              null != H &&
                                (0, a.jsx)(H, { className: v.forward }),
                            ],
                          }),
                      ],
                    }),
                  },
                  n.url,
                ),
              });
            }),
            l.length > 1
              ? (0, a.jsx)(L.Pz, {
                  className: v.navNext,
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
        l = t.n(i),
        o = t(873546),
        s = t(481060),
        u = t(425493),
        c = t(376641),
        d = t(714338),
        f = t(585483),
        _ = t(288229),
        h = t(981631),
        p = t(388032),
        m = t(230569);
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
            fit: u,
            shouldRedactExplicitContent: E,
            shouldHideMediaOptions: S,
            shouldAnimateCarousel: g,
            className: L,
            transitionState: O,
            ...x
          } = e,
          A = o.tq && null != n;
        return (
          r.useEffect(() => {
            if (null != n)
              return (
                f.S.subscribe(h.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                  f.S.unsubscribe(h.CkL.MEDIA_MODAL_CLOSE, n);
                }
              );
          }, [n]),
          r.useEffect(
            () => (
              O === s.ModalTransitionState.ENTERED &&
                (d.Z.disable(), d.Z.enableTemp(c.P)),
              O === s.ModalTransitionState.HIDDEN &&
                (d.Z.disable(), d.Z.enableTemp(c.v)),
              () => {
                d.Z.disableTemp();
              }
            ),
            [O],
          ),
          (0, a.jsxs)(s.ModalRoot, {
            hideShadow: !0,
            className: l()(m.carouselModal, L),
            transitionState: O,
            ...x,
            size: s.ModalSize.DYNAMIC,
            "aria-label": p.intl.string(p.t.AMTX3t),
            onClick: n,
            children: [
              A ? (0, a.jsx)(C, { onClose: n }) : null,
              (0, a.jsx)(_.Z, {
                items: t,
                startIndex: i,
                fit: u,
                shouldRedactExplicitContent: E,
                shouldHideMediaOptions: S,
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
    923007: function (e, n, t) {
      e.exports = { container: "container_e31053", text: "text_e31053" };
    },
    723478: function (e, n, t) {
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
    891589: function (e, n, t) {
      e.exports = {
        slide: "slide_f97a12",
        scaleDown: "scaleDown_f97a12",
        contain: "contain_f97a12",
      };
    },
    401920: function (e, n, t) {
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
    230569: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c9eb31",
        mobileCloseWrapper: "mobileCloseWrapper_c9eb31",
        forcedTransparency: "forcedTransparency_c9eb31",
      };
    },
  },
]);
//# sourceMappingURL=b63391f9d3290c549319.js.map
