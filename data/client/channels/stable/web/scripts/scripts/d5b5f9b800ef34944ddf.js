"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87267"],
  {
    477488: function (e, n, t) {
      var a = t(147018),
        r = t(863664),
        i = t(299623),
        l = t(345374),
        s = Array;
      a(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return r(i(this), s);
          },
        },
      ),
        l("toReversed");
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return f;
        },
        Lb: function () {
          return s;
        },
        ZF: function () {
          return d;
        },
        gP: function () {
          return o;
        },
        mh: function () {
          return _;
        },
        sF: function () {
          return u;
        },
        xp: function () {
          return c;
        },
      });
      var a = t(470079),
        r = t(392711),
        i = t(626135),
        l = t(981631);
      function s(e, n, t) {
        i.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
          channel_id: e,
          message_id: n,
          source: t,
        });
      }
      function u(e) {
        let {
          channelId: n,
          messageId: t,
          numDestinationChanges: a,
          numQueryChanges: r,
        } = e;
        i.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: a,
          num_query_changes: r,
        });
      }
      function o(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: a,
          hasContextMessage: r,
          numDestinations: s,
          numDestinationChanges: u,
          numQueryChanges: o,
          anyDestinationHasSlowmode: c,
        } = e;
        i.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: a,
          has_context_message: r,
          num_destinations: s,
          num_destination_changes: u,
          num_query_changes: o,
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
        return a.useMemo(
          () =>
            (0, r.once)((e, n, t) => {
              i.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function _() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
              i.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function f() {
        return a.useMemo(
          () =>
            (0, r.once)((e, n) => {
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
          return f;
        },
        h: function () {
          return _;
        },
      }),
        t(789020);
      var a = t(470079),
        r = t(442837),
        i = t(430198),
        l = t(592125),
        s = t(430824),
        u = t(630388),
        o = t(981631);
      let c =
        o.iLy.CROSSPOSTED |
        o.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD |
        o.iLy.GUILD_FEED_HIDDEN |
        o.iLy.HAS_SNAPSHOT |
        o.iLy.HAS_THREAD |
        o.iLy.IS_CROSSPOST |
        o.iLy.IS_VOICE_MESSAGE |
        o.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING |
        o.iLy.SUPPRESS_EMBEDS |
        o.iLy.SUPPRESS_NOTIFICATIONS |
        o.iLy.URGENT;
      function d(e) {
        return (
          (!!(e.state !== o.yb.SEND_FAILED && o.V$x.FORWARDABLE.has(e.type)) &&
            null == e.poll &&
            null == e.activity &&
            null == e.call &&
            null == e.activityInstance &&
            0 === (0, u.Ge)(e.flags, c)) ||
          !1
        );
      }
      function _(e) {
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
      function f(e) {
        let n = (0, r.e7)([s.Z, i.Z, l.Z], () => {
          var n, t;
          if (null == e) return !0;
          let a =
            null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != a &&
              (null === (t = s.Z.getGuild(a)) || void 0 === t
                ? void 0
                : t.hasFeature(o.oNc.FORWARDING_DISABLED))
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
          return E;
        },
      });
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        s = t(481060),
        u = t(346610),
        o = t(868643),
        c = t(912332),
        d = t(701865),
        _ = t(689938),
        f = t(760997);
      function h() {
        (0, s.closeModal)(d.U);
      }
      function m(e) {
        let { className: n, message: t, target: i } = e,
          u = r.useCallback(() => {
            if ("embed" === i.type) {
              (0, c.l8)({
                messageId: t.id,
                channelId: t.channel_id,
                message: t,
                source: "media-viewer",
                forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                onRequestSent: h,
              });
              return;
            }
            (0, c.l8)({
              messageId: t.id,
              channelId: t.channel_id,
              message: t,
              source: "media-viewer",
              forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
              onRequestSent: h,
            });
          }, [t, i]);
        return (0, a.jsx)(s.Clickable, {
          className: l()(f.container, n),
          onClick: u,
          children: (0, a.jsx)(s.Text, {
            className: f.text,
            variant: "text-sm/medium",
            color: "always-white",
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD,
          }),
        });
      }
      function E(e, n) {
        let { canForwardMessages: t } = (0, u.WT)(
          { location: "ForwardLink" },
          { autoTrackExposure: !1 },
        );
        return t && (0, o.h)(e)
          ? (t) => {
              let { className: r } = t;
              return (0, a.jsx)(m, { className: r, message: e, target: n });
            }
          : () => null;
      }
    },
    912332: function (e, n, t) {
      t.d(n, {
        Np: function () {
          return o;
        },
        l8: function () {
          return s;
        },
        mc: function () {
          return u;
        },
        so: function () {
          return l;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(481060),
        i = t(822869);
      let l = "forward-modal";
      function s(e) {
        let {
          messageId: n,
          channelId: s,
          message: u,
          source: o,
          initialSelectedDestinations: c = [],
          forwardOptions: d,
          onRequestSent: _,
        } = e;
        (0, i.Lb)(s, n, o),
          (0, r.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("99452"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, a.jsx)(e, {
                  ...t,
                  channelId: s,
                  messageId: n,
                  message: u,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: _,
                });
            },
            { modalKey: l },
          );
      }
      function u() {
        (0, r.closeModal)(l);
      }
      function o(e) {
        let {
          messageId: n,
          channelId: i,
          message: l,
          failedDestinations: s,
          forwardOptions: u,
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
              message: l,
              failedDestinations: s,
              forwardOptions: u,
            });
        });
      }
    },
    288229: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(477488),
        t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        s = t(299608),
        u = t.n(s),
        o = t(212433),
        c = t(442837),
        d = t(481060),
        _ = t(794295),
        f = t(376641),
        h = t(714338),
        m = t(95398),
        E = t(163268),
        S = t(394779),
        A = t(134432),
        O = t(169525),
        g = t(375954),
        C = t(585483),
        p = t(44488),
        R = t(341176),
        L = t(981631),
        v = t(689938),
        M = t(723638);
      function D(e, n) {
        return ((e % n) + n) % n;
      }
      function x(e) {
        let { children: n, hasMediaControls: t, isObscured: i, src: s } = e,
          [u, o] = (0, r.useState)(!1);
        return i
          ? (0, a.jsx)(m.a.Provider, {
              value: u,
              children: (0, a.jsx)(
                m.Z,
                {
                  type: m.Z.Types.ATTACHMENT,
                  reason: O.wk.EXPLICIT_CONTENT,
                  className: M.obscureContainer,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  obscurityControlClassName: l()({
                    [M.controlsOffset]: t && u,
                  }),
                  onToggleObscurity: (e) => {
                    e.stopPropagation(),
                      e.nativeEvent.stopPropagation(),
                      o((e) => !e);
                  },
                  children: (e) =>
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)("div", {
                        className: l()(M.obscureWrapper, { [M.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                s,
              ),
            })
          : (0, a.jsx)(a.Fragment, { children: n(!1) });
      }
      function N(e) {
        var n, t, i;
        let {
            items: l,
            onIndexChange: s,
            fit: m,
            startIndex: O = 0,
            shouldRedactExplicitContent: D = !1,
            shouldHideMediaOptions: N = !1,
            shouldAnimateCarousel: I = !1,
          } = e,
          [T, y] = (0, r.useState)(O),
          b = (0, r.useRef)(O),
          [k, j] = (0, r.useState)([]);
        (0, r.useEffect)(
          () => (
            h.Z.disable(),
            h.Z.enableTemp(f.P),
            () => {
              h.Z.disableTemp();
            }
          ),
          [],
        ),
          (0, r.useEffect)(() => {
            var e, n;
            let t = (((T + 1) % (e = l.length)) + e) % e;
            let a = (((T - 1) % (n = l.length)) + n) % n;
            (0, A.po)(l[t].url), (0, A.po)(l[a].url);
          }, [T, l]);
        let P = (0, r.useCallback)(
          (e) => {
            var n;
            let t = e - b.current;
            y((e = ((e % (n = l.length)) + n) % n)),
              (b.current = e),
              j((e) => [...e, t]),
              null == s || s(e);
          },
          [s, l],
        );
        (0, r.useEffect)(() => {
          let e = u()(() => {
              P(b.current + 1);
            }, 300),
            n = u()(() => {
              P(b.current - 1);
            }, 300);
          return (
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_NEXT, e),
            C.S.subscribe(L.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_NEXT, e),
                C.S.unsubscribe(L.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [P]);
        let Z = l[T],
          F = null !== (i = Z.sourceMetadata) && void 0 !== i ? i : {},
          w =
            null == F
              ? void 0
              : null === (n = F.message) || void 0 === n
                ? void 0
                : n.id,
          W =
            null == F
              ? void 0
              : null === (t = F.message) || void 0 === t
                ? void 0
                : t.channel_id,
          G = (0, c.e7)(
            [g.Z],
            () => (null != W && null != w ? g.Z.getMessage(W, w) : null),
            [W, w],
          ),
          U = null != G ? G : null == F ? void 0 : F.message,
          H =
            null != U && null != F.identifier
              ? (0, S.s)(U, F.identifier)
              : null,
          X = (0, E.KP)({ type: E.lJ.GenericMedia, media: Z }, D),
          q = N
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          z = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(k[k.length - 1]),
          V = (0, d.useTransition)(
            Z,
            {
              key: Z.url,
              from: { opacity: 0, transform: z[0] },
              enter: { opacity: 1, transform: "translateX(0)" },
              leave: { opacity: 0, transform: z[z.length - 1] },
              config: { friction: 20, tension: 250 },
            },
            I ? "respect-motion-settings" : "animate-never",
          );
        return (0, a.jsxs)("div", {
          className: M.wrapper,
          children: [
            l.length > 1
              ? (0, a.jsx)(p.am, {
                  className: M.navPrev,
                  onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_PREV),
                })
              : null,
            V((e, n) => {
              var t;
              return (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(
                  o.animated.div,
                  {
                    style: e,
                    className: M.zoomedMediaFitWrapper,
                    children: (0, a.jsxs)("div", {
                      onClick: (e) =>
                        null != m && [R.D.CONTAIN, R.D.SCALE_DOWN].includes(m)
                          ? null
                          : e.stopPropagation(),
                      children: [
                        (0, a.jsx)(x, {
                          isObscured: X,
                          src: n.url,
                          children: (e) =>
                            (0, a.jsx)(R.Z, {
                              media: n,
                              fit: m,
                              obscured: e,
                              onContextMenu: q,
                            }),
                        }),
                        ("IMAGE" !== n.type || null != n.original) &&
                          !N &&
                          (0, a.jsxs)("div", {
                            className: M.optionsContainer,
                            children: [
                              (0, a.jsx)(_.Z, {
                                href:
                                  null !== (t = n.original) && void 0 !== t
                                    ? t
                                    : n.url,
                                className: M.downloadLink,
                                children: v.Z.Messages.OPEN_IN_BROWSER,
                              }),
                              null != H &&
                                (0, a.jsx)(H, { className: M.forward }),
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
              ? (0, a.jsx)(p.Pz, {
                  className: M.navNext,
                  onClick: () => C.S.dispatch(L.CkL.MODAL_CAROUSEL_NEXT),
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
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        l = t.n(i),
        s = t(873546),
        u = t(481060),
        o = t(425493),
        c = t(585483),
        d = t(288229),
        _ = t(981631),
        f = t(689938),
        h = t(268108);
      function m(e) {
        let { onClose: n } = e,
          t = r.useRef(null);
        return (0, a.jsx)("div", {
          className: h.mobileCloseWrapper,
          ref: t,
          children: (0, a.jsx)(u.FocusRingScope, {
            containerRef: t,
            children: (0, a.jsx)("div", {
              children: (0, a.jsx)(o.Z, { closeAction: n, keybind: "ESC" }),
            }),
          }),
        });
      }
      function E(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: i,
            onIndexChange: o,
            fit: E,
            shouldRedactExplicitContent: S,
            shouldHideMediaOptions: A,
            shouldAnimateCarousel: O,
            className: g,
            ...C
          } = e,
          p = s.tq && null != n;
        return (
          r.useEffect(() => {
            if (null != n)
              return (
                c.S.subscribe(_.CkL.MEDIA_MODAL_CLOSE, n),
                () => {
                  c.S.unsubscribe(_.CkL.MEDIA_MODAL_CLOSE, n);
                }
              );
          }, [n]),
          (0, a.jsxs)(u.ModalRoot, {
            hideShadow: !0,
            className: l()(h.carouselModal, g),
            ...C,
            size: u.ModalSize.DYNAMIC,
            "aria-label": f.Z.Messages.MEDIA_VIEWER_MODAL_ALT_TEXT,
            onClick: n,
            children: [
              p ? (0, a.jsx)(m, { onClose: n }) : null,
              (0, a.jsx)(d.Z, {
                items: t,
                startIndex: i,
                onIndexChange: o,
                fit: E,
                shouldRedactExplicitContent: S,
                shouldHideMediaOptions: A,
                shouldAnimateCarousel: O,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=d5b5f9b800ef34944ddf.js.map
