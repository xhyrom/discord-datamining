"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4964"],
  {
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
    821744: function (e) {
      e.exports = "/assets/192e26ec0980fbaa4102.png";
    },
    388905: function (e, t, n) {
      n.d(t, {
        DK: function () {
          return g;
        },
        Dx: function () {
          return E;
        },
        EJ: function () {
          return P;
        },
        Ee: function () {
          return h;
        },
        Hh: function () {
          return L;
        },
        II: function () {
          return v;
        },
        MC: function () {
          return A;
        },
        Vj: function () {
          return j;
        },
        gO: function () {
          return T;
        },
        i_: function () {
          return O;
        },
        jQ: function () {
          return S;
        },
        qE: function () {
          return f;
        },
        v6: function () {
          return B;
        },
        zx: function () {
          return I;
        },
      }),
        n(536091);
      var a = n(735250);
      n(470079);
      var s = n(120356),
        i = n.n(s),
        r = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        u = n(313201),
        d = n(565138),
        p = n(361207),
        m = n(63063),
        x = n(981631),
        _ = n(689938),
        b = n(878145);
      let N = r.Avatar;
      null == N && (N = () => null);
      let E = (e) => {
          let { className: t, id: n, children: s } = e;
          return (0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(b.title, t),
            id: n,
            children: s,
          });
        },
        g = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        h = (e) => {
          let { className: t, src: n } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: n,
            className: i()(b.image, t),
          });
        },
        I = (e) => {
          let { className: t, ...n } = e,
            s = n.look === r.Button.Looks.LINK;
          return (0, a.jsx)(r.Button, {
            size: s ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !s,
            className: i()(t, { [b.button]: !s, [b.linkButton]: s }),
            ...n,
          });
        };
      (I.Looks = r.Button.Looks),
        (I.Colors = r.Button.Colors),
        (I.Sizes = r.Button.Sizes);
      let f = (e) => {
          let { className: t, src: n, size: s } = e;
          return (0, a.jsx)(N, {
            src: n,
            size: s,
            className: i()(b.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        j = (e) => {
          let { guild: t, size: n, animate: s = !1, className: i } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: s,
            className: i,
          });
        };
      j.Sizes = d.Z.Sizes;
      let A = (e) => {
        let { className: t, channel: n, size: s } = e;
        return (0, a.jsx)(N, {
          src: (0, l.x)(n),
          size: s,
          className: i()(b.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      A.Sizes = r.AvatarSizes;
      let v = (e) => {
          let {
              label: t,
              error: n,
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
              name: g,
              description: h,
              required: I,
              onFocus: f,
              onBlur: j,
            } = e,
            A = (0, u.Dt)();
          return (0, a.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: o,
            required: I,
            tag: "label",
            htmlFor: A,
            children: [
              (0, a.jsx)(r.TextInput, {
                name: g,
                type: p,
                value: l,
                inputRef: d,
                placeholder: s,
                inputClassName: i()(c, { [b.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: _,
                maxLength: N,
                spellCheck: E,
                id: A,
                onFocus: f,
                onBlur: j,
              }),
              null != h
                ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: h,
                  })
                : null,
            ],
          });
        },
        T = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)("div", { className: i()(b.block, t), children: n });
        },
        O = (e) => {
          let { className: t, children: n, isProminent: s } = e;
          return (0, a.jsx)(r.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: i()(b.subText, t),
            children: n,
          });
        },
        L = (e) => {
          let { className: t } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, a.jsx)(o.Z, { className: b.spinnerVideo }),
          });
        },
        P = (e) => {
          let t,
            {
              online: n,
              total: s,
              className: l,
              flat: o,
              textClassName: u,
            } = e;
          return null == s
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, a.jsxs)("div", {
                  className: i()(b.pill, b.pillOnline, o && b.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: b.pillIconOnline }),
                    (0, a.jsx)(r.Text, {
                      tag: "span",
                      className: i()(b.pillMessage, u),
                      variant: "text-sm/normal",
                      children:
                        _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n },
                        ),
                    }),
                  ],
                })),
              (0, a.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                className: l,
                children: [
                  t,
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
        S = (e) => {
          let { user: t } = e;
          return null == t
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
                    src: t.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, a.jsx)(r.Text, {
                    className: b.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        B = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)(T, {
            className: t,
            children: [
              (0, a.jsx)(I, {
                onClick: () => window.open((0, p.t3)()),
                children: _.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(O, {
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
      t.ZP = (e) => {
        let {
          className: t,
          contentClassName: n,
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
              className: i()(c ? b.authBoxExpanded : b.authBox, e, t),
              children: [
                (0, a.jsx)("div", { className: b.discordLogo }),
                (0, a.jsx)("div", {
                  className: i()(b.centeringWrapper, n),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    362762: function (e, t, n) {
      var a,
        s,
        i,
        r,
        l = n(442837),
        o = n(570140),
        c = n(981631);
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
        (t.Z = new d(o.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            u[t] = c.kEZ.OPEN_FAIL;
          },
        }));
    },
    905656: function (e, t, n) {
      n(733860);
      var a = n(735250),
        s = n(470079),
        i = n(780384),
        r = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(70097),
        u = n(981631),
        d = n(73117),
        p = n(988868),
        m = n(554355),
        x = n(991989),
        _ = n(787462),
        b = n(635507),
        N = n(470794),
        E = n(886777);
      function g(e) {
        let {
            movDark: t = d,
            movLight: n = _,
            mp4Dark: s = p,
            mp4Light: i = b,
            pngDark: r = m,
            pngLight: l = N,
            webmDark: c = x,
            webmLight: g = E,
          } = e,
          h = (0, o.vu)(),
          I = [
            (0, a.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: r }, "png"),
          ],
          f = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (h > 52 || -1 === h) &&
            (I.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            f.unshift(
              (0, a.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (I.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            f.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [u.BRd.DARK]: I, [u.BRd.LIGHT]: f }
        );
      }
      let h = l.Z.getAppSpinnerSources(),
        I = null != h ? g(h) : null,
        f = g({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
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
        null != I && (_ = I);
        let b =
          null !== (t = _[(0, i.wj)(m) ? u.BRd.DARK : u.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : _[u.BRd.DARK];
        return (0, a.jsx)(
          c.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !x.enabled && n,
            autoPlay: !x.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: b,
          },
          m,
        );
      };
    },
    630107: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n(735250),
        s = n(470079),
        i = n(873546),
        r = n(442837),
        l = n(481060),
        o = n(830064),
        c = n(388905),
        u = n(625128),
        d = n(362762),
        p = n(703656),
        m = n(626135),
        x = n(981631),
        _ = n(186901),
        b = n(689938),
        N = n(901628),
        E = n(821744);
      r.ZP.initialize();
      let g = i.tq || i.Em;
      function h(e) {
        let { match: t } = e,
          n = (0, r.e7)([d.Z], () => d.Z.getState("quests")),
          i = t.params.questId;
        if (
          (s.useEffect(() => {
            if (!g)
              null == n
                ? (m.default.track(
                    x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                    { quest_id: i },
                  ),
                  u.Z.openNativeAppModal("quests", x.Etm.DEEP_LINK, {
                    type: _.jE.QUEST_HOME,
                    params: { questId: i },
                  }))
                : n === x.kEZ.OPEN_FAIL &&
                  (0, p.dL)({ pathname: x.Z5c.QUEST_HOME, hash: i });
          }, [n, i]),
          g)
        )
          return (0, a.jsxs)("div", {
            className: N.mobileWebContainer,
            children: [
              (0, a.jsx)("img", {
                src: E,
                alt: "",
                className: N.mobileWebImage,
              }),
              (0, a.jsx)(l.Heading, {
                variant: "display-lg",
                color: "text-brand",
                children: b.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING,
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                className: N.mobileWebCopy,
                children:
                  b.Z.Messages
                    .QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME,
              }),
            ],
          });
        let h = null == n || n === x.kEZ.OPENING || n === x.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.Z, {
              className: N.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: N.container,
              children: (0, a.jsx)(c.ZP, {
                children: h
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          children: b.Z.Messages.APP_OPENING,
                        }),
                        (0, a.jsx)(c.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          className: N.appOpenedTitle,
                          children: b.Z.Messages.APP_OPENED_TITLE,
                        }),
                        (0, a.jsx)(c.DK, {
                          children: b.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
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
    901628: function (e, t, n) {
      e.exports = {
        mobileWebContainer: "mobileWebContainer_d87cd8",
        mobileWebCopy: "mobileWebCopy_d87cd8",
        mobileWebImage: "mobileWebImage_d87cd8",
        container: "container_d87cd8",
        backgroundArtwork: "backgroundArtwork_d87cd8",
        appOpenedTitle: "appOpenedTitle_d87cd8",
      };
    },
  },
]);
//# sourceMappingURL=403d1742d7d06dc75549.js.map
