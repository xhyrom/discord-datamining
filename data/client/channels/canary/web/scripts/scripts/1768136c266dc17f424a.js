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
        s = i(103879),
        o = i(800530);
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
            setTimeout(() => (0, s._w)(), o.TX);
        },
      };
    },
    188879: function (e, t, i) {
      var n = i(200651),
        a = i(192379),
        l = i(286379),
        s = i(692547),
        o = i(481060),
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
        E = i(97568),
        A = i(800530),
        T = i(981631),
        j = i(388032),
        C = i(729779);
      let y = (e) => {
          let { classificationTypeText: t, guildMetadata: i } = e,
            l = a.useMemo(() => {
              let e = {
                classification_type: t,
                classificationHook: (e, t) =>
                  (0, n.jsx)("strong", { children: e }, t),
              };
              return null == i
                ? j.intl.format(j.t.HpvELi, e)
                : (null == i ? void 0 : i.member_type) === m.wO.OWNER
                  ? j.intl.format(j.t.X1ngSU, {
                      ...e,
                      guildName: null == i ? void 0 : i.name,
                    })
                  : j.intl.format(j.t.rmpEPD, {
                      ...e,
                      guildName: null == i ? void 0 : i.name,
                    });
            }, [t, i]);
          return (0, n.jsx)("div", {
            className: C.classificationHeader,
            children: (0, n.jsx)(o.Heading, {
              variant: "heading-xl/normal",
              children: l,
            }),
          });
        },
        N = (e) => {
          let { actions: t, classificationExpiration: i } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === t.filter((e) => e.descriptions.length > 0).length &&
            null == i
            ? null
            : (0, n.jsxs)("div", {
                className: C.classificationActionsTakenContainer,
                children: [
                  (0, n.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: j.intl.string(j.t.O2nYk5),
                  }),
                  (0, n.jsxs)("ul", {
                    className: C.classificationActionsTakenList,
                    children: [
                      t.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                      null != i
                        ? (0, n.jsx)(
                            "li",
                            {
                              className: C.classificationActionsTakenRow,
                              children: (0, n.jsx)(o.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: j.intl.format(j.t.TByIjY, {
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
                  className: C.classificationActionsTakenRow,
                  children: (0, n.jsx)(o.Text, {
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
        L = (e) => {
          let { classificationTypeText: t, policyExplainerLink: i } = e;
          return (0, n.jsxs)(o.Anchor, {
            href: i,
            className: C.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, n.jsx)("div", {
                className: C.classificationPolicyCardIcon,
                children: (0, n.jsx)(o.ShieldIcon, {
                  size: "md",
                  color: s.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, n.jsx)("div", {
                className: C.classificationPolicyDescriptionContainer,
                children: (0, n.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children: j.intl.format(j.t.zxUdpq, {
                    classificationDescription: t,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: C.classificationPolicyLinkIcon,
                children: (0, n.jsx)(o.ChevronSmallRightIcon, {
                  size: "md",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        I = () =>
          (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: j.intl.string(j.t["I2H0/P"]),
          }),
        w = (e) =>
          (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: j.intl.format(j.t.IFxUaW, {
              letUsKnowHook: (t, i) =>
                (0, n.jsx)(
                  o.Anchor,
                  {
                    href: e.isAppealEligible ? void 0 : e.appealLink,
                    onClick: e.letUsKnowClick,
                    children: t,
                  },
                  i,
                ),
            }),
          }),
        k = (e) =>
          (0, n.jsx)("div", {
            className: C.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, n.jsx)(I, {})
              : (0, n.jsx)(w, {
                  appealLink: A.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        P = (e) => {
          let {
            tosLink: t,
            communityGuidelinesLink: i,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
          } = e;
          return (0, n.jsxs)("div", {
            className: C.classificationActionExplanationContainer,
            children: [
              (0, n.jsx)(o.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: j.intl.string(j.t["977ien"]),
              }),
              (0, n.jsx)(o.Text, {
                className: C.guidelinesExplanation,
                variant: "text-sm/normal",
                children: j.intl.format(j.t["1Z/+aG"], {
                  tosLink: t,
                  communityGuidelinesLink: i,
                }),
              }),
              (0, n.jsx)(L, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              s,
            ],
          });
        };
      t.Z = (e) => {
        var t;
        let { classificationId: i, source: s, onError: o, onClose: d } = e,
          {
            classification: j,
            classificationRequestState: S,
            isAppealEligible: L,
            isDsaEligible: I,
            violationType: w,
          } = (0, f.YG)(i),
          U = (0, r.e7)([h.Z], () => h.Z.getAppealEligibility()),
          M = (0, x.P)(),
          Z =
            null != j &&
            null != j.flagged_content &&
            j.flagged_content.length > 0,
          O = (0, g.e)(),
          b =
            !!(null == j ? void 0 : j.is_coppa) &&
            U.includes(m.tG.AGE_VERIFY_ELIGIBLE),
          D = {
            accountStanding: M,
            classificationId: i,
            hasFlaggedContent: Z,
            isDsaEligible: I,
            source: s,
            violationType: w,
          },
          R = a.useRef(D);
        return (a.useEffect(() => {
          R.current = D;
        }),
        a.useEffect(() => {
          let {
            accountStanding: e,
            classificationId: t,
            hasFlaggedContent: i,
            isDsaEligible: n,
            source: a,
            violationType: l,
          } = R.current;
          O &&
            u.default.track(T.rMx.SAFETY_HUB_ACTION, {
              action: A.n0.ViewViolationDetail,
              account_standing: e.state,
              classification_ids: [Number(t)],
              source: a,
              is_violative_content_shown: i,
              is_dsa_eligible: n,
              violation_type: l,
            });
        }, [O]),
        null == j && S === m.OY.FAILED)
          ? (o(), null)
          : null == j
            ? null
            : (0, n.jsxs)("div", {
                className: C.classificationContainer,
                children: [
                  (0, n.jsx)(y, {
                    classificationTypeText: j.description,
                    guildMetadata: null == j ? void 0 : j.guild_metadata,
                  }),
                  (0, n.jsx)(E.s, {
                    flaggedContent:
                      null !== (t = j.flagged_content) && void 0 !== t ? t : [],
                  }),
                  (0, n.jsx)(N, {
                    actions: j.actions,
                    classificationExpiration: (0, p.Pu)(j),
                  }),
                  (0, n.jsx)(P, {
                    classificationTypeText: j.description,
                    tosLink: A.sQ.TOS_LINK,
                    communityGuidelinesLink: A.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: j.explainer_link,
                    appealComponent: (0, n.jsx)(k, {
                      hasBeenAppealed: null != j.appeal_status,
                      onLetUsKnowClick: () => {
                        u.default.track(T.rMx.SAFETY_HUB_ACTION, {
                          action: A.n0.ClickLetUsKnow,
                          account_standing: M.state,
                          classification_ids: [Number(i)],
                          source: s,
                          is_violative_content_shown: Z,
                          is_dsa_eligible: I,
                          violation_type: w,
                        }),
                          b
                            ? _.Z.open(d)
                            : L &&
                              (c.Z.increment({
                                name: l.V.APPEAL_INGESTION_VIEW,
                              }),
                              v.Z.open(i));
                      },
                      isAppealEligible: L || b,
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
        s = i(181211),
        o = i(188879),
        r = i(981631),
        c = i(726985),
        d = i(388032),
        u = i(280322),
        m = i(170143);
      t.default = (e) => {
        let {
            transitionState: t,
            onClose: i,
            classificationId: h,
            source: p,
          } = e,
          x = (0, s.Z)(),
          f = () => {
            i(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
          };
        return (0, n.jsxs)(a.ModalRoot, {
          className: u.modalRoot,
          transitionState: t,
          children: [
            (0, n.jsxs)("div", {
              className: u.modalHeader,
              children: [
                (0, n.jsx)("img", { className: u.image, src: m, alt: "" }),
                (0, n.jsx)(a.ModalCloseButton, {
                  className: u.modalClose,
                  onClick: i,
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              className: u.modalContent,
              children: x
                ? (0, n.jsx)(a.Spinner, {})
                : (0, n.jsx)(o.Z, {
                    classificationId: h,
                    source: p,
                    onError: f,
                    onClose: f,
                  }),
            }),
            (0, n.jsx)(a.ModalFooter, {
              children: (0, n.jsx)(a.Button, {
                className: u.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: f,
                children: d.intl.string(d.t.elrEjI),
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
        s = i(388032),
        o = i(804711);
      let r = (e) => {
        let { flaggedContent: t } = e;
        return 0 === t.length
          ? null
          : (0, n.jsxs)("div", {
              className: o.classificationEvidenceContainer,
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children: s.intl.string(s.t.s64CMj),
                }),
                (0, n.jsx)(l.Z, { flaggedContent: t }),
              ],
            });
      };
    },
    621145: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return P;
        },
      }),
        i(47120),
        i(773603);
      var n = i(200651),
        a = i(192379),
        l = i(392711),
        s = i(442837),
        o = i(481060),
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
        E = i(845080),
        A = i(594174),
        T = i(956664),
        j = i(709054),
        C = i(236289),
        y = i(788080),
        N = i(800530),
        S = i(981631),
        L = i(217702),
        I = i(453486);
      let w = (e, t, i, n) => {
          let a = e.attachments.map((e) => {
            var i, n, a, l;
            let s = { ...e, filename: (0, y.eS)(e), size: 0, proxy_url: e.url };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return s;
            return {
              ...s,
              width:
                null !==
                  (a =
                    null === (i = t[e.id]) || void 0 === i
                      ? void 0
                      : i.width) && void 0 !== a
                  ? a
                  : N.Sv,
              height:
                null !==
                  (l =
                    null === (n = t[e.id]) || void 0 === n
                      ? void 0
                      : n.height) && void 0 !== l
                  ? l
                  : N.EY,
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
            timestamp: new Date(j.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: S.yb.SENT,
          });
        },
        k = (e) => {
          let { message: t } = e,
            { attachments: i } = t;
          if (0 === i.length) return null;
          let a = (e, t, i) => {
              let a = N.Sv,
                s = N.EY;
              if (null != t.width && null != t.height) {
                let e = (0, T.Dc)({
                  width: t.width,
                  height: t.height,
                  maxWidth: N.Sv,
                  maxHeight: N.EY,
                });
                (a = (0, l.clamp)(Math.round(t.width * e), 0, N.Sv)),
                  (s = (0, l.clamp)(Math.round(t.height * e), 0, N.EY));
              }
              return (0, n.jsx)("div", {
                style: { width: i ? a : "100%", height: i ? s : "100%" },
                children: (0, n.jsx)(r.ZP, {
                  className: e.className,
                  forceExternal: !1,
                  src: t.url,
                  width: i ? a : "100%",
                  height: i ? s : "100%",
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
            s = 1 === i.length;
          function o(e, t) {
            return (0, d.dn)(e.originalItem, t);
          }
          return (0, n.jsx)("div", {
            className: I.classificationEvidenceMessageAttachment,
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
                mediaLayoutType: L.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: s,
                onRemoveItem: l.noop,
                renderVideoComponent: (t) => a(t, e, s),
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
                getObscureReason: o,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function P(e) {
        var t;
        let { flaggedContent: i } = e,
          l = (0, s.e7)([A.default], () => A.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [u, m] = a.useState(!0),
          h = (0, s.e7)([C.Z], () => C.Z.getUsername()),
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
              className: I.classificationEvidenceCard,
              children: u
                ? (0, n.jsx)(o.Spinner, {})
                : (0, n.jsx)(p.Z, {
                    compact: !1,
                    childrenHeader: (0, E.Z)({
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
                    childrenAccessories: (0, n.jsx)(k, { message: f }),
                    childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=1768136c266dc17f424a.js.map
