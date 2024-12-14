"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var i = t(147018),
        r = t(863664),
        a = t(299623),
        l = t(345374),
        o = Array;
      i(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return r(a(this), o);
          },
        },
      ),
        l("toReversed");
    },
    700582: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        a = t(481060),
        l = t(372900);
      n.Z = r.memo(function (e) {
        var n, t, o, s;
        let {
            user: u,
            size: c = a.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ...m
          } = e,
          f = r.useContext(l.Z);
        return (0, i.jsx)(a.Avatar, {
          src:
            ((n = u),
            (t = (0, a.getAvatarSize)(c)),
            (o = d),
            (s = f),
            n.getAvatarURL(s, t, o)),
          size: c,
          "aria-label": h ? void 0 : u.username,
          "aria-hidden": h,
          ...m,
        });
      });
    },
    484957: function (e, n, t) {
      t.d(n, {
        j: function () {
          return i.j;
        },
      });
      var i = t(270292);
    },
    817718: function (e, n, t) {
      t.d(n, {
        U3: function () {
          return h;
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
      var i = t(481060),
        r = t(819640),
        a = t(585483),
        l = t(981631);
      let o = () => r.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
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
        h = {
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
        v: function () {
          return l;
        },
      });
      var i = t(817718),
        r = t(981631);
      let a = {
          [r.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [r.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [r.EkH.CLOSE_MODAL]: i.U3,
        },
        l = { [r.EkH.CLOSE_MODAL]: i.U3 };
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return m;
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
          return h;
        },
        sF: function () {
          return s;
        },
        xp: function () {
          return c;
        },
      });
      var i = t(192379),
        r = t(392711),
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
          numDestinationChanges: i,
          numQueryChanges: r,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: r,
        });
      }
      function u(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: r,
          numDestinations: o,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        a.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: i,
          has_context_message: r,
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
        return i.useMemo(
          () =>
            (0, r.once)((e, n, t) => {
              a.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function h() {
        return i.useMemo(
          () =>
            (0, r.once)((e, n) => {
              a.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function m() {
        return i.useMemo(
          () =>
            (0, r.once)((e, n) => {
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
          return m;
        },
        h: function () {
          return h;
        },
      }),
        t(789020);
      var i = t(192379),
        r = t(442837),
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
      function h(e) {
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
      function m(e) {
        let n = (0, r.e7)([o.Z, a.Z, l.Z], () => {
          var n, t;
          if (null == e) return !0;
          let i =
            null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != i &&
              (null === (t = o.Z.getGuild(i)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id))
          );
        });
        return i.useMemo(() => !n && null != e && d(e), [n, e]);
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
      var i = t(200651);
      t(192379);
      var r = t(481060),
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
          onRequestSent: h,
        } = e;
        (0, a.Lb)(o, n, u),
          (0, r.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("19566"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  channelId: o,
                  messageId: n,
                  message: s,
                  initialSelectedDestinations: c,
                  forwardOptions: d,
                  onRequestSent: h,
                });
            },
            { modalKey: l },
          );
      }
      function s() {
        (0, r.closeModal)(l);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: a,
          message: l,
          failedDestinations: o,
          forwardOptions: s,
        } = e;
        (0, r.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, i.jsx)(e, {
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
    378409: function (e, n, t) {
      t.d(n, {
        Jj: function () {
          return d;
        },
        Lz: function () {
          return m;
        },
        gS: function () {
          return h;
        },
        s$: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(829883),
        r = t(378233),
        a = t(591759);
      let l = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, i, r;
          return null === (r = a.Z.toURLSafe(e)) || void 0 === r
            ? void 0
            : null === (i = r.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function d(e) {
        return !((0, r.B0)(e) || (0, i.zt)(e)) && !0;
      }
      function h(e) {
        let n = a.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (l.test(n.hostname) || n.host === o) && d(e) && null != t && s.has(t)
        );
      }
      function m(e) {
        let n = a.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (l.test(n.hostname) || n.host === o) && d(e) && null != t && u.has(t)
        );
      }
      function f(e) {
        let n = a.Z.toURLSafe(e);
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
    480050: function (e, n, t) {
      t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(956664),
        s = t(981656);
      n.Z = r.memo(function (e) {
        let {
            children: n,
            active: t,
            onClick: a,
            className: u,
            style: c,
            width: d,
            height: h,
            maxWidth: m,
            maxHeight: f,
          } = e,
          p = (0, r.useRef)(null),
          [g, x] = (0, r.useState)(!1),
          [_, C] = (0, r.useState)({ x: 0, y: 0 }),
          [S, v] = (0, r.useState)({ x: 0, y: 0 }),
          [y, E] = (0, r.useState)({ x: 0, y: 0 });
        (0, r.useEffect)(() => {
          !t && (E({ x: 0, y: 0 }), v({ x: 0, y: 0 }));
        }, [t]);
        let I = (0, r.useCallback)(
            (e) => {
              if (!t || 0 !== e.button) return;
              e.preventDefault();
              let { clientX: n, clientY: i } = e;
              x(!0), C({ x: n, y: i }), v({ x: n - y.x, y: i - y.y });
            },
            [t, y],
          ),
          b = (0, r.useCallback)(
            (e) => {
              if (!t) {
                0 === e.button && (null == a || a(e));
                return;
              }
              (e.clientX - _.x) ** 2 + (e.clientY - _.y) ** 2 < 400 &&
                (null == a || a(e)),
                x(!1);
            },
            [t, a, _],
          ),
          L = (0, r.useCallback)(
            (e) => {
              var n;
              if (!g) return;
              let t =
                null === (n = p.current) || void 0 === n
                  ? void 0
                  : n.getBoundingClientRect();
              if (null == t) return;
              let [i, r] = [
                t.width > window.innerWidth,
                t.height > window.innerHeight,
              ];
              if (!i && !r) return;
              let { x: a, y: l } = y,
                [o, s] = [i ? e.clientX - S.x : 0, r ? e.clientY - S.y : 0],
                [u, c] = [o - a, s - l];
              i && u + t.x >= 0 && (o -= u + t.x),
                r && c + t.y >= 0 && (s -= c + t.y);
              let [d, h] = [t.x + t.width, t.y + t.height];
              i &&
                u + d <= window.innerWidth &&
                (o = window.innerWidth + a - d),
                r &&
                  c + h <= window.innerHeight &&
                  (s = window.innerHeight + l - h),
                E({ x: o, y: s });
            },
            [g, y, S.x, S.y],
          ),
          M = t ? (0, o.vV)(d, h, m, f) : 1,
          A = (0, r.useCallback)(() => {
            let e = p.current;
            if (null == e) return !1;
            let n = null != M ? M : 1;
            return (
              e.offsetWidth * n > window.innerWidth ||
              e.offsetHeight * n > window.innerHeight
            );
          }, [M]);
        return (0, i.jsx)("div", {
          ref: p,
          onMouseDown: I,
          onMouseUp: b,
          onMouseMove: L,
          onMouseLeave: () => x(!1),
          className: l()(u, s.wrapper, {
            [s.panning]: t && g,
            [s.pannable]: t && A(),
          }),
          style: {
            ...(null != c ? c : {}),
            translate: "".concat(y.x, "px ").concat(y.y, "px"),
            scale: "".concat(null != M ? M : 1),
          },
          children: n,
        });
      });
    },
    73249: function (e, n, t) {
      t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(378409),
        h = t(49012),
        m = t(358085),
        f = t(998502),
        p = t(212459),
        g = t(701865),
        x = t(388032),
        _ = t(197736);
      function C() {
        (0, o.closeModal)(g.U);
      }
      function S(e) {
        let { onClick: n, tooltipText: t, children: r, selected: a, ...s } = e;
        return (0, i.jsx)(o.Tooltip, {
          text: t,
          children: (e) => {
            let { ...t } = e;
            return (0, i.jsx)(o.Button, {
              ...t,
              onClick: n,
              look: o.ButtonLooks.BLANK,
              size: o.ButtonSizes.ICON,
              color: o.ButtonColors.CUSTOM,
              className: l()(_.actionButton, { [_.selected]: a }),
              innerClassName: _.actionButtonInner,
              ...s,
              children: r,
            });
          },
        });
      }
      function v() {
        let { zoomed: e, setZoomed: n } = (0, p.Y)();
        return (0, i.jsx)(S, {
          onClick: () => n(!e),
          tooltipText: e
            ? x.intl.string(x.t.vOFof3)
            : x.intl.string(x.t.Kt4gZ2),
          children: e
            ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {})
            : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {}),
        });
      }
      function y(e) {
        var n, t;
        let { item: a } = e,
          l =
            null === (n = a.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
          d =
            null === (t = a.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          h = r.useCallback(() => {
            if (null != l && null != d) {
              if ("embed" === d.type) {
                (0, c.l8)({
                  messageId: l.id,
                  channelId: l.channel_id,
                  message: l,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                  onRequestSent: C,
                });
                return;
              }
              (0, c.l8)({
                messageId: l.id,
                channelId: l.channel_id,
                message: l,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: C,
              });
            }
          }, [l, d]),
          { canForwardMessages: m } = (0, s.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != l && m && (0, u.h)(l)
          ? (0, i.jsx)(S, {
              onClick: h,
              tooltipText: x.intl.string(x.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function E(e) {
        let { item: n } = e;
        if (
          !(
            "VIDEO" === n.type ||
            (m.isPlatformEmbedded &&
              null == n.children &&
              "IMAGE" === n.type &&
              (0, d.gS)(n.url))
          )
        )
          return null;
        let t = (0, d.s$)(n.url);
        async function r() {
          if (("VIDEO" === n.type && (0, h.q)({ href: t }), "IMAGE" === n.type))
            try {
              await f.ZP.saveImage(t),
                (0, o.showToast)(
                  (0, o.createToast)(
                    x.intl.string(x.t.cqpdJS),
                    o.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              (0, o.showToast)(
                (0, o.createToast)(
                  x.intl.string(x.t["8Ve/S0"]),
                  o.ToastType.FAILURE,
                ),
              );
            }
        }
        return (0, i.jsx)(S, {
          onClick: r,
          tooltipText: x.intl.string(
            "VIDEO" === n.type ? x.t.JVuuz8 : x.t["S/xNKS"],
          ),
          children: (0, i.jsx)(o.DownloadIcon, {}),
        });
      }
      function I(e) {
        var n;
        let { item: t } = e;
        if (!(0, d.Jj)(t.url)) return null;
        let r = (0, d.s$)(
          null !== (n = t.original) && void 0 !== n ? n : t.url,
        );
        return (0, i.jsx)(S, {
          onClick: () => (0, h.q)({ href: r }),
          tooltipText: x.intl.string(x.t.q5jLJC),
          children: (0, i.jsx)(o.WindowLaunchIcon, {}),
        });
      }
      function b(e) {
        let {
          item: n,
          canCopyImage: t,
          canCopyLink: r,
          onClose: a,
          onSelect: l,
        } = e;
        async function s() {
          let e = (0, d.s$)(n.url);
          try {
            await f.ZP.copyImage(e),
              (0, o.showToast)(
                (0, o.createToast)(
                  x.intl.string(x.t.bhUpvL),
                  o.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, o.showToast)(
              (0, o.createToast)(
                x.intl.string(x.t.PTPbj4),
                o.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, i.jsx)(o.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: a,
          onSelect: l,
          children: (0, i.jsxs)(o.MenuGroup, {
            children: [
              t &&
                (0, i.jsx)(
                  o.MenuItem,
                  {
                    label: x.intl.string(x.t.tvUqWl),
                    id: "media-viewer-copy-image",
                    action: s,
                  },
                  "media-viewer-copy-image",
                ),
              r &&
                (0, i.jsx)(
                  o.MenuItem,
                  {
                    id: "media-viewer-copy-link",
                    label: x.intl.string(x.t.WqhZsr),
                    action: function () {
                      var e;
                      let t = (0, d.s$)(
                        null !== (e = n.original) && void 0 !== e ? e : n.url,
                      );
                      m.isPlatformEmbedded
                        ? f.ZP.copy(t)
                        : window.navigator.clipboard.writeText(t),
                        (0, o.showToast)(
                          (0, o.createToast)(
                            x.intl.string(x.t["L/PwZW"]),
                            o.ToastType.SUCCESS,
                          ),
                        );
                    },
                  },
                  "media-viewer-copy-link",
                ),
            ],
          }),
        });
      }
      function L(e) {
        let { item: n } = e,
          [t, a] = r.useState(!1),
          l =
            "IMAGE" === n.type &&
            m.isPlatformEmbedded &&
            null == n.children &&
            f.ZP.canCopyImage() &&
            (0, d.Lz)(n.url),
          s = (0, d.Jj)(n.url);
        return l || s
          ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => a(!1),
              renderPopout: () =>
                (0, i.jsx)(b, {
                  item: n,
                  canCopyImage: l,
                  canCopyLink: s,
                  onClose: () => a(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(S, {
                  tooltipText: x.intl.string(x.t.UKOtz8),
                  onClick: () => a(!t),
                  selected: t,
                  children: (0, i.jsx)(o.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      n.Z = r.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (
          ("IMAGE" === n.type || !t) &&
          (0, i.jsxs)("div", {
            className: _.actionButtons,
            onClick: (e) => e.stopPropagation(),
            children: [
              "IMAGE" === n.type && (0, i.jsx)(v, {}),
              !t &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(y, { item: n }),
                    (0, i.jsx)(E, { item: n }),
                    (0, i.jsx)(I, { item: n }),
                    (0, i.jsx)(L, { item: n }),
                  ],
                }),
            ],
          })
        );
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
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(299608),
        s = t.n(o),
        u = t(752877),
        c = t(484957),
        d = t(481060),
        h = t(95398),
        m = t(247206),
        f = t(134432),
        p = t(169525),
        g = t(585483),
        x = t(212459),
        _ = t(73249),
        C = t(683528),
        S = t(549635),
        v = t(981631),
        y = t(388032),
        E = t(563297);
      function I(e, n) {
        return ((e % n) + n) % n;
      }
      function b(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function L(e) {
        let { children: n, isObscured: t, src: a } = e,
          [o, s] = r.useState(!1),
          u = r.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, i.jsx)(h.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                h.Z,
                {
                  type: h.Z.Types.ATTACHMENT,
                  reason: p.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)("div", {
                        className: l()(E.obscureWrapper, { [E.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                a,
              ),
            })
          : (0, i.jsx)(i.Fragment, { children: n(!1) });
      }
      function M(e) {
        var n;
        let {
            items: t,
            onIndexChange: a,
            startIndex: o = 0,
            shouldRedactExplicitContent: h = !1,
            shouldHideMediaOptions: p = !1,
          } = e,
          [I, M] = r.useState(o),
          A = r.useRef(o),
          [j, O] = r.useState([]),
          { zoomed: T, setZoomed: R } = (0, x.Y)();
        r.useEffect(() => {
          var e, n;
          let i = (((I + 1) % (e = t.length)) + e) % e;
          let r = (((I - 1) % (n = t.length)) + n) % n;
          b(t[i]) && (0, f.po)(t[i].url), b(t[r]) && (0, f.po)(t[r].url);
        }, [I, t]);
        let w = r.useCallback(
          (e) => {
            var n;
            let i = e - A.current;
            M((e = ((e % (n = t.length)) + n) % n)),
              (A.current = e),
              O((e) => [...e, i]),
              null == a || a(e),
              R(!1);
          },
          [a, t, R],
        );
        r.useEffect(() => {
          let e = s()(() => {
              w(A.current + 1);
            }, 300),
            n = s()(() => {
              w(A.current - 1);
            }, 300);
          return (
            g.S.subscribe(v.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(v.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              g.S.unsubscribe(v.CkL.MODAL_CAROUSEL_NEXT, e),
                g.S.unsubscribe(v.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [w, R]);
        let k = t[I],
          P = (0, m.KP)({ type: m.lJ.GenericMedia, media: k }, h),
          D = p
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          N = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(null !== (n = j[j.length - 1]) && void 0 !== n ? n : 0),
          Z = (0, d.useTransition)(k, {
            key: k.url,
            from: { opacity: 0, transform: N[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: N[N.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          B = t.length > 1;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: E.wrapper,
              children: [
                B
                  ? (0, i.jsx)(d.CircleIconButton, {
                      className: l()(E.navPrev, { [E.hidden]: T }),
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: (e) => {
                        e.stopPropagation(),
                          g.S.dispatch(v.CkL.MODAL_CAROUSEL_PREV);
                      },
                      icon: (0, i.jsx)(c.j, {}),
                      tooltip: y.intl.string(y.t.vgfxaG),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, i.jsx)("div", {
                  className: E.mediaContainer,
                  children: Z((e, n) =>
                    (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)(
                        u.animated.div,
                        {
                          style: e,
                          className: E.mediaWrapper,
                          children: (0, i.jsx)(L, {
                            isObscured: !T && P,
                            src: n.url,
                            children: (e) =>
                              (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)("div", {
                                  onClick: (e) => e.stopPropagation(),
                                  className: l()(E.innerWrapper, {
                                    [E.shifted]: T && B,
                                  }),
                                  children: (0, i.jsx)(S.Z, {
                                    media: n,
                                    obscured: e,
                                    onContextMenu: D,
                                  }),
                                }),
                              }),
                          }),
                        },
                        n.url,
                      ),
                    }),
                  ),
                }),
                B
                  ? (0, i.jsx)(d.CircleIconButton, {
                      className: l()(E.navNext, { [E.hidden]: T }),
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: (e) => {
                        e.stopPropagation(),
                          g.S.dispatch(v.CkL.MODAL_CAROUSEL_NEXT);
                      },
                      icon: (0, i.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: y.intl.string(y.t.XiOHRU),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)("div", {
              className: l()(E.chromeWrapper, { [E.hidden]: T }),
              children: [
                B &&
                  (0, i.jsx)(C.Z, {
                    items: t,
                    currentIndex: I,
                    onGalleryItemClick: w,
                  }),
                (0, i.jsx)("div", {
                  className: E.actionButtonContainer,
                  children: (0, i.jsx)(_.Z, {
                    item: k,
                    hideMediaOptions:
                      ("IMAGE" === k.type && null == k.original) || p,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        h = t(217702),
        m = t(388032),
        f = t(52131);
      function p(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let g = r.memo(function (e) {
        var n;
        let { item: t } = e;
        let r =
          "IMAGE" === (n = t).type
            ? (0, c.q)({ proxyURL: n.proxyUrl, url: n.url })
            : "VIDEO" === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
        return null == r
          ? null
          : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: r,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: h.hV.MOSAIC,
            });
      });
      function x(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: a } = e,
          u = r.useRef(null);
        return (
          r.useLayoutEffect(() => {
            let e = document.getElementById(p(t));
            null != u.current &&
              null != e &&
              u.current.scrollIntoViewNode({
                node: e,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, i.jsx)("div", {
            className: f.galleryContainer,
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: f.gallery,
              ref: u,
              onClick: (e) => e.stopPropagation(),
              children: n.map((e, r) => {
                let s = r === t,
                  u = s ? m.t["qv/U5e"] : m.t.zviMAA;
                return (0, i.jsxs)(
                  o.Clickable,
                  {
                    id: p(r),
                    className: f.galleryItem,
                    "aria-label": m.intl.formatToPlainString(u, {
                      pageNumber: r + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => a(r),
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(f.galleryItemOverlay, {
                          [f.selected]: s,
                        }),
                      }),
                      (0, i.jsx)(g, { item: e }),
                    ],
                  },
                  r,
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
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(378409),
        s = t(124347),
        u = t(80966),
        c = t(480050),
        d = t(524444),
        h = t(52824),
        m = t(956664),
        f = t(589530),
        p = t(591759),
        g = t(212459),
        x = t(427244);
      function _(e) {
        let n = p.Z.toURLSafe(e);
        return null == n
          ? null
          : (n.searchParams.append("format", "webp"), n.toString());
      }
      n.Z = r.memo(function (e) {
        let n,
          { media: t, obscured: r = !1, onContextMenu: a } = e,
          {
            width: C,
            height: S,
            url: v,
            proxyUrl: y,
            alt: E,
            type: I,
            maxWidth: b,
            maxHeight: L,
            ...M
          } = t,
          { zoomed: A, setZoomed: j } = (0, g.Y)(),
          O = (function (e, n, t) {
            return e && p.Z.isDiscordUrl(n, !0)
              ? (0, o.s$)(n)
              : (0, h.q)({ proxyURL: t, url: n });
          })(A, v, y),
          { width: T, height: R } = (0, m.zp)(
            null != C ? C : 0,
            null != S ? S : 0,
          ),
          w = !(null == C || 0 === C || null == S || 0 === S);
        if ("VIDEO" === I && w && null != y) {
          var k;
          let e = _(y);
          if (null == e) return null;
          let n =
            null !== (k = t.renderLinkComponent) && void 0 !== k ? k : d.iT;
          return (0, i.jsx)(u.Z, {
            ...M,
            src: O,
            width: C,
            height: S,
            maxWidth: T,
            maxHeight: R,
            poster: e,
            naturalWidth: C,
            naturalHeight: S,
            volume: f.FC,
            autoMute: f.rs,
            onVolumeChange: f.jA,
            onMute: f.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: E,
            onContextMenu: a,
          });
        }
        return (
          "IMAGE" === I &&
            (n = w
              ? (0, i.jsx)(s.ZP, {
                  ...M,
                  src: O,
                  width: C,
                  height: S,
                  shouldLink: !1,
                  maxWidth: T,
                  maxHeight: R,
                  useFullWidth: !0,
                  animated: !r && t.animated,
                  autoPlay: !r,
                  alt: E,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: a,
                })
              : (0, i.jsx)("img", {
                  src: O,
                  alt: E,
                  onContextMenu: a,
                  className: x.dimensionlessImage,
                })),
          null != n
            ? (0, i.jsx)(c.Z, {
                width: C,
                height: S,
                maxWidth: T,
                maxHeight: R,
                active: A,
                className: l()(x.wrapper, { [x.zoomed]: A }),
                onClick: () => j(!A),
                children: n,
              })
            : null
        );
      });
    },
    97594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(481060),
        s = t(376641),
        u = t(714338),
        c = t(585483),
        d = t(212459),
        h = t(730606),
        m = t(860153),
        f = t(981631),
        p = t(388032),
        g = t(176598);
      function x(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: a,
            onIndexChange: x,
            shouldRedactExplicitContent: _,
            shouldHideMediaOptions: C = !1,
            className: S,
            transitionState: v,
            ...y
          } = e,
          [E, I] = r.useState(null != a ? a : 0),
          [b, L] = r.useState(!1),
          [M, A] = r.useState(!0),
          [j, O] = r.useState(void 0);
        r.useEffect(() => {
          if (null != n)
            return (
              c.S.subscribe(f.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                c.S.unsubscribe(f.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]),
          r.useEffect(
            () => (
              v === o.ModalTransitionState.ENTERED &&
                (u.Z.disable(), u.Z.enableTemp(s.P)),
              v === o.ModalTransitionState.HIDDEN &&
                (u.Z.disable(), u.Z.enableTemp(s.v)),
              () => {
                u.Z.disableTemp();
              }
            ),
            [v],
          );
        let T = r.useCallback(
            (e) => {
              I(e), null == x || x(e);
            },
            [x],
          ),
          R = r.useMemo(
            () => ({
              zoomed: b,
              setZoomed: L,
              topBarVisible: M,
              setTopBarVisible: A,
            }),
            [b, M],
          ),
          w = r.useCallback(() => {
            !M && A(!0), clearTimeout(j), O(setTimeout(() => A(!1), 1e3));
          }, [M, j]),
          k = r.useCallback(() => {
            w(), null == n || n();
          }, [w, n]),
          P = t[E];
        return (0, i.jsx)(o.ThemeProvider, {
          theme: f.BRd.DARK,
          children: (e) =>
            (0, i.jsx)(o.ModalRoot, {
              hideShadow: !0,
              className: l()(g.carouselModal, e),
              transitionState: v,
              ...y,
              size: o.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              onMouseMove: w,
              onClick: k,
              "aria-label": p.intl.string(p.t.AMTX3t),
              children: (0, i.jsxs)(d.z.Provider, {
                value: R,
                children: [
                  (0, i.jsx)(m.Z, { item: P, onClose: n }),
                  (0, i.jsx)(h.Z, {
                    items: t,
                    startIndex: E,
                    onIndexChange: T,
                    shouldRedactExplicitContent: _,
                    shouldHideMediaOptions: C,
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
          return x;
        },
      });
      var i = t(200651),
        r = t(192379),
        a = t(120356),
        l = t.n(a),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        h = t(123145),
        m = t(592125),
        f = t(212459),
        p = t(795938);
      let g = r.memo(function (e) {
        let { message: n } = e,
          t = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: p.messageContents,
                onClick: (e) => e.stopPropagation(),
                children: (0, i.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                    (0, i.jsx)(u.Z, { user: n.author }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(h.Z, { message: n, channel: t }),
                    }),
                    (0, i.jsx)(d.Z, {
                      timestamp: n.timestamp,
                      className: p.timestamp,
                    }),
                  ],
                }),
              }),
            });
      });
      function x(e) {
        var n;
        let { item: t, onClose: r } = e,
          { zoomed: a, topBarVisible: o } = (0, f.Y)(),
          u =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, i.jsxs)("div", {
          className: l()(p.topBar, { [p.hidden]: a && !o, [p.zoomed]: a }),
          children: [
            (0, i.jsx)(s.Button, {
              look: s.ButtonLooks.BLANK,
              color: s.ButtonColors.CUSTOM,
              size: s.ButtonSizes.ICON,
              className: p.closeButton,
              innerClassName: p.closeButtonInner,
              onClick: r,
              children: (0, i.jsx)(s.XSmallIcon, {}),
            }),
            null != u && (0, i.jsx)(g, { message: u }),
          ],
        });
      }
    },
    212459: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return a;
        },
        z: function () {
          return r;
        },
      });
      var i = t(192379);
      let r = (0, i.createContext)({
        zoomed: !1,
        setZoomed: () => {},
        topBarVisible: !1,
        setTopBarVisible: () => {},
      });
      function a() {
        return (0, i.useContext)(r);
      }
    },
    52824: function (e, n, t) {
      t.d(n, {
        q: function () {
          return i;
        },
      });
      function i(e) {
        let { proxyURL: n, url: t } = e;
        return null != n && "" !== n ? n : t;
      }
    },
    981656: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_ace4fb",
        pannable: "pannable_ace4fb",
        panning: "panning_ace4fb",
      };
    },
    197736: function (e, n, t) {
      e.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
        selected: "selected_dda074",
        actionButtonInner: "actionButtonInner_dda074",
      };
    },
    563297: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24281",
        mediaContainer: "mediaContainer_a24281",
        mediaWrapper: "mediaWrapper_a24281",
        navPrev: "navPrev_a24281 nav_a24281",
        navNext: "navNext_a24281 nav_a24281",
        obscureWrapper: "obscureWrapper_a24281",
        obscure: "obscure_a24281",
        chromeWrapper: "chromeWrapper_a24281",
        hidden: "hidden_a24281",
        actionButtonContainer: "actionButtonContainer_a24281",
        innerWrapper: "innerWrapper_a24281",
        shifted: "shifted_a24281",
      };
    },
    52131: function (e, n, t) {
      e.exports = {
        galleryContainer: "galleryContainer_b24655",
        gallery: "gallery_b24655",
        galleryItemOverlay: "galleryItemOverlay_b24655",
        selected: "selected_b24655",
        galleryItem: "galleryItem_b24655",
      };
    },
    427244: function (e, n, t) {
      e.exports = {
        dimensionlessImage: "dimensionlessImage_a4c000",
        wrapper: "wrapper_a4c000",
        zoomed: "zoomed_a4c000",
      };
    },
    176598: function (e, n, t) {
      e.exports = { carouselModal: "carouselModal_c319f9" };
    },
    795938: function (e, n, t) {
      e.exports = {
        topBar: "topBar_bf8df0",
        zoomed: "zoomed_bf8df0",
        hidden: "hidden_bf8df0",
        messageContents: "messageContents_bf8df0",
        closeButton: "closeButton_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButtonInner: "closeButtonInner_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=39e290702d3c91e6c103.js.map
