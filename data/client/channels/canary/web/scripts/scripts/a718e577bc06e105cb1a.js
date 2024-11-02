"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40021"],
  {
    870704: function (e) {
      e.exports = "/assets/d7c3c29c10588b7767ee.png";
    },
    74830: function (e) {
      e.exports = "/assets/23a7a3fd6624342117bf.svg";
    },
    206818: function (e) {
      e.exports = "/assets/17a91e9b4e7eb3921ed5.svg";
    },
    73117: function (e, t, n) {
      e.exports = n.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, t, n) {
      e.exports = n.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, t, n) {
      e.exports = n.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, t, n) {
      e.exports = n.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, t, n) {
      e.exports = n.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, t, n) {
      e.exports = n.p + "b235c36699192662a3fe.webm";
    },
    549652: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var s = n(200651),
        i = n(192379),
        a = n(593473),
        r = n(442837),
        l = n(544891),
        o = n(536285),
        c = n(388905),
        d = n(600164),
        u = n(703656),
        p = n(314897),
        m = n(981631),
        x = n(388032),
        h = n(472585),
        f = n(113207);
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      r.ZP.initialize();
      let g = { HANDOFF: "handoff", DONE: "done", FAILED: "failed" };
      function j() {
        try {
          window.close();
        } catch (e) {}
      }
      class v extends i.PureComponent {
        componentDidMount() {
          let { stage: e, key: t } = this.state;
          e === g.DONE
            ? j()
            : p.default.isAuthenticated()
              ? l.tn
                  .post({
                    url: m.ANM.HANDOFF,
                    body: { key: t },
                    oldFormErrors: !0,
                  })
                  .then(
                    (e) => this.handoff(e.body.handoff_token),
                    () => this.handoff(),
                  )
              : this.handoff();
        }
        handoff(e) {
          o.default
            .requestRedirect(m.Etm.BROWSER_HANDOFF, {
              handoffToken: e,
              fingerprint: p.default.getFingerprint(),
            })
            .then(this.done, this.failed);
        }
        renderDone() {
          return (0, s.jsxs)(c.ZP, {
            children: [
              (0, s.jsx)(c.Ee, { src: n(69008), className: f.marginBottom20 }),
              (0, s.jsx)(c.Dx, {
                className: f.marginBottom8,
                children: x.intl.string(x.t.YsLqvr),
              }),
              (0, s.jsx)(c.DK, {
                className: f.marginBottom40,
                children: x.intl.string(x.t.CSBYDg),
              }),
              (0, s.jsx)(c.zx, {
                onClick: this.handleOpenApp,
                children: x.intl.string(x.t.fIv16O),
              }),
            ],
          });
        }
        renderFailed() {
          return (0, s.jsxs)(c.ZP, {
            children: [
              (0, s.jsx)(c.Ee, { src: n(69008), className: f.marginBottom20 }),
              (0, s.jsx)(c.Dx, {
                className: f.marginBottom8,
                children: x.intl.string(x.t.hsLIsb),
              }),
              (0, s.jsx)(c.DK, {
                className: f.marginBottom40,
                children: x.intl.string(x.t.CSBYDg),
              }),
              (0, s.jsx)(c.zx, {
                onClick: this.handleOpenApp,
                children: x.intl.string(x.t.fIv16O),
              }),
            ],
          });
        }
        renderHandoff() {
          return (0, s.jsxs)(c.ZP, {
            children: [
              (0, s.jsx)(c.Hh, {}),
              (0, s.jsx)(c.Dx, {
                className: f.marginBottom8,
                children: x.intl.string(x.t["ctWa6+"]),
              }),
              (0, s.jsx)(c.DK, { children: x.intl.string(x.t["53IHoq"]) }),
            ],
          });
        }
        render() {
          let e;
          let { stage: t } = this.state;
          switch (t) {
            case g.DONE:
              e = this.renderDone();
              break;
            case g.FAILED:
              e = this.renderFailed();
              break;
            case g.HANDOFF:
            default:
              e = this.renderHandoff();
          }
          return (0, s.jsx)(d.Z, {
            justify: d.Z.Justify.CENTER,
            align: d.Z.Align.CENTER,
            className: h.wrapper,
            children: e,
          });
        }
        constructor(e) {
          var t;
          super(e),
            b(this, "done", () => {
              j(), this.setState({ stage: g.DONE });
            }),
            b(this, "failed", () => {
              this.setState({ stage: g.FAILED }), j();
            }),
            b(this, "handleOpenApp", () => {
              (0, u.uL)(m.Z5c.ME);
            });
          let { search: n } = e.location,
            s = null != n && "" !== n ? (0, a.parse)(n) : {};
          this.state = {
            key: null !== (t = s.key) && void 0 !== t ? t : "",
            stage: "true" === s.done ? g.DONE : g.HANDOFF,
          };
        }
      }
    },
    388905: function (e, t, n) {
      n.d(t, {
        DK: function () {
          return j;
        },
        Dx: function () {
          return g;
        },
        EJ: function () {
          return R;
        },
        Ee: function () {
          return v;
        },
        Hh: function () {
          return O;
        },
        II: function () {
          return _;
        },
        MC: function () {
          return E;
        },
        Vj: function () {
          return A;
        },
        gO: function () {
          return D;
        },
        i_: function () {
          return I;
        },
        jQ: function () {
          return y;
        },
        qE: function () {
          return B;
        },
        v6: function () {
          return F;
        },
        zx: function () {
          return N;
        },
      }),
        n(536091);
      var s = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        r = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        d = n(313201),
        u = n(565138),
        p = n(361207),
        m = n(63063),
        x = n(981631),
        h = n(388032),
        f = n(878145);
      let b = r.Avatar;
      null == b && (b = () => null);
      let g = (e) => {
          let { className: t, id: n, children: i } = e;
          return (0, s.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: a()(f.title, t),
            id: n,
            children: i,
          });
        },
        j = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        v = (e) => {
          let { className: t, src: n } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: n,
            className: a()(f.image, t),
          });
        },
        N = (e) => {
          let { className: t, ...n } = e,
            i = n.look === r.Button.Looks.LINK;
          return (0, s.jsx)(r.Button, {
            size: i ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !i,
            className: a()(t, { [f.button]: !i, [f.linkButton]: i }),
            ...n,
          });
        };
      (N.Looks = r.Button.Looks),
        (N.Colors = r.Button.Colors),
        (N.Sizes = r.Button.Sizes);
      let B = (e) => {
          let { className: t, src: n, size: i } = e;
          return (0, s.jsx)(b, {
            src: n,
            size: i,
            className: a()(f.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        A = (e) => {
          let { guild: t, size: n, animate: i = !1, className: a } = e;
          return (0, s.jsx)(u.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a,
          });
        };
      A.Sizes = u.Z.Sizes;
      let E = (e) => {
        let { className: t, channel: n, size: i } = e;
        return (0, s.jsx)(b, {
          src: (0, l.x)(n),
          size: i,
          className: a()(f.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      E.Sizes = r.AvatarSizes;
      let _ = (e) => {
          let {
              label: t,
              error: n,
              placeholder: i,
              value: l,
              className: o,
              inputClassName: c,
              setRef: u,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: h,
              maxLength: b,
              spellCheck: g,
              name: j,
              description: v,
              required: N,
              onFocus: B,
              onBlur: A,
            } = e,
            E = (0, d.Dt)();
          return (0, s.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: o,
            required: N,
            tag: "label",
            htmlFor: E,
            children: [
              (0, s.jsx)(r.TextInput, {
                name: j,
                type: p,
                value: l,
                inputRef: u,
                placeholder: i,
                inputClassName: a()(c, { [f.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: h,
                maxLength: b,
                spellCheck: g,
                id: E,
                onFocus: B,
                onBlur: A,
              }),
              null != v
                ? (0, s.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: f.description,
                    children: v,
                  })
                : null,
            ],
          });
        },
        D = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: a()(f.block, t), children: n });
        },
        I = (e) => {
          let { className: t, children: n, isProminent: i } = e;
          return (0, s.jsx)(r.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: a()(f.subText, t),
            children: n,
          });
        },
        O = (e) => {
          let { className: t } = e;
          return (0, s.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, s.jsx)(o.Z, { className: f.spinnerVideo }),
          });
        },
        R = (e) => {
          let t,
            {
              online: n,
              total: i,
              className: l,
              flat: o,
              textClassName: d,
            } = e;
          return null == i
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: a()(f.pill, f.pillOnline, o && f.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: f.pillIconOnline }),
                    (0, s.jsx)(r.Text, {
                      tag: "span",
                      className: a()(f.pillMessage, d),
                      variant: "text-sm/normal",
                      children: h.intl.format(h.t["LC+S+v"], {
                        membersOnline: n,
                      }),
                    }),
                  ],
                })),
              (0, s.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, s.jsxs)("div", {
                    className: a()(f.pill, o && f.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: f.pillIconTotal }),
                      (0, s.jsx)(r.Text, {
                        tag: "span",
                        className: a()(f.pillMessage, d),
                        variant: "text-sm/normal",
                        children: h.intl.format(h.t.zRl6XV, { count: i }),
                      }),
                    ],
                  }),
                ],
              }));
        },
        y = (e) => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, s.jsxs)("div", {
                className: f.joiningAs,
                children: [
                  (0, s.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: h.intl.string(h.t["/8WWvL"]),
                  }),
                  (0, s.jsx)(B, {
                    className: f.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(r.Text, {
                    className: f.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        F = (e) => {
          let { className: t } = e;
          return (0, s.jsxs)(D, {
            className: t,
            children: [
              (0, s.jsx)(N, {
                onClick: () => window.open((0, p.t3)()),
                children: h.intl.format(h.t.JoS1i4, { platform: (0, p.DW)() }),
              }),
              (0, s.jsx)(I, {
                className: f.downloadButtonSubtext,
                children: h.intl.format(h.t.wO1VBg, {
                  supportedBrowserURL: m.Z.getArticleURL(
                    x.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      t.ZP = (e) => {
        let {
          className: t,
          contentClassName: n,
          tag: i = "section",
          onSubmit: l,
          children: o,
          expanded: c = !1,
          theme: d = x.BRd.DARK,
          style: u,
        } = e;
        return (0, s.jsx)(r.ThemeProvider, {
          theme: d,
          children: (e) =>
            (0, s.jsxs)(i, {
              "data-theme": d,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: u,
              className: a()(c ? f.authBoxExpanded : f.authBox, e, t),
              children: [
                (0, s.jsx)("div", { className: f.discordLogo }),
                (0, s.jsx)("div", {
                  className: a()(f.centeringWrapper, n),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    905656: function (e, t, n) {
      n(733860);
      var s = n(200651),
        i = n(192379),
        a = n(780384),
        r = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(70097),
        d = n(981631),
        u = n(73117),
        p = n(988868),
        m = n(554355),
        x = n(991989),
        h = n(787462),
        f = n(635507),
        b = n(470794),
        g = n(886777);
      function j(e) {
        let {
            movDark: t = u,
            movLight: n = h,
            mp4Dark: i = p,
            mp4Light: a = f,
            pngDark: r = m,
            pngLight: l = b,
            webmDark: c = x,
            webmLight: j = g,
          } = e,
          v = (0, o.vu)(),
          N = [
            (0, s.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: r }, "png"),
          ],
          B = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (v > 52 || -1 === v) &&
            (N.unshift(
              (0, s.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            B.unshift(
              (0, s.jsx)("source", { src: j, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (N.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            B.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [d.BRd.DARK]: N, [d.BRd.LIGHT]: B }
        );
      }
      let v = l.Z.getAppSpinnerSources(),
        N = null != v ? j(v) : null,
        B = j({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: o,
            className: u,
            onReady: p,
          } = e,
          { theme: m } = (0, r.useThemeContext)(),
          { reducedMotion: x } = i.useContext(
            r.AccessibilityPreferencesContext,
          ),
          h = B;
        null != N && (h = N);
        let f =
          null !== (t = h[(0, a.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : h[d.BRd.DARK];
        return (0, s.jsx)(
          c.Z,
          {
            ref: o,
            onLoadedData: p,
            className: u,
            loop: !x.enabled && n,
            autoPlay: !x.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: f,
          },
          m,
        );
      };
    },
    472585: function (e, t, n) {
      e.exports = { wrapper: "wrapper_d4fa29 " + n("112864").scrollbarGhost };
    },
    878145: function (e, t, n) {
      e.exports = {
        discordLogo: "discordLogo_b83a05",
        authBox: "authBox_b83a05",
        authBoxExpanded: "authBoxExpanded_b83a05 authBox_b83a05",
        centeringWrapper: "centeringWrapper_b83a05",
        title: "title_b83a05",
        subText: "subText_b83a05",
        pill: "pill_b83a05",
        pillOnline: "pillOnline_b83a05",
        pillMessage: "pillMessage_b83a05",
        pillIconTotal: "pillIconTotal_b83a05 pillIcon_b83a05",
        pillIconOnline: "pillIconOnline_b83a05 pillIcon_b83a05",
        pillFlat: "pillFlat_b83a05",
        joiningAs: "joiningAs_b83a05",
        joiningAsAvatar: "joiningAsAvatar_b83a05",
        joiningAsUsername: "joiningAsUsername_b83a05",
        spinnerVideo: "spinnerVideo_b83a05",
        image: "image_b83a05",
        block: "block_b83a05",
        button: "button_b83a05",
        linkButton: "linkButton_b83a05",
        inviteIcon: "inviteIcon_b83a05",
        inviteLargeIcon: "inviteLargeIcon_b83a05 inviteIcon_b83a05",
        downloadButtonSubtext: "downloadButtonSubtext_b83a05",
        inputError: "inputError_b83a05",
        description: "description_b83a05",
      };
    },
  },
]);
//# sourceMappingURL=a718e577bc06e105cb1a.js.map
