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
    388905: function (e, t, n) {
      n.d(t, {
        DK: function () {
          return b;
        },
        Dx: function () {
          return N;
        },
        EJ: function () {
          return R;
        },
        Ee: function () {
          return I;
        },
        Hh: function () {
          return T;
        },
        II: function () {
          return v;
        },
        MC: function () {
          return j;
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
          return S;
        },
        qE: function () {
          return h;
        },
        v6: function () {
          return D;
        },
        zx: function () {
          return g;
        },
      }),
        n(536091);
      var a = n(735250);
      n(470079);
      var s = n(120356),
        r = n.n(s),
        i = n(481060),
        l = n(43267),
        o = n(905656),
        c = n(600164),
        u = n(313201),
        d = n(565138),
        p = n(361207),
        _ = n(63063),
        m = n(981631),
        x = n(689938),
        E = n(878145);
      let f = i.Avatar;
      null == f && (f = () => null);
      let N = (e) => {
          let { className: t, id: n, children: s } = e;
          return (0, a.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(E.title, t),
            id: n,
            children: s,
          });
        },
        b = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        I = (e) => {
          let { className: t, src: n } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: n,
            className: r()(E.image, t),
          });
        },
        g = (e) => {
          let { className: t, ...n } = e,
            s = n.look === i.Button.Looks.LINK;
          return (0, a.jsx)(i.Button, {
            size: s ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !s,
            className: r()(t, { [E.button]: !s, [E.linkButton]: s }),
            ...n,
          });
        };
      (g.Looks = i.Button.Looks),
        (g.Colors = i.Button.Colors),
        (g.Sizes = i.Button.Sizes);
      let h = (e) => {
          let { className: t, src: n, size: s } = e;
          return (0, a.jsx)(f, {
            src: n,
            size: s,
            className: r()(E.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        A = (e) => {
          let { guild: t, size: n, animate: s = !1, className: r } = e;
          return (0, a.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: s,
            className: r,
          });
        };
      A.Sizes = d.Z.Sizes;
      let j = (e) => {
        let { className: t, channel: n, size: s } = e;
        return (0, a.jsx)(f, {
          src: (0, l.x)(n),
          size: s,
          className: r()(E.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      j.Sizes = i.AvatarSizes;
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
              onChange: _,
              autoComplete: m,
              autoFocus: x,
              maxLength: f,
              spellCheck: N,
              name: b,
              description: I,
              required: g,
              onFocus: h,
              onBlur: A,
            } = e,
            j = (0, u.Dt)();
          return (0, a.jsxs)(i.FormItem, {
            title: t,
            error: n,
            className: o,
            required: g,
            tag: "label",
            htmlFor: j,
            children: [
              (0, a.jsx)(i.TextInput, {
                name: b,
                type: p,
                value: l,
                inputRef: d,
                placeholder: s,
                inputClassName: r()(c, { [E.inputError]: null != n }),
                "aria-label": t,
                onChange: _,
                autoComplete: m,
                autoFocus: x,
                maxLength: f,
                spellCheck: N,
                id: j,
                onFocus: h,
                onBlur: A,
              }),
              null != I
                ? (0, a.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: E.description,
                    children: I,
                  })
                : null,
            ],
          });
        },
        O = (e) => {
          let { className: t, children: n } = e;
          return (0, a.jsx)("div", { className: r()(E.block, t), children: n });
        },
        L = (e) => {
          let { className: t, children: n, isProminent: s } = e;
          return (0, a.jsx)(i.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: r()(E.subText, t),
            children: n,
          });
        },
        T = (e) => {
          let { className: t } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, a.jsx)(o.Z, { className: E.spinnerVideo }),
          });
        },
        R = (e) => {
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
                  className: r()(E.pill, E.pillOnline, o && E.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: E.pillIconOnline }),
                    (0, a.jsx)(i.Text, {
                      tag: "span",
                      className: r()(E.pillMessage, u),
                      variant: "text-sm/normal",
                      children:
                        x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: r()(E.pill, o && E.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: E.pillIconTotal }),
                      (0, a.jsx)(i.Text, {
                        tag: "span",
                        className: r()(E.pillMessage, u),
                        variant: "text-sm/normal",
                        children:
                          x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
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
                className: E.joiningAs,
                children: [
                  (0, a.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      x.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(h, {
                    className: E.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, a.jsx)(i.Text, {
                    className: E.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        D = (e) => {
          let { className: t } = e;
          return (0, a.jsxs)(O, {
            className: t,
            children: [
              (0, a.jsx)(g, {
                onClick: () => window.open((0, p.t3)()),
                children: x.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(L, {
                className: E.downloadButtonSubtext,
                children: x.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: _.Z.getArticleURL(
                    m.BhN.SUPPORTED_BROWSERS,
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
          theme: u = m.BRd.DARK,
          style: d,
        } = e;
        return (0, a.jsx)(i.ThemeProvider, {
          theme: u,
          children: (e) =>
            (0, a.jsxs)(s, {
              "data-theme": u,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: d,
              className: r()(c ? E.authBoxExpanded : E.authBox, e, t),
              children: [
                (0, a.jsx)("div", { className: E.discordLogo }),
                (0, a.jsx)("div", {
                  className: r()(E.centeringWrapper, n),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    297511: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
        });
      var a = n(735250),
        s = n(470079),
        r = n(442837),
        i = n(830064),
        l = n(388905),
        o = n(625128),
        c = n(362762),
        u = n(831565),
        d = n(571457),
        p = n(703656),
        _ = n(963202),
        m = n(981631),
        x = n(186901),
        E = n(689938),
        f = n(940956);
      function N(e) {
        let { match: t } = e,
          n = (0, r.e7)([c.Z], () => c.Z.getState("discovery")),
          N = (0, u.v)({ location: "game_discovery_entry_point" }),
          b = (0, _.iN)("game_discovery_entry_point"),
          I = t.params.gameId;
        s.useEffect(() => {
          (0, d.HV)({ gameId: I });
        }, [I]),
          s.useEffect(() => {
            !N && (0, p.dL)({ pathname: m.Z5c.GUILD_DISCOVERY }),
              !b && (0, p.dL)({ pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS }),
              null == n
                ? ((0, d.zY)({ gameId: I }),
                  o.Z.openNativeAppModal("discovery", m.Etm.DEEP_LINK, {
                    type: x.jE.DISCOVERY_GAME_RESULTS,
                    params: { gameId: I },
                  }))
                : n === m.kEZ.OPEN_FAIL &&
                  (0, p.dL)({
                    pathname: m.Z5c.GLOBAL_DISCOVERY_SERVERS,
                    search: "?game=".concat(I),
                  });
          }, [I, N, b, n]);
        let g = null == n || n === m.kEZ.OPENING || n === m.kEZ.OPEN_FAIL;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Z, {
              className: f.backgroundArt,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: f.container,
              children: (0, a.jsx)(l.ZP, {
                children: g
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.Dx, {
                          children: E.Z.Messages.APP_OPENING,
                        }),
                        (0, a.jsx)(l.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.Dx, {
                          children: E.Z.Messages.APP_OPENED_TITLE,
                        }),
                        (0, a.jsx)(l.DK, {
                          children: E.Z.Messages.DEEPLINK_BROWSER_APP_OPENED,
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
      r.ZP.initialize();
    },
    362762: function (e, t, n) {
      var a,
        s,
        r,
        i,
        l = n(442837),
        o = n(570140),
        c = n(981631);
      let u = {};
      class d extends (i = l.ZP.Store) {
        getState(e) {
          return u[e];
        }
      }
      (r = "CodedLinkNativeAppStateStore"),
        (s = "displayName") in (a = d)
          ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[s] = r),
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
        r = n(780384),
        i = n(481060),
        l = n(197344),
        o = n(526167),
        c = n(70097),
        u = n(981631),
        d = n(73117),
        p = n(988868),
        _ = n(554355),
        m = n(991989),
        x = n(787462),
        E = n(635507),
        f = n(470794),
        N = n(886777);
      function b(e) {
        let {
            movDark: t = d,
            movLight: n = x,
            mp4Dark: s = p,
            mp4Light: r = E,
            pngDark: i = _,
            pngLight: l = f,
            webmDark: c = m,
            webmLight: b = N,
          } = e,
          I = (0, o.vu)(),
          g = [
            (0, a.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: i }, "png"),
          ],
          h = [
            (0, a.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (I > 52 || -1 === I) &&
            (g.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            h.unshift(
              (0, a.jsx)("source", { src: b, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (g.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            h.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [u.BRd.DARK]: g, [u.BRd.LIGHT]: h }
        );
      }
      let I = l.Z.getAppSpinnerSources(),
        g = null != I ? b(I) : null,
        h = b({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: o,
            className: d,
            onReady: p,
          } = e,
          { theme: _ } = (0, i.useThemeContext)(),
          { reducedMotion: m } = s.useContext(
            i.AccessibilityPreferencesContext,
          ),
          x = h;
        null != g && (x = g);
        let E =
          null !== (t = x[(0, r.wj)(_) ? u.BRd.DARK : u.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : x[u.BRd.DARK];
        return (0, a.jsx)(
          c.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: E,
          },
          _,
        );
      };
    },
    571457: function (e, t, n) {
      n.d(t, {
        $X: function () {
          return u;
        },
        HV: function () {
          return o;
        },
        RI: function () {
          return r;
        },
        k5: function () {
          return l;
        },
        kR: function () {
          return i;
        },
        zY: function () {
          return c;
        },
      });
      var a = n(626135),
        s = n(981631);
      function r(e) {
        let { selectedTab: t } = e;
        a.default.track(s.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
      }
      function i(e) {
        let { selectedCategoryId: t } = e;
        a.default.track(s.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
          selected_category_id: t,
        });
      }
      function l(e) {
        let { source: t } = e;
        a.default.track(s.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
          source: t,
        });
      }
      function o(e) {
        let { gameId: t, source: n } = e;
        a.default.track(s.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
          game_id: t,
          source: n,
        });
      }
      function c(e) {
        let { gameId: t } = e;
        a.default.track(
          s.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP,
          { game_id: t },
        );
      }
      function u(e) {
        let { gameId: t } = e;
        a.default.track(s.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, {
          game_id: t,
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
    940956: function (e, t, n) {
      e.exports = {
        container: "container_c25abe",
        backgroundArt: "backgroundArt_c25abe",
      };
    },
  },
]);
//# sourceMappingURL=2eda150682778d21c327.js.map
