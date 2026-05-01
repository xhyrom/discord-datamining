"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55191"],
  {
    642277(t, e, a) {
      a.d(e, { A: () => r, W: () => l });
      var n = a(627968);
      if ((a(64700), 21552 == a.j)) var i = a(873263);
      var o = a(323125);
      function l() {
        let t = location.pathname + location.search;
        return (0, o.T2)(t, !1);
      }
      a(652215), a(436317);
      let r =
        21552 == a.j
          ? function () {
              return (0, n.jsx)(i.rd, { to: l() });
            }
          : null;
    },
    10088(t, e, a) {
      a.d(e, { A: () => A });
      var n = a(17928),
        i = a(228366),
        o = a(652215);
      let l = null,
        r = {};
      class u extends n.Ay.Store {
        static displayName = "CodedLinkNativeAppStateStore";
        getState(t) {
          return r[t];
        }
        getHighestState() {
          return l;
        }
      }
      let A = new u(i.h, {
        NATIVE_APP_MODAL_OPENING: function (t) {
          let { code: e } = t;
          (r[e] = o.fAW.OPENING), null === l && (l = o.fAW.OPENING);
        },
        NATIVE_APP_MODAL_OPENED: function (t) {
          let { code: e } = t;
          (r[e] = o.fAW.OPEN), (l = o.fAW.OPEN);
        },
        NATIVE_APP_MODAL_OPEN_FAILED: function (t) {
          let { code: e } = t;
          (r[e] = o.fAW.OPEN_FAIL),
            (null === l || l === o.fAW.OPENING) && (l = o.fAW.OPEN_FAIL);
        },
      });
    },
    121623(t, e, a) {
      a.d(e, { A: () => _ });
      var n = a(400253),
        i = a(742821),
        o = a(80703),
        l = a(197111),
        r = a(954571),
        u = a(877062),
        A = a(292572),
        p = a(652215);
      let s = "template",
        _ = {
          ...A.A,
          openNativeAppModal(t) {
            l.A.openNativeAppModal(t, p.e$_.GUILD_TEMPLATE_BROWSER);
          },
          openMobileApp(t, e) {
            if (
              null != platform.ua &&
              platform.ua.toLowerCase().indexOf("googlebot") > -1
            )
              return;
            let a = null != t ? (0, n.FH)(t) : (0, n.BH)(),
              l = (0, i.I_)(),
              A = (0, i.Ay)(a, { utmSource: s, fingerprint: e, attemptId: l });
            r.default.track(p.HAw.DEEP_LINK_CLICKED, {
              fingerprint: (0, o.v)(e),
              attempt_id: l,
              source: s,
              guild_template_code: t,
            }),
              u.A.launch(A, () => {});
          },
        };
    },
    942614(t, e, a) {
      a.d(e, { C: () => i, D: () => o });
      var n = a(228366);
      function i(t) {
        n.h.wait(() => n.h.dispatch({ type: "NUF_NEW_USER", newUserType: t }));
      }
      function o() {
        n.h.wait(() => n.h.dispatch({ type: "NUF_COMPLETE" }));
      }
    },
    53516(t, e, a) {
      a.d(e, { V: () => n });
      let n = "PHONE_VERIFICATION_MODAL_KEY";
    },
    116891(t, e, a) {
      a.d(e, { eT: () => l, fj: () => i });
      var n = a(250105);
      let i = "1080p",
        o = (0, n.Ay)({
          name: "2026-04-server-boost-copy-1440p",
          kind: "user",
          defaultConfig: { streamQualityMarketingResolution: i },
          variations: { 1: { streamQualityMarketingResolution: "1440p" } },
        });
      function l(t) {
        return o.getConfig({ location: t }).streamQualityMarketingResolution;
      }
    },
  },
]);
//# sourceMappingURL=55191.fa92f06af25dd195.js.map
