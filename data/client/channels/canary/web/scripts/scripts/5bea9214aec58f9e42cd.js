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
            return _;
          },
        });
      var s = n(735250),
        a = n(470079),
        r = n(593473),
        i = n(442837),
        l = n(544891),
        o = n(536285),
        c = n(388905),
        d = n(600164),
        u = n(703656),
        p = n(314897),
        m = n(981631),
        x = n(689938),
        h = n(472585),
        N = n(113207);
      function f(e, t, n) {
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
      i.ZP.initialize();
      let b = { HANDOFF: "handoff", DONE: "done", FAILED: "failed" };
      function g() {
        try {
          window.close();
        } catch (e) {}
      }
      class _ extends a.PureComponent {
        componentDidMount() {
          let { stage: e, key: t } = this.state;
          e === b.DONE
            ? g()
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
              (0, s.jsx)(c.Ee, { src: n(69008), className: N.marginBottom20 }),
              (0, s.jsx)(c.Dx, {
                className: N.marginBottom8,
                children: x.Z.Messages.BROWSER_HANDOFF_DONE_TITLE,
              }),
              (0, s.jsx)(c.DK, {
                className: N.marginBottom40,
                children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE,
              }),
              (0, s.jsx)(c.zx, {
                onClick: this.handleOpenApp,
                children: x.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderFailed() {
          return (0, s.jsxs)(c.ZP, {
            children: [
              (0, s.jsx)(c.Ee, { src: n(69008), className: N.marginBottom20 }),
              (0, s.jsx)(c.Dx, {
                className: N.marginBottom8,
                children: x.Z.Messages.BROWSER_HANDOFF_FAILED_TITLE,
              }),
              (0, s.jsx)(c.DK, {
                className: N.marginBottom40,
                children: x.Z.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE,
              }),
              (0, s.jsx)(c.zx, {
                onClick: this.handleOpenApp,
                children: x.Z.Messages.CONTINUE_TO_WEBAPP,
              }),
            ],
          });
        }
        renderHandoff() {
          return (0, s.jsxs)(c.ZP, {
            children: [
              (0, s.jsx)(c.Hh, {}),
              (0, s.jsx)(c.Dx, {
                className: N.marginBottom8,
                children: x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE,
              }),
              (0, s.jsx)(c.DK, {
                children:
                  x.Z.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION,
              }),
            ],
          });
        }
        render() {
          let e;
          let { stage: t } = this.state;
          switch (t) {
            case b.DONE:
              e = this.renderDone();
              break;
            case b.FAILED:
              e = this.renderFailed();
              break;
            case b.HANDOFF:
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
            f(this, "done", () => {
              g(), this.setState({ stage: b.DONE });
            }),
            f(this, "failed", () => {
              this.setState({ stage: b.FAILED }), g();
            }),
            f(this, "handleOpenApp", () => {
              (0, u.uL)(m.Z5c.ME);
            });
          let { search: n } = e.location,
            s = null != n && "" !== n ? (0, r.parse)(n) : {};
          this.state = {
            key: null !== (t = s.key) && void 0 !== t ? t : "",
            stage: "true" === s.done ? b.DONE : b.HANDOFF,
          };
        }
      }
    },
    388905: function (e, t, n) {
      n.d(t, {
        DK: function () {
          return g;
        },
        Dx: function () {
          return b;
        },
        EJ: function () {
          return D;
        },
        Ee: function () {
          return _;
        },
        Hh: function () {
          return B;
        },
        II: function () {
          return T;
        },
        MC: function () {
          return O;
        },
        Vj: function () {
          return A;
        },
        gO: function () {
          return I;
        },
        i_: function () {
          return v;
        },
        jQ: function () {
          return R;
        },
        qE: function () {
          return j;
        },
        v6: function () {
          return F;
        },
        zx: function () {
          return E;
        },
      }),
        n(536091);
      var s = n(735250);
      n(470079);
      var a = n(120356),
        r = n.n(a),
        i = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        d = n(313201),
        u = n(565138),
        p = n(361207),
        m = n(63063),
        x = n(981631),
        h = n(689938),
        N = n(878145);
      let f = i.Avatar;
      null == f && (f = () => null);
      let b = (e) => {
          let { className: t, id: n, children: a } = e;
          return (0, s.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(N.title, t),
            id: n,
            children: a,
          });
        },
        g = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        _ = (e) => {
          let { className: t, src: n } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: n,
            className: r()(N.image, t),
          });
        },
        E = (e) => {
          let { className: t, ...n } = e,
            a = n.look === i.Button.Looks.LINK;
          return (0, s.jsx)(i.Button, {
            size: a ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !a,
            className: r()(t, { [N.button]: !a, [N.linkButton]: a }),
            ...n,
          });
        };
      (E.Looks = i.Button.Looks),
        (E.Colors = i.Button.Colors),
        (E.Sizes = i.Button.Sizes);
      let j = (e) => {
          let { className: t, src: n, size: a } = e;
          return (0, s.jsx)(f, {
            src: n,
            size: a,
            className: r()(N.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        A = (e) => {
          let { guild: t, size: n, animate: a = !1, className: r } = e;
          return (0, s.jsx)(u.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: a,
            className: r,
          });
        };
      A.Sizes = u.Z.Sizes;
      let O = (e) => {
        let { className: t, channel: n, size: a } = e;
        return (0, s.jsx)(f, {
          src: (0, l.x)(n),
          size: a,
          className: r()(N.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      O.Sizes = i.AvatarSizes;
      let T = (e) => {
          let {
              label: t,
              error: n,
              placeholder: a,
              value: l,
              className: o,
              inputClassName: c,
              setRef: u,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: h,
              maxLength: f,
              spellCheck: b,
              name: g,
              description: _,
              required: E,
              onFocus: j,
              onBlur: A,
            } = e,
            O = (0, d.Dt)();
          return (0, s.jsxs)(i.FormItem, {
            title: t,
            error: n,
            className: o,
            required: E,
            tag: "label",
            htmlFor: O,
            children: [
              (0, s.jsx)(i.TextInput, {
                name: g,
                type: p,
                value: l,
                inputRef: u,
                placeholder: a,
                inputClassName: r()(c, { [N.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: h,
                maxLength: f,
                spellCheck: b,
                id: O,
                onFocus: j,
                onBlur: A,
              }),
              null != _
                ? (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: N.description,
                    children: _,
                  })
                : null,
            ],
          });
        },
        I = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: r()(N.block, t), children: n });
        },
        v = (e) => {
          let { className: t, children: n, isProminent: a } = e;
          return (0, s.jsx)(i.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: r()(N.subText, t),
            children: n,
          });
        },
        B = (e) => {
          let { className: t } = e;
          return (0, s.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, s.jsx)(o.Z, { className: N.spinnerVideo }),
          });
        },
        D = (e) => {
          let t,
            {
              online: n,
              total: a,
              className: l,
              flat: o,
              textClassName: d,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: r()(N.pill, N.pillOnline, o && N.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: N.pillIconOnline }),
                    (0, s.jsx)(i.Text, {
                      tag: "span",
                      className: r()(N.pillMessage, d),
                      variant: "text-sm/normal",
                      children:
                        h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n },
                        ),
                    }),
                  ],
                })),
              (0, s.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, s.jsxs)("div", {
                    className: r()(N.pill, o && N.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: N.pillIconTotal }),
                      (0, s.jsx)(i.Text, {
                        tag: "span",
                        className: r()(N.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        R = (e) => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, s.jsxs)("div", {
                className: N.joiningAs,
                children: [
                  (0, s.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      h.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(j, {
                    className: N.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, s.jsx)(i.Text, {
                    className: N.joiningAsUsername,
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
          return (0, s.jsxs)(I, {
            className: t,
            children: [
              (0, s.jsx)(E, {
                onClick: () => window.open((0, p.t3)()),
                children: h.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, s.jsx)(v, {
                className: N.downloadButtonSubtext,
                children: h.Z.Messages.INCOMPATIBLE_BROWSER.format({
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
          tag: a = "section",
          onSubmit: l,
          children: o,
          expanded: c = !1,
          theme: d = x.BRd.DARK,
          style: u,
        } = e;
        return (0, s.jsx)(i.ThemeProvider, {
          theme: d,
          children: (e) =>
            (0, s.jsxs)(a, {
              "data-theme": d,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: u,
              className: r()(c ? N.authBoxExpanded : N.authBox, e, t),
              children: [
                (0, s.jsx)("div", { className: N.discordLogo }),
                (0, s.jsx)("div", {
                  className: r()(N.centeringWrapper, n),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    905656: function (e, t, n) {
      n(733860);
      var s = n(735250),
        a = n(470079),
        r = n(780384),
        i = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(70097),
        d = n(981631),
        u = n(73117),
        p = n(988868),
        m = n(554355),
        x = n(991989),
        h = n(787462),
        N = n(635507),
        f = n(470794),
        b = n(886777);
      function g(e) {
        let {
            movDark: t = u,
            movLight: n = h,
            mp4Dark: a = p,
            mp4Light: r = N,
            pngDark: i = m,
            pngLight: l = f,
            webmDark: c = x,
            webmLight: g = b,
          } = e,
          _ = (0, o.vu)(),
          E = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: i }, "png"),
          ],
          j = [
            (0, s.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (_ > 52 || -1 === _) &&
            (E.unshift(
              (0, s.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (E.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [d.BRd.DARK]: E, [d.BRd.LIGHT]: j }
        );
      }
      let _ = l.Z.getAppSpinnerSources(),
        E = null != _ ? g(_) : null,
        j = g({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: o,
            className: u,
            onReady: p,
          } = e,
          { theme: m } = (0, i.useThemeContext)(),
          { reducedMotion: x } = a.useContext(
            i.AccessibilityPreferencesContext,
          ),
          h = j;
        null != E && (h = E);
        let N =
          null !== (t = h[(0, r.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) &&
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
            children: N,
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
//# sourceMappingURL=5bea9214aec58f9e42cd.js.map
