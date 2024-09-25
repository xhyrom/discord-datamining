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
          return f;
        },
        EJ: function () {
          return E;
        },
        Ee: function () {
          return v;
        },
        Hh: function () {
          return B;
        },
        II: function () {
          return C;
        },
        MC: function () {
          return T;
        },
        Vj: function () {
          return I;
        },
        gO: function () {
          return S;
        },
        i_: function () {
          return A;
        },
        jQ: function () {
          return R;
        },
        qE: function () {
          return N;
        },
        v6: function () {
          return L;
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
        s = t(481060),
        o = t(43267),
        l = t(905656),
        c = t(600164),
        d = t(313201),
        u = t(565138),
        p = t(361207),
        m = t(63063),
        x = t(981631),
        b = t(689938),
        _ = t(878145);
      let h = s.Avatar;
      null == h && (h = () => null);
      let f = (e) => {
          let { className: n, id: t, children: i } = e;
          return (0, a.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(_.title, n),
            id: t,
            children: i,
          });
        },
        g = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)(s.Text, {
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
            className: r()(_.image, n),
          });
        },
        j = (e) => {
          let { className: n, ...t } = e,
            i = t.look === s.Button.Looks.LINK;
          return (0, a.jsx)(s.Button, {
            size: i ? s.Button.Sizes.MIN : s.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, { [_.button]: !i, [_.linkButton]: i }),
            ...t,
          });
        };
      (j.Looks = s.Button.Looks),
        (j.Colors = s.Button.Colors),
        (j.Sizes = s.Button.Sizes);
      let N = (e) => {
          let { className: n, src: t, size: i } = e;
          return (0, a.jsx)(h, {
            src: t,
            size: i,
            className: r()(_.inviteLargeIcon, n),
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
      let T = (e) => {
        let { className: n, channel: t, size: i } = e;
        return (0, a.jsx)(h, {
          src: (0, o.x)(t),
          size: i,
          className: r()(_.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      T.Sizes = s.AvatarSizes;
      let C = (e) => {
          let {
              label: n,
              error: t,
              placeholder: i,
              value: o,
              className: l,
              inputClassName: c,
              setRef: u,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: b,
              maxLength: h,
              spellCheck: f,
              name: g,
              description: v,
              required: j,
              onFocus: N,
              onBlur: I,
            } = e,
            T = (0, d.Dt)();
          return (0, a.jsxs)(s.FormItem, {
            title: n,
            error: t,
            className: l,
            required: j,
            tag: "label",
            htmlFor: T,
            children: [
              (0, a.jsx)(s.TextInput, {
                name: g,
                type: p,
                value: o,
                inputRef: u,
                placeholder: i,
                inputClassName: r()(c, { [_.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: b,
                maxLength: h,
                spellCheck: f,
                id: T,
                onFocus: N,
                onBlur: I,
              }),
              null != v
                ? (0, a.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    className: _.description,
                    children: v,
                  })
                : null,
            ],
          });
        },
        S = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)("div", { className: r()(_.block, n), children: t });
        },
        A = (e) => {
          let { className: n, children: t, isProminent: i } = e;
          return (0, a.jsx)(s.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: r()(_.subText, n),
            children: t,
          });
        },
        B = (e) => {
          let { className: n } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(l.Z, { className: _.spinnerVideo }),
          });
        },
        E = (e) => {
          let n,
            {
              online: t,
              total: i,
              className: o,
              flat: l,
              textClassName: d,
            } = e;
          return null == i
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, a.jsxs)("div", {
                  className: r()(_.pill, _.pillOnline, l && _.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: _.pillIconOnline }),
                    (0, a.jsx)(s.Text, {
                      tag: "span",
                      className: r()(_.pillMessage, d),
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
                className: o,
                children: [
                  n,
                  (0, a.jsxs)("div", {
                    className: r()(_.pill, l && _.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: _.pillIconTotal }),
                      (0, a.jsx)(s.Text, {
                        tag: "span",
                        className: r()(_.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
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
                className: _.joiningAs,
                children: [
                  (0, a.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      b.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(N, {
                    className: _.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: s.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, a.jsx)(s.Text, {
                    className: _.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        L = (e) => {
          let { className: n } = e;
          return (0, a.jsxs)(S, {
            className: n,
            children: [
              (0, a.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: b.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(A, {
                className: _.downloadButtonSubtext,
                children: b.Z.Messages.INCOMPATIBLE_BROWSER.format({
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
          onSubmit: o,
          children: l,
          expanded: c = !1,
          theme: d = x.BRd.DARK,
          style: u,
        } = e;
        return (0, a.jsx)(s.ThemeProvider, {
          theme: d,
          children: (e) =>
            (0, a.jsxs)(i, {
              "data-theme": d,
              "data-disable-adaptive-theme": !0,
              onSubmit: o,
              style: u,
              className: r()(c ? _.authBoxExpanded : _.authBox, e, n),
              children: [
                (0, a.jsx)("div", { className: _.discordLogo }),
                (0, a.jsx)("div", {
                  className: r()(_.centeringWrapper, t),
                  children: l,
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
        s = t(481060),
        o = t(197344),
        l = t(526167),
        c = t(70097),
        d = t(981631),
        u = t(73117),
        p = t(988868),
        m = t(554355),
        x = t(991989),
        b = t(787462),
        _ = t(635507),
        h = t(470794),
        f = t(886777);
      function g(e) {
        let {
            movDark: n = u,
            movLight: t = b,
            mp4Dark: i = p,
            mp4Light: r = _,
            pngDark: s = m,
            pngLight: o = h,
            webmDark: c = x,
            webmLight: g = f,
          } = e,
          v = (0, l.vu)(),
          j = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: s }, "png"),
          ],
          N = [
            (0, a.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: o }, "png"),
          ];
        return (
          (v > 52 || -1 === v) &&
            (j.unshift(
              (0, a.jsx)("source", { src: c, type: "video/webm" }, "webm"),
            ),
            N.unshift(
              (0, a.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, l.rO)() &&
            (j.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            N.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [d.BRd.DARK]: j, [d.BRd.LIGHT]: N }
        );
      }
      let v = o.Z.getAppSpinnerSources(),
        j = null != v ? g(v) : null,
        N = g({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: o = !0,
            setRef: l,
            className: u,
            onReady: p,
          } = e,
          { theme: m } = (0, s.useThemeContext)(),
          { reducedMotion: x } = i.useContext(
            s.AccessibilityPreferencesContext,
          ),
          b = N;
        null != j && (b = j);
        let _ =
          null !== (n = b[(0, r.wj)(m) ? d.BRd.DARK : d.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : b[d.BRd.DARK];
        return (0, a.jsx)(
          c.Z,
          {
            ref: l,
            onLoadedData: p,
            className: u,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && o,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: _,
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
        s = t(481060),
        o = t(388905),
        l = t(313201),
        c = t(659900),
        d = t(473855),
        u = t(689938),
        p = t(881549);
      function m(e) {
        let { transitionState: n, onClose: t, guildTemplate: i } = e,
          { form: m, preview: x, handleSubmit: b } = (0, c.Z)(i, !1),
          _ = (0, l.Dt)();
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            transitionState: n,
            className: r()(p.modalRoot),
            "aria-labelledby": _,
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
                        headerId: _,
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: r()(p.modalSection, p.formSection),
                    children: (0, a.jsxs)(s.Scroller, {
                      className: p.formContainer,
                      children: [
                        (0, a.jsx)(o.Dx, {
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
              (0, a.jsxs)(s.ModalFooter, {
                className: p.modalFooter,
                children: [
                  (0, a.jsx)(s.Button, {
                    color: s.Button.Colors.PRIMARY,
                    onClick: t,
                    children: u.Z.Messages.CLOSE,
                  }),
                  (0, a.jsx)(s.Button, {
                    color: s.Button.Colors.GREEN,
                    onClick: async () => {
                      null != (await b()) && t();
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
//# sourceMappingURL=eb5b842608fd71b64f91.js.map
