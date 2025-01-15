"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40021"],
  {
    870704: function (t) {
      t.exports = "/assets/d7c3c29c10588b7767ee.png";
    },
    549652: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return E;
          },
        });
      var s = n(200651),
        r = n(192379),
        i = n(593473),
        a = n(442837),
        l = n(544891),
        o = n(536285),
        d = n(388905),
        c = n(600164),
        h = n(703656),
        f = n(314897),
        u = n(981631),
        p = n(388032),
        g = n(32642),
        m = n(275477);
      function D(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      a.ZP.initialize();
      let x = { HANDOFF: "handoff", DONE: "done", FAILED: "failed" };
      function N() {
        try {
          window.close();
        } catch (t) {}
      }
      class E extends r.PureComponent {
        componentDidMount() {
          let { stage: t, key: e } = this.state;
          t === x.DONE
            ? N()
            : f.default.isAuthenticated()
              ? l.tn
                  .post({
                    url: u.ANM.HANDOFF,
                    body: { key: e },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                  })
                  .then(
                    (t) => this.handoff(t.body.handoff_token),
                    () => this.handoff(),
                  )
              : this.handoff();
        }
        handoff(t) {
          o.default
            .requestRedirect(u.Etm.BROWSER_HANDOFF, {
              handoffToken: t,
              fingerprint: f.default.getFingerprint(),
            })
            .then(this.done, this.failed);
        }
        renderDone() {
          return (0, s.jsxs)(d.ZP, {
            children: [
              (0, s.jsx)(d.Ee, { src: n(69008), className: m.marginBottom20 }),
              (0, s.jsx)(d.Dx, {
                className: m.marginBottom8,
                children: p.intl.string(p.t.YsLqvr),
              }),
              (0, s.jsx)(d.DK, {
                className: m.marginBottom40,
                children: p.intl.string(p.t.CSBYDg),
              }),
              (0, s.jsx)(d.zx, {
                onClick: this.handleOpenApp,
                children: p.intl.string(p.t.fIv16O),
              }),
            ],
          });
        }
        renderFailed() {
          return (0, s.jsxs)(d.ZP, {
            children: [
              (0, s.jsx)(d.Ee, { src: n(69008), className: m.marginBottom20 }),
              (0, s.jsx)(d.Dx, {
                className: m.marginBottom8,
                children: p.intl.string(p.t.hsLIsb),
              }),
              (0, s.jsx)(d.DK, {
                className: m.marginBottom40,
                children: p.intl.string(p.t.CSBYDg),
              }),
              (0, s.jsx)(d.zx, {
                onClick: this.handleOpenApp,
                children: p.intl.string(p.t.fIv16O),
              }),
            ],
          });
        }
        renderHandoff() {
          return (0, s.jsxs)(d.ZP, {
            children: [
              (0, s.jsx)(d.Hh, {}),
              (0, s.jsx)(d.Dx, {
                className: m.marginBottom8,
                children: p.intl.string(p.t["ctWa6+"]),
              }),
              (0, s.jsx)(d.DK, { children: p.intl.string(p.t["53IHoq"]) }),
            ],
          });
        }
        render() {
          let t;
          let { stage: e } = this.state;
          switch (e) {
            case x.DONE:
              t = this.renderDone();
              break;
            case x.FAILED:
              t = this.renderFailed();
              break;
            case x.HANDOFF:
            default:
              t = this.renderHandoff();
          }
          return (0, s.jsx)(c.Z, {
            justify: c.Z.Justify.CENTER,
            align: c.Z.Align.CENTER,
            className: g.wrapper,
            children: t,
          });
        }
        constructor(t) {
          var e;
          super(t),
            D(this, "done", () => {
              N(), this.setState({ stage: x.DONE });
            }),
            D(this, "failed", () => {
              this.setState({ stage: x.FAILED }), N();
            }),
            D(this, "handleOpenApp", () => {
              (0, h.uL)(u.Z5c.ME);
            });
          let { search: n } = t.location,
            s = null != n && "" !== n ? (0, i.parse)(n) : {};
          this.state = {
            key: null !== (e = s.key) && void 0 !== e ? e : "",
            stage: "true" === s.done ? x.DONE : x.HANDOFF,
          };
        }
      }
    },
    32642: function (t, e, n) {
      t.exports = { wrapper: "wrapper_d4fa29 " + n("584812").scrollbarGhost };
    },
  },
]);
//# sourceMappingURL=7223237024e1468c4ba3.js.map
