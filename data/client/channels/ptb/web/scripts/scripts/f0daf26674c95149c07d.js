"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27815"],
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
          return g;
        },
        Dx: function () {
          return _;
        },
        EJ: function () {
          return B;
        },
        Ee: function () {
          return v;
        },
        Hh: function () {
          return A;
        },
        II: function () {
          return T;
        },
        MC: function () {
          return S;
        },
        Vj: function () {
          return I;
        },
        gO: function () {
          return C;
        },
        i_: function () {
          return E;
        },
        jQ: function () {
          return R;
        },
        qE: function () {
          return N;
        },
        v6: function () {
          return O;
        },
        zx: function () {
          return j;
        },
      }),
        t(536091);
      var a = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        l = t(43267),
        s = t(905656),
        c = t(600164),
        d = t(313201),
        u = t(565138),
        p = t(361207),
        m = t(63063),
        x = t(981631),
        f = t(689938),
        b = t(878145);
      let h = o.Avatar;
      null == h && (h = () => null);
      let _ = (e) => {
          let { className: n, id: t, children: i } = e;
          return (0, a.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(b.title, n),
            id: t,
            children: i,
          });
        },
        g = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        v = (e) => {
          let { className: n, src: t } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: r()(b.image, n),
          });
        },
        j = (e) => {
          let { className: n, ...t } = e,
            i = t.look === o.Button.Looks.LINK;
          return (0, a.jsx)(o.Button, {
            size: i ? o.Button.Sizes.MIN : o.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, { [b.button]: !i, [b.linkButton]: i }),
            ...t,
          });
        };
      (j.Looks = o.Button.Looks),
        (j.Colors = o.Button.Colors),
        (j.Sizes = o.Button.Sizes);
      let N = (e) => {
          let { className: n, src: t, size: i } = e;
          return (0, a.jsx)(h, {
            src: t,
            size: i,
            className: r()(b.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        I = (e) => {
          let { guild: n, size: t, animate: i = !1, className: r } = e;
          return (0, a.jsx)(u.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r,
          });
        };
      I.Sizes = u.Z.Sizes;
      let S = (e) => {
        let { className: n, channel: t, size: i } = e;
        return (0, a.jsx)(h, {
          src: (0, l.x)(t),
          size: i,
          className: r()(b.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      S.Sizes = o.AvatarSizes;
      let T = (e) => {
          let {
              label: n,
              error: t,
              placeholder: i,
              value: l,
              className: s,
              inputClassName: c,
              setRef: u,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: f,
              maxLength: h,
              spellCheck: _,
              name: g,
              description: v,
              required: j,
              onFocus: N,
              onBlur: I,
            } = e,
            S = (0, d.Dt)();
          return (0, a.jsxs)(o.FormItem, {
            title: n,
            error: t,
            className: s,
            required: j,
            tag: "label",
            htmlFor: S,
            children: [
              (0, a.jsx)(o.TextInput, {
                name: g,
                type: p,
                value: l,
                inputRef: u,
                placeholder: i,
                inputClassName: r()(c, { [b.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: f,
                maxLength: h,
                spellCheck: _,
                id: S,
                onFocus: N,
                onBlur: I,
              }),
              null != v
                ? (0, a.jsx)(o.FormText, {
                    type: o.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: v,
                  })
                : null,
            ],
          });
        },
        C = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)("div", { className: r()(b.block, n), children: t });
        },
        E = (e) => {
          let { className: n, children: t, isProminent: i } = e;
          return (0, a.jsx)(o.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: r()(b.subText, n),
            children: t,
          });
        },
        A = (e) => {
          let { className: n } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(s.Z, { className: b.spinnerVideo }),
          });
        },
        B = (e) => {
          let n,
            {
              online: t,
              total: i,
              className: l,
              flat: s,
              textClassName: d,
            } = e;
          return null == i
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, a.jsxs)("div", {
                  className: r()(b.pill, b.pillOnline, s && b.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: b.pillIconOnline }),
                    (0, a.jsx)(o.Text, {
                      tag: "span",
                      className: r()(b.pillMessage, d),
                      variant: "text-sm/normal",
                      children:
                        f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: r()(b.pill, s && b.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: b.pillIconTotal }),
                      (0, a.jsx)(o.Text, {
                        tag: "span",
                        className: r()(b.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: i },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        R = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: b.joiningAs,
                children: [
                  (0, a.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      f.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(N, {
                    className: b.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: o.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, a.jsx)(o.Text, {
                    className: b.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        O = (e) => {
          let { className: n } = e;
          return (0, a.jsxs)(C, {
            className: n,
            children: [
              (0, a.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: f.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(E, {
                className: b.downloadButtonSubtext,
                children: f.Z.Messages.INCOMPATIBLE_BROWSER.format({
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
          tag: i = "section",
          onSubmit: l,
          children: s,
          expanded: c = !1,
          theme: d = x.BRd.DARK,
          style: u,
        } = e;
        return (0, a.jsx)(o.ThemeProvider, {
          theme: d,
          children: (e) =>
            (0, a.jsxs)(i, {
              "data-theme": d,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: u,
              className: r()(c ? b.authBoxExpanded : b.authBox, e, n),
              children: [
                (0, a.jsx)("div", { className: b.discordLogo }),
                (0, a.jsx)("div", {
                  className: r()(b.centeringWrapper, t),
                  children: s,
                }),
              ],
            }),
        });
      };
    },
    905656: function (e, n, t) {
      t(733860);
      var a = t(735250),
        i = t(470079),
        r = t(780384),
        o = t(481060),
        l = t(197344),
        s = t(526167),
        c = t(70097),
        d = t(981631),
        u = t(73117),
        p = t(988868),
        m = t(554355),
        x = t(991989),
        f = t(787462),
        b = t(635507),
        h = t(470794),
        _ = t(886777);
      function g(e) {
        let {
            movDark: n = u,
            movLight: t = f,
            mp4Dark: i = p,
            mp4Light: r = b,
            pngDark: o = m,
            pngLight: l = h,
            webmDark: c = x,
            webmLight: g = _,
          } = e,
          v = (0, s.vu)(),
          j = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: o }, "png"),
          ],
          N = [
            (0, a.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (v > 52 || -1 === v) &&
            (j.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            N.unshift(
              (0, a.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, s.rO)() &&
            (j.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            N.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [d.BRd.DARK]: j, [d.BRd.LIGHT]: N }
        );
      }
      let v = l.Z.getAppSpinnerSources(),
        j = null != v ? g(v) : null,
        N = g({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: l = !0,
            setRef: s,
            className: u,
            onReady: p,
          } = e,
          { theme: m } = (0, o.useThemeContext)(),
          { reducedMotion: x } = i.useContext(
            o.AccessibilityPreferencesContext,
          ),
          f = N;
        null != j && (f = j);
        let b =
          null !== (n = f[(0, r.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : f[d.BRd.DARK];
        return (0, a.jsx)(
          c.Z,
          {
            ref: s,
            onLoadedData: p,
            className: u,
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
    766775: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return m;
          },
        });
      var a = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        l = t(388905),
        s = t(313201),
        c = t(659900),
        d = t(473855),
        u = t(689938),
        p = t(881549);
      function m(e) {
        let { transitionState: n, onClose: t, guildTemplate: i } = e,
          { form: m, preview: x, handleSubmit: f } = (0, c.Z)(i, !1),
          b = (0, s.Dt)();
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            transitionState: n,
            className: r()(p.modalRoot),
            "aria-labelledby": b,
            children: [
              (0, a.jsxs)("div", {
                className: p.modalContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: r()(p.modalSection, p.ctaSection),
                    children: (0, a.jsx)("div", {
                      className: p.ctaContainer,
                      children: (0, a.jsx)(d.Z, {
                        guildTemplate: i,
                        headerId: b,
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: r()(p.modalSection, p.formSection),
                    children: (0, a.jsxs)(o.Scroller, {
                      className: p.formContainer,
                      children: [
                        (0, a.jsx)(l.Dx, {
                          className: p.header,
                          children: u.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
                        }),
                        m,
                        x,
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(o.ModalFooter, {
                className: p.modalFooter,
                children: [
                  (0, a.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    onClick: t,
                    children: u.Z.Messages.CLOSE,
                  }),
                  (0, a.jsx)(o.Button, {
                    color: o.Button.Colors.GREEN,
                    onClick: async () => {
                      null != (await f()) && t();
                    },
                    children: u.Z.Messages.CREATE,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    361207: function (e, n, t) {
      t.d(n, {
        DW: function () {
          return u;
        },
        Gn: function () {
          return m;
        },
        t3: function () {
          return p;
        },
        w4: function () {
          return c;
        },
      });
      var a = t(525654),
        i = t.n(a),
        r = t(271579),
        o = t(314897),
        l = t(981631);
      let s = "linux";
      function c(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(l.fzT.DESKTOP)
          .concat(n ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != t ? "&format=".concat(t) : "");
      }
      function d() {
        var e;
        let n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = i().os) || void 0 === e
              ? void 0
              : e.family;
        return null == n
          ? "win"
          : -1 !== n.indexOf("Ubuntu") ||
              -1 !== n.indexOf("Debian") ||
              -1 !== n.indexOf("Fedora") ||
              -1 !== n.indexOf("Red Hat") ||
              -1 !== n.indexOf("SuSE") ||
              -1 !== n.indexOf("Linux")
            ? s
            : -1 !== n.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function u(e) {
        return { win: "Windows", osx: "Mac", [s]: "Linux" }[d(e)];
      }
      function p() {
        let e = d();
        return c(e, !1, e === s ? "tar.gz" : null);
      }
      function m(e, n, t) {
        let a = null != t ? t.toString() : null;
        switch (n) {
          case "iOS":
            return (0, r.ZP)(
              null != a
                ? a
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != a ? a : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != a ? a : "https://www.discord.com";
        }
      }
    },
    510186: function (e, n, t) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
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
    34964: function (e, n, t) {
      e.exports = {
        icon: "icon_b52547",
        guidelines: "guidelines_b52547",
        divider: "divider_b52547",
        previewSection: "previewSection_b52547",
        channelsWrapper: "channelsWrapper_b52547",
        rolesWrapper: "rolesWrapper_b52547",
        protip: "protip_b52547",
        protipText: "protipText_b52547",
        channel: "channel_b52547",
        category: "category_b52547",
        channelIcon: "channelIcon_b52547",
        channelText: "channelText_b52547",
        role: "role_b52547",
        roleCircle: "roleCircle_b52547",
        roleName: "roleName_b52547",
      };
    },
    251320: function (e, n, t) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    712457: function (e, n, t) {
      e.exports = {
        container: "container_de67e1",
        title: "title_de67e1",
        subtitle: "subtitle_de67e1",
        userText: "userText_de67e1",
        usagePill: "usagePill_de67e1",
        verifiedNameContainer: "verifiedNameContainer_de67e1",
        verifiedIcon: "verifiedIcon_de67e1",
        verifiedCheckContainer: "verifiedCheckContainer_de67e1",
        verifiedCheck: "verifiedCheck_de67e1",
      };
    },
    881549: function (e, n, t) {
      e.exports = {
        modalContainer: "modalContainer_d18efa",
        modalSection: "modalSection_d18efa",
        ctaSection: "ctaSection_d18efa",
        ctaContainer: "ctaContainer_d18efa",
        formSection: "formSection_d18efa",
        formContainer: "formContainer_d18efa",
        modalRoot: "modalRoot_d18efa",
        modalFooter: "modalFooter_d18efa",
        header: "header_d18efa",
      };
    },
  },
]);
//# sourceMappingURL=f0daf26674c95149c07d.js.map
