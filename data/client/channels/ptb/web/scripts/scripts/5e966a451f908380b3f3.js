"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    700582: function (e, n, t) {
      var i = t(200651),
        r = t(192379),
        l = t(481060),
        a = t(372900);
      n.Z = r.memo(function (e) {
        var n, t, o, s;
        let {
            user: u,
            size: c = l.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": h = !1,
            ...m
          } = e,
          f = r.useContext(a.Z);
        return (0, i.jsx)(l.Avatar, {
          src:
            ((n = u),
            (t = (0, l.getAvatarSize)(c)),
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
        l = t(585483),
        a = t(981631);
      let o = () => r.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
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
        h = {
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
        v: function () {
          return a;
        },
      });
      var i = t(817718),
        r = t(981631);
      let l = {
          [r.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [r.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [r.EkH.CLOSE_MODAL]: i.U3,
        },
        a = { [r.EkH.CLOSE_MODAL]: i.U3 };
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
          return m;
        },
        gP: function () {
          return d;
        },
        mh: function () {
          return f;
        },
        sF: function () {
          return c;
        },
        xp: function () {
          return h;
        },
      });
      var i = t(192379),
        r = t(392711),
        l = t(367907),
        a = t(592125),
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
          numQueryChanges: r,
        } = e;
        o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: r,
        });
      }
      function d(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: r,
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
            has_context_message: r,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: h,
          }),
          "message-shortcut" === m)
        ) {
          let e = a.Z.getChannel(n);
          o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: t,
            ...(0, l.hH)(null == e ? void 0 : e.guild_id),
            ...(0, l.v_)(e),
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
      function f() {
        return i.useMemo(
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
        return i.useMemo(
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
          return m;
        },
        h: function () {
          return h;
        },
      }),
        t(789020);
      var i = t(192379),
        r = t(442837),
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
      function h(e) {
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
      function m(e) {
        let n = (0, r.e7)([o.Z, l.Z, a.Z], () => {
          var n, t;
          if (null == e) return !0;
          let i =
            null === (n = a.Z.getChannel(e.channel_id)) || void 0 === n
              ? void 0
              : n.guild_id;
          return (
            !!(
              null != i &&
              (null === (t = o.Z.getGuild(i)) || void 0 === t
                ? void 0
                : t.hasFeature(u.oNc.FORWARDING_DISABLED))
            ) ||
            (null != i && l.Z.isChannelOrThreadParentGated(i, e.channel_id))
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
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
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
          onRequestSent: h,
        } = e;
        (0, l.Lb)(o, n, u),
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
            { modalKey: a },
          );
      }
      function s() {
        (0, r.closeModal)(a);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: l,
          message: a,
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
        l = t(591759);
      let a = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, i, r;
          return null === (r = l.Z.toURLSafe(e)) || void 0 === r
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
        let n = l.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (a.test(n.hostname) || n.host === o) && d(e) && null != t && s.has(t)
        );
      }
      function m(e) {
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
    480050: function (e, n, t) {
      t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(956664),
        s = t(981656);
      n.Z = r.memo(function (e) {
        let {
            children: n,
            active: t,
            onClick: l,
            className: u,
            style: c,
            width: d,
            height: h,
            maxWidth: m,
            maxHeight: f,
          } = e,
          p = (0, r.useRef)(null),
          [_, E] = (0, r.useState)(!1),
          [g, S] = (0, r.useState)({ x: 0, y: 0 }),
          [x, C] = (0, r.useState)({ x: 0, y: 0 }),
          [I, y] = (0, r.useState)({ x: 0, y: 0 });
        (0, r.useEffect)(() => {
          !t && (y({ x: 0, y: 0 }), C({ x: 0, y: 0 }));
        }, [t]);
        let v = (0, r.useCallback)(
            (e) => {
              if (!t || 0 !== e.button) return;
              e.preventDefault();
              let { clientX: n, clientY: i } = e;
              E(!0), S({ x: n, y: i }), C({ x: n - I.x, y: i - I.y });
            },
            [t, I],
          ),
          O = (0, r.useCallback)(
            (e) => {
              if (!t) {
                0 === e.button && (null == l || l(e));
                return;
              }
              (e.clientX - g.x) ** 2 + (e.clientY - g.y) ** 2 < 400 &&
                (null == l || l(e)),
                E(!1);
            },
            [t, l, g],
          ),
          b = (0, r.useCallback)(
            (e) => {
              var n;
              if (!_) return;
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
              let { x: l, y: a } = I,
                [o, s] = [i ? e.clientX - x.x : 0, r ? e.clientY - x.y : 0],
                [u, c] = [o - l, s - a];
              i && u + t.x >= 0 && (o -= u + t.x),
                r && c + t.y >= 0 && (s -= c + t.y);
              let [d, h] = [t.x + t.width, t.y + t.height];
              i &&
                u + d <= window.innerWidth &&
                (o = window.innerWidth + l - d),
                r &&
                  c + h <= window.innerHeight &&
                  (s = window.innerHeight + a - h),
                y({ x: o, y: s });
            },
            [_, I, x.x, x.y],
          ),
          M = t ? (0, o.vV)(d, h, m, f) : 1,
          L = (0, r.useCallback)(() => {
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
          onMouseDown: v,
          onMouseUp: O,
          onMouseMove: b,
          onMouseLeave: () => E(!1),
          className: a()(u, s.wrapper, {
            [s.panning]: t && _,
            [s.pannable]: t && L(),
          }),
          style: {
            ...(null != c ? c : {}),
            translate: "".concat(I.x, "px ").concat(I.y, "px"),
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
        l = t(120356),
        a = t.n(l),
        o = t(481060),
        s = t(346610),
        u = t(868643),
        c = t(912332),
        d = t(378409),
        h = t(49012),
        m = t(358085),
        f = t(998502),
        p = t(254109),
        _ = t(212459),
        E = t(369171),
        g = t(701865),
        S = t(388032),
        x = t(197736);
      function C() {
        (0, o.closeModal)(g.U);
      }
      function I(e) {
        let { onClick: n, tooltipText: t, children: r, selected: l, ...s } = e;
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
              className: a()(x.actionButton, { [x.selected]: l }),
              innerClassName: x.actionButtonInner,
              ...s,
              children: r,
            });
          },
        });
      }
      function y() {
        let { zoomed: e, setZoomed: n } = (0, _.Y)();
        return (0, i.jsx)(I, {
          onClick: () => {
            (0, p.yg)(
              e ? p.uG.ZOOM_OUT_BUTTON_PRESSED : p.uG.ZOOM_IN_BUTTON_PRESSED,
            ),
              n(!e);
          },
          tooltipText: e
            ? S.intl.string(S.t.vOFof3)
            : S.intl.string(S.t.Kt4gZ2),
          children: e
            ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {})
            : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {}),
        });
      }
      function v(e) {
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
          h = r.useCallback(() => {
            if (null != a && null != d) {
              if (((0, p.yg)(p.uG.FORWARD_PRESSED), "embed" === d.type)) {
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
          { canForwardMessages: m } = (0, s.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != a && m && (0, u.h)(a)
          ? (0, i.jsx)(I, {
              onClick: h,
              tooltipText: S.intl.string(S.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function O(e) {
        let { item: n } = e,
          [t, l] = r.useState(!1);
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
        let a = (0, d.s$)(n.url);
        async function s() {
          if (
            ((0, p.yg)(p.uG.SAVE_MEDIA_PRESSED),
            "VIDEO" === n.type && (0, h.q)({ href: a }),
            "IMAGE" === n.type)
          ) {
            l(!0);
            try {
              await f.ZP.saveImage(a),
                (0, o.showToast)(
                  (0, o.createToast)(
                    S.intl.string(S.t.cqpdJS),
                    o.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              (0, o.showToast)(
                (0, o.createToast)(
                  S.intl.string(S.t["8Ve/S0"]),
                  o.ToastType.FAILURE,
                ),
              );
            } finally {
              l(!1);
            }
          }
        }
        return (0, i.jsx)(I, {
          onClick: s,
          tooltipText: S.intl.string(
            "VIDEO" === n.type ? S.t.JVuuz8 : S.t["S/xNKS"],
          ),
          submitting: t,
          children: (0, i.jsx)(o.DownloadIcon, {}),
        });
      }
      function b(e) {
        var n;
        let { item: t } = e;
        if (!(0, d.Jj)(t.url)) return null;
        let r = (0, d.s$)(
          null !== (n = t.original) && void 0 !== n ? n : t.url,
        );
        return (0, i.jsx)(I, {
          onClick: () => {
            (0, p.yg)(p.uG.OPEN_LINK_PRESSED), (0, h.q)({ href: r });
          },
          tooltipText: S.intl.string(S.t.q5jLJC),
          children: (0, i.jsx)(o.WindowLaunchIcon, {}),
        });
      }
      function M(e) {
        let {
          item: n,
          canCopyImage: t,
          canCopyLink: r,
          onClose: l,
          onSelect: a,
        } = e;
        async function s() {
          (0, p.yg)(p.uG.COPY_IMAGE_PRESSED);
          let e = (0, d.s$)(n.url);
          try {
            await f.ZP.copyImage(e),
              (0, o.showToast)(
                (0, o.createToast)(
                  S.intl.string(S.t.bhUpvL),
                  o.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, o.showToast)(
              (0, o.createToast)(
                S.intl.string(S.t.PTPbj4),
                o.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, i.jsx)(o.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: l,
          onSelect: a,
          children: (0, i.jsxs)(o.MenuGroup, {
            children: [
              t &&
                (0, i.jsx)(
                  o.MenuItem,
                  {
                    label: S.intl.string(S.t.tvUqWl),
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
                    label: S.intl.string(S.t.WqhZsr),
                    action: function () {
                      var e;
                      (0, p.yg)(p.uG.COPY_LINK_PRESSED);
                      let t = (0, d.s$)(
                        null !== (e = n.original) && void 0 !== e ? e : n.url,
                      );
                      m.isPlatformEmbedded
                        ? f.ZP.copy(t)
                        : window.navigator.clipboard.writeText(t),
                        (0, o.showToast)(
                          (0, o.createToast)(
                            S.intl.string(S.t["L/PwZW"]),
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
          [t, l] = r.useState(!1),
          a =
            "IMAGE" === n.type &&
            m.isPlatformEmbedded &&
            null == n.children &&
            f.ZP.canCopyImage() &&
            (0, d.Lz)(n.url),
          s = (0, d.Jj)(n.url);
        return a || s
          ? (0, i.jsx)(o.Popout, {
              shouldShow: t,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => l(!1),
              renderPopout: () =>
                (0, i.jsx)(M, {
                  item: n,
                  canCopyImage: a,
                  canCopyLink: s,
                  onClose: () => l(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(I, {
                  tooltipText: S.intl.string(S.t.UKOtz8),
                  onClick: () => {
                    (0, p.yg)(p.uG.MORE_BUTTON_PRESSED), l(!t);
                  },
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
          (0, i.jsx)(E.ZP, {
            children: (e) =>
              (0, i.jsxs)("div", {
                className: a()(x.actionButtons, e),
                onClick: (e) => e.stopPropagation(),
                children: [
                  "IMAGE" === n.type && (0, i.jsx)(y, {}),
                  !t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(v, { item: n }),
                        (0, i.jsx)(O, { item: n }),
                        (0, i.jsx)(b, { item: n }),
                        (0, i.jsx)(L, { item: n }),
                      ],
                    }),
                ],
              }),
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
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(299608),
        s = t.n(o),
        u = t(484957),
        c = t(481060),
        d = t(95398),
        h = t(247206),
        m = t(134432),
        f = t(169525),
        p = t(585483),
        _ = t(254109),
        E = t(212459),
        g = t(369171),
        S = t(683528),
        x = t(549635),
        C = t(981631),
        I = t(388032),
        y = t(563297);
      function v(e, n) {
        return ((e % n) + n) % n;
      }
      function O(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function b(e) {
        let { children: n, isObscured: t, src: l } = e,
          [o, s] = r.useState(!1),
          u = r.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                d.Z,
                {
                  type: d.Z.Types.ATTACHMENT,
                  reason: f.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)("div", {
                        className: a()(y.obscureWrapper, { [y.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                l,
              ),
            })
          : (0, i.jsx)(i.Fragment, { children: n(!1) });
      }
      function M(e) {
        let {
            items: n,
            onIndexChange: t,
            startIndex: l = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: d = !1,
          } = e,
          [f, v] = r.useState(l),
          M = r.useRef(l),
          { zoomed: L, setZoomed: A } = (0, E.Y)();
        r.useEffect(() => {
          var e, t;
          let i = (((f + 1) % (e = n.length)) + e) % e;
          let r = (((f - 1) % (t = n.length)) + t) % t;
          O(n[i]) && (0, m.po)(n[i].url), O(n[r]) && (0, m.po)(n[r].url);
        }, [f, n]);
        let T = r.useCallback(
          (e) => {
            var i;
            v((e = ((e % (i = n.length)) + i) % i)),
              (M.current = e),
              null == t || t(e),
              A(!1);
          },
          [t, n, A],
        );
        r.useEffect(() => {
          let e = s()(() => {
              T(M.current + 1);
            }, 300),
            n = s()(() => {
              T(M.current - 1);
            }, 300);
          return (
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, e),
                p.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [T, A]);
        let R = n[f],
          j = (0, h.KP)({ type: h.lJ.GenericMedia, media: R }, o),
          N = d
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : () => (0, _.yg)(_.uG.CONTEXT_MENU_OPENED),
          D = n.length > 1;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: y.wrapper,
            children: [
              D
                ? (0, i.jsx)(g.ZP, {
                    children: (e) =>
                      (0, i.jsx)(c.CircleIconButton, {
                        className: a()(y.navPrev, e),
                        size: c.CircleIconButtonSizes.SIZE_36,
                        onClick: (e) => {
                          e.stopPropagation(),
                            p.S.dispatch(C.CkL.MODAL_CAROUSEL_PREV);
                        },
                        icon: (0, i.jsx)(u.j, {}),
                        tooltip: I.intl.string(I.t.vgfxaG),
                        color: c.CircleIconButtonColors.PRIMARY,
                      }),
                  })
                : null,
              (0, i.jsx)("div", {
                className: y.mediaContainer,
                children: (0, i.jsx)(
                  "div",
                  {
                    className: y.mediaWrapper,
                    children: (0, i.jsx)(b, {
                      isObscured: !L && j,
                      src: R.url,
                      children: (e) =>
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)("div", {
                            onClick: (e) => e.stopPropagation(),
                            className: a()(y.innerWrapper, {
                              [y.shifted]: L && D,
                            }),
                            children: (0, i.jsx)(x.Z, {
                              media: R,
                              obscured: e,
                              onContextMenu: N,
                            }),
                          }),
                        }),
                    }),
                  },
                  R.url,
                ),
              }),
              D
                ? (0, i.jsx)(g.ZP, {
                    children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(S.Z, {
                            items: n,
                            currentIndex: f,
                            onGalleryItemClick: v,
                            className: e,
                          }),
                          (0, i.jsx)(c.CircleIconButton, {
                            className: a()(y.navNext, e),
                            size: c.CircleIconButtonSizes.SIZE_36,
                            onClick: (e) => {
                              e.stopPropagation(),
                                p.S.dispatch(C.CkL.MODAL_CAROUSEL_NEXT);
                            },
                            icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                            tooltip: I.intl.string(I.t.XiOHRU),
                            color: c.CircleIconButtonColors.PRIMARY,
                          }),
                        ],
                      }),
                  })
                : null,
            ],
          }),
        });
      }
    },
    369171: function (e, n, t) {
      t.d(n, {
        UE: function () {
          return r;
        },
        c7: function () {
          return d;
        },
      });
      var i,
        r,
        l = t(200651),
        a = t(192379),
        o = t(120356),
        s = t.n(o),
        u = t(212459),
        c = t(368632);
      ((i = r || (r = {})).FORCE_HIDDEN = "FORCE_HIDDEN"),
        (i.INACTIVE = "INACTIVE"),
        (i.VISIBLE = "VISIBLE");
      function d(e) {
        let { children: n } = e;
        return (0, l.jsx)("div", { className: c.group, children: n });
      }
      n.ZP = a.memo(function (e) {
        let { children: n } = e,
          { accessoryVisibility: t } = (0, u.Y)();
        return n(
          s()(c.base, {
            [c.forceHidden]: "FORCE_HIDDEN" === t,
            [c.hidden]: "INACTIVE" === t,
          }),
        );
      });
    },
    683528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
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
      let _ = r.memo(function (e) {
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
      function E(e) {
        let {
            items: n,
            currentIndex: t,
            onGalleryItemClick: l,
            className: u,
          } = e,
          c = r.useRef(null);
        return (
          r.useLayoutEffect(() => {
            let e = document.getElementById(p(t));
            null != c.current &&
              null != e &&
              c.current.scrollIntoViewNode({
                node: e,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, i.jsx)("div", {
            className: a()(f.galleryContainer, u),
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: f.gallery,
              ref: c,
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
                    onClick: () => l(r),
                    children: [
                      (0, i.jsx)("div", {
                        className: a()(f.galleryItemOverlay, {
                          [f.selected]: s,
                        }),
                      }),
                      (0, i.jsx)(_, { item: e }),
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
          return S;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(378409),
        s = t(124347),
        u = t(80966),
        c = t(480050),
        d = t(524444),
        h = t(52824),
        m = t(956664),
        f = t(589530),
        p = t(591759),
        _ = t(254109),
        E = t(212459),
        g = t(427244);
      function S(e) {
        let n = p.Z.toURLSafe(e);
        return null == n
          ? null
          : (n.searchParams.append("format", "webp"), n.toString());
      }
      n.Z = r.memo(function (e) {
        let n,
          { media: t, obscured: r = !1, onContextMenu: l } = e,
          {
            width: x,
            height: C,
            url: I,
            proxyUrl: y,
            alt: v,
            type: O,
            maxWidth: b,
            maxHeight: M,
            ...L
          } = t,
          { zoomed: A, setZoomed: T } = (0, E.Y)(),
          R = (function (e, n, t) {
            return e && p.Z.isDiscordUrl(n, !0)
              ? (0, o.s$)(n)
              : (0, h.q)({ proxyURL: t, url: n });
          })(A, I, y),
          { width: j, height: N } = (0, m.zp)(
            null != x ? x : 0,
            null != C ? C : 0,
          ),
          D = !(null == x || 0 === x || null == C || 0 === C);
        if ("VIDEO" === O && D && null != y) {
          var P;
          let e = S(y);
          if (null == e) return null;
          let n =
            null !== (P = t.renderLinkComponent) && void 0 !== P ? P : d.iT;
          return (0, i.jsx)(u.Z, {
            ...L,
            src: R,
            width: x,
            height: C,
            maxWidth: j,
            maxHeight: N,
            poster: e,
            naturalWidth: x,
            naturalHeight: C,
            volume: f.FC,
            autoMute: f.rs,
            onVolumeChange: f.jA,
            onMute: f.Zj,
            renderLinkComponent: n,
            autoPlay: !r,
            alt: v,
            onContextMenu: l,
          });
        }
        return (
          "IMAGE" === O &&
            (n = D
              ? (0, i.jsx)(s.ZP, {
                  ...L,
                  src: R,
                  width: x,
                  height: C,
                  shouldLink: !1,
                  maxWidth: j,
                  maxHeight: N,
                  useFullWidth: !0,
                  animated: !r && t.animated,
                  autoPlay: !r,
                  alt: v,
                  zoomThumbnailPlaceholder: t.zoomThumbnailPlaceholder,
                  onContextMenu: l,
                })
              : (0, i.jsx)("img", {
                  src: R,
                  alt: v,
                  onContextMenu: l,
                  className: g.dimensionlessImage,
                })),
          null != n
            ? (0, i.jsx)(c.Z, {
                width: x,
                height: C,
                maxWidth: j,
                maxHeight: N,
                active: A,
                className: a()(g.wrapper, { [g.zoomed]: A }),
                onClick: () => {
                  T(!A),
                    (0, _.yg)(
                      A
                        ? _.uG.ZOOM_OUT_IMAGE_PRESSED
                        : _.uG.ZOOM_IN_IMAGE_PRESSED,
                    );
                },
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
            return C;
          },
        }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(846519),
        s = t(481060),
        u = t(376641),
        c = t(714338),
        d = t(585483),
        h = t(254109),
        m = t(212459),
        f = t(73249),
        p = t(730606),
        _ = t(369171),
        E = t(860153),
        g = t(981631),
        S = t(388032),
        x = t(176598);
      function C(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: l,
            shouldRedactExplicitContent: C,
            shouldHideMediaOptions: I = !1,
            className: y,
            transitionState: v,
            ...O
          } = e,
          [b, M] = r.useState(null != l ? l : 0),
          [L, A] = r.useState(!1),
          [T, R] = r.useState(!0),
          j = r.useRef(null);
        r.useEffect(() => {
          if (null != n)
            return (
              d.S.subscribe(g.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                d.S.unsubscribe(g.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]),
          r.useEffect(
            () => (
              v === s.ModalTransitionState.ENTERED &&
                (c.Z.disable(), c.Z.enableTemp(u.P)),
              v === s.ModalTransitionState.HIDDEN &&
                (c.Z.disable(), c.Z.enableTemp(u.v)),
              () => {
                c.Z.disableTemp();
              }
            ),
            [v],
          );
        let N = r.useCallback((e) => {
            M(e), (0, h.yg)(h.uG.SELECTED_ITEM_CHANGE);
          }, []),
          D = r.useMemo(
            () => ({
              zoomed: L,
              setZoomed: A,
              accessoryVisibility: (function (e, n, t) {
                return (null != e || (e = s.ModalTransitionState.HIDDEN),
                e === s.ModalTransitionState.ENTERING ||
                  e >= s.ModalTransitionState.EXITING)
                  ? _.UE.FORCE_HIDDEN
                  : !t || n
                    ? _.UE.VISIBLE
                    : _.UE.INACTIVE;
              })(null != v ? v : void 0, T, L),
            }),
            [L, v, T],
          ),
          P = r.useCallback(() => {
            var e;
            R(!0),
              (null !== (e = j.current) && void 0 !== e) ||
                (j.current = new o.sW(1e3, () => R(!1))),
              j.current.delay();
          }, []),
          w = r.useCallback(() => {
            P(), null == n || n();
          }, [P, n]),
          k = t[b];
        return (0, i.jsx)(s.ThemeProvider, {
          theme: g.BRd.DARK,
          children: (e) =>
            (0, i.jsx)(s.ModalRoot, {
              hideShadow: !0,
              className: a()(x.carouselModal, e),
              transitionState: v,
              ...O,
              size: s.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              onMouseMove: P,
              onClick: w,
              "aria-label": S.intl.string(S.t.AMTX3t),
              children: (0, i.jsxs)(m.z.Provider, {
                value: D,
                children: [
                  (0, i.jsx)(E.Z, { item: k, onClose: n }),
                  (0, i.jsxs)(_.c7, {
                    children: [
                      (0, i.jsx)(p.Z, {
                        items: t,
                        startIndex: b,
                        onIndexChange: N,
                        shouldRedactExplicitContent: C,
                        shouldHideMediaOptions: I,
                      }),
                      (0, i.jsx)(f.Z, { item: k, hideMediaOptions: I }),
                    ],
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
          return E;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        h = t(123145),
        m = t(592125),
        f = t(369171),
        p = t(795938);
      let _ = r.memo(function (e) {
        let { message: n } = e,
          t = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("div", {
                className: p.messageContents,
                children: (0, i.jsxs)(c.Z.Provider, {
                  value: t.guild_id,
                  children: [
                    (0, i.jsx)(u.Z, { user: n.author }),
                    (0, i.jsx)(s.FocusBlock, {
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
      function E(e) {
        var n;
        let { item: t, onClose: r } = e,
          l =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, i.jsx)(f.ZP, {
          children: (e) =>
            (0, i.jsxs)("div", {
              className: a()(p.topBar, e),
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
                null != l && (0, i.jsx)(_, { message: l }),
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
          return l;
        },
      });
      var i = t(192379),
        r = t(369171);
      let l = (0, i.createContext)({
        zoomed: !1,
        setZoomed: () => {},
        accessoryVisibility: r.UE.FORCE_HIDDEN,
      });
      function a() {
        return (0, i.useContext)(l);
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
        innerWrapper: "innerWrapper_a24281",
        shifted: "shifted_a24281",
      };
    },
    368632: function (e, n, t) {
      e.exports = {
        base: "base_a70b96",
        forceHidden: "forceHidden_a70b96",
        hidden: "hidden_a70b96",
        group: "group_a70b96",
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
        messageContents: "messageContents_bf8df0",
        timestamp: "timestamp_bf8df0",
        closeButton: "closeButton_bf8df0",
        closeButtonInner: "closeButtonInner_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=5e966a451f908380b3f3.js.map
