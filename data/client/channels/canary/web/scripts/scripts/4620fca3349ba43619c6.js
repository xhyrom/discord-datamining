"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18831"],
  {
    170143: function (e) {
      e.exports = "/assets/cffa9b7714f321c8cc60.png";
    },
    384725: function (e, t, i) {
      var n = i(200651);
      i(192379);
      var a = i(481060),
        l = i(570140);
      t.Z = {
        open(e) {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
              let { default: t } = await i.e("65652").then(i.bind(i, 208265));
              return (i) => (0, n.jsx)(t, { classificationId: e, ...i });
            });
        },
        close() {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
        },
      };
    },
    853178: function (e, t, i) {
      var n = i(200651);
      i(192379);
      var a = i(481060),
        l = i(570140),
        o = i(103879),
        s = i(800530);
      t.Z = {
        open(e) {
          (0, a.openModalLazy)(
            async () => {
              l.Z.dispatch({
                type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN",
              });
              let { default: e } = await i.e("82961").then(i.bind(i, 751744));
              return (t) => (0, n.jsx)(e, { ...t });
            },
            { onCloseCallback: e },
          );
        },
        close() {
          l.Z.dispatch({
            type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE",
          });
        },
        success() {
          l.Z.dispatch({
            type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS",
          });
        },
        start_verification_check() {
          l.Z.dispatch({
            type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL",
          }),
            setTimeout(() => (0, o._w)(), s.TX);
        },
      };
    },
    188879: function (e, t, i) {
      var n = i(200651),
        a = i(192379),
        l = i(286379),
        o = i(692547),
        s = i(481060),
        r = i(442837),
        c = i(797614),
        d = i(706454),
        u = i(626135),
        m = i(531441),
        h = i(236289),
        p = i(788080),
        x = i(451284),
        f = i(613734),
        g = i(846488),
        v = i(384725),
        _ = i(853178),
        A = i(97568),
        E = i(800530),
        T = i(981631),
        C = i(388032),
        j = i(729779);
      let N = (e) => {
          let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
              let e = {
                classification_type: t,
                classificationHook: (e, t) =>
                  (0, n.jsx)("strong", { children: e }, t),
              };
              return null == i
                ? C.intl.format(C.t.HpvELi, e)
                : (null == i ? void 0 : i.member_type) === m.wO.OWNER
                  ? C.intl.format(C.t.X1ngSU, {
                      ...e,
                      guildName: null == i ? void 0 : i.name,
                    })
                  : C.intl.format(C.t.rmpEPD, {
                      ...e,
                      guildName: null == i ? void 0 : i.name,
                    });
            }, [t, i]);
          return (0, n.jsx)("div", {
            className: j.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
              variant: "heading-xl/normal",
              children: l,
            }),
          });
        },
        y = (e) => {
          let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === t.filter((e) => e.descriptions.length > 0).length &&
            null == i
            ? null
            : (0, n.jsxs)("div", {
                className: j.classificationActionsTakenContainer,
                children: [
                  (0, n.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: C.intl.string(C.t.O2nYk5),
                  }),
                  (0, n.jsxs)("ul", {
                    className: j.classificationActionsTakenList,
                    children: [
                      t.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                      null != i
                        ? (0, n.jsx)(
                            "li",
                            {
                              className: j.classificationActionsTakenRow,
                              children: (0, n.jsx)(s.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: C.intl.format(C.t.TByIjY, {
                                  expirationDate: i.toLocaleDateString(a, {
                                    dateStyle: "medium",
                                  }),
                                }),
                              }),
                            },
                            "expiration",
                          )
                        : null,
                    ],
                  }),
                ],
              });
        },
        S = (e) => {
          let { action: t } = e;
          return (0, n.jsx)(n.Fragment, {
            children: t.descriptions.map((e, t) =>
              (0, n.jsx)(
                "li",
                {
                  className: j.classificationActionsTakenRow,
                  children: (0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-normal",
                    children: e,
                  }),
                },
                t,
              ),
            ),
          });
        },
        I = (e) => {
          let { classificationTypeText: t, policyExplainerLink: i } = e;
          return (0, n.jsxs)(s.Anchor, {
            href: i,
            className: j.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, n.jsx)("div", {
                className: j.classificationPolicyCardIcon,
                children: (0, n.jsx)(s.ShieldIcon, {
                  size: "md",
                  color: o.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, n.jsx)("div", {
                className: j.classificationPolicyDescriptionContainer,
                children: (0, n.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: C.intl.format(C.t.zxUdpq, {
                    classificationDescription: t,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: j.classificationPolicyLinkIcon,
                children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                  size: "md",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        L = () =>
          (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: C.intl.string(C.t["I2H0/P"]),
          }),
        w = (e) =>
          (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: C.intl.format(C.t.IFxUaW, {
              letUsKnowHook: (t, i) =>
                (0, n.jsx)(
                  s.Anchor,
                  {
                    href: e.isAppealEligible ? void 0 : e.appealLink,
                    onClick: e.letUsKnowClick,
                    children: t,
                  },
                  i,
                ),
            }),
          }),
        P = (e) =>
          (0, n.jsx)("div", {
            className: j.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, n.jsx)(L, {})
              : (0, n.jsx)(w, {
                  appealLink: E.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        U = (e) => {
          let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
          } = e;
          return (0, n.jsxs)("div", {
            className: j.classificationActionExplanationContainer,
            children: [
              (0, n.jsx)(s.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: C.intl.string(C.t["977ien"]),
              }),
              (0, n.jsx)(s.Text, {
                className: j.guidelinesExplanation,
                variant: "text-sm/normal",
                children: C.intl.format(C.t["1Z/+aG"], {
                  tosLink: t,
                  communityGuidelinesLink: i,
                }),
              }),
              (0, n.jsx)(I, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              o,
            ],
          });
        };
      t.Z = (e) => {
        var t;
        let { classificationId: i, source: o, onError: s, onClose: d } = e,
          {
            classification: C,
            classificationRequestState: S,
            isAppealEligible: I,
            isDsaEligible: L,
            violationType: w,
          } = (0, f.YG)(i),
          k = (0, r.e7)([h.Z], () => h.Z.getAppealEligibility()),
          Z = (0, x.P)(),
          M =
            null != C &&
            null != C.flagged_content &&
            C.flagged_content.length > 0,
          O = (0, g.e)(),
          D =
            !!(null == C ? void 0 : C.is_coppa) &&
            k.includes(m.tG.AGE_VERIFY_ELIGIBLE);
        return (a.useEffect(() => {
          O &&
            u.default.track(T.rMx.SAFETY_HUB_ACTION, {
              action: E.n0.ViewViolationDetail,
              account_standing: Z.state,
              classification_ids: [Number(i)],
              source: o,
              is_violative_content_shown: M,
              is_dsa_eligible: L,
              violation_type: w,
            });
        }, [O]),
        null == C && S === m.OY.FAILED)
          ? (s(), null)
          : null == C
            ? null
            : (0, n.jsxs)("div", {
                className: j.classificationContainer,
                children: [
                  (0, n.jsx)(N, {
                    classificationTypeText: C.description,
                    guildMetadata: null == C ? void 0 : C.guild_metadata,
                  }),
                  (0, n.jsx)(A.s, {
                    flaggedContent:
                      null !== (t = C.flagged_content) && void 0 !== t ? t : [],
                  }),
                  (0, n.jsx)(y, {
                    actions: C.actions,
                    classificationExpiration: (0, p.Pu)(C),
                  }),
                  (0, n.jsx)(U, {
                    classificationTypeText: C.description,
                    tosLink: E.sQ.TOS_LINK,
                    communityGuidelinesLink: E.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: C.explainer_link,
                    appealComponent: (0, n.jsx)(P, {
                      hasBeenAppealed: null != C.appeal_status,
                      onLetUsKnowClick: () => {
                        u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                          action: E.n0.ClickLetUsKnow,
                          account_standing: Z.state,
                          classification_ids: [Number(i)],
                          source: o,
                          is_violative_content_shown: M,
                          is_dsa_eligible: L,
                          violation_type: w,
                        }),
                          D
                            ? _.Z.open(d)
                            : I &&
                              (c.Z.increment({
                                name: l.V.APPEAL_INGESTION_VIEW,
                              }),
                              v.Z.open(i));
                      },
                      isAppealEligible: I || D,
                    }),
                  }),
                ],
              });
      };
    },
    41164: function (e, t, i) {
      i.r(t);
      var n = i(200651);
      i(192379);
      var a = i(481060),
        l = i(230711),
        o = i(187819),
        s = i(181211),
        r = i(188879),
        c = i(981631),
        d = i(726985),
        u = i(388032),
        m = i(280322),
        h = i(170143);
      t.default = (e) => {
        let {
            transitionState: t,
            onClose: i,
            classificationId: p,
            source: x,
          } = e,
          f = (0, s.Z)(),
          g = (0, o._p)({ location: "classification-detail-modal" }),
          v = () => {
            i(),
              g
                ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING)
                : l.Z.open(
                    c.oAB.PRIVACY_AND_SAFETY,
                    d.s6.PRIVACY_ACCOUNT_STANDING,
                  );
          };
        return (0, n.jsxs)(a.ModalRoot, {
          className: m.modalRoot,
          transitionState: t,
          children: [
            (0, n.jsxs)("div", {
              className: m.modalHeader,
              children: [
                (0, n.jsx)("img", { className: m.image, src: h, alt: "" }),
                (0, n.jsx)(a.ModalCloseButton, {
                  className: m.modalClose,
                  onClick: i,
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              className: m.modalContent,
              children: f
                ? (0, n.jsx)(a.Spinner, {})
                : (0, n.jsx)(r.Z, {
                    classificationId: p,
                    source: x,
                    onError: v,
                    onClose: v,
                  }),
            }),
            (0, n.jsx)(a.ModalFooter, {
              children: (0, n.jsx)(a.Button, {
                className: m.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: v,
                children: u.intl.string(u.t.elrEjI),
              }),
            }),
          ],
        });
      };
    },
    97568: function (e, t, i) {
      i.d(t, {
        s: function () {
          return r;
        },
      });
      var n = i(200651);
      i(192379);
      var a = i(481060),
        l = i(621145),
        o = i(388032),
        s = i(804711);
      let r = (e) => {
        let { flaggedContent: t } = e;
        return 0 === t.length
          ? null
          : (0, n.jsxs)("div", {
              className: s.classificationEvidenceContainer,
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children: o.intl.string(o.t.s64CMj),
                }),
                (0, n.jsx)(l.Z, { flaggedContent: t }),
              ],
            });
      };
    },
    621145: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return U;
        },
      }),
        i(47120),
        i(773603);
      var n = i(200651),
        a = i(192379),
        l = i(392711),
        o = i(442837),
        s = i(481060),
        r = i(640108),
        c = i(406432),
        d = i(169525),
        u = i(786761),
        m = i(499376),
        h = i(3148),
        p = i(492593),
        x = i(219797),
        f = i(524444),
        g = i(884182),
        v = i(25015),
        _ = i(963550),
        A = i(845080),
        E = i(594174),
        T = i(956664),
        C = i(709054),
        j = i(236289),
        N = i(788080),
        y = i(800530),
        S = i(981631),
        I = i(217702),
        L = i(453486);
      let w = (e, t, i, n) => {
          let a = e.attachments.map((e) => {
            var i, n, a, l;
            let o = { ...e, filename: (0, N.eS)(e), size: 0, proxy_url: e.url };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
              ...o,
              width:
                null !==
                  (a =
                    null === (i = t[e.id]) || void 0 === i
                      ? void 0
                      : i.width) && void 0 !== a
                  ? a
                  : y.Sv,
              height:
                null !==
                  (l =
                    null === (n = t[e.id]) || void 0 === n
                      ? void 0
                      : n.height) && void 0 !== l
                  ? l
                  : y.EY,
            };
          });
          return (0, u.e5)({
            ...(0, h.ZP)({
              author:
                null != i
                  ? i
                  : {
                      id: "",
                      avatar: void 0,
                      discriminator: "0000",
                      username: n,
                    },
              nonce: e.id,
              content: e.content,
              type: S.uaV.DEFAULT,
              channelId: S.lds,
            }),
            timestamp: new Date(C.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: S.yb.SENT,
          });
        },
        P = (e) => {
          let { message: t } = e,
            { attachments: i } = t;
          if (0 === i.length) return null;
          let a = (e, t, i) => {
              let a = y.Sv,
                o = y.EY;
              if (null != t.width && null != t.height) {
                let e = (0, T.Dc)({
                  width: t.width,
                  height: t.height,
                  maxWidth: y.Sv,
                  maxHeight: y.EY,
                });
                (a = (0, l.clamp)(Math.round(t.width * e), 0, y.Sv)),
                  (o = (0, l.clamp)(Math.round(t.height * e), 0, y.EY));
              }
              return (0, n.jsx)("div", {
                style: { width: i ? a : "100%", height: i ? o : "100%" },
                children: (0, n.jsx)(r.ZP, {
                  className: e.className,
                  forceExternal: !1,
                  src: t.url,
                  width: i ? a : "100%",
                  height: i ? o : "100%",
                  responsive: !0,
                  volume: e.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: r.ZP.Types.VIDEO,
                  mediaLayoutType: e.mediaLayoutType,
                  fileName: t.filename,
                  fileSize: null == t.size ? void 0 : t.size.toString(),
                  playable: !0,
                  renderLinkComponent: f.iT,
                  onClick: e.onClick,
                  onPlay: e.onPlay,
                  onEnded: e.onEnded,
                  onVolumeChange: e.onVolumeChange,
                  onMute: e.onMute,
                  downloadable: !1,
                }),
              });
            },
            o = 1 === i.length;
          function s(e, t) {
            return (0, d.dn)(e.originalItem, t);
          }
          return (0, n.jsx)("div", {
            className: L.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
              items: i.map((e) => ({
                item: {
                  uniqueId: e.id,
                  originalItem: e,
                  type: (0, m.aw)(e, !0),
                  downloadUrl: e.proxy_url,
                  height: e.height,
                  width: e.width,
                  spoiler: e.spoiler,
                  contentType: e.content_type,
                },
                message: t,
                mediaLayoutType: I.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: o,
                onRemoveItem: l.noop,
                renderVideoComponent: (t) => a(t, e, o),
                renderImageComponent: (e) =>
                  (0, n.jsx)(x.dS, {
                    ...e,
                    hiddenSpoilers: !0,
                    shouldHideMediaOptions: !0,
                    shouldLink: !1,
                  }),
                renderAudioComponent: x.q7,
                renderPlaintextFilePreview: x.d4,
                renderGenericFileComponent: x.ZK,
                renderMosaicItemFooter: x.L9,
                getObscureReason: s,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function U(e) {
        var t;
        let { flaggedContent: i } = e,
          l = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [u, m] = a.useState(!0),
          h = (0, o.e7)([j.Z], () => j.Z.getUsername()),
          x = i[0],
          f = w(x, r, l, h),
          g = (0, v.Z)(f, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
          });
        return (a.useEffect(() => {
          Promise.all(
            x.attachments
              .filter((e) => {
                let { filename: t } = e;
                return (0, c.CO)(t) || (0, c.NU)(t);
              })
              .map((e) => {
                var t;
                return ((t = e),
                new Promise((e, i) => {
                  if ((0, c.CO)(t.filename)) {
                    let n = new Image();
                    (n.src = t.url),
                      (n.onload = () => {
                        e(n);
                      }),
                      (n.onerror = () => {
                        i();
                      });
                  } else if ((0, c.NU)(t.filename)) {
                    let n = document.createElement("video");
                    (n.src = t.url),
                      (n.onloadedmetadata = () => {
                        let t = n.videoWidth;
                        e({ width: t, height: n.videoHeight });
                      }),
                      (n.onerror = () => {
                        i();
                      });
                  } else e({ width: 0, height: 0 });
                })).then((t) => d((i) => ({ ...i, [e.id]: t })));
              }),
          ).finally(() => m(!1));
        }, [x.attachments]),
        "" === f.content && 0 === f.attachments.length)
          ? null
          : (0, n.jsx)("div", {
              className: L.classificationEvidenceCard,
              children: u
                ? (0, n.jsx)(s.Spinner, {})
                : (0, n.jsx)(p.Z, {
                    compact: !1,
                    childrenHeader: (0, A.Z)({
                      author: {
                        ...l,
                        colorString: "",
                        nick:
                          null !== (t = null == l ? void 0 : l.username) &&
                          void 0 !== t
                            ? t
                            : h,
                      },
                      message: f,
                      channel: void 0,
                      guildId: void 0,
                      compact: !1,
                      animateAvatar: !1,
                      isGroupStart: !0,
                      roleIcon: void 0,
                      hideTimestamp: !1,
                    }),
                    childrenAccessories: (0, n.jsx)(P, { message: f }),
                    childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=4620fca3349ba43619c6.js.map
