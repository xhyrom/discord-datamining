"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39476"],
  {
    477488: function (e, n, t) {
      var r = t(147018),
        i = t(863664),
        a = t(299623),
        o = t(345374),
        l = Array;
      r(
        { target: "Array", proto: !0 },
        {
          toReversed: function () {
            return i(a(this), l);
          },
        },
      ),
        o("toReversed");
    },
    700582: function (e, n, t) {
      var r = t(200651),
        i = t(192379),
        a = t(481060),
        o = t(372900);
      n.Z = i.memo(function (e) {
        var n, t, l, s;
        let {
            user: u,
            size: c = a.AvatarSizes.SIZE_32,
            animate: d = !1,
            "aria-hidden": m = !1,
            ...h
          } = e,
          f = i.useContext(o.Z);
        return (0, r.jsx)(a.Avatar, {
          src:
            ((n = u),
            (t = (0, a.getAvatarSize)(c)),
            (l = d),
            (s = f),
            n.getAvatarURL(s, t, l)),
          size: c,
          "aria-label": m ? void 0 : u.username,
          "aria-hidden": m,
          ...h,
        });
      });
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
        a = t(585483),
        o = t(981631);
      let l = () => i.Z.hasLayers() || (0, r.hasAnyModalOpen)(),
        s =
          12633 == t.j
            ? {
                binds: ["right"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!l()) return a.S.dispatch(o.CkL.CAROUSEL_NEXT), !1;
                },
              }
            : null,
        u =
          12633 == t.j
            ? {
                binds: ["left"],
                comboKeysBindGlobal: !0,
                action() {
                  if (!l()) return a.S.dispatch(o.CkL.CAROUSEL_PREV), !1;
                },
              }
            : null,
        c = {
          binds: ["right", "down", "space"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(o.CkL.MODAL_CAROUSEL_NEXT), !1),
        },
        d = {
          binds: ["left", "up"],
          comboKeysBindGlobal: !0,
          action: () => (a.S.dispatch(o.CkL.MODAL_CAROUSEL_PREV), !1),
        },
        m = {
          binds: ["esc"],
          comboKeysBindGlobal: !0,
          action() {
            if (a.S.hasSubscribers(o.CkL.MODAL_CLOSE))
              return a.S.dispatch(o.CkL.MODAL_CLOSE), !1;
          },
        };
    },
    376641: function (e, n, t) {
      t.d(n, {
        P: function () {
          return a;
        },
        v: function () {
          return o;
        },
      });
      var r = t(817718),
        i = t(981631);
      let a = {
          [i.EkH.MODAL_CAROUSEL_NEXT]: r.XM,
          [i.EkH.MODAL_CAROUSEL_PREV]: r.py,
          [i.EkH.CLOSE_MODAL]: r.U3,
        },
        o = { [i.EkH.CLOSE_MODAL]: r.U3 };
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
        a = t(626135),
        o = t(981631);
      function l(e, n, t) {
        a.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
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
        a.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
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
          numDestinations: l,
          numDestinationChanges: s,
          numQueryChanges: u,
          anyDestinationHasSlowmode: c,
        } = e;
        a.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
          channel_id: n,
          message_id: t,
          has_error: r,
          has_context_message: i,
          num_destinations: l,
          num_destination_changes: s,
          num_query_changes: u,
          any_destination_has_slowmode: c,
        });
      }
      function c(e, n) {
        a.default.track(o.rMx.FORWARD_COPY_LINK, {
          channel_id: e,
          message_id: n,
        });
      }
      function d() {
        return r.useMemo(
          () =>
            (0, i.once)((e, n, t) => {
              a.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
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
              a.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
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
              a.default.track(o.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
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
        a = t(430198),
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
      function m(e) {
        var n;
        if (!d(e)) return !1;
        let t =
          null === (n = o.Z.getChannel(e.channel_id)) || void 0 === n
            ? void 0
            : n.guild_id;
        return (
          !(null != t && a.Z.isChannelOrThreadParentGated(t, e.channel_id)) &&
          !0
        );
      }
      function h(e) {
        let n = (0, i.e7)([l.Z, a.Z, o.Z], () => {
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
            (null != r && a.Z.isChannelOrThreadParentGated(r, e.channel_id))
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
      var i = t(481060),
        a = t(822869);
      let o = "forward-modal";
      function l(e) {
        let {
          messageId: n,
          channelId: l,
          message: s,
          source: u,
          initialSelectedDestinations: c = [],
          forwardOptions: d,
          onRequestSent: m,
        } = e;
        (0, a.Lb)(l, n, u),
          (0, i.openModalLazy)(
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
                  onRequestSent: m,
                });
            },
            { modalKey: o },
          );
      }
      function s() {
        (0, i.closeModal)(o);
      }
      function u(e) {
        let {
          messageId: n,
          channelId: a,
          message: o,
          failedDestinations: l,
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
              channelId: a,
              message: o,
              failedDestinations: l,
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
        a = t(591759);
      let o = /^.*\.discordapp\.net$/,
        l = "cdn.discordapp.com",
        s = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        u = new Set(["jpg", "jpeg", "png"]),
        c = (e) => {
          var n, t, r, i;
          return null === (i = a.Z.toURLSafe(e)) || void 0 === i
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
        let n = a.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (o.test(n.hostname) || n.host === l) && d(e) && null != t && s.has(t)
        );
      }
      function h(e) {
        let n = a.Z.toURLSafe(e);
        if (null == n) return !1;
        let t = c(e);
        return (
          (o.test(n.hostname) || n.host === l) && d(e) && null != t && u.has(t)
        );
      }
      function f(e) {
        let n = a.Z.toURLSafe(e);
        return null == n || n.host === l
          ? e
          : "https://media.discordapp.net" === n.origin
            ? ((n.host = l),
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
        a = t(120356),
        o = t.n(a),
        l = t(481060),
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
        C = t(92718);
      function x() {
        (0, l.closeModal)(g.U);
      }
      function S(e) {
        let { onClick: n, tooltipText: t, children: i, selected: a, ...s } = e;
        return (0, r.jsx)(l.Tooltip, {
          text: t,
          children: (e) => {
            let { ...t } = e;
            return (0, r.jsx)(l.Button, {
              ...t,
              onClick: n,
              look: l.ButtonLooks.BLANK,
              size: l.ButtonSizes.ICON,
              color: l.ButtonColors.CUSTOM,
              className: o()(C.actionButton, { [C.selected]: a }),
              innerClassName: C.actionButtonInner,
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
            ? (0, r.jsx)(l.MagnifyingGlassMinusIcon, {})
            : (0, r.jsx)(l.MagnifyingGlassPlusIcon, {}),
        });
      }
      function E(e) {
        var n, t;
        let { item: a } = e,
          o =
            null === (n = a.sourceMetadata) || void 0 === n
              ? void 0
              : n.message,
          d =
            null === (t = a.sourceMetadata) || void 0 === t
              ? void 0
              : t.identifier,
          m = i.useCallback(() => {
            if (null != o && null != d) {
              if ("embed" === d.type) {
                (0, c.l8)({
                  messageId: o.id,
                  channelId: o.channel_id,
                  message: o,
                  source: "media-viewer",
                  forwardOptions: { onlyEmbedIndices: [d.embedIndex] },
                  onRequestSent: x,
                });
                return;
              }
              (0, c.l8)({
                messageId: o.id,
                channelId: o.channel_id,
                message: o,
                source: "media-viewer",
                forwardOptions: { onlyAttachmentIds: [d.attachmentId] },
                onRequestSent: x,
              });
            }
          }, [o, d]),
          { canForwardMessages: h } = (0, s.yk)(
            { location: "ForwardLink" },
            { autoTrackExposure: !1 },
          );
        return null != o && h && (0, u.h)(o)
          ? (0, r.jsx)(S, {
              onClick: m,
              tooltipText: _.intl.string(_.t.I3ltXF),
              children: (0, r.jsx)(l.ArrowAngleRightUpIcon, {}),
            })
          : null;
      }
      function I(e) {
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
              (0, l.showToast)(
                (0, l.createToast)(
                  _.intl.string(_.t.R0RpRU),
                  l.ToastType.FAILURE,
                ),
              );
            }
        }
        return (0, r.jsx)(S, {
          onClick: i,
          tooltipText: _.intl.string(_.t["1WjMbG"]),
          children: (0, r.jsx)(l.DownloadIcon, {}),
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
          children: (0, r.jsx)(l.WindowLaunchIcon, {}),
        });
      }
      function L(e) {
        let {
          item: n,
          canCopyImage: t,
          canCopyLink: i,
          onClose: a,
          onSelect: o,
        } = e;
        async function s() {
          let e = (0, d.s$)(n.url);
          try {
            await f.ZP.copyImage(e),
              (0, l.showToast)(
                (0, l.createToast)(
                  _.intl.string(_.t["t5VZ8/"]),
                  l.ToastType.SUCCESS,
                ),
              );
          } catch (e) {
            (0, l.showToast)(
              (0, l.createToast)(
                _.intl.string(_.t.R0RpRU),
                l.ToastType.FAILURE,
              ),
            );
          }
        }
        return (0, r.jsx)(l.Menu, {
          navId: "image-menu",
          "aria-label": "placeholder",
          onClose: a,
          onSelect: o,
          children: (0, r.jsxs)(l.MenuGroup, {
            children: [
              t &&
                (0, r.jsx)(
                  l.MenuItem,
                  {
                    label: _.intl.string(_.t.tvUqWl),
                    id: "media-viewer-copy-image",
                    action: s,
                  },
                  "media-viewer-copy-image",
                ),
              i &&
                (0, r.jsx)(
                  l.MenuItem,
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
                          (0, l.showToast)(
                            (0, l.createToast)(
                              _.intl.string(_.t["L/PwZW"]),
                              l.ToastType.SUCCESS,
                            ),
                          );
                      } catch (e) {
                        (0, l.showToast)(
                          (0, l.createToast)(
                            _.intl.string(_.t.R0RpRU),
                            l.ToastType.FAILURE,
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
          [t, a] = i.useState(!1),
          o =
            "IMAGE" === n.type &&
            h.isPlatformEmbedded &&
            null == n.children &&
            f.ZP.canCopyImage() &&
            (0, d.Lz)(n.url),
          s = (0, d.Jj)(n.url);
        return o || s
          ? (0, r.jsx)(l.Popout, {
              shouldShow: t,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => a(!1),
              renderPopout: () =>
                (0, r.jsx)(L, {
                  item: n,
                  canCopyImage: o,
                  canCopyLink: s,
                  onClose: () => a(!1),
                }),
              children: (e) => {
                let { onClick: n } = e;
                return (0, r.jsx)(S, {
                  tooltipText: _.intl.string(_.t.UKOtz8),
                  onClick: () => a(!t),
                  selected: t,
                  children: (0, r.jsx)(l.MoreHorizontalIcon, {}),
                });
              },
            })
          : null;
      }
      n.Z = i.memo(function (e) {
        let { item: n, hideMediaOptions: t } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: C.actionButtons,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, r.jsx)(v, {}),
              !t &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(E, { item: n }),
                    (0, r.jsx)(I, { item: n }),
                    (0, r.jsx)(y, { item: n }),
                    (0, r.jsx)(A, { item: n }),
                  ],
                }),
            ],
          }),
        });
      });
    },
    730606: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      }),
        t(477488),
        t(47120);
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        o = t.n(a),
        l = t(299608),
        s = t.n(l),
        u = t(100621),
        c = t(484957),
        d = t(481060),
        m = t(95398),
        h = t(247206),
        f = t(134432),
        p = t(169525),
        g = t(585483),
        _ = t(212459),
        C = t(683528),
        x = t(549635),
        S = t(981631),
        v = t(388032),
        E = t(193889);
      function I(e, n) {
        return ((e % n) + n) % n;
      }
      function y(e) {
        let { width: n, height: t } = e;
        return null == n || 0 === n || null == t || 0 === t;
      }
      function L(e) {
        let { children: n, isObscured: t, src: a } = e,
          [l, s] = i.useState(!1),
          u = i.useCallback(() => {
            s((e) => !e);
          }, []);
        return t
          ? (0, r.jsx)(m.a.Provider, {
              value: l,
              children: (0, r.jsx)(
                m.Z,
                {
                  type: m.Z.Types.ATTACHMENT,
                  reason: p.wk.EXPLICIT_CONTENT,
                  obscured: !0,
                  isSingleMosaicItem: !0,
                  onToggleObscurity: u,
                  children: (e) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("div", {
                        className: o()(E.obscureWrapper, { [E.obscure]: e }),
                        children: n(e),
                      }),
                    }),
                },
                a,
              ),
            })
          : (0, r.jsx)(r.Fragment, { children: n(!1) });
      }
      function A(e) {
        var n;
        let {
            items: t,
            onIndexChange: a,
            startIndex: o = 0,
            shouldRedactExplicitContent: l = !1,
            shouldHideMediaOptions: m = !1,
          } = e,
          [p, I] = i.useState(o),
          A = i.useRef(o),
          [R, j] = i.useState([]),
          { zoomed: M, setZoomed: O } = (0, _.Y)();
        i.useEffect(() => {
          var e, n;
          let r = (((p + 1) % (e = t.length)) + e) % e;
          let i = (((p - 1) % (n = t.length)) + n) % n;
          y(t[r]) && (0, f.po)(t[r].url), y(t[i]) && (0, f.po)(t[i].url);
        }, [p, t]);
        let b = i.useCallback(
          (e) => {
            var n;
            let r = e - A.current;
            I((e = ((e % (n = t.length)) + n) % n)),
              (A.current = e),
              j((e) => [...e, r]),
              null == a || a(e),
              O(!1);
          },
          [a, t, O],
        );
        i.useEffect(() => {
          let e = s()(() => {
              b(A.current + 1);
            }, 300),
            n = s()(() => {
              b(A.current - 1);
            }, 300);
          return (
            g.S.subscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
            g.S.subscribe(S.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
              g.S.unsubscribe(S.CkL.MODAL_CAROUSEL_NEXT, e),
                g.S.unsubscribe(S.CkL.MODAL_CAROUSEL_PREV, n);
            }
          );
        }, [b, O]);
        let T = t[p],
          P = (0, h.KP)({ type: h.lJ.GenericMedia, media: T }, l),
          k = m
            ? (e) => {
                e.stopPropagation(), e.preventDefault();
              }
            : void 0,
          D = (function (e) {
            if (0 === e) return ["translateX(0)"];
            let n = ["translateX(100px)", "translateX(-100px)"];
            return e > 0 ? n : n.toReversed();
          })(null !== (n = R[R.length - 1]) && void 0 !== n ? n : 0),
          N = (0, d.useTransition)(T, {
            key: T.url,
            from: { opacity: 0, transform: D[0] },
            enter: { opacity: 1, transform: "translateX(0)" },
            leave: { opacity: 0, transform: D[D.length - 1] },
            config: { friction: 20, tension: 250 },
          }),
          Z = t.length > 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: E.wrapper,
              children: [
                Z
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: E.navPrev,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: (e) => {
                        e.stopPropagation(),
                          g.S.dispatch(S.CkL.MODAL_CAROUSEL_PREV);
                      },
                      icon: (0, r.jsx)(c.j, {}),
                      tooltip: v.intl.string(v.t.vgfxaG),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: E.mediaContainer,
                  children: N((e, n) =>
                    (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)(
                        u.animated.div,
                        {
                          style: e,
                          className: E.mediaWrapper,
                          children: (0, r.jsx)(L, {
                            isObscured: !M && P,
                            src: n.url,
                            children: (e) =>
                              (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("div", {
                                  onClick: (e) => e.stopPropagation(),
                                  children: (0, r.jsx)(x.Z, {
                                    media: n,
                                    obscured: e,
                                    onContextMenu: k,
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
                Z
                  ? (0, r.jsx)(d.CircleIconButton, {
                      className: E.navNext,
                      size: d.CircleIconButtonSizes.SIZE_36,
                      onClick: (e) => {
                        e.stopPropagation(),
                          g.S.dispatch(S.CkL.MODAL_CAROUSEL_NEXT);
                      },
                      icon: (0, r.jsx)(d.ArrowLargeRightIcon, {}),
                      tooltip: v.intl.string(v.t.XiOHRU),
                      color: d.CircleIconButtonColors.PRIMARY,
                    })
                  : null,
              ],
            }),
            Z &&
              (0, r.jsx)(C.Z, {
                items: t,
                currentIndex: p,
                onGalleryItemClick: b,
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
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        o = t.n(a),
        l = t(481060),
        s = t(607070),
        u = t(124347),
        c = t(52824),
        d = t(549635),
        m = t(217702),
        h = t(388032),
        f = t(244190);
      function p(e) {
        return "media-view-scroll-thumbnail-".concat(e);
      }
      let g = i.memo(function (e) {
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
              mediaLayoutType: m.hV.MOSAIC,
            });
      });
      function _(e) {
        let { items: n, currentIndex: t, onGalleryItemClick: a } = e,
          u = i.useRef(null);
        return (
          i.useLayoutEffect(() => {
            let e = document.getElementById(p(t));
            null != u.current &&
              null != e &&
              u.current.scrollIntoViewNode({
                node: e,
                animate: !s.Z.useReducedMotion,
                padding: 24,
              });
          }, [t]),
          (0, r.jsx)("div", {
            className: f.galleryContainer,
            children: (0, r.jsx)(l.AdvancedScrollerThin, {
              orientation: "horizontal",
              className: f.gallery,
              ref: u,
              onClick: (e) => e.stopPropagation(),
              children: n.map((e, i) => {
                let s = i === t,
                  u = s ? h.t["qv/U5e"] : h.t.zviMAA;
                return (0, r.jsxs)(
                  l.Clickable,
                  {
                    id: p(i),
                    className: f.galleryItem,
                    "aria-label": h.intl.formatToPlainString(u, {
                      pageNumber: i + 1,
                      totalPages: n.length,
                    }),
                    onClick: () => a(i),
                    children: [
                      (0, r.jsx)("div", {
                        className: o()(f.galleryItemOverlay, {
                          [f.selected]: s,
                        }),
                      }),
                      (0, r.jsx)(g, { item: e }),
                    ],
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
        a = t(124347),
        o = t(80966),
        l = t(524444),
        s = t(52824),
        u = t(956664),
        c = t(589530),
        d = t(591759),
        m = t(718263);
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
            type: C,
            maxWidth: x,
            maxHeight: S,
            ...v
          } = n,
          { width: E, height: I } = (0, u.zp)(
            null != d ? d : 0,
            null != f ? f : 0,
          ),
          y = (0, s.q)({ proxyURL: g, url: p }),
          L = !(null == d || 0 === d || null == f || 0 === f);
        if ("VIDEO" === C && L && null != g) {
          var A;
          let e = h(g);
          if (null == e) return null;
          let a =
            null !== (A = n.renderLinkComponent) && void 0 !== A ? A : l.iT;
          return (0, r.jsx)(o.Z, {
            ...v,
            src: y,
            width: d,
            height: f,
            maxWidth: E,
            maxHeight: I,
            responsive: !0,
            poster: e,
            naturalWidth: d,
            naturalHeight: f,
            volume: c.FC,
            autoMute: c.rs,
            onVolumeChange: c.jA,
            onMute: c.Zj,
            renderLinkComponent: a,
            autoPlay: !t,
            alt: _,
            onContextMenu: i,
          });
        }
        if ("IMAGE" === C)
          return L
            ? (0, r.jsx)(a.ZP, {
                ...v,
                src: y,
                width: d,
                height: f,
                shouldLink: !1,
                maxWidth: E,
                maxHeight: I,
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
            return C;
          },
        }),
        t(47120);
      var r = t(200651),
        i = t(192379),
        a = t(120356),
        o = t.n(a),
        l = t(481060),
        s = t(376641),
        u = t(714338),
        c = t(585483),
        d = t(212459),
        m = t(73249),
        h = t(730606),
        f = t(860153),
        p = t(981631),
        g = t(388032),
        _ = t(619377);
      function C(e) {
        let {
            onClose: n,
            items: t,
            startingIndex: a,
            onIndexChange: C,
            shouldRedactExplicitContent: x,
            shouldHideMediaOptions: S = !1,
            className: v,
            transitionState: E,
            ...I
          } = e,
          [y, L] = i.useState(null != a ? a : 0),
          [A, R] = i.useState(!1);
        i.useEffect(() => {
          if (null != n)
            return (
              c.S.subscribe(p.CkL.MEDIA_MODAL_CLOSE, n),
              () => {
                c.S.unsubscribe(p.CkL.MEDIA_MODAL_CLOSE, n);
              }
            );
        }, [n]),
          i.useEffect(
            () => (
              E === l.ModalTransitionState.ENTERED &&
                (u.Z.disable(), u.Z.enableTemp(s.P)),
              E === l.ModalTransitionState.HIDDEN &&
                (u.Z.disable(), u.Z.enableTemp(s.v)),
              () => {
                u.Z.disableTemp();
              }
            ),
            [E],
          );
        let j = i.useCallback(
            (e) => {
              L(e), null == C || C(e);
            },
            [C],
          ),
          M = i.useMemo(() => ({ zoomed: A, setZoomed: R }), [A]),
          O = t[y];
        return (0, r.jsx)(l.ThemeProvider, {
          theme: p.BRd.DARK,
          children: (e) =>
            (0, r.jsx)(l.ModalRoot, {
              hideShadow: !0,
              className: o()(_.carouselModal, e),
              transitionState: E,
              ...I,
              size: l.ModalSize.DYNAMIC,
              fullscreenOnMobile: !1,
              "aria-label": g.intl.string(g.t.AMTX3t),
              onClick: A ? void 0 : n,
              children: (0, r.jsxs)(d.z.Provider, {
                value: M,
                children: [
                  (0, r.jsx)(f.Z, { item: O, onClose: n }),
                  (0, r.jsx)(h.Z, {
                    items: t,
                    startIndex: y,
                    onIndexChange: j,
                    shouldRedactExplicitContent: x,
                    shouldHideMediaOptions: S,
                  }),
                  (0, r.jsx)("div", {
                    className: _.actionButtonContainer,
                    children: (0, r.jsx)(m.Z, {
                      item: O,
                      hideMediaOptions:
                        ("IMAGE" === O.type && null == O.original) || S,
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
        a = t(442837),
        o = t(481060),
        l = t(700582),
        s = t(372900),
        u = t(318713),
        c = t(123145),
        d = t(592125),
        m = t(182763);
      let h = i.memo(function (e) {
        let { message: n } = e,
          t = (0, a.e7)([d.Z], () => d.Z.getChannel(n.channel_id));
        return null == t
          ? null
          : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("div", {
                className: m.messageContents,
                onClick: (e) => e.stopPropagation(),
                children: (0, r.jsxs)(s.Z.Provider, {
                  value: t.guild_id,
                  children: [
                    (0, r.jsx)(l.Z, { user: n.author }),
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)(c.Z, { message: n, channel: t }),
                    }),
                    (0, r.jsx)(u.Z, {
                      timestamp: n.timestamp,
                      className: m.timestamp,
                    }),
                  ],
                }),
              }),
            });
      });
      function f(e) {
        var n;
        let { item: t, onClose: i } = e,
          a =
            null === (n = t.sourceMetadata) || void 0 === n
              ? void 0
              : n.message;
        return (0, r.jsxs)("div", {
          className: m.topBar,
          children: [
            (0, r.jsx)(o.Button, {
              look: o.ButtonLooks.BLANK,
              color: o.ButtonColors.CUSTOM,
              size: o.ButtonSizes.ICON,
              className: m.closeButton,
              innerClassName: m.closeButtonInner,
              onClick: i,
              children: (0, r.jsx)(o.XSmallIcon, {}),
            }),
            null != a && (0, r.jsx)(h, { message: a }),
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
          return i;
        },
      });
      var r = t(192379);
      let i = (0, r.createContext)({ zoomed: !1, setZoomed: () => {} });
      function a() {
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
    92718: function (e, n, t) {
      e.exports = {
        actionButtons: "actionButtons_dda074",
        actionButton: "actionButton_dda074",
        selected: "selected_dda074",
        actionButtonInner: "actionButtonInner_dda074",
      };
    },
    193889: function (e, n, t) {
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
    244190: function (e, n, t) {
      e.exports = {
        galleryContainer: "galleryContainer_b24655",
        gallery: "gallery_b24655",
        galleryItemOverlay: "galleryItemOverlay_b24655",
        selected: "selected_b24655",
        galleryItem: "galleryItem_b24655",
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
        closeButtonInner: "closeButtonInner_bf8df0",
      };
    },
  },
]);
//# sourceMappingURL=0b6e2a3f42517cc893b9.js.map
