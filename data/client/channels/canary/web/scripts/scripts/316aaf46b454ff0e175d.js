"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var r = t(147018),
        i = t(863664),
        l = t(299623),
        a = t(345374),
        o = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return i(l(this), o);
          },
        },
      ),
        a("toReversed");
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
        l = t(585483),
        a = t(981631);
      let o = () => i.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return l.S.dispatch(a.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return l.S.dispatch(a.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(a.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(a.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (l.S.hasSubscribers(a.CkL.MODAL_CLOSE))
              return l.S.dispatch(a.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
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
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return h;
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
        l = t(626135),
        a = t(981631);
      function o(e, n, t) {
        l.default.track(a.rMx.FORWARD_MESSAGE_STARTED, {
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
        l.default.track(a.rMx.FORWARD_MESSAGE_CANCELLED, {
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
        l.default.track(a.rMx.FORWARD_MESSAGE_SENT, {
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
        l.default.track(a.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n, t) => {
              l.default.track(a.rMx.FORWARD_ADD_RECIPIENT, {
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
              l.default.track(a.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function h() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n) => {
              l.default.track(a.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
          return m;
        },
      }),
        t(789020);
      var r = t(192379),
        i = t(442837),
        l = t(430198),
        a = t(592125),
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
          null === (n = a.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && l.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function h(e) {
        let n = (0, i.e7)([o.Z, l.Z, a.Z], () => {
          var n, t;
          if (null == e) return !0;
          let r =
            null === (n = a.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != r &&
              (null === (t = o.Z.getGuild(r)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != r && l.Z.isChannelOrThreadParentGated(r, e.channel_id))
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
          return a;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(481060),
        l = t(822869);
      let a = "forward-modal";
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
        (0, l.Lb)(o, n, u),
          (0, i.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("91834"),
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
            { modalKey: a },
          );
      }
      function s() {
        (0, i.closeModal)(a);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: l,
          message: a,
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
              channelId: l,
              message: a,
              failedDestinations: o,
              forwardOptions: s,
            });
        });
      }
    },
    378409: function (e, n, t) {
      t.d(n, {
        Jj: function () {
          return d;
        },
        Lz: function () {
          return h;
        },
        gS: function () {
          return m;
        },
        s$: function () {
          return f;
        },
      }),
        t(47120);
      var r = t(829883),
        i = t(378233),
        l = t(591759);
      let a = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, r, i;
          return null === (i = l.Z.toURLSafe(e)) || void 0 === i
            ? void 0
            : null === (r = i.pathname) || void 0 === r
              ? void 0
              : null === (t = r.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function d(e) {
        return !((0, i.B0)(e) || (0, r.zt)(e)) && !0;
      }
      function m(e) {
        let n = l.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (a.test(n.hostname) || n.host === o) && d(e) && null != t && s.has(t)
        );
      }
      function h(e) {
        let n = l.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (a.test(n.hostname) || n.host === o) && d(e) && null != t && u.has(t)
        );
      }
      function f(e) {
        let n = l.Z.toURLSafe(e);
        return null == n || n.host === o
          ? e
          : "https://media.discordapp.net" === n.origin
            ? ((n.host = o),
              n.searchParams.delete("size"),
              n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.delete("quality"),
              n.searchParams.delete("format"),
              n.toString())
            : (n.searchParams.delete("width"),
              n.searchParams.delete("height"),
              n.searchParams.set("quality", "lossless"),
              n.searchParams.delete("format"),
              n.toString());
      }
    },
    73249: function (e, n, t) {
      t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(378409),
        m = t(49012),
        h = t(358085),
        f = t(998502),
        p = t(212459),
        g = t(701865),
        _ = t(388032),
        x = t(609552);
      function C() {
        (0, o.closeModal)(g.U);
      }
      function S(e) {
        let { onClick: n, tooltipText: t, children: i, selected: l, ...s } = e;
        return (0, r.jsx)(o.Tooltip, {
          text: t,
          children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(o.Button, {
              ...t,
              onClick: n,
              look: o.ButtonLooks.BLANK,
              size: o.ButtonSizes.ICON,
              color: o.ButtonColors.CUSTOM,
              className: a()(x.actionButton, { [x.selected]: l }),
              ...s,
              children: i,
            });
          },
        });
      }
      function v() {
        let { zoomed: e, setZoomed: n } = (0, p.Y)();
        return (0, r.jsx)(S, {
          onClick: () => n(!e),
          tooltipText: e
            ? _.intl.string(_.t.vOFof3)
            : _.intl.string(_.t.Kt4gZ2),
          children: e
            ? (0, r.jsx)(o.MagnifyingGlassMinusIcon, {})
            : (0, r.jsx)(o.MagnifyingGlassPlusIcon, {}),
        });
      }
      function E(e) {
        var n, t;
        let { item: l } = e,
          a =
            null === (n = l.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
          d =
            null === (t = l.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          m = i.useCallback(() => {
            if (null != a && null != d) {
              if ("embed" === d.type) {
                (0, c.l8)({
                  messageId: a.id,
                  channelId: a.channel_id,
                  message: a,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                  onRequestSent: C,
                });
                return;
              }
              (0, c.l8)({
                messageId: a.id,
                channelId: a.channel_id,
                message: a,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: C,
              });
            }
          }, [a, d]),
          { canForwardMessages: h } = (0, s.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != a && h && (0, u.h)(a)
          ? (0, r.jsx)(S, {
              onClick: m,
              tooltipText: _.intl.string(_.t.I3ltXF),
              children: (0, r.jsx)(o.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function L(e) {
        let { item: n } = e;
        if (
          !(
            "VIDEO" === n.type ||
            (h.isPlatformEmbedded &&
              null == n.children &&
              "IMAGE" === n.type &&
              (0, d.gS)(n.url))
          )
        )
          return null;
        let t = (0, d.s$)(n.url);
        async function i() {
          if (("VIDEO" === n.type && (0, m.q)({ href: t }), "IMAGE" === n.type))
            try {
              await f.ZP.saveImage(t);
            } catch (e) {
              (0, o.showToast)(
                (0, o.createToast)(
                  _.intl.string(_.t.R0RpRU),
                  o.ToastType.FAILURE,
                ),
              );
            }
        }
        return (0, r.jsx)(S, {
          onClick: i,
          tooltipText: _.intl.string(_.t["1WjMbG"]),
          children: (0, r.jsx)(o.DownloadIcon, {}),
        });
      }
      function y(e) {
        var n;
        let { item: t } = e;
        if (!(0, d.Jj)(t.url)) return null;
        let i = (0, d.s$)(
          null !== (n = t.original) && void 0 !== n ? n : t.url,
        );
        return (0, r.jsx)(S, {
          onClick: () => (0, m.q)({ href: i }),
          tooltipText: _.intl.string(_.t.wuRE8P),
          children: (0, r.jsx)(o.WindowLaunchIcon, {}),
        });
      }
      function I(e) {
        let {
          item: n,
          canCopyImage: t,
          canCopyLink: i,
          onClose: l,
          onSelect: a,
        } = e;
        async function s() {
          let e = (0, d.s$)(n.url);
          try {
            await f.ZP.copyImage(e),
              (0, o.showToast)(
                (0, o.createToast)(
                  _.intl.string(_.t["t5VZ8/"]),
                  o.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, o.showToast)(
              (0, o.createToast)(
                _.intl.string(_.t.R0RpRU),
                o.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, r.jsx)(o.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: l,
          onSelect: a,
          children: (0, r.jsxs)(o.MenuGroup, {
            children: [
              t &&
                (0, r.jsx)(
                  o.MenuItem,
                  {
                    label: _.intl.string(_.t.tvUqWl),
                    id: "media-viewer-copy-image",
                    action: s,
                  },
                  "media-viewer-copy-image",
                ),
              i &&
                (0, r.jsx)(
                  o.MenuItem,
                  {
                    id: "media-viewer-copy-link",
                    label: _.intl.string(_.t.WqhZsr),
                    action: function () {
                      var e;
                      let t = (0, d.s$)(
                        null !== (e = n.original) && void 0 !== e ? e : n.url,
                      );
                      try {
                        h.isPlatformEmbedded
                          ? f.ZP.copy(t)
                          : window.navigator.clipboard.writeText(t),
                          (0, o.showToast)(
                            (0, o.createToast)(
                              _.intl.string(_.t["L/PwZW"]),
                              o.ToastType.SUCCESS,
                            ),
                          );
                      } catch (e) {
                        (0, o.showToast)(
                          (0, o.createToast)(
                            _.intl.string(_.t.R0RpRU),
                            o.ToastType.FAILURE,
                          ),
                        );
                      }
                    },
                  },
                  "media-viewer-copy-link",
                ),
            ],
          }),
        });
      }
      function A(e) {
        let { item: n } = e,
          [t, l] = i.useState(!1),
          a =
            "IMAGE" === n.type &&
            h.isPlatformEmbedded &&
            null == n.children &&
            f.ZP.canCopyImage() &&
            (0, d.Lz)(n.url),
          s = (0, d.Jj)(n.url);
        return a || s
          ? (0, r.jsx)(o.Popout, {
              shouldShow: t,
              align: "left",
              position: "top",
              spacing: 18,
              renderPopout: () =>
                (0, r.jsx)(I, {
                  item: n,
                  canCopyImage: a,
                  canCopyLink: s,
                  onClose: () => l(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, r.jsx)(S, {
                  tooltipText: _.intl.string(_.t.UKOtz8),
                  onClick: () => l(!t),
                  selected: t,
                  children: (0, r.jsx)(o.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      n.Z = i.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (0, r.jsxs)("div", {
          className: x.actionButtons,
          children: [
            (0, r.jsx)(v, {}),
            !t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(E, { item: n }),
                  (0, r.jsx)(L, { item: n }),
                  (0, r.jsx)(y, { item: n }),
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
          return M;
        },
      }),
        t(477488),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(299608),
        s = t.n(o),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        m = t(376641),
        h = t(714338),
        f = t(95398),
        p = t(247206),
        g = t(134432),
        _ = t(169525),
        x = t(585483),
        C = t(212459),
        S = t(683528),
        v = t(549635),
        E = t(981631),
        L = t(388032),
        y = t(396779);
      function I(e, n) {
        return ((e % n) + n) % n;
      }
      function A(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function R(e) {
        let { children: n, isObscured: t, src: l } = e,
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
                  reason: _.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("div", {
                        className: a()(y.obscureWrapper, { [y.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                l,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: n(!1) });
      }
      function M(e) {
        var n;
        let {
            items: t,
            onIndexChange: l,
            startIndex: a = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: f = !1,
          } = e,
          [_, I] = i.useState(a),
          M = i.useRef(a),
          [j, b] = i.useState([]),
          { zoomed: O, setZoomed: T } = (0, C.Y)();
        i.useEffect(
          () => (
            h.Z.disable(),
            h.Z.enableTemp(m.P),
            () => {
              h.Z.disableTemp();
            }
          ),
          [],
        ),
          i.useEffect(() => {
            var e, n;
            let r = (((_ + 1) % (e = t.length)) + e) % e;
            let i = (((_ - 1) % (n = t.length)) + n) % n;
            A(t[r]) && (0, g.po)(t[r].url), A(t[i]) && (0, g.po)(t[i].url);
          }, [_, t]);
        let P = i.useCallback(
          (e) => {
            var n;
            let r = e - M.current;
            I((e = ((e % (n = t.length)) + n) % n)),
              (M.current = e),
              b((e) => [...e, r]),
              null == l || l(e),
              T(!1);
          },
          [l, t, T],
        );
        i.useEffect(() => {
          let e = s()(() => {
              P(M.current + 1);
            }, 300),
            n = s()(() => {
              P(M.current - 1);
            }, 300);
          return (
            x.S.subscribe(E.CkL.MODAL_CAROUSEL_NEXT, e),
            x.S.subscribe(E.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              x.S.unsubscribe(E.CkL.MODAL_CAROUSEL_NEXT, e),
                x.S.unsubscribe(E.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [P, T]);
        let k = t[_],
          D = (0, p.KP)({ type: p.lJ.GenericMedia, media: k }, o),
          N = f
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          w = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(null !== (n = j[j.length - 1]) && void 0 !== n ? n : 0),
          Z = (0, d.useTransition)(k, {
            key: k.url,
            from: { opacity: 0, transform: w[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: w[w.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          U = t.length > 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: y.wrapper,
              children: [
                U
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: y.navPrev,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => x.S.dispatch(E.CkL.MODAL_CAROUSEL_PREV),
                      icon: (0, r.jsx)(c.j, {}),
                      tooltip: L.intl.string(L.t.vgfxaG),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: y.mediaContainer,
                  children: Z((e, n) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        u.animated.div,
                        {
                          style: e,
                          className: y.mediaWrapper,
                          children: (0, r.jsx)(R, {
                            isObscured: !O && D,
                            src: n.url,
                            children: (e) =>
                              (0, r.jsx)(v.Z, {
                                media: n,
                                obscured: e,
                                onContextMenu: N,
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
                      className: y.navNext,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: () => x.S.dispatch(E.CkL.MODAL_CAROUSEL_NEXT),
                      icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: L.intl.string(L.t.XiOHRU),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            U &&
              (0, r.jsx)(S.Z, {
                items: t,
                currentIndex: _,
                onGalleryItemClick: P,
              }),
          ],
        });
      }
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        m = t(388032),
        h = t(159076);
      function f(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let p = i.memo(function (e) {
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
      function g(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: l } = e,
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
            className: h.galleryContainer,
            children: (0, r.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: h.gallery,
              ref: u,
              children: n.map((e, i) => {
                let s = i === t,
                  u = s ? m.t["qv/U5e"] : m.t.zviMAA;
                return (0, r.jsx)(
                  o.Clickable,
                  {
                    id: f(i),
                    className: a()(h.galleryItem, { [h.selected]: s }),
                    "aria-label": m.intl.formatToPlainString(u, {
                      pageNumber: i + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => l(i),
                    children: (0, r.jsx)(p, { item: e }),
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
          return h;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(124347),
        a = t(80966),
        o = t(524444),
        s = t(52824),
        u = t(956664),
        c = t(589530),
        d = t(591759),
        m = t(767656);
      function h(e) {
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
            url: p,
            proxyUrl: g,
            alt: _,
            type: x,
            maxWidth: C,
            maxHeight: S,
            ...v
          } = n,
          { width: E, height: L } = (0, u.zp)(
            null != d ? d : 0,
            null != f ? f : 0,
          ),
          y = (0, s.q)({ proxyURL: g, url: p }),
          I = !(null == d || 0 === d || null == f || 0 === f);
        if ("VIDEO" === x && I && null != g) {
          var A;
          let e = h(g);
          if (null == e) return null;
          let l =
            null !== (A = n.renderLinkComponent) && void 0 !== A ? A : o.iT;
          return (0, r.jsx)(a.Z, {
            ...v,
            src: y,
            width: d,
            height: f,
            maxWidth: E,
            maxHeight: L,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: l,
            autoPlay: !t,
            alt: _,
            onContextMenu: i,
          });
        }
        if ("IMAGE" === x)
          return I
            ? (0, r.jsx)(l.ZP, {
                ...v,
                src: y,
                width: d,
                height: f,
                shouldLink: !1,
                maxWidth: E,
                maxHeight: L,
                animated: !t && n.animated,
                autoPlay: !t,
                alt: _,
                zoomThumbnailPlaceholder: n.zoomThumbnailPlaceholder,
                onContextMenu: i,
                responsive: !0,
              })
            : (0, r.jsx)("img", {
                src: y,
                alt: _,
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
            return g;
          },
        }),
        t(47120);
      var r = t(200651),
        i = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(481060),
        s = t(585483),
        u = t(212459),
        c = t(73249),
        d = t(730606),
        m = t(860153),
        h = t(981631),
        f = t(388032),
        p = t(267189);
      function g(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: l,
            onIndexChange: g,
            shouldRedactExplicitContent: _,
            shouldHideMediaOptions: x = !1,
            className: C,
            ...S
          } = e,
          [v, E] = i.useState(null != l ? l : 0),
          [L, y] = i.useState(!1);
        i.useEffect(() => {
          if (null != n)
            return (
              s.S.subscribe(h.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                s.S.unsubscribe(h.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]);
        let I = i.useCallback(
            (e) => {
              E(e), null == g || g(e);
            },
            [g],
          ),
          A = i.useMemo(() => ({ zoomed: L, setZoomed: y }), [L]),
          R = t[v];
        return (0, r.jsx)(o.ThemeProvider, {
          theme: h.BRd.DARK,
          children: (e) =>
            (0, r.jsx)(o.ModalRoot, {
              hideShadow: !0,
              className: a()(p.carouselModal, e),
              ...S,
              size: o.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              "aria-label": f.intl.string(f.t.AMTX3t),
              children: (0, r.jsxs)(u.z.Provider, {
                value: A,
                children: [
                  (0, r.jsx)(m.Z, { item: R, onClose: n }),
                  (0, r.jsx)(d.Z, {
                    items: t,
                    startIndex: v,
                    onIndexChange: I,
                    shouldRedactExplicitContent: _,
                    shouldHideMediaOptions: x,
                  }),
                  (0, r.jsx)("div", {
                    className: p.actionButtonContainer,
                    children: (0, r.jsx)(c.Z, {
                      item: R,
                      hideMediaOptions:
                        ("IMAGE" === R.type && null == R.original) || x,
                    }),
                  }),
                ],
              }),
            }),
        });
      }
    },
    860153: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(200651),
        i = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(700582),
        s = t(372900),
        u = t(318713),
        c = t(123145),
        d = t(592125),
        m = t(212541);
      let h = i.memo(function (e) {
        let { message: n } = e,
          t = (0, l.e7)([d.Z], () => d.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, r.jsx)("div", {
              className: m.messageContents,
              children: (0, r.jsxs)(s.Z.Provider, {
                value: t.guild_id,
                children: [
                  (0, r.jsx)(o.Z, { user: n.author }),
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(c.Z, { message: n, channel: t }),
                  }),
                  (0, r.jsx)(u.Z, {
                    timestamp: n.timestamp,
                    className: m.timestamp,
                  }),
                ],
              }),
            });
      });
      function f(e) {
        var n;
        let { item: t, onClose: i } = e,
          l =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, r.jsxs)("div", {
          className: m.topBar,
          children: [
            (0, r.jsx)(a.Button, {
              look: a.ButtonLooks.BLANK,
              color: a.ButtonColors.CUSTOM,
              size: a.ButtonSizes.ICON,
              className: m.closeButton,
              onClick: i,
              children: (0, r.jsx)(a.XLargeIcon, {}),
            }),
            null != l && (0, r.jsx)(h, { message: l }),
          ],
        });
      }
    },
    212459: function (e, n, t) {
      t.d(n, {
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
    609552: function (e, n, t) {
      e.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
        selected: "selected_dda074",
      };
    },
    396779: function (e, n, t) {
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
    159076: function (e, n, t) {
      e.exports = {
        galleryContainer: "galleryContainer_b24655",
        gallery: "gallery_b24655",
        galleryItem: "galleryItem_b24655",
        selected: "selected_b24655",
      };
    },
    767656: function (e, n, t) {
      e.exports = { dimensionlessImage: "dimensionlessImage_a4c000" };
    },
    267189: function (e, n, t) {
      e.exports = {
        carouselModal: "carouselModal_c319f9",
        actionButtonContainer: "actionButtonContainer_c319f9",
      };
    },
    212541: function (e, n, t) {
      e.exports = {
        topBar: "topBar_bf8df0",
        messageContents: "messageContents_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButton: "closeButton_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=316aaf46b454ff0e175d.js.map
