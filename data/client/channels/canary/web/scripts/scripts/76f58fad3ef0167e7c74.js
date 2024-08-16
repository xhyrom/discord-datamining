"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4964"],
  {
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
          return I;
        },
        Dx: function () {
          return g;
        },
        EJ: function () {
          return P;
        },
        Ee: function () {
          return f;
        },
        Hh: function () {
          return S;
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
          return Z;
        },
        qE: function () {
          return j;
        },
        v6: function () {
          return B;
        },
        zx: function () {
          return h;
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
        x = n(792125),
        _ = n(981631),
        E = n(689938),
        b = n(986579);
      let N = r.Avatar;
      null == N && (N = () => null);
      let g = (e) => {
          let { className: t, id: n, children: s } = e;
          return (0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: i()(b.title, t),
            id: n,
            children: s,
          });
        },
        I = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        f = (e) => {
          let { className: t, src: n } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: n,
            className: i()(b.image, t),
          });
        },
        h = (e) => {
          let { className: t, ...n } = e,
            s = n.look === r.Button.Looks.LINK;
          return (0, a.jsx)(r.Button, {
            size: s ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !s,
            className: i()(t, { [b.button]: !s, [b.linkButton]: s }),
            ...n,
          });
        };
      (h.Looks = r.Button.Looks),
        (h.Colors = r.Button.Colors),
        (h.Sizes = r.Button.Sizes);
      let j = (e) => {
          let { className: t, src: n, size: s } = e;
          return (0, a.jsx)(N, {
            src: n,
            size: s,
            className: i()(b.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        A = (e) => {
          let { guild: t, size: n, animate: s = !1, className: i } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: s,
            className: i,
          });
        };
      A.Sizes = d.Z.Sizes;
      let T = (e) => {
        let { className: t, channel: n, size: s } = e;
        return (0, a.jsx)(N, {
          src: (0, l.x)(n),
          size: s,
          className: i()(b.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      T.Sizes = r.AvatarSizes;
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
              maxLength: E,
              spellCheck: N,
              name: g,
              description: I,
              required: f,
              onFocus: h,
              onBlur: j,
            } = e,
            A = (0, u.Dt)();
          return (0, a.jsxs)(r.FormItem, {
            title: t,
            error: n,
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
                inputClassName: i()(c, { [b.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: _,
                maxLength: E,
                spellCheck: N,
                id: A,
                onFocus: h,
                onBlur: j,
              }),
              null != I
                ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: I,
                  })
                : null,
            ],
          });
        },
        O = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)("div", { className: i()(b.block, t), children: n });
        },
        L = (e) => {
          let { className: t, children: n, isProminent: s } = e;
          return (0, a.jsx)(r.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: i()(b.subText, t),
            children: n,
          });
        },
        S = (e) => {
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
                        E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                          E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: s },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        Z = (e) => {
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
                      E.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(j, {
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
          return (0, a.jsxs)(O, {
            className: t,
            children: [
              (0, a.jsx)(h, {
                onClick: () => window.open((0, p.t3)()),
                children: E.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(L, {
                className: b.downloadButtonSubtext,
                children: E.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    _.BhN.SUPPORTED_BROWSERS,
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
          className: i()(o ? b.authBoxExpanded : b.authBox, (0, x.Q)(c), t),
          children: [
            (0, a.jsx)("div", { className: b.discordLogo }),
            (0, a.jsx)("div", {
              className: i()(b.centeringWrapper, n),
              children: l,
            }),
          ],
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
        c = n(73117),
        u = n(787462),
        d = n(70097),
        p = n(981631),
        m = n(988868),
        x = n(554355),
        _ = n(991989),
        E = n(635507),
        b = n(470794),
        N = n(886777);
      function g(e) {
        let {
            movDark: t = c,
            movLight: n = u,
            mp4Dark: s = m,
            mp4Light: i = E,
            pngDark: r = x,
            pngLight: l = b,
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
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            h.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [p.BRd.DARK]: f, [p.BRd.LIGHT]: h }
        );
      }
      let I = l.Z.getAppSpinnerSources(),
        f = null != I ? g(I) : null,
        h = g({});
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
          { reducedMotion: x } = s.useContext(
            r.AccessibilityPreferencesContext,
          ),
          _ = h;
        null != f && (_ = f);
        let E =
          null !== (t = _[(0, i.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : _[p.BRd.DARK];
        return (0, a.jsx)(
          d.Z,
          {
            ref: o,
            onLoadedData: u,
            className: c,
            loop: !x.enabled && n,
            autoPlay: !x.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: E,
          },
          m,
        );
      };
    },
    471985: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(831565),
        s = n(282421);
      function i(e) {
        let t = (0, a.v)({ location: e, autoTrackExposure: !1 }),
          { enabled: n } = s.B.useExperiment(
            { location: e },
            { autoTrackExposure: !1 },
          );
        return n || t;
      }
    },
    630107: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var a = n(735250),
        s = n(470079),
        i = n(873546),
        r = n(442837),
        l = n(481060),
        o = n(893776),
        c = n(830064),
        u = n(388905),
        d = n(625128),
        p = n(362762),
        m = n(353926),
        x = n(703656),
        _ = n(314897),
        E = n(626135),
        b = n(471985),
        N = n(46140),
        g = n(981631),
        I = n(186901),
        f = n(689938),
        h = n(309687),
        j = n(821744);
      r.ZP.initialize();
      let A = i.tq || i.Em,
        T = "inventory";
      function v(e) {
        let { match: t } = e,
          n = (0, r.e7)([p.Z], () => p.Z.getState("quests")),
          i = (0, r.e7)([m.Z], () => m.Z.hasLoadedExperiments),
          v = t.params.questId,
          O = (0, b.Z)(N.dr.CODED_LINK),
          L = (0, r.e7)([_.default], () => _.default.isAuthenticated());
        if (
          (s.useEffect(() => {
            L && !i && o.Z.getExperiments();
          }, [L, i]),
          s.useEffect(() => {
            if (!A)
              null == n && i
                ? (E.default.track(
                    g.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                    { quest_id: v },
                  ),
                  O
                    ? d.Z.openNativeAppModal("quests", g.Etm.DEEP_LINK, {
                        type: I.jE.QUEST_HOME,
                        params: { questId: v },
                      })
                    : d.Z.openNativeAppModal("quests", g.Etm.DEEP_LINK, {
                        type: I.jE.USER_SETTINGS,
                        params: { section: T },
                      }))
                : n === g.kEZ.OPEN_FAIL &&
                  (O
                    ? (0, x.dL)(g.Z5c.QUEST_HOME)
                    : (0, x.dL)(g.Z5c.SETTINGS(T)));
          }, [n, i, O, v]),
          A)
        )
          return (0, a.jsxs)("div", {
            className: h.mobileWebContainer,
            children: [
              (0, a.jsx)("img", {
                src: j,
                alt: "",
                className: h.mobileWebImage,
              }),
              (0, a.jsx)(l.Heading, {
                variant: "display-lg",
                color: "text-brand",
                children: f.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING,
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                className: h.mobileWebCopy,
                children: O
                  ? f.Z.Messages
                      .QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE_QUEST_HOME
                  : f.Z.Messages
                      .QUESTS_LANDING_PAGE_MOBILE_WEB_BODY_DESKTOP_AND_MOBILE,
              }),
            ],
          });
        let S = null == n || n === g.kEZ.OPENING || n === g.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c.Z, {
              className: h.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: h.container,
              children: (0, a.jsx)(u.ZP, {
                children: S
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(u.Dx, {
                          children: f.Z.Messages.APP_OPENING,
                        }),
                        (0, a.jsx)(u.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(u.Dx, {
                          className: h.appOpenedTitle,
                          children: f.Z.Messages.APP_OPENED_TITLE,
                        }),
                        (0, a.jsx)(u.DK, {
                          children: f.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
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
    309687: function (e, t, n) {
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
//# sourceMappingURL=76f58fad3ef0167e7c74.js.map
