"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4964"],
  {
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
    821744: function (e) {
      e.exports = "/assets/192e26ec0980fbaa4102.png";
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return I;
        },
        Dx: function () {
          return g;
        },
        EJ: function () {
          return S;
        },
        Ee: function () {
          return f;
        },
        Hh: function () {
          return P;
        },
        II: function () {
          return v;
        },
        MC: function () {
          return T;
        },
        Vj: function () {
          return A;
        },
        gO: function () {
          return O;
        },
        i_: function () {
          return L;
        },
        jQ: function () {
          return B;
        },
        qE: function () {
          return j;
        },
        v6: function () {
          return D;
        },
        zx: function () {
          return h;
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
        x = t(792125),
        _ = t(981631),
        b = t(689938),
        E = t(986579);
      let N = r.Avatar;
      null == N && (N = () => null);
      let g = (e) => {
          let { className: n, id: t, children: s } = e;
          return (0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(E.title, n),
            id: t,
            children: s,
          });
        },
        I = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        f = (e) => {
          let { className: n, src: t } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: i()(E.image, n),
          });
        },
        h = (e) => {
          let { className: n, ...t } = e,
            s = t.look === r.Button.Looks.LINK;
          return (0, a.jsx)(r.Button, {
            size: s ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !s,
            className: i()(n, { [E.button]: !s, [E.linkButton]: s }),
            ...t,
          });
        };
      (h.Looks = r.Button.Looks),
        (h.Colors = r.Button.Colors),
        (h.Sizes = r.Button.Sizes);
      let j = (e) => {
          let { className: n, src: t, size: s } = e;
          return (0, a.jsx)(N, {
            src: t,
            size: s,
            className: i()(E.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        A = (e) => {
          let { guild: n, size: t, animate: s = !1, className: i } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: s,
            className: i,
          });
        };
      A.Sizes = d.Z.Sizes;
      let T = (e) => {
        let { className: n, channel: t, size: s } = e;
        return (0, a.jsx)(N, {
          src: (0, l.x)(t),
          size: s,
          className: i()(E.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      T.Sizes = r.AvatarSizes;
      let v = (e) => {
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
              maxLength: b,
              spellCheck: N,
              name: g,
              description: I,
              required: f,
              onFocus: h,
              onBlur: j,
            } = e,
            A = (0, u.Dt)();
          return (0, a.jsxs)(r.FormItem, {
            title: n,
            error: t,
            className: o,
            required: f,
            tag: "label",
            htmlFor: A,
            children: [
              (0, a.jsx)(r.TextInput, {
                name: g,
                type: p,
                value: l,
                inputRef: d,
                placeholder: s,
                inputClassName: i()(c, { [E.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: _,
                maxLength: b,
                spellCheck: N,
                id: A,
                onFocus: h,
                onBlur: j,
              }),
              null != I
                ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: E.description,
                    children: I,
                  })
                : null,
            ],
          });
        },
        O = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)("div", { className: i()(E.block, n), children: t });
        },
        L = (e) => {
          let { className: n, children: t, isProminent: s } = e;
          return (0, a.jsx)(r.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: i()(E.subText, n),
            children: t,
          });
        },
        P = (e) => {
          let { className: n } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(o.Z, { className: E.spinnerVideo }),
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
                  className: i()(E.pill, E.pillOnline, o && E.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: E.pillIconOnline }),
                    (0, a.jsx)(r.Text, {
                      tag: "span",
                      className: i()(E.pillMessage, u),
                      variant: "text-sm/normal",
                      children:
                        b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: i()(E.pill, o && E.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: E.pillIconTotal }),
                      (0, a.jsx)(r.Text, {
                        tag: "span",
                        className: i()(E.pillMessage, u),
                        variant: "text-sm/normal",
                        children:
                          b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: s },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        B = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: E.joiningAs,
                children: [
                  (0, a.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      b.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(j, {
                    className: E.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, a.jsx)(r.Text, {
                    className: E.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        D = (e) => {
          let { className: n } = e;
          return (0, a.jsxs)(O, {
            className: n,
            children: [
              (0, a.jsx)(h, {
                onClick: () => window.open((0, p.t3)()),
                children: b.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(L, {
                className: E.downloadButtonSubtext,
                children: b.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    _.BhN.SUPPORTED_BROWSERS,
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
          onSubmit: r,
          children: l,
          expanded: o = !1,
          theme: c = _.BRd.DARK,
          style: u,
        } = e;
        return (0, a.jsxs)(s, {
          "data-theme": c,
          "data-disable-adaptive-theme": !0,
          onSubmit: r,
          style: u,
          className: i()(o ? E.authBoxExpanded : E.authBox, (0, x.Q)(c), n),
          children: [
            (0, a.jsx)("div", { className: E.discordLogo }),
            (0, a.jsx)("div", {
              className: i()(E.centeringWrapper, t),
              children: l,
            }),
          ],
        });
      };
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
        c = t(73117),
        u = t(787462),
        d = t(70097),
        p = t(981631),
        m = t(988868),
        x = t(554355),
        _ = t(991989),
        b = t(635507),
        E = t(470794),
        N = t(886777);
      function g(e) {
        let {
            movDark: n = c,
            movLight: t = u,
            mp4Dark: s = m,
            mp4Light: i = b,
            pngDark: r = x,
            pngLight: l = E,
            webmDark: d = _,
            webmLight: g = N,
          } = e,
          I = (0, o.vu)(),
          f = [
            (0, a.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: r }, "png"),
          ],
          h = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (I > 52 || -1 === I) &&
            (f.unshift(
              (0, a.jsx)("source", { src: d, type: "video/webm" }, "webm"),
            ),
            h.unshift(
              (0, a.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (f.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            h.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [p.BRd.DARK]: f, [p.BRd.LIGHT]: h }
        );
      }
      let I = l.Z.getAppSpinnerSources(),
        f = null != I ? g(I) : null,
        h = g({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: l = !0,
            setRef: o,
            className: c,
            onReady: u,
          } = e,
          { theme: m } = (0, r.useThemeContext)(),
          { reducedMotion: x } = s.useContext(
            r.AccessibilityPreferencesContext,
          ),
          _ = h;
        null != f && (_ = f);
        let b =
          null !== (n = _[(0, i.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : _[p.BRd.DARK];
        return (0, a.jsx)(
          d.Z,
          {
            ref: o,
            onLoadedData: u,
            className: c,
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
    471985: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(831565),
        s = t(282421);
      function i(e) {
        let n = (0, a.v)({ location: e, autoTrackExposure: !1 }),
          { enabled: t } = s.B.useExperiment(
            { location: e },
            { autoTrackExposure: !1 },
          );
        return t || n;
      }
    },
    630107: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var a = t(735250),
        s = t(470079),
        i = t(873546),
        r = t(442837),
        l = t(481060),
        o = t(830064),
        c = t(388905),
        u = t(625128),
        d = t(362762),
        p = t(703656),
        m = t(626135),
        x = t(471985),
        _ = t(46140),
        b = t(981631),
        E = t(186901),
        N = t(689938),
        g = t(309687),
        I = t(821744);
      r.ZP.initialize();
      let f = i.tq || i.Em;
      function h(e) {
        let { match: n } = e,
          t = (0, r.e7)([d.Z], () => d.Z.getState("quests")),
          i = n.params.questId,
          h = (0, x.Z)(_.dr.CODED_LINK);
        if (
          (s.useEffect(() => {
            if (!f)
              null == t
                ? (m.default.track(
                    b.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                    { quest_id: i },
                  ),
                  u.Z.openNativeAppModal("quests", b.Etm.DEEP_LINK, {
                    type: E.jE.QUEST_HOME,
                    params: { questId: i },
                  }))
                : t === b.kEZ.OPEN_FAIL && (0, p.dL)(b.Z5c.QUEST_HOME);
          }, [t, i]),
          f)
        )
          return (0, a.jsxs)("div", {
            className: g.mobileWebContainer,
            children: [
              (0, a.jsx)("img", {
                src: I,
                alt: "",
                className: g.mobileWebImage,
              }),
              (0, a.jsx)(l.Heading, {
                variant: "display-lg",
                color: "text-brand",
                children: N.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING,
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                className: g.mobileWebCopy,
                children: h
                  ? N.Z.Messages
                      .QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME
                  : N.Z.Messages
                      .QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE,
              }),
            ],
          });
        let j = null == t || t === b.kEZ.OPENING || t === b.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.Z, {
              className: g.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: g.container,
              children: (0, a.jsx)(c.ZP, {
                children: j
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          children: N.Z.Messages.APP_OPENING,
                        }),
                        (0, a.jsx)(c.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          className: g.appOpenedTitle,
                          children: N.Z.Messages.APP_OPENED_TITLE,
                        }),
                        (0, a.jsx)(c.DK, {
                          children: N.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    986579: function (e, n, t) {
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
    309687: function (e, n, t) {
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
//# sourceMappingURL=bb091d8560a96219cf29.js.map
