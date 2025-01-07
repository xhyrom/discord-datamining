"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76233"],
  {
    91176: function (t, n, e) {
      var l = e(913527),
        a = e.n(l),
        s = e(749210);
      n.Z = {
        async setCommunicationDisabledDuration(t, n, e, l, i) {
          let o = null != e ? a()().add(e, "s").toISOString() : null;
          await s.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: o,
            duration: e,
            reason: l,
            location: i,
          });
        },
      };
    },
    346486: function (t, n, e) {
      e(47120);
      var l,
        a = e(200651),
        s = e(192379),
        i = e(392711),
        o = e.n(i),
        r = e(55935),
        c = e(388032);
      function u(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let d = () => [
        c.intl.string(c.t["6m/6nJ"]),
        c.intl.string(c.t.n7dksL),
        c.intl.string(c.t["1LyF1t"]),
        c.intl.string(c.t.QJyuxc),
      ];
      class h extends (l = s.PureComponent) {
        componentDidMount() {
          let { intervalDuration: t, onInterval: n } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), null == n || n();
          }, t);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(t) {
          let { showDays: n, showUnits: e, className: l } = this.props,
            s = [t.days, t.hours, t.minutes, t.seconds],
            i = d();
          if (0 === t.days) s.shift();
          else if (!n) {
            let t = s.shift();
            s[0] += 24 * t;
          }
          let r = o()(s)
            .map((t) => (t < 10 ? "0".concat(t) : t))
            .map((t, n) => [
              n > 0 && !e ? ":" : " ",
              (0, a.jsxs)(
                "span",
                { children: [t, e ? i[s.length - n - 1] : null] },
                n,
              ),
            ])
            .flatten()
            .value();
          return (0, a.jsx)("span", { className: l, children: r });
        }
        render() {
          let {
            deadline: t,
            children: n,
            className: e,
            stopAtOneSec: l,
          } = this.props;
          if (t === 1 / 0)
            return (0, a.jsx)("span", {
              className: e,
              "aria-label": c.intl.string(c.t.PqEzn5),
              children: "∞",
            });
          let s = (0, r.TD)(Date.now(), t, l);
          return null != n
            ? n(s, this.defaultRender.bind(this, s))
            : this.defaultRender(s);
        }
        constructor(...t) {
          super(...t), u(this, "_interval", void 0);
        }
      }
      u(h, "defaultProps", {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      }),
        (n.Z = h);
    },
    171494: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return g;
          },
        }),
        e(47120);
      var l = e(200651),
        a = e(192379),
        s = e(442837),
        i = e(481060),
        o = e(91176),
        r = e(493773),
        c = e(906732),
        u = e(346486),
        d = e(313201),
        h = e(594174),
        m = e(626135),
        p = e(71619),
        f = e(590433),
        v = e(981631),
        x = e(388032),
        b = e(923333);
      function g(t) {
        var n, e;
        let {
            guildId: g,
            userId: C,
            anaylticsLocations: y,
            transitionState: j,
            onClose: k,
          } = t,
          w = (0, d.Dt)(),
          { analyticsLocations: D } = (0, c.ZP)(),
          _ =
            null !==
              (e =
                null !== (n = null == y ? void 0 : y[0]) && void 0 !== n
                  ? n
                  : null == D
                    ? void 0
                    : D[0]) && void 0 !== e
              ? e
              : null,
          T = (0, s.e7)([h.default], () => h.default.getUser(C), [C]),
          [N, I] = (0, p.ZP)(C, g),
          [S, E] = a.useState(!1),
          M = a.useCallback(async () => {
            if (null != T) {
              E(!0);
              try {
                await o.Z.setCommunicationDisabledDuration(g, C, null, null, _),
                  (0, i.showToast)(
                    (0, i.createToast)(
                      x.intl.string(x.t["/Mmbfn"]),
                      i.ToastType.SUCCESS,
                    ),
                  ),
                  k();
              } catch (t) {
                (0, i.showToast)(
                  (0, i.createToast)(
                    x.intl.string(x.t.epyCur),
                    i.ToastType.FAILURE,
                  ),
                );
              } finally {
                E(!1);
              }
            }
          }, [g, T, C, k, _]),
          Z = a.useCallback(() => {
            !I && k();
          }, [I, k]);
        return ((0, r.Z)(() => {
          if (null != T)
            m.default.track(v.rMx.OPEN_MODAL, {
              type: f.av,
              guild_id: g,
              other_user_id: T.id,
            });
        }),
        a.useEffect(() => {
          (null == T || null == g) && k();
        }),
        null == T || null == g)
          ? null
          : (0, l.jsxs)(i.ModalRoot, {
              transitionState: j,
              "aria-labelledby": w,
              children: [
                (0, l.jsxs)(i.ModalHeader, {
                  className: b.header,
                  separator: !1,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children: x.intl.string(x.t["+ZD3oq"]),
                    }),
                    (0, l.jsx)(i.Clickable, {
                      onClick: k,
                      className: b.closeButton,
                      "aria-label": x.intl.string(x.t.cpT0Cg),
                      children: (0, l.jsx)(i.XSmallIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: b.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(i.ModalContent, {
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: x.intl.format(x.t["t+abNT"], {
                        username: T.username,
                        countdown: (t) =>
                          null == N
                            ? null
                            : (0, l.jsx)(u.Z, {
                                className: b.countdown,
                                deadline: new Date(N),
                                onInterval: Z,
                                showUnits: !0,
                                stopAtOneSec: !0,
                              }),
                      }),
                    }),
                    (0, l.jsx)(i.Text, {
                      className: b.cta,
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: x.intl.format(x.t.KtENkJ, { link: f.cu }),
                    }),
                  ],
                }),
                (0, l.jsxs)(i.ModalFooter, {
                  children: [
                    (0, l.jsx)(i.Button, {
                      color: i.Button.Colors.RED,
                      onClick: M,
                      submitting: S,
                      children: x.intl.string(x.t.qXtNtb),
                    }),
                    (0, l.jsx)(i.Button, {
                      type: "button",
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      onClick: k,
                      children: x.intl.string(x.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    923333: function (t, n, e) {
      t.exports = {
        header: "header_aaae7c",
        countdown: "countdown_aaae7c",
        closeButton: "closeButton_aaae7c",
        closeIcon: "closeIcon_aaae7c",
        cta: "cta_aaae7c",
      };
    },
  },
]);
//# sourceMappingURL=a31d36b7cfb1d043e773.js.map
