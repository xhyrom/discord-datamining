"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    700582: function (e, n, t) {
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        a = t(372900);
      n.Z = l.memo(function (e) {
        var n, t, o, s;
        let {
            user: u,
            size: c = r.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": f = !1,
            ...m
          } = e,
          h = l.useContext(a.Z);
        return (0, i.jsx)(r.Avatar, {
          src:
            ((n = u),
            (t = (0, r.getAvatarSize)(c)),
            (o = d),
            (s = h),
            n.getAvatarURL(s, t, o)),
          size: c,
          "aria-label": f ? void 0 : u.username,
          "aria-hidden": f,
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
      var i = t(481060),
        l = t(819640),
        r = t(585483),
        a = t(981631);
      let o = () => l.Z.hasLayers() || (0, i.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return r.S.dispatch(a.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!o()) return r.S.dispatch(a.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(a.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(a.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        f = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (r.S.hasSubscribers(a.CkL.MODAL_CLOSE))
              return r.S.dispatch(a.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
        P: function () {
          return r;
        },
        v: function () {
          return a;
        },
      });
      var i = t(817718),
        l = t(981631);
      let r = {
          [l.EkH.MODAL_CAROUSEL_NEXT]: i.XM,
          [l.EkH.MODAL_CAROUSEL_PREV]: i.py,
          [l.EkH.CLOSE_MODAL]: i.U3,
        },
        a = { [l.EkH.CLOSE_MODAL]: i.U3 };
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
          return h;
        },
        sF: function () {
          return c;
        },
        xp: function () {
          return f;
        },
      });
      var i = t(192379),
        l = t(392711),
        r = t(367907),
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
          numQueryChanges: l,
        } = e;
        o.default.track(s.rMx.FORWARD_MESSAGE_CANCELLED, {
          channel_id: n,
          message_id: t,
          num_destination_changes: i,
          num_query_changes: l,
        });
      }
      function d(e) {
        let {
          channelId: n,
          messageId: t,
          hasError: i,
          hasContextMessage: l,
          numDestinations: u,
          numDestinationChanges: c,
          numQueryChanges: d,
          anyDestinationHasSlowmode: f,
          source: m,
        } = e;
        if (
          (o.default.track(s.rMx.FORWARD_MESSAGE_SENT, {
            channel_id: n,
            message_id: t,
            has_error: i,
            has_context_message: l,
            num_destinations: u,
            num_destination_changes: c,
            num_query_changes: d,
            any_destination_has_slowmode: f,
          }),
          "message-shortcut" === m)
        ) {
          let e = a.Z.getChannel(n);
          o.default.track(s.rMx.MESSAGE_SHORTCUT_ACTION_SENT, {
            action: "forward",
            original_message_id: t,
            ...(0, r.hH)(null == e ? void 0 : e.guild_id),
            ...(0, r.v_)(e),
          });
        }
      }
      function f(e, n) {
        o.default.track(s.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function m() {
        return i.useMemo(
          () =>
            (0, l.once)((e, n, t) => {
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
        return i.useMemo(
          () =>
            (0, l.once)((e, n) => {
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
            (0, l.once)((e, n) => {
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
          return f;
        },
      }),
        t(789020);
      var i = t(192379),
        l = t(442837),
        r = t(430198),
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
      function f(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = a.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && r.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function m(e) {
        let n = (0, l.e7)([o.Z, r.Z, a.Z], () => {
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
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(822869);
      let a = "forward-modal";
      function o(e) {
        let {
          message: n,
          source: o,
          initialSelectedDestinations: s = [],
          forwardOptions: u,
          onRequestSent: c,
        } = e;
        (0, r.Lb)(n.channel_id, n.id, o),
          (0, l.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                t.e("6380"),
                t.e("19566"),
              ]).then(t.bind(t, 930864));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  message: n,
                  initialSelectedDestinations: s,
                  forwardOptions: u,
                  onRequestSent: c,
                });
            },
            { modalKey: a },
          );
      }
      function s() {
        (0, l.closeModal)(a);
      }
      function u(e) {
        let { message: n, failedDestinations: r, forwardOptions: a } = e;
        (0, l.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await t
            .e("86590")
            .then(t.bind(t, 384331));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              message: n,
              failedDestinations: r,
              forwardOptions: a,
            });
        });
      }
    },
    378409: function (e, n, t) {
      t.d(n, {
        Jj: function () {
          return m;
        },
        Lz: function () {
          return p;
        },
        gS: function () {
          return h;
        },
        rV: function () {
          return f;
        },
        s$: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(829883),
        l = t(378233),
        r = t(591759);
      let a = /^.*\.discordapp\.net$/,
        o = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, i, l;
          return null === (l = r.Z.toURLSafe(e)) || void 0 === l
            ? void 0
            : null === (i = l.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function d(e) {
        return e.host === o || a.test(e.hostname);
      }
      function f(e) {
        let n = r.Z.toURLSafe(e);
        return null != n && d(n);
      }
      function m(e) {
        return !((0, l.B0)(e) || (0, i.zt)(e)) && !0;
      }
      function h(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return null != t && s.has(t) && d(n) && m(e);
      }
      function p(e) {
        let n = r.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return null != t && u.has(t) && d(n) && m(e);
      }
      function g(e) {
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
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(956664),
        s = t(981656);
      n.Z = l.memo(function (e) {
        let {
            children: n,
            active: t,
            onClick: r,
            className: u,
            style: c,
            width: d,
            height: f,
            maxWidth: m,
            maxHeight: h,
            panPadding: p,
          } = e,
          g = (0, l.useRef)(null),
          [_, E] = (0, l.useState)(!1),
          [S, x] = (0, l.useState)({ x: 0, y: 0 }),
          [v, C] = (0, l.useState)({ x: 0, y: 0 }),
          [y, I] = (0, l.useState)({ x: 0, y: 0 });
        (0, l.useEffect)(() => {
          !t && (I({ x: 0, y: 0 }), C({ x: 0, y: 0 }));
        }, [t]);
        let b = (0, l.useCallback)(
            (e) => {
              if (!t || 0 !== e.button) return;
              e.preventDefault();
              let { clientX: n, clientY: i } = e;
              E(!0), x({ x: n, y: i }), C({ x: n - y.x, y: i - y.y });
            },
            [t, y],
          ),
          O = (0, l.useCallback)(
            (e) => {
              if (!t) {
                0 === e.button && (null == r || r(e));
                return;
              }
              (e.clientX - S.x) ** 2 + (e.clientY - S.y) ** 2 < 400 &&
                (null == r || r(e)),
                E(!1);
            },
            [t, r, S],
          ),
          M = (0, l.useCallback)(
            (e) => {
              var n;
              if (!_) return;
              let t =
                null === (n = g.current) || void 0 === n
                  ? void 0
                  : n.getBoundingClientRect();
              if (null == t) return;
              let [i, l, r, a] = [
                  null == p ? void 0 : p.top,
                  null == p ? void 0 : p.right,
                  null == p ? void 0 : p.bottom,
                  null == p ? void 0 : p.left,
                ].map((e) => (null != e ? e : 0)),
                [o, s] = [
                  t.width + a + l > window.innerWidth,
                  t.height + i + r > window.innerHeight,
                ];
              if (!o && !s) return;
              let [u, c] = [o ? e.clientX - v.x : 0, s ? e.clientY - v.y : 0],
                [d, f] = [u - y.x, c - y.y];
              o && d + t.x - a >= 0 && (u = y.x - t.x + a),
                s && f + t.y - i >= 0 && (c = y.y - t.y + i);
              let [m, h] = [t.x + t.width, t.y + t.height];
              o &&
                d + m + l <= window.innerWidth &&
                (u = window.innerWidth + y.x - m - l),
                s &&
                  f + h + r <= window.innerHeight &&
                  (c = window.innerHeight + y.y - h - r),
                I({ x: u, y: c });
            },
            [_, y, v.x, v.y, p],
          ),
          L = t ? (0, o.vV)(d, f, m, h) : 1,
          T = (0, l.useCallback)(() => {
            let e = g.current;
            if (null == e) return !1;
            let n = null != L ? L : 1;
            return (
              e.offsetWidth * n > window.innerWidth ||
              e.offsetHeight * n > window.innerHeight
            );
          }, [L]);
        return (0, i.jsx)("div", {
          ref: g,
          onMouseDown: b,
          onMouseUp: O,
          onMouseMove: M,
          onMouseLeave: () => E(!1),
          className: a()(u, s.wrapper, {
            [s.panning]: t && _,
            [s.pannable]: t && T(),
          }),
          style: {
            ...(null != c ? c : {}),
            translate: "".concat(y.x, "px ").concat(y.y, "px"),
            scale: "".concat(null != L ? L : 1),
          },
          children: n,
        });
      });
    },
    73249: function (e, n, t) {
      t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(299206),
        u = t(346610),
        c = t(868643),
        d = t(912332),
        f = t(378409),
        m = t(850908),
        h = t(695346),
        p = t(572004),
        g = t(424218),
        _ = t(49012),
        E = t(358085),
        S = t(998502),
        x = t(254109),
        v = t(212459),
        C = t(369171),
        y = t(701865),
        I = t(388032),
        b = t(197736);
      function O() {
        (0, o.closeModal)(y.U);
      }
      function M(e) {
        let { onClick: n, tooltipText: t, children: l, selected: r, ...s } = e;
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
              className: a()(b.actionButton, { [b.selected]: r }),
              wrapperClassName: b.actionButtonWrapper,
              innerClassName: b.actionButtonInner,
              grow: !1,
              ...s,
              children: l,
            });
          },
        });
      }
      function L() {
        let { zoomed: e, setZoomed: n } = (0, v.Y)();
        return (0, i.jsx)(M, {
          onClick: () => {
            (0, x.yg)(
              e ? x.uG.ZOOM_OUT_BUTTON_PRESSED : x.uG.ZOOM_IN_BUTTON_PRESSED,
            ),
              n(!e);
          },
          tooltipText: e
            ? I.intl.string(I.t.vOFof3)
            : I.intl.string(I.t.Kt4gZ2),
          children: e
            ? (0, i.jsx)(o.MagnifyingGlassMinusIcon, {})
            : (0, i.jsx)(o.MagnifyingGlassPlusIcon, {}),
        });
      }
      function T(e) {
        var n, t;
        let { item: r } = e,
          a =
            null === (n = r.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
          s =
            null === (t = r.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          f = l.useCallback(() => {
            if (null != a && null != s) {
              if (((0, x.yg)(x.uG.FORWARD_PRESSED), "embed" === s.type)) {
                (0, d.l8)({
                  message: a,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [s.embedIndex] },
                  onRequestSent: O,
                });
                return;
              }
              (0, d.l8)({
                message: a,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [s.attachmentId] },
                onRequestSent: O,
              });
            }
          }, [a, s]),
          { canForwardMessages: m } = (0, u.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != a && m && (0, c.h)(a)
          ? (0, i.jsx)(M, {
              onClick: f,
              tooltipText: I.intl.string(I.t.I3ltXF),
              children: (0, i.jsx)(o.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function A(e) {
        let { item: n } = e,
          [t, r] = l.useState(!1);
        if (
          !(
            "VIDEO" === n.type ||
            (E.isPlatformEmbedded &&
              null == n.children &&
              "IMAGE" === n.type &&
              (0, f.gS)(n.url))
          )
        )
          return null;
        let a = (0, f.s$)(n.url);
        async function s() {
          if (
            ((0, x.yg)(x.uG.SAVE_MEDIA_PRESSED),
            "VIDEO" === n.type && (0, _.q)({ href: a }),
            "IMAGE" === n.type)
          ) {
            r(!0);
            try {
              await S.ZP.saveImage(a),
                (0, o.showToast)(
                  (0, o.createToast)(
                    I.intl.string(I.t.cqpdJS),
                    o.ToastType.SUCCESS,
                  ),
                );
            } catch (e) {
              (0, o.showToast)(
                (0, o.createToast)(
                  I.intl.string(I.t["8Ve/S0"]),
                  o.ToastType.FAILURE,
                ),
              );
            } finally {
              r(!1);
            }
          }
        }
        return (0, i.jsx)(M, {
          onClick: s,
          tooltipText: I.intl.string(
            "VIDEO" === n.type ? I.t.JVuuz8 : I.t["S/xNKS"],
          ),
          submitting: t,
          children: (0, i.jsx)(o.DownloadIcon, {}),
        });
      }
      function R(e) {
        var n;
        let { item: t } = e;
        if (!(0, f.Jj)(t.url)) return null;
        let l = (0, f.s$)(
          null !== (n = t.original) && void 0 !== n ? n : t.url,
        );
        return (0, i.jsx)(M, {
          onClick: () => {
            (0, x.yg)(x.uG.OPEN_LINK_PRESSED), (0, _.q)({ href: l });
          },
          tooltipText: I.intl.string(I.t.q5jLJC),
          children: (0, i.jsx)(o.WindowLaunchIcon, {}),
        });
      }
      function j(e) {
        var n, t;
        let {
            item: l,
            canCopyImage: r,
            canCopyLink: a,
            onClose: u,
            onSelect: c,
          } = e,
          d =
            (null === (t = l.sourceMetadata) || void 0 === t
              ? void 0
              : null === (n = t.identifier) || void 0 === n
                ? void 0
                : n.type) === "attachment"
              ? l.sourceMetadata.identifier.attachmentId
              : null,
          h = (0, s.Z)({ id: d, label: I.intl.string(I.t.nwg3lZ) }),
          p = (function (e) {
            var n;
            let { alt: t, sourceMetadata: l, width: r, height: a } = e,
              s = N(I.intl.string(I.t.ILJuBg), "name", { subtextLineClamp: 1 }),
              u = N(I.intl.string(I.t["3Nf9u7"]), "size"),
              c = N(I.intl.string(I.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if (
              (null == l
                ? void 0
                : null === (n = l.identifier) || void 0 === n
                  ? void 0
                  : n.type) !== "attachment"
            )
              return null;
            let d = (0, m.Z)(l.identifier),
              f = (0, g.BU)(l.identifier.size / 1e3);
            return (0, i.jsxs)(
              o.MenuItem,
              {
                id: "media-viewer-details",
                label: I.intl.string(I.t.sqBLa2),
                children: [
                  s(d),
                  u(
                    I.intl.formatToPlainString(I.t.DTdonJ, {
                      width: r,
                      height: a,
                      fileSize: f,
                    }),
                  ),
                  c(t),
                ],
              },
              "media-viewer-details",
            );
          })(l);
        async function _() {
          (0, x.yg)(x.uG.COPY_IMAGE_PRESSED);
          let e = (0, f.s$)(l.url);
          try {
            await S.ZP.copyImage(e),
              (0, o.showToast)(
                (0, o.createToast)(
                  I.intl.string(I.t.bhUpvL),
                  o.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, o.showToast)(
              (0, o.createToast)(
                I.intl.string(I.t.PTPbj4),
                o.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, i.jsxs)(o.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: u,
          onSelect: c,
          children: [
            p,
            h,
            (0, i.jsxs)(o.MenuGroup, {
              children: [
                r &&
                  (0, i.jsx)(
                    o.MenuItem,
                    {
                      label: I.intl.string(I.t.tvUqWl),
                      id: "media-viewer-copy-image",
                      icon: o.CopyIcon,
                      action: _,
                    },
                    "media-viewer-copy-image",
                  ),
                a &&
                  (0, i.jsx)(
                    o.MenuItem,
                    {
                      id: "media-viewer-copy-link",
                      label: I.intl.string(I.t.WqhZsr),
                      icon: o.LinkIcon,
                      action: function () {
                        var e;
                        (0, x.yg)(x.uG.COPY_LINK_PRESSED);
                        let n = (0, f.s$)(
                          null !== (e = l.original) && void 0 !== e ? e : l.url,
                        );
                        E.isPlatformEmbedded
                          ? S.ZP.copy(n)
                          : window.navigator.clipboard.writeText(n),
                          (0, o.showToast)(
                            (0, o.createToast)(
                              I.intl.string(I.t["L/PwZW"]),
                              o.ToastType.SUCCESS,
                            ),
                          );
                      },
                    },
                    "media-viewer-copy-link",
                  ),
              ],
            }),
          ],
        });
      }
      function N(e, n, t) {
        let r = l.useCallback((e) => {
          (0, p.JG)(e),
            (0, o.showToast)({
              message: I.intl.string(I.t.mGZ66O),
              type: o.ToastType.SUCCESS,
              id: "media-viewer-detail-copied",
            });
        }, []);
        return (l) =>
          null != l
            ? (0, i.jsx)(
                o.MenuItem,
                { action: () => r(l), label: e, subtext: l, id: n, ...t },
                n,
              )
            : null;
      }
      function P(e) {
        var n, t;
        let { item: r } = e,
          [a, s] = l.useState(!1),
          u = h.Sb.useSetting(),
          c =
            "IMAGE" === r.type &&
            E.isPlatformEmbedded &&
            null == r.children &&
            S.ZP.canCopyImage() &&
            (0, f.Lz)(r.url),
          d = (0, f.Jj)(r.url);
        return u ||
          c ||
          d ||
          (null === (t = r.sourceMetadata) || void 0 === t
            ? void 0
            : null === (n = t.identifier) || void 0 === n
              ? void 0
              : n.type) === "attachment"
          ? (0, i.jsx)(o.Popout, {
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: o.Popout.Animation.NONE,
              renderPopout: () =>
                (0, i.jsx)(j, {
                  item: r,
                  canCopyImage: c,
                  canCopyLink: d,
                  onClose: () => s(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(M, {
                  tooltipText: I.intl.string(I.t.UKOtz8),
                  onClick: () => {
                    (0, x.yg)(x.uG.MORE_BUTTON_PRESSED), s(!a);
                  },
                  selected: a,
                  children: (0, i.jsx)(o.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      n.Z = l.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (
          ("IMAGE" === n.type || !t) &&
          (0, i.jsx)(C.ZP, {
            children: (e) =>
              (0, i.jsxs)("div", {
                className: a()(b.actionButtons, e),
                onClick: (e) => e.stopPropagation(),
                children: [
                  "IMAGE" === n.type && (0, i.jsx)(L, {}),
                  !t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(T, { item: n }),
                        (0, i.jsx)(A, { item: n }),
                        (0, i.jsx)(R, { item: n }),
                        (0, i.jsx)(P, { item: n }),
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
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(299608),
        s = t.n(o),
        u = t(484957),
        c = t(481060),
        d = t(95398),
        f = t(247206),
        m = t(134432),
        h = t(169525),
        p = t(585483),
        g = t(254109),
        _ = t(212459),
        E = t(369171),
        S = t(683528),
        x = t(549635),
        v = t(981631),
        C = t(388032),
        y = t(563297);
      function I(e, n) {
        return ((e % n) + n) % n;
      }
      function b(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function O(e) {
        let { children: n, isObscured: t, src: r } = e,
          [o, s] = l.useState(!1),
          u = l.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, i.jsx)(d.a.Provider, {
              value: o,
              children: (0, i.jsx)(
                d.Z,
                {
                  type: d.Z.Types.ATTACHMENT,
                  reason: h.wk.EXPLICIT_CONTENT,
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
                r,
              ),
            })
          : (0, i.jsx)(i.Fragment, { children: n(!1) });
      }
      function M(e) {
        let {
            items: n,
            onIndexChange: t,
            startIndex: r = 0,
            shouldRedactExplicitContent: o = !1,
            shouldHideMediaOptions: d = !1,
          } = e,
          [h, I] = l.useState(r),
          M = l.useRef(r),
          { zoomed: L, setZoomed: T } = (0, _.Y)();
        l.useEffect(() => {
          var e, t;
          let i = (((h + 1) % (e = n.length)) + e) % e;
          let l = (((h - 1) % (t = n.length)) + t) % t;
          b(n[i]) && (0, m.po)(n[i].url), b(n[l]) && (0, m.po)(n[l].url);
        }, [h, n]);
        let A = l.useCallback(
          (e) => {
            var i;
            I((e = ((e % (i = n.length)) + i) % i)),
              (M.current = e),
              null == t || t(e),
              T(!1);
          },
          [t, n, T],
        );
        l.useEffect(() => {
          let e = s()(() => {
              A(M.current + 1);
            }, 300),
            n = s()(() => {
              A(M.current - 1);
            }, 300);
          return (
            p.S.subscribe(v.CkL.MODAL_CAROUSEL_NEXT, e),
            p.S.subscribe(v.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              p.S.unsubscribe(v.CkL.MODAL_CAROUSEL_NEXT, e),
                p.S.unsubscribe(v.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [A, T]);
        let R = n[h],
          j = (0, f.KP)({ type: f.lJ.GenericMedia, media: R }, o),
          N = d
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : () => (0, g.yg)(g.uG.CONTEXT_MENU_OPENED),
          P = n.length > 1;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: y.wrapper,
            children: [
              P
                ? (0, i.jsx)(E.ZP, {
                    children: (e) =>
                      (0, i.jsx)(c.CircleIconButton, {
                        className: a()(y.navPrev, e),
                        size: c.CircleIconButtonSizes.SIZE_36,
                        onClick: (e) => {
                          e.stopPropagation(),
                            p.S.dispatch(v.CkL.MODAL_CAROUSEL_PREV);
                        },
                        icon: (0, i.jsx)(u.j, {}),
                        tooltip: C.intl.string(C.t.vgfxaG),
                        color: c.CircleIconButtonColors.PRIMARY,
                      }),
                  })
                : null,
              (0, i.jsx)("div", {
                className: y.mediaContainer,
                children: (0, i.jsx)(
                  "div",
                  {
                    className: a()(y.mediaWrapper, { [y.hasPreviews]: P }),
                    children: (0, i.jsx)(O, {
                      isObscured: !L && j,
                      src: R.url,
                      children: (e) =>
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)("div", {
                            onClick: (e) => e.stopPropagation(),
                            className: a()(y.innerWrapper, {
                              [y.shifted]: L && P,
                            }),
                            children: (0, i.jsx)(x.Z, {
                              media: R,
                              obscured: e,
                              onContextMenu: N,
                              padding: { top: 112, bottom: 144 + (P ? 64 : 0) },
                            }),
                          }),
                        }),
                    }),
                  },
                  R.url,
                ),
              }),
              P
                ? (0, i.jsx)(E.ZP, {
                    children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(S.Z, {
                            items: n,
                            currentIndex: h,
                            onGalleryItemClick: I,
                            className: e,
                          }),
                          (0, i.jsx)(c.CircleIconButton, {
                            className: a()(y.navNext, e),
                            size: c.CircleIconButtonSizes.SIZE_36,
                            onClick: (e) => {
                              e.stopPropagation(),
                                p.S.dispatch(v.CkL.MODAL_CAROUSEL_NEXT);
                            },
                            icon: (0, i.jsx)(c.ArrowLargeRightIcon, {}),
                            tooltip: C.intl.string(C.t.XiOHRU),
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
          return l;
        },
        c7: function () {
          return d;
        },
      });
      var i,
        l,
        r = t(200651),
        a = t(192379),
        o = t(120356),
        s = t.n(o),
        u = t(212459),
        c = t(368632);
      ((i = l || (l = {})).FORCE_HIDDEN = "FORCE_HIDDEN"),
        (i.INACTIVE = "INACTIVE"),
        (i.VISIBLE = "VISIBLE");
      function d(e) {
        let { children: n } = e;
        return (0, r.jsx)("div", { className: c.group, children: n });
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
          return _;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        f = t(217702),
        m = t(388032),
        h = t(52131);
      function p(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let g = l.memo(function (e) {
        var n;
        let { item: t } = e;
        let l =
          "IMAGE" === (n = t).type
            ? (0, c.q)({ proxyURL: n.proxyUrl, url: n.url })
            : "VIDEO" === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
        return null == l
          ? null
          : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: l,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: f.hV.MOSAIC,
            });
      });
      function _(e) {
        let {
            items: n,
            currentIndex: t,
            onGalleryItemClick: r,
            className: u,
          } = e,
          c = l.useRef(null);
        return (
          l.useLayoutEffect(() => {
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
            className: a()(h.galleryContainer, u),
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: h.gallery,
              ref: c,
              onClick: (e) => e.stopPropagation(),
              children: n.map((e, l) => {
                let s = l === t,
                  u = s ? m.t["qv/U5e"] : m.t.zviMAA;
                return (0, i.jsxs)(
                  o.Clickable,
                  {
                    id: p(l),
                    className: h.galleryItem,
                    "aria-label": m.intl.formatToPlainString(u, {
                      pageNumber: l + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => r(l),
                    children: [
                      (0, i.jsx)("div", {
                        className: a()(h.galleryItemOverlay, {
                          [h.selected]: s,
                        }),
                      }),
                      (0, i.jsx)(g, { item: e }),
                    ],
                  },
                  l,
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
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(378409),
        s = t(124347),
        u = t(80966),
        c = t(480050),
        d = t(524444),
        f = t(52824),
        m = t(956664),
        h = t(589530),
        p = t(591759),
        g = t(254109),
        _ = t(212459),
        E = t(427244);
      function S(e) {
        let n = p.Z.toURLSafe(e);
        return null == n
          ? null
          : (n.searchParams.append("format", "webp"), n.toString());
      }
      n.Z = l.memo(function (e) {
        var n, t, l, r, p;
        let x,
          { media: v, obscured: C = !1, padding: y, onContextMenu: I } = e,
          {
            width: b,
            height: O,
            url: M,
            proxyUrl: L,
            alt: T,
            type: A,
            maxWidth: R,
            maxHeight: j,
            ...N
          } = v,
          { zoomed: P, setZoomed: D } = (0, _.Y)(),
          w = (function (e, n, t) {
            return e && (0, o.rV)(n)
              ? (0, o.s$)(n)
              : (0, f.q)({ proxyURL: t, url: n });
          })(P, M, L),
          k = {
            vertical:
              (null !== (n = null == y ? void 0 : y.top) && void 0 !== n
                ? n
                : 0) +
              (null !== (t = null == y ? void 0 : y.bottom) && void 0 !== t
                ? t
                : 0),
            horizontal:
              (null !== (l = null == y ? void 0 : y.left) && void 0 !== l
                ? l
                : 0) +
              (null !== (r = null == y ? void 0 : y.right) && void 0 !== r
                ? r
                : 0),
          },
          { width: Z, height: U } = (0, m.zp)(
            null != b ? b : 0,
            null != O ? O : 0,
            k,
          ),
          B = !(null == b || 0 === b || null == O || 0 === O);
        if ("VIDEO" === A && B && null != L) {
          let e = S(L);
          if (null == e) return null;
          let n =
            null !== (p = v.renderLinkComponent) && void 0 !== p ? p : d.iT;
          return (0, i.jsx)(u.Z, {
            ...N,
            src: w,
            width: b,
            height: O,
            maxWidth: Z,
            maxHeight: U,
            poster: e,
            naturalWidth: b,
            naturalHeight: O,
            volume: h.FC,
            autoMute: h.rs,
            onVolumeChange: h.jA,
            onMute: h.Zj,
            renderLinkComponent: n,
            autoPlay: !C,
            alt: T,
            onContextMenu: I,
          });
        }
        return (
          "IMAGE" === A &&
            (x = B
              ? (0, i.jsx)(s.ZP, {
                  ...N,
                  src: w,
                  width: b,
                  height: O,
                  shouldLink: !1,
                  maxWidth: Z,
                  maxHeight: U,
                  useFullWidth: !0,
                  animated: !C && v.animated,
                  autoPlay: !C,
                  alt: T,
                  zoomThumbnailPlaceholder: v.zoomThumbnailPlaceholder,
                  onContextMenu: I,
                })
              : (0, i.jsx)("img", {
                  src: w,
                  alt: T,
                  onContextMenu: I,
                  className: E.dimensionlessImage,
                })),
          null != x
            ? (0, i.jsx)(c.Z, {
                width: b,
                height: O,
                maxWidth: Z,
                maxHeight: U,
                active: P,
                className: a()(E.wrapper, { [E.zoomed]: P }),
                panPadding: y,
                onClick: () => {
                  D(!P),
                    (0, g.yg)(
                      P
                        ? g.uG.ZOOM_OUT_IMAGE_PRESSED
                        : g.uG.ZOOM_IN_IMAGE_PRESSED,
                    );
                },
                children: x,
              })
            : null
        );
      });
    },
    97594: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(846519),
        s = t(481060),
        u = t(376641),
        c = t(714338),
        d = t(585483),
        f = t(254109),
        m = t(212459),
        h = t(73249),
        p = t(730606),
        g = t(369171),
        _ = t(860153),
        E = t(981631),
        S = t(388032),
        x = t(176598);
      function v(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: r,
            shouldRedactExplicitContent: v,
            shouldHideMediaOptions: C = !1,
            className: y,
            transitionState: I,
            ...b
          } = e,
          [O, M] = l.useState(null != r ? r : 0),
          [L, T] = l.useState(!1),
          [A, R] = l.useState(!0),
          j = l.useRef(null);
        l.useEffect(() => {
          if (null != n)
            return (
              d.S.subscribe(E.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                d.S.unsubscribe(E.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]),
          l.useEffect(
            () => (
              I === s.ModalTransitionState.ENTERED &&
                (c.Z.disable(), c.Z.enableTemp(u.P)),
              I === s.ModalTransitionState.HIDDEN &&
                (c.Z.disable(), c.Z.enableTemp(u.v)),
              () => {
                c.Z.disableTemp();
              }
            ),
            [I],
          );
        let N = l.useCallback((e) => {
            M(e), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE);
          }, []),
          P = l.useMemo(
            () => ({
              zoomed: L,
              setZoomed: T,
              accessoryVisibility: (function (e, n, t) {
                return (null != e || (e = s.ModalTransitionState.HIDDEN),
                e === s.ModalTransitionState.ENTERING ||
                  e >= s.ModalTransitionState.EXITING)
                  ? g.UE.FORCE_HIDDEN
                  : !t || n
                    ? g.UE.VISIBLE
                    : g.UE.INACTIVE;
              })(null != I ? I : void 0, A, L),
            }),
            [L, I, A],
          ),
          D = l.useCallback(() => {
            var e;
            R(!0),
              (null !== (e = j.current) && void 0 !== e) ||
                (j.current = new o.sW(1e3, () => R(!1))),
              j.current.delay();
          }, []),
          w = l.useCallback(() => {
            D(), null == n || n();
          }, [D, n]),
          k = t[O];
        return (0, i.jsx)(s.ThemeProvider, {
          theme: E.BRd.DARK,
          children: (e) =>
            (0, i.jsx)(s.ModalRoot, {
              hideShadow: !0,
              className: a()(x.carouselModal, e),
              transitionState: I,
              ...b,
              size: s.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              onMouseMove: D,
              onClick: w,
              "aria-label": S.intl.string(S.t.AMTX3t),
              children: (0, i.jsxs)(m.z.Provider, {
                value: P,
                children: [
                  (0, i.jsx)(_.Z, { item: k, onClose: n }),
                  (0, i.jsxs)(g.c7, {
                    children: [
                      (0, i.jsx)(p.Z, {
                        items: t,
                        startIndex: O,
                        onIndexChange: N,
                        shouldRedactExplicitContent: v,
                        shouldHideMediaOptions: C,
                      }),
                      (0, i.jsx)(h.Z, { item: k, hideMediaOptions: C }),
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
          return _;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        o = t(442837),
        s = t(481060),
        u = t(700582),
        c = t(372900),
        d = t(318713),
        f = t(123145),
        m = t(592125),
        h = t(369171),
        p = t(795938);
      let g = l.memo(function (e) {
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
                      children: (0, i.jsx)(f.Z, { message: n, channel: t }),
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
      function _(e) {
        var n;
        let { item: t, onClose: l } = e,
          r =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, i.jsx)(h.ZP, {
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
                  onClick: l,
                  children: (0, i.jsx)(s.XSmallIcon, {}),
                }),
                null != r && (0, i.jsx)(g, { message: r }),
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
          return r;
        },
      });
      var i = t(192379),
        l = t(369171);
      let r = (0, i.createContext)({
        zoomed: !1,
        setZoomed: () => {},
        accessoryVisibility: l.UE.FORCE_HIDDEN,
      });
      function a() {
        return (0, i.useContext)(r);
      }
    },
    850908: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        if (null != e.title && null != e.filename) {
          let n = e.filename.lastIndexOf("."),
            t = n > 0 ? e.filename.substr(n) : "";
          return e.title + t;
        }
        return e.filename;
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
        actionButtonWrapper: "actionButtonWrapper_dda074",
        actionButtonInner: "actionButtonInner_dda074",
      };
    },
    563297: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24281",
        mediaContainer: "mediaContainer_a24281",
        mediaWrapper: "mediaWrapper_a24281",
        hasPreviews: "hasPreviews_a24281",
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
//# sourceMappingURL=e22c8a8571bcda404e96.js.map
