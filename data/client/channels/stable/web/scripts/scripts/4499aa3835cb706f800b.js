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
            return D;
          },
        });
      var r = a(735250);
      a(470079);
      var n = a(442837),
        s = a(704215),
        o = a(481060),
        l = a(2052),
        c = a(100527),
        d = a(906732),
        u = a(963249),
        i = a(706454),
        _ = a(594174),
        f = a(626135),
        h = a(63063),
        g = a(74538),
        m = a(290347),
        N = a(474936),
        E = a(981631),
        p = a(689938),
        C = a(991903),
        O = a(913907),
        x = a(82341),
        A = a(309539),
        M = a(74316);
      let b = "2023_summer_bogo",
        T = "DnkvLW5052Y";
      function D(e) {
        let { renderModalProps: t } = e,
          { onClose: a } = t,
          D = (0, n.e7)([i.default], () => i.default.locale),
          y = D.split("-")[0],
          R = "zh-CN" === D ? "zh-Hans" : "zh-TW" === D ? "zh-Hant" : y,
          v = {
            url: ""
              .concat(
                (0, E.ivE)(T),
                "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=",
              )
              .concat("en" === y ? "0" : "1", "&cc_lang_pref=")
              .concat(R),
            width: 498,
            height: 280,
          },
          { location: B } = (0, l.O)(),
          { analyticsLocations: L } = (0, d.ZP)(
            c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL,
          ),
          G = (0, n.e7)([_.default], () => _.default.getCurrentUser()),
          S = (0, g.M5)(G, N.p9.TIER_2),
          H = (0, g.I5)(G) && !S;
        return (0, r.jsx)(m.Z, {
          renderModalProps: t,
          heroArt: {
            type: "embed",
            embed: v,
            thumbnail: {
              url: "https://i.ytimg.com/vi/".concat(T, "/maxresdefault.jpg"),
              width: 498,
              height: 280,
            },
            href: "https://youtu.be/".concat(T),
          },
          modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
          header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
          subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
          subHeaderExtra: () =>
            (0, r.jsx)(o.Anchor, {
              className: C.termsApplyAnchor,
              href: h.Z.getArticleURL(E.BhN.SUMMER_2023_BOGO),
              children: (0, r.jsx)(o.Heading, {
                variant: "heading-md/normal",
                className: C.termsApplyBodyText,
                children: p.Z.Messages.BOGO_TERMS_APPLY,
              }),
            }),
          featureCards: [
            {
              header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
              subHeader:
                p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format(
                  { helpCenterLink: h.Z.getArticleURL(E.BhN.REMIXING) },
                ),
              imageSrc: O,
              tagText: p.Z.Messages.EARLY_ACCESS,
            },
            {
              header: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
              subHeader: p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
              imageSrc: A,
            },
            {
              header:
                p.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
              subHeader:
                p.Z.Messages
                  .BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
              imageSrc: x,
            },
          ],
          changeLogId: b,
          button: () => {
            let e = H ? "upgrade_plan_button" : "get_nitro_button",
              t = Date.now();
            return (0, r.jsxs)(o.ShinyButton, {
              className: C.buttonWide,
              innerClassName: C.innerButton,
              color: o.Button.Colors.GREEN,
              size: o.Button.Sizes.SMALL,
              onClick: () => {
                f.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
                  change_log_id: b,
                  cta_type: e,
                  seconds_open: Math.round((Date.now() - t) / 1e3),
                  target: "bogo_payment_model",
                }),
                  (0, u.Z)({
                    subscriptionTier: N.Si.TIER_2,
                    analyticsLocations: L,
                    analyticsObject: {
                      ...B,
                      object: E.qAy.BUTTON_CTA,
                      objectType: E.Qqv.TIER_2,
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
                  src: M,
                }),
                p.Z.Messages.BOGO_CLAIM_OFFER,
              ],
            });
          },
        });
      }
    },
    565216: function (e, t, a) {
      var r = a(735250);
      a(470079);
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
          return T;
        },
      }),
        a(47120),
        a(411104),
        a(315314),
        a(610138),
        a(216116),
        a(78328),
        a(815648);
      var r = a(735250),
        n = a(470079),
        s = a(120356),
        o = a.n(s),
        l = a(330711),
        c = a(442837),
        d = a(481060),
        u = a(607070),
        i = a(446411),
        _ = a(468846),
        f = a(313201),
        h = a(70097),
        g = a(605236),
        m = a(524444),
        N = a(626135),
        E = a(960048),
        p = a(565216),
        C = a(981631),
        O = a(921944),
        x = a(67037);
      let A = [],
        M = (e) => {
          let { tagText: t, className: a } = e;
          return (0, r.jsx)(d.TextBadge, { className: o()(x.tag, a), text: t });
        },
        b = (e) => {
          let {
            header: t,
            subHeader: a,
            imageSrc: n,
            tagText: s,
            wideStyle: l,
          } = e;
          return (0, r.jsxs)("div", {
            className: o()(x.featureCard, { [x.wideStyle]: l }),
            children: [
              null != s
                ? (0, r.jsx)(M, { tagText: s, className: x.featureCardTag })
                : null,
              (0, r.jsx)("img", {
                alt: "",
                className: o()(x.featureCardImg, { [x.wideStyle]: l }),
                src: n,
              }),
              (0, r.jsxs)("div", {
                className: x.featureCardTextGroup,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "heading-md/extrabold",
                    className: x.featureCardTextHeader,
                    children: t,
                  }),
                  (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: a,
                  }),
                ],
              }),
            ],
          });
        };
      function T(e) {
        let {
            className: t,
            renderModalProps: a,
            heroArt: s,
            heroArtClassName: M,
            modalDismissibleContent: T,
            modalTopExtra: D,
            header: y,
            headerClassName: R,
            subHeader: v,
            subHeaderExtra: B,
            featureCards: L,
            changeLogId: G,
            button: S,
            body: H,
          } = e,
          { onClose: w, transitionState: j } = a,
          I = (0, f.Dt)(),
          U = L.length % 2 == 0,
          Z = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
          [k, P] = n.useState(Date.now()),
          [V, Y] = n.useState(0),
          [z, F] = n.useState(0),
          [W, q] = n.useState(!1),
          [K, X] = n.useState(!0),
          Q = n.useRef(k),
          J = n.useRef(V),
          $ = n.useRef(z),
          ee = n.useRef(W),
          et = n.useRef(K),
          [ea, er] = n.useState(A),
          en = n.useRef(!1);
        function es() {
          let e = Date.now(),
            t = e - Q.current,
            a = J.current,
            r = $.current;
          return (
            ee.current && (Y((a += t)), !et.current && F((r += t))),
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
                E.Z.captureException(e), er(A);
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
            (Q.current = k),
              (J.current = V),
              ($.current = z),
              (ee.current = W),
              (et.current = K);
          }, [k, V, z, W, K]),
          n.useEffect(
            () => () => {
              if ("video" === s.type || "embed" === s.type) {
                let [e, t] = es();
                N.default.track(C.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                  change_log_id: G,
                  seconds_played: Math.round(e / 1e3),
                }),
                  N.default.track(C.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                    change_log_id: G,
                    seconds_unmuted: Math.round(t / 1e3),
                  });
              }
            },
            [G, s.type],
          ),
          n.useEffect(() => {
            null != T && (0, g.kk)(T);
            let e = Date.now();
            return (
              N.default.track(C.rMx.CHANGE_LOG_OPENED, { change_log_id: G }),
              () => {
                N.default.track(C.rMx.CHANGE_LOG_CLOSED, {
                  change_log_id: G,
                  seconds_open: Math.round((Date.now() - e) / 1e3),
                }),
                  null != T && (0, g.EW)(T, { dismissAction: O.L.DISMISS });
              }
            );
          }, [T, G]),
          (0, r.jsxs)(d.ModalRoot, {
            className: o()(x.root, t),
            transitionState: j,
            "aria-labelledby": I,
            children: [
              (0, r.jsx)(d.ModalCloseButton, {
                className: x.closeButton,
                onClick: w,
              }),
              (0, r.jsx)(p.Z, { className: x.splash }),
              null == D ? void 0 : D(),
              (0, r.jsxs)(d.ModalContent, {
                className: x.content,
                children: [
                  (0, r.jsx)(d.Heading, {
                    variant: "display-md",
                    className: o()(x.headerText, R),
                    children: y,
                  }),
                  "video" === s.type
                    ? (0, r.jsx)(h.Z, {
                        className: o()(x.video, M),
                        autoPlay: !Z,
                        loop: !0,
                        muted: !0,
                        controls: !0,
                        controlsList:
                          "nofullscreen nodownload noremoteplayback noplaybackrate",
                        src: s.src,
                        poster: s.poster,
                        onPlay: (e) => {
                          N.default.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                            change_log_id: G,
                          }),
                            P(Date.now()),
                            q(!0),
                            X(e.currentTarget.muted);
                        },
                        onEnded: (e) => {
                          es(), X(e.currentTarget.muted), q(!1);
                        },
                        onVolumeChange: (e) => {
                          es(), X(e.currentTarget.muted);
                        },
                        onPause: (e) => {
                          es(), X(e.currentTarget.muted), q(!1);
                        },
                        disablePictureInPicture: !0,
                        children:
                          null == ea
                            ? void 0
                            : ea.map((e) => {
                                let t = l.Z.getLanguages().find(
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
                          className: o()(x.video, M),
                          allowFullScreen: !1,
                          href: s.href,
                          thumbnail: s.thumbnail,
                          video: s.embed,
                          provider: _.pn.YOUTUBE,
                          maxWidth: s.embed.width,
                          maxHeight: s.embed.height,
                          renderVideoComponent: m.lV,
                          renderImageComponent: m.Yi,
                          renderLinkComponent: m.iT,
                          renderForwardComponent: C.VqG,
                          onPlay: () => {
                            N.default.track(C.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                              change_log_id: G,
                            });
                          },
                        })
                      : "image" === s.type
                        ? (0, r.jsx)("img", {
                            alt: "",
                            className: o()(x.video, M),
                            src: s.src,
                          })
                        : null,
                  (0, r.jsxs)(d.Heading, {
                    variant: "heading-lg/semibold",
                    className: x.subHeader,
                    children: [v, null == B ? void 0 : B()],
                  }),
                  null != H &&
                    (0, r.jsx)(d.Heading, {
                      variant: "heading-md/medium",
                      className: x.bodyText,
                      children: H,
                    }),
                  (0, r.jsx)("div", {
                    className: o()(x.featureCardGroup, { [x.wideStyle]: U }),
                    children: L.map((e, t) =>
                      (0, r.jsx)(
                        b,
                        { ...e, wideStyle: U },
                        "".concat(e.header, "_").concat(t),
                      ),
                    ),
                  }),
                  S(),
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
//# sourceMappingURL=4499aa3835cb706f800b.js.map
