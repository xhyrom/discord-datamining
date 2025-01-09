(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50721"],
  {
    418435: function (e, t, i) {
      var s = i(106234);
      e.exports = function (e) {
        return e && e.length ? s(e) : [];
      };
    },
    86836: function (e) {
      "use strict";
      e.exports = "/assets/bad967454bb23a6adcc8.svg";
    },
    18192: function (e) {
      "use strict";
      e.exports = "/assets/5b204848c019cb28a775.svg";
    },
    387572: function (e) {
      "use strict";
      e.exports = "/assets/886bab997cad31e3ff06.svg";
    },
    617285: function (e) {
      "use strict";
      e.exports = "/assets/106345cc58042181b8fb.svg";
    },
    112847: function (e) {
      "use strict";
      e.exports = "/assets/e7681bff22fc3aa4a4bd.svg";
    },
    516954: function (e) {
      "use strict";
      e.exports = "/assets/3e87b61a306227219abc.svg";
    },
    450269: function (e, t, i) {
      "use strict";
      i.d(t, {
        V: function () {
          return l;
        },
      }),
        i(47120);
      var s = i(192379),
        n = i(259674),
        r = i(981631),
        a = i(388032);
      function l(e) {
        let [t, i] = s.useState(!1),
          [l, o] = s.useState(!1),
          [d, c] = s.useState(!1);
        return {
          rules: s.useMemo(() => {
            let s = a.intl.format(a.t.S2lVJS, {
              onCommunityGuidelinesClick: () =>
                (0, n.lW)({
                  articleId: r.BhN.PUBLIC_GUILD_GUILDLINES,
                  guildId: e,
                  modalStep: n.tK.AGREE_TO_RULES,
                }),
              onDiscoveryGuidelinesClick: () =>
                (0, n.lW)({
                  articleId: r.BhN.SERVER_DISCOVERY_GUIDELINES,
                  guildId: e,
                  modalStep: n.tK.AGREE_TO_RULES,
                }),
            });
            return [
              {
                key: "healthy",
                title: a.intl.string(a.t.jIi9go),
                body: a.intl.string(a.t["4uUAXl"]),
                onCheck: () => i(!t),
                checked: t,
              },
              {
                key: "nonNSFW",
                title: a.intl.string(a.t.iwnCh4),
                body: a.intl.string(a.t.UKFzER),
                onCheck: () => o(!l),
                checked: l,
              },
              {
                key: "guidelines",
                title: s,
                body: a.intl.string(a.t.u0Go2t),
                onCheck: () => c(!d),
                checked: d,
              },
            ];
          }, [d, e, t, l]),
          rulesAccepted: t && l && d,
        };
      }
    },
    210172: function (e, t, i) {
      "use strict";
      i.r(t), i(47120);
      var s = i(200651),
        n = i(192379),
        r = i(442837),
        a = i(481060),
        l = i(367907),
        o = i(313201),
        d = i(456268),
        c = i(416162),
        u = i(434404),
        m = i(999382),
        g = i(449543),
        x = i(681518),
        h = i(627573),
        p = i(814008),
        v = i(259674),
        f = i(981631),
        N = i(128449),
        I = i(388032),
        S = i(89388),
        j = i(438825);
      t.default = (e) => {
        let { transitionState: t, onClose: C } = e,
          { guild: T, guildMetadata: E } = (0, r.cj)([m.Z], () =>
            m.Z.getProps(),
          ),
          y = (0, o.Dt)(),
          [b, _] = n.useState(!1),
          [k, F] = n.useState(0),
          [R, A] = n.useState(!1);
        if (
          (n.useEffect(() => {
            l.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, {
              type: f.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
            });
          }, []),
          null == T)
        )
          return null;
        let w = (0, s.jsx)(x.Z, { guild: T, headerId: y }),
          D = (0, s.jsx)(g.Z, { guild: T, guildMetadata: E, headerId: y }),
          Z = (0, s.jsx)(p.Z, { guild: T, guildMetadata: E, headerId: y }),
          M = (0, s.jsx)(h.Z, { guild: T, headerId: y, onAgreedChange: A }),
          P = (0, s.jsx)("img", {
            alt: "",
            src: j,
            className: S.footerImage,
            width: 240,
          }),
          L = async () => {
            if (0 === k) {
              _(!0);
              try {
                await u.Z.saveGuild(
                  T.id,
                  { description: T.description },
                  { isForDiscovery: !0, throwErr: !0 },
                ),
                  F(k + 1),
                  (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, T.id);
              } catch (e) {}
            } else if (1 === k)
              F(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, T.id);
            else if (2 === k) {
              _(!0);
              try {
                await (0, d.Vv)({
                  guildId: T.id,
                  primaryCategoryId: E.primaryCategoryId,
                  keywords: E.keywords,
                  emojiDiscoverabilityEnabled: E.emojiDiscoverabilityEnabled,
                  partnerActionedTimestamp: E.partnerActionedTimestamp,
                  partnerApplicationTimestamp: E.partnerApplicationTimestamp,
                  isPublished: E.isPublished,
                  reasonsToJoin: E.reasonsToJoin,
                  socialLinks: E.socialLinks,
                  about: E.about,
                }),
                  F(k + 1),
                  (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, T.id);
              } catch (e) {}
            }
            _(!1);
          },
          O = [
            {
              modalContent: w,
              disableNextStep: null == T.description,
              overviewTitle: I.intl.string(I.t.RHP0kJ),
            },
            {
              modalContent: D,
              disableNextStep:
                E.primaryCategoryId === N.o3 || null == E.primaryCategoryId,
              overviewTitle: I.intl.string(I.t.Rv9An5),
            },
            {
              modalContent: Z,
              disableNextStep: 0 === E.keywords.length,
              overviewTitle: I.intl.string(I.t["0PJZXl"]),
            },
            {
              modalContent: M,
              disableNextStep: !R,
              overviewTitle: I.intl.string(I.t.Q8OFNz),
            },
          ];
        return (0, s.jsx)(c.Z, {
          stepData: O,
          title: I.intl.string(I.t.uyuIen),
          transitionState: t,
          onClose: C,
          completeButtonText: I.intl.string(I.t.wYi2lJ),
          onNextPressed: L,
          onPrevPressed: () => {
            F(k - 1);
          },
          forceStep: k,
          onComplete: () => {
            let e = T.features;
            !T.hasFeature(f.oNc.DISCOVERABLE) && e.add(f.oNc.DISCOVERABLE),
              u.Z.saveGuild(T.id, { features: e, description: T.description }),
              (0, a.openModalLazy)(async () => {
                let { default: e } = await i.e("263").then(i.bind(i, 477520));
                return (t) => (0, s.jsx)(e, { ...t, guild: T });
              });
          },
          overviewFooter: P,
          submitting: b,
          sequencerClassName: S.container,
        });
      };
    },
    449543: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var n = i(120356),
        r = i.n(n),
        a = i(481060),
        l = i(285888),
        o = i(456268),
        d = i(526429),
        c = i(450474),
        u = i(128449),
        m = i(388032),
        g = i(89388);
      t.Z = (e) => {
        let { guild: t, guildMetadata: i, headerId: n } = e,
          x = d.Z.getPrimaryCategories().map((e) => {
            let { categoryId: t, name: i } = e;
            return { value: t, label: i };
          });
        return (0, s.jsxs)("div", {
          className: g.container,
          children: [
            (0, s.jsxs)("div", {
              className: g.content,
              children: [
                (0, s.jsx)("div", { className: r()(g.stepImage, g.tagImage) }),
                (0, s.jsx)(a.Heading, {
                  variant: "heading-xl/semibold",
                  className: g.header,
                  id: n,
                  children: m.intl.string(m.t.Rv9An5),
                }),
                (0, s.jsx)(a.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: g.headerCaption,
                  children: m.intl.string(m.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(a.FormSection, {
              className: g.form,
              children: [
                (0, s.jsx)(a.FormTitle, {
                  required: !0,
                  children: m.intl.string(m.t.Rv9An5),
                }),
                (0, s.jsx)(a.FormText, {
                  type: a.FormTextTypes.DESCRIPTION,
                  className: g.description,
                  children: m.intl.string(m.t.CE5Gyc),
                }),
                (0, s.jsx)(l.Z, {
                  value:
                    i.primaryCategoryId === u.o3 ? null : i.primaryCategoryId,
                  placeholder: m.intl.string(m.t.XqMe3N),
                  searchable: !0,
                  clearable: !1,
                  options: x,
                  onChange: (e) => {
                    var i;
                    (null == t ? void 0 : t.id) != null &&
                      (0, o.TA)(
                        null == t ? void 0 : t.id,
                        null !== (i = null == e ? void 0 : e.value) &&
                          void 0 !== i
                          ? i
                          : u.o3,
                      );
                  },
                  maxMenuHeight: 250,
                }),
              ],
            }),
            (0, s.jsxs)(a.FormSection, {
              className: g.form,
              children: [
                (0, s.jsx)(a.FormTitle, {
                  children: m.intl.string(m.t.pcrcpK),
                }),
                (0, s.jsx)(a.FormText, {
                  type: a.FormTextTypes.DESCRIPTION,
                  className: g.description,
                  children: m.intl.string(m.t["4jnzlZ"]),
                }),
                (0, s.jsx)(c.Z, {
                  guild: t,
                  guildMetadata: i,
                  menuPlacement: l.Z.MenuPlacements.TOP,
                }),
              ],
            }),
          ],
        });
      };
    },
    681518: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var n = i(120356),
        r = i.n(n),
        a = i(442837),
        l = i(481060),
        o = i(434404),
        d = i(999382),
        c = i(259674),
        u = i(981631),
        m = i(388032),
        g = i(89388);
      t.Z = (e) => {
        var t;
        let { guild: i, headerId: n } = e,
          x = (0, a.e7)([d.Z], () => "description" in d.Z.getErrors()),
          h = x
            ? m.intl.format(m.t.loup7u, {
                onLearnMoreClick: () => {
                  (0, c.lW)({
                    articleId: u.BhN.SERVER_DISCOVERY_GUIDELINES,
                    guildId: i.id,
                    modalStep: c.tK.DESCRIPTION,
                  });
                },
              })
            : null;
        return (0, s.jsxs)("div", {
          className: g.container,
          children: [
            (0, s.jsxs)("div", {
              className: g.content,
              children: [
                (0, s.jsx)("div", {
                  className: r()(g.stepImage, g.pencilImage),
                }),
                (0, s.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  className: g.header,
                  id: n,
                  children: m.intl.string(m.t.HY9iWF),
                }),
                (0, s.jsx)(l.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: g.headerCaption,
                  children: m.intl.string(m.t.zTZSv7),
                }),
              ],
            }),
            (0, s.jsxs)(l.FormSection, {
              className: g.form,
              children: [
                (0, s.jsx)(l.FormTitle, {
                  required: !0,
                  children: m.intl.string(m.t["RSfm+v"]),
                }),
                (0, s.jsx)(l.FormText, {
                  type: l.FormTextTypes.DESCRIPTION,
                  className: g.description,
                  children: m.intl.string(m.t["6jNp19"]),
                }),
                (0, s.jsx)(l.TextArea, {
                  autoFocus: !0,
                  value: null !== (t = i.description) && void 0 !== t ? t : "",
                  placeholder: m.intl.string(m.t.Nvfows),
                  onChange: (e) => {
                    o.Z.updateGuild({ description: e });
                  },
                  maxLength: 120,
                  className: g.textArea,
                  error: h,
                }),
              ],
            }),
          ],
        });
      };
    },
    627573: function (e, t, i) {
      "use strict";
      var s = i(200651),
        n = i(192379),
        r = i(120356),
        a = i.n(r),
        l = i(481060),
        o = i(450269),
        d = i(388032),
        c = i(89388);
      t.Z = (e) => {
        let { headerId: t, guild: i, onAgreedChange: r } = e,
          { rules: u, rulesAccepted: m } = (0, o.V)(i.id);
        return (
          n.useEffect(() => {
            r(m);
          }, [r, m]),
          (0, s.jsxs)("div", {
            className: c.container,
            children: [
              (0, s.jsxs)("div", {
                className: c.content,
                children: [
                  (0, s.jsx)("div", {
                    className: a()(c.stepImage, c.checkImage),
                  }),
                  (0, s.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    className: c.header,
                    id: t,
                    children: d.intl.string(d.t.Q8OFNz),
                  }),
                  (0, s.jsx)(l.Text, {
                    color: "none",
                    variant: "text-md/normal",
                    className: c.headerCaption,
                    children: d.intl.string(d.t["20piMT"]),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: c.form,
                children: [
                  (0, s.jsx)(l.FormTitle, {
                    required: !0,
                    children: d.intl.string(d.t.HsM7a2),
                  }),
                  u.map((e) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: c.checkboxWrapper,
                        children: (0, s.jsxs)(l.Checkbox, {
                          type: l.Checkbox.Types.ROW,
                          value: e.checked,
                          align: l.Checkbox.Aligns.TOP,
                          onChange: e.onCheck,
                          children: [
                            (0, s.jsx)(l.Text, {
                              variant: "text-md/semibold",
                              className: c.checkboxTitle,
                              children: e.title,
                            }),
                            (0, s.jsx)(l.Text, {
                              variant: "text-sm/normal",
                              children: e.body,
                            }),
                          ],
                        }),
                      },
                      e.key,
                    ),
                  ),
                ],
              }),
            ],
          })
        );
      };
    },
    814008: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        n = i(192379),
        r = i(120356),
        a = i.n(r),
        l = i(418435),
        o = i.n(l),
        d = i(442837),
        c = i(481060),
        u = i(558324),
        m = i(367907),
        g = i(456268),
        x = i(626135),
        h = i(999382),
        p = i(654351),
        v = i(259674),
        f = i(203377),
        N = i(981631),
        I = i(388032),
        S = i(89388);
      let j = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
      t.Z = (e) => {
        var t;
        let { guild: i, guildMetadata: r, headerId: l } = e,
          [C, T] = n.useState(!1),
          E = (0, d.e7)([h.Z], () => "keywords" in h.Z.getErrors()),
          y = (e) => {
            if (j.test(e)) T(!1);
            else {
              T(!0);
              return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = r;
            !(t.length >= f.G7) &&
              (0, g.zH)(i.id, o()([...t, e.toLowerCase()]));
          },
          b = (e) => {
            y(e),
              x.default.track(N.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                tag: e,
                primary_category_id: r.primaryCategoryId,
                ...(0, m.hH)(i.id),
              });
          },
          _ = C
            ? I.intl.string(I.t["t/mtnZ"])
            : E
              ? I.intl.format(I.t.loup7u, {
                  onLearnMoreClick: () => {
                    (0, v.lW)({
                      articleId: N.BhN.SERVER_DISCOVERY_GUIDELINES,
                      guildId: i.id,
                      modalStep: v.tK.TAGS,
                    });
                  },
                })
              : null,
          k = new Set(r.keywords);
        return (0, s.jsxs)("div", {
          className: S.container,
          children: [
            (0, s.jsxs)("div", {
              className: S.content,
              children: [
                (0, s.jsx)("div", { className: a()(S.stepImage, S.tagImage) }),
                (0, s.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  className: S.header,
                  id: l,
                  children: I.intl.string(I.t["0PJZXl"]),
                }),
                (0, s.jsx)(c.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: S.headerCaption,
                  children: I.intl.string(I.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(c.FormSection, {
              className: S.form,
              children: [
                (0, s.jsx)(c.FormTitle, {
                  required: !0,
                  children: I.intl.string(I.t["0PJZXl"]),
                }),
                (0, s.jsx)(c.FormText, {
                  type: c.FormTextTypes.DESCRIPTION,
                  className: S.description,
                  children: I.intl.string(I.t.ztiTDA),
                }),
                (0, s.jsx)(u.Z, {
                  className: a()(S.tags, { [S.error]: null != _ }),
                  tags: r.keywords,
                  onRemoveTag: (e) => {
                    if ((null == i ? void 0 : i.id) == null) return;
                    let t = [...r.keywords];
                    t.splice(e, 1), (0, g.zH)(i.id, t);
                  },
                  onAddTag: y,
                  maxTags: f.G7,
                  maxTaxLength: f._0,
                  placeholder:
                    (null == r
                      ? void 0
                      : null === (t = r.keywords) || void 0 === t
                        ? void 0
                        : t.length) === 0
                      ? I.intl.string(I.t.EL4Lho)
                      : "",
                }),
                (0, s.jsx)(c.Text, {
                  className: S.error,
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: _,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: S.form,
              children: (0, s.jsx)(c.FormTitle, {
                children: I.intl.string(I.t.sF28Oj),
              }),
            }),
            (0, s.jsx)("div", {
              className: S.tagContainer,
              children: (0, p.P5)(r.primaryCategoryId).map((e) =>
                (0, s.jsx)(
                  c.Anchor,
                  {
                    onClick: () => b(e),
                    className: a()(S.tag, { [S.usedTag]: k.has(e) }),
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      };
    },
    416162: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        n = i(192379),
        r = i(120356),
        a = i.n(r),
        l = i(481060),
        o = i(313201),
        d = i(388032),
        c = i(733424);
      let u = (e) => {
        let { index: t, title: i, selected: n } = e;
        return (0, s.jsxs)("div", {
          className: a()(c.overviewStep, { [c.selected]: n }),
          children: [
            (0, s.jsx)(l.Text, {
              className: c.stepIndex,
              variant: "text-sm/normal",
              children: t + 1,
            }),
            (0, s.jsx)(l.Text, {
              variant: "text-md/normal",
              className: c.stepTitle,
              children: i,
            }),
          ],
        });
      };
      t.Z = (e) => {
        let {
            className: t,
            title: i,
            stepData: r,
            transitionState: m,
            onClose: g,
            completeButtonText: x,
            overviewFooter: h,
            onNextPressed: p,
            onPrevPressed: v,
            onComplete: f,
            sequencerClassName: N,
            initialStep: I = 0,
            forceStep: S,
            submitting: j = !1,
            autoCloseOnComplete: C = !0,
          } = e,
          [T, E] = n.useState([]),
          [y, b] = n.useState(I),
          _ = (0, o.Dt)();
        n.useEffect(() => {
          E([...Array(r.length).keys()]);
        }, [r.length]);
        let k = null != S ? S : y,
          F = r[k],
          R = 0 === k,
          A = k === r.length - 1,
          w = null != x ? x : d.intl.string(d.t.i4jeWV),
          D = n.useCallback(() => {
            null == v || v(), b(k - 1);
          }, [v, k, b]);
        return (0, s.jsxs)(l.ModalRoot, {
          size: l.ModalSize.MEDIUM,
          className: a()(c.container, t),
          transitionState: m,
          "aria-labelledby": _,
          children: [
            (0, s.jsxs)("div", {
              className: c.overviewSidebar,
              children: [
                (0, s.jsx)(l.Heading, {
                  id: _,
                  variant: "heading-xl/semibold",
                  className: c.header,
                  children: i,
                }),
                (0, s.jsx)("div", {
                  className: c.overviewSteps,
                  children: r.map((e, t) =>
                    (0, s.jsx)(
                      u,
                      { index: t, title: e.overviewTitle, selected: t === k },
                      t,
                    ),
                  ),
                }),
                h,
              ],
            }),
            (0, s.jsxs)("div", {
              className: c.modal,
              children: [
                (0, s.jsxs)(l.ModalContent, {
                  children: [
                    (0, s.jsx)(l.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: g,
                      className: c.closeButton,
                    }),
                    (0, s.jsx)(l.Sequencer, {
                      step: k,
                      steps: T,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: a()(c.sequencer, N),
                      innerClassName: c.innerSequencer,
                      children: F.modalContent,
                    }),
                  ],
                }),
                (0, s.jsxs)(l.ModalFooter, {
                  className: c.footer,
                  children: [
                    (0, s.jsx)(l.Button, {
                      type: "submit",
                      submitting: j,
                      onClick: () => {
                        A ? (f(), C && g()) : (null == p || p(), b(k + 1));
                      },
                      color: l.Button.Colors.GREEN,
                      disabled: F.disableNextStep,
                      children: A ? w : d.intl.string(d.t.PDTjLC),
                    }),
                    R
                      ? null
                      : (0, s.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.PRIMARY,
                          size: l.Button.Sizes.MIN,
                          onClick: D,
                          children: d.intl.string(d.t["13/7kZ"]),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    89388: function (e, t, i) {
      "use strict";
      e.exports = {
        container: "container_d68e21",
        content: "content_d68e21",
        headerCaption: "headerCaption_d68e21",
        form: "form_d68e21",
        description: "description_d68e21",
        header: "header_d68e21",
        checkboxTitle: "checkboxTitle_d68e21",
        textArea: "textArea_d68e21",
        footerImage: "footerImage_d68e21",
        stepImage: "stepImage_d68e21",
        tags: "tags_d68e21",
        error: "error_d68e21",
        checkboxWrapper: "checkboxWrapper_d68e21",
        tagContainer: "tagContainer_d68e21",
        tag: "tag_d68e21",
        usedTag: "usedTag_d68e21",
        checkImage: "checkImage_d68e21",
        tagImage: "tagImage_d68e21",
        pencilImage: "pencilImage_d68e21",
      };
    },
    733424: function (e, t, i) {
      "use strict";
      e.exports = {
        container: "container_d65fcf noScroll_d65fcf",
        sequencer: "sequencer_d65fcf",
        innerSequencer: "innerSequencer_d65fcf",
        modal: "modal_d65fcf",
        overviewSidebar: "overviewSidebar_d65fcf",
        header: "header_d65fcf",
        closeButton: "closeButton_d65fcf",
        footer: "footer_d65fcf",
        overviewSteps: "overviewSteps_d65fcf",
        overviewStep: "overviewStep_d65fcf",
        stepTitle: "stepTitle_d65fcf",
        stepIndex: "stepIndex_d65fcf",
        selected: "selected_d65fcf",
      };
    },
  },
]);
//# sourceMappingURL=cfc7c9153c912fb01106.js.map
