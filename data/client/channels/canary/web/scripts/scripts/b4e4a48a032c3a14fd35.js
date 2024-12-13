"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    700582: function (e, n, t) {
      var i = t(200651),
        a = t(192379),
        r = t(481060),
        l = t(372900);
      n.Z = a.memo(function (e) {
        var n, t, o, s;
        let {
            user: u,
            size: c = r.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ...m
          } = e,
          p = a.useContext(l.Z);
        return (0, i.jsx)(r.Avatar, {
          src:
            ((n = u),
            (t = (0, r.getAvatarSize)(c)),
            (o = d),
            (s = p),
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
        a = t(819640),
        r = t(585483),
        l = t(981631);
      let o = () => a.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        h = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (r.S.hasSubscribers(l.CkL.MODAL_CLOSE))
              return r.S.dispatch(l.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
        P: function () {
          return r;
        },
        v: function () {
          return l;
        },
      });
      var i = t(817718),
        a = t(981631);
      let r = {
          [a.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [a.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [a.EkH.CLOSE_MODAL]: i.U3,
        },
        l = { [a.EkH.CLOSE_MODAL]: i.U3 };
    },
    822869: function (e, n, t) {
      t.d(n, {
        Ad: function () {
          return f;
        },
        Lb: function () {
          return u;
        },
        ZF: function () {
          return m;
        },
        gP: function () {
          return d;
        },
        mh: function () {
          return p;
        },
        sF: function () {
          return c;
        },
        xp: function () {
          return h;
        },
      });
      var i = t(192379),
        a = t(392711),
        r = t(367907),
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
          numDestinationChanges: i,
          numQueryChanges: a,
        } = e;
        o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: a,
        });
      }
      function d(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: a,
          numDestinations: u,
          numDestinationChanges: c,
          numQueryChanges: d,
          anyDestinationHasSlowmode: h,
          source: m,
        } = e;
        if (
          (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: t,
            has_error: i,
            has_context_message: a,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: h,
          }),
          "message-shortcut" === m)
        ) {
          let e = l.Z.getChannel(n);
          o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: t,
            ...(0, r.hH)(null == e ? void 0 : e.guild_id),
            ...(0, r.v_)(e),
          });
        }
      }
      function h(e, n) {
        o.default.track(s.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function m() {
        return i.useMemo(
          () =>
            (0, a.once)((e, n, t) => {
              o.default.track(s.rMx.FORWARD_ADD_RECIPIENT, {
                channel_id: e,
                message_id: n,
                has_query: t,
              });
            }),
          [],
        );
      }
      function p() {
        return i.useMemo(
          () =>
            (0, a.once)((e, n) => {
              o.default.track(s.rMx.FORWARD_EDIT_SEARCH, {
                channel_id: e,
                message_id: n,
              });
            }),
          [],
        );
      }
      function f() {
        return i.useMemo(
          () =>
            (0, a.once)((e, n) => {
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
          return m;
        },
        h: function () {
          return h;
        },
      }),
        t(789020);
      var i = t(192379),
        a = t(442837),
        r = t(430198),
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
          !(null != t && r.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function m(e) {
        let n = (0, a.e7)([o.Z, r.Z, l.Z], () => {
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
            (null != i && r.Z.isChannelOrThreadParentGated(i, e.channel_id))
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
      var a = t(481060),
        r = t(822869);
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
        (0, r.Lb)(o, n, u),
          (0, a.openModalLazy)(
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
        (0, a.closeModal)(l);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: r,
          message: l,
          failedDestinations: o,
          forwardOptions: s,
        } = e;
        (0, a.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              messageId: n,
              channelId: r,
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
          return p;
        },
      }),
        t(47120);
      var i = t(829883),
        a = t(378233),
        r = t(591759);
      let l = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, i, a;
          return null === (a = r.Z.toURLSafe(e)) || void 0 === a
            ? void 0
            : null === (i = a.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function d(e) {
        return !((0, a.B0)(e) || (0, i.zt)(e)) && !0;
      }
      function h(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (l.test(n.hostname) || n.host === o) && d(e) && null != t && s.has(t)
        );
      }
      function m(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (l.test(n.hostname) || n.host === o) && d(e) && null != t && u.has(t)
        );
      }
      function p(e) {
        let n = r.Z.toURLSafe(e);
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
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(956664),
        s = t(981656);
      n.Z = a.memo(function (e) {
        let {
            children: n,
            active: t,
            onClick: r,
            className: u,
            style: c,
            width: d,
            height: h,
            maxWidth: m,
            maxHeight: p,
          } = e,
          f = (0, a.useRef)(null),
          [g, _] = (0, a.useState)(!1),
          [x, C] = (0, a.useState)({ x: 0, y: 0 }),
          [S, v] = (0, a.useState)({ x: 0, y: 0 }),
          [E, I] = (0, a.useState)({ x: 0, y: 0 });
        (0, a.useEffect)(() => {
          !t && (I({ x: 0, y: 0 }), v({ x: 0, y: 0 }));
        }, [t]);
        let y = (0, a.useCallback)(
            (e) => {
              if (!t || 0 !== e.button) return;
              e.preventDefault();
              let { clientX: n, clientY: i } = e;
              _(!0), C({ x: n, y: i }), v({ x: n - E.x, y: i - E.y });
            },
            [t, E],
          ),
          b = (0, a.useCallback)(
            (e) => {
              if (!t) {
                0 === e.button && (null == r || r(e));
                return;
              }
              (e.clientX - x.x) ** 2 + (e.clientY - x.y) ** 2 < 400 &&
                (null == r || r(e)),
                _(!1);
            },
            [t, r, x],
          ),
          L = (0, a.useCallback)(
            (e) => {
              var n;
              if (!g) return;
              let t =
                null === (n = f.current) || void 0 === n
                  ? void 0
                  : n.getBoundingClientRect();
              if (null == t) return;
              let [i, a] = [
                t.width > window.innerWidth,
                t.height > window.innerHeight,
              ];
              if (!i && !a) return;
              let { x: r, y: l } = E,
                [o, s] = [i ? e.clientX - S.x : 0, a ? e.clientY - S.y : 0],
                [u, c] = [o - r, s - l];
              i && u + t.x >= 0 && (o -= u + t.x),
                a && c + t.y >= 0 && (s -= c + t.y);
              let [d, h] = [t.x + t.width, t.y + t.height];
              i &&
                u + d <= window.innerWidth &&
                (o = window.innerWidth + r - d),
                a &&
                  c + h <= window.innerHeight &&
                  (s = window.innerHeight + l - h),
                I({ x: o, y: s });
            },
            [g, E, S.x, S.y],
          ),
          M = t ? (0, o.vV)(d, h, m, p) : 1,
          A = (0, a.useCallback)(() => {
            let e = f.current;
            if (null == e) return !1;
            let n = null != M ? M : 1;
            return (
              e.offsetWidth * n > window.innerWidth ||
              e.offsetHeight * n > window.innerHeight
            );
          }, [M]);
        return (0, i.jsx)("div", {
          ref: f,
          onMouseDown: y,
          onMouseUp: b,
          onMouseMove: L,
          onMouseLeave: () => _(!1),
          className: l()(u, s.wrapper, {
            [s.panning]: t && g,
            [s.pannable]: t && A(),
          }),
          style: {
            ...(null != c ? c : {}),
            translate: "".concat(E.x, "px ").concat(E.y, "px"),
            scale: "".concat(null != M ? M : 1),
          },
          children: n,
        });
      });
    },
    73249: function (e, n, t) {
      t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(378409),
        h = t(49012),
        m = t(358085),
        p = t(998502),
        f = t(212459),
        g = t(701865),
        _ = t(388032),
        x = t(197736);
      function C() {
        (0, o.closeModal)(g.U);
      }
      function S(e) {
        let { onClick: n, tooltipText: t, children: a, selected: r, ...s } = e;
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
              className: l()(x.actionButton, { [x.selected]: r }),
              innerClassName: x.actionButtonInner,
              ...s,
              children: a,
            });
          },
        });
      }
      function v() {
        let { zoomed: e, setZoomed: n } = (0, f.Y)();
        return (0, i.jsx)(S, {
          onClick: () => n(!e),
          tooltipText: e
            ? _.intl.string(_.t.vOFof3)
            : _.intl.string(_.t.Kt4gZ2),
          children: e
            ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {})
            : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {}),
        });
      }
      function E(e) {
        var n, t;
        let { item: r } = e,
          l =
            null === (n = r.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
          d =
            null === (t = r.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          h = a.useCallback(() => {
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
              tooltipText: _.intl.string(_.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function I(e) {
        let { item: n } = e,
          [t, r] = a.useState(!1);
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
        let l = (0, d.s$)(n.url);
        async function s() {
          if (
            ("VIDEO" === n.type && (0, h.q)({ href: l }), "IMAGE" === n.type)
          ) {
            r(!0);
            try {
              await p.ZP.saveImage(l),
                (0, o.showToast)(
                  (0, o.createToast)(
                    _.intl.string(_.t.cqpdJS),
                    o.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              (0, o.showToast)(
                (0, o.createToast)(
                  _.intl.string(_.t["8Ve/S0"]),
                  o.ToastType.FAILURE,
                ),
              );
            } finally {
              r(!1);
            }
          }
        }
        return (0, i.jsx)(S, {
          onClick: s,
          tooltipText: _.intl.string(
            "VIDEO" === n.type ? _.t.JVuuz8 : _.t["S/xNKS"],
          ),
          submitting: t,
          children: (0, i.jsx)(o.DownloadIcon, {}),
        });
      }
      function y(e) {
        var n;
        let { item: t } = e;
        if (!(0, d.Jj)(t.url)) return null;
        let a = (0, d.s$)(
          null !== (n = t.original) && void 0 !== n ? n : t.url,
        );
        return (0, i.jsx)(S, {
          onClick: () => (0, h.q)({ href: a }),
          tooltipText: _.intl.string(_.t.q5jLJC),
          children: (0, i.jsx)(o.WindowLaunchIcon, {}),
        });
      }
      function b(e) {
        let {
          item: n,
          canCopyImage: t,
          canCopyLink: a,
          onClose: r,
          onSelect: l,
        } = e;
        async function s() {
          let e = (0, d.s$)(n.url);
          try {
            await p.ZP.copyImage(e),
              (0, o.showToast)(
                (0, o.createToast)(
                  _.intl.string(_.t.bhUpvL),
                  o.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, o.showToast)(
              (0, o.createToast)(
                _.intl.string(_.t.PTPbj4),
                o.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, i.jsx)(o.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: r,
          onSelect: l,
          children: (0, i.jsxs)(o.MenuGroup, {
            children: [
              t &&
                (0, i.jsx)(
                  o.MenuItem,
                  {
                    label: _.intl.string(_.t.tvUqWl),
                    id: "media-viewer-copy-image",
                    action: s,
                  },
                  "media-viewer-copy-image",
                ),
              a &&
                (0, i.jsx)(
                  o.MenuItem,
                  {
                    id: "media-viewer-copy-link",
                    label: _.intl.string(_.t.WqhZsr),
                    action: function () {
                      var e;
                      let t = (0, d.s$)(
                        null !== (e = n.original) && void 0 !== e ? e : n.url,
                      );
                      m.isPlatformEmbedded
                        ? p.ZP.copy(t)
                        : window.navigator.clipboard.writeText(t),
                        (0, o.showToast)(
                          (0, o.createToast)(
                            _.intl.string(_.t["L/PwZW"]),
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
          [t, r] = a.useState(!1),
          l =
            "IMAGE" === n.type &&
            m.isPlatformEmbedded &&
            null == n.children &&
            p.ZP.canCopyImage() &&
            (0, d.Lz)(n.url),
          s = (0, d.Jj)(n.url);
        return l || s
          ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              renderPopout: () =>
                (0, i.jsx)(b, {
                  item: n,
                  canCopyImage: l,
                  canCopyLink: s,
                  onClose: () => r(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(S, {
                  tooltipText: _.intl.string(_.t.UKOtz8),
                  onClick: () => r(!t),
                  selected: t,
                  children: (0, i.jsx)(o.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      n.Z = a.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (
          ("IMAGE" === n.type || !t) &&
          (0, i.jsxs)("div", {
            className: x.actionButtons,
            onClick: (e) => e.stopPropagation(),
            children: [
              "IMAGE" === n.type && (0, i.jsx)(v, {}),
              !t &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(E, { item: n }),
                    (0, i.jsx)(I, { item: n }),
                    (0, i.jsx)(y, { item: n }),
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
          return L;
        },
      }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(299608),
        s = t.n(o),
        u = t(484957),
        c = t(481060),
        d = t(95398),
        h = t(247206),
        m = t(134432),
        p = t(169525),
        f = t(585483),
        g = t(212459),
        _ = t(73249),
        x = t(683528),
        C = t(549635),
        S = t(981631),
        v = t(388032),
        E = t(563297);
      function I(e, n) {
        return ((e % n) + n) % n;
      }
      function y(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function b(e) {
        let { children: n, isObscured: t, src: r } = e,
          [o, s] = a.useState(!1),
          u = a.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                d.Z,
                {
                  type: d.Z.Types.ATTACHMENT,
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
                r,
              ),
            })
          : (0, i.jsx)(i.Fragment, { children: n(!1) });
      }
      function L(e) {
        let {
            items: n,
            onIndexChange: t,
            startIndex: r = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: d = !1,
          } = e,
          [p, I] = a.useState(r),
          L = a.useRef(r),
          { zoomed: M, setZoomed: A } = (0, g.Y)();
        a.useEffect(() => {
          var e, t;
          let i = (((p + 1) % (e = n.length)) + e) % e;
          let a = (((p - 1) % (t = n.length)) + t) % t;
          y(n[i]) && (0, m.po)(n[i].url), y(n[a]) && (0, m.po)(n[a].url);
        }, [p, n]);
        let j = a.useCallback(
          (e) => {
            var i;
            I((e = ((e % (i = n.length)) + i) % i)),
              (L.current = e),
              null == t || t(e),
              A(!1);
          },
          [t, n, A],
        );
        a.useEffect(() => {
          let e = s()(() => {
              j(L.current + 1);
            }, 300),
            n = s()(() => {
              j(L.current - 1);
            }, 300);
          return (
            f.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            f.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              f.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
                f.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [j, A]);
        let O = n[p],
          T = (0, h.KP)({ type: h.lJ.GenericMedia, media: O }, o),
          R = d
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          w = n.length > 1;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: E.wrapper,
              children: [
                w
                  ? (0, i.jsx)("div", {
                      className: "fadeInWrapper",
                      children: (0, i.jsx)(c.CircleIconButton, {
                        className: l()(E.navPrev, { [E.hidden]: M }),
                        size: c.CircleIconButtonSizes.SIZE_36,
                        onClick: (e) => {
                          e.stopPropagation(),
                            f.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                        },
                        icon: (0, i.jsx)(u.j, {}),
                        tooltip: v.intl.string(v.t.vgfxaG),
                        color: c.CircleIconButtonColors.PRIMARY,
                      }),
                    })
                  : null,
                (0, i.jsx)("div", {
                  className: E.mediaContainer,
                  children: (0, i.jsx)(
                    "div",
                    {
                      className: E.mediaWrapper,
                      children: (0, i.jsx)(b, {
                        isObscured: !M && T,
                        src: O.url,
                        children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsx)("div", {
                              onClick: (e) => e.stopPropagation(),
                              className: l()(E.innerWrapper, {
                                [E.shifted]: M && w,
                              }),
                              children: (0, i.jsx)(C.Z, {
                                media: O,
                                obscured: e,
                                onContextMenu: R,
                              }),
                            }),
                          }),
                      }),
                    },
                    O.url,
                  ),
                }),
                w
                  ? (0, i.jsx)("div", {
                      className: "fadeInWrapper",
                      children: (0, i.jsx)(c.CircleIconButton, {
                        className: l()(E.navNext, { [E.hidden]: M }),
                        size: c.CircleIconButtonSizes.SIZE_36,
                        onClick: (e) => {
                          e.stopPropagation(),
                            f.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                        },
                        icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                        tooltip: v.intl.string(v.t.XiOHRU),
                        color: c.CircleIconButtonColors.PRIMARY,
                      }),
                    })
                  : null,
              ],
            }),
            (0, i.jsx)("div", {
              className: l()("fadeInWrapper", E.fadeInWrapper),
              children: (0, i.jsxs)("div", {
                className: l()(E.chromeWrapper, { [E.hidden]: M }),
                children: [
                  w &&
                    (0, i.jsx)(x.Z, {
                      items: n,
                      currentIndex: p,
                      onGalleryItemClick: j,
                    }),
                  (0, i.jsx)("div", {
                    className: E.actionButtonContainer,
                    children: (0, i.jsx)(_.Z, {
                      item: O,
                      hideMediaOptions:
                        ("IMAGE" === O.type && null == O.original) || d,
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        h = t(217702),
        m = t(388032),
        p = t(52131);
      function f(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let g = a.memo(function (e) {
        var n;
        let { item: t } = e;
        let a =
          "IMAGE" === (n = t).type
            ? (0, c.q)({ proxyURL: n.proxyUrl, url: n.url })
            : "VIDEO" === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
        return null == a
          ? null
          : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: a,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: h.hV.MOSAIC,
            });
      });
      function _(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: r } = e,
          u = a.useRef(null);
        return (
          a.useLayoutEffect(() => {
            let e = document.getElementById(f(t));
            null != u.current &&
              null != e &&
              u.current.scrollIntoViewNode({
                node: e,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, i.jsx)("div", {
            className: p.galleryContainer,
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: p.gallery,
              ref: u,
              onClick: (e) => e.stopPropagation(),
              children: n.map((e, a) => {
                let s = a === t,
                  u = s ? m.t["qv/U5e"] : m.t.zviMAA;
                return (0, i.jsxs)(
                  o.Clickable,
                  {
                    id: f(a),
                    className: p.galleryItem,
                    "aria-label": m.intl.formatToPlainString(u, {
                      pageNumber: a + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => r(a),
                    children: [
                      (0, i.jsx)("div", {
                        className: l()(p.galleryItemOverlay, {
                          [p.selected]: s,
                        }),
                      }),
                      (0, i.jsx)(g, { item: e }),
                    ],
                  },
                  a,
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
          return x;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(378409),
        s = t(124347),
        u = t(80966),
        c = t(480050),
        d = t(524444),
        h = t(52824),
        m = t(956664),
        p = t(589530),
        f = t(591759),
        g = t(212459),
        _ = t(427244);
      function x(e) {
        let n = f.Z.toURLSafe(e);
        return null == n
          ? null
          : (n.searchParams.append("format", "webp"), n.toString());
      }
      n.Z = a.memo(function (e) {
        let n,
          { media: t, obscured: a = !1, onContextMenu: r } = e,
          {
            width: C,
            height: S,
            url: v,
            proxyUrl: E,
            alt: I,
            type: y,
            maxWidth: b,
            maxHeight: L,
            ...M
          } = t,
          { zoomed: A, setZoomed: j } = (0, g.Y)(),
          O = (function (e, n, t) {
            return e && f.Z.isDiscordUrl(n, !0)
              ? (0, o.s$)(n)
              : (0, h.q)({ proxyURL: t, url: n });
          })(A, v, E),
          { width: T, height: R } = (0, m.zp)(
            null != C ? C : 0,
            null != S ? S : 0,
          ),
          w = !(null == C || 0 === C || null == S || 0 === S);
        if ("VIDEO" === y && w && null != E) {
          var N;
          let e = x(E);
          if (null == e) return null;
          let n =
            null !== (N = t.renderLinkComponent) && void 0 !== N ? N : d.iT;
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
            volume: p.FC,
            autoMute: p.rs,
            onVolumeChange: p.jA,
            onMute: p.Zj,
            renderLinkComponent: n,
            autoPlay: !a,
            alt: I,
            onContextMenu: r,
          });
        }
        return (
          "IMAGE" === y &&
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
                  animated: !a && t.animated,
                  autoPlay: !a,
                  alt: I,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: r,
                })
              : (0, i.jsx)("img", {
                  src: O,
                  alt: I,
                  onContextMenu: r,
                  className: _.dimensionlessImage,
                })),
          null != n
            ? (0, i.jsx)(c.Z, {
                width: C,
                height: S,
                maxWidth: T,
                maxHeight: R,
                active: A,
                className: l()(_.wrapper, { [_.zoomed]: A }),
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
            return _;
          },
        }),
        t(47120);
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(481060),
        s = t(376641),
        u = t(714338),
        c = t(585483),
        d = t(212459),
        h = t(730606),
        m = t(860153),
        p = t(981631),
        f = t(388032),
        g = t(176598);
      function _(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: r,
            onIndexChange: _,
            shouldRedactExplicitContent: x,
            shouldHideMediaOptions: C = !1,
            className: S,
            transitionState: v,
            ...E
          } = e,
          [I, y] = a.useState(null != r ? r : 0),
          [b, L] = a.useState(!1),
          [M, A] = a.useState(!0),
          [j, O] = a.useState(void 0);
        a.useEffect(() => {
          if (null != n)
            return (
              c.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                c.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]),
          a.useEffect(
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
        let T = a.useCallback(
            (e) => {
              y(e), null == _ || _(e);
            },
            [_],
          ),
          R = a.useMemo(
            () => ({
              zoomed: b,
              setZoomed: L,
              topBarVisible: M,
              setTopBarVisible: A,
            }),
            [b, M],
          ),
          w = a.useCallback(() => {
            !M && A(!0), clearTimeout(j), O(setTimeout(() => A(!1), 1e3));
          }, [M, j]),
          N = a.useCallback(() => {
            w(), null == n || n();
          }, [w, n]),
          k = t[I];
        return (0, i.jsx)(o.ThemeProvider, {
          theme: p.BRd.DARK,
          children: (e) =>
            (0, i.jsx)(o.ModalRoot, {
              hideShadow: !0,
              className: l()(g.carouselModal, e, {
                [g.opening]: null != v && v <= o.ModalTransitionState.ENTERED,
                [g.closing]: null != v && v >= o.ModalTransitionState.EXITING,
              }),
              transitionState: v,
              ...E,
              size: o.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              onMouseMove: w,
              onClick: N,
              "aria-label": f.intl.string(f.t.AMTX3t),
              children: (0, i.jsxs)(d.z.Provider, {
                value: R,
                children: [
                  (0, i.jsx)(m.Z, { item: k, onClose: n }),
                  (0, i.jsx)(h.Z, {
                    items: t,
                    startIndex: I,
                    onIndexChange: T,
                    shouldRedactExplicitContent: x,
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
          return _;
        },
      });
      var i = t(200651),
        a = t(192379),
        r = t(120356),
        l = t.n(r),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        h = t(123145),
        m = t(592125),
        p = t(212459),
        f = t(795938);
      let g = a.memo(function (e) {
        let { message: n } = e,
          t = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: f.messageContents,
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
                      className: f.timestamp,
                    }),
                  ],
                }),
              }),
            });
      });
      function _(e) {
        var n;
        let { item: t, onClose: a } = e,
          { zoomed: r, topBarVisible: o } = (0, p.Y)(),
          u =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, i.jsx)("div", {
          className: "fadeInWrapper",
          children: (0, i.jsxs)("div", {
            className: l()(f.topBar, { [f.hidden]: r && !o }),
            children: [
              (0, i.jsx)(s.Button, {
                look: s.ButtonLooks.BLANK,
                color: s.ButtonColors.CUSTOM,
                size: s.ButtonSizes.ICON,
                className: f.closeButton,
                innerClassName: f.closeButtonInner,
                onClick: a,
                children: (0, i.jsx)(s.XSmallIcon, {}),
              }),
              null != u && (0, i.jsx)(g, { message: u }),
            ],
          }),
        });
      }
    },
    212459: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
        z: function () {
          return a;
        },
      });
      var i = t(192379);
      let a = (0, i.createContext)({
        zoomed: !1,
        setZoomed: () => {},
        topBarVisible: !1,
        setTopBarVisible: () => {},
      });
      function r() {
        return (0, i.useContext)(a);
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
        fadeInWrapper: "fadeInWrapper_a24281",
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
      e.exports = {
        carouselModal: "carouselModal_c319f9",
        opening: "opening_c319f9",
        closing: "closing_c319f9",
      };
    },
    795938: function (e, n, t) {
      e.exports = {
        topBar: "topBar_bf8df0",
        hidden: "hidden_bf8df0",
        messageContents: "messageContents_bf8df0",
        closeButton: "closeButton_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButtonInner: "closeButtonInner_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=b4e4a48a032c3a14fd35.js.map
