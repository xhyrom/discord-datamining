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
            return b;
          },
        }),
        e(47120);
      var l = e(200651),
        a = e(192379),
        s = e(442837),
        i = e(481060),
        o = e(91176),
        r = e(906732),
        c = e(346486),
        u = e(313201),
        d = e(594174),
        h = e(626135),
        m = e(71619),
        p = e(590433),
        f = e(981631),
        v = e(388032),
        x = e(163928);
      function b(t) {
        var n, e;
        let {
            guildId: b,
            userId: g,
            anaylticsLocations: C,
            transitionState: y,
            onClose: j,
          } = t,
          k = (0, u.Dt)(),
          { analyticsLocations: w } = (0, r.ZP)(),
          D =
            null !==
              (e =
                null !== (n = null == C ? void 0 : C[0]) && void 0 !== n
                  ? n
                  : null == w
                    ? void 0
                    : w[0]) && void 0 !== e
              ? e
              : null,
          _ = (0, s.e7)([d.default], () => d.default.getUser(g), [g]),
          [T, N] = (0, m.ZP)(g, b),
          [I, E] = a.useState(!1),
          S = a.useCallback(async () => {
            if (null != _) {
              E(!0);
              try {
                await o.Z.setCommunicationDisabledDuration(b, g, null, null, D),
                  (0, i.showToast)(
                    (0, i.createToast)(
                      v.intl.string(v.t["/Mmbfn"]),
                      i.ToastType.SUCCESS,
                    ),
                  ),
                  j();
              } catch (t) {
                (0, i.showToast)(
                  (0, i.createToast)(
                    v.intl.string(v.t.epyCur),
                    i.ToastType.FAILURE,
                  ),
                );
              } finally {
                E(!1);
              }
            }
          }, [b, _, g, j, D]),
          M = a.useCallback(() => {
            !N && j();
          }, [N, j]);
        return (a.useEffect(() => {
          if (null != _)
            h.default.track(f.rMx.OPEN_MODAL, {
              type: p.av,
              guild_id: b,
              other_user_id: _.id,
            });
        }, []),
        a.useEffect(() => {
          (null == _ || null == b) && j();
        }),
        null == _ || null == b)
          ? null
          : (0, l.jsxs)(i.ModalRoot, {
              transitionState: y,
              "aria-labelledby": k,
              children: [
                (0, l.jsxs)(i.ModalHeader, {
                  className: x.header,
                  separator: !1,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      children: v.intl.string(v.t["+ZD3oq"]),
                    }),
                    (0, l.jsx)(i.Clickable, {
                      onClick: j,
                      className: x.closeButton,
                      "aria-label": v.intl.string(v.t.cpT0Cg),
                      children: (0, l.jsx)(i.XSmallIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: x.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(i.ModalContent, {
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: v.intl.format(v.t["t+abNT"], {
                        username: _.username,
                        countdown: (t) =>
                          null == T
                            ? null
                            : (0, l.jsx)(c.Z, {
                                className: x.countdown,
                                deadline: new Date(T),
                                onInterval: M,
                                showUnits: !0,
                                stopAtOneSec: !0,
                              }),
                      }),
                    }),
                    (0, l.jsx)(i.Text, {
                      className: x.cta,
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: v.intl.format(v.t.KtENkJ, { link: p.cu }),
                    }),
                  ],
                }),
                (0, l.jsxs)(i.ModalFooter, {
                  children: [
                    (0, l.jsx)(i.Button, {
                      color: i.Button.Colors.RED,
                      onClick: S,
                      submitting: I,
                      children: v.intl.string(v.t.qXtNtb),
                    }),
                    (0, l.jsx)(i.Button, {
                      type: "button",
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.PRIMARY,
                      onClick: j,
                      children: v.intl.string(v.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    163928: function (t, n, e) {
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
//# sourceMappingURL=297e054762eed8f2ce0a.js.map
