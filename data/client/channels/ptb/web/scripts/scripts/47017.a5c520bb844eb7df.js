"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47017"],
  {
    544048(e, t, n) {
      n.d(t, { t: () => c });
      var i = n(627968),
        s = n(64700),
        a = n(503698),
        o = n.n(a),
        l = n(941861),
        r = n(844222),
        h = n(460890),
        p = n(409341);
      class u extends s.PureComponent {
        static defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
        animationRef = null;
        animation;
        currentScene = this.props.nextScene;
        isUnmounted = !1;
        async componentDidMount() {
          let {
              importData: e,
              nextScene: t,
              pauseWhileUnfocused: i,
              pause: s,
              isWindowFocused: a,
              useReducedMotion: o,
              rendererSettings: l,
            } = this.props,
            [r, { default: h }] = await Promise.all([
              e(),
              n.e("96382").then(n.t.bind(n, 883885, 23)),
            ]);
          null != this.animationRef &&
            ((this.animation = h.loadAnimation({
              container: this.animationRef,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: r,
              rendererSettings: l,
            })),
            this.animation.addEventListener(
              "loopComplete",
              this.handleLoopComplete,
            ),
            this.animation.addEventListener("complete", this.handleComplete),
            this.animation.addEventListener(
              "enterFrame",
              this.handleEnterFrame,
            ),
            this.playScene(t),
            ((i && !a) || s || o) && this.animation.pause());
        }
        componentWillUnmount() {
          (this.isUnmounted = !0),
            null != this.animation &&
              (this.animation.destroy(), (this.animation = void 0));
        }
        componentDidUpdate(e) {
          let {
            nextScene: t,
            pauseWhileUnfocused: n,
            pause: i,
            isWindowFocused: s,
            useReducedMotion: a,
          } = this.props;
          t !== this.currentScene &&
            this.shouldForcePlayAfter() &&
            !i &&
            this.playScene(t),
            null != this.animation &&
              (n && !e.isWindowFocused && s && !a && !0 !== i
                ? this.animation.play()
                : (a || (n && e.isWindowFocused && !s)) &&
                  this.animation.pause()),
            !e.pause && i
              ? this.animation?.pause()
              : !e.pause || i || a || this.animation?.play(),
            e.nextScene !== t &&
              i &&
              (this.playScene(t), this.animation?.pause());
        }
        shouldForcePlayAfter() {
          let { sceneSegments: e } = this.props;
          return !0 === e[this.currentScene].shouldForcePlayAfter;
        }
        playScene(e) {
          if (this.isUnmounted) return;
          let {
              onScenePlay: t,
              sceneSegments: n,
              useReducedMotion: i,
            } = this.props,
            s = n[e],
            a = n[this.currentScene];
          null != this.animation &&
            (e === this.currentScene || s.BEG !== a.BEG || s.END !== a.END) &&
            this.animation.playSegments([s.BEG, s.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            i && this.animation?.pause();
        }
        handleLoopComplete = () => {
          let { onSceneComplete: e, nextScene: t } = this.props;
          null != e && e(this.currentScene), this.playScene(t);
        };
        handleComplete = () => {
          let { onSceneComplete: e } = this.props;
          null != e && e(this.currentScene);
        };
        handleEnterFrame = (e) => {
          let { onEnterFrame: t } = this.props;
          t?.(this.currentScene, e);
        };
        handleSetRef = (e) => {
          this.animationRef = e;
          let { animationRef: t } = this.props;
          null != t && t(e);
        };
        render() {
          return (0, i.jsx)("div", {
            ref: this.handleSetRef,
            className: o()(this.props.className, p.i),
          });
        }
      }
      let c = (e) => {
        let { componentRef: t, ignoreReducedMotion: n = !1, ...a } = e,
          { isWindowFocused: o } = (0, h.G9)(),
          p = (0, l.R)(),
          { reducedMotion: c } = s.useContext(r.C),
          d = c.enabled && !n,
          m = { ...a, isWindowFocused: o?.() ?? p, useReducedMotion: d };
        return (0, i.jsx)(u, { ...m, ref: t });
      };
    },
  },
]);
//# sourceMappingURL=47017.a5c520bb844eb7df.js.map
