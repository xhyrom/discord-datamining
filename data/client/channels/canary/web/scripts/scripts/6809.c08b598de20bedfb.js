"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6809"],
  {
    74848(e, t, i) {
      i.d(t, { Py: () => f, d: () => A, tR: () => U, x5: () => p });
      var n = i(64700),
        c = i(735438),
        r = i(17928),
        s = i(444927),
        d = i(475743),
        g = i(51760),
        u = i(403362),
        o = i(723702),
        D = i(835498),
        I = i(731854),
        v = i(985018);
      function l(e) {
        return {
          [I.oh.AUDIO_INPUT]: {
            getRawDevices: (e) => e.getInputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) =>
              e.getDeviceIdsSortedByFrecency(I.oh.AUDIO_INPUT),
            getCurrentDeviceId: (e) => e.getInputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
            getNoDevicesMessage: () => v.intl.string(v.t["/QIjDA"]),
          },
          [I.oh.AUDIO_OUTPUT]: {
            getRawDevices: (e) => e.getOutputDevices(),
            getAllDeviceIdsSortedByFrecency: (e) =>
              e.getDeviceIdsSortedByFrecency(I.oh.AUDIO_OUTPUT),
            getCurrentDeviceId: (e) => e.getOutputDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
            getNoDevicesMessage: () => v.intl.string(v.t.xlUg0v),
          },
          [I.oh.VIDEO_INPUT]: {
            getRawDevices: (e) => e.getVideoDevices(),
            getAllDeviceIdsSortedByFrecency: (e) =>
              e.getDeviceIdsSortedByFrecency(I.oh.VIDEO_INPUT),
            getCurrentDeviceId: (e) => e.getVideoDeviceId(),
            getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
            getNoDevicesMessage: () => v.intl.string(v.t.WKWARY),
          },
        }[e];
      }
      function y() {
        return (0, o.isWindows)()
          ? v.intl.string(v.t.n4dQ2c)
          : (0, o.isMac)()
            ? v.intl.string(v.t.aYrsiB)
            : v.intl.string(v.t.Q3YKwS);
      }
      function A(e) {
        let t = RegExp(`^(?<prefix>${y()}) \\((?<subName>.+)\\)$`);
        return t.exec(e)?.groups;
      }
      function a(e) {
        let { getRawDevices: t } = l(e),
          i = (0, r.bG)([g.Ay], () => t(g.Ay));
        return (0, n.useMemo)(() => {
          let t = { ...i },
            n = t[I.dx];
          return (
            null != n &&
              (t[I.dx] = {
                ...n,
                name: (function (e, t) {
                  let { getNoDevicesMessage: i } = l(e);
                  return t.disabled ? i() : t.name.replace(I.vt, y());
                })(e, n),
              }),
            t
          );
        }, [e, i]);
      }
      function p(e) {
        let t = a(e),
          { getCurrentDeviceId: i } = l(e);
        return t[(0, r.bG)([g.Ay], () => i(g.Ay))];
      }
      function U(e) {
        let t = a(e),
          { getAllDeviceIdsSortedByFrecency: i } = l(e),
          r = (0, s.A)(() => i(D.A));
        return (0, n.useMemo)(() => {
          let i = Object.keys(t),
            n = e !== I.oh.VIDEO_INPUT ? [I.dx] : [],
            s = (0, c.intersection)(r, i),
            d = (0, c.difference)(i, r);
          return (0, c.union)(n, s, d)
            .map((e) => t[e])
            .filter(u.Vq);
        }, [t, e, r]);
      }
      function f(e) {
        let { getCurrentDeviceId: t, getSelectedDeviceId: i } = l(e),
          { resolvedId: n, selectedId: c } = (0, r.cf)([g.Ay], () => ({
            resolvedId: t(g.Ay),
            selectedId: i(g.Ay),
          })),
          s = (0, d.A)(n) ?? n,
          u = n !== s,
          o = (0, d.A)(c) ?? c,
          D = c !== o;
        return u && !D;
      }
    },
  },
]);
//# sourceMappingURL=6809.c08b598de20bedfb.js.map
