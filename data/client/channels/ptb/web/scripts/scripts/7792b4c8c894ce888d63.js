"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34049"],
  {
    913907: function (e) {
      e.exports = "/assets/59e33cbb2f4035184861.svg";
    },
    82341: function (e) {
      e.exports = "/assets/1aab01d0c55a82b421d5.svg";
    },
    309539: function (e) {
      e.exports = "/assets/bc0a4aaedfffd655977c.svg";
    },
    868508: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return A;
          },
        });
      var r = a(200651);
      a(192379);
      var n = a(442837),
        s = a(704215),
        o = a(481060),
        l = a(2052),
        c = a(100527),
        d = a(906732),
        i = a(963249),
        u = a(706454),
        f = a(594174),
        h = a(626135),
        g = a(63063),
        m = a(74538),
        _ = a(290347),
        p = a(474936),
        x = a(981631),
        b = a(388032),
        C = a(991903),
        N = a(913907),
        E = a(82341),
        y = a(309539),
        T = a(74316);
      let v = "2023_summer_bogo",
        j = "DnkvLW5052Y";
      function A(e) {
        let { renderModalProps: t } = e,
          { onClose: a } = t,
          A = (0, n.e7)([u.default], () => u.default.locale),
          w = A.split("-")[0],
          M = "zh-CN" === A ? "zh-Hans" : "zh-TW" === A ? "zh-Hant" : w,
          H = {
            url: ""
              .concat(
                (0, x.ivE)(j),
                "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=",
              )
              .concat("en" === w ? "0" : "1", "&cc_lang_pref=")
              .concat(M),
            width: 498,
            height: 280,
          },
          { location: S } = (0, l.O)(),
          { analyticsLocations: L } = (0, d.ZP)(
            c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL,
          ),
          O = (0, n.e7)([f.default], () => f.default.getCurrentUser()),
          G = (0, m.M5)(O, p.p9.TIER_2),
          B = (0, m.I5)(O) && !G;
        return (0, r.jsx)(_.Z, {
          renderModalProps: t,
          heroArt: {
            type: "embed",
            embed: H,
            thumbnail: {
              url: "https://i.ytimg.com/vi/".concat(j, "/maxresdefault.jpg"),
              width: 498,
              height: 280,
            },
            href: "https://youtu.be/".concat(j),
          },
          modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
          header: b.intl.string(b.t.eNfBGh),
          subHeader: b.intl.string(b.t["joqC6+"]),
          subHeaderExtra: () =>
            (0, r.jsx)(o.Anchor, {
              className: C.termsApplyAnchor,
              href: g.Z.getArticleURL(x.BhN.SUMMER_2023_BOGO),
              children: (0, r.jsx)(o.Heading, {
                variant: "heading-md/normal",
                className: C.termsApplyBodyText,
                children: b.intl.string(b.t["sBp+u7"]),
              }),
            }),
          featureCards: [
            {
              header: b.intl.string(b.t["9h9otr"]),
              subHeader: b.intl.format(b.t.OWqqEx, {
                helpCenterLink: g.Z.getArticleURL(x.BhN.REMIXING),
              }),
              imageSrc: N,
              tagText: b.intl.string(b.t.EYxi0t),
            },
            {
              header: b.intl.string(b.t.Yft4h4),
              subHeader: b.intl.string(b.t.Q01jYG),
              imageSrc: y,
            },
            {
              header: b.intl.string(b.t.bpVW5u),
              subHeader: b.intl.string(b.t.z15nl5),
              imageSrc: E,
            },
          ],
          changeLogId: v,
          button: () => {
            let e = B ? "upgrade_plan_button" : "get_nitro_button",
              t = Date.now();
            return (0, r.jsxs)(o.ShinyButton, {
              className: C.buttonWide,
              innerClassName: C.innerButton,
              color: o.Button.Colors.GREEN,
              size: o.Button.Sizes.SMALL,
              onClick: () => {
                h.default.track(x.rMx.CHANGE_LOG_CTA_CLICKED, {
                  change_log_id: v,
                  cta_type: e,
                  seconds_open: Math.round((Date.now() - t) / 1e3),
                  target: "bogo_payment_model",
                }),
                  (0, i.Z)({
                    subscriptionTier: p.Si.TIER_2,
                    analyticsLocations: L,
                    analyticsObject: {
                      ...S,
                      object: x.qAy.BUTTON_CTA,
                      objectType: x.Qqv.TIER_2,
                    },
                    onClose: (e) => {
                      e && a();
                    },
                  });
              },
              children: [
                (0, r.jsx)("img", {
                  alt: "",
                  className: C.nitroIconSubHeader,
                  src: T,
                }),
                b.intl.string(b.t.J61px8),
              ],
            });
          },
        });
      }
    },
    565216: function (e, t, a) {
      var r = a(200651);
      a(192379);
      var n = a(692547),
        s = a(780384),
        o = a(481060),
        l = a(410030);
      t.Z = (e) => {
        let { className: t } = e,
          a = (0, l.ZP)(),
          c = (0, o.useToken)(n.Z.colors.BACKGROUND_ACCENT).hex();
        return (0, r.jsx)("svg", {
          width: "700",
          height: "120",
          viewBox: "0 0 700 120",
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            fill: (0, s.wj)(a) ? c : "white",
            opacity: "1",
            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z",
          }),
        });
      };
    },
    290347: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return j;
        },
      }),
        a(47120),
        a(411104),
        a(315314),
        a(610138),
        a(216116),
        a(78328),
        a(815648);
      var r = a(200651),
        n = a(192379),
        s = a(120356),
        o = a.n(s),
        l = a(442837),
        c = a(481060),
        d = a(607070),
        i = a(446411),
        u = a(468846),
        f = a(313201),
        h = a(70097),
        g = a(605236),
        m = a(524444),
        _ = a(626135),
        p = a(960048),
        x = a(565216),
        b = a(981631),
        C = a(921944),
        N = a(388032),
        E = a(67037);
      let y = [],
        T = (e) => {
          let { tagText: t, className: a } = e;
          return (0, r.jsx)(c.TextBadge, { className: o()(E.tag, a), text: t });
        },
        v = (e) => {
          let {
            header: t,
            subHeader: a,
            imageSrc: n,
            tagText: s,
            wideStyle: l,
          } = e;
          return (0, r.jsxs)("div", {
            className: o()(E.featureCard, { [E.wideStyle]: l }),
            children: [
              null != s
                ? (0, r.jsx)(T, { tagText: s, className: E.featureCardTag })
                : null,
              (0, r.jsx)("img", {
                alt: "",
                className: o()(E.featureCardImg, { [E.wideStyle]: l }),
                src: n,
              }),
              (0, r.jsxs)("div", {
                className: E.featureCardTextGroup,
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-md/extrabold",
                    className: E.featureCardTextHeader,
                    children: t,
                  }),
                  (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: a,
                  }),
                ],
              }),
            ],
          });
        };
      function j(e) {
        let {
            className: t,
            renderModalProps: a,
            heroArt: s,
            heroArtClassName: T,
            modalDismissibleContent: j,
            modalTopExtra: A,
            header: w,
            headerClassName: M,
            subHeader: H,
            subHeaderExtra: S,
            featureCards: L,
            changeLogId: O,
            button: G,
            body: B,
          } = e,
          { onClose: I, transitionState: R } = a,
          k = (0, f.Dt)(),
          D = L.length % 2 == 0,
          U = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          [Z, P] = n.useState(Date.now()),
          [V, W] = n.useState(0),
          [z, Y] = n.useState(0),
          [q, K] = n.useState(!1),
          [F, Q] = n.useState(!0),
          J = n.useRef(Z),
          X = n.useRef(V),
          $ = n.useRef(z),
          ee = n.useRef(q),
          et = n.useRef(F),
          [ea, er] = n.useState(y),
          en = n.useRef(!1);
        function es() {
          let e = Date.now(),
            t = e - J.current,
            a = X.current,
            r = $.current;
          return (
            ee.current && (W((a += t)), !et.current && Y((r += t))),
            P(e),
            [a, r]
          );
        }
        return (
          n.useEffect(() => {
            let e = async () => {
              try {
                var e;
                if ("video" !== s.type || null == s.subtitles) return;
                let t =
                  null === (e = s.subtitles) || void 0 === e
                    ? void 0
                    : e.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok)
                          throw Error(
                            "Failed to fetch the subtitle file ".concat(e.src),
                          );
                        let a = await t.text(),
                          r = new Blob([a], { type: "text/vtt" }),
                          n = URL.createObjectURL(r);
                        return { ...e, src: n };
                      });
                er(await Promise.all(t));
              } catch (e) {
                p.Z.captureException(e), er(y);
              }
            };
            !0 !== en.current && e(), (en.current = !0);
          }, [s, ea]),
          n.useEffect(
            () => () => {
              null != ea &&
                ea.forEach((e) => {
                  URL.revokeObjectURL(e.src);
                });
            },
            [ea],
          ),
          n.useEffect(() => {
            (J.current = Z),
              (X.current = V),
              ($.current = z),
              (ee.current = q),
              (et.current = F);
          }, [Z, V, z, q, F]),
          n.useEffect(
            () => () => {
              if ("video" === s.type || "embed" === s.type) {
                let [e, t] = es();
                _.default.track(b.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                  change_log_id: O,
                  seconds_played: Math.round(e / 1e3),
                }),
                  _.default.track(b.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                    change_log_id: O,
                    seconds_unmuted: Math.round(t / 1e3),
                  });
              }
            },
            [O, s.type],
          ),
          n.useEffect(() => {
            null != j && (0, g.kk)(j);
            let e = Date.now();
            return (
              _.default.track(b.rMx.CHANGE_LOG_OPENED, { change_log_id: O }),
              () => {
                _.default.track(b.rMx.CHANGE_LOG_CLOSED, {
                  change_log_id: O,
                  seconds_open: Math.round((Date.now() - e) / 1e3),
                }),
                  null != j && (0, g.EW)(j, { dismissAction: C.L.DISMISS });
              }
            );
          }, [j, O]),
          (0, r.jsxs)(c.ModalRoot, {
            className: o()(E.root, t),
            transitionState: R,
            "aria-labelledby": k,
            children: [
              (0, r.jsx)(c.ModalCloseButton, {
                className: E.closeButton,
                onClick: I,
              }),
              (0, r.jsx)(x.Z, { className: E.splash }),
              null == A ? void 0 : A(),
              (0, r.jsxs)(c.ModalContent, {
                className: E.content,
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "display-md",
                    className: o()(E.headerText, M),
                    children: w,
                  }),
                  "video" === s.type
                    ? (0, r.jsx)(h.Z, {
                        className: o()(E.video, T),
                        autoPlay: !U,
                        loop: !0,
                        muted: !0,
                        controls: !0,
                        controlsList:
                          "nofullscreen nodownload noremoteplayback noplaybackrate",
                        src: s.src,
                        poster: s.poster,
                        onPlay: (e) => {
                          _.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: O,
                          }),
                            P(Date.now()),
                            K(!0),
                            Q(e.currentTarget.muted);
                        },
                        onEnded: (e) => {
                          es(), Q(e.currentTarget.muted), K(!1);
                        },
                        onVolumeChange: (e) => {
                          es(), Q(e.currentTarget.muted);
                        },
                        onPause: (e) => {
                          es(), Q(e.currentTarget.muted), K(!1);
                        },
                        disablePictureInPicture: !0,
                        children:
                          null == ea
                            ? void 0
                            : ea.map((e) => {
                                let t = (0, N.getLanguages)().find(
                                  (t) => t.code === e.locale,
                                );
                                return null == t
                                  ? null
                                  : (0, r.jsx)(
                                      "track",
                                      {
                                        label: t.englishName,
                                        kind: "captions",
                                        srcLang: t.code,
                                        src: e.src,
                                        default: e.isDefault,
                                      },
                                      e.locale,
                                    );
                              }),
                      })
                    : "embed" === s.type
                      ? (0, r.jsx)(i.BC, {
                          className: o()(E.video, T),
                          allowFullScreen: !1,
                          href: s.href,
                          thumbnail: s.thumbnail,
                          video: s.embed,
                          provider: u.pn.YOUTUBE,
                          maxWidth: s.embed.width,
                          maxHeight: s.embed.height,
                          renderVideoComponent: m.lV,
                          renderImageComponent: m.Yi,
                          renderLinkComponent: m.iT,
                          onPlay: () => {
                            _.default.track(b.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                              change_log_id: O,
                            });
                          },
                        })
                      : "image" === s.type
                        ? (0, r.jsx)("img", {
                            alt: "",
                            className: o()(E.video, T),
                            src: s.src,
                          })
                        : null,
                  (0, r.jsxs)(c.Heading, {
                    variant: "heading-lg/semibold",
                    className: E.subHeader,
                    children: [H, null == S ? void 0 : S()],
                  }),
                  null != B &&
                    (0, r.jsx)(c.Heading, {
                      variant: "heading-md/medium",
                      className: E.bodyText,
                      children: B,
                    }),
                  (0, r.jsx)("div", {
                    className: o()(E.featureCardGroup, { [E.wideStyle]: D }),
                    children: L.map((e, t) =>
                      (0, r.jsx)(
                        v,
                        { ...e, wideStyle: D },
                        "".concat(e.header, "_").concat(t),
                      ),
                    ),
                  }),
                  G(),
                ],
              }),
            ],
          })
        );
      }
    },
    991903: function (e, t, a) {
      e.exports = {
        nitroIconSubHeader: "nitroIconSubHeader_ce6db1",
        termsApplyBodyText: "termsApplyBodyText_ce6db1",
        termsApplyAnchor: "termsApplyAnchor_ce6db1",
        buttonWide: "buttonWide_ce6db1",
        innerButton: "innerButton_ce6db1",
      };
    },
    67037: function (e, t, a) {
      e.exports = {
        root: "root_f95964",
        splash: "splash_f95964",
        headerText: "headerText_f95964",
        closeButton: "closeButton_f95964",
        video: "video_f95964",
        content: "content_f95964",
        subHeader: "subHeader_f95964",
        bodyText: "bodyText_f95964",
        featureCardGroup: "featureCardGroup_f95964",
        wideStyle: "wideStyle_f95964",
        featureCard: "featureCard_f95964",
        featureCardImg: "featureCardImg_f95964",
        featureCardTextGroup: "featureCardTextGroup_f95964",
        featureCardTextHeader: "featureCardTextHeader_f95964",
        featureCardTag: "featureCardTag_f95964",
        tag: "tag_f95964",
      };
    },
  },
]);
//# sourceMappingURL=7792b4c8c894ce888d63.js.map
