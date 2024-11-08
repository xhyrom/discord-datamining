(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18634"],
  {
    418435: function (e, t, i) {
      var s = i(106234);
      e.exports = function (e) {
        return e && e.length ? s(e) : [];
      };
    },
    322438: function (e) {
      "use strict";
      e.exports = "/assets/bad967454bb23a6adcc8.svg";
    },
    97516: function (e) {
      "use strict";
      e.exports = "/assets/5b204848c019cb28a775.svg";
    },
    63603: function (e) {
      "use strict";
      e.exports = "/assets/886bab997cad31e3ff06.svg";
    },
    781943: function (e) {
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
    993382: function (e, t, i) {
      "use strict";
      i.r(t), i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(442837),
        r = i(481060),
        l = i(367907),
        o = i(313201),
        c = i(434404),
        d = i(999382),
        m = i(416162),
        u = i(296386),
        x = i(919947),
        g = i(506491),
        h = i(957783),
        p = i(753583),
        v = i(219369),
        f = i(731455),
        N = i(981631),
        b = i(388032),
        T = i(201221),
        j = i(438825);
      t.default = (e) => {
        let { transitionState: t, onClose: C } = e,
          { guild: I, guildMetadata: S } = (0, n.cj)([d.Z], () =>
            d.Z.getProps(),
          ),
          E = (0, o.Dt)(),
          [_, y] = a.useState(!1),
          [k, R] = a.useState(0),
          [F, A] = a.useState(!1);
        if (
          (a.useEffect(() => {
            l.ZP.trackWithMetadata(N.rMx.OPEN_MODAL, {
              type: N.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
            });
          }, []),
          null == I)
        )
          return null;
        let w = (0, s.jsx)(g.Z, { guild: I, headerId: E }),
          D = (0, s.jsx)(x.Z, { guild: I, guildMetadata: S, headerId: E }),
          P = (0, s.jsx)(p.Z, { guild: I, guildMetadata: S, headerId: E }),
          Z = (0, s.jsx)(h.Z, { guild: I, headerId: E, onAgreedChange: A }),
          O = (0, s.jsx)("img", {
            alt: "",
            src: j,
            className: T.footerImage,
            width: 240,
          }),
          M = async () => {
            if (0 === k) {
              y(!0);
              try {
                await c.Z.saveGuild(
                  I.id,
                  { description: I.description },
                  { isForDiscovery: !0, throwErr: !0 },
                ),
                  R(k + 1),
                  (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, I.id);
              } catch (e) {}
            } else if (1 === k)
              R(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, I.id);
            else if (2 === k) {
              y(!0);
              try {
                await (0, u.Vv)({
                  guildId: I.id,
                  primaryCategoryId: S.primaryCategoryId,
                  keywords: S.keywords,
                  emojiDiscoverabilityEnabled: S.emojiDiscoverabilityEnabled,
                  partnerActionedTimestamp: S.partnerActionedTimestamp,
                  partnerApplicationTimestamp: S.partnerApplicationTimestamp,
                  isPublished: S.isPublished,
                  reasonsToJoin: S.reasonsToJoin,
                  socialLinks: S.socialLinks,
                  about: S.about,
                }),
                  R(k + 1),
                  (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, I.id);
              } catch (e) {}
            }
            y(!1);
          },
          L = [
            {
              modalContent: w,
              disableNextStep: null == I.description,
              overviewTitle: b.intl.string(b.t.RHP0kJ),
            },
            {
              modalContent: D,
              disableNextStep:
                S.primaryCategoryId === f.o3 || null == S.primaryCategoryId,
              overviewTitle: b.intl.string(b.t.Rv9An5),
            },
            {
              modalContent: P,
              disableNextStep: 0 === S.keywords.length,
              overviewTitle: b.intl.string(b.t["0PJZXl"]),
            },
            {
              modalContent: Z,
              disableNextStep: !F,
              overviewTitle: b.intl.string(b.t.Q8OFNz),
            },
          ];
        return (0, s.jsx)(m.Z, {
          stepData: L,
          title: b.intl.string(b.t.uyuIen),
          transitionState: t,
          onClose: C,
          completeButtonText: b.intl.string(b.t.wYi2lJ),
          onNextPressed: M,
          onPrevPressed: () => {
            R(k - 1);
          },
          forceStep: k,
          onComplete: () => {
            let e = I.features;
            !I.hasFeature(N.oNc.DISCOVERABLE) && e.add(N.oNc.DISCOVERABLE),
              c.Z.saveGuild(I.id, { features: e, description: I.description }),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await i.e("89069").then(i.bind(i, 646364));
                return (t) => (0, s.jsx)(e, { ...t, guild: I });
              });
          },
          overviewFooter: O,
          submitting: _,
          sequencerClassName: T.container,
        });
      };
    },
    919947: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var a = i(120356),
        n = i.n(a),
        r = i(481060),
        l = i(285888),
        o = i(450474),
        c = i(296386),
        d = i(150192),
        m = i(731455),
        u = i(388032),
        x = i(201221);
      t.Z = (e) => {
        let { guild: t, guildMetadata: i, headerId: a } = e,
          g = d.Z.getPrimaryCategories().map((e) => {
            let { categoryId: t, name: i } = e;
            return { value: t, label: i };
          });
        return (0, s.jsxs)("div", {
          className: x.container,
          children: [
            (0, s.jsxs)("div", {
              className: x.content,
              children: [
                (0, s.jsx)("div", { className: n()(x.stepImage, x.tagImage) }),
                (0, s.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  className: x.header,
                  id: a,
                  children: u.intl.string(u.t.Rv9An5),
                }),
                (0, s.jsx)(r.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: x.headerCaption,
                  children: u.intl.string(u.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(r.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  required: !0,
                  children: u.intl.string(u.t.Rv9An5),
                }),
                (0, s.jsx)(r.FormText, {
                  type: r.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t.CE5Gyc),
                }),
                (0, s.jsx)(l.Z, {
                  value:
                    i.primaryCategoryId === m.o3 ? null : i.primaryCategoryId,
                  placeholder: u.intl.string(u.t.XqMe3N),
                  searchable: !0,
                  clearable: !1,
                  options: g,
                  onChange: (e) => {
                    var i;
                    (null == t ? void 0 : t.id) != null &&
                      c.TA(
                        null == t ? void 0 : t.id,
                        null !== (i = null == e ? void 0 : e.value) &&
                          void 0 !== i
                          ? i
                          : m.o3,
                      );
                  },
                  maxMenuHeight: 250,
                }),
              ],
            }),
            (0, s.jsxs)(r.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(r.FormTitle, {
                  children: u.intl.string(u.t.pcrcpK),
                }),
                (0, s.jsx)(r.FormText, {
                  type: r.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t["4jnzlZ"]),
                }),
                (0, s.jsx)(o.Z, {
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
    506491: function (e, t, i) {
      "use strict";
      var s = i(200651);
      i(192379);
      var a = i(120356),
        n = i.n(a),
        r = i(442837),
        l = i(481060),
        o = i(434404),
        c = i(999382),
        d = i(219369),
        m = i(981631),
        u = i(388032),
        x = i(201221);
      t.Z = (e) => {
        var t;
        let { guild: i, headerId: a } = e,
          g = (0, r.e7)([c.Z], () => "description" in c.Z.getErrors()),
          h = g
            ? u.intl.format(u.t.loup7u, {
                onLearnMoreClick: () => {
                  (0, d.lW)({
                    articleId: m.BhN.SERVER_DISCOVERY_GUIDELINES,
                    guildId: i.id,
                    modalStep: d.tK.DESCRIPTION,
                  });
                },
              })
            : null;
        return (0, s.jsxs)("div", {
          className: x.container,
          children: [
            (0, s.jsxs)("div", {
              className: x.content,
              children: [
                (0, s.jsx)("div", {
                  className: n()(x.stepImage, x.pencilImage),
                }),
                (0, s.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  className: x.header,
                  id: a,
                  children: u.intl.string(u.t.HY9iWF),
                }),
                (0, s.jsx)(l.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: x.headerCaption,
                  children: u.intl.string(u.t.zTZSv7),
                }),
              ],
            }),
            (0, s.jsxs)(l.FormSection, {
              className: x.form,
              children: [
                (0, s.jsx)(l.FormTitle, {
                  required: !0,
                  children: u.intl.string(u.t["RSfm+v"]),
                }),
                (0, s.jsx)(l.FormText, {
                  type: l.FormTextTypes.DESCRIPTION,
                  className: x.description,
                  children: u.intl.string(u.t["6jNp19"]),
                }),
                (0, s.jsx)(l.TextArea, {
                  autoFocus: !0,
                  value: null !== (t = i.description) && void 0 !== t ? t : "",
                  placeholder: u.intl.string(u.t.Nvfows),
                  onChange: (e) => {
                    o.Z.updateGuild({ description: e });
                  },
                  maxLength: 120,
                  className: x.textArea,
                  error: h,
                }),
              ],
            }),
          ],
        });
      };
    },
    957783: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(481060),
        o = i(219369),
        c = i(981631),
        d = i(388032),
        m = i(201221);
      t.Z = (e) => {
        let { headerId: t, guild: i, onAgreedChange: n } = e,
          [u, x] = a.useState(!1),
          [g, h] = a.useState(!1),
          [p, v] = a.useState(!1);
        a.useEffect(() => {
          u && g && p ? n(!0) : n(!1);
        }, [u, g, p, n]);
        let f = d.intl.format(d.t.S2lVJS, {
          onCommunityGuidelinesClick: () =>
            (0, o.lW)({
              articleId: c.BhN.PUBLIC_GUILD_GUILDLINES,
              guildId: i.id,
              modalStep: o.tK.AGREE_TO_RULES,
            }),
          onDiscoveryGuidelinesClick: () =>
            (0, o.lW)({
              articleId: c.BhN.SERVER_DISCOVERY_GUIDELINES,
              guildId: i.id,
              modalStep: o.tK.AGREE_TO_RULES,
            }),
        });
        return (0, s.jsxs)("div", {
          className: m.container,
          children: [
            (0, s.jsxs)("div", {
              className: m.content,
              children: [
                (0, s.jsx)("div", {
                  className: r()(m.stepImage, m.checkImage),
                }),
                (0, s.jsx)(l.Heading, {
                  variant: "heading-xl/semibold",
                  className: m.header,
                  id: t,
                  children: d.intl.string(d.t.Q8OFNz),
                }),
                (0, s.jsx)(l.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: m.headerCaption,
                  children: d.intl.string(d.t["20piMT"]),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: m.form,
              children: [
                (0, s.jsx)(l.FormTitle, {
                  required: !0,
                  children: d.intl.string(d.t.HsM7a2),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    value: u,
                    align: l.Checkbox.Aligns.TOP,
                    onChange: () => x(!u),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: d.intl.string(d.t.jIi9go),
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t["4uUAXl"]),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    align: l.Checkbox.Aligns.TOP,
                    value: g,
                    onChange: () => h(!g),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: d.intl.string(d.t.iwnCh4),
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t.UKFzER),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: m.checkboxWrapper,
                  children: (0, s.jsxs)(l.Checkbox, {
                    type: l.Checkbox.Types.ROW,
                    align: l.Checkbox.Aligns.TOP,
                    value: p,
                    onChange: () => v(!p),
                    children: [
                      (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: m.checkboxTitle,
                        children: f,
                      }),
                      (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t.u0Go2t),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    753583: function (e, t, i) {
      "use strict";
      i(47120);
      var s = i(200651),
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(418435),
        o = i.n(l),
        c = i(442837),
        d = i(481060),
        m = i(558324),
        u = i(367907),
        x = i(999382),
        g = i(626135),
        h = i(938502),
        p = i(296386),
        v = i(219369),
        f = i(981631),
        N = i(203377),
        b = i(388032),
        T = i(201221);
      let j = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
      t.Z = (e) => {
        var t;
        let { guild: i, guildMetadata: n, headerId: l } = e,
          [C, I] = a.useState(!1),
          S = (0, c.e7)([x.Z], () => "keywords" in x.Z.getErrors()),
          E = (e) => {
            if (j.test(e)) I(!1);
            else {
              I(!0);
              return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = n;
            !(t.length >= N.G7) && p.zH(i.id, o()([...t, e.toLowerCase()]));
          },
          _ = (e) => {
            E(e),
              g.default.track(f.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                tag: e,
                primary_category_id: n.primaryCategoryId,
                ...(0, u.hH)(i.id),
              });
          },
          y = C
            ? b.intl.string(b.t["t/mtnZ"])
            : S
              ? b.intl.format(b.t.loup7u, {
                  onLearnMoreClick: () => {
                    (0, v.lW)({
                      articleId: f.BhN.SERVER_DISCOVERY_GUIDELINES,
                      guildId: i.id,
                      modalStep: v.tK.TAGS,
                    });
                  },
                })
              : null,
          k = new Set(n.keywords);
        return (0, s.jsxs)("div", {
          className: T.container,
          children: [
            (0, s.jsxs)("div", {
              className: T.content,
              children: [
                (0, s.jsx)("div", { className: r()(T.stepImage, T.tagImage) }),
                (0, s.jsx)(d.Heading, {
                  variant: "heading-xl/semibold",
                  className: T.header,
                  id: l,
                  children: b.intl.string(b.t["0PJZXl"]),
                }),
                (0, s.jsx)(d.Text, {
                  color: "none",
                  variant: "text-md/normal",
                  className: T.headerCaption,
                  children: b.intl.string(b.t.MMEJFB),
                }),
              ],
            }),
            (0, s.jsxs)(d.FormSection, {
              className: T.form,
              children: [
                (0, s.jsx)(d.FormTitle, {
                  required: !0,
                  children: b.intl.string(b.t["0PJZXl"]),
                }),
                (0, s.jsx)(d.FormText, {
                  type: d.FormTextTypes.DESCRIPTION,
                  className: T.description,
                  children: b.intl.string(b.t.ztiTDA),
                }),
                (0, s.jsx)(m.Z, {
                  className: r()(T.tags, { [T.error]: null != y }),
                  tags: n.keywords,
                  onRemoveTag: (e) => {
                    if ((null == i ? void 0 : i.id) == null) return;
                    let t = [...n.keywords];
                    t.splice(e, 1), p.zH(i.id, t);
                  },
                  onAddTag: E,
                  maxTags: N.G7,
                  maxTaxLength: N._0,
                  placeholder:
                    (null == n
                      ? void 0
                      : null === (t = n.keywords) || void 0 === t
                        ? void 0
                        : t.length) === 0
                      ? b.intl.string(b.t.EL4Lho)
                      : "",
                }),
                (0, s.jsx)(d.Text, {
                  className: T.error,
                  color: "text-danger",
                  variant: "text-sm/normal",
                  children: y,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: T.form,
              children: (0, s.jsx)(d.FormTitle, {
                children: b.intl.string(b.t.sF28Oj),
              }),
            }),
            (0, s.jsx)("div", {
              className: T.tagContainer,
              children: (0, h.P5)(n.primaryCategoryId).map((e) =>
                (0, s.jsx)(
                  d.Anchor,
                  {
                    onClick: () => _(e),
                    className: r()(T.tag, { [T.usedTag]: k.has(e) }),
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
        a = i(192379),
        n = i(120356),
        r = i.n(n),
        l = i(481060),
        o = i(313201),
        c = i(388032),
        d = i(197368);
      let m = (e) => {
        let { index: t, title: i, selected: a } = e;
        return (0, s.jsxs)("div", {
          className: r()(d.overviewStep, { [d.selected]: a }),
          children: [
            (0, s.jsx)(l.Text, {
              className: d.stepIndex,
              variant: "text-sm/normal",
              children: t + 1,
            }),
            (0, s.jsx)(l.Text, {
              variant: "text-md/normal",
              className: d.stepTitle,
              children: i,
            }),
          ],
        });
      };
      t.Z = (e) => {
        let {
            className: t,
            title: i,
            stepData: n,
            transitionState: u,
            onClose: x,
            completeButtonText: g,
            overviewFooter: h,
            onNextPressed: p,
            onPrevPressed: v,
            onComplete: f,
            sequencerClassName: N,
            initialStep: b = 0,
            forceStep: T,
            submitting: j = !1,
            autoCloseOnComplete: C = !0,
          } = e,
          [I, S] = a.useState([]),
          [E, _] = a.useState(b),
          y = (0, o.Dt)();
        a.useEffect(() => {
          S([...Array(n.length).keys()]);
        }, [n.length]);
        let k = null != T ? T : E,
          R = n[k],
          F = 0 === k,
          A = k === n.length - 1,
          w = null != g ? g : c.intl.string(c.t.i4jeWV),
          D = a.useCallback(() => {
            null == v || v(), _(k - 1);
          }, [v, k, _]);
        return (0, s.jsxs)(l.ModalRoot, {
          size: l.ModalSize.MEDIUM,
          className: r()(d.container, t),
          transitionState: u,
          "aria-labelledby": y,
          children: [
            (0, s.jsxs)("div", {
              className: d.overviewSidebar,
              children: [
                (0, s.jsx)(l.Heading, {
                  id: y,
                  variant: "heading-xl/semibold",
                  className: d.header,
                  children: i,
                }),
                (0, s.jsx)("div", {
                  className: d.overviewSteps,
                  children: n.map((e, t) =>
                    (0, s.jsx)(
                      m,
                      { index: t, title: e.overviewTitle, selected: t === k },
                      t,
                    ),
                  ),
                }),
                h,
              ],
            }),
            (0, s.jsxs)("div", {
              className: d.modal,
              children: [
                (0, s.jsxs)(l.ModalContent, {
                  children: [
                    (0, s.jsx)(l.ModalCloseButton, {
                      focusProps: { offset: { top: 4, right: 4, left: 4 } },
                      onClick: x,
                      className: d.closeButton,
                    }),
                    (0, s.jsx)(l.Sequencer, {
                      step: k,
                      steps: I,
                      sideMargin: 24,
                      verticalMargin: 24,
                      className: r()(d.sequencer, N),
                      innerClassName: d.innerSequencer,
                      children: R.modalContent,
                    }),
                  ],
                }),
                (0, s.jsxs)(l.ModalFooter, {
                  className: d.footer,
                  children: [
                    (0, s.jsx)(l.Button, {
                      type: "submit",
                      submitting: j,
                      onClick: () => {
                        A ? (f(), C && x()) : (null == p || p(), _(k + 1));
                      },
                      color: l.Button.Colors.GREEN,
                      disabled: R.disableNextStep,
                      children: A ? w : c.intl.string(c.t.PDTjLC),
                    }),
                    F
                      ? null
                      : (0, s.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.PRIMARY,
                          size: l.Button.Sizes.MIN,
                          onClick: D,
                          children: c.intl.string(c.t["13/7kZ"]),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    201221: function (e, t, i) {
      "use strict";
      e.exports = {
        container: "container_dbc5a4",
        content: "content_dbc5a4",
        headerCaption: "headerCaption_dbc5a4",
        form: "form_dbc5a4",
        description: "description_dbc5a4",
        header: "header_dbc5a4",
        checkboxTitle: "checkboxTitle_dbc5a4",
        textArea: "textArea_dbc5a4",
        footerImage: "footerImage_dbc5a4",
        stepImage: "stepImage_dbc5a4",
        tags: "tags_dbc5a4",
        error: "error_dbc5a4",
        checkboxWrapper: "checkboxWrapper_dbc5a4",
        tagContainer: "tagContainer_dbc5a4",
        tag: "tag_dbc5a4",
        usedTag: "usedTag_dbc5a4",
        checkImage: "checkImage_dbc5a4",
        tagImage: "tagImage_dbc5a4",
        pencilImage: "pencilImage_dbc5a4",
      };
    },
    197368: function (e, t, i) {
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
//# sourceMappingURL=4b15fe7a3050cb1cd8a8.js.map
