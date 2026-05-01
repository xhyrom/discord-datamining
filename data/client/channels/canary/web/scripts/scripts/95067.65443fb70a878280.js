"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95067"],
  {
    576470(t, e, n) {
      n.d(e, { A: () => p });
      var s = n(627968),
        i = n(64700),
        l = n(735438),
        r = n.n(l),
        a = n(58703),
        h = n(985018);
      class d extends i.PureComponent {
        static defaultProps = {
          showDays: !0,
          showUnits: !1,
          stopAtOneSec: !1,
          intervalDuration: 1e3,
        };
        _interval;
        componentDidMount() {
          let { intervalDuration: t, onInterval: e } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), e?.();
          }, t);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(t) {
          let { showDays: e, showUnits: n, className: i } = this.props,
            l = [t.days, t.hours, t.minutes, t.seconds],
            a = [
              h.intl.string(h.t["6m/6nM"]),
              h.intl.string(h.t.n7dksO),
              h.intl.string(h.t["1LyF1h"]),
              h.intl.string(h.t.QJyuxY),
            ];
          if (0 === t.days) l.shift();
          else if (!e) {
            let t = l.shift();
            l[0] += 24 * t;
          }
          let d = r()(l)
            .map((t) => (t < 10 ? `0${t}` : t))
            .map((t, e) => [
              e > 0 && !n ? ":" : " ",
              (0, s.jsxs)(
                "span",
                { children: [t, n ? a[l.length - e - 1] : null] },
                e,
              ),
            ])
            .flatten()
            .value();
          return (0, s.jsx)("span", { className: i, children: d });
        }
        render() {
          let {
            deadline: t,
            children: e,
            className: n,
            stopAtOneSec: i,
          } = this.props;
          if (t === 1 / 0)
            return (0, s.jsx)("span", {
              className: n,
              "aria-label": h.intl.string(h.t.PqEzn8),
              children: "∞",
            });
          let l = (0, a.Tf)(Date.now(), t, i);
          return null != e
            ? e(l, this.defaultRender.bind(this, l))
            : this.defaultRender(l);
        }
      }
      let p = d;
    },
  },
]);
//# sourceMappingURL=95067.65443fb70a878280.js.map
