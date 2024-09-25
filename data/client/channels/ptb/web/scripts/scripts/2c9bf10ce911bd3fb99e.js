"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7178"],
  {
    74830: function (e) {
      e.exports = "/assets/23a7a3fd6624342117bf.svg";
    },
    206818: function (e) {
      e.exports = "/assets/17a91e9b4e7eb3921ed5.svg";
    },
    73117: function (e, n, t) {
      e.exports = t.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, n, t) {
      e.exports = t.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, n, t) {
      e.exports = t.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, n, t) {
      e.exports = t.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, n, t) {
      e.exports = t.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, n, t) {
      e.exports = t.p + "b235c36699192662a3fe.webm";
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return h;
        },
        Dx: function () {
          return E;
        },
        EJ: function () {
          return S;
        },
        Ee: function () {
          return g;
        },
        Hh: function () {
          return O;
        },
        II: function () {
          return A;
        },
        MC: function () {
          return v;
        },
        Vj: function () {
          return I;
        },
        gO: function () {
          return L;
        },
        i_: function () {
          return T;
        },
        jQ: function () {
          return P;
        },
        qE: function () {
          return f;
        },
        v6: function () {
          return R;
        },
        zx: function () {
          return j;
        },
      }),
        t(536091);
      var a = t(735250);
      t(470079);
      var s = t(120356),
        i = t.n(s),
        r = t(481060),
        l = t(43267),
        o = t(905656),
        c = t(600164),
        u = t(313201),
        d = t(565138),
        p = t(361207),
        m = t(63063),
        x = t(981631),
        _ = t(689938),
        b = t(878145);
      let N = r.Avatar;
      null == N && (N = () => null);
      let E = (e) => {
          let { className: n, id: t, children: s } = e;
          return (0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(b.title, n),
            id: t,
            children: s,
          });
        },
        h = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        g = (e) => {
          let { className: n, src: t } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: i()(b.image, n),
          });
        },
        j = (e) => {
          let { className: n, ...t } = e,
            s = t.look === r.Button.Looks.LINK;
          return (0, a.jsx)(r.Button, {
            size: s ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !s,
            className: i()(n, { [b.button]: !s, [b.linkButton]: s }),
            ...t,
          });
        };
      (j.Looks = r.Button.Looks),
        (j.Colors = r.Button.Colors),
        (j.Sizes = r.Button.Sizes);
      let f = (e) => {
          let { className: n, src: t, size: s } = e;
          return (0, a.jsx)(N, {
            src: t,
            size: s,
            className: i()(b.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        I = (e) => {
          let { guild: n, size: t, animate: s = !1, className: i } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: s,
            className: i,
          });
        };
      I.Sizes = d.Z.Sizes;
      let v = (e) => {
        let { className: n, channel: t, size: s } = e;
        return (0, a.jsx)(N, {
          src: (0, l.x)(t),
          size: s,
          className: i()(b.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      v.Sizes = r.AvatarSizes;
      let A = (e) => {
          let {
              label: n,
              error: t,
              placeholder: s,
              value: l,
              className: o,
              inputClassName: c,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: _,
              maxLength: N,
              spellCheck: E,
              name: h,
              description: g,
              required: j,
              onFocus: f,
              onBlur: I,
            } = e,
            v = (0, u.Dt)();
          return (0, a.jsxs)(r.FormItem, {
            title: n,
            error: t,
            className: o,
            required: j,
            tag: "label",
            htmlFor: v,
            children: [
              (0, a.jsx)(r.TextInput, {
                name: h,
                type: p,
                value: l,
                inputRef: d,
                placeholder: s,
                inputClassName: i()(c, { [b.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: _,
                maxLength: N,
                spellCheck: E,
                id: v,
                onFocus: f,
                onBlur: I,
              }),
              null != g
                ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: g,
                  })
                : null,
            ],
          });
        },
        L = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)("div", { className: i()(b.block, n), children: t });
        },
        T = (e) => {
          let { className: n, children: t, isProminent: s } = e;
          return (0, a.jsx)(r.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: i()(b.subText, n),
            children: t,
          });
        },
        O = (e) => {
          let { className: n } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(o.Z, { className: b.spinnerVideo }),
          });
        },
        S = (e) => {
          let n,
            {
              online: t,
              total: s,
              className: l,
              flat: o,
              textClassName: u,
            } = e;
          return null == s
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, a.jsxs)("div", {
                  className: i()(b.pill, b.pillOnline, o && b.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: b.pillIconOnline }),
                    (0, a.jsx)(r.Text, {
                      tag: "span",
                      className: i()(b.pillMessage, u),
                      variant: "text-sm/normal",
                      children:
                        _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: t },
                        ),
                    }),
                  ],
                })),
              (0, a.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                className: l,
                children: [
                  n,
                  (0, a.jsxs)("div", {
                    className: i()(b.pill, o && b.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: b.pillIconTotal }),
                      (0, a.jsx)(r.Text, {
                        tag: "span",
                        className: i()(b.pillMessage, u),
                        variant: "text-sm/normal",
                        children:
                          _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: s },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        P = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: b.joiningAs,
                children: [
                  (0, a.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      _.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(f, {
                    className: b.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, a.jsx)(r.Text, {
                    className: b.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        R = (e) => {
          let { className: n } = e;
          return (0, a.jsxs)(L, {
            className: n,
            children: [
              (0, a.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: _.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(T, {
                className: b.downloadButtonSubtext,
                children: _.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    x.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      n.ZP = (e) => {
        let {
          className: n,
          contentClassName: t,
          tag: s = "section",
          onSubmit: l,
          children: o,
          expanded: c = !1,
          theme: u = x.BRd.DARK,
          style: d,
        } = e;
        return (0, a.jsx)(r.ThemeProvider, {
          theme: u,
          children: (e) =>
            (0, a.jsxs)(s, {
              "data-theme": u,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: d,
              className: i()(c ? b.authBoxExpanded : b.authBox, e, n),
              children: [
                (0, a.jsx)("div", { className: b.discordLogo }),
                (0, a.jsx)("div", {
                  className: i()(b.centeringWrapper, t),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    297511: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var a = t(735250),
        s = t(470079),
        i = t(442837),
        r = t(830064),
        l = t(388905),
        o = t(625128),
        c = t(362762),
        u = t(831565),
        d = t(703656),
        p = t(963202),
        m = t(981631),
        x = t(186901),
        _ = t(689938),
        b = t(940956);
      function N(e) {
        let { match: n } = e,
          t = (0, i.e7)([c.Z], () => c.Z.getState("discovery")),
          N = (0, u.v)({ location: "game_discovery_entry_point" }),
          E = (0, p.iN)("game_discovery_entry_point"),
          h = n.params.gameId;
        s.useEffect(() => {
          !N && (0, d.dL)({ pathname: m.Z5c.GUILD_DISCOVERY }),
            !E && (0, d.dL)({ pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS }),
            null == t
              ? o.Z.openNativeAppModal("discovery", m.Etm.DEEP_LINK, {
                  type: x.jE.DISCOVERY_GAME_RESULTS,
                  params: { gameId: h },
                })
              : t === m.kEZ.OPEN_FAIL &&
                (0, d.dL)({
                  pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS,
                  search: "?game=".concat(h),
                });
        }, [h, N, E, t]);
        let g = null == t || t === m.kEZ.OPENING || t === m.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.Z, {
              className: b.backgroundArt,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: b.container,
              children: (0, a.jsx)(l.ZP, {
                children: g
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.Dx, {
                          children: _.Z.Messages.APP_OPENING,
                        }),
                        (0, a.jsx)(l.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.Dx, {
                          children: _.Z.Messages.APP_OPENED_TITLE,
                        }),
                        (0, a.jsx)(l.DK, {
                          children: _.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
      i.ZP.initialize();
    },
    362762: function (e, n, t) {
      var a,
        s,
        i,
        r,
        l = t(442837),
        o = t(570140),
        c = t(981631);
      let u = {};
      class d extends (r = l.ZP.Store) {
        getState(e) {
          return u[e];
        }
      }
      (i = "CodedLinkNativeAppStateStore"),
        (s = "displayName") in (a = d)
          ? Object.defineProperty(a, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = i),
        (n.Z = new d(o.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: n } = e;
            u[n] = c.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: n } = e;
            u[n] = c.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: n } = e;
            u[n] = c.kEZ.OPEN_FAIL;
          },
        }));
    },
    905656: function (e, n, t) {
      t(733860);
      var a = t(735250),
        s = t(470079),
        i = t(780384),
        r = t(481060),
        l = t(197344),
        o = t(526167),
        c = t(70097),
        u = t(981631),
        d = t(73117),
        p = t(988868),
        m = t(554355),
        x = t(991989),
        _ = t(787462),
        b = t(635507),
        N = t(470794),
        E = t(886777);
      function h(e) {
        let {
            movDark: n = d,
            movLight: t = _,
            mp4Dark: s = p,
            mp4Light: i = b,
            pngDark: r = m,
            pngLight: l = N,
            webmDark: c = x,
            webmLight: h = E,
          } = e,
          g = (0, o.vu)(),
          j = [
            (0, a.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: r }, "png"),
          ],
          f = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (g > 52 || -1 === g) &&
            (j.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            f.unshift(
              (0, a.jsx)("source", { src: h, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (j.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            f.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [u.BRd.DARK]: j, [u.BRd.LIGHT]: f }
        );
      }
      let g = l.Z.getAppSpinnerSources(),
        j = null != g ? h(g) : null,
        f = h({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: l = !0,
            setRef: o,
            className: d,
            onReady: p,
          } = e,
          { theme: m } = (0, r.useThemeContext)(),
          { reducedMotion: x } = s.useContext(
            r.AccessibilityPreferencesContext,
          ),
          _ = f;
        null != j && (_ = j);
        let b =
          null !== (n = _[(0, i.wj)(m) ? u.BRd.DARK : u.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : _[u.BRd.DARK];
        return (0, a.jsx)(
          c.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: b,
          },
          m,
        );
      };
    },
    878145: function (e, n, t) {
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
    940956: function (e, n, t) {
      e.exports = {
        container: "container_c25abe",
        backgroundArt: "backgroundArt_c25abe",
      };
    },
  },
]);
//# sourceMappingURL=2c9bf10ce911bd3fb99e.js.map
