"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25241"],
  {
    270816(e, t, i) {
      i.d(t, { H: () => u });
      var s = i(627968),
        l = i(64700),
        c = i(477782),
        n = i(827343),
        d = i(74848),
        r = i(731854),
        a = i(985018);
      function u(e) {
        let {
            deviceType: t,
            analyticsLocations: i,
            asSubmenu: u = !1,
            onDeviceSelect: b,
            selectedDeviceId: p,
            menuGroupOverrideProps: D,
            menuItemOverrideProps: h,
            computeMenuRadioItemOverrideProps: o,
          } = e,
          { setDevice: v, getLabel: I } = {
            [r.oh.AUDIO_INPUT]: {
              setDevice: n.A.setInputDevice,
              getLabel: () => a.intl.string(a.t.ElbIXN),
            },
            [r.oh.AUDIO_OUTPUT]: {
              setDevice: n.A.setOutputDevice,
              getLabel: () => a.intl.string(a.t["6Ww0iH"]),
            },
            [r.oh.VIDEO_INPUT]: {
              setDevice: n.A.setVideoDevice,
              getLabel: () => a.intl.string(a.t.F122Gz),
            },
          }[t],
          g = (0, d.tR)(t),
          { id: x, name: U } = (0, d.x5)(t),
          $ = p ?? x,
          k = l.useMemo(
            () =>
              g.find((e) => {
                let { id: t } = e;
                return t === $;
              }),
            [g, $],
          ),
          m = g.map((e) => {
            let l,
              { id: n, disabled: r, name: a } = e,
              u = a,
              p = (0, d.d)(a);
            return (
              null != p && ((u = p.prefix), (l = p.subName)),
              (0, s.jsx)(
                c.iD,
                {
                  id: `${t}-${n}`,
                  group: `${t}-devices`,
                  disabled: r,
                  label: u,
                  subtext: l,
                  checked: n === $,
                  action: () => {
                    (b?.(n) ?? !0) && v(n, { analyticsLocations: i });
                  },
                  ...o?.(n),
                },
                `${t}-${n}`,
              )
            );
          });
        return u
          ? (0, s.jsx)(c.Dr, {
              id: `${t}-devices`,
              label: I(),
              subtext: k?.name ?? U,
              ...h,
              children: m,
            })
          : (0, s.jsx)(c.rX, { label: I(), ...D, children: m });
      }
    },
  },
]);
//# sourceMappingURL=25241.99937b82beda34c9.js.map
