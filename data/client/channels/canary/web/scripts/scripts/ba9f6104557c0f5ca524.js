"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9558"],
  {
    570849: function (e, t, a) {
      a.d(t, {
        l: function () {
          return i;
        },
        u: function () {
          return r;
        },
      });
      var n = a(544891),
        s = a(570140),
        l = a(981631);
      function i(e, t) {
        s.Z.dispatch({
          type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
          selectedTemplate: e,
          guildId: t,
        });
      }
      async function r(e) {
        let t = (
          await n.tn.get({
            url: l.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
          })
        ).body;
        null != t.templates &&
          s.Z.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
            templates: t.templates,
            guildId: e,
          });
      }
    },
    34460: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(990547),
        c = a(399606),
        o = a(780384),
        d = a(481060),
        _ = a(935369),
        m = a(367907),
        T = a(213609),
        x = a(44315),
        I = a(210887),
        E = a(626135),
        u = a(923726),
        h = a(570849),
        R = a(853439),
        C = a(303737),
        p = a(587431),
        L = a(862239),
        N = a(847004),
        g = a(981631),
        S = a(689938),
        j = a(82736);
      function O(e) {
        let { name: t, imageUrl: a, selected: s, onTap: l } = e;
        return (0, n.jsxs)(d.Clickable, {
          onClick: l,
          className: j.templateCard,
          children: [
            (0, n.jsx)("img", {
              src: a,
              alt: "",
              className: j.templateCardImage,
            }),
            (0, n.jsxs)("div", {
              className: j.templateNameRow,
              children: [
                (0, n.jsx)(d.Heading, {
                  variant: "heading-md/normal",
                  className: i()({ [j.unselectedTemplateName]: !s }),
                  children: t,
                }),
                s &&
                  (0, n.jsx)(d.CircleCheckIcon, {
                    size: "md",
                    secondaryColor: (0, x.Lq)(g.Ilk.WHITE_500),
                    color: (0, x.Lq)(g.Ilk.BRAND_500),
                  }),
              ],
            }),
          ],
        });
      }
      function f(e) {
        let {
            loading: t,
            error: a,
            templates: s,
            selectedTemplateIndex: l,
            handleTapTemplate: i,
          } = e,
          r = (0, c.e7)([I.Z], () => I.Z.theme);
        return t
          ? (0, n.jsx)(d.Spinner, {})
          : null != a
            ? (0, n.jsx)(p.Z, { children: a.message })
            : null == s || 0 === s.length
              ? null
              : (0, n.jsx)("div", {
                  className: j.templateCardList,
                  children: s.map((e, t) =>
                    (0, n.jsx)(
                      O,
                      {
                        imageUrl:
                          t === l
                            ? e.category_image
                            : (0, o.ap)(r)
                              ? e.unselected_light_theme_category_image
                              : e.unselected_dark_theme_category_image,
                        name: e.category,
                        selected: t === l,
                        onTap: () => i(t),
                      },
                      t,
                    ),
                  ),
                });
      }
      function B(e) {
        var t, a;
        let {
            guildId: l,
            templates: i,
            selectedTemplateIndex: r,
            priceTiers: c,
            showPriceReselection: o,
            setShowPriceReselection: d,
            handleCreateTierFromTemplate: _,
          } = e,
          m = (0, C.g4)(
            l,
            c,
            null != i
              ? null === (a = i[r]) || void 0 === a
                ? void 0
                : null === (t = a.listings[0]) || void 0 === t
                  ? void 0
                  : t.price_tier
              : void 0,
          ),
          T = null != m && m.length > 0,
          x = s.useCallback(
            (e) => {
              T ? d(!0) : _(e);
            },
            [_, T, d],
          );
        return null == i || 0 === i.length
          ? null
          : o && T
            ? (0, n.jsx)(N.Z, {
                selectedTemplate: i[r],
                handleSelectTemplate: _,
                newPricesToPick: m,
              })
            : (0, n.jsx)(L.Z, {
                selectedTemplate: i[r],
                handleSelectTemplate: x,
              });
      }
      function v(e) {
        let {
            transitionState: t,
            onClose: a,
            guildId: l,
            addNewEditStateFromTemplate: i,
            addNewEditStateFromScratch: o,
            priceTiers: x,
          } = e,
          I = (0, c.e7)([R.Z], () => R.Z.getTemplates(l)),
          [C, { loading: p, error: L }] = (0, _.Z)(h.u),
          N = s.useRef("voluntarily_exit");
        s.useEffect(() => {
          (null == I || 0 === I.length) && C(l);
        }, [C, l, I]),
          s.useEffect(() => {
            t === d.ModalTransitionState.EXITING &&
              E.default.track(
                g.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                { exit_reason: N.current, ...(0, m.hH)(l) },
              );
          }, [t, l, N]);
        let [O, v] = s.useState(0),
          [M, A] = s.useState(!1),
          D = s.useCallback(
            (e) => {
              (N.current = "template_selected"), (0, h.l)(e, l), i(e), a();
            },
            [l, i, a],
          ),
          U = s.useCallback(() => {
            M ? A(!1) : a();
          }, [M, a]),
          b = (0, u.yi)(l);
        return (
          (0, T.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l },
          }),
          (0, n.jsxs)(d.ModalRoot, {
            transitionState: t,
            size: d.ModalSize.DYNAMIC,
            className: j.modalRoot,
            children: [
              (0, n.jsx)(d.Clickable, {
                onClick: U,
                className: j.closeButton,
                children: (0, n.jsx)(d.XSmallIcon, {
                  size: "xxs",
                  color: "currentColor",
                }),
              }),
              (0, n.jsxs)(d.ModalContent, {
                className: j.modalContent,
                children: [
                  (0, n.jsxs)("div", {
                    className: j.templatesContainer,
                    children: [
                      M &&
                        (0, n.jsx)(d.Clickable, {
                          className: j.blackoutOverlay,
                          onClick: () => {
                            M && A(!1);
                          },
                          "aria-label": "overlay",
                        }),
                      (0, n.jsxs)(d.ScrollerThin, {
                        className: j.templatesContainerBody,
                        children: [
                          (0, n.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            children:
                              S.Z.Messages
                                .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_HEADER,
                          }),
                          (0, n.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            className: j.modalBodyText,
                            children:
                              S.Z.Messages
                                .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_BODY,
                          }),
                          b &&
                            (0, n.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              className: j.creatorPortalText,
                              children:
                                S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATOR_PORTAL_LINK.format(
                                  {
                                    creatorPortalUrl:
                                      "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                  },
                                ),
                            }),
                          (0, n.jsx)("div", {
                            className: j.templatesContentContainer,
                            children: (0, n.jsx)(f, {
                              loading: p,
                              error: L,
                              templates: I,
                              selectedTemplateIndex: O,
                              handleTapTemplate: (e) => {
                                v(e);
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children:
                          S.Z.Messages
                            .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_PROMPT,
                      }),
                      (0, n.jsxs)(d.Button, {
                        size: d.Button.Sizes.MEDIUM,
                        onClick: () => {
                          (N.current = "create_from_scratch"), o(), a();
                        },
                        look: d.Button.Looks.OUTLINED,
                        color: d.Button.Colors.PRIMARY,
                        className: j.createFromStratchButton,
                        innerClassName: j.createFromStratchButtonInner,
                        children: [
                          (0, n.jsx)(d.PencilIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 14,
                            height: 14,
                            className: j.editIcon,
                          }),
                          S.Z.Messages
                            .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_BUTTON,
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(B, {
                    guildId: l,
                    templates: I,
                    selectedTemplateIndex: O,
                    priceTiers: x,
                    showPriceReselection: M,
                    setShowPriceReselection: A,
                    handleCreateTierFromTemplate: D,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    862239: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return E;
        },
      });
      var n = a(735250);
      a(470079);
      var s = a(866442),
        l = a(481060),
        i = a(377171),
        r = a(937615),
        c = a(549631),
        o = a(981631),
        d = a(689938),
        _ = a(16387);
      function m(e) {
        let { listing: t } = e,
          { name: a, image: i, description: c } = t,
          d = (0, r.T4)(t.price_tier, o.pKx.USD);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: _.listingInfoRow,
              children: [
                (0, n.jsx)("img", { src: i, alt: "", className: _.avatar }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(l.Heading, {
                      variant: "heading-md/medium",
                      className: _.tierName,
                      children: a,
                    }),
                    (0, n.jsx)(l.Text, {
                      variant: "text-md/medium",
                      tag: "span",
                      children: d,
                    }),
                    (0, n.jsx)(l.Text, {
                      variant: "text-xxs/medium",
                      tag: "span",
                      children: "/mo.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: _.listingRoleRow,
              children: [
                (0, n.jsx)("div", {
                  style: { backgroundColor: (0, s.Rf)(t.role_color) },
                  className: _.roleColor,
                }),
                (0, n.jsx)("img", { src: i, alt: "", className: _.roleIcon }),
                (0, n.jsx)(l.Text, { variant: "text-xs/medium", children: a }),
              ],
            }),
            (0, n.jsx)(l.Text, {
              variant: "text-xs/normal",
              className: _.tierDescription,
              children: c,
            }),
          ],
        });
      }
      function T(e) {
        let { channel: t } = e,
          a = (function (e) {
            switch (e) {
              case o.d4z.GUILD_TEXT:
                return l.TextLockIcon;
              case o.d4z.GUILD_VOICE:
                return l.VoiceLockIcon;
              case o.d4z.GUILD_STAGE_VOICE:
                return l.StageLockIcon;
              case o.d4z.GUILD_FORUM:
                return l.ForumLockIcon;
              case o.d4z.GUILD_MEDIA:
                return l.ImageLockIcon;
              case o.d4z.GUILD_ANNOUNCEMENT:
                return l.AnnouncementsLockIcon;
              default:
                return null;
            }
          })(t.type);
        return (0, n.jsxs)("div", {
          className: _.channelBenefitRow,
          children: [
            null != a &&
              (0, n.jsx)(a, {
                className: _.channelBenefitIcon,
                color: "currentColor",
              }),
            (0, n.jsxs)("div", {
              className: _.channelBenefitText,
              children: [
                (0, n.jsx)(l.Text, {
                  variant: "text-sm/normal",
                  children: t.name,
                }),
                (0, n.jsx)(l.Text, {
                  variant: "text-xs/normal",
                  className: _.channelBenefitTagline,
                  children: t.tagline,
                }),
              ],
            }),
            (0, n.jsx)(c.Z, {
              className: _.__invalid_emojiIcon,
              color: i.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON,
            }),
          ],
        });
      }
      function x(e) {
        let { benefit: t } = e;
        return void 0 === t
          ? null
          : (0, n.jsxs)("div", {
              className: _.intangibleBenefitRow,
              children: [
                (0, n.jsx)("div", { className: _.intangibleBenefitIcon }),
                (0, n.jsx)(l.Text, { variant: "text-sm/normal", children: t }),
              ],
            });
      }
      function I(e) {
        let { listing: t } = e;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(l.Heading, {
              variant: "heading-sm/semibold",
              className: _.perksHeader,
              children:
                d.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PERKS_HEADER,
            }),
            (0, n.jsx)(l.Text, {
              variant: "text-xs/semibold",
              className: _.benefitTypeHeader,
              children:
                d.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_CHANNELS_HEADER,
            }),
            t.channels.map((e) => (0, n.jsx)(T, { channel: e }, e.id)),
            (0, n.jsx)(l.Text, {
              variant: "text-xs/semibold",
              className: _.benefitTypeHeader,
              children:
                d.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_BENEFITS_HEADER,
            }),
            t.additional_perks.map((e, t) =>
              (0, n.jsx)(x, { benefit: e.name }, t),
            ),
          ],
        });
      }
      function E(e) {
        let { selectedTemplate: t, handleSelectTemplate: a } = e;
        if (void 0 === t) return null;
        let s = t.listings[0];
        return (0, n.jsxs)("div", {
          className: _.container,
          children: [
            (0, n.jsxs)(l.ScrollerThin, {
              className: _.content,
              children: [
                (0, n.jsx)(m, { listing: s }),
                (0, n.jsx)("div", { className: _.divider }),
                (0, n.jsx)(I, { listing: s }),
              ],
            }),
            (0, n.jsx)(l.Button, {
              size: l.Button.Sizes.MEDIUM,
              onClick: () => {
                a(t);
              },
              children:
                d.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON,
            }),
          ],
        });
      }
    },
    847004: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return x;
        },
      }),
        a(47120);
      var n = a(735250),
        s = a(470079),
        l = a(120356),
        i = a.n(l),
        r = a(481060),
        c = a(44315),
        o = a(937615),
        d = a(981631),
        _ = a(689938),
        m = a(970810);
      function T(e) {
        let { price: t, selected: a, onClick: s } = e;
        return (0, n.jsxs)(r.Clickable, {
          className: i()(m.priceRow, { [m.selected]: a }),
          onClick: s,
          children: [
            a
              ? (0, n.jsx)(r.CircleCheckIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
                  color: (0, c.Lq)(d.Ilk.BRAND_500),
                })
              : (0, n.jsx)("svg", {
                  width: "20",
                  height: "20",
                  children: (0, n.jsx)("circle", {
                    cx: 10,
                    cy: 10,
                    r: 10,
                    className: m.circle,
                  }),
                }),
            (0, n.jsxs)("div", {
              className: m.priceRowText,
              children: [
                (0, n.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  tag: "span",
                  children: (0, o.T4)(t, d.pKx.USD),
                }),
                (0, n.jsx)(r.Text, {
                  variant: "text-xxs/medium",
                  tag: "span",
                  children: "/mo.",
                }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        let {
            selectedTemplate: t,
            handleSelectTemplate: a,
            newPricesToPick: l,
          } = e,
          [i, c] = s.useState(0);
        return (0, n.jsxs)("div", {
          className: m.container,
          children: [
            (0, n.jsxs)("div", {
              className: m.content,
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "heading-md/semibold",
                  children:
                    _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_HEADER.format(
                      { tierName: t.listings[0].name },
                    ),
                }),
                (0, n.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  className: m.bodyText,
                  children:
                    _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_BODY.format(
                      { price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD) },
                    ),
                }),
                l.map((e, t) =>
                  (0, n.jsx)(
                    T,
                    { price: e, selected: t === i, onClick: () => c(t) },
                    e,
                  ),
                ),
              ],
            }),
            (0, n.jsx)(r.Button, {
              size: r.Button.Sizes.MEDIUM,
              onClick: () => {
                a({ ...t, listings: [{ ...t.listings[0], price_tier: l[i] }] });
              },
              children:
                _.Z.Messages
                  .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON,
            }),
          ],
        });
      }
    },
    82736: function (e, t, a) {
      e.exports = {
        modalRoot: "modalRoot_d9aa0e",
        closeButton: "closeButton_d9aa0e",
        modalContent: "modalContent_d9aa0e",
        templatesContainer: "templatesContainer_d9aa0e",
        templatesContainerBody: "templatesContainerBody_d9aa0e",
        templatesContentContainer: "templatesContentContainer_d9aa0e",
        modalBodyText: "modalBodyText_d9aa0e",
        creatorPortalText: "creatorPortalText_d9aa0e",
        templateCardList: "templateCardList_d9aa0e",
        templateCard: "templateCard_d9aa0e",
        templateNameRow: "templateNameRow_d9aa0e",
        unselectedTemplateName: "unselectedTemplateName_d9aa0e",
        templateCardImage: "templateCardImage_d9aa0e",
        createFromStratchButton: "createFromStratchButton_d9aa0e",
        createFromStratchButtonInner: "createFromStratchButtonInner_d9aa0e",
        editIcon: "editIcon_d9aa0e",
        blackoutOverlay: "blackoutOverlay_d9aa0e",
      };
    },
    16387: function (e, t, a) {
      e.exports = {
        container: "container_db0741",
        content: "content_db0741",
        listingInfoRow: "listingInfoRow_db0741",
        avatar: "avatar_db0741",
        tierName: "tierName_db0741",
        listingRoleRow: "listingRoleRow_db0741",
        roleColor: "roleColor_db0741",
        roleIcon: "roleIcon_db0741",
        tierDescription: "tierDescription_db0741",
        divider: "divider_db0741",
        perksHeader: "perksHeader_db0741",
        benefitTypeHeader: "benefitTypeHeader_db0741",
        channelBenefitRow: "channelBenefitRow_db0741",
        channelBenefitIcon: "channelBenefitIcon_db0741",
        channelBenefitText: "channelBenefitText_db0741",
        channelBenefitTagline: "channelBenefitTagline_db0741",
        intangibleBenefitRow: "intangibleBenefitRow_db0741",
        intangibleBenefitIcon: "intangibleBenefitIcon_db0741",
      };
    },
    970810: function (e, t, a) {
      e.exports = {
        container: "container_d3aca4",
        content: "content_d3aca4",
        bodyText: "bodyText_d3aca4",
        priceRow: "priceRow_d3aca4",
        selected: "selected_d3aca4",
        circle: "circle_d3aca4",
        priceRowText: "priceRowText_d3aca4",
      };
    },
  },
]);
//# sourceMappingURL=ba9f6104557c0f5ca524.js.map
