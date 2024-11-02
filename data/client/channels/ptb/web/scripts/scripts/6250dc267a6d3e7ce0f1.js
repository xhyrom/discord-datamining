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
          return j;
        },
        Dx: function () {
          return f;
        },
        EJ: function () {
          return B;
        },
        Ee: function () {
          return N;
        },
        Hh: function () {
          return O;
        },
        II: function () {
          return I;
        },
        MC: function () {
          return A;
        },
        Vj: function () {
          return E;
        },
        gO: function () {
          return T;
        },
        i_: function () {
          return L;
        },
        jQ: function () {
          return S;
        },
        qE: function () {
          return v;
        },
        v6: function () {
          return Z;
        },
        zx: function () {
          return _;
        },
      }),
        n(536091);
      var a = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        r = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        u = n(313201),
        d = n(565138),
        p = n(361207),
        m = n(63063),
        x = n(981631),
        b = n(388032),
        h = n(878145);
      let g = r.Avatar;
      null == g && (g = () => null);
      let f = (e) => {
          let { className: t, id: n, children: i } = e;
          return (0, a.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: s()(h.title, t),
            id: n,
            children: i,
          });
        },
        j = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        N = (e) => {
          let { className: t, src: n } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: n,
            className: s()(h.image, t),
          });
        },
        _ = (e) => {
          let { className: t, ...n } = e,
            i = n.look === r.Button.Looks.LINK;
          return (0, a.jsx)(r.Button, {
            size: i ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !i,
            className: s()(t, { [h.button]: !i, [h.linkButton]: i }),
            ...n,
          });
        };
      (_.Looks = r.Button.Looks),
        (_.Colors = r.Button.Colors),
        (_.Sizes = r.Button.Sizes);
      let v = (e) => {
          let { className: t, src: n, size: i } = e;
          return (0, a.jsx)(g, {
            src: n,
            size: i,
            className: s()(h.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        E = (e) => {
          let { guild: t, size: n, animate: i = !1, className: s } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: s,
          });
        };
      E.Sizes = d.Z.Sizes;
      let A = (e) => {
        let { className: t, channel: n, size: i } = e;
        return (0, a.jsx)(g, {
          src: (0, l.x)(n),
          size: i,
          className: s()(h.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      A.Sizes = r.AvatarSizes;
      let I = (e) => {
          let {
              label: t,
              error: n,
              placeholder: i,
              value: l,
              className: o,
              inputClassName: c,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: b,
              maxLength: g,
              spellCheck: f,
              name: j,
              description: N,
              required: _,
              onFocus: v,
              onBlur: E,
            } = e,
            A = (0, u.Dt)();
          return (0, a.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: o,
            required: _,
            tag: "label",
            htmlFor: A,
            children: [
              (0, a.jsx)(r.TextInput, {
                name: j,
                type: p,
                value: l,
                inputRef: d,
                placeholder: i,
                inputClassName: s()(c, { [h.inputError]: null != n }),
                "aria-label": t,
                onChange: m,
                autoComplete: x,
                autoFocus: b,
                maxLength: g,
                spellCheck: f,
                id: A,
                onFocus: v,
                onBlur: E,
              }),
              null != N
                ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: h.description,
                    children: N,
                  })
                : null,
            ],
          });
        },
        T = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)("div", { className: s()(h.block, t), children: n });
        },
        L = (e) => {
          let { className: t, children: n, isProminent: i } = e;
          return (0, a.jsx)(r.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: s()(h.subText, t),
            children: n,
          });
        },
        O = (e) => {
          let { className: t } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, a.jsx)(o.Z, { className: h.spinnerVideo }),
          });
        },
        B = (e) => {
          let t,
            {
              online: n,
              total: i,
              className: l,
              flat: o,
              textClassName: u,
            } = e;
          return null == i
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, a.jsxs)("div", {
                  className: s()(h.pill, h.pillOnline, o && h.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: h.pillIconOnline }),
                    (0, a.jsx)(r.Text, {
                      tag: "span",
                      className: s()(h.pillMessage, u),
                      variant: "text-sm/normal",
                      children: b.intl.format(b.t["LC+S+v"], {
                        membersOnline: n,
                      }),
                    }),
                  ],
                })),
              (0, a.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                className: l,
                children: [
                  t,
                  (0, a.jsxs)("div", {
                    className: s()(h.pill, o && h.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: h.pillIconTotal }),
                      (0, a.jsx)(r.Text, {
                        tag: "span",
                        className: s()(h.pillMessage, u),
                        variant: "text-sm/normal",
                        children: b.intl.format(b.t.zRl6XV, { count: i }),
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
                className: h.joiningAs,
                children: [
                  (0, a.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: b.intl.string(b.t["/8WWvL"]),
                  }),
                  (0, a.jsx)(v, {
                    className: h.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, a.jsx)(r.Text, {
                    className: h.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        Z = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)(T, {
            className: t,
            children: [
              (0, a.jsx)(_, {
                onClick: () => window.open((0, p.t3)()),
                children: b.intl.format(b.t.JoS1i4, { platform: (0, p.DW)() }),
              }),
              (0, a.jsx)(L, {
                className: h.downloadButtonSubtext,
                children: b.intl.format(b.t.wO1VBg, {
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
          theme: u = x.BRd.DARK,
          style: d,
        } = e;
        return (0, a.jsx)(r.ThemeProvider, {
          theme: u,
          children: (e) =>
            (0, a.jsxs)(i, {
              "data-theme": u,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: d,
              className: s()(c ? h.authBoxExpanded : h.authBox, e, t),
              children: [
                (0, a.jsx)("div", { className: h.discordLogo }),
                (0, a.jsx)("div", {
                  className: s()(h.centeringWrapper, n),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    362762: function (e, t, n) {
      var a,
        i,
        s,
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
      (s = "CodedLinkNativeAppStateStore"),
        (i = "displayName") in (a = d)
          ? Object.defineProperty(a, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = s),
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
      var a = n(200651),
        i = n(192379),
        s = n(780384),
        r = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(70097),
        u = n(981631),
        d = n(73117),
        p = n(988868),
        m = n(554355),
        x = n(991989),
        b = n(787462),
        h = n(635507),
        g = n(470794),
        f = n(886777);
      function j(e) {
        let {
            movDark: t = d,
            movLight: n = b,
            mp4Dark: i = p,
            mp4Light: s = h,
            pngDark: r = m,
            pngLight: l = g,
            webmDark: c = x,
            webmLight: j = f,
          } = e,
          N = (0, o.vu)(),
          _ = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: r }, "png"),
          ],
          v = [
            (0, a.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (N > 52 || -1 === N) &&
            (_.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            v.unshift(
              (0, a.jsx)("source", { src: j, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (_.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            v.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [u.BRd.DARK]: _, [u.BRd.LIGHT]: v }
        );
      }
      let N = l.Z.getAppSpinnerSources(),
        _ = null != N ? j(N) : null,
        v = j({});
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
          { reducedMotion: x } = i.useContext(
            r.AccessibilityPreferencesContext,
          ),
          b = v;
        null != _ && (b = _);
        let h =
          null !== (t = b[(0, s.wj)(m) ? u.BRd.DARK : u.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : b[u.BRd.DARK];
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
            children: h,
          },
          m,
        );
      };
    },
    630107: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n(200651),
        i = n(192379),
        s = n(873546),
        r = n(442837),
        l = n(481060),
        o = n(830064),
        c = n(388905),
        u = n(625128),
        d = n(362762),
        p = n(703656),
        m = n(626135),
        x = n(981631),
        b = n(186901),
        h = n(388032),
        g = n(901628),
        f = n(821744);
      r.ZP.initialize();
      let j = s.tq || s.Em;
      function N(e) {
        let { match: t } = e,
          n = (0, r.e7)([d.Z], () => d.Z.getState("quests")),
          s = t.params.questId;
        if (
          (i.useEffect(() => {
            if (!j)
              null == n
                ? (m.default.track(
                    x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                    { quest_id: s },
                  ),
                  u.Z.openNativeAppModal("quests", x.Etm.DEEP_LINK, {
                    type: b.jE.QUEST_HOME,
                    params: { questId: s },
                  }))
                : n === x.kEZ.OPEN_FAIL &&
                  (0, p.dL)({ pathname: x.Z5c.QUEST_HOME, hash: s });
          }, [n, s]),
          j)
        )
          return (0, a.jsxs)("div", {
            className: g.mobileWebContainer,
            children: [
              (0, a.jsx)("img", {
                src: f,
                alt: "",
                className: g.mobileWebImage,
              }),
              (0, a.jsx)(l.Heading, {
                variant: "display-lg",
                color: "text-brand",
                children: h.intl.string(h.t.xmotYm),
              }),
              (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                className: g.mobileWebCopy,
                children: h.intl.string(h.t.gtZK09),
              }),
            ],
          });
        let N = null == n || n === x.kEZ.OPENING || n === x.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.Z, {
              className: g.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: g.container,
              children: (0, a.jsx)(c.ZP, {
                children: N
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          children: h.intl.string(h.t["Z+hCVV"]),
                        }),
                        (0, a.jsx)(c.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.Dx, {
                          className: g.appOpenedTitle,
                          children: h.intl.string(h.t.csrAMD),
                        }),
                        (0, a.jsx)(c.DK, {
                          children: h.intl.string(h.t.ghBJz8),
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
//# sourceMappingURL=6250dc267a6d3e7ce0f1.js.map
