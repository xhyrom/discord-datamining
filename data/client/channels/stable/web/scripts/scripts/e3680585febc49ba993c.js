"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86590"],
  {
    384331: function (e, n, l) {
      l.r(n),
        l.d(n, {
          FailedChannelRow: function () {
            return p;
          },
          FailedGroupDMRow: function () {
            return A;
          },
          FailedUserRow: function () {
            return L;
          },
          ForwardFailedAlertModal: function () {
            return C;
          },
        });
      var i = l(735250),
        t = l(470079),
        a = l(442837),
        r = l(481060),
        s = l(700582),
        o = l(933557),
        c = l(266076),
        u = l(810123),
        d = l(592125),
        f = l(430824),
        h = l(158776),
        m = l(699516),
        x = l(594174),
        _ = l(51144),
        g = l(912332),
        Z = l(689938),
        j = l(703523);
      function S(e) {
        let { icon: n, label: l } = e;
        return (0, i.jsxs)("div", {
          className: j.failedRow,
          children: [
            n,
            (0, i.jsx)(r.Text, {
              className: j.label,
              variant: "text-md/medium",
              lineClamp: 1,
              children: l,
            }),
          ],
        });
      }
      function A(e) {
        let { channel: n } = e,
          l = (0, o.ZP)(n);
        return (0, i.jsx)(S, {
          icon: (0, i.jsx)(c.Z, {
            "aria-hidden": !0,
            size: r.AvatarSizes.SIZE_32,
            channel: n,
            experimentLocation: "forward-failed-retry-modal",
          }),
          label: l,
        });
      }
      function L(e) {
        let { user: n } = e,
          l = _.ZP.useName(n),
          t = (0, a.e7)([m.Z], () => m.Z.getNickname(n.id)),
          o = (0, a.e7)([h.Z], () => h.Z.getStatus(n.id));
        return (0, i.jsx)(S, {
          icon: (0, i.jsx)(s.Z, {
            "aria-hidden": !0,
            size: r.AvatarSizes.SIZE_32,
            user: n,
            status: o,
          }),
          label: null != t ? t : l,
        });
      }
      function p(e) {
        let { channel: n } = e,
          l = (0, a.e7)([f.Z], () =>
            f.Z.getGuild(null == n ? void 0 : n.guild_id),
          ),
          t = (0, o.ZP)(n);
        return (0, i.jsx)(S, {
          icon: (0, i.jsx)(u.Z, { size: u.E.SMALL_32, guild: l, channel: n }),
          label: t,
        });
      }
      function v(e) {
        let { destination: n } = e,
          { channel: l, user: t } = (0, a.cj)([d.Z, x.default], () => ({
            channel: "channel" === n.type ? d.Z.getChannel(n.id) : null,
            user: "user" === n.type ? x.default.getUser(n.id) : null,
          }));
        if (null == l ? void 0 : l.isGroupDM())
          return (0, i.jsx)(A, { channel: l });
        if (null != t) return (0, i.jsx)(L, { user: t });
        if (null != l) return (0, i.jsx)(p, { channel: l });
        return null;
      }
      function C(e) {
        let {
            messageId: n,
            channelId: l,
            failedDestinations: a,
            forwardOptions: s,
            ...o
          } = e,
          c = t.useCallback(() => {
            (0, g.l8)({
              messageId: n,
              channelId: l,
              source: "retry-modal",
              initialSelectedDestinations: a,
              forwardOptions: s,
            });
          }, [l, a, n, s]);
        return (0, i.jsxs)(r.ConfirmModal, {
          header: Z.Z.Messages.MESSAGE_FORWARD_FAILED,
          confirmText: Z.Z.Messages.RETRY,
          cancelText: Z.Z.Messages.CANCEL,
          confirmButtonColor: r.Button.Colors.BRAND,
          onConfirm: c,
          ...o,
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-md/medium",
              children: Z.Z.Messages.MESSAGE_FORWARD_FAILED_BODY.format({
                count: a.length,
              }),
            }),
            (0, i.jsx)("div", {
              className: j.failedDestinations,
              children: a.map((e, n) => (0, i.jsx)(v, { destination: e }, n)),
            }),
          ],
        });
      }
    },
    810123: function (e, n, l) {
      l.d(n, {
        E: function () {
          return i;
        },
      });
      var i,
        t = l(735250),
        a = l(120356),
        r = l.n(a),
        s = l(468194),
        o = l(471445),
        c = l(686546),
        u = l(664481);
      (i || (i = {})).SMALL_32 = "SMALL_32";
      let d = { SMALL_32: 24 },
        f = { SMALL_32: [13, 11, 10, 10, 10, 10, 10] };
      n.Z = function (e) {
        var n, l, i;
        let {
          className: a,
          iconClassName: h,
          size: m,
          channel: x,
          guild: _,
          locked: g,
          hasActiveThreads: Z,
        } = e;
        if (null == _) return null;
        let j = _.getIconURL(48),
          S = f[m],
          A = d[m],
          L = (0, o.KS)(x, _, { locked: g, hasActiveThreads: Z });
        if (null == L) return null;
        let p = (0, s.Zg)(
          null !== (n = null == _ ? void 0 : _.toString()) && void 0 !== n
            ? n
            : null,
        );
        return (0, t.jsxs)("div", {
          role: "img",
          className: a,
          children: [
            (0, t.jsx)(c.ZP, {
              mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
              children:
                null != j
                  ? (0, t.jsx)("img", {
                      alt: "",
                      src: j,
                      className: u.channelGuildIcon,
                      style: { width: A, height: A },
                    })
                  : (0, t.jsx)("div", {
                      className: r()(u.channelGuildIcon, u.acronym),
                      style: {
                        fontSize:
                          ((l = S),
                          (i = p).length - 1 > l.length
                            ? l[l.length - 1]
                            : l[i.length - 1]),
                        width: A,
                        height: A,
                      },
                      children: p,
                    }),
            }),
            (0, t.jsx)(L, {
              className: r()(u.icon, u.iconWithGuildIcon, h),
              color: "currentColor",
            }),
          ],
        });
      };
    },
    703523: function (e, n, l) {
      e.exports = {
        failedDestinations: "failedDestinations_a575a1",
        failedRow: "failedRow_a575a1",
        label: "label_a575a1",
      };
    },
    664481: function (e, n, l) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
  },
]);
//# sourceMappingURL=e3680585febc49ba993c.js.map
