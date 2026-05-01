"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54791"],
  {
    568602(t, i, e) {
      e.d(i, { b: () => o });
      var s = e(627968),
        a = e(64700),
        n = e(735438),
        r = e.n(n),
        h = e(775602);
      class o extends a.Component {
        static defaultProps = { isShaking: !0, intensity: 5 };
        ref = a.createRef();
        animationFrame;
        shouldRenderFrame = !0;
        componentDidMount() {
          this.props.isShaking && this.startShaking();
        }
        componentDidUpdate(t) {
          this.props.isShaking !== t.isShaking &&
            this.setShaking(this.props.isShaking);
        }
        setShaking(t) {
          t ? this.startShaking() : this.stopShaking();
        }
        startShaking() {
          (this.shouldRenderFrame = !0),
            (this.animationFrame = requestAnimationFrame(this.animate));
        }
        stopShaking() {
          null != this.animationFrame &&
            cancelAnimationFrame(this.animationFrame);
          let t = this.ref.current;
          null != t && (t.style.transform = "");
        }
        animate = () => {
          let { intensity: t, isShaking: i } = this.props;
          if (!i) return;
          let e = this.ref.current;
          if (this.shouldRenderFrame && null != e) {
            let i = r().random(-t, t, !0),
              s = r().random(-t, t, !0);
            e.style.transform = h.A.useReducedMotion
              ? ""
              : `translate3d(${i}px,${s}px,0px)`;
          }
          (this.shouldRenderFrame = !this.shouldRenderFrame),
            (this.animationFrame = requestAnimationFrame(this.animate));
        };
        render() {
          let { className: t, children: i } = this.props;
          return (0, s.jsx)("div", {
            className: t,
            ref: this.ref,
            children: i,
          });
        }
      }
    },
  },
]);
//# sourceMappingURL=54791.7b4971361c3b08ab.js.map
