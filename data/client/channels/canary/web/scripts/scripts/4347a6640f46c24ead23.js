"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26775"],
  {
    394059: function (t, n, e) {
      var i, o;
      e.d(n, {
        K: function () {
          return i;
        },
      }),
        ((o = i || (i = {}))[(o.STREAM = 0)] = "STREAM"),
        (o[(o.VIDEO = 1)] = "VIDEO");
    },
    27584: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        o = e(846027),
        r = e(314897),
        l = e(131951),
        a = e(981631),
        u = e(65154);
      function d(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u.Yn.DEFAULT,
          e = (0, i.e7)([r.default], () => r.default.getId()),
          d = (0, i.e7)(
            [l.Z],
            () => l.Z.supports(u.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled(),
          ),
          c = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(e, n), [e, n]),
          s = null == t || t === e;
        return [
          s && (d || c),
          c,
          (t) => {
            let i = t ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            o.Z.setDisableLocalVideo(e, i, n);
          },
        ];
      }
    },
    295510: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(153867),
        r = e(468026),
        l = e(394059),
        a = e(388032);
      function u(t) {
        let { type: n, onConfirm: e, ...u } = t,
          d =
            n === l.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          c =
            n === l.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(r.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            o.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              e();
          },
          body: c,
          ...u,
        });
      }
    },
    167675: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return f;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var o = e(442837),
        r = e(481060),
        l = e(740492),
        a = e(27584),
        u = e(295510),
        d = e(394059),
        c = e(65154),
        s = e(388032);
      function f(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          [e, f, Z] = (0, a.Z)(t, n),
          p = (0, o.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(r.MenuCheckboxItem, {
              id: "self-video-hide",
              label: s.intl.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                if (p || f) return Z(!f);
                (0, r.openModal)((t) =>
                  (0, i.jsx)(u.Z, {
                    ...t,
                    type: d.K.VIDEO,
                    onConfirm: () => Z(!f),
                  }),
                );
              },
            })
          : null;
      }
    },
    740579: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var i = e(200651),
        o = e(192379),
        r = e(481060),
        l = e(239091),
        a = e(167675),
        u = e(249453),
        d = e(991249),
        c = e(388032);
      function s(t) {
        let { onSelect: n, onClose: e, widget: s } = t,
          f = (0, a.Z)(),
          Z = (0, u.Z)(s),
          p = o.useRef(e),
          g = (0, d.Z)(
            s.id,
            "boolean" != typeof s.meta.horizontal || s.meta.horizontal,
          );
        return (
          o.useEffect(() => void (p.current = e)),
          o.useEffect(() => () => p.current(), []),
          (0, i.jsxs)(r.Menu, {
            navId: "overlay-video-widget-context-menu",
            onClose: l.Zy,
            "aria-label": c.intl.string(c.t.tPfVWl),
            onSelect: n,
            children: [f, g, Z],
          })
        );
      }
    },
    249453: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(765250),
        l = e(388032);
      function a(t) {
        return (0, i.jsx)(o.MenuControlItem, {
          id: "opacity",
          "aria-haspopup": !0,
          label: l.intl.string(l.t.OVovCQ),
          control: (n, e) =>
            (0, i.jsx)(o.MenuSliderControl, {
              ...n,
              ref: e,
              value: 100 * t.opacity,
              maxValue: 100,
              onChange: (n) => (0, r.nv)({ widgetId: t.id, opacity: n / 100 }),
              "aria-label": l.intl.string(l.t.kbFsAA),
            }),
        });
      }
    },
    991249: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(239091),
        l = e(765250),
        a = e(388032);
      function u(t, n) {
        return (0, i.jsx)(
          o.MenuCheckboxItem,
          {
            label: a.intl.string(a.t.XQQQFB),
            checked: n,
            id: "widget-layout-type",
            action: () => {
              (0, l.zG)(t, { horizontal: !n }), (0, r.Zy)();
            },
          },
          "widget-layout-type",
        );
      }
    },
  },
]);
//# sourceMappingURL=4347a6640f46c24ead23.js.map
