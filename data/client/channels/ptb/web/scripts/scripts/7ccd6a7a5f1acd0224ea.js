"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40021"],
  {
    870704: function (e) {
      e.exports = "/assets/d7c3c29c10588b7767ee.png";
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
            return g;
          },
        });
      var s = n(735250),
        a = n(470079),
        i = n(593473),
        r = n(442837),
        l = n(544891),
        o = n(536285),
        c = n(388905),
        u = n(600164),
        d = n(703656),
        p = n(314897),
        m = n(981631),
        x = n(689938),
        h = n(999730),
        N = n(224499);
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
      r.ZP.initialize();
      let b = { HANDOFF: "handoff", DONE: "done", FAILED: "failed" };
      function _() {
        try {
          window.close();
        } catch (e) {}
      }
      class g extends a.PureComponent {
        componentDidMount() {
          let { stage: e, key: t } = this.state;
          e === b.DONE
            ? _()
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
          return (0, s.jsx)(u.Z, {
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            className: h.wrapper,
            children: e,
          });
        }
        constructor(e) {
          var t;
          super(e),
            f(this, "done", () => {
              _(), this.setState({ stage: b.DONE });
            }),
            f(this, "failed", () => {
              this.setState({ stage: b.FAILED }), _();
            }),
            f(this, "handleOpenApp", () => {
              (0, d.uL)(m.Z5c.ME);
            });
          let { search: n } = e.location,
            s = null != n && "" !== n ? (0, i.parse)(n) : {};
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
          return _;
        },
        EJ: function () {
          return R;
        },
        Ee: function () {
          return E;
        },
        Hh: function () {
          return D;
        },
        II: function () {
          return I;
        },
        MC: function () {
          return T;
        },
        Vj: function () {
          return O;
        },
        gO: function () {
          return v;
        },
        i_: function () {
          return B;
        },
        jQ: function () {
          return F;
        },
        qE: function () {
          return A;
        },
        v6: function () {
          return S;
        },
        zx: function () {
          return j;
        },
      }),
        n(536091);
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        r = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        u = n(313201),
        d = n(565138),
        p = n(361207),
        m = n(63063),
        x = n(792125),
        h = n(981631),
        N = n(689938),
        f = n(986579);
      let b = r.Avatar;
      null == b && (b = () => null);
      let _ = (e) => {
          let { className: t, id: n, children: a } = e;
          return (0, s.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(f.title, t),
            id: n,
            children: a,
          });
        },
        g = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        E = (e) => {
          let { className: t, src: n } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: n,
            className: i()(f.image, t),
          });
        },
        j = (e) => {
          let { className: t, ...n } = e,
            a = n.look === r.Button.Looks.LINK;
          return (0, s.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: i()(t, { [f.button]: !a, [f.linkButton]: a }),
            ...n,
          });
        };
      (j.Looks = r.Button.Looks),
        (j.Colors = r.Button.Colors),
        (j.Sizes = r.Button.Sizes);
      let A = (e) => {
          let { className: t, src: n, size: a } = e;
          return (0, s.jsx)(b, {
            src: n,
            size: a,
            className: i()(f.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        O = (e) => {
          let { guild: t, size: n, animate: a = !1, className: i } = e;
          return (0, s.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: a,
            className: i,
          });
        };
      O.Sizes = d.Z.Sizes;
      let T = (e) => {
        let { className: t, channel: n, size: a } = e;
        return (0, s.jsx)(b, {
          src: (0, l.x)(n),
          size: a,
          className: i()(f.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      T.Sizes = r.AvatarSizes;
      let I = (e) => {
          let {
              label: t,
              error: n,
              placeholder: a,
              value: l,
              className: o,
              inputClassName: c,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: h,
              maxLength: N,
              spellCheck: b,
              name: _,
              description: g,
              required: E,
              onFocus: j,
              onBlur: A,
            } = e,
            O = (0, u.Dt)();
          return (0, s.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: o,
            required: E,
            tag: "label",
            htmlFor: O,
            children: [
              (0, s.jsx)(r.TextInput, {
                name: _,
                type: p,
                value: l,
                inputRef: d,
                placeholder: a,
                inputClassName: i()(c, { [f.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: h,
                maxLength: N,
                spellCheck: b,
                id: O,
                onFocus: j,
                onBlur: A,
              }),
              null != g
                ? (0, s.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: f.description,
                    children: g,
                  })
                : null,
            ],
          });
        },
        v = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", { className: i()(f.block, t), children: n });
        },
        B = (e) => {
          let { className: t, children: n, isProminent: a } = e;
          return (0, s.jsx)(r.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: i()(f.subText, t),
            children: n,
          });
        },
        D = (e) => {
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
              total: a,
              className: l,
              flat: o,
              textClassName: u,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, s.jsxs)("div", {
                  className: i()(f.pill, f.pillOnline, o && f.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: f.pillIconOnline }),
                    (0, s.jsx)(r.Text, {
                      tag: "span",
                      className: i()(f.pillMessage, u),
                      variant: "text-sm/normal",
                      children:
                        N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: i()(f.pill, o && f.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: f.pillIconTotal }),
                      (0, s.jsx)(r.Text, {
                        tag: "span",
                        className: i()(f.pillMessage, u),
                        variant: "text-sm/normal",
                        children:
                          N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        F = (e) => {
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
                    children:
                      N.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(A, {
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
        S = (e) => {
          let { className: t } = e;
          return (0, s.jsxs)(v, {
            className: t,
            children: [
              (0, s.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: N.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, s.jsx)(B, {
                className: f.downloadButtonSubtext,
                children: N.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    h.BhN.SUPPORTED_BROWSERS,
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
          onSubmit: r,
          children: l,
          expanded: o = !1,
          theme: c = h.BRd.DARK,
          style: u,
        } = e;
        return (0, s.jsxs)(a, {
          "data-theme": c,
          "data-disable-adaptive-theme": !0,
          onSubmit: r,
          style: u,
          className: i()(o ? f.authBoxExpanded : f.authBox, (0, x.Q)(c), t),
          children: [
            (0, s.jsx)("div", { className: f.discordLogo }),
            (0, s.jsx)("div", {
              className: i()(f.centeringWrapper, n),
              children: l,
            }),
          ],
        });
      };
    },
    905656: function (e, t, n) {
      n(733860);
      var s = n(735250),
        a = n(470079),
        i = n(780384),
        r = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(73117),
        u = n(787462),
        d = n(70097),
        p = n(981631),
        m = n(988868),
        x = n(554355),
        h = n(991989),
        N = n(635507),
        f = n(470794),
        b = n(886777);
      function _(e) {
        let {
            movDark: t = c,
            movLight: n = u,
            mp4Dark: a = m,
            mp4Light: i = N,
            pngDark: r = x,
            pngLight: l = f,
            webmDark: d = h,
            webmLight: _ = b,
          } = e,
          g = (0, o.vu)(),
          E = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: r }, "png"),
          ],
          j = [
            (0, s.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (g > 52 || -1 === g) &&
            (E.unshift(
              (0, s.jsx)("source", { src: d, type: "video/webm" }, "webm"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: _, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (E.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [p.BRd.DARK]: E, [p.BRd.LIGHT]: j }
        );
      }
      let g = l.Z.getAppSpinnerSources(),
        E = null != g ? _(g) : null,
        j = _({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: o,
            className: c,
            onReady: u,
          } = e,
          { theme: m } = (0, r.useThemeContext)(),
          { reducedMotion: x } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          h = j;
        null != E && (h = E);
        let N =
          null !== (t = h[(0, i.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : h[p.BRd.DARK];
        return (0, s.jsx)(
          d.Z,
          {
            ref: o,
            onLoadedData: u,
            className: c,
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
    999730: function (e, t, n) {
      e.exports = { wrapper: "wrapper_d4fa29 " + n("594402").scrollbarGhost };
    },
    986579: function (e, t, n) {
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
//# sourceMappingURL=7ccd6a7a5f1acd0224ea.js.map
