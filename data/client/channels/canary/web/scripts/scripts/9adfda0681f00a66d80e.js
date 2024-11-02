"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66078"],
  {
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
    },
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
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    816782: function (e, n, t) {
      var l = t(570140);
      n.Z = {
        toggleMembersSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          l.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    475468: function (e, n, t) {
      t.d(n, {
        K: function () {
          return o;
        },
        z: function () {
          return u;
        },
      });
      var l = t(481060),
        i = t(475179),
        r = t(925549),
        a = t(905423),
        s = t(981631);
      function o(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && r.Z.channelListScrollTo(e, n),
            o && null != n && i.Z.updateChatOpen(n, !0),
            a.Z.getState().updatePath(s.Z5c.CHANNEL(e, n));
      }
      function u(e) {
        if (!(0, l.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
      }
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return v;
        },
        Dx: function () {
          return j;
        },
        EJ: function () {
          return O;
        },
        Ee: function () {
          return Z;
        },
        Hh: function () {
          return L;
        },
        II: function () {
          return S;
        },
        MC: function () {
          return E;
        },
        Vj: function () {
          return N;
        },
        gO: function () {
          return I;
        },
        i_: function () {
          return T;
        },
        jQ: function () {
          return M;
        },
        qE: function () {
          return C;
        },
        v6: function () {
          return _;
        },
        zx: function () {
          return b;
        },
      }),
        t(536091);
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        a = t(481060),
        s = t(43267),
        o = t(905656),
        u = t(600164),
        c = t(313201),
        d = t(565138),
        p = t(361207),
        m = t(63063),
        x = t(981631),
        h = t(388032),
        f = t(878145);
      let g = a.Avatar;
      null == g && (g = () => null);
      let j = (e) => {
          let { className: n, id: t, children: i } = e;
          return (0, l.jsx)(a.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: r()(f.title, n),
            id: t,
            children: i,
          });
        },
        v = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        Z = (e) => {
          let { className: n, src: t } = e;
          return (0, l.jsx)("img", {
            alt: "",
            src: t,
            className: r()(f.image, n),
          });
        },
        b = (e) => {
          let { className: n, ...t } = e,
            i = t.look === a.Button.Looks.LINK;
          return (0, l.jsx)(a.Button, {
            size: i ? a.Button.Sizes.MIN : a.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, { [f.button]: !i, [f.linkButton]: i }),
            ...t,
          });
        };
      (b.Looks = a.Button.Looks),
        (b.Colors = a.Button.Colors),
        (b.Sizes = a.Button.Sizes);
      let C = (e) => {
          let { className: n, src: t, size: i } = e;
          return (0, l.jsx)(g, {
            src: t,
            size: i,
            className: r()(f.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        N = (e) => {
          let { guild: n, size: t, animate: i = !1, className: r } = e;
          return (0, l.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r,
          });
        };
      N.Sizes = d.Z.Sizes;
      let E = (e) => {
        let { className: n, channel: t, size: i } = e;
        return (0, l.jsx)(g, {
          src: (0, s.x)(t),
          size: i,
          className: r()(f.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      E.Sizes = a.AvatarSizes;
      let S = (e) => {
          let {
              label: n,
              error: t,
              placeholder: i,
              value: s,
              className: o,
              inputClassName: u,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: h,
              maxLength: g,
              spellCheck: j,
              name: v,
              description: Z,
              required: b,
              onFocus: C,
              onBlur: N,
            } = e,
            E = (0, c.Dt)();
          return (0, l.jsxs)(a.FormItem, {
            title: n,
            error: t,
            className: o,
            required: b,
            tag: "label",
            htmlFor: E,
            children: [
              (0, l.jsx)(a.TextInput, {
                name: v,
                type: p,
                value: s,
                inputRef: d,
                placeholder: i,
                inputClassName: r()(u, { [f.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: h,
                maxLength: g,
                spellCheck: j,
                id: E,
                onFocus: C,
                onBlur: N,
              }),
              null != Z
                ? (0, l.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: f.description,
                    children: Z,
                  })
                : null,
            ],
          });
        },
        I = (e) => {
          let { className: n, children: t } = e;
          return (0, l.jsx)("div", { className: r()(f.block, n), children: t });
        },
        T = (e) => {
          let { className: n, children: t, isProminent: i } = e;
          return (0, l.jsx)(a.Text, {
            variant: i ? "text-sm/normal" : "text-xs/normal",
            className: r()(f.subText, n),
            children: t,
          });
        },
        L = (e) => {
          let { className: n } = e;
          return (0, l.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: n,
            children: (0, l.jsx)(o.Z, { className: f.spinnerVideo }),
          });
        },
        O = (e) => {
          let n,
            {
              online: t,
              total: i,
              className: s,
              flat: o,
              textClassName: c,
            } = e;
          return null == i
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, l.jsxs)("div", {
                  className: r()(f.pill, f.pillOnline, o && f.pillFlat),
                  children: [
                    (0, l.jsx)("i", { className: f.pillIconOnline }),
                    (0, l.jsx)(a.Text, {
                      tag: "span",
                      className: r()(f.pillMessage, c),
                      variant: "text-sm/normal",
                      children: h.intl.format(h.t["LC+S+v"], {
                        membersOnline: t,
                      }),
                    }),
                  ],
                })),
              (0, l.jsxs)(u.Z, {
                justify: u.Z.Justify.CENTER,
                className: s,
                children: [
                  n,
                  (0, l.jsxs)("div", {
                    className: r()(f.pill, o && f.pillFlat),
                    children: [
                      (0, l.jsx)("i", { className: f.pillIconTotal }),
                      (0, l.jsx)(a.Text, {
                        tag: "span",
                        className: r()(f.pillMessage, c),
                        variant: "text-sm/normal",
                        children: h.intl.format(h.t.zRl6XV, { count: i }),
                      }),
                    ],
                  }),
                ],
              }));
        },
        M = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, l.jsxs)("div", {
                className: f.joiningAs,
                children: [
                  (0, l.jsx)(a.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: h.intl.string(h.t["/8WWvL"]),
                  }),
                  (0, l.jsx)(C, {
                    className: f.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: a.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, l.jsx)(a.Text, {
                    className: f.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        _ = (e) => {
          let { className: n } = e;
          return (0, l.jsxs)(I, {
            className: n,
            children: [
              (0, l.jsx)(b, {
                onClick: () => window.open((0, p.t3)()),
                children: h.intl.format(h.t.JoS1i4, { platform: (0, p.DW)() }),
              }),
              (0, l.jsx)(T, {
                className: f.downloadButtonSubtext,
                children: h.intl.format(h.t.wO1VBg, {
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
          onSubmit: s,
          children: o,
          expanded: u = !1,
          theme: c = x.BRd.DARK,
          style: d,
        } = e;
        return (0, l.jsx)(a.ThemeProvider, {
          theme: c,
          children: (e) =>
            (0, l.jsxs)(i, {
              "data-theme": c,
              "data-disable-adaptive-theme": !0,
              onSubmit: s,
              style: d,
              className: r()(u ? f.authBoxExpanded : f.authBox, e, n),
              children: [
                (0, l.jsx)("div", { className: f.discordLogo }),
                (0, l.jsx)("div", {
                  className: r()(f.centeringWrapper, t),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    207035: function (e, n, t) {
      t.d(n, {
        P: function () {
          return i;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (e, n, t) {
      t.r(n);
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(239091),
        a = t(883385),
        s = t(108843),
        o = t(947440),
        u = t(100527),
        c = t(299206),
        d = t(916069),
        p = t(895563),
        m = t(212205),
        x = t(478035),
        h = t(62420),
        f = t(423589),
        g = t(398048),
        j = t(109764),
        v = t(3689),
        Z = t(323597),
        b = t(852245),
        C = t(367722),
        N = t(461535),
        E = t(776568),
        S = t(218035),
        I = t(775666),
        T = t(593589),
        L = t(442754),
        O = t(981631),
        M = t(388032);
      function _(e) {
        let { channel: n, onSelect: t } = e,
          a = (0, N.Z)(n),
          s = (0, j.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          g = (0, m.Z)(n),
          v = (0, x.Z)(n),
          Z = (0, h.Z)(n),
          C = (0, E.ZP)(n),
          T = (0, S.Z)(n),
          L = (0, b.Z)(n),
          O = (0, c.Z)({ id: n.id, label: M.intl.string(M.t.gFHI3t) }),
          _ = (0, o.Z)(n),
          P = (0, I.ZP)(n),
          A = (0, f.Mn)("ChannelContextFavoritesMenu");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": M.intl.string(M.t.Xm41aW),
          onSelect: t,
          children: [
            (0, l.jsx)(i.MenuGroup, { children: a }),
            (0, l.jsxs)(i.MenuGroup, { children: [v, Z, g, u] }),
            (0, l.jsxs)(i.MenuGroup, { children: [C, A ? P : T] }),
            (0, l.jsx)(i.MenuGroup, { children: L }),
            (0, l.jsx)(i.MenuGroup, { children: _ }),
            (0, l.jsx)(i.MenuGroup, { children: d }),
            (0, l.jsx)(i.MenuGroup, { children: s }),
            (0, l.jsx)(i.MenuGroup, { children: O }),
          ],
        });
      }
      function P(e) {
        let { channel: n, guild: t, onSelect: a } = e,
          s = (0, N.Z)(n),
          u = (0, j.Z)(n),
          d = (0, p.l)(n),
          m = (0, p.P)(n),
          x = (0, L.Z)(n),
          h = (0, E.ZP)(n),
          O = (0, b.Z)(n),
          _ = (0, C.Z)(n, t),
          P = (0, g.Z)(n, t),
          A = (0, v.Z)(n, t),
          y = (0, Z.Z)(n),
          G = (0, c.Z)({ id: n.id, label: M.intl.string(M.t.gFHI3t) }),
          w = (0, o.Z)(n),
          R = (0, T.Z)(n, "list_text_channel_context_menu"),
          U = (0, S.Z)(n),
          B = (0, I.ZP)(n),
          z = (0, f.Mn)("ChannelContextMenuNormal");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": M.intl.string(M.t.Xm41aW),
          onSelect: a,
          children: [
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [s, d] },
              "mark-as-read-or-favorite",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [_, x, u, R] },
              "channel-actions",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [h, z ? B : U] },
              "notifications",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [O, P, A, y] },
              "admin-actions",
            ),
            (0, l.jsx)(i.MenuGroup, { children: w }),
            (0, l.jsx)(i.MenuGroup, { children: m }),
            (0, l.jsx)(i.MenuGroup, { children: G }, "developer-actions"),
          ],
        });
      }
      n.default = (0, s.Z)(
        (0, a.Z)(
          function (e) {
            return (0, d.Z)()
              ? (0, l.jsx)(_, { ...e })
              : (0, l.jsx)(P, { ...e });
          },
          { object: O.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(372900),
        s = t(238246),
        o = t(788983),
        u = t(207035),
        c = t(823748),
        d = t(981631),
        p = t(405601);
      function m(e) {
        let { windowKey: n, channel: t } = e;
        return (0, l.jsx)(s.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, l.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function x(e, n) {
        let t = (0, u.P)(n),
          a = i.useCallback(() => {
            o.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, l.jsx)(m, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, l.jsx)(r.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => a(),
            })
          : null;
      }
    },
    905656: function (e, n, t) {
      t(733860);
      var l = t(200651),
        i = t(192379),
        r = t(780384),
        a = t(481060),
        s = t(197344),
        o = t(526167),
        u = t(70097),
        c = t(981631),
        d = t(73117),
        p = t(988868),
        m = t(554355),
        x = t(991989),
        h = t(787462),
        f = t(635507),
        g = t(470794),
        j = t(886777);
      function v(e) {
        let {
            movDark: n = d,
            movLight: t = h,
            mp4Dark: i = p,
            mp4Light: r = f,
            pngDark: a = m,
            pngLight: s = g,
            webmDark: u = x,
            webmLight: v = j,
          } = e,
          Z = (0, o.vu)(),
          b = [
            (0, l.jsx)("source", { src: i, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: a }, "png"),
          ],
          C = [
            (0, l.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: s }, "png"),
          ];
        return (
          (Z > 52 || -1 === Z) &&
            (b.unshift(
              (0, l.jsx)("source", { src: u, type: "video/webm" }, "webm"),
            ),
            C.unshift(
              (0, l.jsx)("source", { src: v, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (b.unshift(
              (0, l.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            C.unshift(
              (0, l.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [c.BRd.DARK]: b, [c.BRd.LIGHT]: C }
        );
      }
      let Z = s.Z.getAppSpinnerSources(),
        b = null != Z ? v(Z) : null,
        C = v({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: s = !0,
            setRef: o,
            className: d,
            onReady: p,
          } = e,
          { theme: m } = (0, a.useThemeContext)(),
          { reducedMotion: x } = i.useContext(
            a.AccessibilityPreferencesContext,
          ),
          h = C;
        null != b && (h = b);
        let f =
          null !== (n = h[(0, r.wj)(m) ? c.BRd.DARK : c.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : h[c.BRd.DARK];
        return (0, l.jsx)(
          u.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && s,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: f,
          },
          m,
        );
      };
    },
    905423: function (e, n, t) {
      var l = t(512969),
        i = t(903797),
        r = t(731965),
        a = t(893607),
        s = t(981631);
      function o(e) {
        let n = (0, l.LX)(null != e ? e : "", {
          path: s.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === s.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, l.LX)(null != e ? e : "", {
          path: s.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, i.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, r.j)(() => e({ path: n, guildId: t, channelId: l }));
        },
        resetPath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, r.j)(() =>
            e({ path: null, guildId: t, channelId: l, basePath: n }),
          );
        },
      }));
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return r;
        },
        S: function () {
          return i;
        },
      });
      let l = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: n } = e;
        return l.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: n } = e;
        return l.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    829750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
        t: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(430824),
        r = t(938475),
        a = t(981631);
      function s(e) {
        return (0, l.cj)(
          [r.ZP, i.Z],
          () => {
            let n = r.ZP.countVoiceStatesForChannel(e.id),
              t = i.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === a.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: n > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function o(e) {
        let n = r.ZP.countVoiceStatesForChannel(e.id),
          t = i.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === a.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(695346),
        a = t(981631);
      function s(e, n) {
        r.qF.getSetting()
          ? (0, i.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("8821"),
                  t.e("62010"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === a.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    361207: function (e, n, t) {
      t.d(n, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return m;
        },
        t3: function () {
          return p;
        },
        w4: function () {
          return u;
        },
      });
      var l = t(525654),
        i = t.n(l),
        r = t(271579),
        a = t(314897),
        s = t(981631);
      let o = "linux";
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(s.fzT.DESKTOP)
          .concat(n ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != t ? "&format=".concat(t) : "");
      }
      function c() {
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
            ? o
            : -1 !== n.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[c(e)];
      }
      function p() {
        let e = c();
        return u(e, !1, e === o ? "tar.gz" : null);
      }
      function m(e, n, t) {
        let l = null != t ? t.toString() : null;
        switch (n) {
          case "iOS":
            return (0, r.ZP)(
              null != l
                ? l
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != l ? l : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != l ? l : "https://www.discord.com";
        }
      }
    },
    405601: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=9adfda0681f00a66d80e.js.map
