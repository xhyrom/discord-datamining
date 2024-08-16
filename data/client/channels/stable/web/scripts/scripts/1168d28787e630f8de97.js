"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50389"],
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
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return v;
        },
        Dx: function () {
          return g;
        },
        EJ: function () {
          return R;
        },
        Ee: function () {
          return N;
        },
        Hh: function () {
          return E;
        },
        II: function () {
          return S;
        },
        MC: function () {
          return C;
        },
        Vj: function () {
          return T;
        },
        gO: function () {
          return A;
        },
        i_: function () {
          return B;
        },
        jQ: function () {
          return L;
        },
        qE: function () {
          return I;
        },
        v6: function () {
          return M;
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
        x = t(792125),
        b = t(981631),
        _ = t(689938),
        h = t(986579);
      let f = s.Avatar;
      null == f && (f = () => null);
      let g = (e) => {
          let { className: n, id: t, children: i } = e;
          return (0, a.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(h.title, n),
            id: t,
            children: i,
          });
        },
        v = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        N = (e) => {
          let { className: n, src: t } = e;
          return (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: r()(h.image, n),
          });
        },
        j = (e) => {
          let { className: n, ...t } = e,
            i = t.look === s.Button.Looks.LINK;
          return (0, a.jsx)(s.Button, {
            size: i ? s.Button.Sizes.MIN : s.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, { [h.button]: !i, [h.linkButton]: i }),
            ...t,
          });
        };
      (j.Looks = s.Button.Looks),
        (j.Colors = s.Button.Colors),
        (j.Sizes = s.Button.Sizes);
      let I = (e) => {
          let { className: n, src: t, size: i } = e;
          return (0, a.jsx)(f, {
            src: t,
            size: i,
            className: r()(h.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        T = (e) => {
          let { guild: n, size: t, animate: i = !1, className: r } = e;
          return (0, a.jsx)(u.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r,
          });
        };
      T.Sizes = u.Z.Sizes;
      let C = (e) => {
        let { className: n, channel: t, size: i } = e;
        return (0, a.jsx)(f, {
          src: (0, o.x)(t),
          size: i,
          className: r()(h.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      C.Sizes = s.AvatarSizes;
      let S = (e) => {
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
              maxLength: _,
              spellCheck: f,
              name: g,
              description: v,
              required: N,
              onFocus: j,
              onBlur: I,
            } = e,
            T = (0, d.Dt)();
          return (0, a.jsxs)(s.FormItem, {
            title: n,
            error: t,
            className: l,
            required: N,
            tag: "label",
            htmlFor: T,
            children: [
              (0, a.jsx)(s.TextInput, {
                name: g,
                type: p,
                value: o,
                inputRef: u,
                placeholder: i,
                inputClassName: r()(c, { [h.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: b,
                maxLength: _,
                spellCheck: f,
                id: T,
                onFocus: j,
                onBlur: I,
              }),
              null != v
                ? (0, a.jsx)(s.FormText, {
                    type: s.FormText.Types.DESCRIPTION,
                    className: h.description,
                    children: v,
                  })
                : null,
            ],
          });
        },
        A = (e) => {
          let { className: n, children: t } = e;
          return (0, a.jsx)("div", { className: r()(h.block, n), children: t });
        },
        B = (e) => {
          let { className: n, children: t, isProminent: i } = e;
          return (0, a.jsx)(s.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: r()(h.subText, n),
            children: t,
          });
        },
        E = (e) => {
          let { className: n } = e;
          return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(l.Z, { className: h.spinnerVideo }),
          });
        },
        R = (e) => {
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
                  className: r()(h.pill, h.pillOnline, l && h.pillFlat),
                  children: [
                    (0, a.jsx)("i", { className: h.pillIconOnline }),
                    (0, a.jsx)(s.Text, {
                      tag: "span",
                      className: r()(h.pillMessage, d),
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
                className: o,
                children: [
                  n,
                  (0, a.jsxs)("div", {
                    className: r()(h.pill, l && h.pillFlat),
                    children: [
                      (0, a.jsx)("i", { className: h.pillIconTotal }),
                      (0, a.jsx)(s.Text, {
                        tag: "span",
                        className: r()(h.pillMessage, d),
                        variant: "text-sm/normal",
                        children:
                          _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: i },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        L = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, a.jsxs)("div", {
                className: h.joiningAs,
                children: [
                  (0, a.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      _.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, a.jsx)(I, {
                    className: h.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: s.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, a.jsx)(s.Text, {
                    className: h.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        M = (e) => {
          let { className: n } = e;
          return (0, a.jsxs)(A, {
            className: n,
            children: [
              (0, a.jsx)(j, {
                onClick: () => window.open((0, p.t3)()),
                children: _.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, a.jsx)(B, {
                className: h.downloadButtonSubtext,
                children: _.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    b.BhN.SUPPORTED_BROWSERS,
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
          onSubmit: s,
          children: o,
          expanded: l = !1,
          theme: c = b.BRd.DARK,
          style: d,
        } = e;
        return (0, a.jsxs)(i, {
          "data-theme": c,
          "data-disable-adaptive-theme": !0,
          onSubmit: s,
          style: d,
          className: r()(l ? h.authBoxExpanded : h.authBox, (0, x.Q)(c), n),
          children: [
            (0, a.jsx)("div", { className: h.discordLogo }),
            (0, a.jsx)("div", {
              className: r()(h.centeringWrapper, t),
              children: o,
            }),
          ],
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
        c = t(73117),
        d = t(787462),
        u = t(70097),
        p = t(981631),
        m = t(988868),
        x = t(554355),
        b = t(991989),
        _ = t(635507),
        h = t(470794),
        f = t(886777);
      function g(e) {
        let {
            movDark: n = c,
            movLight: t = d,
            mp4Dark: i = m,
            mp4Light: r = _,
            pngDark: s = x,
            pngLight: o = h,
            webmDark: u = b,
            webmLight: g = f,
          } = e,
          v = (0, l.vu)(),
          N = [
            (0, a.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: s }, "png"),
          ],
          j = [
            (0, a.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, a.jsx)("img", { alt: "", src: o }, "png"),
          ];
        return (
          (v > 52 || -1 === v) &&
            (N.unshift(
              (0, a.jsx)("source", { src: u, type: "video/webm" }, "webm"),
            ),
            j.unshift(
              (0, a.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, l.rO)() &&
            (N.unshift(
              (0, a.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            j.unshift(
              (0, a.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [p.BRd.DARK]: N, [p.BRd.LIGHT]: j }
        );
      }
      let v = o.Z.getAppSpinnerSources(),
        N = null != v ? g(v) : null,
        j = g({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: o = !0,
            setRef: l,
            className: c,
            onReady: d,
          } = e,
          { theme: m } = (0, s.useThemeContext)(),
          { reducedMotion: x } = i.useContext(
            s.AccessibilityPreferencesContext,
          ),
          b = j;
        null != N && (b = N);
        let _ =
          null !== (n = b[(0, r.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : b[p.BRd.DARK];
        return (0, a.jsx)(
          u.Z,
          {
            ref: l,
            onLoadedData: d,
            className: c,
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
        p = t(864462);
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
    302541: function (e, n, t) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
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
    264098: function (e, n, t) {
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
    963089: function (e, n, t) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    457639: function (e, n, t) {
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
    864462: function (e, n, t) {
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
//# sourceMappingURL=1168d28787e630f8de97.js.map
