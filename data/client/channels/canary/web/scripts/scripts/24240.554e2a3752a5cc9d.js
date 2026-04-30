"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24240"],
  {
    855187(e, a, l) {
      l.d(a, { A: () => p });
      var t = l(627968);
      l(64700);
      var i = l(17928),
        n = l(373495),
        c = l(192308),
        d = l(477782),
        o = l(635739),
        r = l(39623),
        s = l(952572),
        A = l(495544),
        h = l(51760),
        u = l(985018);
      function p(e, a) {
        let p = (0, n.k)(),
          { videoEnabled: v, hasVideoDevice: b } = (0, i.cf)([h.Ay], () => ({
            videoEnabled: h.Ay.isVideoEnabled(),
            hasVideoDevice: h.Ay.isVideoAvailable(),
          })),
          f = (0, i.bG)([A.default], () => A.default.getId() === e),
          g = (0, s.A)();
        return (!v || g) && f && b
          ? (0, t.jsx)(d.Dr, {
              id: "change-video-background",
              label: v
                ? u.intl.string(u.t.mZKxHb)
                : u.intl.string(u.t["vkV93/"]),
              action: function () {
                (0, c.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      l.e("44398"),
                      l.e("80848"),
                      l.e("21341"),
                      l.e("66759"),
                      l.e("20287"),
                      l.e("28367"),
                      l.e("18441"),
                      l.e("21690"),
                      l.e("31644"),
                      l.e("9915"),
                      l.e("58337"),
                      l.e("20683"),
                      l.e("80436"),
                      l.e("6809"),
                      l.e("97162"),
                      l.e("95782"),
                      l.e("39176"),
                      l.e("10534"),
                    ]).then(l.bind(l, 308229));
                    return (a) => (0, t.jsx)(e, { ...a, videoEnabled: v });
                  },
                  {
                    modalKey: "camera-preview",
                    contextKey:
                      null != a ? (0, c.modalContextFromAppContext)(a) : p,
                  },
                );
              },
              icon: v ? o.f : r.b,
              leadingAccessory: { type: "icon", icon: v ? o.f : r.b },
            })
          : null;
      }
    },
    952572(e, a, l) {
      l.d(a, { A: () => c });
      var t = l(17928),
        i = l(51760),
        n = l(463951);
      function c() {
        return (0, t.bG)([i.Ay], () => (0, n.A)(i.Ay));
      }
    },
    635739(e, a, l) {
      l.d(a, { f: () => d });
      var t = l(627968);
      l(64700);
      var i = l(661531),
        n = l(996682),
        c = l(27989);
      let d = (e) => {
        let {
            size: a = "md",
            width: l,
            height: d,
            color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...s
          } = e,
          A = (0, c.J)(a),
          h = A?.width ?? l,
          u = A?.height ?? d;
        return (0, t.jsx)("svg", {
          ...(0, n.A)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: u,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M21.7 2.3a1 1 0 0 1 0 1.4l-4.92 4.93c-.12.12-.33.09-.41-.06-.23-.42-.52-.8-.85-1.13a.26.26 0 0 1-.01-.36l4.78-4.79a1 1 0 0 1 1.42 0ZM20 20.6c0 .26.36.45.55.27l1.16-1.16a1 1 0 0 0-1.42-1.42l-.4.41a.25.25 0 0 0-.07.24c.12.53.18 1.09.18 1.66ZM4 20.6c0 .2.02.4.05.6a.26.26 0 0 1-.07.23l-.27.28a1 1 0 0 1-1.42-1.42l1.35-1.34c.19-.19.53.01.48.27-.08.45-.12.91-.12 1.38ZM16.7 3.7l-2.58 2.6a.26.26 0 0 1-.28.05A4.99 4.99 0 0 0 12 6c-.15 0-.23-.18-.13-.29L15.3 2.3a1 1 0 1 1 1.42 1.42ZM7 11c0-.15-.18-.23-.29-.13L2.3 15.3a1 1 0 1 0 1.42 1.42l3.58-3.6c.08-.06.1-.17.06-.27A4.99 4.99 0 0 1 7 11ZM18.23 15.36c-.1.1-.1.24-.02.35.32.37.6.77.83 1.2.09.14.29.18.41.05l2.26-2.25a1 1 0 0 0-1.42-1.42l-2.06 2.07ZM21.7 9.7l-4.62 4.64a.26.26 0 0 1-.33.03l-.45-.3a.27.27 0 0 1-.09-.37c.38-.6.64-1.27.74-2 0-.05.03-.1.07-.14L20.3 8.3a1 1 0 1 1 1.42 1.42ZM11.7 2.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4-1.4l8-8a1 1 0 0 1 1.4 0ZM6.7 3.7a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3ZM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 20.6c0-3.1 2.5-5.6 5.6-5.6h.8c3.1 0 5.6 2.5 5.6 5.6 0 .77-.63 1.4-1.4 1.4a.17.17 0 0 1-.16-.12c-.19-.7-.44-1.36-.68-1.89-.11-.24-.43-.15-.4.12l.08.8a1 1 0 0 1-1 1.09H9.55a1 1 0 0 1-.99-1.1l.08-.79c.03-.27-.29-.36-.4-.12-.24.53-.5 1.19-.68 1.89a.17.17 0 0 1-.16.12A1.4 1.4 0 0 1 6 20.6Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=24240.554e2a3752a5cc9d.js.map
